function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function r(e){return e&&e.__esModule?e.default:e}var n={},i={},o=t.parcelRequire3a11;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},t.parcelRequire3a11=o),o.register("27Lyk",(function(t,r){var n,i;e(t.exports,"register",(()=>n),(e=>n=e)),e(t.exports,"resolve",(()=>i),(e=>i=e));var o={};n=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)o[t[r]]=e[t[r]]},i=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o.register("6n7Jk",(function(e,t){var r=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==r)return r;throw new Error("unable to locate global object")}();e.exports=t=r.fetch,r.fetch&&(t.default=r.fetch.bind(r)),t.Headers=r.Headers,t.Request=r.Request,t.Response=r.Response})),o("27Lyk").register(JSON.parse('{"f9fpV":"index.4beca358.js","hfd23":"icons.c14567a0.svg"}'));var a={},s=function(e){return e&&e.Math==Math&&e};a=s("object"==typeof globalThis&&globalThis)||s("object"==typeof window&&window)||s("object"==typeof self&&self)||s("object"==typeof t&&t)||function(){return this}()||Function("return this")();var c,u;c=!(u=function(e){try{return!!e()}catch(e){return!0}})((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}));var l,f,d,p={},h="object"==typeof document&&document.all,g=(d={all:h,IS_HTMLDDA:void 0===h&&void 0!==h}).all;p=d.IS_HTMLDDA?function(e){return"function"==typeof e||e===g}:function(e){return"function"==typeof e};var v,y,m,b={},_={};m=!u((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}));var w=Function.prototype,k=w.call,E=m&&w.bind.bind(k,k),S=(_=m?E:function(e){return function(){return k.apply(e,arguments)}})({}.toString),O=_("".slice);y=function(e){return O(S(e),8,-1)},v=function(e){if("Function"===y(e))return _(e)};var $,j,L;L=function(e){return null==e};var x=TypeError;j=function(e){if(L(e))throw x("Can't call method on "+e);return e};var M=Object;$=function(e){return M(j(e))};var P=v({}.hasOwnProperty);b=Object.hasOwn||function(e,t){return P($(e),t)};var T,I=Function.prototype,F=c&&Object.getOwnPropertyDescriptor,q=b(I,"name"),H={EXISTS:q,PROPER:q&&"something"===function(){}.name,CONFIGURABLE:q&&(!c||c&&F(I,"name").configurable)}.CONFIGURABLE,N={},R={},A=Object.defineProperty;T=function(e,t){try{A(a,e,{value:t,configurable:!0,writable:!0})}catch(r){a[e]=t}return t};var C=a["__core-js_shared__"]||T("__core-js_shared__",{});R=C;var D=v(Function.toString);p(R.inspectSource)||(R.inspectSource=function(e){return D(e)}),N=R.inspectSource;var U,G,z=a.WeakMap;G=p(z)&&/native code/.test(String(z));var J={},B=d.all;J=d.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:p(e)||e===B}:function(e){return"object"==typeof e?null!==e:p(e)};var Y,Q,W,V={},K=a.document,X=J(K)&&J(K.createElement);W=function(e){return X?K.createElement(e):{}},Q=!c&&!u((function(){return 7!=Object.defineProperty(W("div"),"a",{get:function(){return 7}}).a}));var Z;Z=c&&u((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}));var ee,te=String,re=TypeError;ee=function(e){if(J(e))return e;throw re(te(e)+" is not an object")};var ne,ie,oe={},ae=Function.prototype.call;oe=m?ae.bind(ae):function(){return ae.apply(ae,arguments)};var se,ce={},ue=function(e){return p(e)?e:void 0};se=function(e,t){return arguments.length<2?ue(a[e]):a[e]&&a[e][t]};var le={};le=v({}.isPrototypeOf);var fe,de,pe,he={};he=se("navigator","userAgent")||"";var ge,ve,ye=a.process,me=a.Deno,be=ye&&ye.versions||me&&me.version,_e=be&&be.v8;_e&&(ve=(ge=_e.split("."))[0]>0&&ge[0]<4?1:+(ge[0]+ge[1])),!ve&&he&&(!(ge=he.match(/Edge\/(\d+)/))||ge[1]>=74)&&(ge=he.match(/Chrome\/(\d+)/))&&(ve=+ge[1]),pe=ve,de=!!Object.getOwnPropertySymbols&&!u((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&pe&&pe<41})),fe=de&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var we=Object;ce=fe?function(e){return"symbol"==typeof e}:function(e){var t=se("Symbol");return p(t)&&le(t.prototype,we(e))};var ke,Ee,Se,Oe=String;Se=function(e){try{return Oe(e)}catch(e){return"Object"}};var $e=TypeError;Ee=function(e){if(p(e))return e;throw $e(Se(e)+" is not a function")},ke=function(e,t){var r=e[t];return L(r)?void 0:Ee(r)};var je,Le=TypeError;je=function(e,t){var r,n;if("string"===t&&p(r=e.toString)&&!J(n=oe(r,e)))return n;if(p(r=e.valueOf)&&!J(n=oe(r,e)))return n;if("string"!==t&&p(r=e.toString)&&!J(n=oe(r,e)))return n;throw Le("Can't convert object to primitive value")};var xe;(xe=function(e,t){return R[e]||(R[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.26.0",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.26.0/LICENSE",source:"https://github.com/zloirock/core-js"});var Me,Pe=0,Te=Math.random(),Ie=v(1..toString);Me=function(e){return"Symbol("+(void 0===e?"":e)+")_"+Ie(++Pe+Te,36)};var Fe=xe("wks"),qe=a.Symbol,He=qe&&qe.for,Ne=fe?qe:qe&&qe.withoutSetter||Me,Re=TypeError,Ae=function(e){if(!b(Fe,e)||!de&&"string"!=typeof Fe[e]){var t="Symbol."+e;de&&b(qe,e)?Fe[e]=qe[e]:Fe[e]=fe&&He?He(t):Ne(t)}return Fe[e]}("toPrimitive");ie=function(e,t){if(!J(e)||ce(e))return e;var r,n=ke(e,Ae);if(n){if(void 0===t&&(t="default"),r=oe(n,e,t),!J(r)||ce(r))return r;throw Re("Can't convert object to primitive value")}return void 0===t&&(t="number"),je(e,t)},ne=function(e){var t=ie(e,"string");return ce(t)?t:t+""};var Ce=TypeError,De=Object.defineProperty,Ue=Object.getOwnPropertyDescriptor;Y=c?Z?function(e,t,r){if(ee(e),t=ne(t),ee(r),"function"==typeof e&&"prototype"===t&&"value"in r&&"writable"in r&&!r.writable){var n=Ue(e,t);n&&n.writable&&(e[t]=r.value,r={configurable:"configurable"in r?r.configurable:n.configurable,enumerable:"enumerable"in r?r.enumerable:n.enumerable,writable:!1})}return De(e,t,r)}:De:function(e,t,r){if(ee(e),t=ne(t),ee(r),Q)try{return De(e,t,r)}catch(e){}if("get"in r||"set"in r)throw Ce("Accessors not supported");return"value"in r&&(e[t]=r.value),e};var Ge;Ge=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},V=c?function(e,t,r){return Y(e,t,Ge(1,r))}:function(e,t,r){return e[t]=r,e};var ze,Je=xe("keys");ze=function(e){return Je[e]||(Je[e]=Me(e))};var Be={};Be={};var Ye,Qe,We,Ve=a.TypeError,Ke=a.WeakMap;if(G||R.state){var Xe=R.state||(R.state=new Ke);Xe.get=Xe.get,Xe.has=Xe.has,Xe.set=Xe.set,Ye=function(e,t){if(Xe.has(e))throw Ve("Object already initialized");return t.facade=e,Xe.set(e,t),t},Qe=function(e){return Xe.get(e)||{}},We=function(e){return Xe.has(e)}}else{var Ze=ze("state");Be[Ze]=!0,Ye=function(e,t){if(b(e,Ze))throw Ve("Object already initialized");return t.facade=e,V(e,Ze,t),t},Qe=function(e){return b(e,Ze)?e[Ze]:{}},We=function(e){return b(e,Ze)}}var et=(U={set:Ye,get:Qe,has:We,enforce:function(e){return We(e)?Qe(e):Ye(e,{})},getterFor:function(e){return function(t){var r;if(!J(t)||(r=Qe(t)).type!==e)throw Ve("Incompatible receiver, "+e+" required");return r}}}).enforce,tt=U.get,rt=Object.defineProperty,nt=c&&!u((function(){return 8!==rt((function(){}),"length",{value:8}).length})),it=String(String).split("String"),ot=f=function(e,t,r){"Symbol("===String(t).slice(0,7)&&(t="["+String(t).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!b(e,"name")||H&&e.name!==t)&&(c?rt(e,"name",{value:t,configurable:!0}):e.name=t),nt&&r&&b(r,"arity")&&e.length!==r.arity&&rt(e,"length",{value:r.arity});try{r&&b(r,"constructor")&&r.constructor?c&&rt(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=et(e);return b(n,"source")||(n.source=it.join("string"==typeof t?t:"")),e};Function.prototype.toString=ot((function(){return p(this)&&tt(this).source||N(this)}),"toString"),l=function(e,t,r){return r.get&&f(r.get,t,{getter:!0}),r.set&&f(r.set,t,{setter:!0}),Y(e,t,r)};var at;at=function(){var e=ee(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.unicodeSets&&(t+="v"),e.sticky&&(t+="y"),t};var st=a.RegExp,ct=st.prototype;c&&u((function(){var e=!0;try{st(".","d")}catch(t){e=!1}var t={},r="",n=e?"dgimsy":"gimsy",i=function(e,n){Object.defineProperty(t,e,{get:function(){return r+=n,!0}})},o={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};for(var a in e&&(o.hasIndices="d"),o)i(a,o[a]);return Object.getOwnPropertyDescriptor(ct,"flags").get.call(t)!==n||r!==n}))&&l(ct,"flags",{configurable:!0,get:at});var ut,lt,ft,dt={}.propertyIsEnumerable,pt=Object.getOwnPropertyDescriptor,ht=pt&&!dt.call({1:2},1);ft=ht?function(e){var t=pt(this,e);return!!t&&t.enumerable}:dt;var gt,vt={},yt=Object,mt=v("".split);vt=u((function(){return!yt("z").propertyIsEnumerable(0)}))?function(e){return"String"==y(e)?mt(e,""):yt(e)}:yt,gt=function(e){return vt(j(e))};var bt,_t=Object.getOwnPropertyDescriptor,wt=lt=c?_t:function(e,t){if(e=gt(e),t=ne(t),Q)try{return _t(e,t)}catch(e){}if(b(e,t))return Ge(!oe(ft,e,t),e[t])};bt=function(e,t,r,n){n||(n={});var i=n.enumerable,o=void 0!==n.name?n.name:t;if(p(r)&&f(r,o,n),n.global)i?e[t]=r:T(t,r);else{try{n.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=r:Y(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var kt,Et,St,Ot,$t,jt={},Lt={},xt=Math.ceil,Mt=Math.floor;Lt=Math.trunc||function(e){var t=+e;return(t>0?Mt:xt)(t)},$t=function(e){var t=+e;return t!=t||0===t?0:Lt(t)};var Pt=Math.max,Tt=Math.min;Ot=function(e,t){var r=$t(e);return r<0?Pt(r+t,0):Tt(r,t)};var It,Ft,qt=Math.min;Ft=function(e){return e>0?qt($t(e),9007199254740991):0},It=function(e){return Ft(e.length)};var Ht=function(e){return function(t,r,n){var i,o=gt(t),a=It(o),s=Ot(n,a);if(e&&r!=r){for(;a>s;)if((i=o[s++])!=i)return!0}else for(;a>s;s++)if((e||s in o)&&o[s]===r)return e||s||0;return!e&&-1}},Nt={includes:Ht(!0),indexOf:Ht(!1)}.indexOf,Rt=v([].push);St=function(e,t){var r,n=gt(e),i=0,o=[];for(r in n)!b(Be,r)&&b(n,r)&&Rt(o,r);for(;t.length>i;)b(n,r=t[i++])&&(~Nt(o,r)||Rt(o,r));return o};var At,Ct=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");Et=Object.getOwnPropertyNames||function(e){return St(e,Ct)},At=Object.getOwnPropertySymbols;var Dt=v([].concat);jt=se("Reflect","ownKeys")||function(e){var t=Et(ee(e));return At?Dt(t,At(e)):t},kt=function(e,t,r){for(var n=jt(t),i=Y,o=lt,a=0;a<n.length;a++){var s=n[a];b(e,s)||r&&b(r,s)||i(e,s,o(t,s))}};var Ut={},Gt=/#|\.prototype\./,zt=function(e,t){var r=Bt[Jt(e)];return r==Qt||r!=Yt&&(p(t)?u(t):!!t)},Jt=zt.normalize=function(e){return String(e).replace(Gt,".").toLowerCase()},Bt=zt.data={},Yt=zt.NATIVE="N",Qt=zt.POLYFILL="P";Ut=zt,ut=function(e,t){var r,n,i,o,s,c=e.target,u=e.global,l=e.stat;if(r=u?a:l?a[c]||T(c,{}):(a[c]||{}).prototype)for(n in t){if(o=t[n],i=e.dontCallGetSet?(s=wt(r,n))&&s.value:r[n],!Ut(u?n:c+(l?".":"#")+n,e.forced)&&void 0!==i){if(typeof o==typeof i)continue;kt(o,i)}(e.sham||i&&i.sham)&&V(o,"sham",!0),bt(r,n,o,e)}};var Wt,Vt={},Kt=Function.prototype,Xt=Kt.apply,Zt=Kt.call;Vt="object"==typeof Reflect&&Reflect.apply||(m?Zt.bind(Xt):function(){return Zt.apply(Xt,arguments)});var er,tr=v(v.bind);er=function(e,t){return Ee(e),void 0===t?e:m?tr(e,t):function(){return e.apply(t,arguments)}};var rr={};rr=se("document","documentElement");var nr={};nr=v([].slice);var ir,or=TypeError;ir=function(e,t){if(e<t)throw or("Not enough arguments");return e};var ar;ar=/(?:ipad|iphone|ipod).*applewebkit/i.test(he);var sr;sr="process"==y(a.process);var cr,ur,lr,fr,dr=a.setImmediate,pr=a.clearImmediate,hr=a.process,gr=a.Dispatch,vr=a.Function,yr=a.MessageChannel,mr=a.String,br=0,_r={};try{cr=a.location}catch(e){}var wr=function(e){if(b(_r,e)){var t=_r[e];delete _r[e],t()}},kr=function(e){return function(){wr(e)}},Er=function(e){wr(e.data)},Sr=function(e){a.postMessage(mr(e),cr.protocol+"//"+cr.host)};dr&&pr||(dr=function(e){ir(arguments.length,1);var t=p(e)?e:vr(e),r=nr(arguments,1);return _r[++br]=function(){Vt(t,void 0,r)},ur(br),br},pr=function(e){delete _r[e]},sr?ur=function(e){hr.nextTick(kr(e))}:gr&&gr.now?ur=function(e){gr.now(kr(e))}:yr&&!ar?(fr=(lr=new yr).port2,lr.port1.onmessage=Er,ur=er(fr.postMessage,fr)):a.addEventListener&&p(a.postMessage)&&!a.importScripts&&cr&&"file:"!==cr.protocol&&!u(Sr)?(ur=Sr,a.addEventListener("message",Er,!1)):ur="onreadystatechange"in W("script")?function(e){rr.appendChild(W("script")).onreadystatechange=function(){rr.removeChild(this),wr(e)}}:function(e){setTimeout(kr(e),0)});var Or=(Wt={set:dr,clear:pr}).clear;ut({global:!0,bind:!0,enumerable:!0,forced:a.clearImmediate!==Or},{clearImmediate:Or});var $r=Wt.set;ut({global:!0,bind:!0,enumerable:!0,forced:a.setImmediate!==$r},{setImmediate:$r});var jr=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var o=t&&t.prototype instanceof v?t:v,a=Object.create(o.prototype),s=new x(n||[]);return i(a,"_invoke",{value:O(e,r,s)}),a}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var d="suspendedStart",p="executing",h="completed",g={};function v(){}function y(){}function m(){}var b={};u(b,a,(function(){return this}));var _=Object.getPrototypeOf,w=_&&_(_(M([])));w&&w!==r&&n.call(w,a)&&(b=w);var k=m.prototype=v.prototype=Object.create(b);function E(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function S(e,t){function r(i,o,a,s){var c=f(e[i],e,o);if("throw"!==c.type){var u=c.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then((function(e){r("next",e,a,s)}),(function(e){r("throw",e,a,s)})):t.resolve(l).then((function(e){u.value=e,a(u)}),(function(e){return r("throw",e,a,s)}))}s(c.arg)}var o;i(this,"_invoke",{value:function(e,n){function i(){return new t((function(t,i){r(e,n,t,i)}))}return o=o?o.then(i,i):i()}})}function O(e,t,r){var n=d;return function(i,o){if(n===p)throw new Error("Generator is already running");if(n===h){if("throw"===i)throw o;return P()}for(r.method=i,r.arg=o;;){var a=r.delegate;if(a){var s=$(a,r);if(s){if(s===g)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===d)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var c=f(e,t,r);if("normal"===c.type){if(n=r.done?h:"suspendedYield",c.arg===g)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=h,r.method="throw",r.arg=c.arg)}}}function $(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,$(e,r),"throw"===r.method))return g;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var i=f(n,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,g;var o=i.arg;return o?o.done?(r[e.resultName]=o.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function M(e){if(e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}return{next:P}}function P(){return{value:t,done:!0}}return y.prototype=m,i(k,"constructor",{value:m,configurable:!0}),i(m,"constructor",{value:y,configurable:!0}),y.displayName=u(m,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E(S.prototype),u(S.prototype,s,(function(){return this})),e.AsyncIterator=S,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new S(l(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},E(k),u(k,c,"Generator"),u(k,a,(function(){return this})),u(k,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=M,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(L),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),L(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;L(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:M(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}({});try{regeneratorRuntime=jr}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=jr:Function("r","regeneratorRuntime = r")(jr)}var Lr=o("6n7Jk");const xr=async function(e,t){try{const i=t?r(Lr)(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):r(Lr)(e),o=await Promise.race([i,(n=10,new Promise((function(e,t){setTimeout((function(){t(new Error(`Request took too long! Timeout after ${n} second`))}),1e3*n)})))]),a=await o.json();if(!o.ok)throw new Error(`${a.message} (${o.status})`);return a}catch(e){throw e}var n},Mr={recipe:{},search:{query:"",result:[],page:1,prePage:10},bookmark:[]},Pr=function(e){let{recipe:t}=e.data;return{id:t.id,title:t.title,image:t.image_url,publisher:t.publisher,ingredients:t.ingredients,cookingTime:t.cooking_time,servings:t.servings,sourceUrl:t.source_url,...t.key&&{key:t.key}}},Tr=function(e=Mr.search.page){Mr.search.page=e;const t=(e-1)*Mr.search.prePage,r=e*Mr.search.prePage;return Mr.search.result.slice(t,r)},Ir=function(){localStorage.setItem("bookmark",JSON.stringify(Mr.bookmark))},Fr=function(e){Mr.bookmark.push(e),Mr.recipe.bookmarked=!0,Ir()};!function(){const e=localStorage.getItem("bookmark");e&&(Mr.bookmark=JSON.parse(e))}();var qr;qr=new URL(o("27Lyk").resolve("hfd23"),import.meta.url).toString();class Hr{_data;render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;const r=this._generateMarkup();if(!t)return r;this._clear(),this._parentEl.insertAdjacentHTML("afterbegin",r)}update(e){this._data=e;const t=this._generateMarkup(),r=document.createRange().createContextualFragment(t).querySelectorAll("*"),n=this._parentEl.querySelectorAll("*");r.forEach(((e,t)=>{const r=n[t];e.isEqualNode(r)||""===e.firstChild?.nodeValue.trim()||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach((e=>r.setAttribute(e.name,e.value)))}))}_clear(){this._parentEl.innerHTML=""}renderSpinner(){const e=`\n        <div class="spinner">\n          <svg>\n            <use href="${r(qr)}#icon-loader"></use>\n          </svg>\n        </div>`;this._clear(),this._parentEl.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){const t=`\n      <div class="error">\n        <div>\n          <svg>\n            <use href="${r(qr)}#icon-alert-triangle"></use>\n          </svg>\n        </div>\n        <p>${e}</p>\n      </div>`;this._clear(),this._parentEl.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){const t=`\n      <div class="message">\n        <div>\n          <svg>\n            <use href="${r(qr)}#icon-smile"></use>\n          </svg>\n        </div>\n        <p>${e}</p>\n      </div>`;this._clear(),this._parentEl.insertAdjacentHTML("afterbegin",t)}}var Nr;function Rr(e,t,r,n,i){const o=[2,3,5];if(!0===i)for(let t=3;t*t<=e;t+=2)e%t==0&&o.push(t);let a=0,s=1,c=e,u=t;for(;a<=o.length;)c%o[a]==0&&u%o[a]==0?(s*=o[a],c/=o[a],u/=o[a]):a++;return function(e,t,r,n){return 1===e&&1===t?`${r=`${n}${(parseInt(r)+1).toString()}`}`:0===t?`${n}${r}`:"0"==r?`${n}${t}/${e}`:`${n}${r} ${t}/${e}`}(u,c,r,n)}Nr=function(e){let t;if(e<0?(e=Math.abs(e),t="-"):t="",void 0===e)return"Your input was undefined.";if(isNaN(e))return`"${e}" is not a number.`;if(1e16==e)return`${t}9999999999999999`;if(e>1e16)return"Too many digits in your integer to maintain IEEE 754 Floating Point conversion accuracy.";if(Number.isInteger(e))return`${t}${e}`;if(e<1e-6)return"0";const r=e.toString(),n=r.split(".");let i,o=n[0];if("0"==i&&"0"!==o)return o;if("0"==i&&"0"==o)return"0";if(i=r.length>=17?n[1].slice(0,n[1].length-1):n[1],"99"==i&&"0"!==o)return`${o} 99/100`;if("99"==i&&"0"==o)return"99/100";if(1-parseFloat(`.${i}`)<.0011&&(i="999"),null==i)return o;let a=i.split("").reverse().join("").match(/^(\d+)\1{1,2}/);if(a&&i.length>2){let e=a[0].split("").reverse().join(""),r=a[1].split("").reverse().join("");if(r.length>1){let e=r.split(""),t=1;for(let r=0;r<e.length;r++)t/=e[0]/e[r];1===t&&(r=e[0])}return r.length>1&&r.length%2==0&&(r=parseInt(r.slice(0,r.length/2),10)-parseInt(r.slice(r.length/2,r.length),10)==0?r.slice(0,r.length/2):r),function(e,t,r,n,i){const o=!0,a=e.length-r.length>=1?e.length-r.length:1,s=Math.pow(10,a),c=parseFloat(`0.${e}`),u=Math.pow(10,t.length),l=Math.round((c*u-c)*Math.pow(10,a));return Rr(l,(u-1)*s,n,i,o)}(i,r,e,o,t)}return function(e,t,r){const n=!1,i=parseInt(e,10),o=Math.pow(10,e.length);return Rr(i,o,t,r,n)}(i,o,t)};var Ar=new class extends Hr{_parentEl=document.querySelector(".recipe");_errorMessage="Sorry, CANNOT find the recipe!! Try again!!";_message="";addHandlerRender(e){["hashchange","load"].forEach((t=>window.addEventListener(t,e)))}addHandlerUpdateServings(e){this._parentEl.addEventListener("click",(function(t){const r=t.target.closest(".btn--update--servings");if(!r)return;const{updateTo:n}=r.dataset;+n>0&&e(+n)}))}addHandlerAddBookmark(e){this._parentEl.addEventListener("click",(function(t){t.target.closest(".btn--bookmark")&&e()}))}_generateMarkup(){return`\n    <figure class="recipe__fig">\n      <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />\n      <h1 class="recipe__title">\n        <span>${this._data.title}</span>\n      </h1>\n    </figure>\n\n    <div class="recipe__details">\n      <div class="recipe__info">\n        <svg class="recipe__info-icon">\n          <use href="${r(qr)}#icon-clock"></use>\n        </svg>\n        <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>\n        <span class="recipe__info-text">minutes</span>\n      </div>\n      <div class="recipe__info">\n        <svg class="recipe__info-icon">\n          <use href="${r(qr)}#icon-users"></use>\n        </svg>\n        <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>\n        <span class="recipe__info-text">servings</span>\n\n        <div class="recipe__info-buttons">\n          <button class="btn--tiny btn--update--servings" data-update-to="${this._data.servings-1}">\n            <svg>\n              <use href="${r(qr)}#icon-minus-circle"></use>\n            </svg>\n          </button>\n          <button class="btn--tiny btn--update--servings" data-update-to="${this._data.servings+1}">\n            <svg>\n              <use href="${r(qr)}#icon-plus-circle"></use>\n            </svg>\n          </button>\n        </div>\n      </div>\n\n      <div class="recipe__user-generated ${this._data.key?"":"hidden"}">\n          <svg>\n            <use href="${r(qr)}#icon-user"></use>\n          </svg>\n        </div>\n      <button class="btn--round btn--bookmark">\n        <svg class="">\n          <use href="${r(qr)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>\n        </svg>\n      </button>\n    </div>\n\n    <div class="recipe__ingredients">\n      <h2 class="heading--2">Recipe ingredients</h2>\n      <ul class="recipe__ingredient-list">\n      ${this._data.ingredients.map(this._generateMarkupIngredient).join("")}\n      </ul>\n    </div>\n\n    <div class="recipe__directions">\n      <h2 class="heading--2">How to cook it</h2>\n      <p class="recipe__directions-text">\n        This recipe was carefully designed and tested by\n        <span class="recipe__publisher">${this._data.publisher}</span>. Please check out\n        directions at their website.\n      </p>\n      <a\n        class="btn--small recipe__btn"\n        href="${this._data.sourceUrl}"\n        target="_blank"\n      >\n        <span>Directions</span>\n        <svg class="search__icon">\n          <use href="${r(qr)}#icon-arrow-right"></use>\n        </svg>\n      </a>\n    </div>`}_generateMarkupIngredient(e){return` \n  <li class="recipe__ingredient">\n    <svg class="recipe__icon">\n      <use href="${r(qr)}#icon-check"></use>\n    </svg>\n    <div class="recipe__quantity">${e.quantity?r(Nr)(e.quantity).toString():""}</div>\n    <div class="recipe__description">\n      <span class="recipe__unit">${e.unit}</span>\n      ${e.description}\n    </div>\n  </li>\n`}};var Cr=new class{_parentEl=document.querySelector(".search");getQuery(){const e=this._parentEl.querySelector(".search__field").value;return this._clearQuery(),e}_clearQuery(){return this._parentEl.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentEl.addEventListener("submit",(t=>{t.preventDefault(),e()}))}};var Dr=new class extends Hr{_generateMarkup(){return`\n    <li class="preview">\n      <a class="preview__link ${window.location.hash.slice(1)===this._data.id?"preview__link--active":""}"  href="#${this._data.id}">\n          <figure class="preview__fig">\n              <img src="${this._data.image}" alt="${this._data.title}" />\n          </figure>\n          <div class="preview__data">\n              <h4 class="preview__title">${this._data.title}</h4>\n              <p class="preview__publisher">${this._data.publisher}</p>\n              <div class="preview__user-generated ${this._data.key?"":"hidden"}">\n                <svg>\n                <use href="${r(qr)}#icon-user"></use>\n                </svg>\n              </div>\n            \n          </div>\n       </a>\n    </li>`}};var Ur=new class extends Hr{_parentEl=document.querySelector(".results");_errorMessage="0 results found. try again.";_message="";_generateMarkup(){return this._data.map((e=>Dr.render(e,!1))).join("")}};var Gr=new class extends Hr{_parentEl=document.querySelector(".pagination");addHandlerClick(e){this._parentEl.addEventListener("click",(function(t){const r=+t.target.closest(".btn--inline").dataset.goto;e(r)}))}_generateMarkup(){const e=this._data.page,t=Math.ceil(this._data.result.length/10);return 1===e&&t>1?`\n    <button data-goto="${e+1}" class="btn--inline pagination__btn--next">\n        <span>Page ${e+1}</span>\n        <svg class="search__icon">\n            <use href="${r(qr)}#icon-arrow-right"></use>\n        </svg>\n    </button>`:e===t&&t>1?`\n    <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">\n        <svg class="search__icon">\n            <use href="${r(qr)}#icon-arrow-left"></use>\n        </svg>\n        <span>Page ${e-1}</span>\n    </button>`:e<t?`\n    <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">\n        <svg class="search__icon">\n            <use href="${r(qr)}#icon-arrow-left"></use>\n        </svg>\n        <span>Page ${e-1}</span>\n    </button>\n    <button data-goto="${e+1}" class="btn--inline pagination__btn--next">\n        <span>Page ${e+1}</span>\n        <svg class="search__icon">\n            <use href="${r(qr)}#icon-arrow-right"></use>\n        </svg>\n    </button>`:""}};var zr=new class extends Hr{_parentEl=document.querySelector(".bookmarks__list");_errorMessage="No Bookmark.";_message="";_generateMarkup(){return this._data.map((e=>Dr.render(e,!1))).join("")}addHandlerRender(e){window.addEventListener("load",e)}};var Jr=new class extends Hr{_parentEl=document.querySelector(".upload");_message="Your Recipe was Uploaded.";_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");_overLay=document.querySelector(".overlay");_window=document.querySelector(".add-recipe-window");constructor(){super(),this._openForm(),this._closeForm()}formSwitch(){this._overLay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_openForm(){this._btnOpen.addEventListener("click",this.formSwitch.bind(this))}_closeForm(){this._btnClose.addEventListener("click",this.formSwitch.bind(this)),this._overLay.addEventListener("click",this.formSwitch.bind(this))}addHandlerUpload(e){this._parentEl.addEventListener("submit",(function(t){t.preventDefault();const r=[...new FormData(this)],n=Object.fromEntries(r);e(n)}))}_generateMarkup(){}};const Br=async function(){try{const e=window.location.hash.slice(1);if(!e)return;Ur.update(Tr()),zr.update(Mr.bookmark),await async function(e){try{const t=await xr(`https://forkify-api.herokuapp.com/api/v2/recipes/${e}?key=e612ef05-2fdd-465e-a4d8-e1f7aa8f4b69`);Mr.recipe=Pr(t),Mr.bookmark.some((t=>t.id===e))?Mr.recipe.bookmarked=!0:Mr.recipe.bookmarked=!1}catch(e){throw e}}(e),Ar.render(Mr.recipe)}catch(e){Ar.renderError()}},Yr=async function(){try{Ur.renderSpinner();const e=Cr.getQuery();if(!e)return;await async function(e){try{Mr.search.page=1,Mr.search.query=e;const t=await xr(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${e}&key=e612ef05-2fdd-465e-a4d8-e1f7aa8f4b69`);Mr.search.result=t.data.recipes.map((e=>({id:e.id,title:e.title,image:e.image_url,publisher:e.publisher,...e.key&&{key:e.key}})))}catch(e){throw e}}(e),Ur.render(Tr()),Gr.render(Mr.search)}catch(e){Ar.renderError()}},Qr=function(e){Ur.render(Tr(e)),Gr.render(Mr.search)},Wr=function(e){!function(e){Mr.recipe.ingredients.forEach((t=>{t.quantity=t.quantity*(e/Mr.recipe.servings)})),Mr.recipe.servings=e}(e),Ar.update(Mr.recipe),console.log(Mr.recipe)},Vr=function(){Mr.recipe.bookmarked?function(e){const t=Mr.bookmark.findIndex((t=>t.id===e));Mr.bookmark.splice(t,1),Mr.recipe.bookmarked=!1,Ir()}(Mr.recipe.id):Fr(Mr.recipe),Ar.update(Mr.recipe),zr.render(Mr.bookmark)},Kr=function(){zr.render(Mr.bookmark)},Xr=async function(e){try{Jr.renderSpinner(),await async function(e){try{const t=Object.entries(e).filter((e=>e[0].startsWith("ingredient")&&""!==e[1])).map((e=>{console.log(e[1]);const t=e[1].split(",").map((e=>e.trim()));if(console.log(t),3!==t.length)throw new Error("The Format is not correctly!");const[r,n,i]=t;return{quantity:r?+r:null,unit:n,description:i}})),r={title:e.title,image_url:e.image,publisher:e.publisher,ingredients:t,cooking_time:+e.cookingTime,servings:+e.servings,source_url:e.sourceUrl},n=await xr("https://forkify-api.herokuapp.com/api/v2/recipes?key=e612ef05-2fdd-465e-a4d8-e1f7aa8f4b69",r);Mr.recipe=Pr(n),Fr(Mr.recipe)}catch(e){throw e}}(e),Ar.render(Mr.recipe),Jr.renderMessage(),setTimeout((()=>Jr.formSwitch()),2500),zr.render(Mr.bookmark),window.history.pushState(null,"",`#${Mr.recipe.id}`)}catch(e){Jr.renderError(e.message)}};zr.addHandlerRender(Kr),Ar.addHandlerRender(Br),Ar.addHandlerUpdateServings(Wr),Ar.addHandlerAddBookmark(Vr),Cr.addHandlerSearch(Yr),Gr.addHandlerClick(Qr),Jr.addHandlerUpload(Xr);
//# sourceMappingURL=index.4beca358.js.map
