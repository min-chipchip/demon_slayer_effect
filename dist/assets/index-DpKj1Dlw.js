(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var Hs=typeof self<"u"?self:{};function gd(e){t:{for(var t=["CLOSURE_FLAGS"],n=Hs,i=0;i<t.length;i++)if((n=n[t[i]])==null){t=null;break t}t=n}return(e=t&&t[e])!=null&&e}function Qi(){throw Error("Invalid UTF8")}function du(e,t){return t=String.fromCharCode.apply(null,t),e==null?t:e+t}let aa,jo;const c0=typeof TextDecoder<"u";let l0;const h0=typeof TextEncoder<"u";function _d(e){if(h0)e=(l0||(l0=new TextEncoder)).encode(e);else{let n=0;const i=new Uint8Array(3*e.length);for(let r=0;r<e.length;r++){var t=e.charCodeAt(r);if(128>t)i[n++]=t;else{if(2048>t)i[n++]=t>>6|192;else{if(55296<=t&&57343>=t){if(56319>=t&&r<e.length){const s=e.charCodeAt(++r);if(56320<=s&&57343>=s){t=1024*(t-55296)+s-56320+65536,i[n++]=t>>18|240,i[n++]=t>>12&63|128,i[n++]=t>>6&63|128,i[n++]=63&t|128;continue}r--}t=65533}i[n++]=t>>12|224,i[n++]=t>>6&63|128}i[n++]=63&t|128}}e=n===i.length?i:i.subarray(0,n)}return e}var Os,vd=gd(610401301),u0=gd(188588736);const pu=Hs.navigator;function Bc(e){return!!vd&&!!Os&&Os.brands.some(({brand:t})=>t&&t.indexOf(e)!=-1)}function Cn(e){var t;return(t=Hs.navigator)&&(t=t.userAgent)||(t=""),t.indexOf(e)!=-1}function Bi(){return!!vd&&!!Os&&0<Os.brands.length}function Ko(){return Bi()?Bc("Chromium"):(Cn("Chrome")||Cn("CriOS"))&&!(!Bi()&&Cn("Edge"))||Cn("Silk")}function $l(e){return $l[" "](e),e}Os=pu&&pu.userAgentData||null,$l[" "]=function(){};var f0=!Bi()&&(Cn("Trident")||Cn("MSIE"));!Cn("Android")||Ko(),Ko(),Cn("Safari")&&(Ko()||!Bi()&&Cn("Coast")||!Bi()&&Cn("Opera")||!Bi()&&Cn("Edge")||(Bi()?Bc("Microsoft Edge"):Cn("Edg/"))||Bi()&&Bc("Opera"));var xd={},ws=null;function d0(e){var t=e.length,n=3*t/4;n%3?n=Math.floor(n):"=.".indexOf(e[t-1])!=-1&&(n="=.".indexOf(e[t-2])!=-1?n-2:n-1);var i=new Uint8Array(n),r=0;return function(s,a){function o(m){for(;c<s.length;){var v=s.charAt(c++),S=ws[v];if(S!=null)return S;if(!/^[\s\xa0]*$/.test(v))throw Error("Unknown base64 encoding at char: "+v)}return m}Md();for(var c=0;;){var l=o(-1),h=o(0),f=o(64),u=o(64);if(u===64&&l===-1)break;a(l<<2|h>>4),f!=64&&(a(h<<4&240|f>>2),u!=64&&a(f<<6&192|u))}}(e,function(s){i[r++]=s}),r!==n?i.subarray(0,r):i}function Md(){if(!ws){ws={};for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),t=["+/=","+/","-_=","-_.","-_"],n=0;5>n;n++){var i=e.concat(t[n].split(""));xd[n]=i;for(var r=0;r<i.length;r++){var s=i[r];ws[s]===void 0&&(ws[s]=r)}}}}var Sd=typeof Uint8Array<"u",yd=!f0&&typeof btoa=="function";function mu(e){if(!yd){var t;t===void 0&&(t=0),Md(),t=xd[t];var n=Array(Math.floor(e.length/3)),i=t[64]||"";let c=0,l=0;for(;c<e.length-2;c+=3){var r=e[c],s=e[c+1],a=e[c+2],o=t[r>>2];r=t[(3&r)<<4|s>>4],s=t[(15&s)<<2|a>>6],a=t[63&a],n[l++]=o+r+s+a}switch(o=0,a=i,e.length-c){case 2:a=t[(15&(o=e[c+1]))<<2]||i;case 1:e=e[c],n[l]=t[e>>2]+t[(3&e)<<4|o>>4]+a+i}return n.join("")}for(t="",n=0,i=e.length-10240;n<i;)t+=String.fromCharCode.apply(null,e.subarray(n,n+=10240));return t+=String.fromCharCode.apply(null,n?e.subarray(n):e),btoa(t)}const gu=/[-_.]/g,p0={"-":"+",_:"/",".":"="};function m0(e){return p0[e]||""}function Ed(e){if(!yd)return d0(e);gu.test(e)&&(e=e.replace(gu,m0)),e=atob(e);const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}function Vs(e){return Sd&&e!=null&&e instanceof Uint8Array}let g0;function go(){return g0||(g0=new Uint8Array(0))}var Yr={};let _0;function Td(e){if(e!==Yr)throw Error("illegal external caller")}function xr(){return _0||(_0=new yi(null,Yr))}function Zl(e){Td(Yr);var t=e.g;return(t=t==null||Vs(t)?t:typeof t=="string"?Ed(t):null)==null?t:e.g=t}var yi=class{constructor(e,t){if(Td(t),this.g=e,e!=null&&e.length===0)throw Error("ByteString should be constructed with non-empty values")}h(){const e=Zl(this);return e?new Uint8Array(e):go()}};function Ad(e,t){return Error(`Invalid wire type: ${e} (at position ${t})`)}function Jl(){return Error("Failed to read varint, encoding is invalid.")}function bd(e,t){return Error(`Tried to read past the end of the data ${t} > ${e}`)}function Ql(e){if(typeof e=="string")return{buffer:Ed(e),P:!1};if(Array.isArray(e))return{buffer:new Uint8Array(e),P:!1};if(e.constructor===Uint8Array)return{buffer:e,P:!1};if(e.constructor===ArrayBuffer)return{buffer:new Uint8Array(e),P:!1};if(e.constructor===yi)return{buffer:Zl(e)||go(),P:!0};if(e instanceof Uint8Array)return{buffer:new Uint8Array(e.buffer,e.byteOffset,e.byteLength),P:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers")}function th(){return typeof BigInt=="function"}const v0=typeof Uint8Array.prototype.slice=="function";let wd,pe=0,Ue=0;function pr(e){const t=0>e;let n=(e=Math.abs(e))>>>0;if(e=Math.floor((e-n)/4294967296),t){const[i,r]=ih(n,e);e=r,n=i}pe=n>>>0,Ue=e>>>0}function eh(e){const t=wd||(wd=new DataView(new ArrayBuffer(8)));t.setFloat32(0,+e,!0),Ue=0,pe=t.getUint32(0,!0)}function kc(e,t){return 4294967296*t+(e>>>0)}function nh(e,t){const n=2147483648&t;return n&&(t=~t>>>0,(e=1+~e>>>0)==0&&(t=t+1>>>0)),e=kc(e,t),n?-e:e}function Za(e,t){if(e>>>=0,2097151>=(t>>>=0))var n=""+(4294967296*t+e);else th()?n=""+(BigInt(t)<<BigInt(32)|BigInt(e)):(e=(16777215&e)+6777216*(n=16777215&(e>>>24|t<<8))+6710656*(t=t>>16&65535),n+=8147497*t,t*=2,1e7<=e&&(n+=Math.floor(e/1e7),e%=1e7),1e7<=n&&(t+=Math.floor(n/1e7),n%=1e7),n=t+_u(n)+_u(e));return n}function _u(e){return e=String(e),"0000000".slice(e.length)+e}function Rd(){var e=pe,t=Ue;if(2147483648&t)if(th())e=""+(BigInt(0|t)<<BigInt(32)|BigInt(e>>>0));else{const[n,i]=ih(e,t);e="-"+Za(n,i)}else e=Za(e,t);return e}function _o(e){if(16>e.length)pr(Number(e));else if(th())e=BigInt(e),pe=Number(e&BigInt(4294967295))>>>0,Ue=Number(e>>BigInt(32)&BigInt(4294967295));else{const t=+(e[0]==="-");Ue=pe=0;const n=e.length;for(let i=t,r=(n-t)%6+t;r<=n;i=r,r+=6){const s=Number(e.slice(i,r));Ue*=1e6,pe=1e6*pe+s,4294967296<=pe&&(Ue+=Math.trunc(pe/4294967296),Ue>>>=0,pe>>>=0)}if(t){const[i,r]=ih(pe,Ue);pe=i,Ue=r}}}function ih(e,t){return t=~t,e?e=1+~e:t+=1,[e,t]}function rh(e,t){let n,i=0,r=0,s=0;const a=e.h;let o=e.g;do n=a[o++],i|=(127&n)<<s,s+=7;while(32>s&&128&n);for(32<s&&(r|=(127&n)>>4),s=3;32>s&&128&n;s+=7)n=a[o++],r|=(127&n)<<s;if(mr(e,o),128>n)return t(i>>>0,r>>>0);throw Jl()}function sh(e){let t=0,n=e.g;const i=n+10,r=e.h;for(;n<i;){const s=r[n++];if(t|=s,(128&s)==0)return mr(e,n),!!(127&t)}throw Jl()}function Vi(e){const t=e.h;let n=e.g,i=t[n++],r=127&i;if(128&i&&(i=t[n++],r|=(127&i)<<7,128&i&&(i=t[n++],r|=(127&i)<<14,128&i&&(i=t[n++],r|=(127&i)<<21,128&i&&(i=t[n++],r|=i<<28,128&i&&128&t[n++]&&128&t[n++]&&128&t[n++]&&128&t[n++]&&128&t[n++])))))throw Jl();return mr(e,n),r}function Wi(e){return Vi(e)>>>0}function zc(e){var t=e.h;const n=e.g,i=t[n],r=t[n+1],s=t[n+2];return t=t[n+3],mr(e,e.g+4),(i<<0|r<<8|s<<16|t<<24)>>>0}function Gc(e){var t=zc(e);e=2*(t>>31)+1;const n=t>>>23&255;return t&=8388607,n==255?t?NaN:1/0*e:n==0?e*Math.pow(2,-149)*t:e*Math.pow(2,n-150)*(t+Math.pow(2,23))}function x0(e){return Vi(e)}function $o(e,t,{ca:n=!1}={}){e.ca=n,t&&(t=Ql(t),e.h=t.buffer,e.m=t.P,e.j=0,e.l=e.h.length,e.g=e.j)}function mr(e,t){if(e.g=t,t>e.l)throw bd(e.l,t)}function Cd(e,t){if(0>t)throw Error(`Tried to read a negative byte length: ${t}`);const n=e.g,i=n+t;if(i>e.l)throw bd(t,e.l-n);return e.g=i,n}function Pd(e,t){if(t==0)return xr();var n=Cd(e,t);return e.ca&&e.m?n=e.h.subarray(n,n+t):(e=e.h,n=n===(t=n+t)?go():v0?e.slice(n,t):new Uint8Array(e.subarray(n,t))),n.length==0?xr():new yi(n,Yr)}var vu=[];function Ld(e){var t=e.g;if(t.g==t.l)return!1;e.l=e.g.g;var n=Wi(e.g);if(t=n>>>3,!(0<=(n&=7)&&5>=n))throw Ad(n,e.l);if(1>t)throw Error(`Invalid field number: ${t} (at position ${e.l})`);return e.m=t,e.h=n,!0}function Fa(e){switch(e.h){case 0:e.h!=0?Fa(e):sh(e.g);break;case 1:mr(e=e.g,e.g+8);break;case 2:if(e.h!=2)Fa(e);else{var t=Wi(e.g);mr(e=e.g,e.g+t)}break;case 5:mr(e=e.g,e.g+4);break;case 3:for(t=e.m;;){if(!Ld(e))throw Error("Unmatched start-group tag: stream EOF");if(e.h==4){if(e.m!=t)throw Error("Unmatched end-group tag");break}Fa(e)}break;default:throw Ad(e.h,e.l)}}function Ws(e,t,n){const i=e.g.l,r=Wi(e.g),s=e.g.g+r;let a=s-i;if(0>=a&&(e.g.l=s,n(t,e,void 0,void 0,void 0),a=s-e.g.g),a)throw Error(`Message parsing ended unexpectedly. Expected to read ${r} bytes, instead read ${r-a} bytes, either the data ended unexpectedly or the message misreported its own length`);return e.g.g=s,e.g.l=i,t}function ah(e){var t=Wi(e.g),n=Cd(e=e.g,t);if(e=e.h,c0){var i,r=e;(i=jo)||(i=jo=new TextDecoder("utf-8",{fatal:!0})),t=n+t,r=n===0&&t===r.length?r:r.subarray(n,t);try{var s=i.decode(r)}catch(o){if(aa===void 0){try{i.decode(new Uint8Array([128]))}catch{}try{i.decode(new Uint8Array([97])),aa=!0}catch{aa=!1}}throw!aa&&(jo=void 0),o}}else{t=(s=n)+t,n=[];let o,c=null;for(;s<t;){var a=e[s++];128>a?n.push(a):224>a?s>=t?Qi():(o=e[s++],194>a||(192&o)!=128?(s--,Qi()):n.push((31&a)<<6|63&o)):240>a?s>=t-1?Qi():(o=e[s++],(192&o)!=128||a===224&&160>o||a===237&&160<=o||(192&(i=e[s++]))!=128?(s--,Qi()):n.push((15&a)<<12|(63&o)<<6|63&i)):244>=a?s>=t-2?Qi():(o=e[s++],(192&o)!=128||o-144+(a<<28)>>30||(192&(i=e[s++]))!=128||(192&(r=e[s++]))!=128?(s--,Qi()):(a=(7&a)<<18|(63&o)<<12|(63&i)<<6|63&r,a-=65536,n.push(55296+(a>>10&1023),56320+(1023&a)))):Qi(),8192<=n.length&&(c=du(c,n),n.length=0)}s=du(c,n)}return s}function Dd(e){const t=Wi(e.g);return Pd(e.g,t)}function vo(e,t,n){var i=Wi(e.g);for(i=e.g.g+i;e.g.g<i;)n.push(t(e.g))}var oa=[];function xu(e){return e?/^\d+$/.test(e)?(_o(e),new Mu(pe,Ue)):null:M0||(M0=new Mu(0,0))}var Mu=class{constructor(e,t){this.h=e>>>0,this.g=t>>>0}};let M0;function Su(e){return e?/^-?\d+$/.test(e)?(_o(e),new yu(pe,Ue)):null:S0||(S0=new yu(0,0))}var yu=class{constructor(e,t){this.h=e>>>0,this.g=t>>>0}};let S0;function Ja(e,t,n){for(;0<n||127<t;)e.g.push(127&t|128),t=(t>>>7|n<<25)>>>0,n>>>=7;e.g.push(t)}function Xs(e,t){for(;127<t;)e.g.push(127&t|128),t>>>=7;e.g.push(t)}function xo(e,t){if(0<=t)Xs(e,t);else{for(let n=0;9>n;n++)e.g.push(127&t|128),t>>=7;e.g.push(1)}}function Bs(e,t){e.g.push(t>>>0&255),e.g.push(t>>>8&255),e.g.push(t>>>16&255),e.g.push(t>>>24&255)}function jr(e,t){t.length!==0&&(e.l.push(t),e.h+=t.length)}function Nn(e,t,n){Xs(e.g,8*t+n)}function oh(e,t){return Nn(e,t,2),t=e.g.end(),jr(e,t),t.push(e.h),t}function ch(e,t){var n=t.pop();for(n=e.h+e.g.length()-n;127<n;)t.push(127&n|128),n>>>=7,e.h++;t.push(n),e.h++}function Mo(e,t,n){Nn(e,t,2),Xs(e.g,n.length),jr(e,e.g.end()),jr(e,n)}function Hc(e,t,n,i){n!=null&&(t=oh(e,t),i(n,e),ch(e,t))}class ls{constructor(t,n,i,r){this.g=t,this.h=n,this.l=i,this.pa=r}}function xn(e){return Array.prototype.slice.call(e)}function lh(e){return typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol():e}var ii=lh(),Eu=lh("0di"),Zo=lh("2ex"),hh=ii?(e,t)=>{e[ii]|=t}:(e,t)=>{e.g!==void 0?e.g|=t:Object.defineProperties(e,{g:{value:t,configurable:!0,writable:!0,enumerable:!1}})},Qa=ii?(e,t)=>{e[ii]&=~t}:(e,t)=>{e.g!==void 0&&(e.g&=~t)};function Xe(e,t,n){return n?e|t:e&~t}var Ee=ii?e=>0|e[ii]:e=>0|e.g,Qt=ii?e=>e[ii]:e=>e.g,ye=ii?(e,t)=>(e[ii]=t,e):(e,t)=>(e.g!==void 0?e.g=t:Object.defineProperties(e,{g:{value:t,configurable:!0,writable:!0,enumerable:!1}}),e);function hs(e){return hh(e,34),e}function y0(e,t){ye(t,-14591&(0|e))}function Vc(e,t){ye(t,-14557&(34|e))}function Ud(e){return(e=e>>14&1023)===0?536870912:e}var uh,qs={},Id={};function Tu(e){return!(!e||typeof e!="object"||e.Ja!==Id)}function fh(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)&&e.constructor===Object}function dh(e,t,n){if(e!=null){if(typeof e=="string")e=e?new yi(e,Yr):xr();else if(e.constructor!==yi)if(Vs(e))e=e.length?new yi(n?e:new Uint8Array(e),Yr):xr();else{if(!t)throw Error();e=void 0}}return e}function to(e,t,n){if(!Array.isArray(e)||e.length)return!1;const i=Ee(e);return!!(1&i)||!(!t||!(Array.isArray(t)?t.includes(n):t.has(n)))&&(ye(e,1|i),!0)}const Au=[];function oi(e){if(2&e)throw Error()}ye(Au,55),uh=Object.freeze(Au);class eo{constructor(t,n,i){this.l=0,this.g=t,this.h=n,this.m=i}next(){if(this.l<this.g.length){const t=this.g[this.l++];return{done:!1,value:this.h?this.h.call(this.m,t):t}}return{done:!0,value:void 0}}[Symbol.iterator](){return new eo(this.g,this.h,this.m)}}let zi,E0,T0;function Nd(e,t){(t=zi?t[zi]:void 0)&&(e[zi]=xn(t))}function Fd(e,t){e.__closure__error__context__984382||(e.__closure__error__context__984382={}),e.__closure__error__context__984382.severity=t}function A0(){const e=Error();Fd(e,"incident"),function(t){Hs.setTimeout(()=>{throw t},0)}(e)}function Wc(e){return Fd(e=Error(e),"warning"),e}function Ki(e){return e==null||typeof e=="number"?e:e==="NaN"||e==="Infinity"||e==="-Infinity"?Number(e):void 0}function Od(e){return e==null||typeof e=="boolean"?e:typeof e=="number"?!!e:void 0}Object.freeze(new class{}),Object.freeze(new class{});const b0=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function So(e){const t=typeof e;return t==="number"?Number.isFinite(e):t==="string"&&b0.test(e)}function us(e){if(e==null)return e;if(typeof e=="string"){if(!e)return;e=+e}return typeof e=="number"&&Number.isFinite(e)?0|e:void 0}function w0(e){if(e==null)return e;if(typeof e=="string"){if(!e)return;e=+e}return typeof e=="number"&&Number.isFinite(e)?e>>>0:void 0}function bu(e){return e[0]!=="-"&&(20>e.length||e.length===20&&184467>Number(e.substring(0,6)))}function Bd(e){return e[0]==="-"?20>e.length||e.length===20&&-922337<Number(e.substring(0,7)):19>e.length||e.length===19&&922337>Number(e.substring(0,6))}function ph(e){return e=Math.trunc(e),Number.isSafeInteger(e)||(pr(e),e=nh(pe,Ue)),e}function mh(e){var t=Math.trunc(Number(e));return Number.isSafeInteger(t)?String(t):((t=e.indexOf("."))!==-1&&(e=e.substring(0,t)),Bd(e)||(_o(e),e=Rd()),e)}function no(e){return e==null?e:So(e)?typeof e=="number"?ph(e):mh(e):void 0}function Ys(e){if(typeof e!="string")throw Error();return e}function fs(e){if(e!=null&&typeof e!="string")throw Error();return e}function gr(e){return e==null||typeof e=="string"?e:void 0}function gh(e,t,n,i){if(e!=null&&typeof e=="object"&&e.X===qs)return e;if(!Array.isArray(e))return n?2&i?(e=t[Eu])?t=e:(hs((e=new t).s),t=t[Eu]=e):t=new t:t=void 0,t;let r=n=Ee(e);return r===0&&(r|=32&i),r|=2&i,r!==n&&ye(e,r),new t(e)}function R0(e,t,n){if(t){var i=!!i;if(!So(t=e))throw Wc("int64");typeof t=="string"?i=mh(t):i?(i=Math.trunc(t),Number.isSafeInteger(i)?i=String(i):Bd(t=String(i))?i=t:(pr(i),i=Rd())):i=ph(t)}else i=no(e);return typeof(n=(e=i)==null?n?0:void 0:e)=="string"&&(i=+n,Number.isSafeInteger(i))?i:n}let io,_h,C0;function ro(e){switch(typeof e){case"boolean":return _h||(_h=[0,void 0,!0]);case"number":return 0<e?void 0:e===0?C0||(C0=[0,void 0]):[-e,void 0];case"string":return[0,e];case"object":return e}}function _r(e,t){return kd(e,t[0],t[1])}function kd(e,t,n){if(e==null&&(e=io),io=void 0,e==null){var i=96;n?(e=[n],i|=512):e=[],t&&(i=-16760833&i|(1023&t)<<14)}else{if(!Array.isArray(e))throw Error("narr");if(2048&(i=Ee(e)))throw Error("farr");if(64&i)return e;if(i|=64,n&&(i|=512,n!==e[0]))throw Error("mid");t:{const r=(n=e).length;if(r){const s=r-1;if(fh(n[s])){if(1024<=(t=s-(+!!(512&(i|=256))-1)))throw Error("pvtlmt");i=-16760833&i|(1023&t)<<14;break t}}if(t){if(1024<(t=Math.max(t,r-(+!!(512&i)-1))))throw Error("spvt");i=-16760833&i|(1023&t)<<14}}}return ye(e,i),e}const P0={};let L0=function(){try{return $l(new class extends Map{constructor(){super()}}),!1}catch{return!0}}();class Jo{constructor(){this.g=new Map}get(t){return this.g.get(t)}set(t,n){return this.g.set(t,n),this.size=this.g.size,this}delete(t){return t=this.g.delete(t),this.size=this.g.size,t}clear(){this.g.clear(),this.size=this.g.size}has(t){return this.g.has(t)}entries(){return this.g.entries()}keys(){return this.g.keys()}values(){return this.g.values()}forEach(t,n){return this.g.forEach(t,n)}[Symbol.iterator](){return this.entries()}}const D0=L0?(Object.setPrototypeOf(Jo.prototype,Map.prototype),Object.defineProperties(Jo.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),Jo):class extends Map{constructor(){super()}};function wu(e){return e}function Qo(e){if(2&e.N)throw Error("Cannot mutate an immutable Map")}var In=class extends D0{constructor(e,t,n=wu,i=wu){super();let r=Ee(e);r|=64,ye(e,r),this.N=r,this.U=t,this.S=n,this.Z=this.U?U0:i;for(let s=0;s<e.length;s++){const a=e[s],o=n(a[0],!1,!0);let c=a[1];t?c===void 0&&(c=null):c=i(a[1],!1,!0,void 0,void 0,r),super.set(o,c)}}oa(e=Ru){if(this.size!==0)return this.Y(e)}Y(e=Ru){const t=[],n=super.entries();for(var i;!(i=n.next()).done;)(i=i.value)[0]=e(i[0]),i[1]=e(i[1]),t.push(i);return t}clear(){Qo(this),super.clear()}delete(e){return Qo(this),super.delete(this.S(e,!0,!1))}entries(){var e=this.na();return new eo(e,I0,this)}keys(){return this.Ia()}values(){var e=this.na();return new eo(e,In.prototype.get,this)}forEach(e,t){super.forEach((n,i)=>{e.call(t,this.get(i),i,this)})}set(e,t){return Qo(this),(e=this.S(e,!0,!1))==null?this:t==null?(super.delete(e),this):super.set(e,this.Z(t,!0,!0,this.U,!1,this.N))}Oa(e){const t=this.S(e[0],!1,!0);e=e[1],e=this.U?e===void 0?null:e:this.Z(e,!1,!0,void 0,!1,this.N),super.set(t,e)}has(e){return super.has(this.S(e,!1,!1))}get(e){e=this.S(e,!1,!1);const t=super.get(e);if(t!==void 0){var n=this.U;return n?((n=this.Z(t,!1,!0,n,this.ta,this.N))!==t&&super.set(e,n),n):t}}na(){return Array.from(super.keys())}Ia(){return super.keys()}[Symbol.iterator](){return this.entries()}};function U0(e,t,n,i,r,s){return e=gh(e,i,n,s),r&&(e=Eo(e)),e}function Ru(e){return e}function I0(e){return[e,this.get(e)]}let N0;function Cu(){return N0||(N0=new In(hs([]),void 0,void 0,void 0,P0))}function vh(e,t,n,i,r){if(e!=null){if(Array.isArray(e))e=to(e,void 0,0)?void 0:r&&2&Ee(e)?e:yo(e,t,n,i!==void 0,r);else if(fh(e)){const s={};for(let a in e)s[a]=vh(e[a],t,n,i,r);e=s}else e=t(e,i);return e}}function yo(e,t,n,i,r){const s=i||n?Ee(e):0;i=i?!!(32&s):void 0;const a=xn(e);for(let o=0;o<a.length;o++)a[o]=vh(a[o],t,n,i,r);return n&&(Nd(a,e),n(s,a)),a}function F0(e){return vh(e,xh,void 0,void 0,!1)}function xh(e){return e.X===qs?e.toJSON():e instanceof In?e.oa(F0):function(t){switch(typeof t){case"number":return isFinite(t)?t:String(t);case"boolean":return t?1:0;case"object":if(t)if(Array.isArray(t)){if(to(t,void 0,0))return}else{if(Vs(t))return mu(t);if(t instanceof yi){const n=t.g;return n==null?"":typeof n=="string"?n:t.g=mu(n)}if(t instanceof In)return t.oa()}}return t}(e)}function Xc(e,t,n=Vc){if(e!=null){if(Sd&&e instanceof Uint8Array)return t?e:new Uint8Array(e);if(Array.isArray(e)){var i=Ee(e);return 2&i||(t&&(t=i===0||!!(32&i)&&!(64&i||!(16&i))),e=t?ye(e,-12293&(34|i)):yo(e,Xc,4&i?Vc:n,!0,!0)),e}return e.X===qs?(n=e.s,e=2&(i=Qt(n))?e:Mh(e,n,i,!0)):e instanceof In&&!(2&e.N)&&(n=hs(e.Y(Xc)),e=new In(n,e.U,e.S,e.Z)),e}}function Mh(e,t,n,i){return e=e.constructor,io=t=zd(t,n,i),t=new e(t),io=void 0,t}function zd(e,t,n){const i=n||2&t?Vc:y0,r=!!(32&t);return e=function(s,a,o){const c=xn(s);var l=c.length;const h=256&a?c[l-1]:void 0;for(l+=h?-1:0,a=512&a?1:0;a<l;a++)c[a]=o(c[a]);if(h){a=c[a]={};for(const f in h)a[f]=o(h[f])}return Nd(c,s),c}(e,t,s=>Xc(s,r,i)),hh(e,32|(n?2:0)),e}function Eo(e){const t=e.s,n=Qt(t);return 2&n?Mh(e,t,n,!1):e}function Gd(e,t,n,i){return!(4&t)||n!=null}function Xi(e,t){return ci(e=e.s,Qt(e),t)}function Pu(e,t,n,i){if(!(0>(t=i+(+!!(512&t)-1))||t>=e.length||t>=n))return e[t]}function ci(e,t,n,i){if(n===-1)return null;const r=Ud(t);if(!(n>=r)){var s=e.length;return i&&256&t&&(i=e[s-1][n])!=null?(Pu(e,t,r,n)&&Zo!=null&&(4<=(t=(e=T0??(T0={}))[Zo]||0)||(e[Zo]=t+1,A0())),i):Pu(e,t,r,n)}return 256&t?e[e.length-1][n]:void 0}function le(e,t,n,i){const r=e.s;let s=Qt(r);return oi(s),me(r,s,t,n,i),e}function me(e,t,n,i,r){const s=Ud(t);if(n>=s||r){let a=t;if(256&t)r=e[e.length-1];else{if(i==null)return a;r=e[s+(+!!(512&t)-1)]={},a|=256}return r[n]=i,n<s&&(e[n+(+!!(512&t)-1)]=void 0),a!==t&&ye(e,a),a}return e[n+(+!!(512&t)-1)]=i,256&t&&n in(e=e[e.length-1])&&delete e[n],t}function ds(e,t,n,i,r){var s=2&t;let a=ci(e,t,n,r);Array.isArray(a)||(a=uh);const o=!(2&i);i=!(1&i);const c=!!(32&t);let l=Ee(a);return l!==0||!c||s||o?1&l||(l|=1,ye(a,l)):(l|=33,ye(a,l)),s?(e=!1,2&l||(hs(a),e=!!(4&l)),(i||e)&&Object.freeze(a)):(s=!!(2&l)||!!(2048&l),i&&s?(a=xn(a),i=1,c&&!o&&(i|=32),ye(a,i),me(e,t,n,a,r)):o&&32&l&&!s&&Qa(a,32)),a}function Oa(e,t){e=e.s;let n=Qt(e);const i=ci(e,n,t),r=Ki(i);return r!=null&&r!==i&&me(e,n,t,r),r}function Hd(e){e=e.s;let t=Qt(e);const n=ci(e,t,1),i=dh(n,!0,!!(34&t));return i!=null&&i!==n&&me(e,t,1,i),i}function kr(e,t,n){const i=e.s;let r=Qt(i);const s=2&r?1:2;let a=Vd(i,r,t);var o=Ee(a);if(Gd(e,o,void 0)){(4&o||Object.isFrozen(a))&&(a=xn(a),o=Mr(o,r),r=me(i,r,t,a));let c=e=0;for(;e<a.length;e++){const l=n(a[e]);l!=null&&(a[c++]=l)}c<e&&(a.length=c),o=Xe(o=Wd(o,r),20,!0),o=Xe(o,4096,!1),o=Xe(o,8192,!1),ye(a,o),2&o&&Object.freeze(a)}return Ls(o)||(n=o,(o=(e=s===1||s===4&&!!(32&o))?Xe(o,2,!0):Kr(o,r,!1))!==n&&ye(a,o),e&&Object.freeze(a)),s===2&&Ls(o)&&(a=xn(a),o=Kr(o=Mr(o,r),r,!1),ye(a,o),me(i,r,t,a)),a}function Vd(e,t,n){return e=ci(e,t,n),Array.isArray(e)?e:uh}function Wd(e,t){return e===0&&(e=Mr(e,t)),Xe(e,1,!0)}function Ls(e){return!!(2&e)&&!!(4&e)||!!(2048&e)}function Xd(e){e=xn(e);for(let t=0;t<e.length;t++){const n=e[t]=xn(e[t]);Array.isArray(n[1])&&(n[1]=hs(n[1]))}return e}function so(e,t,n){{const o=e.s;let c=Qt(o);if(oi(c),n==null)me(o,c,t);else{var i,r=Ee(n),s=r,a=!!(2&r)||Object.isFrozen(n);if((i=!a)&&(i=!1),Gd(e,r))for(r=21,a&&(n=xn(n),s=0,r=Kr(r=Mr(r,c),c,!0)),e=0;e<n.length;e++)n[e]=Ys(n[e]);i&&(n=xn(n),s=0,r=Kr(r=Mr(r,c),c,!0)),r!==s&&ye(n,r),me(o,c,t,n)}}}function qc(e,t,n,i){e=e.s;let r=Qt(e);oi(r),me(e,r,t,(i==="0"?Number(n)===0:n===i)?void 0:n)}function js(e,t,n,i){const r=Qt(e);oi(r),e=ds(e,r,t,2),i=n(i,!!(4&(t=Ee(e)))&&!!(4096&t)),e.push(i)}function O0(e){return e}function tc(e,t){return Sh(e=e.s,Qt(e),Cp)===t?t:-1}function Sh(e,t,n){let i=0;for(let r=0;r<n.length;r++){const s=n[r];ci(e,t,s)!=null&&(i!==0&&(t=me(e,t,i)),i=s)}return i}function yh(e,t,n,i){let r=Qt(e);oi(r);const s=ci(e,r,n,i);let a;if(s!=null&&s.X===qs)return(t=Eo(s))!==s&&me(e,r,n,t,i),t.s;if(Array.isArray(s)){const o=Ee(s);a=2&o?zd(s,o,!1):s,a=_r(a,t)}else a=_r(void 0,t);return a!==s&&me(e,r,n,a,i),a}function qd(e,t,n,i){e=e.s;let r=Qt(e);const s=ci(e,r,n,i);return(t=gh(s,t,!1,r))!==s&&t!=null&&me(e,r,n,t,i),t}function Wt(e,t,n,i=!1){if((t=qd(e,t,n,i))==null)return t;e=e.s;let r=Qt(e);if(!(2&r)){const s=Eo(t);s!==t&&me(e,r,n,t=s,i)}return t}function Yd(e,t,n,i,r,s){var a=2,o=!!(2&t);a=o?1:a,r=!!r,s&&(s=!o),o=Vd(e,t,i);var c=Ee(o);const l=!!(4&c);if(!l){var h=o,f=t;const u=!!(2&(c=Wd(c,t)));u&&(f=Xe(f,2,!0));let m=!u,v=!0,S=0,d=0;for(;S<h.length;S++){const p=gh(h[S],n,!1,f);if(p instanceof n){if(!u){const T=!!(2&Ee(p.s));m&&(m=!T),v&&(v=T)}h[d++]=p}}d<S&&(h.length=d),c=Xe(c,4,!0),c=Xe(c,16,v),c=Xe(c,8,m),ye(h,c),u&&Object.freeze(h)}if(s&&!(8&c||!o.length&&(a===1||a===4&&32&c))){for(Ls(c)&&(o=xn(o),c=Mr(c,t),t=me(e,t,i,o)),n=o,s=c,h=0;h<n.length;h++)(c=n[h])!==(f=Eo(c))&&(n[h]=f);s=Xe(s,8,!0),s=Xe(s,16,!n.length),ye(n,s),c=s}return Ls(c)||(n=c,(c=(s=a===1||a===4&&!!(32&c))?Xe(c,!o.length||16&c&&(!l||32&c)?2:2048,!0):Kr(c,t,r))!==n&&ye(o,c),s&&Object.freeze(o)),a===2&&Ls(c)&&(o=xn(o),c=Kr(c=Mr(c,t),t,r),ye(o,c),me(e,t,i,o)),o}function Ai(e,t,n){e=e.s;const i=Qt(e);return Yd(e,i,t,n,!1,!(2&i))}function Tt(e,t,n,i,r){return i==null&&(i=void 0),le(e,n,i,r)}function Ds(e,t,n,i){i==null&&(i=void 0),e=e.s;let r=Qt(e);oi(r),(n=Sh(e,r,n))&&n!==t&&i!=null&&(r=me(e,r,n)),me(e,r,t,i)}function Mr(e,t){return e=Xe(e,2,!!(2&t)),e=Xe(e,32,!0),Xe(e,2048,!1)}function Kr(e,t,n){return 32&t&&n||(e=Xe(e,32,!1)),e}function ao(e,t,n,i){e=e.s;const r=Qt(e);oi(r),t=Yd(e,r,n,t,!0),n=i??new n,t.push(n),2&Ee(n.s)?Qa(t,8):Qa(t,16)}function Ln(e,t){return us(Xi(e,t))}function qn(e,t){return e??t}function be(e,t){return qn(Oa(e,t),0)}function ri(e,t){return qn(gr(Xi(e,t)),"")}function ks(e,t,n){if(n!=null&&typeof n!="boolean")throw e=typeof n,Error(`Expected boolean but got ${e!="object"?e:n?Array.isArray(n)?"array":e:"null"}: ${n}`);le(e,t,n)}function si(e,t,n){if(n!=null){if(typeof n!="number"||!Number.isFinite(n))throw Wc("int32");n|=0}le(e,t,n)}function vt(e,t,n){if(n!=null&&typeof n!="number")throw Error(`Value of float/double field must be a number, found ${typeof n}: ${n}`);le(e,t,n)}function Yn(e,t,n){t.g?t.m(e,t.g,t.h,n,!0):t.m(e,t.h,n,!0)}In.prototype.toJSON=void 0,In.prototype.Ja=Id;var mt=class{constructor(e,t){this.s=kd(e,t)}toJSON(){return jd(this,yo(this.s,xh,void 0,void 0,!1),!0)}l(){var e=Vg;return e.g?e.l(this,e.g,e.h,!0):e.l(this,e.h,e.defaultValue,!0)}clone(){const e=this.s;return Mh(this,e,Qt(e),!1)}P(){return!!(2&Ee(this.s))}};function jd(e,t,n){var i=u0?void 0:e.constructor.B;const r=Qt(n?e.s:t);if(!(e=t.length))return t;let s,a;if(fh(n=t[e-1])){t:{var o=n;let h={},f=!1;for(var c in o){let u=o[c];if(Array.isArray(u)){let m=u;(to(u,i,+c)||Tu(u)&&u.size===0)&&(u=null),u!=m&&(f=!0)}u!=null?h[c]=u:f=!0}if(f){for(var l in h){o=h;break t}o=null}}o!=n&&(s=!0),e--}for(c=+!!(512&r)-1;0<e&&(n=t[l=e-1],l-=c,n==null||to(n,i,l)||Tu(n)&&n.size===0);e--)a=!0;return(s||a)&&(t=Array.prototype.slice.call(t,0,e),o&&t.push(o)),t}function Kd(e){return Array.isArray(e)?e[0]instanceof ls?e:[j0,e]:[e,void 0]}function ps(e,t){if(Array.isArray(t)){var n=Ee(t);if(4&n)return t;for(var i=0,r=0;i<t.length;i++){const s=e(t[i]);s!=null&&(t[r++]=s)}return r<i&&(t.length=r),ye(t,-12289&(5|n)),2&n&&Object.freeze(t),t}}mt.prototype.X=qs,mt.prototype.toString=function(){return jd(this,this.s,!1).toString()};const Lu=Symbol();function Eh(e){let t=e[Lu];if(!t){const n=Zd(e),i=Ah(e),r=i.l;t=r?(s,a)=>r(s,a,i):(s,a)=>{for(;Ld(a)&&a.h!=4;){var o=a.m,c=i[o];if(!c){var l=i.ea;l&&(l=l[o])&&(c=i[o]=B0(l))}c&&c(a,s,o)||(o=(c=a).l,Fa(c),c.ia?c=void 0:(l=c.g.g-o,c.g.g=o,c=Pd(c.g,l)),o=s,c&&(zi||(zi=Symbol()),(l=o[zi])?l.push(c):o[zi]=[c]))}n===$d||n===Ba||n.j||(s[E0||(E0=Symbol())]=n)},e[Lu]=t}return t}function B0(e){const t=(e=Kd(e))[0].g;if(e=e[1]){const n=Eh(e),i=Ah(e).T;return(r,s,a)=>t(r,s,a,i,n)}return t}class ec{}let $d,Ba;const Us=Symbol();function k0(e,t,n){const i=n[1];let r;if(i){const s=i[Us];r=s?s.T:ro(i[0]),e[t]=s??i}r&&r===_h?(e.g||(e.g=new Set)).add(t):n[0]&&(e.h||(e.h=new Set)).add(t)}function Du(e,t){return[e.l,!t||0<t[0]?void 0:t]}function Zd(e){var t=e[Us];if(t)return t;if(!(t=Th(e,e[Us]=new ec,Du,Du,k0)).ea&&!t.h&&!t.g){let n=!0;for(let i in t)isNaN(i)||(n=!1);n?(ro(e[0])===_h?Ba?t=Ba:((t=new ec).T=ro(!0),t=Ba=t):t=$d||($d=new ec),t=e[Us]=t):t.j=!0}return t}function z0(e,t,n){e[t]=n}function Th(e,t,n,i,r=z0){t.T=ro(e[0]);let s=0;var a=e[++s];a&&a.constructor===Object&&(t.ea=a,typeof(a=e[++s])=="function"&&(t.l=a,t.m=e[++s],a=e[++s]));const o={};for(;Array.isArray(a)&&typeof a[0]=="number"&&0<a[0];){for(var c=0;c<a.length;c++)o[a[c]]=a;a=e[++s]}for(c=1;a!==void 0;){let f;typeof a=="number"&&(c+=a,a=e[++s]);var l=void 0;if(a instanceof ls?f=a:(f=K0,s--),f.pa){a=e[++s],l=e;var h=s;typeof a=="function"&&(a=a(),l[h]=a),l=a}for(h=c+1,typeof(a=e[++s])=="number"&&0>a&&(h-=a,a=e[++s]);c<h;c++){const u=o[c];r(t,c,l?i(f,l,u):n(f,u))}}return t}const Uu=Symbol();function Jd(e){let t=e[Uu];if(!t){const n=To(e);t=(i,r)=>tp(i,r,n),e[Uu]=t}return t}const Yc=Symbol();function G0(e){return e.h}function H0(e,t){let n,i;const r=e.h;return(s,a,o)=>r(s,a,o,i||(i=To(t).T),n||(n=Jd(t)))}function To(e){let t=e[Yc];return t||(t=Th(e,e[Yc]={},G0,H0),Qd(e),t)}const jc=Symbol();function V0(e,t){const n=e.g;return t?(i,r,s)=>n(i,r,s,t):n}function W0(e,t,n){const i=e.g;let r,s;return(a,o,c)=>i(a,o,c,s||(s=Ah(t).T),r||(r=Eh(t)),n)}function Ah(e){let t=e[jc];return t||(Zd(e),t=Th(e,e[jc]={},V0,W0),Qd(e),t)}function Qd(e){jc in e&&Us in e&&Yc in e&&(e.length=0)}function Iu(e,t){var n=e[t];if(n)return n;if((n=e.ea)&&(n=n[t])){var i=(n=Kd(n))[0].h;if(n=n[1]){const r=Jd(n),s=To(n).T;n=(n=e.m)?n(s,r):(a,o,c)=>i(a,o,c,s,r)}else n=i;return e[t]=n}}function tp(e,t,n){for(var i=Qt(e),r=+!!(512&i)-1,s=e.length,a=512&i?1:0,o=s+(256&i?-1:0);a<o;a++){const c=e[a];if(c==null)continue;const l=a-r,h=Iu(n,l);h&&h(t,c,l)}if(256&i){i=e[s-1];for(let c in i)r=+c,Number.isNaN(r)||(s=i[c])!=null&&(o=Iu(n,r))&&o(t,s,r)}if(e=zi?e[zi]:void 0)for(jr(t,t.g.end()),n=0;n<e.length;n++)jr(t,Zl(e[n])||go())}function cn(e,t){return new ls(e,t,!1,!1)}function ms(e,t){return new ls(e,t,!0,!1)}function Ao(e,t){return new ls(e,t,!1,!0)}function ln(e,t,n){me(e,Qt(e),t,n)}var X0=Ao(function(e,t,n,i,r){return e.h===2&&(e=Ws(e,_r([void 0,void 0],i),r),oi(i=Qt(t)),(r=ci(t,i,n))instanceof In?2&r.N?((r=r.Y()).push(e),me(t,i,n,r)):r.Oa(e):Array.isArray(r)?(2&Ee(r)&&me(t,i,n,r=Xd(r)),r.push(e)):me(t,i,n,[e]),!0)},function(e,t,n,i,r){if(t instanceof In)t.forEach((s,a)=>{Hc(e,n,_r([a,s],i),r)});else if(Array.isArray(t))for(let s=0;s<t.length;s++){const a=t[s];Array.isArray(a)&&Hc(e,n,_r(a,i),r)}});function ep(e,t,n){t:if(t!=null){if(So(t)){if(typeof t=="string"){t=mh(t);break t}if(typeof t=="number"){t=ph(t);break t}}t=void 0}t!=null&&(typeof t=="string"&&Su(t),t!=null&&(Nn(e,n,0),typeof t=="number"?(e=e.g,pr(t),Ja(e,pe,Ue)):(n=Su(t),Ja(e.g,n.h,n.g))))}function np(e,t,n){(t=us(t))!=null&&t!=null&&(Nn(e,n,0),xo(e.g,t))}function ip(e,t,n){(t=Od(t))!=null&&(Nn(e,n,0),e.g.g.push(t?1:0))}function rp(e,t,n){(t=gr(t))!=null&&Mo(e,n,_d(t))}function bo(e,t,n,i,r){Hc(e,n,t instanceof mt?t.s:Array.isArray(t)?_r(t,i):void 0,r)}function sp(e,t,n){(t=t==null||typeof t=="string"||Vs(t)||t instanceof yi?t:void 0)!=null&&Mo(e,n,Ql(t).buffer)}function ap(e,t,n){return(e.h===5||e.h===2)&&(t=ds(t,Qt(t),n,2,!1),e.h==2?vo(e,Gc,t):t.push(Gc(e.g)),!0)}var Ie,Ei=cn(function(e,t,n){if(e.h!==1)return!1;var i=e.g;e=zc(i);const r=zc(i);i=2*(r>>31)+1;const s=r>>>20&2047;return e=4294967296*(1048575&r)+e,ln(t,n,s==2047?e?NaN:1/0*i:s==0?i*Math.pow(2,-1074)*e:i*Math.pow(2,s-1075)*(e+4503599627370496)),!0},function(e,t,n){(t=Ki(t))!=null&&(Nn(e,n,1),e=e.g,(n=wd||(wd=new DataView(new ArrayBuffer(8)))).setFloat64(0,+t,!0),pe=n.getUint32(0,!0),Ue=n.getUint32(4,!0),Bs(e,pe),Bs(e,Ue))}),Ne=cn(function(e,t,n){return e.h===5&&(ln(t,n,Gc(e.g)),!0)},function(e,t,n){(t=Ki(t))!=null&&(Nn(e,n,5),e=e.g,eh(t),Bs(e,pe))}),q0=ms(ap,function(e,t,n){if((t=ps(Ki,t))!=null)for(let a=0;a<t.length;a++){var i=e,r=n,s=t[a];s!=null&&(Nn(i,r,5),i=i.g,eh(s),Bs(i,pe))}}),bh=ms(ap,function(e,t,n){if((t=ps(Ki,t))!=null&&t.length){Nn(e,n,2),Xs(e.g,4*t.length);for(let i=0;i<t.length;i++)n=e.g,eh(t[i]),Bs(n,pe)}}),qi=cn(function(e,t,n){return e.h===0&&(ln(t,n,rh(e.g,nh)),!0)},ep),nc=cn(function(e,t,n){return e.h===0&&(ln(t,n,(e=rh(e.g,nh))===0?void 0:e),!0)},ep),Y0=cn(function(e,t,n){return e.h===0&&(ln(t,n,rh(e.g,kc)),!0)},function(e,t,n){t:if(t!=null){if(So(t)){if(typeof t=="string"){var i=Math.trunc(Number(t));Number.isSafeInteger(i)&&0<=i?t=String(i):((i=t.indexOf("."))!==-1&&(t=t.substring(0,i)),bu(t)||(_o(t),t=Za(pe,Ue)));break t}if(typeof t=="number"){t=0<=(t=Math.trunc(t))&&Number.isSafeInteger(t)?t:function(r){if(0>r){pr(r);const s=Za(pe,Ue);return r=Number(s),Number.isSafeInteger(r)?r:s}return bu(String(r))?r:(pr(r),kc(pe,Ue))}(t);break t}}t=void 0}t!=null&&(typeof t=="string"&&xu(t),t!=null&&(Nn(e,n,0),typeof t=="number"?(e=e.g,pr(t),Ja(e,pe,Ue)):(n=xu(t),Ja(e.g,n.h,n.g))))}),Te=cn(function(e,t,n){return e.h===0&&(ln(t,n,Vi(e.g)),!0)},np),wo=ms(function(e,t,n){return(e.h===0||e.h===2)&&(t=ds(t,Qt(t),n,2,!1),e.h==2?vo(e,Vi,t):t.push(Vi(e.g)),!0)},function(e,t,n){if((t=ps(us,t))!=null&&t.length){n=oh(e,n);for(let i=0;i<t.length;i++)xo(e.g,t[i]);ch(e,n)}}),$r=cn(function(e,t,n){return e.h===0&&(ln(t,n,(e=Vi(e.g))===0?void 0:e),!0)},np),Ce=cn(function(e,t,n){return e.h===0&&(ln(t,n,sh(e.g)),!0)},ip),Is=cn(function(e,t,n){return e.h===0&&(ln(t,n,(e=sh(e.g))===!1?void 0:e),!0)},ip),qe=ms(function(e,t,n){return e.h===2&&(js(t,n,O0,e=ah(e)),!0)},function(e,t,n){if((t=ps(gr,t))!=null)for(let a=0;a<t.length;a++){var i=e,r=n,s=t[a];s!=null&&Mo(i,r,_d(s))}}),Yi=cn(function(e,t,n){return e.h===2&&(ln(t,n,(e=ah(e))===""?void 0:e),!0)},rp),re=cn(function(e,t,n){return e.h===2&&(ln(t,n,ah(e)),!0)},rp),j0=Ao(function(e,t,n,i,r){return e.h===2&&(Ws(e,yh(t,i,n,!0),r),!0)},bo),K0=Ao(function(e,t,n,i,r){return e.h===2&&(Ws(e,yh(t,i,n),r),!0)},bo);Ie=new ls(function(e,t,n,i,r){if(e.h!==2)return!1;i=_r(void 0,i);let s=Qt(t);oi(s);let a=ds(t,s,n,3);return s=Qt(t),4&Ee(a)&&(a=xn(a),ye(a,-2079&(1|Ee(a))),me(t,s,n,a)),a.push(i),Ws(e,i,r),!0},function(e,t,n,i,r){if(Array.isArray(t))for(let s=0;s<t.length;s++)bo(e,t[s],n,i,r)},!0,!0);var ae=Ao(function(e,t,n,i,r,s){if(e.h!==2)return!1;let a=Qt(t);return oi(a),(s=Sh(t,a,s))&&n!==s&&me(t,a,s),Ws(e,t=yh(t,i,n),r),!0},bo),op=cn(function(e,t,n){return e.h===2&&(ln(t,n,Dd(e)),!0)},sp),$0=ms(function(e,t,n){return(e.h===0||e.h===2)&&(t=ds(t,Qt(t),n,2,!1),e.h==2?vo(e,Wi,t):t.push(Wi(e.g)),!0)},function(e,t,n){if((t=ps(w0,t))!=null)for(let a=0;a<t.length;a++){var i=e,r=n,s=t[a];s!=null&&(Nn(i,r,0),Xs(i.g,s))}}),ai=cn(function(e,t,n){return e.h===0&&(ln(t,n,Vi(e.g)),!0)},function(e,t,n){(t=us(t))!=null&&(t=parseInt(t,10),Nn(e,n,0),xo(e.g,t))}),Z0=ms(function(e,t,n){return(e.h===0||e.h===2)&&(t=ds(t,Qt(t),n,2,!1),e.h==2?vo(e,x0,t):t.push(Vi(e.g)),!0)},function(e,t,n){if((t=ps(us,t))!=null&&t.length){n=oh(e,n);for(let i=0;i<t.length;i++)xo(e.g,t[i]);ch(e,n)}});class J0{constructor(t,n){this.h=t,this.g=n,this.l=Wt,this.m=Tt,this.defaultValue=void 0}}function jn(e,t){return new J0(e,t)}function $i(e,t){return(n,i)=>{if(oa.length){const s=oa.pop();s.o(i),$o(s.g,n,i),n=s}else n=new class{constructor(s,a){if(vu.length){const o=vu.pop();$o(o,s,a),s=o}else s=new class{constructor(o,c){this.h=null,this.m=!1,this.g=this.l=this.j=0,$o(this,o,c)}clear(){this.h=null,this.m=!1,this.g=this.l=this.j=0,this.ca=!1}}(s,a);this.g=s,this.l=this.g.g,this.h=this.m=-1,this.o(a)}o({ia:s=!1}={}){this.ia=s}}(n,i);try{const s=new e,a=s.s;Eh(t)(a,n);var r=s}finally{n.g.clear(),n.m=-1,n.h=-1,100>oa.length&&oa.push(n)}return r}}function Ro(e){return function(){const t=new class{constructor(){this.l=[],this.h=0,this.g=new class{constructor(){this.g=[]}length(){return this.g.length}end(){const a=this.g;return this.g=[],a}}}};tp(this.s,t,To(e)),jr(t,t.g.end());const n=new Uint8Array(t.h),i=t.l,r=i.length;let s=0;for(let a=0;a<r;a++){const o=i[a];n.set(o,s),s+=o.length}return t.l=[n],n}}var Nu=class extends mt{constructor(e){super(e)}},cp=[0,Yi,cn(function(e,t,n){return e.h===2&&(ln(t,n,(e=Dd(e))===xr()?void 0:e),!0)},function(e,t,n){if(t!=null){if(t instanceof mt){const i=t.Qa;return void(i&&(t=i(t),t!=null&&Mo(e,n,Ql(t).buffer)))}if(Array.isArray(t))return}sp(e,t,n)})],Q0=[0,re],lp=[0,Te,ai,Ce,-1,wo,ai,-1],tg=[0,Ce,-1],hp=class extends mt{constructor(){super()}};hp.B=[6];var up=[0,Ce,re,Ce,ai,-1,Z0,re,-1,tg,ai],fp=[0,re,-2],Fu=class extends mt{constructor(){super()}},dp=[0],pp=[0,Te,Ce,-4],Mn=class extends mt{constructor(e){super(e,2)}},ve={},eg=[-2,ve,Ce];ve[336783863]=[0,re,Ce,-1,Te,[0,[1,2,3,4,5,6],ae,dp,ae,up,ae,fp,ae,pp,ae,lp,ae,[0,re]],Q0,Ce,[0,[1,3],[2,4],ae,[0,wo],-1,ae,[0,qe],-1,Ie,[0,re,-1]],re];var ng=[0,Yi,Is],mp=[0,nc,-1,Is,-3,nc,wo,Yi,$r,nc,-1,Is,$r,Is,-2,Yi],Ks=[-1,{}],gp=[0,re,1,Ks],_p=[0,re,qe,Ks];function Sn(e,t){qc(e,2,fs(t),"")}function he(e,t){js(e.s,3,Ys,t)}function Bt(e,t){js(e.s,4,Ys,t)}var Ye=class extends mt{constructor(e){super(e,500)}o(e){return Tt(this,0,7,e)}};Ye.B=[3,4,5,6,8,13,17,1005];var ig=[-500,Yi,-1,qe,-3,eg,Ie,cp,$r,-1,gp,_p,Ie,ng,Yi,mp,$r,qe,987,qe],rg=[0,Yi,-1,Ks],sg=[-500,re,-1,[-1,{}],998,re],ag=[-500,re,qe,-1,[-2,{},Ce],997,qe,-1],og=[-500,re,qe,Ks,998,qe];function yn(e,t){ao(e,1,Ye,t)}function ge(e,t){js(e.s,10,Ys,t)}function Yt(e,t){js(e.s,15,Ys,t)}var $e=class extends mt{constructor(e){super(e,500)}o(e){return Tt(this,0,1001,e)}};$e.B=[1,6,7,9,10,15,16,17,14,1002];var vp=[-500,Ie,ig,4,Ie,sg,Ie,ag,$r,Ie,og,qe,$r,gp,_p,Ie,rg,qe,-2,mp,Yi,-1,Is,979,Ks,Ie,cp],cg=$i($e,vp);$e.prototype.g=Ro(vp);var lg=[0,Ie,[0,Te,-2]],hg=class extends mt{constructor(e){super(e)}},ug=[0,Te,Ne,re,-1],wh=class extends mt{constructor(e){super(e)}g(){return Ai(this,hg,1)}};wh.B=[1];var xp=[0,Ie,ug],Co=$i(wh,xp),fg=[0,Te,Ne],dg=[0,Te,-1,lg],pg=class extends mt{constructor(e){super(e)}},mg=[0,Te,-3],gg=[0,Ne,-3],_g=class extends mt{constructor(e){super(e)}},vg=[0,Ne,-1,re,Ne],ka=class extends mt{constructor(e){super(e)}h(){return Wt(this,pg,2)}g(){return Ai(this,_g,5)}};ka.B=[5];var xg=[0,ai,mg,gg,dg,Ie,vg],Mp=class extends mt{constructor(e){super(e)}};Mp.B=[1,2,3,8,9];var Sp=$i(Mp,[0,qe,wo,bh,xg,re,-1,qi,Ie,fg,qe,qi]),yp=class extends mt{constructor(e){super(e)}},Mg=[0,Ne,-4],Ep=class extends mt{constructor(e){super(e)}};Ep.B=[1];var Hr=$i(Ep,[0,Ie,Mg]),Tp=class extends mt{constructor(e){super(e)}},Sg=[0,Ne,-4],Ap=class extends mt{constructor(e){super(e)}};Ap.B=[1];var $s=$i(Ap,[0,Ie,Sg]),bp=class extends mt{constructor(e){super(e)}};bp.B=[3];var yg=[0,Te,-1,bh,ai],wp=class extends mt{constructor(){super()}};wp.prototype.g=Ro([0,Ne,-4,qi]);var Eg=class extends mt{constructor(e){super(e)}},Tg=[0,1,Te,re,xp],Rp=class extends mt{constructor(e){super(e)}};Rp.B=[1];var Ag=$i(Rp,[0,Ie,Tg,qi]),Kc=class extends mt{constructor(e){super(e)}};Kc.B=[1];var bg=class extends mt{constructor(e){super(e)}qa(){const e=Hd(this);return e??xr()}},wg=class extends mt{constructor(e){super(e)}},Cp=[1,2],Rg=[0,Cp,ae,[0,bh],ae,[0,op],Te,re],Pp=class extends mt{constructor(e){super(e)}};Pp.B=[1];var Cg=$i(Pp,[0,Ie,Rg,qi]),Po=class extends mt{constructor(e){super(e)}};Po.B=[4,5];var Lp=[0,re,Te,Ne,qe,-1],Ou=class extends mt{constructor(e){super(e)}},Pg=[0,Ce,-1],Bu=class extends mt{constructor(e){super(e)}},za=[1,2,3,4,5],oo=class extends mt{constructor(e){super(e)}g(){return Hd(this)!=null}h(){return gr(Xi(this,2))!=null}},Dp=[0,op,re,[0,Te,qi,-1],[0,Y0,qi]],xe=class extends mt{constructor(e){super(e)}g(){return Od(Xi(this,2))??!1}},Pe=[0,Dp,Ce,[0,za,ae,pp,ae,up,ae,lp,ae,dp,ae,fp],ai],Lo=class extends mt{constructor(e){super(e)}},Rh=[0,Pe,Ne,-1,Te],Lg=jn(502141897,Lo);ve[502141897]=Rh;var Up=[0,Dp];ve[512499200]=Up;var Ip=[0,Up];ve[515723506]=Ip;var Dg=$i(class extends mt{constructor(e){super(e)}},[0,[0,ai,-1,q0,$0],yg]),Np=[0,Pe];ve[508981768]=Np;var Fp=class extends mt{constructor(e){super(e)}},Ch=[0,Pe,Ne,Np,Ce],Op=class extends mt{constructor(e){super(e)}},Bp=[0,Pe,Rh,Ch,Ne,Ip];ve[508968149]=Ch;var Ug=jn(508968150,Op);ve[508968150]=Bp;var kp=class extends mt{constructor(e){super(e)}},Ig=jn(513916220,kp);ve[513916220]=[0,Pe,Bp,Te];var Tr=class extends mt{constructor(e){super(e)}h(){return Wt(this,Po,2)}g(){le(this,2)}},zp=[0,Pe,Lp];ve[478825465]=zp;var Gp=[0,Pe];ve[478825422]=Gp;var Ng=class extends mt{constructor(e){super(e)}},Hp=[0,Pe,Gp,zp,-1],Vp=class extends mt{constructor(e){super(e)}},Wp=[0,Pe,Ne,Te],Ph=class extends mt{constructor(e){super(e)}},Lh=[0,Pe,Ne],Dh=class extends mt{constructor(e){super(e)}},Xp=[0,Pe,Wp,Lh,Ne],qp=class extends mt{constructor(e){super(e)}},Fg=[0,Pe,Xp,Hp];ve[463370452]=Hp,ve[464864288]=Wp,ve[474472470]=Lh;var Og=jn(462713202,Dh);ve[462713202]=Xp;var Bg=jn(479097054,qp);ve[479097054]=Fg;var kg=class extends mt{constructor(e){super(e)}},zg=[0,Pe],Yp=class extends mt{constructor(e){super(e)}},Uh=[0,Pe,Ne,-1,Te];ve[514774813]=Uh;var jp=class extends mt{constructor(e){super(e)}},Ih=[0,Pe,Ne,Ce];ve[518928384]=Ih;var Kp=class extends mt{constructor(){super()}};Kp.prototype.g=Ro([0,Pe,Lh,zg,Rh,Ch,Uh,Ih]);var $p=class extends mt{constructor(e){super(e)}},Gg=jn(456383383,$p);ve[456383383]=[0,Pe,Lp];var Zp=class extends mt{constructor(e){super(e)}},Hg=jn(476348187,Zp);ve[476348187]=[0,Pe,Pg];var Jp=class extends mt{constructor(e){super(e)}},Qp=[0,ai,-1],$c=class extends mt{constructor(e){super(e)}};$c.B=[3];var Vg=jn(458105876,class extends mt{constructor(e){super(e)}g(){var e=this.s;const t=Qt(e);var n=2&t;return e=function(i,r,s){var a=$c;const o=2&r;let c=!1;if(s==null){if(o)return Cu();s=[]}else if(s.constructor===In){if(!(2&s.N)||o)return s;s=s.Y()}else Array.isArray(s)?c=!!(2&Ee(s)):s=[];if(o){if(!s.length)return Cu();c||(c=!0,hs(s))}else c&&(c=!1,s=Xd(s));return c||(64&Ee(s)?Qa(s,32):32&r&&hh(s,32)),me(i,r,2,a=new In(s,a,R0,void 0),!1),a}(e,t,ci(e,t,2)),e==null||!n&&$c&&(e.ta=!0),n=e}});ve[458105876]=[0,Qp,X0,[!0,qi,[0,re,-1,qe]]];var Nh=class extends mt{constructor(e){super(e)}},tm=jn(458105758,Nh);ve[458105758]=[0,Pe,re,Qp];var Fh=class extends mt{constructor(e){super(e)}};Fh.B=[5,6];var Wg=jn(443442058,Fh);ve[443442058]=[0,Pe,re,Te,Ne,qe,-1];var em=class extends mt{constructor(e){super(e)}},Xg=jn(516587230,em);function Zc(e,t){return t=t?t.clone():new Po,e.displayNamesLocale!==void 0?le(t,1,fs(e.displayNamesLocale)):e.displayNamesLocale===void 0&&le(t,1),e.maxResults!==void 0?si(t,2,e.maxResults):"maxResults"in e&&le(t,2),e.scoreThreshold!==void 0?vt(t,3,e.scoreThreshold):"scoreThreshold"in e&&le(t,3),e.categoryAllowlist!==void 0?so(t,4,e.categoryAllowlist):"categoryAllowlist"in e&&le(t,4),e.categoryDenylist!==void 0?so(t,5,e.categoryDenylist):"categoryDenylist"in e&&le(t,5),t}function Oh(e,t=-1,n=""){return{categories:e.map(i=>({index:qn(Ln(i,1),0)??-1,score:be(i,2)??0,categoryName:ri(i,3)??"",displayName:ri(i,4)??""})),headIndex:t,headName:n}}function nm(e){var a,o;var t=kr(e,3,Ki),n=kr(e,2,us),i=kr(e,1,gr),r=kr(e,9,gr);const s={categories:[],keypoints:[]};for(let c=0;c<t.length;c++)s.categories.push({score:t[c],index:n[c]??-1,categoryName:i[c]??"",displayName:r[c]??""});if((t=(a=Wt(e,ka,4))==null?void 0:a.h())&&(s.boundingBox={originX:Ln(t,1)??0,originY:Ln(t,2)??0,width:Ln(t,3)??0,height:Ln(t,4)??0,angle:0}),(o=Wt(e,ka,4))==null?void 0:o.g().length)for(const c of Wt(e,ka,4).g())s.keypoints.push({x:Oa(c,1)??0,y:Oa(c,2)??0,score:Oa(c,4)??0,label:gr(Xi(c,3))??""});return s}function Do(e){const t=[];for(const n of Ai(e,Tp,1))t.push({x:be(n,1)??0,y:be(n,2)??0,z:be(n,3)??0,visibility:be(n,4)??0});return t}function Ns(e){const t=[];for(const n of Ai(e,yp,1))t.push({x:be(n,1)??0,y:be(n,2)??0,z:be(n,3)??0,visibility:be(n,4)??0});return t}function ku(e){return Array.from(e,t=>127<t?t-256:t)}function zu(e,t){if(e.length!==t.length)throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${e.length} vs. ${t.length}).`);let n=0,i=0,r=0;for(let s=0;s<e.length;s++)n+=e[s]*t[s],i+=e[s]*e[s],r+=t[s]*t[s];if(0>=i||0>=r)throw Error("Cannot compute cosine similarity on embedding with 0 norm.");return n/Math.sqrt(i*r)}let ca;ve[516587230]=[0,Pe,Uh,Ih,Ne];const qg=new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]);async function im(){if(ca===void 0)try{await WebAssembly.instantiate(qg),ca=!0}catch{ca=!1}return ca}async function vs(e,t=""){const n=await im()?"wasm_internal":"wasm_nosimd_internal";return{wasmLoaderPath:`${t}/${e}_${n}.js`,wasmBinaryPath:`${t}/${e}_${n}.wasm`}}var ar=class{};function rm(){var e=navigator;return typeof OffscreenCanvas<"u"&&(!function(t=navigator){return(t=t.userAgent).includes("Safari")&&!t.includes("Chrome")}(e)||!!((e=e.userAgent.match(/Version\/([\d]+).*Safari/))&&1<=e.length&&17<=Number(e[1])))}async function Gu(e){if(typeof importScripts!="function"){const t=document.createElement("script");return t.src=e.toString(),t.crossOrigin="anonymous",new Promise((n,i)=>{t.addEventListener("load",()=>{n()},!1),t.addEventListener("error",r=>{i(r)},!1),document.body.appendChild(t)})}importScripts(e.toString())}function sm(e){return e.videoWidth!==void 0?[e.videoWidth,e.videoHeight]:e.naturalWidth!==void 0?[e.naturalWidth,e.naturalHeight]:e.displayWidth!==void 0?[e.displayWidth,e.displayHeight]:[e.width,e.height]}function Mt(e,t,n){e.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"),n(t=e.i.stringToNewUTF8(t)),e.i._free(t)}function Hu(e,t,n){if(!e.i.canvas)throw Error("No OpenGL canvas configured.");if(n?e.i._bindTextureToStream(n):e.i._bindTextureToCanvas(),!(n=e.i.canvas.getContext("webgl2")||e.i.canvas.getContext("webgl")))throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");e.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!0),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,t),e.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1);const[i,r]=sm(t);return!e.l||i===e.i.canvas.width&&r===e.i.canvas.height||(e.i.canvas.width=i,e.i.canvas.height=r),[i,r]}function Vu(e,t,n){e.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");const i=new Uint32Array(t.length);for(let r=0;r<t.length;r++)i[r]=e.i.stringToNewUTF8(t[r]);t=e.i._malloc(4*i.length),e.i.HEAPU32.set(i,t>>2),n(t);for(const r of i)e.i._free(r);e.i._free(t)}function $n(e,t,n){e.i.simpleListeners=e.i.simpleListeners||{},e.i.simpleListeners[t]=n}function Li(e,t,n){let i=[];e.i.simpleListeners=e.i.simpleListeners||{},e.i.simpleListeners[t]=(r,s,a)=>{s?(n(i,a),i=[]):i.push(r)}}ar.forVisionTasks=function(e){return vs("vision",e)},ar.forTextTasks=function(e){return vs("text",e)},ar.forGenAiExperimentalTasks=function(e){return vs("genai_experimental",e)},ar.forGenAiTasks=function(e){return vs("genai",e)},ar.forAudioTasks=function(e){return vs("audio",e)},ar.isSimdSupported=function(){return im()};async function Yg(e,t,n,i){return e=await(async(r,s,a,o,c)=>{if(s&&await Gu(s),!self.ModuleFactory||a&&(await Gu(a),!self.ModuleFactory))throw Error("ModuleFactory not set.");return self.Module&&c&&((s=self.Module).locateFile=c.locateFile,c.mainScriptUrlOrBlob&&(s.mainScriptUrlOrBlob=c.mainScriptUrlOrBlob)),c=await self.ModuleFactory(self.Module||c),self.ModuleFactory=self.Module=void 0,new r(c,o)})(e,n.wasmLoaderPath,n.assetLoaderPath,t,{locateFile:r=>r.endsWith(".wasm")?n.wasmBinaryPath.toString():n.assetBinaryPath&&r.endsWith(".data")?n.assetBinaryPath.toString():r}),await e.o(i),e}function ic(e,t){const n=Wt(e.baseOptions,oo,1)||new oo;typeof t=="string"?(le(n,2,fs(t)),le(n,1)):t instanceof Uint8Array&&(le(n,1,dh(t,!1,!1)),le(n,2)),Tt(e.baseOptions,0,1,n)}function Wu(e){try{const t=e.K.length;if(t===1)throw Error(e.K[0].message);if(1<t)throw Error("Encountered multiple errors: "+e.K.map(n=>n.message).join(", "))}finally{e.K=[]}}function ot(e,t){e.J=Math.max(e.J,t)}function Uo(e,t){e.C=new Ye,Sn(e.C,"PassThroughCalculator"),he(e.C,"free_memory"),Bt(e.C,"free_memory_unused_out"),ge(t,"free_memory"),yn(t,e.C)}function Zr(e,t){he(e.C,t),Bt(e.C,t+"_unused_out")}function Io(e){e.g.addBoolToStream(!0,"free_memory",e.J)}var Ga=class{constructor(e){this.g=e,this.K=[],this.J=0,this.g.setAutoRenderToScreen(!1)}l(e,t=!0){var n,i,r,s,a,o;if(t){const c=e.baseOptions||{};if((n=e.baseOptions)!=null&&n.modelAssetBuffer&&((i=e.baseOptions)!=null&&i.modelAssetPath))throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");if(!((r=Wt(this.baseOptions,oo,1))!=null&&r.g()||(s=Wt(this.baseOptions,oo,1))!=null&&s.h()||(a=e.baseOptions)!=null&&a.modelAssetBuffer||(o=e.baseOptions)!=null&&o.modelAssetPath))throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");if(function(l,h){let f=Wt(l.baseOptions,Bu,3);if(!f){var u=f=new Bu,m=new Fu;Ds(u,4,za,m)}"delegate"in h&&(h.delegate==="GPU"?(h=f,u=new hp,Ds(h,2,za,u)):(h=f,u=new Fu,Ds(h,4,za,u))),Tt(l.baseOptions,0,3,f)}(this,c),c.modelAssetPath)return fetch(c.modelAssetPath.toString()).then(l=>{if(l.ok)return l.arrayBuffer();throw Error(`Failed to fetch model: ${c.modelAssetPath} (${l.status})`)}).then(l=>{try{this.g.i.FS_unlink("/model.dat")}catch{}this.g.i.FS_createDataFile("/","model.dat",new Uint8Array(l),!0,!1,!1),ic(this,"/model.dat"),this.m(),this.L()});if(c.modelAssetBuffer instanceof Uint8Array)ic(this,c.modelAssetBuffer);else if(c.modelAssetBuffer)return async function(l){const h=[];for(var f=0;;){const{done:u,value:m}=await l.read();if(u)break;h.push(m),f+=m.length}if(h.length===0)return new Uint8Array(0);if(h.length===1)return h[0];l=new Uint8Array(f),f=0;for(const u of h)l.set(u,f),f+=u.length;return l}(c.modelAssetBuffer).then(l=>{ic(this,l),this.m(),this.L()})}return this.m(),this.L(),Promise.resolve()}L(){}fa(){let e;if(this.g.fa(t=>{e=cg(t)}),!e)throw Error("Failed to retrieve CalculatorGraphConfig");return e}setGraph(e,t){this.g.attachErrorListener((n,i)=>{this.K.push(Error(i))}),this.g.Ma(),this.g.setGraph(e,t),this.C=void 0,Wu(this)}finishProcessing(){this.g.finishProcessing(),Wu(this)}close(){this.C=void 0,this.g.closeGraph()}};function Ti(e,t){if(!e)throw Error(`Unable to obtain required WebGL resource: ${t}`);return e}Ga.prototype.close=Ga.prototype.close,function(e,t){e=e.split(".");var n,i=Hs;for((e[0]in i)||i.execScript===void 0||i.execScript("var "+e[0]);e.length&&(n=e.shift());)e.length||t===void 0?i=i[n]&&i[n]!==Object.prototype[n]?i[n]:i[n]={}:i[n]=t}("TaskRunner",Ga);class jg{constructor(t,n,i,r){this.g=t,this.h=n,this.m=i,this.l=r}bind(){this.g.bindVertexArray(this.h)}close(){this.g.deleteVertexArray(this.h),this.g.deleteBuffer(this.m),this.g.deleteBuffer(this.l)}}function Xu(e,t,n){const i=e.g;if(n=Ti(i.createShader(n),"Failed to create WebGL shader"),i.shaderSource(n,t),i.compileShader(n),!i.getShaderParameter(n,i.COMPILE_STATUS))throw Error(`Could not compile WebGL shader: ${i.getShaderInfoLog(n)}`);return i.attachShader(e.h,n),n}function qu(e,t){const n=e.g,i=Ti(n.createVertexArray(),"Failed to create vertex array");n.bindVertexArray(i);const r=Ti(n.createBuffer(),"Failed to create buffer");n.bindBuffer(n.ARRAY_BUFFER,r),n.enableVertexAttribArray(e.K),n.vertexAttribPointer(e.K,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),n.STATIC_DRAW);const s=Ti(n.createBuffer(),"Failed to create buffer");return n.bindBuffer(n.ARRAY_BUFFER,s),n.enableVertexAttribArray(e.J),n.vertexAttribPointer(e.J,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array(t?[0,1,0,0,1,0,1,1]:[0,0,0,1,1,1,1,0]),n.STATIC_DRAW),n.bindBuffer(n.ARRAY_BUFFER,null),n.bindVertexArray(null),new jg(n,i,r,s)}function Bh(e,t){if(e.g){if(t!==e.g)throw Error("Cannot change GL context once initialized")}else e.g=t}function kh(e,t,n,i){return Bh(e,t),e.h||(e.m(),e.D()),n?(e.v||(e.v=qu(e,!0)),n=e.v):(e.A||(e.A=qu(e,!1)),n=e.A),t.useProgram(e.h),n.bind(),e.l(),e=i(),n.g.bindVertexArray(null),e}function No(e,t,n){return Bh(e,t),e=Ti(t.createTexture(),"Failed to create texture"),t.bindTexture(t.TEXTURE_2D,e),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,n??t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,n??t.LINEAR),t.bindTexture(t.TEXTURE_2D,null),e}function Fo(e,t,n){Bh(e,t),e.u||(e.u=Ti(t.createFramebuffer(),"Failed to create framebuffe.")),t.bindFramebuffer(t.FRAMEBUFFER,e.u),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,n,0)}function zh(e){var t;(t=e.g)==null||t.bindFramebuffer(e.g.FRAMEBUFFER,null)}var Gh=class{H(){return`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
  void main() {
    gl_FragColor = texture2D(inputTexture, vTex);
  }
 `}m(){const e=this.g;if(this.h=Ti(e.createProgram(),"Failed to create WebGL program"),this.ba=Xu(this,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,e.VERTEX_SHADER),this.aa=Xu(this,this.H(),e.FRAGMENT_SHADER),e.linkProgram(this.h),!e.getProgramParameter(this.h,e.LINK_STATUS))throw Error(`Error during program linking: ${e.getProgramInfoLog(this.h)}`);this.K=e.getAttribLocation(this.h,"aVertex"),this.J=e.getAttribLocation(this.h,"aTex")}D(){}l(){}close(){if(this.h){const e=this.g;e.deleteProgram(this.h),e.deleteShader(this.ba),e.deleteShader(this.aa)}this.u&&this.g.deleteFramebuffer(this.u),this.A&&this.A.close(),this.v&&this.v.close()}};function _i(e,t){switch(t){case 0:return e.g.find(n=>n instanceof Uint8Array);case 1:return e.g.find(n=>n instanceof Float32Array);case 2:return e.g.find(n=>typeof WebGLTexture<"u"&&n instanceof WebGLTexture);default:throw Error(`Type is not supported: ${t}`)}}function Jc(e){var t=_i(e,1);if(!t){if(t=_i(e,0))t=new Float32Array(t).map(i=>i/255);else{t=new Float32Array(e.width*e.height);const i=Jr(e);var n=Hh(e);if(Fo(n,i,am(e)),"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in self.document){n=new Float32Array(e.width*e.height*4),i.readPixels(0,0,e.width,e.height,i.RGBA,i.FLOAT,n);for(let r=0,s=0;r<t.length;++r,s+=4)t[r]=n[s]}else i.readPixels(0,0,e.width,e.height,i.RED,i.FLOAT,t)}e.g.push(t)}return t}function am(e){let t=_i(e,2);if(!t){const n=Jr(e);t=cm(e);const i=Jc(e),r=om(e);n.texImage2D(n.TEXTURE_2D,0,r,e.width,e.height,0,n.RED,n.FLOAT,i),Qc(e)}return t}function Jr(e){if(!e.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return e.h||(e.h=Ti(e.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),e.h}function om(e){if(e=Jr(e),!la)if(e.getExtension("EXT_color_buffer_float")&&e.getExtension("OES_texture_float_linear")&&e.getExtension("EXT_float_blend"))la=e.R32F;else{if(!e.getExtension("EXT_color_buffer_half_float"))throw Error("GPU does not fully support 4-channel float32 or float16 formats");la=e.R16F}return la}function Hh(e){return e.l||(e.l=new Gh),e.l}function cm(e){const t=Jr(e);t.viewport(0,0,e.width,e.height),t.activeTexture(t.TEXTURE0);let n=_i(e,2);return n||(n=No(Hh(e),t,e.m?t.LINEAR:t.NEAREST),e.g.push(n),e.j=!0),t.bindTexture(t.TEXTURE_2D,n),n}function Qc(e){e.h.bindTexture(e.h.TEXTURE_2D,null)}var la,ke=class{constructor(e,t,n,i,r,s,a){this.g=e,this.m=t,this.j=n,this.canvas=i,this.l=r,this.width=s,this.height=a,this.j&&--Yu===0&&console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources.")}Ha(){return!!_i(this,0)}la(){return!!_i(this,1)}R(){return!!_i(this,2)}ka(){return(t=_i(e=this,0))||(t=Jc(e),t=new Uint8Array(t.map(n=>255*n)),e.g.push(t)),t;var e,t}ja(){return Jc(this)}O(){return am(this)}clone(){const e=[];for(const t of this.g){let n;if(t instanceof Uint8Array)n=new Uint8Array(t);else if(t instanceof Float32Array)n=new Float32Array(t);else{if(!(t instanceof WebGLTexture))throw Error(`Type is not supported: ${t}`);{const i=Jr(this),r=Hh(this);i.activeTexture(i.TEXTURE1),n=No(r,i,this.m?i.LINEAR:i.NEAREST),i.bindTexture(i.TEXTURE_2D,n);const s=om(this);i.texImage2D(i.TEXTURE_2D,0,s,this.width,this.height,0,i.RED,i.FLOAT,null),i.bindTexture(i.TEXTURE_2D,null),Fo(r,i,n),kh(r,i,!1,()=>{cm(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),Qc(this)}),zh(r),Qc(this)}}e.push(n)}return new ke(e,this.m,this.R(),this.canvas,this.l,this.width,this.height)}close(){this.j&&Jr(this).deleteTexture(_i(this,2)),Yu=-1}};ke.prototype.close=ke.prototype.close,ke.prototype.clone=ke.prototype.clone,ke.prototype.getAsWebGLTexture=ke.prototype.O,ke.prototype.getAsFloat32Array=ke.prototype.ja,ke.prototype.getAsUint8Array=ke.prototype.ka,ke.prototype.hasWebGLTexture=ke.prototype.R,ke.prototype.hasFloat32Array=ke.prototype.la,ke.prototype.hasUint8Array=ke.prototype.Ha;var Yu=250;function ei(e,t){switch(t){case 0:return e.g.find(n=>n instanceof ImageData);case 1:return e.g.find(n=>typeof ImageBitmap<"u"&&n instanceof ImageBitmap);case 2:return e.g.find(n=>typeof WebGLTexture<"u"&&n instanceof WebGLTexture);default:throw Error(`Type is not supported: ${t}`)}}function lm(e){var t=ei(e,0);if(!t){t=Qr(e);const n=Oo(e),i=new Uint8Array(e.width*e.height*4);Fo(n,t,Ha(e)),t.readPixels(0,0,e.width,e.height,t.RGBA,t.UNSIGNED_BYTE,i),zh(n),t=new ImageData(new Uint8ClampedArray(i.buffer),e.width,e.height),e.g.push(t)}return t}function Ha(e){let t=ei(e,2);if(!t){const n=Qr(e);t=Va(e);const i=ei(e,1)||lm(e);n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,i),Rs(e)}return t}function Qr(e){if(!e.canvas)throw Error("Conversion to different image formats require that a canvas is passed when iniitializing the image.");return e.h||(e.h=Ti(e.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),e.h}function Oo(e){return e.l||(e.l=new Gh),e.l}function Va(e){const t=Qr(e);t.viewport(0,0,e.width,e.height),t.activeTexture(t.TEXTURE0);let n=ei(e,2);return n||(n=No(Oo(e),t),e.g.push(n),e.m=!0),t.bindTexture(t.TEXTURE_2D,n),n}function Rs(e){e.h.bindTexture(e.h.TEXTURE_2D,null)}function ju(e){const t=Qr(e);return kh(Oo(e),t,!0,()=>function(n,i){const r=n.canvas;if(r.width===n.width&&r.height===n.height)return i();const s=r.width,a=r.height;return r.width=n.width,r.height=n.height,n=i(),r.width=s,r.height=a,n}(e,()=>{if(t.bindFramebuffer(t.FRAMEBUFFER,null),t.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT),t.drawArrays(t.TRIANGLE_FAN,0,4),!(e.canvas instanceof OffscreenCanvas))throw Error("Conversion to ImageBitmap requires that the MediaPipe Tasks is initialized with an OffscreenCanvas");return e.canvas.transferToImageBitmap()}))}var ze=class{constructor(e,t,n,i,r,s,a){this.g=e,this.j=t,this.m=n,this.canvas=i,this.l=r,this.width=s,this.height=a,(this.j||this.m)&&--Ku===0&&console.error("You seem to be creating MPImage instances without invoking .close(). This leaks resources.")}Ga(){return!!ei(this,0)}ma(){return!!ei(this,1)}R(){return!!ei(this,2)}Ea(){return lm(this)}Da(){var e=ei(this,1);return e||(Ha(this),Va(this),e=ju(this),Rs(this),this.g.push(e),this.j=!0),e}O(){return Ha(this)}clone(){const e=[];for(const t of this.g){let n;if(t instanceof ImageData)n=new ImageData(t.data,this.width,this.height);else if(t instanceof WebGLTexture){const i=Qr(this),r=Oo(this);i.activeTexture(i.TEXTURE1),n=No(r,i),i.bindTexture(i.TEXTURE_2D,n),i.texImage2D(i.TEXTURE_2D,0,i.RGBA,this.width,this.height,0,i.RGBA,i.UNSIGNED_BYTE,null),i.bindTexture(i.TEXTURE_2D,null),Fo(r,i,n),kh(r,i,!1,()=>{Va(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),Rs(this)}),zh(r),Rs(this)}else{if(!(t instanceof ImageBitmap))throw Error(`Type is not supported: ${t}`);Ha(this),Va(this),n=ju(this),Rs(this)}e.push(n)}return new ze(e,this.ma(),this.R(),this.canvas,this.l,this.width,this.height)}close(){this.j&&ei(this,1).close(),this.m&&Qr(this).deleteTexture(ei(this,2)),Ku=-1}};ze.prototype.close=ze.prototype.close,ze.prototype.clone=ze.prototype.clone,ze.prototype.getAsWebGLTexture=ze.prototype.O,ze.prototype.getAsImageBitmap=ze.prototype.Da,ze.prototype.getAsImageData=ze.prototype.Ea,ze.prototype.hasWebGLTexture=ze.prototype.R,ze.prototype.hasImageBitmap=ze.prototype.ma,ze.prototype.hasImageData=ze.prototype.Ga;var Ku=250;function Kn(...e){return e.map(([t,n])=>({start:t,end:n}))}const Kg=function(e){return class extends e{Ma(){this.i._registerModelResourcesGraphService()}}}(($u=class{constructor(e,t){this.l=!0,this.i=e,this.g=null,this.h=0,this.m=typeof this.i._addIntToInputStream=="function",t!==void 0?this.i.canvas=t:rm()?this.i.canvas=new OffscreenCanvas(1,1):(console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."),this.i.canvas=document.createElement("canvas"))}async initializeGraph(e){const t=await(await fetch(e)).arrayBuffer();e=!(e.endsWith(".pbtxt")||e.endsWith(".textproto")),this.setGraph(new Uint8Array(t),e)}setGraphFromString(e){this.setGraph(new TextEncoder().encode(e),!1)}setGraph(e,t){const n=e.length,i=this.i._malloc(n);this.i.HEAPU8.set(e,i),t?this.i._changeBinaryGraph(n,i):this.i._changeTextGraph(n,i),this.i._free(i)}configureAudio(e,t,n,i,r){this.i._configureAudio||console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'),Mt(this,i||"input_audio",s=>{Mt(this,r=r||"audio_header",a=>{this.i._configureAudio(s,a,e,t,n)})})}setAutoResizeCanvas(e){this.l=e}setAutoRenderToScreen(e){this.i._setAutoRenderToScreen(e)}setGpuBufferVerticalFlip(e){this.i.gpuOriginForWebTexturesIsBottomLeft=e}fa(e){$n(this,"__graph_config__",t=>{e(t)}),Mt(this,"__graph_config__",t=>{this.i._getGraphConfig(t,void 0)}),delete this.i.simpleListeners.__graph_config__}attachErrorListener(e){this.i.errorListener=e}attachEmptyPacketListener(e,t){this.i.emptyPacketListeners=this.i.emptyPacketListeners||{},this.i.emptyPacketListeners[e]=t}addAudioToStream(e,t,n){this.addAudioToStreamWithShape(e,0,0,t,n)}addAudioToStreamWithShape(e,t,n,i,r){const s=4*e.length;this.h!==s&&(this.g&&this.i._free(this.g),this.g=this.i._malloc(s),this.h=s),this.i.HEAPF32.set(e,this.g/4),Mt(this,i,a=>{this.i._addAudioToInputStream(this.g,t,n,a,r)})}addGpuBufferToStream(e,t,n){Mt(this,t,i=>{const[r,s]=Hu(this,e,i);this.i._addBoundTextureToStream(i,r,s,n)})}addBoolToStream(e,t,n){Mt(this,t,i=>{this.i._addBoolToInputStream(e,i,n)})}addDoubleToStream(e,t,n){Mt(this,t,i=>{this.i._addDoubleToInputStream(e,i,n)})}addFloatToStream(e,t,n){Mt(this,t,i=>{this.i._addFloatToInputStream(e,i,n)})}addIntToStream(e,t,n){Mt(this,t,i=>{this.i._addIntToInputStream(e,i,n)})}addUintToStream(e,t,n){Mt(this,t,i=>{this.i._addUintToInputStream(e,i,n)})}addStringToStream(e,t,n){Mt(this,t,i=>{Mt(this,e,r=>{this.i._addStringToInputStream(r,i,n)})})}addStringRecordToStream(e,t,n){Mt(this,t,i=>{Vu(this,Object.keys(e),r=>{Vu(this,Object.values(e),s=>{this.i._addFlatHashMapToInputStream(r,s,Object.keys(e).length,i,n)})})})}addProtoToStream(e,t,n,i){Mt(this,n,r=>{Mt(this,t,s=>{const a=this.i._malloc(e.length);this.i.HEAPU8.set(e,a),this.i._addProtoToInputStream(a,e.length,s,r,i),this.i._free(a)})})}addEmptyPacketToStream(e,t){Mt(this,e,n=>{this.i._addEmptyPacketToInputStream(n,t)})}addBoolVectorToStream(e,t,n){Mt(this,t,i=>{const r=this.i._allocateBoolVector(e.length);if(!r)throw Error("Unable to allocate new bool vector on heap.");for(const s of e)this.i._addBoolVectorEntry(r,s);this.i._addBoolVectorToInputStream(r,i,n)})}addDoubleVectorToStream(e,t,n){Mt(this,t,i=>{const r=this.i._allocateDoubleVector(e.length);if(!r)throw Error("Unable to allocate new double vector on heap.");for(const s of e)this.i._addDoubleVectorEntry(r,s);this.i._addDoubleVectorToInputStream(r,i,n)})}addFloatVectorToStream(e,t,n){Mt(this,t,i=>{const r=this.i._allocateFloatVector(e.length);if(!r)throw Error("Unable to allocate new float vector on heap.");for(const s of e)this.i._addFloatVectorEntry(r,s);this.i._addFloatVectorToInputStream(r,i,n)})}addIntVectorToStream(e,t,n){Mt(this,t,i=>{const r=this.i._allocateIntVector(e.length);if(!r)throw Error("Unable to allocate new int vector on heap.");for(const s of e)this.i._addIntVectorEntry(r,s);this.i._addIntVectorToInputStream(r,i,n)})}addUintVectorToStream(e,t,n){Mt(this,t,i=>{const r=this.i._allocateUintVector(e.length);if(!r)throw Error("Unable to allocate new unsigned int vector on heap.");for(const s of e)this.i._addUintVectorEntry(r,s);this.i._addUintVectorToInputStream(r,i,n)})}addStringVectorToStream(e,t,n){Mt(this,t,i=>{const r=this.i._allocateStringVector(e.length);if(!r)throw Error("Unable to allocate new string vector on heap.");for(const s of e)Mt(this,s,a=>{this.i._addStringVectorEntry(r,a)});this.i._addStringVectorToInputStream(r,i,n)})}addBoolToInputSidePacket(e,t){Mt(this,t,n=>{this.i._addBoolToInputSidePacket(e,n)})}addDoubleToInputSidePacket(e,t){Mt(this,t,n=>{this.i._addDoubleToInputSidePacket(e,n)})}addFloatToInputSidePacket(e,t){Mt(this,t,n=>{this.i._addFloatToInputSidePacket(e,n)})}addIntToInputSidePacket(e,t){Mt(this,t,n=>{this.i._addIntToInputSidePacket(e,n)})}addUintToInputSidePacket(e,t){Mt(this,t,n=>{this.i._addUintToInputSidePacket(e,n)})}addStringToInputSidePacket(e,t){Mt(this,t,n=>{Mt(this,e,i=>{this.i._addStringToInputSidePacket(i,n)})})}addProtoToInputSidePacket(e,t,n){Mt(this,n,i=>{Mt(this,t,r=>{const s=this.i._malloc(e.length);this.i.HEAPU8.set(e,s),this.i._addProtoToInputSidePacket(s,e.length,r,i),this.i._free(s)})})}addBoolVectorToInputSidePacket(e,t){Mt(this,t,n=>{const i=this.i._allocateBoolVector(e.length);if(!i)throw Error("Unable to allocate new bool vector on heap.");for(const r of e)this.i._addBoolVectorEntry(i,r);this.i._addBoolVectorToInputSidePacket(i,n)})}addDoubleVectorToInputSidePacket(e,t){Mt(this,t,n=>{const i=this.i._allocateDoubleVector(e.length);if(!i)throw Error("Unable to allocate new double vector on heap.");for(const r of e)this.i._addDoubleVectorEntry(i,r);this.i._addDoubleVectorToInputSidePacket(i,n)})}addFloatVectorToInputSidePacket(e,t){Mt(this,t,n=>{const i=this.i._allocateFloatVector(e.length);if(!i)throw Error("Unable to allocate new float vector on heap.");for(const r of e)this.i._addFloatVectorEntry(i,r);this.i._addFloatVectorToInputSidePacket(i,n)})}addIntVectorToInputSidePacket(e,t){Mt(this,t,n=>{const i=this.i._allocateIntVector(e.length);if(!i)throw Error("Unable to allocate new int vector on heap.");for(const r of e)this.i._addIntVectorEntry(i,r);this.i._addIntVectorToInputSidePacket(i,n)})}addUintVectorToInputSidePacket(e,t){Mt(this,t,n=>{const i=this.i._allocateUintVector(e.length);if(!i)throw Error("Unable to allocate new unsigned int vector on heap.");for(const r of e)this.i._addUintVectorEntry(i,r);this.i._addUintVectorToInputSidePacket(i,n)})}addStringVectorToInputSidePacket(e,t){Mt(this,t,n=>{const i=this.i._allocateStringVector(e.length);if(!i)throw Error("Unable to allocate new string vector on heap.");for(const r of e)Mt(this,r,s=>{this.i._addStringVectorEntry(i,s)});this.i._addStringVectorToInputSidePacket(i,n)})}attachBoolListener(e,t){$n(this,e,t),Mt(this,e,n=>{this.i._attachBoolListener(n)})}attachBoolVectorListener(e,t){Li(this,e,t),Mt(this,e,n=>{this.i._attachBoolVectorListener(n)})}attachIntListener(e,t){$n(this,e,t),Mt(this,e,n=>{this.i._attachIntListener(n)})}attachIntVectorListener(e,t){Li(this,e,t),Mt(this,e,n=>{this.i._attachIntVectorListener(n)})}attachUintListener(e,t){$n(this,e,t),Mt(this,e,n=>{this.i._attachUintListener(n)})}attachUintVectorListener(e,t){Li(this,e,t),Mt(this,e,n=>{this.i._attachUintVectorListener(n)})}attachDoubleListener(e,t){$n(this,e,t),Mt(this,e,n=>{this.i._attachDoubleListener(n)})}attachDoubleVectorListener(e,t){Li(this,e,t),Mt(this,e,n=>{this.i._attachDoubleVectorListener(n)})}attachFloatListener(e,t){$n(this,e,t),Mt(this,e,n=>{this.i._attachFloatListener(n)})}attachFloatVectorListener(e,t){Li(this,e,t),Mt(this,e,n=>{this.i._attachFloatVectorListener(n)})}attachStringListener(e,t){$n(this,e,t),Mt(this,e,n=>{this.i._attachStringListener(n)})}attachStringVectorListener(e,t){Li(this,e,t),Mt(this,e,n=>{this.i._attachStringVectorListener(n)})}attachProtoListener(e,t,n){$n(this,e,t),Mt(this,e,i=>{this.i._attachProtoListener(i,n||!1)})}attachProtoVectorListener(e,t,n){Li(this,e,t),Mt(this,e,i=>{this.i._attachProtoVectorListener(i,n||!1)})}attachAudioListener(e,t,n){this.i._attachAudioListener||console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'),$n(this,e,(i,r)=>{i=new Float32Array(i.buffer,i.byteOffset,i.length/4),t(i,r)}),Mt(this,e,i=>{this.i._attachAudioListener(i,n||!1)})}finishProcessing(){this.i._waitUntilIdle()}closeGraph(){this.i._closeGraph(),this.i.simpleListeners=void 0,this.i.emptyPacketListeners=void 0}},class extends $u{get ha(){return this.i}sa(e,t,n){Mt(this,t,i=>{const[r,s]=Hu(this,e,i);this.ha._addBoundTextureAsImageToStream(i,r,s,n)})}W(e,t){$n(this,e,t),Mt(this,e,n=>{this.ha._attachImageListener(n)})}da(e,t){Li(this,e,t),Mt(this,e,n=>{this.ha._attachImageVectorListener(n)})}}));var $u,Fn=class extends Kg{};async function Ot(e,t,n){return async function(i,r,s,a){return Yg(i,r,s,a)}(e,n.canvas??(rm()?void 0:document.createElement("canvas")),t,n)}function hm(e,t,n,i){if(e.V){const s=new wp;if(n!=null&&n.regionOfInterest){if(!e.ra)throw Error("This task doesn't support region-of-interest.");var r=n.regionOfInterest;if(r.left>=r.right||r.top>=r.bottom)throw Error("Expected RectF with left < right and top < bottom.");if(0>r.left||0>r.top||1<r.right||1<r.bottom)throw Error("Expected RectF values to be in [0,1].");vt(s,1,(r.left+r.right)/2),vt(s,2,(r.top+r.bottom)/2),vt(s,4,r.right-r.left),vt(s,3,r.bottom-r.top)}else vt(s,1,.5),vt(s,2,.5),vt(s,4,1),vt(s,3,1);if(n!=null&&n.rotationDegrees){if((n==null?void 0:n.rotationDegrees)%90!=0)throw Error("Expected rotation to be a multiple of 90°.");if(vt(s,5,-Math.PI*n.rotationDegrees/180),(n==null?void 0:n.rotationDegrees)%180!=0){const[a,o]=sm(t);n=be(s,3)*o/a,r=be(s,4)*a/o,vt(s,4,n),vt(s,3,r)}}e.g.addProtoToStream(s.g(),"mediapipe.NormalizedRect",e.V,i)}e.g.sa(t,e.ba,i??performance.now()),e.finishProcessing()}function On(e,t,n){var i;if((i=e.baseOptions)!=null&&i.g())throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");hm(e,t,n,e.J+1)}function li(e,t,n,i){var r;if(!((r=e.baseOptions)!=null&&r.g()))throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");hm(e,t,n,i)}function ts(e,t,n,i){var r=t.data;const s=t.width,a=s*(t=t.height);if((r instanceof Uint8Array||r instanceof Float32Array)&&r.length!==a)throw Error("Unsupported channel count: "+r.length/a);return e=new ke([r],n,!1,e.g.i.canvas,e.M,s,t),i?e.clone():e}var on=class extends Ga{constructor(e,t,n,i){super(e),this.g=e,this.ba=t,this.V=n,this.ra=i,this.M=new Gh}l(e,t=!0){if("runningMode"in e&&ks(this.baseOptions,2,!!e.runningMode&&e.runningMode!=="IMAGE"),e.canvas!==void 0&&this.g.i.canvas!==e.canvas)throw Error("You must create a new task to reset the canvas.");return super.l(e,t)}close(){this.M.close(),super.close()}};on.prototype.close=on.prototype.close;var Tn=class extends on{constructor(e,t){super(new Fn(e,t),"image_in","norm_rect_in",!1),this.j={detections:[]},Tt(e=this.h=new Lo,0,1,t=new xe),vt(this.h,2,.5),vt(this.h,3,.3)}get baseOptions(){return Wt(this.h,xe,1)}set baseOptions(e){Tt(this.h,0,1,e)}o(e){return"minDetectionConfidence"in e&&vt(this.h,2,e.minDetectionConfidence??.5),"minSuppressionThreshold"in e&&vt(this.h,3,e.minSuppressionThreshold??.3),this.l(e)}F(e,t){return this.j={detections:[]},On(this,e,t),this.j}G(e,t,n){return this.j={detections:[]},li(this,e,n,t),this.j}m(){var e=new $e;ge(e,"image_in"),ge(e,"norm_rect_in"),Yt(e,"detections");const t=new Mn;Yn(t,Lg,this.h);const n=new Ye;Sn(n,"mediapipe.tasks.vision.face_detector.FaceDetectorGraph"),he(n,"IMAGE:image_in"),he(n,"NORM_RECT:norm_rect_in"),Bt(n,"DETECTIONS:detections"),n.o(t),yn(e,n),this.g.attachProtoVectorListener("detections",(i,r)=>{for(const s of i)i=Sp(s),this.j.detections.push(nm(i));ot(this,r)}),this.g.attachEmptyPacketListener("detections",i=>{ot(this,i)}),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Tn.prototype.detectForVideo=Tn.prototype.G,Tn.prototype.detect=Tn.prototype.F,Tn.prototype.setOptions=Tn.prototype.o,Tn.createFromModelPath=async function(e,t){return Ot(Tn,e,{baseOptions:{modelAssetPath:t}})},Tn.createFromModelBuffer=function(e,t){return Ot(Tn,e,{baseOptions:{modelAssetBuffer:t}})},Tn.createFromOptions=function(e,t){return Ot(Tn,e,t)};var Vh=Kn([61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]),Wh=Kn([263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]),Xh=Kn([276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]),um=Kn([474,475],[475,476],[476,477],[477,474]),qh=Kn([33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]),Yh=Kn([46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]),fm=Kn([469,470],[470,471],[471,472],[472,469]),jh=Kn([10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]),dm=[...Vh,...Wh,...Xh,...qh,...Yh,...jh],pm=Kn([127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]);function Zu(e){e.u={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]}}var Se=class extends on{constructor(e,t){super(new Fn(e,t),"image_in","norm_rect",!1),this.u={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]},this.outputFacialTransformationMatrixes=this.outputFaceBlendshapes=!1,Tt(e=this.h=new Op,0,1,t=new xe),this.H=new Fp,Tt(this.h,0,3,this.H),this.j=new Lo,Tt(this.h,0,2,this.j),si(this.j,4,1),vt(this.j,2,.5),vt(this.H,2,.5),vt(this.h,4,.5)}get baseOptions(){return Wt(this.h,xe,1)}set baseOptions(e){Tt(this.h,0,1,e)}o(e){return"numFaces"in e&&si(this.j,4,e.numFaces??1),"minFaceDetectionConfidence"in e&&vt(this.j,2,e.minFaceDetectionConfidence??.5),"minTrackingConfidence"in e&&vt(this.h,4,e.minTrackingConfidence??.5),"minFacePresenceConfidence"in e&&vt(this.H,2,e.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in e&&(this.outputFaceBlendshapes=!!e.outputFaceBlendshapes),"outputFacialTransformationMatrixes"in e&&(this.outputFacialTransformationMatrixes=!!e.outputFacialTransformationMatrixes),this.l(e)}F(e,t){return Zu(this),On(this,e,t),this.u}G(e,t,n){return Zu(this),li(this,e,n,t),this.u}m(){var e=new $e;ge(e,"image_in"),ge(e,"norm_rect"),Yt(e,"face_landmarks");const t=new Mn;Yn(t,Ug,this.h);const n=new Ye;Sn(n,"mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"),he(n,"IMAGE:image_in"),he(n,"NORM_RECT:norm_rect"),Bt(n,"NORM_LANDMARKS:face_landmarks"),n.o(t),yn(e,n),this.g.attachProtoVectorListener("face_landmarks",(i,r)=>{for(const s of i)i=$s(s),this.u.faceLandmarks.push(Do(i));ot(this,r)}),this.g.attachEmptyPacketListener("face_landmarks",i=>{ot(this,i)}),this.outputFaceBlendshapes&&(Yt(e,"blendshapes"),Bt(n,"BLENDSHAPES:blendshapes"),this.g.attachProtoVectorListener("blendshapes",(i,r)=>{if(this.outputFaceBlendshapes)for(const s of i)i=Co(s),this.u.faceBlendshapes.push(Oh(i.g()??[]));ot(this,r)}),this.g.attachEmptyPacketListener("blendshapes",i=>{ot(this,i)})),this.outputFacialTransformationMatrixes&&(Yt(e,"face_geometry"),Bt(n,"FACE_GEOMETRY:face_geometry"),this.g.attachProtoVectorListener("face_geometry",(i,r)=>{if(this.outputFacialTransformationMatrixes)for(const s of i)(i=Wt(Dg(s),bp,2))&&this.u.facialTransformationMatrixes.push({rows:qn(Ln(i,1),0)??0,columns:qn(Ln(i,2),0)??0,data:kr(i,3,Ki).slice()??[]});ot(this,r)}),this.g.attachEmptyPacketListener("face_geometry",i=>{ot(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Se.prototype.detectForVideo=Se.prototype.G,Se.prototype.detect=Se.prototype.F,Se.prototype.setOptions=Se.prototype.o,Se.createFromModelPath=function(e,t){return Ot(Se,e,{baseOptions:{modelAssetPath:t}})},Se.createFromModelBuffer=function(e,t){return Ot(Se,e,{baseOptions:{modelAssetBuffer:t}})},Se.createFromOptions=function(e,t){return Ot(Se,e,t)},Se.FACE_LANDMARKS_LIPS=Vh,Se.FACE_LANDMARKS_LEFT_EYE=Wh,Se.FACE_LANDMARKS_LEFT_EYEBROW=Xh,Se.FACE_LANDMARKS_LEFT_IRIS=um,Se.FACE_LANDMARKS_RIGHT_EYE=qh,Se.FACE_LANDMARKS_RIGHT_EYEBROW=Yh,Se.FACE_LANDMARKS_RIGHT_IRIS=fm,Se.FACE_LANDMARKS_FACE_OVAL=jh,Se.FACE_LANDMARKS_CONTOURS=dm,Se.FACE_LANDMARKS_TESSELATION=pm;var Zn=class extends on{constructor(e,t){super(new Fn(e,t),"image_in","norm_rect",!0),Tt(e=this.j=new kp,0,1,t=new xe)}get baseOptions(){return Wt(this.j,xe,1)}set baseOptions(e){Tt(this.j,0,1,e)}o(e){return super.l(e)}Pa(e,t,n){const i=typeof t!="function"?t:{};if(this.h=typeof t=="function"?t:n,On(this,e,i??{}),!this.h)return this.u}m(){var e=new $e;ge(e,"image_in"),ge(e,"norm_rect"),Yt(e,"stylized_image");const t=new Mn;Yn(t,Ig,this.j);const n=new Ye;Sn(n,"mediapipe.tasks.vision.face_stylizer.FaceStylizerGraph"),he(n,"IMAGE:image_in"),he(n,"NORM_RECT:norm_rect"),Bt(n,"STYLIZED_IMAGE:stylized_image"),n.o(t),yn(e,n),this.g.W("stylized_image",(i,r)=>{var s=!this.h,a=i.data,o=i.width;const c=o*(i=i.height);if(a instanceof Uint8Array)if(a.length===3*c){const l=new Uint8ClampedArray(4*c);for(let h=0;h<c;++h)l[4*h]=a[3*h],l[4*h+1]=a[3*h+1],l[4*h+2]=a[3*h+2],l[4*h+3]=255;a=new ImageData(l,o,i)}else{if(a.length!==4*c)throw Error("Unsupported channel count: "+a.length/c);a=new ImageData(new Uint8ClampedArray(a.buffer,a.byteOffset,a.length),o,i)}else if(!(a instanceof WebGLTexture))throw Error(`Unsupported format: ${a.constructor.name}`);o=new ze([a],!1,!1,this.g.i.canvas,this.M,o,i),this.u=s=s?o.clone():o,this.h&&this.h(s),ot(this,r)}),this.g.attachEmptyPacketListener("stylized_image",i=>{this.u=null,this.h&&this.h(null),ot(this,i)}),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Zn.prototype.stylize=Zn.prototype.Pa,Zn.prototype.setOptions=Zn.prototype.o,Zn.createFromModelPath=function(e,t){return Ot(Zn,e,{baseOptions:{modelAssetPath:t}})},Zn.createFromModelBuffer=function(e,t){return Ot(Zn,e,{baseOptions:{modelAssetBuffer:t}})},Zn.createFromOptions=function(e,t){return Ot(Zn,e,t)};var Kh=Kn([0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]);function Ju(e){e.gestures=[],e.landmarks=[],e.worldLandmarks=[],e.handedness=[]}function Qu(e){return e.gestures.length===0?{gestures:[],landmarks:[],worldLandmarks:[],handedness:[],handednesses:[]}:{gestures:e.gestures,landmarks:e.landmarks,worldLandmarks:e.worldLandmarks,handedness:e.handedness,handednesses:e.handedness}}function tf(e,t=!0){const n=[];for(const r of e){var i=Co(r);e=[];for(const s of i.g())i=t&&Ln(s,1)!=null?qn(Ln(s,1),0):-1,e.push({score:be(s,2)??0,index:i,categoryName:ri(s,3)??"",displayName:ri(s,4)??""});n.push(e)}return n}var dn=class extends on{constructor(e,t){super(new Fn(e,t),"image_in","norm_rect",!1),this.gestures=[],this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Tt(e=this.v=new qp,0,1,t=new xe),this.A=new Dh,Tt(this.v,0,2,this.A),this.u=new Ph,Tt(this.A,0,3,this.u),this.h=new Vp,Tt(this.A,0,2,this.h),this.j=new Ng,Tt(this.v,0,3,this.j),vt(this.h,2,.5),vt(this.A,4,.5),vt(this.u,2,.5)}get baseOptions(){return Wt(this.v,xe,1)}set baseOptions(e){Tt(this.v,0,1,e)}o(e){var r,s,a,o;if(si(this.h,3,e.numHands??1),"minHandDetectionConfidence"in e&&vt(this.h,2,e.minHandDetectionConfidence??.5),"minTrackingConfidence"in e&&vt(this.A,4,e.minTrackingConfidence??.5),"minHandPresenceConfidence"in e&&vt(this.u,2,e.minHandPresenceConfidence??.5),e.cannedGesturesClassifierOptions){var t=new Tr,n=t,i=Zc(e.cannedGesturesClassifierOptions,(r=Wt(this.j,Tr,3))==null?void 0:r.h());Tt(n,0,2,i),Tt(this.j,0,3,t)}else e.cannedGesturesClassifierOptions===void 0&&((s=Wt(this.j,Tr,3))==null||s.g());return e.customGesturesClassifierOptions?(Tt(n=t=new Tr,0,2,i=Zc(e.customGesturesClassifierOptions,(a=Wt(this.j,Tr,4))==null?void 0:a.h())),Tt(this.j,0,4,t)):e.customGesturesClassifierOptions===void 0&&((o=Wt(this.j,Tr,4))==null||o.g()),this.l(e)}Ka(e,t){return Ju(this),On(this,e,t),Qu(this)}La(e,t,n){return Ju(this),li(this,e,n,t),Qu(this)}m(){var e=new $e;ge(e,"image_in"),ge(e,"norm_rect"),Yt(e,"hand_gestures"),Yt(e,"hand_landmarks"),Yt(e,"world_hand_landmarks"),Yt(e,"handedness");const t=new Mn;Yn(t,Bg,this.v);const n=new Ye;Sn(n,"mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"),he(n,"IMAGE:image_in"),he(n,"NORM_RECT:norm_rect"),Bt(n,"HAND_GESTURES:hand_gestures"),Bt(n,"LANDMARKS:hand_landmarks"),Bt(n,"WORLD_LANDMARKS:world_hand_landmarks"),Bt(n,"HANDEDNESS:handedness"),n.o(t),yn(e,n),this.g.attachProtoVectorListener("hand_landmarks",(i,r)=>{for(const s of i){i=$s(s);const a=[];for(const o of Ai(i,Tp,1))a.push({x:be(o,1)??0,y:be(o,2)??0,z:be(o,3)??0,visibility:be(o,4)??0});this.landmarks.push(a)}ot(this,r)}),this.g.attachEmptyPacketListener("hand_landmarks",i=>{ot(this,i)}),this.g.attachProtoVectorListener("world_hand_landmarks",(i,r)=>{for(const s of i){i=Hr(s);const a=[];for(const o of Ai(i,yp,1))a.push({x:be(o,1)??0,y:be(o,2)??0,z:be(o,3)??0,visibility:be(o,4)??0});this.worldLandmarks.push(a)}ot(this,r)}),this.g.attachEmptyPacketListener("world_hand_landmarks",i=>{ot(this,i)}),this.g.attachProtoVectorListener("hand_gestures",(i,r)=>{this.gestures.push(...tf(i,!1)),ot(this,r)}),this.g.attachEmptyPacketListener("hand_gestures",i=>{ot(this,i)}),this.g.attachProtoVectorListener("handedness",(i,r)=>{this.handedness.push(...tf(i)),ot(this,r)}),this.g.attachEmptyPacketListener("handedness",i=>{ot(this,i)}),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};function ef(e){return{landmarks:e.landmarks,worldLandmarks:e.worldLandmarks,handednesses:e.handedness,handedness:e.handedness}}dn.prototype.recognizeForVideo=dn.prototype.La,dn.prototype.recognize=dn.prototype.Ka,dn.prototype.setOptions=dn.prototype.o,dn.createFromModelPath=function(e,t){return Ot(dn,e,{baseOptions:{modelAssetPath:t}})},dn.createFromModelBuffer=function(e,t){return Ot(dn,e,{baseOptions:{modelAssetBuffer:t}})},dn.createFromOptions=function(e,t){return Ot(dn,e,t)},dn.HAND_CONNECTIONS=Kh;var pn=class extends on{constructor(e,t){super(new Fn(e,t),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Tt(e=this.j=new Dh,0,1,t=new xe),this.u=new Ph,Tt(this.j,0,3,this.u),this.h=new Vp,Tt(this.j,0,2,this.h),si(this.h,3,1),vt(this.h,2,.5),vt(this.u,2,.5),vt(this.j,4,.5)}get baseOptions(){return Wt(this.j,xe,1)}set baseOptions(e){Tt(this.j,0,1,e)}o(e){return"numHands"in e&&si(this.h,3,e.numHands??1),"minHandDetectionConfidence"in e&&vt(this.h,2,e.minHandDetectionConfidence??.5),"minTrackingConfidence"in e&&vt(this.j,4,e.minTrackingConfidence??.5),"minHandPresenceConfidence"in e&&vt(this.u,2,e.minHandPresenceConfidence??.5),this.l(e)}F(e,t){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],On(this,e,t),ef(this)}G(e,t,n){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],li(this,e,n,t),ef(this)}m(){var e=new $e;ge(e,"image_in"),ge(e,"norm_rect"),Yt(e,"hand_landmarks"),Yt(e,"world_hand_landmarks"),Yt(e,"handedness");const t=new Mn;Yn(t,Og,this.j);const n=new Ye;Sn(n,"mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"),he(n,"IMAGE:image_in"),he(n,"NORM_RECT:norm_rect"),Bt(n,"LANDMARKS:hand_landmarks"),Bt(n,"WORLD_LANDMARKS:world_hand_landmarks"),Bt(n,"HANDEDNESS:handedness"),n.o(t),yn(e,n),this.g.attachProtoVectorListener("hand_landmarks",(i,r)=>{for(const s of i)i=$s(s),this.landmarks.push(Do(i));ot(this,r)}),this.g.attachEmptyPacketListener("hand_landmarks",i=>{ot(this,i)}),this.g.attachProtoVectorListener("world_hand_landmarks",(i,r)=>{for(const s of i)i=Hr(s),this.worldLandmarks.push(Ns(i));ot(this,r)}),this.g.attachEmptyPacketListener("world_hand_landmarks",i=>{ot(this,i)}),this.g.attachProtoVectorListener("handedness",(i,r)=>{var s=this.handedness,a=s.push;const o=[];for(const c of i){i=Co(c);const l=[];for(const h of i.g())l.push({score:be(h,2)??0,index:qn(Ln(h,1),0)??-1,categoryName:ri(h,3)??"",displayName:ri(h,4)??""});o.push(l)}a.call(s,...o),ot(this,r)}),this.g.attachEmptyPacketListener("handedness",i=>{ot(this,i)}),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};pn.prototype.detectForVideo=pn.prototype.G,pn.prototype.detect=pn.prototype.F,pn.prototype.setOptions=pn.prototype.o,pn.createFromModelPath=function(e,t){return Ot(pn,e,{baseOptions:{modelAssetPath:t}})},pn.createFromModelBuffer=function(e,t){return Ot(pn,e,{baseOptions:{modelAssetBuffer:t}})},pn.createFromOptions=function(e,t){return Ot(pn,e,t)},pn.HAND_CONNECTIONS=Kh;var mm=Kn([0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]);function nf(e){e.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]}}function rf(e){try{if(!e.I)return e.h;e.I(e.h)}finally{Io(e)}}function ha(e,t){e=$s(e),t.push(Do(e))}var _e=class extends on{constructor(e,t){super(new Fn(e,t),"input_frames_image",null,!1),this.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]},this.outputPoseSegmentationMasks=this.outputFaceBlendshapes=!1,Tt(e=this.A=new Kp,0,1,t=new xe),this.u=new Ph,Tt(this.A,0,2,this.u),this.aa=new kg,Tt(this.A,0,3,this.aa),this.j=new Lo,Tt(this.A,0,4,this.j),this.H=new Fp,Tt(this.A,0,5,this.H),this.v=new Yp,Tt(this.A,0,6,this.v),this.D=new jp,Tt(this.A,0,7,this.D),vt(this.j,2,.5),vt(this.j,3,.3),vt(this.H,2,.5),vt(this.v,2,.5),vt(this.v,3,.3),vt(this.D,2,.5),vt(this.u,2,.5)}get baseOptions(){return Wt(this.A,xe,1)}set baseOptions(e){Tt(this.A,0,1,e)}o(e){return"minFaceDetectionConfidence"in e&&vt(this.j,2,e.minFaceDetectionConfidence??.5),"minFaceSuppressionThreshold"in e&&vt(this.j,3,e.minFaceSuppressionThreshold??.3),"minFacePresenceConfidence"in e&&vt(this.H,2,e.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in e&&(this.outputFaceBlendshapes=!!e.outputFaceBlendshapes),"minPoseDetectionConfidence"in e&&vt(this.v,2,e.minPoseDetectionConfidence??.5),"minPoseSuppressionThreshold"in e&&vt(this.v,3,e.minPoseSuppressionThreshold??.3),"minPosePresenceConfidence"in e&&vt(this.D,2,e.minPosePresenceConfidence??.5),"outputPoseSegmentationMasks"in e&&(this.outputPoseSegmentationMasks=!!e.outputPoseSegmentationMasks),"minHandLandmarksConfidence"in e&&vt(this.u,2,e.minHandLandmarksConfidence??.5),this.l(e)}F(e,t,n){const i=typeof t!="function"?t:{};return this.I=typeof t=="function"?t:n,nf(this),On(this,e,i),rf(this)}G(e,t,n,i){const r=typeof n!="function"?n:{};return this.I=typeof n=="function"?n:i,nf(this),li(this,e,r,t),rf(this)}m(){var e=new $e;ge(e,"input_frames_image"),Yt(e,"pose_landmarks"),Yt(e,"pose_world_landmarks"),Yt(e,"face_landmarks"),Yt(e,"left_hand_landmarks"),Yt(e,"left_hand_world_landmarks"),Yt(e,"right_hand_landmarks"),Yt(e,"right_hand_world_landmarks");const t=new Mn,n=new Nu;qc(n,1,fs("type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions"),""),function(r,s){if(s!=null)if(Array.isArray(s))le(r,2,yo(s,xh,void 0,void 0,!1));else{if(!(typeof s=="string"||s instanceof yi||Vs(s)))throw Error("invalid value in Any.value field: "+s+" expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array");qc(r,2,dh(s,!1,!1),xr())}}(n,this.A.g());const i=new Ye;Sn(i,"mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph"),ao(i,8,Nu,n),he(i,"IMAGE:input_frames_image"),Bt(i,"POSE_LANDMARKS:pose_landmarks"),Bt(i,"POSE_WORLD_LANDMARKS:pose_world_landmarks"),Bt(i,"FACE_LANDMARKS:face_landmarks"),Bt(i,"LEFT_HAND_LANDMARKS:left_hand_landmarks"),Bt(i,"LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks"),Bt(i,"RIGHT_HAND_LANDMARKS:right_hand_landmarks"),Bt(i,"RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks"),i.o(t),yn(e,i),Uo(this,e),this.g.attachProtoListener("pose_landmarks",(r,s)=>{ha(r,this.h.poseLandmarks),ot(this,s)}),this.g.attachEmptyPacketListener("pose_landmarks",r=>{ot(this,r)}),this.g.attachProtoListener("pose_world_landmarks",(r,s)=>{var a=this.h.poseWorldLandmarks;r=Hr(r),a.push(Ns(r)),ot(this,s)}),this.g.attachEmptyPacketListener("pose_world_landmarks",r=>{ot(this,r)}),this.outputPoseSegmentationMasks&&(Bt(i,"POSE_SEGMENTATION_MASK:pose_segmentation_mask"),Zr(this,"pose_segmentation_mask"),this.g.W("pose_segmentation_mask",(r,s)=>{this.h.poseSegmentationMasks=[ts(this,r,!0,!this.I)],ot(this,s)}),this.g.attachEmptyPacketListener("pose_segmentation_mask",r=>{this.h.poseSegmentationMasks=[],ot(this,r)})),this.g.attachProtoListener("face_landmarks",(r,s)=>{ha(r,this.h.faceLandmarks),ot(this,s)}),this.g.attachEmptyPacketListener("face_landmarks",r=>{ot(this,r)}),this.outputFaceBlendshapes&&(Yt(e,"extra_blendshapes"),Bt(i,"FACE_BLENDSHAPES:extra_blendshapes"),this.g.attachProtoListener("extra_blendshapes",(r,s)=>{var a=this.h.faceBlendshapes;this.outputFaceBlendshapes&&(r=Co(r),a.push(Oh(r.g()??[]))),ot(this,s)}),this.g.attachEmptyPacketListener("extra_blendshapes",r=>{ot(this,r)})),this.g.attachProtoListener("left_hand_landmarks",(r,s)=>{ha(r,this.h.leftHandLandmarks),ot(this,s)}),this.g.attachEmptyPacketListener("left_hand_landmarks",r=>{ot(this,r)}),this.g.attachProtoListener("left_hand_world_landmarks",(r,s)=>{var a=this.h.leftHandWorldLandmarks;r=Hr(r),a.push(Ns(r)),ot(this,s)}),this.g.attachEmptyPacketListener("left_hand_world_landmarks",r=>{ot(this,r)}),this.g.attachProtoListener("right_hand_landmarks",(r,s)=>{ha(r,this.h.rightHandLandmarks),ot(this,s)}),this.g.attachEmptyPacketListener("right_hand_landmarks",r=>{ot(this,r)}),this.g.attachProtoListener("right_hand_world_landmarks",(r,s)=>{var a=this.h.rightHandWorldLandmarks;r=Hr(r),a.push(Ns(r)),ot(this,s)}),this.g.attachEmptyPacketListener("right_hand_world_landmarks",r=>{ot(this,r)}),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};_e.prototype.detectForVideo=_e.prototype.G,_e.prototype.detect=_e.prototype.F,_e.prototype.setOptions=_e.prototype.o,_e.createFromModelPath=function(e,t){return Ot(_e,e,{baseOptions:{modelAssetPath:t}})},_e.createFromModelBuffer=function(e,t){return Ot(_e,e,{baseOptions:{modelAssetBuffer:t}})},_e.createFromOptions=function(e,t){return Ot(_e,e,t)},_e.HAND_CONNECTIONS=Kh,_e.POSE_CONNECTIONS=mm,_e.FACE_LANDMARKS_LIPS=Vh,_e.FACE_LANDMARKS_LEFT_EYE=Wh,_e.FACE_LANDMARKS_LEFT_EYEBROW=Xh,_e.FACE_LANDMARKS_LEFT_IRIS=um,_e.FACE_LANDMARKS_RIGHT_EYE=qh,_e.FACE_LANDMARKS_RIGHT_EYEBROW=Yh,_e.FACE_LANDMARKS_RIGHT_IRIS=fm,_e.FACE_LANDMARKS_FACE_OVAL=jh,_e.FACE_LANDMARKS_CONTOURS=dm,_e.FACE_LANDMARKS_TESSELATION=pm;var An=class extends on{constructor(e,t){super(new Fn(e,t),"input_image","norm_rect",!0),this.j={classifications:[]},Tt(e=this.h=new $p,0,1,t=new xe)}get baseOptions(){return Wt(this.h,xe,1)}set baseOptions(e){Tt(this.h,0,1,e)}o(e){return Tt(this.h,0,2,Zc(e,Wt(this.h,Po,2))),this.l(e)}ua(e,t){return this.j={classifications:[]},On(this,e,t),this.j}va(e,t,n){return this.j={classifications:[]},li(this,e,n,t),this.j}m(){var e=new $e;ge(e,"input_image"),ge(e,"norm_rect"),Yt(e,"classifications");const t=new Mn;Yn(t,Gg,this.h);const n=new Ye;Sn(n,"mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"),he(n,"IMAGE:input_image"),he(n,"NORM_RECT:norm_rect"),Bt(n,"CLASSIFICATIONS:classifications"),n.o(t),yn(e,n),this.g.attachProtoListener("classifications",(i,r)=>{this.j=function(s){const a={classifications:Ai(s,Eg,1).map(o=>{var c;return Oh(((c=Wt(o,wh,4))==null?void 0:c.g())??[],qn(Ln(o,2),0),ri(o,3))})};return no(Xi(s,2))!=null&&(a.timestampMs=qn(no(Xi(s,2)),0)),a}(Ag(i)),ot(this,r)}),this.g.attachEmptyPacketListener("classifications",i=>{ot(this,i)}),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};An.prototype.classifyForVideo=An.prototype.va,An.prototype.classify=An.prototype.ua,An.prototype.setOptions=An.prototype.o,An.createFromModelPath=function(e,t){return Ot(An,e,{baseOptions:{modelAssetPath:t}})},An.createFromModelBuffer=function(e,t){return Ot(An,e,{baseOptions:{modelAssetBuffer:t}})},An.createFromOptions=function(e,t){return Ot(An,e,t)};var mn=class extends on{constructor(e,t){super(new Fn(e,t),"image_in","norm_rect",!0),this.h=new Zp,this.embeddings={embeddings:[]},Tt(e=this.h,0,1,t=new xe)}get baseOptions(){return Wt(this.h,xe,1)}set baseOptions(e){Tt(this.h,0,1,e)}o(e){var t=this.h,n=Wt(this.h,Ou,2);return n=n?n.clone():new Ou,e.l2Normalize!==void 0?ks(n,1,e.l2Normalize):"l2Normalize"in e&&le(n,1),e.quantize!==void 0?ks(n,2,e.quantize):"quantize"in e&&le(n,2),Tt(t,0,2,n),this.l(e)}Ba(e,t){return On(this,e,t),this.embeddings}Ca(e,t,n){return li(this,e,n,t),this.embeddings}m(){var e=new $e;ge(e,"image_in"),ge(e,"norm_rect"),Yt(e,"embeddings_out");const t=new Mn;Yn(t,Hg,this.h);const n=new Ye;Sn(n,"mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"),he(n,"IMAGE:image_in"),he(n,"NORM_RECT:norm_rect"),Bt(n,"EMBEDDINGS:embeddings_out"),n.o(t),yn(e,n),this.g.attachProtoListener("embeddings_out",(i,r)=>{i=Cg(i),this.embeddings=function(s){return{embeddings:Ai(s,wg,1).map(a=>{var c,l;const o={headIndex:qn(Ln(a,3),0)??-1,headName:ri(a,4)??""};if(qd(a,Kc,tc(a,1))!==void 0)a=kr(a=Wt(a,Kc,tc(a,1)),1,Ki),o.floatEmbedding=a.slice();else{const h=new Uint8Array(0);o.quantizedEmbedding=((l=(c=Wt(a,bg,tc(a,2)))==null?void 0:c.qa())==null?void 0:l.h())??h}return o}),timestampMs:qn(no(Xi(s,2)),0)}}(i),ot(this,r)}),this.g.attachEmptyPacketListener("embeddings_out",i=>{ot(this,i)}),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};mn.cosineSimilarity=function(e,t){if(e.floatEmbedding&&t.floatEmbedding)e=zu(e.floatEmbedding,t.floatEmbedding);else{if(!e.quantizedEmbedding||!t.quantizedEmbedding)throw Error("Cannot compute cosine similarity between quantized and float embeddings.");e=zu(ku(e.quantizedEmbedding),ku(t.quantizedEmbedding))}return e},mn.prototype.embedForVideo=mn.prototype.Ca,mn.prototype.embed=mn.prototype.Ba,mn.prototype.setOptions=mn.prototype.o,mn.createFromModelPath=function(e,t){return Ot(mn,e,{baseOptions:{modelAssetPath:t}})},mn.createFromModelBuffer=function(e,t){return Ot(mn,e,{baseOptions:{modelAssetBuffer:t}})},mn.createFromOptions=function(e,t){return Ot(mn,e,t)};var tl=class{constructor(e,t,n){this.confidenceMasks=e,this.categoryMask=t,this.qualityScores=n}close(){var e,t;(e=this.confidenceMasks)==null||e.forEach(n=>{n.close()}),(t=this.categoryMask)==null||t.close()}};function sf(e){e.categoryMask=void 0,e.confidenceMasks=void 0,e.qualityScores=void 0}function af(e){try{const t=new tl(e.confidenceMasks,e.categoryMask,e.qualityScores);if(!e.j)return t;e.j(t)}finally{Io(e)}}tl.prototype.close=tl.prototype.close;var Qe=class extends on{constructor(e,t){super(new Fn(e,t),"image_in","norm_rect",!1),this.u=[],this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new Nh,this.v=new Jp,Tt(this.h,0,3,this.v),Tt(e=this.h,0,1,t=new xe)}get baseOptions(){return Wt(this.h,xe,1)}set baseOptions(e){Tt(this.h,0,1,e)}o(e){return e.displayNamesLocale!==void 0?le(this.h,2,fs(e.displayNamesLocale)):"displayNamesLocale"in e&&le(this.h,2),"outputCategoryMask"in e&&(this.outputCategoryMask=e.outputCategoryMask??!1),"outputConfidenceMasks"in e&&(this.outputConfidenceMasks=e.outputConfidenceMasks??!0),super.l(e)}L(){(function(e){var n,i;const t=Ai(e.fa(),Ye,1).filter(r=>ri(r,1).includes("mediapipe.tasks.TensorsToSegmentationCalculator"));if(e.u=[],1<t.length)throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");t.length===1&&(((i=(n=Wt(t[0],Mn,7))==null?void 0:n.l())==null?void 0:i.g())??new Map).forEach((r,s)=>{e.u[Number(s)]=ri(r,1)})})(this)}ga(e,t,n){const i=typeof t!="function"?t:{};return this.j=typeof t=="function"?t:n,sf(this),On(this,e,i),af(this)}Na(e,t,n,i){const r=typeof n!="function"?n:{};return this.j=typeof n=="function"?n:i,sf(this),li(this,e,r,t),af(this)}Fa(){return this.u}m(){var e=new $e;ge(e,"image_in"),ge(e,"norm_rect");const t=new Mn;Yn(t,tm,this.h);const n=new Ye;Sn(n,"mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"),he(n,"IMAGE:image_in"),he(n,"NORM_RECT:norm_rect"),n.o(t),yn(e,n),Uo(this,e),this.outputConfidenceMasks&&(Yt(e,"confidence_masks"),Bt(n,"CONFIDENCE_MASKS:confidence_masks"),Zr(this,"confidence_masks"),this.g.da("confidence_masks",(i,r)=>{this.confidenceMasks=i.map(s=>ts(this,s,!0,!this.j)),ot(this,r)}),this.g.attachEmptyPacketListener("confidence_masks",i=>{this.confidenceMasks=[],ot(this,i)})),this.outputCategoryMask&&(Yt(e,"category_mask"),Bt(n,"CATEGORY_MASK:category_mask"),Zr(this,"category_mask"),this.g.W("category_mask",(i,r)=>{this.categoryMask=ts(this,i,!1,!this.j),ot(this,r)}),this.g.attachEmptyPacketListener("category_mask",i=>{this.categoryMask=void 0,ot(this,i)})),Yt(e,"quality_scores"),Bt(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",(i,r)=>{this.qualityScores=i,ot(this,r)}),this.g.attachEmptyPacketListener("quality_scores",i=>{this.categoryMask=void 0,ot(this,i)}),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Qe.prototype.getLabels=Qe.prototype.Fa,Qe.prototype.segmentForVideo=Qe.prototype.Na,Qe.prototype.segment=Qe.prototype.ga,Qe.prototype.setOptions=Qe.prototype.o,Qe.createFromModelPath=function(e,t){return Ot(Qe,e,{baseOptions:{modelAssetPath:t}})},Qe.createFromModelBuffer=function(e,t){return Ot(Qe,e,{baseOptions:{modelAssetBuffer:t}})},Qe.createFromOptions=function(e,t){return Ot(Qe,e,t)};var el=class{constructor(e,t,n){this.confidenceMasks=e,this.categoryMask=t,this.qualityScores=n}close(){var e,t;(e=this.confidenceMasks)==null||e.forEach(n=>{n.close()}),(t=this.categoryMask)==null||t.close()}};el.prototype.close=el.prototype.close;var $g=class extends mt{constructor(e){super(e)}},es=[0,Te,-2],Zg=[0,Ei,-3,Ce],Bo=[0,Ei,-3,Ce,Ei,-1],gm=[0,Bo],Jg=[0,gm,es],Qg=[0,Bo,es],_m=[0,Bo,Te,-1],t_=[0,_m,es],e_=[0,Ei,-3,Ce,es,-1],n_=[0,Ei,-3,Ce,ai],rc=class extends mt{constructor(e){super(e)}},of=[0,Ei,-1,Ce],vm=class extends mt{constructor(){super()}};vm.B=[1];var cf=class extends mt{constructor(e){super(e)}},nl=[1,2,3,4,5,6,7,8,9,10,14,15],i_=[0,nl,ae,Bo,ae,Qg,ae,gm,ae,Jg,ae,of,ae,n_,ae,Zg,ae,[0,re,Ei,-2,Ce,Te,Ce,-1,2,Ei,es],ae,_m,ae,t_,Ei,es,re,ae,e_,ae,[0,Ie,of]],r_=[0,re,Te,-1,Ce],il=class extends mt{constructor(){super()}};il.B=[1],il.prototype.g=Ro([0,Ie,i_,re,r_]);var Jn=class extends on{constructor(e,t){super(new Fn(e,t),"image_in","norm_rect_in",!1),this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new Nh,this.v=new Jp,Tt(this.h,0,3,this.v),Tt(e=this.h,0,1,t=new xe)}get baseOptions(){return Wt(this.h,xe,1)}set baseOptions(e){Tt(this.h,0,1,e)}o(e){return"outputCategoryMask"in e&&(this.outputCategoryMask=e.outputCategoryMask??!1),"outputConfidenceMasks"in e&&(this.outputConfidenceMasks=e.outputConfidenceMasks??!0),super.l(e)}ga(e,t,n,i){const r=typeof n!="function"?n:{};this.j=typeof n=="function"?n:i,this.qualityScores=this.categoryMask=this.confidenceMasks=void 0,n=this.J+1,i=new il;const s=new cf;var a=new $g;if(si(a,1,255),Tt(s,0,12,a),t.keypoint&&t.scribble)throw Error("Cannot provide both keypoint and scribble.");if(t.keypoint){var o=new rc;ks(o,3,!0),vt(o,1,t.keypoint.x),vt(o,2,t.keypoint.y),Ds(s,5,nl,o)}else{if(!t.scribble)throw Error("Must provide either a keypoint or a scribble.");for(o of(a=new vm,t.scribble))ks(t=new rc,3,!0),vt(t,1,o.x),vt(t,2,o.y),ao(a,1,rc,t);Ds(s,15,nl,a)}ao(i,1,cf,s),this.g.addProtoToStream(i.g(),"drishti.RenderData","roi_in",n),On(this,e,r);t:{try{const l=new el(this.confidenceMasks,this.categoryMask,this.qualityScores);if(!this.j){var c=l;break t}this.j(l)}finally{Io(this)}c=void 0}return c}m(){var e=new $e;ge(e,"image_in"),ge(e,"roi_in"),ge(e,"norm_rect_in");const t=new Mn;Yn(t,tm,this.h);const n=new Ye;Sn(n,"mediapipe.tasks.vision.interactive_segmenter.InteractiveSegmenterGraph"),he(n,"IMAGE:image_in"),he(n,"ROI:roi_in"),he(n,"NORM_RECT:norm_rect_in"),n.o(t),yn(e,n),Uo(this,e),this.outputConfidenceMasks&&(Yt(e,"confidence_masks"),Bt(n,"CONFIDENCE_MASKS:confidence_masks"),Zr(this,"confidence_masks"),this.g.da("confidence_masks",(i,r)=>{this.confidenceMasks=i.map(s=>ts(this,s,!0,!this.j)),ot(this,r)}),this.g.attachEmptyPacketListener("confidence_masks",i=>{this.confidenceMasks=[],ot(this,i)})),this.outputCategoryMask&&(Yt(e,"category_mask"),Bt(n,"CATEGORY_MASK:category_mask"),Zr(this,"category_mask"),this.g.W("category_mask",(i,r)=>{this.categoryMask=ts(this,i,!1,!this.j),ot(this,r)}),this.g.attachEmptyPacketListener("category_mask",i=>{this.categoryMask=void 0,ot(this,i)})),Yt(e,"quality_scores"),Bt(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",(i,r)=>{this.qualityScores=i,ot(this,r)}),this.g.attachEmptyPacketListener("quality_scores",i=>{this.categoryMask=void 0,ot(this,i)}),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Jn.prototype.segment=Jn.prototype.ga,Jn.prototype.setOptions=Jn.prototype.o,Jn.createFromModelPath=function(e,t){return Ot(Jn,e,{baseOptions:{modelAssetPath:t}})},Jn.createFromModelBuffer=function(e,t){return Ot(Jn,e,{baseOptions:{modelAssetBuffer:t}})},Jn.createFromOptions=function(e,t){return Ot(Jn,e,t)};var bn=class extends on{constructor(e,t){super(new Fn(e,t),"input_frame_gpu","norm_rect",!1),this.j={detections:[]},Tt(e=this.h=new Fh,0,1,t=new xe)}get baseOptions(){return Wt(this.h,xe,1)}set baseOptions(e){Tt(this.h,0,1,e)}o(e){return e.displayNamesLocale!==void 0?le(this.h,2,fs(e.displayNamesLocale)):"displayNamesLocale"in e&&le(this.h,2),e.maxResults!==void 0?si(this.h,3,e.maxResults):"maxResults"in e&&le(this.h,3),e.scoreThreshold!==void 0?vt(this.h,4,e.scoreThreshold):"scoreThreshold"in e&&le(this.h,4),e.categoryAllowlist!==void 0?so(this.h,5,e.categoryAllowlist):"categoryAllowlist"in e&&le(this.h,5),e.categoryDenylist!==void 0?so(this.h,6,e.categoryDenylist):"categoryDenylist"in e&&le(this.h,6),this.l(e)}F(e,t){return this.j={detections:[]},On(this,e,t),this.j}G(e,t,n){return this.j={detections:[]},li(this,e,n,t),this.j}m(){var e=new $e;ge(e,"input_frame_gpu"),ge(e,"norm_rect"),Yt(e,"detections");const t=new Mn;Yn(t,Wg,this.h);const n=new Ye;Sn(n,"mediapipe.tasks.vision.ObjectDetectorGraph"),he(n,"IMAGE:input_frame_gpu"),he(n,"NORM_RECT:norm_rect"),Bt(n,"DETECTIONS:detections"),n.o(t),yn(e,n),this.g.attachProtoVectorListener("detections",(i,r)=>{for(const s of i)i=Sp(s),this.j.detections.push(nm(i));ot(this,r)}),this.g.attachEmptyPacketListener("detections",i=>{ot(this,i)}),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};bn.prototype.detectForVideo=bn.prototype.G,bn.prototype.detect=bn.prototype.F,bn.prototype.setOptions=bn.prototype.o,bn.createFromModelPath=async function(e,t){return Ot(bn,e,{baseOptions:{modelAssetPath:t}})},bn.createFromModelBuffer=function(e,t){return Ot(bn,e,{baseOptions:{modelAssetBuffer:t}})},bn.createFromOptions=function(e,t){return Ot(bn,e,t)};var rl=class{constructor(e,t,n){this.landmarks=e,this.worldLandmarks=t,this.segmentationMasks=n}close(){var e;(e=this.segmentationMasks)==null||e.forEach(t=>{t.close()})}};function lf(e){e.landmarks=[],e.worldLandmarks=[],e.segmentationMasks=void 0}function hf(e){try{const t=new rl(e.landmarks,e.worldLandmarks,e.segmentationMasks);if(!e.j)return t;e.j(t)}finally{Io(e)}}rl.prototype.close=rl.prototype.close;var je=class extends on{constructor(e,t){super(new Fn(e,t),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.outputSegmentationMasks=!1,Tt(e=this.h=new em,0,1,t=new xe),this.D=new jp,Tt(this.h,0,3,this.D),this.v=new Yp,Tt(this.h,0,2,this.v),si(this.v,4,1),vt(this.v,2,.5),vt(this.D,2,.5),vt(this.h,4,.5)}get baseOptions(){return Wt(this.h,xe,1)}set baseOptions(e){Tt(this.h,0,1,e)}o(e){return"numPoses"in e&&si(this.v,4,e.numPoses??1),"minPoseDetectionConfidence"in e&&vt(this.v,2,e.minPoseDetectionConfidence??.5),"minTrackingConfidence"in e&&vt(this.h,4,e.minTrackingConfidence??.5),"minPosePresenceConfidence"in e&&vt(this.D,2,e.minPosePresenceConfidence??.5),"outputSegmentationMasks"in e&&(this.outputSegmentationMasks=e.outputSegmentationMasks??!1),this.l(e)}F(e,t,n){const i=typeof t!="function"?t:{};return this.j=typeof t=="function"?t:n,lf(this),On(this,e,i),hf(this)}G(e,t,n,i){const r=typeof n!="function"?n:{};return this.j=typeof n=="function"?n:i,lf(this),li(this,e,r,t),hf(this)}m(){var e=new $e;ge(e,"image_in"),ge(e,"norm_rect"),Yt(e,"normalized_landmarks"),Yt(e,"world_landmarks"),Yt(e,"segmentation_masks");const t=new Mn;Yn(t,Xg,this.h);const n=new Ye;Sn(n,"mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"),he(n,"IMAGE:image_in"),he(n,"NORM_RECT:norm_rect"),Bt(n,"NORM_LANDMARKS:normalized_landmarks"),Bt(n,"WORLD_LANDMARKS:world_landmarks"),n.o(t),yn(e,n),Uo(this,e),this.g.attachProtoVectorListener("normalized_landmarks",(i,r)=>{this.landmarks=[];for(const s of i)i=$s(s),this.landmarks.push(Do(i));ot(this,r)}),this.g.attachEmptyPacketListener("normalized_landmarks",i=>{this.landmarks=[],ot(this,i)}),this.g.attachProtoVectorListener("world_landmarks",(i,r)=>{this.worldLandmarks=[];for(const s of i)i=Hr(s),this.worldLandmarks.push(Ns(i));ot(this,r)}),this.g.attachEmptyPacketListener("world_landmarks",i=>{this.worldLandmarks=[],ot(this,i)}),this.outputSegmentationMasks&&(Bt(n,"SEGMENTATION_MASK:segmentation_masks"),Zr(this,"segmentation_masks"),this.g.da("segmentation_masks",(i,r)=>{this.segmentationMasks=i.map(s=>ts(this,s,!0,!this.j)),ot(this,r)}),this.g.attachEmptyPacketListener("segmentation_masks",i=>{this.segmentationMasks=[],ot(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};je.prototype.detectForVideo=je.prototype.G,je.prototype.detect=je.prototype.F,je.prototype.setOptions=je.prototype.o,je.createFromModelPath=function(e,t){return Ot(je,e,{baseOptions:{modelAssetPath:t}})},je.createFromModelBuffer=function(e,t){return Ot(je,e,{baseOptions:{modelAssetBuffer:t}})},je.createFromOptions=function(e,t){return Ot(je,e,t)},je.POSE_CONNECTIONS=mm;const s_="https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm",a_="https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_lite/float16/1/pose_landmarker_lite.task";async function o_(){const e=await ar.forVisionTasks(s_),t=n=>({baseOptions:{modelAssetPath:a_,delegate:n},runningMode:"VIDEO",numPoses:1,minPoseDetectionConfidence:.5,minPosePresenceConfidence:.5,minTrackingConfidence:.5});try{return await je.createFromOptions(e,t("GPU"))}catch(n){return console.warn("GPU delegate failed, falling back to CPU",n),await je.createFromOptions(e,t("CPU"))}}class uf{constructor(){this.y=null}filter(t,n){return this.y=this.y===null?t:n*t+(1-n)*this.y,this.y}}class zs{constructor(t=1.7,n=5,i=1){this.minCutoff=t,this.beta=n,this.dCutoff=i,this.x=new uf,this.dx=new uf,this.t=null}static alpha(t,n){return 1/(1+1/(2*Math.PI*t)/n)}filter(t,n){if(this.t===null)return this.t=n,this.dx.filter(0,1),this.x.filter(t,1);const i=Math.max((n-this.t)/1e3,.001);this.t=n;const r=(t-this.x.y)/i,s=this.dx.filter(r,zs.alpha(this.dCutoff,i)),a=this.minCutoff+this.beta*Math.abs(s);return this.x.filter(t,zs.alpha(a,i))}}class c_{constructor(t=33){this.n=t,this.reset()}reset(){this.filters=Array.from({length:this.n},()=>[new zs,new zs])}smooth(t,n){return t.map((i,r)=>({x:this.filters[r][0].filter(i.x,n),y:this.filters[r][1].filter(i.y,n),v:i.visibility??1}))}}const l_=[[11,12],[11,13],[13,15],[12,14],[14,16],[11,23],[12,24],[23,24],[23,25],[25,27],[24,26],[26,28],[27,31],[28,32],[15,19],[16,20],[0,11],[0,12]],co=[0,11,12,13,14,15,16,23,24,25,26,27,28],ns=co.length*2,h_={0:0,11:12,12:11,13:14,14:13,15:16,16:15,23:24,24:23,25:26,26:25,27:28,28:27},ff=co.map(e=>co.indexOf(h_[e]));function u_(e,t){const n=(e[23].x+e[24].x)/2,i=(e[23].y+e[24].y)/2,r=(e[11].x+e[12].x)/2,s=(e[11].y+e[12].y)/2,a=Math.hypot((r-n)*t,s-i);if(a<.001)return null;const o=new Float32Array(ns);return co.forEach((c,l)=>{o[2*l]=(e[c].x-n)*t/a,o[2*l+1]=(e[c].y-i)/a}),{feat:o,torso:a,hipY:i}}function xm(e){const t=new Float32Array(ns);for(let n=0;n<ff.length;n++){const i=ff[n];t[2*n]=-e[2*i],t[2*n+1]=e[2*i+1]}return t}class f_{constructor({rise:t=.22,land:n=.08,ankleRise:i=.12,cooldownMs:r=450}={}){Object.assign(this,{rise:t,land:n,ankleRise:i,cooldownMs:r}),this.reset()}reset(){this.hipBase=null,this.ankleBase=null,this.air=!1,this.last=0,this.lift=0}update(t,n,i,r){const s=Math.min(t[27].v,t[28].v)>.5,a=(t[27].y+t[28].y)/2;if(this.hipBase===null)return this.hipBase=n,this.ankleBase=a,!1;const o=(this.hipBase-n)/i,c=(this.ankleBase-a)/i;if(this.lift=o,this.air)o<this.land&&(this.air=!1);else{Math.abs(o)<.15&&(this.hipBase+=(n-this.hipBase)*.03,s&&(this.ankleBase+=(a-this.ankleBase)*.03));const l=!s||c>this.ankleRise;if(o>this.rise&&l&&r-this.last>this.cooldownMs)return this.air=!0,this.last=r,!0}return!1}}const d_=32;function sl(e,t=d_){if(e.length<2)return null;const n=e[0].t,i=e[e.length-1].t,r=[];let s=0;for(let a=0;a<t;a++){const o=n+(i-n)*a/(t-1);for(;s<e.length-2&&e[s+1].t<o;)s++;const c=e[s],l=e[s+1],h=l.t===c.t?0:Math.min(1,Math.max(0,(o-c.t)/(l.t-c.t))),f=new Float32Array(ns);for(let u=0;u<ns;u++)f[u]=c.f[u]+(l.f[u]-c.f[u])*h;r.push(f)}return r}function p_(e,t){let n=0;for(let i=0;i<ns;i+=2)n+=Math.hypot(e[i]-t[i],e[i+1]-t[i+1]);return n/(ns/2)}function Fs(e,t,n=.25){const i=e.length,r=t.length,s=Math.max(Math.round(n*Math.max(i,r)),Math.abs(i-r));let a=new Float64Array(r+1).fill(1/0),o=new Float64Array(r+1);a[0]=0;for(let c=1;c<=i;c++){o.fill(1/0);const l=Math.max(1,c-s),h=Math.min(r,c+s);for(let f=l;f<=h;f++)o[f]=p_(e[c-1],t[f-1])+Math.min(a[f],o[f-1],a[f-1]);[a,o]=[o,a]}return a[r]/(i+r)}const m_=.3;function g_(e,t){const n=e.templates.map(s=>sl(s)).filter(Boolean);let i=m_;if(n.length>=2){const s=[];for(let o=0;o<n.length;o++)for(let c=o+1;c<n.length;c++)s.push(Fs(n[o],n[c]));const a=s.reduce((o,c)=>o+c,0)/s.length;i=Math.max(.15,a*1.5)}let r=1/0;for(const s of t){const a=s[0].t,o=s[s.length-1].t;for(let c=a;c+e.durationMs<=o;c+=200){const l=sl(s.filter(h=>h.t>=c&&h.t<=c+e.durationMs));if(l)for(const h of n)r=Math.min(r,Fs(l,h),Fs(l.map(xm),h))}}return isFinite(r)&&(i=Math.min(i,r*.85)),{templates:n,threshold:i,idleMin:r}}class __{constructor(){this.moves=[],this.sensitivity=1,this.mirror=!0,this.hitsNeeded=2,this.cooldownMs=1500,this.state=new Map}setMoves(t,n){this.moves=t.filter(i=>i.templates.length>0).map(i=>({move:i,...g_(i,n)})),this.state.clear()}update(t,n){let i=null;for(const r of this.moves){const{move:s}=r,a=this.state.get(s.id)??{hits:0,last:0,score:1/0};this.state.set(s.id,a);const o=[];for(let u=t.length-1;u>=0&&t[u].t>=n-s.durationMs;u--)o.push(t[u]);if(o.length<8||n-o[o.length-1].t<s.durationMs*.85){a.score=1/0;continue}const c=sl(o.reverse()),l=this.mirror?c.map(xm):null;let h=1/0;for(const u of r.templates)h=Math.min(h,Fs(c,u)),l&&(h=Math.min(h,Fs(l,u)));a.score=h;const f=r.threshold*this.sensitivity;h<f?a.hits++:a.hits=0,a.hits>=this.hitsNeeded&&n-a.last>this.cooldownMs&&!i&&(a.last=n,a.hits=0,i=s)}return i}scores(){return this.moves.map(t=>{var n;return{move:t.move,score:((n=this.state.get(t.move.id))==null?void 0:n.score)??1/0,threshold:t.threshold*this.sensitivity}})}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $h="169",v_=0,df=1,x_=2,Mm=1,M_=2,gi=3,ji=0,rn=1,vi=2,Gi=0,Vr=1,al=2,pf=3,mf=4,S_=5,lr=100,y_=101,E_=102,T_=103,A_=104,b_=200,w_=201,R_=202,C_=203,ol=204,cl=205,P_=206,L_=207,D_=208,U_=209,I_=210,N_=211,F_=212,O_=213,B_=214,ll=0,hl=1,ul=2,is=3,fl=4,dl=5,pl=6,ml=7,Sm=0,k_=1,z_=2,Hi=0,G_=1,H_=2,V_=3,W_=4,X_=5,q_=6,Y_=7,ym=300,rs=301,ss=302,gl=303,_l=304,ko=306,vl=1e3,fr=1001,xl=1002,Dn=1003,j_=1004,ua=1005,Vn=1006,sc=1007,dr=1008,bi=1009,Em=1010,Tm=1011,Gs=1012,Zh=1013,Sr=1014,xi=1015,Zs=1016,Jh=1017,Qh=1018,as=1020,Am=35902,bm=1021,wm=1022,Xn=1023,Rm=1024,Cm=1025,Wr=1026,os=1027,Pm=1028,tu=1029,Lm=1030,eu=1031,nu=1033,Wa=33776,Xa=33777,qa=33778,Ya=33779,Ml=35840,Sl=35841,yl=35842,El=35843,Tl=36196,Al=37492,bl=37496,wl=37808,Rl=37809,Cl=37810,Pl=37811,Ll=37812,Dl=37813,Ul=37814,Il=37815,Nl=37816,Fl=37817,Ol=37818,Bl=37819,kl=37820,zl=37821,ja=36492,Gl=36494,Hl=36495,Dm=36283,Vl=36284,Wl=36285,Xl=36286,K_=3200,$_=3201,Z_=0,J_=1,ki="",ti="srgb",Zi="srgb-linear",iu="display-p3",zo="display-p3-linear",lo="linear",de="srgb",ho="rec709",uo="p3",Ar=7680,gf=519,Q_=512,t1=513,e1=514,Um=515,n1=516,i1=517,r1=518,s1=519,_f=35044,fa=35048,vf="300 es",Mi=2e3,fo=2001;class gs{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const Ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ac=Math.PI/180,ql=180/Math.PI;function Js(){const e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ve[e&255]+Ve[e>>8&255]+Ve[e>>16&255]+Ve[e>>24&255]+"-"+Ve[t&255]+Ve[t>>8&255]+"-"+Ve[t>>16&15|64]+Ve[t>>24&255]+"-"+Ve[n&63|128]+Ve[n>>8&255]+"-"+Ve[n>>16&255]+Ve[n>>24&255]+Ve[i&255]+Ve[i>>8&255]+Ve[i>>16&255]+Ve[i>>24&255]).toLowerCase()}function en(e,t,n){return Math.max(t,Math.min(n,e))}function a1(e,t){return(e%t+t)%t}function oc(e,t,n){return(1-n)*e+n*t}function xs(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function tn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}class oe{constructor(t=0,n=0){oe.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,i=this.y,r=t.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(en(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*r+t.x,this.y=s*r+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ft{constructor(t,n,i,r,s,a,o,c,l){Ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,r,s,a,o,c,l)}set(t,n,i,r,s,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=r,h[2]=o,h[3]=n,h[4]=s,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],f=i[7],u=i[2],m=i[5],v=i[8],S=r[0],d=r[3],p=r[6],T=r[1],E=r[4],A=r[7],O=r[2],P=r[5],b=r[8];return s[0]=a*S+o*T+c*O,s[3]=a*d+o*E+c*P,s[6]=a*p+o*A+c*b,s[1]=l*S+h*T+f*O,s[4]=l*d+h*E+f*P,s[7]=l*p+h*A+f*b,s[2]=u*S+m*T+v*O,s[5]=u*d+m*E+v*P,s[8]=u*p+m*A+v*b,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return n*a*h-n*o*l-i*s*h+i*o*c+r*s*l-r*a*c}invert(){const t=this.elements,n=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],f=h*a-o*l,u=o*c-h*s,m=l*s-a*c,v=n*f+i*u+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/v;return t[0]=f*S,t[1]=(r*l-h*i)*S,t[2]=(o*i-r*a)*S,t[3]=u*S,t[4]=(h*n-r*c)*S,t[5]=(r*s-o*n)*S,t[6]=m*S,t[7]=(i*c-l*n)*S,t[8]=(a*n-i*s)*S,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+t,-r*l,r*c,-r*(-l*a+c*o)+o+n,0,0,1),this}scale(t,n){return this.premultiply(cc.makeScale(t,n)),this}rotate(t){return this.premultiply(cc.makeRotation(-t)),this}translate(t,n){return this.premultiply(cc.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,i=t.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const cc=new Ft;function Im(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function po(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function o1(){const e=po("canvas");return e.style.display="block",e}const xf={};function Ka(e){e in xf||(xf[e]=!0,console.warn(e))}function c1(e,t,n){return new Promise(function(i,r){function s(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:r();break;case e.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function l1(e){const t=e.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function h1(e){const t=e.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Mf=new Ft().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Sf=new Ft().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ms={[Zi]:{transfer:lo,primaries:ho,luminanceCoefficients:[.2126,.7152,.0722],toReference:e=>e,fromReference:e=>e},[ti]:{transfer:de,primaries:ho,luminanceCoefficients:[.2126,.7152,.0722],toReference:e=>e.convertSRGBToLinear(),fromReference:e=>e.convertLinearToSRGB()},[zo]:{transfer:lo,primaries:uo,luminanceCoefficients:[.2289,.6917,.0793],toReference:e=>e.applyMatrix3(Sf),fromReference:e=>e.applyMatrix3(Mf)},[iu]:{transfer:de,primaries:uo,luminanceCoefficients:[.2289,.6917,.0793],toReference:e=>e.convertSRGBToLinear().applyMatrix3(Sf),fromReference:e=>e.applyMatrix3(Mf).convertLinearToSRGB()}},u1=new Set([Zi,zo]),Jt={enabled:!0,_workingColorSpace:Zi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(e){if(!u1.has(e))throw new Error(`Unsupported working color space, "${e}".`);this._workingColorSpace=e},convert:function(e,t,n){if(this.enabled===!1||t===n||!t||!n)return e;const i=Ms[t].toReference,r=Ms[n].fromReference;return r(i(e))},fromWorkingColorSpace:function(e,t){return this.convert(e,this._workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this._workingColorSpace)},getPrimaries:function(e){return Ms[e].primaries},getTransfer:function(e){return e===ki?lo:Ms[e].transfer},getLuminanceCoefficients:function(e,t=this._workingColorSpace){return e.fromArray(Ms[t].luminanceCoefficients)}};function Xr(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function lc(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}let br;class f1{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{br===void 0&&(br=po("canvas")),br.width=t.width,br.height=t.height;const i=br.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=br}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=po("canvas");n.width=t.width,n.height=t.height;const i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Xr(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(t.data){const n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Xr(n[i]/255)*255):n[i]=Xr(n[i]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let d1=0;class Nm{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:d1++}),this.uuid=Js(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(hc(r[a].image)):s.push(hc(r[a]))}else s=hc(r);i.url=s}return n||(t.images[this.uuid]=i),i}}function hc(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?f1.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let p1=0;class sn extends gs{constructor(t=sn.DEFAULT_IMAGE,n=sn.DEFAULT_MAPPING,i=fr,r=fr,s=Vn,a=dr,o=Xn,c=bi,l=sn.DEFAULT_ANISOTROPY,h=ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:p1++}),this.uuid=Js(),this.name="",this.source=new Nm(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ym)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case vl:t.x=t.x-Math.floor(t.x);break;case fr:t.x=t.x<0?0:1;break;case xl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case vl:t.y=t.y-Math.floor(t.y);break;case fr:t.y=t.y<0?0:1;break;case xl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=ym;sn.DEFAULT_ANISOTROPY=1;class we{constructor(t=0,n=0,i=0,r=1){we.prototype.isVector4=!0,this.x=t,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,r){return this.x=t,this.y=n,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,i=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,r,s;const c=t.elements,l=c[0],h=c[4],f=c[8],u=c[1],m=c[5],v=c[9],S=c[2],d=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(f-S)<.01&&Math.abs(v-d)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+S)<.1&&Math.abs(v+d)<.1&&Math.abs(l+m+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const E=(l+1)/2,A=(m+1)/2,O=(p+1)/2,P=(h+u)/4,b=(f+S)/4,F=(v+d)/4;return E>A&&E>O?E<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(E),r=P/i,s=b/i):A>O?A<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(A),i=P/r,s=F/r):O<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(O),i=b/s,r=F/s),this.set(i,r,s,n),this}let T=Math.sqrt((d-v)*(d-v)+(f-S)*(f-S)+(u-h)*(u-h));return Math.abs(T)<.001&&(T=1),this.x=(d-v)/T,this.y=(f-S)/T,this.z=(u-h)/T,this.w=Math.acos((l+m+p-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this.w=Math.max(t.w,Math.min(n.w,this.w)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this.w=Math.max(t,Math.min(n,this.w)),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class m1 extends gs{constructor(t=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=1,this.scissor=new we(0,0,t,n),this.scissorTest=!1,this.viewport=new we(0,0,t,n);const r={width:t,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new sn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},t.texture.image);return this.texture.source=new Nm(n),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yr extends m1{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}}class Fm extends sn{constructor(t=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:r},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class g1 extends sn{constructor(t=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:r},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qs{constructor(t=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=r}static slerpFlat(t,n,i,r,s,a,o){let c=i[r+0],l=i[r+1],h=i[r+2],f=i[r+3];const u=s[a+0],m=s[a+1],v=s[a+2],S=s[a+3];if(o===0){t[n+0]=c,t[n+1]=l,t[n+2]=h,t[n+3]=f;return}if(o===1){t[n+0]=u,t[n+1]=m,t[n+2]=v,t[n+3]=S;return}if(f!==S||c!==u||l!==m||h!==v){let d=1-o;const p=c*u+l*m+h*v+f*S,T=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){const O=Math.sqrt(E),P=Math.atan2(O,p*T);d=Math.sin(d*P)/O,o=Math.sin(o*P)/O}const A=o*T;if(c=c*d+u*A,l=l*d+m*A,h=h*d+v*A,f=f*d+S*A,d===1-o){const O=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=O,l*=O,h*=O,f*=O}}t[n]=c,t[n+1]=l,t[n+2]=h,t[n+3]=f}static multiplyQuaternionsFlat(t,n,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],h=i[r+3],f=s[a],u=s[a+1],m=s[a+2],v=s[a+3];return t[n]=o*v+h*f+c*m-l*u,t[n+1]=c*v+h*u+l*f-o*m,t[n+2]=l*v+h*m+o*u-c*f,t[n+3]=h*v-o*f-c*u-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,r){return this._x=t,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const i=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(r/2),f=o(s/2),u=c(i/2),m=c(r/2),v=c(s/2);switch(a){case"XYZ":this._x=u*h*f+l*m*v,this._y=l*m*f-u*h*v,this._z=l*h*v+u*m*f,this._w=l*h*f-u*m*v;break;case"YXZ":this._x=u*h*f+l*m*v,this._y=l*m*f-u*h*v,this._z=l*h*v-u*m*f,this._w=l*h*f+u*m*v;break;case"ZXY":this._x=u*h*f-l*m*v,this._y=l*m*f+u*h*v,this._z=l*h*v+u*m*f,this._w=l*h*f-u*m*v;break;case"ZYX":this._x=u*h*f-l*m*v,this._y=l*m*f+u*h*v,this._z=l*h*v-u*m*f,this._w=l*h*f+u*m*v;break;case"YZX":this._x=u*h*f+l*m*v,this._y=l*m*f+u*h*v,this._z=l*h*v-u*m*f,this._w=l*h*f-u*m*v;break;case"XZY":this._x=u*h*f-l*m*v,this._y=l*m*f-u*h*v,this._z=l*h*v+u*m*f,this._w=l*h*f+u*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const i=n/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],c=n[9],l=n[2],h=n[6],f=n[10],u=i+o+f;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-c)*m,this._y=(s-l)*m,this._z=(a-r)*m}else if(i>o&&i>f){const m=2*Math.sqrt(1+i-o-f);this._w=(h-c)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+l)/m}else if(o>f){const m=2*Math.sqrt(1+o-i-f);this._w=(s-l)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+f-i-o);this._w=(a-r)/m,this._x=(s+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(en(this.dot(t),-1,1)))}rotateTowards(t,n){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const i=t._x,r=t._y,s=t._z,a=t._w,o=n._x,c=n._y,l=n._z,h=n._w;return this._x=i*h+a*o+r*l-s*c,this._y=r*h+a*c+s*o-i*l,this._z=s*h+a*l+i*c-r*o,this._w=a*h-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+i*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-n;return this._w=m*a+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),f=Math.sin((1-n)*h)/l,u=Math.sin(n*h)/l;return this._w=a*f+this._w*u,this._x=i*f+this._x*u,this._y=r*f+this._y*u,this._z=s*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(n),s*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,n=0,i=0){N.prototype.isVector3=!0,this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(yf.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(yf.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,i=this.y,r=this.z,s=t.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(t){const n=this.x,i=this.y,r=this.z,s=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*r-o*i),h=2*(o*n-s*r),f=2*(s*i-a*n);return this.x=n+c*l+a*f-o*h,this.y=i+c*h+o*l-s*f,this.z=r+c*f+s*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const i=t.x,r=t.y,s=t.z,a=n.x,o=n.y,c=n.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return uc.copy(this).projectOnVector(t),this.sub(uc)}reflect(t){return this.sub(uc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(en(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return n*n+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){const r=Math.sin(n)*t;return this.x=r*Math.sin(i),this.y=Math.cos(n)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const uc=new N,yf=new Qs;class ta{constructor(t=new N(1/0,1/0,1/0),n=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(kn.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(kn.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const i=kn.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,kn):kn.fromBufferAttribute(s,a),kn.applyMatrix4(t.matrixWorld),this.expandByPoint(kn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),da.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),da.copy(i.boundingBox)),da.applyMatrix4(t.matrixWorld),this.union(da)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,kn),kn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ss),pa.subVectors(this.max,Ss),wr.subVectors(t.a,Ss),Rr.subVectors(t.b,Ss),Cr.subVectors(t.c,Ss),Di.subVectors(Rr,wr),Ui.subVectors(Cr,Rr),tr.subVectors(wr,Cr);let n=[0,-Di.z,Di.y,0,-Ui.z,Ui.y,0,-tr.z,tr.y,Di.z,0,-Di.x,Ui.z,0,-Ui.x,tr.z,0,-tr.x,-Di.y,Di.x,0,-Ui.y,Ui.x,0,-tr.y,tr.x,0];return!fc(n,wr,Rr,Cr,pa)||(n=[1,0,0,0,1,0,0,0,1],!fc(n,wr,Rr,Cr,pa))?!1:(ma.crossVectors(Di,Ui),n=[ma.x,ma.y,ma.z],fc(n,wr,Rr,Cr,pa))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,kn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(kn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ui),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ui=[new N,new N,new N,new N,new N,new N,new N,new N],kn=new N,da=new ta,wr=new N,Rr=new N,Cr=new N,Di=new N,Ui=new N,tr=new N,Ss=new N,pa=new N,ma=new N,er=new N;function fc(e,t,n,i,r){for(let s=0,a=e.length-3;s<=a;s+=3){er.fromArray(e,s);const o=r.x*Math.abs(er.x)+r.y*Math.abs(er.y)+r.z*Math.abs(er.z),c=t.dot(er),l=n.dot(er),h=i.dot(er);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const _1=new ta,ys=new N,dc=new N;class Go{constructor(t=new N,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const i=this.center;n!==void 0?i.copy(n):_1.setFromPoints(t).getCenter(i);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ys.subVectors(t,this.center);const n=ys.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ys,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(dc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ys.copy(t.center).add(dc)),this.expandByPoint(ys.copy(t.center).sub(dc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const fi=new N,pc=new N,ga=new N,Ii=new N,mc=new N,_a=new N,gc=new N;class Om{constructor(t=new N,n=new N(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,fi)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=fi.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(fi.copy(this.origin).addScaledVector(this.direction,n),fi.distanceToSquared(t))}distanceSqToSegment(t,n,i,r){pc.copy(t).add(n).multiplyScalar(.5),ga.copy(n).sub(t).normalize(),Ii.copy(this.origin).sub(pc);const s=t.distanceTo(n)*.5,a=-this.direction.dot(ga),o=Ii.dot(this.direction),c=-Ii.dot(ga),l=Ii.lengthSq(),h=Math.abs(1-a*a);let f,u,m,v;if(h>0)if(f=a*c-o,u=a*o-c,v=s*h,f>=0)if(u>=-v)if(u<=v){const S=1/h;f*=S,u*=S,m=f*(f+a*u+2*o)+u*(a*f+u+2*c)+l}else u=s,f=Math.max(0,-(a*u+o)),m=-f*f+u*(u+2*c)+l;else u=-s,f=Math.max(0,-(a*u+o)),m=-f*f+u*(u+2*c)+l;else u<=-v?(f=Math.max(0,-(-a*s+o)),u=f>0?-s:Math.min(Math.max(-s,-c),s),m=-f*f+u*(u+2*c)+l):u<=v?(f=0,u=Math.min(Math.max(-s,-c),s),m=u*(u+2*c)+l):(f=Math.max(0,-(a*s+o)),u=f>0?s:Math.min(Math.max(-s,-c),s),m=-f*f+u*(u+2*c)+l);else u=a>0?-s:s,f=Math.max(0,-(a*u+o)),m=-f*f+u*(u+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(pc).addScaledVector(ga,u),m}intersectSphere(t,n){fi.subVectors(t.center,this.origin);const i=fi.dot(this.direction),r=fi.dot(fi)-i*i,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,n):this.at(o,n)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){const i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,r,s,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return l>=0?(i=(t.min.x-u.x)*l,r=(t.max.x-u.x)*l):(i=(t.max.x-u.x)*l,r=(t.min.x-u.x)*l),h>=0?(s=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(t.min.z-u.z)*f,c=(t.max.z-u.z)*f):(o=(t.max.z-u.z)*f,c=(t.min.z-u.z)*f),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(t){return this.intersectBox(t,fi)!==null}intersectTriangle(t,n,i,r,s){mc.subVectors(n,t),_a.subVectors(i,t),gc.crossVectors(mc,_a);let a=this.direction.dot(gc),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ii.subVectors(this.origin,t);const c=o*this.direction.dot(_a.crossVectors(Ii,_a));if(c<0)return null;const l=o*this.direction.dot(mc.cross(Ii));if(l<0||c+l>a)return null;const h=-o*Ii.dot(gc);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Re{constructor(t,n,i,r,s,a,o,c,l,h,f,u,m,v,S,d){Re.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,r,s,a,o,c,l,h,f,u,m,v,S,d)}set(t,n,i,r,s,a,o,c,l,h,f,u,m,v,S,d){const p=this.elements;return p[0]=t,p[4]=n,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=f,p[14]=u,p[3]=m,p[7]=v,p[11]=S,p[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Re().fromArray(this.elements)}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){const n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,i=t.elements,r=1/Pr.setFromMatrixColumn(t,0).length(),s=1/Pr.setFromMatrixColumn(t,1).length(),a=1/Pr.setFromMatrixColumn(t,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,i=t.x,r=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const u=a*h,m=a*f,v=o*h,S=o*f;n[0]=c*h,n[4]=-c*f,n[8]=l,n[1]=m+v*l,n[5]=u-S*l,n[9]=-o*c,n[2]=S-u*l,n[6]=v+m*l,n[10]=a*c}else if(t.order==="YXZ"){const u=c*h,m=c*f,v=l*h,S=l*f;n[0]=u+S*o,n[4]=v*o-m,n[8]=a*l,n[1]=a*f,n[5]=a*h,n[9]=-o,n[2]=m*o-v,n[6]=S+u*o,n[10]=a*c}else if(t.order==="ZXY"){const u=c*h,m=c*f,v=l*h,S=l*f;n[0]=u-S*o,n[4]=-a*f,n[8]=v+m*o,n[1]=m+v*o,n[5]=a*h,n[9]=S-u*o,n[2]=-a*l,n[6]=o,n[10]=a*c}else if(t.order==="ZYX"){const u=a*h,m=a*f,v=o*h,S=o*f;n[0]=c*h,n[4]=v*l-m,n[8]=u*l+S,n[1]=c*f,n[5]=S*l+u,n[9]=m*l-v,n[2]=-l,n[6]=o*c,n[10]=a*c}else if(t.order==="YZX"){const u=a*c,m=a*l,v=o*c,S=o*l;n[0]=c*h,n[4]=S-u*f,n[8]=v*f+m,n[1]=f,n[5]=a*h,n[9]=-o*h,n[2]=-l*h,n[6]=m*f+v,n[10]=u-S*f}else if(t.order==="XZY"){const u=a*c,m=a*l,v=o*c,S=o*l;n[0]=c*h,n[4]=-f,n[8]=l*h,n[1]=u*f+S,n[5]=a*h,n[9]=m*f-v,n[2]=v*f-m,n[6]=o*h,n[10]=S*f+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(v1,t,x1)}lookAt(t,n,i){const r=this.elements;return gn.subVectors(t,n),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),Ni.crossVectors(i,gn),Ni.lengthSq()===0&&(Math.abs(i.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),Ni.crossVectors(i,gn)),Ni.normalize(),va.crossVectors(gn,Ni),r[0]=Ni.x,r[4]=va.x,r[8]=gn.x,r[1]=Ni.y,r[5]=va.y,r[9]=gn.y,r[2]=Ni.z,r[6]=va.z,r[10]=gn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],f=i[5],u=i[9],m=i[13],v=i[2],S=i[6],d=i[10],p=i[14],T=i[3],E=i[7],A=i[11],O=i[15],P=r[0],b=r[4],F=r[8],tt=r[12],g=r[1],M=r[5],H=r[9],k=r[13],q=r[2],K=r[6],G=r[10],j=r[14],z=r[3],ct=r[7],lt=r[11],xt=r[15];return s[0]=a*P+o*g+c*q+l*z,s[4]=a*b+o*M+c*K+l*ct,s[8]=a*F+o*H+c*G+l*lt,s[12]=a*tt+o*k+c*j+l*xt,s[1]=h*P+f*g+u*q+m*z,s[5]=h*b+f*M+u*K+m*ct,s[9]=h*F+f*H+u*G+m*lt,s[13]=h*tt+f*k+u*j+m*xt,s[2]=v*P+S*g+d*q+p*z,s[6]=v*b+S*M+d*K+p*ct,s[10]=v*F+S*H+d*G+p*lt,s[14]=v*tt+S*k+d*j+p*xt,s[3]=T*P+E*g+A*q+O*z,s[7]=T*b+E*M+A*K+O*ct,s[11]=T*F+E*H+A*G+O*lt,s[15]=T*tt+E*k+A*j+O*xt,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[4],r=t[8],s=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],f=t[6],u=t[10],m=t[14],v=t[3],S=t[7],d=t[11],p=t[15];return v*(+s*c*f-r*l*f-s*o*u+i*l*u+r*o*m-i*c*m)+S*(+n*c*m-n*l*u+s*a*u-r*a*m+r*l*h-s*c*h)+d*(+n*l*f-n*o*m-s*a*f+i*a*m+s*o*h-i*l*h)+p*(-r*o*h-n*c*f+n*o*u+r*a*f-i*a*u+i*c*h)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=n,r[14]=i),this}invert(){const t=this.elements,n=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],f=t[9],u=t[10],m=t[11],v=t[12],S=t[13],d=t[14],p=t[15],T=f*d*l-S*u*l+S*c*m-o*d*m-f*c*p+o*u*p,E=v*u*l-h*d*l-v*c*m+a*d*m+h*c*p-a*u*p,A=h*S*l-v*f*l+v*o*m-a*S*m-h*o*p+a*f*p,O=v*f*c-h*S*c-v*o*u+a*S*u+h*o*d-a*f*d,P=n*T+i*E+r*A+s*O;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/P;return t[0]=T*b,t[1]=(S*u*s-f*d*s-S*r*m+i*d*m+f*r*p-i*u*p)*b,t[2]=(o*d*s-S*c*s+S*r*l-i*d*l-o*r*p+i*c*p)*b,t[3]=(f*c*s-o*u*s-f*r*l+i*u*l+o*r*m-i*c*m)*b,t[4]=E*b,t[5]=(h*d*s-v*u*s+v*r*m-n*d*m-h*r*p+n*u*p)*b,t[6]=(v*c*s-a*d*s-v*r*l+n*d*l+a*r*p-n*c*p)*b,t[7]=(a*u*s-h*c*s+h*r*l-n*u*l-a*r*m+n*c*m)*b,t[8]=A*b,t[9]=(v*f*s-h*S*s-v*i*m+n*S*m+h*i*p-n*f*p)*b,t[10]=(a*S*s-v*o*s+v*i*l-n*S*l-a*i*p+n*o*p)*b,t[11]=(h*o*s-a*f*s-h*i*l+n*f*l+a*i*m-n*o*m)*b,t[12]=O*b,t[13]=(h*S*r-v*f*r+v*i*u-n*S*u-h*i*d+n*f*d)*b,t[14]=(v*o*r-a*S*r-v*i*c+n*S*c+a*i*d-n*o*d)*b,t[15]=(a*f*r-h*o*r+h*i*c-n*f*c-a*i*u+n*o*u)*b,this}scale(t){const n=this.elements,i=t.x,r=t.y,s=t.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=t.x,o=t.y,c=t.z,l=s*a,h=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,h*o+i,h*c-r*a,0,l*c-r*o,h*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,r,s,a){return this.set(1,i,s,0,t,1,a,0,n,r,1,0,0,0,0,1),this}compose(t,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,c=n._w,l=s+s,h=a+a,f=o+o,u=s*l,m=s*h,v=s*f,S=a*h,d=a*f,p=o*f,T=c*l,E=c*h,A=c*f,O=i.x,P=i.y,b=i.z;return r[0]=(1-(S+p))*O,r[1]=(m+A)*O,r[2]=(v-E)*O,r[3]=0,r[4]=(m-A)*P,r[5]=(1-(u+p))*P,r[6]=(d+T)*P,r[7]=0,r[8]=(v+E)*b,r[9]=(d-T)*b,r[10]=(1-(u+S))*b,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,n,i){const r=this.elements;let s=Pr.set(r[0],r[1],r[2]).length();const a=Pr.set(r[4],r[5],r[6]).length(),o=Pr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],zn.copy(this);const l=1/s,h=1/a,f=1/o;return zn.elements[0]*=l,zn.elements[1]*=l,zn.elements[2]*=l,zn.elements[4]*=h,zn.elements[5]*=h,zn.elements[6]*=h,zn.elements[8]*=f,zn.elements[9]*=f,zn.elements[10]*=f,n.setFromRotationMatrix(zn),i.x=s,i.y=a,i.z=o,this}makePerspective(t,n,i,r,s,a,o=Mi){const c=this.elements,l=2*s/(n-t),h=2*s/(i-r),f=(n+t)/(n-t),u=(i+r)/(i-r);let m,v;if(o===Mi)m=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===fo)m=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,r,s,a,o=Mi){const c=this.elements,l=1/(n-t),h=1/(i-r),f=1/(a-s),u=(n+t)*l,m=(i+r)*h;let v,S;if(o===Mi)v=(a+s)*f,S=-2*f;else if(o===fo)v=s*f,S=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=S,c[14]=-v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const n=this.elements,i=t.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}}const Pr=new N,zn=new Re,v1=new N(0,0,0),x1=new N(1,1,1),Ni=new N,va=new N,gn=new N,Ef=new Re,Tf=new Qs;class wi{constructor(t=0,n=0,i=0,r=wi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,r=this._order){return this._x=t,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],h=r[9],f=r[2],u=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(en(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-en(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(en(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-en(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(en(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-en(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return Ef.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ef,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return Tf.setFromEuler(this),this.setFromQuaternion(Tf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wi.DEFAULT_ORDER="XYZ";class Bm{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let M1=0;const Af=new N,Lr=new Qs,di=new Re,xa=new N,Es=new N,S1=new N,y1=new Qs,bf=new N(1,0,0),wf=new N(0,1,0),Rf=new N(0,0,1),Cf={type:"added"},E1={type:"removed"},Dr={type:"childadded",child:null},_c={type:"childremoved",child:null};class an extends gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:M1++}),this.uuid=Js(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=an.DEFAULT_UP.clone();const t=new N,n=new wi,i=new Qs,r=new N(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Re},normalMatrix:{value:new Ft}}),this.matrix=new Re,this.matrixWorld=new Re,this.matrixAutoUpdate=an.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Lr.setFromAxisAngle(t,n),this.quaternion.multiply(Lr),this}rotateOnWorldAxis(t,n){return Lr.setFromAxisAngle(t,n),this.quaternion.premultiply(Lr),this}rotateX(t){return this.rotateOnAxis(bf,t)}rotateY(t){return this.rotateOnAxis(wf,t)}rotateZ(t){return this.rotateOnAxis(Rf,t)}translateOnAxis(t,n){return Af.copy(t).applyQuaternion(this.quaternion),this.position.add(Af.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(bf,t)}translateY(t){return this.translateOnAxis(wf,t)}translateZ(t){return this.translateOnAxis(Rf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?xa.copy(t):xa.set(t,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(Es,xa,this.up):di.lookAt(xa,Es,this.up),this.quaternion.setFromRotationMatrix(di),r&&(di.extractRotation(r.matrixWorld),Lr.setFromRotationMatrix(di),this.quaternion.premultiply(Lr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Cf),Dr.child=t,this.dispatchEvent(Dr),Dr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(E1),_c.child=t,this.dispatchEvent(_c),_c.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),di.multiply(t.parent.matrixWorld)),t.applyMatrix4(di),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Cf),Dr.child=t,this.dispatchEvent(Dr),Dr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(t,n);if(a!==void 0)return a}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,t,S1),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,y1,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const f=c[l];s(t.shapes,f)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(t.materials,this.material[c]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(t.animations,c))}}if(n){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),f=a(t.shapes),u=a(t.skeletons),m=a(t.animations),v=a(t.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}an.DEFAULT_UP=new N(0,1,0);an.DEFAULT_MATRIX_AUTO_UPDATE=!0;an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Gn=new N,pi=new N,vc=new N,mi=new N,Ur=new N,Ir=new N,Pf=new N,xc=new N,Mc=new N,Sc=new N,yc=new we,Ec=new we,Tc=new we;class Wn{constructor(t=new N,n=new N,i=new N){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,r){r.subVectors(i,n),Gn.subVectors(t,n),r.cross(Gn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,n,i,r,s){Gn.subVectors(r,n),pi.subVectors(i,n),vc.subVectors(t,n);const a=Gn.dot(Gn),o=Gn.dot(pi),c=Gn.dot(vc),l=pi.dot(pi),h=pi.dot(vc),f=a*l-o*o;if(f===0)return s.set(0,0,0),null;const u=1/f,m=(l*c-o*h)*u,v=(a*h-o*c)*u;return s.set(1-m-v,v,m)}static containsPoint(t,n,i,r){return this.getBarycoord(t,n,i,r,mi)===null?!1:mi.x>=0&&mi.y>=0&&mi.x+mi.y<=1}static getInterpolation(t,n,i,r,s,a,o,c){return this.getBarycoord(t,n,i,r,mi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,mi.x),c.addScaledVector(a,mi.y),c.addScaledVector(o,mi.z),c)}static getInterpolatedAttribute(t,n,i,r,s,a){return yc.setScalar(0),Ec.setScalar(0),Tc.setScalar(0),yc.fromBufferAttribute(t,n),Ec.fromBufferAttribute(t,i),Tc.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(yc,s.x),a.addScaledVector(Ec,s.y),a.addScaledVector(Tc,s.z),a}static isFrontFacing(t,n,i,r){return Gn.subVectors(i,n),pi.subVectors(t,n),Gn.cross(pi).dot(r)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,r){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,n,i,r){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Gn.subVectors(this.c,this.b),pi.subVectors(this.a,this.b),Gn.cross(pi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Wn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Wn.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,r,s){return Wn.getInterpolation(t,this.a,this.b,this.c,n,i,r,s)}containsPoint(t){return Wn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Wn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const i=this.a,r=this.b,s=this.c;let a,o;Ur.subVectors(r,i),Ir.subVectors(s,i),xc.subVectors(t,i);const c=Ur.dot(xc),l=Ir.dot(xc);if(c<=0&&l<=0)return n.copy(i);Mc.subVectors(t,r);const h=Ur.dot(Mc),f=Ir.dot(Mc);if(h>=0&&f<=h)return n.copy(r);const u=c*f-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),n.copy(i).addScaledVector(Ur,a);Sc.subVectors(t,s);const m=Ur.dot(Sc),v=Ir.dot(Sc);if(v>=0&&m<=v)return n.copy(s);const S=m*l-c*v;if(S<=0&&l>=0&&v<=0)return o=l/(l-v),n.copy(i).addScaledVector(Ir,o);const d=h*v-m*f;if(d<=0&&f-h>=0&&m-v>=0)return Pf.subVectors(s,r),o=(f-h)/(f-h+(m-v)),n.copy(r).addScaledVector(Pf,o);const p=1/(d+S+u);return a=S*p,o=u*p,n.copy(i).addScaledVector(Ur,a).addScaledVector(Ir,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const km={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fi={h:0,s:0,l:0},Ma={h:0,s:0,l:0};function Ac(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}class ne{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=ti){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.toWorkingColorSpace(this,n),this}setRGB(t,n,i,r=Jt.workingColorSpace){return this.r=t,this.g=n,this.b=i,Jt.toWorkingColorSpace(this,r),this}setHSL(t,n,i,r=Jt.workingColorSpace){if(t=a1(t,1),n=en(n,0,1),i=en(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Ac(a,s,t+1/3),this.g=Ac(a,s,t),this.b=Ac(a,s,t-1/3)}return Jt.toWorkingColorSpace(this,r),this}setStyle(t,n=ti){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=ti){const i=km[t.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Xr(t.r),this.g=Xr(t.g),this.b=Xr(t.b),this}copyLinearToSRGB(t){return this.r=lc(t.r),this.g=lc(t.g),this.b=lc(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ti){return Jt.fromWorkingColorSpace(We.copy(this),t),Math.round(en(We.r*255,0,255))*65536+Math.round(en(We.g*255,0,255))*256+Math.round(en(We.b*255,0,255))}getHexString(t=ti){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Jt.workingColorSpace){Jt.fromWorkingColorSpace(We.copy(this),n);const i=We.r,r=We.g,s=We.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const f=a-o;switch(l=h<=.5?f/(a+o):f/(2-a-o),a){case i:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-i)/f+2;break;case s:c=(i-r)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,n=Jt.workingColorSpace){return Jt.fromWorkingColorSpace(We.copy(this),n),t.r=We.r,t.g=We.g,t.b=We.b,t}getStyle(t=ti){Jt.fromWorkingColorSpace(We.copy(this),t);const n=We.r,i=We.g,r=We.b;return t!==ti?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,n,i){return this.getHSL(Fi),this.setHSL(Fi.h+t,Fi.s+n,Fi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(Fi),t.getHSL(Ma);const i=oc(Fi.h,Ma.h,n),r=oc(Fi.s,Ma.s,n),s=oc(Fi.l,Ma.l,n);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const We=new ne;ne.NAMES=km;let T1=0;class ea extends gs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:T1++}),this.uuid=Js(),this.name="",this.type="Material",this.blending=Vr,this.side=ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ol,this.blendDst=cl,this.blendEquation=lr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ne(0,0,0),this.blendAlpha=0,this.depthFunc=is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ar,this.stencilZFail=Ar,this.stencilZPass=Ar,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const i=t[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Vr&&(i.blending=this.blending),this.side!==ji&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ol&&(i.blendSrc=this.blendSrc),this.blendDst!==cl&&(i.blendDst=this.blendDst),this.blendEquation!==lr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==is&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ar&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ar&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ar&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(n){const s=r(t.textures),a=r(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class zm extends ea{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.combine=Sm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const De=new N,Sa=new oe;class nn{constructor(t,n,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=_f,this.updateRanges=[],this.gpuType=xi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=n.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Sa.fromBufferAttribute(this,n),Sa.applyMatrix3(t),this.setXY(n,Sa.x,Sa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)De.fromBufferAttribute(this,n),De.applyMatrix3(t),this.setXYZ(n,De.x,De.y,De.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)De.fromBufferAttribute(this,n),De.applyMatrix4(t),this.setXYZ(n,De.x,De.y,De.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)De.fromBufferAttribute(this,n),De.applyNormalMatrix(t),this.setXYZ(n,De.x,De.y,De.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)De.fromBufferAttribute(this,n),De.transformDirection(t),this.setXYZ(n,De.x,De.y,De.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=xs(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=tn(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=xs(n,this.array)),n}setX(t,n){return this.normalized&&(n=tn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=xs(n,this.array)),n}setY(t,n){return this.normalized&&(n=tn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=xs(n,this.array)),n}setZ(t,n){return this.normalized&&(n=tn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=xs(n,this.array)),n}setW(t,n){return this.normalized&&(n=tn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=tn(n,this.array),i=tn(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,r){return t*=this.itemSize,this.normalized&&(n=tn(n,this.array),i=tn(i,this.array),r=tn(r,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,n,i,r,s){return t*=this.itemSize,this.normalized&&(n=tn(n,this.array),i=tn(i,this.array),r=tn(r,this.array),s=tn(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==_f&&(t.usage=this.usage),t}}class Gm extends nn{constructor(t,n,i){super(new Uint16Array(t),n,i)}}class Hm extends nn{constructor(t,n,i){super(new Uint32Array(t),n,i)}}class vr extends nn{constructor(t,n,i){super(new Float32Array(t),n,i)}}let A1=0;const wn=new Re,bc=new an,Nr=new N,_n=new ta,Ts=new ta,Be=new N;class Ci extends gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:A1++}),this.uuid=Js(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Im(t)?Hm:Gm)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ft().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return wn.makeRotationFromQuaternion(t),this.applyMatrix4(wn),this}rotateX(t){return wn.makeRotationX(t),this.applyMatrix4(wn),this}rotateY(t){return wn.makeRotationY(t),this.applyMatrix4(wn),this}rotateZ(t){return wn.makeRotationZ(t),this.applyMatrix4(wn),this}translate(t,n,i){return wn.makeTranslation(t,n,i),this.applyMatrix4(wn),this}scale(t,n,i){return wn.makeScale(t,n,i),this.applyMatrix4(wn),this}lookAt(t){return bc.lookAt(t),bc.updateMatrix(),this.applyMatrix4(bc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Nr).negate(),this.translate(Nr.x,Nr.y,Nr.z),this}setFromPoints(t){const n=[];for(let i=0,r=t.length;i<r;i++){const s=t[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new vr(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ta);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];_n.setFromBufferAttribute(s),this.morphTargetsRelative?(Be.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Be),Be.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Be)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Go);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const i=this.boundingSphere.center;if(_n.setFromBufferAttribute(t),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Ts.setFromBufferAttribute(o),this.morphTargetsRelative?(Be.addVectors(_n.min,Ts.min),_n.expandByPoint(Be),Be.addVectors(_n.max,Ts.max),_n.expandByPoint(Be)):(_n.expandByPoint(Ts.min),_n.expandByPoint(Ts.max))}_n.getCenter(i);let r=0;for(let s=0,a=t.count;s<a;s++)Be.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Be));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Be.fromBufferAttribute(o,l),c&&(Nr.fromBufferAttribute(t,l),Be.add(Nr)),r=Math.max(r,i.distanceToSquared(Be))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let F=0;F<i.count;F++)o[F]=new N,c[F]=new N;const l=new N,h=new N,f=new N,u=new oe,m=new oe,v=new oe,S=new N,d=new N;function p(F,tt,g){l.fromBufferAttribute(i,F),h.fromBufferAttribute(i,tt),f.fromBufferAttribute(i,g),u.fromBufferAttribute(s,F),m.fromBufferAttribute(s,tt),v.fromBufferAttribute(s,g),h.sub(l),f.sub(l),m.sub(u),v.sub(u);const M=1/(m.x*v.y-v.x*m.y);isFinite(M)&&(S.copy(h).multiplyScalar(v.y).addScaledVector(f,-m.y).multiplyScalar(M),d.copy(f).multiplyScalar(m.x).addScaledVector(h,-v.x).multiplyScalar(M),o[F].add(S),o[tt].add(S),o[g].add(S),c[F].add(d),c[tt].add(d),c[g].add(d))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let F=0,tt=T.length;F<tt;++F){const g=T[F],M=g.start,H=g.count;for(let k=M,q=M+H;k<q;k+=3)p(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const E=new N,A=new N,O=new N,P=new N;function b(F){O.fromBufferAttribute(r,F),P.copy(O);const tt=o[F];E.copy(tt),E.sub(O.multiplyScalar(O.dot(tt))).normalize(),A.crossVectors(P,tt);const M=A.dot(c[F])<0?-1:1;a.setXYZW(F,E.x,E.y,E.z,M)}for(let F=0,tt=T.length;F<tt;++F){const g=T[F],M=g.start,H=g.count;for(let k=M,q=M+H;k<q;k+=3)b(t.getX(k+0)),b(t.getX(k+1)),b(t.getX(k+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new nn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,m=i.count;u<m;u++)i.setXYZ(u,0,0,0);const r=new N,s=new N,a=new N,o=new N,c=new N,l=new N,h=new N,f=new N;if(t)for(let u=0,m=t.count;u<m;u+=3){const v=t.getX(u+0),S=t.getX(u+1),d=t.getX(u+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,S),a.fromBufferAttribute(n,d),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),o.fromBufferAttribute(i,v),c.fromBufferAttribute(i,S),l.fromBufferAttribute(i,d),o.add(h),c.add(h),l.add(h),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(S,c.x,c.y,c.z),i.setXYZ(d,l.x,l.y,l.z)}else for(let u=0,m=n.count;u<m;u+=3)r.fromBufferAttribute(n,u+0),s.fromBufferAttribute(n,u+1),a.fromBufferAttribute(n,u+2),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)Be.fromBufferAttribute(t,n),Be.normalize(),t.setXYZ(n,Be.x,Be.y,Be.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,f=o.normalized,u=new l.constructor(c.length*h);let m=0,v=0;for(let S=0,d=c.length;S<d;S++){o.isInterleavedBufferAttribute?m=c[S]*o.data.stride+o.offset:m=c[S]*h;for(let p=0;p<h;p++)u[v++]=l[m++]}return new nn(u,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ci,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=t(c,i);n.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let h=0,f=l.length;h<f;h++){const u=l[h],m=t(u,i);c.push(m)}n.morphAttributes[o]=c}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];n.addGroup(l.start,l.count,l.materialIndex)}return n}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let f=0,u=l.length;f<u;f++){const m=l[f];h.push(m.toJSON(t.data))}h.length>0&&(r[c]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(n));const r=t.attributes;for(const l in r){const h=r[l];this.setAttribute(l,h.clone(n))}const s=t.morphAttributes;for(const l in s){const h=[],f=s[l];for(let u=0,m=f.length;u<m;u++)h.push(f[u].clone(n));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lf=new Re,nr=new Om,ya=new Go,Df=new N,Ea=new N,Ta=new N,Aa=new N,wc=new N,ba=new N,Uf=new N,wa=new N;class Si extends an{constructor(t=new Ci,n=new zm){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){ba.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=o[c],f=s[c];h!==0&&(wc.fromBufferAttribute(f,t),a?ba.addScaledVector(wc,h):ba.addScaledVector(wc.sub(n),h))}n.add(ba)}return n}raycast(t,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ya.copy(i.boundingSphere),ya.applyMatrix4(s),nr.copy(t.ray).recast(t.near),!(ya.containsPoint(nr.origin)===!1&&(nr.intersectSphere(ya,Df)===null||nr.origin.distanceToSquared(Df)>(t.far-t.near)**2))&&(Lf.copy(s).invert(),nr.copy(t.ray).applyMatrix4(Lf),!(i.boundingBox!==null&&nr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,nr)))}_computeIntersections(t,n,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,u=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,S=u.length;v<S;v++){const d=u[v],p=a[d.materialIndex],T=Math.max(d.start,m.start),E=Math.min(o.count,Math.min(d.start+d.count,m.start+m.count));for(let A=T,O=E;A<O;A+=3){const P=o.getX(A),b=o.getX(A+1),F=o.getX(A+2);r=Ra(this,p,t,i,l,h,f,P,b,F),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=d.materialIndex,n.push(r))}}else{const v=Math.max(0,m.start),S=Math.min(o.count,m.start+m.count);for(let d=v,p=S;d<p;d+=3){const T=o.getX(d),E=o.getX(d+1),A=o.getX(d+2);r=Ra(this,a,t,i,l,h,f,T,E,A),r&&(r.faceIndex=Math.floor(d/3),n.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let v=0,S=u.length;v<S;v++){const d=u[v],p=a[d.materialIndex],T=Math.max(d.start,m.start),E=Math.min(c.count,Math.min(d.start+d.count,m.start+m.count));for(let A=T,O=E;A<O;A+=3){const P=A,b=A+1,F=A+2;r=Ra(this,p,t,i,l,h,f,P,b,F),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=d.materialIndex,n.push(r))}}else{const v=Math.max(0,m.start),S=Math.min(c.count,m.start+m.count);for(let d=v,p=S;d<p;d+=3){const T=d,E=d+1,A=d+2;r=Ra(this,a,t,i,l,h,f,T,E,A),r&&(r.faceIndex=Math.floor(d/3),n.push(r))}}}}function b1(e,t,n,i,r,s,a,o){let c;if(t.side===rn?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,t.side===ji,o),c===null)return null;wa.copy(o),wa.applyMatrix4(e.matrixWorld);const l=n.ray.origin.distanceTo(wa);return l<n.near||l>n.far?null:{distance:l,point:wa.clone(),object:e}}function Ra(e,t,n,i,r,s,a,o,c,l){e.getVertexPosition(o,Ea),e.getVertexPosition(c,Ta),e.getVertexPosition(l,Aa);const h=b1(e,t,n,i,Ea,Ta,Aa,Uf);if(h){const f=new N;Wn.getBarycoord(Uf,Ea,Ta,Aa,f),r&&(h.uv=Wn.getInterpolatedAttribute(r,o,c,l,f,new oe)),s&&(h.uv1=Wn.getInterpolatedAttribute(s,o,c,l,f,new oe)),a&&(h.normal=Wn.getInterpolatedAttribute(a,o,c,l,f,new N),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new N,materialIndex:0};Wn.getNormal(Ea,Ta,Aa,u.normal),h.face=u,h.barycoord=f}return h}class na extends Ci{constructor(t=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],h=[],f=[];let u=0,m=0;v("z","y","x",-1,-1,i,n,t,a,s,0),v("z","y","x",1,-1,i,n,-t,a,s,1),v("x","z","y",1,1,t,i,n,r,a,2),v("x","z","y",1,-1,t,i,-n,r,a,3),v("x","y","z",1,-1,t,n,i,r,s,4),v("x","y","z",-1,-1,t,n,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new vr(l,3)),this.setAttribute("normal",new vr(h,3)),this.setAttribute("uv",new vr(f,2));function v(S,d,p,T,E,A,O,P,b,F,tt){const g=A/b,M=O/F,H=A/2,k=O/2,q=P/2,K=b+1,G=F+1;let j=0,z=0;const ct=new N;for(let lt=0;lt<G;lt++){const xt=lt*M-k;for(let jt=0;jt<K;jt++){const te=jt*g-H;ct[S]=te*T,ct[d]=xt*E,ct[p]=q,l.push(ct.x,ct.y,ct.z),ct[S]=0,ct[d]=0,ct[p]=P>0?1:-1,h.push(ct.x,ct.y,ct.z),f.push(jt/b),f.push(1-lt/F),j+=1}}for(let lt=0;lt<F;lt++)for(let xt=0;xt<b;xt++){const jt=u+xt+K*lt,te=u+xt+K*(lt+1),V=u+(xt+1)+K*(lt+1),Z=u+(xt+1)+K*lt;c.push(jt,te,Z),c.push(te,V,Z),z+=6}o.addGroup(m,z,tt),m+=z,u+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new na(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function cs(e){const t={};for(const n in e){t[n]={};for(const i in e[n]){const r=e[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=r.clone():Array.isArray(r)?t[n][i]=r.slice():t[n][i]=r}}return t}function Ke(e){const t={};for(let n=0;n<e.length;n++){const i=cs(e[n]);for(const r in i)t[r]=i[r]}return t}function w1(e){const t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Vm(e){const t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}const R1={clone:cs,merge:Ke};var C1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,P1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ri extends ea{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=C1,this.fragmentShader=P1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=cs(t.uniforms),this.uniformsGroups=w1(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Wm extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Re,this.projectionMatrix=new Re,this.projectionMatrixInverse=new Re,this.coordinateSystem=Mi}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Oi=new N,If=new oe,Nf=new oe;class Hn extends Wm{constructor(t=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=ql*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ac*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ql*2*Math.atan(Math.tan(ac*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){Oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Oi.x,Oi.y).multiplyScalar(-t/Oi.z),Oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Oi.x,Oi.y).multiplyScalar(-t/Oi.z)}getViewSize(t,n){return this.getViewBounds(t,If,Nf),n.subVectors(Nf,If)}setViewOffset(t,n,i,r,s,a){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(ac*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,n-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Fr=-90,Or=1;class L1 extends an{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Hn(Fr,Or,t,n);r.layers=this.layers,this.add(r);const s=new Hn(Fr,Or,t,n);s.layers=this.layers,this.add(s);const a=new Hn(Fr,Or,t,n);a.layers=this.layers,this.add(a);const o=new Hn(Fr,Or,t,n);o.layers=this.layers,this.add(o);const c=new Hn(Fr,Or,t,n);c.layers=this.layers,this.add(c);const l=new Hn(Fr,Or,t,n);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,c]=n;for(const l of n)this.remove(l);if(t===Mi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===fo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of n)this.add(l),l.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(n,s),t.setRenderTarget(i,1,r),t.render(n,a),t.setRenderTarget(i,2,r),t.render(n,o),t.setRenderTarget(i,3,r),t.render(n,c),t.setRenderTarget(i,4,r),t.render(n,l),i.texture.generateMipmaps=S,t.setRenderTarget(i,5,r),t.render(n,h),t.setRenderTarget(f,u,m),t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Xm extends sn{constructor(t,n,i,r,s,a,o,c,l,h){t=t!==void 0?t:[],n=n!==void 0?n:rs,super(t,n,i,r,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class D1 extends yr{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new Xm(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Vn}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new na(5,5,5),s=new Ri({name:"CubemapFromEquirect",uniforms:cs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:rn,blending:Gi});s.uniforms.tEquirect.value=n;const a=new Si(r,s),o=n.minFilter;return n.minFilter===dr&&(n.minFilter=Vn),new L1(1,10,this).update(t,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,n,i,r){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(n,i,r);t.setRenderTarget(s)}}const Rc=new N,U1=new N,I1=new Ft;class or{constructor(t=new N(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,r){return this.normal.set(t,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){const r=Rc.subVectors(i,n).cross(U1.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const i=t.delta(Rc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const i=n||I1.getNormalMatrix(t),r=this.coplanarPoint(Rc).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ir=new Go,Ca=new N;class qm{constructor(t=new or,n=new or,i=new or,r=new or,s=new or,a=new or){this.planes=[t,n,i,r,s,a]}set(t,n,i,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=Mi){const i=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],c=r[3],l=r[4],h=r[5],f=r[6],u=r[7],m=r[8],v=r[9],S=r[10],d=r[11],p=r[12],T=r[13],E=r[14],A=r[15];if(i[0].setComponents(c-s,u-l,d-m,A-p).normalize(),i[1].setComponents(c+s,u+l,d+m,A+p).normalize(),i[2].setComponents(c+a,u+h,d+v,A+T).normalize(),i[3].setComponents(c-a,u-h,d-v,A-T).normalize(),i[4].setComponents(c-o,u-f,d-S,A-E).normalize(),n===Mi)i[5].setComponents(c+o,u+f,d+S,A+E).normalize();else if(n===fo)i[5].setComponents(o,f,S,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ir.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ir.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ir)}intersectsSprite(t){return ir.center.set(0,0,0),ir.radius=.7071067811865476,ir.applyMatrix4(t.matrixWorld),this.intersectsSphere(ir)}intersectsSphere(t){const n=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ca.x=r.normal.x>0?t.max.x:t.min.x,Ca.y=r.normal.y>0?t.max.y:t.min.y,Ca.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Ca)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ym(){let e=null,t=!1,n=null,i=null;function r(s,a){n(s,a),i=e.requestAnimationFrame(r)}return{start:function(){t!==!0&&n!==null&&(i=e.requestAnimationFrame(r),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){n=s},setContext:function(s){e=s}}}function N1(e){const t=new WeakMap;function n(o,c){const l=o.array,h=o.usage,f=l.byteLength,u=e.createBuffer();e.bindBuffer(c,u),e.bufferData(c,l,h),o.onUploadCallback();let m;if(l instanceof Float32Array)m=e.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=e.HALF_FLOAT:m=e.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=e.SHORT;else if(l instanceof Uint32Array)m=e.UNSIGNED_INT;else if(l instanceof Int32Array)m=e.INT;else if(l instanceof Int8Array)m=e.BYTE;else if(l instanceof Uint8Array)m=e.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,c,l){const h=c.array,f=c.updateRanges;if(e.bindBuffer(l,o),f.length===0)e.bufferSubData(l,0,h);else{f.sort((m,v)=>m.start-v.start);let u=0;for(let m=1;m<f.length;m++){const v=f[u],S=f[m];S.start<=v.start+v.count+1?v.count=Math.max(v.count,S.start+S.count-v.start):(++u,f[u]=S)}f.length=u+1;for(let m=0,v=f.length;m<v;m++){const S=f[m];e.bufferSubData(l,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(e.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,n(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}class Ho extends Ci{constructor(t=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:r};const s=t/2,a=n/2,o=Math.floor(i),c=Math.floor(r),l=o+1,h=c+1,f=t/o,u=n/c,m=[],v=[],S=[],d=[];for(let p=0;p<h;p++){const T=p*u-a;for(let E=0;E<l;E++){const A=E*f-s;v.push(A,-T,0),S.push(0,0,1),d.push(E/o),d.push(1-p/c)}}for(let p=0;p<c;p++)for(let T=0;T<o;T++){const E=T+l*p,A=T+l*(p+1),O=T+1+l*(p+1),P=T+1+l*p;m.push(E,A,P),m.push(A,O,P)}this.setIndex(m),this.setAttribute("position",new vr(v,3)),this.setAttribute("normal",new vr(S,3)),this.setAttribute("uv",new vr(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ho(t.width,t.height,t.widthSegments,t.heightSegments)}}var F1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,O1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,B1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,k1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,z1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,G1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,H1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,V1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,W1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,X1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,q1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Y1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,j1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,K1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,$1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Z1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,J1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Q1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,t2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,e2=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,n2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,i2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,r2=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,s2=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,a2=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,o2=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,c2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,l2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,h2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,u2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,f2="gl_FragColor = linearToOutputTexel( gl_FragColor );",d2=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,p2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,m2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,g2=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,_2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,v2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,x2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,M2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,S2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,y2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,E2=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,T2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,A2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,b2=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,w2=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,R2=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,C2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,P2=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,L2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,D2=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,U2=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,I2=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,N2=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,F2=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,O2=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,B2=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,k2=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,z2=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,G2=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,H2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,V2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,W2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,X2=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,q2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Y2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,j2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,K2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Z2=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,J2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Q2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,tv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ev=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,sv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,av=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ov=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,uv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_v=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,vv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,xv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Mv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Sv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ev=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Tv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Av=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Cv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Pv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Lv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Dv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Uv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Iv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Nv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Fv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ov=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Hv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Vv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Wv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Xv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Kv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,$v=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,tx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ex=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,nx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ix=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ax=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ox=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,hx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ux=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,dx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,px=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Nt={alphahash_fragment:F1,alphahash_pars_fragment:O1,alphamap_fragment:B1,alphamap_pars_fragment:k1,alphatest_fragment:z1,alphatest_pars_fragment:G1,aomap_fragment:H1,aomap_pars_fragment:V1,batching_pars_vertex:W1,batching_vertex:X1,begin_vertex:q1,beginnormal_vertex:Y1,bsdfs:j1,iridescence_fragment:K1,bumpmap_pars_fragment:$1,clipping_planes_fragment:Z1,clipping_planes_pars_fragment:J1,clipping_planes_pars_vertex:Q1,clipping_planes_vertex:t2,color_fragment:e2,color_pars_fragment:n2,color_pars_vertex:i2,color_vertex:r2,common:s2,cube_uv_reflection_fragment:a2,defaultnormal_vertex:o2,displacementmap_pars_vertex:c2,displacementmap_vertex:l2,emissivemap_fragment:h2,emissivemap_pars_fragment:u2,colorspace_fragment:f2,colorspace_pars_fragment:d2,envmap_fragment:p2,envmap_common_pars_fragment:m2,envmap_pars_fragment:g2,envmap_pars_vertex:_2,envmap_physical_pars_fragment:R2,envmap_vertex:v2,fog_vertex:x2,fog_pars_vertex:M2,fog_fragment:S2,fog_pars_fragment:y2,gradientmap_pars_fragment:E2,lightmap_pars_fragment:T2,lights_lambert_fragment:A2,lights_lambert_pars_fragment:b2,lights_pars_begin:w2,lights_toon_fragment:C2,lights_toon_pars_fragment:P2,lights_phong_fragment:L2,lights_phong_pars_fragment:D2,lights_physical_fragment:U2,lights_physical_pars_fragment:I2,lights_fragment_begin:N2,lights_fragment_maps:F2,lights_fragment_end:O2,logdepthbuf_fragment:B2,logdepthbuf_pars_fragment:k2,logdepthbuf_pars_vertex:z2,logdepthbuf_vertex:G2,map_fragment:H2,map_pars_fragment:V2,map_particle_fragment:W2,map_particle_pars_fragment:X2,metalnessmap_fragment:q2,metalnessmap_pars_fragment:Y2,morphinstance_vertex:j2,morphcolor_vertex:K2,morphnormal_vertex:$2,morphtarget_pars_vertex:Z2,morphtarget_vertex:J2,normal_fragment_begin:Q2,normal_fragment_maps:tv,normal_pars_fragment:ev,normal_pars_vertex:nv,normal_vertex:iv,normalmap_pars_fragment:rv,clearcoat_normal_fragment_begin:sv,clearcoat_normal_fragment_maps:av,clearcoat_pars_fragment:ov,iridescence_pars_fragment:cv,opaque_fragment:lv,packing:hv,premultiplied_alpha_fragment:uv,project_vertex:fv,dithering_fragment:dv,dithering_pars_fragment:pv,roughnessmap_fragment:mv,roughnessmap_pars_fragment:gv,shadowmap_pars_fragment:_v,shadowmap_pars_vertex:vv,shadowmap_vertex:xv,shadowmask_pars_fragment:Mv,skinbase_vertex:Sv,skinning_pars_vertex:yv,skinning_vertex:Ev,skinnormal_vertex:Tv,specularmap_fragment:Av,specularmap_pars_fragment:bv,tonemapping_fragment:wv,tonemapping_pars_fragment:Rv,transmission_fragment:Cv,transmission_pars_fragment:Pv,uv_pars_fragment:Lv,uv_pars_vertex:Dv,uv_vertex:Uv,worldpos_vertex:Iv,background_vert:Nv,background_frag:Fv,backgroundCube_vert:Ov,backgroundCube_frag:Bv,cube_vert:kv,cube_frag:zv,depth_vert:Gv,depth_frag:Hv,distanceRGBA_vert:Vv,distanceRGBA_frag:Wv,equirect_vert:Xv,equirect_frag:qv,linedashed_vert:Yv,linedashed_frag:jv,meshbasic_vert:Kv,meshbasic_frag:$v,meshlambert_vert:Zv,meshlambert_frag:Jv,meshmatcap_vert:Qv,meshmatcap_frag:tx,meshnormal_vert:ex,meshnormal_frag:nx,meshphong_vert:ix,meshphong_frag:rx,meshphysical_vert:sx,meshphysical_frag:ax,meshtoon_vert:ox,meshtoon_frag:cx,points_vert:lx,points_frag:hx,shadow_vert:ux,shadow_frag:fx,sprite_vert:dx,sprite_frag:px},et={common:{diffuse:{value:new ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new ne(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},ni={basic:{uniforms:Ke([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.fog]),vertexShader:Nt.meshbasic_vert,fragmentShader:Nt.meshbasic_frag},lambert:{uniforms:Ke([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new ne(0)}}]),vertexShader:Nt.meshlambert_vert,fragmentShader:Nt.meshlambert_frag},phong:{uniforms:Ke([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new ne(0)},specular:{value:new ne(1118481)},shininess:{value:30}}]),vertexShader:Nt.meshphong_vert,fragmentShader:Nt.meshphong_frag},standard:{uniforms:Ke([et.common,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.roughnessmap,et.metalnessmap,et.fog,et.lights,{emissive:{value:new ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag},toon:{uniforms:Ke([et.common,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.gradientmap,et.fog,et.lights,{emissive:{value:new ne(0)}}]),vertexShader:Nt.meshtoon_vert,fragmentShader:Nt.meshtoon_frag},matcap:{uniforms:Ke([et.common,et.bumpmap,et.normalmap,et.displacementmap,et.fog,{matcap:{value:null}}]),vertexShader:Nt.meshmatcap_vert,fragmentShader:Nt.meshmatcap_frag},points:{uniforms:Ke([et.points,et.fog]),vertexShader:Nt.points_vert,fragmentShader:Nt.points_frag},dashed:{uniforms:Ke([et.common,et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Nt.linedashed_vert,fragmentShader:Nt.linedashed_frag},depth:{uniforms:Ke([et.common,et.displacementmap]),vertexShader:Nt.depth_vert,fragmentShader:Nt.depth_frag},normal:{uniforms:Ke([et.common,et.bumpmap,et.normalmap,et.displacementmap,{opacity:{value:1}}]),vertexShader:Nt.meshnormal_vert,fragmentShader:Nt.meshnormal_frag},sprite:{uniforms:Ke([et.sprite,et.fog]),vertexShader:Nt.sprite_vert,fragmentShader:Nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Nt.background_vert,fragmentShader:Nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:Nt.backgroundCube_vert,fragmentShader:Nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Nt.cube_vert,fragmentShader:Nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Nt.equirect_vert,fragmentShader:Nt.equirect_frag},distanceRGBA:{uniforms:Ke([et.common,et.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Nt.distanceRGBA_vert,fragmentShader:Nt.distanceRGBA_frag},shadow:{uniforms:Ke([et.lights,et.fog,{color:{value:new ne(0)},opacity:{value:1}}]),vertexShader:Nt.shadow_vert,fragmentShader:Nt.shadow_frag}};ni.physical={uniforms:Ke([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new ne(0)},specularColor:{value:new ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag};const Pa={r:0,b:0,g:0},rr=new wi,mx=new Re;function gx(e,t,n,i,r,s,a){const o=new ne(0);let c=s===!0?0:1,l,h,f=null,u=0,m=null;function v(T){let E=T.isScene===!0?T.background:null;return E&&E.isTexture&&(E=(T.backgroundBlurriness>0?n:t).get(E)),E}function S(T){let E=!1;const A=v(T);A===null?p(o,c):A&&A.isColor&&(p(A,1),E=!0);const O=e.xr.getEnvironmentBlendMode();O==="additive"?i.buffers.color.setClear(0,0,0,1,a):O==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(e.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function d(T,E){const A=v(E);A&&(A.isCubeTexture||A.mapping===ko)?(h===void 0&&(h=new Si(new na(1,1,1),new Ri({name:"BackgroundCubeMaterial",uniforms:cs(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(O,P,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),rr.copy(E.backgroundRotation),rr.x*=-1,rr.y*=-1,rr.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(rr.y*=-1,rr.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(mx.makeRotationFromEuler(rr)),h.material.toneMapped=Jt.getTransfer(A.colorSpace)!==de,(f!==A||u!==A.version||m!==e.toneMapping)&&(h.material.needsUpdate=!0,f=A,u=A.version,m=e.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new Si(new Ho(2,2),new Ri({name:"BackgroundMaterial",uniforms:cs(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:ji,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=Jt.getTransfer(A.colorSpace)!==de,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(f!==A||u!==A.version||m!==e.toneMapping)&&(l.material.needsUpdate=!0,f=A,u=A.version,m=e.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function p(T,E){T.getRGB(Pa,Vm(e)),i.buffers.color.setClear(Pa.r,Pa.g,Pa.b,E,a)}return{getClearColor:function(){return o},setClearColor:function(T,E=1){o.set(T),c=E,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(T){c=T,p(o,c)},render:S,addToRenderList:d}}function _x(e,t){const n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},r=u(null);let s=r,a=!1;function o(g,M,H,k,q){let K=!1;const G=f(k,H,M);s!==G&&(s=G,l(s.object)),K=m(g,k,H,q),K&&v(g,k,H,q),q!==null&&t.update(q,e.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,A(g,M,H,k),q!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function c(){return e.createVertexArray()}function l(g){return e.bindVertexArray(g)}function h(g){return e.deleteVertexArray(g)}function f(g,M,H){const k=H.wireframe===!0;let q=i[g.id];q===void 0&&(q={},i[g.id]=q);let K=q[M.id];K===void 0&&(K={},q[M.id]=K);let G=K[k];return G===void 0&&(G=u(c()),K[k]=G),G}function u(g){const M=[],H=[],k=[];for(let q=0;q<n;q++)M[q]=0,H[q]=0,k[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:H,attributeDivisors:k,object:g,attributes:{},index:null}}function m(g,M,H,k){const q=s.attributes,K=M.attributes;let G=0;const j=H.getAttributes();for(const z in j)if(j[z].location>=0){const lt=q[z];let xt=K[z];if(xt===void 0&&(z==="instanceMatrix"&&g.instanceMatrix&&(xt=g.instanceMatrix),z==="instanceColor"&&g.instanceColor&&(xt=g.instanceColor)),lt===void 0||lt.attribute!==xt||xt&&lt.data!==xt.data)return!0;G++}return s.attributesNum!==G||s.index!==k}function v(g,M,H,k){const q={},K=M.attributes;let G=0;const j=H.getAttributes();for(const z in j)if(j[z].location>=0){let lt=K[z];lt===void 0&&(z==="instanceMatrix"&&g.instanceMatrix&&(lt=g.instanceMatrix),z==="instanceColor"&&g.instanceColor&&(lt=g.instanceColor));const xt={};xt.attribute=lt,lt&&lt.data&&(xt.data=lt.data),q[z]=xt,G++}s.attributes=q,s.attributesNum=G,s.index=k}function S(){const g=s.newAttributes;for(let M=0,H=g.length;M<H;M++)g[M]=0}function d(g){p(g,0)}function p(g,M){const H=s.newAttributes,k=s.enabledAttributes,q=s.attributeDivisors;H[g]=1,k[g]===0&&(e.enableVertexAttribArray(g),k[g]=1),q[g]!==M&&(e.vertexAttribDivisor(g,M),q[g]=M)}function T(){const g=s.newAttributes,M=s.enabledAttributes;for(let H=0,k=M.length;H<k;H++)M[H]!==g[H]&&(e.disableVertexAttribArray(H),M[H]=0)}function E(g,M,H,k,q,K,G){G===!0?e.vertexAttribIPointer(g,M,H,q,K):e.vertexAttribPointer(g,M,H,k,q,K)}function A(g,M,H,k){S();const q=k.attributes,K=H.getAttributes(),G=M.defaultAttributeValues;for(const j in K){const z=K[j];if(z.location>=0){let ct=q[j];if(ct===void 0&&(j==="instanceMatrix"&&g.instanceMatrix&&(ct=g.instanceMatrix),j==="instanceColor"&&g.instanceColor&&(ct=g.instanceColor)),ct!==void 0){const lt=ct.normalized,xt=ct.itemSize,jt=t.get(ct);if(jt===void 0)continue;const te=jt.buffer,V=jt.type,Z=jt.bytesPerElement,gt=V===e.INT||V===e.UNSIGNED_INT||ct.gpuType===Zh;if(ct.isInterleavedBufferAttribute){const ht=ct.data,Dt=ht.stride,bt=ct.offset;if(ht.isInstancedInterleavedBuffer){for(let Gt=0;Gt<z.locationSize;Gt++)p(z.location+Gt,ht.meshPerAttribute);g.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Gt=0;Gt<z.locationSize;Gt++)d(z.location+Gt);e.bindBuffer(e.ARRAY_BUFFER,te);for(let Gt=0;Gt<z.locationSize;Gt++)E(z.location+Gt,xt/z.locationSize,V,lt,Dt*Z,(bt+xt/z.locationSize*Gt)*Z,gt)}else{if(ct.isInstancedBufferAttribute){for(let ht=0;ht<z.locationSize;ht++)p(z.location+ht,ct.meshPerAttribute);g.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let ht=0;ht<z.locationSize;ht++)d(z.location+ht);e.bindBuffer(e.ARRAY_BUFFER,te);for(let ht=0;ht<z.locationSize;ht++)E(z.location+ht,xt/z.locationSize,V,lt,xt*Z,xt/z.locationSize*ht*Z,gt)}}else if(G!==void 0){const lt=G[j];if(lt!==void 0)switch(lt.length){case 2:e.vertexAttrib2fv(z.location,lt);break;case 3:e.vertexAttrib3fv(z.location,lt);break;case 4:e.vertexAttrib4fv(z.location,lt);break;default:e.vertexAttrib1fv(z.location,lt)}}}}T()}function O(){F();for(const g in i){const M=i[g];for(const H in M){const k=M[H];for(const q in k)h(k[q].object),delete k[q];delete M[H]}delete i[g]}}function P(g){if(i[g.id]===void 0)return;const M=i[g.id];for(const H in M){const k=M[H];for(const q in k)h(k[q].object),delete k[q];delete M[H]}delete i[g.id]}function b(g){for(const M in i){const H=i[M];if(H[g.id]===void 0)continue;const k=H[g.id];for(const q in k)h(k[q].object),delete k[q];delete H[g.id]}}function F(){tt(),a=!0,s!==r&&(s=r,l(s.object))}function tt(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:F,resetDefaultState:tt,dispose:O,releaseStatesOfGeometry:P,releaseStatesOfProgram:b,initAttributes:S,enableAttribute:d,disableUnusedAttributes:T}}function vx(e,t,n){let i;function r(l){i=l}function s(l,h){e.drawArrays(i,l,h),n.update(h,i,1)}function a(l,h,f){f!==0&&(e.drawArraysInstanced(i,l,h,f),n.update(h,i,f))}function o(l,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,f);let m=0;for(let v=0;v<f;v++)m+=h[v];n.update(m,i,1)}function c(l,h,f,u){if(f===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<l.length;v++)a(l[v],h[v],u[v]);else{m.multiDrawArraysInstancedWEBGL(i,l,0,h,0,u,0,f);let v=0;for(let S=0;S<f;S++)v+=h[S];for(let S=0;S<u.length;S++)n.update(v,i,u[S])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function xx(e,t,n,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");r=e.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(b){return!(b!==Xn&&i.convert(b)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const F=b===Zs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==bi&&i.convert(b)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==xi&&!F)}function c(b){if(b==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=n.precision!==void 0?n.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const f=n.logarithmicDepthBuffer===!0,u=n.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(u===!0){const b=t.get("EXT_clip_control");b.clipControlEXT(b.LOWER_LEFT_EXT,b.ZERO_TO_ONE_EXT)}const m=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),v=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=e.getParameter(e.MAX_TEXTURE_SIZE),d=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),p=e.getParameter(e.MAX_VERTEX_ATTRIBS),T=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),E=e.getParameter(e.MAX_VARYING_VECTORS),A=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),O=v>0,P=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reverseDepthBuffer:u,maxTextures:m,maxVertexTextures:v,maxTextureSize:S,maxCubemapSize:d,maxAttributes:p,maxVertexUniforms:T,maxVaryings:E,maxFragmentUniforms:A,vertexTextures:O,maxSamples:P}}function Mx(e){const t=this;let n=null,i=0,r=!1,s=!1;const a=new or,o=new Ft,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const m=f.length!==0||u||i!==0||r;return r=u,i=f.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,u){n=h(f,u,0)},this.setState=function(f,u,m){const v=f.clippingPlanes,S=f.clipIntersection,d=f.clipShadows,p=e.get(f);if(!r||v===null||v.length===0||s&&!d)s?h(null):l();else{const T=s?0:i,E=T*4;let A=p.clippingState||null;c.value=A,A=h(v,u,E,m);for(let O=0;O!==E;++O)A[O]=n[O];p.clippingState=A,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(f,u,m,v){const S=f!==null?f.length:0;let d=null;if(S!==0){if(d=c.value,v!==!0||d===null){const p=m+S*4,T=u.matrixWorldInverse;o.getNormalMatrix(T),(d===null||d.length<p)&&(d=new Float32Array(p));for(let E=0,A=m;E!==S;++E,A+=4)a.copy(f[E]).applyMatrix4(T,o),a.normal.toArray(d,A),d[A+3]=a.constant}c.value=d,c.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,d}}function Sx(e){let t=new WeakMap;function n(a,o){return o===gl?a.mapping=rs:o===_l&&(a.mapping=ss),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===gl||o===_l)if(t.has(a)){const c=t.get(a).texture;return n(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new D1(c.height);return l.fromEquirectangularTexture(e,a),t.set(a,l),a.addEventListener("dispose",r),n(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class jm extends Wm{constructor(t=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,a=i+t,o=r+n,c=r-n;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const zr=4,Ff=[.125,.215,.35,.446,.526,.582],hr=20,Cc=new jm,Of=new ne;let Pc=null,Lc=0,Dc=0,Uc=!1;const cr=(1+Math.sqrt(5))/2,Br=1/cr,Bf=[new N(-cr,Br,0),new N(cr,Br,0),new N(-Br,0,cr),new N(Br,0,cr),new N(0,cr,-Br),new N(0,cr,Br),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class kf{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,i=.1,r=100){Pc=this._renderer.getRenderTarget(),Lc=this._renderer.getActiveCubeFace(),Dc=this._renderer.getActiveMipmapLevel(),Uc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Pc,Lc,Dc),this._renderer.xr.enabled=Uc,t.scissorTest=!1,La(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===rs||t.mapping===ss?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Pc=this._renderer.getRenderTarget(),Lc=this._renderer.getActiveCubeFace(),Dc=this._renderer.getActiveMipmapLevel(),Uc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Vn,minFilter:Vn,generateMipmaps:!1,type:Zs,format:Xn,colorSpace:Zi,depthBuffer:!1},r=zf(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zf(t,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=yx(s)),this._blurMaterial=Ex(s,t,n)}return r}_compileMaterial(t){const n=new Si(this._lodPlanes[0],t);this._renderer.compile(n,Cc)}_sceneToCubeUV(t,n,i,r){const o=new Hn(90,1,n,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,u=h.toneMapping;h.getClearColor(Of),h.toneMapping=Hi,h.autoClear=!1;const m=new zm({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),v=new Si(new na,m);let S=!1;const d=t.background;d?d.isColor&&(m.color.copy(d),t.background=null,S=!0):(m.color.copy(Of),S=!0);for(let p=0;p<6;p++){const T=p%3;T===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):T===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));const E=this._cubeSize;La(r,T*E,p>2?E:0,E,E),h.setRenderTarget(r),S&&h.render(v,o),h.render(t,o)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=u,h.autoClear=f,t.background=d}_textureToCubeUV(t,n){const i=this._renderer,r=t.mapping===rs||t.mapping===ss;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gf());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Si(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const c=this._cubeSize;La(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(a,Cc)}_applyPMREM(t){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Bf[(r-s-1)%Bf.length];this._blur(t,s-1,s,a,o)}n.autoClear=i}_blur(t,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,n,i,r,"latitudinal",s),this._halfBlur(a,t,i,i,r,"longitudinal",s)}_halfBlur(t,n,i,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new Si(this._lodPlanes[r],l),u=l.uniforms,m=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*hr-1),S=s/v,d=isFinite(s)?1+Math.floor(h*S):hr;d>hr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${hr}`);const p=[];let T=0;for(let b=0;b<hr;++b){const F=b/S,tt=Math.exp(-F*F/2);p.push(tt),b===0?T+=tt:b<d&&(T+=2*tt)}for(let b=0;b<p.length;b++)p[b]=p[b]/T;u.envMap.value=t.texture,u.samples.value=d,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:E}=this;u.dTheta.value=v,u.mipInt.value=E-i;const A=this._sizeLods[r],O=3*A*(r>E-zr?r-E+zr:0),P=4*(this._cubeSize-A);La(n,O,P,3*A,2*A),c.setRenderTarget(n),c.render(f,Cc)}}function yx(e){const t=[],n=[],i=[];let r=e;const s=e-zr+1+Ff.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let c=1/o;a>e-zr?c=Ff[a-e+zr-1]:a===0&&(c=0),i.push(c);const l=1/(o-2),h=-l,f=1+l,u=[h,h,f,h,f,f,h,h,f,f,h,f],m=6,v=6,S=3,d=2,p=1,T=new Float32Array(S*v*m),E=new Float32Array(d*v*m),A=new Float32Array(p*v*m);for(let P=0;P<m;P++){const b=P%3*2/3-1,F=P>2?0:-1,tt=[b,F,0,b+2/3,F,0,b+2/3,F+1,0,b,F,0,b+2/3,F+1,0,b,F+1,0];T.set(tt,S*v*P),E.set(u,d*v*P);const g=[P,P,P,P,P,P];A.set(g,p*v*P)}const O=new Ci;O.setAttribute("position",new nn(T,S)),O.setAttribute("uv",new nn(E,d)),O.setAttribute("faceIndex",new nn(A,p)),t.push(O),r>zr&&r--}return{lodPlanes:t,sizeLods:n,sigmas:i}}function zf(e,t,n){const i=new yr(e,t,n);return i.texture.mapping=ko,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function La(e,t,n,i,r){e.viewport.set(t,n,i,r),e.scissor.set(t,n,i,r)}function Ex(e,t,n){const i=new Float32Array(hr),r=new N(0,1,0);return new Ri({name:"SphericalGaussianBlur",defines:{n:hr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Gf(){return new Ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Hf(){return new Ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function ru(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Tx(e){let t=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===gl||c===_l,h=c===rs||c===ss;if(l||h){let f=t.get(o);const u=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return n===null&&(n=new kf(e)),f=l?n.fromEquirectangular(o,f):n.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),f.texture;if(f!==void 0)return f.texture;{const m=o.image;return l&&m&&m.height>0||h&&m&&r(m)?(n===null&&(n=new kf(e)),f=l?n.fromEquirectangular(o):n.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function Ax(e){const t={};function n(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=e.getExtension(i)}return t[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Ka("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function bx(e,t,n,i){const r={},s=new WeakMap;function a(f){const u=f.target;u.index!==null&&t.remove(u.index);for(const v in u.attributes)t.remove(u.attributes[v]);for(const v in u.morphAttributes){const S=u.morphAttributes[v];for(let d=0,p=S.length;d<p;d++)t.remove(S[d])}u.removeEventListener("dispose",a),delete r[u.id];const m=s.get(u);m&&(t.remove(m),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function o(f,u){return r[u.id]===!0||(u.addEventListener("dispose",a),r[u.id]=!0,n.memory.geometries++),u}function c(f){const u=f.attributes;for(const v in u)t.update(u[v],e.ARRAY_BUFFER);const m=f.morphAttributes;for(const v in m){const S=m[v];for(let d=0,p=S.length;d<p;d++)t.update(S[d],e.ARRAY_BUFFER)}}function l(f){const u=[],m=f.index,v=f.attributes.position;let S=0;if(m!==null){const T=m.array;S=m.version;for(let E=0,A=T.length;E<A;E+=3){const O=T[E+0],P=T[E+1],b=T[E+2];u.push(O,P,P,b,b,O)}}else if(v!==void 0){const T=v.array;S=v.version;for(let E=0,A=T.length/3-1;E<A;E+=3){const O=E+0,P=E+1,b=E+2;u.push(O,P,P,b,b,O)}}else return;const d=new(Im(u)?Hm:Gm)(u,1);d.version=S;const p=s.get(f);p&&t.remove(p),s.set(f,d)}function h(f){const u=s.get(f);if(u){const m=f.index;m!==null&&u.version<m.version&&l(f)}else l(f);return s.get(f)}return{get:o,update:c,getWireframeAttribute:h}}function wx(e,t,n){let i;function r(u){i=u}let s,a;function o(u){s=u.type,a=u.bytesPerElement}function c(u,m){e.drawElements(i,m,s,u*a),n.update(m,i,1)}function l(u,m,v){v!==0&&(e.drawElementsInstanced(i,m,s,u*a,v),n.update(m,i,v))}function h(u,m,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,u,0,v);let d=0;for(let p=0;p<v;p++)d+=m[p];n.update(d,i,1)}function f(u,m,v,S){if(v===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<u.length;p++)l(u[p]/a,m[p],S[p]);else{d.multiDrawElementsInstancedWEBGL(i,m,0,s,u,0,S,0,v);let p=0;for(let T=0;T<v;T++)p+=m[T];for(let T=0;T<S.length;T++)n.update(p,i,S[T])}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function Rx(e){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case e.TRIANGLES:n.triangles+=o*(s/3);break;case e.LINES:n.lines+=o*(s/2);break;case e.LINE_STRIP:n.lines+=o*(s-1);break;case e.LINE_LOOP:n.lines+=o*s;break;case e.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Cx(e,t,n){const i=new WeakMap,r=new we;function s(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let u=i.get(o);if(u===void 0||u.count!==f){let g=function(){F.dispose(),i.delete(o),o.removeEventListener("dispose",g)};var m=g;u!==void 0&&u.texture.dispose();const v=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,d=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],T=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let A=0;v===!0&&(A=1),S===!0&&(A=2),d===!0&&(A=3);let O=o.attributes.position.count*A,P=1;O>t.maxTextureSize&&(P=Math.ceil(O/t.maxTextureSize),O=t.maxTextureSize);const b=new Float32Array(O*P*4*f),F=new Fm(b,O,P,f);F.type=xi,F.needsUpdate=!0;const tt=A*4;for(let M=0;M<f;M++){const H=p[M],k=T[M],q=E[M],K=O*P*4*M;for(let G=0;G<H.count;G++){const j=G*tt;v===!0&&(r.fromBufferAttribute(H,G),b[K+j+0]=r.x,b[K+j+1]=r.y,b[K+j+2]=r.z,b[K+j+3]=0),S===!0&&(r.fromBufferAttribute(k,G),b[K+j+4]=r.x,b[K+j+5]=r.y,b[K+j+6]=r.z,b[K+j+7]=0),d===!0&&(r.fromBufferAttribute(q,G),b[K+j+8]=r.x,b[K+j+9]=r.y,b[K+j+10]=r.z,b[K+j+11]=q.itemSize===4?r.w:1)}}u={count:f,texture:F,size:new oe(O,P)},i.set(o,u),o.addEventListener("dispose",g)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(e,"morphTexture",a.morphTexture,n);else{let v=0;for(let d=0;d<l.length;d++)v+=l[d];const S=o.morphTargetsRelative?1:1-v;c.getUniforms().setValue(e,"morphTargetBaseInfluence",S),c.getUniforms().setValue(e,"morphTargetInfluences",l)}c.getUniforms().setValue(e,"morphTargetsTexture",u.texture,n),c.getUniforms().setValue(e,"morphTargetsTextureSize",u.size)}return{update:s}}function Px(e,t,n,i){let r=new WeakMap;function s(c){const l=i.render.frame,h=c.geometry,f=t.get(c,h);if(r.get(f)!==l&&(t.update(f),r.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(n.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,e.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const u=c.skeleton;r.get(u)!==l&&(u.update(),r.set(u,l))}return f}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),n.remove(l.instanceMatrix),l.instanceColor!==null&&n.remove(l.instanceColor)}return{update:s,dispose:a}}class Km extends sn{constructor(t,n,i,r,s,a,o,c,l,h=Wr){if(h!==Wr&&h!==os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Wr&&(i=Sr),i===void 0&&h===os&&(i=as),super(null,r,s,a,o,c,h,i,l),this.isDepthTexture=!0,this.image={width:t,height:n},this.magFilter=o!==void 0?o:Dn,this.minFilter=c!==void 0?c:Dn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const $m=new sn,Vf=new Km(1,1),Zm=new Fm,Jm=new g1,Qm=new Xm,Wf=[],Xf=[],qf=new Float32Array(16),Yf=new Float32Array(9),jf=new Float32Array(4);function _s(e,t,n){const i=e[0];if(i<=0||i>0)return e;const r=t*n;let s=Wf[r];if(s===void 0&&(s=new Float32Array(r),Wf[r]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=n,e[a].toArray(s,o)}return s}function Fe(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function Oe(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function Vo(e,t){let n=Xf[t];n===void 0&&(n=new Int32Array(t),Xf[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function Lx(e,t){const n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Dx(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Fe(n,t))return;e.uniform2fv(this.addr,t),Oe(n,t)}}function Ux(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Fe(n,t))return;e.uniform3fv(this.addr,t),Oe(n,t)}}function Ix(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Fe(n,t))return;e.uniform4fv(this.addr,t),Oe(n,t)}}function Nx(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Fe(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Oe(n,t)}else{if(Fe(n,i))return;jf.set(i),e.uniformMatrix2fv(this.addr,!1,jf),Oe(n,i)}}function Fx(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Fe(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Oe(n,t)}else{if(Fe(n,i))return;Yf.set(i),e.uniformMatrix3fv(this.addr,!1,Yf),Oe(n,i)}}function Ox(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Fe(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Oe(n,t)}else{if(Fe(n,i))return;qf.set(i),e.uniformMatrix4fv(this.addr,!1,qf),Oe(n,i)}}function Bx(e,t){const n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function kx(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Fe(n,t))return;e.uniform2iv(this.addr,t),Oe(n,t)}}function zx(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Fe(n,t))return;e.uniform3iv(this.addr,t),Oe(n,t)}}function Gx(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Fe(n,t))return;e.uniform4iv(this.addr,t),Oe(n,t)}}function Hx(e,t){const n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Vx(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Fe(n,t))return;e.uniform2uiv(this.addr,t),Oe(n,t)}}function Wx(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Fe(n,t))return;e.uniform3uiv(this.addr,t),Oe(n,t)}}function Xx(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Fe(n,t))return;e.uniform4uiv(this.addr,t),Oe(n,t)}}function qx(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r);let s;this.type===e.SAMPLER_2D_SHADOW?(Vf.compareFunction=Um,s=Vf):s=$m,n.setTexture2D(t||s,r)}function Yx(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(t||Jm,r)}function jx(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(t||Qm,r)}function Kx(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(t||Zm,r)}function $x(e){switch(e){case 5126:return Lx;case 35664:return Dx;case 35665:return Ux;case 35666:return Ix;case 35674:return Nx;case 35675:return Fx;case 35676:return Ox;case 5124:case 35670:return Bx;case 35667:case 35671:return kx;case 35668:case 35672:return zx;case 35669:case 35673:return Gx;case 5125:return Hx;case 36294:return Vx;case 36295:return Wx;case 36296:return Xx;case 35678:case 36198:case 36298:case 36306:case 35682:return qx;case 35679:case 36299:case 36307:return Yx;case 35680:case 36300:case 36308:case 36293:return jx;case 36289:case 36303:case 36311:case 36292:return Kx}}function Zx(e,t){e.uniform1fv(this.addr,t)}function Jx(e,t){const n=_s(t,this.size,2);e.uniform2fv(this.addr,n)}function Qx(e,t){const n=_s(t,this.size,3);e.uniform3fv(this.addr,n)}function t3(e,t){const n=_s(t,this.size,4);e.uniform4fv(this.addr,n)}function e3(e,t){const n=_s(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function n3(e,t){const n=_s(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function i3(e,t){const n=_s(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function r3(e,t){e.uniform1iv(this.addr,t)}function s3(e,t){e.uniform2iv(this.addr,t)}function a3(e,t){e.uniform3iv(this.addr,t)}function o3(e,t){e.uniform4iv(this.addr,t)}function c3(e,t){e.uniform1uiv(this.addr,t)}function l3(e,t){e.uniform2uiv(this.addr,t)}function h3(e,t){e.uniform3uiv(this.addr,t)}function u3(e,t){e.uniform4uiv(this.addr,t)}function f3(e,t,n){const i=this.cache,r=t.length,s=Vo(n,r);Fe(i,s)||(e.uniform1iv(this.addr,s),Oe(i,s));for(let a=0;a!==r;++a)n.setTexture2D(t[a]||$m,s[a])}function d3(e,t,n){const i=this.cache,r=t.length,s=Vo(n,r);Fe(i,s)||(e.uniform1iv(this.addr,s),Oe(i,s));for(let a=0;a!==r;++a)n.setTexture3D(t[a]||Jm,s[a])}function p3(e,t,n){const i=this.cache,r=t.length,s=Vo(n,r);Fe(i,s)||(e.uniform1iv(this.addr,s),Oe(i,s));for(let a=0;a!==r;++a)n.setTextureCube(t[a]||Qm,s[a])}function m3(e,t,n){const i=this.cache,r=t.length,s=Vo(n,r);Fe(i,s)||(e.uniform1iv(this.addr,s),Oe(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(t[a]||Zm,s[a])}function g3(e){switch(e){case 5126:return Zx;case 35664:return Jx;case 35665:return Qx;case 35666:return t3;case 35674:return e3;case 35675:return n3;case 35676:return i3;case 5124:case 35670:return r3;case 35667:case 35671:return s3;case 35668:case 35672:return a3;case 35669:case 35673:return o3;case 5125:return c3;case 36294:return l3;case 36295:return h3;case 36296:return u3;case 35678:case 36198:case 36298:case 36306:case 35682:return f3;case 35679:case 36299:case 36307:return d3;case 35680:case 36300:case 36308:case 36293:return p3;case 36289:case 36303:case 36311:case 36292:return m3}}class _3{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=$x(n.type)}}class v3{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=g3(n.type)}}class x3{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,n[o.id],i)}}}const Ic=/(\w+)(\])?(\[|\.)?/g;function Kf(e,t){e.seq.push(t),e.map[t.id]=t}function M3(e,t,n){const i=e.name,r=i.length;for(Ic.lastIndex=0;;){const s=Ic.exec(i),a=Ic.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){Kf(n,l===void 0?new _3(o,e,t):new v3(o,e,t));break}else{let f=n.map[o];f===void 0&&(f=new x3(o),Kf(n,f)),n=f}}}class $a{constructor(t,n){this.seq=[],this.map={};const i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(n,r),a=t.getUniformLocation(n,s.name);M3(s,a,this)}}setValue(t,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(t,i,r)}setOptional(t,n,i){const r=n[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,r)}}static seqWithValue(t,n){const i=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in n&&i.push(a)}return i}}function $f(e,t,n){const i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}const S3=37297;let y3=0;function E3(e,t){const n=e.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function T3(e){const t=Jt.getPrimaries(Jt.workingColorSpace),n=Jt.getPrimaries(e);let i;switch(t===n?i="":t===uo&&n===ho?i="LinearDisplayP3ToLinearSRGB":t===ho&&n===uo&&(i="LinearSRGBToLinearDisplayP3"),e){case Zi:case zo:return[i,"LinearTransferOETF"];case ti:case iu:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",e),[i,"LinearTransferOETF"]}}function Zf(e,t,n){const i=e.getShaderParameter(t,e.COMPILE_STATUS),r=e.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+E3(e.getShaderSource(t),a)}else return r}function A3(e,t){const n=T3(t);return`vec4 ${e}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function b3(e,t){let n;switch(t){case G_:n="Linear";break;case H_:n="Reinhard";break;case V_:n="Cineon";break;case W_:n="ACESFilmic";break;case q_:n="AgX";break;case Y_:n="Neutral";break;case X_:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Da=new N;function w3(){Jt.getLuminanceCoefficients(Da);const e=Da.x.toFixed(4),t=Da.y.toFixed(4),n=Da.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function R3(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Cs).join(`
`)}function C3(e){const t=[];for(const n in e){const i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function P3(e,t){const n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=e.getActiveAttrib(t,r),a=s.name;let o=1;s.type===e.FLOAT_MAT2&&(o=2),s.type===e.FLOAT_MAT3&&(o=3),s.type===e.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Cs(e){return e!==""}function Jf(e,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Qf(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const L3=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yl(e){return e.replace(L3,U3)}const D3=new Map;function U3(e,t){let n=Nt[t];if(n===void 0){const i=D3.get(t);if(i!==void 0)n=Nt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Yl(n)}const I3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function td(e){return e.replace(I3,N3)}function N3(e,t,n,i){let r="";for(let s=parseInt(t);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ed(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function F3(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===Mm?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===M_?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===gi&&(t="SHADOWMAP_TYPE_VSM"),t}function O3(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case rs:case ss:t="ENVMAP_TYPE_CUBE";break;case ko:t="ENVMAP_TYPE_CUBE_UV";break}return t}function B3(e){let t="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case ss:t="ENVMAP_MODE_REFRACTION";break}return t}function k3(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case Sm:t="ENVMAP_BLENDING_MULTIPLY";break;case k_:t="ENVMAP_BLENDING_MIX";break;case z_:t="ENVMAP_BLENDING_ADD";break}return t}function z3(e){const t=e.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function G3(e,t,n,i){const r=e.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const c=F3(n),l=O3(n),h=B3(n),f=k3(n),u=z3(n),m=R3(n),v=C3(s),S=r.createProgram();let d,p,T=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Cs).join(`
`),d.length>0&&(d+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Cs).join(`
`),p.length>0&&(p+=`
`)):(d=[ed(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cs).join(`
`),p=[ed(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+l:"",n.envMap?"#define "+h:"",n.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Hi?"#define TONE_MAPPING":"",n.toneMapping!==Hi?Nt.tonemapping_pars_fragment:"",n.toneMapping!==Hi?b3("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Nt.colorspace_pars_fragment,A3("linearToOutputTexel",n.outputColorSpace),w3(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Cs).join(`
`)),a=Yl(a),a=Jf(a,n),a=Qf(a,n),o=Yl(o),o=Jf(o,n),o=Qf(o,n),a=td(a),o=td(o),n.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,d=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,p=["#define varying in",n.glslVersion===vf?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===vf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=T+d+a,A=T+p+o,O=$f(r,r.VERTEX_SHADER,E),P=$f(r,r.FRAGMENT_SHADER,A);r.attachShader(S,O),r.attachShader(S,P),n.index0AttributeName!==void 0?r.bindAttribLocation(S,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function b(M){if(e.debug.checkShaderErrors){const H=r.getProgramInfoLog(S).trim(),k=r.getShaderInfoLog(O).trim(),q=r.getShaderInfoLog(P).trim();let K=!0,G=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(K=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(r,S,O,P);else{const j=Zf(r,O,"vertex"),z=Zf(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+M.name+`
Material Type: `+M.type+`

Program Info Log: `+H+`
`+j+`
`+z)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(k===""||q==="")&&(G=!1);G&&(M.diagnostics={runnable:K,programLog:H,vertexShader:{log:k,prefix:d},fragmentShader:{log:q,prefix:p}})}r.deleteShader(O),r.deleteShader(P),F=new $a(r,S),tt=P3(r,S)}let F;this.getUniforms=function(){return F===void 0&&b(this),F};let tt;this.getAttributes=function(){return tt===void 0&&b(this),tt};let g=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return g===!1&&(g=r.getProgramParameter(S,S3)),g},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=y3++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=O,this.fragmentShader=P,this}let H3=0;class V3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){const n=this.shaderCache;let i=n.get(t);return i===void 0&&(i=new W3(t),n.set(t,i)),i}}class W3{constructor(t){this.id=H3++,this.code=t,this.usedTimes=0}}function X3(e,t,n,i,r,s,a){const o=new Bm,c=new V3,l=new Set,h=[],f=r.logarithmicDepthBuffer,u=r.reverseDepthBuffer,m=r.vertexTextures;let v=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(g){return l.add(g),g===0?"uv":`uv${g}`}function p(g,M,H,k,q){const K=k.fog,G=q.geometry,j=g.isMeshStandardMaterial?k.environment:null,z=(g.isMeshStandardMaterial?n:t).get(g.envMap||j),ct=z&&z.mapping===ko?z.image.height:null,lt=S[g.type];g.precision!==null&&(v=r.getMaxPrecision(g.precision),v!==g.precision&&console.warn("THREE.WebGLProgram.getParameters:",g.precision,"not supported, using",v,"instead."));const xt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,jt=xt!==void 0?xt.length:0;let te=0;G.morphAttributes.position!==void 0&&(te=1),G.morphAttributes.normal!==void 0&&(te=2),G.morphAttributes.color!==void 0&&(te=3);let V,Z,gt,ht;if(lt){const Je=ni[lt];V=Je.vertexShader,Z=Je.fragmentShader}else V=g.vertexShader,Z=g.fragmentShader,c.update(g),gt=c.getVertexShaderID(g),ht=c.getFragmentShaderID(g);const Dt=e.getRenderTarget(),bt=q.isInstancedMesh===!0,Gt=q.isBatchedMesh===!0,ie=!!g.map,Ht=!!g.matcap,w=!!z,hn=!!g.aoMap,kt=!!g.lightMap,Xt=!!g.bumpMap,Rt=!!g.normalMap,ue=!!g.displacementMap,Lt=!!g.emissiveMap,y=!!g.metalnessMap,_=!!g.roughnessMap,D=g.anisotropy>0,X=g.clearcoat>0,$=g.dispersion>0,W=g.iridescence>0,St=g.sheen>0,nt=g.transmission>0,ut=D&&!!g.anisotropyMap,qt=X&&!!g.clearcoatMap,J=X&&!!g.clearcoatNormalMap,ft=X&&!!g.clearcoatRoughnessMap,Ct=W&&!!g.iridescenceMap,Pt=W&&!!g.iridescenceThicknessMap,dt=St&&!!g.sheenColorMap,zt=St&&!!g.sheenRoughnessMap,Ut=!!g.specularMap,ce=!!g.specularColorMap,R=!!g.specularIntensityMap,st=nt&&!!g.transmissionMap,B=nt&&!!g.thicknessMap,Y=!!g.gradientMap,it=!!g.alphaMap,at=g.alphaTest>0,Vt=!!g.alphaHash,Le=!!g.extensions;let Ze=Hi;g.toneMapped&&(Dt===null||Dt.isXRRenderTarget===!0)&&(Ze=e.toneMapping);const Kt={shaderID:lt,shaderType:g.type,shaderName:g.name,vertexShader:V,fragmentShader:Z,defines:g.defines,customVertexShaderID:gt,customFragmentShaderID:ht,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:v,batching:Gt,batchingColor:Gt&&q._colorsTexture!==null,instancing:bt,instancingColor:bt&&q.instanceColor!==null,instancingMorph:bt&&q.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:Dt===null?e.outputColorSpace:Dt.isXRRenderTarget===!0?Dt.texture.colorSpace:Zi,alphaToCoverage:!!g.alphaToCoverage,map:ie,matcap:Ht,envMap:w,envMapMode:w&&z.mapping,envMapCubeUVHeight:ct,aoMap:hn,lightMap:kt,bumpMap:Xt,normalMap:Rt,displacementMap:m&&ue,emissiveMap:Lt,normalMapObjectSpace:Rt&&g.normalMapType===J_,normalMapTangentSpace:Rt&&g.normalMapType===Z_,metalnessMap:y,roughnessMap:_,anisotropy:D,anisotropyMap:ut,clearcoat:X,clearcoatMap:qt,clearcoatNormalMap:J,clearcoatRoughnessMap:ft,dispersion:$,iridescence:W,iridescenceMap:Ct,iridescenceThicknessMap:Pt,sheen:St,sheenColorMap:dt,sheenRoughnessMap:zt,specularMap:Ut,specularColorMap:ce,specularIntensityMap:R,transmission:nt,transmissionMap:st,thicknessMap:B,gradientMap:Y,opaque:g.transparent===!1&&g.blending===Vr&&g.alphaToCoverage===!1,alphaMap:it,alphaTest:at,alphaHash:Vt,combine:g.combine,mapUv:ie&&d(g.map.channel),aoMapUv:hn&&d(g.aoMap.channel),lightMapUv:kt&&d(g.lightMap.channel),bumpMapUv:Xt&&d(g.bumpMap.channel),normalMapUv:Rt&&d(g.normalMap.channel),displacementMapUv:ue&&d(g.displacementMap.channel),emissiveMapUv:Lt&&d(g.emissiveMap.channel),metalnessMapUv:y&&d(g.metalnessMap.channel),roughnessMapUv:_&&d(g.roughnessMap.channel),anisotropyMapUv:ut&&d(g.anisotropyMap.channel),clearcoatMapUv:qt&&d(g.clearcoatMap.channel),clearcoatNormalMapUv:J&&d(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ft&&d(g.clearcoatRoughnessMap.channel),iridescenceMapUv:Ct&&d(g.iridescenceMap.channel),iridescenceThicknessMapUv:Pt&&d(g.iridescenceThicknessMap.channel),sheenColorMapUv:dt&&d(g.sheenColorMap.channel),sheenRoughnessMapUv:zt&&d(g.sheenRoughnessMap.channel),specularMapUv:Ut&&d(g.specularMap.channel),specularColorMapUv:ce&&d(g.specularColorMap.channel),specularIntensityMapUv:R&&d(g.specularIntensityMap.channel),transmissionMapUv:st&&d(g.transmissionMap.channel),thicknessMapUv:B&&d(g.thicknessMap.channel),alphaMapUv:it&&d(g.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Rt||D),vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!G.attributes.uv&&(ie||it),fog:!!K,useFog:g.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:g.flatShading===!0,sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:u,skinning:q.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:jt,morphTextureStride:te,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:g.dithering,shadowMapEnabled:e.shadowMap.enabled&&H.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ze,decodeVideoTexture:ie&&g.map.isVideoTexture===!0&&Jt.getTransfer(g.map.colorSpace)===de,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===vi,flipSided:g.side===rn,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:Le&&g.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&g.extensions.multiDraw===!0||Gt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Kt.vertexUv1s=l.has(1),Kt.vertexUv2s=l.has(2),Kt.vertexUv3s=l.has(3),l.clear(),Kt}function T(g){const M=[];if(g.shaderID?M.push(g.shaderID):(M.push(g.customVertexShaderID),M.push(g.customFragmentShaderID)),g.defines!==void 0)for(const H in g.defines)M.push(H),M.push(g.defines[H]);return g.isRawShaderMaterial===!1&&(E(M,g),A(M,g),M.push(e.outputColorSpace)),M.push(g.customProgramCacheKey),M.join()}function E(g,M){g.push(M.precision),g.push(M.outputColorSpace),g.push(M.envMapMode),g.push(M.envMapCubeUVHeight),g.push(M.mapUv),g.push(M.alphaMapUv),g.push(M.lightMapUv),g.push(M.aoMapUv),g.push(M.bumpMapUv),g.push(M.normalMapUv),g.push(M.displacementMapUv),g.push(M.emissiveMapUv),g.push(M.metalnessMapUv),g.push(M.roughnessMapUv),g.push(M.anisotropyMapUv),g.push(M.clearcoatMapUv),g.push(M.clearcoatNormalMapUv),g.push(M.clearcoatRoughnessMapUv),g.push(M.iridescenceMapUv),g.push(M.iridescenceThicknessMapUv),g.push(M.sheenColorMapUv),g.push(M.sheenRoughnessMapUv),g.push(M.specularMapUv),g.push(M.specularColorMapUv),g.push(M.specularIntensityMapUv),g.push(M.transmissionMapUv),g.push(M.thicknessMapUv),g.push(M.combine),g.push(M.fogExp2),g.push(M.sizeAttenuation),g.push(M.morphTargetsCount),g.push(M.morphAttributeCount),g.push(M.numDirLights),g.push(M.numPointLights),g.push(M.numSpotLights),g.push(M.numSpotLightMaps),g.push(M.numHemiLights),g.push(M.numRectAreaLights),g.push(M.numDirLightShadows),g.push(M.numPointLightShadows),g.push(M.numSpotLightShadows),g.push(M.numSpotLightShadowsWithMaps),g.push(M.numLightProbes),g.push(M.shadowMapType),g.push(M.toneMapping),g.push(M.numClippingPlanes),g.push(M.numClipIntersection),g.push(M.depthPacking)}function A(g,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),g.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.alphaToCoverage&&o.enable(20),g.push(o.mask)}function O(g){const M=S[g.type];let H;if(M){const k=ni[M];H=R1.clone(k.uniforms)}else H=g.uniforms;return H}function P(g,M){let H;for(let k=0,q=h.length;k<q;k++){const K=h[k];if(K.cacheKey===M){H=K,++H.usedTimes;break}}return H===void 0&&(H=new G3(e,M,g,s),h.push(H)),H}function b(g){if(--g.usedTimes===0){const M=h.indexOf(g);h[M]=h[h.length-1],h.pop(),g.destroy()}}function F(g){c.remove(g)}function tt(){c.dispose()}return{getParameters:p,getProgramCacheKey:T,getUniforms:O,acquireProgram:P,releaseProgram:b,releaseShaderCache:F,programs:h,dispose:tt}}function q3(){let e=new WeakMap;function t(a){return e.has(a)}function n(a){let o=e.get(a);return o===void 0&&(o={},e.set(a,o)),o}function i(a){e.delete(a)}function r(a,o,c){e.get(a)[o]=c}function s(){e=new WeakMap}return{has:t,get:n,remove:i,update:r,dispose:s}}function Y3(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function nd(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function id(){const e=[];let t=0;const n=[],i=[],r=[];function s(){t=0,n.length=0,i.length=0,r.length=0}function a(f,u,m,v,S,d){let p=e[t];return p===void 0?(p={id:f.id,object:f,geometry:u,material:m,groupOrder:v,renderOrder:f.renderOrder,z:S,group:d},e[t]=p):(p.id=f.id,p.object=f,p.geometry=u,p.material=m,p.groupOrder=v,p.renderOrder=f.renderOrder,p.z=S,p.group=d),t++,p}function o(f,u,m,v,S,d){const p=a(f,u,m,v,S,d);m.transmission>0?i.push(p):m.transparent===!0?r.push(p):n.push(p)}function c(f,u,m,v,S,d){const p=a(f,u,m,v,S,d);m.transmission>0?i.unshift(p):m.transparent===!0?r.unshift(p):n.unshift(p)}function l(f,u){n.length>1&&n.sort(f||Y3),i.length>1&&i.sort(u||nd),r.length>1&&r.sort(u||nd)}function h(){for(let f=t,u=e.length;f<u;f++){const m=e[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:c,finish:h,sort:l}}function j3(){let e=new WeakMap;function t(i,r){const s=e.get(i);let a;return s===void 0?(a=new id,e.set(i,[a])):r>=s.length?(a=new id,s.push(a)):a=s[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}function K3(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new N,color:new ne};break;case"SpotLight":n={position:new N,direction:new N,color:new ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new N,color:new ne,distance:0,decay:0};break;case"HemisphereLight":n={direction:new N,skyColor:new ne,groundColor:new ne};break;case"RectAreaLight":n={color:new ne,position:new N,halfWidth:new N,halfHeight:new N};break}return e[t.id]=n,n}}}function $3(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}let Z3=0;function J3(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function Q3(e){const t=new K3,n=$3(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new N);const r=new N,s=new Re,a=new Re;function o(l){let h=0,f=0,u=0;for(let tt=0;tt<9;tt++)i.probe[tt].set(0,0,0);let m=0,v=0,S=0,d=0,p=0,T=0,E=0,A=0,O=0,P=0,b=0;l.sort(J3);for(let tt=0,g=l.length;tt<g;tt++){const M=l[tt],H=M.color,k=M.intensity,q=M.distance,K=M.shadow&&M.shadow.map?M.shadow.map.texture:null;if(M.isAmbientLight)h+=H.r*k,f+=H.g*k,u+=H.b*k;else if(M.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(M.sh.coefficients[G],k);b++}else if(M.isDirectionalLight){const G=t.get(M);if(G.color.copy(M.color).multiplyScalar(M.intensity),M.castShadow){const j=M.shadow,z=n.get(M);z.shadowIntensity=j.intensity,z.shadowBias=j.bias,z.shadowNormalBias=j.normalBias,z.shadowRadius=j.radius,z.shadowMapSize=j.mapSize,i.directionalShadow[m]=z,i.directionalShadowMap[m]=K,i.directionalShadowMatrix[m]=M.shadow.matrix,T++}i.directional[m]=G,m++}else if(M.isSpotLight){const G=t.get(M);G.position.setFromMatrixPosition(M.matrixWorld),G.color.copy(H).multiplyScalar(k),G.distance=q,G.coneCos=Math.cos(M.angle),G.penumbraCos=Math.cos(M.angle*(1-M.penumbra)),G.decay=M.decay,i.spot[S]=G;const j=M.shadow;if(M.map&&(i.spotLightMap[O]=M.map,O++,j.updateMatrices(M),M.castShadow&&P++),i.spotLightMatrix[S]=j.matrix,M.castShadow){const z=n.get(M);z.shadowIntensity=j.intensity,z.shadowBias=j.bias,z.shadowNormalBias=j.normalBias,z.shadowRadius=j.radius,z.shadowMapSize=j.mapSize,i.spotShadow[S]=z,i.spotShadowMap[S]=K,A++}S++}else if(M.isRectAreaLight){const G=t.get(M);G.color.copy(H).multiplyScalar(k),G.halfWidth.set(M.width*.5,0,0),G.halfHeight.set(0,M.height*.5,0),i.rectArea[d]=G,d++}else if(M.isPointLight){const G=t.get(M);if(G.color.copy(M.color).multiplyScalar(M.intensity),G.distance=M.distance,G.decay=M.decay,M.castShadow){const j=M.shadow,z=n.get(M);z.shadowIntensity=j.intensity,z.shadowBias=j.bias,z.shadowNormalBias=j.normalBias,z.shadowRadius=j.radius,z.shadowMapSize=j.mapSize,z.shadowCameraNear=j.camera.near,z.shadowCameraFar=j.camera.far,i.pointShadow[v]=z,i.pointShadowMap[v]=K,i.pointShadowMatrix[v]=M.shadow.matrix,E++}i.point[v]=G,v++}else if(M.isHemisphereLight){const G=t.get(M);G.skyColor.copy(M.color).multiplyScalar(k),G.groundColor.copy(M.groundColor).multiplyScalar(k),i.hemi[p]=G,p++}}d>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=et.LTC_FLOAT_1,i.rectAreaLTC2=et.LTC_FLOAT_2):(i.rectAreaLTC1=et.LTC_HALF_1,i.rectAreaLTC2=et.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=u;const F=i.hash;(F.directionalLength!==m||F.pointLength!==v||F.spotLength!==S||F.rectAreaLength!==d||F.hemiLength!==p||F.numDirectionalShadows!==T||F.numPointShadows!==E||F.numSpotShadows!==A||F.numSpotMaps!==O||F.numLightProbes!==b)&&(i.directional.length=m,i.spot.length=S,i.rectArea.length=d,i.point.length=v,i.hemi.length=p,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=A+O-P,i.spotLightMap.length=O,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=b,F.directionalLength=m,F.pointLength=v,F.spotLength=S,F.rectAreaLength=d,F.hemiLength=p,F.numDirectionalShadows=T,F.numPointShadows=E,F.numSpotShadows=A,F.numSpotMaps=O,F.numLightProbes=b,i.version=Z3++)}function c(l,h){let f=0,u=0,m=0,v=0,S=0;const d=h.matrixWorldInverse;for(let p=0,T=l.length;p<T;p++){const E=l[p];if(E.isDirectionalLight){const A=i.directional[f];A.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(d),f++}else if(E.isSpotLight){const A=i.spot[m];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(d),A.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(d),m++}else if(E.isRectAreaLight){const A=i.rectArea[v];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(d),a.identity(),s.copy(E.matrixWorld),s.premultiply(d),a.extractRotation(s),A.halfWidth.set(E.width*.5,0,0),A.halfHeight.set(0,E.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),v++}else if(E.isPointLight){const A=i.point[u];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(d),u++}else if(E.isHemisphereLight){const A=i.hemi[S];A.direction.setFromMatrixPosition(E.matrixWorld),A.direction.transformDirection(d),S++}}}return{setup:o,setupView:c,state:i}}function rd(e){const t=new Q3(e),n=[],i=[];function r(h){l.camera=h,n.length=0,i.length=0}function s(h){n.push(h)}function a(h){i.push(h)}function o(){t.setup(n)}function c(h){t.setupView(n,h)}const l={lightsArray:n,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function tM(e){let t=new WeakMap;function n(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new rd(e),t.set(r,[o])):s>=a.length?(o=new rd(e),a.push(o)):o=a[s],o}function i(){t=new WeakMap}return{get:n,dispose:i}}class eM extends ea{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=K_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class nM extends ea{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const iM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function sM(e,t,n){let i=new qm;const r=new oe,s=new oe,a=new we,o=new eM({depthPacking:$_}),c=new nM,l={},h=n.maxTextureSize,f={[ji]:rn,[rn]:ji,[vi]:vi},u=new Ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:iM,fragmentShader:rM}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const v=new Ci;v.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Si(v,u),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mm;let p=this.type;this.render=function(P,b,F){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||P.length===0)return;const tt=e.getRenderTarget(),g=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),H=e.state;H.setBlending(Gi),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const k=p!==gi&&this.type===gi,q=p===gi&&this.type!==gi;for(let K=0,G=P.length;K<G;K++){const j=P[K],z=j.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const ct=z.getFrameExtents();if(r.multiply(ct),s.copy(z.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/ct.x),r.x=s.x*ct.x,z.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/ct.y),r.y=s.y*ct.y,z.mapSize.y=s.y)),z.map===null||k===!0||q===!0){const xt=this.type!==gi?{minFilter:Dn,magFilter:Dn}:{};z.map!==null&&z.map.dispose(),z.map=new yr(r.x,r.y,xt),z.map.texture.name=j.name+".shadowMap",z.camera.updateProjectionMatrix()}e.setRenderTarget(z.map),e.clear();const lt=z.getViewportCount();for(let xt=0;xt<lt;xt++){const jt=z.getViewport(xt);a.set(s.x*jt.x,s.y*jt.y,s.x*jt.z,s.y*jt.w),H.viewport(a),z.updateMatrices(j,xt),i=z.getFrustum(),A(b,F,z.camera,j,this.type)}z.isPointLightShadow!==!0&&this.type===gi&&T(z,F),z.needsUpdate=!1}p=this.type,d.needsUpdate=!1,e.setRenderTarget(tt,g,M)};function T(P,b){const F=t.update(S);u.defines.VSM_SAMPLES!==P.blurSamples&&(u.defines.VSM_SAMPLES=P.blurSamples,m.defines.VSM_SAMPLES=P.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new yr(r.x,r.y)),u.uniforms.shadow_pass.value=P.map.texture,u.uniforms.resolution.value=P.mapSize,u.uniforms.radius.value=P.radius,e.setRenderTarget(P.mapPass),e.clear(),e.renderBufferDirect(b,null,F,u,S,null),m.uniforms.shadow_pass.value=P.mapPass.texture,m.uniforms.resolution.value=P.mapSize,m.uniforms.radius.value=P.radius,e.setRenderTarget(P.map),e.clear(),e.renderBufferDirect(b,null,F,m,S,null)}function E(P,b,F,tt){let g=null;const M=F.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(M!==void 0)g=M;else if(g=F.isPointLight===!0?c:o,e.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const H=g.uuid,k=b.uuid;let q=l[H];q===void 0&&(q={},l[H]=q);let K=q[k];K===void 0&&(K=g.clone(),q[k]=K,b.addEventListener("dispose",O)),g=K}if(g.visible=b.visible,g.wireframe=b.wireframe,tt===gi?g.side=b.shadowSide!==null?b.shadowSide:b.side:g.side=b.shadowSide!==null?b.shadowSide:f[b.side],g.alphaMap=b.alphaMap,g.alphaTest=b.alphaTest,g.map=b.map,g.clipShadows=b.clipShadows,g.clippingPlanes=b.clippingPlanes,g.clipIntersection=b.clipIntersection,g.displacementMap=b.displacementMap,g.displacementScale=b.displacementScale,g.displacementBias=b.displacementBias,g.wireframeLinewidth=b.wireframeLinewidth,g.linewidth=b.linewidth,F.isPointLight===!0&&g.isMeshDistanceMaterial===!0){const H=e.properties.get(g);H.light=F}return g}function A(P,b,F,tt,g){if(P.visible===!1)return;if(P.layers.test(b.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&g===gi)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,P.matrixWorld);const k=t.update(P),q=P.material;if(Array.isArray(q)){const K=k.groups;for(let G=0,j=K.length;G<j;G++){const z=K[G],ct=q[z.materialIndex];if(ct&&ct.visible){const lt=E(P,ct,tt,g);P.onBeforeShadow(e,P,b,F,k,lt,z),e.renderBufferDirect(F,null,k,lt,P,z),P.onAfterShadow(e,P,b,F,k,lt,z)}}}else if(q.visible){const K=E(P,q,tt,g);P.onBeforeShadow(e,P,b,F,k,K,null),e.renderBufferDirect(F,null,k,K,P,null),P.onAfterShadow(e,P,b,F,k,K,null)}}const H=P.children;for(let k=0,q=H.length;k<q;k++)A(H[k],b,F,tt,g)}function O(P){P.target.removeEventListener("dispose",O);for(const F in l){const tt=l[F],g=P.target.uuid;g in tt&&(tt[g].dispose(),delete tt[g])}}}const aM={[ll]:hl,[ul]:pl,[fl]:ml,[is]:dl,[hl]:ll,[pl]:ul,[ml]:fl,[dl]:is};function oM(e){function t(){let R=!1;const st=new we;let B=null;const Y=new we(0,0,0,0);return{setMask:function(it){B!==it&&!R&&(e.colorMask(it,it,it,it),B=it)},setLocked:function(it){R=it},setClear:function(it,at,Vt,Le,Ze){Ze===!0&&(it*=Le,at*=Le,Vt*=Le),st.set(it,at,Vt,Le),Y.equals(st)===!1&&(e.clearColor(it,at,Vt,Le),Y.copy(st))},reset:function(){R=!1,B=null,Y.set(-1,0,0,0)}}}function n(){let R=!1,st=!1,B=null,Y=null,it=null;return{setReversed:function(at){st=at},setTest:function(at){at?gt(e.DEPTH_TEST):ht(e.DEPTH_TEST)},setMask:function(at){B!==at&&!R&&(e.depthMask(at),B=at)},setFunc:function(at){if(st&&(at=aM[at]),Y!==at){switch(at){case ll:e.depthFunc(e.NEVER);break;case hl:e.depthFunc(e.ALWAYS);break;case ul:e.depthFunc(e.LESS);break;case is:e.depthFunc(e.LEQUAL);break;case fl:e.depthFunc(e.EQUAL);break;case dl:e.depthFunc(e.GEQUAL);break;case pl:e.depthFunc(e.GREATER);break;case ml:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}Y=at}},setLocked:function(at){R=at},setClear:function(at){it!==at&&(e.clearDepth(at),it=at)},reset:function(){R=!1,B=null,Y=null,it=null}}}function i(){let R=!1,st=null,B=null,Y=null,it=null,at=null,Vt=null,Le=null,Ze=null;return{setTest:function(Kt){R||(Kt?gt(e.STENCIL_TEST):ht(e.STENCIL_TEST))},setMask:function(Kt){st!==Kt&&!R&&(e.stencilMask(Kt),st=Kt)},setFunc:function(Kt,Je,hi){(B!==Kt||Y!==Je||it!==hi)&&(e.stencilFunc(Kt,Je,hi),B=Kt,Y=Je,it=hi)},setOp:function(Kt,Je,hi){(at!==Kt||Vt!==Je||Le!==hi)&&(e.stencilOp(Kt,Je,hi),at=Kt,Vt=Je,Le=hi)},setLocked:function(Kt){R=Kt},setClear:function(Kt){Ze!==Kt&&(e.clearStencil(Kt),Ze=Kt)},reset:function(){R=!1,st=null,B=null,Y=null,it=null,at=null,Vt=null,Le=null,Ze=null}}}const r=new t,s=new n,a=new i,o=new WeakMap,c=new WeakMap;let l={},h={},f=new WeakMap,u=[],m=null,v=!1,S=null,d=null,p=null,T=null,E=null,A=null,O=null,P=new ne(0,0,0),b=0,F=!1,tt=null,g=null,M=null,H=null,k=null;const q=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,G=0;const j=e.getParameter(e.VERSION);j.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(j)[1]),K=G>=1):j.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),K=G>=2);let z=null,ct={};const lt=e.getParameter(e.SCISSOR_BOX),xt=e.getParameter(e.VIEWPORT),jt=new we().fromArray(lt),te=new we().fromArray(xt);function V(R,st,B,Y){const it=new Uint8Array(4),at=e.createTexture();e.bindTexture(R,at),e.texParameteri(R,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(R,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Vt=0;Vt<B;Vt++)R===e.TEXTURE_3D||R===e.TEXTURE_2D_ARRAY?e.texImage3D(st,0,e.RGBA,1,1,Y,0,e.RGBA,e.UNSIGNED_BYTE,it):e.texImage2D(st+Vt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,it);return at}const Z={};Z[e.TEXTURE_2D]=V(e.TEXTURE_2D,e.TEXTURE_2D,1),Z[e.TEXTURE_CUBE_MAP]=V(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[e.TEXTURE_2D_ARRAY]=V(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),Z[e.TEXTURE_3D]=V(e.TEXTURE_3D,e.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),gt(e.DEPTH_TEST),s.setFunc(is),kt(!1),Xt(df),gt(e.CULL_FACE),w(Gi);function gt(R){l[R]!==!0&&(e.enable(R),l[R]=!0)}function ht(R){l[R]!==!1&&(e.disable(R),l[R]=!1)}function Dt(R,st){return h[R]!==st?(e.bindFramebuffer(R,st),h[R]=st,R===e.DRAW_FRAMEBUFFER&&(h[e.FRAMEBUFFER]=st),R===e.FRAMEBUFFER&&(h[e.DRAW_FRAMEBUFFER]=st),!0):!1}function bt(R,st){let B=u,Y=!1;if(R){B=f.get(st),B===void 0&&(B=[],f.set(st,B));const it=R.textures;if(B.length!==it.length||B[0]!==e.COLOR_ATTACHMENT0){for(let at=0,Vt=it.length;at<Vt;at++)B[at]=e.COLOR_ATTACHMENT0+at;B.length=it.length,Y=!0}}else B[0]!==e.BACK&&(B[0]=e.BACK,Y=!0);Y&&e.drawBuffers(B)}function Gt(R){return m!==R?(e.useProgram(R),m=R,!0):!1}const ie={[lr]:e.FUNC_ADD,[y_]:e.FUNC_SUBTRACT,[E_]:e.FUNC_REVERSE_SUBTRACT};ie[T_]=e.MIN,ie[A_]=e.MAX;const Ht={[b_]:e.ZERO,[w_]:e.ONE,[R_]:e.SRC_COLOR,[ol]:e.SRC_ALPHA,[I_]:e.SRC_ALPHA_SATURATE,[D_]:e.DST_COLOR,[P_]:e.DST_ALPHA,[C_]:e.ONE_MINUS_SRC_COLOR,[cl]:e.ONE_MINUS_SRC_ALPHA,[U_]:e.ONE_MINUS_DST_COLOR,[L_]:e.ONE_MINUS_DST_ALPHA,[N_]:e.CONSTANT_COLOR,[F_]:e.ONE_MINUS_CONSTANT_COLOR,[O_]:e.CONSTANT_ALPHA,[B_]:e.ONE_MINUS_CONSTANT_ALPHA};function w(R,st,B,Y,it,at,Vt,Le,Ze,Kt){if(R===Gi){v===!0&&(ht(e.BLEND),v=!1);return}if(v===!1&&(gt(e.BLEND),v=!0),R!==S_){if(R!==S||Kt!==F){if((d!==lr||E!==lr)&&(e.blendEquation(e.FUNC_ADD),d=lr,E=lr),Kt)switch(R){case Vr:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case al:e.blendFunc(e.ONE,e.ONE);break;case pf:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case mf:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case Vr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case al:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case pf:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case mf:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}p=null,T=null,A=null,O=null,P.set(0,0,0),b=0,S=R,F=Kt}return}it=it||st,at=at||B,Vt=Vt||Y,(st!==d||it!==E)&&(e.blendEquationSeparate(ie[st],ie[it]),d=st,E=it),(B!==p||Y!==T||at!==A||Vt!==O)&&(e.blendFuncSeparate(Ht[B],Ht[Y],Ht[at],Ht[Vt]),p=B,T=Y,A=at,O=Vt),(Le.equals(P)===!1||Ze!==b)&&(e.blendColor(Le.r,Le.g,Le.b,Ze),P.copy(Le),b=Ze),S=R,F=!1}function hn(R,st){R.side===vi?ht(e.CULL_FACE):gt(e.CULL_FACE);let B=R.side===rn;st&&(B=!B),kt(B),R.blending===Vr&&R.transparent===!1?w(Gi):w(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),s.setFunc(R.depthFunc),s.setTest(R.depthTest),s.setMask(R.depthWrite),r.setMask(R.colorWrite);const Y=R.stencilWrite;a.setTest(Y),Y&&(a.setMask(R.stencilWriteMask),a.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),a.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),ue(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?gt(e.SAMPLE_ALPHA_TO_COVERAGE):ht(e.SAMPLE_ALPHA_TO_COVERAGE)}function kt(R){tt!==R&&(R?e.frontFace(e.CW):e.frontFace(e.CCW),tt=R)}function Xt(R){R!==v_?(gt(e.CULL_FACE),R!==g&&(R===df?e.cullFace(e.BACK):R===x_?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):ht(e.CULL_FACE),g=R}function Rt(R){R!==M&&(K&&e.lineWidth(R),M=R)}function ue(R,st,B){R?(gt(e.POLYGON_OFFSET_FILL),(H!==st||k!==B)&&(e.polygonOffset(st,B),H=st,k=B)):ht(e.POLYGON_OFFSET_FILL)}function Lt(R){R?gt(e.SCISSOR_TEST):ht(e.SCISSOR_TEST)}function y(R){R===void 0&&(R=e.TEXTURE0+q-1),z!==R&&(e.activeTexture(R),z=R)}function _(R,st,B){B===void 0&&(z===null?B=e.TEXTURE0+q-1:B=z);let Y=ct[B];Y===void 0&&(Y={type:void 0,texture:void 0},ct[B]=Y),(Y.type!==R||Y.texture!==st)&&(z!==B&&(e.activeTexture(B),z=B),e.bindTexture(R,st||Z[R]),Y.type=R,Y.texture=st)}function D(){const R=ct[z];R!==void 0&&R.type!==void 0&&(e.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function X(){try{e.compressedTexImage2D.apply(e,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function $(){try{e.compressedTexImage3D.apply(e,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function W(){try{e.texSubImage2D.apply(e,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function St(){try{e.texSubImage3D.apply(e,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function nt(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ut(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function qt(){try{e.texStorage2D.apply(e,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function J(){try{e.texStorage3D.apply(e,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ft(){try{e.texImage2D.apply(e,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ct(){try{e.texImage3D.apply(e,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Pt(R){jt.equals(R)===!1&&(e.scissor(R.x,R.y,R.z,R.w),jt.copy(R))}function dt(R){te.equals(R)===!1&&(e.viewport(R.x,R.y,R.z,R.w),te.copy(R))}function zt(R,st){let B=c.get(st);B===void 0&&(B=new WeakMap,c.set(st,B));let Y=B.get(R);Y===void 0&&(Y=e.getUniformBlockIndex(st,R.name),B.set(R,Y))}function Ut(R,st){const Y=c.get(st).get(R);o.get(st)!==Y&&(e.uniformBlockBinding(st,Y,R.__bindingPointIndex),o.set(st,Y))}function ce(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),l={},z=null,ct={},h={},f=new WeakMap,u=[],m=null,v=!1,S=null,d=null,p=null,T=null,E=null,A=null,O=null,P=new ne(0,0,0),b=0,F=!1,tt=null,g=null,M=null,H=null,k=null,jt.set(0,0,e.canvas.width,e.canvas.height),te.set(0,0,e.canvas.width,e.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:gt,disable:ht,bindFramebuffer:Dt,drawBuffers:bt,useProgram:Gt,setBlending:w,setMaterial:hn,setFlipSided:kt,setCullFace:Xt,setLineWidth:Rt,setPolygonOffset:ue,setScissorTest:Lt,activeTexture:y,bindTexture:_,unbindTexture:D,compressedTexImage2D:X,compressedTexImage3D:$,texImage2D:ft,texImage3D:Ct,updateUBOMapping:zt,uniformBlockBinding:Ut,texStorage2D:qt,texStorage3D:J,texSubImage2D:W,texSubImage3D:St,compressedTexSubImage2D:nt,compressedTexSubImage3D:ut,scissor:Pt,viewport:dt,reset:ce}}function sd(e,t,n,i){const r=cM(i);switch(n){case bm:return e*t;case Rm:return e*t;case Cm:return e*t*2;case Pm:return e*t/r.components*r.byteLength;case tu:return e*t/r.components*r.byteLength;case Lm:return e*t*2/r.components*r.byteLength;case eu:return e*t*2/r.components*r.byteLength;case wm:return e*t*3/r.components*r.byteLength;case Xn:return e*t*4/r.components*r.byteLength;case nu:return e*t*4/r.components*r.byteLength;case Wa:case Xa:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case qa:case Ya:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Sl:case El:return Math.max(e,16)*Math.max(t,8)/4;case Ml:case yl:return Math.max(e,8)*Math.max(t,8)/2;case Tl:case Al:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case bl:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case wl:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Rl:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Cl:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Pl:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Ll:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Dl:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Ul:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Il:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Nl:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Fl:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Ol:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Bl:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case kl:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case zl:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case ja:case Gl:case Hl:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Dm:case Vl:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Wl:case Xl:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function cM(e){switch(e){case bi:case Em:return{byteLength:1,components:1};case Gs:case Tm:case Zs:return{byteLength:2,components:1};case Jh:case Qh:return{byteLength:2,components:4};case Sr:case Zh:case xi:return{byteLength:4,components:1};case Am:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}function lM(e,t,n,i,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new oe,h=new WeakMap;let f;const u=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(y,_){return m?new OffscreenCanvas(y,_):po("canvas")}function S(y,_,D){let X=1;const $=Lt(y);if(($.width>D||$.height>D)&&(X=D/Math.max($.width,$.height)),X<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const W=Math.floor(X*$.width),St=Math.floor(X*$.height);f===void 0&&(f=v(W,St));const nt=_?v(W,St):f;return nt.width=W,nt.height=St,nt.getContext("2d").drawImage(y,0,0,W,St),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+W+"x"+St+")."),nt}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),y;return y}function d(y){return y.generateMipmaps&&y.minFilter!==Dn&&y.minFilter!==Vn}function p(y){e.generateMipmap(y)}function T(y,_,D,X,$=!1){if(y!==null){if(e[y]!==void 0)return e[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let W=_;if(_===e.RED&&(D===e.FLOAT&&(W=e.R32F),D===e.HALF_FLOAT&&(W=e.R16F),D===e.UNSIGNED_BYTE&&(W=e.R8)),_===e.RED_INTEGER&&(D===e.UNSIGNED_BYTE&&(W=e.R8UI),D===e.UNSIGNED_SHORT&&(W=e.R16UI),D===e.UNSIGNED_INT&&(W=e.R32UI),D===e.BYTE&&(W=e.R8I),D===e.SHORT&&(W=e.R16I),D===e.INT&&(W=e.R32I)),_===e.RG&&(D===e.FLOAT&&(W=e.RG32F),D===e.HALF_FLOAT&&(W=e.RG16F),D===e.UNSIGNED_BYTE&&(W=e.RG8)),_===e.RG_INTEGER&&(D===e.UNSIGNED_BYTE&&(W=e.RG8UI),D===e.UNSIGNED_SHORT&&(W=e.RG16UI),D===e.UNSIGNED_INT&&(W=e.RG32UI),D===e.BYTE&&(W=e.RG8I),D===e.SHORT&&(W=e.RG16I),D===e.INT&&(W=e.RG32I)),_===e.RGB_INTEGER&&(D===e.UNSIGNED_BYTE&&(W=e.RGB8UI),D===e.UNSIGNED_SHORT&&(W=e.RGB16UI),D===e.UNSIGNED_INT&&(W=e.RGB32UI),D===e.BYTE&&(W=e.RGB8I),D===e.SHORT&&(W=e.RGB16I),D===e.INT&&(W=e.RGB32I)),_===e.RGBA_INTEGER&&(D===e.UNSIGNED_BYTE&&(W=e.RGBA8UI),D===e.UNSIGNED_SHORT&&(W=e.RGBA16UI),D===e.UNSIGNED_INT&&(W=e.RGBA32UI),D===e.BYTE&&(W=e.RGBA8I),D===e.SHORT&&(W=e.RGBA16I),D===e.INT&&(W=e.RGBA32I)),_===e.RGB&&D===e.UNSIGNED_INT_5_9_9_9_REV&&(W=e.RGB9_E5),_===e.RGBA){const St=$?lo:Jt.getTransfer(X);D===e.FLOAT&&(W=e.RGBA32F),D===e.HALF_FLOAT&&(W=e.RGBA16F),D===e.UNSIGNED_BYTE&&(W=St===de?e.SRGB8_ALPHA8:e.RGBA8),D===e.UNSIGNED_SHORT_4_4_4_4&&(W=e.RGBA4),D===e.UNSIGNED_SHORT_5_5_5_1&&(W=e.RGB5_A1)}return(W===e.R16F||W===e.R32F||W===e.RG16F||W===e.RG32F||W===e.RGBA16F||W===e.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function E(y,_){let D;return y?_===null||_===Sr||_===as?D=e.DEPTH24_STENCIL8:_===xi?D=e.DEPTH32F_STENCIL8:_===Gs&&(D=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Sr||_===as?D=e.DEPTH_COMPONENT24:_===xi?D=e.DEPTH_COMPONENT32F:_===Gs&&(D=e.DEPTH_COMPONENT16),D}function A(y,_){return d(y)===!0||y.isFramebufferTexture&&y.minFilter!==Dn&&y.minFilter!==Vn?Math.log2(Math.max(_.width,_.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?_.mipmaps.length:1}function O(y){const _=y.target;_.removeEventListener("dispose",O),b(_),_.isVideoTexture&&h.delete(_)}function P(y){const _=y.target;_.removeEventListener("dispose",P),tt(_)}function b(y){const _=i.get(y);if(_.__webglInit===void 0)return;const D=y.source,X=u.get(D);if(X){const $=X[_.__cacheKey];$.usedTimes--,$.usedTimes===0&&F(y),Object.keys(X).length===0&&u.delete(D)}i.remove(y)}function F(y){const _=i.get(y);e.deleteTexture(_.__webglTexture);const D=y.source,X=u.get(D);delete X[_.__cacheKey],a.memory.textures--}function tt(y){const _=i.get(y);if(y.depthTexture&&y.depthTexture.dispose(),y.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(_.__webglFramebuffer[X]))for(let $=0;$<_.__webglFramebuffer[X].length;$++)e.deleteFramebuffer(_.__webglFramebuffer[X][$]);else e.deleteFramebuffer(_.__webglFramebuffer[X]);_.__webglDepthbuffer&&e.deleteRenderbuffer(_.__webglDepthbuffer[X])}else{if(Array.isArray(_.__webglFramebuffer))for(let X=0;X<_.__webglFramebuffer.length;X++)e.deleteFramebuffer(_.__webglFramebuffer[X]);else e.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&e.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&e.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let X=0;X<_.__webglColorRenderbuffer.length;X++)_.__webglColorRenderbuffer[X]&&e.deleteRenderbuffer(_.__webglColorRenderbuffer[X]);_.__webglDepthRenderbuffer&&e.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const D=y.textures;for(let X=0,$=D.length;X<$;X++){const W=i.get(D[X]);W.__webglTexture&&(e.deleteTexture(W.__webglTexture),a.memory.textures--),i.remove(D[X])}i.remove(y)}let g=0;function M(){g=0}function H(){const y=g;return y>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+r.maxTextures),g+=1,y}function k(y){const _=[];return _.push(y.wrapS),_.push(y.wrapT),_.push(y.wrapR||0),_.push(y.magFilter),_.push(y.minFilter),_.push(y.anisotropy),_.push(y.internalFormat),_.push(y.format),_.push(y.type),_.push(y.generateMipmaps),_.push(y.premultiplyAlpha),_.push(y.flipY),_.push(y.unpackAlignment),_.push(y.colorSpace),_.join()}function q(y,_){const D=i.get(y);if(y.isVideoTexture&&Rt(y),y.isRenderTargetTexture===!1&&y.version>0&&D.__version!==y.version){const X=y.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(D,y,_);return}}n.bindTexture(e.TEXTURE_2D,D.__webglTexture,e.TEXTURE0+_)}function K(y,_){const D=i.get(y);if(y.version>0&&D.__version!==y.version){te(D,y,_);return}n.bindTexture(e.TEXTURE_2D_ARRAY,D.__webglTexture,e.TEXTURE0+_)}function G(y,_){const D=i.get(y);if(y.version>0&&D.__version!==y.version){te(D,y,_);return}n.bindTexture(e.TEXTURE_3D,D.__webglTexture,e.TEXTURE0+_)}function j(y,_){const D=i.get(y);if(y.version>0&&D.__version!==y.version){V(D,y,_);return}n.bindTexture(e.TEXTURE_CUBE_MAP,D.__webglTexture,e.TEXTURE0+_)}const z={[vl]:e.REPEAT,[fr]:e.CLAMP_TO_EDGE,[xl]:e.MIRRORED_REPEAT},ct={[Dn]:e.NEAREST,[j_]:e.NEAREST_MIPMAP_NEAREST,[ua]:e.NEAREST_MIPMAP_LINEAR,[Vn]:e.LINEAR,[sc]:e.LINEAR_MIPMAP_NEAREST,[dr]:e.LINEAR_MIPMAP_LINEAR},lt={[Q_]:e.NEVER,[s1]:e.ALWAYS,[t1]:e.LESS,[Um]:e.LEQUAL,[e1]:e.EQUAL,[r1]:e.GEQUAL,[n1]:e.GREATER,[i1]:e.NOTEQUAL};function xt(y,_){if(_.type===xi&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Vn||_.magFilter===sc||_.magFilter===ua||_.magFilter===dr||_.minFilter===Vn||_.minFilter===sc||_.minFilter===ua||_.minFilter===dr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(y,e.TEXTURE_WRAP_S,z[_.wrapS]),e.texParameteri(y,e.TEXTURE_WRAP_T,z[_.wrapT]),(y===e.TEXTURE_3D||y===e.TEXTURE_2D_ARRAY)&&e.texParameteri(y,e.TEXTURE_WRAP_R,z[_.wrapR]),e.texParameteri(y,e.TEXTURE_MAG_FILTER,ct[_.magFilter]),e.texParameteri(y,e.TEXTURE_MIN_FILTER,ct[_.minFilter]),_.compareFunction&&(e.texParameteri(y,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(y,e.TEXTURE_COMPARE_FUNC,lt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Dn||_.minFilter!==ua&&_.minFilter!==dr||_.type===xi&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const D=t.get("EXT_texture_filter_anisotropic");e.texParameterf(y,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function jt(y,_){let D=!1;y.__webglInit===void 0&&(y.__webglInit=!0,_.addEventListener("dispose",O));const X=_.source;let $=u.get(X);$===void 0&&($={},u.set(X,$));const W=k(_);if(W!==y.__cacheKey){$[W]===void 0&&($[W]={texture:e.createTexture(),usedTimes:0},a.memory.textures++,D=!0),$[W].usedTimes++;const St=$[y.__cacheKey];St!==void 0&&($[y.__cacheKey].usedTimes--,St.usedTimes===0&&F(_)),y.__cacheKey=W,y.__webglTexture=$[W].texture}return D}function te(y,_,D){let X=e.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(X=e.TEXTURE_2D_ARRAY),_.isData3DTexture&&(X=e.TEXTURE_3D);const $=jt(y,_),W=_.source;n.bindTexture(X,y.__webglTexture,e.TEXTURE0+D);const St=i.get(W);if(W.version!==St.__version||$===!0){n.activeTexture(e.TEXTURE0+D);const nt=Jt.getPrimaries(Jt.workingColorSpace),ut=_.colorSpace===ki?null:Jt.getPrimaries(_.colorSpace),qt=_.colorSpace===ki||nt===ut?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let J=S(_.image,!1,r.maxTextureSize);J=ue(_,J);const ft=s.convert(_.format,_.colorSpace),Ct=s.convert(_.type);let Pt=T(_.internalFormat,ft,Ct,_.colorSpace,_.isVideoTexture);xt(X,_);let dt;const zt=_.mipmaps,Ut=_.isVideoTexture!==!0,ce=St.__version===void 0||$===!0,R=W.dataReady,st=A(_,J);if(_.isDepthTexture)Pt=E(_.format===os,_.type),ce&&(Ut?n.texStorage2D(e.TEXTURE_2D,1,Pt,J.width,J.height):n.texImage2D(e.TEXTURE_2D,0,Pt,J.width,J.height,0,ft,Ct,null));else if(_.isDataTexture)if(zt.length>0){Ut&&ce&&n.texStorage2D(e.TEXTURE_2D,st,Pt,zt[0].width,zt[0].height);for(let B=0,Y=zt.length;B<Y;B++)dt=zt[B],Ut?R&&n.texSubImage2D(e.TEXTURE_2D,B,0,0,dt.width,dt.height,ft,Ct,dt.data):n.texImage2D(e.TEXTURE_2D,B,Pt,dt.width,dt.height,0,ft,Ct,dt.data);_.generateMipmaps=!1}else Ut?(ce&&n.texStorage2D(e.TEXTURE_2D,st,Pt,J.width,J.height),R&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,J.width,J.height,ft,Ct,J.data)):n.texImage2D(e.TEXTURE_2D,0,Pt,J.width,J.height,0,ft,Ct,J.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ut&&ce&&n.texStorage3D(e.TEXTURE_2D_ARRAY,st,Pt,zt[0].width,zt[0].height,J.depth);for(let B=0,Y=zt.length;B<Y;B++)if(dt=zt[B],_.format!==Xn)if(ft!==null)if(Ut){if(R)if(_.layerUpdates.size>0){const it=sd(dt.width,dt.height,_.format,_.type);for(const at of _.layerUpdates){const Vt=dt.data.subarray(at*it/dt.data.BYTES_PER_ELEMENT,(at+1)*it/dt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,B,0,0,at,dt.width,dt.height,1,ft,Vt,0,0)}_.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,B,0,0,0,dt.width,dt.height,J.depth,ft,dt.data,0,0)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,B,Pt,dt.width,dt.height,J.depth,0,dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ut?R&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,B,0,0,0,dt.width,dt.height,J.depth,ft,Ct,dt.data):n.texImage3D(e.TEXTURE_2D_ARRAY,B,Pt,dt.width,dt.height,J.depth,0,ft,Ct,dt.data)}else{Ut&&ce&&n.texStorage2D(e.TEXTURE_2D,st,Pt,zt[0].width,zt[0].height);for(let B=0,Y=zt.length;B<Y;B++)dt=zt[B],_.format!==Xn?ft!==null?Ut?R&&n.compressedTexSubImage2D(e.TEXTURE_2D,B,0,0,dt.width,dt.height,ft,dt.data):n.compressedTexImage2D(e.TEXTURE_2D,B,Pt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?R&&n.texSubImage2D(e.TEXTURE_2D,B,0,0,dt.width,dt.height,ft,Ct,dt.data):n.texImage2D(e.TEXTURE_2D,B,Pt,dt.width,dt.height,0,ft,Ct,dt.data)}else if(_.isDataArrayTexture)if(Ut){if(ce&&n.texStorage3D(e.TEXTURE_2D_ARRAY,st,Pt,J.width,J.height,J.depth),R)if(_.layerUpdates.size>0){const B=sd(J.width,J.height,_.format,_.type);for(const Y of _.layerUpdates){const it=J.data.subarray(Y*B/J.data.BYTES_PER_ELEMENT,(Y+1)*B/J.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,Y,J.width,J.height,1,ft,Ct,it)}_.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ft,Ct,J.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,Pt,J.width,J.height,J.depth,0,ft,Ct,J.data);else if(_.isData3DTexture)Ut?(ce&&n.texStorage3D(e.TEXTURE_3D,st,Pt,J.width,J.height,J.depth),R&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ft,Ct,J.data)):n.texImage3D(e.TEXTURE_3D,0,Pt,J.width,J.height,J.depth,0,ft,Ct,J.data);else if(_.isFramebufferTexture){if(ce)if(Ut)n.texStorage2D(e.TEXTURE_2D,st,Pt,J.width,J.height);else{let B=J.width,Y=J.height;for(let it=0;it<st;it++)n.texImage2D(e.TEXTURE_2D,it,Pt,B,Y,0,ft,Ct,null),B>>=1,Y>>=1}}else if(zt.length>0){if(Ut&&ce){const B=Lt(zt[0]);n.texStorage2D(e.TEXTURE_2D,st,Pt,B.width,B.height)}for(let B=0,Y=zt.length;B<Y;B++)dt=zt[B],Ut?R&&n.texSubImage2D(e.TEXTURE_2D,B,0,0,ft,Ct,dt):n.texImage2D(e.TEXTURE_2D,B,Pt,ft,Ct,dt);_.generateMipmaps=!1}else if(Ut){if(ce){const B=Lt(J);n.texStorage2D(e.TEXTURE_2D,st,Pt,B.width,B.height)}R&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,ft,Ct,J)}else n.texImage2D(e.TEXTURE_2D,0,Pt,ft,Ct,J);d(_)&&p(X),St.__version=W.version,_.onUpdate&&_.onUpdate(_)}y.__version=_.version}function V(y,_,D){if(_.image.length!==6)return;const X=jt(y,_),$=_.source;n.bindTexture(e.TEXTURE_CUBE_MAP,y.__webglTexture,e.TEXTURE0+D);const W=i.get($);if($.version!==W.__version||X===!0){n.activeTexture(e.TEXTURE0+D);const St=Jt.getPrimaries(Jt.workingColorSpace),nt=_.colorSpace===ki?null:Jt.getPrimaries(_.colorSpace),ut=_.colorSpace===ki||St===nt?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);const qt=_.isCompressedTexture||_.image[0].isCompressedTexture,J=_.image[0]&&_.image[0].isDataTexture,ft=[];for(let Y=0;Y<6;Y++)!qt&&!J?ft[Y]=S(_.image[Y],!0,r.maxCubemapSize):ft[Y]=J?_.image[Y].image:_.image[Y],ft[Y]=ue(_,ft[Y]);const Ct=ft[0],Pt=s.convert(_.format,_.colorSpace),dt=s.convert(_.type),zt=T(_.internalFormat,Pt,dt,_.colorSpace),Ut=_.isVideoTexture!==!0,ce=W.__version===void 0||X===!0,R=$.dataReady;let st=A(_,Ct);xt(e.TEXTURE_CUBE_MAP,_);let B;if(qt){Ut&&ce&&n.texStorage2D(e.TEXTURE_CUBE_MAP,st,zt,Ct.width,Ct.height);for(let Y=0;Y<6;Y++){B=ft[Y].mipmaps;for(let it=0;it<B.length;it++){const at=B[it];_.format!==Xn?Pt!==null?Ut?R&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,it,0,0,at.width,at.height,Pt,at.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,it,zt,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ut?R&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,it,0,0,at.width,at.height,Pt,dt,at.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,it,zt,at.width,at.height,0,Pt,dt,at.data)}}}else{if(B=_.mipmaps,Ut&&ce){B.length>0&&st++;const Y=Lt(ft[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,st,zt,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(J){Ut?R&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,ft[Y].width,ft[Y].height,Pt,dt,ft[Y].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,zt,ft[Y].width,ft[Y].height,0,Pt,dt,ft[Y].data);for(let it=0;it<B.length;it++){const Vt=B[it].image[Y].image;Ut?R&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,it+1,0,0,Vt.width,Vt.height,Pt,dt,Vt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,it+1,zt,Vt.width,Vt.height,0,Pt,dt,Vt.data)}}else{Ut?R&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Pt,dt,ft[Y]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,zt,Pt,dt,ft[Y]);for(let it=0;it<B.length;it++){const at=B[it];Ut?R&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,it+1,0,0,Pt,dt,at.image[Y]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,it+1,zt,Pt,dt,at.image[Y])}}}d(_)&&p(e.TEXTURE_CUBE_MAP),W.__version=$.version,_.onUpdate&&_.onUpdate(_)}y.__version=_.version}function Z(y,_,D,X,$,W){const St=s.convert(D.format,D.colorSpace),nt=s.convert(D.type),ut=T(D.internalFormat,St,nt,D.colorSpace);if(!i.get(_).__hasExternalTextures){const J=Math.max(1,_.width>>W),ft=Math.max(1,_.height>>W);$===e.TEXTURE_3D||$===e.TEXTURE_2D_ARRAY?n.texImage3D($,W,ut,J,ft,_.depth,0,St,nt,null):n.texImage2D($,W,ut,J,ft,0,St,nt,null)}n.bindFramebuffer(e.FRAMEBUFFER,y),Xt(_)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,X,$,i.get(D).__webglTexture,0,kt(_)):($===e.TEXTURE_2D||$>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,X,$,i.get(D).__webglTexture,W),n.bindFramebuffer(e.FRAMEBUFFER,null)}function gt(y,_,D){if(e.bindRenderbuffer(e.RENDERBUFFER,y),_.depthBuffer){const X=_.depthTexture,$=X&&X.isDepthTexture?X.type:null,W=E(_.stencilBuffer,$),St=_.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,nt=kt(_);Xt(_)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,nt,W,_.width,_.height):D?e.renderbufferStorageMultisample(e.RENDERBUFFER,nt,W,_.width,_.height):e.renderbufferStorage(e.RENDERBUFFER,W,_.width,_.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,St,e.RENDERBUFFER,y)}else{const X=_.textures;for(let $=0;$<X.length;$++){const W=X[$],St=s.convert(W.format,W.colorSpace),nt=s.convert(W.type),ut=T(W.internalFormat,St,nt,W.colorSpace),qt=kt(_);D&&Xt(_)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,qt,ut,_.width,_.height):Xt(_)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,qt,ut,_.width,_.height):e.renderbufferStorage(e.RENDERBUFFER,ut,_.width,_.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function ht(y,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(e.FRAMEBUFFER,y),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),q(_.depthTexture,0);const X=i.get(_.depthTexture).__webglTexture,$=kt(_);if(_.depthTexture.format===Wr)Xt(_)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,X,0,$):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,X,0);else if(_.depthTexture.format===os)Xt(_)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,X,0,$):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,X,0);else throw new Error("Unknown depthTexture format")}function Dt(y){const _=i.get(y),D=y.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==y.depthTexture){const X=y.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),X){const $=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,X.removeEventListener("dispose",$)};X.addEventListener("dispose",$),_.__depthDisposeCallback=$}_.__boundDepthTexture=X}if(y.depthTexture&&!_.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");ht(_.__webglFramebuffer,y)}else if(D){_.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(n.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer[X]),_.__webglDepthbuffer[X]===void 0)_.__webglDepthbuffer[X]=e.createRenderbuffer(),gt(_.__webglDepthbuffer[X],y,!1);else{const $=y.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,W=_.__webglDepthbuffer[X];e.bindRenderbuffer(e.RENDERBUFFER,W),e.framebufferRenderbuffer(e.FRAMEBUFFER,$,e.RENDERBUFFER,W)}}else if(n.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=e.createRenderbuffer(),gt(_.__webglDepthbuffer,y,!1);else{const X=y.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,$=_.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,$),e.framebufferRenderbuffer(e.FRAMEBUFFER,X,e.RENDERBUFFER,$)}n.bindFramebuffer(e.FRAMEBUFFER,null)}function bt(y,_,D){const X=i.get(y);_!==void 0&&Z(X.__webglFramebuffer,y,y.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),D!==void 0&&Dt(y)}function Gt(y){const _=y.texture,D=i.get(y),X=i.get(_);y.addEventListener("dispose",P);const $=y.textures,W=y.isWebGLCubeRenderTarget===!0,St=$.length>1;if(St||(X.__webglTexture===void 0&&(X.__webglTexture=e.createTexture()),X.__version=_.version,a.memory.textures++),W){D.__webglFramebuffer=[];for(let nt=0;nt<6;nt++)if(_.mipmaps&&_.mipmaps.length>0){D.__webglFramebuffer[nt]=[];for(let ut=0;ut<_.mipmaps.length;ut++)D.__webglFramebuffer[nt][ut]=e.createFramebuffer()}else D.__webglFramebuffer[nt]=e.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){D.__webglFramebuffer=[];for(let nt=0;nt<_.mipmaps.length;nt++)D.__webglFramebuffer[nt]=e.createFramebuffer()}else D.__webglFramebuffer=e.createFramebuffer();if(St)for(let nt=0,ut=$.length;nt<ut;nt++){const qt=i.get($[nt]);qt.__webglTexture===void 0&&(qt.__webglTexture=e.createTexture(),a.memory.textures++)}if(y.samples>0&&Xt(y)===!1){D.__webglMultisampledFramebuffer=e.createFramebuffer(),D.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let nt=0;nt<$.length;nt++){const ut=$[nt];D.__webglColorRenderbuffer[nt]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,D.__webglColorRenderbuffer[nt]);const qt=s.convert(ut.format,ut.colorSpace),J=s.convert(ut.type),ft=T(ut.internalFormat,qt,J,ut.colorSpace,y.isXRRenderTarget===!0),Ct=kt(y);e.renderbufferStorageMultisample(e.RENDERBUFFER,Ct,ft,y.width,y.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+nt,e.RENDERBUFFER,D.__webglColorRenderbuffer[nt])}e.bindRenderbuffer(e.RENDERBUFFER,null),y.depthBuffer&&(D.__webglDepthRenderbuffer=e.createRenderbuffer(),gt(D.__webglDepthRenderbuffer,y,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(W){n.bindTexture(e.TEXTURE_CUBE_MAP,X.__webglTexture),xt(e.TEXTURE_CUBE_MAP,_);for(let nt=0;nt<6;nt++)if(_.mipmaps&&_.mipmaps.length>0)for(let ut=0;ut<_.mipmaps.length;ut++)Z(D.__webglFramebuffer[nt][ut],y,_,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,ut);else Z(D.__webglFramebuffer[nt],y,_,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0);d(_)&&p(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(St){for(let nt=0,ut=$.length;nt<ut;nt++){const qt=$[nt],J=i.get(qt);n.bindTexture(e.TEXTURE_2D,J.__webglTexture),xt(e.TEXTURE_2D,qt),Z(D.__webglFramebuffer,y,qt,e.COLOR_ATTACHMENT0+nt,e.TEXTURE_2D,0),d(qt)&&p(e.TEXTURE_2D)}n.unbindTexture()}else{let nt=e.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(nt=y.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(nt,X.__webglTexture),xt(nt,_),_.mipmaps&&_.mipmaps.length>0)for(let ut=0;ut<_.mipmaps.length;ut++)Z(D.__webglFramebuffer[ut],y,_,e.COLOR_ATTACHMENT0,nt,ut);else Z(D.__webglFramebuffer,y,_,e.COLOR_ATTACHMENT0,nt,0);d(_)&&p(nt),n.unbindTexture()}y.depthBuffer&&Dt(y)}function ie(y){const _=y.textures;for(let D=0,X=_.length;D<X;D++){const $=_[D];if(d($)){const W=y.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:e.TEXTURE_2D,St=i.get($).__webglTexture;n.bindTexture(W,St),p(W),n.unbindTexture()}}}const Ht=[],w=[];function hn(y){if(y.samples>0){if(Xt(y)===!1){const _=y.textures,D=y.width,X=y.height;let $=e.COLOR_BUFFER_BIT;const W=y.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,St=i.get(y),nt=_.length>1;if(nt)for(let ut=0;ut<_.length;ut++)n.bindFramebuffer(e.FRAMEBUFFER,St.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ut,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,St.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ut,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let ut=0;ut<_.length;ut++){if(y.resolveDepthBuffer&&(y.depthBuffer&&($|=e.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&($|=e.STENCIL_BUFFER_BIT)),nt){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,St.__webglColorRenderbuffer[ut]);const qt=i.get(_[ut]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,qt,0)}e.blitFramebuffer(0,0,D,X,0,0,D,X,$,e.NEAREST),c===!0&&(Ht.length=0,w.length=0,Ht.push(e.COLOR_ATTACHMENT0+ut),y.depthBuffer&&y.resolveDepthBuffer===!1&&(Ht.push(W),w.push(W),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,w)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Ht))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),nt)for(let ut=0;ut<_.length;ut++){n.bindFramebuffer(e.FRAMEBUFFER,St.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ut,e.RENDERBUFFER,St.__webglColorRenderbuffer[ut]);const qt=i.get(_[ut]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,St.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ut,e.TEXTURE_2D,qt,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&c){const _=y.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[_])}}}function kt(y){return Math.min(r.maxSamples,y.samples)}function Xt(y){const _=i.get(y);return y.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Rt(y){const _=a.render.frame;h.get(y)!==_&&(h.set(y,_),y.update())}function ue(y,_){const D=y.colorSpace,X=y.format,$=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||D!==Zi&&D!==ki&&(Jt.getTransfer(D)===de?(X!==Xn||$!==bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),_}function Lt(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(l.width=y.naturalWidth||y.width,l.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(l.width=y.displayWidth,l.height=y.displayHeight):(l.width=y.width,l.height=y.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=M,this.setTexture2D=q,this.setTexture2DArray=K,this.setTexture3D=G,this.setTextureCube=j,this.rebindTextures=bt,this.setupRenderTarget=Gt,this.updateRenderTargetMipmap=ie,this.updateMultisampleRenderTarget=hn,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=Z,this.useMultisampledRTT=Xt}function hM(e,t){function n(i,r=ki){let s;const a=Jt.getTransfer(r);if(i===bi)return e.UNSIGNED_BYTE;if(i===Jh)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Qh)return e.UNSIGNED_SHORT_5_5_5_1;if(i===Am)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===Em)return e.BYTE;if(i===Tm)return e.SHORT;if(i===Gs)return e.UNSIGNED_SHORT;if(i===Zh)return e.INT;if(i===Sr)return e.UNSIGNED_INT;if(i===xi)return e.FLOAT;if(i===Zs)return e.HALF_FLOAT;if(i===bm)return e.ALPHA;if(i===wm)return e.RGB;if(i===Xn)return e.RGBA;if(i===Rm)return e.LUMINANCE;if(i===Cm)return e.LUMINANCE_ALPHA;if(i===Wr)return e.DEPTH_COMPONENT;if(i===os)return e.DEPTH_STENCIL;if(i===Pm)return e.RED;if(i===tu)return e.RED_INTEGER;if(i===Lm)return e.RG;if(i===eu)return e.RG_INTEGER;if(i===nu)return e.RGBA_INTEGER;if(i===Wa||i===Xa||i===qa||i===Ya)if(a===de)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Wa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Xa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===qa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ya)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Wa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Xa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===qa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ya)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ml||i===Sl||i===yl||i===El)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ml)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Sl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===yl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===El)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Tl||i===Al||i===bl)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Tl||i===Al)return a===de?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===bl)return a===de?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===wl||i===Rl||i===Cl||i===Pl||i===Ll||i===Dl||i===Ul||i===Il||i===Nl||i===Fl||i===Ol||i===Bl||i===kl||i===zl)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===wl)return a===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Rl)return a===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Cl)return a===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Pl)return a===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ll)return a===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Dl)return a===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ul)return a===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Il)return a===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Nl)return a===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Fl)return a===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ol)return a===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Bl)return a===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===kl)return a===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===zl)return a===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ja||i===Gl||i===Hl)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===ja)return a===de?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Gl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Hl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Dm||i===Vl||i===Wl||i===Xl)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===ja)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Vl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Wl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Xl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===as?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}class uM extends Hn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ua extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fM={type:"move"};class Nc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ua,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ua,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ua,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const S of t.hand.values()){const d=n.getJointPose(S,i),p=this._getHandJoint(l,S);d!==null&&(p.matrix.fromArray(d.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=d.radius),p.visible=d!==null}const h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],u=h.position.distanceTo(f.position),m=.02,v=.005;l.inputState.pinching&&u>m+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=m-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=n.getPose(t.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=n.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(fM)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const i=new Ua;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}}const dM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class mM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n,i){if(this.texture===null){const r=new sn,s=t.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,i=new Ri({vertexShader:dM,fragmentShader:pM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Si(new Ho(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class gM extends gs{constructor(t,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,f=null,u=null,m=null,v=null;const S=new mM,d=n.getContextAttributes();let p=null,T=null;const E=[],A=[],O=new oe;let P=null;const b=new Hn;b.layers.enable(1),b.viewport=new we;const F=new Hn;F.layers.enable(2),F.viewport=new we;const tt=[b,F],g=new uM;g.layers.enable(1),g.layers.enable(2);let M=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let Z=E[V];return Z===void 0&&(Z=new Nc,E[V]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(V){let Z=E[V];return Z===void 0&&(Z=new Nc,E[V]=Z),Z.getGripSpace()},this.getHand=function(V){let Z=E[V];return Z===void 0&&(Z=new Nc,E[V]=Z),Z.getHandSpace()};function k(V){const Z=A.indexOf(V.inputSource);if(Z===-1)return;const gt=E[Z];gt!==void 0&&(gt.update(V.inputSource,V.frame,l||a),gt.dispatchEvent({type:V.type,data:V.inputSource}))}function q(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",K);for(let V=0;V<E.length;V++){const Z=A[V];Z!==null&&(A[V]=null,E[V].disconnect(Z))}M=null,H=null,S.reset(),t.setRenderTarget(p),m=null,u=null,f=null,r=null,T=null,te.stop(),i.isPresenting=!1,t.setPixelRatio(P),t.setSize(O.width,O.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(p=t.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",q),r.addEventListener("inputsourceschange",K),d.xrCompatible!==!0&&await n.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(O),r.renderState.layers===void 0){const Z={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,Z),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),T=new yr(m.framebufferWidth,m.framebufferHeight,{format:Xn,type:bi,colorSpace:t.outputColorSpace,stencilBuffer:d.stencil})}else{let Z=null,gt=null,ht=null;d.depth&&(ht=d.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Z=d.stencil?os:Wr,gt=d.stencil?as:Sr);const Dt={colorFormat:n.RGBA8,depthFormat:ht,scaleFactor:s};f=new XRWebGLBinding(r,n),u=f.createProjectionLayer(Dt),r.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),T=new yr(u.textureWidth,u.textureHeight,{format:Xn,type:bi,depthTexture:new Km(u.textureWidth,u.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:d.stencil,colorSpace:t.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),te.setContext(r),te.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function K(V){for(let Z=0;Z<V.removed.length;Z++){const gt=V.removed[Z],ht=A.indexOf(gt);ht>=0&&(A[ht]=null,E[ht].disconnect(gt))}for(let Z=0;Z<V.added.length;Z++){const gt=V.added[Z];let ht=A.indexOf(gt);if(ht===-1){for(let bt=0;bt<E.length;bt++)if(bt>=A.length){A.push(gt),ht=bt;break}else if(A[bt]===null){A[bt]=gt,ht=bt;break}if(ht===-1)break}const Dt=E[ht];Dt&&Dt.connect(gt)}}const G=new N,j=new N;function z(V,Z,gt){G.setFromMatrixPosition(Z.matrixWorld),j.setFromMatrixPosition(gt.matrixWorld);const ht=G.distanceTo(j),Dt=Z.projectionMatrix.elements,bt=gt.projectionMatrix.elements,Gt=Dt[14]/(Dt[10]-1),ie=Dt[14]/(Dt[10]+1),Ht=(Dt[9]+1)/Dt[5],w=(Dt[9]-1)/Dt[5],hn=(Dt[8]-1)/Dt[0],kt=(bt[8]+1)/bt[0],Xt=Gt*hn,Rt=Gt*kt,ue=ht/(-hn+kt),Lt=ue*-hn;if(Z.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Lt),V.translateZ(ue),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),Dt[10]===-1)V.projectionMatrix.copy(Z.projectionMatrix),V.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const y=Gt+ue,_=ie+ue,D=Xt-Lt,X=Rt+(ht-Lt),$=Ht*ie/_*y,W=w*ie/_*y;V.projectionMatrix.makePerspective(D,X,$,W,y,_),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function ct(V,Z){Z===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(Z.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;let Z=V.near,gt=V.far;S.texture!==null&&(S.depthNear>0&&(Z=S.depthNear),S.depthFar>0&&(gt=S.depthFar)),g.near=F.near=b.near=Z,g.far=F.far=b.far=gt,(M!==g.near||H!==g.far)&&(r.updateRenderState({depthNear:g.near,depthFar:g.far}),M=g.near,H=g.far);const ht=V.parent,Dt=g.cameras;ct(g,ht);for(let bt=0;bt<Dt.length;bt++)ct(Dt[bt],ht);Dt.length===2?z(g,b,F):g.projectionMatrix.copy(b.projectionMatrix),lt(V,g,ht)};function lt(V,Z,gt){gt===null?V.matrix.copy(Z.matrixWorld):(V.matrix.copy(gt.matrixWorld),V.matrix.invert(),V.matrix.multiply(Z.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(Z.projectionMatrix),V.projectionMatrixInverse.copy(Z.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=ql*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return g},this.getFoveation=function(){if(!(u===null&&m===null))return c},this.setFoveation=function(V){c=V,u!==null&&(u.fixedFoveation=V),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=V)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(g)};let xt=null;function jt(V,Z){if(h=Z.getViewerPose(l||a),v=Z,h!==null){const gt=h.views;m!==null&&(t.setRenderTargetFramebuffer(T,m.framebuffer),t.setRenderTarget(T));let ht=!1;gt.length!==g.cameras.length&&(g.cameras.length=0,ht=!0);for(let bt=0;bt<gt.length;bt++){const Gt=gt[bt];let ie=null;if(m!==null)ie=m.getViewport(Gt);else{const w=f.getViewSubImage(u,Gt);ie=w.viewport,bt===0&&(t.setRenderTargetTextures(T,w.colorTexture,u.ignoreDepthValues?void 0:w.depthStencilTexture),t.setRenderTarget(T))}let Ht=tt[bt];Ht===void 0&&(Ht=new Hn,Ht.layers.enable(bt),Ht.viewport=new we,tt[bt]=Ht),Ht.matrix.fromArray(Gt.transform.matrix),Ht.matrix.decompose(Ht.position,Ht.quaternion,Ht.scale),Ht.projectionMatrix.fromArray(Gt.projectionMatrix),Ht.projectionMatrixInverse.copy(Ht.projectionMatrix).invert(),Ht.viewport.set(ie.x,ie.y,ie.width,ie.height),bt===0&&(g.matrix.copy(Ht.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale)),ht===!0&&g.cameras.push(Ht)}const Dt=r.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")){const bt=f.getDepthInformation(gt[0]);bt&&bt.isValid&&bt.texture&&S.init(t,bt,r.renderState)}}for(let gt=0;gt<E.length;gt++){const ht=A[gt],Dt=E[gt];ht!==null&&Dt!==void 0&&Dt.update(ht,Z,l||a)}xt&&xt(V,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),v=null}const te=new Ym;te.setAnimationLoop(jt),this.setAnimationLoop=function(V){xt=V},this.dispose=function(){}}}const sr=new wi,_M=new Re;function vM(e,t){function n(d,p){d.matrixAutoUpdate===!0&&d.updateMatrix(),p.value.copy(d.matrix)}function i(d,p){p.color.getRGB(d.fogColor.value,Vm(e)),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function r(d,p,T,E,A){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(d,p):p.isMeshToonMaterial?(s(d,p),f(d,p)):p.isMeshPhongMaterial?(s(d,p),h(d,p)):p.isMeshStandardMaterial?(s(d,p),u(d,p),p.isMeshPhysicalMaterial&&m(d,p,A)):p.isMeshMatcapMaterial?(s(d,p),v(d,p)):p.isMeshDepthMaterial?s(d,p):p.isMeshDistanceMaterial?(s(d,p),S(d,p)):p.isMeshNormalMaterial?s(d,p):p.isLineBasicMaterial?(a(d,p),p.isLineDashedMaterial&&o(d,p)):p.isPointsMaterial?c(d,p,T,E):p.isSpriteMaterial?l(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map,n(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,n(p.alphaMap,d.alphaMapTransform)),p.bumpMap&&(d.bumpMap.value=p.bumpMap,n(p.bumpMap,d.bumpMapTransform),d.bumpScale.value=p.bumpScale,p.side===rn&&(d.bumpScale.value*=-1)),p.normalMap&&(d.normalMap.value=p.normalMap,n(p.normalMap,d.normalMapTransform),d.normalScale.value.copy(p.normalScale),p.side===rn&&d.normalScale.value.negate()),p.displacementMap&&(d.displacementMap.value=p.displacementMap,n(p.displacementMap,d.displacementMapTransform),d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,d.emissiveMapTransform)),p.specularMap&&(d.specularMap.value=p.specularMap,n(p.specularMap,d.specularMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);const T=t.get(p),E=T.envMap,A=T.envMapRotation;E&&(d.envMap.value=E,sr.copy(A),sr.x*=-1,sr.y*=-1,sr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(sr.y*=-1,sr.z*=-1),d.envMapRotation.value.setFromMatrix4(_M.makeRotationFromEuler(sr)),d.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap&&(d.lightMap.value=p.lightMap,d.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,d.lightMapTransform)),p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,d.aoMapTransform))}function a(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,p.map&&(d.map.value=p.map,n(p.map,d.mapTransform))}function o(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function c(d,p,T,E){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*T,d.scale.value=E*.5,p.map&&(d.map.value=p.map,n(p.map,d.uvTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,n(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function l(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map,n(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,n(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function h(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function f(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function u(d,p){d.metalness.value=p.metalness,p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,d.metalnessMapTransform)),d.roughness.value=p.roughness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,d.roughnessMapTransform)),p.envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function m(d,p,T){d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,d.sheenColorMapTransform)),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,d.sheenRoughnessMapTransform))),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,d.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(d.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===rn&&d.clearcoatNormalScale.value.negate())),p.dispersion>0&&(d.dispersion.value=p.dispersion),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,d.iridescenceMapTransform)),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=T.texture,d.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,d.transmissionMapTransform)),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(d.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(d.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,d.specularColorMapTransform)),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,d.specularIntensityMapTransform))}function v(d,p){p.matcap&&(d.matcap.value=p.matcap)}function S(d,p){const T=t.get(p).light;d.referencePosition.value.setFromMatrixPosition(T.matrixWorld),d.nearDistance.value=T.shadow.camera.near,d.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function xM(e,t,n,i){let r={},s={},a=[];const o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,E){const A=E.program;i.uniformBlockBinding(T,A)}function l(T,E){let A=r[T.id];A===void 0&&(v(T),A=h(T),r[T.id]=A,T.addEventListener("dispose",d));const O=E.program;i.updateUBOMapping(T,O);const P=t.render.frame;s[T.id]!==P&&(u(T),s[T.id]=P)}function h(T){const E=f();T.__bindingPointIndex=E;const A=e.createBuffer(),O=T.__size,P=T.usage;return e.bindBuffer(e.UNIFORM_BUFFER,A),e.bufferData(e.UNIFORM_BUFFER,O,P),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,E,A),A}function f(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(T){const E=r[T.id],A=T.uniforms,O=T.__cache;e.bindBuffer(e.UNIFORM_BUFFER,E);for(let P=0,b=A.length;P<b;P++){const F=Array.isArray(A[P])?A[P]:[A[P]];for(let tt=0,g=F.length;tt<g;tt++){const M=F[tt];if(m(M,P,tt,O)===!0){const H=M.__offset,k=Array.isArray(M.value)?M.value:[M.value];let q=0;for(let K=0;K<k.length;K++){const G=k[K],j=S(G);typeof G=="number"||typeof G=="boolean"?(M.__data[0]=G,e.bufferSubData(e.UNIFORM_BUFFER,H+q,M.__data)):G.isMatrix3?(M.__data[0]=G.elements[0],M.__data[1]=G.elements[1],M.__data[2]=G.elements[2],M.__data[3]=0,M.__data[4]=G.elements[3],M.__data[5]=G.elements[4],M.__data[6]=G.elements[5],M.__data[7]=0,M.__data[8]=G.elements[6],M.__data[9]=G.elements[7],M.__data[10]=G.elements[8],M.__data[11]=0):(G.toArray(M.__data,q),q+=j.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,H,M.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function m(T,E,A,O){const P=T.value,b=E+"_"+A;if(O[b]===void 0)return typeof P=="number"||typeof P=="boolean"?O[b]=P:O[b]=P.clone(),!0;{const F=O[b];if(typeof P=="number"||typeof P=="boolean"){if(F!==P)return O[b]=P,!0}else if(F.equals(P)===!1)return F.copy(P),!0}return!1}function v(T){const E=T.uniforms;let A=0;const O=16;for(let b=0,F=E.length;b<F;b++){const tt=Array.isArray(E[b])?E[b]:[E[b]];for(let g=0,M=tt.length;g<M;g++){const H=tt[g],k=Array.isArray(H.value)?H.value:[H.value];for(let q=0,K=k.length;q<K;q++){const G=k[q],j=S(G),z=A%O,ct=z%j.boundary,lt=z+ct;A+=ct,lt!==0&&O-lt<j.storage&&(A+=O-lt),H.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=A,A+=j.storage}}}const P=A%O;return P>0&&(A+=O-P),T.__size=A,T.__cache={},this}function S(T){const E={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(E.boundary=4,E.storage=4):T.isVector2?(E.boundary=8,E.storage=8):T.isVector3||T.isColor?(E.boundary=16,E.storage=12):T.isVector4?(E.boundary=16,E.storage=16):T.isMatrix3?(E.boundary=48,E.storage=48):T.isMatrix4?(E.boundary=64,E.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),E}function d(T){const E=T.target;E.removeEventListener("dispose",d);const A=a.indexOf(E.__bindingPointIndex);a.splice(A,1),e.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function p(){for(const T in r)e.deleteBuffer(r[T]);a=[],r={},s={}}return{bind:c,update:l,dispose:p}}class MM{constructor(t={}){const{canvas:n=o1(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let u;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=i.getContextAttributes().alpha}else u=a;const m=new Uint32Array(4),v=new Int32Array(4);let S=null,d=null;const p=[],T=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ti,this.toneMapping=Hi,this.toneMappingExposure=1;const E=this;let A=!1,O=0,P=0,b=null,F=-1,tt=null;const g=new we,M=new we;let H=null;const k=new ne(0);let q=0,K=n.width,G=n.height,j=1,z=null,ct=null;const lt=new we(0,0,K,G),xt=new we(0,0,K,G);let jt=!1;const te=new qm;let V=!1,Z=!1;const gt=new Re,ht=new Re,Dt=new N,bt=new we,Gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ie=!1;function Ht(){return b===null?j:1}let w=i;function hn(x,C){return n.getContext(x,C)}try{const x={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${$h}`),n.addEventListener("webglcontextlost",Y,!1),n.addEventListener("webglcontextrestored",it,!1),n.addEventListener("webglcontextcreationerror",at,!1),w===null){const C="webgl2";if(w=hn(C,x),w===null)throw hn(C)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let kt,Xt,Rt,ue,Lt,y,_,D,X,$,W,St,nt,ut,qt,J,ft,Ct,Pt,dt,zt,Ut,ce,R;function st(){kt=new Ax(w),kt.init(),Ut=new hM(w,kt),Xt=new xx(w,kt,t,Ut),Rt=new oM(w),Xt.reverseDepthBuffer&&Rt.buffers.depth.setReversed(!0),ue=new Rx(w),Lt=new q3,y=new lM(w,kt,Rt,Lt,Xt,Ut,ue),_=new Sx(E),D=new Tx(E),X=new N1(w),ce=new _x(w,X),$=new bx(w,X,ue,ce),W=new Px(w,$,X,ue),Pt=new Cx(w,Xt,y),J=new Mx(Lt),St=new X3(E,_,D,kt,Xt,ce,J),nt=new vM(E,Lt),ut=new j3,qt=new tM(kt),Ct=new gx(E,_,D,Rt,W,u,c),ft=new sM(E,W,Xt),R=new xM(w,ue,Xt,Rt),dt=new vx(w,kt,ue),zt=new wx(w,kt,ue),ue.programs=St.programs,E.capabilities=Xt,E.extensions=kt,E.properties=Lt,E.renderLists=ut,E.shadowMap=ft,E.state=Rt,E.info=ue}st();const B=new gM(E,w);this.xr=B,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const x=kt.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=kt.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(x){x!==void 0&&(j=x,this.setSize(K,G,!1))},this.getSize=function(x){return x.set(K,G)},this.setSize=function(x,C,U=!0){if(B.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=x,G=C,n.width=Math.floor(x*j),n.height=Math.floor(C*j),U===!0&&(n.style.width=x+"px",n.style.height=C+"px"),this.setViewport(0,0,x,C)},this.getDrawingBufferSize=function(x){return x.set(K*j,G*j).floor()},this.setDrawingBufferSize=function(x,C,U){K=x,G=C,j=U,n.width=Math.floor(x*U),n.height=Math.floor(C*U),this.setViewport(0,0,x,C)},this.getCurrentViewport=function(x){return x.copy(g)},this.getViewport=function(x){return x.copy(lt)},this.setViewport=function(x,C,U,I){x.isVector4?lt.set(x.x,x.y,x.z,x.w):lt.set(x,C,U,I),Rt.viewport(g.copy(lt).multiplyScalar(j).round())},this.getScissor=function(x){return x.copy(xt)},this.setScissor=function(x,C,U,I){x.isVector4?xt.set(x.x,x.y,x.z,x.w):xt.set(x,C,U,I),Rt.scissor(M.copy(xt).multiplyScalar(j).round())},this.getScissorTest=function(){return jt},this.setScissorTest=function(x){Rt.setScissorTest(jt=x)},this.setOpaqueSort=function(x){z=x},this.setTransparentSort=function(x){ct=x},this.getClearColor=function(x){return x.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor.apply(Ct,arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha.apply(Ct,arguments)},this.clear=function(x=!0,C=!0,U=!0){let I=0;if(x){let L=!1;if(b!==null){const Q=b.texture.format;L=Q===nu||Q===eu||Q===tu}if(L){const Q=b.texture.type,rt=Q===bi||Q===Sr||Q===Gs||Q===as||Q===Jh||Q===Qh,pt=Ct.getClearColor(),_t=Ct.getClearAlpha(),At=pt.r,wt=pt.g,yt=pt.b;rt?(m[0]=At,m[1]=wt,m[2]=yt,m[3]=_t,w.clearBufferuiv(w.COLOR,0,m)):(v[0]=At,v[1]=wt,v[2]=yt,v[3]=_t,w.clearBufferiv(w.COLOR,0,v))}else I|=w.COLOR_BUFFER_BIT}C&&(I|=w.DEPTH_BUFFER_BIT,w.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),U&&(I|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(I)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Y,!1),n.removeEventListener("webglcontextrestored",it,!1),n.removeEventListener("webglcontextcreationerror",at,!1),ut.dispose(),qt.dispose(),Lt.dispose(),_.dispose(),D.dispose(),W.dispose(),ce.dispose(),R.dispose(),St.dispose(),B.dispose(),B.removeEventListener("sessionstart",su),B.removeEventListener("sessionend",au),Ji.stop()};function Y(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function it(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const x=ue.autoReset,C=ft.enabled,U=ft.autoUpdate,I=ft.needsUpdate,L=ft.type;st(),ue.autoReset=x,ft.enabled=C,ft.autoUpdate=U,ft.needsUpdate=I,ft.type=L}function at(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Vt(x){const C=x.target;C.removeEventListener("dispose",Vt),Le(C)}function Le(x){Ze(x),Lt.remove(x)}function Ze(x){const C=Lt.get(x).programs;C!==void 0&&(C.forEach(function(U){St.releaseProgram(U)}),x.isShaderMaterial&&St.releaseShaderCache(x))}this.renderBufferDirect=function(x,C,U,I,L,Q){C===null&&(C=Gt);const rt=L.isMesh&&L.matrixWorld.determinant()<0,pt=r0(x,C,U,I,L);Rt.setMaterial(I,rt);let _t=U.index,At=1;if(I.wireframe===!0){if(_t=$.getWireframeAttribute(U),_t===void 0)return;At=2}const wt=U.drawRange,yt=U.attributes.position;let ee=wt.start*At,fe=(wt.start+wt.count)*At;Q!==null&&(ee=Math.max(ee,Q.start*At),fe=Math.min(fe,(Q.start+Q.count)*At)),_t!==null?(ee=Math.max(ee,0),fe=Math.min(fe,_t.count)):yt!=null&&(ee=Math.max(ee,0),fe=Math.min(fe,yt.count));const Me=fe-ee;if(Me<0||Me===1/0)return;ce.setup(L,I,pt,U,_t);let un,$t=dt;if(_t!==null&&(un=X.get(_t),$t=zt,$t.setIndex(un)),L.isMesh)I.wireframe===!0?(Rt.setLineWidth(I.wireframeLinewidth*Ht()),$t.setMode(w.LINES)):$t.setMode(w.TRIANGLES);else if(L.isLine){let Et=I.linewidth;Et===void 0&&(Et=1),Rt.setLineWidth(Et*Ht()),L.isLineSegments?$t.setMode(w.LINES):L.isLineLoop?$t.setMode(w.LINE_LOOP):$t.setMode(w.LINE_STRIP)}else L.isPoints?$t.setMode(w.POINTS):L.isSprite&&$t.setMode(w.TRIANGLES);if(L.isBatchedMesh)if(L._multiDrawInstances!==null)$t.renderMultiDrawInstances(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount,L._multiDrawInstances);else if(kt.get("WEBGL_multi_draw"))$t.renderMultiDraw(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount);else{const Et=L._multiDrawStarts,Ge=L._multiDrawCounts,Zt=L._multiDrawCount,Bn=_t?X.get(_t).bytesPerElement:1,Er=Lt.get(I).currentProgram.getUniforms();for(let fn=0;fn<Zt;fn++)Er.setValue(w,"_gl_DrawID",fn),$t.render(Et[fn]/Bn,Ge[fn])}else if(L.isInstancedMesh)$t.renderInstances(ee,Me,L.count);else if(U.isInstancedBufferGeometry){const Et=U._maxInstanceCount!==void 0?U._maxInstanceCount:1/0,Ge=Math.min(U.instanceCount,Et);$t.renderInstances(ee,Me,Ge)}else $t.render(ee,Me)};function Kt(x,C,U){x.transparent===!0&&x.side===vi&&x.forceSinglePass===!1?(x.side=rn,x.needsUpdate=!0,sa(x,C,U),x.side=ji,x.needsUpdate=!0,sa(x,C,U),x.side=vi):sa(x,C,U)}this.compile=function(x,C,U=null){U===null&&(U=x),d=qt.get(U),d.init(C),T.push(d),U.traverseVisible(function(L){L.isLight&&L.layers.test(C.layers)&&(d.pushLight(L),L.castShadow&&d.pushShadow(L))}),x!==U&&x.traverseVisible(function(L){L.isLight&&L.layers.test(C.layers)&&(d.pushLight(L),L.castShadow&&d.pushShadow(L))}),d.setupLights();const I=new Set;return x.traverse(function(L){if(!(L.isMesh||L.isPoints||L.isLine||L.isSprite))return;const Q=L.material;if(Q)if(Array.isArray(Q))for(let rt=0;rt<Q.length;rt++){const pt=Q[rt];Kt(pt,U,L),I.add(pt)}else Kt(Q,U,L),I.add(Q)}),T.pop(),d=null,I},this.compileAsync=function(x,C,U=null){const I=this.compile(x,C,U);return new Promise(L=>{function Q(){if(I.forEach(function(rt){Lt.get(rt).currentProgram.isReady()&&I.delete(rt)}),I.size===0){L(x);return}setTimeout(Q,10)}kt.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let Je=null;function hi(x){Je&&Je(x)}function su(){Ji.stop()}function au(){Ji.start()}const Ji=new Ym;Ji.setAnimationLoop(hi),typeof self<"u"&&Ji.setContext(self),this.setAnimationLoop=function(x){Je=x,B.setAnimationLoop(x),x===null?Ji.stop():Ji.start()},B.addEventListener("sessionstart",su),B.addEventListener("sessionend",au),this.render=function(x,C){if(C!==void 0&&C.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),C.parent===null&&C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),B.enabled===!0&&B.isPresenting===!0&&(B.cameraAutoUpdate===!0&&B.updateCamera(C),C=B.getCamera()),x.isScene===!0&&x.onBeforeRender(E,x,C,b),d=qt.get(x,T.length),d.init(C),T.push(d),ht.multiplyMatrices(C.projectionMatrix,C.matrixWorldInverse),te.setFromProjectionMatrix(ht),Z=this.localClippingEnabled,V=J.init(this.clippingPlanes,Z),S=ut.get(x,p.length),S.init(),p.push(S),B.enabled===!0&&B.isPresenting===!0){const Q=E.xr.getDepthSensingMesh();Q!==null&&Wo(Q,C,-1/0,E.sortObjects)}Wo(x,C,0,E.sortObjects),S.finish(),E.sortObjects===!0&&S.sort(z,ct),ie=B.enabled===!1||B.isPresenting===!1||B.hasDepthSensing()===!1,ie&&Ct.addToRenderList(S,x),this.info.render.frame++,V===!0&&J.beginShadows();const U=d.state.shadowsArray;ft.render(U,x,C),V===!0&&J.endShadows(),this.info.autoReset===!0&&this.info.reset();const I=S.opaque,L=S.transmissive;if(d.setupLights(),C.isArrayCamera){const Q=C.cameras;if(L.length>0)for(let rt=0,pt=Q.length;rt<pt;rt++){const _t=Q[rt];cu(I,L,x,_t)}ie&&Ct.render(x);for(let rt=0,pt=Q.length;rt<pt;rt++){const _t=Q[rt];ou(S,x,_t,_t.viewport)}}else L.length>0&&cu(I,L,x,C),ie&&Ct.render(x),ou(S,x,C);b!==null&&(y.updateMultisampleRenderTarget(b),y.updateRenderTargetMipmap(b)),x.isScene===!0&&x.onAfterRender(E,x,C),ce.resetDefaultState(),F=-1,tt=null,T.pop(),T.length>0?(d=T[T.length-1],V===!0&&J.setGlobalState(E.clippingPlanes,d.state.camera)):d=null,p.pop(),p.length>0?S=p[p.length-1]:S=null};function Wo(x,C,U,I){if(x.visible===!1)return;if(x.layers.test(C.layers)){if(x.isGroup)U=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(C);else if(x.isLight)d.pushLight(x),x.castShadow&&d.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||te.intersectsSprite(x)){I&&bt.setFromMatrixPosition(x.matrixWorld).applyMatrix4(ht);const rt=W.update(x),pt=x.material;pt.visible&&S.push(x,rt,pt,U,bt.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||te.intersectsObject(x))){const rt=W.update(x),pt=x.material;if(I&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),bt.copy(x.boundingSphere.center)):(rt.boundingSphere===null&&rt.computeBoundingSphere(),bt.copy(rt.boundingSphere.center)),bt.applyMatrix4(x.matrixWorld).applyMatrix4(ht)),Array.isArray(pt)){const _t=rt.groups;for(let At=0,wt=_t.length;At<wt;At++){const yt=_t[At],ee=pt[yt.materialIndex];ee&&ee.visible&&S.push(x,rt,ee,U,bt.z,yt)}}else pt.visible&&S.push(x,rt,pt,U,bt.z,null)}}const Q=x.children;for(let rt=0,pt=Q.length;rt<pt;rt++)Wo(Q[rt],C,U,I)}function ou(x,C,U,I){const L=x.opaque,Q=x.transmissive,rt=x.transparent;d.setupLightsView(U),V===!0&&J.setGlobalState(E.clippingPlanes,U),I&&Rt.viewport(g.copy(I)),L.length>0&&ra(L,C,U),Q.length>0&&ra(Q,C,U),rt.length>0&&ra(rt,C,U),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function cu(x,C,U,I){if((U.isScene===!0?U.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[I.id]===void 0&&(d.state.transmissionRenderTarget[I.id]=new yr(1,1,{generateMipmaps:!0,type:kt.has("EXT_color_buffer_half_float")||kt.has("EXT_color_buffer_float")?Zs:bi,minFilter:dr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Jt.workingColorSpace}));const Q=d.state.transmissionRenderTarget[I.id],rt=I.viewport||g;Q.setSize(rt.z,rt.w);const pt=E.getRenderTarget();E.setRenderTarget(Q),E.getClearColor(k),q=E.getClearAlpha(),q<1&&E.setClearColor(16777215,.5),E.clear(),ie&&Ct.render(U);const _t=E.toneMapping;E.toneMapping=Hi;const At=I.viewport;if(I.viewport!==void 0&&(I.viewport=void 0),d.setupLightsView(I),V===!0&&J.setGlobalState(E.clippingPlanes,I),ra(x,U,I),y.updateMultisampleRenderTarget(Q),y.updateRenderTargetMipmap(Q),kt.has("WEBGL_multisampled_render_to_texture")===!1){let wt=!1;for(let yt=0,ee=C.length;yt<ee;yt++){const fe=C[yt],Me=fe.object,un=fe.geometry,$t=fe.material,Et=fe.group;if($t.side===vi&&Me.layers.test(I.layers)){const Ge=$t.side;$t.side=rn,$t.needsUpdate=!0,lu(Me,U,I,un,$t,Et),$t.side=Ge,$t.needsUpdate=!0,wt=!0}}wt===!0&&(y.updateMultisampleRenderTarget(Q),y.updateRenderTargetMipmap(Q))}E.setRenderTarget(pt),E.setClearColor(k,q),At!==void 0&&(I.viewport=At),E.toneMapping=_t}function ra(x,C,U){const I=C.isScene===!0?C.overrideMaterial:null;for(let L=0,Q=x.length;L<Q;L++){const rt=x[L],pt=rt.object,_t=rt.geometry,At=I===null?rt.material:I,wt=rt.group;pt.layers.test(U.layers)&&lu(pt,C,U,_t,At,wt)}}function lu(x,C,U,I,L,Q){x.onBeforeRender(E,C,U,I,L,Q),x.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),L.onBeforeRender(E,C,U,I,x,Q),L.transparent===!0&&L.side===vi&&L.forceSinglePass===!1?(L.side=rn,L.needsUpdate=!0,E.renderBufferDirect(U,C,I,L,x,Q),L.side=ji,L.needsUpdate=!0,E.renderBufferDirect(U,C,I,L,x,Q),L.side=vi):E.renderBufferDirect(U,C,I,L,x,Q),x.onAfterRender(E,C,U,I,L,Q)}function sa(x,C,U){C.isScene!==!0&&(C=Gt);const I=Lt.get(x),L=d.state.lights,Q=d.state.shadowsArray,rt=L.state.version,pt=St.getParameters(x,L.state,Q,C,U),_t=St.getProgramCacheKey(pt);let At=I.programs;I.environment=x.isMeshStandardMaterial?C.environment:null,I.fog=C.fog,I.envMap=(x.isMeshStandardMaterial?D:_).get(x.envMap||I.environment),I.envMapRotation=I.environment!==null&&x.envMap===null?C.environmentRotation:x.envMapRotation,At===void 0&&(x.addEventListener("dispose",Vt),At=new Map,I.programs=At);let wt=At.get(_t);if(wt!==void 0){if(I.currentProgram===wt&&I.lightsStateVersion===rt)return uu(x,pt),wt}else pt.uniforms=St.getUniforms(x),x.onBeforeCompile(pt,E),wt=St.acquireProgram(pt,_t),At.set(_t,wt),I.uniforms=pt.uniforms;const yt=I.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(yt.clippingPlanes=J.uniform),uu(x,pt),I.needsLights=a0(x),I.lightsStateVersion=rt,I.needsLights&&(yt.ambientLightColor.value=L.state.ambient,yt.lightProbe.value=L.state.probe,yt.directionalLights.value=L.state.directional,yt.directionalLightShadows.value=L.state.directionalShadow,yt.spotLights.value=L.state.spot,yt.spotLightShadows.value=L.state.spotShadow,yt.rectAreaLights.value=L.state.rectArea,yt.ltc_1.value=L.state.rectAreaLTC1,yt.ltc_2.value=L.state.rectAreaLTC2,yt.pointLights.value=L.state.point,yt.pointLightShadows.value=L.state.pointShadow,yt.hemisphereLights.value=L.state.hemi,yt.directionalShadowMap.value=L.state.directionalShadowMap,yt.directionalShadowMatrix.value=L.state.directionalShadowMatrix,yt.spotShadowMap.value=L.state.spotShadowMap,yt.spotLightMatrix.value=L.state.spotLightMatrix,yt.spotLightMap.value=L.state.spotLightMap,yt.pointShadowMap.value=L.state.pointShadowMap,yt.pointShadowMatrix.value=L.state.pointShadowMatrix),I.currentProgram=wt,I.uniformsList=null,wt}function hu(x){if(x.uniformsList===null){const C=x.currentProgram.getUniforms();x.uniformsList=$a.seqWithValue(C.seq,x.uniforms)}return x.uniformsList}function uu(x,C){const U=Lt.get(x);U.outputColorSpace=C.outputColorSpace,U.batching=C.batching,U.batchingColor=C.batchingColor,U.instancing=C.instancing,U.instancingColor=C.instancingColor,U.instancingMorph=C.instancingMorph,U.skinning=C.skinning,U.morphTargets=C.morphTargets,U.morphNormals=C.morphNormals,U.morphColors=C.morphColors,U.morphTargetsCount=C.morphTargetsCount,U.numClippingPlanes=C.numClippingPlanes,U.numIntersection=C.numClipIntersection,U.vertexAlphas=C.vertexAlphas,U.vertexTangents=C.vertexTangents,U.toneMapping=C.toneMapping}function r0(x,C,U,I,L){C.isScene!==!0&&(C=Gt),y.resetTextureUnits();const Q=C.fog,rt=I.isMeshStandardMaterial?C.environment:null,pt=b===null?E.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Zi,_t=(I.isMeshStandardMaterial?D:_).get(I.envMap||rt),At=I.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,wt=!!U.attributes.tangent&&(!!I.normalMap||I.anisotropy>0),yt=!!U.morphAttributes.position,ee=!!U.morphAttributes.normal,fe=!!U.morphAttributes.color;let Me=Hi;I.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Me=E.toneMapping);const un=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,$t=un!==void 0?un.length:0,Et=Lt.get(I),Ge=d.state.lights;if(V===!0&&(Z===!0||x!==tt)){const En=x===tt&&I.id===F;J.setState(I,x,En)}let Zt=!1;I.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==Ge.state.version||Et.outputColorSpace!==pt||L.isBatchedMesh&&Et.batching===!1||!L.isBatchedMesh&&Et.batching===!0||L.isBatchedMesh&&Et.batchingColor===!0&&L.colorTexture===null||L.isBatchedMesh&&Et.batchingColor===!1&&L.colorTexture!==null||L.isInstancedMesh&&Et.instancing===!1||!L.isInstancedMesh&&Et.instancing===!0||L.isSkinnedMesh&&Et.skinning===!1||!L.isSkinnedMesh&&Et.skinning===!0||L.isInstancedMesh&&Et.instancingColor===!0&&L.instanceColor===null||L.isInstancedMesh&&Et.instancingColor===!1&&L.instanceColor!==null||L.isInstancedMesh&&Et.instancingMorph===!0&&L.morphTexture===null||L.isInstancedMesh&&Et.instancingMorph===!1&&L.morphTexture!==null||Et.envMap!==_t||I.fog===!0&&Et.fog!==Q||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==J.numPlanes||Et.numIntersection!==J.numIntersection)||Et.vertexAlphas!==At||Et.vertexTangents!==wt||Et.morphTargets!==yt||Et.morphNormals!==ee||Et.morphColors!==fe||Et.toneMapping!==Me||Et.morphTargetsCount!==$t)&&(Zt=!0):(Zt=!0,Et.__version=I.version);let Bn=Et.currentProgram;Zt===!0&&(Bn=sa(I,C,L));let Er=!1,fn=!1,Xo=!1;const Ae=Bn.getUniforms(),Pi=Et.uniforms;if(Rt.useProgram(Bn.program)&&(Er=!0,fn=!0,Xo=!0),I.id!==F&&(F=I.id,fn=!0),Er||tt!==x){Xt.reverseDepthBuffer?(gt.copy(x.projectionMatrix),l1(gt),h1(gt),Ae.setValue(w,"projectionMatrix",gt)):Ae.setValue(w,"projectionMatrix",x.projectionMatrix),Ae.setValue(w,"viewMatrix",x.matrixWorldInverse);const En=Ae.map.cameraPosition;En!==void 0&&En.setValue(w,Dt.setFromMatrixPosition(x.matrixWorld)),Xt.logarithmicDepthBuffer&&Ae.setValue(w,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial)&&Ae.setValue(w,"isOrthographic",x.isOrthographicCamera===!0),tt!==x&&(tt=x,fn=!0,Xo=!0)}if(L.isSkinnedMesh){Ae.setOptional(w,L,"bindMatrix"),Ae.setOptional(w,L,"bindMatrixInverse");const En=L.skeleton;En&&(En.boneTexture===null&&En.computeBoneTexture(),Ae.setValue(w,"boneTexture",En.boneTexture,y))}L.isBatchedMesh&&(Ae.setOptional(w,L,"batchingTexture"),Ae.setValue(w,"batchingTexture",L._matricesTexture,y),Ae.setOptional(w,L,"batchingIdTexture"),Ae.setValue(w,"batchingIdTexture",L._indirectTexture,y),Ae.setOptional(w,L,"batchingColorTexture"),L._colorsTexture!==null&&Ae.setValue(w,"batchingColorTexture",L._colorsTexture,y));const qo=U.morphAttributes;if((qo.position!==void 0||qo.normal!==void 0||qo.color!==void 0)&&Pt.update(L,U,Bn),(fn||Et.receiveShadow!==L.receiveShadow)&&(Et.receiveShadow=L.receiveShadow,Ae.setValue(w,"receiveShadow",L.receiveShadow)),I.isMeshGouraudMaterial&&I.envMap!==null&&(Pi.envMap.value=_t,Pi.flipEnvMap.value=_t.isCubeTexture&&_t.isRenderTargetTexture===!1?-1:1),I.isMeshStandardMaterial&&I.envMap===null&&C.environment!==null&&(Pi.envMapIntensity.value=C.environmentIntensity),fn&&(Ae.setValue(w,"toneMappingExposure",E.toneMappingExposure),Et.needsLights&&s0(Pi,Xo),Q&&I.fog===!0&&nt.refreshFogUniforms(Pi,Q),nt.refreshMaterialUniforms(Pi,I,j,G,d.state.transmissionRenderTarget[x.id]),$a.upload(w,hu(Et),Pi,y)),I.isShaderMaterial&&I.uniformsNeedUpdate===!0&&($a.upload(w,hu(Et),Pi,y),I.uniformsNeedUpdate=!1),I.isSpriteMaterial&&Ae.setValue(w,"center",L.center),Ae.setValue(w,"modelViewMatrix",L.modelViewMatrix),Ae.setValue(w,"normalMatrix",L.normalMatrix),Ae.setValue(w,"modelMatrix",L.matrixWorld),I.isShaderMaterial||I.isRawShaderMaterial){const En=I.uniformsGroups;for(let Yo=0,o0=En.length;Yo<o0;Yo++){const fu=En[Yo];R.update(fu,Bn),R.bind(fu,Bn)}}return Bn}function s0(x,C){x.ambientLightColor.needsUpdate=C,x.lightProbe.needsUpdate=C,x.directionalLights.needsUpdate=C,x.directionalLightShadows.needsUpdate=C,x.pointLights.needsUpdate=C,x.pointLightShadows.needsUpdate=C,x.spotLights.needsUpdate=C,x.spotLightShadows.needsUpdate=C,x.rectAreaLights.needsUpdate=C,x.hemisphereLights.needsUpdate=C}function a0(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(x,C,U){Lt.get(x.texture).__webglTexture=C,Lt.get(x.depthTexture).__webglTexture=U;const I=Lt.get(x);I.__hasExternalTextures=!0,I.__autoAllocateDepthBuffer=U===void 0,I.__autoAllocateDepthBuffer||kt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),I.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(x,C){const U=Lt.get(x);U.__webglFramebuffer=C,U.__useDefaultFramebuffer=C===void 0},this.setRenderTarget=function(x,C=0,U=0){b=x,O=C,P=U;let I=!0,L=null,Q=!1,rt=!1;if(x){const _t=Lt.get(x);if(_t.__useDefaultFramebuffer!==void 0)Rt.bindFramebuffer(w.FRAMEBUFFER,null),I=!1;else if(_t.__webglFramebuffer===void 0)y.setupRenderTarget(x);else if(_t.__hasExternalTextures)y.rebindTextures(x,Lt.get(x.texture).__webglTexture,Lt.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const yt=x.depthTexture;if(_t.__boundDepthTexture!==yt){if(yt!==null&&Lt.has(yt)&&(x.width!==yt.image.width||x.height!==yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");y.setupDepthRenderbuffer(x)}}const At=x.texture;(At.isData3DTexture||At.isDataArrayTexture||At.isCompressedArrayTexture)&&(rt=!0);const wt=Lt.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(wt[C])?L=wt[C][U]:L=wt[C],Q=!0):x.samples>0&&y.useMultisampledRTT(x)===!1?L=Lt.get(x).__webglMultisampledFramebuffer:Array.isArray(wt)?L=wt[U]:L=wt,g.copy(x.viewport),M.copy(x.scissor),H=x.scissorTest}else g.copy(lt).multiplyScalar(j).floor(),M.copy(xt).multiplyScalar(j).floor(),H=jt;if(Rt.bindFramebuffer(w.FRAMEBUFFER,L)&&I&&Rt.drawBuffers(x,L),Rt.viewport(g),Rt.scissor(M),Rt.setScissorTest(H),Q){const _t=Lt.get(x.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+C,_t.__webglTexture,U)}else if(rt){const _t=Lt.get(x.texture),At=C||0;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,_t.__webglTexture,U||0,At)}F=-1},this.readRenderTargetPixels=function(x,C,U,I,L,Q,rt){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pt=Lt.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&rt!==void 0&&(pt=pt[rt]),pt){Rt.bindFramebuffer(w.FRAMEBUFFER,pt);try{const _t=x.texture,At=_t.format,wt=_t.type;if(!Xt.textureFormatReadable(At)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xt.textureTypeReadable(wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}C>=0&&C<=x.width-I&&U>=0&&U<=x.height-L&&w.readPixels(C,U,I,L,Ut.convert(At),Ut.convert(wt),Q)}finally{const _t=b!==null?Lt.get(b).__webglFramebuffer:null;Rt.bindFramebuffer(w.FRAMEBUFFER,_t)}}},this.readRenderTargetPixelsAsync=async function(x,C,U,I,L,Q,rt){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pt=Lt.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&rt!==void 0&&(pt=pt[rt]),pt){const _t=x.texture,At=_t.format,wt=_t.type;if(!Xt.textureFormatReadable(At))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xt.textureTypeReadable(wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(C>=0&&C<=x.width-I&&U>=0&&U<=x.height-L){Rt.bindFramebuffer(w.FRAMEBUFFER,pt);const yt=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,yt),w.bufferData(w.PIXEL_PACK_BUFFER,Q.byteLength,w.STREAM_READ),w.readPixels(C,U,I,L,Ut.convert(At),Ut.convert(wt),0);const ee=b!==null?Lt.get(b).__webglFramebuffer:null;Rt.bindFramebuffer(w.FRAMEBUFFER,ee);const fe=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await c1(w,fe,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,yt),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,Q),w.deleteBuffer(yt),w.deleteSync(fe),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(x,C=null,U=0){x.isTexture!==!0&&(Ka("WebGLRenderer: copyFramebufferToTexture function signature has changed."),C=arguments[0]||null,x=arguments[1]);const I=Math.pow(2,-U),L=Math.floor(x.image.width*I),Q=Math.floor(x.image.height*I),rt=C!==null?C.x:0,pt=C!==null?C.y:0;y.setTexture2D(x,0),w.copyTexSubImage2D(w.TEXTURE_2D,U,0,0,rt,pt,L,Q),Rt.unbindTexture()},this.copyTextureToTexture=function(x,C,U=null,I=null,L=0){x.isTexture!==!0&&(Ka("WebGLRenderer: copyTextureToTexture function signature has changed."),I=arguments[0]||null,x=arguments[1],C=arguments[2],L=arguments[3]||0,U=null);let Q,rt,pt,_t,At,wt;U!==null?(Q=U.max.x-U.min.x,rt=U.max.y-U.min.y,pt=U.min.x,_t=U.min.y):(Q=x.image.width,rt=x.image.height,pt=0,_t=0),I!==null?(At=I.x,wt=I.y):(At=0,wt=0);const yt=Ut.convert(C.format),ee=Ut.convert(C.type);y.setTexture2D(C,0),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,C.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,C.unpackAlignment);const fe=w.getParameter(w.UNPACK_ROW_LENGTH),Me=w.getParameter(w.UNPACK_IMAGE_HEIGHT),un=w.getParameter(w.UNPACK_SKIP_PIXELS),$t=w.getParameter(w.UNPACK_SKIP_ROWS),Et=w.getParameter(w.UNPACK_SKIP_IMAGES),Ge=x.isCompressedTexture?x.mipmaps[L]:x.image;w.pixelStorei(w.UNPACK_ROW_LENGTH,Ge.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Ge.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,pt),w.pixelStorei(w.UNPACK_SKIP_ROWS,_t),x.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,L,At,wt,Q,rt,yt,ee,Ge.data):x.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,L,At,wt,Ge.width,Ge.height,yt,Ge.data):w.texSubImage2D(w.TEXTURE_2D,L,At,wt,Q,rt,yt,ee,Ge),w.pixelStorei(w.UNPACK_ROW_LENGTH,fe),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Me),w.pixelStorei(w.UNPACK_SKIP_PIXELS,un),w.pixelStorei(w.UNPACK_SKIP_ROWS,$t),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Et),L===0&&C.generateMipmaps&&w.generateMipmap(w.TEXTURE_2D),Rt.unbindTexture()},this.copyTextureToTexture3D=function(x,C,U=null,I=null,L=0){x.isTexture!==!0&&(Ka("WebGLRenderer: copyTextureToTexture3D function signature has changed."),U=arguments[0]||null,I=arguments[1]||null,x=arguments[2],C=arguments[3],L=arguments[4]||0);let Q,rt,pt,_t,At,wt,yt,ee,fe;const Me=x.isCompressedTexture?x.mipmaps[L]:x.image;U!==null?(Q=U.max.x-U.min.x,rt=U.max.y-U.min.y,pt=U.max.z-U.min.z,_t=U.min.x,At=U.min.y,wt=U.min.z):(Q=Me.width,rt=Me.height,pt=Me.depth,_t=0,At=0,wt=0),I!==null?(yt=I.x,ee=I.y,fe=I.z):(yt=0,ee=0,fe=0);const un=Ut.convert(C.format),$t=Ut.convert(C.type);let Et;if(C.isData3DTexture)y.setTexture3D(C,0),Et=w.TEXTURE_3D;else if(C.isDataArrayTexture||C.isCompressedArrayTexture)y.setTexture2DArray(C,0),Et=w.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,C.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,C.unpackAlignment);const Ge=w.getParameter(w.UNPACK_ROW_LENGTH),Zt=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Bn=w.getParameter(w.UNPACK_SKIP_PIXELS),Er=w.getParameter(w.UNPACK_SKIP_ROWS),fn=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,Me.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Me.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,_t),w.pixelStorei(w.UNPACK_SKIP_ROWS,At),w.pixelStorei(w.UNPACK_SKIP_IMAGES,wt),x.isDataTexture||x.isData3DTexture?w.texSubImage3D(Et,L,yt,ee,fe,Q,rt,pt,un,$t,Me.data):C.isCompressedArrayTexture?w.compressedTexSubImage3D(Et,L,yt,ee,fe,Q,rt,pt,un,Me.data):w.texSubImage3D(Et,L,yt,ee,fe,Q,rt,pt,un,$t,Me),w.pixelStorei(w.UNPACK_ROW_LENGTH,Ge),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Zt),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Bn),w.pixelStorei(w.UNPACK_SKIP_ROWS,Er),w.pixelStorei(w.UNPACK_SKIP_IMAGES,fn),L===0&&C.generateMipmaps&&w.generateMipmap(Et),Rt.unbindTexture()},this.initRenderTarget=function(x){Lt.get(x).__webglFramebuffer===void 0&&y.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?y.setTextureCube(x,0):x.isData3DTexture?y.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?y.setTexture2DArray(x,0):y.setTexture2D(x,0),Rt.unbindTexture()},this.resetState=function(){O=0,P=0,b=null,Rt.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=t===iu?"display-p3":"srgb",n.unpackColorSpace=Jt.workingColorSpace===zo?"display-p3":"srgb"}}class SM extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wi,this.environmentIntensity=1,this.environmentRotation=new wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class yM extends ea{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const ad=new Re,jl=new Om,Ia=new Go,Na=new N;class EM extends an{constructor(t=new Ci,n=new yM){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,n){const i=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ia.copy(i.boundingSphere),Ia.applyMatrix4(r),Ia.radius+=s,t.ray.intersectsSphere(Ia)===!1)return;ad.copy(r).invert(),jl.copy(t.ray).applyMatrix4(ad);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,f=i.attributes.position;if(l!==null){const u=Math.max(0,a.start),m=Math.min(l.count,a.start+a.count);for(let v=u,S=m;v<S;v++){const d=l.getX(v);Na.fromBufferAttribute(f,d),od(Na,d,c,r,t,n,this)}}else{const u=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let v=u,S=m;v<S;v++)Na.fromBufferAttribute(f,v),od(Na,v,c,r,t,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function od(e,t,n,i,r,s,a){const o=jl.distanceSqToPoint(e);if(o<n){const c=new N;jl.closestPointToPoint(e,c),c.applyMatrix4(i);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$h}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$h);class TM{constructor(t,n=9e3){this.cap=n,this.next=0,this.pos=new Float32Array(n*3),this.col=new Float32Array(n*3),this.size=new Float32Array(n),this.alpha=new Float32Array(n),this.vel=new Float32Array(n*2),this.life=new Float32Array(n),this.maxLife=new Float32Array(n),this.s0=new Float32Array(n),this.s1=new Float32Array(n),this.c0=new Float32Array(n*3),this.c1=new Float32Array(n*3),this.grav=new Float32Array(n),this.drag=new Float32Array(n);const i=new Ci;this.attrs={position:new nn(this.pos,3).setUsage(fa),pcolor:new nn(this.col,3).setUsage(fa),psize:new nn(this.size,1).setUsage(fa),palpha:new nn(this.alpha,1).setUsage(fa)};for(const[s,a]of Object.entries(this.attrs))i.setAttribute(s,a);this.uniforms={pixelRatio:{value:window.devicePixelRatio||1}};const r=new Ri({uniforms:this.uniforms,vertexShader:`
        attribute vec3 pcolor; attribute float psize; attribute float palpha;
        uniform float pixelRatio; varying vec3 vC; varying float vA;
        void main() { vC = pcolor; vA = palpha; gl_PointSize = psize * pixelRatio;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
        varying vec3 vC; varying float vA;
        void main() { float d = length(gl_PointCoord - 0.5); float a = smoothstep(0.5, 0.0, d);
          a = a * a * vA; if (a < 0.003) discard; gl_FragColor = vec4(vC * a, a); }`,transparent:!0,depthWrite:!1,depthTest:!1,blending:al});this.points=new EM(i,r),this.points.frustumCulled=!1,t.add(this.points)}emit(t,n,{vx:i=0,vy:r=0,life:s=.6,size:a=10,endSize:o=0,color:c=[1,1,1],endColor:l,gravity:h=0,drag:f=1}){const u=this.next;this.next=(this.next+1)%this.cap,this.pos[u*3]=t,this.pos[u*3+1]=n,this.pos[u*3+2]=0,this.vel[u*2]=i,this.vel[u*2+1]=r,this.life[u]=this.maxLife[u]=s,this.s0[u]=a,this.s1[u]=o;const m=l??c;for(let v=0;v<3;v++)this.c0[u*3+v]=c[v],this.c1[u*3+v]=m[v];this.grav[u]=h,this.drag[u]=f}update(t){for(let n=0;n<this.cap;n++){if(this.life[n]<=0){this.alpha[n]=0,this.size[n]=0;continue}this.life[n]-=t;const i=Math.max(0,this.life[n]/this.maxLife[n]),r=Math.pow(this.drag[n],t);this.vel[n*2]*=r,this.vel[n*2+1]=this.vel[n*2+1]*r+this.grav[n]*t,this.pos[n*3]+=this.vel[n*2]*t,this.pos[n*3+1]+=this.vel[n*2+1]*t,this.size[n]=this.s1[n]+(this.s0[n]-this.s1[n])*i,this.alpha[n]=Math.pow(i,.6);for(let s=0;s<3;s++)this.col[n*3+s]=this.c1[n*3+s]+(this.c0[n*3+s]-this.c1[n*3+s])*i}for(const n of Object.values(this.attrs))n.needsUpdate=!0}}const It=(e,t)=>e+Math.random()*(t-e),cd=e=>e[Math.random()*e.length|0],Qn=(e,t)=>({x:(e.x+t.x)/2,y:(e.y+t.y)/2});function AM(e,t,n=5,i=.35){let r=[e,t];for(let s=0;s<n;s++){const a=[r[0]];for(let o=0;o<r.length-1;o++){const c=r[o],l=r[o+1],h=Math.hypot(l.x-c.x,l.y-c.y),f=-(l.y-c.y)/(h||1),u=(l.x-c.x)/(h||1),m=It(-1,1)*h*i;a.push({x:(c.x+l.x)/2+f*m,y:(c.y+l.y)/2+u*m},l)}r=a}return r}const t0={jump:{duration:.25,color:"#ffffff",start({ps:e,lm:t,scale:n}){const i=Qn(t[27],t[28]);for(let r=0;r<140;r++){const s=It(0,Math.PI*2),a=It(250,520)*n;e.emit(i.x,i.y,{vx:Math.cos(s)*a,vy:Math.sin(s)*a*.25,life:It(.35,.6),size:It(6,12)*n,color:[.9,.95,1],endColor:[.3,.4,.6],drag:.05})}},tick(){}},flame:{duration:1.4,color:"#ff7a2b",start({ps:e,lm:t,scale:n,flash:i,shake:r}){i("#ff5a1a"),r();const s=Qn(t[23],t[24]);for(let a=0;a<380;a++){const o=It(0,Math.PI*2),c=It(200,700)*n;e.emit(s.x,s.y-60*n,{vx:Math.cos(o)*c,vy:Math.sin(o)*c,life:It(.4,.9),size:It(14,30)*n,color:[1,.85,.3],endColor:[.8,.1,0],gravity:-300*n,drag:.1})}},tick({ps:e,lm:t,scale:n}){for(const i of[t[15],t[16]])for(let r=0;r<26;r++)e.emit(i.x+It(-12,12)*n,i.y+It(-12,12)*n,{vx:It(-60,60)*n,vy:It(-260,-80)*n,life:It(.35,.7),size:It(14,28)*n,color:[1,.9,.4],endColor:[.7,.05,0],gravity:-400*n,drag:.3})}},water:{duration:1.6,color:"#4fc3ff",start({flash:e,ps:t,lm:n,scale:i}){e("#2a7dff");const r=Qn(n[11],n[24]);for(let s=0;s<260;s++){const a=It(0,Math.PI*2),o=It(80,200)*i;t.emit(r.x+Math.cos(a)*o,r.y+Math.sin(a)*o,{vx:-Math.sin(a)*500*i,vy:Math.cos(a)*500*i,life:It(.5,.9),size:It(8,18)*i,color:[.7,.95,1],endColor:[.05,.25,.9],drag:.2})}},tick({ps:e,lm:t,scale:n},i){const r=[[.6,.9,1],[.3,.7,1],[.9,1,1]];for(const o of[t[15],t[16]])for(let c=0;c<22;c++)e.emit(o.x+It(-8,8)*n,o.y+It(-8,8)*n,{vx:It(-40,40)*n,vy:It(-40,40)*n,life:It(.6,1.1),size:It(10,22)*n,color:cd(r),endColor:[0,.15,.6],drag:.05});const s=Qn(Qn(t[11],t[12]),Qn(t[23],t[24])),a=(120+i*160)*n;for(let o=0;o<3;o++){const c=i*9+o*Math.PI*2/3;for(let l=0;l<6;l++){const h=c+l*.05;e.emit(s.x+Math.cos(h)*a,s.y+Math.sin(h)*a*.8,{life:.5,size:It(10,18)*n,color:[.8,.97,1],endColor:[.1,.3,.9]})}}}},thunder:{duration:.9,color:"#ffe14d",start({flash:e,shake:t}){e("#fff6c0"),t(),this._next=0},tick(e,t){if(t<this._next)return;this._next=t+.07;const{ps:n,lm:i,W:r,scale:s}=e,a=cd([i[15],i[16],Qn(i[11],i[12])]),o=AM({x:a.x+It(-.3,.3)*r,y:-20},a,6,.3);for(let c=0;c<o.length-1;c++){const l=o[c],h=o[c+1],f=Math.max(1,Math.hypot(h.x-l.x,h.y-l.y)/(4*s));for(let u=0;u<f;u++){const m=u/f;n.emit(l.x+(h.x-l.x)*m,l.y+(h.y-l.y)*m,{life:It(.12,.22),size:It(7,12)*s,color:[1,1,.85],endColor:[1,.75,.1]})}}for(let c=0;c<40;c++){const l=It(0,Math.PI*2),h=It(150,500)*s;n.emit(a.x,a.y,{vx:Math.cos(l)*h,vy:Math.sin(l)*h,life:It(.2,.45),size:It(4,9)*s,color:[1,1,.7],endColor:[1,.6,0],gravity:600*s,drag:.2})}}},wind:{duration:1.3,color:"#b8ffd9",start({flash:e}){e("#9cffd0")},tick({ps:e,lm:t,scale:n,W:i},r){const s=Qn(Qn(t[11],t[12]),Qn(t[23],t[24])),a=t[15].x+t[16].x>2*s.x?1:-1;for(let o=0;o<30;o++){const c=s.y+It(-260,260)*n,l=s.x-a*It(0,.25)*i;e.emit(l,c,{vx:a*It(700,1300)*n,vy:Math.sin(r*12+c*.02)*120*n,life:It(.25,.5),size:It(4,9)*n,color:[.85,1,.92],endColor:[.2,.7,.5],drag:.6})}for(const o of[t[15],t[16]])for(let c=0;c<10;c++)e.emit(o.x,o.y,{vx:It(-80,80)*n,vy:It(-80,80)*n,life:.6,size:It(8,14)*n,color:[.9,1,.95],endColor:[.1,.5,.35]})}}};Object.keys(t0).filter(e=>e!=="jump");class bM{constructor(t,n,i,r){this.stage=n,this.flashEl=i,this.bannerEl=r,this.renderer=new MM({canvas:t,alpha:!0,antialias:!1,premultipliedAlpha:!0}),this.renderer.setPixelRatio(window.devicePixelRatio||1),this.renderer.setClearColor(0,0),this.scene=new SM,this.camera=new jm(0,1,0,1,-10,10),this.ps=new TM(this.scene),this.active=[],this.resize(),new ResizeObserver(()=>this.resize()).observe(n)}resize(){const t=this.stage.getBoundingClientRect();this.W=t.width,this.H=t.height,this.renderer.setSize(this.W,this.H,!1),Object.assign(this.camera,{left:0,right:this.W,top:0,bottom:this.H}),this.camera.updateProjectionMatrix()}flash(t){const n=this.flashEl;n.style.transition="none",n.style.background=`radial-gradient(circle, ${t}cc, ${t}33 70%)`,n.style.opacity="0.85",requestAnimationFrame(()=>{n.style.transition="opacity 0.45s ease-out",n.style.opacity="0"})}shake(){this.stage.classList.remove("shake"),this.stage.offsetWidth,this.stage.classList.add("shake")}banner(t,n){const i=this.bannerEl;i.textContent=t,i.style.color=n,i.classList.remove("show"),i.offsetWidth,i.classList.add("show")}trigger(t,n,i){const r=t0[t];if(!r||!n)return;const s=Object.create(r),a=this._ctx(n);s.start(a),this.active.push({inst:s,t:0}),i&&this.banner(i,r.color)}_ctx(t){return{ps:this.ps,lm:t,W:this.W,H:this.H,scale:this.H/720,flash:n=>this.flash(n),shake:()=>this.shake()}}update(t,n){const i=n?this._ctx(n):null;for(const r of this.active)r.t+=t,i&&r.inst.tick(i,r.t,t);this.active=this.active.filter(r=>r.t<r.inst.duration),this.ps.update(t),this.renderer.render(this.scene,this.camera)}}const e0="anime-move-effects.v1";function wM(){return{moves:[],idle:[]}}function RM(){try{const e=JSON.parse(localStorage.getItem(e0));if(e&&Array.isArray(e.moves))return{moves:e.moves,idle:e.idle??[]}}catch{}return wM()}function CM(e){try{return localStorage.setItem(e0,JSON.stringify(e)),!0}catch(t){return console.warn("Could not save templates",t),!1}}function PM(e){const t=e[0].t;return e.map(n=>({t:Math.round(n.t-t),f:Array.from(n.f,i=>Math.round(i*1e3)/1e3)}))}function LM(e){const t=new Blob([JSON.stringify(e,null,1)],{type:"application/json"}),n=document.createElement("a");n.href=URL.createObjectURL(t),n.download="anime-moves.json",n.click(),setTimeout(()=>URL.revokeObjectURL(n.href),1e3)}const se=e=>document.getElementById(e),Pn=se("video"),Kl=se("stage"),Ps=se("skeleton"),Rn=Ps.getContext("2d"),Gr=se("status"),As=se("countdown"),Un=new bM(se("fx"),Kl,se("flash"),se("banner")),ld=new c_,hd=new f_,ia=new __;let He=RM(),mo=null,bs=[],ur=null,vn=null,Fc=0,Oc=performance.now(),ud=0;se("startBtn").onclick=async()=>{se("startBtn").disabled=!0;try{Gr.textContent="Requesting camera…";const e=await navigator.mediaDevices.getUserMedia({video:{width:1280,height:720,facingMode:"user"},audio:!1});Pn.srcObject=e,await Pn.play();const t=Pn.videoWidth/Pn.videoHeight;Kl.style.aspectRatio=`${Pn.videoWidth} / ${Pn.videoHeight}`,Kl.style.width=`min(100%, calc((100vh - 24px) * ${t}))`,Gr.textContent="Loading pose model…",mo=await o_(),Gr.textContent="Step back until your whole body is in frame",se("startBtn").textContent="Camera on"}catch(e){console.error(e),Gr.textContent="Camera/model error: "+e.message,se("startBtn").disabled=!1}};se("sens").oninput=e=>{ia.sensitivity=+e.target.value,se("sensVal").textContent=(+e.target.value).toFixed(2)};se("mirrorInv").onchange=e=>{ia.mirror=e.target.checked};se("recordBtn").onclick=()=>n0("move");se("idleBtn").onclick=()=>n0("idle");se("exportBtn").onclick=()=>LM(He);se("importFile").onchange=async e=>{const t=e.target.files[0];if(t){try{const n=JSON.parse(await t.text());if(!Array.isArray(n.moves))throw new Error('missing "moves"');He={moves:n.moves,idle:n.idle??[]},qr()}catch(n){alert("Import failed: "+n.message)}e.target.value=""}};let DM=0;se("testBtn").onclick=()=>{const e=["flame","water","thunder","wind","jump"],t=e[DM++%e.length];Un.trigger(t,ur??OM(),t.toUpperCase())};function qr(){CM(He),ia.setMoves(He.moves,He.idle),UM()}function UM(){const e=se("moveList");e.innerHTML="",He.moves.length||(e.innerHTML='<p class="hint">No moves yet.</p>');for(const n of He.moves){const i=document.createElement("div");i.className="move",i.innerHTML='<span><b></b> <small></small></span><span><button data-a="undo">Undo last</button> <button data-a="del">Delete</button></span>',i.querySelector("b").textContent=n.name,i.querySelector("small").textContent=`${n.effect} · ${n.templates.length} clip(s) · ${n.durationMs/1e3}s`,i.querySelector("[data-a=undo]").onclick=()=>{n.templates.pop(),n.templates.length||(He.moves=He.moves.filter(r=>r!==n)),qr()},i.querySelector("[data-a=del]").onclick=()=>{confirm(`Delete "${n.name}"?`)&&(He.moves=He.moves.filter(r=>r!==n),qr())},e.appendChild(i)}const t=document.createElement("p");if(t.className="hint",t.textContent=`Idle clips: ${He.idle.length}`,He.idle.length){const n=document.createElement("button");n.textContent="Clear idle",n.style.marginLeft="8px",n.onclick=()=>{He.idle=[],qr()},t.appendChild(n)}e.appendChild(t)}function n0(e){if(!mo){alert("Start the camera first.");return}if(vn)return;const t=se("moveName").value.trim();if(e==="move"&&!t){alert("Enter a move name first.");return}const n=e==="idle"?6e3:+se("moveDur").value;vn={kind:e,name:t,effect:se("moveEffect").value,durationMs:n,start:performance.now()+3e3,frames:[]}}function fd(e,t){if(!vn)return;if(e<vn.start){As.className="countdown",As.textContent=Math.ceil((vn.start-e)/1e3);return}const n=e-vn.start;if(As.className="countdown rec",As.textContent=`● REC ${vn.kind==="idle"?"idle":vn.name} ${(n/1e3).toFixed(1)}s`,t&&vn.frames.push(t),n<vn.durationMs)return;As.textContent="";const i=vn;if(vn=null,i.frames.length<10){Gr.textContent="Recording failed: body not detected";return}const r=PM(i.frames);if(i.kind==="idle")He.idle.push(r);else{let s=He.moves.find(a=>a.name.toLowerCase()===i.name.toLowerCase());s||(s={id:crypto.randomUUID(),name:i.name,effect:i.effect,durationMs:i.durationMs,templates:[]},He.moves.push(s)),s.effect=i.effect,s.templates.push(r)}qr(),Gr.textContent=`Saved ${i.kind==="idle"?"idle clip":`"${i.name}" clip`} (${i.frames.length} frames)`}let dd=-1,pd=performance.now();function i0(){var n;const e=performance.now(),t=Math.min(.05,(e-pd)/1e3);if(pd=e,mo&&Pn.readyState>=2&&Pn.currentTime!==dd){dd=Pn.currentTime;const i=mo.detectForVideo(Pn,e);NM((n=i.landmarks)==null?void 0:n[0],e),Fc++}e-Oc>500&&(ud=Fc*1e3/(e-Oc),Fc=0,Oc=e,se("fps").textContent=ud.toFixed(0)),Un.update(t,ur),requestAnimationFrame(i0)}let IM=0;function NM(e,t){if(md(null),!e){ld.reset(),ur=null,fd(t,null);return}const n=ld.smooth(e,t),i=Un.W,r=Un.H;ur=n.map(o=>({x:(1-o.x)*i,y:o.y*r,v:o.v})),md(ur);const s=u_(n,Pn.videoWidth/Pn.videoHeight);if(!s)return;const a={t,f:s.feat};for(bs.push(a);bs.length&&bs[0].t<t-3e3;)bs.shift();if(fd(t,a),hd.update(n,s.hipY,s.torso,t)&&Un.trigger("jump",ur,"JUMP!"),se("lift").textContent=hd.lift.toFixed(2),!vn&&IM++%2===0){const o=ia.update(bs,t);o&&Un.trigger(o.effect,ur,o.name),FM()}}function md(e){const t=window.devicePixelRatio||1,n=Math.round(Un.W*t),i=Math.round(Un.H*t);if((Ps.width!==n||Ps.height!==i)&&(Ps.width=n,Ps.height=i),Rn.setTransform(t,0,0,t,0,0),Rn.clearRect(0,0,Un.W,Un.H),!(!e||!se("showSkeleton").checked)){Rn.lineWidth=3,Rn.strokeStyle="rgba(120, 220, 255, 0.8)";for(const[r,s]of l_)e[r].v<.4||e[s].v<.4||(Rn.beginPath(),Rn.moveTo(e[r].x,e[r].y),Rn.lineTo(e[s].x,e[s].y),Rn.stroke());Rn.fillStyle="#fff";for(const r of e)r.v>=.4&&(Rn.beginPath(),Rn.arc(r.x,r.y,3,0,Math.PI*2),Rn.fill())}}function FM(){const e=se("scores"),t=ia.scores();if(!t.length){e.innerHTML='<p class="hint">Record a move to see match scores (lower = closer).</p>';return}(e.children.length!==t.length||e.querySelector(".hint"))&&(e.innerHTML=t.map(()=>'<div class="score"><span></span><div class="bar"><div class="fill"></div></div></div>').join("")),t.forEach((n,i)=>{const r=e.children[i],s=isFinite(n.score)?n.score:0,a=isFinite(n.score)?Math.max(0,Math.min(100,100-s/(n.threshold*2)*100)):0;r.classList.toggle("hit",isFinite(n.score)&&n.score<n.threshold),r.querySelector("span").textContent=`${n.move.name}: ${isFinite(n.score)?s.toFixed(3):"–"} / ${n.threshold.toFixed(3)}`,r.querySelector(".fill").style.width=a+"%"})}function OM(){const e=Un.W,t=Un.H,n=e/2,i=Array.from({length:33},()=>({x:n,y:t*.5,v:1})),r=(s,a,o)=>{i[s]={x:n+a*t,y:o*t,v:1}};return r(0,0,.18),r(11,-.1,.3),r(12,.1,.3),r(13,-.17,.42),r(14,.17,.42),r(15,-.2,.52),r(16,.2,.52),r(23,-.07,.58),r(24,.07,.58),r(25,-.08,.75),r(26,.08,.75),r(27,-.08,.92),r(28,.08,.92),i}qr();requestAnimationFrame(i0);
