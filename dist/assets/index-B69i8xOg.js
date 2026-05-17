var Mt=Object.defineProperty;var $t=(e,t,n)=>t in e?Mt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var E=(e,t,n)=>$t(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();class I{constructor(){E(this,"element",null)}mount(t){this.element=t,this.element.innerHTML=this.render(),this.afterMount()}afterMount(){}unmount(){this.beforeUnmount(),this.element=null}beforeUnmount(){}}class V extends I{constructor(n){super();E(this,"props");this.props={type:"text",placeholder:"",value:"",required:!1,error:"",...n}}render(){const{label:n,type:s,placeholder:r,value:o,required:i,error:a,id:c,name:d}=this.props,u=i?'<span class="text-danger">*</span>':"",p=a?"input-error":"",y=a?`<span class="error-text animate-fade-in">${a}</span>`:"";return`
      <div class="input-group">
        <label for="${c}" class="input-label">${n} ${u}</label>
        <input 
          type="${s}" 
          id="${c}" 
          name="${d}" 
          placeholder="${r}" 
          value="${o}"
          class="input-field ${p}"
          ${i?"required":""}
        />
        ${y}
      </div>
    `}afterMount(){if(this.element){const n=this.element.querySelector("input");n==null||n.addEventListener("input",s=>{const r=s.target.value;this.props.value=r,this.props.onChange&&this.props.onChange(r)})}}getValue(){if(this.element){const n=this.element.querySelector("input");return n?n.value:this.props.value||""}return this.props.value||""}setProps(n){this.props={...this.props,...n},this.element&&this.mount(this.element)}}class me extends I{constructor(n){super();E(this,"props");this.props={type:"button",variant:"primary",isLoading:!1,disabled:!1,...n}}render(){const{label:n,type:s,variant:r,isLoading:o,disabled:i,id:a}=this.props,c=a?`id="${a}"`:"";return`
      <button type="${s}" ${c} class="btn btn-${r} ${o?"btn-loading":""}" ${i||o?"disabled":""}>
        ${o?'<span class="spinner-inline"></span>':""}
        <span class="btn-label">${n}</span>
      </button>
    `}afterMount(){if(this.props.onClick&&this.element){const n=this.element.querySelector("button");n==null||n.addEventListener("click",s=>{!this.props.isLoading&&!this.props.disabled&&this.props.onClick(s)})}}setProps(n){this.props={...this.props,...n},this.element&&this.mount(this.element)}}function mt(e,t){return function(){return e.apply(t,arguments)}}const{toString:It}=Object.prototype,{getPrototypeOf:Ce}=Object,{iterator:Pe,toStringTag:gt}=Symbol,xe=(e=>t=>{const n=It.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),D=e=>(e=e.toLowerCase(),t=>xe(t)===e),Ae=e=>t=>typeof t===e,{isArray:Z}=Array,Y=Ae("undefined");function ie(e){return e!==null&&!Y(e)&&e.constructor!==null&&!Y(e.constructor)&&T(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const yt=D("ArrayBuffer");function jt(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&yt(e.buffer),t}const Ht=Ae("string"),T=Ae("function"),bt=Ae("number"),ae=e=>e!==null&&typeof e=="object",zt=e=>e===!0||e===!1,ge=e=>{if(xe(e)!=="object")return!1;const t=Ce(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(gt in e)&&!(Pe in e)},Vt=e=>{if(!ae(e)||ie(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},Kt=D("Date"),Jt=D("File"),Wt=e=>!!(e&&typeof e.uri<"u"),Gt=e=>e&&typeof e.getParts<"u",Xt=D("Blob"),Qt=D("FileList"),Yt=e=>ae(e)&&T(e.pipe);function Zt(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const et=Zt(),tt=typeof et.FormData<"u"?et.FormData:void 0,en=e=>{if(!e)return!1;if(tt&&e instanceof tt)return!0;const t=Ce(e);if(!t||t===Object.prototype||!T(e.append))return!1;const n=xe(e);return n==="formdata"||n==="object"&&T(e.toString)&&e.toString()==="[object FormData]"},tn=D("URLSearchParams"),[nn,sn,rn,on]=["ReadableStream","Request","Response","Headers"].map(D),an=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function le(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let s,r;if(typeof e!="object"&&(e=[e]),Z(e))for(s=0,r=e.length;s<r;s++)t.call(null,e[s],s,e);else{if(ie(e))return;const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let a;for(s=0;s<i;s++)a=o[s],t.call(null,e[a],a,e)}}function wt(e,t){if(ie(e))return null;t=t.toLowerCase();const n=Object.keys(e);let s=n.length,r;for(;s-- >0;)if(r=n[s],t===r.toLowerCase())return r;return null}const K=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,vt=e=>!Y(e)&&e!==K;function Fe(...e){const{caseless:t,skipUndefined:n}=vt(this)&&this||{},s={},r=(o,i)=>{if(i==="__proto__"||i==="constructor"||i==="prototype")return;const a=t&&wt(s,i)||i,c=Me(s,a)?s[a]:void 0;ge(c)&&ge(o)?s[a]=Fe(c,o):ge(o)?s[a]=Fe({},o):Z(o)?s[a]=o.slice():(!n||!Y(o))&&(s[a]=o)};for(let o=0,i=e.length;o<i;o++)e[o]&&le(e[o],r);return s}const ln=(e,t,n,{allOwnKeys:s}={})=>(le(t,(r,o)=>{n&&T(r)?Object.defineProperty(e,o,{__proto__:null,value:mt(r,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(e,o,{__proto__:null,value:r,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:s}),e),cn=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),dn=(e,t,n,s)=>{e.prototype=Object.create(t.prototype,s),Object.defineProperty(e.prototype,"constructor",{__proto__:null,value:e,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(e,"super",{__proto__:null,value:t.prototype}),n&&Object.assign(e.prototype,n)},un=(e,t,n,s)=>{let r,o,i;const a={};if(t=t||{},e==null)return t;do{for(r=Object.getOwnPropertyNames(e),o=r.length;o-- >0;)i=r[o],(!s||s(i,e,t))&&!a[i]&&(t[i]=e[i],a[i]=!0);e=n!==!1&&Ce(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},fn=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const s=e.indexOf(t,n);return s!==-1&&s===n},pn=e=>{if(!e)return null;if(Z(e))return e;let t=e.length;if(!bt(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},hn=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Ce(Uint8Array)),mn=(e,t)=>{const s=(e&&e[Pe]).call(e);let r;for(;(r=s.next())&&!r.done;){const o=r.value;t.call(e,o[0],o[1])}},gn=(e,t)=>{let n;const s=[];for(;(n=e.exec(t))!==null;)s.push(n);return s},yn=D("HTMLFormElement"),bn=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,s,r){return s.toUpperCase()+r}),Me=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),wn=D("RegExp"),St=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),s={};le(n,(r,o)=>{let i;(i=t(r,o,e))!==!1&&(s[o]=i||r)}),Object.defineProperties(e,s)},vn=e=>{St(e,(t,n)=>{if(T(e)&&["arguments","caller","callee"].includes(n))return!1;const s=e[n];if(T(s)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Sn=(e,t)=>{const n={},s=r=>{r.forEach(o=>{n[o]=!0})};return Z(e)?s(e):s(String(e).split(t)),n},En=()=>{},Rn=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function Cn(e){return!!(e&&T(e.append)&&e[gt]==="FormData"&&e[Pe])}const Pn=e=>{const t=new WeakSet,n=s=>{if(ae(s)){if(t.has(s))return;if(ie(s))return s;if(!("toJSON"in s)){t.add(s);const r=Z(s)?[]:{};return le(s,(o,i)=>{const a=n(o);!Y(a)&&(r[i]=a)}),t.delete(s),r}}return s};return n(e)},xn=D("AsyncFunction"),An=e=>e&&(ae(e)||T(e))&&T(e.then)&&T(e.catch),Et=((e,t)=>e?setImmediate:t?((n,s)=>(K.addEventListener("message",({source:r,data:o})=>{r===K&&o===n&&s.length&&s.shift()()},!1),r=>{s.push(r),K.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",T(K.postMessage)),On=typeof queueMicrotask<"u"?queueMicrotask.bind(K):typeof process<"u"&&process.nextTick||Et,Tn=e=>e!=null&&T(e[Pe]),l={isArray:Z,isArrayBuffer:yt,isBuffer:ie,isFormData:en,isArrayBufferView:jt,isString:Ht,isNumber:bt,isBoolean:zt,isObject:ae,isPlainObject:ge,isEmptyObject:Vt,isReadableStream:nn,isRequest:sn,isResponse:rn,isHeaders:on,isUndefined:Y,isDate:Kt,isFile:Jt,isReactNativeBlob:Wt,isReactNative:Gt,isBlob:Xt,isRegExp:wn,isFunction:T,isStream:Yt,isURLSearchParams:tn,isTypedArray:hn,isFileList:Qt,forEach:le,merge:Fe,extend:ln,trim:an,stripBOM:cn,inherits:dn,toFlatObject:un,kindOf:xe,kindOfTest:D,endsWith:fn,toArray:pn,forEachEntry:mn,matchAll:gn,isHTMLForm:yn,hasOwnProperty:Me,hasOwnProp:Me,reduceDescriptors:St,freezeMethods:vn,toObjectSet:Sn,toCamelCase:bn,noop:En,toFiniteNumber:Rn,findKey:wt,global:K,isContextDefined:vt,isSpecCompliantForm:Cn,toJSONObject:Pn,isAsyncFn:xn,isThenable:An,setImmediate:Et,asap:On,isIterable:Tn},kn=l.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),_n=e=>{const t={};let n,s,r;return e&&e.split(`
`).forEach(function(i){r=i.indexOf(":"),n=i.substring(0,r).trim().toLowerCase(),s=i.substring(r+1).trim(),!(!n||t[n]&&kn[n])&&(n==="set-cookie"?t[n]?t[n].push(s):t[n]=[s]:t[n]=t[n]?t[n]+", "+s:s)}),t};function Ln(e){let t=0,n=e.length;for(;t<n;){const s=e.charCodeAt(t);if(s!==9&&s!==32)break;t+=1}for(;n>t;){const s=e.charCodeAt(n-1);if(s!==9&&s!==32)break;n-=1}return t===0&&n===e.length?e:e.slice(t,n)}const Dn=new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+","g"),Nn=new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+","g");function He(e,t){return l.isArray(e)?e.map(n=>He(n,t)):Ln(String(e).replace(t,""))}const Bn=e=>He(e,Dn),qn=e=>He(e,Nn);function Rt(e){const t=Object.create(null);return l.forEach(e.toJSON(),(n,s)=>{t[s]=qn(n)}),t}const nt=Symbol("internals");function re(e){return e&&String(e).trim().toLowerCase()}function ye(e){return e===!1||e==null?e:l.isArray(e)?e.map(ye):Bn(String(e))}function Un(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let s;for(;s=n.exec(e);)t[s[1]]=s[2];return t}const Fn=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function De(e,t,n,s,r){if(l.isFunction(s))return s.call(this,t,n);if(r&&(t=n),!!l.isString(t)){if(l.isString(s))return t.indexOf(s)!==-1;if(l.isRegExp(s))return s.test(t)}}function Mn(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,s)=>n.toUpperCase()+s)}function $n(e,t){const n=l.toCamelCase(" "+t);["get","set","has"].forEach(s=>{Object.defineProperty(e,s+n,{__proto__:null,value:function(r,o,i){return this[s].call(this,t,r,o,i)},configurable:!0})})}let O=class{constructor(t){t&&this.set(t)}set(t,n,s){const r=this;function o(a,c,d){const u=re(c);if(!u)throw new Error("header name must be a non-empty string");const p=l.findKey(r,u);(!p||r[p]===void 0||d===!0||d===void 0&&r[p]!==!1)&&(r[p||c]=ye(a))}const i=(a,c)=>l.forEach(a,(d,u)=>o(d,u,c));if(l.isPlainObject(t)||t instanceof this.constructor)i(t,n);else if(l.isString(t)&&(t=t.trim())&&!Fn(t))i(_n(t),n);else if(l.isObject(t)&&l.isIterable(t)){let a={},c,d;for(const u of t){if(!l.isArray(u))throw TypeError("Object iterator must return a key-value pair");a[d=u[0]]=(c=a[d])?l.isArray(c)?[...c,u[1]]:[c,u[1]]:u[1]}i(a,n)}else t!=null&&o(n,t,s);return this}get(t,n){if(t=re(t),t){const s=l.findKey(this,t);if(s){const r=this[s];if(!n)return r;if(n===!0)return Un(r);if(l.isFunction(n))return n.call(this,r,s);if(l.isRegExp(n))return n.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=re(t),t){const s=l.findKey(this,t);return!!(s&&this[s]!==void 0&&(!n||De(this,this[s],s,n)))}return!1}delete(t,n){const s=this;let r=!1;function o(i){if(i=re(i),i){const a=l.findKey(s,i);a&&(!n||De(s,s[a],a,n))&&(delete s[a],r=!0)}}return l.isArray(t)?t.forEach(o):o(t),r}clear(t){const n=Object.keys(this);let s=n.length,r=!1;for(;s--;){const o=n[s];(!t||De(this,this[o],o,t,!0))&&(delete this[o],r=!0)}return r}normalize(t){const n=this,s={};return l.forEach(this,(r,o)=>{const i=l.findKey(s,o);if(i){n[i]=ye(r),delete n[o];return}const a=t?Mn(o):String(o).trim();a!==o&&delete n[o],n[a]=ye(r),s[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return l.forEach(this,(s,r)=>{s!=null&&s!==!1&&(n[r]=t&&l.isArray(s)?s.join(", "):s)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const s=new this(t);return n.forEach(r=>s.set(r)),s}static accessor(t){const s=(this[nt]=this[nt]={accessors:{}}).accessors,r=this.prototype;function o(i){const a=re(i);s[a]||($n(r,i),s[a]=!0)}return l.isArray(t)?t.forEach(o):o(t),this}};O.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);l.reduceDescriptors(O.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(s){this[n]=s}}});l.freezeMethods(O);const In="[REDACTED ****]";function jn(e){if(l.hasOwnProp(e,"toJSON"))return!0;let t=Object.getPrototypeOf(e);for(;t&&t!==Object.prototype;){if(l.hasOwnProp(t,"toJSON"))return!0;t=Object.getPrototypeOf(t)}return!1}function Hn(e,t){const n=new Set(t.map(o=>String(o).toLowerCase())),s=[],r=o=>{if(o===null||typeof o!="object"||l.isBuffer(o))return o;if(s.indexOf(o)!==-1)return;o instanceof O&&(o=o.toJSON()),s.push(o);let i;if(l.isArray(o))i=[],o.forEach((a,c)=>{const d=r(a);l.isUndefined(d)||(i[c]=d)});else{if(!l.isPlainObject(o)&&jn(o))return s.pop(),o;i=Object.create(null);for(const[a,c]of Object.entries(o)){const d=n.has(a.toLowerCase())?In:r(c);l.isUndefined(d)||(i[a]=d)}}return s.pop(),i};return r(e)}let m=class Ct extends Error{static from(t,n,s,r,o,i){const a=new Ct(t.message,n||t.code,s,r,o);return a.cause=t,a.name=t.name,t.status!=null&&a.status==null&&(a.status=t.status),i&&Object.assign(a,i),a}constructor(t,n,s,r,o){super(t),Object.defineProperty(this,"message",{__proto__:null,value:t,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,n&&(this.code=n),s&&(this.config=s),r&&(this.request=r),o&&(this.response=o,this.status=o.status)}toJSON(){const t=this.config,n=t&&l.hasOwnProp(t,"redact")?t.redact:void 0,s=l.isArray(n)&&n.length>0?Hn(t,n):l.toJSONObject(t);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:s,code:this.code,status:this.status}}};m.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";m.ERR_BAD_OPTION="ERR_BAD_OPTION";m.ECONNABORTED="ECONNABORTED";m.ETIMEDOUT="ETIMEDOUT";m.ECONNREFUSED="ECONNREFUSED";m.ERR_NETWORK="ERR_NETWORK";m.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";m.ERR_DEPRECATED="ERR_DEPRECATED";m.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";m.ERR_BAD_REQUEST="ERR_BAD_REQUEST";m.ERR_CANCELED="ERR_CANCELED";m.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";m.ERR_INVALID_URL="ERR_INVALID_URL";m.ERR_FORM_DATA_DEPTH_EXCEEDED="ERR_FORM_DATA_DEPTH_EXCEEDED";const zn=null;function $e(e){return l.isPlainObject(e)||l.isArray(e)}function Pt(e){return l.endsWith(e,"[]")?e.slice(0,-2):e}function Ne(e,t,n){return e?e.concat(t).map(function(r,o){return r=Pt(r),!n&&o?"["+r+"]":r}).join(n?".":""):t}function Vn(e){return l.isArray(e)&&!e.some($e)}const Kn=l.toFlatObject(l,{},null,function(t){return/^is[A-Z]/.test(t)});function Oe(e,t,n){if(!l.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=l.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(f,g){return!l.isUndefined(g[f])});const s=n.metaTokens,r=n.visitor||p,o=n.dots,i=n.indexes,a=n.Blob||typeof Blob<"u"&&Blob,c=n.maxDepth===void 0?100:n.maxDepth,d=a&&l.isSpecCompliantForm(t);if(!l.isFunction(r))throw new TypeError("visitor must be a function");function u(h){if(h===null)return"";if(l.isDate(h))return h.toISOString();if(l.isBoolean(h))return h.toString();if(!d&&l.isBlob(h))throw new m("Blob is not supported. Use a Buffer instead.");return l.isArrayBuffer(h)||l.isTypedArray(h)?d&&typeof Blob=="function"?new Blob([h]):Buffer.from(h):h}function p(h,f,g){let R=h;if(l.isReactNative(t)&&l.isReactNativeBlob(h))return t.append(Ne(g,f,o),u(h)),!1;if(h&&!g&&typeof h=="object"){if(l.endsWith(f,"{}"))f=s?f:f.slice(0,-2),h=JSON.stringify(h);else if(l.isArray(h)&&Vn(h)||(l.isFileList(h)||l.endsWith(f,"[]"))&&(R=l.toArray(h)))return f=Pt(f),R.forEach(function(S,k){!(l.isUndefined(S)||S===null)&&t.append(i===!0?Ne([f],k,o):i===null?f:f+"[]",u(S))}),!1}return $e(h)?!0:(t.append(Ne(g,f,o),u(h)),!1)}const y=[],b=Object.assign(Kn,{defaultVisitor:p,convertValue:u,isVisitable:$e});function w(h,f,g=0){if(!l.isUndefined(h)){if(g>c)throw new m("Object is too deeply nested ("+g+" levels). Max depth: "+c,m.ERR_FORM_DATA_DEPTH_EXCEEDED);if(y.indexOf(h)!==-1)throw Error("Circular reference detected in "+f.join("."));y.push(h),l.forEach(h,function(v,S){(!(l.isUndefined(v)||v===null)&&r.call(t,v,l.isString(S)?S.trim():S,f,b))===!0&&w(v,f?f.concat(S):[S],g+1)}),y.pop()}}if(!l.isObject(e))throw new TypeError("data must be an object");return w(e),t}function st(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"};return encodeURIComponent(e).replace(/[!'()~]|%20/g,function(s){return t[s]})}function ze(e,t){this._pairs=[],e&&Oe(e,this,t)}const xt=ze.prototype;xt.append=function(t,n){this._pairs.push([t,n])};xt.toString=function(t){const n=t?function(s){return t.call(this,s,st)}:st;return this._pairs.map(function(r){return n(r[0])+"="+n(r[1])},"").join("&")};function Jn(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function At(e,t,n){if(!t)return e;const s=n&&n.encode||Jn,r=l.isFunction(n)?{serialize:n}:n,o=r&&r.serialize;let i;if(o?i=o(t,r):i=l.isURLSearchParams(t)?t.toString():new ze(t,r).toString(s),i){const a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class rt{constructor(){this.handlers=[]}use(t,n,s){return this.handlers.push({fulfilled:t,rejected:n,synchronous:s?s.synchronous:!1,runWhen:s?s.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){l.forEach(this.handlers,function(s){s!==null&&t(s)})}}const Ve={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0},Wn=typeof URLSearchParams<"u"?URLSearchParams:ze,Gn=typeof FormData<"u"?FormData:null,Xn=typeof Blob<"u"?Blob:null,Qn={isBrowser:!0,classes:{URLSearchParams:Wn,FormData:Gn,Blob:Xn},protocols:["http","https","file","blob","url","data"]},Ke=typeof window<"u"&&typeof document<"u",Ie=typeof navigator=="object"&&navigator||void 0,Yn=Ke&&(!Ie||["ReactNative","NativeScript","NS"].indexOf(Ie.product)<0),Zn=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",es=Ke&&window.location.href||"http://localhost",ts=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Ke,hasStandardBrowserEnv:Yn,hasStandardBrowserWebWorkerEnv:Zn,navigator:Ie,origin:es},Symbol.toStringTag,{value:"Module"})),A={...ts,...Qn};function ns(e,t){return Oe(e,new A.classes.URLSearchParams,{visitor:function(n,s,r,o){return A.isNode&&l.isBuffer(n)?(this.append(s,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)},...t})}function ss(e){return l.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function rs(e){const t={},n=Object.keys(e);let s;const r=n.length;let o;for(s=0;s<r;s++)o=n[s],t[o]=e[o];return t}function Ot(e){function t(n,s,r,o){let i=n[o++];if(i==="__proto__")return!0;const a=Number.isFinite(+i),c=o>=n.length;return i=!i&&l.isArray(r)?r.length:i,c?(l.hasOwnProp(r,i)?r[i]=l.isArray(r[i])?r[i].concat(s):[r[i],s]:r[i]=s,!a):((!l.hasOwnProp(r,i)||!l.isObject(r[i]))&&(r[i]=[]),t(n,s,r[i],o)&&l.isArray(r[i])&&(r[i]=rs(r[i])),!a)}if(l.isFormData(e)&&l.isFunction(e.entries)){const n={};return l.forEachEntry(e,(s,r)=>{t(ss(s),r,n,0)}),n}return null}const Q=(e,t)=>e!=null&&l.hasOwnProp(e,t)?e[t]:void 0;function os(e,t,n){if(l.isString(e))try{return(t||JSON.parse)(e),l.trim(e)}catch(s){if(s.name!=="SyntaxError")throw s}return(n||JSON.stringify)(e)}const ce={transitional:Ve,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const s=n.getContentType()||"",r=s.indexOf("application/json")>-1,o=l.isObject(t);if(o&&l.isHTMLForm(t)&&(t=new FormData(t)),l.isFormData(t))return r?JSON.stringify(Ot(t)):t;if(l.isArrayBuffer(t)||l.isBuffer(t)||l.isStream(t)||l.isFile(t)||l.isBlob(t)||l.isReadableStream(t))return t;if(l.isArrayBufferView(t))return t.buffer;if(l.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(o){const c=Q(this,"formSerializer");if(s.indexOf("application/x-www-form-urlencoded")>-1)return ns(t,c).toString();if((a=l.isFileList(t))||s.indexOf("multipart/form-data")>-1){const d=Q(this,"env"),u=d&&d.FormData;return Oe(a?{"files[]":t}:t,u&&new u,c)}}return o||r?(n.setContentType("application/json",!1),os(t)):t}],transformResponse:[function(t){const n=Q(this,"transitional")||ce.transitional,s=n&&n.forcedJSONParsing,r=Q(this,"responseType"),o=r==="json";if(l.isResponse(t)||l.isReadableStream(t))return t;if(t&&l.isString(t)&&(s&&!r||o)){const a=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t,Q(this,"parseReviver"))}catch(c){if(a)throw c.name==="SyntaxError"?m.from(c,m.ERR_BAD_RESPONSE,this,null,Q(this,"response")):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:A.classes.FormData,Blob:A.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};l.forEach(["delete","get","head","post","put","patch","query"],e=>{ce.headers[e]={}});function Be(e,t){const n=this||ce,s=t||n,r=O.from(s.headers);let o=s.data;return l.forEach(e,function(a){o=a.call(n,o,r.normalize(),t?t.status:void 0)}),r.normalize(),o}function Tt(e){return!!(e&&e.__CANCEL__)}let de=class extends m{constructor(t,n,s){super(t??"canceled",m.ERR_CANCELED,n,s),this.name="CanceledError",this.__CANCEL__=!0}};function kt(e,t,n){const s=n.config.validateStatus;!n.status||!s||s(n.status)?e(n):t(new m("Request failed with status code "+n.status,n.status>=400&&n.status<500?m.ERR_BAD_REQUEST:m.ERR_BAD_RESPONSE,n.config,n.request,n))}function is(e){const t=/^([-+\w]{1,25}):(?:\/\/)?/.exec(e);return t&&t[1]||""}function as(e,t){e=e||10;const n=new Array(e),s=new Array(e);let r=0,o=0,i;return t=t!==void 0?t:1e3,function(c){const d=Date.now(),u=s[o];i||(i=d),n[r]=c,s[r]=d;let p=o,y=0;for(;p!==r;)y+=n[p++],p=p%e;if(r=(r+1)%e,r===o&&(o=(o+1)%e),d-i<t)return;const b=u&&d-u;return b?Math.round(y*1e3/b):void 0}}function ls(e,t){let n=0,s=1e3/t,r,o;const i=(d,u=Date.now())=>{n=u,r=null,o&&(clearTimeout(o),o=null),e(...d)};return[(...d)=>{const u=Date.now(),p=u-n;p>=s?i(d,u):(r=d,o||(o=setTimeout(()=>{o=null,i(r)},s-p)))},()=>r&&i(r)]}const we=(e,t,n=3)=>{let s=0;const r=as(50,250);return ls(o=>{if(!o||typeof o.loaded!="number")return;const i=o.loaded,a=o.lengthComputable?o.total:void 0,c=a!=null?Math.min(i,a):i,d=Math.max(0,c-s),u=r(d);s=Math.max(s,c);const p={loaded:c,total:a,progress:a?c/a:void 0,bytes:d,rate:u||void 0,estimated:u&&a?(a-c)/u:void 0,event:o,lengthComputable:a!=null,[t?"download":"upload"]:!0};e(p)},n)},ot=(e,t)=>{const n=e!=null;return[s=>t[0]({lengthComputable:n,total:e,loaded:s}),t[1]]},it=e=>(...t)=>l.asap(()=>e(...t)),cs=A.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,A.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(A.origin),A.navigator&&/(msie|trident)/i.test(A.navigator.userAgent)):()=>!0,ds=A.hasStandardBrowserEnv?{write(e,t,n,s,r,o,i){if(typeof document>"u")return;const a=[`${e}=${encodeURIComponent(t)}`];l.isNumber(n)&&a.push(`expires=${new Date(n).toUTCString()}`),l.isString(s)&&a.push(`path=${s}`),l.isString(r)&&a.push(`domain=${r}`),o===!0&&a.push("secure"),l.isString(i)&&a.push(`SameSite=${i}`),document.cookie=a.join("; ")},read(e){if(typeof document>"u")return null;const t=document.cookie.split(";");for(let n=0;n<t.length;n++){const s=t[n].replace(/^\s+/,""),r=s.indexOf("=");if(r!==-1&&s.slice(0,r)===e)return decodeURIComponent(s.slice(r+1))}return null},remove(e){this.write(e,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function us(e){return typeof e!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function fs(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function _t(e,t,n){let s=!us(t);return e&&(s||n===!1)?fs(e,t):t}const at=e=>e instanceof O?{...e}:e;function W(e,t){t=t||{};const n=Object.create(null);Object.defineProperty(n,"hasOwnProperty",{__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function s(d,u,p,y){return l.isPlainObject(d)&&l.isPlainObject(u)?l.merge.call({caseless:y},d,u):l.isPlainObject(u)?l.merge({},u):l.isArray(u)?u.slice():u}function r(d,u,p,y){if(l.isUndefined(u)){if(!l.isUndefined(d))return s(void 0,d,p,y)}else return s(d,u,p,y)}function o(d,u){if(!l.isUndefined(u))return s(void 0,u)}function i(d,u){if(l.isUndefined(u)){if(!l.isUndefined(d))return s(void 0,d)}else return s(void 0,u)}function a(d,u,p){if(l.hasOwnProp(t,p))return s(d,u);if(l.hasOwnProp(e,p))return s(void 0,d)}const c={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,allowedSocketPaths:i,responseEncoding:i,validateStatus:a,headers:(d,u,p)=>r(at(d),at(u),p,!0)};return l.forEach(Object.keys({...e,...t}),function(u){if(u==="__proto__"||u==="constructor"||u==="prototype")return;const p=l.hasOwnProp(c,u)?c[u]:r,y=l.hasOwnProp(e,u)?e[u]:void 0,b=l.hasOwnProp(t,u)?t[u]:void 0,w=p(y,b,u);l.isUndefined(w)&&p!==a||(n[u]=w)}),n}const ps=["content-type","content-length"];function hs(e,t,n){if(n!=="content-only"){e.set(t);return}Object.entries(t).forEach(([s,r])=>{ps.includes(s.toLowerCase())&&e.set(s,r)})}const ms=e=>encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi,(t,n)=>String.fromCharCode(parseInt(n,16))),Lt=e=>{const t=W({},e),n=y=>l.hasOwnProp(t,y)?t[y]:void 0,s=n("data");let r=n("withXSRFToken");const o=n("xsrfHeaderName"),i=n("xsrfCookieName");let a=n("headers");const c=n("auth"),d=n("baseURL"),u=n("allowAbsoluteUrls"),p=n("url");if(t.headers=a=O.from(a),t.url=At(_t(d,p,u),e.params,e.paramsSerializer),c&&a.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?ms(c.password):""))),l.isFormData(s)&&(A.hasStandardBrowserEnv||A.hasStandardBrowserWebWorkerEnv?a.setContentType(void 0):l.isFunction(s.getHeaders)&&hs(a,s.getHeaders(),n("formDataHeaderPolicy"))),A.hasStandardBrowserEnv&&(l.isFunction(r)&&(r=r(t)),r===!0||r==null&&cs(t.url))){const b=o&&i&&ds.read(i);b&&a.set(o,b)}return t},gs=typeof XMLHttpRequest<"u",ys=gs&&function(e){return new Promise(function(n,s){const r=Lt(e);let o=r.data;const i=O.from(r.headers).normalize();let{responseType:a,onUploadProgress:c,onDownloadProgress:d}=r,u,p,y,b,w;function h(){b&&b(),w&&w(),r.cancelToken&&r.cancelToken.unsubscribe(u),r.signal&&r.signal.removeEventListener("abort",u)}let f=new XMLHttpRequest;f.open(r.method.toUpperCase(),r.url,!0),f.timeout=r.timeout;function g(){if(!f)return;const v=O.from("getAllResponseHeaders"in f&&f.getAllResponseHeaders()),k={data:!a||a==="text"||a==="json"?f.responseText:f.response,status:f.status,statusText:f.statusText,headers:v,config:e,request:f};kt(function(te){n(te),h()},function(te){s(te),h()},k),f=null}"onloadend"in f?f.onloadend=g:f.onreadystatechange=function(){!f||f.readyState!==4||f.status===0&&!(f.responseURL&&f.responseURL.startsWith("file:"))||setTimeout(g)},f.onabort=function(){f&&(s(new m("Request aborted",m.ECONNABORTED,e,f)),h(),f=null)},f.onerror=function(S){const k=S&&S.message?S.message:"Network Error",j=new m(k,m.ERR_NETWORK,e,f);j.event=S||null,s(j),h(),f=null},f.ontimeout=function(){let S=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const k=r.transitional||Ve;r.timeoutErrorMessage&&(S=r.timeoutErrorMessage),s(new m(S,k.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,f)),h(),f=null},o===void 0&&i.setContentType(null),"setRequestHeader"in f&&l.forEach(Rt(i),function(S,k){f.setRequestHeader(k,S)}),l.isUndefined(r.withCredentials)||(f.withCredentials=!!r.withCredentials),a&&a!=="json"&&(f.responseType=r.responseType),d&&([y,w]=we(d,!0),f.addEventListener("progress",y)),c&&f.upload&&([p,b]=we(c),f.upload.addEventListener("progress",p),f.upload.addEventListener("loadend",b)),(r.cancelToken||r.signal)&&(u=v=>{f&&(s(!v||v.type?new de(null,e,f):v),f.abort(),h(),f=null)},r.cancelToken&&r.cancelToken.subscribe(u),r.signal&&(r.signal.aborted?u():r.signal.addEventListener("abort",u)));const R=is(r.url);if(R&&!A.protocols.includes(R)){s(new m("Unsupported protocol "+R+":",m.ERR_BAD_REQUEST,e));return}f.send(o||null)})},bs=(e,t)=>{if(e=e?e.filter(Boolean):[],!t&&!e.length)return;const n=new AbortController;let s=!1;const r=function(c){if(!s){s=!0,i();const d=c instanceof Error?c:this.reason;n.abort(d instanceof m?d:new de(d instanceof Error?d.message:d))}};let o=t&&setTimeout(()=>{o=null,r(new m(`timeout of ${t}ms exceeded`,m.ETIMEDOUT))},t);const i=()=>{e&&(o&&clearTimeout(o),o=null,e.forEach(c=>{c.unsubscribe?c.unsubscribe(r):c.removeEventListener("abort",r)}),e=null)};e.forEach(c=>c.addEventListener("abort",r));const{signal:a}=n;return a.unsubscribe=()=>l.asap(i),a},ws=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let s=0,r;for(;s<n;)r=s+t,yield e.slice(s,r),s=r},vs=async function*(e,t){for await(const n of Ss(e))yield*ws(n,t)},Ss=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:s}=await t.read();if(n)break;yield s}}finally{await t.cancel()}},lt=(e,t,n,s)=>{const r=vs(e,t);let o=0,i,a=c=>{i||(i=!0,s&&s(c))};return new ReadableStream({async pull(c){try{const{done:d,value:u}=await r.next();if(d){a(),c.close();return}let p=u.byteLength;if(n){let y=o+=p;n(y)}c.enqueue(new Uint8Array(u))}catch(d){throw a(d),d}},cancel(c){return a(c),r.return()}},{highWaterMark:2})};function Es(e){if(!e||typeof e!="string"||!e.startsWith("data:"))return 0;const t=e.indexOf(",");if(t<0)return 0;const n=e.slice(5,t),s=e.slice(t+1);if(/;base64/i.test(n)){let i=s.length;const a=s.length;for(let b=0;b<a;b++)if(s.charCodeAt(b)===37&&b+2<a){const w=s.charCodeAt(b+1),h=s.charCodeAt(b+2);(w>=48&&w<=57||w>=65&&w<=70||w>=97&&w<=102)&&(h>=48&&h<=57||h>=65&&h<=70||h>=97&&h<=102)&&(i-=2,b+=2)}let c=0,d=a-1;const u=b=>b>=2&&s.charCodeAt(b-2)===37&&s.charCodeAt(b-1)===51&&(s.charCodeAt(b)===68||s.charCodeAt(b)===100);d>=0&&(s.charCodeAt(d)===61?(c++,d--):u(d)&&(c++,d-=3)),c===1&&d>=0&&(s.charCodeAt(d)===61||u(d))&&c++;const y=Math.floor(i/4)*3-(c||0);return y>0?y:0}if(typeof Buffer<"u"&&typeof Buffer.byteLength=="function")return Buffer.byteLength(s,"utf8");let o=0;for(let i=0,a=s.length;i<a;i++){const c=s.charCodeAt(i);if(c<128)o+=1;else if(c<2048)o+=2;else if(c>=55296&&c<=56319&&i+1<a){const d=s.charCodeAt(i+1);d>=56320&&d<=57343?(o+=4,i++):o+=3}else o+=3}return o}const Je="1.16.1",ct=64*1024,{isFunction:he}=l,dt=(e,...t)=>{try{return!!e(...t)}catch{return!1}},Rs=e=>{const t=l.global!==void 0&&l.global!==null?l.global:globalThis,{ReadableStream:n,TextEncoder:s}=t;e=l.merge.call({skipUndefined:!0},{Request:t.Request,Response:t.Response},e);const{fetch:r,Request:o,Response:i}=e,a=r?he(r):typeof fetch=="function",c=he(o),d=he(i);if(!a)return!1;const u=a&&he(n),p=a&&(typeof s=="function"?(g=>R=>g.encode(R))(new s):async g=>new Uint8Array(await new o(g).arrayBuffer())),y=c&&u&&dt(()=>{let g=!1;const R=new o(A.origin,{body:new n,method:"POST",get duplex(){return g=!0,"half"}}),v=R.headers.has("Content-Type");return R.body!=null&&R.body.cancel(),g&&!v}),b=d&&u&&dt(()=>l.isReadableStream(new i("").body)),w={stream:b&&(g=>g.body)};a&&["text","arrayBuffer","blob","formData","stream"].forEach(g=>{!w[g]&&(w[g]=(R,v)=>{let S=R&&R[g];if(S)return S.call(R);throw new m(`Response type '${g}' is not supported`,m.ERR_NOT_SUPPORT,v)})});const h=async g=>{if(g==null)return 0;if(l.isBlob(g))return g.size;if(l.isSpecCompliantForm(g))return(await new o(A.origin,{method:"POST",body:g}).arrayBuffer()).byteLength;if(l.isArrayBufferView(g)||l.isArrayBuffer(g))return g.byteLength;if(l.isURLSearchParams(g)&&(g=g+""),l.isString(g))return(await p(g)).byteLength},f=async(g,R)=>{const v=l.toFiniteNumber(g.getContentLength());return v??h(R)};return async g=>{let{url:R,method:v,data:S,signal:k,cancelToken:j,timeout:te,onDownloadProgress:ke,onUploadProgress:Ge,responseType:F,headers:H,withCredentials:ue="same-origin",fetchOptions:Xe,maxContentLength:N,maxBodyLength:_e}=Lt(g);const ne=l.isNumber(N)&&N>-1,Ut=l.isNumber(_e)&&_e>-1;let Qe=r||fetch;F=F?(F+"").toLowerCase():"text";let M=bs([k,j&&j.toAbortSignal()],te),_=null;const z=M&&M.unsubscribe&&(()=>{M.unsubscribe()});let Ye;try{if(ne&&typeof R=="string"&&R.startsWith("data:")&&Es(R)>N)throw new m("maxContentLength size of "+N+" exceeded",m.ERR_BAD_RESPONSE,g,_);if(Ut&&v!=="get"&&v!=="head"){const C=await f(H,S);if(typeof C=="number"&&isFinite(C)&&C>_e)throw new m("Request body larger than maxBodyLength limit",m.ERR_BAD_REQUEST,g,_)}if(Ge&&y&&v!=="get"&&v!=="head"&&(Ye=await f(H,S))!==0){let C=new o(R,{method:"POST",body:S,duplex:"half"}),X;if(l.isFormData(S)&&(X=C.headers.get("content-type"))&&H.setContentType(X),C.body){const[fe,pe]=ot(Ye,we(it(Ge)));S=lt(C.body,ct,fe,pe)}}l.isString(ue)||(ue=ue?"include":"omit");const x=c&&"credentials"in o.prototype;if(l.isFormData(S)){const C=H.getContentType();C&&/^multipart\/form-data/i.test(C)&&!/boundary=/i.test(C)&&H.delete("content-type")}H.set("User-Agent","axios/"+Je,!1);const $={...Xe,signal:M,method:v.toUpperCase(),headers:Rt(H.normalize()),body:S,duplex:"half",credentials:x?ue:void 0};_=c&&new o(R,$);let B=await(c?Qe(_,Xe):Qe(R,$));if(ne){const C=l.toFiniteNumber(B.headers.get("content-length"));if(C!=null&&C>N)throw new m("maxContentLength size of "+N+" exceeded",m.ERR_BAD_RESPONSE,g,_)}const Le=b&&(F==="stream"||F==="response");if(b&&B.body&&(ke||ne||Le&&z)){const C={};["status","statusText","headers"].forEach(se=>{C[se]=B[se]});const X=l.toFiniteNumber(B.headers.get("content-length")),[fe,pe]=ke&&ot(X,we(it(ke),!0))||[];let Ze=0;const Ft=se=>{if(ne&&(Ze=se,Ze>N))throw new m("maxContentLength size of "+N+" exceeded",m.ERR_BAD_RESPONSE,g,_);fe&&fe(se)};B=new i(lt(B.body,ct,Ft,()=>{pe&&pe(),z&&z()}),C)}F=F||"text";let q=await w[l.findKey(w,F)||"text"](B,g);if(ne&&!b&&!Le){let C;if(q!=null&&(typeof q.byteLength=="number"?C=q.byteLength:typeof q.size=="number"?C=q.size:typeof q=="string"&&(C=typeof s=="function"?new s().encode(q).byteLength:q.length)),typeof C=="number"&&C>N)throw new m("maxContentLength size of "+N+" exceeded",m.ERR_BAD_RESPONSE,g,_)}return!Le&&z&&z(),await new Promise((C,X)=>{kt(C,X,{data:q,headers:O.from(B.headers),status:B.status,statusText:B.statusText,config:g,request:_})})}catch(x){if(z&&z(),M&&M.aborted&&M.reason instanceof m){const $=M.reason;throw $.config=g,_&&($.request=_),x!==$&&($.cause=x),$}throw x&&x.name==="TypeError"&&/Load failed|fetch/i.test(x.message)?Object.assign(new m("Network Error",m.ERR_NETWORK,g,_,x&&x.response),{cause:x.cause||x}):m.from(x,x&&x.code,g,_,x&&x.response)}}},Cs=new Map,Dt=e=>{let t=e&&e.env||{};const{fetch:n,Request:s,Response:r}=t,o=[s,r,n];let i=o.length,a=i,c,d,u=Cs;for(;a--;)c=o[a],d=u.get(c),d===void 0&&u.set(c,d=a?new Map:Rs(t)),u=d;return d};Dt();const We={http:zn,xhr:ys,fetch:{get:Dt}};l.forEach(We,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{__proto__:null,value:t})}catch{}Object.defineProperty(e,"adapterName",{__proto__:null,value:t})}});const ut=e=>`- ${e}`,Ps=e=>l.isFunction(e)||e===null||e===!1;function xs(e,t){e=l.isArray(e)?e:[e];const{length:n}=e;let s,r;const o={};for(let i=0;i<n;i++){s=e[i];let a;if(r=s,!Ps(s)&&(r=We[(a=String(s)).toLowerCase()],r===void 0))throw new m(`Unknown adapter '${a}'`);if(r&&(l.isFunction(r)||(r=r.get(t))))break;o[a||"#"+i]=r}if(!r){const i=Object.entries(o).map(([c,d])=>`adapter ${c} `+(d===!1?"is not supported by the environment":"is not available in the build"));let a=n?i.length>1?`since :
`+i.map(ut).join(`
`):" "+ut(i[0]):"as no adapter specified";throw new m("There is no suitable adapter to dispatch the request "+a,"ERR_NOT_SUPPORT")}return r}const Nt={getAdapter:xs,adapters:We};function qe(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new de(null,e)}function ft(e){return qe(e),e.headers=O.from(e.headers),e.data=Be.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Nt.getAdapter(e.adapter||ce.adapter,e)(e).then(function(s){qe(e),e.response=s;try{s.data=Be.call(e,e.transformResponse,s)}finally{delete e.response}return s.headers=O.from(s.headers),s},function(s){if(!Tt(s)&&(qe(e),s&&s.response)){e.response=s.response;try{s.response.data=Be.call(e,e.transformResponse,s.response)}finally{delete e.response}s.response.headers=O.from(s.response.headers)}return Promise.reject(s)})}const Te={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Te[e]=function(s){return typeof s===e||"a"+(t<1?"n ":" ")+e}});const pt={};Te.transitional=function(t,n,s){function r(o,i){return"[Axios v"+Je+"] Transitional option '"+o+"'"+i+(s?". "+s:"")}return(o,i,a)=>{if(t===!1)throw new m(r(i," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!pt[i]&&(pt[i]=!0,console.warn(r(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,a):!0}};Te.spelling=function(t){return(n,s)=>(console.warn(`${s} is likely a misspelling of ${t}`),!0)};function As(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const s=Object.keys(e);let r=s.length;for(;r-- >0;){const o=s[r],i=Object.prototype.hasOwnProperty.call(t,o)?t[o]:void 0;if(i){const a=e[o],c=a===void 0||i(a,o,e);if(c!==!0)throw new m("option "+o+" must be "+c,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+o,m.ERR_BAD_OPTION)}}const be={assertOptions:As,validators:Te},L=be.validators;let J=class{constructor(t){this.defaults=t||{},this.interceptors={request:new rt,response:new rt}}async request(t,n){try{return await this._request(t,n)}catch(s){if(s instanceof Error){let r={};Error.captureStackTrace?Error.captureStackTrace(r):r=new Error;const o=(()=>{if(!r.stack)return"";const i=r.stack.indexOf(`
`);return i===-1?"":r.stack.slice(i+1)})();try{if(!s.stack)s.stack=o;else if(o){const i=o.indexOf(`
`),a=i===-1?-1:o.indexOf(`
`,i+1),c=a===-1?"":o.slice(a+1);String(s.stack).endsWith(c)||(s.stack+=`
`+o)}}catch{}}throw s}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=W(this.defaults,n);const{transitional:s,paramsSerializer:r,headers:o}=n;s!==void 0&&be.assertOptions(s,{silentJSONParsing:L.transitional(L.boolean),forcedJSONParsing:L.transitional(L.boolean),clarifyTimeoutError:L.transitional(L.boolean),legacyInterceptorReqResOrdering:L.transitional(L.boolean)},!1),r!=null&&(l.isFunction(r)?n.paramsSerializer={serialize:r}:be.assertOptions(r,{encode:L.function,serialize:L.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),be.assertOptions(n,{baseUrl:L.spelling("baseURL"),withXsrfToken:L.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=o&&l.merge(o.common,o[n.method]);o&&l.forEach(["delete","get","head","post","put","patch","query","common"],w=>{delete o[w]}),n.headers=O.concat(i,o);const a=[];let c=!0;this.interceptors.request.forEach(function(h){if(typeof h.runWhen=="function"&&h.runWhen(n)===!1)return;c=c&&h.synchronous;const f=n.transitional||Ve;f&&f.legacyInterceptorReqResOrdering?a.unshift(h.fulfilled,h.rejected):a.push(h.fulfilled,h.rejected)});const d=[];this.interceptors.response.forEach(function(h){d.push(h.fulfilled,h.rejected)});let u,p=0,y;if(!c){const w=[ft.bind(this),void 0];for(w.unshift(...a),w.push(...d),y=w.length,u=Promise.resolve(n);p<y;)u=u.then(w[p++],w[p++]);return u}y=a.length;let b=n;for(;p<y;){const w=a[p++],h=a[p++];try{b=w(b)}catch(f){h.call(this,f);break}}try{u=ft.call(this,b)}catch(w){return Promise.reject(w)}for(p=0,y=d.length;p<y;)u=u.then(d[p++],d[p++]);return u}getUri(t){t=W(this.defaults,t);const n=_t(t.baseURL,t.url,t.allowAbsoluteUrls);return At(n,t.params,t.paramsSerializer)}};l.forEach(["delete","get","head","options"],function(t){J.prototype[t]=function(n,s){return this.request(W(s||{},{method:t,url:n,data:(s||{}).data}))}});l.forEach(["post","put","patch","query"],function(t){function n(s){return function(o,i,a){return this.request(W(a||{},{method:t,headers:s?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}J.prototype[t]=n(),t!=="query"&&(J.prototype[t+"Form"]=n(!0))});let Os=class Bt{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const s=this;this.promise.then(r=>{if(!s._listeners)return;let o=s._listeners.length;for(;o-- >0;)s._listeners[o](r);s._listeners=null}),this.promise.then=r=>{let o;const i=new Promise(a=>{s.subscribe(a),o=a}).then(r);return i.cancel=function(){s.unsubscribe(o)},i},t(function(o,i,a){s.reason||(s.reason=new de(o,i,a),n(s.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=s=>{t.abort(s)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new Bt(function(r){t=r}),cancel:t}}};function Ts(e){return function(n){return e.apply(null,n)}}function ks(e){return l.isObject(e)&&e.isAxiosError===!0}const je={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(je).forEach(([e,t])=>{je[t]=e});function qt(e){const t=new J(e),n=mt(J.prototype.request,t);return l.extend(n,J.prototype,t,{allOwnKeys:!0}),l.extend(n,t,null,{allOwnKeys:!0}),n.create=function(r){return qt(W(e,r))},n}const P=qt(ce);P.Axios=J;P.CanceledError=de;P.CancelToken=Os;P.isCancel=Tt;P.VERSION=Je;P.toFormData=Oe;P.AxiosError=m;P.Cancel=P.CanceledError;P.all=function(t){return Promise.all(t)};P.spread=Ts;P.isAxiosError=ks;P.mergeConfig=W;P.AxiosHeaders=O;P.formToJSON=e=>Ot(l.isHTMLForm(e)?new FormData(e):e);P.getAdapter=Nt.getAdapter;P.HttpStatusCode=je;P.default=P;const{Axios:Ws,AxiosError:Gs,CanceledError:Xs,isCancel:Qs,CancelToken:Ys,VERSION:Zs,all:er,Cancel:tr,isAxiosError:nr,spread:sr,toFormData:rr,AxiosHeaders:or,HttpStatusCode:ir,formToJSON:ar,getAdapter:lr,mergeConfig:cr,create:dr}=P;class ve extends Error{constructor(n,s,r,o){super(n);E(this,"status");E(this,"validationErrors");E(this,"originalError");this.name="ApiError",this.status=s,this.validationErrors=r,this.originalError=o,Object.setPrototypeOf(this,ve.prototype)}static fromAxiosError(n){var a,c;const s=((a=n.response)==null?void 0:a.status)||500,r=(c=n.response)==null?void 0:c.data;let o="An unexpected network error occurred.",i;return r?(o=r.message||o,i=r.errors):n.message&&(o=n.message),new ve(o,s,i,n)}}const _s="https://api.example.com/v1",Ls=1e4,ee=P.create({baseURL:_s,timeout:Ls,headers:{"Content-Type":"application/json",Accept:"application/json"}});ee.interceptors.request.use(e=>{const t=localStorage.getItem("aura_auth_token");return t&&e.headers&&(e.headers.Authorization=`Bearer ${JSON.parse(t)}`),e},e=>Promise.reject(e));ee.interceptors.response.use(e=>e,e=>{var t;return((t=e.response)==null?void 0:t.status)===401&&(localStorage.removeItem("aura_auth_token"),localStorage.removeItem("aura_user"),window.dispatchEvent(new Event("auth:logout"))),Promise.reject(ve.fromAxiosError(e))});const Ds={id:"usr_1",email:"admin@marufa.io",username:"admin_aura",role:"admin",createdAt:new Date().toISOString()};async function Ns(e,t){if("https://api.example.com/v1".includes("example.com")){if(await new Promise(r=>setTimeout(r,600)),e==="admin@marufa.io"&&t==="password123")return{success:!0,data:{user:Ds,token:"mock_jwt_token_abcdef123456"},message:"Login successful!"};throw new Error("Invalid email or password. Use: admin@marufa.io / password123")}return(await ee.post("/auth/login",{email:e,password:t})).data}class U{static set(t,n,s){try{const r=`${this.prefix}${t}`,o={value:n};s&&(o.expiry=Date.now()+s*1e3),localStorage.setItem(r,JSON.stringify(o))}catch(r){console.error(`[StorageService] Error writing key "${t}":`,r)}}static get(t,n){try{const s=`${this.prefix}${t}`,r=localStorage.getItem(s);if(!r)return n;const o=JSON.parse(r);return o.expiry&&Date.now()>o.expiry?(this.remove(t),n):o.value}catch(s){return console.error(`[StorageService] Error reading key "${t}":`,s),n}}static remove(t){try{const n=`${this.prefix}${t}`;localStorage.removeItem(n)}catch(n){console.error(`[StorageService] Error removing key "${t}":`,n)}}static clearNamespace(){try{const t=[];for(let n=0;n<localStorage.length;n++){const s=localStorage.key(n);s&&s.startsWith(this.prefix)&&t.push(s)}t.forEach(n=>localStorage.removeItem(n))}catch(t){console.error("[StorageService] Error clearing namespace:",t)}}}E(U,"prefix","aura_");class G{static async login(t,n){try{const s=await Ns(t,n),{user:r,token:o}=s.data;return U.set(this.userKey,r),U.set(this.tokenKey,o),window.dispatchEvent(new CustomEvent("auth:state-change",{detail:{isAuthenticated:!0}})),r}catch(s){throw console.error("[AuthService] Login failed:",s),s}}static logout(){U.remove(this.userKey),U.remove(this.tokenKey),window.dispatchEvent(new CustomEvent("auth:state-change",{detail:{isAuthenticated:!1}}))}static isAuthenticated(){const t=U.get(this.tokenKey,null),n=U.get(this.userKey,null);return t!==null&&n!==null}static getCurrentUser(){return U.get(this.userKey,null)}static getToken(){return U.get(this.tokenKey,null)}}E(G,"userKey","auth_user"),E(G,"tokenKey","auth_token");const Se="/assets/logo-B--nKPpq.png";class Bs extends I{constructor(){super(...arguments);E(this,"emailInput");E(this,"passwordInput");E(this,"submitButton");E(this,"errorElement",null)}render(){return`
      <div class="login-wrapper">
        <div class="login-glow"></div>
        <div class="glass-card login-card animate-fade-in">
          <div class="login-header" style="text-align: center; margin-bottom: 2rem;">
            <img src="${Se}" alt="Marufa Logo" style="height: 60px; margin: 0 auto 1rem; display: block; object-fit: contain; border-radius: 6px;" />
            <h1 class="text-gradient">Marufa Admin</h1>
            <p>Boilerplate System Login</p>
          </div>
          
          <div id="login-error-container"></div>
          
          <form id="login-form" class="login-form">
            <div id="email-field-container"></div>
            <div id="password-field-container"></div>
            <div id="submit-btn-container" class="mt-6"></div>
          </form>
          
          <div class="login-footer">
            <p>Demo credentials: <code class="credential-code">admin@marufa.io</code> / <code class="credential-code">password123</code></p>
            <p class="mt-4"><a class="btn-back-showroom" style="color: var(--text-secondary); text-decoration: underline; cursor: pointer; font-size: 0.875rem;">← Back to Showroom</a></p>
          </div>
        </div>
      </div>
    `}afterMount(){var a,c,d,u,p,y;const n=(a=this.element)==null?void 0:a.querySelector("#email-field-container"),s=(c=this.element)==null?void 0:c.querySelector("#password-field-container"),r=(d=this.element)==null?void 0:d.querySelector("#submit-btn-container");this.errorElement=(u=this.element)==null?void 0:u.querySelector("#login-error-container"),this.emailInput=new V({label:"Email Address",type:"email",placeholder:"Enter your admin email",required:!0,id:"login-email",name:"email",value:"admin@marufa.io"}),this.passwordInput=new V({label:"Password",type:"password",placeholder:"Enter your password",required:!0,id:"login-password",name:"password",value:"password123"}),this.submitButton=new me({label:"Verify Credentials",type:"submit",variant:"primary",id:"login-submit"}),this.emailInput.mount(n),this.passwordInput.mount(s),this.submitButton.mount(r);const o=(p=this.element)==null?void 0:p.querySelector("#login-form");o==null||o.addEventListener("submit",b=>{this.handleLogin(b)});const i=(y=this.element)==null?void 0:y.querySelector(".btn-back-showroom");i&&i.addEventListener("click",()=>{window.dispatchEvent(new CustomEvent("app:navigate",{detail:{route:"storefront"}}))})}async handleLogin(n){if(n.preventDefault(),!this.errorElement)return;this.errorElement.innerHTML="";const s=this.emailInput.getValue(),r=this.passwordInput.getValue();if(!s||!r){this.showError("Both email and password fields are required.");return}try{this.submitButton.setProps({isLoading:!0}),await G.login(s,r)}catch(o){const i=o;this.showError(i.message||"Verification failed. Please check your credentials."),this.submitButton.setProps({isLoading:!1})}}showError(n){this.errorElement&&(this.errorElement.innerHTML=`
        <div class="alert alert-danger animate-fade-in">
          <span class="alert-icon">⚠️</span>
          <span class="alert-text">${n}</span>
        </div>
      `)}}class Ue extends I{constructor(n){super();E(this,"props");this.props={color:"primary",...n}}render(){const{title:n,value:s,trend:r,trendType:o,icon:i,color:a}=this.props;let c="trend-neutral",d="•";return o==="up"?(c="trend-up",d="↑"):o==="down"&&(c="trend-down",d="↓"),`
      <div class="glass-card stats-card border-glow-${a} animate-fade-in">
        <div class="stats-card-header">
          <span class="stats-card-title">${n}</span>
          <div class="stats-card-icon icon-bg-${a}">${i}</div>
        </div>
        <div class="stats-card-body">
          <span class="stats-card-value">${s}</span>
          <div class="stats-card-trend ${c}">
            <span class="trend-icon">${d}</span>
            <span class="trend-text">${r}</span>
          </div>
        </div>
      </div>
    `}}function Ee(e){return new Intl.NumberFormat("bn-BD",{style:"currency",currency:"BDT"}).format(e)}function qs(e){try{const t=new Date(e);return new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"numeric"}).format(t)}catch{return"Invalid Date"}}class ht extends I{constructor(n){super();E(this,"props");this.props=n}render(){const{products:n,isLoading:s}=this.props;return s?`
        <div class="table-loading-container">
          <div class="spinner-inline"></div>
          <p>Syncing items with live inventory...</p>
        </div>
      `:n.length?`
      <div class="table-wrapper animate-fade-in">
        <table class="data-table">
          <thead>
            <tr>
              <th style="width: 40%">Product Details</th>
              <th>Category</th>
              <th class="text-right">Price</th>
              <th class="text-right">Stock</th>
              <th>Created At</th>
              <th style="width: 80px">Action</th>
            </tr>
          </thead>
          <tbody>
            ${n.map(o=>`
      <tr class="table-row" data-id="${o.id}">
        <td>
          <div class="product-cell">
            <img src="${o.imageUrl}" alt="${o.name}" class="product-img" />
            <div class="product-info">
              <span class="product-name">${o.name}</span>
              <span class="product-desc">${o.description.substring(0,50)}...</span>
            </div>
          </div>
        </td>
        <td><span class="category-badge">${o.category}</span></td>
        <td class="text-right font-semibold">${Ee(o.price)}</td>
        <td class="text-right">
          <span class="stock-badge ${o.stock<15?"stock-low":"stock-ok"}">
            ${o.stock} units
          </span>
        </td>
        <td>${qs(o.createdAt)}</td>
        <td>
          <button class="btn-delete" data-id="${o.id}" title="Remove Product">
            🗑️
          </button>
        </td>
      </tr>
    `).join("")}
          </tbody>
        </table>
      </div>
    `:`
        <div class="table-empty-container">
          <div class="empty-icon">📦</div>
          <h3>No products in catalog</h3>
          <p>Create a product using the "Add Product" button above.</p>
        </div>
      `}afterMount(){this.props.onDeleteProduct&&this.element&&this.element.querySelectorAll(".btn-delete").forEach(s=>{s.addEventListener("click",r=>{r.stopPropagation();const o=s.dataset.id;o&&this.props.onDeleteProduct(o)})})}setProps(n){this.props={...this.props,...n},this.element&&this.mount(this.element)}}let Re=[{id:"prod-1",name:"Dior Premium Party Gown",description:"An elegant designer red party gown crafted in pure silk with premium embroidery. Perfect for elite gatherings.",price:25500,category:"Gowns",stock:5,imageUrl:"https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&q=80",createdAt:new Date(Date.now()-5*24*60*60*1e3).toISOString()},{id:"prod-2",name:"Gucci Summer Floral Dress",description:"Beautiful lightweight summer dress with vibrant floral patterns, tailored with premium breathable fabrics.",price:18e3,category:"Summer Dresses",stock:8,imageUrl:"https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500&q=80",createdAt:new Date(Date.now()-3*24*60*60*1e3).toISOString()},{id:"prod-3",name:"Classic Evening Silk Gown",description:"A luxurious dark-themed silk evening gown showcasing premium draping and a high-end designer finish.",price:32e3,category:"Gowns",stock:3,imageUrl:"https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=500&q=80",createdAt:new Date(Date.now()-1*24*60*60*1e3).toISOString()},{id:"prod-4",name:"Prada Sunshine Yellow Frock",description:"Bright and elegant yellow casual dress featuring a modern pleated skirt and comfortable regular fit.",price:12500,category:"Frocks",stock:12,imageUrl:"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&q=80",createdAt:new Date(Date.now()-6*24*60*60*1e3).toISOString()},{id:"prod-5",name:"Zara Elegant Cotton Dress",description:"Classic minimalist white cotton dress featuring exquisite lacework details and a breathable relaxed silhouette.",price:8500,category:"Casual Dresses",stock:15,imageUrl:"https://images.unsplash.com/photo-1554412933-514a83d2f3c8?w=500&q=80",createdAt:new Date(Date.now()-12*60*60*1e3).toISOString()},{id:"prod-6",name:"Elegant Evening White Gown",description:"Sophisticated pure white designer gown with dynamic cutouts and heavy sequined lace panels.",price:28500,category:"Gowns",stock:4,imageUrl:"https://images.unsplash.com/photo-1612336307429-8a898d10e223?w=500&q=80",createdAt:new Date(Date.now()-15*24*60*60*1e3).toISOString()},{id:"prod-7",name:"Classy Blush Pink Gown",description:"High-fashion pink luxury gown tailored with dynamic soft silk overlays and a modern halter-neck.",price:22e3,category:"Gowns",stock:7,imageUrl:"https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&q=80",createdAt:new Date(Date.now()-2*24*60*60*1e3).toISOString()},{id:"prod-8",name:"Vintage Bohemian Dress",description:"A stylish bohemian style retro dress featuring vintage paisley prints and a comfortable relaxed flare.",price:15e3,category:"Bohemian",stock:6,imageUrl:"https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=500&q=80",createdAt:new Date(Date.now()-8*24*60*60*1e3).toISOString()},{id:"prod-9",name:"Nordic Summer Beachwear",description:"Flowy resort-style summer dress with elegant strap details and a beautiful modern flare.",price:9500,category:"Summer Dresses",stock:9,imageUrl:"https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=500&q=80",createdAt:new Date(Date.now()-4*24*60*60*1e3).toISOString()}];async function Us(e=1,t=10,n){if("https://api.example.com/v1".includes("example.com")){await new Promise(u=>setTimeout(u,500));let o=[...Re];n&&(o=o.filter(u=>u.category.toLowerCase()===n.toLowerCase()));const i=(e-1)*t,a=i+t,c=o.slice(i,a),d=o.length;return{success:!0,data:{items:c,total:d,page:e,limit:t,totalPages:Math.ceil(d/t)}}}return(await ee.get("/products",{params:{page:e,limit:t,category:n}})).data}async function Fs(e){if("https://api.example.com/v1".includes("example.com")){await new Promise(r=>setTimeout(r,600));const s={id:`prod-${Date.now()}`,name:e.name,description:e.description,price:e.price,category:e.category,stock:e.stock,imageUrl:e.imageUrl||"https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=500&q=80",createdAt:new Date().toISOString()};return Re.unshift(s),{success:!0,data:s,message:"Product created successfully!"}}return(await ee.post("/products",e)).data}async function Ms(e){return"https://api.example.com/v1".includes("example.com")?(await new Promise(s=>setTimeout(s,400)),Re=Re.filter(s=>s.id!==e),{success:!0,data:e,message:"Product deleted successfully!"}):(await ee.delete(`/products/${e}`)).data}class oe{static async getProducts(t=1,n=10,s){try{const r=await Us(t,n,s);return{items:r.data.items,total:r.data.total}}catch(r){throw console.error("[ProductService] Error getting products:",r),r}}static async addProduct(t){try{return(await Fs(t)).data}catch(n){throw console.error("[ProductService] Error creating product:",n),n}}static async removeProduct(t){try{return(await Ms(t)).data}catch(n){throw console.error(`[ProductService] Error deleting product ${t}:`,n),n}}static calculateDashboardMetrics(t){if(!t.length)return{totalProducts:0,totalStockValue:0,lowStockCount:0,highestPricedItem:"N/A"};let n=0,s=0,r=0,o="N/A";return t.forEach(i=>{n+=i.price*i.stock,i.stock<15&&s++,i.price>r&&(r=i.price,o=i.name)}),{totalProducts:t.length,totalStockValue:parseFloat(n.toFixed(2)),lowStockCount:s,highestPricedItem:o}}}class $s extends I{constructor(){super(...arguments);E(this,"products",[]);E(this,"statsCardsContainer");E(this,"tableContainer");E(this,"productTable");E(this,"addProductModal");E(this,"addProductButton");E(this,"saveProductButton");E(this,"cancelProductButton");E(this,"inputName");E(this,"inputCategory");E(this,"inputPrice");E(this,"inputStock");E(this,"inputDesc")}render(){const n=G.getCurrentUser();return`
      <div class="dashboard-wrapper animate-fade-in">
        <!-- Header -->
        <header class="dashboard-header glass-card">
          <div class="header-left" style="display: flex; align-items: center; gap: 0.75rem;">
            <img src="${Se}" alt="Marufa Logo" style="height: 38px; width: auto; object-fit: contain; border-radius: 4px;" />
            <div>
              <h1 class="text-gradient" style="margin: 0; font-size: 1.5rem;">Marufa Control Center</h1>
              <p style="margin: 0; font-size: 0.875rem;">Welcome back, <span class="username-highlight">${(n==null?void 0:n.username)||"Administrator"}</span></p>
            </div>
          </div>
          <div class="header-right">
            <button id="btn-logout" class="btn btn-ghost" title="Sign Out">Logout 🚪</button>
          </div>
        </header>

        <!-- Stats Section -->
        <section id="stats-cards-row" class="grid-cols-3 mt-6"></section>

        <!-- Main Content Area -->
        <main class="dashboard-content-card glass-card mt-6">
          <div class="content-header">
            <div class="header-title">
              <h2>Product Catalog</h2>
              <p>Type-safe asynchronous CRUD control matrix</p>
            </div>
            <div class="header-actions">
              <div id="add-product-btn-slot"></div>
            </div>
          </div>

          <!-- Product Table slot -->
          <div id="product-table-slot" class="mt-4"></div>
        </main>

        <!-- Dynamic Modal Backdrop for Adding Products -->
        <div id="add-product-modal" class="modal-backdrop hidden">
          <div class="glass-card modal-content animate-fade-in">
            <div class="modal-header">
              <h2 class="text-gradient">Register New Asset</h2>
              <button id="btn-close-modal" class="btn-close-x">&times;</button>
            </div>
            
            <form id="modal-form" class="modal-form mt-4">
              <div class="grid-cols-2">
                <div id="modal-input-name"></div>
                <div id="modal-input-category"></div>
              </div>
              <div class="grid-cols-2 mt-4">
                <div id="modal-input-price"></div>
                <div id="modal-input-stock"></div>
              </div>
              <div class="mt-4" id="modal-input-desc"></div>
              
              <div class="modal-footer mt-6">
                <div id="modal-btn-cancel"></div>
                <div id="modal-btn-save"></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    `}afterMount(){var o,i,a,c,d,u,p,y,b,w,h,f,g,R;this.statsCardsContainer=(o=this.element)==null?void 0:o.querySelector("#stats-cards-row"),this.tableContainer=(i=this.element)==null?void 0:i.querySelector("#product-table-slot"),this.addProductModal=(a=this.element)==null?void 0:a.querySelector("#add-product-modal");const n=(c=this.element)==null?void 0:c.querySelector("#btn-logout");n==null||n.addEventListener("click",()=>{G.logout()}),this.addProductButton=new me({label:"Add Product ➕",variant:"primary",onClick:()=>this.showModal()}),this.addProductButton.mount((d=this.element)==null?void 0:d.querySelector("#add-product-btn-slot")),this.inputName=new V({label:"Product Name",placeholder:"e.g. Jamdani Saree",required:!0,id:"modal-pname",name:"pname"}),this.inputCategory=new V({label:"Category",placeholder:"e.g. Sarees",required:!0,id:"modal-pcat",name:"pcat"}),this.inputPrice=new V({label:"Price (৳)",type:"number",placeholder:"e.g. 199.00",required:!0,id:"modal-pprice",name:"pprice"}),this.inputStock=new V({label:"Starting Stock",type:"number",placeholder:"e.g. 50",required:!0,id:"modal-pstock",name:"pstock"}),this.inputDesc=new V({label:"Product Description",placeholder:"Provide full product specifications here...",required:!0,id:"modal-pdesc",name:"pdesc"}),this.inputName.mount((u=this.element)==null?void 0:u.querySelector("#modal-input-name")),this.inputCategory.mount((p=this.element)==null?void 0:p.querySelector("#modal-input-category")),this.inputPrice.mount((y=this.element)==null?void 0:y.querySelector("#modal-input-price")),this.inputStock.mount((b=this.element)==null?void 0:b.querySelector("#modal-input-stock")),this.inputDesc.mount((w=this.element)==null?void 0:w.querySelector("#modal-input-desc")),this.saveProductButton=new me({label:"Save Asset 💾",type:"submit",variant:"primary"}),this.cancelProductButton=new me({label:"Cancel",variant:"ghost",onClick:()=>this.hideModal()}),this.saveProductButton.mount((h=this.element)==null?void 0:h.querySelector("#modal-btn-save")),this.cancelProductButton.mount((f=this.element)==null?void 0:f.querySelector("#modal-btn-cancel"));const s=(g=this.element)==null?void 0:g.querySelector("#btn-close-modal");s==null||s.addEventListener("click",()=>{this.hideModal()});const r=(R=this.element)==null?void 0:R.querySelector("#modal-form");r==null||r.addEventListener("submit",v=>{this.handleSaveProduct(v)}),this.loadProducts()}async loadProducts(){this.renderLoadingTable(),this.renderLoadingStats();try{const n=await oe.getProducts();this.products=n.items,this.renderStats(),this.renderTable()}catch{this.showGlobalError("Unable to connect to service registry.")}}renderLoadingStats(){this.statsCardsContainer&&(this.statsCardsContainer.innerHTML=`
        <div class="glass-card skeleton-card animate-fade-in" style="height: 120px;"></div>
        <div class="glass-card skeleton-card animate-fade-in" style="height: 120px;"></div>
        <div class="glass-card skeleton-card animate-fade-in" style="height: 120px;"></div>
      `)}renderLoadingTable(){this.tableContainer&&(this.productTable=new ht({products:[],isLoading:!0}),this.productTable.mount(this.tableContainer))}renderStats(){if(!this.statsCardsContainer)return;const n=oe.calculateDashboardMetrics(this.products);this.statsCardsContainer.innerHTML="";const s=new Ue({title:"Total Active Products",value:n.totalProducts,trend:"+12% this month",trendType:"up",icon:"📦",color:"primary"}),r=new Ue({title:"Gross Valuation",value:Ee(n.totalStockValue),trend:"+24.5% vs Q1",trendType:"up",icon:"💵",color:"success"}),o=new Ue({title:"Restock Warnings",value:n.lowStockCount,trend:`${n.lowStockCount>2?"Action required":"Optimal catalog status"}`,trendType:n.lowStockCount>2?"down":"neutral",icon:"⚠️",color:"warning"}),i=document.createElement("div"),a=document.createElement("div"),c=document.createElement("div");this.statsCardsContainer.appendChild(i),this.statsCardsContainer.appendChild(a),this.statsCardsContainer.appendChild(c),s.mount(i),r.mount(a),o.mount(c)}renderTable(){this.tableContainer&&(this.productTable=new ht({products:this.products,isLoading:!1,onDeleteProduct:n=>{this.handleDeleteProduct(n)}}),this.productTable.mount(this.tableContainer))}async handleDeleteProduct(n){if(confirm("Are you sure you want to purge this asset from live inventory?"))try{this.renderLoadingTable(),await oe.removeProduct(n),this.showToast("Asset successfully purged.","success"),await this.loadProducts()}catch(s){const r=s;this.showToast(r.message||"Error purging asset.","error"),this.renderTable()}}async handleSaveProduct(n){var d;n.preventDefault();const s=this.inputName.getValue(),r=this.inputCategory.getValue(),o=parseFloat(this.inputPrice.getValue()),i=parseInt(this.inputStock.getValue()),a=this.inputDesc.getValue();if(!s||!r||isNaN(o)||isNaN(i)||!a){this.showToast("Please fulfill all required fields.","warning");return}const c={name:s,category:r,price:o,stock:i,description:a};try{this.saveProductButton.setProps({isLoading:!0}),await oe.addProduct(c),this.showToast("Asset registered successfully.","success"),this.hideModal();const u=(d=this.element)==null?void 0:d.querySelector("#modal-form");u==null||u.reset(),await this.loadProducts()}catch(u){const p=u;this.showToast(p.message||"Error registering asset.","error")}finally{this.saveProductButton.setProps({isLoading:!1})}}showModal(){this.addProductModal&&this.addProductModal.classList.remove("hidden")}hideModal(){this.addProductModal&&this.addProductModal.classList.add("hidden")}showToast(n,s){window.dispatchEvent(new CustomEvent("app:toast",{detail:{message:n,type:s}}))}showGlobalError(n){this.tableContainer&&(this.tableContainer.innerHTML=`
        <div class="alert alert-danger animate-fade-in mt-4">
          <span class="alert-icon">❌</span>
          <span class="alert-text">${n}</span>
          <button class="btn btn-ghost btn-sm ml-auto" onclick="window.location.reload()">Retry</button>
        </div>
      `)}}const Is="/assets/maru-3Cj2qmua.jpeg";class js extends I{constructor(){super(...arguments);E(this,"products",[])}render(){return`
      <div class="storefront-wrapper animate-fade-in">
        <!-- Transparent Glass Navigation Bar -->
        <nav class="storefront-nav">
          <div class="storefront-nav-logo" style="display: flex; align-items: center; gap: 0.75rem;">
            <img src="${Se}" alt="Marufa Logo" style="height: 38px; width: auto; object-fit: contain; border-radius: 4px;" />
            <span>Marufa Showroom</span>
          </div>
          <ul class="storefront-nav-links">
            <li><a class="storefront-nav-link active">Home</a></li>
            <li><a class="storefront-nav-link" href="#shop">Collection</a></li>
            <li><a class="storefront-nav-link" href="#stories">Stories</a></li>
            <li><a class="storefront-nav-link" href="#about">About</a></li>
          </ul>
          <div class="storefront-nav-actions">
            <button class="btn btn-secondary btn-admin-login" style="padding: 0.5rem 1.25rem; font-size: 0.8125rem;">
              Admin Console 🖥️
            </button>
          </div>
        </nav>

        <!-- Beautiful Hero Header Section -->
        <header class="storefront-hero">
          <div class="storefront-hero-content">
            <span class="hero-subtitle">Premium Bangladeshi Fashion</span>
            <h1 class="hero-title">Elegance in Every Thread.<br>Tradition Meets Modernity.</h1>
            <p class="hero-description">
              Discover curated fashion collections blending authentic hand-woven fabrics, intricate embroidery, and timeless Bangladeshi design aesthetics.
            </p>
            <div class="storefront-hero-actions mt-4">
              <a href="#shop" class="btn btn-primary" style="text-decoration: none;">Discover Collection →</a>
            </div>
          </div>
          <div class="storefront-hero-media">
            <div class="hero-img-backdrop"></div>
            <img src="${Is}" alt="Premium Fashion Showcase" class="storefront-hero-img" style="object-fit: cover; width: 100%; height: 100%; border-radius: 24px; box-shadow: 0 20px 40px rgba(0,0,0,0.3);" />
          </div>
        </header>

        <!-- Intro Detail Banner Section -->
        <section class="storefront-intro">
          <span class="intro-tag">Design Principles</span>
          <p class="intro-text">
            Where concepts become reality — this evolving showroom blends exquisite craftsmanship, structural detail, and adaptive design, <span class="highlight-green">shaping elegance</span> that reflects your unique identity.
          </p>
        </section>

        <!-- Catalog Showcase Section -->
        <section id="shop" class="storefront-catalog-section">
          <div class="catalog-header">
            <div class="catalog-title-group">
              <h2>Timeless fashion for every occasion</h2>
              <p>Explore our premium catalog of Sarees, Salwar Kameez, Panjabis, and Lehengas.</p>
            </div>
          </div>

          <!-- Mount point for products catalog -->
          <div id="storefront-catalog-mount">
            <div class="grid-loading-container">
              <div class="spinner-inline"></div>
              <p>Loading curated catalogue...</p>
            </div>
          </div>
        </section>

        <!-- Stories Testimonials Section -->
        <section id="stories" class="storefront-stories">
          <span class="hero-subtitle" style="display: block; text-align: center;">Testimonials</span>
          <h2 style="font-size: 2.25rem; font-weight: 800; text-align: center; color: #fff; margin-top: 0.5rem; letter-spacing: -0.02em;">
            Stories Behind Every Space
          </h2>
          
          <div class="stories-grid">
            <div class="story-card">
              <span class="quote-icon">“</span>
              <p class="story-quote">
                The Jamdani Saree I purchased was absolutely breathtaking. The quality is unmatched and delivery was prompt!
              </p>
              <div class="story-author">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80" alt="Sophia Larson" class="author-avatar" />
                <div class="author-info">
                  <span class="author-name">Sumaiya Rahman</span>
                  <span class="author-title">Dhaka, Bangladesh</span>
                </div>
              </div>
            </div>

            <div class="story-card">
              <span class="quote-icon">“</span>
              <p class="story-quote">
                The Panjabi's fabric and embroidery are exceptionally detailed. Perfect for Eid and family gatherings!
              </p>
              <div class="story-author">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" alt="Marcus Vane" class="author-avatar" />
                <div class="author-info">
                  <span class="author-name">Rakib Hossain</span>
                  <span class="author-title">Chittagong, Bangladesh</span>
                </div>
              </div>
            </div>

            <div class="story-card">
              <span class="quote-icon">“</span>
              <p class="story-quote">
                Fast shipping across Bangladesh! The Georgette Kurti set is gorgeous and fits perfectly.
              </p>
              <div class="story-author">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" alt="Elena Rostova" class="author-avatar" />
                <div class="author-info">
                  <span class="author-name">Nusrat Jahan</span>
                  <span class="author-title">Sylhet, Bangladesh</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Download Banner Section -->
        <section class="storefront-download-banner">
          <div class="download-banner-card">
            <div class="download-banner-glow"></div>
            <div class="download-content">
              <h2>Download Our App Now</h2>
              <p>Get exclusive offers, faster checkout, and browse our latest collections easily from your mobile device.</p>
            </div>
            <div class="download-badges">
              <a href="#" class="badge-btn">
                <span class="badge-icon"></span> App Store
              </a>
              <a href="#" class="badge-btn">
                <span class="badge-icon">🤖</span> Google Play
              </a>
            </div>
          </div>
        </section>

        <!-- Elegant Cyber-Glass Footer -->
        <footer id="about" class="storefront-footer">
          <div class="footer-container">
            <div class="footer-brand">
              <div class="storefront-nav-logo" style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
                <img src="${Se}" alt="Marufa Logo" style="height: 30px; width: auto; object-fit: contain; border-radius: 4px;" />
                <span>Marufa Showroom</span>
              </div>
              <p>Crafting authentic Bangladeshi fashion with premium fabrics and modern design precision.</p>
            </div>
            <div class="footer-col">
              <h4>Categories</h4>
              <ul class="footer-links">
                <li class="footer-link"><a href="#">Jamdani Sarees</a></li>
                <li class="footer-link"><a href="#">Salwar Kameez</a></li>
                <li class="footer-link"><a href="#">Premium Panjabis</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Support</h4>
              <ul class="footer-links">
                <li class="footer-link"><a href="#">Delivery Information</a></li>
                <li class="footer-link"><a href="#">Return Policy</a></li>
                <li class="footer-link"><a href="#">Size Guide</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Company</h4>
              <ul class="footer-links">
                <li class="footer-link"><a href="#">About Us</a></li>
                <li class="footer-link"><a href="#">Careers</a></li>
                <li class="footer-link"><a href="#">Contact</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Payments</h4>
              <ul class="footer-links">
                <li class="footer-link"><a href="#">SSL Commerz</a></li>
                <li class="footer-link"><a href="#">bKash / Nagad</a></li>
                <li class="footer-link"><a href="#">Visa / MasterCard</a></li>
              </ul>
            </div>
          </div>

          <div class="footer-bottom">
            <span class="copyright">© ${new Date().getFullYear()} Marufa Inc. All rights reserved.</span>
            <div class="social-links">
              <a href="#" class="social-link">Instagram</a>
              <a href="#" class="social-link">Facebook</a>
              <a href="#" class="social-link">Twitter</a>
            </div>
          </div>
        </footer>

        <!-- SSL Commerz Mock Modal -->
        <div id="ssl-modal" class="modal-backdrop hidden">
          <div class="glass-card modal-content animate-fade-in" style="max-width: 450px; background: #ffffff; color: #333; padding: 2rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #eaeaea; padding-bottom: 1rem; margin-bottom: 1.5rem;">
               <img src="https://securepay.sslcommerz.com/public/image/SSLCommerz-Pay-With-logo-All-Size-03.png" alt="SSLCommerz" style="height: 35px;" />
               <button id="btn-close-ssl" class="btn-close-x" style="color: #666; font-size: 2rem;">&times;</button>
            </div>
            
            <h3 style="font-size: 1.25rem; font-weight: 700; color: #111; margin-bottom: 0.5rem;">Secure Checkout</h3>
            <p style="color: #666; margin-bottom: 1.5rem; font-size: 0.95rem;">You are purchasing: <strong id="ssl-product-name" style="color: #333;">...</strong></p>
            
            <div style="background: #f8f9fa; padding: 1.25rem; border-radius: 8px; margin-bottom: 1.5rem; text-align: center; border: 1px solid #eaeaea;">
               <span style="font-size: 0.85rem; color: #666; display: block; margin-bottom: 0.25rem; text-transform: uppercase; letter-spacing: 0.05em;">Total Payable Amount</span>
               <span id="ssl-amount" style="font-size: 2rem; font-weight: 800; color: #00a859;">৳ 0.00</span>
            </div>

            <form id="ssl-form" style="text-align: left;">
              <div style="margin-bottom: 1.5rem;">
                <label style="font-size: 0.85rem; font-weight: 600; color: #444; margin-bottom: 0.5rem; display: block;">Mobile Number</label>
                <input type="tel" required placeholder="017XXXXXXXX" style="width: 100%; padding: 0.85rem; border: 1px solid #ccc; border-radius: 6px; font-size: 1rem; outline: none; transition: border 0.2s;" onfocus="this.style.borderColor='#00a859'" onblur="this.style.borderColor='#ccc'" />
              </div>
              <button type="submit" id="btn-pay-ssl" class="btn-primary" style="width: 100%; background: #00a859; box-shadow: 0 4px 15px rgba(0, 168, 89, 0.3); border: none; padding: 1rem; font-size: 1rem; font-weight: 700; border-radius: 6px; cursor: pointer; color: white;">
                Pay Securely
              </button>
            </form>

            <div id="ssl-loading" class="hidden" style="padding: 2rem 0; text-align: center;">
              <div class="spinner-inline" style="border-color: #00a859; border-bottom-color: transparent; width: 40px; height: 40px; margin: 0 auto; border-width: 3px;"></div>
              <p style="margin-top: 1rem; color: #444; font-weight: 500; font-size: 1rem;">Processing with SSLCommerz...</p>
            </div>
          </div>
        </div>

      </div>
    `}afterMount(){var i,a,c,d;const n=(i=this.element)==null?void 0:i.querySelector(".btn-admin-login");n&&n.addEventListener("click",()=>{window.dispatchEvent(new CustomEvent("app:navigate",{detail:{route:"login"}}))});const s=(a=this.element)==null?void 0:a.querySelector("#ssl-modal"),r=(c=this.element)==null?void 0:c.querySelector("#btn-close-ssl"),o=(d=this.element)==null?void 0:d.querySelector("#ssl-form");r&&s&&r.addEventListener("click",()=>{s.classList.add("hidden")}),o&&o.addEventListener("submit",u=>{var y;u.preventDefault(),o.classList.add("hidden");const p=(y=this.element)==null?void 0:y.querySelector("#ssl-loading");p&&p.classList.remove("hidden"),setTimeout(()=>{s==null||s.classList.add("hidden"),o.classList.remove("hidden"),p&&p.classList.add("hidden"),o.reset(),window.dispatchEvent(new CustomEvent("app:toast",{detail:{message:"Payment Successful! Thank you for shopping at Marufa Showroom.",type:"success"}}))},2e3)}),this.loadCatalog()}async loadCatalog(){var n;try{const s=await oe.getProducts();this.products=s.items,this.renderCatalog()}catch{const r=(n=this.element)==null?void 0:n.querySelector("#storefront-catalog-mount");r&&(r.innerHTML=`
          <div class="grid-empty-container" style="border-color: var(--color-danger);">
            <div class="empty-icon">⚠️</div>
            <h3>Failed to load catalog</h3>
            <p>Could not synchronize items with inventory servers.</p>
          </div>
        `)}}renderCatalog(){var o;const n=(o=this.element)==null?void 0:o.querySelector("#storefront-catalog-mount");if(!n)return;if(!this.products.length){n.innerHTML=`
        <div class="grid-empty-container">
          <div class="empty-icon">📦</div>
          <h3>Showroom is empty</h3>
          <p>Please log in as Administrator to register luxury assets.</p>
        </div>
      `;return}const s=this.products.map(i=>`
        <div class="storefront-product-card animate-fade-in">
          <!-- Image frame -->
          <div class="storefront-product-img-wrapper" style="background-color: #fcfcfc;">
            <img src="${i.imageUrl}" alt="${i.name}" class="storefront-product-img" style="object-fit: cover; width: 100%; height: 100%;" />
            <span class="storefront-product-stock ${i.stock<5?"stock-low-badge":"stock-ok-badge"}">
              Stock: ${i.stock} units
            </span>
          </div>

          <!-- Product Details -->
          <div class="storefront-product-info">
            <div class="storefront-product-left">
              <h4 class="storefront-product-name">${i.name}</h4>
              <span class="storefront-product-category">${i.category}</span>
            </div>
            <span class="storefront-product-price">${Ee(i.price)}</span>
          </div>
          <p class="storefront-product-desc">${i.description.substring(0,100)}...</p>

          <!-- Action block -->
          <div class="storefront-product-footer">
            <button class="btn-add-cart-neon btn-buy-trigger" data-name="${i.name}" data-price="${i.price}">
              Buy Now & Pay <span style="font-weight: 400; margin-left: 4px;">💳</span>
            </button>
          </div>
        </div>
      `).join("");n.innerHTML=`
      <div class="storefront-product-grid">
        ${s}
      </div>
    `,n.querySelectorAll(".btn-buy-trigger").forEach(i=>{i.addEventListener("click",()=>{var y,b,w;const a=i.dataset.name,c=parseFloat(i.dataset.price||"0"),d=(y=this.element)==null?void 0:y.querySelector("#ssl-modal"),u=(b=this.element)==null?void 0:b.querySelector("#ssl-product-name"),p=(w=this.element)==null?void 0:w.querySelector("#ssl-amount");d&&u&&p&&(u.textContent=a||"Product",p.textContent=Ee(c),d.classList.remove("hidden"))})})}}class Hs extends I{constructor(){super(...arguments);E(this,"currentPage",null)}render(){return`
      <div id="app-root" class="min-h-screen">
        <div id="page-mount-point" class="animate-fade-in"></div>
        <div id="notification-container"></div>
      </div>
    `}afterMount(){this.handleRoute(),window.addEventListener("app:navigate",n=>{const{route:s}=n.detail;this.transitionTo(s)}),window.addEventListener("auth:state-change",n=>{n.detail.isAuthenticated?this.transitionTo("dashboard"):this.transitionTo("storefront")}),window.addEventListener("app:toast",n=>{const{message:s,type:r}=n.detail;this.triggerToast(s,r)}),window.addEventListener("auth:logout",()=>{this.transitionTo("storefront"),this.triggerToast("Session expired. Please sign in again.","warning")})}handleRoute(){G.isAuthenticated()?this.transitionTo("dashboard"):this.transitionTo("storefront")}transitionTo(n){var r;this.currentPage&&this.currentPage.unmount();const s=(r=this.element)==null?void 0:r.querySelector("#page-mount-point");s&&(n==="dashboard"&&!G.isAuthenticated()&&(n="login"),n==="dashboard"?this.currentPage=new $s:n==="login"?this.currentPage=new Bs:this.currentPage=new js,this.currentPage.mount(s))}triggerToast(n,s){var a;const r=(a=this.element)==null?void 0:a.querySelector("#notification-container");if(!r)return;const o=document.createElement("div");o.className=`notification ${s}`;let i="ℹ️";s==="success"&&(i="✅"),s==="error"&&(i="❌"),s==="warning"&&(i="⚠️"),o.innerHTML=`
      <span class="notification-icon">${i}</span>
      <span class="notification-message">${n}</span>
    `,r.appendChild(o),setTimeout(()=>{o.style.animation="fadeIn 0.25s reverse forwards",setTimeout(()=>{o.remove()},250)},4e3)}}document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("app");e?(new Hs().mount(e),console.info('[Marufa Boilerplate] Initialized environment: "development"')):console.error("[Marufa Boilerplate] Failed to mount application: #app root not found.")});
//# sourceMappingURL=index-B69i8xOg.js.map
