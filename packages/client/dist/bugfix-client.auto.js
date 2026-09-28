/**
* @vue/shared v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function ko(e) {
  const A = /* @__PURE__ */ Object.create(null);
  for (const t of e.split(",")) A[t] = 1;
  return (t) => t in A;
}
const iA = {}, at = [], ge = () => {
}, ol = () => !1, Rr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Or = (e) => e.startsWith("onUpdate:"), CA = Object.assign, To = (e, A) => {
  const t = e.indexOf(A);
  t > -1 && e.splice(t, 1);
}, Id = Object.prototype.hasOwnProperty, AA = (e, A) => Id.call(e, A), G = Array.isArray, Je = (e) => _s(e) === "[object Map]", Tt = (e) => _s(e) === "[object Set]", Bi = (e) => _s(e) === "[object Date]", W = (e) => typeof e == "function", BA = (e) => typeof e == "string", we = (e) => typeof e == "symbol", nA = (e) => e !== null && typeof e == "object", il = (e) => (nA(e) || W(e)) && W(e.then) && W(e.catch), al = Object.prototype.toString, _s = (e) => al.call(e), _d = (e) => _s(e).slice(8, -1), Mr = (e) => _s(e) === "[object Object]", Ko = (e) => BA(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ls = /* @__PURE__ */ ko(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Nr = (e) => {
  const A = /* @__PURE__ */ Object.create(null);
  return (t) => A[t] || (A[t] = e(t));
}, Ld = /-\w/g, xA = Nr(
  (e) => e.replace(Ld, (A) => A.slice(1).toUpperCase())
), Sd = /\B([A-Z])/g, XA = Nr(
  (e) => e.replace(Sd, "-$1").toLowerCase()
), Pr = Nr((e) => e.charAt(0).toUpperCase() + e.slice(1)), gn = Nr(
  (e) => e ? `on${Pr(e)}` : ""
), He = (e, A) => !Object.is(e, A), ur = (e, ...A) => {
  for (let t = 0; t < e.length; t++)
    e[t](...A);
}, ll = (e, A, t, s = !1) => {
  Object.defineProperty(e, A, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: t
  });
}, Do = (e) => {
  const A = parseFloat(e);
  return isNaN(A) ? e : A;
}, gi = (e) => {
  const A = BA(e) ? Number(e) : NaN;
  return isNaN(A) ? e : A;
};
let hi;
const Vr = () => hi || (hi = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ls(e) {
  if (G(e)) {
    const A = {};
    for (let t = 0; t < e.length; t++) {
      const s = e[t], r = BA(s) ? Dd(s) : Ls(s);
      if (r)
        for (const n in r)
          A[n] = r[n];
    }
    return A;
  } else if (BA(e) || nA(e))
    return e;
}
const kd = /;(?![^(]*\))/g, Td = /:([^]+)/, Kd = /"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;
function Dd(e) {
  const A = {};
  return e.replace(Kd, (t) => t.startsWith("/*") ? "" : t).split(kd).forEach((t) => {
    if (t) {
      const s = t.split(Td);
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
const Rd = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Od = /* @__PURE__ */ ko(Rd);
function cl(e) {
  return !!e || e === "";
}
function Md(e, A, t) {
  if (e.length !== A.length) return !1;
  let s = !0;
  for (let r = 0; s && r < e.length; r++)
    s = Rt(e[r], A[r], t);
  return s;
}
function pi(e, A, t) {
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
function Nd(e, A, t) {
  let s = Je(e), r = Je(A);
  if (s || r || (s = Tt(e), r = Tt(A), s || r))
    return s && r ? pi(e, A, t) : !1;
  const n = Object.keys(e).length, o = Object.keys(A).length;
  if (n !== o)
    return !1;
  for (const i in e) {
    const a = e.hasOwnProperty(i), c = A.hasOwnProperty(i);
    if (a && !c || !a && c || !Rt(e[i], A[i], t))
      return !1;
  }
  return String(e) === String(A);
}
function wi(e, A, t, s) {
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
  let s = Bi(e), r = Bi(A);
  return s || r ? s && r ? e.getTime() === A.getTime() : !1 : (s = we(e), r = we(A), s || r ? e === A : (s = G(e), r = G(A), s || r ? s && r ? wi(e, A, t, Md) : !1 : (s = nA(e), r = nA(A), s || r ? !s || !r ? !1 : wi(e, A, t, Nd) : String(e) === String(A))));
}
function dl(e, A) {
  return e.findIndex((t) => Rt(t, A));
}
const ul = (e) => !!(e && e.__v_isRef === !0), b = (e) => BA(e) ? e : e == null ? "" : G(e) || nA(e) && (e.toString === al || !W(e.toString)) ? ul(e) ? b(e.value) : JSON.stringify(e, fl, 2) : String(e), fl = (e, A) => ul(A) ? fl(e, A.value) : Je(A) ? {
  [`Map(${A.size})`]: [...A.entries()].reduce(
    (t, [s, r], n) => (t[hn(s, n) + " =>"] = r, t),
    {}
  )
} : Tt(A) ? {
  [`Set(${A.size})`]: [...A.values()].map((t) => hn(t))
} : we(A) ? hn(A) : nA(A) && !G(A) && !Mr(A) ? String(A) : A, hn = (e, A = "") => {
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
class Pd {
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
function Vd() {
  return yA;
}
let cA;
const pn = /* @__PURE__ */ new WeakSet();
class Bl {
  constructor(A) {
    this.fn = A, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, yA && (yA.active ? yA.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, pn.has(this) && (pn.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || hl(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Qi(this), pl(this);
    const A = cA, t = ee;
    cA = this, ee = !0;
    try {
      return this.fn();
    } finally {
      wl(this), cA = A, ee = t, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let A = this.deps; A; A = A.nextDep)
        Mo(A);
      this.deps = this.depsTail = void 0, Qi(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? pn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    $n(this) && this.run();
  }
  get dirty() {
    return $n(this);
  }
}
let gl = 0, cs, ds;
function hl(e, A = !1) {
  if (e.flags |= 8, A) {
    e.next = ds, ds = e;
    return;
  }
  e.next = cs, cs = e;
}
function Ro() {
  gl++;
}
function Oo() {
  if (--gl > 0)
    return;
  if (ds) {
    let A = ds;
    for (ds = void 0; A; ) {
      const t = A.next;
      A.next = void 0, A.flags &= -9, A = t;
    }
  }
  let e;
  for (; cs; ) {
    let A = cs;
    for (cs = void 0; A; ) {
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
function pl(e) {
  for (let A = e.deps; A; A = A.nextDep)
    A.version = -1, A.prevActiveLink = A.dep.activeLink, A.dep.activeLink = A;
}
function wl(e) {
  let A, t = e.depsTail, s = t;
  for (; s; ) {
    const r = s.prevDep;
    s.version === -1 ? (s === t && (t = r), Mo(s), Gd(s)) : A = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = r;
  }
  e.deps = A, e.depsTail = t;
}
function $n(e) {
  for (let A = e.deps; A; A = A.nextDep)
    if (A.dep.version !== A.version || A.dep.computed && (Ql(A.dep.computed) || A.dep.version !== A.version))
      return !0;
  return !!e._dirty;
}
function Ql(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Us) || (e.globalVersion = Us, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !$n(e))))
    return;
  e.flags |= 2;
  const A = e.dep, t = cA, s = ee;
  cA = e, ee = !0;
  try {
    pl(e);
    const r = e.fn(e._value);
    (A.version === 0 || He(r, e._value)) && (e.flags |= 128, e._value = r, A.version++);
  } catch (r) {
    throw A.version++, r;
  } finally {
    cA = t, ee = s, wl(e), e.flags &= -3;
  }
}
function Mo(e, A = !1) {
  const { dep: t, prevSub: s, nextSub: r } = e;
  if (s && (s.nextSub = r, e.prevSub = void 0), r && (r.prevSub = s, e.nextSub = void 0), t.subs === e && (t.subs = s, !s && t.computed)) {
    t.computed.flags &= -5;
    for (let n = t.computed.deps; n; n = n.nextDep)
      Mo(n, !0);
  }
  !A && !--t.sc && t.map && t.map.delete(t.key);
}
function Gd(e) {
  const { prevDep: A, nextDep: t } = e;
  A && (A.nextDep = t, e.prevDep = void 0), t && (t.prevDep = A, e.nextDep = void 0);
}
let ee = !0;
const Cl = [];
function Se() {
  Cl.push(ee), ee = !1;
}
function ke() {
  const e = Cl.pop();
  ee = e === void 0 ? !0 : e;
}
function Qi(e) {
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
let Us = 0;
class Xd {
  constructor(A, t) {
    this.sub = A, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class bl {
  // TODO isolatedDeclarations "__v_skip"
  constructor(A) {
    this.computed = A, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(A) {
    if (!cA || !ee || cA === this.computed)
      return;
    let t = this.activeLink;
    if (t === void 0 || t.sub !== cA)
      t = this.activeLink = new Xd(cA, this), cA.deps ? (t.prevDep = cA.depsTail, cA.depsTail.nextDep = t, cA.depsTail = t) : cA.deps = cA.depsTail = t, Ul(t);
    else if (t.version === -1 && (t.version = this.version, t.nextDep)) {
      const s = t.nextDep;
      s.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = s), t.prevDep = cA.depsTail, t.nextDep = void 0, cA.depsTail.nextDep = t, cA.depsTail = t, cA.deps === t && (cA.deps = s);
    }
    return t;
  }
  trigger(A) {
    this.version++, Us++, this.notify(A);
  }
  notify(A) {
    Ro();
    try {
      for (let t = this.subs; t; t = t.prevSub)
        t.sub.notify() && t.sub.dep.notify();
    } finally {
      Oo();
    }
  }
}
function Ul(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const A = e.dep.computed;
    if (A && !e.dep.subs) {
      A.flags |= 20;
      for (let s = A.deps; s; s = s.nextDep)
        Ul(s);
    }
    const t = e.dep.subs;
    t !== e && (e.prevSub = t, t && (t.nextSub = e)), e.dep.subs = e;
  }
}
const qn = /* @__PURE__ */ new WeakMap(), ut = /* @__PURE__ */ Symbol(
  ""
), Ao = /* @__PURE__ */ Symbol(
  ""
), Fs = /* @__PURE__ */ Symbol(
  ""
);
function LA(e, A, t) {
  if (ee && cA) {
    let s = qn.get(e);
    s || qn.set(e, s = /* @__PURE__ */ new Map());
    let r = s.get(t);
    r || (s.set(t, r = new bl()), r.map = s, r.key = t), r.track();
  }
}
function Ie(e, A, t, s, r, n) {
  const o = qn.get(e);
  if (!o) {
    Us++;
    return;
  }
  const i = (a) => {
    a && a.trigger();
  };
  if (Ro(), A === "clear")
    o.forEach(i);
  else {
    const a = G(e), c = a && Ko(t);
    if (a && t === "length") {
      const d = Number(s);
      o.forEach((l, f) => {
        (f === "length" || f === Fs || !we(f) && f >= d) && i(l);
      });
    } else
      switch ((t !== void 0 || o.has(void 0)) && i(o.get(t)), c && i(o.get(Fs)), A) {
        case "add":
          a ? c && i(o.get("length")) : (i(o.get(ut)), Je(e) && i(o.get(Ao)));
          break;
        case "delete":
          a || (i(o.get(ut)), Je(e) && i(o.get(Ao)));
          break;
        case "set":
          Je(e) && i(o.get(ut));
          break;
      }
  }
  Oo();
}
function wt(e) {
  const A = /* @__PURE__ */ rA(e);
  return A === e || (LA(A, "iterate", Fs), /* @__PURE__ */ te(e)) ? A : /* @__PURE__ */ Te(e) ? /* @__PURE__ */ We(e) ? A.map((t) => Ze(Qe(t))) : A.map(Ze) : A.map(Qe);
}
function Gr(e) {
  return LA(e = /* @__PURE__ */ rA(e), "iterate", Fs), e;
}
function fe(e, A) {
  return /* @__PURE__ */ Te(e) ? Ze(/* @__PURE__ */ We(e) ? Qe(A) : A) : Qe(A);
}
const Jd = {
  __proto__: null,
  [Symbol.iterator]() {
    return wn(this, Symbol.iterator, (e) => fe(this, e));
  },
  concat(...e) {
    return wt(this).concat(
      ...e.map((A) => G(A) ? wt(A) : A)
    );
  },
  entries() {
    return wn(this, "entries", (e) => (e[1] = fe(this, e[1]), e));
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
    return Qn(this, "includes", e);
  },
  indexOf(...e) {
    return Qn(this, "indexOf", e);
  },
  join(e) {
    return wt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Qn(this, "lastIndexOf", e);
  },
  map(e, A) {
    return Fe(this, "map", e, A, void 0, arguments);
  },
  pop() {
    return Xt(this, "pop");
  },
  push(...e) {
    return Xt(this, "push", e);
  },
  reduce(e, ...A) {
    return Ci(this, "reduce", e, A);
  },
  reduceRight(e, ...A) {
    return Ci(this, "reduceRight", e, A);
  },
  shift() {
    return Xt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, A) {
    return Fe(this, "some", e, A, void 0, arguments);
  },
  splice(...e) {
    return Xt(this, "splice", e);
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
    return Xt(this, "unshift", e);
  },
  values() {
    return wn(this, "values", (e) => fe(this, e));
  }
};
function wn(e, A, t) {
  const s = Gr(e), r = s[A]();
  return s !== e && !/* @__PURE__ */ te(e) && (r._next = r.next, r.next = () => {
    const n = r._next();
    return n.done || (n.value = t(n.value)), n;
  }), r;
}
const Wd = Array.prototype;
function Fe(e, A, t, s, r, n) {
  const o = Gr(e), i = o !== e && !/* @__PURE__ */ te(e), a = o[A];
  if (a !== Wd[A]) {
    const l = a.apply(e, n);
    return i ? Qe(l) : l;
  }
  let c = t;
  o !== e && (i ? c = function(l, f) {
    return t.call(this, fe(e, l), f, e);
  } : t.length > 2 && (c = function(l, f) {
    return t.call(this, l, f, e);
  }));
  const d = a.call(o, c, s);
  return i && r ? r(d) : d;
}
function Ci(e, A, t, s) {
  const r = Gr(e), n = r !== e && !/* @__PURE__ */ te(e);
  let o = t, i = !1;
  r !== e && (n ? (i = s.length === 0, o = function(c, d, l) {
    return i && (i = !1, c = fe(e, c)), t.call(this, c, fe(e, d), l, e);
  }) : t.length > 3 && (o = function(c, d, l) {
    return t.call(this, c, d, l, e);
  }));
  const a = r[A](o, ...s);
  return i ? fe(e, a) : a;
}
function Qn(e, A, t) {
  const s = /* @__PURE__ */ rA(e);
  LA(s, "iterate", Fs);
  const r = s[A](...t);
  return (r === -1 || r === !1) && /* @__PURE__ */ Go(t[0]) ? (t[0] = /* @__PURE__ */ rA(t[0]), s[A](...t)) : r;
}
function Xt(e, A, t = []) {
  Se(), Ro();
  const s = (/* @__PURE__ */ rA(e))[A].apply(e, t);
  return Oo(), ke(), s;
}
const Yd = /* @__PURE__ */ ko("__proto__,__v_isRef,__isVue"), Fl = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(we)
);
function jd(e) {
  we(e) || (e = String(e));
  const A = /* @__PURE__ */ rA(this);
  return LA(A, "has", e), A.hasOwnProperty(e);
}
class ml {
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
      return s === (r ? n ? nu : El : n ? yl : vl).get(A) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(A) === Object.getPrototypeOf(s) ? A : void 0;
    const o = G(A);
    if (!r) {
      let a;
      if (o && (a = Jd[t]))
        return a;
      if (t === "hasOwnProperty")
        return jd;
    }
    const i = Reflect.get(
      A,
      t,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ OA(A) ? A : s
    );
    if ((we(t) ? Fl.has(t) : Yd(t)) || (r || LA(A, "get", t), n))
      return i;
    if (/* @__PURE__ */ OA(i)) {
      const a = o && Ko(t) ? i : i.value;
      return r && nA(a) ? /* @__PURE__ */ to(a) : a;
    }
    return nA(i) ? r ? /* @__PURE__ */ to(i) : /* @__PURE__ */ Po(i) : i;
  }
}
class xl extends ml {
  constructor(A = !1) {
    super(!1, A);
  }
  set(A, t, s, r) {
    let n = A[t];
    const o = G(A) && Ko(t);
    if (!this._isShallow) {
      const c = /* @__PURE__ */ Te(n);
      if (!/* @__PURE__ */ te(s) && !/* @__PURE__ */ Te(s) && (n = /* @__PURE__ */ rA(n), s = /* @__PURE__ */ rA(s)), !o && /* @__PURE__ */ OA(n) && !/* @__PURE__ */ OA(s))
        return c || (n.value = s), !0;
    }
    const i = o ? Number(t) < A.length : AA(A, t), a = Reflect.set(
      A,
      t,
      s,
      /* @__PURE__ */ OA(A) ? A : r
    );
    return A === /* @__PURE__ */ rA(r) && a && (i ? He(s, n) && Ie(A, "set", t, s) : Ie(A, "add", t, s)), a;
  }
  deleteProperty(A, t) {
    const s = AA(A, t);
    A[t];
    const r = Reflect.deleteProperty(A, t);
    return r && s && Ie(A, "delete", t, void 0), r;
  }
  has(A, t) {
    const s = Reflect.has(A, t);
    return (!we(t) || !Fl.has(t)) && LA(A, "has", t), s;
  }
  ownKeys(A) {
    return LA(
      A,
      "iterate",
      G(A) ? "length" : ut
    ), Reflect.ownKeys(A);
  }
}
class Zd extends ml {
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
const zd = /* @__PURE__ */ new xl(), $d = /* @__PURE__ */ new Zd(), qd = /* @__PURE__ */ new xl(!0);
const eo = (e) => e, Ms = (e) => Reflect.getPrototypeOf(e);
function Au(e, A, t) {
  return function(...s) {
    const r = this.__v_raw, n = /* @__PURE__ */ rA(r), o = Je(n), i = e === "entries" || e === Symbol.iterator && o, a = e === "keys" && o, c = r[e](...s), d = t ? eo : A ? Ze : Qe;
    return !A && LA(
      n,
      "iterate",
      a ? Ao : ut
    ), CA(
      // inheriting all iterator properties
      Object.create(c),
      {
        // iterator protocol
        next() {
          const { value: l, done: f } = c.next();
          return f ? { value: l, done: f } : {
            value: i ? [d(l[0]), d(l[1])] : d(l),
            done: f
          };
        }
      }
    );
  };
}
function Ns(e) {
  return function(...A) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function eu(e, A) {
  const t = {
    get(r) {
      const n = this.__v_raw, o = /* @__PURE__ */ rA(n), i = /* @__PURE__ */ rA(r);
      e || (He(r, i) && LA(o, "get", r), LA(o, "get", i));
      const { has: a } = Ms(o), c = A ? eo : e ? Ze : Qe;
      if (a.call(o, r))
        return c(n.get(r));
      if (a.call(o, i))
        return c(n.get(i));
      n !== o && n.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && LA(/* @__PURE__ */ rA(r), "iterate", ut), r.size;
    },
    has(r) {
      const n = this.__v_raw, o = /* @__PURE__ */ rA(n), i = /* @__PURE__ */ rA(r);
      return e || (He(r, i) && LA(o, "has", r), LA(o, "has", i)), r === i ? n.has(r) : n.has(r) || n.has(i);
    },
    forEach(r, n) {
      const o = this, i = o.__v_raw, a = /* @__PURE__ */ rA(i), c = A ? eo : e ? Ze : Qe;
      return !e && LA(a, "iterate", ut), i.forEach((d, l) => r.call(n, c(d), c(l), o));
    }
  };
  return CA(
    t,
    e ? {
      add: Ns("add"),
      set: Ns("set"),
      delete: Ns("delete"),
      clear: Ns("clear")
    } : {
      add(r) {
        const n = /* @__PURE__ */ rA(this), o = Ms(n), i = /* @__PURE__ */ rA(r), a = !A && !/* @__PURE__ */ te(r) && !/* @__PURE__ */ Te(r) ? i : r;
        return o.has.call(n, a) || He(r, a) && o.has.call(n, r) || He(i, a) && o.has.call(n, i) || (n.add(a), Ie(n, "add", a, a)), this;
      },
      set(r, n) {
        !A && !/* @__PURE__ */ te(n) && !/* @__PURE__ */ Te(n) && (n = /* @__PURE__ */ rA(n));
        const o = /* @__PURE__ */ rA(this), { has: i, get: a } = Ms(o);
        let c = i.call(o, r);
        c || (r = /* @__PURE__ */ rA(r), c = i.call(o, r));
        const d = a.call(o, r);
        return o.set(r, n), c ? He(n, d) && Ie(o, "set", r, n) : Ie(o, "add", r, n), this;
      },
      delete(r) {
        const n = /* @__PURE__ */ rA(this), { has: o, get: i } = Ms(n);
        let a = o.call(n, r);
        a || (r = /* @__PURE__ */ rA(r), a = o.call(n, r)), i && i.call(n, r);
        const c = n.delete(r);
        return a && Ie(n, "delete", r, void 0), c;
      },
      clear() {
        const r = /* @__PURE__ */ rA(this), n = r.size !== 0, o = r.clear();
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
    t[r] = Au(r, e, A);
  }), t;
}
function No(e, A) {
  const t = eu(e, A);
  return (s, r, n) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(
    AA(t, r) && r in s ? t : s,
    r,
    n
  );
}
const tu = {
  get: /* @__PURE__ */ No(!1, !1)
}, su = {
  get: /* @__PURE__ */ No(!1, !0)
}, ru = {
  get: /* @__PURE__ */ No(!0, !1)
};
const vl = /* @__PURE__ */ new WeakMap(), yl = /* @__PURE__ */ new WeakMap(), El = /* @__PURE__ */ new WeakMap(), nu = /* @__PURE__ */ new WeakMap();
function ou(e) {
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
function Po(e) {
  return /* @__PURE__ */ Te(e) ? e : Vo(
    e,
    !1,
    zd,
    tu,
    vl
  );
}
// @__NO_SIDE_EFFECTS__
function iu(e) {
  return Vo(
    e,
    !1,
    qd,
    su,
    yl
  );
}
// @__NO_SIDE_EFFECTS__
function to(e) {
  return Vo(
    e,
    !0,
    $d,
    ru,
    El
  );
}
function Vo(e, A, t, s, r) {
  if (!nA(e) || e.__v_raw && !(A && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const n = r.get(e);
  if (n)
    return n;
  const o = ou(_d(e));
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
function Go(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function rA(e) {
  const A = e && e.__v_raw;
  return A ? /* @__PURE__ */ rA(A) : e;
}
function au(e) {
  return !AA(e, "__v_skip") && Object.isExtensible(e) && ll(e, "__v_skip", !0), e;
}
const Qe = (e) => nA(e) ? /* @__PURE__ */ Po(e) : e, Ze = (e) => nA(e) ? /* @__PURE__ */ to(e) : e;
// @__NO_SIDE_EFFECTS__
function OA(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Hl(e) {
  return /* @__PURE__ */ OA(e) ? e.value : e;
}
const lu = {
  get: (e, A, t) => A === "__v_raw" ? e : Hl(Reflect.get(e, A, t)),
  set: (e, A, t, s) => {
    const r = e[A];
    return /* @__PURE__ */ OA(r) && !/* @__PURE__ */ OA(t) ? (r.value = t, !0) : Reflect.set(e, A, t, s);
  }
};
function Il(e) {
  return /* @__PURE__ */ We(e) ? e : new Proxy(e, lu);
}
class cu {
  constructor(A, t, s) {
    this.fn = A, this.setter = t, this._value = void 0, this.dep = new bl(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Us - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    cA !== this)
      return hl(this, !0), !0;
  }
  get value() {
    const A = this.dep.track();
    return Ql(this), A && (A.version = this.dep.version), this._value;
  }
  set value(A) {
    this.setter && this.setter(A);
  }
}
// @__NO_SIDE_EFFECTS__
function du(e, A, t = !1) {
  let s, r;
  return W(e) ? s = e : (s = e.get, r = e.set), new cu(s, r, t);
}
const Ps = {}, Cr = /* @__PURE__ */ new WeakMap();
let nt;
function uu(e, A = !1, t = nt) {
  if (t) {
    let s = Cr.get(t);
    s || Cr.set(t, s = []), s.push(e);
  }
}
function fu(e, A, t = iA) {
  const { immediate: s, deep: r, once: n, scheduler: o, augmentJob: i, call: a } = t, c = (x) => r ? x : /* @__PURE__ */ te(x) || r === !1 || r === 0 ? _e(x, 1) : _e(x);
  let d, l, f, g, Q = !1, U = !1;
  if (/* @__PURE__ */ OA(e) ? (l = () => e.value, Q = /* @__PURE__ */ te(e)) : /* @__PURE__ */ We(e) ? (l = () => c(e), Q = !0) : G(e) ? (U = !0, Q = e.some((x) => /* @__PURE__ */ We(x) || /* @__PURE__ */ te(x)), l = () => e.map((x) => {
    if (/* @__PURE__ */ OA(x))
      return x.value;
    if (/* @__PURE__ */ We(x))
      return c(x);
    if (W(x))
      return a ? a(x, 2) : x();
  })) : W(e) ? A ? l = a ? () => a(e, 2) : e : l = () => {
    if (f) {
      Se();
      try {
        f();
      } finally {
        ke();
      }
    }
    const x = nt;
    nt = d;
    try {
      return a ? a(e, 3, [g]) : e(g);
    } finally {
      nt = x;
    }
  } : l = ge, A && r) {
    const x = l, S = r === !0 ? 1 / 0 : r;
    l = () => _e(x(), S);
  }
  const m = Vd(), _ = () => {
    d.stop(), m && m.active && To(m.effects, d);
  };
  if (n && A) {
    const x = A;
    A = (...S) => {
      const X = x(...S);
      return _(), X;
    };
  }
  let v = U ? new Array(e.length).fill(Ps) : Ps;
  const h = (x) => {
    if (!(!(d.flags & 1) || !d.dirty && !x))
      if (A) {
        const S = d.run();
        if (x || r || Q || (U ? S.some((X, eA) => He(X, v[eA])) : He(S, v))) {
          f && f();
          const X = nt;
          nt = d;
          try {
            const eA = [
              S,
              // pass undefined as the old value when it's changed for the first time
              v === Ps ? void 0 : U && v[0] === Ps ? [] : v,
              g
            ];
            v = S, a ? a(A, 3, eA) : (
              // @ts-expect-error
              A(...eA)
            );
          } finally {
            nt = X;
          }
        }
      } else
        d.run();
  };
  return i && i(h), d = new Bl(l), d.scheduler = o ? () => o(h, !1) : h, g = (x) => uu(x, !1, d), f = d.onStop = () => {
    const x = Cr.get(d);
    if (x) {
      if (a)
        a(x, 4);
      else
        for (const S of x) S();
      Cr.delete(d);
    }
  }, A ? s ? h(!0) : v = d.run() : o ? o(h.bind(null, !0), !0) : d.run(), _.pause = d.pause.bind(d), _.resume = d.resume.bind(d), _.stop = _, _;
}
function _e(e, A = 1 / 0, t) {
  if (A <= 0 || !nA(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Map(), (t.get(e) || 0) >= A))
    return e;
  if (t.set(e, A), A--, /* @__PURE__ */ OA(e))
    _e(e.value, A, t);
  else if (G(e))
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
function Ss(e, A, t, s) {
  try {
    return s ? e(...s) : e();
  } catch (r) {
    Xr(r, A, t);
  }
}
function ne(e, A, t, s) {
  if (W(e)) {
    const r = Ss(e, A, t, s);
    return r && il(r) && r.catch((n) => {
      Xr(n, A, t);
    }), r;
  }
  if (G(e)) {
    const r = [];
    for (let n = 0; n < e.length; n++)
      r.push(ne(e[n], A, t, s));
    return r;
  }
}
function Xr(e, A, t, s = !0) {
  const r = A ? A.vnode : null, { errorHandler: n, throwUnhandledErrorInProduction: o } = A && A.appContext.config || iA;
  if (A) {
    let i = A.parent;
    const a = A.proxy, c = `https://vuejs.org/error-reference/#runtime-${t}`;
    for (; i; ) {
      const d = i.ec;
      if (d) {
        for (let l = 0; l < d.length; l++)
          if (d[l](e, a, c) === !1)
            return;
      }
      i = i.parent;
    }
    if (n) {
      Se(), Ss(n, null, 10, [
        e,
        a,
        c
      ]), ke();
      return;
    }
  }
  Bu(e, t, r, s, o);
}
function Bu(e, A, t, s = !0, r = !1) {
  if (r)
    throw e;
  console.error(e);
}
const RA = [];
let de = -1;
const Ht = [];
let Ne = null, vt = 0;
const _l = /* @__PURE__ */ Promise.resolve();
let br = null;
function Ll(e) {
  const A = br || _l;
  return e ? A.then(this ? e.bind(this) : e) : A;
}
function gu(e) {
  let A = de + 1, t = RA.length;
  for (; A < t; ) {
    const s = A + t >>> 1, r = RA[s], n = ms(r);
    n < e || n === e && r.flags & 2 ? A = s + 1 : t = s;
  }
  return A;
}
function Xo(e) {
  if (!(e.flags & 1)) {
    const A = ms(e), t = RA[RA.length - 1];
    !t || // fast path when the job id is larger than the tail
    !(e.flags & 2) && A >= ms(t) ? RA.push(e) : RA.splice(gu(A), 0, e), e.flags |= 1, Sl();
  }
}
function Sl() {
  br || (br = _l.then(Tl));
}
function hu(e) {
  if (!G(e))
    Ne && e.id === -1 ? Ne.splice(vt + 1, 0, e) : e.flags & 1 || (Ht.push(e), e.flags |= 1);
  else
    for (let A = 0; A < e.length; A++)
      Ht.push(e[A]);
  Sl();
}
function bi(e, A, t = de + 1) {
  for (; t < RA.length; t++) {
    const s = RA[t];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      RA.splice(t, 1), t--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function kl(e) {
  if (Ht.length) {
    const A = [...new Set(Ht)].sort(
      (t, s) => ms(t) - ms(s)
    );
    if (Ht.length = 0, Ne) {
      for (let t = 0; t < A.length; t++)
        Ne.push(A[t]);
      return;
    }
    for (Ne = A, vt = 0; vt < Ne.length; vt++) {
      const t = Ne[vt];
      t.flags & 4 && (t.flags &= -2), t.flags & 8 || t(), t.flags &= -2;
    }
    Ne = null, vt = 0;
  }
}
const ms = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Tl(e) {
  try {
    for (de = 0; de < RA.length; de++) {
      const A = RA[de];
      A && !(A.flags & 8) && (A.flags & 4 && (A.flags &= -2), Ss(
        A,
        A.i,
        A.i ? 15 : 14
      ), A.flags & 4 || (A.flags &= -2));
    }
  } finally {
    for (; de < RA.length; de++) {
      const A = RA[de];
      A && (A.flags &= -2);
    }
    de = -1, RA.length = 0, kl(), br = null, (RA.length || Ht.length) && Tl();
  }
}
let JA = null, Kl = null;
function Ur(e) {
  const A = JA;
  return JA = e, Kl = e && e.type.__scopeId || null, A;
}
function pu(e, A = JA, t) {
  if (!A || e._n)
    return e;
  const s = (...r) => {
    s._d && Si(-1);
    const n = Ur(A), o = ft.length;
    let i;
    try {
      i = e(...r);
    } finally {
      for (let a = ft.length; a > o; a--) ac();
      Ur(n), s._d && Si(1);
    }
    return i;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function mA(e, A) {
  if (JA === null)
    return e;
  const t = Zr(JA), s = e.dirs || (e.dirs = []);
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
    ]), ke());
  }
}
function wu(e, A) {
  if (SA) {
    let t = SA.provides;
    const s = SA.parent && SA.parent.provides;
    s === t && (t = SA.provides = Object.create(s)), t[e] = A;
  }
}
function fr(e, A, t = !1) {
  const s = Qf();
  if (s || It) {
    let r = It ? It._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return t && W(A) ? A.call(s && s.proxy) : A;
  }
}
const Qu = /* @__PURE__ */ Symbol.for("v-scx"), Cu = () => fr(Qu);
function Cn(e, A, t) {
  return Dl(e, A, t);
}
function Dl(e, A, t = iA) {
  const { immediate: s, deep: r, flush: n, once: o } = t, i = CA({}, t), a = A && s || !A && n !== "post";
  let c;
  if (ys) {
    if (n === "sync") {
      const g = Cu();
      c = g.__watcherHandles || (g.__watcherHandles = []);
    } else if (!a) {
      const g = () => {
      };
      return g.stop = ge, g.resume = ge, g.pause = ge, g;
    }
  }
  const d = SA;
  i.call = (g, Q, U) => ne(g, d, Q, U);
  let l = !1;
  n === "post" ? i.scheduler = (g) => {
    MA(g, d && d.suspense);
  } : n !== "sync" && (l = !0, i.scheduler = (g, Q) => {
    Q ? g() : Xo(g);
  }), i.augmentJob = (g) => {
    A && (g.flags |= 4), l && (g.flags |= 2, d && (g.id = d.uid, g.i = d));
  };
  const f = fu(e, A, i);
  return ys && (c ? c.push(f) : a && f()), f;
}
function bu(e, A, t) {
  const s = this.proxy, r = BA(e) ? e.includes(".") ? Rl(s, e) : () => s[e] : e.bind(s, s);
  let n;
  W(A) ? n = A : (n = A.handler, t = A);
  const o = ks(this), i = Dl(r, n.bind(s), t);
  return o(), i;
}
function Rl(e, A) {
  const t = A.split(".");
  return () => {
    let s = e;
    for (let r = 0; r < t.length && s; r++)
      s = s[t[r]];
    return s;
  };
}
const Uu = /* @__PURE__ */ Symbol("_vte"), Jr = (e) => e.__isTeleport, bn = /* @__PURE__ */ Symbol("_leaveCb");
function Fu(e) {
  let A = e[0];
  if (e.length > 1) {
    for (const t of e)
      if (t.type !== Ke) {
        A = t;
        break;
      }
  }
  return A;
}
function Ol(e) {
  if (!Wo(e))
    return Jr(e.type) && e.children ? Fu(e.children) : e;
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
function Jo(e, A) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = A;
    const t = e.component.subTree;
    Jo(
      Jr(t.type) && Ol(t) || t,
      A
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = A.clone(e.ssContent), e.ssFallback.transition = A.clone(e.ssFallback)) : e.transition = A;
}
// @__NO_SIDE_EFFECTS__
function mu(e, A) {
  return W(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    CA({ name: e.name }, A, { setup: e })
  ) : e;
}
function Ml(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Ui(e, A) {
  let t;
  return !!((t = Object.getOwnPropertyDescriptor(e, A)) && !t.configurable);
}
const Fr = /* @__PURE__ */ new WeakMap();
function us(e, A, t, s, r = !1) {
  if (G(e)) {
    e.forEach(
      (U, m) => us(
        U,
        A && (G(A) ? A[m] : A),
        t,
        s,
        r
      )
    );
    return;
  }
  if (fs(s) && !r) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && us(e, A, t, s.component.subTree);
    return;
  }
  const n = s.shapeFlag & 4 ? Zr(s.component) : s.el, o = r ? null : n, { i, r: a } = e, c = A && A.r, d = i.refs === iA ? i.refs = {} : i.refs, l = i.setupState, f = /* @__PURE__ */ rA(l), g = l === iA ? ol : (U) => Ui(d, U) ? !1 : AA(f, U), Q = (U, m) => !(m && Ui(d, m));
  if (c != null && c !== a) {
    if (Fi(A), BA(c))
      d[c] = null, g(c) && (l[c] = null);
    else if (/* @__PURE__ */ OA(c)) {
      const U = A;
      Q(c, U.k) && (c.value = null), U.k && (d[U.k] = null);
    }
  }
  if (W(a))
    Ss(a, i, 12, [o, d]);
  else {
    const U = BA(a), m = /* @__PURE__ */ OA(a);
    if (U || m) {
      const _ = () => {
        if (e.f) {
          const v = U ? g(a) ? l[a] : d[a] : Q() || !e.k ? a.value : d[e.k];
          if (r)
            G(v) && To(v, n);
          else if (G(v))
            v.includes(n) || v.push(n);
          else if (U)
            d[a] = [n], g(a) && (l[a] = d[a]);
          else {
            const h = [n];
            Q(a, e.k) && (a.value = h), e.k && (d[e.k] = h);
          }
        } else U ? (d[a] = o, g(a) && (l[a] = o)) : m && (Q(a, e.k) && (a.value = o), e.k && (d[e.k] = o));
      };
      if (o) {
        const v = () => {
          _(), Fr.delete(e);
        };
        v.id = -1, Fr.set(e, v), MA(v, t);
      } else
        Fi(e), _();
    }
  }
}
function Fi(e) {
  const A = Fr.get(e);
  A && (A.flags |= 8, Fr.delete(e));
}
Vr().requestIdleCallback;
Vr().cancelIdleCallback;
const fs = (e) => !!e.type.__asyncLoader, Wo = (e) => e.type.__isKeepAlive;
function xu(e, A) {
  Nl(e, "a", A);
}
function vu(e, A) {
  Nl(e, "da", A);
}
function Nl(e, A, t = SA) {
  const s = e.__wdc || (e.__wdc = () => {
    let r = t;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (Wr(A, s, t), t) {
    let r = t.parent;
    for (; r && r.parent; )
      Wo(r.parent.vnode) && yu(s, A, t, r), r = r.parent;
  }
}
function yu(e, A, t, s) {
  const r = Wr(
    A,
    e,
    s,
    !0
    /* prepend */
  );
  Pl(() => {
    To(s[A], r);
  }, t);
}
function Wr(e, A, t = SA, s = !1) {
  if (t) {
    const r = t[e] || (t[e] = []), n = A.__weh || (A.__weh = (...o) => {
      Se();
      const i = ks(t), a = ne(A, t, e, o);
      return i(), ke(), a;
    });
    return s ? r.unshift(n) : r.push(n), n;
  }
}
const De = (e) => (A, t = SA) => {
  (!ys || e === "sp") && Wr(e, (...s) => A(...s), t);
}, Eu = De("bm"), Hu = De("m"), Iu = De(
  "bu"
), _u = De("u"), Lu = De(
  "bum"
), Pl = De("um"), Su = De(
  "sp"
), ku = De("rtg"), Tu = De("rtc");
function Ku(e, A = SA) {
  Wr("ec", e, A);
}
const Vl = "components";
function Du(e, A) {
  return Gl(Vl, e, !0, A) || e;
}
const Ru = /* @__PURE__ */ Symbol.for("v-ndc");
function Ou(e) {
  return BA(e) && Gl(Vl, e, !1) || e;
}
function Gl(e, A, t = !0, s = !1) {
  const r = JA || SA;
  if (r) {
    const n = r.type;
    {
      const i = mf(
        n,
        !1
      );
      if (i && (i === A || i === xA(A) || i === Pr(xA(A))))
        return n;
    }
    const o = (
      // local registration
      // check instance[type] first which is resolved for options API
      mi(r[e] || n[e], A) || // global registration
      mi(r.appContext[e], A)
    );
    return !o && s ? n : o;
  }
}
function mi(e, A) {
  return e && (e[A] || e[xA(A)] || e[Pr(xA(A))]);
}
function q(e, A, t, s) {
  let r;
  const n = t, o = G(e);
  if (o || BA(e)) {
    const i = o && /* @__PURE__ */ We(e);
    let a = !1, c = !1;
    i && (a = !/* @__PURE__ */ te(e), c = /* @__PURE__ */ Te(e), e = Gr(e)), r = new Array(e.length);
    for (let d = 0, l = e.length; d < l; d++)
      r[d] = A(
        a ? c ? Ze(Qe(e[d])) : Qe(e[d]) : e[d],
        d,
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
        const d = i[a];
        r[a] = A(e[d], d, a, n);
      }
    }
  else
    r = [];
  return r;
}
const so = (e) => e ? uc(e) ? Zr(e) : so(e.parent) : null, Bs = (
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
    $parent: (e) => so(e.parent),
    $root: (e) => so(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Jl(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Xo(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ll.bind(e.proxy)),
    $watch: (e) => bu.bind(e)
  })
), Un = (e, A) => e !== iA && !e.__isScriptSetup && AA(e, A), Mu = {
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
        if (Un(s, A))
          return o[A] = 1, s[A];
        if (r !== iA && AA(r, A))
          return o[A] = 2, r[A];
        if (AA(n, A))
          return o[A] = 3, n[A];
        if (t !== iA && AA(t, A))
          return o[A] = 4, t[A];
        ro && (o[A] = 0);
      }
    }
    const c = Bs[A];
    let d, l;
    if (c)
      return A === "$attrs" && LA(e.attrs, "get", ""), c(e);
    if (
      // css module (injected by vue-loader)
      (d = i.__cssModules) && (d = d[A])
    )
      return d;
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
    return Un(r, A) ? (r[A] = t, !0) : s !== iA && AA(s, A) ? (s[A] = t, !0) : AA(e.props, A) || A[0] === "$" && A.slice(1) in e ? !1 : (n[A] = t, !0);
  },
  has({
    _: { data: e, setupState: A, accessCache: t, ctx: s, appContext: r, props: n, type: o }
  }, i) {
    let a;
    return !!(t[i] || e !== iA && i[0] !== "$" && AA(e, i) || Un(A, i) || AA(n, i) || AA(s, i) || AA(Bs, i) || AA(r.config.globalProperties, i) || (a = o.__cssModules) && a[i]);
  },
  defineProperty(e, A, t) {
    return t.get != null ? e._.accessCache[A] = 0 : AA(t, "value") && this.set(e, A, t.value, null), Reflect.defineProperty(e, A, t);
  }
};
function xi(e) {
  return G(e) ? e.reduce(
    (A, t) => (A[t] = null, A),
    {}
  ) : e;
}
let ro = !0;
function Nu(e) {
  const A = Jl(e), t = e.proxy, s = e.ctx;
  ro = !1, A.beforeCreate && vi(A.beforeCreate, e, "bc");
  const {
    // state
    data: r,
    computed: n,
    methods: o,
    watch: i,
    provide: a,
    inject: c,
    // lifecycle
    created: d,
    beforeMount: l,
    mounted: f,
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
    expose: qe,
    inheritAttrs: Nt,
    // assets
    components: Ks,
    directives: Ds,
    filters: fn
  } = A;
  if (c && Pu(c, s, null), o)
    for (const gA in o) {
      const aA = o[gA];
      W(aA) && (s[gA] = aA.bind(t));
    }
  if (r) {
    const gA = r.call(t, t);
    nA(gA) && (e.data = /* @__PURE__ */ Po(gA));
  }
  if (ro = !0, n)
    for (const gA in n) {
      const aA = n[gA], At = W(aA) ? aA.bind(t, t) : W(aA.get) ? aA.get.bind(t, t) : ge, Rs = !W(aA) && W(aA.set) ? aA.set.bind(t) : ge, et = vf({
        get: At,
        set: Rs
      });
      Object.defineProperty(s, gA, {
        enumerable: !0,
        configurable: !0,
        get: () => et.value,
        set: ($A) => et.value = $A
      });
    }
  if (i)
    for (const gA in i)
      Xl(i[gA], s, t, gA);
  if (a) {
    const gA = W(a) ? a.call(t) : a;
    Reflect.ownKeys(gA).forEach((aA) => {
      wu(aA, gA[aA]);
    });
  }
  d && vi(d, e, "c");
  function TA(gA, aA) {
    G(aA) ? aA.forEach((At) => gA(At.bind(t))) : aA && gA(aA.bind(t));
  }
  if (TA(Eu, l), TA(Hu, f), TA(Iu, g), TA(_u, Q), TA(xu, U), TA(vu, m), TA(Ku, bA), TA(Tu, X), TA(ku, eA), TA(Lu, v), TA(Pl, x), TA(Su, uA), G(qe))
    if (qe.length) {
      const gA = e.exposed || (e.exposed = {});
      qe.forEach((aA) => {
        Object.defineProperty(gA, aA, {
          get: () => t[aA],
          set: (At) => t[aA] = At,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  S && e.render === ge && (e.render = S), Nt != null && (e.inheritAttrs = Nt), Ks && (e.components = Ks), Ds && (e.directives = Ds), uA && Ml(e);
}
function Pu(e, A, t = ge) {
  G(e) && (e = no(e));
  for (const s in e) {
    const r = e[s];
    let n;
    nA(r) ? "default" in r ? n = fr(
      r.from || s,
      r.default,
      !0
    ) : n = fr(r.from || s) : n = fr(r), /* @__PURE__ */ OA(n) ? Object.defineProperty(A, s, {
      enumerable: !0,
      configurable: !0,
      get: () => n.value,
      set: (o) => n.value = o
    }) : A[s] = n;
  }
}
function vi(e, A, t) {
  ne(
    G(e) ? e.map((s) => s.bind(A.proxy)) : e.bind(A.proxy),
    A,
    t
  );
}
function Xl(e, A, t, s) {
  let r = s.includes(".") ? Rl(t, s) : () => t[s];
  if (BA(e)) {
    const n = A[e];
    W(n) && Cn(r, n);
  } else if (W(e))
    Cn(r, e.bind(t));
  else if (nA(e))
    if (G(e))
      e.forEach((n) => Xl(n, A, t, s));
    else {
      const n = W(e.handler) ? e.handler.bind(t) : A[e.handler];
      W(n) && Cn(r, n, e);
    }
}
function Jl(e) {
  const A = e.type, { mixins: t, extends: s } = A, {
    mixins: r,
    optionsCache: n,
    config: { optionMergeStrategies: o }
  } = e.appContext, i = n.get(A);
  let a;
  return i ? a = i : !r.length && !t && !s ? a = A : (a = {}, r.length && r.forEach(
    (c) => mr(a, c, o, !0)
  ), mr(a, A, o)), nA(A) && n.set(A, a), a;
}
function mr(e, A, t, s = !1) {
  const { mixins: r, extends: n } = A;
  n && mr(e, n, t, !0), r && r.forEach(
    (o) => mr(e, o, t, !0)
  );
  for (const o in A)
    if (!(s && o === "expose")) {
      const i = Vu[o] || t && t[o];
      e[o] = i ? i(e[o], A[o]) : A[o];
    }
  return e;
}
const Vu = {
  data: yi,
  props: Ei,
  emits: Ei,
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
  watch: Xu,
  // provide / inject
  provide: yi,
  inject: Gu
};
function yi(e, A) {
  return A ? e ? function() {
    return CA(
      W(e) ? e.call(this, this) : e,
      W(A) ? A.call(this, this) : A
    );
  } : A : e;
}
function Gu(e, A) {
  return $t(no(e), no(A));
}
function no(e) {
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
function $t(e, A) {
  return e ? CA(/* @__PURE__ */ Object.create(null), e, A) : A;
}
function Ei(e, A) {
  return e ? G(e) && G(A) ? [.../* @__PURE__ */ new Set([...e, ...A])] : CA(
    /* @__PURE__ */ Object.create(null),
    xi(e),
    xi(A ?? {})
  ) : A;
}
function Xu(e, A) {
  if (!e) return A;
  if (!A) return e;
  const t = CA(/* @__PURE__ */ Object.create(null), e);
  for (const s in A)
    t[s] = KA(e[s], A[s]);
  return t;
}
function Wl() {
  return {
    app: null,
    config: {
      isNativeTag: ol,
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
let Ju = 0;
function Wu(e, A) {
  return function(s, r = null) {
    W(s) || (s = CA({}, s)), r != null && !nA(r) && (r = null);
    const n = Wl(), o = /* @__PURE__ */ new WeakSet(), i = [];
    let a = !1;
    const c = n.app = {
      _uid: Ju++,
      _component: s,
      _props: r,
      _container: null,
      _context: n,
      _instance: null,
      version: yf,
      get config() {
        return n.config;
      },
      set config(d) {
      },
      use(d, ...l) {
        return o.has(d) || (d && W(d.install) ? (o.add(d), d.install(c, ...l)) : W(d) && (o.add(d), d(c, ...l))), c;
      },
      mixin(d) {
        return n.mixins.includes(d) || n.mixins.push(d), c;
      },
      component(d, l) {
        return l ? (n.components[d] = l, c) : n.components[d];
      },
      directive(d, l) {
        return l ? (n.directives[d] = l, c) : n.directives[d];
      },
      mount(d, l, f) {
        if (!a) {
          const g = c._ceVNode || he(s, r);
          return g.appContext = n, f === !0 ? f = "svg" : f === !1 && (f = void 0), e(g, d, f), a = !0, c._container = d, d.__vue_app__ = c, Zr(g.component);
        }
      },
      onUnmount(d) {
        i.push(d);
      },
      unmount() {
        a && (ne(
          i,
          c._instance,
          16
        ), e(null, c._container), delete c._container.__vue_app__);
      },
      provide(d, l) {
        return n.provides[d] = l, c;
      },
      runWithContext(d) {
        const l = It;
        It = c;
        try {
          return d();
        } finally {
          It = l;
        }
      }
    };
    return c;
  };
}
let It = null;
const Yu = (e, A) => A === "modelValue" || A === "model-value" ? e.modelModifiers : e[`${A}Modifiers`] || e[`${xA(A)}Modifiers`] || e[`${XA(A)}Modifiers`];
function ju(e, A, ...t) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || iA;
  let r = t;
  const n = A.startsWith("update:"), o = n && Yu(s, A.slice(7));
  o && (o.trim && (r = t.map((d) => BA(d) ? d.trim() : d)), o.number && (r = r.map(Do)));
  let i, a = s[i = gn(A)] || // also try camelCase event handler (#2249)
  s[i = gn(xA(A))];
  !a && n && (a = s[i = gn(XA(A))]), a && ne(
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
const Zu = /* @__PURE__ */ new WeakMap();
function Yl(e, A, t = !1) {
  const s = t ? Zu : A.emitsCache, r = s.get(e);
  if (r !== void 0)
    return r;
  const n = e.emits;
  let o = {}, i = !1;
  if (!W(e)) {
    const a = (c) => {
      const d = Yl(c, A, !0);
      d && (i = !0, CA(o, d));
    };
    !t && A.mixins.length && A.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !n && !i ? (nA(e) && s.set(e, null), null) : (G(n) ? n.forEach((a) => o[a] = null) : CA(o, n), nA(e) && s.set(e, o), o);
}
function Yr(e, A) {
  return !e || !Rr(A) ? !1 : (A = A.slice(2), A = A === "Once" ? A : A.replace(/Once$/, ""), AA(e, A[0].toLowerCase() + A.slice(1)) || AA(e, XA(A)) || AA(e, A));
}
function Hi(e) {
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
    renderCache: d,
    props: l,
    data: f,
    setupState: g,
    ctx: Q,
    inheritAttrs: U
  } = e, m = Ur(e);
  let _, v;
  try {
    if (t.shapeFlag & 4) {
      const x = r || s, S = x;
      _ = Be(
        c.call(
          S,
          x,
          d,
          l,
          g,
          f,
          Q
        )
      ), v = i;
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
      ), v = A.props ? i : zu(i);
    }
  } catch (x) {
    ft.length = 0, Xr(x, e, 1), _ = he(Ke);
  }
  let h = _;
  if (v && U !== !1) {
    const x = Object.keys(v), { shapeFlag: S } = h;
    x.length && S & 7 && (n && x.some(Or) && (v = $u(
      v,
      n
    )), h = Kt(h, v, !1, !0));
  }
  if (t.dirs && (h = Kt(h, null, !1, !0), h.dirs = h.dirs ? h.dirs.concat(t.dirs) : t.dirs), t.transition) {
    const x = Jr(h.type) && Ol(h) || h;
    Jo(x, t.transition);
  }
  return _ = h, Ur(m), _;
}
const zu = (e) => {
  let A;
  for (const t in e)
    (t === "class" || t === "style" || Rr(t)) && ((A || (A = {}))[t] = e[t]);
  return A;
}, $u = (e, A) => {
  const t = {};
  for (const s in e)
    (!Or(s) || !(s.slice(9) in A)) && (t[s] = e[s]);
  return t;
};
function qu(e, A, t) {
  const { props: s, children: r, component: n } = e, { props: o, children: i, patchFlag: a } = A, c = n.emitsOptions;
  if (A.dirs || A.transition)
    return !0;
  if (t && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return s ? Ii(s, o, c) : !!o;
    if (a & 8) {
      const d = A.dynamicProps;
      for (let l = 0; l < d.length; l++) {
        const f = d[l];
        if (jl(o, s, f) && !Yr(c, f))
          return !0;
      }
    }
  } else
    return (r || i) && (!i || !i.$stable) ? !0 : s === o ? !1 : s ? o ? Ii(s, o, c) : !0 : !!o;
  return !1;
}
function Ii(e, A, t) {
  const s = Object.keys(A);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < s.length; r++) {
    const n = s[r];
    if (jl(A, e, n) && !Yr(t, n))
      return !0;
  }
  return !1;
}
function jl(e, A, t) {
  const s = e[t], r = A[t];
  return t === "style" && nA(s) && nA(r) ? !Rt(s, r) : s !== r;
}
function Af({ vnode: e, parent: A, suspense: t }, s) {
  for (; A; ) {
    const r = A.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.suspense.vnode.el = r.el = s, e = r), r === e)
      (e = A.vnode).el = s, A = A.parent;
    else
      break;
  }
  t && t.activeBranch === e && (t.vnode.el = s);
}
const Zl = {}, zl = () => Object.create(Zl), $l = (e) => Object.getPrototypeOf(e) === Zl;
function ef(e, A, t, s = !1) {
  const r = {}, n = zl();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), ql(e, A, r, n);
  for (const o in e.propsOptions[0])
    o in r || (r[o] = void 0);
  t ? e.props = s ? r : /* @__PURE__ */ iu(r) : e.type.props ? e.props = r : e.props = n, e.attrs = n;
}
function tf(e, A, t, s) {
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
      const d = e.vnode.dynamicProps;
      for (let l = 0; l < d.length; l++) {
        let f = d[l];
        if (Yr(e.emitsOptions, f))
          continue;
        const g = A[f];
        if (a)
          if (AA(n, f))
            g !== n[f] && (n[f] = g, c = !0);
          else {
            const Q = xA(f);
            r[Q] = oo(
              a,
              i,
              Q,
              g,
              e,
              !1
            );
          }
        else
          g !== n[f] && (n[f] = g, c = !0);
      }
    }
  } else {
    ql(e, A, r, n) && (c = !0);
    let d;
    for (const l in i)
      (!A || // for camelCase
      !AA(A, l) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = XA(l)) === l || !AA(A, d))) && (a ? t && // for camelCase
      (t[l] !== void 0 || // for kebab-case
      t[d] !== void 0) && (r[l] = oo(
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
  c && Ie(e.attrs, "set", "");
}
function ql(e, A, t, s) {
  const [r, n] = e.propsOptions;
  let o = !1, i;
  if (A)
    for (let a in A) {
      if (ls(a))
        continue;
      const c = A[a];
      let d;
      r && AA(r, d = xA(a)) ? !n || !n.includes(d) ? t[d] = c : (i || (i = {}))[d] = c : Yr(e.emitsOptions, a) || (!(a in s) || c !== s[a]) && (s[a] = c, o = !0);
    }
  if (n) {
    const a = /* @__PURE__ */ rA(t), c = i || iA;
    for (let d = 0; d < n.length; d++) {
      const l = n[d];
      t[l] = oo(
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
function oo(e, A, t, s, r, n) {
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
          const d = ks(r);
          s = c[t] = a.call(
            null,
            A
          ), d();
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
const sf = /* @__PURE__ */ new WeakMap();
function Ac(e, A, t = !1) {
  const s = t ? sf : A.propsCache, r = s.get(e);
  if (r)
    return r;
  const n = e.props, o = {}, i = [];
  let a = !1;
  if (!W(e)) {
    const d = (l) => {
      a = !0;
      const [f, g] = Ac(l, A, !0);
      CA(o, f), g && i.push(...g);
    };
    !t && A.mixins.length && A.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!n && !a)
    return nA(e) && s.set(e, at), at;
  if (G(n))
    for (let d = 0; d < n.length; d++) {
      const l = xA(n[d]);
      _i(l) && (o[l] = iA);
    }
  else if (n)
    for (const d in n) {
      const l = xA(d);
      if (_i(l)) {
        const f = n[d], g = o[l] = G(f) || W(f) ? { type: f } : CA({}, f), Q = g.type;
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
        ] = m, (U || AA(g, "default")) && i.push(l);
      }
    }
  const c = [o, i];
  return nA(e) && s.set(e, c), c;
}
function _i(e) {
  return e[0] !== "$" && !ls(e);
}
const Yo = (e) => e === "_" || e === "_ctx" || e === "$stable", jo = (e) => G(e) ? e.map(Be) : [Be(e)], rf = (e, A, t) => {
  if (A._n)
    return A;
  const s = pu((...r) => jo(A(...r)), t);
  return s._c = !1, s;
}, ec = (e, A, t) => {
  const s = e._ctx;
  for (const r in e) {
    if (Yo(r)) continue;
    const n = e[r];
    if (W(n))
      A[r] = rf(r, n, s);
    else if (n != null) {
      const o = jo(n);
      A[r] = () => o;
    }
  }
}, tc = (e, A) => {
  const t = jo(A);
  e.slots.default = () => t;
}, sc = (e, A, t) => {
  for (const s in A)
    (t || !Yo(s)) && (e[s] = A[s]);
}, nf = (e, A, t) => {
  const s = e.slots = zl();
  if (e.vnode.shapeFlag & 32) {
    const r = A._;
    r ? (sc(s, A, t), t && ll(s, "_", r, !0)) : ec(A, s);
  } else A && tc(e, A);
}, of = (e, A, t) => {
  const { vnode: s, slots: r } = e;
  let n = !0, o = iA;
  if (s.shapeFlag & 32) {
    const i = A._;
    i ? t && i === 1 ? n = !1 : sc(r, A, t) : (n = !A.$stable, ec(A, r)), o = A;
  } else A && (tc(e, A), o = { default: 1 });
  if (n)
    for (const i in r)
      !Yo(i) && o[i] == null && delete r[i];
}, MA = uf;
function af(e) {
  return lf(e);
}
function lf(e, A) {
  const t = Vr();
  t.__VUE__ = !0;
  const {
    insert: s,
    remove: r,
    patchProp: n,
    createElement: o,
    createText: i,
    createComment: a,
    setText: c,
    setElementText: d,
    parentNode: l,
    nextSibling: f,
    setScopeId: g = ge,
    insertStaticContent: Q
  } = e, U = (B, C, F, L = null, E = null, I = null, K = void 0, T = null, k = !!C.dynamicChildren) => {
    if (B === C)
      return;
    B && !Jt(B, C) && (L = Os(B), $A(B, E, I, !0), B = null), C.patchFlag === -2 && (k = !1, C.dynamicChildren = null), C.dynamicChildren && B && B.dynamicChildren && B.dynamicChildren.hasOnce && (C.dynamicChildren === at && (C.dynamicChildren = []), C.dynamicChildren.hasOnce = !0);
    const { type: H, ref: P, shapeFlag: O } = C;
    switch (H) {
      case jr:
        m(B, C, F, L);
        break;
      case Ke:
        _(B, C, F, L);
        break;
      case mn:
        B == null && v(C, F, L, K);
        break;
      case M:
        Ks(
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
        ) : O & 6 ? Ds(
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
          Vt
        );
    }
    P != null && E ? us(P, B && B.ref, I, C || B, !C) : P == null && B && B.ref != null && us(B.ref, null, I, B, !0);
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
      C.el = a(C.children || ""),
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
      E = f(B), s(B, F, L), B = E;
    s(C, F, L);
  }, x = ({ el: B, anchor: C }) => {
    let F;
    for (; B && B !== C; )
      F = f(B), r(B), B = F;
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
    ), O & 8 ? d(k, B.children) : O & 16 && bA(
      B.children,
      k,
      null,
      L,
      E,
      Fn(B, I),
      K,
      T
    ), J && tt(B, null, L, "created"), eA(k, B, B.scopeId, K, L), P) {
      for (const oA in P)
        oA !== "value" && !ls(oA) && n(k, oA, null, P[oA], I, L);
      "value" in P && n(k, "value", null, P.value, I), (H = P.onVnodeBeforeMount) && le(H, L, B);
    }
    J && tt(B, null, L, "beforeMount");
    const $ = cf(E, N);
    $ && N.beforeEnter(k), s(k, C, F), ((H = P && P.onVnodeMounted) || $ || J) && MA(() => {
      try {
        H && le(H, L, B), $ && N.enter(k), J && tt(B, null, L, "mounted");
      } finally {
      }
    }, E);
  }, eA = (B, C, F, L, E) => {
    if (F && g(B, F), L)
      for (let I = 0; I < L.length; I++)
        g(B, L[I]);
    if (E) {
      let I = E.subTree;
      if (C === I || ic(I.type) && (I.ssContent === C || I.ssFallback === C)) {
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
      const P = B[H] = T ? Ee(B[H]) : Be(B[H]);
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
    if (F && st(F, !1), (J = N.onVnodeBeforeUpdate) && le(J, F, C, B), P && tt(C, B, F, "beforeUpdate"), F && st(F, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    H && (!B.dynamicChildren || B.dynamicChildren.length !== H.length) && (k = 0, K = !1, H = null), (O.innerHTML && N.innerHTML == null || O.textContent && N.textContent == null) && d(T, ""), H ? qe(
      B.dynamicChildren,
      H,
      T,
      F,
      L,
      Fn(C, E),
      I
    ) : K || aA(
      B,
      C,
      T,
      null,
      F,
      L,
      Fn(C, E),
      I,
      !1
    ), k > 0) {
      if (k & 16)
        Nt(T, O, N, F, E);
      else if (k & 2 && O.class !== N.class && n(T, "class", null, N.class, E), k & 4 && n(T, "style", O.style, N.style, E), k & 8) {
        const $ = C.dynamicProps;
        for (let oA = 0; oA < $.length; oA++) {
          const sA = $[oA], UA = O[sA], vA = N[sA];
          (vA !== UA || sA === "value") && n(T, sA, UA, vA, E, F);
        }
      }
      k & 1 && B.children !== C.children && d(T, C.children);
    } else !K && H == null && Nt(T, O, N, F, E);
    ((J = N.onVnodeUpdated) || P) && MA(() => {
      J && le(J, F, C, B), P && tt(C, B, F, "updated");
    }, L);
  }, qe = (B, C, F, L, E, I, K) => {
    for (let T = 0; T < C.length; T++) {
      const k = B[T], H = C[T], P = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        k.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (k.type === M || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Jt(k, H) || // - In the case of a component, it could contain anything.
        k.shapeFlag & 198) ? l(k.el) : (
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
  }, Nt = (B, C, F, L, E) => {
    if (C !== F) {
      if (C !== iA)
        for (const I in C)
          !ls(I) && !(I in F) && n(
            B,
            I,
            C[I],
            null,
            E,
            L
          );
      for (const I in F) {
        if (ls(I)) continue;
        const K = F[I], T = C[I];
        K !== T && I !== "value" && n(B, I, T, K, E, L);
      }
      "value" in F && n(B, "value", C.value, F.value, E);
    }
  }, Ks = (B, C, F, L, E, I, K, T, k) => {
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
    B.dynamicChildren && B.dynamicChildren.length === N.length ? (qe(
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
    (C.key != null || E && C === E.subTree) && rc(
      B,
      C,
      !0
      /* shallow */
    )) : aA(
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
  }, Ds = (B, C, F, L, E, I, K, T, k) => {
    C.slotScopeIds = T, B == null ? C.shapeFlag & 512 ? E.ctx.activate(
      C,
      F,
      L,
      K,
      k
    ) : fn(
      C,
      F,
      L,
      E,
      I,
      K,
      k
    ) : ai(B, C, k);
  }, fn = (B, C, F, L, E, I, K) => {
    const T = B.component = wf(
      B,
      L,
      E
    );
    if (Wo(B) && (T.ctx.renderer = Vt), Cf(T, !1, K), T.asyncDep) {
      if (E && E.registerDep(T, TA, K), !B.el) {
        const k = T.subTree = he(Ke);
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
  }, ai = (B, C, F) => {
    const L = C.component = B.component;
    if (qu(B, C, F))
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
          const ie = nc(B);
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
        st(B, !1), O ? (O.el = oA.el, gA(B, O, K)) : O = oA, N && ur(N), (UA = O.props && O.props.onVnodeBeforeUpdate) && le(UA, $, O, oA), st(B, !0);
        const vA = Hi(B), oe = B.subTree;
        B.subTree = vA, U(
          oe,
          vA,
          // parent may have changed if it's in a teleport
          l(oe.el),
          // anchor may have changed if it's in a fragment
          Os(oe),
          B,
          E,
          I
        ), O.el = vA.el, sA === null && Af(B, vA.el), J && MA(J, E), (UA = O.props && O.props.onVnodeUpdated) && MA(
          () => le(UA, $, O, oA),
          E
        );
      } else {
        let O;
        const { el: N, props: J } = C, { bm: $, m: oA, parent: sA, root: UA, type: vA } = B, oe = fs(C);
        st(B, !1), $ && ur($), !oe && (O = J && J.onVnodeBeforeMount) && le(O, sA, C), st(B, !0);
        {
          UA.ce && UA.ce._hasShadowRoot() && UA.ce._injectChildStyle(
            vA,
            B.parent ? B.parent.type : void 0
          );
          const ie = B.subTree = Hi(B);
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
            () => le(O, sA, ie),
            E
          );
        }
        (C.shapeFlag & 256 || sA && fs(sA.vnode) && sA.vnode.shapeFlag & 256) && B.a && MA(B.a, E), B.isMounted = !0, C = F = L = null;
      }
    };
    B.scope.on();
    const k = B.effect = new Bl(T);
    B.scope.off();
    const H = B.update = k.run.bind(k), P = B.job = k.runIfDirty.bind(k);
    P.i = B, P.id = B.uid, k.scheduler = () => Xo(P), st(B, !0), H();
  }, gA = (B, C, F) => {
    C.component = B;
    const L = B.vnode.props;
    B.vnode = C, B.next = null, tf(B, C.props, L, F), of(B, C.children, F), Se(), bi(B), ke();
  }, aA = (B, C, F, L, E, I, K, T, k = !1) => {
    const H = B && B.children, P = B ? B.shapeFlag : 0, O = C.children, { patchFlag: N, shapeFlag: J } = C;
    if (N > 0) {
      if (N & 128) {
        Rs(
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
        At(
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
    J & 8 ? (P & 16 && Pt(H, E, I), O !== H && d(F, O)) : P & 16 ? J & 16 ? Rs(
      H,
      O,
      F,
      L,
      E,
      I,
      K,
      T,
      k
    ) : Pt(H, E, I, !0) : (P & 8 && d(F, ""), J & 16 && bA(
      O,
      F,
      L,
      E,
      I,
      K,
      T,
      k
    ));
  }, At = (B, C, F, L, E, I, K, T, k) => {
    B = B || at, C = C || at;
    const H = B.length, P = C.length, O = Math.min(H, P);
    let N;
    for (N = 0; N < O; N++) {
      const J = C[N] = k ? Ee(C[N]) : Be(C[N]);
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
    H > P ? Pt(
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
  }, Rs = (B, C, F, L, E, I, K, T, k) => {
    let H = 0;
    const P = C.length;
    let O = B.length - 1, N = P - 1;
    for (; H <= O && H <= N; ) {
      const J = B[H], $ = C[H] = k ? Ee(C[H]) : Be(C[H]);
      if (Jt(J, $))
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
      const J = B[O], $ = C[N] = k ? Ee(C[N]) : Be(C[N]);
      if (Jt(J, $))
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
            C[H] = k ? Ee(C[H]) : Be(C[H]),
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
        const VA = C[H] = k ? Ee(C[H]) : Be(C[H]);
        VA.key != null && oA.set(VA.key, H);
      }
      let sA, UA = 0;
      const vA = N - $ + 1;
      let oe = !1, ie = 0;
      const Gt = new Array(vA);
      for (H = 0; H < vA; H++) Gt[H] = 0;
      for (H = J; H <= O; H++) {
        const VA = B[H];
        if (UA >= vA) {
          $A(VA, E, I, !0);
          continue;
        }
        let ae;
        if (VA.key != null)
          ae = oA.get(VA.key);
        else
          for (sA = $; sA <= N; sA++)
            if (Gt[sA - $] === 0 && Jt(VA, C[sA])) {
              ae = sA;
              break;
            }
        ae === void 0 ? $A(VA, E, I, !0) : (Gt[ae - $] = H + 1, ae >= ie ? ie = ae : oe = !0, U(
          VA,
          C[ae],
          F,
          null,
          E,
          I,
          K,
          T,
          k
        ), UA++);
      }
      const di = oe ? df(Gt) : at;
      for (sA = di.length - 1, H = vA - 1; H >= 0; H--) {
        const VA = $ + H, ae = C[VA], ui = C[VA + 1], fi = VA + 1 < P ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          ui.el || oc(ui)
        ) : L;
        Gt[H] === 0 ? U(
          null,
          ae,
          F,
          fi,
          E,
          I,
          K,
          T,
          k
        ) : oe && (sA < 0 || H !== di[sA] ? et(ae, F, fi, 2) : sA--);
      }
    }
  }, et = (B, C, F, L, E = null) => {
    const { el: I, type: K, transition: T, children: k, shapeFlag: H } = B;
    if (H & 6) {
      et(B.component.subTree, C, F, L);
      return;
    }
    if (H & 128) {
      B.suspense.move(C, F, L);
      return;
    }
    if (H & 64) {
      K.move(B, C, F, Vt);
      return;
    }
    if (K === M) {
      s(I, C, F);
      for (let O = 0; O < k.length; O++)
        et(k[O], C, F, L);
      s(B.anchor, C, F);
      return;
    }
    if (K === mn) {
      h(B, C, F);
      return;
    }
    if (L !== 2 && H & 1 && T)
      if (L === 0)
        T.persisted && !I[bn] ? s(I, C, F) : (T.beforeEnter(I), s(I, C, F), MA(() => T.enter(I), E));
      else {
        const { leave: O, delayLeave: N, afterLeave: J } = T, $ = () => {
          B.ctx.isUnmounted ? r(I) : s(I, C, F);
        }, oA = () => {
          const sA = I._isLeaving || !!I[bn];
          I._isLeaving && I[bn](
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
    if ((O === -2 || H && H.hasOnce) && (E = !1), T != null && (Se(), us(T, null, F, B, !0), ke()), J != null && (!B.ctx || B.ctx === C) && (C.renderCache[J] = void 0), P & 256) {
      C.ctx.deactivate(B);
      return;
    }
    const oA = P & 1 && N, sA = !fs(B);
    let UA;
    if (sA && (UA = K && K.onVnodeBeforeUnmount) && le(UA, C, B), P & 6)
      Hd(B.component, F, L);
    else {
      if (P & 128) {
        B.suspense.unmount(F, L);
        return;
      }
      oA && tt(B, null, C, "beforeUnmount"), P & 64 ? B.type.remove(
        B,
        C,
        F,
        Vt,
        L
      ) : H && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !H.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (I !== M || O > 0 && O & 64) ? Pt(
        H,
        C,
        F,
        !1,
        !0
      ) : (I === M && O & 384 || !E && P & 16) && Pt(k, C, F), L && li(B);
    }
    const vA = $ != null && J == null;
    (sA && (UA = K && K.onVnodeUnmounted) || oA || vA) && MA(() => {
      UA && le(UA, C, B), oA && tt(B, null, C, "unmounted"), vA && (B.el = null);
    }, F);
  }, li = (B) => {
    const { type: C, el: F, anchor: L, transition: E } = B;
    if (C === M) {
      Ed(F, L);
      return;
    }
    if (C === mn) {
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
  }, Ed = (B, C) => {
    let F;
    for (; B !== C; )
      F = f(B), r(B), B = F;
    r(C);
  }, Hd = (B, C, F) => {
    const { bum: L, scope: E, job: I, subTree: K, um: T, m: k, a: H } = B;
    Li(k), Li(H), L && ur(L), E.stop(), I ? (I.flags |= 8, $A(K, B, C, F)) : B.vnode.el && K && (K.transition = B.vnode.transition, $A(K, B, C, F)), T && MA(T, C), MA(() => {
      B.isUnmounted = !0;
    }, C);
  }, Pt = (B, C, F, L = !1, E = !1, I = 0) => {
    for (let K = I; K < B.length; K++)
      $A(B[K], C, F, L, E);
  }, Os = (B) => {
    if (B.shapeFlag & 6)
      return Os(B.component.subTree);
    if (B.shapeFlag & 128)
      return B.suspense.next();
    const C = f(B.anchor || B.el), F = C && C[Uu];
    return F ? f(F) : C;
  };
  let Bn = !1;
  const ci = (B, C, F) => {
    let L;
    B == null ? C._vnode && ($A(C._vnode, null, null, !0), L = C._vnode.component) : U(
      C._vnode || null,
      B,
      C,
      null,
      null,
      null,
      F
    ), C._vnode = B, Bn || (Bn = !0, bi(L), kl(), Bn = !1);
  }, Vt = {
    p: U,
    um: $A,
    m: et,
    r: li,
    mt: fn,
    mc: bA,
    pc: aA,
    pbc: qe,
    n: Os,
    o: e
  };
  return {
    render: ci,
    hydrate: void 0,
    createApp: Wu(ci)
  };
}
function Fn({ type: e, props: A }, t) {
  return t === "svg" && e === "foreignObject" || t === "mathml" && e === "annotation-xml" && A && A.encoding && A.encoding.includes("html") ? void 0 : t;
}
function st({ effect: e, job: A }, t) {
  t ? (e.flags |= 32, A.flags |= 4) : (e.flags &= -33, A.flags &= -5);
}
function cf(e, A) {
  return (!e || e && !e.pendingBranch) && A && !A.persisted;
}
function rc(e, A, t = !1) {
  const s = e.children, r = A.children;
  if (G(s) && G(r))
    for (let n = 0; n < s.length; n++) {
      const o = s[n];
      let i = r[n];
      i.shapeFlag & 1 && !i.dynamicChildren && ((i.patchFlag <= 0 || i.patchFlag === 32) && (i = r[n] = Ee(r[n]), i.el = o.el), !t && i.patchFlag !== -2 && rc(o, i)), i.type === jr && (i.patchFlag === -1 && (i = r[n] = Ee(i)), i.el = o.el), i.type === Ke && !i.el && (i.el = o.el);
    }
}
function df(e) {
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
function nc(e) {
  const A = e.subTree.component;
  if (A)
    return A.asyncDep && !A.asyncResolved ? A : nc(A);
}
function Li(e) {
  if (e)
    for (let A = 0; A < e.length; A++)
      e[A].flags |= 8;
}
function oc(e) {
  if (e.placeholder)
    return e.placeholder;
  const A = e.component;
  return A ? oc(A.subTree) : null;
}
const ic = (e) => e.__isSuspense;
function uf(e, A) {
  A && A.pendingBranch ? G(e) ? A.effects.push(...e) : A.effects.push(e) : hu(e);
}
const M = /* @__PURE__ */ Symbol.for("v-fgt"), jr = /* @__PURE__ */ Symbol.for("v-txt"), Ke = /* @__PURE__ */ Symbol.for("v-cmt"), mn = /* @__PURE__ */ Symbol.for("v-stc"), ft = [];
let WA = null;
function p(e = !1) {
  ft.push(WA = e ? null : []);
}
function ac() {
  ft.pop(), WA = ft[ft.length - 1] || null;
}
let xs = 1;
function Si(e, A = !1) {
  xs += e, e < 0 && WA && A && (WA.hasOnce = !0);
}
function lc(e) {
  return e.dynamicChildren = xs > 0 ? WA || at : null, ac(), xs > 0 && WA && WA.push(e), e;
}
function w(e, A, t, s, r, n) {
  return lc(
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
function Zo(e, A, t, s, r) {
  return lc(
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
function cc(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Jt(e, A) {
  return e.type === A.type && e.key === A.key;
}
const dc = ({ key: e }) => e ?? null, Br = ({
  ref: e,
  ref_key: A,
  ref_for: t
}) => (typeof e == "number" && (e = "" + e), e != null ? BA(e) || /* @__PURE__ */ OA(e) || W(e) ? { i: JA, r: e, k: A, f: !!t } : e : null);
function u(e, A = null, t = null, s = 0, r = null, n = e === M ? 0 : 1, o = !1, i = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: A,
    key: A && dc(A),
    ref: A && Br(A),
    scopeId: Kl,
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
  return i ? (xr(a, t), n & 128 && e.normalize(a)) : t && (a.shapeFlag |= BA(t) ? 8 : 16), xs > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  WA && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || n & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && WA.push(a), a;
}
const he = ff;
function ff(e, A = null, t = null, s = 0, r = null, n = !1) {
  if ((!e || e === Ru) && (e = Ke), cc(e)) {
    const i = Kt(
      e,
      A,
      !0
      /* mergeRef: true */
    );
    return t && xr(i, t), xs > 0 && !n && WA && (i.shapeFlag & 6 ? WA[WA.indexOf(e)] = i : WA.push(i)), i.patchFlag = -2, i;
  }
  if (xf(e) && (e = e.__vccOpts), A) {
    A = Bf(A);
    let { class: i, style: a } = A;
    i && !BA(i) && (A.class = Y(i)), nA(a) && (/* @__PURE__ */ Go(a) && !G(a) && (a = CA({}, a)), A.style = Ls(a));
  }
  const o = BA(e) ? 1 : ic(e) ? 128 : Jr(e) ? 64 : nA(e) ? 4 : W(e) ? 2 : 0;
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
function Bf(e) {
  return e ? /* @__PURE__ */ Go(e) || $l(e) ? CA({}, e) : e : null;
}
function Kt(e, A, t = !1, s = !1) {
  const { props: r, ref: n, patchFlag: o, children: i, transition: a } = e, c = A ? gf(r || {}, A) : r, d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && dc(c),
    ref: A && A.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      t && n ? G(n) ? n.concat(Br(A)) : [n, Br(A)] : Br(A)
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
    ssContent: e.ssContent && Kt(e.ssContent),
    ssFallback: e.ssFallback && Kt(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce,
    cacheIndex: e.cacheIndex
  };
  return a && s && Jo(
    d,
    a.clone(d)
  ), d;
}
function V(e = " ", A = 0) {
  return he(jr, null, e, A);
}
function y(e = "", A = !1) {
  return A ? (p(), Zo(Ke, null, e)) : he(Ke, null, e);
}
function Be(e) {
  return e == null || typeof e == "boolean" ? he(Ke) : G(e) ? he(
    M,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : cc(e) ? Ee(e) : he(jr, null, String(e));
}
function Ee(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Kt(e);
}
function xr(e, A) {
  let t = 0;
  const { shapeFlag: s } = e;
  if (A == null)
    A = null;
  else if (G(A))
    t = 16;
  else if (typeof A == "object")
    if (s & 65) {
      const r = A.default;
      r && (r._c && (r._d = !1), xr(e, r()), r._c && (r._d = !0));
      return;
    } else {
      t = 32;
      const r = A._;
      !r && !$l(A) ? A._ctx = JA : r === 3 && JA && (JA.slots._ === 1 ? A._ = 1 : (A._ = 2, e.patchFlag |= 1024));
    }
  else if (W(A)) {
    if (s & 65) {
      xr(e, { default: A });
      return;
    }
    A = { default: A, _ctx: JA }, t = 32;
  } else
    A = String(A), s & 64 ? (t = 16, A = [V(A)]) : t = 8;
  e.children = A, e.shapeFlag |= t;
}
function gf(...e) {
  const A = {};
  for (let t = 0; t < e.length; t++) {
    const s = e[t];
    for (const r in s)
      if (r === "class")
        A.class !== s.class && (A.class = Y([A.class, s.class]));
      else if (r === "style")
        A.style = Ls([A.style, s.style]);
      else if (Rr(r)) {
        const n = A[r], o = s[r];
        o && n !== o && !(G(n) && n.includes(o)) ? A[r] = n ? [].concat(n, o) : o : o == null && n == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Or(r) && (A[r] = o);
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
const hf = Wl();
let pf = 0;
function wf(e, A, t) {
  const s = e.type, r = (A ? A.appContext : e.appContext) || hf, n = {
    uid: pf++,
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
    scope: new Pd(
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
    propsOptions: Ac(s, r),
    emitsOptions: Yl(s, r),
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
  return n.ctx = { _: n }, n.root = A ? A.root : n, n.emit = ju.bind(null, n), e.ce && e.ce(n), n;
}
let SA = null;
const Qf = () => SA || JA;
let vr, vs;
{
  const e = Vr(), A = (t, s) => {
    let r;
    return (r = e[t]) || (r = e[t] = []), r.push(s), (n) => {
      r.length > 1 ? r.forEach((o) => o(n)) : r[0](n);
    };
  };
  vr = A(
    "__VUE_INSTANCE_SETTERS__",
    (t) => SA = t
  ), vs = A(
    "__VUE_SSR_SETTERS__",
    (t) => ys = t
  );
}
const ks = (e) => {
  const A = SA;
  return vr(e), e.scope.on(), () => {
    e.scope.off(), vr(A);
  };
}, ki = () => {
  SA && SA.scope.off(), vr(null);
};
function uc(e) {
  return e.vnode.shapeFlag & 4;
}
let ys = !1;
function Cf(e, A = !1, t = !1) {
  A && vs(A);
  const { props: s, children: r } = e.vnode, n = uc(e);
  ef(e, s, n, A), nf(e, r, t || A);
  const o = n ? bf(e, A) : void 0;
  return A && vs(!1), o;
}
function bf(e, A) {
  const t = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Mu);
  const { setup: s } = t;
  if (s) {
    Se();
    const r = e.setupContext = s.length > 1 ? Ff(e) : null, n = ks(e), o = Ss(
      s,
      e,
      0,
      [
        e.props,
        r
      ]
    ), i = il(o);
    if (ke(), n(), (i || e.sp) && !fs(e) && Ml(e), i) {
      if (o.then(ki, ki), A)
        return o.then((a) => {
          vs(!0);
          try {
            Ti(e, a, A);
          } finally {
            vs(!1);
          }
        }).catch((a) => {
          Xr(a, e, 0);
        });
      e.asyncDep = o;
    } else
      Ti(e, o);
  } else
    fc(e);
}
function Ti(e, A, t) {
  W(A) ? e.type.__ssrInlineRender ? e.ssrRender = A : e.render = A : nA(A) && (e.setupState = Il(A)), fc(e);
}
function fc(e, A, t) {
  const s = e.type;
  e.render || (e.render = s.render || ge);
  {
    const r = ks(e);
    Se();
    try {
      Nu(e);
    } finally {
      ke(), r();
    }
  }
}
const Uf = {
  get(e, A) {
    return LA(e, "get", ""), e[A];
  }
};
function Ff(e) {
  const A = (t) => {
    e.exposed = t || {};
  };
  return {
    attrs: new Proxy(e.attrs, Uf),
    slots: e.slots,
    emit: e.emit,
    expose: A
  };
}
function Zr(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Il(au(e.exposed)), {
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
function mf(e, A = !0) {
  return W(e) ? e.displayName || e.name : e.name || A && e.__name;
}
function xf(e) {
  return W(e) && "__vccOpts" in e;
}
const vf = (e, A) => /* @__PURE__ */ du(e, A, ys), yf = "3.5.43";
/**
* @vue/runtime-dom v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let io;
const Ki = typeof window < "u" && window.trustedTypes;
if (Ki)
  try {
    io = /* @__PURE__ */ Ki.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Bc = io ? (e) => io.createHTML(e) : (e) => e, Ef = "http://www.w3.org/2000/svg", Hf = "http://www.w3.org/1998/Math/MathML", ve = typeof document < "u" ? document : null, Di = ve && /* @__PURE__ */ ve.createElement("template"), If = {
  insert: (e, A, t) => {
    A.insertBefore(e, t || null);
  },
  remove: (e) => {
    const A = e.parentNode;
    A && A.removeChild(e);
  },
  createElement: (e, A, t, s) => {
    const r = A === "svg" ? ve.createElementNS(Ef, e) : A === "mathml" ? ve.createElementNS(Hf, e) : t ? ve.createElement(e, { is: t }) : ve.createElement(e);
    return e === "select" && s && s.multiple != null && r.setAttribute("multiple", s.multiple), r;
  },
  createText: (e) => ve.createTextNode(e),
  createComment: (e) => ve.createComment(e),
  setText: (e, A) => {
    e.nodeValue = A;
  },
  setElementText: (e, A) => {
    e.textContent = A;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => ve.querySelector(e),
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
      Di.innerHTML = Bc(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const i = Di.content;
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
}, _f = /* @__PURE__ */ Symbol("_vtc");
function Lf(e, A, t) {
  const s = e[_f];
  s && (A = (A ? [A, ...s] : [...s]).join(" ")), A == null ? e.removeAttribute("class") : t ? e.setAttribute("class", A) : e.className = A;
}
const Ri = /* @__PURE__ */ Symbol("_vod"), Sf = /* @__PURE__ */ Symbol("_vsh"), kf = /* @__PURE__ */ Symbol(""), Tf = /(?:^|;)\s*display\s*:/;
function Kf(e, A, t) {
  const s = e.style, r = BA(t);
  let n = !1;
  if (t && !r) {
    if (A)
      if (BA(A))
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
      i != null ? Rf(
        e,
        o,
        !BA(A) && A ? A[o] : void 0,
        i
      ) || qt(s, o, i) : qt(s, o, "");
    }
  } else if (r) {
    if (A !== t) {
      const o = s[kf];
      o && (t += ";" + o), s.cssText = t, n = Tf.test(t);
    }
  } else A && e.removeAttribute("style");
  Ri in e && (e[Ri] = n ? s.display : "", e[Sf] && (s.display = "none"));
}
const Vs = /\s*!important$/;
function qt(e, A, t) {
  if (G(t))
    t.forEach((s) => qt(e, A, s));
  else if (t == null && (t = ""), A.startsWith("--"))
    Vs.test(t) ? e.setProperty(A, t.replace(Vs, ""), "important") : e.setProperty(A, t);
  else {
    const s = Df(e, A);
    Vs.test(t) ? e.setProperty(
      XA(s),
      t.replace(Vs, ""),
      "important"
    ) : e[s] = t;
  }
}
const Oi = ["Webkit", "Moz", "ms"], xn = {};
function Df(e, A) {
  const t = xn[A];
  if (t)
    return t;
  let s = xA(A);
  if (s !== "filter" && s in e)
    return xn[A] = s;
  s = Pr(s);
  for (let r = 0; r < Oi.length; r++) {
    const n = Oi[r] + s;
    if (n in e)
      return xn[A] = n;
  }
  return A;
}
function Rf(e, A, t, s) {
  return e.tagName === "TEXTAREA" && (A === "width" || A === "height") && BA(s) && t === s;
}
const Mi = "http://www.w3.org/1999/xlink";
function Ni(e, A, t, s, r, n = Od(A)) {
  s && A.startsWith("xlink:") ? t == null ? e.removeAttributeNS(Mi, A.slice(6, A.length)) : e.setAttributeNS(Mi, A, t) : t == null || n && !cl(t) ? e.removeAttribute(A) : e.setAttribute(
    A,
    n ? "" : we(t) ? String(t) : t
  );
}
function Pi(e, A, t, s, r) {
  if (A === "innerHTML" || A === "textContent") {
    t != null && (e[A] = A === "innerHTML" ? Bc(t) : t);
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
    i === "boolean" ? t = cl(t) : t == null && i === "string" ? (t = "", o = !0) : i === "number" && (t = 0, o = !0);
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
function Of(e, A, t, s) {
  e.removeEventListener(A, t, s);
}
const Vi = /* @__PURE__ */ Symbol("_vei");
function Mf(e, A, t, s, r = null) {
  const n = e[Vi] || (e[Vi] = {}), o = n[A];
  if (s && o)
    o.value = s;
  else {
    const [i, a] = Vf(A);
    if (s) {
      const c = n[A] = Jf(
        s,
        r
      );
      ot(e, i, c, a);
    } else o && (Of(e, i, o, a), n[A] = void 0);
  }
}
const Nf = /(Once|Passive|Capture)$/, Pf = /^on:?(?:Once|Passive|Capture)$/;
function Vf(e) {
  let A, t;
  for (; (t = e.match(Nf)) && !Pf.test(e); )
    A || (A = {}), e = e.slice(0, e.length - t[1].length), A[t[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : XA(e.slice(2)), A];
}
let vn = 0;
const Gf = /* @__PURE__ */ Promise.resolve(), Xf = () => vn || (Gf.then(() => vn = 0), vn = Date.now());
function Jf(e, A) {
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
  return t.value = e, t.attached = Xf(), t;
}
const Gi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Wf = (e, A, t, s, r, n) => {
  const o = r === "svg";
  A === "class" ? Lf(e, s, o) : A === "style" ? Kf(e, t, s) : Rr(A) ? Or(A) || Mf(e, A, t, s, n) : (A[0] === "." ? (A = A.slice(1), !0) : A[0] === "^" ? (A = A.slice(1), !1) : Yf(e, A, s, o)) ? (Pi(e, A, s), !e.tagName.includes("-") && (A === "value" || A === "checked" || A === "selected") && Ni(e, A, s, o, n, A !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (jf(e, A) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(A) || !BA(s))) ? Pi(e, xA(A), s, n, A) : (A === "true-value" ? e._trueValue = s : A === "false-value" && (e._falseValue = s), Ni(e, A, s, o));
};
function Yf(e, A, t, s) {
  if (s)
    return !!(A === "innerHTML" || A === "textContent" || A in e && Gi(A) && W(t));
  if (A === "spellcheck" || A === "draggable" || A === "translate" || A === "autocorrect" || A === "sandbox" && e.tagName === "IFRAME" || A === "form" || A === "list" && e.tagName === "INPUT" || A === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (A === "width" || A === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return Gi(A) && BA(t) ? !1 : A in e;
}
function jf(e, A) {
  const t = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!t)
    return !1;
  const s = xA(A);
  return Array.isArray(t) ? t.some((r) => xA(r) === s) : Object.keys(t).some((r) => xA(r) === s);
}
const Xi = {};
// @__NO_SIDE_EFFECTS__
function Ji(e, A, t) {
  let s = /* @__PURE__ */ mu(e, A);
  Mr(s) && (s = CA({}, s, A));
  class r extends zo {
    constructor(o) {
      super(s, o, t);
    }
  }
  return r.def = s, r;
}
const Zf = typeof HTMLElement < "u" ? HTMLElement : class {
};
class zo extends Zf {
  constructor(A, t = {}, s = zi) {
    super(), this._def = A, this._props = t, this._createApp = s, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._patching = !1, this._dirty = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._styleAnchors = /* @__PURE__ */ new WeakMap(), this._ob = null, this.shadowRoot && s !== zi ? this._root = this.shadowRoot : A.shadowRoot !== !1 ? (this.attachShadow(
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
      if (A instanceof zo) {
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
    this._connected = !1, Ll(() => {
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
        for (const a in n) {
          const c = n[a];
          (c === Number || c && c.type === Number) && (a in this._props && (this._props[a] = gi(this._props[a])), (i || (i = /* @__PURE__ */ Object.create(null)))[xA(a)] = !0);
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
          get: () => Hl(t[s])
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
    let s = t ? this.getAttribute(A) : Xi;
    const r = xA(A);
    t && this._numberProps && this._numberProps[r] && (s = gi(s)), this._setProp(r, s, !1, !0);
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
    if (t !== this._props[A] && (this._dirty = !0, t === Xi ? delete this._props[A] : (this._props[A] = t, A === "key" && this._app && (this._app._ceVNode.key = t)), r && this._instance && this._update(), s)) {
      const n = this._ob;
      n && (this._processMutations(n.takeRecords()), n.disconnect()), t === !0 ? this.setAttribute(XA(A), "") : typeof t == "string" || typeof t == "number" ? this.setAttribute(XA(A), t + "") : t || this.removeAttribute(XA(A)), n && n.observe(this, { attributes: !0 });
    }
  }
  _update() {
    const A = this._createVNode();
    this._app && (A.appContext = this._app._context), sB(A, this._root);
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
            const c = t + "-s", d = document.createTreeWalker(a, 1);
            a.setAttribute(c, "");
            let l;
            for (; l = d.nextNode(); )
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
const yr = (e) => {
  const A = e.props["onUpdate:modelValue"] || !1;
  return G(A) ? (t) => ur(A, t) : A;
};
function zf(e) {
  e.target.composing = !0;
}
function Wi(e) {
  const A = e.target;
  A.composing && (A.composing = !1, A.dispatchEvent(new Event("input")));
}
const lt = /* @__PURE__ */ Symbol("_assign"), Gs = /* @__PURE__ */ Symbol("_initialValue");
function yn(e, A, t) {
  return A && (e = e.trim()), t && (e = Do(e)), e;
}
const gr = {
  created(e, { modifiers: { lazy: A, trim: t, number: s } }, r) {
    e.parentNode && (e.type === "text" ? e[Gs] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[Gs] = e.defaultValue.replace(/\r\n?/g, `
`))), e[lt] = yr(r);
    const n = s || r.props && r.props.type === "number";
    ot(e, A ? "change" : "input", (o) => {
      o.target.composing || e[lt](yn(e.value, t, n));
    }), (t || n) && ot(e, "change", () => {
      e.value = yn(e.value, t, n);
    }), A || (ot(e, "compositionstart", zf), ot(e, "compositionend", Wi), ot(e, "change", Wi));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: A, modifiers: { trim: t, number: s } }) {
    const r = A ?? "", n = e[Gs];
    delete e[Gs], n !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== n ? e[lt](yn(e.value, t, s)) : e.value = r;
  },
  beforeUpdate(e, { value: A, oldValue: t, modifiers: { lazy: s, trim: r, number: n } }, o) {
    if (e[lt] = yr(o), e.composing) return;
    const i = (n || e.type === "number") && !/^0\d/.test(e.value) ? Do(e.value) : e.value, a = A ?? "";
    if (i === a)
      return;
    const c = e.getRootNode();
    (c instanceof Document || c instanceof ShadowRoot) && c.activeElement === e && e.type !== "range" && (s && A === t || r && e.value.trim() === a) || (e.value = a);
  }
}, DA = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, A, t) {
    e[lt] = yr(t), ot(e, "change", () => {
      const s = e._modelValue, r = $f(e), n = e.checked, o = e[lt];
      if (G(s)) {
        const i = dl(s, r), a = i !== -1;
        if (n && !a)
          o(s.concat(r));
        else if (!n && a) {
          const c = [...s];
          c.splice(i, 1), o(c);
        }
      } else if (Tt(s)) {
        const i = new Set(s);
        n ? i.add(r) : i.delete(r), o(i);
      } else
        o(gc(e, n));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: Yi,
  beforeUpdate(e, A, t) {
    e[lt] = yr(t), Yi(e, A, t);
  }
};
function Yi(e, { value: A, oldValue: t }, s) {
  e._modelValue = A;
  let r;
  if (G(A))
    r = dl(A, s.props.value) > -1;
  else if (Tt(A))
    r = A.has(s.props.value);
  else {
    if (A === t) return;
    r = Rt(A, gc(e, !0));
  }
  e.checked !== r && (e.checked = r);
}
function $f(e) {
  return "_value" in e ? e._value : e.value;
}
function gc(e, A) {
  const t = A ? "_trueValue" : "_falseValue";
  return t in e ? e[t] : A;
}
const qf = ["ctrl", "shift", "alt", "meta"], AB = {
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
  exact: (e, A) => qf.some((t) => e[`${t}Key`] && !A.includes(t))
}, As = (e, A) => {
  if (!e) return e;
  const t = e._withMods || (e._withMods = {}), s = A.join(".");
  return t[s] || (t[s] = (r, ...n) => {
    for (let o = 0; o < A.length; o++) {
      const i = AB[A[o]];
      if (i && i(r, A)) return;
    }
    return e(r, ...n);
  });
}, eB = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, ji = (e, A) => {
  const t = e._withKeys || (e._withKeys = {}), s = A.join(".");
  return t[s] || (t[s] = (r) => {
    if (!("key" in r))
      return;
    const n = XA(r.key);
    if (A.some(
      (o) => o === n || eB[o] === n
    ))
      return e(r);
  });
}, tB = /* @__PURE__ */ CA({ patchProp: Wf }, If);
let Zi;
function hc() {
  return Zi || (Zi = af(tB));
}
const sB = (...e) => {
  hc().render(...e);
}, zi = (...e) => {
  const A = hc().createApp(...e), { mount: t } = A;
  return A.mount = (s) => {
    const r = nB(s);
    if (!r) return;
    const n = A._component;
    !W(n) && !n.render && !n.template && (n.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const o = t(r, !1, rB(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), o;
  }, A;
};
function rB(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function nB(e) {
  return BA(e) ? document.querySelector(e) : e;
}
const oB = ".bse-overlay[data-v-e3f0b15c]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:9200;display:flex;flex-direction:column;background:#000000d9}.bse-toolbar[data-v-e3f0b15c]{display:flex;align-items:center;gap:6px;padding:10px 16px;background:#1a2230;border-bottom:1px solid rgba(255,255,255,.1)}.bse-btn[data-v-e3f0b15c]{font-size:12px;padding:4px 10px;border-radius:4px;border:1px solid rgba(255,255,255,.15);background:transparent;color:#bbc;cursor:pointer}.bse-btn[data-v-e3f0b15c]:hover:not(:disabled){background:#ffffff14}.bse-btn[data-v-e3f0b15c]:disabled{opacity:.4;cursor:default}.bse-btn.active[data-v-e3f0b15c]{background:#8af3;border-color:#8af;color:#fff}.bse-btn--apply[data-v-e3f0b15c]{border-color:#2ecc7180;color:#2ecc71}.bse-color[data-v-e3f0b15c]{width:20px;height:20px;padding:0;border-radius:50%;border:2px solid rgba(255,255,255,.2);cursor:pointer}.bse-color.active[data-v-e3f0b15c]{border-color:#fff;box-shadow:0 0 0 2px #8af9}.bse-sep[data-v-e3f0b15c]{width:1px;height:18px;background:#ffffff26;margin:0 4px}.bse-spacer[data-v-e3f0b15c]{flex:1}.bse-stage[data-v-e3f0b15c]{flex:1;min-height:0;display:flex;align-items:center;justify-content:center;padding:16px}.bse-canvas[data-v-e3f0b15c]{max-width:100%;max-height:calc(100vh - 90px);cursor:crosshair;touch-action:none;box-shadow:0 0 0 1px #ffffff26}", $o = (e, A) => {
  const t = e.__vccOpts || e;
  for (const [s, r] of A)
    t[s] = r;
  return t;
}, iB = [
  { id: "pen", label: "펜" },
  { id: "rect", label: "사각형" },
  { id: "arrow", label: "화살표" },
  { id: "text", label: "글자" }
], $i = ["#ff3b30", "#ffcc00", "#34c759", "#0a84ff", "#ffffff"], aB = {
  name: "BugfixScreenshotEditor",
  props: {
    src: { type: String, required: !0 }
  },
  emits: ["apply", "cancel"],
  data() {
    return {
      tools: iB,
      colors: $i,
      tool: "pen",
      color: $i[0],
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
}, lB = { class: "bse-overlay" }, cB = { class: "bse-toolbar" }, dB = ["onClick"], uB = ["title", "onClick"], fB = ["disabled"], BB = ["disabled"], gB = { class: "bse-stage" };
function hB(e, A, t, s, r, n) {
  return p(), w("div", lB, [
    u("div", cB, [
      (p(!0), w(M, null, q(r.tools, (o) => (p(), w("button", {
        key: o.id,
        class: Y(["bse-btn", { active: r.tool === o.id }]),
        onClick: (i) => r.tool = o.id
      }, b(o.label), 11, dB))), 128)),
      A[8] || (A[8] = u("span", { class: "bse-sep" }, null, -1)),
      (p(!0), w(M, null, q(r.colors, (o) => (p(), w("button", {
        key: o,
        class: Y(["bse-color", { active: r.color === o }]),
        style: Ls({ background: o }),
        title: o,
        onClick: (i) => r.color = o
      }, null, 14, uB))), 128)),
      A[9] || (A[9] = u("span", { class: "bse-sep" }, null, -1)),
      u("button", {
        class: "bse-btn",
        disabled: !r.shapes.length,
        onClick: A[0] || (A[0] = (...o) => n.undo && n.undo(...o))
      }, "되돌리기", 8, fB),
      u("button", {
        class: "bse-btn",
        disabled: !r.shapes.length,
        onClick: A[1] || (A[1] = (...o) => n.clearAll && n.clearAll(...o))
      }, "모두 지우기", 8, BB),
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
    u("div", gB, [
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
const pB = /* @__PURE__ */ $o(aB, [["render", hB], ["styles", [oB]], ["__scopeId", "data-v-e3f0b15c"]]), qi = {
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
  "bugfix-kit 관리": "bugfix-kit console",
  "키 지우기": "Clear key",
  "저장된 운영자 키 지우기": "Forget the saved admin key",
  "운영자 키": "Admin key",
  들어가기: "Enter",
  "⏳ 잠시만요": "⏳ One moment",
  "입력한 키는 그대로 둡니다. 계속 이 화면이면 앱 로그의 [bugfix-kit] 줄이나 콘솔 '점검' 탭을 보세요.": "Your key is kept. If this stays, check the app log lines tagged [bugfix-kit] or the Checks tab.",
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
  "으로 갖고 있습니다(키트 저장소 태그 bugfix/v{n}). 버전마다 프론트+백엔드+DB 사본을 띄워": "even before it goes to the remote (kit repo tag bugfix/v{n}). Each version can be spun up as front+backend+DB copy and",
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
}, zr = [
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
zr.push(
  [/\((중지됨|떠 있음|빌드 중|시작 중|대기|실패|없음)\)/, (e, A) => `(${{ 중지됨: "stopped", "떠 있음": "up", "빌드 중": "building", "시작 중": "starting", 대기: "queued", 실패: "failed", 없음: "none" }[A]})`],
  [/"(자동 병합까지|PR\/MR 까지|원격 브랜치만|보관만\(이 서버\)|자동 병합)"/, (e, A) => `"${{ "자동 병합까지": "auto-merge", "PR/MR 까지": "up to PR/MR", "원격 브랜치만": "branch only", "보관만(이 서버)": "keep only (this server)", "자동 병합": "auto-merge" }[A]}"`]
);
zr.push([/· 키트 저장소 안\(원격에 없음\)/, "· only on this server (not on remote)"], [/· 원격에 푸시됨\(PR 없음\)/, "· pushed to remote (no PR)"], [/^scope: /, "scope: "]);
zr.push([/^바뀐 파일 \((\d+)\)$/, "Changed files ($1)"]);
const wB = [[/(\d+)초 전/g, "$1 s ago"], [/(\d+)분 전/g, "$1 min ago"], [/(\d+)시간 전/g, "$1 h ago"], [/(\d+)일 전/g, "$1 d ago"]], Aa = ".bf-md,.bf-log,.bf-diff,pre,code,textarea,.prob,.ktree,.kg-info,.kg-tip,.brv-text,.brv-chat__text,.brv-logbox,.brv-ai__summary,.brv-suggest__text,.brv-problem,.brv-log-msg,.brv-log-payload,.brv-shots__bigcap,[data-i18n-skip],#kLegend,.shots figcaption,.log";
function qo() {
  try {
    const A = localStorage.getItem("bugfix-lang");
    if (A === "ko" || A === "en") return A;
  } catch {
  }
  return (typeof navigator < "u" && (navigator.language || "") || "ko").toLowerCase().startsWith("ko") ? "ko" : "en";
}
function En(e) {
  const A = String(e ?? ""), t = A.match(/^(\s*)([\s\S]*?)(\s*)$/);
  let s = t[2];
  if (!s || !/[가-힣]/.test(s)) return A;
  if (Object.prototype.hasOwnProperty.call(qi, s)) return t[1] + qi[s] + t[3];
  if (/^\[.+\] /.test(s)) return A;
  for (const [r, n] of zr)
    r.lastIndex = 0, r.test(s) && (r.lastIndex = 0, s = s.replace(r, n));
  for (const [r, n] of wB) s = s.replace(r, n);
  return t[1] + s + t[3];
}
const pc = ["placeholder", "title", "aria-label"];
function gs(e) {
  if (e.nodeType === 3) {
    const A = e.parentElement;
    if (!A || ["SCRIPT", "STYLE"].includes(A.tagName) || A.closest(Aa)) return;
    const t = En(e.nodeValue);
    t !== e.nodeValue && (e.__ko = e.__ko ?? e.nodeValue, e.nodeValue = t);
  } else if (e.nodeType === 1) {
    if (e.closest && e.closest(Aa)) return;
    for (const A of pc) {
      const t = e.getAttribute && e.getAttribute(A);
      if (t) {
        const s = En(t);
        s !== t && e.setAttribute(A, s);
      }
    }
    if (e.tagName === "INPUT" && (e.type === "button" || e.type === "submit") && e.value) {
      const A = En(e.value);
      A !== e.value && (e.value = A);
    }
  }
}
function ea(e) {
  const A = document.createTreeWalker(e, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT);
  let t = (e.nodeType === 1 && gs(e), A.nextNode());
  for (; t; )
    gs(t), t = A.nextNode();
}
function wc(e, A = qo()) {
  if (!e || A !== "en") return () => {
  };
  ea(e);
  const t = new MutationObserver((s) => {
    for (const r of s)
      if (r.type === "characterData") gs(r.target);
      else if (r.type === "attributes") gs(r.target);
      else for (const n of r.addedNodes)
        n.nodeType === 3 ? gs(n) : n.nodeType === 1 && ea(n);
  });
  return t.observe(e, { childList: !0, subtree: !0, characterData: !0, attributes: !0, attributeFilter: pc }), () => t.disconnect();
}
const QB = '.bug-target-tool[data-v-aeda504d]{margin-left:10px;margin-right:12px;font-size:11px;color:#aab;display:inline-flex;align-items:center;gap:4px;cursor:pointer;white-space:nowrap}.bug-target-tool input[data-v-aeda504d]{margin:0}.bug-target[data-v-aeda504d]{margin-left:auto;margin-right:12px;display:inline-flex;border:1px solid rgba(255,255,255,.18);border-radius:6px;overflow:hidden}.bug-target button[data-v-aeda504d]{border:0;padding:4px 11px;font-size:11px;background:transparent;color:#aab;cursor:pointer}.bug-target button+button[data-v-aeda504d]{border-left:1px solid rgba(255,255,255,.18)}.bug-target__on[data-v-aeda504d]{background:#88aaff47;color:#fff}.screenshot-hint[data-v-aeda504d]{margin-top:4px;font-size:11px!important;color:#7f8a99!important}.bug-report-overlay[data-v-aeda504d]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:9100;background:#0000008c;display:flex;align-items:center;justify-content:center}.bug-report-modal[data-v-aeda504d]{width:640px;max-width:calc(100vw - 32px);max-height:90vh;background:var(--popup-bg, #1e1e2e);border-radius:10px;box-shadow:0 8px 32px #0009;display:flex;flex-direction:column;overflow:hidden}.bug-report-header[data-v-aeda504d]{display:flex;align-items:center;justify-content:space-between;padding:12px 16px;border-bottom:1px solid var(--primary-color, #3a3a5c);flex-shrink:0}.bug-report-title[data-v-aeda504d]{font-size:14px;font-weight:500;color:var(--text, #e0e0e0)}.bug-report-shortcut[data-v-aeda504d]{font-size:10px;font-weight:400;color:#666;margin-left:6px;background:#ffffff0f;border:1px solid rgba(255,255,255,.1);border-radius:4px;padding:1px 5px;letter-spacing:.03em}.bug-report-close[data-v-aeda504d]{background:none;border:none;color:#aaa;font-size:16px;cursor:pointer;line-height:1;padding:4px 6px}.bug-report-close[data-v-aeda504d]:hover{color:#fff}.bug-report-tabs[data-v-aeda504d]{display:flex;border-bottom:1px solid rgba(255,255,255,.07);flex-shrink:0}.bug-tab[data-v-aeda504d]{padding:8px 16px;font-size:12px;color:#888;background:none;border:none;cursor:pointer;position:relative;display:flex;align-items:center;gap:5px;transition:color .15s}.bug-tab[data-v-aeda504d]:hover{color:#ccc}.bug-tab.active[data-v-aeda504d]{color:var(--text, #e0e0e0)}.bug-tab.active[data-v-aeda504d]:after{content:"";position:absolute;bottom:-1px;left:0;right:0;height:2px;background:var(--primary-color, #6060cc)}.bug-tab-badge[data-v-aeda504d]{background:#c03030;color:#fff;border-radius:10px;font-size:10px;padding:0 5px;min-width:16px;text-align:center}.bug-report-body[data-v-aeda504d]{padding:14px 16px;overflow-y:auto;flex:1;display:flex;flex-direction:column;gap:14px}.bug-report-section[data-v-aeda504d]{display:flex;flex-direction:column;gap:6px}.bug-report-label[data-v-aeda504d]{font-size:11px;color:var(--text-sub, #9090a0);text-transform:uppercase;letter-spacing:.05em;display:flex;align-items:center;gap:10px}.screenshot-wrap[data-v-aeda504d]{border-radius:6px;overflow:hidden;border:1px solid rgba(255,255,255,.1);background:#111;max-height:180px;display:flex;align-items:center;justify-content:center}.screenshot-img[data-v-aeda504d]{width:100%;max-height:180px;object-fit:contain;display:block}.screenshot-placeholder[data-v-aeda504d]{color:#555;font-size:13px;padding:24px}.bug-report-textarea[data-v-aeda504d]{width:100%;background:#ffffff0d;border:1px solid rgba(255,255,255,.1);border-radius:6px;color:var(--text, #e0e0e0);font-size:13px;padding:8px 10px;resize:vertical;box-sizing:border-box;font-family:inherit}.bug-report-textarea[data-v-aeda504d]::placeholder{color:#555}.bug-report-textarea[data-v-aeda504d]:focus{outline:none;border-color:var(--primary-color, #5555aa)}.included-chips[data-v-aeda504d]{display:flex;flex-wrap:wrap;gap:6px}.chip[data-v-aeda504d]{font-size:11px;padding:3px 8px;border-radius:12px;background:#ffffff12;color:#bbb;border:1px solid rgba(255,255,255,.1)}.log-filter-group[data-v-aeda504d]{display:flex;gap:8px;margin-left:auto}.log-filter-chip[data-v-aeda504d]{font-size:11px;display:flex;align-items:center;gap:3px;cursor:pointer;color:#888}.log-filter-chip input[data-v-aeda504d]{cursor:pointer}.log-filter-chip.error[data-v-aeda504d]{color:#e06060}.log-filter-chip.warn[data-v-aeda504d]{color:#c8a040}.log-filter-chip.log[data-v-aeda504d]{color:#6080b0}.log-list[data-v-aeda504d]{border:1px solid rgba(255,255,255,.08);border-radius:6px;background:#0000004d;max-height:340px;overflow-y:auto;font-size:11px;font-family:Courier New,monospace}.log-item[data-v-aeda504d]{display:flex;gap:6px;padding:3px 8px;border-bottom:1px solid rgba(255,255,255,.04)}.log-item[data-v-aeda504d]:last-child{border-bottom:none}.log-item--error[data-v-aeda504d]{background:#c83c3c14}.log-item--warn[data-v-aeda504d]{background:#c8a02814}.log-time[data-v-aeda504d]{color:#555;flex-shrink:0}.log-badge-lv[data-v-aeda504d]{flex-shrink:0;width:36px;font-weight:700}.log-item--error .log-badge-lv[data-v-aeda504d]{color:#e06060}.log-item--warn .log-badge-lv[data-v-aeda504d]{color:#c8a040}.log-item--log .log-badge-lv[data-v-aeda504d]{color:#6080b0}.log-msg[data-v-aeda504d]{color:#bbb;word-break:break-all;white-space:pre-wrap}.log-empty[data-v-aeda504d]{padding:16px;color:#555;text-align:center;font-size:12px}.net-list[data-v-aeda504d]{border:1px solid rgba(255,255,255,.08);border-radius:6px;background:#0000004d;max-height:360px;overflow-y:auto;font-size:11px;font-family:Courier New,monospace}.net-item[data-v-aeda504d]{display:flex;align-items:center;gap:6px;padding:4px 8px;border-bottom:1px solid rgba(255,255,255,.04);cursor:pointer}.net-item[data-v-aeda504d]:hover{background:#ffffff0a}.net-item[data-v-aeda504d]:last-child{border-bottom:none}.net-item--error[data-v-aeda504d]{background:#c83c3c12}.net-status[data-v-aeda504d]{flex-shrink:0;width:36px;font-weight:700;text-align:center;border-radius:3px;padding:1px 0;font-size:10px}.net-status.status-2xx[data-v-aeda504d]{color:#60c860}.net-status.status-3xx[data-v-aeda504d]{color:#c8c040}.net-status.status-4xx[data-v-aeda504d]{color:#e08040}.net-status.status-5xx[data-v-aeda504d],.net-status.status-err[data-v-aeda504d]{color:#e06060}.net-method[data-v-aeda504d]{flex-shrink:0;width:42px;color:#88c;font-weight:700}.net-url[data-v-aeda504d]{flex:1;color:#ccc;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.net-dur[data-v-aeda504d]{flex-shrink:0;color:#777;width:52px;text-align:right}.net-time[data-v-aeda504d]{flex-shrink:0;color:#555;width:56px;text-align:right}.net-detail[data-v-aeda504d]{background:#0006;padding:6px 12px;border-bottom:1px solid rgba(255,255,255,.06);color:#aaa;font-size:10px;display:flex;flex-direction:column;gap:4px}.net-detail code[data-v-aeda504d]{display:block;white-space:pre-wrap;word-break:break-all;color:#89b;margin-top:2px}.net-error-msg[data-v-aeda504d]{color:#e06060}.env-group[data-v-aeda504d]{background:#ffffff08;border:1px solid rgba(255,255,255,.07);border-radius:6px;overflow:hidden}.env-group+.env-group[data-v-aeda504d]{margin-top:8px}.env-group-title[data-v-aeda504d]{font-size:10px;text-transform:uppercase;letter-spacing:.06em;color:#666;padding:5px 10px;background:#ffffff0a;border-bottom:1px solid rgba(255,255,255,.06)}.env-row[data-v-aeda504d]{display:flex;justify-content:space-between;padding:4px 10px;font-size:11px;font-family:Courier New,monospace;border-bottom:1px solid rgba(255,255,255,.04)}.env-row[data-v-aeda504d]:last-child{border-bottom:none}.env-row span[data-v-aeda504d]:first-child{color:#777;flex-shrink:0;margin-right:12px}.env-row span[data-v-aeda504d]:last-child{color:#ccc;text-align:right;word-break:break-all}.chip--ok[data-v-aeda504d]{border-color:#3cb43c66;color:#80e080}.chip--err[data-v-aeda504d]{border-color:#c83c3c66;color:#e08080}.log-source-toggle[data-v-aeda504d]{display:flex;gap:0;border:1px solid rgba(255,255,255,.12);border-radius:6px;overflow:hidden;flex-shrink:0;align-self:flex-start}.log-src-btn[data-v-aeda504d]{padding:5px 16px;font-size:12px;background:transparent;border:none;color:#777;cursor:pointer;display:flex;align-items:center;gap:5px;transition:background .15s,color .15s}.log-src-btn+.log-src-btn[data-v-aeda504d]{border-left:1px solid rgba(255,255,255,.12)}.log-src-btn.active[data-v-aeda504d]{background:#6464c833;color:#ccc}.log-src-btn[data-v-aeda504d]:hover:not(.active){background:#ffffff0d}.log-src-spin[data-v-aeda504d]{animation:spin-aeda504d 1s linear infinite;display:inline-block}.log-src-err[data-v-aeda504d]{color:#e06060;font-weight:700}@keyframes spin-aeda504d{to{transform:rotate(360deg)}}.log-logger[data-v-aeda504d]{flex-shrink:0;max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#668;margin-right:4px}.log-empty--error[data-v-aeda504d]{color:#e06060}.event-list[data-v-aeda504d]{border:1px solid rgba(255,255,255,.08);border-radius:4px;background:#00000040;max-height:180px;overflow-y:auto;font-size:11px;font-family:Courier New,monospace}.event-item[data-v-aeda504d]{display:flex;gap:10px;padding:3px 8px;border-bottom:1px solid rgba(255,255,255,.04)}.event-item[data-v-aeda504d]:last-child{border-bottom:none}.event-time[data-v-aeda504d]{color:#555;flex-shrink:0}.event-type[data-v-aeda504d]{color:#9ad}.env-list[data-v-aeda504d]{display:flex;flex-wrap:wrap;gap:4px;justify-content:flex-end}.env-tag[data-v-aeda504d]{background:#6478c826;border:1px solid rgba(100,120,200,.25);border-radius:3px;padding:1px 6px;font-size:10px;color:#aac}.severity-group[data-v-aeda504d]{display:flex;gap:6px}.severity-btn[data-v-aeda504d]{padding:4px 12px;font-size:11px;border-radius:12px;border:1px solid rgba(255,255,255,.15);background:transparent;color:#777;cursor:pointer;transition:background .15s,color .15s,border-color .15s}.severity-btn[data-v-aeda504d]:hover{color:#ccc}.severity-btn--critical.active[data-v-aeda504d]{background:#b41e1e4d;border-color:#b01e1e;color:#f08080}.severity-btn--high.active[data-v-aeda504d]{background:#c864144d;border-color:#c86414;color:#f0a060}.severity-btn--medium.active[data-v-aeda504d]{background:#b4a0144d;border-color:#b4a014;color:#e0d060}.severity-btn--low.active[data-v-aeda504d]{background:#28783c4d;border-color:#287840;color:#80d090}.mutation-type[data-v-aeda504d]{flex-shrink:0;max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#88c;font-weight:700;margin-right:4px}.mutation-payload[data-v-aeda504d]{color:#79a;font-size:10px}.route-list[data-v-aeda504d]{border:1px solid rgba(255,255,255,.08);border-radius:6px;background:#0000004d;max-height:200px;overflow-y:auto;font-size:11px;font-family:Courier New,monospace}.route-item[data-v-aeda504d]{display:flex;align-items:center;gap:6px;padding:3px 8px;border-bottom:1px solid rgba(255,255,255,.04)}.route-item[data-v-aeda504d]:last-child{border-bottom:none}.route-from[data-v-aeda504d]{color:#888;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:180px}.route-arrow[data-v-aeda504d]{color:#555;flex-shrink:0}.route-to[data-v-aeda504d]{color:#aac;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1}.bug-btn-copy[data-v-aeda504d]{padding:7px 14px;border-radius:6px;border:1px solid rgba(255,255,255,.15);background:transparent;color:#aaa;font-size:12px;cursor:pointer;display:flex;align-items:center;gap:5px;margin-right:auto;transition:background .15s,color .15s}.bug-btn-copy[data-v-aeda504d]:hover:not(:disabled){background:#ffffff12;color:#fff}.bug-btn-copy[data-v-aeda504d]:disabled{opacity:.4;cursor:default}.bug-btn-sm[data-v-aeda504d]{font-size:11px;padding:2px 8px;border-radius:4px;border:1px solid rgba(255,255,255,.15);background:transparent;color:#aaa;cursor:pointer}.bug-btn-sm[data-v-aeda504d]:hover:not(:disabled){background:#ffffff14}.bug-btn-sm[data-v-aeda504d]:disabled{opacity:.4;cursor:default}.bug-report-footer[data-v-aeda504d]{display:flex;justify-content:flex-end;gap:8px;padding:12px 16px;border-top:1px solid rgba(255,255,255,.06);flex-shrink:0}.bug-btn-cancel[data-v-aeda504d]{padding:7px 16px;border-radius:6px;border:1px solid rgba(255,255,255,.15);background:transparent;color:#aaa;font-size:13px;cursor:pointer}.bug-btn-cancel[data-v-aeda504d]:hover{background:#ffffff12}.bug-btn-download[data-v-aeda504d]{padding:7px 18px;border-radius:6px;border:none;background:#c03030;color:#fff;font-size:13px;font-weight:500;cursor:pointer}.bug-btn-download[data-v-aeda504d]:hover:not(:disabled){background:#d04040}.bug-btn-download[data-v-aeda504d]:disabled{opacity:.4;cursor:default}.bug-capture-overlay[data-v-aeda504d]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:99999;display:flex;align-items:center;justify-content:center;background:#00000073;-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px)}.bug-capture-spinner[data-v-aeda504d]{display:flex;align-items:center;gap:10px;background:#141c28eb;border:1px solid rgba(255,255,255,.1);border-radius:10px;padding:16px 24px;color:#a8c0d8;font-size:13px;letter-spacing:.3px}.bug-capture-spin[data-v-aeda504d]{display:inline-block;width:16px;height:16px;border:2px solid rgba(136,170,255,.3);border-top-color:#8af;border-radius:50%;animation:bug-spin-aeda504d .7s linear infinite;flex-shrink:0}@keyframes bug-spin-aeda504d{to{transform:rotate(360deg)}}.bug-btn-save[data-v-aeda504d]{display:inline-flex;align-items:center;gap:5px;padding:5px 12px;border-radius:5px;border:1px solid rgba(46,204,113,.4);background:#2ecc711a;color:#2ecc71;font-size:11px;cursor:pointer;transition:background .15s}.bug-btn-save[data-v-aeda504d]:hover:not(:disabled){background:#2ecc7133}.bug-btn-save[data-v-aeda504d]:disabled{opacity:.5;cursor:default}.bug-btn-list[data-v-aeda504d]{padding:5px 10px;border-radius:5px;border:1px solid rgba(255,255,255,.1);background:#ffffff0a;color:#789;font-size:11px;cursor:pointer;margin-right:auto}.bug-btn-list[data-v-aeda504d]:hover{background:#ffffff14;color:#abc}', CB = [
  { value: "CRITICAL", label: "치명적" },
  { value: "HIGH", label: "높음" },
  { value: "MEDIUM", label: "보통" },
  { value: "LOW", label: "낮음" }
], bB = {
  name: "BugfixReportModal",
  components: { ScreenshotEditor: pB },
  // kit: createBugfix() 결과. Web Component 로 쓸 때는 엘리먼트 프로퍼티(el.kit = kit)로 들어온다
  props: { kit: { type: Object, default: null } },
  emits: ["open-viewer"],
  expose: ["open", "close"],
  mounted() {
    this.__i18nStop = wc(this.$el.getRootNode(), this.kit && this.kit.options && this.kit.options.lang || qo()), this._onKeydown = (e) => {
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
      severityOptions: CB,
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
}, UB = { class: "bugfix-root" }, FB = {
  key: 0,
  class: "bug-capture-overlay"
}, mB = { class: "bug-report-modal" }, xB = { class: "bug-report-header" }, vB = { class: "bug-report-title" }, yB = {
  key: 0,
  class: "bug-report-shortcut"
}, EB = {
  key: 0,
  class: "bug-target",
  title: "어디에 대한 신고인지"
}, HB = ["onClick"], IB = {
  key: 1,
  class: "bug-target-tool",
  title: "신고 창·목록 등 이 도구 자체의 문제일 때 (앱 코드 수정 대상이 아니고 운영자가 처리)"
}, _B = { class: "bug-report-tabs" }, LB = ["onClick"], SB = {
  key: 0,
  class: "bug-tab-badge"
}, kB = { class: "bug-report-body" }, TB = { class: "bug-report-section" }, KB = { class: "bug-report-label" }, DB = ["disabled"], RB = ["disabled"], OB = ["src"], MB = {
  key: 1,
  class: "screenshot-placeholder"
}, NB = {
  key: 2,
  class: "screenshot-placeholder"
}, PB = { class: "bug-report-section" }, VB = { class: "severity-group" }, GB = ["onClick"], XB = { class: "bug-report-section" }, JB = { class: "bug-report-section" }, WB = { class: "bug-report-section" }, YB = { class: "bug-report-section" }, jB = { class: "included-chips" }, ZB = { class: "chip" }, zB = { class: "chip" }, $B = {
  key: 0,
  class: "chip"
}, qB = {
  key: 1,
  class: "chip"
}, Ag = { class: "log-source-toggle" }, eg = {
  key: 0,
  class: "log-src-spin"
}, tg = {
  key: 1,
  class: "log-src-err"
}, sg = {
  key: 0,
  class: "bug-report-section"
}, rg = { class: "bug-report-label" }, ng = { class: "log-filter-group" }, og = { class: "log-filter-chip error" }, ig = { class: "log-filter-chip warn" }, ag = { class: "log-filter-chip log" }, lg = { class: "log-list" }, cg = { class: "log-time" }, dg = { class: "log-badge-lv" }, ug = { class: "log-msg" }, fg = {
  key: 0,
  class: "log-empty"
}, Bg = {
  key: 1,
  class: "bug-report-section"
}, gg = { class: "bug-report-label" }, hg = { class: "log-filter-group" }, pg = { class: "log-filter-chip error" }, wg = { class: "log-filter-chip warn" }, Qg = { class: "log-filter-chip log" }, Cg = {
  key: 0,
  class: "log-empty"
}, bg = {
  key: 1,
  class: "log-empty"
}, Ug = {
  key: 2,
  class: "log-empty log-empty--error"
}, Fg = {
  key: 3,
  class: "log-list"
}, mg = { class: "log-time" }, xg = { class: "log-badge-lv" }, vg = { class: "log-logger" }, yg = { class: "log-msg" }, Eg = {
  key: 0,
  class: "log-empty"
}, Hg = {
  key: 2,
  class: "bug-report-section"
}, Ig = { class: "net-list" }, _g = ["onClick"], Lg = { class: "net-method" }, Sg = { class: "net-url" }, kg = { class: "net-dur" }, Tg = { class: "net-time" }, Kg = {
  key: 0,
  class: "net-detail"
}, Dg = { key: 0 }, Rg = { key: 1 }, Og = { key: 2 }, Mg = {
  key: 3,
  class: "net-error-msg"
}, Ng = {
  key: 0,
  class: "log-empty"
}, Pg = { class: "bug-report-section" }, Vg = { class: "log-list" }, Gg = { class: "log-time" }, Xg = { class: "mutation-type" }, Jg = {
  key: 0,
  class: "log-msg mutation-payload"
}, Wg = {
  key: 0,
  class: "log-empty"
}, Yg = { class: "bug-report-section" }, jg = { class: "route-list" }, Zg = { class: "log-time" }, zg = { class: "route-from" }, $g = { class: "route-to" }, qg = {
  key: 0,
  class: "log-empty"
}, Ah = {
  key: 0,
  class: "bug-report-section"
}, eh = { class: "env-group" }, th = {
  key: 1,
  class: "bug-report-section"
}, sh = { class: "env-group" }, rh = { class: "env-row" }, nh = { class: "env-row" }, oh = { class: "env-row" }, ih = { class: "env-row" }, ah = { class: "env-row" }, lh = {
  key: 0,
  class: "bug-report-section"
}, ch = {
  key: 1,
  class: "bug-report-section"
}, dh = {
  key: 0,
  class: "env-group"
}, uh = { class: "env-row" }, fh = {
  key: 0,
  class: "env-row"
}, Bh = {
  key: 1,
  class: "env-row"
}, gh = { class: "env-group" }, hh = { class: "env-row" }, ph = { class: "env-row" }, wh = { class: "env-row" }, Qh = { class: "env-row" }, Ch = { class: "env-row" }, bh = { class: "env-group" }, Uh = { class: "env-row" }, Fh = { class: "env-row" }, mh = { class: "env-row" }, xh = { class: "env-list" }, vh = { key: 0 }, yh = { class: "env-row" }, Eh = { class: "env-list" }, Hh = { key: 0 }, Ih = {
  key: 0,
  class: "env-row"
}, _h = { class: "env-list" }, Lh = {
  key: 1,
  class: "env-row"
}, Sh = { class: "env-list" }, kh = { class: "env-group" }, Th = { class: "event-list" }, Kh = { class: "event-time" }, Dh = { class: "event-type" }, Rh = {
  key: 0,
  class: "log-empty"
}, Oh = {
  key: 1,
  class: "env-group"
}, Mh = { class: "env-row" }, Nh = { class: "env-row" }, Ph = { class: "env-row" }, Vh = { class: "env-row" }, Gh = { class: "env-group" }, Xh = { class: "env-row" }, Jh = { class: "env-row" }, Wh = {
  key: 0,
  class: "env-row"
}, Yh = {
  key: 1,
  class: "env-row"
}, jh = { class: "env-row" }, Zh = { class: "bug-report-footer" }, zh = ["disabled", "title"], $h = ["disabled"], qh = {
  key: 0,
  class: "bug-capture-spin",
  style: { width: "11px", height: "11px", "border-width": "2px" }
}, Ap = ["disabled"];
function ep(e, A, t, s, r, n) {
  var i, a, c, d, l, f, g, Q, U, m, _, v;
  const o = Du("ScreenshotEditor");
  return p(), w("div", UB, [
    r.isCapturing && !r.isOpen ? (p(), w("div", FB, [...A[27] || (A[27] = [
      u("div", { class: "bug-capture-spinner" }, [
        u("span", { class: "bug-capture-spin" }),
        V(" 화면 캡처 중... ")
      ], -1)
    ])])) : y("", !0),
    r.isOpen ? (p(), w("div", {
      key: 1,
      class: "bug-report-overlay",
      onMousedown: A[25] || (A[25] = (h) => r.backdropPressed = h.target === h.currentTarget),
      onClick: A[26] || (A[26] = As((h) => r.backdropPressed && n.close(), ["self"]))
    }, [
      r.isEditingShot && r.screenshotUrl ? (p(), Zo(o, {
        key: 0,
        src: r.screenshotUrl,
        onApply: n.onShotEdited,
        onCancel: A[0] || (A[0] = (h) => r.isEditingShot = !1)
      }, null, 8, ["src", "onApply"])) : y("", !0),
      u("div", mB, [
        u("div", xB, [
          u("span", vB, [
            A[28] || (A[28] = V("버그 신고 ", -1)),
            n.hotkey ? (p(), w("span", yB, b(n.hotkey), 1)) : y("", !0)
          ]),
          n.appProjects.length > 1 ? (p(), w("span", EB, [
            (p(!0), w(M, null, q(n.appProjects, (h) => (p(), w("button", {
              key: h.key,
              class: Y({ "bug-target__on": r.project === h.key }),
              onClick: (x) => n.setProject(h.key)
            }, b(h.label), 11, HB))), 128))
          ])) : y("", !0),
          (a = (i = t.kit) == null ? void 0 : i.api) != null && a.enabled ? (p(), w("label", IB, [
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
        u("div", _B, [
          (p(!0), w(M, null, q(n.tabs, (h) => (p(), w("button", {
            key: h.id,
            class: Y(["bug-tab", { active: r.activeTab === h.id }]),
            onClick: (x) => r.activeTab = h.id
          }, [
            V(b(h.label) + " ", 1),
            h.badge ? (p(), w("span", SB, b(h.badge), 1)) : y("", !0)
          ], 10, LB))), 128))
        ]),
        u("div", kB, [
          r.activeTab === "basic" ? (p(), w(M, { key: 0 }, [
            u("div", TB, [
              u("div", KB, [
                A[30] || (A[30] = V(" 화면 캡처 ", -1)),
                u("button", {
                  class: "bug-btn-sm",
                  onClick: A[3] || (A[3] = (...h) => n.recapture && n.recapture(...h)),
                  disabled: r.isCapturing
                }, b(r.isCapturing ? "캡처 중..." : "다시 찍기"), 9, DB),
                u("button", {
                  class: "bug-btn-sm",
                  onClick: A[4] || (A[4] = (h) => r.isEditingShot = !0),
                  disabled: !r.screenshotUrl
                }, "그리기·표시", 8, RB),
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
                }, null, 8, OB)) : r.isCapturing ? (p(), w("div", MB, "캡처 중...")) : (p(), w("div", NB, "화면 캡처를 못 했습니다 - 스크린샷 없이 저장하거나, 이미지를 붙여넣기(Ctrl+V)·불러오기로 넣을 수 있습니다"))
              ], 2),
              A[31] || (A[31] = u("div", { class: "screenshot-hint" }, "이미지를 붙여넣기(Ctrl+V)해도 캡처 대신 쓸 수 있습니다.", -1))
            ]),
            u("div", PB, [
              A[32] || (A[32] = u("div", { class: "bug-report-label" }, "심각도", -1)),
              u("div", VB, [
                (p(!0), w(M, null, q(r.severityOptions, (h) => (p(), w("button", {
                  key: h.value,
                  class: Y(["severity-btn", `severity-btn--${h.value.toLowerCase()}`, { active: r.severity === h.value }]),
                  onClick: (x) => r.severity = h.value
                }, b(h.label), 11, GB))), 128))
              ])
            ]),
            u("div", XB, [
              A[33] || (A[33] = u("div", { class: "bug-report-label" }, "문제 상황", -1)),
              mA(u("textarea", {
                "onUpdate:modelValue": A[8] || (A[8] = (h) => r.problemDesc = h),
                class: "bug-report-textarea",
                placeholder: "어떤 문제가 발생했나요?",
                rows: "2"
              }, null, 512), [
                [gr, r.problemDesc]
              ])
            ]),
            u("div", JB, [
              A[34] || (A[34] = u("div", { class: "bug-report-label" }, "재현 단계", -1)),
              mA(u("textarea", {
                "onUpdate:modelValue": A[9] || (A[9] = (h) => r.reproSteps = h),
                class: "bug-report-textarea",
                placeholder: `1. …
2. …
3. …`,
                rows: "3"
              }, null, 512), [
                [gr, r.reproSteps]
              ])
            ]),
            u("div", WB, [
              A[35] || (A[35] = u("div", { class: "bug-report-label" }, "기대 결과", -1)),
              mA(u("textarea", {
                "onUpdate:modelValue": A[10] || (A[10] = (h) => r.expectedResult = h),
                class: "bug-report-textarea",
                placeholder: "어떻게 동작해야 하나요?",
                rows: "2"
              }, null, 512), [
                [gr, r.expectedResult]
              ])
            ]),
            u("div", YB, [
              A[39] || (A[39] = u("div", { class: "bug-report-label" }, "다운로드에 포함되는 정보", -1)),
              u("div", jB, [
                A[36] || (A[36] = u("span", { class: "chip" }, "📸 스크린샷", -1)),
                A[37] || (A[37] = u("span", { class: "chip" }, "🌐 환경 정보", -1)),
                u("span", ZB, "📡 네트워크 요청 (" + b(r.networkLogs.length) + "건)", 1),
                u("span", zB, "📋 프론트 로그 (" + b(r.allLogs.length) + "건)", 1),
                u("span", {
                  class: Y(["chip", r.backendLogsState === "ok" ? "chip--ok" : r.backendLogsState === "error" ? "chip--err" : ""])
                }, " 🖥 백엔드 로그 (" + b(r.backendLogsState === "ok" ? r.backendLogs.length + "건" : r.backendLogsState === "loading" ? "로딩 중" : r.backendLogsState === "skipped" ? "프론트 에러로 판단, 미수집" : r.backendLogsState === "error" ? "조회 실패" : "대기") + ") ", 3),
                (c = r.context) != null && c.camera ? (p(), w("span", $B, "📍 카메라 위치")) : y("", !0),
                A[38] || (A[38] = u("span", { class: "chip" }, "🗂 앱 상태", -1)),
                (d = r.context) != null && d.user ? (p(), w("span", qB, "👤 " + b(r.context.user.username), 1)) : y("", !0)
              ])
            ])
          ], 64)) : y("", !0),
          r.activeTab === "logs" ? (p(), w(M, { key: 1 }, [
            u("div", Ag, [
              u("button", {
                class: Y(["log-src-btn", { active: r.logSource === "front" }]),
                onClick: A[11] || (A[11] = (h) => r.logSource = "front")
              }, " 프론트엔드 ", 2),
              u("button", {
                class: Y(["log-src-btn", { active: r.logSource === "backend" }]),
                onClick: A[12] || (A[12] = (h) => r.logSource = "backend")
              }, [
                A[40] || (A[40] = V(" 백엔드 ", -1)),
                r.backendLogsState === "loading" ? (p(), w("span", eg, "⟳")) : r.backendLogsState === "error" ? (p(), w("span", tg, "!")) : y("", !0)
              ], 2)
            ]),
            r.logSource === "front" ? (p(), w("div", sg, [
              u("div", rg, [
                A[41] || (A[41] = V(" 프론트엔드 콘솔 로그 ", -1)),
                u("div", ng, [
                  u("label", og, [
                    mA(u("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": A[13] || (A[13] = (h) => r.showError = h)
                    }, null, 512), [
                      [DA, r.showError]
                    ]),
                    V(" 오류 (" + b(n.countByLevel("error")) + ")", 1)
                  ]),
                  u("label", ig, [
                    mA(u("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": A[14] || (A[14] = (h) => r.showWarn = h)
                    }, null, 512), [
                      [DA, r.showWarn]
                    ]),
                    V(" 경고 (" + b(n.countByLevel("warn")) + ")", 1)
                  ]),
                  u("label", ag, [
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
              u("div", lg, [
                (p(!0), w(M, null, q(n.filteredLogs, (h, x) => (p(), w("div", {
                  key: x,
                  class: Y(["log-item", `log-item--${h.level}`])
                }, [
                  u("span", cg, b(h.time.slice(11)), 1),
                  u("span", dg, b(h.level), 1),
                  u("span", ug, b(h.message), 1)
                ], 2))), 128)),
                n.filteredLogs.length === 0 ? (p(), w("div", fg, "표시할 로그가 없습니다")) : y("", !0)
              ])
            ])) : y("", !0),
            r.logSource === "backend" ? (p(), w("div", Bg, [
              u("div", gg, [
                A[42] || (A[42] = V(" 백엔드 서버 로그 ", -1)),
                u("div", hg, [
                  u("label", pg, [
                    mA(u("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": A[16] || (A[16] = (h) => r.showBEError = h)
                    }, null, 512), [
                      [DA, r.showBEError]
                    ]),
                    V(" ERROR (" + b(n.countBackendByLevel("ERROR")) + ")", 1)
                  ]),
                  u("label", wg, [
                    mA(u("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": A[17] || (A[17] = (h) => r.showBEWarn = h)
                    }, null, 512), [
                      [DA, r.showBEWarn]
                    ]),
                    V(" WARN (" + b(n.countBackendByLevel("WARN")) + ")", 1)
                  ]),
                  u("label", Qg, [
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
              r.backendLogsState === "loading" ? (p(), w("div", Cg, "백엔드 로그 가져오는 중...")) : r.backendLogsState === "skipped" ? (p(), w("div", bg, [
                A[43] || (A[43] = V(" 네트워크 오류 없음 — 프론트엔드 에러로 판단하여 미수집 ", -1)),
                u("button", {
                  class: "bug-btn-sm",
                  style: { "margin-top": "8px" },
                  onClick: A[19] || (A[19] = (...h) => n.fetchBackendLogs && n.fetchBackendLogs(...h))
                }, "그래도 가져오기")
              ])) : r.backendLogsState === "error" ? (p(), w("div", Ug, "백엔드 로그 조회 실패 (인증 확인)")) : (p(), w("div", Fg, [
                (p(!0), w(M, null, q(n.filteredBackendLogs, (h, x) => (p(), w("div", {
                  key: x,
                  class: Y(["log-item", `log-item--${h.level.toLowerCase()}`])
                }, [
                  u("span", mg, b(h.time.slice(11)), 1),
                  u("span", xg, b(h.level), 1),
                  u("span", vg, b(h.logger), 1),
                  u("span", yg, b(h.message), 1)
                ], 2))), 128)),
                n.filteredBackendLogs.length === 0 ? (p(), w("div", Eg, "표시할 로그가 없습니다")) : y("", !0)
              ]))
            ])) : y("", !0)
          ], 64)) : y("", !0),
          r.activeTab === "network" ? (p(), w("div", Hg, [
            A[51] || (A[51] = u("div", { class: "bug-report-label" }, "최근 API 요청 (최대 50건, 최신순)", -1)),
            u("div", Ig, [
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
                    u("span", Lg, b(h.method), 1),
                    u("span", Sg, b(h.url), 1),
                    u("span", kg, b(h.duration) + "ms", 1),
                    u("span", Tg, b((S = h.time) == null ? void 0 : S.slice(11, 19)), 1)
                  ], 10, _g),
                  r.expandedNet === x ? (p(), w("div", Kg, [
                    h.params ? (p(), w("div", Dg, [
                      A[44] || (A[44] = u("b", null, "Params:", -1)),
                      A[45] || (A[45] = V()),
                      u("code", null, b(h.params), 1)
                    ])) : y("", !0),
                    h.requestBody ? (p(), w("div", Rg, [
                      A[46] || (A[46] = u("b", null, "Request:", -1)),
                      A[47] || (A[47] = V()),
                      u("code", null, b(h.requestBody), 1)
                    ])) : y("", !0),
                    h.responseBody ? (p(), w("div", Og, [
                      A[48] || (A[48] = u("b", null, "Response:", -1)),
                      A[49] || (A[49] = V()),
                      u("code", null, b(h.responseBody), 1)
                    ])) : y("", !0),
                    h.error ? (p(), w("div", Mg, [
                      A[50] || (A[50] = u("b", null, "Error:", -1)),
                      V(" " + b(h.error), 1)
                    ])) : y("", !0)
                  ])) : y("", !0)
                ], 64);
              }), 128)),
              r.networkLogs.length === 0 ? (p(), w("div", Ng, "기록된 요청이 없습니다")) : y("", !0)
            ])
          ])) : y("", !0),
          r.activeTab === "state" ? (p(), w(M, { key: 3 }, [
            u("div", Pg, [
              A[52] || (A[52] = u("div", { class: "bug-report-label" }, "Vuex Mutation 이력 (최신순, 최대 100건)", -1)),
              u("div", Vg, [
                (p(!0), w(M, null, q(((l = r.context) == null ? void 0 : l.mutationLog) || [], (h, x) => (p(), w("div", {
                  key: x,
                  class: "log-item"
                }, [
                  u("span", Gg, b(h.time), 1),
                  u("span", Xg, b(h.type), 1),
                  h.payload !== null ? (p(), w("span", Jg, b(n.formatPayload(h.payload)), 1)) : y("", !0)
                ]))), 128)),
                (g = (f = r.context) == null ? void 0 : f.mutationLog) != null && g.length ? y("", !0) : (p(), w("div", Wg, "기록된 mutation이 없습니다"))
              ])
            ]),
            u("div", Yg, [
              A[54] || (A[54] = u("div", { class: "bug-report-label" }, "라우터 이력", -1)),
              u("div", jg, [
                (p(!0), w(M, null, q(((Q = r.context) == null ? void 0 : Q.routeHistory) || [], (h, x) => (p(), w("div", {
                  key: x,
                  class: "route-item"
                }, [
                  u("span", Zg, b(h.time), 1),
                  u("span", zg, b(h.from), 1),
                  A[53] || (A[53] = u("span", { class: "route-arrow" }, "→", -1)),
                  u("span", $g, b(h.to), 1)
                ]))), 128)),
                (m = (U = r.context) == null ? void 0 : U.routeHistory) != null && m.length ? y("", !0) : (p(), w("div", qg, "기록된 라우터 이력이 없습니다"))
              ])
            ]),
            (_ = r.context) != null && _.storage && Object.keys(r.context.storage).length ? (p(), w("div", Ah, [
              A[55] || (A[55] = u("div", { class: "bug-report-label" }, "localStorage (민감 키 제외)", -1)),
              u("div", eh, [
                (p(!0), w(M, null, q(r.context.storage, (h, x) => (p(), w("div", {
                  key: x,
                  class: "env-row"
                }, [
                  u("span", null, b(x), 1),
                  u("span", null, b(h), 1)
                ]))), 128))
              ])
            ])) : y("", !0),
            (v = r.context) != null && v.cesiumPerf ? (p(), w("div", th, [
              A[61] || (A[61] = u("div", { class: "bug-report-label" }, "Cesium 성능 지표", -1)),
              u("div", sh, [
                u("div", rh, [
                  A[56] || (A[56] = u("span", null, "Primitives", -1)),
                  u("span", null, b(r.context.cesiumPerf.primitives), 1)
                ]),
                u("div", nh, [
                  A[57] || (A[57] = u("span", null, "Tiles Loaded", -1)),
                  u("span", null, b(r.context.cesiumPerf.tilesLoaded), 1)
                ]),
                u("div", oh, [
                  A[58] || (A[58] = u("span", null, "Max Screen Space Error", -1)),
                  u("span", null, b(r.context.cesiumPerf.maximumScreenSpaceError), 1)
                ]),
                u("div", ih, [
                  A[59] || (A[59] = u("span", null, "Shadows", -1)),
                  u("span", null, b(r.context.cesiumPerf.shadowsEnabled ? "활성" : "비활성"), 1)
                ]),
                u("div", ah, [
                  A[60] || (A[60] = u("span", null, "MSAA Samples", -1)),
                  u("span", null, b(r.context.cesiumPerf.msaaSamples), 1)
                ])
              ])
            ])) : y("", !0)
          ], 64)) : y("", !0),
          r.activeTab === "env" ? (p(), w(M, { key: 4 }, [
            r.context ? (p(), w("div", ch, [
              r.context.user ? (p(), w("div", dh, [
                A[66] || (A[66] = u("div", { class: "env-group-title" }, "사용자", -1)),
                u("div", uh, [
                  A[63] || (A[63] = u("span", null, "아이디", -1)),
                  u("span", null, b(r.context.user.username), 1)
                ]),
                r.context.user.roles.length ? (p(), w("div", fh, [
                  A[64] || (A[64] = u("span", null, "권한", -1)),
                  u("span", null, b(r.context.user.roles.join(", ")), 1)
                ])) : y("", !0),
                r.context.user.exp ? (p(), w("div", Bh, [
                  A[65] || (A[65] = u("span", null, "토큰 만료", -1)),
                  u("span", null, b(r.context.user.exp), 1)
                ])) : y("", !0)
              ])) : y("", !0),
              u("div", gh, [
                A[72] || (A[72] = u("div", { class: "env-group-title" }, "메뉴 상태", -1)),
                u("div", hh, [
                  A[67] || (A[67] = u("span", null, "상단 탭", -1)),
                  u("span", null, b(r.context.menus.headerName), 1)
                ]),
                u("div", ph, [
                  A[68] || (A[68] = u("span", null, "하위 메뉴", -1)),
                  u("span", null, b(r.context.menus.subMenuName), 1)
                ]),
                u("div", wh, [
                  A[69] || (A[69] = u("span", null, "좌측 메뉴", -1)),
                  u("span", null, b(n.joinOrNone(r.context.menus.leftMenus)), 1)
                ]),
                u("div", Qh, [
                  A[70] || (A[70] = u("span", null, "열린 패널", -1)),
                  u("span", null, b(n.joinOrNone(r.context.menus.openPanels)), 1)
                ]),
                u("div", Ch, [
                  A[71] || (A[71] = u("span", null, "활성 도구", -1)),
                  u("span", null, b(n.joinOrNone(r.context.menus.activeTools)), 1)
                ])
              ]),
              u("div", bh, [
                A[75] || (A[75] = u("div", { class: "env-group-title" }, "표시 중인 데이터", -1)),
                u("div", Uh, [
                  A[73] || (A[73] = u("span", null, "지도 타입", -1)),
                  u("span", null, b(r.context.activeData.mapType), 1)
                ]),
                u("div", Fh, [
                  A[74] || (A[74] = u("span", null, "지형", -1)),
                  u("span", null, b(r.context.activeData.terrain || "기본"), 1)
                ]),
                u("div", mh, [
                  u("span", null, "데이터셋 (" + b(r.context.activeData.datasets.length) + ")", 1),
                  u("span", xh, [
                    r.context.activeData.datasets.length ? y("", !0) : (p(), w("span", vh, "없음")),
                    (p(!0), w(M, null, q(r.context.activeData.datasets, (h) => (p(), w("span", {
                      key: h.layerId,
                      class: "env-tag"
                    }, b(h._displayName), 1))), 128))
                  ])
                ]),
                u("div", yh, [
                  u("span", null, "3D 타일 (" + b(r.context.activeData.threeDTiles.length) + ")", 1),
                  u("span", Eh, [
                    r.context.activeData.threeDTiles.length ? y("", !0) : (p(), w("span", Hh, "없음")),
                    (p(!0), w(M, null, q(r.context.activeData.threeDTiles, (h) => (p(), w("span", {
                      key: h.threeDTilesId || h.sourceId,
                      class: "env-tag"
                    }, b(h._displayName), 1))), 128))
                  ])
                ]),
                r.context.activeData.autoPlacement.length ? (p(), w("div", Ih, [
                  u("span", null, "배치안 (" + b(r.context.activeData.autoPlacement.length) + ")", 1),
                  u("span", _h, [
                    (p(!0), w(M, null, q(r.context.activeData.autoPlacement, (h) => (p(), w("span", {
                      key: h.sourceId,
                      class: "env-tag"
                    }, b(h._displayName), 1))), 128))
                  ])
                ])) : y("", !0),
                r.context.activeData.topicMaps.length ? (p(), w("div", Lh, [
                  u("span", null, "주제도 (" + b(r.context.activeData.topicMaps.length) + ")", 1),
                  u("span", Sh, [
                    (p(!0), w(M, null, q(r.context.activeData.topicMaps, (h) => (p(), w("span", {
                      key: h.key,
                      class: "env-tag"
                    }, b(h._displayName), 1))), 128))
                  ])
                ])) : y("", !0)
              ]),
              u("div", kh, [
                A[76] || (A[76] = u("div", { class: "env-group-title" }, "최근 이벤트 (최신순)", -1)),
                u("div", Th, [
                  (p(!0), w(M, null, q(r.context.recentEvents.slice(0, 30), (h, x) => (p(), w("div", {
                    key: x,
                    class: "event-item"
                  }, [
                    u("span", Kh, b(h.time), 1),
                    u("span", Dh, b(h.type), 1)
                  ]))), 128)),
                  r.context.recentEvents.length ? y("", !0) : (p(), w("div", Rh, "기록된 이벤트 없음"))
                ])
              ]),
              r.context.camera ? (p(), w("div", Oh, [
                A[81] || (A[81] = u("div", { class: "env-group-title" }, "카메라 위치", -1)),
                u("div", Mh, [
                  A[77] || (A[77] = u("span", null, "경도", -1)),
                  u("span", null, b(r.context.camera.longitude), 1)
                ]),
                u("div", Nh, [
                  A[78] || (A[78] = u("span", null, "위도", -1)),
                  u("span", null, b(r.context.camera.latitude), 1)
                ]),
                u("div", Ph, [
                  A[79] || (A[79] = u("span", null, "높이 (m)", -1)),
                  u("span", null, b(r.context.camera.height), 1)
                ]),
                u("div", Vh, [
                  A[80] || (A[80] = u("span", null, "Heading / Pitch", -1)),
                  u("span", null, b(r.context.camera.heading) + "° / " + b(r.context.camera.pitch) + "°", 1)
                ])
              ])) : y("", !0),
              u("div", Gh, [
                A[87] || (A[87] = u("div", { class: "env-group-title" }, "브라우저 / 화면", -1)),
                u("div", Xh, [
                  A[82] || (A[82] = u("span", null, "일시", -1)),
                  u("span", null, b(r.context.datetime), 1)
                ]),
                u("div", Jh, [
                  A[83] || (A[83] = u("span", null, "해상도", -1)),
                  u("span", null, b(r.context.screen.resolution) + " · 뷰포트 " + b(r.context.screen.viewport), 1)
                ]),
                r.context.memory ? (p(), w("div", Wh, [
                  A[84] || (A[84] = u("span", null, "JS 힙 메모리", -1)),
                  u("span", null, b(r.context.memory.usedMB) + "MB / " + b(r.context.memory.limitMB) + "MB", 1)
                ])) : y("", !0),
                r.context.connection ? (p(), w("div", Yh, [
                  A[85] || (A[85] = u("span", null, "네트워크", -1)),
                  u("span", null, b(r.context.connection.effectiveType) + " · " + b(r.context.connection.downlink) + "Mbps", 1)
                ])) : y("", !0),
                u("div", jh, [
                  A[86] || (A[86] = u("span", null, "언어", -1)),
                  u("span", null, b(r.context.browser.language), 1)
                ])
              ])
            ])) : (p(), w("div", lh, [...A[62] || (A[62] = [
              u("div", { class: "log-empty log-empty--error" }, "컨텍스트 수집에 실패했습니다 (콘솔 확인)", -1)
            ])]))
          ], 64)) : y("", !0)
        ]),
        u("div", Zh, [
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
          ], 8, zh),
          n.serverEnabled ? (p(), w("button", {
            key: 1,
            class: "bug-btn-save",
            onClick: A[23] || (A[23] = (...h) => n.saveToServer && n.saveToServer(...h)),
            disabled: r.isSaving || r.isCapturing
          }, [
            r.isSaving ? (p(), w("span", qh)) : y("", !0),
            V(" " + b(r.saveStatus), 1)
          ], 8, $h)) : y("", !0),
          u("button", {
            class: "bug-btn-download",
            onClick: A[24] || (A[24] = (...h) => n.download && n.download(...h)),
            disabled: r.isCapturing
          }, " 다운로드 ", 8, Ap)
        ])
      ])
    ], 32)) : y("", !0)
  ]);
}
const tp = /* @__PURE__ */ $o(bB, [["render", ep], ["styles", [QB]], ["__scopeId", "data-v-aeda504d"]]), _t = (e) => String(e ?? "").replace(/[&<>"']/g, (A) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[A]);
function ct(e) {
  let A = _t(e);
  return A = A.replace(/`([^`]+)`/g, (t, s) => `<code>${s}</code>`), A = A.replace(/\*\*([^*]+)\*\*/g, "<b>$1</b>"), A = A.replace(/(https?:\/\/[^\s<)]+)/g, '<a href="$1" target="_blank" rel="noopener">$1</a>'), A = A.replace(/(^|[\s(])((?:[\w.-]+\/)+[\w.-]+\.(?:java|js|ts|tsx|jsx|vue|py|xml|yml|yaml|json|properties|gradle|sql|md|scss|css|html)(?::\d+)?)(?=$|[\s,)])/g, (t, s, r) => t.includes("<code>") ? t : `${s}<code class="p">${r}</code>`), A;
}
function sp(e) {
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
    return c ? `<b class="lbl">${_t(c[1])}:</b> ${ct(c[2])}` : ct(a);
  };
  let i = [];
  for (; r < s.length; ) {
    const a = s[r];
    if (/^```/.test(a)) {
      n(i);
      const d = a.slice(3).trim(), l = [];
      for (r++; r < s.length && !/^```/.test(s[r]); ) l.push(s[r++]);
      r++, t.push(`<pre class="code"${d ? ` data-lang="${_t(d)}"` : ""}>${_t(l.join(`
`))}</pre>`);
      continue;
    }
    const c = a.match(/^(#{1,4})\s+(.*)$/);
    if (c) {
      n(i), t.push(`<h${Math.min(6, c[1].length + 2)}>${ct(c[2])}</h${Math.min(6, c[1].length + 2)}>`), r++;
      continue;
    }
    if (/^\s*([-*•]|\d+[.)])\s+/.test(a)) {
      n(i);
      const d = /^\s*\d+[.)]\s+/.test(a), l = [];
      for (; r < s.length && /^\s*([-*•]|\d+[.)])\s+/.test(s[r]); ) {
        let f = s[r].replace(/^\s*([-*•]|\d+[.)])\s+/, "");
        for (r++; r < s.length && /^\s{2,}\S/.test(s[r]) && !/^\s*([-*•]|\d+[.)])\s+/.test(s[r]); ) f += " " + s[r++].trim();
        l.push(`<li>${ct(f)}</li>`);
      }
      t.push(`<${d ? "ol" : "ul"}>${l.join("")}</${d ? "ol" : "ul"}>`);
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
const rp = [
  [/^✓/, "ok"],
  [/^✗/, "bad"],
  [/^▶/, "start"],
  [/^■/, "stop"],
  [/^↻/, "warn"],
  [/실패|오류|error/i, "bad"]
], np = [
  [/^💬/, "say"],
  [/^✏️|^✏/, "edit"],
  [/^\$ /, "cmd"],
  [/^읽기 /, "read"],
  [/^검색 /, "grep"],
  [/^Claude 종료|^Claude 답변/, "end"]
];
function op(e) {
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
      for (const [d, l] of a ? np : rp) if (d.test(i)) {
        c = l;
        break;
      }
      t.push(`<div class="ln ${a ? "detail" : "stage"}${c ? ` ${c}` : ""}"><span class="ts">${n}</span><span class="tx">${ct(i)}</span></div>`);
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
const ip = `
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
`, ap = ".brv-projects[data-v-3539add5]{margin-left:auto;margin-right:12px;display:inline-flex;border:1px solid rgba(255,255,255,.18);border-radius:6px;overflow:hidden}.brv-projects button[data-v-3539add5]{border:0;padding:4px 11px;font-size:11px;background:transparent;color:#aab;cursor:pointer}.brv-projects button+button[data-v-3539add5]{border-left:1px solid rgba(255,255,255,.18)}.brv-projects__on[data-v-3539add5]{background:#88aaff47;color:#fff}.brv-ai__head[data-v-3539add5]{display:flex;align-items:center;gap:8px;margin-bottom:8px}.brv-ai__title[data-v-3539add5]{margin:0!important}.brv-ai__tools[data-v-3539add5]{margin-left:auto;display:inline-flex;gap:6px}.brv-ai__tool[data-v-3539add5]{font-size:11px;padding:3px 9px;border-radius:4px;border:1px solid rgba(255,255,255,.18);background:transparent;color:#aab;cursor:pointer}.brv-ai__tool[data-v-3539add5]:hover:not(:disabled){background:#ffffff14;color:#fff}.brv-ai__tool[data-v-3539add5]:disabled{opacity:.4;cursor:default}.brv-ai__start[data-v-3539add5]{display:flex;align-items:center;gap:14px;flex-wrap:wrap;padding:6px 0 2px}.brv-fix-btn--lg[data-v-3539add5]{padding:9px 18px;font-size:13px}.brv-ai__hint[data-v-3539add5]{font-size:11px;color:#8898aa;line-height:1.5;margin-top:6px}.brv-ai__meta[data-v-3539add5]{display:flex;gap:10px;align-items:center;font-size:12px;margin-bottom:6px}.brv-kg[data-v-3539add5]{margin:8px 0 4px;font-size:11px}.brv-kg summary[data-v-3539add5]{cursor:pointer;color:#aab}.brv-kg__wrap[data-v-3539add5]{overflow-x:auto;margin-top:6px;padding-bottom:4px}.brv-kg__svg[data-v-3539add5]{display:block;font-family:inherit}.brv-kg__col[data-v-3539add5]{font-size:10px;fill:#889}.brv-kg__label[data-v-3539add5]{font-size:11px;fill:#e6ebf5;pointer-events:none}.brv-kg__node rect[data-v-3539add5]{stroke:#ffffff1f;stroke-width:1;transition:opacity .15s}.brv-kg__node--hit rect[data-v-3539add5]{stroke:#f2d35b;stroke-width:1.5}.brv-kg__node--dim[data-v-3539add5]{opacity:.25}.brv-kg__edge[data-v-3539add5]{fill:none;stroke:#aab4c859;stroke-width:1;transition:opacity .15s}.brv-kg__edge--contains[data-v-3539add5]{stroke:#e6ebf580}.brv-kg__edge--calls[data-v-3539add5]{stroke:#ef476f99}.brv-kg__edge--reads[data-v-3539add5],.brv-kg__edge--writes[data-v-3539add5]{stroke:#ffb7038c}.brv-kg__edge--navigates[data-v-3539add5]{stroke:#06d6a099}.brv-kg__edge--dim[data-v-3539add5]{opacity:.12}.brv-shots[data-v-3539add5]{margin:8px 0 6px}.brv-shots__title[data-v-3539add5]{font-size:11px;color:#aab;margin-bottom:4px}.brv-shots__strip[data-v-3539add5]{display:flex;gap:8px;overflow-x:auto;padding-bottom:4px}.brv-shots__item[data-v-3539add5]{margin:0;flex:0 0 auto;width:150px;cursor:zoom-in}.brv-shots__item img[data-v-3539add5],.brv-shots__ph[data-v-3539add5]{width:150px;height:88px;object-fit:cover;object-position:top;border:1px solid rgba(255,255,255,.18);border-radius:4px;background:#111;display:block}.brv-shots__ph[data-v-3539add5]{color:#666;text-align:center;line-height:88px}.brv-shots__item figcaption[data-v-3539add5]{font-size:10px;color:#99a;margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.brv-shots__big[data-v-3539add5]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:100000;background:#000000d9;display:flex;flex-direction:column;align-items:center;justify-content:center;cursor:zoom-out;gap:8px}.brv-shots__big img[data-v-3539add5]{max-width:94vw;max-height:86vh;border:1px solid rgba(255,255,255,.25);border-radius:4px}.brv-shots__bigcap[data-v-3539add5]{color:#ddd;font-size:12px}.brv-ai__pr[data-v-3539add5]{font-weight:600}.brv-ai__branch[data-v-3539add5]{color:#8898aa;font-family:ui-monospace,Menlo,Consolas,monospace;font-size:11px}.brv-ai__summary[data-v-3539add5]{font-size:12px;line-height:1.55;padding:8px 10px;background:#ffffff0d;border-radius:6px;margin-bottom:8px}.brv-ai__count[data-v-3539add5]{font-weight:400;color:#778;margin-left:4px;font-size:11px}.brv-chat__compose[data-v-3539add5]{display:flex;gap:8px;align-items:stretch;margin-top:8px}.brv-chat__compose .brv-chat__input[data-v-3539add5]{flex:1;margin:0}.brv-chat__btns[data-v-3539add5]{display:flex;flex-direction:column;gap:6px;justify-content:center}.brv-chat__btns .brv-fix-btn[data-v-3539add5]{white-space:nowrap}.brv-chat__input[data-v-3539add5]{font-family:inherit}.brv-chat__text[data-v-3539add5]{color:#d0d6de;white-space:normal}.brv-chat__msg--user .brv-chat__text[data-v-3539add5]{color:#e6ebf2}.brv-notice[data-v-3539add5]{margin:0 16px;padding:8px 12px;border-radius:6px;font-size:12px;background:#eef4ff;color:#1e3a8a}.brv-notice--error[data-v-3539add5]{background:#fdecec;color:#8a1c1c}.brv-notice--success[data-v-3539add5]{background:#e9f8ee;color:#14532d}.brv-modal[data-v-3539add5]{-webkit-user-select:none;user-select:none}.brv-selectable[data-v-3539add5],.brv-log-list[data-v-3539add5],.brv-net-detail[data-v-3539add5],.brv-text[data-v-3539add5]{-webkit-user-select:text;user-select:text;cursor:text}.brv-overlay[data-v-3539add5]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:99998;background:#00000080;display:flex;align-items:center;justify-content:center}.brv-modal[data-v-3539add5]{background:#141c28;border:1px solid rgba(255,255,255,.1);border-radius:10px;width:700px;max-width:96vw;max-height:84vh;display:flex;flex-direction:column;overflow:hidden}.brv-header[data-v-3539add5]{display:flex;align-items:center;justify-content:space-between;padding:12px 16px;border-bottom:1px solid rgba(255,255,255,.08);flex-shrink:0}.brv-title[data-v-3539add5]{font-size:13px;font-weight:600;color:#c8d8e8}.brv-shortcut[data-v-3539add5]{font-size:10px;font-weight:400;color:#456;margin-left:6px}.brv-close[data-v-3539add5]{background:none;border:none;color:#789;cursor:pointer;font-size:14px}.brv-close[data-v-3539add5]:hover{color:#fff}.brv-body[data-v-3539add5]{flex:1;overflow-y:auto;padding:12px 16px}.brv-loading[data-v-3539add5]{display:flex;align-items:center;gap:8px;color:#8ac;font-size:12px;padding:16px 0}.brv-empty[data-v-3539add5]{color:#567;font-size:12px;padding:16px 0;text-align:center}.brv-list[data-v-3539add5]{display:flex;flex-direction:column;gap:6px}.brv-item[data-v-3539add5]{display:flex;align-items:center;gap:8px;padding:8px 10px;background:#ffffff08;border:1px solid rgba(255,255,255,.07);border-radius:6px;cursor:pointer;transition:background .15s}.brv-item[data-v-3539add5]:hover{background:#ffffff12}.brv-problem[data-v-3539add5]{flex:1;font-size:12px;color:#c8d8e8;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.brv-meta[data-v-3539add5]{font-size:10px;color:#567;white-space:nowrap}.brv-del[data-v-3539add5]{background:none;border:none;color:#456;cursor:pointer;font-size:11px;padding:2px 4px}.brv-del[data-v-3539add5]:hover{color:#e74c3c}.brv-badge[data-v-3539add5]{font-size:10px;font-weight:600;padding:2px 7px;border-radius:4px;white-space:nowrap;background:#ffffff14;color:#abc}.brv-badge--tool[data-v-3539add5]{background:#aaaabe40;color:#ccd}.brv-sev--critical[data-v-3539add5]{background:#e74c3c40;color:#e74c3c}.brv-sev--high[data-v-3539add5]{background:#e67e2240;color:#e6802e}.brv-sev--medium[data-v-3539add5]{background:#f1c40f33;color:#f1c40f}.brv-sev--low[data-v-3539add5]{background:#2ecc7133;color:#2ecc71}.brv-status[data-v-3539add5]{font-size:10px;font-weight:600;padding:2px 7px;border-radius:4px;white-space:nowrap;flex-shrink:0}.brv-st--open[data-v-3539add5]{background:#88aaff2e;color:#8af}.brv-st--in_progress[data-v-3539add5]{background:#f1c40f2e;color:#f1c40f}.brv-st--resolved[data-v-3539add5]{background:#2ecc7133;color:#2ecc71}.brv-st--closed[data-v-3539add5]{background:#7888992e;color:#89a}.brv-status-control[data-v-3539add5]{display:flex;align-items:center;gap:6px}.brv-status-select[data-v-3539add5]{font-size:11px;font-weight:600;padding:3px 8px;border-radius:4px;cursor:pointer;background:#ffffff0f;border:1px solid rgba(255,255,255,.12);color:#c8d8e8}.brv-status-select[data-v-3539add5]:disabled{opacity:.5;cursor:default}.brv-status-select option[data-v-3539add5]{background:#141c28;color:#c8d8e8}.brv-spin--sm[data-v-3539add5]{width:11px;height:11px;border-width:2px}.brv-back[data-v-3539add5]{background:none;border:none;color:#8ac;cursor:pointer;font-size:11px;padding:0 0 10px;display:block}.brv-back[data-v-3539add5]:hover{color:#fff}.brv-screenshot[data-v-3539add5]{width:100%;border-radius:6px;border:1px solid rgba(255,255,255,.08);margin-top:4px}.brv-section[data-v-3539add5]{margin-bottom:16px}.brv-fix[data-v-3539add5]{display:inline-block;padding:1px 7px;border-radius:10px;font-size:11px;background:#e9eef3;color:#445}.brv-fix--queued[data-v-3539add5]{background:#fff3cd;color:#7a5a00}.brv-fix--running[data-v-3539add5]{background:#dbeafe;color:#1e3a8a}.brv-fix--pr_opened[data-v-3539add5]{background:#e0f2fe;color:#075985}.brv-fix--ready[data-v-3539add5]{background:#ccfbf1;color:#115e59}.brv-fix--reverted[data-v-3539add5]{background:#fce7f3;color:#9d174d}.brv-ai__tool--danger[data-v-3539add5]{color:#b91c1c;border-color:#fca5a5}.brv-fix--merged[data-v-3539add5]{background:#dcfce7;color:#166534}.brv-fix--failed[data-v-3539add5]{background:#fee2e2;color:#991b1b}.brv-link[data-v-3539add5]{color:#2563eb;text-decoration:underline;word-break:break-all}.brv-fix-summary[data-v-3539add5]{margin-top:6px}.brv-fix-actions[data-v-3539add5]{display:flex;gap:6px;margin-top:8px}.brv-fix-btn[data-v-3539add5]{padding:6px 12px;border:1px solid #2563eb;border-radius:6px;background:#2563eb;color:#fff;font-size:12px;cursor:pointer}.brv-fix-btn[data-v-3539add5]:disabled{opacity:.55;cursor:default}.brv-fix-btn--ghost[data-v-3539add5]{background:transparent;color:#2563eb}.brv-hint[data-v-3539add5]{margin-top:6px;font-size:11px;color:#667;line-height:1.5}.brv-fix-elapsed[data-v-3539add5]{margin-left:6px;font-size:11px;color:#667}.brv-fix-log[data-v-3539add5]{margin-top:8px;font-size:11px}.brv-result[data-v-3539add5]{margin:6px 0 8px;font-size:12px}.brv-result>summary[data-v-3539add5]{cursor:pointer;color:#556;font-weight:600}.brv-result__body[data-v-3539add5]{margin-top:6px;padding:8px 10px;background:#ffffff0a;border-radius:6px;line-height:1.55}.brv-result__body h3[data-v-3539add5],.brv-result__body h4[data-v-3539add5]{margin:8px 0 3px;font-size:12px;color:#9ab}.brv-result__body h3[data-v-3539add5]:first-child,.brv-result__body h4[data-v-3539add5]:first-child{margin-top:0}.brv-result__repro[data-v-3539add5]{margin:6px 0;padding:6px 10px;border-radius:6px;font-size:12px;background:#7fe0a41f}.brv-result__repro.bad[data-v-3539add5]{background:#ff9aa824}.brv-result__repro ul[data-v-3539add5]{margin:4px 0 0;padding-left:16px}.brv-result__repro code[data-v-3539add5]{font-size:11px;white-space:pre-wrap;word-break:break-all}.brv-result__files[data-v-3539add5]{margin-top:6px}.brv-result__files ul[data-v-3539add5]{margin:2px 0 0;padding-left:16px}.brv-result__files li[data-v-3539add5]{margin:1px 0}.brv-result__files code[data-v-3539add5]{font-size:11px}.brv-fix-log summary[data-v-3539add5]{cursor:pointer;color:#445}.brv-fix-log pre[data-v-3539add5],.brv-logbox[data-v-3539add5]{margin:6px 0 0;max-height:260px;overflow:auto;padding:8px;background:#1f2530;color:#d8dee6;border-radius:6px;white-space:pre-wrap;word-break:break-all;font-size:11px;line-height:1.45;font-family:ui-monospace,Menlo,Consolas,monospace}.brv-fix-summary[data-v-3539add5]{color:inherit}.brv-suggest[data-v-3539add5]{margin-top:10px;border-top:1px dashed #c9d0d8;padding-top:8px}.brv-suggest__title[data-v-3539add5]{font-size:12px;font-weight:600;color:#334;margin-bottom:4px}.brv-suggest__hint[data-v-3539add5]{margin-left:6px;font-size:11px;font-weight:400;color:#778}.brv-suggest__item[data-v-3539add5]{display:flex;align-items:flex-start;gap:8px;padding:5px 0;font-size:12px;line-height:1.5}.brv-suggest__item+.brv-suggest__item[data-v-3539add5]{border-top:1px solid #eef1f4}.brv-suggest__text[data-v-3539add5]{flex:1;color:#d0d6de}.brv-suggest__run[data-v-3539add5]{flex-shrink:0;padding:3px 10px;font-size:11px}.brv-chat[data-v-3539add5]{margin-top:10px;border-top:1px dashed #c9d0d8;padding-top:8px}.brv-chat__msg[data-v-3539add5]{margin:6px 0;font-size:12px}.brv-chat__who[data-v-3539add5]{display:inline-block;min-width:44px;font-size:11px;color:#667}.brv-chat__msg--user .brv-chat__who[data-v-3539add5]{color:#1e5bb8}.brv-chat__text[data-v-3539add5]{display:inline-block;max-width:calc(100% - 52px);vertical-align:top;white-space:pre-wrap;word-break:break-word;line-height:1.5}.brv-chat__input[data-v-3539add5]{width:100%;box-sizing:border-box;margin-top:6px;padding:6px 8px;font-size:12px;border:1px solid #c9d0d8;border-radius:6px;resize:vertical;color:inherit;background:transparent}.brv-label[data-v-3539add5]{font-size:10px;color:#567;font-weight:600;text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px}.brv-label-row[data-v-3539add5]{display:flex;align-items:center;justify-content:space-between;margin-bottom:6px}.brv-row[data-v-3539add5]{display:flex;justify-content:space-between;align-items:flex-start;gap:8px;font-size:11px;color:#a8b8c8;padding:4px 0;border-bottom:1px solid rgba(255,255,255,.04)}.brv-row>span[data-v-3539add5]:first-child{color:#567;flex-shrink:0}.brv-row>span[data-v-3539add5]:last-child{text-align:right;word-break:break-all}.brv-field[data-v-3539add5]{margin-bottom:8px}.brv-field-label[data-v-3539add5]{font-size:10px;color:#456;margin-bottom:3px}.brv-text[data-v-3539add5]{font-size:11px;color:#c8d8e8;line-height:1.6;white-space:normal;background:#0003;padding:8px;border-radius:4px}.brv-log-tabs[data-v-3539add5]{display:flex;gap:4px}.brv-log-tab[data-v-3539add5]{display:flex;align-items:center;gap:4px;padding:3px 9px;border-radius:4px;border:1px solid rgba(255,255,255,.08);background:#ffffff08;color:#678;font-size:11px;cursor:pointer;transition:background .15s}.brv-log-tab[data-v-3539add5]:hover{background:#ffffff12;color:#abc}.brv-log-tab.active[data-v-3539add5]{background:#88aaff1f;border-color:#88aaff4d;color:#8af}.brv-log-tab-count[data-v-3539add5]{font-size:9px;font-weight:700;padding:1px 4px;border-radius:8px;background:#e74c3c4d;color:#e87070}.brv-cnt-err[data-v-3539add5]{background:#e74c3c4d;color:#e87070}.brv-log-filters[data-v-3539add5]{display:flex;gap:6px;margin-bottom:6px;flex-wrap:wrap}.brv-filter-chip[data-v-3539add5]{display:flex;align-items:center;gap:4px;font-size:10px;color:#678;cursor:pointer;padding:2px 6px;border-radius:4px;border:1px solid rgba(255,255,255,.06);background:#ffffff05}.brv-filter-chip[data-v-3539add5]:hover{background:#ffffff0f}.brv-filter-error[data-v-3539add5]{color:#c06060}.brv-filter-warn[data-v-3539add5]{color:#b09040}.brv-filter-log[data-v-3539add5]{color:#589}.brv-log-list[data-v-3539add5]{max-height:220px;overflow-y:auto;background:#00000040;border-radius:5px;border:1px solid rgba(255,255,255,.05);font-family:Consolas,Menlo,monospace}.brv-log-item[data-v-3539add5]{display:flex;gap:6px;align-items:flex-start;font-size:10.5px;color:#a8b8c8;padding:3px 8px;border-bottom:1px solid rgba(255,255,255,.03);cursor:pointer}.brv-log-item[data-v-3539add5]:hover{background:#ffffff0a}.brv-log-item[data-v-3539add5]:last-child{border-bottom:none}.brv-log-time[data-v-3539add5]{color:#456;flex-shrink:0;font-size:10px;padding-top:1px}.brv-log-lv[data-v-3539add5]{font-weight:700;flex-shrink:0;width:38px;font-size:10px;padding-top:1px}.brv-log-logger[data-v-3539add5]{color:#578;flex-shrink:0;max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:10px;padding-top:1px}.brv-log-msg[data-v-3539add5]{flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.brv-log-msg.expanded[data-v-3539add5]{white-space:pre-wrap;overflow:visible}.brv-log-payload[data-v-3539add5]{color:#567;font-size:10px;max-width:160px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding-top:1px}.brv-mutation[data-v-3539add5]{color:#8ac;font-weight:600}.brv-log--error[data-v-3539add5]{color:#e87070}.brv-log--warn[data-v-3539add5]{color:#d4a84b}.brv-log--info[data-v-3539add5]{color:#a8b8c8}.brv-log-empty[data-v-3539add5]{padding:12px 8px;color:#456;font-size:11px;text-align:center}.brv-net-item[data-v-3539add5]{display:flex;gap:6px;align-items:flex-start;font-size:10.5px;color:#a8b8c8;padding:3px 8px;border-bottom:1px solid rgba(255,255,255,.03);cursor:pointer;font-family:Consolas,Menlo,monospace}.brv-net-item[data-v-3539add5]:hover{background:#ffffff0a}.brv-net-err[data-v-3539add5]{background:#e74c3c0d}.brv-net-status[data-v-3539add5]{font-weight:700;flex-shrink:0;width:32px;font-size:10px;padding-top:1px}.brv-net-method[data-v-3539add5]{flex-shrink:0;width:36px;color:#8ac;font-size:10px;padding-top:1px}.brv-net-dur[data-v-3539add5]{flex-shrink:0;color:#456;font-size:10px;padding-top:1px}.st-err[data-v-3539add5],.st-5xx[data-v-3539add5]{color:#e87070}.st-4xx[data-v-3539add5]{color:#d4a84b}.st-3xx[data-v-3539add5]{color:#8ac}.st-2xx[data-v-3539add5]{color:#6c8}.brv-net-detail[data-v-3539add5]{padding:6px 12px;font-size:10px;color:#89a;background:#0000004d;border-bottom:1px solid rgba(255,255,255,.03);word-break:break-all;white-space:pre-wrap;line-height:1.6;font-family:Consolas,Menlo,monospace}.brv-spin[data-v-3539add5]{display:inline-block;width:13px;height:13px;flex-shrink:0;border:2px solid rgba(136,170,255,.3);border-top-color:#8af;border-radius:50%;animation:brv-spin-3539add5 .7s linear infinite}@keyframes brv-spin-3539add5{to{transform:rotate(360deg)}}", lp = {
  none: "요청 전",
  QUEUED: "대기 중",
  RUNNING: "AI 가 고치는 중",
  READY: "수정본 준비 · 작업 브랜치에 커밋됨, 아직 PR·병합 전(콘솔 버전 탭에서 내보내기)",
  PR_OPENED: "PR 올라옴 · 병합 안 됨(로그 확인)",
  MERGED: "병합 완료",
  REVERTED: "되돌림 - 수정이 취소됨(되돌리기 PR 참고)",
  FAILED: "실패 · 진행 로그 확인"
}, cp = { QUEUED: "대기", RUNNING: "수정중", READY: "준비", PR_OPENED: "PR", MERGED: "병합", FAILED: "실패", REVERTED: "되돌림" }, ta = [
  { value: "OPEN", label: "접수" },
  { value: "IN_PROGRESS", label: "진행중" },
  { value: "RESOLVED", label: "해결" },
  { value: "CLOSED", label: "보류" }
], dp = {
  name: "BugfixViewer",
  props: { kit: { type: Object, default: null } },
  expose: ["open", "close"],
  data() {
    return {
      fmtCss: ip,
      STATUSES: ta,
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
      const A = [{ layers: [0, 1, 2], title: "화면·메뉴" }, { layers: [3], title: "기능" }, { layers: [4], title: "구현 파일" }, { layers: [5], title: "API" }, { layers: [6], title: "백엔드" }, { layers: [7], title: "테이블" }], t = 168, s = 30, r = 22, n = 26, o = A.map((Q) => e.nodes.filter((U) => Q.layers.includes(U.layer))).map((Q, U) => ({ ...A[U], ns: Q })).filter((Q) => Q.ns.length), i = [], a = [];
      let c = 8;
      for (const Q of o)
        a.push({ layer: Q.layers[0], x: c, title: Q.title }), Q.ns.sort((U, m) => m.hit - U.hit || (m.score || 0) - (U.score || 0)), Q.ns.forEach((U, m) => {
          const _ = U.label.length > 22 ? U.label.slice(0, 21) + "…" : U.label;
          i.push({ ...U, x: c, y: r + m * s, w: t - n, h: 20, short: _ });
        }), c += t;
      const d = new Map(i.map((Q) => [Q.id, Q])), l = [];
      for (const Q of e.edges) {
        const U = d.get(Q.from), m = d.get(Q.to);
        if (!U || !m || U === m) continue;
        const [_, v] = U.x <= m.x ? [U, m] : [m, U], h = _.x + _.w, x = _.y + _.h / 2, S = v.x, X = v.y + v.h / 2, eA = _.x === v.x ? `M${h},${x} C${h + 18},${x} ${S + _.w + 18},${X} ${S + _.w},${X}` : `M${h},${x} C${(h + S) / 2},${x} ${(h + S) / 2},${X} ${S},${X}`;
        l.push({ d: eA, rel: Q.rel, from: Q.from, to: Q.to });
      }
      const f = r + Math.max(...o.map((Q) => Q.ns.length)) * s + 4;
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
    this.__i18nStop = wc(this.$el.getRootNode(), this.kit && this.kit.options && this.kit.options.lang || qo());
  },
  methods: {
    md(e) {
      return sp(e);
    },
    logH(e) {
      return op(e);
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
      return ((A = ta.find((t) => t.value === e)) == null ? void 0 : A.label) ?? "접수";
    },
    // ── AI 자동 수정 ──
    fixLabel(e) {
      return lp[e || "none"] || e;
    },
    fixShort(e) {
      return cp[e] || e;
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
}, up = { class: "bugfix-root" }, fp = { class: "brv-modal" }, Bp = { class: "brv-header" }, gp = { class: "brv-title" }, hp = {
  key: 0,
  class: "brv-shortcut"
}, pp = {
  key: 0,
  class: "brv-projects"
}, wp = ["onClick"], Qp = { class: "brv-body" }, Cp = {
  key: 0,
  class: "brv-loading"
}, bp = {
  key: 1,
  class: "brv-empty"
}, Up = {
  key: 2,
  class: "brv-list"
}, Fp = ["onClick"], mp = {
  key: 0,
  class: "brv-badge brv-badge--tool",
  title: "버그 신고 도구 자체의 문제"
}, xp = { class: "brv-problem" }, vp = ["title"], yp = { class: "brv-meta" }, Ep = ["onClick"], Hp = {
  key: 0,
  class: "brv-loading"
}, Ip = {
  key: 0,
  class: "brv-section"
}, _p = ["src"], Lp = ["src", "alt"], Sp = { class: "brv-shots__bigcap" }, kp = { class: "brv-section" }, Tp = { class: "brv-row" }, Kp = { class: "brv-row" }, Dp = { class: "brv-status-control" }, Rp = {
  key: 0,
  class: "brv-spin brv-spin--sm"
}, Op = ["value", "disabled"], Mp = ["value"], Np = { class: "brv-row" }, Pp = { class: "brv-selectable" }, Vp = { class: "brv-row" }, Gp = { class: "brv-selectable" }, Xp = { class: "brv-section brv-ai" }, Jp = { class: "brv-ai__head" }, Wp = {
  key: 0,
  class: "brv-spin brv-spin--sm"
}, Yp = {
  key: 1,
  class: "brv-fix-elapsed"
}, jp = {
  key: 2,
  class: "brv-fix-elapsed"
}, Zp = {
  key: 3,
  class: "brv-ai__tools"
}, zp = ["disabled"], $p = ["disabled"], qp = ["disabled"], Aw = {
  key: 0,
  class: "brv-ai__hint"
}, ew = {
  key: 1,
  class: "brv-ai__hint"
}, tw = {
  key: 2,
  class: "brv-ai__start"
}, sw = ["disabled"], rw = {
  key: 0,
  class: "brv-ai__meta"
}, nw = ["href"], ow = ["href"], iw = ["title"], aw = {
  key: 3,
  class: "brv-ai__hint"
}, lw = { class: "brv-ai__branch" }, cw = ["href"], dw = {
  key: 1,
  class: "brv-ai__hint"
}, uw = ["disabled"], fw = ["title"], Bw = ["innerHTML"], gw = {
  key: 2,
  class: "brv-result",
  open: ""
}, hw = { key: 0 }, pw = { key: 1 }, ww = ["innerHTML"], Qw = {
  key: 2,
  class: "brv-result__files"
}, Cw = { class: "brv-field-label" }, bw = {
  key: 3,
  class: "brv-kg",
  open: ""
}, Uw = { class: "brv-kg__wrap" }, Fw = ["viewBox"], mw = ["x"], xw = ["d"], vw = ["transform", "onMouseenter"], yw = ["width", "height", "fill"], Ew = {
  x: "6",
  y: "14",
  class: "brv-kg__label"
}, Hw = {
  key: 4,
  class: "brv-shots"
}, Iw = { class: "brv-shots__title" }, _w = { class: "brv-suggest__hint" }, Lw = { class: "brv-shots__strip" }, Sw = ["onClick"], kw = ["src", "alt"], Tw = {
  key: 1,
  class: "brv-shots__ph"
}, Kw = ["open"], Dw = { class: "brv-ai__count" }, Rw = ["innerHTML"], Ow = {
  key: 6,
  class: "brv-suggest"
}, Mw = ["innerHTML"], Nw = ["disabled", "onClick"], Pw = { class: "brv-chat" }, Vw = { class: "brv-chat__who" }, Gw = ["innerHTML"], Xw = {
  key: 0,
  class: "brv-chat__msg brv-chat__msg--assistant"
}, Jw = {
  key: 1,
  class: "brv-chat__compose"
}, Ww = ["disabled"], Yw = { class: "brv-chat__btns" }, jw = ["disabled"], Zw = ["disabled"], zw = {
  key: 2,
  class: "brv-ai__hint"
}, $w = {
  key: 2,
  class: "brv-section"
}, qw = {
  key: 0,
  class: "brv-field"
}, A0 = ["innerHTML"], e0 = {
  key: 1,
  class: "brv-field"
}, t0 = ["innerHTML"], s0 = {
  key: 2,
  class: "brv-field"
}, r0 = ["innerHTML"], n0 = {
  key: 3,
  class: "brv-section"
}, o0 = {
  key: 0,
  class: "brv-row"
}, i0 = { class: "brv-selectable" }, a0 = {
  key: 1,
  class: "brv-row"
}, l0 = { class: "brv-selectable" }, c0 = {
  key: 2,
  class: "brv-row"
}, d0 = { class: "brv-selectable" }, u0 = {
  key: 3,
  class: "brv-row"
}, f0 = { class: "brv-selectable" }, B0 = {
  key: 4,
  class: "brv-row"
}, g0 = { class: "brv-selectable" }, h0 = { class: "brv-section" }, p0 = { class: "brv-label-row" }, w0 = { class: "brv-log-tabs" }, Q0 = ["onClick"], C0 = { class: "brv-log-filters" }, b0 = { class: "brv-filter-chip brv-filter-error" }, U0 = { class: "brv-filter-chip brv-filter-warn" }, F0 = { class: "brv-filter-chip brv-filter-log" }, m0 = { class: "brv-log-list" }, x0 = ["onClick"], v0 = { class: "brv-log-time brv-selectable" }, y0 = { class: "brv-log-lv" }, E0 = {
  key: 0,
  class: "brv-log-empty"
}, H0 = { class: "brv-log-filters" }, I0 = { class: "brv-filter-chip brv-filter-error" }, _0 = { class: "brv-filter-chip brv-filter-warn" }, L0 = { class: "brv-filter-chip brv-filter-log" }, S0 = { class: "brv-log-list" }, k0 = ["onClick"], T0 = { class: "brv-log-time brv-selectable" }, K0 = { class: "brv-log-lv" }, D0 = { class: "brv-log-logger brv-selectable" }, R0 = {
  key: 0,
  class: "brv-log-empty"
}, O0 = { class: "brv-log-filters" }, M0 = { class: "brv-filter-chip brv-filter-error" }, N0 = { class: "brv-filter-chip brv-filter-log" }, P0 = { class: "brv-log-list" }, V0 = ["onClick"], G0 = { class: "brv-net-method brv-selectable" }, X0 = { class: "brv-net-dur brv-selectable" }, J0 = { class: "brv-log-time brv-selectable" }, W0 = {
  key: 0,
  class: "brv-net-detail brv-selectable"
}, Y0 = { key: 0 }, j0 = { key: 1 }, Z0 = { key: 2 }, z0 = {
  key: 3,
  class: "brv-log--error"
}, $0 = {
  key: 0,
  class: "brv-log-empty"
}, q0 = {
  key: 3,
  class: "brv-log-list"
}, AQ = ["onClick"], eQ = { class: "brv-log-time brv-selectable" }, tQ = {
  key: 0,
  class: "brv-log-payload brv-selectable"
}, sQ = {
  key: 0,
  class: "brv-log-empty"
};
function rQ(e, A, t, s, r, n) {
  var o, i, a, c, d;
  return p(), w("div", up, [
    r.isOpen ? (p(), w("div", {
      key: 0,
      class: "brv-overlay",
      onMousedown: A[23] || (A[23] = (l) => r.backdropPressed = l.target === l.currentTarget),
      onClick: A[24] || (A[24] = As((l) => r.backdropPressed && n.close(), ["self"]))
    }, [
      u("div", fp, [
        (p(), Zo(Ou("style"), {
          textContent: b(r.fmtCss)
        }, null, 8, ["textContent"])),
        u("div", Bp, [
          u("span", gp, [
            A[25] || (A[25] = V(" 저장된 버그 리포트 ", -1)),
            n.hotkey ? (p(), w("span", hp, b(n.hotkey), 1)) : y("", !0)
          ]),
          n.viewProjects.length > 1 ? (p(), w("span", pp, [
            (p(!0), w(M, null, q(n.viewProjects, (l) => (p(), w("button", {
              key: l.key,
              class: Y({ "brv-projects__on": r.project === l.key }),
              onClick: (f) => n.switchProject(l.key)
            }, b(l.label), 11, wp))), 128))
          ])) : y("", !0),
          u("button", {
            class: "brv-close",
            onClick: A[0] || (A[0] = (...l) => n.close && n.close(...l))
          }, "✕")
        ]),
        r.notice ? (p(), w("div", {
          key: 0,
          class: Y(["brv-notice", `brv-notice--${r.notice.type}`])
        }, [
          u("b", null, b(r.notice.title), 1),
          V(" " + b(r.notice.message), 1)
        ], 2)) : y("", !0),
        u("div", Qp, [
          r.selected ? (p(), w(M, { key: 1 }, [
            u("button", {
              class: "brv-back",
              onClick: A[1] || (A[1] = (l) => r.selected = null)
            }, "← 목록"),
            r.detailLoading ? (p(), w("div", Hp, [...A[27] || (A[27] = [
              u("span", { class: "brv-spin" }, null, -1),
              V(" 불러오는 중... ", -1)
            ])])) : r.detail ? (p(), w(M, { key: 1 }, [
              r.detail.screenshot ? (p(), w("div", Ip, [
                A[28] || (A[28] = u("div", { class: "brv-label" }, "화면 캡처", -1)),
                u("img", {
                  src: r.detail.screenshot,
                  class: "brv-screenshot",
                  alt: "screenshot"
                }, null, 8, _p)
              ])) : y("", !0),
              r.bigShot ? (p(), w("div", {
                key: 1,
                class: "brv-shots__big",
                onClick: A[2] || (A[2] = (l) => r.bigShot = null)
              }, [
                u("img", {
                  src: r.shotUrls[r.bigShot.file],
                  alt: r.bigShot.name
                }, null, 8, Lp),
                u("div", Sp, [
                  V(b(r.bigShot.name) + " · " + b(r.bigShot.label) + " ", 1),
                  A[29] || (A[29] = u("span", { class: "brv-suggest__hint" }, "(눌러서 닫기)", -1))
                ])
              ])) : y("", !0),
              u("div", kp, [
                A[34] || (A[34] = u("div", { class: "brv-label" }, "기본 정보", -1)),
                u("div", Tp, [
                  A[30] || (A[30] = u("span", null, "심각도", -1)),
                  u("span", {
                    class: Y(["brv-badge", `brv-sev--${(o = r.detail.severity) == null ? void 0 : o.toLowerCase()}`])
                  }, b(r.detail.severity), 3)
                ]),
                u("div", Kp, [
                  A[31] || (A[31] = u("span", null, "상태", -1)),
                  u("span", Dp, [
                    r.statusSaving ? (p(), w("span", Rp)) : y("", !0),
                    u("select", {
                      class: Y(["brv-status-select", `brv-st--${(r.detail.status || "OPEN").toLowerCase()}`]),
                      value: r.detail.status || "OPEN",
                      disabled: r.statusSaving,
                      onChange: A[3] || (A[3] = (l) => n.changeStatus(l.target.value))
                    }, [
                      (p(!0), w(M, null, q(r.STATUSES, (l) => (p(), w("option", {
                        key: l.value,
                        value: l.value
                      }, b(l.label), 9, Mp))), 128))
                    ], 42, Op)
                  ])
                ]),
                u("div", Np, [
                  A[32] || (A[32] = u("span", null, "보고자", -1)),
                  u("span", Pp, b(r.detail.reporter), 1)
                ]),
                u("div", Vp, [
                  A[33] || (A[33] = u("span", null, "일시", -1)),
                  u("span", Gp, b(n.formatDate(r.detail.insertDate)), 1)
                ])
              ]),
              u("div", Xp, [
                u("div", Jp, [
                  A[36] || (A[36] = u("span", { class: "brv-label brv-ai__title" }, "AI 자동 수정", -1)),
                  u("span", {
                    class: Y(["brv-fix", `brv-fix--${(r.detail.fixStatus || "none").toLowerCase()}`])
                  }, b(n.fixLabel(r.detail.fixStatus)), 3),
                  r.fixBusy || n.fixInProgress ? (p(), w("span", Wp)) : y("", !0),
                  n.fixInProgress && n.fixElapsed ? (p(), w("span", Yp, b(n.fixElapsed), 1)) : n.deployPending ? (p(), w("span", jp, [...A[35] || (A[35] = [
                    u("span", { class: "brv-spin brv-spin--sm" }, null, -1),
                    V(" 배포 중", -1)
                  ])])) : y("", !0),
                  r.detail.fixStatus && n.fixable ? (p(), w("span", Zp, [
                    u("button", {
                      class: "brv-ai__tool",
                      disabled: r.fixBusy,
                      onClick: A[4] || (A[4] = (...l) => n.refreshDetail && n.refreshDetail(...l)),
                      title: "상태·로그 다시 읽기 (PR 이 열려 있으면 GitHub 와 맞춤)"
                    }, "새로고침", 8, zp),
                    u("button", {
                      class: "brv-ai__tool",
                      disabled: r.fixBusy || n.fixInProgress,
                      onClick: A[5] || (A[5] = (...l) => n.requestFix && n.requestFix(...l)),
                      title: "앞선 대화·수정을 잇지 않고 원인 조사부터 새로 고칩니다"
                    }, "처음부터 다시", 8, $p),
                    r.detail.fixStatus === "MERGED" && r.detail.fixMergeSha ? (p(), w("button", {
                      key: 0,
                      class: "brv-ai__tool brv-ai__tool--danger",
                      disabled: r.fixBusy || n.fixInProgress,
                      onClick: A[6] || (A[6] = (...l) => n.revertFix && n.revertFix(...l)),
                      title: "병합된 이 수정을 되돌리는 브랜치·PR 을 만듭니다 (자동 병합 프로젝트면 병합까지)"
                    }, "되돌리기", 8, qp)) : y("", !0)
                  ])) : y("", !0)
                ]),
                !r.detail.fixStatus && r.detail.tool ? (p(), w("div", Aw, "버그 신고 도구 자체의 문제로 접수됐습니다. 앱 코드 수정 대상이 아니라 운영자가 도구 저장소에서 처리합니다.")) : !r.detail.fixStatus && !n.fixable ? (p(), w("div", ew, "이 프로젝트의 수정은 운영자가 관리 콘솔에서 진행합니다. 신고는 접수됐습니다.")) : r.detail.fixStatus ? (p(), w(M, { key: 3 }, [
                  r.detail.fixPrUrl || r.detail.fixBranch ? (p(), w("div", rw, [
                    r.detail.fixPrUrl ? (p(), w("a", {
                      key: 0,
                      class: "brv-link brv-ai__pr",
                      href: r.detail.fixPrUrl,
                      target: "_blank",
                      rel: "noopener"
                    }, "PR #" + b(n.prNumber), 9, nw)) : y("", !0),
                    r.detail.fixRevertPrUrl ? (p(), w("a", {
                      key: 1,
                      class: "brv-link",
                      href: r.detail.fixRevertPrUrl,
                      target: "_blank",
                      rel: "noopener"
                    }, "되돌리기 PR", 8, ow)) : y("", !0),
                    r.detail.fixBranch ? (p(), w("span", {
                      key: 2,
                      class: "brv-ai__branch brv-selectable",
                      title: r.detail.fixStatus === "READY" ? r.detail.fixPushed ? "AI 수정본이 담긴 작업 브랜치 - 원격 저장소에 같은 이름으로 올라가 있습니다 (PR 은 아직 없음)" : "AI 수정본이 담긴 작업 브랜치 - 아직 키트 서버 안에만 있고 원격에는 없습니다 (콘솔에서 내보내기)" : "AI 수정본이 담긴 작업 브랜치 (기준 브랜치는 건드리지 않음)"
                    }, b(r.detail.fixBranch), 9, iw)) : y("", !0),
                    r.detail.fixStatus === "READY" ? (p(), w("span", aw, b(r.detail.fixPushed ? "원격에 브랜치만 있음 · PR 없음" : "키트 서버 안에만 있음 · 원격에 없음"), 1)) : y("", !0),
                    r.detail.fixVersion != null ? (p(), w(M, { key: 4 }, [
                      u("span", lw, "v" + b(r.detail.fixVersion), 1),
                      r.detail.preview ? (p(), w(M, { key: 0 }, [
                        r.detail.preview.status === "UP" && r.detail.preview.url ? (p(), w("a", {
                          key: 0,
                          class: "brv-link",
                          href: r.detail.preview.url,
                          target: "_blank",
                          rel: "noopener",
                          title: "이 수정본으로 띄운 앱(프론트+백엔드+DB 사본)"
                        }, "미리보기 열기 ↗", 8, cw)) : n.previewPending ? (p(), w("span", dw, [
                          A[38] || (A[38] = u("span", { class: "brv-spin brv-spin--sm" }, null, -1)),
                          V(" 미리보기 준비 중(" + b(n.previewLabel) + ")", 1)
                        ])) : r.detail.preview.canPreview && n.fixable ? (p(), w("button", {
                          key: 2,
                          class: "brv-ai__tool",
                          disabled: r.fixBusy,
                          onClick: A[8] || (A[8] = (...l) => n.startPreview && n.startPreview(...l)),
                          title: "이 수정본으로 프론트·백엔드·DB 사본을 띄워 직접 써 봅니다 (몇 분)"
                        }, "미리보기 띄우기", 8, uw)) : y("", !0),
                        r.detail.preview.status === "FAILED" ? (p(), w("span", {
                          key: 3,
                          class: "brv-ai__hint",
                          title: r.detail.preview.error || ""
                        }, "미리보기 실패", 8, fw)) : y("", !0)
                      ], 64)) : y("", !0)
                    ], 64)) : y("", !0)
                  ])) : y("", !0),
                  r.detail.fixSummary ? (p(), w("div", {
                    key: 1,
                    class: "brv-ai__summary brv-selectable",
                    innerHTML: n.md(r.detail.fixSummary)
                  }, null, 8, Bw)) : y("", !0),
                  r.detail.fixReport || n.fixFiles.length ? (p(), w("details", gw, [
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
                      n.fixRepro.note ? (p(), w("span", hw, " · " + b(n.fixRepro.note), 1)) : y("", !0),
                      (i = n.fixRepro.evidence) != null && i.length ? (p(), w("ul", pw, [
                        (p(!0), w(M, null, q(n.fixRepro.evidence.slice(0, 6), (l, f) => (p(), w("li", { key: f }, [
                          u("code", null, b(l), 1)
                        ]))), 128))
                      ])) : y("", !0)
                    ], 2)) : y("", !0),
                    r.detail.fixReport ? (p(), w("div", {
                      key: 1,
                      class: "brv-result__body brv-selectable",
                      innerHTML: n.md(r.detail.fixReport)
                    }, null, 8, ww)) : y("", !0),
                    n.fixFiles.length ? (p(), w("div", Qw, [
                      u("span", Cw, "바뀐 파일 (" + b(n.fixFiles.length) + ")", 1),
                      u("ul", null, [
                        (p(!0), w(M, null, q(n.fixFiles, (l) => (p(), w("li", { key: l }, [
                          u("code", null, b(l), 1)
                        ]))), 128))
                      ])
                    ])) : y("", !0)
                  ])) : y("", !0),
                  n.kgLayout ? (p(), w("details", bw, [
                    A[41] || (A[41] = u("summary", null, [
                      V("관련 기능·파일 "),
                      u("span", { class: "brv-suggest__hint" }, "지식 그래프에서 이 신고와 이어진 부분 · 노란 테두리 = 신고 내용과 직접 맞는 것")
                    ], -1)),
                    u("div", Uw, [
                      (p(), w("svg", {
                        viewBox: `0 0 ${n.kgLayout.w} ${n.kgLayout.h}`,
                        style: Ls({ width: n.kgLayout.w + "px", height: n.kgLayout.h + "px" }),
                        class: "brv-kg__svg"
                      }, [
                        (p(!0), w(M, null, q(n.kgLayout.cols, (l) => (p(), w("text", {
                          key: "c" + l.layer,
                          x: l.x,
                          y: "12",
                          class: "brv-kg__col"
                        }, b(l.title), 9, mw))), 128)),
                        (p(!0), w(M, null, q(n.kgLayout.edges, (l, f) => (p(), w("path", {
                          key: "e" + f,
                          d: l.d,
                          class: Y(["brv-kg__edge", "brv-kg__edge--" + l.rel, { "brv-kg__edge--dim": r.kgHover && l.from !== r.kgHover && l.to !== r.kgHover }])
                        }, null, 10, xw))), 128)),
                        (p(!0), w(M, null, q(n.kgLayout.nodes, (l) => (p(), w("g", {
                          key: l.id,
                          transform: `translate(${l.x},${l.y})`,
                          class: Y(["brv-kg__node", { "brv-kg__node--hit": l.hit, "brv-kg__node--dim": r.kgHover && r.kgHover !== l.id && !n.kgNbr(l.id) }]),
                          onMouseenter: (f) => r.kgHover = l.id,
                          onMouseleave: A[9] || (A[9] = (f) => r.kgHover = null)
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
                          }, null, 8, yw),
                          u("text", Ew, b(l.short), 1)
                        ], 42, vw))), 128))
                      ], 12, Fw))
                    ])
                  ])) : y("", !0),
                  n.fixShots.length ? (p(), w("div", Hw, [
                    u("div", Iw, [
                      A[42] || (A[42] = V("화면 확인 ", -1)),
                      u("span", _w, b(n.fixShots[n.fixShots.length - 1].label), 1)
                    ]),
                    u("div", Lw, [
                      (p(!0), w(M, null, q(n.fixShots, (l) => (p(), w("figure", {
                        key: l.file,
                        class: "brv-shots__item",
                        onClick: (f) => n.openShot(l)
                      }, [
                        r.shotUrls[l.file] ? (p(), w("img", {
                          key: 0,
                          src: r.shotUrls[l.file],
                          alt: l.name
                        }, null, 8, kw)) : (p(), w("div", Tw, "…")),
                        u("figcaption", null, b(l.name.replace(/\.png$/i, "")), 1)
                      ], 8, Sw))), 128))
                    ])
                  ])) : y("", !0),
                  r.detail.fixLog ? (p(), w("details", {
                    key: 5,
                    class: "brv-fix-log",
                    open: n.fixInProgress || n.deployPending
                  }, [
                    u("summary", null, [
                      A[43] || (A[43] = V("진행 로그 ", -1)),
                      u("span", Dw, b(n.logLineCount) + "줄", 1)
                    ]),
                    u("div", {
                      ref: "fixLogPre",
                      class: "brv-selectable brv-logbox",
                      innerHTML: n.logH(r.detail.fixLog)
                    }, null, 8, Rw)
                  ], 8, Kw)) : y("", !0),
                  n.fixSuggestions.length ? (p(), w("div", Ow, [
                    A[44] || (A[44] = u("div", { class: "brv-suggest__title" }, [
                      V("추천 개선 "),
                      u("span", { class: "brv-suggest__hint" }, "실행을 누르면 그 내용으로 이어서 고칩니다")
                    ], -1)),
                    (p(!0), w(M, null, q(n.fixSuggestions, (l, f) => (p(), w("div", {
                      key: f,
                      class: "brv-suggest__item"
                    }, [
                      u("span", {
                        class: "brv-suggest__text brv-selectable",
                        innerHTML: n.md(l)
                      }, null, 8, Mw),
                      n.fixable ? (p(), w("button", {
                        key: 0,
                        class: "brv-fix-btn brv-fix-btn--ghost brv-suggest__run",
                        disabled: r.fixBusy || n.fixInProgress,
                        onClick: (g) => n.runSuggestion(l)
                      }, "실행", 8, Nw)) : y("", !0)
                    ]))), 128))
                  ])) : y("", !0),
                  u("div", Pw, [
                    (p(!0), w(M, null, q(n.fixChat, (l, f) => (p(), w("div", {
                      key: f,
                      class: Y(["brv-chat__msg", `brv-chat__msg--${l.role}`])
                    }, [
                      u("span", Vw, b(l.role === "user" ? "나" : "AI"), 1),
                      u("div", {
                        class: "brv-chat__text brv-selectable",
                        innerHTML: n.md(l.text)
                      }, null, 8, Gw)
                    ], 2))), 128)),
                    n.fixInProgress && n.fixChat.length && n.fixChat[n.fixChat.length - 1].role === "user" ? (p(), w("div", Xw, [...A[45] || (A[45] = [
                      u("span", { class: "brv-chat__who" }, "AI", -1),
                      u("div", { class: "brv-chat__text" }, [
                        u("span", { class: "brv-spin brv-spin--sm" }),
                        V(" 생각 중…")
                      ], -1)
                    ])])) : y("", !0),
                    n.fixable ? (p(), w("div", Jw, [
                      mA(u("textarea", {
                        "onUpdate:modelValue": A[10] || (A[10] = (l) => r.chatInput = l),
                        class: "brv-chat__input",
                        rows: "2",
                        disabled: r.fixBusy || n.fixInProgress,
                        placeholder: "질문: 왜 이렇게 고쳤어?   수정 요청: 라이트 테마에서도 맞게 고쳐줘",
                        onKeydown: [
                          A[11] || (A[11] = ji(As((l) => n.sendChat("ask"), ["ctrl", "prevent"]), ["enter"])),
                          A[12] || (A[12] = ji(As((l) => n.sendChat("ask"), ["meta", "prevent"]), ["enter"]))
                        ]
                      }, null, 40, Ww), [
                        [gr, r.chatInput]
                      ]),
                      u("div", Yw, [
                        u("button", {
                          class: "brv-fix-btn brv-fix-btn--ghost",
                          disabled: r.fixBusy || n.fixInProgress || !r.chatInput.trim(),
                          onClick: A[13] || (A[13] = (l) => n.sendChat("ask")),
                          title: "코드는 바꾸지 않고 답만 합니다 (Ctrl+Enter)"
                        }, "질문", 8, jw),
                        u("button", {
                          class: "brv-fix-btn",
                          disabled: r.fixBusy || n.fixInProgress || !r.chatInput.trim(),
                          onClick: A[14] || (A[14] = (l) => n.sendChat("change")),
                          title: "앞서 고친 내용에 이어서 고치고 검증 → PR → 병합까지"
                        }, "수정 요청", 8, Zw)
                      ])
                    ])) : y("", !0),
                    n.fixable ? (p(), w("div", zw, "질문은 코드를 바꾸지 않고 답만, 수정 요청은 이어서 고쳐 검증·PR·병합까지 진행합니다.")) : y("", !0)
                  ])
                ], 64)) : (p(), w("div", tw, [
                  u("button", {
                    class: "brv-fix-btn brv-fix-btn--lg",
                    disabled: r.fixBusy,
                    onClick: A[7] || (A[7] = (...l) => n.requestFix && n.requestFix(...l))
                  }, "AI 에게 수정 요청", 8, sw),
                  A[37] || (A[37] = u("span", { class: "brv-ai__hint" }, "서버의 AI 가 원인을 찾아 고치고 검증 → PR → 병합 → 배포까지 자동으로 진행합니다. 진행 상황은 여기에 실시간으로 표시됩니다.", -1))
                ]))
              ]),
              r.detail.problem || r.detail.reproSteps || r.detail.expectedResult ? (p(), w("div", $w, [
                A[49] || (A[49] = u("div", { class: "brv-label" }, "내용", -1)),
                r.detail.problem ? (p(), w("div", qw, [
                  A[46] || (A[46] = u("div", { class: "brv-field-label" }, "문제 상황", -1)),
                  u("div", {
                    class: "brv-text brv-selectable",
                    innerHTML: n.md(r.detail.problem)
                  }, null, 8, A0)
                ])) : y("", !0),
                r.detail.reproSteps ? (p(), w("div", e0, [
                  A[47] || (A[47] = u("div", { class: "brv-field-label" }, "재현 단계", -1)),
                  u("div", {
                    class: "brv-text brv-selectable",
                    innerHTML: n.md(r.detail.reproSteps)
                  }, null, 8, t0)
                ])) : y("", !0),
                r.detail.expectedResult ? (p(), w("div", s0, [
                  A[48] || (A[48] = u("div", { class: "brv-field-label" }, "기대 결과", -1)),
                  u("div", {
                    class: "brv-text brv-selectable",
                    innerHTML: n.md(r.detail.expectedResult)
                  }, null, 8, r0)
                ])) : y("", !0)
              ])) : y("", !0),
              n.parsedContext ? (p(), w("div", n0, [
                A[55] || (A[55] = u("div", { class: "brv-label" }, "컨텍스트", -1)),
                n.parsedContext.camera ? (p(), w("div", o0, [
                  A[50] || (A[50] = u("span", null, "카메라", -1)),
                  u("span", i0, b(n.parsedContext.camera.longitude) + "°, " + b(n.parsedContext.camera.latitude) + "° · 고도 " + b(n.parsedContext.camera.height) + "m · H" + b(n.parsedContext.camera.heading) + "° P" + b(n.parsedContext.camera.pitch) + "° ", 1)
                ])) : y("", !0),
                (a = n.parsedContext.menus) != null && a.header ? (p(), w("div", a0, [
                  A[51] || (A[51] = u("span", null, "상단 탭", -1)),
                  u("span", l0, b(n.parsedContext.menus.header), 1)
                ])) : y("", !0),
                n.parsedContext.activeData ? (p(), w("div", c0, [
                  A[52] || (A[52] = u("span", null, "데이터셋", -1)),
                  u("span", d0, b(((c = n.parsedContext.activeData.datasets) == null ? void 0 : c.map((l) => l._displayName).join(", ")) || "없음"), 1)
                ])) : y("", !0),
                (d = n.parsedContext.activeData) != null && d.terrain ? (p(), w("div", u0, [
                  A[53] || (A[53] = u("span", null, "지형", -1)),
                  u("span", f0, b(n.parsedContext.activeData.terrain), 1)
                ])) : y("", !0),
                n.parsedContext.datetime ? (p(), w("div", B0, [
                  A[54] || (A[54] = u("span", null, "발생 시각", -1)),
                  u("span", g0, b(n.parsedContext.datetime), 1)
                ])) : y("", !0)
              ])) : y("", !0),
              u("div", h0, [
                u("div", p0, [
                  A[56] || (A[56] = u("div", {
                    class: "brv-label",
                    style: { "margin-bottom": "0" }
                  }, "로그", -1)),
                  u("div", w0, [
                    (p(!0), w(M, null, q(n.logTabs, (l) => (p(), w("button", {
                      key: l.id,
                      class: Y(["brv-log-tab", { active: r.logTab === l.id }]),
                      onClick: (f) => r.logTab = l.id
                    }, [
                      V(b(l.label) + " ", 1),
                      l.count ? (p(), w("span", {
                        key: 0,
                        class: Y(["brv-log-tab-count", l.countClass])
                      }, b(l.count), 3)) : y("", !0)
                    ], 10, Q0))), 128))
                  ])
                ]),
                r.logTab === "front" ? (p(), w(M, { key: 0 }, [
                  u("div", C0, [
                    u("label", b0, [
                      mA(u("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": A[15] || (A[15] = (l) => r.showFE.error = l)
                      }, null, 512), [
                        [DA, r.showFE.error]
                      ]),
                      V(" 오류 (" + b(n.countFE("error")) + ") ", 1)
                    ]),
                    u("label", U0, [
                      mA(u("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": A[16] || (A[16] = (l) => r.showFE.warn = l)
                      }, null, 512), [
                        [DA, r.showFE.warn]
                      ]),
                      V(" 경고 (" + b(n.countFE("warn")) + ") ", 1)
                    ]),
                    u("label", F0, [
                      mA(u("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": A[17] || (A[17] = (l) => r.showFE.log = l)
                      }, null, 512), [
                        [DA, r.showFE.log]
                      ]),
                      V(" 로그 (" + b(n.countFE("log")) + ") ", 1)
                    ])
                  ]),
                  u("div", m0, [
                    (p(!0), w(M, null, q(n.filteredFrontLogs, (l, f) => {
                      var g;
                      return p(), w("div", {
                        key: f,
                        class: Y(["brv-log-item", `brv-log--${l.level}`]),
                        onClick: (Q) => n.toggleExpand("f" + f)
                      }, [
                        u("span", v0, b((g = l.time) == null ? void 0 : g.slice(11, 23)), 1),
                        u("span", y0, b(l.level), 1),
                        u("span", {
                          class: Y(["brv-log-msg brv-selectable", { expanded: r.expanded.has("f" + f) }])
                        }, b(l.message), 3)
                      ], 10, x0);
                    }), 128)),
                    n.filteredFrontLogs.length === 0 ? (p(), w("div", E0, "표시할 로그 없음")) : y("", !0)
                  ])
                ], 64)) : y("", !0),
                r.logTab === "back" ? (p(), w(M, { key: 1 }, [
                  u("div", H0, [
                    u("label", I0, [
                      mA(u("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": A[18] || (A[18] = (l) => r.showBE.error = l)
                      }, null, 512), [
                        [DA, r.showBE.error]
                      ]),
                      V(" ERROR (" + b(n.countBE("ERROR")) + ") ", 1)
                    ]),
                    u("label", _0, [
                      mA(u("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": A[19] || (A[19] = (l) => r.showBE.warn = l)
                      }, null, 512), [
                        [DA, r.showBE.warn]
                      ]),
                      V(" WARN (" + b(n.countBE("WARN")) + ") ", 1)
                    ]),
                    u("label", L0, [
                      mA(u("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": A[20] || (A[20] = (l) => r.showBE.info = l)
                      }, null, 512), [
                        [DA, r.showBE.info]
                      ]),
                      V(" INFO (" + b(n.countBE("INFO")) + ") ", 1)
                    ])
                  ]),
                  u("div", S0, [
                    (p(!0), w(M, null, q(n.filteredBackLogs, (l, f) => {
                      var g, Q;
                      return p(), w("div", {
                        key: f,
                        class: Y(["brv-log-item", `brv-log--${(g = l.level) == null ? void 0 : g.toLowerCase()}`]),
                        onClick: (U) => n.toggleExpand("b" + f)
                      }, [
                        u("span", T0, b((Q = l.time) == null ? void 0 : Q.slice(11, 23)), 1),
                        u("span", K0, b(l.level), 1),
                        u("span", D0, b(n.shortLogger(l.logger)), 1),
                        u("span", {
                          class: Y(["brv-log-msg brv-selectable", { expanded: r.expanded.has("b" + f) }])
                        }, b(l.message), 3)
                      ], 10, k0);
                    }), 128)),
                    n.filteredBackLogs.length === 0 ? (p(), w("div", R0, "표시할 로그 없음")) : y("", !0)
                  ])
                ], 64)) : y("", !0),
                r.logTab === "net" ? (p(), w(M, { key: 2 }, [
                  u("div", O0, [
                    u("label", M0, [
                      mA(u("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": A[21] || (A[21] = (l) => r.showNet.error = l)
                      }, null, 512), [
                        [DA, r.showNet.error]
                      ]),
                      V(" 에러 (" + b(n.networkLogs.filter((l) => l.error || l.status >= 400).length) + ") ", 1)
                    ]),
                    u("label", N0, [
                      mA(u("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": A[22] || (A[22] = (l) => r.showNet.ok = l)
                      }, null, 512), [
                        [DA, r.showNet.ok]
                      ]),
                      V(" 성공 (" + b(n.networkLogs.filter((l) => !l.error && l.status < 400).length) + ") ", 1)
                    ])
                  ]),
                  u("div", P0, [
                    (p(!0), w(M, null, q(n.filteredNetLogs, (l, f) => {
                      var g;
                      return p(), w("div", {
                        key: f,
                        class: Y(["brv-net-item", n.netClass(l)]),
                        onClick: (Q) => n.toggleExpand("n" + f)
                      }, [
                        u("span", {
                          class: Y(["brv-net-status", n.statusClass(l.status)])
                        }, b(l.status || "ERR"), 3),
                        u("span", G0, b(l.method), 1),
                        u("span", {
                          class: Y(["brv-log-msg brv-selectable", { expanded: r.expanded.has("n" + f) }])
                        }, b(l.url), 3),
                        u("span", X0, b(l.duration) + "ms", 1),
                        u("span", J0, b((g = l.time) == null ? void 0 : g.slice(11, 19)), 1)
                      ], 10, V0);
                    }), 128)),
                    (p(!0), w(M, null, q(n.filteredNetLogs, (l, f) => (p(), w(M, {
                      key: "d" + f
                    }, [
                      r.expanded.has("n" + f) ? (p(), w("div", W0, [
                        l.params ? (p(), w("div", Y0, [
                          A[57] || (A[57] = u("b", null, "Params:", -1)),
                          V(" " + b(l.params), 1)
                        ])) : y("", !0),
                        l.requestBody ? (p(), w("div", j0, [
                          A[58] || (A[58] = u("b", null, "Request:", -1)),
                          V(" " + b(l.requestBody), 1)
                        ])) : y("", !0),
                        l.responseBody ? (p(), w("div", Z0, [
                          A[59] || (A[59] = u("b", null, "Response:", -1)),
                          V(" " + b(l.responseBody), 1)
                        ])) : y("", !0),
                        l.error ? (p(), w("div", z0, [
                          A[60] || (A[60] = u("b", null, "Error:", -1)),
                          V(" " + b(l.error), 1)
                        ])) : y("", !0)
                      ])) : y("", !0)
                    ], 64))), 128)),
                    n.filteredNetLogs.length === 0 ? (p(), w("div", $0, "표시할 요청 없음")) : y("", !0)
                  ])
                ], 64)) : y("", !0),
                r.logTab === "mutation" ? (p(), w("div", q0, [
                  (p(!0), w(M, null, q(n.parsedMutationLog, (l, f) => (p(), w("div", {
                    key: f,
                    class: "brv-log-item",
                    onClick: (g) => n.toggleExpand("m" + f)
                  }, [
                    u("span", eQ, b(l.time), 1),
                    u("span", {
                      class: Y(["brv-log-msg brv-mutation brv-selectable", { expanded: r.expanded.has("m" + f) }])
                    }, b(l.type), 3),
                    l.payload !== null ? (p(), w("span", tQ, b(n.formatPayload(l.payload)), 1)) : y("", !0)
                  ], 8, AQ))), 128)),
                  n.parsedMutationLog.length === 0 ? (p(), w("div", sQ, "기록된 mutation 없음")) : y("", !0)
                ])) : y("", !0)
              ])
            ], 64)) : y("", !0)
          ], 64)) : (p(), w(M, { key: 0 }, [
            r.loading ? (p(), w("div", Cp, [...A[26] || (A[26] = [
              u("span", { class: "brv-spin" }, null, -1),
              V(" 불러오는 중... ", -1)
            ])])) : r.list.length === 0 ? (p(), w("div", bp, "저장된 리포트가 없습니다.")) : (p(), w("div", Up, [
              (p(!0), w(M, null, q(r.list, (l) => {
                var f;
                return p(), w("div", {
                  key: l.bugReportId,
                  class: "brv-item",
                  onClick: (g) => n.openDetail(l.bugReportId)
                }, [
                  u("span", {
                    class: Y(["brv-badge", `brv-sev--${(f = l.severity) == null ? void 0 : f.toLowerCase()}`])
                  }, b(l.severity), 3),
                  u("span", {
                    class: Y(["brv-status", `brv-st--${(l.status || "OPEN").toLowerCase()}`])
                  }, b(n.statusLabel(l.status)), 3),
                  l.tool ? (p(), w("span", mp, "도구")) : y("", !0),
                  u("span", xp, b(l.problem || "(내용 없음)"), 1),
                  l.fixStatus ? (p(), w("span", {
                    key: 1,
                    class: Y(["brv-fix", `brv-fix--${l.fixStatus.toLowerCase()}`]),
                    title: n.fixLabel(l.fixStatus)
                  }, b(n.fixShort(l.fixStatus)), 11, vp)) : y("", !0),
                  u("span", yp, b(l.reporter) + " · " + b(n.formatDate(l.insertDate)), 1),
                  u("button", {
                    class: "brv-del",
                    onClick: As((g) => n.deleteReport(l.bugReportId), ["stop"]),
                    title: "삭제"
                  }, "✕", 8, Ep)
                ], 8, Fp);
              }), 128))
            ]))
          ], 64))
        ])
      ])
    ], 32)) : y("", !0)
  ]);
}
const nQ = /* @__PURE__ */ $o(dp, [["render", rQ], ["styles", [ap]], ["__scopeId", "data-v-3539add5"]]);
function Hn({ endpoint: e, project: A, apiKey: t, user: s, adminKey: r }) {
  const n = e ? `${String(e).replace(/\/+$/, "")}/p/${A}` : "", o = !!n;
  async function i(a, c, d, { query: l, blob: f } = {}) {
    if (!o) throw new Error("버그 리포트 서버가 설정되지 않았습니다(endpoint).");
    const g = { Accept: "application/json" };
    d !== void 0 && (g["Content-Type"] = "application/json"), t && (g["X-Bugfix-Key"] = t), r && (g["X-Bugfix-Admin"] = r);
    const Q = typeof s == "function" ? s() : s;
    Q && (g["X-Bugfix-User"] = String(Q));
    const U = l ? "?" + new URLSearchParams(l).toString() : "", m = await fetch(n + c + U, { method: a, headers: g, body: d === void 0 ? void 0 : JSON.stringify(d) });
    if (f) {
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
    save: (a) => i("POST", "/reports", a),
    list: () => i("GET", "/reports"),
    get: (a) => i("GET", `/reports/${a}`),
    fixState: (a) => i("GET", `/reports/${a}/fix`),
    setStatus: (a, c) => i("PATCH", `/reports/${a}/status`, { status: c }),
    remove: (a) => i("DELETE", `/reports/${a}`),
    requestFix: (a) => i("POST", `/reports/${a}/request-fix`),
    fixChat: (a, c, d) => i("POST", `/reports/${a}/fix-chat`, { message: c, mode: d }),
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
const $r = (e, A) => kA.fromClientRect(e, A.getBoundingClientRect()), oQ = (e) => {
  const A = e.body, t = e.documentElement;
  if (!A || !t)
    throw new Error("Unable to get document size");
  const s = Math.max(Math.max(A.scrollWidth, t.scrollWidth), Math.max(A.offsetWidth, t.offsetWidth), Math.max(A.clientWidth, t.clientWidth)), r = Math.max(Math.max(A.scrollHeight, t.scrollHeight), Math.max(A.offsetHeight, t.offsetHeight), Math.max(A.clientHeight, t.clientHeight));
  return new kA(0, 0, s, r);
};
var qr = function(e) {
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
}, sa = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", iQ = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Xs = 0; Xs < sa.length; Xs++)
  iQ[sa.charCodeAt(Xs)] = Xs;
var ra = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", es = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Js = 0; Js < ra.length; Js++)
  es[ra.charCodeAt(Js)] = Js;
var aQ = function(e) {
  var A = e.length * 0.75, t = e.length, s, r = 0, n, o, i, a;
  e[e.length - 1] === "=" && (A--, e[e.length - 2] === "=" && A--);
  var c = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(A) : new Array(A), d = Array.isArray(c) ? c : new Uint8Array(c);
  for (s = 0; s < t; s += 4)
    n = es[e.charCodeAt(s)], o = es[e.charCodeAt(s + 1)], i = es[e.charCodeAt(s + 2)], a = es[e.charCodeAt(s + 3)], d[r++] = n << 2 | o >> 4, d[r++] = (o & 15) << 4 | i >> 2, d[r++] = (i & 3) << 6 | a & 63;
  return c;
}, lQ = function(e) {
  for (var A = e.length, t = [], s = 0; s < A; s += 2)
    t.push(e[s + 1] << 8 | e[s]);
  return t;
}, cQ = function(e) {
  for (var A = e.length, t = [], s = 0; s < A; s += 4)
    t.push(e[s + 3] << 24 | e[s + 2] << 16 | e[s + 1] << 8 | e[s]);
  return t;
}, Bt = 5, Ai = 11, In = 2, dQ = Ai - Bt, Qc = 65536 >> Bt, uQ = 1 << Bt, _n = uQ - 1, fQ = 1024 >> Bt, BQ = Qc + fQ, gQ = BQ, hQ = 32, pQ = gQ + hQ, wQ = 65536 >> Ai, QQ = 1 << dQ, CQ = QQ - 1, na = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint16Array(Array.prototype.slice.call(e, A, t));
}, bQ = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint32Array(Array.prototype.slice.call(e, A, t));
}, UQ = function(e, A) {
  var t = aQ(e), s = Array.isArray(t) ? cQ(t) : new Uint32Array(t), r = Array.isArray(t) ? lQ(t) : new Uint16Array(t), n = 24, o = na(r, n / 2, s[4] / 2), i = s[5] === 2 ? na(r, (n + s[4]) / 2) : bQ(s, Math.ceil((n + s[4]) / 4));
  return new FQ(s[0], s[1], s[2], s[3], o, i);
}, FQ = (
  /** @class */
  function() {
    function e(A, t, s, r, n, o) {
      this.initialValue = A, this.errorValue = t, this.highStart = s, this.highValueIndex = r, this.index = n, this.data = o;
    }
    return e.prototype.get = function(A) {
      var t;
      if (A >= 0) {
        if (A < 55296 || A > 56319 && A <= 65535)
          return t = this.index[A >> Bt], t = (t << In) + (A & _n), this.data[t];
        if (A <= 65535)
          return t = this.index[Qc + (A - 55296 >> Bt)], t = (t << In) + (A & _n), this.data[t];
        if (A < this.highStart)
          return t = pQ - wQ + (A >> Ai), t = this.index[t], t += A >> Bt & CQ, t = this.index[t], t = (t << In) + (A & _n), this.data[t];
        if (A <= 1114111)
          return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, e;
  }()
), oa = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", mQ = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Ws = 0; Ws < oa.length; Ws++)
  mQ[oa.charCodeAt(Ws)] = Ws;
var xQ = "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==", ia = 50, vQ = 1, Cc = 2, bc = 3, yQ = 4, EQ = 5, aa = 7, Uc = 8, la = 9, Ge = 10, ao = 11, ca = 12, lo = 13, HQ = 14, ts = 15, co = 16, Ys = 17, Wt = 18, IQ = 19, da = 20, uo = 21, Yt = 22, Ln = 23, Qt = 24, GA = 25, ss = 26, rs = 27, Ct = 28, _Q = 29, it = 30, LQ = 31, js = 32, Zs = 33, fo = 34, Bo = 35, go = 36, Es = 37, ho = 38, hr = 39, pr = 40, Sn = 41, Fc = 42, SQ = 43, kQ = [9001, 65288], mc = "!", Z = "×", zs = "÷", po = UQ(xQ), me = [it, go], wo = [vQ, Cc, bc, EQ], xc = [Ge, Uc], ua = [rs, ss], TQ = wo.concat(xc), fa = [ho, hr, pr, fo, Bo], KQ = [ts, lo], DQ = function(e, A) {
  A === void 0 && (A = "strict");
  var t = [], s = [], r = [];
  return e.forEach(function(n, o) {
    var i = po.get(n);
    if (i > ia ? (r.push(!0), i -= ia) : r.push(!1), ["normal", "auto", "loose"].indexOf(A) !== -1 && [8208, 8211, 12316, 12448].indexOf(n) !== -1)
      return s.push(o), t.push(co);
    if (i === yQ || i === ao) {
      if (o === 0)
        return s.push(o), t.push(it);
      var a = t[o - 1];
      return TQ.indexOf(a) === -1 ? (s.push(s[o - 1]), t.push(a)) : (s.push(o), t.push(it));
    }
    if (s.push(o), i === LQ)
      return t.push(A === "strict" ? uo : Es);
    if (i === Fc || i === _Q)
      return t.push(it);
    if (i === SQ)
      return n >= 131072 && n <= 196605 || n >= 196608 && n <= 262141 ? t.push(Es) : t.push(it);
    t.push(i);
  }), [s, t, r];
}, kn = function(e, A, t, s) {
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
}, Ba = function(e, A) {
  for (var t = e; t >= 0; ) {
    var s = A[t];
    if (s === Ge)
      t--;
    else
      return s;
  }
  return 0;
}, RQ = function(e, A, t, s, r) {
  if (t[s] === 0)
    return Z;
  var n = s - 1;
  if (Array.isArray(r) && r[n] === !0)
    return Z;
  var o = n - 1, i = n + 1, a = A[n], c = o >= 0 ? A[o] : 0, d = A[i];
  if (a === Cc && d === bc)
    return Z;
  if (wo.indexOf(a) !== -1)
    return mc;
  if (wo.indexOf(d) !== -1 || xc.indexOf(d) !== -1)
    return Z;
  if (Ba(n, A) === Uc)
    return zs;
  if (po.get(e[n]) === ao || (a === js || a === Zs) && po.get(e[i]) === ao || a === aa || d === aa || a === la || [Ge, lo, ts].indexOf(a) === -1 && d === la || [Ys, Wt, IQ, Qt, Ct].indexOf(d) !== -1 || Ba(n, A) === Yt || kn(Ln, Yt, n, A) || kn([Ys, Wt], uo, n, A) || kn(ca, ca, n, A))
    return Z;
  if (a === Ge)
    return zs;
  if (a === Ln || d === Ln)
    return Z;
  if (d === co || a === co)
    return zs;
  if ([lo, ts, uo].indexOf(d) !== -1 || a === HQ || c === go && KQ.indexOf(a) !== -1 || a === Ct && d === go || d === da || me.indexOf(d) !== -1 && a === GA || me.indexOf(a) !== -1 && d === GA || a === rs && [Es, js, Zs].indexOf(d) !== -1 || [Es, js, Zs].indexOf(a) !== -1 && d === ss || me.indexOf(a) !== -1 && ua.indexOf(d) !== -1 || ua.indexOf(a) !== -1 && me.indexOf(d) !== -1 || // (PR | PO) × ( OP | HY )? NU
  [rs, ss].indexOf(a) !== -1 && (d === GA || [Yt, ts].indexOf(d) !== -1 && A[i + 1] === GA) || // ( OP | HY ) × NU
  [Yt, ts].indexOf(a) !== -1 && d === GA || // NU ×	(NU | SY | IS)
  a === GA && [GA, Ct, Qt].indexOf(d) !== -1)
    return Z;
  if ([GA, Ct, Qt, Ys, Wt].indexOf(d) !== -1)
    for (var l = n; l >= 0; ) {
      var f = A[l];
      if (f === GA)
        return Z;
      if ([Ct, Qt].indexOf(f) !== -1)
        l--;
      else
        break;
    }
  if ([rs, ss].indexOf(d) !== -1)
    for (var l = [Ys, Wt].indexOf(a) !== -1 ? o : n; l >= 0; ) {
      var f = A[l];
      if (f === GA)
        return Z;
      if ([Ct, Qt].indexOf(f) !== -1)
        l--;
      else
        break;
    }
  if (ho === a && [ho, hr, fo, Bo].indexOf(d) !== -1 || [hr, fo].indexOf(a) !== -1 && [hr, pr].indexOf(d) !== -1 || [pr, Bo].indexOf(a) !== -1 && d === pr || fa.indexOf(a) !== -1 && [da, ss].indexOf(d) !== -1 || fa.indexOf(d) !== -1 && a === rs || me.indexOf(a) !== -1 && me.indexOf(d) !== -1 || a === Qt && me.indexOf(d) !== -1 || me.concat(GA).indexOf(a) !== -1 && d === Yt && kQ.indexOf(e[i]) === -1 || me.concat(GA).indexOf(d) !== -1 && a === Wt)
    return Z;
  if (a === Sn && d === Sn) {
    for (var g = t[n], Q = 1; g > 0 && (g--, A[g] === Sn); )
      Q++;
    if (Q % 2 !== 0)
      return Z;
  }
  return a === js && d === Zs ? Z : zs;
}, OQ = function(e, A) {
  A || (A = { lineBreak: "normal", wordBreak: "normal" });
  var t = DQ(e, A.lineBreak), s = t[0], r = t[1], n = t[2];
  (A.wordBreak === "break-all" || A.wordBreak === "break-word") && (r = r.map(function(i) {
    return [GA, it, Fc].indexOf(i) !== -1 ? Es : i;
  }));
  var o = A.wordBreak === "keep-all" ? n.map(function(i, a) {
    return i && e[a] >= 19968 && e[a] <= 40959;
  }) : void 0;
  return [s, r, o];
}, MQ = (
  /** @class */
  function() {
    function e(A, t, s, r) {
      this.codePoints = A, this.required = t === mc, this.start = s, this.end = r;
    }
    return e.prototype.slice = function() {
      return QA.apply(void 0, this.codePoints.slice(this.start, this.end));
    }, e;
  }()
), NQ = function(e, A) {
  var t = qr(e), s = OQ(t, A), r = s[0], n = s[1], o = s[2], i = t.length, a = 0, c = 0;
  return {
    next: function() {
      if (c >= i)
        return { done: !0, value: null };
      for (var d = Z; c < i && (d = RQ(t, n, r, ++c, o)) === Z; )
        ;
      if (d !== Z || c === i) {
        var l = new MQ(t, d, a, c);
        return a = c, { value: l, done: !1 };
      }
      return { done: !0, value: null };
    }
  };
};
const PQ = 1, VQ = 2, Ot = 4, ga = 8, Er = 10, ha = 47, hs = 92, GQ = 9, XQ = 32, $s = 34, jt = 61, JQ = 35, WQ = 36, YQ = 37, qs = 39, Ar = 40, Zt = 41, jQ = 95, NA = 45, ZQ = 33, zQ = 60, $Q = 62, qQ = 64, AC = 91, eC = 93, tC = 61, sC = 123, er = 63, rC = 125, pa = 124, nC = 126, oC = 128, wa = 65533, Tn = 42, dt = 43, iC = 44, aC = 58, lC = 59, Hs = 46, cC = 0, dC = 8, uC = 11, fC = 14, BC = 31, gC = 127, ce = -1, vc = 48, yc = 97, Ec = 101, hC = 102, pC = 117, wC = 122, Hc = 65, Ic = 69, _c = 70, QC = 85, CC = 90, _A = (e) => e >= vc && e <= 57, bC = (e) => e >= 55296 && e <= 57343, bt = (e) => _A(e) || e >= Hc && e <= _c || e >= yc && e <= hC, UC = (e) => e >= yc && e <= wC, FC = (e) => e >= Hc && e <= CC, mC = (e) => UC(e) || FC(e), xC = (e) => e >= oC, tr = (e) => e === Er || e === GQ || e === XQ, Hr = (e) => mC(e) || xC(e) || e === jQ, Qa = (e) => Hr(e) || _A(e) || e === NA, vC = (e) => e >= cC && e <= dC || e === uC || e >= fC && e <= BC || e === gC, Pe = (e, A) => e !== hs ? !1 : A !== Er, sr = (e, A, t) => e === NA ? Hr(A) || Pe(A, t) : Hr(e) ? !0 : !!(e === hs && Pe(e, A)), Kn = (e, A, t) => e === dt || e === NA ? _A(A) ? !0 : A === Hs && _A(t) : _A(e === Hs ? A : e), yC = (e) => {
  let A = 0, t = 1;
  (e[A] === dt || e[A] === NA) && (e[A] === NA && (t = -1), A++);
  const s = [];
  for (; _A(e[A]); )
    s.push(e[A++]);
  const r = s.length ? parseInt(QA(...s), 10) : 0;
  e[A] === Hs && A++;
  const n = [];
  for (; _A(e[A]); )
    n.push(e[A++]);
  const o = n.length, i = o ? parseInt(QA(...n), 10) : 0;
  (e[A] === Ic || e[A] === Ec) && A++;
  let a = 1;
  (e[A] === dt || e[A] === NA) && (e[A] === NA && (a = -1), A++);
  const c = [];
  for (; _A(e[A]); )
    c.push(e[A++]);
  const d = c.length ? parseInt(QA(...c), 10) : 0;
  return t * (r + i * Math.pow(10, -o)) * Math.pow(10, a * d);
}, EC = {
  type: 2
  /* TokenType.LEFT_PARENTHESIS_TOKEN */
}, HC = {
  type: 3
  /* TokenType.RIGHT_PARENTHESIS_TOKEN */
}, IC = {
  type: 4
  /* TokenType.COMMA_TOKEN */
}, _C = {
  type: 13
  /* TokenType.SUFFIX_MATCH_TOKEN */
}, LC = {
  type: 8
  /* TokenType.PREFIX_MATCH_TOKEN */
}, SC = {
  type: 21
  /* TokenType.COLUMN_TOKEN */
}, kC = {
  type: 9
  /* TokenType.DASH_MATCH_TOKEN */
}, TC = {
  type: 10
  /* TokenType.INCLUDE_MATCH_TOKEN */
}, KC = {
  type: 11
  /* TokenType.LEFT_CURLY_BRACKET_TOKEN */
}, DC = {
  type: 12
  /* TokenType.RIGHT_CURLY_BRACKET_TOKEN */
}, RC = {
  type: 14
  /* TokenType.SUBSTRING_MATCH_TOKEN */
}, rr = {
  type: 23
  /* TokenType.BAD_URL_TOKEN */
}, OC = {
  type: 1
  /* TokenType.BAD_STRING_TOKEN */
}, MC = {
  type: 25
  /* TokenType.CDO_TOKEN */
}, NC = {
  type: 24
  /* TokenType.CDC_TOKEN */
}, PC = {
  type: 26
  /* TokenType.COLON_TOKEN */
}, VC = {
  type: 27
  /* TokenType.SEMICOLON_TOKEN */
}, GC = {
  type: 28
  /* TokenType.LEFT_SQUARE_BRACKET_TOKEN */
}, XC = {
  type: 29
  /* TokenType.RIGHT_SQUARE_BRACKET_TOKEN */
}, JC = {
  type: 31
  /* TokenType.WHITESPACE_TOKEN */
}, Qo = {
  type: 32
  /* TokenType.EOF_TOKEN */
};
class Lc {
  constructor() {
    this._value = [];
  }
  write(A) {
    this._value = this._value.concat(qr(A));
  }
  read() {
    const A = [];
    let t = this.consumeToken();
    for (; t !== Qo; )
      A.push(t), t = this.consumeToken();
    return A;
  }
  consumeToken() {
    const A = this.consumeCodePoint();
    switch (A) {
      case $s:
        return this.consumeStringToken($s);
      case JQ:
        const t = this.peekCodePoint(0), s = this.peekCodePoint(1), r = this.peekCodePoint(2);
        if (Qa(t) || Pe(s, r)) {
          const g = sr(t, s, r) ? VQ : PQ;
          return { type: 5, value: this.consumeName(), flags: g };
        }
        break;
      case WQ:
        if (this.peekCodePoint(0) === jt)
          return this.consumeCodePoint(), _C;
        break;
      case qs:
        return this.consumeStringToken(qs);
      case Ar:
        return EC;
      case Zt:
        return HC;
      case Tn:
        if (this.peekCodePoint(0) === jt)
          return this.consumeCodePoint(), RC;
        break;
      case dt:
        if (Kn(A, this.peekCodePoint(0), this.peekCodePoint(1)))
          return this.reconsumeCodePoint(A), this.consumeNumericToken();
        break;
      case iC:
        return IC;
      case NA:
        const n = A, o = this.peekCodePoint(0), i = this.peekCodePoint(1);
        if (Kn(n, o, i))
          return this.reconsumeCodePoint(A), this.consumeNumericToken();
        if (sr(n, o, i))
          return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
        if (o === NA && i === $Q)
          return this.consumeCodePoint(), this.consumeCodePoint(), NC;
        break;
      case Hs:
        if (Kn(A, this.peekCodePoint(0), this.peekCodePoint(1)))
          return this.reconsumeCodePoint(A), this.consumeNumericToken();
        break;
      case ha:
        if (this.peekCodePoint(0) === Tn)
          for (this.consumeCodePoint(); ; ) {
            let g = this.consumeCodePoint();
            if (g === Tn && (g = this.consumeCodePoint(), g === ha))
              return this.consumeToken();
            if (g === ce)
              return this.consumeToken();
          }
        break;
      case aC:
        return PC;
      case lC:
        return VC;
      case zQ:
        if (this.peekCodePoint(0) === ZQ && this.peekCodePoint(1) === NA && this.peekCodePoint(2) === NA)
          return this.consumeCodePoint(), this.consumeCodePoint(), MC;
        break;
      case qQ:
        const a = this.peekCodePoint(0), c = this.peekCodePoint(1), d = this.peekCodePoint(2);
        if (sr(a, c, d))
          return { type: 7, value: this.consumeName() };
        break;
      case AC:
        return GC;
      case hs:
        if (Pe(A, this.peekCodePoint(0)))
          return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
        break;
      case eC:
        return XC;
      case tC:
        if (this.peekCodePoint(0) === jt)
          return this.consumeCodePoint(), LC;
        break;
      case sC:
        return KC;
      case rC:
        return DC;
      case pC:
      case QC:
        const l = this.peekCodePoint(0), f = this.peekCodePoint(1);
        return l === dt && (bt(f) || f === er) && (this.consumeCodePoint(), this.consumeUnicodeRangeToken()), this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
      case pa:
        if (this.peekCodePoint(0) === jt)
          return this.consumeCodePoint(), kC;
        if (this.peekCodePoint(0) === pa)
          return this.consumeCodePoint(), SC;
        break;
      case nC:
        if (this.peekCodePoint(0) === jt)
          return this.consumeCodePoint(), TC;
        break;
      case ce:
        return Qo;
    }
    return tr(A) ? (this.consumeWhiteSpace(), JC) : _A(A) ? (this.reconsumeCodePoint(A), this.consumeNumericToken()) : Hr(A) ? (this.reconsumeCodePoint(A), this.consumeIdentLikeToken()) : { type: 6, value: QA(A) };
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
    for (; t === er && A.length < 6; )
      A.push(t), t = this.consumeCodePoint(), s = !0;
    if (s) {
      const n = parseInt(QA(...A.map((i) => i === er ? vc : i)), 16), o = parseInt(QA(...A.map((i) => i === er ? _c : i)), 16);
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
    return A.toLowerCase() === "url" && this.peekCodePoint(0) === Ar ? (this.consumeCodePoint(), this.consumeUrlToken()) : this.peekCodePoint(0) === Ar ? (this.consumeCodePoint(), { type: 19, value: A }) : { type: 20, value: A };
  }
  consumeUrlToken() {
    const A = [];
    if (this.consumeWhiteSpace(), this.peekCodePoint(0) === ce)
      return { type: 22, value: "" };
    const t = this.peekCodePoint(0);
    if (t === qs || t === $s) {
      const s = this.consumeStringToken(this.consumeCodePoint());
      return s.type === 0 && (this.consumeWhiteSpace(), this.peekCodePoint(0) === ce || this.peekCodePoint(0) === Zt) ? (this.consumeCodePoint(), { type: 22, value: s.value }) : (this.consumeBadUrlRemnants(), rr);
    }
    for (; ; ) {
      const s = this.consumeCodePoint();
      if (s === ce || s === Zt)
        return { type: 22, value: QA(...A) };
      if (tr(s))
        return this.consumeWhiteSpace(), this.peekCodePoint(0) === ce || this.peekCodePoint(0) === Zt ? (this.consumeCodePoint(), { type: 22, value: QA(...A) }) : (this.consumeBadUrlRemnants(), rr);
      if (s === $s || s === qs || s === Ar || vC(s))
        return this.consumeBadUrlRemnants(), rr;
      if (s === hs)
        if (Pe(s, this.peekCodePoint(0)))
          A.push(this.consumeEscapedCodePoint());
        else
          return this.consumeBadUrlRemnants(), rr;
      else
        A.push(s);
    }
  }
  consumeWhiteSpace() {
    for (; tr(this.peekCodePoint(0)); )
      this.consumeCodePoint();
  }
  consumeBadUrlRemnants() {
    for (; ; ) {
      const A = this.consumeCodePoint();
      if (A === Zt || A === ce)
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
      if (r === Er)
        return this._value.splice(0, s), OC;
      if (r === hs) {
        const n = this._value[s + 1];
        n !== ce && n !== void 0 && (n === Er ? (t += this.consumeStringSlice(s), s = -1, this._value.shift()) : Pe(r, n) && (t += this.consumeStringSlice(s), t += QA(this.consumeEscapedCodePoint()), s = -1));
      }
      s++;
    } while (!0);
  }
  consumeNumber() {
    const A = [];
    let t = Ot, s = this.peekCodePoint(0);
    for ((s === dt || s === NA) && A.push(this.consumeCodePoint()); _A(this.peekCodePoint(0)); )
      A.push(this.consumeCodePoint());
    s = this.peekCodePoint(0);
    let r = this.peekCodePoint(1);
    if (s === Hs && _A(r))
      for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), t = ga; _A(this.peekCodePoint(0)); )
        A.push(this.consumeCodePoint());
    s = this.peekCodePoint(0), r = this.peekCodePoint(1);
    const n = this.peekCodePoint(2);
    if ((s === Ic || s === Ec) && ((r === dt || r === NA) && _A(n) || _A(r)))
      for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), t = ga; _A(this.peekCodePoint(0)); )
        A.push(this.consumeCodePoint());
    return [yC(A), t];
  }
  consumeNumericToken() {
    const [A, t] = this.consumeNumber(), s = this.peekCodePoint(0), r = this.peekCodePoint(1), n = this.peekCodePoint(2);
    if (sr(s, r, n)) {
      const o = this.consumeName();
      return { type: 15, number: A, flags: t, unit: o };
    }
    return s === YQ ? (this.consumeCodePoint(), { type: 16, number: A, flags: t }) : { type: 17, number: A, flags: t };
  }
  consumeEscapedCodePoint() {
    const A = this.consumeCodePoint();
    if (bt(A)) {
      let t = QA(A);
      for (; bt(this.peekCodePoint(0)) && t.length < 6; )
        t += QA(this.consumeCodePoint());
      tr(this.peekCodePoint(0)) && this.consumeCodePoint();
      const s = parseInt(t, 16);
      return s === 0 || bC(s) || s > 1114111 ? wa : s;
    }
    return A === ce ? wa : A;
  }
  consumeName() {
    let A = "";
    for (; ; ) {
      const t = this.consumeCodePoint();
      if (Qa(t))
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
    const t = new Lc();
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
      if (s.type === 32 || YC(s, A))
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
    return typeof A > "u" ? Qo : A;
  }
  reconsumeToken(A) {
    this._tokens.unshift(A);
  }
}
const Ce = (e) => e.type === 15, FA = (e) => e.type === 17, j = (e) => e.type === 20, WC = (e) => e.type === 0, Co = (e, A) => j(e) && e.value === A, Sc = (e) => e.type !== 31, IA = (e) => e.type !== 31 && e.type !== 4, be = (e) => {
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
}, YC = (e, A) => A === 11 && e.type === 12 || A === 28 && e.type === 29 ? !0 : A === 2 && e.type === 3, ze = (e) => e.type === 17 || e.type === 15, dA = (e) => e.type === 16 || ze(e), jC = (e) => e.type === 18 && e.name === "calc", ZC = (e, A = 0) => {
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
}, kc = (e) => e.length > 1 ? [e[0], e[1]] : [e[0]], HA = {
  type: 17,
  number: 0,
  flags: Ot
}, ei = {
  type: 16,
  number: 50,
  flags: Ot
}, Xe = {
  type: 16,
  number: 100,
  flags: Ot
}, ns = (e, A, t) => {
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
}, Tc = "deg", Kc = "grad", Dc = "rad", Rc = "turn", Mt = {
  name: "angle",
  parse: (e, A) => {
    if (A.type === 15)
      switch (A.unit) {
        case Tc:
          return Math.PI * A.number / 180;
        case Kc:
          return Math.PI / 200 * A.number;
        case Dc:
          return A.number;
        case Rc:
          return Math.PI * 2 * A.number;
      }
    throw new Error("Unsupported angle type");
  }
}, Oc = (e) => e.type === 15 && (e.unit === Tc || e.unit === Kc || e.unit === Dc || e.unit === Rc), Mc = (e) => {
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
}, ZA = (e) => Math.PI * e / 180, Ye = (e) => (255 & e) === 0, lA = (e) => {
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
], zC = (e) => se(pA(Math.round(e[0] * 255), 0, 255), pA(Math.round(e[1] * 255), 0, 255), pA(Math.round(e[2] * 255), 0, 255), pA(e[3], 0, 1)), ti = ([e, A, t, s]) => {
  const r = pt([e, A, t]);
  return se(pA(Math.round(r[0] * 255), 0, 255), pA(Math.round(r[1] * 255), 0, 255), pA(Math.round(r[2] * 255), 0, 255), s);
}, Ts = (e) => {
  const A = $e([e[0], e[1], e[2]]);
  return ti([A[0], A[1], A[2], e[3]]);
}, $C = (e, A) => {
  if (ht(A.filter(IA)))
    throw new Error("Relative color not supported for lab()");
  const [t, s, r, n] = An(A), o = pt($e(sn([t, s, r])));
  return se(pA(Math.round(o[0] * 255), 0, 255), pA(Math.round(o[1] * 255), 0, 255), pA(Math.round(o[2] * 255), 0, 255), n);
}, qC = (e, A) => {
  if (ht(A.filter(IA)))
    throw new Error("Relative color not supported for oklab()");
  const [t, s, r, n] = An(A), o = pt($e(tn([t, s, r])));
  return se(pA(Math.round(o[0] * 255), 0, 255), pA(Math.round(o[1] * 255), 0, 255), pA(Math.round(o[2] * 255), 0, 255), n);
}, Ab = (e, A) => {
  if (ht(A.filter(IA)))
    throw new Error("Relative color not supported for oklch()");
  const [t, s, r, n] = Vc(A), o = pt($e(tn(en([t, s, r]))));
  return se(pA(Math.round(o[0] * 255), 0, 255), pA(Math.round(o[1] * 255), 0, 255), pA(Math.round(o[2] * 255), 0, 255), n);
}, eb = (e, A) => {
  if (ht(A.filter(IA)))
    throw new Error("Relative color not supported for lch()");
  const [t, s, r, n] = Pc(A), o = pt($e(sn(en([t, s, r]))));
  return se(pA(Math.round(o[0] * 255), 0, 255), pA(Math.round(o[1] * 255), 0, 255), pA(Math.round(o[2] * 255), 0, 255), n);
}, Nc = (e, A) => {
  const t = A.filter(IA), [s, r, n, o] = t, i = (s.type === 17 ? ZA(s.number) : Mt.parse(e, s)) / (Math.PI * 2), a = dA(r) ? r.number / 100 : 0, c = dA(n) ? n.number / 100 : 0, d = typeof o < "u" && dA(o) ? z(o, 1) : 1;
  return [i, a, c, d];
}, Ca = (e, A) => {
  if (ht(A))
    throw new Error("Relative color not supported for hsl()");
  const [t, s, r, n] = Nc(e, A), o = Xc([t, s, r]);
  return se(o[0] * 255, o[1] * 255, o[2] * 255, s === 0 ? 1 : n);
}, Pc = (e) => {
  const A = e.filter(IA), t = dA(A[0]) ? A[0].number : 0, s = dA(A[1]) ? A[1].number : 0, r = FA(A[2]) || Ce(A[2]) ? A[2].number : 0, n = typeof A[4] < "u" && dA(A[4]) ? z(A[4], 1) : 1;
  return [t, s, r, n];
}, An = (e) => {
  const A = e.filter(IA), t = A[0].type === 16 ? A[0].number / 100 : FA(A[0]) ? A[0].number : 0, s = A[1].type === 16 ? A[1].number / 100 : FA(A[1]) ? A[1].number : 0, r = FA(A[2]) || Ce(A[2]) ? A[2].number : 0, n = typeof A[4] < "u" && dA(A[4]) ? z(A[4], 1) : 1;
  return [t, s, r, n];
}, Vc = (e) => {
  const A = e.filter(IA), t = A[0].type === 16 ? A[0].number / 100 : FA(A[0]) ? A[0].number : 0, s = A[1].type === 16 ? A[1].number / 100 : FA(A[1]) ? A[1].number : 0, r = FA(A[2]) || Ce(A[2]) ? A[2].number : 0, n = typeof A[4] < "u" && dA(A[4]) ? z(A[4], 1) : 1;
  return [t, s, r, n];
}, Gc = (e) => PA([
  1.0479297925449969,
  0.022946870601609652,
  -0.05019226628920524,
  0.02962780877005599,
  0.9904344267538799,
  -0.017073799063418826,
  -0.009243040646204504,
  0.015055191490298152,
  0.7518742814281371
], e), si = (e) => PA([
  0.955473421488075,
  -0.02309845494876471,
  0.06325924320057072,
  -0.0283697093338637,
  1.0099953980813041,
  0.021041441191917323,
  0.012314014864481998,
  -0.020507649298898964,
  1.330365926242124
], e), Dn = (e, A, t) => (t < 0 && (t += 1), t >= 1 && (t -= 1), t < 1 / 6 ? (A - e) * t * 6 + e : t < 1 / 2 ? A : t < 2 / 3 ? (A - e) * 6 * (2 / 3 - t) + e : e), Xc = ([e, A, t]) => {
  if (A === 0)
    return [t * 255, t * 255, t * 255];
  const s = t <= 0.5 ? t * (A + 1) : t + A - t * A, r = t * 2 - s, n = Dn(r, s, e + 1 / 3), o = Dn(r, s, e), i = Dn(r, s, e - 1 / 3);
  return [n, o, i];
}, en = ([e, A, t]) => (A < 0 && (A = 0), isNaN(t) && (t = 0), [e, A * Math.cos(t * Math.PI / 180), A * Math.sin(t * Math.PI / 180)]), tn = (e) => {
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
}, sn = (e) => {
  const A = (e[0] + 16) / 116, t = e[1] / 500 + A, s = A - e[2] / 200, r = 24389 / 27, n = 24 / 116, o = [
    (t > n ? t ** 3 : (116 * t - 16) / r) * 0.3457 / 0.3585,
    e[0] > 8 ? A ** 3 : e[0] / r,
    (s > n ? s ** 3 : (116 * s - 16) / r) * (1 - 0.3457 - 0.3585) / 0.3585
  ];
  return si([o[0], o[1], o[2]]);
}, tb = (e, A) => {
  const t = A.filter(IA);
  if (t.length === 3) {
    const [s, r, n] = t.map(Ve), o = Uo([s / 255, r / 255, n / 255]), [i, a, c] = bo([o[0], o[1], o[2]]);
    return [i, a, c, 1];
  }
  if (t.length === 4) {
    const [s, r, n, o] = t.map(Ve), i = Uo([s / 255, r / 255, n / 255]), [a, c, d] = bo([i[0], i[1], i[2]]);
    return [a, c, d, o];
  }
  return [0, 0, 0, 1];
}, sb = (e, A) => {
  const [t, s, r, n] = Nc(e, A), o = Uo(Xc([t, s, r])), [i, a, c] = bo([o[0], o[1], o[2]]);
  return [i, a, c, n];
}, rb = (e, A) => {
  const [t, s, r, n] = An(A), [o, i, a] = sn([t, s, r]);
  return [o, i, a, n];
}, nb = (e, A) => {
  const [t, s, r, n] = Pc(A), [o, i, a] = sn(en([t, s, r]));
  return [o, i, a, n];
}, ob = (e, A) => {
  const [t, s, r, n] = Vc(A), [o, i, a] = tn(en([t, s, r]));
  return [o, i, a, n];
}, ib = (e, A) => {
  const [t, s, r, n] = An(A), [o, i, a] = tn([t, s, r]);
  return [o, i, a, n];
}, ab = (e) => si([e[0], e[1], e[2]]), ba = (e) => e, lb = (e) => {
  const [A, t, s] = Gc([e[0], e[2], e[3]]);
  return [A, t, s, e[3]];
}, Ua = (e) => Ts([e[0], e[1], e[2], e[3]]), cb = (e) => {
  const A = ab([e[0], e[1], e[2]]);
  return Ts([A[0], A[1], A[2], e[3]]);
}, $e = (e) => PA([
  3.2409699419045226,
  -1.537383177570094,
  -0.4986107602930034,
  -0.9692436362808796,
  1.8759675015077202,
  0.04155505740717559,
  0.05563007969699366,
  -0.20397695888897652,
  1.0569715142428786
], e), bo = (e) => PA([
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
}), Uo = (e) => e.map((A) => {
  const t = A < 0 ? -1 : 1, s = Math.abs(A);
  return s <= 0.04045 ? A / 12.92 : t * ((s + 0.055) / 1.055) ** 2.4;
}), db = (e) => {
  const [A, t, s] = pt($e([e[0], e[1], e[2]]));
  return [A, t, s, e[3]];
}, ub = (e) => {
  const [A, t, s] = $e([e[0], e[1], e[2]]);
  return [
    pA(Math.round(A * 255), 0, 255),
    pA(Math.round(t * 255), 0, 255),
    pA(Math.round(s * 255), 0, 255),
    e[3]
  ];
}, fb = (e) => PA([
  0.4865709486482162,
  0.26566769316909306,
  0.1982172852343625,
  0.2289745640697488,
  0.6917385218365064,
  0.079286914093745,
  0,
  0.04511338185890264,
  1.043944368900976
], e), Bb = (e) => PA([
  2.493496911941425,
  -0.9313836179191239,
  -0.40271078445071684,
  -0.8294889695615747,
  1.7626640603183463,
  0.023624685841943577,
  0.03584583024378447,
  -0.07617238926804182,
  0.9568845240076872
], e), gb = (e) => e.map((A) => {
  const t = A < 0 ? -1 : 1;
  return A * t <= 0.04045 ? A / 12.92 : t * ((A + 0.055) / 1.055) ** 2.4 || 0;
}), hb = (e) => pt(e), pb = (e) => {
  const A = gb([e[0], e[1], e[2]]);
  return fb([A[0], A[1], A[2]]);
}, wb = (e) => {
  const [A, t, s] = hb(Bb([e[0], e[1], e[2]]));
  return [A, t, s, e[3]];
}, Qb = (e) => {
  const A = pb([e[0], e[1], e[2]]);
  return Ts([A[0], A[1], A[2], e[3]]);
}, Cb = (e) => PA([
  2.0415879038107465,
  -0.5650069742788596,
  -0.34473135077832956,
  -0.9692436362808795,
  1.8759675015077202,
  0.04155505740717557,
  0.013444280632031142,
  -0.11836239223101838,
  1.0151749943912054
], e), bb = (e) => PA([
  0.5766690429101305,
  0.1855582379065463,
  0.1882286462349947,
  0.29734497525053605,
  0.6273635662554661,
  0.0752914584939978,
  0.02703136138641234,
  0.07068885253582723,
  0.9913375368376388
], e), Ub = (e) => {
  const A = e.map((t) => {
    const s = t < 0 ? -1 : 1, r = Math.abs(t);
    return s * r ** 2.19921875;
  });
  return [A[0], A[1], A[2]];
}, Fb = (e) => {
  const A = e.map((t) => {
    const s = t < 0 ? -1 : 1, r = Math.abs(t);
    return s * r ** 0.4547069271758437;
  });
  return [A[0], A[1], A[2]];
}, mb = (e) => {
  const [A, t, s] = Fb(Cb([e[0], e[1], e[2]]));
  return [A, t, s, e[3]];
}, xb = (e) => {
  const A = $e(bb(Ub([e[0], e[1], e[2]])));
  return ti([A[0], A[1], A[2], e[3]]);
}, vb = (e) => PA([
  0.7977666449006423,
  0.13518129740053308,
  0.0313477341283922,
  0.2880748288194013,
  0.711835234241873,
  8993693872564e-17,
  0,
  0,
  0.8251046025104602
], e), yb = (e) => PA([
  1.3457868816471583,
  -0.25557208737979464,
  -0.05110186497554526,
  -0.5446307051249019,
  1.5082477428451468,
  0.02052744743642139,
  0,
  0,
  1.2119675456389452
], e), Eb = (e) => e.map((A) => A < 16 / 512 ? A / 16 : A ** 1.8), Hb = (e) => e.map((A) => A > 1 / 512 ? A ** (1 / 1.8) : A * 16), Ib = (e) => {
  const A = Eb([e[0], e[1], e[2]]);
  return si(vb([A[0], A[1], A[2]]));
}, _b = (e) => {
  const [A, t, s] = Hb(yb(Gc([e[0], e[1], e[2]])));
  return [A, t, s, e[3]];
}, Lb = (e) => {
  const A = Ib([e[0], e[1], e[2]]);
  return Ts([A[0], A[1], A[2], e[3]]);
}, Ir = 1.09929682680944, Jc = 0.018053968510807, Sb = (e) => e.map(function(A) {
  return A < Jc * 4.5 ? A / 4.5 : Math.pow((A + Ir - 1) / Ir, 1 / 0.45);
}), kb = (e) => e.map(function(A) {
  return A >= Jc ? Ir * Math.pow(A, 0.45) - (Ir - 1) : 4.5 * A;
}), Tb = (e) => PA([
  0.6369580483012914,
  0.14461690358620832,
  0.1688809751641721,
  0.2627002120112671,
  0.6779980715188708,
  0.05930171646986196,
  0,
  0.028072693049087428,
  1.060985057710791
], e), Kb = (e) => PA([
  1.716651187971268,
  -0.355670783776392,
  -0.25336628137366,
  -0.666684351832489,
  1.616481236634939,
  0.0157685458139111,
  0.017639857445311,
  -0.042770613257809,
  0.942103121235474
], e), Db = (e) => {
  const A = Sb([e[0], e[1], e[2]]);
  return Tb([A[0], A[1], A[2]]);
}, Rb = (e) => {
  const [A, t, s] = kb(Kb([e[0], e[1], e[2]]));
  return [A, t, s, e[3]];
}, Ob = (e) => {
  const A = Db([e[0], e[1], e[2]]);
  return Ts([A[0], A[1], A[2], e[3]]);
}, je = {
  name: "color",
  parse: (e, A) => {
    if (A.type === 18) {
      const t = Vb[A.name];
      if (typeof t > "u")
        throw new Error(`Attempting to parse an unsupported color function "${A.name}"`);
      return t(e, A.values);
    }
    if (A.type === 5) {
      const [t, s, r, n] = Wc(A);
      return se(t, s, r, n);
    }
    if (A.type === 20) {
      const t = pe[A.value.toUpperCase()];
      if (typeof t < "u")
        return t;
    }
    return pe.TRANSPARENT;
  }
}, Wc = (e) => {
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
}, Fa = (e, A) => {
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
}, Mb = (e, A) => {
  const t = A.filter(IA), s = t[0].type === 20 ? t[0].value : "unknown";
  if (!ht(t)) {
    const n = s, o = ma[n];
    if (typeof o > "u")
      throw new Error(`Attempting to parse an unsupported color space "${n}" for color() function`);
    const i = FA(t[1]) ? t[1].number : 0, a = FA(t[2]) ? t[2].number : 0, c = FA(t[3]) ? t[3].number : 0, d = t.length > 4 && t[4].type === 6 && t[4].value === "/" && FA(t[5]) ? t[5].number : 1;
    return o([i, a, c, d]);
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
    let a = t[1].type === 18 ? t[1].values : j(t[1]) ? [t[1]] : [];
    if (j(t[1])) {
      if (typeof pe[t[1].value.toUpperCase()] > "u")
        throw new Error("Attempting to use unknown color in relative color 'from'");
      {
        const h = St(e, t[1].value), x = 255 & h, S = 255 & h >> 8, X = 255 & h >> 16;
        a = [
          { type: 17, number: 255 & h >> 24, flags: 1 },
          { type: 17, number: X, flags: 1 },
          { type: 17, number: S, flags: 1 },
          { type: 17, number: x > 1 ? x / 255 : x, flags: 1 }
        ];
      }
    } else if (t[1].type === 5) {
      const [v, h, x, S] = Wc(t[1]);
      a = [
        { type: 17, number: v, flags: 1 },
        { type: 17, number: h, flags: 1 },
        { type: 17, number: x, flags: 1 },
        { type: 17, number: S > 1 ? S / 255 : S, flags: 1 }
      ];
    }
    if (a.length === 0)
      throw new Error("Attempting to use unknown color in relative color 'from'");
    if (i === "unknown")
      throw new Error("Attempting to use unknown colorspace in relative color 'to'");
    const c = Nb[o], d = Pb[i], l = ma[i];
    if (typeof c > "u")
      throw new Error(`Attempting to parse an unsupported color space "${o}" for color() function`);
    if (typeof d > "u")
      throw new Error(`Attempting to parse an unsupported color space "${i}" for color() function`);
    const f = c(e, a), g = d(f), Q = n(g, t[3]), U = n(g, t[4]), m = n(g, t[5]), _ = t.length > 6 && t[6].type === 6 && t[6].value === "/" && FA(t[7]) ? t[7].number : 1;
    if (Q === null || U === null || m === null)
      throw new Error("Invalid relative color in color() function");
    return l([Q, U, m, _]);
  }
}, ma = {
  srgb: zC,
  "srgb-linear": ti,
  "display-p3": Qb,
  "a98-rgb": xb,
  "prophoto-rgb": Lb,
  xyz: Ua,
  "xyz-d50": cb,
  "xyz-d65": Ua,
  rec2020: Ob
}, Nb = {
  rgb: tb,
  hsl: sb,
  lab: rb,
  lch: nb,
  oklab: ib,
  oklch: ob
}, Pb = {
  srgb: db,
  "srgb-linear": ub,
  "display-p3": wb,
  "a98-rgb": mb,
  "prophoto-rgb": _b,
  xyz: ba,
  "xyz-d50": lb,
  "xyz-d65": ba,
  rec2020: Rb
}, Vb = {
  hsl: Ca,
  hsla: Ca,
  rgb: Fa,
  rgba: Fa,
  lch: eb,
  oklch: Ab,
  oklab: qC,
  lab: $C,
  color: Mb
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
}, Gb = {
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
}, Xb = {
  name: "background-color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, rn = (e, A) => {
  const t = je.parse(e, A[0]), s = A[1];
  return s && dA(s) ? { color: t, stop: s } : { color: t, stop: null };
}, xa = (e, A) => {
  const t = e[0], s = e[e.length - 1];
  t.stop === null && (t.stop = HA), s.stop === null && (s.stop = Xe);
  const r = [];
  let n = 0;
  for (let i = 0; i < e.length; i++) {
    const a = e[i].stop;
    if (a !== null) {
      const c = z(a, A);
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
      const c = i - o, d = r[o - 1], l = (a - d) / (c + 1);
      for (let f = 1; f <= c; f++)
        r[o + f - 1] = l * f;
      o = null;
    }
  }
  return e.map(({ color: i }, a) => ({ color: i, stop: Math.max(Math.min(1, r[a] / A), 0) }));
}, Jb = (e, A, t) => {
  const s = A / 2, r = t / 2, n = z(e[0], A) - s, o = r - z(e[1], t);
  return (Math.atan2(o, n) + Math.PI * 2) % (Math.PI * 2);
}, Wb = (e, A, t) => {
  const s = typeof e == "number" ? e : Jb(e, A, t), r = Math.abs(A * Math.sin(s)) + Math.abs(t * Math.cos(s)), n = A / 2, o = t / 2, i = r / 2, a = Math.sin(s - Math.PI / 2) * i, c = Math.cos(s - Math.PI / 2) * i;
  return [r, n - c, n + c, o - a, o + a];
}, qA = (e, A) => Math.sqrt(e * e + A * A), va = (e, A, t, s, r) => [
  [0, 0],
  [0, A],
  [e, 0],
  [e, A]
].reduce((o, i) => {
  const [a, c] = i, d = qA(t - a, s - c);
  return (r ? d < o.optimumDistance : d > o.optimumDistance) ? {
    optimumCorner: i,
    optimumDistance: d
  } : o;
}, {
  optimumDistance: r ? 1 / 0 : -1 / 0,
  optimumCorner: null
}).optimumCorner, Yb = (e, A, t, s, r) => {
  let n = 0, o = 0;
  switch (e.size) {
    case 0:
      e.shape === 0 ? n = o = Math.min(Math.abs(A), Math.abs(A - s), Math.abs(t), Math.abs(t - r)) : e.shape === 1 && (n = Math.min(Math.abs(A), Math.abs(A - s)), o = Math.min(Math.abs(t), Math.abs(t - r)));
      break;
    case 2:
      if (e.shape === 0)
        n = o = Math.min(qA(A, t), qA(A, t - r), qA(A - s, t), qA(A - s, t - r));
      else if (e.shape === 1) {
        const i = Math.min(Math.abs(t), Math.abs(t - r)) / Math.min(Math.abs(A), Math.abs(A - s)), [a, c] = va(s, r, A, t, !0);
        n = qA(a - A, (c - t) / i), o = i * n;
      }
      break;
    case 1:
      e.shape === 0 ? n = o = Math.max(Math.abs(A), Math.abs(A - s), Math.abs(t), Math.abs(t - r)) : e.shape === 1 && (n = Math.max(Math.abs(A), Math.abs(A - s)), o = Math.max(Math.abs(t), Math.abs(t - r)));
      break;
    case 3:
      if (e.shape === 0)
        n = o = Math.max(qA(A, t), qA(A, t - r), qA(A - s, t), qA(A - s, t - r));
      else if (e.shape === 1) {
        const i = Math.max(Math.abs(t), Math.abs(t - r)) / Math.max(Math.abs(A), Math.abs(A - s)), [a, c] = va(s, r, A, t, !1);
        n = qA(a - A, (c - t) / i), o = i * n;
      }
      break;
  }
  return Array.isArray(e.size) && (n = z(e.size[0], s), o = e.size.length === 2 ? z(e.size[1], r) : n), [n, o];
}, jb = (e, A) => {
  let t = ZA(180);
  const s = [];
  return be(A).forEach((r, n) => {
    if (n === 0) {
      const i = r[0];
      if (i.type === 20 && i.value === "to") {
        t = Mc(r);
        return;
      } else if (Oc(i)) {
        t = Mt.parse(e, i);
        return;
      }
    }
    const o = rn(e, r);
    s.push(o);
  }), {
    angle: t,
    stops: s,
    type: 1
    /* CSSImageType.LINEAR_GRADIENT */
  };
}, nr = (e, A) => {
  let t = ZA(180);
  const s = [];
  return be(A).forEach((r, n) => {
    if (n === 0) {
      const i = r[0];
      if (i.type === 20 && ["top", "left", "right", "bottom"].indexOf(i.value) !== -1) {
        t = Mc(r);
        return;
      } else if (Oc(i)) {
        t = (Mt.parse(e, i) + ZA(270)) % ZA(360);
        return;
      }
    }
    const o = rn(e, r);
    s.push(o);
  }), {
    angle: t,
    stops: s,
    type: 1
    /* CSSImageType.LINEAR_GRADIENT */
  };
}, Zb = (e, A) => {
  const t = ZA(180), s = [];
  let r = 1;
  const n = 0, o = 3, i = [];
  return be(A).forEach((a, c) => {
    const d = a[0];
    if (c === 0) {
      if (j(d) && d.value === "linear") {
        r = 1;
        return;
      } else if (j(d) && d.value === "radial") {
        r = 2;
        return;
      }
    }
    if (d.type === 18) {
      if (d.name === "from") {
        const l = je.parse(e, d.values[0]);
        s.push({ stop: HA, color: l });
      } else if (d.name === "to") {
        const l = je.parse(e, d.values[0]);
        s.push({ stop: Xe, color: l });
      } else if (d.name === "color-stop") {
        const l = d.values.filter(IA);
        if (l.length === 2) {
          const f = je.parse(e, l[1]), g = l[0];
          FA(g) && s.push({
            stop: { type: 16, number: g.number * 100, flags: g.flags },
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
}, Yc = "closest-side", jc = "farthest-side", Zc = "closest-corner", zc = "farthest-corner", $c = "circle", qc = "ellipse", Ad = "cover", ed = "contain", zb = (e, A) => {
  let t = 0, s = 3;
  const r = [], n = [];
  return be(A).forEach((o, i) => {
    let a = !0;
    if (i === 0) {
      let c = !1;
      a = o.reduce((d, l) => {
        if (c)
          if (j(l))
            switch (l.value) {
              case "center":
                return n.push(ei), d;
              case "top":
              case "left":
                return n.push(HA), d;
              case "right":
              case "bottom":
                return n.push(Xe), d;
            }
          else (dA(l) || ze(l)) && n.push(l);
        else if (j(l))
          switch (l.value) {
            case $c:
              return t = 0, !1;
            case qc:
              return t = 1, !1;
            case "at":
              return c = !0, !1;
            case Yc:
              return s = 0, !1;
            case Ad:
            case jc:
              return s = 1, !1;
            case ed:
            case Zc:
              return s = 2, !1;
            case zc:
              return s = 3, !1;
          }
        else if (ze(l) || dA(l))
          return Array.isArray(s) || (s = []), s.push(l), !1;
        return d;
      }, a);
    }
    if (a) {
      const c = rn(e, o);
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
}, or = (e, A) => {
  let t = 0, s = 3;
  const r = [], n = [];
  return be(A).forEach((o, i) => {
    let a = !0;
    if (i === 0 ? a = o.reduce((c, d) => {
      if (j(d))
        switch (d.value) {
          case "center":
            return n.push(ei), !1;
          case "top":
          case "left":
            return n.push(HA), !1;
          case "right":
          case "bottom":
            return n.push(Xe), !1;
        }
      else if (dA(d) || ze(d))
        return n.push(d), !1;
      return c;
    }, a) : i === 1 && (a = o.reduce((c, d) => {
      if (j(d))
        switch (d.value) {
          case $c:
            return t = 0, !1;
          case qc:
            return t = 1, !1;
          case ed:
          case Yc:
            return s = 0, !1;
          case jc:
            return s = 1, !1;
          case Zc:
            return s = 2, !1;
          case Ad:
          case zc:
            return s = 3, !1;
        }
      else if (ze(d) || dA(d))
        return Array.isArray(s) || (s = []), s.push(d), !1;
      return c;
    }, a)), a) {
      const c = rn(e, o);
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
}, $b = (e) => e.type === 1, qb = (e) => e.type === 2, ri = {
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
      const t = td[A.name];
      if (typeof t > "u")
        throw new Error(`Attempting to parse an unsupported image function "${A.name}"`);
      return t(e, A.values);
    }
    throw new Error(`Unsupported image type ${A.type}`);
  }
};
function AU(e) {
  return !(e.type === 20 && e.value === "none") && (e.type !== 18 || !!td[e.name]);
}
const td = {
  "linear-gradient": jb,
  "-moz-linear-gradient": nr,
  "-ms-linear-gradient": nr,
  "-o-linear-gradient": nr,
  "-webkit-linear-gradient": nr,
  "radial-gradient": zb,
  "-moz-radial-gradient": or,
  "-ms-radial-gradient": or,
  "-o-radial-gradient": or,
  "-webkit-radial-gradient": or,
  "-webkit-gradient": Zb
}, eU = {
  name: "background-image",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: (e, A) => {
    if (A.length === 0)
      return [];
    const t = A[0];
    return t.type === 20 && t.value === "none" ? [] : A.filter((s) => IA(s) && AU(s)).map((s) => ri.parse(e, s));
  }
}, tU = {
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
}, sU = {
  name: "background-position",
  initialValue: "0% 0%",
  type: 1,
  prefix: !1,
  parse: (e, A) => be(A).map((t) => t.map((s) => jC(s) ? ZC(s, 0) : dA(s) ? s : null).filter((s) => s !== null)).map(kc)
}, rU = {
  name: "background-repeat",
  initialValue: "repeat",
  prefix: !1,
  type: 1,
  parse: (e, A) => be(A).map((t) => t.filter(j).map((s) => s.value).join(" ")).map(nU)
}, nU = (e) => {
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
const oU = {
  name: "background-size",
  initialValue: "0",
  prefix: !1,
  type: 1,
  parse: (e, A) => be(A).map((t) => t.filter(iU))
}, iU = (e) => j(e) || dA(e), nn = (e) => ({
  name: `border-${e}-color`,
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}), aU = nn("top"), lU = nn("right"), cU = nn("bottom"), dU = nn("left"), on = (e) => ({
  name: `border-radius-${e}`,
  initialValue: "0 0",
  prefix: !1,
  type: 1,
  parse: (A, t) => kc(t.filter(dA))
}), uU = on("top-left"), fU = on("top-right"), BU = on("bottom-right"), gU = on("bottom-left"), an = (e) => ({
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
}), hU = an("top"), pU = an("right"), wU = an("bottom"), QU = an("left"), ln = (e) => ({
  name: `border-${e}-width`,
  initialValue: "0",
  type: 0,
  prefix: !1,
  parse: (A, t) => Ce(t) ? t.number : 0
}), CU = ln("top"), bU = ln("right"), UU = ln("bottom"), FU = ln("left"), mU = {
  name: "color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, xU = {
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
}, vU = {
  name: "display",
  initialValue: "inline-block",
  prefix: !1,
  type: 1,
  parse: (e, A) => A.filter(j).reduce(
    (t, s) => t | yU(s.value),
    0
    /* DISPLAY.NONE */
  )
}, yU = (e) => {
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
}, EU = {
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
}, HU = {
  name: "letter-spacing",
  initialValue: "0",
  prefix: !1,
  type: 0,
  parse: (e, A) => A.type === 20 && A.value === "normal" ? 0 : A.type === 17 || A.type === 15 ? A.number : 0
};
var _r;
(function(e) {
  e.NORMAL = "normal", e.STRICT = "strict";
})(_r || (_r = {}));
const IU = {
  name: "line-break",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: (e, A) => {
    switch (A) {
      case "strict":
        return _r.STRICT;
      case "normal":
      default:
        return _r.NORMAL;
    }
  }
}, _U = {
  name: "line-height",
  initialValue: "normal",
  prefix: !1,
  type: 4
  /* PropertyDescriptorParsingType.TOKEN_VALUE */
}, ya = (e, A) => j(e) && e.value === "normal" ? 1.2 * A : e.type === 17 ? A * e.number : dA(e) ? z(e, A) : A, LU = {
  name: "list-style-image",
  initialValue: "none",
  type: 0,
  prefix: !1,
  parse: (e, A) => A.type === 20 && A.value === "none" ? null : ri.parse(e, A)
}, SU = {
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
}, Fo = {
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
}, cn = (e) => ({
  name: `margin-${e}`,
  initialValue: "0",
  prefix: !1,
  type: 4
  /* PropertyDescriptorParsingType.TOKEN_VALUE */
}), kU = cn("top"), TU = cn("right"), KU = cn("bottom"), DU = cn("left"), RU = {
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
}, OU = {
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
}), MU = dn("top"), NU = dn("right"), PU = dn("bottom"), VU = dn("left"), GU = {
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
}, XU = {
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
}, JU = {
  name: "text-shadow",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: (e, A) => A.length === 1 && Co(A[0], "none") ? [] : be(A).map((t) => {
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
}, WU = {
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
}, YU = {
  name: "transform",
  initialValue: "none",
  prefix: !0,
  type: 0,
  parse: (e, A) => {
    if (A.type === 20 && A.value === "none")
      return null;
    if (A.type === 18) {
      const t = $U[A.name];
      if (typeof t > "u")
        throw new Error(`Attempting to parse an unsupported transform function "${A.name}"`);
      return t(e, A.values);
    }
    return null;
  }
}, jU = (e, A) => {
  const t = A.filter(
    (s) => s.type === 17
    /* TokenType.NUMBER_TOKEN */
  ).map((s) => s.number);
  return t.length === 6 ? t : null;
}, ZU = (e, A) => {
  const t = A.filter(
    (c) => c.type === 17
    /* TokenType.NUMBER_TOKEN */
  ).map((c) => c.number), [s, r, {}, {}, n, o, {}, {}, {}, {}, {}, {}, i, a] = t;
  return t.length === 16 ? [s, r, n, o, i, a] : null;
}, zU = (e, A) => {
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
}, $U = {
  matrix: jU,
  matrix3d: ZU,
  rotate: zU
}, Ea = {
  type: 16,
  number: 50,
  flags: Ot
}, qU = [Ea, Ea], AF = {
  name: "transform-origin",
  initialValue: "50% 50%",
  prefix: !0,
  type: 1,
  parse: (e, A) => {
    const t = A.filter(dA);
    return t.length !== 2 ? qU : [t[0], t[1]];
  }
}, eF = {
  name: "rotate",
  initialValue: "none",
  prefix: !1,
  type: 0,
  parse: (e, A) => A.type === 20 && A.value === "none" ? null : A.type === 17 && A.number === 0 ? 0 : A.type === 15 ? Mt.parse(e, A) * 180 / Math.PI : null
}, tF = {
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
var ps;
(function(e) {
  e.NORMAL = "normal", e.BREAK_ALL = "break-all", e.KEEP_ALL = "keep-all";
})(ps || (ps = {}));
const sF = {
  name: "word-break",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: (e, A) => {
    switch (A) {
      case "break-all":
        return ps.BREAK_ALL;
      case "keep-all":
        return ps.KEEP_ALL;
      case "normal":
      default:
        return ps.NORMAL;
    }
  }
}, rF = {
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
}, sd = {
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
}, nF = {
  name: "opacity",
  initialValue: "1",
  type: 0,
  prefix: !1,
  parse: (e, A) => FA(A) ? A.number : 1
}, oF = {
  name: "text-decoration-color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, iF = {
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
}, aF = {
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
}, lF = {
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
}, cF = {
  name: "text-underline-offset",
  initialValue: "auto",
  prefix: !1,
  type: 0,
  parse: (e, A) => j(A) && A.value === "auto" ? "auto" : Ce(A) ? A.number : "auto"
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
}, uF = {
  name: "font-size",
  initialValue: "0",
  prefix: !1,
  type: 3,
  format: "length"
}, fF = {
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
}, BF = {
  name: "font-variant",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: (e, A) => A.filter(j).map((t) => t.value)
}, gF = {
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
}, hA = (e, A) => (e & A) !== 0, hF = {
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
}, pF = {
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
    const s = [], r = A.filter(Sc);
    for (let n = 0; n < r.length; n++) {
      const o = r[n], i = r[n + 1];
      if (o.type === 20) {
        const a = i && FA(i) ? i.number : 1;
        s.push({ counter: o.value, increment: a });
      }
    }
    return s;
  }
}, wF = {
  name: "counter-reset",
  initialValue: "none",
  prefix: !0,
  type: 1,
  parse: (e, A) => {
    if (A.length === 0)
      return [];
    const t = [], s = A.filter(Sc);
    for (let r = 0; r < s.length; r++) {
      const n = s[r], o = s[r + 1];
      if (j(n) && n.value !== "none") {
        const i = o && FA(o) ? o.number : 0;
        t.push({ counter: n.value, reset: i });
      }
    }
    return t;
  }
}, QF = {
  name: "duration",
  initialValue: "0s",
  prefix: !1,
  type: 1,
  parse: (e, A) => A.filter(Ce).map((t) => sd.parse(e, t))
}, CF = {
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
    const s = [], r = A.filter(WC);
    if (r.length % 2 !== 0)
      return null;
    for (let n = 0; n < r.length; n += 2) {
      const o = r[n].value, i = r[n + 1].value;
      s.push({ open: o, close: i });
    }
    return s;
  }
}, Ha = (e, A, t) => {
  if (!e)
    return "";
  const s = e[Math.min(A, e.length - 1)];
  return s ? t ? s.open : s.close : "";
}, bF = {
  name: "box-shadow",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: (e, A) => A.length === 1 && Co(A[0], "none") ? [] : be(A).map((t) => {
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
      Co(o, "inset") ? s.inset = !0 : ze(o) ? (r === 0 ? s.offsetX = o : r === 1 ? s.offsetY = o : r === 2 ? s.blur = o : s.spread = o, r++) : s.color = je.parse(e, o);
    }
    return s;
  })
}, UF = {
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
}, FF = {
  name: "-webkit-text-stroke-color",
  initialValue: "currentcolor",
  prefix: !1,
  type: 3,
  format: "color"
}, mF = {
  name: "-webkit-text-stroke-width",
  initialValue: "0",
  type: 0,
  prefix: !1,
  parse: (e, A) => Ce(A) ? A.number : 0
}, xF = {
  name: "-webkit-line-clamp",
  initialValue: "none",
  prefix: !0,
  type: 0,
  parse: (e, A) => A.type === 20 && A.value === "none" ? 0 : A.type === 17 ? Math.max(0, Math.floor(A.number)) : 0
}, vF = {
  name: "objectFit",
  initialValue: "fill",
  prefix: !1,
  type: 1,
  parse: (e, A) => A.filter(j).reduce(
    (t, s) => t | yF(s.value),
    0
    /* OBJECT_FIT.FILL */
  )
}, yF = (e) => {
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
}, EF = {
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
class HF {
  constructor(A, t) {
    this.animationDuration = D(A, QF, t.animationDuration), this.backgroundClip = D(A, Gb, t.backgroundClip), this.backgroundColor = D(A, Xb, t.backgroundColor), this.backgroundImage = D(A, eU, t.backgroundImage), this.backgroundOrigin = D(A, tU, t.backgroundOrigin), this.backgroundPosition = D(A, sU, t.backgroundPosition), this.backgroundRepeat = D(A, rU, t.backgroundRepeat), this.backgroundSize = D(A, oU, t.backgroundSize), this.borderTopColor = D(A, aU, t.borderTopColor), this.borderRightColor = D(A, lU, t.borderRightColor), this.borderBottomColor = D(A, cU, t.borderBottomColor), this.borderLeftColor = D(A, dU, t.borderLeftColor), this.borderTopLeftRadius = D(A, uU, t.borderTopLeftRadius), this.borderTopRightRadius = D(A, fU, t.borderTopRightRadius), this.borderBottomRightRadius = D(A, BU, t.borderBottomRightRadius), this.borderBottomLeftRadius = D(A, gU, t.borderBottomLeftRadius), this.borderTopStyle = D(A, hU, t.borderTopStyle), this.borderRightStyle = D(A, pU, t.borderRightStyle), this.borderBottomStyle = D(A, wU, t.borderBottomStyle), this.borderLeftStyle = D(A, QU, t.borderLeftStyle), this.borderTopWidth = D(A, CU, t.borderTopWidth), this.borderRightWidth = D(A, bU, t.borderRightWidth), this.borderBottomWidth = D(A, UU, t.borderBottomWidth), this.borderLeftWidth = D(A, FU, t.borderLeftWidth), this.boxShadow = D(A, bF, t.boxShadow), this.color = D(A, mU, t.color), this.direction = D(A, xU, t.direction), this.display = D(A, vU, t.display), this.float = D(A, EU, t.cssFloat), this.fontFamily = D(A, dF, t.fontFamily), this.fontSize = D(A, uF, t.fontSize), this.fontStyle = D(A, gF, t.fontStyle), this.fontVariant = D(A, BF, t.fontVariant), this.fontWeight = D(A, fF, t.fontWeight), this.letterSpacing = D(A, HU, t.letterSpacing), this.lineBreak = D(A, IU, t.lineBreak), this.lineHeight = D(A, _U, t.lineHeight), this.listStyleImage = D(A, LU, t.listStyleImage), this.listStylePosition = D(A, SU, t.listStylePosition), this.listStyleType = D(A, Fo, t.listStyleType), this.marginTop = D(A, kU, t.marginTop), this.marginRight = D(A, TU, t.marginRight), this.marginBottom = D(A, KU, t.marginBottom), this.marginLeft = D(A, DU, t.marginLeft), this.opacity = D(A, nF, t.opacity);
    const s = D(A, RU, t.overflow);
    this.overflowX = s[0], this.overflowY = s[s.length > 1 ? 1 : 0], this.overflowWrap = D(A, OU, t.overflowWrap), this.paddingTop = D(A, MU, t.paddingTop), this.paddingRight = D(A, NU, t.paddingRight), this.paddingBottom = D(A, PU, t.paddingBottom), this.paddingLeft = D(A, VU, t.paddingLeft), this.paintOrder = D(A, UF, t.paintOrder), this.position = D(A, XU, t.position), this.textAlign = D(A, GU, t.textAlign), this.textDecorationColor = D(A, oF, t.textDecorationColor ?? t.color), this.textDecorationLine = D(A, iF, t.textDecorationLine ?? t.textDecoration), this.textDecorationStyle = D(A, aF, t.textDecorationStyle), this.textDecorationThickness = D(A, lF, t.textDecorationThickness), this.textUnderlineOffset = D(A, cF, t.textUnderlineOffset), this.textShadow = D(A, JU, t.textShadow), this.textTransform = D(A, WU, t.textTransform), this.textOverflow = D(A, EF, t.textOverflow), this.transform = D(A, YU, t.transform), this.transformOrigin = D(A, AF, t.transformOrigin), this.rotate = D(A, eF, t.rotate), this.visibility = D(A, tF, t.visibility), this.webkitTextStrokeColor = D(A, FF, t.webkitTextStrokeColor), this.webkitTextStrokeWidth = D(A, mF, t.webkitTextStrokeWidth), this.webkitLineClamp = D(A, xF, t.webkitLineClamp), this.wordBreak = D(A, sF, t.wordBreak), this.zIndex = D(A, rF, t.zIndex), this.objectFit = D(A, vF, t.objectFit);
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
class IF {
  constructor(A, t) {
    this.content = D(A, hF, t.content), this.quotes = D(A, CF, t.quotes);
  }
}
class Ia {
  constructor(A, t) {
    this.counterIncrement = D(A, pF, t.counterIncrement), this.counterReset = D(A, wF, t.counterReset);
  }
}
const D = (e, A, t) => {
  const s = new Lc(), r = t !== null && typeof t < "u" ? t.toString() : A.initialValue;
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
          return ri.parse(e, n.parseComponentValue());
        case "length":
          const i = n.parseComponentValue();
          return ze(i) ? i : HA;
        case "length-percentage":
          const a = n.parseComponentValue();
          return dA(a) ? a : HA;
        case "time":
          return sd.parse(e, n.parseComponentValue());
      }
      break;
  }
}, _F = "data-html2canvas-debug", LF = (e) => {
  switch (e.getAttribute(_F)) {
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
}, mo = (e, A) => {
  const t = LF(e);
  return t === 1 || A === t;
};
class Ue {
  constructor(A, t) {
    if (this.context = A, this.textNodes = [], this.elements = [], this.flags = 0, mo(
      t,
      3
      /* DebuggerType.PARSE */
    ))
      debugger;
    this.styles = new HF(A, window.getComputedStyle(t, null)), yo(t) && (this.styles.animationDuration.some((s) => s > 0) && (t.style.animationDuration = "0s"), this.styles.transform !== null && (t.style.transform = "none"), this.styles.rotate !== null && (t.style.rotate = "none")), this.bounds = $r(this.context, t), mo(
      t,
      4
      /* DebuggerType.RENDER */
    ) && (this.flags |= 16);
  }
}
var SF = "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=", _a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", os = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var ir = 0; ir < _a.length; ir++)
  os[_a.charCodeAt(ir)] = ir;
var kF = function(e) {
  var A = e.length * 0.75, t = e.length, s, r = 0, n, o, i, a;
  e[e.length - 1] === "=" && (A--, e[e.length - 2] === "=" && A--);
  var c = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(A) : new Array(A), d = Array.isArray(c) ? c : new Uint8Array(c);
  for (s = 0; s < t; s += 4)
    n = os[e.charCodeAt(s)], o = os[e.charCodeAt(s + 1)], i = os[e.charCodeAt(s + 2)], a = os[e.charCodeAt(s + 3)], d[r++] = n << 2 | o >> 4, d[r++] = (o & 15) << 4 | i >> 2, d[r++] = (i & 3) << 6 | a & 63;
  return c;
}, TF = function(e) {
  for (var A = e.length, t = [], s = 0; s < A; s += 2)
    t.push(e[s + 1] << 8 | e[s]);
  return t;
}, KF = function(e) {
  for (var A = e.length, t = [], s = 0; s < A; s += 4)
    t.push(e[s + 3] << 24 | e[s + 2] << 16 | e[s + 1] << 8 | e[s]);
  return t;
}, gt = 5, ni = 11, Rn = 2, DF = ni - gt, rd = 65536 >> gt, RF = 1 << gt, On = RF - 1, OF = 1024 >> gt, MF = rd + OF, NF = MF, PF = 32, VF = NF + PF, GF = 65536 >> ni, XF = 1 << DF, JF = XF - 1, La = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint16Array(Array.prototype.slice.call(e, A, t));
}, WF = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint32Array(Array.prototype.slice.call(e, A, t));
}, YF = function(e, A) {
  var t = kF(e), s = Array.isArray(t) ? KF(t) : new Uint32Array(t), r = Array.isArray(t) ? TF(t) : new Uint16Array(t), n = 24, o = La(r, n / 2, s[4] / 2), i = s[5] === 2 ? La(r, (n + s[4]) / 2) : WF(s, Math.ceil((n + s[4]) / 4));
  return new jF(s[0], s[1], s[2], s[3], o, i);
}, jF = (
  /** @class */
  function() {
    function e(A, t, s, r, n, o) {
      this.initialValue = A, this.errorValue = t, this.highStart = s, this.highValueIndex = r, this.index = n, this.data = o;
    }
    return e.prototype.get = function(A) {
      var t;
      if (A >= 0) {
        if (A < 55296 || A > 56319 && A <= 65535)
          return t = this.index[A >> gt], t = (t << Rn) + (A & On), this.data[t];
        if (A <= 65535)
          return t = this.index[rd + (A - 55296 >> gt)], t = (t << Rn) + (A & On), this.data[t];
        if (A < this.highStart)
          return t = VF - GF + (A >> ni), t = this.index[t], t += A >> gt & JF, t = this.index[t], t = (t << Rn) + (A & On), this.data[t];
        if (A <= 1114111)
          return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, e;
  }()
), Sa = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", ZF = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var ar = 0; ar < Sa.length; ar++)
  ZF[Sa.charCodeAt(ar)] = ar;
var zF = 1, Mn = 2, Nn = 3, ka = 4, Ta = 5, $F = 7, Ka = 8, Pn = 9, Vn = 10, Da = 11, Ra = 12, Oa = 13, Ma = 14, Gn = 15, qF = function(e) {
  for (var A = [], t = 0, s = e.length; t < s; ) {
    var r = e.charCodeAt(t++);
    if (r >= 55296 && r <= 56319 && t < s) {
      var n = e.charCodeAt(t++);
      (n & 64512) === 56320 ? A.push(((r & 1023) << 10) + (n & 1023) + 65536) : (A.push(r), t--);
    } else
      A.push(r);
  }
  return A;
}, Am = function() {
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
}, em = YF(SF), YA = "×", Xn = "÷", tm = function(e) {
  return em.get(e);
}, sm = function(e, A, t) {
  var s = t - 2, r = A[s], n = A[t - 1], o = A[t];
  if (n === Mn && o === Nn)
    return YA;
  if (n === Mn || n === Nn || n === ka || o === Mn || o === Nn || o === ka)
    return Xn;
  if (n === Ka && [Ka, Pn, Da, Ra].indexOf(o) !== -1 || (n === Da || n === Pn) && (o === Pn || o === Vn) || (n === Ra || n === Vn) && o === Vn || o === Oa || o === Ta || o === $F || n === zF)
    return YA;
  if (n === Oa && o === Ma) {
    for (; r === Ta; )
      r = A[--s];
    if (r === Ma)
      return YA;
  }
  if (n === Gn && o === Gn) {
    for (var i = 0; r === Gn; )
      i++, r = A[--s];
    if (i % 2 === 0)
      return YA;
  }
  return Xn;
}, rm = function(e) {
  var A = qF(e), t = A.length, s = 0, r = 0, n = A.map(tm);
  return {
    next: function() {
      if (s >= t)
        return { done: !0, value: null };
      for (var o = YA; s < t && (o = sm(A, n, ++s)) === YA; )
        ;
      if (o !== YA || s === t) {
        var i = Am.apply(null, A.slice(r, s));
        return r = s, { value: i, done: !1 };
      }
      return { done: !0, value: null };
    }
  };
}, nm = function(e) {
  for (var A = rm(e), t = [], s; !(s = A.next()).done; )
    s.value && t.push(s.value.slice());
  return t;
};
const om = (e) => {
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
}, im = (e) => {
  const A = e.createElement("boundtest");
  A.style.width = "50px", A.style.display = "block", A.style.fontSize = "12px", A.style.letterSpacing = "0px", A.style.wordSpacing = "0px", e.body.appendChild(A);
  const t = e.createRange();
  A.innerHTML = typeof "".repeat == "function" ? "&#128104;".repeat(10) : "";
  const s = A.firstChild, r = qr(s.data).map((a) => QA(a));
  let n = 0, o = {};
  const i = r.every((a, c) => {
    t.setStart(s, n), t.setEnd(s, n + a.length);
    const d = t.getBoundingClientRect();
    n += a.length;
    const l = d.x > o.x || d.y > o.y;
    return o = d, c === 0 ? !0 : l;
  });
  return e.body.removeChild(A), i;
}, am = () => typeof new Image().crossOrigin < "u", lm = () => typeof new XMLHttpRequest().responseType == "string", cm = (e) => {
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
}, Na = (e) => e[0] === 0 && e[1] === 255 && e[2] === 0 && e[3] === 255, dm = (e) => {
  const A = e.createElement("canvas"), t = 100;
  A.width = t, A.height = t;
  const s = A.getContext("2d");
  if (!s)
    return Promise.reject(!1);
  s.fillStyle = "rgb(0, 255, 0)", s.fillRect(0, 0, t, t);
  const r = new Image(), n = A.toDataURL();
  r.src = n;
  const o = xo(t, t, 0, 0, r);
  return s.fillStyle = "red", s.fillRect(0, 0, t, t), Pa(o).then((i) => {
    s.drawImage(i, 0, 0);
    const a = s.getImageData(0, 0, t, t).data;
    s.fillStyle = "red", s.fillRect(0, 0, t, t);
    const c = e.createElement("div");
    return c.style.backgroundImage = `url(${n})`, c.style.height = `${t}px`, Na(a) ? Pa(xo(t, t, 0, 0, c)) : Promise.reject(!1);
  }).then((i) => (s.drawImage(i, 0, 0), Na(s.getImageData(0, 0, t, t).data))).catch(() => !1);
}, xo = (e, A, t, s, r) => {
  const n = "http://www.w3.org/2000/svg", o = document.createElementNS(n, "svg"), i = document.createElementNS(n, "foreignObject");
  return o.setAttributeNS(null, "width", e.toString()), o.setAttributeNS(null, "height", A.toString()), i.setAttributeNS(null, "width", "100%"), i.setAttributeNS(null, "height", "100%"), i.setAttributeNS(null, "x", t.toString()), i.setAttributeNS(null, "y", s.toString()), i.setAttributeNS(null, "externalResourcesRequired", "true"), o.appendChild(i), i.appendChild(r), o;
}, Pa = (e) => new Promise((A, t) => {
  const s = new Image();
  s.onload = () => A(s), s.onerror = t, s.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(new XMLSerializer().serializeToString(e))}`;
}), EA = {
  get SUPPORT_RANGE_BOUNDS() {
    const e = om(document);
    return Object.defineProperty(EA, "SUPPORT_RANGE_BOUNDS", { value: e }), e;
  },
  get SUPPORT_WORD_BREAKING() {
    const e = EA.SUPPORT_RANGE_BOUNDS && im(document);
    return Object.defineProperty(EA, "SUPPORT_WORD_BREAKING", { value: e }), e;
  },
  get SUPPORT_SVG_DRAWING() {
    const e = cm(document);
    return Object.defineProperty(EA, "SUPPORT_SVG_DRAWING", { value: e }), e;
  },
  get SUPPORT_FOREIGNOBJECT_DRAWING() {
    const e = typeof Array.from == "function" && typeof window.fetch == "function" ? dm(document) : Promise.resolve(!1);
    return Object.defineProperty(EA, "SUPPORT_FOREIGNOBJECT_DRAWING", { value: e }), e;
  },
  get SUPPORT_CORS_IMAGES() {
    const e = am();
    return Object.defineProperty(EA, "SUPPORT_CORS_IMAGES", { value: e }), e;
  },
  get SUPPORT_RESPONSE_TYPE() {
    const e = lm();
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
class ws {
  constructor(A, t) {
    this.text = A, this.bounds = t;
  }
}
const um = (e, A, t, s) => {
  const r = gm(A, t), n = [];
  let o = 0;
  return r.forEach((i) => {
    if (t.textDecorationLine.length || i.trim().length > 0)
      if (EA.SUPPORT_RANGE_BOUNDS) {
        const a = Va(s, o, i.length).getClientRects();
        if (a.length > 1) {
          const c = ue(i);
          let d = 0;
          c.forEach((l) => {
            n.push(new ws(l, kA.fromDOMRectList(e, Va(s, d + o, l.length).getClientRects()))), d += l.length;
          });
        } else
          n.push(new ws(i, kA.fromDOMRectList(e, a)));
      } else {
        const a = s.splitText(i.length);
        n.push(new ws(i, fm(e, s))), s = a;
      }
    else EA.SUPPORT_RANGE_BOUNDS || (s = s.splitText(i.length));
    o += i.length;
  }), n;
}, fm = (e, A) => {
  const t = A.ownerDocument;
  if (t) {
    const s = t.createElement("html2canvaswrapper");
    s.appendChild(A.cloneNode(!0));
    const r = A.parentNode;
    if (r) {
      r.replaceChild(s, A);
      const n = $r(e, s);
      return s.firstChild && r.replaceChild(s.firstChild, s), n;
    }
  }
  return kA.EMPTY;
}, Va = (e, A, t) => {
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
  return nm(e);
}, Bm = (e, A) => {
  if (EA.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    const t = new Intl.Segmenter(void 0, {
      granularity: "word"
    });
    return Array.from(t.segment(e)).map((s) => s.segment);
  }
  return pm(e, A);
}, gm = (e, A) => A.letterSpacing !== 0 ? ue(e) : Bm(e, A), hm = [32, 160, 4961, 65792, 65793, 4153, 4241], pm = (e, A) => {
  const t = NQ(e, {
    lineBreak: A.lineBreak,
    wordBreak: A.overflowWrap === "break-word" ? "break-word" : A.wordBreak
  }), s = [];
  let r;
  for (; !(r = t.next()).done; )
    if (r.value) {
      const n = r.value.slice(), o = qr(n);
      let i = "";
      o.forEach((a) => {
        hm.indexOf(a) === -1 ? i += QA(a) : (i.length && s.push(i), s.push(QA(a)), i = "");
      }), i.length && s.push(i);
    }
  return s;
};
class wm {
  constructor(A, t, s) {
    this.text = Qm(t.data, s.textTransform), this.textBounds = um(A, this.text, s, t);
  }
}
const Qm = (e, A) => {
  switch (A) {
    case 1:
      return e.toLowerCase();
    case 3:
      return e.replace(Cm, bm);
    case 2:
      return e.toUpperCase();
    default:
      return e;
  }
}, Cm = /(^|\s|:|-|\(|\))([a-z])/g, bm = (e, A, t) => e.length > 0 ? A + t.toUpperCase() : e;
class nd extends Ue {
  constructor(A, t) {
    super(A, t), this.src = t.currentSrc || t.src, this.intrinsicWidth = t.naturalWidth, this.intrinsicHeight = t.naturalHeight, this.context.cache.addImage(this.src);
  }
}
class od extends Ue {
  constructor(A, t) {
    super(A, t), this.canvas = t, this.intrinsicWidth = t.width, this.intrinsicHeight = t.height;
  }
}
class id extends Ue {
  constructor(A, t) {
    super(A, t);
    const s = new XMLSerializer(), r = $r(A, t);
    t.setAttribute("width", `${r.width}px`), t.setAttribute("height", `${r.height}px`), this.svg = `data:image/svg+xml,${encodeURIComponent(s.serializeToString(t))}`, this.intrinsicWidth = t.width.baseVal.value, this.intrinsicHeight = t.height.baseVal.value, this.context.cache.addImage(this.svg);
  }
}
class ad extends Ue {
  constructor(A, t) {
    super(A, t), this.value = t.value;
  }
}
class vo extends Ue {
  constructor(A, t) {
    super(A, t), this.start = t.start, this.reversed = typeof t.reversed == "boolean" && t.reversed === !0;
  }
}
const Um = [
  {
    type: 15,
    flags: 0,
    unit: "px",
    number: 3
  }
], Fm = [
  {
    type: 16,
    flags: 0,
    number: 50
  }
], mm = (e) => e.width > e.height ? new kA(e.left + (e.width - e.height) / 2, e.top, e.height, e.height) : e.width < e.height ? new kA(e.left, e.top + (e.height - e.width) / 2, e.width, e.width) : e, xm = (e) => {
  const A = e.type === ym ? new Array(e.value.length + 1).join("•") : e.value;
  return A.length === 0 ? e.placeholder || "" : A;
}, vm = (e) => e.value.length === 0 && !!e.placeholder, Lr = "checkbox", Sr = "radio", ym = "password", Ga = 707406591, Em = 1970632191;
class Qs extends Ue {
  constructor(A, t) {
    switch (super(A, t), this.type = t.type.toLowerCase(), this.checked = t.checked, this.value = xm(t), this.isPlaceholder = vm(t), (this.type === Lr || this.type === Sr) && (this.styles.backgroundColor = 3739148031, this.styles.borderTopColor = this.styles.borderRightColor = this.styles.borderBottomColor = this.styles.borderLeftColor = 2779096575, this.styles.borderTopWidth = this.styles.borderRightWidth = this.styles.borderBottomWidth = this.styles.borderLeftWidth = 1, this.styles.borderTopStyle = this.styles.borderRightStyle = this.styles.borderBottomStyle = this.styles.borderLeftStyle = 1, this.styles.backgroundClip = [
      0
      /* BACKGROUND_CLIP.BORDER_BOX */
    ], this.styles.backgroundOrigin = [
      0
      /* BACKGROUND_ORIGIN.BORDER_BOX */
    ], this.bounds = mm(this.bounds)), this.type) {
      case Lr:
        this.styles.borderTopRightRadius = this.styles.borderTopLeftRadius = this.styles.borderBottomRightRadius = this.styles.borderBottomLeftRadius = Um;
        break;
      case Sr:
        this.styles.borderTopRightRadius = this.styles.borderTopLeftRadius = this.styles.borderBottomRightRadius = this.styles.borderBottomLeftRadius = Fm;
        break;
    }
  }
}
class ld extends Ue {
  constructor(A, t) {
    super(A, t);
    const s = t.options[t.selectedIndex || 0];
    this.value = s && s.text || "";
  }
}
class cd extends Ue {
  constructor(A, t) {
    super(A, t), this.value = t.value;
  }
}
class dd extends Ue {
  constructor(A, t) {
    super(A, t), this.src = t.src, this.width = parseInt(t.width, 10) || 0, this.height = parseInt(t.height, 10) || 0, this.backgroundColor = this.styles.backgroundColor;
    try {
      if (t.contentWindow && t.contentWindow.document && t.contentWindow.document.documentElement) {
        this.tree = fd(A, t.contentWindow.document.documentElement);
        const s = t.contentWindow.document.documentElement ? St(A, getComputedStyle(t.contentWindow.document.documentElement).backgroundColor) : pe.TRANSPARENT, r = t.contentWindow.document.body ? St(A, getComputedStyle(t.contentWindow.document.body).backgroundColor) : pe.TRANSPARENT;
        this.backgroundColor = Ye(s) ? Ye(r) ? this.styles.backgroundColor : r : s;
      }
    } catch {
    }
  }
}
const Hm = ["OL", "UL", "MENU"], wr = (e, A, t, s) => {
  for (let r = A.firstChild, n; r; r = n)
    if (n = r.nextSibling, Bd(r) && r.data.length > 0)
      t.textNodes.push(new wm(e, r, t.styles));
    else if (ye(r))
      if (is(r) && r.assignedNodes)
        r.assignedNodes().forEach((o) => wr(e, o, t, s));
      else {
        const o = ud(e, r);
        o.styles.isVisible() && (Im(r, o, s) ? o.flags |= 4 : _m(o.styles) && (o.flags |= 2), Hm.indexOf(r.tagName) !== -1 && (o.flags |= 8), t.elements.push(o), r.slot, r.shadowRoot ? wr(e, r.shadowRoot, o, s) : !kr(r) && !gd(r) && !Tr(r) && wr(e, r, o, s));
      }
}, ud = (e, A) => Eo(A) ? new nd(e, A) : hd(A) ? new od(e, A) : gd(A) ? new id(e, A) : Lm(A) ? new ad(e, A) : Sm(A) ? new vo(e, A) : km(A) ? new Qs(e, A) : Tr(A) ? new ld(e, A) : kr(A) ? new cd(e, A) : pd(A) ? new dd(e, A) : new Ue(e, A), fd = (e, A) => {
  const t = ud(e, A);
  return t.flags |= 4, wr(e, A, t, t), t;
}, Im = (e, A, t) => A.styles.isPositionedWithZIndex() || A.styles.opacity < 1 || A.styles.isTransformed() || oi(e) && t.styles.isTransparent(), _m = (e) => e.isPositioned() || e.isFloating() ? !0 : hA(
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
), Bd = (e) => e.nodeType === Node.TEXT_NODE, ye = (e) => e.nodeType === Node.ELEMENT_NODE, yo = (e) => ye(e) && typeof e.style < "u" && !Qr(e), Qr = (e) => typeof e.className == "object", Lm = (e) => e.tagName === "LI", Sm = (e) => e.tagName === "OL", km = (e) => e.tagName === "INPUT", Tm = (e) => e.tagName === "HTML", gd = (e) => e.tagName === "svg", oi = (e) => e.tagName === "BODY", hd = (e) => e.tagName === "CANVAS", Xa = (e) => e.tagName === "VIDEO", Eo = (e) => e.tagName === "IMG", pd = (e) => e.tagName === "IFRAME", Jn = (e) => e.tagName === "STYLE", Ja = (e) => e.tagName === "SCRIPT", kr = (e) => e.tagName === "TEXTAREA", Tr = (e) => e.tagName === "SELECT", is = (e) => e.tagName === "SLOT", Wa = (e) => e.tagName.indexOf("-") > 0;
class Km {
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
const Ya = {
  integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
  values: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
}, ja = {
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
}, Dm = {
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
}, Rm = {
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
}, Ut = (e, A, t, s, r, n) => e < A || e > t ? Is(e, r, n.length > 0) : s.integers.reduce((o, i, a) => {
  for (; e >= i; )
    e -= i, o += s.values[a];
  return o;
}, "") + n, wd = (e, A, t, s) => {
  let r = "";
  do
    t || e--, r = s(e) + r, e /= A;
  while (e * A >= A);
  return r;
}, wA = (e, A, t, s, r) => {
  const n = t - A + 1;
  return (e < 0 ? "-" : "") + (wd(Math.abs(e), n, s, (o) => QA(Math.floor(o % n) + A)) + r);
}, rt = (e, A, t = ". ") => {
  const s = A.length;
  return wd(Math.abs(e), s, !1, (r) => A[Math.floor(r % s)]) + t;
}, yt = 1, Oe = 2, Me = 4, as = 8, xe = (e, A, t, s, r, n) => {
  if (e < -9999 || e > 9999)
    return Is(e, 4, r.length > 0);
  let o = Math.abs(e), i = r;
  if (o === 0)
    return A[0] + i;
  for (let a = 0; o > 0 && a <= 4; a++) {
    const c = o % 10;
    c === 0 && hA(n, yt) && i !== "" ? i = A[c] + i : c > 1 || c === 1 && a === 0 || c === 1 && a === 1 && hA(n, Oe) || c === 1 && a === 1 && hA(n, Me) && e > 100 || c === 1 && a > 1 && hA(n, as) ? i = A[c] + (a > 0 ? t[a - 1] : "") + i : c === 1 && a > 0 && (i = t[a - 1] + i), o = Math.floor(o / 10);
  }
  return (e < 0 ? s : "") + i;
}, Za = "十百千萬", za = "拾佰仟萬", $a = "マイナス", Wn = "마이너스", Is = (e, A, t) => {
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
      return Ut(e, 1, 3999, Ya, 3, s).toLowerCase();
    case 7:
      return Ut(e, 1, 3999, Ya, 3, s);
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
      return Ut(e, 1, 9999, ja, 3, s);
    case 35:
      return Ut(e, 1, 9999, ja, 3, s).toLowerCase();
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
      return xe(e, "零一二三四五六七八九", Za, "負", r, Oe | Me | as);
    case 47:
      return xe(e, "零壹貳參肆伍陸柒捌玖", za, "負", r, yt | Oe | Me | as);
    case 42:
      return xe(e, "零一二三四五六七八九", Za, "负", r, Oe | Me | as);
    case 41:
      return xe(e, "零壹贰叁肆伍陆柒捌玖", za, "负", r, yt | Oe | Me | as);
    case 26:
      return xe(e, "〇一二三四五六七八九", "十百千万", $a, r, 0);
    case 25:
      return xe(e, "零壱弐参四伍六七八九", "拾百千万", $a, r, yt | Oe | Me);
    case 31:
      return xe(e, "영일이삼사오육칠팔구", "십백천만", Wn, n, yt | Oe | Me);
    case 33:
      return xe(e, "零一二三四五六七八九", "十百千萬", Wn, n, 0);
    case 32:
      return xe(e, "零壹貳參四五六七八九", "拾百千", Wn, n, yt | Oe | Me);
    case 18:
      return wA(e, 2406, 2415, !0, s);
    case 20:
      return Ut(e, 1, 19999, Rm, 3, s);
    case 21:
      return wA(e, 2790, 2799, !0, s);
    case 22:
      return wA(e, 2662, 2671, !0, s);
    case 52:
      return Ut(e, 1, 10999, Dm, 3, s);
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
}, Ho = "data-html2canvas-ignore", Om = (e) => {
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
class qa {
  constructor(A, t, s) {
    if (this.context = A, this.options = s, this.scrolledElements = [], this.referenceElement = t, this.counters = new Km(), this.quoteDepth = 0, !t.ownerDocument)
      throw new Error("Cloned element does not have an owner document");
    if (!this.options.iframeContainer) {
      const r = Om(t);
      r && (this.options.iframeContainer = r);
    }
    this.documentElement = this.cloneNode(t.ownerDocument.documentElement, !1);
  }
  toIFrame(A, t) {
    const s = Mm(A, t, this.options.iframeContainer);
    if (!s.contentWindow)
      return Promise.reject("Unable to find iframe window");
    const r = A.defaultView.pageXOffset, n = A.defaultView.pageYOffset, o = s.contentWindow, i = o.document, a = Vm(s).then(async () => {
      this.scrolledElements.forEach(Jm), o && (o.scrollTo(t.left, t.top), /(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (o.scrollY !== t.top || o.scrollX !== t.left) && (this.context.logger.warn("Unable to restore scroll position for cloned document"), this.context.windowBounds = this.context.windowBounds.add(o.scrollX - t.left, o.scrollY - t.top, 0, 0)));
      const l = this.options.onclone, f = this.clonedReferenceElement;
      return typeof f > "u" ? Promise.reject(`Error finding the ${this.referenceElement.nodeName} in the cloned document`) : (i.fonts && i.fonts.ready && await i.fonts.ready, /(AppleWebKit)/g.test(navigator.userAgent) && await Pm(i), typeof l == "function" ? Promise.resolve().then(() => l(i, f)).then(() => s) : s);
    }), c = i.baseURI;
    i.open();
    try {
      const l = trustedTypes.createPolicy("my-policy", {
        createHTML: (Q) => Q
      }), f = Al(document.doctype) + "<html></html>", g = l.createHTML(f);
      i.write(g);
    } catch {
      i.write(Al(document.doctype) + "<html></html>");
    }
    Xm(this.referenceElement.ownerDocument, r, n);
    const d = i.adoptNode(this.documentElement);
    return zm(d, c), i.replaceChild(d, i.documentElement), i.close(), a;
  }
  createElementClone(A) {
    if (mo(
      A,
      2
      /* DebuggerType.CLONE */
    ))
      debugger;
    if (hd(A))
      return this.createCanvasClone(A);
    if (Xa(A))
      return this.createVideoClone(A);
    if (Jn(A))
      return this.createStyleClone(A);
    const t = A.cloneNode(!1);
    return Eo(t) && (Eo(A) && A.currentSrc && A.currentSrc !== A.src && (t.src = A.currentSrc, t.srcset = ""), t.loading === "lazy" && (t.loading = "eager")), Wa(t) ? this.createCustomElementClone(t) : t;
  }
  createCustomElementClone(A) {
    const t = document.createElement("div");
    if (t.className = A.className, Yn(A.style, t), A.shadowRoot)
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
    (!ye(t) || !Ja(t) && !t.hasAttribute(Ho) && (typeof this.options.ignoreElements != "function" || !this.options.ignoreElements(t))) && (!this.options.copyStyles || !ye(t) || !Jn(t)) && A.appendChild(this.cloneNode(t, s));
  }
  /**
   * Check if a child node should be cloned based on filtering rules
   * Filters out: scripts, ignored elements, and optionally styles
   */
  shouldCloneChild(A) {
    return !ye(A) || !Ja(A) && !A.hasAttribute(Ho) && (typeof this.options.ignoreElements != "function" || !this.options.ignoreElements(A));
  }
  /**
   * Check if a style element should be cloned based on copyStyles option
   */
  shouldCloneStyleElement(A) {
    return !this.options.copyStyles || !ye(A) || !Jn(A);
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
    if (!is(A))
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
      ye(r) && is(r) ? this.cloneSlotElement(r, t, s) : this.safeAppendClonedChild(t, r, s);
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
    if (!is(A))
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
      ye(r) && is(r) ? this.cloneSlotElementAsLightDOM(r, t, s) : this.appendChildNode(t, r, s);
  }
  /**
   * Clone child nodes from source element to clone element
   * Handles shadow DOM, slots, and light DOM appropriately
   */
  cloneChildNodes(A, t, s) {
    A.shadowRoot && t.shadowRoot ? (this.cloneShadowDOMChildren(A.shadowRoot, t.shadowRoot, s), this.cloneLightDOMChildren(A, t, s)) : A.shadowRoot && !t.shadowRoot ? this.cloneShadowDOMAsLightDOM(A.shadowRoot, t, s) : this.cloneLightDOMChildren(A, t, s);
  }
  cloneNode(A, t) {
    if (Bd(A))
      return document.createTextNode(A.data);
    if (!A.ownerDocument)
      return A.cloneNode(!1);
    const s = A.ownerDocument.defaultView;
    if (s && ye(A) && (yo(A) || Qr(A))) {
      const r = this.createElementClone(A);
      r.style.transitionProperty = "none";
      const n = s.getComputedStyle(A), o = s.getComputedStyle(A, ":before"), i = s.getComputedStyle(A, ":after");
      this.referenceElement === A && yo(r) && (this.clonedReferenceElement = r), oi(r) && jm(r, this.options.cspNonce);
      const a = this.counters.parse(new Ia(this.context, n)), c = this.resolvePseudoContent(A, r, o, Cs.BEFORE);
      Wa(A) && (t = !0), Xa(A) || this.cloneChildNodes(A, r, t), c && r.insertBefore(c, r.firstChild);
      const d = this.resolvePseudoContent(A, r, i, Cs.AFTER);
      return d && r.appendChild(d), this.counters.pop(a), (n && (this.options.copyStyles || Qr(A)) && !pd(A) || t) && Yn(n, r), (A.scrollTop !== 0 || A.scrollLeft !== 0) && this.scrolledElements.push([r, A.scrollLeft, A.scrollTop]), (kr(A) || Tr(A)) && (kr(r) || Tr(r)) && (r.value = A.value), r;
    }
    return A.cloneNode(!1);
  }
  resolvePseudoContent(A, t, s, r) {
    if (!s)
      return;
    const n = s.content, o = t.ownerDocument;
    if (!o || !n || n === "none" || n === "-moz-alt-content" || s.display === "none")
      return;
    this.counters.parse(new Ia(this.context, s));
    const i = new IF(this.context, s), a = o.createElement("html2canvaspseudoelement");
    Yn(s, a), i.content.forEach((d) => {
      if (d.type === 0)
        a.appendChild(o.createTextNode(d.value));
      else if (d.type === 22) {
        const l = o.createElement("img");
        l.src = d.value, l.style.opacity = "1", a.appendChild(l);
      } else if (d.type === 18) {
        if (d.name === "attr") {
          const l = d.values.filter(j);
          l.length && a.appendChild(o.createTextNode(A.getAttribute(l[0].value) || ""));
        } else if (d.name === "counter") {
          const [l, f] = d.values.filter(IA);
          if (l && j(l)) {
            const g = this.counters.getCounterValue(l.value), Q = f && j(f) ? Fo.parse(this.context, f.value) : 3;
            a.appendChild(o.createTextNode(Is(g, Q, !1)));
          }
        } else if (d.name === "counters") {
          const [l, f, g] = d.values.filter(IA);
          if (l && j(l)) {
            const Q = this.counters.getCounterValues(l.value), U = g && j(g) ? Fo.parse(this.context, g.value) : 3, m = f && f.type === 0 ? f.value : "", _ = Q.map((v) => Is(v, U, !1)).join(m);
            a.appendChild(o.createTextNode(_));
          }
        }
      } else if (d.type === 20)
        switch (d.value) {
          case "open-quote":
            a.appendChild(o.createTextNode(Ha(i.quotes, this.quoteDepth++, !0)));
            break;
          case "close-quote":
            a.appendChild(o.createTextNode(Ha(i.quotes, --this.quoteDepth, !1)));
            break;
          default:
            a.appendChild(o.createTextNode(d.value));
        }
    }), a.className = `${Io} ${_o}`;
    const c = r === Cs.BEFORE ? ` ${Io}` : ` ${_o}`;
    return Qr(t) ? t.className.baseValue += c : t.className += c, a;
  }
  static destroy(A) {
    return A.parentNode ? (A.parentNode.removeChild(A), !0) : !1;
  }
}
var Cs;
(function(e) {
  e[e.BEFORE = 0] = "BEFORE", e[e.AFTER = 1] = "AFTER";
})(Cs || (Cs = {}));
const Mm = (e, A, t) => {
  const s = e.createElement("iframe");
  return s.className = "html2canvas-container", s.style.visibility = "hidden", s.style.position = "fixed", s.style.left = "-10000px", s.style.top = "0px", s.style.border = "0", s.width = A.width.toString(), s.height = A.height.toString(), s.scrolling = "no", s.setAttribute(Ho, "true"), (t || e.body).appendChild(s), s;
}, Nm = (e) => new Promise((A) => {
  if (e.complete) {
    A();
    return;
  }
  if (!e.src) {
    A();
    return;
  }
  e.onload = A, e.onerror = A;
}), Pm = (e) => Promise.all([].slice.call(e.images, 0).map(Nm)), Vm = (e) => new Promise((A, t) => {
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
}), Gm = [
  "all",
  // #2476
  "d",
  // #2483
  "content"
  // Safari shows pseudoelements if content is set
], Yn = (e, A) => {
  for (let t = e.length - 1; t >= 0; t--) {
    const s = e.item(t);
    Gm.indexOf(s) === -1 && !s.startsWith("--") && A.style.setProperty(s, e.getPropertyValue(s));
  }
  return A;
}, Al = (e) => {
  let A = "";
  return e && (A += "<!DOCTYPE ", e.name && (A += e.name), e.internalSubset && (A += e.internalSubset), e.publicId && (A += `"${e.publicId}"`), e.systemId && (A += `"${e.systemId}"`), A += ">"), A;
}, Xm = (e, A, t) => {
  e && e.defaultView && (A !== e.defaultView.pageXOffset || t !== e.defaultView.pageYOffset) && e.defaultView.scrollTo(A, t);
}, Jm = ([e, A, t]) => {
  e.scrollLeft = A, e.scrollTop = t;
}, Wm = ":before", Ym = ":after", Io = "___html2canvas___pseudoelement_before", _o = "___html2canvas___pseudoelement_after", el = `{
    content: "" !important;
    display: none !important;
}`, jm = (e, A) => {
  Zm(e, `.${Io}${Wm}${el}
         .${_o}${Ym}${el}`, A);
}, Zm = (e, A, t) => {
  const s = e.ownerDocument;
  if (s) {
    const r = s.createElement("style");
    r.textContent = A, t && (r.nonce = t), e.appendChild(r);
  }
}, zm = (e, A) => {
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
class $m {
  constructor(A, t) {
    this.context = A, this._options = t, this._cache = {};
  }
  addImage(A) {
    const t = Promise.resolve();
    return this.has(A) || (Zn(A) || t1(A)) && (this._cache[A] = this.loadImage(A)).catch(() => {
    }), t;
  }
  match(A) {
    return this._cache[A];
  }
  async loadImage(A) {
    const t = typeof this._options.customIsSameOrigin == "function" ? await this._options.customIsSameOrigin(A, Ae.isSameOrigin) : Ae.isSameOrigin(A), s = !jn(A) && this._options.useCORS === !0 && EA.SUPPORT_CORS_IMAGES && !t, r = !jn(A) && !t && !Zn(A) && typeof this._options.proxy == "string" && EA.SUPPORT_CORS_XHR && !s;
    if (!t && this._options.allowTaint === !1 && !jn(A) && !Zn(A) && !r && !s)
      return;
    let n = A;
    return r && (n = await this.proxy(n)), this.context.logger.debug(`Added image ${A.substring(0, 256)}`), await new Promise((o, i) => {
      const a = new Image();
      a.onload = () => o(a), a.onerror = i, (s1(n) || s) && (a.crossOrigin = "anonymous"), a.src = n, a.complete === !0 && setTimeout(() => o(a), 500), this._options.imageTimeout > 0 && setTimeout(() => i(`Timed out (${this._options.imageTimeout}ms) loading image`), this._options.imageTimeout);
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
            c.addEventListener("load", () => r(c.result), !1), c.addEventListener("error", (d) => n(d), !1), c.readAsDataURL(i.response);
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
const qm = /^data:image\/svg\+xml/i, A1 = /^data:image\/.*;base64,/i, e1 = /^data:image\/.*/i, t1 = (e) => EA.SUPPORT_SVG_DRAWING || !r1(e), jn = (e) => e1.test(e), s1 = (e) => A1.test(e), Zn = (e) => e.substr(0, 4) === "blob", r1 = (e) => e.substr(-3).toLowerCase() === "svg" || qm.test(e);
class R {
  constructor(A, t) {
    this.type = 0, this.x = A, this.y = t;
  }
  add(A, t) {
    return new R(this.x + A, this.y + t);
  }
}
const Ft = (e, A, t) => new R(e.x + (A.x - e.x) * t, e.y + (A.y - e.y) * t);
class Le {
  constructor(A, t, s, r) {
    this.type = 1, this.start = A, this.startControl = t, this.endControl = s, this.end = r;
  }
  subdivide(A, t) {
    const s = Ft(this.start, this.startControl, A), r = Ft(this.startControl, this.endControl, A), n = Ft(this.endControl, this.end, A), o = Ft(s, r, A), i = Ft(r, n, A), a = Ft(o, i, A);
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
class n1 {
  constructor(A) {
    const t = A.styles, s = A.bounds;
    let [r, n] = ns(t.borderTopLeftRadius, s.width, s.height), [o, i] = ns(t.borderTopRightRadius, s.width, s.height), [a, c] = ns(t.borderBottomRightRadius, s.width, s.height), [d, l] = ns(t.borderBottomLeftRadius, s.width, s.height);
    const f = [];
    f.push((r + o) / s.width), f.push((d + a) / s.width), f.push((n + l) / s.height), f.push((i + c) / s.height);
    const g = Math.max(...f);
    g > 1 && (r /= g, n /= g, o /= g, i /= g, a /= g, c /= g, d /= g, l /= g);
    const Q = s.width - o, U = s.height - c, m = s.width - a, _ = s.height - l, v = t.borderTopWidth, h = t.borderRightWidth, x = t.borderBottomWidth, S = t.borderLeftWidth, X = z(t.paddingTop, A.bounds.width), eA = z(t.paddingRight, A.bounds.width), bA = z(t.paddingBottom, A.bounds.width), uA = z(t.paddingLeft, A.bounds.width);
    this.topLeftBorderDoubleOuterBox = r > 0 || n > 0 ? fA(s.left + S / 3, s.top + v / 3, r - S / 3, n - v / 3, tA.TOP_LEFT) : new R(s.left + S / 3, s.top + v / 3), this.topRightBorderDoubleOuterBox = r > 0 || n > 0 ? fA(s.left + Q, s.top + v / 3, o - h / 3, i - v / 3, tA.TOP_RIGHT) : new R(s.left + s.width - h / 3, s.top + v / 3), this.bottomRightBorderDoubleOuterBox = a > 0 || c > 0 ? fA(s.left + m, s.top + U, a - h / 3, c - x / 3, tA.BOTTOM_RIGHT) : new R(s.left + s.width - h / 3, s.top + s.height - x / 3), this.bottomLeftBorderDoubleOuterBox = d > 0 || l > 0 ? fA(s.left + S / 3, s.top + _, d - S / 3, l - x / 3, tA.BOTTOM_LEFT) : new R(s.left + S / 3, s.top + s.height - x / 3), this.topLeftBorderDoubleInnerBox = r > 0 || n > 0 ? fA(s.left + S * 2 / 3, s.top + v * 2 / 3, r - S * 2 / 3, n - v * 2 / 3, tA.TOP_LEFT) : new R(s.left + S * 2 / 3, s.top + v * 2 / 3), this.topRightBorderDoubleInnerBox = r > 0 || n > 0 ? fA(s.left + Q, s.top + v * 2 / 3, o - h * 2 / 3, i - v * 2 / 3, tA.TOP_RIGHT) : new R(s.left + s.width - h * 2 / 3, s.top + v * 2 / 3), this.bottomRightBorderDoubleInnerBox = a > 0 || c > 0 ? fA(s.left + m, s.top + U, a - h * 2 / 3, c - x * 2 / 3, tA.BOTTOM_RIGHT) : new R(s.left + s.width - h * 2 / 3, s.top + s.height - x * 2 / 3), this.bottomLeftBorderDoubleInnerBox = d > 0 || l > 0 ? fA(s.left + S * 2 / 3, s.top + _, d - S * 2 / 3, l - x * 2 / 3, tA.BOTTOM_LEFT) : new R(s.left + S * 2 / 3, s.top + s.height - x * 2 / 3), this.topLeftBorderStroke = r > 0 || n > 0 ? fA(s.left + S / 2, s.top + v / 2, r - S / 2, n - v / 2, tA.TOP_LEFT) : new R(s.left + S / 2, s.top + v / 2), this.topRightBorderStroke = r > 0 || n > 0 ? fA(s.left + Q, s.top + v / 2, o - h / 2, i - v / 2, tA.TOP_RIGHT) : new R(s.left + s.width - h / 2, s.top + v / 2), this.bottomRightBorderStroke = a > 0 || c > 0 ? fA(s.left + m, s.top + U, a - h / 2, c - x / 2, tA.BOTTOM_RIGHT) : new R(s.left + s.width - h / 2, s.top + s.height - x / 2), this.bottomLeftBorderStroke = d > 0 || l > 0 ? fA(s.left + S / 2, s.top + _, d - S / 2, l - x / 2, tA.BOTTOM_LEFT) : new R(s.left + S / 2, s.top + s.height - x / 2), this.topLeftBorderBox = r > 0 || n > 0 ? fA(s.left, s.top, r, n, tA.TOP_LEFT) : new R(s.left, s.top), this.topRightBorderBox = o > 0 || i > 0 ? fA(s.left + Q, s.top, o, i, tA.TOP_RIGHT) : new R(s.left + s.width, s.top), this.bottomRightBorderBox = a > 0 || c > 0 ? fA(s.left + m, s.top + U, a, c, tA.BOTTOM_RIGHT) : new R(s.left + s.width, s.top + s.height), this.bottomLeftBorderBox = d > 0 || l > 0 ? fA(s.left, s.top + _, d, l, tA.BOTTOM_LEFT) : new R(s.left, s.top + s.height), this.topLeftPaddingBox = r > 0 || n > 0 ? fA(s.left + S, s.top + v, Math.max(0, r - S), Math.max(0, n - v), tA.TOP_LEFT) : new R(s.left + S, s.top + v), this.topRightPaddingBox = o > 0 || i > 0 ? fA(s.left + Math.min(Q, s.width - h), s.top + v, Q > s.width + h ? 0 : Math.max(0, o - h), Math.max(0, i - v), tA.TOP_RIGHT) : new R(s.left + s.width - h, s.top + v), this.bottomRightPaddingBox = a > 0 || c > 0 ? fA(s.left + Math.min(m, s.width - S), s.top + Math.min(U, s.height - x), Math.max(0, a - h), Math.max(0, c - x), tA.BOTTOM_RIGHT) : new R(s.left + s.width - h, s.top + s.height - x), this.bottomLeftPaddingBox = d > 0 || l > 0 ? fA(s.left + S, s.top + Math.min(_, s.height - x), Math.max(0, d - S), Math.max(0, l - x), tA.BOTTOM_LEFT) : new R(s.left + S, s.top + s.height - x), this.topLeftContentBox = r > 0 || n > 0 ? fA(s.left + S + uA, s.top + v + X, Math.max(0, r - (S + uA)), Math.max(0, n - (v + X)), tA.TOP_LEFT) : new R(s.left + S + uA, s.top + v + X), this.topRightContentBox = o > 0 || i > 0 ? fA(s.left + Math.min(Q, s.width + S + uA), s.top + v + X, Q > s.width + S + uA ? 0 : o - S + uA, i - (v + X), tA.TOP_RIGHT) : new R(s.left + s.width - (h + eA), s.top + v + X), this.bottomRightContentBox = a > 0 || c > 0 ? fA(s.left + Math.min(m, s.width - (S + uA)), s.top + Math.min(U, s.height + v + X), Math.max(0, a - (h + eA)), c - (x + bA), tA.BOTTOM_RIGHT) : new R(s.left + s.width - (h + eA), s.top + s.height - (x + bA)), this.bottomLeftContentBox = d > 0 || l > 0 ? fA(s.left + S + uA, s.top + _, Math.max(0, d - (S + uA)), l - (x + bA), tA.BOTTOM_LEFT) : new R(s.left + S + uA, s.top + s.height - (x + bA));
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
}, Kr = (e) => [e.topLeftBorderBox, e.topRightBorderBox, e.bottomRightBorderBox, e.bottomLeftBorderBox], o1 = (e) => [
  e.topLeftContentBox,
  e.topRightContentBox,
  e.bottomRightContentBox,
  e.bottomLeftContentBox
], Dr = (e) => [
  e.topLeftPaddingBox,
  e.topRightPaddingBox,
  e.bottomRightPaddingBox,
  e.bottomLeftPaddingBox
];
class tl {
  constructor(A, t, s) {
    this.offsetX = A, this.offsetY = t, this.matrix = s, this.type = 0, this.target = 6;
  }
}
class lr {
  constructor(A, t) {
    this.path = A, this.target = t, this.type = 1;
  }
}
class i1 {
  constructor(A) {
    this.opacity = A, this.type = 2, this.target = 6;
  }
}
const a1 = (e) => e.type === 0, Qd = (e) => e.type === 1, l1 = (e) => e.type === 2, sl = (e, A) => e.length === A.length ? e.some((t, s) => t === A[s]) : !1, c1 = (e, A, t, s, r) => e.map((n, o) => {
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
class Cd {
  constructor(A) {
    this.element = A, this.inlineLevel = [], this.nonInlineLevel = [], this.negativeZIndex = [], this.zeroOrAutoZIndexOrTransformedOrOpacity = [], this.positiveZIndex = [], this.nonPositionedFloats = [], this.nonPositionedInlineLevel = [];
  }
}
class bd {
  constructor(A, t) {
    if (this.container = A, this.parent = t, this.effects = [], this.curves = new n1(this.container), this.container.styles.opacity < 1 && this.effects.push(new i1(this.container.styles.opacity)), this.container.styles.rotate !== null) {
      const s = this.container.styles.transformOrigin, r = this.container.bounds.left + z(s[0], this.container.bounds.width), n = this.container.bounds.top + z(s[1], this.container.bounds.height), i = this.container.styles.rotate * Math.PI / 180, a = Math.cos(i), c = Math.sin(i), d = [a, c, -c, a, 0, 0];
      this.effects.push(new tl(r, n, d));
    }
    if (this.container.styles.transform !== null) {
      const s = this.container.styles.transformOrigin, r = this.container.bounds.left + z(s[0], this.container.bounds.width), n = this.container.bounds.top + z(s[1], this.container.bounds.height), o = this.container.styles.transform;
      this.effects.push(new tl(r, n, o));
    }
    if (this.container.styles.overflowX !== 0) {
      const s = Kr(this.curves), r = Dr(this.curves);
      sl(s, r) ? this.effects.push(new lr(
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
      const n = s.effects.filter((o) => !Qd(o));
      if (t || s.container.styles.position !== 0 || !s.parent) {
        if (t = [
          2,
          3
          /* POSITION.FIXED */
        ].indexOf(s.container.styles.position) === -1, s.container.styles.overflowX !== 0) {
          const o = Kr(s.curves), i = Dr(s.curves);
          sl(o, i) || r.unshift(new lr(
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
const Lo = (e, A, t, s) => {
  e.container.elements.forEach((r) => {
    const n = hA(
      r.flags,
      4
      /* FLAGS.CREATES_REAL_STACKING_CONTEXT */
    ), o = hA(
      r.flags,
      2
      /* FLAGS.CREATES_STACKING_CONTEXT */
    ), i = new bd(r, e);
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
      const c = n || r.styles.isPositioned() ? t : A, d = new Cd(i);
      if (r.styles.isPositioned() || r.styles.opacity < 1 || r.styles.isTransformed()) {
        const l = r.styles.zIndex.order;
        if (l < 0) {
          let f = 0;
          c.negativeZIndex.some((g, Q) => l > g.element.container.styles.zIndex.order ? (f = Q, !1) : f > 0), c.negativeZIndex.splice(f, 0, d);
        } else if (l > 0) {
          let f = 0;
          c.positiveZIndex.some((g, Q) => l >= g.element.container.styles.zIndex.order ? (f = Q + 1, !1) : f > 0), c.positiveZIndex.splice(f, 0, d);
        } else
          c.zeroOrAutoZIndexOrTransformedOrOpacity.push(d);
      } else
        r.styles.isFloating() ? c.nonPositionedFloats.push(d) : c.nonPositionedInlineLevel.push(d);
      Lo(i, d, n ? d : t, a);
    } else
      r.styles.isInlineLevel() ? A.inlineLevel.push(i) : A.nonInlineLevel.push(i), Lo(i, A, t, a);
    hA(
      r.flags,
      8
      /* FLAGS.IS_LIST_OWNER */
    ) && Ud(r, a);
  });
}, Ud = (e, A) => {
  let t = e instanceof vo ? e.start : 1;
  const s = e instanceof vo ? e.reversed : !1;
  for (let r = 0; r < A.length; r++) {
    const n = A[r];
    n.container instanceof ad && typeof n.container.value == "number" && n.container.value !== 0 && (t = n.container.value), n.listValue = Is(t, n.container.styles.listStyleType, !0), t += s ? -1 : 1;
  }
}, d1 = (e) => {
  const A = new bd(e, null), t = new Cd(A), s = [];
  return Lo(A, t, t, s), Ud(A.container, s), t;
}, rl = (e, A) => {
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
}, u1 = (e, A) => {
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
}, f1 = (e, A) => {
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
}, B1 = (e, A) => {
  switch (A) {
    case 0:
      return cr(e.topLeftBorderStroke, e.topRightBorderStroke);
    case 1:
      return cr(e.topRightBorderStroke, e.bottomRightBorderStroke);
    case 2:
      return cr(e.bottomRightBorderStroke, e.bottomLeftBorderStroke);
    case 3:
    default:
      return cr(e.bottomLeftBorderStroke, e.topLeftBorderStroke);
  }
}, cr = (e, A) => {
  const t = [];
  return jA(e) ? t.push(e.subdivide(0.5, !1)) : t.push(e), jA(A) ? t.push(A.subdivide(0.5, !0)) : t.push(A), t;
}, zA = (e, A, t, s) => {
  const r = [];
  return jA(e) ? r.push(e.subdivide(0.5, !1)) : r.push(e), jA(t) ? r.push(t.subdivide(0.5, !0)) : r.push(t), jA(s) ? r.push(s.subdivide(0.5, !0).reverse()) : r.push(s), jA(A) ? r.push(A.subdivide(0.5, !1).reverse()) : r.push(A), r;
}, Fd = (e) => {
  const A = e.bounds, t = e.styles;
  return A.add(t.borderLeftWidth, t.borderTopWidth, -(t.borderRightWidth + t.borderLeftWidth), -(t.borderTopWidth + t.borderBottomWidth));
}, bs = (e) => {
  const A = e.styles, t = e.bounds, s = z(A.paddingLeft, t.width), r = z(A.paddingRight, t.width), n = z(A.paddingTop, t.width), o = z(A.paddingBottom, t.width);
  return t.add(s + A.borderLeftWidth, n + A.borderTopWidth, -(A.borderRightWidth + A.borderLeftWidth + s + r), -(A.borderTopWidth + A.borderBottomWidth + n + o));
}, g1 = (e, A) => e === 0 ? A.bounds : e === 2 ? bs(A) : Fd(A), h1 = (e, A) => e === 0 ? A.bounds : e === 2 ? bs(A) : Fd(A), zn = (e, A, t) => {
  const s = g1(Et(e.styles.backgroundOrigin, A), e), r = h1(Et(e.styles.backgroundClip, A), e), n = p1(Et(e.styles.backgroundSize, A), t, s);
  let [o, i] = n;
  const a = ns(Et(e.styles.backgroundPosition, A), s.width - o, s.height - i), c = w1(Et(e.styles.backgroundRepeat, A), a, n, s, r), d = Math.round(s.left + a[0]), l = Math.round(s.top + a[1]);
  return o = Math.max(1, o), i = Math.max(1, i), [c, d, l, o, i];
}, mt = (e) => j(e) && e.value === kt.AUTO, dr = (e) => typeof e == "number", p1 = (e, [A, t, s], r) => {
  const [n, o] = e;
  if (!n)
    return [0, 0];
  if (dA(n) && o && dA(o))
    return [z(n, r.width), z(o, r.height)];
  const i = dr(s);
  if (j(n) && (n.value === kt.CONTAIN || n.value === kt.COVER))
    return dr(s) ? r.width / r.height < s != (n.value === kt.COVER) ? [r.width, r.width / s] : [r.height * s, r.height] : [r.width, r.height];
  const a = dr(A), c = dr(t), d = a || c;
  if (mt(n) && (!o || mt(o))) {
    if (a && c)
      return [A, t];
    if (!i && !d)
      return [r.width, r.height];
    if (d && i) {
      const U = a ? A : t * s, m = c ? t : A / s;
      return [U, m];
    }
    const g = a ? A : r.width, Q = c ? t : r.height;
    return [g, Q];
  }
  if (i) {
    let g = 0, Q = 0;
    return dA(n) ? g = z(n, r.width) : dA(o) && (Q = z(o, r.height)), mt(n) ? g = Q * s : (!o || mt(o)) && (Q = g / s), [g, Q];
  }
  let l = null, f = null;
  if (dA(n) ? l = z(n, r.width) : o && dA(o) && (f = z(o, r.height)), l !== null && (!o || mt(o)) && (f = a && c ? l / A * t : r.height), f !== null && mt(n) && (l = a && c ? f / t * A : r.width), l !== null && f !== null)
    return [l, f];
  throw new Error("Unable to calculate background-size for element");
}, Et = (e, A) => {
  const t = e[A];
  return typeof t > "u" ? e[0] : t;
}, w1 = (e, [A, t], [s, r], n, o) => {
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
}, Q1 = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", nl = "Hidden Text";
class C1 {
  constructor(A) {
    this._data = {}, this._document = A;
  }
  parseMetrics(A, t) {
    const s = this._document.createElement("div"), r = this._document.createElement("img"), n = this._document.createElement("span"), o = this._document.body;
    s.style.visibility = "hidden", s.style.fontFamily = A, s.style.fontSize = t, s.style.margin = "0", s.style.padding = "0", s.style.whiteSpace = "nowrap", o.appendChild(s), r.src = Q1, r.width = 1, r.height = 1, r.style.margin = "0", r.style.padding = "0", r.style.verticalAlign = "baseline", n.style.fontFamily = A, n.style.fontSize = t, n.style.margin = "0", n.style.padding = "0", n.appendChild(this._document.createTextNode(nl)), s.appendChild(n), s.appendChild(r);
    const i = r.offsetTop - n.offsetTop + 2;
    s.removeChild(n), s.appendChild(this._document.createTextNode(nl)), s.style.lineHeight = "normal", r.style.verticalAlign = "super";
    const a = r.offsetTop - s.offsetTop + 2;
    return o.removeChild(s), { baseline: i, middle: a };
  }
  getMetrics(A, t) {
    const s = `${A} ${t}`;
    return typeof this._data[s] > "u" && (this._data[s] = this.parseMetrics(A, t)), this._data[s];
  }
}
class md {
  constructor(A, t) {
    this.context = A, this.options = t;
  }
}
const b1 = 1e4;
class ii extends md {
  constructor(A, t) {
    super(A, t), this._activeEffects = [], this.canvas = t.canvas ? t.canvas : document.createElement("canvas"), this.ctx = this.canvas.getContext("2d"), t.canvas || (this.canvas.width = Math.floor(t.width * t.scale), this.canvas.height = Math.floor(t.height * t.scale), this.canvas.style.width = `${t.width}px`, this.canvas.style.height = `${t.height}px`), this.fontMetrics = new C1(document), this.ctx.scale(this.options.scale, this.options.scale), this.ctx.translate(-t.x, -t.y), this.ctx.textBaseline = "bottom", this._activeEffects = [], this.context.logger.debug(`Canvas renderer initialized (${t.width}x${t.height}) with scale ${t.scale}`);
  }
  applyEffects(A) {
    for (; this._activeEffects.length; )
      this.popEffect();
    A.forEach((t) => this.applyEffect(t));
  }
  applyEffect(A) {
    this.ctx.save(), l1(A) && (this.ctx.globalAlpha = A.opacity), a1(A) && (this.ctx.translate(A.offsetX, A.offsetY), this.ctx.transform(A.matrix[0], A.matrix[1], A.matrix[2], A.matrix[3], A.matrix[4], A.matrix[5]), this.ctx.translate(-A.offsetX, -A.offsetY)), Qd(A) && (this.path(A.path), this.ctx.clip()), this._activeEffects.push(A);
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
          const d = Math.min(c + a / 2, A + s);
          if (this.ctx.quadraticCurveTo(c + a / 4, t + r / 2 - i, d, t + r / 2), c = d, c < A + s) {
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
      const o = ue(A);
      let i = n, a = [];
      for (const c of o) {
        const d = this.ctx.measureText(c).width + s;
        if (i + d > t)
          break;
        a.push(c), i += d;
      }
      return a.join("") + r;
    }
  }
  createFontStyle(A) {
    const t = A.fontVariant.filter((n) => n === "normal" || n === "small-caps").join(""), s = v1(A.fontFamily).join(", "), r = Ce(A.fontSize) ? `${A.fontSize.number}${A.fontSize.unit}` : `${A.fontSize.number}px`;
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
      let f = [], g = A.textBounds[0].bounds.top;
      A.textBounds.forEach((U) => {
        Math.abs(U.bounds.top - g) >= o * 0.5 ? (f.length > 0 && l.push(f), f = [U], g = U.bounds.top) : f.push(U);
      }), f.length > 0 && l.push(f);
      const Q = t.webkitLineClamp;
      if (l.length > Q) {
        for (let m = 0; m < Q - 1; m++)
          l[m].forEach((_) => {
            this.renderTextBoundWithPaintOrder(_, t, n);
          });
        const U = l[Q - 1];
        if (U && U.length > 0 && s) {
          const m = U.map((x) => x.text).join(""), _ = U[0], v = s.width - (_.bounds.left - s.left), h = this.truncateTextWithEllipsis(m, v, t.letterSpacing);
          n.forEach((x) => {
            switch (x) {
              case 0:
                this.ctx.fillStyle = lA(t.color), t.letterSpacing === 0 ? this.ctx.fillText(h, _.bounds.left, _.bounds.top + t.fontSize.number) : ue(h).reduce((X, eA) => (this.ctx.fillText(eA, X, _.bounds.top + t.fontSize.number), X + this.ctx.measureText(eA).width + t.letterSpacing), _.bounds.left);
                break;
              case 1:
                t.webkitTextStrokeWidth && h.trim().length && (this.ctx.strokeStyle = lA(t.webkitTextStrokeColor), this.ctx.lineWidth = t.webkitTextStrokeWidth, this.ctx.lineJoin = window.chrome ? "miter" : "round", t.letterSpacing === 0 ? this.ctx.strokeText(h, _.bounds.left, _.bounds.top + t.fontSize.number) : ue(h).reduce((X, eA) => (this.ctx.strokeText(eA, X, _.bounds.top + t.fontSize.number), X + this.ctx.measureText(eA).width + t.letterSpacing), _.bounds.left));
                break;
            }
          });
        }
        return;
      }
    }
    const a = t.textOverflow === 1 && s && t.overflowX === 1 && A.textBounds.length > 0;
    let c = !1, d = "";
    if (a) {
      const l = A.textBounds[0].bounds.top;
      if (A.textBounds.every((g) => Math.abs(g.bounds.top - l) < o * 0.5)) {
        let g = A.textBounds.map((m) => m.text).join("");
        g = g.replace(/\s+/g, " ").trim();
        const Q = this.ctx.measureText(g).width, U = s.width;
        Q > U && (c = !0, d = this.truncateTextWithEllipsis(g, U, t.letterSpacing));
      }
    }
    if (c) {
      const l = A.textBounds[0];
      n.forEach((f) => {
        switch (f) {
          case 0:
            this.ctx.fillStyle = lA(t.color), t.letterSpacing === 0 ? this.ctx.fillText(d, l.bounds.left, l.bounds.top + t.fontSize.number) : ue(d).reduce((U, m) => (this.ctx.fillText(m, U, l.bounds.top + t.fontSize.number), U + this.ctx.measureText(m).width + t.letterSpacing), l.bounds.left);
            const g = t.textShadow;
            g.length && d.trim().length && (g.slice(0).reverse().forEach((Q) => {
              this.ctx.shadowColor = lA(Q.color), this.ctx.shadowOffsetX = Q.offsetX.number * this.options.scale, this.ctx.shadowOffsetY = Q.offsetY.number * this.options.scale, this.ctx.shadowBlur = Q.blur.number, t.letterSpacing === 0 ? this.ctx.fillText(d, l.bounds.left, l.bounds.top + t.fontSize.number) : ue(d).reduce((m, _) => (this.ctx.fillText(_, m, l.bounds.top + t.fontSize.number), m + this.ctx.measureText(_).width + t.letterSpacing), l.bounds.left);
            }), this.ctx.shadowColor = "", this.ctx.shadowOffsetX = 0, this.ctx.shadowOffsetY = 0, this.ctx.shadowBlur = 0);
            break;
          case 1:
            t.webkitTextStrokeWidth && d.trim().length && (this.ctx.strokeStyle = lA(t.webkitTextStrokeColor), this.ctx.lineWidth = t.webkitTextStrokeWidth, this.ctx.lineJoin = window.chrome ? "miter" : "round", t.letterSpacing === 0 ? this.ctx.strokeText(d, l.bounds.left, l.bounds.top + t.fontSize.number) : ue(d).reduce((U, m) => (this.ctx.strokeText(m, U, l.bounds.top + t.fontSize.number), U + this.ctx.measureText(m).width + t.letterSpacing), l.bounds.left));
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
            const g = t.textShadow;
            g.length && l.text.trim().length && (g.slice(0).reverse().forEach((Q) => {
              this.ctx.shadowColor = lA(Q.color), this.ctx.shadowOffsetX = Q.offsetX.number * this.options.scale, this.ctx.shadowOffsetY = Q.offsetY.number * this.options.scale, this.ctx.shadowBlur = Q.blur.number, this.renderTextWithLetterSpacing(l, t.letterSpacing, t.fontSize.number);
            }), this.ctx.shadowColor = "", this.ctx.shadowOffsetX = 0, this.ctx.shadowOffsetY = 0, this.ctx.shadowBlur = 0), t.textDecorationLine.length && this.renderTextDecoration(l.bounds, t);
            break;
          case 1:
            if (t.webkitTextStrokeWidth && l.text.trim().length) {
              this.ctx.strokeStyle = lA(t.webkitTextStrokeColor), this.ctx.lineWidth = t.webkitTextStrokeWidth, this.ctx.lineJoin = window.chrome ? "miter" : "round";
              const Q = t.fontSize.number;
              t.letterSpacing === 0 ? this.ctx.strokeText(l.text, l.bounds.left, l.bounds.top + Q) : ue(l.text).reduce((m, _) => (this.ctx.strokeText(_, m, l.bounds.top + Q), m + this.ctx.measureText(_).width), l.bounds.left);
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
      const o = bs(A), i = Dr(t);
      this.path(i), this.ctx.save(), this.ctx.clip();
      let a = 0, c = 0, d = r, l = n, f = o.left, g = o.top, Q = o.width, U = o.height;
      const { objectFit: m } = A.styles, _ = Q / U, v = d / l;
      if (m === 2)
        v > _ ? (U = Q / v, g += (o.height - U) / 2) : (Q = U * v, f += (o.width - Q) / 2);
      else if (m === 4)
        v > _ ? (d = l * _, a += (r - d) / 2) : (l = d / _, c += (n - l) / 2);
      else if (m === 8)
        d > Q ? (a += (d - Q) / 2, d = Q) : (f += (Q - d) / 2, Q = d), l > U ? (c += (l - U) / 2, l = U) : (g += (U - l) / 2, U = l);
      else if (m === 16) {
        const h = v > _ ? Q : U * v, x = d > Q ? d : Q;
        h < x ? v > _ ? (U = Q / v, g += (o.height - U) / 2) : (Q = U * v, f += (o.width - Q) / 2) : (d > Q ? (a += (d - Q) / 2, d = Q) : (f += (Q - d) / 2, Q = d), l > U ? (c += (l - U) / 2, l = U) : (g += (U - l) / 2, U = l));
      }
      this.ctx.drawImage(s, a, c, d, l, f, g, Q, U), this.ctx.restore();
    }
  }
  async renderNodeContent(A) {
    this.applyEffects(A.getEffects(
      4
      /* EffectTarget.CONTENT */
    ));
    const t = A.container, s = A.curves, r = t.styles, n = bs(t);
    for (const o of t.textNodes)
      await this.renderTextNode(o, r, n);
    if (t instanceof nd)
      try {
        const o = await this.context.cache.match(t.src);
        this.renderReplacedElement(t, s, o);
      } catch {
        this.context.logger.error(`Error loading image ${t.src}`);
      }
    if (t instanceof od && this.renderReplacedElement(t, s, t.canvas), t instanceof id)
      try {
        const o = await this.context.cache.match(t.svg);
        this.renderReplacedElement(t, s, o);
      } catch {
        this.context.logger.error(`Error loading svg ${t.svg.substring(0, 255)}`);
      }
    if (t instanceof dd && t.tree) {
      const i = await new ii(this.context, {
        scale: this.options.scale,
        backgroundColor: t.backgroundColor,
        x: 0,
        y: 0,
        width: t.width,
        height: t.height
      }).render(t.tree);
      t.width && t.height && this.ctx.drawImage(i, 0, 0, t.width, t.height, t.bounds.left, t.bounds.top, t.bounds.width, t.bounds.height);
    }
    if (t instanceof Qs) {
      const o = Math.min(t.bounds.width, t.bounds.height);
      t.type === Lr ? t.checked && (this.ctx.save(), this.path([
        new R(t.bounds.left + o * 0.39363, t.bounds.top + o * 0.79),
        new R(t.bounds.left + o * 0.16, t.bounds.top + o * 0.5549),
        new R(t.bounds.left + o * 0.27347, t.bounds.top + o * 0.44071),
        new R(t.bounds.left + o * 0.39694, t.bounds.top + o * 0.5649),
        new R(t.bounds.left + o * 0.72983, t.bounds.top + o * 0.23),
        new R(t.bounds.left + o * 0.84, t.bounds.top + o * 0.34085),
        new R(t.bounds.left + o * 0.39363, t.bounds.top + o * 0.79)
      ]), this.ctx.fillStyle = lA(Ga), this.ctx.fill(), this.ctx.restore()) : t.type === Sr && t.checked && (this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(t.bounds.left + o / 2, t.bounds.top + o / 2, o / 4, 0, Math.PI * 2, !0), this.ctx.fillStyle = lA(Ga), this.ctx.fill(), this.ctx.restore());
    }
    if (U1(t) && t.value.length) {
      const [o, i, a] = this.createFontStyle(r), { baseline: c } = this.fontMetrics.getMetrics(i, a);
      this.ctx.font = o;
      const d = t instanceof Qs && t.isPlaceholder;
      this.ctx.fillStyle = lA(d ? Em : r.color), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = m1(t.styles.textAlign);
      const l = bs(t);
      let f = 0;
      switch (t.styles.textAlign) {
        case 1:
          f += l.width / 2;
          break;
        case 2:
          f += l.width;
          break;
      }
      let g = 0;
      if (t instanceof Qs) {
        const U = z(r.fontSize, 0);
        g = (l.height - U) / 2;
      }
      const Q = l.add(f, g, 0, 0);
      this.ctx.save(), this.path([
        new R(l.left, l.top),
        new R(l.left + l.width, l.top),
        new R(l.left + l.width, l.top + l.height),
        new R(l.left, l.top + l.height)
      ]), this.ctx.clip(), this.renderTextWithLetterSpacing(new ws(t.value, Q), r.letterSpacing, c), this.ctx.restore(), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = "left";
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
        const i = new kA(t.bounds.left, t.bounds.top + z(t.styles.paddingTop, t.bounds.width), t.bounds.width, ya(r.lineHeight, r.fontSize.number) / 2 + 1);
        this.renderTextWithLetterSpacing(new ws(A.listValue, i), r.letterSpacing, ya(r.lineHeight, r.fontSize.number) / 2 + 2), this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left";
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
          const o = isNaN(r.width) || r.width === 0 ? 1 : r.width, i = isNaN(r.height) || r.height === 0 ? 1 : r.height, [a, c, d, l, f] = zn(A, t, [
            o,
            i,
            o / i
          ]), g = this.ctx.createPattern(this.resizeImage(r, l, f), "repeat");
          this.renderRepeat(a, g, c, d);
        }
      } else if ($b(s)) {
        const [r, n, o, i, a] = zn(A, t, [null, null, null]), [c, d, l, f, g] = Wb(s.angle, i, a), Q = document.createElement("canvas");
        Q.width = i, Q.height = a;
        const U = Q.getContext("2d"), m = U.createLinearGradient(d, f, l, g);
        if (xa(s.stops, c || 1).forEach((_) => m.addColorStop(_.stop, lA(_.color))), U.fillStyle = m, U.fillRect(0, 0, i, a), i > 0 && a > 0) {
          const _ = this.ctx.createPattern(Q, "repeat");
          this.renderRepeat(r, _, n, o);
        }
      } else if (qb(s)) {
        const [r, n, o, i, a] = zn(A, t, [
          null,
          null,
          null
        ]), c = s.position.length === 0 ? [ei] : s.position, d = z(c[0], i), l = z(c[c.length - 1], a);
        let [f, g] = Yb(s, d, l, i, a);
        if ((f === 0 || g === 0) && (f = Math.max(f, 0.01), g = Math.max(g, 0.01)), f > 0 && g > 0) {
          const Q = this.ctx.createRadialGradient(n + d, o + l, 0, n + d, o + l, f);
          if (xa(s.stops, f * 2).forEach((U) => Q.addColorStop(U.stop, lA(U.color))), this.path(r), this.ctx.fillStyle = Q, f !== g) {
            const U = A.bounds.left + 0.5 * A.bounds.width, m = A.bounds.top + 0.5 * A.bounds.height, _ = g / f, v = 1 / _;
            this.ctx.save(), this.ctx.translate(U, m), this.ctx.transform(1, 0, 0, _, 0, 0), this.ctx.translate(-U, -m), this.ctx.fillRect(n, v * (o - m) + m, i, a * v), this.ctx.restore();
          } else
            this.ctx.fill();
        }
      }
      t--;
    }
  }
  async renderSolidBorder(A, t, s) {
    this.path(rl(s, t)), this.ctx.fillStyle = lA(A), this.ctx.fill();
  }
  async renderDoubleBorder(A, t, s, r) {
    if (t < 3) {
      await this.renderSolidBorder(A, s, r);
      return;
    }
    const n = u1(r, s);
    this.path(n), this.ctx.fillStyle = lA(A), this.ctx.fill();
    const o = f1(r, s);
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
    ], n = F1(Et(t.backgroundClip, 0), A.curves);
    (s || t.boxShadow.length) && (this.ctx.save(), this.path(n), this.ctx.clip(), Ye(t.backgroundColor) || (this.ctx.fillStyle = lA(t.backgroundColor), this.ctx.fill()), await this.renderBackgroundImage(A.container), this.ctx.restore(), t.boxShadow.slice(0).reverse().forEach((i) => {
      this.ctx.save();
      const a = Kr(A.curves), c = i.inset ? 0 : b1, d = c1(a, -c + (i.inset ? 1 : -1) * i.spread.number, (i.inset ? 1 : -1) * i.spread.number, i.spread.number * (i.inset ? -2 : 2), i.spread.number * (i.inset ? -2 : 2));
      i.inset ? (this.path(a), this.ctx.clip(), this.mask(d)) : (this.mask(a), this.ctx.clip(), this.path(d)), this.ctx.shadowOffsetX = i.offsetX.number + c, this.ctx.shadowOffsetY = i.offsetY.number, this.ctx.shadowColor = lA(i.color), this.ctx.shadowBlur = i.blur.number, this.ctx.fillStyle = i.inset ? lA(i.color) : "rgba(0,0,0,1)", this.ctx.fill(), this.ctx.restore();
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
    const o = B1(r, s), i = rl(r, s);
    n === 2 && (this.path(i), this.ctx.clip());
    let a, c, d, l;
    jA(i[0]) ? (a = i[0].start.x, c = i[0].start.y) : (a = i[0].x, c = i[0].y), jA(i[1]) ? (d = i[1].end.x, l = i[1].end.y) : (d = i[1].x, l = i[1].y);
    let f;
    s === 0 || s === 2 ? f = Math.abs(a - d) : f = Math.abs(c - l), this.ctx.beginPath(), n === 3 ? this.formatPath(o) : this.formatPath(i.slice(0, 2));
    let g = t < 3 ? t * 3 : t * 2, Q = t < 3 ? t * 2 : t;
    n === 3 && (g = t, Q = t);
    let U = !0;
    if (f <= g * 2)
      U = !1;
    else if (f <= g * 2 + Q) {
      const m = f / (2 * g + Q);
      g *= m, Q *= m;
    } else {
      const m = Math.floor((f + Q) / (g + Q)), _ = (f - m * g) / (m - 1), v = (f - (m + 1) * g) / m;
      Q = v <= 0 || Math.abs(Q - _) < Math.abs(Q - v) ? _ : v;
    }
    if (U && (n === 3 ? this.ctx.setLineDash([0, g + Q]) : this.ctx.setLineDash([g, Q])), n === 3 ? (this.ctx.lineCap = "round", this.ctx.lineWidth = t) : this.ctx.lineWidth = t * 2 + 1.1, this.ctx.strokeStyle = lA(A), this.ctx.stroke(), this.ctx.setLineDash([]), n === 2) {
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
    const t = d1(A);
    return await this.renderStack(t), this.applyEffects([]), this.canvas;
  }
}
const U1 = (e) => e instanceof cd || e instanceof ld ? !0 : e instanceof Qs && e.type !== Sr && e.type !== Lr, F1 = (e, A) => {
  switch (e) {
    case 0:
      return Kr(A);
    case 2:
      return o1(A);
    case 1:
    default:
      return Dr(A);
  }
}, m1 = (e) => {
  switch (e) {
    case 1:
      return "center";
    case 2:
      return "right";
    case 0:
    default:
      return "left";
  }
}, x1 = ["-apple-system", "system-ui"], v1 = (e) => /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? e.filter((A) => x1.indexOf(A) === -1) : e;
class y1 extends md {
  constructor(A, t) {
    super(A, t), this.canvas = t.canvas ? t.canvas : document.createElement("canvas"), this.ctx = this.canvas.getContext("2d"), this.options = t, this.canvas.width = Math.floor(t.width * t.scale), this.canvas.height = Math.floor(t.height * t.scale), this.canvas.style.width = `${t.width}px`, this.canvas.style.height = `${t.height}px`, this.ctx.scale(this.options.scale, this.options.scale), this.ctx.translate(-t.x, -t.y), this.context.logger.debug(`EXPERIMENTAL ForeignObject renderer initialized (${t.width}x${t.height} at ${t.x},${t.y}) with scale ${t.scale}`);
  }
  async render(A) {
    const t = xo(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, A), s = await E1(t);
    return this.options.backgroundColor && (this.ctx.fillStyle = lA(this.options.backgroundColor), this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)), this.ctx.drawImage(s, -this.options.x * this.options.scale, -this.options.y * this.options.scale), this.canvas;
  }
}
const E1 = (e) => new Promise((A, t) => {
  const s = new Image();
  s.onload = () => {
    A(s);
  }, s.onerror = t, s.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(new XMLSerializer().serializeToString(e))}`;
});
class xd {
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
xd.instances = {};
class un {
  constructor(A, t) {
    this.windowBounds = t, this.instanceName = `#${un.instanceCount++}`, this.logger = new xd({ id: this.instanceName, enabled: A.logging }), this.cache = A.cache ?? new $m(this, A);
  }
}
un.instanceCount = 1;
let vd;
const H1 = (e) => {
  vd = e;
}, yd = (e, A = {}) => I1(e, A);
yd.setCspNonce = H1;
typeof window < "u" && Ae.setContext(window);
const I1 = async (e, A) => {
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
  }, i = new kA(o.scrollX, o.scrollY, o.windowWidth, o.windowHeight), a = new un(n, i), c = A.foreignObjectRendering ?? !1, d = {
    allowTaint: A.allowTaint ?? !1,
    onclone: A.onclone,
    ignoreElements: A.ignoreElements,
    iframeContainer: A.iframeContainer,
    inlineImages: c,
    copyStyles: c,
    cspNonce: vd
  };
  a.logger.debug(`Starting document clone with size ${i.width}x${i.height} scrolled to ${-i.left},${-i.top}`);
  const l = new qa(a, e, d), f = l.clonedReferenceElement;
  if (!f)
    return Promise.reject("Unable to find element in cloned iframe");
  const g = await l.toIFrame(t, i), { width: Q, height: U, left: m, top: _ } = oi(f) || Tm(f) ? oQ(f.ownerDocument) : $r(a, f), v = _1(a, f, A.backgroundColor), h = {
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
    a.logger.debug("Document cloned, using foreign object rendering"), x = await new y1(a, h).render(f);
  else {
    a.logger.debug(`Document cloned, element located at ${m},${_} with size ${Q}x${U} using computed rendering`), a.logger.debug("Starting DOM parsing");
    const S = fd(a, f);
    v === S.styles.backgroundColor && (S.styles.backgroundColor = pe.TRANSPARENT), a.logger.debug(`Starting renderer for element at ${h.x},${h.y} with size ${h.width}x${h.height}`), x = await new ii(a, h).render(S);
  }
  return (A.removeContainer ?? !0) && (qa.destroy(g) || a.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")), a.logger.debug("Finished rendering"), x;
}, _1 = (e, A, t) => {
  const s = A.ownerDocument, r = s.documentElement ? St(e, getComputedStyle(s.documentElement).backgroundColor) : pe.TRANSPARENT, n = s.body ? St(e, getComputedStyle(s.body).backgroundColor) : pe.TRANSPARENT, o = typeof t == "string" ? St(e, t) : t === null ? pe.TRANSPARENT : 4294967295;
  return A === s.documentElement ? Ye(r) ? Ye(n) ? o : n : r : o;
};
async function L1(e = {}) {
  var d;
  const A = window.innerWidth, t = window.innerHeight;
  try {
    (d = e.beforeCapture) == null || d.call(e);
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
      yd(document.body, {
        useCORS: !0,
        allowTaint: !0,
        backgroundColor: null,
        scale: 1,
        width: A,
        height: t,
        ignoreElements: (l) => {
          var f;
          return n.has(l) || l.tagName && l.tagName.toLowerCase().startsWith("bugfix-") || (f = e.ignoreElement) != null && f.call(e, l) ? !0 : o.some((g) => {
            var Q;
            try {
              return (Q = l.matches) == null ? void 0 : Q.call(l, g);
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
      const g = new Image();
      g.onload = () => {
        c.drawImage(g, 0, 0, A, t), f();
      }, g.onerror = f, g.src = l;
    });
  return i && c.drawImage(i, 0, 0), a.toDataURL("image/png");
}
const xt = (e, A = 2) => String(e).padStart(A, "0");
function re(e = !1) {
  const A = /* @__PURE__ */ new Date(), t = `${xt(A.getHours())}:${xt(A.getMinutes())}:${xt(A.getSeconds())}.${xt(A.getMilliseconds(), 3)}`;
  return e ? `${A.getFullYear()}-${xt(A.getMonth() + 1)}-${xt(A.getDate())} ${t}` : t;
}
function Dt(e) {
  const A = [];
  return { push(t) {
    A.push(t), A.length > e && A.shift();
  }, get: () => [...A] };
}
const S1 = [/Failed to obtain terrain tile/, /Mesh buffer doesn't exist/];
function k1(e) {
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
function T1({ max: e = 200, silent: A = S1 } = {}) {
  const t = Dt(e);
  for (const s of ["log", "warn", "error"]) {
    const r = console[s].bind(console);
    console[s] = (...n) => {
      const o = n.map(k1).join(" ");
      A.some((i) => i.test(o)) || (t.push({ level: s, time: re(!0), message: o }), r(...n));
    };
  }
  return window.addEventListener("error", (s) => t.push({ level: "error", time: re(!0), message: `[GlobalError] ${s.message} (${s.filename}:${s.lineno})` })), window.addEventListener("unhandledrejection", (s) => {
    const r = s.reason instanceof Error ? s.reason.message : String(s.reason);
    t.push({ level: "error", time: re(!0), message: `[UnhandledRejection] ${r}` });
  }), t.get;
}
const K1 = /\/(auth|oauth|token|login|sign|password|temp-password|users\/find-password)/i, D1 = /"?(password|passwd|pwd|secret|token|authorization|refresh_token|access_token)"?\s*[:=]/i;
function So(e, A = 2e3) {
  if (e == null) return null;
  let t;
  try {
    t = typeof e == "string" ? e : JSON.stringify(e);
  } catch {
    return "[unserializable]";
  }
  return t.length > A ? t.slice(0, A) + "…[truncated]" : t;
}
function Re(e, A) {
  if (A == null) return A;
  const t = typeof A == "string" ? A : (() => {
    try {
      return JSON.stringify(A);
    } catch {
      return String(A);
    }
  })();
  return K1.test(e || "") || D1.test(t) ? "[masked]" : So(A);
}
function R1({ max: e = 50, axios: A = [], fetch: t = !1, xhr: s = !1, ignore: r = [] } = {}) {
  const n = Dt(e), o = Dt(30), i = { push(c) {
    n.push(c), c && (c.error || Number(c.status) >= 400) && o.push(c);
  }, get() {
    const c = n.get(), d = new Set(c);
    return [...o.get().filter((f) => !d.has(f)), ...c].sort((f, g) => String(f.time).localeCompare(String(g.time)));
  } }, a = (c) => r.some((d) => d instanceof RegExp ? d.test(c) : String(c).includes(d));
  for (const c of A) {
    const d = c != null && c.interceptors ? c : c == null ? void 0 : c.instance, l = (c == null ? void 0 : c.label) || "axios";
    d != null && d.interceptors && (d.interceptors.request.use((f) => (f._bk = { t0: Date.now(), time: re(!0) }, f), (f) => Promise.reject(f)), d.interceptors.response.use((f) => {
      var Q;
      const g = f.config._bk || {};
      return a(f.config.url) || i.push({ server: l, time: g.time, duration: g.t0 ? Date.now() - g.t0 : null, method: (Q = f.config.method) == null ? void 0 : Q.toUpperCase(), url: f.config.url, params: So(f.config.params), requestBody: Re(f.config.url, f.config.data), status: f.status, responseBody: Re(f.config.url, f.data), error: null }), f;
    }, (f) => {
      var Q, U, m, _, v, h, x, S, X, eA, bA;
      const g = ((Q = f.config) == null ? void 0 : Q._bk) || {};
      return a((U = f.config) == null ? void 0 : U.url) || i.push({ server: l, time: g.time, duration: g.t0 ? Date.now() - g.t0 : null, method: (_ = (m = f.config) == null ? void 0 : m.method) == null ? void 0 : _.toUpperCase(), url: (v = f.config) == null ? void 0 : v.url, params: So((h = f.config) == null ? void 0 : h.params), requestBody: Re((x = f.config) == null ? void 0 : x.url, (S = f.config) == null ? void 0 : S.data), status: ((X = f.response) == null ? void 0 : X.status) ?? "ERR", responseBody: Re((eA = f.config) == null ? void 0 : eA.url, (bA = f.response) == null ? void 0 : bA.data), error: f.message }), Promise.reject(f);
    }));
  }
  if (t && window.fetch) {
    const c = window.fetch.bind(window);
    window.fetch = async (d, l = {}) => {
      const f = typeof d == "string" ? d : d == null ? void 0 : d.url, g = Date.now(), Q = re(!0), U = (l.method || typeof d != "string" && (d == null ? void 0 : d.method) || "GET").toUpperCase();
      try {
        const m = await c(d, l);
        return a(f) || i.push({ server: "fetch", time: Q, duration: Date.now() - g, method: U, url: f, params: null, requestBody: Re(f, l.body), status: m.status, responseBody: null, error: null }), m;
      } catch (m) {
        throw a(f) || i.push({ server: "fetch", time: Q, duration: Date.now() - g, method: U, url: f, params: null, requestBody: Re(f, l.body), status: "ERR", responseBody: null, error: m.message }), m;
      }
    };
  }
  if (s && window.XMLHttpRequest) {
    const c = XMLHttpRequest.prototype, d = c.open, l = c.send;
    c.open = function(f, g, ...Q) {
      return this._bk = { method: String(f).toUpperCase(), url: g }, d.call(this, f, g, ...Q);
    }, c.send = function(f) {
      const g = this._bk || {}, Q = Date.now(), U = re(!0);
      return this.addEventListener("loadend", () => {
        a(g.url) || i.push({ server: "xhr", time: U, duration: Date.now() - Q, method: g.method, url: g.url, params: null, requestBody: Re(g.url, f), status: this.status || "ERR", responseBody: this.responseType === "" || this.responseType === "text" ? Re(g.url, this.responseText) : null, error: this.status ? null : "network error" });
      }), l.call(this, f);
    };
  }
  return i.get;
}
function O1(e) {
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
function M1(e, { max: A = 100 } = {}) {
  const t = Dt(A);
  return e.subscribe((s) => t.push({ time: re(), type: s.type, payload: O1(s.payload) })), t.get;
}
function N1(e, { max: A = 20 } = {}) {
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
        const a = o.apply(this, i);
        return r(), a;
      };
    }
    window.addEventListener("popstate", r), window.addEventListener("hashchange", r);
  }
  return t.get;
}
function P1(e, { max: A = 80, skip: t = [] } = {}) {
  const s = Dt(A), r = new Set(t), n = e.emit.bind(e);
  return e.emit = (o, i) => (r.has(o) || s.push({ time: re(), type: o }), n(o, i)), s.get;
}
function W1() {
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
function Y1(e) {
  return {
    subscribe: (A) => e.subscribe((t, s) => {
      const r = Object.keys(t).filter((n) => t[n] !== (s == null ? void 0 : s[n]));
      A({ type: `set(${r.join(",") || "?"})`, payload: Object.fromEntries(r.slice(0, 5).map((n) => [n, t[n]])) });
    })
  };
}
function V1(e) {
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
      const d = localStorage.getItem(c);
      s[c] = d && d.length > 200 ? d.slice(0, 200) + "…" : d;
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
const zt = () => [];
function G1(e = {}) {
  var d;
  const A = { project: "default", hotkeys: { report: "Shift+F9", viewer: "Shift+F10" }, interceptors: { console: !0 }, ...e }, t = A.interceptors || {}, s = t.console === !1 ? zt : T1(t.console === !0 ? {} : t.console), r = t.network ? R1(t.network) : zt, n = t.mutation ? M1(t.mutation) : zt, o = t.router ? N1(t.router === !0 ? null : t.router) : zt, i = t.events ? P1(t.events.emitter || t.events, t.events.emitter ? t.events : {}) : zt, a = ((d = A.projects) != null && d.length ? A.projects : [{ key: A.project, label: A.project }]).map((l) => typeof l == "string" ? { key: l, label: l } : l), c = {
    options: A,
    projects: a,
    project: a[0].key,
    api: Hn({ ...A, project: a[0].key, apiKey: a[0].apiKey ?? A.apiKey, adminKey: A.adminKey }),
    /** 프로젝트별 서버 정보(/info: canFix 등) - 한 번 받아 캐시. 서버가 없으면 전부 canFix=true 로 */
    _info: {},
    async projectInfo() {
      for (const l of a)
        if (!c._info[l.key])
          try {
            c._info[l.key] = await Hn({ ...A, project: l.key, apiKey: l.apiKey ?? A.apiKey, adminKey: A.adminKey }).info();
          } catch {
            c._info[l.key] = { canFix: !0, fixFrom: "app" };
          }
      return c._info;
    },
    /** 신고·조회 대상 프로젝트 바꾸기 (모달·뷰어의 선택 상자가 부른다) */
    setProject(l) {
      const f = a.find((g) => g.key === l);
      f && (c.project = f.key, c.api = Hn({ ...A, project: f.key, apiKey: f.apiKey ?? A.apiKey, adminKey: A.adminKey }));
    },
    getLogs: s,
    getNetwork: r,
    getMutations: n,
    getRoutes: o,
    getEvents: i,
    captureScreen: (l = {}) => {
      var f;
      return L1({ ...A.capture || {}, ...l, ignore: [...((f = A.capture) == null ? void 0 : f.ignore) || [], ...l.ignore || []] });
    },
    captureContext: () => V1(c),
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
      const l = document.createElement("bugfix-report-modal"), f = document.createElement("bugfix-viewer");
      return l.kit = c, f.kit = c, document.body.append(l, f), c._els = { modal: l, viewer: f }, c;
    },
    openReport: () => {
      var l, f, g, Q;
      return ((f = (l = c._els.modal) == null ? void 0 : l.open) == null ? void 0 : f.call(l)) ?? ((Q = (g = c._open) == null ? void 0 : g.report) == null ? void 0 : Q.call(g));
    },
    openViewer: (l) => {
      var f, g, Q, U;
      return ((g = (f = c._els.viewer) == null ? void 0 : f.open) == null ? void 0 : g.call(f, l)) ?? ((U = (Q = c._open) == null ? void 0 : Q.viewer) == null ? void 0 : U.call(Q, l));
    },
    /** Vue 컴포넌트를 직접 쓰는 앱이 open 함수를 등록한다 */
    _open: {},
    register(l, f) {
      c._open[l] = f;
    }
  };
  if (A.hotkeys) {
    const l = (f, g) => {
      if (!g) return !1;
      const Q = g.split("+").map((m) => m.trim().toLowerCase()), U = Q.pop();
      return f.key.toLowerCase() === U && Q.includes("shift") === f.shiftKey && Q.includes("ctrl") === f.ctrlKey && Q.includes("alt") === f.altKey && Q.includes("meta") === f.metaKey;
    };
    window.addEventListener("keydown", (f) => {
      l(f, A.hotkeys.report) ? (f.preventDefault(), c.openReport()) : l(f, A.hotkeys.viewer) && (f.preventDefault(), c.openViewer());
    });
  }
  return c;
}
function X1() {
  customElements.get("bugfix-report-modal") || customElements.define("bugfix-report-modal", /* @__PURE__ */ Ji(tp)), customElements.get("bugfix-viewer") || customElements.define("bugfix-viewer", /* @__PURE__ */ Ji(nQ));
}
X1();
function j1(e = {}) {
  if (typeof window > "u") return null;
  if (window.bugfixKit) return window.bugfixKit;
  const A = () => window.__bugfix || {}, t = e.restBase ? String(e.restBase).replace(/\/+$/, "") : "", s = G1({
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
  j1 as autoMount,
  G1 as createBugfix,
  W1 as reduxMiddleware,
  Y1 as zustandSource
};
