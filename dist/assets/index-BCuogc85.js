var Ft=Object.defineProperty;var Mt=(e,t,n)=>t in e?Ft(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var S=(e,t,n)=>Mt(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();class ${constructor(){S(this,"element",null)}mount(t){this.element=t,this.element.innerHTML=this.render(),this.afterMount()}afterMount(){}unmount(){this.beforeUnmount(),this.element=null}beforeUnmount(){}}class z extends ${constructor(n){super();S(this,"props");this.props={type:"text",placeholder:"",value:"",required:!1,error:"",...n}}render(){const{label:n,type:s,placeholder:r,value:o,required:i,error:a,id:l,name:u}=this.props,d=i?'<span class="text-danger">*</span>':"",m=a?"input-error":"",y=a?`<span class="error-text animate-fade-in">${a}</span>`:"";return`
      <div class="input-group">
        <label for="${l}" class="input-label">${n} ${d}</label>
        <input 
          type="${s}" 
          id="${l}" 
          name="${u}" 
          placeholder="${r}" 
          value="${o}"
          class="input-field ${m}"
          ${i?"required":""}
        />
        ${y}
      </div>
    `}afterMount(){if(this.element){const n=this.element.querySelector("input");n==null||n.addEventListener("input",s=>{const r=s.target.value;this.props.value=r,this.props.onChange&&this.props.onChange(r)})}}getValue(){if(this.element){const n=this.element.querySelector("input");return n?n.value:this.props.value||""}return this.props.value||""}setProps(n){this.props={...this.props,...n},this.element&&this.mount(this.element)}}class me extends ${constructor(n){super();S(this,"props");this.props={type:"button",variant:"primary",isLoading:!1,disabled:!1,...n}}render(){const{label:n,type:s,variant:r,isLoading:o,disabled:i,id:a}=this.props,l=a?`id="${a}"`:"";return`
      <button type="${s}" ${l} class="btn btn-${r} ${o?"btn-loading":""}" ${i||o?"disabled":""}>
        ${o?'<span class="spinner-inline"></span>':""}
        <span class="btn-label">${n}</span>
      </button>
    `}afterMount(){if(this.props.onClick&&this.element){const n=this.element.querySelector("button");n==null||n.addEventListener("click",s=>{!this.props.isLoading&&!this.props.disabled&&this.props.onClick(s)})}}setProps(n){this.props={...this.props,...n},this.element&&this.mount(this.element)}}function ht(e,t){return function(){return e.apply(t,arguments)}}const{toString:It}=Object.prototype,{getPrototypeOf:Se}=Object,{iterator:Re,toStringTag:mt}=Symbol,Ce=(e=>t=>{const n=It.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),D=e=>(e=e.toLowerCase(),t=>Ce(t)===e),Ae=e=>t=>typeof t===e,{isArray:Z}=Array,Y=Ae("undefined");function ie(e){return e!==null&&!Y(e)&&e.constructor!==null&&!Y(e.constructor)&&x(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const gt=D("ArrayBuffer");function $t(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&gt(e.buffer),t}const jt=Ae("string"),x=Ae("function"),yt=Ae("number"),ae=e=>e!==null&&typeof e=="object",Ht=e=>e===!0||e===!1,ge=e=>{if(Ce(e)!=="object")return!1;const t=Se(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(mt in e)&&!(Re in e)},Vt=e=>{if(!ae(e)||ie(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},zt=D("Date"),Kt=D("File"),Jt=e=>!!(e&&typeof e.uri<"u"),Wt=e=>e&&typeof e.getParts<"u",Xt=D("Blob"),Gt=D("FileList"),Qt=e=>ae(e)&&x(e.pipe);function Yt(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const Ze=Yt(),et=typeof Ze.FormData<"u"?Ze.FormData:void 0,Zt=e=>{if(!e)return!1;if(et&&e instanceof et)return!0;const t=Se(e);if(!t||t===Object.prototype||!x(e.append))return!1;const n=Ce(e);return n==="formdata"||n==="object"&&x(e.toString)&&e.toString()==="[object FormData]"},en=D("URLSearchParams"),[tn,nn,sn,rn]=["ReadableStream","Request","Response","Headers"].map(D),on=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ce(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let s,r;if(typeof e!="object"&&(e=[e]),Z(e))for(s=0,r=e.length;s<r;s++)t.call(null,e[s],s,e);else{if(ie(e))return;const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let a;for(s=0;s<i;s++)a=o[s],t.call(null,e[a],a,e)}}function bt(e,t){if(ie(e))return null;t=t.toLowerCase();const n=Object.keys(e);let s=n.length,r;for(;s-- >0;)if(r=n[s],t===r.toLowerCase())return r;return null}const K=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,wt=e=>!Y(e)&&e!==K;function qe(...e){const{caseless:t,skipUndefined:n}=wt(this)&&this||{},s={},r=(o,i)=>{if(i==="__proto__"||i==="constructor"||i==="prototype")return;const a=t&&bt(s,i)||i,l=Ue(s,a)?s[a]:void 0;ge(l)&&ge(o)?s[a]=qe(l,o):ge(o)?s[a]=qe({},o):Z(o)?s[a]=o.slice():(!n||!Y(o))&&(s[a]=o)};for(let o=0,i=e.length;o<i;o++)e[o]&&ce(e[o],r);return s}const an=(e,t,n,{allOwnKeys:s}={})=>(ce(t,(r,o)=>{n&&x(r)?Object.defineProperty(e,o,{__proto__:null,value:ht(r,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(e,o,{__proto__:null,value:r,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:s}),e),cn=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),ln=(e,t,n,s)=>{e.prototype=Object.create(t.prototype,s),Object.defineProperty(e.prototype,"constructor",{__proto__:null,value:e,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(e,"super",{__proto__:null,value:t.prototype}),n&&Object.assign(e.prototype,n)},dn=(e,t,n,s)=>{let r,o,i;const a={};if(t=t||{},e==null)return t;do{for(r=Object.getOwnPropertyNames(e),o=r.length;o-- >0;)i=r[o],(!s||s(i,e,t))&&!a[i]&&(t[i]=e[i],a[i]=!0);e=n!==!1&&Se(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},un=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const s=e.indexOf(t,n);return s!==-1&&s===n},fn=e=>{if(!e)return null;if(Z(e))return e;let t=e.length;if(!yt(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},pn=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Se(Uint8Array)),hn=(e,t)=>{const s=(e&&e[Re]).call(e);let r;for(;(r=s.next())&&!r.done;){const o=r.value;t.call(e,o[0],o[1])}},mn=(e,t)=>{let n;const s=[];for(;(n=e.exec(t))!==null;)s.push(n);return s},gn=D("HTMLFormElement"),yn=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,s,r){return s.toUpperCase()+r}),Ue=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),bn=D("RegExp"),vt=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),s={};ce(n,(r,o)=>{let i;(i=t(r,o,e))!==!1&&(s[o]=i||r)}),Object.defineProperties(e,s)},wn=e=>{vt(e,(t,n)=>{if(x(e)&&["arguments","caller","callee"].includes(n))return!1;const s=e[n];if(x(s)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},vn=(e,t)=>{const n={},s=r=>{r.forEach(o=>{n[o]=!0})};return Z(e)?s(e):s(String(e).split(t)),n},En=()=>{},Sn=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function Rn(e){return!!(e&&x(e.append)&&e[mt]==="FormData"&&e[Re])}const Cn=e=>{const t=new WeakSet,n=s=>{if(ae(s)){if(t.has(s))return;if(ie(s))return s;if(!("toJSON"in s)){t.add(s);const r=Z(s)?[]:{};return ce(s,(o,i)=>{const a=n(o);!Y(a)&&(r[i]=a)}),t.delete(s),r}}return s};return n(e)},An=D("AsyncFunction"),Pn=e=>e&&(ae(e)||x(e))&&x(e.then)&&x(e.catch),Et=((e,t)=>e?setImmediate:t?((n,s)=>(K.addEventListener("message",({source:r,data:o})=>{r===K&&o===n&&s.length&&s.shift()()},!1),r=>{s.push(r),K.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",x(K.postMessage)),On=typeof queueMicrotask<"u"?queueMicrotask.bind(K):typeof process<"u"&&process.nextTick||Et,Tn=e=>e!=null&&x(e[Re]),c={isArray:Z,isArrayBuffer:gt,isBuffer:ie,isFormData:Zt,isArrayBufferView:$t,isString:jt,isNumber:yt,isBoolean:Ht,isObject:ae,isPlainObject:ge,isEmptyObject:Vt,isReadableStream:tn,isRequest:nn,isResponse:sn,isHeaders:rn,isUndefined:Y,isDate:zt,isFile:Kt,isReactNativeBlob:Jt,isReactNative:Wt,isBlob:Xt,isRegExp:bn,isFunction:x,isStream:Qt,isURLSearchParams:en,isTypedArray:pn,isFileList:Gt,forEach:ce,merge:qe,extend:an,trim:on,stripBOM:cn,inherits:ln,toFlatObject:dn,kindOf:Ce,kindOfTest:D,endsWith:un,toArray:fn,forEachEntry:hn,matchAll:mn,isHTMLForm:gn,hasOwnProperty:Ue,hasOwnProp:Ue,reduceDescriptors:vt,freezeMethods:wn,toObjectSet:vn,toCamelCase:yn,noop:En,toFiniteNumber:Sn,findKey:bt,global:K,isContextDefined:wt,isSpecCompliantForm:Rn,toJSONObject:Cn,isAsyncFn:An,isThenable:Pn,setImmediate:Et,asap:On,isIterable:Tn},xn=c.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),kn=e=>{const t={};let n,s,r;return e&&e.split(`
`).forEach(function(i){r=i.indexOf(":"),n=i.substring(0,r).trim().toLowerCase(),s=i.substring(r+1).trim(),!(!n||t[n]&&xn[n])&&(n==="set-cookie"?t[n]?t[n].push(s):t[n]=[s]:t[n]=t[n]?t[n]+", "+s:s)}),t};function _n(e){let t=0,n=e.length;for(;t<n;){const s=e.charCodeAt(t);if(s!==9&&s!==32)break;t+=1}for(;n>t;){const s=e.charCodeAt(n-1);if(s!==9&&s!==32)break;n-=1}return t===0&&n===e.length?e:e.slice(t,n)}const Ln=new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+","g"),Dn=new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+","g");function $e(e,t){return c.isArray(e)?e.map(n=>$e(n,t)):_n(String(e).replace(t,""))}const Nn=e=>$e(e,Ln),Bn=e=>$e(e,Dn);function St(e){const t=Object.create(null);return c.forEach(e.toJSON(),(n,s)=>{t[s]=Bn(n)}),t}const tt=Symbol("internals");function re(e){return e&&String(e).trim().toLowerCase()}function ye(e){return e===!1||e==null?e:c.isArray(e)?e.map(ye):Nn(String(e))}function qn(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let s;for(;s=n.exec(e);)t[s[1]]=s[2];return t}const Un=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function _e(e,t,n,s,r){if(c.isFunction(s))return s.call(this,t,n);if(r&&(t=n),!!c.isString(t)){if(c.isString(s))return t.indexOf(s)!==-1;if(c.isRegExp(s))return s.test(t)}}function Fn(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,s)=>n.toUpperCase()+s)}function Mn(e,t){const n=c.toCamelCase(" "+t);["get","set","has"].forEach(s=>{Object.defineProperty(e,s+n,{__proto__:null,value:function(r,o,i){return this[s].call(this,t,r,o,i)},configurable:!0})})}let T=class{constructor(t){t&&this.set(t)}set(t,n,s){const r=this;function o(a,l,u){const d=re(l);if(!d)throw new Error("header name must be a non-empty string");const m=c.findKey(r,d);(!m||r[m]===void 0||u===!0||u===void 0&&r[m]!==!1)&&(r[m||l]=ye(a))}const i=(a,l)=>c.forEach(a,(u,d)=>o(u,d,l));if(c.isPlainObject(t)||t instanceof this.constructor)i(t,n);else if(c.isString(t)&&(t=t.trim())&&!Un(t))i(kn(t),n);else if(c.isObject(t)&&c.isIterable(t)){let a={},l,u;for(const d of t){if(!c.isArray(d))throw TypeError("Object iterator must return a key-value pair");a[u=d[0]]=(l=a[u])?c.isArray(l)?[...l,d[1]]:[l,d[1]]:d[1]}i(a,n)}else t!=null&&o(n,t,s);return this}get(t,n){if(t=re(t),t){const s=c.findKey(this,t);if(s){const r=this[s];if(!n)return r;if(n===!0)return qn(r);if(c.isFunction(n))return n.call(this,r,s);if(c.isRegExp(n))return n.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=re(t),t){const s=c.findKey(this,t);return!!(s&&this[s]!==void 0&&(!n||_e(this,this[s],s,n)))}return!1}delete(t,n){const s=this;let r=!1;function o(i){if(i=re(i),i){const a=c.findKey(s,i);a&&(!n||_e(s,s[a],a,n))&&(delete s[a],r=!0)}}return c.isArray(t)?t.forEach(o):o(t),r}clear(t){const n=Object.keys(this);let s=n.length,r=!1;for(;s--;){const o=n[s];(!t||_e(this,this[o],o,t,!0))&&(delete this[o],r=!0)}return r}normalize(t){const n=this,s={};return c.forEach(this,(r,o)=>{const i=c.findKey(s,o);if(i){n[i]=ye(r),delete n[o];return}const a=t?Fn(o):String(o).trim();a!==o&&delete n[o],n[a]=ye(r),s[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return c.forEach(this,(s,r)=>{s!=null&&s!==!1&&(n[r]=t&&c.isArray(s)?s.join(", "):s)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const s=new this(t);return n.forEach(r=>s.set(r)),s}static accessor(t){const s=(this[tt]=this[tt]={accessors:{}}).accessors,r=this.prototype;function o(i){const a=re(i);s[a]||(Mn(r,i),s[a]=!0)}return c.isArray(t)?t.forEach(o):o(t),this}};T.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);c.reduceDescriptors(T.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(s){this[n]=s}}});c.freezeMethods(T);const In="[REDACTED ****]";function $n(e){if(c.hasOwnProp(e,"toJSON"))return!0;let t=Object.getPrototypeOf(e);for(;t&&t!==Object.prototype;){if(c.hasOwnProp(t,"toJSON"))return!0;t=Object.getPrototypeOf(t)}return!1}function jn(e,t){const n=new Set(t.map(o=>String(o).toLowerCase())),s=[],r=o=>{if(o===null||typeof o!="object"||c.isBuffer(o))return o;if(s.indexOf(o)!==-1)return;o instanceof T&&(o=o.toJSON()),s.push(o);let i;if(c.isArray(o))i=[],o.forEach((a,l)=>{const u=r(a);c.isUndefined(u)||(i[l]=u)});else{if(!c.isPlainObject(o)&&$n(o))return s.pop(),o;i=Object.create(null);for(const[a,l]of Object.entries(o)){const u=n.has(a.toLowerCase())?In:r(l);c.isUndefined(u)||(i[a]=u)}}return s.pop(),i};return r(e)}let h=class Rt extends Error{static from(t,n,s,r,o,i){const a=new Rt(t.message,n||t.code,s,r,o);return a.cause=t,a.name=t.name,t.status!=null&&a.status==null&&(a.status=t.status),i&&Object.assign(a,i),a}constructor(t,n,s,r,o){super(t),Object.defineProperty(this,"message",{__proto__:null,value:t,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,n&&(this.code=n),s&&(this.config=s),r&&(this.request=r),o&&(this.response=o,this.status=o.status)}toJSON(){const t=this.config,n=t&&c.hasOwnProp(t,"redact")?t.redact:void 0,s=c.isArray(n)&&n.length>0?jn(t,n):c.toJSONObject(t);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:s,code:this.code,status:this.status}}};h.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";h.ERR_BAD_OPTION="ERR_BAD_OPTION";h.ECONNABORTED="ECONNABORTED";h.ETIMEDOUT="ETIMEDOUT";h.ECONNREFUSED="ECONNREFUSED";h.ERR_NETWORK="ERR_NETWORK";h.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";h.ERR_DEPRECATED="ERR_DEPRECATED";h.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";h.ERR_BAD_REQUEST="ERR_BAD_REQUEST";h.ERR_CANCELED="ERR_CANCELED";h.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";h.ERR_INVALID_URL="ERR_INVALID_URL";h.ERR_FORM_DATA_DEPTH_EXCEEDED="ERR_FORM_DATA_DEPTH_EXCEEDED";const Hn=null;function Fe(e){return c.isPlainObject(e)||c.isArray(e)}function Ct(e){return c.endsWith(e,"[]")?e.slice(0,-2):e}function Le(e,t,n){return e?e.concat(t).map(function(r,o){return r=Ct(r),!n&&o?"["+r+"]":r}).join(n?".":""):t}function Vn(e){return c.isArray(e)&&!e.some(Fe)}const zn=c.toFlatObject(c,{},null,function(t){return/^is[A-Z]/.test(t)});function Pe(e,t,n){if(!c.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=c.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(f,g){return!c.isUndefined(g[f])});const s=n.metaTokens,r=n.visitor||m,o=n.dots,i=n.indexes,a=n.Blob||typeof Blob<"u"&&Blob,l=n.maxDepth===void 0?100:n.maxDepth,u=a&&c.isSpecCompliantForm(t);if(!c.isFunction(r))throw new TypeError("visitor must be a function");function d(p){if(p===null)return"";if(c.isDate(p))return p.toISOString();if(c.isBoolean(p))return p.toString();if(!u&&c.isBlob(p))throw new h("Blob is not supported. Use a Buffer instead.");return c.isArrayBuffer(p)||c.isTypedArray(p)?u&&typeof Blob=="function"?new Blob([p]):Buffer.from(p):p}function m(p,f,g){let R=p;if(c.isReactNative(t)&&c.isReactNativeBlob(p))return t.append(Le(g,f,o),d(p)),!1;if(p&&!g&&typeof p=="object"){if(c.endsWith(f,"{}"))f=s?f:f.slice(0,-2),p=JSON.stringify(p);else if(c.isArray(p)&&Vn(p)||(c.isFileList(p)||c.endsWith(f,"[]"))&&(R=c.toArray(p)))return f=Ct(f),R.forEach(function(E,k){!(c.isUndefined(E)||E===null)&&t.append(i===!0?Le([f],k,o):i===null?f:f+"[]",d(E))}),!1}return Fe(p)?!0:(t.append(Le(g,f,o),d(p)),!1)}const y=[],b=Object.assign(zn,{defaultVisitor:m,convertValue:d,isVisitable:Fe});function w(p,f,g=0){if(!c.isUndefined(p)){if(g>l)throw new h("Object is too deeply nested ("+g+" levels). Max depth: "+l,h.ERR_FORM_DATA_DEPTH_EXCEEDED);if(y.indexOf(p)!==-1)throw Error("Circular reference detected in "+f.join("."));y.push(p),c.forEach(p,function(v,E){(!(c.isUndefined(v)||v===null)&&r.call(t,v,c.isString(E)?E.trim():E,f,b))===!0&&w(v,f?f.concat(E):[E],g+1)}),y.pop()}}if(!c.isObject(e))throw new TypeError("data must be an object");return w(e),t}function nt(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"};return encodeURIComponent(e).replace(/[!'()~]|%20/g,function(s){return t[s]})}function je(e,t){this._pairs=[],e&&Pe(e,this,t)}const At=je.prototype;At.append=function(t,n){this._pairs.push([t,n])};At.toString=function(t){const n=t?function(s){return t.call(this,s,nt)}:nt;return this._pairs.map(function(r){return n(r[0])+"="+n(r[1])},"").join("&")};function Kn(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Pt(e,t,n){if(!t)return e;const s=n&&n.encode||Kn,r=c.isFunction(n)?{serialize:n}:n,o=r&&r.serialize;let i;if(o?i=o(t,r):i=c.isURLSearchParams(t)?t.toString():new je(t,r).toString(s),i){const a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class st{constructor(){this.handlers=[]}use(t,n,s){return this.handlers.push({fulfilled:t,rejected:n,synchronous:s?s.synchronous:!1,runWhen:s?s.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){c.forEach(this.handlers,function(s){s!==null&&t(s)})}}const He={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0},Jn=typeof URLSearchParams<"u"?URLSearchParams:je,Wn=typeof FormData<"u"?FormData:null,Xn=typeof Blob<"u"?Blob:null,Gn={isBrowser:!0,classes:{URLSearchParams:Jn,FormData:Wn,Blob:Xn},protocols:["http","https","file","blob","url","data"]},Ve=typeof window<"u"&&typeof document<"u",Me=typeof navigator=="object"&&navigator||void 0,Qn=Ve&&(!Me||["ReactNative","NativeScript","NS"].indexOf(Me.product)<0),Yn=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Zn=Ve&&window.location.href||"http://localhost",es=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Ve,hasStandardBrowserEnv:Qn,hasStandardBrowserWebWorkerEnv:Yn,navigator:Me,origin:Zn},Symbol.toStringTag,{value:"Module"})),O={...es,...Gn};function ts(e,t){return Pe(e,new O.classes.URLSearchParams,{visitor:function(n,s,r,o){return O.isNode&&c.isBuffer(n)?(this.append(s,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)},...t})}function ns(e){return c.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function ss(e){const t={},n=Object.keys(e);let s;const r=n.length;let o;for(s=0;s<r;s++)o=n[s],t[o]=e[o];return t}function Ot(e){function t(n,s,r,o){let i=n[o++];if(i==="__proto__")return!0;const a=Number.isFinite(+i),l=o>=n.length;return i=!i&&c.isArray(r)?r.length:i,l?(c.hasOwnProp(r,i)?r[i]=c.isArray(r[i])?r[i].concat(s):[r[i],s]:r[i]=s,!a):((!c.hasOwnProp(r,i)||!c.isObject(r[i]))&&(r[i]=[]),t(n,s,r[i],o)&&c.isArray(r[i])&&(r[i]=ss(r[i])),!a)}if(c.isFormData(e)&&c.isFunction(e.entries)){const n={};return c.forEachEntry(e,(s,r)=>{t(ns(s),r,n,0)}),n}return null}const Q=(e,t)=>e!=null&&c.hasOwnProp(e,t)?e[t]:void 0;function rs(e,t,n){if(c.isString(e))try{return(t||JSON.parse)(e),c.trim(e)}catch(s){if(s.name!=="SyntaxError")throw s}return(n||JSON.stringify)(e)}const le={transitional:He,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const s=n.getContentType()||"",r=s.indexOf("application/json")>-1,o=c.isObject(t);if(o&&c.isHTMLForm(t)&&(t=new FormData(t)),c.isFormData(t))return r?JSON.stringify(Ot(t)):t;if(c.isArrayBuffer(t)||c.isBuffer(t)||c.isStream(t)||c.isFile(t)||c.isBlob(t)||c.isReadableStream(t))return t;if(c.isArrayBufferView(t))return t.buffer;if(c.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(o){const l=Q(this,"formSerializer");if(s.indexOf("application/x-www-form-urlencoded")>-1)return ts(t,l).toString();if((a=c.isFileList(t))||s.indexOf("multipart/form-data")>-1){const u=Q(this,"env"),d=u&&u.FormData;return Pe(a?{"files[]":t}:t,d&&new d,l)}}return o||r?(n.setContentType("application/json",!1),rs(t)):t}],transformResponse:[function(t){const n=Q(this,"transitional")||le.transitional,s=n&&n.forcedJSONParsing,r=Q(this,"responseType"),o=r==="json";if(c.isResponse(t)||c.isReadableStream(t))return t;if(t&&c.isString(t)&&(s&&!r||o)){const a=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t,Q(this,"parseReviver"))}catch(l){if(a)throw l.name==="SyntaxError"?h.from(l,h.ERR_BAD_RESPONSE,this,null,Q(this,"response")):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:O.classes.FormData,Blob:O.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};c.forEach(["delete","get","head","post","put","patch","query"],e=>{le.headers[e]={}});function De(e,t){const n=this||le,s=t||n,r=T.from(s.headers);let o=s.data;return c.forEach(e,function(a){o=a.call(n,o,r.normalize(),t?t.status:void 0)}),r.normalize(),o}function Tt(e){return!!(e&&e.__CANCEL__)}let de=class extends h{constructor(t,n,s){super(t??"canceled",h.ERR_CANCELED,n,s),this.name="CanceledError",this.__CANCEL__=!0}};function xt(e,t,n){const s=n.config.validateStatus;!n.status||!s||s(n.status)?e(n):t(new h("Request failed with status code "+n.status,n.status>=400&&n.status<500?h.ERR_BAD_REQUEST:h.ERR_BAD_RESPONSE,n.config,n.request,n))}function os(e){const t=/^([-+\w]{1,25}):(?:\/\/)?/.exec(e);return t&&t[1]||""}function is(e,t){e=e||10;const n=new Array(e),s=new Array(e);let r=0,o=0,i;return t=t!==void 0?t:1e3,function(l){const u=Date.now(),d=s[o];i||(i=u),n[r]=l,s[r]=u;let m=o,y=0;for(;m!==r;)y+=n[m++],m=m%e;if(r=(r+1)%e,r===o&&(o=(o+1)%e),u-i<t)return;const b=d&&u-d;return b?Math.round(y*1e3/b):void 0}}function as(e,t){let n=0,s=1e3/t,r,o;const i=(u,d=Date.now())=>{n=d,r=null,o&&(clearTimeout(o),o=null),e(...u)};return[(...u)=>{const d=Date.now(),m=d-n;m>=s?i(u,d):(r=u,o||(o=setTimeout(()=>{o=null,i(r)},s-m)))},()=>r&&i(r)]}const we=(e,t,n=3)=>{let s=0;const r=is(50,250);return as(o=>{if(!o||typeof o.loaded!="number")return;const i=o.loaded,a=o.lengthComputable?o.total:void 0,l=a!=null?Math.min(i,a):i,u=Math.max(0,l-s),d=r(u);s=Math.max(s,l);const m={loaded:l,total:a,progress:a?l/a:void 0,bytes:u,rate:d||void 0,estimated:d&&a?(a-l)/d:void 0,event:o,lengthComputable:a!=null,[t?"download":"upload"]:!0};e(m)},n)},rt=(e,t)=>{const n=e!=null;return[s=>t[0]({lengthComputable:n,total:e,loaded:s}),t[1]]},ot=e=>(...t)=>c.asap(()=>e(...t)),cs=O.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,O.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(O.origin),O.navigator&&/(msie|trident)/i.test(O.navigator.userAgent)):()=>!0,ls=O.hasStandardBrowserEnv?{write(e,t,n,s,r,o,i){if(typeof document>"u")return;const a=[`${e}=${encodeURIComponent(t)}`];c.isNumber(n)&&a.push(`expires=${new Date(n).toUTCString()}`),c.isString(s)&&a.push(`path=${s}`),c.isString(r)&&a.push(`domain=${r}`),o===!0&&a.push("secure"),c.isString(i)&&a.push(`SameSite=${i}`),document.cookie=a.join("; ")},read(e){if(typeof document>"u")return null;const t=document.cookie.split(";");for(let n=0;n<t.length;n++){const s=t[n].replace(/^\s+/,""),r=s.indexOf("=");if(r!==-1&&s.slice(0,r)===e)return decodeURIComponent(s.slice(r+1))}return null},remove(e){this.write(e,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function ds(e){return typeof e!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function us(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function kt(e,t,n){let s=!ds(t);return e&&(s||n===!1)?us(e,t):t}const it=e=>e instanceof T?{...e}:e;function W(e,t){t=t||{};const n=Object.create(null);Object.defineProperty(n,"hasOwnProperty",{__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function s(u,d,m,y){return c.isPlainObject(u)&&c.isPlainObject(d)?c.merge.call({caseless:y},u,d):c.isPlainObject(d)?c.merge({},d):c.isArray(d)?d.slice():d}function r(u,d,m,y){if(c.isUndefined(d)){if(!c.isUndefined(u))return s(void 0,u,m,y)}else return s(u,d,m,y)}function o(u,d){if(!c.isUndefined(d))return s(void 0,d)}function i(u,d){if(c.isUndefined(d)){if(!c.isUndefined(u))return s(void 0,u)}else return s(void 0,d)}function a(u,d,m){if(c.hasOwnProp(t,m))return s(u,d);if(c.hasOwnProp(e,m))return s(void 0,u)}const l={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,allowedSocketPaths:i,responseEncoding:i,validateStatus:a,headers:(u,d,m)=>r(it(u),it(d),m,!0)};return c.forEach(Object.keys({...e,...t}),function(d){if(d==="__proto__"||d==="constructor"||d==="prototype")return;const m=c.hasOwnProp(l,d)?l[d]:r,y=c.hasOwnProp(e,d)?e[d]:void 0,b=c.hasOwnProp(t,d)?t[d]:void 0,w=m(y,b,d);c.isUndefined(w)&&m!==a||(n[d]=w)}),n}const fs=["content-type","content-length"];function ps(e,t,n){if(n!=="content-only"){e.set(t);return}Object.entries(t).forEach(([s,r])=>{fs.includes(s.toLowerCase())&&e.set(s,r)})}const hs=e=>encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi,(t,n)=>String.fromCharCode(parseInt(n,16))),_t=e=>{const t=W({},e),n=y=>c.hasOwnProp(t,y)?t[y]:void 0,s=n("data");let r=n("withXSRFToken");const o=n("xsrfHeaderName"),i=n("xsrfCookieName");let a=n("headers");const l=n("auth"),u=n("baseURL"),d=n("allowAbsoluteUrls"),m=n("url");if(t.headers=a=T.from(a),t.url=Pt(kt(u,m,d),e.params,e.paramsSerializer),l&&a.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?hs(l.password):""))),c.isFormData(s)&&(O.hasStandardBrowserEnv||O.hasStandardBrowserWebWorkerEnv?a.setContentType(void 0):c.isFunction(s.getHeaders)&&ps(a,s.getHeaders(),n("formDataHeaderPolicy"))),O.hasStandardBrowserEnv&&(c.isFunction(r)&&(r=r(t)),r===!0||r==null&&cs(t.url))){const b=o&&i&&ls.read(i);b&&a.set(o,b)}return t},ms=typeof XMLHttpRequest<"u",gs=ms&&function(e){return new Promise(function(n,s){const r=_t(e);let o=r.data;const i=T.from(r.headers).normalize();let{responseType:a,onUploadProgress:l,onDownloadProgress:u}=r,d,m,y,b,w;function p(){b&&b(),w&&w(),r.cancelToken&&r.cancelToken.unsubscribe(d),r.signal&&r.signal.removeEventListener("abort",d)}let f=new XMLHttpRequest;f.open(r.method.toUpperCase(),r.url,!0),f.timeout=r.timeout;function g(){if(!f)return;const v=T.from("getAllResponseHeaders"in f&&f.getAllResponseHeaders()),k={data:!a||a==="text"||a==="json"?f.responseText:f.response,status:f.status,statusText:f.statusText,headers:v,config:e,request:f};xt(function(te){n(te),p()},function(te){s(te),p()},k),f=null}"onloadend"in f?f.onloadend=g:f.onreadystatechange=function(){!f||f.readyState!==4||f.status===0&&!(f.responseURL&&f.responseURL.startsWith("file:"))||setTimeout(g)},f.onabort=function(){f&&(s(new h("Request aborted",h.ECONNABORTED,e,f)),p(),f=null)},f.onerror=function(E){const k=E&&E.message?E.message:"Network Error",j=new h(k,h.ERR_NETWORK,e,f);j.event=E||null,s(j),p(),f=null},f.ontimeout=function(){let E=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const k=r.transitional||He;r.timeoutErrorMessage&&(E=r.timeoutErrorMessage),s(new h(E,k.clarifyTimeoutError?h.ETIMEDOUT:h.ECONNABORTED,e,f)),p(),f=null},o===void 0&&i.setContentType(null),"setRequestHeader"in f&&c.forEach(St(i),function(E,k){f.setRequestHeader(k,E)}),c.isUndefined(r.withCredentials)||(f.withCredentials=!!r.withCredentials),a&&a!=="json"&&(f.responseType=r.responseType),u&&([y,w]=we(u,!0),f.addEventListener("progress",y)),l&&f.upload&&([m,b]=we(l),f.upload.addEventListener("progress",m),f.upload.addEventListener("loadend",b)),(r.cancelToken||r.signal)&&(d=v=>{f&&(s(!v||v.type?new de(null,e,f):v),f.abort(),p(),f=null)},r.cancelToken&&r.cancelToken.subscribe(d),r.signal&&(r.signal.aborted?d():r.signal.addEventListener("abort",d)));const R=os(r.url);if(R&&!O.protocols.includes(R)){s(new h("Unsupported protocol "+R+":",h.ERR_BAD_REQUEST,e));return}f.send(o||null)})},ys=(e,t)=>{if(e=e?e.filter(Boolean):[],!t&&!e.length)return;const n=new AbortController;let s=!1;const r=function(l){if(!s){s=!0,i();const u=l instanceof Error?l:this.reason;n.abort(u instanceof h?u:new de(u instanceof Error?u.message:u))}};let o=t&&setTimeout(()=>{o=null,r(new h(`timeout of ${t}ms exceeded`,h.ETIMEDOUT))},t);const i=()=>{e&&(o&&clearTimeout(o),o=null,e.forEach(l=>{l.unsubscribe?l.unsubscribe(r):l.removeEventListener("abort",r)}),e=null)};e.forEach(l=>l.addEventListener("abort",r));const{signal:a}=n;return a.unsubscribe=()=>c.asap(i),a},bs=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let s=0,r;for(;s<n;)r=s+t,yield e.slice(s,r),s=r},ws=async function*(e,t){for await(const n of vs(e))yield*bs(n,t)},vs=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:s}=await t.read();if(n)break;yield s}}finally{await t.cancel()}},at=(e,t,n,s)=>{const r=ws(e,t);let o=0,i,a=l=>{i||(i=!0,s&&s(l))};return new ReadableStream({async pull(l){try{const{done:u,value:d}=await r.next();if(u){a(),l.close();return}let m=d.byteLength;if(n){let y=o+=m;n(y)}l.enqueue(new Uint8Array(d))}catch(u){throw a(u),u}},cancel(l){return a(l),r.return()}},{highWaterMark:2})};function Es(e){if(!e||typeof e!="string"||!e.startsWith("data:"))return 0;const t=e.indexOf(",");if(t<0)return 0;const n=e.slice(5,t),s=e.slice(t+1);if(/;base64/i.test(n)){let i=s.length;const a=s.length;for(let b=0;b<a;b++)if(s.charCodeAt(b)===37&&b+2<a){const w=s.charCodeAt(b+1),p=s.charCodeAt(b+2);(w>=48&&w<=57||w>=65&&w<=70||w>=97&&w<=102)&&(p>=48&&p<=57||p>=65&&p<=70||p>=97&&p<=102)&&(i-=2,b+=2)}let l=0,u=a-1;const d=b=>b>=2&&s.charCodeAt(b-2)===37&&s.charCodeAt(b-1)===51&&(s.charCodeAt(b)===68||s.charCodeAt(b)===100);u>=0&&(s.charCodeAt(u)===61?(l++,u--):d(u)&&(l++,u-=3)),l===1&&u>=0&&(s.charCodeAt(u)===61||d(u))&&l++;const y=Math.floor(i/4)*3-(l||0);return y>0?y:0}if(typeof Buffer<"u"&&typeof Buffer.byteLength=="function")return Buffer.byteLength(s,"utf8");let o=0;for(let i=0,a=s.length;i<a;i++){const l=s.charCodeAt(i);if(l<128)o+=1;else if(l<2048)o+=2;else if(l>=55296&&l<=56319&&i+1<a){const u=s.charCodeAt(i+1);u>=56320&&u<=57343?(o+=4,i++):o+=3}else o+=3}return o}const ze="1.16.1",ct=64*1024,{isFunction:he}=c,lt=(e,...t)=>{try{return!!e(...t)}catch{return!1}},Ss=e=>{const t=c.global!==void 0&&c.global!==null?c.global:globalThis,{ReadableStream:n,TextEncoder:s}=t;e=c.merge.call({skipUndefined:!0},{Request:t.Request,Response:t.Response},e);const{fetch:r,Request:o,Response:i}=e,a=r?he(r):typeof fetch=="function",l=he(o),u=he(i);if(!a)return!1;const d=a&&he(n),m=a&&(typeof s=="function"?(g=>R=>g.encode(R))(new s):async g=>new Uint8Array(await new o(g).arrayBuffer())),y=l&&d&&lt(()=>{let g=!1;const R=new o(O.origin,{body:new n,method:"POST",get duplex(){return g=!0,"half"}}),v=R.headers.has("Content-Type");return R.body!=null&&R.body.cancel(),g&&!v}),b=u&&d&&lt(()=>c.isReadableStream(new i("").body)),w={stream:b&&(g=>g.body)};a&&["text","arrayBuffer","blob","formData","stream"].forEach(g=>{!w[g]&&(w[g]=(R,v)=>{let E=R&&R[g];if(E)return E.call(R);throw new h(`Response type '${g}' is not supported`,h.ERR_NOT_SUPPORT,v)})});const p=async g=>{if(g==null)return 0;if(c.isBlob(g))return g.size;if(c.isSpecCompliantForm(g))return(await new o(O.origin,{method:"POST",body:g}).arrayBuffer()).byteLength;if(c.isArrayBufferView(g)||c.isArrayBuffer(g))return g.byteLength;if(c.isURLSearchParams(g)&&(g=g+""),c.isString(g))return(await m(g)).byteLength},f=async(g,R)=>{const v=c.toFiniteNumber(g.getContentLength());return v??p(R)};return async g=>{let{url:R,method:v,data:E,signal:k,cancelToken:j,timeout:te,onDownloadProgress:Te,onUploadProgress:We,responseType:F,headers:H,withCredentials:ue="same-origin",fetchOptions:Xe,maxContentLength:N,maxBodyLength:xe}=_t(g);const ne=c.isNumber(N)&&N>-1,qt=c.isNumber(xe)&&xe>-1;let Ge=r||fetch;F=F?(F+"").toLowerCase():"text";let M=ys([k,j&&j.toAbortSignal()],te),_=null;const V=M&&M.unsubscribe&&(()=>{M.unsubscribe()});let Qe;try{if(ne&&typeof R=="string"&&R.startsWith("data:")&&Es(R)>N)throw new h("maxContentLength size of "+N+" exceeded",h.ERR_BAD_RESPONSE,g,_);if(qt&&v!=="get"&&v!=="head"){const C=await f(H,E);if(typeof C=="number"&&isFinite(C)&&C>xe)throw new h("Request body larger than maxBodyLength limit",h.ERR_BAD_REQUEST,g,_)}if(We&&y&&v!=="get"&&v!=="head"&&(Qe=await f(H,E))!==0){let C=new o(R,{method:"POST",body:E,duplex:"half"}),G;if(c.isFormData(E)&&(G=C.headers.get("content-type"))&&H.setContentType(G),C.body){const[fe,pe]=rt(Qe,we(ot(We)));E=at(C.body,ct,fe,pe)}}c.isString(ue)||(ue=ue?"include":"omit");const P=l&&"credentials"in o.prototype;if(c.isFormData(E)){const C=H.getContentType();C&&/^multipart\/form-data/i.test(C)&&!/boundary=/i.test(C)&&H.delete("content-type")}H.set("User-Agent","axios/"+ze,!1);const I={...Xe,signal:M,method:v.toUpperCase(),headers:St(H.normalize()),body:E,duplex:"half",credentials:P?ue:void 0};_=l&&new o(R,I);let B=await(l?Ge(_,Xe):Ge(R,I));if(ne){const C=c.toFiniteNumber(B.headers.get("content-length"));if(C!=null&&C>N)throw new h("maxContentLength size of "+N+" exceeded",h.ERR_BAD_RESPONSE,g,_)}const ke=b&&(F==="stream"||F==="response");if(b&&B.body&&(Te||ne||ke&&V)){const C={};["status","statusText","headers"].forEach(se=>{C[se]=B[se]});const G=c.toFiniteNumber(B.headers.get("content-length")),[fe,pe]=Te&&rt(G,we(ot(Te),!0))||[];let Ye=0;const Ut=se=>{if(ne&&(Ye=se,Ye>N))throw new h("maxContentLength size of "+N+" exceeded",h.ERR_BAD_RESPONSE,g,_);fe&&fe(se)};B=new i(at(B.body,ct,Ut,()=>{pe&&pe(),V&&V()}),C)}F=F||"text";let q=await w[c.findKey(w,F)||"text"](B,g);if(ne&&!b&&!ke){let C;if(q!=null&&(typeof q.byteLength=="number"?C=q.byteLength:typeof q.size=="number"?C=q.size:typeof q=="string"&&(C=typeof s=="function"?new s().encode(q).byteLength:q.length)),typeof C=="number"&&C>N)throw new h("maxContentLength size of "+N+" exceeded",h.ERR_BAD_RESPONSE,g,_)}return!ke&&V&&V(),await new Promise((C,G)=>{xt(C,G,{data:q,headers:T.from(B.headers),status:B.status,statusText:B.statusText,config:g,request:_})})}catch(P){if(V&&V(),M&&M.aborted&&M.reason instanceof h){const I=M.reason;throw I.config=g,_&&(I.request=_),P!==I&&(I.cause=P),I}throw P&&P.name==="TypeError"&&/Load failed|fetch/i.test(P.message)?Object.assign(new h("Network Error",h.ERR_NETWORK,g,_,P&&P.response),{cause:P.cause||P}):h.from(P,P&&P.code,g,_,P&&P.response)}}},Rs=new Map,Lt=e=>{let t=e&&e.env||{};const{fetch:n,Request:s,Response:r}=t,o=[s,r,n];let i=o.length,a=i,l,u,d=Rs;for(;a--;)l=o[a],u=d.get(l),u===void 0&&d.set(l,u=a?new Map:Ss(t)),d=u;return u};Lt();const Ke={http:Hn,xhr:gs,fetch:{get:Lt}};c.forEach(Ke,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{__proto__:null,value:t})}catch{}Object.defineProperty(e,"adapterName",{__proto__:null,value:t})}});const dt=e=>`- ${e}`,Cs=e=>c.isFunction(e)||e===null||e===!1;function As(e,t){e=c.isArray(e)?e:[e];const{length:n}=e;let s,r;const o={};for(let i=0;i<n;i++){s=e[i];let a;if(r=s,!Cs(s)&&(r=Ke[(a=String(s)).toLowerCase()],r===void 0))throw new h(`Unknown adapter '${a}'`);if(r&&(c.isFunction(r)||(r=r.get(t))))break;o[a||"#"+i]=r}if(!r){const i=Object.entries(o).map(([l,u])=>`adapter ${l} `+(u===!1?"is not supported by the environment":"is not available in the build"));let a=n?i.length>1?`since :
`+i.map(dt).join(`
`):" "+dt(i[0]):"as no adapter specified";throw new h("There is no suitable adapter to dispatch the request "+a,"ERR_NOT_SUPPORT")}return r}const Dt={getAdapter:As,adapters:Ke};function Ne(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new de(null,e)}function ut(e){return Ne(e),e.headers=T.from(e.headers),e.data=De.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Dt.getAdapter(e.adapter||le.adapter,e)(e).then(function(s){Ne(e),e.response=s;try{s.data=De.call(e,e.transformResponse,s)}finally{delete e.response}return s.headers=T.from(s.headers),s},function(s){if(!Tt(s)&&(Ne(e),s&&s.response)){e.response=s.response;try{s.response.data=De.call(e,e.transformResponse,s.response)}finally{delete e.response}s.response.headers=T.from(s.response.headers)}return Promise.reject(s)})}const Oe={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Oe[e]=function(s){return typeof s===e||"a"+(t<1?"n ":" ")+e}});const ft={};Oe.transitional=function(t,n,s){function r(o,i){return"[Axios v"+ze+"] Transitional option '"+o+"'"+i+(s?". "+s:"")}return(o,i,a)=>{if(t===!1)throw new h(r(i," has been removed"+(n?" in "+n:"")),h.ERR_DEPRECATED);return n&&!ft[i]&&(ft[i]=!0,console.warn(r(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,a):!0}};Oe.spelling=function(t){return(n,s)=>(console.warn(`${s} is likely a misspelling of ${t}`),!0)};function Ps(e,t,n){if(typeof e!="object")throw new h("options must be an object",h.ERR_BAD_OPTION_VALUE);const s=Object.keys(e);let r=s.length;for(;r-- >0;){const o=s[r],i=Object.prototype.hasOwnProperty.call(t,o)?t[o]:void 0;if(i){const a=e[o],l=a===void 0||i(a,o,e);if(l!==!0)throw new h("option "+o+" must be "+l,h.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new h("Unknown option "+o,h.ERR_BAD_OPTION)}}const be={assertOptions:Ps,validators:Oe},L=be.validators;let J=class{constructor(t){this.defaults=t||{},this.interceptors={request:new st,response:new st}}async request(t,n){try{return await this._request(t,n)}catch(s){if(s instanceof Error){let r={};Error.captureStackTrace?Error.captureStackTrace(r):r=new Error;const o=(()=>{if(!r.stack)return"";const i=r.stack.indexOf(`
`);return i===-1?"":r.stack.slice(i+1)})();try{if(!s.stack)s.stack=o;else if(o){const i=o.indexOf(`
`),a=i===-1?-1:o.indexOf(`
`,i+1),l=a===-1?"":o.slice(a+1);String(s.stack).endsWith(l)||(s.stack+=`
`+o)}}catch{}}throw s}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=W(this.defaults,n);const{transitional:s,paramsSerializer:r,headers:o}=n;s!==void 0&&be.assertOptions(s,{silentJSONParsing:L.transitional(L.boolean),forcedJSONParsing:L.transitional(L.boolean),clarifyTimeoutError:L.transitional(L.boolean),legacyInterceptorReqResOrdering:L.transitional(L.boolean)},!1),r!=null&&(c.isFunction(r)?n.paramsSerializer={serialize:r}:be.assertOptions(r,{encode:L.function,serialize:L.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),be.assertOptions(n,{baseUrl:L.spelling("baseURL"),withXsrfToken:L.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=o&&c.merge(o.common,o[n.method]);o&&c.forEach(["delete","get","head","post","put","patch","query","common"],w=>{delete o[w]}),n.headers=T.concat(i,o);const a=[];let l=!0;this.interceptors.request.forEach(function(p){if(typeof p.runWhen=="function"&&p.runWhen(n)===!1)return;l=l&&p.synchronous;const f=n.transitional||He;f&&f.legacyInterceptorReqResOrdering?a.unshift(p.fulfilled,p.rejected):a.push(p.fulfilled,p.rejected)});const u=[];this.interceptors.response.forEach(function(p){u.push(p.fulfilled,p.rejected)});let d,m=0,y;if(!l){const w=[ut.bind(this),void 0];for(w.unshift(...a),w.push(...u),y=w.length,d=Promise.resolve(n);m<y;)d=d.then(w[m++],w[m++]);return d}y=a.length;let b=n;for(;m<y;){const w=a[m++],p=a[m++];try{b=w(b)}catch(f){p.call(this,f);break}}try{d=ut.call(this,b)}catch(w){return Promise.reject(w)}for(m=0,y=u.length;m<y;)d=d.then(u[m++],u[m++]);return d}getUri(t){t=W(this.defaults,t);const n=kt(t.baseURL,t.url,t.allowAbsoluteUrls);return Pt(n,t.params,t.paramsSerializer)}};c.forEach(["delete","get","head","options"],function(t){J.prototype[t]=function(n,s){return this.request(W(s||{},{method:t,url:n,data:(s||{}).data}))}});c.forEach(["post","put","patch","query"],function(t){function n(s){return function(o,i,a){return this.request(W(a||{},{method:t,headers:s?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}J.prototype[t]=n(),t!=="query"&&(J.prototype[t+"Form"]=n(!0))});let Os=class Nt{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const s=this;this.promise.then(r=>{if(!s._listeners)return;let o=s._listeners.length;for(;o-- >0;)s._listeners[o](r);s._listeners=null}),this.promise.then=r=>{let o;const i=new Promise(a=>{s.subscribe(a),o=a}).then(r);return i.cancel=function(){s.unsubscribe(o)},i},t(function(o,i,a){s.reason||(s.reason=new de(o,i,a),n(s.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=s=>{t.abort(s)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new Nt(function(r){t=r}),cancel:t}}};function Ts(e){return function(n){return e.apply(null,n)}}function xs(e){return c.isObject(e)&&e.isAxiosError===!0}const Ie={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Ie).forEach(([e,t])=>{Ie[t]=e});function Bt(e){const t=new J(e),n=ht(J.prototype.request,t);return c.extend(n,J.prototype,t,{allOwnKeys:!0}),c.extend(n,t,null,{allOwnKeys:!0}),n.create=function(r){return Bt(W(e,r))},n}const A=Bt(le);A.Axios=J;A.CanceledError=de;A.CancelToken=Os;A.isCancel=Tt;A.VERSION=ze;A.toFormData=Pe;A.AxiosError=h;A.Cancel=A.CanceledError;A.all=function(t){return Promise.all(t)};A.spread=Ts;A.isAxiosError=xs;A.mergeConfig=W;A.AxiosHeaders=T;A.formToJSON=e=>Ot(c.isHTMLForm(e)?new FormData(e):e);A.getAdapter=Dt.getAdapter;A.HttpStatusCode=Ie;A.default=A;const{Axios:Ks,AxiosError:Js,CanceledError:Ws,isCancel:Xs,CancelToken:Gs,VERSION:Qs,all:Ys,Cancel:Zs,isAxiosError:er,spread:tr,toFormData:nr,AxiosHeaders:sr,HttpStatusCode:rr,formToJSON:or,getAdapter:ir,mergeConfig:ar,create:cr}=A;class ve extends Error{constructor(n,s,r,o){super(n);S(this,"status");S(this,"validationErrors");S(this,"originalError");this.name="ApiError",this.status=s,this.validationErrors=r,this.originalError=o,Object.setPrototypeOf(this,ve.prototype)}static fromAxiosError(n){var a,l;const s=((a=n.response)==null?void 0:a.status)||500,r=(l=n.response)==null?void 0:l.data;let o="An unexpected network error occurred.",i;return r?(o=r.message||o,i=r.errors):n.message&&(o=n.message),new ve(o,s,i,n)}}const ks="https://api.example.com/v1",_s=1e4,ee=A.create({baseURL:ks,timeout:_s,headers:{"Content-Type":"application/json",Accept:"application/json"}});ee.interceptors.request.use(e=>{const t=localStorage.getItem("aura_auth_token");return t&&e.headers&&(e.headers.Authorization=`Bearer ${JSON.parse(t)}`),e},e=>Promise.reject(e));ee.interceptors.response.use(e=>e,e=>{var t;return((t=e.response)==null?void 0:t.status)===401&&(localStorage.removeItem("aura_auth_token"),localStorage.removeItem("aura_user"),window.dispatchEvent(new Event("auth:logout"))),Promise.reject(ve.fromAxiosError(e))});const Ls={id:"usr_1",email:"admin@marufa.io",username:"admin_aura",role:"admin",createdAt:new Date().toISOString()};async function Ds(e,t){if("https://api.example.com/v1".includes("example.com")){if(await new Promise(r=>setTimeout(r,600)),e==="admin@marufa.io"&&t==="password123")return{success:!0,data:{user:Ls,token:"mock_jwt_token_abcdef123456"},message:"Login successful!"};throw new Error("Invalid email or password. Use: admin@marufa.io / password123")}return(await ee.post("/auth/login",{email:e,password:t})).data}class U{static set(t,n,s){try{const r=`${this.prefix}${t}`,o={value:n};s&&(o.expiry=Date.now()+s*1e3),localStorage.setItem(r,JSON.stringify(o))}catch(r){console.error(`[StorageService] Error writing key "${t}":`,r)}}static get(t,n){try{const s=`${this.prefix}${t}`,r=localStorage.getItem(s);if(!r)return n;const o=JSON.parse(r);return o.expiry&&Date.now()>o.expiry?(this.remove(t),n):o.value}catch(s){return console.error(`[StorageService] Error reading key "${t}":`,s),n}}static remove(t){try{const n=`${this.prefix}${t}`;localStorage.removeItem(n)}catch(n){console.error(`[StorageService] Error removing key "${t}":`,n)}}static clearNamespace(){try{const t=[];for(let n=0;n<localStorage.length;n++){const s=localStorage.key(n);s&&s.startsWith(this.prefix)&&t.push(s)}t.forEach(n=>localStorage.removeItem(n))}catch(t){console.error("[StorageService] Error clearing namespace:",t)}}}S(U,"prefix","aura_");class X{static async login(t,n){try{const s=await Ds(t,n),{user:r,token:o}=s.data;return U.set(this.userKey,r),U.set(this.tokenKey,o),window.dispatchEvent(new CustomEvent("auth:state-change",{detail:{isAuthenticated:!0}})),r}catch(s){throw console.error("[AuthService] Login failed:",s),s}}static logout(){U.remove(this.userKey),U.remove(this.tokenKey),window.dispatchEvent(new CustomEvent("auth:state-change",{detail:{isAuthenticated:!1}}))}static isAuthenticated(){const t=U.get(this.tokenKey,null),n=U.get(this.userKey,null);return t!==null&&n!==null}static getCurrentUser(){return U.get(this.userKey,null)}static getToken(){return U.get(this.tokenKey,null)}}S(X,"userKey","auth_user"),S(X,"tokenKey","auth_token");class Ns extends ${constructor(){super(...arguments);S(this,"emailInput");S(this,"passwordInput");S(this,"submitButton");S(this,"errorElement",null)}render(){return`
      <div class="login-wrapper">
        <div class="login-glow"></div>
        <div class="glass-card login-card animate-fade-in">
          <div class="login-header">
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
    `}afterMount(){var a,l,u,d,m,y;const n=(a=this.element)==null?void 0:a.querySelector("#email-field-container"),s=(l=this.element)==null?void 0:l.querySelector("#password-field-container"),r=(u=this.element)==null?void 0:u.querySelector("#submit-btn-container");this.errorElement=(d=this.element)==null?void 0:d.querySelector("#login-error-container"),this.emailInput=new z({label:"Email Address",type:"email",placeholder:"Enter your admin email",required:!0,id:"login-email",name:"email",value:"admin@marufa.io"}),this.passwordInput=new z({label:"Password",type:"password",placeholder:"Enter your password",required:!0,id:"login-password",name:"password",value:"password123"}),this.submitButton=new me({label:"Verify Credentials",type:"submit",variant:"primary",id:"login-submit"}),this.emailInput.mount(n),this.passwordInput.mount(s),this.submitButton.mount(r);const o=(m=this.element)==null?void 0:m.querySelector("#login-form");o==null||o.addEventListener("submit",b=>{this.handleLogin(b)});const i=(y=this.element)==null?void 0:y.querySelector(".btn-back-showroom");i&&i.addEventListener("click",()=>{window.dispatchEvent(new CustomEvent("app:navigate",{detail:{route:"storefront"}}))})}async handleLogin(n){if(n.preventDefault(),!this.errorElement)return;this.errorElement.innerHTML="";const s=this.emailInput.getValue(),r=this.passwordInput.getValue();if(!s||!r){this.showError("Both email and password fields are required.");return}try{this.submitButton.setProps({isLoading:!0}),await X.login(s,r)}catch(o){const i=o;this.showError(i.message||"Verification failed. Please check your credentials."),this.submitButton.setProps({isLoading:!1})}}showError(n){this.errorElement&&(this.errorElement.innerHTML=`
        <div class="alert alert-danger animate-fade-in">
          <span class="alert-icon">⚠️</span>
          <span class="alert-text">${n}</span>
        </div>
      `)}}class Be extends ${constructor(n){super();S(this,"props");this.props={color:"primary",...n}}render(){const{title:n,value:s,trend:r,trendType:o,icon:i,color:a}=this.props;let l="trend-neutral",u="•";return o==="up"?(l="trend-up",u="↑"):o==="down"&&(l="trend-down",u="↓"),`
      <div class="glass-card stats-card border-glow-${a} animate-fade-in">
        <div class="stats-card-header">
          <span class="stats-card-title">${n}</span>
          <div class="stats-card-icon icon-bg-${a}">${i}</div>
        </div>
        <div class="stats-card-body">
          <span class="stats-card-value">${s}</span>
          <div class="stats-card-trend ${l}">
            <span class="trend-icon">${u}</span>
            <span class="trend-text">${r}</span>
          </div>
        </div>
      </div>
    `}}function Je(e){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(e)}function Bs(e){try{const t=new Date(e);return new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"numeric"}).format(t)}catch{return"Invalid Date"}}class pt extends ${constructor(n){super();S(this,"props");this.props=n}render(){const{products:n,isLoading:s}=this.props;return s?`
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
        <td class="text-right font-semibold">${Je(o.price)}</td>
        <td class="text-right">
          <span class="stock-badge ${o.stock<15?"stock-low":"stock-ok"}">
            ${o.stock} units
          </span>
        </td>
        <td>${Bs(o.createdAt)}</td>
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
      `}afterMount(){this.props.onDeleteProduct&&this.element&&this.element.querySelectorAll(".btn-delete").forEach(s=>{s.addEventListener("click",r=>{r.stopPropagation();const o=s.dataset.id;o&&this.props.onDeleteProduct(o)})})}setProps(n){this.props={...this.props,...n},this.element&&this.mount(this.element)}}let Ee=[{id:"prod-1",name:"Compact Coffee Table",description:"Minimalist low-height coffee table with slide drawer and solid warm ashwood frame.",price:129,category:"Tables",stock:12,imageUrl:"https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=500&q=80",createdAt:new Date(Date.now()-5*24*60*60*1e3).toISOString()},{id:"prod-2",name:"Nordic Sideboard Cabinet",description:"Spacious natural birchwood cabinet with sleek structural sliding panels and gold highlights.",price:199,category:"Cabinets",stock:12,imageUrl:"https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=500&q=80",createdAt:new Date(Date.now()-3*24*60*60*1e3).toISOString()},{id:"prod-3",name:"Modern TV Console",description:"Low-profile media entertainment console featuring mesh wire storage and sleek oak shelves.",price:149,category:"Consoles",stock:8,imageUrl:"https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=500&q=80",createdAt:new Date(Date.now()-1*24*60*60*1e3).toISOString()},{id:"prod-4",name:"White Utility Cabinet",description:"Multi-functional structural locker with mesh doors and powder-coated steel hardware.",price:135,category:"Cabinets",stock:12,imageUrl:"https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=500&q=80",createdAt:new Date(Date.now()-6*24*60*60*1e3).toISOString()},{id:"prod-5",name:"Charcoal Sofa Bench",description:"Premium high-density foam daybed upholstered in luxurious organic slate wool textures.",price:295,category:"Sofas",stock:12,imageUrl:"https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=500&q=80",createdAt:new Date(Date.now()-12*60*60*1e3).toISOString()},{id:"prod-6",name:"Vertical Drawer Dresser",description:"Slim vertical wooden tallboy dresser with structural maple drawer rails and brass pulls.",price:159,category:"Dressers",stock:12,imageUrl:"https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=500&q=80",createdAt:new Date(Date.now()-15*24*60*60*1e3).toISOString()}];async function qs(e=1,t=10,n){if("https://api.example.com/v1".includes("example.com")){await new Promise(d=>setTimeout(d,500));let o=[...Ee];n&&(o=o.filter(d=>d.category.toLowerCase()===n.toLowerCase()));const i=(e-1)*t,a=i+t,l=o.slice(i,a),u=o.length;return{success:!0,data:{items:l,total:u,page:e,limit:t,totalPages:Math.ceil(u/t)}}}return(await ee.get("/products",{params:{page:e,limit:t,category:n}})).data}async function Us(e){if("https://api.example.com/v1".includes("example.com")){await new Promise(r=>setTimeout(r,600));const s={id:`prod-${Date.now()}`,name:e.name,description:e.description,price:e.price,category:e.category,stock:e.stock,imageUrl:e.imageUrl||"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",createdAt:new Date().toISOString()};return Ee.unshift(s),{success:!0,data:s,message:"Product created successfully!"}}return(await ee.post("/products",e)).data}async function Fs(e){return"https://api.example.com/v1".includes("example.com")?(await new Promise(s=>setTimeout(s,400)),Ee=Ee.filter(s=>s.id!==e),{success:!0,data:e,message:"Product deleted successfully!"}):(await ee.delete(`/products/${e}`)).data}class oe{static async getProducts(t=1,n=10,s){try{const r=await qs(t,n,s);return{items:r.data.items,total:r.data.total}}catch(r){throw console.error("[ProductService] Error getting products:",r),r}}static async addProduct(t){try{return(await Us(t)).data}catch(n){throw console.error("[ProductService] Error creating product:",n),n}}static async removeProduct(t){try{return(await Fs(t)).data}catch(n){throw console.error(`[ProductService] Error deleting product ${t}:`,n),n}}static calculateDashboardMetrics(t){if(!t.length)return{totalProducts:0,totalStockValue:0,lowStockCount:0,highestPricedItem:"N/A"};let n=0,s=0,r=0,o="N/A";return t.forEach(i=>{n+=i.price*i.stock,i.stock<15&&s++,i.price>r&&(r=i.price,o=i.name)}),{totalProducts:t.length,totalStockValue:parseFloat(n.toFixed(2)),lowStockCount:s,highestPricedItem:o}}}class Ms extends ${constructor(){super(...arguments);S(this,"products",[]);S(this,"statsCardsContainer");S(this,"tableContainer");S(this,"productTable");S(this,"addProductModal");S(this,"addProductButton");S(this,"saveProductButton");S(this,"cancelProductButton");S(this,"inputName");S(this,"inputCategory");S(this,"inputPrice");S(this,"inputStock");S(this,"inputDesc")}render(){const n=X.getCurrentUser();return`
      <div class="dashboard-wrapper animate-fade-in">
        <!-- Header -->
        <header class="dashboard-header glass-card">
          <div class="header-left">
            <h1 class="text-gradient">Marufa Control Center</h1>
            <p>Welcome back, <span class="username-highlight">${(n==null?void 0:n.username)||"Administrator"}</span></p>
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
    `}afterMount(){var o,i,a,l,u,d,m,y,b,w,p,f,g,R;this.statsCardsContainer=(o=this.element)==null?void 0:o.querySelector("#stats-cards-row"),this.tableContainer=(i=this.element)==null?void 0:i.querySelector("#product-table-slot"),this.addProductModal=(a=this.element)==null?void 0:a.querySelector("#add-product-modal");const n=(l=this.element)==null?void 0:l.querySelector("#btn-logout");n==null||n.addEventListener("click",()=>{X.logout()}),this.addProductButton=new me({label:"Add Product ➕",variant:"primary",onClick:()=>this.showModal()}),this.addProductButton.mount((u=this.element)==null?void 0:u.querySelector("#add-product-btn-slot")),this.inputName=new z({label:"Product Name",placeholder:"e.g. Nordic Lounge Chair",required:!0,id:"modal-pname",name:"pname"}),this.inputCategory=new z({label:"Category",placeholder:"e.g. Chairs",required:!0,id:"modal-pcat",name:"pcat"}),this.inputPrice=new z({label:"Price ($)",type:"number",placeholder:"e.g. 199.00",required:!0,id:"modal-pprice",name:"pprice"}),this.inputStock=new z({label:"Starting Stock",type:"number",placeholder:"e.g. 50",required:!0,id:"modal-pstock",name:"pstock"}),this.inputDesc=new z({label:"Product Description",placeholder:"Provide full product specifications here...",required:!0,id:"modal-pdesc",name:"pdesc"}),this.inputName.mount((d=this.element)==null?void 0:d.querySelector("#modal-input-name")),this.inputCategory.mount((m=this.element)==null?void 0:m.querySelector("#modal-input-category")),this.inputPrice.mount((y=this.element)==null?void 0:y.querySelector("#modal-input-price")),this.inputStock.mount((b=this.element)==null?void 0:b.querySelector("#modal-input-stock")),this.inputDesc.mount((w=this.element)==null?void 0:w.querySelector("#modal-input-desc")),this.saveProductButton=new me({label:"Save Asset 💾",type:"submit",variant:"primary"}),this.cancelProductButton=new me({label:"Cancel",variant:"ghost",onClick:()=>this.hideModal()}),this.saveProductButton.mount((p=this.element)==null?void 0:p.querySelector("#modal-btn-save")),this.cancelProductButton.mount((f=this.element)==null?void 0:f.querySelector("#modal-btn-cancel"));const s=(g=this.element)==null?void 0:g.querySelector("#btn-close-modal");s==null||s.addEventListener("click",()=>{this.hideModal()});const r=(R=this.element)==null?void 0:R.querySelector("#modal-form");r==null||r.addEventListener("submit",v=>{this.handleSaveProduct(v)}),this.loadProducts()}async loadProducts(){this.renderLoadingTable(),this.renderLoadingStats();try{const n=await oe.getProducts();this.products=n.items,this.renderStats(),this.renderTable()}catch{this.showGlobalError("Unable to connect to service registry.")}}renderLoadingStats(){this.statsCardsContainer&&(this.statsCardsContainer.innerHTML=`
        <div class="glass-card skeleton-card animate-fade-in" style="height: 120px;"></div>
        <div class="glass-card skeleton-card animate-fade-in" style="height: 120px;"></div>
        <div class="glass-card skeleton-card animate-fade-in" style="height: 120px;"></div>
      `)}renderLoadingTable(){this.tableContainer&&(this.productTable=new pt({products:[],isLoading:!0}),this.productTable.mount(this.tableContainer))}renderStats(){if(!this.statsCardsContainer)return;const n=oe.calculateDashboardMetrics(this.products);this.statsCardsContainer.innerHTML="";const s=new Be({title:"Total Active Products",value:n.totalProducts,trend:"+12% this month",trendType:"up",icon:"📦",color:"primary"}),r=new Be({title:"Gross Valuation",value:Je(n.totalStockValue),trend:"+24.5% vs Q1",trendType:"up",icon:"💵",color:"success"}),o=new Be({title:"Restock Warnings",value:n.lowStockCount,trend:`${n.lowStockCount>2?"Action required":"Optimal catalog status"}`,trendType:n.lowStockCount>2?"down":"neutral",icon:"⚠️",color:"warning"}),i=document.createElement("div"),a=document.createElement("div"),l=document.createElement("div");this.statsCardsContainer.appendChild(i),this.statsCardsContainer.appendChild(a),this.statsCardsContainer.appendChild(l),s.mount(i),r.mount(a),o.mount(l)}renderTable(){this.tableContainer&&(this.productTable=new pt({products:this.products,isLoading:!1,onDeleteProduct:n=>{this.handleDeleteProduct(n)}}),this.productTable.mount(this.tableContainer))}async handleDeleteProduct(n){if(confirm("Are you sure you want to purge this asset from live inventory?"))try{this.renderLoadingTable(),await oe.removeProduct(n),this.showToast("Asset successfully purged.","success"),await this.loadProducts()}catch(s){const r=s;this.showToast(r.message||"Error purging asset.","error"),this.renderTable()}}async handleSaveProduct(n){var u;n.preventDefault();const s=this.inputName.getValue(),r=this.inputCategory.getValue(),o=parseFloat(this.inputPrice.getValue()),i=parseInt(this.inputStock.getValue()),a=this.inputDesc.getValue();if(!s||!r||isNaN(o)||isNaN(i)||!a){this.showToast("Please fulfill all required fields.","warning");return}const l={name:s,category:r,price:o,stock:i,description:a};try{this.saveProductButton.setProps({isLoading:!0}),await oe.addProduct(l),this.showToast("Asset registered successfully.","success"),this.hideModal();const d=(u=this.element)==null?void 0:u.querySelector("#modal-form");d==null||d.reset(),await this.loadProducts()}catch(d){const m=d;this.showToast(m.message||"Error registering asset.","error")}finally{this.saveProductButton.setProps({isLoading:!1})}}showModal(){this.addProductModal&&this.addProductModal.classList.remove("hidden")}hideModal(){this.addProductModal&&this.addProductModal.classList.add("hidden")}showToast(n,s){window.dispatchEvent(new CustomEvent("app:toast",{detail:{message:n,type:s}}))}showGlobalError(n){this.tableContainer&&(this.tableContainer.innerHTML=`
        <div class="alert alert-danger animate-fade-in mt-4">
          <span class="alert-icon">❌</span>
          <span class="alert-text">${n}</span>
          <button class="btn btn-ghost btn-sm ml-auto" onclick="window.location.reload()">Retry</button>
        </div>
      `)}}class Is extends ${constructor(){super(...arguments);S(this,"products",[])}render(){return`
      <div class="storefront-wrapper animate-fade-in">
        <!-- Transparent Glass Navigation Bar -->
        <nav class="storefront-nav">
          <div class="storefront-nav-logo">
            Marufa Showroom <span class="logo-dot"></span>
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
            <span class="hero-subtitle">Professional and Adaptive Spaces</span>
            <h1 class="hero-title">Crafted for Clarity.<br>Luxury Designed for Life.</h1>
            <p class="hero-description">
              Elevating simple structures into statement spaces. Discover curated furniture collections blending sustainable organic ashwood, sleek steel mesh panels, and timeless design aesthetics.
            </p>
            <div class="storefront-hero-actions mt-4">
              <a href="#shop" class="btn btn-primary" style="text-decoration: none;">Discover Collection →</a>
            </div>
          </div>
          <div class="storefront-hero-media">
            <div class="hero-img-backdrop"></div>
            <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1000&q=80" alt="Luxury Living Space Showcase" class="storefront-hero-img" />
          </div>
        </header>

        <!-- Intro Detail Banner Section -->
        <section class="storefront-intro">
          <span class="intro-tag">Design Principles</span>
          <p class="intro-text">
            Where concepts become reality — this evolving showroom blends exquisite craftsmanship, structural detail, and adaptive design, <span class="highlight-green">shaping physical environments</span> that reflect elegance and purpose.
          </p>
        </section>

        <!-- Catalog Showcase Section -->
        <section id="shop" class="storefront-catalog-section">
          <div class="catalog-header">
            <div class="catalog-title-group">
              <h2>Timeless furniture for modern spaces</h2>
              <p>Explore our premium architectural catalog of seating, desks, cabinets and accessories.</p>
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
                The ashwood coffee table completely redefined our living room layout. The structural drawer lines are clean and perfect.
              </p>
              <div class="story-author">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80" alt="Sophia Larson" class="author-avatar" />
                <div class="author-info">
                  <span class="author-name">Sophia Larson</span>
                  <span class="author-title">Interior Architect, Oslo</span>
                </div>
              </div>
            </div>

            <div class="story-card">
              <span class="quote-icon">“</span>
              <p class="story-quote">
                I love the design and durability of the Nordic Sideboard Cabinet. It blends perfectly with my minimalist design philosophy.
              </p>
              <div class="story-author">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" alt="Marcus Vane" class="author-avatar" />
                <div class="author-info">
                  <span class="author-name">Marcus Vane</span>
                  <span class="author-title">Lead Designer, Stockholm</span>
                </div>
              </div>
            </div>

            <div class="story-card">
              <span class="quote-icon">“</span>
              <p class="story-quote">
                Exceptional customer service and fast shipping. The charcoal sofa bench is robust, heavy, and extremely comfortable.
              </p>
              <div class="story-author">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" alt="Elena Rostova" class="author-avatar" />
                <div class="author-info">
                  <span class="author-name">Elena Rostova</span>
                  <span class="author-title">Visual Stylist, Copenhagen</span>
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
              <h2>Download Your Insights Now</h2>
              <p>Access our detailed catalog guides, design case studies, and customized space calculators on the go.</p>
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
              <div class="storefront-nav-logo">
                Marufa Showroom <span class="logo-dot"></span>
              </div>
              <p>Crafting high-performance structural workspaces and luxury home environments with architectural precision.</p>
            </div>
            <div class="footer-col">
              <h4>Innovations</h4>
              <ul class="footer-links">
                <li class="footer-link"><a href="#">Eco-materials</a></li>
                <li class="footer-link"><a href="#">Modular joints</a></li>
                <li class="footer-link"><a href="#">Custom fabrics</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Collection</h4>
              <ul class="footer-links">
                <li class="footer-link"><a href="#">Lounge Chairs</a></li>
                <li class="footer-link"><a href="#">Work Desks</a></li>
                <li class="footer-link"><a href="#">Cabinets</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Community</h4>
              <ul class="footer-links">
                <li class="footer-link"><a href="#">Architect forum</a></li>
                <li class="footer-link"><a href="#">Local meetups</a></li>
                <li class="footer-link"><a href="#">Impact report</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Partners</h4>
              <ul class="footer-links">
                <li class="footer-link"><a href="#">Dealers portal</a></li>
                <li class="footer-link"><a href="#">Press kits</a></li>
                <li class="footer-link"><a href="#">Design affiliate</a></li>
              </ul>
            </div>
          </div>

          <div class="footer-bottom">
            <span class="copyright">© ${new Date().getFullYear()} Marufa Inc. All rights reserved.</span>
            <div class="social-links">
              <a href="#" class="social-link">Instagram</a>
              <a href="#" class="social-link">Facebook</a>
              <a href="#" class="social-link">Twitter</a>
              <a href="#" class="social-link">Pinterest</a>
            </div>
          </div>
        </footer>
      </div>
    `}afterMount(){var s;const n=(s=this.element)==null?void 0:s.querySelector(".btn-admin-login");n&&n.addEventListener("click",()=>{window.dispatchEvent(new CustomEvent("app:navigate",{detail:{route:"login"}}))}),this.loadCatalog()}async loadCatalog(){var n;try{const s=await oe.getProducts();this.products=s.items,this.renderCatalog()}catch{const r=(n=this.element)==null?void 0:n.querySelector("#storefront-catalog-mount");r&&(r.innerHTML=`
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
          <div class="storefront-product-img-wrapper">
            <img src="${i.imageUrl}" alt="${i.name}" class="storefront-product-img" />
            <span class="storefront-product-stock ${i.stock<15?"stock-low-badge":"stock-ok-badge"}">
              Stock: ${i.stock} units
            </span>
          </div>

          <!-- Product Details -->
          <div class="storefront-product-info">
            <div class="storefront-product-left">
              <h4 class="storefront-product-name">${i.name}</h4>
              <span class="storefront-product-category">${i.category}</span>
            </div>
            <span class="storefront-product-price">${Je(i.price)}</span>
          </div>
          <p class="storefront-product-desc">${i.description.substring(0,100)}...</p>

          <!-- Action block -->
          <div class="storefront-product-footer">
            <button class="btn-add-cart-neon btn-cart-trigger" data-name="${i.name}">
              Add to cart <span style="font-weight: 300;">+</span>
            </button>
          </div>
        </div>
      `).join("");n.innerHTML=`
      <div class="storefront-product-grid">
        ${s}
      </div>
    `,n.querySelectorAll(".btn-cart-trigger").forEach(i=>{i.addEventListener("click",()=>{const a=i.dataset.name;window.dispatchEvent(new CustomEvent("app:toast",{detail:{message:`Added ${a} to your cart successfully!`,type:"success"}}))})})}}class $s extends ${constructor(){super(...arguments);S(this,"currentPage",null)}render(){return`
      <div id="app-root" class="min-h-screen">
        <div id="page-mount-point" class="animate-fade-in"></div>
        <div id="notification-container"></div>
      </div>
    `}afterMount(){this.handleRoute(),window.addEventListener("app:navigate",n=>{const{route:s}=n.detail;this.transitionTo(s)}),window.addEventListener("auth:state-change",n=>{n.detail.isAuthenticated?this.transitionTo("dashboard"):this.transitionTo("storefront")}),window.addEventListener("app:toast",n=>{const{message:s,type:r}=n.detail;this.triggerToast(s,r)}),window.addEventListener("auth:logout",()=>{this.transitionTo("storefront"),this.triggerToast("Session expired. Please sign in again.","warning")})}handleRoute(){X.isAuthenticated()?this.transitionTo("dashboard"):this.transitionTo("storefront")}transitionTo(n){var r;this.currentPage&&this.currentPage.unmount();const s=(r=this.element)==null?void 0:r.querySelector("#page-mount-point");s&&(n==="dashboard"&&!X.isAuthenticated()&&(n="login"),n==="dashboard"?this.currentPage=new Ms:n==="login"?this.currentPage=new Ns:this.currentPage=new Is,this.currentPage.mount(s))}triggerToast(n,s){var a;const r=(a=this.element)==null?void 0:a.querySelector("#notification-container");if(!r)return;const o=document.createElement("div");o.className=`notification ${s}`;let i="ℹ️";s==="success"&&(i="✅"),s==="error"&&(i="❌"),s==="warning"&&(i="⚠️"),o.innerHTML=`
      <span class="notification-icon">${i}</span>
      <span class="notification-message">${n}</span>
    `,r.appendChild(o),setTimeout(()=>{o.style.animation="fadeIn 0.25s reverse forwards",setTimeout(()=>{o.remove()},250)},4e3)}}document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("app");e?(new $s().mount(e),console.info('[Marufa Boilerplate] Initialized environment: "development"')):console.error("[Marufa Boilerplate] Failed to mount application: #app root not found.")});
//# sourceMappingURL=index-BCuogc85.js.map
