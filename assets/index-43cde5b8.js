(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Ft(e){const n=Object.create(null);for(const t of e.split(","))n[t]=1;return t=>t in n}const U={},tn=[],me=()=>{},Vi=()=>!1,$n=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Nt=e=>e.startsWith("onUpdate:"),J=Object.assign,Ut=(e,n)=>{const t=e.indexOf(n);t>-1&&e.splice(t,1)},Yi=Object.prototype.hasOwnProperty,j=(e,n)=>Yi.call(e,n),x=Array.isArray,on=e=>xn(e)==="[object Map]",Zn=e=>xn(e)==="[object Set]",ro=e=>xn(e)==="[object Date]",I=e=>typeof e=="function",Y=e=>typeof e=="string",Pe=e=>typeof e=="symbol",q=e=>e!==null&&typeof e=="object",Bo=e=>(q(e)||I(e))&&I(e.then)&&I(e.catch),Ho=Object.prototype.toString,xn=e=>Ho.call(e),Qi=e=>xn(e).slice(8,-1),Oo=e=>xn(e)==="[object Object]",Bt=e=>Y(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,gn=Ft(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Xn=e=>{const n=Object.create(null);return t=>n[t]||(n[t]=e(t))},Ji=/-(\w)/g,Fe=Xn(e=>e.replace(Ji,(n,t)=>t?t.toUpperCase():"")),Ki=/\B([A-Z])/g,Ze=Xn(e=>e.replace(Ki,"-$1").toLowerCase()),qo=Xn(e=>e.charAt(0).toUpperCase()+e.slice(1)),ut=Xn(e=>e?`on${qo(e)}`:""),je=(e,n)=>!Object.is(e,n),Nn=(e,...n)=>{for(let t=0;t<e.length;t++)e[t](...n)},Go=(e,n,t,o=!1)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,writable:o,value:t})},On=e=>{const n=parseFloat(e);return isNaN(n)?e:n};let lo;const et=()=>lo||(lo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ht(e){if(x(e)){const n={};for(let t=0;t<e.length;t++){const o=e[t],i=Y(o)?ea(o):Ht(o);if(i)for(const a in i)n[a]=i[a]}return n}else if(Y(e)||q(e))return e}const $i=/;(?![^(]*\))/g,Zi=/:([^]+)/,Xi=/\/\*[^]*?\*\//g;function ea(e){const n={};return e.replace(Xi,"").split($i).forEach(t=>{if(t){const o=t.split(Zi);o.length>1&&(n[o[0].trim()]=o[1].trim())}}),n}function Ot(e){let n="";if(Y(e))n=e;else if(x(e))for(let t=0;t<e.length;t++){const o=Ot(e[t]);o&&(n+=o+" ")}else if(q(e))for(const t in e)e[t]&&(n+=t+" ");return n.trim()}const na="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ta=Ft(na);function zo(e){return!!e||e===""}function oa(e,n){if(e.length!==n.length)return!1;let t=!0;for(let o=0;t&&o<e.length;o++)t=nt(e[o],n[o]);return t}function nt(e,n){if(e===n)return!0;let t=ro(e),o=ro(n);if(t||o)return t&&o?e.getTime()===n.getTime():!1;if(t=Pe(e),o=Pe(n),t||o)return e===n;if(t=x(e),o=x(n),t||o)return t&&o?oa(e,n):!1;if(t=q(e),o=q(n),t||o){if(!t||!o)return!1;const i=Object.keys(e).length,a=Object.keys(n).length;if(i!==a)return!1;for(const s in e){const r=e.hasOwnProperty(s),c=n.hasOwnProperty(s);if(r&&!c||!r&&c||!nt(e[s],n[s]))return!1}}return String(e)===String(n)}function ia(e,n){return e.findIndex(t=>nt(t,n))}const Vo=e=>!!(e&&e.__v_isRef===!0),ze=e=>Y(e)?e:e==null?"":x(e)||q(e)&&(e.toString===Ho||!I(e.toString))?Vo(e)?ze(e.value):JSON.stringify(e,Yo,2):String(e),Yo=(e,n)=>Vo(n)?Yo(e,n.value):on(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((t,[o,i],a)=>(t[pt(o,a)+" =>"]=i,t),{})}:Zn(n)?{[`Set(${n.size})`]:[...n.values()].map(t=>pt(t))}:Pe(n)?pt(n):q(n)&&!x(n)&&!Oo(n)?String(n):n,pt=(e,n="")=>{var t;return Pe(e)?`Symbol(${(t=e.description)!=null?t:n})`:e};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ce;class aa{constructor(n=!1){this.detached=n,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=ce,!n&&ce&&(this.index=(ce.scopes||(ce.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let n,t;if(this.scopes)for(n=0,t=this.scopes.length;n<t;n++)this.scopes[n].pause();for(n=0,t=this.effects.length;n<t;n++)this.effects[n].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let n,t;if(this.scopes)for(n=0,t=this.scopes.length;n<t;n++)this.scopes[n].resume();for(n=0,t=this.effects.length;n<t;n++)this.effects[n].resume()}}run(n){if(this._active){const t=ce;try{return ce=this,n()}finally{ce=t}}}on(){ce=this}off(){ce=this.parent}stop(n){if(this._active){this._active=!1;let t,o;for(t=0,o=this.effects.length;t<o;t++)this.effects[t].stop();for(this.effects.length=0,t=0,o=this.cleanups.length;t<o;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,o=this.scopes.length;t<o;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!n){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function sa(){return ce}let O;const ft=new WeakSet;class Qo{constructor(n){this.fn=n,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ce&&ce.active&&ce.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ft.has(this)&&(ft.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ko(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,co(this),$o(this);const n=O,t=ge;O=this,ge=!0;try{return this.fn()}finally{Zo(this),O=n,ge=t,this.flags&=-3}}stop(){if(this.flags&1){for(let n=this.deps;n;n=n.nextDep)zt(n);this.deps=this.depsTail=void 0,co(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ft.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Tt(this)&&this.run()}get dirty(){return Tt(this)}}let Jo=0,yn,wn;function Ko(e,n=!1){if(e.flags|=8,n){e.next=wn,wn=e;return}e.next=yn,yn=e}function qt(){Jo++}function Gt(){if(--Jo>0)return;if(wn){let n=wn;for(wn=void 0;n;){const t=n.next;n.next=void 0,n.flags&=-9,n=t}}let e;for(;yn;){let n=yn;for(yn=void 0;n;){const t=n.next;if(n.next=void 0,n.flags&=-9,n.flags&1)try{n.trigger()}catch(o){e||(e=o)}n=t}}if(e)throw e}function $o(e){for(let n=e.deps;n;n=n.nextDep)n.version=-1,n.prevActiveLink=n.dep.activeLink,n.dep.activeLink=n}function Zo(e){let n,t=e.depsTail,o=t;for(;o;){const i=o.prevDep;o.version===-1?(o===t&&(t=i),zt(o),ra(o)):n=o,o.dep.activeLink=o.prevActiveLink,o.prevActiveLink=void 0,o=i}e.deps=n,e.depsTail=t}function Tt(e){for(let n=e.deps;n;n=n.nextDep)if(n.dep.version!==n.version||n.dep.computed&&(Xo(n.dep.computed)||n.dep.version!==n.version))return!0;return!!e._dirty}function Xo(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Rn))return;e.globalVersion=Rn;const n=e.dep;if(e.flags|=2,n.version>0&&!e.isSSR&&e.deps&&!Tt(e)){e.flags&=-3;return}const t=O,o=ge;O=e,ge=!0;try{$o(e);const i=e.fn(e._value);(n.version===0||je(i,e._value))&&(e._value=i,n.version++)}catch(i){throw n.version++,i}finally{O=t,ge=o,Zo(e),e.flags&=-3}}function zt(e,n=!1){const{dep:t,prevSub:o,nextSub:i}=e;if(o&&(o.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=o,e.nextSub=void 0),t.subs===e&&(t.subs=o,!o&&t.computed)){t.computed.flags&=-5;for(let a=t.computed.deps;a;a=a.nextDep)zt(a,!0)}!n&&!--t.sc&&t.map&&t.map.delete(t.key)}function ra(e){const{prevDep:n,nextDep:t}=e;n&&(n.nextDep=t,e.prevDep=void 0),t&&(t.prevDep=n,e.nextDep=void 0)}let ge=!0;const ei=[];function Ne(){ei.push(ge),ge=!1}function Ue(){const e=ei.pop();ge=e===void 0?!0:e}function co(e){const{cleanup:n}=e;if(e.cleanup=void 0,n){const t=O;O=void 0;try{n()}finally{O=t}}}let Rn=0;class la{constructor(n,t){this.sub=n,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Vt{constructor(n){this.computed=n,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(n){if(!O||!ge||O===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==O)t=this.activeLink=new la(O,this),O.deps?(t.prevDep=O.depsTail,O.depsTail.nextDep=t,O.depsTail=t):O.deps=O.depsTail=t,ni(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const o=t.nextDep;o.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=o),t.prevDep=O.depsTail,t.nextDep=void 0,O.depsTail.nextDep=t,O.depsTail=t,O.deps===t&&(O.deps=o)}return t}trigger(n){this.version++,Rn++,this.notify(n)}notify(n){qt();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Gt()}}}function ni(e){if(e.dep.sc++,e.sub.flags&4){const n=e.dep.computed;if(n&&!e.dep.subs){n.flags|=20;for(let o=n.deps;o;o=o.nextDep)ni(o)}const t=e.dep.subs;t!==e&&(e.prevSub=t,t&&(t.nextSub=e)),e.dep.subs=e}}const St=new WeakMap,Je=Symbol(""),xt=Symbol(""),An=Symbol("");function Z(e,n,t){if(ge&&O){let o=St.get(e);o||St.set(e,o=new Map);let i=o.get(t);i||(o.set(t,i=new Vt),i.map=o,i.key=t),i.track()}}function _e(e,n,t,o,i,a){const s=St.get(e);if(!s){Rn++;return}const r=c=>{c&&c.trigger()};if(qt(),n==="clear")s.forEach(r);else{const c=x(e),u=c&&Bt(t);if(c&&t==="length"){const h=Number(o);s.forEach((f,A)=>{(A==="length"||A===An||!Pe(A)&&A>=h)&&r(f)})}else switch((t!==void 0||s.has(void 0))&&r(s.get(t)),u&&r(s.get(An)),n){case"add":c?u&&r(s.get("length")):(r(s.get(Je)),on(e)&&r(s.get(xt)));break;case"delete":c||(r(s.get(Je)),on(e)&&r(s.get(xt)));break;case"set":on(e)&&r(s.get(Je));break}}Gt()}function en(e){const n=L(e);return n===e?n:(Z(n,"iterate",An),ue(e)?n:n.map(X))}function tt(e){return Z(e=L(e),"iterate",An),e}const ca={__proto__:null,[Symbol.iterator](){return mt(this,Symbol.iterator,X)},concat(...e){return en(this).concat(...e.map(n=>x(n)?en(n):n))},entries(){return mt(this,"entries",e=>(e[1]=X(e[1]),e))},every(e,n){return Se(this,"every",e,n,void 0,arguments)},filter(e,n){return Se(this,"filter",e,n,t=>t.map(X),arguments)},find(e,n){return Se(this,"find",e,n,X,arguments)},findIndex(e,n){return Se(this,"findIndex",e,n,void 0,arguments)},findLast(e,n){return Se(this,"findLast",e,n,X,arguments)},findLastIndex(e,n){return Se(this,"findLastIndex",e,n,void 0,arguments)},forEach(e,n){return Se(this,"forEach",e,n,void 0,arguments)},includes(...e){return gt(this,"includes",e)},indexOf(...e){return gt(this,"indexOf",e)},join(e){return en(this).join(e)},lastIndexOf(...e){return gt(this,"lastIndexOf",e)},map(e,n){return Se(this,"map",e,n,void 0,arguments)},pop(){return pn(this,"pop")},push(...e){return pn(this,"push",e)},reduce(e,...n){return ho(this,"reduce",e,n)},reduceRight(e,...n){return ho(this,"reduceRight",e,n)},shift(){return pn(this,"shift")},some(e,n){return Se(this,"some",e,n,void 0,arguments)},splice(...e){return pn(this,"splice",e)},toReversed(){return en(this).toReversed()},toSorted(e){return en(this).toSorted(e)},toSpliced(...e){return en(this).toSpliced(...e)},unshift(...e){return pn(this,"unshift",e)},values(){return mt(this,"values",X)}};function mt(e,n,t){const o=tt(e),i=o[n]();return o!==e&&!ue(e)&&(i._next=i.next,i.next=()=>{const a=i._next();return a.value&&(a.value=t(a.value)),a}),i}const da=Array.prototype;function Se(e,n,t,o,i,a){const s=tt(e),r=s!==e&&!ue(e),c=s[n];if(c!==da[n]){const f=c.apply(e,a);return r?X(f):f}let u=t;s!==e&&(r?u=function(f,A){return t.call(this,X(f),A,e)}:t.length>2&&(u=function(f,A){return t.call(this,f,A,e)}));const h=c.call(s,u,o);return r&&i?i(h):h}function ho(e,n,t,o){const i=tt(e);let a=t;return i!==e&&(ue(e)?t.length>3&&(a=function(s,r,c){return t.call(this,s,r,c,e)}):a=function(s,r,c){return t.call(this,s,X(r),c,e)}),i[n](a,...o)}function gt(e,n,t){const o=L(e);Z(o,"iterate",An);const i=o[n](...t);return(i===-1||i===!1)&&Kt(t[0])?(t[0]=L(t[0]),o[n](...t)):i}function pn(e,n,t=[]){Ne(),qt();const o=L(e)[n].apply(e,t);return Gt(),Ue(),o}const ha=Ft("__proto__,__v_isRef,__isVue"),ti=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Pe));function ua(e){Pe(e)||(e=String(e));const n=L(this);return Z(n,"has",e),n.hasOwnProperty(e)}class oi{constructor(n=!1,t=!1){this._isReadonly=n,this._isShallow=t}get(n,t,o){if(t==="__v_skip")return n.__v_skip;const i=this._isReadonly,a=this._isShallow;if(t==="__v_isReactive")return!i;if(t==="__v_isReadonly")return i;if(t==="__v_isShallow")return a;if(t==="__v_raw")return o===(i?a?Ra:ri:a?si:ai).get(n)||Object.getPrototypeOf(n)===Object.getPrototypeOf(o)?n:void 0;const s=x(n);if(!i){let c;if(s&&(c=ca[t]))return c;if(t==="hasOwnProperty")return ua}const r=Reflect.get(n,t,ee(n)?n:o);return(Pe(t)?ti.has(t):ha(t))||(i||Z(n,"get",t),a)?r:ee(r)?s&&Bt(t)?r:r.value:q(r)?i?li(r):Qt(r):r}}class ii extends oi{constructor(n=!1){super(!1,n)}set(n,t,o,i){let a=n[t];if(!this._isShallow){const c=Ke(a);if(!ue(o)&&!Ke(o)&&(a=L(a),o=L(o)),!x(n)&&ee(a)&&!ee(o))return c?!1:(a.value=o,!0)}const s=x(n)&&Bt(t)?Number(t)<n.length:j(n,t),r=Reflect.set(n,t,o,ee(n)?n:i);return n===L(i)&&(s?je(o,a)&&_e(n,"set",t,o):_e(n,"add",t,o)),r}deleteProperty(n,t){const o=j(n,t);n[t];const i=Reflect.deleteProperty(n,t);return i&&o&&_e(n,"delete",t,void 0),i}has(n,t){const o=Reflect.has(n,t);return(!Pe(t)||!ti.has(t))&&Z(n,"has",t),o}ownKeys(n){return Z(n,"iterate",x(n)?"length":Je),Reflect.ownKeys(n)}}class pa extends oi{constructor(n=!1){super(!0,n)}set(n,t){return!0}deleteProperty(n,t){return!0}}const fa=new ii,ma=new pa,ga=new ii(!0);const _t=e=>e,Ln=e=>Reflect.getPrototypeOf(e);function ya(e,n,t){return function(...o){const i=this.__v_raw,a=L(i),s=on(a),r=e==="entries"||e===Symbol.iterator&&s,c=e==="keys"&&s,u=i[e](...o),h=t?_t:n?Ct:X;return!n&&Z(a,"iterate",c?xt:Je),{next(){const{value:f,done:A}=u.next();return A?{value:f,done:A}:{value:r?[h(f[0]),h(f[1])]:h(f),done:A}},[Symbol.iterator](){return this}}}}function jn(e){return function(...n){return e==="delete"?!1:e==="clear"?void 0:this}}function wa(e,n){const t={get(i){const a=this.__v_raw,s=L(a),r=L(i);e||(je(i,r)&&Z(s,"get",i),Z(s,"get",r));const{has:c}=Ln(s),u=n?_t:e?Ct:X;if(c.call(s,i))return u(a.get(i));if(c.call(s,r))return u(a.get(r));a!==s&&a.get(i)},get size(){const i=this.__v_raw;return!e&&Z(L(i),"iterate",Je),Reflect.get(i,"size",i)},has(i){const a=this.__v_raw,s=L(a),r=L(i);return e||(je(i,r)&&Z(s,"has",i),Z(s,"has",r)),i===r?a.has(i):a.has(i)||a.has(r)},forEach(i,a){const s=this,r=s.__v_raw,c=L(r),u=n?_t:e?Ct:X;return!e&&Z(c,"iterate",Je),r.forEach((h,f)=>i.call(a,u(h),u(f),s))}};return J(t,e?{add:jn("add"),set:jn("set"),delete:jn("delete"),clear:jn("clear")}:{add(i){!n&&!ue(i)&&!Ke(i)&&(i=L(i));const a=L(this);return Ln(a).has.call(a,i)||(a.add(i),_e(a,"add",i,i)),this},set(i,a){!n&&!ue(a)&&!Ke(a)&&(a=L(a));const s=L(this),{has:r,get:c}=Ln(s);let u=r.call(s,i);u||(i=L(i),u=r.call(s,i));const h=c.call(s,i);return s.set(i,a),u?je(a,h)&&_e(s,"set",i,a):_e(s,"add",i,a),this},delete(i){const a=L(this),{has:s,get:r}=Ln(a);let c=s.call(a,i);c||(i=L(i),c=s.call(a,i)),r&&r.call(a,i);const u=a.delete(i);return c&&_e(a,"delete",i,void 0),u},clear(){const i=L(this),a=i.size!==0,s=i.clear();return a&&_e(i,"clear",void 0,void 0),s}}),["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=ya(i,e,n)}),t}function Yt(e,n){const t=wa(e,n);return(o,i,a)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?o:Reflect.get(j(t,i)&&i in o?t:o,i,a)}const ba={get:Yt(!1,!1)},va={get:Yt(!1,!0)},ka={get:Yt(!0,!1)};const ai=new WeakMap,si=new WeakMap,ri=new WeakMap,Ra=new WeakMap;function Aa(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Pa(e){return e.__v_skip||!Object.isExtensible(e)?0:Aa(Qi(e))}function Qt(e){return Ke(e)?e:Jt(e,!1,fa,ba,ai)}function Ta(e){return Jt(e,!1,ga,va,si)}function li(e){return Jt(e,!0,ma,ka,ri)}function Jt(e,n,t,o,i){if(!q(e)||e.__v_raw&&!(n&&e.__v_isReactive))return e;const a=i.get(e);if(a)return a;const s=Pa(e);if(s===0)return e;const r=new Proxy(e,s===2?o:t);return i.set(e,r),r}function an(e){return Ke(e)?an(e.__v_raw):!!(e&&e.__v_isReactive)}function Ke(e){return!!(e&&e.__v_isReadonly)}function ue(e){return!!(e&&e.__v_isShallow)}function Kt(e){return e?!!e.__v_raw:!1}function L(e){const n=e&&e.__v_raw;return n?L(n):e}function Sa(e){return!j(e,"__v_skip")&&Object.isExtensible(e)&&Go(e,"__v_skip",!0),e}const X=e=>q(e)?Qt(e):e,Ct=e=>q(e)?li(e):e;function ee(e){return e?e.__v_isRef===!0:!1}function yt(e){return xa(e,!1)}function xa(e,n){return ee(e)?e:new _a(e,n)}class _a{constructor(n,t){this.dep=new Vt,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?n:L(n),this._value=t?n:X(n),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(n){const t=this._rawValue,o=this.__v_isShallow||ue(n)||Ke(n);n=o?n:L(n),je(n,t)&&(this._rawValue=n,this._value=o?n:X(n),this.dep.trigger())}}function Ca(e){return ee(e)?e.value:e}const Ia={get:(e,n,t)=>n==="__v_raw"?e:Ca(Reflect.get(e,n,t)),set:(e,n,t,o)=>{const i=e[n];return ee(i)&&!ee(t)?(i.value=t,!0):Reflect.set(e,n,t,o)}};function ci(e){return an(e)?e:new Proxy(e,Ia)}class Da{constructor(n,t,o){this.fn=n,this.setter=t,this._value=void 0,this.dep=new Vt(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Rn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=o}notify(){if(this.flags|=16,!(this.flags&8)&&O!==this)return Ko(this,!0),!0}get value(){const n=this.dep.track();return Xo(this),n&&(n.version=this.dep.version),this._value}set value(n){this.setter&&this.setter(n)}}function Wa(e,n,t=!1){let o,i;return I(e)?o=e:(o=e.get,i=e.set),new Da(o,i,t)}const Fn={},qn=new WeakMap;let Ve;function Ma(e,n=!1,t=Ve){if(t){let o=qn.get(t);o||qn.set(t,o=[]),o.push(e)}}function Ea(e,n,t=U){const{immediate:o,deep:i,once:a,scheduler:s,augmentJob:r,call:c}=t,u=_=>i?_:ue(_)||i===!1||i===0?Ce(_,1):Ce(_);let h,f,A,P,E=!1,W=!1;if(ee(e)?(f=()=>e.value,E=ue(e)):an(e)?(f=()=>u(e),E=!0):x(e)?(W=!0,E=e.some(_=>an(_)||ue(_)),f=()=>e.map(_=>{if(ee(_))return _.value;if(an(_))return u(_);if(I(_))return c?c(_,2):_()})):I(e)?n?f=c?()=>c(e,2):e:f=()=>{if(A){Ne();try{A()}finally{Ue()}}const _=Ve;Ve=h;try{return c?c(e,3,[P]):e(P)}finally{Ve=_}}:f=me,n&&i){const _=f,Q=i===!0?1/0:i;f=()=>Ce(_(),Q)}const K=sa(),N=()=>{h.stop(),K&&K.active&&Ut(K.effects,h)};if(a&&n){const _=n;n=(...Q)=>{_(...Q),N()}}let z=W?new Array(e.length).fill(Fn):Fn;const V=_=>{if(!(!(h.flags&1)||!h.dirty&&!_))if(n){const Q=h.run();if(i||E||(W?Q.some((De,ye)=>je(De,z[ye])):je(Q,z))){A&&A();const De=Ve;Ve=h;try{const ye=[Q,z===Fn?void 0:W&&z[0]===Fn?[]:z,P];c?c(n,3,ye):n(...ye),z=Q}finally{Ve=De}}}else h.run()};return r&&r(V),h=new Qo(f),h.scheduler=s?()=>s(V,!1):V,P=_=>Ma(_,!1,h),A=h.onStop=()=>{const _=qn.get(h);if(_){if(c)c(_,4);else for(const Q of _)Q();qn.delete(h)}},n?o?V(!0):z=h.run():s?s(V.bind(null,!0),!0):h.run(),N.pause=h.pause.bind(h),N.resume=h.resume.bind(h),N.stop=N,N}function Ce(e,n=1/0,t){if(n<=0||!q(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),n--,ee(e))Ce(e.value,n,t);else if(x(e))for(let o=0;o<e.length;o++)Ce(e[o],n,t);else if(Zn(e)||on(e))e.forEach(o=>{Ce(o,n,t)});else if(Oo(e)){for(const o in e)Ce(e[o],n,t);for(const o of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,o)&&Ce(e[o],n,t)}return e}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function _n(e,n,t,o){try{return o?e(...o):e()}catch(i){ot(i,n,t)}}function Te(e,n,t,o){if(I(e)){const i=_n(e,n,t,o);return i&&Bo(i)&&i.catch(a=>{ot(a,n,t)}),i}if(x(e)){const i=[];for(let a=0;a<e.length;a++)i.push(Te(e[a],n,t,o));return i}}function ot(e,n,t,o=!0){const i=n?n.vnode:null,{errorHandler:a,throwUnhandledErrorInProduction:s}=n&&n.appContext.config||U;if(n){let r=n.parent;const c=n.proxy,u=`https://vuejs.org/error-reference/#runtime-${t}`;for(;r;){const h=r.ec;if(h){for(let f=0;f<h.length;f++)if(h[f](e,c,u)===!1)return}r=r.parent}if(a){Ne(),_n(a,null,10,[e,c,u]),Ue();return}}La(e,t,i,o,s)}function La(e,n,t,o=!0,i=!1){if(i)throw e;console.error(e)}const oe=[];let ke=-1;const sn=[];let Me=null,nn=0;const di=Promise.resolve();let Gn=null;function hi(e){const n=Gn||di;return e?n.then(this?e.bind(this):e):n}function ja(e){let n=ke+1,t=oe.length;for(;n<t;){const o=n+t>>>1,i=oe[o],a=Pn(i);a<e||a===e&&i.flags&2?n=o+1:t=o}return n}function $t(e){if(!(e.flags&1)){const n=Pn(e),t=oe[oe.length-1];!t||!(e.flags&2)&&n>=Pn(t)?oe.push(e):oe.splice(ja(n),0,e),e.flags|=1,ui()}}function ui(){Gn||(Gn=di.then(fi))}function Fa(e){x(e)?sn.push(...e):Me&&e.id===-1?Me.splice(nn+1,0,e):e.flags&1||(sn.push(e),e.flags|=1),ui()}function uo(e,n,t=ke+1){for(;t<oe.length;t++){const o=oe[t];if(o&&o.flags&2){if(e&&o.id!==e.uid)continue;oe.splice(t,1),t--,o.flags&4&&(o.flags&=-2),o(),o.flags&4||(o.flags&=-2)}}}function pi(e){if(sn.length){const n=[...new Set(sn)].sort((t,o)=>Pn(t)-Pn(o));if(sn.length=0,Me){Me.push(...n);return}for(Me=n,nn=0;nn<Me.length;nn++){const t=Me[nn];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Me=null,nn=0}}const Pn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function fi(e){const n=me;try{for(ke=0;ke<oe.length;ke++){const t=oe[ke];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),_n(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;ke<oe.length;ke++){const t=oe[ke];t&&(t.flags&=-2)}ke=-1,oe.length=0,pi(),Gn=null,(oe.length||sn.length)&&fi()}}let he=null,mi=null;function zn(e){const n=he;return he=e,mi=e&&e.type.__scopeId||null,n}function Na(e,n=he,t){if(!n||e._n)return e;const o=(...i)=>{o._d&&Ro(-1);const a=zn(n);let s;try{s=e(...i)}finally{zn(a),o._d&&Ro(1)}return s};return o._n=!0,o._c=!0,o._d=!0,o}function po(e,n){if(he===null)return e;const t=rt(he),o=e.dirs||(e.dirs=[]);for(let i=0;i<n.length;i++){let[a,s,r,c=U]=n[i];a&&(I(a)&&(a={mounted:a,updated:a}),a.deep&&Ce(s),o.push({dir:a,instance:t,value:s,oldValue:void 0,arg:r,modifiers:c}))}return e}function qe(e,n,t,o){const i=e.dirs,a=n&&n.dirs;for(let s=0;s<i.length;s++){const r=i[s];a&&(r.oldValue=a[s].value);let c=r.dir[o];c&&(Ne(),Te(c,t,8,[e.el,r,e,n]),Ue())}}const Ua=Symbol("_vte"),Ba=e=>e.__isTeleport;function Zt(e,n){e.shapeFlag&6&&e.component?(e.transition=n,Zt(e.component.subTree,n)):e.shapeFlag&128?(e.ssContent.transition=n.clone(e.ssContent),e.ssFallback.transition=n.clone(e.ssFallback)):e.transition=n}function gi(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Vn(e,n,t,o,i=!1){if(x(e)){e.forEach((E,W)=>Vn(E,n&&(x(n)?n[W]:n),t,o,i));return}if(bn(o)&&!i){o.shapeFlag&512&&o.type.__asyncResolved&&o.component.subTree.component&&Vn(e,n,t,o.component.subTree);return}const a=o.shapeFlag&4?rt(o.component):o.el,s=i?null:a,{i:r,r:c}=e,u=n&&n.r,h=r.refs===U?r.refs={}:r.refs,f=r.setupState,A=L(f),P=f===U?()=>!1:E=>j(A,E);if(u!=null&&u!==c&&(Y(u)?(h[u]=null,P(u)&&(f[u]=null)):ee(u)&&(u.value=null)),I(c))_n(c,r,12,[s,h]);else{const E=Y(c),W=ee(c);if(E||W){const K=()=>{if(e.f){const N=E?P(c)?f[c]:h[c]:c.value;i?x(N)&&Ut(N,a):x(N)?N.includes(a)||N.push(a):E?(h[c]=[a],P(c)&&(f[c]=h[c])):(c.value=[a],e.k&&(h[e.k]=c.value))}else E?(h[c]=s,P(c)&&(f[c]=s)):W&&(c.value=s,e.k&&(h[e.k]=s))};s?(K.id=-1,le(K,t)):K()}}}et().requestIdleCallback;et().cancelIdleCallback;const bn=e=>!!e.type.__asyncLoader,yi=e=>e.type.__isKeepAlive;function Ha(e,n){wi(e,"a",n)}function Oa(e,n){wi(e,"da",n)}function wi(e,n,t=ie){const o=e.__wdc||(e.__wdc=()=>{let i=t;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(it(n,o,t),t){let i=t.parent;for(;i&&i.parent;)yi(i.parent.vnode)&&qa(o,n,t,i),i=i.parent}}function qa(e,n,t,o){const i=it(n,e,o,!0);bi(()=>{Ut(o[n],i)},t)}function it(e,n,t=ie,o=!1){if(t){const i=t[e]||(t[e]=[]),a=n.__weh||(n.__weh=(...s)=>{Ne();const r=Cn(t),c=Te(n,t,e,s);return r(),Ue(),c});return o?i.unshift(a):i.push(a),a}}const Ie=e=>(n,t=ie)=>{(!Sn||e==="sp")&&it(e,(...o)=>n(...o),t)},Ga=Ie("bm"),za=Ie("m"),Va=Ie("bu"),Ya=Ie("u"),Qa=Ie("bum"),bi=Ie("um"),Ja=Ie("sp"),Ka=Ie("rtg"),$a=Ie("rtc");function Za(e,n=ie){it("ec",e,n)}const Xa=Symbol.for("v-ndc");function fo(e,n,t,o){let i;const a=t&&t[o],s=x(e);if(s||Y(e)){const r=s&&an(e);let c=!1;r&&(c=!ue(e),e=tt(e)),i=new Array(e.length);for(let u=0,h=e.length;u<h;u++)i[u]=n(c?X(e[u]):e[u],u,void 0,a&&a[u])}else if(typeof e=="number"){i=new Array(e);for(let r=0;r<e;r++)i[r]=n(r+1,r,void 0,a&&a[r])}else if(q(e))if(e[Symbol.iterator])i=Array.from(e,(r,c)=>n(r,c,void 0,a&&a[c]));else{const r=Object.keys(e);i=new Array(r.length);for(let c=0,u=r.length;c<u;c++){const h=r[c];i[c]=n(e[h],h,c,a&&a[c])}}else i=[];return t&&(t[o]=i),i}const It=e=>e?Hi(e)?rt(e):It(e.parent):null,vn=J(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>It(e.parent),$root:e=>It(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Xt(e),$forceUpdate:e=>e.f||(e.f=()=>{$t(e.update)}),$nextTick:e=>e.n||(e.n=hi.bind(e.proxy)),$watch:e=>ks.bind(e)}),wt=(e,n)=>e!==U&&!e.__isScriptSetup&&j(e,n),es={get({_:e},n){if(n==="__v_skip")return!0;const{ctx:t,setupState:o,data:i,props:a,accessCache:s,type:r,appContext:c}=e;let u;if(n[0]!=="$"){const P=s[n];if(P!==void 0)switch(P){case 1:return o[n];case 2:return i[n];case 4:return t[n];case 3:return a[n]}else{if(wt(o,n))return s[n]=1,o[n];if(i!==U&&j(i,n))return s[n]=2,i[n];if((u=e.propsOptions[0])&&j(u,n))return s[n]=3,a[n];if(t!==U&&j(t,n))return s[n]=4,t[n];Dt&&(s[n]=0)}}const h=vn[n];let f,A;if(h)return n==="$attrs"&&Z(e.attrs,"get",""),h(e);if((f=r.__cssModules)&&(f=f[n]))return f;if(t!==U&&j(t,n))return s[n]=4,t[n];if(A=c.config.globalProperties,j(A,n))return A[n]},set({_:e},n,t){const{data:o,setupState:i,ctx:a}=e;return wt(i,n)?(i[n]=t,!0):o!==U&&j(o,n)?(o[n]=t,!0):j(e.props,n)||n[0]==="$"&&n.slice(1)in e?!1:(a[n]=t,!0)},has({_:{data:e,setupState:n,accessCache:t,ctx:o,appContext:i,propsOptions:a}},s){let r;return!!t[s]||e!==U&&j(e,s)||wt(n,s)||(r=a[0])&&j(r,s)||j(o,s)||j(vn,s)||j(i.config.globalProperties,s)},defineProperty(e,n,t){return t.get!=null?e._.accessCache[n]=0:j(t,"value")&&this.set(e,n,t.value,null),Reflect.defineProperty(e,n,t)}};function mo(e){return x(e)?e.reduce((n,t)=>(n[t]=null,n),{}):e}let Dt=!0;function ns(e){const n=Xt(e),t=e.proxy,o=e.ctx;Dt=!1,n.beforeCreate&&go(n.beforeCreate,e,"bc");const{data:i,computed:a,methods:s,watch:r,provide:c,inject:u,created:h,beforeMount:f,mounted:A,beforeUpdate:P,updated:E,activated:W,deactivated:K,beforeDestroy:N,beforeUnmount:z,destroyed:V,unmounted:_,render:Q,renderTracked:De,renderTriggered:ye,errorCaptured:We,serverPrefetch:In,expose:Be,inheritAttrs:dn,components:Dn,directives:Wn,filters:lt}=n;if(u&&ts(u,o,null),s)for(const G in s){const B=s[G];I(B)&&(o[G]=B.bind(t))}if(i){const G=i.call(t,t);q(G)&&(e.data=Qt(G))}if(Dt=!0,a)for(const G in a){const B=a[G],He=I(B)?B.bind(t,t):I(B.get)?B.get.bind(t,t):me,Mn=!I(B)&&I(B.set)?B.set.bind(t):me,Oe=Lt({get:He,set:Mn});Object.defineProperty(o,G,{enumerable:!0,configurable:!0,get:()=>Oe.value,set:we=>Oe.value=we})}if(r)for(const G in r)vi(r[G],o,t,G);if(c){const G=I(c)?c.call(t):c;Reflect.ownKeys(G).forEach(B=>{ls(B,G[B])})}h&&go(h,e,"c");function ne(G,B){x(B)?B.forEach(He=>G(He.bind(t))):B&&G(B.bind(t))}if(ne(Ga,f),ne(za,A),ne(Va,P),ne(Ya,E),ne(Ha,W),ne(Oa,K),ne(Za,We),ne($a,De),ne(Ka,ye),ne(Qa,z),ne(bi,_),ne(Ja,In),x(Be))if(Be.length){const G=e.exposed||(e.exposed={});Be.forEach(B=>{Object.defineProperty(G,B,{get:()=>t[B],set:He=>t[B]=He})})}else e.exposed||(e.exposed={});Q&&e.render===me&&(e.render=Q),dn!=null&&(e.inheritAttrs=dn),Dn&&(e.components=Dn),Wn&&(e.directives=Wn),In&&gi(e)}function ts(e,n,t=me){x(e)&&(e=Wt(e));for(const o in e){const i=e[o];let a;q(i)?"default"in i?a=Un(i.from||o,i.default,!0):a=Un(i.from||o):a=Un(i),ee(a)?Object.defineProperty(n,o,{enumerable:!0,configurable:!0,get:()=>a.value,set:s=>a.value=s}):n[o]=a}}function go(e,n,t){Te(x(e)?e.map(o=>o.bind(n.proxy)):e.bind(n.proxy),n,t)}function vi(e,n,t,o){let i=o.includes(".")?Ei(t,o):()=>t[o];if(Y(e)){const a=n[e];I(a)&&vt(i,a)}else if(I(e))vt(i,e.bind(t));else if(q(e))if(x(e))e.forEach(a=>vi(a,n,t,o));else{const a=I(e.handler)?e.handler.bind(t):n[e.handler];I(a)&&vt(i,a,e)}}function Xt(e){const n=e.type,{mixins:t,extends:o}=n,{mixins:i,optionsCache:a,config:{optionMergeStrategies:s}}=e.appContext,r=a.get(n);let c;return r?c=r:!i.length&&!t&&!o?c=n:(c={},i.length&&i.forEach(u=>Yn(c,u,s,!0)),Yn(c,n,s)),q(n)&&a.set(n,c),c}function Yn(e,n,t,o=!1){const{mixins:i,extends:a}=n;a&&Yn(e,a,t,!0),i&&i.forEach(s=>Yn(e,s,t,!0));for(const s in n)if(!(o&&s==="expose")){const r=os[s]||t&&t[s];e[s]=r?r(e[s],n[s]):n[s]}return e}const os={data:yo,props:wo,emits:wo,methods:mn,computed:mn,beforeCreate:te,created:te,beforeMount:te,mounted:te,beforeUpdate:te,updated:te,beforeDestroy:te,beforeUnmount:te,destroyed:te,unmounted:te,activated:te,deactivated:te,errorCaptured:te,serverPrefetch:te,components:mn,directives:mn,watch:as,provide:yo,inject:is};function yo(e,n){return n?e?function(){return J(I(e)?e.call(this,this):e,I(n)?n.call(this,this):n)}:n:e}function is(e,n){return mn(Wt(e),Wt(n))}function Wt(e){if(x(e)){const n={};for(let t=0;t<e.length;t++)n[e[t]]=e[t];return n}return e}function te(e,n){return e?[...new Set([].concat(e,n))]:n}function mn(e,n){return e?J(Object.create(null),e,n):n}function wo(e,n){return e?x(e)&&x(n)?[...new Set([...e,...n])]:J(Object.create(null),mo(e),mo(n??{})):n}function as(e,n){if(!e)return n;if(!n)return e;const t=J(Object.create(null),e);for(const o in n)t[o]=te(e[o],n[o]);return t}function ki(){return{app:null,config:{isNativeTag:Vi,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ss=0;function rs(e,n){return function(o,i=null){I(o)||(o=J({},o)),i!=null&&!q(i)&&(i=null);const a=ki(),s=new WeakSet,r=[];let c=!1;const u=a.app={_uid:ss++,_component:o,_props:i,_container:null,_context:a,_instance:null,version:qs,get config(){return a.config},set config(h){},use(h,...f){return s.has(h)||(h&&I(h.install)?(s.add(h),h.install(u,...f)):I(h)&&(s.add(h),h(u,...f))),u},mixin(h){return a.mixins.includes(h)||a.mixins.push(h),u},component(h,f){return f?(a.components[h]=f,u):a.components[h]},directive(h,f){return f?(a.directives[h]=f,u):a.directives[h]},mount(h,f,A){if(!c){const P=u._ceVNode||Ae(o,i);return P.appContext=a,A===!0?A="svg":A===!1&&(A=void 0),f&&n?n(P,h):e(P,h,A),c=!0,u._container=h,h.__vue_app__=u,rt(P.component)}},onUnmount(h){r.push(h)},unmount(){c&&(Te(r,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(h,f){return a.provides[h]=f,u},runWithContext(h){const f=rn;rn=u;try{return h()}finally{rn=f}}};return u}}let rn=null;function ls(e,n){if(ie){let t=ie.provides;const o=ie.parent&&ie.parent.provides;o===t&&(t=ie.provides=Object.create(o)),t[e]=n}}function Un(e,n,t=!1){const o=ie||he;if(o||rn){const i=rn?rn._context.provides:o?o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return t&&I(n)?n.call(o&&o.proxy):n}}const Ri={},Ai=()=>Object.create(Ri),Pi=e=>Object.getPrototypeOf(e)===Ri;function cs(e,n,t,o=!1){const i={},a=Ai();e.propsDefaults=Object.create(null),Ti(e,n,i,a);for(const s in e.propsOptions[0])s in i||(i[s]=void 0);t?e.props=o?i:Ta(i):e.type.props?e.props=i:e.props=a,e.attrs=a}function ds(e,n,t,o){const{props:i,attrs:a,vnode:{patchFlag:s}}=e,r=L(i),[c]=e.propsOptions;let u=!1;if((o||s>0)&&!(s&16)){if(s&8){const h=e.vnode.dynamicProps;for(let f=0;f<h.length;f++){let A=h[f];if(at(e.emitsOptions,A))continue;const P=n[A];if(c)if(j(a,A))P!==a[A]&&(a[A]=P,u=!0);else{const E=Fe(A);i[E]=Mt(c,r,E,P,e,!1)}else P!==a[A]&&(a[A]=P,u=!0)}}}else{Ti(e,n,i,a)&&(u=!0);let h;for(const f in r)(!n||!j(n,f)&&((h=Ze(f))===f||!j(n,h)))&&(c?t&&(t[f]!==void 0||t[h]!==void 0)&&(i[f]=Mt(c,r,f,void 0,e,!0)):delete i[f]);if(a!==r)for(const f in a)(!n||!j(n,f))&&(delete a[f],u=!0)}u&&_e(e.attrs,"set","")}function Ti(e,n,t,o){const[i,a]=e.propsOptions;let s=!1,r;if(n)for(let c in n){if(gn(c))continue;const u=n[c];let h;i&&j(i,h=Fe(c))?!a||!a.includes(h)?t[h]=u:(r||(r={}))[h]=u:at(e.emitsOptions,c)||(!(c in o)||u!==o[c])&&(o[c]=u,s=!0)}if(a){const c=L(t),u=r||U;for(let h=0;h<a.length;h++){const f=a[h];t[f]=Mt(i,c,f,u[f],e,!j(u,f))}}return s}function Mt(e,n,t,o,i,a){const s=e[t];if(s!=null){const r=j(s,"default");if(r&&o===void 0){const c=s.default;if(s.type!==Function&&!s.skipFactory&&I(c)){const{propsDefaults:u}=i;if(t in u)o=u[t];else{const h=Cn(i);o=u[t]=c.call(null,n),h()}}else o=c;i.ce&&i.ce._setProp(t,o)}s[0]&&(a&&!r?o=!1:s[1]&&(o===""||o===Ze(t))&&(o=!0))}return o}const hs=new WeakMap;function Si(e,n,t=!1){const o=t?hs:n.propsCache,i=o.get(e);if(i)return i;const a=e.props,s={},r=[];let c=!1;if(!I(e)){const h=f=>{c=!0;const[A,P]=Si(f,n,!0);J(s,A),P&&r.push(...P)};!t&&n.mixins.length&&n.mixins.forEach(h),e.extends&&h(e.extends),e.mixins&&e.mixins.forEach(h)}if(!a&&!c)return q(e)&&o.set(e,tn),tn;if(x(a))for(let h=0;h<a.length;h++){const f=Fe(a[h]);bo(f)&&(s[f]=U)}else if(a)for(const h in a){const f=Fe(h);if(bo(f)){const A=a[h],P=s[f]=x(A)||I(A)?{type:A}:J({},A),E=P.type;let W=!1,K=!0;if(x(E))for(let N=0;N<E.length;++N){const z=E[N],V=I(z)&&z.name;if(V==="Boolean"){W=!0;break}else V==="String"&&(K=!1)}else W=I(E)&&E.name==="Boolean";P[0]=W,P[1]=K,(W||j(P,"default"))&&r.push(f)}}const u=[s,r];return q(e)&&o.set(e,u),u}function bo(e){return e[0]!=="$"&&!gn(e)}const xi=e=>e[0]==="_"||e==="$stable",eo=e=>x(e)?e.map(Re):[Re(e)],us=(e,n,t)=>{if(n._n)return n;const o=Na((...i)=>eo(n(...i)),t);return o._c=!1,o},_i=(e,n,t)=>{const o=e._ctx;for(const i in e){if(xi(i))continue;const a=e[i];if(I(a))n[i]=us(i,a,o);else if(a!=null){const s=eo(a);n[i]=()=>s}}},Ci=(e,n)=>{const t=eo(n);e.slots.default=()=>t},Ii=(e,n,t)=>{for(const o in n)(t||o!=="_")&&(e[o]=n[o])},ps=(e,n,t)=>{const o=e.slots=Ai();if(e.vnode.shapeFlag&32){const i=n._;i?(Ii(o,n,t),t&&Go(o,"_",i,!0)):_i(n,o)}else n&&Ci(e,n)},fs=(e,n,t)=>{const{vnode:o,slots:i}=e;let a=!0,s=U;if(o.shapeFlag&32){const r=n._;r?t&&r===1?a=!1:Ii(i,n,t):(a=!n.$stable,_i(n,i)),s=n}else n&&(Ci(e,n),s={default:1});if(a)for(const r in i)!xi(r)&&s[r]==null&&delete i[r]},le=_s;function ms(e){return gs(e)}function gs(e,n){const t=et();t.__VUE__=!0;const{insert:o,remove:i,patchProp:a,createElement:s,createText:r,createComment:c,setText:u,setElementText:h,parentNode:f,nextSibling:A,setScopeId:P=me,insertStaticContent:E}=e,W=(l,d,p,y=null,m=null,g=null,k=void 0,v=null,b=!!d.dynamicChildren)=>{if(l===d)return;l&&!fn(l,d)&&(y=En(l),we(l,m,g,!0),l=null),d.patchFlag===-2&&(b=!1,d.dynamicChildren=null);const{type:w,ref:S,shapeFlag:R}=d;switch(w){case st:K(l,d,p,y);break;case $e:N(l,d,p,y);break;case Rt:l==null&&z(d,p,y,k);break;case fe:Dn(l,d,p,y,m,g,k,v,b);break;default:R&1?Q(l,d,p,y,m,g,k,v,b):R&6?Wn(l,d,p,y,m,g,k,v,b):(R&64||R&128)&&w.process(l,d,p,y,m,g,k,v,b,Xe)}S!=null&&m&&Vn(S,l&&l.ref,g,d||l,!d)},K=(l,d,p,y)=>{if(l==null)o(d.el=r(d.children),p,y);else{const m=d.el=l.el;d.children!==l.children&&u(m,d.children)}},N=(l,d,p,y)=>{l==null?o(d.el=c(d.children||""),p,y):d.el=l.el},z=(l,d,p,y)=>{[l.el,l.anchor]=E(l.children,d,p,y,l.el,l.anchor)},V=({el:l,anchor:d},p,y)=>{let m;for(;l&&l!==d;)m=A(l),o(l,p,y),l=m;o(d,p,y)},_=({el:l,anchor:d})=>{let p;for(;l&&l!==d;)p=A(l),i(l),l=p;i(d)},Q=(l,d,p,y,m,g,k,v,b)=>{d.type==="svg"?k="svg":d.type==="math"&&(k="mathml"),l==null?De(d,p,y,m,g,k,v,b):In(l,d,m,g,k,v,b)},De=(l,d,p,y,m,g,k,v)=>{let b,w;const{props:S,shapeFlag:R,transition:T,dirs:C}=l;if(b=l.el=s(l.type,g,S&&S.is,S),R&8?h(b,l.children):R&16&&We(l.children,b,null,y,m,bt(l,g),k,v),C&&qe(l,null,y,"created"),ye(b,l,l.scopeId,k,y),S){for(const H in S)H!=="value"&&!gn(H)&&a(b,H,null,S[H],g,y);"value"in S&&a(b,"value",null,S.value,g),(w=S.onVnodeBeforeMount)&&ve(w,y,l)}C&&qe(l,null,y,"beforeMount");const D=ys(m,T);D&&T.beforeEnter(b),o(b,d,p),((w=S&&S.onVnodeMounted)||D||C)&&le(()=>{w&&ve(w,y,l),D&&T.enter(b),C&&qe(l,null,y,"mounted")},m)},ye=(l,d,p,y,m)=>{if(p&&P(l,p),y)for(let g=0;g<y.length;g++)P(l,y[g]);if(m){let g=m.subTree;if(d===g||ji(g.type)&&(g.ssContent===d||g.ssFallback===d)){const k=m.vnode;ye(l,k,k.scopeId,k.slotScopeIds,m.parent)}}},We=(l,d,p,y,m,g,k,v,b=0)=>{for(let w=b;w<l.length;w++){const S=l[w]=v?Le(l[w]):Re(l[w]);W(null,S,d,p,y,m,g,k,v)}},In=(l,d,p,y,m,g,k)=>{const v=d.el=l.el;let{patchFlag:b,dynamicChildren:w,dirs:S}=d;b|=l.patchFlag&16;const R=l.props||U,T=d.props||U;let C;if(p&&Ge(p,!1),(C=T.onVnodeBeforeUpdate)&&ve(C,p,d,l),S&&qe(d,l,p,"beforeUpdate"),p&&Ge(p,!0),(R.innerHTML&&T.innerHTML==null||R.textContent&&T.textContent==null)&&h(v,""),w?Be(l.dynamicChildren,w,v,p,y,bt(d,m),g):k||B(l,d,v,null,p,y,bt(d,m),g,!1),b>0){if(b&16)dn(v,R,T,p,m);else if(b&2&&R.class!==T.class&&a(v,"class",null,T.class,m),b&4&&a(v,"style",R.style,T.style,m),b&8){const D=d.dynamicProps;for(let H=0;H<D.length;H++){const F=D[H],ae=R[F],$=T[F];($!==ae||F==="value")&&a(v,F,ae,$,m,p)}}b&1&&l.children!==d.children&&h(v,d.children)}else!k&&w==null&&dn(v,R,T,p,m);((C=T.onVnodeUpdated)||S)&&le(()=>{C&&ve(C,p,d,l),S&&qe(d,l,p,"updated")},y)},Be=(l,d,p,y,m,g,k)=>{for(let v=0;v<d.length;v++){const b=l[v],w=d[v],S=b.el&&(b.type===fe||!fn(b,w)||b.shapeFlag&70)?f(b.el):p;W(b,w,S,null,y,m,g,k,!0)}},dn=(l,d,p,y,m)=>{if(d!==p){if(d!==U)for(const g in d)!gn(g)&&!(g in p)&&a(l,g,d[g],null,m,y);for(const g in p){if(gn(g))continue;const k=p[g],v=d[g];k!==v&&g!=="value"&&a(l,g,v,k,m,y)}"value"in p&&a(l,"value",d.value,p.value,m)}},Dn=(l,d,p,y,m,g,k,v,b)=>{const w=d.el=l?l.el:r(""),S=d.anchor=l?l.anchor:r("");let{patchFlag:R,dynamicChildren:T,slotScopeIds:C}=d;C&&(v=v?v.concat(C):C),l==null?(o(w,p,y),o(S,p,y),We(d.children||[],p,S,m,g,k,v,b)):R>0&&R&64&&T&&l.dynamicChildren?(Be(l.dynamicChildren,T,p,m,g,k,v),(d.key!=null||m&&d===m.subTree)&&Di(l,d,!0)):B(l,d,p,S,m,g,k,v,b)},Wn=(l,d,p,y,m,g,k,v,b)=>{d.slotScopeIds=v,l==null?d.shapeFlag&512?m.ctx.activate(d,p,y,k,b):lt(d,p,y,m,g,k,b):to(l,d,b)},lt=(l,d,p,y,m,g,k)=>{const v=l.component=Fs(l,y,m);if(yi(l)&&(v.ctx.renderer=Xe),Ns(v,!1,k),v.asyncDep){if(m&&m.registerDep(v,ne,k),!l.el){const b=v.subTree=Ae($e);N(null,b,d,p)}}else ne(v,l,d,p,m,g,k)},to=(l,d,p)=>{const y=d.component=l.component;if(Ss(l,d,p))if(y.asyncDep&&!y.asyncResolved){G(y,d,p);return}else y.next=d,y.update();else d.el=l.el,y.vnode=d},ne=(l,d,p,y,m,g,k)=>{const v=()=>{if(l.isMounted){let{next:R,bu:T,u:C,parent:D,vnode:H}=l;{const se=Wi(l);if(se){R&&(R.el=H.el,G(l,R,k)),se.asyncDep.then(()=>{l.isUnmounted||v()});return}}let F=R,ae;Ge(l,!1),R?(R.el=H.el,G(l,R,k)):R=H,T&&Nn(T),(ae=R.props&&R.props.onVnodeBeforeUpdate)&&ve(ae,D,R,H),Ge(l,!0);const $=kt(l),pe=l.subTree;l.subTree=$,W(pe,$,f(pe.el),En(pe),l,m,g),R.el=$.el,F===null&&xs(l,$.el),C&&le(C,m),(ae=R.props&&R.props.onVnodeUpdated)&&le(()=>ve(ae,D,R,H),m)}else{let R;const{el:T,props:C}=d,{bm:D,m:H,parent:F,root:ae,type:$}=l,pe=bn(d);if(Ge(l,!1),D&&Nn(D),!pe&&(R=C&&C.onVnodeBeforeMount)&&ve(R,F,d),Ge(l,!0),T&&ht){const se=()=>{l.subTree=kt(l),ht(T,l.subTree,l,m,null)};pe&&$.__asyncHydrate?$.__asyncHydrate(T,l,se):se()}else{ae.ce&&ae.ce._injectChildStyle($);const se=l.subTree=kt(l);W(null,se,p,y,l,m,g),d.el=se.el}if(H&&le(H,m),!pe&&(R=C&&C.onVnodeMounted)){const se=d;le(()=>ve(R,F,se),m)}(d.shapeFlag&256||F&&bn(F.vnode)&&F.vnode.shapeFlag&256)&&l.a&&le(l.a,m),l.isMounted=!0,d=p=y=null}};l.scope.on();const b=l.effect=new Qo(v);l.scope.off();const w=l.update=b.run.bind(b),S=l.job=b.runIfDirty.bind(b);S.i=l,S.id=l.uid,b.scheduler=()=>$t(S),Ge(l,!0),w()},G=(l,d,p)=>{d.component=l;const y=l.vnode.props;l.vnode=d,l.next=null,ds(l,d.props,y,p),fs(l,d.children,p),Ne(),uo(l),Ue()},B=(l,d,p,y,m,g,k,v,b=!1)=>{const w=l&&l.children,S=l?l.shapeFlag:0,R=d.children,{patchFlag:T,shapeFlag:C}=d;if(T>0){if(T&128){Mn(w,R,p,y,m,g,k,v,b);return}else if(T&256){He(w,R,p,y,m,g,k,v,b);return}}C&8?(S&16&&hn(w,m,g),R!==w&&h(p,R)):S&16?C&16?Mn(w,R,p,y,m,g,k,v,b):hn(w,m,g,!0):(S&8&&h(p,""),C&16&&We(R,p,y,m,g,k,v,b))},He=(l,d,p,y,m,g,k,v,b)=>{l=l||tn,d=d||tn;const w=l.length,S=d.length,R=Math.min(w,S);let T;for(T=0;T<R;T++){const C=d[T]=b?Le(d[T]):Re(d[T]);W(l[T],C,p,null,m,g,k,v,b)}w>S?hn(l,m,g,!0,!1,R):We(d,p,y,m,g,k,v,b,R)},Mn=(l,d,p,y,m,g,k,v,b)=>{let w=0;const S=d.length;let R=l.length-1,T=S-1;for(;w<=R&&w<=T;){const C=l[w],D=d[w]=b?Le(d[w]):Re(d[w]);if(fn(C,D))W(C,D,p,null,m,g,k,v,b);else break;w++}for(;w<=R&&w<=T;){const C=l[R],D=d[T]=b?Le(d[T]):Re(d[T]);if(fn(C,D))W(C,D,p,null,m,g,k,v,b);else break;R--,T--}if(w>R){if(w<=T){const C=T+1,D=C<S?d[C].el:y;for(;w<=T;)W(null,d[w]=b?Le(d[w]):Re(d[w]),p,D,m,g,k,v,b),w++}}else if(w>T)for(;w<=R;)we(l[w],m,g,!0),w++;else{const C=w,D=w,H=new Map;for(w=D;w<=T;w++){const re=d[w]=b?Le(d[w]):Re(d[w]);re.key!=null&&H.set(re.key,w)}let F,ae=0;const $=T-D+1;let pe=!1,se=0;const un=new Array($);for(w=0;w<$;w++)un[w]=0;for(w=C;w<=R;w++){const re=l[w];if(ae>=$){we(re,m,g,!0);continue}let be;if(re.key!=null)be=H.get(re.key);else for(F=D;F<=T;F++)if(un[F-D]===0&&fn(re,d[F])){be=F;break}be===void 0?we(re,m,g,!0):(un[be-D]=w+1,be>=se?se=be:pe=!0,W(re,d[be],p,null,m,g,k,v,b),ae++)}const ao=pe?ws(un):tn;for(F=ao.length-1,w=$-1;w>=0;w--){const re=D+w,be=d[re],so=re+1<S?d[re+1].el:y;un[w]===0?W(null,be,p,so,m,g,k,v,b):pe&&(F<0||w!==ao[F]?Oe(be,p,so,2):F--)}}},Oe=(l,d,p,y,m=null)=>{const{el:g,type:k,transition:v,children:b,shapeFlag:w}=l;if(w&6){Oe(l.component.subTree,d,p,y);return}if(w&128){l.suspense.move(d,p,y);return}if(w&64){k.move(l,d,p,Xe);return}if(k===fe){o(g,d,p);for(let R=0;R<b.length;R++)Oe(b[R],d,p,y);o(l.anchor,d,p);return}if(k===Rt){V(l,d,p);return}if(y!==2&&w&1&&v)if(y===0)v.beforeEnter(g),o(g,d,p),le(()=>v.enter(g),m);else{const{leave:R,delayLeave:T,afterLeave:C}=v,D=()=>o(g,d,p),H=()=>{R(g,()=>{D(),C&&C()})};T?T(g,D,H):H()}else o(g,d,p)},we=(l,d,p,y=!1,m=!1)=>{const{type:g,props:k,ref:v,children:b,dynamicChildren:w,shapeFlag:S,patchFlag:R,dirs:T,cacheIndex:C}=l;if(R===-2&&(m=!1),v!=null&&Vn(v,null,p,l,!0),C!=null&&(d.renderCache[C]=void 0),S&256){d.ctx.deactivate(l);return}const D=S&1&&T,H=!bn(l);let F;if(H&&(F=k&&k.onVnodeBeforeUnmount)&&ve(F,d,l),S&6)zi(l.component,p,y);else{if(S&128){l.suspense.unmount(p,y);return}D&&qe(l,null,d,"beforeUnmount"),S&64?l.type.remove(l,d,p,Xe,y):w&&!w.hasOnce&&(g!==fe||R>0&&R&64)?hn(w,d,p,!1,!0):(g===fe&&R&384||!m&&S&16)&&hn(b,d,p),y&&oo(l)}(H&&(F=k&&k.onVnodeUnmounted)||D)&&le(()=>{F&&ve(F,d,l),D&&qe(l,null,d,"unmounted")},p)},oo=l=>{const{type:d,el:p,anchor:y,transition:m}=l;if(d===fe){Gi(p,y);return}if(d===Rt){_(l);return}const g=()=>{i(p),m&&!m.persisted&&m.afterLeave&&m.afterLeave()};if(l.shapeFlag&1&&m&&!m.persisted){const{leave:k,delayLeave:v}=m,b=()=>k(p,g);v?v(l.el,g,b):b()}else g()},Gi=(l,d)=>{let p;for(;l!==d;)p=A(l),i(l),l=p;i(d)},zi=(l,d,p)=>{const{bum:y,scope:m,job:g,subTree:k,um:v,m:b,a:w}=l;vo(b),vo(w),y&&Nn(y),m.stop(),g&&(g.flags|=8,we(k,l,d,p)),v&&le(v,d),le(()=>{l.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&l.asyncDep&&!l.asyncResolved&&l.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},hn=(l,d,p,y=!1,m=!1,g=0)=>{for(let k=g;k<l.length;k++)we(l[k],d,p,y,m)},En=l=>{if(l.shapeFlag&6)return En(l.component.subTree);if(l.shapeFlag&128)return l.suspense.next();const d=A(l.anchor||l.el),p=d&&d[Ua];return p?A(p):d};let ct=!1;const io=(l,d,p)=>{l==null?d._vnode&&we(d._vnode,null,null,!0):W(d._vnode||null,l,d,null,null,null,p),d._vnode=l,ct||(ct=!0,uo(),pi(),ct=!1)},Xe={p:W,um:we,m:Oe,r:oo,mt:lt,mc:We,pc:B,pbc:Be,n:En,o:e};let dt,ht;return n&&([dt,ht]=n(Xe)),{render:io,hydrate:dt,createApp:rs(io,dt)}}function bt({type:e,props:n},t){return t==="svg"&&e==="foreignObject"||t==="mathml"&&e==="annotation-xml"&&n&&n.encoding&&n.encoding.includes("html")?void 0:t}function Ge({effect:e,job:n},t){t?(e.flags|=32,n.flags|=4):(e.flags&=-33,n.flags&=-5)}function ys(e,n){return(!e||e&&!e.pendingBranch)&&n&&!n.persisted}function Di(e,n,t=!1){const o=e.children,i=n.children;if(x(o)&&x(i))for(let a=0;a<o.length;a++){const s=o[a];let r=i[a];r.shapeFlag&1&&!r.dynamicChildren&&((r.patchFlag<=0||r.patchFlag===32)&&(r=i[a]=Le(i[a]),r.el=s.el),!t&&r.patchFlag!==-2&&Di(s,r)),r.type===st&&(r.el=s.el)}}function ws(e){const n=e.slice(),t=[0];let o,i,a,s,r;const c=e.length;for(o=0;o<c;o++){const u=e[o];if(u!==0){if(i=t[t.length-1],e[i]<u){n[o]=i,t.push(o);continue}for(a=0,s=t.length-1;a<s;)r=a+s>>1,e[t[r]]<u?a=r+1:s=r;u<e[t[a]]&&(a>0&&(n[o]=t[a-1]),t[a]=o)}}for(a=t.length,s=t[a-1];a-- >0;)t[a]=s,s=n[s];return t}function Wi(e){const n=e.subTree.component;if(n)return n.asyncDep&&!n.asyncResolved?n:Wi(n)}function vo(e){if(e)for(let n=0;n<e.length;n++)e[n].flags|=8}const bs=Symbol.for("v-scx"),vs=()=>Un(bs);function vt(e,n,t){return Mi(e,n,t)}function Mi(e,n,t=U){const{immediate:o,deep:i,flush:a,once:s}=t,r=J({},t),c=n&&o||!n&&a!=="post";let u;if(Sn){if(a==="sync"){const P=vs();u=P.__watcherHandles||(P.__watcherHandles=[])}else if(!c){const P=()=>{};return P.stop=me,P.resume=me,P.pause=me,P}}const h=ie;r.call=(P,E,W)=>Te(P,h,E,W);let f=!1;a==="post"?r.scheduler=P=>{le(P,h&&h.suspense)}:a!=="sync"&&(f=!0,r.scheduler=(P,E)=>{E?P():$t(P)}),r.augmentJob=P=>{n&&(P.flags|=4),f&&(P.flags|=2,h&&(P.id=h.uid,P.i=h))};const A=Ea(e,n,r);return Sn&&(u?u.push(A):c&&A()),A}function ks(e,n,t){const o=this.proxy,i=Y(e)?e.includes(".")?Ei(o,e):()=>o[e]:e.bind(o,o);let a;I(n)?a=n:(a=n.handler,t=n);const s=Cn(this),r=Mi(i,a.bind(o),t);return s(),r}function Ei(e,n){const t=n.split(".");return()=>{let o=e;for(let i=0;i<t.length&&o;i++)o=o[t[i]];return o}}const Rs=(e,n)=>n==="modelValue"||n==="model-value"?e.modelModifiers:e[`${n}Modifiers`]||e[`${Fe(n)}Modifiers`]||e[`${Ze(n)}Modifiers`];function As(e,n,...t){if(e.isUnmounted)return;const o=e.vnode.props||U;let i=t;const a=n.startsWith("update:"),s=a&&Rs(o,n.slice(7));s&&(s.trim&&(i=t.map(h=>Y(h)?h.trim():h)),s.number&&(i=t.map(On)));let r,c=o[r=ut(n)]||o[r=ut(Fe(n))];!c&&a&&(c=o[r=ut(Ze(n))]),c&&Te(c,e,6,i);const u=o[r+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[r])return;e.emitted[r]=!0,Te(u,e,6,i)}}function Li(e,n,t=!1){const o=n.emitsCache,i=o.get(e);if(i!==void 0)return i;const a=e.emits;let s={},r=!1;if(!I(e)){const c=u=>{const h=Li(u,n,!0);h&&(r=!0,J(s,h))};!t&&n.mixins.length&&n.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!a&&!r?(q(e)&&o.set(e,null),null):(x(a)?a.forEach(c=>s[c]=null):J(s,a),q(e)&&o.set(e,s),s)}function at(e,n){return!e||!$n(n)?!1:(n=n.slice(2).replace(/Once$/,""),j(e,n[0].toLowerCase()+n.slice(1))||j(e,Ze(n))||j(e,n))}function kt(e){const{type:n,vnode:t,proxy:o,withProxy:i,propsOptions:[a],slots:s,attrs:r,emit:c,render:u,renderCache:h,props:f,data:A,setupState:P,ctx:E,inheritAttrs:W}=e,K=zn(e);let N,z;try{if(t.shapeFlag&4){const _=i||o,Q=_;N=Re(u.call(Q,_,h,f,P,A,E)),z=r}else{const _=n;N=Re(_.length>1?_(f,{attrs:r,slots:s,emit:c}):_(f,null)),z=n.props?r:Ps(r)}}catch(_){kn.length=0,ot(_,e,1),N=Ae($e)}let V=N;if(z&&W!==!1){const _=Object.keys(z),{shapeFlag:Q}=V;_.length&&Q&7&&(a&&_.some(Nt)&&(z=Ts(z,a)),V=cn(V,z,!1,!0))}return t.dirs&&(V=cn(V,null,!1,!0),V.dirs=V.dirs?V.dirs.concat(t.dirs):t.dirs),t.transition&&Zt(V,t.transition),N=V,zn(K),N}const Ps=e=>{let n;for(const t in e)(t==="class"||t==="style"||$n(t))&&((n||(n={}))[t]=e[t]);return n},Ts=(e,n)=>{const t={};for(const o in e)(!Nt(o)||!(o.slice(9)in n))&&(t[o]=e[o]);return t};function Ss(e,n,t){const{props:o,children:i,component:a}=e,{props:s,children:r,patchFlag:c}=n,u=a.emitsOptions;if(n.dirs||n.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return o?ko(o,s,u):!!s;if(c&8){const h=n.dynamicProps;for(let f=0;f<h.length;f++){const A=h[f];if(s[A]!==o[A]&&!at(u,A))return!0}}}else return(i||r)&&(!r||!r.$stable)?!0:o===s?!1:o?s?ko(o,s,u):!0:!!s;return!1}function ko(e,n,t){const o=Object.keys(n);if(o.length!==Object.keys(e).length)return!0;for(let i=0;i<o.length;i++){const a=o[i];if(n[a]!==e[a]&&!at(t,a))return!0}return!1}function xs({vnode:e,parent:n},t){for(;n;){const o=n.subTree;if(o.suspense&&o.suspense.activeBranch===e&&(o.el=e.el),o===e)(e=n.vnode).el=t,n=n.parent;else break}}const ji=e=>e.__isSuspense;function _s(e,n){n&&n.pendingBranch?x(e)?n.effects.push(...e):n.effects.push(e):Fa(e)}const fe=Symbol.for("v-fgt"),st=Symbol.for("v-txt"),$e=Symbol.for("v-cmt"),Rt=Symbol.for("v-stc"),kn=[];let de=null;function Ee(e=!1){kn.push(de=e?null:[])}function Cs(){kn.pop(),de=kn[kn.length-1]||null}let Tn=1;function Ro(e,n=!1){Tn+=e,e<0&&de&&n&&(de.hasOnce=!0)}function Fi(e){return e.dynamicChildren=Tn>0?de||tn:null,Cs(),Tn>0&&de&&de.push(e),e}function Ye(e,n,t,o,i,a){return Fi(M(e,n,t,o,i,a,!0))}function Is(e,n,t,o,i){return Fi(Ae(e,n,t,o,i,!0))}function Ni(e){return e?e.__v_isVNode===!0:!1}function fn(e,n){return e.type===n.type&&e.key===n.key}const Ui=({key:e})=>e??null,Bn=({ref:e,ref_key:n,ref_for:t})=>(typeof e=="number"&&(e=""+e),e!=null?Y(e)||ee(e)||I(e)?{i:he,r:e,k:n,f:!!t}:e:null);function M(e,n=null,t=null,o=0,i=null,a=e===fe?0:1,s=!1,r=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&Ui(n),ref:n&&Bn(n),scopeId:mi,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:o,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:he};return r?(no(c,t),a&128&&e.normalize(c)):t&&(c.shapeFlag|=Y(t)?8:16),Tn>0&&!s&&de&&(c.patchFlag>0||a&6)&&c.patchFlag!==32&&de.push(c),c}const Ae=Ds;function Ds(e,n=null,t=null,o=0,i=null,a=!1){if((!e||e===Xa)&&(e=$e),Ni(e)){const r=cn(e,n,!0);return t&&no(r,t),Tn>0&&!a&&de&&(r.shapeFlag&6?de[de.indexOf(e)]=r:de.push(r)),r.patchFlag=-2,r}if(Os(e)&&(e=e.__vccOpts),n){n=Ws(n);let{class:r,style:c}=n;r&&!Y(r)&&(n.class=Ot(r)),q(c)&&(Kt(c)&&!x(c)&&(c=J({},c)),n.style=Ht(c))}const s=Y(e)?1:ji(e)?128:Ba(e)?64:q(e)?4:I(e)?2:0;return M(e,n,t,o,i,s,a,!0)}function Ws(e){return e?Kt(e)||Pi(e)?J({},e):e:null}function cn(e,n,t=!1,o=!1){const{props:i,ref:a,patchFlag:s,children:r,transition:c}=e,u=n?Es(i||{},n):i,h={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&Ui(u),ref:n&&n.ref?t&&a?x(a)?a.concat(Bn(n)):[a,Bn(n)]:Bn(n):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:r,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==fe?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&cn(e.ssContent),ssFallback:e.ssFallback&&cn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&o&&Zt(h,c.clone(h)),h}function Bi(e=" ",n=0){return Ae(st,null,e,n)}function Ms(e="",n=!1){return n?(Ee(),Is($e,null,e)):Ae($e,null,e)}function Re(e){return e==null||typeof e=="boolean"?Ae($e):x(e)?Ae(fe,null,e.slice()):Ni(e)?Le(e):Ae(st,null,String(e))}function Le(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:cn(e)}function no(e,n){let t=0;const{shapeFlag:o}=e;if(n==null)n=null;else if(x(n))t=16;else if(typeof n=="object")if(o&65){const i=n.default;i&&(i._c&&(i._d=!1),no(e,i()),i._c&&(i._d=!0));return}else{t=32;const i=n._;!i&&!Pi(n)?n._ctx=he:i===3&&he&&(he.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else I(n)?(n={default:n,_ctx:he},t=32):(n=String(n),o&64?(t=16,n=[Bi(n)]):t=8);e.children=n,e.shapeFlag|=t}function Es(...e){const n={};for(let t=0;t<e.length;t++){const o=e[t];for(const i in o)if(i==="class")n.class!==o.class&&(n.class=Ot([n.class,o.class]));else if(i==="style")n.style=Ht([n.style,o.style]);else if($n(i)){const a=n[i],s=o[i];s&&a!==s&&!(x(a)&&a.includes(s))&&(n[i]=a?[].concat(a,s):s)}else i!==""&&(n[i]=o[i])}return n}function ve(e,n,t,o=null){Te(e,n,7,[t,o])}const Ls=ki();let js=0;function Fs(e,n,t){const o=e.type,i=(n?n.appContext:e.appContext)||Ls,a={uid:js++,vnode:e,type:o,parent:n,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new aa(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(i.provides),ids:n?n.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Si(o,i),emitsOptions:Li(o,i),emit:null,emitted:null,propsDefaults:U,inheritAttrs:o.inheritAttrs,ctx:U,data:U,props:U,attrs:U,slots:U,refs:U,setupState:U,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=n?n.root:a,a.emit=As.bind(null,a),e.ce&&e.ce(a),a}let ie=null,Qn,Et;{const e=et(),n=(t,o)=>{let i;return(i=e[t])||(i=e[t]=[]),i.push(o),a=>{i.length>1?i.forEach(s=>s(a)):i[0](a)}};Qn=n("__VUE_INSTANCE_SETTERS__",t=>ie=t),Et=n("__VUE_SSR_SETTERS__",t=>Sn=t)}const Cn=e=>{const n=ie;return Qn(e),e.scope.on(),()=>{e.scope.off(),Qn(n)}},Ao=()=>{ie&&ie.scope.off(),Qn(null)};function Hi(e){return e.vnode.shapeFlag&4}let Sn=!1;function Ns(e,n=!1,t=!1){n&&Et(n);const{props:o,children:i}=e.vnode,a=Hi(e);cs(e,o,a,n),ps(e,i,t);const s=a?Us(e,n):void 0;return n&&Et(!1),s}function Us(e,n){const t=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,es);const{setup:o}=t;if(o){Ne();const i=e.setupContext=o.length>1?Hs(e):null,a=Cn(e),s=_n(o,e,0,[e.props,i]),r=Bo(s);if(Ue(),a(),(r||e.sp)&&!bn(e)&&gi(e),r){if(s.then(Ao,Ao),n)return s.then(c=>{Po(e,c,n)}).catch(c=>{ot(c,e,0)});e.asyncDep=s}else Po(e,s,n)}else Oi(e,n)}function Po(e,n,t){I(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:q(n)&&(e.setupState=ci(n)),Oi(e,t)}let To;function Oi(e,n,t){const o=e.type;if(!e.render){if(!n&&To&&!o.render){const i=o.template||Xt(e).template;if(i){const{isCustomElement:a,compilerOptions:s}=e.appContext.config,{delimiters:r,compilerOptions:c}=o,u=J(J({isCustomElement:a,delimiters:r},s),c);o.render=To(i,u)}}e.render=o.render||me}{const i=Cn(e);Ne();try{ns(e)}finally{Ue(),i()}}}const Bs={get(e,n){return Z(e,"get",""),e[n]}};function Hs(e){const n=t=>{e.exposed=t||{}};return{attrs:new Proxy(e.attrs,Bs),slots:e.slots,emit:e.emit,expose:n}}function rt(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(ci(Sa(e.exposed)),{get(n,t){if(t in n)return n[t];if(t in vn)return vn[t](e)},has(n,t){return t in n||t in vn}})):e.proxy}function Os(e){return I(e)&&"__vccOpts"in e}const Lt=(e,n)=>Wa(e,n,Sn),qs="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let jt;const So=typeof window<"u"&&window.trustedTypes;if(So)try{jt=So.createPolicy("vue",{createHTML:e=>e})}catch{}const qi=jt?e=>jt.createHTML(e):e=>e,Gs="http://www.w3.org/2000/svg",zs="http://www.w3.org/1998/Math/MathML",xe=typeof document<"u"?document:null,xo=xe&&xe.createElement("template"),Vs={insert:(e,n,t)=>{n.insertBefore(e,t||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,t,o)=>{const i=n==="svg"?xe.createElementNS(Gs,e):n==="mathml"?xe.createElementNS(zs,e):t?xe.createElement(e,{is:t}):xe.createElement(e);return e==="select"&&o&&o.multiple!=null&&i.setAttribute("multiple",o.multiple),i},createText:e=>xe.createTextNode(e),createComment:e=>xe.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>xe.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},insertStaticContent(e,n,t,o,i,a){const s=t?t.previousSibling:n.lastChild;if(i&&(i===a||i.nextSibling))for(;n.insertBefore(i.cloneNode(!0),t),!(i===a||!(i=i.nextSibling)););else{xo.innerHTML=qi(o==="svg"?`<svg>${e}</svg>`:o==="mathml"?`<math>${e}</math>`:e);const r=xo.content;if(o==="svg"||o==="mathml"){const c=r.firstChild;for(;c.firstChild;)r.appendChild(c.firstChild);r.removeChild(c)}n.insertBefore(r,t)}return[s?s.nextSibling:n.firstChild,t?t.previousSibling:n.lastChild]}},Ys=Symbol("_vtc");function Qs(e,n,t){const o=e[Ys];o&&(n=(n?[n,...o]:[...o]).join(" ")),n==null?e.removeAttribute("class"):t?e.setAttribute("class",n):e.className=n}const _o=Symbol("_vod"),Js=Symbol("_vsh"),Ks=Symbol(""),$s=/(^|;)\s*display\s*:/;function Zs(e,n,t){const o=e.style,i=Y(t);let a=!1;if(t&&!i){if(n)if(Y(n))for(const s of n.split(";")){const r=s.slice(0,s.indexOf(":")).trim();t[r]==null&&Hn(o,r,"")}else for(const s in n)t[s]==null&&Hn(o,s,"");for(const s in t)s==="display"&&(a=!0),Hn(o,s,t[s])}else if(i){if(n!==t){const s=o[Ks];s&&(t+=";"+s),o.cssText=t,a=$s.test(t)}}else n&&e.removeAttribute("style");_o in e&&(e[_o]=a?o.display:"",e[Js]&&(o.display="none"))}const Co=/\s*!important$/;function Hn(e,n,t){if(x(t))t.forEach(o=>Hn(e,n,o));else if(t==null&&(t=""),n.startsWith("--"))e.setProperty(n,t);else{const o=Xs(e,n);Co.test(t)?e.setProperty(Ze(o),t.replace(Co,""),"important"):e[o]=t}}const Io=["Webkit","Moz","ms"],At={};function Xs(e,n){const t=At[n];if(t)return t;let o=Fe(n);if(o!=="filter"&&o in e)return At[n]=o;o=qo(o);for(let i=0;i<Io.length;i++){const a=Io[i]+o;if(a in e)return At[n]=a}return n}const Do="http://www.w3.org/1999/xlink";function Wo(e,n,t,o,i,a=ta(n)){o&&n.startsWith("xlink:")?t==null?e.removeAttributeNS(Do,n.slice(6,n.length)):e.setAttributeNS(Do,n,t):t==null||a&&!zo(t)?e.removeAttribute(n):e.setAttribute(n,a?"":Pe(t)?String(t):t)}function Mo(e,n,t,o,i){if(n==="innerHTML"||n==="textContent"){t!=null&&(e[n]=n==="innerHTML"?qi(t):t);return}const a=e.tagName;if(n==="value"&&a!=="PROGRESS"&&!a.includes("-")){const r=a==="OPTION"?e.getAttribute("value")||"":e.value,c=t==null?e.type==="checkbox"?"on":"":String(t);(r!==c||!("_value"in e))&&(e.value=c),t==null&&e.removeAttribute(n),e._value=t;return}let s=!1;if(t===""||t==null){const r=typeof e[n];r==="boolean"?t=zo(t):t==null&&r==="string"?(t="",s=!0):r==="number"&&(t=0,s=!0)}try{e[n]=t}catch{}s&&e.removeAttribute(i||n)}function Qe(e,n,t,o){e.addEventListener(n,t,o)}function er(e,n,t,o){e.removeEventListener(n,t,o)}const Eo=Symbol("_vei");function nr(e,n,t,o,i=null){const a=e[Eo]||(e[Eo]={}),s=a[n];if(o&&s)s.value=o;else{const[r,c]=tr(n);if(o){const u=a[n]=ar(o,i);Qe(e,r,u,c)}else s&&(er(e,r,s,c),a[n]=void 0)}}const Lo=/(?:Once|Passive|Capture)$/;function tr(e){let n;if(Lo.test(e)){n={};let o;for(;o=e.match(Lo);)e=e.slice(0,e.length-o[0].length),n[o[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Ze(e.slice(2)),n]}let Pt=0;const or=Promise.resolve(),ir=()=>Pt||(or.then(()=>Pt=0),Pt=Date.now());function ar(e,n){const t=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=t.attached)return;Te(sr(o,t.value),n,5,[o])};return t.value=e,t.attached=ir(),t}function sr(e,n){if(x(n)){const t=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{t.call(e),e._stopped=!0},n.map(o=>i=>!i._stopped&&o&&o(i))}else return n}const jo=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,rr=(e,n,t,o,i,a)=>{const s=i==="svg";n==="class"?Qs(e,o,s):n==="style"?Zs(e,t,o):$n(n)?Nt(n)||nr(e,n,t,o,a):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):lr(e,n,o,s))?(Mo(e,n,o),!e.tagName.includes("-")&&(n==="value"||n==="checked"||n==="selected")&&Wo(e,n,o,s,a,n!=="value")):e._isVueCE&&(/[A-Z]/.test(n)||!Y(o))?Mo(e,Fe(n),o,a,n):(n==="true-value"?e._trueValue=o:n==="false-value"&&(e._falseValue=o),Wo(e,n,o,s))};function lr(e,n,t,o){if(o)return!!(n==="innerHTML"||n==="textContent"||n in e&&jo(n)&&I(t));if(n==="spellcheck"||n==="draggable"||n==="translate"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA")return!1;if(n==="width"||n==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return jo(n)&&Y(t)?!1:n in e}const Jn=e=>{const n=e.props["onUpdate:modelValue"]||!1;return x(n)?t=>Nn(n,t):n};function cr(e){e.target.composing=!0}function Fo(e){const n=e.target;n.composing&&(n.composing=!1,n.dispatchEvent(new Event("input")))}const ln=Symbol("_assign"),dr={created(e,{modifiers:{lazy:n,trim:t,number:o}},i){e[ln]=Jn(i);const a=o||i.props&&i.props.type==="number";Qe(e,n?"change":"input",s=>{if(s.target.composing)return;let r=e.value;t&&(r=r.trim()),a&&(r=On(r)),e[ln](r)}),t&&Qe(e,"change",()=>{e.value=e.value.trim()}),n||(Qe(e,"compositionstart",cr),Qe(e,"compositionend",Fo),Qe(e,"change",Fo))},mounted(e,{value:n}){e.value=n??""},beforeUpdate(e,{value:n,oldValue:t,modifiers:{lazy:o,trim:i,number:a}},s){if(e[ln]=Jn(s),e.composing)return;const r=(a||e.type==="number")&&!/^0\d/.test(e.value)?On(e.value):e.value,c=n??"";r!==c&&(document.activeElement===e&&e.type!=="range"&&(o&&n===t||i&&e.value.trim()===c)||(e.value=c))}},hr={deep:!0,created(e,{value:n,modifiers:{number:t}},o){const i=Zn(n);Qe(e,"change",()=>{const a=Array.prototype.filter.call(e.options,s=>s.selected).map(s=>t?On(Kn(s)):Kn(s));e[ln](e.multiple?i?new Set(a):a:a[0]),e._assigning=!0,hi(()=>{e._assigning=!1})}),e[ln]=Jn(o)},mounted(e,{value:n}){No(e,n)},beforeUpdate(e,n,t){e[ln]=Jn(t)},updated(e,{value:n}){e._assigning||No(e,n)}};function No(e,n){const t=e.multiple,o=x(n);if(!(t&&!o&&!Zn(n))){for(let i=0,a=e.options.length;i<a;i++){const s=e.options[i],r=Kn(s);if(t)if(o){const c=typeof r;c==="string"||c==="number"?s.selected=n.some(u=>String(u)===String(r)):s.selected=ia(n,r)>-1}else s.selected=n.has(r);else if(nt(Kn(s),n)){e.selectedIndex!==i&&(e.selectedIndex=i);return}}!t&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function Kn(e){return"_value"in e?e._value:e.value}const ur=J({patchProp:rr},Vs);let Uo;function pr(){return Uo||(Uo=ms(ur))}const fr=(...e)=>{const n=pr().createApp(...e),{mount:t}=n;return n.mount=o=>{const i=gr(o);if(!i)return;const a=n._component;!I(a)&&!a.render&&!a.template&&(a.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const s=t(i,!1,mr(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),s},n};function mr(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function gr(e){return Y(e)?document.querySelector(e):e}const yr=[{id:"https://realpython.com/podcasts/rpp/242/",title:"The Real Python Podcast – Episode #242: Eric Matthes: Maybe Don't Start With Unit Tests",description:`Should you always start testing your code with unit tests? When does it make sense to look at integration or end-to-end testing as a first step instead? This week on the show, we speak with previous guest Eric Matthes about where to begin testing your code.
[ Improve Your Python With 🐍 Python Tricks 💌 – Get a short & sweet Python Trick delivered to your inbox every couple of days. >> Click here to learn more and see examples ]`,link:"https://realpython.com/podcasts/rpp/242/",pubDate:"2025-03-07T12:00:00.000Z",source:"Real Python",sourceUrl:"https://realpython.com",category:"python"},{id:"http://www.ruanyifeng.com/blog/2025/03/weekly-issue-340.html",title:"科技爱好者周刊（第 340 期）：技术炒作三十年",description:`这里记录每周值得分享的科技内容，周五发布。
本杂志开源，欢迎投稿。另有《谁在招人》服务，发布程序员招聘信息。合作请邮件联系（yifeng.ruan@gmail.com）。
封面图

成都建筑师刘家琨，本周获得号称"建筑界诺贝尔奖"的普利兹克奖，上图是他的作品苏州御窑金砖博物馆。（via）
技术炒作三十年
大家有没有发现，每隔一段时间，媒体就会大肆炒作一种新技术，宣扬它将对人类产生巨大影响，全社会都在关注，人人都在谈论。

这种炒作就是大家常说的"风口"吧。突然之间，风就起来了，如果正好站在风口，猪也能飞起来。
你能举出多少个这种炒作的例子？
一个国外程序员根据回忆，列出了过去三十年主要的几次技术炒作。
1998-2001 年：互联网 WWW
1999-2006 年：Java
2004-2007 年：Web 2.0
2007-2010：云计算
2010-2015：社交媒体
2012-2015：物联网
2013-2015：大数据
2017-2021：区块链
2021 年至今：人工智能
大家觉得，这个时间列表是否准确？

我的亲身感受是差不多。这是主要的几次技术炒作，而且这些技术都成功了，所以炒作的时间才会持续这么久，两年到五年，然后被下一个热点取代。
当中，还有许多次小的技术炒作，但都没有那么成功，持续时间就没有这么久，很快退潮了，比如元宇宙、Web 3、AR/VR 眼镜、3D 打印、自动驾驶等等。
一种新技术能够带来大规模、长时间的炒作，有一个前提条件，那就是它有真东西，确实能对社会经济带来非常有感的变化。
上面列表的每一种新技术，确实都是大的突破，改变了技术方向，没有一个是虚的。如果再加上智能手机、短视频、加密货币，可能就把最近三十年大的技术"风口"都包括了。
我以前有一个误区，看不起技术炒作，认为那只是一窝蜂的音浪，跟娱乐版的明星炒作没什么不同。
人到中年，我才意识到，这种观念大错特错，技术从业者千万不能有这种想法。每一次技术炒作，不仅是音浪，更是机会，会带来空前的关注、疯狂涌入的资金、以及切切实实的需求。炒作规模越大、程度越厉害，带来的机会和资金也就越大。
每一次大规模的技术炒作，都会诞生一些快速增长的指标公司，创造巨大的财富效应。如果你正好身在其中，事业和财富都会随之起飞。
让我们现实一点，一个工程师最有技术生产力、创造力、事业起飞的时间窗口，就只有那么几年。如果个人事业要快速起来、为未来铺好道路，光有技术还不够，还必须赶上至少一个大的技术风口，用外部的资金和需求放大个人努力。
否则，单靠自己的成果积累，就太慢了，很难快速到达更高的层次，很可能辛辛苦苦干了二十年，还是在做一些基础的事情。如果出现技术升级，使得你的技能过时了，后面的路就难了。技术风口其实是实现个人阶层飞跃、人生翻转的最可行的路径。
所以，每一轮大的技术风口并不完全是一哄而上的炒作，里面包含了一些真正的机会，值得关注和跟上。这也是为什么周刊每一次都对新技术倍加关注、积极评价的原因。
当然，赶上技术风口的前提，还是要有真才实学，能做出实打实的产品。否则，真遇到风口，你也无法脱颖而出，拿到技术炒作的红利。
[活动] AI FOR CODE 创意挑战赛
上周提到的全国 AI 编程大赛，大家还有印象吗。
这次大赛为了让更多人参与，除了常规的"应用赛道"，还特别设置了"创意赛道"。
只要有创意，就能参加，不需要具体的实现，实现交给 AI。

创意赛道从今天（3月7日）开始，就可以提交作品了，到3月27日截止。
如果你有想让 AI 实现的创意（点子），不妨发布到作品提交专区。发布时，需要按照模版要求提交。
注意，发布的创意需要公开可见，这样才能让大家投票。得票高的创意，将有丰富的奖品。
每个人最多提交5个创意。如有团队使用你的创意完成项目开发，你将获得神秘大礼！
不要错过本次大赛，只要你有想法，就有机会得奖。提交创意和投票的详细介绍，可以点击这里，或者扫描上面海报的二维码。
修复壁画的新方法
意大利帕多瓦教堂，曾经有一幅巨大的中世纪壁画，非常精美。

但是，这幅壁画在1944年的第二次世界大战被炸毁。
下面是壁画的虚拟重建图（局部）。

壁画被炸毁时，人们把墙壁的碎片收集起来，一共有88000多块，存放在博物馆。
下面是碎片的照片，这些碎片大概只占原始壁画的10%。

碎片的数量太大，缺失又太多，从来没人敢于尝试将它们还原。
但是，1992年的时候，博物馆曾经将所有碎片拍成了数码照片。
慕尼黑工业大学的数学教授马西莫·福纳西耶（Massimo Fornasier）得知了这件事，决定基于这些数码照片，使用计算机进行壁画还原。
这幅壁画在战前，曾经有过一张黑白照片（下图），可以作为修复的依据。

马西莫教授的第一步，是将这张照片上色，还原成彩色照片。

然后，将碎片进行图像吻合，一块块找到它们的位置（下图）。

下面是碎片上墙的样子。

缺失的部分，团队用灰白颜色补全。

全彩的虚拟效果图如下。

科技动态
1、美国萤火虫航天公司的"蓝色幽灵"登陆器，成功登陆月球，成为第一家登陆月球的民营企业。

2、一家美国生物技术公司，改造了老鼠的毛发基因，成功培养出了长毛鼠。


他们下一步的目标，是培育长毛象。
3、本田公司推出一款口袋妖怪摩托车，外形非常惊艳（下图）。

4、联想推出一款太阳能笔记本，上盖覆盖了太阳能电池。

据说阳光下放20分钟，可以播放视频1小时。但是怎么看，都不如外接一个太阳能发电板实用。
5、微软将在今年5月关闭通信服务 Skype，由 Teams 替代。智能手机出现之前，Skype 是最流行的国际电话软件。

文章
1、流式 HTML（英文）

AI 的聊天对话都是流式加载的，本文介绍一个技巧，不使用 JS 也能加载流式内容。
2、不要用 TypeScript 枚举（英文）

TypeScript 官方已经不建议使用 enum（枚举）语法，作者建议改用字符串的联合类型代替。
3、我如何使用 roboscribe 音频转文本（英文）

一篇教程，作者使用软件 roboscribe 将播客转成可用的文本，这事要比听上去麻烦。
4、如何测试电梯（中文）

本文将电梯抽象成一个"有限状态机"，设计测试用例。（@lezhi12 投稿）
5、我为什么选择 Firefox（英文）

作者介绍 Firefox 浏览器胜过 Chrome 的几个地方，有些功能大家可能未必知道。
6、脚本代替别名（英文）

常用的终端命令，往往可以设置别名（alias）作为快捷方式，作者提出一种新的方式，用脚本代替别名，更容易维护。
7、Tailscale 对我很有用（英文）

作者介绍自己的 Tailscale 用法，将不同的设备组成一个虚拟局域网。
工具
1、Yaak

一个测试 API 的开源桌面软件，功能比较全。
2、cleanmac
清理 macOS 系统的一个命令行脚本。
3、Lynx

字节开源的一款跨平台原生应用开发工具，使用 Web 语法，生成各个平台的原生应用，类似于 React Native。
4、appstat

监控 Windows 应用的资源占用（内存、CPU、网络）的一款工具。
5、Maestro

一个 Web 和 手机的 UI 测试工具，只要写好配置文件，就能自动运行测试。
6、Git Worktree Manager

VS Code 插件，方便在不同的 Git 仓库、不同的分支之间切换。（@jackiotyu 投稿）
7、Hugo Translator
一个 Python 脚本，将 markdown 格式的中文 Hugo 博客帖子，翻译成英文。（@Rico00121 投稿）
8、O-Spy

一个 Web 应用的记录并回放用户操作的工具，用来远程调试。（@wqcstrong 投稿）
9、MTranServer

开源的离线翻译服务器，号称资源消耗低，CPU + 1G 内存即可运行，支持调用沉浸式翻译。（@xxnuo 投稿）
10、Screen Sharing Application

一个开源的 Next.js 应用，通过点对点通信，实时分享你的屏幕。它会生成一个房间码，其他人访问这个房间，就能看到你的屏幕。
AI 相关
1、olmOCR

一个使用 AI 模型进行文字识别（OCR）的 Python 工具。
2、Probly

一个基于 AI 的电子表格软件，可以在浏览器中对表格运行 Python 代码。
3、Hacker News 每日播报

每天自动抓取 Hacker News 热门文章，通过 AI 生成中文播客。（@Y024 投稿）
4、语析

基于大模型，进行知识库管理与生成知识图谱的工具。（@xerrors 投稿）
5、DiffRhythm

西北工业大学 ASLP 实验室开发的一个 AI 音乐生成模型。（@JoeDeanx 投稿）
资源
1、Meta 的 AI Demo

Meta 公司的 AI 实验室，展示最新的成果。
2、ProWords

一个基于 AI 的单词记忆平台，根据职业身份生成例句，代码开源。（@winterfx 投稿）
3、圣彼得大教堂 3D 导览

梵蒂冈的圣彼特大教堂（St. Peter's Basilica）是世界最大教堂，这个网站提供它的 3D 模型还原。
4、Shapecatcher

这个网站根据你画出的形状，返回匹配的 Unicode 字符，包括 Emoji 字符和东亚文字。
图片
1、奥乐齐的条形码
奥乐齐（Aldi）是一家德国连锁超市，为了方便用户扫描条形码，把条形码印刷得特别长。

小包装商品无法放置那么长的条形码，奥乐齐就会设法放置多个条形码。

上图的奶酪通心粉，在侧面和底部都有条形码。
2、乐高日心仪
国外网友使用乐高积木，搭建了一个可以转动的日心仪。

上图中，中间黄色的是太阳，地球围绕太阳公转，并且有22.5°的倾斜角。

地球的旁边还有月亮。月亮其实有5.15°倾角，但是肉眼不容易察觉。

它是可以实际运转的，内部结构很复杂，有大量齿轮。


文摘
1、高管与普通员工的脱节
作者：伊森·埃文斯（Ethan Evans）
我是已经退休的亚马逊副总裁，在亚马逊待了超过15年，领导过800多人的国际团队。
我任职期间，亚马逊股票涨幅高达9082%，因此我对普通人的许多生活困境并不了解。比我更高级的副总裁和首席执行官，就更是如此了。谈论自己的财富是大多数高管都避而不谈的禁忌话题。
今天我想谈谈一个小问题，先介绍一下我自己的情况，就举四点：1) 我没有任何抵押贷款，2) 每两周有一个女佣为我打扫一次住宅，3) 我付钱请别人帮我的花园割草， 4) 我50岁就退休了。
普通家庭，即使是工程师和知识分子，也没有这些福利。
在我上面的高管，享有的福利就更多了，我看到的就有：1) 有专门的度假屋，雇了多个工作人员长期看守；2) 私人飞机；3) 私人助理，不用自己付账单、买杂货或接孩子，助理处理一切；4）私人司机；5）孩子上贵得惊人的私立学校；6）他们想住哪儿就住哪儿。
经济成本从来不是这一类人的障碍。
现在让我们看一个例子，说明高管与员工是如何脱节的：结束远程工作，重返办公室。
高管的财富使他们有不同的选择。大多数高管把工作和职业成功放在生活的首位。如果他们不这样做，他们很少能成为高管。他们中的大多数人（包括我自己），利用财富为自己购买时间。他们大部分时间都花在工作上，小部分时间花在家人身上。如果工作是你生活的重心，那么重返办公室就自然是一个优先事项。
你想象一下高管的工作场景：无需通勤，司机会送你到家，你一心工作，无需赶回家接孩子，助理会帮你做这些，你也无需购物、打扫或做饭，佣人会做这些，无需辅导作业，好学校会提供辅导。在这种情况下，回到办公室感觉非常"值得"。
这不是一篇反对高管个人财富的长篇大论。毕竟，我付出了25年的生命，得到了一些财富。相反，这是一种解释，以便你了解高管与普通员工的脱节。
如果你需要影响高管，而他们的经历可能与你的现实生活脱节，请通过故事、视频和数据帮助他们看到现实。请记住，他们确实生活在另一个世界。这并不一定会使他们变得邪恶，只是脱节了。我不想发生"脱节"，但必须承认这种情况确实会随着时间的推移而发生。
言论
1、
兼职创业不是可以长期坚持的事情。如果你上班时整天面对电脑，回家后又坐在另一台电脑前开发自己的软件，那将让你筋疲力尽。
你可以这样做几个月，但问题是，企业通常需要更长的时间才能起步，很多人就会放弃。
-- 《关于独立开发》
2、
在开始一个项目时，一定程度的天真是必不可少的。如果我知道这条路有多难，我可能永远不会开始。但由于我完全不了解未来的挑战，所以我只是一头扎进去，一路摸索。 
-- 金茨·齐巴洛迪斯（Gints Zilbalodis），拉脱维亚导演，他的作品《猫猫的奇幻漂流》（Flow）获得今年的奥斯卡最佳动画片奖
3、
你编写的每一行代码都可能是一个潜在的 bug。除非你绝对需要这行代码，缺了它程序就会受影响，否则就不要写。不要编写你用不到的抽象层。如果优化会增加任何复杂性，就坚决不要优化。
-- 《每一代码都可能是 bug》
4、
我对 AI 的看法是，AI 本身不会创造，需要人类与它共同创造，创造的结果好坏与使用它的人的质量高度相关。
与 AI 交谈不像在与一个人交谈，而像在与人类的集体思维交谈。AI 不应该让你减少思考，而应该帮助你增加思考，AI 是你的杠杆，可以让你拓展自己。
-- Alex Komoroske，美国程序员
5、
10个人开会，可以没有主持人。100个人开会，必须有主持人。1000个人开会，需要一个组委会。
扩大10倍，需要将知识/资源推向极限，但是扩大100倍，需要跳出现有的维度，重新安排一切。
-- 《你的下两个零》
往年回顾
一周是一年的2%（#293）
与孔子 AI 聊天（#243）
前端与后端，谁更难？（#193）
世界尽头与冷酷仙境（#143）
（完）
文档信息
版权声明：自由转载-非商用-非衍生-保持署名（创意共享3.0许可证）
发表日期： 2025年3月 7日`,link:"http://www.ruanyifeng.com/blog/2025/03/weekly-issue-340.html",pubDate:"2025-03-07T00:11:36.000Z",source:"阮一峰的网络日志",sourceUrl:"http://www.ruanyifeng.com/blog",category:"tech"},{id:"https://towardsdatascience.com/?p=598826",title:"How to Spot and Prevent Model Drift Before it Impacts Your Business",description:`3 essential methods to track model drift you should know
The post How to Spot and Prevent Model Drift Before it Impacts Your Business appeared first on Towards Data Science.`,link:"https://towardsdatascience.com/how-to-spot-and-prevent-model-drift-before-it-impacts-your-business/",pubDate:"Thu, 06 Mar 2025 19:22:22 +0000",source:"Towards Data Science",sourceUrl:"https://towardsdatascience.com",category:"data-science"},{id:"https://towardsdatascience.com/?p=598815",title:"One-Tailed Vs. Two-Tailed Tests",description:`Choosing between one- and two-tailed hypotheses affects every stage of A/B testing. Learn why the hypothesis direction matters and explore the pros and cons of each approach.
The post One-Tailed Vs. Two-Tailed Tests appeared first on Towards Data Science.`,link:"https://towardsdatascience.com/one-tailed-vs-two-tailed-tests/",pubDate:"Thu, 06 Mar 2025 04:22:42 +0000",source:"Towards Data Science",sourceUrl:"https://towardsdatascience.com",category:"data-science"},{id:"https://towardsdatascience.com/?p=598812",title:"Kubernetes — Understanding and Utilizing Probes Effectively",description:`Why proper configuration and implementation of Kubernetes probes is vital for any critical deployment
The post Kubernetes — Understanding and Utilizing Probes Effectively appeared first on Towards Data Science.`,link:"https://towardsdatascience.com/kubernetes-understanding-and-utilizing-probes-effectively/",pubDate:"Thu, 06 Mar 2025 03:59:54 +0000",source:"Towards Data Science",sourceUrl:"https://towardsdatascience.com",category:"data-science"},{id:"https://towardsdatascience.com/?p=598745",title:"Overcome Failing Document Ingestion & RAG Strategies with Agentic Knowledge Distillation",description:`Introducing the pyramid search approach
The post Overcome Failing Document Ingestion & RAG Strategies with Agentic Knowledge Distillation appeared first on Towards Data Science.`,link:"https://towardsdatascience.com/overcome-failing-document-ingestion-rag-strategies-with-agentic-knowledge-distillation/",pubDate:"Wed, 05 Mar 2025 19:50:12 +0000",source:"Towards Data Science",sourceUrl:"https://towardsdatascience.com",category:"data-science"},{id:"https://towardsdatascience.com/?p=598740",title:"Generative AI Is Declarative",description:`And how to order a cheeseburger with an LLM
The post Generative AI Is Declarative appeared first on Towards Data Science.`,link:"https://towardsdatascience.com/generative-ai-is-declarative/",pubDate:"Wed, 05 Mar 2025 16:36:00 +0000",source:"Towards Data Science",sourceUrl:"https://towardsdatascience.com",category:"data-science"},{id:"https://realpython.com/python-bytes/",title:"Bytes Objects: Handling Binary Data in Python",description:`The bytes data type is an immutable sequence of unsigned bytes used for handling binary data in Python. You can create a bytes object using the literal syntax, the bytes() function, or the bytes.fromhex() method. Since bytes are closely related to strings, you often convert between the two data types, applying the correct character encoding.
By the end of this tutorial, you’ll understand that:
Python bytes objects are immutable sequences of unsigned bytes used for handling binary data.
The difference between bytes and bytearray is that bytes objects are read-only, while bytearray objects are mutable.
You convert a Python string to bytes using the str.encode() method, the bytes() function, or the codecs module.
Endianness refers to the byte order used to represent binary data in memory, which can be either little-endian or big-endian.
This tutorial starts with a brief overview of binary data fundamentals, setting the scene for the remaining part, which delves into creating and manipulating bytes objects in Python. Along the way, it touches on related topics, such as bytearray, bytes-like objects, and the buffer protocol. To top it off, you’ll find several real-life examples and exercises at the end, which demonstrate the concepts discussed.
To get the most out of this tutorial, you should be familiar with Python basics, particularly built-in data types.
Get Your Code: Click here to download the free sample code that you’ll use to learn about bytes objects and handling binary data in Python.
 Take the Quiz: Test your knowledge with our interactive “Python Bytes” quiz. You’ll receive a score upon completion to help you track your learning progress:

            
 
      
Interactive Quiz
Python Bytes 
      
In this quiz, you'll test your understanding of Python bytes objects. By working through this quiz, you'll revisit the key concepts related to this low-level data type.
Brushing Up on Binary Fundamentals
If you’re new to binary data or need a quick refresher, then consider sticking around. This section will provide a brief overview of binary representations, emphasizing a Python programmer’s perspective. On the other hand, if you’re already comfortable with the basics, then feel free to dive right into creating bytes objects in Python.
Bits, Bytes, and Binary Data
Virtually every piece of information, from books and music to movies, can be stored as binary data in a computer’s memory. The word binary implies that the information is stored as a sequence of binary digits, or bits for short. Each bit can hold a value of either one or zero, which is particularly well-suited for storage in electronic devices since they often use distinct voltage levels to represent these binary states.
For example, the binary sequence below may represent the color of a pixel in an image:
 




1 1 0 0 0 0 1 0 0 0 1 1 0 0 1 1 0 0 1 0 0 1




To make the interpretation of such binary sequences more systematic, you often arrange the individual bits into uniform groups. The standard unit of information in modern computing consists of exactly eight bits, which is why it’s sometimes known as an octet, although most people call it a byte. A single 8-bit byte allows for 256 possible bit combinations (28).
With this in mind, you can break up the bit sequence above into these three bytes:
 
 
 




0 0 1 1 0 0 0 0
1 0 0 0 1 1 0 0
1 1 0 0 1 0 0 1




Notice that the leftmost byte has been padded with two leading zeros to ensure a consistent number of bits across all bytes. Together, they form a 24-bit color depth, letting you choose from more than 16 million (224) unique colors per pixel.
In this case, each byte corresponds to one of three primary colors (red, green, and blue) within the RGB color model, effectively serving as coordinates in the RGB color space. Changing their proportions can be loosely compared to mixing paints to achieve a desired hue.
Note: Strictly speaking, the RGB color model is an additive one, meaning it combines specific wavelengths of light to synthesize complex colors. In contrast, paint mixing follows a subtractive model, where pigments absorb certain wavelengths of light from the visible spectrum.
To reveal the pixel’s primary colors as decimal numbers, you can open the Python REPL and define binary literals by prefixing the corresponding bit sequences with 0b:
Python
    
    

      
    
>>> 0b00110000, 0b10001100, 0b11001001
(48, 140, 201)


    
    
    
      Copied!
    
    
  
Binary literals are an alternative way of defining integers in Python. Other types of numeric literals include hexadecimal and octal. For example, you can represent the integer 48 as 0x30 in hexadecimal or 0o60 in octal, allowing you to write the same number differently.
Having such flexibility comes in handy since it’s customary to express byte values using the hexadecimal numeral system. By rewriting each byte as a two-digit hex number, you can represent your pixel color much more compactly compared to the equivalent binary sequence:
Python
    
    

      
    
>>> hex(48), hex(140), hex(201)
('0x30', '0x8c', '0xc9')

>>> int("308cc9", base=16)
3181769

>>> int("001100001000110011001001", base=2)
3181769


    
    
    
      Copied!
    
    
  
Calling the built-in hex() function on an integer returns the corresponding hexadecimal literal as a string. When you combine the resulting hex numbers, you’re able to describe a 24-bit color with just six digits (308cc9). Go ahead and open an online color picker to see what that encoded value looks like:
Read the full article at https://realpython.com/python-bytes/ »
[ Improve Your Python With 🐍 Python Tricks 💌 – Get a short & sweet Python Trick delivered to your inbox every couple of days. >> Click here to learn more and see examples ]`,link:"https://realpython.com/python-bytes/",pubDate:"2025-03-05T14:00:00.000Z",source:"Real Python",sourceUrl:"https://realpython.com",category:"python"},{id:"https://towardsdatascience.com/?p=598693",title:"Deep Research by OpenAI: A Practical Test of AI-Powered Literature Review",description:`How Deep Research handled a state-of-the-art review and possible challenges for research
The post Deep Research by OpenAI: A Practical Test of AI-Powered Literature Review appeared first on Towards Data Science.`,link:"https://towardsdatascience.com/deep-research-by-openai-a-practical-test-of-ai-powered-literature-review/",pubDate:"Tue, 04 Mar 2025 20:06:21 +0000",source:"Towards Data Science",sourceUrl:"https://towardsdatascience.com",category:"data-science"},{id:"https://towardsdatascience.com/?p=598673",title:"Practical SQL Puzzles That Will Level Up Your Skill",description:`Three real-world SQL patterns that can be applied to many problems
The post Practical SQL Puzzles That Will Level Up Your Skill appeared first on Towards Data Science.`,link:"https://towardsdatascience.com/practical-sql-puzzles-that-will-level-up-your-skill/",pubDate:"Tue, 04 Mar 2025 19:46:10 +0000",source:"Towards Data Science",sourceUrl:"https://towardsdatascience.com",category:"data-science"},{id:"https://towardsdatascience.com/?p=598667",title:"Mastering 1:1s as a Data Scientist: From Status Updates to Career Growth",description:`Use your 1:1s to gain visibility, solve challenges, and advance your career
The post Mastering 1:1s as a Data Scientist: From Status Updates to Career Growth appeared first on Towards Data Science.`,link:"https://towardsdatascience.com/mastering-11s-as-a-data-scientist-from-status-updates-to-career-growth/",pubDate:"Tue, 04 Mar 2025 19:12:13 +0000",source:"Towards Data Science",sourceUrl:"https://towardsdatascience.com",category:"data-science"},{id:"https://realpython.com/courses/working-with-python-polars/",title:"Working With Python Polars",description:`In the world of data analysis and manipulation, Python has long been the go-to language. With extensive and user-friendly libraries like NumPy, pandas, and PySpark, there’s a solution available for almost any data-driven task. Among these libraries, one name that’s been generating a significant amount of buzz lately is Polars.
Polars is a high-performance DataFrame library, designed to provide fast and efficient data processing capabilities. Inspired by the reigning pandas library, Polars takes things to another level, offering a seamless experience for working with large datasets that might not fit into memory.
In this video course, you’ll learn:
Why Polars is so performant and attention-grabbing
How to work with DataFrames, expressions, and contexts
How to read data into DataFrames
How to group and aggregate data 
What the lazy API is and how to build lazy queries
[ Improve Your Python With 🐍 Python Tricks 💌 – Get a short & sweet Python Trick delivered to your inbox every couple of days. >> Click here to learn more and see examples ]`,link:"https://realpython.com/courses/working-with-python-polars/",pubDate:"2025-03-04T14:00:00.000Z",source:"Real Python",sourceUrl:"https://realpython.com",category:"python"},{id:"https://towardsdatascience.com/?p=598629",title:"The Urgent Need for Intrinsic Alignment Technologies for Responsible Agentic AI",description:`Rethinking AI alignment and safety in the age of deep scheming
The post The Urgent Need for Intrinsic Alignment Technologies for Responsible Agentic AI appeared first on Towards Data Science.`,link:"https://towardsdatascience.com/the-urgent-need-for-intrinsic-alignment-technologies-for-responsible-agentic-ai/",pubDate:"Tue, 04 Mar 2025 12:00:00 +0000",source:"Towards Data Science",sourceUrl:"https://towardsdatascience.com",category:"data-science"},{id:"https://realpython.com/python-while-loop/",title:"Python while Loops: Repeating Tasks Conditionally",description:`Python’s while loop enables you to execute a block of code repeatedly as long as a given condition remains true. Unlike for loops, which iterate a known number of times, while loops are ideal for situations where the number of iterations isn’t known upfront.
Loops are a pretty useful construct in Python, so learning how to write and use them is a great skill for you as a Python developer.
By the end of this tutorial, you’ll understand that:
while is a Python keyword used to initiate a loop that repeats a block of code as long as a condition is true.
A while loop works by evaluating a condition at the start of each iteration. If the condition is true, then the loop executes. Otherwise, it terminates.
while loops are useful when the number of iterations is unknown, such as waiting for a condition to change or continuously processing user input.
while True in Python creates an infinite loop that continues until a break statement or external interruption occurs.
Python lacks a built-in do-while loop, but you can emulate it using a while True loop with a break statement for conditional termination.
With this knowledge, you’re prepared to write effective while loops in your Python programs, handling a wide range of iteration needs.
Get Your Code: Click here to download the free sample code that shows you how to work with while loops in Python.
 Take the Quiz: Test your knowledge with our interactive “Python while Loops: Repeating Tasks Conditionally” quiz. You’ll receive a score upon completion to help you track your learning progress:

            
 
      
Interactive Quiz
Python while Loops: Repeating Tasks Conditionally 
      
In this quiz, you'll test your understanding of Python's while loop. This loop allows you to execute a block of code repeatedly as long as a given condition remains true. Understanding how to use while loops effectively is a crucial skill for any Python developer.
Getting Started With Python while Loops
In programming, loops are control flow statements that allow you to repeat a given set of operations a number of times. In practice, you’ll find two main types of loops:
for loops are mostly used to iterate a known number of times, which is common when you’re processing data collections with a specific number of data items.
while loops are commonly used to iterate an unknown number of times, which is useful when the number of iterations depends on a given condition.
Python has both of these loops and in this tutorial, you’ll learn about while loops. In Python, you’ll generally use while loops when you need to repeat a series of tasks an unknown number of times.
Python while loops are compound statements with a header and a code block that runs until a given condition becomes false. The basic syntax of a while loop is shown below:
Python Syntax
    
    
while condition:
    <body>


    
    
    
      Copied!
    
    
  
In this syntax, condition is an expression that the loop evaluates for its truth value. If the condition is true, then the loop body runs. Otherwise, the loop terminates. Note that the loop body can consist of one or more statements that must be indented properly.
Here’s a more detailed breakdown of this syntax:
while is the keyword that initiates the loop header.
condition is an expression evaluated for truthiness that defines the exit condition.
<body> consists of one or more statements to execute in each iteration.
Here’s a quick example of how you can use a while loop to iterate over a decreasing sequence of numbers:
Python
    
    

      
    
>>> number = 5

>>> while number > 0:
...     print(number)
...     number -= 1
...
5
4
3
2
1


    
    
    
      Copied!
    
    
  
In this example, number > 0 is the loop condition. If this condition returns a false value, the loop terminates. The body consists of a call to print() that displays the value on the screen. Next, you decrease the value of number. This change will produce a different result when the loop evaluates the condition in the next iteration.
The loop runs while the condition remains true. When the condition turns false, the loop terminates, and the program execution proceeds to the first statement after the loop body. In this example, the loop terminates when number reaches a value less than or equal to 0.
If the loop condition doesn’t become false, then you have a potentially infinite loop. Consider the following loop, and keep your fingers near the Ctrl+C key combination to terminate its execution:
Python
    
    

      
    
>>> number = 5
>>> while number != 0:
...     print(number)
...     number -= 1
...
5
4
3
2
1

>>> number = 5
>>> while number != 0:
...     print(number)
...     number -= 2
...
5
3
1
-1
-3
-5
-7
-9
-11
Traceback (most recent call last):
    ...
KeyboardInterrupt


    
    
    
      Copied!
    
    
  
In this example, the loop condition is number != 0. This condition works when you decrease number by 1. However, if you decrease it by 2, the condition may never become false, resulting in a potentially infinite loop. In such cases, you can usually terminate the loop by pressing Ctrl+C, which raises a KeyboardInterrupt exception on most operating systems.
Note that the while loop checks its condition first before anything else happens. If it’s false to start with, then the loop body will never run:
Python
    
    

      
    
>>> number = 0
>>> while number > 0:
...     print(number)
...     number -= 1
...


    
    
    
      Copied!
    
    
  
Read the full article at https://realpython.com/python-while-loop/ »
[ Improve Your Python With 🐍 Python Tricks 💌 – Get a short & sweet Python Trick delivered to your inbox every couple of days. >> Click here to learn more and see examples ]`,link:"https://realpython.com/python-while-loop/",pubDate:"2025-03-03T14:00:00.000Z",source:"Real Python",sourceUrl:"https://realpython.com",category:"python"},{id:"https://realpython.com/quizzes/python-gil/",title:"Quiz: What Is the Python Global Interpreter Lock (GIL)?",description:`In this quiz, you’ll test your understanding of the
Python Global Interpreter Lock (GIL).
The GIL allows only one thread to hold the control of the Python interpreter. This has advantages, but can also be a performance bottleneck in CPU-bound and multi-threaded code.
By working through this quiz, you’ll revisit the impact of the GIL on the performance of your Python programs and how to mitigate it.
[ Improve Your Python With 🐍 Python Tricks 💌 – Get a short & sweet Python Trick delivered to your inbox every couple of days. >> Click here to learn more and see examples ]`,link:"https://realpython.com/quizzes/python-gil/",pubDate:"2025-03-03T12:00:00.000Z",source:"Real Python",sourceUrl:"https://realpython.com",category:"python"},{id:"http://www.ruanyifeng.com/blog/2025/03/trae.html",title:"Trae 国内版出来了，真的好用吗？",description:`年初一月份，我就看到新闻，字节面向海外发布了一款 AI IDE，叫做 Trae。

我心想，现在的 IDE 都有 AI 插件，功能完备，字节自己也有 MarsCode 插件，有必要再做一款单独的 IDE 吗？
我就没有特别关注这个工具。
上周，我遇到字节的同学，得知 Trae 国内版就在本周发布，我还提前拿到了内测版，这可是国内市场的首个 AI 原生 IDE。
今天，就来说说我的使用心得，顺便也探讨一个更大的问题：AI 工具已经这么多了，该不该造新的轮子？
先透露一下结论：Trae 国内版值得用。它作为一个 AI IDE，整体比插件好用，而且内置的大模型----豆包 1.5 pro、DeepSeek 满血版----无限量免费使用。
一、国外版与国内版
介绍使用体会之前，我先解释一下，两个版本的区别，主要是模型的差异。
Trae 国外版使用国外的模型，对于国内用户来说，存在连接不上、等待时间长、网速较慢等问题。
Trae 国内版使用国内的模型，连接可以保证稳定快速，界面也根据国内用户的习惯进行了定制。
我也问了字节的同学，Trae 国内版和 MarsCode 是什么关系。回答是，它们是同一个团队的作品，适用于不同场景。
如果你想保留原来使用的 IDE，只增加 AI 编程相关功能，那就用 MarsCode 插件。如果想体验一个全新的围绕 AI 设计的原生 IDE，那就试试 Trae。
这两个产品后续都会长期开发，可以根据自己的需要选择。
二、安装
Trae 国内版需要去官网 trae.com.cn下载。
目前，有三个版本：Windows 版、macOS Intel 芯片版、macOS M 系列芯片版。
安装启动后，会出现下面的画面。

接着，让你选择亮色/暗色主题，以及语言（简体中文）。

它还会问你，要不要导入原来 IDE（VS Code/Cursor）的配置，算是很贴心的设计了。

最后，问你要不要登录。不登录也可以用，只是某些功能会受到限制。登录的话，就跳转到 Trae 官网，用你的手机号登录。

一切完毕，就会进入使用界面。

三、使用界面
Trae 的使用界面，相当简洁。左侧就是 VS Code 的界面，熟悉的话，上手没有任何难度。

界面的右侧是 AI 区域。可以看到，它分成两个模式：Chat 和 Builder。

Chat 模式是默认模式，也就是问答模式。AI 回答问题，也可以生成代码，但不会生成项目，需要自己手动把代码复制过去。
Builder 模式是项目模式，你给出文字描述，让 AI 一键生成项目。
下面，就来试试这两个模式。
四、Chat 模式
Chat 模式的主体就是一个对话框，右下角按钮可以选择底层模型。

国内版目前有三个模型可供选择。
豆包 1.5 pro
DeepSeek R1
DeepSeek V3
这三个模型都是免费无限量使用，DeepSeek 系列模型都是满血版。我实测，速度令人满意，能够较快地给出回答，没有遇到"服务器繁忙"的提示，包括最耗时的 DeepSeek R1 模型都是如此。
至于，回答问题的质量，老实说，现阶段领先的大模型，这方面已经没有太多可挑剔的了。

任何问题都可以问，包括非技术类的问题。

我直接让它生成代码，回答的格式非常友好。

大家注意，上图中，第一个代码块是终端代码，右上角有三个按钮（下图）。

上图右上角的三个按钮，分别是"复制"、"添加到终端"和"运行"。如果点击后两个按钮，会直接把代码传入 Trae 内置的终端，就像下面这样。

这部分，我感觉用起来比插件版流畅，整体感更强，这大概就是把 AI 做成 IDE 的好处了。
五、Builder 模式
再看 Builder 模式，它可以一键生成项目。
点击上方的标签页，切换到该模式。可以看到，第一次进入，会有一个"启动 Builder"按钮（下图）。

系统会提示你（下图），这里可以从零到一完成项目构建，并且所有修改会自动保存，并显示两个示例项目：贪吃蛇和 Todo List。

为了测试正常的流程，我就直接在下方的对话框输入："请用 React 生成一个 Todo List 应用。"

系统会提示你指定一个目录，作为项目目录。然后，它不断给出操作步骤（下图）。

上图中，需要执行具体的命令时，它会附有"运行"按钮，要你点击确认。
点击后，Trae 会自动打开内置的终端，执行该命令（下图）。

然后，它会一个个生成所需的文件，要求你审查。

所有文件生成完毕，就出现了启动本地预览服务器的命令。

运行后，Trae 会启动一个内置的 webview 页面，展示渲染效果，实时更新。

这个很赞，任何修改都可以马上看到结果。
但是我必须说，不知道是不是内测版的缘故，Builder 模式目前还不完善，只适合为项目生成架构，做不到一步到位，离理想状态有些差距。我试了多次，如果需求复杂一点，生成的代码很难一次就跑起来，需要多次修改。大家对它要抱有合理期待，这个模式后续还需要不断完善。
六、其他功能
除了两大模式，Trae 的其他功能也可圈可点。
（1）代码智能补全。
这是 AI 编程助手的基本功能，就不多说了。只要按回车键换行，Trae 会阅读并理解当前代码，然后自动补全后续代码。
如果有注释，它会根据注释，生成缺少的代码。
（2）指定上下文。
Trae 允许指定对话的范围（上下文）。具体方法是在对话框输入#号。

上图中，在对话框输入#后，系统就会自动弹出一个菜单，让你选择上下文（context），一共有四种。
Code（代码）
File（文件）
Folder（文件夹）
Workspace（工作区）
默认的上下文是当前工作区（Workspace，即目前打开的项目），也可以指定为某个函数或类（Code）、某个文件（File）、某个文件夹（Folder）。
一旦指定了上下文，AI 的回答会更有针对性。比如生成代码时，就会结合上下文的场景。
（3）一键转对话。
为了方便地将代码编辑框的内容，传送给 AI，Trae 提供"一键转对话"按钮，省去了复制粘贴的麻烦。

上图中，选中某段代码，系统就会弹出"添加到对话"的浮动菜单，一键复制到 AI 对话框，便于提问。
终端窗口的报错信息，也有这个功能（下图），这就很方便让 AI 来 debug。

（4）模型自定义功能。
我听字节的同学说，Trae 后面会支持模型自定义功能，用户可根据自己的喜好，接入对应的模型API。
七、总结
我试用 Trae 国内版后，感到它有几个显著优点。
（1）产品设计周全，最常用的场景都考虑到了，用户体验比较流畅。
（2）界面友好，交互设计良好，开发者容易上手。
（3）AI 模型（包括满血版 DeepSeek）无限量免费使用，响应始终稳定快速。
不足之处是 Builder 模式还不够强，生成的程序有 bug，第一次生成往往跑不起来，需要不断调整，耗时较多。
总结就是，一个完整的 AI IDE 还是比 AI 插件，用起来更容易，有"一体感"，达到了更大的定制程度。
随着 AI 的能力进一步发展，AI IDE 的想象空间会更大，也许会成为未来 IDE 发展的主要方向。
Trae 国内版刚刚上线，开发团队希望大家下载试用，多提宝贵意见。
（完）
文档信息
版权声明：自由转载-非商用-非衍生-保持署名（创意共享3.0许可证）
发表日期： 2025年3月 3日`,link:"http://www.ruanyifeng.com/blog/2025/03/trae.html",pubDate:"2025-03-03T08:00:56.000Z",source:"阮一峰的网络日志",sourceUrl:"http://www.ruanyifeng.com/blog",category:"tech"},{id:"https://rweekly.org//2025-W10.html",title:"R Weekly 2025-W10 ellmer, Closeread Prize winnners, Rapid RAG Prototyping",description:`Hello and welcome to this new issue!
\r
				
How to have (my) content shared by R Weekly?
This week’s release was curated by Sam Parmar, with help from the R Weekly team members and contributors.
Highlight
Announcing ellmer: A package for interacting with Large Language Models in R
Winners of the Closeread Prize – Data-Driven Scrollytelling with Quarto
Rapid RAG Prototyping: Building a Retrieval Augmented Generation Prototype with ellmer and DuckDB
Insights
Announcing ellmer: A package for interacting with Large Language Models in R

LLM + Quarto: Turn One-Off Reports Into Automated Solutions
Share your data apps and docs more seamlessly on Connect Cloud
January 2025 Top 40 New CRAN Packages
Q1 2025 tidymodels digest

Understand geom_bar and its statistical transformations
Analyzing targeted locus amplification (TLA) data
Winners of the Closeread Prize – Data-Driven Scrollytelling with Quarto

R in the Browser: Announcing Our WebAssembly Distribution
R in the Real World
Pharmaverse Council Member updates
R Submissions Working Group: Pilot 5 Launch and more!
R in Organizations
Working with Clinical Trial Data? There’s a Pharmaverse Package for That
Resources
CRANhaven - A repository for recently archived CRAN packages
New Packages
📦 Go Live for More New Pkgs 📦
 -->
📦 Keep up to date wtih CRANberries 📦
CRAN
{httpgd} 2.0.3: A ‘HTTP’ Server Graphics Device
{awdb} 0.1.1: Query the USDA NWCC Air and Water Database REST API
{cnd} 0.1.0: Create and Register Conditions
{EpiSimR} 1.1: A ‘Shiny’ App to Simulate the Dynamics of Epidemic and Endemic Diseases Spread
{xdvir} 0.1-2: Render ‘LaTeX’ in Plots
‘shiny’
{crane} 0.1.0: Supplements the ‘gtsummary’ Package for Pharmaceutical Reporting
Updated Packages
🔍 Search on R-universe 🔍
{cards} 0.5.1: Analysis Results Data - diffify
{pander} 0.6.6: An R ‘Pandoc’ Writer - diffify
{jobqueue} 1.5.1: Run Interruptible Code Asynchronously - diffify
{xml2} 1.3.7: Parse XML - diffify
{teal.modules.general} 0.4.0: General Modules for ‘teal’ Applications - diffify
{teal.modules.clinical} 0.10.0: ‘teal’ Modules for Standard Clinical Outputs - diffify
{rayrender} 0.38.10: Build and Raytrace 3D Scenes - diffify
{r2rtf} 1.1.3: Easily Create Production-Ready Rich Text Format (RTF) Tables and
Figures - diffify
{odbc} 1.6.0: Connect to ODBC Compatible Databases (using the DBI Interface) - diffify
{diseasystore} 0.3.1: Feature Stores for the ‘diseasy’ Framework - diffify
{CNID} 2.0.2: Get Basic Information from Chinese ID Number - diffify
{eq5d} 0.15.7: Methods for Analysing ‘EQ-5D’ Data and Calculating ‘EQ-5D’ Index
Scores - diffify
{splines2} 0.5.4: Regression Spline Functions and Classes - diffify
{pmlbr} 0.3.0: Interface to the Penn Machine Learning Benchmarks Data
Repository - diffify
{healthdb} 0.4.0: Working with Healthcare Databases - diffify
{censobr} 0.4.1: Download Data from Brazil’s Population Census - diffify
{xslt} 1.5.1: Extensible Style-Sheet Language Transformations - diffify
{readxl} 1.4.4: Read Excel Files - diffify
{duckplyr} 1.0.1: A ‘DuckDB’-Backed Version of ‘dplyr’ - diffify
{Rfast} 2.1.5: A Collection of Efficient and Extremely Fast R Functions - diffify
{litedown} 0.6: A Lightweight Version of R Markdown - diffify
{gtreg} 0.4.1: Regulatory Tables for Clinical Research - diffify
{aplot} 0.2.5: Decorate a ‘ggplot’ with Associated Information - diffify
{sasr} 0.1.4: ‘SAS’ Interface - diffify
{tinytex} 0.56: Helper Functions to Install and Maintain TeX Live, and Compile LaTeX Documents - diffify
{QuickJSR} 1.6.0: Interface for the ‘QuickJS’ Lightweight ‘JavaScript’ Engine - diffify
{PatientProfiles} 1.3.0: Identify Characteristics of Patients in the OMOP Common Data Model - diffify
{reproducibleRchunks} 1.0.3: Automated Reproducibility Checks for R Markdown Documents - diffify
{simer} 1.0.0: Data Simulation for Life Science and Breeding - diffify
{summarytools} 1.1.1: Tools to Quickly and Neatly Summarize Data - diffify
{flexlsx} 0.3.4: Exporting ‘flextable’ to ‘xlsx’ Files - diffify
{zippeR} 0.1.1: Working with United States ZIP Code and ZIP Code Tabulation Area
Data - diffify
{and} 0.1.6: Construct Natural-Language Lists with Internationalization - diffify
{dittoViz} 1.0.3: User Friendly Data Visualization - diffify
{brickset} 2025.0.0: Interface with the Brickset API for Getting Data About LEGO Sets - diffify
{khroma} 1.16.0: Colour Schemes for Scientific Data Visualization - diffify
{arkhe} 1.10.0: Tools for Cleaning Rectangular Data - diffify
{akc} 0.9.9.1: Automatic Knowledge Classification - diffify
{watcher} 0.1.2: Watch the File System for Changes - diffify
{RPostgres} 1.4.8: C++ Interface to PostgreSQL - diffify
{networktools} 1.6.0: Tools for Identifying Important Nodes in Networks - diffify
{R.utils} 2.13.0: Various Programming Utilities - diffify
{reticulate} 1.41.0: Interface to ‘Python’ - diffify
{ggnewscale} 0.5.1: Multiple Fill and Colour Scales in ‘ggplot2’ - diffify
{teal} 0.16.0: Exploratory Web Apps for Analyzing Clinical Trials Data - diffify
{simDAG} 0.2.2: Simulate Data from a DAG and Associated Node Information - diffify
{planr} 0.5.1: Tools for Supply Chain Management, Demand and Supply Planning - diffify
{plotscaper} 0.2.8: Explore Your Data with Interactive Figures - diffify
Videos and Podcasts
Listen to the R-Weekly Highlights Podcast
R-Ladies Rome (English) - Interactive R, Python, and Shiny in the Browser with Quarto and Shinylive
Master Data Extraction - Turn Texts into Tidy Data with R & {ellmer}
Company-branded reports, apps, and dashboards made easier with brand.yml & Posit
Tutorials
Checking your R packages and practicals on a schedule using GitHub Actions
3MW (Authentication for Quarto Projects on Azure)
Dependency-light hex stickers with {gex}
Web app with DeepSeek R1 and Hugging Face API for chatting
How to Create Tables in R (With Examples) – A Comprehensive Guide Using Base R, dplyr, and data.table
Rapid RAG Prototyping: Building a Retrieval Augmented Generation Prototype with ellmer and DuckDB

-->

R Project Updates
Updates from R Core:
Call for Participation
Upcoming Events in 3 Months
Events in 3 Months:
A list of R conferences and meetings
This week’s local R-User and applied stats events
Weekly R Workshops for Ukraine
Frame-by-Frame Modeling and Validation of NFL geospatial data using gganimate in R workshop
Introduction to Empirical Macroeconomics with R workshop
Rix: reproducible data science environments with Nix
Grants & Funding
2025 ISC Grant Program
Connect
Join the Data Science Learning Community
rtistry
  
 
Post by @nrennie@fosstodon.org
 View on Mastodon
  


Quotes of the Week
#TodayinHistory #dataviz #Onthisday #OTD 📊
🎂Happy #Rstats birthday!
R 1.0.0 was first released on February 29, 2000.
Does that make it 24 or just 6 leap-years old? pic.twitter.com/KpZordLXAt
— Michael Friendly @datavisfriendly.bsky.social (@datavisFriendly) March 1, 2025`,link:"https://rweekly.org//2025-W10.html",pubDate:"Mon, 03 Mar 2025 00:00:00 +0000",source:"R Weekly",sourceUrl:"https://rweekly.org",category:"r-lang"},{id:"https://realpython.com/podcasts/rpp/241/",title:"The Real Python Podcast – Episode #241: Deciphering Python Jargon & Compiling Python 1.0",description:`How do you learn the terms commonly used when speaking about Python? How is the jargon similar to other programming languages? Christopher Trudeau is back on the show this week, bringing another batch of PyCoder's Weekly articles and projects.
[ Improve Your Python With 🐍 Python Tricks 💌 – Get a short & sweet Python Trick delivered to your inbox every couple of days. >> Click here to learn more and see examples ]`,link:"https://realpython.com/podcasts/rpp/241/",pubDate:"2025-02-28T12:00:00.000Z",source:"Real Python",sourceUrl:"https://realpython.com",category:"python"},{id:"https://realpython.com/quizzes/python-bytes/",title:"Quiz: Python Bytes",description:`In this quiz, you’ll test your understanding of Bytes Objects: Handling Binary Data in Python. By working through this quiz, you’ll revisit the key concepts related to this low-level data type.
[ Improve Your Python With 🐍 Python Tricks 💌 – Get a short & sweet Python Trick delivered to your inbox every couple of days. >> Click here to learn more and see examples ]`,link:"https://realpython.com/quizzes/python-bytes/",pubDate:"2025-02-28T12:00:00.000Z",source:"Real Python",sourceUrl:"https://realpython.com",category:"python"},{id:"https://realpython.com/quizzes/python-while-loop/",title:"Quiz: Python while Loops: Repeating Tasks Conditionally",description:`In this quiz, you’ll test your understanding of Python while Loops: Repeating Tasks Conditionally. 
The while keyword is used to initiate a loop that repeats a block of code while a condition is true. A while loop works by evaluating a condition at the start of each iteration. If the condition is true, then the loop executes. Otherwise, it terminates.
[ Improve Your Python With 🐍 Python Tricks 💌 – Get a short & sweet Python Trick delivered to your inbox every couple of days. >> Click here to learn more and see examples ]`,link:"https://realpython.com/quizzes/python-while-loop/",pubDate:"2025-02-28T12:00:00.000Z",source:"Real Python",sourceUrl:"https://realpython.com",category:"python"},{id:"http://www.ruanyifeng.com/blog/2025/02/weekly-issue-339.html",title:"科技爱好者周刊（第 339 期）：代币是什么",description:`这里记录每周值得分享的科技内容，周五发布。
本杂志开源，欢迎投稿。另有《谁在招人》服务，发布程序员招聘信息。合作请邮件联系（yifeng.ruan@gmail.com）。
封面图

西安咸阳国际机场，新开放的 T5 航站楼里面，有一座博物馆，展示机场建设工地发现的文物。（via）
代币是什么
现在，媒体经常出现一个词"代币"（token），今天就来谈谈这是什么？

首先声明，代币属于加密货币，有交易市场。我完全不想碰这一块，只想谈谈它们的原理。
大家读了就能理解，它们为什么可以发行，可以交易。作为技术实验，这是很有意思的。
我想谈这个题目，是因为前些日子读到一篇文章《去金融化与超金融化》，让我想通了代币与金融的关系。

加密货币的起源，与纸币的弊端有关。纸币（比如美元）都会越发越多，形成通货膨胀，长期中贬值，购买力不断下降。
人们因此不愿意持有现金，而是想法设法保值增值，从而形成"金融"活动，比如储蓄、投资、购买房产等等。
所以，金融就是现金的对立面，货币越发越多，人们越不愿意持有现金，导致金融活动也越来越多。

比特币的最初动机，是创造一种无法增发的货币机制。由于比特币总额是确定的，所以如果把它当作货币，就肯定不会发生通货膨胀。
因此，人们会愿意持有比特币现金，而不是拿它去消费和投资。由此推论，比特币的世界应该没有太多的金融活动，它可以"去金融化"，减少金融投资的规模。
但是，没有想到，后来出现了"以太坊"。

以太坊跟比特币一样，建立在区块链之上，区块链可以看作是一个写入后无法修改的公开账本。此外，它还有一个比特币没有的特点，就是"智能合约"。它允许用户写自己的程序，放上区块链，让区块链去执行。
这意味着，用户可以基于"智能合约"，在区块链上发行自己的代币。比如，你在区块链上写入一条记录（可以是任意内容），然后用智能合约规定，这条记录的所有权分成10000份（即关联10000条子记录），每一份都可以单独交易。
这样一来，你就创造了一种自己的代币，总额为10000份。你对外出售这些代币，只要有足够的人愿意买，就会形成这种币的交易市场。
这里的关键是，你写入区块链的原始记录，可以是"任意内容"。这意味着，任意东西都可以代币化，比如一条笔记、一段录音、甚至一件衣服，都可以发行成代币，只要保证写入区块链的内容能够代表原始物品即可。
根据这个原理，就出现了各种奇奇怪怪的代币发行，比如狗币、猫币、月亮币、火星币、大蒜币等等。它们统称为 meme coin（中文译为迷因币或模因币）。
代币可以是同质的（每一份可以互相替代），也可以是非同质的，即每个代币都是独一无二，相当于有编号证书。后者称为"非同质代币"，英文为 NFT（Non-fungible token），曾经一度非常火爆。

2022年，一只称为"无聊猿"的猿猴头像，它的一份 NFT 最高价格到过147个以太坊（约42万美元）。本质上，你花了这么多钱，买到的只是区块链上你名下的一条记录，你有权再把这条记录转给其他人，仅此而已。
由于任何东西都能变成可以交易的代币，因此代币创造了一种"超金融化"，即任何东西都变成金融化的可交易资产。
所以，事情就有点讽刺了，加密货币发明的原意是"去金融化"，诞生一种有稳定购买力的货币，现在却变成了"超金融化"，无数原本不可交易的东西，变成了金融资产，从来没有稳定的价格。
GeeLark 云手机
国内很多个人和企业，现在都在做跨境电商，需要工具来管理境外的社交媒体平台。
今天，就介绍一款这样的工具 GeeLark。

它的定位是"跨境营销一站式运营平台"，服务中国品牌出海。
功能上，它是云手机，让你在电脑上，通过云端操作各种手机 App，比如 TikTok、Instagram、YouTube、Facebook、WhatsApp 等（上图）。
大部分商家，还在用实体手机管理 TikTok 账号，如果有几个账号，就需要使用多部手机，非常麻烦。云手机就是解决这个问题，
（1）每个云手机是一个单独隔离的环境，没有任何学习成本，跟操作实体手机一样。系统版本的选择非常丰富，从 Andorid 10～Android 14 供选择。
（2）账号管理方便，一部电脑管理全部的手机和账号。
（3）常规操作全部自动化：自动批量发视频、发图集、修改文案、AI 养号、互动评论等。
（4）分组授权。团队成员可以设置单独的访问权限，可以分组管理，成员可以不知道媒体平台的账号密码，确保账号安全。
（5）TikTok 账号管理功能强大，可以一站式创建、管理和自动化运营账号，支持直播。
（6）提供 API。用户自己编写脚本，通过 API 实现对云手机的操作，执行自动化任务，还可以开启 ADB 远程控制云手机。
（7）GeeLark AI。最新版本上线了 AI 功能（下图），接入了 DeepSeek 模型。云手机可以在 AI 操作下，像真人一样使用 TikTok，浏览特定关键词或博主的视频，从而让系统为账号打上合适的标签。
发布视频或图集时，AI 可以帮你写文案，还可以生成不同版本的视频，帮助测试分发效果。

GeeLark 免费试用。新用户注册后，可以使用两部云手机，免费时长总共为60分钟。如需要更长的时间，或者更多的云手机，则需要付费。
感兴趣的朋友，不妨现在访问官网 geelark.cn 下载试用，无需绑定信用卡。新手入门操作可以看这篇文章。
[活动] AI FOR CODE 创意挑战赛
为了推广 AI 编程，探索技术创新，全国"AI FOR CODE 创意挑战赛"即将举行。

本次大赛为了鼓励更多同学参与，降低参加门槛，除了常规的"应用实现"赛道，还特别增设"创意征集"赛道。
只要你有想法，哪怕没有时间完成落地开发，都可以参加。你只要有创意，为参赛队伍提供灵感，让 AI 去实现，即使无法参与亲自开发，也有机会让自己的灵感变为现实，从而参与评奖。
大赛的启动仪式将在下周一（3月3日）晚上18点举行，详细介绍赛制，以及本次大赛的指定的 AI 编程环境 Trae。
直播期间将有大量抽奖。另外，预约直播后分享海报，邀请他人参加，也有丰厚奖品。
关注 AI 编程的同学，不要错过本次大赛。现在点击这里，或者扫描上面海报的二维码，预约参加直播，了解详情。
科技动态
1、月球机房
本周，美国通过猎鹰9号火箭，发送了一个月球登陆器。
登陆器将一个迷你服务器（下图）送到了月球表面，它重约1公斤，带有 8TB 硬盘。

这个服务器是为了测试，月球机房这个想法是否可行。
相比地球，月球没有自然灾害，没有风和雨，也没有水份和氧气，更没有战争和人为破坏。事实上，只要不遇到陨石撞击，月球地表几万年也不会改变。
于是，就有人提出，能不能把机房放到月球上，数据就不会损坏了，可以长期保存。
本次实验就是为了验证，通过太阳能供电，服务器能不能在月球上正常工作，经受极端的高温和低温。
2、飞行汽车
马斯克投资的飞行汽车，上周进行了原型试飞。

这辆车的奇特之处，在于它的外形就是普通的汽车，没有外露的螺旋桨，难道藏在车体内部。

它也飞不高，目击者说离地高度不超过5米，然后保持这个高度，向前飞了一段距离，就落地了。

厂商说，它的使用场景之一是，如果前车抛锚堵塞道路，它就可以飞过前车。另一个场景是飞过水面。
该车售价30万美元（约人民币217万），预计年底可以交付，可能成为世界第一辆上市的飞行汽车，只是不知道多少人会买。
3、天基太阳能
太阳能发电正在快速发展，但是它有一个重大缺点，就是无法全天发电，每天最多工作12小时，还不能有阴雨天气。
早就有人设想"天基太阳能"，为什么不把光伏板放到太空呢？全天24小时发电，再把电力传回地球。

一家美国创业公司，就打算开展这项业务，计划于2026年发射第一颗实验卫星。
它的设计类似于"星链"：多颗光伏卫星排列成一条直线，将太阳光转换为电能，再通过红外激光向地面传送。
地面设有多个接收站，每个站接收头顶卫星发来的能量，当前卫星飞过以后，再接收下一颗，就跟卫星上网差不多的模式。
4、其他
（1）湖南省严禁使用 AI 为病人开处方。
（2）埃及新发现一个法老墓，入口藏在山谷底部，很不起眼（下图）。上一次发现法老墓，还是1922年的图坦卡蒙墓，已经相隔百年了。

文章
1、本地部署 DeepSeek 模型保姆级教程（中文）

网友的教程，家用 PC 怎么跑 DeepSeek，当然跑不了满血版，只能跑小参数的版本。（@lovefc 投稿）
2、从头构建大模型（英文）

作者按照教材（上图），从零开始做一个大模型，本文简要解释了大模型原理。
3、Svelte 5 不是 JavaScript（英文）

Svelte 是一个流行的前端框架，去年发了5.0版。作者使用后感觉，它的抽象层次太高，已经不像 JavaScript 语言，而像一种新的语言。
4、面试伦敦谷歌（中文）
作者面试伦敦谷歌，最后被拒，全程的记录。（@DoctorLai 投稿）
5、Proxmox 虚拟机的10个项目（英文） 

Proxmox 是现在很流行的虚拟机软件，本文介绍它在家庭实验室的10种用途。
6、我如何用手势模拟鼠标（英文）

一篇教程，作者用谷歌的 MediaPipe 和 OpenCV，将摄像头捕获的手势动作，转化为鼠标操作，也就是不需要鼠标了。
7、如何制作网页的毛玻璃效果（英文）

本文介绍如何制作一个网页的毛玻璃透明区块。
8、CSS 局部作用域 @scope（英文）

本文介绍 CSS 局部作用域语法 @scope，它定义的规则只对当前区域生效，Chrome 浏览器已经支持。
工具
1、digiKam

开源的本地照片管理软件。
2、Web Awesome

一个 Web Component 组件库。
3、WhiteSur

一个类似 Mac 的 Linux GTK 桌面主题。
4、mdq
一个从 Markdown 文件提取信息的命令行工具，类似 处理 Markdown 文件的 jq 命令。
5、Electro

一个命令行的图片浏览器，Rust 语言写的，速度快。
6、链图

一个开源的在线工具，将网址转成一张包含二维码、网站标题和简介的图片。（@wind-liang 投稿）
7、MinMail.app

免费的临时邮箱服务。（@withoctober 投稿）
8、MoePush

基于 NextJS + Cloudflare 的消息推送服务, 支持钉钉、企业微信、Telegram 等多种渠道。（@beilunyang 投稿）
9、Ant Design X Vue

Ant Design X 的 Vue 移植，专门用来做 AI 的前端界面。（@wzc520pyfm 投稿）
10、New SVG Viewer

开源的 SVG 预览网站。（@liujuntao123 投稿）
11、Statusnook

一个需要自己部署的服务，用来架设一个简单的网站，检查指定网址是否在线。
12、llm-commit
使用大模型生成 Git 仓库的提交信息，用法简单，基于 Python 工具 llm。
资源
1、中日文翻译

该网站将中文翻译为日语，并显示假名和罗马发音。（@zhanghuid 投稿）
2、3D 陶器动手做

谷歌的网页小游戏，在网页上做一个 3D 陶器，挺有趣的。
3、苏特罗塔 3D 模型

苏特罗塔是旧金山的电视塔，高298米。作者用几千张无人机的照片，合成了它的 3D 模型，效果极佳。网站上有方法介绍。（@YuJianrong 投稿）
4、椭圆曲线加密（Elliptic Curve Cryptography）

这个英文仓库有椭圆曲线加密的简单介绍。
图片
1、分形台钳
台钳是一种常用的金属加工工具，用来固定零件。
常见的台钳都是下面的样子，只适合固定那些固定形状的零件。

但是，还有一种分形台钳，利用多个可调整角度的固定块，去固定不规则形状的零件。





文摘
1、如果没有人读博客，为什么要写呢？
让我们坦率一点吧，你写了一篇博客，根本就没有人读。
至少，没有你想要的那么多读者。你把自己的想法倾注在文章，精心构思每个句子，选择合适的图片----然后什么反响也没有，没有点赞，没有分享，没有互动。
那么写博客的意义何在？
首先，关于写博客，有两个误解。一个是只要我写出了好文章，读者自然就会来。不，他们不会来，网上有几十亿篇博客，好像浩浩荡荡的飓风一样，你的博客只是风里的一片叶子，谁会注意呢。
另一个误解是如果没有人阅读，写作就是浪费时间。
博客有自己隐藏的价值。你写博客不是为了别人的掌声，而是因为你自己的需要。
博客使人头脑清晰。它帮你理清思绪，锐化视角。当你写作时，你会思考得更好。当你思考得更好时，你会做出更好的成果。
博客的目标读者，其实不是互联网人群，而是未来的你，你的文章会让你看到自己思想的演变。
此外，未来也许有一天，某个真正需要你文章的人，会找到它。一篇有深度的文章比一篇病毒式传播的文章，影响力更持久。
写博客有点像街头摄影。你手拿相机，漫步在城市中。你看到一个场景----一个充满光、影、人性的瞬间，就拍下了它。
没人关心你拍到了什么。但这不是你摄影的原因，你摄影是因为你看到了一些东西。
写博客也一样。你写博客是因为你在思考，因为你在观察，因为你希望把它放在某个地方。
如果有人读了，那就更好了。如果没有，工作还是完成了。
这才是真正的重点。
言论
1、
有些大型科技公司，只招募中高级程序员，不招募初级程序员。我认为，这样做不对。
因为现代企业是知识型企业，初级程序员会迫使团队去教导、训练、合作，从而发现知识、创造知识。
-- 《你的公司需要初级程序员》
2、
我们公司的高管（没有一个是工程师）完全相信"AI 取代开发者"的炒作。我们的 CTO 曾说过："使用 GPT 编写代码，这是一天内就能完成的任务，应该不会超过一天。"
他们真的相信 AI 可以在一夜之间取代熟练的程序员。同时，他们从未使用过 GPT 自己编写生产代码，他们只是阅读了公关宣传并认为 AI 很神奇。
-- 《应对破碎的开发文化》
3、
最终，我希望机器人能做我不想做的事情，比如洗碗、洗衣服。我不希望它们代替我播放音乐、编写代码、写字。
-- 《我能合乎道德地使用大模型吗》
4、
日本铁路公司拥有车站附近的大量土地，为了提高客运量，会在车站旁做很多建设，吸引客流，比如开设酒店。
他们甚至会开设剧团，日本著名的宝冢歌舞团就是阪急铁路公司创立的，为了吸引人们乘坐火车去看演出。
-- Hacker News 读者
5、
人们首先解决生存需要，然后寻求实用性，接着追求舒适性，后来又享受快乐，从而变得荒唐奢侈，最终变得疯狂并浪费物质。
-- 维柯，意大利哲学家
往年回顾
所有代码都是技术债（#292）
一次尴尬的服务器被黑（#242）
最大的机会来自新技术（#192）
2020年才是21世纪元年（#142）
（完）
文档信息
版权声明：自由转载-非商用-非衍生-保持署名（创意共享3.0许可证）
发表日期： 2025年2月28日`,link:"http://www.ruanyifeng.com/blog/2025/02/weekly-issue-339.html",pubDate:"2025-02-28T00:21:57.000Z",source:"阮一峰的网络日志",sourceUrl:"http://www.ruanyifeng.com/blog",category:"tech"},{id:"https://www.tidyverse.org/blog/2025/02/tidymodels-2025-q1/",title:"Q1 2025 tidymodels digest",description:`5x height
* [ ] \`hugodown::use_tidy_thumbnails()\`
* [ ] Add intro sentence, e.g. the standard tagline for the package
* [ ] \`usethis::use_tidy_thanks()\`
-->
The tidymodels framework is a collection of R packages for modeling and machine learning using tidyverse principles.
Since the beginning of 2021, we have been publishing quarterly updates here on the tidyverse blog summarizing what’s new in the tidymodels ecosystem. The purpose of these regular posts is to share useful new features and any updates you may have missed. You can check out the tidymodels tag to find all tidymodels blog posts here, including our roundup posts as well as those that are more focused.
We’ve sent a steady stream of tidymodels packages to CRAN recently. We usually release them in batches since many of our packages are tightly coupled with one another. Internally, this process is referred to as the “cascade” of CRAN submissions.
The post will update you on which packages have changed and the major improvements you should know about.
Here’s a list of the packages and their News sections:
baguette
brulee
censored
dials
hardhat
parsnip
recipes
tidymodels
tune
workflows
Let’s look at a few specific updates.
Improvements in errors and warnings
  
    
      

      

    
  

A group effort was made to improve our error and warning messages across many packages. This started with an internal “upkeep week” (which ended up being 3-4 weeks) and concluded at the 
Tidy Dev Day in Seattle after posit::conf(2024).
The goal was to use new tools in the cli and rlang packages to make messages more informative than they used to be. For example, using:
tidy(pca_extract_trained, number = 3, type = "variances")


used to result in the error message:
Error in \`match.arg()\`:
! 'arg' should be one of "coef", "variance"

The new system references the function that you called and not the underlying base R function that actually errored. It also suggests a solution:
Error in \`tidy()\`:
! \`type\` must be one of "coef" or "variance", not "variances".
i Did you mean "variance"?

The rlang package created a set of 
standalone files that contain high-quality type checkers and related functions. This also improves the information that users get from an error. For example, using an inappropriate formula value in fit(linear_reg(), "boop", mtcars), the old message was:
Error in \`fit()\`:
! The \`formula\` argument must be a formula, but it is a <character>.

and now you see:
Error in \`fit()\`:
! \`formula\` must be a formula, not the string "boop".

This was a lot of work and we’re still aren’t finished. Two events helped us get as far as we did.
First, Simon Couch made the 
chores package (its previous name was “pal”), which enabled us to use AI tools to solve small-scope problems, such as converting old rlang error code to use the new 
cli syntax. I can’t overstate how much of a speed-up this was for us.
Second, at developer day, many external folks pitched in to make pull requests from a list of issues:
Organizing Tidy Dev Day issues.
I love these sessions for many reasons, but mostly because we meet users and contributors to our packages in person and work with them on specific tasks.
There is a lot more to do here; we have a lot of secondary packages that would benefit from these improvements too.
Quantile regression in parsnip
  
    
      

      

    
  

One big update in parsnip was a new modeling mode of "quantile regression". Daniel McDonald and Ryan Tibshirani largely provided some inertia for this work based on their 
disease modeling framework.
You can generate quantile predictions by first creating a model specification, which includes the quantiles that you want to predict:
library(tidymodels)
tidymodels_prefer()

ames <- 
  modeldata::ames |> 
  mutate(Sale_Price = log10(Sale_Price)) |> 
  select(Sale_Price, Latitude)

quant_spec <- 
  linear_reg() |> 
  set_engine("quantreg") |> 
  set_mode("quantile regression", quantile_levels = c(0.1, 0.5, 0.9))
quant_spec


## Linear Regression Model Specification (quantile regression)
## 
## Computational engine: quantreg

## Quantile levels: 0.1, 0.5, and 0.9.

We’ll add some spline terms via a recipe and fit the model:
spline_rec <- 
  recipe(Sale_Price ~ ., data = ames) |> 
  step_spline_natural(Latitude, deg_free = 10)

quant_fit <- 
  workflow(spline_rec, quant_spec) |> 
  fit(data = ames)

quant_fit


## ══ Workflow [trained] ═════════════════════════════════════════════════
## Preprocessor: Recipe
## Model: linear_reg()
## 
## ── Preprocessor ───────────────────────────────────────────────────────
## 1 Recipe Step
## 
## • step_spline_natural()
## 
## ── Model ──────────────────────────────────────────────────────────────
## Call:
## quantreg::rq(formula = ..y ~ ., tau = quantile_levels, data = data)
## 
## Coefficients:
##               tau= 0.1    tau= 0.5    tau= 0.9
## (Intercept) 4.71981123  5.07728741  5.25221335
## Latitude_01 1.22409173  0.70928577  0.79000849
## Latitude_02 0.19561816  0.04937750  0.02832633
## Latitude_03 0.16616065  0.02045910  0.14730573
## Latitude_04 0.30583648  0.08489487  0.15595080
## Latitude_05 0.21663212  0.02016258 -0.01110625
## Latitude_06 0.33541228  0.12005254  0.03006777
## Latitude_07 0.47732205  0.09146728  0.17394021
## Latitude_08 0.24028784  0.30450058  0.26144584
## Latitude_09 0.05840312 -0.14733781 -0.11911843
## Latitude_10 1.52800673  0.95994216  1.21750501
## 
## Degrees of freedom: 2930 total; 2919 residual

For prediction, tidymodels always returns a data frame with as many rows as the input data set (here: ames). The result for quantile predictions is a special vctrs class:
quant_pred <- predict(quant_fit, ames) 
quant_pred |> slice(1:4)


## # A tibble: 4 × 1
##   .pred_quantile
##        <qtls(3)>
## 1         [5.33]
## 2         [5.33]
## 3         [5.33]
## 4         [5.31]


class(quant_pred$.pred_quantile)


## [1] "quantile_pred" "vctrs_vctr"    "list"

where the output [5.31] shows the middle quantile.
We can expand the set of quantile predictions so that there are three rows for each source row in ames. There’s also an integer column called .row so that we can merge the data with the source data:
quant_pred$.pred_quantile[1]


## <quantiles[1]>
## [1] [5.33]
## # Quantile levels: 0.1 0.5 0.9


as_tibble(quant_pred$.pred_quantile[1])


## # A tibble: 3 × 3
##   .pred_quantile .quantile_levels  .row
##            <dbl>            <dbl> <int>
## 1           5.08              0.1     1
## 2           5.33              0.5     1
## 3           5.52              0.9     1

Here are the predicted quantile values:
quant_pred$.pred_quantile |> 
  as_tibble() |> 
  full_join(ames |> add_rowindex(), by = ".row") |> 
  arrange(Latitude) |> 
  ggplot(aes(x = Latitude)) + 
  geom_point(data = ames, aes(y = Sale_Price), alpha = 1 / 5) +
  geom_line(aes(y = .pred_quantile, col = format(.quantile_levels)), 
            show.legend = FALSE, linewidth = 1.5) 


10%, 50%, and 90% quantile predictions.
For now, the new mode does not have many engines. We need to implement some performance statistics in the yardstick package before integrating these models into the whole tidymodels ecosystem.
In other news, we’ve added some additional neural network models based on some improvements in the brulee package. Namely, two-layer networks can be tuned for feed-forward networks on tabular data (using torch).
One other improvement has been simmering for a long time: the ability to exploit sparse data structures better. We’ve improved our fit() interfaces for the few model engines that can use sparsely encoded data. There is much more to come on this in a few months, especially around recipes, so stay tuned.
Finally, we’ve created a set of 
checklists that can be used when creating new models or engines. These are very helpful, even for us, since there is a lot of minutiae to remember.
Parallelism in tune
  
    
      

      

    
  

This was a small maintenance release mostly related to parallel processing. Up to now, tune facilitated parallelism using the 
foreach package. That package is mature but not actively developed, so we have been slowly moving toward using the 
future package(s).
The 
first step in this journey was to keep using foreach internally (but lean toward future) but to encourage users to move from directly invoking the foreach package and, instead, load and use the future package.
We’re now moving folks into the second stage. tune will now raise a warning when:
A parallel backend has been registered with foreach, and
No 
plan() has been specified with future.
This will allow users to transition their existing code to only future and allow us to update existing documentation and training materials.
We anticipate that the third stage, removing foreach entirely, will occur sometime before posit::conf(2025) in September.
Things to look forward to
  
    
      

      

    
  

We are working hard on a few major initiatives that we plan on showing off at 
posit::conf(2025).
First is integrated support for sparse data. The emphasis is on “data” because users can use a data frame of sparse vectors or the usual sparse matrix format. This is a big deal because it does not force you to convert non-numeric data into a numeric matrix format. Again, we’ll discuss this more in the future, but you should be able to use sparse data frames in parsnip, recipes, tune, etc.
The second initiative is the longstanding goal of adding postprocessing to tidymodels. Just as you can add a preprocessor to a model workflow, you will be able to add a set of postprocessing adjustments to the predictions your model generates. See our 
previous post for a sneak peek.
Finally, this year’s 
summer internship focuses on supervised feature selection methods. We’ll also have releases (and probably another package) for these tools.
These should come to fruition (and CRAN) before or around August 2025.
Acknowledgements
  
    
      

      

    
  

We want to sincerely thank everyone who contributed to these packages since their previous versions:
@AlbertoImg, 
@asb2111, 
@balraadjsings, 
@bcjaeger, 
@beansrowning, 
@BrennanAntone, 
@cheryldietrich, 
@chillerb, 
@conarr5, 
@corybrunson, 
@dajmcdon, 
@davidrsch, 
@Edgar-Zamora, 
@EmilHvitfeldt, 
@gaborcsardi, 
@gimholte, 
@grantmcdermott, 
@grouptheory, 
@hfrick, 
@ilaria-kode, 
@JamesHWade, 
@jesusherranz, 
@jkylearmstrong, 
@joranE, 
@joscani, 
@Joscelinrocha, 
@josho88, 
@joshuagi, 
@JosiahParry, 
@jrosell, 
@jrwinget, 
@KarlKoe, 
@kscott-1, 
@lilykoff, 
@lionel-, 
@LouisMPenrod, 
@luisDVA, 
@marcelglueck, 
@marcozanotti, 
@martaalcalde, 
@mattwarkentin, 
@mihem, 
@mitchellmanware, 
@naokiohno, 
@nhward, 
@npelikan, 
@obgeneralao, 
@owenjonesuob, 
@pbhogale, 
@Peter4801, 
@pgg1309, 
@reisner, 
@rfsaldanha, 
@rkb965, 
@RobLBaker, 
@RodDalBen, 
@SantiagoD999, 
@shum461, 
@simonpcouch, 
@szimmer, 
@talegari, 
@therealjpetereit, 
@topepo, 
@walkerjameschris, and  
@ZWael`,link:"https://www.tidyverse.org/blog/2025/02/tidymodels-2025-q1/",pubDate:"Thu, 27 Feb 2025 00:00:00 +0000",source:"Tidyverse Blog",sourceUrl:"https://www.tidyverse.org/blog/",category:"r-lang"},{id:"https://realpython.com/polars-lazyframe/",title:"How to Work With Polars LazyFrames",description:`A Polars LazyFrame provides an efficient way to handle large datasets through lazy evaluation. Unlike traditional DataFrames, LazyFrames don’t contain data but instead store a set of instructions known as a query plan. Query plans perform operations like predicate and projection pushdown, ensuring only necessary rows and columns are processed. LazyFrames also support the parallel execution of query plans, further enhancing performance.
By the end of this tutorial, you’ll understand that:
A Polars LazyFrame allows efficient data processing by storing query instructions instead of data.
Lazy evaluation in LazyFrames optimizes query plans before data materialization.
Predicate and projection pushdown minimize unnecessary data processing in LazyFrames.
You create a LazyFrame using functions like scan_parquet() or scan_csv().
Switching between lazy and eager modes is sometimes necessary for certain operations.
Dive into this tutorial to discover how LazyFrames can transform your data processing tasks, providing both efficiency and flexibility for managing large datasets.
Before you start your learning journey, you should already be comfortable with the basics of working with DataFrames. This could be from any previous Polars experience you have, or from using any other DataFrame library, such as pandas.
In addition, you may consider using Jupyter Notebook as you work through many of the examples in this tutorial. Alternatively, JupyterLab will enhance your notebook experience, but any Python environment you’re comfortable with will be fine.
To get started, you’ll need some data. For the main part of this tutorial, you’ll use the rides.parquet file included in the downloadable materials. You can download this by clicking the link below:
Get Your Code: Click here to download the free sample code  that shows you how work with Polars LazyFrames.
The rides.parquet file is a doctored version of the taxi ride data freely available on the New York City Taxi and Limousine Commission (TLC) website. The dataset contains edited information about New York taxi cab rides from July 2024. Before you go any further, you’ll need to download the file and place it in your project folder.
Note: The Parquet format is a format for storing large volumes of data efficiently. Parquet files use compression to minimize storage space. They also maintain metadata about each column allowing columns to be searched efficiently, often in parallel, and without the need to read the entire file. Because this metadata is useful to LazyFrames when they need to investigate a file’s content, Parquet is an excellent format for LazyFrames to use.
The table below shows details of the rides.parquet file’s columns, along with their Polars data types. The text in parentheses beside each data type shows how these types are annotated in a DataFrame header when Polars displays its results:
Column Name
Polars Data Type
Description




pick_up
String (str)
Pick-up borough


drop_off
String (str)
Drop-off borough


passengers
Int32 (i32)
Number of passengers


distance
Int32 (i32)
Trip distance (miles)


fare
Int32 (i32)
Total fare ($)




As a starting point, you’ll create a LazyFrame and take a first look at its data. To use Polars, you first need to install the Polars library into your Python environment. You might also like to install Matplotlib as well.  You’ll use this to view the inner workings of a LazyFrame graphically later on. To install both from a command prompt you use:
Windows
  
Linux + macOS
  
In a Windows environment use:
Windows PowerShell
    
    

      
    
PS> python -m pip install polars matplotlib


    
    
    
      Copied!
    
    
  
Both libraries will install.
In a Linux or macOS environment use:
Shell
    
    

      
    
$ python -m pip install polars matplotlib


    
    
    
      Copied!
    
    
  
Both libraries will install.
In a Jupyter Notebook, the command is !python -m pip install polars matplotlib.
You can then begin to use the Polars library and all of its cool features. Here’s what your data looks like, and here’s how to create your first LazyFrame:
Python
    
    

      
    
>>> import polars as pl

>>> rides = pl.scan_parquet("rides.parquet")

>>> rides.collect()
shape: (3_076_903, 5)
┌───────────┬───────────┬────────────┬──────────┬──────┐
│ pick_up   ┆ drop_off  ┆ passengers ┆ distance ┆ fare │
│ ---       ┆ ---       ┆ ---        ┆ ---      ┆ ---  │
│ str       ┆ str       ┆ i32        ┆ i32      ┆ i32  │
╞═══════════╪═══════════╪════════════╪══════════╪══════╡
│ Manhattan ┆ Manhattan ┆ 1          ┆ 3        ┆ 24   │
│ Queens    ┆ Manhattan ┆ 1          ┆ 19       ┆ 75   │
│ Manhattan ┆ Queens    ┆ 1          ┆ 1        ┆ 16   │
│ Queens    ┆ Manhattan ┆ 0          ┆ 9        ┆ 60   │
│ Queens    ┆ Manhattan ┆ 1          ┆ 17       ┆ 90   │
│ …         ┆ …         ┆ …          ┆ …        ┆ …    │
│ Manhattan ┆ Manhattan ┆ null       ┆ 5        ┆ 27   │
│ Manhattan ┆ Manhattan ┆ null       ┆ 4        ┆ 26   │
│ Queens    ┆ Brooklyn  ┆ null       ┆ 4        ┆ 26   │
│ Manhattan ┆ Manhattan ┆ null       ┆ 3        ┆ 24   │
│ Manhattan ┆ Manhattan ┆ null       ┆ 8        ┆ 35   │
└───────────┴───────────┴────────────┴──────────┴──────┘


    
    
    
      Copied!
    
    
  
First of all, you import the Polars library using the conventional pl alias. You then use the scan_parquet() function to read rides.parquet. This makes your LazyFrame aware of the data file’s content. A LazyFrame doesn’t contain data but instead contains a set of instructions detailing what processing is to be carried out. To access the data, you need to materialize your LazyFrame by calling its .collect() method. This creates a DataFrame and reads the data.
In this example, .collect() shows there are 3,076,903 rows and five columns of data, as indicated by its shape.
Using LazyFrames may seem like a strange way of working given that you have to materialize them into DataFrames to view the data. You might wonder why not just stick with DataFrames instead. As you’ll see later, despite their name, LazyFrames offer an extremely efficient way to work with data. With their lazy evaluation capabilities, LazyFrames should be your preferred way to work with data in Polars whenever possible.
Next, you’ll learn the main ways you can create LazyFrames.
 Take the Quiz: Test your knowledge with our interactive “How to Work With Polars LazyFrames” quiz. You’ll receive a score upon completion to help you track your learning progress:

            
 
      
Interactive Quiz
How to Work With Polars LazyFrames 
      
This quiz will challenge your knowledge of working with Polars LazyFrames. You won't find all the answers in the tutorial, so you'll need to do some extra investigating. By finding all the answers, you're sure to learn some interesting things along the way.
How to Create a Polars LazyFrame
You can create LazyFrames in three main ways:
Read the full article at https://realpython.com/polars-lazyframe/ »
[ Improve Your Python With 🐍 Python Tricks 💌 – Get a short & sweet Python Trick delivered to your inbox every couple of days. >> Click here to learn more and see examples ]`,link:"https://realpython.com/polars-lazyframe/",pubDate:"2025-02-26T14:00:00.000Z",source:"Real Python",sourceUrl:"https://realpython.com",category:"python"},{id:"https://realpython.com/quizzes/polars-lazyframe/",title:"Quiz: How to Work With Polars LazyFrames",description:`In this quiz, you’ll test your understanding of the techniques covered in
How to Work With Polars LazyFrames.
By working through the questions, you’ll review your understanding of why LazyFrames are an efficient and preferred way of working in Polars.
You’ll need to do some research outside of the tutorial to answer all the questions, so let this challenge take you on a learning journey.
[ Improve Your Python With 🐍 Python Tricks 💌 – Get a short & sweet Python Trick delivered to your inbox every couple of days. >> Click here to learn more and see examples ]`,link:"https://realpython.com/quizzes/polars-lazyframe/",pubDate:"2025-02-26T12:00:00.000Z",source:"Real Python",sourceUrl:"https://realpython.com",category:"python"},{id:"https://realpython.com/courses/single-double-underscore-naming-conventions/",title:"Single and Double Underscore Naming Conventions in Python",description:`Python has a few important naming conventions that are based on using either a single or double underscore character (_). These conventions allow you to differentiate between public and non-public names in APIs, write safe classes for subclassing purposes, avoid name clashes, and more.
Following and respecting these conventions allows you to write code that looks Pythonic and consistent in the eyes of other Python developers. This skill is especially useful when you’re writing code that’s intended for other developers to work with.
In this video course, you’ll:
Learn about Python naming conventions that rely on using underscores (_)
Differentiate public and non-public names by using a single leading underscore
Use double leading underscores to leverage name mangling in Python classes
Explore other common uses of underscores in Python names
[ Improve Your Python With 🐍 Python Tricks 💌 – Get a short & sweet Python Trick delivered to your inbox every couple of days. >> Click here to learn more and see examples ]`,link:"https://realpython.com/courses/single-double-underscore-naming-conventions/",pubDate:"2025-02-25T14:00:00.000Z",source:"Real Python",sourceUrl:"https://realpython.com",category:"python"},{id:"https://realpython.com/python-sort/",title:"How to Use sorted() and .sort() in Python",description:`Sorting in Python is a fundamental task that you can accomplish using sorted() and .sort(). The sorted() function returns a new sorted list from the elements of any iterable, without modifying the original iterable. On the other hand, the .sort() method modifies a list in place and doesn’t return a value. Both methods support customization through optional keyword arguments like key and reverse.
By the end of this tutorial, you’ll understand that:
You can sort any iterable with the sorted() function.
The sorted() function returns a new sorted list.
The .sort() method sorts the list in place.
You sort items in descending order by setting the reverse argument to True.
The key argument accepts a function to customize the sort order.
In this tutorial, you’ll learn how to sort various types of data in different data structures, customize the order, and work with two different ways of sorting in Python. You’ll need a basic understanding of lists and tuples as well as sets. These are the data structures you’ll be using to perform some basic operations.
Get Your Cheat Sheet: Click here to download a free cheat sheet that summarizes how to use sorted() and .sort() in Python.
 Take the Quiz: Test your knowledge with our interactive “How to Use sorted() and .sort() in Python” quiz. You’ll receive a score upon completion to help you track your learning progress:

            
 
      
Interactive Quiz
How to Use sorted() and .sort() in Python 
      
In this quiz, you'll test your understanding of sorting in Python using sorted() and .sort(). You'll revisit how to sort various types of data in different data structures, customize the order, and work with two different ways of sorting in Python.
Ordering Values With sorted()
In Python, you can sort iterables with the sorted() built-in function. To get started, you’ll work with iterables that contain only one data type.
Sorting Numbers
You can use sorted() to sort a list in Python. In this example, a list of integers is defined, and then sorted() is called with the numbers variable as the argument:
Python
    
    

      
    
>>> numbers = [6, 9, 3, 1]
>>> sorted(numbers)
[1, 3, 6, 9]
>>> numbers
[6, 9, 3, 1]


    
    
    
      Copied!
    
    
  
The output from this code is a new, sorted list. When the original variable is printed, the initial values are unchanged.
This example shows four important characteristics of sorted(): 
You don’t have to define the sorted() function. It’s a built-in function that’s available in any standard installation of Python.
You’re ordering the values in numbers from smallest to largest when you call sorted(numbers). When you pass no additional arguments or parameters,  sorted() orders the values in numbers in ascending order.
You don’t change the original numbers variable because sorted() provides sorted output and doesn’t update the original value in place. 
You get an ordered list as a return value when you call sorted(). 
These points mean that sorted() can be used on a list, and the output can immediately be assigned to a variable:  
Python
    
    

      
    
>>> numbers = [6, 9, 3, 1]
>>> numbers_sorted = sorted(numbers)
>>> numbers_sorted
[1, 3, 6, 9]
>>> numbers
[6, 9, 3, 1]


    
    
    
      Copied!
    
    
  
In this example, a new variable called numbers_sorted now stores the output of the sorted() function.
You can confirm all of these observations by calling help() on sorted():
Python
    
    

      
    
>>> help(sorted)
Help on built-in function sorted in module builtins:

sorted(iterable, /, *, key=None, reverse=False)
    Return a new list containing all items from the iterable in ascending order.

    A custom key function can be supplied to customize the sort order, and the
    reverse flag can be set to request the result in descending order.


    
    
    
      Copied!
    
    
  
You’ll cover the optional arguments key and reverse later in the tutorial.
The first parameter of sorted() is an iterable. That means that you can use sorted() on tuples and sets very similarly:
Python
    
    

      
    
>>> numbers_tuple = (6, 9, 3, 1)
>>> sorted(numbers_tuple)
[1, 3, 6, 9]

>>> numbers_set = {5, 10, 1, 0}
>>> sorted(numbers_set)
[0, 1, 5, 10]


    
    
    
      Copied!
    
    
  
Notice how even though the input was a set and a tuple, the output is a list because sorted() returns a new list by definition. The returned object can be cast to a new type if it needs to match the input type. Be careful if attempting to cast the resulting list back to a set, as a set by definition is unordered:
Python
    
    

      
    
>>> numbers_tuple = (6, 9, 3, 1)
>>> numbers_set = {5, 10, 1, 0}
>>> numbers_tuple_sorted = sorted(numbers_tuple)
>>> numbers_set_sorted = sorted(numbers_set)
>>> numbers_tuple_sorted
[1, 3, 6, 9]
>>> numbers_set_sorted
[0, 1, 5, 10]
>>> tuple(numbers_tuple_sorted)
(1, 3, 6, 9)
>>> set(numbers_set_sorted)
{0, 1, 10, 5}


    
    
    
      Copied!
    
    
  
When you cast the numbers_set_sorted value to a set, it’s unordered, as expected. If you’re curious about how sets work in Python, then you can check out the tutorial Sets in Python.
Read the full article at https://realpython.com/python-sort/ »
[ Improve Your Python With 🐍 Python Tricks 💌 – Get a short & sweet Python Trick delivered to your inbox every couple of days. >> Click here to learn more and see examples ]`,link:"https://realpython.com/python-sort/",pubDate:"2025-02-24T14:00:00.000Z",source:"Real Python",sourceUrl:"https://realpython.com",category:"python"},{id:"https://realpython.com/quizzes/python-sort/",title:"Quiz: How to Use sorted() and .sort() in Python",description:`In this quiz, you’ll test your understanding of
sorting in Python.
By working through this quiz, you’ll revisit how to sort various types of data in different data structures, customize the order, and work with two different ways of sorting in Python.
[ Improve Your Python With 🐍 Python Tricks 💌 – Get a short & sweet Python Trick delivered to your inbox every couple of days. >> Click here to learn more and see examples ]`,link:"https://realpython.com/quizzes/python-sort/",pubDate:"2025-02-24T12:00:00.000Z",source:"Real Python",sourceUrl:"https://realpython.com",category:"python"},{id:"https://rweekly.org//2025-W09.html",title:"R Weekly 2025-W09 nhyris, tisthemachinelearner, Forks",description:`Hello and welcome to this new issue!
\r
				
How to have (my) content shared by R Weekly?
This week’s release was curated by Colin Fay, with help from the R Weekly team members and contributors.
Highlight
nhyris - The minimal framework for transform R shiny application into standalone
tisthemachinelearner: A Lightweight interface to scikit-learn with 2 classes, Classifier and Regressor (in Python and R)
The Dynamic Relationship of Forks with their Upstream Repository
Insights
Why we forked nixpkgs
Rcpp now used by 3000 CRAN packages!
The Dynamic Relationship of Forks with their Upstream Repository
R in Academia
Win a Battle in the Game of Risk
Resources
nhyris - The minimal framework for transform R shiny application into standalone
New Packages
📦 Go Live for More New Pkgs 📦
 -->
📦 Keep up to date wtih CRANberries 📦
CRAN
{GitAI} 0.1.0: Extracts Knowledge from ‘Git’ Repositories
{codelist} 0.1.0: Working with Code Lists
{netknitr} 0.2.1: Knit Network Map for any Dataset
{aftables} 1.0.2: Create Spreadsheet Publications Following Best Practice
{musicXML} 1.0.1: Data Sonification using ‘musicXML’
Updated Packages
🔍 Search on R-universe 🔍
RcppDE 0.1.8 on CRAN: Maintenance
{summarytools} 1.1.0: Tools to Quickly and Neatly Summarize Data - diffify
{duckdb} 1.2.0: DBI Package for the DuckDB Database Management System - diffify
{cpp11armadillo} 0.4.4: An ‘Armadillo’ Interface - diffify
{parseLatex} 0.3.0: Parse ‘LaTeX’ Code - diffify
{flint} 0.0.2: Fast Library for Number Theory - diffify
Videos and Podcasts
Listen to the R-Weekly Highlights Podcast
Collaborating Across Pharma: Open Source Highlights from the PHUSE US Connect 2024 Keynote
Tutorials
tisthemachinelearner: A Lightweight interface to scikit-learn with 2 classes, Classifier and Regressor (in Python and R)
Burn Notice
Happy Valentine’s Day
How to Replace Values in Data Frame Based on Lookup Table in R
3MW (Host Quarto Projects on Azure)
5 Levels of Data Wrangling Every R User Must Master
Creating a Finder Smart Folder of your RStudio Project files to enable super fast project launching
Creating R, Python, Stata, and Julia tutorial worksheets (with and without solutions) using Quarto
Creating effectively multi-engine Quarto documents using Quarto’s embed shortcode
A First Look at TimeGPT using nixtlar
How to use a histogram as a legend in {ggplot2}

-->

R Project Updates
Updates from R Core:
Call for Participation
Shiny in Production 2025: Call for Abstracts
Government Advances in Statistical Programming (GASP) Conference 2025: Call for Abstracts
Upcoming Events in 3 Months
Events in 3 Months:
A list of R conferences and meetings
This week’s local R-User and applied stats events
Weekly R Workshops for Ukraine
Grants & Funding
Discover posit::conf as an Opportunity Scholar
Connect
Join the Data Science Learning Community`,link:"https://rweekly.org//2025-W09.html",pubDate:"Mon, 24 Feb 2025 00:00:00 +0000",source:"R Weekly",sourceUrl:"https://rweekly.org",category:"r-lang"},{id:"https://realpython.com/podcasts/rpp/240/",title:"The Real Python Podcast – Episode #240: Telling Effective Stories With Your Python Visualizations",description:`How do you make compelling visualizations that best convey the story of your data? What methods can you employ within popular Python tools to improve your plots and graphs? This week on the show, Matt Harrison returns to discuss his new book "Effective Visualization: Exploiting Matplotlib & Pandas."
[ Improve Your Python With 🐍 Python Tricks 💌 – Get a short & sweet Python Trick delivered to your inbox every couple of days. >> Click here to learn more and see examples ]`,link:"https://realpython.com/podcasts/rpp/240/",pubDate:"2025-02-21T12:00:00.000Z",source:"Real Python",sourceUrl:"https://realpython.com",category:"python"},{id:"https://www.tidyverse.org/blog/2025/02/air/",title:"Air, an extremely fast R formatter",description:`We’re thrilled to announce 
Air, an extremely fast R formatter. Formatters are used to automatically style code, but I find that it’s much easier to show what Air can do rather than tell, so we’ll start with a few examples. In the video below, we’re inside 
Positron and we’re looking at some unformatted code. Saving the file (yep, that’s it!) invokes Air, which automatically and instantaneously formats the code.
Next, let’s go over to 
RStudio. Here we’ve got a pipe chain that could use a little formatting. Like in Positron, just save the file:
Lastly, we’ll jump back into Positron. Rather than formatting a single file on save, you might want to instead format an entire project (particularly when first adopting Air). To do so, just run air format . in a terminal from the project root, and Air will recursively format any R files it finds along the way (smartly excluding known generated files, like cpp11.R). Here we’ll run Air on dplyr for the first time ever, analyzing and reformatting over 150 files instantly:
Within the tidyverse, we’re already using Air in some of our largest packages, like 
dplyr, 
tidyr, and 
recipes.
Throughout the rest of this post you’ll learn what a formatter is, why you’d want to use one, and you’ll learn a little about how Air decides to format your R code.
Note that Air is still in beta, so there may be some breaking changes over the next few releases. We also encourage you to use it in combination with a version control system, like git, so that you can clearly see the changes Air makes. That said, we still feel very confident in the current state of Air, and can’t wait for you to try it!
Installing Air
  
    
      

      

    
  

If you already know how formatters work and want to jump straight in, follow one of the guides below:
For Positron, Air is 
available on OpenVSX as an Extension. Install it from the Extensions pane within Positron, then read our 
Positron guide.
For VS Code, Air is 
available on the VS Code Marketplace as an Extension. Install it from the Extensions pane within VS Code, then read our 
VS Code guide.
For RStudio, Air can be set as an external formatter, but you’ll need to install the command line tool for Air first. Read our 
RStudio guide to get started. Note that this is an experimental feature on the RStudio side, so the exact setup may change a little until it is fully stabilized.
For command line users, Air binaries can be installed using our 
standalone installer scripts.
For both Positron and VS Code, the most important thing to enable after installing the extension is format on save for R. You can do that by adding these lines to your settings.json file:
{
    "[r]": {
        "editor.formatOnSave": true
    }
}


To open your settings.json file, run one of the following from the Command Palette:
Run Preferences: Open User Settings (JSON) to modify global user settings.
Run Preferences: Open Workspace Settings (JSON) to modify project specific settings. You may want to use this instead of setting the user level setting if you drop in on multiple projects, but not all of them use Air. If you work on a project with collaborators, we recommend that you check in these project specific settings to your repository to ensure that every collaborator is using the same formatting settings.
If your preferred editor isn’t listed here, but does support the 
Language Server Protocol, then it is likely that we can add support for Air there as well.
If you have any questions or run into issues installing or using Air, feel free to open an 
issue!
What’s a formatter?
  
    
      

      

    
  

A formatter is in charge of the layout of your R code. Formatters do not change the meaning of code; instead they ensure that whitespace, newlines, and other punctuation conform to a set of rules and standards, such as:
Making sure your code is indented with the appropriate amount of leading whitespace. By default, Air uses 2 spaces for indentation. You will see this indentation in pipelines:
data |>
  ggplot(aes(x, y)) +
  geom_point()


As well as in function calls:
list(
  foo = 1,
  bar = 2
)


Preventing your code from overflowing a given line width. By default, Air uses a line width of 80 characters. It enforces this by splitting long lines of code over multiple lines. For instance, notice how long these expressions are, they would “overflow” past 80 characters:
band_members |> select(name) |> full_join(band_instruments2, by = join_by(name == artist))

left_join <- function(x, y, by = NULL, copy = FALSE, suffix = c(".x", ".y"), ..., keep = NULL) {
  UseMethod("left_join")
}


Air reformats these expressions by switching them from a horizontal layout (called “flat”) to a vertical one (called “expanded”):
band_members |> 
  select(name) |> 
  full_join(band_instruments2, by = join_by(name == artist))

left_join <- function(
  x,
  y,
  by = NULL,
  copy = FALSE,
  suffix = c(".x", ".y"),
  ...,
  keep = NULL
) {
  UseMethod("left_join")
}


Standardizing the whitespace around code elements. Have you ever had difficulties deciphering very dense code?
1+2:3*(4/5)


Air reformats this expression to:
1 + 2:3 * (4 / 5)


How does a formatter improve your workflow?
  
    
      

      

    
  

By using a formatter it might seem like you’re giving up control over the layout of your code. And indeed you are! However, putting Air in charge of styling your code has substantial advantages.
First, it automatically forces you to write legible code that is neither too wide nor too narrow, with proper breathing room around syntactic elements. Having a formatter as a companion significantly improves the process of writing code as you no longer have to think about style - the formatter does that for you!
Second, it reduces friction when working in a team. By agreeing to use a formatter in a project, collaborators no longer have to discuss styling and layout issues. Code sent to you by a colleague will adhere to the standards that you’re used to. Code review no longer has to be about style nitpicks and can focus on the substance of the changes instead.
How does Air decide how to format your code?
  
    
      

      

    
  

Air tries to strike a balance between enforcing rigid rules and allowing authors some control over the layout. Our main source of styling rules is the 
Tidyverse style guide, but we occasionally deviate from these.
There is a trend among modern formatters of being opinionated. Air certainly fits this trend and provides very few 
configuration options, mostly: the indent style (spaces versus tabs), the indent width, and the line width. However, Air also puts code authors in charge of certain aspects of the layout through the notion of persistent line breaks.
In general, Air is in control of deciding where to put vertical space (line breaks) in your code. For instance if you write:
dictionary <- list(bob = "apple",
  jill = "juice")


Air will figure out that this expression fits on a single line without exceeding the line width. It will discard the line break and reformat to:
dictionary <- list(bob = "apple", jill = "juice")


However there are very specific places at which you can insert a line break that Air perceives as persistent:
Before the very first argument in a function call. This:
# Persistent line break after \`(\` and before \`bob\`
dictionary <- list(
  bob = "apple", jill = "juice")


gets formatted as:
dictionary <- list(
  bob = "apple", 
  jill = "juice"
)


Before the very first right-hand side expression in a pipeline. This:
# Persistent line break after \`|>\` and before \`select\`
data |>
  select(foo) |> filter(!bar)


gets formatted as:
data |>
  select(foo) |>
  filter(!bar)


A persistent line break will never be removed by Air. But you can remove it manually. Taking the last example, if you join the first lines like this:
# Removed persistent line break after \`(\`
dictionary <- list(bob = "apple", 
  jill = "juice"
)

# Removed persistent line break after \`|>\`
data |> select(foo) |>
  filter(!bar)


Air will recognize that you’ve removed the persistent line break, and reformat as:
dictionary <- list(bob = "apple", jill = "juice")

data |> select(foo) |> filter(!bar)


The goal of this feature is to strike a balance between being opinionated and recognizing that users often know when taking up more vertical space results in more readable output.
How can I disable formatting?
  
    
      

      

    
  

If you need to disable formatting for a single expression, you can use a # fmt: skip comment. This is particularly useful for manual alignment.
# This skips formatting for \`list()\` and its arguments, retaining the manual alignment
# fmt: skip
list(
  dollar = "USA",
  yen    = "Japan",
  yuan   = "China"
)

# This skips formatting for \`tribble()\` and its arguments
# fmt: skip
tribble(
  ~x, ~y,
   1,  2,
)


If there is a file that Air should skip altogether, you can use a # fmt: skip file comment at the very top of the file.
To learn more about these features, see the 
documentation.
How can I use Air?
  
    
      

      

    
  

As we’ve touched on above, Air can be integrated into your IDE to format code on every save. We expect that this will be the most common way to invoke Air, but there are a few other ways to use Air that we think are pretty cool:
In IDEs:
Format on save
Format selection
At the command line:
Format entire projects with air format .
Set up a git precommit hook to invoke Air before committing
In CI:
Use a GitHub Action to check that each PR conforms to formatting standards with air format . --check1
Use a GitHub Action to automatically format each PR by pushing the results of air format as a commit
We don’t have guides for all of these use cases yet, but the best place to stay up to date is the 
Air website.
How is this different from styler?
  
    
      

      

    
  

Air would not exist without the preexisting work and dedication poured into 
styler. Created by 
Lorenz Walthert and 
Kirill Müller, styler proved that the R community does care about how their code is formatted, and has been the primary implementation of the 
tidyverse style guide for many years. We’ve spoken to Lorenz about Air, and we are all very excited about what Air can do for the future of formatting in R.
Air is different from styler in a few key ways:
Air is much faster. So much so that it enables new ways of using a formatter that were somewhat painful before, like formatting on every save, or formatting entire projects on every pull request.
Air is less configurable. As mentioned above, Air provides very few 
configuration options.
Air respects a line width, with a default of 80 characters.
Air does not require R to run. Unlike styler, which is an R package, Air is written in Rust and is distributed as a pre-compiled binary for many platforms. This makes Air easy to use across IDEs or on CI with very little setup required.
How fast is “extremely fast”?
  
    
      

      

    
  

Air is written in Rust using the formatting infrastructure provided by 
Biome2. This is also the same infrastructure that 
Ruff, the fast Python formatter, originally forked from. Both of those projects are admired for their performance, and Air is no exception.
One goal for Air is for “format on save” to be imperceptibly fast, encouraging you to keep it on at all times. Benchmarking formatters is a bit hand wavy due to some having built in caching, so bear with me, but one way to proxy this performance is by formatting a large single file, for example the 800+ line 
join.R in dplyr. Formatting this takes3:
0.01 seconds with Air
1 second with styler (no cache)
So, ~100x faster for Air! If you make a few changes in the file after the first round of formatting and run the formatter again, then you get something like:
0.01 seconds with Air
0.5 seconds with styler (with cache)
Half a second for styler might not sound that bad (and indeed, for a formatter written in R it’s pretty good), but it’s slow enough that you’ll “feel” it if you try and invoke styler on every save. But 0.01 seconds? You’ll never even know its running!
The differences get even more drastic if you format entire projects. Formatting the ~150 R files in dplyr takes4:
0.3 seconds with Air
100 seconds with styler
Over 300x faster!
Out of curiosity, we also ran Air over all ~900 R files in base R and it finished in under 2 seconds.
Wrapping up
  
    
      

      

    
  

By contributing this formatter to the R community, our objective is threefold:
Vastly improve your enjoyment of writing well-styled R code by removing the chore of editing whitespace.
Reduce friction in collaborative projects by establishing a consistent style once and for all.
Improve the overall readability of R code for the community.
We hope that Air will prove to be a valuable companion in your daily workflow!
The Shiny team already has a 
GitHub Action to help with this. We will likely work on refining this and incorporating it more officially into an Air or r-lib repository. ↩︎
Biome is an open source project maintained by community members, please consider 
sponsoring them! ↩︎
These benchmarks were run with air format R/join.R and styler::style_file("R/join.R"). ↩︎
With air format . and 
styler::style_pkg() ↩︎`,link:"https://www.tidyverse.org/blog/2025/02/air/",pubDate:"Fri, 21 Feb 2025 00:00:00 +0000",source:"Tidyverse Blog",sourceUrl:"https://www.tidyverse.org/blog/",category:"r-lang"},{id:"https://realpython.com/python-pyproject-toml/",title:"How to Manage Python Projects With pyproject.toml",description:`The pyproject.toml file simplifies Python project configuration by unifying package setup, managing dependencies, and streamlining builds. In this tutorial, you’ll learn how it can improve your day-to-day Python setup by exploring its key use cases, like configuring your build system, installing packages locally, handling dependencies, and publishing to PyPI.
By the end of this tutorial, you’ll understand that:
pyproject.toml is a key component for defining a Python project’s build system, specifying requirements and the build backend.
Dependencies and optional dependencies can be managed directly within the pyproject.toml file or combined with the traditional requirements.txt.
Scripts for command-line execution are defined in the [project.scripts] section, allowing you to automate common tasks.
Dynamic metadata in pyproject.toml enables flexible project configuration, with attributes like version being resolved at build time.
The Python packaging ecosystem includes various tools that leverage pyproject.toml for project management, enhancing collaboration, flexibility, and configurability.
To get the most out of this tutorial, you should be familiar with the basics of Python. You should know how to import modules and install packages with pip. You should also be able to navigate the terminal and understand how to create virtual environments.
The pyproject.toml package configuration file is the relatively new (circa 2016) standard in the Python ecosystem, intended to unify package configuration. It’s also supported by many major tools for managing your Python projects. Some of the project management tools that support the pyproject.toml file are pip, Setuptools, Poetry, Flit, pip-tools, Hatch, PDM, and uv.
The pyproject.toml file is a configuration file written in the TOML syntax. For many Python project management needs, a minimal pyproject.toml file doesn’t have to contain a lot of information:
TOML
    pyproject.toml
    
[project]
name = "a-sample-project"
version = "1.0.0"


    
    
    
      Copied!
    
    
  
Different tools have different requirements, but the name and version of your project are officially the only required fields in the [project] table. Typically, you’ll want to include more fields, but if you only want to include a minimal pyproject.toml file, then that’s all you’ll need to get started. Just include this file at the root of your project.
To understand more about why using a pyproject.toml file may be useful, you’ll explore a sample CLI application to show you how the pyproject.toml file fits into a standard project workflow.
Get Your Code: Click here to download the free sample code  you’ll use to learn how to manage Python projects with pyproject.toml.
Setting Up a Python Project With pyproject.toml
The example project you’ll work with in this tutorial is inspired by the classic cowsay program. The example project is called snakesay and—once installed—you can run it with the ssay command:
Shell
    
    

      
    
$ ssay Hello, World!

 _______________
( Hello, World! )
 ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
  \\
   \\    ___
    \\  (o o)
        \\_/ \\
         λ \\ \\
           _\\ \\_
          (_____)_
         (________)=Oo°


    
    
    
      Copied!
    
    
  
As you can see, the program takes a string argument and echoes it back with a bit of ASCII art.
The structure of the example project follows a popular pattern for Python projects:
snakesay-project/    ← The project root
│
├── snakesay/        ← The main module of this project
│   ├── __init__.py
│   ├── __main__.py  ← The entry point to snakesay
│   └── snake.py     ← The core of the program
│
├── .gitignore
├── LICENSE
├── pyproject.toml   ← What this tutorial is about
└── README.md


The directory snakesay-project is the root location of your project. The main package, where most of the code goes, is the snakesay directory.
Note: A popular and often recommended project layout is the src layout:
snakesay-project/
│
├── src/
│   └── snakesay/
│       ├── __init__.py
│       ├── __main__.py
│       └── snake.py
...


This layout has two key advantages: it makes the location of the source code more explicit and helps avoid some of the issues that can arise with more complex configurations, especially with testing.
At the root level of the project, you’ve got the star of this tutorial, the pyproject.toml file. In this project, the pyproject.toml file currently contains the following content:
TOML
    pyproject.toml
    
[build-system]
requires = ["setuptools"]
build-backend = "setuptools.build_meta"

[project]
name = "snakesay"
version = "1.0.0"

[project.scripts]
ssay = "snakesay.__main__:main"

[tool.setuptools.packages.find]
where = ["."]


    
    
    
      Copied!
    
    
  
As the tutorial progresses, you’ll examine what all this means in more detail. You’ll also expand this pyproject.toml to include more tables and fields. As it stands, this pyproject.toml file includes:
The [build-system] table: Specifies what’s needed to build the project. The requires key lists the required packages, and the build-backend key defines the module used for the build process.
The [project] table: Contains essential project metadata and has plenty of optional fields, some of which you’ll explore later in this tutorial.
The [project.scripts] table: Allows you to define one or several executable commands to be able to call your application from the command line. In this case, it’s ssay, but it can be anything you like.
The [tools.setuptools.packages.find] table: Tells your build-system, Setuptools, where to find packages in your project. In this case, it’s just the root directory.
With this pyproject.toml file, you’ve already defined all the configuration you need to build and run your project.
The [tools.setuptools.packages.find] table isn’t required since the value of ["."] is the default. Even though it’s the default, sometimes Setuptools can’t find other modules in the project root, and explicitly setting the where key can help with this.
Setuptools has various defaults for package discovery, which include the current project layout and the src layout.
Read the full article at https://realpython.com/python-pyproject-toml/ »
[ Improve Your Python With 🐍 Python Tricks 💌 – Get a short & sweet Python Trick delivered to your inbox every couple of days. >> Click here to learn more and see examples ]`,link:"https://realpython.com/python-pyproject-toml/",pubDate:"2025-02-19T14:00:00.000Z",source:"Real Python",sourceUrl:"https://realpython.com",category:"python"},{id:"https://realpython.com/courses/concatenating-strings-efficiently/",title:"Concatenating Strings in Python Efficiently",description:`Python string concatenation is a fundamental operation that combines multiple strings into a single string. In Python, you can concatenate strings using the + operator or append them with +=. For more efficient concatenation, especially when working with lists of strings, the .join() method is recommended. Other techniques include using StringIO for large datasets and the print() function for quick screen output.
By the end of this video course, you’ll understand that you can:
Concatenate strings in Python using the + and += operators.
Use += to append a string to an existing string.
Use the .join() method to combine strings in a list in Python.
Handle a stream of strings efficiently by using StringIO as a container with a file-like interface.
[ Improve Your Python With 🐍 Python Tricks 💌 – Get a short & sweet Python Trick delivered to your inbox every couple of days. >> Click here to learn more and see examples ]`,link:"https://realpython.com/courses/concatenating-strings-efficiently/",pubDate:"2025-02-18T14:00:00.000Z",source:"Real Python",sourceUrl:"https://realpython.com",category:"python"},{id:"https://realpython.com/python-news-february-2025/",title:"Python News Roundup: February 2025",description:`The new year has brought a flurry of activity to the Python community. New bugfix releases of Python 3.12 and 3.13 show that the developers seemingly never sleep. A new type of interpreter is slated for the upcoming Python 3.14 as part of ongoing efforts to improve Python’s performance.
Poetry takes a giant leap toward compatibilty with other project management tools with the release of version 2. If you’re interested in challenging yourself with some programming puzzles, check out the new season of Coding Quest.
Time to jump in! Enjoy this tour of what’s happening in the world of Python!
Poetry Version 2 Adds Compatibility
Poetry is a trusted and powerful project and dependency manager for Python. Initially created by Sébastien Eustace in 2018, it reached its Version 1 milestone in 2019. Since then, it has grown to be one of the most commonly used tools for managing Python projects.
On January 5, 2025, the Poetry team announced the release of Poetry 2.0.0. This major release comes with many updates. One of the most requested changes is compatibility with PEP 621, which describes how to specify project metadata in pyproject.toml.
Most of the common tools for project management, including setuptools, uv, Hatch, Flit, and PDM, use pyproject.toml and the project table in a consistent way, as defined in PEP 621. With Poetry on board as well, you can more simply migrate your project from one tool to another.
This improved compatibility with the rest of the Python eco-system comes with a price. There are a few breaking changes in Poetry 2 compared to earlier versions. If you’re already using Poetry, you should take care when updating to the latest version.
The changelog describes all changes, and you can read the documentation for advice on how to migrate your existing projects to the new style of configuration. 
The Python Team Releases Bugfix Versions for 3.12 and 3.13
Read the full article at https://realpython.com/python-news-february-2025/ »
[ Improve Your Python With 🐍 Python Tricks 💌 – Get a short & sweet Python Trick delivered to your inbox every couple of days. >> Click here to learn more and see examples ]`,link:"https://realpython.com/python-news-february-2025/",pubDate:"2025-02-17T14:00:00.000Z",source:"Real Python",sourceUrl:"https://realpython.com",category:"python"},{id:"https://rweekly.org//2025-W08.html",title:"R Weekly 2025-W08 CRAN, Lit Review, Laziness",description:`Hello and welcome to this new issue!
\r
				
How to have (my) content shared by R Weekly?
This week’s release was curated by Eric Nantz, with help from the R Weekly team members and contributors.
Highlight
Is CRAN Holding R Back?
How to use large language models to assist in systematic literature reviews
Lazy introduction to laziness in R
Insights
Lazy introduction to laziness in R
Is CRAN Holding R Back?
R in the Real World
Forecasting Food Commodity Prices - Ethiopia

R version of survivalist: Probabilistic model-agnostic survival analysis using scikit-learn, xgboost, lightgbm (and conformal prediction)
How to use large language models to assist in systematic literature reviews
Gold’s Rise Over Silver Amid Trump Tariffs
R in Organizations
Open-Source Adoption in Pharma: Opportunities and Challenges
R in Academia
Estimating a Bayesian proportional hazards model
Resources
Large Language Model tools for R
New Packages
📦 Go Live for More New Pkgs 📦
 -->
📦 Keep up to date wtih CRANberries 📦
CRAN
{TransProR} 1.0.2: Analysis and Visualization of Multi-Omics Data

{odbr} 0.1.1: Download Data from Brazil’s Origin Destination Surveys
{ClusterGVis} 0.1.2: One-Step to Cluster and Visualize Gene Expression Data
{zonebuilder} 0.1.0: Create and Explore Geographic Zoning Systems
{tomledit} 0.1.0: Parse, Read, and Edit ‘TOML’
{rchroma} 0.1.0: A Client for ‘ChromaDB’
{swash} 1.0.0: Swash-Backwash Model for the Single Epidemic Wave
{BayesChange} 1.1.1: Bayesian Methods for Change Points Analysis
{rockx} 0.0.2: Easily Import Data from Your ‘ODK-X Sync Endpoint’
{manydist} 0.4.3: Unbiased Distances for Mixed-Type Data
{BIOMASS} 2.1.12: Estimating Aboveground Biomass and Its Uncertainty in Tropical Forests
{Surrogate} 3.3.3: Evaluation of Surrogate Endpoints in Clinical Trials
{streamy} 0.1.0: Inline Asynchronous Generator Results into Documents
{parseLatex} 0.2.1: Parse ‘LaTeX’ Code
{schwabr} 0.1.2: ‘Schwab API’ Interface for R
{metaquant} 0.1.1: Estimating Means, Standard Deviations and Visualising Distributions using Quantiles
{PatientLevelPrediction} 6.4.0: Develop Clinical Prediction Models Using the Common Data Model
{bushtucker} 0.1.0: ‘I’m a Celebrity Get Me Out of Here’ Data
{siera} 0.1.0: Generate Analysis Results Programmes Using ARS Metadata
{BayesERtools} 0.2.1: Bayesian Exposure-Response Analysis Tools
{retmort} 1.0.0: Estimate User-Based Tagging Mortality and Tag Loss in Mark-Recapture Studies
Updated Packages
🔍 Search on R-universe 🔍
{valentine} 2025.2.14: Spread the Love for R Packages with Poetry - diffify
{details} 0.4.0: Create Details HTML Tag for Markdown and Package Documentation - diffify
RcppUUID 1.2.0 on CRAN: Adding Clock-based UUIDs
{R6} 2.6.1: Encapsulated Classes with Reference Semantics - diffify
{parsnip} 1.3.0: A Common API to Modeling and Analysis Functions - diffify
{censored} 0.3.3: ‘parsnip’ Engines for Survival Models - diffify
{transltr} 0.1.0: Support Many Languages in R - diffify
{BAwiR} 1.3.4: Analysis of Basketball Data - diffify
{ade4} 1.7-23: Analysis of Ecological Data: Exploratory and Euclidean Methods in Environmental Sciences - diffify
{teal.logger} 0.3.2: Logging Setup for the ‘teal’ Family of Packages - diffify
{teal.code} 0.6.1: Code Storage and Execution Class for ‘teal’ Applications - diffify
{teal.transform} 0.6.0: Functions for Extracting and Merging Data in the ‘teal’ Framework - diffify
{groqR} 0.0.3: A Coding Assistant using the Fast AI Inference ‘Groq’ - diffify
{dawaR} 0.3.0: An API Wrapper for ‘DAWA’ - ‘The Danish Address Web API’ - diffify
{collegeScorecard} 0.2.0: US College Scorecard Data - diffify
{cli} 3.6.4: Helpers for Developing Command Line Interfaces - diffify
{cheapr} 1.0.1: Simple Functions to Save Time and Memory - diffify
{psborrow2} 0.0.4.0: Bayesian Dynamic Borrowing Analysis and Simulation - diffify
{lintr} 3.2.0: A ‘Linter’ for R Code - diffify
{clustermq} 0.9.7: Evaluate Function Calls on HPC Schedulers (LSF, SGE, SLURM, PBS/Torque) - diffify
Videos and Podcasts
Convincing IT that R packages are safe
AI & Traditional Functions with R & {ellmer}
Listen to the R-Weekly Highlights Podcast
Shiny Apps
ShinyConf24 - Keynote: Decade of Shiny in Action: Case Studies from Three Enterprises
Tutorials
Your Definitive Guide to Seamless Authentication with Auth0 in Shiny Apps
Using options() to inject a function’s internal variable for reproducible testing
How to Combine a List of Matrices in R: A Comprehensive Guide
3MW (Use AWS Textract With R & {paws})
A plumber API to filter and aggregate datasets

-->

R Project Updates
Updates from R Core:
Call for Participation
Upcoming Events in 3 Months
Events in 3 Months:
Sign Up for Appsilon’s Tiny Shiny Hackathon: Build, Compete, and Win!
Hitting web APIs with {httr2} in R workshop
A list of R conferences and meetings
This week’s local R-User and applied stats events
Weekly R Workshops for Ukraine
Connect
Join the Data Science Learning Community
Quotes of the Week
  
 
Post by @dgkf@fosstodon.org
 View on Mastodon
  


  
 
Post by @kupac@functional.cafe
 View on Mastodon`,link:"https://rweekly.org//2025-W08.html",pubDate:"Sun, 16 Feb 2025 00:00:00 +0000",source:"R Weekly",sourceUrl:"https://rweekly.org",category:"r-lang"},{id:"https://realpython.com/podcasts/rpp/239/",title:"The Real Python Podcast – Episode #239: Behavior-Driven vs Test-Driven Development & Using Regex in Python",description:`What is behavior-driven development, and how does it work alongside test-driven development? How do you communicate requirements between teams in an organization? Christopher Trudeau is back on the show this week, bringing another batch of PyCoder's Weekly articles and projects.
[ Improve Your Python With 🐍 Python Tricks 💌 – Get a short & sweet Python Trick delivered to your inbox every couple of days. >> Click here to learn more and see examples ]`,link:"https://realpython.com/podcasts/rpp/239/",pubDate:"2025-02-14T12:00:00.000Z",source:"Real Python",sourceUrl:"https://realpython.com",category:"python"},{id:"https://realpython.com/python-keywords/",title:"Python Keywords: An Introduction",description:`Python keywords are reserved words with specific functions and restrictions in the language. Currently, Python has thirty-five keywords and four soft keywords. These keywords are always available in Python, which means you don’t need to import them. Understanding how to use them correctly is fundamental for building Python programs.
By the end of this tutorial, you’ll understand that:
There are 35 keywords and four soft keywords in Python.
You can get a list of all keywords using keyword.kwlist from the keyword module.
Soft keywords in Python act as keywords only in specific contexts.
print and exec are keywords that have been deprecated and turned into functions in Python 3.
In this article, you’ll find a basic introduction to all Python keywords and soft keywords along with other resources that will be helpful for learning more about each keyword.
Get Your Cheat Sheet: Click here to download a free cheat sheet that summarizes the main keywords in Python.
 Take the Quiz: Test your knowledge with our interactive “Python Keywords: An Introduction” quiz. You’ll receive a score upon completion to help you track your learning progress:

            
 
      
Interactive Quiz
Python Keywords: An Introduction 
      
In this quiz, you'll test your understanding of Python keywords and soft keywords. These reserved words have specific functions and restrictions in Python, and understanding how to use them correctly is fundamental for building Python programs.
Python Keywords
Python keywords are special reserved words that have specific meanings and purposes and can’t be used for anything but those specific purposes. These keywords are always available—you’ll never have to import them into your code.
Python keywords are different from Python’s built-in functions and types. The built-in functions and types are also always available, but they aren’t as restrictive as the keywords in their usage. 
An example of something you can’t do with Python keywords is assign something to them. If you try, then you’ll get a SyntaxError. You won’t get a SyntaxError if you try to assign something to a built-in function or type, but it still isn’t a good idea. For a more in-depth explanation of ways keywords can be misused, check out Invalid Syntax in Python: Common Reasons for SyntaxError.
There are thirty-five keywords in Python. Here’s a list of them, each linked to its relevant section in this tutorial:
False
await
else
import
pass


None
break
except
in
raise


True
class
finally
is
return


and
continue
for
lambda
try


as
def
from
nonlocal
while


assert
del
global
not
with


async
elif
if
or
yield




Two keywords have additional uses beyond their initial use cases. The else keyword is also used with loops and with try and except in addition to in conditional statements. The as keyword is most commonly used in import statements, but also used with the with keyword.
The list of Python keywords and soft keywords has changed over time. For example, the await and async keywords weren’t added until Python 3.7. Also, both print and exec were keywords in Python 2.7 but were turned into built-in functions in Python 3 and no longer appear in the keywords list.
Python Soft Keywords
As mentioned above, you’ll get an error if you try to assign something to a Python keyword. Soft keywords, on the other hand, aren’t that strict. They syntactically act as keywords only in certain conditions.
This new capability was made possible thanks to the introduction of the PEG parser in Python 3.9, which changed how the interpreter reads the source code.
Leveraging the PEG parser allowed for the introduction of structural pattern matching in Python. In order to use intuitive syntax, the authors picked match, case, and _ for the pattern matching statements. Notably, match and case are widely used for this purpose in many other programming languages.
To prevent conflicts with existing Python code that already used match, case, and _ as variable or function names, Python developers decided to introduce the concept of soft keywords.
Currently, there are four soft keywords in Python:
match
case
_
type




You can use the links above to jump to the soft keywords you’d like to read about, or you can continue reading for a guided tour.
Value Keywords: True, False, None
There are three Python keywords that are used as values. These values are singleton values that can be used over and over again and always reference the exact same object. You’ll most likely see and use these values a lot.
There are a few terms used in the sections below that may be new to you. They’re defined here, and you should be aware of their meaning before proceeding:
Read the full article at https://realpython.com/python-keywords/ »
[ Improve Your Python With 🐍 Python Tricks 💌 – Get a short & sweet Python Trick delivered to your inbox every couple of days. >> Click here to learn more and see examples ]`,link:"https://realpython.com/python-keywords/",pubDate:"2025-02-12T14:00:00.000Z",source:"Real Python",sourceUrl:"https://realpython.com",category:"python"},{id:"https://realpython.com/quizzes/python-keywords/",title:"Quiz: Python Keywords: An Introduction",description:`In this quiz, you’ll test your understanding of Python Keywords.
Python keywords are reserved words with specific functions and restrictions in the language. These keywords are always available in Python, which means you don’t need to import them. Understanding how to use them correctly is fundamental for building Python programs.
[ Improve Your Python With 🐍 Python Tricks 💌 – Get a short & sweet Python Trick delivered to your inbox every couple of days. >> Click here to learn more and see examples ]`,link:"https://realpython.com/quizzes/python-keywords/",pubDate:"2025-02-12T12:00:00.000Z",source:"Real Python",sourceUrl:"https://realpython.com",category:"python"},{id:"https://realpython.com/courses/build-command-line-todo-app-typer/",title:"Building a Python Command-Line To-Do App With Typer",description:`Building an application to manage your to-do list can be an interesting project when you’re learning a new programming language or trying to take your skills to the next level. In this video course, you’ll build a functional to-do application for the command line using Python and Typer, which is a relatively young library for creating powerful command-line interface (CLI) applications in almost no time.
With a project like this, you’ll apply a wide set of core programming skills while building a real-world application with real features and requirements.
In this video course, you’ll learn how to:
Build a functional to-do application with a Typer CLI in Python
Use Typer to add commands, arguments, and options to your to-do app
Test your Python to-do application with Typer’s CliRunner and pytest
[ Improve Your Python With 🐍 Python Tricks 💌 – Get a short & sweet Python Trick delivered to your inbox every couple of days. >> Click here to learn more and see examples ]`,link:"https://realpython.com/courses/build-command-line-todo-app-typer/",pubDate:"2025-02-11T14:00:00.000Z",source:"Real Python",sourceUrl:"https://realpython.com",category:"python"},{id:"https://realpython.com/python-join-string/",title:"How to Join Strings in Python",description:`Python’s built-in string method .join() lets you combine string elements from an iterable into a single string, using a separator that you specify. You call .join() on the separator, passing the iterable of strings to join.
By the end of this tutorial, you’ll understand that:
You use .join() in Python to combine string elements with a specified separator.
A separator is the piece of text you want inserted between each substring.
To join list elements, you call .join() on a separator string, passing the list as the argument.
.join() inserts the separator between each list element to form a single string.
The .join() method returns a new string that is the concatenation of the elements in the iterable, separated by the specified string.
For smaller string concatenation tasks, you can use the concatenation operator (+) or f-strings instead of .join().
Python’s built-in str.join() method gives you a quick and reliable way to combine multiple strings into a single string. Whether you need to format output or assemble data for storage, .join() provides a clean and efficient approach for joining strings from an iterable.
In the upcoming sections, you’ll learn the basic usage of .join() to concatenate strings effectively. You’ll then apply that knowledge to real-world scenarios, from building CSV files to constructing custom log outputs. You’ll also discover some surprising pitfalls and learn how to avoid them.
Get Your Code: Click here to download the free sample code  that shows you how to join strings in Python.
 Take the Quiz: Test your knowledge with our interactive “How to Join Strings in Python” quiz. You’ll receive a score upon completion to help you track your learning progress:

            
 
      
Interactive Quiz
How to Join Strings in Python 
      
Test your understanding of Python's .join() string method for combining strings, handling edge cases, and optimizing performance.
How to Join Strings in Python Using .join()
To use the string method .join(), you call .join() on a separator string and pass an iterable of other strings as the argument. The method returns a single string, where it has inserted the separator string between each element of the iterable:
Python
    
    

      
    
>>> words = ["Time", "flies", "like", "an", "arrow!"]
>>> " ".join(words)
'Time flies like an arrow!'


    
    
    
      Copied!
    
    
  
In this example, you joined a list of words into one sentence, separated by spaces.
At first glance, this usage might look a little backward. In many other string operations, you call the method on the main string that you want to manipulate. However, with .join(), you call the method on the separator string, then pass the iterable of strings that you want to combine:
Python
    
    

      
    
>>> separator = " "
>>> separator.join(words)
'Time flies like an arrow!'


    
    
    
      Copied!
    
    
  
This example achieves the same result as the earlier one but splits the process into two steps. Defining separator separately makes the code more readable and avoids the potentially odd-looking syntax of calling .join() directly on a short string literal.
Note: Remember that .join() is a string method, which means that you’ll need to call it on a single string object. Keeping that in mind may help you remember why you need to call it on the separator string.
You rarely see code that’s written in multiple steps where you assign the separator string to a variable, like you did in the example above.
In typical usage, you call .join() directly on the separator string, all in one line. This approach is more concise and highlights that any valid string can be your separator, whether it’s whitespace, a dash, or a multicharacter substring.
Join With an Empty String
What if you don’t want any separator at all, but just want to concatenate the items? One valid approach is to use an empty string ("") as the separator:
Python
    
    

      
    
>>> letters = ["A", "B", "C", "D"]
>>> "".join(letters)
'ABCD'


    
    
    
      Copied!
    
    
  
This code snippet concatenates the letters in the list, forming a single string "ABCD". Using an empty string as the separator is a great way to assemble strings without a delimiter between them.
Combine Strings of Characters
Since .join() can take any iterable of strings—not just lists—you can even pass a string as an argument. Because strings are iterable, Python iterates over each character in that string, considering each character as a separate element:
Python
    
    

      
    
>>> characters = "ABCD"
>>> ",".join(characters)
'A,B,C,D'


    
    
    
      Copied!
    
    
  
By calling .join() on "," and passing the string characters, you effectively place a comma between every single character in "ABCD". This might not always be what you intend, but it’s a neat trick to keep in mind if you ever need to treat each character as a separate element.
Read the full article at https://realpython.com/python-join-string/ »
[ Improve Your Python With 🐍 Python Tricks 💌 – Get a short & sweet Python Trick delivered to your inbox every couple of days. >> Click here to learn more and see examples ]`,link:"https://realpython.com/python-join-string/",pubDate:"2025-02-10T14:00:00.000Z",source:"Real Python",sourceUrl:"https://realpython.com",category:"python"},{id:"https://rweekly.org//2025-W07.html",title:"R Weekly 2025-W07 Monochrome plots, Tidying text, Rlinguo",description:`Hello and welcome to this new issue!
\r
				
How to have (my) content shared by R Weekly?
This week’s release was curated by Jonathan Carroll, 
with help from the RWeekly team members and contributors. This issue includes 
some posts we overlooked over the end of year break.
Highlight
Designing monochrome data visualisations
The life changing magic of tidying text files
Rlinguo — Why Did We Build It?
Insights
Exploring the bioRxiv API with R, httr2, rvest, tidytext, and Datawrapper
Rlinguo — Why Did We Build It?
Kerning and Kerning in a Widening Gyre
Key considerations for retiring/superseding an R package
Designing monochrome data visualisations

3MW (Save Data at AWS S3 With {paws})
How to Combine Lists in R: A Complete Guide with Examples
How to Append Values to List in R: A Complete Guide with Examples
How to Append Values to a Vector Using a Loop in R: A Comprehensive Guide
How to dynamically aggregate any dataset in R with purrr and dplyr
Simpson’s Paradox in a Logistic Regression
The life changing magic of tidying text files
Depression incidence by county and vote for Trump by @ellis2013nz
Should you Submit Papers before Christmas? Submission Percentages across Months of the Year
Launch RStudio, Positron, and other Data Science apps from your Finder Toolbar
Introducing the {pipeflow} package
Creating an animated Christmas tree in R
Impact of Trump’s Win on Financial ETFs
Speak at posit::conf(2025)!
Dyson’s Algorithm for the Twelve Coins Problem
Resources
mirai v2.0 - easier distributed computing, mirai cancellation, tidyverse purrr integration.
New Packages
📦 Go Live for More New Pkgs 📦
 -->
📦 Keep up to date wtih CRANberries 📦
CRAN
RcppUUID 1.1.2 on CRAN: Newly Adopted Package
{ggsurveillance} 0.1.1: Tools for Outbreak Investigation and Infectious Disease Surveillance, like Epicurves in ‘ggplot2’
{tergo} 0.1.8: Style Your Code Fast
{kollaR} 1.0.3: Filtering, Visualization and Analysis of Eye Tracking Data
{taxize} 0.10.0: Taxonomic Information from Around the Web
{tall} 0.1.0: Text Analysis for All
{watcher} 0.1.0: Watch the File System for Changes
{SQLFormatteR} 0.0.1: Format SQL Queries
{shiny2docker} 0.0.1: Generate Dockerfiles for ‘Shiny’ Applications
{nlpembeds} 1.0.0: Natural Language Processing Embeddings
{shinyr} 0.4.2: Data Insights Through Inbuilt R Shiny App
{shinykanban} 0.0.1: Create Kanban Board in Shiny Applications
{authoritative} 0.1.0: Parse and Deduplicate Author Names
{raybevel} 0.2.2: Generates Polygon Straight Skeletons and 3D Bevels
{autoimport} 0.1.1: Automatic Generation of @importFrom Tags
{timeplyr} 1.0.0: Fast Tidy Tools for Date and Date-Time Manipulation
GitHub
ausvotesTR - an R package for exploring Australian federal political donations
Updated Packages
🔍 Search on R-universe 🔍
New version of package gDefrag
zigg 0.0.2 on CRAN: Micromaintenance
RcppArmadillo 14.2.3-1 on CRAN: Small Upstream Fix
{cocoon} 0.2.0: Extract, Format, and Print Statistical Output - diffify
{happign} 0.3.2: R Interface to French Geospatiale data from ‘IGN’ Web Services - diffify
{string2path} 0.2.0: Rendering Font into ‘data.frame’ - diffify
{tidyHeatmap} 1.11.6: A Tidy Implementation of Heatmap - diffify
{openrouteservice} 0.6.2: An ‘openrouteservice’ API Client - diffify
{rbioapi} 0.8.2: User-Friendly R Interface to Biologic Web Services’ API - diffify
{renv} 1.1.1: Project Environments - diffify
{zigg} 0.0.2: Lightweight Interfaces to the ‘Ziggurat’ Pseudo Random Number Generator - diffify
{paws.common} 0.8.0: Paws Low-Level Amazon Web Services API - diffify
{jsonvalidate} 1.5.0: Validate ‘JSON’ Schema - diffify
{duckplyr} 1.0.0: A ‘DuckDB’-Backed Version of ‘dplyr’ - diffify
{rayrender} 0.38.8: Build and Raytrace 3D Scenes - diffify
{emayili} 0.9.3: Send Email Messages - diffify
{ellmer} 0.1.1: Chat with Large Language Models - diffify
{checkglobals} 0.1.3: Static Analysis of R-Code Dependencies - diffify
{arcpullr} 0.3.0: Pull Data from an ‘ArcGIS REST’ API - diffify
{dibble} 0.3.1: Dimensional Data Frames - diffify
{urlparse} 0.2.0: Fast Simple URL Parser - diffify
{convertid} 0.1.10: Convert Gene IDs Between Each Other and Fetch Annotations from
Biomart - diffify
{RcppArmadillo} 14.2.3-1: ‘Rcpp’ Integration for the ‘Armadillo’ Templated Linear Algebra Library - diffify
{gemini.R} 0.8.0: Interface for ‘Google Gemini’ API - diffify
{purrr} 1.0.4: Functional Programming Tools - diffify
{sessioninfo} 1.2.3: R Session Information - diffify
{fishmethods} 1.13-1: Fishery Science Methods and Models - diffify
{super} 0.0.5: Interpreted String Literals - diffify
{shinyscholar} 0.2.5: A Template for Creating Reproducible ‘shiny’ Applications - diffify
{plotthis} 0.5.1: High-Level Plotting Built Upon ‘ggplot2’ and Other Plotting Packages - diffify
{ggbreak} 0.1.4: Set Axis Break for ‘ggplot2’ - diffify
{primes} 1.6.1: Fast Functions for Prime Numbers - diffify
{miceFast} 0.8.5: Fast Imputations Using ‘Rcpp’ and ‘Armadillo’ - diffify
{tidyterra} 0.7.0: ‘tidyverse’ Methods and ‘ggplot2’ Helpers for ‘terra’ Objects - diffify
{mongolite} 3.0.1: Fast and Simple ‘MongoDB’ Client for R - diffify
{lessR} 4.4.1: Less Code, More Results - diffify
{crew} 1.0.0: A Distributed Worker Launcher Framework - diffify
{quickcode} 1.0.5: Quick and Essential ‘R’ Tricks for Better Scripts - diffify
Videos and Podcasts
Listen to the R-Weekly Highlights Podcast
Tutorials
A simple test of the martingale hypothesis in esgtoolkit

-->

R Project Updates
Updates from R Core:
Call for Participation
Upcoming Events in 3 Months
Events in 3 Months:
A list of R conferences and meetings
This week’s local R-User and applied stats events
Weekly R Workshops for Ukraine
Connect
Join the Data Science Learning Community
rtistry`,link:"https://rweekly.org//2025-W07.html",pubDate:"Mon, 10 Feb 2025 00:00:00 +0000",source:"R Weekly",sourceUrl:"https://rweekly.org",category:"r-lang"},{id:" https://julialang.org/blog/2025/02/starting-workgroups/index.html ",title:`
      So, You Want to Start a Julia Workgroup?  
  `,description:"Thoughts and advice on starting your own Julia community workgroup.",link:" https://julialang.org/blog/2025/02/starting-workgroups/index.html ",pubDate:"Mon, 10 Feb 2025 00:00:00 +0000",source:"Julia Language Blog",sourceUrl:"https://julialang.org/blog/",category:"julia"},{id:"https://realpython.com/podcasts/rpp/238/",title:"The Real Python Podcast – Episode #238: Charlie Marsh: Accelerating Python Tooling With Ruff and uv",description:`Are you looking for fast tools to lint your code and manage your projects? How is the Rust programming language being used to speed up Python tools? This week on the show, we speak with Charlie Marsh about his company, Astral, and their tools, uv and Ruff.
[ Improve Your Python With 🐍 Python Tricks 💌 – Get a short & sweet Python Trick delivered to your inbox every couple of days. >> Click here to learn more and see examples ]`,link:"https://realpython.com/podcasts/rpp/238/",pubDate:"2025-02-07T12:00:00.000Z",source:"Real Python",sourceUrl:"https://realpython.com",category:"python"},{id:"https://realpython.com/quizzes/python-for-loop/",title:'Quiz: Python "for" Loops: The Pythonic Way',description:`In this quiz, you’ll test your understanding of Python’s for loop.
By working through this quiz, you’ll revisit how to iterate over items in a data collection, how to use range() for a predefined number of iterations, and how to use enumerate() for index-based iteration.
[ Improve Your Python With 🐍 Python Tricks 💌 – Get a short & sweet Python Trick delivered to your inbox every couple of days. >> Click here to learn more and see examples ]`,link:"https://realpython.com/quizzes/python-for-loop/",pubDate:"2025-02-06T12:00:00.000Z",source:"Real Python",sourceUrl:"https://realpython.com",category:"python"},{id:"https://realpython.com/quizzes/python-join-string/",title:"Quiz: How to Join Strings in Python",description:`In this quiz, you’ll test your understanding of How to Join Strings in Python.
By working through this quiz, you’ll review how to use .join() to combine strings with a specified separator and handle non-string data in iterables. You’ll also revisit how .join() compares to other concatenation methods and how it’s optimized in CPython.
[ Improve Your Python With 🐍 Python Tricks 💌 – Get a short & sweet Python Trick delivered to your inbox every couple of days. >> Click here to learn more and see examples ]`,link:"https://realpython.com/quizzes/python-join-string/",pubDate:"2025-02-06T12:00:00.000Z",source:"Real Python",sourceUrl:"https://realpython.com",category:"python"},{id:"https://realpython.com/python-split-string/",title:"How to Split a String in Python",description:`Python’s .split() method lets you divide a string into a list of substrings based on a specified delimiter. By default, .split() separates at whitespace, including spaces, tabs, and newlines. You can customize .split() to work with specific delimiters using the sep parameter, and control the amount of splits with maxsplit.
By the end of this tutorial, you’ll understand that:
You split a string by spaces in Python using .split() without arguments.
Python’s .split() method can split on custom delimiters when you pass a character or string as an argument.
You limit splits using maxsplit to control the number of substrings Python extracts.
.splitlines() splits multiline strings into individual lines, excluding or including line breaks with the keepends parameter.
re.split() uses regular expressions for splitting strings based on complex patterns.
Exploring these methods will level up your text-processing capabilities and enable you to confidently tackle real-world data parsing challenges.
Get Your Code: Click here to download the free sample code that shows you how to split strings in Python.
 Take the Quiz: Test your knowledge with our interactive “How to Split a String in Python” quiz. You’ll receive a score upon completion to help you track your learning progress:

            
 
      
Interactive Quiz
How to Split a String in Python 
      
In this quiz, you'll test your understanding of Python's .split() method. This method is useful for text-processing and data parsing tasks, allowing you to divide a string into a list of substrings based on a specified delimiter.
How to Split a String in Python Using .split()
The .split() method in Python is a versatile tool that allows you to divide a string into a list of substrings based on a specified delimiter. By default, .split() separates a string at each occurrence of whitespace, which includes spaces, tabs, and newlines. This makes it particularly handy when dealing with plain text where words are separated by spaces:
Python
    
    

      
    
>>> sentence = "Python is a versatile language."
>>> sentence.split()
['Python', 'is', 'a', 'versatile', 'language.']


    
    
    
      Copied!
    
    
  
As you can see, .split() divides the sentence into individual words, removing the spaces in the process. It’s important to note that .split() also strips newlines by default, which might not be immediately obvious:
Python
    
    

      
    
>>> text = """Line one
... Line two
... Line three"""

>>> text.split()
['Line', 'one', 'Line', 'two', 'Line', 'three']


    
    
    
      Copied!
    
    
  
The .split() method treats the newline characters as whitespace, and splits the text into individual words rather than lines. This is a crucial point to remember when working with multiline strings.
The simplicity of .split() makes it a powerful tool for string manipulation. Whether you’re processing text files or parsing user input, using .split() can streamline your workflow.
When you’re faced with the task of cleaning up messy text, you may want to pair .split() with .strip(). You can learn more about using str.strip().split() by expanding the collapsible section below:
Using str.strip().split()Show/Hide
  
You may encounter code that uses .split() in combination with another string method, .strip():
Python
    
    

      
    
>>> text = "    Hello   world  "
>>> text.strip().split()
['Hello', 'world']


    
    
    
      Copied!
    
    
  
In this example, you’re dealing with text that contains whitespace characters at the beginning and end of text. You may see results like this when working with data that you received through web scraping, copy-paste artifacts from PDFs, or even regular user input.
Combining .strip() and .split() is a common and straightforward way to break potentially messy text into manageable tokens.
The idea is that you first remove superfluous whitespace characters from the beginning and end of the string using .strip(). This operation returns a new string object without that whitespace. You then chain .split() to this cleaned output, allowing it to break the text into elements—in this case, individual words.
If you’re only dealing with messy whitespace, however, then you don’t need to use .strip() to get to a clean result:
Python
    
    

      
    
>>> text = "    Hello   world  "
>>> text.split()
['Hello', 'world']


    
    
    
      Copied!
    
    
  
Because .split() splits on any whitespace and ignores extra leading and trailing whitespace, the result is the same as when you first explicitly remove leading and trailing whitespace with .strip().
Nevertheless, there may be advantages to adding .strip() into the mix:
Explicitness: You clearly communicate to other developers that you intend to apply data cleaning—and readability counts!
Future-proofing: You may later need to update your code to split on a different delimiter, in which case .split() won’t remove extra whitespace automatically. A well-designed additional step of explicitly removing whitespace with .strip() can prevent surprises.
If you’re only splitting on whitespace, then you likely won’t need to use str.strip().split(). However, due to developer habits and a preference for explicitness, you may still come across this combination of string methods in the wild.
When you use .split(), it returns a list of substrings. This means that you can iterate over the result, access individual elements using indexing, or unpack the iterable into separate variables.
For example, when you’re dealing with user input, you might want to extract specific pieces of information:
Python
    
    

      
    
>>> user_input = "Deborah Lopez 30"
>>> user_data = user_input.split()
>>> user_data
['Deborah', 'Lopez', '30']

>>> name, surname, age = user_data
>>> print(f"Welcome {name}! You're {age} years old.")
Welcome Deborah! You're 30 years old.


    
    
    
      Copied!
    
    
  
In this code snippet, you take a string containing a name, surname, and age, and split it into a list of three separate strings. Then, you unpack the list into three descriptive variables. Finally, you use an f-string to format the output.
Note: Extracting data pieces like this is useful when you’re dealing with structured data where you know the position of each element beforehand, and you can rely on consistent use of whitespace.
In this section, you’ve learned how to use Python’s .split() method to divide strings into smaller parts based on whitespace. This method is invaluable when working with plain text data, allowing you to extract and manipulate information. By understanding the default behavior of .split(), including its treatment of newlines, you’ll be well-equipped to handle a variety of string manipulation tasks in your Python projects.
In the next section, you’ll explore how to customize the behavior of .split() by specifying different delimiters, enabling you to tackle more complex string splitting scenarios.
Split With Different Delimiters Using sep
By default, .split() uses any whitespace as a delimiter to separate a string into a list of substrings. However, many real-world scenarios require splitting strings using other delimiters. This is where the sep parameter comes into play.
Imagine that you’re parsing data from a CSV (comma-separated values) file. CSV files are a popular format for storing tabular data, where each line represents a row and each value within a line is separated by a comma.
Read the full article at https://realpython.com/python-split-string/ »
[ Improve Your Python With 🐍 Python Tricks 💌 – Get a short & sweet Python Trick delivered to your inbox every couple of days. >> Click here to learn more and see examples ]`,link:"https://realpython.com/python-split-string/",pubDate:"2025-02-05T14:00:00.000Z",source:"Real Python",sourceUrl:"https://realpython.com",category:"python"},{id:"https://realpython.com/courses/numpy-techniques-practical-examples/",title:"NumPy Techniques and Practical Examples",description:`The NumPy library is a Python library used for scientific computing. It provides you with a multidimensional array object for storing and analyzing data in a wide variety of ways. In this video course, you’ll see examples of some features NumPy provides that aren’t always highlighted in other tutorials. 
In this video course, you’ll learn how to:
Create multidimensional arrays from data stored in files
Identify and remove duplicate data from a NumPy array
Use structured NumPy arrays to reconcile the differences between datasets
Analyze and chart specific parts of hierarchical data
Create vectorized versions of your own functions
[ Improve Your Python With 🐍 Python Tricks 💌 – Get a short & sweet Python Trick delivered to your inbox every couple of days. >> Click here to learn more and see examples ]`,link:"https://realpython.com/courses/numpy-techniques-practical-examples/",pubDate:"2025-02-04T14:00:00.000Z",source:"Real Python",sourceUrl:"https://realpython.com",category:"python"},{id:"https://realpython.com/quizzes/python-split-string/",title:"Quiz: How to Split a String in Python",description:`In this quiz, you’ll test your understanding of
Python’s .split() method.
Python’s .split() method lets you divide a string into a list of substrings based on a specified delimiter. By default, .split() separates at whitespace, including spaces, tabs, and newlines. You can customize .split() to work with specific delimiters using the sep parameter, and control the amount of splits with maxsplit.
[ Improve Your Python With 🐍 Python Tricks 💌 – Get a short & sweet Python Trick delivered to your inbox every couple of days. >> Click here to learn more and see examples ]`,link:"https://realpython.com/quizzes/python-split-string/",pubDate:"2025-02-04T12:00:00.000Z",source:"Real Python",sourceUrl:"https://realpython.com",category:"python"},{id:"https://realpython.com/python-for-loop/",title:"Python for Loops: The Pythonic Way",description:`Python’s for loop allows you to iterate over the items in a collection, such as lists, tuples, strings, and dictionaries. The for loop syntax declares a loop variable that takes each item from the collection in each iteration. This loop is ideal for repeatedly executing a block of code on each item in the collection. You can also tweak for loops further with features like break, continue, and else.
By the end of this tutorial, you’ll understand that:
Python’s for loop iterates over items in a data collection, allowing you to execute code for each item.
To iterate from 0 to 10, you use the for index in range(11): construct.
To repeat code a number of times without processing the data of an iterable, use the for _ in range(times): construct.
To do index-based iteration, you can use for index, value in enumerate(iterable): to access both index and item.
In this tutorial, you’ll gain practical knowledge of using for loops to traverse various collections and learn Pythonic looping techniques. Additionally, you’ll learn how to handle exceptions and how to use asynchronous iterations to make your Python code more robust and efficient.
Get Your Code: Click here to download the free sample code that shows you how to use for loops in Python.
 Take the Quiz: Test your knowledge with our interactive “Python "for" Loops: The Pythonic Way” quiz. You’ll receive a score upon completion to help you track your learning progress:

            
 
      
Interactive Quiz
Python "for" Loops: The Pythonic Way 
      
In this quiz, you'll test your understanding of Python's for loop. You'll revisit how to iterate over items in a data collection, how to use range() for a predefined number of iterations, and how to use enumerate() for index-based iteration.
Getting Started With the Python for Loop
In programming, loops are control flow statements that allow you to repeat a given set of operations a number of times. In practice, you’ll find two main types of loops:
for loops are mostly used to iterate a known number of times, which is common when you’re processing data collections with a specific number of data items.
while loops are commonly used to iterate an unknown number of times, which is useful when the number of iterations depends on a given condition.
Python has both of these loops and in this tutorial, you’ll learn about for loops. In Python, you’ll generally use for loops when you need to iterate over the items in a data collection. This type of loop lets you traverse different data collections and run a specific group of statements on or with each item in the input collection.
In Python, for loops are compound statements with a header and a code block that runs a predefined number of times. The basic syntax of a for loop is shown below:
Python Syntax
    
    
for variable in iterable:
    <body>


    
    
    
      Copied!
    
    
  
In this syntax, variable is the loop variable. In each iteration, this variable takes the value of the current item in iterable, which represents the data collection you need to iterate over. The loop body can consist of one or more statements that must be indented properly.
Here’s a more detailed breakdown of this syntax:
for is the keyword that initiates the loop header.
variable is a variable that holds the current item in the input iterable.
in is a keyword that connects the loop variable with the iterable.
iterable is a data collection that can be iterated over.
<body> consists of one or more statements to execute in each iteration.
Here’s a quick example of how you can use a for loop to iterate over a list:
Python
    
    

      
    
>>> colors = ["red", "green", "blue", "yellow"]

>>> for color in colors:
...     print(color)
...
red
green
blue
yellow


    
    
    
      Copied!
    
    
  
In this example, color is the loop variable, while the colors list is the target collection. Each time through the loop, color takes on a successive item from colors. In this loop, the body consists of a call to print() that displays the value on the screen. This loop runs once for each item in the target iterable. The way the code above is written is the Pythonic way to write it.
However, what’s an iterable anyway? In Python, an iterable is an object—often a data collection—that can be iterated over. Common examples of iterables in Python include lists, tuples, strings, dictionaries, and sets, which are all built-in data types. You can also have custom classes that support iteration.
Note: Python has both iterables and iterators. Iterables support the iterable protocol consisting of the .__iter__() special method. Similarly, iterators support the iterator protocol that’s based on the .__iter__() and .__next__() special methods.
Both iterables and iterators can be iterated over. All iterators are iterables, but not all iterables are iterators. Python iterators play a fundamental role in for loops because they drive the iteration process.
A deeper discussion on iterables and iterators is beyond the scope of this tutorial. However, to learn more about them, check out the Iterators and Iterables in Python: Run Efficient Iterations tutorial.
You can also have a loop with multiple loop variables:
Python
    
    

      
    
>>> points = [(1, 4), (3, 6), (7, 3)]

>>> for x, y in points:
...     print(f"{x = } and {y = }")
...
x = 1 and y = 4
x = 3 and y = 6
x = 7 and y = 3


    
    
    
      Copied!
    
    
  
In this loop, you have two loop variables, x and y. Note that to use this syntax, you just need to provide a tuple of loop variables. Also, you can have as many loop variables as you need as long as you have the correct number of items to unpack into them. You’ll also find this pattern useful when iterating over dictionary items or when you need to do parallel iteration.
Sometimes, the input iterable may be empty. In that case, the loop will run its header once but won’t execute its body:
Python
    
    

      
    
>>> for item in []:
...     print(item)
...


    
    
    
      Copied!
    
    
  
Read the full article at https://realpython.com/python-for-loop/ »
[ Improve Your Python With 🐍 Python Tricks 💌 – Get a short & sweet Python Trick delivered to your inbox every couple of days. >> Click here to learn more and see examples ]`,link:"https://realpython.com/python-for-loop/",pubDate:"2025-02-03T14:00:00.000Z",source:"Real Python",sourceUrl:"https://realpython.com",category:"python"},{id:"https://rweekly.org//2025-W06.html",title:"R Weekly 2025-W06 LLM code, Gapminder, Our World in Data",description:`Hello and welcome to this new issue!
\r
				
How to have (my) content shared by R Weekly?
This week’s release was curated by Jonathan Kitt, with help from the R Weekly team members and contributors.
Highlight
Three experiments in LLM code assist with RStudio and Positron
Gapminder: how has the world changed?

Downloading datasets from Our World in Data in R
Insights
RcppStreams 0.1.4 Maintenance
rOpenSci News Digest, January 2025
Gapminder: how has the world changed?
R in the Real World
Mapping water insecurity in R with tidycensus

World Happiness Report 2024

R in Organizations
Shiny Gathering x Pharmaverse Recap: Simplifying R Package Quality with the {riskassessment} App
Using AI with R - R for the rest of us
R in Academia
Decomposing within and between person effects in longitudinal data with SEM in R workshop
Extensions of the survey package in R providing a new used interface and resampling methods for especially complex sample designs
Resources
New Packages
📦 Go Live for More New Pkgs 📦
 -->
📦 Keep up to date wtih CRANberries 📦
CRAN
{jobqueue} 1.0.1: Run Interruptible Code Asynchronously
{ggfootball} 0.1.0: Plotting Expected Goals (xG) Stats with Understat Data
{shinyCLT} 0.9.3: Central Limit Theorem ‘shiny’ Application
{layer} 0.0.3: Tilt your Maps and Turn Them into ‘ggplot’ Plots
{superspreading} 0.3.0: Understand Individual-Level Variation in Infectious Disease
Transmission
Updated Packages
🔍 Search on R-universe 🔍
{brulee} 0.4.0: High-Level Modeling Functions with ‘torch’ - diffify
{torch} 0.14.0: Tensors and Neural Networks with ‘GPU’ Acceleration - diffify
{chattr} 0.2.1: Interact with Large Language Models in ‘RStudio’ - diffify
{shinyscholar} 0.2.4: A Template for Creating Reproducible ‘shiny’ Applications - diffify
{vegan} 2.6-10: Community Ecology Package - diffify
{tidyclust} 0.2.4: A Common API to Clustering - diffify
{surveydown} 0.8.0: Markdown-Based Surveys Using ‘Quarto’ and ‘shiny’ - diffify
{report} 0.6.0: Automated Reporting of Results and Statistical Models - diffify
{tidyHeatmap} 1.11.4: A Tidy Implementation of Heatmap - diffify
{fusen} 0.7.1: Build a Package from Rmarkdown Files - diffify
Videos and Podcasts
Listen to the R-Weekly Highlights Podcast
Model cards with vetiver for transparent, responsible reporting
Shiny Apps
Sharing data between pages in a multi-page Brochure Shiny application
R Internationally
[Bioconductor Course
          Nairobi, Kenya
          March 2025](https://training.bioconductor.org/workshops/2025-03-Nairobi/index.html)
        
Tutorials
Downloading datasets from Our World in Data in R
Thinking about covariates in an analysis of an RCT
Three experiments in LLM code assist with RStudio and Positron
nanoparquet 0.4.0
How to Remove Duplicate Rows in R: A Complete Guide to Data Cleaning
3MW (Extract Information From Images and PDFs With R & LLMs)
How to run a T-Test in R

-->

R Project Updates
Updates from R Core:
Changes in R-devel
Updates from the R Contribution Working Group (RCWG):
R Contributor Office Hours, Thursday February 6: 10:00-11:00 UTC or 09:30-11:00 PST. R Core developer Martin Maechler will be joining the first office hour.
Call for Participation
Everything You Need to Know About Submitting a Talk for ShinyConf 2025
Upcoming Events in 3 Months
Events in 3 Months:
A list of R conferences and meetings
This week’s local R-User and applied stats events
Weekly R Workshops for Ukraine
Connect
Join the Data Science Learning Community
rtistry
Genuary 2025 Day 30: Abstract map. 🎨

#Genuary #Genuary2025 #RStats #Rtistry #GenerativeArt #Genuary30
[image or embed]
— Nicola Rennie (@nrennie.bsky.social) 30 janvier 2025 à 09:49


Quotes of the Week
When you spend forever debugging trying to make your code find the "data" folder, but you've accidentally added a space before it when you named it: " data". #datamishaps #rstats #datascience
— Ted Laderas (@tladeras.bsky.social) 29 janvier 2025 à 23:55



When you're at the end of your shift in the Description writing factory

#rstats
[image or embed]
— Tony Corke (@matterofstats.bsky.social) 28 janvier 2025 à 03:31`,link:"https://rweekly.org//2025-W06.html",pubDate:"Mon, 03 Feb 2025 00:00:00 +0000",source:"R Weekly",sourceUrl:"https://rweekly.org",category:"r-lang"},{id:" https://julialang.org/blog/2025/02/this-month-in-julia-world/index.html ",title:`
      This Month in Julia World  
  `,description:"Community Newsletter for January 2025",link:" https://julialang.org/blog/2025/02/this-month-in-julia-world/index.html ",pubDate:"Sat, 01 Feb 2025 00:00:00 +0000",source:"Julia Language Blog",sourceUrl:"https://julialang.org/blog/",category:"julia"},{id:"https://realpython.com/podcasts/rpp/237/",title:"The Real Python Podcast – Episode #237: Testing Your Python Code Base: Unit vs. Integration",description:`What goes into creating automated tests for your Python code? Should you focus on testing the individual code sections or on how the entire system runs? Christopher Trudeau is back on the show this week, bringing another batch of PyCoder's Weekly articles and projects.
[ Improve Your Python With 🐍 Python Tricks 💌 – Get a short & sweet Python Trick delivered to your inbox every couple of days. >> Click here to learn more and see examples ]`,link:"https://realpython.com/podcasts/rpp/237/",pubDate:"2025-01-31T12:00:00.000Z",source:"Real Python",sourceUrl:"https://realpython.com",category:"python"},{id:"https://www.tidyverse.org/blog/2025/01/experiments-llm/",title:"Three experiments in LLM code assist with RStudio and Positron",description:`The last few months, I’ve been exploring how AI/LLMs might make my time developing R packages and doing data science more productive. This post will describe three experimental R packages—
pal, 
ensure, and 
gander—that came out of that exploration, and the core tools underlying them. Taken together, I’ve found that these packages allow me to automate many of the less interesting parts of my work, turning all sorts of 45-second tasks into 5-second ones. Excitement from folks in the community has been very encouraging so far, and I’m looking forward to getting each of these packages buttoned up and sent off to CRAN in the coming weeks!
Background
  
    
      

      

    
  

Twice a year, the tidyverse team sets a week aside for “spring cleaning,” bringing all of our R packages up to snuff with the most current tooling and standardizing various bits of our development process. Some of these updates can happen by calling a single function, while others are much more involved. One of those more involved updates is updating erroring code, transitioning away from base R (e.g. 
stop()), rlang (e.g. 
rlang::abort()), 
glue, and homegrown combinations of them. cli’s new syntax is easier to work with as a developer and more visually pleasing as a user.
In some cases, transitioning is almost as simple as Finding + Replacing 
rlang::abort() to 
cli::cli_abort():
# before:
rlang::abort("\`save_pred\` can only be used if the initial results saved predictions.")

# after: 
cli::cli_abort("{.arg save_pred} can only be used if the initial results saved predictions.")


In others, there’s a mess of ad-hoc pluralization, 
paste0()s, glue interpolations, and other assorted nonsense to sort through:
# before:
extra_grid_params <- glue::single_quote(extra_grid_params)
extra_grid_params <- glue::glue_collapse(extra_grid_params, sep = ", ")

msg <- glue::glue(
  "The provided \`grid\` has the following parameter columns that have ",
  "not been marked for tuning by \`tune()\`: {extra_grid_params}."
)

rlang::abort(msg)

# after:
cli::cli_abort(
  "The provided {.arg grid} has parameter columns that have not been
   marked for tuning by {.fn tune}: {.val {extra_grid_params}}."
)


Total pain, especially with thousands upon thousands of error messages thrown across the tidyverse, r-lib, and tidymodels organizations.
The week before our most recent spring cleaning, I participated in an internal Posit LLM hackathon, where a small group of employees would familiarize with interfacing with LLMs via APIs and then set aside a day or two to build something to make their work easier. Heading into our spring cleaning and dreading the task of updating thousands of these calls, I decided to look into how effectively LLMs could help me convert this code. Thus was born 
clipal1, a (now-superseded) R package that allows users to select erroring code, press a keyboard shortcut, wait a moment, and watch the updated code be inlined in to the selection.

clipal was a huge boost for us in the most recent spring cleaning. Depending on the code being updated, these erroring calls used to take 30 seconds to a few minutes. With clipal, though, the model could usually get the updated code 80% or 90% of the way there in a couple seconds. Up to this point, irritated by autocomplete and frustrated by the friction of copying and pasting code and typing out the same bits of context into chats again and again, I had been relatively skeptical that LLMs could make me more productive. After using clipal for a week, though, I began to understand how seamlessly LLMs could automate the cumbersome and uninteresting parts of my work.
clipal itself is now superseded by pal, a more general solution to the problem that clipal solved. I’ve also written two additional packages like pal that solve two other classes of pal-like problems using similar tools, ensure and gander. In this post, I’ll write a bit about how I’ve used a pair of tools in three experiments that have made me much more productive as an R developer.
Prerequisites: ellmer and the RStudio API
  
    
      

      

    
  

While clipal is now superseded, the package that supersedes it and its other two descendants makes use of the same two tools: 
ellmer and the 
RStudio API.
Last year, Hadley Wickham and Joe Cheng began work on ellmer, a package that aims to make it easy to use large language models in R. For folks that have tried to use LLM APIs through HTTP requests, or interfaced with existing tools that wrap them like langchain, ellmer is pretty incredible. R users can initialize a Chat object using a predictably named function:
library(ellmer)

# to use a model like GPT-4o or GPT-4o-mini from OpenAI:
ch <- chat_openai()

# ...or a locally hosted ollama model:
ch <- chat_ollama()

# ...or Claude's Sonnet model:
ch <- chat_claude()


Then calling the output’s $chat() method returns a character response:
ch$chat("When was R created? Be brief.")
#> R was created in 1993 by Ross Ihaka and Robert Gentleman at 
#> the University of Auckland, New Zealand.


There’s a whole lot more to ellmer, but this functionality alone was enough to make clipal happen. I could allow users to choose a Chat from whatever provider they prefer to power the addin and ellmer would take care of all of the details underneath the hood.
The other puzzle piece here was how to get that character vector directly into the file so that the user didn’t have to copy and paste code from a chat interface into their document. The RStudio IDE supplies an API to interface with various bits of the RStudio UI through R code via the rstudioapi package. Notably, through R code, the package can read what’s inside of the user’s active selection and also write character vectors into that range. clipal could thus:
When triggered, read what’s inside of the selection using rstudioapi.
Pass that selection contents to an LLM along with a system prompt describing how to convert R erroring code to use cli using ellmer. (If you’re curious, the current draft of that prompt is 
here.)
When the response is returned, replace the contents of the selection with the response using cli.
This approach of using ellmer and the rstudioapi has its ups and downs. As for the advantages:
Our 
Positron IDE has “shims” of the RStudio API, so whatever works in RStudio will also work in Positron. This means that the same shortcuts can be mapped to the same tool in either IDE and it will just work without me, as the developer, having to do anything.2
Since these packages are written in R, they have access to your R environment. This is quite the differentiator compared to the more language-agnostic tools out there—these packages can see the data frames you have loaded, the columns and column types in them, etc. When working with other tools for LLM code-assist that don’t have this information, the friction of printing out variable information from my R environment and pasting it into whatever interface is so high that I don’t even ask LLMs for help with tasks they’re otherwise totally capable of.
Using ellmer under the hood means that, once R users have set up model connections with ellmer, they can use the same configuration with any of these packages with minimal additional effort. So, clipal and the packages that followed it support whatever model providers their users want to use—OpenAI, Claude, local ollama models, and so on. If you can use it with ellmer, you can use it with these packages.
As for the disadvantages, there are all sorts of UI bummers about this approach. Above all, these packages write directly to your files. This is great in that it removes the need to copy and paste, and when the model’s response is spot on, it’s awesome. At the same time, if the model starts rambling in an .R file or you want to confirm some difference between your previous code and the new code, the fact that these packages just write right into your files can be a bit annoying. Many other inline LLM code-assist tools out there are based on diffs—they show you proposed changes and some UI element that allows you to accept them, reject them, or ask for revisions. This requires one more step between asking for an LLM to do something and the thing actually being done, but saves the pain of lots of undoing or manually retrieving what code used to look like to verify the model’s work.
pal
  
    
      

      

    
  

After using clipal during our spring cleaning, I approached another spring cleaning task for the week: updating testing code. testthat 3.0.0 was released in 2020, bringing with it numerous changes that were both huge quality of life improvements for package developers and also highly breaking changes. While some of the task of converting legacy unit testing code to testthat 3e is relatively straightforward, other components can be quite tedious. Could I do the same thing for updating to testthat 3e that I did for transitioning to cli? I sloppily threw together a sister package to clipal that would convert tests for errors to snapshot tests, disentangle nested expectations, and transition from deprecated functions like ⁠expect_known_*(). ⁠(If you’re interested, the current prompt for that functionality is 
here.) That sister package was also a huge boost for me, but the package reused as-is almost every piece of code from clipal other than the prompt. Thus, I realized that the proper solution would provide all of this scaffolding to attach a prompt to a keyboard shortcut, but allow for an arbitrary set of prompts to help automate these wonky, cumbersome tasks.
The next week, 
pal was born. The pal package ships with three prompts centered on package development: the cli pal and testthat pal mentioned previously, as well as the roxygen pal, which drafts minimal roxygen documentation based on a function definition. Here’s what pal’s interface looks like now:

Users can add custom prompts for whatever tasks they please and they’ll be included in the searchable dropdown shown above.
I’ve been super appreciative of all of the love the package has received already, and I’ll be sending the package out to CRAN in the coming weeks.
ensure
  
    
      

      

    
  

While deciding on the initial set of prompts that pal would include, I really wanted to include some sort of “write unit tests for this function” pal. To really address this problem, though, requires violating two of pal’s core assumptions:
All of the context that you need is in the selection and the prompt. In the case of writing unit tests, it’s actually pretty important to have other pieces of context. If a package provides some object type potato, in order to write tests for some function that takes potato as input, it’s likely very important to know how potatoes are created and the kinds of properties they have. pal’s sister package for writing unit tests, ensure, can thus “see” the rest of the file that you’re working on, as well as context from neighboring files like other .R source files, the corresponding test file, and package vignettes, to learn about how to interface with the function arguments being tested.
The LLM’s response can prefix, replace, or suffix the active selection in the same file. In the case of writing unit tests for R, the place that tests actually ought to go is in a corresponding test file in tests/testthat/. Via the RStudio API, ensure can open up the corresponding test file and write to it rather than the source file where it was triggered from.3

So far, I haven’t spent as much time with ensure as I have with pal or gander, but I’ll be revisiting the package and sending it off to CRAN in the coming weeks.
gander
  
    
      

      

    
  


pal really excels at things you do all the time. Providing custom prompts with lots of details about code syntax and your taste means that models will often provide code that’s almost exactly what you’d write yourself. On its own, though, pal is incomplete as a toolkit for LLM code-assist. What about one-off requests that are specific to the environment that I’m working in or things I only do every once in a long while? It’s nice to have a much more general tool that functions much more like a chat interface.
At the same time, working with usual chat interfaces is quite high-friction, so much so that you’ll likely spend more time pasting in context from your files and R environmet than you would if you had just written the code yourself. There are all sorts of language-agnostic interfaces (or language-specific but not for R or RStudio) tools out there implementing this. You type some request with your cursor near some code, and then, in the backend, the tool assembles a bunch of context that will help the model respond more effectively. This is super helpful for many software engineering contexts, where most all of the context you need can be found in the contents of files. Data science differs a bit from software engineering here, though, in that the state of your R environment is just as important (or more so) than the contents of your files. For example, the lines of your files may show that you reference some data frame called stackoverflow, but what will really help a model write R code to interface with that data frame is “seeing” it: what columns are in it, and what are their types and distributions? gander is a chat interface that allows models to see the data you’re working with.

Behind the scenes, gander combines your selection (or lack thereof), inputted request, file type and contents, and R environment to dynamically assemble prompts to best enable models to tailor their responses to your R session. I use gander several times every day to turn 45-second tasks into 5-second ones and have been super stoked with how well-received it’s been among R folks so far. Compared to pal and ensure, this package feels like a much more substantial lift for data scientists specifically (rather than package developers). In the coming weeks, I’ll sand down some of its rough edges and send it off to CRAN.
What’s next?
  
    
      

      

    
  

For now, all of these packages only live on my GitHub profile. In the coming weeks, I plan to revisit each of them, squash a bunch of bugs, and send them off to CRAN.
That said, these packages are very much experimental. The user interface of writing directly to users’ files very much limits how useful these tools can be, and I think that the kinds of improvements to interface I’m hoping for may only be possible via some backend other than the RStudio API. I’m looking forward to seeing what that could look like.
Pronounced “c-l-i pal.” ↩︎
In reality, there are bugs and differences here and there, but the development effort to get these packages working in Positron was relatively minimal. ↩︎
This is one gap between the RStudio API and Positron’s shims for it. The Positron shims currently don’t allow for toggling between files, so ensure isn’t available in Positron. ↩︎`,link:"https://www.tidyverse.org/blog/2025/01/experiments-llm/",pubDate:"Wed, 29 Jan 2025 00:00:00 +0000",source:"Tidyverse Blog",sourceUrl:"https://www.tidyverse.org/blog/",category:"r-lang"},{id:"https://realpython.com/courses/create-scalable-flask-web-app/",title:"Creating a Scalable Flask Web Application From Scratch",description:`Flask is a powerful and flexible micro web framework for Python, ideal for both small and large web projects. It provides a straightforward way to get a web application up and running, with all the features that you need to get started.
Over the course of this video course, you’ll explore the process of creating a boilerplate for a Flask web project. This boilerplate will serve as a great starting point for any scalable Flask web app that you wish to develop in the future, from basic web pages to complex web applications.
In this video course, you’ll learn how to:
Set up a Flask project
Create a "Hello, World!" Flask app
Add multiple pages with blueprints
Leverage Jinja templates
Store static files
[ Improve Your Python With 🐍 Python Tricks 💌 – Get a short & sweet Python Trick delivered to your inbox every couple of days. >> Click here to learn more and see examples ]`,link:"https://realpython.com/courses/create-scalable-flask-web-app/",pubDate:"2025-01-28T14:00:00.000Z",source:"Real Python",sourceUrl:"https://realpython.com",category:"python"},{id:"https://rweekly.org//2025-W05.html",title:"R Weekly 2025-W05 Quarto revealjs, First Time Contributions",description:`Hello and welcome to this new issue!
\r
				
How to have (my) content shared by R Weekly?
This week’s release was curated by Jon Calder, with help from the R Weekly team members and contributors.
Highlight
Seven tips for creating Quarto revealjs presentations
From Novice to Contributor: Making and Supporting First-Time Contributions to FOSS
Insights
rOpenSci 2024 Highlights
From Novice to Contributor: Making and Supporting First-Time Contributions to FOSS
Remembering Friedrich “Fritz” Leisch
R in Organizations
Shift from Myth to Risk-Based Validation: GxP Case Studies
Lower Validation Workload and Faster Development With GxP Compliant Rstudio Environment on AWS
R in Academia
Get Better: R for cell biologists

Resources
CRAN R package binaries for Linux - arm64 and Alpine Linux
New Packages
📦 Go Live for More New Pkgs 📦
 -->
📦 Keep up to date wtih CRANberries 📦
CRAN
{ncaavolleyballr 0.4.1} Extract Data from NCAA Women’s and Men’s Volleyball Website
{phylospatial} 1.0.0: Spatial Phylogenetic Analysis
{oldr} 0.2.3: An Implementation of Rapid Assessment Method for Older People
Updated Packages
🔍 Search on R-universe 🔍
{httr2} 1.1.0: Perform HTTP Requests and Process the Responses - diffify
{qlcal} 0.0.14: R Bindings to the Calendaring Functionality of ‘QuantLib’ - diffify
{sparsevctrs} 0.2.0: Sparse Vectors for Use in Data Frames - diffify
Videos and Podcasts
Listen to the R-Weekly Highlights Podcast
We want GREAT tables! - Richard Iannone & Michael Chow - Data Science Hangout
Shiny Apps
From Code to Compliance: Validated Shiny Apps with Rhino
Acceptance Test-Driven Development with Shiny
How to configure your shiny app content from a remote JSON file
Tutorials
3MW (Turn Text Into Structured Data With R & LLMs)
How to Remove Rows in R: A Comprehensive Guide with Examples
Seven tips for creating Quarto revealjs presentations
Dyson’s Algorithm: The General Case
Just got a paper on conformal prediction REJECTED by International Journal of Forecasting despite evidence on 30,000 time series (and more). What’s going on? Part2: 1311 time series from the Tourism competition
Guide to comparing sample and population proportions with CPS data, both classically and Bayesianly: Download CPS demographic data from IPUMS and use R and {brms} to calculate differences between sample and national proportions with Bayesian ROPE-based inference


-->

R Project Updates
Updates from R Core:
Updates from the R Contribution Working Group (RCWG):
Announcing R Dev Day @ Rencontres R 2025: University of Mons, Belgium, Thursday 22 May, 09:00-17:00 CEST. Join us to work on contributions to the code, documentation and translations in base R. Free and open registration, deadline Friday 18 April.
Call for Participation
ShinyConf 2025 Registration and Call for Proposals are open!
Apply to be an Opportunity Scholar at posit::conf(2025)
Coworking Mini-Hackathon for First-Time Contributors
Upcoming Events in 3 Months
Events in 3 Months:
A list of R conferences and meetings
This week’s local R-User and applied stats events
Weekly R Workshops for Ukraine
Tabular ML in R: an overview of tidymodels in R for tabularized data workshop
Datasets
{setariaviridis} 0.1.0: Field-Collected Data of Green Foxtail
Connect
Join the Data Science Learning Community
tidymodels Internship for 2025`,link:"https://rweekly.org//2025-W05.html",pubDate:"Tue, 28 Jan 2025 00:00:00 +0000",source:"R Weekly",sourceUrl:"https://rweekly.org",category:"r-lang"},{id:"https://www.tidyverse.org/blog/2025/01/nanoparquet-0-4-0/",title:"nanoparquet 0.4.0",description:`5x height
* [x] [\`hugodown::use_tidy_thumbnails()\`](https://rdrr.io/pkg/hugodown/man/use_tidy_post.html)
* [x] Add intro sentence, e.g. the standard tagline for the package
* [x] [\`usethis::use_tidy_thanks()\`](https://usethis.r-lib.org/reference/use_tidy_thanks.html)
-->
We’re thrilled to announce the release of 
nanoparquet 0.4.0. nanoparquet is an R package that reads and writes Parquet files.
You can install it from CRAN with:
install.packages("nanoparquet")


This blog post will show the most important new features of nanoparquet 0.4.0: You can see a full list of changes in the 
release notes.
Brand new read_parquet()
  
    
      

      

    
  

nanoparquet 0.4.0 comes with a completely rewritten Parquet reader. The new version has an architecture that is easier to embed into R, and facilitates fantastic new features, like 
append_parquet() and the new col_select argument. (More to come!) The new reader is also much faster, see the “Benchmarks” chapter.
Read a subset of columns
  
    
      

      

    
  

read_parquet() now has a new argument called col_select, that lets you read a subset of the columns from the Parquet file. Unlike for row oriented file formats like CSV, this means that the reader never needs to touch the columns that are not needed for. The time required for reading a subset of columns is independent of how many more columns the Parquet file might have!
You can either use column indices or column names to specify the columns to read. Here is an example.
library(nanoparquet)
library(pillar)
This is the 
nycflights13::flights data set:
read_parquet(
  "flights.parquet",
  col_select = c("dep_time", "arr_time", "carrier")
)
#> # A data frame: 336,776 × 3
#>    dep_time arr_time carrier
#>       <int>    <int> <chr>  
#>  1      517      830 UA     
#>  2      533      850 UA     
#>  3      542      923 AA     
#>  4      544     1004 B6     
#>  5      554      812 DL     
#>  6      554      740 UA     
#>  7      555      913 B6     
#>  8      557      709 EV     
#>  9      557      838 B6     
#> 10      558      753 AA     
#> # ℹ 336,766 more rows

Use 
read_parquet_schema() if you want to see the structure of the Parquet file first:
read_parquet_schema("flights.parquet")
#> # A data frame: 20 × 12
#>    file_name       name  r_type type  type_length repetition_type converted_type
#>    <chr>           <chr> <chr>  <chr>       <int> <chr>           <chr>         
#>  1 flights.parquet sche… NA     NA             NA NA              NA            
#>  2 flights.parquet year  integ… INT32          NA REQUIRED        INT_32        
#>  3 flights.parquet month integ… INT32          NA REQUIRED        INT_32        
#>  4 flights.parquet day   integ… INT32          NA REQUIRED        INT_32        
#>  5 flights.parquet dep_… integ… INT32          NA OPTIONAL        INT_32        
#>  6 flights.parquet sche… integ… INT32          NA REQUIRED        INT_32        
#>  7 flights.parquet dep_… double DOUB…          NA OPTIONAL        NA            
#>  8 flights.parquet arr_… integ… INT32          NA OPTIONAL        INT_32        
#>  9 flights.parquet sche… integ… INT32          NA REQUIRED        INT_32        
#> 10 flights.parquet arr_… double DOUB…          NA OPTIONAL        NA            
#> 11 flights.parquet carr… chara… BYTE…          NA REQUIRED        UTF8          
#> 12 flights.parquet flig… integ… INT32          NA REQUIRED        INT_32        
#> 13 flights.parquet tail… chara… BYTE…          NA OPTIONAL        UTF8          
#> 14 flights.parquet orig… chara… BYTE…          NA REQUIRED        UTF8          
#> 15 flights.parquet dest  chara… BYTE…          NA REQUIRED        UTF8          
#> 16 flights.parquet air_… double DOUB…          NA OPTIONAL        NA            
#> 17 flights.parquet dist… double DOUB…          NA REQUIRED        NA            
#> 18 flights.parquet hour  double DOUB…          NA REQUIRED        NA            
#> 19 flights.parquet minu… double DOUB…          NA REQUIRED        NA            
#> 20 flights.parquet time… POSIX… INT64          NA REQUIRED        TIMESTAMP_MIC…
#> # ℹ 5 more variables: logical_type <I<list>>, num_children <int>, scale <int>,
#> #   precision <int>, field_id <int>

The output of 
read_parquet_schema() also shows you the R type that nanoparquet will use for each column.
Appending to Parquet files
  
    
      

      

    
  

The new 
append_parquet() function makes it easy to append new data to a Parquet file, without first reading the whole file into memory. The schema of the file and the schema new data must match of course. Lets merge 
nycflights13::flights and 
nycflights23::flights:
file.copy("flights.parquet", "allflights.parquet", overwrite = TRUE)
#> [1] TRUE
append_parquet(nycflights23::flights, "allflights.parquet")
read_parquet_info() returns the most basic information about a Parquet file:
read_parquet_info("flights.parquet")
#> # A data frame: 1 × 7
#>   file_name       num_cols num_rows num_row_groups file_size parquet_version
#>   <chr>              <int>    <dbl>          <int>     <dbl>           <int>
#> 1 flights.parquet       19   336776              1   5687737               1
#> # ℹ 1 more variable: created_by <chr>
read_parquet_info("allflights.parquet")
#> # A data frame: 1 × 7
#>   file_name          num_cols num_rows num_row_groups file_size parquet_version
#>   <chr>                 <int>    <dbl>          <int>     <dbl>           <int>
#> 1 allflights.parquet       19   772128              1  13490997               1
#> # ℹ 1 more variable: created_by <chr>

Note that you should probably still create a backup copy of the original file when using 
append_parquet(). If the appending process is interrupted by a power failure, then you might end up with an incomplete and invalid Parquet file.
Schemas and type conversions
  
    
      

      

    
  

In nanoparquet 0.4.0 
write_parquet() takes a schema argument that can customize the R to Parquet type mappings. For example by default 
write_parquet() writes an R character vector as a STRING Parquet type. If you’d like to write a certain character column as an ENUM type1 instead, you’ll need to specify that in schema:
write_parquet(
  nycflights13::flights,
  "newflights.parquet",
  schema = parquet_schema(carrier = "ENUM")
)
read_parquet_schema("newflights.parquet")
#> # A data frame: 20 × 12
#>    file_name       name  r_type type  type_length repetition_type converted_type
#>    <chr>           <chr> <chr>  <chr>       <int> <chr>           <chr>         
#>  1 newflights.par… sche… NA     NA             NA NA              NA            
#>  2 newflights.par… year  integ… INT32          NA REQUIRED        INT_32        
#>  3 newflights.par… month integ… INT32          NA REQUIRED        INT_32        
#>  4 newflights.par… day   integ… INT32          NA REQUIRED        INT_32        
#>  5 newflights.par… dep_… integ… INT32          NA OPTIONAL        INT_32        
#>  6 newflights.par… sche… integ… INT32          NA REQUIRED        INT_32        
#>  7 newflights.par… dep_… double DOUB…          NA OPTIONAL        NA            
#>  8 newflights.par… arr_… integ… INT32          NA OPTIONAL        INT_32        
#>  9 newflights.par… sche… integ… INT32          NA REQUIRED        INT_32        
#> 10 newflights.par… arr_… double DOUB…          NA OPTIONAL        NA            
#> 11 newflights.par… carr… chara… BYTE…          NA REQUIRED        ENUM          
#> 12 newflights.par… flig… integ… INT32          NA REQUIRED        INT_32        
#> 13 newflights.par… tail… chara… BYTE…          NA OPTIONAL        UTF8          
#> 14 newflights.par… orig… chara… BYTE…          NA REQUIRED        UTF8          
#> 15 newflights.par… dest  chara… BYTE…          NA REQUIRED        UTF8          
#> 16 newflights.par… air_… double DOUB…          NA OPTIONAL        NA            
#> 17 newflights.par… dist… double DOUB…          NA REQUIRED        NA            
#> 18 newflights.par… hour  double DOUB…          NA REQUIRED        NA            
#> 19 newflights.par… minu… double DOUB…          NA REQUIRED        NA            
#> 20 newflights.par… time… POSIX… INT64          NA REQUIRED        TIMESTAMP_MIC…
#> # ℹ 5 more variables: logical_type <I<list>>, num_children <int>, scale <int>,
#> #   precision <int>, field_id <int>

Here we wrote the carrier column as ENUM, and left the other other columns to use the default type mappings.
See the 
?nanoparquet-types manual page for the possible type mappings (lots of new ones!) and also for the default ones.
Encodings
  
    
      

      

    
  

It is now also possible to customize the encoding of each column in 
write_parquet(), via the encoding argument. By default 
write_parquet() tries to choose a good encoding based on the type and the values of a column. E.g. it checks a small sample for repeated values to decide if it is worth using a dictionary encoding (RLE_DICTIONARY).
If 
write_parquet() gets it wrong, use the encoding argument to force an encoding. The following forces the PLAIN encoding for all columns. This encoding is very fast to write, but creates a larger file. You can also specify different encodings for different columns, see the 
write_parquet() manual page.
write_parquet(
  nycflights13::flights,
  "plainflights.parquet",
  encoding = "PLAIN"
)
file.size("flights.parquet")
#> [1] 5687737
file.size("plainflights.parquet")
#> [1] 11954574

See more about the implemented encodings and how the defaults are selected in the 
parquet-encodings manual page.
API changes
  
    
      

      

    
  

Some nanoparquet functions have new, better names in nanoparquet 0.4.0. In particular, all functions that read from a Parquet file have a read_parquet prefix now. The old functions still work, with a warning.
Also, the 
parquet_schema() function is now for creating a new Parquet schema from scratch, and not for inferring a schema from a data frame (use 
infer_parquet_schema()) or for reading the schema from a Parquet file (use 
read_parquet_schema()). 
parquet_schema() falls back to the old behaviour when called with a file name, with a warning, so this is not a breaking change (yet), and old code still works.
See the complete list of API changes in the 
Changelog.
Benchmarks
  
    
      

      

    
  

We are very excited about the performance of the new Parquet reader, and the Parquet writer was always quite speedy, so we ran a simple benchmark.
We compared nanoparquet to the Parquet implementations in Apache Arrow and DuckDB, and also to CSV readers and writers, on a real data set, for samples of 330k, 6.7 million and 67.4 million rows (40MB, 800MB and 8GB in memory). For these data nanoparquet is indeed very competitive with both Arrow and DuckDB.
You can see the full results 
on the website.
Other changes
  
    
      

      

    
  

Other important changes in nanoparquet 0.4.0 include:
write_parquet() can now write multiple row groups. By default it puts at most 10 million rows in a single row group. (This is subject to https://nanoparquet.r-lib.org/references/parquet_options.html ) on how to change the default.
write_parquet() now writes minimum and maximum statistics (by default) for most Parquet types. See the 
parquet_options() manual page on how to turn this off, which will probably make the writer faster.
write_parquet() can now write version 2 data pages. The default is still version 1, but it might change in the future.
New compression_level option to select the compression level manually.
read_parquet() can now read from an R connection.
Acknowledgements
  
    
      

      

    
  

@alvarocombo, 
@D3SL, 
@gaborcsardi, and 
@RealTYPICAL.
A Parquet ENUM type is very similar to a factor in R. ↩︎`,link:"https://www.tidyverse.org/blog/2025/01/nanoparquet-0-4-0/",pubDate:"Tue, 28 Jan 2025 00:00:00 +0000",source:"Tidyverse Blog",sourceUrl:"https://www.tidyverse.org/blog/",category:"r-lang"},{id:"https://realpython.com/podcasts/rpp/236/",title:"The Real Python Podcast – Episode #236: Simon Willison: Using LLMs for Python Development",description:`What are the current large language model (LLM) tools you can use to develop Python? What prompting techniques and strategies produce better results? This week on the show, we speak with Simon Willison about his LLM research and his exploration of writing Python code with these rapidly evolving tools.
[ Improve Your Python With 🐍 Python Tricks 💌 – Get a short & sweet Python Trick delivered to your inbox every couple of days. >> Click here to learn more and see examples ]`,link:"https://realpython.com/podcasts/rpp/236/",pubDate:"2025-01-24T12:00:00.000Z",source:"Real Python",sourceUrl:"https://realpython.com",category:"python"},{id:"https://realpython.com/courses/exploring-tuple-data-type-examples/",title:"Exploring Python's tuple Data Type With Examples",description:`In Python, a tuple is a built-in data type that allows you to create immutable sequences of values. The values or items in a tuple can be of any type. This makes tuples pretty useful in those situations where you need to store heterogeneous data, like that in a database record, for example.
Through this tutorial, you’ll dive deep into Python tuples and get a solid understanding of their key features and use cases. This knowledge will allow you to write more efficient and reliable code by taking advantage of tuples.
In this video course, you’ll learn how to:
Create tuples in Python
Access the items in an existing tuple
Unpack, return, copy, and concatenate tuples
Reverse, sort, and traverse existing tuples
Explore other features and common gotchas of tuples
[ Improve Your Python With 🐍 Python Tricks 💌 – Get a short & sweet Python Trick delivered to your inbox every couple of days. >> Click here to learn more and see examples ]`,link:"https://realpython.com/courses/exploring-tuple-data-type-examples/",pubDate:"2025-01-21T14:00:00.000Z",source:"Real Python",sourceUrl:"https://realpython.com",category:"python"},{id:"https://realpython.com/quizzes/how-to-deal-with-missing-data-in-polars/",title:"Quiz: How to Deal With Missing Data in Polars",description:`In this quiz, you’ll test your understanding of
How to Deal With Missing Data in Polars.
By working through the questions, you’ll review your understanding of dealing with null values in Polars and also expand on what you learned in the tutorial.
You’ll need to do some research outside of the tutorial to answer all the questions. Embrace this challenge and let it take you on a learning journey.
[ Improve Your Python With 🐍 Python Tricks 💌 – Get a short & sweet Python Trick delivered to your inbox every couple of days. >> Click here to learn more and see examples ]`,link:"https://realpython.com/quizzes/how-to-deal-with-missing-data-in-polars/",pubDate:"2025-01-21T12:00:00.000Z",source:"Real Python",sourceUrl:"https://realpython.com",category:"python"},{id:"https://rweekly.org//2025-W04.html",title:"R Weekly 2025-W04 flowcharts, data.table entry points, surface brain data",description:`Hello and welcome to this new issue!
\r
				
How to have (my) content shared by R Weekly?
This week’s release was curated by Ryo Nakagawara, with help from the R Weekly team members and contributors.
Highlight
Flowcharts made easy with the package {flowchart}
Use of non-API entry points in data.table
Intro to working with volume and surface brain data 
Insights
Transforming Academic Research with R in Santa Rosa, Argentina
2024 Posit Year in Review
Some R Conferences for 2025
Use of non-API entry points in data.table
User-Friendly Technical Cookbook-Style CRAN Guide for New R Programmers Ready
R in the Real World
Intro to working with volume and surface brain data 

R in Academia
stana: an R package for metagenotyping analysis and interactive application based on clinical data
New Packages
📦 Go Live for More New Pkgs 📦
 -->
📦 Keep up to date wtih CRANberries 📦
CRAN
{windfarmGA} 4.0.0: Genetic Algorithm for Wind Farm Layout Optimization
{tidyfit} 0.7.3: Regularized Linear Modeling with Tidy Data
{unhcrdown} 0.6.0: UNHCR Branded Templates for R Markdown Documents
{veesa} 0.1.6: Pipeline for Explainable Machine Learning with Functional Data
{rtables.officer} 0.0.2: Exporting Tools for ‘rtables’
{MonotonicityTest} 1.0: Nonparametric Bootstrap Test for Regression Monotonicity
{zephyr} 0.1.0: Structured Messages and Options
{chartreview} 1.0: Adaptive Multi-Wave Sampling for Efficient Chart Validation
{SeedMaker} 1.0.0: Generate a Collection of Seeds from a Single Seed
{duet} 0.1.1: Analysing Non-Verbal Communication in Dyadic Interactions from
Video Data
{smer} 0.0.1: Sparse Marginal Epistasis Test
{SiFINeT} 1.13: Single Cell Feature Identification with Network Topology
{qmj} 0.2.1: Quality Scores for the Russell 3000
{sgapi} 1.0.3: Aid Querying ‘nomis’ and ‘Office for National Statistics Open
Geography’ APIs
{hhmR} 0.0.1: Hierarchical Heatmaps
{pudu} 0.1.0: C++ Tools for Cleaning Strings
{ggstackplot} 0.4: Create Overlapping Stacked Plots
{bitstreamio} 0.1.0: Read and Write Bits from Files, Connections and Raw Vectors
{BIS} 0.4: Programmatic Access to Bank for International Settlements Data
{PLStests} 0.1.0: Model Checking for High-Dimensional GLMs via Random Projections
{OpenRange} 0.0.1: Code to Access Open Access Species Range Maps
{theorytools} 0.1.0: FAIR Theory Construction
{pam} 1.0.1: Fast and Efficient Processing of PAM Data
{ggmapcn} 0.1.2: Customizable China Map Visualizations
{sequenceR} 1.0.1: A Simple Sequencer for Data Sonification
{dfeR} 1.0.1: Common Department for Education Analysis Tasks
{bnns} 0.1.2: Bayesian Neural Network with ‘Stan’
{soilassessment} 0.3.0: Soil Health Assessment Models for Assessing Soil Conditions and
Suitability
{quickPWCR} 1.2: Quickly Construct and Rate Large Binary Pairwised Comparisons
{maraca} 0.7.1: The Maraca Plot: Visualizing Hierarchical Composite Endpoints
{dietr} 1.1.6: Diet Estimated Trophic Levels
{bitstreamio} 0.1.0: Read and Write Bits from Files, Connections and Raw Vectors
{pam} 1.0.1: Fast and Efficient Processing of PAM Data
{parttree} 0.1.0: Visualize Simple 2-D Decision Tree Partitions

GitHub or Bitbucket
{susR} 0.0.2: Interface for Accessing the Open Data of Slovak Statistical Office via API
Updated Packages
🔍 Search on R-universe 🔍
RcppFastFloat 0.0.5 on CRAN: New Upstream, Updates
RProtoBuf 0.4.23 on CRAN: Mulitple Updates
{colorrepel} 0.4.1: Repel Visually Similar Colors for Colorblind Users in Various
Plots - diffify
{rlang} 1.1.5: Functions for Base Types and Core R and ‘Tidyverse’ Features - diffify
{soilDB} 2.8.7: Soil Database Interface - diffify
{pak} 0.8.0.1: Another Approach to Package Installation - diffify
{gridpattern} 1.3.1: ‘grid’ Pattern Grobs - diffify
{raster} 3.6-31: Geographic Data Analysis and Modeling - diffify
{bit64} 4.6.0-1: A S3 Class for Vectors of 64bit Integers - diffify
{unhcrthemes} 0.6.3: UNHCR ‘ggplot2’ Theme and Colour Palettes - diffify
{VisitorCounts} 2.0.3: Modeling and Forecasting Visitor Counts Using Social Media - diffify
{accessr} 1.1.1: Command Line Tools to Produce Accessible Documents using ‘R
Markdown’ - diffify
{Factoshiny} 2.7: Perform Factorial Analysis from ‘FactoMineR’ with a Shiny
Application - diffify
{funkyheatmap} 0.5.1: Generating Funky Heatmaps for Data Frames - diffify
{ggsem} 0.2.1: Interactively Visualize Structural Equation Modeling Diagrams - diffify
{colorSpec} 1.6-0: Color Calculations with Emphasis on Spectral Data - diffify
{streamDAG} 1.5-9: Analytical Methods for Stream DAGs - diffify
{Rfast} 2.1.4: A Collection of Efficient and Extremely Fast R Functions - diffify
{ssdtools} 2.2.0: Species Sensitivity Distributions - diffify
{geomtextpath} 0.1.5: Curved Text in ‘ggplot2’ - diffify
{parameters} 0.24.1: Processing of Model Parameters - diffify
{mlr3verse} 0.3.1: Easily Install and Load the ‘mlr3’ Package Family - diffify
{hommel} 1.8: Methods for Closed Testing with Simes Inequality, in Particular
Hommel’s Method - diffify
{fusen} 0.7.0: Build a Package from Rmarkdown Files - diffify
{fdacluster} 0.4.1: Joint Clustering and Alignment of Functional Data - diffify
{praatpicture} 1.4.0: ‘Praat Picture’ Style Plots of Acoustic Data - diffify
{shinyStorePlus} 1.4: Secure in-Browser and Database Storage for ‘shiny’ Inputs,
Outputs, Views and User Likes - diffify
{worldmet} 0.9.9: Import Surface Meteorological Data from NOAA Integrated Surface
Database (ISD) - diffify
Videos and Podcasts
Listen to the R-Weekly Highlights Podcast
Unleash GIS Power: Create Jaw-Dropping REM Maps with Lidar Data in R!
Shiny Apps
Share Your Shiny Expertise at ShinyConf 2025!
Porting a Shiny App to Observable Framework: Part 1
Tutorials
Fitting TabPFN models in R using reticulate
Flowcharts made easy with the package {flowchart}

3MW (Using AI Functions With R & {ellmer})
Efficient CI/CD: Balancing Automation with GxP Compliance
Sending e-mails with {blastula}
Bilingual Bluesky Sentiment

-->

R Project Updates
Updates from R Core:
Call for Participation
Upcoming Events in 3 Months
Events in 3 Months:
A list of R conferences and meetings
This week’s local R-User and applied stats events
Weekly R Workshops for Ukraine
116th Tokyo.R User Meetup
Connect
Join the Data Science Learning Community
tidymodels Internship for 2025
rtistry
Day 17 of #genuary, Inspired by Islamic art

#RStats code: github.com/gkaramanis/a...

#genuary2024 #genuary17 #rtistry
[image or embed]
— Georgios Karamanis (@karaman.is) January 18, 2024 at 4:23 AM



Genuary 2025 Day 19: Op Art. 🎨

#Genuary #Genuary2025 #RStats #Rtistry #GenerativeArt #Genuary19
[image or embed]
— Nicola Rennie (@nrennie.bsky.social) January 19, 2025 at 7:17 PM



Exactly forty two lines of code.

A secret code?  A doctors notes?  Or a hastily repurposed asemic writing system?  Who knows.

With 42 of the hackiest lines of #rstats  code used to make it. gist.github.com/georgemsavva...

#genuary3 #genuary2025  #genuary #mathart #rtistry #asemicwriting
[image or embed]
— George Savva (@georgemsavva.bsky.social) January 4, 2025 at 6:04 AM


Quotes of the Week
I'm just saying this is syntatically correct #rstats code
[image or embed]
— Robert (Bob) Kubinec (@rmkubinec.bsky.social) January 17, 2025 at 1:38 AM



#dataviz A customized grid pattern in #ggplot2 using {geofacet} to mimic approx. geogrpahic locations of entities. 
Data: @openstreetmap @india_soi 
Full code 🔗 https://t.co/FA7OnxBSHP
Tools #rstats #sf #ggplot2 #geofacet by @hafenstats pic.twitter.com/kI9lRIJnYC
— Aditya Dahiya (@AdityaDahiyaIAS) January 19, 2025



Do you have more than one column that uniquely identifies rows in your data?

For example,
- ID + Time
- First Name + Last Name

No problem, you can easily join data using multiple columns in #rstats, even if those columns have different names across datasets.
cghlewis.com/blog/joins/
[image or embed]
— Crystal Lewis (@cghlewis.bsky.social) January 18, 2025 at 10:43 PM`,link:"https://rweekly.org//2025-W04.html",pubDate:"Tue, 21 Jan 2025 00:00:00 +0000",source:"R Weekly",sourceUrl:"https://rweekly.org",category:"r-lang"},{id:"https://www.tidyverse.org/blog/2025/01/httr2-1-1-0/",title:"httr2 1.1.0",description:`5x height
* [x] [\`hugodown::use_tidy_thumbnails()\`](https://rdrr.io/pkg/hugodown/man/use_tidy_post.html)
* [x] Add intro sentence, e.g. the standard tagline for the package
* [x] [\`usethis::use_tidy_thanks()\`](https://usethis.r-lib.org/reference/use_tidy_thanks.html)
-->
We’re chuffed to announce the release of 
httr2 1.1.0. httr2 (pronounced “hitter2”) is a comprehensive HTTP client that provides a modern, pipeable API for working with web APIs. It builds on top of 
{curl} to provide features like explicit request objects, built-in rate limiting & retry tooling, comprehensive OAuth support, and secure handling of secrets and credentials.
In this blog post, we’ll dive into the new streaming interface built around 
req_perform_connection(), explore the new suite of URL manipulation tools, and highlight a few of the other biggest changes (including better support for AWS and enhancements to the caching system), and update you on the lifecycle changes.
This blog post includes the most important enhacenments in versions 1.0.1 through 1.0.7, where we’ve been iterating on various features and fixing numerous bugs. For a complete list of changes, you can check the 
GitHub release notes or the 
NEWS file.
Installation
  
    
      

      

    
  

Install httr2 from CRAN with:
install.packages("httr2")
Streaming data
  
    
      

      

    
  

The headline feature of this release is a better API for streaming responses, where the body is not available immediately but is streamed back over time. This is particularly important for interacting with LLMs, where it’s needed to make chat responses feel snappy. You can try it out in 
ellmer, our new package for chatting with LLMs from a variety of providers.
The most important new function is 
req_perform_connection(), which supersedes the older callback-based 
req_perform_stream(). Unlike its predecessor, 
req_perform_connection() returns a regular response object with a connection object for the body:
library(httr2)

req <- request(example_url()) |> req_template("/stream-bytes/:n", n = 10240)
resp <- req_perform_connection(req)
resp
#> <httr2_response>
#> GET http://127.0.0.1:49283/stream-bytes/10240
#> Status: 200 OK
#> Content-Type: application/octet-stream
#> Body: Streaming connection

Once you have a streaming connection you can repeatedly call a resp_stream_*() function to pull down data in chunks, using 
resp_stream_is_complete() to figure out when to stop.
while (!resp_stream_is_complete(resp)) {
  bytes <- resp_stream_raw(resp, kb = 2)
  cat("Downloaded ", length(bytes), " bytes\\n", sep = "")
}
#> Downloaded 2048 bytes
#> Downloaded 2048 bytes
#> Downloaded 2048 bytes
#> Downloaded 2048 bytes
#> Downloaded 2048 bytes
#> Downloaded 0 bytes

As well as 
resp_stream_raw(), which returns a raw vector, you can use 
resp_stream_lines() to stream lines and 
resp_stream_sse() to stream 
server-sent events.
URL manipulation tools
  
    
      

      

    
  

Working with URLs got easier with three new functions: 
url_modify(), 
url_modify_query(), and 
url_modify_relative(). You can see how they work in the examples below:
# url_modify() modifies components of a URL
url_modify("https://example.com", hostname = "github.com")
#> [1] "https://github.com/"
url_modify("https://example.com", scheme = "http")
#> [1] "http://example.com/"
url_modify("https://example.com", path = "abc", query = list(foo = "bar"))
#> [1] "https://example.com/abc?foo=bar"

# url_modify_query() lets you modify individual query parameters
# modifying an existing parameter:
url_modify_query("http://example.com?a=1&b=2", a = 10)
#> [1] "http://example.com/?b=2&a=10"
# delete a parameter:
url_modify_query("http://example.com?a=1&b=2", b = NULL)
#> [1] "http://example.com/?a=1"
# add a new parameter:
url_modify_query("http://example.com?a=1&b=2", c = 3)
#> [1] "http://example.com/?a=1&b=2&c=3"

# url_modify_relative() navigates to a relative URL
url_modify_relative("https://example.com/a/b/c.html", "/d/e/f.html")
#> [1] "https://example.com/d/e/f.html"
url_modify_relative("https://example.com/a/b/c.html", "C.html")
#> [1] "https://example.com/a/b/C.html"
url_modify_relative("https://example.com/a/b/c.html", "../B.html")
#> [1] "https://example.com/a/B.html"

We also added 
req_url_relative() to make it easier to navigate to a relative URL for an existing request.
Other improvements
  
    
      

      

    
  

There are a handful of other improvements that are worth highlighting:
We’ve made it easier to talk to AWS web services with 
req_auth_aws_v4() for signing requests and 
resp_stream_aws() for streaming responses. Special thanks goes to the 
lifion-aws-event-stream project for providing a clear reference implementation.
We’ve run-down a long list of bugs that made 
req_cache() unreliable. This includes improving the handling of header-only changes, better cache pruning, and new debugging options. If you’re working with a web API that supports caching, we highly recommend that you try it out. The next release of {
gh} will use a cache by default, and my use of the dev version suggests that it gives a pretty nice performance improvment.
is_online() provides an easy way to check internet connectivity.
req_perform_promise() allows you to execute requests in the background (thanks to 
@gergness) using an efficient approach that waits on curl socket activity (thanks to 
@shikokuchuo).
Breaking changes
  
    
      

      

    
  

As httr2 continues to mature, we’ve made some lifecycle changes:
req_perform_iterative() is now stable and no longer experimental.
req_perform_stream() is superseded by 
req_perform_connection(), as mentioned above.
with_mock() and 
local_mock() are defunct and will be rmeoved in the next release. Use 
with_mocked_responses() and 
local_mocked_responses() instead.
Acknowledgements
  
    
      

      

    
  

A big thanks to all 76 folks who filed issues, created PRs and generally helped to make httr2 better! 
@Aariq, 
@AGeographer, 
@amael-ls, 
@anishjoni, 
@asadow, 
@atheriel, 
@awpsoras, 
@billsanto, 
@bonushenricus, 
@botan, 
@burgerga, 
@CareCT, 
@cderv, 
@cole-brokamp, 
@covid19ec, 
@datapumpernickel, 
@denskh, 
@deschen1, 
@DyfanJones, 
@erydit, 
@exetico, 
@fh-mthomson, 
@frzambra, 
@gergness, 
@GreenGrassBlueOcean, 
@guslipkin, 
@hadley, 
@i2z1, 
@isachng93, 
@IshuaWang, 
@JamesHWade, 
@jameslairdsmith, 
@JBGruber, 
@jcheng5, 
@jeroen, 
@jimbrig, 
@jjesusfilho, 
@jl5000, 
@jmuhlenkamp, 
@jonthegeek, 
@JosiahParry, 
@jwimberl, 
@krjaworski, 
@m-muecke, 
@maarten-vermeyen, 
@MarekGierlinski, 
@maxsutton, 
@mgirlich, 
@MichaelChirico, 
@mkoohafkan, 
@MSHelm, 
@mstei4176, 
@mthomas-ketchbrook, 
@NateNohling, 
@nick-youngblut, 
@pbulsink, 
@PietrH, 
@pkautio, 
@plietar, 
@pmlefeuvre-met, 
@rkrug, 
@romainfrancois, 
@salim-b, 
@shikokuchuo, 
@simplyalexander, 
@sluga, 
@stefanedwards, 
@steveputman, 
@tebancr, 
@thohan88, 
@tony2015116, 
@toobiwankenobi, 
@verhovsky, 
@walinchus, 
@werkstattcodes, and 
@zacdav-db.`,link:"https://www.tidyverse.org/blog/2025/01/httr2-1-1-0/",pubDate:"Mon, 20 Jan 2025 00:00:00 +0000",source:"Tidyverse Blog",sourceUrl:"https://www.tidyverse.org/blog/",category:"r-lang"},{id:"https://realpython.com/podcasts/rpp/235/",title:"The Real Python Podcast – Episode #235: Principles for Considering Your Python Tooling",description:`What are the principles you should consider when making decisions about which Python tools to use? What anti-patterns get in the way of making the right choices for your team? Christopher Trudeau is back on the show this week, bringing another batch of PyCoder's Weekly articles and projects.
[ Improve Your Python With 🐍 Python Tricks 💌 – Get a short & sweet Python Trick delivered to your inbox every couple of days. >> Click here to learn more and see examples ]`,link:"https://realpython.com/podcasts/rpp/235/",pubDate:"2025-01-17T12:00:00.000Z",source:"Real Python",sourceUrl:"https://realpython.com",category:"python"},{id:"https://www.tidyverse.org/blog/2025/01/text-rendering-updates/",title:"Updates to Text Rendering in R Graphics",description:`5x height
* [x] \`hugodown::use_tidy_thumbnails()\`
* [ ] Add intro sentence, e.g. the standard tagline for the package
* [ ] \`usethis::use_tidy_thanks()\`
-->

text rendering is one of those disciplines where, if you think you finally got it right, you can be 100% certain that you didn't
— Thomas Lin Pedersen (@thomasp85.com) January 10, 2025 at 10:44 AM

No reason to hide the fact: Text rendering is complicated! When I set out to improve the support for modern text rendering features in R all those years ago, I don’t think I truly appreciated that fact. And probably for the better, since I’m not sure I would have taken on the task had I known.
Taking the quote above as a universal truth (it comes from a reputable source after all), I’m sure I’ll never be fully done, but recent work on the whole stack at least makes me worry less about the correctness. This post will go through the changes that span the 
systemfonts, 
textshaping, and 
marquee packages and let you now how you, as a user or developer, should take advantage of them.
Working with non-installed fonts
  
    
      

      

    
  

The genesis of the systemfonts package was a need to be able to tap into the operating systems font library, so that whatever was installed on the system, would be available to graphics devices (assuming those devices used systemfonts). The scope of the package has gradually increased, and one of the needs that has become obvious over time, is a way to work with fonts, that aren’t installed on the system (E.g. if you want to bundle a font with a package, or if you are deploying a Shiny app that uses a specific font for the graphics).
Until now, the register_font() and register_variant() functions have been the only option for letting systemfonts know about fonts other than those installed on the system. However, both of these functions were designed to circumvent limitations in the R graphics system when it comes to font selection (e.g. no way to use a “thin” font variant as the only weight option in the graphics system is bold yes/no), and as such were clunky to use for introducing new fonts.
With the new version of systemfonts we get a dedicated way to tell systemfonts “please consider these font files as equals to the installed ones”. The function is called add_fonts() and all you need to do is to pass in a vector of paths to font files and these will then be reachable by systemfonts.
# Add fonts from specific files
systemfonts::add_fonts(c("path/to/font1.ttf", "path/to/font2.ttf"))


In addition to this function, systemfonts also comes with scan_local_fonts() that looks in ./fonts and ~/fonts and adds any fonts located there. The function is called when systemfonts is loaded meaning that you can immediately uses fonts saved in these directories. This is great for deploying projects because all you need to do is to include a fonts folder at the root of you project and these fonts will then always be available wherever you deploy your code.
While it is nice to have good access to the font files on your computer, the files has to come from somewhere. Nowadays that somewhere is usually 
Google Fonts or some other online font repository. systemfonts is now aware of a few of these repositories (Google Fonts and 
Font Squirrel for now), and can search and download from these (using search_web_fonts(), get_from_google_fonts(), and get_from_font_squirrel()). The downloaded fonts are automatically added using add_fonts() so they are immediately available, and by default they are placed in ~/fonts so that they persist across R sessions and projects.
# Search and download fonts
systemfonts::get_from_font_squirrel("Quicksand")
systemfonts::get_from_google_fonts("Rubik Moonrocks")


But what if you don’t want to think too much about all these details and just want to ensure that some specific font is available when a piece of code is running? In that case require_font() got you covered. This function allows you to state a dependency on a font in a script. The function scans the available fonts on the system and, if it doesn’t find anything, proceeds to look for the font in the online repositories, downloading it if it finds it. If that also fails the function will either throw an error, or map the required font to a fallback of your choosing:
library(systemfonts)
require_font("Rubik Moonrocks")

plot.new()
text(0.5, 0.5, "Fancy Font", family = "Rubik Moonrocks", cex = 6)



Remember that all of these niceties only goes into effect if you use a graphics device that uses systemfonts. For now, that more or less means that you should use ragg (you should use ragg anyway so that is not a terrible requirement).
Getting to the Glyphs
  
    
      

      

    
  

Most fonts these days are based on a vector outline. That means that they can be scaled smoothly to any size and doesn’t take up a lot of storage space. It also means that there are polygons inside the font files and that these can be extracted! This is now possible with systemfonts and the new glyph_outline() and glyph_raster() functions.
# Get the location of the glyph inside the font
moonrocks <- font_info("Rubik Moonrocks")
G <- glyph_info("G", path = moonrocks$path, index = moonrocks$index)

# Extract the outline of the glyph and plot it
outline <- glyph_outline(G$index, moonrocks$path, moonrocks$index, size = 400)
grid::grid.path(
  x = outline$x,
  y = outline$y + 20, # To raise the baseline a bit
  id = outline$contour,
  default.units = "bigpts",
  gp = grid::gpar(fill = "grey", col = "black", lwd = 4)
)



Extracting them as polygons means that we can do all sorts of weird stuff with them if we so pleases:
# Skew the glyph making it italic
grid::grid.path(
  x = outline$x + outline$y * 0.4,
  y = outline$y + 20, # To raise the baseline a bit
  id = outline$contour,
  default.units = "bigpts",
  gp = grid::gpar(fill = "grey", col = "black", lwd = 4)
)



(real italic glyphs are designed to look good skewed, not just skewed versions of the regular glyphs)
Remember how I said “most fonts” in the beginning of this section. There are still fonts that do not provide an outline, the prime example being most emoji fonts. The glyphs in such fonts are encoded as multiple bitmaps at fixed sizes (Microsofts emoji font going a different way by encoding them as SVGs). Since we can’t get to the data as outlines we can instead extract it as a raster:
emoji <- font_info("emoji")
dancer <- glyph_info("💃", path = emoji$path, index = emoji$index)
raster <- glyph_raster(dancer$index, emoji$path, emoji$index, size = 400)
grid::grid.draw(glyph_raster_grob(raster[[1]], 0, 50))



In the above we used the glyph_raster_grob() helper function to create a raster grob with the correct scaling of the resulting raster.
Raster extraction is not only for bitmap encoded fonts since it is easy to go from an outline to a raster (but not the other way around). Freetype (which systemfonts uses) includes a very efficient scanline rasterizer (the same as used in ragg) and we can thus get a raster version of any font:
raster2 <- glyph_raster(G$index, moonrocks$path, moonrocks$index, size = 400)
grid::grid.draw(glyph_raster_grob(raster2[[1]], 0, 20))



The Way the Text Flows
  
    
      

      

    
  

The thing that provoked me to writing the quote in the beginning of this blog post, was my work on the textshaping package. This package is largely invisible to the user but together with systemfonts it is responsible for laying out strings of text correctly. It figures out the location of every glyph and finds alternative fonts if the selected one doesn’t contain the needed glyph. textshaping powers ragg as well as marquee, doing the heavy lifting of translating a string of text into glyphs and locations.
Part of converting a string into glyphs and coordinates (a process known as text shaping) is to figure out which way the text flows and act accordingly. For many people left-to-right flow is the natural text direction, but this is merely a cultural bias and many scripts with a different flow exists (arabic and hebrew being the two most dominant right-to-left flowing scripts). So, part of shaping requires figuring out what script a specific character belongs to and what direction it flows. This is all fairly simple when a string internally agrees on the direction of flow, but can get much more complicated when scripts are embedded within other scripts that doesn’t have the same flow (not to mention scripts embedded even deeper). Combine all of this with soft wrapping of text inside an embedded script and you got the recipe for a headache. textshaping (through me) already made the claim that it fully supported bi-directional text but it turned out that I severely misjudged the complexity. Because of this, the shaping engine has been rewritten almost from scratch. Based on the starting quote I can’t quite claim that it now works 100% correctly but it does pass all 91.707 test cases for bidirectional text provided by the Unicode consortium so there’s that.
Again, it is unlikely that you will come into contact with textshaping directly so you will mostly experience these improvements in the way text just appears more correct (to the extend that this was ever an issue for you). The place you are most likely to stumble upon these changes is marquee, which uses textshaping under the hood. Styling in marquee has been expanded to include a text_direction setting. It defaults to "auto" which mean “deduce it from the text you get”, but you can also set it to "ltr" or "rtl" to set the direction explicitly. Be aware that this setting doesn’t change how single glyphs flow so you cannot use it to e.g. write arabic in left-to-right flow. Instead it governs the paragraph-level direction and thus how bi-directional text should be assembled. It also governs to which side indentation happen and the placement of bullets in bullet lists. Often, leaving it on the default value will work fine. There are also two new values for the align setting. "auto" picks either "left" or "right" depending on the text direction, while "justified" picks either "justified-left" or "justified-right". This makes it much easier to work natively with right-to-left text as everything just looks as it should. To top it off, classic_style() gains an ltr argument that controls whether the styling in general should cater to left-to-right or right-to-left text. It controls things such as the position of the grey bar in quotation blocks and the indentation of nested lists.
library(marquee)
# Create a style specific for rtl text
rtl_style <- classic_style(
  text_direction = "rtl", # Forces bidi text to be assembled from right to left
  align = "auto", # Will convert itself to "right"
  ltr = FALSE # Will move bullet padding and bar along quote blocks to the right
)





A marquee for Everyone
  
    
      

      

    
  

Speaking of marquee, the biggest obstacle it has put in front of its users is that it is build on very new features in R. The ability to write text by placing glyphs one at a time was only added in R 4.2 and not every graphics device supports it yet (worse still, the implementation in the default macOS quartz device caused the session to crash). Again, ragg is your friend, but the Cairo devices also has excellent support.
Text rendering, however, should always work. It is quite frustrating for text to not show up when you expect it to. Because of this it has been a clear plan to expand the support for marquee somehow. With the new version of marquee this is finally a reality. How does it work? Well, remember when we talked about extracting glyph outlines and rasters? If marquee encounters a graphics device that doesn’t provide the necessary features it will take matters into its own hands, by extracting all the necessary polygons and bitmaps and plot them. It is certainly not faster than relying on the optimized routines of the graphics device and it can also lead to visual degradation at smaller font sizes. But it works - everywhere.
To show it off, here is an svg created with svglite which doesn’t have the required new features:
text <- "_Fancy_ {.red Font}📝"

m_grob <- marquee_grob(
  text,
  classic_style(
    body_font = "Rubik Moonrocks",
    base_size = 72
  )
)

s <- svglite::svgstring(width = 7, height = 1.5)
grid::grid.draw(m_grob)
invisible(dev.off())

s()





  



  
    
  
















If you inspect the SVG above you’ll see that rather than being made up of text elements it is a collection of path and image elements.
Again, it is unlikely that many people will use marquee like this. It is much more likely that they will encounter it through ggplot2 in the form of geom_marquee() and element_marquee(). The takeaway, however, is the same - it is now safe to use marquee even when you don’t know which graphics device will be used to render the text with.
What’s Next?
  
    
      

      

    
  

Circling back to the starting quote. I’m 100% certain I’m not done yet. I believe the next big push will be proper support for vertical text in textshaping (it currently only deals with horizontal text). I also have some plans to get marquee to automatically translate the numbers in ordered lists into their proper representation in the script that is being used, so that e.g. ‘3.’ will be shown as ‘.٣’ when used with Arabic text.`,link:"https://www.tidyverse.org/blog/2025/01/text-rendering-updates/",pubDate:"Fri, 17 Jan 2025 00:00:00 +0000",source:"Tidyverse Blog",sourceUrl:"https://www.tidyverse.org/blog/",category:"r-lang"},{id:"https://realpython.com/courses/building-dictionary-comprehensions/",title:"Building Dictionary Comprehensions in Python",description:`Dictionary comprehensions are a concise and quick way to create, transform, and filter dictionaries in Python. They can significantly enhance your code’s conciseness and readability compared to using regular for loops to process your dictionaries.
Understanding dictionary comprehensions is crucial for you as a Python developer because they’re a Pythonic tool for dictionary manipulation and can be a valuable addition to your programming toolkit.
In this video course, you’ll learn how to:
Create dictionaries using dictionary comprehensions
Transform existing dictionaries with comprehensions
Filter key-value pairs from dictionaries using conditionals
Decide when to use dictionary comprehensions
[ Improve Your Python With 🐍 Python Tricks 💌 – Get a short & sweet Python Trick delivered to your inbox every couple of days. >> Click here to learn more and see examples ]`,link:"https://realpython.com/courses/building-dictionary-comprehensions/",pubDate:"2025-01-14T14:00:00.000Z",source:"Real Python",sourceUrl:"https://realpython.com",category:"python"},{id:"https://rweekly.org//2025-W03.html",title:"R Weekly 2025-W03 Bluesky, colours in R and Azure OpenAI",description:`Hello and welcome to this new issue!
\r
				
How to have (my) content shared by R Weekly?
Happy New Year! Welcome to our first issue of 2025. This week’s content was curated by Batool Almarzouq, with support from our amazing R Weekly team members and contributors. Happy reading!
Highlight
Bluesky conversation analysis with local and frontier LLMs with R/Tidyverse.
Working with colours in R
Harnessing Azure OpenAI and R for Web Content Summarisation: A Practical Guide with rvest and tidyverse
Insights
Revisiting depression incidence by county and vote for Trump by @ellis2013nz

Bluesky conversation analysis with local and frontier LLMs with R/Tidyverse.
Strategic Investment Analysis: Key Questions Generated by DoTadda’s Knowledge Platform

R in the Real World
Infodemiology & Health Insights: Analyzing Trends in Back Pain using R & Google Trends data
What region is Pittsburgh in? Unsupervised learning with spatially constrained clustering.
R in Academia
New Paper: Towards a Generative Model of Emotion Dynamics
Resources
Reposting Partial Pooling
Website for tidyplots use cases, complete with data and code
New Packages
📦 Go Live for More New Pkgs 📦
 -->
📦 Keep up to date wtih CRANberries 📦
CRAN
{CMHSU} 0.0.6.9: Mental Health Status, Substance Use Status and their Concurrent
Status in North American Healthcare Administrative Databases
{BerkeleyForestsAnalytics} 2.0.4: Compute and Summarize Core Forest Metrics from Field Data
{S4DM} 0.0.1: Small Sample Size Species Distribution Modeling
{linevis} 1.0.0: Interactive Time Series Visualizations
{geneviewer} 0.1.10: Gene Cluster Visualizations

{jetty} 0.1.0: Execute R in a ‘Docker’ Context
{ColombiAPI} 0.1.0: Access Colombia’s Public Data via ‘API-Colombia’
{collett} 0.1.0: Datasets from “Modelling Survival Data in Medical Research” by
Collett
{pacta.multi.loanbook} 0.1.1: Run ‘PACTA’ on Multiple Loan Books Easily
{ellmer} 0.1.0: Chat with Large Language Models
{drone} 1.0.0: Data for Data Visualisation Geometries Encyclopedia
{tidyprompt} 0.0.1: Prompt Large Language Models and Enhance Their Functionality
{epiparameter} 0.4.0: Classes and Helper Functions for Working with Epidemiological
Parameters
{Certara.RsNLME.ModelExecutor} 3.0.1: Execute Pharmacometric Models Using ‘shiny’
{ritalic} 0.10.1: Interface to the ITALIC Database of Lichen Biodiversity
GitHub or Bitbucket
{th2analytics} 0.0.1 thaink² analytics SDK forecasting as a service
{mapmetadata} 3.0.0: Mapping from variables to concepts

Updated Packages
🔍 Search on R-universe 🔍
Another season, another release. {survivoR} v2.3.5 now on CRAN
nanotime 0.3.11 on CRAN: Polish
inline 0.3.21: Minor Polish
RcppGetconf 0.0.4 on CRAN: Updates
{makepipe} 0.2.2: Pipeline Tools Inspired by ‘GNU Make’ - NEWS, - diffify
{ggiraph} 0.8.12: Make ‘ggplot2’ Graphics Interactive - diffify

{BioVizSeq} 1.0.1: Visualizing the Elements Within Bio-Sequences - diffify
{cnum} 0.1.4: Chinese Numerals Processing - diffify
{tabula} 3.2.0: Analysis and Visualization of Archaeological Count Data - diffify
{DEPONS2R} 1.2.5: Read, Plot and Analyse Output from the DEPONS Model - diffify
{syllogi} 1.0.4: Collection of Data Sets for Teaching Purposes - diffify
{rgoogleads} 0.12.0: Loading Data from ‘Google Ads API’ - diffify
{onemap} 3.2.0: Construction of Genetic Maps in Experimental Crosses - diffify
{khroma} 1.15.0: Colour Schemes for Scientific Data Visualization - diffify
{forestly} 0.1.2: Interactive Forest Plot - diffify
{ruminate} 0.3.1: A Pharmacometrics Data Transformation and Analysis Tool - diffify
{BiodiversityR} 2.17-1: Package for Community Ecology and Suitability Analysis - diffify
{datawizard} 1.0.0: Easy Data Wrangling and Statistical Transformations - diffify
{rix} 0.14.3: Reproducible Data Science Environments with ‘Nix’ - diffify
{rtables} 0.6.11: Reporting Tables - diffify
{collapse} 2.0.19: Advanced and Fast Data Transformation - diffify
{plotthis} 0.5.0: High-Level Plotting Built Upon ‘ggplot2’ and Other Plotting
Packages - diffify
{colourvision} 2.1.0: Colour Vision Models - diffify
{dpkg} 0.6.1: Create, Stow, and Read Data Packages - diffify
{plotmm} 0.1.2: Tidy Tools for Visualizing Mixture Models - diffify
{ggspectra} 0.3.15: Extensions to ‘ggplot2’ for Radiation Spectra - diffify
{jsmodule} 1.6.1: ‘RStudio’ Addins and ‘Shiny’ Modules for Medical Research - diffify
{jskm} 0.5.8: Kaplan-Meier Plot with ‘ggplot2’ - diffify
{tidyterra} 0.6.2: ‘tidyverse’ Methods and ‘ggplot2’ Helpers for ‘terra’ Objects - diffify

{ggbreak} 0.1.3: Set Axis Break for ‘ggplot2’ - diffify
Videos and Podcasts
Listen to the R-Weekly Highlights Podcast
R Internationally
Genocidio en Palestina 🍉
Tutorials
Harnessing Azure OpenAI and R for Web Content Summarisation: A Practical Guide with rvest and tidyverse
Setting values in R6 classes, and testing with shiny::MockShinySession
Little useless-useful R functions – QR-Code Clock
Little useless-useful R functions – Vanishing sentences
Some of the more useful Tidyverse functions
R and Python Together: Refactoring and Prompt Engineering A Previous Case Study, Using the Perplexity API
Setting values in R6 classes, and testing with shiny::MockShinySession
Working with colours in R

How to Create an Empty Matrix in R: A Comprehensive Guide

How to Create an Empty Data Frame in R: A Comprehensive Guide with Examples
How to Remove Rows with Any Zeros in R: A Complete Guide with Examples
How to Transpose Data Frames in R: Complete Guide with Examples
Reflecting on the Past Year: A LinkedIn Year in Review (2024)
Rounding Numbers in R with Examples: A Comprehensive Guide
Comprehensive Guide to Arcsine Transformation in R with Examples
3MW (Adding Async Streams to Our Shiny Chat Bot)

-->

R Project Updates
Updates from R Core:
Upcoming Events in 3 Months
Events in 3 Months:
A list of R conferences and meetings
This week’s local R-User and applied stats events
Weekly R Workshops for Ukraine
Connect
Join the Data Science Learning Community
rtistry
Day 6 of #genuary, Make a landscape using only primitive shapes#Rstats code: https://t.co/gXP1HZ8hOW#genuary6 #genart pic.twitter.com/b5esNUjoXv
— Georgios Karamanis (@geokaramanis) January 7, 2025



Today's artwork generated with #rstats and #ggplot2: pic.twitter.com/yFney62N6L
— aRtsy package (@aRtsy_package) January 13, 2025


Quotes of the Week
Please, if you have an idea for a package, just write it and publish it on CRAN. The availability of high quality packages are one of #RStats greatest strengths, just package stuff please pic.twitter.com/dY3JhKdDUr
— Bruno Rodrigues (@brodriguesco@fosstodon.org) (@brodriguesco) January 10, 2025



12 years. RIP my darling boy. pic.twitter.com/RFLpiwPqLP
— Susan Swartz (@beadmomsw) January 11, 2025



08.01.2025 📅 
Today’s Quote: 
“It always seems impossible until it's done.” — Nelson Mandela pic.twitter.com/UMS6Q3yCPE
— Hanwool Park (@hanwoolpark2426) January 8, 2025`,link:"https://rweekly.org//2025-W03.html",pubDate:"Mon, 13 Jan 2025 00:00:00 +0000",source:"R Weekly",sourceUrl:"https://rweekly.org",category:"r-lang"},{id:"https://www.tidyverse.org/blog/2025/01/orbital-0-3-0/",title:"orbital 0.3.0",description:`5x height
* [x] [\`hugodown::use_tidy_thumbnails()\`](https://rdrr.io/pkg/hugodown/man/use_tidy_post.html)
* [x] Add intro sentence, e.g. the standard tagline for the package
* [x] [\`usethis::use_tidy_thanks()\`](https://usethis.r-lib.org/reference/use_tidy_thanks.html)
-->
We’re thrilled to announce the release of 
orbital 0.3.0. orbital lets you predict in databases using tidymodels workflows.
You can install it from CRAN with:
install.packages("orbital")
This blog post will cover the highlights, which are classification support and the new augment method.
You can see a full list of changes in the 
release notes.
Classification support
  
    
      

      

    
  

The biggest improvement in this version is that 
orbital() now works for supported classification models. See 
vignette for list of all supported models.
Let’s start by fitting a classification model on the penguins data set, using {xgboost} as the engine.
rec_spec <- recipe(species ~ ., data = penguins) |>
  step_unknown(all_nominal_predictors()) |>
  step_dummy(all_nominal_predictors()) |>
  step_impute_mean(all_numeric_predictors()) |>
  step_zv(all_predictors())

lr_spec <- boost_tree() |>
  set_mode("classification") |>
  set_engine("xgboost")

wf_spec <- workflow(rec_spec, lr_spec)
wf_fit <- fit(wf_spec, data = penguins)
With this fitted workflow object, we can call 
orbital() on it to create an orbital object.
orbital_obj <- orbital(wf_fit)
orbital_obj
#> 
#> ── orbital Object ──────────────────────────────────────────────────────────────
#> • island = dplyr::if_else(is.na(island), "unknown", island)
#> • sex = dplyr::if_else(is.na(sex), "unknown", sex)
#> • island_Dream = as.numeric(island == "Dream")
#> • island_Torgersen = as.numeric(island == "Torgersen")
#> • sex_male = as.numeric(sex == "male")
#> • sex_unknown = as.numeric(sex == "unknown")
#> • bill_length_mm = dplyr::if_else(is.na(bill_length_mm), 43.92193, bill_l ...
#> • bill_depth_mm = dplyr::if_else(is.na(bill_depth_mm), 17.15117, bill_dep ...
#> • flipper_length_mm = dplyr::if_else(is.na(flipper_length_mm), 201, flipp ...
#> • body_mass_g = dplyr::if_else(is.na(body_mass_g), 4202, body_mass_g)
#> • island_Dream = dplyr::if_else(is.na(island_Dream), 0.3604651, island_Dr ...
#> • island_Torgersen = dplyr::if_else(is.na(island_Torgersen), 0.1511628, i ...
#> • sex_male = dplyr::if_else(is.na(sex_male), 0.4883721, sex_male)
#> • sex_unknown = dplyr::if_else(is.na(sex_unknown), 0.03197674, sex_unknow ...
#> • Adelie = 0 + dplyr::case_when((bill_depth_mm < 15.1 | is.na(bill_depth_ ...
#> • Chinstrap = 0 + dplyr::case_when((island_Dream < 0.5 | is.na(island_Dre ...
#> • Gentoo = 0 + dplyr::case_when((bill_depth_mm < 15.95 | is.na(bill_depth ...
#> • .pred_class = dplyr::case_when(Adelie > Chinstrap & Adelie > Gentoo ~ " ...
#> ────────────────────────────────────────────────────────────────────────────────
#> 18 equations in total.

This object contains all the information that is needed to produce predictions. Which we can produce with 
predict().
predict(orbital_obj, penguins)
#> # A tibble: 344 × 1
#>    .pred_class
#>    <chr>      
#>  1 Adelie     
#>  2 Adelie     
#>  3 Adelie     
#>  4 Adelie     
#>  5 Adelie     
#>  6 Adelie     
#>  7 Adelie     
#>  8 Adelie     
#>  9 Adelie     
#> 10 Adelie     
#> # ℹ 334 more rows

The main thing to note here is that the orbital package produces character vectors instead of factors. This is done as a unifying approach since many databases don’t have factor types.
Speaking of databases, you can 
predict() on an orbital object using tables from databases. Below we create an ephemeral in-memory RSQLite database.
library(DBI)
library(RSQLite)

con_sqlite <- dbConnect(SQLite(), path = ":memory:")
penguins_sqlite <- copy_to(con_sqlite, penguins, name = "penguins_table")
And we can predict with it like normal. All the calculations are sent to the database for execution.
predict(orbital_obj, penguins_sqlite)
#> # Source:   SQL [?? x 1]
#> # Database: sqlite 3.47.1 []
#>    .pred_class
#>    <chr>      
#>  1 Adelie     
#>  2 Adelie     
#>  3 Adelie     
#>  4 Adelie     
#>  5 Adelie     
#>  6 Adelie     
#>  7 Adelie     
#>  8 Adelie     
#>  9 Adelie     
#> 10 Adelie     
#> # ℹ more rows

This works the same with 
many types of databases.
Classification is different from regression in part because it comes with multiple prediction types. The above example showed the default which is hard classification. You can set the type of prediction you want with the type argument to orbital. For classification models, possible options are "class" and "prob".
orbital_obj_prob <- orbital(wf_fit, type = c("class", "prob"))
orbital_obj_prob
#> 
#> ── orbital Object ──────────────────────────────────────────────────────────────
#> • island = dplyr::if_else(is.na(island), "unknown", island)
#> • sex = dplyr::if_else(is.na(sex), "unknown", sex)
#> • island_Dream = as.numeric(island == "Dream")
#> • island_Torgersen = as.numeric(island == "Torgersen")
#> • sex_male = as.numeric(sex == "male")
#> • sex_unknown = as.numeric(sex == "unknown")
#> • bill_length_mm = dplyr::if_else(is.na(bill_length_mm), 43.92193, bill_l ...
#> • bill_depth_mm = dplyr::if_else(is.na(bill_depth_mm), 17.15117, bill_dep ...
#> • flipper_length_mm = dplyr::if_else(is.na(flipper_length_mm), 201, flipp ...
#> • body_mass_g = dplyr::if_else(is.na(body_mass_g), 4202, body_mass_g)
#> • island_Dream = dplyr::if_else(is.na(island_Dream), 0.3604651, island_Dr ...
#> • island_Torgersen = dplyr::if_else(is.na(island_Torgersen), 0.1511628, i ...
#> • sex_male = dplyr::if_else(is.na(sex_male), 0.4883721, sex_male)
#> • sex_unknown = dplyr::if_else(is.na(sex_unknown), 0.03197674, sex_unknow ...
#> • Adelie = 0 + dplyr::case_when((bill_depth_mm < 15.1 | is.na(bill_depth_ ...
#> • Chinstrap = 0 + dplyr::case_when((island_Dream < 0.5 | is.na(island_Dre ...
#> • Gentoo = 0 + dplyr::case_when((bill_depth_mm < 15.95 | is.na(bill_depth ...
#> • .pred_class = dplyr::case_when(Adelie > Chinstrap & Adelie > Gentoo ~ " ...
#> • norm = exp(Adelie) + exp(Chinstrap) + exp(Gentoo)
#> • .pred_Adelie = exp(Adelie) / norm
#> • .pred_Chinstrap = exp(Chinstrap) / norm
#> • .pred_Gentoo = exp(Gentoo) / norm
#> ────────────────────────────────────────────────────────────────────────────────
#> 22 equations in total.

Notice how we can select both "class" and "prob". The predictions now include both hard and soft class predictions.
predict(orbital_obj_prob, penguins)
#> # A tibble: 344 × 4
#>    .pred_class .pred_Adelie .pred_Chinstrap .pred_Gentoo
#>    <chr>              <dbl>           <dbl>        <dbl>
#>  1 Adelie             0.989         0.00554      0.00560
#>  2 Adelie             0.989         0.00554      0.00560
#>  3 Adelie             0.989         0.00554      0.00560
#>  4 Adelie             0.709         0.0245       0.267  
#>  5 Adelie             0.989         0.00554      0.00560
#>  6 Adelie             0.989         0.00554      0.00560
#>  7 Adelie             0.989         0.00554      0.00560
#>  8 Adelie             0.989         0.00554      0.00560
#>  9 Adelie             0.979         0.00549      0.0158 
#> 10 Adelie             0.980         0.00559      0.0148 
#> # ℹ 334 more rows

That works equally well in databases.
predict(orbital_obj_prob, penguins_sqlite)
#> # Source:   SQL [?? x 4]
#> # Database: sqlite 3.47.1 []
#>    .pred_class .pred_Adelie .pred_Chinstrap .pred_Gentoo
#>    <chr>              <dbl>           <dbl>        <dbl>
#>  1 Adelie             0.989         0.00554      0.00560
#>  2 Adelie             0.989         0.00554      0.00560
#>  3 Adelie             0.989         0.00554      0.00560
#>  4 Adelie             0.709         0.0245       0.267  
#>  5 Adelie             0.989         0.00554      0.00560
#>  6 Adelie             0.989         0.00554      0.00560
#>  7 Adelie             0.989         0.00554      0.00560
#>  8 Adelie             0.989         0.00554      0.00560
#>  9 Adelie             0.979         0.00549      0.0158 
#> 10 Adelie             0.980         0.00559      0.0148 
#> # ℹ more rows

New augment method
  
    
      

      

    
  

The users of tidymodels have found the 
augment() function to be a handy tool. This function performs predictions and returns them alongside the original data set.
This release adds 
augment() support for orbital objects.
augment(orbital_obj, penguins)
#> # A tibble: 344 × 8
#>    .pred_class species island    bill_length_mm bill_depth_mm flipper_length_mm
#>    <chr>       <fct>   <fct>              <dbl>         <dbl>             <int>
#>  1 Adelie      Adelie  Torgersen           39.1          18.7               181
#>  2 Adelie      Adelie  Torgersen           39.5          17.4               186
#>  3 Adelie      Adelie  Torgersen           40.3          18                 195
#>  4 Adelie      Adelie  Torgersen           NA            NA                  NA
#>  5 Adelie      Adelie  Torgersen           36.7          19.3               193
#>  6 Adelie      Adelie  Torgersen           39.3          20.6               190
#>  7 Adelie      Adelie  Torgersen           38.9          17.8               181
#>  8 Adelie      Adelie  Torgersen           39.2          19.6               195
#>  9 Adelie      Adelie  Torgersen           34.1          18.1               193
#> 10 Adelie      Adelie  Torgersen           42            20.2               190
#> # ℹ 334 more rows
#> # ℹ 2 more variables: body_mass_g <int>, sex <fct>

The function works for most databases, but for technical reasons doesn’t work with all. It has been confirmed to not work work in spark databases or arrow tables.
augment(orbital_obj, penguins_sqlite)
#> # Source:   SQL [?? x 8]
#> # Database: sqlite 3.47.1 []
#>    .pred_class species island    bill_length_mm bill_depth_mm flipper_length_mm
#>    <chr>       <chr>   <chr>              <dbl>         <dbl>             <int>
#>  1 Adelie      Adelie  Torgersen           39.1          18.7               181
#>  2 Adelie      Adelie  Torgersen           39.5          17.4               186
#>  3 Adelie      Adelie  Torgersen           40.3          18                 195
#>  4 Adelie      Adelie  Torgersen           NA            NA                  NA
#>  5 Adelie      Adelie  Torgersen           36.7          19.3               193
#>  6 Adelie      Adelie  Torgersen           39.3          20.6               190
#>  7 Adelie      Adelie  Torgersen           38.9          17.8               181
#>  8 Adelie      Adelie  Torgersen           39.2          19.6               195
#>  9 Adelie      Adelie  Torgersen           34.1          18.1               193
#> 10 Adelie      Adelie  Torgersen           42            20.2               190
#> # ℹ more rows
#> # ℹ 2 more variables: body_mass_g <int>, sex <chr>

Acknowledgements
  
    
      

      

    
  

A big thank you to all the people who have contributed to orbital since the release of v0.3.0:
@EmilHvitfeldt, 
@joscani, 
@jrosell, 
@npelikan, and 
@szimmer.`,link:"https://www.tidyverse.org/blog/2025/01/orbital-0-3-0/",pubDate:"Mon, 13 Jan 2025 00:00:00 +0000",source:"Tidyverse Blog",sourceUrl:"https://www.tidyverse.org/blog/",category:"r-lang"},{id:"https://realpython.com/podcasts/rpp/234/",title:"The Real Python Podcast – Episode #234: Building New Structures for Learning Python",description:`What are the new ways we can teach and share our knowledge about Python? How can we improve the structure of our current offerings and build new educational resources for our audience of Python learners? This week on the show, Real Python core team members Stephen Gruppetta and Martin Breuss join us to discuss enhancements to the site and new ways to learn Python.
[ Improve Your Python With 🐍 Python Tricks 💌 – Get a short & sweet Python Trick delivered to your inbox every couple of days. >> Click here to learn more and see examples ]`,link:"https://realpython.com/podcasts/rpp/234/",pubDate:"2025-01-10T12:00:00.000Z",source:"Real Python",sourceUrl:"https://realpython.com",category:"python"},{id:"https://www.tidyverse.org/blog/2025/01/joining-ggplot2/",title:"Joining the ggplot2 team",description:`5x height
* [x] [\`hugodown::use_tidy_thumbnails()\`](https://rdrr.io/pkg/hugodown/man/use_tidy_post.html)
* [ ] Add intro sentence, e.g. the standard tagline for the package
* [ ] [\`usethis::use_tidy_thanks()\`](https://usethis.r-lib.org/reference/use_tidy_thanks.html)
-->
Hello there! I’ve been working on ggplot2 for a while now, and I’d like to tell you how that came about and what it is like.
How I got involved
  
    
      

      

    
  

My journey into learning R started in 2017 during an internship at the EMBL-EBI. The main gripe about base R plotting that drove me into ggplot2’s arms were the arcane invocations to get anything else than one of the pre-approved chart types. In contrast, ggplot2 absorbs a bunch of small paper cuts, is very compositional in nature while remaining highly customisable. In a bid to “learn from the mistakes of others” rather than (continue to copiously) make my own, I became active on Stack Overflow answering questions and solving plotting issues. For posterity: this was in the days before you could ask an large language model for personalised advice and actual humans were equally frustrated on both sides of the question.
I was keeping track of solutions to common problems in a personal cookbook that had its own arcane invocations. To give a bit of flavour: much of the cookbook was about preparing gtables (the data structure that comes out of building a plot) for combining and aligning plots. 1 The cookbook eventually grew into my first ggplot2 extension package: 
ggh4x. Perhaps that package would be best subtitled: ‘Remedies to my common ggplot2 ailments’. It contains a bunch of miscellaneous functions ranging from reorganising facets to putting minor ticks on the axes. The nature of the package was also its downside, as ggh4x lacked any sense of scope (and still does, as befits any first package).
Around the time when I was really getting into ggplot extensions, 
Gina Reynolds had started organising a meeting for people who build ggplot2 extensions. It is an interesting place to meet others and hear about their packages and how they face interacting with the ggplot2 extension system. I started attending with some degree of regularity and made a discussion place on GitHub. We now use this for general exchange of ideas, but also package specific issues.
Meanwhile, the questions on Stack Overflow kept directing my attention at the ggplot2 issue tracker every once in a while. After lurking in there for a bit, I started my first informal contributions to ggplot2 itself by answering the simple stuff just as I did on Stack Overflow. It may not seem like much of a contribution, but in retrospect, answering issues helps triaging them: it separates those issues that need additional changes in ggplot2 from those that do not. My first ‘proper contribution’ in the shape of a pull request was in 2020. It replaced 3 lines of code with 2 lines of code to benefit type stability (this was prior to 
vctrs)2.
In 2022, I commented “I’d be willing to take a stab at this” on an issue proposing a large refactor of the guide system. I like to think it was this precise moment that Thomas, the project lead after having taken over for Hadley, took notice and later invited me to join the team3. This new guide system ended up laying the foundation for 
legendry, so it wasn’t entirely out of unselfish reasons that I volunteered. At any rate, this is a great opportunity to fill big shoes on a major R project, so I’m very excited to have joined!
Becoming an insider
  
    
      

      

    
  

Part of being on the team is straightforward. You triage issues. You fix bugs. You implement new features. At the point that I joined, I had already done these things as an outsider. The only thing that really changes is that you get the keys to the kingdom: you can now close issues and merge pull requests 4. You’re then trusted to wield this power wisely. You then hope you do.
At the time I joined the most active maintainers were Thomas, Claus and Hiroaki. I was surprised to learn that really most communication happens on GitHub and it is all public discussion. Even more abstract coordination that does not neatly fit into a single issue, like preparing a new release, didn’t occur behind closed doors. I think what made my introduction to the team more awkward than it needed to be was that GitHub issues is not really a good place for announcements where you can say ‘Hi everyone, this person is on the team now and will be doing stuff in the project’. I had interacted with the other active maintainers before, so I wasn’t a completely alien actor, but I felt some unclarity lingered longer than it ought have. Perhaps I should more assertively have introduced myself 5.
However, by the time posit::conf(2024) was over, I’ve met 6 out of the 9 other authors in person. I have more thoughts about conf and my first time in the United States, but it has been amazing to meet all these people in person whose work you’ve been admiring for a while!
Maintaining ggplot2
  
    
      

      

    
  

The ggplot2 package has both the blessing and the curse of being a popular package. One the one hand, it is a blessing that people care about the project, post issues that they find and make intermittent contributions. The curse is that it is such a staple in the R ecosystem, that almost any change will inadvertently affect somebody else’s code. Not only because ggplot2 is widely used, but also because people have been …creative… with how they are using ggplot2. The art of making changes is to largely affect plots in a good way.
The first big project I was rummaging through was the guide system I proposed to rewrite. The guide system had never been advertised as an official extension point, but naturally that didn’t preclude people from using it as an extension point anyway.6 So in addition to rewriting the system, we also had to prevent terribly breaking extensions that relied on the old system. In some cases, this meant sending out PRs to other packages to be compatible with both systems.
Having worked through a good number of issues at this point in time, I can see some emergent patterns. Different patterns can be partially explained by different audiences. The regular user wants to be empowered to execute their vision of a plot effectively. Maintainers of extensions would often like things to work consistently or change a very obscure line somewhere that they have identified as blocking a niche use case. Teachers would like their students to get stuck less often, which often involves improving error messages. All in all, there is no shortage of issues to work through.
The next big thing we’re working on is some practical necromancy in getting themeable aesthetics resurrected, which was 
initiated by Dana Paige Seidel all the way back in 2018! We’d like the theme to be a home for more default choices than just non-data elements. Default layer aesthetics are a start, but we plan on putting in default palettes too.
A few words of thanks
  
    
      

      

    
  

I’ve been plucked from a level of relative obscurity —a package maintainer that has this weird miscellaneous package— into the path of a flagship R project, for which I’m very grateful. First and foremost I’m thankful to Thomas Lin Pedersen, who has put me into this position and steers the ggplot2 project. Secondly to Hadley Wickham and the rest of the tidyverse team, who make me feel included; both at conf and during regular meetings7. Thirdly, the co-authors I met during conf: Claus Wilke, for whose workshop I TA’d, but also Kara Woo and Winston Chang. Lastly, I’d like to thank Posit the company for contracting me to do work I also enjoy as a hobby!
Luckily, we don’t have to think about this at all, thanks to the 
patchwork package! ↩︎
I’m omitting here that I also had to write 50 lines of tests for this small change ↩︎
How much this actually reflects any truth is for any of us to guess and for Thomas to know. Later, I learned that this was also 
how Thomas himself was roped into the project! ↩︎
After review though. You’re not given that much power! ↩︎
But I’m not celebrated for my social graces :) ↩︎
I don’t have a moral high ground here: I was one of the worst offenders! ↩︎
Mostly for The Golden Hex Sticker though! ↩︎`,link:"https://www.tidyverse.org/blog/2025/01/joining-ggplot2/",pubDate:"Thu, 09 Jan 2025 00:00:00 +0000",source:"Tidyverse Blog",sourceUrl:"https://www.tidyverse.org/blog/",category:"r-lang"},{id:"https://www.tidyverse.org/blog/2025/01/tidymodels-2025-internship/",title:"tidymodels Internship for 2025",description:`We are chuffed once again to offer a summer internship with the tidymodels team.
We’ve had eight previous summer interns and these led to the creation of a number of new packages: 
agua, 
applicable, 
bundle, 
butcher, 
shinymodels, 
spatialsample, and 
stacks. Our own 
Simon Couch is a former intern who won 
an award for his work.
This year, the primary focus is on expanding our feature selection capabilities. Some of this will involve new recipe steps and other functions. Towards the end of the internship, there might be time to work on other things, too!
To apply, make sure that you have a GitHub handle and follow this link:

https://posit.co/job-detail/?gh_jid=6323043003
The internship is US-based.
If you want to know what the internship is like, a few of our alumni have written about it:
A summer with RStudio (2018)
RStudio Summer Internship (2018)
This Is Not Like the Others (2019)
Tidymodels Internship (2020)
I know what I did last summer (2022)
We can’t wait to get started and look forward to reading your applications.`,link:"https://www.tidyverse.org/blog/2025/01/tidymodels-2025-internship/",pubDate:"Wed, 08 Jan 2025 00:00:00 +0000",source:"Tidyverse Blog",sourceUrl:"https://www.tidyverse.org/blog/",category:"r-lang"},{id:"https://realpython.com/courses/interactive-python/",title:"Ways to Start Interacting With Python",description:`There are multiple ways of interacting with Python, and each can be useful for different scenarios. You can quickly explore functionality in Python’s interactive mode using the built-in Read-Eval-Print Loop (REPL), or you can write larger applications to a script file using an editor or Integrated Development Environment (IDE).
In this video course, you’ll learn how to:
Use Python interactively by typing code directly into the interpreter
Execute code contained in a script file from the command line
Work within a Python Integrated Development Environment (IDE)
Assess additional options, such as Thonny and Python’s IDLE
[ Improve Your Python With 🐍 Python Tricks 💌 – Get a short & sweet Python Trick delivered to your inbox every couple of days. >> Click here to learn more and see examples ]`,link:"https://realpython.com/courses/interactive-python/",pubDate:"2025-01-07T14:00:00.000Z",source:"Real Python",sourceUrl:"https://realpython.com",category:"python"},{id:"https://realpython.com/podcasts/rpp/233/",title:"The Real Python Podcast – Episode #233: PyCoder's Weekly 2024 Top Articles & Missing Gems",description:`PyCoder's Weekly included over 1,500 links to articles, blog posts, tutorials, and projects in 2024. Christopher Trudeau is back on the show this week to help wrap it all up by sharing some highlights and uncovering a few missing gems from the pile.
[ Improve Your Python With 🐍 Python Tricks 💌 – Get a short & sweet Python Trick delivered to your inbox every couple of days. >> Click here to learn more and see examples ]`,link:"https://realpython.com/podcasts/rpp/233/",pubDate:"2025-01-03T12:00:00.000Z",source:"Real Python",sourceUrl:"https://realpython.com",category:"python"},{id:" https://julialang.org/blog/2025/01/the-satellite-toolbox-ecosystem/index.html ",title:`
      The SatelliteToolbox.jl Ecosystem  
  `,description:"The history of the SatelliteToolbox.jl ecosystem",link:" https://julialang.org/blog/2025/01/the-satellite-toolbox-ecosystem/index.html ",pubDate:"Fri, 03 Jan 2025 00:00:00 +0000",source:"Julia Language Blog",sourceUrl:"https://julialang.org/blog/",category:"julia"},{id:" https://julialang.org/blog/2025/01/this-month-in-julia-world/index.html ",title:`
      This Month in Julia World  
  `,description:"Community Newsletter for December 2024",link:" https://julialang.org/blog/2025/01/this-month-in-julia-world/index.html ",pubDate:"Wed, 01 Jan 2025 00:00:00 +0000",source:"Julia Language Blog",sourceUrl:"https://julialang.org/blog/",category:"julia"},{id:"https://realpython.com/courses/django-rest-framework/",title:"Building HTTP APIs With Django REST Framework",description:`REST is a loosely defined protocol for listing, creating, changing, and deleting data on your server over HTTP. The Django REST framework (DRF) is a toolkit built on top of the Django web framework that reduces the amount of code you need to write to create REST HTTP API interfaces.
In this course you’ll learn about:
The REST protocol
DRF Serializers and how to use them with Django objects
Using Django views and DRF ViewSet classes to create REST end-points
Multiple flavors of renderers and how to control their output
Specifying permissions and limiting who can see what data in your REST API
[ Improve Your Python With 🐍 Python Tricks 💌 – Get a short & sweet Python Trick delivered to your inbox every couple of days. >> Click here to learn more and see examples ]`,link:"https://realpython.com/courses/django-rest-framework/",pubDate:"2024-12-31T14:00:00.000Z",source:"Real Python",sourceUrl:"https://realpython.com",category:"python"},{id:"https://rweekly.org//2024-W52.html",title:"R Weekly 2024-W52 Rlinguo, R for music, Shiny sprite randomiser",description:`Hello and welcome to this new issue!
\r
				
How to have (my) content shared by R Weekly?
This week’s release was curated by Sam Parmar, with help from the R Weekly team members and contributors.
Highlight
Introducing Rlinguo, a native mobile app that runs R
Why would I use R for music?
A roguelike sprite randomiser with Shiny
Insights
Introducing Rlinguo, a native mobile app that runs R

Why would I use R for music?

#45: Some r-ci Updates
Integrating Machine Learning Models in Shiny
How to Use {renv} and Bioconductor for Reproducible Data Analysis
Pins in Databricks
Use an LLM to translate help documentation on-the-fly
Unified branding across Posit tools with brand.yml
RStudio IDE and Posit Workbench 2024.12.0: What’s New
The Perplexed Banker
Baby got backreferences
R in Organizations
AWS for Pharmaceutical and Life Science Companies: Guide for Directors
Summary of 2024: Appsilon’s Focus on Life Sciences  🧬
Announcing DevOps for Data Science by Alex Gold
Posit’s pledge to support open source
Connect Cloud moves into Beta with new features and subscription plans
rOpenSci News Digest, December 2024
Introducing the rOpenSci Localization and Translation Guidelines
New Packages
📦 Go Live for More New Pkgs 📦
 -->
📦 Keep up to date wtih CRANberries 📦
CRAN
November 2024 Top 40 New CRAN Packages
{ggtaxplot} 0.0.1: Create Plots to Visualize Taxonomy
{ciphertext} 0.1.0: Classical Cryptography Methods for Words and Phrases
{Certara.RsNLME.ModelBuilder} 3.0.1: Pharmacometric Model Building Using ‘shiny’
{cpp11qpdf} 1.3.5: Split, Combine and Compress PDF Files
{spanishoddata} 0.1.0: Get Spanish Origin-Destination Data
{shinychat} 0.1.1: Chat UI Component for ‘shiny’
{datacutr} 0.2.1: SDTM Datacut
{colorfast} 1.0.0: Fast Conversion of R Colors to Color Component Values and Native Packed Integer Format
GitHub or Bitbucket
{oomph}
{chesstrainer}
Updated Packages
🔍 Search on R-universe 🔍
BH 1.87.0-1 on CRAN: New Upstream
{PSS.Health} 1.1.4: Power and Sample Size for Health Researchers via Shiny - diffify
{climate} 1.2.2: Interface to Download Meteorological (and Hydrological) Datasets - diffify
{tidyBdE} 0.3.8: Download Data from Bank of Spain - diffify
{GHCNr} 1.0.0: Download Weather Station Data from GHCN - diffify
{argparse} 2.2.5: Command Line Optional and Positional Argument Parser - diffify
{logib} 0.2.0: Salary Analysis by the Swiss Federal Office for Gender Equality - diffify
{aifeducation} 1.0.0: Artificial Intelligence for Education - diffify
{gastempt} 0.7.0: Analyzing Gastric Emptying from MRI or Scintigraphy - diffify
{openxlsx2} 1.12: Read, Write and Edit ‘xlsx’ Files - diffify
{DrugUtilisation} 0.8.1: Summarise Patient-Level Drug Utilisation in Data Mapped to the
OMOP Common Data Model - diffify
{tidypredict} 0.5.1: Run Predictions Inside the Database - diffify
{FaaSr} 1.4.3: FaaS (Function as a Service) Package - diffify
{connectapi} 0.5.0: Utilities for Interacting with the ‘Posit Connect’ Server API - diffify
{ggblanket} 11.1.0: Simplify ‘ggplot2’ Visualisation - diffify
{survival} 3.8-3: Survival Analysis - diffify
{aplot} 0.2.4: Decorate a ‘ggplot’ with Associated Information - diffify
{tugboat} 0.1.1: Build a Docker Image from a Directory or Project - diffify
{parabar} 1.4.2: Progress Bar for Parallel Tasks - diffify
{card.pro} 2.2.1: Lightweight Modern & Responsive Card Component for ‘shiny’ - diffify
{duckdbfs} 0.0.9: High Performance Remote File System, Database and ‘Geospatial’ Access Using ‘duckdb’ - diffify
{super} 0.0.4: Interpreted String Literals - diffify
{tidyplots} 0.2.0: Tidy Plots for Scientific Papers - diffify
{xslt} 1.5.0: Extensible Style-Sheet Language Transformations - diffify
{jqr} 1.4.0: Client for ‘jq’, a ‘JSON’ Processor - diffify
{ggh4x} 0.3.0: Hacks for ‘ggplot2’ - diffify
Videos and Podcasts
Listen to the R-Weekly Highlights Podcast
An Introduction to Survival Analysis in R with Emily Zabor
Shiny Apps
2d-random-walk
central-limit-theorem
A roguelike sprite randomiser with Shiny

Tutorials
Latent Growth Curve Models using the Lavaan Package in R workshop
Satellite mapping of surface waters in R
RObservations #50: a journey across the United States with {mapBliss}
How to Use complete.cases in R With Examples
A Complete Guide to Using na.rm in R: Vector and Data Frame Examples
How to Use na.omit in R: A Comprehensive Guide to Handling Missing Values
3MW (Nice Markdown Output for our AI chat bot)
Art from code I: Generative art with R
Art from code II. Spatial tricks with ambient
Art from code III: Polygon tricks
Art from code IV: Shading tricks
Art from code V: Iterated function systems
Art from code VI: Tiles and tessellations
Art from code VII: Pixel filters

-->

R Project Updates
Updates from R Core:
Call for Participation
Upcoming Events in 3 Months
Events in 3 Months:
A list of R conferences and meetings
This week’s local R-User and applied stats events
Weekly R Workshops for Ukraine
Connect
Join the Data Science Learning Community
rtistry
  
 
Post by @nrennie@fosstodon.org
 View on Mastodon
  


  
 
Post by @coolbutuseless@fosstodon.org
 View on Mastodon
  


  
 
Post by @tylermorganwall@fosstodon.org
 View on Mastodon
  


Quotes of the Week
  
 
Post by @colinfay@fosstodon.org
 View on Mastodon`,link:"https://rweekly.org//2024-W52.html",pubDate:"Mon, 23 Dec 2024 00:00:00 +0000",source:"R Weekly",sourceUrl:"https://rweekly.org",category:"r-lang"},{id:"https://rweekly.org//2024-W51.html",title:"R Weekly 2024-W51 Signed Trinary, Async and Parallel, and Advent of Code",description:`Hello and welcome to this new issue!
\r
				
How to have (my) content shared by R Weekly?
This week’s release was curated by Colin Fay, with help from the R Weekly team members and contributors.
Highlight
Writing Signed Trinary: or, Back To the Four Weights Problem
Parallel and Asynchronous Programming in Shiny with future, promise, future_promise, and ExtendedTask
Advent of Code with data.table: Week One
Insights
Turn a GitHub repo into a single text file for LLM-friendly input, with R and Python packages as examples
Parallel and Asynchronous Programming in Shiny with future, promise, future_promise, and ExtendedTask
Problems with iconv on macOS
The most efficient way to manage snapshot tests in R.
R in the Real World
Lime Bike Summary Stats Dashboard
R in Organizations
Diffify & Posit Package Manager
#44: r2u For ML and MLops Talk
New Packages
📦 Go Live for More New Pkgs 📦
 -->
📦 Keep up to date wtih CRANberries 📦
Updated Packages
🔍 Search on R-universe 🔍
RcppCCTZ 0.2.13 on CRAN: Maintenance
pinp 0.0.11 on CRAN: Maintenance
Videos and Podcasts
Listen to the R-Weekly Highlights Podcast
Gist & Cookbook
7 New Books added to Big Book of R [7/12/2024]
Tutorials
How to Use drop_na to Drop Rows with Missing Values in R: A Complete Guide
How to Select Row with Max Value in Specific Column in R: A Complete Guide
How to Find the Column with the Max Value for Each Row in R
3MW (AI Chat-Bots With R, {shiny} & {elmer})
Want to get code coverage report, but not share your private code with codecov.io? Use cobertura-action.
Advent of Code with data.table: Week One
Writing Signed Trinary: or, Back To the Four Weights Problem

-->

R Project Updates
Updates from R Core:
Upcoming Events in 3 Months
Events in 3 Months:
A list of R conferences and meetings
This week’s local R-User and applied stats events
Weekly R Workshops for Ukraine
Connect
Join the Data Science Learning Community`,link:"https://rweekly.org//2024-W51.html",pubDate:"Mon, 16 Dec 2024 00:00:00 +0000",source:"R Weekly",sourceUrl:"https://rweekly.org",category:"r-lang"},{id:" https://julialang.org/blog/2024/12/this-month-in-julia-world/index.html ",title:`
      This Month in Julia World  
  `,description:"Community Newsletter for November 2024",link:" https://julialang.org/blog/2024/12/this-month-in-julia-world/index.html ",pubDate:"Thu, 12 Dec 2024 00:00:00 +0000",source:"Julia Language Blog",sourceUrl:"https://julialang.org/blog/",category:"julia"},{id:"https://rweekly.org//2024-W50.html",title:"R Weekly 2024-W50 R-Universe Funding, Positron, AI for Shiny",description:`Hello and welcome to this new issue!
\r
				
How to have (my) content shared by R Weekly?
This week’s release was curated by Eric Nantz, with help from the R Weekly team members and contributors.
Highlight
R-Universe Named R Consortium’s Newest Top Level Project
Positron vs RStudio - is it time to switch?
Summer is Coming: AI for Shiny, R, and Pharma
Insights
R-Universe Named R Consortium’s Newest Top Level Project
Positron vs RStudio - is it time to switch?
Quantitative Analysis: NVIDIA
Bachet’s Four Weights Problem
posit::glimpse() Newsletter – December 2024
R in the Real World
Politely mapping recommended travel vaccines

Modernizing Clinical Trial Design and Analysis to Improve Efficiency & Flexibility
{SLmetrics}: Machine Learning performance evaluation on steroids
Predicting Best Picture at the 2025 Academy Awards
R in Organizations
How Good Automated Testing Supports GxP Compliance in Software Development
GSK x Posit Live Event November 2024 Q&A
R in Academia
Empowering Girls in Data Science: The R-Girls-School Network Initiative
Resources
A Book Dash for the R Development Guide
Advent of Code with data.table: Week One
New Packages
📦 Go Live for More New Pkgs 📦
 -->
📦 Keep up to date wtih CRANberries 📦
CRAN
Introducing the {messy} package
Introducing {samplezoo}
{tablespan} 0.1.7: Create Satisficing ‘Excel’, ‘HTML’, ‘LaTeX’, and ‘RTF’ Tables using a Simple Formula
{qcluster} 1.2: Clustering via Quadratic Scoring
{PhenotypeR} 0.1.0: Assess Study Cohorts Using a Common Data Model
{sooty} 0.1.0: Data Source Catalogues Online for Southern Ocean Ecosystem Research
{robqda} 1.0: Robust Quadratic Discriminant Analysis
{RegDDM} 1.0: Generalized Linear Regression with DDM
{rectpacker} 1.0.0: Rectangle Packing

{recforest} 1.0.0: Random Survival Forest for Recurrent Events
{RapidFuzz} 1.0: String Similarity Computation Using ‘RapidFuzz’
{mixedbiastest} 0.2.1: Bias Diagnostic for Linear Mixed Models
{MIGEE} 0.1.0: Impute Missing Values and Fitting Linear Mixed Effect Model
{iclogcondist} 1.0.1: Log-Concave Distribution Estimation with Interval-Censored Data
{GVS} 0.0.1: ‘Geocoordinate Validation Service’
{GOLDprice} 0.1.0: Gold Price Data
{GDILM.SEIRS} 0.0.1: Spatial Individual Level Modeling of Infectious Disease Transmission with Reinfection Dynamics
{ErlangC} 0.1.0: Solve Erlang-C Model
{educationR} 0.1.0: A Comprehensive Collection of Educational Datasets
{drhutools} 1.0.0: Political Science Academic Research Gears
{BayesianFitForecast} 1.0.0: Bayesian Parameter Estimation and Forecasting for Epidemiological Models
{airship} 1.4.3: Visualization of Simulated Datasets with Multiple Simulation
Input Dimensions
{wooldridge} 1.4-4: 115 Data Sets from “Introductory Econometrics: A Modern
Approach, 7e” by Jeffrey M. Wooldridge
{iClusterVB} 0.1.3: Fast Integrative Clustering and Feature Selection for High
Dimensional Data
{aphylo} 0.3-4: Statistical Inference and Prediction of Annotations in Phylogenetic Trees
{extractox} 0.1.0: Extract Tox Info from Various Databases
{csmGmm} 0.3.0: Conditionally Symmetric Multidimensional Gaussian Mixture Model
{basicspace} 0.25: Recovering a Basic Space from Issue Scales
{sshicm} 0.1.0: Information Consistency-Based Measures for Spatial Stratified Heterogeneity
{resourcecode} 0.2.1: Access to the ‘RESOURCECODE’ Hindcast Database
{RCNA} 1.0: Robust Copy Number Alteration Detection (RCNA)
{gtfs2emis} 0.1.1: Estimating Public Transport Emissions from General Transit Feed Specification (GTFS) Data
{atime} 2024.11.29: Asymptotic Timing
{wdiEF} 1.0.2: Calculation of the Water Deficit Index (WDI) and the Evaporative Fraction (EF) on Rasters
{twc} 0.0.1: Terrestrial Water Cycle
{sffdr} 1.0.0: Surrogate Functional False Discovery Rates for Genome-Wide Association Studies
{scR} 0.1.0: Estimate Vapnik-Chervonenkis Dimension and Sample Complexity
{SAKERNAS} 0.1.0: A National Labor Force Survey of Indonesia
{RCMsize} 1.0.0: Sample Size Calculation in Reversible Catalytic Models
{pipeflow} 0.2.1: Lightweight, General-Purpose Data Analysis Pipelines
{MEDesigns} 1.0.0: Mating Environmental Designs
{ldmppr} 1.0.3: Estimate and Simulate from Location Dependent Marked Point Processes
{ILRCM} 0.1.0: Convert Irregular Longitudinal Data to Regular Intervals and Perform Clustering
{IDLFM} 0.0.2: Individual Dynamic Latent Factor Model
{gfoRmulaICE} 0.1.0: Parametric Iterative Conditional Expectation G-Formula
{crimedatasets} 0.1.0: A Comprehensive Collection of Crime-Related Datasets
{orthGS} 0.1.6: Orthology vs Paralogy Relationships among Glutamine Synthetase from Plants
{antaresViz} 0.18.3: Antares Visualizations
GitHub or Bitbucket
froggeR - Enhance Quarto project workflows and standards
peeky - Download and extract Shinylive applications
Updated Packages
🔍 Search on R-universe 🔍
RcppArmadillo 14.2.2-1 on CRAN: Small Upstream Fixes
corels 0.0.5 on CRAN: Maintenance
anytime 0.3.10 on CRAN: Multiple Enhancements
{crandep} 0.3.11: Network Analysis of Dependencies of CRAN Packages - diffify
{sfnetworks} 0.6.5: Tidy Geospatial Networks - diffify
{rstanemax} 0.1.7: Emax Model Analysis with ‘Stan’ - diffify
{rollama} 0.2.0: Communicate with ‘Ollama’ to Run Large Language Models Locally - diffify
{textshaping} 0.4.1: Bindings to the ‘HarfBuzz’ and ‘Fribidi’ Libraries for Text
Shaping - diffify
{shinyStorePlus} 1.3: Secure in-Browser and Database Storage for ‘shiny’ Inputs, Outputs, Views and User Likes - diffify
{rpostgis} 1.6.0: R Interface to a ‘PostGIS’ Database - diffify
{cowsay} 1.0.0: Messages, Warnings, Strings with Ascii Animals - diffify

{geostan} 0.8.1: Bayesian Spatial Analysis - diffify
{pharmr} 1.4.0: Interface to the ‘Pharmpy’ ‘Pharmacometrics’ Library - diffify
{parallelly} 1.40.1: Enhancing the ‘parallel’ Package - diffify
{simdata} 0.4.1: Generate Simulated Datasets - diffify
{bit} 4.5.0.1: Classes and Methods for Fast Memory-Efficient Boolean Selections - diffify
{mongolite} 2.8.2: Fast and Simple ‘MongoDB’ Client for R - diffify
{apache.sedona} 1.7.0: R Interface for Apache Sedona - diffify
{container} 1.0.5: Extending Base ‘R’ Lists - diffify
{fastplyr} 0.5.0: Fast Alternatives to ‘tidyverse’ Functions - diffify
Videos and Podcasts
Summer is Coming: AI for Shiny, R, and Pharma
DuckDB and duckplyr: An in-process database management system in your R script
Explore Real-World hospital Electronic Health Records data with {ggehr}
A Tour of the Haunted Places Quiz Shiny App
Listen to the R-Weekly Highlights Podcast
Shiny Apps
targetsboard - A GUI to {targets}
R Sidebot: How to Add an LLM Assistant to Your R Shiny Apps
Which Library Should You Choose To Acceptance Test Shiny Apps?
Tutorials
Use meta shortcode variables with Quarto Includes to insert precise content
Posting to Bluesky from R
Apple Music Wrapped with R

Spatial correlation between rasters using ‘terra’

How to Find Columns with All Missing Values in Base R
How to Find and Count Missing Values in R: A Comprehensive Guide with Examples
How to Replace Missing Values in R: A Comprehensive Guide
3MW (Chatting with LLMs With R & {elmer})
Time Series Forecasting in R: Forecasting with Supervised Machine Learning Models

-->

R Project Updates
Updates from R Core:
Faster downloads
Call for Participation
posit::conf(2025) in-person registration is now open!
ShinyConf 2025 Call for Speakers
Upcoming Events in 3 Months
Events in 3 Months:
A list of R conferences and meetings
This week’s local R-User and applied stats events
Weekly R Workshops for Ukraine
Connect
Join the Data Science Learning Community
rtistry
Day 30: The Final Map! 🐍 Rattlesnake venom lectin (1muq), a galactose-specific C-type lectin, visualized in 3D. Went deep into micromapping, and it paid off! Big thanks to 
 & the {raymolecule} R package. #30DayMapChallenge #Micromapping 🧬✨
[image or embed]
— Brooks Groves (@bdgroves.bsky.social) December 6, 2024 at 7:27 PM


  
 
Post by @unicornCoder@fosstodon.org
 View on Mastodon
  


Quotes of the Week
What is the most annoying thing in R? I will go first - functions with upper case letters, such as the View function 🤦🏻‍♂️

#RStats
— Rami Krispin (@ramikrispin.bsky.social) December 2, 2024 at 5:27 PM


  
 
Post by @tylermorganwall@fosstodon.org
 View on Mastodon
  



Just realized the bluesky may not be aware that you can access dad jokes (via the icanhazdadjoke API) directly in #rstats with the {dadjokeapi} 📦!
[image or embed]
— Jeff Hollister (@jhollist.bsky.social) December 5, 2024 at 7:42 AM`,link:"https://rweekly.org//2024-W50.html",pubDate:"Mon, 09 Dec 2024 00:00:00 +0000",source:"R Weekly",sourceUrl:"https://rweekly.org",category:"r-lang"},{id:"https://rweekly.org//2024-W49.html",title:"R Weekly 2024-W49 Thanking, Interpolating, Predicting",description:`Hello and welcome to this new issue!
\r
				
How to have (my) content shared by R Weekly?
This week’s release was curated by Jonathan Carroll, with help from the RWeekly team members and contributors.
Highlight
Give Thanks with the allcontributors Package
How to Interpolate Missing Values in R: A Step-by-Step Guide with Examples
Predicting NBA Score Plays - Steph Curry Shots
Insights
These Languages are Accumulating
Simulating Ponzi schemes by @ellis2013nz
Give Thanks with the allcontributors Package
Examining Meta-Analysis
Spilhaus
Pesticides
How to Interpolate Missing Values in R: A Step-by-Step Guide with Examples
Mastering String Comparison in R: 3 Essential Examples and Bonus Tips
Deleting Multiple Columns in R: A Step-by-Step Guide for Data Frame Manipulation
3MW (Using Local LLMs With R & ollama)
Optimizing R/Shiny App Performance with Advanced Caching Techniques
TIL: dplyr::mutate()’s .keep argument
R in the Real World
Predicting NBA Score Plays - Steph Curry Shots

R in Organizations
rOpenSci News Digest, November 2024
R in Academia
Statistical Computing Approaches to Maximum Likelihood Estimation
R Adjacent
xkcd and Data Science
New Packages
📦 Go Live for More New Pkgs 📦
 -->
📦 Keep up to date wtih CRANberries 📦
October 2024: Top 40 New CRAN Packages
CRAN
{PaRe} 0.1.14: A Way to Perform Code Review or QA on Other Packages
{tern.rbmi} 0.1.4: Create Interface for ‘RBMI’ and ‘tern’
{ClinTrialPredict} 0.0.4: Predicting and Simulating Clinical Trial with Time-to-Event Endpoint
{scatterbar} 0.1.0: Scattered Stacked Bar Chart Plots

GitHub
{insitu} 0.1.3.9008
Updated Packages
🔍 Search on R-universe 🔍
RcppAPT 0.0.10: Maintenance
{geotargets} 0.2.0
{surveydown} 0.5.1: Markdown-Based Surveys Using ‘Quarto’ and ‘shiny’ - diffify
{RcppAPT} 0.0.10: ‘Rcpp’ Interface to the APT Package Manager - diffify
{ggtangle} 0.0.5: Draw Network with Data - diffify
{isocountry} 0.3.0: ISO 3166-1 Country Codes - diffify
{callme} 0.1.11: Easily Compile and Call Inline ‘C’ Functions - diffify
{promises} 1.3.2: Abstractions for Promise-Based Asynchronous Programming - diffify
{jlme} 0.4.1: Regression Modelling with ‘GLM.jl’ and ‘MixedModels.jl’ in ‘Julia’ - diffify
{httr2} 1.0.7: Perform HTTP Requests and Process the Responses - diffify
{handwriter} 3.2.3: Handwriting Analysis in R - diffify
{ymd} 0.1.4: Parse ‘YMD’ Format Number or String to Date - diffify
{gameR} 0.0.7: Color Palettes Inspired by Video Games - diffify
{AIscreenR} 0.1.1: AI Screening Tools in R for Systematic Reviewing - diffify
{ctv} 0.9-6: CRAN Task Views - diffify
Videos and Podcasts
Listen to the R-Weekly Highlights Podcast

-->

R Project Updates
Updates from R Core:
Upcoming Events in 3 Months
Events in 3 Months:
A list of R conferences and meetings
This week’s local R-User and applied stats events
Weekly R Workshops for Ukraine
Connect
Join the Data Science Learning Community
rtistry
  
 
Post by @unicornCoder@fosstodon.org
 View on Mastodon
  


Quotes of the Week
  
 
Post by @coatless@mastodon.social
 View on Mastodon`,link:"https://rweekly.org//2024-W49.html",pubDate:"Mon, 02 Dec 2024 00:00:00 +0000",source:"R Weekly",sourceUrl:"https://rweekly.org",category:"r-lang"},{id:"https://rweekly.org//2024-W48.html",title:"R Weekly 2024-W48 Native Mobile Apps, Bluesky Network, Re-imagining read_csv",description:`Hello and welcome to this new issue!
\r
				
How to have (my) content shared by R Weekly?
This week’s release was curated by Tony ElHabr, with help from the R Weekly team members and contributors.
Highlight
You’ve Been Waiting for Native Mobile Apps with R? The Wait Is Over.
Expand your Bluesky network with R and the atrrr package
S7 & Options objects - reimagining readr::read_csv()
Insights
Expand your Bluesky network with R and the atrrr package

S7 & Options objects - reimagining readr::read_csv()
3MW (5 Lessons For Getting Better At Programming)
So Your Team Needs Help with R Shiny - What are Your Options?
R in the Real World
Spotify Wrapped: R and ggplot2 Edition - code

You’ve Been Waiting for Native Mobile Apps with R? The Wait Is Over.
Mapping the Vendée Globe
Summarising Top 100 UK Climbs: Running Local Language Models with LM Studio and R
R in Organizations
Using LLM agents to review tutorials ‘in character’ as learners
R in Academia
A new topic model for analyzing imbalanced corpora
New Packages
📦 Go Live for More New Pkgs 📦
 -->
📦 Keep up to date wtih CRANberries 📦
CRAN
{tsmarch} 1.0.0: Multivariate ARCH Models
{roxy.shinylive} 1.0.0: A ‘roxygen2’ Extension for ‘Shinylive’
{kendallknight} 0.4.0: Efficient Implementation of Kendall’s Correlation Coefficient Computation
{talkr} 0.1.3: Plotting Conversation Data
{effectplots} 0.1.0: Effect Plots
Updated Packages
🔍 Search on R-universe 🔍
{tinytable} 0.6.1: Simple and Configurable Tables in ‘HTML’, ‘LaTeX’, ‘Markdown’, ‘Word’, ‘PNG’, ‘PDF’, and ‘Typst’ Formats - diffify
{ggiraph} 0.8.11: Make ‘ggplot2’ Graphics Interactive - diffify
{duckdb} 1.1.3: DBI Package for the DuckDB Database Management System - diffify
{tidyvpc} 1.5.2: VPC Percentiles and Prediction Intervals - diffify
{targets} 1.9.0: Dynamic Function-Oriented ‘Make’-Like Declarative Pipelines - diffify
Videos and Podcasts
Listen to the R-Weekly Highlights Podcast
Shiny Apps
Signature.py: Award-Winning Application at the 2024 Shiny Contest
Tutorials
Random Effects and Overdispersion
Random effect priors, redo

100 Bushels of Corn, Revisited
How to Make Data Validation Easy in R/Shiny with pointblank
RStudio Addin 101 for beginners
India
Bike accidents
How to Compare Two Columns in R: A Comprehensive Guide with Examples
How to Compare Two Vectors in base R With Examples

-->

R Project Updates
Updates from R Core:
Call for Participation
Upcoming Events in 3 Months
Events in 3 Months:
2024-12-19 - Crafting Custom and Reproducible PDF Reports with Quarto and Typst in R workshop
R/Pharma APAC track
A list of R conferences and meetings
This week’s local R-User and applied stats events
Weekly R Workshops for Ukraine
Connect
Join the Data Science Learning Community
rtistry
The EU only with letters. 🅰️🅱️©️ 🇪🇺
#30DayMapChallenge Day 19 Typography #rstats #maps
[image or embed]
— Ansgar Wolsing (@ansgarw.bsky.social) November 19, 2024 at 5:00 AM



💨Winds of November in Europe! My latest map shows average wind speeds and directions sweeping across the continent this month, brought to life with data from the Climate Data Store

Watch this video and start making your wind maps:
youtu.be/d8VZMjhBFwE

#dataviz #maps #wind #rstats
[image or embed]
— milos makes maps (@milos-makes-maps.bsky.social) November 24, 2024 at 4:17 AM


Quotes of the Week
Tangential: I just learned about the row_number() function from @jofrhwld.bsky.social‬'s blog post. And all this time I've been using 1:n() like a total sucker. The other parts of the blog post are cool, too. #Rstats
[image or embed]
— Solomon Kurz (@solomonkurz.bsky.social) November 21, 2024 at 10:42 AM



Stirring the pot this morning: #rstats crowd, which do you prefer?

df3 <- df1 |>
  left_join(df2)

OR

df3 <- left_join(df1, df2)
— Spencer Schien (@mrpecners.bsky.social) November 20, 2024 at 8:32 AM



First time asking for help writing #RStats code with Gemini. I guess I'll stick with ChatGPT for now....
[image or embed]
— jsmiths.bsky.social (@jsmiths.bsky.social) November 20, 2024 at 3:47 AM`,link:"https://rweekly.org//2024-W48.html",pubDate:"Mon, 25 Nov 2024 00:00:00 +0000",source:"R Weekly",sourceUrl:"https://rweekly.org",category:"r-lang"},{id:"https://rweekly.org//2024-W47.html",title:"R Weekly 2024-W47 Dev Day, Greenland Ice",description:`Hello and welcome to this new issue!
\r
				
How to have (my) content shared by R Weekly?
This week’s release was curated by Jon Calder, with help from the R Weekly team members and contributors.
Highlight
R Dev Day @ SIP 2024
Greenland ice thickness
Insights
How Github Copilot and ChatGPT have changed my life as an R developer
R Dev Day @ SIP 2024
New Packages
📦 Go Live for More New Pkgs 📦
 -->
📦 Keep up to date with CRANberries 📦
CRAN
{cocoon} 0.1.0: Extract, Format, and Print Statistical Output
{GeoTox} 0.2.0: Spatiotemporal Mixture Risk Assessment
{wbids} 0.1.0: Seamless Access to World Bank International Debt Statistics
(IDS)
{brickster} 0.2.5: R Toolkit for ‘Databricks’
GitHub
{messy} 0.0.2: R package to make a data frame messy and untidy
Updated Packages
🔍 Search on R-universe 🔍
{shinylive} 0.3.0: Run ‘shiny’ Applications in the Browser - diffify
{packageRank} 0.9.4: Computation and Visualization of Package Download Counts and
Percentile Ranks - diffify
{bioregion} 1.1.1-1: Comparison of Bioregionalisation Methods - diffify

{tabulapdf} 1.0.5-5: Extract Tables from PDF Documents - diffify
{osmapiR} 0.2.2: Interface to OpenStreetMap API - diffify
Videos and Podcasts
Listen to the R-Weekly Highlights Podcast
Shiny Apps
R Shiny Deployment: 5 Options for Individuals and Enterprises
Comprehensive Documentation:  How We Ensure Your Project’s Success Beyond Delivery
{PakPC} 0.2.0: ‘shiny’ App to Analyze Pakistan’s Population Census Data
{PakNAcc} 0.1.0: ‘shiny’ App for National Accounts
{WeibullR.shiny} 0.3: A ‘Shiny’ App for Weibull Analysis

Tutorials
Manifold Learning
AI Transcription from R using Whisper: Part 3
Greenland ice thickness
Time Series Machine Learning: Shanghai Composite
Smith-Pittman Algorithm: Enhancing Community Detection in Networks

Understanding and extending the methods of comparing spatial patterns in raster data
How to Keep Certain Columns in Base R with subset(): A Complete Guide
How to Subset a Data Frame in R: 4 Practical Methods with Examples
How to Use the Tilde Operator (~) in R: A Comprehensive Guide
3MW (Look at all those Quarto Outputs)
100 Bushels of Corn

-->

R Project Updates
Updates from R Core:
Call for Participation
Upcoming Events in 3 Months
Events in 3 Months:
A list of R conferences and meetings
This week’s local R-User and applied stats events
Weekly R Workshops for Ukraine
December 3, 2024: ROpenSci - Social Coworking and Office Hours - Getting Involved in the Antarctic/Southern Ocean rOpenSci Community
December 5, 2024: Introduction to generalized linear models in R workshop
Datasets
{lovecraftr} 1.0.0: A Collection of Lovecraftian Tales and Texts
Connect
Join the Data Science Learning Community
R Work Opportunities
Bilingual [Japanese/English] Product Support Specialist (Zelus Analytics) - Remote
Quotes of the Week
Bluesky really is the new #rstats twitter because we have the first base R vs tidyverse flame war 🤣
— Hadley Wickham (@hadleywickham.bsky.social) 14 November 2024 at 19:18`,link:"https://rweekly.org//2024-W47.html",pubDate:"Mon, 18 Nov 2024 00:00:00 +0000",source:"R Weekly",sourceUrl:"https://rweekly.org",category:"r-lang"},{id:"https://rweekly.org//2024-W46.html",title:"R Weekly 2024-W46 Computational markdown, Bob's Burgers, S7",description:`Hello and welcome to this new issue!
\r
				
How to have (my) content shared by R Weekly?
This week’s release was curated by Ryo Nakagawara, with help from the R Weekly team members and contributors.
Highlight
Guide to generating and rendering computational markdown content programmatically with Quarto
Bob’s Burgers Episode Fingerprints by Season
S7 0.2.0
Insights
Health Technology Assessment (HTA) Working Group Kickoff: Building a Collaborative Vision in R for HTA
R in the Real World
Guide to generating and rendering computational markdown content programmatically with Quarto: Learn how to use knitr::knit() in inline chunks to correctly render auto-generated R and markdown content in Quarto documents
{ntfy}: Lightweight Wrapper to the ntfy.sh Service
R in Academia
Embedding R/exams Exercises as Forms in R/Markdown or Quarto Documents
Resources
Examples of restructuring data between long and wide format in R
New Packages
📦 Go Live for More New Pkgs 📦
 -->
📦 Keep up to date wtih CRANberries 📦
CRAN
{tidywater} 0.6.2: Water Quality Models for Drinking Water Treatment Processes.
{handwriterRF} 1.0.2: Handwriting Analysis with Random Forests.
{surveydown} 0.4.0: Markdown-Based Surveys Using ‘Quarto’ and ‘shiny’.
{tidyplots} 0.6.2: Tidy Plots for Scientific Papers.
GitHub or Bitbucket
{fastml}: Fast Machine Learning Model Training and Evaluation.
{newplaces}: R-wrapper package to the Google Places API (New)
{plumber-nextjs-app}: A demo Next.js app that interacts with an R Plumber backend
{pray}: Display ASCII art of objects for prayer in the R console.
{ig.degree.betweenness}: Smith-Pittman Community Detection Algorithm for ‘igraph’ Objects (2024) in R.
{autoimport}: A toolbox to automatically generate @importFrom roxygen tags from R files.
{peeky}: Download and Extract Shinylive Applications.
Updated Packages
🔍 Search on R-universe 🔍
inline 0.3.20: Mostly Maintenance
{S7} 0.2.0: An Object Oriented System Meant to Become a Successor to S3 and
S4 - diffify
{curl} 6.0.0: A Modern and Flexible Web Client for R - diffify
{salesforcer} 1.0.2: An Implementation of ‘Salesforce’ APIs Using Tidy Principles - diffify
{libr} 1.3.7: Libraries, Data Dictionaries, and a Data Step for R - diffify
{zipangu} 0.3.3: Japanese Utility Functions and Data - diffify
{waldo} 0.6.1: Find Differences Between R Objects - diffify
{stars} 0.6-7: Spatiotemporal Arrays, Raster and Vector Data Cubes - 
diffify
{charcuterie} 0.0.6: Handle Strings as Vectors of Characters - diffify
{ranger} 0.17.0: A Fast Implementation of Random Forests - diffify
{knitr} 1.49: A General-Purpose Package for Dynamic Report Generation in R - diffify
{connectapi} 0.4.0: Utilities for Interacting with the ‘Posit Connect’ Server API - diffify
{av} 0.9.3: Working with Audio and Video in R - diffify
{ggreveal} 0.1.3: Reveal a ‘ggplot’ Incrementally - diffify
Videos and Podcasts
Listen to the R-Weekly Highlights Podcast
Shiny Apps
Roguelike Sprite Builder

Tutorials
New qeML Plotting Function
Birth date temperature
Regressions where the coefficients are a simplex. by @ellis2013nz
Comparison of spatial patterns in categorical raster data for arbitrary regions using R
How to Use Dollar Sign ($) Operator in R: A Comprehensive Guide for Beginners
3MW (Use Secrets With GitHub Actions and Schedueling)
R t-SNE: How to Visualize High-Dimensional Datasets in R
R 3D Charts: Top 3 Packages to Master 3D Data Visualization in R
Want To Get Even Faster Feedback From Your Unit Tests? Optimize Your Test Files Structure.
Bob’s Burgers Episode Fingerprints by Season


-->

R Project Updates
Updates from R Core:
Call for Participation
Upcoming Events in 3 Months
Events in 3 Months:
R/Pharma APAC track
A list of R conferences and meetings
This week’s local R-User and applied stats events
Weekly R Workshops for Ukraine
December 3, 2024: ROpenSci - Social Coworking and Office Hours - Getting Involved in the Antarctic/Southern Ocean rOpenSci Community
December 5, 2024: Introduction to generalized linear models in R workshop
Connect
Join the Data Science Learning Community
R Work Opportunities
Bilingual [Japanese/English] Product Support Specialist (Zelus Analytics) - Remote
Quotes of the Week
I've just explored the brand-new tidyplots package in R, and it’s impressive how effortlessly it enables you to create beautiful, publication-ready plots. Designed with scientific papers in mind, tidyplots lets you build, adjust, and refine plot components gradually, all with a… pic.twitter.com/ZVaPGoPHXW
— Joachim Schork (@JoachimSchork) November 11, 2024



To be a good geospatial data scientist, you need good tools.
My tool of choice is R.
Here are the packages I can't live without:#rstats pic.twitter.com/n4qfYGes3Z
— Yohan (@yohaniddawela) October 31, 2024`,link:"https://rweekly.org//2024-W46.html",pubDate:"Tue, 12 Nov 2024 00:00:00 +0000",source:"R Weekly",sourceUrl:"https://rweekly.org",category:"r-lang"},{id:"https://www.tidyverse.org/blog/2024/11/s7-0-2-0/",title:"S7 0.2.0",description:`5x height
* [ ] [\`hugodown::use_tidy_thumbnails()\`](https://rdrr.io/pkg/hugodown/man/use_tidy_post.html)
* [ ] Add intro sentence, e.g. the standard tagline for the package
* [ ] [\`usethis::use_tidy_thanks()\`](https://usethis.r-lib.org/reference/use_tidy_thanks.html)
-->
We’re excited to announce that 
S7 v0.2.0 is now available on CRAN! S7 is a new object-oriented programming (OOP) system designed to supersede both S3 and S4. You might wonder why R needs a new OOP system when we already have two. The reason lies in the history of R’s OOP journey: S3 is a simple and effective system for single dispatch, while S4 adds formal class definitions and multiple dispatch, but at the cost of complexity. This has forced developers to choose between the simplicity of S3 and the sophistication of S4.
The goal of S7 is to unify the OOP landscape by building on S3’s existing dispatch system and incorporating the most useful features of S4 (along with some new ones), all with a simpler syntax. S7’s design and implementation have been a collaborative effort by a working group from the 
R Consortium, including representatives from R-Core, Bioconductor, tidyverse/Posit, ROpenSci, and the wider R community. Since S7 builds on S3, it is fully compatible with existing S3-based code. It’s also been thoughtfully designed to work with S4, and as we learn more about the challenges of transitioning from S4 to S7, we’ll continue to add features to ease this process.
Our long-term goal is to include S7 in base R, but for now, you can install it from CRAN:
install.packages("S7")
What’s new in the second release
  
    
      

      

    
  

The second release of S7 brings refinements and bug fixes. Highlights include:
Support for lazy property defaults, making class setup more flexible.
Custom property setters now run on object initialization.
Significant speed improvements for setting and getting properties with @ and @<-.
Expanded compatibility with base S3 classes.
convert() now provides a default method for transforming a parent class into a subclass.
Additionally, there are numerous bug fixes and quality-of-life improvements, such as better error messages, improved support for base Ops methods, and compatibility improvements for using @ in R versions prior to 4.3. You can see a full list of changes in the 
release notes.
Who should use S7
  
    
      

      

    
  

S7 is a great fit for R users who like to try new things but don’t need to be the first. It’s already used in several CRAN packages, and the tidyverse team is applying it in new projects. While you may still run into a few issues, many early problems have been resolved.
Usage
  
    
      

      

    
  

library(S7)
Let’s dive into the basics of S7. To learn more, check out the package vignettes, including a more detailed introduction in 
vignette("S7"), and coverage of generics and methods in 
vignette("generics-methods"), and classes and objects in 
vignette("classes-objects").
Classes and objects
  
    
      

      

    
  

S7 classes have formal definitions, specified by 
new_class(), which includes a list of properties and an optional validator. For example, the following code creates a Range class with start and end properties, and a validator to ensure that start is always less than end:
Range <- new_class("Range",
  properties = list(
    start = class_double,
    end = class_double
  ),
  validator = function(self) {
    if (length(self@start) != 1) {
      "@start must be length 1"
    } else if (length(self@end) != 1) {
      "@end must be length 1"
    } else if (self@end < self@start) {
      "@end must be greater than or equal to @start"
    }
  }
)
new_class() returns the class object, which also serves as the constructor to create instances of the class:
x <- Range(start = 1, end = 10)
x
#> <Range>
#>  @ start: num 1
#>  @ end  : num 10

Properties
  
    
      

      

    
  

The data an object holds are called its properties. Use @ to get and set properties:
x@start
#> [1] 1
x@end <- 20
x
#> <Range>
#>  @ start: num 1
#>  @ end  : num 20

Properties are automatically validated against the type declared in 
new_class() (in this case, double) and checked by the class validator:
x@end <- "x"
#> Error: <Range>@end must be <double>, not <character>
x@end <- -1
#> Error: <Range> object is invalid:
#> - @end must be greater than or equal to @start

Generics and methods
  
    
      

      

    
  

Like S3 and S4, S7 uses functional OOP, where methods belong to generic functions, and method calls look like regular function calls: generic(object, arg2, arg3). A generic uses the types of its arguments to automatically pick the appropriate method implementation.
You can create a new generic with 
new_generic(), specifying the arguments to dispatch on:
inside <- new_generic("inside", "x")
To define a method for a specific class, use method(generic, class) <- implementation:
method(inside, Range) <- function(x, y) {
  y >= x@start & y <= x@end
}

inside(x, c(0, 5, 10, 15))
#> [1] FALSE  TRUE  TRUE  TRUE

Printing the generic shows its methods:
inside
#> <S7_generic> inside(x, ...) with 1 methods:
#> 1: method(inside, Range)

And you can retrieve the method for a specific class:
method(inside, Range)
#> <S7_method> method(inside, Range)
#> function (x, y) 
#> {
#>     y >= x@start & y <= x@end
#> }

Known limitations
  
    
      

      

    
  

While we are pleased with S7’s design, there are still some limitations:
S7 objects can be serialized to disk (with 
saveRDS()), but the current implementation saves the entire class specification with each object. This may change in the future.
Support for implicit S3 classes "array" and "matrix" is still in development.
We expect the community will uncover more issues as S7 is more widely adopted. If you encounter any problems, please file an issue at https://github.com/RConsortium/OOP-WG/issues. We appreciate your feedback in helping us make S7 even better! 😃
Acknowledgements
  
    
      

      

    
  

Thank you to all people who have contributed issues, code, and comments to this release:
@calderonsamuel, 
@Crosita, 
@DavisVaughan, 
@dipterix, 
@guslipkin, 
@gvelasq, 
@hadley, 
@jeffkimbrel, 
@jl5000, 
@jmbarbone, 
@jmiahjones, 
@jonthegeek, 
@JosiahParry, 
@jtlandis, 
@lawremi, 
@MarcellGranat, 
@mikmart, 
@mmaechler, 
@mynanshan, 
@rikivillalba, 
@sjcowtan, 
@t-kalinowski, 
@teunbrand, and 
@waynelapierre.`,link:"https://www.tidyverse.org/blog/2024/11/s7-0-2-0/",pubDate:"Thu, 07 Nov 2024 00:00:00 +0000",source:"Tidyverse Blog",sourceUrl:"https://www.tidyverse.org/blog/",category:"r-lang"},{id:"https://rweekly.org//2024-W45.html",title:"R Weekly 2024-W45 Talk recordings from posit::conf(2024), GitHub actions, Parameterized plots",description:`Hello and welcome to this new issue!
\r
				
How to have (my) content shared by R Weekly?
This week’s release was curated by Batool Almarzouq, with help from the R Weekly team members and contributors.
Highlight
Talk recordings and workshop materials from posit::conf(2024)
3MW (Automate Anything With R & GitHub Actions)
Parameterized plots and reports with R and Quarto
Insights
August 2024: Top 40 New CRAN Packages
R in the Real World
Shiny Gatherings x Pharmaverse: Building Clinical Data Analysis Apps with {teal} 

SpendDash: a free online dashboard that allows you to keep track of your spending habits over time
R in Academia
Comparison of spatial patterns in categorical raster data for overlapping regions using R

Resources
Talk recordings and workshop materials from posit::conf(2024)
10 New Books added to Big Book of R + R community on BlueSky
Ordinal State Transition Models as a Unifying Risk Prediction Framework
New Packages
📦 Go Live for More New Pkgs 📦
 -->
📦 Keep up to date wtih CRANberries 📦
CRAN
Rcpp 1.0.13-1 on CRAN: Hot Fix
gcbd 0.2.7 on CRAN: More Mere Maintenance
Tapyr 0.2 Update: Package Management with uv and Shiny for Python Testing API
{favawesome} 0.1.1: Use Font Awesome Icons as Shiny favicons
{surveydown} 0.4.0: Markdown-Based Surveys Using ‘Quarto’ and ‘shiny’
{rcollectadhd} 0.8: Collection of Data Sets Containing ADHD Related Data
{legendry} 0.1.0: Extended Legends and Axes for ‘ggplot2’
{CADF} 0.1: Customer Analytics Data Formatting
{vchartr} 0.1.3: Interactive Charts with the ‘JavaScript’ ‘VChart’ Library
{mapindiatools} 1.0.1: Mapping Data for ‘mapindia’ Package
{dsTidyverseClient} 1.0.0: ‘DataSHIELD’ ‘Tidyverse’ Clientside Package
{picohdr} 0.1.1: Read, Write and Manipulate High Dynamic Range Images
{ggpca} 0.1.2: Publication-Ready PCA, t-SNE, and UMAP Plots

{BSTZINB} 1.0.1: Association Among Disease Counts and Socio-Environmental Factors
{redatamx} 1.0.0: R Interface to ‘Redatam’ Library
{TMTI} 1.0.3: Too Many, Too Improbable (TMTI) Test Procedures
{tapLock} 0.2.0: Seamless Single Sign-on for ‘shiny’
{ShinyWizard} 1.1.3.11: An Interactive Wizard to Design, Build, and Deploy R Packages Demo Presentation
Updated Packages
🔍 Search on R-universe 🔍
{spatstat.utils} 3.1-1: Utility Functions for ‘spatstat’ - diffify
{ggeasy} 0.1.5: Easy Access to ‘ggplot2’ Commands - diffify
{EIEntropy} 0.0.1.2: Ecological Inference Applying Entropy - diffify
{dataCompare} 1.0.1: A ‘shiny’ App to Compare Two Data Frames - diffify
{RaceID} 0.3.7: Identification of Cell Types, Inference of Lineage Trees, and Prediction of Noise Dynamics from Single-Cell RNA-Seq Data - diffify
{iimi} 1.2.1: Identifying Infection with Machine Intelligence - diffify
{basemaps} 0.0.8: Accessing Spatial Basemaps in R - diffify
{mapgl} 0.1.4: Interactive Maps with ‘Mapbox GL JS’ and ‘MapLibre GL JS’ - diffify
{priorsense} 1.0.4: Prior Diagnostics and Sensitivity Analysis - diffify
{gitignore} 0.1.8: Create Useful .gitignore Files for your Project - diffify
{ggstatsplot} 0.12.5: ‘ggplot2’ Based Plots with Statistical Details - diffify
{flexlsx} 0.3.0: Exporting ‘flextable’ to ‘xlsx’ Files - diffify
{iForecast} 1.0.9: Machine Learning Time Series Forecasting - diffify
{dunlin} 0.1.8: Preprocessing Tools for Clinical Trial Data - diffify
{statsExpressions} 1.6.1: Tidy Dataframes and Expressions with Statistical Details - diffify
{proffer} 0.2.1: Profile R Code and Visualize with ‘Pprof’ - diffify
{DescToolsAddIns} 1.12: Interactive Functions to be Used as Shortcuts in ‘RStudio’ - diffify
{bio3d} 2.4-5: Biological Structure Analysis - diffify

{manynet} 1.3.1: Many Ways to Make, Modify, Map, Mark, and Measure Myriad Networks - diffify
{ggseqplot} 0.8.5: Render Sequence Plots using ‘ggplot2’ - diffify

{RcmdrPlugin.DoE} 0.12-6: R Commander Plugin for (Industrial) Design of Experiments - diffify
{rspm} 0.6.1: ‘RStudio’ Package Manager - diffify
{progressr} 0.15.0: An Inclusive, Unifying API for Progress Updates - diffify
{pdp} 0.8.2: Partial Dependence Plots - diffify
{rgl} 1.3.12: 3D Visualization Using OpenGL - diffify
{liver} 1.17: “Eating the Liver of Data Science” - diffify
{circumplex} 1.0.0: Analysis and Visualization of Circular Data - diffify
Videos and Podcasts
Listen to the R-Weekly Highlights Podcast
Tutorials
Vetiver: Monitoring Models in Production
Predictive scenarios simulation in R, Python and Excel using Techtonique API
Delimiting the modelling background for scattered uneven occurrence data
Street names: Day 2 of 30DayMapChallenge. Trying to find the genders in Lyon street names
Lidar: Day 1 of 30DayMapChallenge. Playing with points
Parameterized plots and reports with R and Quarto
How to Use ‘OR’ Operator in R: A Comprehensive Guide for Beginners
The Ultimate Guide to Creating Lists in R: From Basics to Advanced Examples
How to Iterate Over Rows of Data Frame in R: A Complete Guide for Beginners
Reading in multiple files without loops
3MW (Automate Anything With R & GitHub Actions)
Connecting R to Postgres: From Database Creation to Data Manipulation and Charts

-->

R Project Updates
Updates from R Core:
Updates from the R Contribution Working Group (RCWG):
Announcing R Dev Day @ LatinR 2024: online, Monday 18 and Tuesday 19 November, 5:30pm - 8pm (UTC-3). Join us to work on contributions to the code, documentation and translations in base R. Free and open registration, deadline Saturday 16 Nov.
Call for Participation
Upcoming Events in 3 Months
Events in 3 Months:
R/Pharma APAC track
A list of R conferences and meetings
This week’s local R-User and applied stats events
Weekly R Workshops for Ukraine
Connect
Join the Data Science Learning Community
artistry
Today's artwork generated with #rstats and #ggplot2: pic.twitter.com/9UMkxbcpnA
— aRtsy package (@aRtsy_package) November 5, 2024



Image of Mexicali, Mexico created in #rstats using data from #OpenStreetMap. pic.twitter.com/7epnCkTPlp
— R City Views (@rcityviews) November 3, 2024


Quotes of the Week
  
 
Post by @johnmackintosh@fosstodon.org
 View on Mastodon`,link:"https://rweekly.org//2024-W45.html",pubDate:"Tue, 05 Nov 2024 00:00:00 +0000",source:"R Weekly",sourceUrl:"https://rweekly.org",category:"r-lang"},{id:"https://rweekly.org//2024-W44.html",title:"R Weekly 2024-W44 {sortable}, HTML table to dataframe, Shiny Assistant",description:`Hello and welcome to this new issue!
\r
				
How to have (my) content shared by R Weekly?
This week’s release was curated by Sam Parmar, with help from the R Weekly team members and contributors.
Highlight
{sortable} card games in {shiny}
HTML Table to DataFrame Tool
Shiny Assistant: Prototype and build Shiny applications with the help of AI - Winston Chang - Posit 
Insights
Winners of the 2024 Shiny Contest

Python for R users
Time Series Machine Learning: S&P 500
Iterating to achieve my first accepted posit::conf talk
Dyson’s Algorithm for the Twelve Coins Problem
3 Lessons learned from 3 years of testing as an R developer
{sortable} card games in {shiny}
A note about a bug in irr::kripp.alpha()
R in the Real World
Posit’s Hadley Wickham honored with the 2025 ASA Award for Statistical Computing and Graphics
R in Organizations
Introducing sdtm.oak
Resources
HTML Table to DataFrame Tool
New Packages
📦 Go Live for More New Pkgs 📦
 -->
📦 Keep up to date wtih CRANberries 📦
CRAN
{cpp11tesseract} 5.3.2: Open Source OCR Engine
{flourishcharts} 1.0.0.3: ‘Flourish’ for ‘R’ and ‘Python’
GitHub or Bitbucket
{isocubes}

Updated Packages
🔍 Search on R-universe 🔍
drat 0.2.5 on CRAN: Small Updates
{deeptime} 2.1.0: Plotting Tools for Anyone Working in Deep Time - diffify
{nonmemica} 1.0.11: Create and Evaluate NONMEM Models in a Project Context - diffify
{plater} 1.0.5: Read, Tidy, and Display Data from Microtiter Plates - diffify
{slider} 0.3.2: Sliding Window Functions - diffify
{finnts} 0.5.0: Microsoft Finance Time Series Forecasting Framework - diffify
{checked} 0.2.4: Systematically Run R CMD Checks - diffify
{ami} 0.2.0: Checks for Various Computing Environments - diffify
{handwriter} 3.2.1: Handwriting Analysis in R - diffify
{rscorecard} 0.30.0: A Method to Download Department of Education College Scorecard
Data - diffify
{RandomWalker} 0.2.0: Generate Random Walks Compatible with the ‘tidyverse’ - diffify
{allcontributors} 0.2.2: Acknowledge all Contributors to a Project - diffify
{radiant.data} 1.6.7: Data Menu for Radiant: Business Analytics using R and Shiny - diffify
{logger} 0.4.0: A Lightweight, Modern and Flexible Logging Utility - diffify
{lzstring} 0.1.3: Wrapper for ‘lz-string’ ‘C++’ Library - diffify
{dtrackr} 0.4.6: Track your Data Pipelines - diffify
{git2r} 0.35.0: Provides Access to Git Repositories - diffify
Videos and Podcasts
Listen to the R-Weekly Highlights Podcast
Unlocking Insights from LatinR: Collaboration and Innovation in Data Science Webinar
Shiny Assistant: Prototype and build Shiny applications with the help of AI - Winston Chang - Posit 
Tutorials
Data Science Workflows in R: Tutorial Companion e-book
Polyglot Maxxie and Minnie
Listing Alpaca Assets
Comparison of spatial patterns in continuous raster data for arbitrary regions using R
Sentiment Analysis in R
Enhancing Time Series Analysis: RandomWalker 0.2.0 Release
How to Loop Through List in R with Base R and purrr: A Comprehensive Guide for Beginners
Mastering Column Names in Base R: A Beginner’s Guide
3MW (Automate E-mails With R & {blastula})

-->

R Project Updates
Updates from R Core:
Upcoming Events in 3 Months
Events in 3 Months:
R/Pharma APAC track
A list of R conferences and meetings
This week’s local R-User and applied stats events
Weekly R Workshops for Ukraine
Visualizing Variance with Sankey diagrams/Riverplots using R: An Illustration with Longitudinal Multi-level Modeling workshop
Understanding Difference-in-Differences: Basics and Beyond with Applications in R workshop
R/Pharma 2024 Workshops: Oct 25-Nov 1
R/Pharma 2024 Conference: Oct 29-31

Connect
Join the Data Science Learning Community
rtistry
  
 
Post by @nrennie@fosstodon.org
 View on Mastodon
  


  
 
Post by @coolbutuseless@fosstodon.org
 View on Mastodon`,link:"https://rweekly.org//2024-W44.html",pubDate:"Mon, 28 Oct 2024 00:00:00 +0000",source:"R Weekly",sourceUrl:"https://rweekly.org",category:"r-lang"},{id:"https://rweekly.org//2024-W43.html",title:"R Weekly 2024-W43 tidyHeatmap, test titles, reshape",description:`Hello and welcome to this new issue!
\r
				
How to have (my) content shared by R Weekly?
This week’s release was curated by Jonathan Carroll, with help from the RWeekly team members and contributors.
Highlight
Exploring the tidyHeatmap R package
Don’t Expect That “Function Works Correctly”, Do This Instead
Comparing data.table reshape to duckdb and polars
Insights
R and Python consoles + JupyterLite in www.techtonique.net
Gradient-Boosting anything (alert: high performance): Part2, R version
Highlights from Shiny in Production (2024)
Positron in action with #TidyTuesday orca encounters
Monads in R
Authenticate with Alpaca API
Comparison of spatial patterns in continuous raster data for overlapping regions using R

How to Loop Through Column Names in Base R with Examples
How to Add Suffix to Column Names in Base R: A Beginner’s Guide
Software Engineering Good Practices (GSEP) in FDA Submissions - 7 Categories to Follow
Don’t Expect That “Function Works Correctly”, Do This Instead
r2lambda update to support multi-file projects and renv projects
Deploying Shiny for Python apps built with Tapyr to Posit Connect
Running tidymodel prediction workflows inside databases with orbital and Snowflake
Exploring the tidyHeatmap R package
How PCA projection and cell label transfer work in Seurat
posit::conf(2024)
R in the Real World
R Consortium : Dengue Data Hub
R Consortium : The U.S. Federal Reserve quarterly model in R
Resources
CASdatasets 1.2.0
New Packages
📦 Go Live for More New Pkgs 📦
 -->
📦 Keep up to date wtih CRANberries 📦
CRAN
{Platypus} 3.6.0: Single-Cell Immune Repertoire and Gene Expression Analysis
{plotscaper} 0.2.3: Explore Your Data with Interactive Figures
{ctypesio} 0.1.1: Read and Write Standard C Types from Files, Connections and Raw Vectors
{hollr} 1.0.0: Chat Completion and Text Annotation with Local and OpenAI Models
{affiner} 0.1.1: A Finer Way to Render 3D Illustrated Objects in ‘grid’ Using Affine Transformations
Updated Packages
🔍 Search on R-universe 🔍
qlcal 0.0.13 on CRAN: Small Calendar Update
RcppDate 0.0.4: New Upstream Minor
{shinyAce} 0.4.3: Ace Editor Bindings for Shiny - diffify
{Matrix} 1.7-1: Sparse and Dense Matrix Classes and Methods - diffify
{openxlsx2} 1.10: Read, Write and Edit ‘xlsx’ Files - diffify
{charlatan} 0.6.1: Make Fake Data - diffify
{rstudioapi} 0.17.0: Safely Access the RStudio API - diffify
{litedown} 0.3: A Lightweight Version of R Markdown - diffify
{duckdb} 1.1.1: DBI Package for the DuckDB Database Management System - diffify
{bookdown} 0.41: Authoring Books and Technical Documents with R Markdown - diffify
{coro} 1.0.5: ‘Coroutines’ for R - diffify
{shiny.telemetry} 0.3.1: ‘Shiny’ App Usage Telemetry - diffify
{downloadthis} 0.4.1: Implement Download Buttons in ‘rmarkdown’ - diffify
{terra} 1.7-83: Spatial Data Analysis - diffify
Videos and Podcasts
Listen to the R-Weekly Highlights Podcast
Tutorials
DuckDB vs dplyr vs base R
Use nanoparquet instead of readr/CSV

Comparing data.table reshape to duckdb and polars
Visualizing performance regression of data.table with atime
Beyond Functions: How to Enrich an R Package with Data

-->

R Project Updates
Updates from R Core:
Call for Participation
Upcoming Events in 3 Months
Events in 3 Months:
R/Pharma APAC track
A list of R conferences and meetings
This week’s local R-User and applied stats events
Weekly R Workshops for Ukraine
Come Learn About Time Series with Me at ODSC West Wednesday October 30th, 2024
Connect
Join the Data Science Learning Community
rtistry


  
 
Post by @coolbutuseless@fosstodon.org
 View on Mastodon
  


Quotes of the Week
  
 
Post by @nrennie@fosstodon.org
 View on Mastodon
  


  
 
Post by @mattdray@fosstodon.org
 View on Mastodon
  


  
 
Post by @coolbutuseless@fosstodon.org
 View on Mastodon`,link:"https://rweekly.org//2024-W43.html",pubDate:"Mon, 21 Oct 2024 00:00:00 +0000",source:"R Weekly",sourceUrl:"https://rweekly.org",category:"r-lang"},{id:"https://www.tidyverse.org/blog/2024/10/quarto-live-0-1-1/",title:"WebAssembly roundup part 3: Quarto Live 0.1.1",description:`5x height
* [x] [\`hugodown::use_tidy_thumbnails()\`](https://rdrr.io/pkg/hugodown/man/use_tidy_post.html)
* [x] Add intro sentence, e.g. the standard tagline for the package
* [x] [\`usethis::use_tidy_thanks()\`](https://usethis.r-lib.org/reference/use_tidy_thanks.html)
-->
We’re tickled pink to announce the release of 
Quarto Live 0.1.1. Quarto Live is a new Quarto extension that uses WebAssembly to bring interactive examples and code exercises with custom grading algorithms to your HTML-based output documents, using standard Quarto markdown syntax.
Quarto Live adds a 
CodeMirror-based text editor to your document with automatic theming, syntax highlighting, and auto-complete. The editor executes R code using webR, and even integrates with 
Quarto’s OJS support so that interactive code cells update reactively with other ojs cells running in the page.
This blog post is part 3 of a WebAssembly roundup series, and will discuss Quarto Live’s primary features and show some examples of the extension in use. Authors who are creating educational content should find this post particularly interesting, as adding just a little interactivity can go a long way to keep readers engaged. The post contains only static screenshots, but if you’d like see Quarto Live in action there are interactive examples throughout its 
documentation website.
Getting Started
  
    
      

      

    
  

You can add the Quarto Live extension to a project by running the following command in a terminal with the current directory of a Quarto project:
quarto add r-wasm/quarto-live

Then, create a new document with the following template to get up and running using the knitr engine:
---
title: R Example
engine: knitr
format: live-html
---

{{< include ./_extensions/r-wasm/live/_knitr.qmd >}}

## Main Content

Once the document has been set up in this way, an R code block can be made into an interactive code block simply by switching {r} to {webr}. In this example, we create an interactive block that plots example data using the ggplot package.
\`\`\`{webr}
#| warning: false
library(ggplot2)

ggplot(airquality, aes(Temp, Ozone)) +
  geom_point() +
  geom_smooth(method = "loess")
\`\`\`

The resulting rendered document looks like the screenshot below. An editor is inserted into the document in the place of the code block, and an interested reader can use it to modify and re-execute the source code in place.
Quarto Live executes R code using the 
evaluate package, with output rendered using functions from 
knitr, so the output should be almost identical to output generated by R Markdown or Quarto.
The real beauty of this, in my opinion, is that the reader does not have to install any packages, copy and paste source code, switch to an IDE like 
RStudio or 
Positron, or deal with myriad other small but fiddly distractions just to experiment with a new piece of code or R package. They can do it, right there, without any context switching.
At first you might think of this like cells in a Jupyter notebook. However, to me a notebook feels more like an exploratory environment, whereas a Quarto Live block feels more like published content; it lives somewhere in-between computational notebooks and the static rendered output of literate programming frameworks like R Markdown and Quarto.
Interactive exercises
  
    
      

      

    
  

Traditionally, this level of direct interactivity for R code in a rendered document has only been possible though tools that require a server-side component, such as a Jupyter server or a Shiny server using the 
learnr package to execute code dynamically. This has limited deployment options for educators, particularly those who are restricted in where they can deploy to an institution’s own 
learning management system (LMS), or hindered by the sheer number of clients in the case of extremely large class sizes. The rise of virtual learning over the last few years has exacerbated the problem, tutorials might no longer be in-person in a managed computer lab, but virtually over the internet and on entirely student controlled devices.
WebAssembly brings a potential solution to this problem in the form of a universal runtime with minimal dependencies. Using Quarto Live an interactive tutorial can be rendered into static HTML output that’s well supported by third party virtual learning environments (when compared to traditional Shiny apps) without ongoing management of a server component.
Defining an exercise
  
    
      

      

    
  

Here’s an example showing how to create an interactive tutorial using Quarto Live. We’ll build an exercise with a grading component, so that visitors can get feedback on their responses.
### Exercise 1
Calculate the average of all the integers in the vector defined as the variable \`foo\`.

\`\`\`{webr}
#| exercise: ex_1
______(foo)
\`\`\`

This will add an interactive code editor to the page, along with some placeholder code. Notice how the placeholder contains a string of six underscore (_) characters. When defining an exercise, Quarto Live will consider six or more underscores as a “blank” that must be replaced by the learner.
In the exercise we’ve asked about a variable foo, but not created it anywhere yet. Let’s fix that by adding a setup block that will always be executed before learner submitted code. This block can appear before or after the one above, the placement does not matter as it’s linked to the exercise by it’s label.
\`\`\`{webr}
#| exercise: ex_1
#| setup: true
foo 
A check code block defines a grading algorithm, checking submitted code and assigning feedback in the form of a 
feedback list.
\`\`\`{webr}
#| exercise: ex_1
#| check: true
if (identical(.result, mean(foo))) {
  list(correct = TRUE, message = "Nice work!")
} else {
  list(correct = FALSE, message = "That's incorrect, sorry.")
}
\`\`\`

Finally, let’s add some solution text. This time we’ll use a Quarto fenced block to define the content. We still link this block to our exercise by providing the label we used before, just with a slightly different syntax. When a “hint” or “solution” block is added in this way, it is hidden until requested to be revealed by the learner through the Quarto Live exercise editor UI.
::: { .solution exercise="ex_1" }
::: { .callout-tip title="Solution" collapse="false"}
Here is a possible solution:
\`\`\`r
bar <- mean(foo)   #<1>
print(bar)         #<2>
\`\`\`
1. Use the \`mean\` function with \`foo\` to calculate the average, store this value as \`bar\`.
2. Print the value stored in \`bar\` to the console.
:::
:::

One really great thing about the way this works is that content is defined using standard Quarto markdown syntax. That means we can take full advantage of all the great features that Quarto provides for describing source code and results. Features like collapsible callout blocks and annotated source code allow us to present hints and solutions in the most effective way for learners.
You can read more about exercises and grading, including examples using the existing 
gradethis package, in the 
Quarto Live documentation.
Reactivity with OJS
  
    
      

      

    
  

Quarto Live cells may define or take input from OJS reactive variables in the page, providing a seamless way to create dynamic experiences without requiring the use of R Shiny. It is this technology that powers the grading feature shown in the previous section.
In the following example a Quarto Live cell takes input from an OJS variable and defines an output OJS variable. Notice how updates in the Quarto Live cell are propagated to related ojs cells in the page.
\`\`\`{ojs}
foo = 123;
\`\`\`

\`\`\`{ojs}
bar
\`\`\`

\`\`\`{webr}
#| input: ['foo']
#| define: ['bar']
bar 
You can even define a function in R and then invoke it reactively using an ojs cell. JavaScript arguments will be converted into R objects, including transparently handling datasets using webR’s generic R object constructor described in the 
first post of this blog series.
In this example an R function is defined that produces some output using base plotting commands. The function is executed from an ojs cell, reactively in response to a changing OJS input.
\`\`\`{webr}
#| include: false
#| define: draw_hist
draw_hist 
We hope this form of reactivity will become a powerful pattern to create rich interactive experiences for readers. For more examples of integration with OJS, take a look at the 
penguins dashboard-like plot example and 
dynamic exercises in the Quarto Live documentation.
Displaying htmlwidgets
  
    
      

      

    
  

The popular 
htmltools and 
htmlwidgets packages bring HTML and JavaScript widgets to R, and thanks to updates in webR such HTML output can also be displayed by Quarto Live. Simply print a HTML object or a widget in a live code block and the result will be dynamically added to the web page.
One more thing
  
    
      

      

    
  

By the way, everything I’ve shown in this blog post also works for Python using the 
Pyodide WebAssembly engine. Pyodide works really well for executing Python code on the web and inspired much of how the webR engine and library works today. Many examples of using Quarto Live to evaluate Python code, including dynamic experiences similar to those shown the previous sections, can be found on the 
Quarto Live documentation website.
Acknowledgements
  
    
      

      

    
  

I’m excited and fascinated to see Quarto Live start being used by the community to create interactive content for the education space and beyond. The project is still fairly new, but we would already not where we are without the help of early users providing their comments, issues and bug reports. Thank you!
@Analect, 
@andrewpbray, 
@aneesha, 
@arnaud-feldmann, 
@coatless, 
@cwickham, 
@CyuHat, 
@DrDeception, 
@fcichos, 
@joelnitta, 
@joelostblom, 
@kcarnold, 
@michaelplynch, 
@mine-cetinkaya-rundel, 
@Nenuial, 
@rpruim, 
@rundel, 
@ryjohnson09, and 
@tmieno2.`,link:"https://www.tidyverse.org/blog/2024/10/quarto-live-0-1-1/",pubDate:"Tue, 15 Oct 2024 00:00:00 +0000",source:"Tidyverse Blog",sourceUrl:"https://www.tidyverse.org/blog/",category:"r-lang"},{id:"https://rweekly.org//2024-W42.html",title:"R Weekly 2024-W42 Nested Tests, ShinyChat, Post Summaries",description:`Hello and welcome to this new issue!
\r
				
How to have (my) content shared by R Weekly?
This week’s release was curated by Eric Nantz, with help from the R Weekly team members and contributors.
Highlight
Nested unit tests with testthat
shinychat: Chat UI component for Shiny for R
Creating post summary with AI from Hugging Face
Insights
Postprocessing is coming to tidymodels
R in the Real World
Exploratory Data Analysis: Will PCE Data Push Bitcoin?
R in Academia
Can ChatGPT help construct non-trivial statistical models? An example with Bayesian “random” splines
Calculating an LOOCV MSE by hand
New Packages
📦 Go Live for More New Pkgs 📦
 -->
📦 Keep up to date wtih CRANberries 📦
CRAN
microinverterdata release 0.1.0
{data.table.threads} 1.0.0: Analyze Multi-Threading Performance for ‘data.table’ Functions
{AdverseEvents} 0.0.1: ‘shiny’ Application for Adverse Event Analysis of ‘OnCore’ Data
{openrouteservice} 0.5.3: An ‘openrouteservice’ API Client
{tidyllm} 0.1.0: Tidy Integration of Large Language Models
{genular} 1.0.0: ‘Genular’ Database API
{autometric} 0.0.5: Background Resource Logging
{opendataformat} 1.3.0: Reading and Writing Open Data Format Files
{spheredata} 0.1.0: Students’ Performance Dataset in Physics Education Research (SPHERE)
{usdatasets} 0.1.0: A Comprehensive Collection of U.S. Datasets
GitHub or Bitbucket
shinychat: Chat UI component for Shiny for R
hexsession: Create a tile of logos for loaded packages

Updated Packages
🔍 Search on R-universe 🔍
{mirai} 1.3.0: Minimalist Async Evaluation Framework for R - diffify
{nanonext} 1.3.0: R binding for NNG (Nanomsg Next Gen) - diffify
{secretbase} 1.0.3: Cryptographic Hash, Extendable-Output and Base64 Functions.
{gtfsio} 1.2.0: Read and Write General Transit Feed Specification (GTFS) Files - diffify
{tfrmtbuilder} 0.1.0: ‘shiny’ App Companion to the ‘tfrmt’ Package - diffify
{crew} 0.10.0: A Distributed Worker Launcher Framework - diffify
{kiwisR} 0.2.4: A Wrapper for Querying KISTERS ‘WISKI’ Databases via the ‘KiWIS’ API - diffify
{crypto2} 2.0.3: Download Crypto Currency Data from ‘CoinMarketCap’ without ‘API’ - diffify
{pagedown} 0.21: Paginate the HTML Output of R Markdown with CSS for Print - diffify
{ieeeround} 0.2-2: Functions to Set and Get the IEEE Rounding Mode - diffify
{random.cdisc.data} 0.3.16: Create Random ADaM Datasets - diffify
{nixtlar} 0.6.1: A Software Development Kit for ‘Nixtla’’s ‘TimeGPT’ - diffify
{officer} 0.6.7: Manipulation of Microsoft Word and PowerPoint Documents - diffify
{chevron} 0.2.7: Standard TLGs for Clinical Trials Reporting - diffify
{SqlRender} 1.19.0: Rendering Parameterized SQL and Translation to Dialects - diffify
{webdav} 0.1.1: A Simple Interface for Interacting with ‘WebDAV’ Servers - diffify
{eyelinkReader} 1.0.2: Import Gaze Data for EyeLink Eye Tracker - diffify
{multiverse} 0.6.2: Create ‘multiverse analysis’ in R - diffify
{exampletestr} 1.7.3: Help for Writing Unit Tests Based on Function Examples - diffify
{xportr} 0.4.1: Utilities to Output CDISC SDTM/ADaM XPT Files - diffify
Videos and Podcasts
Listen to the R-Weekly Highlights Podcast
Shiny Apps
A Guide to Validating R (Shiny) Applications in Pharma
Tutorials
EDA Reimagined in R: GWalkR + DuckDB for Lightning-Fast Visualizations
Introducing: the POLYGON FULL

How to Combine Two Data Frames in R with Different Columns Using Base R, dplyr, and data.table
Creating post summary with AI from Hugging Face
Nested unit tests with testthat
The easiest way to capture code output for tests

-->

R Project Updates
Updates from R Core:
Call for Participation
Upcoming Events in 3 Months
Events in 3 Months:
Standardising R Projects with the ProjectTemplate package workshop
A list of R conferences and meetings
This week’s local R-User and applied stats events
Weekly R Workshops for Ukraine
Connect
Join the Data Science Learning Community
rtistry



Quotes of the Week`,link:"https://rweekly.org//2024-W42.html",pubDate:"Mon, 14 Oct 2024 00:00:00 +0000",source:"R Weekly",sourceUrl:"https://rweekly.org",category:"r-lang"},{id:"https://www.tidyverse.org/blog/2024/10/shinylive-0-8-0/",title:"WebAssembly roundup part 2: Shinylive 0.8.0",description:`5x height
* [x] [\`hugodown::use_tidy_thumbnails()\`](https://rdrr.io/pkg/hugodown/man/use_tidy_post.html)
* [x] Add intro sentence, e.g. the standard tagline for the package
* [x] [\`usethis::use_tidy_thanks()\`](https://usethis.r-lib.org/reference/use_tidy_thanks.html)
-->
One of the most popular uses of webR in a wider project is 
Shinylive, a system for deploying Shiny for R or Python apps that run completely in a web browser, without the need for a dedicated Shiny server. Shinylive works by running both the server and client components in the viewer’s browser, and the support for running R Shiny apps in this way is provided by webR.
Since Shinylive works with both R and Python Shiny apps, the project is released as multiple independent but interconnecting software. The core 
Shinylive assets, the 
R shinylive package, the 
Python Shinylive package, and the 
Shinylive Quarto extension. This post will describe some the latest changes in the context of running the R Shinylive package and Quarto extension.
Shinylive assets
  
    
      

      

    
  

The latest release of the Shinylive assets upgrades the version of webR included to 0.4.2, bringing in the improved packaging and loading performance of R binaries discussed in 
part 1 of this series. Shinylive now defaults to downloading R packages in the improved .tgz archive format served by the 
webR default repository and 
R-Universe, resulting in a more efficient R package installation and faster start up process.
These changes are already making a tangible difference to applications. In a recent meeting of the 
R Consortium Submissions Working Group, it was reported that for a complex Shinylive app the overall load time decreased from over a minute to just 15 seconds! 1
The working group is championing improved practices for R-based submissions of clinical trial data to regulatory bodies for review. With their great work and our steady improvements to Shinylive over time, the group now report that they have reached a new milestone in 
successfully submitting a pilot R Shiny app, featuring a WebAssembly component with Shinylive, to the FDA for review.
  
R shinylive package
  
    
      

      

    
  




Reproducible data science with binary bundles
  
    
      

      

    
  

A benefit of WebAssembly is that the same binary instructions can be executed on a whole range of machine architectures, from high performance desktop workstations to low-power devices such as mobile phones or tablets. WebAssembly provides a common environment ensuring that each device can reproduce the exact same results, both now and potentially for many years into the future.
However, those with experience of building software and documents with long-term reproducibility in mind will know that not only must the exact version of your own software be available, but also packages and system dependencies too. Accurate versioning matters; newer editions of R packages are always being released with modified functionality or features deprecated and perhaps even removed.
Previously Shinylive downloaded R packages at runtime from the webR default repository. However, that repository follows CRAN and upgrades packages to the latest version reasonably often. So, to help provide long-lived reproducibility, the latest version of Shinylive now not only deploys your application source but also downloads and bundles as many R package binaries as possible in the exported app.
By including WebAssembly R package binaries, a self-contained bundle is created that will never change over time, even as new R package versions are released. Once deployed to a static web service such as GitHub Pages or Netlify you can be confident that your results will be exactly the same now or in many years time – at least as long as browsers continue to support the WebAssembly standard!
With this, it is now also possible to load a complex R Shinylive app from a local web server without any external internet connection. This isn’t likely to be that useful for most users, but there are some highly regulated industries and restricted network environments where it becomes a key feature.
Bundling WebAssembly binaries
  
    
      

      

    
  

By default, R packages installed from CRAN, 
R-Universe, or 
Bioconductor will be downloaded and distributed with your Shinylive application. For CRAN packages, the packages are sourced from the webR default repository. For R-Universe or Bioconductor packages, they are sourced from the WebAssembly binaries provided by R-Universe.
Here’s an example of what this looks like for a sample Shiny app depending on the dplyr package. Shinylive assets and R package binaries are downloaded and bundled at export time, and the status of each is shown in the output.
shinylive::export("app", "site")
#> ℹ Exporting Shiny app from: app
#> → Destination: site
#> [======================================================================] 100%
#> ✔ Copying base Shinylive files [289ms]
#> ✔ Loading metadata database ... done
#> 
#> Finding R package dependencies ... Done!
#> [=======>--------------------------------------------------------------]  11%
#> trying URL 'http://repo.r-wasm.org/bin/emscripten/contrib/4.4/dplyr_1.1.4.tgz'
#> Content type 'application/x-tar' length 1063948 bytes (1.0 MB)
#> ==================================================
#> downloaded 1.0 MB
#> [...]
#> 
#> ✔ Downloading WebAssembly R package binaries to site/shinylive/webr/packages [3.2s]
#> ✔ Writing app metadata to site/shinylive/webr/packages/metadata.rds [14ms]
#> ℹ Wrote site/shinylive/webr/packages/metadata.rds (694 bytes)
#> ✔ Writing site/app.json [17ms]
#> ℹ Wrote site/app.json (1.64K bytes)
#> ✔ Shinylive app export complete.
#> ℹ Run the following in an R session to serve the app:
#> \`httpuv::runStaticServer("site")\`


The shinylive R package will query the currently installed versions of packages on your machine and attempt to download and bundle the same version for WebAssembly. Binaries are considered acceptable if the major and minor version numbers match, and a warning is issued otherwise. This check ensures the resulting behaviour of the exported Shinylive app is as close as possible to the behaviour when running the app in the usual way.
shinylive::export("app", "site")
#> [...]
#> Warning message:
#> Package version mismatch for dplyr, ensure the versions below are compatible.
#> ! Installed version: 1.0.9, WebAssembly version: 1.1.4.
#> ℹ Install a package version matching the WebAssembly version to silence this error. 





Bundling custom R packages
  
    
      

      

    
  

Using your own custom R packages with webR or Shinylive is also possible, but requires a little extra work. R packages, particularly those that include compiled code, must be processed specially for WebAssembly. This requires an environment with a WebAssembly compiler toolchain such as Emscripten and some set up to organise the cross-compiling of packages using R.
The easiest way to get up and running is to 
create a personal R-Universe repository for your packages. The system will automatically build R package binaries for multiple targets, including WebAssembly, and Shinylive will download these resulting binaries when exporting your app.
It’s also possible to automatically cross-compile and deploy WebAssembly R package binaries using GitHub Actions. The 
r-wasm/actions repository provides reusable workflows for GitHub Actions, one of which can be used to automatically build WebAssembly R package when a GitHub release is created, attaching the resulting binary to the release. If an R package has been installed directly from GitHub, using a tool such as 
pak, Shinylive will look for binaries attached to a GitHub release for bundling.
Finally, building an R package for WebAssembly can be done manually using the 
rwasm package. This is a little more involved, using a combination of the 
Emscripten SDK and the 
webR Docker container to organise cross-compiling packages with R and manage custom CRAN-like repositories. Shinylive will also bundle WebAssembly binaries for R packages installed from such a custom repository.
Shinylive Quarto Extension
  
    
      

      

    
  

Shinylive applications may be embedded in a Quarto document using the Shinylive Quarto extension. With the extension active, a Shinylive app can be added by directly including its source code in the document markdown. Under the hood, the extension works by calling out to the export functionality provided by the Shinylive R and Python packages, and so improvements to the exporting process also applies to Shiny apps included in Quarto projects.
Lorem ipsum dolor sit amet, consectetur adipiscing elit.

\`\`\`{shinylive-r}
#| standalone: true
library(shiny)

ui <- [...]
server <- [...]
shinyApp(ui = ui, server = server)
\`\`\`

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
fugiat nulla pariatur.

Embedding data files in subdirectories
  
    
      

      

    
  

When a Shiny app has been deployed with Shinylive it does not have direct access to the filesystem on the client device. This is enforced by WebAssembly and the browser for security reasons. As such, additional data must either by downloaded or pre-loaded to a virtual filesystem before the app starts.
There are a few ways to do this with a Shinylive app, but when working in a Quarto document things are more constrained. One supported way is to define the content of additional data files inline.
\`\`\`{shinylive-r}
#| standalone: true
ui <- [...]
server <- [...]
shinyApp(ui = ui, server = server)

## file: data/example.csv
foo,bar,baz
1,2,3
2,4,6
3,6,9
5,10,15
8,16,24
\`\`\`

The system has been improved to support adding content to subdirectories, along with the ability to define binary content that has been base64 encoded. Combining this with Garrick Aden-Buie’s 
quarto-base64 extension is a great way to easily include arbitrary data in your Quarto embedded Shinylive apps.
Quarto project-wide shared assets
  
    
      

      

    
  

The latest version of the R shinylive package now checks if the export process is currently running as part of a Quarto render. If so, it uses the QUARTO_PROJECT_DIR environment variable as a hint for where to deploy Shinylive assets and bundled WebAssembly R binaries.
With this change it’s possible to include multiple Shinylive applications in different documents, sharing their WebAssembly assets across the entire project. This avoids an undesirable situation where the exact same set of fundamental R packages are downloaded and deployed many times to different paths in a Quarto website.
Using the latest Shinylive asssets
  
    
      

      

    
  

The Shinylive 0.8.0 assets have been 
released on GitHub. They will automatically be downloaded and used once the latest version of the shinylive R package makes it to CRAN and the package has been updated on your machine.
If you’d like to get a head start on the latest R shinylive features, you can install the current development version of shinylive directly from GitHub:
pak::pak("posit-dev/r-shinylive")
Or, if you prefer, you can stick with the current release version of the shinylive R package and orchestrate it to use the latest version of the assets by setting the environment variable:
SHINYLIVE_ASSETS_VERSION=0.8.0

Acknowledgements
  
    
      

      

    
  

@chaehni, 
@cpsievert, 
@darrida, 
@erikhall6373, 
@gadenbuie, 
@gschivley, 
@helgasoft, 
@jeroen, 
@JoaoGarcezAurelio, 
@jvcasillas, 
@kv9898, 
@next-game-solutions, 
@Luke-Symes-Tsy, 
@maek-ies, 
@pawelru, 
@quincountychsmn, 
@rmcminds, 
@rbcavanaugh, 
@schloerke, 
@StefKirsch, 
@virtualinertia, and 
@wch.
https://rconsortium.github.io/submissions-wg/minutes/2024-08-02/#webassembly ↩︎`,link:"https://www.tidyverse.org/blog/2024/10/shinylive-0-8-0/",pubDate:"Mon, 14 Oct 2024 00:00:00 +0000",source:"Tidyverse Blog",sourceUrl:"https://www.tidyverse.org/blog/",category:"r-lang"},{id:"https://www.tidyverse.org/blog/2024/10/webr-0-4-2/",title:"WebAssembly roundup part 1: webR 0.4.2",description:`5x height
* [x] [\`hugodown::use_tidy_thumbnails()\`](https://rdrr.io/pkg/hugodown/man/use_tidy_post.html)
* [x] Add intro sentence, e.g. the standard tagline for the package
* [x] [\`usethis::use_tidy_thanks()\`](https://usethis.r-lib.org/reference/use_tidy_thanks.html)
-->



  .CodeMirror pre {
    background-color: unset !important;
  }
  .btn-webr {
    background-color: #EEEEEE;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }




  import { WebR } from 'https://webr.r-wasm.org/v0.4.2/webr.mjs';
  globalThis.webR = new WebR();
  await globalThis.webR.init();
  await webR.FS.mkdir('/persist');
  await webR.FS.mount('IDBFS', {}, '/persist');
  await webR.FS.syncfs(true);
  await webR.evalRVoid("webr::shim_install()");
  await webR.evalRVoid("webr::global_prompt_install()", { withHandlers: false });

  globalThis.webRCodeShelter = await new globalThis.webR.Shelter();
  document.querySelectorAll(".btn-webr").forEach((btn) => {
    btn.innerText = 'Run code';
    btn.disabled = false;
  });








.output > pre, .output code {
  background-color: #ffffff !important;
  margin-top: -17px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

.error > pre, .error code {
  background-color: #fcebeb !important;
  color: #410E0E !important;
}


We’re totally stoked to announce the release of 
webr 0.4.2!
It’s been a little while since I’ve written about webR here, and a few releases between my last blog post and this one. In this post I’ll cover some of the exciting changes to the core webR distribution, and also include some interesting tidbits for JavaScript developers using webR in their own applications. You can see a full list of changes in the 
release notes.
This post is the first in an R for WebAssembly roundup series. The next posts will cover updates to Shinylive for R, and introduce new a new Quarto extension that uses the power of webR and WebAssembly to elevate your documents with interactivity.
WebAssembly roundup part 2: Shinylive 0.8.0
WebAssembly roundup part 3: Quarto Live 0.1.1
Supporting HTML and widget display
  
    
      

      

    
  

The base R distribution may be run using nothing but a text console, but some additional options can be implemented by frontends to provide system-dependent display of content. Previously, we implemented the 
pager option so that R’s help system can be better displayed within the 
webR application. Using the pager we can show R function and package documentation outside of the text console in dedicated tabbed windows.
In recent releases of webR we have expanded our support for such display systems, providing an implementation both for the 
View() function and the viewer global option used by 
htmlwidgets.
This gives us the ability to show a tabular data viewer for data.frame-like R objects and an iframe based HTML content viewer, enabling dynamic web-based output from R packages like 
leaflet and 
gt.
The implementation of viewer is fairly general, making use of webR’s 
output messages mechanism to send the required information to the main JavaScript thread for display. That way, any application using webR may choose to listen for those messages and how to show the resulting content on the page. We’ll make use of this in a later post where I introduce using webR to generate dynamic content in a new Quarto extension.
Improvements to the webR app UI
  
    
      

      

    
  

Recent webR releases have also made some other quality of life improvements to the webR app. Some minor improvements include making each UI panel resizeable, and offering .zip download of an entire directory in the Files panel.
R source syntax highlighting and parsing
  
    
      

      

    
  

The webR app’s code editor is powered by 
CodeMirror with R parsing provided by the 
codemirror-lang-r package. CodeMirror’s extensibility is excellent, and the library is well suited for integrating into a wider project like this. However, we noticed that the codemirror-lang-r package had a few issues highlighting certain types of R syntax. In particular, in our application highlighting matrix operations such as %*% would crash the parser!
As well as fixing this bug, we’ve worked to improve the R parser to better support some other types of R syntax and have 
contributed these changes upstream so as to benefit other users of codemirror-lang-r.
WebAssembly R package binary format
  
    
      

      

    
  

One of R’s greatest strengths is its vibrant community of R packages and their developers, and so one of the development goals of webR is that packages are downloaded and installed as fast as possible. In the latest release of webR, some joint work with 
Jeroen Ooms improving the performance of loading WebAssembly binary R packages has landed.
R packages and other filesystem data is efficiently made available to the R WebAssembly process using 
Emscripten’s file packager and the 
WORKERFS filesystem driver. Previously we used uncompressed filesystem data, with the intention of serving content using 
HTTP compression. However, web services do not always compress files automatically1, especially if they are large. So, in the latest release of webR, filesystem data may now be mounted from a gzip compressed file2, and the base R filesystem is also distributed in compressed form.
R package developers might recognise that traditional R package binaries are already produced as a gzip compressed archive. And, as pointed out to me by Jeroen, the format of a .tar archive is very similar to Emscripten’s .data files. With some 
clever arrangement of R package archive data and Emscripten filesystem metadata, pre-processed WebAssembly R package binaries may now be directly mounted to the virtual filesystem by webR.
Mounting R packages in this way is more efficient than installing .tgz archives in the usual manner because the decompression step happens in the browser, rather than using R’s slower internal routines, and the WORKERFS filesystem driver also avoids memory copies with the archive files until they are actually opened and read by the WebAssembly R process.
Both the 
webR default repository and 
R-Universe now serve binary R packages for WebAssembly in this new format. These packages can be installed and loaded interactively in the webR application, or used as dependencies in a deployed Shinylive for R app. For your own custom R packages, the 
rwasm package can be used to compile WebAssembly binaries using a pre-configured Docker container. However, I’d actually recommend 
creating a personal R-Universe repository for your packages instead, since this will automatically build binaries for multiple targets including WebAssembly.
A much simpler but effective change has also been made: R packages listed only as LinkingTo dependencies are no longer downloaded by webR on package installation. These are packages are required for building an R package from source, but not at runtime. The change saves network resources when installing WebAssembly R packages. In one particular worst-case scenario, this change avoided downloading about 100 megabytes of data!
Virtual file system drivers
  
    
      

      

    
  

A nice side-effect of the work in the previous section is that 
mounting filesystem data with WORKERFS now also works correctly under Node.js, fixing a fairly painful and long-standing bug for our server-side users of webR.
We’ve also introduced mounting with Emscripten’s 
IDBFS filesystem driver when running webR in the browser3. This driver makes use of the low-level 
IndexedDB API provided by the JavaScript environment to write virtual filesystem contents to a form of local storage on the device.
With this, files that have been written to the virtual filesystem can be persisted over page reloads and automatically made available again to the WebAssembly R process when the page is revisited in the future, without needing to re-download the content.
You can try it out right here! Any files written to the /persist directory in the interactive R console below should be persisted. The first time you load this page, the directory will be empty. However, if files are written they will remain available after you refresh the page or revisit in the future.
Loading webR...




  const runButton = document.getElementById('webr-run-button-1');
  const outputDiv = document.getElementById('webr-code-output-1');
  const editorDiv = document.getElementById('webr-editor-1');

  const editor = CodeMirror((elt) => {
    elt.style.border = '1px solid #eee';
    elt.style.height = 'auto';
    editorDiv.append(elt);
  },{
    value: \`install.packages('cli', quiet = TRUE)\\n\\nfiles  {
    runButton.disabled = true;
    let canvas = undefined;
    await webR.init();
    await webR.evalRVoid('webr::canvas(width=504, height=311.472)');
    await webR.FS.syncfs(false);
    const result = await webRCodeShelter.captureR(editor.getValue(), {
      withAutoprint: true,
      captureStreams: true,
      captureConditions: false,
      captureGraphics: false,
      env: {},
    });
    try {
      await webR.evalRVoid("dev.off()");
      const out = result.output.filter(
        evt => evt.type == 'stdout' || evt.type == 'stderr'
      ).map((evt) => evt.data).join('\\n');

      outputDiv.innerHTML = '';
      const pre = document.createElement("pre");
      if (/\\S/.test(out)) {
        const code = document.createElement("code");
        code.innerText = out;
        pre.appendChild(code);
      } else {
        pre.style.visibility = 'hidden';
      }
      outputDiv.appendChild(pre);

      const msgs = await webR.flush();
      msgs.forEach(msg => {
        if (msg.type === 'canvas'){
          if (msg.data.event === 'canvasImage') {
            
            canvas.getContext('2d').drawImage(msg.data.image, 0, 0);
          } else if (msg.data.event === 'canvasNewPage') {
            
            canvas = document.createElement('canvas');
            canvas.setAttribute('width', 2 * 504);
            canvas.setAttribute('height', 2 * 311.472);
            canvas.style.width="700px";
            canvas.style.display="block";
            canvas.style.margin="auto";
            
            const p = document.createElement("p");
            p.appendChild(canvas);
            outputDiv.appendChild(p);
          }
        }
      });
    } finally {
      webRCodeShelter.purge();
      runButton.disabled = false;
    }
  }



It should be noted that filesystem data stored in an IndexedDB database can only be accessed within the same 
origin, essentially across the current web page’s domain. Also, browsers may decide the amount of storage space provided, what content is deleted when quotas are reached, and when exactly that deletion occurs. In private browsing mode, for example, data is usually removed when the private session ends.
Even with these caveats, I expect developers working with webR will be able to make use of the IDBFS driver to selectively cache content or R packages that are too large to download over the network on every single page load, further improving start up times in their own apps as a result.
Developing with webR
  
    
      

      

    
  




Deprecating the ServiceWorker channel
  
    
      

      

    
  

The ServiceWorker 
communication channel, a method webR offered to handle message passing between the main browser thread and the 
JavaScript Web Worker running the R WebAssembly binary, has been deprecated. The communication channel was originally devised as a way to allow use of webR in cases where the SharedArrayBuffer API is not available. This includes any use of webR with an origin that is not 
Cross-Origin Isolated, such as when content is hosted by GitHub Pages.
The channel was implemented using a 
JavaScript Service Worker proxy and synchronous 
XHR requests. Unfortunately, with the overhead of message serialisation and capturing network requests, performance was significantly impacted. The channel was also not compatible with applications that make use of a service worker for genuine network proxy functionality, such as Shinylive.
An alternative method has since been developed in the form of the PostMessage communication channel. This instead uses the 
JavaScript PostMessage API, which is designed to handle communication between workers efficiently. It has much better performance and even provides a way to 
transfer objects using zero-copy operations. There are some minor downsides when using the PostMessage channel, mostly related to taking input using tools like 
readline(), or nested REPLs like R’s 
browser(), but for most applications we find that this is not catastrophic and a reasonable price to pay for what is intended as a fallback method.
If you are working on a webR application where 
readline() functionality is absolutely required, but you cannot set your web server headers to enable cross-origin isolation, an alternative implementation of using a service worker to solve the problem can be found with the 
coi-serviceworker package. When enabled, the web page will appear to webR to be cross-origin isolated and so SharedArrayBuffer can be used. This still has the other drawbacks of requiring a service worker, but will have much better performance than using webR’s ServiceWorker channel directly.
For these reasons, the PostMessage communication channel is now the default fallback when the web page is not cross-origin isolated. The ServiceWorker channel will continue to be available in the short-term, if explicitly requested, but will eventually be removed in a future version of webR.
API additions
  
    
      

      

    
  

We’ve made some minor changes to the webR JavaScript API. There’s nothing ground breaking here, but some new tools that we hope to be useful.
Report current version
  
    
      

      

    
  

With the aim of providing functionality similar to the 
R.Version() and 
packageVersion() R functions, the version of the currently running webR session may now be obtained from the JavaScript environment.
> const webR = new WebR();
> webR.version;
// '0.4.3-dev+d1fb4f4'





Discover an object’s class
  
    
      

      

    
  

An R object’s 
class() may be inspected from an RObject proxy. The returned value is an RCharacter vector of classes from which the object inherits.
> await webR.evalR("mtcars")
    .then(obj => obj.class())
    .then(cls => cls.toArray());
// ['data.frame']





Explicitly construct an R data.frame
  
    
      

      

    
  

In a previous version of webR, we introduced creating new R data.frame objects from JavaScript using the generic RObject constructor. WebR will build a data.frame for arguments with compatible shape: either an object with named columns, or an array with objects for each row.
> let source1 = { abc: [1, 2, 3], xyz: [4, 5, 6] };
> await new webR.RObject(source1)
   .then(obj => obj.class())
   .then(cls => cls.toArray());
// ['data.frame']

> let source2 = [ { abc: 1, xyz: 4 }, { abc: 2, xyz: 5 }, { abc: 3, xyz: 6 }];
> await new webR.RObject(source2)
   .then(obj => obj.class())
   .then(cls => cls.toArray());
// ['data.frame']


You might ask why not create an R list object by default? The reason is that we expect a common situation to be taking datasets defined in the JavaScript environment and processing them using R. With data.frame as the default, JavaScript objects that have been formatted for use with existing JavaScript frameworks can be almost transparently passed to R.
> penguins;
//  Array(344) [
//  0: { species: 'Adelie', island: 'Torgersen', flipper_length_mm: 181, ... }
//   ... more
// ]
> const sample_mass = await webR.evalR(\`
    \\\\(x) x |> dplyr::sample_n(5) |> dplyr::pull("body_mass_g")
  \`);
> await sample_mass(penguins);
// { type: 'double', names: null, values: [3300, 3250, 4000, 4700, 3750] }


The generic constructor throws an exception for JavaScript objects that cannot be coerced as a data.frame. If you’d prefer to create an R list, you must instead be explicit by using the RList constructor,
> let source = { def: [123, 456], uvw: 'hello' };
> await new webR.RObject(source);
// Uncaught WebRWorkerError: Can't construct \`data.frame\`. Source object is not eligible.

> let obj = await new webR.RList(source);
> await obj.type();
// 'list'


The RObject constructor is designed to be a useful default for interactive work at a JavaScript console. However, production applications should be 
explicit in the choice of constructor. With this in mind we have added a new class 
RDataFrame, a subclass of RList, so that users may be explicit in their choice of creating a data.frame, rather than relying on the generic RObject constructor.
> let source = { abc: [1, 2, 3], xyz: [4, 5, 6] };
> await new webR.RDataFrame(source)
   .then(obj => obj.class())
   .then(cls => cls.toArray());
// ['data.frame']


Now, if your source object is not quite as you expect, rather than continuing silently without error an exception will be thrown. We hope this will reduce the chance of type-related bugs and unexpected behaviour, and aid in debugging when issues do occur.
// Say we _expect_ a JS object here, but something went wrong...
> let bug = undefined;

> const obj1 = await new webR.RObject(bug);
// [No error and webR silently continues with an unexpected R object]

> const obj2 = await new webR.RDataFrame(bug);
// Uncaught WebRWorkerError: Can't construct \`data.frame\`. Source object is not eligible.





Acknowledgements
  
    
      

      

    
  

Special thanks to 
@jeroen, for helpful conversations when it comes to packaging for webR. And thank you, as always, to the users and developers contributing to webR in the form of discussion, bug reports, and pull requests.
@027xiguapi, 
@adrianolszewski, 
@alekrutkowski, 
@andrjohns, 
@baogorek, 
@bugzpodder, 
@christianp, 
@coatless, 
@codingthemystery, 
@ColinFay, 
@derrickstaten, 
@dipterix, 
@EduardBel, 
@gregvolny, 
@guillaumechaumet, 
@gyanaranjans, 
@helgasoft, 
@HenrikBengtsson, 
@isbool, 
@JosiahParry, 
@luisDVA, 
@minhaj57sorder, 
@olivroy, 
@oranwutang, 
@pawelru, 
@psychemedia, 
@rainer-rq-koelle, 
@richarddmorey, 
@richardjtelford, 
@seanbirchall, 
@shalom-lab, 
@StaffanBetner, 
@stobor827, 
@SugarRayLua, 
@tavosansal, 
@thomascwells, 
@timelyportfolio, and 
@zpinocchio.
It depends a lot on how the hosting service has configured their production web server and the files themselves; both size and content type can make a difference to behaviour. Some services allow for pre-compressed content, while others do not. The 
AWS CloudFront documentation gives a good overview of how this all fits together. ↩︎
Emscripten’s file_packager tool also supports built-in LZ4 compression with the --lz4 flag. While generally useful for bundling files for WebAssembly applications, we avoid using this feature since it writes important data to a .js output file that must be executed. Ideally, we’d prefer our package loading mechanism to only require a single file download, similar to traditional R package archives. ↩︎
Note that currently users wanting to make use of IDBFS mounting must configure webR to use the 
PostMessage Communication Channel. ↩︎`,link:"https://www.tidyverse.org/blog/2024/10/webr-0-4-2/",pubDate:"Fri, 11 Oct 2024 00:00:00 +0000",source:"Tidyverse Blog",sourceUrl:"https://www.tidyverse.org/blog/",category:"r-lang"},{id:"https://www.tidyverse.org/blog/2024/10/postprocessing-preview/",title:"Postprocessing is coming to tidymodels",description:`We’re bristling with elation to share about a set of upcoming features for postprocessing with tidymodels. Postprocessors refine predictions outputted from machine learning models to improve predictive performance or better satisfy distributional limitations. The developmental versions of many tidymodels core packages include changes to support postprocessors, and we’re ready to share about our work and hear the community’s thoughts on our progress so far.
Postprocessing support with tidymodels hasn’t yet made it to CRAN, but you can install the needed versions of tidymodels packages with the following code.
pak::pak(
  paste0(
    "tidymodels/",
    c("tune", "workflows", "rsample", "tailor")
  )
)
Now, we load packages with those developmental versions installed.
library(tidymodels)
library(probably)
library(tailor)
Existing tidymodels users might have spotted something funky already; who is this tailor character?
Meet tailor👋
  
    
      

      

    
  

The tailor package introduces tailor objects, which compose iterative adjustments to model predictions. tailor is to postprocessing as recipes is to preprocessing; applying your mental model of recipes to tailor should get you a good bit of the way there.
Tool
Applied to...
Initialize with...
Composes...
Train with...
Predict with...




recipes
Training data
recipe()
step_*()s
prep()
bake()


tailor
Model predictions

tailor()
adjust_*()ments

fit()

predict()




First, users can initialize a tailor object with 
tailor().
tailor()
#> 
#> ── tailor ──────────────────────────────────────────────────────────────────────
#> A postprocessor with 0 adjustments.

Tailors compose “adjustments,” analogous to steps from the recipes package.
tailor() %>%
  adjust_probability_threshold(threshold = .7)
#> 
#> ── tailor ──────────────────────────────────────────────────────────────────────
#> A binary postprocessor with 1 adjustment:
#> 
#> • Adjust probability threshold to 0.7.

As an example, we’ll apply this tailor to the two_class_example data made available after loading tidymodels.
head(two_class_example)
#>    truth      Class1       Class2 predicted
#> 1 Class2 0.003589243 0.9964107574    Class2
#> 2 Class1 0.678621054 0.3213789460    Class1
#> 3 Class2 0.110893522 0.8891064779    Class2
#> 4 Class1 0.735161703 0.2648382969    Class1
#> 5 Class2 0.016239960 0.9837600397    Class2
#> 6 Class1 0.999275071 0.0007249286    Class1

This data gives the true value of an outcome variable truth as well as predicted probabilities (Class1 and Class2). The hard class predictions, in predicted, are "Class1" if the probability assigned to "Class1" is above .5, and "Class2" otherwise.
The model predicts "Class1" more often than it does "Class2".
two_class_example %>% count(predicted)
#>   predicted   n
#> 1    Class1 277
#> 2    Class2 223

If we wanted the model to predict "Class2" more often, we could increase the probability threshold assigned to "Class1" above which the hard class prediction will be "Class1". In the tailor package, this adjustment is implemented in 
adjust_probability_threshold(), which can be situated in a tailor object.
tlr <-
  tailor() %>%
  adjust_probability_threshold(threshold = .7)

tlr
#> 
#> ── tailor ──────────────────────────────────────────────────────────────────────
#> A binary postprocessor with 1 adjustment:
#> 
#> • Adjust probability threshold to 0.7.

tailors must be fitted before they can predict on new data. For adjustments like 
adjust_probability_threshold(), there’s no training that actually happens at the 
fit() step besides recording the name and type of relevant variables. For other adjustments, like numeric calibration with 
adjust_numeric_calibration(), parameters are actually estimated at the 
fit() stage and separate data should be used to train the postprocessor and evaluate its performance. More on this in 
Tailors in context.
In this case, though, we can 
fit() on the whole dataset. The resulting object is still a tailor, but is now flagged as trained.
tlr_trained <- fit(
  tlr,
  two_class_example,
  outcome = truth,
  estimate = predicted,
  probabilities = c(Class1, Class2)
)

tlr_trained
#> 
#> ── tailor ──────────────────────────────────────────────────────────────────────
#> A binary postprocessor with 1 adjustment:
#> 
#> • Adjust probability threshold to 0.7. [trained]

When used with a model 
workflow via 
add_tailor(), the arguments to 
fit() a tailor will be set automatically. Generally, as in recipes, we recommend that users add tailors to model workflows for training and prediction rather than using them standalone for greater ease of use and to prevent data leakage, but tailors are totally functional by themselves, too.
Now, when passed new data, the trained tailor will determine the outputted class based on whether the probability assigned to the level "Class1" is above .7, resulting in more predictions of "Class2" than before.
predict(tlr_trained, two_class_example) %>% count(predicted)
#> # A tibble: 2 × 2
#>   predicted     n
#>   <fct>     <int>
#> 1 Class1      236
#> 2 Class2      264

Changing the probability threshold is one of many possible adjustments available in tailor.
For probabilities: 
calibration
For transformation of probabilities to hard class predictions: 
thresholds, 
equivocal zones
For numeric outcomes: 
calibration, 
range
Support for tailors is now plumbed through workflows (via 
add_tailor()) and tune, and rsample includes a set of infrastructural changes to prevent data leakage behind the scenes. That said, we haven’t yet implemented support for tuning parameters in tailors, but we plan to implement that before this functionality heads to CRAN.
Tailors in context
  
    
      

      

    
  

As an example, let’s model a study of food delivery times in minutes (i.e., the time from the initial order to receiving the food) for a single restaurant. The deliveries data is available upon loading the tidymodels meta-package.
data(deliveries)

# split into training and testing sets
set.seed(1)
delivery_split <- initial_split(deliveries)
delivery_train <- training(delivery_split)
delivery_test  <- testing(delivery_split)

# resample the training set using 10-fold cross-validation
set.seed(1)
delivery_folds <- vfold_cv(delivery_train)

# print out the training set
delivery_train
#> # A tibble: 7,509 × 31
#>    time_to_delivery  hour day   distance item_01 item_02 item_03 item_04 item_05
#>               <dbl> <dbl> <fct>    <dbl>   <int>   <int>   <int>   <int>   <int>
#>  1             21.2  16.1 Tue       3.02       0       0       0       0       0
#>  2             17.9  12.4 Sun       3.37       0       0       0       0       0
#>  3             22.4  14.2 Fri       2.59       0       0       0       0       0
#>  4             30.9  19.1 Sat       2.77       0       0       0       0       0
#>  5             30.1  16.5 Fri       2.05       0       0       0       1       0
#>  6             35.3  14.7 Sat       4.57       0       0       2       1       1
#>  7             13.1  11.5 Sat       2.09       0       0       0       0       0
#>  8             18.3  13.4 Tue       2.35       0       2       1       0       0
#>  9             25.2  20.5 Sat       2.43       0       0       0       1       0
#> 10             30.7  16.7 Fri       2.24       0       0       0       1       0
#> # ℹ 7,499 more rows
#> # ℹ 22 more variables: item_06 <int>, item_07 <int>, item_08 <int>,
#> #   item_09 <int>, item_10 <int>, item_11 <int>, item_12 <int>, item_13 <int>,
#> #   item_14 <int>, item_15 <int>, item_16 <int>, item_17 <int>, item_18 <int>,
#> #   item_19 <int>, item_20 <int>, item_21 <int>, item_22 <int>, item_23 <int>,
#> #   item_24 <int>, item_25 <int>, item_26 <int>, item_27 <int>

Let’s deliberately define a regression model that has poor predicted values: a boosted tree with only three ensemble members.
delivery_wflow <-
  workflow() %>%
  add_formula(time_to_delivery ~ .) %>%
  add_model(boost_tree(mode = "regression", trees = 3))
Evaluating against resamples:
set.seed(1)
delivery_res <- 
  fit_resamples(
    delivery_wflow, 
    delivery_folds, 
    control = control_resamples(save_pred = TRUE)
  )
The $R^2$ looks quite strong!
collect_metrics(delivery_res)
#> # A tibble: 2 × 6
#>   .metric .estimator  mean     n std_err .config             
#>   <chr>   <chr>      <dbl> <int>   <dbl> <chr>               
#> 1 rmse    standard   9.52     10 0.0533  Preprocessor1_Model1
#> 2 rsq     standard   0.853    10 0.00357 Preprocessor1_Model1

Let’s take a closer look at the predictions, though. How well are they calibrated? We can use the 
cal_plot_regression() helper from the probably package to put together a quick diagnostic plot.
collect_predictions(delivery_res) %>%
  cal_plot_regression(truth = time_to_delivery, estimate = .pred)


Ooof.
In comes tailor! Numeric calibration can help address the correlated errors here. We can add a tailor to our existing workflow to “bump up” predictions towards their true value.
delivery_wflow_improved <-
  delivery_wflow %>%
  add_tailor(tailor() %>% adjust_numeric_calibration())
The resampling code looks the same from here.
set.seed(1)
delivery_res_improved <- 
  fit_resamples(
    delivery_wflow_improved, 
    delivery_folds, 
    control = control_resamples(save_pred = TRUE)
  )
Checking out the same plot reveals a much better fit!
collect_predictions(delivery_res_improved) %>%
  cal_plot_regression(truth = time_to_delivery, estimate = .pred)


There’s actually some tricky data leakage prevention happening under the hood here. When you add tailors to workflow and fit them with tune, this is all taken care of for you. If you’re interested in using tailors outside of that context, check out 
this documentation section in add_tailor().
What’s to come
  
    
      

      

    
  

We’re excited about how this work is shaping up and would love to hear yall’s thoughts on what we’ve brought together so far. Please do comment on our social media posts about this blog entry or leave issues on the 
tailor GitHub repository and let us know what you think!
Before these changes head out to CRAN, we’ll also be implementing tuning functionality for postprocessors. You’ll be able to tag arguments like adjust_probability_threshold(threshold) or adjust_probability_calibration(method) with tune() to optimize across several values. Besides that, post-processing with tidymodels should “just work” on the developmental versions of our packages—let us know if you come across anything wonky.
Acknowledgements
  
    
      

      

    
  

Postprocessing support has been a longstanding feature request across many of our repositories; we’re grateful for the community discussions there for shaping this work. Additionally, we thank Ryan Tibshirani and Daniel McDonald for fruitful discussions on how we might scope these features.`,link:"https://www.tidyverse.org/blog/2024/10/postprocessing-preview/",pubDate:"Tue, 08 Oct 2024 00:00:00 +0000",source:"Tidyverse Blog",sourceUrl:"https://www.tidyverse.org/blog/",category:"r-lang"},{id:" https://julialang.org/blog/2024/10/julia-1.11-highlights/index.html ",title:`
      Julia 1.11 Highlights  
  `,description:"Highlights of the Julia 1.11 release.",link:" https://julialang.org/blog/2024/10/julia-1.11-highlights/index.html ",pubDate:"Tue, 08 Oct 2024 00:00:00 +0000",source:"Julia Language Blog",sourceUrl:"https://julialang.org/blog/",category:"julia"},{id:"https://rweekly.org//2024-W41.html",title:"R Weekly 2024-W41 Generative Art, Word Templates, Expectations",description:`Hello and welcome to this new issue!
\r
				
How to have (my) content shared by R Weekly?
This week’s release was curated by Colin Fay, with help from the R Weekly team members and contributors.
Highlight
Getting started with generative art
3MW (Using Word Templates With R)
Expectations, Verified! Dive into the World of Unit Tests with expect_*()
Insights
Using property-based testing in R
R in the Real World
Examining exams using Rasch models and assessment of measurement invariance
R in Organizations
A Guide to R Package Validation in Pharma
What is GxP Validation in Clinical Software Development?
New Packages
📦 Go Live for More New Pkgs 📦
 -->
📦 Keep up to date wtih CRANberries 📦
Updated Packages
🔍 Search on R-universe 🔍
simaerep release 0.6.0
Videos and Podcasts
Listen to the R-Weekly Highlights Podcast
R Internationally
A comunidade R fala português
Tutorials
Set up your own universe on R-universe
AI code completion in Positron
MLOps from Zero to Hero : Build your ML model
Automated random variable distribution inference using Kullback-Leibler divergence and simulating best-fitting distribution
Expectations, Verified! Dive into the World of Unit Tests with expect_*()
A Safe Space for Learning How to Make Pull Requests
Economic Calendar
Getting started with generative art
How to Split Data into Equal Sized Groups in R: A Comprehensive Guide for Beginners
Mastering Data Manipulation in R: Comprehensive Guide to Stacking Data Frame Columns
3MW (Using Word Templates With R)

-->

R Project Updates
Updates from R Core:
Upcoming Events in 3 Months
Events in 3 Months:
Spatial modelling with GAMs in R workshop
R/Pharma APAC track
A list of R conferences and meetings
This week’s local R-User and applied stats events
Weekly R Workshops for Ukraine
Connect
Join the Data Science Learning Community`,link:"https://rweekly.org//2024-W41.html",pubDate:"Mon, 07 Oct 2024 00:00:00 +0000",source:"R Weekly",sourceUrl:"https://rweekly.org",category:"r-lang"},{id:" https://julialang.org/blog/2024/11/this-month-in-julia-world/index.html ",title:`
      This Month in Julia World  
  `,description:"Community Newsletter for October 2024",link:" https://julialang.org/blog/2024/11/this-month-in-julia-world/index.html ",pubDate:"Mon, 07 Oct 2024 00:00:00 +0000",source:"Julia Language Blog",sourceUrl:"https://julialang.org/blog/",category:"julia"},{id:" https://julialang.org/blog/2024/10/this-month-in-julia-world/index.html ",title:`
      This Month in Julia World  
  `,description:"Community Newsletter for September 2024",link:" https://julialang.org/blog/2024/10/this-month-in-julia-world/index.html ",pubDate:"Sat, 05 Oct 2024 00:00:00 +0000",source:"Julia Language Blog",sourceUrl:"https://julialang.org/blog/",category:"julia"},{id:"https://rweekly.org//2024-W40.html",title:"R Weekly 2024-W40 Data Career Insights, In-Place Modifications, rix",description:`Hello and welcome to this new issue!
\r
				
How to have (my) content shared by R Weekly?
This week’s release was curated by Tony ElHabr, with help from the R Weekly team members and contributors.
Highlight
Data Career Insights: Lessons from four senior leaders in the data space
In-Place Modifications
Reproducible data science with Nix, part 13 – {rix} is on CRAN!
Insights
Cover and modify, some tips for R package development
Data Career Insights: Lessons from four senior leaders in the data space
RStudio IDE and Posit Workbench 2024.09.0: What’s New
Reproducible data science with Nix, part 13 – {rix} is on CRAN!
Some Options for Fast Matrix Decompositions in R

{surveydown 0.3.0}
Seal of Approval: collapse
R in the Real World
A Bayesian Plackett-Luce model in Stan applied to pinball championship data

Estimating ecological network robustness with R: A functional approach
Exploding, Impacting: looking at bioRxiv preprint view dynamics with R
Resources
Descriptive statistics by hand
Handling large data with polars and tidypolars
New Packages
📦 Go Live for More New Pkgs 📦
 -->
📦 Keep up to date wtih CRANberries 📦
CRAN
{dsld} 0.2.2: Data Science Looks at Discrimination
{xmlwriter} 0.1.1: Fast and Elegant XML Generation
{geocomplexity} 0.1.0: Mitigating Spatial Bias Through Geographical Complexity

{dotwhisker} 0.8.3: Dot-and-Whisker Plots of Regression Results
{hexDensity} 1.4.4: Fast Kernel Density Estimation with Hexagonal Grid
{literanger} 0.1.1: Random Forests for Multiple Imputation Based on ‘ranger’
Updated Packages
🔍 Search on R-universe 🔍
{Lahman} 12.0-0: Sean ‘Lahman’ Baseball Database - diffify
{broom} 1.0.7: Convert Statistical Objects into Tidy Tibbles - diffify
{httr2} 1.0.5: Perform HTTP Requests and Process the Responses - diffify
{feasts} 0.4.1: Feature Extraction and Statistics for Time Series - diffify
{DescTools} 0.99.57: Tools for Descriptive Statistics - diffify
{rio} 1.2.3: A Swiss-Army Knife for Data I/O - diffify
Videos and Podcasts
Listen to the R-Weekly Highlights Podcast
Tutorials
In-Place Modifications
100 Bushels of Corn
3MW (Creating Word Docs With R)
Modeling loss aversion with extended-support beta regression
Shiny Assistant for Python - How to Build Shiny for Python Apps with GPT and GenerativeAI
How to Create Horizontal Boxplots in Base R and ggplot2
How to Remove Outliers from Multiple Columns in R: A Comprehensive Guide

-->

R Project Updates
Updates from R Core:
Call for Participation
Upcoming Events in 3 Months
Events in 3 Months:
October 17 - Analyzing Time Series at Scale with Cluster Analysis in R workshop
October 3 - Probabilistic Network Inference and Analysis in R and Python workshop
R/Pharma APAC track
A list of R conferences and meetings
This week’s local R-User and applied stats events
Weekly R Workshops for Ukraine
Connect
Join the Data Science Learning Community
rtistry
Here is my #viz for the #TidyTuesday challenge—W40. This one is about the Chess Game Dataset (Lichess).
.
🔗: stevenponce.netlify.app/data_visuali...
.
#rstats | #r4ds | #dataviz | #ggplot2
[image or embed]
— Steven Ponce (@sponce1.bsky.social) September 25, 2024 at 5:03 AM



I've not done #tidytuesday in a longggg time and this week's dataset on dialogues from Shakespeare plays was a nice way to get back into it. Nothing too complicated, just a bump chart tracking the amount of dialogue for major characters. Everything in R with ggplot #dataviz #rstats
[image or embed]
— Aman Bhargava  (@aman.bh) September 22, 2024 at 1:21 AM


Quotes of the Week
A quick reminder that if you are scoring/recoding variables using the same logic in #rstats, you can use across() to score those items all at once. pic.twitter.com/KnYbIHKlqZ
— Crystal Lewis (@Cghlewis) September 27, 2024`,link:"https://rweekly.org//2024-W40.html",pubDate:"Sun, 29 Sep 2024 00:00:00 +0000",source:"R Weekly",sourceUrl:"https://rweekly.org",category:"r-lang"},{id:"https://rweekly.org//2024-W39.html",title:"R Weekly 2024-W39 patchwork, gguidance, prime numbers",description:`Hello and welcome to this new issue!
\r
				
How to have (my) content shared by R Weekly?
This week’s release was curated by Tony ElHabr,, with help from the R Weekly team members and contributors.
Highlight
patchwork 1.3.0
Prime numbers as sums of three squares. by @ellis2013nz
{gguidance}: Extended guide options for ‘ggplot2’
Insights
Deposits In The Wild

Ease renv::restore() by updating your repository to Posit Public Package Manager
R in the Real World
3MW (Dealing With Shitty Text Data)
Introducing Shiny Assistant - You Can Now Build Shiny Applications with GPT and GenerativeAI
R in Organizations
Create a free Llama 3.1 405B-powered chatbot on an R package’s GitHub repo in <1 min

Free Boba Tea and Technical R Topics Lure Young Learners to New Brunei R User Group
R in Academia
Extended-support beta regression for [0,1] responses
Resources
5 Books added to Big Book of R
New Packages
📦 Go Live for More New Pkgs 📦
 -->
📦 Keep up to date wtih CRANberries 📦
CRAN
{readMDTable} 0.1.1: Read Markdown Tables into Tibbles
{ggtangle} 0.0.2: Draw Network with Data
{mvcor} 1.0: Correlation Coefficients for Multivariate Data
{ggalign} 0.0.3: Align Multiple ‘ggplot’ Objects
{gammi} 0.1: Generalized Additive Mixed Model Interface
GitHub or Bitbucket
{gguidance}: Extended guide options for ‘ggplot2’

Updated Packages
🔍 Search on R-universe 🔍
{osmapiR} 0.2.1: Interface to ‘OpenStreetMap API’ - diffify
{rhino} 1.10.1: A Framework for Enterprise Shiny Applications - diffify
{Rblpapi} 0.3.15: R Interface to ‘Bloomberg’ - diffify
{V8} 5.0.1: Embedded JavaScript and WebAssembly Engine for R - diffify
{pdftools} 3.4.1: Text Extraction, Rendering and Converting of PDF Documents - diffify
{openssl} 2.2.2: Toolkit for Encryption, Signatures and Certificates Based on
OpenSSL - diffify
{magick} 2.8.5: Advanced Graphics and Image-Processing in R - diffify
{jsonlite} 1.8.9: A Simple and Robust JSON Parser and Generator for R - diffify
Videos and Podcasts
Listen to the R-Weekly Highlights Podcast
Gist & Cookbook
Exploring 2023 1-year ACS data (Kyle Walker)
Tutorials
patchwork 1.3.0

Prime numbers as sums of three squares. by @ellis2013nz
Improving Shiny app interactivity and performance with ggiraph
Wrangling filenames into variables
Stepwise selection of variables in regression is Evil
Mastering Data Transformation in R with pivot_longer and pivot_wider
Unveiling ‘RandomWalker’: Your Gateway to Tidyverse-Compatible Random Walks

-->

R Project Updates
Updates from R Core:
Upcoming Events in 3 Months
Events in 3 Months:
October 17 - Analyzing Time Series at Scale with Cluster Analysis in R workshop
October 3 - Probabilistic Network Inference and Analysis in R and Python workshop
R/Pharma APAC track
A list of R conferences and meetings
This week’s local R-User and applied stats events
Weekly R Workshops for Ukraine
Connect
Join the Data Science Learning Community
rtistry
For biodiversity month, I made this #dataviz of animal observations added to the Atlas of Living Australia in 2024! 🌏

🐦 Perching birds (songbirds, finches, magpies) are truly #1 🥇 & for good reason: They represent > half of all bird species globally!

code: github.com/AtlasOfLivin...

#rstats 📊🧪
[image or embed]
— Dax Kellie (@daxkellie.bsky.social) September 18, 2024 at 12:29 AM


Quotes of the Week
R users learning about data wrangling in Python #rstats pic.twitter.com/PQ5k5iwV7i
— Lukas Jung (@lukasjung_hd) September 20, 2024



Every damn time... #rstats
[image or embed]
— Mattan S. Ben-Shachar 🎗️🇮🇱🇺🇦 (@mattansb.bsky.social) September 20, 2024 at 2:39 AM`,link:"https://rweekly.org//2024-W39.html",pubDate:"Mon, 23 Sep 2024 00:00:00 +0000",source:"R Weekly",sourceUrl:"https://rweekly.org",category:"r-lang"},{id:" https://julialang.org/blog/2024/09/juliacon-2025-announcement/index.html ",title:`
      JuliaCon Global 2025 and JuliaCon 2024 Wrap-Up  
  `,description:"JuliaCon Global 2025 and JuliaCon 2024 Wrap-Up Blogpost.",link:" https://julialang.org/blog/2024/09/juliacon-2025-announcement/index.html ",pubDate:"Wed, 18 Sep 2024 00:00:00 +0000",source:"Julia Language Blog",sourceUrl:"https://julialang.org/blog/",category:"julia"},{id:"https://rweekly.org//2024-W38.html",title:"R Weekly 2024-W38 surreal package, gender in Australian census, version-ing data",description:`Hello and welcome to this new issue!
\r
				
How to have (my) content shared by R Weekly?
This week’s release was curated by Ryo Nakagawara, with help from the R Weekly team members and contributors.
Highlight
{surreal} 0.0.1: Create Datasets with Hidden Images in Residual Plots
Gender and sexuality in Australian surveys and census
Please Version Data
Insights
Thank You, Joseph Rickert: A Legacy of Leadership and Innovation in the R Community
Empowering Data Science: How R is Transforming Research in Cameroon
Labels For Technical Writing Projects
R in the Real World
Please Version Data
Express to Impress: Leveraging IBCS Standards for Powerful Data Presentations
Gender and sexuality in Australian surveys and census
R in Organizations
Takeaways from the R/Pharma Summit at posit::conf(2024)
Resources
Introduction to Web Scraping and Data Management for Social Scientists
Workshop: Introduction to machine learning with {tidymodels} in R
New Packages
📦 Go Live for More New Pkgs 📦
 -->
📦 Keep up to date wtih CRANberries 📦
CRAN
{hydflood} 0.5.8: Flood Extents and Duration along the Rivers Elbe and Rhine
{wdi2} 0.1.0: Download World Development Indicators from the World Bank
Indicators API
{tidycountries} 0.0.1: Access and Manipulate Comprehensive Country Level Data in Tidy Format
{fdicdata} 0.1.1: Accessing FDIC Bank Data
{RJalaliDate} 0.1.0: Handling Jalali Date (Persian / Solar Hijri)
{corpmetrics} 1.0: Tools for Valuation, Financial Metrics and Modeling in Corporate Finance
{ContourFunctions} 0.1.2: Create Contour Plots from Data or a Function
{forestdata} 0.1.0: Download Forestry Data
{ream} 1.0-1: Density, Distribution, and Sampling Functions for Evidence
Accumulation Models
{ggfigdone} 0.1.2: Manage & Modify ‘ggplot’ Figures using ‘ggfigdone’
{CTRing} 0.1.0: Density Profiles of Wood from CT Scan Images
{charcuterie} 0.0.4: Handle Strings as Vectors of Characters
{tidytuesdayR} 1.1.2: Access the Weekly ‘TidyTuesday’ Project Dataset
{surreal} 0.0.1: Create Datasets with Hidden Images in Residual Plots

Updated Packages
RcppArmadillo 14.0.2-1 on CRAN: Updates
RcppSpdlog 0.0.18 on CRAN: Updates
{lsnstat} 1.0.1: ‘La Societe Nouvelle’ API Access - diffify
{ichimoku} 1.5.5: Visualization and Tools for Ichimoku Kinko Hyo Strategies - diffify
{eodhdR2} 0.5.1: Official R API for Fetching Data from ‘EODHD’ - diffify
{tiler} 0.3.2: Create Geographic and Non-Geographic Map Tiles - diffify
{paws.analytics} 0.7.0: ‘Amazon Web Services’ Analytics Services - diffify
{memery} 0.6.0: Internet Memes for Data Analysts - diffify
{legocolors} 0.4.0: Official Lego Color Palettes - diffify
{epubr} 0.6.5: Read EPUB File Metadata and Text - diffify
{AutoDeskR} 0.1.5: An Interface to the ‘AutoDesk’ ‘API’ Platform - diffify
{UKFE} 0.3.6: UK Flood Estimation - diffify
{rhino} 1.10.0: A Framework for Enterprise Shiny Applications - diffify
{billboarder} 0.5.0: Create Interactive Chart with the JavaScript ‘Billboard’ Library - diffify
{florabr} 1.3.0: Explore Flora e Funga do Brasil Database - diffify
{litedown} 0.2: A Lightweight Version of R Markdown - diffify
{labelr} 0.1.9: Label Data Frames, Variables, and Values - diffify
{declared} 0.25: Functions for Declared Missing Values - diffify
{sna} 2.8: Tools for Social Network Analysis - diffify
{openxlsx2} 1.9: Read, Write and Edit ‘xlsx’ Files - diffify
{trekfont} 0.9.6: Star Trek Fonts Collection - diffify
{trekcolors} 0.2.0: Star Trek Color Palettes - diffify

🔍 Search on R-universe 🔍
Videos and Podcasts
Listen to the R-Weekly Highlights Podcast
The Positron IDE, Tidy NLP and MLOps — with Dr. Julia Silge 
Tutorials
Introduction to Interpretable Machine Learning in R
Exploratory Data Analysis: Economic Performance of China
How to webscrape in R?
How do you iterate a vector?
How to Use lapply() Function with Multiple Arguments in R
Exact significance tests for 2 × 2 tables

-->

R Project Updates
Updates from R Core:
Call for Participation
Upcoming Events in 3 Months
Events in 3 Months:
R/Pharma APAC track
A list of R conferences and meetings
This week’s local R-User and applied stats events
Weekly R Workshops for Ukraine
Probabilistic Network Inference and Analysis in R and Python workshop, October 3rd
Datasets
CSV files of the works of William Shakespeare.
Connect
Join the Data Science Learning Community
Quotes of the Week
I joined Twitter in 2022 to connect with other R programmers. A few months later, ownership transferred and I watched a mass exodus. 😭
But I hear there's no R community here? Not true. 
A good place to start looking:
— Frank Hull 🍥 (@frankiethull) September 12, 2024



If you can write an R function you can make an API and you are already a backend web-dev. #rstats https://t.co/OxiNmGBjm2
— Josiah (@JosiahParry) September 12, 2024



I can't remember the last time I renamed variables manually in #rstats. I always use my data dictionary for renaming! That way, if I ever need to update names in the future, I'm only updating once in my data dictionary, not in both my data dictionary and script. 🙌 pic.twitter.com/oP06OZAaU1
— Crystal Lewis (@Cghlewis) September 5, 2024`,link:"https://rweekly.org//2024-W38.html",pubDate:"Mon, 16 Sep 2024 00:00:00 +0000",source:"R Weekly",sourceUrl:"https://rweekly.org",category:"r-lang"},{id:"https://www.tidyverse.org/blog/2024/09/patchwork-1-3-0/",title:"patchwork 1.3.0",description:`5x height
* [x] [\`hugodown::use_tidy_thumbnails()\`](https://rdrr.io/pkg/hugodown/man/use_tidy_post.html)
* [x] Add intro sentence, e.g. the standard tagline for the package
* [x] [\`usethis::use_tidy_thanks()\`](https://usethis.r-lib.org/reference/use_tidy_thanks.html)
-->
I’m excited to present 
patchwork 1.3.0, our package for creating multifigure plot compositions. This versions adds table support and improves support for “free"ing components to span across multiple grid cells.
You can install patchwork from CRAN with:
install.packages("patchwork")
You can see a full list of changes in the 
release notes
library(patchwork)
library(ggplot2)
library(gt)
Tables are figures too
  
    
      

      

    
  

The new and shiny feature of the release is that patchwork now has native support for gt objects, making it possible to compose beautifully formatted tables together with your figures. This has been made possible through Teun Van den Brand’s effort to provide grob output to gt. While this means that you can now pass in gt objects to 
wrap_elements() in the same way as other supported data types, it also goes one step further, using the semantics of the table design to add table specific formatting options through the new 
wrap_table() function.
But let’s take a step back and see how the simplest support works in reality:
p1 <- ggplot(airquality) +
  geom_line(aes(x = Day, y = Temp, colour = month.name[Month])) +
  labs(colour = "Month")

aq <- airquality[sample(nrow(airquality), 10), ]
p1 + gt(aq) + ggtitle("Sample of the dataset")


A few things can be gathered already from this small example. Tables can have titles (and subtitles, captions, and tags) like regular plots (in that sense they behave like 
wrap_elements() output). Also, and this is perhaps more interesting, patchwork is aware that the first row is special (a header row), and thus places that on top of the panel area so that the plot region of the left plot is aligned with the body of the table, not the full table.
Lastly, we see that tables often have a fixed size, contrary to plots which can shrink and expand based on how much room they have. Because of this, our table is overflowing it’s region in the plot above creating a not-so-great look.
Let’s see how we can use 
wrap_table() to control some of these behaviors. First, while we could decrease the font size in the table to make it smaller, we could also allow it some more space instead. We could do this by using plot_layout(widths = ...) but it would require a fair amount of guessing on our side to get it just right. Thankfully, patchwork is smart enough to figure it out for us and we can instruct it to do so using the space argument in 
wrap_table(). Setting it to "free_y" instructs it to fix the width to the table width but keep the height free:
p1 + wrap_table(aq, space = "free_y")


Setting space to "fixed" would constrain both the width and the height of the area it occupies. Since we only have a single row in our layout this would leave us with some empty horizontal space:
p1 + wrap_table(aq, space = "fixed")


If the space is fixed in the y direction and the table has any source notes or footnotes, these will behave like the column header and be placed outside the panel area depending on the panel setting
aq_footer <- gt(aq) |>
  tab_source_note("This is not part of the table body")
p1 + wrap_table(aq_footer, space = "fixed")


While the space argument is great for making the composition look good and the table well placed in the whole, it can also serve a different purpose of making sure that rows (or columns) are aligned with the axis of a plot. There are no facilities to ensure that the breaks order matches between plots and tables so that is the responsibility of the user, but otherwise this is a great way to use tables to directly augment a plot:
p2 <- ggplot(airquality) +
  geom_boxplot(aes(x = month.name[Month], y = Temp)) +
  theme(axis.text.x = element_blank(), axis.title.x = element_blank()) +
  scale_x_discrete(expand = c(0, 0.5))

# Construct our table
table <- rbind(
  tapply(airquality$Temp, airquality$Month, max),
  tapply(airquality$Temp, airquality$Month, median),
  tapply(airquality$Temp, airquality$Month, min)
)
colnames(table) <- month.name[5:9]
table <- data.frame(
  Measure = c("Max", "Median", "Min"),
  table
)
table <- gt(table, rowname_col = "Measure") |>
  cols_width(contains(month.name) ~ px(100)) |>
  cols_align(align = "center") |>
  cols_align(align = "right", columns = "Measure")

p2 / wrap_table(table, space = "fixed")


Circling back, there was another argument to 
wrap_table() we didn’t get into yet. In the plot above, we see that the row names are conveniently aligned with the axis rather than the panel of the plot above, in the same way as the headers where placed outside the panel area. This is a nice default and generally makes sense for the semantics of a table, but you might want something different. The panel argument allows you to control this exact behavior. It takes "body", "full", "rows", or "cols" which indicate what portion of the table should be inside the panel area. The default is "body" which places row and column names outside the panel. "full", on the contrary, places everything inside, while "rows" and "cols" are half versions that allows you to keep either column or row names outside the panel respectively.
# Place all rows (including the header row) inside the panel area
p1 + wrap_table(aq, panel = "rows", space = "free_y")


Just like the tables support ggplot2-like titles, they also support tags, meaning that patchworks auto-tagging works as expected. It can be turned off using the ignore_tag argument but often you’d want to treat it as a figure in the figure text:
p1 + wrap_table(aq, panel = "rows", space = "free_y") +
  plot_annotation(tag_levels = "A") &
  theme(plot.tag = element_text(margin = margin(0, 6, 6, 0)))


Accesibility
  
    
      

      

    
  

We truly believe that the features laid out above will be a boon for augmenting your data visualisation with data that can be read precisely at a glance. However, we would be remiss to not note how tables that are part of a patchwork visualisation doesn’t have the same accessibility featurees as a gt table included directly in e.g. an HTML output. This is because graphics are rasterised into a PNG file and thus looses all semantical information that is inherent in a table. This should be kept in mind when providing Alt text for your figures so you ensure they are legible for everyone.
Future
  
    
      

      

    
  

The support on the patchwork end is likely done at this point, but the conversion to grobs that has been added to gt is still somewhat young and will improve over time. It is likely that markdown formatting (through marquee) and other niceties will get added, leading to even more power in composing tables with plots using patchwork as the glue between them. As with the 
support for gt in typst the support for gt in patchwork is part of our larger effort to bring the power of gt to more environments and create a single unified solution to table styling.
With freedom comes great responsibility
  
    
      

      

    
  

The second leg of this release concerns the 
free() function which was introduced in the last release. I devoted a whole section of my posit::conf talk this year to talk about 
free() and how it was a good thing to say no to requests for functionality until you have a solution that fits into your API and doesn’t add clutter. I really like how the API for 
free() turned out but I also knew it could do more. In this release it delivers on those promises with two additional arguments.
Which side?
  
    
      

      

    
  

As it were, 
free() could only be used to completely turn off alignment of a plot, e.g. like below:
p1 <- ggplot(mtcars) +
  geom_bar(aes(y = factor(gear), fill = factor(gear))) +
  scale_y_discrete(
    "",
    labels = c("3 gears are often enough",
               "But, you know, 4 is a nice number",
               "I would def go with 5 gears in a modern car")
  )
p2 <- ggplot(mtcars) + geom_point(aes(mpg, disp))

free(p1) / p2


We can see that panel alignment has been turned off both to the left and to the right (and top and bottom if it were visible). But perhaps you are only interested in un-aligning the left side, keeping the legend to the right of both plots. Now you can, thanks to the side argument which takes a string containing one or more of the t, r, b, and l characters to indicate which sides to apply the freeing to (default is "trbl" meaning “target all sides”).
free(p1, side = "l") / p2


Freeing works inside nested patchworks, where you can target various sides at various levels:
p3 <- ggplot(mtcars) +
  geom_boxplot(aes(y = factor(gear), disp)) +
  scale_y_discrete(
    "",
    labels = c("... and 3",
               "4 of them",
               "5 gears")
  )


nested <- p2 / free(p1, side = "l")

free(nested, side = "r") /
  p3


What does “freeing” means anyway?
  
    
      

      

    
  

While being able to target specific sides is pretty great in and off itself, we are not done yet. After being able to not align panels the most requested feature was the possibility of moving the axis title closer to the axis text if alignment had pushed it apart. Consider again our unfreed patchwork:
p1 / p2


While we can “fix” it by letting the top panel stretch, another way to improve upon it would be to move the dangling y-axis title of the bottom plot closer to the axis. Enter the type argument to 
free() which informs patchwork how to not align the input. The default ("panel") works just as 
free() always has, but the other two values opens up some new nifty goodies. Setting type = "label" does exactly what we discussed above, freeing the label from alignment so it sticks together with the axis and axis text:
p1 /
  free(p2, type = "label")


The other type is "space" which works slightly different. Using this you tell patchwork to not reserve any space for what the side(s) contain. This is perfect in situation where you already have empty space next to it that can fit the content. Consider this plot:
plot_spacer() + p1 +
  p2 + p2


Ugh, the axis text of the top plot pushes everything apart even though there is ample of space for it in the empty region on the left. This is where type = "space" comes in handy:
plot_spacer() + free(p1, type = "space", side = "l") +
  p2 + p2


Of course, such power comes with the responsibility of you ensuring there is actually space for it — otherwise it will escape out of the figure area:
free(p1, type = "space", side = "l") /
  p2


All the different types of freeing can be stacked on top of each other so you can have a plot that keeps the left axis label together with the axis while also stretches the right side to take up empty space:
p1 /
  free(free(p2, "panel", "r"), "label", "l")


But as always, don’t go overboard. If you find yourself needing to use an elaborate combination of stacked 
free() calls there is a good chance that something with your core composition needs rethinking.
The rest
  
    
      

      

    
  

The above are the clear highlights of this release. It also contains the standard bug fixes — especially in the area of axis collecting which was introduced in the last release and came with a bunch of edge cases that were unaccounted for. There is also a new utility function: 
merge() which is an alternative to the - operator that I don’t think many users understood or used. It allows you to merge all plots together into a nested patchwork so that the right hand side is added to a new composition.
Acknowledgements
  
    
      

      

    
  

Thank you to all people who have contributed issues, code and comments to this release:
@BenVolpe94, 
@daniellembecker, 
@dchiu911, 
@ericKuo722, 
@Fan-iX, 
@IndrajeetPatil, 
@jack-davison, 
@karchern, 
@laresbernardo, 
@marchtaylor, 
@mariadelmarq, 
@Maschette, 
@michaeltopper1, 
@mkoohafkan, 
@n-kall, 
@person-c, 
@pettyalex, 
@petzi53, 
@phispu, 
@psychelzh, 
@rinivarg, 
@selkamand, 
@Soham6298, 
@svraka, 
@teng-gao, 
@teunbrand, 
@thomasp85, 
@timz0605, 
@wish1832, and 
@Yunuuuu.`,link:"https://www.tidyverse.org/blog/2024/09/patchwork-1-3-0/",pubDate:"Fri, 13 Sep 2024 00:00:00 +0000",source:"Tidyverse Blog",sourceUrl:"https://www.tidyverse.org/blog/",category:"r-lang"},{id:"https://rweekly.org//2024-W37.html",title:"R Weekly 2024-W37, chart axes, custom roxygen2 tag, FAIR",description:`Hello and welcome to this new issue!
\r
				
How to have (my) content shared by R Weekly?
This week’s release was curated by Batool Almarzouq, with help from the R Weekly team members and contributors.
Highlight
Five ways to improve your chart axes
Create and use a custom roxygen2 tag
Making your blog FAIR
Insights
PLANES: Plausibility Analysis of Epidemiological Signals with the rplanes package

R-Ladies Bariloche in Argentina: Fostering a Different Approach to  Leadership
Gender and sexuality in Australian surveys and census by @ellis2013nz
R in Academia
An IV study design to estimate an effect size when randomization is not ethical

New Packages
📦 Go Live for More New Pkgs 📦
 -->
📦 Keep up to date wtih CRANberries 📦
CRAN
{rplanes} 0.1.0: Plausibility Analysis of Epidemiological Signals
{mmints} 0.1.0: Workflows for Building Web Applications
{hdar} 1.0.0: ‘REST’ API Client for Accessing Data on ‘WEkEO HDA V2’
{ggvolcano} 0.1.3: Publication-Ready Volcano Plots
{geoidep} 0.1.0: Download Geographic Data on Various Topics Provided and Managed
by the Spatial Data Infrastructure of Peru
{flowmapblue} 0.0.2: Flow Map Rendering
{easybio} 1.0: Comprehensive Single-Cell Annotation and Transcriptomic Analysis
Toolkit
{SuperCell} 1.0: Simplification of scRNA-Seq Data by Merging Together Similar
Cells
{pandemics} 0.1.0: Monitoring a Developing Pandemic with Available Data
{mlmc} 2.0.2: Multi-Level Monte Carlo
{GeRnika} 1.0.0: Simulation, Visualization and Comparison of Tumor Evolution Data
{fastpng} 0.1.5: Read and Write PNG Files with Configurable Decoder/Encoder
Options
{g3viz} 1.2.0: Interactively Visualize Genetic Mutation Data using a
Lollipop-Diagram
{rPDBapi} 2.1: A Comprehensive Interface for Accessing the Protein Data Bank
{wget} 0.0.2: Setting Download Method to ‘wget’
{AOboot} 0.1.0: Bootstrapping in Different One-Way and Two-Way ANOVA
{pooledpeaks} 1.0.5: Genetic Analysis of Pooled Samples
{ropenmeteo} 0.1: Wrappers for ‘Open-Meteo’ API
{rice} 0.1.1: Radiocarbon Calibration Equations
{QuICSeedR} 0.1.2: Analyze Data for Fluorophore-Assisted Seed Amplification Assays
{pakret} 0.1.0: Cite ‘R’ Packages on the Fly in ‘R Markdown’ and ‘Quarto’
{GeoThinneR} 1.0.0: Simple Spatial Thinning for Ecological and Spatial Analysis
Coding Skills
{wintime} 0.1.0: Win Time Methods for Time-to-Event Data in Clinical Trials
{TWW} 0.0.1: Growth Models
Hazards Model
{cbbinom} 0.1.0: Continuous Analog of a Beta-Binomial Distribution
Updated Packages
🔍 Search on R-universe 🔍
{corporaexplorer} 0.9.0: A ‘Shiny’ App for Exploration of Text Collections - diffify
{blme} 1.0-6: Bayesian Linear Mixed-Effects Models - diffify
{kit} 0.0.19: Data Manipulation Functions Implemented in C - diffify
{pbdZMQ} 0.3-12: Programming with Big Data – Interface to ‘ZeroMQ’ - diffify
{salso} 0.3.41: Search Algorithms and Loss Functions for Bayesian Clustering - diffify
{treesitter.r} 1.1.0: ‘R’ Grammar for ‘Tree-Sitter’ - diffify
{sf} 1.0-17: Simple Features for R - diffify
{maxstablePCA} 0.1.1: Apply a PCA Like Procedure Suited for Multivariate Extreme Value
Distributions - diffify
{MacBehaviour} 1.2.7: Behavioural Studies of Large Language Models - diffify
{geobr} 1.9.1: Download Official Spatial Data Sets of Brazil - diffify
{adehabitatMA} 0.3.17: Tools to Deal with Raster Maps - diffify
{adehabitatLT} 0.3.28: Analysis of Animal Movements - diffify
{SHELF} 1.11.0: Tools to Support the Sheffield Elicitation Framework - diffify
{pedFamilias} 0.2.4: Import and Export ‘Familias’ Files - diffify
{emoa} 0.5-3: Evolutionary Multiobjective Optimization Algorithms - diffify
{caviarpd} 0.3.13: Cluster Analysis via Random Partition Distributions - diffify
{bigsparser} 0.7.3: Sparse Matrix Format with Data on Disk - diffify
{AFR} 0.3.6: Toolkit for Regression Analysis of Kazakhstan Banking Sector
Data - diffify
{vivainsights} 0.5.4: Analyze and Visualize Data from ‘Microsoft Viva Insights’ - diffify
{spatialwarnings} 3.1.0: Spatial Early Warning Signals of Ecosystem Degradation - diffify
{polle} 1.5: Policy Learning - diffify
{outliertree} 1.10.0: Explainable Outlier Detection Through Decision Tree Conditioning - diffify
{NNS} 10.9.2: Nonlinear Nonparametric Statistics - diffify
{netropy} 0.2.0: Statistical Entropy Analysis of Network Data - diffify
{NADA2} 1.1.8: Data Analysis for Censored Environmental Data - diffify
{DrugUtilisation} 0.7.1: Summarise Patient-Level Drug Utilisation in Data Mapped to the
OMOP Common Data Model - diffify
{rPDBapi} 2.1: A Comprehensive Interface for Accessing the Protein Data Bank - diffify
{rgplates} 0.5.0: R Interface for the GPlates Web Service and Desktop Application - diffify
{rts2} 0.7.6: Real-Time Disease Surveillance - diffify
{lfproQC} 0.2.0: Quality Control for Label-Free Proteomics Expression Data - diffify
{genekitr} 1.2.8: Gene Analysis Toolkit - diffify
{flowmapper} 0.1.2: Draw Flows (Migration, Goods, Money, Information) on ‘ggplot2’
Plots - diffify
Videos and Podcasts
Listen to the R-Weekly Highlights Podcast
TidyX episode 186 : Gapminder camcorder - be kind and rewind
Tutorials
Five ways to improve your chart axes

Side by Side Comparison - Gleam vs R
Use Posit tools with data in DuckDB, Databricks, and Snowflake
Boost your shiny app with sparkling data visualizations: a deep dive into Chart.js JavaScript library
How do you iterate a vector?
Dr Drang and the Electoral College
Boost your shiny app with sparkling data visualizations: a deep dive into Chart.js JavaScript library
Create and use a custom roxygen2 tag
Harness the Full Potential of Case-Insensitive Searches with grep() in R
Mastering the grep() Function in R: Using OR Logic
Making your blog FAIR

[LAST CHANCE] Dealing With Excel’s Pivot Tables

-->

R Project Updates
Updates from R Core:
Upcoming Events in 3 Months
Events in 3 Months:
R/Pharma APAC track
A list of R conferences and meetings
This week’s local R-User and applied stats events
Weekly R Workshops for Ukraine
Connect
Join the Data Science Learning Community
artistry
Happy #FathersDay! 🧍🏡
We plotted emu occurrence data to celebrate the animal worlds’ great dads & dad figures... & stumbled on some egg-ceptional looking patterns… 🪺🗺️ #Rtistry
Male emus' both incubate & rear those little stripey babies we all know & love... all alone! 🐣 pic.twitter.com/vrde1CNyme
— Atlas of Living Aust (@atlaslivingaust) August 31, 2024


Quotes of the Week`,link:"https://rweekly.org//2024-W37.html",pubDate:"Tue, 10 Sep 2024 00:00:00 +0000",source:"R Weekly",sourceUrl:"https://rweekly.org",category:"r-lang"}],wr={articles:yr};const br={class:"min-h-screen bg-gray-50"},vr={class:"container mx-auto px-4 py-8"},kr={class:"mb-8 bg-white rounded-lg shadow-sm p-6"},Rr={class:"flex flex-col md:flex-row md:items-center md:justify-between gap-4"},Ar={class:"flex flex-col sm:flex-row gap-4"},Pr=["value"],Tr={class:"relative"},Sr={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"},xr={class:"p-6"},_r={class:"flex items-center gap-2 text-sm text-gray-500 mb-3"},Cr={class:"px-2 py-1 bg-blue-50 text-blue-600 rounded"},Ir={class:"text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors"},Dr=["href"],Wr={class:"text-gray-600 text-sm mb-4 flex items-center gap-2"},Mr={class:"text-gray-600 line-clamp-3 overflow-hidden"},Er={class:"px-6 py-4 bg-gray-50 border-t"},Lr=["href"],jr={key:0,class:"text-center py-12"},Fr={__name:"ArticleList",setup(e){const n=yt(wr.articles),t=yt(""),o=yt(""),i=Lt(()=>{const c=new Set(n.value.map(u=>u.category));return Array.from(c)}),a=Lt(()=>n.value.filter(c=>{const u=c.title.toLowerCase().includes(t.value.toLowerCase())||c.description.toLowerCase().includes(t.value.toLowerCase()),h=!o.value||c.category===o.value;return u&&h})),s=c=>new Date(c).toLocaleDateString("zh-CN",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}),r=()=>{t.value="",o.value=""};return(c,u)=>(Ee(),Ye("div",br,[M("div",vr,[M("div",kr,[M("div",Rr,[u[4]||(u[4]=M("h2",{class:"text-3xl font-bold text-gray-800"},"RSS阅读器",-1)),M("div",Ar,[po(M("select",{"onUpdate:modelValue":u[0]||(u[0]=h=>o.value=h),class:"px-4 py-2 border rounded-lg bg-white hover:border-blue-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"},[u[2]||(u[2]=M("option",{value:""},"全部分类",-1)),(Ee(!0),Ye(fe,null,fo(i.value,h=>(Ee(),Ye("option",{key:h,value:h,class:"py-1"},ze(h),9,Pr))),128))],512),[[hr,o.value]]),M("div",Tr,[po(M("input",{type:"text","onUpdate:modelValue":u[1]||(u[1]=h=>t.value=h),placeholder:"搜索文章...",class:"w-full px-4 py-2 pl-10 border rounded-lg hover:border-blue-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"},null,512),[[dr,t.value]]),u[3]||(u[3]=M("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[M("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})],-1))])])])]),M("div",Sr,[(Ee(!0),Ye(fe,null,fo(a.value,h=>(Ee(),Ye("article",{key:h.id,class:"bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group"},[M("div",xr,[M("div",_r,[M("span",Cr,ze(h.category),1),M("span",null,ze(s(h.pubDate)),1)]),M("h2",Ir,[M("a",{href:h.link,target:"_blank",class:"hover:text-blue-700"},ze(h.title),9,Dr)]),M("div",Wr,[u[5]||(u[5]=M("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[M("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 6v6m0 0v6m0-6h6m-6 0H6"})],-1)),M("span",null,ze(h.source),1)]),M("p",Mr,ze(h.description),1)]),M("div",Er,[M("a",{href:h.link,target:"_blank",class:"text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all"},u[6]||(u[6]=[Bi(" 阅读全文 "),M("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[M("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"})],-1)]),8,Lr)])]))),128))]),a.value.length===0?(Ee(),Ye("div",jr,[u[7]||(u[7]=M("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-16 w-16 mx-auto text-gray-400 mb-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[M("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01"})],-1)),u[8]||(u[8]=M("p",{class:"text-gray-500 text-lg"},"没有找到相关文章",-1)),M("button",{onClick:r,class:"mt-4 px-4 py-2 text-blue-600 hover:text-blue-800 font-medium"}," 清除筛选 ")])):Ms("",!0)])]))}},Nr={class:"min-h-screen bg-gray-50"},Ur={__name:"App",setup(e){return(n,t)=>(Ee(),Ye("div",Nr,[Ae(Fr)]))}};const Br=fr(Ur);Br.mount("#app");
