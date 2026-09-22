/**
* @vue/shared v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function fi(A) {
  const e = /* @__PURE__ */ Object.create(null);
  for (const t of A.split(",")) e[t] = 1;
  return (t) => t in e;
}
const uA = {}, Bt = [], ve = () => {
}, ma = () => !1, Is = (A) => A.charCodeAt(0) === 111 && A.charCodeAt(1) === 110 && // uppercase letter
(A.charCodeAt(2) > 122 || A.charCodeAt(2) < 97), xs = (A) => A.startsWith("onUpdate:"), UA = Object.assign, gi = (A, e) => {
  const t = A.indexOf(e);
  t > -1 && A.splice(t, 1);
}, kc = Object.prototype.hasOwnProperty, tA = (A, e) => kc.call(A, e), P = Array.isArray, $e = (A) => vr(A) === "[object Map]", Kt = (A) => vr(A) === "[object Set]", Vi = (A) => vr(A) === "[object Date]", Z = (A) => typeof A == "function", hA = (A) => typeof A == "string", Ee = (A) => typeof A == "symbol", cA = (A) => A !== null && typeof A == "object", ya = (A) => (cA(A) || Z(A)) && Z(A.then) && Z(A.catch), Ha = Object.prototype.toString, vr = (A) => Ha.call(A), Nc = (A) => vr(A).slice(8, -1), Ls = (A) => vr(A) === "[object Object]", di = (A) => hA(A) && A !== "NaN" && A[0] !== "-" && "" + parseInt(A, 10) === A, rr = /* @__PURE__ */ fi(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), _s = (A) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (t) => e[t] || (e[t] = A(t));
}, Vc = /-\w/g, WA = _s(
  (A) => A.replace(Vc, (e) => e.slice(1).toUpperCase())
), Gc = /\B([A-Z])/g, zA = _s(
  (A) => A.replace(Gc, "-$1").toLowerCase()
), Ia = _s((A) => A.charAt(0).toUpperCase() + A.slice(1)), qs = _s(
  (A) => A ? `on${Ia(A)}` : ""
), Te = (A, e) => !Object.is(A, e), rs = (A, ...e) => {
  for (let t = 0; t < A.length; t++)
    A[t](...e);
}, xa = (A, e, t, r = !1) => {
  Object.defineProperty(A, e, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: t
  });
}, hi = (A) => {
  const e = parseFloat(A);
  return isNaN(e) ? A : e;
}, Gi = (A) => {
  const e = hA(A) ? Number(A) : NaN;
  return isNaN(e) ? A : e;
};
let Pi;
const Ks = () => Pi || (Pi = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function wi(A) {
  if (P(A)) {
    const e = {};
    for (let t = 0; t < A.length; t++) {
      const r = A[t], s = hA(r) ? Wc(r) : wi(r);
      if (s)
        for (const n in s)
          e[n] = s[n];
    }
    return e;
  } else if (hA(A) || cA(A))
    return A;
}
const Pc = /;(?![^(]*\))/g, Jc = /:([^]+)/, Xc = /"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;
function Wc(A) {
  const e = {};
  return A.replace(Xc, (t) => t.startsWith("/*") ? "" : t).split(Pc).forEach((t) => {
    if (t) {
      const r = t.split(Jc);
      r.length > 1 && (e[r[0].trim()] = r[1].trim());
    }
  }), e;
}
function nA(A) {
  let e = "";
  if (hA(A))
    e = A;
  else if (P(A))
    for (let t = 0; t < A.length; t++) {
      const r = nA(A[t]);
      r && (e += r + " ");
    }
  else if (cA(A))
    for (const t in A)
      A[t] && (e += t + " ");
  return e.trim();
}
const Yc = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Zc = /* @__PURE__ */ fi(Yc);
function La(A) {
  return !!A || A === "";
}
function jc(A, e, t) {
  if (A.length !== e.length) return !1;
  let r = !0;
  for (let s = 0; r && s < A.length; s++)
    r = Dt(A[s], e[s], t);
  return r;
}
function Ji(A, e, t) {
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
function zc(A, e, t) {
  let r = $e(A), s = $e(e);
  if (r || s || (r = Kt(A), s = Kt(e), r || s))
    return r && s ? Ji(A, e, t) : !1;
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
function Xi(A, e, t, r) {
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
  let r = Vi(A), s = Vi(e);
  return r || s ? r && s ? A.getTime() === e.getTime() : !1 : (r = Ee(A), s = Ee(e), r || s ? A === e : (r = P(A), s = P(e), r || s ? r && s ? Xi(A, e, t, jc) : !1 : (r = cA(A), s = cA(e), r || s ? !r || !s ? !1 : Xi(A, e, t, zc) : String(A) === String(e))));
}
function _a(A, e) {
  return A.findIndex((t) => Dt(t, e));
}
const Ka = (A) => !!(A && A.__v_isRef === !0), Q = (A) => hA(A) ? A : A == null ? "" : P(A) || cA(A) && (A.toString === Ha || !Z(A.toString)) ? Ka(A) ? Q(A.value) : JSON.stringify(A, Sa, 2) : String(A), Sa = (A, e) => Ka(e) ? Sa(A, e.value) : $e(e) ? {
  [`Map(${e.size})`]: [...e.entries()].reduce(
    (t, [r, s], n) => (t[$s(r, n) + " =>"] = s, t),
    {}
  )
} : Kt(e) ? {
  [`Set(${e.size})`]: [...e.values()].map((t) => $s(t))
} : Ee(e) ? $s(e) : cA(e) && !P(e) && !Ls(e) ? String(e) : e, $s = (A, e = "") => {
  var t;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Ee(A) ? `Symbol(${(t = A.description) != null ? t : e})` : A
  );
};
/**
* @vue/reactivity v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let _A;
class qc {
  // TODO isolatedDeclarations "__v_skip"
  constructor(e = !1) {
    this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !e && _A && (_A.active ? (this.parent = _A, this.index = (_A.scopes || (_A.scopes = [])).push(
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
      const t = _A;
      try {
        return _A = this, e();
      } finally {
        _A = t;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = _A, _A = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (_A === this)
        _A = this.prevScope;
      else {
        let e = _A;
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
function $c() {
  return _A;
}
let fA;
const An = /* @__PURE__ */ new WeakSet();
class Ta {
  constructor(e) {
    this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, _A && (_A.active ? _A.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, An.has(this) && (An.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Oa(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Wi(this), Ra(this);
    const e = fA, t = le;
    fA = this, le = !0;
    try {
      return this.fn();
    } finally {
      Ma(this), fA = e, le = t, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let e = this.deps; e; e = e.nextDep)
        Ci(e);
      this.deps = this.depsTail = void 0, Wi(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? An.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Kn(this) && this.run();
  }
  get dirty() {
    return Kn(this);
  }
}
let Da = 0, sr, nr;
function Oa(A, e = !1) {
  if (A.flags |= 8, e) {
    A.next = nr, nr = A;
    return;
  }
  A.next = sr, sr = A;
}
function pi() {
  Da++;
}
function Qi() {
  if (--Da > 0)
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
function Ra(A) {
  for (let e = A.deps; e; e = e.nextDep)
    e.version = -1, e.prevActiveLink = e.dep.activeLink, e.dep.activeLink = e;
}
function Ma(A) {
  let e, t = A.depsTail, r = t;
  for (; r; ) {
    const s = r.prevDep;
    r.version === -1 ? (r === t && (t = s), Ci(r), AB(r)) : e = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = s;
  }
  A.deps = e, A.depsTail = t;
}
function Kn(A) {
  for (let e = A.deps; e; e = e.nextDep)
    if (e.dep.version !== e.version || e.dep.computed && (ka(e.dep.computed) || e.dep.version !== e.version))
      return !0;
  return !!A._dirty;
}
function ka(A) {
  if (A.flags & 4 && !(A.flags & 16) || (A.flags &= -17, A.globalVersion === gr) || (A.globalVersion = gr, !A.isSSR && A.flags & 128 && (!A.deps && !A._dirty || !Kn(A))))
    return;
  A.flags |= 2;
  const e = A.dep, t = fA, r = le;
  fA = A, le = !0;
  try {
    Ra(A);
    const s = A.fn(A._value);
    (e.version === 0 || Te(s, A._value)) && (A.flags |= 128, A._value = s, e.version++);
  } catch (s) {
    throw e.version++, s;
  } finally {
    fA = t, le = r, Ma(A), A.flags &= -3;
  }
}
function Ci(A, e = !1) {
  const { dep: t, prevSub: r, nextSub: s } = A;
  if (r && (r.nextSub = s, A.prevSub = void 0), s && (s.prevSub = r, A.nextSub = void 0), t.subs === A && (t.subs = r, !r && t.computed)) {
    t.computed.flags &= -5;
    for (let n = t.computed.deps; n; n = n.nextDep)
      Ci(n, !0);
  }
  !e && !--t.sc && t.map && t.map.delete(t.key);
}
function AB(A) {
  const { prevDep: e, nextDep: t } = A;
  e && (e.nextDep = t, A.prevDep = void 0), t && (t.prevDep = e, A.nextDep = void 0);
}
let le = !0;
const Na = [];
function Me() {
  Na.push(le), le = !1;
}
function ke() {
  const A = Na.pop();
  le = A === void 0 ? !0 : A;
}
function Wi(A) {
  const { cleanup: e } = A;
  if (A.cleanup = void 0, e) {
    const t = fA;
    fA = void 0;
    try {
      e();
    } finally {
      fA = t;
    }
  }
}
let gr = 0;
class eB {
  constructor(e, t) {
    this.sub = e, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Va {
  // TODO isolatedDeclarations "__v_skip"
  constructor(e) {
    this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(e) {
    if (!fA || !le || fA === this.computed)
      return;
    let t = this.activeLink;
    if (t === void 0 || t.sub !== fA)
      t = this.activeLink = new eB(fA, this), fA.deps ? (t.prevDep = fA.depsTail, fA.depsTail.nextDep = t, fA.depsTail = t) : fA.deps = fA.depsTail = t, Ga(t);
    else if (t.version === -1 && (t.version = this.version, t.nextDep)) {
      const r = t.nextDep;
      r.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = r), t.prevDep = fA.depsTail, t.nextDep = void 0, fA.depsTail.nextDep = t, fA.depsTail = t, fA.deps === t && (fA.deps = r);
    }
    return t;
  }
  trigger(e) {
    this.version++, gr++, this.notify(e);
  }
  notify(e) {
    pi();
    try {
      for (let t = this.subs; t; t = t.prevSub)
        t.sub.notify() && t.sub.dep.notify();
    } finally {
      Qi();
    }
  }
}
function Ga(A) {
  if (A.dep.sc++, A.sub.flags & 4) {
    const e = A.dep.computed;
    if (e && !A.dep.subs) {
      e.flags |= 20;
      for (let r = e.deps; r; r = r.nextDep)
        Ga(r);
    }
    const t = A.dep.subs;
    t !== A && (A.prevSub = t, t && (t.nextSub = A)), A.dep.subs = A;
  }
}
const Sn = /* @__PURE__ */ new WeakMap(), gt = /* @__PURE__ */ Symbol(
  ""
), Tn = /* @__PURE__ */ Symbol(
  ""
), dr = /* @__PURE__ */ Symbol(
  ""
);
function OA(A, e, t) {
  if (le && fA) {
    let r = Sn.get(A);
    r || Sn.set(A, r = /* @__PURE__ */ new Map());
    let s = r.get(t);
    s || (r.set(t, s = new Va()), s.map = r, s.key = t), s.track();
  }
}
function De(A, e, t, r, s, n) {
  const i = Sn.get(A);
  if (!i) {
    gr++;
    return;
  }
  const o = (a) => {
    a && a.trigger();
  };
  if (pi(), e === "clear")
    i.forEach(o);
  else {
    const a = P(A), c = a && di(t);
    if (a && t === "length") {
      const l = Number(r);
      i.forEach((B, f) => {
        (f === "length" || f === dr || !Ee(f) && f >= l) && o(B);
      });
    } else
      switch ((t !== void 0 || i.has(void 0)) && o(i.get(t)), c && o(i.get(dr)), e) {
        case "add":
          a ? c && o(i.get("length")) : (o(i.get(gt)), $e(A) && o(i.get(Tn)));
          break;
        case "delete":
          a || (o(i.get(gt)), $e(A) && o(i.get(Tn)));
          break;
        case "set":
          $e(A) && o(i.get(gt));
          break;
      }
  }
  Qi();
}
function pt(A) {
  const e = /* @__PURE__ */ aA(A);
  return e === A || (OA(e, "iterate", dr), /* @__PURE__ */ ce(A)) ? e : /* @__PURE__ */ Ne(A) ? /* @__PURE__ */ At(A) ? e.map((t) => rt(me(t))) : e.map(rt) : e.map(me);
}
function Ss(A) {
  return OA(A = /* @__PURE__ */ aA(A), "iterate", dr), A;
}
function Ue(A, e) {
  return /* @__PURE__ */ Ne(A) ? rt(/* @__PURE__ */ At(A) ? me(e) : e) : me(e);
}
const tB = {
  __proto__: null,
  [Symbol.iterator]() {
    return en(this, Symbol.iterator, (A) => Ue(this, A));
  },
  concat(...A) {
    return pt(this).concat(
      ...A.map((e) => P(e) ? pt(e) : e)
    );
  },
  entries() {
    return en(this, "entries", (A) => (A[1] = Ue(this, A[1]), A));
  },
  every(A, e) {
    return xe(this, "every", A, e, void 0, arguments);
  },
  filter(A, e) {
    return xe(
      this,
      "filter",
      A,
      e,
      (t) => t.map((r) => Ue(this, r)),
      arguments
    );
  },
  find(A, e) {
    return xe(
      this,
      "find",
      A,
      e,
      (t) => Ue(this, t),
      arguments
    );
  },
  findIndex(A, e) {
    return xe(this, "findIndex", A, e, void 0, arguments);
  },
  findLast(A, e) {
    return xe(
      this,
      "findLast",
      A,
      e,
      (t) => Ue(this, t),
      arguments
    );
  },
  findLastIndex(A, e) {
    return xe(this, "findLastIndex", A, e, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(A, e) {
    return xe(this, "forEach", A, e, void 0, arguments);
  },
  includes(...A) {
    return tn(this, "includes", A);
  },
  indexOf(...A) {
    return tn(this, "indexOf", A);
  },
  join(A) {
    return pt(this).join(A);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...A) {
    return tn(this, "lastIndexOf", A);
  },
  map(A, e) {
    return xe(this, "map", A, e, void 0, arguments);
  },
  pop() {
    return kt(this, "pop");
  },
  push(...A) {
    return kt(this, "push", A);
  },
  reduce(A, ...e) {
    return Yi(this, "reduce", A, e);
  },
  reduceRight(A, ...e) {
    return Yi(this, "reduceRight", A, e);
  },
  shift() {
    return kt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(A, e) {
    return xe(this, "some", A, e, void 0, arguments);
  },
  splice(...A) {
    return kt(this, "splice", A);
  },
  toReversed() {
    return pt(this).toReversed();
  },
  toSorted(A) {
    return pt(this).toSorted(A);
  },
  toSpliced(...A) {
    return pt(this).toSpliced(...A);
  },
  unshift(...A) {
    return kt(this, "unshift", A);
  },
  values() {
    return en(this, "values", (A) => Ue(this, A));
  }
};
function en(A, e, t) {
  const r = Ss(A), s = r[e]();
  return r !== A && !/* @__PURE__ */ ce(A) && (s._next = s.next, s.next = () => {
    const n = s._next();
    return n.done || (n.value = t(n.value)), n;
  }), s;
}
const rB = Array.prototype;
function xe(A, e, t, r, s, n) {
  const i = Ss(A), o = i !== A && !/* @__PURE__ */ ce(A), a = i[e];
  if (a !== rB[e]) {
    const B = a.apply(A, n);
    return o ? me(B) : B;
  }
  let c = t;
  i !== A && (o ? c = function(B, f) {
    return t.call(this, Ue(A, B), f, A);
  } : t.length > 2 && (c = function(B, f) {
    return t.call(this, B, f, A);
  }));
  const l = a.call(i, c, r);
  return o && s ? s(l) : l;
}
function Yi(A, e, t, r) {
  const s = Ss(A), n = s !== A && !/* @__PURE__ */ ce(A);
  let i = t, o = !1;
  s !== A && (n ? (o = r.length === 0, i = function(c, l, B) {
    return o && (o = !1, c = Ue(A, c)), t.call(this, c, Ue(A, l), B, A);
  }) : t.length > 3 && (i = function(c, l, B) {
    return t.call(this, c, l, B, A);
  }));
  const a = s[e](i, ...r);
  return o ? Ue(A, a) : a;
}
function tn(A, e, t) {
  const r = /* @__PURE__ */ aA(A);
  OA(r, "iterate", dr);
  const s = r[e](...t);
  return (s === -1 || s === !1) && /* @__PURE__ */ bi(t[0]) ? (t[0] = /* @__PURE__ */ aA(t[0]), r[e](...t)) : s;
}
function kt(A, e, t = []) {
  Me(), pi();
  const r = (/* @__PURE__ */ aA(A))[e].apply(A, t);
  return Qi(), ke(), r;
}
const sB = /* @__PURE__ */ fi("__proto__,__v_isRef,__isVue"), Pa = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((A) => A !== "arguments" && A !== "caller").map((A) => Symbol[A]).filter(Ee)
);
function nB(A) {
  Ee(A) || (A = String(A));
  const e = /* @__PURE__ */ aA(this);
  return OA(e, "has", A), e.hasOwnProperty(A);
}
class Ja {
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
      return r === (s ? n ? dB : Za : n ? Ya : Wa).get(e) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(e) === Object.getPrototypeOf(r) ? e : void 0;
    const i = P(e);
    if (!s) {
      let a;
      if (i && (a = tB[t]))
        return a;
      if (t === "hasOwnProperty")
        return nB;
    }
    const o = Reflect.get(
      e,
      t,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ GA(e) ? e : r
    );
    if ((Ee(t) ? Pa.has(t) : sB(t)) || (s || OA(e, "get", t), n))
      return o;
    if (/* @__PURE__ */ GA(o)) {
      const a = i && di(t) ? o : o.value;
      return s && cA(a) ? /* @__PURE__ */ On(a) : a;
    }
    return cA(o) ? s ? /* @__PURE__ */ On(o) : /* @__PURE__ */ Fi(o) : o;
  }
}
class Xa extends Ja {
  constructor(e = !1) {
    super(!1, e);
  }
  set(e, t, r, s) {
    let n = e[t];
    const i = P(e) && di(t);
    if (!this._isShallow) {
      const c = /* @__PURE__ */ Ne(n);
      if (!/* @__PURE__ */ ce(r) && !/* @__PURE__ */ Ne(r) && (n = /* @__PURE__ */ aA(n), r = /* @__PURE__ */ aA(r)), !i && /* @__PURE__ */ GA(n) && !/* @__PURE__ */ GA(r))
        return c || (n.value = r), !0;
    }
    const o = i ? Number(t) < e.length : tA(e, t), a = Reflect.set(
      e,
      t,
      r,
      /* @__PURE__ */ GA(e) ? e : s
    );
    return e === /* @__PURE__ */ aA(s) && a && (o ? Te(r, n) && De(e, "set", t, r) : De(e, "add", t, r)), a;
  }
  deleteProperty(e, t) {
    const r = tA(e, t);
    e[t];
    const s = Reflect.deleteProperty(e, t);
    return s && r && De(e, "delete", t, void 0), s;
  }
  has(e, t) {
    const r = Reflect.has(e, t);
    return (!Ee(t) || !Pa.has(t)) && OA(e, "has", t), r;
  }
  ownKeys(e) {
    return OA(
      e,
      "iterate",
      P(e) ? "length" : gt
    ), Reflect.ownKeys(e);
  }
}
class iB extends Ja {
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
const oB = /* @__PURE__ */ new Xa(), aB = /* @__PURE__ */ new iB(), lB = /* @__PURE__ */ new Xa(!0);
const Dn = (A) => A, Ir = (A) => Reflect.getPrototypeOf(A);
function cB(A, e, t) {
  return function(...r) {
    const s = this.__v_raw, n = /* @__PURE__ */ aA(s), i = $e(n), o = A === "entries" || A === Symbol.iterator && i, a = A === "keys" && i, c = s[A](...r), l = t ? Dn : e ? rt : me;
    return !e && OA(
      n,
      "iterate",
      a ? Tn : gt
    ), UA(
      // inheriting all iterator properties
      Object.create(c),
      {
        // iterator protocol
        next() {
          const { value: B, done: f } = c.next();
          return f ? { value: B, done: f } : {
            value: o ? [l(B[0]), l(B[1])] : l(B),
            done: f
          };
        }
      }
    );
  };
}
function xr(A) {
  return function(...e) {
    return A === "delete" ? !1 : A === "clear" ? void 0 : this;
  };
}
function BB(A, e) {
  const t = {
    get(s) {
      const n = this.__v_raw, i = /* @__PURE__ */ aA(n), o = /* @__PURE__ */ aA(s);
      A || (Te(s, o) && OA(i, "get", s), OA(i, "get", o));
      const { has: a } = Ir(i), c = e ? Dn : A ? rt : me;
      if (a.call(i, s))
        return c(n.get(s));
      if (a.call(i, o))
        return c(n.get(o));
      n !== i && n.get(s);
    },
    get size() {
      const s = this.__v_raw;
      return !A && OA(/* @__PURE__ */ aA(s), "iterate", gt), s.size;
    },
    has(s) {
      const n = this.__v_raw, i = /* @__PURE__ */ aA(n), o = /* @__PURE__ */ aA(s);
      return A || (Te(s, o) && OA(i, "has", s), OA(i, "has", o)), s === o ? n.has(s) : n.has(s) || n.has(o);
    },
    forEach(s, n) {
      const i = this, o = i.__v_raw, a = /* @__PURE__ */ aA(o), c = e ? Dn : A ? rt : me;
      return !A && OA(a, "iterate", gt), o.forEach((l, B) => s.call(n, c(l), c(B), i));
    }
  };
  return UA(
    t,
    A ? {
      add: xr("add"),
      set: xr("set"),
      delete: xr("delete"),
      clear: xr("clear")
    } : {
      add(s) {
        const n = /* @__PURE__ */ aA(this), i = Ir(n), o = /* @__PURE__ */ aA(s), a = !e && !/* @__PURE__ */ ce(s) && !/* @__PURE__ */ Ne(s) ? o : s;
        return i.has.call(n, a) || Te(s, a) && i.has.call(n, s) || Te(o, a) && i.has.call(n, o) || (n.add(a), De(n, "add", a, a)), this;
      },
      set(s, n) {
        !e && !/* @__PURE__ */ ce(n) && !/* @__PURE__ */ Ne(n) && (n = /* @__PURE__ */ aA(n));
        const i = /* @__PURE__ */ aA(this), { has: o, get: a } = Ir(i);
        let c = o.call(i, s);
        c || (s = /* @__PURE__ */ aA(s), c = o.call(i, s));
        const l = a.call(i, s);
        return i.set(s, n), c ? Te(n, l) && De(i, "set", s, n) : De(i, "add", s, n), this;
      },
      delete(s) {
        const n = /* @__PURE__ */ aA(this), { has: i, get: o } = Ir(n);
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
    t[s] = cB(s, A, e);
  }), t;
}
function Ui(A, e) {
  const t = BB(A, e);
  return (r, s, n) => s === "__v_isReactive" ? !A : s === "__v_isReadonly" ? A : s === "__v_raw" ? r : Reflect.get(
    tA(t, s) && s in r ? t : r,
    s,
    n
  );
}
const uB = {
  get: /* @__PURE__ */ Ui(!1, !1)
}, fB = {
  get: /* @__PURE__ */ Ui(!1, !0)
}, gB = {
  get: /* @__PURE__ */ Ui(!0, !1)
};
const Wa = /* @__PURE__ */ new WeakMap(), Ya = /* @__PURE__ */ new WeakMap(), Za = /* @__PURE__ */ new WeakMap(), dB = /* @__PURE__ */ new WeakMap();
function hB(A) {
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
function Fi(A) {
  return /* @__PURE__ */ Ne(A) ? A : vi(
    A,
    !1,
    oB,
    uB,
    Wa
  );
}
// @__NO_SIDE_EFFECTS__
function wB(A) {
  return vi(
    A,
    !1,
    lB,
    fB,
    Ya
  );
}
// @__NO_SIDE_EFFECTS__
function On(A) {
  return vi(
    A,
    !0,
    aB,
    gB,
    Za
  );
}
function vi(A, e, t, r, s) {
  if (!cA(A) || A.__v_raw && !(e && A.__v_isReactive) || A.__v_skip || !Object.isExtensible(A))
    return A;
  const n = s.get(A);
  if (n)
    return n;
  const i = hB(Nc(A));
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
function bi(A) {
  return A ? !!A.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function aA(A) {
  const e = A && A.__v_raw;
  return e ? /* @__PURE__ */ aA(e) : A;
}
function pB(A) {
  return !tA(A, "__v_skip") && Object.isExtensible(A) && xa(A, "__v_skip", !0), A;
}
const me = (A) => cA(A) ? /* @__PURE__ */ Fi(A) : A, rt = (A) => cA(A) ? /* @__PURE__ */ On(A) : A;
// @__NO_SIDE_EFFECTS__
function GA(A) {
  return A ? A.__v_isRef === !0 : !1;
}
function ja(A) {
  return /* @__PURE__ */ GA(A) ? A.value : A;
}
const QB = {
  get: (A, e, t) => e === "__v_raw" ? A : ja(Reflect.get(A, e, t)),
  set: (A, e, t, r) => {
    const s = A[e];
    return /* @__PURE__ */ GA(s) && !/* @__PURE__ */ GA(t) ? (s.value = t, !0) : Reflect.set(A, e, t, r);
  }
};
function za(A) {
  return /* @__PURE__ */ At(A) ? A : new Proxy(A, QB);
}
class CB {
  constructor(e, t, r) {
    this.fn = e, this.setter = t, this._value = void 0, this.dep = new Va(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = gr - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    fA !== this)
      return Oa(this, !0), !0;
  }
  get value() {
    const e = this.dep.track();
    return ka(this), e && (e.version = this.dep.version), this._value;
  }
  set value(e) {
    this.setter && this.setter(e);
  }
}
// @__NO_SIDE_EFFECTS__
function UB(A, e, t = !1) {
  let r, s;
  return Z(A) ? r = A : (r = A.get, s = A.set), new CB(r, s, t);
}
const Lr = {}, Bs = /* @__PURE__ */ new WeakMap();
let at;
function FB(A, e = !1, t = at) {
  if (t) {
    let r = Bs.get(t);
    r || Bs.set(t, r = []), r.push(A);
  }
}
function vB(A, e, t = uA) {
  const { immediate: r, deep: s, once: n, scheduler: i, augmentJob: o, call: a } = t, c = (x) => s ? x : /* @__PURE__ */ ce(x) || s === !1 || s === 0 ? Oe(x, 1) : Oe(x);
  let l, B, f, w, U = !1, F = !1;
  if (/* @__PURE__ */ GA(A) ? (B = () => A.value, U = /* @__PURE__ */ ce(A)) : /* @__PURE__ */ At(A) ? (B = () => c(A), U = !0) : P(A) ? (F = !0, U = A.some((x) => /* @__PURE__ */ At(x) || /* @__PURE__ */ ce(x)), B = () => A.map((x) => {
    if (/* @__PURE__ */ GA(x))
      return x.value;
    if (/* @__PURE__ */ At(x))
      return c(x);
    if (Z(x))
      return a ? a(x, 2) : x();
  })) : Z(A) ? e ? B = a ? () => a(A, 2) : A : B = () => {
    if (f) {
      Me();
      try {
        f();
      } finally {
        ke();
      }
    }
    const x = at;
    at = l;
    try {
      return a ? a(A, 3, [w]) : A(w);
    } finally {
      at = x;
    }
  } : B = ve, e && s) {
    const x = B, O = s === !0 ? 1 / 0 : s;
    B = () => Oe(x(), O);
  }
  const h = $c(), b = () => {
    l.stop(), h && h.active && gi(h.effects, l);
  };
  if (n && e) {
    const x = e;
    e = (...O) => {
      const L = x(...O);
      return b(), L;
    };
  }
  let m = F ? new Array(A.length).fill(Lr) : Lr;
  const k = (x) => {
    if (!(!(l.flags & 1) || !l.dirty && !x))
      if (e) {
        const O = l.run();
        if (x || s || U || (F ? O.some((L, X) => Te(L, m[X])) : Te(O, m))) {
          f && f();
          const L = at;
          at = l;
          try {
            const X = [
              O,
              // pass undefined as the old value when it's changed for the first time
              m === Lr ? void 0 : F && m[0] === Lr ? [] : m,
              w
            ];
            m = O, a ? a(e, 3, X) : (
              // @ts-expect-error
              e(...X)
            );
          } finally {
            at = L;
          }
        }
      } else
        l.run();
  };
  return o && o(k), l = new Ta(B), l.scheduler = i ? () => i(k, !1) : k, w = (x) => FB(x, !1, l), f = l.onStop = () => {
    const x = Bs.get(l);
    if (x) {
      if (a)
        a(x, 4);
      else
        for (const O of x) O();
      Bs.delete(l);
    }
  }, e ? r ? k(!0) : m = l.run() : i ? i(k.bind(null, !0), !0) : l.run(), b.pause = l.pause.bind(l), b.resume = l.resume.bind(l), b.stop = b, b;
}
function Oe(A, e = 1 / 0, t) {
  if (e <= 0 || !cA(A) || A.__v_skip || (t = t || /* @__PURE__ */ new Map(), (t.get(A) || 0) >= e))
    return A;
  if (t.set(A, e), e--, /* @__PURE__ */ GA(A))
    Oe(A.value, e, t);
  else if (P(A))
    for (let r = 0; r < A.length; r++)
      Oe(A[r], e, t);
  else if (Kt(A) || $e(A))
    A.forEach((r) => {
      Oe(r, e, t);
    });
  else if (Ls(A)) {
    for (const r in A)
      Oe(A[r], e, t);
    for (const r of Object.getOwnPropertySymbols(A))
      Object.prototype.propertyIsEnumerable.call(A, r) && Oe(A[r], e, t);
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
    Ts(s, e, t);
  }
}
function ue(A, e, t, r) {
  if (Z(A)) {
    const s = br(A, e, t, r);
    return s && ya(s) && s.catch((n) => {
      Ts(n, e, t);
    }), s;
  }
  if (P(A)) {
    const s = [];
    for (let n = 0; n < A.length; n++)
      s.push(ue(A[n], e, t, r));
    return s;
  }
}
function Ts(A, e, t, r = !0) {
  const s = e ? e.vnode : null, { errorHandler: n, throwUnhandledErrorInProduction: i } = e && e.appContext.config || uA;
  if (e) {
    let o = e.parent;
    const a = e.proxy, c = `https://vuejs.org/error-reference/#runtime-${t}`;
    for (; o; ) {
      const l = o.ec;
      if (l) {
        for (let B = 0; B < l.length; B++)
          if (l[B](A, a, c) === !1)
            return;
      }
      o = o.parent;
    }
    if (n) {
      Me(), br(n, null, 10, [
        A,
        a,
        c
      ]), ke();
      return;
    }
  }
  bB(A, t, s, r, i);
}
function bB(A, e, t, r = !0, s = !1) {
  if (s)
    throw A;
  console.error(A);
}
const NA = [];
let Ce = -1;
const xt = [];
let Ye = null, mt = 0;
const qa = /* @__PURE__ */ Promise.resolve();
let us = null;
function $a(A) {
  const e = us || qa;
  return A ? e.then(this ? A.bind(this) : A) : e;
}
function EB(A) {
  let e = Ce + 1, t = NA.length;
  for (; e < t; ) {
    const r = e + t >>> 1, s = NA[r], n = hr(s);
    n < A || n === A && s.flags & 2 ? e = r + 1 : t = r;
  }
  return e;
}
function Ei(A) {
  if (!(A.flags & 1)) {
    const e = hr(A), t = NA[NA.length - 1];
    !t || // fast path when the job id is larger than the tail
    !(A.flags & 2) && e >= hr(t) ? NA.push(A) : NA.splice(EB(e), 0, A), A.flags |= 1, Al();
  }
}
function Al() {
  us || (us = qa.then(tl));
}
function mB(A) {
  if (!P(A))
    Ye && A.id === -1 ? Ye.splice(mt + 1, 0, A) : A.flags & 1 || (xt.push(A), A.flags |= 1);
  else
    for (let e = 0; e < A.length; e++)
      xt.push(A[e]);
  Al();
}
function Zi(A, e, t = Ce + 1) {
  for (; t < NA.length; t++) {
    const r = NA[t];
    if (r && r.flags & 2) {
      if (A && r.id !== A.uid)
        continue;
      NA.splice(t, 1), t--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function el(A) {
  if (xt.length) {
    const e = [...new Set(xt)].sort(
      (t, r) => hr(t) - hr(r)
    );
    if (xt.length = 0, Ye) {
      for (let t = 0; t < e.length; t++)
        Ye.push(e[t]);
      return;
    }
    for (Ye = e, mt = 0; mt < Ye.length; mt++) {
      const t = Ye[mt];
      t.flags & 4 && (t.flags &= -2), t.flags & 8 || t(), t.flags &= -2;
    }
    Ye = null, mt = 0;
  }
}
const hr = (A) => A.id == null ? A.flags & 2 ? -1 : 1 / 0 : A.id;
function tl(A) {
  try {
    for (Ce = 0; Ce < NA.length; Ce++) {
      const e = NA[Ce];
      e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), br(
        e,
        e.i,
        e.i ? 15 : 14
      ), e.flags & 4 || (e.flags &= -2));
    }
  } finally {
    for (; Ce < NA.length; Ce++) {
      const e = NA[Ce];
      e && (e.flags &= -2);
    }
    Ce = -1, NA.length = 0, el(), us = null, (NA.length || xt.length) && tl();
  }
}
let re = null, rl = null;
function fs(A) {
  const e = re;
  return re = A, rl = A && A.type.__scopeId || null, e;
}
function yB(A, e = re, t) {
  if (!e || A._n)
    return A;
  const r = (...s) => {
    r._d && io(-1);
    const n = fs(e), i = dt.length;
    let o;
    try {
      o = A(...s);
    } finally {
      for (let a = dt.length; a > i; a--) yl();
      fs(n), r._d && io(1);
    }
    return o;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function xA(A, e) {
  if (re === null)
    return A;
  const t = ks(re), r = A.dirs || (A.dirs = []);
  for (let s = 0; s < e.length; s++) {
    let [n, i, o, a = uA] = e[s];
    n && (Z(n) && (n = {
      mounted: n,
      updated: n
    }), n.deep && Oe(i), r.push({
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
    ]), ke());
  }
}
function HB(A, e) {
  if (VA) {
    let t = VA.provides;
    const r = VA.parent && VA.parent.provides;
    r === t && (t = VA.provides = Object.create(r)), t[A] = e;
  }
}
function ss(A, e, t = !1) {
  const r = yu();
  if (r || Lt) {
    let s = Lt ? Lt._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (s && A in s)
      return s[A];
    if (arguments.length > 1)
      return t && Z(e) ? e.call(r && r.proxy) : e;
  }
}
const IB = /* @__PURE__ */ Symbol.for("v-scx"), xB = () => ss(IB);
function rn(A, e, t) {
  return sl(A, e, t);
}
function sl(A, e, t = uA) {
  const { immediate: r, deep: s, flush: n, once: i } = t, o = UA({}, t), a = e && r || !e && n !== "post";
  let c;
  if (Qr) {
    if (n === "sync") {
      const w = xB();
      c = w.__watcherHandles || (w.__watcherHandles = []);
    } else if (!a) {
      const w = () => {
      };
      return w.stop = ve, w.resume = ve, w.pause = ve, w;
    }
  }
  const l = VA;
  o.call = (w, U, F) => ue(w, l, U, F);
  let B = !1;
  n === "post" ? o.scheduler = (w) => {
    PA(w, l && l.suspense);
  } : n !== "sync" && (B = !0, o.scheduler = (w, U) => {
    U ? w() : Ei(w);
  }), o.augmentJob = (w) => {
    e && (w.flags |= 4), B && (w.flags |= 2, l && (w.id = l.uid, w.i = l));
  };
  const f = vB(A, e, o);
  return Qr && (c ? c.push(f) : a && f()), f;
}
function LB(A, e, t) {
  const r = this.proxy, s = hA(A) ? A.includes(".") ? nl(r, A) : () => r[A] : A.bind(r, r);
  let n;
  Z(e) ? n = e : (n = e.handler, t = e);
  const i = Er(this), o = sl(s, n.bind(r), t);
  return i(), o;
}
function nl(A, e) {
  const t = e.split(".");
  return () => {
    let r = A;
    for (let s = 0; s < t.length && r; s++)
      r = r[t[s]];
    return r;
  };
}
const _B = /* @__PURE__ */ Symbol("_vte"), Ds = (A) => A.__isTeleport, sn = /* @__PURE__ */ Symbol("_leaveCb");
function KB(A) {
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
function il(A) {
  if (!yi(A))
    return Ds(A.type) && A.children ? KB(A.children) : A;
  if (A.component)
    return A.component.subTree;
  const { shapeFlag: e, children: t } = A;
  if (t) {
    if (e & 16)
      return t[0];
    if (e & 32 && Z(t.default))
      return t.default();
  }
}
function mi(A, e) {
  if (A.shapeFlag & 6 && A.component) {
    A.transition = e;
    const t = A.component.subTree;
    mi(
      Ds(t.type) && il(t) || t,
      e
    );
  } else A.shapeFlag & 128 ? (A.ssContent.transition = e.clone(A.ssContent), A.ssFallback.transition = e.clone(A.ssFallback)) : A.transition = e;
}
// @__NO_SIDE_EFFECTS__
function SB(A, e) {
  return Z(A) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    UA({ name: A.name }, e, { setup: A })
  ) : A;
}
function ol(A) {
  A.ids = [A.ids[0] + A.ids[2]++ + "-", 0, 0];
}
function ji(A, e) {
  let t;
  return !!((t = Object.getOwnPropertyDescriptor(A, e)) && !t.configurable);
}
const gs = /* @__PURE__ */ new WeakMap();
function ir(A, e, t, r, s = !1) {
  if (P(A)) {
    A.forEach(
      (F, h) => ir(
        F,
        e && (P(e) ? e[h] : e),
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
  const n = r.shapeFlag & 4 ? ks(r.component) : r.el, i = s ? null : n, { i: o, r: a } = A, c = e && e.r, l = o.refs === uA ? o.refs = {} : o.refs, B = o.setupState, f = /* @__PURE__ */ aA(B), w = B === uA ? ma : (F) => ji(l, F) ? !1 : tA(f, F), U = (F, h) => !(h && ji(l, h));
  if (c != null && c !== a) {
    if (zi(e), hA(c))
      l[c] = null, w(c) && (B[c] = null);
    else if (/* @__PURE__ */ GA(c)) {
      const F = e;
      U(c, F.k) && (c.value = null), F.k && (l[F.k] = null);
    }
  }
  if (Z(a))
    br(a, o, 12, [i, l]);
  else {
    const F = hA(a), h = /* @__PURE__ */ GA(a);
    if (F || h) {
      const b = () => {
        if (A.f) {
          const m = F ? w(a) ? B[a] : l[a] : U() || !A.k ? a.value : l[A.k];
          if (s)
            P(m) && gi(m, n);
          else if (P(m))
            m.includes(n) || m.push(n);
          else if (F)
            l[a] = [n], w(a) && (B[a] = l[a]);
          else {
            const k = [n];
            U(a, A.k) && (a.value = k), A.k && (l[A.k] = k);
          }
        } else F ? (l[a] = i, w(a) && (B[a] = i)) : h && (U(a, A.k) && (a.value = i), A.k && (l[A.k] = i));
      };
      if (i) {
        const m = () => {
          b(), gs.delete(A);
        };
        m.id = -1, gs.set(A, m), PA(m, t);
      } else
        zi(A), b();
    }
  }
}
function zi(A) {
  const e = gs.get(A);
  e && (e.flags |= 8, gs.delete(A));
}
Ks().requestIdleCallback;
Ks().cancelIdleCallback;
const or = (A) => !!A.type.__asyncLoader, yi = (A) => A.type.__isKeepAlive;
function TB(A, e) {
  al(A, "a", e);
}
function DB(A, e) {
  al(A, "da", e);
}
function al(A, e, t = VA) {
  const r = A.__wdc || (A.__wdc = () => {
    let s = t;
    for (; s; ) {
      if (s.isDeactivated)
        return;
      s = s.parent;
    }
    return A();
  });
  if (Os(e, r, t), t) {
    let s = t.parent;
    for (; s && s.parent; )
      yi(s.parent.vnode) && OB(r, e, t, s), s = s.parent;
  }
}
function OB(A, e, t, r) {
  const s = Os(
    e,
    A,
    r,
    !0
    /* prepend */
  );
  ll(() => {
    gi(r[e], s);
  }, t);
}
function Os(A, e, t = VA, r = !1) {
  if (t) {
    const s = t[A] || (t[A] = []), n = e.__weh || (e.__weh = (...i) => {
      Me();
      const o = Er(t), a = ue(e, t, A, i);
      return o(), ke(), a;
    });
    return r ? s.unshift(n) : s.push(n), n;
  }
}
const Pe = (A) => (e, t = VA) => {
  (!Qr || A === "sp") && Os(A, (...r) => e(...r), t);
}, RB = Pe("bm"), MB = Pe("m"), kB = Pe(
  "bu"
), NB = Pe("u"), VB = Pe(
  "bum"
), ll = Pe("um"), GB = Pe(
  "sp"
), PB = Pe("rtg"), JB = Pe("rtc");
function XB(A, e = VA) {
  Os("ec", A, e);
}
const WB = /* @__PURE__ */ Symbol.for("v-ndc");
function wA(A, e, t, r) {
  let s;
  const n = t, i = P(A);
  if (i || hA(A)) {
    const o = i && /* @__PURE__ */ At(A);
    let a = !1, c = !1;
    o && (a = !/* @__PURE__ */ ce(A), c = /* @__PURE__ */ Ne(A), A = Ss(A)), s = new Array(A.length);
    for (let l = 0, B = A.length; l < B; l++)
      s[l] = e(
        a ? c ? rt(me(A[l])) : me(A[l]) : A[l],
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
const Rn = (A) => A ? Ll(A) ? ks(A) : Rn(A.parent) : null, ar = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ UA(/* @__PURE__ */ Object.create(null), {
    $: (A) => A,
    $el: (A) => A.vnode.el,
    $data: (A) => A.data,
    $props: (A) => A.props,
    $attrs: (A) => A.attrs,
    $slots: (A) => A.slots,
    $refs: (A) => A.refs,
    $parent: (A) => Rn(A.parent),
    $root: (A) => Rn(A.root),
    $host: (A) => A.ce,
    $emit: (A) => A.emit,
    $options: (A) => Bl(A),
    $forceUpdate: (A) => A.f || (A.f = () => {
      Ei(A.update);
    }),
    $nextTick: (A) => A.n || (A.n = $a.bind(A.proxy)),
    $watch: (A) => LB.bind(A)
  })
), nn = (A, e) => A !== uA && !A.__isScriptSetup && tA(A, e), YB = {
  get({ _: A }, e) {
    if (e === "__v_skip")
      return !0;
    const { ctx: t, setupState: r, data: s, props: n, accessCache: i, type: o, appContext: a } = A;
    if (e[0] !== "$") {
      const f = i[e];
      if (f !== void 0)
        switch (f) {
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
        if (nn(r, e))
          return i[e] = 1, r[e];
        if (s !== uA && tA(s, e))
          return i[e] = 2, s[e];
        if (tA(n, e))
          return i[e] = 3, n[e];
        if (t !== uA && tA(t, e))
          return i[e] = 4, t[e];
        Mn && (i[e] = 0);
      }
    }
    const c = ar[e];
    let l, B;
    if (c)
      return e === "$attrs" && OA(A.attrs, "get", ""), c(A);
    if (
      // css module (injected by vue-loader)
      (l = o.__cssModules) && (l = l[e])
    )
      return l;
    if (t !== uA && tA(t, e))
      return i[e] = 4, t[e];
    if (
      // global properties
      B = a.config.globalProperties, tA(B, e)
    )
      return B[e];
  },
  set({ _: A }, e, t) {
    const { data: r, setupState: s, ctx: n } = A;
    return nn(s, e) ? (s[e] = t, !0) : r !== uA && tA(r, e) ? (r[e] = t, !0) : tA(A.props, e) || e[0] === "$" && e.slice(1) in A ? !1 : (n[e] = t, !0);
  },
  has({
    _: { data: A, setupState: e, accessCache: t, ctx: r, appContext: s, props: n, type: i }
  }, o) {
    let a;
    return !!(t[o] || A !== uA && o[0] !== "$" && tA(A, o) || nn(e, o) || tA(n, o) || tA(r, o) || tA(ar, o) || tA(s.config.globalProperties, o) || (a = i.__cssModules) && a[o]);
  },
  defineProperty(A, e, t) {
    return t.get != null ? A._.accessCache[e] = 0 : tA(t, "value") && this.set(A, e, t.value, null), Reflect.defineProperty(A, e, t);
  }
};
function qi(A) {
  return P(A) ? A.reduce(
    (e, t) => (e[t] = null, e),
    {}
  ) : A;
}
let Mn = !0;
function ZB(A) {
  const e = Bl(A), t = A.proxy, r = A.ctx;
  Mn = !1, e.beforeCreate && $i(e.beforeCreate, A, "bc");
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
    beforeMount: B,
    mounted: f,
    beforeUpdate: w,
    updated: U,
    activated: F,
    deactivated: h,
    beforeDestroy: b,
    beforeUnmount: m,
    destroyed: k,
    unmounted: x,
    render: O,
    renderTracked: L,
    renderTriggered: X,
    errorCaptured: W,
    serverPrefetch: V,
    // public API
    expose: iA,
    inheritAttrs: FA,
    // assets
    components: yA,
    directives: AA,
    filters: pA
  } = e;
  if (c && jB(c, r, null), i)
    for (const z in i) {
      const $ = i[z];
      Z($) && (r[z] = $.bind(t));
    }
  if (s) {
    const z = s.call(t, t);
    cA(z) && (A.data = /* @__PURE__ */ Fi(z));
  }
  if (Mn = !0, n)
    for (const z in n) {
      const $ = n[z], HA = Z($) ? $.bind(t, t) : Z($.get) ? $.get.bind(t, t) : ve, YA = !Z($) && Z($.set) ? $.set.bind(t) : ve, RA = Ku({
        get: HA,
        set: YA
      });
      Object.defineProperty(r, z, {
        enumerable: !0,
        configurable: !0,
        get: () => RA.value,
        set: (EA) => RA.value = EA
      });
    }
  if (o)
    for (const z in o)
      cl(o[z], r, t, z);
  if (a) {
    const z = Z(a) ? a.call(t) : a;
    Reflect.ownKeys(z).forEach(($) => {
      HB($, z[$]);
    });
  }
  l && $i(l, A, "c");
  function rA(z, $) {
    P($) ? $.forEach((HA) => z(HA.bind(t))) : $ && z($.bind(t));
  }
  if (rA(RB, B), rA(MB, f), rA(kB, w), rA(NB, U), rA(TB, F), rA(DB, h), rA(XB, W), rA(JB, L), rA(PB, X), rA(VB, m), rA(ll, x), rA(GB, V), P(iA))
    if (iA.length) {
      const z = A.exposed || (A.exposed = {});
      iA.forEach(($) => {
        Object.defineProperty(z, $, {
          get: () => t[$],
          set: (HA) => t[$] = HA,
          enumerable: !0
        });
      });
    } else A.exposed || (A.exposed = {});
  O && A.render === ve && (A.render = O), FA != null && (A.inheritAttrs = FA), yA && (A.components = yA), AA && (A.directives = AA), V && ol(A);
}
function jB(A, e, t = ve) {
  P(A) && (A = kn(A));
  for (const r in A) {
    const s = A[r];
    let n;
    cA(s) ? "default" in s ? n = ss(
      s.from || r,
      s.default,
      !0
    ) : n = ss(s.from || r) : n = ss(s), /* @__PURE__ */ GA(n) ? Object.defineProperty(e, r, {
      enumerable: !0,
      configurable: !0,
      get: () => n.value,
      set: (i) => n.value = i
    }) : e[r] = n;
  }
}
function $i(A, e, t) {
  ue(
    P(A) ? A.map((r) => r.bind(e.proxy)) : A.bind(e.proxy),
    e,
    t
  );
}
function cl(A, e, t, r) {
  let s = r.includes(".") ? nl(t, r) : () => t[r];
  if (hA(A)) {
    const n = e[A];
    Z(n) && rn(s, n);
  } else if (Z(A))
    rn(s, A.bind(t));
  else if (cA(A))
    if (P(A))
      A.forEach((n) => cl(n, e, t, r));
    else {
      const n = Z(A.handler) ? A.handler.bind(t) : e[A.handler];
      Z(n) && rn(s, n, A);
    }
}
function Bl(A) {
  const e = A.type, { mixins: t, extends: r } = e, {
    mixins: s,
    optionsCache: n,
    config: { optionMergeStrategies: i }
  } = A.appContext, o = n.get(e);
  let a;
  return o ? a = o : !s.length && !t && !r ? a = e : (a = {}, s.length && s.forEach(
    (c) => ds(a, c, i, !0)
  ), ds(a, e, i)), cA(e) && n.set(e, a), a;
}
function ds(A, e, t, r = !1) {
  const { mixins: s, extends: n } = e;
  n && ds(A, n, t, !0), s && s.forEach(
    (i) => ds(A, i, t, !0)
  );
  for (const i in e)
    if (!(r && i === "expose")) {
      const o = zB[i] || t && t[i];
      A[i] = o ? o(A[i], e[i]) : e[i];
    }
  return A;
}
const zB = {
  data: Ao,
  props: eo,
  emits: eo,
  // objects
  methods: Wt,
  computed: Wt,
  // lifecycle
  beforeCreate: MA,
  created: MA,
  beforeMount: MA,
  mounted: MA,
  beforeUpdate: MA,
  updated: MA,
  beforeDestroy: MA,
  beforeUnmount: MA,
  destroyed: MA,
  unmounted: MA,
  activated: MA,
  deactivated: MA,
  errorCaptured: MA,
  serverPrefetch: MA,
  // assets
  components: Wt,
  directives: Wt,
  // watch
  watch: $B,
  // provide / inject
  provide: Ao,
  inject: qB
};
function Ao(A, e) {
  return e ? A ? function() {
    return UA(
      Z(A) ? A.call(this, this) : A,
      Z(e) ? e.call(this, this) : e
    );
  } : e : A;
}
function qB(A, e) {
  return Wt(kn(A), kn(e));
}
function kn(A) {
  if (P(A)) {
    const e = {};
    for (let t = 0; t < A.length; t++)
      e[A[t]] = A[t];
    return e;
  }
  return A;
}
function MA(A, e) {
  return A ? [...new Set([].concat(A, e))] : e;
}
function Wt(A, e) {
  return A ? UA(/* @__PURE__ */ Object.create(null), A, e) : e;
}
function eo(A, e) {
  return A ? P(A) && P(e) ? [.../* @__PURE__ */ new Set([...A, ...e])] : UA(
    /* @__PURE__ */ Object.create(null),
    qi(A),
    qi(e ?? {})
  ) : e;
}
function $B(A, e) {
  if (!A) return e;
  if (!e) return A;
  const t = UA(/* @__PURE__ */ Object.create(null), A);
  for (const r in e)
    t[r] = MA(A[r], e[r]);
  return t;
}
function ul() {
  return {
    app: null,
    config: {
      isNativeTag: ma,
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
let Au = 0;
function eu(A, e) {
  return function(r, s = null) {
    Z(r) || (r = UA({}, r)), s != null && !cA(s) && (s = null);
    const n = ul(), i = /* @__PURE__ */ new WeakSet(), o = [];
    let a = !1;
    const c = n.app = {
      _uid: Au++,
      _component: r,
      _props: s,
      _container: null,
      _context: n,
      _instance: null,
      version: Su,
      get config() {
        return n.config;
      },
      set config(l) {
      },
      use(l, ...B) {
        return i.has(l) || (l && Z(l.install) ? (i.add(l), l.install(c, ...B)) : Z(l) && (i.add(l), l(c, ...B))), c;
      },
      mixin(l) {
        return n.mixins.includes(l) || n.mixins.push(l), c;
      },
      component(l, B) {
        return B ? (n.components[l] = B, c) : n.components[l];
      },
      directive(l, B) {
        return B ? (n.directives[l] = B, c) : n.directives[l];
      },
      mount(l, B, f) {
        if (!a) {
          const w = c._ceVNode || be(r, s);
          return w.appContext = n, f === !0 ? f = "svg" : f === !1 && (f = void 0), A(w, l, f), a = !0, c._container = l, l.__vue_app__ = c, ks(w.component);
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
      provide(l, B) {
        return n.provides[l] = B, c;
      },
      runWithContext(l) {
        const B = Lt;
        Lt = c;
        try {
          return l();
        } finally {
          Lt = B;
        }
      }
    };
    return c;
  };
}
let Lt = null;
const tu = (A, e) => e === "modelValue" || e === "model-value" ? A.modelModifiers : A[`${e}Modifiers`] || A[`${WA(e)}Modifiers`] || A[`${zA(e)}Modifiers`];
function ru(A, e, ...t) {
  if (A.isUnmounted) return;
  const r = A.vnode.props || uA;
  let s = t;
  const n = e.startsWith("update:"), i = n && tu(r, e.slice(7));
  i && (i.trim && (s = t.map((l) => hA(l) ? l.trim() : l)), i.number && (s = s.map(hi)));
  let o, a = r[o = qs(e)] || // also try camelCase event handler (#2249)
  r[o = qs(WA(e))];
  !a && n && (a = r[o = qs(zA(e))]), a && ue(
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
const su = /* @__PURE__ */ new WeakMap();
function fl(A, e, t = !1) {
  const r = t ? su : e.emitsCache, s = r.get(A);
  if (s !== void 0)
    return s;
  const n = A.emits;
  let i = {}, o = !1;
  if (!Z(A)) {
    const a = (c) => {
      const l = fl(c, e, !0);
      l && (o = !0, UA(i, l));
    };
    !t && e.mixins.length && e.mixins.forEach(a), A.extends && a(A.extends), A.mixins && A.mixins.forEach(a);
  }
  return !n && !o ? (cA(A) && r.set(A, null), null) : (P(n) ? n.forEach((a) => i[a] = null) : UA(i, n), cA(A) && r.set(A, i), i);
}
function Rs(A, e) {
  return !A || !Is(e) ? !1 : (e = e.slice(2), e = e === "Once" ? e : e.replace(/Once$/, ""), tA(A, e[0].toLowerCase() + e.slice(1)) || tA(A, zA(e)) || tA(A, e));
}
function to(A) {
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
    props: B,
    data: f,
    setupState: w,
    ctx: U,
    inheritAttrs: F
  } = A, h = fs(A);
  let b, m;
  try {
    if (t.shapeFlag & 4) {
      const x = s || r, O = x;
      b = Fe(
        c.call(
          O,
          x,
          l,
          B,
          w,
          f,
          U
        )
      ), m = o;
    } else {
      const x = e;
      b = Fe(
        x.length > 1 ? x(
          B,
          { attrs: o, slots: i, emit: a }
        ) : x(
          B,
          null
        )
      ), m = e.props ? o : nu(o);
    }
  } catch (x) {
    dt.length = 0, Ts(x, A, 1), b = be(Ve);
  }
  let k = b;
  if (m && F !== !1) {
    const x = Object.keys(m), { shapeFlag: O } = k;
    x.length && O & 7 && (n && x.some(xs) && (m = iu(
      m,
      n
    )), k = St(k, m, !1, !0));
  }
  if (t.dirs && (k = St(k, null, !1, !0), k.dirs = k.dirs ? k.dirs.concat(t.dirs) : t.dirs), t.transition) {
    const x = Ds(k.type) && il(k) || k;
    mi(x, t.transition);
  }
  return b = k, fs(h), b;
}
const nu = (A) => {
  let e;
  for (const t in A)
    (t === "class" || t === "style" || Is(t)) && ((e || (e = {}))[t] = A[t]);
  return e;
}, iu = (A, e) => {
  const t = {};
  for (const r in A)
    (!xs(r) || !(r.slice(9) in e)) && (t[r] = A[r]);
  return t;
};
function ou(A, e, t) {
  const { props: r, children: s, component: n } = A, { props: i, children: o, patchFlag: a } = e, c = n.emitsOptions;
  if (e.dirs || e.transition)
    return !0;
  if (t && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return r ? ro(r, i, c) : !!i;
    if (a & 8) {
      const l = e.dynamicProps;
      for (let B = 0; B < l.length; B++) {
        const f = l[B];
        if (gl(i, r, f) && !Rs(c, f))
          return !0;
      }
    }
  } else
    return (s || o) && (!o || !o.$stable) ? !0 : r === i ? !1 : r ? i ? ro(r, i, c) : !0 : !!i;
  return !1;
}
function ro(A, e, t) {
  const r = Object.keys(e);
  if (r.length !== Object.keys(A).length)
    return !0;
  for (let s = 0; s < r.length; s++) {
    const n = r[s];
    if (gl(e, A, n) && !Rs(t, n))
      return !0;
  }
  return !1;
}
function gl(A, e, t) {
  const r = A[t], s = e[t];
  return t === "style" && cA(r) && cA(s) ? !Dt(r, s) : r !== s;
}
function au({ vnode: A, parent: e, suspense: t }, r) {
  for (; e; ) {
    const s = e.subTree;
    if (s.suspense && s.suspense.activeBranch === A && (s.suspense.vnode.el = s.el = r, A = s), s === A)
      (A = e.vnode).el = r, e = e.parent;
    else
      break;
  }
  t && t.activeBranch === A && (t.vnode.el = r);
}
const dl = {}, hl = () => Object.create(dl), wl = (A) => Object.getPrototypeOf(A) === dl;
function lu(A, e, t, r = !1) {
  const s = {}, n = hl();
  A.propsDefaults = /* @__PURE__ */ Object.create(null), pl(A, e, s, n);
  for (const i in A.propsOptions[0])
    i in s || (s[i] = void 0);
  t ? A.props = r ? s : /* @__PURE__ */ wB(s) : A.type.props ? A.props = s : A.props = n, A.attrs = n;
}
function cu(A, e, t, r) {
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
      for (let B = 0; B < l.length; B++) {
        let f = l[B];
        if (Rs(A.emitsOptions, f))
          continue;
        const w = e[f];
        if (a)
          if (tA(n, f))
            w !== n[f] && (n[f] = w, c = !0);
          else {
            const U = WA(f);
            s[U] = Nn(
              a,
              o,
              U,
              w,
              A,
              !1
            );
          }
        else
          w !== n[f] && (n[f] = w, c = !0);
      }
    }
  } else {
    pl(A, e, s, n) && (c = !0);
    let l;
    for (const B in o)
      (!e || // for camelCase
      !tA(e, B) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((l = zA(B)) === B || !tA(e, l))) && (a ? t && // for camelCase
      (t[B] !== void 0 || // for kebab-case
      t[l] !== void 0) && (s[B] = Nn(
        a,
        o,
        B,
        void 0,
        A,
        !0
      )) : delete s[B]);
    if (n !== o)
      for (const B in n)
        (!e || !tA(e, B)) && (delete n[B], c = !0);
  }
  c && De(A.attrs, "set", "");
}
function pl(A, e, t, r) {
  const [s, n] = A.propsOptions;
  let i = !1, o;
  if (e)
    for (let a in e) {
      if (rr(a))
        continue;
      const c = e[a];
      let l;
      s && tA(s, l = WA(a)) ? !n || !n.includes(l) ? t[l] = c : (o || (o = {}))[l] = c : Rs(A.emitsOptions, a) || (!(a in r) || c !== r[a]) && (r[a] = c, i = !0);
    }
  if (n) {
    const a = /* @__PURE__ */ aA(t), c = o || uA;
    for (let l = 0; l < n.length; l++) {
      const B = n[l];
      t[B] = Nn(
        s,
        a,
        B,
        c[B],
        A,
        !tA(c, B)
      );
    }
  }
  return i;
}
function Nn(A, e, t, r, s, n) {
  const i = A[t];
  if (i != null) {
    const o = tA(i, "default");
    if (o && r === void 0) {
      const a = i.default;
      if (i.type !== Function && !i.skipFactory && Z(a)) {
        const { propsDefaults: c } = s;
        if (t in c)
          r = c[t];
        else {
          const l = Er(s);
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
const Bu = /* @__PURE__ */ new WeakMap();
function Ql(A, e, t = !1) {
  const r = t ? Bu : e.propsCache, s = r.get(A);
  if (s)
    return s;
  const n = A.props, i = {}, o = [];
  let a = !1;
  if (!Z(A)) {
    const l = (B) => {
      a = !0;
      const [f, w] = Ql(B, e, !0);
      UA(i, f), w && o.push(...w);
    };
    !t && e.mixins.length && e.mixins.forEach(l), A.extends && l(A.extends), A.mixins && A.mixins.forEach(l);
  }
  if (!n && !a)
    return cA(A) && r.set(A, Bt), Bt;
  if (P(n))
    for (let l = 0; l < n.length; l++) {
      const B = WA(n[l]);
      so(B) && (i[B] = uA);
    }
  else if (n)
    for (const l in n) {
      const B = WA(l);
      if (so(B)) {
        const f = n[l], w = i[B] = P(f) || Z(f) ? { type: f } : UA({}, f), U = w.type;
        let F = !1, h = !0;
        if (P(U))
          for (let b = 0; b < U.length; ++b) {
            const m = U[b], k = Z(m) && m.name;
            if (k === "Boolean") {
              F = !0;
              break;
            } else k === "String" && (h = !1);
          }
        else
          F = Z(U) && U.name === "Boolean";
        w[
          0
          /* shouldCast */
        ] = F, w[
          1
          /* shouldCastTrue */
        ] = h, (F || tA(w, "default")) && o.push(B);
      }
    }
  const c = [i, o];
  return cA(A) && r.set(A, c), c;
}
function so(A) {
  return A[0] !== "$" && !rr(A);
}
const Hi = (A) => A === "_" || A === "_ctx" || A === "$stable", Ii = (A) => P(A) ? A.map(Fe) : [Fe(A)], uu = (A, e, t) => {
  if (e._n)
    return e;
  const r = yB((...s) => Ii(e(...s)), t);
  return r._c = !1, r;
}, Cl = (A, e, t) => {
  const r = A._ctx;
  for (const s in A) {
    if (Hi(s)) continue;
    const n = A[s];
    if (Z(n))
      e[s] = uu(s, n, r);
    else if (n != null) {
      const i = Ii(n);
      e[s] = () => i;
    }
  }
}, Ul = (A, e) => {
  const t = Ii(e);
  A.slots.default = () => t;
}, Fl = (A, e, t) => {
  for (const r in e)
    (t || !Hi(r)) && (A[r] = e[r]);
}, fu = (A, e, t) => {
  const r = A.slots = hl();
  if (A.vnode.shapeFlag & 32) {
    const s = e._;
    s ? (Fl(r, e, t), t && xa(r, "_", s, !0)) : Cl(e, r);
  } else e && Ul(A, e);
}, gu = (A, e, t) => {
  const { vnode: r, slots: s } = A;
  let n = !0, i = uA;
  if (r.shapeFlag & 32) {
    const o = e._;
    o ? t && o === 1 ? n = !1 : Fl(s, e, t) : (n = !e.$stable, Cl(e, s)), i = e;
  } else e && (Ul(A, e), i = { default: 1 });
  if (n)
    for (const o in s)
      !Hi(o) && i[o] == null && delete s[o];
}, PA = Qu;
function du(A) {
  return hu(A);
}
function hu(A, e) {
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
    parentNode: B,
    nextSibling: f,
    setScopeId: w = ve,
    insertStaticContent: U
  } = A, F = (g, d, v, I = null, E = null, H = null, T = void 0, S = null, _ = !!d.dynamicChildren) => {
    if (g === d)
      return;
    g && !Nt(g, d) && (I = ge(g), EA(g, E, H, !0), g = null), d.patchFlag === -2 && (_ = !1, d.dynamicChildren = null), d.dynamicChildren && g && g.dynamicChildren && g.dynamicChildren.hasOnce && (d.dynamicChildren === Bt && (d.dynamicChildren = []), d.dynamicChildren.hasOnce = !0);
    const { type: y, ref: G, shapeFlag: R } = d;
    switch (y) {
      case Ms:
        h(g, d, v, I);
        break;
      case Ve:
        b(g, d, v, I);
        break;
      case an:
        g == null && m(d, v, I, T);
        break;
      case Y:
        yA(
          g,
          d,
          v,
          I,
          E,
          H,
          T,
          S,
          _
        );
        break;
      default:
        R & 1 ? O(
          g,
          d,
          v,
          I,
          E,
          H,
          T,
          S,
          _
        ) : R & 6 ? AA(
          g,
          d,
          v,
          I,
          E,
          H,
          T,
          S,
          _
        ) : (R & 64 || R & 128) && y.process(
          g,
          d,
          v,
          I,
          E,
          H,
          T,
          S,
          _,
          Rt
        );
    }
    G != null && E ? ir(G, g && g.ref, H, d || g, !d) : G == null && g && g.ref != null && ir(g.ref, null, H, g, !0);
  }, h = (g, d, v, I) => {
    if (g == null)
      r(
        d.el = o(d.children),
        v,
        I
      );
    else {
      const E = d.el = g.el;
      d.children !== g.children && c(E, d.children);
    }
  }, b = (g, d, v, I) => {
    g == null ? r(
      d.el = a(d.children || ""),
      v,
      I
    ) : d.el = g.el;
  }, m = (g, d, v, I) => {
    [g.el, g.anchor] = U(
      g.children,
      d,
      v,
      I,
      g.el,
      g.anchor
    );
  }, k = ({ el: g, anchor: d }, v, I) => {
    let E;
    for (; g && g !== d; )
      E = f(g), r(g, v, I), g = E;
    r(d, v, I);
  }, x = ({ el: g, anchor: d }) => {
    let v;
    for (; g && g !== d; )
      v = f(g), s(g), g = v;
    s(d);
  }, O = (g, d, v, I, E, H, T, S, _) => {
    if (d.type === "svg" ? T = "svg" : d.type === "math" && (T = "mathml"), g == null)
      L(
        d,
        v,
        I,
        E,
        H,
        T,
        S,
        _
      );
    else {
      const y = g.el && g.el._isVueCE ? g.el : null;
      try {
        y && y._beginPatch(), V(
          g,
          d,
          E,
          H,
          T,
          S,
          _
        );
      } finally {
        y && y._endPatch();
      }
    }
  }, L = (g, d, v, I, E, H, T, S) => {
    let _, y;
    const { props: G, shapeFlag: R, transition: N, dirs: J } = g;
    if (_ = g.el = i(
      g.type,
      H,
      G && G.is,
      G
    ), R & 8 ? l(_, g.children) : R & 16 && W(
      g.children,
      _,
      null,
      I,
      E,
      on(g, H),
      T,
      S
    ), J && nt(g, null, I, "created"), X(_, g, g.scopeId, T, I), G) {
      for (const BA in G)
        BA !== "value" && !rr(BA) && n(_, BA, null, G[BA], H, I);
      "value" in G && n(_, "value", null, G.value, H), (y = G.onVnodeBeforeMount) && pe(y, I, g);
    }
    J && nt(g, null, I, "beforeMount");
    const eA = wu(E, N);
    eA && N.beforeEnter(_), r(_, d, v), ((y = G && G.onVnodeMounted) || eA || J) && PA(() => {
      try {
        y && pe(y, I, g), eA && N.enter(_), J && nt(g, null, I, "mounted");
      } finally {
      }
    }, E);
  }, X = (g, d, v, I, E) => {
    if (v && w(g, v), I)
      for (let H = 0; H < I.length; H++)
        w(g, I[H]);
    if (E) {
      let H = E.subTree;
      if (d === H || ml(H.type) && (H.ssContent === d || H.ssFallback === d)) {
        const T = E.vnode;
        X(
          g,
          T,
          T.scopeId,
          T.slotScopeIds,
          E.parent
        );
      }
    }
  }, W = (g, d, v, I, E, H, T, S, _ = 0) => {
    for (let y = _; y < g.length; y++) {
      const G = g[y] = S ? Se(g[y]) : Fe(g[y]);
      F(
        null,
        G,
        d,
        v,
        I,
        E,
        H,
        T,
        S
      );
    }
  }, V = (g, d, v, I, E, H, T) => {
    const S = d.el = g.el;
    let { patchFlag: _, dynamicChildren: y, dirs: G } = d;
    _ |= g.patchFlag & 16;
    const R = g.props || uA, N = d.props || uA;
    let J;
    if (v && it(v, !1), (J = N.onVnodeBeforeUpdate) && pe(J, v, d, g), G && nt(d, g, v, "beforeUpdate"), v && it(v, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    y && (!g.dynamicChildren || g.dynamicChildren.length !== y.length) && (_ = 0, T = !1, y = null), (R.innerHTML && N.innerHTML == null || R.textContent && N.textContent == null) && l(S, ""), y ? iA(
      g.dynamicChildren,
      y,
      S,
      v,
      I,
      on(d, E),
      H
    ) : T || $(
      g,
      d,
      S,
      null,
      v,
      I,
      on(d, E),
      H,
      !1
    ), _ > 0) {
      if (_ & 16)
        FA(S, R, N, v, E);
      else if (_ & 2 && R.class !== N.class && n(S, "class", null, N.class, E), _ & 4 && n(S, "style", R.style, N.style, E), _ & 8) {
        const eA = d.dynamicProps;
        for (let BA = 0; BA < eA.length; BA++) {
          const oA = eA[BA], vA = R[oA], LA = N[oA];
          (LA !== vA || oA === "value") && n(S, oA, vA, LA, E, v);
        }
      }
      _ & 1 && g.children !== d.children && l(S, d.children);
    } else !T && y == null && FA(S, R, N, v, E);
    ((J = N.onVnodeUpdated) || G) && PA(() => {
      J && pe(J, v, d, g), G && nt(d, g, v, "updated");
    }, I);
  }, iA = (g, d, v, I, E, H, T) => {
    for (let S = 0; S < d.length; S++) {
      const _ = g[S], y = d[S], G = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        _.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (_.type === Y || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Nt(_, y) || // - In the case of a component, it could contain anything.
        _.shapeFlag & 198) ? B(_.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          v
        )
      );
      F(
        _,
        y,
        G,
        null,
        I,
        E,
        H,
        T,
        !0
      );
    }
  }, FA = (g, d, v, I, E) => {
    if (d !== v) {
      if (d !== uA)
        for (const H in d)
          !rr(H) && !(H in v) && n(
            g,
            H,
            d[H],
            null,
            E,
            I
          );
      for (const H in v) {
        if (rr(H)) continue;
        const T = v[H], S = d[H];
        T !== S && H !== "value" && n(g, H, S, T, E, I);
      }
      "value" in v && n(g, "value", d.value, v.value, E);
    }
  }, yA = (g, d, v, I, E, H, T, S, _) => {
    const y = d.el = g ? g.el : o(""), G = d.anchor = g ? g.anchor : o("");
    let { patchFlag: R, dynamicChildren: N, slotScopeIds: J } = d;
    J && (S = S ? S.concat(J) : J), g == null ? (r(y, v, I), r(G, v, I), W(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      d.children || [],
      v,
      G,
      E,
      H,
      T,
      S,
      _
    )) : R > 0 && R & 64 && N && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    g.dynamicChildren && g.dynamicChildren.length === N.length ? (iA(
      g.dynamicChildren,
      N,
      v,
      E,
      H,
      T,
      S
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (d.key != null || E && d === E.subTree) && vl(
      g,
      d,
      !0
      /* shallow */
    )) : $(
      g,
      d,
      v,
      G,
      E,
      H,
      T,
      S,
      _
    );
  }, AA = (g, d, v, I, E, H, T, S, _) => {
    d.slotScopeIds = S, g == null ? d.shapeFlag & 512 ? E.ctx.activate(
      d,
      v,
      I,
      T,
      _
    ) : pA(
      d,
      v,
      I,
      E,
      H,
      T,
      _
    ) : ie(g, d, _);
  }, pA = (g, d, v, I, E, H, T) => {
    const S = g.component = mu(
      g,
      I,
      E
    );
    if (yi(g) && (S.ctx.renderer = Rt), Hu(S, !1, T), S.asyncDep) {
      if (E && E.registerDep(S, rA, T), !g.el) {
        const _ = S.subTree = be(Ve);
        b(null, _, d, v), g.placeholder = _.el;
      }
    } else
      rA(
        S,
        g,
        d,
        v,
        E,
        H,
        T
      );
  }, ie = (g, d, v) => {
    const I = d.component = g.component;
    if (ou(g, d, v))
      if (I.asyncDep && !I.asyncResolved) {
        d.el = g.el, z(I, d, v);
        return;
      } else
        I.next = d, I.update();
    else
      d.el = g.el, I.vnode = d;
  }, rA = (g, d, v, I, E, H, T) => {
    const S = () => {
      if (g.isMounted) {
        let { next: R, bu: N, u: J, parent: eA, vnode: BA } = g;
        {
          const he = bl(g);
          if (he) {
            R && (R.el = BA.el, z(g, R, T)), he.asyncDep.then(() => {
              PA(() => {
                g.isUnmounted || y();
              }, E);
            });
            return;
          }
        }
        let oA = R, vA;
        it(g, !1), R ? (R.el = BA.el, z(g, R, T)) : R = BA, N && rs(N), (vA = R.props && R.props.onVnodeBeforeUpdate) && pe(vA, eA, R, BA), it(g, !0);
        const LA = to(g), de = g.subTree;
        g.subTree = LA, F(
          de,
          LA,
          // parent may have changed if it's in a teleport
          B(de.el),
          // anchor may have changed if it's in a fragment
          ge(de),
          g,
          E,
          H
        ), R.el = LA.el, oA === null && au(g, LA.el), J && PA(J, E), (vA = R.props && R.props.onVnodeUpdated) && PA(
          () => pe(vA, eA, R, BA),
          E
        );
      } else {
        let R;
        const { el: N, props: J } = d, { bm: eA, m: BA, parent: oA, root: vA, type: LA } = g, de = or(d);
        it(g, !1), eA && rs(eA), !de && (R = J && J.onVnodeBeforeMount) && pe(R, oA, d), it(g, !0);
        {
          vA.ce && vA.ce._hasShadowRoot() && vA.ce._injectChildStyle(
            LA,
            g.parent ? g.parent.type : void 0
          );
          const he = g.subTree = to(g);
          F(
            null,
            he,
            v,
            I,
            g,
            E,
            H
          ), d.el = he.el;
        }
        if (BA && PA(BA, E), !de && (R = J && J.onVnodeMounted)) {
          const he = d;
          PA(
            () => pe(R, oA, he),
            E
          );
        }
        (d.shapeFlag & 256 || oA && or(oA.vnode) && oA.vnode.shapeFlag & 256) && g.a && PA(g.a, E), g.isMounted = !0, d = v = I = null;
      }
    };
    g.scope.on();
    const _ = g.effect = new Ta(S);
    g.scope.off();
    const y = g.update = _.run.bind(_), G = g.job = _.runIfDirty.bind(_);
    G.i = g, G.id = g.uid, _.scheduler = () => Ei(G), it(g, !0), y();
  }, z = (g, d, v) => {
    d.component = g;
    const I = g.vnode.props;
    g.vnode = d, g.next = null, cu(g, d.props, I, v), gu(g, d.children, v), Me(), Zi(g), ke();
  }, $ = (g, d, v, I, E, H, T, S, _ = !1) => {
    const y = g && g.children, G = g ? g.shapeFlag : 0, R = d.children, { patchFlag: N, shapeFlag: J } = d;
    if (N > 0) {
      if (N & 128) {
        YA(
          y,
          R,
          v,
          I,
          E,
          H,
          T,
          S,
          _
        );
        return;
      } else if (N & 256) {
        HA(
          y,
          R,
          v,
          I,
          E,
          H,
          T,
          S,
          _
        );
        return;
      }
    }
    J & 8 ? (G & 16 && Ae(y, E, H), R !== y && l(v, R)) : G & 16 ? J & 16 ? YA(
      y,
      R,
      v,
      I,
      E,
      H,
      T,
      S,
      _
    ) : Ae(y, E, H, !0) : (G & 8 && l(v, ""), J & 16 && W(
      R,
      v,
      I,
      E,
      H,
      T,
      S,
      _
    ));
  }, HA = (g, d, v, I, E, H, T, S, _) => {
    g = g || Bt, d = d || Bt;
    const y = g.length, G = d.length, R = Math.min(y, G);
    let N;
    for (N = 0; N < R; N++) {
      const J = d[N] = _ ? Se(d[N]) : Fe(d[N]);
      F(
        g[N],
        J,
        v,
        null,
        E,
        H,
        T,
        S,
        _
      );
    }
    y > G ? Ae(
      g,
      E,
      H,
      !0,
      !1,
      R
    ) : W(
      d,
      v,
      I,
      E,
      H,
      T,
      S,
      _,
      R
    );
  }, YA = (g, d, v, I, E, H, T, S, _) => {
    let y = 0;
    const G = d.length;
    let R = g.length - 1, N = G - 1;
    for (; y <= R && y <= N; ) {
      const J = g[y], eA = d[y] = _ ? Se(d[y]) : Fe(d[y]);
      if (Nt(J, eA))
        F(
          J,
          eA,
          v,
          null,
          E,
          H,
          T,
          S,
          _
        );
      else
        break;
      y++;
    }
    for (; y <= R && y <= N; ) {
      const J = g[R], eA = d[N] = _ ? Se(d[N]) : Fe(d[N]);
      if (Nt(J, eA))
        F(
          J,
          eA,
          v,
          null,
          E,
          H,
          T,
          S,
          _
        );
      else
        break;
      R--, N--;
    }
    if (y > R) {
      if (y <= N) {
        const J = N + 1, eA = J < G ? d[J].el : I;
        for (; y <= N; )
          F(
            null,
            d[y] = _ ? Se(d[y]) : Fe(d[y]),
            v,
            eA,
            E,
            H,
            T,
            S,
            _
          ), y++;
      }
    } else if (y > N)
      for (; y <= R; )
        EA(g[y], E, H, !0), y++;
    else {
      const J = y, eA = y, BA = /* @__PURE__ */ new Map();
      for (y = eA; y <= N; y++) {
        const ZA = d[y] = _ ? Se(d[y]) : Fe(d[y]);
        ZA.key != null && BA.set(ZA.key, y);
      }
      let oA, vA = 0;
      const LA = N - eA + 1;
      let de = !1, he = 0;
      const Mt = new Array(LA);
      for (y = 0; y < LA; y++) Mt[y] = 0;
      for (y = J; y <= R; y++) {
        const ZA = g[y];
        if (vA >= LA) {
          EA(ZA, E, H, !0);
          continue;
        }
        let we;
        if (ZA.key != null)
          we = BA.get(ZA.key);
        else
          for (oA = eA; oA <= N; oA++)
            if (Mt[oA - eA] === 0 && Nt(ZA, d[oA])) {
              we = oA;
              break;
            }
        we === void 0 ? EA(ZA, E, H, !0) : (Mt[we - eA] = y + 1, we >= he ? he = we : de = !0, F(
          ZA,
          d[we],
          v,
          null,
          E,
          H,
          T,
          S,
          _
        ), vA++);
      }
      const Mi = de ? pu(Mt) : Bt;
      for (oA = Mi.length - 1, y = LA - 1; y >= 0; y--) {
        const ZA = eA + y, we = d[ZA], ki = d[ZA + 1], Ni = ZA + 1 < G ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          ki.el || El(ki)
        ) : I;
        Mt[y] === 0 ? F(
          null,
          we,
          v,
          Ni,
          E,
          H,
          T,
          S,
          _
        ) : de && (oA < 0 || y !== Mi[oA] ? RA(we, v, Ni, 2) : oA--);
      }
    }
  }, RA = (g, d, v, I, E = null) => {
    const { el: H, type: T, transition: S, children: _, shapeFlag: y } = g;
    if (y & 6) {
      RA(g.component.subTree, d, v, I);
      return;
    }
    if (y & 128) {
      g.suspense.move(d, v, I);
      return;
    }
    if (y & 64) {
      T.move(g, d, v, Rt);
      return;
    }
    if (T === Y) {
      r(H, d, v);
      for (let R = 0; R < _.length; R++)
        RA(_[R], d, v, I);
      r(g.anchor, d, v);
      return;
    }
    if (T === an) {
      k(g, d, v);
      return;
    }
    if (I !== 2 && y & 1 && S)
      if (I === 0)
        S.persisted && !H[sn] ? r(H, d, v) : (S.beforeEnter(H), r(H, d, v), PA(() => S.enter(H), E));
      else {
        const { leave: R, delayLeave: N, afterLeave: J } = S, eA = () => {
          g.ctx.isUnmounted ? s(H) : r(H, d, v);
        }, BA = () => {
          const oA = H._isLeaving || !!H[sn];
          H._isLeaving && H[sn](
            !0
            /* cancelled */
          ), S.persisted && !oA ? eA() : R(H, () => {
            eA(), J && J();
          });
        };
        N ? N(H, eA, BA) : BA();
      }
    else
      r(H, d, v);
  }, EA = (g, d, v, I = !1, E = !1) => {
    const {
      type: H,
      props: T,
      ref: S,
      children: _,
      dynamicChildren: y,
      shapeFlag: G,
      patchFlag: R,
      dirs: N,
      cacheIndex: J,
      memo: eA
    } = g;
    if ((R === -2 || y && y.hasOnce) && (E = !1), S != null && (Me(), ir(S, null, v, g, !0), ke()), J != null && (!g.ctx || g.ctx === d) && (d.renderCache[J] = void 0), G & 256) {
      d.ctx.deactivate(g);
      return;
    }
    const BA = G & 1 && N, oA = !or(g);
    let vA;
    if (oA && (vA = T && T.onVnodeBeforeUnmount) && pe(vA, d, g), G & 6)
      oe(g.component, v, I);
    else {
      if (G & 128) {
        g.suspense.unmount(v, I);
        return;
      }
      BA && nt(g, null, d, "beforeUnmount"), G & 64 ? g.type.remove(
        g,
        d,
        v,
        Rt,
        I
      ) : y && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !y.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (H !== Y || R > 0 && R & 64) ? Ae(
        y,
        d,
        v,
        !1,
        !0
      ) : (H === Y && R & 384 || !E && G & 16) && Ae(_, d, v), I && $A(g);
    }
    const LA = eA != null && J == null;
    (oA && (vA = T && T.onVnodeUnmounted) || BA || LA) && PA(() => {
      vA && pe(vA, d, g), BA && nt(g, null, d, "unmounted"), LA && (g.el = null);
    }, v);
  }, $A = (g) => {
    const { type: d, el: v, anchor: I, transition: E } = g;
    if (d === Y) {
      Ie(v, I);
      return;
    }
    if (d === an) {
      x(g), E && !E.persisted && E.afterLeave && E.afterLeave();
      return;
    }
    const H = () => {
      s(v), E && !E.persisted && E.afterLeave && E.afterLeave();
    };
    if (g.shapeFlag & 1 && E && !E.persisted) {
      const { leave: T, delayLeave: S } = E, _ = () => T(v, H);
      S ? S(g.el, H, _) : _();
    } else
      H();
  }, Ie = (g, d) => {
    let v;
    for (; g !== d; )
      v = f(g), s(g), g = v;
    s(d);
  }, oe = (g, d, v) => {
    const { bum: I, scope: E, job: H, subTree: T, um: S, m: _, a: y } = g;
    no(_), no(y), I && rs(I), E.stop(), H ? (H.flags |= 8, EA(T, g, d, v)) : g.vnode.el && T && (T.transition = g.vnode.transition, EA(T, g, d, v)), S && PA(S, d), PA(() => {
      g.isUnmounted = !0;
    }, d);
  }, Ae = (g, d, v, I = !1, E = !1, H = 0) => {
    for (let T = H; T < g.length; T++)
      EA(g[T], d, v, I, E);
  }, ge = (g) => {
    if (g.shapeFlag & 6)
      return ge(g.component.subTree);
    if (g.shapeFlag & 128)
      return g.suspense.next();
    const d = f(g.anchor || g.el), v = d && d[_B];
    return v ? f(v) : d;
  };
  let zs = !1;
  const Ri = (g, d, v) => {
    let I;
    g == null ? d._vnode && (EA(d._vnode, null, null, !0), I = d._vnode.component) : F(
      d._vnode || null,
      g,
      d,
      null,
      null,
      null,
      v
    ), d._vnode = g, zs || (zs = !0, Zi(I), el(), zs = !1);
  }, Rt = {
    p: F,
    um: EA,
    m: RA,
    r: $A,
    mt: pA,
    mc: W,
    pc: $,
    pbc: iA,
    n: ge,
    o: A
  };
  return {
    render: Ri,
    hydrate: void 0,
    createApp: eu(Ri)
  };
}
function on({ type: A, props: e }, t) {
  return t === "svg" && A === "foreignObject" || t === "mathml" && A === "annotation-xml" && e && e.encoding && e.encoding.includes("html") ? void 0 : t;
}
function it({ effect: A, job: e }, t) {
  t ? (A.flags |= 32, e.flags |= 4) : (A.flags &= -33, e.flags &= -5);
}
function wu(A, e) {
  return (!A || A && !A.pendingBranch) && e && !e.persisted;
}
function vl(A, e, t = !1) {
  const r = A.children, s = e.children;
  if (P(r) && P(s))
    for (let n = 0; n < r.length; n++) {
      const i = r[n];
      let o = s[n];
      o.shapeFlag & 1 && !o.dynamicChildren && ((o.patchFlag <= 0 || o.patchFlag === 32) && (o = s[n] = Se(s[n]), o.el = i.el), !t && o.patchFlag !== -2 && vl(i, o)), o.type === Ms && (o.patchFlag === -1 && (o = s[n] = Se(o)), o.el = i.el), o.type === Ve && !o.el && (o.el = i.el);
    }
}
function pu(A) {
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
function bl(A) {
  const e = A.subTree.component;
  if (e)
    return e.asyncDep && !e.asyncResolved ? e : bl(e);
}
function no(A) {
  if (A)
    for (let e = 0; e < A.length; e++)
      A[e].flags |= 8;
}
function El(A) {
  if (A.placeholder)
    return A.placeholder;
  const e = A.component;
  return e ? El(e.subTree) : null;
}
const ml = (A) => A.__isSuspense;
function Qu(A, e) {
  e && e.pendingBranch ? P(A) ? e.effects.push(...A) : e.effects.push(A) : mB(A);
}
const Y = /* @__PURE__ */ Symbol.for("v-fgt"), Ms = /* @__PURE__ */ Symbol.for("v-txt"), Ve = /* @__PURE__ */ Symbol.for("v-cmt"), an = /* @__PURE__ */ Symbol.for("v-stc"), dt = [];
let qA = null;
function p(A = !1) {
  dt.push(qA = A ? null : []);
}
function yl() {
  dt.pop(), qA = dt[dt.length - 1] || null;
}
let wr = 1;
function io(A, e = !1) {
  wr += A, A < 0 && qA && e && (qA.hasOnce = !0);
}
function Hl(A) {
  return A.dynamicChildren = wr > 0 ? qA || Bt : null, yl(), wr > 0 && qA && qA.push(A), A;
}
function C(A, e, t, r, s, n) {
  return Hl(
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
function Cu(A, e, t, r, s) {
  return Hl(
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
function Il(A) {
  return A ? A.__v_isVNode === !0 : !1;
}
function Nt(A, e) {
  return A.type === e.type && A.key === e.key;
}
const xl = ({ key: A }) => A ?? null, ns = ({
  ref: A,
  ref_key: e,
  ref_for: t
}) => (typeof A == "number" && (A = "" + A), A != null ? hA(A) || /* @__PURE__ */ GA(A) || Z(A) ? { i: re, r: A, k: e, f: !!t } : A : null);
function u(A, e = null, t = null, r = 0, s = null, n = A === Y ? 0 : 1, i = !1, o = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: A,
    props: e,
    key: e && xl(e),
    ref: e && ns(e),
    scopeId: rl,
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
    ctx: re
  };
  return o ? (hs(a, t), n & 128 && A.normalize(a)) : t && (a.shapeFlag |= hA(t) ? 8 : 16), wr > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  qA && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || n & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && qA.push(a), a;
}
const be = Uu;
function Uu(A, e = null, t = null, r = 0, s = null, n = !1) {
  if ((!A || A === WB) && (A = Ve), Il(A)) {
    const o = St(
      A,
      e,
      !0
      /* mergeRef: true */
    );
    return t && hs(o, t), wr > 0 && !n && qA && (o.shapeFlag & 6 ? qA[qA.indexOf(A)] = o : qA.push(o)), o.patchFlag = -2, o;
  }
  if (_u(A) && (A = A.__vccOpts), e) {
    e = Fu(e);
    let { class: o, style: a } = e;
    o && !hA(o) && (e.class = nA(o)), cA(a) && (/* @__PURE__ */ bi(a) && !P(a) && (a = UA({}, a)), e.style = wi(a));
  }
  const i = hA(A) ? 1 : ml(A) ? 128 : Ds(A) ? 64 : cA(A) ? 4 : Z(A) ? 2 : 0;
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
function Fu(A) {
  return A ? /* @__PURE__ */ bi(A) || wl(A) ? UA({}, A) : A : null;
}
function St(A, e, t = !1, r = !1) {
  const { props: s, ref: n, patchFlag: i, children: o, transition: a } = A, c = e ? vu(s || {}, e) : s, l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: A.type,
    props: c,
    key: c && xl(c),
    ref: e && e.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      t && n ? P(n) ? n.concat(ns(e)) : [n, ns(e)] : ns(e)
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
    patchFlag: e && A.type !== Y ? i === -1 ? 16 : i | 16 : i,
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
    ssContent: A.ssContent && St(A.ssContent),
    ssFallback: A.ssFallback && St(A.ssFallback),
    placeholder: A.placeholder,
    el: A.el,
    anchor: A.anchor,
    ctx: A.ctx,
    ce: A.ce,
    cacheIndex: A.cacheIndex
  };
  return a && r && mi(
    l,
    a.clone(l)
  ), l;
}
function j(A = " ", e = 0) {
  return be(Ms, null, A, e);
}
function K(A = "", e = !1) {
  return e ? (p(), Cu(Ve, null, A)) : be(Ve, null, A);
}
function Fe(A) {
  return A == null || typeof A == "boolean" ? be(Ve) : P(A) ? be(
    Y,
    null,
    // #3666, avoid reference pollution when reusing vnode
    A.slice()
  ) : Il(A) ? Se(A) : be(Ms, null, String(A));
}
function Se(A) {
  return A.el === null && A.patchFlag !== -1 || A.memo ? A : St(A);
}
function hs(A, e) {
  let t = 0;
  const { shapeFlag: r } = A;
  if (e == null)
    e = null;
  else if (P(e))
    t = 16;
  else if (typeof e == "object")
    if (r & 65) {
      const s = e.default;
      s && (s._c && (s._d = !1), hs(A, s()), s._c && (s._d = !0));
      return;
    } else {
      t = 32;
      const s = e._;
      !s && !wl(e) ? e._ctx = re : s === 3 && re && (re.slots._ === 1 ? e._ = 1 : (e._ = 2, A.patchFlag |= 1024));
    }
  else if (Z(e)) {
    if (r & 65) {
      hs(A, { default: e });
      return;
    }
    e = { default: e, _ctx: re }, t = 32;
  } else
    e = String(e), r & 64 ? (t = 16, e = [j(e)]) : t = 8;
  A.children = e, A.shapeFlag |= t;
}
function vu(...A) {
  const e = {};
  for (let t = 0; t < A.length; t++) {
    const r = A[t];
    for (const s in r)
      if (s === "class")
        e.class !== r.class && (e.class = nA([e.class, r.class]));
      else if (s === "style")
        e.style = wi([e.style, r.style]);
      else if (Is(s)) {
        const n = e[s], i = r[s];
        i && n !== i && !(P(n) && n.includes(i)) ? e[s] = n ? [].concat(n, i) : i : i == null && n == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !xs(s) && (e[s] = i);
      } else s !== "" && (e[s] = r[s]);
  }
  return e;
}
function pe(A, e, t, r = null) {
  ue(A, e, 7, [
    t,
    r
  ]);
}
const bu = ul();
let Eu = 0;
function mu(A, e, t) {
  const r = A.type, s = (e ? e.appContext : A.appContext) || bu, n = {
    uid: Eu++,
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
    scope: new qc(
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
    propsOptions: Ql(r, s),
    emitsOptions: fl(r, s),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: uA,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: uA,
    data: uA,
    props: uA,
    attrs: uA,
    slots: uA,
    refs: uA,
    setupState: uA,
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
  return n.ctx = { _: n }, n.root = e ? e.root : n, n.emit = ru.bind(null, n), A.ce && A.ce(n), n;
}
let VA = null;
const yu = () => VA || re;
let ws, pr;
{
  const A = Ks(), e = (t, r) => {
    let s;
    return (s = A[t]) || (s = A[t] = []), s.push(r), (n) => {
      s.length > 1 ? s.forEach((i) => i(n)) : s[0](n);
    };
  };
  ws = e(
    "__VUE_INSTANCE_SETTERS__",
    (t) => VA = t
  ), pr = e(
    "__VUE_SSR_SETTERS__",
    (t) => Qr = t
  );
}
const Er = (A) => {
  const e = VA;
  return ws(A), A.scope.on(), () => {
    A.scope.off(), ws(e);
  };
}, oo = () => {
  VA && VA.scope.off(), ws(null);
};
function Ll(A) {
  return A.vnode.shapeFlag & 4;
}
let Qr = !1;
function Hu(A, e = !1, t = !1) {
  e && pr(e);
  const { props: r, children: s } = A.vnode, n = Ll(A);
  lu(A, r, n, e), fu(A, s, t || e);
  const i = n ? Iu(A, e) : void 0;
  return e && pr(!1), i;
}
function Iu(A, e) {
  const t = A.type;
  A.accessCache = /* @__PURE__ */ Object.create(null), A.proxy = new Proxy(A.ctx, YB);
  const { setup: r } = t;
  if (r) {
    Me();
    const s = A.setupContext = r.length > 1 ? Lu(A) : null, n = Er(A), i = br(
      r,
      A,
      0,
      [
        A.props,
        s
      ]
    ), o = ya(i);
    if (ke(), n(), (o || A.sp) && !or(A) && ol(A), o) {
      if (i.then(oo, oo), e)
        return i.then((a) => {
          pr(!0);
          try {
            ao(A, a, e);
          } finally {
            pr(!1);
          }
        }).catch((a) => {
          Ts(a, A, 0);
        });
      A.asyncDep = i;
    } else
      ao(A, i);
  } else
    _l(A);
}
function ao(A, e, t) {
  Z(e) ? A.type.__ssrInlineRender ? A.ssrRender = e : A.render = e : cA(e) && (A.setupState = za(e)), _l(A);
}
function _l(A, e, t) {
  const r = A.type;
  A.render || (A.render = r.render || ve);
  {
    const s = Er(A);
    Me();
    try {
      ZB(A);
    } finally {
      ke(), s();
    }
  }
}
const xu = {
  get(A, e) {
    return OA(A, "get", ""), A[e];
  }
};
function Lu(A) {
  const e = (t) => {
    A.exposed = t || {};
  };
  return {
    attrs: new Proxy(A.attrs, xu),
    slots: A.slots,
    emit: A.emit,
    expose: e
  };
}
function ks(A) {
  return A.exposed ? A.exposeProxy || (A.exposeProxy = new Proxy(za(pB(A.exposed)), {
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
function _u(A) {
  return Z(A) && "__vccOpts" in A;
}
const Ku = (A, e) => /* @__PURE__ */ UB(A, e, Qr), Su = "3.5.43";
/**
* @vue/runtime-dom v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Vn;
const lo = typeof window < "u" && window.trustedTypes;
if (lo)
  try {
    Vn = /* @__PURE__ */ lo.createPolicy("vue", {
      createHTML: (A) => A
    });
  } catch {
  }
const Kl = Vn ? (A) => Vn.createHTML(A) : (A) => A, Tu = "http://www.w3.org/2000/svg", Du = "http://www.w3.org/1998/Math/MathML", Ke = typeof document < "u" ? document : null, co = Ke && /* @__PURE__ */ Ke.createElement("template"), Ou = {
  insert: (A, e, t) => {
    e.insertBefore(A, t || null);
  },
  remove: (A) => {
    const e = A.parentNode;
    e && e.removeChild(A);
  },
  createElement: (A, e, t, r) => {
    const s = e === "svg" ? Ke.createElementNS(Tu, A) : e === "mathml" ? Ke.createElementNS(Du, A) : t ? Ke.createElement(A, { is: t }) : Ke.createElement(A);
    return A === "select" && r && r.multiple != null && s.setAttribute("multiple", r.multiple), s;
  },
  createText: (A) => Ke.createTextNode(A),
  createComment: (A) => Ke.createComment(A),
  setText: (A, e) => {
    A.nodeValue = e;
  },
  setElementText: (A, e) => {
    A.textContent = e;
  },
  parentNode: (A) => A.parentNode,
  nextSibling: (A) => A.nextSibling,
  querySelector: (A) => Ke.querySelector(A),
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
      co.innerHTML = Kl(
        r === "svg" ? `<svg>${A}</svg>` : r === "mathml" ? `<math>${A}</math>` : A
      );
      const o = co.content;
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
}, Ru = /* @__PURE__ */ Symbol("_vtc");
function Mu(A, e, t) {
  const r = A[Ru];
  r && (e = (e ? [e, ...r] : [...r]).join(" ")), e == null ? A.removeAttribute("class") : t ? A.setAttribute("class", e) : A.className = e;
}
const Bo = /* @__PURE__ */ Symbol("_vod"), ku = /* @__PURE__ */ Symbol("_vsh"), Nu = /* @__PURE__ */ Symbol(""), Vu = /(?:^|;)\s*display\s*:/;
function Gu(A, e, t) {
  const r = A.style, s = hA(t);
  let n = !1;
  if (t && !s) {
    if (e)
      if (hA(e))
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
      o != null ? Ju(
        A,
        i,
        !hA(e) && e ? e[i] : void 0,
        o
      ) || Yt(r, i, o) : Yt(r, i, "");
    }
  } else if (s) {
    if (e !== t) {
      const i = r[Nu];
      i && (t += ";" + i), r.cssText = t, n = Vu.test(t);
    }
  } else e && A.removeAttribute("style");
  Bo in A && (A[Bo] = n ? r.display : "", A[ku] && (r.display = "none"));
}
const _r = /\s*!important$/;
function Yt(A, e, t) {
  if (P(t))
    t.forEach((r) => Yt(A, e, r));
  else if (t == null && (t = ""), e.startsWith("--"))
    _r.test(t) ? A.setProperty(e, t.replace(_r, ""), "important") : A.setProperty(e, t);
  else {
    const r = Pu(A, e);
    _r.test(t) ? A.setProperty(
      zA(r),
      t.replace(_r, ""),
      "important"
    ) : A[r] = t;
  }
}
const uo = ["Webkit", "Moz", "ms"], ln = {};
function Pu(A, e) {
  const t = ln[e];
  if (t)
    return t;
  let r = WA(e);
  if (r !== "filter" && r in A)
    return ln[e] = r;
  r = Ia(r);
  for (let s = 0; s < uo.length; s++) {
    const n = uo[s] + r;
    if (n in A)
      return ln[e] = n;
  }
  return e;
}
function Ju(A, e, t, r) {
  return A.tagName === "TEXTAREA" && (e === "width" || e === "height") && hA(r) && t === r;
}
const fo = "http://www.w3.org/1999/xlink";
function go(A, e, t, r, s, n = Zc(e)) {
  r && e.startsWith("xlink:") ? t == null ? A.removeAttributeNS(fo, e.slice(6, e.length)) : A.setAttributeNS(fo, e, t) : t == null || n && !La(t) ? A.removeAttribute(e) : A.setAttribute(
    e,
    n ? "" : Ee(t) ? String(t) : t
  );
}
function ho(A, e, t, r, s) {
  if (e === "innerHTML" || e === "textContent") {
    t != null && (A[e] = e === "innerHTML" ? Kl(t) : t);
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
    o === "boolean" ? t = La(t) : t == null && o === "string" ? (t = "", i = !0) : o === "number" && (t = 0, i = !0);
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
function Xu(A, e, t, r) {
  A.removeEventListener(e, t, r);
}
const wo = /* @__PURE__ */ Symbol("_vei");
function Wu(A, e, t, r, s = null) {
  const n = A[wo] || (A[wo] = {}), i = n[e];
  if (r && i)
    i.value = r;
  else {
    const [o, a] = ju(e);
    if (r) {
      const c = n[e] = $u(
        r,
        s
      );
      lt(A, o, c, a);
    } else i && (Xu(A, o, i, a), n[e] = void 0);
  }
}
const Yu = /(Once|Passive|Capture)$/, Zu = /^on:?(?:Once|Passive|Capture)$/;
function ju(A) {
  let e, t;
  for (; (t = A.match(Yu)) && !Zu.test(A); )
    e || (e = {}), A = A.slice(0, A.length - t[1].length), e[t[1].toLowerCase()] = !0;
  return [A[2] === ":" ? A.slice(3) : zA(A.slice(2)), e];
}
let cn = 0;
const zu = /* @__PURE__ */ Promise.resolve(), qu = () => cn || (zu.then(() => cn = 0), cn = Date.now());
function $u(A, e) {
  const t = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= t.attached)
      return;
    const s = t.value;
    if (P(s)) {
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
  return t.value = A, t.attached = qu(), t;
}
const po = (A) => A.charCodeAt(0) === 111 && A.charCodeAt(1) === 110 && // lowercase letter
A.charCodeAt(2) > 96 && A.charCodeAt(2) < 123, Af = (A, e, t, r, s, n) => {
  const i = s === "svg";
  e === "class" ? Mu(A, r, i) : e === "style" ? Gu(A, t, r) : Is(e) ? xs(e) || Wu(A, e, t, r, n) : (e[0] === "." ? (e = e.slice(1), !0) : e[0] === "^" ? (e = e.slice(1), !1) : ef(A, e, r, i)) ? (ho(A, e, r), !A.tagName.includes("-") && (e === "value" || e === "checked" || e === "selected") && go(A, e, r, i, n, e !== "value")) : /* #11081 force set props for possible async custom element */ A._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (tf(A, e) || // @ts-expect-error _def is private
  A._def.__asyncLoader && (/[A-Z]/.test(e) || !hA(r))) ? ho(A, WA(e), r, n, e) : (e === "true-value" ? A._trueValue = r : e === "false-value" && (A._falseValue = r), go(A, e, r, i));
};
function ef(A, e, t, r) {
  if (r)
    return !!(e === "innerHTML" || e === "textContent" || e in A && po(e) && Z(t));
  if (e === "spellcheck" || e === "draggable" || e === "translate" || e === "autocorrect" || e === "sandbox" && A.tagName === "IFRAME" || e === "form" || e === "list" && A.tagName === "INPUT" || e === "type" && A.tagName === "TEXTAREA")
    return !1;
  if (e === "width" || e === "height") {
    const s = A.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return po(e) && hA(t) ? !1 : e in A;
}
function tf(A, e) {
  const t = (
    // @ts-expect-error _def is private
    A._def.props
  );
  if (!t)
    return !1;
  const r = WA(e);
  return Array.isArray(t) ? t.some((s) => WA(s) === r) : Object.keys(t).some((s) => WA(s) === r);
}
const Qo = {};
// @__NO_SIDE_EFFECTS__
function Co(A, e, t) {
  let r = /* @__PURE__ */ SB(A, e);
  Ls(r) && (r = UA({}, r, e));
  class s extends xi {
    constructor(i) {
      super(r, i, t);
    }
  }
  return s.def = r, s;
}
const rf = typeof HTMLElement < "u" ? HTMLElement : class {
};
class xi extends rf {
  constructor(e, t = {}, r = Eo) {
    super(), this._def = e, this._props = t, this._createApp = r, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._patching = !1, this._dirty = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._styleAnchors = /* @__PURE__ */ new WeakMap(), this._ob = null, this.shadowRoot && r !== Eo ? this._root = this.shadowRoot : e.shadowRoot !== !1 ? (this.attachShadow(
      UA({}, e.shadowRootOptions, {
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
      if (e instanceof xi) {
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
    this._connected = !1, $a(() => {
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
      if (n && !P(n))
        for (const a in n) {
          const c = n[a];
          (c === Number || c && c.type === Number) && (a in this._props && (this._props[a] = Gi(this._props[a])), (o || (o = /* @__PURE__ */ Object.create(null)))[WA(a)] = !0);
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
        tA(this, r) || Object.defineProperty(this, r, {
          // unwrap ref to be consistent with public instance behavior
          get: () => ja(t[r])
        });
  }
  _resolveProps(e) {
    const { props: t } = e, r = P(t) ? t : Object.keys(t || {});
    for (const s of Object.keys(this))
      s[0] !== "_" && r.includes(s) && this._setProp(s, this[s]);
    for (const s of r.map(WA))
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
    let r = t ? this.getAttribute(e) : Qo;
    const s = WA(e);
    t && this._numberProps && this._numberProps[s] && (r = Gi(r)), this._setProp(s, r, !1, !0);
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
    if (t !== this._props[e] && (this._dirty = !0, t === Qo ? delete this._props[e] : (this._props[e] = t, e === "key" && this._app && (this._app._ceVNode.key = t)), s && this._instance && this._update(), r)) {
      const n = this._ob;
      n && (this._processMutations(n.takeRecords()), n.disconnect()), t === !0 ? this.setAttribute(zA(e), "") : typeof t == "string" || typeof t == "number" ? this.setAttribute(zA(e), t + "") : t || this.removeAttribute(zA(e)), n && n.observe(this, { attributes: !0 });
    }
  }
  _update() {
    const e = this._createVNode();
    this._app && (e.appContext = this._app._context), Bf(e, this._root);
  }
  _createVNode() {
    const e = {};
    this.shadowRoot || (e.onVnodeMounted = e.onVnodeUpdated = this._renderSlots.bind(this));
    const t = be(this._def, UA(e, this._props));
    return this._instance || (t.ce = (r) => {
      this._instance = r, r.ce = this, r.isCE = !0;
      const s = (n, i) => {
        this.dispatchEvent(
          new CustomEvent(
            n,
            Ls(i[0]) ? UA({ detail: i }, i[0]) : { detail: i }
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
            let B;
            for (; B = l.nextNode(); )
              B.setAttribute(c, "");
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
const ps = (A) => {
  const e = A.props["onUpdate:modelValue"] || !1;
  return P(e) ? (t) => rs(e, t) : e;
};
function sf(A) {
  A.target.composing = !0;
}
function Uo(A) {
  const e = A.target;
  e.composing && (e.composing = !1, e.dispatchEvent(new Event("input")));
}
const ut = /* @__PURE__ */ Symbol("_assign"), Kr = /* @__PURE__ */ Symbol("_initialValue");
function Bn(A, e, t) {
  return e && (A = A.trim()), t && (A = hi(A)), A;
}
const is = {
  created(A, { modifiers: { lazy: e, trim: t, number: r } }, s) {
    A.parentNode && (A.type === "text" ? A[Kr] = A.defaultValue.replace(/[\r\n]/g, "") : A.type === "textarea" && (A[Kr] = A.defaultValue.replace(/\r\n?/g, `
`))), A[ut] = ps(s);
    const n = r || s.props && s.props.type === "number";
    lt(A, e ? "change" : "input", (i) => {
      i.target.composing || A[ut](Bn(A.value, t, n));
    }), (t || n) && lt(A, "change", () => {
      A.value = Bn(A.value, t, n);
    }), e || (lt(A, "compositionstart", sf), lt(A, "compositionend", Uo), lt(A, "change", Uo));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(A, { value: e, modifiers: { trim: t, number: r } }) {
    const s = e ?? "", n = A[Kr];
    delete A[Kr], n !== void 0 && (A.type === "text" || A.type === "textarea") && A.value !== n ? A[ut](Bn(A.value, t, r)) : A.value = s;
  },
  beforeUpdate(A, { value: e, oldValue: t, modifiers: { lazy: r, trim: s, number: n } }, i) {
    if (A[ut] = ps(i), A.composing) return;
    const o = (n || A.type === "number") && !/^0\d/.test(A.value) ? hi(A.value) : A.value, a = e ?? "";
    if (o === a)
      return;
    const c = A.getRootNode();
    (c instanceof Document || c instanceof ShadowRoot) && c.activeElement === A && A.type !== "range" && (r && e === t || s && A.value.trim() === a) || (A.value = a);
  }
}, JA = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(A, e, t) {
    A[ut] = ps(t), lt(A, "change", () => {
      const r = A._modelValue, s = nf(A), n = A.checked, i = A[ut];
      if (P(r)) {
        const o = _a(r, s), a = o !== -1;
        if (n && !a)
          i(r.concat(s));
        else if (!n && a) {
          const c = [...r];
          c.splice(o, 1), i(c);
        }
      } else if (Kt(r)) {
        const o = new Set(r);
        n ? o.add(s) : o.delete(s), i(o);
      } else
        i(Sl(A, n));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: Fo,
  beforeUpdate(A, e, t) {
    A[ut] = ps(t), Fo(A, e, t);
  }
};
function Fo(A, { value: e, oldValue: t }, r) {
  A._modelValue = e;
  let s;
  if (P(e))
    s = _a(e, r.props.value) > -1;
  else if (Kt(e))
    s = e.has(r.props.value);
  else {
    if (e === t) return;
    s = Dt(e, Sl(A, !0));
  }
  A.checked !== s && (A.checked = s);
}
function nf(A) {
  return "_value" in A ? A._value : A.value;
}
function Sl(A, e) {
  const t = e ? "_trueValue" : "_falseValue";
  return t in A ? A[t] : e;
}
const of = ["ctrl", "shift", "alt", "meta"], af = {
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
  exact: (A, e) => of.some((t) => A[`${t}Key`] && !e.includes(t))
}, Zt = (A, e) => {
  if (!A) return A;
  const t = A._withMods || (A._withMods = {}), r = e.join(".");
  return t[r] || (t[r] = (s, ...n) => {
    for (let i = 0; i < e.length; i++) {
      const o = af[e[i]];
      if (o && o(s, e)) return;
    }
    return A(s, ...n);
  });
}, lf = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, vo = (A, e) => {
  const t = A._withKeys || (A._withKeys = {}), r = e.join(".");
  return t[r] || (t[r] = (s) => {
    if (!("key" in s))
      return;
    const n = zA(s.key);
    if (e.some(
      (i) => i === n || lf[i] === n
    ))
      return A(s);
  });
}, cf = /* @__PURE__ */ UA({ patchProp: Af }, Ou);
let bo;
function Tl() {
  return bo || (bo = du(cf));
}
const Bf = (...A) => {
  Tl().render(...A);
}, Eo = (...A) => {
  const e = Tl().createApp(...A), { mount: t } = e;
  return e.mount = (r) => {
    const s = ff(r);
    if (!s) return;
    const n = e._component;
    !Z(n) && !n.render && !n.template && (n.template = s.innerHTML), s.nodeType === 1 && (s.textContent = "");
    const i = t(s, !1, uf(s));
    return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), i;
  }, e;
};
function uf(A) {
  if (A instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && A instanceof MathMLElement)
    return "mathml";
}
function ff(A) {
  return hA(A) ? document.querySelector(A) : A;
}
const gf = ".bug-capture-overlay[data-v-dd8a56ac]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:99999;display:flex;align-items:center;justify-content:center;background:#00000073;-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px)}.bug-capture-spinner[data-v-dd8a56ac]{display:flex;align-items:center;gap:10px;background:#141c28eb;border:1px solid rgba(255,255,255,.1);border-radius:10px;padding:16px 24px;color:#a8c0d8;font-size:13px;letter-spacing:.3px}.bug-capture-spin[data-v-dd8a56ac]{display:inline-block;width:16px;height:16px;border:2px solid rgba(136,170,255,.3);border-top-color:#8af;border-radius:50%;animation:bug-spin-dd8a56ac .7s linear infinite;flex-shrink:0}@keyframes bug-spin-dd8a56ac{to{transform:rotate(360deg)}}.bug-btn-save[data-v-dd8a56ac]{display:inline-flex;align-items:center;gap:5px;padding:5px 12px;border-radius:5px;border:1px solid rgba(46,204,113,.4);background:#2ecc711a;color:#2ecc71;font-size:11px;cursor:pointer;transition:background .15s}.bug-btn-save[data-v-dd8a56ac]:hover:not(:disabled){background:#2ecc7133}.bug-btn-save[data-v-dd8a56ac]:disabled{opacity:.5;cursor:default}.bug-btn-list[data-v-dd8a56ac]{padding:5px 10px;border-radius:5px;border:1px solid rgba(255,255,255,.1);background:#ffffff0a;color:#789;font-size:11px;cursor:pointer;margin-right:auto}.bug-btn-list[data-v-dd8a56ac]:hover{background:#ffffff14;color:#abc}", Dl = (A, e) => {
  const t = A.__vccOpts || A;
  for (const [r, s] of e)
    t[r] = s;
  return t;
}, df = [
  { value: "CRITICAL", label: "치명적" },
  { value: "HIGH", label: "높음" },
  { value: "MEDIUM", label: "보통" },
  { value: "LOW", label: "낮음" }
], hf = {
  name: "BugfixReportModal",
  // kit: createBugfix() 결과. Web Component 로 쓸 때는 엘리먼트 프로퍼티(el.kit = kit)로 들어온다
  props: { kit: { type: Object, default: null } },
  emits: ["open-viewer"],
  expose: ["open", "close"],
  mounted() {
    this._onKeydown = (A) => {
      A.key === "Escape" && this.isOpen && this.close();
    }, window.addEventListener("keydown", this._onKeydown);
  },
  beforeUnmount() {
    window.removeEventListener("keydown", this._onKeydown);
  },
  data() {
    return {
      isOpen: !1,
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
      severityOptions: df
    };
  },
  computed: {
    hotkey() {
      var A, e, t;
      return ((t = (e = (A = this.kit) == null ? void 0 : A.options) == null ? void 0 : e.hotkeys) == null ? void 0 : t.report) || "";
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
    async openReport() {
      var t, r;
      if (this.isCapturing || this.isOpen) return;
      this.problemDesc = "", this.reproSteps = "", this.expectedResult = "", this.severity = "MEDIUM", this.screenshotUrl = null, this.activeTab = "basic", this.expandedNet = null, this.logSource = "front", this.allLogs = ((t = this.kit) == null ? void 0 : t.getLogs()) ?? [], this.networkLogs = ((r = this.kit) == null ? void 0 : r.getNetwork()) ?? [], this.backendLogs = [], this.backendLogsState = "idle", this.isCapturing = !0, await this.$nextTick();
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
      this.isOpen = !1, this.screenshotUrl = null;
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
}, wf = { class: "bugfix-root" }, pf = {
  key: 0,
  class: "bug-capture-overlay"
}, Qf = { class: "bug-report-modal" }, Cf = { class: "bug-report-header" }, Uf = { class: "bug-report-title" }, Ff = {
  key: 0,
  class: "bug-report-shortcut"
}, vf = { class: "bug-report-tabs" }, bf = ["onClick"], Ef = {
  key: 0,
  class: "bug-tab-badge"
}, mf = { class: "bug-report-body" }, yf = { class: "bug-report-section" }, Hf = { class: "bug-report-label" }, If = ["disabled"], xf = { class: "screenshot-wrap" }, Lf = ["src"], _f = {
  key: 1,
  class: "screenshot-placeholder"
}, Kf = { class: "bug-report-section" }, Sf = { class: "severity-group" }, Tf = ["onClick"], Df = { class: "bug-report-section" }, Of = { class: "bug-report-section" }, Rf = { class: "bug-report-section" }, Mf = { class: "bug-report-section" }, kf = { class: "included-chips" }, Nf = { class: "chip" }, Vf = { class: "chip" }, Gf = {
  key: 0,
  class: "chip"
}, Pf = {
  key: 1,
  class: "chip"
}, Jf = { class: "log-source-toggle" }, Xf = {
  key: 0,
  class: "log-src-spin"
}, Wf = {
  key: 1,
  class: "log-src-err"
}, Yf = {
  key: 0,
  class: "bug-report-section"
}, Zf = { class: "bug-report-label" }, jf = { class: "log-filter-group" }, zf = { class: "log-filter-chip error" }, qf = { class: "log-filter-chip warn" }, $f = { class: "log-filter-chip log" }, Ag = { class: "log-list" }, eg = { class: "log-time" }, tg = { class: "log-badge-lv" }, rg = { class: "log-msg" }, sg = {
  key: 0,
  class: "log-empty"
}, ng = {
  key: 1,
  class: "bug-report-section"
}, ig = { class: "bug-report-label" }, og = { class: "log-filter-group" }, ag = { class: "log-filter-chip error" }, lg = { class: "log-filter-chip warn" }, cg = { class: "log-filter-chip log" }, Bg = {
  key: 0,
  class: "log-empty"
}, ug = {
  key: 1,
  class: "log-empty"
}, fg = {
  key: 2,
  class: "log-empty log-empty--error"
}, gg = {
  key: 3,
  class: "log-list"
}, dg = { class: "log-time" }, hg = { class: "log-badge-lv" }, wg = { class: "log-logger" }, pg = { class: "log-msg" }, Qg = {
  key: 0,
  class: "log-empty"
}, Cg = {
  key: 2,
  class: "bug-report-section"
}, Ug = { class: "net-list" }, Fg = ["onClick"], vg = { class: "net-method" }, bg = { class: "net-url" }, Eg = { class: "net-dur" }, mg = { class: "net-time" }, yg = {
  key: 0,
  class: "net-detail"
}, Hg = { key: 0 }, Ig = { key: 1 }, xg = { key: 2 }, Lg = {
  key: 3,
  class: "net-error-msg"
}, _g = {
  key: 0,
  class: "log-empty"
}, Kg = { class: "bug-report-section" }, Sg = { class: "log-list" }, Tg = { class: "log-time" }, Dg = { class: "mutation-type" }, Og = {
  key: 0,
  class: "log-msg mutation-payload"
}, Rg = {
  key: 0,
  class: "log-empty"
}, Mg = { class: "bug-report-section" }, kg = { class: "route-list" }, Ng = { class: "log-time" }, Vg = { class: "route-from" }, Gg = { class: "route-to" }, Pg = {
  key: 0,
  class: "log-empty"
}, Jg = {
  key: 0,
  class: "bug-report-section"
}, Xg = { class: "env-group" }, Wg = {
  key: 1,
  class: "bug-report-section"
}, Yg = { class: "env-group" }, Zg = { class: "env-row" }, jg = { class: "env-row" }, zg = { class: "env-row" }, qg = { class: "env-row" }, $g = { class: "env-row" }, Ad = {
  key: 0,
  class: "bug-report-section"
}, ed = {
  key: 1,
  class: "bug-report-section"
}, td = {
  key: 0,
  class: "env-group"
}, rd = { class: "env-row" }, sd = {
  key: 0,
  class: "env-row"
}, nd = {
  key: 1,
  class: "env-row"
}, id = { class: "env-group" }, od = { class: "env-row" }, ad = { class: "env-row" }, ld = { class: "env-row" }, cd = { class: "env-row" }, Bd = { class: "env-row" }, ud = { class: "env-group" }, fd = { class: "env-row" }, gd = { class: "env-row" }, dd = { class: "env-row" }, hd = { class: "env-list" }, wd = { key: 0 }, pd = { class: "env-row" }, Qd = { class: "env-list" }, Cd = { key: 0 }, Ud = {
  key: 0,
  class: "env-row"
}, Fd = { class: "env-list" }, vd = {
  key: 1,
  class: "env-row"
}, bd = { class: "env-list" }, Ed = { class: "env-group" }, md = { class: "event-list" }, yd = { class: "event-time" }, Hd = { class: "event-type" }, Id = {
  key: 0,
  class: "log-empty"
}, xd = {
  key: 1,
  class: "env-group"
}, Ld = { class: "env-row" }, _d = { class: "env-row" }, Kd = { class: "env-row" }, Sd = { class: "env-row" }, Td = { class: "env-group" }, Dd = { class: "env-row" }, Od = { class: "env-row" }, Rd = {
  key: 0,
  class: "env-row"
}, Md = {
  key: 1,
  class: "env-row"
}, kd = { class: "env-row" }, Nd = { class: "bug-report-footer" }, Vd = ["disabled", "title"], Gd = ["disabled"], Pd = {
  key: 0,
  class: "bug-capture-spin",
  style: { width: "11px", height: "11px", "border-width": "2px" }
}, Jd = ["disabled"];
function Xd(A, e, t, r, s, n) {
  var i, o, a, c, l, B, f, w, U, F;
  return p(), C("div", wf, [
    s.isCapturing && !s.isOpen ? (p(), C("div", pf, [...e[20] || (e[20] = [
      u("div", { class: "bug-capture-spinner" }, [
        u("span", { class: "bug-capture-spin" }),
        j(" 화면 캡처 중... ")
      ], -1)
    ])])) : K("", !0),
    s.isOpen ? (p(), C("div", {
      key: 1,
      class: "bug-report-overlay",
      onClick: e[19] || (e[19] = Zt((...h) => n.close && n.close(...h), ["self"]))
    }, [
      u("div", Qf, [
        u("div", Cf, [
          u("span", Uf, [
            e[21] || (e[21] = j("버그 신고 ", -1)),
            n.hotkey ? (p(), C("span", Ff, Q(n.hotkey), 1)) : K("", !0)
          ]),
          u("button", {
            class: "bug-report-close",
            onClick: e[0] || (e[0] = (...h) => n.close && n.close(...h))
          }, "✕")
        ]),
        u("div", vf, [
          (p(!0), C(Y, null, wA(n.tabs, (h) => (p(), C("button", {
            key: h.id,
            class: nA(["bug-tab", { active: s.activeTab === h.id }]),
            onClick: (b) => s.activeTab = h.id
          }, [
            j(Q(h.label) + " ", 1),
            h.badge ? (p(), C("span", Ef, Q(h.badge), 1)) : K("", !0)
          ], 10, bf))), 128))
        ]),
        u("div", mf, [
          s.activeTab === "basic" ? (p(), C(Y, { key: 0 }, [
            u("div", yf, [
              u("div", Hf, [
                e[22] || (e[22] = j(" 화면 캡처 ", -1)),
                u("button", {
                  class: "bug-btn-sm",
                  onClick: e[1] || (e[1] = (...h) => n.recapture && n.recapture(...h)),
                  disabled: s.isCapturing
                }, Q(s.isCapturing ? "캡처 중..." : "다시 찍기"), 9, If)
              ]),
              u("div", xf, [
                s.screenshotUrl ? (p(), C("img", {
                  key: 0,
                  src: s.screenshotUrl,
                  class: "screenshot-img",
                  alt: "screenshot"
                }, null, 8, Lf)) : (p(), C("div", _f, "캡처 중..."))
              ])
            ]),
            u("div", Kf, [
              e[23] || (e[23] = u("div", { class: "bug-report-label" }, "심각도", -1)),
              u("div", Sf, [
                (p(!0), C(Y, null, wA(s.severityOptions, (h) => (p(), C("button", {
                  key: h.value,
                  class: nA(["severity-btn", `severity-btn--${h.value.toLowerCase()}`, { active: s.severity === h.value }]),
                  onClick: (b) => s.severity = h.value
                }, Q(h.label), 11, Tf))), 128))
              ])
            ]),
            u("div", Df, [
              e[24] || (e[24] = u("div", { class: "bug-report-label" }, "문제 상황", -1)),
              xA(u("textarea", {
                "onUpdate:modelValue": e[2] || (e[2] = (h) => s.problemDesc = h),
                class: "bug-report-textarea",
                placeholder: "어떤 문제가 발생했나요?",
                rows: "2"
              }, null, 512), [
                [is, s.problemDesc]
              ])
            ]),
            u("div", Of, [
              e[25] || (e[25] = u("div", { class: "bug-report-label" }, "재현 단계", -1)),
              xA(u("textarea", {
                "onUpdate:modelValue": e[3] || (e[3] = (h) => s.reproSteps = h),
                class: "bug-report-textarea",
                placeholder: `1. …
2. …
3. …`,
                rows: "3"
              }, null, 512), [
                [is, s.reproSteps]
              ])
            ]),
            u("div", Rf, [
              e[26] || (e[26] = u("div", { class: "bug-report-label" }, "기대 결과", -1)),
              xA(u("textarea", {
                "onUpdate:modelValue": e[4] || (e[4] = (h) => s.expectedResult = h),
                class: "bug-report-textarea",
                placeholder: "어떻게 동작해야 하나요?",
                rows: "2"
              }, null, 512), [
                [is, s.expectedResult]
              ])
            ]),
            u("div", Mf, [
              e[30] || (e[30] = u("div", { class: "bug-report-label" }, "다운로드에 포함되는 정보", -1)),
              u("div", kf, [
                e[27] || (e[27] = u("span", { class: "chip" }, "📸 스크린샷", -1)),
                e[28] || (e[28] = u("span", { class: "chip" }, "🌐 환경 정보", -1)),
                u("span", Nf, "📡 네트워크 요청 (" + Q(s.networkLogs.length) + "건)", 1),
                u("span", Vf, "📋 프론트 로그 (" + Q(s.allLogs.length) + "건)", 1),
                u("span", {
                  class: nA(["chip", s.backendLogsState === "ok" ? "chip--ok" : s.backendLogsState === "error" ? "chip--err" : ""])
                }, " 🖥 백엔드 로그 (" + Q(s.backendLogsState === "ok" ? s.backendLogs.length + "건" : s.backendLogsState === "loading" ? "로딩 중" : s.backendLogsState === "skipped" ? "프론트 에러로 판단, 미수집" : s.backendLogsState === "error" ? "조회 실패" : "대기") + ") ", 3),
                (i = s.context) != null && i.camera ? (p(), C("span", Gf, "📍 카메라 위치")) : K("", !0),
                e[29] || (e[29] = u("span", { class: "chip" }, "🗂 앱 상태", -1)),
                (o = s.context) != null && o.user ? (p(), C("span", Pf, "👤 " + Q(s.context.user.username), 1)) : K("", !0)
              ])
            ])
          ], 64)) : K("", !0),
          s.activeTab === "logs" ? (p(), C(Y, { key: 1 }, [
            u("div", Jf, [
              u("button", {
                class: nA(["log-src-btn", { active: s.logSource === "front" }]),
                onClick: e[5] || (e[5] = (h) => s.logSource = "front")
              }, " 프론트엔드 ", 2),
              u("button", {
                class: nA(["log-src-btn", { active: s.logSource === "backend" }]),
                onClick: e[6] || (e[6] = (h) => s.logSource = "backend")
              }, [
                e[31] || (e[31] = j(" 백엔드 ", -1)),
                s.backendLogsState === "loading" ? (p(), C("span", Xf, "⟳")) : s.backendLogsState === "error" ? (p(), C("span", Wf, "!")) : K("", !0)
              ], 2)
            ]),
            s.logSource === "front" ? (p(), C("div", Yf, [
              u("div", Zf, [
                e[32] || (e[32] = j(" 프론트엔드 콘솔 로그 ", -1)),
                u("div", jf, [
                  u("label", zf, [
                    xA(u("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": e[7] || (e[7] = (h) => s.showError = h)
                    }, null, 512), [
                      [JA, s.showError]
                    ]),
                    j(" 오류 (" + Q(n.countByLevel("error")) + ")", 1)
                  ]),
                  u("label", qf, [
                    xA(u("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": e[8] || (e[8] = (h) => s.showWarn = h)
                    }, null, 512), [
                      [JA, s.showWarn]
                    ]),
                    j(" 경고 (" + Q(n.countByLevel("warn")) + ")", 1)
                  ]),
                  u("label", $f, [
                    xA(u("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": e[9] || (e[9] = (h) => s.showLog = h)
                    }, null, 512), [
                      [JA, s.showLog]
                    ]),
                    j(" 로그 (" + Q(n.countByLevel("log")) + ")", 1)
                  ])
                ])
              ]),
              u("div", Ag, [
                (p(!0), C(Y, null, wA(n.filteredLogs, (h, b) => (p(), C("div", {
                  key: b,
                  class: nA(["log-item", `log-item--${h.level}`])
                }, [
                  u("span", eg, Q(h.time.slice(11)), 1),
                  u("span", tg, Q(h.level), 1),
                  u("span", rg, Q(h.message), 1)
                ], 2))), 128)),
                n.filteredLogs.length === 0 ? (p(), C("div", sg, "표시할 로그가 없습니다")) : K("", !0)
              ])
            ])) : K("", !0),
            s.logSource === "backend" ? (p(), C("div", ng, [
              u("div", ig, [
                e[33] || (e[33] = j(" 백엔드 서버 로그 ", -1)),
                u("div", og, [
                  u("label", ag, [
                    xA(u("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": e[10] || (e[10] = (h) => s.showBEError = h)
                    }, null, 512), [
                      [JA, s.showBEError]
                    ]),
                    j(" ERROR (" + Q(n.countBackendByLevel("ERROR")) + ")", 1)
                  ]),
                  u("label", lg, [
                    xA(u("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": e[11] || (e[11] = (h) => s.showBEWarn = h)
                    }, null, 512), [
                      [JA, s.showBEWarn]
                    ]),
                    j(" WARN (" + Q(n.countBackendByLevel("WARN")) + ")", 1)
                  ]),
                  u("label", cg, [
                    xA(u("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": e[12] || (e[12] = (h) => s.showBEInfo = h)
                    }, null, 512), [
                      [JA, s.showBEInfo]
                    ]),
                    j(" INFO (" + Q(n.countBackendByLevel("INFO")) + ")", 1)
                  ])
                ])
              ]),
              s.backendLogsState === "loading" ? (p(), C("div", Bg, "백엔드 로그 가져오는 중...")) : s.backendLogsState === "skipped" ? (p(), C("div", ug, [
                e[34] || (e[34] = j(" 네트워크 오류 없음 — 프론트엔드 에러로 판단하여 미수집 ", -1)),
                u("button", {
                  class: "bug-btn-sm",
                  style: { "margin-top": "8px" },
                  onClick: e[13] || (e[13] = (...h) => n.fetchBackendLogs && n.fetchBackendLogs(...h))
                }, "그래도 가져오기")
              ])) : s.backendLogsState === "error" ? (p(), C("div", fg, "백엔드 로그 조회 실패 (인증 확인)")) : (p(), C("div", gg, [
                (p(!0), C(Y, null, wA(n.filteredBackendLogs, (h, b) => (p(), C("div", {
                  key: b,
                  class: nA(["log-item", `log-item--${h.level.toLowerCase()}`])
                }, [
                  u("span", dg, Q(h.time.slice(11)), 1),
                  u("span", hg, Q(h.level), 1),
                  u("span", wg, Q(h.logger), 1),
                  u("span", pg, Q(h.message), 1)
                ], 2))), 128)),
                n.filteredBackendLogs.length === 0 ? (p(), C("div", Qg, "표시할 로그가 없습니다")) : K("", !0)
              ]))
            ])) : K("", !0)
          ], 64)) : K("", !0),
          s.activeTab === "network" ? (p(), C("div", Cg, [
            e[42] || (e[42] = u("div", { class: "bug-report-label" }, "최근 API 요청 (최대 50건, 최신순)", -1)),
            u("div", Ug, [
              (p(!0), C(Y, null, wA(n.reversedNetwork, (h, b) => {
                var m;
                return p(), C(Y, { key: b }, [
                  u("div", {
                    class: nA(["net-item", h.error || h.status >= 400 ? "net-item--error" : ""]),
                    onClick: (k) => n.toggleNetDetail(b)
                  }, [
                    u("span", {
                      class: nA(["net-status", n.statusClass(h.status)])
                    }, Q(h.status), 3),
                    u("span", vg, Q(h.method), 1),
                    u("span", bg, Q(h.url), 1),
                    u("span", Eg, Q(h.duration) + "ms", 1),
                    u("span", mg, Q((m = h.time) == null ? void 0 : m.slice(11, 19)), 1)
                  ], 10, Fg),
                  s.expandedNet === b ? (p(), C("div", yg, [
                    h.params ? (p(), C("div", Hg, [
                      e[35] || (e[35] = u("b", null, "Params:", -1)),
                      e[36] || (e[36] = j()),
                      u("code", null, Q(h.params), 1)
                    ])) : K("", !0),
                    h.requestBody ? (p(), C("div", Ig, [
                      e[37] || (e[37] = u("b", null, "Request:", -1)),
                      e[38] || (e[38] = j()),
                      u("code", null, Q(h.requestBody), 1)
                    ])) : K("", !0),
                    h.responseBody ? (p(), C("div", xg, [
                      e[39] || (e[39] = u("b", null, "Response:", -1)),
                      e[40] || (e[40] = j()),
                      u("code", null, Q(h.responseBody), 1)
                    ])) : K("", !0),
                    h.error ? (p(), C("div", Lg, [
                      e[41] || (e[41] = u("b", null, "Error:", -1)),
                      j(" " + Q(h.error), 1)
                    ])) : K("", !0)
                  ])) : K("", !0)
                ], 64);
              }), 128)),
              s.networkLogs.length === 0 ? (p(), C("div", _g, "기록된 요청이 없습니다")) : K("", !0)
            ])
          ])) : K("", !0),
          s.activeTab === "state" ? (p(), C(Y, { key: 3 }, [
            u("div", Kg, [
              e[43] || (e[43] = u("div", { class: "bug-report-label" }, "Vuex Mutation 이력 (최신순, 최대 100건)", -1)),
              u("div", Sg, [
                (p(!0), C(Y, null, wA(((a = s.context) == null ? void 0 : a.mutationLog) || [], (h, b) => (p(), C("div", {
                  key: b,
                  class: "log-item"
                }, [
                  u("span", Tg, Q(h.time), 1),
                  u("span", Dg, Q(h.type), 1),
                  h.payload !== null ? (p(), C("span", Og, Q(n.formatPayload(h.payload)), 1)) : K("", !0)
                ]))), 128)),
                (l = (c = s.context) == null ? void 0 : c.mutationLog) != null && l.length ? K("", !0) : (p(), C("div", Rg, "기록된 mutation이 없습니다"))
              ])
            ]),
            u("div", Mg, [
              e[45] || (e[45] = u("div", { class: "bug-report-label" }, "라우터 이력", -1)),
              u("div", kg, [
                (p(!0), C(Y, null, wA(((B = s.context) == null ? void 0 : B.routeHistory) || [], (h, b) => (p(), C("div", {
                  key: b,
                  class: "route-item"
                }, [
                  u("span", Ng, Q(h.time), 1),
                  u("span", Vg, Q(h.from), 1),
                  e[44] || (e[44] = u("span", { class: "route-arrow" }, "→", -1)),
                  u("span", Gg, Q(h.to), 1)
                ]))), 128)),
                (w = (f = s.context) == null ? void 0 : f.routeHistory) != null && w.length ? K("", !0) : (p(), C("div", Pg, "기록된 라우터 이력이 없습니다"))
              ])
            ]),
            (U = s.context) != null && U.storage && Object.keys(s.context.storage).length ? (p(), C("div", Jg, [
              e[46] || (e[46] = u("div", { class: "bug-report-label" }, "localStorage (민감 키 제외)", -1)),
              u("div", Xg, [
                (p(!0), C(Y, null, wA(s.context.storage, (h, b) => (p(), C("div", {
                  key: b,
                  class: "env-row"
                }, [
                  u("span", null, Q(b), 1),
                  u("span", null, Q(h), 1)
                ]))), 128))
              ])
            ])) : K("", !0),
            (F = s.context) != null && F.cesiumPerf ? (p(), C("div", Wg, [
              e[52] || (e[52] = u("div", { class: "bug-report-label" }, "Cesium 성능 지표", -1)),
              u("div", Yg, [
                u("div", Zg, [
                  e[47] || (e[47] = u("span", null, "Primitives", -1)),
                  u("span", null, Q(s.context.cesiumPerf.primitives), 1)
                ]),
                u("div", jg, [
                  e[48] || (e[48] = u("span", null, "Tiles Loaded", -1)),
                  u("span", null, Q(s.context.cesiumPerf.tilesLoaded), 1)
                ]),
                u("div", zg, [
                  e[49] || (e[49] = u("span", null, "Max Screen Space Error", -1)),
                  u("span", null, Q(s.context.cesiumPerf.maximumScreenSpaceError), 1)
                ]),
                u("div", qg, [
                  e[50] || (e[50] = u("span", null, "Shadows", -1)),
                  u("span", null, Q(s.context.cesiumPerf.shadowsEnabled ? "활성" : "비활성"), 1)
                ]),
                u("div", $g, [
                  e[51] || (e[51] = u("span", null, "MSAA Samples", -1)),
                  u("span", null, Q(s.context.cesiumPerf.msaaSamples), 1)
                ])
              ])
            ])) : K("", !0)
          ], 64)) : K("", !0),
          s.activeTab === "env" ? (p(), C(Y, { key: 4 }, [
            s.context ? (p(), C("div", ed, [
              s.context.user ? (p(), C("div", td, [
                e[57] || (e[57] = u("div", { class: "env-group-title" }, "사용자", -1)),
                u("div", rd, [
                  e[54] || (e[54] = u("span", null, "아이디", -1)),
                  u("span", null, Q(s.context.user.username), 1)
                ]),
                s.context.user.roles.length ? (p(), C("div", sd, [
                  e[55] || (e[55] = u("span", null, "권한", -1)),
                  u("span", null, Q(s.context.user.roles.join(", ")), 1)
                ])) : K("", !0),
                s.context.user.exp ? (p(), C("div", nd, [
                  e[56] || (e[56] = u("span", null, "토큰 만료", -1)),
                  u("span", null, Q(s.context.user.exp), 1)
                ])) : K("", !0)
              ])) : K("", !0),
              u("div", id, [
                e[63] || (e[63] = u("div", { class: "env-group-title" }, "메뉴 상태", -1)),
                u("div", od, [
                  e[58] || (e[58] = u("span", null, "상단 탭", -1)),
                  u("span", null, Q(s.context.menus.headerName), 1)
                ]),
                u("div", ad, [
                  e[59] || (e[59] = u("span", null, "하위 메뉴", -1)),
                  u("span", null, Q(s.context.menus.subMenuName), 1)
                ]),
                u("div", ld, [
                  e[60] || (e[60] = u("span", null, "좌측 메뉴", -1)),
                  u("span", null, Q(n.joinOrNone(s.context.menus.leftMenus)), 1)
                ]),
                u("div", cd, [
                  e[61] || (e[61] = u("span", null, "열린 패널", -1)),
                  u("span", null, Q(n.joinOrNone(s.context.menus.openPanels)), 1)
                ]),
                u("div", Bd, [
                  e[62] || (e[62] = u("span", null, "활성 도구", -1)),
                  u("span", null, Q(n.joinOrNone(s.context.menus.activeTools)), 1)
                ])
              ]),
              u("div", ud, [
                e[66] || (e[66] = u("div", { class: "env-group-title" }, "표시 중인 데이터", -1)),
                u("div", fd, [
                  e[64] || (e[64] = u("span", null, "지도 타입", -1)),
                  u("span", null, Q(s.context.activeData.mapType), 1)
                ]),
                u("div", gd, [
                  e[65] || (e[65] = u("span", null, "지형", -1)),
                  u("span", null, Q(s.context.activeData.terrain || "기본"), 1)
                ]),
                u("div", dd, [
                  u("span", null, "데이터셋 (" + Q(s.context.activeData.datasets.length) + ")", 1),
                  u("span", hd, [
                    s.context.activeData.datasets.length ? K("", !0) : (p(), C("span", wd, "없음")),
                    (p(!0), C(Y, null, wA(s.context.activeData.datasets, (h) => (p(), C("span", {
                      key: h.layerId,
                      class: "env-tag"
                    }, Q(h._displayName), 1))), 128))
                  ])
                ]),
                u("div", pd, [
                  u("span", null, "3D 타일 (" + Q(s.context.activeData.threeDTiles.length) + ")", 1),
                  u("span", Qd, [
                    s.context.activeData.threeDTiles.length ? K("", !0) : (p(), C("span", Cd, "없음")),
                    (p(!0), C(Y, null, wA(s.context.activeData.threeDTiles, (h) => (p(), C("span", {
                      key: h.threeDTilesId || h.sourceId,
                      class: "env-tag"
                    }, Q(h._displayName), 1))), 128))
                  ])
                ]),
                s.context.activeData.autoPlacement.length ? (p(), C("div", Ud, [
                  u("span", null, "배치안 (" + Q(s.context.activeData.autoPlacement.length) + ")", 1),
                  u("span", Fd, [
                    (p(!0), C(Y, null, wA(s.context.activeData.autoPlacement, (h) => (p(), C("span", {
                      key: h.sourceId,
                      class: "env-tag"
                    }, Q(h._displayName), 1))), 128))
                  ])
                ])) : K("", !0),
                s.context.activeData.topicMaps.length ? (p(), C("div", vd, [
                  u("span", null, "주제도 (" + Q(s.context.activeData.topicMaps.length) + ")", 1),
                  u("span", bd, [
                    (p(!0), C(Y, null, wA(s.context.activeData.topicMaps, (h) => (p(), C("span", {
                      key: h.key,
                      class: "env-tag"
                    }, Q(h._displayName), 1))), 128))
                  ])
                ])) : K("", !0)
              ]),
              u("div", Ed, [
                e[67] || (e[67] = u("div", { class: "env-group-title" }, "최근 이벤트 (최신순)", -1)),
                u("div", md, [
                  (p(!0), C(Y, null, wA(s.context.recentEvents.slice(0, 30), (h, b) => (p(), C("div", {
                    key: b,
                    class: "event-item"
                  }, [
                    u("span", yd, Q(h.time), 1),
                    u("span", Hd, Q(h.type), 1)
                  ]))), 128)),
                  s.context.recentEvents.length ? K("", !0) : (p(), C("div", Id, "기록된 이벤트 없음"))
                ])
              ]),
              s.context.camera ? (p(), C("div", xd, [
                e[72] || (e[72] = u("div", { class: "env-group-title" }, "카메라 위치", -1)),
                u("div", Ld, [
                  e[68] || (e[68] = u("span", null, "경도", -1)),
                  u("span", null, Q(s.context.camera.longitude), 1)
                ]),
                u("div", _d, [
                  e[69] || (e[69] = u("span", null, "위도", -1)),
                  u("span", null, Q(s.context.camera.latitude), 1)
                ]),
                u("div", Kd, [
                  e[70] || (e[70] = u("span", null, "높이 (m)", -1)),
                  u("span", null, Q(s.context.camera.height), 1)
                ]),
                u("div", Sd, [
                  e[71] || (e[71] = u("span", null, "Heading / Pitch", -1)),
                  u("span", null, Q(s.context.camera.heading) + "° / " + Q(s.context.camera.pitch) + "°", 1)
                ])
              ])) : K("", !0),
              u("div", Td, [
                e[78] || (e[78] = u("div", { class: "env-group-title" }, "브라우저 / 화면", -1)),
                u("div", Dd, [
                  e[73] || (e[73] = u("span", null, "일시", -1)),
                  u("span", null, Q(s.context.datetime), 1)
                ]),
                u("div", Od, [
                  e[74] || (e[74] = u("span", null, "해상도", -1)),
                  u("span", null, Q(s.context.screen.resolution) + " · 뷰포트 " + Q(s.context.screen.viewport), 1)
                ]),
                s.context.memory ? (p(), C("div", Rd, [
                  e[75] || (e[75] = u("span", null, "JS 힙 메모리", -1)),
                  u("span", null, Q(s.context.memory.usedMB) + "MB / " + Q(s.context.memory.limitMB) + "MB", 1)
                ])) : K("", !0),
                s.context.connection ? (p(), C("div", Md, [
                  e[76] || (e[76] = u("span", null, "네트워크", -1)),
                  u("span", null, Q(s.context.connection.effectiveType) + " · " + Q(s.context.connection.downlink) + "Mbps", 1)
                ])) : K("", !0),
                u("div", kd, [
                  e[77] || (e[77] = u("span", null, "언어", -1)),
                  u("span", null, Q(s.context.browser.language), 1)
                ])
              ])
            ])) : (p(), C("div", Ad, [...e[53] || (e[53] = [
              u("div", { class: "log-empty log-empty--error" }, "컨텍스트 수집에 실패했습니다 (콘솔 확인)", -1)
            ])]))
          ], 64)) : K("", !0)
        ]),
        u("div", Nd, [
          n.serverEnabled ? (p(), C("button", {
            key: 0,
            class: "bug-btn-list",
            onClick: e[14] || (e[14] = (...h) => n.openViewer && n.openViewer(...h))
          }, "저장 목록")) : K("", !0),
          u("button", {
            class: "bug-btn-cancel",
            onClick: e[15] || (e[15] = (...h) => n.close && n.close(...h))
          }, "취소"),
          u("button", {
            class: "bug-btn-copy",
            onClick: e[16] || (e[16] = (...h) => n.copyToClipboard && n.copyToClipboard(...h)),
            disabled: !s.screenshotUrl,
            title: s.copyStatus
          }, [
            e[79] || (e[79] = u("svg", {
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
            j(" " + Q(s.copyStatus), 1)
          ], 8, Vd),
          n.serverEnabled ? (p(), C("button", {
            key: 1,
            class: "bug-btn-save",
            onClick: e[17] || (e[17] = (...h) => n.saveToServer && n.saveToServer(...h)),
            disabled: s.isSaving || !s.screenshotUrl
          }, [
            s.isSaving ? (p(), C("span", Pd)) : K("", !0),
            j(" " + Q(s.saveStatus), 1)
          ], 8, Gd)) : K("", !0),
          u("button", {
            class: "bug-btn-download",
            onClick: e[18] || (e[18] = (...h) => n.download && n.download(...h)),
            disabled: !s.screenshotUrl
          }, " 다운로드 ", 8, Jd)
        ])
      ])
    ])) : K("", !0)
  ]);
}
const Wd = /* @__PURE__ */ Dl(hf, [["render", Xd], ["styles", [gf]], ["__scopeId", "data-v-dd8a56ac"]]), Yd = ".brv-notice[data-v-eac50cfc]{margin:0 16px;padding:8px 12px;border-radius:6px;font-size:12px;background:#eef4ff;color:#1e3a8a}.brv-notice--error[data-v-eac50cfc]{background:#fdecec;color:#8a1c1c}.brv-notice--success[data-v-eac50cfc]{background:#e9f8ee;color:#14532d}.brv-modal[data-v-eac50cfc]{-webkit-user-select:none;user-select:none}.brv-selectable[data-v-eac50cfc],.brv-log-list[data-v-eac50cfc],.brv-net-detail[data-v-eac50cfc],.brv-text[data-v-eac50cfc]{-webkit-user-select:text;user-select:text;cursor:text}.brv-overlay[data-v-eac50cfc]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:99998;background:#00000080;display:flex;align-items:center;justify-content:center}.brv-modal[data-v-eac50cfc]{background:#141c28;border:1px solid rgba(255,255,255,.1);border-radius:10px;width:700px;max-width:96vw;max-height:84vh;display:flex;flex-direction:column;overflow:hidden}.brv-header[data-v-eac50cfc]{display:flex;align-items:center;justify-content:space-between;padding:12px 16px;border-bottom:1px solid rgba(255,255,255,.08);flex-shrink:0}.brv-title[data-v-eac50cfc]{font-size:13px;font-weight:600;color:#c8d8e8}.brv-shortcut[data-v-eac50cfc]{font-size:10px;font-weight:400;color:#456;margin-left:6px}.brv-close[data-v-eac50cfc]{background:none;border:none;color:#789;cursor:pointer;font-size:14px}.brv-close[data-v-eac50cfc]:hover{color:#fff}.brv-body[data-v-eac50cfc]{flex:1;overflow-y:auto;padding:12px 16px}.brv-loading[data-v-eac50cfc]{display:flex;align-items:center;gap:8px;color:#8ac;font-size:12px;padding:16px 0}.brv-empty[data-v-eac50cfc]{color:#567;font-size:12px;padding:16px 0;text-align:center}.brv-list[data-v-eac50cfc]{display:flex;flex-direction:column;gap:6px}.brv-item[data-v-eac50cfc]{display:flex;align-items:center;gap:8px;padding:8px 10px;background:#ffffff08;border:1px solid rgba(255,255,255,.07);border-radius:6px;cursor:pointer;transition:background .15s}.brv-item[data-v-eac50cfc]:hover{background:#ffffff12}.brv-problem[data-v-eac50cfc]{flex:1;font-size:12px;color:#c8d8e8;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.brv-meta[data-v-eac50cfc]{font-size:10px;color:#567;white-space:nowrap}.brv-del[data-v-eac50cfc]{background:none;border:none;color:#456;cursor:pointer;font-size:11px;padding:2px 4px}.brv-del[data-v-eac50cfc]:hover{color:#e74c3c}.brv-badge[data-v-eac50cfc]{font-size:10px;font-weight:600;padding:2px 7px;border-radius:4px;white-space:nowrap;background:#ffffff14;color:#abc}.brv-sev--critical[data-v-eac50cfc]{background:#e74c3c40;color:#e74c3c}.brv-sev--high[data-v-eac50cfc]{background:#e67e2240;color:#e6802e}.brv-sev--medium[data-v-eac50cfc]{background:#f1c40f33;color:#f1c40f}.brv-sev--low[data-v-eac50cfc]{background:#2ecc7133;color:#2ecc71}.brv-status[data-v-eac50cfc]{font-size:10px;font-weight:600;padding:2px 7px;border-radius:4px;white-space:nowrap;flex-shrink:0}.brv-st--open[data-v-eac50cfc]{background:#88aaff2e;color:#8af}.brv-st--in_progress[data-v-eac50cfc]{background:#f1c40f2e;color:#f1c40f}.brv-st--resolved[data-v-eac50cfc]{background:#2ecc7133;color:#2ecc71}.brv-st--closed[data-v-eac50cfc]{background:#7888992e;color:#89a}.brv-status-control[data-v-eac50cfc]{display:flex;align-items:center;gap:6px}.brv-status-select[data-v-eac50cfc]{font-size:11px;font-weight:600;padding:3px 8px;border-radius:4px;cursor:pointer;background:#ffffff0f;border:1px solid rgba(255,255,255,.12);color:#c8d8e8}.brv-status-select[data-v-eac50cfc]:disabled{opacity:.5;cursor:default}.brv-status-select option[data-v-eac50cfc]{background:#141c28;color:#c8d8e8}.brv-spin--sm[data-v-eac50cfc]{width:11px;height:11px;border-width:2px}.brv-back[data-v-eac50cfc]{background:none;border:none;color:#8ac;cursor:pointer;font-size:11px;padding:0 0 10px;display:block}.brv-back[data-v-eac50cfc]:hover{color:#fff}.brv-screenshot[data-v-eac50cfc]{width:100%;border-radius:6px;border:1px solid rgba(255,255,255,.08);margin-top:4px}.brv-section[data-v-eac50cfc]{margin-bottom:16px}.brv-fix[data-v-eac50cfc]{display:inline-block;padding:1px 7px;border-radius:10px;font-size:11px;background:#e9eef3;color:#445}.brv-fix--queued[data-v-eac50cfc]{background:#fff3cd;color:#7a5a00}.brv-fix--running[data-v-eac50cfc]{background:#dbeafe;color:#1e3a8a}.brv-fix--pr_opened[data-v-eac50cfc]{background:#e0f2fe;color:#075985}.brv-fix--merged[data-v-eac50cfc]{background:#dcfce7;color:#166534}.brv-fix--failed[data-v-eac50cfc]{background:#fee2e2;color:#991b1b}.brv-link[data-v-eac50cfc]{color:#2563eb;text-decoration:underline;word-break:break-all}.brv-fix-summary[data-v-eac50cfc]{margin-top:6px}.brv-fix-actions[data-v-eac50cfc]{display:flex;gap:6px;margin-top:8px}.brv-fix-btn[data-v-eac50cfc]{padding:6px 12px;border:1px solid #2563eb;border-radius:6px;background:#2563eb;color:#fff;font-size:12px;cursor:pointer}.brv-fix-btn[data-v-eac50cfc]:disabled{opacity:.55;cursor:default}.brv-fix-btn--ghost[data-v-eac50cfc]{background:transparent;color:#2563eb}.brv-hint[data-v-eac50cfc]{margin-top:6px;font-size:11px;color:#667;line-height:1.5}.brv-fix-elapsed[data-v-eac50cfc]{margin-left:6px;font-size:11px;color:#667}.brv-fix-log[data-v-eac50cfc]{margin-top:8px;font-size:11px}.brv-fix-log summary[data-v-eac50cfc]{cursor:pointer;color:#445}.brv-fix-log pre[data-v-eac50cfc]{margin:6px 0 0;max-height:260px;overflow:auto;padding:8px;background:#1f2530;color:#d8dee6;border-radius:6px;white-space:pre-wrap;word-break:break-all;font-size:11px;line-height:1.45;font-family:ui-monospace,Menlo,Consolas,monospace}.brv-fix-summary[data-v-eac50cfc]{color:inherit}.brv-chat[data-v-eac50cfc]{margin-top:10px;border-top:1px dashed #c9d0d8;padding-top:8px}.brv-chat__msg[data-v-eac50cfc]{margin:6px 0;font-size:12px}.brv-chat__who[data-v-eac50cfc]{display:inline-block;min-width:44px;font-size:11px;color:#667}.brv-chat__msg--user .brv-chat__who[data-v-eac50cfc]{color:#1e5bb8}.brv-chat__text[data-v-eac50cfc]{display:inline-block;max-width:calc(100% - 52px);vertical-align:top;white-space:pre-wrap;word-break:break-word;line-height:1.5}.brv-chat__input[data-v-eac50cfc]{width:100%;box-sizing:border-box;margin-top:6px;padding:6px 8px;font-size:12px;border:1px solid #c9d0d8;border-radius:6px;resize:vertical;color:inherit;background:transparent}.brv-label[data-v-eac50cfc]{font-size:10px;color:#567;font-weight:600;text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px}.brv-label-row[data-v-eac50cfc]{display:flex;align-items:center;justify-content:space-between;margin-bottom:6px}.brv-row[data-v-eac50cfc]{display:flex;justify-content:space-between;align-items:flex-start;gap:8px;font-size:11px;color:#a8b8c8;padding:4px 0;border-bottom:1px solid rgba(255,255,255,.04)}.brv-row>span[data-v-eac50cfc]:first-child{color:#567;flex-shrink:0}.brv-row>span[data-v-eac50cfc]:last-child{text-align:right;word-break:break-all}.brv-field[data-v-eac50cfc]{margin-bottom:8px}.brv-field-label[data-v-eac50cfc]{font-size:10px;color:#456;margin-bottom:3px}.brv-text[data-v-eac50cfc]{font-size:11px;color:#c8d8e8;line-height:1.6;white-space:pre-wrap;background:#0003;padding:8px;border-radius:4px}.brv-log-tabs[data-v-eac50cfc]{display:flex;gap:4px}.brv-log-tab[data-v-eac50cfc]{display:flex;align-items:center;gap:4px;padding:3px 9px;border-radius:4px;border:1px solid rgba(255,255,255,.08);background:#ffffff08;color:#678;font-size:11px;cursor:pointer;transition:background .15s}.brv-log-tab[data-v-eac50cfc]:hover{background:#ffffff12;color:#abc}.brv-log-tab.active[data-v-eac50cfc]{background:#88aaff1f;border-color:#88aaff4d;color:#8af}.brv-log-tab-count[data-v-eac50cfc]{font-size:9px;font-weight:700;padding:1px 4px;border-radius:8px;background:#e74c3c4d;color:#e87070}.brv-cnt-err[data-v-eac50cfc]{background:#e74c3c4d;color:#e87070}.brv-log-filters[data-v-eac50cfc]{display:flex;gap:6px;margin-bottom:6px;flex-wrap:wrap}.brv-filter-chip[data-v-eac50cfc]{display:flex;align-items:center;gap:4px;font-size:10px;color:#678;cursor:pointer;padding:2px 6px;border-radius:4px;border:1px solid rgba(255,255,255,.06);background:#ffffff05}.brv-filter-chip[data-v-eac50cfc]:hover{background:#ffffff0f}.brv-filter-error[data-v-eac50cfc]{color:#c06060}.brv-filter-warn[data-v-eac50cfc]{color:#b09040}.brv-filter-log[data-v-eac50cfc]{color:#589}.brv-log-list[data-v-eac50cfc]{max-height:220px;overflow-y:auto;background:#00000040;border-radius:5px;border:1px solid rgba(255,255,255,.05);font-family:Consolas,Menlo,monospace}.brv-log-item[data-v-eac50cfc]{display:flex;gap:6px;align-items:flex-start;font-size:10.5px;color:#a8b8c8;padding:3px 8px;border-bottom:1px solid rgba(255,255,255,.03);cursor:pointer}.brv-log-item[data-v-eac50cfc]:hover{background:#ffffff0a}.brv-log-item[data-v-eac50cfc]:last-child{border-bottom:none}.brv-log-time[data-v-eac50cfc]{color:#456;flex-shrink:0;font-size:10px;padding-top:1px}.brv-log-lv[data-v-eac50cfc]{font-weight:700;flex-shrink:0;width:38px;font-size:10px;padding-top:1px}.brv-log-logger[data-v-eac50cfc]{color:#578;flex-shrink:0;max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:10px;padding-top:1px}.brv-log-msg[data-v-eac50cfc]{flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.brv-log-msg.expanded[data-v-eac50cfc]{white-space:pre-wrap;overflow:visible}.brv-log-payload[data-v-eac50cfc]{color:#567;font-size:10px;max-width:160px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding-top:1px}.brv-mutation[data-v-eac50cfc]{color:#8ac;font-weight:600}.brv-log--error[data-v-eac50cfc]{color:#e87070}.brv-log--warn[data-v-eac50cfc]{color:#d4a84b}.brv-log--info[data-v-eac50cfc]{color:#a8b8c8}.brv-log-empty[data-v-eac50cfc]{padding:12px 8px;color:#456;font-size:11px;text-align:center}.brv-net-item[data-v-eac50cfc]{display:flex;gap:6px;align-items:flex-start;font-size:10.5px;color:#a8b8c8;padding:3px 8px;border-bottom:1px solid rgba(255,255,255,.03);cursor:pointer;font-family:Consolas,Menlo,monospace}.brv-net-item[data-v-eac50cfc]:hover{background:#ffffff0a}.brv-net-err[data-v-eac50cfc]{background:#e74c3c0d}.brv-net-status[data-v-eac50cfc]{font-weight:700;flex-shrink:0;width:32px;font-size:10px;padding-top:1px}.brv-net-method[data-v-eac50cfc]{flex-shrink:0;width:36px;color:#8ac;font-size:10px;padding-top:1px}.brv-net-dur[data-v-eac50cfc]{flex-shrink:0;color:#456;font-size:10px;padding-top:1px}.st-err[data-v-eac50cfc],.st-5xx[data-v-eac50cfc]{color:#e87070}.st-4xx[data-v-eac50cfc]{color:#d4a84b}.st-3xx[data-v-eac50cfc]{color:#8ac}.st-2xx[data-v-eac50cfc]{color:#6c8}.brv-net-detail[data-v-eac50cfc]{padding:6px 12px;font-size:10px;color:#89a;background:#0000004d;border-bottom:1px solid rgba(255,255,255,.03);word-break:break-all;white-space:pre-wrap;line-height:1.6;font-family:Consolas,Menlo,monospace}.brv-spin[data-v-eac50cfc]{display:inline-block;width:13px;height:13px;flex-shrink:0;border:2px solid rgba(136,170,255,.3);border-top-color:#8af;border-radius:50%;animation:brv-spin-eac50cfc .7s linear infinite}@keyframes brv-spin-eac50cfc{to{transform:rotate(360deg)}}", Zd = {
  none: "요청 전",
  QUEUED: "대기 중",
  RUNNING: "Claude 가 고치는 중",
  PR_OPENED: "PR 올라옴 · 병합 안 됨(로그 확인)",
  MERGED: "병합 완료",
  FAILED: "실패 · 진행 로그 확인"
}, jd = { QUEUED: "대기", RUNNING: "수정중", PR_OPENED: "PR", MERGED: "병합", FAILED: "실패" }, mo = [
  { value: "OPEN", label: "접수" },
  { value: "IN_PROGRESS", label: "진행중" },
  { value: "RESOLVED", label: "해결" },
  { value: "CLOSED", label: "보류" }
], zd = {
  name: "BugfixViewer",
  props: { kit: { type: Object, default: null } },
  expose: ["open", "close"],
  data() {
    return {
      STATUSES: mo,
      isOpen: !1,
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
    fixInProgress() {
      var A;
      return ["QUEUED", "RUNNING"].includes((A = this.detail) == null ? void 0 : A.fixStatus);
    },
    fixChat() {
      var A;
      try {
        return (A = this.detail) != null && A.fixChat ? JSON.parse(this.detail.fixChat) : [];
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
    async open() {
      this.isOpen = !0, this.selected = null, this.detail = null, this.expanded = /* @__PURE__ */ new Set(), await this.fetchList();
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
      this.fixInProgress ? this._startFixPolling() : this._stopFixPolling();
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
      return ((e = mo.find((t) => t.value === A)) == null ? void 0 : e.label) ?? "접수";
    },
    // ── Claude 자동 수정 ──
    fixLabel(A) {
      return Zd[A || "none"] || A;
    },
    fixShort(A) {
      return jd[A] || A;
    },
    async requestFix() {
      if (!this.detail || this.fixBusy) return;
      const A = this.detail.bugReportId;
      this.fixBusy = !0;
      try {
        const e = await this.kit.api.requestFix(A);
        e && (this.detail = { ...this.detail, ...e }, this._syncListFix(e)), this.showNotice("수정 요청", "서버에서 Claude 가 고치기 시작합니다. 진행 로그가 여기에 쌓이고, PR 이 올라오면 링크가 표시됩니다.", "success"), this._startFixPolling();
      } catch (e) {
        this.showNotice("수정 요청 실패", (e == null ? void 0 : e.message) || "요청에 실패했습니다.", "error");
      } finally {
        this.fixBusy = !1;
      }
    },
    async sendChat(A) {
      const e = this.chatInput.trim();
      if (!e || !this.detail || this.fixBusy) return;
      const t = this.detail.bugReportId;
      this.fixBusy = !0;
      try {
        const r = await this.kit.api.fixChat(t, e, A);
        r && (this.detail = { ...this.detail, ...r }, this._syncListFix(r)), this.chatInput = "", this._startFixPolling();
      } catch (r) {
        this.showNotice("전송 실패", (r == null ? void 0 : r.message) || "실패했습니다.", "error");
      } finally {
        this.fixBusy = !1;
      }
    },
    async refreshDetail() {
      var e;
      if (!this.detail) return;
      const A = this.detail.bugReportId;
      try {
        const t = this.detail.fixPrUrl && ["PR_OPENED", "FAILED"].includes(this.detail.fixStatus) ? await this.kit.api.fixSync(A) : this.fixInProgress ? await this.kit.api.fixState(A) : await this.kit.api.get(A);
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
        if (!this.detail || !this.fixInProgress) {
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
}, qd = { class: "bugfix-root" }, $d = { class: "brv-modal" }, Ah = { class: "brv-header" }, eh = { class: "brv-title" }, th = {
  key: 0,
  class: "brv-shortcut"
}, rh = { class: "brv-body" }, sh = {
  key: 0,
  class: "brv-loading"
}, nh = {
  key: 1,
  class: "brv-empty"
}, ih = {
  key: 2,
  class: "brv-list"
}, oh = ["onClick"], ah = { class: "brv-problem" }, lh = ["title"], ch = { class: "brv-meta" }, Bh = ["onClick"], uh = {
  key: 0,
  class: "brv-loading"
}, fh = {
  key: 0,
  class: "brv-section"
}, gh = ["src"], dh = { class: "brv-section" }, hh = { class: "brv-row" }, wh = { class: "brv-row" }, ph = { class: "brv-status-control" }, Qh = {
  key: 0,
  class: "brv-spin brv-spin--sm"
}, Ch = ["value", "disabled"], Uh = ["value"], Fh = { class: "brv-row" }, vh = { class: "brv-selectable" }, bh = { class: "brv-row" }, Eh = { class: "brv-selectable" }, mh = { class: "brv-section" }, yh = { class: "brv-row" }, Hh = {
  key: 0,
  class: "brv-spin brv-spin--sm"
}, Ih = {
  key: 1,
  class: "brv-fix-elapsed"
}, xh = {
  key: 0,
  class: "brv-row"
}, Lh = { class: "brv-selectable" }, _h = {
  key: 1,
  class: "brv-row"
}, Kh = ["href"], Sh = {
  key: 2,
  class: "brv-text brv-selectable brv-fix-summary"
}, Th = ["open"], Dh = {
  key: 4,
  class: "brv-chat"
}, Oh = { class: "brv-chat__who" }, Rh = { class: "brv-chat__text brv-selectable" }, Mh = {
  key: 0,
  class: "brv-chat__msg brv-chat__msg--assistant"
}, kh = ["disabled"], Nh = { class: "brv-fix-actions" }, Vh = ["disabled"], Gh = ["disabled"], Ph = { class: "brv-fix-actions" }, Jh = ["disabled"], Xh = ["disabled"], Wh = {
  key: 1,
  class: "brv-section"
}, Yh = {
  key: 0,
  class: "brv-field"
}, Zh = { class: "brv-text brv-selectable" }, jh = {
  key: 1,
  class: "brv-field"
}, zh = { class: "brv-text brv-selectable" }, qh = {
  key: 2,
  class: "brv-field"
}, $h = { class: "brv-text brv-selectable" }, Aw = {
  key: 2,
  class: "brv-section"
}, ew = {
  key: 0,
  class: "brv-row"
}, tw = { class: "brv-selectable" }, rw = {
  key: 1,
  class: "brv-row"
}, sw = { class: "brv-selectable" }, nw = {
  key: 2,
  class: "brv-row"
}, iw = { class: "brv-selectable" }, ow = {
  key: 3,
  class: "brv-row"
}, aw = { class: "brv-selectable" }, lw = {
  key: 4,
  class: "brv-row"
}, cw = { class: "brv-selectable" }, Bw = { class: "brv-section" }, uw = { class: "brv-label-row" }, fw = { class: "brv-log-tabs" }, gw = ["onClick"], dw = { class: "brv-log-filters" }, hw = { class: "brv-filter-chip brv-filter-error" }, ww = { class: "brv-filter-chip brv-filter-warn" }, pw = { class: "brv-filter-chip brv-filter-log" }, Qw = { class: "brv-log-list" }, Cw = ["onClick"], Uw = { class: "brv-log-time brv-selectable" }, Fw = { class: "brv-log-lv" }, vw = {
  key: 0,
  class: "brv-log-empty"
}, bw = { class: "brv-log-filters" }, Ew = { class: "brv-filter-chip brv-filter-error" }, mw = { class: "brv-filter-chip brv-filter-warn" }, yw = { class: "brv-filter-chip brv-filter-log" }, Hw = { class: "brv-log-list" }, Iw = ["onClick"], xw = { class: "brv-log-time brv-selectable" }, Lw = { class: "brv-log-lv" }, _w = { class: "brv-log-logger brv-selectable" }, Kw = {
  key: 0,
  class: "brv-log-empty"
}, Sw = { class: "brv-log-filters" }, Tw = { class: "brv-filter-chip brv-filter-error" }, Dw = { class: "brv-filter-chip brv-filter-log" }, Ow = { class: "brv-log-list" }, Rw = ["onClick"], Mw = { class: "brv-net-method brv-selectable" }, kw = { class: "brv-net-dur brv-selectable" }, Nw = { class: "brv-log-time brv-selectable" }, Vw = {
  key: 0,
  class: "brv-net-detail brv-selectable"
}, Gw = { key: 0 }, Pw = { key: 1 }, Jw = { key: 2 }, Xw = {
  key: 3,
  class: "brv-log--error"
}, Ww = {
  key: 0,
  class: "brv-log-empty"
}, Yw = {
  key: 3,
  class: "brv-log-list"
}, Zw = ["onClick"], jw = { class: "brv-log-time brv-selectable" }, zw = {
  key: 0,
  class: "brv-log-payload brv-selectable"
}, qw = {
  key: 0,
  class: "brv-log-empty"
};
function $w(A, e, t, r, s, n) {
  var i, o, a, c;
  return p(), C("div", qd, [
    s.isOpen ? (p(), C("div", {
      key: 0,
      class: "brv-overlay",
      onClick: e[18] || (e[18] = Zt((...l) => n.close && n.close(...l), ["self"]))
    }, [
      u("div", $d, [
        u("div", Ah, [
          u("span", eh, [
            e[19] || (e[19] = j(" 저장된 버그 리포트 ", -1)),
            n.hotkey ? (p(), C("span", th, Q(n.hotkey), 1)) : K("", !0)
          ]),
          u("button", {
            class: "brv-close",
            onClick: e[0] || (e[0] = (...l) => n.close && n.close(...l))
          }, "✕")
        ]),
        s.notice ? (p(), C("div", {
          key: 0,
          class: nA(["brv-notice", `brv-notice--${s.notice.type}`])
        }, [
          u("b", null, Q(s.notice.title), 1),
          j(" " + Q(s.notice.message), 1)
        ], 2)) : K("", !0),
        u("div", rh, [
          s.selected ? (p(), C(Y, { key: 1 }, [
            u("button", {
              class: "brv-back",
              onClick: e[1] || (e[1] = (l) => s.selected = null)
            }, "← 목록"),
            s.detailLoading ? (p(), C("div", uh, [...e[21] || (e[21] = [
              u("span", { class: "brv-spin" }, null, -1),
              j(" 불러오는 중... ", -1)
            ])])) : s.detail ? (p(), C(Y, { key: 1 }, [
              s.detail.screenshot ? (p(), C("div", fh, [
                e[22] || (e[22] = u("div", { class: "brv-label" }, "화면 캡처", -1)),
                u("img", {
                  src: s.detail.screenshot,
                  class: "brv-screenshot",
                  alt: "screenshot"
                }, null, 8, gh)
              ])) : K("", !0),
              u("div", dh, [
                e[27] || (e[27] = u("div", { class: "brv-label" }, "기본 정보", -1)),
                u("div", hh, [
                  e[23] || (e[23] = u("span", null, "심각도", -1)),
                  u("span", {
                    class: nA(["brv-badge", `brv-sev--${(i = s.detail.severity) == null ? void 0 : i.toLowerCase()}`])
                  }, Q(s.detail.severity), 3)
                ]),
                u("div", wh, [
                  e[24] || (e[24] = u("span", null, "상태", -1)),
                  u("span", ph, [
                    s.statusSaving ? (p(), C("span", Qh)) : K("", !0),
                    u("select", {
                      class: nA(["brv-status-select", `brv-st--${(s.detail.status || "OPEN").toLowerCase()}`]),
                      value: s.detail.status || "OPEN",
                      disabled: s.statusSaving,
                      onChange: e[2] || (e[2] = (l) => n.changeStatus(l.target.value))
                    }, [
                      (p(!0), C(Y, null, wA(s.STATUSES, (l) => (p(), C("option", {
                        key: l.value,
                        value: l.value
                      }, Q(l.label), 9, Uh))), 128))
                    ], 42, Ch)
                  ])
                ]),
                u("div", Fh, [
                  e[25] || (e[25] = u("span", null, "보고자", -1)),
                  u("span", vh, Q(s.detail.reporter), 1)
                ]),
                u("div", bh, [
                  e[26] || (e[26] = u("span", null, "일시", -1)),
                  u("span", Eh, Q(n.formatDate(s.detail.insertDate)), 1)
                ])
              ]),
              u("div", mh, [
                e[33] || (e[33] = u("div", { class: "brv-label" }, "Claude 자동 수정", -1)),
                u("div", yh, [
                  e[28] || (e[28] = u("span", null, "상태", -1)),
                  u("span", null, [
                    s.fixBusy || n.fixInProgress ? (p(), C("span", Hh)) : K("", !0),
                    u("span", {
                      class: nA(["brv-fix", `brv-fix--${(s.detail.fixStatus || "none").toLowerCase()}`])
                    }, Q(n.fixLabel(s.detail.fixStatus)), 3),
                    n.fixInProgress && n.fixElapsed ? (p(), C("span", Ih, Q(n.fixElapsed) + " 경과", 1)) : K("", !0)
                  ])
                ]),
                s.detail.fixBranch ? (p(), C("div", xh, [
                  e[29] || (e[29] = u("span", null, "브랜치", -1)),
                  u("span", Lh, Q(s.detail.fixBranch), 1)
                ])) : K("", !0),
                s.detail.fixPrUrl ? (p(), C("div", _h, [
                  e[30] || (e[30] = u("span", null, "PR", -1)),
                  u("a", {
                    class: "brv-link",
                    href: s.detail.fixPrUrl,
                    target: "_blank",
                    rel: "noopener"
                  }, Q(s.detail.fixPrUrl.replace(/^https?:\/\/github\.com\//, "")), 9, Kh)
                ])) : K("", !0),
                s.detail.fixSummary ? (p(), C("div", Sh, Q(s.detail.fixSummary), 1)) : K("", !0),
                s.detail.fixLog ? (p(), C("details", {
                  key: 3,
                  class: "brv-fix-log",
                  open: n.fixInProgress
                }, [
                  e[31] || (e[31] = u("summary", null, "진행 로그", -1)),
                  u("pre", {
                    ref: "fixLogPre",
                    class: "brv-selectable"
                  }, Q(s.detail.fixLog), 513)
                ], 8, Th)) : K("", !0),
                s.detail.fixStatus ? (p(), C("div", Dh, [
                  (p(!0), C(Y, null, wA(n.fixChat, (l, B) => (p(), C("div", {
                    key: B,
                    class: nA(["brv-chat__msg", `brv-chat__msg--${l.role}`])
                  }, [
                    u("span", Oh, Q(l.role === "user" ? "나" : "Claude"), 1),
                    u("div", Rh, Q(l.text), 1)
                  ], 2))), 128)),
                  n.fixInProgress && n.fixChat.length && n.fixChat[n.fixChat.length - 1].role === "user" ? (p(), C("div", Mh, [...e[32] || (e[32] = [
                    u("span", { class: "brv-chat__who" }, "Claude", -1),
                    u("div", { class: "brv-chat__text" }, [
                      u("span", { class: "brv-spin brv-spin--sm" }),
                      j(" 생각 중…")
                    ], -1)
                  ])])) : K("", !0),
                  xA(u("textarea", {
                    "onUpdate:modelValue": e[3] || (e[3] = (l) => s.chatInput = l),
                    class: "brv-chat__input",
                    rows: "2",
                    disabled: s.fixBusy || n.fixInProgress,
                    placeholder: "예) 왜 이렇게 고쳤어?  /  라이트 테마에서도 맞는지 확인해서 같이 고쳐줘",
                    onKeydown: [
                      e[4] || (e[4] = vo(Zt((l) => n.sendChat("ask"), ["ctrl", "prevent"]), ["enter"])),
                      e[5] || (e[5] = vo(Zt((l) => n.sendChat("ask"), ["meta", "prevent"]), ["enter"]))
                    ]
                  }, null, 40, kh), [
                    [is, s.chatInput]
                  ]),
                  u("div", Nh, [
                    u("button", {
                      class: "brv-fix-btn brv-fix-btn--ghost",
                      disabled: s.fixBusy || n.fixInProgress || !s.chatInput.trim(),
                      onClick: e[6] || (e[6] = (l) => n.sendChat("ask")),
                      title: "코드는 바꾸지 않고 답만 합니다"
                    }, "질문", 8, Vh),
                    u("button", {
                      class: "brv-fix-btn",
                      disabled: s.fixBusy || n.fixInProgress || !s.chatInput.trim(),
                      onClick: e[7] || (e[7] = (l) => n.sendChat("change")),
                      title: "같은 세션에서 추가로 고치고 검증 → PR → 병합까지"
                    }, "추가 수정 요청", 8, Gh)
                  ])
                ])) : K("", !0),
                u("div", Ph, [
                  u("button", {
                    class: "brv-fix-btn",
                    disabled: s.fixBusy || n.fixInProgress,
                    onClick: e[8] || (e[8] = (...l) => n.requestFix && n.requestFix(...l))
                  }, Q(n.fixInProgress ? "Claude 가 고치는 중…" : s.detail.fixStatus ? "다시 수정 요청" : "Claude 에게 수정 요청"), 9, Jh),
                  s.detail.fixStatus ? (p(), C("button", {
                    key: 0,
                    class: "brv-fix-btn brv-fix-btn--ghost",
                    disabled: s.fixBusy,
                    onClick: e[9] || (e[9] = (...l) => n.refreshDetail && n.refreshDetail(...l))
                  }, "새로고침", 8, Xh)) : K("", !0)
                ]),
                e[34] || (e[34] = u("div", { class: "brv-hint" }, [
                  j("개발서버의 Claude Code 가 원인을 찾아 고치고, 검증(lint·build)이 통과하면 PR 을 올린 뒤 "),
                  u("b", null, "바로 병합"),
                  j("합니다. 그사이 다른 변경과 충돌하면 Claude 가 풀고 다시 검증합니다. 병합되지 않으면 PR 이 열린 채 남습니다.")
                ], -1))
              ]),
              s.detail.problem || s.detail.reproSteps || s.detail.expectedResult ? (p(), C("div", Wh, [
                e[38] || (e[38] = u("div", { class: "brv-label" }, "내용", -1)),
                s.detail.problem ? (p(), C("div", Yh, [
                  e[35] || (e[35] = u("div", { class: "brv-field-label" }, "문제 상황", -1)),
                  u("div", Zh, Q(s.detail.problem), 1)
                ])) : K("", !0),
                s.detail.reproSteps ? (p(), C("div", jh, [
                  e[36] || (e[36] = u("div", { class: "brv-field-label" }, "재현 단계", -1)),
                  u("div", zh, Q(s.detail.reproSteps), 1)
                ])) : K("", !0),
                s.detail.expectedResult ? (p(), C("div", qh, [
                  e[37] || (e[37] = u("div", { class: "brv-field-label" }, "기대 결과", -1)),
                  u("div", $h, Q(s.detail.expectedResult), 1)
                ])) : K("", !0)
              ])) : K("", !0),
              n.parsedContext ? (p(), C("div", Aw, [
                e[44] || (e[44] = u("div", { class: "brv-label" }, "컨텍스트", -1)),
                n.parsedContext.camera ? (p(), C("div", ew, [
                  e[39] || (e[39] = u("span", null, "카메라", -1)),
                  u("span", tw, Q(n.parsedContext.camera.longitude) + "°, " + Q(n.parsedContext.camera.latitude) + "° · 고도 " + Q(n.parsedContext.camera.height) + "m · H" + Q(n.parsedContext.camera.heading) + "° P" + Q(n.parsedContext.camera.pitch) + "° ", 1)
                ])) : K("", !0),
                (o = n.parsedContext.menus) != null && o.header ? (p(), C("div", rw, [
                  e[40] || (e[40] = u("span", null, "상단 탭", -1)),
                  u("span", sw, Q(n.parsedContext.menus.header), 1)
                ])) : K("", !0),
                n.parsedContext.activeData ? (p(), C("div", nw, [
                  e[41] || (e[41] = u("span", null, "데이터셋", -1)),
                  u("span", iw, Q(((a = n.parsedContext.activeData.datasets) == null ? void 0 : a.map((l) => l._displayName).join(", ")) || "없음"), 1)
                ])) : K("", !0),
                (c = n.parsedContext.activeData) != null && c.terrain ? (p(), C("div", ow, [
                  e[42] || (e[42] = u("span", null, "지형", -1)),
                  u("span", aw, Q(n.parsedContext.activeData.terrain), 1)
                ])) : K("", !0),
                n.parsedContext.datetime ? (p(), C("div", lw, [
                  e[43] || (e[43] = u("span", null, "발생 시각", -1)),
                  u("span", cw, Q(n.parsedContext.datetime), 1)
                ])) : K("", !0)
              ])) : K("", !0),
              u("div", Bw, [
                u("div", uw, [
                  e[45] || (e[45] = u("div", {
                    class: "brv-label",
                    style: { "margin-bottom": "0" }
                  }, "로그", -1)),
                  u("div", fw, [
                    (p(!0), C(Y, null, wA(n.logTabs, (l) => (p(), C("button", {
                      key: l.id,
                      class: nA(["brv-log-tab", { active: s.logTab === l.id }]),
                      onClick: (B) => s.logTab = l.id
                    }, [
                      j(Q(l.label) + " ", 1),
                      l.count ? (p(), C("span", {
                        key: 0,
                        class: nA(["brv-log-tab-count", l.countClass])
                      }, Q(l.count), 3)) : K("", !0)
                    ], 10, gw))), 128))
                  ])
                ]),
                s.logTab === "front" ? (p(), C(Y, { key: 0 }, [
                  u("div", dw, [
                    u("label", hw, [
                      xA(u("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": e[10] || (e[10] = (l) => s.showFE.error = l)
                      }, null, 512), [
                        [JA, s.showFE.error]
                      ]),
                      j(" 오류 (" + Q(n.countFE("error")) + ") ", 1)
                    ]),
                    u("label", ww, [
                      xA(u("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": e[11] || (e[11] = (l) => s.showFE.warn = l)
                      }, null, 512), [
                        [JA, s.showFE.warn]
                      ]),
                      j(" 경고 (" + Q(n.countFE("warn")) + ") ", 1)
                    ]),
                    u("label", pw, [
                      xA(u("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": e[12] || (e[12] = (l) => s.showFE.log = l)
                      }, null, 512), [
                        [JA, s.showFE.log]
                      ]),
                      j(" 로그 (" + Q(n.countFE("log")) + ") ", 1)
                    ])
                  ]),
                  u("div", Qw, [
                    (p(!0), C(Y, null, wA(n.filteredFrontLogs, (l, B) => {
                      var f;
                      return p(), C("div", {
                        key: B,
                        class: nA(["brv-log-item", `brv-log--${l.level}`]),
                        onClick: (w) => n.toggleExpand("f" + B)
                      }, [
                        u("span", Uw, Q((f = l.time) == null ? void 0 : f.slice(11, 23)), 1),
                        u("span", Fw, Q(l.level), 1),
                        u("span", {
                          class: nA(["brv-log-msg brv-selectable", { expanded: s.expanded.has("f" + B) }])
                        }, Q(l.message), 3)
                      ], 10, Cw);
                    }), 128)),
                    n.filteredFrontLogs.length === 0 ? (p(), C("div", vw, "표시할 로그 없음")) : K("", !0)
                  ])
                ], 64)) : K("", !0),
                s.logTab === "back" ? (p(), C(Y, { key: 1 }, [
                  u("div", bw, [
                    u("label", Ew, [
                      xA(u("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": e[13] || (e[13] = (l) => s.showBE.error = l)
                      }, null, 512), [
                        [JA, s.showBE.error]
                      ]),
                      j(" ERROR (" + Q(n.countBE("ERROR")) + ") ", 1)
                    ]),
                    u("label", mw, [
                      xA(u("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": e[14] || (e[14] = (l) => s.showBE.warn = l)
                      }, null, 512), [
                        [JA, s.showBE.warn]
                      ]),
                      j(" WARN (" + Q(n.countBE("WARN")) + ") ", 1)
                    ]),
                    u("label", yw, [
                      xA(u("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": e[15] || (e[15] = (l) => s.showBE.info = l)
                      }, null, 512), [
                        [JA, s.showBE.info]
                      ]),
                      j(" INFO (" + Q(n.countBE("INFO")) + ") ", 1)
                    ])
                  ]),
                  u("div", Hw, [
                    (p(!0), C(Y, null, wA(n.filteredBackLogs, (l, B) => {
                      var f, w;
                      return p(), C("div", {
                        key: B,
                        class: nA(["brv-log-item", `brv-log--${(f = l.level) == null ? void 0 : f.toLowerCase()}`]),
                        onClick: (U) => n.toggleExpand("b" + B)
                      }, [
                        u("span", xw, Q((w = l.time) == null ? void 0 : w.slice(11, 23)), 1),
                        u("span", Lw, Q(l.level), 1),
                        u("span", _w, Q(n.shortLogger(l.logger)), 1),
                        u("span", {
                          class: nA(["brv-log-msg brv-selectable", { expanded: s.expanded.has("b" + B) }])
                        }, Q(l.message), 3)
                      ], 10, Iw);
                    }), 128)),
                    n.filteredBackLogs.length === 0 ? (p(), C("div", Kw, "표시할 로그 없음")) : K("", !0)
                  ])
                ], 64)) : K("", !0),
                s.logTab === "net" ? (p(), C(Y, { key: 2 }, [
                  u("div", Sw, [
                    u("label", Tw, [
                      xA(u("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": e[16] || (e[16] = (l) => s.showNet.error = l)
                      }, null, 512), [
                        [JA, s.showNet.error]
                      ]),
                      j(" 에러 (" + Q(n.networkLogs.filter((l) => l.error || l.status >= 400).length) + ") ", 1)
                    ]),
                    u("label", Dw, [
                      xA(u("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": e[17] || (e[17] = (l) => s.showNet.ok = l)
                      }, null, 512), [
                        [JA, s.showNet.ok]
                      ]),
                      j(" 성공 (" + Q(n.networkLogs.filter((l) => !l.error && l.status < 400).length) + ") ", 1)
                    ])
                  ]),
                  u("div", Ow, [
                    (p(!0), C(Y, null, wA(n.filteredNetLogs, (l, B) => {
                      var f;
                      return p(), C("div", {
                        key: B,
                        class: nA(["brv-net-item", n.netClass(l)]),
                        onClick: (w) => n.toggleExpand("n" + B)
                      }, [
                        u("span", {
                          class: nA(["brv-net-status", n.statusClass(l.status)])
                        }, Q(l.status || "ERR"), 3),
                        u("span", Mw, Q(l.method), 1),
                        u("span", {
                          class: nA(["brv-log-msg brv-selectable", { expanded: s.expanded.has("n" + B) }])
                        }, Q(l.url), 3),
                        u("span", kw, Q(l.duration) + "ms", 1),
                        u("span", Nw, Q((f = l.time) == null ? void 0 : f.slice(11, 19)), 1)
                      ], 10, Rw);
                    }), 128)),
                    (p(!0), C(Y, null, wA(n.filteredNetLogs, (l, B) => (p(), C(Y, {
                      key: "d" + B
                    }, [
                      s.expanded.has("n" + B) ? (p(), C("div", Vw, [
                        l.params ? (p(), C("div", Gw, [
                          e[46] || (e[46] = u("b", null, "Params:", -1)),
                          j(" " + Q(l.params), 1)
                        ])) : K("", !0),
                        l.requestBody ? (p(), C("div", Pw, [
                          e[47] || (e[47] = u("b", null, "Request:", -1)),
                          j(" " + Q(l.requestBody), 1)
                        ])) : K("", !0),
                        l.responseBody ? (p(), C("div", Jw, [
                          e[48] || (e[48] = u("b", null, "Response:", -1)),
                          j(" " + Q(l.responseBody), 1)
                        ])) : K("", !0),
                        l.error ? (p(), C("div", Xw, [
                          e[49] || (e[49] = u("b", null, "Error:", -1)),
                          j(" " + Q(l.error), 1)
                        ])) : K("", !0)
                      ])) : K("", !0)
                    ], 64))), 128)),
                    n.filteredNetLogs.length === 0 ? (p(), C("div", Ww, "표시할 요청 없음")) : K("", !0)
                  ])
                ], 64)) : K("", !0),
                s.logTab === "mutation" ? (p(), C("div", Yw, [
                  (p(!0), C(Y, null, wA(n.parsedMutationLog, (l, B) => (p(), C("div", {
                    key: B,
                    class: "brv-log-item",
                    onClick: (f) => n.toggleExpand("m" + B)
                  }, [
                    u("span", jw, Q(l.time), 1),
                    u("span", {
                      class: nA(["brv-log-msg brv-mutation brv-selectable", { expanded: s.expanded.has("m" + B) }])
                    }, Q(l.type), 3),
                    l.payload !== null ? (p(), C("span", zw, Q(n.formatPayload(l.payload)), 1)) : K("", !0)
                  ], 8, Zw))), 128)),
                  n.parsedMutationLog.length === 0 ? (p(), C("div", qw, "기록된 mutation 없음")) : K("", !0)
                ])) : K("", !0)
              ])
            ], 64)) : K("", !0)
          ], 64)) : (p(), C(Y, { key: 0 }, [
            s.loading ? (p(), C("div", sh, [...e[20] || (e[20] = [
              u("span", { class: "brv-spin" }, null, -1),
              j(" 불러오는 중... ", -1)
            ])])) : s.list.length === 0 ? (p(), C("div", nh, "저장된 리포트가 없습니다.")) : (p(), C("div", ih, [
              (p(!0), C(Y, null, wA(s.list, (l) => {
                var B;
                return p(), C("div", {
                  key: l.bugReportId,
                  class: "brv-item",
                  onClick: (f) => n.openDetail(l.bugReportId)
                }, [
                  u("span", {
                    class: nA(["brv-badge", `brv-sev--${(B = l.severity) == null ? void 0 : B.toLowerCase()}`])
                  }, Q(l.severity), 3),
                  u("span", {
                    class: nA(["brv-status", `brv-st--${(l.status || "OPEN").toLowerCase()}`])
                  }, Q(n.statusLabel(l.status)), 3),
                  u("span", ah, Q(l.problem || "(내용 없음)"), 1),
                  l.fixStatus ? (p(), C("span", {
                    key: 0,
                    class: nA(["brv-fix", `brv-fix--${l.fixStatus.toLowerCase()}`]),
                    title: n.fixLabel(l.fixStatus)
                  }, Q(n.fixShort(l.fixStatus)), 11, lh)) : K("", !0),
                  u("span", ch, Q(l.reporter) + " · " + Q(n.formatDate(l.insertDate)), 1),
                  u("button", {
                    class: "brv-del",
                    onClick: Zt((f) => n.deleteReport(l.bugReportId), ["stop"]),
                    title: "삭제"
                  }, "✕", 8, Bh)
                ], 8, oh);
              }), 128))
            ]))
          ], 64))
        ])
      ])
    ])) : K("", !0)
  ]);
}
const Ap = /* @__PURE__ */ Dl(zd, [["render", $w], ["styles", [Yd]], ["__scopeId", "data-v-eac50cfc"]]);
function ep({ endpoint: A, project: e, apiKey: t, user: r }) {
  const s = A ? `${String(A).replace(/\/+$/, "")}/p/${e}` : "", n = !!s;
  async function i(o, a, c, { query: l } = {}) {
    if (!n) throw new Error("버그 리포트 서버가 설정되지 않았습니다(endpoint).");
    const B = { Accept: "application/json" };
    c !== void 0 && (B["Content-Type"] = "application/json"), t && (B["X-Bugfix-Key"] = t);
    const f = typeof r == "function" ? r() : r;
    f && (B["X-Bugfix-User"] = String(f));
    const w = l ? "?" + new URLSearchParams(l).toString() : "", U = await fetch(s + a + w, { method: o, headers: B, body: c === void 0 ? void 0 : JSON.stringify(c) });
    if (U.status === 204) return null;
    const F = await U.text();
    let h = null;
    try {
      h = F ? JSON.parse(F) : null;
    } catch {
    }
    if (!U.ok) {
      const b = new Error((h == null ? void 0 : h.message) || `HTTP ${U.status}`);
      throw b.status = U.status, b;
    }
    return (h == null ? void 0 : h.content) ?? h;
  }
  return {
    enabled: n,
    base: s,
    save: (o) => i("POST", "/reports", o),
    list: () => i("GET", "/reports"),
    get: (o) => i("GET", `/reports/${o}`),
    fixState: (o) => i("GET", `/reports/${o}/fix`),
    setStatus: (o, a) => i("PATCH", `/reports/${o}/status`, { status: a }),
    remove: (o) => i("DELETE", `/reports/${o}`),
    requestFix: (o) => i("POST", `/reports/${o}/request-fix`),
    fixChat: (o, a, c) => i("POST", `/reports/${o}/fix-chat`, { message: a, mode: c }),
    fixSync: (o) => i("POST", `/reports/${o}/fix-sync`)
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
var Gn = function(A, e) {
  return Gn = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, r) {
    t.__proto__ = r;
  } || function(t, r) {
    for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (t[s] = r[s]);
  }, Gn(A, e);
};
function fe(A, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  Gn(A, e);
  function t() {
    this.constructor = A;
  }
  A.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var Pn = function() {
  return Pn = Object.assign || function(e) {
    for (var t, r = 1, s = arguments.length; r < s; r++) {
      t = arguments[r];
      for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, Pn.apply(this, arguments);
};
function kA(A, e, t, r) {
  function s(n) {
    return n instanceof t ? n : new t(function(i) {
      i(n);
    });
  }
  return new (t || (t = Promise))(function(n, i) {
    function o(l) {
      try {
        c(r.next(l));
      } catch (B) {
        i(B);
      }
    }
    function a(l) {
      try {
        c(r.throw(l));
      } catch (B) {
        i(B);
      }
    }
    function c(l) {
      l.done ? n(l.value) : s(l.value).then(o, a);
    }
    c((r = r.apply(A, [])).next());
  });
}
function TA(A, e) {
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
function Sr(A, e, t) {
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
), Ns = function(A, e) {
  return Ge.fromClientRect(A, e.getBoundingClientRect());
}, tp = function(A) {
  var e = A.body, t = A.documentElement;
  if (!e || !t)
    throw new Error("Unable to get document size");
  var r = Math.max(Math.max(e.scrollWidth, t.scrollWidth), Math.max(e.offsetWidth, t.offsetWidth), Math.max(e.clientWidth, t.clientWidth)), s = Math.max(Math.max(e.scrollHeight, t.scrollHeight), Math.max(e.offsetHeight, t.offsetHeight), Math.max(e.clientHeight, t.clientHeight));
  return new Ge(0, 0, r, s);
}, Vs = function(A) {
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
}, yo = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", rp = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Tr = 0; Tr < yo.length; Tr++)
  rp[yo.charCodeAt(Tr)] = Tr;
var Ho = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", jt = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Dr = 0; Dr < Ho.length; Dr++)
  jt[Ho.charCodeAt(Dr)] = Dr;
var sp = function(A) {
  var e = A.length * 0.75, t = A.length, r, s = 0, n, i, o, a;
  A[A.length - 1] === "=" && (e--, A[A.length - 2] === "=" && e--);
  var c = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(e) : new Array(e), l = Array.isArray(c) ? c : new Uint8Array(c);
  for (r = 0; r < t; r += 4)
    n = jt[A.charCodeAt(r)], i = jt[A.charCodeAt(r + 1)], o = jt[A.charCodeAt(r + 2)], a = jt[A.charCodeAt(r + 3)], l[s++] = n << 2 | i >> 4, l[s++] = (i & 15) << 4 | o >> 2, l[s++] = (o & 3) << 6 | a & 63;
  return c;
}, np = function(A) {
  for (var e = A.length, t = [], r = 0; r < e; r += 2)
    t.push(A[r + 1] << 8 | A[r]);
  return t;
}, ip = function(A) {
  for (var e = A.length, t = [], r = 0; r < e; r += 4)
    t.push(A[r + 3] << 24 | A[r + 2] << 16 | A[r + 1] << 8 | A[r]);
  return t;
}, ht = 5, Li = 11, un = 2, op = Li - ht, Ol = 65536 >> ht, ap = 1 << ht, fn = ap - 1, lp = 1024 >> ht, cp = Ol + lp, Bp = cp, up = 32, fp = Bp + up, gp = 65536 >> Li, dp = 1 << op, hp = dp - 1, Io = function(A, e, t) {
  return A.slice ? A.slice(e, t) : new Uint16Array(Array.prototype.slice.call(A, e, t));
}, wp = function(A, e, t) {
  return A.slice ? A.slice(e, t) : new Uint32Array(Array.prototype.slice.call(A, e, t));
}, pp = function(A, e) {
  var t = sp(A), r = Array.isArray(t) ? ip(t) : new Uint32Array(t), s = Array.isArray(t) ? np(t) : new Uint16Array(t), n = 24, i = Io(s, n / 2, r[4] / 2), o = r[5] === 2 ? Io(s, (n + r[4]) / 2) : wp(r, Math.ceil((n + r[4]) / 4));
  return new Qp(r[0], r[1], r[2], r[3], i, o);
}, Qp = (
  /** @class */
  function() {
    function A(e, t, r, s, n, i) {
      this.initialValue = e, this.errorValue = t, this.highStart = r, this.highValueIndex = s, this.index = n, this.data = i;
    }
    return A.prototype.get = function(e) {
      var t;
      if (e >= 0) {
        if (e < 55296 || e > 56319 && e <= 65535)
          return t = this.index[e >> ht], t = (t << un) + (e & fn), this.data[t];
        if (e <= 65535)
          return t = this.index[Ol + (e - 55296 >> ht)], t = (t << un) + (e & fn), this.data[t];
        if (e < this.highStart)
          return t = fp - gp + (e >> Li), t = this.index[t], t += e >> ht & hp, t = this.index[t], t = (t << un) + (e & fn), this.data[t];
        if (e <= 1114111)
          return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, A;
  }()
), xo = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Cp = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Or = 0; Or < xo.length; Or++)
  Cp[xo.charCodeAt(Or)] = Or;
var Up = "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==", Lo = 50, Fp = 1, Rl = 2, Ml = 3, vp = 4, bp = 5, _o = 7, kl = 8, Ko = 9, je = 10, Jn = 11, So = 12, Xn = 13, Ep = 14, zt = 15, Wn = 16, Rr = 17, Vt = 18, mp = 19, To = 20, Yn = 21, Gt = 22, gn = 23, Qt = 24, jA = 25, qt = 26, $t = 27, Ct = 28, yp = 29, ct = 30, Hp = 31, Mr = 32, kr = 33, Zn = 34, jn = 35, zn = 36, Cr = 37, qn = 38, os = 39, as = 40, dn = 41, Nl = 42, Ip = 43, xp = [9001, 65288], Vl = "!", q = "×", Nr = "÷", $n = pp(Up), Le = [ct, zn], Ai = [Fp, Rl, Ml, bp], Gl = [je, kl], Do = [$t, qt], Lp = Ai.concat(Gl), Oo = [qn, os, as, Zn, jn], _p = [zt, Xn], Kp = function(A, e) {
  e === void 0 && (e = "strict");
  var t = [], r = [], s = [];
  return A.forEach(function(n, i) {
    var o = $n.get(n);
    if (o > Lo ? (s.push(!0), o -= Lo) : s.push(!1), ["normal", "auto", "loose"].indexOf(e) !== -1 && [8208, 8211, 12316, 12448].indexOf(n) !== -1)
      return r.push(i), t.push(Wn);
    if (o === vp || o === Jn) {
      if (i === 0)
        return r.push(i), t.push(ct);
      var a = t[i - 1];
      return Lp.indexOf(a) === -1 ? (r.push(r[i - 1]), t.push(a)) : (r.push(i), t.push(ct));
    }
    if (r.push(i), o === Hp)
      return t.push(e === "strict" ? Yn : Cr);
    if (o === Nl || o === yp)
      return t.push(ct);
    if (o === Ip)
      return n >= 131072 && n <= 196605 || n >= 196608 && n <= 262141 ? t.push(Cr) : t.push(ct);
    t.push(o);
  }), [r, t, s];
}, hn = function(A, e, t, r) {
  var s = r[t];
  if (Array.isArray(A) ? A.indexOf(s) !== -1 : A === s)
    for (var n = t; n <= r.length; ) {
      n++;
      var i = r[n];
      if (i === e)
        return !0;
      if (i !== je)
        break;
    }
  if (s === je)
    for (var n = t; n > 0; ) {
      n--;
      var o = r[n];
      if (Array.isArray(A) ? A.indexOf(o) !== -1 : A === o)
        for (var a = t; a <= r.length; ) {
          a++;
          var i = r[a];
          if (i === e)
            return !0;
          if (i !== je)
            break;
        }
      if (o !== je)
        break;
    }
  return !1;
}, Ro = function(A, e) {
  for (var t = A; t >= 0; ) {
    var r = e[t];
    if (r === je)
      t--;
    else
      return r;
  }
  return 0;
}, Sp = function(A, e, t, r, s) {
  if (t[r] === 0)
    return q;
  var n = r - 1;
  if (Array.isArray(s) && s[n] === !0)
    return q;
  var i = n - 1, o = n + 1, a = e[n], c = i >= 0 ? e[i] : 0, l = e[o];
  if (a === Rl && l === Ml)
    return q;
  if (Ai.indexOf(a) !== -1)
    return Vl;
  if (Ai.indexOf(l) !== -1 || Gl.indexOf(l) !== -1)
    return q;
  if (Ro(n, e) === kl)
    return Nr;
  if ($n.get(A[n]) === Jn || (a === Mr || a === kr) && $n.get(A[o]) === Jn || a === _o || l === _o || a === Ko || [je, Xn, zt].indexOf(a) === -1 && l === Ko || [Rr, Vt, mp, Qt, Ct].indexOf(l) !== -1 || Ro(n, e) === Gt || hn(gn, Gt, n, e) || hn([Rr, Vt], Yn, n, e) || hn(So, So, n, e))
    return q;
  if (a === je)
    return Nr;
  if (a === gn || l === gn)
    return q;
  if (l === Wn || a === Wn)
    return Nr;
  if ([Xn, zt, Yn].indexOf(l) !== -1 || a === Ep || c === zn && _p.indexOf(a) !== -1 || a === Ct && l === zn || l === To || Le.indexOf(l) !== -1 && a === jA || Le.indexOf(a) !== -1 && l === jA || a === $t && [Cr, Mr, kr].indexOf(l) !== -1 || [Cr, Mr, kr].indexOf(a) !== -1 && l === qt || Le.indexOf(a) !== -1 && Do.indexOf(l) !== -1 || Do.indexOf(a) !== -1 && Le.indexOf(l) !== -1 || // (PR | PO) × ( OP | HY )? NU
  [$t, qt].indexOf(a) !== -1 && (l === jA || [Gt, zt].indexOf(l) !== -1 && e[o + 1] === jA) || // ( OP | HY ) × NU
  [Gt, zt].indexOf(a) !== -1 && l === jA || // NU ×	(NU | SY | IS)
  a === jA && [jA, Ct, Qt].indexOf(l) !== -1)
    return q;
  if ([jA, Ct, Qt, Rr, Vt].indexOf(l) !== -1)
    for (var B = n; B >= 0; ) {
      var f = e[B];
      if (f === jA)
        return q;
      if ([Ct, Qt].indexOf(f) !== -1)
        B--;
      else
        break;
    }
  if ([$t, qt].indexOf(l) !== -1)
    for (var B = [Rr, Vt].indexOf(a) !== -1 ? i : n; B >= 0; ) {
      var f = e[B];
      if (f === jA)
        return q;
      if ([Ct, Qt].indexOf(f) !== -1)
        B--;
      else
        break;
    }
  if (qn === a && [qn, os, Zn, jn].indexOf(l) !== -1 || [os, Zn].indexOf(a) !== -1 && [os, as].indexOf(l) !== -1 || [as, jn].indexOf(a) !== -1 && l === as || Oo.indexOf(a) !== -1 && [To, qt].indexOf(l) !== -1 || Oo.indexOf(l) !== -1 && a === $t || Le.indexOf(a) !== -1 && Le.indexOf(l) !== -1 || a === Qt && Le.indexOf(l) !== -1 || Le.concat(jA).indexOf(a) !== -1 && l === Gt && xp.indexOf(A[o]) === -1 || Le.concat(jA).indexOf(l) !== -1 && a === Vt)
    return q;
  if (a === dn && l === dn) {
    for (var w = t[n], U = 1; w > 0 && (w--, e[w] === dn); )
      U++;
    if (U % 2 !== 0)
      return q;
  }
  return a === Mr && l === kr ? q : Nr;
}, Tp = function(A, e) {
  e || (e = { lineBreak: "normal", wordBreak: "normal" });
  var t = Kp(A, e.lineBreak), r = t[0], s = t[1], n = t[2];
  (e.wordBreak === "break-all" || e.wordBreak === "break-word") && (s = s.map(function(o) {
    return [jA, ct, Nl].indexOf(o) !== -1 ? Cr : o;
  }));
  var i = e.wordBreak === "keep-all" ? n.map(function(o, a) {
    return o && A[a] >= 19968 && A[a] <= 40959;
  }) : void 0;
  return [r, s, i];
}, Dp = (
  /** @class */
  function() {
    function A(e, t, r, s) {
      this.codePoints = e, this.required = t === Vl, this.start = r, this.end = s;
    }
    return A.prototype.slice = function() {
      return CA.apply(void 0, this.codePoints.slice(this.start, this.end));
    }, A;
  }()
), Op = function(A, e) {
  var t = Vs(A), r = Tp(t, e), s = r[0], n = r[1], i = r[2], o = t.length, a = 0, c = 0;
  return {
    next: function() {
      if (c >= o)
        return { done: !0, value: null };
      for (var l = q; c < o && (l = Sp(t, n, s, ++c, i)) === q; )
        ;
      if (l !== q || c === o) {
        var B = new Dp(t, l, a, c);
        return a = c, { value: B, done: !1 };
      }
      return { done: !0, value: null };
    }
  };
}, Rp = 1, Mp = 2, mr = 4, Mo = 8, Qs = 10, ko = 47, lr = 92, kp = 9, Np = 32, Vr = 34, Pt = 61, Vp = 35, Gp = 36, Pp = 37, Gr = 39, Pr = 40, Jt = 41, Jp = 95, XA = 45, Xp = 33, Wp = 60, Yp = 62, Zp = 64, jp = 91, zp = 93, qp = 61, $p = 123, Jr = 63, AQ = 125, No = 124, eQ = 126, tQ = 128, Vo = 65533, wn = 42, ft = 43, rQ = 44, sQ = 58, nQ = 59, Ur = 46, iQ = 0, oQ = 8, aQ = 11, lQ = 14, cQ = 31, BQ = 127, Qe = -1, Pl = 48, Jl = 97, Xl = 101, uQ = 102, fQ = 117, gQ = 122, Wl = 65, Yl = 69, Zl = 70, dQ = 85, hQ = 90, DA = function(A) {
  return A >= Pl && A <= 57;
}, wQ = function(A) {
  return A >= 55296 && A <= 57343;
}, Ut = function(A) {
  return DA(A) || A >= Wl && A <= Zl || A >= Jl && A <= uQ;
}, pQ = function(A) {
  return A >= Jl && A <= gQ;
}, QQ = function(A) {
  return A >= Wl && A <= hQ;
}, CQ = function(A) {
  return pQ(A) || QQ(A);
}, UQ = function(A) {
  return A >= tQ;
}, Xr = function(A) {
  return A === Qs || A === kp || A === Np;
}, Cs = function(A) {
  return CQ(A) || UQ(A) || A === Jp;
}, Go = function(A) {
  return Cs(A) || DA(A) || A === XA;
}, FQ = function(A) {
  return A >= iQ && A <= oQ || A === aQ || A >= lQ && A <= cQ || A === BQ;
}, Ze = function(A, e) {
  return A !== lr ? !1 : e !== Qs;
}, Wr = function(A, e, t) {
  return A === XA ? Cs(e) || Ze(e, t) : Cs(A) ? !0 : !!(A === lr && Ze(A, e));
}, pn = function(A, e, t) {
  return A === ft || A === XA ? DA(e) ? !0 : e === Ur && DA(t) : DA(A === Ur ? e : A);
}, vQ = function(A) {
  var e = 0, t = 1;
  (A[e] === ft || A[e] === XA) && (A[e] === XA && (t = -1), e++);
  for (var r = []; DA(A[e]); )
    r.push(A[e++]);
  var s = r.length ? parseInt(CA.apply(void 0, r), 10) : 0;
  A[e] === Ur && e++;
  for (var n = []; DA(A[e]); )
    n.push(A[e++]);
  var i = n.length, o = i ? parseInt(CA.apply(void 0, n), 10) : 0;
  (A[e] === Yl || A[e] === Xl) && e++;
  var a = 1;
  (A[e] === ft || A[e] === XA) && (A[e] === XA && (a = -1), e++);
  for (var c = []; DA(A[e]); )
    c.push(A[e++]);
  var l = c.length ? parseInt(CA.apply(void 0, c), 10) : 0;
  return t * (s + o * Math.pow(10, -i)) * Math.pow(10, a * l);
}, bQ = {
  type: 2
  /* LEFT_PARENTHESIS_TOKEN */
}, EQ = {
  type: 3
  /* RIGHT_PARENTHESIS_TOKEN */
}, mQ = {
  type: 4
  /* COMMA_TOKEN */
}, yQ = {
  type: 13
  /* SUFFIX_MATCH_TOKEN */
}, HQ = {
  type: 8
  /* PREFIX_MATCH_TOKEN */
}, IQ = {
  type: 21
  /* COLUMN_TOKEN */
}, xQ = {
  type: 9
  /* DASH_MATCH_TOKEN */
}, LQ = {
  type: 10
  /* INCLUDE_MATCH_TOKEN */
}, _Q = {
  type: 11
  /* LEFT_CURLY_BRACKET_TOKEN */
}, KQ = {
  type: 12
  /* RIGHT_CURLY_BRACKET_TOKEN */
}, SQ = {
  type: 14
  /* SUBSTRING_MATCH_TOKEN */
}, Yr = {
  type: 23
  /* BAD_URL_TOKEN */
}, TQ = {
  type: 1
  /* BAD_STRING_TOKEN */
}, DQ = {
  type: 25
  /* CDO_TOKEN */
}, OQ = {
  type: 24
  /* CDC_TOKEN */
}, RQ = {
  type: 26
  /* COLON_TOKEN */
}, MQ = {
  type: 27
  /* SEMICOLON_TOKEN */
}, kQ = {
  type: 28
  /* LEFT_SQUARE_BRACKET_TOKEN */
}, NQ = {
  type: 29
  /* RIGHT_SQUARE_BRACKET_TOKEN */
}, VQ = {
  type: 31
  /* WHITESPACE_TOKEN */
}, ei = {
  type: 32
  /* EOF_TOKEN */
}, jl = (
  /** @class */
  function() {
    function A() {
      this._value = [];
    }
    return A.prototype.write = function(e) {
      this._value = this._value.concat(Vs(e));
    }, A.prototype.read = function() {
      for (var e = [], t = this.consumeToken(); t !== ei; )
        e.push(t), t = this.consumeToken();
      return e;
    }, A.prototype.consumeToken = function() {
      var e = this.consumeCodePoint();
      switch (e) {
        case Vr:
          return this.consumeStringToken(Vr);
        case Vp:
          var t = this.peekCodePoint(0), r = this.peekCodePoint(1), s = this.peekCodePoint(2);
          if (Go(t) || Ze(r, s)) {
            var n = Wr(t, r, s) ? Mp : Rp, i = this.consumeName();
            return { type: 5, value: i, flags: n };
          }
          break;
        case Gp:
          if (this.peekCodePoint(0) === Pt)
            return this.consumeCodePoint(), yQ;
          break;
        case Gr:
          return this.consumeStringToken(Gr);
        case Pr:
          return bQ;
        case Jt:
          return EQ;
        case wn:
          if (this.peekCodePoint(0) === Pt)
            return this.consumeCodePoint(), SQ;
          break;
        case ft:
          if (pn(e, this.peekCodePoint(0), this.peekCodePoint(1)))
            return this.reconsumeCodePoint(e), this.consumeNumericToken();
          break;
        case rQ:
          return mQ;
        case XA:
          var o = e, a = this.peekCodePoint(0), c = this.peekCodePoint(1);
          if (pn(o, a, c))
            return this.reconsumeCodePoint(e), this.consumeNumericToken();
          if (Wr(o, a, c))
            return this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
          if (a === XA && c === Yp)
            return this.consumeCodePoint(), this.consumeCodePoint(), OQ;
          break;
        case Ur:
          if (pn(e, this.peekCodePoint(0), this.peekCodePoint(1)))
            return this.reconsumeCodePoint(e), this.consumeNumericToken();
          break;
        case ko:
          if (this.peekCodePoint(0) === wn)
            for (this.consumeCodePoint(); ; ) {
              var l = this.consumeCodePoint();
              if (l === wn && (l = this.consumeCodePoint(), l === ko))
                return this.consumeToken();
              if (l === Qe)
                return this.consumeToken();
            }
          break;
        case sQ:
          return RQ;
        case nQ:
          return MQ;
        case Wp:
          if (this.peekCodePoint(0) === Xp && this.peekCodePoint(1) === XA && this.peekCodePoint(2) === XA)
            return this.consumeCodePoint(), this.consumeCodePoint(), DQ;
          break;
        case Zp:
          var B = this.peekCodePoint(0), f = this.peekCodePoint(1), w = this.peekCodePoint(2);
          if (Wr(B, f, w)) {
            var i = this.consumeName();
            return { type: 7, value: i };
          }
          break;
        case jp:
          return kQ;
        case lr:
          if (Ze(e, this.peekCodePoint(0)))
            return this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
          break;
        case zp:
          return NQ;
        case qp:
          if (this.peekCodePoint(0) === Pt)
            return this.consumeCodePoint(), HQ;
          break;
        case $p:
          return _Q;
        case AQ:
          return KQ;
        case fQ:
        case dQ:
          var U = this.peekCodePoint(0), F = this.peekCodePoint(1);
          return U === ft && (Ut(F) || F === Jr) && (this.consumeCodePoint(), this.consumeUnicodeRangeToken()), this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
        case No:
          if (this.peekCodePoint(0) === Pt)
            return this.consumeCodePoint(), xQ;
          if (this.peekCodePoint(0) === No)
            return this.consumeCodePoint(), IQ;
          break;
        case eQ:
          if (this.peekCodePoint(0) === Pt)
            return this.consumeCodePoint(), LQ;
          break;
        case Qe:
          return ei;
      }
      return Xr(e) ? (this.consumeWhiteSpace(), VQ) : DA(e) ? (this.reconsumeCodePoint(e), this.consumeNumericToken()) : Cs(e) ? (this.reconsumeCodePoint(e), this.consumeIdentLikeToken()) : { type: 6, value: CA(e) };
    }, A.prototype.consumeCodePoint = function() {
      var e = this._value.shift();
      return typeof e > "u" ? -1 : e;
    }, A.prototype.reconsumeCodePoint = function(e) {
      this._value.unshift(e);
    }, A.prototype.peekCodePoint = function(e) {
      return e >= this._value.length ? -1 : this._value[e];
    }, A.prototype.consumeUnicodeRangeToken = function() {
      for (var e = [], t = this.consumeCodePoint(); Ut(t) && e.length < 6; )
        e.push(t), t = this.consumeCodePoint();
      for (var r = !1; t === Jr && e.length < 6; )
        e.push(t), t = this.consumeCodePoint(), r = !0;
      if (r) {
        var s = parseInt(CA.apply(void 0, e.map(function(a) {
          return a === Jr ? Pl : a;
        })), 16), n = parseInt(CA.apply(void 0, e.map(function(a) {
          return a === Jr ? Zl : a;
        })), 16);
        return { type: 30, start: s, end: n };
      }
      var i = parseInt(CA.apply(void 0, e), 16);
      if (this.peekCodePoint(0) === XA && Ut(this.peekCodePoint(1))) {
        this.consumeCodePoint(), t = this.consumeCodePoint();
        for (var o = []; Ut(t) && o.length < 6; )
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
        if (s === Vr || s === Gr || s === Pr || FQ(s))
          return this.consumeBadUrlRemnants(), Yr;
        if (s === lr)
          if (Ze(s, this.peekCodePoint(0)))
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
        Ze(e, this.peekCodePoint(0)) && this.consumeEscapedCodePoint();
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
          return this._value.splice(0, r), TQ;
        if (s === lr) {
          var n = this._value[r + 1];
          n !== Qe && n !== void 0 && (n === Qs ? (t += this.consumeStringSlice(r), r = -1, this._value.shift()) : Ze(s, n) && (t += this.consumeStringSlice(r), t += CA(this.consumeEscapedCodePoint()), r = -1));
        }
        r++;
      } while (!0);
    }, A.prototype.consumeNumber = function() {
      var e = [], t = mr, r = this.peekCodePoint(0);
      for ((r === ft || r === XA) && e.push(this.consumeCodePoint()); DA(this.peekCodePoint(0)); )
        e.push(this.consumeCodePoint());
      r = this.peekCodePoint(0);
      var s = this.peekCodePoint(1);
      if (r === Ur && DA(s))
        for (e.push(this.consumeCodePoint(), this.consumeCodePoint()), t = Mo; DA(this.peekCodePoint(0)); )
          e.push(this.consumeCodePoint());
      r = this.peekCodePoint(0), s = this.peekCodePoint(1);
      var n = this.peekCodePoint(2);
      if ((r === Yl || r === Xl) && ((s === ft || s === XA) && DA(n) || DA(s)))
        for (e.push(this.consumeCodePoint(), this.consumeCodePoint()), t = Mo; DA(this.peekCodePoint(0)); )
          e.push(this.consumeCodePoint());
      return [vQ(e), t];
    }, A.prototype.consumeNumericToken = function() {
      var e = this.consumeNumber(), t = e[0], r = e[1], s = this.peekCodePoint(0), n = this.peekCodePoint(1), i = this.peekCodePoint(2);
      if (Wr(s, n, i)) {
        var o = this.consumeName();
        return { type: 15, number: t, flags: r, unit: o };
      }
      return s === Pp ? (this.consumeCodePoint(), { type: 16, number: t, flags: r }) : { type: 17, number: t, flags: r };
    }, A.prototype.consumeEscapedCodePoint = function() {
      var e = this.consumeCodePoint();
      if (Ut(e)) {
        for (var t = CA(e); Ut(this.peekCodePoint(0)) && t.length < 6; )
          t += CA(this.consumeCodePoint());
        Xr(this.peekCodePoint(0)) && this.consumeCodePoint();
        var r = parseInt(t, 16);
        return r === 0 || wQ(r) || r > 1114111 ? Vo : r;
      }
      return e === Qe ? Vo : e;
    }, A.prototype.consumeName = function() {
      for (var e = ""; ; ) {
        var t = this.consumeCodePoint();
        if (Go(t))
          e += CA(t);
        else if (Ze(t, this.peekCodePoint(0)))
          e += CA(this.consumeEscapedCodePoint());
        else
          return this.reconsumeCodePoint(t), e;
      }
    }, A;
  }()
), zl = (
  /** @class */
  function() {
    function A(e) {
      this._tokens = e;
    }
    return A.create = function(e) {
      var t = new jl();
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
        if (r.type === 32 || PQ(r, e))
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
      return typeof e > "u" ? ei : e;
    }, A.prototype.reconsumeToken = function(e) {
      this._tokens.unshift(e);
    }, A;
  }()
), yr = function(A) {
  return A.type === 15;
}, Ot = function(A) {
  return A.type === 17;
}, lA = function(A) {
  return A.type === 20;
}, GQ = function(A) {
  return A.type === 0;
}, ti = function(A, e) {
  return lA(A) && A.value === e;
}, ql = function(A) {
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
}, PQ = function(A, e) {
  return e === 11 && A.type === 12 || e === 28 && A.type === 29 ? !0 : e === 2 && A.type === 3;
}, st = function(A) {
  return A.type === 17 || A.type === 15;
}, bA = function(A) {
  return A.type === 16 || st(A);
}, $l = function(A) {
  return A.length > 1 ? [A[0], A[1]] : [A[0]];
}, SA = {
  type: 17,
  number: 0,
  flags: mr
}, _i = {
  type: 16,
  number: 50,
  flags: mr
}, ze = {
  type: 16,
  number: 100,
  flags: mr
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
}, Ac = "deg", ec = "grad", tc = "rad", rc = "turn", Gs = {
  name: "angle",
  parse: function(A, e) {
    if (e.type === 15)
      switch (e.unit) {
        case Ac:
          return Math.PI * e.number / 180;
        case ec:
          return Math.PI / 200 * e.number;
        case tc:
          return e.number;
        case rc:
          return Math.PI * 2 * e.number;
      }
    throw new Error("Unsupported angle type");
  }
}, sc = function(A) {
  return A.type === 15 && (A.unit === Ac || A.unit === ec || A.unit === tc || A.unit === rc);
}, nc = function(A) {
  var e = A.filter(lA).map(function(t) {
    return t.value;
  }).join(" ");
  switch (e) {
    case "to bottom right":
    case "to right bottom":
    case "left top":
    case "top left":
      return [SA, SA];
    case "to top":
    case "bottom":
      return se(0);
    case "to bottom left":
    case "to left bottom":
    case "right top":
    case "top right":
      return [SA, ze];
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
      return [ze, SA];
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
      var t = JQ[e.name];
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
      var o = Re[e.value.toUpperCase()];
      if (typeof o < "u")
        return o;
    }
    return Re.TRANSPARENT;
  }
}, tt = function(A) {
  return (255 & A) === 0;
}, IA = function(A) {
  var e = 255 & A, t = 255 & A >> 8, r = 255 & A >> 16, s = 255 & A >> 24;
  return e < 255 ? "rgba(" + s + "," + r + "," + t + "," + e / 255 + ")" : "rgb(" + s + "," + r + "," + t + ")";
}, qe = function(A, e, t, r) {
  return (A << 24 | e << 16 | t << 8 | Math.round(r * 255) << 0) >>> 0;
}, Po = function(A, e) {
  if (A.type === 17)
    return A.number;
  if (A.type === 16) {
    var t = e === 3 ? 1 : 255;
    return e === 3 ? A.number / 100 * t : Math.round(A.number / 100 * t);
  }
  return 0;
}, Jo = function(A, e) {
  var t = e.filter(Tt);
  if (t.length === 3) {
    var r = t.map(Po), s = r[0], n = r[1], i = r[2];
    return qe(s, n, i, 1);
  }
  if (t.length === 4) {
    var o = t.map(Po), s = o[0], n = o[1], i = o[2], a = o[3];
    return qe(s, n, i, a);
  }
  return 0;
};
function Qn(A, e, t) {
  return t < 0 && (t += 1), t >= 1 && (t -= 1), t < 1 / 6 ? (e - A) * t * 6 + A : t < 1 / 2 ? e : t < 2 / 3 ? (e - A) * 6 * (2 / 3 - t) + A : A;
}
var Xo = function(A, e) {
  var t = e.filter(Tt), r = t[0], s = t[1], n = t[2], i = t[3], o = (r.type === 17 ? se(r.number) : Gs.parse(A, r)) / (Math.PI * 2), a = bA(s) ? s.number / 100 : 0, c = bA(n) ? n.number / 100 : 0, l = typeof i < "u" && bA(i) ? gA(i, 1) : 1;
  if (a === 0)
    return qe(c * 255, c * 255, c * 255, 1);
  var B = c <= 0.5 ? c * (a + 1) : c + a - c * a, f = c * 2 - B, w = Qn(f, B, o + 1 / 3), U = Qn(f, B, o), F = Qn(f, B, o - 1 / 3);
  return qe(w * 255, U * 255, F * 255, l);
}, JQ = {
  hsl: Xo,
  hsla: Xo,
  rgb: Jo,
  rgba: Jo
}, cr = function(A, e) {
  return et.parse(A, zl.create(e).parseComponentValue());
}, Re = {
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
}, XQ = {
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
}, WQ = {
  name: "background-color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, Ps = function(A, e) {
  var t = et.parse(A, e[0]), r = e[1];
  return r && bA(r) ? { color: t, stop: r } : { color: t, stop: null };
}, Wo = function(A, e) {
  var t = A[0], r = A[A.length - 1];
  t.stop === null && (t.stop = SA), r.stop === null && (r.stop = ze);
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
      for (var B = i - c, f = s[c - 1], w = (l - f) / (B + 1), U = 1; U <= B; U++)
        s[c + U - 1] = w * U;
      c = null;
    }
  }
  return A.map(function(F, h) {
    var b = F.color;
    return { color: b, stop: Math.max(Math.min(1, s[h] / e), 0) };
  });
}, YQ = function(A, e, t) {
  var r = e / 2, s = t / 2, n = gA(A[0], e) - r, i = s - gA(A[1], t);
  return (Math.atan2(i, n) + Math.PI * 2) % (Math.PI * 2);
}, ZQ = function(A, e, t) {
  var r = typeof A == "number" ? A : YQ(A, e, t), s = Math.abs(e * Math.sin(r)) + Math.abs(t * Math.cos(r)), n = e / 2, i = t / 2, o = s / 2, a = Math.sin(r - Math.PI / 2) * o, c = Math.cos(r - Math.PI / 2) * o;
  return [s, n - c, n + c, i - a, i + a];
}, ae = function(A, e) {
  return Math.sqrt(A * A + e * e);
}, Yo = function(A, e, t, r, s) {
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
}, jQ = function(A, e, t, r, s) {
  var n = 0, i = 0;
  switch (A.size) {
    case 0:
      A.shape === 0 ? n = i = Math.min(Math.abs(e), Math.abs(e - r), Math.abs(t), Math.abs(t - s)) : A.shape === 1 && (n = Math.min(Math.abs(e), Math.abs(e - r)), i = Math.min(Math.abs(t), Math.abs(t - s)));
      break;
    case 2:
      if (A.shape === 0)
        n = i = Math.min(ae(e, t), ae(e, t - s), ae(e - r, t), ae(e - r, t - s));
      else if (A.shape === 1) {
        var o = Math.min(Math.abs(t), Math.abs(t - s)) / Math.min(Math.abs(e), Math.abs(e - r)), a = Yo(r, s, e, t, !0), c = a[0], l = a[1];
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
        var o = Math.max(Math.abs(t), Math.abs(t - s)) / Math.max(Math.abs(e), Math.abs(e - r)), B = Yo(r, s, e, t, !1), c = B[0], l = B[1];
        n = ae(c - e, (l - t) / o), i = o * n;
      }
      break;
  }
  return Array.isArray(A.size) && (n = gA(A.size[0], r), i = A.size.length === 2 ? gA(A.size[1], s) : n), [n, i];
}, zQ = function(A, e) {
  var t = se(180), r = [];
  return ye(e).forEach(function(s, n) {
    if (n === 0) {
      var i = s[0];
      if (i.type === 20 && i.value === "to") {
        t = nc(s);
        return;
      } else if (sc(i)) {
        t = Gs.parse(A, i);
        return;
      }
    }
    var o = Ps(A, s);
    r.push(o);
  }), {
    angle: t,
    stops: r,
    type: 1
    /* LINEAR_GRADIENT */
  };
}, Zr = function(A, e) {
  var t = se(180), r = [];
  return ye(e).forEach(function(s, n) {
    if (n === 0) {
      var i = s[0];
      if (i.type === 20 && ["top", "left", "right", "bottom"].indexOf(i.value) !== -1) {
        t = nc(s);
        return;
      } else if (sc(i)) {
        t = (Gs.parse(A, i) + se(270)) % se(360);
        return;
      }
    }
    var o = Ps(A, s);
    r.push(o);
  }), {
    angle: t,
    stops: r,
    type: 1
    /* LINEAR_GRADIENT */
  };
}, qQ = function(A, e) {
  var t = se(180), r = [], s = 1, n = 0, i = 3, o = [];
  return ye(e).forEach(function(a, c) {
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
        var B = et.parse(A, l.values[0]);
        r.push({ stop: SA, color: B });
      } else if (l.name === "to") {
        var B = et.parse(A, l.values[0]);
        r.push({ stop: ze, color: B });
      } else if (l.name === "color-stop") {
        var f = l.values.filter(Tt);
        if (f.length === 2) {
          var B = et.parse(A, f[1]), w = f[0];
          Ot(w) && r.push({
            stop: { type: 16, number: w.number * 100, flags: w.flags },
            color: B
          });
        }
      }
    }
  }), s === 1 ? {
    angle: (t + se(180)) % se(360),
    stops: r,
    type: s
  } : { size: i, shape: n, stops: r, position: o, type: s };
}, ic = "closest-side", oc = "farthest-side", ac = "closest-corner", lc = "farthest-corner", cc = "circle", Bc = "ellipse", uc = "cover", fc = "contain", $Q = function(A, e) {
  var t = 0, r = 3, s = [], n = [];
  return ye(e).forEach(function(i, o) {
    var a = !0;
    if (o === 0) {
      var c = !1;
      a = i.reduce(function(B, f) {
        if (c)
          if (lA(f))
            switch (f.value) {
              case "center":
                return n.push(_i), B;
              case "top":
              case "left":
                return n.push(SA), B;
              case "right":
              case "bottom":
                return n.push(ze), B;
            }
          else (bA(f) || st(f)) && n.push(f);
        else if (lA(f))
          switch (f.value) {
            case cc:
              return t = 0, !1;
            case Bc:
              return t = 1, !1;
            case "at":
              return c = !0, !1;
            case ic:
              return r = 0, !1;
            case uc:
            case oc:
              return r = 1, !1;
            case fc:
            case ac:
              return r = 2, !1;
            case lc:
              return r = 3, !1;
          }
        else if (st(f) || bA(f))
          return Array.isArray(r) || (r = []), r.push(f), !1;
        return B;
      }, a);
    }
    if (a) {
      var l = Ps(A, i);
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
}, jr = function(A, e) {
  var t = 0, r = 3, s = [], n = [];
  return ye(e).forEach(function(i, o) {
    var a = !0;
    if (o === 0 ? a = i.reduce(function(l, B) {
      if (lA(B))
        switch (B.value) {
          case "center":
            return n.push(_i), !1;
          case "top":
          case "left":
            return n.push(SA), !1;
          case "right":
          case "bottom":
            return n.push(ze), !1;
        }
      else if (bA(B) || st(B))
        return n.push(B), !1;
      return l;
    }, a) : o === 1 && (a = i.reduce(function(l, B) {
      if (lA(B))
        switch (B.value) {
          case cc:
            return t = 0, !1;
          case Bc:
            return t = 1, !1;
          case fc:
          case ic:
            return r = 0, !1;
          case oc:
            return r = 1, !1;
          case ac:
            return r = 2, !1;
          case uc:
          case lc:
            return r = 3, !1;
        }
      else if (st(B) || bA(B))
        return Array.isArray(r) || (r = []), r.push(B), !1;
      return l;
    }, a)), a) {
      var c = Ps(A, i);
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
}, AC = function(A) {
  return A.type === 1;
}, eC = function(A) {
  return A.type === 2;
}, Ki = {
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
      var r = gc[e.name];
      if (typeof r > "u")
        throw new Error('Attempting to parse an unsupported image function "' + e.name + '"');
      return r(A, e.values);
    }
    throw new Error("Unsupported image type " + e.type);
  }
};
function tC(A) {
  return !(A.type === 20 && A.value === "none") && (A.type !== 18 || !!gc[A.name]);
}
var gc = {
  "linear-gradient": zQ,
  "-moz-linear-gradient": Zr,
  "-ms-linear-gradient": Zr,
  "-o-linear-gradient": Zr,
  "-webkit-linear-gradient": Zr,
  "radial-gradient": $Q,
  "-moz-radial-gradient": jr,
  "-ms-radial-gradient": jr,
  "-o-radial-gradient": jr,
  "-webkit-radial-gradient": jr,
  "-webkit-gradient": qQ
}, rC = {
  name: "background-image",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(A, e) {
    if (e.length === 0)
      return [];
    var t = e[0];
    return t.type === 20 && t.value === "none" ? [] : e.filter(function(r) {
      return Tt(r) && tC(r);
    }).map(function(r) {
      return Ki.parse(A, r);
    });
  }
}, sC = {
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
}, nC = {
  name: "background-position",
  initialValue: "0% 0%",
  type: 1,
  prefix: !1,
  parse: function(A, e) {
    return ye(e).map(function(t) {
      return t.filter(bA);
    }).map($l);
  }
}, iC = {
  name: "background-repeat",
  initialValue: "repeat",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    return ye(e).map(function(t) {
      return t.filter(lA).map(function(r) {
        return r.value;
      }).join(" ");
    }).map(oC);
  }
}, oC = function(A) {
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
}, _t;
(function(A) {
  A.AUTO = "auto", A.CONTAIN = "contain", A.COVER = "cover";
})(_t || (_t = {}));
var aC = {
  name: "background-size",
  initialValue: "0",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    return ye(e).map(function(t) {
      return t.filter(lC);
    });
  }
}, lC = function(A) {
  return lA(A) || bA(A);
}, Js = function(A) {
  return {
    name: "border-" + A + "-color",
    initialValue: "transparent",
    prefix: !1,
    type: 3,
    format: "color"
  };
}, cC = Js("top"), BC = Js("right"), uC = Js("bottom"), fC = Js("left"), Xs = function(A) {
  return {
    name: "border-radius-" + A,
    initialValue: "0 0",
    prefix: !1,
    type: 1,
    parse: function(e, t) {
      return $l(t.filter(bA));
    }
  };
}, gC = Xs("top-left"), dC = Xs("top-right"), hC = Xs("bottom-right"), wC = Xs("bottom-left"), Ws = function(A) {
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
}, pC = Ws("top"), QC = Ws("right"), CC = Ws("bottom"), UC = Ws("left"), Ys = function(A) {
  return {
    name: "border-" + A + "-width",
    initialValue: "0",
    type: 0,
    prefix: !1,
    parse: function(e, t) {
      return yr(t) ? t.number : 0;
    }
  };
}, FC = Ys("top"), vC = Ys("right"), bC = Ys("bottom"), EC = Ys("left"), mC = {
  name: "color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, yC = {
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
}, HC = {
  name: "display",
  initialValue: "inline-block",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    return e.filter(lA).reduce(
      function(t, r) {
        return t | IC(r.value);
      },
      0
      /* NONE */
    );
  }
}, IC = function(A) {
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
}, xC = {
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
}, LC = {
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
var _C = {
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
}, KC = {
  name: "line-height",
  initialValue: "normal",
  prefix: !1,
  type: 4
  /* TOKEN_VALUE */
}, Zo = function(A, e) {
  return lA(A) && A.value === "normal" ? 1.2 * e : A.type === 17 ? e * A.number : bA(A) ? gA(A, e) : e;
}, SC = {
  name: "list-style-image",
  initialValue: "none",
  type: 0,
  prefix: !1,
  parse: function(A, e) {
    return e.type === 20 && e.value === "none" ? null : Ki.parse(A, e);
  }
}, TC = {
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
}, ri = {
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
}, Zs = function(A) {
  return {
    name: "margin-" + A,
    initialValue: "0",
    prefix: !1,
    type: 4
    /* TOKEN_VALUE */
  };
}, DC = Zs("top"), OC = Zs("right"), RC = Zs("bottom"), MC = Zs("left"), kC = {
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
}, NC = {
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
}, js = function(A) {
  return {
    name: "padding-" + A,
    initialValue: "0",
    prefix: !1,
    type: 3,
    format: "length-percentage"
  };
}, VC = js("top"), GC = js("right"), PC = js("bottom"), JC = js("left"), XC = {
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
}, WC = {
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
}, YC = {
  name: "text-shadow",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(A, e) {
    return e.length === 1 && ti(e[0], "none") ? [] : ye(e).map(function(t) {
      for (var r = {
        color: Re.TRANSPARENT,
        offsetX: SA,
        offsetY: SA,
        blur: SA
      }, s = 0, n = 0; n < t.length; n++) {
        var i = t[n];
        st(i) ? (s === 0 ? r.offsetX = i : s === 1 ? r.offsetY = i : r.blur = i, s++) : r.color = et.parse(A, i);
      }
      return r;
    });
  }
}, ZC = {
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
}, jC = {
  name: "transform",
  initialValue: "none",
  prefix: !0,
  type: 0,
  parse: function(A, e) {
    if (e.type === 20 && e.value === "none")
      return null;
    if (e.type === 18) {
      var t = $C[e.name];
      if (typeof t > "u")
        throw new Error('Attempting to parse an unsupported transform function "' + e.name + '"');
      return t(e.values);
    }
    return null;
  }
}, zC = function(A) {
  var e = A.filter(function(t) {
    return t.type === 17;
  }).map(function(t) {
    return t.number;
  });
  return e.length === 6 ? e : null;
}, qC = function(A) {
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
}, $C = {
  matrix: zC,
  matrix3d: qC
}, jo = {
  type: 16,
  number: 50,
  flags: mr
}, AU = [jo, jo], eU = {
  name: "transform-origin",
  initialValue: "50% 50%",
  prefix: !0,
  type: 1,
  parse: function(A, e) {
    var t = e.filter(bA);
    return t.length !== 2 ? AU : [t[0], t[1]];
  }
}, tU = {
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
}, Br;
(function(A) {
  A.NORMAL = "normal", A.BREAK_ALL = "break-all", A.KEEP_ALL = "keep-all";
})(Br || (Br = {}));
var rU = {
  name: "word-break",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: function(A, e) {
    switch (e) {
      case "break-all":
        return Br.BREAK_ALL;
      case "keep-all":
        return Br.KEEP_ALL;
      case "normal":
      default:
        return Br.NORMAL;
    }
  }
}, sU = {
  name: "z-index",
  initialValue: "auto",
  prefix: !1,
  type: 0,
  parse: function(A, e) {
    if (e.type === 20)
      return { auto: !0, order: 0 };
    if (Ot(e))
      return { auto: !1, order: e.number };
    throw new Error("Invalid z-index number parsed");
  }
}, dc = {
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
}, nU = {
  name: "opacity",
  initialValue: "1",
  type: 0,
  prefix: !1,
  parse: function(A, e) {
    return Ot(e) ? e.number : 1;
  }
}, iU = {
  name: "text-decoration-color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, oU = {
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
}, aU = {
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
}, lU = {
  name: "font-size",
  initialValue: "0",
  prefix: !1,
  type: 3,
  format: "length"
}, cU = {
  name: "font-weight",
  initialValue: "normal",
  type: 0,
  prefix: !1,
  parse: function(A, e) {
    if (Ot(e))
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
}, BU = {
  name: "font-variant",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(A, e) {
    return e.filter(lA).map(function(t) {
      return t.value;
    });
  }
}, uU = {
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
}, mA = function(A, e) {
  return (A & e) !== 0;
}, fU = {
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
}, gU = {
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
    for (var r = [], s = e.filter(ql), n = 0; n < s.length; n++) {
      var i = s[n], o = s[n + 1];
      if (i.type === 20) {
        var a = o && Ot(o) ? o.number : 1;
        r.push({ counter: i.value, increment: a });
      }
    }
    return r;
  }
}, dU = {
  name: "counter-reset",
  initialValue: "none",
  prefix: !0,
  type: 1,
  parse: function(A, e) {
    if (e.length === 0)
      return [];
    for (var t = [], r = e.filter(ql), s = 0; s < r.length; s++) {
      var n = r[s], i = r[s + 1];
      if (lA(n) && n.value !== "none") {
        var o = i && Ot(i) ? i.number : 0;
        t.push({ counter: n.value, reset: o });
      }
    }
    return t;
  }
}, hU = {
  name: "duration",
  initialValue: "0s",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    return e.filter(yr).map(function(t) {
      return dc.parse(A, t);
    });
  }
}, wU = {
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
    var r = [], s = e.filter(GQ);
    if (s.length % 2 !== 0)
      return null;
    for (var n = 0; n < s.length; n += 2) {
      var i = s[n].value, o = s[n + 1].value;
      r.push({ open: i, close: o });
    }
    return r;
  }
}, zo = function(A, e, t) {
  if (!A)
    return "";
  var r = A[Math.min(e, A.length - 1)];
  return r ? t ? r.open : r.close : "";
}, pU = {
  name: "box-shadow",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(A, e) {
    return e.length === 1 && ti(e[0], "none") ? [] : ye(e).map(function(t) {
      for (var r = {
        color: 255,
        offsetX: SA,
        offsetY: SA,
        blur: SA,
        spread: SA,
        inset: !1
      }, s = 0, n = 0; n < t.length; n++) {
        var i = t[n];
        ti(i, "inset") ? r.inset = !0 : st(i) ? (s === 0 ? r.offsetX = i : s === 1 ? r.offsetY = i : s === 2 ? r.blur = i : r.spread = i, s++) : r.color = et.parse(A, i);
      }
      return r;
    });
  }
}, QU = {
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
}, CU = {
  name: "-webkit-text-stroke-color",
  initialValue: "currentcolor",
  prefix: !1,
  type: 3,
  format: "color"
}, UU = {
  name: "-webkit-text-stroke-width",
  initialValue: "0",
  type: 0,
  prefix: !1,
  parse: function(A, e) {
    return yr(e) ? e.number : 0;
  }
}, FU = (
  /** @class */
  function() {
    function A(e, t) {
      var r, s;
      this.animationDuration = M(e, hU, t.animationDuration), this.backgroundClip = M(e, XQ, t.backgroundClip), this.backgroundColor = M(e, WQ, t.backgroundColor), this.backgroundImage = M(e, rC, t.backgroundImage), this.backgroundOrigin = M(e, sC, t.backgroundOrigin), this.backgroundPosition = M(e, nC, t.backgroundPosition), this.backgroundRepeat = M(e, iC, t.backgroundRepeat), this.backgroundSize = M(e, aC, t.backgroundSize), this.borderTopColor = M(e, cC, t.borderTopColor), this.borderRightColor = M(e, BC, t.borderRightColor), this.borderBottomColor = M(e, uC, t.borderBottomColor), this.borderLeftColor = M(e, fC, t.borderLeftColor), this.borderTopLeftRadius = M(e, gC, t.borderTopLeftRadius), this.borderTopRightRadius = M(e, dC, t.borderTopRightRadius), this.borderBottomRightRadius = M(e, hC, t.borderBottomRightRadius), this.borderBottomLeftRadius = M(e, wC, t.borderBottomLeftRadius), this.borderTopStyle = M(e, pC, t.borderTopStyle), this.borderRightStyle = M(e, QC, t.borderRightStyle), this.borderBottomStyle = M(e, CC, t.borderBottomStyle), this.borderLeftStyle = M(e, UC, t.borderLeftStyle), this.borderTopWidth = M(e, FC, t.borderTopWidth), this.borderRightWidth = M(e, vC, t.borderRightWidth), this.borderBottomWidth = M(e, bC, t.borderBottomWidth), this.borderLeftWidth = M(e, EC, t.borderLeftWidth), this.boxShadow = M(e, pU, t.boxShadow), this.color = M(e, mC, t.color), this.direction = M(e, yC, t.direction), this.display = M(e, HC, t.display), this.float = M(e, xC, t.cssFloat), this.fontFamily = M(e, aU, t.fontFamily), this.fontSize = M(e, lU, t.fontSize), this.fontStyle = M(e, uU, t.fontStyle), this.fontVariant = M(e, BU, t.fontVariant), this.fontWeight = M(e, cU, t.fontWeight), this.letterSpacing = M(e, LC, t.letterSpacing), this.lineBreak = M(e, _C, t.lineBreak), this.lineHeight = M(e, KC, t.lineHeight), this.listStyleImage = M(e, SC, t.listStyleImage), this.listStylePosition = M(e, TC, t.listStylePosition), this.listStyleType = M(e, ri, t.listStyleType), this.marginTop = M(e, DC, t.marginTop), this.marginRight = M(e, OC, t.marginRight), this.marginBottom = M(e, RC, t.marginBottom), this.marginLeft = M(e, MC, t.marginLeft), this.opacity = M(e, nU, t.opacity);
      var n = M(e, kC, t.overflow);
      this.overflowX = n[0], this.overflowY = n[n.length > 1 ? 1 : 0], this.overflowWrap = M(e, NC, t.overflowWrap), this.paddingTop = M(e, VC, t.paddingTop), this.paddingRight = M(e, GC, t.paddingRight), this.paddingBottom = M(e, PC, t.paddingBottom), this.paddingLeft = M(e, JC, t.paddingLeft), this.paintOrder = M(e, QU, t.paintOrder), this.position = M(e, WC, t.position), this.textAlign = M(e, XC, t.textAlign), this.textDecorationColor = M(e, iU, (r = t.textDecorationColor) !== null && r !== void 0 ? r : t.color), this.textDecorationLine = M(e, oU, (s = t.textDecorationLine) !== null && s !== void 0 ? s : t.textDecoration), this.textShadow = M(e, YC, t.textShadow), this.textTransform = M(e, ZC, t.textTransform), this.transform = M(e, jC, t.transform), this.transformOrigin = M(e, eU, t.transformOrigin), this.visibility = M(e, tU, t.visibility), this.webkitTextStrokeColor = M(e, CU, t.webkitTextStrokeColor), this.webkitTextStrokeWidth = M(e, UU, t.webkitTextStrokeWidth), this.wordBreak = M(e, rU, t.wordBreak), this.zIndex = M(e, sU, t.zIndex);
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
      return mA(
        this.display,
        4
        /* INLINE */
      ) || mA(
        this.display,
        33554432
        /* INLINE_BLOCK */
      ) || mA(
        this.display,
        268435456
        /* INLINE_FLEX */
      ) || mA(
        this.display,
        536870912
        /* INLINE_GRID */
      ) || mA(
        this.display,
        67108864
        /* INLINE_LIST_ITEM */
      ) || mA(
        this.display,
        134217728
        /* INLINE_TABLE */
      );
    }, A;
  }()
), vU = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e, t) {
      this.content = M(e, fU, t.content), this.quotes = M(e, wU, t.quotes);
    }
    return A;
  }()
), qo = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e, t) {
      this.counterIncrement = M(e, gU, t.counterIncrement), this.counterReset = M(e, dU, t.counterReset);
    }
    return A;
  }()
), M = function(A, e, t) {
  var r = new jl(), s = t !== null && typeof t < "u" ? t.toString() : e.initialValue;
  r.write(s);
  var n = new zl(r.read());
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
          return Gs.parse(A, n.parseComponentValue());
        case "color":
          return et.parse(A, n.parseComponentValue());
        case "image":
          return Ki.parse(A, n.parseComponentValue());
        case "length":
          var o = n.parseComponentValue();
          return st(o) ? o : SA;
        case "length-percentage":
          var a = n.parseComponentValue();
          return bA(a) ? a : SA;
        case "time":
          return dc.parse(A, n.parseComponentValue());
      }
      break;
  }
}, bU = "data-html2canvas-debug", EU = function(A) {
  var e = A.getAttribute(bU);
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
}, si = function(A, e) {
  var t = EU(A);
  return t === 1 || e === t;
}, He = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e, t) {
      if (this.context = e, this.textNodes = [], this.elements = [], this.flags = 0, si(
        t,
        3
        /* PARSE */
      ))
        debugger;
      this.styles = new FU(e, window.getComputedStyle(t, null)), oi(t) && (this.styles.animationDuration.some(function(r) {
        return r > 0;
      }) && (t.style.animationDuration = "0s"), this.styles.transform !== null && (t.style.transform = "none")), this.bounds = Ns(this.context, t), si(
        t,
        4
        /* RENDER */
      ) && (this.flags |= 16);
    }
    return A;
  }()
), mU = "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=", $o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", er = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var zr = 0; zr < $o.length; zr++)
  er[$o.charCodeAt(zr)] = zr;
var yU = function(A) {
  var e = A.length * 0.75, t = A.length, r, s = 0, n, i, o, a;
  A[A.length - 1] === "=" && (e--, A[A.length - 2] === "=" && e--);
  var c = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(e) : new Array(e), l = Array.isArray(c) ? c : new Uint8Array(c);
  for (r = 0; r < t; r += 4)
    n = er[A.charCodeAt(r)], i = er[A.charCodeAt(r + 1)], o = er[A.charCodeAt(r + 2)], a = er[A.charCodeAt(r + 3)], l[s++] = n << 2 | i >> 4, l[s++] = (i & 15) << 4 | o >> 2, l[s++] = (o & 3) << 6 | a & 63;
  return c;
}, HU = function(A) {
  for (var e = A.length, t = [], r = 0; r < e; r += 2)
    t.push(A[r + 1] << 8 | A[r]);
  return t;
}, IU = function(A) {
  for (var e = A.length, t = [], r = 0; r < e; r += 4)
    t.push(A[r + 3] << 24 | A[r + 2] << 16 | A[r + 1] << 8 | A[r]);
  return t;
}, wt = 5, Si = 11, Cn = 2, xU = Si - wt, hc = 65536 >> wt, LU = 1 << wt, Un = LU - 1, _U = 1024 >> wt, KU = hc + _U, SU = KU, TU = 32, DU = SU + TU, OU = 65536 >> Si, RU = 1 << xU, MU = RU - 1, Aa = function(A, e, t) {
  return A.slice ? A.slice(e, t) : new Uint16Array(Array.prototype.slice.call(A, e, t));
}, kU = function(A, e, t) {
  return A.slice ? A.slice(e, t) : new Uint32Array(Array.prototype.slice.call(A, e, t));
}, NU = function(A, e) {
  var t = yU(A), r = Array.isArray(t) ? IU(t) : new Uint32Array(t), s = Array.isArray(t) ? HU(t) : new Uint16Array(t), n = 24, i = Aa(s, n / 2, r[4] / 2), o = r[5] === 2 ? Aa(s, (n + r[4]) / 2) : kU(r, Math.ceil((n + r[4]) / 4));
  return new VU(r[0], r[1], r[2], r[3], i, o);
}, VU = (
  /** @class */
  function() {
    function A(e, t, r, s, n, i) {
      this.initialValue = e, this.errorValue = t, this.highStart = r, this.highValueIndex = s, this.index = n, this.data = i;
    }
    return A.prototype.get = function(e) {
      var t;
      if (e >= 0) {
        if (e < 55296 || e > 56319 && e <= 65535)
          return t = this.index[e >> wt], t = (t << Cn) + (e & Un), this.data[t];
        if (e <= 65535)
          return t = this.index[hc + (e - 55296 >> wt)], t = (t << Cn) + (e & Un), this.data[t];
        if (e < this.highStart)
          return t = DU - OU + (e >> Si), t = this.index[t], t += e >> wt & MU, t = this.index[t], t = (t << Cn) + (e & Un), this.data[t];
        if (e <= 1114111)
          return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, A;
  }()
), ea = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", GU = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var qr = 0; qr < ea.length; qr++)
  GU[ea.charCodeAt(qr)] = qr;
var PU = 1, Fn = 2, vn = 3, ta = 4, ra = 5, JU = 7, sa = 8, bn = 9, En = 10, na = 11, ia = 12, oa = 13, aa = 14, mn = 15, XU = function(A) {
  for (var e = [], t = 0, r = A.length; t < r; ) {
    var s = A.charCodeAt(t++);
    if (s >= 55296 && s <= 56319 && t < r) {
      var n = A.charCodeAt(t++);
      (n & 64512) === 56320 ? e.push(((s & 1023) << 10) + (n & 1023) + 65536) : (e.push(s), t--);
    } else
      e.push(s);
  }
  return e;
}, WU = function() {
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
}, YU = NU(mU), ee = "×", yn = "÷", ZU = function(A) {
  return YU.get(A);
}, jU = function(A, e, t) {
  var r = t - 2, s = e[r], n = e[t - 1], i = e[t];
  if (n === Fn && i === vn)
    return ee;
  if (n === Fn || n === vn || n === ta || i === Fn || i === vn || i === ta)
    return yn;
  if (n === sa && [sa, bn, na, ia].indexOf(i) !== -1 || (n === na || n === bn) && (i === bn || i === En) || (n === ia || n === En) && i === En || i === oa || i === ra || i === JU || n === PU)
    return ee;
  if (n === oa && i === aa) {
    for (; s === ra; )
      s = e[--r];
    if (s === aa)
      return ee;
  }
  if (n === mn && i === mn) {
    for (var o = 0; s === mn; )
      o++, s = e[--r];
    if (o % 2 === 0)
      return ee;
  }
  return yn;
}, zU = function(A) {
  var e = XU(A), t = e.length, r = 0, s = 0, n = e.map(ZU);
  return {
    next: function() {
      if (r >= t)
        return { done: !0, value: null };
      for (var i = ee; r < t && (i = jU(e, n, ++r)) === ee; )
        ;
      if (i !== ee || r === t) {
        var o = WU.apply(null, e.slice(s, r));
        return s = r, { value: o, done: !1 };
      }
      return { done: !0, value: null };
    }
  };
}, qU = function(A) {
  for (var e = zU(A), t = [], r; !(r = e.next()).done; )
    r.value && t.push(r.value.slice());
  return t;
}, $U = function(A) {
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
}, AF = function(A) {
  var e = A.createElement("boundtest");
  e.style.width = "50px", e.style.display = "block", e.style.fontSize = "12px", e.style.letterSpacing = "0px", e.style.wordSpacing = "0px", A.body.appendChild(e);
  var t = A.createRange();
  e.innerHTML = typeof "".repeat == "function" ? "&#128104;".repeat(10) : "";
  var r = e.firstChild, s = Vs(r.data).map(function(a) {
    return CA(a);
  }), n = 0, i = {}, o = s.every(function(a, c) {
    t.setStart(r, n), t.setEnd(r, n + a.length);
    var l = t.getBoundingClientRect();
    n += a.length;
    var B = l.x > i.x || l.y > i.y;
    return i = l, c === 0 ? !0 : B;
  });
  return A.body.removeChild(e), o;
}, eF = function() {
  return typeof new Image().crossOrigin < "u";
}, tF = function() {
  return typeof new XMLHttpRequest().responseType == "string";
}, rF = function(A) {
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
}, la = function(A) {
  return A[0] === 0 && A[1] === 255 && A[2] === 0 && A[3] === 255;
}, sF = function(A) {
  var e = A.createElement("canvas"), t = 100;
  e.width = t, e.height = t;
  var r = e.getContext("2d");
  if (!r)
    return Promise.reject(!1);
  r.fillStyle = "rgb(0, 255, 0)", r.fillRect(0, 0, t, t);
  var s = new Image(), n = e.toDataURL();
  s.src = n;
  var i = ni(t, t, 0, 0, s);
  return r.fillStyle = "red", r.fillRect(0, 0, t, t), ca(i).then(function(o) {
    r.drawImage(o, 0, 0);
    var a = r.getImageData(0, 0, t, t).data;
    r.fillStyle = "red", r.fillRect(0, 0, t, t);
    var c = A.createElement("div");
    return c.style.backgroundImage = "url(" + n + ")", c.style.height = t + "px", la(a) ? ca(ni(t, t, 0, 0, c)) : Promise.reject(!1);
  }).then(function(o) {
    return r.drawImage(o, 0, 0), la(r.getImageData(0, 0, t, t).data);
  }).catch(function() {
    return !1;
  });
}, ni = function(A, e, t, r, s) {
  var n = "http://www.w3.org/2000/svg", i = document.createElementNS(n, "svg"), o = document.createElementNS(n, "foreignObject");
  return i.setAttributeNS(null, "width", A.toString()), i.setAttributeNS(null, "height", e.toString()), o.setAttributeNS(null, "width", "100%"), o.setAttributeNS(null, "height", "100%"), o.setAttributeNS(null, "x", t.toString()), o.setAttributeNS(null, "y", r.toString()), o.setAttributeNS(null, "externalResourcesRequired", "true"), i.appendChild(o), o.appendChild(s), i;
}, ca = function(A) {
  return new Promise(function(e, t) {
    var r = new Image();
    r.onload = function() {
      return e(r);
    }, r.onerror = t, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(A));
  });
}, KA = {
  get SUPPORT_RANGE_BOUNDS() {
    var A = $U(document);
    return Object.defineProperty(KA, "SUPPORT_RANGE_BOUNDS", { value: A }), A;
  },
  get SUPPORT_WORD_BREAKING() {
    var A = KA.SUPPORT_RANGE_BOUNDS && AF(document);
    return Object.defineProperty(KA, "SUPPORT_WORD_BREAKING", { value: A }), A;
  },
  get SUPPORT_SVG_DRAWING() {
    var A = rF(document);
    return Object.defineProperty(KA, "SUPPORT_SVG_DRAWING", { value: A }), A;
  },
  get SUPPORT_FOREIGNOBJECT_DRAWING() {
    var A = typeof Array.from == "function" && typeof window.fetch == "function" ? sF(document) : Promise.resolve(!1);
    return Object.defineProperty(KA, "SUPPORT_FOREIGNOBJECT_DRAWING", { value: A }), A;
  },
  get SUPPORT_CORS_IMAGES() {
    var A = eF();
    return Object.defineProperty(KA, "SUPPORT_CORS_IMAGES", { value: A }), A;
  },
  get SUPPORT_RESPONSE_TYPE() {
    var A = tF();
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
), nF = function(A, e, t, r) {
  var s = aF(e, t), n = [], i = 0;
  return s.forEach(function(o) {
    if (t.textDecorationLine.length || o.trim().length > 0)
      if (KA.SUPPORT_RANGE_BOUNDS) {
        var a = Ba(r, i, o.length).getClientRects();
        if (a.length > 1) {
          var c = Ti(o), l = 0;
          c.forEach(function(f) {
            n.push(new ur(f, Ge.fromDOMRectList(A, Ba(r, l + i, f.length).getClientRects()))), l += f.length;
          });
        } else
          n.push(new ur(o, Ge.fromDOMRectList(A, a)));
      } else {
        var B = r.splitText(o.length);
        n.push(new ur(o, iF(A, r))), r = B;
      }
    else KA.SUPPORT_RANGE_BOUNDS || (r = r.splitText(o.length));
    i += o.length;
  }), n;
}, iF = function(A, e) {
  var t = e.ownerDocument;
  if (t) {
    var r = t.createElement("html2canvaswrapper");
    r.appendChild(e.cloneNode(!0));
    var s = e.parentNode;
    if (s) {
      s.replaceChild(r, e);
      var n = Ns(A, r);
      return r.firstChild && s.replaceChild(r.firstChild, r), n;
    }
  }
  return Ge.EMPTY;
}, Ba = function(A, e, t) {
  var r = A.ownerDocument;
  if (!r)
    throw new Error("Node has no owner document");
  var s = r.createRange();
  return s.setStart(A, e), s.setEnd(A, e + t), s;
}, Ti = function(A) {
  if (KA.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    var e = new Intl.Segmenter(void 0, { granularity: "grapheme" });
    return Array.from(e.segment(A)).map(function(t) {
      return t.segment;
    });
  }
  return qU(A);
}, oF = function(A, e) {
  if (KA.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    var t = new Intl.Segmenter(void 0, {
      granularity: "word"
    });
    return Array.from(t.segment(A)).map(function(r) {
      return r.segment;
    });
  }
  return cF(A, e);
}, aF = function(A, e) {
  return e.letterSpacing !== 0 ? Ti(A) : oF(A, e);
}, lF = [32, 160, 4961, 65792, 65793, 4153, 4241], cF = function(A, e) {
  for (var t = Op(A, {
    lineBreak: e.lineBreak,
    wordBreak: e.overflowWrap === "break-word" ? "break-word" : e.wordBreak
  }), r = [], s, n = function() {
    if (s.value) {
      var i = s.value.slice(), o = Vs(i), a = "";
      o.forEach(function(c) {
        lF.indexOf(c) === -1 ? a += CA(c) : (a.length && r.push(a), r.push(CA(c)), a = "");
      }), a.length && r.push(a);
    }
  }; !(s = t.next()).done; )
    n();
  return r;
}, BF = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e, t, r) {
      this.text = uF(t.data, r.textTransform), this.textBounds = nF(e, this.text, r, t);
    }
    return A;
  }()
), uF = function(A, e) {
  switch (e) {
    case 1:
      return A.toLowerCase();
    case 3:
      return A.replace(fF, gF);
    case 2:
      return A.toUpperCase();
    default:
      return A;
  }
}, fF = /(^|\s|:|-|\(|\))([a-z])/g, gF = function(A, e, t) {
  return A.length > 0 ? e + t.toUpperCase() : A;
}, wc = (
  /** @class */
  function(A) {
    fe(e, A);
    function e(t, r) {
      var s = A.call(this, t, r) || this;
      return s.src = r.currentSrc || r.src, s.intrinsicWidth = r.naturalWidth, s.intrinsicHeight = r.naturalHeight, s.context.cache.addImage(s.src), s;
    }
    return e;
  }(He)
), pc = (
  /** @class */
  function(A) {
    fe(e, A);
    function e(t, r) {
      var s = A.call(this, t, r) || this;
      return s.canvas = r, s.intrinsicWidth = r.width, s.intrinsicHeight = r.height, s;
    }
    return e;
  }(He)
), Qc = (
  /** @class */
  function(A) {
    fe(e, A);
    function e(t, r) {
      var s = A.call(this, t, r) || this, n = new XMLSerializer(), i = Ns(t, r);
      return r.setAttribute("width", i.width + "px"), r.setAttribute("height", i.height + "px"), s.svg = "data:image/svg+xml," + encodeURIComponent(n.serializeToString(r)), s.intrinsicWidth = r.width.baseVal.value, s.intrinsicHeight = r.height.baseVal.value, s.context.cache.addImage(s.svg), s;
    }
    return e;
  }(He)
), Cc = (
  /** @class */
  function(A) {
    fe(e, A);
    function e(t, r) {
      var s = A.call(this, t, r) || this;
      return s.value = r.value, s;
    }
    return e;
  }(He)
), ii = (
  /** @class */
  function(A) {
    fe(e, A);
    function e(t, r) {
      var s = A.call(this, t, r) || this;
      return s.start = r.start, s.reversed = typeof r.reversed == "boolean" && r.reversed === !0, s;
    }
    return e;
  }(He)
), dF = [
  {
    type: 15,
    flags: 0,
    unit: "px",
    number: 3
  }
], hF = [
  {
    type: 16,
    flags: 0,
    number: 50
  }
], wF = function(A) {
  return A.width > A.height ? new Ge(A.left + (A.width - A.height) / 2, A.top, A.height, A.height) : A.width < A.height ? new Ge(A.left, A.top + (A.height - A.width) / 2, A.width, A.width) : A;
}, pF = function(A) {
  var e = A.type === QF ? new Array(A.value.length + 1).join("•") : A.value;
  return e.length === 0 ? A.placeholder || "" : e;
}, Fs = "checkbox", vs = "radio", QF = "password", ua = 707406591, Di = (
  /** @class */
  function(A) {
    fe(e, A);
    function e(t, r) {
      var s = A.call(this, t, r) || this;
      switch (s.type = r.type.toLowerCase(), s.checked = r.checked, s.value = pF(r), (s.type === Fs || s.type === vs) && (s.styles.backgroundColor = 3739148031, s.styles.borderTopColor = s.styles.borderRightColor = s.styles.borderBottomColor = s.styles.borderLeftColor = 2779096575, s.styles.borderTopWidth = s.styles.borderRightWidth = s.styles.borderBottomWidth = s.styles.borderLeftWidth = 1, s.styles.borderTopStyle = s.styles.borderRightStyle = s.styles.borderBottomStyle = s.styles.borderLeftStyle = 1, s.styles.backgroundClip = [
        0
        /* BORDER_BOX */
      ], s.styles.backgroundOrigin = [
        0
        /* BORDER_BOX */
      ], s.bounds = wF(s.bounds)), s.type) {
        case Fs:
          s.styles.borderTopRightRadius = s.styles.borderTopLeftRadius = s.styles.borderBottomRightRadius = s.styles.borderBottomLeftRadius = dF;
          break;
        case vs:
          s.styles.borderTopRightRadius = s.styles.borderTopLeftRadius = s.styles.borderBottomRightRadius = s.styles.borderBottomLeftRadius = hF;
          break;
      }
      return s;
    }
    return e;
  }(He)
), Uc = (
  /** @class */
  function(A) {
    fe(e, A);
    function e(t, r) {
      var s = A.call(this, t, r) || this, n = r.options[r.selectedIndex || 0];
      return s.value = n && n.text || "", s;
    }
    return e;
  }(He)
), Fc = (
  /** @class */
  function(A) {
    fe(e, A);
    function e(t, r) {
      var s = A.call(this, t, r) || this;
      return s.value = r.value, s;
    }
    return e;
  }(He)
), vc = (
  /** @class */
  function(A) {
    fe(e, A);
    function e(t, r) {
      var s = A.call(this, t, r) || this;
      s.src = r.src, s.width = parseInt(r.width, 10) || 0, s.height = parseInt(r.height, 10) || 0, s.backgroundColor = s.styles.backgroundColor;
      try {
        if (r.contentWindow && r.contentWindow.document && r.contentWindow.document.documentElement) {
          s.tree = Ec(t, r.contentWindow.document.documentElement);
          var n = r.contentWindow.document.documentElement ? cr(t, getComputedStyle(r.contentWindow.document.documentElement).backgroundColor) : Re.TRANSPARENT, i = r.contentWindow.document.body ? cr(t, getComputedStyle(r.contentWindow.document.body).backgroundColor) : Re.TRANSPARENT;
          s.backgroundColor = tt(n) ? tt(i) ? s.styles.backgroundColor : i : n;
        }
      } catch {
      }
      return s;
    }
    return e;
  }(He)
), CF = ["OL", "UL", "MENU"], ls = function(A, e, t, r) {
  for (var s = e.firstChild, n = void 0; s; s = n)
    if (n = s.nextSibling, mc(s) && s.data.trim().length > 0)
      t.textNodes.push(new BF(A, s, t.styles));
    else if (It(s))
      if (xc(s) && s.assignedNodes)
        s.assignedNodes().forEach(function(o) {
          return ls(A, o, t, r);
        });
      else {
        var i = bc(A, s);
        i.styles.isVisible() && (UF(s, i, r) ? i.flags |= 4 : FF(i.styles) && (i.flags |= 2), CF.indexOf(s.tagName) !== -1 && (i.flags |= 8), t.elements.push(i), s.slot, s.shadowRoot ? ls(A, s.shadowRoot, i, r) : !bs(s) && !yc(s) && !Es(s) && ls(A, s, i, r));
      }
}, bc = function(A, e) {
  return ai(e) ? new wc(A, e) : Hc(e) ? new pc(A, e) : yc(e) ? new Qc(A, e) : vF(e) ? new Cc(A, e) : bF(e) ? new ii(A, e) : EF(e) ? new Di(A, e) : Es(e) ? new Uc(A, e) : bs(e) ? new Fc(A, e) : Ic(e) ? new vc(A, e) : new He(A, e);
}, Ec = function(A, e) {
  var t = bc(A, e);
  return t.flags |= 4, ls(A, e, t, t), t;
}, UF = function(A, e, t) {
  return e.styles.isPositionedWithZIndex() || e.styles.opacity < 1 || e.styles.isTransformed() || Oi(A) && t.styles.isTransparent();
}, FF = function(A) {
  return A.isPositioned() || A.isFloating();
}, mc = function(A) {
  return A.nodeType === Node.TEXT_NODE;
}, It = function(A) {
  return A.nodeType === Node.ELEMENT_NODE;
}, oi = function(A) {
  return It(A) && typeof A.style < "u" && !cs(A);
}, cs = function(A) {
  return typeof A.className == "object";
}, vF = function(A) {
  return A.tagName === "LI";
}, bF = function(A) {
  return A.tagName === "OL";
}, EF = function(A) {
  return A.tagName === "INPUT";
}, mF = function(A) {
  return A.tagName === "HTML";
}, yc = function(A) {
  return A.tagName === "svg";
}, Oi = function(A) {
  return A.tagName === "BODY";
}, Hc = function(A) {
  return A.tagName === "CANVAS";
}, fa = function(A) {
  return A.tagName === "VIDEO";
}, ai = function(A) {
  return A.tagName === "IMG";
}, Ic = function(A) {
  return A.tagName === "IFRAME";
}, ga = function(A) {
  return A.tagName === "STYLE";
}, yF = function(A) {
  return A.tagName === "SCRIPT";
}, bs = function(A) {
  return A.tagName === "TEXTAREA";
}, Es = function(A) {
  return A.tagName === "SELECT";
}, xc = function(A) {
  return A.tagName === "SLOT";
}, da = function(A) {
  return A.tagName.indexOf("-") > 0;
}, HF = (
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
), ha = {
  integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
  values: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
}, wa = {
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
}, IF = {
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
}, xF = {
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
}, Ft = function(A, e, t, r, s, n) {
  return A < e || A > t ? Fr(A, s, n.length > 0) : r.integers.reduce(function(i, o, a) {
    for (; A >= o; )
      A -= o, i += r.values[a];
    return i;
  }, "") + n;
}, Lc = function(A, e, t, r) {
  var s = "";
  do
    t || A--, s = r(A) + s, A /= e;
  while (A * e >= e);
  return s;
}, QA = function(A, e, t, r, s) {
  var n = t - e + 1;
  return (A < 0 ? "-" : "") + (Lc(Math.abs(A), n, r, function(i) {
    return CA(Math.floor(i % n) + e);
  }) + s);
}, ot = function(A, e, t) {
  t === void 0 && (t = ". ");
  var r = e.length;
  return Lc(Math.abs(A), r, !1, function(s) {
    return e[Math.floor(s % r)];
  }) + t;
}, yt = 1, Xe = 2, We = 4, tr = 8, _e = function(A, e, t, r, s, n) {
  if (A < -9999 || A > 9999)
    return Fr(A, 4, s.length > 0);
  var i = Math.abs(A), o = s;
  if (i === 0)
    return e[0] + o;
  for (var a = 0; i > 0 && a <= 4; a++) {
    var c = i % 10;
    c === 0 && mA(n, yt) && o !== "" ? o = e[c] + o : c > 1 || c === 1 && a === 0 || c === 1 && a === 1 && mA(n, Xe) || c === 1 && a === 1 && mA(n, We) && A > 100 || c === 1 && a > 1 && mA(n, tr) ? o = e[c] + (a > 0 ? t[a - 1] : "") + o : c === 1 && a > 0 && (o = t[a - 1] + o), i = Math.floor(i / 10);
  }
  return (A < 0 ? r : "") + o;
}, pa = "十百千萬", Qa = "拾佰仟萬", Ca = "マイナス", Hn = "마이너스", Fr = function(A, e, t) {
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
      return Ft(A, 1, 3999, ha, 3, r).toLowerCase();
    case 7:
      return Ft(A, 1, 3999, ha, 3, r);
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
      return Ft(A, 1, 9999, wa, 3, r);
    case 35:
      return Ft(A, 1, 9999, wa, 3, r).toLowerCase();
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
      return _e(A, "零一二三四五六七八九", pa, "負", s, Xe | We | tr);
    case 47:
      return _e(A, "零壹貳參肆伍陸柒捌玖", Qa, "負", s, yt | Xe | We | tr);
    case 42:
      return _e(A, "零一二三四五六七八九", pa, "负", s, Xe | We | tr);
    case 41:
      return _e(A, "零壹贰叁肆伍陆柒捌玖", Qa, "负", s, yt | Xe | We | tr);
    case 26:
      return _e(A, "〇一二三四五六七八九", "十百千万", Ca, s, 0);
    case 25:
      return _e(A, "零壱弐参四伍六七八九", "拾百千万", Ca, s, yt | Xe | We);
    case 31:
      return _e(A, "영일이삼사오육칠팔구", "십백천만", Hn, n, yt | Xe | We);
    case 33:
      return _e(A, "零一二三四五六七八九", "十百千萬", Hn, n, 0);
    case 32:
      return _e(A, "零壹貳參四五六七八九", "拾百千", Hn, n, yt | Xe | We);
    case 18:
      return QA(A, 2406, 2415, !0, r);
    case 20:
      return Ft(A, 1, 19999, xF, 3, r);
    case 21:
      return QA(A, 2790, 2799, !0, r);
    case 22:
      return QA(A, 2662, 2671, !0, r);
    case 22:
      return Ft(A, 1, 10999, IF, 3, r);
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
}, _c = "data-html2canvas-ignore", Ua = (
  /** @class */
  function() {
    function A(e, t, r) {
      if (this.context = e, this.options = r, this.scrolledElements = [], this.referenceElement = t, this.counters = new HF(), this.quoteDepth = 0, !t.ownerDocument)
        throw new Error("Cloned element does not have an owner document");
      this.documentElement = this.cloneNode(t.ownerDocument.documentElement, !1);
    }
    return A.prototype.toIFrame = function(e, t) {
      var r = this, s = LF(e, t);
      if (!s.contentWindow)
        return Promise.reject("Unable to find iframe window");
      var n = e.defaultView.pageXOffset, i = e.defaultView.pageYOffset, o = s.contentWindow, a = o.document, c = SF(s).then(function() {
        return kA(r, void 0, void 0, function() {
          var l, B;
          return TA(this, function(f) {
            switch (f.label) {
              case 0:
                return this.scrolledElements.forEach(RF), o && (o.scrollTo(t.left, t.top), /(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (o.scrollY !== t.top || o.scrollX !== t.left) && (this.context.logger.warn("Unable to restore scroll position for cloned document"), this.context.windowBounds = this.context.windowBounds.add(o.scrollX - t.left, o.scrollY - t.top, 0, 0))), l = this.options.onclone, B = this.clonedReferenceElement, typeof B > "u" ? [2, Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")] : a.fonts && a.fonts.ready ? [4, a.fonts.ready] : [3, 2];
              case 1:
                f.sent(), f.label = 2;
              case 2:
                return /(AppleWebKit)/g.test(navigator.userAgent) ? [4, KF(a)] : [3, 4];
              case 3:
                f.sent(), f.label = 4;
              case 4:
                return typeof l == "function" ? [2, Promise.resolve().then(function() {
                  return l(a, B);
                }).then(function() {
                  return s;
                })] : [2, s];
            }
          });
        });
      });
      return a.open(), a.write(DF(document.doctype) + "<html></html>"), OF(this.referenceElement.ownerDocument, n, i), a.replaceChild(a.adoptNode(this.documentElement), a.documentElement), a.close(), c;
    }, A.prototype.createElementClone = function(e) {
      if (si(
        e,
        2
        /* CLONE */
      ))
        debugger;
      if (Hc(e))
        return this.createCanvasClone(e);
      if (fa(e))
        return this.createVideoClone(e);
      if (ga(e))
        return this.createStyleClone(e);
      var t = e.cloneNode(!1);
      return ai(t) && (ai(e) && e.currentSrc && e.currentSrc !== e.src && (t.src = e.currentSrc, t.srcset = ""), t.loading === "lazy" && (t.loading = "eager")), da(t) ? this.createCustomElementClone(t) : t;
    }, A.prototype.createCustomElementClone = function(e) {
      var t = document.createElement("html2canvascustomelement");
      return In(e.style, t), t;
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
      (!It(t) || !yF(t) && !t.hasAttribute(_c) && (typeof this.options.ignoreElements != "function" || !this.options.ignoreElements(t))) && (!this.options.copyStyles || !It(t) || !ga(t)) && e.appendChild(this.cloneNode(t, r));
    }, A.prototype.cloneChildNodes = function(e, t, r) {
      for (var s = this, n = e.shadowRoot ? e.shadowRoot.firstChild : e.firstChild; n; n = n.nextSibling)
        if (It(n) && xc(n) && typeof n.assignedNodes == "function") {
          var i = n.assignedNodes();
          i.length && i.forEach(function(o) {
            return s.appendChildNode(t, o, r);
          });
        } else
          this.appendChildNode(t, n, r);
    }, A.prototype.cloneNode = function(e, t) {
      if (mc(e))
        return document.createTextNode(e.data);
      if (!e.ownerDocument)
        return e.cloneNode(!1);
      var r = e.ownerDocument.defaultView;
      if (r && It(e) && (oi(e) || cs(e))) {
        var s = this.createElementClone(e);
        s.style.transitionProperty = "none";
        var n = r.getComputedStyle(e), i = r.getComputedStyle(e, ":before"), o = r.getComputedStyle(e, ":after");
        this.referenceElement === e && oi(s) && (this.clonedReferenceElement = s), Oi(s) && NF(s);
        var a = this.counters.parse(new qo(this.context, n)), c = this.resolvePseudoContent(e, s, i, fr.BEFORE);
        da(e) && (t = !0), fa(e) || this.cloneChildNodes(e, s, t), c && s.insertBefore(c, s.firstChild);
        var l = this.resolvePseudoContent(e, s, o, fr.AFTER);
        return l && s.appendChild(l), this.counters.pop(a), (n && (this.options.copyStyles || cs(e)) && !Ic(e) || t) && In(n, s), (e.scrollTop !== 0 || e.scrollLeft !== 0) && this.scrolledElements.push([s, e.scrollLeft, e.scrollTop]), (bs(e) || Es(e)) && (bs(s) || Es(s)) && (s.value = e.value), s;
      }
      return e.cloneNode(!1);
    }, A.prototype.resolvePseudoContent = function(e, t, r, s) {
      var n = this;
      if (r) {
        var i = r.content, o = t.ownerDocument;
        if (!(!o || !i || i === "none" || i === "-moz-alt-content" || r.display === "none")) {
          this.counters.parse(new qo(this.context, r));
          var a = new vU(this.context, r), c = o.createElement("html2canvaspseudoelement");
          In(r, c), a.content.forEach(function(B) {
            if (B.type === 0)
              c.appendChild(o.createTextNode(B.value));
            else if (B.type === 22) {
              var f = o.createElement("img");
              f.src = B.value, f.style.opacity = "1", c.appendChild(f);
            } else if (B.type === 18) {
              if (B.name === "attr") {
                var w = B.values.filter(lA);
                w.length && c.appendChild(o.createTextNode(e.getAttribute(w[0].value) || ""));
              } else if (B.name === "counter") {
                var U = B.values.filter(Tt), F = U[0], h = U[1];
                if (F && lA(F)) {
                  var b = n.counters.getCounterValue(F.value), m = h && lA(h) ? ri.parse(n.context, h.value) : 3;
                  c.appendChild(o.createTextNode(Fr(b, m, !1)));
                }
              } else if (B.name === "counters") {
                var k = B.values.filter(Tt), F = k[0], x = k[1], h = k[2];
                if (F && lA(F)) {
                  var O = n.counters.getCounterValues(F.value), L = h && lA(h) ? ri.parse(n.context, h.value) : 3, X = x && x.type === 0 ? x.value : "", W = O.map(function(FA) {
                    return Fr(FA, L, !1);
                  }).join(X);
                  c.appendChild(o.createTextNode(W));
                }
              }
            } else if (B.type === 20)
              switch (B.value) {
                case "open-quote":
                  c.appendChild(o.createTextNode(zo(a.quotes, n.quoteDepth++, !0)));
                  break;
                case "close-quote":
                  c.appendChild(o.createTextNode(zo(a.quotes, --n.quoteDepth, !1)));
                  break;
                default:
                  c.appendChild(o.createTextNode(B.value));
              }
          }), c.className = li + " " + ci;
          var l = s === fr.BEFORE ? " " + li : " " + ci;
          return cs(t) ? t.className.baseValue += l : t.className += l, c;
        }
      }
    }, A.destroy = function(e) {
      return e.parentNode ? (e.parentNode.removeChild(e), !0) : !1;
    }, A;
  }()
), fr;
(function(A) {
  A[A.BEFORE = 0] = "BEFORE", A[A.AFTER = 1] = "AFTER";
})(fr || (fr = {}));
var LF = function(A, e) {
  var t = A.createElement("iframe");
  return t.className = "html2canvas-container", t.style.visibility = "hidden", t.style.position = "fixed", t.style.left = "-10000px", t.style.top = "0px", t.style.border = "0", t.width = e.width.toString(), t.height = e.height.toString(), t.scrolling = "no", t.setAttribute(_c, "true"), A.body.appendChild(t), t;
}, _F = function(A) {
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
}, KF = function(A) {
  return Promise.all([].slice.call(A.images, 0).map(_F));
}, SF = function(A) {
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
}, TF = [
  "all",
  "d",
  "content"
  // Safari shows pseudoelements if content is set
], In = function(A, e) {
  for (var t = A.length - 1; t >= 0; t--) {
    var r = A.item(t);
    TF.indexOf(r) === -1 && e.style.setProperty(r, A.getPropertyValue(r));
  }
  return e;
}, DF = function(A) {
  var e = "";
  return A && (e += "<!DOCTYPE ", A.name && (e += A.name), A.internalSubset && (e += A.internalSubset), A.publicId && (e += '"' + A.publicId + '"'), A.systemId && (e += '"' + A.systemId + '"'), e += ">"), e;
}, OF = function(A, e, t) {
  A && A.defaultView && (e !== A.defaultView.pageXOffset || t !== A.defaultView.pageYOffset) && A.defaultView.scrollTo(e, t);
}, RF = function(A) {
  var e = A[0], t = A[1], r = A[2];
  e.scrollLeft = t, e.scrollTop = r;
}, MF = ":before", kF = ":after", li = "___html2canvas___pseudoelement_before", ci = "___html2canvas___pseudoelement_after", Fa = `{
    content: "" !important;
    display: none !important;
}`, NF = function(A) {
  VF(A, "." + li + MF + Fa + `
         .` + ci + kF + Fa);
}, VF = function(A, e) {
  var t = A.ownerDocument;
  if (t) {
    var r = t.createElement("style");
    r.textContent = e, A.appendChild(r);
  }
}, Kc = (
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
), GF = (
  /** @class */
  function() {
    function A(e, t) {
      this.context = e, this._options = t, this._cache = {};
    }
    return A.prototype.addImage = function(e) {
      var t = Promise.resolve();
      return this.has(e) || (Ln(e) || WF(e)) && (this._cache[e] = this.loadImage(e)).catch(function() {
      }), t;
    }, A.prototype.match = function(e) {
      return this._cache[e];
    }, A.prototype.loadImage = function(e) {
      return kA(this, void 0, void 0, function() {
        var t, r, s, n, i = this;
        return TA(this, function(o) {
          switch (o.label) {
            case 0:
              return t = Kc.isSameOrigin(e), r = !xn(e) && this._options.useCORS === !0 && KA.SUPPORT_CORS_IMAGES && !t, s = !xn(e) && !t && !Ln(e) && typeof this._options.proxy == "string" && KA.SUPPORT_CORS_XHR && !r, !t && this._options.allowTaint === !1 && !xn(e) && !Ln(e) && !s && !r ? [
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
                }, l.onerror = c, (YF(n) || r) && (l.crossOrigin = "anonymous"), l.src = n, l.complete === !0 && setTimeout(function() {
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
              var B = new FileReader();
              B.addEventListener("load", function() {
                return n(B.result);
              }, !1), B.addEventListener("error", function(f) {
                return i(f);
              }, !1), B.readAsDataURL(a.response);
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
), PF = /^data:image\/svg\+xml/i, JF = /^data:image\/.*;base64,/i, XF = /^data:image\/.*/i, WF = function(A) {
  return KA.SUPPORT_SVG_DRAWING || !ZF(A);
}, xn = function(A) {
  return XF.test(A);
}, YF = function(A) {
  return JF.test(A);
}, Ln = function(A) {
  return A.substr(0, 4) === "blob";
}, ZF = function(A) {
  return A.substr(-3).toLowerCase() === "svg" || PF.test(A);
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
), vt = function(A, e, t) {
  return new D(A.x + (e.x - A.x) * t, A.y + (e.y - A.y) * t);
}, $r = (
  /** @class */
  function() {
    function A(e, t, r, s) {
      this.type = 1, this.start = e, this.startControl = t, this.endControl = r, this.end = s;
    }
    return A.prototype.subdivide = function(e, t) {
      var r = vt(this.start, this.startControl, e), s = vt(this.startControl, this.endControl, e), n = vt(this.endControl, this.end, e), i = vt(r, s, e), o = vt(s, n, e), a = vt(i, o, e);
      return t ? new A(this.start, r, i, a) : new A(a, o, n, this.end);
    }, A.prototype.add = function(e, t) {
      return new A(this.start.add(e, t), this.startControl.add(e, t), this.endControl.add(e, t), this.end.add(e, t));
    }, A.prototype.reverse = function() {
      return new A(this.end, this.endControl, this.startControl, this.start);
    }, A;
  }()
), te = function(A) {
  return A.type === 1;
}, jF = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e) {
      var t = e.styles, r = e.bounds, s = Ar(t.borderTopLeftRadius, r.width, r.height), n = s[0], i = s[1], o = Ar(t.borderTopRightRadius, r.width, r.height), a = o[0], c = o[1], l = Ar(t.borderBottomRightRadius, r.width, r.height), B = l[0], f = l[1], w = Ar(t.borderBottomLeftRadius, r.width, r.height), U = w[0], F = w[1], h = [];
      h.push((n + a) / r.width), h.push((U + B) / r.width), h.push((i + F) / r.height), h.push((c + f) / r.height);
      var b = Math.max.apply(Math, h);
      b > 1 && (n /= b, i /= b, a /= b, c /= b, B /= b, f /= b, U /= b, F /= b);
      var m = r.width - a, k = r.height - f, x = r.width - B, O = r.height - F, L = t.borderTopWidth, X = t.borderRightWidth, W = t.borderBottomWidth, V = t.borderLeftWidth, iA = gA(t.paddingTop, e.bounds.width), FA = gA(t.paddingRight, e.bounds.width), yA = gA(t.paddingBottom, e.bounds.width), AA = gA(t.paddingLeft, e.bounds.width);
      this.topLeftBorderDoubleOuterBox = n > 0 || i > 0 ? dA(r.left + V / 3, r.top + L / 3, n - V / 3, i - L / 3, sA.TOP_LEFT) : new D(r.left + V / 3, r.top + L / 3), this.topRightBorderDoubleOuterBox = n > 0 || i > 0 ? dA(r.left + m, r.top + L / 3, a - X / 3, c - L / 3, sA.TOP_RIGHT) : new D(r.left + r.width - X / 3, r.top + L / 3), this.bottomRightBorderDoubleOuterBox = B > 0 || f > 0 ? dA(r.left + x, r.top + k, B - X / 3, f - W / 3, sA.BOTTOM_RIGHT) : new D(r.left + r.width - X / 3, r.top + r.height - W / 3), this.bottomLeftBorderDoubleOuterBox = U > 0 || F > 0 ? dA(r.left + V / 3, r.top + O, U - V / 3, F - W / 3, sA.BOTTOM_LEFT) : new D(r.left + V / 3, r.top + r.height - W / 3), this.topLeftBorderDoubleInnerBox = n > 0 || i > 0 ? dA(r.left + V * 2 / 3, r.top + L * 2 / 3, n - V * 2 / 3, i - L * 2 / 3, sA.TOP_LEFT) : new D(r.left + V * 2 / 3, r.top + L * 2 / 3), this.topRightBorderDoubleInnerBox = n > 0 || i > 0 ? dA(r.left + m, r.top + L * 2 / 3, a - X * 2 / 3, c - L * 2 / 3, sA.TOP_RIGHT) : new D(r.left + r.width - X * 2 / 3, r.top + L * 2 / 3), this.bottomRightBorderDoubleInnerBox = B > 0 || f > 0 ? dA(r.left + x, r.top + k, B - X * 2 / 3, f - W * 2 / 3, sA.BOTTOM_RIGHT) : new D(r.left + r.width - X * 2 / 3, r.top + r.height - W * 2 / 3), this.bottomLeftBorderDoubleInnerBox = U > 0 || F > 0 ? dA(r.left + V * 2 / 3, r.top + O, U - V * 2 / 3, F - W * 2 / 3, sA.BOTTOM_LEFT) : new D(r.left + V * 2 / 3, r.top + r.height - W * 2 / 3), this.topLeftBorderStroke = n > 0 || i > 0 ? dA(r.left + V / 2, r.top + L / 2, n - V / 2, i - L / 2, sA.TOP_LEFT) : new D(r.left + V / 2, r.top + L / 2), this.topRightBorderStroke = n > 0 || i > 0 ? dA(r.left + m, r.top + L / 2, a - X / 2, c - L / 2, sA.TOP_RIGHT) : new D(r.left + r.width - X / 2, r.top + L / 2), this.bottomRightBorderStroke = B > 0 || f > 0 ? dA(r.left + x, r.top + k, B - X / 2, f - W / 2, sA.BOTTOM_RIGHT) : new D(r.left + r.width - X / 2, r.top + r.height - W / 2), this.bottomLeftBorderStroke = U > 0 || F > 0 ? dA(r.left + V / 2, r.top + O, U - V / 2, F - W / 2, sA.BOTTOM_LEFT) : new D(r.left + V / 2, r.top + r.height - W / 2), this.topLeftBorderBox = n > 0 || i > 0 ? dA(r.left, r.top, n, i, sA.TOP_LEFT) : new D(r.left, r.top), this.topRightBorderBox = a > 0 || c > 0 ? dA(r.left + m, r.top, a, c, sA.TOP_RIGHT) : new D(r.left + r.width, r.top), this.bottomRightBorderBox = B > 0 || f > 0 ? dA(r.left + x, r.top + k, B, f, sA.BOTTOM_RIGHT) : new D(r.left + r.width, r.top + r.height), this.bottomLeftBorderBox = U > 0 || F > 0 ? dA(r.left, r.top + O, U, F, sA.BOTTOM_LEFT) : new D(r.left, r.top + r.height), this.topLeftPaddingBox = n > 0 || i > 0 ? dA(r.left + V, r.top + L, Math.max(0, n - V), Math.max(0, i - L), sA.TOP_LEFT) : new D(r.left + V, r.top + L), this.topRightPaddingBox = a > 0 || c > 0 ? dA(r.left + Math.min(m, r.width - X), r.top + L, m > r.width + X ? 0 : Math.max(0, a - X), Math.max(0, c - L), sA.TOP_RIGHT) : new D(r.left + r.width - X, r.top + L), this.bottomRightPaddingBox = B > 0 || f > 0 ? dA(r.left + Math.min(x, r.width - V), r.top + Math.min(k, r.height - W), Math.max(0, B - X), Math.max(0, f - W), sA.BOTTOM_RIGHT) : new D(r.left + r.width - X, r.top + r.height - W), this.bottomLeftPaddingBox = U > 0 || F > 0 ? dA(r.left + V, r.top + Math.min(O, r.height - W), Math.max(0, U - V), Math.max(0, F - W), sA.BOTTOM_LEFT) : new D(r.left + V, r.top + r.height - W), this.topLeftContentBox = n > 0 || i > 0 ? dA(r.left + V + AA, r.top + L + iA, Math.max(0, n - (V + AA)), Math.max(0, i - (L + iA)), sA.TOP_LEFT) : new D(r.left + V + AA, r.top + L + iA), this.topRightContentBox = a > 0 || c > 0 ? dA(r.left + Math.min(m, r.width + V + AA), r.top + L + iA, m > r.width + V + AA ? 0 : a - V + AA, c - (L + iA), sA.TOP_RIGHT) : new D(r.left + r.width - (X + FA), r.top + L + iA), this.bottomRightContentBox = B > 0 || f > 0 ? dA(r.left + Math.min(x, r.width - (V + AA)), r.top + Math.min(k, r.height + L + iA), Math.max(0, B - (X + FA)), f - (W + yA), sA.BOTTOM_RIGHT) : new D(r.left + r.width - (X + FA), r.top + r.height - (W + yA)), this.bottomLeftContentBox = U > 0 || F > 0 ? dA(r.left + V + AA, r.top + O, Math.max(0, U - (V + AA)), F - (W + yA), sA.BOTTOM_LEFT) : new D(r.left + V + AA, r.top + r.height - (W + yA));
    }
    return A;
  }()
), sA;
(function(A) {
  A[A.TOP_LEFT = 0] = "TOP_LEFT", A[A.TOP_RIGHT = 1] = "TOP_RIGHT", A[A.BOTTOM_RIGHT = 2] = "BOTTOM_RIGHT", A[A.BOTTOM_LEFT = 3] = "BOTTOM_LEFT";
})(sA || (sA = {}));
var dA = function(A, e, t, r, s) {
  var n = 4 * ((Math.sqrt(2) - 1) / 3), i = t * n, o = r * n, a = A + t, c = e + r;
  switch (s) {
    case sA.TOP_LEFT:
      return new $r(new D(A, c), new D(A, c - o), new D(a - i, e), new D(a, e));
    case sA.TOP_RIGHT:
      return new $r(new D(A, e), new D(A + i, e), new D(a, c - o), new D(a, c));
    case sA.BOTTOM_RIGHT:
      return new $r(new D(a, e), new D(a, e + o), new D(A + i, c), new D(A, c));
    case sA.BOTTOM_LEFT:
    default:
      return new $r(new D(a, c), new D(a - i, c), new D(A, e + o), new D(A, e));
  }
}, ms = function(A) {
  return [A.topLeftBorderBox, A.topRightBorderBox, A.bottomRightBorderBox, A.bottomLeftBorderBox];
}, zF = function(A) {
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
}, qF = (
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
), $F = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e) {
      this.opacity = e, this.type = 2, this.target = 6;
    }
    return A;
  }()
), A0 = function(A) {
  return A.type === 0;
}, Sc = function(A) {
  return A.type === 1;
}, e0 = function(A) {
  return A.type === 2;
}, va = function(A, e) {
  return A.length === e.length ? A.some(function(t, r) {
    return t === e[r];
  }) : !1;
}, t0 = function(A, e, t, r, s) {
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
}, Tc = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e) {
      this.element = e, this.inlineLevel = [], this.nonInlineLevel = [], this.negativeZIndex = [], this.zeroOrAutoZIndexOrTransformedOrOpacity = [], this.positiveZIndex = [], this.nonPositionedFloats = [], this.nonPositionedInlineLevel = [];
    }
    return A;
  }()
), Dc = (
  /** @class */
  function() {
    function A(e, t) {
      if (this.container = e, this.parent = t, this.effects = [], this.curves = new jF(this.container), this.container.styles.opacity < 1 && this.effects.push(new $F(this.container.styles.opacity)), this.container.styles.transform !== null) {
        var r = this.container.bounds.left + this.container.styles.transformOrigin[0].number, s = this.container.bounds.top + this.container.styles.transformOrigin[1].number, n = this.container.styles.transform;
        this.effects.push(new qF(r, s, n));
      }
      if (this.container.styles.overflowX !== 0) {
        var i = ms(this.curves), o = ys(this.curves);
        va(i, o) ? this.effects.push(new As(
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
          return !Sc(a);
        });
        if (t || r.container.styles.position !== 0 || !r.parent) {
          if (s.unshift.apply(s, n), t = [
            2,
            3
            /* FIXED */
          ].indexOf(r.container.styles.position) === -1, r.container.styles.overflowX !== 0) {
            var i = ms(r.curves), o = ys(r.curves);
            va(i, o) || s.unshift(new As(
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
        return mA(a.target, e);
      });
    }, A;
  }()
), Bi = function(A, e, t, r) {
  A.container.elements.forEach(function(s) {
    var n = mA(
      s.flags,
      4
      /* CREATES_REAL_STACKING_CONTEXT */
    ), i = mA(
      s.flags,
      2
      /* CREATES_STACKING_CONTEXT */
    ), o = new Dc(s, A);
    mA(
      s.styles.display,
      2048
      /* LIST_ITEM */
    ) && r.push(o);
    var a = mA(
      s.flags,
      8
      /* IS_LIST_OWNER */
    ) ? [] : r;
    if (n || i) {
      var c = n || s.styles.isPositioned() ? t : e, l = new Tc(o);
      if (s.styles.isPositioned() || s.styles.opacity < 1 || s.styles.isTransformed()) {
        var B = s.styles.zIndex.order;
        if (B < 0) {
          var f = 0;
          c.negativeZIndex.some(function(U, F) {
            return B > U.element.container.styles.zIndex.order ? (f = F, !1) : f > 0;
          }), c.negativeZIndex.splice(f, 0, l);
        } else if (B > 0) {
          var w = 0;
          c.positiveZIndex.some(function(U, F) {
            return B >= U.element.container.styles.zIndex.order ? (w = F + 1, !1) : w > 0;
          }), c.positiveZIndex.splice(w, 0, l);
        } else
          c.zeroOrAutoZIndexOrTransformedOrOpacity.push(l);
      } else
        s.styles.isFloating() ? c.nonPositionedFloats.push(l) : c.nonPositionedInlineLevel.push(l);
      Bi(o, l, n ? l : t, a);
    } else
      s.styles.isInlineLevel() ? e.inlineLevel.push(o) : e.nonInlineLevel.push(o), Bi(o, e, t, a);
    mA(
      s.flags,
      8
      /* IS_LIST_OWNER */
    ) && Oc(s, a);
  });
}, Oc = function(A, e) {
  for (var t = A instanceof ii ? A.start : 1, r = A instanceof ii ? A.reversed : !1, s = 0; s < e.length; s++) {
    var n = e[s];
    n.container instanceof Cc && typeof n.container.value == "number" && n.container.value !== 0 && (t = n.container.value), n.listValue = Fr(t, n.container.styles.listStyleType, !0), t += r ? -1 : 1;
  }
}, r0 = function(A) {
  var e = new Dc(A, null), t = new Tc(e), r = [];
  return Bi(e, t, t, r), Oc(e.container, r), t;
}, ba = function(A, e) {
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
}, s0 = function(A, e) {
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
}, n0 = function(A, e) {
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
}, i0 = function(A, e) {
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
  return te(A) ? t.push(A.subdivide(0.5, !1)) : t.push(A), te(e) ? t.push(e.subdivide(0.5, !0)) : t.push(e), t;
}, ne = function(A, e, t, r) {
  var s = [];
  return te(A) ? s.push(A.subdivide(0.5, !1)) : s.push(A), te(t) ? s.push(t.subdivide(0.5, !0)) : s.push(t), te(r) ? s.push(r.subdivide(0.5, !0).reverse()) : s.push(r), te(e) ? s.push(e.subdivide(0.5, !1).reverse()) : s.push(e), s;
}, Rc = function(A) {
  var e = A.bounds, t = A.styles;
  return e.add(t.borderLeftWidth, t.borderTopWidth, -(t.borderRightWidth + t.borderLeftWidth), -(t.borderTopWidth + t.borderBottomWidth));
}, Hs = function(A) {
  var e = A.styles, t = A.bounds, r = gA(e.paddingLeft, t.width), s = gA(e.paddingRight, t.width), n = gA(e.paddingTop, t.width), i = gA(e.paddingBottom, t.width);
  return t.add(r + e.borderLeftWidth, n + e.borderTopWidth, -(e.borderRightWidth + e.borderLeftWidth + r + s), -(e.borderTopWidth + e.borderBottomWidth + n + i));
}, o0 = function(A, e) {
  return A === 0 ? e.bounds : A === 2 ? Hs(e) : Rc(e);
}, a0 = function(A, e) {
  return A === 0 ? e.bounds : A === 2 ? Hs(e) : Rc(e);
}, _n = function(A, e, t) {
  var r = o0(Ht(A.styles.backgroundOrigin, e), A), s = a0(Ht(A.styles.backgroundClip, e), A), n = l0(Ht(A.styles.backgroundSize, e), t, r), i = n[0], o = n[1], a = Ar(Ht(A.styles.backgroundPosition, e), r.width - i, r.height - o), c = c0(Ht(A.styles.backgroundRepeat, e), a, n, r, s), l = Math.round(r.left + a[0]), B = Math.round(r.top + a[1]);
  return [c, l, B, i, o];
}, bt = function(A) {
  return lA(A) && A.value === _t.AUTO;
}, ts = function(A) {
  return typeof A == "number";
}, l0 = function(A, e, t) {
  var r = e[0], s = e[1], n = e[2], i = A[0], o = A[1];
  if (!i)
    return [0, 0];
  if (bA(i) && o && bA(o))
    return [gA(i, t.width), gA(o, t.height)];
  var a = ts(n);
  if (lA(i) && (i.value === _t.CONTAIN || i.value === _t.COVER)) {
    if (ts(n)) {
      var c = t.width / t.height;
      return c < n != (i.value === _t.COVER) ? [t.width, t.width / n] : [t.height * n, t.height];
    }
    return [t.width, t.height];
  }
  var l = ts(r), B = ts(s), f = l || B;
  if (bt(i) && (!o || bt(o))) {
    if (l && B)
      return [r, s];
    if (!a && !f)
      return [t.width, t.height];
    if (f && a) {
      var w = l ? r : s * n, U = B ? s : r / n;
      return [w, U];
    }
    var F = l ? r : t.width, h = B ? s : t.height;
    return [F, h];
  }
  if (a) {
    var b = 0, m = 0;
    return bA(i) ? b = gA(i, t.width) : bA(o) && (m = gA(o, t.height)), bt(i) ? b = m * n : (!o || bt(o)) && (m = b / n), [b, m];
  }
  var k = null, x = null;
  if (bA(i) ? k = gA(i, t.width) : o && bA(o) && (x = gA(o, t.height)), k !== null && (!o || bt(o)) && (x = l && B ? k / r * s : t.height), x !== null && bt(i) && (k = l && B ? x / s * r : t.width), k !== null && x !== null)
    return [k, x];
  throw new Error("Unable to calculate background-size for element");
}, Ht = function(A, e) {
  var t = A[e];
  return typeof t > "u" ? A[0] : t;
}, c0 = function(A, e, t, r, s) {
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
}, B0 = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", Ea = "Hidden Text", u0 = (
  /** @class */
  function() {
    function A(e) {
      this._data = {}, this._document = e;
    }
    return A.prototype.parseMetrics = function(e, t) {
      var r = this._document.createElement("div"), s = this._document.createElement("img"), n = this._document.createElement("span"), i = this._document.body;
      r.style.visibility = "hidden", r.style.fontFamily = e, r.style.fontSize = t, r.style.margin = "0", r.style.padding = "0", r.style.whiteSpace = "nowrap", i.appendChild(r), s.src = B0, s.width = 1, s.height = 1, s.style.margin = "0", s.style.padding = "0", s.style.verticalAlign = "baseline", n.style.fontFamily = e, n.style.fontSize = t, n.style.margin = "0", n.style.padding = "0", n.appendChild(this._document.createTextNode(Ea)), r.appendChild(n), r.appendChild(s);
      var o = s.offsetTop - n.offsetTop + 2;
      r.removeChild(n), r.appendChild(this._document.createTextNode(Ea)), r.style.lineHeight = "normal", s.style.verticalAlign = "super";
      var a = s.offsetTop - r.offsetTop + 2;
      return i.removeChild(r), { baseline: o, middle: a };
    }, A.prototype.getMetrics = function(e, t) {
      var r = e + " " + t;
      return typeof this._data[r] > "u" && (this._data[r] = this.parseMetrics(e, t)), this._data[r];
    }, A;
  }()
), Mc = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e, t) {
      this.context = e, this.options = t;
    }
    return A;
  }()
), f0 = 1e4, g0 = (
  /** @class */
  function(A) {
    fe(e, A);
    function e(t, r) {
      var s = A.call(this, t, r) || this;
      return s._activeEffects = [], s.canvas = r.canvas ? r.canvas : document.createElement("canvas"), s.ctx = s.canvas.getContext("2d"), r.canvas || (s.canvas.width = Math.floor(r.width * r.scale), s.canvas.height = Math.floor(r.height * r.scale), s.canvas.style.width = r.width + "px", s.canvas.style.height = r.height + "px"), s.fontMetrics = new u0(document), s.ctx.scale(s.options.scale, s.options.scale), s.ctx.translate(-r.x, -r.y), s.ctx.textBaseline = "bottom", s._activeEffects = [], s.context.logger.debug("Canvas renderer initialized (" + r.width + "x" + r.height + ") with scale " + r.scale), s;
    }
    return e.prototype.applyEffects = function(t) {
      for (var r = this; this._activeEffects.length; )
        this.popEffect();
      t.forEach(function(s) {
        return r.applyEffect(s);
      });
    }, e.prototype.applyEffect = function(t) {
      this.ctx.save(), e0(t) && (this.ctx.globalAlpha = t.opacity), A0(t) && (this.ctx.translate(t.offsetX, t.offsetY), this.ctx.transform(t.matrix[0], t.matrix[1], t.matrix[2], t.matrix[3], t.matrix[4], t.matrix[5]), this.ctx.translate(-t.offsetX, -t.offsetY)), Sc(t) && (this.path(t.path), this.ctx.clip()), this._activeEffects.push(t);
    }, e.prototype.popEffect = function() {
      this._activeEffects.pop(), this.ctx.restore();
    }, e.prototype.renderStack = function(t) {
      return kA(this, void 0, void 0, function() {
        var r;
        return TA(this, function(s) {
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
      return kA(this, void 0, void 0, function() {
        return TA(this, function(r) {
          switch (r.label) {
            case 0:
              if (mA(
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
        var i = Ti(t.text);
        i.reduce(function(o, a) {
          return n.ctx.fillText(a, o, t.bounds.top + s), o + n.ctx.measureText(a).width;
        }, t.bounds.left);
      }
    }, e.prototype.createFontStyle = function(t) {
      var r = t.fontVariant.filter(function(i) {
        return i === "normal" || i === "small-caps";
      }).join(""), s = Q0(t.fontFamily).join(", "), n = yr(t.fontSize) ? "" + t.fontSize.number + t.fontSize.unit : t.fontSize.number + "px";
      return [
        [t.fontStyle, r, t.fontWeight, n, s].join(" "),
        s,
        n
      ];
    }, e.prototype.renderTextNode = function(t, r) {
      return kA(this, void 0, void 0, function() {
        var s, n, i, o, a, c, l, B, f = this;
        return TA(this, function(w) {
          return s = this.createFontStyle(r), n = s[0], i = s[1], o = s[2], this.ctx.font = n, this.ctx.direction = r.direction === 1 ? "rtl" : "ltr", this.ctx.textAlign = "left", this.ctx.textBaseline = "alphabetic", a = this.fontMetrics.getMetrics(i, o), c = a.baseline, l = a.middle, B = r.paintOrder, t.textBounds.forEach(function(U) {
            B.forEach(function(F) {
              switch (F) {
                case 0:
                  f.ctx.fillStyle = IA(r.color), f.renderTextWithLetterSpacing(U, r.letterSpacing, c);
                  var h = r.textShadow;
                  h.length && U.text.trim().length && (h.slice(0).reverse().forEach(function(b) {
                    f.ctx.shadowColor = IA(b.color), f.ctx.shadowOffsetX = b.offsetX.number * f.options.scale, f.ctx.shadowOffsetY = b.offsetY.number * f.options.scale, f.ctx.shadowBlur = b.blur.number, f.renderTextWithLetterSpacing(U, r.letterSpacing, c);
                  }), f.ctx.shadowColor = "", f.ctx.shadowOffsetX = 0, f.ctx.shadowOffsetY = 0, f.ctx.shadowBlur = 0), r.textDecorationLine.length && (f.ctx.fillStyle = IA(r.textDecorationColor || r.color), r.textDecorationLine.forEach(function(b) {
                    switch (b) {
                      case 1:
                        f.ctx.fillRect(U.bounds.left, Math.round(U.bounds.top + c), U.bounds.width, 1);
                        break;
                      case 2:
                        f.ctx.fillRect(U.bounds.left, Math.round(U.bounds.top), U.bounds.width, 1);
                        break;
                      case 3:
                        f.ctx.fillRect(U.bounds.left, Math.ceil(U.bounds.top + l), U.bounds.width, 1);
                        break;
                    }
                  }));
                  break;
                case 1:
                  r.webkitTextStrokeWidth && U.text.trim().length && (f.ctx.strokeStyle = IA(r.webkitTextStrokeColor), f.ctx.lineWidth = r.webkitTextStrokeWidth, f.ctx.lineJoin = window.chrome ? "miter" : "round", f.ctx.strokeText(U.text, U.bounds.left, U.bounds.top + c)), f.ctx.strokeStyle = "", f.ctx.lineWidth = 0, f.ctx.lineJoin = "miter";
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
        var n = Hs(t), i = ys(r);
        this.path(i), this.ctx.save(), this.ctx.clip(), this.ctx.drawImage(s, 0, 0, t.intrinsicWidth, t.intrinsicHeight, n.left, n.top, n.width, n.height), this.ctx.restore();
      }
    }, e.prototype.renderNodeContent = function(t) {
      return kA(this, void 0, void 0, function() {
        var r, s, n, i, o, a, m, m, c, l, B, f, x, w, U, O, F, h, b, m, k, x, O;
        return TA(this, function(L) {
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
              if (!(r instanceof wc)) return [3, 8];
              L.label = 5;
            case 5:
              return L.trys.push([5, 7, , 8]), [4, this.context.cache.match(r.src)];
            case 6:
              return m = L.sent(), this.renderReplacedElement(r, s, m), [3, 8];
            case 7:
              return L.sent(), this.context.logger.error("Error loading image " + r.src), [3, 8];
            case 8:
              if (r instanceof pc && this.renderReplacedElement(r, s, r.canvas), !(r instanceof Qc)) return [3, 12];
              L.label = 9;
            case 9:
              return L.trys.push([9, 11, , 12]), [4, this.context.cache.match(r.svg)];
            case 10:
              return m = L.sent(), this.renderReplacedElement(r, s, m), [3, 12];
            case 11:
              return L.sent(), this.context.logger.error("Error loading svg " + r.svg.substring(0, 255)), [3, 12];
            case 12:
              return r instanceof vc && r.tree ? (c = new e(this.context, {
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
              if (r instanceof Di && (B = Math.min(r.bounds.width, r.bounds.height), r.type === Fs ? r.checked && (this.ctx.save(), this.path([
                new D(r.bounds.left + B * 0.39363, r.bounds.top + B * 0.79),
                new D(r.bounds.left + B * 0.16, r.bounds.top + B * 0.5549),
                new D(r.bounds.left + B * 0.27347, r.bounds.top + B * 0.44071),
                new D(r.bounds.left + B * 0.39694, r.bounds.top + B * 0.5649),
                new D(r.bounds.left + B * 0.72983, r.bounds.top + B * 0.23),
                new D(r.bounds.left + B * 0.84, r.bounds.top + B * 0.34085),
                new D(r.bounds.left + B * 0.39363, r.bounds.top + B * 0.79)
              ]), this.ctx.fillStyle = IA(ua), this.ctx.fill(), this.ctx.restore()) : r.type === vs && r.checked && (this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(r.bounds.left + B / 2, r.bounds.top + B / 2, B / 4, 0, Math.PI * 2, !0), this.ctx.fillStyle = IA(ua), this.ctx.fill(), this.ctx.restore())), d0(r) && r.value.length) {
                switch (f = this.createFontStyle(n), x = f[0], w = f[1], U = this.fontMetrics.getMetrics(x, w).baseline, this.ctx.font = x, this.ctx.fillStyle = IA(n.color), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = w0(r.styles.textAlign), O = Hs(r), F = 0, r.styles.textAlign) {
                  case 1:
                    F += O.width / 2;
                    break;
                  case 2:
                    F += O.width;
                    break;
                }
                h = O.add(F, 0, 0, -O.height / 2 + 1), this.ctx.save(), this.path([
                  new D(O.left, O.top),
                  new D(O.left + O.width, O.top),
                  new D(O.left + O.width, O.top + O.height),
                  new D(O.left, O.top + O.height)
                ]), this.ctx.clip(), this.renderTextWithLetterSpacing(new ur(r.value, h), n.letterSpacing, U), this.ctx.restore(), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = "left";
              }
              if (!mA(
                r.styles.display,
                2048
                /* LIST_ITEM */
              )) return [3, 20];
              if (r.styles.listStyleImage === null) return [3, 19];
              if (b = r.styles.listStyleImage, b.type !== 0) return [3, 18];
              m = void 0, k = b.url, L.label = 15;
            case 15:
              return L.trys.push([15, 17, , 18]), [4, this.context.cache.match(k)];
            case 16:
              return m = L.sent(), this.ctx.drawImage(m, r.bounds.left - (m.width + 10), r.bounds.top), [3, 18];
            case 17:
              return L.sent(), this.context.logger.error("Error loading list-style-image " + k), [3, 18];
            case 18:
              return [3, 20];
            case 19:
              t.listValue && r.styles.listStyleType !== -1 && (x = this.createFontStyle(n)[0], this.ctx.font = x, this.ctx.fillStyle = IA(n.color), this.ctx.textBaseline = "middle", this.ctx.textAlign = "right", O = new Ge(r.bounds.left, r.bounds.top + gA(r.styles.paddingTop, r.bounds.width), r.bounds.width, Zo(n.lineHeight, n.fontSize.number) / 2 + 1), this.renderTextWithLetterSpacing(new ur(t.listValue, O), n.letterSpacing, Zo(n.lineHeight, n.fontSize.number) / 2 + 2), this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left"), L.label = 20;
            case 20:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.renderStackContent = function(t) {
      return kA(this, void 0, void 0, function() {
        var r, s, b, n, i, b, o, a, b, c, l, b, B, f, b, w, U, b, F, h, b;
        return TA(this, function(m) {
          switch (m.label) {
            case 0:
              if (mA(
                t.element.container.flags,
                16
                /* DEBUG_RENDER */
              ))
                debugger;
              return [4, this.renderNodeBackgroundAndBorders(t.element)];
            case 1:
              m.sent(), r = 0, s = t.negativeZIndex, m.label = 2;
            case 2:
              return r < s.length ? (b = s[r], [4, this.renderStack(b)]) : [3, 5];
            case 3:
              m.sent(), m.label = 4;
            case 4:
              return r++, [3, 2];
            case 5:
              return [4, this.renderNodeContent(t.element)];
            case 6:
              m.sent(), n = 0, i = t.nonInlineLevel, m.label = 7;
            case 7:
              return n < i.length ? (b = i[n], [4, this.renderNode(b)]) : [3, 10];
            case 8:
              m.sent(), m.label = 9;
            case 9:
              return n++, [3, 7];
            case 10:
              o = 0, a = t.nonPositionedFloats, m.label = 11;
            case 11:
              return o < a.length ? (b = a[o], [4, this.renderStack(b)]) : [3, 14];
            case 12:
              m.sent(), m.label = 13;
            case 13:
              return o++, [3, 11];
            case 14:
              c = 0, l = t.nonPositionedInlineLevel, m.label = 15;
            case 15:
              return c < l.length ? (b = l[c], [4, this.renderStack(b)]) : [3, 18];
            case 16:
              m.sent(), m.label = 17;
            case 17:
              return c++, [3, 15];
            case 18:
              B = 0, f = t.inlineLevel, m.label = 19;
            case 19:
              return B < f.length ? (b = f[B], [4, this.renderNode(b)]) : [3, 22];
            case 20:
              m.sent(), m.label = 21;
            case 21:
              return B++, [3, 19];
            case 22:
              w = 0, U = t.zeroOrAutoZIndexOrTransformedOrOpacity, m.label = 23;
            case 23:
              return w < U.length ? (b = U[w], [4, this.renderStack(b)]) : [3, 26];
            case 24:
              m.sent(), m.label = 25;
            case 25:
              return w++, [3, 23];
            case 26:
              F = 0, h = t.positiveZIndex, m.label = 27;
            case 27:
              return F < h.length ? (b = h[F], [4, this.renderStack(b)]) : [3, 30];
            case 28:
              m.sent(), m.label = 29;
            case 29:
              return F++, [3, 27];
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
        var i = te(s) ? s.start : s;
        n === 0 ? r.ctx.moveTo(i.x, i.y) : r.ctx.lineTo(i.x, i.y), te(s) && r.ctx.bezierCurveTo(s.startControl.x, s.startControl.y, s.endControl.x, s.endControl.y, s.end.x, s.end.y);
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
      return kA(this, void 0, void 0, function() {
        var r, s, n, i, o, a;
        return TA(this, function(c) {
          switch (c.label) {
            case 0:
              r = t.styles.backgroundImage.length - 1, s = function(l) {
                var B, f, w, iA, rA, z, AA, pA, W, U, iA, rA, z, AA, pA, F, h, b, m, k, x, O, L, X, W, V, iA, FA, yA, AA, pA, ie, rA, z, $, HA, YA, RA, EA, $A, Ie, oe;
                return TA(this, function(Ae) {
                  switch (Ae.label) {
                    case 0:
                      if (l.type !== 0) return [3, 5];
                      B = void 0, f = l.url, Ae.label = 1;
                    case 1:
                      return Ae.trys.push([1, 3, , 4]), [4, n.context.cache.match(f)];
                    case 2:
                      return B = Ae.sent(), [3, 4];
                    case 3:
                      return Ae.sent(), n.context.logger.error("Error loading background-image " + f), [3, 4];
                    case 4:
                      return B && (w = _n(t, r, [
                        B.width,
                        B.height,
                        B.width / B.height
                      ]), iA = w[0], rA = w[1], z = w[2], AA = w[3], pA = w[4], W = n.ctx.createPattern(n.resizeImage(B, AA, pA), "repeat"), n.renderRepeat(iA, W, rA, z)), [3, 6];
                    case 5:
                      AC(l) ? (U = _n(t, r, [null, null, null]), iA = U[0], rA = U[1], z = U[2], AA = U[3], pA = U[4], F = ZQ(l.angle, AA, pA), h = F[0], b = F[1], m = F[2], k = F[3], x = F[4], O = document.createElement("canvas"), O.width = AA, O.height = pA, L = O.getContext("2d"), X = L.createLinearGradient(b, k, m, x), Wo(l.stops, h).forEach(function(ge) {
                        return X.addColorStop(ge.stop, IA(ge.color));
                      }), L.fillStyle = X, L.fillRect(0, 0, AA, pA), AA > 0 && pA > 0 && (W = n.ctx.createPattern(O, "repeat"), n.renderRepeat(iA, W, rA, z))) : eC(l) && (V = _n(t, r, [
                        null,
                        null,
                        null
                      ]), iA = V[0], FA = V[1], yA = V[2], AA = V[3], pA = V[4], ie = l.position.length === 0 ? [_i] : l.position, rA = gA(ie[0], AA), z = gA(ie[ie.length - 1], pA), $ = jQ(l, rA, z, AA, pA), HA = $[0], YA = $[1], HA > 0 && YA > 0 && (RA = n.ctx.createRadialGradient(FA + rA, yA + z, 0, FA + rA, yA + z, HA), Wo(l.stops, HA * 2).forEach(function(ge) {
                        return RA.addColorStop(ge.stop, IA(ge.color));
                      }), n.path(iA), n.ctx.fillStyle = RA, HA !== YA ? (EA = t.bounds.left + 0.5 * t.bounds.width, $A = t.bounds.top + 0.5 * t.bounds.height, Ie = YA / HA, oe = 1 / Ie, n.ctx.save(), n.ctx.translate(EA, $A), n.ctx.transform(1, 0, 0, Ie, 0, 0), n.ctx.translate(-EA, -$A), n.ctx.fillRect(FA, oe * (yA - $A) + $A, AA, pA * oe), n.ctx.restore()) : n.ctx.fill())), Ae.label = 6;
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
      return kA(this, void 0, void 0, function() {
        return TA(this, function(n) {
          return this.path(ba(s, r)), this.ctx.fillStyle = IA(t), this.ctx.fill(), [
            2
            /*return*/
          ];
        });
      });
    }, e.prototype.renderDoubleBorder = function(t, r, s, n) {
      return kA(this, void 0, void 0, function() {
        var i, o;
        return TA(this, function(a) {
          switch (a.label) {
            case 0:
              return r < 3 ? [4, this.renderSolidBorder(t, s, n)] : [3, 2];
            case 1:
              return a.sent(), [
                2
                /*return*/
              ];
            case 2:
              return i = s0(n, s), this.path(i), this.ctx.fillStyle = IA(t), this.ctx.fill(), o = n0(n, s), this.path(o), this.ctx.fill(), [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.renderNodeBackgroundAndBorders = function(t) {
      return kA(this, void 0, void 0, function() {
        var r, s, n, i, o, a, c, l, B = this;
        return TA(this, function(f) {
          switch (f.label) {
            case 0:
              return this.applyEffects(t.getEffects(
                2
                /* BACKGROUND_BORDERS */
              )), r = t.container.styles, s = !tt(r.backgroundColor) || r.backgroundImage.length, n = [
                { style: r.borderTopStyle, color: r.borderTopColor, width: r.borderTopWidth },
                { style: r.borderRightStyle, color: r.borderRightColor, width: r.borderRightWidth },
                { style: r.borderBottomStyle, color: r.borderBottomColor, width: r.borderBottomWidth },
                { style: r.borderLeftStyle, color: r.borderLeftColor, width: r.borderLeftWidth }
              ], i = h0(Ht(r.backgroundClip, 0), t.curves), s || r.boxShadow.length ? (this.ctx.save(), this.path(i), this.ctx.clip(), tt(r.backgroundColor) || (this.ctx.fillStyle = IA(r.backgroundColor), this.ctx.fill()), [4, this.renderBackgroundImage(t.container)]) : [3, 2];
            case 1:
              f.sent(), this.ctx.restore(), r.boxShadow.slice(0).reverse().forEach(function(w) {
                B.ctx.save();
                var U = ms(t.curves), F = w.inset ? 0 : f0, h = t0(U, -F + (w.inset ? 1 : -1) * w.spread.number, (w.inset ? 1 : -1) * w.spread.number, w.spread.number * (w.inset ? -2 : 2), w.spread.number * (w.inset ? -2 : 2));
                w.inset ? (B.path(U), B.ctx.clip(), B.mask(h)) : (B.mask(U), B.ctx.clip(), B.path(h)), B.ctx.shadowOffsetX = w.offsetX.number + F, B.ctx.shadowOffsetY = w.offsetY.number, B.ctx.shadowColor = IA(w.color), B.ctx.shadowBlur = w.blur.number, B.ctx.fillStyle = w.inset ? IA(w.color) : "rgba(0,0,0,1)", B.ctx.fill(), B.ctx.restore();
              }), f.label = 2;
            case 2:
              o = 0, a = 0, c = n, f.label = 3;
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
              return f.sent(), [3, 11];
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
              return f.sent(), [3, 11];
            case 7:
              return l.style !== 4 ? [3, 9] : [4, this.renderDoubleBorder(l.color, l.width, o, t.curves)];
            case 8:
              return f.sent(), [3, 11];
            case 9:
              return [4, this.renderSolidBorder(l.color, o, t.curves)];
            case 10:
              f.sent(), f.label = 11;
            case 11:
              o++, f.label = 12;
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
      return kA(this, void 0, void 0, function() {
        var o, a, c, l, B, f, w, U, F, h, b, m, k, x, O, L, O, L;
        return TA(this, function(X) {
          return this.ctx.save(), o = i0(n, s), a = ba(n, s), i === 2 && (this.path(a), this.ctx.clip()), te(a[0]) ? (c = a[0].start.x, l = a[0].start.y) : (c = a[0].x, l = a[0].y), te(a[1]) ? (B = a[1].end.x, f = a[1].end.y) : (B = a[1].x, f = a[1].y), s === 0 || s === 2 ? w = Math.abs(c - B) : w = Math.abs(l - f), this.ctx.beginPath(), i === 3 ? this.formatPath(o) : this.formatPath(a.slice(0, 2)), U = r < 3 ? r * 3 : r * 2, F = r < 3 ? r * 2 : r, i === 3 && (U = r, F = r), h = !0, w <= U * 2 ? h = !1 : w <= U * 2 + F ? (b = w / (2 * U + F), U *= b, F *= b) : (m = Math.floor((w + F) / (U + F)), k = (w - m * U) / (m - 1), x = (w - (m + 1) * U) / m, F = x <= 0 || Math.abs(F - k) < Math.abs(F - x) ? k : x), h && (i === 3 ? this.ctx.setLineDash([0, U + F]) : this.ctx.setLineDash([U, F])), i === 3 ? (this.ctx.lineCap = "round", this.ctx.lineWidth = r) : this.ctx.lineWidth = r * 2 + 1.1, this.ctx.strokeStyle = IA(t), this.ctx.stroke(), this.ctx.setLineDash([]), i === 2 && (te(a[0]) && (O = a[3], L = a[0], this.ctx.beginPath(), this.formatPath([new D(O.end.x, O.end.y), new D(L.start.x, L.start.y)]), this.ctx.stroke()), te(a[1]) && (O = a[1], L = a[2], this.ctx.beginPath(), this.formatPath([new D(O.end.x, O.end.y), new D(L.start.x, L.start.y)]), this.ctx.stroke())), this.ctx.restore(), [
            2
            /*return*/
          ];
        });
      });
    }, e.prototype.render = function(t) {
      return kA(this, void 0, void 0, function() {
        var r;
        return TA(this, function(s) {
          switch (s.label) {
            case 0:
              return this.options.backgroundColor && (this.ctx.fillStyle = IA(this.options.backgroundColor), this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height)), r = r0(t), [4, this.renderStack(r)];
            case 1:
              return s.sent(), this.applyEffects([]), [2, this.canvas];
          }
        });
      });
    }, e;
  }(Mc)
), d0 = function(A) {
  return A instanceof Fc || A instanceof Uc ? !0 : A instanceof Di && A.type !== vs && A.type !== Fs;
}, h0 = function(A, e) {
  switch (A) {
    case 0:
      return ms(e);
    case 2:
      return zF(e);
    case 1:
    default:
      return ys(e);
  }
}, w0 = function(A) {
  switch (A) {
    case 1:
      return "center";
    case 2:
      return "right";
    case 0:
    default:
      return "left";
  }
}, p0 = ["-apple-system", "system-ui"], Q0 = function(A) {
  return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? A.filter(function(e) {
    return p0.indexOf(e) === -1;
  }) : A;
}, C0 = (
  /** @class */
  function(A) {
    fe(e, A);
    function e(t, r) {
      var s = A.call(this, t, r) || this;
      return s.canvas = r.canvas ? r.canvas : document.createElement("canvas"), s.ctx = s.canvas.getContext("2d"), s.options = r, s.canvas.width = Math.floor(r.width * r.scale), s.canvas.height = Math.floor(r.height * r.scale), s.canvas.style.width = r.width + "px", s.canvas.style.height = r.height + "px", s.ctx.scale(s.options.scale, s.options.scale), s.ctx.translate(-r.x, -r.y), s.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized (" + r.width + "x" + r.height + " at " + r.x + "," + r.y + ") with scale " + r.scale), s;
    }
    return e.prototype.render = function(t) {
      return kA(this, void 0, void 0, function() {
        var r, s;
        return TA(this, function(n) {
          switch (n.label) {
            case 0:
              return r = ni(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, t), [4, U0(r)];
            case 1:
              return s = n.sent(), this.options.backgroundColor && (this.ctx.fillStyle = IA(this.options.backgroundColor), this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)), this.ctx.drawImage(s, -this.options.x * this.options.scale, -this.options.y * this.options.scale), [2, this.canvas];
          }
        });
      });
    }, e;
  }(Mc)
), U0 = function(A) {
  return new Promise(function(e, t) {
    var r = new Image();
    r.onload = function() {
      e(r);
    }, r.onerror = t, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(A));
  });
}, F0 = (
  /** @class */
  function() {
    function A(e) {
      var t = e.id, r = e.enabled;
      this.id = t, this.enabled = r, this.start = Date.now();
    }
    return A.prototype.debug = function() {
      for (var e = [], t = 0; t < arguments.length; t++)
        e[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.debug == "function" ? console.debug.apply(console, Sr([this.id, this.getTime() + "ms"], e)) : this.info.apply(this, e));
    }, A.prototype.getTime = function() {
      return Date.now() - this.start;
    }, A.prototype.info = function() {
      for (var e = [], t = 0; t < arguments.length; t++)
        e[t] = arguments[t];
      this.enabled && typeof window < "u" && window.console && typeof console.info == "function" && console.info.apply(console, Sr([this.id, this.getTime() + "ms"], e));
    }, A.prototype.warn = function() {
      for (var e = [], t = 0; t < arguments.length; t++)
        e[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.warn == "function" ? console.warn.apply(console, Sr([this.id, this.getTime() + "ms"], e)) : this.info.apply(this, e));
    }, A.prototype.error = function() {
      for (var e = [], t = 0; t < arguments.length; t++)
        e[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.error == "function" ? console.error.apply(console, Sr([this.id, this.getTime() + "ms"], e)) : this.info.apply(this, e));
    }, A.instances = {}, A;
  }()
), v0 = (
  /** @class */
  function() {
    function A(e, t) {
      var r;
      this.windowBounds = t, this.instanceName = "#" + A.instanceCount++, this.logger = new F0({ id: this.instanceName, enabled: e.logging }), this.cache = (r = e.cache) !== null && r !== void 0 ? r : new GF(this, e);
    }
    return A.instanceCount = 1, A;
  }()
), b0 = function(A, e) {
  return e === void 0 && (e = {}), E0(A, e);
};
typeof window < "u" && Kc.setContext(window);
var E0 = function(A, e) {
  return kA(void 0, void 0, void 0, function() {
    var t, r, s, n, i, o, a, c, l, B, f, w, U, F, h, b, m, k, x, O, X, L, X, W, V, iA, FA, yA, AA, pA, ie, rA, z, $, HA, YA, RA, EA, $A, Ie;
    return TA(this, function(oe) {
      switch (oe.label) {
        case 0:
          if (!A || typeof A != "object")
            return [2, Promise.reject("Invalid element provided as first argument")];
          if (t = A.ownerDocument, !t)
            throw new Error("Element is not attached to a Document");
          if (r = t.defaultView, !r)
            throw new Error("Document is not attached to a Window");
          return s = {
            allowTaint: (W = e.allowTaint) !== null && W !== void 0 ? W : !1,
            imageTimeout: (V = e.imageTimeout) !== null && V !== void 0 ? V : 15e3,
            proxy: e.proxy,
            useCORS: (iA = e.useCORS) !== null && iA !== void 0 ? iA : !1
          }, n = Pn({ logging: (FA = e.logging) !== null && FA !== void 0 ? FA : !0, cache: e.cache }, s), i = {
            windowWidth: (yA = e.windowWidth) !== null && yA !== void 0 ? yA : r.innerWidth,
            windowHeight: (AA = e.windowHeight) !== null && AA !== void 0 ? AA : r.innerHeight,
            scrollX: (pA = e.scrollX) !== null && pA !== void 0 ? pA : r.pageXOffset,
            scrollY: (ie = e.scrollY) !== null && ie !== void 0 ? ie : r.pageYOffset
          }, o = new Ge(i.scrollX, i.scrollY, i.windowWidth, i.windowHeight), a = new v0(n, o), c = (rA = e.foreignObjectRendering) !== null && rA !== void 0 ? rA : !1, l = {
            allowTaint: (z = e.allowTaint) !== null && z !== void 0 ? z : !1,
            onclone: e.onclone,
            ignoreElements: e.ignoreElements,
            inlineImages: c,
            copyStyles: c
          }, a.logger.debug("Starting document clone with size " + o.width + "x" + o.height + " scrolled to " + -o.left + "," + -o.top), B = new Ua(a, A, l), f = B.clonedReferenceElement, f ? [4, B.toIFrame(t, o)] : [2, Promise.reject("Unable to find element in cloned iframe")];
        case 1:
          return w = oe.sent(), U = Oi(f) || mF(f) ? tp(f.ownerDocument) : Ns(a, f), F = U.width, h = U.height, b = U.left, m = U.top, k = m0(a, f, e.backgroundColor), x = {
            canvas: e.canvas,
            backgroundColor: k,
            scale: (HA = ($ = e.scale) !== null && $ !== void 0 ? $ : r.devicePixelRatio) !== null && HA !== void 0 ? HA : 1,
            x: ((YA = e.x) !== null && YA !== void 0 ? YA : 0) + b,
            y: ((RA = e.y) !== null && RA !== void 0 ? RA : 0) + m,
            width: (EA = e.width) !== null && EA !== void 0 ? EA : Math.ceil(F),
            height: ($A = e.height) !== null && $A !== void 0 ? $A : Math.ceil(h)
          }, c ? (a.logger.debug("Document cloned, using foreign object rendering"), X = new C0(a, x), [4, X.render(f)]) : [3, 3];
        case 2:
          return O = oe.sent(), [3, 5];
        case 3:
          return a.logger.debug("Document cloned, element located at " + b + "," + m + " with size " + F + "x" + h + " using computed rendering"), a.logger.debug("Starting DOM parsing"), L = Ec(a, f), k === L.styles.backgroundColor && (L.styles.backgroundColor = Re.TRANSPARENT), a.logger.debug("Starting renderer for element at " + x.x + "," + x.y + " with size " + x.width + "x" + x.height), X = new g0(a, x), [4, X.render(L)];
        case 4:
          O = oe.sent(), oe.label = 5;
        case 5:
          return (!((Ie = e.removeContainer) !== null && Ie !== void 0) || Ie) && (Ua.destroy(w) || a.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")), a.logger.debug("Finished rendering"), [2, O];
      }
    });
  });
}, m0 = function(A, e, t) {
  var r = e.ownerDocument, s = r.documentElement ? cr(A, getComputedStyle(r.documentElement).backgroundColor) : Re.TRANSPARENT, n = r.body ? cr(A, getComputedStyle(r.body).backgroundColor) : Re.TRANSPARENT, i = typeof t == "string" ? cr(A, t) : t === null ? Re.TRANSPARENT : 4294967295;
  return e === r.documentElement ? tt(s) ? tt(n) ? i : n : s : i;
};
async function y0(A = {}) {
  var l;
  const e = window.innerWidth, t = window.innerHeight;
  try {
    (l = A.beforeCapture) == null || l.call(A);
  } catch {
  }
  const r = (() => {
    var B;
    try {
      return (((B = A.canvases) == null ? void 0 : B.call(A)) || []).filter(Boolean);
    } catch {
      return [];
    }
  })(), s = r.map((B) => {
    try {
      return B.toDataURL("image/png");
    } catch {
      return null;
    }
  }).filter(Boolean), n = new Set(r), i = A.ignore || [], o = await b0(document.body, {
    useCORS: !0,
    allowTaint: !0,
    backgroundColor: null,
    scale: 1,
    width: e,
    height: t,
    ignoreElements: (B) => {
      var f;
      return n.has(B) || B.tagName && B.tagName.toLowerCase().startsWith("bugfix-") || (f = A.ignoreElement) != null && f.call(A, B) ? !0 : i.some((w) => {
        var U;
        try {
          return (U = B.matches) == null ? void 0 : U.call(B, w);
        } catch {
          return !1;
        }
      });
    }
  }), a = document.createElement("canvas");
  a.width = e, a.height = t;
  const c = a.getContext("2d");
  for (const B of s)
    await new Promise((f) => {
      const w = new Image();
      w.onload = () => {
        c.drawImage(w, 0, 0, e, t), f();
      }, w.onerror = f, w.src = B;
    });
  return c.drawImage(o, 0, 0), a.toDataURL("image/png");
}
const Et = (A, e = 2) => String(A).padStart(e, "0");
function Be(A = !1) {
  const e = /* @__PURE__ */ new Date(), t = `${Et(e.getHours())}:${Et(e.getMinutes())}:${Et(e.getSeconds())}.${Et(e.getMilliseconds(), 3)}`;
  return A ? `${e.getFullYear()}-${Et(e.getMonth() + 1)}-${Et(e.getDate())} ${t}` : t;
}
function Hr(A) {
  const e = [];
  return { push(t) {
    e.push(t), e.length > A && e.shift();
  }, get: () => [...e] };
}
const H0 = [/Failed to obtain terrain tile/, /Mesh buffer doesn't exist/];
function I0(A) {
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
function x0({ max: A = 200, silent: e = H0 } = {}) {
  const t = Hr(A);
  for (const r of ["log", "warn", "error"]) {
    const s = console[r].bind(console);
    console[r] = (...n) => {
      const i = n.map(I0).join(" ");
      e.some((o) => o.test(i)) || (t.push({ level: r, time: Be(!0), message: i }), s(...n));
    };
  }
  return window.addEventListener("error", (r) => t.push({ level: "error", time: Be(!0), message: `[GlobalError] ${r.message} (${r.filename}:${r.lineno})` })), window.addEventListener("unhandledrejection", (r) => {
    const s = r.reason instanceof Error ? r.reason.message : String(r.reason);
    t.push({ level: "error", time: Be(!0), message: `[UnhandledRejection] ${s}` });
  }), t.get;
}
const L0 = /\/(auth|oauth|token|login|sign|password|temp-password|users\/find-password)/i, _0 = /"?(password|passwd|pwd|secret|token|authorization|refresh_token|access_token)"?\s*[:=]/i;
function ui(A, e = 2e3) {
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
  return L0.test(A || "") || _0.test(t) ? "[masked]" : ui(e);
}
function K0({ max: A = 50, axios: e = [], fetch: t = !1, xhr: r = !1, ignore: s = [] } = {}) {
  const n = Hr(A), i = (o) => s.some((a) => a instanceof RegExp ? a.test(o) : String(o).includes(a));
  for (const o of e) {
    const a = o != null && o.interceptors ? o : o == null ? void 0 : o.instance, c = (o == null ? void 0 : o.label) || "axios";
    a != null && a.interceptors && (a.interceptors.request.use((l) => (l._bk = { t0: Date.now(), time: Be(!0) }, l), (l) => Promise.reject(l)), a.interceptors.response.use((l) => {
      var f;
      const B = l.config._bk || {};
      return i(l.config.url) || n.push({ server: c, time: B.time, duration: B.t0 ? Date.now() - B.t0 : null, method: (f = l.config.method) == null ? void 0 : f.toUpperCase(), url: l.config.url, params: ui(l.config.params), requestBody: Je(l.config.url, l.config.data), status: l.status, responseBody: Je(l.config.url, l.data), error: null }), l;
    }, (l) => {
      var f, w, U, F, h, b, m, k, x, O, L;
      const B = ((f = l.config) == null ? void 0 : f._bk) || {};
      return i((w = l.config) == null ? void 0 : w.url) || n.push({ server: c, time: B.time, duration: B.t0 ? Date.now() - B.t0 : null, method: (F = (U = l.config) == null ? void 0 : U.method) == null ? void 0 : F.toUpperCase(), url: (h = l.config) == null ? void 0 : h.url, params: ui((b = l.config) == null ? void 0 : b.params), requestBody: Je((m = l.config) == null ? void 0 : m.url, (k = l.config) == null ? void 0 : k.data), status: ((x = l.response) == null ? void 0 : x.status) ?? "ERR", responseBody: Je((O = l.config) == null ? void 0 : O.url, (L = l.response) == null ? void 0 : L.data), error: l.message }), Promise.reject(l);
    }));
  }
  if (t && window.fetch) {
    const o = window.fetch.bind(window);
    window.fetch = async (a, c = {}) => {
      const l = typeof a == "string" ? a : a == null ? void 0 : a.url, B = Date.now(), f = Be(!0), w = (c.method || typeof a != "string" && (a == null ? void 0 : a.method) || "GET").toUpperCase();
      try {
        const U = await o(a, c);
        return i(l) || n.push({ server: "fetch", time: f, duration: Date.now() - B, method: w, url: l, params: null, requestBody: Je(l, c.body), status: U.status, responseBody: null, error: null }), U;
      } catch (U) {
        throw i(l) || n.push({ server: "fetch", time: f, duration: Date.now() - B, method: w, url: l, params: null, requestBody: Je(l, c.body), status: "ERR", responseBody: null, error: U.message }), U;
      }
    };
  }
  if (r && window.XMLHttpRequest) {
    const o = XMLHttpRequest.prototype, a = o.open, c = o.send;
    o.open = function(l, B, ...f) {
      return this._bk = { method: String(l).toUpperCase(), url: B }, a.call(this, l, B, ...f);
    }, o.send = function(l) {
      const B = this._bk || {}, f = Date.now(), w = Be(!0);
      return this.addEventListener("loadend", () => {
        i(B.url) || n.push({ server: "xhr", time: w, duration: Date.now() - f, method: B.method, url: B.url, params: null, requestBody: Je(B.url, l), status: this.status || "ERR", responseBody: this.responseType === "" || this.responseType === "text" ? Je(B.url, this.responseText) : null, error: this.status ? null : "network error" });
      }), c.call(this, l);
    };
  }
  return n.get;
}
function S0(A) {
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
function T0(A, { max: e = 100 } = {}) {
  const t = Hr(e);
  return A.subscribe((r) => t.push({ time: Be(), type: r.type, payload: S0(r.payload) })), t.get;
}
function D0(A, { max: e = 20 } = {}) {
  const t = Hr(e);
  if (A && typeof A.afterEach == "function")
    A.afterEach((r, s) => t.push({ time: Be(), from: s.fullPath || "(초기)", to: r.fullPath, name: String(r.name ?? "") }));
  else {
    let r = location.pathname + location.search + location.hash;
    const s = () => {
      const n = location.pathname + location.search + location.hash;
      n !== r && (t.push({ time: Be(), from: r, to: n, name: "" }), r = n);
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
function O0(A, { max: e = 80, skip: t = [] } = {}) {
  const r = Hr(e), s = new Set(t), n = A.emit.bind(A);
  return A.emit = (i, o) => (s.has(i) || r.push({ time: Be(), type: i }), n(i, o)), r.get;
}
function R0(A) {
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
      if (o.some((B) => c.toLowerCase().includes(B))) continue;
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
    datetime: Be(!0),
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
function M0(A = {}) {
  const e = { project: "default", hotkeys: { report: "Shift+F9", viewer: "Shift+F10" }, interceptors: { console: !0 }, ...A }, t = e.interceptors || {}, r = t.console === !1 ? Xt : x0(t.console === !0 ? {} : t.console), s = t.network ? K0(t.network) : Xt, n = t.mutation ? T0(t.mutation) : Xt, i = t.router ? D0(t.router === !0 ? null : t.router) : Xt, o = t.events ? O0(t.events.emitter || t.events, t.events.emitter ? t.events : {}) : Xt, a = {
    options: e,
    api: ep(e),
    getLogs: r,
    getNetwork: s,
    getMutations: n,
    getRoutes: i,
    getEvents: o,
    captureScreen: (c = {}) => {
      var l;
      return y0({ ...e.capture || {}, ...c, ignore: [...((l = e.capture) == null ? void 0 : l.ignore) || [], ...c.ignore || []] });
    },
    captureContext: () => R0(a),
    fetchBackendLogs: async () => e.backendLogs ? await e.backendLogs() : null,
    notify: (c) => {
      e.notify ? e.notify(c) : a._listeners.forEach((l) => l(c));
    },
    _listeners: /* @__PURE__ */ new Set(),
    onNotify(c) {
      return a._listeners.add(c), () => a._listeners.delete(c);
    },
    _els: {},
    /** Web Component 빌드에서: 두 엘리먼트를 body 에 붙이고 kit 을 넘긴다 */
    mount() {
      if (a._els.modal) return a;
      const c = document.createElement("bugfix-report-modal"), l = document.createElement("bugfix-viewer");
      return c.kit = a, l.kit = a, document.body.append(c, l), a._els = { modal: c, viewer: l }, a;
    },
    openReport: () => {
      var c, l, B, f;
      return ((l = (c = a._els.modal) == null ? void 0 : c.open) == null ? void 0 : l.call(c)) ?? ((f = (B = a._open) == null ? void 0 : B.report) == null ? void 0 : f.call(B));
    },
    openViewer: () => {
      var c, l, B, f;
      return ((l = (c = a._els.viewer) == null ? void 0 : c.open) == null ? void 0 : l.call(c)) ?? ((f = (B = a._open) == null ? void 0 : B.viewer) == null ? void 0 : f.call(B));
    },
    /** Vue 컴포넌트를 직접 쓰는 앱이 open 함수를 등록한다 */
    _open: {},
    register(c, l) {
      a._open[c] = l;
    }
  };
  if (e.hotkeys) {
    const c = (l, B) => {
      if (!B) return !1;
      const f = B.split("+").map((U) => U.trim().toLowerCase()), w = f.pop();
      return l.key.toLowerCase() === w && f.includes("shift") === l.shiftKey && f.includes("ctrl") === l.ctrlKey && f.includes("alt") === l.altKey && f.includes("meta") === l.metaKey;
    };
    window.addEventListener("keydown", (l) => {
      c(l, e.hotkeys.report) ? (l.preventDefault(), a.openReport()) : c(l, e.hotkeys.viewer) && (l.preventDefault(), a.openViewer());
    });
  }
  return a;
}
function k0() {
  customElements.get("bugfix-report-modal") || customElements.define("bugfix-report-modal", /* @__PURE__ */ Co(Wd)), customElements.get("bugfix-viewer") || customElements.define("bugfix-viewer", /* @__PURE__ */ Co(Ap));
}
k0();
function V0(A) {
  return M0(A).mount();
}
export {
  y0 as captureScreen,
  M0 as createBugfix,
  V0 as install,
  k0 as register
};
