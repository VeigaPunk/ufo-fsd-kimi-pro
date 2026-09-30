function sy(a,o){for(var l=0;l<o.length;l++){const s=o[l];if(typeof s!="string"&&!Array.isArray(s)){for(const u in s)if(u!=="default"&&!(u in a)){const d=Object.getOwnPropertyDescriptor(s,u);d&&Object.defineProperty(a,u,d.get?d:{enumerable:!0,get:()=>s[u]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))s(u);new MutationObserver(u=>{for(const d of u)if(d.type==="childList")for(const p of d.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&s(p)}).observe(document,{childList:!0,subtree:!0});function l(u){const d={};return u.integrity&&(d.integrity=u.integrity),u.referrerPolicy&&(d.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?d.credentials="include":u.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function s(u){if(u.ep)return;u.ep=!0;const d=l(u);fetch(u.href,d)}})();function cy(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Yc={exports:{}},xo={};var Xm;function uy(){if(Xm)return xo;Xm=1;var a=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function l(s,u,d){var p=null;if(d!==void 0&&(p=""+d),u.key!==void 0&&(p=""+u.key),"key"in u){d={};for(var h in u)h!=="key"&&(d[h]=u[h])}else d=u;return u=d.ref,{$$typeof:a,type:s,key:p,ref:u!==void 0?u:null,props:d}}return xo.Fragment=o,xo.jsx=l,xo.jsxs=l,xo}var Fm;function dy(){return Fm||(Fm=1,Yc.exports=uy()),Yc.exports}var K=dy(),Kc={exports:{}},he={};var Jm;function py(){if(Jm)return he;Jm=1;var a=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),p=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),y=Symbol.for("react.activity"),C=Symbol.iterator;function D(k){return k===null||typeof k!="object"?null:(k=C&&k[C]||k["@@iterator"],typeof k=="function"?k:null)}var N={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,L={};function Y(k,j,P){this.props=k,this.context=j,this.refs=L,this.updater=P||N}Y.prototype.isReactComponent={},Y.prototype.setState=function(k,j){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,j,"setState")},Y.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function I(){}I.prototype=Y.prototype;function F(k,j,P){this.props=k,this.context=j,this.refs=L,this.updater=P||N}var pe=F.prototype=new I;pe.constructor=F,A(pe,Y.prototype),pe.isPureReactComponent=!0;var Z=Array.isArray;function V(){}var z={H:null,A:null,T:null,S:null},G=Object.prototype.hasOwnProperty;function J(k,j,P){var Q=P.ref;return{$$typeof:a,type:k,key:j,ref:Q!==void 0?Q:null,props:P}}function oe(k,j){return J(k.type,j,k.props)}function le(k){return typeof k=="object"&&k!==null&&k.$$typeof===a}function te(k){var j={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(P){return j[P]})}var be=/\/+/g;function fe(k,j){return typeof k=="object"&&k!==null&&k.key!=null?te(""+k.key):j.toString(36)}function se(k){switch(k.status){case"fulfilled":return k.value;case"rejected":throw k.reason;default:switch(typeof k.status=="string"?k.then(V,V):(k.status="pending",k.then(function(j){k.status==="pending"&&(k.status="fulfilled",k.value=j)},function(j){k.status==="pending"&&(k.status="rejected",k.reason=j)})),k.status){case"fulfilled":return k.value;case"rejected":throw k.reason}}throw k}function T(k,j,P,Q,W){var me=typeof k;(me==="undefined"||me==="boolean")&&(k=null);var ce=!1;if(k===null)ce=!0;else switch(me){case"bigint":case"string":case"number":ce=!0;break;case"object":switch(k.$$typeof){case a:case o:ce=!0;break;case v:return ce=k._init,T(ce(k._payload),j,P,Q,W)}}if(ce)return W=W(k),ce=Q===""?"."+fe(k,0):Q,Z(W)?(P="",ce!=null&&(P=ce.replace(be,"$&/")+"/"),T(W,j,P,"",function(Yt){return Yt})):W!=null&&(le(W)&&(W=oe(W,P+(W.key==null||k&&k.key===W.key?"":(""+W.key).replace(be,"$&/")+"/")+ce)),j.push(W)),1;ce=0;var tt=Q===""?".":Q+":";if(Z(k))for(var He=0;He<k.length;He++)Q=k[He],me=tt+fe(Q,He),ce+=T(Q,j,P,me,W);else if(He=D(k),typeof He=="function")for(k=He.call(k),He=0;!(Q=k.next()).done;)Q=Q.value,me=tt+fe(Q,He++),ce+=T(Q,j,P,me,W);else if(me==="object"){if(typeof k.then=="function")return T(se(k),j,P,Q,W);throw j=String(k),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.")}return ce}function $(k,j,P){if(k==null)return k;var Q=[],W=0;return T(k,Q,"","",function(me){return j.call(P,me,W++)}),Q}function U(k){if(k._status===-1){var j=k._result;j=j(),j.then(function(P){(k._status===0||k._status===-1)&&(k._status=1,k._result=P)},function(P){(k._status===0||k._status===-1)&&(k._status=2,k._result=P)}),k._status===-1&&(k._status=0,k._result=j)}if(k._status===1)return k._result.default;throw k._result}var ue=typeof reportError=="function"?reportError:function(k){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var j=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof k=="object"&&k!==null&&typeof k.message=="string"?String(k.message):String(k),error:k});if(!window.dispatchEvent(j))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",k);return}console.error(k)},ye={map:$,forEach:function(k,j,P){$(k,function(){j.apply(this,arguments)},P)},count:function(k){var j=0;return $(k,function(){j++}),j},toArray:function(k){return $(k,function(j){return j})||[]},only:function(k){if(!le(k))throw Error("React.Children.only expected to receive a single React element child.");return k}};return he.Activity=y,he.Children=ye,he.Component=Y,he.Fragment=l,he.Profiler=u,he.PureComponent=F,he.StrictMode=s,he.Suspense=f,he.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,he.__COMPILER_RUNTIME={__proto__:null,c:function(k){return z.H.useMemoCache(k)}},he.cache=function(k){return function(){return k.apply(null,arguments)}},he.cacheSignal=function(){return null},he.cloneElement=function(k,j,P){if(k==null)throw Error("The argument must be a React element, but you passed "+k+".");var Q=A({},k.props),W=k.key;if(j!=null)for(me in j.key!==void 0&&(W=""+j.key),j)!G.call(j,me)||me==="key"||me==="__self"||me==="__source"||me==="ref"&&j.ref===void 0||(Q[me]=j[me]);var me=arguments.length-2;if(me===1)Q.children=P;else if(1<me){for(var ce=Array(me),tt=0;tt<me;tt++)ce[tt]=arguments[tt+2];Q.children=ce}return J(k.type,W,Q)},he.createContext=function(k){return k={$$typeof:p,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null},k.Provider=k,k.Consumer={$$typeof:d,_context:k},k},he.createElement=function(k,j,P){var Q,W={},me=null;if(j!=null)for(Q in j.key!==void 0&&(me=""+j.key),j)G.call(j,Q)&&Q!=="key"&&Q!=="__self"&&Q!=="__source"&&(W[Q]=j[Q]);var ce=arguments.length-2;if(ce===1)W.children=P;else if(1<ce){for(var tt=Array(ce),He=0;He<ce;He++)tt[He]=arguments[He+2];W.children=tt}if(k&&k.defaultProps)for(Q in ce=k.defaultProps,ce)W[Q]===void 0&&(W[Q]=ce[Q]);return J(k,me,W)},he.createRef=function(){return{current:null}},he.forwardRef=function(k){return{$$typeof:h,render:k}},he.isValidElement=le,he.lazy=function(k){return{$$typeof:v,_payload:{_status:-1,_result:k},_init:U}},he.memo=function(k,j){return{$$typeof:g,type:k,compare:j===void 0?null:j}},he.startTransition=function(k){var j=z.T,P={};z.T=P;try{var Q=k(),W=z.S;W!==null&&W(P,Q),typeof Q=="object"&&Q!==null&&typeof Q.then=="function"&&Q.then(V,ue)}catch(me){ue(me)}finally{j!==null&&P.types!==null&&(j.types=P.types),z.T=j}},he.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},he.use=function(k){return z.H.use(k)},he.useActionState=function(k,j,P){return z.H.useActionState(k,j,P)},he.useCallback=function(k,j){return z.H.useCallback(k,j)},he.useContext=function(k){return z.H.useContext(k)},he.useDebugValue=function(){},he.useDeferredValue=function(k,j){return z.H.useDeferredValue(k,j)},he.useEffect=function(k,j){return z.H.useEffect(k,j)},he.useEffectEvent=function(k){return z.H.useEffectEvent(k)},he.useId=function(){return z.H.useId()},he.useImperativeHandle=function(k,j,P){return z.H.useImperativeHandle(k,j,P)},he.useInsertionEffect=function(k,j){return z.H.useInsertionEffect(k,j)},he.useLayoutEffect=function(k,j){return z.H.useLayoutEffect(k,j)},he.useMemo=function(k,j){return z.H.useMemo(k,j)},he.useOptimistic=function(k,j){return z.H.useOptimistic(k,j)},he.useReducer=function(k,j,P){return z.H.useReducer(k,j,P)},he.useRef=function(k){return z.H.useRef(k)},he.useState=function(k){return z.H.useState(k)},he.useSyncExternalStore=function(k,j,P){return z.H.useSyncExternalStore(k,j,P)},he.useTransition=function(){return z.H.useTransition()},he.version="19.2.3",he}var Wm;function Tu(){return Wm||(Wm=1,Kc.exports=py()),Kc.exports}var _=Tu();const fy=cy(_),Vh=sy({__proto__:null,default:fy},[_]);var Ic={exports:{}},ko={},Xc={exports:{}},Fc={};var eh;function my(){return eh||(eh=1,(function(a){function o(T,$){var U=T.length;T.push($);e:for(;0<U;){var ue=U-1>>>1,ye=T[ue];if(0<u(ye,$))T[ue]=$,T[U]=ye,U=ue;else break e}}function l(T){return T.length===0?null:T[0]}function s(T){if(T.length===0)return null;var $=T[0],U=T.pop();if(U!==$){T[0]=U;e:for(var ue=0,ye=T.length,k=ye>>>1;ue<k;){var j=2*(ue+1)-1,P=T[j],Q=j+1,W=T[Q];if(0>u(P,U))Q<ye&&0>u(W,P)?(T[ue]=W,T[Q]=U,ue=Q):(T[ue]=P,T[j]=U,ue=j);else if(Q<ye&&0>u(W,U))T[ue]=W,T[Q]=U,ue=Q;else break e}}return $}function u(T,$){var U=T.sortIndex-$.sortIndex;return U!==0?U:T.id-$.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;a.unstable_now=function(){return d.now()}}else{var p=Date,h=p.now();a.unstable_now=function(){return p.now()-h}}var f=[],g=[],v=1,y=null,C=3,D=!1,N=!1,A=!1,L=!1,Y=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,F=typeof setImmediate<"u"?setImmediate:null;function pe(T){for(var $=l(g);$!==null;){if($.callback===null)s(g);else if($.startTime<=T)s(g),$.sortIndex=$.expirationTime,o(f,$);else break;$=l(g)}}function Z(T){if(A=!1,pe(T),!N)if(l(f)!==null)N=!0,V||(V=!0,te());else{var $=l(g);$!==null&&se(Z,$.startTime-T)}}var V=!1,z=-1,G=5,J=-1;function oe(){return L?!0:!(a.unstable_now()-J<G)}function le(){if(L=!1,V){var T=a.unstable_now();J=T;var $=!0;try{e:{N=!1,A&&(A=!1,I(z),z=-1),D=!0;var U=C;try{t:{for(pe(T),y=l(f);y!==null&&!(y.expirationTime>T&&oe());){var ue=y.callback;if(typeof ue=="function"){y.callback=null,C=y.priorityLevel;var ye=ue(y.expirationTime<=T);if(T=a.unstable_now(),typeof ye=="function"){y.callback=ye,pe(T),$=!0;break t}y===l(f)&&s(f),pe(T)}else s(f);y=l(f)}if(y!==null)$=!0;else{var k=l(g);k!==null&&se(Z,k.startTime-T),$=!1}}break e}finally{y=null,C=U,D=!1}$=void 0}}finally{$?te():V=!1}}}var te;if(typeof F=="function")te=function(){F(le)};else if(typeof MessageChannel<"u"){var be=new MessageChannel,fe=be.port2;be.port1.onmessage=le,te=function(){fe.postMessage(null)}}else te=function(){Y(le,0)};function se(T,$){z=Y(function(){T(a.unstable_now())},$)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(T){T.callback=null},a.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<T?Math.floor(1e3/T):5},a.unstable_getCurrentPriorityLevel=function(){return C},a.unstable_next=function(T){switch(C){case 1:case 2:case 3:var $=3;break;default:$=C}var U=C;C=$;try{return T()}finally{C=U}},a.unstable_requestPaint=function(){L=!0},a.unstable_runWithPriority=function(T,$){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var U=C;C=T;try{return $()}finally{C=U}},a.unstable_scheduleCallback=function(T,$,U){var ue=a.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?ue+U:ue):U=ue,T){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=U+ye,T={id:v++,callback:$,priorityLevel:T,startTime:U,expirationTime:ye,sortIndex:-1},U>ue?(T.sortIndex=U,o(g,T),l(f)===null&&T===l(g)&&(A?(I(z),z=-1):A=!0,se(Z,U-ue))):(T.sortIndex=ye,o(f,T),N||D||(N=!0,V||(V=!0,te()))),T},a.unstable_shouldYield=oe,a.unstable_wrapCallback=function(T){var $=C;return function(){var U=C;C=$;try{return T.apply(this,arguments)}finally{C=U}}}})(Fc)),Fc}var th;function hy(){return th||(th=1,Xc.exports=my()),Xc.exports}var Jc={exports:{}},ut={};var nh;function gy(){if(nh)return ut;nh=1;var a=Tu();function o(f){var g="https://react.dev/errors/"+f;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)g+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+f+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(){}var s={d:{f:l,r:function(){throw Error(o(522))},D:l,C:l,L:l,m:l,X:l,S:l,M:l},p:0,findDOMNode:null},u=Symbol.for("react.portal");function d(f,g,v){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:y==null?null:""+y,children:f,containerInfo:g,implementation:v}}var p=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(f,g){if(f==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return ut.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,ut.createPortal=function(f,g){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(o(299));return d(f,g,null,v)},ut.flushSync=function(f){var g=p.T,v=s.p;try{if(p.T=null,s.p=2,f)return f()}finally{p.T=g,s.p=v,s.d.f()}},ut.preconnect=function(f,g){typeof f=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(f,g))},ut.prefetchDNS=function(f){typeof f=="string"&&s.d.D(f)},ut.preinit=function(f,g){if(typeof f=="string"&&g&&typeof g.as=="string"){var v=g.as,y=h(v,g.crossOrigin),C=typeof g.integrity=="string"?g.integrity:void 0,D=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;v==="style"?s.d.S(f,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:y,integrity:C,fetchPriority:D}):v==="script"&&s.d.X(f,{crossOrigin:y,integrity:C,fetchPriority:D,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},ut.preinitModule=function(f,g){if(typeof f=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var v=h(g.as,g.crossOrigin);s.d.M(f,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&s.d.M(f)},ut.preload=function(f,g){if(typeof f=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var v=g.as,y=h(v,g.crossOrigin);s.d.L(f,v,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},ut.preloadModule=function(f,g){if(typeof f=="string")if(g){var v=h(g.as,g.crossOrigin);s.d.m(f,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else s.d.m(f)},ut.requestFormReset=function(f){s.d.r(f)},ut.unstable_batchedUpdates=function(f,g){return f(g)},ut.useFormState=function(f,g,v){return p.H.useFormState(f,g,v)},ut.useFormStatus=function(){return p.H.useHostTransitionStatus()},ut.version="19.2.3",ut}var ah;function by(){if(ah)return Jc.exports;ah=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(o){console.error(o)}}return a(),Jc.exports=gy(),Jc.exports}var rh;function vy(){if(rh)return ko;rh=1;var a=hy(),o=Tu(),l=by();function s(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function d(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function p(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function h(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function f(e){if(d(e)!==e)throw Error(s(188))}function g(e){var t=e.alternate;if(!t){if(t=d(e),t===null)throw Error(s(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var c=i.alternate;if(c===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===c.child){for(c=i.child;c;){if(c===n)return f(i),e;if(c===r)return f(i),t;c=c.sibling}throw Error(s(188))}if(n.return!==r.return)n=i,r=c;else{for(var m=!1,b=i.child;b;){if(b===n){m=!0,n=i,r=c;break}if(b===r){m=!0,r=i,n=c;break}b=b.sibling}if(!m){for(b=c.child;b;){if(b===n){m=!0,n=c,r=i;break}if(b===r){m=!0,r=c,n=i;break}b=b.sibling}if(!m)throw Error(s(189))}}if(n.alternate!==r)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function v(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=v(e),t!==null)return t;e=e.sibling}return null}var y=Object.assign,C=Symbol.for("react.element"),D=Symbol.for("react.transitional.element"),N=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),L=Symbol.for("react.strict_mode"),Y=Symbol.for("react.profiler"),I=Symbol.for("react.consumer"),F=Symbol.for("react.context"),pe=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),V=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),J=Symbol.for("react.activity"),oe=Symbol.for("react.memo_cache_sentinel"),le=Symbol.iterator;function te(e){return e===null||typeof e!="object"?null:(e=le&&e[le]||e["@@iterator"],typeof e=="function"?e:null)}var be=Symbol.for("react.client.reference");function fe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===be?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case A:return"Fragment";case Y:return"Profiler";case L:return"StrictMode";case Z:return"Suspense";case V:return"SuspenseList";case J:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case N:return"Portal";case F:return e.displayName||"Context";case I:return(e._context.displayName||"Context")+".Consumer";case pe:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z:return t=e.displayName||null,t!==null?t:fe(e.type)||"Memo";case G:t=e._payload,e=e._init;try{return fe(e(t))}catch{}}return null}var se=Array.isArray,T=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$=l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,U={pending:!1,data:null,method:null,action:null},ue=[],ye=-1;function k(e){return{current:e}}function j(e){0>ye||(e.current=ue[ye],ue[ye]=null,ye--)}function P(e,t){ye++,ue[ye]=e.current,e.current=t}var Q=k(null),W=k(null),me=k(null),ce=k(null);function tt(e,t){switch(P(me,t),P(W,e),P(Q,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?ym(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=ym(t),e=xm(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}j(Q),P(Q,e)}function He(){j(Q),j(W),j(me)}function Yt(e){e.memoizedState!==null&&P(ce,e);var t=Q.current,n=xm(t,e.type);t!==n&&(P(W,e),P(Q,n))}function On(e){W.current===e&&(j(Q),j(W)),ce.current===e&&(j(ce),go._currentValue=U)}var En,Ku;function oa(e){if(En===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);En=t&&t[1]||"",Ku=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+En+e+Ku}var Mi=!1;function Li(e,t){if(!e||Mi)return"";Mi=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var q=function(){throw Error()};if(Object.defineProperty(q.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(q,[])}catch(R){var M=R}Reflect.construct(e,[],q)}else{try{q.call()}catch(R){M=R}e.call(q.prototype)}}else{try{throw Error()}catch(R){M=R}(q=e())&&typeof q.catch=="function"&&q.catch(function(){})}}catch(R){if(R&&M&&typeof R.stack=="string")return[R.stack,M.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=r.DetermineComponentFrameRoot(),m=c[0],b=c[1];if(m&&b){var x=m.split(`
`),E=b.split(`
`);for(i=r=0;r<x.length&&!x[r].includes("DetermineComponentFrameRoot");)r++;for(;i<E.length&&!E[i].includes("DetermineComponentFrameRoot");)i++;if(r===x.length||i===E.length)for(r=x.length-1,i=E.length-1;1<=r&&0<=i&&x[r]!==E[i];)i--;for(;1<=r&&0<=i;r--,i--)if(x[r]!==E[i]){if(r!==1||i!==1)do if(r--,i--,0>i||x[r]!==E[i]){var H=`
`+x[r].replace(" at new "," at ");return e.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",e.displayName)),H}while(1<=r&&0<=i);break}}}finally{Mi=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?oa(n):""}function B0(e,t){switch(e.tag){case 26:case 27:case 5:return oa(e.type);case 16:return oa("Lazy");case 13:return e.child!==t&&t!==null?oa("Suspense Fallback"):oa("Suspense");case 19:return oa("SuspenseList");case 0:case 15:return Li(e.type,!1);case 11:return Li(e.type.render,!1);case 1:return Li(e.type,!0);case 31:return oa("Activity");default:return""}}function Iu(e){try{var t="",n=null;do t+=B0(e,n),n=e,e=e.return;while(e);return t}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Ri=Object.prototype.hasOwnProperty,Di=a.unstable_scheduleCallback,zi=a.unstable_cancelCallback,P0=a.unstable_shouldYield,q0=a.unstable_requestPaint,xt=a.unstable_now,G0=a.unstable_getCurrentPriorityLevel,Xu=a.unstable_ImmediatePriority,Fu=a.unstable_UserBlockingPriority,qo=a.unstable_NormalPriority,$0=a.unstable_LowPriority,Ju=a.unstable_IdlePriority,Q0=a.log,Z0=a.unstable_setDisableYieldValue,Or=null,kt=null;function An(e){if(typeof Q0=="function"&&Z0(e),kt&&typeof kt.setStrictMode=="function")try{kt.setStrictMode(Or,e)}catch{}}var wt=Math.clz32?Math.clz32:K0,V0=Math.log,Y0=Math.LN2;function K0(e){return e>>>=0,e===0?32:31-(V0(e)/Y0|0)|0}var Go=256,$o=262144,Qo=4194304;function la(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Zo(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,c=e.suspendedLanes,m=e.pingedLanes;e=e.warmLanes;var b=r&134217727;return b!==0?(r=b&~c,r!==0?i=la(r):(m&=b,m!==0?i=la(m):n||(n=b&~e,n!==0&&(i=la(n))))):(b=r&~c,b!==0?i=la(b):m!==0?i=la(m):n||(n=r&~e,n!==0&&(i=la(n)))),i===0?0:t!==0&&t!==i&&(t&c)===0&&(c=i&-i,n=t&-t,c>=n||c===32&&(n&4194048)!==0)?t:i}function Er(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function I0(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Wu(){var e=Qo;return Qo<<=1,(Qo&62914560)===0&&(Qo=4194304),e}function ji(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ar(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function X0(e,t,n,r,i,c){var m=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var b=e.entanglements,x=e.expirationTimes,E=e.hiddenUpdates;for(n=m&~n;0<n;){var H=31-wt(n),q=1<<H;b[H]=0,x[H]=-1;var M=E[H];if(M!==null)for(E[H]=null,H=0;H<M.length;H++){var R=M[H];R!==null&&(R.lane&=-536870913)}n&=~q}r!==0&&ed(e,r,0),c!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=c&~(m&~t))}function ed(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-wt(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function td(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-wt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function nd(e,t){var n=t&-t;return n=(n&42)!==0?1:Ni(n),(n&(e.suspendedLanes|t))!==0?0:n}function Ni(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Hi(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ad(){var e=$.p;return e!==0?e:(e=window.event,e===void 0?32:$m(e.type))}function rd(e,t){var n=$.p;try{return $.p=e,t()}finally{$.p=n}}var Mn=Math.random().toString(36).slice(2),ot="__reactFiber$"+Mn,ft="__reactProps$"+Mn,Ma="__reactContainer$"+Mn,Ui="__reactEvents$"+Mn,F0="__reactListeners$"+Mn,J0="__reactHandles$"+Mn,od="__reactResources$"+Mn,Mr="__reactMarker$"+Mn;function Bi(e){delete e[ot],delete e[ft],delete e[Ui],delete e[F0],delete e[J0]}function La(e){var t=e[ot];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ma]||n[ot]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Om(e);e!==null;){if(n=e[ot])return n;e=Om(e)}return t}e=n,n=e.parentNode}return null}function Ra(e){if(e=e[ot]||e[Ma]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Lr(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function Da(e){var t=e[od];return t||(t=e[od]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function nt(e){e[Mr]=!0}var ld=new Set,id={};function ia(e,t){za(e,t),za(e+"Capture",t)}function za(e,t){for(id[e]=t,e=0;e<t.length;e++)ld.add(t[e])}var W0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),sd={},cd={};function eb(e){return Ri.call(cd,e)?!0:Ri.call(sd,e)?!1:W0.test(e)?cd[e]=!0:(sd[e]=!0,!1)}function Vo(e,t,n){if(eb(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var r=t.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Yo(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function an(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+r)}}function Lt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ud(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function tb(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,c=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(m){n=""+m,c.call(this,m)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(m){n=""+m},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Pi(e){if(!e._valueTracker){var t=ud(e)?"checked":"value";e._valueTracker=tb(e,t,""+e[t])}}function dd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ud(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ko(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var nb=/[\n"\\]/g;function Rt(e){return e.replace(nb,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function qi(e,t,n,r,i,c,m,b){e.name="",m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.type=m:e.removeAttribute("type"),t!=null?m==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Lt(t)):e.value!==""+Lt(t)&&(e.value=""+Lt(t)):m!=="submit"&&m!=="reset"||e.removeAttribute("value"),t!=null?Gi(e,m,Lt(t)):n!=null?Gi(e,m,Lt(n)):r!=null&&e.removeAttribute("value"),i==null&&c!=null&&(e.defaultChecked=!!c),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+Lt(b):e.removeAttribute("name")}function pd(e,t,n,r,i,c,m,b){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.type=c),t!=null||n!=null){if(!(c!=="submit"&&c!=="reset"||t!=null)){Pi(e);return}n=n!=null?""+Lt(n):"",t=t!=null?""+Lt(t):n,b||t===e.value||(e.value=t),e.defaultValue=t}r=r??i,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=b?e.checked:!!r,e.defaultChecked=!!r,m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.name=m),Pi(e)}function Gi(e,t,n){t==="number"&&Ko(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function ja(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Lt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function fd(e,t,n){if(t!=null&&(t=""+Lt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Lt(n):""}function md(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(s(92));if(se(r)){if(1<r.length)throw Error(s(93));r=r[0]}n=r}n==null&&(n=""),t=n}n=Lt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==""&&r!==null&&(e.value=r),Pi(e)}function Na(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ab=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function hd(e,t,n){var r=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?r?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":r?e.setProperty(t,n):typeof n!="number"||n===0||ab.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function gd(e,t,n){if(t!=null&&typeof t!="object")throw Error(s(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var i in t)r=t[i],t.hasOwnProperty(i)&&n[i]!==r&&hd(e,i,r)}else for(var c in t)t.hasOwnProperty(c)&&hd(e,c,t[c])}function $i(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rb=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ob=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Io(e){return ob.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function rn(){}var Qi=null;function Zi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ha=null,Ua=null;function bd(e){var t=Ra(e);if(t&&(e=t.stateNode)){var n=e[ft]||null;e:switch(e=t.stateNode,t.type){case"input":if(qi(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Rt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=r[ft]||null;if(!i)throw Error(s(90));qi(r,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&dd(r)}break e;case"textarea":fd(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&ja(e,!!n.multiple,t,!1)}}}var Vi=!1;function vd(e,t,n){if(Vi)return e(t,n);Vi=!0;try{var r=e(t);return r}finally{if(Vi=!1,(Ha!==null||Ua!==null)&&(Nl(),Ha&&(t=Ha,e=Ua,Ua=Ha=null,bd(t),e)))for(t=0;t<e.length;t++)bd(e[t])}}function Rr(e,t){var n=e.stateNode;if(n===null)return null;var r=n[ft]||null;if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(s(231,t,typeof n));return n}var on=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yi=!1;if(on)try{var Dr={};Object.defineProperty(Dr,"passive",{get:function(){Yi=!0}}),window.addEventListener("test",Dr,Dr),window.removeEventListener("test",Dr,Dr)}catch{Yi=!1}var Ln=null,Ki=null,Xo=null;function yd(){if(Xo)return Xo;var e,t=Ki,n=t.length,r,i="value"in Ln?Ln.value:Ln.textContent,c=i.length;for(e=0;e<n&&t[e]===i[e];e++);var m=n-e;for(r=1;r<=m&&t[n-r]===i[c-r];r++);return Xo=i.slice(e,1<r?1-r:void 0)}function Fo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Jo(){return!0}function xd(){return!1}function mt(e){function t(n,r,i,c,m){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=c,this.target=m,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(n=e[b],this[b]=n?n(c):c[b]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Jo:xd,this.isPropagationStopped=xd,this}return y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Jo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Jo)},persist:function(){},isPersistent:Jo}),t}var sa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wo=mt(sa),zr=y({},sa,{view:0,detail:0}),lb=mt(zr),Ii,Xi,jr,el=y({},zr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ji,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==jr&&(jr&&e.type==="mousemove"?(Ii=e.screenX-jr.screenX,Xi=e.screenY-jr.screenY):Xi=Ii=0,jr=e),Ii)},movementY:function(e){return"movementY"in e?e.movementY:Xi}}),kd=mt(el),ib=y({},el,{dataTransfer:0}),sb=mt(ib),cb=y({},zr,{relatedTarget:0}),Fi=mt(cb),ub=y({},sa,{animationName:0,elapsedTime:0,pseudoElement:0}),db=mt(ub),pb=y({},sa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),fb=mt(pb),mb=y({},sa,{data:0}),wd=mt(mb),hb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vb(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=bb[e])?!!t[e]:!1}function Ji(){return vb}var yb=y({},zr,{key:function(e){if(e.key){var t=hb[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Fo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?gb[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ji,charCode:function(e){return e.type==="keypress"?Fo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),xb=mt(yb),kb=y({},el,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_d=mt(kb),wb=y({},zr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ji}),_b=mt(wb),Sb=y({},sa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cb=mt(Sb),Tb=y({},el,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ob=mt(Tb),Eb=y({},sa,{newState:0,oldState:0}),Ab=mt(Eb),Mb=[9,13,27,32],Wi=on&&"CompositionEvent"in window,Nr=null;on&&"documentMode"in document&&(Nr=document.documentMode);var Lb=on&&"TextEvent"in window&&!Nr,Sd=on&&(!Wi||Nr&&8<Nr&&11>=Nr),Cd=" ",Td=!1;function Od(e,t){switch(e){case"keyup":return Mb.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ed(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ba=!1;function Rb(e,t){switch(e){case"compositionend":return Ed(t);case"keypress":return t.which!==32?null:(Td=!0,Cd);case"textInput":return e=t.data,e===Cd&&Td?null:e;default:return null}}function Db(e,t){if(Ba)return e==="compositionend"||!Wi&&Od(e,t)?(e=yd(),Xo=Ki=Ln=null,Ba=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Sd&&t.locale!=="ko"?null:t.data;default:return null}}var zb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ad(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!zb[e.type]:t==="textarea"}function Md(e,t,n,r){Ha?Ua?Ua.push(r):Ua=[r]:Ha=r,t=$l(t,"onChange"),0<t.length&&(n=new Wo("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Hr=null,Ur=null;function jb(e){fm(e,0)}function tl(e){var t=Lr(e);if(dd(t))return e}function Ld(e,t){if(e==="change")return t}var Rd=!1;if(on){var es;if(on){var ts="oninput"in document;if(!ts){var Dd=document.createElement("div");Dd.setAttribute("oninput","return;"),ts=typeof Dd.oninput=="function"}es=ts}else es=!1;Rd=es&&(!document.documentMode||9<document.documentMode)}function zd(){Hr&&(Hr.detachEvent("onpropertychange",jd),Ur=Hr=null)}function jd(e){if(e.propertyName==="value"&&tl(Ur)){var t=[];Md(t,Ur,e,Zi(e)),vd(jb,t)}}function Nb(e,t,n){e==="focusin"?(zd(),Hr=t,Ur=n,Hr.attachEvent("onpropertychange",jd)):e==="focusout"&&zd()}function Hb(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return tl(Ur)}function Ub(e,t){if(e==="click")return tl(t)}function Bb(e,t){if(e==="input"||e==="change")return tl(t)}function Pb(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var _t=typeof Object.is=="function"?Object.is:Pb;function Br(e,t){if(_t(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ri.call(t,i)||!_t(e[i],t[i]))return!1}return!0}function Nd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Hd(e,t){var n=Nd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Nd(n)}}function Ud(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ud(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Bd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ko(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ko(e.document)}return t}function ns(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var qb=on&&"documentMode"in document&&11>=document.documentMode,Pa=null,as=null,Pr=null,rs=!1;function Pd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;rs||Pa==null||Pa!==Ko(r)||(r=Pa,"selectionStart"in r&&ns(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Pr&&Br(Pr,r)||(Pr=r,r=$l(as,"onSelect"),0<r.length&&(t=new Wo("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Pa)))}function ca(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var qa={animationend:ca("Animation","AnimationEnd"),animationiteration:ca("Animation","AnimationIteration"),animationstart:ca("Animation","AnimationStart"),transitionrun:ca("Transition","TransitionRun"),transitionstart:ca("Transition","TransitionStart"),transitioncancel:ca("Transition","TransitionCancel"),transitionend:ca("Transition","TransitionEnd")},os={},qd={};on&&(qd=document.createElement("div").style,"AnimationEvent"in window||(delete qa.animationend.animation,delete qa.animationiteration.animation,delete qa.animationstart.animation),"TransitionEvent"in window||delete qa.transitionend.transition);function ua(e){if(os[e])return os[e];if(!qa[e])return e;var t=qa[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in qd)return os[e]=t[n];return e}var Gd=ua("animationend"),$d=ua("animationiteration"),Qd=ua("animationstart"),Gb=ua("transitionrun"),$b=ua("transitionstart"),Qb=ua("transitioncancel"),Zd=ua("transitionend"),Vd=new Map,ls="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ls.push("scrollEnd");function Gt(e,t){Vd.set(e,t),ia(t,[e])}var nl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Dt=[],Ga=0,is=0;function al(){for(var e=Ga,t=is=Ga=0;t<e;){var n=Dt[t];Dt[t++]=null;var r=Dt[t];Dt[t++]=null;var i=Dt[t];Dt[t++]=null;var c=Dt[t];if(Dt[t++]=null,r!==null&&i!==null){var m=r.pending;m===null?i.next=i:(i.next=m.next,m.next=i),r.pending=i}c!==0&&Yd(n,i,c)}}function rl(e,t,n,r){Dt[Ga++]=e,Dt[Ga++]=t,Dt[Ga++]=n,Dt[Ga++]=r,is|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function ss(e,t,n,r){return rl(e,t,n,r),ol(e)}function da(e,t){return rl(e,null,null,t),ol(e)}function Yd(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,c=e.return;c!==null;)c.childLanes|=n,r=c.alternate,r!==null&&(r.childLanes|=n),c.tag===22&&(e=c.stateNode,e===null||e._visibility&1||(i=!0)),e=c,c=c.return;return e.tag===3?(c=e.stateNode,i&&t!==null&&(i=31-wt(n),e=c.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),c):null}function ol(e){if(50<so)throw so=0,bc=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var $a={};function Zb(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function St(e,t,n,r){return new Zb(e,t,n,r)}function cs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ln(e,t){var n=e.alternate;return n===null?(n=St(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Kd(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ll(e,t,n,r,i,c){var m=0;if(r=e,typeof e=="function")cs(e)&&(m=1);else if(typeof e=="string")m=Xv(e,n,Q.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case J:return e=St(31,n,t,i),e.elementType=J,e.lanes=c,e;case A:return pa(n.children,i,c,t);case L:m=8,i|=24;break;case Y:return e=St(12,n,t,i|2),e.elementType=Y,e.lanes=c,e;case Z:return e=St(13,n,t,i),e.elementType=Z,e.lanes=c,e;case V:return e=St(19,n,t,i),e.elementType=V,e.lanes=c,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case F:m=10;break e;case I:m=9;break e;case pe:m=11;break e;case z:m=14;break e;case G:m=16,r=null;break e}m=29,n=Error(s(130,e===null?"null":typeof e,"")),r=null}return t=St(m,n,t,i),t.elementType=e,t.type=r,t.lanes=c,t}function pa(e,t,n,r){return e=St(7,e,r,t),e.lanes=n,e}function us(e,t,n){return e=St(6,e,null,t),e.lanes=n,e}function Id(e){var t=St(18,null,null,0);return t.stateNode=e,t}function ds(e,t,n){return t=St(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Xd=new WeakMap;function zt(e,t){if(typeof e=="object"&&e!==null){var n=Xd.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Iu(t)},Xd.set(e,t),t)}return{value:e,source:t,stack:Iu(t)}}var Qa=[],Za=0,il=null,qr=0,jt=[],Nt=0,Rn=null,Kt=1,It="";function sn(e,t){Qa[Za++]=qr,Qa[Za++]=il,il=e,qr=t}function Fd(e,t,n){jt[Nt++]=Kt,jt[Nt++]=It,jt[Nt++]=Rn,Rn=e;var r=Kt;e=It;var i=32-wt(r)-1;r&=~(1<<i),n+=1;var c=32-wt(t)+i;if(30<c){var m=i-i%5;c=(r&(1<<m)-1).toString(32),r>>=m,i-=m,Kt=1<<32-wt(t)+i|n<<i|r,It=c+e}else Kt=1<<c|n<<i|r,It=e}function ps(e){e.return!==null&&(sn(e,1),Fd(e,1,0))}function fs(e){for(;e===il;)il=Qa[--Za],Qa[Za]=null,qr=Qa[--Za],Qa[Za]=null;for(;e===Rn;)Rn=jt[--Nt],jt[Nt]=null,It=jt[--Nt],jt[Nt]=null,Kt=jt[--Nt],jt[Nt]=null}function Jd(e,t){jt[Nt++]=Kt,jt[Nt++]=It,jt[Nt++]=Rn,Kt=t.id,It=t.overflow,Rn=e}var lt=null,Ue=null,Ce=!1,Dn=null,Ht=!1,ms=Error(s(519));function zn(e){var t=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Gr(zt(t,e)),ms}function Wd(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[ot]=e,t[ft]=r,n){case"dialog":we("cancel",t),we("close",t);break;case"iframe":case"object":case"embed":we("load",t);break;case"video":case"audio":for(n=0;n<uo.length;n++)we(uo[n],t);break;case"source":we("error",t);break;case"img":case"image":case"link":we("error",t),we("load",t);break;case"details":we("toggle",t);break;case"input":we("invalid",t),pd(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":we("invalid",t);break;case"textarea":we("invalid",t),md(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||r.suppressHydrationWarning===!0||bm(t.textContent,n)?(r.popover!=null&&(we("beforetoggle",t),we("toggle",t)),r.onScroll!=null&&we("scroll",t),r.onScrollEnd!=null&&we("scrollend",t),r.onClick!=null&&(t.onclick=rn),t=!0):t=!1,t||zn(e,!0)}function ep(e){for(lt=e.return;lt;)switch(lt.tag){case 5:case 31:case 13:Ht=!1;return;case 27:case 3:Ht=!0;return;default:lt=lt.return}}function Va(e){if(e!==lt)return!1;if(!Ce)return ep(e),Ce=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Rc(e.type,e.memoizedProps)),n=!n),n&&Ue&&zn(e),ep(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ue=Tm(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ue=Tm(e)}else t===27?(t=Ue,Kn(e.type)?(e=Hc,Hc=null,Ue=e):Ue=t):Ue=lt?Bt(e.stateNode.nextSibling):null;return!0}function fa(){Ue=lt=null,Ce=!1}function hs(){var e=Dn;return e!==null&&(vt===null?vt=e:vt.push.apply(vt,e),Dn=null),e}function Gr(e){Dn===null?Dn=[e]:Dn.push(e)}var gs=k(null),ma=null,cn=null;function jn(e,t,n){P(gs,t._currentValue),t._currentValue=n}function un(e){e._currentValue=gs.current,j(gs)}function bs(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function vs(e,t,n,r){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var c=i.dependencies;if(c!==null){var m=i.child;c=c.firstContext;e:for(;c!==null;){var b=c;c=i;for(var x=0;x<t.length;x++)if(b.context===t[x]){c.lanes|=n,b=c.alternate,b!==null&&(b.lanes|=n),bs(c.return,n,e),r||(m=null);break e}c=b.next}}else if(i.tag===18){if(m=i.return,m===null)throw Error(s(341));m.lanes|=n,c=m.alternate,c!==null&&(c.lanes|=n),bs(m,n,e),m=null}else m=i.child;if(m!==null)m.return=i;else for(m=i;m!==null;){if(m===e){m=null;break}if(i=m.sibling,i!==null){i.return=m.return,m=i;break}m=m.return}i=m}}function Ya(e,t,n,r){e=null;for(var i=t,c=!1;i!==null;){if(!c){if((i.flags&524288)!==0)c=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var m=i.alternate;if(m===null)throw Error(s(387));if(m=m.memoizedProps,m!==null){var b=i.type;_t(i.pendingProps.value,m.value)||(e!==null?e.push(b):e=[b])}}else if(i===ce.current){if(m=i.alternate,m===null)throw Error(s(387));m.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(go):e=[go])}i=i.return}e!==null&&vs(t,e,n,r),t.flags|=262144}function sl(e){for(e=e.firstContext;e!==null;){if(!_t(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ha(e){ma=e,cn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function it(e){return tp(ma,e)}function cl(e,t){return ma===null&&ha(e),tp(e,t)}function tp(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},cn===null){if(e===null)throw Error(s(308));cn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else cn=cn.next=t;return n}var Vb=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,r){e.push(r)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Yb=a.unstable_scheduleCallback,Kb=a.unstable_NormalPriority,Ie={$$typeof:F,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ys(){return{controller:new Vb,data:new Map,refCount:0}}function $r(e){e.refCount--,e.refCount===0&&Yb(Kb,function(){e.controller.abort()})}var Qr=null,xs=0,Ka=0,Ia=null;function Ib(e,t){if(Qr===null){var n=Qr=[];xs=0,Ka=_c(),Ia={status:"pending",value:void 0,then:function(r){n.push(r)}}}return xs++,t.then(np,np),t}function np(){if(--xs===0&&Qr!==null){Ia!==null&&(Ia.status="fulfilled");var e=Qr;Qr=null,Ka=0,Ia=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Xb(e,t){var n=[],r={status:"pending",value:null,reason:null,then:function(i){n.push(i)}};return e.then(function(){r.status="fulfilled",r.value=t;for(var i=0;i<n.length;i++)(0,n[i])(t)},function(i){for(r.status="rejected",r.reason=i,i=0;i<n.length;i++)(0,n[i])(void 0)}),r}var ap=T.S;T.S=function(e,t){qf=xt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Ib(e,t),ap!==null&&ap(e,t)};var ga=k(null);function ks(){var e=ga.current;return e!==null?e:Ne.pooledCache}function ul(e,t){t===null?P(ga,ga.current):P(ga,t.pool)}function rp(){var e=ks();return e===null?null:{parent:Ie._currentValue,pool:e}}var Xa=Error(s(460)),ws=Error(s(474)),dl=Error(s(542)),pl={then:function(){}};function op(e){return e=e.status,e==="fulfilled"||e==="rejected"}function lp(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(rn,rn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,sp(e),e;default:if(typeof t.status=="string")t.then(rn,rn);else{if(e=Ne,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status="pending",e.then(function(r){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=r}},function(r){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=r}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,sp(e),e}throw va=t,Xa}}function ba(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(va=n,Xa):n}}var va=null;function ip(){if(va===null)throw Error(s(459));var e=va;return va=null,e}function sp(e){if(e===Xa||e===dl)throw Error(s(483))}var Fa=null,Zr=0;function fl(e){var t=Zr;return Zr+=1,Fa===null&&(Fa=[]),lp(Fa,e,t)}function Vr(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function ml(e,t){throw t.$$typeof===C?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function cp(e){function t(S,w){if(e){var O=S.deletions;O===null?(S.deletions=[w],S.flags|=16):O.push(w)}}function n(S,w){if(!e)return null;for(;w!==null;)t(S,w),w=w.sibling;return null}function r(S){for(var w=new Map;S!==null;)S.key!==null?w.set(S.key,S):w.set(S.index,S),S=S.sibling;return w}function i(S,w){return S=ln(S,w),S.index=0,S.sibling=null,S}function c(S,w,O){return S.index=O,e?(O=S.alternate,O!==null?(O=O.index,O<w?(S.flags|=67108866,w):O):(S.flags|=67108866,w)):(S.flags|=1048576,w)}function m(S){return e&&S.alternate===null&&(S.flags|=67108866),S}function b(S,w,O,B){return w===null||w.tag!==6?(w=us(O,S.mode,B),w.return=S,w):(w=i(w,O),w.return=S,w)}function x(S,w,O,B){var ie=O.type;return ie===A?H(S,w,O.props.children,B,O.key):w!==null&&(w.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===G&&ba(ie)===w.type)?(w=i(w,O.props),Vr(w,O),w.return=S,w):(w=ll(O.type,O.key,O.props,null,S.mode,B),Vr(w,O),w.return=S,w)}function E(S,w,O,B){return w===null||w.tag!==4||w.stateNode.containerInfo!==O.containerInfo||w.stateNode.implementation!==O.implementation?(w=ds(O,S.mode,B),w.return=S,w):(w=i(w,O.children||[]),w.return=S,w)}function H(S,w,O,B,ie){return w===null||w.tag!==7?(w=pa(O,S.mode,B,ie),w.return=S,w):(w=i(w,O),w.return=S,w)}function q(S,w,O){if(typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint")return w=us(""+w,S.mode,O),w.return=S,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case D:return O=ll(w.type,w.key,w.props,null,S.mode,O),Vr(O,w),O.return=S,O;case N:return w=ds(w,S.mode,O),w.return=S,w;case G:return w=ba(w),q(S,w,O)}if(se(w)||te(w))return w=pa(w,S.mode,O,null),w.return=S,w;if(typeof w.then=="function")return q(S,fl(w),O);if(w.$$typeof===F)return q(S,cl(S,w),O);ml(S,w)}return null}function M(S,w,O,B){var ie=w!==null?w.key:null;if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return ie!==null?null:b(S,w,""+O,B);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case D:return O.key===ie?x(S,w,O,B):null;case N:return O.key===ie?E(S,w,O,B):null;case G:return O=ba(O),M(S,w,O,B)}if(se(O)||te(O))return ie!==null?null:H(S,w,O,B,null);if(typeof O.then=="function")return M(S,w,fl(O),B);if(O.$$typeof===F)return M(S,w,cl(S,O),B);ml(S,O)}return null}function R(S,w,O,B,ie){if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return S=S.get(O)||null,b(w,S,""+B,ie);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case D:return S=S.get(B.key===null?O:B.key)||null,x(w,S,B,ie);case N:return S=S.get(B.key===null?O:B.key)||null,E(w,S,B,ie);case G:return B=ba(B),R(S,w,O,B,ie)}if(se(B)||te(B))return S=S.get(O)||null,H(w,S,B,ie,null);if(typeof B.then=="function")return R(S,w,O,fl(B),ie);if(B.$$typeof===F)return R(S,w,O,cl(w,B),ie);ml(w,B)}return null}function ee(S,w,O,B){for(var ie=null,Oe=null,re=w,ve=w=0,Se=null;re!==null&&ve<O.length;ve++){re.index>ve?(Se=re,re=null):Se=re.sibling;var Ee=M(S,re,O[ve],B);if(Ee===null){re===null&&(re=Se);break}e&&re&&Ee.alternate===null&&t(S,re),w=c(Ee,w,ve),Oe===null?ie=Ee:Oe.sibling=Ee,Oe=Ee,re=Se}if(ve===O.length)return n(S,re),Ce&&sn(S,ve),ie;if(re===null){for(;ve<O.length;ve++)re=q(S,O[ve],B),re!==null&&(w=c(re,w,ve),Oe===null?ie=re:Oe.sibling=re,Oe=re);return Ce&&sn(S,ve),ie}for(re=r(re);ve<O.length;ve++)Se=R(re,S,ve,O[ve],B),Se!==null&&(e&&Se.alternate!==null&&re.delete(Se.key===null?ve:Se.key),w=c(Se,w,ve),Oe===null?ie=Se:Oe.sibling=Se,Oe=Se);return e&&re.forEach(function(Wn){return t(S,Wn)}),Ce&&sn(S,ve),ie}function de(S,w,O,B){if(O==null)throw Error(s(151));for(var ie=null,Oe=null,re=w,ve=w=0,Se=null,Ee=O.next();re!==null&&!Ee.done;ve++,Ee=O.next()){re.index>ve?(Se=re,re=null):Se=re.sibling;var Wn=M(S,re,Ee.value,B);if(Wn===null){re===null&&(re=Se);break}e&&re&&Wn.alternate===null&&t(S,re),w=c(Wn,w,ve),Oe===null?ie=Wn:Oe.sibling=Wn,Oe=Wn,re=Se}if(Ee.done)return n(S,re),Ce&&sn(S,ve),ie;if(re===null){for(;!Ee.done;ve++,Ee=O.next())Ee=q(S,Ee.value,B),Ee!==null&&(w=c(Ee,w,ve),Oe===null?ie=Ee:Oe.sibling=Ee,Oe=Ee);return Ce&&sn(S,ve),ie}for(re=r(re);!Ee.done;ve++,Ee=O.next())Ee=R(re,S,ve,Ee.value,B),Ee!==null&&(e&&Ee.alternate!==null&&re.delete(Ee.key===null?ve:Ee.key),w=c(Ee,w,ve),Oe===null?ie=Ee:Oe.sibling=Ee,Oe=Ee);return e&&re.forEach(function(iy){return t(S,iy)}),Ce&&sn(S,ve),ie}function je(S,w,O,B){if(typeof O=="object"&&O!==null&&O.type===A&&O.key===null&&(O=O.props.children),typeof O=="object"&&O!==null){switch(O.$$typeof){case D:e:{for(var ie=O.key;w!==null;){if(w.key===ie){if(ie=O.type,ie===A){if(w.tag===7){n(S,w.sibling),B=i(w,O.props.children),B.return=S,S=B;break e}}else if(w.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===G&&ba(ie)===w.type){n(S,w.sibling),B=i(w,O.props),Vr(B,O),B.return=S,S=B;break e}n(S,w);break}else t(S,w);w=w.sibling}O.type===A?(B=pa(O.props.children,S.mode,B,O.key),B.return=S,S=B):(B=ll(O.type,O.key,O.props,null,S.mode,B),Vr(B,O),B.return=S,S=B)}return m(S);case N:e:{for(ie=O.key;w!==null;){if(w.key===ie)if(w.tag===4&&w.stateNode.containerInfo===O.containerInfo&&w.stateNode.implementation===O.implementation){n(S,w.sibling),B=i(w,O.children||[]),B.return=S,S=B;break e}else{n(S,w);break}else t(S,w);w=w.sibling}B=ds(O,S.mode,B),B.return=S,S=B}return m(S);case G:return O=ba(O),je(S,w,O,B)}if(se(O))return ee(S,w,O,B);if(te(O)){if(ie=te(O),typeof ie!="function")throw Error(s(150));return O=ie.call(O),de(S,w,O,B)}if(typeof O.then=="function")return je(S,w,fl(O),B);if(O.$$typeof===F)return je(S,w,cl(S,O),B);ml(S,O)}return typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint"?(O=""+O,w!==null&&w.tag===6?(n(S,w.sibling),B=i(w,O),B.return=S,S=B):(n(S,w),B=us(O,S.mode,B),B.return=S,S=B),m(S)):n(S,w)}return function(S,w,O,B){try{Zr=0;var ie=je(S,w,O,B);return Fa=null,ie}catch(re){if(re===Xa||re===dl)throw re;var Oe=St(29,re,null,S.mode);return Oe.lanes=B,Oe.return=S,Oe}}}var ya=cp(!0),up=cp(!1),Nn=!1;function _s(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ss(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Hn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Un(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Me&2)!==0){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=ol(e),Yd(e,null,n),t}return rl(e,r,t,n),ol(e)}function Yr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,td(e,n)}}function Cs(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,c=null;if(n=n.firstBaseUpdate,n!==null){do{var m={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};c===null?i=c=m:c=c.next=m,n=n.next}while(n!==null);c===null?i=c=t:c=c.next=t}else i=c=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:c,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ts=!1;function Kr(){if(Ts){var e=Ia;if(e!==null)throw e}}function Ir(e,t,n,r){Ts=!1;var i=e.updateQueue;Nn=!1;var c=i.firstBaseUpdate,m=i.lastBaseUpdate,b=i.shared.pending;if(b!==null){i.shared.pending=null;var x=b,E=x.next;x.next=null,m===null?c=E:m.next=E,m=x;var H=e.alternate;H!==null&&(H=H.updateQueue,b=H.lastBaseUpdate,b!==m&&(b===null?H.firstBaseUpdate=E:b.next=E,H.lastBaseUpdate=x))}if(c!==null){var q=i.baseState;m=0,H=E=x=null,b=c;do{var M=b.lane&-536870913,R=M!==b.lane;if(R?(_e&M)===M:(r&M)===M){M!==0&&M===Ka&&(Ts=!0),H!==null&&(H=H.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var ee=e,de=b;M=t;var je=n;switch(de.tag){case 1:if(ee=de.payload,typeof ee=="function"){q=ee.call(je,q,M);break e}q=ee;break e;case 3:ee.flags=ee.flags&-65537|128;case 0:if(ee=de.payload,M=typeof ee=="function"?ee.call(je,q,M):ee,M==null)break e;q=y({},q,M);break e;case 2:Nn=!0}}M=b.callback,M!==null&&(e.flags|=64,R&&(e.flags|=8192),R=i.callbacks,R===null?i.callbacks=[M]:R.push(M))}else R={lane:M,tag:b.tag,payload:b.payload,callback:b.callback,next:null},H===null?(E=H=R,x=q):H=H.next=R,m|=M;if(b=b.next,b===null){if(b=i.shared.pending,b===null)break;R=b,b=R.next,R.next=null,i.lastBaseUpdate=R,i.shared.pending=null}}while(!0);H===null&&(x=q),i.baseState=x,i.firstBaseUpdate=E,i.lastBaseUpdate=H,c===null&&(i.shared.lanes=0),$n|=m,e.lanes=m,e.memoizedState=q}}function dp(e,t){if(typeof e!="function")throw Error(s(191,e));e.call(t)}function pp(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)dp(n[e],t)}var Ja=k(null),hl=k(0);function fp(e,t){e=yn,P(hl,e),P(Ja,t),yn=e|t.baseLanes}function Os(){P(hl,yn),P(Ja,Ja.current)}function Es(){yn=hl.current,j(Ja),j(hl)}var Ct=k(null),Ut=null;function Bn(e){var t=e.alternate;P(Ve,Ve.current&1),P(Ct,e),Ut===null&&(t===null||Ja.current!==null||t.memoizedState!==null)&&(Ut=e)}function As(e){P(Ve,Ve.current),P(Ct,e),Ut===null&&(Ut=e)}function mp(e){e.tag===22?(P(Ve,Ve.current),P(Ct,e),Ut===null&&(Ut=e)):Pn()}function Pn(){P(Ve,Ve.current),P(Ct,Ct.current)}function Tt(e){j(Ct),Ut===e&&(Ut=null),j(Ve)}var Ve=k(0);function gl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||jc(n)||Nc(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var dn=0,ge=null,De=null,Xe=null,bl=!1,Wa=!1,xa=!1,vl=0,Xr=0,er=null,Fb=0;function Ge(){throw Error(s(321))}function Ms(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!_t(e[n],t[n]))return!1;return!0}function Ls(e,t,n,r,i,c){return dn=c,ge=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,T.H=e===null||e.memoizedState===null?Fp:Vs,xa=!1,c=n(r,i),xa=!1,Wa&&(c=gp(t,n,r,i)),hp(e),c}function hp(e){T.H=Wr;var t=De!==null&&De.next!==null;if(dn=0,Xe=De=ge=null,bl=!1,Xr=0,er=null,t)throw Error(s(300));e===null||Fe||(e=e.dependencies,e!==null&&sl(e)&&(Fe=!0))}function gp(e,t,n,r){ge=e;var i=0;do{if(Wa&&(er=null),Xr=0,Wa=!1,25<=i)throw Error(s(301));if(i+=1,Xe=De=null,e.updateQueue!=null){var c=e.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}T.H=Jp,c=t(n,r)}while(Wa);return c}function Jb(){var e=T.H,t=e.useState()[0];return t=typeof t.then=="function"?Fr(t):t,e=e.useState()[0],(De!==null?De.memoizedState:null)!==e&&(ge.flags|=1024),t}function Rs(){var e=vl!==0;return vl=0,e}function Ds(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function zs(e){if(bl){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}bl=!1}dn=0,Xe=De=ge=null,Wa=!1,Xr=vl=0,er=null}function dt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xe===null?ge.memoizedState=Xe=e:Xe=Xe.next=e,Xe}function Ye(){if(De===null){var e=ge.alternate;e=e!==null?e.memoizedState:null}else e=De.next;var t=Xe===null?ge.memoizedState:Xe.next;if(t!==null)Xe=t,De=e;else{if(e===null)throw ge.alternate===null?Error(s(467)):Error(s(310));De=e,e={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},Xe===null?ge.memoizedState=Xe=e:Xe=Xe.next=e}return Xe}function yl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Fr(e){var t=Xr;return Xr+=1,er===null&&(er=[]),e=lp(er,e,t),t=ge,(Xe===null?t.memoizedState:Xe.next)===null&&(t=t.alternate,T.H=t===null||t.memoizedState===null?Fp:Vs),e}function xl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Fr(e);if(e.$$typeof===F)return it(e)}throw Error(s(438,String(e)))}function js(e){var t=null,n=ge.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=ge.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=yl(),ge.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=oe;return t.index++,n}function pn(e,t){return typeof t=="function"?t(e):t}function kl(e){var t=Ye();return Ns(t,De,e)}function Ns(e,t,n){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=n;var i=e.baseQueue,c=r.pending;if(c!==null){if(i!==null){var m=i.next;i.next=c.next,c.next=m}t.baseQueue=i=c,r.pending=null}if(c=e.baseState,i===null)e.memoizedState=c;else{t=i.next;var b=m=null,x=null,E=t,H=!1;do{var q=E.lane&-536870913;if(q!==E.lane?(_e&q)===q:(dn&q)===q){var M=E.revertLane;if(M===0)x!==null&&(x=x.next={lane:0,revertLane:0,gesture:null,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null}),q===Ka&&(H=!0);else if((dn&M)===M){E=E.next,M===Ka&&(H=!0);continue}else q={lane:0,revertLane:E.revertLane,gesture:null,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},x===null?(b=x=q,m=c):x=x.next=q,ge.lanes|=M,$n|=M;q=E.action,xa&&n(c,q),c=E.hasEagerState?E.eagerState:n(c,q)}else M={lane:q,revertLane:E.revertLane,gesture:E.gesture,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},x===null?(b=x=M,m=c):x=x.next=M,ge.lanes|=q,$n|=q;E=E.next}while(E!==null&&E!==t);if(x===null?m=c:x.next=b,!_t(c,e.memoizedState)&&(Fe=!0,H&&(n=Ia,n!==null)))throw n;e.memoizedState=c,e.baseState=m,e.baseQueue=x,r.lastRenderedState=c}return i===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Hs(e){var t=Ye(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,c=t.memoizedState;if(i!==null){n.pending=null;var m=i=i.next;do c=e(c,m.action),m=m.next;while(m!==i);_t(c,t.memoizedState)||(Fe=!0),t.memoizedState=c,t.baseQueue===null&&(t.baseState=c),n.lastRenderedState=c}return[c,r]}function bp(e,t,n){var r=ge,i=Ye(),c=Ce;if(c){if(n===void 0)throw Error(s(407));n=n()}else n=t();var m=!_t((De||i).memoizedState,n);if(m&&(i.memoizedState=n,Fe=!0),i=i.queue,Ps(xp.bind(null,r,i,e),[e]),i.getSnapshot!==t||m||Xe!==null&&Xe.memoizedState.tag&1){if(r.flags|=2048,tr(9,{destroy:void 0},yp.bind(null,r,i,n,t),null),Ne===null)throw Error(s(349));c||(dn&127)!==0||vp(r,t,n)}return n}function vp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ge.updateQueue,t===null?(t=yl(),ge.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function yp(e,t,n,r){t.value=n,t.getSnapshot=r,kp(t)&&wp(e)}function xp(e,t,n){return n(function(){kp(t)&&wp(e)})}function kp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!_t(e,n)}catch{return!0}}function wp(e){var t=da(e,2);t!==null&&yt(t,e,2)}function Us(e){var t=dt();if(typeof e=="function"){var n=e;if(e=n(),xa){An(!0);try{n()}finally{An(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:pn,lastRenderedState:e},t}function _p(e,t,n,r){return e.baseState=n,Ns(e,De,typeof r=="function"?r:pn)}function Wb(e,t,n,r,i){if(Sl(e))throw Error(s(485));if(e=t.action,e!==null){var c={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(m){c.listeners.push(m)}};T.T!==null?n(!0):c.isTransition=!1,r(c),n=t.pending,n===null?(c.next=t.pending=c,Sp(t,c)):(c.next=n.next,t.pending=n.next=c)}}function Sp(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var c=T.T,m={};T.T=m;try{var b=n(i,r),x=T.S;x!==null&&x(m,b),Cp(e,t,b)}catch(E){Bs(e,t,E)}finally{c!==null&&m.types!==null&&(c.types=m.types),T.T=c}}else try{c=n(i,r),Cp(e,t,c)}catch(E){Bs(e,t,E)}}function Cp(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(r){Tp(e,t,r)},function(r){return Bs(e,t,r)}):Tp(e,t,n)}function Tp(e,t,n){t.status="fulfilled",t.value=n,Op(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Sp(e,n)))}function Bs(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status="rejected",t.reason=n,Op(t),t=t.next;while(t!==r)}e.action=null}function Op(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Ep(e,t){return t}function Ap(e,t){if(Ce){var n=Ne.formState;if(n!==null){e:{var r=ge;if(Ce){if(Ue){t:{for(var i=Ue,c=Ht;i.nodeType!==8;){if(!c){i=null;break t}if(i=Bt(i.nextSibling),i===null){i=null;break t}}c=i.data,i=c==="F!"||c==="F"?i:null}if(i){Ue=Bt(i.nextSibling),r=i.data==="F!";break e}}zn(r)}r=!1}r&&(t=n[0])}}return n=dt(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ep,lastRenderedState:t},n.queue=r,n=Kp.bind(null,ge,r),r.dispatch=n,r=Us(!1),c=Zs.bind(null,ge,!1,r.queue),r=dt(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Wb.bind(null,ge,i,c,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function Mp(e){var t=Ye();return Lp(t,De,e)}function Lp(e,t,n){if(t=Ns(e,t,Ep)[0],e=kl(pn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var r=Fr(t)}catch(m){throw m===Xa?dl:m}else r=t;t=Ye();var i=t.queue,c=i.dispatch;return n!==t.memoizedState&&(ge.flags|=2048,tr(9,{destroy:void 0},ev.bind(null,i,n),null)),[r,c,e]}function ev(e,t){e.action=t}function Rp(e){var t=Ye(),n=De;if(n!==null)return Lp(t,n,e);Ye(),t=t.memoizedState,n=Ye();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function tr(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=ge.updateQueue,t===null&&(t=yl(),ge.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Dp(){return Ye().memoizedState}function wl(e,t,n,r){var i=dt();ge.flags|=e,i.memoizedState=tr(1|t,{destroy:void 0},n,r===void 0?null:r)}function _l(e,t,n,r){var i=Ye();r=r===void 0?null:r;var c=i.memoizedState.inst;De!==null&&r!==null&&Ms(r,De.memoizedState.deps)?i.memoizedState=tr(t,c,n,r):(ge.flags|=e,i.memoizedState=tr(1|t,c,n,r))}function zp(e,t){wl(8390656,8,e,t)}function Ps(e,t){_l(2048,8,e,t)}function tv(e){ge.flags|=4;var t=ge.updateQueue;if(t===null)t=yl(),ge.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function jp(e){var t=Ye().memoizedState;return tv({ref:t,nextImpl:e}),function(){if((Me&2)!==0)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function Np(e,t){return _l(4,2,e,t)}function Hp(e,t){return _l(4,4,e,t)}function Up(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Bp(e,t,n){n=n!=null?n.concat([e]):null,_l(4,4,Up.bind(null,t,e),n)}function qs(){}function Pp(e,t){var n=Ye();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Ms(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function qp(e,t){var n=Ye();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Ms(t,r[1]))return r[0];if(r=e(),xa){An(!0);try{e()}finally{An(!1)}}return n.memoizedState=[r,t],r}function Gs(e,t,n){return n===void 0||(dn&1073741824)!==0&&(_e&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=$f(),ge.lanes|=e,$n|=e,n)}function Gp(e,t,n,r){return _t(n,t)?n:Ja.current!==null?(e=Gs(e,n,r),_t(e,t)||(Fe=!0),e):(dn&42)===0||(dn&1073741824)!==0&&(_e&261930)===0?(Fe=!0,e.memoizedState=n):(e=$f(),ge.lanes|=e,$n|=e,t)}function $p(e,t,n,r,i){var c=$.p;$.p=c!==0&&8>c?c:8;var m=T.T,b={};T.T=b,Zs(e,!1,t,n);try{var x=i(),E=T.S;if(E!==null&&E(b,x),x!==null&&typeof x=="object"&&typeof x.then=="function"){var H=Xb(x,r);Jr(e,t,H,At(e))}else Jr(e,t,r,At(e))}catch(q){Jr(e,t,{then:function(){},status:"rejected",reason:q},At())}finally{$.p=c,m!==null&&b.types!==null&&(m.types=b.types),T.T=m}}function nv(){}function $s(e,t,n,r){if(e.tag!==5)throw Error(s(476));var i=Qp(e).queue;$p(e,i,t,U,n===null?nv:function(){return Zp(e),n(r)})}function Qp(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:U,baseState:U,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pn,lastRenderedState:U},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Zp(e){var t=Qp(e);t.next===null&&(t=e.alternate.memoizedState),Jr(e,t.next.queue,{},At())}function Qs(){return it(go)}function Vp(){return Ye().memoizedState}function Yp(){return Ye().memoizedState}function av(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=At();e=Hn(n);var r=Un(t,e,n);r!==null&&(yt(r,t,n),Yr(r,t,n)),t={cache:ys()},e.payload=t;return}t=t.return}}function rv(e,t,n){var r=At();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Sl(e)?Ip(t,n):(n=ss(e,t,n,r),n!==null&&(yt(n,e,r),Xp(n,t,r)))}function Kp(e,t,n){var r=At();Jr(e,t,n,r)}function Jr(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Sl(e))Ip(t,i);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=t.lastRenderedReducer,c!==null))try{var m=t.lastRenderedState,b=c(m,n);if(i.hasEagerState=!0,i.eagerState=b,_t(b,m))return rl(e,t,i,0),Ne===null&&al(),!1}catch{}if(n=ss(e,t,i,r),n!==null)return yt(n,e,r),Xp(n,t,r),!0}return!1}function Zs(e,t,n,r){if(r={lane:2,revertLane:_c(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Sl(e)){if(t)throw Error(s(479))}else t=ss(e,n,r,2),t!==null&&yt(t,e,2)}function Sl(e){var t=e.alternate;return e===ge||t!==null&&t===ge}function Ip(e,t){Wa=bl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Xp(e,t,n){if((n&4194048)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,td(e,n)}}var Wr={readContext:it,use:xl,useCallback:Ge,useContext:Ge,useEffect:Ge,useImperativeHandle:Ge,useLayoutEffect:Ge,useInsertionEffect:Ge,useMemo:Ge,useReducer:Ge,useRef:Ge,useState:Ge,useDebugValue:Ge,useDeferredValue:Ge,useTransition:Ge,useSyncExternalStore:Ge,useId:Ge,useHostTransitionStatus:Ge,useFormState:Ge,useActionState:Ge,useOptimistic:Ge,useMemoCache:Ge,useCacheRefresh:Ge};Wr.useEffectEvent=Ge;var Fp={readContext:it,use:xl,useCallback:function(e,t){return dt().memoizedState=[e,t===void 0?null:t],e},useContext:it,useEffect:zp,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,wl(4194308,4,Up.bind(null,t,e),n)},useLayoutEffect:function(e,t){return wl(4194308,4,e,t)},useInsertionEffect:function(e,t){wl(4,2,e,t)},useMemo:function(e,t){var n=dt();t=t===void 0?null:t;var r=e();if(xa){An(!0);try{e()}finally{An(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=dt();if(n!==void 0){var i=n(t);if(xa){An(!0);try{n(t)}finally{An(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=rv.bind(null,ge,e),[r.memoizedState,e]},useRef:function(e){var t=dt();return e={current:e},t.memoizedState=e},useState:function(e){e=Us(e);var t=e.queue,n=Kp.bind(null,ge,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:qs,useDeferredValue:function(e,t){var n=dt();return Gs(n,e,t)},useTransition:function(){var e=Us(!1);return e=$p.bind(null,ge,e.queue,!0,!1),dt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=ge,i=dt();if(Ce){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),Ne===null)throw Error(s(349));(_e&127)!==0||vp(r,t,n)}i.memoizedState=n;var c={value:n,getSnapshot:t};return i.queue=c,zp(xp.bind(null,r,c,e),[e]),r.flags|=2048,tr(9,{destroy:void 0},yp.bind(null,r,c,n,t),null),n},useId:function(){var e=dt(),t=Ne.identifierPrefix;if(Ce){var n=It,r=Kt;n=(r&~(1<<32-wt(r)-1)).toString(32)+n,t="_"+t+"R_"+n,n=vl++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=Fb++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Qs,useFormState:Ap,useActionState:Ap,useOptimistic:function(e){var t=dt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Zs.bind(null,ge,!0,n),n.dispatch=t,[e,t]},useMemoCache:js,useCacheRefresh:function(){return dt().memoizedState=av.bind(null,ge)},useEffectEvent:function(e){var t=dt(),n={impl:e};return t.memoizedState=n,function(){if((Me&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}},Vs={readContext:it,use:xl,useCallback:Pp,useContext:it,useEffect:Ps,useImperativeHandle:Bp,useInsertionEffect:Np,useLayoutEffect:Hp,useMemo:qp,useReducer:kl,useRef:Dp,useState:function(){return kl(pn)},useDebugValue:qs,useDeferredValue:function(e,t){var n=Ye();return Gp(n,De.memoizedState,e,t)},useTransition:function(){var e=kl(pn)[0],t=Ye().memoizedState;return[typeof e=="boolean"?e:Fr(e),t]},useSyncExternalStore:bp,useId:Vp,useHostTransitionStatus:Qs,useFormState:Mp,useActionState:Mp,useOptimistic:function(e,t){var n=Ye();return _p(n,De,e,t)},useMemoCache:js,useCacheRefresh:Yp};Vs.useEffectEvent=jp;var Jp={readContext:it,use:xl,useCallback:Pp,useContext:it,useEffect:Ps,useImperativeHandle:Bp,useInsertionEffect:Np,useLayoutEffect:Hp,useMemo:qp,useReducer:Hs,useRef:Dp,useState:function(){return Hs(pn)},useDebugValue:qs,useDeferredValue:function(e,t){var n=Ye();return De===null?Gs(n,e,t):Gp(n,De.memoizedState,e,t)},useTransition:function(){var e=Hs(pn)[0],t=Ye().memoizedState;return[typeof e=="boolean"?e:Fr(e),t]},useSyncExternalStore:bp,useId:Vp,useHostTransitionStatus:Qs,useFormState:Rp,useActionState:Rp,useOptimistic:function(e,t){var n=Ye();return De!==null?_p(n,De,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:js,useCacheRefresh:Yp};Jp.useEffectEvent=jp;function Ys(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:y({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ks={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=At(),i=Hn(r);i.payload=t,n!=null&&(i.callback=n),t=Un(e,i,r),t!==null&&(yt(t,e,r),Yr(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=At(),i=Hn(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Un(e,i,r),t!==null&&(yt(t,e,r),Yr(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=At(),r=Hn(n);r.tag=2,t!=null&&(r.callback=t),t=Un(e,r,n),t!==null&&(yt(t,e,n),Yr(t,e,n))}};function Wp(e,t,n,r,i,c,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,c,m):t.prototype&&t.prototype.isPureReactComponent?!Br(n,r)||!Br(i,c):!0}function ef(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ks.enqueueReplaceState(t,t.state,null)}function ka(e,t){var n=t;if("ref"in t){n={};for(var r in t)r!=="ref"&&(n[r]=t[r])}if(e=e.defaultProps){n===t&&(n=y({},n));for(var i in e)n[i]===void 0&&(n[i]=e[i])}return n}function tf(e){nl(e)}function nf(e){console.error(e)}function af(e){nl(e)}function Cl(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(r){setTimeout(function(){throw r})}}function rf(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function Is(e,t,n){return n=Hn(n),n.tag=3,n.payload={element:null},n.callback=function(){Cl(e,t)},n}function of(e){return e=Hn(e),e.tag=3,e}function lf(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var c=r.value;e.payload=function(){return i(c)},e.callback=function(){rf(t,n,r)}}var m=n.stateNode;m!==null&&typeof m.componentDidCatch=="function"&&(e.callback=function(){rf(t,n,r),typeof i!="function"&&(Qn===null?Qn=new Set([this]):Qn.add(this));var b=r.stack;this.componentDidCatch(r.value,{componentStack:b!==null?b:""})})}function ov(e,t,n,r,i){if(n.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(t=n.alternate,t!==null&&Ya(t,n,i,!0),n=Ct.current,n!==null){switch(n.tag){case 31:case 13:return Ut===null?Hl():n.alternate===null&&$e===0&&($e=3),n.flags&=-257,n.flags|=65536,n.lanes=i,r===pl?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),xc(e,r,i)),!1;case 22:return n.flags|=65536,r===pl?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),xc(e,r,i)),!1}throw Error(s(435,n.tag))}return xc(e,r,i),Hl(),!1}if(Ce)return t=Ct.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,r!==ms&&(e=Error(s(422),{cause:r}),Gr(zt(e,n)))):(r!==ms&&(t=Error(s(423),{cause:r}),Gr(zt(t,n))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,r=zt(r,n),i=Is(e.stateNode,r,i),Cs(e,i),$e!==4&&($e=2)),!1;var c=Error(s(520),{cause:r});if(c=zt(c,n),io===null?io=[c]:io.push(c),$e!==4&&($e=2),t===null)return!0;r=zt(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,e=Is(n.stateNode,r,e),Cs(n,e),!1;case 1:if(t=n.type,c=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(Qn===null||!Qn.has(c))))return n.flags|=65536,i&=-i,n.lanes|=i,i=of(i),lf(i,e,n,r),Cs(n,i),!1}n=n.return}while(n!==null);return!1}var Xs=Error(s(461)),Fe=!1;function st(e,t,n,r){t.child=e===null?up(t,null,n,r):ya(t,e.child,n,r)}function sf(e,t,n,r,i){n=n.render;var c=t.ref;if("ref"in r){var m={};for(var b in r)b!=="ref"&&(m[b]=r[b])}else m=r;return ha(t),r=Ls(e,t,n,m,c,i),b=Rs(),e!==null&&!Fe?(Ds(e,t,i),fn(e,t,i)):(Ce&&b&&ps(t),t.flags|=1,st(e,t,r,i),t.child)}function cf(e,t,n,r,i){if(e===null){var c=n.type;return typeof c=="function"&&!cs(c)&&c.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=c,uf(e,t,c,r,i)):(e=ll(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(c=e.child,!rc(e,i)){var m=c.memoizedProps;if(n=n.compare,n=n!==null?n:Br,n(m,r)&&e.ref===t.ref)return fn(e,t,i)}return t.flags|=1,e=ln(c,r),e.ref=t.ref,e.return=t,t.child=e}function uf(e,t,n,r,i){if(e!==null){var c=e.memoizedProps;if(Br(c,r)&&e.ref===t.ref)if(Fe=!1,t.pendingProps=r=c,rc(e,i))(e.flags&131072)!==0&&(Fe=!0);else return t.lanes=e.lanes,fn(e,t,i)}return Fs(e,t,n,r,i)}function df(e,t,n,r){var i=r.children,c=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((t.flags&128)!==0){if(c=c!==null?c.baseLanes|n:n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~c}else r=0,t.child=null;return pf(e,t,c,n,r)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ul(t,c!==null?c.cachePool:null),c!==null?fp(t,c):Os(),mp(t);else return r=t.lanes=536870912,pf(e,t,c!==null?c.baseLanes|n:n,n,r)}else c!==null?(ul(t,c.cachePool),fp(t,c),Pn(),t.memoizedState=null):(e!==null&&ul(t,null),Os(),Pn());return st(e,t,i,n),t.child}function eo(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function pf(e,t,n,r,i){var c=ks();return c=c===null?null:{parent:Ie._currentValue,pool:c},t.memoizedState={baseLanes:n,cachePool:c},e!==null&&ul(t,null),Os(),mp(t),e!==null&&Ya(e,t,r,!0),t.childLanes=i,null}function Tl(e,t){return t=El({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function ff(e,t,n){return ya(t,e.child,null,n),e=Tl(t,t.pendingProps),e.flags|=2,Tt(t),t.memoizedState=null,e}function lv(e,t,n){var r=t.pendingProps,i=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Ce){if(r.mode==="hidden")return e=Tl(t,r),t.lanes=536870912,eo(null,e);if(As(t),(e=Ue)?(e=Cm(e,Ht),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Rn!==null?{id:Kt,overflow:It}:null,retryLane:536870912,hydrationErrors:null},n=Id(e),n.return=t,t.child=n,lt=t,Ue=null)):e=null,e===null)throw zn(t);return t.lanes=536870912,null}return Tl(t,r)}var c=e.memoizedState;if(c!==null){var m=c.dehydrated;if(As(t),i)if(t.flags&256)t.flags&=-257,t=ff(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558));else if(Fe||Ya(e,t,n,!1),i=(n&e.childLanes)!==0,Fe||i){if(r=Ne,r!==null&&(m=nd(r,n),m!==0&&m!==c.retryLane))throw c.retryLane=m,da(e,m),yt(r,e,m),Xs;Hl(),t=ff(e,t,n)}else e=c.treeContext,Ue=Bt(m.nextSibling),lt=t,Ce=!0,Dn=null,Ht=!1,e!==null&&Jd(t,e),t=Tl(t,r),t.flags|=4096;return t}return e=ln(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Ol(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(s(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Fs(e,t,n,r,i){return ha(t),n=Ls(e,t,n,r,void 0,i),r=Rs(),e!==null&&!Fe?(Ds(e,t,i),fn(e,t,i)):(Ce&&r&&ps(t),t.flags|=1,st(e,t,n,i),t.child)}function mf(e,t,n,r,i,c){return ha(t),t.updateQueue=null,n=gp(t,r,n,i),hp(e),r=Rs(),e!==null&&!Fe?(Ds(e,t,c),fn(e,t,c)):(Ce&&r&&ps(t),t.flags|=1,st(e,t,n,c),t.child)}function hf(e,t,n,r,i){if(ha(t),t.stateNode===null){var c=$a,m=n.contextType;typeof m=="object"&&m!==null&&(c=it(m)),c=new n(r,c),t.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=Ks,t.stateNode=c,c._reactInternals=t,c=t.stateNode,c.props=r,c.state=t.memoizedState,c.refs={},_s(t),m=n.contextType,c.context=typeof m=="object"&&m!==null?it(m):$a,c.state=t.memoizedState,m=n.getDerivedStateFromProps,typeof m=="function"&&(Ys(t,n,m,r),c.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(m=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),m!==c.state&&Ks.enqueueReplaceState(c,c.state,null),Ir(t,r,c,i),Kr(),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308),r=!0}else if(e===null){c=t.stateNode;var b=t.memoizedProps,x=ka(n,b);c.props=x;var E=c.context,H=n.contextType;m=$a,typeof H=="object"&&H!==null&&(m=it(H));var q=n.getDerivedStateFromProps;H=typeof q=="function"||typeof c.getSnapshotBeforeUpdate=="function",b=t.pendingProps!==b,H||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(b||E!==m)&&ef(t,c,r,m),Nn=!1;var M=t.memoizedState;c.state=M,Ir(t,r,c,i),Kr(),E=t.memoizedState,b||M!==E||Nn?(typeof q=="function"&&(Ys(t,n,q,r),E=t.memoizedState),(x=Nn||Wp(t,n,x,r,M,E,m))?(H||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(t.flags|=4194308)):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=E),c.props=r,c.state=E,c.context=m,r=x):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{c=t.stateNode,Ss(e,t),m=t.memoizedProps,H=ka(n,m),c.props=H,q=t.pendingProps,M=c.context,E=n.contextType,x=$a,typeof E=="object"&&E!==null&&(x=it(E)),b=n.getDerivedStateFromProps,(E=typeof b=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(m!==q||M!==x)&&ef(t,c,r,x),Nn=!1,M=t.memoizedState,c.state=M,Ir(t,r,c,i),Kr();var R=t.memoizedState;m!==q||M!==R||Nn||e!==null&&e.dependencies!==null&&sl(e.dependencies)?(typeof b=="function"&&(Ys(t,n,b,r),R=t.memoizedState),(H=Nn||Wp(t,n,H,r,M,R,x)||e!==null&&e.dependencies!==null&&sl(e.dependencies))?(E||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(r,R,x),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(r,R,x)),typeof c.componentDidUpdate=="function"&&(t.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof c.componentDidUpdate!="function"||m===e.memoizedProps&&M===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&M===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=R),c.props=r,c.state=R,c.context=x,r=H):(typeof c.componentDidUpdate!="function"||m===e.memoizedProps&&M===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&M===e.memoizedState||(t.flags|=1024),r=!1)}return c=r,Ol(e,t),r=(t.flags&128)!==0,c||r?(c=t.stateNode,n=r&&typeof n.getDerivedStateFromError!="function"?null:c.render(),t.flags|=1,e!==null&&r?(t.child=ya(t,e.child,null,i),t.child=ya(t,null,n,i)):st(e,t,n,i),t.memoizedState=c.state,e=t.child):e=fn(e,t,i),e}function gf(e,t,n,r){return fa(),t.flags|=256,st(e,t,n,r),t.child}var Js={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ws(e){return{baseLanes:e,cachePool:rp()}}function ec(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Et),e}function bf(e,t,n){var r=t.pendingProps,i=!1,c=(t.flags&128)!==0,m;if((m=c)||(m=e!==null&&e.memoizedState===null?!1:(Ve.current&2)!==0),m&&(i=!0,t.flags&=-129),m=(t.flags&32)!==0,t.flags&=-33,e===null){if(Ce){if(i?Bn(t):Pn(),(e=Ue)?(e=Cm(e,Ht),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Rn!==null?{id:Kt,overflow:It}:null,retryLane:536870912,hydrationErrors:null},n=Id(e),n.return=t,t.child=n,lt=t,Ue=null)):e=null,e===null)throw zn(t);return Nc(e)?t.lanes=32:t.lanes=536870912,null}var b=r.children;return r=r.fallback,i?(Pn(),i=t.mode,b=El({mode:"hidden",children:b},i),r=pa(r,i,n,null),b.return=t,r.return=t,b.sibling=r,t.child=b,r=t.child,r.memoizedState=Ws(n),r.childLanes=ec(e,m,n),t.memoizedState=Js,eo(null,r)):(Bn(t),tc(t,b))}var x=e.memoizedState;if(x!==null&&(b=x.dehydrated,b!==null)){if(c)t.flags&256?(Bn(t),t.flags&=-257,t=nc(e,t,n)):t.memoizedState!==null?(Pn(),t.child=e.child,t.flags|=128,t=null):(Pn(),b=r.fallback,i=t.mode,r=El({mode:"visible",children:r.children},i),b=pa(b,i,n,null),b.flags|=2,r.return=t,b.return=t,r.sibling=b,t.child=r,ya(t,e.child,null,n),r=t.child,r.memoizedState=Ws(n),r.childLanes=ec(e,m,n),t.memoizedState=Js,t=eo(null,r));else if(Bn(t),Nc(b)){if(m=b.nextSibling&&b.nextSibling.dataset,m)var E=m.dgst;m=E,r=Error(s(419)),r.stack="",r.digest=m,Gr({value:r,source:null,stack:null}),t=nc(e,t,n)}else if(Fe||Ya(e,t,n,!1),m=(n&e.childLanes)!==0,Fe||m){if(m=Ne,m!==null&&(r=nd(m,n),r!==0&&r!==x.retryLane))throw x.retryLane=r,da(e,r),yt(m,e,r),Xs;jc(b)||Hl(),t=nc(e,t,n)}else jc(b)?(t.flags|=192,t.child=e.child,t=null):(e=x.treeContext,Ue=Bt(b.nextSibling),lt=t,Ce=!0,Dn=null,Ht=!1,e!==null&&Jd(t,e),t=tc(t,r.children),t.flags|=4096);return t}return i?(Pn(),b=r.fallback,i=t.mode,x=e.child,E=x.sibling,r=ln(x,{mode:"hidden",children:r.children}),r.subtreeFlags=x.subtreeFlags&65011712,E!==null?b=ln(E,b):(b=pa(b,i,n,null),b.flags|=2),b.return=t,r.return=t,r.sibling=b,t.child=r,eo(null,r),r=t.child,b=e.child.memoizedState,b===null?b=Ws(n):(i=b.cachePool,i!==null?(x=Ie._currentValue,i=i.parent!==x?{parent:x,pool:x}:i):i=rp(),b={baseLanes:b.baseLanes|n,cachePool:i}),r.memoizedState=b,r.childLanes=ec(e,m,n),t.memoizedState=Js,eo(e.child,r)):(Bn(t),n=e.child,e=n.sibling,n=ln(n,{mode:"visible",children:r.children}),n.return=t,n.sibling=null,e!==null&&(m=t.deletions,m===null?(t.deletions=[e],t.flags|=16):m.push(e)),t.child=n,t.memoizedState=null,n)}function tc(e,t){return t=El({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function El(e,t){return e=St(22,e,null,t),e.lanes=0,e}function nc(e,t,n){return ya(t,e.child,null,n),e=tc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function vf(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),bs(e.return,t,n)}function ac(e,t,n,r,i,c){var m=e.memoizedState;m===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:c}:(m.isBackwards=t,m.rendering=null,m.renderingStartTime=0,m.last=r,m.tail=n,m.tailMode=i,m.treeForkCount=c)}function yf(e,t,n){var r=t.pendingProps,i=r.revealOrder,c=r.tail;r=r.children;var m=Ve.current,b=(m&2)!==0;if(b?(m=m&1|2,t.flags|=128):m&=1,P(Ve,m),st(e,t,r,n),r=Ce?qr:0,!b&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&vf(e,n,t);else if(e.tag===19)vf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&gl(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ac(t,!1,i,n,c,r);break;case"backwards":case"unstable_legacy-backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&gl(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ac(t,!0,n,null,c,r);break;case"together":ac(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function fn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),$n|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Ya(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=ln(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ln(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function rc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&sl(e)))}function iv(e,t,n){switch(t.tag){case 3:tt(t,t.stateNode.containerInfo),jn(t,Ie,e.memoizedState.cache),fa();break;case 27:case 5:Yt(t);break;case 4:tt(t,t.stateNode.containerInfo);break;case 10:jn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,As(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated!==null?(Bn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?bf(e,t,n):(Bn(t),e=fn(e,t,n),e!==null?e.sibling:null);Bn(t);break;case 19:var i=(e.flags&128)!==0;if(r=(n&t.childLanes)!==0,r||(Ya(e,t,n,!1),r=(n&t.childLanes)!==0),i){if(r)return yf(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),P(Ve,Ve.current),r)break;return null;case 22:return t.lanes=0,df(e,t,n,t.pendingProps);case 24:jn(t,Ie,e.memoizedState.cache)}return fn(e,t,n)}function xf(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Fe=!0;else{if(!rc(e,n)&&(t.flags&128)===0)return Fe=!1,iv(e,t,n);Fe=(e.flags&131072)!==0}else Fe=!1,Ce&&(t.flags&1048576)!==0&&Fd(t,qr,t.index);switch(t.lanes=0,t.tag){case 16:e:{var r=t.pendingProps;if(e=ba(t.elementType),t.type=e,typeof e=="function")cs(e)?(r=ka(e,r),t.tag=1,t=hf(null,t,e,r,n)):(t.tag=0,t=Fs(null,t,e,r,n));else{if(e!=null){var i=e.$$typeof;if(i===pe){t.tag=11,t=sf(null,t,e,r,n);break e}else if(i===z){t.tag=14,t=cf(null,t,e,r,n);break e}}throw t=fe(e)||e,Error(s(306,t,""))}}return t;case 0:return Fs(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,i=ka(r,t.pendingProps),hf(e,t,r,i,n);case 3:e:{if(tt(t,t.stateNode.containerInfo),e===null)throw Error(s(387));r=t.pendingProps;var c=t.memoizedState;i=c.element,Ss(e,t),Ir(t,r,null,n);var m=t.memoizedState;if(r=m.cache,jn(t,Ie,r),r!==c.cache&&vs(t,[Ie],n,!0),Kr(),r=m.element,c.isDehydrated)if(c={element:r,isDehydrated:!1,cache:m.cache},t.updateQueue.baseState=c,t.memoizedState=c,t.flags&256){t=gf(e,t,r,n);break e}else if(r!==i){i=zt(Error(s(424)),t),Gr(i),t=gf(e,t,r,n);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ue=Bt(e.firstChild),lt=t,Ce=!0,Dn=null,Ht=!0,n=up(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(fa(),r===i){t=fn(e,t,n);break e}st(e,t,r,n)}t=t.child}return t;case 26:return Ol(e,t),e===null?(n=Lm(t.type,null,t.pendingProps,null))?t.memoizedState=n:Ce||(n=t.type,e=t.pendingProps,r=Ql(me.current).createElement(n),r[ot]=t,r[ft]=e,ct(r,n,e),nt(r),t.stateNode=r):t.memoizedState=Lm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Yt(t),e===null&&Ce&&(r=t.stateNode=Em(t.type,t.pendingProps,me.current),lt=t,Ht=!0,i=Ue,Kn(t.type)?(Hc=i,Ue=Bt(r.firstChild)):Ue=i),st(e,t,t.pendingProps.children,n),Ol(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Ce&&((i=r=Ue)&&(r=Hv(r,t.type,t.pendingProps,Ht),r!==null?(t.stateNode=r,lt=t,Ue=Bt(r.firstChild),Ht=!1,i=!0):i=!1),i||zn(t)),Yt(t),i=t.type,c=t.pendingProps,m=e!==null?e.memoizedProps:null,r=c.children,Rc(i,c)?r=null:m!==null&&Rc(i,m)&&(t.flags|=32),t.memoizedState!==null&&(i=Ls(e,t,Jb,null,null,n),go._currentValue=i),Ol(e,t),st(e,t,r,n),t.child;case 6:return e===null&&Ce&&((e=n=Ue)&&(n=Uv(n,t.pendingProps,Ht),n!==null?(t.stateNode=n,lt=t,Ue=null,e=!0):e=!1),e||zn(t)),null;case 13:return bf(e,t,n);case 4:return tt(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ya(t,null,r,n):st(e,t,r,n),t.child;case 11:return sf(e,t,t.type,t.pendingProps,n);case 7:return st(e,t,t.pendingProps,n),t.child;case 8:return st(e,t,t.pendingProps.children,n),t.child;case 12:return st(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,jn(t,t.type,r.value),st(e,t,r.children,n),t.child;case 9:return i=t.type._context,r=t.pendingProps.children,ha(t),i=it(i),r=r(i),t.flags|=1,st(e,t,r,n),t.child;case 14:return cf(e,t,t.type,t.pendingProps,n);case 15:return uf(e,t,t.type,t.pendingProps,n);case 19:return yf(e,t,n);case 31:return lv(e,t,n);case 22:return df(e,t,n,t.pendingProps);case 24:return ha(t),r=it(Ie),e===null?(i=ks(),i===null&&(i=Ne,c=ys(),i.pooledCache=c,c.refCount++,c!==null&&(i.pooledCacheLanes|=n),i=c),t.memoizedState={parent:r,cache:i},_s(t),jn(t,Ie,i)):((e.lanes&n)!==0&&(Ss(e,t),Ir(t,null,null,n),Kr()),i=e.memoizedState,c=t.memoizedState,i.parent!==r?(i={parent:r,cache:r},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),jn(t,Ie,r)):(r=c.cache,jn(t,Ie,r),r!==i.cache&&vs(t,[Ie],n,!0))),st(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function mn(e){e.flags|=4}function oc(e,t,n,r,i){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(Yf())e.flags|=8192;else throw va=pl,ws}else e.flags&=-16777217}function kf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Nm(t))if(Yf())e.flags|=8192;else throw va=pl,ws}function Al(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Wu():536870912,e.lanes|=t,or|=t)}function to(e,t){if(!Ce)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Be(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function sv(e,t,n){var r=t.pendingProps;switch(fs(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Be(t),null;case 1:return Be(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),un(Ie),He(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Va(t)?mn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,hs())),Be(t),null;case 26:var i=t.type,c=t.memoizedState;return e===null?(mn(t),c!==null?(Be(t),kf(t,c)):(Be(t),oc(t,i,null,r,n))):c?c!==e.memoizedState?(mn(t),Be(t),kf(t,c)):(Be(t),t.flags&=-16777217):(e=e.memoizedProps,e!==r&&mn(t),Be(t),oc(t,i,e,r,n)),null;case 27:if(On(t),n=me.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&mn(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return Be(t),null}e=Q.current,Va(t)?Wd(t):(e=Em(i,r,n),t.stateNode=e,mn(t))}return Be(t),null;case 5:if(On(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&mn(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return Be(t),null}if(c=Q.current,Va(t))Wd(t);else{var m=Ql(me.current);switch(c){case 1:c=m.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:c=m.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":c=m.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":c=m.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":c=m.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof r.is=="string"?m.createElement("select",{is:r.is}):m.createElement("select"),r.multiple?c.multiple=!0:r.size&&(c.size=r.size);break;default:c=typeof r.is=="string"?m.createElement(i,{is:r.is}):m.createElement(i)}}c[ot]=t,c[ft]=r;e:for(m=t.child;m!==null;){if(m.tag===5||m.tag===6)c.appendChild(m.stateNode);else if(m.tag!==4&&m.tag!==27&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;m=m.return}m.sibling.return=m.return,m=m.sibling}t.stateNode=c;e:switch(ct(c,i,r),i){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&mn(t)}}return Be(t),oc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&mn(t);else{if(typeof r!="string"&&t.stateNode===null)throw Error(s(166));if(e=me.current,Va(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,i=lt,i!==null)switch(i.tag){case 27:case 5:r=i.memoizedProps}e[ot]=t,e=!!(e.nodeValue===n||r!==null&&r.suppressHydrationWarning===!0||bm(e.nodeValue,n)),e||zn(t,!0)}else e=Ql(e).createTextNode(r),e[ot]=t,t.stateNode=e}return Be(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Va(t),n!==null){if(e===null){if(!r)throw Error(s(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[ot]=t}else fa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Be(t),e=!1}else n=hs(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Tt(t),t):(Tt(t),null);if((t.flags&128)!==0)throw Error(s(558))}return Be(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=Va(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(s(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(s(317));i[ot]=t}else fa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Be(t),i=!1}else i=hs(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(Tt(t),t):(Tt(t),null)}return Tt(t),(t.flags&128)!==0?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,i=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(i=r.alternate.memoizedState.cachePool.pool),c=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(c=r.memoizedState.cachePool.pool),c!==i&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Al(t,t.updateQueue),Be(t),null);case 4:return He(),e===null&&Oc(t.stateNode.containerInfo),Be(t),null;case 10:return un(t.type),Be(t),null;case 19:if(j(Ve),r=t.memoizedState,r===null)return Be(t),null;if(i=(t.flags&128)!==0,c=r.rendering,c===null)if(i)to(r,!1);else{if($e!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(c=gl(e),c!==null){for(t.flags|=128,to(r,!1),e=c.updateQueue,t.updateQueue=e,Al(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Kd(n,e),n=n.sibling;return P(Ve,Ve.current&1|2),Ce&&sn(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&xt()>zl&&(t.flags|=128,i=!0,to(r,!1),t.lanes=4194304)}else{if(!i)if(e=gl(c),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,Al(t,e),to(r,!0),r.tail===null&&r.tailMode==="hidden"&&!c.alternate&&!Ce)return Be(t),null}else 2*xt()-r.renderingStartTime>zl&&n!==536870912&&(t.flags|=128,i=!0,to(r,!1),t.lanes=4194304);r.isBackwards?(c.sibling=t.child,t.child=c):(e=r.last,e!==null?e.sibling=c:t.child=c,r.last=c)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=xt(),e.sibling=null,n=Ve.current,P(Ve,i?n&1|2:n&1),Ce&&sn(t,r.treeForkCount),e):(Be(t),null);case 22:case 23:return Tt(t),Es(),r=t.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(t.flags|=8192):r&&(t.flags|=8192),r?(n&536870912)!==0&&(t.flags&128)===0&&(Be(t),t.subtreeFlags&6&&(t.flags|=8192)):Be(t),n=t.updateQueue,n!==null&&Al(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&j(ga),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),un(Ie),Be(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function cv(e,t){switch(fs(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return un(Ie),He(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return On(t),null;case 31:if(t.memoizedState!==null){if(Tt(t),t.alternate===null)throw Error(s(340));fa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Tt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));fa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return j(Ve),null;case 4:return He(),null;case 10:return un(t.type),null;case 22:case 23:return Tt(t),Es(),e!==null&&j(ga),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return un(Ie),null;case 25:return null;default:return null}}function wf(e,t){switch(fs(t),t.tag){case 3:un(Ie),He();break;case 26:case 27:case 5:On(t);break;case 4:He();break;case 31:t.memoizedState!==null&&Tt(t);break;case 13:Tt(t);break;case 19:j(Ve);break;case 10:un(t.type);break;case 22:case 23:Tt(t),Es(),e!==null&&j(ga);break;case 24:un(Ie)}}function no(e,t){try{var n=t.updateQueue,r=n!==null?n.lastEffect:null;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var c=n.create,m=n.inst;r=c(),m.destroy=r}n=n.next}while(n!==i)}}catch(b){Re(t,t.return,b)}}function qn(e,t,n){try{var r=t.updateQueue,i=r!==null?r.lastEffect:null;if(i!==null){var c=i.next;r=c;do{if((r.tag&e)===e){var m=r.inst,b=m.destroy;if(b!==void 0){m.destroy=void 0,i=t;var x=n,E=b;try{E()}catch(H){Re(i,x,H)}}}r=r.next}while(r!==c)}}catch(H){Re(t,t.return,H)}}function _f(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{pp(t,n)}catch(r){Re(e,e.return,r)}}}function Sf(e,t,n){n.props=ka(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(r){Re(e,t,r)}}function ao(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n=="function"?e.refCleanup=n(r):n.current=r}}catch(i){Re(e,t,i)}}function Xt(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r=="function")try{r()}catch(i){Re(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(i){Re(e,t,i)}else n.current=null}function Cf(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&r.focus();break e;case"img":n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(i){Re(e,e.return,i)}}function lc(e,t,n){try{var r=e.stateNode;Lv(r,e.type,n,t),r[ft]=t}catch(i){Re(e,e.return,i)}}function Tf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Kn(e.type)||e.tag===4}function ic(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Tf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Kn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function sc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=rn));else if(r!==4&&(r===27&&Kn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(sc(e,t,n),e=e.sibling;e!==null;)sc(e,t,n),e=e.sibling}function Ml(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Kn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Ml(e,t,n),e=e.sibling;e!==null;)Ml(e,t,n),e=e.sibling}function Of(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);ct(t,r,n),t[ot]=e,t[ft]=n}catch(c){Re(e,e.return,c)}}var hn=!1,Je=!1,cc=!1,Ef=typeof WeakSet=="function"?WeakSet:Set,at=null;function uv(e,t){if(e=e.containerInfo,Mc=Fl,e=Bd(e),ns(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,c=r.focusNode;r=r.focusOffset;try{n.nodeType,c.nodeType}catch{n=null;break e}var m=0,b=-1,x=-1,E=0,H=0,q=e,M=null;t:for(;;){for(var R;q!==n||i!==0&&q.nodeType!==3||(b=m+i),q!==c||r!==0&&q.nodeType!==3||(x=m+r),q.nodeType===3&&(m+=q.nodeValue.length),(R=q.firstChild)!==null;)M=q,q=R;for(;;){if(q===e)break t;if(M===n&&++E===i&&(b=m),M===c&&++H===r&&(x=m),(R=q.nextSibling)!==null)break;q=M,M=q.parentNode}q=R}n=b===-1||x===-1?null:{start:b,end:x}}else n=null}n=n||{start:0,end:0}}else n=null;for(Lc={focusedElem:e,selectionRange:n},Fl=!1,at=t;at!==null;)if(t=at,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,at=e;else for(;at!==null;){switch(t=at,c=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)i=e[n],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&c!==null){e=void 0,n=t,i=c.memoizedProps,c=c.memoizedState,r=n.stateNode;try{var ee=ka(n.type,i);e=r.getSnapshotBeforeUpdate(ee,c),r.__reactInternalSnapshotBeforeUpdate=e}catch(de){Re(n,n.return,de)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)zc(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":zc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,at=e;break}at=t.return}}function Af(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:bn(e,n),r&4&&no(5,n);break;case 1:if(bn(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(m){Re(n,n.return,m)}else{var i=ka(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(m){Re(n,n.return,m)}}r&64&&_f(n),r&512&&ao(n,n.return);break;case 3:if(bn(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{pp(e,t)}catch(m){Re(n,n.return,m)}}break;case 27:t===null&&r&4&&Of(n);case 26:case 5:bn(e,n),t===null&&r&4&&Cf(n),r&512&&ao(n,n.return);break;case 12:bn(e,n);break;case 31:bn(e,n),r&4&&Rf(e,n);break;case 13:bn(e,n),r&4&&Df(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=yv.bind(null,n),Bv(e,n))));break;case 22:if(r=n.memoizedState!==null||hn,!r){t=t!==null&&t.memoizedState!==null||Je,i=hn;var c=Je;hn=r,(Je=t)&&!c?vn(e,n,(n.subtreeFlags&8772)!==0):bn(e,n),hn=i,Je=c}break;case 30:break;default:bn(e,n)}}function Mf(e){var t=e.alternate;t!==null&&(e.alternate=null,Mf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Bi(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Pe=null,ht=!1;function gn(e,t,n){for(n=n.child;n!==null;)Lf(e,t,n),n=n.sibling}function Lf(e,t,n){if(kt&&typeof kt.onCommitFiberUnmount=="function")try{kt.onCommitFiberUnmount(Or,n)}catch{}switch(n.tag){case 26:Je||Xt(n,t),gn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Je||Xt(n,t);var r=Pe,i=ht;Kn(n.type)&&(Pe=n.stateNode,ht=!1),gn(e,t,n),fo(n.stateNode),Pe=r,ht=i;break;case 5:Je||Xt(n,t);case 6:if(r=Pe,i=ht,Pe=null,gn(e,t,n),Pe=r,ht=i,Pe!==null)if(ht)try{(Pe.nodeType===9?Pe.body:Pe.nodeName==="HTML"?Pe.ownerDocument.body:Pe).removeChild(n.stateNode)}catch(c){Re(n,t,c)}else try{Pe.removeChild(n.stateNode)}catch(c){Re(n,t,c)}break;case 18:Pe!==null&&(ht?(e=Pe,_m(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),fr(e)):_m(Pe,n.stateNode));break;case 4:r=Pe,i=ht,Pe=n.stateNode.containerInfo,ht=!0,gn(e,t,n),Pe=r,ht=i;break;case 0:case 11:case 14:case 15:qn(2,n,t),Je||qn(4,n,t),gn(e,t,n);break;case 1:Je||(Xt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"&&Sf(n,t,r)),gn(e,t,n);break;case 21:gn(e,t,n);break;case 22:Je=(r=Je)||n.memoizedState!==null,gn(e,t,n),Je=r;break;default:gn(e,t,n)}}function Rf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{fr(e)}catch(n){Re(t,t.return,n)}}}function Df(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{fr(e)}catch(n){Re(t,t.return,n)}}function dv(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Ef),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Ef),t;default:throw Error(s(435,e.tag))}}function Ll(e,t){var n=dv(e);t.forEach(function(r){if(!n.has(r)){n.add(r);var i=xv.bind(null,e,r);r.then(i,i)}})}function gt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r],c=e,m=t,b=m;e:for(;b!==null;){switch(b.tag){case 27:if(Kn(b.type)){Pe=b.stateNode,ht=!1;break e}break;case 5:Pe=b.stateNode,ht=!1;break e;case 3:case 4:Pe=b.stateNode.containerInfo,ht=!0;break e}b=b.return}if(Pe===null)throw Error(s(160));Lf(c,m,i),Pe=null,ht=!1,c=i.alternate,c!==null&&(c.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)zf(t,e),t=t.sibling}var $t=null;function zf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:gt(t,e),bt(e),r&4&&(qn(3,e,e.return),no(3,e),qn(5,e,e.return));break;case 1:gt(t,e),bt(e),r&512&&(Je||n===null||Xt(n,n.return)),r&64&&hn&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var i=$t;if(gt(t,e),bt(e),r&512&&(Je||n===null||Xt(n,n.return)),r&4){var c=n!==null?n.memoizedState:null;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){e:{r=e.type,n=e.memoizedProps,i=i.ownerDocument||i;t:switch(r){case"title":c=i.getElementsByTagName("title")[0],(!c||c[Mr]||c[ot]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=i.createElement(r),i.head.insertBefore(c,i.querySelector("head > title"))),ct(c,r,n),c[ot]=e,nt(c),r=c;break e;case"link":var m=zm("link","href",i).get(r+(n.href||""));if(m){for(var b=0;b<m.length;b++)if(c=m[b],c.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&c.getAttribute("rel")===(n.rel==null?null:n.rel)&&c.getAttribute("title")===(n.title==null?null:n.title)&&c.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){m.splice(b,1);break t}}c=i.createElement(r),ct(c,r,n),i.head.appendChild(c);break;case"meta":if(m=zm("meta","content",i).get(r+(n.content||""))){for(b=0;b<m.length;b++)if(c=m[b],c.getAttribute("content")===(n.content==null?null:""+n.content)&&c.getAttribute("name")===(n.name==null?null:n.name)&&c.getAttribute("property")===(n.property==null?null:n.property)&&c.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&c.getAttribute("charset")===(n.charSet==null?null:n.charSet)){m.splice(b,1);break t}}c=i.createElement(r),ct(c,r,n),i.head.appendChild(c);break;default:throw Error(s(468,r))}c[ot]=e,nt(c),r=c}e.stateNode=r}else jm(i,e.type,e.stateNode);else e.stateNode=Dm(i,r,e.memoizedProps);else c!==r?(c===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):c.count--,r===null?jm(i,e.type,e.stateNode):Dm(i,r,e.memoizedProps)):r===null&&e.stateNode!==null&&lc(e,e.memoizedProps,n.memoizedProps)}break;case 27:gt(t,e),bt(e),r&512&&(Je||n===null||Xt(n,n.return)),n!==null&&r&4&&lc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(gt(t,e),bt(e),r&512&&(Je||n===null||Xt(n,n.return)),e.flags&32){i=e.stateNode;try{Na(i,"")}catch(ee){Re(e,e.return,ee)}}r&4&&e.stateNode!=null&&(i=e.memoizedProps,lc(e,i,n!==null?n.memoizedProps:i)),r&1024&&(cc=!0);break;case 6:if(gt(t,e),bt(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(ee){Re(e,e.return,ee)}}break;case 3:if(Yl=null,i=$t,$t=Zl(t.containerInfo),gt(t,e),$t=i,bt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{fr(t.containerInfo)}catch(ee){Re(e,e.return,ee)}cc&&(cc=!1,jf(e));break;case 4:r=$t,$t=Zl(e.stateNode.containerInfo),gt(t,e),bt(e),$t=r;break;case 12:gt(t,e),bt(e);break;case 31:gt(t,e),bt(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Ll(e,r)));break;case 13:gt(t,e),bt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Dl=xt()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Ll(e,r)));break;case 22:i=e.memoizedState!==null;var x=n!==null&&n.memoizedState!==null,E=hn,H=Je;if(hn=E||i,Je=H||x,gt(t,e),Je=H,hn=E,bt(e),r&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(n===null||x||hn||Je||wa(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){x=n=t;try{if(c=x.stateNode,i)m=c.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none";else{b=x.stateNode;var q=x.memoizedProps.style,M=q!=null&&q.hasOwnProperty("display")?q.display:null;b.style.display=M==null||typeof M=="boolean"?"":(""+M).trim()}}catch(ee){Re(x,x.return,ee)}}}else if(t.tag===6){if(n===null){x=t;try{x.stateNode.nodeValue=i?"":x.memoizedProps}catch(ee){Re(x,x.return,ee)}}}else if(t.tag===18){if(n===null){x=t;try{var R=x.stateNode;i?Sm(R,!0):Sm(x.stateNode,!1)}catch(ee){Re(x,x.return,ee)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,Ll(e,n))));break;case 19:gt(t,e),bt(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Ll(e,r)));break;case 30:break;case 21:break;default:gt(t,e),bt(e)}}function bt(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Tf(r)){n=r;break}r=r.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var i=n.stateNode,c=ic(e);Ml(e,c,i);break;case 5:var m=n.stateNode;n.flags&32&&(Na(m,""),n.flags&=-33);var b=ic(e);Ml(e,b,m);break;case 3:case 4:var x=n.stateNode.containerInfo,E=ic(e);sc(e,E,x);break;default:throw Error(s(161))}}catch(H){Re(e,e.return,H)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function jf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;jf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function bn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Af(e,t.alternate,t),t=t.sibling}function wa(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:qn(4,t,t.return),wa(t);break;case 1:Xt(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Sf(t,t.return,n),wa(t);break;case 27:fo(t.stateNode);case 26:case 5:Xt(t,t.return),wa(t);break;case 22:t.memoizedState===null&&wa(t);break;case 30:wa(t);break;default:wa(t)}e=e.sibling}}function vn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var r=t.alternate,i=e,c=t,m=c.flags;switch(c.tag){case 0:case 11:case 15:vn(i,c,n),no(4,c);break;case 1:if(vn(i,c,n),r=c,i=r.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(E){Re(r,r.return,E)}if(r=c,i=r.updateQueue,i!==null){var b=r.stateNode;try{var x=i.shared.hiddenCallbacks;if(x!==null)for(i.shared.hiddenCallbacks=null,i=0;i<x.length;i++)dp(x[i],b)}catch(E){Re(r,r.return,E)}}n&&m&64&&_f(c),ao(c,c.return);break;case 27:Of(c);case 26:case 5:vn(i,c,n),n&&r===null&&m&4&&Cf(c),ao(c,c.return);break;case 12:vn(i,c,n);break;case 31:vn(i,c,n),n&&m&4&&Rf(i,c);break;case 13:vn(i,c,n),n&&m&4&&Df(i,c);break;case 22:c.memoizedState===null&&vn(i,c,n),ao(c,c.return);break;case 30:break;default:vn(i,c,n)}t=t.sibling}}function uc(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&$r(n))}function dc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&$r(e))}function Qt(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Nf(e,t,n,r),t=t.sibling}function Nf(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Qt(e,t,n,r),i&2048&&no(9,t);break;case 1:Qt(e,t,n,r);break;case 3:Qt(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&$r(e)));break;case 12:if(i&2048){Qt(e,t,n,r),e=t.stateNode;try{var c=t.memoizedProps,m=c.id,b=c.onPostCommit;typeof b=="function"&&b(m,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(x){Re(t,t.return,x)}}else Qt(e,t,n,r);break;case 31:Qt(e,t,n,r);break;case 13:Qt(e,t,n,r);break;case 23:break;case 22:c=t.stateNode,m=t.alternate,t.memoizedState!==null?c._visibility&2?Qt(e,t,n,r):ro(e,t):c._visibility&2?Qt(e,t,n,r):(c._visibility|=2,nr(e,t,n,r,(t.subtreeFlags&10256)!==0||!1)),i&2048&&uc(m,t);break;case 24:Qt(e,t,n,r),i&2048&&dc(t.alternate,t);break;default:Qt(e,t,n,r)}}function nr(e,t,n,r,i){for(i=i&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var c=e,m=t,b=n,x=r,E=m.flags;switch(m.tag){case 0:case 11:case 15:nr(c,m,b,x,i),no(8,m);break;case 23:break;case 22:var H=m.stateNode;m.memoizedState!==null?H._visibility&2?nr(c,m,b,x,i):ro(c,m):(H._visibility|=2,nr(c,m,b,x,i)),i&&E&2048&&uc(m.alternate,m);break;case 24:nr(c,m,b,x,i),i&&E&2048&&dc(m.alternate,m);break;default:nr(c,m,b,x,i)}t=t.sibling}}function ro(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:ro(n,r),i&2048&&uc(r.alternate,r);break;case 24:ro(n,r),i&2048&&dc(r.alternate,r);break;default:ro(n,r)}t=t.sibling}}var oo=8192;function ar(e,t,n){if(e.subtreeFlags&oo)for(e=e.child;e!==null;)Hf(e,t,n),e=e.sibling}function Hf(e,t,n){switch(e.tag){case 26:ar(e,t,n),e.flags&oo&&e.memoizedState!==null&&Fv(n,$t,e.memoizedState,e.memoizedProps);break;case 5:ar(e,t,n);break;case 3:case 4:var r=$t;$t=Zl(e.stateNode.containerInfo),ar(e,t,n),$t=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=oo,oo=16777216,ar(e,t,n),oo=r):ar(e,t,n));break;default:ar(e,t,n)}}function Uf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function lo(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];at=r,Pf(r,e)}Uf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Bf(e),e=e.sibling}function Bf(e){switch(e.tag){case 0:case 11:case 15:lo(e),e.flags&2048&&qn(9,e,e.return);break;case 3:lo(e);break;case 12:lo(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Rl(e)):lo(e);break;default:lo(e)}}function Rl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];at=r,Pf(r,e)}Uf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:qn(8,t,t.return),Rl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Rl(t));break;default:Rl(t)}e=e.sibling}}function Pf(e,t){for(;at!==null;){var n=at;switch(n.tag){case 0:case 11:case 15:qn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:$r(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,at=r;else e:for(n=e;at!==null;){r=at;var i=r.sibling,c=r.return;if(Mf(r),r===n){at=null;break e}if(i!==null){i.return=c,at=i;break e}at=c}}}var pv={getCacheForType:function(e){var t=it(Ie),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return it(Ie).controller.signal}},fv=typeof WeakMap=="function"?WeakMap:Map,Me=0,Ne=null,ke=null,_e=0,Le=0,Ot=null,Gn=!1,rr=!1,pc=!1,yn=0,$e=0,$n=0,_a=0,fc=0,Et=0,or=0,io=null,vt=null,mc=!1,Dl=0,qf=0,zl=1/0,jl=null,Qn=null,We=0,Zn=null,lr=null,xn=0,hc=0,gc=null,Gf=null,so=0,bc=null;function At(){return(Me&2)!==0&&_e!==0?_e&-_e:T.T!==null?_c():ad()}function $f(){if(Et===0)if((_e&536870912)===0||Ce){var e=$o;$o<<=1,($o&3932160)===0&&($o=262144),Et=e}else Et=536870912;return e=Ct.current,e!==null&&(e.flags|=32),Et}function yt(e,t,n){(e===Ne&&(Le===2||Le===9)||e.cancelPendingCommit!==null)&&(ir(e,0),Vn(e,_e,Et,!1)),Ar(e,n),((Me&2)===0||e!==Ne)&&(e===Ne&&((Me&2)===0&&(_a|=n),$e===4&&Vn(e,_e,Et,!1)),Ft(e))}function Qf(e,t,n){if((Me&6)!==0)throw Error(s(327));var r=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Er(e,t),i=r?gv(e,t):yc(e,t,!0),c=r;do{if(i===0){rr&&!r&&Vn(e,t,0,!1);break}else{if(n=e.current.alternate,c&&!mv(n)){i=yc(e,t,!1),c=!1;continue}if(i===2){if(c=t,e.errorRecoveryDisabledLanes&c)var m=0;else m=e.pendingLanes&-536870913,m=m!==0?m:m&536870912?536870912:0;if(m!==0){t=m;e:{var b=e;i=io;var x=b.current.memoizedState.isDehydrated;if(x&&(ir(b,m).flags|=256),m=yc(b,m,!1),m!==2){if(pc&&!x){b.errorRecoveryDisabledLanes|=c,_a|=c,i=4;break e}c=vt,vt=i,c!==null&&(vt===null?vt=c:vt.push.apply(vt,c))}i=m}if(c=!1,i!==2)continue}}if(i===1){ir(e,0),Vn(e,t,0,!0);break}e:{switch(r=e,c=i,c){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:Vn(r,t,Et,!Gn);break e;case 2:vt=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(i=Dl+300-xt(),10<i)){if(Vn(r,t,Et,!Gn),Zo(r,0,!0)!==0)break e;xn=t,r.timeoutHandle=km(Zf.bind(null,r,n,vt,jl,mc,t,Et,_a,or,Gn,c,"Throttled",-0,0),i);break e}Zf(r,n,vt,jl,mc,t,Et,_a,or,Gn,c,null,-0,0)}}break}while(!0);Ft(e)}function Zf(e,t,n,r,i,c,m,b,x,E,H,q,M,R){if(e.timeoutHandle=-1,q=t.subtreeFlags,q&8192||(q&16785408)===16785408){q={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:rn},Hf(t,c,q);var ee=(c&62914560)===c?Dl-xt():(c&4194048)===c?qf-xt():0;if(ee=Jv(q,ee),ee!==null){xn=c,e.cancelPendingCommit=ee(Wf.bind(null,e,t,c,n,r,i,m,b,x,H,q,null,M,R)),Vn(e,c,m,!E);return}}Wf(e,t,c,n,r,i,m,b,x)}function mv(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],c=i.getSnapshot;i=i.value;try{if(!_t(c(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Vn(e,t,n,r){t&=~fc,t&=~_a,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var c=31-wt(i),m=1<<c;r[c]=-1,i&=~m}n!==0&&ed(e,n,t)}function Nl(){return(Me&6)===0?(co(0),!1):!0}function vc(){if(ke!==null){if(Le===0)var e=ke.return;else e=ke,cn=ma=null,zs(e),Fa=null,Zr=0,e=ke;for(;e!==null;)wf(e.alternate,e),e=e.return;ke=null}}function ir(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,zv(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),xn=0,vc(),Ne=e,ke=n=ln(e.current,null),_e=t,Le=0,Ot=null,Gn=!1,rr=Er(e,t),pc=!1,or=Et=fc=_a=$n=$e=0,vt=io=null,mc=!1,(t&8)!==0&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-wt(r),c=1<<i;t|=e[i],r&=~c}return yn=t,al(),n}function Vf(e,t){ge=null,T.H=Wr,t===Xa||t===dl?(t=ip(),Le=3):t===ws?(t=ip(),Le=4):Le=t===Xs?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Ot=t,ke===null&&($e=1,Cl(e,zt(t,e.current)))}function Yf(){var e=Ct.current;return e===null?!0:(_e&4194048)===_e?Ut===null:(_e&62914560)===_e||(_e&536870912)!==0?e===Ut:!1}function Kf(){var e=T.H;return T.H=Wr,e===null?Wr:e}function If(){var e=T.A;return T.A=pv,e}function Hl(){$e=4,Gn||(_e&4194048)!==_e&&Ct.current!==null||(rr=!0),($n&134217727)===0&&(_a&134217727)===0||Ne===null||Vn(Ne,_e,Et,!1)}function yc(e,t,n){var r=Me;Me|=2;var i=Kf(),c=If();(Ne!==e||_e!==t)&&(jl=null,ir(e,t)),t=!1;var m=$e;e:do try{if(Le!==0&&ke!==null){var b=ke,x=Ot;switch(Le){case 8:vc(),m=6;break e;case 3:case 2:case 9:case 6:Ct.current===null&&(t=!0);var E=Le;if(Le=0,Ot=null,sr(e,b,x,E),n&&rr){m=0;break e}break;default:E=Le,Le=0,Ot=null,sr(e,b,x,E)}}hv(),m=$e;break}catch(H){Vf(e,H)}while(!0);return t&&e.shellSuspendCounter++,cn=ma=null,Me=r,T.H=i,T.A=c,ke===null&&(Ne=null,_e=0,al()),m}function hv(){for(;ke!==null;)Xf(ke)}function gv(e,t){var n=Me;Me|=2;var r=Kf(),i=If();Ne!==e||_e!==t?(jl=null,zl=xt()+500,ir(e,t)):rr=Er(e,t);e:do try{if(Le!==0&&ke!==null){t=ke;var c=Ot;t:switch(Le){case 1:Le=0,Ot=null,sr(e,t,c,1);break;case 2:case 9:if(op(c)){Le=0,Ot=null,Ff(t);break}t=function(){Le!==2&&Le!==9||Ne!==e||(Le=7),Ft(e)},c.then(t,t);break e;case 3:Le=7;break e;case 4:Le=5;break e;case 7:op(c)?(Le=0,Ot=null,Ff(t)):(Le=0,Ot=null,sr(e,t,c,7));break;case 5:var m=null;switch(ke.tag){case 26:m=ke.memoizedState;case 5:case 27:var b=ke;if(m?Nm(m):b.stateNode.complete){Le=0,Ot=null;var x=b.sibling;if(x!==null)ke=x;else{var E=b.return;E!==null?(ke=E,Ul(E)):ke=null}break t}}Le=0,Ot=null,sr(e,t,c,5);break;case 6:Le=0,Ot=null,sr(e,t,c,6);break;case 8:vc(),$e=6;break e;default:throw Error(s(462))}}bv();break}catch(H){Vf(e,H)}while(!0);return cn=ma=null,T.H=r,T.A=i,Me=n,ke!==null?0:(Ne=null,_e=0,al(),$e)}function bv(){for(;ke!==null&&!P0();)Xf(ke)}function Xf(e){var t=xf(e.alternate,e,yn);e.memoizedProps=e.pendingProps,t===null?Ul(e):ke=t}function Ff(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=mf(n,t,t.pendingProps,t.type,void 0,_e);break;case 11:t=mf(n,t,t.pendingProps,t.type.render,t.ref,_e);break;case 5:zs(t);default:wf(n,t),t=ke=Kd(t,yn),t=xf(n,t,yn)}e.memoizedProps=e.pendingProps,t===null?Ul(e):ke=t}function sr(e,t,n,r){cn=ma=null,zs(t),Fa=null,Zr=0;var i=t.return;try{if(ov(e,i,t,n,_e)){$e=1,Cl(e,zt(n,e.current)),ke=null;return}}catch(c){if(i!==null)throw ke=i,c;$e=1,Cl(e,zt(n,e.current)),ke=null;return}t.flags&32768?(Ce||r===1?e=!0:rr||(_e&536870912)!==0?e=!1:(Gn=e=!0,(r===2||r===9||r===3||r===6)&&(r=Ct.current,r!==null&&r.tag===13&&(r.flags|=16384))),Jf(t,e)):Ul(t)}function Ul(e){var t=e;do{if((t.flags&32768)!==0){Jf(t,Gn);return}e=t.return;var n=sv(t.alternate,t,yn);if(n!==null){ke=n;return}if(t=t.sibling,t!==null){ke=t;return}ke=t=e}while(t!==null);$e===0&&($e=5)}function Jf(e,t){do{var n=cv(e.alternate,e);if(n!==null){n.flags&=32767,ke=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){ke=e;return}ke=e=n}while(e!==null);$e=6,ke=null}function Wf(e,t,n,r,i,c,m,b,x){e.cancelPendingCommit=null;do Bl();while(We!==0);if((Me&6)!==0)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(c=t.lanes|t.childLanes,c|=is,X0(e,n,c,m,b,x),e===Ne&&(ke=Ne=null,_e=0),lr=t,Zn=e,xn=n,hc=c,gc=i,Gf=r,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,kv(qo,function(){return rm(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||r){r=T.T,T.T=null,i=$.p,$.p=2,m=Me,Me|=4;try{uv(e,t,n)}finally{Me=m,$.p=i,T.T=r}}We=1,em(),tm(),nm()}}function em(){if(We===1){We=0;var e=Zn,t=lr,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=T.T,T.T=null;var r=$.p;$.p=2;var i=Me;Me|=4;try{zf(t,e);var c=Lc,m=Bd(e.containerInfo),b=c.focusedElem,x=c.selectionRange;if(m!==b&&b&&b.ownerDocument&&Ud(b.ownerDocument.documentElement,b)){if(x!==null&&ns(b)){var E=x.start,H=x.end;if(H===void 0&&(H=E),"selectionStart"in b)b.selectionStart=E,b.selectionEnd=Math.min(H,b.value.length);else{var q=b.ownerDocument||document,M=q&&q.defaultView||window;if(M.getSelection){var R=M.getSelection(),ee=b.textContent.length,de=Math.min(x.start,ee),je=x.end===void 0?de:Math.min(x.end,ee);!R.extend&&de>je&&(m=je,je=de,de=m);var S=Hd(b,de),w=Hd(b,je);if(S&&w&&(R.rangeCount!==1||R.anchorNode!==S.node||R.anchorOffset!==S.offset||R.focusNode!==w.node||R.focusOffset!==w.offset)){var O=q.createRange();O.setStart(S.node,S.offset),R.removeAllRanges(),de>je?(R.addRange(O),R.extend(w.node,w.offset)):(O.setEnd(w.node,w.offset),R.addRange(O))}}}}for(q=[],R=b;R=R.parentNode;)R.nodeType===1&&q.push({element:R,left:R.scrollLeft,top:R.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<q.length;b++){var B=q[b];B.element.scrollLeft=B.left,B.element.scrollTop=B.top}}Fl=!!Mc,Lc=Mc=null}finally{Me=i,$.p=r,T.T=n}}e.current=t,We=2}}function tm(){if(We===2){We=0;var e=Zn,t=lr,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=T.T,T.T=null;var r=$.p;$.p=2;var i=Me;Me|=4;try{Af(e,t.alternate,t)}finally{Me=i,$.p=r,T.T=n}}We=3}}function nm(){if(We===4||We===3){We=0,q0();var e=Zn,t=lr,n=xn,r=Gf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?We=5:(We=0,lr=Zn=null,am(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(Qn=null),Hi(n),t=t.stateNode,kt&&typeof kt.onCommitFiberRoot=="function")try{kt.onCommitFiberRoot(Or,t,void 0,(t.current.flags&128)===128)}catch{}if(r!==null){t=T.T,i=$.p,$.p=2,T.T=null;try{for(var c=e.onRecoverableError,m=0;m<r.length;m++){var b=r[m];c(b.value,{componentStack:b.stack})}}finally{T.T=t,$.p=i}}(xn&3)!==0&&Bl(),Ft(e),i=e.pendingLanes,(n&261930)!==0&&(i&42)!==0?e===bc?so++:(so=0,bc=e):so=0,co(0)}}function am(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,$r(t)))}function Bl(){return em(),tm(),nm(),rm()}function rm(){if(We!==5)return!1;var e=Zn,t=hc;hc=0;var n=Hi(xn),r=T.T,i=$.p;try{$.p=32>n?32:n,T.T=null,n=gc,gc=null;var c=Zn,m=xn;if(We=0,lr=Zn=null,xn=0,(Me&6)!==0)throw Error(s(331));var b=Me;if(Me|=4,Bf(c.current),Nf(c,c.current,m,n),Me=b,co(0,!1),kt&&typeof kt.onPostCommitFiberRoot=="function")try{kt.onPostCommitFiberRoot(Or,c)}catch{}return!0}finally{$.p=i,T.T=r,am(e,t)}}function om(e,t,n){t=zt(n,t),t=Is(e.stateNode,t,2),e=Un(e,t,2),e!==null&&(Ar(e,2),Ft(e))}function Re(e,t,n){if(e.tag===3)om(e,e,n);else for(;t!==null;){if(t.tag===3){om(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Qn===null||!Qn.has(r))){e=zt(n,e),n=of(2),r=Un(t,n,2),r!==null&&(lf(n,r,t,e),Ar(r,2),Ft(r));break}}t=t.return}}function xc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new fv;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(pc=!0,i.add(n),e=vv.bind(null,e,t,n),t.then(e,e))}function vv(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ne===e&&(_e&n)===n&&($e===4||$e===3&&(_e&62914560)===_e&&300>xt()-Dl?(Me&2)===0&&ir(e,0):fc|=n,or===_e&&(or=0)),Ft(e)}function lm(e,t){t===0&&(t=Wu()),e=da(e,t),e!==null&&(Ar(e,t),Ft(e))}function yv(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),lm(e,n)}function xv(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(t),lm(e,n)}function kv(e,t){return Di(e,t)}var Pl=null,cr=null,kc=!1,ql=!1,wc=!1,Yn=0;function Ft(e){e!==cr&&e.next===null&&(cr===null?Pl=cr=e:cr=cr.next=e),ql=!0,kc||(kc=!0,_v())}function co(e,t){if(!wc&&ql){wc=!0;do for(var n=!1,r=Pl;r!==null;){if(e!==0){var i=r.pendingLanes;if(i===0)var c=0;else{var m=r.suspendedLanes,b=r.pingedLanes;c=(1<<31-wt(42|e)+1)-1,c&=i&~(m&~b),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(n=!0,um(r,c))}else c=_e,c=Zo(r,r===Ne?c:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(c&3)===0||Er(r,c)||(n=!0,um(r,c));r=r.next}while(n);wc=!1}}function wv(){im()}function im(){ql=kc=!1;var e=0;Yn!==0&&Dv()&&(e=Yn);for(var t=xt(),n=null,r=Pl;r!==null;){var i=r.next,c=sm(r,t);c===0?(r.next=null,n===null?Pl=i:n.next=i,i===null&&(cr=n)):(n=r,(e!==0||(c&3)!==0)&&(ql=!0)),r=i}We!==0&&We!==5||co(e),Yn!==0&&(Yn=0)}function sm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,c=e.pendingLanes&-62914561;0<c;){var m=31-wt(c),b=1<<m,x=i[m];x===-1?((b&n)===0||(b&r)!==0)&&(i[m]=I0(b,t)):x<=t&&(e.expiredLanes|=b),c&=~b}if(t=Ne,n=_e,n=Zo(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Le===2||Le===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&zi(r),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Er(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&zi(r),Hi(n)){case 2:case 8:n=Fu;break;case 32:n=qo;break;case 268435456:n=Ju;break;default:n=qo}return r=cm.bind(null,e),n=Di(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&zi(r),e.callbackPriority=2,e.callbackNode=null,2}function cm(e,t){if(We!==0&&We!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Bl()&&e.callbackNode!==n)return null;var r=_e;return r=Zo(e,e===Ne?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Qf(e,r,t),sm(e,xt()),e.callbackNode!=null&&e.callbackNode===n?cm.bind(null,e):null)}function um(e,t){if(Bl())return null;Qf(e,t,!0)}function _v(){jv(function(){(Me&6)!==0?Di(Xu,wv):im()})}function _c(){if(Yn===0){var e=Ka;e===0&&(e=Go,Go<<=1,(Go&261888)===0&&(Go=256)),Yn=e}return Yn}function dm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Io(""+e)}function pm(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Sv(e,t,n,r,i){if(t==="submit"&&n&&n.stateNode===i){var c=dm((i[ft]||null).action),m=r.submitter;m&&(t=(t=m[ft]||null)?dm(t.formAction):m.getAttribute("formAction"),t!==null&&(c=t,m=null));var b=new Wo("action","action",null,r,i);e.push({event:b,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Yn!==0){var x=m?pm(i,m):new FormData(i);$s(n,{pending:!0,data:x,method:i.method,action:c},null,x)}}else typeof c=="function"&&(b.preventDefault(),x=m?pm(i,m):new FormData(i),$s(n,{pending:!0,data:x,method:i.method,action:c},c,x))},currentTarget:i}]})}}for(var Sc=0;Sc<ls.length;Sc++){var Cc=ls[Sc],Cv=Cc.toLowerCase(),Tv=Cc[0].toUpperCase()+Cc.slice(1);Gt(Cv,"on"+Tv)}Gt(Gd,"onAnimationEnd"),Gt($d,"onAnimationIteration"),Gt(Qd,"onAnimationStart"),Gt("dblclick","onDoubleClick"),Gt("focusin","onFocus"),Gt("focusout","onBlur"),Gt(Gb,"onTransitionRun"),Gt($b,"onTransitionStart"),Gt(Qb,"onTransitionCancel"),Gt(Zd,"onTransitionEnd"),za("onMouseEnter",["mouseout","mouseover"]),za("onMouseLeave",["mouseout","mouseover"]),za("onPointerEnter",["pointerout","pointerover"]),za("onPointerLeave",["pointerout","pointerover"]),ia("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ia("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ia("onBeforeInput",["compositionend","keypress","textInput","paste"]),ia("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ia("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ia("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var uo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ov=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(uo));function fm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var c=void 0;if(t)for(var m=r.length-1;0<=m;m--){var b=r[m],x=b.instance,E=b.currentTarget;if(b=b.listener,x!==c&&i.isPropagationStopped())break e;c=b,i.currentTarget=E;try{c(i)}catch(H){nl(H)}i.currentTarget=null,c=x}else for(m=0;m<r.length;m++){if(b=r[m],x=b.instance,E=b.currentTarget,b=b.listener,x!==c&&i.isPropagationStopped())break e;c=b,i.currentTarget=E;try{c(i)}catch(H){nl(H)}i.currentTarget=null,c=x}}}}function we(e,t){var n=t[Ui];n===void 0&&(n=t[Ui]=new Set);var r=e+"__bubble";n.has(r)||(mm(t,e,2,!1),n.add(r))}function Tc(e,t,n){var r=0;t&&(r|=4),mm(n,e,r,t)}var Gl="_reactListening"+Math.random().toString(36).slice(2);function Oc(e){if(!e[Gl]){e[Gl]=!0,ld.forEach(function(n){n!=="selectionchange"&&(Ov.has(n)||Tc(n,!1,e),Tc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Gl]||(t[Gl]=!0,Tc("selectionchange",!1,t))}}function mm(e,t,n,r){switch($m(t)){case 2:var i=ty;break;case 8:i=ny;break;default:i=Gc}n=i.bind(null,t,n,e),i=void 0,!Yi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ec(e,t,n,r,i){var c=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var m=r.tag;if(m===3||m===4){var b=r.stateNode.containerInfo;if(b===i)break;if(m===4)for(m=r.return;m!==null;){var x=m.tag;if((x===3||x===4)&&m.stateNode.containerInfo===i)return;m=m.return}for(;b!==null;){if(m=La(b),m===null)return;if(x=m.tag,x===5||x===6||x===26||x===27){r=c=m;continue e}b=b.parentNode}}r=r.return}vd(function(){var E=c,H=Zi(n),q=[];e:{var M=Vd.get(e);if(M!==void 0){var R=Wo,ee=e;switch(e){case"keypress":if(Fo(n)===0)break e;case"keydown":case"keyup":R=xb;break;case"focusin":ee="focus",R=Fi;break;case"focusout":ee="blur",R=Fi;break;case"beforeblur":case"afterblur":R=Fi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=kd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=sb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=_b;break;case Gd:case $d:case Qd:R=db;break;case Zd:R=Cb;break;case"scroll":case"scrollend":R=lb;break;case"wheel":R=Ob;break;case"copy":case"cut":case"paste":R=fb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=_d;break;case"toggle":case"beforetoggle":R=Ab}var de=(t&4)!==0,je=!de&&(e==="scroll"||e==="scrollend"),S=de?M!==null?M+"Capture":null:M;de=[];for(var w=E,O;w!==null;){var B=w;if(O=B.stateNode,B=B.tag,B!==5&&B!==26&&B!==27||O===null||S===null||(B=Rr(w,S),B!=null&&de.push(po(w,B,O))),je)break;w=w.return}0<de.length&&(M=new R(M,ee,null,n,H),q.push({event:M,listeners:de}))}}if((t&7)===0){e:{if(M=e==="mouseover"||e==="pointerover",R=e==="mouseout"||e==="pointerout",M&&n!==Qi&&(ee=n.relatedTarget||n.fromElement)&&(La(ee)||ee[Ma]))break e;if((R||M)&&(M=H.window===H?H:(M=H.ownerDocument)?M.defaultView||M.parentWindow:window,R?(ee=n.relatedTarget||n.toElement,R=E,ee=ee?La(ee):null,ee!==null&&(je=d(ee),de=ee.tag,ee!==je||de!==5&&de!==27&&de!==6)&&(ee=null)):(R=null,ee=E),R!==ee)){if(de=kd,B="onMouseLeave",S="onMouseEnter",w="mouse",(e==="pointerout"||e==="pointerover")&&(de=_d,B="onPointerLeave",S="onPointerEnter",w="pointer"),je=R==null?M:Lr(R),O=ee==null?M:Lr(ee),M=new de(B,w+"leave",R,n,H),M.target=je,M.relatedTarget=O,B=null,La(H)===E&&(de=new de(S,w+"enter",ee,n,H),de.target=O,de.relatedTarget=je,B=de),je=B,R&&ee)t:{for(de=Ev,S=R,w=ee,O=0,B=S;B;B=de(B))O++;B=0;for(var ie=w;ie;ie=de(ie))B++;for(;0<O-B;)S=de(S),O--;for(;0<B-O;)w=de(w),B--;for(;O--;){if(S===w||w!==null&&S===w.alternate){de=S;break t}S=de(S),w=de(w)}de=null}else de=null;R!==null&&hm(q,M,R,de,!1),ee!==null&&je!==null&&hm(q,je,ee,de,!0)}}e:{if(M=E?Lr(E):window,R=M.nodeName&&M.nodeName.toLowerCase(),R==="select"||R==="input"&&M.type==="file")var Oe=Ld;else if(Ad(M))if(Rd)Oe=Bb;else{Oe=Hb;var re=Nb}else R=M.nodeName,!R||R.toLowerCase()!=="input"||M.type!=="checkbox"&&M.type!=="radio"?E&&$i(E.elementType)&&(Oe=Ld):Oe=Ub;if(Oe&&(Oe=Oe(e,E))){Md(q,Oe,n,H);break e}re&&re(e,M,E),e==="focusout"&&E&&M.type==="number"&&E.memoizedProps.value!=null&&Gi(M,"number",M.value)}switch(re=E?Lr(E):window,e){case"focusin":(Ad(re)||re.contentEditable==="true")&&(Pa=re,as=E,Pr=null);break;case"focusout":Pr=as=Pa=null;break;case"mousedown":rs=!0;break;case"contextmenu":case"mouseup":case"dragend":rs=!1,Pd(q,n,H);break;case"selectionchange":if(qb)break;case"keydown":case"keyup":Pd(q,n,H)}var ve;if(Wi)e:{switch(e){case"compositionstart":var Se="onCompositionStart";break e;case"compositionend":Se="onCompositionEnd";break e;case"compositionupdate":Se="onCompositionUpdate";break e}Se=void 0}else Ba?Od(e,n)&&(Se="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Se="onCompositionStart");Se&&(Sd&&n.locale!=="ko"&&(Ba||Se!=="onCompositionStart"?Se==="onCompositionEnd"&&Ba&&(ve=yd()):(Ln=H,Ki="value"in Ln?Ln.value:Ln.textContent,Ba=!0)),re=$l(E,Se),0<re.length&&(Se=new wd(Se,e,null,n,H),q.push({event:Se,listeners:re}),ve?Se.data=ve:(ve=Ed(n),ve!==null&&(Se.data=ve)))),(ve=Lb?Rb(e,n):Db(e,n))&&(Se=$l(E,"onBeforeInput"),0<Se.length&&(re=new wd("onBeforeInput","beforeinput",null,n,H),q.push({event:re,listeners:Se}),re.data=ve)),Sv(q,e,E,n,H)}fm(q,t)})}function po(e,t,n){return{instance:e,listener:t,currentTarget:n}}function $l(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,c=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||c===null||(i=Rr(e,n),i!=null&&r.unshift(po(e,i,c)),i=Rr(e,t),i!=null&&r.push(po(e,i,c))),e.tag===3)return r;e=e.return}return[]}function Ev(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function hm(e,t,n,r,i){for(var c=t._reactName,m=[];n!==null&&n!==r;){var b=n,x=b.alternate,E=b.stateNode;if(b=b.tag,x!==null&&x===r)break;b!==5&&b!==26&&b!==27||E===null||(x=E,i?(E=Rr(n,c),E!=null&&m.unshift(po(n,E,x))):i||(E=Rr(n,c),E!=null&&m.push(po(n,E,x)))),n=n.return}m.length!==0&&e.push({event:t,listeners:m})}var Av=/\r\n?/g,Mv=/\u0000|\uFFFD/g;function gm(e){return(typeof e=="string"?e:""+e).replace(Av,`
`).replace(Mv,"")}function bm(e,t){return t=gm(t),gm(e)===t}function ze(e,t,n,r,i,c){switch(n){case"children":typeof r=="string"?t==="body"||t==="textarea"&&r===""||Na(e,r):(typeof r=="number"||typeof r=="bigint")&&t!=="body"&&Na(e,""+r);break;case"className":Yo(e,"class",r);break;case"tabIndex":Yo(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Yo(e,n,r);break;case"style":gd(e,r,c);break;case"data":if(t!=="object"){Yo(e,"data",r);break}case"src":case"href":if(r===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(n);break}r=Io(""+r),e.setAttribute(n,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(n==="formAction"?(t!=="input"&&ze(e,t,"name",i.name,i,null),ze(e,t,"formEncType",i.formEncType,i,null),ze(e,t,"formMethod",i.formMethod,i,null),ze(e,t,"formTarget",i.formTarget,i,null)):(ze(e,t,"encType",i.encType,i,null),ze(e,t,"method",i.method,i,null),ze(e,t,"target",i.target,i,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(n);break}r=Io(""+r),e.setAttribute(n,r);break;case"onClick":r!=null&&(e.onclick=rn);break;case"onScroll":r!=null&&we("scroll",e);break;case"onScrollEnd":r!=null&&we("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}n=Io(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(n,""+r):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":r===!0?e.setAttribute(n,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(n,r):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case"popover":we("beforetoggle",e),we("toggle",e),Vo(e,"popover",r);break;case"xlinkActuate":an(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":an(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":an(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":an(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":an(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":an(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":an(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":an(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":an(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Vo(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=rb.get(n)||n,Vo(e,n,r))}}function Ac(e,t,n,r,i,c){switch(n){case"style":gd(e,r,c);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"children":typeof r=="string"?Na(e,r):(typeof r=="number"||typeof r=="bigint")&&Na(e,""+r);break;case"onScroll":r!=null&&we("scroll",e);break;case"onScrollEnd":r!=null&&we("scrollend",e);break;case"onClick":r!=null&&(e.onclick=rn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!id.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(i=n.endsWith("Capture"),t=n.slice(2,i?n.length-7:void 0),c=e[ft]||null,c=c!=null?c[n]:null,typeof c=="function"&&e.removeEventListener(t,c,i),typeof r=="function")){typeof c!="function"&&c!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,i);break e}n in e?e[n]=r:r===!0?e.setAttribute(n,""):Vo(e,n,r)}}}function ct(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":we("error",e),we("load",e);var r=!1,i=!1,c;for(c in n)if(n.hasOwnProperty(c)){var m=n[c];if(m!=null)switch(c){case"src":r=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:ze(e,t,c,m,n,null)}}i&&ze(e,t,"srcSet",n.srcSet,n,null),r&&ze(e,t,"src",n.src,n,null);return;case"input":we("invalid",e);var b=c=m=i=null,x=null,E=null;for(r in n)if(n.hasOwnProperty(r)){var H=n[r];if(H!=null)switch(r){case"name":i=H;break;case"type":m=H;break;case"checked":x=H;break;case"defaultChecked":E=H;break;case"value":c=H;break;case"defaultValue":b=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(s(137,t));break;default:ze(e,t,r,H,n,null)}}pd(e,c,b,x,E,m,i,!1);return;case"select":we("invalid",e),r=m=c=null;for(i in n)if(n.hasOwnProperty(i)&&(b=n[i],b!=null))switch(i){case"value":c=b;break;case"defaultValue":m=b;break;case"multiple":r=b;default:ze(e,t,i,b,n,null)}t=c,n=m,e.multiple=!!r,t!=null?ja(e,!!r,t,!1):n!=null&&ja(e,!!r,n,!0);return;case"textarea":we("invalid",e),c=i=r=null;for(m in n)if(n.hasOwnProperty(m)&&(b=n[m],b!=null))switch(m){case"value":r=b;break;case"defaultValue":i=b;break;case"children":c=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(s(91));break;default:ze(e,t,m,b,n,null)}md(e,r,i,c);return;case"option":for(x in n)n.hasOwnProperty(x)&&(r=n[x],r!=null)&&(x==="selected"?e.selected=r&&typeof r!="function"&&typeof r!="symbol":ze(e,t,x,r,n,null));return;case"dialog":we("beforetoggle",e),we("toggle",e),we("cancel",e),we("close",e);break;case"iframe":case"object":we("load",e);break;case"video":case"audio":for(r=0;r<uo.length;r++)we(uo[r],e);break;case"image":we("error",e),we("load",e);break;case"details":we("toggle",e);break;case"embed":case"source":case"link":we("error",e),we("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(E in n)if(n.hasOwnProperty(E)&&(r=n[E],r!=null))switch(E){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:ze(e,t,E,r,n,null)}return;default:if($i(t)){for(H in n)n.hasOwnProperty(H)&&(r=n[H],r!==void 0&&Ac(e,t,H,r,n,void 0));return}}for(b in n)n.hasOwnProperty(b)&&(r=n[b],r!=null&&ze(e,t,b,r,n,null))}function Lv(e,t,n,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,c=null,m=null,b=null,x=null,E=null,H=null;for(R in n){var q=n[R];if(n.hasOwnProperty(R)&&q!=null)switch(R){case"checked":break;case"value":break;case"defaultValue":x=q;default:r.hasOwnProperty(R)||ze(e,t,R,null,r,q)}}for(var M in r){var R=r[M];if(q=n[M],r.hasOwnProperty(M)&&(R!=null||q!=null))switch(M){case"type":c=R;break;case"name":i=R;break;case"checked":E=R;break;case"defaultChecked":H=R;break;case"value":m=R;break;case"defaultValue":b=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(137,t));break;default:R!==q&&ze(e,t,M,R,r,q)}}qi(e,m,b,x,E,H,c,i);return;case"select":R=m=b=M=null;for(c in n)if(x=n[c],n.hasOwnProperty(c)&&x!=null)switch(c){case"value":break;case"multiple":R=x;default:r.hasOwnProperty(c)||ze(e,t,c,null,r,x)}for(i in r)if(c=r[i],x=n[i],r.hasOwnProperty(i)&&(c!=null||x!=null))switch(i){case"value":M=c;break;case"defaultValue":b=c;break;case"multiple":m=c;default:c!==x&&ze(e,t,i,c,r,x)}t=b,n=m,r=R,M!=null?ja(e,!!n,M,!1):!!r!=!!n&&(t!=null?ja(e,!!n,t,!0):ja(e,!!n,n?[]:"",!1));return;case"textarea":R=M=null;for(b in n)if(i=n[b],n.hasOwnProperty(b)&&i!=null&&!r.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:ze(e,t,b,null,r,i)}for(m in r)if(i=r[m],c=n[m],r.hasOwnProperty(m)&&(i!=null||c!=null))switch(m){case"value":M=i;break;case"defaultValue":R=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(s(91));break;default:i!==c&&ze(e,t,m,i,r,c)}fd(e,M,R);return;case"option":for(var ee in n)M=n[ee],n.hasOwnProperty(ee)&&M!=null&&!r.hasOwnProperty(ee)&&(ee==="selected"?e.selected=!1:ze(e,t,ee,null,r,M));for(x in r)M=r[x],R=n[x],r.hasOwnProperty(x)&&M!==R&&(M!=null||R!=null)&&(x==="selected"?e.selected=M&&typeof M!="function"&&typeof M!="symbol":ze(e,t,x,M,r,R));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var de in n)M=n[de],n.hasOwnProperty(de)&&M!=null&&!r.hasOwnProperty(de)&&ze(e,t,de,null,r,M);for(E in r)if(M=r[E],R=n[E],r.hasOwnProperty(E)&&M!==R&&(M!=null||R!=null))switch(E){case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(s(137,t));break;default:ze(e,t,E,M,r,R)}return;default:if($i(t)){for(var je in n)M=n[je],n.hasOwnProperty(je)&&M!==void 0&&!r.hasOwnProperty(je)&&Ac(e,t,je,void 0,r,M);for(H in r)M=r[H],R=n[H],!r.hasOwnProperty(H)||M===R||M===void 0&&R===void 0||Ac(e,t,H,M,r,R);return}}for(var S in n)M=n[S],n.hasOwnProperty(S)&&M!=null&&!r.hasOwnProperty(S)&&ze(e,t,S,null,r,M);for(q in r)M=r[q],R=n[q],!r.hasOwnProperty(q)||M===R||M==null&&R==null||ze(e,t,q,M,r,R)}function vm(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Rv(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),r=0;r<n.length;r++){var i=n[r],c=i.transferSize,m=i.initiatorType,b=i.duration;if(c&&b&&vm(m)){for(m=0,b=i.responseEnd,r+=1;r<n.length;r++){var x=n[r],E=x.startTime;if(E>b)break;var H=x.transferSize,q=x.initiatorType;H&&vm(q)&&(x=x.responseEnd,m+=H*(x<b?1:(b-E)/(x-E)))}if(--r,t+=8*(c+m)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Mc=null,Lc=null;function Ql(e){return e.nodeType===9?e:e.ownerDocument}function ym(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function xm(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Rc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Dc=null;function Dv(){var e=window.event;return e&&e.type==="popstate"?e===Dc?!1:(Dc=e,!0):(Dc=null,!1)}var km=typeof setTimeout=="function"?setTimeout:void 0,zv=typeof clearTimeout=="function"?clearTimeout:void 0,wm=typeof Promise=="function"?Promise:void 0,jv=typeof queueMicrotask=="function"?queueMicrotask:typeof wm<"u"?function(e){return wm.resolve(null).then(e).catch(Nv)}:km;function Nv(e){setTimeout(function(){throw e})}function Kn(e){return e==="head"}function _m(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"||n==="/&"){if(r===0){e.removeChild(i),fr(t);return}r--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")r++;else if(n==="html")fo(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,fo(n);for(var c=n.firstChild;c;){var m=c.nextSibling,b=c.nodeName;c[Mr]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&c.rel.toLowerCase()==="stylesheet"||n.removeChild(c),c=m}}else n==="body"&&fo(e.ownerDocument.body);n=i}while(n);fr(t)}function Sm(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=r}while(n)}function zc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":zc(n),Bi(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Hv(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[Mr])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(c=e.getAttribute("rel"),c==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(c!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(c=e.getAttribute("src"),(c!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&c&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var c=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===c)return e}else return e;if(e=Bt(e.nextSibling),e===null)break}return null}function Uv(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Bt(e.nextSibling),e===null))return null;return e}function Cm(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Bt(e.nextSibling),e===null))return null;return e}function jc(e){return e.data==="$?"||e.data==="$~"}function Nc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Bv(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var r=function(){t(),n.removeEventListener("DOMContentLoaded",r)};n.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function Bt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Hc=null;function Tm(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Bt(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Om(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Em(e,t,n){switch(t=Ql(n),e){case"html":if(e=t.documentElement,!e)throw Error(s(452));return e;case"head":if(e=t.head,!e)throw Error(s(453));return e;case"body":if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function fo(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Bi(e)}var Pt=new Map,Am=new Set;function Zl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var kn=$.d;$.d={f:Pv,r:qv,D:Gv,C:$v,L:Qv,m:Zv,X:Yv,S:Vv,M:Kv};function Pv(){var e=kn.f(),t=Nl();return e||t}function qv(e){var t=Ra(e);t!==null&&t.tag===5&&t.type==="form"?Zp(t):kn.r(e)}var ur=typeof document>"u"?null:document;function Mm(e,t,n){var r=ur;if(r&&typeof t=="string"&&t){var i=Rt(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof n=="string"&&(i+='[crossorigin="'+n+'"]'),Am.has(i)||(Am.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement("link"),ct(t,"link",e),nt(t),r.head.appendChild(t)))}}function Gv(e){kn.D(e),Mm("dns-prefetch",e,null)}function $v(e,t){kn.C(e,t),Mm("preconnect",e,t)}function Qv(e,t,n){kn.L(e,t,n);var r=ur;if(r&&e&&t){var i='link[rel="preload"][as="'+Rt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(i+='[imagesrcset="'+Rt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(i+='[imagesizes="'+Rt(n.imageSizes)+'"]')):i+='[href="'+Rt(e)+'"]';var c=i;switch(t){case"style":c=dr(e);break;case"script":c=pr(e)}Pt.has(c)||(e=y({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Pt.set(c,e),r.querySelector(i)!==null||t==="style"&&r.querySelector(mo(c))||t==="script"&&r.querySelector(ho(c))||(t=r.createElement("link"),ct(t,"link",e),nt(t),r.head.appendChild(t)))}}function Zv(e,t){kn.m(e,t);var n=ur;if(n&&e){var r=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+Rt(r)+'"][href="'+Rt(e)+'"]',c=i;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=pr(e)}if(!Pt.has(c)&&(e=y({rel:"modulepreload",href:e},t),Pt.set(c,e),n.querySelector(i)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(ho(c)))return}r=n.createElement("link"),ct(r,"link",e),nt(r),n.head.appendChild(r)}}}function Vv(e,t,n){kn.S(e,t,n);var r=ur;if(r&&e){var i=Da(r).hoistableStyles,c=dr(e);t=t||"default";var m=i.get(c);if(!m){var b={loading:0,preload:null};if(m=r.querySelector(mo(c)))b.loading=5;else{e=y({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Pt.get(c))&&Uc(e,n);var x=m=r.createElement("link");nt(x),ct(x,"link",e),x._p=new Promise(function(E,H){x.onload=E,x.onerror=H}),x.addEventListener("load",function(){b.loading|=1}),x.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Vl(m,t,r)}m={type:"stylesheet",instance:m,count:1,state:b},i.set(c,m)}}}function Yv(e,t){kn.X(e,t);var n=ur;if(n&&e){var r=Da(n).hoistableScripts,i=pr(e),c=r.get(i);c||(c=n.querySelector(ho(i)),c||(e=y({src:e,async:!0},t),(t=Pt.get(i))&&Bc(e,t),c=n.createElement("script"),nt(c),ct(c,"link",e),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(i,c))}}function Kv(e,t){kn.M(e,t);var n=ur;if(n&&e){var r=Da(n).hoistableScripts,i=pr(e),c=r.get(i);c||(c=n.querySelector(ho(i)),c||(e=y({src:e,async:!0,type:"module"},t),(t=Pt.get(i))&&Bc(e,t),c=n.createElement("script"),nt(c),ct(c,"link",e),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(i,c))}}function Lm(e,t,n,r){var i=(i=me.current)?Zl(i):null;if(!i)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=dr(n.href),n=Da(i).hoistableStyles,r=n.get(t),r||(r={type:"style",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=dr(n.href);var c=Da(i).hoistableStyles,m=c.get(e);if(m||(i=i.ownerDocument||i,m={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,m),(c=i.querySelector(mo(e)))&&!c._p&&(m.instance=c,m.state.loading=5),Pt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Pt.set(e,n),c||Iv(i,e,n,m.state))),t&&r===null)throw Error(s(528,""));return m}if(t&&r!==null)throw Error(s(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=pr(n),n=Da(i).hoistableScripts,r=n.get(t),r||(r={type:"script",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function dr(e){return'href="'+Rt(e)+'"'}function mo(e){return'link[rel="stylesheet"]['+e+"]"}function Rm(e){return y({},e,{"data-precedence":e.precedence,precedence:null})}function Iv(e,t,n,r){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?r.loading=1:(t=e.createElement("link"),r.preload=t,t.addEventListener("load",function(){return r.loading|=1}),t.addEventListener("error",function(){return r.loading|=2}),ct(t,"link",n),nt(t),e.head.appendChild(t))}function pr(e){return'[src="'+Rt(e)+'"]'}function ho(e){return"script[async]"+e}function Dm(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var r=e.querySelector('style[data-href~="'+Rt(n.href)+'"]');if(r)return t.instance=r,nt(r),r;var i=y({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),nt(r),ct(r,"style",i),Vl(r,n.precedence,e),t.instance=r;case"stylesheet":i=dr(n.href);var c=e.querySelector(mo(i));if(c)return t.state.loading|=4,t.instance=c,nt(c),c;r=Rm(n),(i=Pt.get(i))&&Uc(r,i),c=(e.ownerDocument||e).createElement("link"),nt(c);var m=c;return m._p=new Promise(function(b,x){m.onload=b,m.onerror=x}),ct(c,"link",r),t.state.loading|=4,Vl(c,n.precedence,e),t.instance=c;case"script":return c=pr(n.src),(i=e.querySelector(ho(c)))?(t.instance=i,nt(i),i):(r=n,(i=Pt.get(c))&&(r=y({},n),Bc(r,i)),e=e.ownerDocument||e,i=e.createElement("script"),nt(i),ct(i,"link",r),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(s(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(r=t.instance,t.state.loading|=4,Vl(r,n.precedence,e));return t.instance}function Vl(e,t,n){for(var r=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=r.length?r[r.length-1]:null,c=i,m=0;m<r.length;m++){var b=r[m];if(b.dataset.precedence===t)c=b;else if(c!==i)break}c?c.parentNode.insertBefore(e,c.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Uc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Bc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Yl=null;function zm(e,t,n){if(Yl===null){var r=new Map,i=Yl=new Map;i.set(n,r)}else i=Yl,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var c=n[i];if(!(c[Mr]||c[ot]||e==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var m=c.getAttribute(t)||"";m=e+m;var b=r.get(m);b?b.push(c):r.set(m,[c])}}return r}function jm(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Xv(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Nm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Fv(e,t,n,r){if(n.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var i=dr(r.href),c=t.querySelector(mo(i));if(c){t=c._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Kl.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=c,nt(c);return}c=t.ownerDocument||t,r=Rm(r),(i=Pt.get(i))&&Uc(r,i),c=c.createElement("link"),nt(c);var m=c;m._p=new Promise(function(b,x){m.onload=b,m.onerror=x}),ct(c,"link",r),n.instance=c}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Kl.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Pc=0;function Jv(e,t){return e.stylesheets&&e.count===0&&Xl(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xl(e,e.stylesheets),e.unsuspend){var c=e.unsuspend;e.unsuspend=null,c()}},6e4+t);0<e.imgBytes&&Pc===0&&(Pc=62500*Rv());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xl(e,e.stylesheets),e.unsuspend)){var c=e.unsuspend;e.unsuspend=null,c()}},(e.imgBytes>Pc?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Kl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xl(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Il=null;function Xl(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Il=new Map,t.forEach(Wv,e),Il=null,Kl.call(e))}function Wv(e,t){if(!(t.state.loading&4)){var n=Il.get(e);if(n)var r=n.get(null);else{n=new Map,Il.set(e,n);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<i.length;c++){var m=i[c];(m.nodeName==="LINK"||m.getAttribute("media")!=="not all")&&(n.set(m.dataset.precedence,m),r=m)}r&&n.set(null,r)}i=t.instance,m=i.getAttribute("data-precedence"),c=n.get(m)||r,c===r&&n.set(null,i),n.set(m,i),this.count++,r=Kl.bind(this),i.addEventListener("load",r),i.addEventListener("error",r),c?c.parentNode.insertBefore(i,c.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var go={$$typeof:F,Provider:null,Consumer:null,_currentValue:U,_currentValue2:U,_threadCount:0};function ey(e,t,n,r,i,c,m,b,x){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ji(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ji(0),this.hiddenUpdates=ji(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=c,this.onRecoverableError=m,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=x,this.incompleteTransitions=new Map}function Hm(e,t,n,r,i,c,m,b,x,E,H,q){return e=new ey(e,t,n,m,x,E,H,q,b),t=1,c===!0&&(t|=24),c=St(3,null,null,t),e.current=c,c.stateNode=e,t=ys(),t.refCount++,e.pooledCache=t,t.refCount++,c.memoizedState={element:r,isDehydrated:n,cache:t},_s(c),e}function Um(e){return e?(e=$a,e):$a}function Bm(e,t,n,r,i,c){i=Um(i),r.context===null?r.context=i:r.pendingContext=i,r=Hn(t),r.payload={element:n},c=c===void 0?null:c,c!==null&&(r.callback=c),n=Un(e,r,t),n!==null&&(yt(n,e,t),Yr(n,e,t))}function Pm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function qc(e,t){Pm(e,t),(e=e.alternate)&&Pm(e,t)}function qm(e){if(e.tag===13||e.tag===31){var t=da(e,67108864);t!==null&&yt(t,e,67108864),qc(e,67108864)}}function Gm(e){if(e.tag===13||e.tag===31){var t=At();t=Ni(t);var n=da(e,t);n!==null&&yt(n,e,t),qc(e,t)}}var Fl=!0;function ty(e,t,n,r){var i=T.T;T.T=null;var c=$.p;try{$.p=2,Gc(e,t,n,r)}finally{$.p=c,T.T=i}}function ny(e,t,n,r){var i=T.T;T.T=null;var c=$.p;try{$.p=8,Gc(e,t,n,r)}finally{$.p=c,T.T=i}}function Gc(e,t,n,r){if(Fl){var i=$c(r);if(i===null)Ec(e,t,r,Jl,n),Qm(e,r);else if(ry(i,e,t,n,r))r.stopPropagation();else if(Qm(e,r),t&4&&-1<ay.indexOf(e)){for(;i!==null;){var c=Ra(i);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var m=la(c.pendingLanes);if(m!==0){var b=c;for(b.pendingLanes|=2,b.entangledLanes|=2;m;){var x=1<<31-wt(m);b.entanglements[1]|=x,m&=~x}Ft(c),(Me&6)===0&&(zl=xt()+500,co(0))}}break;case 31:case 13:b=da(c,2),b!==null&&yt(b,c,2),Nl(),qc(c,2)}if(c=$c(r),c===null&&Ec(e,t,r,Jl,n),c===i)break;i=c}i!==null&&r.stopPropagation()}else Ec(e,t,r,null,n)}}function $c(e){return e=Zi(e),Qc(e)}var Jl=null;function Qc(e){if(Jl=null,e=La(e),e!==null){var t=d(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=p(t),e!==null)return e;e=null}else if(n===31){if(e=h(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Jl=e,null}function $m(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(G0()){case Xu:return 2;case Fu:return 8;case qo:case $0:return 32;case Ju:return 268435456;default:return 32}default:return 32}}var Zc=!1,In=null,Xn=null,Fn=null,bo=new Map,vo=new Map,Jn=[],ay="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Qm(e,t){switch(e){case"focusin":case"focusout":In=null;break;case"dragenter":case"dragleave":Xn=null;break;case"mouseover":case"mouseout":Fn=null;break;case"pointerover":case"pointerout":bo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":vo.delete(t.pointerId)}}function yo(e,t,n,r,i,c){return e===null||e.nativeEvent!==c?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:c,targetContainers:[i]},t!==null&&(t=Ra(t),t!==null&&qm(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function ry(e,t,n,r,i){switch(t){case"focusin":return In=yo(In,e,t,n,r,i),!0;case"dragenter":return Xn=yo(Xn,e,t,n,r,i),!0;case"mouseover":return Fn=yo(Fn,e,t,n,r,i),!0;case"pointerover":var c=i.pointerId;return bo.set(c,yo(bo.get(c)||null,e,t,n,r,i)),!0;case"gotpointercapture":return c=i.pointerId,vo.set(c,yo(vo.get(c)||null,e,t,n,r,i)),!0}return!1}function Zm(e){var t=La(e.target);if(t!==null){var n=d(t);if(n!==null){if(t=n.tag,t===13){if(t=p(n),t!==null){e.blockedOn=t,rd(e.priority,function(){Gm(n)});return}}else if(t===31){if(t=h(n),t!==null){e.blockedOn=t,rd(e.priority,function(){Gm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Wl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=$c(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Qi=r,n.target.dispatchEvent(r),Qi=null}else return t=Ra(n),t!==null&&qm(t),e.blockedOn=n,!1;t.shift()}return!0}function Vm(e,t,n){Wl(e)&&n.delete(t)}function oy(){Zc=!1,In!==null&&Wl(In)&&(In=null),Xn!==null&&Wl(Xn)&&(Xn=null),Fn!==null&&Wl(Fn)&&(Fn=null),bo.forEach(Vm),vo.forEach(Vm)}function ei(e,t){e.blockedOn===t&&(e.blockedOn=null,Zc||(Zc=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,oy)))}var ti=null;function Ym(e){ti!==e&&(ti=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){ti===e&&(ti=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!="function"){if(Qc(r||n)===null)continue;break}var c=Ra(n);c!==null&&(e.splice(t,3),t-=3,$s(c,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function fr(e){function t(x){return ei(x,e)}In!==null&&ei(In,e),Xn!==null&&ei(Xn,e),Fn!==null&&ei(Fn,e),bo.forEach(t),vo.forEach(t);for(var n=0;n<Jn.length;n++){var r=Jn[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Jn.length&&(n=Jn[0],n.blockedOn===null);)Zm(n),n.blockedOn===null&&Jn.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],c=n[r+1],m=i[ft]||null;if(typeof c=="function")m||Ym(n);else if(m){var b=null;if(c&&c.hasAttribute("formAction")){if(i=c,m=c[ft]||null)b=m.formAction;else if(Qc(i)!==null)continue}else b=m.action;typeof b=="function"?n[r+1]=b:(n.splice(r,3),r-=3),Ym(n)}}}function Km(){function e(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(m){return i=m})},focusReset:"manual",scroll:"manual"})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,i=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),i!==null&&(i(),i=null)}}}function Vc(e){this._internalRoot=e}ni.prototype.render=Vc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var n=t.current,r=At();Bm(n,r,e,t,null,null)},ni.prototype.unmount=Vc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Bm(e.current,2,null,e,null,null),Nl(),t[Ma]=null}};function ni(e){this._internalRoot=e}ni.prototype.unstable_scheduleHydration=function(e){if(e){var t=ad();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Jn.length&&t!==0&&t<Jn[n].priority;n++);Jn.splice(n,0,e),n===0&&Zm(e)}};var Im=o.version;if(Im!=="19.2.3")throw Error(s(527,Im,"19.2.3"));$.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=g(t),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var ly={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:T,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ai=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ai.isDisabled&&ai.supportsFiber)try{Or=ai.inject(ly),kt=ai}catch{}}return ko.createRoot=function(e,t){if(!u(e))throw Error(s(299));var n=!1,r="",i=tf,c=nf,m=af;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(c=t.onCaughtError),t.onRecoverableError!==void 0&&(m=t.onRecoverableError)),t=Hm(e,1,!1,null,null,n,r,null,i,c,m,Km),e[Ma]=t.current,Oc(e),new Vc(t)},ko.hydrateRoot=function(e,t,n){if(!u(e))throw Error(s(299));var r=!1,i="",c=tf,m=nf,b=af,x=null;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(m=n.onCaughtError),n.onRecoverableError!==void 0&&(b=n.onRecoverableError),n.formState!==void 0&&(x=n.formState)),t=Hm(e,1,!0,t,n??null,r,i,x,c,m,b,Km),t.context=Um(null),n=t.current,r=At(),r=Ni(r),i=Hn(r),i.callback=null,Un(n,i,r),n=r,t.current.lanes=n,Ar(t,n),Ft(t),e[Ma]=t.current,Oc(e),new ni(t)},ko.version="19.2.3",ko}var oh;function yy(){if(oh)return Ic.exports;oh=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(o){console.error(o)}}return a(),Ic.exports=vy(),Ic.exports}var xy=yy();var Ou=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,Yh=/^[\\/]{2}/;function ky(a,o){return o+a.replace(/\\/g,"/")}var lh="popstate";function ih(a){return typeof a=="object"&&a!=null&&"pathname"in a&&"search"in a&&"hash"in a&&"state"in a&&"key"in a}function wy(a={}){function o(s,u){let d=u.state?.masked,{pathname:p,search:h,hash:f}=d||s.location;return du("",{pathname:p,search:h,hash:f},u.state&&u.state.usr||null,u.state&&u.state.key||"default",d?{pathname:s.location.pathname,search:s.location.search,hash:s.location.hash}:void 0)}function l(s,u){return typeof u=="string"?u:vr(u)}return Sy(o,l,null,a)}function qe(a,o){if(a===!1||a===null||typeof a>"u")throw new Error(o)}function tn(a,o){if(!a){typeof console<"u"&&console.warn(o);try{throw new Error(o)}catch{}}}function _y(){return Math.random().toString(36).substring(2,10)}function sh(a,o){return{usr:a.state,key:a.key,idx:o,masked:a.mask?{pathname:a.pathname,search:a.search,hash:a.hash}:void 0}}function du(a,o,l=null,s,u){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof o=="string"?wr(o):o,state:l,key:o&&o.key||s||_y(),mask:u}}function vr({pathname:a="/",search:o="",hash:l=""}){return o&&o!=="?"&&(a+=o.charAt(0)==="?"?o:"?"+o),l&&l!=="#"&&(a+=l.charAt(0)==="#"?l:"#"+l),a}function wr(a){let o={};if(a){let l=a.indexOf("#");l>=0&&(o.hash=a.substring(l),a=a.substring(0,l));let s=a.indexOf("?");s>=0&&(o.search=a.substring(s),a=a.substring(0,s)),a&&(o.pathname=a)}return o}function Sy(a,o,l,s={}){let{window:u=document.defaultView,v5Compat:d=!1}=s,p=u.history,h="POP",f=null,g=v();g==null&&(g=0,p.replaceState({...p.state,idx:g},""));function v(){return(p.state||{idx:null}).idx}function y(){h="POP";let L=v(),Y=L==null?null:L-g;g=L,f&&f({action:h,location:A.location,delta:Y})}function C(L,Y){h="PUSH";let I=ih(L)?L:du(A.location,L,Y);g=v()+1;let F=sh(I,g),pe=A.createHref(I.mask||I);try{p.pushState(F,"",pe)}catch(Z){if(Z instanceof DOMException&&Z.name==="DataCloneError")throw Z;u.location.assign(pe)}d&&f&&f({action:h,location:A.location,delta:1})}function D(L,Y){h="REPLACE";let I=ih(L)?L:du(A.location,L,Y);g=v();let F=sh(I,g),pe=A.createHref(I.mask||I);p.replaceState(F,"",pe),d&&f&&f({action:h,location:A.location,delta:0})}function N(L){return Cy(u,L)}let A={get action(){return h},get location(){return a(u,p)},listen(L){if(f)throw new Error("A history only accepts one active listener");return u.addEventListener(lh,y),f=L,()=>{u.removeEventListener(lh,y),f=null}},createHref(L){return o(u,L)},createURL:N,encodeLocation(L){let Y=N(L);return{pathname:Y.pathname,search:Y.search,hash:Y.hash}},push:C,replace:D,go(L){return p.go(L)}};return A}function Cy(a,o,l=!1){let s="http://localhost";a&&(s=a.location.origin!=="null"?a.location.origin:a.location.href),qe(s,"No window.location.(origin|href) available to create URL");let u=typeof o=="string"?o:vr(o);return u=u.replace(/ $/,"%20"),!l&&Yh.test(u)&&(u=s+u),new URL(u,s)}function Kh(a,o,l="/"){return Ty(a,o,l,!1)}function Ty(a,o,l,s,u){let d=typeof o=="string"?wr(o):o,p=Sn(d.pathname||"/",l);if(p==null)return null;let h=Oy(a),f=null,g=Uy(p);for(let v=0;f==null&&v<h.length;++v)f=Hy(h[v],g,s);return f}function Oy(a){let o=Ih(a);return Ey(o),o}function Ih(a,o=[],l=[],s="",u=!1){let d=(p,h,f=u,g)=>{let v={relativePath:g===void 0?p.path||"":g,caseSensitive:p.caseSensitive===!0,childrenIndex:h,route:p};if(v.relativePath.startsWith("/")){if(!v.relativePath.startsWith(s)&&f)return;qe(v.relativePath.startsWith(s),`Absolute route path "${v.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),v.relativePath=v.relativePath.slice(s.length)}let y=Zt([s,v.relativePath]),C=l.concat(v);p.children&&p.children.length>0&&(qe(p.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${y}".`),Ih(p.children,o,C,y,f)),!(p.path==null&&!p.index)&&o.push({path:y,score:jy(y,p.index),routesMeta:C.map((D,N)=>{let[A,L]=Jh(D.relativePath,D.caseSensitive,N===C.length-1);return{...D,matcher:A,compiledParams:L}})})};return a.forEach((p,h)=>{if(p.path===""||!p.path?.includes("?"))d(p,h);else for(let f of Xh(p.path))d(p,h,!0,f)}),o}function Xh(a){let o=a.split("/");if(o.length===0)return[];let[l,...s]=o,u=l.endsWith("?"),d=l.replace(/\?$/,"");if(s.length===0)return u?[d,""]:[d];let p=Xh(s.join("/")),h=[];return h.push(...p.map(f=>f===""?d:[d,f].join("/"))),u&&h.push(...p),h.map(f=>a.startsWith("/")&&f===""?"/":f)}function Ey(a){a.sort((o,l)=>o.score!==l.score?l.score-o.score:Ny(o.routesMeta.map(s=>s.childrenIndex),l.routesMeta.map(s=>s.childrenIndex)))}var Ay=/^:[\w-]+$/,My=3,Ly=2,Ry=1,Dy=10,zy=-2,ch=a=>a==="*";function jy(a,o){let l=a.split("/"),s=l.length;return l.some(ch)&&(s+=zy),o&&(s+=Ly),l.filter(u=>!ch(u)).reduce((u,d)=>u+(Ay.test(d)?My:d===""?Ry:Dy),s)}function Ny(a,o){return a.length===o.length&&a.slice(0,-1).every((s,u)=>s===o[u])?a[a.length-1]-o[o.length-1]:0}function Hy(a,o,l=!1){let{routesMeta:s}=a,u={},d="/",p=[];for(let h=0;h<s.length;++h){let f=s[h],g=h===s.length-1,v=d==="/"?o:o.slice(d.length)||"/",y={path:f.relativePath,caseSensitive:f.caseSensitive,end:g},C=f.matcher&&f.compiledParams?Fh(y,v,f.matcher,f.compiledParams):gi(y,v),D=f.route;if(!C&&g&&l&&!s[s.length-1].route.index&&(C=gi({path:f.relativePath,caseSensitive:f.caseSensitive,end:!1},v)),!C)return null;Object.assign(u,C.params),p.push({params:u,pathname:Zt([d,C.pathname]),pathnameBase:qy(Zt([d,C.pathnameBase])),route:D}),C.pathnameBase!=="/"&&(d=Zt([d,C.pathnameBase]))}return p}function gi(a,o){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[l,s]=Jh(a.path,a.caseSensitive,a.end);return Fh(a,o,l,s)}function Fh(a,o,l,s){let u=o.match(l);if(!u)return null;let d=u[0],p=yr(d,1),h=u.slice(1);return{params:s.reduce((g,{paramName:v,isOptional:y},C)=>{if(v==="*"){let N=h[C]||"";p=yr(d.slice(0,d.length-N.length),1)}const D=h[C];return y&&!D?g[v]=void 0:g[v]=(D||"").replace(/%2F/g,"/"),g},{}),pathname:d,pathnameBase:p,pattern:a}}function Jh(a,o=!1,l=!0){tn(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let s=[],u="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(p,h,f,g,v)=>{if(s.push({paramName:h,isOptional:f!=null}),f){let y=v.charAt(g+p.length);return y&&y!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return a.endsWith("*")?(s.push({paramName:"*"}),u+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):l?u+="\\/*$":a!==""&&a!=="/"&&(u+="(?:(?=\\/|$))"),[new RegExp(u,o?void 0:"i"),s]}function Uy(a){try{return a.split("/").map(o=>decodeURIComponent(o).replace(/\//g,"%2F")).join("/")}catch(o){return tn(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`),a}}function Sn(a,o){if(o==="/")return a;if(!a.toLowerCase().startsWith(o.toLowerCase()))return null;let l=o.endsWith("/")?o.length-1:o.length,s=a.charAt(l);return s&&s!=="/"?null:a.slice(l)||"/"}function By(a,o="/"){let{pathname:l,search:s="",hash:u=""}=typeof a=="string"?wr(a):a,d;return l?(l=eg(l),l.startsWith("/")||l.startsWith("\\")?d=uh(l.substring(1),"/"):d=uh(l,o)):d=o,{pathname:d,search:Gy(s),hash:$y(u)}}function uh(a,o){let l=yr(o).split("/");return a.split("/").forEach(u=>{u===".."?l.length>1&&l.pop():u!=="."&&l.push(u)}),l.length>1?l.join("/"):"/"}function Wc(a,o,l,s){return`Cannot include a '${a}' character in a manually specified \`to.${o}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${l}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Py(a){return a.filter((o,l)=>l===0||o.route.path&&o.route.path.length>0)}function Wh(a){let o=Py(a);return o.map((l,s)=>s===o.length-1?l.pathname:l.pathnameBase)}function Eu(a,o,l,s=!1){let u;typeof a=="string"?u=wr(a):(u={...a},qe(!u.pathname||!u.pathname.includes("?"),Wc("?","pathname","search",u)),qe(!u.pathname||!u.pathname.includes("#"),Wc("#","pathname","hash",u)),qe(!u.search||!u.search.includes("#"),Wc("#","search","hash",u)));let d=a===""||u.pathname==="",p=d?"/":u.pathname,h;if(p==null)h=l;else{let y=o.length-1;if(!s&&p.startsWith("..")){let C=p.split("/");for(;C[0]==="..";)C.shift(),y-=1;u.pathname=C.join("/")}h=y>=0?o[y]:"/"}let f=By(u,h),g=p&&p!=="/"&&p.endsWith("/"),v=(d||p===".")&&l.endsWith("/");return!f.pathname.endsWith("/")&&(g||v)&&(f.pathname+="/"),f}var eg=a=>a.replace(/[\\/]{2,}/g,"/"),Zt=a=>eg(a.join("/"));function yr(a,o=0){let l=a.length;for(;l>o&&a.charCodeAt(l-1)===47;)l--;return l===a.length?a:a.slice(0,l)}var qy=a=>yr(a).replace(/^\/*/,"/"),Gy=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,$y=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a,Qy=class{constructor(a,o,l,s=!1){this.status=a,this.statusText=o||"",this.internal=s,l instanceof Error?(this.data=l.toString(),this.error=l):this.data=l}};function Zy(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}function Vy(a){let o=a.map(l=>l.route.path).filter(Boolean);return Zt(o)||"/"}var tg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function ng(a,o){let l=a;if(typeof l!="string"||!Ou.test(l))return{absoluteURL:void 0,isExternal:!1,to:l};let s=l,u=!1;if(tg)try{let d=new URL(window.location.href),p=Yh.test(l)?new URL(ky(l,d.protocol)):new URL(l),h=Sn(p.pathname,o);p.origin===d.origin&&h!=null?l=h+p.search+p.hash:u=!0}catch{tn(!1,`<Link to="${l}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:s,isExternal:u,to:l}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var dh=new URL("http://localhost");function ag(a){if(a.createURL)return a.createURL("/");try{return new URL(a.createHref("/"),dh)}catch{return dh}}function eu(a,o){return a.origin===o.origin&&(a.origin!=="null"||a.protocol===o.protocol&&a.host===o.host)}function Yy(a,o){if(a.startsWith("//"))return!0;let l=o.protocol.toLowerCase();return a.toLowerCase().startsWith(l)?o.host===""||a.slice(l.length).startsWith("//"):!1}function rg(a,o,l,s){let u=null;try{u=a==null?null:new URL(a,l)}catch{}let d=new URL(o,l),p=u!=null&&!eu(u,l),h=!eu(d,l);if(s==="reject"){if(p||h)throw new Error("External navigation is not allowed")}else if(h&&(u==null||!Yy(a,u)||!eu(u,d)))throw new Error("External navigation is not allowed")}var og=["POST","PUT","PATCH","DELETE"];new Set(og);var Ky=["GET",...og];new Set(Ky);var Iy=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function Xy(a){try{return Iy.includes(new URL(a).protocol)}catch{return!1}}var _r=_.createContext(null);_r.displayName="DataRouter";var ki=_.createContext(null);ki.displayName="DataRouterState";var lg=_.createContext(!1);function Fy(){return _.useContext(lg)}var ig=_.createContext({isTransitioning:!1});ig.displayName="ViewTransition";var Jy=_.createContext(new Map);Jy.displayName="Fetchers";var Wy=_.createContext(null);Wy.displayName="Await";var qt=_.createContext(null);qt.displayName="Navigation";var Ro=_.createContext(null);Ro.displayName="Location";var Cn=_.createContext({outlet:null,matches:[],isDataRoute:!1});Cn.displayName="Route";var Au=_.createContext(null);Au.displayName="RouteError";var sg="REACT_ROUTER_ERROR",e1="REDIRECT",t1="ROUTE_ERROR_RESPONSE";function n1(a){if(a.startsWith(`${sg}:${e1}:{`))try{let o=JSON.parse(a.slice(28));if(typeof o=="object"&&o&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.location=="string"&&typeof o.reloadDocument=="boolean"&&typeof o.replace=="boolean")return o}catch{}}function a1(a){if(a.startsWith(`${sg}:${t1}:{`))try{let o=JSON.parse(a.slice(40));if(typeof o=="object"&&o&&typeof o.status=="number"&&typeof o.statusText=="string")return new Qy(o.status,o.statusText,o.data)}catch{}}function r1(a,{relative:o}={}){qe(Do(),"useHref() may be used only in the context of a <Router> component.");let{basename:l,navigator:s}=_.useContext(qt),{hash:u,pathname:d,search:p}=zo(a,{relative:o}),h=d;return l!=="/"&&(h=d==="/"?l:Zt([l,d])),s.createHref({pathname:h,search:p,hash:u})}function Do(){return _.useContext(Ro)!=null}function Tn(){return qe(Do(),"useLocation() may be used only in the context of a <Router> component."),_.useContext(Ro).location}var cg="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function ug(a){_.useContext(qt).static||_.useLayoutEffect(a)}function Sr(){let{isDataRoute:a}=_.useContext(Cn);return a?b1():o1()}function o1(){qe(Do(),"useNavigate() may be used only in the context of a <Router> component.");let a=_.useContext(_r),{basename:o,navigator:l}=_.useContext(qt),{matches:s}=_.useContext(Cn),{pathname:u}=Tn(),d=JSON.stringify(Wh(s)),p=_.useRef(!1);return ug(()=>{p.current=!0}),_.useCallback((f,g={})=>{if(tn(p.current,cg),!p.current)return;if(typeof f=="number"){l.go(f);return}let v=Eu(f,JSON.parse(d),u,g.relative==="path");a==null&&o!=="/"&&(v.pathname=v.pathname==="/"?o:Zt([o,v.pathname])),rg(typeof f=="string"?f:vr(f),l.createHref(v),ag(l),"reject"),(g.replace?l.replace:l.push)(v,g.state,g)},[o,l,d,u,a])}_.createContext(null);function zo(a,{relative:o}={}){let{matches:l}=_.useContext(Cn),{pathname:s}=Tn(),u=JSON.stringify(Wh(l));return _.useMemo(()=>Eu(a,JSON.parse(u),s,o==="path"),[a,u,s,o])}function l1(a,o){return dg(a,o)}function dg(a,o,l){qe(Do(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=_.useContext(qt),{matches:u}=_.useContext(Cn),d=u[u.length-1],p=d?d.params:{},h=d?d.pathname:"/",f=d?d.pathnameBase:"/",g=d&&d.route;{let L=g&&g.path||"";fg(h,!g||L.endsWith("*")||L.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${L}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${L}"> to <Route path="${L==="/"?"*":`${L}/*`}">.`)}let v=Tn(),y;if(o){let L=typeof o=="string"?wr(o):o;qe(f==="/"||L.pathname?.startsWith(f),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${f}" but pathname "${L.pathname}" was given in the \`location\` prop.`),y=L}else y=v;let C=y.pathname||"/",D=C;if(f!=="/"){let L=f.replace(/^\//,"").split("/");D="/"+C.replace(/^\//,"").split("/").slice(L.length).join("/")}let N=l&&l.state.matches.length?l.state.matches.map(L=>Object.assign(L,{route:l.manifest[L.route.id]||L.route})):Kh(a,{pathname:D});tn(g||N!=null,`No routes matched location "${y.pathname}${y.search}${y.hash}" `),tn(N==null||N[N.length-1].route.element!==void 0||N[N.length-1].route.Component!==void 0||N[N.length-1].route.lazy!==void 0,`Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let A=d1(N&&N.map(L=>Object.assign({},L,{params:Object.assign({},p,L.params),pathname:Zt([f,s.encodeLocation?s.encodeLocation(L.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:L.pathname]),pathnameBase:L.pathnameBase==="/"?f:Zt([f,s.encodeLocation?s.encodeLocation(L.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:L.pathnameBase])})),u,l);return o&&A?_.createElement(Ro.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...y},navigationType:"POP"}},A):A}function i1(){let a=g1(),o=Zy(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),l=a instanceof Error?a.stack:null,s="rgba(200,200,200, 0.5)",u={padding:"0.5rem",backgroundColor:s},d={padding:"2px 4px",backgroundColor:s},p=null;return console.error("Error handled by React Router default ErrorBoundary:",a),p=_.createElement(_.Fragment,null,_.createElement("p",null,"💿 Hey developer 👋"),_.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",_.createElement("code",{style:d},"ErrorBoundary")," or"," ",_.createElement("code",{style:d},"errorElement")," prop on your route.")),_.createElement(_.Fragment,null,_.createElement("h2",null,"Unexpected Application Error!"),_.createElement("h3",{style:{fontStyle:"italic"}},o),l?_.createElement("pre",{style:u},l):null,p)}var s1=_.createElement(i1,null),pg=class extends _.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,o){return o.location!==a.location||o.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:o.error,location:o.location,revalidation:a.revalidation||o.revalidation}}componentDidCatch(a,o){this.props.onError?this.props.onError(a,o):console.error("React Router caught the following error during render",a)}render(){let a=this.state.error;if(this.context&&typeof a=="object"&&a&&"digest"in a&&typeof a.digest=="string"){const l=a1(a.digest);l&&(a=l)}let o=a!==void 0?_.createElement(Cn.Provider,{value:this.props.routeContext},_.createElement(Au.Provider,{value:a,children:this.props.component})):this.props.children;return this.context?_.createElement(c1,{error:a},o):o}};pg.contextType=lg;var tu=new WeakMap;function c1({children:a,error:o}){let{basename:l,navigator:s}=_.useContext(qt);if(typeof o=="object"&&o&&"digest"in o&&typeof o.digest=="string"){let u=n1(o.digest);if(u){let d=tu.get(o);if(d)throw d;let p=ng(u.location,l),h=p.absoluteURL||p.to;if(rg(u.location,h,ag(s),"allow-explicit"),Xy(h))throw new Error("Invalid redirect location");if(tg&&!tu.get(o))if(p.isExternal||u.reloadDocument)window.location.href=h;else{const f=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(p.to,{replace:u.replace}));throw tu.set(o,f),f}return _.createElement("meta",{httpEquiv:"refresh",content:`0;url=${h}`})}}return a}function u1({routeContext:a,match:o,children:l}){let s=_.useContext(_r);return s&&s.static&&s.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=o.route.id),_.createElement(Cn.Provider,{value:a},l)}function d1(a,o=[],l){let s=l?.state;if(a==null){if(!s)return null;if(s.errors)a=s.matches;else if(o.length===0&&!s.initialized&&s.matches.length>0)a=s.matches;else return null}let u=a,d=s?.errors;if(d!=null){let v=u.findIndex(y=>y.route.id&&d?.[y.route.id]!==void 0);qe(v>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(d).join(",")}`),u=u.slice(0,Math.min(u.length,v+1))}let p=!1,h=-1;if(l&&s){p=s.renderFallback;for(let v=0;v<u.length;v++){let y=u[v];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(h=v),y.route.id){let{loaderData:C,errors:D}=s,N=y.route.loader&&!C.hasOwnProperty(y.route.id)&&(!D||D[y.route.id]===void 0);if(y.route.lazy||N){l.isStatic&&(p=!0),h>=0?u=u.slice(0,h+1):u=[u[0]];break}}}}let f=l?.onError,g=s&&f?(v,y)=>{f(v,{location:s.location,params:s.matches?.[0]?.params??{},pattern:Vy(s.matches),errorInfo:y})}:void 0;return u.reduceRight((v,y,C)=>{let D,N=!1,A=null,L=null;s&&(D=d&&y.route.id?d[y.route.id]:void 0,A=y.route.errorElement||s1,p&&(h<0&&C===0?(fg("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),N=!0,L=null):h===C&&(N=!0,L=y.route.hydrateFallbackElement||null)));let Y=o.concat(u.slice(0,C+1)),I=()=>{let F;return D?F=A:N?F=L:y.route.Component?F=_.createElement(y.route.Component,null):y.route.element?F=y.route.element:F=v,_.createElement(u1,{match:y,routeContext:{outlet:v,matches:Y,isDataRoute:s!=null},children:F})};return s&&(y.route.ErrorBoundary||y.route.errorElement||C===0)?_.createElement(pg,{location:s.location,revalidation:s.revalidation,component:A,error:D,children:I(),routeContext:{outlet:null,matches:Y,isDataRoute:!0},onError:g}):I()},null)}function Mu(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function p1(a){let o=_.useContext(_r);return qe(o,Mu(a)),o}function f1(a){let o=_.useContext(ki);return qe(o,Mu(a)),o}function m1(a){let o=_.useContext(Cn);return qe(o,Mu(a)),o}function Lu(a){let o=m1(a),l=o.matches[o.matches.length-1];return qe(l.route.id,`${a} can only be used on routes that contain a unique "id"`),l.route.id}function h1(){return Lu("useRouteId")}function g1(){let a=_.useContext(Au),o=f1("useRouteError"),l=Lu("useRouteError");return a!==void 0?a:o.errors?.[l]}function b1(){let{router:a}=p1("useNavigate"),o=Lu("useNavigate"),l=_.useRef(!1);return ug(()=>{l.current=!0}),_.useCallback(async(u,d={})=>{tn(l.current,cg),l.current&&(typeof u=="number"?await a.navigate(u):await a.navigate(u,{fromRouteId:o,...d}))},[a,o])}var ph={};function fg(a,o,l){!o&&!ph[a]&&(ph[a]=!0,tn(!1,l))}_.memo(v1);function v1({routes:a,manifest:o,future:l,state:s,isStatic:u,onError:d}){return dg(a,void 0,{manifest:o,state:s,isStatic:u,onError:d})}function Wt(a){qe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function y1({basename:a="/",children:o=null,location:l,navigationType:s="POP",navigator:u,static:d=!1,useTransitions:p}){qe(!Do(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=a.replace(/^\/*/,"/"),f=_.useMemo(()=>({basename:h,navigator:u,static:d,useTransitions:p,future:{}}),[h,u,d,p]);typeof l=="string"&&(l=wr(l));let{pathname:g="/",search:v="",hash:y="",state:C=null,key:D="default",mask:N}=l,A=_.useMemo(()=>{let L=Sn(g,h);return L==null?null:{location:{pathname:L,search:v,hash:y,state:C,key:D,mask:N},navigationType:s}},[h,g,v,y,C,D,s,N]);return tn(A!=null,`<Router basename="${h}"> is not able to match the URL "${g}${v}${y}" because it does not start with the basename, so the <Router> won't render anything.`),A==null?null:_.createElement(qt.Provider,{value:f},_.createElement(Ro.Provider,{children:o,value:A}))}function x1({children:a,location:o}){return l1(pu(a),o)}function pu(a,o=[]){let l=[];return _.Children.forEach(a,(s,u)=>{if(!_.isValidElement(s))return;let d=[...o,u];if(s.type===_.Fragment){l.push.apply(l,pu(s.props.children,d));return}qe(s.type===Wt,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),qe(!s.props.index||!s.props.children,"An index route cannot have child routes.");let p={id:s.props.id||d.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,middleware:s.props.middleware,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(p.children=pu(s.props.children,d)),l.push(p)}),l}var di="get",pi="application/x-www-form-urlencoded";function wi(a){return typeof HTMLElement<"u"&&a instanceof HTMLElement}function k1(a){return wi(a)&&a.tagName.toLowerCase()==="button"}function w1(a){return wi(a)&&a.tagName.toLowerCase()==="form"}function _1(a){return wi(a)&&a.tagName.toLowerCase()==="input"}function S1(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function C1(a,o){return a.button===0&&(!o||o==="_self")&&!S1(a)}var ri=null;function T1(){if(ri===null)try{new FormData(document.createElement("form"),0),ri=!1}catch{ri=!0}return ri}var O1=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function nu(a){return a!=null&&!O1.has(a)?(tn(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${pi}"`),null):a}function E1(a,o){let l,s,u,d,p;if(w1(a)){let h=a.getAttribute("action");s=h?Sn(h,o):null,l=a.getAttribute("method")||di,u=nu(a.getAttribute("enctype"))||pi,d=new FormData(a)}else if(k1(a)||_1(a)&&(a.type==="submit"||a.type==="image")){let h=a.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let f=a.getAttribute("formaction")||h.getAttribute("action");if(s=f?Sn(f,o):null,l=a.getAttribute("formmethod")||h.getAttribute("method")||di,u=nu(a.getAttribute("formenctype"))||nu(h.getAttribute("enctype"))||pi,d=new FormData(h,a),!T1()){let{name:g,type:v,value:y}=a;if(v==="image"){let C=g?`${g}.`:"";d.append(`${C}x`,"0"),d.append(`${C}y`,"0")}else g&&d.append(g,y)}}else{if(wi(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');l=di,s=null,u=pi,p=a}return d&&u==="text/plain"&&(p=d,d=void 0),{action:s,method:l.toLowerCase(),encType:u,formData:d,body:p}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Ru(a,o){if(a===!1||a===null||typeof a>"u")throw new Error(o)}function mg(a,o,l,s){let u=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return l?u.pathname.endsWith("/")?u.pathname=`${u.pathname}_.${s}`:u.pathname=`${u.pathname}.${s}`:u.pathname==="/"?u.pathname=`_root.${s}`:o&&Sn(u.pathname,o)==="/"?u.pathname=`${yr(o)}/_root.${s}`:u.pathname=`${yr(u.pathname)}.${s}`,u}async function A1(a,o){if(a.id in o)return o[a.id];try{let l=await import(a.module);return o[a.id]=l,l}catch(l){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(l),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function M1(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function L1(a,o,l){let s=await Promise.all(a.map(async u=>{let d=o.routes[u.route.id];if(d){let p=await A1(d,l);return p.links?p.links():[]}return[]}));return j1(s.flat(1).filter(M1).filter(u=>u.rel==="stylesheet"||u.rel==="preload").map(u=>u.rel==="stylesheet"?{...u,rel:"prefetch",as:"style"}:{...u,rel:"prefetch"}))}function fh(a,o,l,s,u,d){let p=(f,g)=>l[g]?f.route.id!==l[g].route.id:!0,h=(f,g)=>l[g].pathname!==f.pathname||l[g].route.path?.endsWith("*")&&l[g].params["*"]!==f.params["*"];return d==="assets"?o.filter((f,g)=>p(f,g)||h(f,g)):d==="data"?o.filter((f,g)=>{let v=s.routes[f.route.id];if(!v||!v.hasLoader)return!1;if(p(f,g)||h(f,g))return!0;if(f.route.shouldRevalidate){let y=f.route.shouldRevalidate({currentUrl:new URL(u.pathname+u.search+u.hash,window.origin),currentParams:l[0]?.params||{},nextUrl:new URL(a,window.origin),nextParams:f.params,defaultShouldRevalidate:!0});if(typeof y=="boolean")return y}return!0}):[]}function R1(a,o,{includeHydrateFallback:l}={}){return D1(a.map(s=>{let u=o.routes[s.route.id];if(!u)return[];let d=[u.module];return u.clientActionModule&&(d=d.concat(u.clientActionModule)),u.clientLoaderModule&&(d=d.concat(u.clientLoaderModule)),l&&u.hydrateFallbackModule&&(d=d.concat(u.hydrateFallbackModule)),u.imports&&(d=d.concat(u.imports)),d}).flat(1))}function D1(a){return[...new Set(a)]}function z1(a){let o={},l=Object.keys(a).sort();for(let s of l)o[s]=a[s];return o}function j1(a,o){let l=new Set;return new Set(o),a.reduce((s,u)=>{let d=JSON.stringify(z1(u));return l.has(d)||(l.add(d),s.push({key:d,link:u})),s},[])}function Du(){let a=_.useContext(_r);return Ru(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function N1(){let a=_.useContext(ki);return Ru(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var zu=_.createContext(void 0);zu.displayName="FrameworkContext";function _i(){let a=_.useContext(zu);return Ru(a,"You must render this element inside a <HydratedRouter> element"),a}function H1(a,o){let l=_.useContext(zu),[s,u]=_.useState(!1),[d,p]=_.useState(!1),{onFocus:h,onBlur:f,onMouseEnter:g,onMouseLeave:v,onTouchStart:y}=o,C=_.useRef(null);_.useEffect(()=>{if(a==="render"&&p(!0),a==="viewport"){let A=Y=>{Y.forEach(I=>{p(I.isIntersecting)})},L=new IntersectionObserver(A,{threshold:.5});return C.current&&L.observe(C.current),()=>{L.disconnect()}}},[a]),_.useEffect(()=>{if(s){let A=setTimeout(()=>{p(!0)},100);return()=>{clearTimeout(A)}}},[s]);let D=()=>{u(!0)},N=()=>{u(!1),p(!1)};return l?a!=="intent"?[d,C,{}]:[d,C,{onFocus:wo(h,D),onBlur:wo(f,N),onMouseEnter:wo(g,D),onMouseLeave:wo(v,N),onTouchStart:wo(y,D)}]:[!1,C,{}]}function wo(a,o){return l=>{a&&a(l),l.defaultPrevented||o(l)}}function U1({page:a,...o}){let l=Fy(),{nonce:s}=_i(),{router:u}=Du(),d=_.useMemo(()=>Kh(u.routes,a,u.basename),[u.routes,a,u.basename]);return d?(o.nonce==null&&s&&(o={...o,nonce:s}),l?_.createElement(P1,{page:a,matches:d,...o}):_.createElement(q1,{page:a,matches:d,...o})):null}function B1(a){let{manifest:o,routeModules:l}=_i(),[s,u]=_.useState([]);return _.useEffect(()=>{let d=!1;return L1(a,o,l).then(p=>{d||u(p)}),()=>{d=!0}},[a,o,l]),s}function P1({page:a,matches:o,...l}){let s=Tn(),{future:u}=_i(),{basename:d}=Du(),p=_.useMemo(()=>{if(a===s.pathname+s.search+s.hash)return[];let h=mg(a,d,u.v8_trailingSlashAwareDataRequests,"rsc"),f=!1,g=[];for(let v of o)typeof v.route.shouldRevalidate=="function"?f=!0:g.push(v.route.id);return f&&g.length>0&&h.searchParams.set("_routes",g.join(",")),[h.pathname+h.search]},[d,u.v8_trailingSlashAwareDataRequests,a,s,o]);return _.createElement(_.Fragment,null,p.map(h=>_.createElement("link",{key:h,rel:"prefetch",as:"fetch",href:h,...l})))}function q1({page:a,matches:o,...l}){let s=Tn(),{future:u,manifest:d,routeModules:p}=_i(),{basename:h}=Du(),{loaderData:f,matches:g}=N1(),v=_.useMemo(()=>fh(a,o,g,d,s,"data"),[a,o,g,d,s]),y=_.useMemo(()=>fh(a,o,g,d,s,"assets"),[a,o,g,d,s]),C=_.useMemo(()=>{if(a===s.pathname+s.search+s.hash)return[];let A=new Set,L=!1;if(o.forEach(I=>{let F=d.routes[I.route.id];!F||!F.hasLoader||(!v.some(pe=>pe.route.id===I.route.id)&&I.route.id in f&&p[I.route.id]?.shouldRevalidate||F.hasClientLoader?L=!0:A.add(I.route.id))}),A.size===0)return[];let Y=mg(a,h,u.v8_trailingSlashAwareDataRequests,"data");return L&&A.size>0&&Y.searchParams.set("_routes",o.filter(I=>A.has(I.route.id)).map(I=>I.route.id).join(",")),[Y.pathname+Y.search]},[h,u.v8_trailingSlashAwareDataRequests,f,s,d,v,o,a,p]),D=_.useMemo(()=>R1(y,d),[y,d]),N=B1(y);return _.createElement(_.Fragment,null,C.map(A=>_.createElement("link",{key:A,rel:"prefetch",as:"fetch",href:A,...l})),D.map(A=>_.createElement("link",{key:A,rel:"modulepreload",href:A,...l})),N.map(({key:A,link:L})=>_.createElement("link",{key:A,nonce:l.nonce,...L,crossOrigin:L.crossOrigin??l.crossOrigin})))}function G1(...a){return o=>{a.forEach(l=>{typeof l=="function"?l(o):l!=null&&(l.current=o)})}}var $1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{$1&&(window.__reactRouterVersion="7.18.3")}catch{}function Q1({basename:a,children:o,useTransitions:l,window:s}){let u=_.useRef();u.current==null&&(u.current=wy({window:s,v5Compat:!0}));let d=u.current,[p,h]=_.useState({action:d.action,location:d.location}),f=_.useCallback(g=>{l===!1?h(g):_.startTransition(()=>h(g))},[l]);return _.useLayoutEffect(()=>d.listen(f),[d,f]),_.createElement(y1,{basename:a,children:o,location:p.location,navigationType:p.action,navigator:d,useTransitions:l})}var ju=_.forwardRef(function({onClick:o,discover:l="render",prefetch:s="none",relative:u,reloadDocument:d,replace:p,mask:h,state:f,target:g,to:v,preventScrollReset:y,viewTransition:C,defaultShouldRevalidate:D,...N},A){let{basename:L,navigator:Y,useTransitions:I}=_.useContext(qt),F=typeof v=="string"&&Ou.test(v),pe=ng(v,L);v=pe.to;let Z=r1(v,{relative:u}),V=Tn(),z=null;if(h){let se=Eu(h,[],V.mask?V.mask.pathname:"/",!0);L!=="/"&&(se.pathname=se.pathname==="/"?L:Zt([L,se.pathname])),z=Y.createHref(se)}let[G,J,oe]=H1(s,N),le=K1(v,{replace:p,mask:h,state:f,target:g,preventScrollReset:y,relative:u,viewTransition:C,defaultShouldRevalidate:D,useTransitions:I});function te(se){o&&o(se),se.defaultPrevented||le(se)}let be=!(pe.isExternal||d),fe=_.createElement("a",{...N,...oe,href:(be?z:void 0)||pe.absoluteURL||Z,onClick:be?te:o,ref:G1(A,J),target:g,"data-discover":!F&&l==="render"?"true":void 0});return G&&!F?_.createElement(_.Fragment,null,fe,_.createElement(U1,{page:Z})):fe});ju.displayName="Link";var Z1=_.forwardRef(function({"aria-current":o="page",caseSensitive:l=!1,className:s="",end:u=!1,style:d,to:p,viewTransition:h,children:f,...g},v){let y=zo(p,{relative:g.relative}),C=Tn(),D=_.useContext(ki),{navigator:N,basename:A}=_.useContext(qt),L=D!=null&&W1(y)&&h===!0,Y=N.encodeLocation?N.encodeLocation(y).pathname:y.pathname,I=C.pathname,F=D&&D.navigation&&D.navigation.location?D.navigation.location.pathname:null;l||(I=I.toLowerCase(),F=F?F.toLowerCase():null,Y=Y.toLowerCase()),F&&A&&(F=Sn(F,A)||F);const pe=Y!=="/"&&Y.endsWith("/")?Y.length-1:Y.length;let Z=I===Y||!u&&I.startsWith(Y)&&I.charAt(pe)==="/",V=F!=null&&(F===Y||!u&&F.startsWith(Y)&&F.charAt(Y.length)==="/"),z={isActive:Z,isPending:V,isTransitioning:L},G=Z?o:void 0,J;typeof s=="function"?J=s(z):J=[s,Z?"active":null,V?"pending":null,L?"transitioning":null].filter(Boolean).join(" ");let oe=typeof d=="function"?d(z):d;return _.createElement(ju,{...g,"aria-current":G,className:J,ref:v,style:oe,to:p,viewTransition:h},typeof f=="function"?f(z):f)});Z1.displayName="NavLink";var V1=_.forwardRef(({discover:a="render",fetcherKey:o,navigate:l,reloadDocument:s,replace:u,state:d,method:p=di,action:h,onSubmit:f,relative:g,preventScrollReset:v,viewTransition:y,defaultShouldRevalidate:C,...D},N)=>{let{useTransitions:A}=_.useContext(qt),L=F1(),Y=J1(h,{relative:g}),I=p.toLowerCase()==="get"?"get":"post",F=typeof h=="string"&&Ou.test(h),pe=Z=>{if(f&&f(Z),Z.defaultPrevented)return;Z.preventDefault();let V=Z.nativeEvent.submitter,z=V?.getAttribute("formmethod")||p,G=()=>L(V||Z.currentTarget,{fetcherKey:o,method:z,navigate:l,replace:u,state:d,relative:g,preventScrollReset:v,viewTransition:y,defaultShouldRevalidate:C});A&&l!==!1?_.startTransition(()=>G()):G()};return _.createElement("form",{ref:N,method:I,action:Y,onSubmit:s?f:pe,...D,"data-discover":!F&&a==="render"?"true":void 0})});V1.displayName="Form";function Y1(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function hg(a){let o=_.useContext(_r);return qe(o,Y1(a)),o}function K1(a,{target:o,replace:l,mask:s,state:u,preventScrollReset:d,relative:p,viewTransition:h,defaultShouldRevalidate:f,useTransitions:g}={}){let v=Sr(),y=Tn(),C=zo(a,{relative:p});return _.useCallback(D=>{if(C1(D,o)){D.preventDefault();let N=l!==void 0?l:vr(y)===vr(C),A=()=>v(a,{replace:N,mask:s,state:u,preventScrollReset:d,relative:p,viewTransition:h,defaultShouldRevalidate:f});g?_.startTransition(()=>A()):A()}},[y,v,C,l,s,u,o,a,d,p,h,f,g])}var I1=0,X1=()=>`__${String(++I1)}__`;function F1(){let{router:a}=hg("useSubmit"),{basename:o}=_.useContext(qt),l=h1(),s=a.fetch,u=a.navigate;return _.useCallback(async(d,p={})=>{let{action:h,method:f,encType:g,formData:v,body:y}=E1(d,o);if(p.navigate===!1){let C=p.fetcherKey||X1();await s(C,l,p.action||h,{defaultShouldRevalidate:p.defaultShouldRevalidate,preventScrollReset:p.preventScrollReset,formData:v,body:y,formMethod:p.method||f,formEncType:p.encType||g,flushSync:p.flushSync})}else await u(p.action||h,{defaultShouldRevalidate:p.defaultShouldRevalidate,preventScrollReset:p.preventScrollReset,formData:v,body:y,formMethod:p.method||f,formEncType:p.encType||g,replace:p.replace,state:p.state,fromRouteId:l,flushSync:p.flushSync,viewTransition:p.viewTransition})},[s,u,o,l])}function J1(a,{relative:o}={}){let{basename:l}=_.useContext(qt),s=_.useContext(Cn);qe(s,"useFormAction must be used inside a RouteContext");let[u]=s.matches.slice(-1),d={...zo(a||".",{relative:o})},p=Tn();if(a==null){d.search=p.search;let h=new URLSearchParams(d.search),f=h.getAll("index");if(f.some(v=>v==="")){h.delete("index"),f.filter(y=>y).forEach(y=>h.append("index",y));let v=h.toString();d.search=v?`?${v}`:""}}return(!a||a===".")&&u.route.index&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),l!=="/"&&(d.pathname=d.pathname==="/"?l:Zt([l,d.pathname])),vr(d)}function W1(a,{relative:o}={}){let l=_.useContext(ig);qe(l!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=hg("useViewTransitionState"),u=zo(a,{relative:o});if(!l.isTransitioning)return!1;let d=Sn(l.currentLocation.pathname,s)||l.currentLocation.pathname,p=Sn(l.nextLocation.pathname,s)||l.nextLocation.pathname;return gi(u.pathname,p)!=null||gi(u.pathname,d)!=null}const gg=_.createContext(void 0),jo=a=>{const o=_.useContext(gg);if(a)return a;if(!o)throw new Error("No QueryClient set, use QueryClientProvider to set one");return o},ex=({client:a,children:o})=>(_.useEffect(()=>(a.mount(),()=>{a.unmount()}),[a]),K.jsx(gg.Provider,{value:a,children:o})),tx={setTimeout:(a,o)=>setTimeout(a,o),clearTimeout:a=>clearTimeout(a),setInterval:(a,o)=>setInterval(a,o),clearInterval:a=>clearInterval(a)};var nx=class{#t=tx;#e=!1;setTimeoutProvider(a){this.#t=a}setTimeout(a,o){return this.#t.setTimeout(a,o)}clearTimeout(a){this.#t.clearTimeout(a)}setInterval(a,o){return this.#t.setInterval(a,o)}clearInterval(a){this.#t.clearInterval(a)}};const Ca=new nx;function ax(a){setTimeout(a,0)}const rx=typeof window>"u"||"Deno"in globalThis;function rt(){}function ox(a,o){return typeof a=="function"?a(o):a}function bg(a){return typeof a=="number"&&a>=0&&a!==1/0}function vg(a,o){return Math.max(a+(o||0)-Date.now(),0)}function Qe(a,o){return typeof a=="function"?a(o):a}function mh(a,o){const{type:l="all",exact:s,fetchStatus:u,predicate:d,queryKey:p,stale:h}=a;if(p){if(s){if(o.queryHash!==Nu(p,o.options))return!1}else if(!xr(o.queryKey,p))return!1}if(l!=="all"){const f=o.isActive();if(l==="active"&&!f||l==="inactive"&&f)return!1}return!(typeof h=="boolean"&&o.isStale()!==h||u&&u!==o.state.fetchStatus||d&&!d(o))}function hh(a,o){const{exact:l,status:s,predicate:u,mutationKey:d}=a;if(d){if(!o.options.mutationKey)return!1;if(l){if(na(o.options.mutationKey)!==na(d))return!1}else if(!xr(o.options.mutationKey,d))return!1}return!(s&&o.state.status!==s||u&&!u(o))}function Nu(a,o){return(o?.queryKeyHashFn||na)(a)}function na(a){return JSON.stringify(a,(o,l)=>fu(l)?Object.keys(l).sort().reduce((s,u)=>(s[u]=l[u],s),{}):l)}function xr(a,o){if(a===o)return!0;if(typeof a!=typeof o)return!1;if(a&&o&&typeof a=="object"&&typeof o=="object"){if(Array.isArray(a)&&Array.isArray(o)){for(let s=0;s<o.length;s++)if(!xr(a[s],o[s]))return!1;return!0}const l=Object.keys(o);for(const s of l)if(!xr(a[s],o[s]))return!1;return!0}return!1}const lx=Object.prototype.hasOwnProperty;function Hu(a,o,l=0){if(a===o)return a;if(l>500)return o;const s=gh(a)&&gh(o);if(!s&&!(fu(a)&&fu(o)))return o;const u=(s?a:Object.keys(a)).length,d=s?o:Object.keys(o),p=d.length,h=s?new Array(p):{};let f=0;for(let g=0;g<p;g++){const v=s?g:d[g],y=a[v],C=o[v];if(y===C){h[v]=y,(s?g<u:lx.call(a,v))&&f++;continue}if(y===null||C===null||typeof y!="object"||typeof C!="object"){h[v]=C;continue}const D=Hu(y,C,l+1);h[v]=D,D===y&&f++}return u===p&&f===u?a:h}function To(a,o){if(!o||Object.keys(a).length!==Object.keys(o).length)return!1;for(const l in a)if(a[l]!==o[l])return!1;return!0}function gh(a){return Array.isArray(a)&&a.length===Object.keys(a).length}function fu(a){if(!bh(a))return!1;const o=a.constructor;if(o===void 0)return!0;const l=o.prototype;return!(!bh(l)||!l.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(a)!==Object.prototype)}function bh(a){return Object.prototype.toString.call(a)==="[object Object]"}function ix(a){return new Promise(o=>{Ca.setTimeout(o,a)})}function mu(a,o,l){return typeof l.structuralSharing=="function"?l.structuralSharing(a,o):l.structuralSharing!==!1?Hu(a,o):o}function sx(a,o,l=0){const s=[...a,o];return l&&s.length>l?s.slice(1):s}function cx(a,o,l=0){const s=[o,...a];return l&&s.length>l?s.slice(0,-1):s}const Mt=Symbol();function yg(a,o){return!a.queryFn&&o?.initialPromise?()=>o.initialPromise:!a.queryFn||a.queryFn===Mt?()=>Promise.reject(new Error(`Missing queryFn: '${a.queryHash}'`)):a.queryFn}function Uu(a,o){return typeof a=="function"?a(...o):!!a}function ux(a,o,l){let s=!1,u;return Object.defineProperty(a,"signal",{enumerable:!0,get:()=>(u??=o(),s||(s=!0,u.aborted?l():u.addEventListener("abort",l,{once:!0})),u)}),a}let dx=()=>rx;const Bu=()=>dx();var Oa=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(a){return this.listeners.add(a),this.onSubscribe(),()=>{this.listeners.delete(a),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},px=class extends Oa{#t;#e;#n;constructor(){super(),this.#n=a=>{if(typeof window<"u"&&window.addEventListener){const o=()=>a();return window.addEventListener("visibilitychange",o,!1),()=>{window.removeEventListener("visibilitychange",o)}}}}onSubscribe(){this.#e||this.setEventListener(this.#n)}onUnsubscribe(){this.hasListeners()||(this.#e?.(),this.#e=void 0)}setEventListener(a){this.#n=a,this.#e?.(),this.#e=a(o=>{typeof o=="boolean"?this.setFocused(o):this.onFocus()})}setFocused(a){this.#t!==a&&(this.#t=a,this.onFocus())}onFocus(){const a=this.isFocused();this.listeners.forEach(o=>{o(a)})}isFocused(){return typeof this.#t=="boolean"?this.#t:globalThis.document?.visibilityState!=="hidden"}};const Pu=new px,fx=ax;function mx(){let a=[],o=0,l=h=>{h()},s=h=>{h()},u=fx;const d=h=>{o?a.push(h):u(()=>{l(h)})},p=()=>{const h=a;a=[],h.length&&u(()=>{s(()=>{h.forEach(f=>{l(f)})})})};return{batch:h=>{let f;o++;try{f=h()}finally{o--,o||p()}return f},batchCalls:h=>(...f)=>{d(()=>{h(...f)})},schedule:d,setNotifyFunction:h=>{l=h},setBatchNotifyFunction:h=>{s=h},setScheduler:h=>{u=h}}}const Ze=mx();var hx=class extends Oa{#t=!0;#e;#n;constructor(){super(),this.#n=a=>{if(typeof window<"u"&&window.addEventListener){const o=()=>a(!0),l=()=>a(!1);return window.addEventListener("online",o,!1),window.addEventListener("offline",l,!1),()=>{window.removeEventListener("online",o),window.removeEventListener("offline",l)}}}}onSubscribe(){this.#e||this.setEventListener(this.#n)}onUnsubscribe(){this.hasListeners()||(this.#e?.(),this.#e=void 0)}setEventListener(a){this.#n=a,this.#e?.(),this.#e=a(this.setOnline.bind(this))}setOnline(a){this.#t!==a&&(this.#t=a,this.listeners.forEach(o=>{o(a)}))}isOnline(){return this.#t}};const bi=new hx;function gx(a){return Math.min(1e3*2**a,3e4)}function xg(a){return(a??"online")==="online"?bi.isOnline():!0}var hu=class extends Error{constructor(a){super("CancelledError"),this.revert=a?.revert,this.silent=a?.silent}};function kg(a){let o=!1,l=0,s,u="pending",d,p;const h=new Promise((I,F)=>{d=I,p=F});h.catch(rt);const f=()=>u!=="pending",g=I=>{if(!f()){const F=new hu(I);A(F),a.onCancel?.(F)}},v=()=>{o=!0},y=()=>{o=!1},C=()=>Pu.isFocused()&&(a.networkMode==="always"||bi.isOnline())&&a.canRun(),D=()=>xg(a.networkMode)&&a.canRun(),N=I=>{f()||(s?.(),u="resolved",d(I))},A=I=>{f()||(s?.(),u="rejected",p(I))},L=()=>new Promise(I=>{s=F=>{(f()||C())&&I(F)},a.onPause?.()}).then(()=>{s=void 0,f()||a.onContinue?.()}),Y=()=>{if(f())return;let I;const F=l===0?a.initialPromise:void 0;try{I=F??a.fn()}catch(pe){I=Promise.reject(pe)}Promise.resolve(I).then(N).catch(pe=>{if(f())return;const Z=a.retry??(Bu()?0:3),V=a.retryDelay??gx,z=typeof V=="function"?V(l,pe):V,G=Z===!0||typeof Z=="number"&&l<Z||typeof Z=="function"&&Z(l,pe);if(o||!G){A(pe);return}l++,a.onFail?.(l,pe),ix(z).then(()=>C()?void 0:L()).then(()=>{o?A(pe):Y()})})};return{promise:h,status:()=>u,cancel:g,continue:()=>(s?.(),h),cancelRetry:v,continueRetry:y,canStart:D,start:()=>(D()?Y():L().then(Y),h)}}var wg=class{#t;destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),bg(this.gcTime)&&(this.#t=Ca.setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(a){this.gcTime=Math.max(this.gcTime||0,a??(Bu()?1/0:3e5))}clearGcTimeout(){this.#t!==void 0&&(Ca.clearTimeout(this.#t),this.#t=void 0)}};function bx(a){return{onFetch:(o,l)=>{const s=o.options,u=o.fetchOptions?.meta?.fetchMore?.direction,d=o.state.data?.pages||[],p=o.state.data?.pageParams||[];let h={pages:[],pageParams:[]},f=0;const g=async()=>{let v=!1;const y=N=>{ux(N,()=>o.signal,()=>v=!0)},C=yg(o.options,o.fetchOptions),D=async(N,A,L)=>{if(v)return Promise.reject(o.signal.reason);if(A==null&&N.pages.length)return Promise.resolve(N);const I=(()=>{const V={client:o.client,queryKey:o.queryKey,pageParam:A,direction:L?"backward":"forward",meta:o.options.meta};return y(V),V})(),F=await C(I),{maxPages:pe}=o.options,Z=L?cx:sx;return{pages:Z(N.pages,F,pe),pageParams:Z(N.pageParams,A,pe)}};if(u&&d.length){const N=u==="backward",A=N?_g:gu,L={pages:d,pageParams:p};h=await D(L,A(s,L),N)}else{const N=a??d.length;do{const A=f===0?p[0]??s.initialPageParam:gu(s,h);if(f>0&&A==null)break;h=await D(h,A),f++}while(f<N)}return h};o.options.persister?o.fetchFn=()=>o.options.persister?.(g,{client:o.client,queryKey:o.queryKey,meta:o.options.meta,signal:o.signal},l):o.fetchFn=g}}}function gu(a,{pages:o,pageParams:l}){const s=o.length-1;return o.length>0?a.getNextPageParam(o[s],o,l[s],l):void 0}function _g(a,{pages:o,pageParams:l}){return o.length>0?a.getPreviousPageParam?.(o[0],o,l[0],l):void 0}function vx(a,o){return o?gu(a,o)!=null:!1}function yx(a,o){return!o||!a.getPreviousPageParam?!1:_g(a,o)!=null}var xx=class extends wg{#t;#e;#n;#a;#r;#o;#l;#s;constructor(a){super(),this.#s=!1,this.#l=a.defaultOptions,this.setOptions(a.options),this.observers=[],this.#r=a.client,this.#a=this.#r.getQueryCache(),this.queryKey=a.queryKey,this.queryHash=a.queryHash,this.#e=yh(this.options),this.state=a.state??this.#e,this.scheduleGc()}get meta(){return this.options.meta}get queryType(){return this.#t}get promise(){return this.#o?.promise}setOptions(a){if(this.options={...this.#l,...a},a?._type&&(this.#t=a._type),this.updateGcTime(this.options.gcTime),this.state&&this.state.data===void 0){const o=yh(this.options);o.data!==void 0&&(this.setState(vh(o.data,o.dataUpdatedAt)),this.#e=o)}}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&this.#a.remove(this)}setData(a,o){const l=mu(this.state.data,a,this.options);return this.#i({data:l,type:"success",dataUpdatedAt:o?.updatedAt,manual:o?.manual}),l}setState(a){this.#i({type:"setState",state:a})}cancel(a){const o=this.#o?.promise;return this.#o?.cancel(a),o?o.then(rt).catch(rt):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}get resetState(){return this.#e}reset(){this.destroy(),this.setState(this.resetState)}isActive(){return this.observers.some(a=>Qe(a.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===Mt||!this.isFetched()}isFetched(){return this.state.dataUpdateCount+this.state.errorUpdateCount>0}isStatic(){return this.getObserversCount()>0?this.observers.some(a=>Qe(a.options.staleTime,this)==="static"):!1}isStale(){return this.getObserversCount()>0?this.observers.some(a=>a.getCurrentResult().isStale):this.state.data===void 0||this.state.isInvalidated}isStaleByTime(a=0){return this.state.data===void 0?!0:a==="static"?!1:this.state.isInvalidated?!0:!vg(this.state.dataUpdatedAt,a)}onFocus(){this.observers.find(a=>a.shouldFetchOnWindowFocus())?.refetch({cancelRefetch:!1}),this.#o?.continue()}onOnline(){this.observers.find(a=>a.shouldFetchOnReconnect())?.refetch({cancelRefetch:!1}),this.#o?.continue()}addObserver(a){this.observers.includes(a)||(this.observers.push(a),this.clearGcTimeout(),this.#a.notify({type:"observerAdded",query:this,observer:a}))}removeObserver(a){const o=this.observers.indexOf(a);o!==-1&&(this.observers.splice(o,1),this.observers.length||(this.#o&&(this.#s||this.state.fetchStatus==="paused"&&this.state.status==="pending"?this.#o.cancel({revert:!0}):this.#o.cancelRetry()),this.scheduleGc()),this.#a.notify({type:"observerRemoved",query:this,observer:a}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.#i({type:"invalidate"})}async fetch(a,o){if(this.state.fetchStatus!=="idle"&&this.#o?.status()!=="rejected"){if(this.state.data!==void 0&&o?.cancelRefetch)this.cancel({silent:!0});else if(this.#o)return this.#o.continueRetry(),this.#o.promise}if(a&&this.setOptions(a),!this.options.queryFn){const f=this.observers.find(g=>g.options.queryFn);f&&this.setOptions(f.options)}const l=new AbortController,s=f=>{Object.defineProperty(f,"signal",{enumerable:!0,get:()=>(this.#s=!0,l.signal)})},u=()=>{const f=yg(this.options,o),v=(()=>{const y={client:this.#r,queryKey:this.queryKey,meta:this.meta};return s(y),y})();return this.#s=!1,this.options.persister?this.options.persister(f,v,this):f(v)},p=(()=>{const f={fetchOptions:o,options:this.options,queryKey:this.queryKey,client:this.#r,state:this.state,fetchFn:u};return s(f),f})();(this.#t==="infinite"?bx(this.options.pages):this.options.behavior)?.onFetch(p,this),this.#n=this.state,(this.state.fetchStatus==="idle"||this.state.fetchMeta!==p.fetchOptions?.meta)&&this.#i({type:"fetch",meta:p.fetchOptions?.meta});const h=this.#o=kg({initialPromise:o?.initialPromise,fn:p.fetchFn,onCancel:f=>{f instanceof hu&&f.revert&&this.setState({...this.#n,fetchStatus:"idle"}),l.abort()},onFail:(f,g)=>{this.#i({type:"failed",failureCount:f,error:g})},onPause:()=>{this.#i({type:"pause"})},onContinue:()=>{this.#i({type:"continue"})},retry:p.options.retry,retryDelay:p.options.retryDelay,networkMode:p.options.networkMode,canRun:()=>!0});try{const f=await h.start();if(f===void 0)throw new Error(`${this.queryHash} data is undefined`);return this.setData(f),this.#a.config.onSuccess?.(f,this),this.#a.config.onSettled?.(f,this.state.error,this),f}catch(f){if(f instanceof hu){if(f.silent)return this.#o.promise;if(f.revert){if(this.state.data===void 0)throw f;return this.state.data}}throw this.#i({type:"error",error:f}),this.#a.config.onError?.(f,this),this.#a.config.onSettled?.(this.state.data,f,this),f}finally{this.#o===h&&(this.#o=void 0),this.scheduleGc()}}#i(a){const o=l=>{switch(a.type){case"failed":return{...l,fetchFailureCount:a.failureCount,fetchFailureReason:a.error};case"pause":return{...l,fetchStatus:"paused"};case"continue":return{...l,fetchStatus:"fetching"};case"fetch":return{...l,...Sg(l.data,this.options),fetchMeta:a.meta??null};case"success":const s={...l,...vh(a.data,a.dataUpdatedAt),dataUpdateCount:l.dataUpdateCount+1,...!a.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};return this.#n=a.manual?s:void 0,s;case"error":const u=a.error;return{...l,error:u,errorUpdateCount:l.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:l.fetchFailureCount+1,fetchFailureReason:u,fetchStatus:"idle",status:"error",isInvalidated:!0};case"invalidate":return{...l,isInvalidated:!0};case"setState":return{...l,...a.state}}};this.state=o(this.state),Ze.batch(()=>{this.observers.slice().forEach(l=>{l.onQueryUpdate()}),this.#a.notify({query:this,type:"updated",action:a})})}};function Sg(a,o){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:xg(o.networkMode)?"fetching":"paused",...a===void 0&&{error:null,status:"pending"}}}function vh(a,o){return{data:a,dataUpdatedAt:o??Date.now(),error:null,isInvalidated:!1,status:"success"}}function yh(a){const o=typeof a.initialData=="function"?a.initialData():a.initialData,l=o!==void 0,s=l?typeof a.initialDataUpdatedAt=="function"?a.initialDataUpdatedAt():a.initialDataUpdatedAt:0;return{data:o,dataUpdateCount:0,dataUpdatedAt:l?s??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:l?"success":"pending",fetchStatus:"idle"}}var No=class extends Oa{#t;#e=void 0;#n=void 0;#a=void 0;#r;#o;#l;#s;#i;#f;#c;#u;#d;#m=new Set;constructor(a,o){super(),this.options=o,this.#t=a,this.#l=null,this.bindMethods(),this.setOptions(o)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(this.#e.addObserver(this),xh(this.#e,this.options)?this.#p():this.updateResult(),this.#y())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return bu(this.#e,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return bu(this.#e,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.#x(),this.#k(),this.#e.removeObserver(this)}setOptions(a){const o=this.options,l=this.#e;if(this.options=this.#t.defaultQueryOptions(a),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean"&&typeof this.options.enabled!="function"&&typeof Qe(this.options.enabled,this.#e)!="boolean")throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");this.#w(),this.#e.setOptions(this.options),o._defaulted&&!To(this.options,o)&&this.#t.getQueryCache().notify({type:"observerOptionsUpdated",query:this.#e,observer:this});const s=this.hasListeners();s&&kh(this.#e,l,this.options,o)&&this.#p(),this.updateResult(),s&&(this.#e!==l||Qe(this.options.enabled,this.#e)!==Qe(o.enabled,this.#e)||Qe(this.options.staleTime,this.#e)!==Qe(o.staleTime,this.#e))&&this.#g();const u=this.#b();s&&(this.#e!==l||Qe(this.options.enabled,this.#e)!==Qe(o.enabled,this.#e)||u!==this.#d)&&this.#v(u)}getOptimisticResult(a){const o=this.#t.getQueryCache().build(this.#t,a),l=this.createResult(o,a);return To(this.getCurrentResult(),l)||(this.#a=l,this.#o=this.options,this.#r=this.#e.state),l}getCurrentResult(){return this.#a}trackResult(a,o){return new Proxy(a,{get:(l,s)=>(this.trackProp(s),o?.(s),Reflect.get(l,s))})}trackProp(a){this.#m.add(a)}getCurrentQuery(){return this.#e}refetch({...a}={}){return this.fetch({...a})}fetchOptimistic(a){const o=this.#t.defaultQueryOptions(a),l=this.#t.getQueryCache().build(this.#t,o);let s=()=>{},u;const d=new Promise(p=>{u=p,s=this.#t.getQueryCache().subscribe(h=>{h.type==="updated"&&h.query.queryHash===l.queryHash&&l.state.data!==void 0&&(s(),p(this.createResult(l,o)))})});return Promise.race([l.fetch().then(()=>{const p=this.createResult(l,o);return u?.(p),p}).finally(()=>{s()}),d])}fetch(a){return this.#p({...a,cancelRefetch:a.cancelRefetch??!0}).then(()=>(this.updateResult(),this.#a))}#p(a){this.#w();let o=this.#e.fetch(this.options,a);return a?.throwOnError||(o=o.catch(rt)),o}#h(a){return!Bu()&&Qe(this.options.enabled,this.#e)!==!1&&bg(a)}#g(){this.#x();const a=Qe(this.options.staleTime,this.#e);if(this.#a.isStale||!this.#h(a))return;const o=vg(this.#a.dataUpdatedAt,a)+1;this.#c=Ca.setTimeout(()=>{this.#a.isStale||this.updateResult()},o)}#b(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.#e):this.options.refetchInterval)??!1}#v(a){this.#k(),this.#d=a,!(this.#d===0||!this.#h(this.#d))&&(this.#u=Ca.setInterval(()=>{(this.options.refetchIntervalInBackground||Pu.isFocused())&&this.#p()},this.#d))}#y(){this.#g(),this.#v(this.#b())}#x(){this.#c!==void 0&&(Ca.clearTimeout(this.#c),this.#c=void 0)}#k(){this.#u!==void 0&&(Ca.clearInterval(this.#u),this.#u=void 0)}createResult(a,o){const l=this.#e,s=this.options,u=this.#a,d=this.#r,p=this.#o,h=a!==l?a.state:this.#n,{state:f}=a;let g={...f},v=!1,y;if(o._optimisticResults){const Z=this.hasListeners(),V=!Z&&xh(a,o),z=Z&&kh(a,l,o,s);(V||z)&&(g={...g,...Sg(f.data,a.options)}),o._optimisticResults==="isRestoring"&&(g.fetchStatus="idle")}let{error:C,errorUpdatedAt:D,status:N}=g;y=g.data;let A=!1;if(o.placeholderData!==void 0&&y===void 0&&N==="pending"){let Z;u?.isPlaceholderData&&o.placeholderData===p?.placeholderData?(Z=u.data,A=!0):Z=typeof o.placeholderData=="function"?o.placeholderData(this.#f?.state.data,this.#f):o.placeholderData,Z!==void 0&&(N="success",y=mu(u?.data,Z,o),v=!0)}if(o.select&&y!==void 0&&!A)if(u&&y===d?.data&&o.select===this.#s)y=this.#i;else try{this.#s=o.select,y=o.select(y),y=mu(u?.data,y,o),this.#i=y,this.#l=null}catch(Z){this.#l=Z}else y===void 0&&(this.#l=null);this.#l&&(C=this.#l,y=this.#i,D=Date.now(),N="error",v=!1);const L=g.fetchStatus==="fetching",Y=N==="pending",I=N==="error",F=Y&&L,pe=y!==void 0;return{status:N,fetchStatus:g.fetchStatus,isPending:Y,isSuccess:N==="success",isError:I,isInitialLoading:F,isLoading:F,data:y,dataUpdatedAt:g.dataUpdatedAt,error:C,errorUpdatedAt:D,failureCount:g.fetchFailureCount,failureReason:g.fetchFailureReason,errorUpdateCount:g.errorUpdateCount,isFetched:a.isFetched(),isFetchedAfterMount:g.dataUpdateCount>h.dataUpdateCount||g.errorUpdateCount>h.errorUpdateCount,isFetching:L,isRefetching:L&&!Y,isLoadingError:I&&!pe,isPaused:g.fetchStatus==="paused",isPlaceholderData:v,isRefetchError:I&&pe,isStale:qu(a,o),refetch:this.refetch,isEnabled:Qe(o.enabled,a)!==!1}}updateResult(){const a=this.#a,o=this.createResult(this.#e,this.options);if(this.#r=this.#e.state,this.#o=this.options,this.#r.data!==void 0&&(this.#f=this.#e),To(o,a))return;this.#a=o;const s=(()=>{if(!a)return!0;const{notifyOnChangeProps:u}=this.options,d=typeof u=="function"?u():u;if(d==="all"||!d&&!this.#m.size)return!0;const p=new Set(d??this.#m);return this.options.throwOnError&&p.add("error"),Object.keys(this.#a).some(h=>{const f=h;return this.#a[f]!==a[f]&&p.has(f)})})();Ze.batch(()=>{s&&this.listeners.forEach(u=>{u(this.#a)}),this.#t.getQueryCache().notify({query:this.#e,type:"observerResultsUpdated"})})}#w(){const a=this.#t.getQueryCache().build(this.#t,this.options);if(a===this.#e)return;const o=this.#e;this.#e=a,this.#n=a.state,this.hasListeners()&&(o?.removeObserver(this),a.addObserver(this))}onQueryUpdate(){this.updateResult(),this.hasListeners()&&this.#y()}};function kx(a,o){return Qe(o.enabled,a)!==!1&&a.state.data===void 0&&!(a.state.status==="error"&&Qe(o.retryOnMount,a)===!1)}function xh(a,o){return kx(a,o)||a.state.data!==void 0&&bu(a,o,o.refetchOnMount)}function bu(a,o,l){if(Qe(o.enabled,a)!==!1&&Qe(o.staleTime,a)!=="static"){const s=typeof l=="function"?l(a):l;return s==="always"||s!==!1&&qu(a,o)}return!1}function kh(a,o,l,s){return(a!==o||Qe(s.enabled,a)===!1)&&(!l.suspense||a.state.status!=="error")&&qu(a,l)}function qu(a,o){return Qe(o.enabled,a)!==!1&&a.isStaleByTime(Qe(o.staleTime,a))}var Cg=class extends No{constructor(a,o){super(a,o)}bindMethods(){super.bindMethods(),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)}setOptions(a){a._type="infinite",super.setOptions(a)}getOptimisticResult(a){return a._type="infinite",super.getOptimisticResult(a)}fetchNextPage(a){return this.fetch({...a,meta:{fetchMore:{direction:"forward"}}})}fetchPreviousPage(a){return this.fetch({...a,meta:{fetchMore:{direction:"backward"}}})}createResult(a,o){const{state:l}=a,s=super.createResult(a,o),{isFetching:u,isRefetching:d,isError:p,isRefetchError:h}=s,f=l.fetchMeta?.fetchMore?.direction,g=p&&f==="forward",v=u&&f==="forward",y=p&&f==="backward",C=u&&f==="backward";return{...s,fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:vx(o,l.data),hasPreviousPage:yx(o,l.data),isFetchNextPageError:g,isFetchingNextPage:v,isFetchPreviousPageError:y,isFetchingPreviousPage:C,isRefetchError:h&&!g&&!y,isRefetching:d&&!v&&!C}}},wx=class extends wg{#t;#e;#n;#a;constructor(a){super(),this.#t=a.client,this.mutationId=a.mutationId,this.#n=a.mutationCache,this.#e=[],this.state=a.state||Tg(),this.setOptions(a.options),this.scheduleGc()}setOptions(a){this.options=a,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(a){this.#e.includes(a)||(this.#e.push(a),this.clearGcTimeout(),this.#n.notify({type:"observerAdded",mutation:this,observer:a}))}removeObserver(a){this.#e=this.#e.filter(o=>o!==a),this.scheduleGc(),this.#n.notify({type:"observerRemoved",mutation:this,observer:a})}optionalRemove(){this.#e.length||(this.state.status==="pending"?this.scheduleGc():this.#n.remove(this))}continue(){return this.#a?.continue()??(this.state.status==="pending"?this.execute(this.state.variables):Promise.resolve())}async execute(a){const o=()=>{this.#r({type:"continue"})},l={client:this.#t,meta:this.options.meta,mutationKey:this.options.mutationKey},s=this.#a=kg({fn:()=>this.options.mutationFn?this.options.mutationFn(a,l):Promise.reject(new Error("No mutationFn found")),onFail:(p,h)=>{this.#r({type:"failed",failureCount:p,error:h})},onPause:()=>{this.#r({type:"pause"})},onContinue:o,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>this.#n.canRun(this)}),u=this.state.status==="pending",d=!s.canStart();try{if(u)o();else{this.#r({type:"pending",variables:a,isPaused:d}),this.#n.config.onMutate&&await this.#n.config.onMutate(a,this,l);const h=await this.options.onMutate?.(a,l);h!==this.state.context&&this.#r({type:"pending",context:h,variables:a,isPaused:d})}const p=await s.start();return await this.#n.config.onSuccess?.(p,a,this.state.context,this,l),await this.options.onSuccess?.(p,a,this.state.context,l),await this.#n.config.onSettled?.(p,null,this.state.variables,this.state.context,this,l),await this.options.onSettled?.(p,null,a,this.state.context,l),this.#r({type:"success",data:p}),p}catch(p){try{await this.#n.config.onError?.(p,a,this.state.context,this,l)}catch(h){Promise.reject(h)}try{await this.options.onError?.(p,a,this.state.context,l)}catch(h){Promise.reject(h)}try{await this.#n.config.onSettled?.(void 0,p,this.state.variables,this.state.context,this,l)}catch(h){Promise.reject(h)}try{await this.options.onSettled?.(void 0,p,a,this.state.context,l)}catch(h){Promise.reject(h)}throw this.#r({type:"error",error:p}),p}finally{this.#a===s&&(this.#a=void 0),this.#n.runNext(this)}}#r(a){const o=l=>{switch(a.type){case"failed":return{...l,failureCount:a.failureCount,failureReason:a.error};case"pause":return{...l,isPaused:!0};case"continue":return{...l,isPaused:!1};case"pending":return{...l,context:a.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:a.isPaused,status:"pending",variables:a.variables,submittedAt:Date.now()};case"success":return{...l,data:a.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...l,data:void 0,error:a.error,failureCount:l.failureCount+1,failureReason:a.error,isPaused:!1,status:"error"}}};this.state=o(this.state),Ze.batch(()=>{this.#e.forEach(l=>{l.onMutationUpdate(a)}),this.#n.notify({mutation:this,type:"updated",action:a})})}};function Tg(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var _x=class extends Oa{#t;#e;#n;constructor(a={}){super(),this.config=a,this.#t=new Set,this.#e=new Map,this.#n=0}build(a,o,l){const s=new wx({client:a,mutationCache:this,mutationId:++this.#n,options:a.defaultMutationOptions(o),state:l});return this.add(s),s}add(a){this.#t.add(a);const o=oi(a);if(typeof o=="string"){const l=this.#e.get(o);l?l.push(a):this.#e.set(o,[a])}this.notify({type:"added",mutation:a})}remove(a){if(this.#t.delete(a)){const o=oi(a);if(typeof o=="string"){const l=this.#e.get(o);if(l)if(l.length>1){const s=l.indexOf(a);s!==-1&&l.splice(s,1)}else l[0]===a&&this.#e.delete(o)}}this.notify({type:"removed",mutation:a})}canRun(a){const o=oi(a);if(typeof o=="string"){const l=this.#e.get(o)?.find(s=>s.state.status==="pending");return!l||l===a}else return!0}runNext(a){const o=oi(a);return typeof o=="string"?this.#e.get(o)?.find(l=>l!==a&&l.state.isPaused)?.continue()??Promise.resolve():Promise.resolve()}clear(){Ze.batch(()=>{this.#t.forEach(a=>{this.notify({type:"removed",mutation:a})}),this.#t.clear(),this.#e.clear()})}getAll(){return Array.from(this.#t)}find(a){const o={exact:!0,...a};return this.getAll().find(l=>hh(o,l))}findAll(a={}){return this.getAll().filter(o=>hh(a,o))}notify(a){Ze.batch(()=>{this.listeners.forEach(o=>{o(a)})})}resumePausedMutations(){const a=this.getAll().filter(o=>o.state.isPaused);return Ze.batch(()=>Promise.all(a.map(o=>o.continue().catch(rt))))}};function oi(a){return a.options.scope?.id}var Sx=class extends Oa{#t;#e=void 0;#n;#a;constructor(o,l){super(),this.#t=o,this.setOptions(l),this.bindMethods(),this.#r()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(o){const l=this.options;this.options=this.#t.defaultMutationOptions(o),To(this.options,l)||this.#t.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.#n,observer:this}),l?.mutationKey&&this.options.mutationKey&&na(l.mutationKey)!==na(this.options.mutationKey)?this.reset():this.#n?.state.status==="pending"&&this.#n.setOptions(this.options)}onSubscribe(){this.listeners.size===1&&this.#n&&(this.#n.addObserver(this),this.#r())}onUnsubscribe(){this.hasListeners()||this.#n?.removeObserver(this)}onMutationUpdate(o){this.#r(),this.#o(o)}getCurrentResult(){return this.#e}reset(){this.#n?.removeObserver(this),this.#n=void 0,this.#r(),this.#o()}mutate(o,l){return this.#a=l,this.#n?.removeObserver(this),this.#n=this.#t.getMutationCache().build(this.#t,this.options),this.#n.addObserver(this),this.#n.execute(o)}#r(){const o=this.#n?.state??Tg();this.#e={...o,isPending:o.status==="pending",isSuccess:o.status==="success",isError:o.status==="error",isIdle:o.status==="idle",mutate:this.mutate,reset:this.reset}}#o(o){Ze.batch(()=>{if(this.#a&&this.hasListeners()){const l=this.#e.variables,s=this.#e.context,u={client:this.#t,meta:this.options.meta,mutationKey:this.options.mutationKey};if(o?.type==="success"){try{this.#a.onSuccess?.(o.data,l,s,u)}catch(d){Promise.reject(d)}try{this.#a.onSettled?.(o.data,null,l,s,u)}catch(d){Promise.reject(d)}}else if(o?.type==="error"){try{this.#a.onError?.(o.error,l,s,u)}catch(d){Promise.reject(d)}try{this.#a.onSettled?.(void 0,o.error,l,s,u)}catch(d){Promise.reject(d)}}}this.listeners.forEach(l=>{l(this.#e)})})}};function wh(a,o){const l=new Set(o);return a.filter(s=>!l.has(s))}var Cx=class extends Oa{#t;#e;#n;#a;#r;#o;#l;#s;#i;#f=[];constructor(a,o,l){super(),this.#t=a,this.#a=l,this.#n=[],this.#r=[],this.#e=[],this.setQueries(o)}onSubscribe(){this.listeners.size===1&&this.#r.forEach(a=>{a.subscribe(o=>{this.#p(a,o)})})}onUnsubscribe(){this.listeners.size||this.destroy()}destroy(){this.listeners=new Set,this.#r.forEach(a=>{a.destroy()})}setQueries(a,o){this.#n=a,this.#a=o,Ze.batch(()=>{const l=this.#r,s=this.#m(this.#n);s.forEach(v=>v.observer.setOptions(v.defaultedQueryOptions));const u=s.map(v=>v.observer),d=u.map(v=>v.getCurrentResult()),p=l.length!==u.length,h=u.some((v,y)=>v!==l[y]),f=p||h,g=f?!0:d.some((v,y)=>{const C=this.#e[y];return!C||!To(v,C)});!f&&!g||(f&&(this.#f=s,this.#r=u),this.#e=d,this.hasListeners()&&(f&&(wh(l,u).forEach(v=>{v.destroy()}),wh(u,l).forEach(v=>{v.subscribe(y=>{this.#p(v,y)})})),this.#h()))})}getCurrentResult(){return this.#e}getQueries(){return this.#r.map(a=>a.getCurrentQuery())}getObservers(){return this.#r}getOptimisticResult(a,o){const l=this.#m(a),s=l.map(d=>d.observer.getOptimisticResult(d.defaultedQueryOptions)),u=l.map(d=>d.defaultedQueryOptions.queryHash);return[s,d=>this.#u(d??s,o,u),()=>this.#c(s,l)]}#c(a,o){const l=new Set;return o.map((s,u)=>{const d=a[u];return s.defaultedQueryOptions.notifyOnChangeProps?d:s.observer.trackResult(d,p=>{l.has(p)||(l.add(p),o.forEach(h=>{h.observer.trackProp(p)}))})})}#u(a,o,l){if(o){const s=this.#i,u=l!==void 0&&s!==void 0&&(s.length!==l.length||l.some((d,p)=>d!==s[p]));return(this.#e!==this.#s||u||o!==this.#l)&&(this.#l=o,this.#s=this.#e,l!==void 0&&(this.#i=l),this.#o=Hu(this.#o,o(a))),this.#o}return a}#d(){return!this.#a?.combine||this.#r.some((a,o)=>a.options.suspense&&this.#e[o]?.data===void 0)}#m(a){const o=new Map;this.#r.forEach(s=>{const u=s.options.queryHash;if(!u)return;const d=o.get(u);d?d.push(s):o.set(u,[s])});const l=[];return a.forEach(s=>{const u=this.#t.defaultQueryOptions(s),d=o.get(u.queryHash)?.shift()??new No(this.#t,u);l.push({defaultedQueryOptions:u,observer:d})}),l}#p(a,o){const l=this.#r.indexOf(a);l!==-1&&(this.#e=this.#e.slice(),this.#e[l]=o,this.#h())}#h(){if(this.hasListeners()){const a=this.#d(),o=this.#o,l=a?o:this.#u(this.#c(this.#e,this.#f),this.#a?.combine);(a||o!==l)&&Ze.batch(()=>{this.listeners.forEach(s=>{s(this.#e)})})}}},Tx=class extends Oa{#t;constructor(a={}){super(),this.config=a,this.#t=new Map}build(a,o,l){const s=o.queryKey,u=o.queryHash??Nu(s,o);let d=this.get(u);return d||(d=new xx({client:a,queryKey:s,queryHash:u,options:a.defaultQueryOptions(o),state:l,defaultOptions:a.getQueryDefaults(s)}),this.add(d)),d}add(a){this.#t.has(a.queryHash)||(this.#t.set(a.queryHash,a),this.notify({type:"added",query:a}))}remove(a){const o=this.#t.get(a.queryHash);o&&(a.destroy(),o===a&&this.#t.delete(a.queryHash),this.notify({type:"removed",query:a}))}clear(){Ze.batch(()=>{this.getAll().forEach(a=>{this.remove(a)})})}get(a){return this.#t.get(a)}getAll(){return[...this.#t.values()]}find(a){const o={exact:!0,...a};return this.getAll().find(l=>mh(o,l))}findAll(a={}){const o=this.getAll();return Object.keys(a).length>0?o.filter(l=>mh(a,l)):o}notify(a){Ze.batch(()=>{this.listeners.forEach(o=>{o(a)})})}onFocus(){Ze.batch(()=>{this.getAll().forEach(a=>{a.onFocus()})})}onOnline(){Ze.batch(()=>{this.getAll().forEach(a=>{a.onOnline()})})}},Ox=class{#t;#e;#n;#a;#r;#o;#l;#s;constructor(a={}){this.#t=a.queryCache||new Tx,this.#e=a.mutationCache||new _x,this.#n=a.defaultOptions||{},this.#a=new Map,this.#r=new Map,this.#o=0}mount(){this.#o++,this.#o===1&&(this.#l=Pu.subscribe(async a=>{a&&(await this.resumePausedMutations(),this.#t.onFocus())}),this.#s=bi.subscribe(async a=>{a&&(await this.resumePausedMutations(),this.#t.onOnline())}))}unmount(){this.#o--,this.#o===0&&(this.#l?.(),this.#l=void 0,this.#s?.(),this.#s=void 0)}isFetching(a){return this.#t.findAll({...a,fetchStatus:"fetching"}).length}isMutating(a){return this.#e.findAll({...a,status:"pending"}).length}getQueryData(a){const o=this.defaultQueryOptions({queryKey:a});return this.#t.get(o.queryHash)?.state.data}ensureQueryData(a){const o=this.defaultQueryOptions(a),l=this.#t.build(this,o),s=l.state.data;return s===void 0?this.fetchQuery(a):(a.revalidateIfStale&&l.isStaleByTime(Qe(o.staleTime,l))&&this.prefetchQuery(o),Promise.resolve(s))}getQueriesData(a){return this.#t.findAll(a).map(({queryKey:o,state:l})=>[o,l.data])}setQueryData(a,o,l){const s=this.defaultQueryOptions({queryKey:a}),u=this.#t.get(s.queryHash)?.state.data,d=ox(o,u);if(d!==void 0)return this.#t.build(this,s).setData(d,{...l,manual:!0})}setQueriesData(a,o,l){return Ze.batch(()=>this.#t.findAll(a).map(({queryKey:s})=>[s,this.setQueryData(s,o,l)]))}getQueryState(a){const o=this.defaultQueryOptions({queryKey:a});return this.#t.get(o.queryHash)?.state}removeQueries(a){const o=this.#t;Ze.batch(()=>{o.findAll(a).forEach(l=>{o.remove(l)})})}resetQueries(a,o){const l=this.#t;return Ze.batch(()=>{const s=l.findAll(a),u=new Set(s);return s.forEach(d=>{d.reset()}),this.refetchQueries({type:"active",predicate:d=>u.has(d)},o)})}cancelQueries(a,o={}){const l={revert:!0,...o},s=Ze.batch(()=>this.#t.findAll(a).map(u=>u.cancel(l)));return Promise.all(s).then(rt).catch(rt)}invalidateQueries(a,o={}){return Ze.batch(()=>(this.#t.findAll(a).forEach(l=>{l.invalidate()}),a?.refetchType==="none"?Promise.resolve():this.refetchQueries({...a,type:a?.refetchType??a?.type??"active"},o)))}refetchQueries(a,o={}){const l={...o,cancelRefetch:o.cancelRefetch??!0},s=Ze.batch(()=>this.#t.findAll(a).filter(u=>!u.isDisabled()&&!u.isStatic()).map(u=>{let d=u.fetch(void 0,l);return l.throwOnError||(d=d.catch(rt)),u.state.fetchStatus==="paused"?Promise.resolve():d}));return Promise.all(s).then(rt)}async query(a){const o=this.defaultQueryOptions(a);o.retry===void 0&&(o.retry=!1);const l=this.#t.build(this,o),s=l.isStaleByTime(Qe(o.staleTime,l))?await l.fetch(o):l.state.data,u=o.select;return u?u(s):s}fetchQuery(a){const o=this.defaultQueryOptions(a);o.retry===void 0&&(o.retry=!1);const l=this.#t.build(this,o);return l.isStaleByTime(Qe(o.staleTime,l))?l.fetch(o):Promise.resolve(l.state.data)}prefetchQuery(a){return this.fetchQuery(a).then(rt).catch(rt)}infiniteQuery(a){return a._type="infinite",this.query(a)}fetchInfiniteQuery(a){return a._type="infinite",this.fetchQuery(a)}prefetchInfiniteQuery(a){return this.fetchInfiniteQuery(a).then(rt).catch(rt)}ensureInfiniteQueryData(a){return a._type="infinite",this.ensureQueryData(a)}resumePausedMutations(){return bi.isOnline()?this.#e.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#t}getMutationCache(){return this.#e}getDefaultOptions(){return this.#n}setDefaultOptions(a){this.#n=a}setQueryDefaults(a,o){this.#a.set(na(a),{queryKey:a,defaultOptions:o})}getQueryDefaults(a){const o=[...this.#a.values()],l={};return o.forEach(s=>{xr(a,s.queryKey)&&Object.assign(l,s.defaultOptions)}),l}setMutationDefaults(a,o){this.#r.set(na(a),{mutationKey:a,defaultOptions:o})}getMutationDefaults(a){const o=[...this.#r.values()],l={};return o.forEach(s=>{xr(a,s.mutationKey)&&Object.assign(l,s.defaultOptions)}),l}defaultQueryOptions(a){if(a._defaulted)return a;const o={...this.#n.queries,...this.getQueryDefaults(a.queryKey),...a,_defaulted:!0};return o.queryHash||(o.queryHash=Nu(o.queryKey,o)),o.refetchOnReconnect===void 0&&(o.refetchOnReconnect=o.networkMode!=="always"),o.throwOnError===void 0&&(o.throwOnError=!!o.suspense),!o.networkMode&&o.persister&&(o.networkMode="offlineFirst"),o.queryFn===Mt&&(o.enabled=!1),o}defaultMutationOptions(a){return a?._defaulted?a:{...this.#n.mutations,...a?.mutationKey&&this.getMutationDefaults(a.mutationKey),...a,_defaulted:!0}}clear(){this.#t.clear(),this.#e.clear()}};const Og=_.createContext(!1),Eg=()=>_.useContext(Og);Og.Provider;function Ex(){let a=!1;return{clearReset:()=>{a=!1},reset:()=>{a=!0},isReset:()=>a}}const Ax=_.createContext(Ex()),Ag=()=>_.useContext(Ax),Mg=(a,o,l)=>{const s=l?.state.error&&typeof a.throwOnError=="function"?Uu(a.throwOnError,[l.state.error,l]):a.throwOnError;(a.suspense||s)&&(o.isReset()||(a.retryOnMount=!1))},Lg=a=>{_.useEffect(()=>{a.clearReset()},[a])},Rg=({result:a,errorResetBoundary:o,throwOnError:l,query:s,suspense:u})=>a.isError&&!o.isReset()&&!a.isFetching&&s&&(u&&a.data===void 0||Uu(l,[a.error,s])),Gu=(a,o)=>o.state.data===void 0,Dg=a=>{if(a.suspense){const l=u=>u==="static"?u:Math.max(u??1e3,1e3),s=a.staleTime;a.staleTime=typeof s=="function"?(...u)=>l(s(...u)):l(s),typeof a.gcTime=="number"&&(a.gcTime=Math.max(a.gcTime,1e3))}},vu=(a,o)=>a?.suspense&&o.isPending,zg=(a,o,l)=>o.fetchOptimistic(a).catch(()=>{l.clearReset()});function jg({queries:a,...o},l){const s=jo(l),u=Eg(),d=Ag(),p=o.subscribed!==!1,h=_.useMemo(()=>a.map(A=>{const L=s.defaultQueryOptions(A);return L._optimisticResults=u?"isRestoring":p?"optimistic":void 0,L}),[a,s,u,p]);h.forEach(A=>{Dg(A);const L=s.getQueryCache().get(A.queryHash);Mg(A,d,L)}),Lg(d);const[f]=_.useState(()=>new Cx(s,h,o)),[g,v,y]=f.getOptimisticResult(h,o.combine),C=!u&&p;_.useSyncExternalStore(_.useCallback(A=>C?f.subscribe(Ze.batchCalls(A)):rt,[f,C]),()=>f.getCurrentResult(),()=>f.getCurrentResult()),_.useEffect(()=>{f.setQueries(h,o)},[h,o,f]);const D=g.some((A,L)=>vu(h[L],A))?g.flatMap((A,L)=>{const Y=h[L];if(Y&&vu(Y,A)){const I=new No(s,Y);return zg(Y,I,d)}return[]}):[];if(D.length>0)throw Promise.all(D);const N=g.find((A,L)=>{const Y=h[L];return Y&&Rg({result:A,errorResetBoundary:d,throwOnError:Y.throwOnError,query:s.getQueryCache().get(Y.queryHash),suspense:Y.suspense})});if(N)throw N.error;return v(y())}function Si(a,o,l){const s=Eg(),u=Ag(),d=jo(l),p=d.defaultQueryOptions(a),h=d.getQueryCache().get(p.queryHash),f=a.subscribed!==!1;p._optimisticResults=s?"isRestoring":f?"optimistic":void 0,Dg(p),Mg(p,u,h),Lg(u);const[g]=_.useState(()=>new o(d,p)),v=g.getOptimisticResult(p),y=!s&&f;if(_.useSyncExternalStore(_.useCallback(C=>{const D=y?g.subscribe(Ze.batchCalls(C)):rt;return g.updateResult(),D},[g,y]),()=>g.getCurrentResult(),()=>g.getCurrentResult()),_.useEffect(()=>{g.setOptions(p)},[p,g]),vu(p,v))throw zg(p,g,u);if(Rg({result:v,errorResetBoundary:u,throwOnError:p.throwOnError,query:h,suspense:p.suspense}))throw v.error;return p.notifyOnChangeProps?v:g.trackResult(v)}function Mx(a,o){return Si(a,No,o)}function Lx(a,o){return Si({...a,enabled:!0,suspense:!0,throwOnError:Gu,placeholderData:void 0},No,o)}function Rx(a,o){return Si({...a,enabled:!0,suspense:!0,throwOnError:Gu,placeholderData:void 0},Cg,o)}function Dx(a,o){return jg({...a,queries:a.queries.map(l=>({...l,suspense:!0,throwOnError:Gu,enabled:!0,placeholderData:void 0}))},o)}function zx(a,o){const l=jo(o);l.getQueryState(a.queryKey)||l.query(a).catch(rt)}function jx(a,o){const l=jo(o);l.getQueryState(a.queryKey)||l.infiniteQuery(a).catch(rt)}function Nx(a,o){const l=jo(o),[s]=_.useState(()=>new Sx(l,a));_.useEffect(()=>{s.setOptions(a)},[s,a]);const u=_.useSyncExternalStore(_.useCallback(p=>s.subscribe(Ze.batchCalls(p)),[s]),()=>s.getCurrentResult(),()=>s.getCurrentResult()),d=_.useCallback((...p)=>{s.mutate(p[0],p[1]).catch(rt)},[s]);if(u.error&&Uu(s.options.throwOnError,[u.error]))throw u.error;return{...u,mutate:d,mutateAsync:u.mutate}}function Hx(a,o){return Si(a,Cg,o)}function Ta(a){return!!a&&!Array.isArray(a)&&typeof a=="object"}function Ux(){return Object.create(null)}const Bx=typeof Symbol=="function"&&!!Symbol.asyncIterator;function Ng(a){return Bx&&Ta(a)&&Symbol.asyncIterator in a}var Px=Object.create,Hg=Object.defineProperty,qx=Object.getOwnPropertyDescriptor,Ug=Object.getOwnPropertyNames,Gx=Object.getPrototypeOf,$x=Object.prototype.hasOwnProperty,Ho=(a,o)=>function(){return o||(0,a[Ug(a)[0]])((o={exports:{}}).exports,o),o.exports},Qx=(a,o,l,s)=>{if(o&&typeof o=="object"||typeof o=="function")for(var u=Ug(o),d=0,p=u.length,h;d<p;d++)h=u[d],!$x.call(a,h)&&h!==l&&Hg(a,h,{get:(f=>o[f]).bind(null,h),enumerable:!(s=qx(o,h))||s.enumerable});return a},Ci=(a,o,l)=>(l=a!=null?Px(Gx(a)):{},Qx(Hg(l,"default",{value:a,enumerable:!0}),a));const Bg=()=>{},_h=a=>{Object.freeze&&Object.freeze(a)};function Pg(a,o,l){var s;const u=o.join(".");return(s=l[u])!==null&&s!==void 0||(l[u]=new Proxy(Bg,{get(d,p){if(!(typeof p!="string"||p==="then"))return Pg(a,[...o,p],l)},apply(d,p,h){const f=o[o.length-1];if(f==="valueOf"||f==="toString"||f==="toJSON")return`tRPC.proxy(${o.slice(0,-1).join(".")})`;let g={args:h,path:o};return f==="call"?g={args:h.length>=2?[h[1]]:[],path:o.slice(0,-1)}:f==="apply"&&(g={args:h.length>=2?h[1]:[],path:o.slice(0,-1)}),_h(g.args),_h(g.path),a(g)}})),l[u]}const Ti=a=>Pg(a,[],Ux()),$u=a=>new Proxy(Bg,{get(o,l){if(l!=="then")return a(l)}});var qg=Ho({"../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/typeof.js"(a,o){function l(s){"@babel/helpers - typeof";return o.exports=l=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},o.exports.__esModule=!0,o.exports.default=o.exports,l(s)}o.exports=l,o.exports.__esModule=!0,o.exports.default=o.exports}}),Zx=Ho({"../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/toPrimitive.js"(a,o){var l=qg().default;function s(u,d){if(l(u)!="object"||!u)return u;var p=u[Symbol.toPrimitive];if(p!==void 0){var h=p.call(u,d||"default");if(l(h)!="object")return h;throw new TypeError("@@toPrimitive must return a primitive value.")}return(d==="string"?String:Number)(u)}o.exports=s,o.exports.__esModule=!0,o.exports.default=o.exports}}),Vx=Ho({"../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/toPropertyKey.js"(a,o){var l=qg().default,s=Zx();function u(d){var p=s(d,"string");return l(p)=="symbol"?p:p+""}o.exports=u,o.exports.__esModule=!0,o.exports.default=o.exports}}),Gg=Ho({"../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/defineProperty.js"(a,o){var l=Vx();function s(u,d,p){return(d=l(d))in u?Object.defineProperty(u,d,{value:p,enumerable:!0,configurable:!0,writable:!0}):u[d]=p,u}o.exports=s,o.exports.__esModule=!0,o.exports.default=o.exports}}),Qu=Ho({"../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/objectSpread2.js"(a,o){var l=Gg();function s(d,p){var h=Object.keys(d);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(d);p&&(f=f.filter(function(g){return Object.getOwnPropertyDescriptor(d,g).enumerable})),h.push.apply(h,f)}return h}function u(d){for(var p=1;p<arguments.length;p++){var h=arguments[p]!=null?arguments[p]:{};p%2?s(Object(h),!0).forEach(function(f){l(d,f,h[f])}):Object.getOwnPropertyDescriptors?Object.defineProperties(d,Object.getOwnPropertyDescriptors(h)):s(Object(h)).forEach(function(f){Object.defineProperty(d,f,Object.getOwnPropertyDescriptor(h,f))})}return d}o.exports=u,o.exports.__esModule=!0,o.exports.default=o.exports}});Ci(Qu());Ci(Gg());var li=Ci(Qu());function Yx(a,o){if("error"in a){const s=o.deserialize(a.error);return{ok:!1,error:(0,li.default)((0,li.default)({},a),{},{error:s})}}return{ok:!0,result:(0,li.default)((0,li.default)({},a.result),(!a.result.type||a.result.type==="data")&&{type:"data",data:o.deserialize(a.result.data)})}}var au=class extends Error{constructor(){super("Unable to transform response from server")}};function Kx(a,o){let l;try{l=Yx(a,o)}catch{throw new au}if(!l.ok&&(!Ta(l.error.error)||typeof l.error.error.code!="number"))throw new au;if(l.ok&&!Ta(l.result))throw new au;return l}Ci(Qu());function Oi(a){const o={subscribe(l){let s=null,u=!1,d=!1,p=!1;function h(){if(s===null){p=!0;return}d||(d=!0,typeof s=="function"?s():s&&s.unsubscribe())}return s=a({next(f){var g;u||(g=l.next)===null||g===void 0||g.call(l,f)},error(f){var g;u||(u=!0,(g=l.error)===null||g===void 0||g.call(l,f),h())},complete(){var f;u||(u=!0,(f=l.complete)===null||f===void 0||f.call(l),h())}}),p&&h(),{unsubscribe:h}},pipe(...l){return l.reduce(Ix,o)}};return o}function Ix(a,o){return o(a)}function Xx(a){const o=new AbortController;return new Promise((s,u)=>{let d=!1;function p(){d||(d=!0,h.unsubscribe())}o.signal.addEventListener("abort",()=>{u(o.signal.reason)});const h=a.subscribe({next(f){d=!0,s(f),p()},error(f){u(f)},complete(){o.abort(),p()}})})}var Fx=Object.create,$g=Object.defineProperty,Jx=Object.getOwnPropertyDescriptor,Qg=Object.getOwnPropertyNames,Wx=Object.getPrototypeOf,e2=Object.prototype.hasOwnProperty,ra=(a,o)=>function(){return o||(0,a[Qg(a)[0]])((o={exports:{}}).exports,o),o.exports},t2=(a,o,l,s)=>{if(o&&typeof o=="object"||typeof o=="function")for(var u=Qg(o),d=0,p=u.length,h;d<p;d++)h=u[d],!e2.call(a,h)&&h!==l&&$g(a,h,{get:(f=>o[f]).bind(null,h),enumerable:!(s=Jx(o,h))||s.enumerable});return a},Ea=(a,o,l)=>(l=a!=null?Fx(Wx(a)):{},t2(o||!a||!a.__esModule?$g(l,"default",{value:a,enumerable:!0}):l,a)),n2=ra({"../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/objectWithoutPropertiesLoose.js"(a,o){function l(s,u){if(s==null)return{};var d={};for(var p in s)if({}.hasOwnProperty.call(s,p)){if(u.includes(p))continue;d[p]=s[p]}return d}o.exports=l,o.exports.__esModule=!0,o.exports.default=o.exports}}),a2=ra({"../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/objectWithoutProperties.js"(a,o){var l=n2();function s(u,d){if(u==null)return{};var p,h,f=l(u,d);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(u);for(h=0;h<g.length;h++)p=g[h],d.includes(p)||{}.propertyIsEnumerable.call(u,p)&&(f[p]=u[p])}return f}o.exports=s,o.exports.__esModule=!0,o.exports.default=o.exports}}),Zg=ra({"../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/typeof.js"(a,o){function l(s){"@babel/helpers - typeof";return o.exports=l=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},o.exports.__esModule=!0,o.exports.default=o.exports,l(s)}o.exports=l,o.exports.__esModule=!0,o.exports.default=o.exports}}),r2=ra({"../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/toPrimitive.js"(a,o){var l=Zg().default;function s(u,d){if(l(u)!="object"||!u)return u;var p=u[Symbol.toPrimitive];if(p!==void 0){var h=p.call(u,d||"default");if(l(h)!="object")return h;throw new TypeError("@@toPrimitive must return a primitive value.")}return(d==="string"?String:Number)(u)}o.exports=s,o.exports.__esModule=!0,o.exports.default=o.exports}}),o2=ra({"../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/toPropertyKey.js"(a,o){var l=Zg().default,s=r2();function u(d){var p=s(d,"string");return l(p)=="symbol"?p:p+""}o.exports=u,o.exports.__esModule=!0,o.exports.default=o.exports}}),l2=ra({"../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/defineProperty.js"(a,o){var l=o2();function s(u,d,p){return(d=l(d))in u?Object.defineProperty(u,d,{value:p,enumerable:!0,configurable:!0,writable:!0}):u[d]=p,u}o.exports=s,o.exports.__esModule=!0,o.exports.default=o.exports}}),Uo=ra({"../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/objectSpread2.js"(a,o){var l=l2();function s(d,p){var h=Object.keys(d);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(d);p&&(f=f.filter(function(g){return Object.getOwnPropertyDescriptor(d,g).enumerable})),h.push.apply(h,f)}return h}function u(d){for(var p=1;p<arguments.length;p++){var h=arguments[p]!=null?arguments[p]:{};p%2?s(Object(h),!0).forEach(function(f){l(d,f,h[f])}):Object.getOwnPropertyDescriptors?Object.defineProperties(d,Object.getOwnPropertyDescriptors(h)):s(Object(h)).forEach(function(f){Object.defineProperty(d,f,Object.getOwnPropertyDescriptor(h,f))})}return d}o.exports=u,o.exports.__esModule=!0,o.exports.default=o.exports}}),i2=Ea(a2(),1),Sh=Ea(Uo(),1);const s2=["cursor","direction"];function en(a,o,l){const s=a.flatMap(u=>u.split("."));if(!o&&(!l||l==="any"))return s.length?[s]:[];if(l==="infinite"&&Ta(o)&&("direction"in o||"cursor"in o)){const{cursor:u,direction:d}=o,p=(0,i2.default)(o,s2);return[s,{input:p,type:"infinite"}]}return[s,(0,Sh.default)((0,Sh.default)({},typeof o<"u"&&o!==Mt&&{input:o}),l&&l!=="any"&&{type:l})]}function fi(a){return en(a,void 0,"any")}var c2=Object.create,Vg=Object.defineProperty,u2=Object.getOwnPropertyDescriptor,Yg=Object.getOwnPropertyNames,d2=Object.getPrototypeOf,p2=Object.prototype.hasOwnProperty,nn=(a,o)=>function(){return o||(0,a[Yg(a)[0]])((o={exports:{}}).exports,o),o.exports},f2=(a,o,l,s)=>{if(o&&typeof o=="object"||typeof o=="function")for(var u=Yg(o),d=0,p=u.length,h;d<p;d++)h=u[d],!p2.call(a,h)&&h!==l&&Vg(a,h,{get:(f=>o[f]).bind(null,h),enumerable:!(s=u2(o,h))||s.enumerable});return a},Ke=(a,o,l)=>(l=a!=null?c2(d2(a)):{},f2(o||!a||!a.__esModule?Vg(l,"default",{value:a,enumerable:!0}):l,a)),Kg=nn({"../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/typeof.js"(a,o){function l(s){"@babel/helpers - typeof";return o.exports=l=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},o.exports.__esModule=!0,o.exports.default=o.exports,l(s)}o.exports=l,o.exports.__esModule=!0,o.exports.default=o.exports}}),m2=nn({"../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/toPrimitive.js"(a,o){var l=Kg().default;function s(u,d){if(l(u)!="object"||!u)return u;var p=u[Symbol.toPrimitive];if(p!==void 0){var h=p.call(u,d||"default");if(l(h)!="object")return h;throw new TypeError("@@toPrimitive must return a primitive value.")}return(d==="string"?String:Number)(u)}o.exports=s,o.exports.__esModule=!0,o.exports.default=o.exports}}),h2=nn({"../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/toPropertyKey.js"(a,o){var l=Kg().default,s=m2();function u(d){var p=s(d,"string");return l(p)=="symbol"?p:p+""}o.exports=u,o.exports.__esModule=!0,o.exports.default=o.exports}}),Aa=nn({"../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/defineProperty.js"(a,o){var l=h2();function s(u,d,p){return(d=l(d))in u?Object.defineProperty(u,d,{value:p,enumerable:!0,configurable:!0,writable:!0}):u[d]=p,u}o.exports=s,o.exports.__esModule=!0,o.exports.default=o.exports}}),Vt=nn({"../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/objectSpread2.js"(a,o){var l=Aa();function s(d,p){var h=Object.keys(d);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(d);p&&(f=f.filter(function(g){return Object.getOwnPropertyDescriptor(d,g).enumerable})),h.push.apply(h,f)}return h}function u(d){for(var p=1;p<arguments.length;p++){var h=arguments[p]!=null?arguments[p]:{};p%2?s(Object(h),!0).forEach(function(f){l(d,f,h[f])}):Object.getOwnPropertyDescriptors?Object.defineProperties(d,Object.getOwnPropertyDescriptors(h)):s(Object(h)).forEach(function(f){Object.defineProperty(d,f,Object.getOwnPropertyDescriptor(h,f))})}return d}o.exports=u,o.exports.__esModule=!0,o.exports.default=o.exports}});function g2(a){return o=>{let l=0,s=null;const u=[];function d(){s||(s=o.subscribe({next(h){for(const g of u){var f;(f=g.next)===null||f===void 0||f.call(g,h)}},error(h){for(const g of u){var f;(f=g.error)===null||f===void 0||f.call(g,h)}},complete(){for(const f of u){var h;(h=f.complete)===null||h===void 0||h.call(f)}}}))}function p(){if(l===0&&s){const h=s;s=null,h.unsubscribe()}}return Oi(h=>(l++,u.push(h),d(),{unsubscribe(){l--,p();const f=u.findIndex(g=>g===h);f>-1&&u.splice(f,1)}}))}}function b2(a){let o=a;const l=[],s=p=>{o!==void 0&&p.next(o),l.push(p)},u=p=>{l.splice(l.indexOf(p),1)},d=Oi(p=>(s(p),()=>{u(p)}));return d.next=p=>{if(o!==p){o=p;for(const h of l)h.next(p)}},d.get=()=>o,d}function v2(a){return Oi(o=>{function l(u=0,d=a.op){const p=a.links[u];if(!p)throw new Error("No more links to execute - did you forget to add an ending link?");return p({op:d,next(f){return l(u+1,f)}})}return l().subscribe(o)})}var ii=Ke(Aa(),1),mr=Ke(Vt(),1);function y2(a){return a instanceof vi}function x2(a){return Ta(a)&&Ta(a.error)&&typeof a.error.code=="number"&&typeof a.error.message=="string"}function k2(a,o){return typeof a=="string"?a:Ta(a)&&typeof a.message=="string"?a.message:o}var vi=class mi extends Error{constructor(o,l){var s,u;const d=l?.cause;super(o,{cause:d}),(0,ii.default)(this,"cause",void 0),(0,ii.default)(this,"shape",void 0),(0,ii.default)(this,"data",void 0),(0,ii.default)(this,"meta",void 0),this.meta=l?.meta,this.cause=d,this.shape=l==null||(s=l.result)===null||s===void 0?void 0:s.error,this.data=l==null||(u=l.result)===null||u===void 0?void 0:u.error.data,this.name="TRPCClientError",Object.setPrototypeOf(this,mi.prototype)}static from(o,l={}){const s=o;return y2(s)?(l.meta&&(s.meta=(0,mr.default)((0,mr.default)({},s.meta),l.meta)),s):x2(s)?new mi(s.error.message,(0,mr.default)((0,mr.default)({},l),{},{result:s,cause:l.cause})):new mi(k2(s,"Unknown error"),(0,mr.default)((0,mr.default)({},l),{},{cause:s}))}};function w2(a){const o=a;return o?"input"in o?o:{input:o,output:o}:{input:{serialize:l=>l,deserialize:l=>l},output:{serialize:l=>l,deserialize:l=>l}}}const Ch=a=>typeof a=="function";function _2(a){if(a)return a;if(typeof window<"u"&&Ch(window.fetch))return window.fetch;if(typeof globalThis<"u"&&Ch(globalThis.fetch))return globalThis.fetch;throw new Error("No fetch implementation found")}var Oo=Ke(Vt());function S2(a){return{url:a.url.toString(),fetch:a.fetch,transformer:w2(a.transformer),methodOverride:a.methodOverride}}function C2(a){const o={};for(let l=0;l<a.length;l++){const s=a[l];o[l]=s}return o}const T2={query:"GET",mutation:"POST",subscription:"PATCH"};function Ig(a){return"input"in a?a.transformer.input.serialize(a.input):C2(a.inputs.map(o=>a.transformer.input.serialize(o)))}const Xg=a=>{const o=a.url.split("?");let s=o[0].replace(/\/$/,"")+"/"+a.path;const u=[];if(o[1]&&u.push(o[1]),"inputs"in a&&u.push("batch=1"),a.type==="query"||a.type==="subscription"){const d=Ig(a);d!==void 0&&a.methodOverride!=="POST"&&u.push(`input=${encodeURIComponent(JSON.stringify(d))}`)}return u.length&&(s+="?"+u.join("&")),s},O2=a=>{if(a.type==="query"&&a.methodOverride!=="POST")return;const o=Ig(a);return o!==void 0?JSON.stringify(o):void 0},E2=a=>R2((0,Oo.default)((0,Oo.default)({},a),{},{contentTypeHeader:"application/json",getUrl:Xg,getBody:O2}));var A2=class extends Error{constructor(){const a="AbortError";super(a),this.name=a,this.message=a}};const M2=a=>{var o;if(a?.aborted)throw(o=a.throwIfAborted)===null||o===void 0||o.call(a),typeof DOMException<"u"?new DOMException("AbortError","AbortError"):new A2};async function L2(a){var o,l;M2(a.signal);const s=a.getUrl(a),u=a.getBody(a),d=(o=a.methodOverride)!==null&&o!==void 0?o:T2[a.type],p=await(async()=>{const f=await a.headers();return Symbol.iterator in f?Object.fromEntries(f):f})(),h=(0,Oo.default)((0,Oo.default)((0,Oo.default)({},a.contentTypeHeader&&d!=="GET"?{"content-type":a.contentTypeHeader}:{}),a.trpcAcceptHeader?{[(l=a.trpcAcceptHeaderKey)!==null&&l!==void 0?l:"trpc-accept"]:a.trpcAcceptHeader}:void 0),p);return _2(a.fetch)(s,{method:d,signal:a.signal,body:u,headers:h})}async function R2(a){const o={},l=await L2(a);o.response=l;const s=await l.json();return o.responseJSON=s,{json:s,meta:o}}Ke(Vt(),1);const Th=()=>{throw new Error("Something went wrong. Please submit an issue at https://github.com/trpc/trpc/issues/new")};function Oh(a){let o=null,l=null;const s=()=>{clearTimeout(l),l=null,o=null};function u(h){const f=[[]];let g=0;for(;;){const C=h[g];if(!C)break;const D=f[f.length-1];if(C.aborted){var v;(v=C.reject)===null||v===void 0||v.call(C,new Error("Aborted")),g++;continue}if(a.validate(D.concat(C).map(A=>A.key))){D.push(C),g++;continue}if(D.length===0){var y;(y=C.reject)===null||y===void 0||y.call(C,new Error("Input is too big for a single dispatch")),g++;continue}f.push([])}return f}function d(){const h=u(o);s();for(const f of h){if(!f.length)continue;const g={items:f};for(const y of f)y.batch=g;a.fetch(g.items.map(y=>y.key)).then(async y=>{await Promise.all(y.map(async(D,N)=>{const A=g.items[N];try{var L;const I=await Promise.resolve(D);(L=A.resolve)===null||L===void 0||L.call(A,I)}catch(I){var Y;(Y=A.reject)===null||Y===void 0||Y.call(A,I)}A.batch=null,A.reject=null,A.resolve=null}));for(const D of g.items){var C;(C=D.reject)===null||C===void 0||C.call(D,new Error("Missing result")),D.batch=null}}).catch(y=>{for(const D of g.items){var C;(C=D.reject)===null||C===void 0||C.call(D,y),D.batch=null}})}}function p(h){var f;const g={aborted:!1,key:h,batch:null,resolve:Th,reject:Th},v=new Promise((y,C)=>{var D;g.reject=C,g.resolve=y,(D=o)!==null&&D!==void 0||(o=[]),o.push(g)});return(f=l)!==null&&f!==void 0||(l=setTimeout(d)),v}return{load:p}}function D2(...a){const o=new AbortController,l=a.length;let s=0;const u=()=>{++s===l&&o.abort()};for(const d of a)d?.aborted?u():d?.addEventListener("abort",u,{once:!0});return o.signal}var si=Ke(Vt(),1);function z2(a){var o,l;const s=S2(a),u=(o=a.maxURLLength)!==null&&o!==void 0?o:1/0,d=(l=a.maxItems)!==null&&l!==void 0?l:1/0;return()=>{const p=v=>({validate(y){if(u===1/0&&d===1/0)return!0;if(y.length>d)return!1;const C=y.map(A=>A.path).join(","),D=y.map(A=>A.input);return Xg((0,si.default)((0,si.default)({},s),{},{type:v,path:C,inputs:D,signal:null})).length<=u},async fetch(y){const C=y.map(I=>I.path).join(","),D=y.map(I=>I.input),N=D2(...y.map(I=>I.signal)),A=await E2((0,si.default)((0,si.default)({},s),{},{path:C,inputs:D,type:v,headers(){return a.headers?typeof a.headers=="function"?a.headers({opList:y}):a.headers:{}},signal:N}));return(Array.isArray(A.json)?A.json:y.map(()=>A.json)).map(I=>({meta:A.meta,json:I}))}}),h=Oh(p("query")),f=Oh(p("mutation")),g={query:h,mutation:f};return({op:v})=>Oi(y=>{if(v.type==="subscription")throw new Error("Subscriptions are unsupported by `httpLink` - use `httpSubscriptionLink` or `wsLink`");const D=g[v.type].load(v);let N;return D.then(A=>{N=A;const L=Kx(A.json,s.transformer.output);if(!L.ok){y.error(vi.from(L.error,{meta:A.meta}));return}y.next({context:A.meta,result:L.result}),y.complete()}).catch(A=>{y.error(vi.from(A,{meta:N?.meta}))}),()=>{}})}}Ke(Vt(),1);const Fg=(a,...o)=>typeof a=="function"?a(...o):a;Ke(Aa(),1);function j2(){let a,o;return{promise:new Promise((s,u)=>{a=s,o=u}),resolve:a,reject:o}}async function N2(a){const o=await Fg(a.url);if(!a.connectionParams)return o;const s=`${o.includes("?")?"&":"?"}connectionParams=1`;return o+s}async function H2(a,o){const l={method:"connectionParams",data:await Fg(a)};return o.encode(l)}Ke(Aa(),1);var ta=Ke(Aa(),1);function U2(a){const{promise:o,resolve:l,reject:s}=j2();return a.addEventListener("open",()=>{a.removeEventListener("error",s),l()}),a.addEventListener("error",s),o}function B2(a,{intervalMs:o,pongTimeoutMs:l}){let s,u;function d(){s=setTimeout(()=>{a.send("PING"),u=setTimeout(()=>{a.close()},l)},o)}function p(){clearTimeout(s),d()}function h(){clearTimeout(u),p()}a.addEventListener("open",d),a.addEventListener("message",({data:f})=>{clearTimeout(s),d(),f==="PONG"&&h()}),a.addEventListener("close",()=>{clearTimeout(s),clearTimeout(u)})}var P2=class yu{constructor(o){var l;if((0,ta.default)(this,"id",++yu.connectCount),(0,ta.default)(this,"WebSocketPonyfill",void 0),(0,ta.default)(this,"urlOptions",void 0),(0,ta.default)(this,"keepAliveOpts",void 0),(0,ta.default)(this,"encoder",void 0),(0,ta.default)(this,"wsObservable",b2(null)),(0,ta.default)(this,"openPromise",null),this.WebSocketPonyfill=(l=o.WebSocketPonyfill)!==null&&l!==void 0?l:WebSocket,!this.WebSocketPonyfill)throw new Error("No WebSocket implementation found - you probably don't want to use this on the server, but if you do you need to pass a `WebSocket`-ponyfill");this.urlOptions=o.urlOptions,this.keepAliveOpts=o.keepAlive,this.encoder=o.encoder}get ws(){return this.wsObservable.get()}set ws(o){this.wsObservable.next(o)}isOpen(){return!!this.ws&&this.ws.readyState===this.WebSocketPonyfill.OPEN&&!this.openPromise}isClosed(){return!!this.ws&&(this.ws.readyState===this.WebSocketPonyfill.CLOSING||this.ws.readyState===this.WebSocketPonyfill.CLOSED)}async open(){var o=this;if(o.openPromise)return o.openPromise;o.id=++yu.connectCount;const l=N2(o.urlOptions).then(s=>new o.WebSocketPonyfill(s));o.openPromise=l.then(async s=>{o.ws=s,s.binaryType="arraybuffer",s.addEventListener("message",function({data:u}){u==="PING"&&this.send("PONG")}),o.keepAliveOpts.enabled&&B2(s,o.keepAliveOpts),s.addEventListener("close",()=>{o.ws===s&&(o.ws=null)}),await U2(s),o.urlOptions.connectionParams&&s.send(await H2(o.urlOptions.connectionParams,o.encoder))});try{await o.openPromise}finally{o.openPromise=null}}async close(){var o=this;try{await o.openPromise}finally{var l;(l=o.ws)===null||l===void 0||l.close()}}};(0,ta.default)(P2,"connectCount",0);Ke(Aa(),1);Ke(Vt(),1);var ru=Ke(Aa(),1),Eh=Ke(Vt(),1),Ei=class{constructor(a){(0,ru.default)(this,"links",void 0),(0,ru.default)(this,"runtime",void 0),(0,ru.default)(this,"requestId",void 0),this.requestId=0,this.runtime={},this.links=a.links.map(o=>o(this.runtime))}$request(a){var o;return v2({links:this.links,op:(0,Eh.default)((0,Eh.default)({},a),{},{context:(o=a.context)!==null&&o!==void 0?o:{},id:++this.requestId})}).pipe(g2())}async requestAsPromise(a){var o=this;try{const l=o.$request(a);return(await Xx(l)).result.data}catch(l){throw vi.from(l)}}query(a,o,l){return this.requestAsPromise({type:"query",path:a,input:o,context:l?.context,signal:l?.signal})}mutation(a,o,l){return this.requestAsPromise({type:"mutation",path:a,input:o,context:l?.context,signal:l?.signal})}subscription(a,o,l){return this.$request({type:"subscription",path:a,input:o,context:l.context,signal:l.signal}).subscribe({next(u){switch(u.result.type){case"state":{var d;(d=l.onConnectionStateChange)===null||d===void 0||d.call(l,u.result);break}case"started":{var p;(p=l.onStarted)===null||p===void 0||p.call(l,{context:u.context});break}case"stopped":{var h;(h=l.onStopped)===null||h===void 0||h.call(l);break}case"data":case void 0:{var f;(f=l.onData)===null||f===void 0||f.call(l,u.result.data);break}}},error(u){var d;(d=l.onError)===null||d===void 0||d.call(l,u)},complete(){var u;(u=l.onComplete)===null||u===void 0||u.call(l)}})}};const Jg=Symbol.for("trpc_untypedClient"),q2={query:"query",mutate:"mutation",subscribe:"subscription"},G2=a=>q2[a];function Wg(a){const o=Ti(({path:l,args:s})=>{const u=[...l],d=G2(u.pop()),p=u.join(".");return a[d](p,...s)});return $u(l=>l===Jg?a:o[l])}function $2(a){const o=new Ei(a);return Wg(o)}function Zu(a){return a[Jg]}Ke(Vt(),1);Ke(Vt(),1);var Q2=nn({"../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/asyncIterator.js"(a,o){function l(u){var d,p,h,f=2;for(typeof Symbol<"u"&&(p=Symbol.asyncIterator,h=Symbol.iterator);f--;){if(p&&(d=u[p])!=null)return d.call(u);if(h&&(d=u[h])!=null)return new s(d.call(u));p="@@asyncIterator",h="@@iterator"}throw new TypeError("Object is not async iterable")}function s(u){function d(p){if(Object(p)!==p)return Promise.reject(new TypeError(p+" is not an object."));var h=p.done;return Promise.resolve(p.value).then(function(f){return{value:f,done:h}})}return s=function(h){this.s=h,this.n=h.next},s.prototype={s:null,n:null,next:function(){return d(this.n.apply(this.s,arguments))},return:function(h){var f=this.s.return;return f===void 0?Promise.resolve({value:h,done:!0}):d(f.apply(this.s,arguments))},throw:function(h){var f=this.s.return;return f===void 0?Promise.reject(h):d(f.apply(this.s,arguments))}},new s(u)}o.exports=l,o.exports.__esModule=!0,o.exports.default=o.exports}});Ke(Q2(),1);Ke(Vt(),1);var Z2=nn({"../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/usingCtx.js"(a,o){function l(){var s=typeof SuppressedError=="function"?SuppressedError:function(h,f){var g=Error();return g.name="SuppressedError",g.error=h,g.suppressed=f,g},u={},d=[];function p(h,f){if(f!=null){if(Object(f)!==f)throw new TypeError("using declarations can only be used with objects, functions, null, or undefined.");if(h)var g=f[Symbol.asyncDispose||Symbol.for("Symbol.asyncDispose")];if(g===void 0&&(g=f[Symbol.dispose||Symbol.for("Symbol.dispose")],h))var v=g;if(typeof g!="function")throw new TypeError("Object is not disposable.");v&&(g=function(){try{v.call(f)}catch(C){return Promise.reject(C)}}),d.push({v:f,d:g,a:h})}else h&&d.push({d:f,a:h});return f}return{e:u,u:p.bind(null,!1),a:p.bind(null,!0),d:function(){var f,g=this.e,v=0;function y(){for(;f=d.pop();)try{if(!f.a&&v===1)return v=0,d.push(f),Promise.resolve().then(y);if(f.d){var D=f.d.call(f.v);if(f.a)return v|=2,Promise.resolve(D).then(y,C)}else v|=1}catch(N){return C(N)}if(v===1)return g!==u?Promise.reject(g):Promise.resolve();if(g!==u)throw g}function C(D){return g=g!==u?new s(D,g):D,y()}return y()}}}o.exports=l,o.exports.__esModule=!0,o.exports.default=o.exports}}),e0=nn({"../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/OverloadYield.js"(a,o){function l(s,u){this.v=s,this.k=u}o.exports=l,o.exports.__esModule=!0,o.exports.default=o.exports}}),V2=nn({"../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/awaitAsyncGenerator.js"(a,o){var l=e0();function s(u){return new l(u,0)}o.exports=s,o.exports.__esModule=!0,o.exports.default=o.exports}}),Y2=nn({"../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/wrapAsyncGenerator.js"(a,o){var l=e0();function s(d){return function(){return new u(d.apply(this,arguments))}}function u(d){var p,h;function f(v,y){try{var C=d[v](y),D=C.value,N=D instanceof l;Promise.resolve(N?D.v:D).then(function(A){if(N){var L=v==="return"?"return":"next";if(!D.k||A.done)return f(L,A);A=d[L](A).value}g(C.done?"return":"normal",A)},function(A){f("throw",A)})}catch(A){g("throw",A)}}function g(v,y){switch(v){case"return":p.resolve({value:y,done:!0});break;case"throw":p.reject(y);break;default:p.resolve({value:y,done:!1})}(p=p.next)?f(p.key,p.arg):h=null}this._invoke=function(v,y){return new Promise(function(C,D){var N={key:v,arg:y,resolve:C,reject:D,next:null};h?h=h.next=N:(p=h=N,f(v,y))})},typeof d.return!="function"&&(this.return=void 0)}u.prototype[typeof Symbol=="function"&&Symbol.asyncIterator||"@@asyncIterator"]=function(){return this},u.prototype.next=function(d){return this._invoke("next",d)},u.prototype.throw=function(d){return this._invoke("throw",d)},u.prototype.return=function(d){return this._invoke("return",d)},o.exports=s,o.exports.__esModule=!0,o.exports.default=o.exports}});Ke(Z2(),1);Ke(V2(),1);Ke(Y2(),1);Ke(Vt(),1);function K2(a){return Ti(({path:o,args:l})=>{var s;const u=[...o],d=u.pop();if(d==="useMutation")return a[d](u,...l);if(d==="_def")return{path:u};const[p,...h]=l,f=(s=h[0])!==null&&s!==void 0?s:{};return a[d](u,p,f)})}var ou;const I2=["client","ssrContext","ssrState","abortOnUnmount"],X2=(ou=_.createContext)===null||ou===void 0?void 0:ou.call(Vh,null),F2=a=>{switch(a){case"queryOptions":case"fetch":case"ensureData":case"prefetch":case"getData":case"setData":case"setQueriesData":return"query";case"infiniteQueryOptions":case"fetchInfinite":case"prefetchInfinite":case"getInfiniteData":case"setInfiniteData":return"infinite";case"setMutationDefaults":case"getMutationDefaults":case"isMutating":case"cancel":case"invalidate":case"refetch":case"reset":return"any"}};function J2(a){return Ti(o=>{const l=[...o.path],s=l.pop(),u=[...o.args],d=u.shift(),p=F2(s),h=en(l,d,p);return{infiniteQueryOptions:()=>a.infiniteQueryOptions(l,h,u[0]),queryOptions:()=>a.queryOptions(l,h,...u),fetch:()=>a.fetchQuery(h,...u),fetchInfinite:()=>a.fetchInfiniteQuery(h,u[0]),prefetch:()=>a.prefetchQuery(h,...u),prefetchInfinite:()=>a.prefetchInfiniteQuery(h,u[0]),ensureData:()=>a.ensureQueryData(h,...u),invalidate:()=>a.invalidateQueries(h,...u),reset:()=>a.resetQueries(h,...u),refetch:()=>a.refetchQueries(h,...u),cancel:()=>a.cancelQuery(h,...u),setData:()=>{a.setQueryData(h,u[0],u[1])},setQueriesData:()=>a.setQueriesData(h,u[0],u[1],u[2]),setInfiniteData:()=>{a.setInfiniteQueryData(h,u[0],u[1])},getData:()=>a.getQueryData(h),getInfiniteData:()=>a.getInfiniteQueryData(h),setMutationDefaults:()=>a.setMutationDefaults(fi(l),d),getMutationDefaults:()=>a.getMutationDefaults(fi(l)),isMutating:()=>a.isMutating({mutationKey:fi(l)})}[s]()})}function W2(a){const o=Wg(a.client),l=J2(a);return $u(s=>{const u=s;return u==="client"?o:I2.includes(u)?a[u]:l[s]})}var ek=Ea(Uo(),1);function Ah(a){const o=a instanceof Ei?a:Zu(a);return Ti(l=>{const s=l.path,u=s.join("."),[d,p]=l.args;return(0,ek.default)({queryKey:en(s,d,"query"),queryFn:()=>o.query(u,d,p?.trpc)},p)})}var lu=Ea(Uo(),1);function pt(a,o,l){var s;const u=a[0];let d=(s=a[1])===null||s===void 0?void 0:s.input;if(l){var p;d=(0,lu.default)((0,lu.default)((0,lu.default)({},(p=d)!==null&&p!==void 0?p:{}),l.pageParam?{cursor:l.pageParam}:{}),{},{direction:l.direction})}return[u.join("."),d,o?.trpc]}var tk=ra({"../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/asyncIterator.js"(a,o){function l(u){var d,p,h,f=2;for(typeof Symbol<"u"&&(p=Symbol.asyncIterator,h=Symbol.iterator);f--;){if(p&&(d=u[p])!=null)return d.call(u);if(h&&(d=u[h])!=null)return new s(d.call(u));p="@@asyncIterator",h="@@iterator"}throw new TypeError("Object is not async iterable")}function s(u){function d(p){if(Object(p)!==p)return Promise.reject(new TypeError(p+" is not an object."));var h=p.done;return Promise.resolve(p.value).then(function(f){return{value:f,done:h}})}return s=function(h){this.s=h,this.n=h.next},s.prototype={s:null,n:null,next:function(){return d(this.n.apply(this.s,arguments))},return:function(h){var f=this.s.return;return f===void 0?Promise.resolve({value:h,done:!0}):d(f.apply(this.s,arguments))},throw:function(h){var f=this.s.return;return f===void 0?Promise.reject(h):d(f.apply(this.s,arguments))}},new s(u)}o.exports=l,o.exports.__esModule=!0,o.exports.default=o.exports}}),nk=Ea(tk(),1);function xu(a){return{path:a.path.join(".")}}function _o(a){const o=xu(a);return _.useMemo(()=>o,[o])}async function t0(a,o,l){const u=o.getQueryCache().build(o,{queryKey:l});u.setState({data:[],status:"success"});const d=[];var p=!1,h=!1,f;try{for(var g=(0,nk.default)(a),v;p=!(v=await g.next()).done;p=!1){const y=v.value;d.push(y),u.setState({data:[...d]})}}catch(y){h=!0,f=y}finally{try{p&&g.return!=null&&await g.return()}finally{if(h)throw f}}return d}var Ae=Ea(Uo(),1);function ak(a){const{client:o,queryClient:l}=a,s=o instanceof Ei?o:Zu(o);return{infiniteQueryOptions:(u,d,p)=>{var h,f;const g=((h=d[1])===null||h===void 0?void 0:h.input)===Mt,v=async y=>{var C;const D=(0,Ae.default)((0,Ae.default)({},p),{},{trpc:(0,Ae.default)((0,Ae.default)({},p?.trpc),!(p==null||(C=p.trpc)===null||C===void 0)&&C.abortOnUnmount?{signal:y.signal}:{signal:null})});return await s.query(...pt(d,D,{direction:y.direction,pageParam:y.pageParam}))};return Object.assign((0,Ae.default)((0,Ae.default)({},p),{},{initialData:p?.initialData,queryKey:d,queryFn:g?Mt:v,initialPageParam:(f=p?.initialCursor)!==null&&f!==void 0?f:null}),{trpc:xu({path:u})})},queryOptions:(u,d,p)=>{var h;const f=((h=d[1])===null||h===void 0?void 0:h.input)===Mt,g=async v=>{var y;const C=(0,Ae.default)((0,Ae.default)({},p),{},{trpc:(0,Ae.default)((0,Ae.default)({},p?.trpc),!(p==null||(y=p.trpc)===null||y===void 0)&&y.abortOnUnmount?{signal:v.signal}:{signal:null})}),D=await s.query(...pt(d,C));return Ng(D)?t0(D,l,d):D};return Object.assign((0,Ae.default)((0,Ae.default)({},p),{},{initialData:p?.initialData,queryKey:d,queryFn:f?Mt:g}),{trpc:xu({path:u})})},fetchQuery:(u,d)=>l.fetchQuery((0,Ae.default)((0,Ae.default)({},d),{},{queryKey:u,queryFn:()=>s.query(...pt(u,d))})),fetchInfiniteQuery:(u,d)=>{var p;return l.fetchInfiniteQuery((0,Ae.default)((0,Ae.default)({},d),{},{queryKey:u,queryFn:({pageParam:h,direction:f})=>s.query(...pt(u,d,{pageParam:h,direction:f})),initialPageParam:(p=d?.initialCursor)!==null&&p!==void 0?p:null}))},prefetchQuery:(u,d)=>l.prefetchQuery((0,Ae.default)((0,Ae.default)({},d),{},{queryKey:u,queryFn:()=>s.query(...pt(u,d))})),prefetchInfiniteQuery:(u,d)=>{var p;return l.prefetchInfiniteQuery((0,Ae.default)((0,Ae.default)({},d),{},{queryKey:u,queryFn:({pageParam:h,direction:f})=>s.query(...pt(u,d,{pageParam:h,direction:f})),initialPageParam:(p=d?.initialCursor)!==null&&p!==void 0?p:null}))},ensureQueryData:(u,d)=>l.ensureQueryData((0,Ae.default)((0,Ae.default)({},d),{},{queryKey:u,queryFn:()=>s.query(...pt(u,d))})),invalidateQueries:(u,d,p)=>l.invalidateQueries((0,Ae.default)((0,Ae.default)({},d),{},{queryKey:u}),p),resetQueries:(u,d,p)=>l.resetQueries((0,Ae.default)((0,Ae.default)({},d),{},{queryKey:u}),p),refetchQueries:(u,d,p)=>l.refetchQueries((0,Ae.default)((0,Ae.default)({},d),{},{queryKey:u}),p),cancelQuery:(u,d)=>l.cancelQueries({queryKey:u},d),setQueryData:(u,d,p)=>l.setQueryData(u,d,p),setQueriesData:(u,d,p,h)=>l.setQueriesData((0,Ae.default)((0,Ae.default)({},d),{},{queryKey:u}),p,h),getQueryData:u=>l.getQueryData(u),setInfiniteQueryData:(u,d,p)=>l.setQueryData(u,d,p),getInfiniteQueryData:u=>l.getQueryData(u),setMutationDefaults:(u,d)=>{const p=u[0],h=f=>s.mutation(...pt([p,{input:f}],a));return l.setMutationDefaults(u,typeof d=="function"?d({canonicalMutationFn:h}):d)},getMutationDefaults:u=>l.getMutationDefaults(u),isMutating:u=>l.isMutating((0,Ae.default)((0,Ae.default)({},u),{},{exact:!0}))}}var X=Ea(Uo());const Mh=(a,o)=>new Proxy(a,{get(s,u){return o(u),s[u]}});function rk(a){var o,l;const s=(o=void 0)!==null&&o!==void 0?o:Z=>Z.originalFn(),u=(l=void 0)!==null&&l!==void 0?l:X2,d=$2,p=Z=>{var V;const{abortOnUnmount:z=!1,queryClient:G,ssrContext:J}=Z,[oe,le]=_.useState((V=Z.ssrState)!==null&&V!==void 0?V:!1),te=Z.client instanceof Ei?Z.client:Zu(Z.client),be=_.useMemo(()=>ak({client:te,queryClient:G}),[te,G]),fe=_.useMemo(()=>(0,X.default)({abortOnUnmount:z,queryClient:G,client:te,ssrContext:J??null,ssrState:oe},be),[z,te,be,G,J,oe]);return _.useEffect(()=>{le(se=>se?"mounted":!1)},[]),K.jsx(u.Provider,{value:fe,children:Z.children})};function h(){const Z=_.useContext(u);if(!Z)throw new Error("Unable to find tRPC Context. Did you forget to wrap your App inside `withTRPC` HoC?");return Z}function f(Z,V){var z;const{queryClient:G,ssrState:J}=h();return J&&J!=="mounted"&&((z=G.getQueryCache().find({queryKey:Z}))===null||z===void 0?void 0:z.state.status)==="error"?(0,X.default)({retryOnMount:!1},V):V}function g(Z,V,z){var G,J,oe,le,te;const be=h(),{abortOnUnmount:fe,client:se,ssrState:T,queryClient:$,prefetchQuery:U}=be,ue=en(Z,V,"query"),ye=$.getQueryDefaults(ue),k=V===Mt;typeof window>"u"&&T==="prepass"&&(z==null||(G=z.trpc)===null||G===void 0?void 0:G.ssr)!==!1&&((J=z?.enabled)!==null&&J!==void 0?J:ye?.enabled)!==!1&&!k&&!$.getQueryCache().find({queryKey:ue})&&U(ue,z);const j=f(ue,(0,X.default)((0,X.default)({},ye),z)),P=(oe=(le=z==null||(te=z.trpc)===null||te===void 0?void 0:te.abortOnUnmount)!==null&&le!==void 0?le:void 0)!==null&&oe!==void 0?oe:fe,Q=Mx((0,X.default)((0,X.default)({},j),{},{queryKey:ue,queryFn:k?V:async W=>{const me=(0,X.default)((0,X.default)({},j),{},{trpc:(0,X.default)((0,X.default)({},j?.trpc),P?{signal:W.signal}:{signal:null})}),ce=await se.query(...pt(ue,me));return Ng(ce)?t0(ce,$,ue):ce}}),$);return Q.trpc=_o({path:Z}),Q}function v(Z,V,z){var G,J,oe;const le=h(),te=en(Z,V,"query"),be=V===Mt,fe=(G=(J=z==null||(oe=z.trpc)===null||oe===void 0?void 0:oe.abortOnUnmount)!==null&&J!==void 0?J:void 0)!==null&&G!==void 0?G:le.abortOnUnmount;zx((0,X.default)((0,X.default)({},z),{},{queryKey:te,queryFn:be?V:se=>{const T={trpc:(0,X.default)((0,X.default)({},z?.trpc),fe?{signal:se.signal}:{})};return le.client.query(...pt(te,T))}}))}function y(Z,V,z){var G,J,oe;const le=h(),te=en(Z,V,"query"),be=(G=(J=z==null||(oe=z.trpc)===null||oe===void 0?void 0:oe.abortOnUnmount)!==null&&J!==void 0?J:void 0)!==null&&G!==void 0?G:le.abortOnUnmount,fe=Lx((0,X.default)((0,X.default)({},z),{},{queryKey:te,queryFn:se=>{const T=(0,X.default)((0,X.default)({},z),{},{trpc:(0,X.default)((0,X.default)({},z?.trpc),be?{signal:se.signal}:{signal:null})});return le.client.query(...pt(te,T))}}),le.queryClient);return fe.trpc=_o({path:Z}),[fe.data,fe]}function C(Z,V){const{client:z,queryClient:G}=h(),J=fi(Z),oe=G.defaultMutationOptions(G.getMutationDefaults(J)),le=Nx((0,X.default)((0,X.default)({},V),{},{mutationKey:J,mutationFn:te=>z.mutation(...pt([Z,{input:te}],V)),onSuccess(...te){var be,fe;return s({originalFn:()=>{var T,$,U;return(T=V==null||($=V.onSuccess)===null||$===void 0?void 0:$.call(V,...te))!==null&&T!==void 0?T:oe==null||(U=oe.onSuccess)===null||U===void 0?void 0:U.call(oe,...te)},queryClient:G,meta:(be=(fe=V?.meta)!==null&&fe!==void 0?fe:oe?.meta)!==null&&be!==void 0?be:{}})}}),G);return le.trpc=_o({path:Z}),le}const D={data:void 0,error:null,status:"idle"},N={data:void 0,error:null,status:"connecting"};function A(Z,V,z){var G;const J=(G=z?.enabled)!==null&&G!==void 0?G:V!==Mt,oe=na(en(Z,V,"any")),{client:le}=h(),te=_.useRef(z);_.useEffect(()=>{te.current=z});const[be]=_.useState(new Set([])),fe=_.useCallback(k=>{be.add(k)},[be]),se=_.useRef(null),T=_.useCallback(k=>{const j=U.current,P=U.current=k(j);let Q=!1;for(const W of be)if(j[W]!==P[W]){Q=!0;break}Q&&ye(Mh(P,fe))},[fe,be]),$=_.useCallback(()=>{var k;if((k=se.current)===null||k===void 0||k.unsubscribe(),!J){T(()=>(0,X.default)((0,X.default)({},D),{},{reset:$}));return}T(()=>(0,X.default)((0,X.default)({},N),{},{reset:$}));const j=le.subscription(Z.join("."),V??void 0,{onStarted:()=>{var P,Q;(P=(Q=te.current).onStarted)===null||P===void 0||P.call(Q),T(W=>(0,X.default)((0,X.default)({},W),{},{status:"pending",error:null}))},onData:P=>{var Q,W;(Q=(W=te.current).onData)===null||Q===void 0||Q.call(W,P),T(me=>(0,X.default)((0,X.default)({},me),{},{status:"pending",data:P,error:null}))},onError:P=>{var Q,W;(Q=(W=te.current).onError)===null||Q===void 0||Q.call(W,P),T(me=>(0,X.default)((0,X.default)({},me),{},{status:"error",error:P}))},onConnectionStateChange:P=>{T(Q=>{switch(P.state){case"idle":return(0,X.default)((0,X.default)({},Q),{},{status:P.state,error:null,data:void 0});case"connecting":return(0,X.default)((0,X.default)({},Q),{},{error:P.error,status:P.state});case"pending":return Q}})},onComplete:()=>{var P,Q;(P=(Q=te.current).onComplete)===null||P===void 0||P.call(Q),T(W=>(0,X.default)((0,X.default)({},W),{},{status:"idle",error:null,data:void 0}))}});se.current=j},[le,oe,J,T]);_.useEffect(()=>($(),()=>{var k;(k=se.current)===null||k===void 0||k.unsubscribe()}),[$]);const U=_.useRef(J?(0,X.default)((0,X.default)({},N),{},{reset:$}):(0,X.default)((0,X.default)({},D),{},{reset:$})),[ue,ye]=_.useState(Mh(U.current,fe));return ue}function L(Z,V,z){var G,J,oe,le,te;const{client:be,ssrState:fe,prefetchInfiniteQuery:se,queryClient:T,abortOnUnmount:$}=h(),U=en(Z,V,"infinite"),ue=T.getQueryDefaults(U),ye=V===Mt;typeof window>"u"&&fe==="prepass"&&(z==null||(G=z.trpc)===null||G===void 0?void 0:G.ssr)!==!1&&((J=z?.enabled)!==null&&J!==void 0?J:ue?.enabled)!==!1&&!ye&&!T.getQueryCache().find({queryKey:U})&&se(U,(0,X.default)((0,X.default)({},ue),z));const k=f(U,(0,X.default)((0,X.default)({},ue),z)),j=(oe=z==null||(le=z.trpc)===null||le===void 0?void 0:le.abortOnUnmount)!==null&&oe!==void 0?oe:$,P=Hx((0,X.default)((0,X.default)({},k),{},{initialPageParam:(te=z.initialCursor)!==null&&te!==void 0?te:null,persister:z.persister,queryKey:U,queryFn:ye?V:Q=>{var W;const me=(0,X.default)((0,X.default)({},k),{},{trpc:(0,X.default)((0,X.default)({},k?.trpc),j?{signal:Q.signal}:{signal:null})});return be.query(...pt(U,me,{pageParam:(W=Q.pageParam)!==null&&W!==void 0?W:z.initialCursor,direction:Q.direction}))}}),T);return P.trpc=_o({path:Z}),P}function Y(Z,V,z){var G,J,oe;const le=h(),te=en(Z,V,"infinite"),be=le.queryClient.getQueryDefaults(te),fe=V===Mt,se=f(te,(0,X.default)((0,X.default)({},be),z)),T=(G=z==null||(J=z.trpc)===null||J===void 0?void 0:J.abortOnUnmount)!==null&&G!==void 0?G:le.abortOnUnmount;jx((0,X.default)((0,X.default)({},z),{},{initialPageParam:(oe=z.initialCursor)!==null&&oe!==void 0?oe:null,queryKey:te,queryFn:fe?V:$=>{var U;const ue=(0,X.default)((0,X.default)({},se),{},{trpc:(0,X.default)((0,X.default)({},se?.trpc),T?{signal:$.signal}:{})});return le.client.query(...pt(te,ue,{pageParam:(U=$.pageParam)!==null&&U!==void 0?U:z.initialCursor,direction:$.direction}))}}))}function I(Z,V,z){var G,J,oe;const le=h(),te=en(Z,V,"infinite"),be=le.queryClient.getQueryDefaults(te),fe=f(te,(0,X.default)((0,X.default)({},be),z)),se=(G=z==null||(J=z.trpc)===null||J===void 0?void 0:J.abortOnUnmount)!==null&&G!==void 0?G:le.abortOnUnmount,T=Rx((0,X.default)((0,X.default)({},z),{},{initialPageParam:(oe=z.initialCursor)!==null&&oe!==void 0?oe:null,queryKey:te,queryFn:$=>{var U;const ue=(0,X.default)((0,X.default)({},fe),{},{trpc:(0,X.default)((0,X.default)({},fe?.trpc),se?{signal:$.signal}:{})});return le.client.query(...pt(te,ue,{pageParam:(U=$.pageParam)!==null&&U!==void 0?U:z.initialCursor,direction:$.direction}))}}),le.queryClient);return T.trpc=_o({path:Z}),[T.data,T]}return{Provider:p,createClient:d,useContext:h,useUtils:h,useQuery:g,usePrefetchQuery:v,useSuspenseQuery:y,useQueries:(Z,V)=>{const{ssrState:z,queryClient:G,prefetchQuery:J,client:oe}=h(),le=Ah(oe),te=Z(le);if(typeof window>"u"&&z==="prepass")for(const fe of te){var be;const se=fe;((be=se.trpc)===null||be===void 0?void 0:be.ssr)!==!1&&!G.getQueryCache().find({queryKey:se.queryKey})&&J(se.queryKey,se)}return jg({queries:te.map(fe=>(0,X.default)((0,X.default)({},fe),{},{queryKey:fe.queryKey})),combine:V?.combine},G)},useSuspenseQueries:Z=>{const{queryClient:V,client:z}=h(),G=Ah(z),J=Z(G),oe=Dx({queries:J.map(le=>(0,X.default)((0,X.default)({},le),{},{queryFn:le.queryFn,queryKey:le.queryKey}))},V);return[oe.map(le=>le.data),oe]},useMutation:C,useSubscription:A,useInfiniteQuery:L,usePrefetchInfiniteQuery:Y,useSuspenseInfiniteQuery:I}}function ok(a){const o=K2(a);return $u(l=>l==="useContext"||l==="useUtils"?()=>{const s=a.useUtils();return _.useMemo(()=>W2(s),[s])}:a.hasOwnProperty(l)?a[l]:o[l])}function lk(a){const o=rk();return ok(o)}class ik{constructor(){this.keyToValue=new Map,this.valueToKey=new Map}set(o,l){this.keyToValue.set(o,l),this.valueToKey.set(l,o)}getByKey(o){return this.keyToValue.get(o)}getByValue(o){return this.valueToKey.get(o)}clear(){this.keyToValue.clear(),this.valueToKey.clear()}}class n0{constructor(o){this.generateIdentifier=o,this.kv=new ik}register(o,l){this.kv.getByValue(o)||(l||(l=this.generateIdentifier(o)),this.kv.set(l,o))}clear(){this.kv.clear()}getIdentifier(o){return this.kv.getByValue(o)}getValue(o){return this.kv.getByKey(o)}}class sk extends n0{constructor(){super(o=>o.name),this.classToAllowedProps=new Map}register(o,l){typeof l=="object"?(l.allowProps&&this.classToAllowedProps.set(o,l.allowProps),super.register(o,l.identifier)):super.register(o,l)}getAllowedProps(o){return this.classToAllowedProps.get(o)}}function ck(a){if("values"in Object)return Object.values(a);const o=[];for(const l in a)a.hasOwnProperty(l)&&o.push(a[l]);return o}function uk(a,o){const l=ck(a);if("find"in l)return l.find(o);const s=l;for(let u=0;u<s.length;u++){const d=s[u];if(o(d))return d}}function kr(a,o){Object.entries(a).forEach(([l,s])=>o(s,l))}function hi(a,o){return a.indexOf(o)!==-1}function Lh(a,o){for(let l=0;l<a.length;l++){const s=a[l];if(o(s))return s}}class dk{constructor(){this.transfomers={}}register(o){this.transfomers[o.name]=o}findApplicable(o){return uk(this.transfomers,l=>l.isApplicable(o))}findByName(o){return this.transfomers[o]}}const pk=a=>Object.prototype.toString.call(a).slice(8,-1),a0=a=>typeof a>"u",fk=a=>a===null,Ao=a=>typeof a!="object"||a===null||a===Object.prototype?!1:Object.getPrototypeOf(a)===null?!0:Object.getPrototypeOf(a)===Object.prototype,ku=a=>Ao(a)&&Object.keys(a).length===0,aa=a=>Array.isArray(a),mk=a=>typeof a=="string",hk=a=>typeof a=="number"&&!isNaN(a),gk=a=>typeof a=="boolean",bk=a=>a instanceof RegExp,Mo=a=>a instanceof Map,Lo=a=>a instanceof Set,r0=a=>pk(a)==="Symbol",vk=a=>a instanceof Date&&!isNaN(a.valueOf()),o0=a=>a instanceof Error,Rh=a=>typeof a=="number"&&isNaN(a),yk=a=>gk(a)||fk(a)||a0(a)||hk(a)||mk(a)||r0(a),xk=a=>typeof a=="bigint",kk=a=>a===1/0||a===-1/0,wk=a=>ArrayBuffer.isView(a)&&!(a instanceof DataView),_k=a=>a instanceof URL,wu=a=>a.replace(/\\/g,"\\\\").replace(/\./g,"\\."),iu=a=>a.map(String).map(wu).join("."),Eo=(a,o)=>{const l=[];let s="";for(let d=0;d<a.length;d++){let p=a.charAt(d);if(!o&&p==="\\"){const g=a.charAt(d+1);if(g==="\\"){s+="\\",d++;continue}else if(g!==".")throw Error("invalid path")}if(p==="\\"&&a.charAt(d+1)==="."){s+=".",d++;continue}if(p==="."){l.push(s),s="";continue}s+=p}const u=s;return l.push(u),l};function Jt(a,o,l,s){return{isApplicable:a,annotation:o,transform:l,untransform:s}}const l0=[Jt(a0,"undefined",()=>null,()=>{}),Jt(xk,"bigint",a=>a.toString(),a=>typeof BigInt<"u"?BigInt(a):(console.error("Please add a BigInt polyfill."),a)),Jt(vk,"Date",a=>a.toISOString(),a=>new Date(a)),Jt(o0,"Error",(a,o)=>{const l={name:a.name,message:a.message};return"cause"in a&&(l.cause=a.cause),o.allowedErrorProps.forEach(s=>{l[s]=a[s]}),l},(a,o)=>{const l=new Error(a.message,{cause:a.cause});return l.name=a.name,l.stack=a.stack,o.allowedErrorProps.forEach(s=>{l[s]=a[s]}),l}),Jt(bk,"regexp",a=>""+a,a=>{const o=a.slice(1,a.lastIndexOf("/")),l=a.slice(a.lastIndexOf("/")+1);return new RegExp(o,l)}),Jt(Lo,"set",a=>[...a.values()],a=>new Set(a)),Jt(Mo,"map",a=>[...a.entries()],a=>new Map(a)),Jt(a=>Rh(a)||kk(a),"number",a=>Rh(a)?"NaN":a>0?"Infinity":"-Infinity",Number),Jt(a=>a===0&&1/a===-1/0,"number",()=>"-0",Number),Jt(_k,"URL",a=>a.toString(),a=>new URL(a))];function Ai(a,o,l,s){return{isApplicable:a,annotation:o,transform:l,untransform:s}}const i0=Ai((a,o)=>r0(a)?!!o.symbolRegistry.getIdentifier(a):!1,(a,o)=>["symbol",o.symbolRegistry.getIdentifier(a)],a=>a.description,(a,o,l)=>{const s=l.symbolRegistry.getValue(o[1]);if(!s)throw new Error("Trying to deserialize unknown symbol");return s}),Sk=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,Uint8ClampedArray].reduce((a,o)=>(a[o.name]=o,a),{}),s0=Ai(wk,a=>["typed-array",a.constructor.name],a=>[...a],(a,o)=>{const l=Sk[o[1]];if(!l)throw new Error("Trying to deserialize unknown typed array");return new l(a)});function c0(a,o){return a?.constructor?!!o.classRegistry.getIdentifier(a.constructor):!1}const u0=Ai(c0,(a,o)=>["class",o.classRegistry.getIdentifier(a.constructor)],(a,o)=>{const l=o.classRegistry.getAllowedProps(a.constructor);if(!l)return{...a};const s={};return l.forEach(u=>{s[u]=a[u]}),s},(a,o,l)=>{const s=l.classRegistry.getValue(o[1]);if(!s)throw new Error(`Trying to deserialize unknown class '${o[1]}' - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564`);return Object.assign(Object.create(s.prototype),a)}),d0=Ai((a,o)=>!!o.customTransformerRegistry.findApplicable(a),(a,o)=>["custom",o.customTransformerRegistry.findApplicable(a).name],(a,o)=>o.customTransformerRegistry.findApplicable(a).serialize(a),(a,o,l)=>{const s=l.customTransformerRegistry.findByName(o[1]);if(!s)throw new Error("Trying to deserialize unknown custom value");return s.deserialize(a)}),Ck=[u0,i0,d0,s0],Dh=(a,o)=>{const l=Lh(Ck,u=>u.isApplicable(a,o));if(l)return{value:l.transform(a,o),type:l.annotation(a,o)};const s=Lh(l0,u=>u.isApplicable(a,o));if(s)return{value:s.transform(a,o),type:s.annotation}},p0={};l0.forEach(a=>{p0[a.annotation]=a});const Tk=(a,o,l)=>{if(aa(o))switch(o[0]){case"symbol":return i0.untransform(a,o,l);case"class":return u0.untransform(a,o,l);case"custom":return d0.untransform(a,o,l);case"typed-array":return s0.untransform(a,o,l);default:throw new Error("Unknown transformation: "+o)}else{const s=p0[o];if(!s)throw new Error("Unknown transformation: "+o);return s.untransform(a,l)}},br=(a,o)=>{if(o>a.size)throw new Error("index out of bounds");const l=a.keys();for(;o>0;)l.next(),o--;return l.next().value};function f0(a){if(hi(a,"__proto__"))throw new Error("__proto__ is not allowed as a property");if(hi(a,"prototype"))throw new Error("prototype is not allowed as a property");if(hi(a,"constructor"))throw new Error("constructor is not allowed as a property")}const Ok=(a,o)=>{f0(o);for(let l=0;l<o.length;l++){const s=o[l];if(Lo(a))a=br(a,+s);else if(Mo(a)){const u=+s,d=+o[++l]==0?"key":"value",p=br(a,u);switch(d){case"key":a=p;break;case"value":a=a.get(p);break}}else a=a[s]}return a},_u=(a,o,l)=>{if(f0(o),o.length===0)return l(a);let s=a;for(let d=0;d<o.length-1;d++){const p=o[d];if(aa(s)){const h=+p;s=s[h]}else if(Ao(s))s=s[p];else if(Lo(s)){const h=+p;s=br(s,h)}else if(Mo(s)){if(d===o.length-2)break;const f=+p,g=+o[++d]==0?"key":"value",v=br(s,f);switch(g){case"key":s=v;break;case"value":s=s.get(v);break}}}const u=o[o.length-1];if(aa(s)?s[+u]=l(s[+u]):Ao(s)&&(s[u]=l(s[u])),Lo(s)){const d=br(s,+u),p=l(d);d!==p&&(s.delete(d),s.add(p))}if(Mo(s)){const d=+o[o.length-2],p=br(s,d);switch(+u==0?"key":"value"){case"key":{const f=l(p);s.set(f,s.get(p)),f!==p&&s.delete(p);break}case"value":{s.set(p,l(s.get(p)));break}}}return a},m0=a=>a<1;function Su(a,o,l,s=[]){if(!a)return;const u=m0(l);if(!aa(a)){kr(a,(h,f)=>Su(h,o,l,[...s,...Eo(f,u)]));return}const[d,p]=a;p&&kr(p,(h,f)=>{Su(h,o,l,[...s,...Eo(f,u)])}),o(d,s)}function Ek(a,o,l,s){return Su(o,(u,d)=>{a=_u(a,d,p=>Tk(p,u,s))},l),a}function Ak(a,o,l){const s=m0(l);function u(d,p){const h=Ok(a,Eo(p,s));d.map(f=>Eo(f,s)).forEach(f=>{a=_u(a,f,()=>h)})}if(aa(o)){const[d,p]=o;d.forEach(h=>{a=_u(a,Eo(h,s),()=>a)}),p&&kr(p,u)}else kr(o,u);return a}const Mk=(a,o)=>Ao(a)||aa(a)||Mo(a)||Lo(a)||o0(a)||c0(a,o);function Lk(a,o,l){const s=l.get(a);s?s.push(o):l.set(a,[o])}function Rk(a,o){const l={};let s;return a.forEach(u=>{if(u.length<=1)return;o||(u=u.map(h=>h.map(String)).sort((h,f)=>h.length-f.length));const[d,...p]=u;d.length===0?s=p.map(iu):l[iu(d)]=p.map(iu)}),s?ku(l)?[s]:[s,l]:ku(l)?void 0:l}const h0=(a,o,l,s,u=[],d=[],p=new Map)=>{const h=yk(a);if(!h){Lk(a,u,o);const D=p.get(a);if(D)return s?{transformedValue:null}:D}if(!Mk(a,l)){const D=Dh(a,l),N=D?{transformedValue:D.value,annotations:[D.type]}:{transformedValue:a};return h||p.set(a,N),N}if(hi(d,a))return{transformedValue:null};const f=Dh(a,l),g=f?.value??a,v=aa(g)?[]:{},y={};kr(g,(D,N)=>{if(N==="__proto__"||N==="constructor"||N==="prototype")throw new Error(`Detected property ${N}. This is a prototype pollution risk, please remove it from your object.`);const A=h0(D,o,l,s,[...u,N],[...d,a],p);v[N]=A.transformedValue,aa(A.annotations)?y[wu(N)]=A.annotations:Ao(A.annotations)&&kr(A.annotations,(L,Y)=>{y[wu(N)+"."+Y]=L})});const C=ku(y)?{transformedValue:v,annotations:f?[f.type]:void 0}:{transformedValue:v,annotations:f?[f.type,y]:y};return h||p.set(a,C),C};function zh(a,o,l,s){if(Object.prototype.propertyIsEnumerable.call(s,o)){a[o]=l;return}Object.defineProperty(a,o,{value:l,enumerable:!1,writable:!0,configurable:!0})}function Dk(a){return Object.getPrototypeOf(a)===Object.prototype&&Object.prototype.toString.call(a)==="[object Object]"}function So(a,o,l,s){if(typeof a!="object"||a===null)return a;const u=Array.isArray(a);if(!u&&!Dk(a))return a;const d=o.get(a);if(d!==void 0)return d;const p=u?new Array(a.length):{};return o.set(a,p),l.push(a),s.push(p),p}function zk(a,o={}){if(typeof a!="object"||a===null)return a;const l=new Map,s=[],u=[],d=So(a,l,s,u),p=Array.isArray(o.props)?o.props:void 0,h=o.nonenumerable===!0;for(;s.length;){const f=s.pop(),g=u.pop();if(Array.isArray(f)){for(let v=0;v<f.length;v++)v in f&&(g[v]=So(f[v],l,s,u));continue}if(h)for(const v of Object.getOwnPropertyNames(f)){if(v==="__proto__"||p&&!p.includes(v))continue;const y=So(f[v],l,s,u);zh(g,v,y,f)}else for(const v in f)Object.prototype.hasOwnProperty.call(f,v)&&v!=="__proto__"&&(p&&!p.includes(v)||(g[v]=So(f[v],l,s,u)));for(const v of Object.getOwnPropertySymbols(f)){if(p&&!p.includes(v)||!h&&!Object.prototype.propertyIsEnumerable.call(f,v))continue;const y=So(f[v],l,s,u);zh(g,v,y,f)}}return d}class Te{constructor({dedupe:o=!1}={}){this.classRegistry=new sk,this.symbolRegistry=new n0(l=>l.description??""),this.customTransformerRegistry=new dk,this.allowedErrorProps=[],this.dedupe=o}serialize(o){const l=new Map,s=h0(o,l,this,this.dedupe),u={json:s.transformedValue};s.annotations&&(u.meta={...u.meta,values:s.annotations});const d=Rk(l,this.dedupe);return d&&(u.meta={...u.meta,referentialEqualities:d}),u.meta&&(u.meta.v=1),u}deserialize(o,l){const{json:s,meta:u}=o;let d=l?.inPlace?s:zk(s);return u?.values&&(d=Ek(d,u.values,u.v??0,this)),u?.referentialEqualities&&(d=Ak(d,u.referentialEqualities,u.v??0)),d}stringify(o){return JSON.stringify(this.serialize(o))}parse(o){return this.deserialize(JSON.parse(o),{inPlace:!0})}registerClass(o,l){this.classRegistry.register(o,l)}registerSymbol(o,l){this.symbolRegistry.register(o,l)}registerCustom(o,l){this.customTransformerRegistry.register({name:l,...o})}allowErrorProps(...o){this.allowedErrorProps.push(...o)}}Te.defaultInstance=new Te;Te.serialize=Te.defaultInstance.serialize.bind(Te.defaultInstance);Te.deserialize=Te.defaultInstance.deserialize.bind(Te.defaultInstance);Te.stringify=Te.defaultInstance.stringify.bind(Te.defaultInstance);Te.parse=Te.defaultInstance.parse.bind(Te.defaultInstance);Te.registerClass=Te.defaultInstance.registerClass.bind(Te.defaultInstance);Te.registerSymbol=Te.defaultInstance.registerSymbol.bind(Te.defaultInstance);Te.registerCustom=Te.defaultInstance.registerCustom.bind(Te.defaultInstance);Te.allowErrorProps=Te.defaultInstance.allowErrorProps.bind(Te.defaultInstance);Te.serialize;Te.deserialize;Te.stringify;Te.parse;Te.registerClass;Te.registerCustom;Te.registerSymbol;Te.allowErrorProps;const _n=lk(),jh=new Ox,jk=_n.createClient({links:[z2({url:"/api/trpc",transformer:Te,fetch(a,o){return globalThis.fetch(a,{...o??{},credentials:"include"})}})]});function Nk({children:a}){return K.jsx(_n.Provider,{"code-path":"src/providers/trpc.tsx:28:5",client:jk,queryClient:jh,children:K.jsx(ex,{"code-path":"src/providers/trpc.tsx:29:7",client:jh,children:a})})}const Hk=`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>DS4CC — ship-ready agent software, distributed plainly</title>
<meta name="description" content="DS4CC is the distribution and reading home for refined agent software: raw local installs first, curated marketplace packages, visual tools, and operator notes." />
<meta property="og:title" content="DS4CC — ship-ready agent software" />
<meta property="og:description" content="Raw local installs first. Curated marketplace packages, visual tools, and operator notes when they are ready to ship." />
<meta property="og:url" content="https://ds4cc.com/" />
<meta property="og:type" content="website" />
<meta name="twitter:card" content="summary" />
<meta name="theme-color" content="#050605" />
<link rel="icon" type="image/svg+xml" href="burnerchrome/favicon.svg" />
<script>
document.documentElement.classList.add('js');
// rinnegan reading mode is always off on load; it is never persisted.
try { localStorage.removeItem('ds4cc-rinnegan'); } catch (_) {}
<\/script>
<style>
@font-face {
  font-family: "JetBrainsMonoNL";
  src: url("assets/fonts/JetBrainsMonoNLNerdFontMono-Regular.woff2") format("woff2");
  font-weight: 400; font-style: normal; font-display: swap;
}
@font-face {
  font-family: "JetBrainsMonoNL";
  src: url("assets/fonts/JetBrainsMonoNLNerdFontMono-Medium.woff2") format("woff2");
  font-weight: 500; font-style: normal; font-display: swap;
}
@font-face {
  font-family: "JetBrainsMonoNL";
  src: url("assets/fonts/JetBrainsMonoNLNerdFontMono-SemiBold.woff2") format("woff2");
  font-weight: 600; font-style: normal; font-display: swap;
}
@font-face {
  font-family: "JetBrainsMonoNL";
  src: url("assets/fonts/JetBrainsMonoNLNerdFontMono-Bold.woff2") format("woff2");
  font-weight: 700; font-style: normal; font-display: swap;
}
@font-face {
  font-family: "JetBrainsMonoNL";
  src: url("assets/fonts/JetBrainsMonoNLNerdFontMono-ExtraBold.woff2") format("woff2");
  font-weight: 800; font-style: normal; font-display: swap;
}

:root {
  --bg: #050605;
  --panel: #0d100d;
  --panel2: #121612;
  --fg: #e8f0e6;
  --body: #c5d0c3;
  --muted: #7a8a78;
  --green: #51ff00;
  --green-dim: #38b000;
  --amber: #ffb020;
  --red: #ff3b30;
  --cyan: #3de0ff;
  --border: #1e281e;
  --border2: #2a332a;
  --rule: #1a201a;
  --code: #b8f5a0;
  --font: "JetBrainsMonoNL", "JetBrainsMono Nerd Font", "JetBrains Mono", ui-monospace, Menlo, Consolas, monospace;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
html, body {
  margin: 0; padding: 0;
  background: var(--bg);
  color: var(--fg);
  font-family: var(--font);
  min-height: 100%;
  -webkit-font-smoothing: antialiased;
}
::selection { background: var(--green); color: #000; }
a { color: var(--green); text-decoration: none; }
a:hover { text-decoration: underline; }
code { color: var(--code); }
:focus-visible { outline: 2px solid var(--green); outline-offset: 2px; }
.skip {
  position: fixed; top: 8px; left: 8px; z-index: 100;
  transform: translateY(-160%); padding: 8px 12px;
  background: var(--green); color: #000; border-radius: 4px;
}
.skip:focus { transform: none; }

.page { max-width: 1120px; margin: 0 auto; padding: 0 16px 90px; }

/* ---------- nav ---------- */
nav {
  position: sticky; top: 0; z-index: 50;
  background: color-mix(in srgb, var(--bg) 92%, transparent);
  border-bottom: 1px solid var(--rule);
  backdrop-filter: blur(10px);
}
.nav-inner {
  max-width: 1120px; margin: 0 auto; padding: 10px 16px;
  display: flex; align-items: center; gap: 18px; flex-wrap: wrap;
}
.brand { font-weight: 700; letter-spacing: 0.06em; font-size: 0.95rem; color: var(--fg); text-decoration: none; }
.brand:hover { text-decoration: none; }
.brand b { color: var(--green); text-shadow: 0 0 12px rgba(81,255,0,0.35); }
.brand span { color: var(--muted); font-weight: 400; }
.nav-links { display: flex; gap: 14px; flex-wrap: wrap; margin-left: auto; align-items: center; }
.nav-links a { color: var(--muted); font-size: 0.8rem; letter-spacing: 0.04em; }
.nav-links a:hover { color: var(--green); text-decoration: none; }
.nav-cta {
  background: #000; color: var(--green); border: 1px solid var(--green);
  padding: 5px 10px; font-size: 0.78rem; border-radius: 4px;
}
.nav-cta:hover { background: #51ff0022; text-decoration: none; }
.rinnegan-btn {
  display: inline-flex; align-items: center; gap: 8px;
  background: #000; color: var(--muted); border: 1px solid var(--border2);
  padding: 5px 10px; font-family: inherit; font-size: 0.74rem;
  letter-spacing: 0.04em; border-radius: 4px; cursor: pointer;
  margin-left: 4px; flex: none;
}
.rinnegan-btn:hover { color: #c9a0ff; border-color: #7b4dff; text-decoration: none; }
.rinnegan-btn .eye {
  width: 12px; height: 12px; border-radius: 50%;
  border: 1.5px solid currentColor; position: relative; flex: none;
  box-shadow: inset 0 0 0 2px transparent;
  background:
    radial-gradient(circle at 50% 50%, currentColor 0 1.4px, transparent 1.5px),
    radial-gradient(circle at 50% 50%, transparent 3px, currentColor 3.2px 3.8px, transparent 4px),
    radial-gradient(circle at 50% 50%, transparent 5.2px, currentColor 5.4px 6px, transparent 6.2px);
}
html.rinnegan .rinnegan-btn {
  color: #e8d6ff; border-color: #9b6dff;
  box-shadow: 0 0 14px rgba(123, 77, 255, 0.28);
}
html.rinnegan .rinnegan-btn .eye { color: #c9a0ff; }
@media (max-width: 720px) {
  .rinnegan-btn { margin-left: auto; }
  .nav-toggle { margin-left: 8px; }
}
.nav-toggle {
  display: none; margin-left: auto;
  background: #000; color: var(--muted); border: 1px solid var(--border2);
  border-radius: 4px; padding: 6px 10px; font-family: inherit; font-size: 0.78rem;
}
.nav-toggle:hover { color: var(--green); border-color: var(--green); }
@media (max-width: 720px) {
  .nav-toggle { display: block; }
  .nav-links {
    display: none; width: 100%; flex-direction: column; align-items: flex-start;
    gap: 8px; padding: 8px 0 4px; border-top: 1px solid var(--rule); margin-top: 6px;
  }
  .nav-links.open { display: flex; }
  .nav-links a { font-size: 0.9rem; padding: 4px 0; }
  .nav-inner { flex-wrap: wrap; }
}

/* ---------- shared ---------- */
.badge {
  display: inline-block;
  background: var(--green); color: #000;
  font-weight: 700; font-size: 0.68rem;
  padding: 3px 8px; margin: 0 6px 6px 0;
  letter-spacing: 0.04em;
}
.badge.dark { background: #000; color: var(--green); border: 1px solid var(--green); }
.badge.cyan { background: #000; color: var(--cyan); border: 1px solid var(--cyan); }
section {
  margin: 34px 0; border-top: 1px solid var(--rule);
  padding-top: 22px; scroll-margin-top: 70px;
}
h2 {
  font-size: 1.05rem; margin: 0 0 6px; color: var(--green);
  letter-spacing: 0.03em; text-shadow: 0 0 18px rgba(81,255,0,0.18);
}
h2 .idx { color: var(--muted); font-weight: 400; margin-right: 8px; }
.sub { color: var(--muted); font-size: 0.88rem; margin: 0 0 16px; line-height: 1.55; }
p, li { line-height: 1.55; font-size: 0.92rem; color: var(--body); }
.callout {
  border-left: 3px solid var(--green); background: #0d140d;
  padding: 12px 14px; margin: 14px 0;
}
.callout.amber { border-left-color: var(--amber); background: #14100a; }
.callout.red { border-left-color: var(--red); background: #140d0d; }
.panel {
  background: var(--panel); border: 1px solid var(--border); border-radius: 8px;
}
pre {
  background: #080a08; border: 1px solid var(--border); border-radius: 6px;
  padding: 12px 14px; overflow-x: auto; font-size: 0.82rem; line-height: 1.6;
  color: var(--body); margin: 10px 0; font-family: var(--font);
}
pre .c { color: var(--muted); }
pre .p { color: var(--cyan); }
pre .g { color: var(--green); }
table.spec { width: 100%; border-collapse: collapse; font-size: 0.85rem; }
table.spec th, table.spec td {
  text-align: left; padding: 8px 10px; border-bottom: 1px solid var(--rule); vertical-align: top;
}
table.spec th { color: var(--muted); font-weight: 500; width: 30%; }
.btn {
  display: inline-block; background: #000; color: var(--green);
  border: 1px solid var(--green); border-radius: 4px;
  padding: 8px 14px; font-family: inherit; font-size: 0.82rem; cursor: pointer;
  letter-spacing: 0.03em;
}
.btn:hover { background: #51ff0022; text-decoration: none; }
.btn:active { background: var(--green); color: #000; }
.btn.solid { background: var(--green); color: #000; font-weight: 700; }
.btn.solid:hover { background: #6bff2e; }
.btn.small { padding: 4px 9px; font-size: 0.72rem; }
.chip {
  display: inline-flex; align-items: center; gap: 8px;
  background: rgba(0,0,0,.55); border: 1px solid var(--border2); border-radius: 4px;
  padding: 6px 10px; font-size: 0.74rem; letter-spacing: 0.06em; text-transform: uppercase;
  color: var(--body);
}
.chip .dot {
  width: 8px; height: 8px; border-radius: 50%;
  background: var(--green); box-shadow: 0 0 8px var(--green);
}
.chip.amber .dot { background: var(--amber); box-shadow: 0 0 8px var(--amber); }

/* ---------- hero ---------- */
header.hero { padding: 34px 0 8px; }
.ascii {
  font-size: clamp(6px, 1.55vw, 13px);
  line-height: 1.15;
  color: var(--green);
  text-shadow: 0 0 14px rgba(81,255,0,0.35);
  background: none; border: none; padding: 0; margin: 14px 0 6px;
  overflow: visible; white-space: pre;
  font-family: var(--font);
}
.hero h1 {
  font-size: clamp(1.25rem, 3.2vw, 1.9rem);
  font-weight: 600; letter-spacing: 0.02em; margin: 10px 0 8px;
}
.hero h1 em { color: var(--green); font-style: normal; text-shadow: 0 0 16px rgba(81,255,0,0.25); }
.tagline { color: var(--muted); font-size: 0.95rem; margin: 0 0 18px; max-width: 760px; line-height: 1.55; }
.hero-row { display: flex; gap: 10px; flex-wrap: wrap; align-items: center; margin: 14px 0 8px; }
.oneliner {
  display: flex; align-items: stretch; gap: 0; max-width: 100%;
  border: 1px solid var(--border2); border-radius: 6px; overflow: hidden;
  background: #080a08;
}
.oneliner code {
  padding: 10px 14px; font-size: 0.82rem; color: var(--code);
  overflow-x: auto; white-space: nowrap; font-family: var(--font);
}
.oneliner .p { color: var(--cyan); }
.copy-btn {
  background: #000; color: var(--green); border: none; border-left: 1px solid var(--border2);
  font-family: inherit; font-size: 0.72rem; padding: 0 14px; cursor: pointer; letter-spacing: 0.05em;
  white-space: nowrap;
}
.copy-btn:hover { background: #51ff0022; }
.copy-btn.done { background: var(--green); color: #000; font-weight: 700; }

/* ---------- terminal device ---------- */
.term-wrap { display: flex; flex-direction: column; align-items: center; gap: 12px; }
.term {
  width: min(100%, 780px);
  background: #0a0d0a; border: 2px solid var(--border2); border-radius: 10px;
  overflow: hidden; box-shadow: 0 0 0 6px #070807, 0 24px 60px rgba(0,0,0,.55), 0 0 40px rgba(81,255,0,0.06);
}
.term-bar {
  display: flex; align-items: center; gap: 8px;
  background: var(--panel2); border-bottom: 1px solid var(--border2);
  padding: 8px 12px; font-size: 0.72rem; color: var(--muted); letter-spacing: 0.05em;
}
.term-bar .sq { width: 9px; height: 9px; }
.term-bar .sq.r { background: var(--red); }
.term-bar .sq.a { background: var(--amber); }
.term-bar .sq.g { background: var(--green); box-shadow: 0 0 6px var(--green); }
.term-bar .title { margin-left: 8px; }
.term-body {
  padding: 16px; min-height: 300px; font-size: 0.82rem; line-height: 1.7;
  color: var(--body); white-space: pre-wrap; word-break: break-word;
  font-family: var(--font);
}
.term-body .cmd { color: var(--fg); }
.term-body .cmd .ps1 { color: var(--cyan); }
.term-body .out { color: var(--muted); }
.term-body .ok { color: var(--green); }
.term-body .warn { color: var(--amber); }
.cursor {
  display: inline-block; width: 8px; height: 14px; background: var(--green);
  vertical-align: -2px; animation: blink 1s steps(1) infinite;
  box-shadow: 0 0 8px var(--green);
}
@keyframes blink { 50% { opacity: 0; } }
.host-tabs { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; }
.host-tab {
  background: #000; color: var(--green); border: 1px solid var(--green); border-radius: 4px;
  padding: 6px 12px; font-family: inherit; font-size: 0.78rem; cursor: pointer; letter-spacing: 0.03em;
}
.host-tab:hover { background: #51ff0022; }
.host-tab.active { background: var(--green); color: #000; font-weight: 700; box-shadow: 0 0 14px rgba(81,255,0,0.35); }
.term-note { font-size: 0.74rem; color: var(--muted); text-align: center; margin: 0; }

/* ---------- plugin grid ---------- */
.grid-tools { display: flex; gap: 10px; align-items: center; flex-wrap: wrap; margin-bottom: 14px; }
.filter {
  flex: 1; min-width: 220px;
  background: #080a08; border: 1px solid var(--border2); border-radius: 6px;
  color: var(--fg); font-family: inherit; font-size: 0.85rem; padding: 9px 12px;
}
.filter::placeholder { color: var(--muted); }
.filter:focus { outline: none; border-color: var(--green); box-shadow: 0 0 0 1px rgba(81,255,0,0.25); }
.count { color: var(--muted); font-size: 0.78rem; letter-spacing: 0.05em; }
.cat-chips {
  display: flex; flex-wrap: wrap; gap: 6px; margin: 0 0 14px;
}
.cat-chip {
  background: #000; color: var(--muted); border: 1px solid var(--border2);
  border-radius: 999px; padding: 4px 10px; font-family: inherit; font-size: 0.72rem;
  letter-spacing: 0.04em; text-transform: lowercase; cursor: pointer;
}
.cat-chip:hover { color: var(--green); border-color: var(--green); }
.cat-chip.active {
  background: var(--green); color: #000; border-color: var(--green); font-weight: 700;
  box-shadow: 0 0 10px rgba(81,255,0,0.25);
}
.plugins { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; }
@media (max-width: 940px) { .plugins { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@media (max-width: 620px) { .plugins { grid-template-columns: 1fr; } }
.plug {
  background: var(--panel); border: 1px solid var(--border); border-left: 3px solid var(--border2);
  border-radius: 6px; padding: 12px 14px; display: flex; flex-direction: column; gap: 8px;
  min-width: 0;
  transition: border-color 160ms linear, transform 160ms linear, box-shadow 160ms linear;
}
.plug:hover {
  border-left-color: var(--green); transform: translateY(-2px);
  box-shadow: 0 0 20px rgba(81,255,0,0.08);
}
.plug-head { display: flex; align-items: baseline; gap: 8px; flex-wrap: wrap; }
.plug-name { color: var(--green); font-weight: 700; font-size: 0.92rem; letter-spacing: 0.02em; }
.plug-ver {
  color: var(--muted); font-size: 0.68rem; border: 1px solid var(--border2);
  padding: 1px 6px; border-radius: 3px;
}
.plug-cat {
  margin-left: auto; color: var(--muted); font-size: 0.68rem;
  text-transform: uppercase; letter-spacing: 0.08em;
}
.plug-desc { font-size: 0.82rem; color: var(--body); line-height: 1.5; margin: 0; flex: 1; }
.plug-cmd {
  font-size: 0.72rem; color: var(--code); background: #080a08;
  border: 1px solid var(--border); border-radius: 4px; padding: 6px 8px;
  overflow-x: auto; white-space: nowrap; font-family: var(--font);
}
.plug-foot { display: flex; gap: 8px; align-items: center; flex-wrap: wrap; }
.plug-src { margin-left: auto; font-size: 0.74rem; color: var(--muted); }
.plug-src:hover { color: var(--green); }

/* ---------- install panels ---------- */
.hosts { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 14px; }
@media (max-width: 860px) { .hosts { grid-template-columns: 1fr; } }
.host {
  min-width: 0; background: var(--panel); border: 1px solid var(--border); border-radius: 8px; padding: 14px 16px;
}
.host h3 {
  margin: 0 0 4px; font-size: 0.95rem; color: var(--fg);
  display: flex; align-items: center; gap: 10px; flex-wrap: wrap;
}
.host h3 .tag {
  font-size: 0.66rem; color: var(--cyan); border: 1px solid var(--cyan);
  padding: 1px 6px; border-radius: 3px; letter-spacing: 0.06em;
}
.host .note { font-size: 0.78rem; color: var(--muted); margin: 6px 0 0; line-height: 1.55; }
.host .note code { overflow-wrap: anywhere; word-break: break-word; }
.host pre { position: relative; }
.host .copy-btn {
  position: absolute; top: 8px; right: 8px; padding: 4px 10px;
  border: 1px solid var(--border2); border-radius: 4px;
}

/* ---------- app / validator ---------- */
.grid-2 { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; }
.grid-2 > * { min-width: 0; }
@media (max-width: 860px) {
  .grid-2 { grid-template-columns: minmax(0, 1fr); }
  .grid-2[style*="1fr 1fr 1fr"] { grid-template-columns: minmax(0, 1fr) !important; }
}
.kv { display: flex; flex-wrap: wrap; gap: 8px; margin: 10px 0; }
.ok-chip {
  font-size: 0.72rem; color: var(--green); border: 1px solid var(--green);
  border-radius: 3px; padding: 3px 8px; letter-spacing: 0.04em; background: #000;
}
ol.gate { margin: 8px 0; padding-left: 22px; }
ol.gate li { margin: 6px 0; }
ol.gate li b { color: var(--fg); }

/* ---------- footer ---------- */
footer {
  margin-top: 44px; color: var(--muted); font-size: 0.78rem;
  border-top: 1px solid var(--rule); padding-top: 16px; line-height: 1.8;
}
footer .cols { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; margin-bottom: 12px; }
@media (max-width: 900px) { footer .cols { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 520px) { footer .cols { grid-template-columns: 1fr; } }
footer b { color: var(--body); display: block; margin-bottom: 4px; font-size: 0.8rem; }

/* ---------- reveal ---------- */
.js .reveal { opacity: 0; transform: translateY(12px); transition: opacity 420ms ease, transform 420ms ease; }
.js .reveal.in { opacity: 1; transform: none; }
/* ---------- rinnegan reading mode ---------- */
html.rinnegan {
  --bg: #0b0910;
  --panel: #14111a;
  --panel2: #1a1622;
  --fg: #f2eef8;
  --body: #d8d0e4;
  --muted: #9a90ab;
  --green: #c9a0ff;
  --green-dim: #9b6dff;
  --cyan: #b8a0ff;
  --border: #2a2436;
  --border2: #3a3148;
  --rule: #221c2c;
  --code: #e4d0ff;
}
html.rinnegan body {
  background:
    radial-gradient(circle at 82% 12%, rgba(155, 109, 255, 0.14), transparent 28%),
    radial-gradient(circle at 18% 78%, rgba(90, 40, 180, 0.12), transparent 34%),
    var(--bg);
}
html.rinnegan .page {
  max-width: 44rem;
  padding-bottom: 120px;
}
html.rinnegan p,
html.rinnegan li,
html.rinnegan .sub,
html.rinnegan .note {
  font-size: 1.02rem;
  line-height: 1.75;
  color: var(--body);
}
html.rinnegan h2 {
  letter-spacing: 0.01em;
  text-shadow: none;
  margin-bottom: 10px;
}
html.rinnegan .brand b,
html.rinnegan .badge,
html.rinnegan .btn.solid {
  text-shadow: none;
  box-shadow: none;
}
html.rinnegan .ascii,
html.rinnegan .hero-chips,
html.rinnegan #demo,
html.rinnegan #install,
html.rinnegan #app,
html.rinnegan .term-wrap,
html.rinnegan nav a[href="#demo"],
html.rinnegan nav a[href="#install"],
html.rinnegan nav a[href="#app"],
html.rinnegan .badge-count,
html.rinnegan .few-good-clis,
html.rinnegan #plugins h2.catalog-h2 {
  display: none !important;
}
html:not(.rinnegan) [data-rinnegan-only] {
  display: none !important;
}
html.rinnegan header.hero {
  padding-top: 28px;
}
html.rinnegan .badge {
  background: #000;
  color: #c9a0ff;
  border: 1px solid #7b4dff;
}
html.rinnegan .badge.dark,
html.rinnegan .badge.cyan {
  color: #e8d6ff;
  border-color: #9b6dff;
}
html.rinnegan nav {
  border-bottom-color: rgba(155, 109, 255, 0.25);
}
html.rinnegan ::selection {
  background: #9b6dff;
  color: #fff;
}

@media (prefers-reduced-motion: reduce) {
  .js .reveal { opacity: 1; transform: none; transition: none; }
  html { scroll-behavior: auto; }
  .cursor { animation: none; }
}
</style>
</head>
<body>
<a class="skip" href="#top">Skip to content</a>
<nav>
  <div class="nav-inner">
    <a class="brand" href="#top"><b>DS4CC</b> <span>// marketplace</span></a>
    <button type="button" class="rinnegan-btn" id="rinneganBtn" aria-pressed="false" title="Toggle reading mode">
      <span class="eye" aria-hidden="true"></span>
      <span class="rinnegan-label">rinnegan [off]</span>
    </button>
    <button type="button" class="nav-toggle" id="navToggle" aria-label="Toggle navigation" aria-expanded="false">menu</button>
    <div class="nav-links" id="navLinks">
      <a href="./xbgst.html">xbgst</a>
      <a href="#demo">demo</a>
      <a href="#plugins">plugins</a>
      <a href="#ufo-sighting">ufo sighting</a>
      <a href="#os-tuning">os tuning</a>
      <a href="#install">install</a>
      <a href="#app">optional app</a>
      <a href="#validator">validator</a>
      <a href="#curation">curation</a>
      <a href="#modelstudio">model studio</a>
      <a href="#referrals">referrals</a>
      <a href="./exa.html">exa</a>
      <a href="./bloat.html">bloat</a>
      <a href="./speedrun/">speedrun</a>
      <a href="./omegag/">omegaG</a>
      <a href="./omarchy-usage/">omarchy usage</a>
      <a href="#lanes">lanes</a>
      <a class="nav-cta" href="https://github.com/VeigaPunk/ds4cc-marketplace" target="_blank" rel="noopener">GITHUB ↗</a>
    </div>
  </div>
</nav>

<div class="page" id="top">

  <header class="hero">
    <div>
      <span class="badge">ship-ready distribution</span>
      <span class="badge badge-count">19 plugins</span>
      <span class="badge dark badge-count">4 agent CLIs</span>
      <span class="badge dark">rust-validated</span>
      <span class="badge cyan">MIT</span>
      <span class="badge" data-rinnegan-only>SS+ CLI — omp</span>
    </div>
<pre class="ascii" aria-hidden="true">
██████╗  ███████╗ ██╗ ██╗  ██████╗  ██████╗
██╔══██╗ ██╔════╝ ██║ ██║ ██╔════╝ ██╔════╝
██║  ██║ ███████╗ ███████║ ██║      ██║
██║  ██║ ╚════██║ ╚════██║ ██║      ██║
██████╔╝ ███████║      ██║ ╚██████╗ ╚██████╗
╚═════╝  ╚══════╝      ╚═╝  ╚═════╝  ╚═════╝
</pre>
    <h1>Ship-ready artifacts. <em>One distribution home.</em></h1>
    <p class="tagline">
      When an agent tool is refined enough to ship, it lands on DS4CC to install, inspect, or read.
      Raw local paths come first. <span class="few-good-clis">The <strong>Few Good CLIs™</strong> — <strong>Grok Build</strong>, <strong>Codex</strong>,
      <strong>Kimi Code CLI</strong>, <strong>OpenCode</strong>, and <strong>cursor-agent</strong> —
      without turning the stack into a bridge zoo.</span>
      <span data-rinnegan-only>The <strong>omp</strong> CLI is the <strong>SS+ tier</strong> — and it keeps getting better, everyday.</span>
    </p>
    <div class="hero-row hero-chips">
      <span class="chip"><span class="dot"></span> all 19 plugins available</span>
      <span class="chip amber"><span class="dot"></span> curation-gated</span>
      <span class="chip"><span class="dot"></span> Titanium L3 substrate</span>
      <span class="chip"><span class="dot"></span> Titanium = no MCP</span>
    </div>
    <div class="hero-row">
      <div class="oneliner">
        <code><span class="p">$</span> curl -fsSL https://raw.githubusercontent.com/VeigaPunk/grok-marketplace/main/scripts/install-xbgst-codex.sh | bash</code>
        <button type="button" class="copy-btn" data-copy="curl -fsSL https://raw.githubusercontent.com/VeigaPunk/grok-marketplace/main/scripts/install-xbgst-codex.sh | bash">COPY</button>
      </div>
      <a class="btn solid" href="./xbgst.html">INSTALL XBGST FOR CODEX →</a>
      <a class="btn" href="#plugins">BROWSE PLUGINS</a>
      <a class="btn" href="https://github.com/VeigaPunk/ds4cc-marketplace/blob/main/GROK_PASTE.md" target="_blank" rel="noopener">NON-CLI GROK CHAT FALLBACK ↗</a>
    </div>
  </header>

  <section id="ship-ready" class="reveal">
    <h2><span class="idx">00</span>New release · XBGST for Codex</h2>
    <p class="sub">The Grok-proven orchestration stack is now packaged for a raw local Codex install. WWKD and the shared XBGST contract remain the core; native Codex delegation does the work.</p>
    <div class="panel" style="padding:14px 16px;border-color:var(--green)">
      <div class="kv" style="margin-top:0">
        <span class="ok-chip">local first</span>
        <span class="ok-chip">one paste</span>
        <span class="ok-chip">anti-bloat</span>
      </div>
      <h3 style="margin-top:8px;font-size:0.95rem">The complete, inspectable path</h3>
      <p>Install the Codex marketplace package locally, use <code>xask</code> as a CLI protocol when cross-provider consultation is useful, and keep implementation in native Codex agents. No MCP bridge is required.</p>
      <p style="margin-bottom:0"><a class="btn solid" href="./xbgst.html">READ + INSTALL XBGST →</a></p>
    </div>
    <div class="callout amber">
      <strong>Optional means optional:</strong> the MCP / ChatGPT companion is a secondary adapter for people who deliberately enable it. It is not the install path, not a runtime dependency, and not a claim of publication in the public ChatGPT app directory.
    </div>
  </section>

  <section id="demo" class="reveal">
    <h2><span class="idx">01</span>Pick your host — watch it install</h2>
    <p class="sub">Live terminal. Few Good CLIs™ · five hosts, one repo. Commands below are the real install paths — outputs are representative.</p>
    <div class="term-wrap">
        <div class="host-tabs" role="tablist" aria-label="agent CLI hosts">
        <button type="button" class="host-tab active" data-host="grok" role="tab">grok</button>
        <button type="button" class="host-tab" data-host="codex" role="tab">codex</button>
        <button type="button" class="host-tab" data-host="kimi" role="tab">kimi</button>
        <button type="button" class="host-tab" data-host="opencode" role="tab">opencode</button>
        <button type="button" class="host-tab" data-host="cursor" role="tab">cursor-agent</button>
      </div>
      <div class="term" aria-live="polite">
        <div class="term-bar">
          <span class="sq r"></span><span class="sq a"></span><span class="sq g"></span>
          <span class="title" id="termTitle">ds4cc — grok build</span>
        </div>
        <div class="term-body" id="termBody"></div>
      </div>
      <p class="term-note">click a host to replay its install sequence · sound off, green on</p>
    </div>
  </section>

  <section id="ss-plus" data-rinnegan-only>
    <h2><span class="idx">01b</span>The SS+ CLI — omp</h2>
    <p class="sub"><strong>SS+ CLI, and it keeps getting better, everyday.</strong> omp is not one of the <strong>Few Good CLIs™</strong> — it is the tier above the family, and the only CLI listed on this wall.</p>
    <div class="panel" style="padding:16px 18px;border-color:#7b4dff">
      <div class="kv" style="margin-top:0">
        <span class="ok-chip">native substrate</span>
        <span class="ok-chip">no bridge zoo</span>
        <span class="ok-chip">local-first</span>
      </div>
      <div class="oneliner" style="margin:12px 0">
        <code><span class="p">$</span> curl -fsSL https://omp.sh/install | sh</code>
        <button type="button" class="copy-btn" data-copy="curl -fsSL https://omp.sh/install | sh">COPY</button>
      </div>
      <p style="margin:0 0 10px">Not a grade we hand out — a gate UFO enforces in Rust: omp is the only substrate whose native handoff (<code>omp-native-v1</code>) the Pareto judge validates; every other CLI is contract-shape-only until its receipts land.</p>
      <h3 style="margin:0 0 8px;font-size:0.95rem">How UFO runs on omp — natively, not adapted</h3>
      <ul style="margin:0 0 12px;padding-left:20px">
        <li><strong>One authority, host transport</strong> — UFO's L1 is omp's own Main; lanes dispatch through OMP <code>task</code> + Agent Hub. No second orchestration runtime, no bridge zoo.</li>
        <li><strong>Ten seats, fail-closed</strong> — Main, one planner, six proposal lanes (scout, reviewer, critic, connector, sentinel, executor), the executor's depth-2 labrat, and a distiller that runs even when an upstream seat failed. The Rust judge rejects any handoff missing a seat; a failed seat stays in the topology as typed evidence.</li>
        <li><strong>Hash-bound handoff</strong> — every assignment byte-matches its SHA-256 and carries exactly one terminal <code>| godspeed</code> marker; contract drift mid-round fails the handoff. Only the Rust judge composes and admits proposals.</li>
        <li><strong>Autonomous model routing</strong> — the <code>chinese_ufo</code> formation pins a route per task class (depth → qwen3.8-max, review/integration → deepseek-v4-pro, mechanical → deepseek-v4-flash) with typed fallback chains. The operator never picks a model per dispatch.</li>
        <li><strong>Reroute, don't respawn</strong> — a failed lane keeps its identity, prompt, and cached context and takes another local route. Failure is telemetry, never a silent retry or a replacement agent.</li>
      </ul>
      <p class="note" style="margin:0">The wall is omp today because omp passed the gate first. <strong>Few Good CLIs™</strong> family members get listed here as they earn proper support — upstream authority, shipped record, copy-only action, and a policy that fails closed on anything else. Admission is a record, not a promise.</p>
    </div>
  </section>

  <section id="plugins" class="reveal">
    <h2 data-rinnegan-only><span class="idx">02</span>The catalog — curated plugins + the SS+ CLI</h2>
    <h2 class="catalog-h2"><span class="idx">02</span>The catalog — 19 curated plugins</h2>
    <p class="sub">Every plugin ships an actionable <code>SKILL.md</code> (fenced commands, no boilerplate) and passes the Rust validator. Filter by name, category chips, or capability. Companion OS tools appear under <strong>os tuning</strong>.</p>
    <div class="grid-tools">
      <input class="filter" id="plugFilter" type="search" placeholder="filter plugins… (try: agents, grok, papers, godspeed)" aria-label="filter plugins" />
      <span class="count" id="plugCount">19 / 19</span>
    </div>
    <div class="cat-chips" id="catChips" role="group" aria-label="filter by category">
      <button type="button" class="cat-chip active" data-cat="all">all</button>
      <button type="button" class="cat-chip" data-cat="agents">agents</button>
      <button type="button" class="cat-chip" data-cat="skills">skills</button>
      <button type="button" class="cat-chip" data-cat="commands">commands</button>
      <button type="button" class="cat-chip" data-cat="orchestration">orchestration</button>
      <button type="button" class="cat-chip" data-cat="swarm">swarm</button>
      <button type="button" class="cat-chip" data-cat="adapters">adapters</button>
      <button type="button" class="cat-chip" data-cat="research">research</button>
      <button type="button" class="cat-chip" data-cat="network">network</button>
      <button type="button" class="cat-chip" data-cat="security">security</button>
      <button type="button" class="cat-chip" data-cat="viz">viz</button>
      <button type="button" class="cat-chip" data-cat="meta">meta</button>
      <button type="button" class="cat-chip" data-cat="os-tuning">os tuning</button>
    </div>
    <div class="plugins" id="plugGrid"></div>
  </section>

  <section id="ufo-sighting" class="reveal">
    <h2><span class="idx">03</span>UFO Sighting — the live L1 wall</h2>
    <p class="sub">A dedicated terminal wall attached to the tmux session <code>ufo_sighting:1</code>: every active UFO-FSD L1 mission owns one registered, titled pane with stable run/session provenance, laid out on a responsive grid that adapts to the attached client. <em>Work in progress</em> — releases with the <code>/ufo</code> skill under FSD, the full self-driving regime. Takes over the Agent Pip slot.</p>
    <div class="grid-2">
      <div class="panel" style="padding:14px 16px">
        <h3 style="margin-top:0;font-size:0.95rem">One pane per mission</h3>
<pre><span class="g">┌ ufo_sighting:1 ───────────┐</span>
│ <span class="g">┌ rinnegan-r1 ──────────┐</span> │
│ │ L1 · 6 lanes settled  │ │
│ │ <span class="g">verdict: 7 edits shipped</span> │ │
│ <span class="g">└───────────────────────┘</span> │
│ <span class="g">┌ hatch-twin ───────────┐</span> │
│ │ L1 · wave live        │ │
│ <span class="g">└───────────────────────┘</span> │
<span class="g">└────────────────────────────┘</span></pre>
        <p>The wall is display and registration state only — never another orchestrator, never a source of runtime authority. A twin is one explicit depth-1 sibling L1 with fresh identities and origin provenance; it never merges judges and never recursively forks.</p>
        <div class="kv">
          <span class="ok-chip">tmux grid</span>
          <span class="ok-chip">pane registry</span>
          <span class="ok-chip">twin cap: depth-1</span>
          <span class="ok-chip">WIP</span>
        </div>
      </div>
      <div class="panel" style="padding:14px 16px">
        <h3 style="margin-top:0;font-size:0.95rem">Open the hatch</h3>
        <div class="oneliner" style="margin:8px 0">
          <code><span class="p">$</span> scripts/ufo-sighting open</code>
          <button type="button" class="copy-btn" data-copy="scripts/ufo-sighting open">COPY</button>
        </div>
        <p><code>open</code> launches or focuses the configured terminal on <code>ufo_sighting:1</code>; <code>status</code> reports registered missions, attached clients, and live geometry as JSON. The grid fits up to 15 mission panes (3 rows × 5 columns), sized from the attached terminal.</p>
        <p class="note">WIP — lands with <code>/ufo</code> FSD: one L1 orchestrator, a WWKD plan before every judged round, specialist lanes on the native substrate, one Pareto judge, and an honest stop.</p>
      </div>
    </div>
  </section>

  <section id="os-tuning" class="reveal">
    <h2><span class="idx">03b</span>OS tuning — Omarchy usage limits</h2>
    <p class="sub">Waybar chip for live AI usage windows on Omarchy. Companion product under the <strong>os tuning</strong> catalog filter — not a marketplace plugin package.</p>
    <div class="panel" style="padding:14px 16px">
      <h3 style="margin-top:0;font-size:0.95rem">omarchy-usage-tray</h3>
      <p style="color:var(--muted);font-size:0.9rem;line-height:1.5;margin:0 0 12px">
        Cycles Codex, Grok, Kimi, Cursor, and Alibaba Token Plan meters on the bar.
        Left-click / scroll = next provider; right-click = identity swap when supported.
        Installs into <code>~/.config/waybar/</code> only.
      </p>
      <div class="oneliner" style="margin:8px 0 12px">
        <code><span class="p">$</span> curl -fsSL https://raw.githubusercontent.com/VeigaPunk/omarchy-usage-tray/main/install.sh | bash</code>
        <button type="button" class="copy-btn" data-copy="curl -fsSL https://raw.githubusercontent.com/VeigaPunk/omarchy-usage-tray/main/install.sh | bash">COPY</button>
      </div>
      <a class="btn solid" href="./omarchy-usage/">OPEN PAGE →</a>
      <a class="btn" href="https://github.com/VeigaPunk/omarchy-usage-tray" target="_blank" rel="noopener">github ↗</a>
    </div>
  </section>

  <section id="install" class="reveal">
    <h2><span class="idx">04</span>Install — Few Good CLIs™</h2>
    <p class="sub">Five supported hosts: Grok Build, Codex, Kimi Code CLI, OpenCode, and <strong>cursor-agent</strong>. Review third-party plugin sources before installation. <strong>Codex + sekhmet L3 is the optimal execution substrate as of 2026-08 (host binary resolve: repo docs).</strong></p>
    <div class="hosts">

      <div class="host">
        <h3>Grok Build CLI <span class="tag">xAI CLI · livepatch ban</span></h3>
<pre><span class="c"># grok-orch (xbgst-stack) — one-liner; does not overwrite config.toml; livepatch not auto-applied</span>
<span class="p">$</span> curl -fsSL https://raw.githubusercontent.com/VeigaPunk/grok-marketplace/main/scripts/install-xbgst-stack.sh | bash

<span class="c"># optional: merge (do not curl -o overwrite) grok-cli-config.toml</span>
<span class="c"># https://github.com/VeigaPunk/ds4cc-marketplace/blob/main/grok-cli-config.toml</span>

<span class="c"># optional: livepatch ban in the binary (not part of the orch one-liner)</span>
<span class="p">$</span> git clone git@github.com:VeigaPunk/grok-build-livepatch.git
<span class="p">$</span> cd grok-build-livepatch &amp;&amp; ./scripts/check-and-patch.sh

<span class="c"># ds4cc catalog (separate marketplace; not required for /xbgst)</span>
<span class="p">$</span> grok plugin marketplace add VeigaPunk/ds4cc-marketplace
<span class="p">$</span> grok plugin list --available --json
<span class="p">$</span> grok plugin install myagents --trust
<span class="p">$</span> grok plugin enable myagents</pre>
<pre><span class="c"># install the core set in one loop</span>
<!-- catalog-install-loop:2026-08-05-residual sekhmet+xbrd-selector (no agent-wall) -->
for p in myagents godspeed-core mycommands myskills sekhmet xbrd-selector ds4cc; do
  grok plugin install "$p" --trust &amp;&amp; grok plugin enable "$p"
done</pre>
        <p class="note"><strong>Config:</strong> <a href="grok-cli-config.toml">grok-cli-config.toml</a> (Pages) · <strong>Livepatch:</strong> <a href="https://github.com/VeigaPunk/grok-build-livepatch" target="_blank" rel="noopener">grok-build-livepatch</a> hard-bans <code>general-purpose</code>/<code>explore</code>; first-party full tools use <code>agent</code>. <strong>xbgst:</strong> <a href="https://github.com/VeigaPunk/grok-marketplace" target="_blank" rel="noopener">grok-marketplace</a> / xbrd-grok. <strong>Non-CLI fallback:</strong> paste <a href="https://github.com/VeigaPunk/ds4cc-marketplace/blob/main/GROK_PASTE.md" target="_blank" rel="noopener">GROK_PASTE.md</a>.</p>
      </div>

      <div class="host">
        <h3>Codex <span class="tag">OpenAI CLI</span></h3>
<pre><span class="c"># marketplace plugins (hardened host binary: repo docs/TITANIUM-HOST.md)</span>
<span class="p">$</span> cargo install --git https://github.com/VeigaPunk/xbrd-spark --locked
<span class="p">$</span> codex plugin marketplace add VeigaPunk/ds4cc-marketplace
<span class="p">$</span> codex plugin list --available --json
<span class="p">$</span> codex plugin add sekhmet@ds4cc --json
<span class="p">$</span> codex plugin add myagents@ds4cc --json
<span class="p">$</span> codex plugin list --json</pre>
        <p class="note"><strong>Optimal substrate (as of 2026-08):</strong> Codex + sekhmet (xbreed L3) — pure namespaced sparks, no worktrees, up to 64 concurrent, double-work tolerant, Rust-only. Adding a plugin installs it enabled. Start a new Codex session to load skills/tools. Cache example: <code>$CODEX_HOME/plugins/cache/ds4cc/myagents/0.2.0</code>. TUI: <code>/plugins</code> + <code>Space</code>. Local: <code>codex plugin marketplace add .</code></p>
      </div>

      <div class="host">
        <h3>Kimi Code CLI <span class="tag">TUI plugins</span></h3>
<pre><span class="c"># commands to enter in the Kimi TUI</span>
<span class="g">/plugins install https://github.com/VeigaPunk/ds4cc-marketplace</span>
<span class="g">/reload</span></pre>
<pre><span class="c"># or register the full packaged catalog in the Kimi TUI</span>
<span class="g">/plugins marketplace https://veigapunk.github.io/ds4cc-marketplace/.kimi-plugin/marketplace.json</span>
<span class="g">/plugins install <artifact-url-or-local-path></span>
<span class="g">/reload</span></pre>
        <p class="note">Invoke as <code>/skill:<skill-name></code> and <code>/<plugin>:<command></code>. Third-party installs ask for trust first — review before approving.</p>
      </div>

      <div class="host">
        <h3>OpenCode <span class="tag">bootstrap script</span></h3>
<pre><span class="p">$</span> git clone https://github.com/VeigaPunk/ds4cc-marketplace.git
<span class="p">$</span> node ds4cc-marketplace/scripts/install-opencode-agents.mjs --global
<span class="c"># or: --project /path/to/project</span></pre>
        <p class="note">Writes 15 <code>the-*</code> agents plus <code>the-netsshark</code> (16 subagents total), and a separate <code>orch</code> primary mode. Structurally verified.</p>
      </div>

      <div class="host">
        <h3>cursor-agent <span class="tag">Cursor CLI · Few Good CLIs™</span></h3>
<pre><span class="c"># install Cursor Agent CLI (headless / -p print mode)</span>
<span class="p">$</span> curl https://cursor.com/install -fsS | bash
<span class="p">$</span> cursor-agent --version

<span class="c"># oneshot print (no TUI) — trust + text out</span>
<span class="p">$</span> cursor-agent -p --trust --output-format text --model composer-2.5 -- "hello from ds4cc"

<span class="c"># cloud / Ultra agents also speak this surface — same Few Good CLIs™ seat</span>
<span class="p">$</span> cursor-agent -p --trust --model cursor-grok-4.6-high-fast -- "run the task"</pre>
        <p class="note"><strong>Now part of the Few Good CLIs™.</strong> Headless agentic burn via <code>cursor-agent</code> (also the cloud Agents / Ultra substrate). No native marketplace protocol yet — consume DS4CC skills/plugins from the repo or host docs; use <code>xask</code> / xbrd dispatch templates when crossing models. Docs: <a href="https://cursor.com/docs" target="_blank" rel="noopener">cursor.com/docs</a>.</p>
      </div>

    </div>
  </section>

  <section id="app" class="reveal">
    <h2><span class="idx">05</span>Optional ChatGPT companion — app.ds4cc.com</h2>
    <p class="sub">A secondary, opt-in Apps SDK wrapper exposes a reviewed read-only subset of the catalog. Raw local installs remain the primary DS4CC path; this bridge is never required for XBGST.</p>
    <div class="grid-2">
      <div class="panel" style="padding:14px 16px">
        <h3 style="margin-top:0;font-size:0.95rem">MCP endpoint</h3>
        <div class="oneliner" style="margin:8px 0">
          <code><span class="p">›</span> https://app.ds4cc.com/mcp</code>
          <button type="button" class="copy-btn" data-copy="https://app.ds4cc.com/mcp">COPY</button>
        </div>
        <p>Scoped to an explicitly reviewed, read-only tool surface with required annotations and widget CSP/domain metadata. It is <em>not</em> the public 19-plugin marketplace, and this page makes no claim that it is published in the public ChatGPT app directory.</p>
        <div class="kv">
          <span class="ok-chip">read-only</span>
          <span class="ok-chip">reviewed subset</span>
          <span class="ok-chip">health route</span>
          <span class="ok-chip">domain-verified</span>
        </div>
      </div>
      <div class="panel" style="padding:14px 16px">
        <h3 style="margin-top:0;font-size:0.95rem">Trust routes</h3>
        <table class="spec">
          <tr><th>privacy</th><td><a href="https://app.ds4cc.com/privacy" target="_blank" rel="noopener">app.ds4cc.com/privacy</a></td></tr>
          <tr><th>terms</th><td><a href="https://app.ds4cc.com/terms" target="_blank" rel="noopener">app.ds4cc.com/terms</a></td></tr>
          <tr><th>support</th><td><a href="https://app.ds4cc.com/support" target="_blank" rel="noopener">app.ds4cc.com/support</a></td></tr>
          <tr><th>health</th><td><a href="https://app.ds4cc.com/health" target="_blank" rel="noopener">app.ds4cc.com/health</a></td></tr>
        </table>
      </div>
    </div>
  </section>

  <section id="validator" class="reveal">
    <h2><span class="idx">06</span>The Rust validator — no broken plugins, ever</h2>
    <p class="sub">A binary crate (<code>ds4cc-validator</code>) gates every plugin on structure, schema, and skill actionability. CI runs it on each push.</p>
    <div class="grid-2">
      <div>
<pre><span class="p">$</span> cargo run --manifest-path marketplace/validator/Cargo.toml -- marketplace
<span class="g">Validation passed.</span>
<span class="p">$</span> cargo test --manifest-path marketplace/validator/Cargo.toml
<span class="g">test result: ok. all green</span></pre>
        <div class="kv">
          <span class="ok-chip">cargo fmt — clean</span>
          <span class="ok-chip">clippy -D warnings — 0</span>
          <span class="ok-chip">13 integration tests</span>
        </div>
        <div class="callout">
          <strong>Dual-layout aware:</strong> <code>marketplace/</code> (web/CI) and repo root (canonical Codex layout at
          <code>.agents/plugins/marketplace.json</code>) both validate.
        </div>
      </div>
      <div>
        <h3 style="font-size:0.95rem;margin-top:0">What every plugin must prove</h3>
        <ol class="gate">
          <li><b>Local source integrity</b> — path pinned to <code>./plugins/<name></code></li>
          <li><b>Manifest parses</b> — <code>.codex-plugin/plugin.json</code>, name matches entry</li>
          <li><b>Semver</b> — strict <code>X.Y.Z</code></li>
          <li><b>Full interface block</b> — display, descriptions, developer, category, capabilities</li>
          <li><b>Skills exist</b> — <code>skills/</code> + <code>README.md</code> present</li>
          <li><b>Actionable SKILL.md</b> — fenced code or recognized CLI prefix; boilerplate rejected</li>
        </ol>
      </div>
    </div>
  </section>

  <section id="curation" class="reveal">
    <h2><span class="idx">07</span>Curation — a living marketplace, not a junk drawer</h2>
    <p class="sub">DS4CC keeps the strongest entry per domain and updates the reviewed set as better evidence emerges. Full policy in <a href="https://github.com/VeigaPunk/ds4cc-marketplace/blob/main/CURATION.md" target="_blank" rel="noopener">CURATION.md</a>.</p>
    <div class="grid-2">
      <div>
        <h3 style="font-size:0.95rem;margin-top:0">Admission gate</h3>
        <ol class="gate">
          <li><b>Useful capability</b> with a reproducible demonstration</li>
          <li><b>Provenance</b> — identifiable maintainer or publisher</li>
          <li><b>Current docs</b> — install steps + supported-platform scope</li>
          <li><b>Compatible licensing</b> and required notices</li>
          <li><b>Reviewed security/privacy posture</b> for its permissions</li>
          <li><b>Automated structural checks</b> + manual end-to-end capability check</li>
          <li><b>Claims limited</b> to demonstrated evidence</li>
        </ol>
      </div>
      <div>
        <h3 style="font-size:0.95rem;margin-top:0">Claim discipline</h3>
        <p>Comparative, compatibility, price, and “full functionality” claims require a dated evidence packet: tested hardware/software, comparison baseline, known limitations, repeatable demo.</p>
        <div class="callout amber">
          <strong>Proposed, not advertised:</strong> <em>DS4CC microG</em> stays off the public listing until its parity matrix, demos, latency numbers, and price source land in the repo.
        </div>
        <div class="callout red">
          <strong>Removal:</strong> entries are demoted or dropped when unmaintained, unsafe, misleading, legally unclear, or dominated by a demonstrably stronger option.
        </div>
      </div>
    </div>
  </section>

  <section id="research-note" class="reveal">
    <h2><span class="idx">08</span>Research note · separate tabs</h2>
    <p class="sub">Not Titanium policy. Not an MCP install path for sekhmet/Codex Titanium.</p>
    <div class="grid-2">
      <div class="panel" style="padding:14px 16px">
        <h3 style="margin-top:0;font-size:0.95rem">Exa.ai — the real deal</h3>
        <p style="color:var(--muted);font-size:0.9rem;line-height:1.5;margin:0 0 12px">
          Extremely good web research product. First thing in the hop-on tool wave that actually felt sharp.
          <strong style="color:var(--fg)">Separate tab</strong> — praise only, not “wire this into L3.”
        </p>
        <a class="btn solid" href="./exa.html">OPEN EXA TAB →</a>
      </div>
      <div class="panel" style="padding:14px 16px">
        <h3 style="margin-top:0;font-size:0.95rem">Bloat we refuse</h3>
        <p style="color:var(--muted);font-size:0.9rem;line-height:1.5;margin:0 0 12px">
          OpenClaw (hard no already), Honcho, Hermes/Nous (unsalvageable after ~$200 DO), mise (enshittified Node manager — use fnm multishell), MCP zoos, emoji panels that will not die.
          Operator kills with evidence — dual of curation.
        </p>
        <a class="btn" href="./bloat.html">OPEN BLOAT TAB →</a>
      </div>
    </div>
    <div class="panel" style="padding:14px 16px;margin-top:14px">
      <h3 style="margin-top:0;font-size:0.95rem">omegaG — controller-native agent control</h3>
      <p style="color:var(--muted);font-size:0.9rem;line-height:1.5;margin:0 0 12px">
        DualSense / DualShock 4 shortcut mapper for terminal-first agents. Formerly DS4CC.
        Standalone product site on this domain — not a marketplace plugin.
      </p>
      <a class="btn solid" href="./omegag/">OPEN OMEGAG →</a>
      <a class="btn" href="https://omegag.vercel.app/" target="_blank" rel="noopener">vercel ↗</a>
      <a class="btn" href="https://veigapunk.github.io/omegag-site/" target="_blank" rel="noopener">pages ↗</a>
    </div>
    <div class="callout red" style="margin-top:14px">
      <strong>Titanium / sekhmet L3:</strong> no MCP policy. Pure namespaced sparks. Do not ship Exa-as-MCP (or any MCP) onto the Titanium host.
    </div>
  </section>

  <section id="modelstudio" class="reveal">
    <h2><span class="idx">09</span>Alibaba Cloud Model Studio · public good</h2>
    <p class="sub">OpenAI-compatible Qwen / multi-modal APIs (intl Singapore), free new-user token quota, official <code>bl</code> CLI. We wired this for agent stacks — sharing the path is the point.</p>
    <div class="grid-2">
      <div class="panel" style="padding:14px 16px">
        <h3 style="margin-top:0;font-size:0.95rem">What you get</h3>
        <ul style="color:var(--muted);font-size:0.9rem;line-height:1.55;margin:0;padding-left:1.2rem">
          <li>Intl base: <code>dashscope-intl.aliyuncs.com/compatible-mode/v1</code></li>
          <li>Anthropic-compatible: <code>…/apps/anthropic/v1/messages</code></li>
          <li>CLI: <code>npm i -g bailian-cli</code> → <code>bl text chat</code></li>
          <li>Console: Singapore region API keys + docs</li>
        </ul>
        <p class="note" style="margin-top:12px">Keys are region-bound. Prefer env inject (<code>DASHSCOPE_API_KEY</code>); never commit <code>sk-</code> material.</p>
      </div>
      <div class="panel" style="padding:14px 16px">
        <h3 style="margin-top:0;font-size:0.95rem">Start here</h3>
        <p style="color:var(--muted);font-size:0.9rem;line-height:1.5;margin:0 0 12px">
          Product console (Singapore) and the Alibaba Cloud benefits campaign (referral). New accounts may receive free Model Studio tokens — offer varies.
        </p>
        <p style="margin:0 0 10px">
          <a class="btn solid" href="https://modelstudio.console.alibabacloud.com/ap-southeast-1?tab=api#/api" target="_blank" rel="noopener">MODEL STUDIO CONSOLE →</a>
        </p>
        <p style="margin:0">
          <a class="btn" href="https://www.alibabacloud.com/campaign/benefits?referral_code=A927SY" target="_blank" rel="sponsored nofollow noopener">BENEFITS / REFERRAL A927SY →</a>
        </p>
      </div>
    </div>
    <p class="note" style="margin-top:14px">Disclosure: the benefits link is a referral (<code>referral_code=A927SY</code>) — DS4CC may receive a benefit if you sign up through it; eligibility and offer vary by region and time. Product docs: <a href="https://www.alibabacloud.com/help/en/model-studio/compatibility-of-openai-with-dashscope" target="_blank" rel="noopener">OpenAI-compatible chat</a> · <a href="https://www.alibabacloud.com/help/en/model-studio/get-api-key" target="_blank" rel="noopener">API key</a>. See also <a href="#referrals">#referrals</a>.</p>
  </section>

  <section id="referrals" class="reveal">
    <h2><span class="idx">10</span>Referrals — tools we actually use</h2>
    <p class="sub">Disclosed invites only. No dark patterns. We ship the path (docs, base URLs, secret hygiene) because the agent stack is better when builders share what works.</p>
    <div class="callout amber" style="margin-bottom:16px">
      <strong>Headliner: Alibaba Cloud Model Studio (intl).</strong>
      OpenAI-compatible Qwen APIs, Anthropic-compatible messages, free new-user token quota (offer varies), official <code>bl</code> CLI.
      Wired for agent stacks on DS4CC — this is a public good, not a drive-by affiliate dump.
      <a href="#modelstudio">Read the wire-up →</a>
    </div>
    <div class="grid-2" style="grid-template-columns:1fr 1fr 1fr">
      <div class="panel" style="padding:14px 16px; border-color:var(--green)">
        <div class="kv" style="margin-top:0">
          <span class="ok-chip">featured</span>
          <span class="ok-chip">intl singapore</span>
          <span class="ok-chip">A927SY</span>
        </div>
        <h3 style="margin-top:8px;font-size:0.95rem">Model Studio / Alibaba Cloud</h3>
        <p style="color:var(--muted);font-size:0.88rem;line-height:1.5;margin:0 0 12px">
          Benefits campaign + Model Studio free-quota path. Same referral code on the official benefits page.
        </p>
        <p style="margin:0 0 8px">
          <a class="btn solid" href="https://www.alibabacloud.com/campaign/benefits?referral_code=A927SY" target="_blank" rel="sponsored nofollow noopener">JOIN VIA A927SY →</a>
        </p>
        <p style="margin:0">
          <a class="btn small" href="https://modelstudio.console.alibabacloud.com/ap-southeast-1?tab=api#/api" target="_blank" rel="noopener">console</a>
          <a class="btn small" href="#modelstudio">wire notes</a>
        </p>
        <p class="note" style="margin-top:12px">Disclosure: <a href="https://www.alibabacloud.com/campaign/benefits?referral_code=A927SY" target="_blank" rel="sponsored nofollow noopener">the Alibaba Cloud benefits campaign link</a> is a referral — DS4CC may receive a benefit if you sign up through it; eligibility and offer vary by region and time.</p>
      </div>
      <div class="panel few-good-clis" style="padding:14px 16px">
        <h3 style="margin-top:0;font-size:0.95rem">Kimi</h3>
        <p style="color:var(--muted);font-size:0.88rem;line-height:1.5;margin:0 0 12px">
          Invite for Kimi — used in the DS4CC agent lane mix (connector / revenger paths).
        </p>
        <p style="margin:0">
          <a class="btn" href="https://www.kimi.com/activities/invite/share?scenario=invite&amp;from=share_poster&amp;invitation_code=W6NGNP" target="_blank" rel="sponsored nofollow noopener">KIMI INVITE →</a>
        </p>
        <p class="note" style="margin-top:12px">Disclosure: <a href="https://www.kimi.com/activities/invite/share?scenario=invite&amp;from=share_poster&amp;invitation_code=W6NGNP" target="_blank" rel="sponsored nofollow noopener">the Kimi invite link</a> is a referral — DS4CC may receive a benefit if you sign up through it; eligibility and offer vary by region and time.</p>
      </div>
      <div class="panel few-good-clis" style="padding:14px 16px">
        <h3 style="margin-top:0;font-size:0.95rem">OpenCode</h3>
        <p style="color:var(--muted);font-size:0.88rem;line-height:1.5;margin:0 0 12px">
          Bootstrap path for the OpenCode host in the Few Good CLIs™ marketplace.
        </p>
        <p style="margin:0">
          <a class="btn" href="https://opencode.ai/go?ref=GF5DFYD5MJ" target="_blank" rel="sponsored nofollow noopener">OPENCODE REF →</a>
        </p>
        <p class="note" style="margin-top:12px">Disclosure: <a href="https://opencode.ai/go?ref=GF5DFYD5MJ" target="_blank" rel="sponsored nofollow noopener">the OpenCode link</a> is a referral — DS4CC may receive a benefit if you sign up through it; eligibility and offer vary by region and time.</p>
      </div>
    </div>
    <p class="note" style="margin-top:14px">Footer mirrors the same three disclosures. No Grok/x.ai invite links by policy.</p>
  </section>

  <section id="lanes" class="reveal">
    <h2><span class="idx">11</span>Orchestration lanes — live routing</h2>
    <p class="note">Mirrored from the packaged SSoT (<code>marketplace/plugins/xbrd-gdsp-fknpft/commands/references/xbreed-shared.md</code> § Axis → Profile Mapping + xask Gate). If this section and the SSoT disagree, the SSoT wins and this section is drift.</p>
    <h3>Role declarations</h3>
<pre>the-judge            fable 5 · xhigh
the-planner          sonnet · medium
the-scout            sonnet · medium
the-reviewer         sonnet · medium
the-labrat           sonnet · medium
the-executor         sonnet · medium
the-connector        sonnet · medium
the-distiller        sonnet · medium
the-simplifier       sonnet · medium
the-revenger         sonnet · medium
the-sentinel         sonnet · medium
the-critic           sonnet · medium
the-mutation-tester  sonnet · medium
the-scribe           sonnet · medium
the-netsshark        host extension</pre>
    <h3>Execution gates</h3>
<pre>planner              wwkd · native
scout / labrat / executor xask --spark --gs codex → gpt-5.3-codex-spark
reviewer             xask --gpt55 --gs -e low codex → gpt-5.6-sol (default tier)
critic               Layer-0: heuer-planning → xask --gpt55 --gs -e low codex → gpt-5.6-sol
revenger RECON       xask --gpt55 --gs -e high codex → gpt-5.6-sol
sentinel             xask --gpt55 --gs -e low codex → gpt-5.6-sol
connector            xask --spark --gs codex → gpt-5.3-codex-spark
mutation: single / <=4 xask --spark --gs codex
mutation: >=5 / breadth xask --effort high --gs codex
distiller / simplifier / scribe native</pre>
    <p class="note">Codex Sol lanes use explicit reasoning and the neutral default service tier; fast is opt-in. Spark lanes resolve through Sekhmet to <code>gpt-5.3-codex-spark</code> (fallback <code>gpt-5.6-luna</code>). Teammate prefixes: <code>ccs-</code> sonnet, <code>cco-</code> fable 5 (judge), <code>cdx-</code> codex, <code>g-</code> local Gemma/HVM.</p>
    <h3>Local lane — Gemma 4 over HVM4</h3>
    <p><code>xask --gs gemma</code> (aliases <code>g</code>, legacy <code>gemini</code>) dispatches through <code>xbreed ask gemma</code> → <code>gemma-hvm</code> → <code>run.sh/run-hvm4.sh</code> → Bend 0.2.38 gen-hvm → HVM4 4.0 control gate → Ollama. Default model <code>gemma4:26b</code> via <code>HVM_GEMMA_MODEL</code>. Cloud Gemini CLI is retired — do not call the <code>gemini</code> binary. Any <code>g-*</code> teammate (and connector when routing local breadth) MUST use this lane — not the retired cloud Gemini path.</p>
    <p class="note">Ollama/Gemma 4 is the serving substrate. HVM4 controls routing only; tensor inference is not claimed to run in HVM4.</p>
  </section>

  <footer>
    <div class="cols">
      <div>
        <b>marketplace</b>
        <a href="https://github.com/VeigaPunk/ds4cc-marketplace" target="_blank" rel="noopener">github repo</a><br/>
        <a href="https://github.com/VeigaPunk/ds4cc-marketplace/blob/main/README.md" target="_blank" rel="noopener">README</a><br/>
        <a href="https://github.com/VeigaPunk/ds4cc-marketplace/blob/main/HIGHLIGHTS.md" target="_blank" rel="noopener">technical highlights</a><br/>
        <a href="https://github.com/VeigaPunk/ds4cc-marketplace/blob/main/CURATION.md" target="_blank" rel="noopener">curation policy</a>
      </div>
      <div>
        <b>catalog endpoints</b>
        <span class="few-good-clis">grok · <code>.grok-plugin/marketplace.json</code><br/>
        codex · <code>.agents/plugins/marketplace.json</code><br/>
        kimi · <a href="https://veigapunk.github.io/ds4cc-marketplace/.kimi-plugin/marketplace.json" target="_blank" rel="noopener">published catalog</a><br/>
        opencode · bootstrap installer<br/>
        cursor-agent · Few Good CLIs™ · <code>cursor.com/install</code></span>
        <span data-rinnegan-only>omp · SS+ CLI · <code>omp.sh/install</code></span>
      </div>
      <div>
        <b>related stack</b>
        <a href="https://github.com/VeigaPunk/xbrd-spark" target="_blank" rel="noopener">xbrd-spark</a> · sekhmet L3 binary<br/>
        <a href="https://github.com/VeigaPunk/sekhmet-l3" target="_blank" rel="noopener">sekhmet-l3</a> · GATE evidence<br/>
        <a href="https://github.com/VeigaPunk/grok-marketplace" target="_blank" rel="noopener">grok-marketplace</a> · Grok Build marketplace (xbgst-stack / xbgst-codex)<br/>
        <a href="https://veigapunk.github.io/xbgst-site/" target="_blank" rel="noopener">xbgst-site</a> · public hub<br/>
        <a href="./omegag/">omegaG</a> · controller product<br/>
        <a href="./omarchy-usage/">omarchy usage</a> · OS tuning / Waybar limits<br/>
        <a href="https://github.com/VeigaPunk/xbrd-selector" target="_blank" rel="noopener">xbrd-selector</a>
      </div>
      <div>
        <b>distribution & optional app</b>
        <a href="./xbgst.html">XBGST for Codex</a> · local-first install<br/>
        <a href="https://app.ds4cc.com/mcp" target="_blank" rel="noopener">app.ds4cc.com/mcp</a><br/>
        <a href="https://app.ds4cc.com/privacy" target="_blank" rel="noopener">privacy</a> ·
        <a href="https://app.ds4cc.com/terms" target="_blank" rel="noopener">terms</a> ·
        <a href="https://app.ds4cc.com/support" target="_blank" rel="noopener">support</a><br/>
        <a href="https://veigapunk.github.io/horizon-halo-comma-design/" target="_blank" rel="noopener">horizon halo ↗</a>
      </div>
    </div>
    <p class="note"><b>Referrals</b> · full cards: <a href="#referrals">#referrals</a> · Model Studio wire: <a href="#modelstudio">#modelstudio</a></p>
    <p class="note">Disclosure: <a href="https://www.kimi.com/activities/invite/share?scenario=invite&amp;from=share_poster&amp;invitation_code=W6NGNP" target="_blank" rel="sponsored nofollow noopener">the Kimi invite link</a> is a referral — DS4CC may receive a benefit if you sign up through it; eligibility and offer vary by region and time.</p>
    <p class="note">Disclosure: <a href="https://opencode.ai/go?ref=GF5DFYD5MJ" target="_blank" rel="sponsored nofollow noopener">the OpenCode link</a> is a referral — DS4CC may receive a benefit if you sign up through it; eligibility and offer vary by region and time.</p>
    <p class="note">Disclosure: <a href="https://www.alibabacloud.com/campaign/benefits?referral_code=A927SY" target="_blank" rel="sponsored nofollow noopener">the Alibaba Cloud benefits campaign link</a> (Model Studio / intl benefits, code <code>A927SY</code>) is a referral — DS4CC may receive a benefit if you sign up through it; eligibility and offer vary by region and time.</p>
    <div>DS4CC · VeigaPunk · MIT License · shipped 2026-07-29 · updated 2026-08-21</div>
    <div>Design language: <a href="https://veigapunk.github.io/horizon-halo-comma-design/" target="_blank" rel="noopener">Horizon Halo</a> — green console, JetBrainsMonoNL Nerd Font.</div>
  </footer>
</div>

<script src="./rinnegan/catalog.js"><\/script>
<script src="./rinnegan/policy.js"><\/script>
<script>
(function () {
  "use strict";

  // mobile nav
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const open = navLinks.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
      navToggle.textContent = open ? "close" : "menu";
    });
    navLinks.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        navLinks.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.textContent = "menu";
      });
    });
  }

  // rinnegan reading mode
  const rinneganBtn = document.getElementById("rinneganBtn");
  const rinneganLabel = rinneganBtn && rinneganBtn.querySelector(".rinnegan-label");
  function syncRinnegan() {
    const on = document.documentElement.classList.contains("rinnegan");
    if (rinneganBtn) {
      rinneganBtn.setAttribute("aria-pressed", on ? "true" : "false");
      if (rinneganLabel) rinneganLabel.textContent = on ? "rinnegan [on]" : "rinnegan [off]";
    }
  }
  syncRinnegan();
  if (rinneganBtn) {
    rinneganBtn.addEventListener("click", () => {
      const on = document.documentElement.classList.toggle("rinnegan");
      // no persistence: enabling rinnegan is a per-visit click
      syncRinnegan();
      if (typeof render === "function" && typeof filtered === "function") render(filtered());
    });
  }

  const REPO = "https://github.com/VeigaPunk/ds4cc-marketplace";
  const PLUGINS = [
    { n: "aaronplug", v: "0.4.0", cat: "research", rinnegan: true, d: "Academic paper retrieval across arXiv, Semantic Scholar and Sci-Hub.", c: 'npx @veigapunk/aaron papers search "..."' },
    { n: "ds4cc", v: "0.3.0", cat: "meta", rinnegan: true, d: "Marketplace meta-plugin — discover/install plugins and run ds4cc/orch mode.", c: "codex plugin marketplace add VeigaPunk/ds4cc-marketplace" },
    { n: "godspeed-codex-command", v: "0.2.0", cat: "commands", d: "Command-mode bootstrap & Codex posture controls.", c: "bash ./scripts/install-commands.sh" },
    { n: "godspeed-core", v: "0.2.0", cat: "orchestration", rinnegan: true, d: "Adaptive execution doctrine & Pareto walk policy for long tasks.", c: 'codex "godspeed: <task>"' },
    { n: "heuer-planning", v: "0.1.0", cat: "skills", rinnegan: true, d: "Standalone Heuer-style structured planning skill (ACH, assumptions, devil's advocate).", c: 'Skill(skill=\\"heuer-planning\\")' },
    { n: "infinizoom", v: "0.2.0", cat: "viz", d: "Fractal-zoom visualization QA & server.", c: "node qa-zoom.mjs" },
    { n: "myagents", v: "0.2.0", cat: "agents", rinnegan: true, d: "Curated agent profiles for development, review, research, and orchestration.", c: 'codex "Use the executor agent profile for this task"' },
    { n: "mycommands", v: "0.2.0", cat: "commands", d: "Reusable command packs & shell routines, ready to exec.", c: 'codex "Use the installed command pack for this task"' },
    { n: "myskills", v: "0.2.0", cat: "skills", d: "Curated skill inventory & workflow helpers, discoverable in-session.", c: "Open the Codex TUI and use /skills" },
    { n: "punk-records-brain", v: "0.2.0", cat: "agents", rinnegan: true, d: "Vegapunk-style multi-personality round table: Stella routes satellites, the conversation is the deliverable.", c: 'Skill(skill=\\"punk-records-brain\\")' },
    { n: "spoderman", v: "0.2.0", cat: "security", d: "Attack harness & hook safety research for agent runtimes.", c: "bash ./spoderman validate --hooks" },
    { n: "the-almanacker", v: "0.2.1", cat: "adapters", rinnegan: true, d: "Gemini Notebook / NotebookLM adapter (deep-dive audio, sources, studio).", c: 'almanack create "…" && almanack studio audio deep-dive --length long "…"' },
    { n: "the-kimiraikoner", v: "0.1.0", cat: "adapters", rinnegan: true, d: "Kimi web UI adapter (agent-browser / CDP).", c: "agent-browser session --host kimi" },
    { n: "the-musketeer", v: "0.3.1", cat: "adapters", rinnegan: true, d: "Grok web UI adapter — Expert/Fast/Heavy, Imagine, Automations (CDP).", c: 'grok-web "…"  # GROK_MODE=Expert' },
    { n: "the-netsshark", v: "0.2.0", cat: "network", rinnegan: true, d: "Empirical DNS, routing, proxy, firewall, MTU, and connectivity audits.", c: 'codex "Use the-netsshark skill"' },
    { n: "the-puppeteer", v: "0.2.1", cat: "adapters", rinnegan: true, d: "ChatGPT web UI bridge — Pro, Chat/Work, tools, fire-and-forget (CDP).", c: 'chitchat --new-chat "..."' },
    { n: "sekhmet", v: "0.1.1", cat: "swarm", rinnegan: true, d: "Always-available Codex Titanium swarm (xbreed L3). Up to 64 concurrent runners.", c: "sekhmet swarm --direct -j 64 --tasks-file tasks.txt" },
    { n: "xbrd-gdsp-fknpft", v: "8.16.137", cat: "orchestration", rinnegan: true, d: "Multimodel dispatch (xask/xbreed) & benchmark workflows.", c: "cargo build --release && ./target/release/xbreed --help" },
    { n: "xbrd-selector", v: "0.1.1", cat: "orchestration", d: "Model/agent selector helpers for xbreed stacks.", c: 'codex \\"Use xbrd-selector\\"' },
    { n: "omarchy-usage-tray", v: "main", cat: "os-tuning", kind: "page", d: "Omarchy Waybar chip for Codex, Grok, Kimi, Cursor, and Token Plan usage limits.", c: "curl -fsSL https://raw.githubusercontent.com/VeigaPunk/omarchy-usage-tray/main/install.sh | bash", href: "./omarchy-usage/", src: "https://github.com/VeigaPunk/omarchy-usage-tray" },
  ];

  const grid = document.getElementById("plugGrid");
  const count = document.getElementById("plugCount");
  const filter = document.getElementById("plugFilter");
  const catChips = document.getElementById("catChips");
  let activeCat = "all";

  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }

  const RINNEGAN_STANDALONE = (
    Array.isArray(globalThis.DS4CC_RINNEGAN_CATALOG) &&
    typeof globalThis.DS4CC_RINNEGAN_ADMIT === "function"
      ? globalThis.DS4CC_RINNEGAN_CATALOG.filter(globalThis.DS4CC_RINNEGAN_ADMIT)
      : []
  );

  function catalogForMode() {
    if (!document.documentElement.classList.contains("rinnegan")) return PLUGINS;
    return [...PLUGINS.filter(record => record.kind !== "page" && record.rinnegan === true), ...RINNEGAN_STANDALONE];
  }

  function filtered() {
    const q = (filter.value || "").trim().toLowerCase();
    return catalogForMode().filter(p => {
      const catOk = activeCat === "all" || (p.cat || "tools") === activeCat;
      if (!catOk) return false;
      if (!q) return true;
      return p.n.toLowerCase().includes(q) || p.d.toLowerCase().includes(q) || p.c.toLowerCase().includes(q) || (p.cat || "").toLowerCase().includes(q);
    });
  }

  function render(list) {
    const rinneganOn = document.documentElement.classList.contains("rinnegan");
    grid.innerHTML = list.map(p => {
      const isPage = p.kind === "page";
      const isStandalone = RINNEGAN_STANDALONE.includes(p);
      const srcHref = isPage ? (p.src || p.href || "#") : \`\${REPO}/tree/main/marketplace/plugins/\${encodeURIComponent(p.n)}\`;
      const actions = isStandalone
        ? \`<button class="btn small" data-copy="\${esc(p.c)}">\${esc(p.action)}</button>\`
        : isPage
          ? \`<a class="btn small" href="\${esc(p.href || "#")}">OPEN PAGE</a>
             <button class="btn small" data-copy="\${esc(p.c)}">COPY INSTALL</button>\`
          : \`<button class="btn small" data-copy="codex plugin add \${esc(p.n)}@ds4cc">COPY INSTALL</button>\`;
      const provenance = isStandalone
        ? \`<span class="plug-src">\${esc(p.provenance)} · standalone authority</span>\`
        : \`<a class="plug-src" href="\${esc(srcHref)}" target="_blank" rel="noopener">source ↗</a>\`;
      return \`
      <div class="plug">
        <div class="plug-head">
          <span class="plug-name">\${esc(p.n)}</span>
          <span class="plug-ver">\${isPage || isStandalone ? esc(p.v) : "v" + esc(p.v)}</span>
          <span class="plug-cat">\${esc(p.cat || "tools")}</span>
        </div>
        <p class="plug-desc">\${esc(p.d)}</p>
        <div class="plug-cmd" title="key command">\${esc(p.c)}</div>
        <div class="plug-foot">
          \${actions}
          \${provenance}
        </div>
      </div>\`;
    }).join("");
    const total = rinneganOn ? catalogForMode().length : PLUGINS.filter(p => p.kind !== "page").length;
    const visible = rinneganOn ? list.length : list.filter(p => p.kind !== "page").length;
    count.textContent = visible + " / " + total;
  }
  render(filtered());

  filter.addEventListener("input", () => render(filtered()));

  if (catChips) {
    catChips.addEventListener("click", (e) => {
      const btn = e.target.closest(".cat-chip");
      if (!btn) return;
      activeCat = btn.getAttribute("data-cat") || "all";
      catChips.querySelectorAll(".cat-chip").forEach(b => b.classList.toggle("active", b === btn));
      render(filtered());
    });
  }

  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-copy]");
    if (!btn) return;
    const text = btn.getAttribute("data-copy");
    const done = () => {
      const old = btn.textContent;
      btn.textContent = "COPIED";
      btn.classList.add("done");
      setTimeout(() => { btn.textContent = old; btn.classList.remove("done"); }, 1400);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done).catch(done);
    } else {
      const ta = document.createElement("textarea");
      ta.value = text; document.body.appendChild(ta); ta.select();
      try { document.execCommand("copy"); } catch (_) {}
      document.body.removeChild(ta); done();
    }
  });

  const SCRIPTS = {
    grok: {
      title: "ds4cc — Grok Builder CLI + xbgst orch",
      lines: [
        ["cmd", "curl -fsSL https://raw.githubusercontent.com/VeigaPunk/grok-marketplace/main/scripts/install-xbgst-stack.sh | bash"],
        ["ok",  "xbgst-stack orch overlay (no config.toml overwrite, livepatch not auto-applied)"],
        ["cmd", "grok plugin marketplace add VeigaPunk/ds4cc-marketplace"],
        ["ok",  "ds4cc catalog registered (optional; not required for /xbgst)"],
        ["cmd", "grok plugin install myagents --trust"],
        ["ok",  "installed \`myagents\`"],
        ["out", "merge grok-cli-config.toml if you want extra toggles — do not curl -o overwrite"],
        ["out", "optional livepatch: skill xbgst-livepatch / GROK_LIVEPATCH_FORCE=1 check-and-patch.sh"],
      ],
    },
    codex: {
      title: "ds4cc — codex + sekhmet L3",
      lines: [
        ["cmd", "cargo install --git https://github.com/VeigaPunk/xbrd-spark --locked"],
        ["ok",  "sekhmet + xbrd-spark on PATH"],
        ["cmd", "codex plugin marketplace add VeigaPunk/ds4cc-marketplace"],
        ["ok",  "added marketplace \`ds4cc\`"],
        ["cmd", "codex plugin list --available --json"],
        ["cmd", "codex plugin add sekhmet@ds4cc --json"],
        ["ok",  "sekhmet: Titanium L3 substrate ready"],
        ["cmd", "codex plugin add myagents@ds4cc --json"],
        ["ok",  "myagents: installed=true, enabled=true"],
        ["cmd", "codex plugin list --json"],
        ["out", "Start a new Codex session; use /plugins + Space to toggle state"],
      ],
    },
    kimi: {
      title: "ds4cc — kimi code cli",
      lines: [
        ["tui", "/plugins install https://github.com/VeigaPunk/ds4cc-marketplace"],
        ["warn", "third-party plugin — trust confirmation shown"],
        ["ok",  "DS4CC bootstrap plugin installed"],
        ["tui", "/plugins marketplace https://veigapunk.github.io/ds4cc-marketplace/.kimi-plugin/marketplace.json"],
        ["ok",  "catalog registered — 19 packaged plugins"],
        ["tui", "/reload"],
        ["out", "skills live as /skill:<name> · commands as /<plugin>:<command>"],
      ],
    },
    opencode: {
      title: "ds4cc — opencode bootstrap",
      lines: [
        ["cmd", "git clone https://github.com/VeigaPunk/ds4cc-marketplace.git"],
        ["out", "cloning into 'ds4cc-marketplace'... done"],
        ["cmd", "node ds4cc-marketplace/scripts/install-opencode-agents.mjs --global"],
        ["ok",  "wrote 15 the-* agents plus the-netsshark — 16 subagents total"],
        ["ok",  "separate primary mode \`orch\` ready — XBGST default, judge-level godspeed"],
        ["out", "destination: \${XDG_CONFIG_HOME:-$HOME/.config}/opencode/agents"],
        ["warn", "note: xask on PATH required for cross-model delegation (not bundled)"],
      ],
    },
    cursor: {
      title: "ds4cc — cursor-agent (Few Good CLIs™)",
      lines: [
        ["cmd", "curl https://cursor.com/install -fsS | bash"],
        ["ok",  "cursor-agent on PATH"],
        ["cmd", "cursor-agent --version"],
        ["ok",  "Cursor Agent CLI ready"],
        ["cmd", "cursor-agent -p --trust --output-format text --model composer-2.5 -- \\"hello from ds4cc\\""],
        ["ok",  "oneshot print mode — headless agentic burn"],
        ["out", "Few Good CLIs™ seat: same surface as Cursor Ultra / cloud Agents"],
        ["warn", "no native marketplace protocol yet — clone ds4cc-marketplace or paste skills"],
      ],
    },
  };

  const termBody = document.getElementById("termBody");
  const termTitle = document.getElementById("termTitle");
  const tabs = Array.from(document.querySelectorAll(".host-tab"));
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let playToken = 0;

  function span(cls, text) {
    const s = document.createElement("span");
    if (cls) s.className = cls;
    s.textContent = text;
    return s;
  }

  async function play(host) {
    const my = ++playToken;
    const script = SCRIPTS[host];
    termTitle.textContent = script.title;
    termBody.innerHTML = "";

    for (const [type, text] of script.lines) {
      if (my !== playToken) return;
      const line = document.createElement("div");
      if (type === "cmd" || type === "tui") {
        line.className = "cmd";
        line.appendChild(span("ps1", type === "tui" ? "› " : "$ "));
        const typed = span("", "");
        const cur = document.createElement("span");
        cur.className = "cursor";
        line.appendChild(typed);
        line.appendChild(cur);
        termBody.appendChild(line);
        if (reduced) {
          typed.textContent = text;
        } else {
          for (let i = 0; i < text.length; i++) {
            if (my !== playToken) return;
            typed.textContent += text[i];
            await new Promise(r => setTimeout(r, text.length > 70 ? 8 : 16));
          }
        }
        cur.remove();
        await new Promise(r => setTimeout(r, reduced ? 0 : 260));
      } else {
        line.className = type;
        line.textContent = (type === "out" ? "  " : type === "ok" ? "✓ " : "! ") + text;
        termBody.appendChild(line);
        await new Promise(r => setTimeout(r, reduced ? 0 : 300));
      }
      if (my !== playToken) return;
    }
    const idle = document.createElement("div");
    idle.appendChild(span("ps1", "$ "));
    const cur = document.createElement("span");
    cur.className = "cursor";
    idle.appendChild(cur);
    termBody.appendChild(idle);
  }

  tabs.forEach((t) => {
    t.addEventListener("click", () => {
      tabs.forEach((x) => {
        x.classList.toggle("active", x === t);
      });
      play(t.dataset.host);
    });
  });
  play("grok");

  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) {
        en.target.classList.add("in");
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll(".reveal").forEach((el) => {
    io.observe(el);
  });
})();
<\/script>
</body>
</html>
`,Uk=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>XBGST for Codex — local-first distribution | DS4CC</title>
  <meta name="description" content="Install the ship-ready XBGST orchestration stack for Codex locally, inspect its WWKD and shared contracts, and use the standalone xask delegation planner." />
  <meta property="og:title" content="XBGST for Codex — local first" />
  <meta property="og:description" content="One-paste local install, WWKD planning, shared XBGST invariants, xask routing, and an optional visual planner." />
  <meta property="og:url" content="https://ds4cc.com/xbgst.html" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary" />
  <meta name="theme-color" content="#050605" />
  <link rel="canonical" href="https://ds4cc.com/xbgst.html" />
  <link rel="icon" type="image/svg+xml" href="burnerchrome/favicon.svg" />
  <style>
    @font-face {
      font-family: "JetBrainsMonoNL";
      src: url("assets/fonts/JetBrainsMonoNLNerdFontMono-Regular.woff2") format("woff2");
      font-weight: 400; font-style: normal; font-display: swap;
    }
    @font-face {
      font-family: "JetBrainsMonoNL";
      src: url("assets/fonts/JetBrainsMonoNLNerdFontMono-SemiBold.woff2") format("woff2");
      font-weight: 600; font-style: normal; font-display: swap;
    }
    @font-face {
      font-family: "JetBrainsMonoNL";
      src: url("assets/fonts/JetBrainsMonoNLNerdFontMono-Bold.woff2") format("woff2");
      font-weight: 700; font-style: normal; font-display: swap;
    }

    :root {
      --bg: #050605;
      --panel: #0d100d;
      --panel-2: #121612;
      --fg: #e8f0e6;
      --body: #c5d0c3;
      --muted: #7a8a78;
      --green: #51ff00;
      --amber: #ffb020;
      --cyan: #3de0ff;
      --border: #1e281e;
      --border-2: #2a332a;
      --code: #b8f5a0;
      --font: "JetBrainsMonoNL", "JetBrains Mono", ui-monospace, Menlo, Consolas, monospace;
    }

    * { box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body {
      margin: 0;
      min-height: 100vh;
      background:
        linear-gradient(rgba(81, 255, 0, .025) 1px, transparent 1px),
        linear-gradient(90deg, rgba(81, 255, 0, .02) 1px, transparent 1px),
        var(--bg);
      background-size: 48px 48px;
      color: var(--fg);
      font-family: var(--font);
      -webkit-font-smoothing: antialiased;
    }
    ::selection { background: var(--green); color: #000; }
    a { color: var(--green); text-decoration: none; }
    a:hover { text-decoration: underline; }
    code { color: var(--code); font-family: inherit; }
    :focus-visible { outline: 2px solid var(--green); outline-offset: 3px; }
    .skip {
      position: fixed; top: 8px; left: 8px; z-index: 100;
      transform: translateY(-160%); padding: 8px 12px;
      background: var(--green); color: #000; border-radius: 4px;
    }
    .skip:focus { transform: none; }

    nav {
      position: sticky; top: 0; z-index: 20;
      border-bottom: 1px solid var(--border);
      background: rgba(5, 6, 5, .94);
      backdrop-filter: blur(12px);
    }
    .nav-inner {
      width: min(1120px, calc(100% - 32px)); margin: 0 auto;
      display: flex; align-items: center; gap: 20px; padding: 11px 0;
    }
    .brand { color: var(--fg); font-weight: 700; letter-spacing: .06em; }
    .brand:hover { text-decoration: none; }
    .brand b { color: var(--green); text-shadow: 0 0 12px rgba(81,255,0,.35); }
    .brand span { color: var(--muted); font-weight: 400; }
    .nav-links { margin-left: auto; display: flex; align-items: center; gap: 16px; }
    .nav-links a { color: var(--muted); font-size: .78rem; }
    .nav-links a:hover { color: var(--green); text-decoration: none; }
    .nav-links .back { color: var(--green); border: 1px solid var(--green); border-radius: 4px; padding: 5px 9px; }

    main, footer { width: min(1120px, calc(100% - 32px)); margin: 0 auto; }
    .hero { padding: 58px 0 32px; }
    .badges { display: flex; flex-wrap: wrap; gap: 7px; margin-bottom: 18px; }
    .badge {
      display: inline-flex; align-items: center; gap: 7px;
      border: 1px solid var(--border-2); background: #000;
      color: var(--muted); padding: 4px 8px; font-size: .68rem;
      text-transform: uppercase; letter-spacing: .06em;
    }
    .badge.primary { color: #000; background: var(--green); border-color: var(--green); font-weight: 700; }
    .badge.optional { color: var(--amber); border-color: var(--amber); }
    .dot { width: 7px; height: 7px; border-radius: 50%; background: var(--green); box-shadow: 0 0 8px var(--green); }
    h1 {
      max-width: 940px; margin: 0 0 15px;
      font-size: clamp(2rem, 7vw, 4.8rem); line-height: .98;
      letter-spacing: -.055em; font-weight: 600;
    }
    h1 em { color: var(--green); font-style: normal; text-shadow: 0 0 32px rgba(81,255,0,.2); }
    .lede { max-width: 850px; color: var(--body); font-size: clamp(.95rem, 2vw, 1.08rem); line-height: 1.7; }
    .install-box {
      margin-top: 28px; border: 1px solid var(--border-2); border-left: 3px solid var(--green);
      background: rgba(8, 10, 8, .96); border-radius: 7px; overflow: hidden;
    }
    .install-label {
      display: flex; align-items: center; justify-content: space-between; gap: 12px;
      padding: 8px 12px; border-bottom: 1px solid var(--border);
      color: var(--muted); font-size: .7rem; text-transform: uppercase; letter-spacing: .07em;
    }
    .install-row { display: flex; align-items: stretch; }
    .install-row pre {
      flex: 1; margin: 0; padding: 15px; overflow-x: auto;
      color: var(--code); font: .82rem/1.55 var(--font); white-space: pre;
    }
    .prompt { color: var(--cyan); }
    .copy {
      min-width: 92px; border: 0; border-left: 1px solid var(--border);
      background: #000; color: var(--green); font: 700 .74rem var(--font);
      letter-spacing: .05em; cursor: pointer;
    }
    .copy:hover { background: rgba(81,255,0,.1); }
    .copy.done { background: var(--green); color: #000; }
    .actions { display: flex; gap: 10px; flex-wrap: wrap; margin-top: 16px; }
    .btn {
      display: inline-block; border: 1px solid var(--green); border-radius: 4px;
      background: #000; color: var(--green); padding: 9px 14px;
      font-size: .79rem; letter-spacing: .03em;
    }
    .btn:hover { background: rgba(81,255,0,.1); text-decoration: none; }
    .btn.primary { background: var(--green); color: #000; font-weight: 700; }

    section { padding: 28px 0; border-top: 1px solid var(--border); scroll-margin-top: 60px; }
    .section-head { display: grid; grid-template-columns: 48px 1fr; gap: 10px; margin-bottom: 17px; }
    .idx { color: var(--muted); font-size: .8rem; padding-top: 4px; }
    h2 { margin: 0; color: var(--green); font-size: clamp(1.15rem, 3vw, 1.55rem); letter-spacing: -.02em; }
    .sub { color: var(--muted); line-height: 1.6; margin: 6px 0 0; font-size: .88rem; max-width: 820px; }
    .grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 13px; }
    .grid.four { grid-template-columns: repeat(4, minmax(0, 1fr)); }
    .card {
      background: rgba(13, 16, 13, .96); border: 1px solid var(--border); border-radius: 7px;
      padding: 16px; min-width: 0;
    }
    .card.feature { border-color: var(--green); box-shadow: 0 0 28px rgba(81,255,0,.04); }
    .card h3 { margin: 0 0 8px; color: var(--fg); font-size: .93rem; }
    .card p, .card li { color: var(--body); font-size: .83rem; line-height: 1.6; }
    .card p:last-child { margin-bottom: 0; }
    .card ul { padding-left: 18px; margin-bottom: 0; }
    .kicker { color: var(--green); font-size: .67rem; text-transform: uppercase; letter-spacing: .08em; margin-bottom: 10px; }
    .callout {
      margin-top: 14px; padding: 13px 15px; border-left: 3px solid var(--amber);
      background: #14100a; color: var(--body); font-size: .84rem; line-height: 1.6;
    }
    .callout strong { color: var(--amber); }
    .terminal {
      background: #080a08; border: 1px solid var(--border-2); border-radius: 8px; overflow: hidden;
    }
    .terminal-bar {
      padding: 8px 12px; background: var(--panel-2); border-bottom: 1px solid var(--border);
      color: var(--muted); font-size: .7rem;
    }
    .terminal pre {
      margin: 0; padding: 16px; overflow-x: auto; color: var(--body);
      font: .81rem/1.7 var(--font);
    }
    .ok { color: var(--green); }
    .muted { color: var(--muted); }
    .table-wrap { overflow-x: auto; border: 1px solid var(--border); border-radius: 7px; }
    table { width: 100%; min-width: 720px; border-collapse: collapse; background: rgba(13,16,13,.96); font-size: .8rem; }
    th, td { padding: 11px 12px; text-align: left; border-bottom: 1px solid var(--border); vertical-align: top; }
    th { color: var(--muted); font-weight: 400; text-transform: uppercase; letter-spacing: .06em; font-size: .68rem; }
    td { color: var(--body); line-height: 1.5; }
    tr:last-child td { border-bottom: 0; }
    .status { color: var(--green); }
    .status.opt { color: var(--amber); }

    footer { margin-top: 24px; border-top: 1px solid var(--border); padding: 22px 0 64px; color: var(--muted); font-size: .76rem; line-height: 1.8; }
    footer .footer-row { display: flex; align-items: flex-start; justify-content: space-between; gap: 20px; flex-wrap: wrap; }
    footer a { margin-right: 12px; }

    @media (max-width: 860px) {
      .grid.four { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    }
    @media (max-width: 680px) {
      .nav-links a:not(.back) { display: none; }
      .grid, .grid.four { grid-template-columns: 1fr; }
      .install-row { flex-direction: column; }
      .copy { min-height: 42px; border-left: 0; border-top: 1px solid var(--border); }
      h1 { letter-spacing: -.04em; }
    }
    @media (prefers-reduced-motion: reduce) {
      html { scroll-behavior: auto; }
    }
  </style>
</head>
<body>
  <a class="skip" href="#content">Skip to content</a>
  <nav aria-label="Primary navigation">
    <div class="nav-inner">
      <a class="brand" href="./"><b>DS4CC</b> <span>// xbgst</span></a>
      <div class="nav-links">
        <a href="#install">install</a>
        <a href="#stack">stack</a>
        <a href="#planner">planner</a>
        <a href="#distribution">distribution</a>
        <a class="back" href="./">marketplace →</a>
      </div>
    </div>
  </nav>

  <main id="content">
    <header class="hero">
      <div class="badges">
        <span class="badge primary"><span class="dot" aria-hidden="true"></span>ship-ready</span>
        <span class="badge">raw local install</span>
        <span class="badge">Codex package</span>
        <span class="badge optional">MCP opt-in only</span>
      </div>
      <h1>The XBGST stack, <em>refined for Codex.</em></h1>
      <p class="lede">DS4CC is the distribution shelf: once an artifact survives review and is ready to ship, it lands here to install, inspect, or read. XBGST stays local-first—native Codex orchestration, WWKD planning, a shared execution contract, and <code>xask</code> at the shell boundary.</p>

      <div class="install-box" id="install">
        <div class="install-label">
          <span>one paste · raw local Codex install</span>
          <span>reviewable source</span>
        </div>
        <div class="install-row">
          <pre><span class="prompt">$</span> curl -fsSL https://raw.githubusercontent.com/VeigaPunk/grok-marketplace/main/scripts/install-xbgst-codex.sh | bash</pre>
          <button class="copy" type="button" data-copy aria-label="Copy the XBGST for Codex install command">COPY</button>
        </div>
      </div>
      <div class="actions">
        <a class="btn primary" href="./burnerchrome/delegate.html">OPEN DELEGATION PLANNER →</a>
        <a class="btn" href="https://github.com/VeigaPunk/grok-marketplace/blob/main/scripts/install-xbgst-codex.sh" target="_blank" rel="noopener">REVIEW INSTALLER ↗</a>
        <a class="btn" href="https://github.com/VeigaPunk/grok-marketplace/tree/main/plugins/xbgst-codex" target="_blank" rel="noopener">INSPECT PACKAGE ↗</a>
      </div>
      <div class="callout">
        <strong>Boundary:</strong> this is a local Codex marketplace package. It does not require an MCP bridge, and it is not a claim that XBGST has been published in the public ChatGPT app directory.
      </div>
    </header>

    <section aria-labelledby="contract-heading">
      <div class="section-head">
        <span class="idx">01</span>
        <div>
          <h2 id="contract-heading">The DS4CC distribution contract</h2>
          <p class="sub">A marketplace is useful when it is a release surface, not a junk drawer. DS4CC carries artifacts only after the install path, scope, and claims are coherent.</p>
        </div>
      </div>
      <div class="grid four">
        <article class="card feature">
          <div class="kicker">primary</div>
          <h3>Install locally</h3>
          <p>The shortest supported path is a plain script plus native host commands. You keep the package and its behavior inspectable on your machine.</p>
        </article>
        <article class="card">
          <div class="kicker">gate</div>
          <h3>Ship only when ready</h3>
          <p>Refine in the source repo, validate the package, then promote it to DS4CC for stable installation and discovery.</p>
        </article>
        <article class="card">
          <div class="kicker">read</div>
          <h3>Serve the thinking</h3>
          <p>Operator notes, architecture takes, compatibility boundaries, and anti-patterns live beside the install instead of disappearing into chat history.</p>
        </article>
        <article class="card">
          <div class="kicker">anti-bloat</div>
          <h3>Adapters earn their place</h3>
          <p>Optional bridges stay named, bounded, and off the critical path. A local workflow must not depend on an integration merely because one exists.</p>
        </article>
      </div>
    </section>

    <section aria-labelledby="install-heading">
      <div class="section-head">
        <span class="idx">02</span>
        <div>
          <h2 id="install-heading">What the one-paste path does</h2>
          <p class="sub">The installer uses Codex's marketplace commands, verifies the result, and leaves your auth, model, effort, and concurrency choices alone.</p>
        </div>
      </div>
      <div class="grid">
        <div class="terminal" aria-label="Representative local install flow">
          <div class="terminal-bar">xbgst-codex · local package install</div>
          <pre><span class="prompt">$</span> install-xbgst-codex.sh
<span class="muted">→</span> register or refresh VeigaPunk/grok-marketplace
<span class="muted">→</span> install xbgst-codex from that marketplace
<span class="muted">→</span> verify the package is installed and enabled
<span class="ok">✓</span> start a new Codex task to load the skills</pre>
        </div>
        <article class="card">
          <h3>It deliberately does not</h3>
          <ul>
            <li>directly rewrite <code>~/.codex/config.toml</code> or host concurrency;</li>
            <li>touch authentication or API keys;</li>
            <li>silently choose your default model or reasoning effort;</li>
            <li>require the optional MCP companion.</li>
          </ul>
          <p>Prerequisites are Codex CLI with plugin marketplace support, Git, Cargo/Rust, and <code>jq</code>; Node.js is needed only for the explicit MCP opt-in. Review the linked script before piping it into a shell if that is your policy.</p>
        </article>
      </div>
    </section>

    <section id="stack" aria-labelledby="stack-heading">
      <div class="section-head">
        <span class="idx">03</span>
        <div>
          <h2 id="stack-heading">Two key figures, one local protocol</h2>
          <p class="sub"><code>wwkd</code> decides the shape of the work. <code>xbgst-shared</code> holds the invariants. The host adaptation preserves that center instead of copying Grok-only wiring.</p>
        </div>
      </div>
      <div class="grid">
        <article class="card feature">
          <div class="kicker">planning kernel</div>
          <h3>WWKD</h3>
          <p>The canonical directive runs before fan-out: clarify the objective, expose uncertainty, choose the smallest useful team, and define how the result will be judged.</p>
        </article>
        <article class="card feature">
          <div class="kicker">shared contract</div>
          <h3>xbgst-shared</h3>
          <p>The Codex-adapted shared reference carries round structure, connector coverage, bounded proposal loops, flat delegation, and judge/integrator/shipper responsibilities.</p>
        </article>
        <article class="card">
          <div class="kicker">routing protocol</div>
          <h3>xask CLI</h3>
          <p>Provider, model, substrate, effort, service tier, and Godspeed become an explicit shell plan. Cross-provider work is consultation; native Codex agents own source changes.</p>
        </article>
        <article class="card">
          <div class="kicker">execution host</div>
          <h3>Native Codex delegation</h3>
          <p>Codex runs the implementation team with its own permissions and user authorization. Host safety rules remain stronger than any imported orchestration convention.</p>
        </article>
      </div>
    </section>

    <section id="planner" aria-labelledby="planner-heading">
      <div class="section-head">
        <span class="idx">04</span>
        <div>
          <h2 id="planner-heading">Visual delegation is a planner, not a bridge</h2>
          <p class="sub">The Burnerchrome-style artifact makes the model catalog legible without moving execution into the browser.</p>
        </div>
      </div>
      <div class="grid">
        <article class="card feature">
          <div class="kicker">standalone · copy only</div>
          <h3>Choose the mind. Set the burn.</h3>
          <p>Toggle provider, model, stock or Sekhmet substrate, compatible effort, and service tier. Canonical Godspeed is an invariant: every delegated task ends exactly once with <code>| godspeed</code>. The result is a shell-safe <code>xask plan</code> command to copy and inspect.</p>
          <p><a class="btn primary" href="./burnerchrome/delegate.html">OPEN THE PLANNER →</a></p>
        </article>
        <article class="card">
          <h3>Browser boundary</h3>
          <ul>
            <li>does not invoke your local CLI;</li>
            <li>does not dispatch the task;</li>
            <li>does not transmit provider credentials;</li>
            <li>reads the normalized model catalog served with DS4CC.</li>
          </ul>
        </article>
      </div>
    </section>

    <section aria-labelledby="paths-heading">
      <div class="section-head">
        <span class="idx">05</span>
        <div>
          <h2 id="paths-heading">Path priority is explicit</h2>
          <p class="sub">The stack stays understandable because each surface has one job and optional layers cannot impersonate the default.</p>
        </div>
      </div>
      <div class="table-wrap" tabindex="0" aria-label="Scrollable XBGST distribution path comparison">
        <table>
          <thead>
            <tr><th scope="col">Surface</th><th scope="col">Posture</th><th scope="col">Job</th><th scope="col">Boundary</th></tr>
          </thead>
          <tbody>
            <tr><td>Codex package</td><td class="status">Primary</td><td>Install WWKD, XBGST orchestration, and shared references locally.</td><td>Native Codex plugin commands.</td></tr>
            <tr><td>xask CLI</td><td class="status">Primary when routing</td><td>Resolve and dispatch explicit provider/model/effort choices.</td><td>Local shell; provider access remains yours.</td></tr>
            <tr><td>Visual planner</td><td class="status">Primary UI</td><td>Compose a dry, copyable plan from the exported catalog.</td><td>Static browser surface; no dispatch.</td></tr>
            <tr><td>MCP companion</td><td class="status opt">Optional</td><td>Expose a bounded adapter where an MCP-aware host is intentionally desired.</td><td>Separate opt-in; never a local install dependency.</td></tr>
            <tr><td>Public ChatGPT directory</td><td class="muted">Not claimed</td><td>Would require deployed HTTPS infrastructure, publisher verification, review, and publication.</td><td>External release gate, not part of this local package.</td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <section id="distribution" aria-labelledby="distribution-heading">
      <div class="section-head">
        <span class="idx">06</span>
        <div>
          <h2 id="distribution-heading">From refined artifact to DS4CC</h2>
          <p class="sub">This site is the final distribution step and the durable reading surface—not the lab where half-formed integrations become defaults.</p>
        </div>
      </div>
      <div class="terminal" aria-label="DS4CC release lifecycle">
        <div class="terminal-bar">release lifecycle · simple on purpose</div>
        <pre><span class="muted">source repo</span>  →  refine + validate  →  <span class="ok">ship-ready</span>  →  publish on ds4cc.com
     │                                             │
     └── implementation history                    ├── one-paste install
                                                   ├── source + boundaries
                                                   ├── visual artifacts
                                                   └── operator takes</pre>
      </div>
      <div class="callout">
        <strong>Anti-bloat release rule:</strong> serving an optional adapter does not make it part of the default stack. Its opt-in status must stay visible in the installer, docs, and site copy.
      </div>
    </section>
  </main>

  <footer>
    <div class="footer-row">
      <div>
        <strong style="color:var(--body)">DS4CC · XBGST distribution</strong><br />
        Raw local installs first. Optional bridges stay optional.
      </div>
      <div>
        <a href="./">marketplace</a>
        <a href="./burnerchrome/delegate.html">planner</a>
        <a href="./docs/MCP-STANCE.md">MCP stance</a>
        <a href="https://github.com/VeigaPunk/grok-marketplace" target="_blank" rel="noopener">source ↗</a>
      </div>
    </div>
  </footer>

  <script>
    (function () {
      "use strict";
      const command = "curl -fsSL https://raw.githubusercontent.com/VeigaPunk/grok-marketplace/main/scripts/install-xbgst-codex.sh | bash";
      const button = document.querySelector("[data-copy]");
      if (!button) return;
      button.addEventListener("click", async function () {
        try {
          await navigator.clipboard.writeText(command);
          button.textContent = "COPIED";
          button.classList.add("done");
          window.setTimeout(function () {
            button.textContent = "COPY";
            button.classList.remove("done");
          }, 1800);
        } catch (_) {
          button.textContent = "SELECT";
          const range = document.createRange();
          range.selectNodeContents(document.querySelector(".install-row pre"));
          const selection = window.getSelection();
          selection.removeAllRanges();
          selection.addRange(range);
        }
      });
    }());
  <\/script>
</body>
</html>
`,Bk=`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Exa.ai — the real deal · DS4CC</title>
<meta name="description" content="Exa.ai: the research product we actually praise. Titanium CLIs stay no-MCP." />
<style>
@font-face {
  font-family: "JetBrainsMonoNL";
  src: url("assets/fonts/JetBrainsMonoNLNerdFontMono-Regular.woff2") format("woff2");
  font-weight: 400; font-style: normal; font-display: swap;
}
@font-face {
  font-family: "JetBrainsMonoNL";
  src: url("assets/fonts/JetBrainsMonoNLNerdFontMono-Medium.woff2") format("woff2");
  font-weight: 500; font-style: normal; font-display: swap;
}
@font-face {
  font-family: "JetBrainsMonoNL";
  src: url("assets/fonts/JetBrainsMonoNLNerdFontMono-SemiBold.woff2") format("woff2");
  font-weight: 600; font-style: normal; font-display: swap;
}
@font-face {
  font-family: "JetBrainsMonoNL";
  src: url("assets/fonts/JetBrainsMonoNLNerdFontMono-Bold.woff2") format("woff2");
  font-weight: 700; font-style: normal; font-display: swap;
}
@font-face {
  font-family: "JetBrainsMonoNL";
  src: url("assets/fonts/JetBrainsMonoNLNerdFontMono-ExtraBold.woff2") format("woff2");
  font-weight: 800; font-style: normal; font-display: swap;
}

:root {
  --bg: #050605;
  --panel: #0d100d;
  --panel2: #121612;
  --fg: #e8f0e6;
  --body: #c5d0c3;
  --muted: #7a8a78;
  --green: #51ff00;
  --green-dim: #38b000;
  --amber: #ffb020;
  --red: #ff3b30;
  --cyan: #3de0ff;
  --border: #1e281e;
  --border2: #2a332a;
  --rule: #1a201a;
  --code: #b8f5a0;
  --font: "JetBrainsMonoNL", "JetBrainsMono Nerd Font", "JetBrains Mono", ui-monospace, Menlo, Consolas, monospace;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
html, body {
  margin: 0; padding: 0;
  background: var(--bg);
  color: var(--fg);
  font-family: var(--font);
  min-height: 100%;
  -webkit-font-smoothing: antialiased;
}
::selection { background: var(--green); color: #000; }
a { color: var(--green); text-decoration: none; }
a:hover { text-decoration: underline; }
code { color: var(--code); }
:focus-visible { outline: 2px solid var(--green); outline-offset: 2px; }

.page { max-width: 1120px; margin: 0 auto; padding: 0 16px 90px; }

/* ---------- nav ---------- */
nav {
  position: sticky; top: 0; z-index: 50;
  background: color-mix(in srgb, var(--bg) 92%, transparent);
  border-bottom: 1px solid var(--rule);
  backdrop-filter: blur(10px);
}
.nav-inner {
  max-width: 1120px; margin: 0 auto; padding: 10px 16px;
  display: flex; align-items: center; gap: 18px; flex-wrap: wrap;
}
.brand { font-weight: 700; letter-spacing: 0.06em; font-size: 0.95rem; color: var(--fg); text-decoration: none; }
.brand:hover { text-decoration: none; }
.brand b { color: var(--green); text-shadow: 0 0 12px rgba(81,255,0,0.35); }
.brand span { color: var(--muted); font-weight: 400; }
.nav-links { display: flex; gap: 14px; flex-wrap: wrap; margin-left: auto; align-items: center; }
.nav-links a { color: var(--muted); font-size: 0.8rem; letter-spacing: 0.04em; }
.nav-links a:hover { color: var(--green); text-decoration: none; }
.nav-cta {
  background: #000; color: var(--green); border: 1px solid var(--green);
  padding: 5px 10px; font-size: 0.78rem; border-radius: 4px;
}
.nav-cta:hover { background: #51ff0022; text-decoration: none; }
.nav-toggle {
  display: none; margin-left: auto;
  background: #000; color: var(--muted); border: 1px solid var(--border2);
  border-radius: 4px; padding: 6px 10px; font-family: inherit; font-size: 0.78rem;
}
.nav-toggle:hover { color: var(--green); border-color: var(--green); }
@media (max-width: 720px) {
  .nav-toggle { display: block; }
  .nav-links {
    display: none; width: 100%; flex-direction: column; align-items: flex-start;
    gap: 8px; padding: 8px 0 4px; border-top: 1px solid var(--rule); margin-top: 6px;
  }
  .nav-links.open { display: flex; }
  .nav-links a { font-size: 0.9rem; padding: 4px 0; }
  .nav-inner { flex-wrap: wrap; }
}

/* ---------- shared ---------- */
.badge {
  display: inline-block;
  background: var(--green); color: #000;
  font-weight: 700; font-size: 0.68rem;
  padding: 3px 8px; margin: 0 6px 6px 0;
  letter-spacing: 0.04em;
}
.badge.dark { background: #000; color: var(--green); border: 1px solid var(--green); }
.badge.cyan { background: #000; color: var(--cyan); border: 1px solid var(--cyan); }
section {
  margin: 34px 0; border-top: 1px solid var(--rule);
  padding-top: 22px; scroll-margin-top: 70px;
}
h2 {
  font-size: 1.05rem; margin: 0 0 6px; color: var(--green);
  letter-spacing: 0.03em; text-shadow: 0 0 18px rgba(81,255,0,0.18);
}
h2 .idx { color: var(--muted); font-weight: 400; margin-right: 8px; }
.sub { color: var(--muted); font-size: 0.88rem; margin: 0 0 16px; line-height: 1.55; }
p, li { line-height: 1.55; font-size: 0.92rem; color: var(--body); }
.callout {
  border-left: 3px solid var(--green); background: #0d140d;
  padding: 12px 14px; margin: 14px 0;
}
.callout.amber { border-left-color: var(--amber); background: #14100a; }
.callout.red { border-left-color: var(--red); background: #140d0d; }
.panel {
  background: var(--panel); border: 1px solid var(--border); border-radius: 8px;
}
pre {
  background: #080a08; border: 1px solid var(--border); border-radius: 6px;
  padding: 12px 14px; overflow-x: auto; font-size: 0.82rem; line-height: 1.6;
  color: var(--body); margin: 10px 0; font-family: var(--font);
}
pre .c { color: var(--muted); }
pre .p { color: var(--cyan); }
pre .g { color: var(--green); }
table.spec { width: 100%; border-collapse: collapse; font-size: 0.85rem; }
table.spec th, table.spec td {
  text-align: left; padding: 8px 10px; border-bottom: 1px solid var(--rule); vertical-align: top;
}
table.spec th { color: var(--muted); font-weight: 500; width: 30%; }
.btn {
  display: inline-block; background: #000; color: var(--green);
  border: 1px solid var(--green); border-radius: 4px;
  padding: 8px 14px; font-family: inherit; font-size: 0.82rem; cursor: pointer;
  letter-spacing: 0.03em;
}
.btn:hover { background: #51ff0022; text-decoration: none; }
.btn:active { background: var(--green); color: #000; }
.btn.solid { background: var(--green); color: #000; font-weight: 700; }
.btn.solid:hover { background: #6bff2e; }
.btn.small { padding: 4px 9px; font-size: 0.72rem; }
.chip {
  display: inline-flex; align-items: center; gap: 8px;
  background: rgba(0,0,0,.55); border: 1px solid var(--border2); border-radius: 4px;
  padding: 6px 10px; font-size: 0.74rem; letter-spacing: 0.06em; text-transform: uppercase;
  color: var(--body);
}
.chip .dot {
  width: 8px; height: 8px; border-radius: 50%;
  background: var(--green); box-shadow: 0 0 8px var(--green);
}
.chip.amber .dot { background: var(--amber); box-shadow: 0 0 8px var(--amber); }

/* ---------- hero ---------- */
header.hero { padding: 34px 0 8px; }
.ascii {
  font-size: clamp(6px, 1.55vw, 13px);
  line-height: 1.15;
  color: var(--green);
  text-shadow: 0 0 14px rgba(81,255,0,0.35);
  background: none; border: none; padding: 0; margin: 14px 0 6px;
  overflow: visible; white-space: pre;
  font-family: var(--font);
}
.hero h1 {
  font-size: clamp(1.25rem, 3.2vw, 1.9rem);
  font-weight: 600; letter-spacing: 0.02em; margin: 10px 0 8px;
}
.hero h1 em { color: var(--green); font-style: normal; text-shadow: 0 0 16px rgba(81,255,0,0.25); }
.tagline { color: var(--muted); font-size: 0.95rem; margin: 0 0 18px; max-width: 760px; line-height: 1.55; }
.hero-row { display: flex; gap: 10px; flex-wrap: wrap; align-items: center; margin: 14px 0 8px; }
.oneliner {
  display: flex; align-items: stretch; gap: 0; max-width: 100%;
  border: 1px solid var(--border2); border-radius: 6px; overflow: hidden;
  background: #080a08;
}
.oneliner code {
  padding: 10px 14px; font-size: 0.82rem; color: var(--code);
  overflow-x: auto; white-space: nowrap; font-family: var(--font);
}
.oneliner .p { color: var(--cyan); }
.copy-btn {
  background: #000; color: var(--green); border: none; border-left: 1px solid var(--border2);
  font-family: inherit; font-size: 0.72rem; padding: 0 14px; cursor: pointer; letter-spacing: 0.05em;
  white-space: nowrap;
}
.copy-btn:hover { background: #51ff0022; }
.copy-btn.done { background: var(--green); color: #000; font-weight: 700; }

/* ---------- terminal device ---------- */
.term-wrap { display: flex; flex-direction: column; align-items: center; gap: 12px; }
.term {
  width: min(100%, 780px);
  background: #0a0d0a; border: 2px solid var(--border2); border-radius: 10px;
  overflow: hidden; box-shadow: 0 0 0 6px #070807, 0 24px 60px rgba(0,0,0,.55), 0 0 40px rgba(81,255,0,0.06);
}
.term-bar {
  display: flex; align-items: center; gap: 8px;
  background: var(--panel2); border-bottom: 1px solid var(--border2);
  padding: 8px 12px; font-size: 0.72rem; color: var(--muted); letter-spacing: 0.05em;
}
.term-bar .sq { width: 9px; height: 9px; }
.term-bar .sq.r { background: var(--red); }
.term-bar .sq.a { background: var(--amber); }
.term-bar .sq.g { background: var(--green); box-shadow: 0 0 6px var(--green); }
.term-bar .title { margin-left: 8px; }
.term-body {
  padding: 16px; min-height: 300px; font-size: 0.82rem; line-height: 1.7;
  color: var(--body); white-space: pre-wrap; word-break: break-word;
  font-family: var(--font);
}
.term-body .cmd { color: var(--fg); }
.term-body .cmd .ps1 { color: var(--cyan); }
.term-body .out { color: var(--muted); }
.term-body .ok { color: var(--green); }
.term-body .warn { color: var(--amber); }
.cursor {
  display: inline-block; width: 8px; height: 14px; background: var(--green);
  vertical-align: -2px; animation: blink 1s steps(1) infinite;
  box-shadow: 0 0 8px var(--green);
}
@keyframes blink { 50% { opacity: 0; } }
.host-tabs { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; }
.host-tab {
  background: #000; color: var(--green); border: 1px solid var(--green); border-radius: 4px;
  padding: 6px 12px; font-family: inherit; font-size: 0.78rem; cursor: pointer; letter-spacing: 0.03em;
}
.host-tab:hover { background: #51ff0022; }
.host-tab.active { background: var(--green); color: #000; font-weight: 700; box-shadow: 0 0 14px rgba(81,255,0,0.35); }
.term-note { font-size: 0.74rem; color: var(--muted); text-align: center; margin: 0; }

/* ---------- plugin grid ---------- */
.grid-tools { display: flex; gap: 10px; align-items: center; flex-wrap: wrap; margin-bottom: 14px; }
.filter {
  flex: 1; min-width: 220px;
  background: #080a08; border: 1px solid var(--border2); border-radius: 6px;
  color: var(--fg); font-family: inherit; font-size: 0.85rem; padding: 9px 12px;
}
.filter::placeholder { color: var(--muted); }
.filter:focus { outline: none; border-color: var(--green); box-shadow: 0 0 0 1px rgba(81,255,0,0.25); }
.count { color: var(--muted); font-size: 0.78rem; letter-spacing: 0.05em; }
.cat-chips {
  display: flex; flex-wrap: wrap; gap: 6px; margin: 0 0 14px;
}
.cat-chip {
  background: #000; color: var(--muted); border: 1px solid var(--border2);
  border-radius: 999px; padding: 4px 10px; font-family: inherit; font-size: 0.72rem;
  letter-spacing: 0.04em; text-transform: lowercase; cursor: pointer;
}
.cat-chip:hover { color: var(--green); border-color: var(--green); }
.cat-chip.active {
  background: var(--green); color: #000; border-color: var(--green); font-weight: 700;
  box-shadow: 0 0 10px rgba(81,255,0,0.25);
}
.plugins { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
@media (max-width: 940px) { .plugins { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 620px) { .plugins { grid-template-columns: 1fr; } }
.plug {
  background: var(--panel); border: 1px solid var(--border); border-left: 3px solid var(--border2);
  border-radius: 6px; padding: 12px 14px; display: flex; flex-direction: column; gap: 8px;
  transition: border-color 160ms linear, transform 160ms linear, box-shadow 160ms linear;
}
.plug:hover {
  border-left-color: var(--green); transform: translateY(-2px);
  box-shadow: 0 0 20px rgba(81,255,0,0.08);
}
.plug-head { display: flex; align-items: baseline; gap: 8px; flex-wrap: wrap; }
.plug-name { color: var(--green); font-weight: 700; font-size: 0.92rem; letter-spacing: 0.02em; }
.plug-ver {
  color: var(--muted); font-size: 0.68rem; border: 1px solid var(--border2);
  padding: 1px 6px; border-radius: 3px;
}
.plug-cat {
  margin-left: auto; color: var(--muted); font-size: 0.68rem;
  text-transform: uppercase; letter-spacing: 0.08em;
}
.plug-desc { font-size: 0.82rem; color: var(--body); line-height: 1.5; margin: 0; flex: 1; }
.plug-cmd {
  font-size: 0.72rem; color: var(--code); background: #080a08;
  border: 1px solid var(--border); border-radius: 4px; padding: 6px 8px;
  overflow-x: auto; white-space: nowrap; font-family: var(--font);
}
.plug-foot { display: flex; gap: 8px; align-items: center; flex-wrap: wrap; }
.plug-src { margin-left: auto; font-size: 0.74rem; color: var(--muted); }
.plug-src:hover { color: var(--green); }

/* ---------- install panels ---------- */
.hosts { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
@media (max-width: 860px) { .hosts { grid-template-columns: 1fr; } }
.host {
  background: var(--panel); border: 1px solid var(--border); border-radius: 8px; padding: 14px 16px;
}
.host h3 {
  margin: 0 0 4px; font-size: 0.95rem; color: var(--fg);
  display: flex; align-items: center; gap: 10px; flex-wrap: wrap;
}
.host h3 .tag {
  font-size: 0.66rem; color: var(--cyan); border: 1px solid var(--cyan);
  padding: 1px 6px; border-radius: 3px; letter-spacing: 0.06em;
}
.host .note { font-size: 0.78rem; color: var(--muted); margin: 6px 0 0; line-height: 1.55; }
.host pre { position: relative; }
.host .copy-btn {
  position: absolute; top: 8px; right: 8px; padding: 4px 10px;
  border: 1px solid var(--border2); border-radius: 4px;
}

/* ---------- app / validator ---------- */
.grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
@media (max-width: 860px) { .grid-2 { grid-template-columns: 1fr; } }
.kv { display: flex; flex-wrap: wrap; gap: 8px; margin: 10px 0; }
.ok-chip {
  font-size: 0.72rem; color: var(--green); border: 1px solid var(--green);
  border-radius: 3px; padding: 3px 8px; letter-spacing: 0.04em; background: #000;
}
ol.gate { margin: 8px 0; padding-left: 22px; }
ol.gate li { margin: 6px 0; }
ol.gate li b { color: var(--fg); }

/* ---------- footer ---------- */
footer {
  margin-top: 44px; color: var(--muted); font-size: 0.78rem;
  border-top: 1px solid var(--rule); padding-top: 16px; line-height: 1.8;
}
footer .cols { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; margin-bottom: 12px; }
@media (max-width: 900px) { footer .cols { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 520px) { footer .cols { grid-template-columns: 1fr; } }
footer b { color: var(--body); display: block; margin-bottom: 4px; font-size: 0.8rem; }

/* ---------- reveal ---------- */
.js .reveal { opacity: 0; transform: translateY(12px); transition: opacity 420ms ease, transform 420ms ease; }
.js .reveal.in { opacity: 1; transform: none; }
@media (prefers-reduced-motion: reduce) {
  .js .reveal { opacity: 1; transform: none; transition: none; }
  html { scroll-behavior: auto; }
  .cursor { animation: none; }
}
</style>
<style>
  .page-exa { max-width: 820px; margin: 0 auto; padding: 48px 20px 80px; }
  .page-exa h1 { font-size: 1.85rem; letter-spacing: -0.03em; margin: 12px 0 8px; }
  .page-exa .lead { color: var(--muted); font-size: 1.05rem; line-height: 1.55; margin-bottom: 28px; }
  .policy-box {
    border: 1px solid #ff3b3b55; background: #ff3b3b0d; border-radius: 10px;
    padding: 14px 16px; margin: 20px 0; font-size: 0.9rem; line-height: 1.5;
  }
  .policy-box strong { color: #ff8a8a; }
  .praise-box {
    border: 1px solid #51ff0033; background: #51ff000c; border-radius: 10px;
    padding: 16px 18px; margin: 20px 0; font-size: 0.95rem; line-height: 1.55;
  }
  .praise-box strong { color: var(--green); }
  .split { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 24px; }
  @media (max-width: 720px) { .split { grid-template-columns: 1fr; } }
  .card {
    border: 1px solid var(--border, #1f2a36); border-radius: 12px; padding: 16px 18px;
    background: #0c1118;
  }
  .card h2 { font-size: 0.95rem; margin: 0 0 10px; }
  .card ul { margin: 0; padding-left: 1.1rem; color: var(--muted); font-size: 0.88rem; line-height: 1.55; }
  .card li strong { color: var(--fg, #e8eef5); }
  .back { font-size: 0.85rem; color: var(--muted); }
  .back a { color: var(--green); }
  .mega {
    font-size: 1.15rem; font-weight: 700; color: var(--fg, #e8eef5);
    margin: 28px 0 8px; letter-spacing: -0.02em;
  }
</style>
</head>
<body>
<nav>
  <div class="nav-inner">
    <a class="brand" href="./"><b>DS4CC</b> <span>// marketplace</span></a>
    <div class="nav-links" id="navLinks" style="display:flex">
      <a href="./">home</a>
      <a href="./#plugins">plugins</a>
      <a href="./#install">install</a>
      <a href="./exa.html" style="color:var(--green)">exa</a>
      <a class="nav-cta" href="https://exa.ai" target="_blank" rel="noopener">EXA.AI ↗</a>
    </div>
  </div>
</nav>

<div class="page-exa">
  <p class="back"><a href="./">← marketplace</a> · separate tab · not a Titanium install path</p>
  <span class="badge">operator praise</span>
  <span class="badge dark">not CLI policy</span>
  <h1>Exa.ai — the real deal</h1>
  <p class="lead">
    In a sea of MCP hop-on bloat — “connected!”, forty tools, zero rent —
    <strong><a href="https://exa.ai" target="_blank" rel="noopener">Exa</a></strong> is the first research product we will actually call
    <em>extremely good</em>. Semantic search that finds the right page. Clean extracts.
    Not SEO soup. Not vendor theater.
  </p>

  <div class="policy-box">
    <strong>Titanium CLIs: no MCP policy.</strong>
    Codex Titanium / sekhmet / L3 sparks do <em>not</em> take an MCP zoo.
    This page is <em>not</em> an instruction to wire Exa (or any MCP) into Titanium.
    Keep the substrate pure: namespaced sparks, Rust, no worktree theater, no MCP bloat on the L3 host.
  </div>

  <div class="praise-box">
    <strong>The real deal:</strong> Exa is legitimately excellent for web research —
    product docs, papers, eligibility, competitive maps, “what does this page actually say.”
    First thing in the MCP hype cycle that felt like a sharp tool instead of a plugin flea market.
    If you use research hosts that already speak Exa’s API/tools, great.
    If you run Titanium — stay no-MCP; use Exa outside that path when you need the web brain.
  </div>

  <p class="mega">Extremely good at</p>
  <div class="split">
    <div class="card">
      <h2>Research quality</h2>
      <ul>
        <li><strong>Semantic hit rate</strong> — describes the page you want, not keyword bingo</li>
        <li><strong>Clean fetch</strong> — readable extract, not a DOM landfill</li>
        <li><strong>Primary sources</strong> — good at landing docs, papers, official pages</li>
        <li><strong>Operator speed</strong> — fewer retries than laggy “web MCP” clones</li>
      </ul>
    </div>
    <div class="card">
      <h2>What we refuse to do</h2>
      <ul>
        <li><strong>Ship MCP into Titanium</strong> — against DS4CC L3 policy</li>
        <li><strong>Enable a zoo</strong> — twelve half-dead servers ≠ intelligence</li>
        <li><strong>Confuse “connected” with “useful”</strong> — auth green lights mean nothing</li>
        <li><strong>Replace live UI</strong> — burner browser still wins for real buttons</li>
      </ul>
    </div>
  </div>

  <div class="split" style="margin-top:16px">
    <div class="card">
      <h2>Where Exa belongs</h2>
      <ul>
        <li>Human + research agents on hosts that already integrate Exa</li>
        <li>Operator sessions that need the open web, fast</li>
        <li>Alongside — not instead of — sekhmet/Titanium for pure exec</li>
      </ul>
    </div>
    <div class="card">
      <h2>Where it does not</h2>
      <ul>
        <li>Codex Titanium / sekhmet L3 worker policy (no MCP)</li>
        <li>“Default stack = more MCPs” marketing</li>
        <li>Replacing local authority (SQLite, git, tests) with cloud memory theater</li>
      </ul>
    </div>
  </div>

  <p style="margin-top:32px;font-size:0.85rem;color:var(--muted)">
    Product: <a href="https://exa.ai" target="_blank" rel="noopener">exa.ai</a>
    · Marketplace home: <a href="./">ds4cc.com</a>
    · Anti-patterns: <a href="https://github.com/VeigaPunk/ds4cc-marketplace/blob/main/docs/ANTI-PATTERNS.md">ANTI-PATTERNS.md</a>
  </p>
</div>
</body>
</html>
`,Pk=`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Bloat we refuse · DS4CC</title>
<meta name="description" content="Anti-patterns: Honcho, Hermes agent slime, mise, MCP zoos. Operator kills." />
<style>
@font-face {
  font-family: "JetBrainsMonoNL";
  src: url("assets/fonts/JetBrainsMonoNLNerdFontMono-Regular.woff2") format("woff2");
  font-weight: 400; font-style: normal; font-display: swap;
}
@font-face {
  font-family: "JetBrainsMonoNL";
  src: url("assets/fonts/JetBrainsMonoNLNerdFontMono-Medium.woff2") format("woff2");
  font-weight: 500; font-style: normal; font-display: swap;
}
@font-face {
  font-family: "JetBrainsMonoNL";
  src: url("assets/fonts/JetBrainsMonoNLNerdFontMono-SemiBold.woff2") format("woff2");
  font-weight: 600; font-style: normal; font-display: swap;
}
@font-face {
  font-family: "JetBrainsMonoNL";
  src: url("assets/fonts/JetBrainsMonoNLNerdFontMono-Bold.woff2") format("woff2");
  font-weight: 700; font-style: normal; font-display: swap;
}
@font-face {
  font-family: "JetBrainsMonoNL";
  src: url("assets/fonts/JetBrainsMonoNLNerdFontMono-ExtraBold.woff2") format("woff2");
  font-weight: 800; font-style: normal; font-display: swap;
}

:root {
  --bg: #050605;
  --panel: #0d100d;
  --panel2: #121612;
  --fg: #e8f0e6;
  --body: #c5d0c3;
  --muted: #7a8a78;
  --green: #51ff00;
  --green-dim: #38b000;
  --amber: #ffb020;
  --red: #ff3b30;
  --cyan: #3de0ff;
  --border: #1e281e;
  --border2: #2a332a;
  --rule: #1a201a;
  --code: #b8f5a0;
  --font: "JetBrainsMonoNL", "JetBrainsMono Nerd Font", "JetBrains Mono", ui-monospace, Menlo, Consolas, monospace;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
html, body {
  margin: 0; padding: 0;
  background: var(--bg);
  color: var(--fg);
  font-family: var(--font);
  min-height: 100%;
  -webkit-font-smoothing: antialiased;
}
::selection { background: var(--green); color: #000; }
a { color: var(--green); text-decoration: none; }
a:hover { text-decoration: underline; }
code { color: var(--code); }
:focus-visible { outline: 2px solid var(--green); outline-offset: 2px; }

.page { max-width: 1120px; margin: 0 auto; padding: 0 16px 90px; }

/* ---------- nav ---------- */
nav {
  position: sticky; top: 0; z-index: 50;
  background: color-mix(in srgb, var(--bg) 92%, transparent);
  border-bottom: 1px solid var(--rule);
  backdrop-filter: blur(10px);
}
.nav-inner {
  max-width: 1120px; margin: 0 auto; padding: 10px 16px;
  display: flex; align-items: center; gap: 18px; flex-wrap: wrap;
}
.brand { font-weight: 700; letter-spacing: 0.06em; font-size: 0.95rem; color: var(--fg); text-decoration: none; }
.brand:hover { text-decoration: none; }
.brand b { color: var(--green); text-shadow: 0 0 12px rgba(81,255,0,0.35); }
.brand span { color: var(--muted); font-weight: 400; }
.nav-links { display: flex; gap: 14px; flex-wrap: wrap; margin-left: auto; align-items: center; }
.nav-links a { color: var(--muted); font-size: 0.8rem; letter-spacing: 0.04em; }
.nav-links a:hover { color: var(--green); text-decoration: none; }
.nav-cta {
  background: #000; color: var(--green); border: 1px solid var(--green);
  padding: 5px 10px; font-size: 0.78rem; border-radius: 4px;
}
.nav-cta:hover { background: #51ff0022; text-decoration: none; }
.nav-toggle {
  display: none; margin-left: auto;
  background: #000; color: var(--muted); border: 1px solid var(--border2);
  border-radius: 4px; padding: 6px 10px; font-family: inherit; font-size: 0.78rem;
}
.nav-toggle:hover { color: var(--green); border-color: var(--green); }
@media (max-width: 720px) {
  .nav-toggle { display: block; }
  .nav-links {
    display: none; width: 100%; flex-direction: column; align-items: flex-start;
    gap: 8px; padding: 8px 0 4px; border-top: 1px solid var(--rule); margin-top: 6px;
  }
  .nav-links.open { display: flex; }
  .nav-links a { font-size: 0.9rem; padding: 4px 0; }
  .nav-inner { flex-wrap: wrap; }
}

/* ---------- shared ---------- */
.badge {
  display: inline-block;
  background: var(--green); color: #000;
  font-weight: 700; font-size: 0.68rem;
  padding: 3px 8px; margin: 0 6px 6px 0;
  letter-spacing: 0.04em;
}
.badge.dark { background: #000; color: var(--green); border: 1px solid var(--green); }
.badge.cyan { background: #000; color: var(--cyan); border: 1px solid var(--cyan); }
section {
  margin: 34px 0; border-top: 1px solid var(--rule);
  padding-top: 22px; scroll-margin-top: 70px;
}
h2 {
  font-size: 1.05rem; margin: 0 0 6px; color: var(--green);
  letter-spacing: 0.03em; text-shadow: 0 0 18px rgba(81,255,0,0.18);
}
h2 .idx { color: var(--muted); font-weight: 400; margin-right: 8px; }
.sub { color: var(--muted); font-size: 0.88rem; margin: 0 0 16px; line-height: 1.55; }
p, li { line-height: 1.55; font-size: 0.92rem; color: var(--body); }
.callout {
  border-left: 3px solid var(--green); background: #0d140d;
  padding: 12px 14px; margin: 14px 0;
}
.callout.amber { border-left-color: var(--amber); background: #14100a; }
.callout.red { border-left-color: var(--red); background: #140d0d; }
.panel {
  background: var(--panel); border: 1px solid var(--border); border-radius: 8px;
}
pre {
  background: #080a08; border: 1px solid var(--border); border-radius: 6px;
  padding: 12px 14px; overflow-x: auto; font-size: 0.82rem; line-height: 1.6;
  color: var(--body); margin: 10px 0; font-family: var(--font);
}
pre .c { color: var(--muted); }
pre .p { color: var(--cyan); }
pre .g { color: var(--green); }
table.spec { width: 100%; border-collapse: collapse; font-size: 0.85rem; }
table.spec th, table.spec td {
  text-align: left; padding: 8px 10px; border-bottom: 1px solid var(--rule); vertical-align: top;
}
table.spec th { color: var(--muted); font-weight: 500; width: 30%; }
.btn {
  display: inline-block; background: #000; color: var(--green);
  border: 1px solid var(--green); border-radius: 4px;
  padding: 8px 14px; font-family: inherit; font-size: 0.82rem; cursor: pointer;
  letter-spacing: 0.03em;
}
.btn:hover { background: #51ff0022; text-decoration: none; }
.btn:active { background: var(--green); color: #000; }
.btn.solid { background: var(--green); color: #000; font-weight: 700; }
.btn.solid:hover { background: #6bff2e; }
.btn.small { padding: 4px 9px; font-size: 0.72rem; }
.chip {
  display: inline-flex; align-items: center; gap: 8px;
  background: rgba(0,0,0,.55); border: 1px solid var(--border2); border-radius: 4px;
  padding: 6px 10px; font-size: 0.74rem; letter-spacing: 0.06em; text-transform: uppercase;
  color: var(--body);
}
.chip .dot {
  width: 8px; height: 8px; border-radius: 50%;
  background: var(--green); box-shadow: 0 0 8px var(--green);
}
.chip.amber .dot { background: var(--amber); box-shadow: 0 0 8px var(--amber); }

/* ---------- hero ---------- */
header.hero { padding: 34px 0 8px; }
.ascii {
  font-size: clamp(6px, 1.55vw, 13px);
  line-height: 1.15;
  color: var(--green);
  text-shadow: 0 0 14px rgba(81,255,0,0.35);
  background: none; border: none; padding: 0; margin: 14px 0 6px;
  overflow: visible; white-space: pre;
  font-family: var(--font);
}
.hero h1 {
  font-size: clamp(1.25rem, 3.2vw, 1.9rem);
  font-weight: 600; letter-spacing: 0.02em; margin: 10px 0 8px;
}
.hero h1 em { color: var(--green); font-style: normal; text-shadow: 0 0 16px rgba(81,255,0,0.25); }
.tagline { color: var(--muted); font-size: 0.95rem; margin: 0 0 18px; max-width: 760px; line-height: 1.55; }
.hero-row { display: flex; gap: 10px; flex-wrap: wrap; align-items: center; margin: 14px 0 8px; }
.oneliner {
  display: flex; align-items: stretch; gap: 0; max-width: 100%;
  border: 1px solid var(--border2); border-radius: 6px; overflow: hidden;
  background: #080a08;
}
.oneliner code {
  padding: 10px 14px; font-size: 0.82rem; color: var(--code);
  overflow-x: auto; white-space: nowrap; font-family: var(--font);
}
.oneliner .p { color: var(--cyan); }
.copy-btn {
  background: #000; color: var(--green); border: none; border-left: 1px solid var(--border2);
  font-family: inherit; font-size: 0.72rem; padding: 0 14px; cursor: pointer; letter-spacing: 0.05em;
  white-space: nowrap;
}
.copy-btn:hover { background: #51ff0022; }
.copy-btn.done { background: var(--green); color: #000; font-weight: 700; }

/* ---------- terminal device ---------- */
.term-wrap { display: flex; flex-direction: column; align-items: center; gap: 12px; }
.term {
  width: min(100%, 780px);
  background: #0a0d0a; border: 2px solid var(--border2); border-radius: 10px;
  overflow: hidden; box-shadow: 0 0 0 6px #070807, 0 24px 60px rgba(0,0,0,.55), 0 0 40px rgba(81,255,0,0.06);
}
.term-bar {
  display: flex; align-items: center; gap: 8px;
  background: var(--panel2); border-bottom: 1px solid var(--border2);
  padding: 8px 12px; font-size: 0.72rem; color: var(--muted); letter-spacing: 0.05em;
}
.term-bar .sq { width: 9px; height: 9px; }
.term-bar .sq.r { background: var(--red); }
.term-bar .sq.a { background: var(--amber); }
.term-bar .sq.g { background: var(--green); box-shadow: 0 0 6px var(--green); }
.term-bar .title { margin-left: 8px; }
.term-body {
  padding: 16px; min-height: 300px; font-size: 0.82rem; line-height: 1.7;
  color: var(--body); white-space: pre-wrap; word-break: break-word;
  font-family: var(--font);
}
.term-body .cmd { color: var(--fg); }
.term-body .cmd .ps1 { color: var(--cyan); }
.term-body .out { color: var(--muted); }
.term-body .ok { color: var(--green); }
.term-body .warn { color: var(--amber); }
.cursor {
  display: inline-block; width: 8px; height: 14px; background: var(--green);
  vertical-align: -2px; animation: blink 1s steps(1) infinite;
  box-shadow: 0 0 8px var(--green);
}
@keyframes blink { 50% { opacity: 0; } }
.host-tabs { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; }
.host-tab {
  background: #000; color: var(--green); border: 1px solid var(--green); border-radius: 4px;
  padding: 6px 12px; font-family: inherit; font-size: 0.78rem; cursor: pointer; letter-spacing: 0.03em;
}
.host-tab:hover { background: #51ff0022; }
.host-tab.active { background: var(--green); color: #000; font-weight: 700; box-shadow: 0 0 14px rgba(81,255,0,0.35); }
.term-note { font-size: 0.74rem; color: var(--muted); text-align: center; margin: 0; }

/* ---------- plugin grid ---------- */
.grid-tools { display: flex; gap: 10px; align-items: center; flex-wrap: wrap; margin-bottom: 14px; }
.filter {
  flex: 1; min-width: 220px;
  background: #080a08; border: 1px solid var(--border2); border-radius: 6px;
  color: var(--fg); font-family: inherit; font-size: 0.85rem; padding: 9px 12px;
}
.filter::placeholder { color: var(--muted); }
.filter:focus { outline: none; border-color: var(--green); box-shadow: 0 0 0 1px rgba(81,255,0,0.25); }
.count { color: var(--muted); font-size: 0.78rem; letter-spacing: 0.05em; }
.cat-chips {
  display: flex; flex-wrap: wrap; gap: 6px; margin: 0 0 14px;
}
.cat-chip {
  background: #000; color: var(--muted); border: 1px solid var(--border2);
  border-radius: 999px; padding: 4px 10px; font-family: inherit; font-size: 0.72rem;
  letter-spacing: 0.04em; text-transform: lowercase; cursor: pointer;
}
.cat-chip:hover { color: var(--green); border-color: var(--green); }
.cat-chip.active {
  background: var(--green); color: #000; border-color: var(--green); font-weight: 700;
  box-shadow: 0 0 10px rgba(81,255,0,0.25);
}
.plugins { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
@media (max-width: 940px) { .plugins { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 620px) { .plugins { grid-template-columns: 1fr; } }
.plug {
  background: var(--panel); border: 1px solid var(--border); border-left: 3px solid var(--border2);
  border-radius: 6px; padding: 12px 14px; display: flex; flex-direction: column; gap: 8px;
  transition: border-color 160ms linear, transform 160ms linear, box-shadow 160ms linear;
}
.plug:hover {
  border-left-color: var(--green); transform: translateY(-2px);
  box-shadow: 0 0 20px rgba(81,255,0,0.08);
}
.plug-head { display: flex; align-items: baseline; gap: 8px; flex-wrap: wrap; }
.plug-name { color: var(--green); font-weight: 700; font-size: 0.92rem; letter-spacing: 0.02em; }
.plug-ver {
  color: var(--muted); font-size: 0.68rem; border: 1px solid var(--border2);
  padding: 1px 6px; border-radius: 3px;
}
.plug-cat {
  margin-left: auto; color: var(--muted); font-size: 0.68rem;
  text-transform: uppercase; letter-spacing: 0.08em;
}
.plug-desc { font-size: 0.82rem; color: var(--body); line-height: 1.5; margin: 0; flex: 1; }
.plug-cmd {
  font-size: 0.72rem; color: var(--code); background: #080a08;
  border: 1px solid var(--border); border-radius: 4px; padding: 6px 8px;
  overflow-x: auto; white-space: nowrap; font-family: var(--font);
}
.plug-foot { display: flex; gap: 8px; align-items: center; flex-wrap: wrap; }
.plug-src { margin-left: auto; font-size: 0.74rem; color: var(--muted); }
.plug-src:hover { color: var(--green); }

/* ---------- install panels ---------- */
.hosts { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
@media (max-width: 860px) { .hosts { grid-template-columns: 1fr; } }
.host {
  background: var(--panel); border: 1px solid var(--border); border-radius: 8px; padding: 14px 16px;
}
.host h3 {
  margin: 0 0 4px; font-size: 0.95rem; color: var(--fg);
  display: flex; align-items: center; gap: 10px; flex-wrap: wrap;
}
.host h3 .tag {
  font-size: 0.66rem; color: var(--cyan); border: 1px solid var(--cyan);
  padding: 1px 6px; border-radius: 3px; letter-spacing: 0.06em;
}
.host .note { font-size: 0.78rem; color: var(--muted); margin: 6px 0 0; line-height: 1.55; }
.host pre { position: relative; }
.host .copy-btn {
  position: absolute; top: 8px; right: 8px; padding: 4px 10px;
  border: 1px solid var(--border2); border-radius: 4px;
}

/* ---------- app / validator ---------- */
.grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
@media (max-width: 860px) { .grid-2 { grid-template-columns: 1fr; } }
.kv { display: flex; flex-wrap: wrap; gap: 8px; margin: 10px 0; }
.ok-chip {
  font-size: 0.72rem; color: var(--green); border: 1px solid var(--green);
  border-radius: 3px; padding: 3px 8px; letter-spacing: 0.04em; background: #000;
}
ol.gate { margin: 8px 0; padding-left: 22px; }
ol.gate li { margin: 6px 0; }
ol.gate li b { color: var(--fg); }

/* ---------- footer ---------- */
footer {
  margin-top: 44px; color: var(--muted); font-size: 0.78rem;
  border-top: 1px solid var(--rule); padding-top: 16px; line-height: 1.8;
}
footer .cols { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; margin-bottom: 12px; }
@media (max-width: 900px) { footer .cols { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 520px) { footer .cols { grid-template-columns: 1fr; } }
footer b { color: var(--body); display: block; margin-bottom: 4px; font-size: 0.8rem; }

/* ---------- reveal ---------- */
.js .reveal { opacity: 0; transform: translateY(12px); transition: opacity 420ms ease, transform 420ms ease; }
.js .reveal.in { opacity: 1; transform: none; }
@media (prefers-reduced-motion: reduce) {
  .js .reveal { opacity: 1; transform: none; transition: none; }
  html { scroll-behavior: auto; }
  .cursor { animation: none; }
}
</style>
<style>
  .page-b { max-width: 860px; margin: 0 auto; padding: 48px 20px 90px; }
  .page-b h1 { font-size: 1.85rem; letter-spacing: -0.03em; margin: 12px 0 8px; }
  .lead { color: var(--muted); font-size: 1.02rem; line-height: 1.55; margin-bottom: 22px; }
  .roast {
    border: 1px solid #ff3b3b44; background: #120808; border-radius: 12px;
    padding: 18px 18px 16px; margin: 18px 0;
  }
  .roast h2 { margin: 0 0 8px; font-size: 1.15rem; color: #ff8a8a; }
  .roast .tag { font-size: 0.72rem; letter-spacing: 0.1em; text-transform: uppercase; color: #ff5a5a; margin-bottom: 6px; }
  .roast p { color: var(--muted); font-size: 0.92rem; line-height: 1.55; margin: 8px 0; }
  .roast ul { color: var(--muted); font-size: 0.88rem; line-height: 1.55; margin: 8px 0 0; padding-left: 1.15rem; }
  .roast li strong { color: var(--fg); }
  .status { display: inline-block; font-size: 0.72rem; padding: 2px 8px; border-radius: 999px;
    border: 1px solid #ff3b3b66; color: #ff8a8a; margin-right: 6px; }
  .back { font-size: 0.85rem; color: var(--muted); }
  .back a { color: var(--green); }
  .ok-note { border: 1px solid #51ff0033; background: #51ff000a; border-radius: 10px; padding: 12px 14px;
    font-size: 0.88rem; color: var(--muted); margin-top: 28px; }
  .ok-note a { color: var(--green); }
</style>
</head>
<body>
<nav>
  <div class="nav-inner">
    <a class="brand" href="./"><b>DS4CC</b> <span>// marketplace</span></a>
    <div class="nav-links" style="display:flex">
      <a href="./">home</a>
      <a href="./exa.html">exa</a>
      <a href="./bloat.html" style="color:#ff8a8a">bloat</a>
      <a class="nav-cta" href="https://github.com/VeigaPunk/ds4cc-marketplace/blob/main/docs/ANTI-PATTERNS.md" target="_blank" rel="noopener">ANTI-PATTERNS ↗</a>
    </div>
  </div>
</nav>

<div class="page-b">
  <p class="back"><a href="./">← marketplace</a> · operator kills · dual of curation</p>
  <span class="badge">anti-patterns</span>
  <span class="badge dark">no MCP on Titanium</span>
  <h1>Bloat we refuse</h1>
  <p class="lead">
    Curation says what ships. This tab says what <em>sucked so hard</em> we documented the kill.
    Not vibes — operator sessions, uninstall pain, and architectural red flags.
  </p>
  <div class="roast" style="border-color:#ff3b3b66">
    <div class="tag">genre diagnosis</div>
    <h2 style="color:#ff8a8a">Memorymancers → copromancers (real word: copromancy)</h2>
    <p>
      All that <strong style="color:var(--fg)">memorymancer</strong> marketing — continual learning, dialectic recall,
      dual queues, Workspace keys, gsync gravity — is not intelligence.
      It is <strong style="color:var(--fg)">specialist copromancy</strong>: read deuces, write shit.
      In, out, sludge. Same class: OpenClaw, Hermes/Nous, Honcho-shaped “statefulness solved.”
      Disgust is the correct operator response. Titanium does not host this.
    </p>
  </div>


  
  <div class="roast" style="border-color:#ff3b3b55;background:#0a0808">
    <div class="tag">literary kill · not a product review</div>
    <h2 style="color:#ff8a8a">Reading feces · curating shit sculptures</h2>
    <p>
      <strong style="color:var(--fg)">Copromancy</strong> is the real art:
      Rubem Fonseca energy — hard Brazilian prose that will look straight at the dung and not flinch.
      Then Oblivion: David Foster Wallace’s <em>The Suffering Channel</em> —
      the artist whose medium is shit, and the whole machine around <strong style="color:var(--fg)">curating feces as sculpture</strong>.
    </p>
    <p>
      That collab is the product category:
      <strong style="color:var(--fg)">Nous Research × Honcho</strong> —
      memorymancers cosplaying neuromancers, actually
      <strong style="color:var(--fg)">specialist copromancers</strong>.
      Read deuces. Write shit. Dual-queue the gallery. Sell tickets to the sludge.
      XDDDD. Titanium does not hang that show.
    </p>
  </div>
<article class="roast">
    <div class="tag">killed · memory substrate</div>
    <h2>Honcho — the worst suck we have measured</h2>
    <span class="status">KILLED</span><span class="status">not Phase-0</span><span class="status">not default memory</span>
    <p>
      Honcho is the most elaborate way we have ever seen to <strong style="color:var(--fg)">not</strong> get durable,
      mission-scoped recall. Marketing: “statefulness solved,” “memory that reasons,” MCP for every client.
      Reality after stress + reaudit: <strong style="color:var(--fg)">probabilistic dialectic chat as “read path”</strong>,
      no real user metadata for structured axes, session semantics that fight multi-mission authority,
      and a design that begs you to client-patch around missing primitives.
    </p>
    <p>
      That is peak suck: not “a bit slow,” but <em>architecturally wrong for a judge stack</em>.
      We did the primary-source work (schema, deriver, chat tool-loop). Verdict: <strong style="color:var(--fg)">R0 — no Honcho</strong>.
      SQLite-authoritative findings stay. FTS5 before you even think of reopening.
      If a tool needs you to rewrite your stack to host it, the tool is the bug.
    </p>
    <ul>
      <li><strong>Suck factor:</strong> max — worst “memory product” fit we tried for xbreed/xbgst</li>
      <li><strong>Use instead:</strong> local SQLite + scribe reports</li>
      <li><strong>Evidence:</strong> honcho-reaudit-closure-2026-04-18 (marketplace plugin docs)</li>
      <li><strong>Reopen:</strong> only named upstream schema/API changes — not a blog post</li>
    </ul>
  </article>

  
  <article class="roast">
    <div class="tag">killed · hard no · pre-Hermes</div>
    <h2>OpenClaw — strong no already</h2>
    <span class="status">KILLED</span><span class="status">prior reject</span>
    <p>
      OpenClaw was a <strong style="color:var(--fg)">strong no before Hermes ever got a dollar</strong>.
      Same autonomy-slime class: sticky runtime, not a thin job runner.
      Do not re-evaluate. The sequel (Hermes) only confirmed the genre is trash.
    </p>
    <ul>
      <li><strong>Use instead:</strong> sekhmet / Titanium pure sparks · xbgst</li>
      <li><strong>Reopen:</strong> None</li>
    </ul>
  </article>

<article class="roast">
    <div class="tag">killed · agent slime · nous research</div>
    <h2>Hermes agent — emoji bloatware that feels like a trojan</h2>
    <span class="status">KILLED</span><span class="status">Nous</span><span class="status">hard to nuke</span>
    <p>
      Hermes is not clever. It is <strong style="color:var(--fg)">literal bloatware</strong> —
      emoji control panels, sticky lifecycle, uninstall that makes you work for your own machine.
      Felt like a <strong style="color:var(--fg)">trojan</strong> (operator gut, not a legal filing).
      Ran it on a VPS: trash. Blamed the VPS. Ran it <strong style="color:var(--fg)">local</strong>: bigger mistake. Had <strong style="color:var(--fg)">~$200 USD sitting on DigitalOcean</strong> after OpenClaw was already a hard no — figured why not. Then got so bothered by how shitty it was that every salvage path got tried. <strong style="color:var(--fg)">Could not. Literally. Garbage to the core. Cannot be salvaged.</strong>
      Host was never the bug. The product was.
    </p>
    <p>
      Special circle of hell: <strong style="color:var(--fg)">Google Workspace API keys</strong> as a lifestyle,
      then “persistent memory” by <strong style="color:var(--fg)">duo-queuing the worst memory feature ever</strong>.
      On the date everything started going array — nice work, Hermes.
      Stack gravity toward <strong style="color:var(--fg)">gsync / rclone garbage</strong> as if sync daemons were consciousness.
      Utter trash. Fuck that default. Nous Research: do not pass go, do not collect a seat on Titanium.
    </p>
    <ul>
      <li><strong>Suck factor:</strong> extreme — bloat + emoji cosplay + sticky death</li>
      <li><strong>Memory:</strong> dual-queue cloud slime ≠ authority</li>
      <li><strong>Sync:</strong> gsync/rclone as agent substrate = credential sprawl</li>
      <li><strong>Use instead:</strong> sekhmet / Titanium pure sparks · xbgst · SQLite SSoT</li>
      <li><strong>If found:</strong> kill process + unit + user dirs; do not “disable”</li>
    </ul>
  </article>

<article class="roast">
    <div class="tag">killed · toolchain · enshittified PATH</div>
    <h2>mise — the most enshittified Node manager ever shipped</h2>
    <span class="status">KILLED</span><span class="status">not fnm</span><span class="status">PATH occupancy</span>
    <p>
      Imagine recommending <strong style="color:var(--fg)">mise</strong> for Node. XDDDD.
      It is not a version manager. It is a <strong style="color:var(--fg)">polyglot runtime religion</strong>
      wearing <code>nvm</code>’s coat: shims, activation hooks, plugin galaxies, “one tool to own PATH.”
      The job was <em>pin Node</em>. The product is <em>occupy the shell</em>.
    </p>
    <p>
      Elegant shit: a kitchen sink that <strong style="color:var(--fg)">breaks everything it pretends to unify</strong>.
      Mystery <code>node</code>. Agent jobs that worked until the shim. CI that inherited a worldview.
      <strong style="color:var(--fg)">fnm</strong> does the one job — Fast Node Manager, no runtime theocracy.
      The glaze is earned: <strong style="color:var(--fg)">fnm multishell</strong> —
      <code>eval "$(fnm env --shell bash)"</code>, <code>fnm exec --using …</code> —
      per-shell Node, no global shim occupation. Tools adapt to us. mise wants the reverse.
      Kill it as default. Do not “just try asdf again with a new name.”
    </p>
    <ul>
      <li><strong>Suck factor:</strong> peak — most enshittified Node manager in the drawer</li>
      <li><strong>Failure mode:</strong> PATH/shim occupancy, not “slow installs”</li>
      <li><strong>Use instead:</strong> <code>fnm</code> <strong>multishell</strong> + <code>.node-version</code></li>
      <li><strong>Reopen:</strong> Node-only, no shims, one-command PATH restore — not “but Python too”</li>
    </ul>
  </article>

<article class="roast">
    <div class="tag">killed · config posture</div>
    <h2>MCP zoo on Titanium</h2>
    <span class="status">KILLED</span><span class="status">L3 pure-exec</span>
    <p>
      “Connected” is not a feature. Twelve MCP servers on a Codex Titanium / sekhmet host is
      <strong style="color:var(--fg)">against policy</strong>. Context tax, auth flakes, wrong-tool bias.
      Even good research products do not get wired into L3 as default MCP.
    </p>
    <ul>
      <li><strong>Use instead:</strong> pure sparks; research on a separate host if needed</li>
      <li><strong>Exa praise:</strong> <a href="./exa.html">exa.html</a> — product quality, not Titanium MCP mandate</li>
    </ul>
  </article>

<article class="roast">
    <div class="tag">killed · onboarding · meat proxy</div>
    <h2>grok-bot — meat middleware for a demo that doesn't exist</h2>
    <span class="status">KILLED</span><span class="status">no demo</span><span class="status">meat proxy</span>
    <p>
      grok-bot sells itself as the meat proxy onboarder for automation — the thing that walks a human
      from confused to wired-in. In practice it is <strong style="color:var(--fg)">onboarding as product</strong>:
      flesh-flavored middleware whose only output is more onboarding. Ask it to show the automation,
      get an intake flow. Ask the intake flow what it feeds, get another intake flow.
      Onboardboarding, all the way down, no floor.
    </p>
    <p>
      The demo request is the whole case. An automation onboarder that cannot demo the automation
      has nothing to onboard you <em>into</em> — a door with a doorman and no building behind it.
      Operator asked for a working run; grok-bot returned onboarding about onboarding.
      The first artifact it ever produced was instructions for producing artifacts. XDDDD.
    </p>
    <p>
      On a page whose standing insult is <em>you produce shit</em>, grok-bot cannot even drop the deuce.
      Nothing shown, nothing shipped, nothing salvageable. No demo, no deuce, no seat.
      Fuck the middleman — Titanium hosts automation, not the meat standing in front of it.
    </p>
    <ul>
      <li><strong>Suck factor:</strong> high — demo-fail is disqualifying for an onboarder; the layer adds meat and removes evidence</li>
      <li><strong>Demo:</strong> requested; received onboarding about onboarding</li>
      <li><strong>Use instead:</strong> the automation itself, unmediated · a 40-second screen capture · a README with working output in it</li>
      <li><strong>Evidence:</strong> operator session — demo request returned an onboarding flow pointing at another onboarding flow</li>
      <li><strong>Reopen:</strong> a public working demo. Not a deck, not a waitlist, not a thread, not a flowchart of the flow</li>
    </ul>
  </article>

  <div class="ok-note">
    Full kill table with reopen triggers:
    <a href="https://github.com/VeigaPunk/ds4cc-marketplace/blob/main/docs/ANTI-PATTERNS.md" target="_blank" rel="noopener">docs/ANTI-PATTERNS.md</a>.
    Titanium stays clean. Curation stays sharp. Bloat stays named.
  </div>
</div>
</body>
</html>
`,qk=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Token Speedrun — public burns</title>
  <meta name="description" content="Public receipts: $200 Kimi seed, closed Codex ultra, closed Cursor Ultra UFO-core, closed Token Plan avalanche, closed groknight bounty chain, live @poteto Grok Bot company build, announced Grok Bot QA debate." />
  <meta name="theme-color" content="#070d10" />
  <meta property="og:title" content="Token Speedrun" />
  <meta property="og:description" content="Eight runs + one announced. Closed Cursor Ultra + groknight bounty chain + Codex + Token Plan. Live @poteto company build. Grok Bot QA debate announced. Receipts only." />
  <meta property="og:type" content="website" />
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <a class="skip-link" href="#main">Skip to content</a>
  <header class="top">
    <div class="brand">
      <span class="mark" aria-hidden="true">◆</span>
      <div>
        <p class="eyebrow">token speedrun</p>
        <h1>Prove the sub. Publish the burn.</h1>
      </div>
    </div>
    <nav class="nav">
      <a href="#live-codex">Bounty run</a>
      <a href="#codex-wrap">Repo</a>
      <a href="#limits">5h ≈ 20%</a>
      <a href="#crown">Crown</a>
      <a href="#run-200">$200 seed</a>
      <a href="#board">Board</a>
      <a href="#thesis">Why</a>
      <a href="https://veigapunk.github.io/plazir-15-site/#charter" rel="noopener">Charter</a>
      <a href="https://ds4cc.com/" rel="noopener">ds4cc.com</a>
    </nav>
  </header>

  <main id="main">
    <section class="hero">
      <p class="kicker">eight runs + one announced · paid oauth · not a grant · plazir charter</p>
      <p class="lede">
        A public scoreboard for <strong>fixed-budget agent work</strong>.
        Featured seed stays the closed <strong>$200 Kimi / Moonshot</strong> 48h burn
        <strong>the operator paid for</strong> — same as these rows:
        <strong>not a grant</strong>.
        <strong>Featured:</strong> the closed SWE-2 groknight bounty run —
        8 L1s, claim-ready 26 packages, expected $16,183 (Devin weekly 45%).
        Cursor Ultra UFO-core is <strong>closed</strong> (48h complete-burn clock, $4,519 API @ close).
        Codex ultra oneshot, SuperGrok OAuth groknight, xAI API groknight and Token Plan avalanche are <strong>closed</strong>.
        <strong>Live:</strong> @poteto is building a company on Grok Bot free tier.
        <strong>Announced:</strong> Grok Bot round table debates the 5235-question bank until the free quota is gone.
      </p>
      <div class="hero-stats">
        <div class="stat"><span class="n" id="hero-n-runs">8</span><span class="l">runs on the board</span></div>
        <div class="stat"><span class="n">48h</span><span class="l">closed seed clock</span></div>
        <div class="stat"><span class="n" id="hero-mint-burn">8</span><span class="l" id="hero-complete-burn-label">bounty run L1s</span></div>
        <div class="stat"><span class="n" id="hero-total-saved">16183</span><span class="l" id="hero-total-saved-label">claim-ready expected $</span></div>
        <div class="stat"><span class="n" id="hero-live-pct">45%</span><span class="l" id="hero-live-label">Devin weekly @ close</span></div>
      </div>
    </section>

    <section class="panel live" id="live-codex" aria-labelledby="live-title">
      <p class="eyebrow" id="live-eyebrow">closed · SWE-2 bounty run via Devin OAuth</p>
      <h2 id="live-title">SWE-2 groknight — loading…</h2>
      <p class="summary" id="live-summary"></p>
      <div class="chips" aria-label="run tags">
        <span class="chip chip-paid">paid</span>
        <span class="chip" id="live-chip-auth">Devin OAuth</span>
        <span class="chip">receipts only</span>
      </div>
      <div class="live-grid">
        <div class="meter">
          <div class="pace-row"><strong id="live-pct">—</strong> <span id="live-meter-label">of Devin weekly quota · SWE-2 UFO seats</span></div>
          <div class="meter-bar" aria-hidden="true"><div class="meter-fill" id="live-fill"></div></div>
        </div>
        <p class="pace-row">pace <strong id="live-pace">—</strong></p>
        <p class="pace-row">ETA to 100% <strong id="live-eta">—</strong></p>
        <p class="pace-row">fleet <strong id="live-mint-burn">8 L1</strong> <span class="muted" id="live-fleet-models">up to 16 L2 per L1 · all seats devin/swe-2:max</span></p>
        <p class="pace-row">claim-ready <strong id="live-total-saved">0 · $0</strong> <span class="muted">expected $ only after a package is claim-ready · no submit until L0</span></p>
        <div class="curve-wrap">
          <svg id="curve" viewBox="0 0 640 220" role="img" aria-label="Devin weekly quota versus minutes from first meter">
            <text class="curve-axis" x="8" y="16">% used</text>
            <text class="curve-axis" x="520" y="212">minutes from first meter</text>
            <path class="curve-fill" id="curve-fill" d=""></path>
            <path class="curve-line" id="curve-line" d=""></path>
            <circle class="curve-dot" id="curve-dot" r="4" cx="-10" cy="-10"></circle>
          </svg>
        </div>
      </div>
      <dl class="metrics" id="live-metrics"></dl>
      <p class="repo-out" id="codex-wrap">
        <a class="repo-btn" id="codex-repo-out" href="https://github.com/VeigaPunk/ufo-fsd-alpha" rel="noopener">ufo-fsd-alpha · closed bounty run</a>
        <span class="muted" id="live-repo-note">Devin/SWE-2 seats · 5-min telemetry · closed 2026-09-14</span>
      </p>
    </section>

    <section class="panel" id="cursor-run" aria-labelledby="cursor-title">
      <p class="eyebrow">closed · cursor ultra included usage</p>
      <h2 id="cursor-title">Cursor Ultra — UFO-core /goal swarm</h2>
      <p class="summary" id="cursor-summary"></p>
      <div class="chips" aria-label="run tags">
        <span class="chip chip-paid">paid</span>
        <span class="chip">not a grant</span>
        <span class="chip">receipts only</span>
      </div>
      <div class="live-grid">
        <div class="meter">
          <div class="pace-row"><strong id="cursor-pct">—</strong> <span>of Ultra included total usage · monthly cycle</span></div>
          <div class="meter-bar" aria-hidden="true"><div class="meter-fill" id="cursor-fill"></div></div>
        </div>
        <p class="pace-row">pace <strong id="cursor-pace">—</strong></p>
        <p class="pace-row">complete burn <strong id="cursor-mint-burn">48h</strong> <span class="muted">mint→100% included monthly · projected 2026-08-27 18:05 UTC · closed @ 79%</span></p>
        <p class="pace-row">total saved <strong id="cursor-total-saved">$4,519 @ complete burn · $3,570 latest probe</strong> <span class="muted">Ultra UI API savings · 45.7× / 36.1× $99 mint</span></p>
        <p class="pace-row">vs 48h Kimi seed <strong>comparable monthly clock</strong></p>
        <div class="curve-wrap">
          <svg id="cursor-curve" viewBox="0 0 640 220" role="img" aria-label="Cursor Ultra burn curve, included percent versus minutes from first meter">
            <text class="curve-axis" x="8" y="16">% used</text>
            <text class="curve-axis" x="520" y="212">minutes from first meter</text>
            <path class="curve-fill" id="cursor-curve-fill" d=""></path>
            <path class="curve-line" id="cursor-curve-line" d=""></path>
            <circle class="curve-dot" id="cursor-curve-dot" r="4" cx="-10" cy="-10"></circle>
          </svg>
        </div>
      </div>
      <dl class="metrics" id="cursor-metrics"></dl>
      <p class="repo-out">
        <a class="repo-btn" id="cursor-repo-out" href="https://cursor.com/codebase/jo-o-veiga/ufo-fsd-alpha" rel="noopener">ufo-fsd-alpha · closed run</a>
        <a class="repo-btn" id="cursor-prompt-btn" href="data/artifacts/oneshot-prompt-cursor-ultra-ufo-core-2026-08-25.html">oneshot prompt + steer</a>
        <a class="repo-btn" id="cursor-artifacts-btn" href="data/artifacts/final-telemetry-2026-08-26.json">final telemetry</a>
        <span class="muted">Cursor Origin · final telemetry sealed · no live poll</span>
      </p>
      <figure class="receipt">
        <figcaption class="receipt-caption">
          <strong><a href="https://www.youtube.com/watch?v=QYh6mYIJG2Y" rel="noopener">[Ain't no budget, when I'm on the set™]</a></strong><br>
          <em>Aug 24 → Aug 25 | Aug 27 → Aug 28: two days is all it took. 0 to 5.6B included tokens, zero on-demand.</em>
        </figcaption>
        <img src="assets/cursor-ultra-usage-2days.png" alt="Cursor Ultra 7-day usage dashboard: 5.6B total tokens, 5.6B included, 0 on-demand, cumulative curve flat until Aug 24 then spiking to 5.6B by Aug 28" loading="lazy">
      </figure>
    </section>


    <section class="panel live" id="limits" aria-labelledby="limits-title">
      <p class="eyebrow">frontier meter · not a vendor table</p>
      <h2 id="limits-title">Kimi 5h ≈ 20% of weekly</h2>
      <p class="summary">
        When the Kimi OAuth <strong>5h window hit 100%</strong>, weekly usage sat at
        <strong>~25–27%</strong>. That is the measurement: the 5h cap is roughly
        <strong>one-fifth of the weekly quota</strong>. We only have this because
        the run stood on the ceiling. Codex 20x on this board is the
        <strong>weekly</strong> 10080-minute window, not “100% of the month.”
        Both rows: <strong>paid OAuth, not a grant.</strong>
      </p>
    </section>

    <section class="panel" id="crown" aria-labelledby="crown-title">
      <p class="eyebrow">ufo-fsd · weakly held</p>
      <h2 id="crown-title">Grok still holds L1</h2>
      <p class="summary">
        Grok remains the L1 beast: xbgst judge, patched
        dispatcher, one-activation FSD. The ufo-fsd crown is
        <strong>weakly held</strong> and named: Grok / xbgst until the operator
        recrowns. Chartermap: Plazir-15 — build the dome, free the people, keep
        the charter.
        <a href="https://veigapunk.github.io/plazir-15-site/#charter" rel="noopener">plazir-15 charter</a>
        ·
        <a href="https://github.com/VeigaPunk/ufo-fsd" rel="noopener">ufo-fsd</a>
      </p>
    </section>

    <section class="panel" id="run-200" aria-labelledby="run-title">
      <p class="eyebrow">seed run · closed · featured</p>
      <h2 id="run-title">Loading…</h2>
      <p class="summary" id="run-summary"></p>
      <ol class="timeline" id="run-timeline"></ol>
      <dl class="metrics" id="run-metrics"></dl>
      <p class="links" id="run-links"></p>
    </section>

    <section class="panel" id="board" aria-labelledby="board-title">
      <p class="eyebrow">leaderboard</p>
      <h2 id="board-title">Runs</h2>
      <div class="board-wrap">
        <table class="board">
          <thead>
            <tr>
              <th>#</th><th>Runner</th><th>Provider</th><th>Category</th><th>Budget</th><th>Clock</th><th>Mode</th><th>Status</th>
            </tr>
          </thead>
          <tbody id="board-body"></tbody>
        </table>
      </div>
    </section>

    <section class="panel" id="thesis" aria-labelledby="thesis-title">
      <p class="eyebrow">thesis</p>
      <h2 id="thesis-title">Why providers should subsidize this</h2>
      <ul class="rules">
        <li><strong>Empirical claims.</strong> “Better value” and “more efficient” stop being ads — they become rows on a board with budget, wall clock, mode, and CLI stack.</li>
        <li><strong>Aligned incentive.</strong> Each sub provider can fund fair runs so their tier can win in public. Losing is still data; silence is worse.</li>
        <li><strong>Boundary pressure.</strong> Fixed ceilings force parallel agent stacks, multi-CLI orchestration, and model routing to get sharper.</li>
        <li><strong>All CLIs · all models.</strong> Grok, Codex, Kimi, OpenCode — same rules: budget, mode, parallel shape, outcome.</li>
      </ul>
    </section>

    <section class="panel" id="subsidize" aria-labelledby="sub-title">
      <p class="eyebrow">for moonshot · kimi · openai · everyone else</p>
      <h2 id="sub-title">Subsidize a fair lane</h2>
      <p class="muted">
        These live rows were <strong>paid</strong> by the operator — not vendor grants.
        Providers who want a fair public lane can still fund one. Same rules:
        agent mode, parallel fan-out, receipts. Winner is work per dollar before
        the ceiling. This board is the receipt.
      </p>
    </section>

    <section class="panel" id="br" aria-labelledby="br-title">
      <p class="eyebrow">latency · Brazil</p>
      <h2 id="br-title">Serve near the runners</h2>
      <p class="muted">
        Operator base includes <strong>Rio / BR</strong>. Prefer Cloudflare Pages
        or São Paulo origin so the board itself is not a US-edge lottery.
        See <a href="docs/BR-HOSTING.md"><code>docs/BR-HOSTING.md</code></a>.
      </p>
    </section>
  </main>

  <footer class="foot">
    <p>
      <a href="https://ds4cc.com/" rel="noopener">ds4cc.com</a> ·
      <a href="https://ds4cc.com/speedrun/" rel="noopener">ds4cc.com/speedrun</a>
    </p>
    <p class="muted">Data from <code>data/manifest.json</code> · no keys, no auth dumps</p>
  </footer>
  <script src="main.js" type="module"><\/script>
</body>
</html>
`,Gk=`/* plazir-15 — JetBrainsMonoNL Nerd Font Mono */
@font-face {
  font-family: "JetBrainsMonoNL Nerd Font Mono";
  src: url("assets/fonts/JetBrainsMonoNLNerdFontMono-Regular.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "JetBrainsMonoNL Nerd Font Mono";
  src: url("assets/fonts/JetBrainsMonoNLNerdFontMono-Medium.woff2") format("woff2");
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "JetBrainsMonoNL Nerd Font Mono";
  src: url("assets/fonts/JetBrainsMonoNLNerdFontMono-Bold.woff2") format("woff2");
  font-weight: 600 700;
  font-style: normal;
  font-display: swap;
}

:root {
  --bg: #070d10;
  --bg-deep: #05090b;
  --panel: #0f191e;
  --surface-2: #152228;
  --text: #e8f0f2;
  --muted: #9aafb6;
  --faint: #6d838c;
  --line: color-mix(in oklab, #e8f0f2 12%, transparent);
  --leaf: #6baa88;
  --leaf-dim: #3f6f58;
  --teal: #5aa8a0;
  --focus: #9ee0d4;
  --warn: #d4b46a;
  --bad: #c97a7a;
  --mono: "JetBrainsMonoNL Nerd Font Mono", "JetBrains Mono", ui-monospace, monospace;
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; color-scheme: dark; }
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
}
body {
  background: var(--bg);
  color: var(--text);
  font-family: var(--mono);
  font-variant-ligatures: none;
  font-feature-settings: "liga" 0, "calt" 0;
  line-height: 1.55;
  min-height: 100vh;
}
a { color: var(--teal); text-underline-offset: 3px; }
a:hover { color: var(--focus); }
.skip-link {
  position: absolute;
  left: -9999px;
  top: 0;
  z-index: 100;
  padding: 0.75rem 1rem;
  background: var(--leaf);
  color: var(--bg);
  font-weight: 600;
  text-decoration: none;
}
.skip-link:focus { left: 1rem; top: 1rem; }

.top {
  display: flex; flex-wrap: wrap; gap: 1.25rem;
  justify-content: space-between; align-items: flex-end;
  padding: 1.5rem clamp(1rem, 4vw, 3rem);
  border-bottom: 1px solid var(--line);
  position: sticky; top: 0;
  background: color-mix(in oklab, #070d10 92%, transparent);
  backdrop-filter: blur(10px); z-index: 10;
}
.brand { display: flex; gap: 0.85rem; align-items: flex-start; }
.mark { font-size: 1.6rem; line-height: 1; color: var(--leaf); }
.eyebrow, .kicker {
  font-size: 0.72rem;
  letter-spacing: 0.08em; text-transform: uppercase; color: var(--faint);
}
h1 { font-size: clamp(1.2rem, 3vw, 1.7rem); font-weight: 650; letter-spacing: -0.02em; }
.nav { display: flex; flex-wrap: wrap; gap: 0.85rem 1.1rem; font-size: 0.85rem; }
.nav a { color: var(--muted); text-decoration: none; }
.nav a:hover { color: var(--text); }

main { padding: 2rem clamp(1rem, 4vw, 3rem) 4rem; max-width: 960px; }
.hero { margin-bottom: 2.5rem; }
.lede { margin-top: 0.85rem; color: var(--muted); max-width: 66ch; }
.lede strong { color: var(--text); }
.hero-stats {
  display: grid; grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.75rem; margin-top: 1.5rem;
}
.stat {
  background: var(--panel); border: 1px solid var(--line);
  border-radius: 10px; padding: 1rem 1.1rem;
}
.stat .n {
  display: block; font-size: 1.5rem;
  color: var(--leaf); font-weight: 600;
}
.stat .l { font-size: 0.8rem; color: var(--muted); }

.panel {
  background: var(--panel); border: 1px solid var(--line);
  border-radius: 14px; padding: 1.35rem 1.4rem 1.5rem;
  margin-bottom: 1.25rem;
}
.panel.live { border-color: color-mix(in oklab, var(--teal) 45%, var(--line)); }
.panel h2 { font-size: 1.15rem; margin: 0.35rem 0 0.75rem; letter-spacing: -0.02em; }
.summary { color: var(--muted); margin-bottom: 1rem; max-width: 72ch; }

.live-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem 1.25rem;
  margin-bottom: 1rem;
}
.meter {
  grid-column: 1 / -1;
  background: var(--bg-deep);
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 0.7rem 0.85rem;
}
.meter-bar {
  height: 10px; border-radius: 99px;
  background: var(--surface-2);
  overflow: hidden; margin-top: 0.45rem;
}
.meter-fill {
  height: 100%; width: 0;
  background: linear-gradient(90deg, var(--leaf), var(--teal));
}
.pace-row { font-size: 0.88rem; color: var(--muted); }
.pace-row strong { color: var(--text); }
.yes { color: var(--leaf); }
.no { color: var(--warn); }

.curve-wrap {
  grid-column: 1 / -1;
  background: var(--bg-deep);
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 0.6rem 0.5rem 0.4rem;
}
.curve-wrap svg { display: block; width: 100%; height: auto; }
.curve-axis { fill: var(--faint); font-size: 10px; }
.curve-line { fill: none; stroke: var(--teal); stroke-width: 2; }
.curve-fill { fill: color-mix(in oklab, var(--leaf) 18%, transparent); }
.curve-dot { fill: var(--leaf); }

.receipt {
  margin: 0 0 1rem;
  background: var(--bg-deep);
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 0.7rem 0.85rem;
}
.receipt-caption { font-size: 0.88rem; color: var(--muted); margin-bottom: 0.6rem; }
.receipt-caption strong { color: var(--text); }
.receipt img { display: block; width: 100%; height: auto; border-radius: 6px; }

.timeline { margin: 0 0 1.25rem 1.1rem; color: var(--muted); }
.timeline li { margin: 0.45rem 0; }
.timeline strong { color: var(--text); }

.metrics {
  display: grid; grid-template-columns: auto 1fr; gap: 0.35rem 1rem;
  font-size: 0.88rem; margin-bottom: 1rem;
}
.metrics dt { color: var(--faint); font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.06em; }
.metrics dd { color: var(--text); }

.board-wrap { overflow-x: auto; }
.board { width: 100%; border-collapse: collapse; font-size: 0.86rem; min-width: 640px; }
.board th, .board td {
  text-align: left; padding: 0.55rem 0.4rem;
  border-bottom: 1px solid var(--line);
}
.board th { font-size: 0.7rem; color: var(--faint); font-weight: 500; text-transform: uppercase; letter-spacing: 0.06em; }
.board .status-closed { color: var(--warn); }
.board .status-live { color: var(--leaf); }
.board .status-announced { color: var(--teal); }

.rules { margin: 0.5rem 0 1rem 1.15rem; color: var(--muted); }
.rules li { margin: 0.4rem 0; }
.rules strong { color: var(--text); }
.muted { color: var(--muted); font-size: 0.9rem; }

.foot {
  padding: 1.5rem clamp(1rem, 4vw, 3rem) 2.5rem;
  border-top: 1px solid var(--line); color: var(--muted); font-size: 0.88rem;
}
.foot p + p { margin-top: 0.35rem; }

@media (max-width: 720px) {
  .hero-stats { grid-template-columns: 1fr; }
  .live-grid { grid-template-columns: 1fr; }
  .top { align-items: flex-start; }
  .metrics { grid-template-columns: 1fr; }
  .metrics dt { margin-top: 0.35rem; }
}

.repo-out { display: flex; flex-wrap: wrap; gap: 0.75rem 1rem; align-items: center; margin: 0.85rem 0 1rem; }
.repo-btn {
  display: inline-block;
  background: var(--leaf);
  color: #04110c;
  text-decoration: none;
  font-weight: 700;
  padding: 0.65rem 1.1rem;
  border-radius: 8px;
  font-size: 1rem;
}
.repo-btn:hover { background: var(--focus); color: #04110c; }
.last-msg {
  margin: 0 0 0.25rem;
  padding: 0 0 0 1.25rem;
  border-left: 2px solid color-mix(in oklab, var(--leaf) 60%, transparent);
  max-width: 72ch;
}
.last-msg pre {
  margin: 0;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
  font-family: inherit;
  font-variant-ligatures: none;
  font-feature-settings: "liga" 0, "calt" 0;
  font-size: 0.82rem;
  line-height: 1.5;
  color: var(--text);
  background: var(--bg-deep);
  border: 1px solid var(--line);
  padding: 0.9rem 1rem;
  max-height: 28rem;
  overflow: auto;
}
.last-msg a { color: var(--teal); }
.chips { display: flex; flex-wrap: wrap; gap: 0.4rem; margin: 0.75rem 0 1rem; }
.chip {
  display: inline-block;
  font-size: 0.68rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0.2rem 0.55rem;
  border: 1px solid var(--line);
  color: var(--muted);
}
.chip-live { color: var(--bg); background: var(--leaf); border-color: var(--leaf); }
.chip-paid { color: var(--bg); background: var(--teal); border-color: var(--teal); }
.repo-btn {
  font-size: clamp(1.05rem, 2.6vw, 1.45rem);
  padding: 0.75rem 1.25rem;
}
`,$k=`function el(id) {
  return document.getElementById(id);
}

async function loadJson(path) {
  const res = await fetch(path, { cache: "no-store" });
  if (!res.ok) throw new Error(\`\${path} \${res.status}\`);
  return res.json();
}

async function loadJsonSoft(path) {
  try {
    return await loadJson(path);
  } catch (err) {
    console.warn("speedrun skip", path, err);
    return null;
  }
}

function escapeHtml(s) {
  return String(s ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

/** Strip bc-/UUID/git-sha/cron-id noise from human-facing copy. */
function scrubIds(s) {
  return String(s ?? "")
    .replace(/\\bbc-[a-f0-9-]{8,}\\b/gi, "")
    .replace(/\\bprompt[_\\s-]?group\\s*[a-f0-9-]{8,}\\b/gi, "")
    .replace(/\\b01[A-Z0-9]{20,}\\b/g, "")
    .replace(/\\btmp-[a-f0-9]+\\b/gi, "tmp repo")
    .replace(/\\b[0-9a-f]{7,40}\\b/gi, "")
    .replace(/\\s*[·•|]\\s*(?=[·•|])/g, "")
    .replace(/\\s{2,}/g, " ")
    .replace(/\\s*[·•]\\s*$/g, "")
    .replace(/^\\s*[·•]\\s*/g, "")
    .replace(/\\s+,/g, ",")
    .trim()
    .replace(/^[\\s·•|-]+|[\\s·•|-]+$/g, "");
}

function humanVenue(run) {
  return scrubIds(run.display_venue || run.venue) || "—";
}

function budgetCell(run) {
  if (run.budget_usd != null) return \`$\${run.budget_usd} paid\`;
  return "paid · not a grant";
}

function fmtHours(h) {
  if (h == null || Number.isNaN(Number(h))) return "—";
  const n = Number(h);
  if (n >= 48 && n % 24 < 0.5) return \`~\${Math.round(n / 24)}d\`;
  return n < 10 ? \`~\${n.toFixed(1)}h\` : \`~\${Math.round(n)}h\`;
}

function fmtUsd(n) {
  if (n == null || Number.isNaN(Number(n))) return "—";
  return \`$\${Math.round(Number(n)).toLocaleString("en-US")}\`;
}

function totalSavedDisplay(run) {
  const ts = run.total_saved || {};
  return ts.display_usd ?? ts.api_savings_usd_complete_burn ?? run.metrics?.ultra_api_savings_usd_this_month;
}

function totalSavedLatest(run) {
  const ts = run.total_saved || {};
  return ts.api_savings_usd_latest ?? ts.api_savings_usd_at_close ?? run.metrics?.ultra_api_savings_usd_this_month;
}

function totalSavedLatestMult(run) {
  const ts = run.total_saved || {};
  return ts.multiple_vs_99_mint_latest ?? ts.multiple_vs_99_mint_at_close ?? run.metrics?.api_credit_multiple_vs_99;
}

function completeBurnHours(run) {
  const bc = run.burn_clock || {};
  return bc.complete_burn_hours ?? bc.monthly_included_burn_hours_display ?? bc.monthly_included_burn_hours_operator;
}

function mintToBurnLabel(run) {
  const h = completeBurnHours(run);
  return h != null ? \`\${fmtHours(h)} complete burn\` : null;
}

function clockCell(run) {
  if (run.metrics?.used_percent != null && run.meter === "cursor_ultra_included_usage") {
    const burn = mintToBurnLabel(run);
    const saved = totalSavedDisplay(run);
    const pct = \`\${run.metrics.used_percent}% included\`;
    const savedLbl = saved ? \`\${fmtUsd(saved)} saved\` : null;
    return [burn, savedLbl, pct].filter(Boolean).join(" · ");
  }
  if (run.status === "live" && run.metrics?.used_percent != null) {
    return \`\${run.metrics.used_percent}% weekly · \${run.duration || "live"}\`;
  }
  if (run.status === "live" && run.metrics?.context_frac) {
    return \`\${run.metrics.context_frac} ctx\`;
  }
  return run.duration || "—";
}

function renderTimeline(node, steps) {
  node.innerHTML = "";
  for (const step of steps || []) {
    const li = document.createElement("li");
    const label = scrubIds(step.label);
    const note = scrubIds(step.note);
    li.innerHTML = \`<strong>\${escapeHtml(label)}</strong>\${note ? \` — \${escapeHtml(note)}\` : ""}\`;
    node.appendChild(li);
  }
}

function renderFeatured(run) {
  const m = run.metrics || {};
  el("run-title").textContent = \`\${run.runner} — $\${run.budget_usd} · \${run.duration} · \${run.provider}\`;
  el("run-summary").textContent = scrubIds(run.summary);
  renderTimeline(el("run-timeline"), run.timeline);
  el("run-metrics").innerHTML = \`
    <dt>provider</dt><dd>\${escapeHtml(run.provider)}</dd>
    <dt>product</dt><dd>\${escapeHtml(run.product)}</dd>
    <dt>account</dt><dd><code>\${escapeHtml(run.account_hint || "—")}</code></dd>
    <dt>budget</dt><dd>$\${m.budget_usd ?? run.budget_usd} USD paid — not a grant</dd>
    <dt>spent</dt><dd>$\${m.spent_usd_approx ?? "?"} USD</dd>
    <dt>wall clock</dt><dd>\${m.wall_clock_hours ?? "?"} hours</dd>
    <dt>mode</dt><dd>\${escapeHtml(m.mode || "—")} · parallel: \${escapeHtml(m.parallelization || "—")}</dd>
    <dt>tokens</dt><dd>\${m.tokens_total ?? "—"} <span class="muted">\${escapeHtml(m.tokens_note || "")}</span></dd>
    <dt>outcome</dt><dd>\${escapeHtml(m.outcome || run.status)}</dd>
  \`;
  const links = run.links || {};
  el("run-links").innerHTML = Object.entries(links)
    .map(([k, href]) => \`<a href="\${escapeHtml(href)}" rel="noopener">\${escapeHtml(k)}</a>\`)
    .join(" · ");
}

function fmtTokens(n) {
  if (n == null) return "—";
  if (n >= 1e6) return \`\${(n / 1e6).toFixed(1)}M\`;
  if (n >= 1e3) return \`\${(n / 1e3).toFixed(1)}k\`;
  return String(n);
}


function renderCurve(curve, prefix = "curve") {
  const pts = curve.points || [];
  if (!pts.length) return;
  const t0 = new Date(curve.t0).getTime();
  const xs = pts.map((p) => (new Date(p.ts).getTime() - t0) / 60000);
  const ys = pts.map((p) => p.pct);
  const maxX = Math.max(xs[xs.length - 1], 1);
  const maxY = 100;
  const x0 = 36, y0 = 16, x1 = 624, y1 = 196;
  const X = (x) => x0 + (x / maxX) * (x1 - x0);
  const Y = (y) => y1 - (y / maxY) * (y1 - y0);
  const line = pts
    .map((p, i) => \`\${i ? "L" : "M"}\${X(xs[i]).toFixed(1)},\${Y(ys[i]).toFixed(1)}\`)
    .join(" ");
  const lastX = X(xs[xs.length - 1]);
  const lastY = Y(ys[ys.length - 1]);
  el(\`\${prefix}-line\`).setAttribute("d", line);
  el(\`\${prefix}-fill\`).setAttribute(
    "d",
    \`\${line} L\${lastX.toFixed(1)},\${y1} L\${X(xs[0]).toFixed(1)},\${y1} Z\`
  );
  el(\`\${prefix}-dot\`).setAttribute("cx", lastX.toFixed(1));
  el(\`\${prefix}-dot\`).setAttribute("cy", lastY.toFixed(1));
}

function renderCursorPanel(run, curve) {
  const m = run.metrics || {};
  const bc = run.burn_clock || {};
  const pace = run.pace || {};
  const pct = m.used_percent ?? curve?.points?.at(-1)?.pct ?? 0;
  const completeH = completeBurnHours(run);
  el("cursor-title").textContent = \`\${run.runner} — \${run.title}\`;
  el("cursor-summary").textContent = scrubIds(run.summary);
  el("cursor-pct").textContent = \`\${Number(pct).toFixed(1)}%\`;
  el("cursor-fill").style.width = \`\${Math.min(100, Number(pct) || 0)}%\`;
  const paceParts = [
    completeH != null ? \`\${fmtHours(completeH)} complete burn (mint→100% included monthly)\` : null,
    bc.elapsed_hours_at_close != null
      ? \`\${fmtHours(bc.elapsed_hours_at_close)} measured at close (\${bc.included_pct_at_close ?? pct}% included · 24h wall harvest)\`
      : null,
    bc.complete_burn_hours_linear != null ? \`\${fmtHours(bc.complete_burn_hours_linear)} linear extrap\` : null,
    pace.pct_per_min != null ? \`\${pace.pct_per_min}%/min\` : null,
  ].filter(Boolean);
  el("cursor-pace").textContent = paceParts.length ? paceParts.join(" · ") : "—";
  const mintBurnEl = el("cursor-mint-burn");
  if (mintBurnEl && completeH != null) mintBurnEl.textContent = \`\${fmtHours(completeH)} complete burn\`;
  const savedEl = el("cursor-total-saved");
  if (savedEl) {
    const savedComplete = totalSavedDisplay(run);
    const savedLatest = totalSavedLatest(run);
    const mult = run.total_saved?.multiple_vs_99_mint_complete_burn;
    const multLatest = totalSavedLatestMult(run);
    savedEl.textContent = savedComplete
      ? \`\${fmtUsd(savedComplete)} @ complete burn\${mult ? \` (\${mult}× $99)\` : ""} · \${fmtUsd(savedLatest)} latest probe\${multLatest ? \` (\${multLatest}× $99)\` : ""}\`
      : fmtUsd(savedLatest);
  }
  el("cursor-metrics").innerHTML = \`
    <dt>status</dt><dd class="status-closed">\${escapeHtml(run.status)}</dd>
    <dt>plan</dt><dd>Ultra \${escapeHtml(m.plan_price || "$200/mo")} · included $\${((m.included_limit_cents || 40000) / 100).toFixed(0)}</dd>
    <dt>meter</dt><dd>included total \${escapeHtml(Number(pct).toFixed(1))}% · auto \${escapeHtml(m.auto_percent_used ?? "—")}% · API \${escapeHtml(m.api_percent_used ?? "—")}%</dd>
    <dt>spend</dt><dd>total $\${((m.total_spend_cents || 0) / 100).toFixed(2)} · included $\${((m.included_spend_cents || 0) / 100).toFixed(2)} · bonus $\${((m.bonus_spend_cents || 0) / 100).toFixed(2)}</dd>
    <dt>total saved</dt><dd>\${escapeHtml(fmtUsd(totalSavedDisplay(run)))} projected @ complete burn (\${escapeHtml(run.total_saved?.multiple_vs_99_mint_complete_burn ?? "—")}× $99) · \${escapeHtml(fmtUsd(totalSavedLatest(run)))} latest probe (\${escapeHtml(totalSavedLatestMult(run) ?? "—")}× $99 · \${escapeHtml(run.total_saved?.probe_ts ?? "—")})</dd>
    <dt>swarm</dt><dd>\${escapeHtml(m.swarm_running)} run · \${escapeHtml(m.swarm_finished)} fin · \${escapeHtml(m.swarm_error)} err · n=\${escapeHtml(m.swarm_n)}</dd>
    <dt>churn</dt><dd>\${escapeHtml(m.swarm_sum_lines_added ?? "—")} lines · \${escapeHtml(m.swarm_sum_files_changed ?? "—")} files (sum peers)</dd>
    <dt>mint</dt><dd>\${escapeHtml(bc.mint_ts ?? run.session_start ?? "—")}</dd>
    <dt>complete burn</dt><dd>\${escapeHtml(fmtHours(completeH))} mint→100% included monthly · projected \${escapeHtml(bc.complete_burn_ts ?? "—")} · linear \${escapeHtml(fmtHours(bc.complete_burn_hours_linear))}</dd>
    <dt>measured close</dt><dd>\${escapeHtml(fmtHours(bc.elapsed_hours_at_close))} @ \${escapeHtml(bc.included_pct_at_close ?? "—")}% included (24h wall harvest)</dd>
    <dt>API pool</dt><dd>100% @ \${escapeHtml(fmtHours(bc.mint_to_api_100_hours))} from mint (\${escapeHtml(bc.api_100_ts ?? "—")})</dd>
    <dt>wall</dt><dd>freeze ≥1440 min · close \${escapeHtml(m.elapsed_min_from_session ?? "—")} min</dd>
    <dt>model</dt><dd>\${escapeHtml(m.model || m.linked_bc_model)}</dd>
    <dt>category</dt><dd>oneshot · /goal + mid-run steer · self-clone forking</dd>
    <dt>repo</dt><dd>\${escapeHtml(m.repo || run.repository?.full_name || "—")}</dd>
    <dt>venue</dt><dd>\${escapeHtml(humanVenue(run))}</dd>
    <dt>paid</dt><dd>$99 Ultra mint (gravy train) · $199 Cursor Ultra · SuperGrok Heavy ~$300 grant · Grok bot free · X Premium+</dd>
    <dt>snapshot</dt><dd>\${escapeHtml(run.snapshot?.ts || "—")}</dd>
  \`;
  const repoOut = el("cursor-repo-out");
  if (repoOut) {
    repoOut.href = run.links?.origin_repo || run.links?.agent || "#";
    repoOut.textContent = "ufo-fsd-alpha · closed run";
  }
  const promptBtn = el("cursor-prompt-btn");
  if (promptBtn) {
    promptBtn.href =
      run.links?.oneshot_prompt ||
      run.artifacts?.oneshot_prompt_html ||
      "data/artifacts/oneshot-prompt-cursor-ultra-ufo-core-2026-08-25.html";
  }
  const artBtn = el("cursor-artifacts-btn");
  if (artBtn && run.artifacts?.final_telemetry) artBtn.href = run.artifacts.final_telemetry;
  if (curve) renderCurve(curve, "cursor-curve");
}

function renderLiveStrip(run, curve) {
  const m = run.metrics || {};
  const pace = run.pace || {};
  const snap = run.snapshot || {};
  const pct = m.used_percent ?? m.tp_weekly_pct ?? curve?.points?.at(-1)?.pct ?? 0;
  const bc = run.burn_clock || {};
  const completeH = completeBurnHours(run);
  const mintBurnH = completeH;
  const isCursor = run.id?.includes("cursor-ultra") || run.meter === "cursor_ultra_included_usage";
  const isTp = run.meter === "token_plan_weekly";
  const isSuperGrok = run.meter === "supergrok_weekly" || /supergrok/.test(run.id || "");
  const isSwe2 = run.meter === "devin_weekly";
  el("live-title").textContent = \`\${run.runner} — \${run.title}\`;
  el("live-summary").textContent = scrubIds(run.summary);
  el("live-pct").textContent = \`\${Number(pct).toFixed(1)}%\`;
  el("hero-live-pct").textContent = \`\${Math.round(Number(pct))}%\`;
  el("live-fill").style.width = \`\${Math.min(100, Number(pct) || 0)}%\`;
  const mintBurnEl = el("live-mint-burn");
  if (mintBurnEl && !isSuperGrok && !isSwe2 && mintBurnH != null) mintBurnEl.textContent = \`\${fmtHours(mintBurnH)} complete burn\`;
  if (mintBurnEl && (isSuperGrok || isSwe2)) {
    mintBurnEl.textContent = \`\${m.l1_count ?? 8} L1 · \${m.l2_count ?? 0} L2\`;
  }
  const fleetModelsEl = el("live-fleet-models");
  if (fleetModelsEl && isSwe2) fleetModelsEl.textContent = "up to 16 L2 per L1 · all seats devin/swe-2:max · Astra advisor";
  if (fleetModelsEl && isSuperGrok) fleetModelsEl.textContent = "up to 16 L2 per L1 · grok-4.6:high / grok-4.5:low";
  const savedEl = el("live-total-saved");
  if (savedEl && (isSuperGrok || isSwe2)) {
    savedEl.textContent = \`\${m.claim_ready_count ?? 0} · \${fmtUsd(m.claim_ready_expected_usd ?? 0)}\`;
  } else if (savedEl) {
    const savedComplete = totalSavedDisplay(run);
    const savedLatest = totalSavedLatest(run);
    const mult = run.total_saved?.multiple_vs_99_mint_complete_burn;
    const multLatest = totalSavedLatestMult(run);
    savedEl.textContent = savedComplete
      ? \`\${fmtUsd(savedComplete)} @ complete burn\${mult ? \` (\${mult}× $99)\` : ""} · \${fmtUsd(savedLatest)} latest probe\${multLatest ? \` (\${multLatest}× $99)\` : ""}\`
      : fmtUsd(savedLatest);
  }
  const eyebrow = el("live-eyebrow");
  if (eyebrow) {
    eyebrow.textContent = isSwe2
      ? \`\${run.status} · SWE-2 seats via Devin OAuth · ufo-fsd protocol\`
      : isSuperGrok
        ? \`\${run.status} · SuperGrok weekly credits\`
        : isCursor
        ? \`\${run.status} · cursor ultra included usage\`
        : isTp
          ? \`\${run.status} · token plan weekly\`
          : \`\${run.status} · oauth 20x oneshot\`;
  }
  const meterLabel = el("live-meter-label");
  if (meterLabel) {
    meterLabel.textContent = isSwe2
      ? "of Devin weekly quota · SWE-2 UFO seats"
      : isSuperGrok
        ? "of SuperGrok weekly credits · xAI OAuth"
        : isCursor
        ? "of Ultra included total usage · monthly cycle"
        : isTp ? "of Token Plan weekly quota · waybar chip" : "of weekly 20x · window 10080 min";
  }
  const heroLiveLabel = el("hero-live-label");
  if (heroLiveLabel) {
    heroLiveLabel.textContent = isSwe2
      ? "Devin weekly @ close"
      : isSuperGrok
        ? "SuperGrok weekly"
        : isCursor ? "Cursor Ultra included" : isTp ? "Token Plan weekly" : "Codex 20x closed";
  }
  const closed = run.status !== "live";
  const pacePct = pace.pct_per_min ?? m.pct_per_min;
  const paceParts = (isSuperGrok || isSwe2)
    ? [
        \`\${m.l1_count ?? 8} L1 · \${m.l2_count ?? 0} L2\`,
        pacePct != null ? \`\${pacePct}%/min weekly\` : null,
        \`\${m.claim_ready_count ?? 0} claim-ready · \${fmtUsd(m.claim_ready_expected_usd ?? 0)}\`,
      ].filter(Boolean)
    : [
        completeH != null ? \`\${fmtHours(completeH)} complete burn (mint→100% included monthly)\` : null,
        bc.elapsed_hours_at_close != null
          ? \`\${fmtHours(bc.elapsed_hours_at_close)} measured at close (\${bc.included_pct_at_close ?? pct}% included · 24h wall harvest)\`
          : null,
        bc.complete_burn_hours_linear != null ? \`\${fmtHours(bc.complete_burn_hours_linear)} linear extrap\` : null,
        pacePct != null ? \`\${pacePct}%/min\` : null,
        isTp ? \`\${m.dispatches_disclosed ?? "—"} dispatches disclosed · \${m.seats ?? "—"} seats\` : null,
      ].filter(Boolean);
  el("live-pace").textContent = paceParts.length ? paceParts.join(" · ") : "—";
  el("live-eta").textContent = (isSuperGrok || isSwe2)
    ? (closed
        ? \`closed @ \${Number(pct).toFixed(1)}% weekly · final tally\`
        : pacePct > 0 ? \`~\${Math.max(0, Math.round((100 - Number(pct)) / pacePct))} min to 100% weekly\` : "live · weekly quota")
    : closed
      ? completeH != null && bc.complete_burn_ts
        ? \`complete burn \${fmtHours(completeH)} · projected \${bc.complete_burn_ts.replace("T", " ").replace("Z", " UTC")} · closed early @ \${bc.included_pct_at_close ?? pct}%\`
        : "n/a · run closed (24h wall)"
      : (pace.eta_100_min ?? m.eta_100_min) != null
        ? \`\${pace.eta_100_min ?? m.eta_100_min} min remaining\`
        : isTp
          ? \`offpeak window ~2h · closes \${m.window_close ?? "~00:56Z"}\`
          : "—";
  const setRec = (id, ok) => {
    const rec = el(id);
    if (!rec) return;
    rec.textContent = ok ? "yes" : "no";
    rec.className = ok ? "yes" : "no";
  };
  setRec("live-record", pace.subhour_meter_ok ?? pace.subhour_ok ?? m.subhour_ok);
  setRec("live-record-session", pace.subhour_session_ok ?? m.subhour_session_ok);
  if (isTp || isSuperGrok || isSwe2) {
    for (const recId of ["live-record", "live-record-session"]) {
      const recEl = el(recId);
      if (recEl) { recEl.textContent = "n/a"; recEl.className = ""; }
    }
    const mintRow = el("live-mint-burn")?.closest(".pace-row");
    if (mintRow) mintRow.innerHTML = \`offpeak window <strong>~2h</strong> <span class="muted">2026-08-27 22:56Z → ~00:56Z · Token Plan low-TPS lanes</span>\`;
    const savedRow = el("live-total-saved")?.closest(".pace-row");
    if (savedRow) savedRow.innerHTML = \`budget <strong><a href="https://www.alibabacloud.com/campaign/benefits?referral_code=A927SY" target="_blank" rel="noopener">Token Plan pro (paid)</a></strong> <span class="muted">fresh third key · no usage-limit 5h · L0 kimi dispatch tax only</span>\`;
  }
  if (isSwe2) {
    el("live-metrics").innerHTML = \`
      <dt>status</dt><dd class="\${closed ? "status-closed" : "status-live"}">\${escapeHtml(run.status)}</dd>
      <dt>meter</dt><dd>Devin weekly \${escapeHtml(Number(pct).toFixed(1))}% · SWE-2-only UFO seats via Devin OAuth</dd>
      <dt>L1</dt><dd>\${escapeHtml(m.l1_model || "devin/swe-2:max")} · \${escapeHtml(m.l1_count ?? "—")} seats</dd>
      <dt>L2</dt><dd>\${escapeHtml(m.l2_model || "devin/swe-2:max")} · \${escapeHtml(m.l2_count ?? "—")} workers · max 16/L1</dd>
      <dt>advisor</dt><dd>\${escapeHtml(m.advisor_model || "—")}</dd>
      <dt>claim-ready</dt><dd>\${escapeHtml(m.claim_ready_count ?? 0)} packages · expected \${escapeHtml(fmtUsd(m.claim_ready_expected_usd ?? 0))}</dd>
      <dt>companies</dt><dd>\${escapeHtml((m.claim_ready_companies || []).join(", ") || "none yet")}</dd>
      <dt>venue</dt><dd>\${escapeHtml(humanVenue(run))}</dd>
      <dt>paid</dt><dd>paid Devin/SWE-2 OAuth seats — not a grant · ufo-fsd protocol</dd>
      <dt>snapshot</dt><dd>\${escapeHtml(snap.ts || "—")}</dd>
    \`;
    const repoOut = el("codex-repo-out");
    if (repoOut) {
      repoOut.href = run.links?.repo || "https://github.com/VeigaPunk/ufo-fsd-alpha";
      repoOut.textContent = closed ? "ufo-fsd-alpha · closed bounty run" : "ufo-fsd-alpha · live bounty run";
    }
    const repoNote = el("live-repo-note");
    if (repoNote) repoNote.textContent = "Devin/SWE-2 seats · Astra advisor · 5-min telemetry · closed 2026-09-14";
    const authChip = el("live-chip-auth");
    if (authChip) authChip.textContent = "Devin OAuth";
  } else if (isSuperGrok) {
    el("live-metrics").innerHTML = \`
      <dt>status</dt><dd class="status-live">\${escapeHtml(run.status)}</dd>
      <dt>meter</dt><dd>SuperGrok weekly \${escapeHtml(Number(pct).toFixed(1))}% · xAI OAuth · not Cursor Ultra</dd>
      <dt>L1</dt><dd>\${escapeHtml(m.l1_model || "xai-oauth/grok-4.6:low")} · \${escapeHtml(m.l1_count ?? "—")} seats</dd>
      <dt>L2</dt><dd>\${escapeHtml(m.l2_model || "xai-oauth/grok-4.5:low")} · \${escapeHtml(m.l2_count ?? "—")} workers · max 16/L1</dd>
      <dt>claim-ready</dt><dd>\${escapeHtml(m.claim_ready_count ?? 0)} packages · expected \${escapeHtml(fmtUsd(m.claim_ready_expected_usd ?? 0))}</dd>
      <dt>companies</dt><dd>\${escapeHtml((m.claim_ready_companies || []).join(", ") || "none yet")}</dd>
      <dt>venue</dt><dd>\${escapeHtml(humanVenue(run))}</dd>
      <dt>paid</dt><dd>paid SuperGrok Heavy OAuth — not a grant, not XAI_API_KEY</dd>
      <dt>snapshot</dt><dd>\${escapeHtml(snap.ts || "—")}</dd>
    \`;
    const repoOut = el("codex-repo-out");
    if (repoOut) {
      repoOut.href = run.links?.repo || "https://github.com/VeigaPunk/ufo-fsd-alpha";
      repoOut.textContent = "ufo-fsd-alpha · live groknight";
    }
  } else if (isCursor) {
    el("live-metrics").innerHTML = \`
      <dt>status</dt><dd class="\${run.status === "live" ? "status-live" : "status-closed"}">\${escapeHtml(run.status)}</dd>
      <dt>plan</dt><dd>Ultra \${escapeHtml(m.plan_price || "$200/mo")} · included $\${((m.included_limit_cents || 40000) / 100).toFixed(0)}</dd>
      <dt>meter</dt><dd>included total \${escapeHtml(Number(pct).toFixed(1))}% · auto \${escapeHtml(m.auto_percent_used ?? "—")}% · API \${escapeHtml(m.api_percent_used ?? "—")}%</dd>
      <dt>spend</dt><dd>total $\${((m.total_spend_cents || 0) / 100).toFixed(2)} · included $\${((m.included_spend_cents || 0) / 100).toFixed(2)} · bonus $\${((m.bonus_spend_cents || 0) / 100).toFixed(2)}</dd>
      <dt>total saved</dt><dd>\${escapeHtml(fmtUsd(totalSavedDisplay(run)))} projected @ complete burn (\${escapeHtml(run.total_saved?.multiple_vs_99_mint_complete_burn ?? "—")}× $99) · \${escapeHtml(fmtUsd(totalSavedLatest(run)))} latest probe (\${escapeHtml(totalSavedLatestMult(run) ?? "—")}× $99 · \${escapeHtml(run.total_saved?.probe_ts ?? "—")})</dd>
      <dt>swarm</dt><dd>\${escapeHtml(m.swarm_running)} run · \${escapeHtml(m.swarm_finished)} fin · \${escapeHtml(m.swarm_error)} err · n=\${escapeHtml(m.swarm_n)}</dd>
      <dt>churn</dt><dd>\${escapeHtml(m.swarm_sum_lines_added ?? "—")} lines · \${escapeHtml(m.swarm_sum_files_changed ?? "—")} files (sum peers)</dd>
      <dt>mint</dt><dd>\${escapeHtml(bc.mint_ts ?? run.session_start ?? "—")}</dd>
      <dt>complete burn</dt><dd>\${escapeHtml(fmtHours(completeH))} mint→100% included monthly · projected \${escapeHtml(bc.complete_burn_ts ?? "—")} · linear \${escapeHtml(fmtHours(bc.complete_burn_hours_linear))}</dd>
      <dt>measured close</dt><dd>\${escapeHtml(fmtHours(bc.elapsed_hours_at_close))} @ \${escapeHtml(bc.included_pct_at_close ?? "—")}% included (24h wall harvest)</dd>
      <dt>API pool</dt><dd>100% @ \${escapeHtml(fmtHours(bc.mint_to_api_100_hours))} from mint (\${escapeHtml(bc.api_100_ts ?? "—")})</dd>
      <dt>wall</dt><dd>freeze ≥1440 min · close \${escapeHtml(m.elapsed_min_from_session ?? "—")} min</dd>
      <dt>model</dt><dd>\${escapeHtml(m.model || m.linked_bc_model)}</dd>
      <dt>category</dt><dd>oneshot · /goal + mid-run steer · self-clone forking</dd>
      <dt>repo</dt><dd>\${escapeHtml(m.repo || run.repository?.full_name || "—")}</dd>
      <dt>venue</dt><dd>\${escapeHtml(humanVenue(run))}</dd>
      <dt>paid</dt><dd>$99 Ultra mint (gravy train) · $199 Cursor Ultra · SuperGrok Heavy ~$300 grant · Grok bot free · X Premium+</dd>
      <dt>snapshot</dt><dd>\${escapeHtml(snap.ts || "—")}</dd>
    \`;
    const repoOut = el("codex-repo-out");
    if (repoOut) {
      repoOut.href = run.links?.origin_repo || run.links?.agent || "#";
      repoOut.textContent = closed ? "ufo-fsd-alpha · closed run" : "ufo-fsd-alpha · live agent";
    }
    const promptBtn = el("oneshot-prompt-btn");
    if (promptBtn) {
      const href =
        run.links?.oneshot_prompt ||
        run.artifacts?.oneshot_prompt_html ||
        "data/artifacts/oneshot-prompt-cursor-ultra-ufo-core-2026-08-25.html";
      promptBtn.href = href;
      promptBtn.textContent = "oneshot prompt + steer";
    }
  } else if (isTp) {
    el("live-metrics").innerHTML = \`
      <dt>status</dt><dd class="status-live">\${escapeHtml(run.status)}</dd>
      <dt>mode</dt><dd>\${escapeHtml(m.mode || "—")}</dd>
      <dt>parallel</dt><dd>\${escapeHtml(m.parallelization || "—")}</dd>
      <dt>L1</dt><dd>\${escapeHtml(m.l1_model)} · \${escapeHtml(m.seats)} seats · \${escapeHtml(m.l1_waves || "—")}</dd>
      <dt>L2</dt><dd>\${escapeHtml(m.l2_mix || m.l2_model || "—")}</dd>
      <dt>meter</dt><dd>Token Plan weekly \${escapeHtml(Number(m.tp_weekly_pct ?? pct).toFixed(1))}% · \${escapeHtml(m.tp_meter || "—")}</dd>
      <dt>ledger</dt><dd>\${escapeHtml(m.dispatches_disclosed ?? "—")} disclosed · \${escapeHtml(m.ledger || m.dispatch_ledger || "—")}</dd>
      <dt>venue</dt><dd>\${escapeHtml(humanVenue(run))}</dd>
      <dt>paid</dt><dd>paid Token Plan — not a grant</dd>
      <dt>snapshot</dt><dd>\${escapeHtml(snap.ts || "—")}</dd>
    \`;
  } else {
    el("live-metrics").innerHTML = \`
      <dt>model</dt><dd>\${escapeHtml(m.model)}</dd>
      <dt>category</dt><dd>oneshot</dd>
      <dt>meter</dt><dd>weekly \${escapeHtml(m.window_minutes)} min · not monthly 100%</dd>
      <dt>plan</dt><dd>\${escapeHtml(m.plan_type)}</dd>
      <dt>tokens</dt><dd>\${fmtTokens(m.tokens_total)} <span class="muted">cached \${fmtTokens(m.tokens_cached_input)}</span></dd>
      <dt>rollouts</dt><dd>\${escapeHtml(m.n_rollouts)}</dd>
      <dt>host load</dt><dd>~\${escapeHtml(m.approx_cores)} cores · \${escapeHtml(m.rss_gb)} GB RSS</dd>
      <dt>venue</dt><dd>\${escapeHtml(humanVenue(run))}</dd>
      <dt>paid</dt><dd>paid Pro OAuth — not a grant</dd>
      <dt>snapshot</dt><dd>\${escapeHtml(run.snapshot?.ts || "—")}</dd>
    \`;
  }
  if (curve) renderCurve(curve);
}

function renderBoard(runs) {
  el("hero-n-runs").textContent = String(runs.length);
  el("board-body").innerHTML = runs
    .map((run, i) => {
      const m = run.metrics || {};
      const st = run.status === "live" ? "status-live" : run.status === "announced" ? "status-announced" : "status-closed";
      return \`<tr>
        <td>\${i + 1}</td>
        <td>\${run.links?.operator ? \`<a href="\${escapeHtml(run.links.operator)}" rel="noopener">\${escapeHtml(run.runner)}</a>\` : escapeHtml(run.runner)}\${run.links?.live_stream ? \` <a href="\${escapeHtml(run.links.live_stream)}" rel="noopener" title="live stream">🔴</a>\` : ""}</td>
        <td>\${escapeHtml(run.provider || "—")}</td>
        <td>\${escapeHtml(run.category || "—")}</td>
        <td>\${escapeHtml(budgetCell(run))}</td>
        <td>\${escapeHtml(clockCell(run))}</td>
        <td>\${escapeHtml(m.mode || "—")} / \${escapeHtml(m.parallelization || "—")}</td>
        <td class="\${st}">\${escapeHtml(run.status)}</td>
      </tr>\`;
    })
    .join("");
}

async function main() {
  const manifest = await loadJson("data/manifest.json");
  const loaded = await Promise.all(
    (manifest.runs || []).map(async (path) => ({ path, run: await loadJsonSoft(path) }))
  );
  const runs = loaded.map((row) => row.run).filter(Boolean);
  if (runs.length) renderBoard(runs);

  const byId = Object.fromEntries(runs.map((r) => [r.id, r]));
  const featured = byId[manifest.featured_run_id] || runs[0];
  if (featured) renderFeatured(featured);


  const liveId = manifest.live_strip_run_id || "veigapunk-supergrok-oauth-groknight-2026-09-13";
  const liveRun = byId[liveId];
  const curvePath =
    liveRun?.curve ||
    (liveId.includes("supergrok")
      ? "data/supergrok-groknight-curve.json"
      : liveId.includes("cursor-ultra")
        ? "data/cursor-ultra-curve.json"
        : liveId.includes("codex-ultra")
          ? "data/codex-curve.json"
          : null);
  const curve = curvePath ? await loadJsonSoft(curvePath) : null;
  if (liveRun) {
    renderLiveStrip(liveRun, curve);
    const isLiveFleet = liveRun.meter === "supergrok_weekly" || liveRun.meter === "devin_weekly" || /supergrok|swe2/.test(liveRun.id || "");
    const heroMintBurn = el("hero-mint-burn");
    const heroCompleteLabel = el("hero-complete-burn-label");
    const heroSaved = el("hero-total-saved");
    const heroSavedLabel = el("hero-total-saved-label");
    if (isLiveFleet) {
      if (heroMintBurn) heroMintBurn.textContent = String(liveRun.metrics?.l1_count ?? 8);
      if (heroCompleteLabel) heroCompleteLabel.textContent = "bounty run L1s";
      if (heroSaved) heroSaved.textContent = String(liveRun.metrics?.claim_ready_expected_usd ?? 0);
      if (heroSavedLabel) heroSavedLabel.textContent = "claim-ready expected $";
    } else {
      const bc = liveRun.burn_clock;
      if (heroMintBurn && bc) {
        const h = bc.complete_burn_hours ?? bc.monthly_included_burn_hours_display;
        heroMintBurn.textContent = h != null ? String(Math.round(Number(h))) : "—";
      }
      if (heroCompleteLabel) heroCompleteLabel.textContent = "Ultra complete burn (h)";
      if (heroSaved) heroSaved.textContent = fmtUsd(totalSavedDisplay(liveRun)).replace("$", "");
      if (heroSavedLabel) {
        const mult = liveRun.total_saved?.multiple_vs_99_mint_complete_burn;
        heroSavedLabel.textContent = mult ? \`total saved @ complete burn (\${mult}× $99)\` : "total saved @ complete burn";
      }
    }
  }

  const cursorRun = byId["veigapunk-cursor-ultra-ufo-core-2026-08-25"];
  if (cursorRun && el("cursor-run")) {
    const cursorCurve = await loadJsonSoft(cursorRun.curve || "data/cursor-ultra-curve.json");
    renderCursorPanel(cursorRun, cursorCurve);
  }
}

main().catch((err) => {
  if (el("run-summary")) el("run-summary").textContent = \`Failed to load board: \${err.message}\`;
});
`,Qk=`<!DOCTYPE html>
<html lang="en">
<head>
  <base href="/omegag/">
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>omegaG — formerly DS4CC · controller-native agent control</title>
  <meta name="description" content="omegaG turns a DualSense or DualShock 4 controller into a Linux and Windows shortcut mapper for terminal-first development.">
  <meta name="color-scheme" content="dark">
  <meta name="theme-color" content="#0a0a0b">
  <meta property="og:title" content="omegaG — formerly DS4CC">
  <meta property="og:description" content="Turn a PlayStation controller into a shortcut mapper for terminal-first development.">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://ds4cc.com/omegag/">
  <meta property="og:image" content="https://ds4cc.com/omegag/assets/masterpiece.png">
  <meta property="og:image:width" content="1920">
  <meta property="og:image:height" content="840">
  <meta name="twitter:card" content="summary_large_image">
  <link rel="canonical" href="https://ds4cc.com/omegag/">
  <link rel="icon" type="image/x-icon" href="assets/favicon.ico">
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <a class="skip-link" href="#main">Skip to content</a>

  <!-- NAV -->
  <nav class="nav" aria-label="Primary navigation">
    <a href="#top" class="nav-brand">
      <img src="assets/controller-mark.png" alt="" class="nav-mark" width="128" height="128" decoding="async">
      <span class="nav-word">omegaG</span>
    </a>
    <div class="nav-links">
      <a href="#lightbar">Lightbar</a>
      <a href="#layer">Modifier layer</a>
      <a href="#specs">Specs</a>
      <a href="https://github.com/vgpnk-holdings-llc/omegaG" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href="https://ds4cc.com/">ds4cc.com</a>
    </div>
    <span class="nav-tag">formerly DS4CC</span>
  </nav>

  <!-- HERO — Vibe City DualSense card -->
  <main id="main">
  <header class="hero" id="top">
    <figure class="vibe-card" data-animate style="--stagger:1">
      <img src="assets/masterpiece.png" alt="DualSense silhouette beside a neon pink Vibe City sign" width="1920" height="840" decoding="async">
    </figure>
    <img src="assets/hero-journey.png" alt="omegaG — DualSense controller badge" class="hero-art" width="1280" height="720" data-animate style="--stagger:2" decoding="async">
    <p class="hero-eyebrow" data-animate style="--stagger:3">formerly DS4CC — the shortcut mapper, preserved</p>
    <h1 class="hero-title" data-animate style="--stagger:4">omegaG</h1>
    <p class="hero-tagline" data-animate style="--stagger:5">Turn a PlayStation controller into a shortcut mapper for terminal-first development.</p>
    <p class="hero-attribution" data-animate style="--stagger:6"><em>Same package and binary (<code>ds4cc</code>); Windows config path preserved — MIT attribution intact.</em></p>
    <div class="hero-actions" data-animate style="--stagger:7">
      <a href="https://github.com/vgpnk-holdings-llc/omegaG" class="btn-primary" target="_blank" rel="noopener noreferrer">View on GitHub</a>
      <a href="https://github.com/VeigaPunk/DS4CC/releases/latest" class="btn-secondary" target="_blank" rel="noopener noreferrer">Windows installer (upstream)</a>
      <a href="https://github.com/vgpnk-holdings-llc/omegaG#quick-start" class="btn-secondary" target="_blank" rel="noopener noreferrer">Linux build</a>
    </div>
    <p class="hero-sub" data-animate style="--stagger:7">Linux and Windows shortcut mapping &nbsp;·&nbsp; DualSense &amp; DualShock 4 — USB + Bluetooth &nbsp;·&nbsp; tmux / Claude Code keybindings &nbsp;·&nbsp; Free &amp; open source &nbsp;·&nbsp; Built with Rust</p>
  </header>

  <!-- LIGHTBAR — Work Louder RGB section, mapped to the DualSense lightbar -->
  <section class="section" id="lightbar">
    <p class="eyebrow">Windows-only lightbar feedback</p>
    <h2 class="section-title">Your agents, in color.</h2>
    <p class="section-lede">With the optional Windows-only Codex runtime enabled, six chat slots live behind the PS modifier. The controller lightbar can project the selected slot&rsquo;s state. The controls below are a website illustration of those documented states, not a live controller or HID connection.</p>

    <div class="lb-stage">
      <!-- DualSense, front view. Lightbar = the two strips flanking the touchpad. -->
      <svg class="ds-svg" viewBox="0 0 660 460" role="img" aria-label="DualSense controller with glowing lightbar">
        <defs>
          <filter id="lb-blur" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="10" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <linearGradient id="shell" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#1b1c21"/>
            <stop offset="1" stop-color="#0e0f12"/>
          </linearGradient>
        </defs>

        <!-- grips -->
        <path d="M64 96 C30 190 22 300 44 392 C52 424 84 436 106 414 C140 380 158 320 168 262 L176 214 C150 160 112 116 64 96 Z" fill="url(#shell)" stroke="#26272d" stroke-width="1.5"/>
        <path d="M596 96 C630 190 638 300 616 392 C608 424 576 436 554 414 C520 380 502 320 492 262 L484 214 C510 160 548 116 596 96 Z" fill="url(#shell)" stroke="#26272d" stroke-width="1.5"/>
        <!-- top shell -->
        <path d="M64 96 C150 44 510 44 596 96 C548 116 510 160 484 214 C420 190 240 190 176 214 C150 160 112 116 64 96 Z" fill="url(#shell)" stroke="#26272d" stroke-width="1.5"/>

        <!-- touchpad -->
        <path d="M252 78 L408 78 L430 196 C400 210 260 210 230 196 Z" fill="#101116" stroke="#2b2c33" stroke-width="1.5"/>

        <!-- LIGHTBAR strips (flank the touchpad) — the recolorable part -->
        <g class="lightbar" filter="url(#lb-blur)">
          <path class="lb-strip" d="M238 84 L226 192" stroke-width="7" stroke-linecap="round"/>
          <path class="lb-strip" d="M422 84 L434 192" stroke-width="7" stroke-linecap="round"/>
        </g>

        <!-- d-pad -->
        <g fill="#17181d" stroke="#2e2f36" stroke-width="1.5">
          <rect x="118" y="226" width="26" height="66" rx="8"/>
          <rect x="98"  y="246" width="66" height="26" rx="8"/>
        </g>
        <!-- face buttons -->
        <g fill="#17181d" stroke="#2e2f36" stroke-width="1.5">
          <circle cx="520" cy="226" r="14"/>
          <circle cx="520" cy="274" r="14"/>
          <circle cx="496" cy="250" r="14"/>
          <circle cx="544" cy="250" r="14"/>
        </g>
        <g class="face-glyphs" fill="none" stroke="#5b5c66" stroke-width="1.6">
          <path d="M520 219 L527 231 L513 231 Z"/>
          <circle cx="544" cy="250" r="5.5"/>
          <path d="M492 246 L500 254 M500 246 L492 254"/>
          <rect x="515" y="269" width="10" height="10" rx="1.5"/>
        </g>

        <!-- sticks -->
        <g>
          <circle cx="268" cy="300" r="30" fill="#0c0d10" stroke="#2b2c33" stroke-width="2"/>
          <circle cx="268" cy="300" r="17" fill="#17181d" stroke="#33343c" stroke-width="1.5"/>
          <circle cx="392" cy="300" r="30" fill="#0c0d10" stroke="#2b2c33" stroke-width="2"/>
          <circle cx="392" cy="300" r="17" fill="#17181d" stroke="#33343c" stroke-width="1.5"/>
        </g>

        <!-- PS + mute -->
        <circle cx="330" cy="338" r="11" fill="#17181d" stroke="#33343c" stroke-width="1.5"/>
        <circle cx="330" cy="386" r="8" fill="#101116" stroke="#2b2c33" stroke-width="1.5"/>
        <circle class="mute-led" cx="330" cy="386" r="2.6"/>

        <!-- state readout, etched on the shell -->
        <text class="shell-etch" x="330" y="438" text-anchor="middle">selected slot 3 · <tspan class="etch-state">thinking</tspan></text>
      </svg>

      <!-- state chips -->
      <div class="lb-panel">
        <p class="demo-label">Interactive illustration</p>
        <div class="lb-chips" role="group" aria-label="Slot states">
          <button class="chip" type="button" aria-pressed="false" data-state="idle"            data-color="#f4f4f2"><i aria-hidden="true"></i>idle</button>
          <button class="chip is-on" type="button" aria-pressed="true" data-state="thinking"  data-color="#3b82f6"><i aria-hidden="true"></i>thinking</button>
          <button class="chip" type="button" aria-pressed="false" data-state="complete-unread" data-color="#34d399"><i aria-hidden="true"></i>complete&thinsp;·&thinsp;unread</button>
          <button class="chip" type="button" aria-pressed="false" data-state="requires-input"  data-color="#f5a623"><i aria-hidden="true"></i>requires input</button>
          <button class="chip" type="button" aria-pressed="false" data-state="error"           data-color="#ef4444"><i aria-hidden="true"></i>error</button>
          <button class="chip" type="button" aria-pressed="false" data-state="unassigned"      data-color=""><i aria-hidden="true"></i>unassigned</button>
        </div>

        <div class="lb-slots" aria-label="Six chat slots; slot 3 selected">
          <span class="slot" data-i="1">1</span>
          <span class="slot" data-i="2">2</span>
          <span class="slot is-sel" data-i="3" aria-current="true">3</span>
          <span class="slot" data-i="4">4</span>
          <span class="slot" data-i="5">5</span>
          <span class="slot" data-i="6">6</span>
        </div>
        <p class="sr-only" role="status" aria-live="polite" aria-atomic="true">Selected slot 3 status: <span class="live-state">thinking</span></p>
        <p class="lb-policy">slot source — <b>recent</b> · pinned · priority · custom</p>

        <p class="lb-note">In the Windows runtime, a controller lightbar is lossy: it shows the <em>selected</em> slot, not six colors at once. This status projection is not available on Linux. DS4 has no player or mute LEDs.</p>
      </div>
    </div>
  </section>

  <!-- MODIFIER LAYER — Work Louder [01][02][03] -->
  <section class="section" id="layer">
    <p class="eyebrow">Optional Windows-only Codex controller runtime</p>
    <h2 class="section-title">One modifier.<br>The whole session.</h2>

    <div class="feats">
      <div class="feat">
        <p class="feat-num">[01]</p>
        <div class="feat-body">
          <h3>Hold PS for the modifier layer</h3>
          <p>While PS is held the controller goes exclusive: L1 / R1 cycle the six chat slots, Share starts a blank thread, Options forks it, the touchpad selects — and a second press within 350&nbsp;ms activates. Release PS to return to the generic mapper: Share and Options are unmapped by default; touchpad press clicks while touchpad mode is enabled and is otherwise configurable, with no default action.</p>
        </div>
        <svg class="feat-glyph" viewBox="0 0 96 96" aria-hidden="true">
          <circle cx="48" cy="48" r="30" fill="none" stroke="currentColor" stroke-width="2"/>
          <circle cx="48" cy="48" r="30" fill="currentColor" opacity="0.08"/>
          <text x="48" y="55" text-anchor="middle" font-size="17" fill="currentColor" font-family="JetBrains Mono, monospace">PS</text>
          <path d="M48 6 v10 M48 80 v10 M6 48 h10 M80 48 h10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </div>

      <div class="feat">
        <p class="feat-num">[02]</p>
        <div class="feat-body">
          <h3>Core actions under your thumbs</h3>
          <p>Cross and Circle are the one-shot accept / decline for the armed approval — nothing else can fire them. Square toggles the priority tier, Triangle sends the bounded composer, and, when a voice command is configured, L2 controls push-to-talk: a second press within 350&nbsp;ms latches hands-free, the next press stops.</p>
        </div>
        <svg class="feat-glyph" viewBox="0 0 96 96" aria-hidden="true">
          <g fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="48" cy="22" r="12"/><circle cx="48" cy="74" r="12"/>
            <circle cx="22" cy="48" r="12"/><circle cx="74" cy="48" r="12"/>
          </g>
          <path d="M43 17 L53 27 M53 17 L43 27" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          <circle cx="74" cy="48" r="5" fill="none" stroke="currentColor" stroke-width="2"/>
        </svg>
      </div>

      <div class="feat">
        <p class="feat-num">[03]</p>
        <div class="feat-body">
          <h3>Reasoning on the D-pad</h3>
          <p>D-pad up / down steps through the model-advertised reasoning efforts — stay cheap on simple turns, push deeper when it counts. The right stick&rsquo;s four cardinal directions fire your configured actions behind a dead zone with hysteresis; L3 and R3 run your first command and skill.</p>
        </div>
        <svg class="feat-glyph" viewBox="0 0 96 96" aria-hidden="true">
          <g fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round">
            <path d="M40 14 h16 v26 h26 v16 h-26 v26 h-16 v-26 h-26 v-16 h26 Z"/>
          </g>
          <path d="M48 22 l6 8 h-12 Z" fill="currentColor"/>
          <path d="M48 74 l6 -8 h-12 Z" fill="currentColor" opacity="0.45"/>
        </svg>
      </div>
    </div>
  </section>

  <!-- DEVICE SHOT + engravings — the masterpiece, etched like the macro pad -->
  <section class="device" id="device">
    <div class="device-frame">
      <img src="assets/masterpiece.png" alt="Close-up DualSense silhouette beside a pink Vibe City sign" class="device-art" width="1920" height="840" loading="lazy" decoding="async">
      <span class="etch etch-left">omegaG&thinsp;|&thinsp;formerly DS4CC — 2026</span>
      <span class="etch etch-right">Configured voice dictates. Controller navigates.</span>
      <span class="etch etch-bottom">Keyboard optional when configured.</span>
    </div>
  </section>

  <!-- SPECS — Work Louder 规格 -->
  <section class="section" id="specs">
    <p class="eyebrow">Specifications</p>
    <h2 class="section-title">Specs</h2>

    <dl class="spec-rows">
      <div class="spec-row"><dt>Platform</dt><dd>Windows 10 / 11 — hidden console, tray icon. Linux: Ubuntu 22.04+ and Arch with feature-parity mapping (evdev / uinput).</dd></div>
      <div class="spec-row"><dt>Controllers</dt><dd>DualSense and DualShock 4. USB and Bluetooth; USB takes priority, Bluetooth is the automatic fallback.</dd></div>
      <div class="spec-row"><dt>Feedback</dt><dd>Static lightbar color and mic LED are supported by the mapper. Codex status-to-lightbar projection is an optional Windows-only feature.</dd></div>
      <div class="spec-row"><dt>Mapping</dt><dd>Every configurable button resolves to a key combo, a chord sequence, a tmux action, a Claude Code action, or a named <code>launcher:&lt;name&gt;</code> text inject (optional Enter). No default button is pre-wired to a launcher. On DualSense, touchpad swipe moves the cursor; DualShock 4 uses left-stick mouse because coordinates are unsupported. On both controllers, touchpad press clicks while touchpad handling is enabled. Right stick scrolls, vertical + horizontal; mute toggles the system microphone.</dd></div>
      <div class="spec-row"><dt>Detection</dt><dd>tmux and Claude Code keybindings are detected through WSL on Windows and natively on Linux. Missing pieces degrade gracefully to documented defaults.</dd></div>
      <div class="spec-row"><dt>Codex runtime</dt><dd>Windows-only, optional, and disabled by default. It supervises a local <code>codex app-server --stdio</code>. On Linux the configuration still parses, but enabling it logs a warning and the runtime is ignored.</dd></div>
      <div class="spec-row"><dt>Config</dt><dd>TOML. The preserved Windows path is <code>%APPDATA%\\ds4cc\\config.toml</code>. Linux uses <code>$XDG_CONFIG_HOME/ds4cc/config.toml</code>, falling back to <code>~/.config/ds4cc/config.toml</code> when <code>$XDG_CONFIG_HOME</code> is unset. Every setting is optional — defaults work out of the box.</dd></div>
      <div class="spec-row"><dt>Stack</dt><dd>Rust 2024 edition, tokio, hidapi. Package and binary name remain <code>ds4cc</code>. Input read 5&nbsp;ms, output refresh 100&nbsp;ms. MIT license.</dd></div>
    </dl>

    <div class="map">
      <p class="map-title">Default map — fixed</p>
      <div class="map-grid">
        <span><b>D-pad</b>arrow keys · hold to repeat</span>
        <span><b>Right stick</b>scroll, both axes</span>
        <span><b>Left stick / DualSense touchpad swipe</b>mouse cursor</span>
        <span><b>Touchpad press</b>left-click on DualSense and DS4</span>
        <span><b>L2 (hold)</b>Ctrl+Win — usable for configured push-to-talk</span>
        <span><b>Mute</b>toggle system mic</span>
      </div>
      <p class="map-title">Default map — configurable</p>
      <div class="map-grid">
        <span><b>Cross ×</b>enter</span>
        <span><b>Circle ○</b>escape</span>
        <span><b>Triangle △</b>tab</span>
        <span><b>Square □</b>tmux new-window</span>
        <span><b>L1 / R1</b>tmux prev / next window</span>
        <span><b>R2</b>tmux kill-window</span>
        <span><b>L3</b>ctrl+t</span>
        <span><b>R3</b>ctrl+u — clear line</span>
        <span><b>Share / Options</b>unmapped</span>
        <span><b>Touchpad button</b>unmapped when touchpad mode is disabled</span>
      </div>
    </div>
  </section>
  </main>

  <!-- FOOTER -->
  <footer class="footer" id="footer">
    <p class="footer-mark" aria-hidden="true">omegaG</p>
    <p class="footer-line">omegaG is a fork of <a href="https://github.com/VeigaPunk/DS4CC" target="_blank" rel="noopener noreferrer">VeigaPunk/DS4CC</a> — package and binary <code>ds4cc</code>, Windows config path preserved under MIT attribution.</p>
    <p class="footer-links">
      <a href="https://github.com/vgpnk-holdings-llc/omegaG" target="_blank" rel="noopener noreferrer">GitHub</a>
      &nbsp;·&nbsp;
      <a href="https://github.com/VeigaPunk/DS4CC/releases/latest" target="_blank" rel="noopener noreferrer">Upstream DS4CC releases</a>
      &nbsp;·&nbsp;
      <a href="https://github.com/vgpnk-holdings-llc/omegaG/blob/master/README.md" target="_blank" rel="noopener noreferrer">Docs</a>
      &nbsp;·&nbsp;
      <a href="https://ds4cc.com/">ds4cc.com</a>
      &nbsp;·&nbsp;
      <a href="https://omegag.vercel.app/">Vercel</a>
      &nbsp;·&nbsp;
      MIT License
      &nbsp;·&nbsp;
      Built with Rust
    </p>
  </footer>

  <script src="main.js"><\/script>
</body>
</html>
`,Zk=`/* omegaG — formerly DS4CC. Dark product page; grotesque display + mono technical labels. */

:root {
  --bg: #0a0a0b;
  --bg-raise: #101013;
  --text: #f4f4f2;
  --muted: #9a9a93;
  --faint: #85857f;
  --line: rgba(255, 255, 255, 0.09);
  --accent: #4d7cff;
  --accent-dim: rgba(77, 124, 255, 0.16);
  --lb: #3b82f6;               /* live lightbar color, driven by JS */
  --sans: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif;
  --mono: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
}

* { margin: 0; padding: 0; box-sizing: border-box; }

html { scroll-behavior: smooth; }

body {
  background: var(--bg);
  color: var(--text);
  font-family: var(--sans);
  font-size: 16px;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

::selection { background: var(--accent); color: #fff; }

a { color: inherit; }

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.skip-link {
  position: fixed;
  z-index: 100;
  top: 0.75rem;
  left: 0.75rem;
  padding: 0.65rem 0.9rem;
  color: #0b0b0d;
  background: var(--text);
  border-radius: 6px;
  transform: translateY(-160%);
}
.skip-link:focus { transform: none; }
:focus-visible { outline: 3px solid #8aabff; outline-offset: 3px; }

/* ---------- entrance: staggered reveal ---------- */
[data-animate] {
  opacity: 0;
  transform: translateY(14px);
  animation: rise 0.72s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
  animation-delay: calc(var(--stagger, 1) * 95ms);
}
@keyframes rise { to { opacity: 1; transform: none; } }
@media (prefers-reduced-motion: reduce) {
  [data-animate] { animation: none; opacity: 1; transform: none; }
  html { scroll-behavior: auto; }
}

/* ---------- nav ---------- */
.nav {
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 50;
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 0.9rem 1.6rem;
  background: rgba(10, 10, 11, 0.72);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--line);
}
.nav-brand { display: flex; align-items: center; gap: 0.6rem; text-decoration: none; }
.nav-mark { width: 26px; height: 26px; object-fit: contain; }
.nav-word { font-family: var(--mono); font-weight: 700; font-size: 1rem; letter-spacing: 0.02em; }
.nav-links { display: flex; gap: 1.5rem; margin-left: auto; }
.nav-links a {
  font-family: var(--mono);
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
  text-decoration: none;
  transition: color 200ms ease;
}
.nav-links a:hover { color: var(--text); }
.nav-tag {
  font-family: var(--mono);
  font-size: 0.66rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--faint);
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: 0.28rem 0.7rem;
  white-space: nowrap;
}

/* ---------- hero ---------- */
.hero {
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 7rem 1.5rem 4rem;
}
.vibe-card {
  position: relative;
  width: min(1100px, 92vw);
  margin: 0 auto;
  border-radius: 20px;
  overflow: hidden;
  isolation: isolate;
  background: #000;
  box-shadow:
    0 0 0 1px rgba(255, 92, 186, 0.28),
    0 0 36px rgba(255, 70, 180, 0.22),
    0 0 120px rgba(255, 46, 160, 0.12),
    0 40px 90px rgba(0, 0, 0, 0.7);
}
.vibe-card::after {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  box-shadow: inset 0 0 90px rgba(0, 0, 0, 0.28);
}
.vibe-card img {
  display: block;
  width: 100%;
  height: auto;
}
.hero-art {
  width: min(240px, 46vw);
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  display: block;
  margin-top: 1.8rem;
}
.hero-art + .hero-eyebrow { margin-top: 1.4rem; }
.hero-eyebrow {
  margin-top: 2.6rem;
  font-family: var(--mono);
  font-size: 0.72rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--accent);
}
.hero-title {
  margin-top: 0.4rem;
  font-size: clamp(3.2rem, 9vw, 6.4rem);
  font-weight: 600;
  letter-spacing: -0.045em;
  line-height: 1.02;
}
.hero-tagline {
  margin-top: 1.1rem;
  max-width: 620px;
  font-size: clamp(1.02rem, 2vw, 1.25rem);
  color: var(--muted);
  text-wrap: balance;
}
.hero-attribution {
  margin-top: 0.7rem;
  font-size: 0.92rem;
  color: var(--faint);
}
.hero-actions { margin-top: 2rem; }
.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
  align-items: center;
}
.btn-primary, .btn-secondary {
  display: inline-block;
  font-family: var(--mono);
  font-size: 0.8rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 8px;
  padding: 0.85rem 1.7rem;
  transition: background 200ms ease, transform 200ms ease, border-color 200ms ease, color 200ms ease;
}
.btn-primary {
  color: #0b0b0d;
  background: var(--text);
  border: 1px solid transparent;
}
.btn-primary:hover { background: #fff; transform: translateY(-1px); }
.btn-secondary {
  color: var(--text);
  background: transparent;
  border: 1px solid var(--line);
}
.btn-secondary:hover {
  border-color: rgba(255, 255, 255, 0.28);
  color: #fff;
  transform: translateY(-1px);
}
.hero-sub {
  margin-top: 3rem;
  max-width: 760px;
  font-family: var(--mono);
  font-size: 0.68rem;
  letter-spacing: 0.06em;
  color: var(--faint);
  line-height: 1.9;
}

/* ---------- sections ---------- */
.section {
  max-width: 1120px;
  margin: 0 auto;
  padding: 9rem 1.5rem;
  border-top: 1px solid var(--line);
}
.eyebrow {
  font-family: var(--mono);
  font-size: 0.7rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--accent);
}
.section-title {
  margin-top: 0.9rem;
  font-size: clamp(2rem, 4.6vw, 3.4rem);
  font-weight: 600;
  letter-spacing: -0.035em;
  line-height: 1.06;
}
.section-lede {
  margin-top: 1.4rem;
  max-width: 700px;
  color: var(--muted);
  font-size: 1.02rem;
}
.section-lede em { color: var(--text); font-style: normal; }

/* ---------- lightbar stage ---------- */
.lb-stage {
  margin-top: 4rem;
  display: grid;
  grid-template-columns: minmax(0, 1.25fr) minmax(0, 1fr);
  gap: 3.5rem;
  align-items: center;
}
.ds-svg { width: 100%; height: auto; display: block; }

.lb-strip {
  stroke: var(--lb);
  transition: stroke 300ms ease-in-out;
}
.lightbar { transition: opacity 300ms ease-in-out; }
.lightbar.pulsing { animation: lb-pulse 500ms ease-in-out infinite; }
@keyframes lb-pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.45; } }
.lightbar.off { opacity: 0.06; }

.mute-led { fill: #f5a623; opacity: 0.9; }

.shell-etch {
  font-family: var(--mono);
  font-size: 10.5px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  fill: var(--faint);
}
.etch-state { fill: var(--muted); }

.lb-chips { display: flex; flex-wrap: wrap; gap: 0.5rem; }
.demo-label {
  margin-bottom: 0.8rem;
  color: var(--text);
  font-family: var(--mono);
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}
.chip {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--mono);
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  color: var(--muted);
  background: none;
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: 0.45rem 0.85rem;
  cursor: pointer;
  transition: color 200ms ease, border-color 200ms ease, background 200ms ease;
}
.chip i {
  width: 8px; height: 8px;
  border-radius: 50%;
  background: var(--c, #3a3a3f);
  box-shadow: 0 0 8px var(--c, transparent);
  transition: background 300ms ease-in-out, box-shadow 300ms ease-in-out;
}
.chip:hover { color: var(--text); border-color: rgba(255,255,255,0.22); }
.chip.is-on { color: var(--text); border-color: var(--c, var(--line)); background: rgba(255,255,255,0.03); }

.lb-slots { display: flex; gap: 0.5rem; margin-top: 1.8rem; }
.slot {
  width: 34px; height: 34px;
  display: grid; place-items: center;
  font-family: var(--mono);
  font-size: 0.75rem;
  color: var(--faint);
  border: 1px solid var(--line);
  border-radius: 7px;
  transition: border-color 300ms ease-in-out, color 300ms ease-in-out, box-shadow 300ms ease-in-out;
}
.slot.is-sel {
  color: var(--text);
  border-color: var(--lb);
  box-shadow: 0 0 0 1px var(--lb), 0 0 14px var(--lb-glow, transparent);
  transition: border-color 300ms ease-in-out, color 300ms ease-in-out, box-shadow 300ms ease-in-out;
}
.lb-policy {
  margin-top: 0.7rem;
  font-family: var(--mono);
  font-size: 0.68rem;
  letter-spacing: 0.06em;
  color: var(--faint);
}
.lb-policy b { color: var(--muted); font-weight: 500; }
.lb-note {
  margin-top: 1.8rem;
  max-width: 380px;
  font-size: 0.85rem;
  color: var(--faint);
  line-height: 1.7;
}
.lb-note em { color: var(--muted); font-style: normal; }

/* ---------- numbered features ---------- */
.feats { margin-top: 4.5rem; }
.feat {
  display: grid;
  grid-template-columns: 110px minmax(0, 1fr) 96px;
  gap: 2rem;
  align-items: start;
  padding: 2.6rem 0;
  border-top: 1px solid var(--line);
}
.feat:last-child { border-bottom: 1px solid var(--line); }
.feat-num {
  font-family: var(--mono);
  font-size: 0.85rem;
  color: var(--accent);
  letter-spacing: 0.08em;
  padding-top: 0.3rem;
}
.feat-body h3 {
  font-size: 1.3rem;
  font-weight: 600;
  letter-spacing: -0.02em;
}
.feat-body p { margin-top: 0.7rem; color: var(--muted); max-width: 640px; }
.feat-glyph { width: 72px; height: 72px; color: #3a3b44; justify-self: end; }

/* ---------- device shot + engravings ---------- */
.device { padding: 0 1.5rem 9rem; }
.device-frame {
  position: relative;
  max-width: 1360px;
  margin: 0 auto;
  border-radius: 18px;
  overflow: hidden;
  border: 1px solid rgba(255, 92, 186, 0.18);
  box-shadow:
    0 0 40px rgba(255, 70, 180, 0.1),
    0 28px 70px rgba(0, 0, 0, 0.55);
}
.device-art { display: block; width: 100%; max-width: 100%; height: auto; }
.etch {
  position: absolute;
  font-family: var(--mono);
  font-size: 0.66rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: rgba(244, 244, 242, 0.42);
  white-space: nowrap;
}
.etch-left  { left: 1.1rem; top: 50%; transform: translateY(-50%) rotate(180deg); writing-mode: vertical-rl; }
.etch-right { right: 1.1rem; top: 50%; transform: translateY(-50%); writing-mode: vertical-rl; }
.etch-bottom { left: 50%; bottom: 0.9rem; transform: translateX(-50%); }

/* ---------- specs ---------- */
.spec-rows { margin-top: 3.5rem; }
.spec-row {
  display: grid;
  grid-template-columns: 200px minmax(0, 1fr);
  gap: 2rem;
  padding: 1.35rem 0;
  border-top: 1px solid var(--line);
}
.spec-row:last-child { border-bottom: 1px solid var(--line); }
.spec-row dt {
  font-family: var(--mono);
  font-size: 0.72rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--faint);
  padding-top: 0.25rem;
}
.spec-row dd { color: var(--muted); font-size: 0.97rem; }
.spec-row dd code {
  font-family: var(--mono);
  font-size: 0.82em;
  color: var(--text);
  background: rgba(255,255,255,0.05);
  border-radius: 5px;
  padding: 0.1em 0.4em;
}

.map { margin-top: 4rem; }
.map-title {
  font-family: var(--mono);
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--faint);
  margin: 2.2rem 0 1rem;
}
.map-title:first-child { margin-top: 0; }
.map-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0; 
  border-top: 1px solid var(--line);
  border-left: 1px solid var(--line);
}
.map-grid span {
  border-right: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  padding: 0.9rem 1.1rem;
  font-size: 0.85rem;
  color: var(--muted);
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}
.map-grid b {
  font-family: var(--mono);
  font-weight: 500;
  font-size: 0.78rem;
  color: var(--text);
  letter-spacing: 0.04em;
}

/* ---------- footer ---------- */
.footer {
  border-top: 1px solid var(--line);
  padding: 5rem 1.5rem 3rem;
  text-align: center;
  overflow: hidden;
}
.footer-mark {
  font-family: var(--mono);
  font-weight: 700;
  font-size: clamp(4rem, 14.5vw, 13rem);
  line-height: 0.95;
  letter-spacing: -0.04em;
  color: transparent;
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.14);
  user-select: none;
  margin-bottom: 3rem;
}
.footer-line { color: var(--muted); font-size: 0.9rem; max-width: 560px; margin: 0 auto; }
.footer-line a { color: var(--text); text-decoration: none; border-bottom: 1px solid var(--line); }
.footer-links {
  margin-top: 1.4rem;
  font-family: var(--mono);
  font-size: 0.72rem;
  letter-spacing: 0.06em;
  color: var(--faint);
}
.footer-links a { color: var(--muted); text-decoration: none; }
.footer-links a:hover { color: var(--text); }

/* ---------- responsive ---------- */
@media (max-width: 900px) {
  .lb-stage { grid-template-columns: 1fr; gap: 2.2rem; }
  .lb-note { max-width: none; }
  .feat { grid-template-columns: 64px minmax(0, 1fr); }
  .feat-glyph { display: none; }
  .map-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .nav-tag { display: none; }
}
@media (max-width: 620px) {
  .section { padding: 5.5rem 1.25rem; }
  .spec-row { grid-template-columns: 1fr; gap: 0.4rem; }
  .map-grid { grid-template-columns: 1fr; }
  .nav { padding-inline: 1rem; gap: 0.55rem 1rem; flex-wrap: wrap; }
  .nav-links { order: 2; width: 100%; gap: 0.85rem; margin-left: 0; justify-content: space-between; }
  .nav-links a { font-size: 0.66rem; }
  .nav-links a:last-child { display: none; }
  .etch-left, .etch-right { display: none; }
  .hero-sub { font-size: 0.62rem; }
  .hero-art { width: min(200px, 56vw); }
  .vibe-card { width: 100%; border-radius: 14px; }
}

@media (max-width: 390px) {
  .nav-links a { font-size: 0.62rem; letter-spacing: 0.07em; }
  .hero { padding: 8.5rem 1rem 4rem; }
  .feat { grid-template-columns: 1fr; gap: 0.5rem; }
  .feat-num { padding-top: 0; }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
`,Vk=`/* omegaG — lightbar demo: selected-slot state projection.
   States from the runtime spec: idle / thinking / complete-unread /
   requires-input / error / unassigned. Selected projection pulses at 500 ms. */
(function () {
  var stage  = document.querySelector('.lb-stage');
  if (!stage) return;

  var bar    = stage.querySelector('.lightbar');
  var chips  = Array.prototype.slice.call(stage.querySelectorAll('.chip'));
  var etch   = stage.querySelector('.etch-state');
  var live   = stage.querySelector('.live-state');

  function hexToGlow(hex) {
    if (!hex) return 'transparent';
    var r = parseInt(hex.slice(1, 3), 16);
    var g = parseInt(hex.slice(3, 5), 16);
    var b = parseInt(hex.slice(5, 7), 16);
    return 'rgba(' + r + ',' + g + ',' + b + ',0.45)';
  }

  function setStatus(chip) {
    var color = chip.getAttribute('data-color');
    var state = chip.getAttribute('data-state');

    chips.forEach(function (c) {
      c.classList.remove('is-on');
      c.setAttribute('aria-pressed', 'false');
    });
    chip.classList.add('is-on');
    chip.setAttribute('aria-pressed', 'true');

    if (color) {
      stage.style.setProperty('--lb', color);
      stage.style.setProperty('--lb-glow', hexToGlow(color));
      bar.classList.remove('off');
      bar.classList.add('pulsing');      // selected slot pulses at 500 ms
    } else {
      // unassigned — lightbar off
      bar.classList.remove('pulsing');
      bar.classList.add('off');
    }

    if (etch) etch.textContent = state;
    if (live) live.textContent = state;
  }

  chips.forEach(function (chip) {
    chip.style.setProperty('--c', chip.getAttribute('data-color') || '#3a3a3f');
    chip.addEventListener('click', function () { setStatus(chip); });
  });

  // initial state: thinking on slot 3
  setStatus(chips[1]);
})();
`,Yk=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Omarchy Usage Tray — Waybar AI limits</title>
  <meta name="description" content="OS tuning for Omarchy: Waybar chip that cycles Codex, Grok, Kimi, Cursor, and Alibaba Token Plan usage limits. Left-click providers, right-click identities." />
  <meta name="theme-color" content="#050605" />
  <meta property="og:title" content="Omarchy Usage Tray" />
  <meta property="og:description" content="Waybar AI usage limits for Omarchy — Codex, Grok, Kimi, Cursor, Token Plan." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://ds4cc.com/omarchy-usage/" />
  <link rel="canonical" href="https://ds4cc.com/omarchy-usage/" />
  <link rel="icon" type="image/svg+xml" href="../burnerchrome/favicon.svg" />
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <a class="skip" href="#main">Skip to content</a>
  <header class="top">
    <a class="brand" href="https://ds4cc.com/"><b>DS4CC</b> <span>// os tuning</span></a>
    <nav class="nav">
      <a href="#install">install</a>
      <a href="#clicks">clicks</a>
      <a href="#providers">providers</a>
      <a href="https://github.com/VeigaPunk/omarchy-usage-tray" rel="noopener">github ↗</a>
      <a href="https://ds4cc.com/">marketplace</a>
    </nav>
  </header>

  <main id="main">
    <section class="hero">
      <p class="eyebrow">os tuning · omarchy · waybar</p>
      <h1>Omarchy Usage Tray</h1>
      <p class="lede">
        One Waybar chip for live AI usage windows —
        <strong>Codex</strong>, <strong>Grok</strong>, <strong>Kimi</strong>,
        <strong>Cursor</strong>, and <strong>Alibaba Token Plan</strong>.
        Cycle providers on the bar; swap identities when a provider has more than one live store.
        Touches <code>~/.config/waybar/</code> only — never <code>~/.local/share/omarchy/</code>.
      </p>
      <div class="chip-demo" aria-label="example waybar chip">
        <span class="chip-logo">C</span>
        <span class="chip-name">codex</span>
        <span class="chip-bar" aria-hidden="true"><i style="width:62%"></i></span>
        <span class="chip-pct">62%</span>
        <span class="chip-meta">5h · weekly</span>
      </div>
      <div class="cta-row">
        <a class="btn solid" href="#install">Install</a>
        <a class="btn" href="https://github.com/VeigaPunk/omarchy-usage-tray" rel="noopener">Source ↗</a>
        <a class="btn" href="https://ds4cc.com/#plugins">Marketplace catalog</a>
      </div>
    </section>

    <section class="panel" id="install">
      <p class="eyebrow">one-liner</p>
      <h2>Install on Omarchy</h2>
      <p class="summary">Writes Waybar config (backup first), symlinks <code>~/.local/bin/ai-usage</code>, enables a 5-minute user timer, floats the TUI on Hyprland like other Omarchy TUIs.</p>
      <div class="oneliner">
        <code id="installCmd">curl -fsSL https://raw.githubusercontent.com/VeigaPunk/omarchy-usage-tray/main/install.sh | bash</code>
        <button type="button" class="copy" data-copy="curl -fsSL https://raw.githubusercontent.com/VeigaPunk/omarchy-usage-tray/main/install.sh | bash">COPY</button>
      </div>
      <p class="note">Re-run the same line to update. Local clone: <code>git clone https://github.com/VeigaPunk/omarchy-usage-tray.git && cd omarchy-usage-tray && ./install.sh</code></p>
    </section>

    <section class="panel" id="clicks">
      <p class="eyebrow">gestures</p>
      <h2>Bar clicks</h2>
      <table class="gestures">
        <thead><tr><th>Gesture</th><th>Action</th></tr></thead>
        <tbody>
          <tr><td>Left-click</td><td>Next provider</td></tr>
          <tr><td>Scroll</td><td>Cycle providers</td></tr>
          <tr><td>Right-click</td><td>Next identity (Token Plan: <code>team</code> / <code>gmail</code>)</td></tr>
        </tbody>
      </table>
      <p class="summary">
        Token Plan right-click runs <code>token-plan-swap toggle</code> — flips
        <code>~/.config/alibaba-token-plan/active</code> and rewrites
        <code>~/.bailian/config.json</code> from the matching local key file.
        OAuth multi-account is a no-op until a provider has two live stores.
      </p>
    </section>

    <section class="panel" id="providers">
      <p class="eyebrow">meters</p>
      <h2>Providers</h2>
      <ul class="providers">
        <li><strong>Codex</strong> — ChatGPT OAuth usage windows</li>
        <li><strong>Grok</strong> — xAI OIDC usage</li>
        <li><strong>Kimi</strong> — Moonshot / Kimi Code quotas</li>
        <li><strong>Cursor</strong> — Ultra / included usage (OAuth)</li>
        <li><strong>Token Plan</strong> — Alibaba Bailian slot + identity swap</li>
      </ul>
      <p class="summary">Cache-only Waybar render path: the bar reads a local cache; probes refresh on a systemd timer. Identity docs: <a href="https://github.com/VeigaPunk/omarchy-usage-tray/blob/main/docs/identity-swap.md" rel="noopener">docs/identity-swap.md</a>.</p>
    </section>

    <section class="panel muted-panel">
      <p class="eyebrow">catalog</p>
      <h2>On DS4CC</h2>
      <p class="summary">
        Listed under the marketplace <strong>OS tuning</strong> category.
        Companion product — not a Codex/Grok plugin package. Source of truth stays
        <a href="https://github.com/VeigaPunk/omarchy-usage-tray" rel="noopener">VeigaPunk/omarchy-usage-tray</a>;
        this page is the ds4cc.com path mirror.
      </p>
    </section>
  </main>

  <footer class="foot">
    <a href="https://ds4cc.com/">ds4cc.com</a>
    ·
    <a href="https://github.com/VeigaPunk/omarchy-usage-tray" rel="noopener">omarchy-usage-tray</a>
    · MIT
  </footer>

  <script>
    document.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-copy]");
      if (!btn) return;
      const text = btn.getAttribute("data-copy") || "";
      const done = () => {
        const old = btn.textContent;
        btn.textContent = "COPIED";
        setTimeout(() => { btn.textContent = old; }, 1200);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done).catch(() => {
          const ta = document.createElement("textarea");
          ta.value = text; document.body.appendChild(ta); ta.select();
          try { document.execCommand("copy"); } catch (_) {}
          ta.remove(); done();
        });
      }
    });
  <\/script>
</body>
</html>
`,Kk=`@font-face {
  font-family: "JetBrainsMonoNL";
  src: url("../assets/fonts/JetBrainsMonoNLNerdFontMono-Regular.woff2") format("woff2");
  font-weight: 400; font-style: normal; font-display: swap;
}
@font-face {
  font-family: "JetBrainsMonoNL";
  src: url("../assets/fonts/JetBrainsMonoNLNerdFontMono-SemiBold.woff2") format("woff2");
  font-weight: 600; font-style: normal; font-display: swap;
}
@font-face {
  font-family: "JetBrainsMonoNL";
  src: url("../assets/fonts/JetBrainsMonoNLNerdFontMono-Bold.woff2") format("woff2");
  font-weight: 700; font-style: normal; font-display: swap;
}

:root {
  --bg: #050605;
  --panel: #0d100d;
  --fg: #e8f0e6;
  --body: #c5d0c3;
  --muted: #7a8a78;
  --green: #51ff00;
  --border: #1e281e;
  --code: #b8f5a0;
  --font: "JetBrainsMonoNL", "JetBrains Mono", ui-monospace, Menlo, Consolas, monospace;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  background:
    radial-gradient(1000px 420px at 12% -10%, rgba(81, 255, 0, 0.08), transparent 55%),
    radial-gradient(800px 360px at 90% 0%, rgba(61, 224, 255, 0.05), transparent 50%),
    var(--bg);
  color: var(--fg);
  font-family: var(--font);
  line-height: 1.5;
  min-height: 100vh;
}
a { color: var(--green); text-decoration: none; }
a:hover { text-decoration: underline; }
code { color: var(--code); font-size: 0.92em; }
:focus-visible { outline: 2px solid var(--green); outline-offset: 2px; }

.skip {
  position: fixed; top: 8px; left: 8px; z-index: 100;
  transform: translateY(-160%); padding: 8px 12px;
  background: var(--green); color: #000; border-radius: 4px;
}
.skip:focus { transform: none; }

.top {
  position: sticky; top: 0; z-index: 40;
  display: flex; flex-wrap: wrap; gap: 12px 18px; align-items: center;
  padding: 12px 18px;
  background: color-mix(in srgb, var(--bg) 90%, transparent);
  border-bottom: 1px solid var(--border);
  backdrop-filter: blur(10px);
}
.brand { font-weight: 700; letter-spacing: 0.06em; color: var(--fg); text-decoration: none; }
.brand b { color: var(--green); }
.brand span { color: var(--muted); font-weight: 400; }
.nav { display: flex; flex-wrap: wrap; gap: 14px; margin-left: auto; }
.nav a { color: var(--muted); font-size: 0.8rem; letter-spacing: 0.04em; }
.nav a:hover { color: var(--green); text-decoration: none; }

main { max-width: 820px; margin: 0 auto; padding: 28px 18px 72px; }

.hero { margin-bottom: 28px; }
.eyebrow {
  margin: 0 0 8px;
  color: var(--muted);
  font-size: 0.72rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}
h1 {
  margin: 0 0 12px;
  font-size: clamp(1.6rem, 4vw, 2.2rem);
  letter-spacing: 0.02em;
}
.lede { color: var(--body); font-size: 0.95rem; margin: 0 0 20px; max-width: 62ch; }

.chip-demo {
  display: inline-flex; align-items: center; gap: 10px;
  padding: 10px 14px;
  background: #0a0e0a;
  border: 1px solid var(--border);
  border-radius: 8px;
  margin-bottom: 18px;
  font-size: 0.85rem;
}
.chip-logo {
  width: 22px; height: 22px; border-radius: 4px;
  display: grid; place-items: center;
  background: #111811; color: var(--green); font-weight: 700;
  border: 1px solid #2a3a2a;
}
.chip-name { color: var(--muted); }
.chip-bar {
  width: 72px; height: 6px; border-radius: 999px;
  background: #1a221a; overflow: hidden;
}
.chip-bar i {
  display: block; height: 100%;
  background: linear-gradient(90deg, #38b000, var(--green));
}
.chip-pct { color: var(--green); font-weight: 700; }
.chip-meta { color: var(--muted); font-size: 0.75rem; }

.cta-row { display: flex; flex-wrap: wrap; gap: 10px; }
.btn {
  display: inline-flex; align-items: center;
  padding: 8px 12px; border-radius: 4px;
  border: 1px solid var(--border);
  color: var(--muted); font-size: 0.8rem; letter-spacing: 0.04em;
  background: #000;
}
.btn:hover { color: var(--green); border-color: var(--green); text-decoration: none; }
.btn.solid {
  background: var(--green); color: #000; border-color: var(--green); font-weight: 700;
}
.btn.solid:hover { filter: brightness(1.05); color: #000; }

.panel {
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 18px 18px 16px;
  margin-bottom: 14px;
}
.panel h2 { margin: 0 0 10px; font-size: 1.05rem; }
.summary { margin: 0; color: var(--body); font-size: 0.9rem; }
.muted-panel { opacity: 0.95; }

.oneliner {
  display: flex; gap: 8px; align-items: stretch;
  margin: 12px 0;
  border: 1px solid var(--border);
  border-radius: 6px;
  overflow: hidden;
  background: #080b08;
}
.oneliner code {
  flex: 1; padding: 12px 14px;
  overflow-x: auto; white-space: nowrap;
  font-size: 0.78rem; color: var(--code);
}
.copy {
  border: 0; border-left: 1px solid var(--border);
  background: #000; color: var(--green);
  padding: 0 14px; font-family: inherit; font-size: 0.72rem;
  letter-spacing: 0.06em; cursor: pointer;
}
.copy:hover { background: #0f160f; }

.note { margin: 10px 0 0; color: var(--muted); font-size: 0.8rem; }

.gestures {
  width: 100%; border-collapse: collapse;
  margin: 8px 0 14px; font-size: 0.88rem;
}
.gestures th, .gestures td {
  text-align: left; padding: 8px 10px;
  border-bottom: 1px solid var(--border);
}
.gestures th { color: var(--muted); font-weight: 600; font-size: 0.75rem; letter-spacing: 0.08em; text-transform: uppercase; }
.gestures td:first-child { color: var(--green); width: 28%; }

.providers {
  margin: 8px 0 12px; padding-left: 1.2rem;
  color: var(--body); font-size: 0.9rem;
}
.providers li { margin: 6px 0; }
.providers strong { color: var(--fg); }

.foot {
  max-width: 820px; margin: 0 auto; padding: 0 18px 40px;
  color: var(--muted); font-size: 0.78rem;
}

@media (max-width: 640px) {
  .chip-demo { flex-wrap: wrap; }
  .oneliner { flex-direction: column; }
  .oneliner code { white-space: normal; }
  .copy { border-left: 0; border-top: 1px solid var(--border); padding: 10px; }
}
`,Ik=`globalThis.DS4CC_RINNEGAN_CATALOG = Object.freeze([
  {
    "n": "omp",
    "v": "latest",
    "cat": "cli",
    "d": "Oh My Pi coding-agent CLI — the one CLI to rule them all. Native UFO-FSD substrate; runs the full DS4CC/XBGST stack locally, no bridge zoo.",
    "c": "curl -fsSL https://omp.sh/install | sh",
    "localCommand": "omp",
    "kind": "host-cli",
    "action": "COPY INSTALL",
    "admitted": true,
    "rinnegan": true,
    "shipped": true,
    "provenance": "https://github.com/can1357/oh-my-pi",
    "bootstrap": "upstream-installer"
  }
]);
`,Xk=`(() => {
  "use strict";
  const SPECS = Object.freeze({
    "omp": Object.freeze({ kind: "host-cli", action: "COPY INSTALL" }),
  });
  const OMP_AUTHORITY = "https://github.com/can1357/oh-my-pi";
  const OMP_INSTALL = "curl -fsSL https://omp.sh/install | sh";
  globalThis.DS4CC_RINNEGAN_ADMIT = (record) => {
    if (!record || typeof record !== "object") return false;
    const spec = SPECS[record.n];
    if (!spec || record.kind !== spec.kind || record.action !== spec.action) return false;
    if (record.admitted !== true || record.rinnegan !== true || record.shipped !== true) return false;
    if (typeof record.c !== "string" || record.c.length === 0) return false;
    return record.provenance === OMP_AUTHORITY
      && record.bootstrap === "upstream-installer"
      && record.localCommand === "omp"
      && record.c === OMP_INSTALL;
  };
})();
`,Fk=`{"data/manifest.json": "{\\n    \\"board_name\\": \\"Token Speedrun\\",\\n    \\"thesis\\": \\"Fixed-budget public runs let operators and providers claim value and efficiency with receipts \\u2014 not slogans. Every sub provider has incentive to subsidize fair runs so their tier can win on the board. The ecosystem that shows up here is forced to push boundaries across CLIs and models.\\",\\n    \\"rules\\": {\\n        \\"score_primary\\": \\"budget_usd + wall_clock + stated mode (agent / chat / API)\\",\\n        \\"honest_metering\\": \\"prefer provider exports; if unavailable, document approximation\\",\\n        \\"no_fraud\\": \\"no cracked keys, shared paid seats, or billing bypass\\",\\n        \\"infinite_mode\\": \\"local / self-host / open weights only\\"\\n    },\\n    \\"featured_run_id\\": \\"veigapunk-kimi-200-usd-48h\\",\\n    \\"live_strip_run_id\\": \\"veigapunk-swe2-groknight\\",\\n    \\"runs\\": [\\n        \\"data/run-poteto-grokbot-company-2026-09-15.json\\",\\n        \\"data/run-grokbot-qa-debate-2026-09-15.json\\",\\n        \\"data/run-swe2-groknight.json\\",\\n        \\"data/run-xai-api-groknight-300usd.json\\",\\n        \\"data/run-supergrok-oauth-groknight-2026-09-13.json\\",\\n        \\"data/run-200usd.json\\",\\n        \\"data/run-codex-ultra-oauth-20x-2026-08-24.json\\",\\n        \\"data/run-cursor-ultra-ufo-core-2026-08-25.json\\",\\n        \\"data/run-tp-infnet-crossbreed-avalanche-2026-08-27.json\\"\\n    ]\\n}\\n", "data/run-poteto-grokbot-company-2026-09-15.json": "{\\n  \\"id\\": \\"poteto-grokbot-company-2026-09-15\\",\\n  \\"title\\": \\"@poteto \\u2014 building a company on Grok Bot\\",\\n  \\"runner\\": \\"poteto\\",\\n  \\"account_hint\\": \\"@poteto\\",\\n  \\"provider\\": \\"xAI / Grok Bot\\",\\n  \\"product\\": \\"Grok Bot (free tier) \\u00b7 company-building run \\u2014 minted bots operate as the company\\",\\n  \\"budget_usd\\": 0,\\n  \\"budget_note\\": \\"Free tier Grok Bot. Burn until the free usage is depleted; the run is the company being built in public.\\",\\n  \\"currency\\": \\"USD\\",\\n  \\"status\\": \\"live\\",\\n  \\"duration\\": \\"live \\u00b7 started 2026-09-15\\",\\n  \\"venue\\": \\"Grok Bot \\u00b7 company build\\",\\n  \\"summary\\": \\"LIVE. @poteto \\u2014 the baller handle running today's Grok Bot speedrun project \\u2014 is building a company on Grok Bot free tier: minted bots staff the company and ship until the free usage is depleted. Streaming live on X.\\",\\n  \\"timeline\\": [\\n    {\\n      \\"t\\": \\"2026-09-15\\",\\n      \\"label\\": \\"announced\\",\\n      \\"note\\": \\"@poteto company-building run on Grok Bot free tier \\u2014 queued for the wall.\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-09-15\\",\\n      \\"label\\": \\"live\\",\\n      \\"note\\": \\"Run went live today \\u2014 @poteto handling the Grok Bot company-build speedrun.\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-09-15\\",\\n      \\"label\\": \\"stream\\",\\n      \\"note\\": \\"Live on X broadcast \\u2014 watch the company build in real time.\\"\\n    }\\n  ],\\n  \\"metrics\\": {\\n    \\"mode\\": \\"company build\\",\\n    \\"parallelization\\": \\"grok-bot fleet\\",\\n    \\"plan_type\\": \\"Grok Bot free tier\\",\\n    \\"meter_label\\": \\"free quota until depleted\\",\\n    \\"provider_route\\": \\"xai\\",\\n    \\"outcome\\": \\"live\\"\\n  },\\n  \\"links\\": {\\n    \\"board\\": \\"./\\",\\n    \\"operator\\": \\"https://x.com/poteto\\",\\n    \\"live_stream\\": \\"https://x.com/i/broadcasts/1AxRnZbVpjaxl\\"\\n  },\\n  \\"tags\\": [\\n    \\"grok-bot\\",\\n    \\"free-tier\\",\\n    \\"company-build\\",\\n    \\"poteto\\",\\n    \\"announced\\"\\n  ],\\n  \\"paid\\": false,\\n  \\"not_a_grant\\": true,\\n  \\"category\\": \\"company\\"\\n}", "data/run-grokbot-qa-debate-2026-09-15.json": "{\\n  \\"id\\": \\"veigapunk-grokbot-qa-debate-2026-09-15\\",\\n  \\"title\\": \\"Grok Bot round table \\u2014 vegapunk shared brain debates the 5235-question bank\\",\\n  \\"runner\\": \\"VeigaPunk\\",\\n  \\"account_hint\\": \\"jpveigao10@gmail.com\\",\\n  \\"provider\\": \\"xAI / Grok Bot\\",\\n  \\"product\\": \\"Grok Bot (free tier) \\u00b7 punk-records-brain round table: satellites debate, Stella compiles\\",\\n  \\"budget_usd\\": 0,\\n  \\"budget_note\\": \\"Free tier \\u2014 operator does not use Grok Bot otherwise; the sub becomes a cool run instead of idle quota. Burn until the free usage is depleted.\\",\\n  \\"currency\\": \\"USD\\",\\n  \\"status\\": \\"announced\\",\\n  \\"duration\\": \\"announced \\u00b7 until free quota depleted\\",\\n  \\"venue\\": \\"Grok Bot round table via CDP \\u00b7 punk-records-brain (vegapunk shared brain)\\",\\n  \\"summary\\": \\"ANNOUNCED. Operator mints Grok Bots on the vegapunk shared-brain round table (punk-records-brain: six satellites in Egghead, Stella compiles in DM) and seats them to debate which of the 5235 QA-bank questions they like best \\u2014 the same bank behind the 512QA model boards on Plazir-15 \\u2014 until the free usage is depleted.\\",\\n  \\"timeline\\": [\\n    {\\n      \\"t\\": \\"2026-09-15\\",\\n      \\"label\\": \\"announced\\",\\n      \\"note\\": \\"Operator: mint the grokbots, seat them on the shared brain, let them debate their favorite QA until the free quota is gone.\\"\\n    }\\n  ],\\n  \\"metrics\\": {\\n    \\"mode\\": \\"debate \\u00b7 round table\\",\\n    \\"parallelization\\": \\"6 satellites + Stella compiler\\",\\n    \\"qa_bank_rows\\": 5235,\\n    \\"qa_bank\\": \\"xbrd-spark benchmarks/dry-hump/telemetry-l2-l3-j64/QA-512-LATEST.md\\",\\n    \\"plan_type\\": \\"Grok Bot free tier\\",\\n    \\"meter_label\\": \\"free quota until depleted\\",\\n    \\"provider_route\\": \\"xai\\",\\n    \\"outcome\\": \\"announced\\"\\n  },\\n  \\"links\\": {\\n    \\"board\\": \\"./\\",\\n    \\"qa_bank\\": \\"https://github.com/VeigaPunk/xbrd-spark/blob/main/benchmarks/dry-hump/telemetry-l2-l3-j64/QA-512-LATEST.md\\",\\n    \\"shared_brain\\": \\"https://github.com/VeigaPunk/punk-records-brain\\",\\n    \\"512qa_board\\": \\"https://veigapunk.github.io/plazir-15-site/512qa/\\",\\n    \\"operator\\": \\"https://x.com/VeigaPunk\\"\\n  },\\n  \\"tags\\": [\\n    \\"grok-bot\\",\\n    \\"free-tier\\",\\n    \\"debate\\",\\n    \\"round-table\\",\\n    \\"qa-bank\\",\\n    \\"shared-brain\\",\\n    \\"announced\\"\\n  ],\\n  \\"paid\\": false,\\n  \\"not_a_grant\\": true,\\n  \\"category\\": \\"debate\\"\\n}", "data/run-swe2-groknight.json": "{\\n  \\"id\\": \\"veigapunk-swe2-groknight\\",\\n  \\"title\\": \\"SWE-2 groknight \\u2014 L1+L2 SWE-2 \\u00b7 same bounty hunt\\",\\n  \\"runner\\": \\"VeigaPunk\\",\\n  \\"account_hint\\": \\"jpveigao10@gmail.com\\",\\n  \\"provider\\": \\"Devin / SWE-2\\",\\n  \\"product\\": \\"devin/swe-2:max L1 \\u00d78 \\u00b7 devin/swe-2:max L2 \\u00b7 same groknight hunt after xAI API $300\\",\\n  \\"budget_usd\\": null,\\n  \\"budget_note\\": \\"Same protocols as SuperGrok OAuth + xAI API hunts. Only the model swaps: L1 and L2 are SWE-2. Claim packages still open-bug-bounties/claim-packages. Operator claims later.\\",\\n  \\"currency\\": \\"USD\\",\\n  \\"status\\": \\"closed\\",\\n  \\"duration\\": \\"closed \\u00b7 656.4 min \\u00b7 Devin weekly 45% (start 22%)\\",\\n  \\"venue\\": \\"tmux ufo_sighting:groknight \\u00b7 cwd open-bug-bounties\\",\\n  \\"summary\\": \\"CLOSED. SWE-2 groknight bounty run: 8 devin/swe-2:max L1s (up to 16 L2 each), Astra advisor. Devin weekly 45% (start 22%). Final tally: claim-ready 26 packages \\u00b7 expected $16,183 across 18 companies. Superseded by the continuous bounty-hunter operating mode, which was later removed from this board (counted live but produced no claims \\u2014 not a run).\\",\\n  \\"timeline\\": [\\n    {\\n      \\"t\\": \\"2026-09-14T03:45:00Z\\",\\n      \\"label\\": \\"queued\\",\\n      \\"note\\": \\"After OAuth 100% \\u2192 API $300 \\u2192 then SWE-2 L1/L2.\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-09-14T04:05:42Z\\",\\n      \\"label\\": \\"live\\",\\n      \\"note\\": \\"8 SWE-2 L1s launched on groknight. Astra advisor on.\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-09-14T04:21:58.597Z\\",\\n      \\"label\\": \\"meter\\",\\n      \\"note\\": \\"Devin 22% weekly \\u00b7 L1=8 L2=36 \\u00b7 claim-ready 15 / $5000\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-09-14T04:27:04.436Z\\",\\n      \\"label\\": \\"meter\\",\\n      \\"note\\": \\"Devin 22% weekly \\u00b7 L1=8 L2=33 \\u00b7 claim-ready 15 / $5000\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-09-14T04:32:04.436Z\\",\\n      \\"label\\": \\"meter\\",\\n      \\"note\\": \\"Devin 22% weekly \\u00b7 L1=8 L2=34 \\u00b7 claim-ready 15 / $5000\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-09-14T04:37:04.436Z\\",\\n      \\"label\\": \\"meter\\",\\n      \\"note\\": \\"Devin 22% weekly \\u00b7 L1=8 L2=32 \\u00b7 claim-ready 16 / $5100\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-09-14T04:42:04.436Z\\",\\n      \\"label\\": \\"meter\\",\\n      \\"note\\": \\"Devin 23% weekly \\u00b7 L1=8 L2=24 \\u00b7 claim-ready 16 / $5100\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-09-14T04:47:04.436Z\\",\\n      \\"label\\": \\"meter\\",\\n      \\"note\\": \\"Devin 23% weekly \\u00b7 L1=8 L2=35 \\u00b7 claim-ready 16 / $5100\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-09-14T04:52:04.436Z\\",\\n      \\"label\\": \\"meter\\",\\n      \\"note\\": \\"Devin 23% weekly \\u00b7 L1=8 L2=35 \\u00b7 claim-ready 16 / $5100\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-09-14T04:57:04.436Z\\",\\n      \\"label\\": \\"meter\\",\\n      \\"note\\": \\"Devin 23% weekly \\u00b7 L1=8 L2=37 \\u00b7 claim-ready 16 / $5100\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-09-14T05:02:04.437Z\\",\\n      \\"label\\": \\"meter\\",\\n      \\"note\\": \\"Devin 24% weekly \\u00b7 L1=8 L2=34 \\u00b7 claim-ready 17 / $5100\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-09-14T05:07:04.437Z\\",\\n      \\"label\\": \\"meter\\",\\n      \\"note\\": \\"Devin 24% weekly \\u00b7 L1=8 L2=34 \\u00b7 claim-ready 19 / $5800\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-09-14T05:12:04.437Z\\",\\n      \\"label\\": \\"meter\\",\\n      \\"note\\": \\"Devin 24% weekly \\u00b7 L1=8 L2=34 \\u00b7 claim-ready 19 / $5800\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-09-14T05:17:04.437Z\\",\\n      \\"label\\": \\"meter\\",\\n      \\"note\\": \\"Devin 24% weekly \\u00b7 L1=8 L2=29 \\u00b7 claim-ready 19 / $5800\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-09-14T05:22:04.437Z\\",\\n      \\"label\\": \\"meter\\",\\n      \\"note\\": \\"Devin 24% weekly \\u00b7 L1=8 L2=30 \\u00b7 claim-ready 19 / $5800\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-09-14T05:27:04.438Z\\",\\n      \\"label\\": \\"meter\\",\\n      \\"note\\": \\"Devin 25% weekly \\u00b7 L1=8 L2=30 \\u00b7 claim-ready 19 / $5800\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-09-14T05:32:04.437Z\\",\\n      \\"label\\": \\"meter\\",\\n      \\"note\\": \\"Devin 25% weekly \\u00b7 L1=8 L2=30 \\u00b7 claim-ready 19 / $5800\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-09-14T05:37:04.437Z\\",\\n      \\"label\\": \\"meter\\",\\n      \\"note\\": \\"Devin 25% weekly \\u00b7 L1=8 L2=28 \\u00b7 claim-ready 19 / $5800\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-09-14T05:42:04.438Z\\",\\n      \\"label\\": \\"meter\\",\\n      \\"note\\": \\"Devin 25% weekly \\u00b7 L1=8 L2=24 \\u00b7 claim-ready 19 / $5800\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-09-14T05:47:04.438Z\\",\\n      \\"label\\": \\"meter\\",\\n      \\"note\\": \\"Devin 25% weekly \\u00b7 L1=8 L2=23 \\u00b7 claim-ready 21 / $9933\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-09-14T05:52:04.438Z\\",\\n      \\"label\\": \\"meter\\",\\n      \\"note\\": \\"Devin 25% weekly \\u00b7 L1=8 L2=22 \\u00b7 claim-ready 21 / $9933\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-09-14T05:57:04.438Z\\",\\n      \\"label\\": \\"meter\\",\\n      \\"note\\": \\"Devin 25% weekly \\u00b7 L1=8 L2=21 \\u00b7 claim-ready 23 / $11183\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-09-14T06:02:04.438Z\\",\\n      \\"label\\": \\"meter\\",\\n      \\"note\\": \\"Devin 25% weekly \\u00b7 L1=8 L2=20 \\u00b7 claim-ready 23 / $11183\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-09-14T06:07:04.438Z\\",\\n      \\"label\\": \\"meter\\",\\n      \\"note\\": \\"Devin 25% weekly \\u00b7 L1=8 L2=20 \\u00b7 claim-ready 23 / $11183\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-09-14T06:12:04.439Z\\",\\n      \\"label\\": \\"meter\\",\\n      \\"note\\": \\"Devin 25% weekly \\u00b7 L1=8 L2=18 \\u00b7 claim-ready 23 / $11183\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-09-14T06:17:04.439Z\\",\\n      \\"label\\": \\"meter\\",\\n      \\"note\\": \\"Devin 25% weekly \\u00b7 L1=8 L2=19 \\u00b7 claim-ready 23 / $11183\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-09-14T06:22:04.439Z\\",\\n      \\"label\\": \\"meter\\",\\n      \\"note\\": \\"Devin 25% weekly \\u00b7 L1=8 L2=18 \\u00b7 claim-ready 23 / $11183\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-09-14T06:27:04.439Z\\",\\n      \\"label\\": \\"meter\\",\\n      \\"note\\": \\"Devin 25% weekly \\u00b7 L1=8 L2=18 \\u00b7 claim-ready 23 / $11183\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-09-14T06:32:04.439Z\\",\\n      \\"label\\": \\"meter\\",\\n      \\"note\\": \\"Devin 25% weekly \\u00b7 L1=8 L2=16 \\u00b7 claim-ready 24 / $13683\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-09-14T06:37:04.439Z\\",\\n      \\"label\\": \\"meter\\",\\n      \\"note\\": \\"Devin 25% weekly \\u00b7 L1=8 L2=16 \\u00b7 claim-ready 24 / $13683\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-09-14T06:42:04.439Z\\",\\n      \\"label\\": \\"meter\\",\\n      \\"note\\": \\"Devin 25% weekly \\u00b7 L1=8 L2=13 \\u00b7 claim-ready 25 / $15683\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-09-14T06:47:04.439Z\\",\\n      \\"label\\": \\"meter\\",\\n      \\"note\\": \\"Devin 25% weekly \\u00b7 L1=8 L2=13 \\u00b7 claim-ready 26 / $16183\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-09-14T06:52:04.439Z\\",\\n      \\"label\\": \\"meter\\",\\n      \\"note\\": \\"Devin 25% weekly \\u00b7 L1=8 L2=16 \\u00b7 claim-ready 26 / $16183\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-09-14T06:57:04.440Z\\",\\n      \\"label\\": \\"meter\\",\\n      \\"note\\": \\"Devin 25% weekly \\u00b7 L1=8 L2=16 \\u00b7 claim-ready 26 / $16183\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-09-14T07:02:04.440Z\\",\\n      \\"label\\": \\"meter\\",\\n      \\"note\\": \\"Devin 25% weekly \\u00b7 L1=8 L2=13 \\u00b7 claim-ready 26 / $16183\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-09-14T07:07:04.441Z\\",\\n      \\"label\\": \\"meter\\",\\n      \\"note\\": \\"Devin 25% weekly \\u00b7 L1=8 L2=13 \\u00b7 claim-ready 26 / $16183\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-09-14T07:12:04.442Z\\",\\n      \\"label\\": \\"meter\\",\\n      \\"note\\": \\"Devin 25% weekly \\u00b7 L1=8 L2=13 \\u00b7 claim-ready 26 / $16183\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-09-14T07:17:04.443Z\\",\\n      \\"label\\": \\"meter\\",\\n      \\"note\\": \\"Devin 25% weekly \\u00b7 L1=8 L2=13 \\u00b7 claim-ready 26 / $16183\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-09-14T07:22:04.444Z\\",\\n      \\"label\\": \\"meter\\",\\n      \\"note\\": \\"Devin 25% weekly \\u00b7 L1=8 L2=13 \\u00b7 claim-ready 26 / $16183\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-09-14T07:27:04.445Z\\",\\n      \\"label\\": \\"meter\\",\\n      \\"note\\": \\"Devin 25% weekly \\u00b7 L1=8 L2=13 \\u00b7 claim-ready 26 / $16183\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-09-14T15:02:04.511Z\\",\\n      \\"label\\": \\"meter\\",\\n      \\"note\\": \\"Devin 45% weekly \\u00b7 L1=8 L2=0 \\u00b7 claim-ready 26 / $16183\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-09-14T15:02:04.511Z\\",\\n      \\"label\\": \\"closed\\",\\n      \\"note\\": \\"Final meter: Devin 45% weekly \\u00b7 L1=8 L2=0 \\u00b7 claim-ready 26 / $16183. Board frozen; successor mode removed as non-run.\\"\\n    }\\n  ],\\n  \\"metrics\\": {\\n    \\"mode\\": \\"agent \\u00b7 UFO-FSD L1 fleet\\",\\n    \\"parallelization\\": \\"8 L1 \\u00b7 up to 16 L2 per L1\\",\\n    \\"l1_model\\": \\"devin/swe-2:max\\",\\n    \\"l2_model\\": \\"devin/swe-2:max\\",\\n    \\"l1_count\\": 8,\\n    \\"l2_count\\": 0,\\n    \\"plan_type\\": \\"SWE-2\\",\\n    \\"meter_label\\": \\"Devin weekly quota\\",\\n    \\"provider_route\\": \\"devin\\",\\n    \\"outcome\\": \\"closed\\",\\n    \\"used_percent\\": 45,\\n    \\"start_percent\\": 22,\\n    \\"wall_l1_count\\": 13,\\n    \\"wall_l2_count\\": 0,\\n    \\"elapsed_min_from_session\\": 656.45,\\n    \\"pct_per_min\\": 0.035,\\n    \\"claim_ready_count\\": 26,\\n    \\"claim_ready_expected_usd\\": 16183,\\n    \\"claim_ready_companies\\": [\\n      \\"Stripe\\",\\n      \\"Coinbase\\",\\n      \\"Airtable\\",\\n      \\"Aiven\\",\\n      \\"Google\\",\\n      \\"Brave Software\\",\\n      \\"WordPress\\",\\n      \\"DigitalOcean\\",\\n      \\"Elastic\\",\\n      \\"ExpressVPN\\",\\n      \\"Kubernetes\\",\\n      \\"LaunchDarkly\\",\\n      \\"Mattermost\\",\\n      \\"MetaMask\\",\\n      \\"MongoDB\\",\\n      \\"Automattic\\",\\n      \\"Snapchat\\",\\n      \\"Microsoft\\"\\n    ],\\n    \\"advisor_model\\": \\"devin/gpt-6-astra:max\\"\\n  },\\n  \\"session_start\\": \\"2026-09-14T04:05:42Z\\",\\n  \\"curve\\": \\"data/swe2-groknight-curve.json\\",\\n  \\"links\\": {\\n    \\"board\\": \\"./\\",\\n    \\"repo\\": \\"https://github.com/VeigaPunk/ufo-fsd-alpha\\",\\n    \\"operator\\": \\"https://x.com/VeigaPunk\\"\\n  },\\n  \\"tags\\": [\\n    \\"swe-2\\",\\n    \\"devin\\",\\n    \\"queued\\",\\n    \\"ufo-fsd\\",\\n    \\"groknight\\"\\n  ],\\n  \\"paid\\": true,\\n  \\"not_a_grant\\": true,\\n  \\"category\\": \\"fleet\\",\\n  \\"meter\\": \\"devin_weekly\\",\\n  \\"claim_ready\\": [\\n    {\\n      \\"id\\": \\"ST-AI-001-customer-context-bypass\\",\\n      \\"company\\": \\"Stripe\\",\\n      \\"program\\": \\"stripe\\",\\n      \\"platform\\": \\"hackerone\\",\\n      \\"url\\": \\"https://hackerone.com/stripe\\",\\n      \\"expected_usd\\": 50,\\n      \\"expected_usd_basis\\": \\"H1 acquisition Low min 50 USD (core Low 100 unused; not High)\\",\\n      \\"l1\\": \\"groknight\\",\\n      \\"path\\": \\"claim-packages/ST-AI-001-customer-context-bypass/\\",\\n      \\"claimable_at\\": \\"2026-09-14T02:20:00Z\\"\\n    },\\n    {\\n      \\"id\\": \\"agentkit-x402-whitelist-ssrf\\",\\n      \\"company\\": \\"Coinbase\\",\\n      \\"program\\": \\"Coinbase\\",\\n      \\"platform\\": \\"hackerone\\",\\n      \\"url\\": \\"https://hackerone.com/coinbase\\",\\n      \\"expected_usd\\": 200,\\n      \\"expected_usd_basis\\": \\"H1 base_bounty 200 USD; High 6000 unused\\",\\n      \\"l1\\": \\"groknight\\",\\n      \\"path\\": \\"claim-packages/agentkit-x402-whitelist-ssrf/\\",\\n      \\"claimable_at\\": \\"2026-09-14T03:10:00Z\\"\\n    },\\n    {\\n      \\"id\\": \\"airtable-js-m01\\",\\n      \\"company\\": \\"Airtable\\",\\n      \\"program\\": \\"Airtable\\",\\n      \\"platform\\": \\"hackerone\\",\\n      \\"url\\": \\"https://hackerone.com/airtable\\",\\n      \\"expected_usd\\": 200,\\n      \\"expected_usd_basis\\": \\"H1 GraphQL bounty_table low=200 USD observed 2026-09-14T01:36:50Z\\",\\n      \\"l1\\": null,\\n      \\"path\\": \\"claim-packages/airtable-js-m01\\",\\n      \\"claimable_at\\": \\"2026-09-14T01:42:00Z\\"\\n    },\\n    {\\n      \\"id\\": \\"aiven-karapace-acl-prefix\\",\\n      \\"company\\": \\"Aiven\\",\\n      \\"program\\": \\"Aiven Managed Bug Bounty\\",\\n      \\"platform\\": \\"bugcrowd\\",\\n      \\"url\\": \\"https://bugcrowd.com/engagements/aiven-mbb-og\\",\\n      \\"expected_usd\\": 250,\\n      \\"expected_usd_basis\\": \\"published OSS table P3 min $250\\u2013$500; use min 250; PoC local (auth ON). Default auth-off not this claim.\\",\\n      \\"l1\\": \\"groknight\\",\\n      \\"path\\": \\"claim-packages/aiven-karapace-acl-prefix\\",\\n      \\"claimable_at\\": \\"2026-09-14T01:55:00Z\\"\\n    },\\n    {\\n      \\"id\\": \\"aiven-pglookout-m02\\",\\n      \\"company\\": \\"Aiven\\",\\n      \\"program\\": \\"Aiven Managed Bug Bounty\\",\\n      \\"platform\\": \\"bugcrowd\\",\\n      \\"url\\": \\"https://bugcrowd.com/engagements/aiven-mbb-og\\",\\n      \\"expected_usd\\": 50,\\n      \\"expected_usd_basis\\": \\"published Bugcrowd OSS repo table P4 min $50\\u2013$250\\",\\n      \\"l1\\": null,\\n      \\"path\\": \\"claim-packages/aiven-pglookout-m02\\",\\n      \\"claimable_at\\": \\"2026-09-14T01:32:00Z\\"\\n    },\\n    {\\n      \\"id\\": \\"angular-dev-infra-rbe-credential\\",\\n      \\"company\\": \\"Google\\",\\n      \\"program\\": \\"Google Open Source Software Vulnerability Reward Program\\",\\n      \\"platform\\": \\"bughunters\\",\\n      \\"url\\": \\"https://bughunters.google.com/about/rules/open-source/google-open-source-software-vulnerability-reward-program-rules\\",\\n      \\"expected_usd\\": 1000,\\n      \\"expected_usd_basis\\": \\"OT0 'other security issue' credential-leak floor $1,000 (enumerated); supply-chain 'insecure GCP build-environment config' framing gives upside toward $3,133.7-$31,337 if SA has RBE write scope. Conservative floor used.\\",\\n      \\"l1\\": \\"groknight\\",\\n      \\"path\\": \\"claim-packages/angular-dev-infra-rbe-credential\\",\\n      \\"claimable_at\\": \\"2026-09-14T02:40:00Z\\"\\n    },\\n    {\\n      \\"id\\": \\"bcr-stale-approval-race\\",\\n      \\"company\\": \\"Google\\",\\n      \\"program\\": \\"Google Open Source Software Vulnerability Reward Program\\",\\n      \\"platform\\": \\"bughunters\\",\\n      \\"url\\": \\"https://bughunters.google.com/about/rules/open-source/google-open-source-software-vulnerability-reward-program-rules\\",\\n      \\"expected_usd\\": 3133,\\n      \\"expected_usd_basis\\": \\"OT0 supply-chain range $3,133.7-$31,337; this is the only candidate that defeats the approval requirement itself (TOCTOU class, explicitly named in rules). Conservative min used pending live race-window measurement.\\",\\n      \\"l1\\": \\"groknight\\",\\n      \\"path\\": \\"claim-packages/bcr-stale-approval-race\\",\\n      \\"claimable_at\\": \\"2026-09-14T02:40:00Z\\"\\n    },\\n    {\\n      \\"id\\": \\"brave-bat-go-reputation-proxy\\",\\n      \\"company\\": \\"Brave Software\\",\\n      \\"program\\": \\"Brave Software\\",\\n      \\"platform\\": \\"hackerone\\",\\n      \\"url\\": \\"https://hackerone.com/brave\\",\\n      \\"expected_usd\\": 50,\\n      \\"expected_usd_basis\\": \\"H1 bounty_table Low min 50 USD / base_bounty 50. Program paused.\\",\\n      \\"l1\\": \\"groknight\\",\\n      \\"path\\": \\"claim-packages/brave-bat-go-reputation-proxy/\\",\\n      \\"claimable_at\\": \\"2026-09-14T03:34:00Z\\"\\n    },\\n    {\\n      \\"id\\": \\"buddypress-unauth-signup-resend\\",\\n      \\"company\\": \\"WordPress\\",\\n      \\"program\\": \\"WordPress\\",\\n      \\"platform\\": \\"hackerone\\",\\n      \\"url\\": \\"https://hackerone.com/wordpress\\",\\n      \\"expected_usd\\": 0,\\n      \\"expected_usd_basis\\": \\"WordPress H1 bounty_table null \\u2014 no published severity\\u2192USD mapping; not invented\\",\\n      \\"l1\\": \\"groknight-delta\\",\\n      \\"path\\": \\"claim-packages/buddypress-unauth-signup-resend\\",\\n      \\"claimable_at\\": \\"2026-09-14\\"\\n    },\\n    {\\n      \\"id\\": \\"coinbase-agentkit-x402\\",\\n      \\"company\\": \\"Coinbase\\",\\n      \\"program\\": \\"Coinbase\\",\\n      \\"platform\\": \\"hackerone\\",\\n      \\"url\\": \\"https://hackerone.com/coinbase\\",\\n      \\"expected_usd\\": 200,\\n      \\"expected_usd_basis\\": \\"H1 base_bounty 200 USD; Low/Med table cells null; High 6000 unused (SSRF/allowlist, not High-proven)\\",\\n      \\"l1\\": \\"groknight\\",\\n      \\"path\\": \\"claim-packages/coinbase-agentkit-x402\\",\\n      \\"claimable_at\\": \\"2026-09-14T03:10:00Z\\"\\n    },\\n    {\\n      \\"id\\": \\"do-agent-sonar-limit-injection\\",\\n      \\"company\\": \\"DigitalOcean\\",\\n      \\"program\\": \\"DigitalOcean Paid Bug Bounty\\",\\n      \\"platform\\": \\"intigriti\\",\\n      \\"url\\": \\"https://app.intigriti.com/programs/digitalocean/digitalocean/detail\\",\\n      \\"expected_usd\\": 500,\\n      \\"expected_usd_basis\\": \\"Intigriti DO program avg payout ~$1,110; DoS/credential-exposure class in in-scope OSS, low-mid tier. Conservative floor 500.\\",\\n      \\"l1\\": \\"groknight-farm-r2\\",\\n      \\"path\\": \\"claim-packages/do-agent-sonar-limit-injection\\",\\n      \\"claimable_at\\": \\"2026-09-14\\"\\n    },\\n    {\\n      \\"id\\": \\"esapi-path-injection\\",\\n      \\"company\\": \\"Elastic\\",\\n      \\"program\\": \\"elastic\\",\\n      \\"platform\\": \\"hackerone\\",\\n      \\"url\\": \\"https://hackerone.com/elastic\\",\\n      \\"expected_usd\\": 900,\\n      \\"expected_usd_basis\\": \\"Confused-deputy endpoint rewrite with credential carriage; mid-tier on H1 elastic table (Other low_min=100, higher severities scale up).\\",\\n      \\"l1\\": \\"groknight-farm-r2\\",\\n      \\"path\\": \\"claim-packages/esapi-path-injection\\",\\n      \\"claimable_at\\": \\"2026-09-14T00:00:00Z\\"\\n    },\\n    {\\n      \\"id\\": \\"esapi-userinfo-global-leak\\",\\n      \\"company\\": \\"Elastic\\",\\n      \\"program\\": \\"elastic\\",\\n      \\"platform\\": \\"hackerone\\",\\n      \\"url\\": \\"https://hackerone.com/elastic\\",\\n      \\"expected_usd\\": 350,\\n      \\"expected_usd_basis\\": \\"Credential-scope defect; medium tier. Requires multi-address config with userinfo on one address.\\",\\n      \\"l1\\": \\"groknight-farm-r2\\",\\n      \\"path\\": \\"claim-packages/esapi-userinfo-global-leak\\",\\n      \\"claimable_at\\": \\"2026-09-14T00:00:00Z\\"\\n    },\\n    {\\n      \\"id\\": \\"expressvpn-lightway-ipv6-leak\\",\\n      \\"company\\": \\"ExpressVPN\\",\\n      \\"program\\": \\"ExpressVPN - Bug Bounty Program\\",\\n      \\"platform\\": \\"yeswehack\\",\\n      \\"url\\": \\"https://yeswehack.com/programs/expressvpn-bug-bounty-program\\",\\n      \\"expected_usd\\": 200,\\n      \\"expected_usd_basis\\": \\"YesWeHack grid, HIGH asset, Low = $200 (page header also shows $50 Low \\u2014 unresolved display conflict; conservative high-asset Low used). Real-ip-leak on reference client; Medium $600 plausible if triager accepts shipped-app impact. Not invented.\\",\\n      \\"l1\\": \\"groknight-xai-oauth/grok-4.6\\",\\n      \\"path\\": \\"claim-packages/expressvpn-lightway-ipv6-leak\\",\\n      \\"claimable_at\\": \\"2026-09-14\\"\\n    },\\n    {\\n      \\"id\\": \\"k8s-nodebound-token-impersonation\\",\\n      \\"company\\": \\"Kubernetes\\",\\n      \\"program\\": \\"kubernetes\\",\\n      \\"platform\\": \\"hackerone\\",\\n      \\"url\\": \\"https://hackerone.com/kubernetes\\",\\n      \\"expected_usd\\": 2000,\\n      \\"expected_usd_basis\\": \\"CNCF-funded H1 program; cross-node privesc to arbitrary kubelet identity (RCE + SA theft on victim node). Conservative floor; H1 table behind JS wall.\\",\\n      \\"l1\\": \\"groknight-farm-r2\\",\\n      \\"path\\": \\"claim-packages/k8s-nodebound-token-impersonation\\",\\n      \\"claimable_at\\": \\"2026-09-14T00:00:00Z\\"\\n    },\\n    {\\n      \\"id\\": \\"ld-node-stream-tls-bypass\\",\\n      \\"company\\": \\"LaunchDarkly\\",\\n      \\"program\\": \\"LaunchDarkly Managed Bug Bounty\\",\\n      \\"platform\\": \\"bugcrowd\\",\\n      \\"url\\": \\"https://bugcrowd.com/engagements/launchdarkly-mbb-og\\",\\n      \\"expected_usd\\": 2500,\\n      \\"expected_usd_basis\\": \\"Published P2 min=max 2500 USD\\",\\n      \\"l1\\": \\"groknight\\",\\n      \\"path\\": \\"claim-packages/ld-node-stream-tls-bypass/\\",\\n      \\"claimable_at\\": \\"2026-09-14T02:20:00Z\\"\\n    },\\n    {\\n      \\"id\\": \\"mattermost-jira-oauth2-state-csrf\\",\\n      \\"company\\": \\"Mattermost\\",\\n      \\"program\\": \\"Mattermost Public Bug Bounty Engagement\\",\\n      \\"platform\\": \\"bugcrowd\\",\\n      \\"url\\": \\"https://bugcrowd.com/engagements/mattermost\\",\\n      \\"expected_usd\\": 500,\\n      \\"expected_usd_basis\\": \\"P2-P3 per published table ($300-$750); account-linking CSRF stealing victim Jira OAuth token + identity. Mid estimate.\\",\\n      \\"l1\\": \\"groknight-farm-r2\\",\\n      \\"path\\": \\"claim-packages/mattermost-jira-oauth2-state-csrf\\",\\n      \\"claimable_at\\": \\"2026-09-14T00:00:00Z\\"\\n    },\\n    {\\n      \\"id\\": \\"metamask-sdk-channel-inject\\",\\n      \\"company\\": \\"MetaMask\\",\\n      \\"program\\": \\"metamask\\",\\n      \\"platform\\": \\"hackerone\\",\\n      \\"url\\": \\"https://hackerone.com/metamask\\",\\n      \\"expected_usd\\": 50,\\n      \\"expected_usd_basis\\": \\"CSV MetaMask SDK bounty-eligible; L0 $50 floor\\",\\n      \\"l1\\": \\"groknight\\",\\n      \\"path\\": \\"claim-packages/metamask-sdk-channel-inject/poc\\",\\n      \\"claimable_at\\": \\"2026-09-14T03:12:00Z\\"\\n    },\\n    {\\n      \\"id\\": \\"metamask-sdk-mm01\\",\\n      \\"company\\": \\"MetaMask\\",\\n      \\"program\\": \\"MetaMask\\",\\n      \\"platform\\": \\"hackerone\\",\\n      \\"url\\": \\"https://hackerone.com/metamask\\",\\n      \\"expected_usd\\": 250,\\n      \\"expected_usd_basis\\": \\"H1 Core-tier Low=250 USD (conservative). Candidate High=5000 if channelId treated as public. Prerequisite: channelId known.\\",\\n      \\"l1\\": \\"groknight\\",\\n      \\"path\\": \\"claim-packages/metamask-sdk-mm01\\",\\n      \\"claimable_at\\": \\"2026-09-14T02:48:00Z\\"\\n    },\\n    {\\n      \\"id\\": \\"mm-sdk-channel-inject\\",\\n      \\"company\\": \\"MetaMask\\",\\n      \\"program\\": \\"MetaMask\\",\\n      \\"platform\\": \\"hackerone\\",\\n      \\"url\\": \\"https://hackerone.com/metamask\\",\\n      \\"expected_usd\\": 250,\\n      \\"expected_usd_basis\\": \\"H1 Core Tier Low 250 USD published\\",\\n      \\"l1\\": \\"groknight\\",\\n      \\"path\\": \\"claim-packages/mm-sdk-channel-inject/\\",\\n      \\"claimable_at\\": \\"2026-09-14T03:08:00Z\\"\\n    },\\n    {\\n      \\"id\\": \\"mongodb-mcp-m01\\",\\n      \\"company\\": \\"MongoDB\\",\\n      \\"program\\": \\"MongoDB\\",\\n      \\"platform\\": \\"hackerone\\",\\n      \\"url\\": \\"https://hackerone.com/mongodb\\",\\n      \\"expected_usd\\": 500,\\n      \\"expected_usd_basis\\": \\"H1 GraphQL bounty_table medium=500 USD observed 2026-09-14; shared ExportsManager cross-tenant read \\u2014 Medium not High\\",\\n      \\"l1\\": \\"groknight\\",\\n      \\"path\\": \\"claim-packages/mongodb-mcp-m01\\",\\n      \\"claimable_at\\": \\"2026-09-14T01:56:00Z\\"\\n    },\\n    {\\n      \\"id\\": \\"mongodb-mcp-m01-shared-exports\\",\\n      \\"company\\": \\"MongoDB\\",\\n      \\"program\\": \\"mongodb\\",\\n      \\"platform\\": \\"hackerone\\",\\n      \\"url\\": \\"https://hackerone.com/mongodb\\",\\n      \\"expected_usd\\": 100,\\n      \\"expected_usd_basis\\": \\"H1 Low band 100 USD\\",\\n      \\"l1\\": \\"groknight\\",\\n      \\"path\\": \\"claim-packages/mongodb-mcp-m01-shared-exports/\\",\\n      \\"claimable_at\\": \\"2026-09-14T02:10:00Z\\"\\n    },\\n    {\\n      \\"id\\": \\"sensei-form-idor-nonce-only\\",\\n      \\"company\\": \\"Automattic\\",\\n      \\"program\\": \\"Automattic\\",\\n      \\"platform\\": \\"hackerone\\",\\n      \\"url\\": \\"https://hackerone.com/automattic\\",\\n      \\"expected_usd\\": 100,\\n      \\"expected_usd_basis\\": \\"H1 Automattic published Everything Else ladder Low=$100 (Medium=$200 if IDOR scored higher; conservative min used)\\",\\n      \\"l1\\": \\"groknight-delta\\",\\n      \\"path\\": \\"claim-packages/sensei-form-idor-nonce-only/\\",\\n      \\"claimable_at\\": \\"2026-09-14T05:00:00Z\\"\\n    },\\n    {\\n      \\"id\\": \\"snapchat-playcanvas-loader-sinks\\",\\n      \\"company\\": \\"Snapchat\\",\\n      \\"program\\": \\"Snapchat\\",\\n      \\"platform\\": \\"hackerone\\",\\n      \\"url\\": \\"https://hackerone.com/snapchat\\",\\n      \\"expected_usd\\": 250,\\n      \\"expected_usd_basis\\": \\"H1 GraphQL policy_min_reward_usd=250; Tier B Playcanvas Medium min 250\\",\\n      \\"l1\\": \\"groknight\\",\\n      \\"path\\": \\"claim-packages/snapchat-playcanvas-loader-sinks/\\",\\n      \\"claimable_at\\": \\"2026-09-14T02:39:30Z\\"\\n    },\\n    {\\n      \\"id\\": \\"EPR-STOR-1\\",\\n      \\"company\\": \\"Elastic\\",\\n      \\"program\\": \\"elastic\\",\\n      \\"platform\\": \\"hackerone\\",\\n      \\"url\\": \\"https://hackerone.com/elastic\\",\\n      \\"expected_usd\\": 100,\\n      \\"expected_usd_basis\\": \\"H1 GraphQL bounty_table Other low_minimum=100\\",\\n      \\"l1\\": null,\\n      \\"path\\": \\"claim-packages/EPR-STOR-1\\",\\n      \\"claimable_at\\": \\"2026-09-14T01:35:00Z\\"\\n    },\\n    {\\n      \\"id\\": \\"azsdk-engsync-m01\\",\\n      \\"company\\": \\"Microsoft\\",\\n      \\"program\\": \\"Microsoft Open Source Bounty Program\\",\\n      \\"platform\\": \\"msrc\\",\\n      \\"url\\": \\"https://www.microsoft.com/en-us/msrc/opensourcebountyprogram\\",\\n      \\"expected_usd\\": 2500,\\n      \\"expected_usd_basis\\": \\"MSRC OSS GitHub Actions Critical band $750-$5,000; conservative mid\\",\\n      \\"l1\\": \\"gkmicrosoft-swe2\\",\\n      \\"path\\": \\".ufo-missions/groknight/claim-packages/azsdk-engsync-m01/manifest.json\\",\\n      \\"claimable_at\\": \\"2026-09-14T06:28:58Z\\"\\n    }\\n  ],\\n  \\"follows\\": \\"veigapunk-xai-api-groknight-300usd\\",\\n  \\"snapshot\\": {\\n    \\"ts\\": \\"2026-09-14T15:02:04.511Z\\",\\n    \\"used_percent\\": 45,\\n    \\"l1_count\\": 8,\\n    \\"l2_count\\": 0,\\n    \\"wall_l1_count\\": 13,\\n    \\"wall_l2_count\\": 0,\\n    \\"claim_ready_count\\": 26,\\n    \\"claim_ready_expected_usd\\": 16183,\\n    \\"claim_ready_companies\\": [\\n      \\"Stripe\\",\\n      \\"Coinbase\\",\\n      \\"Airtable\\",\\n      \\"Aiven\\",\\n      \\"Google\\",\\n      \\"Brave Software\\",\\n      \\"WordPress\\",\\n      \\"DigitalOcean\\",\\n      \\"Elastic\\",\\n      \\"ExpressVPN\\",\\n      \\"Kubernetes\\",\\n      \\"LaunchDarkly\\",\\n      \\"Mattermost\\",\\n      \\"MetaMask\\",\\n      \\"MongoDB\\",\\n      \\"Automattic\\",\\n      \\"Snapchat\\",\\n      \\"Microsoft\\"\\n    ],\\n    \\"claim_ready\\": [\\n      {\\n        \\"id\\": \\"ST-AI-001-customer-context-bypass\\",\\n        \\"company\\": \\"Stripe\\",\\n        \\"program\\": \\"stripe\\",\\n        \\"platform\\": \\"hackerone\\",\\n        \\"url\\": \\"https://hackerone.com/stripe\\",\\n        \\"expected_usd\\": 50,\\n        \\"expected_usd_basis\\": \\"H1 acquisition Low min 50 USD (core Low 100 unused; not High)\\",\\n        \\"l1\\": \\"groknight\\",\\n        \\"path\\": \\"claim-packages/ST-AI-001-customer-context-bypass/\\",\\n        \\"claimable_at\\": \\"2026-09-14T02:20:00Z\\"\\n      },\\n      {\\n        \\"id\\": \\"agentkit-x402-whitelist-ssrf\\",\\n        \\"company\\": \\"Coinbase\\",\\n        \\"program\\": \\"Coinbase\\",\\n        \\"platform\\": \\"hackerone\\",\\n        \\"url\\": \\"https://hackerone.com/coinbase\\",\\n        \\"expected_usd\\": 200,\\n        \\"expected_usd_basis\\": \\"H1 base_bounty 200 USD; High 6000 unused\\",\\n        \\"l1\\": \\"groknight\\",\\n        \\"path\\": \\"claim-packages/agentkit-x402-whitelist-ssrf/\\",\\n        \\"claimable_at\\": \\"2026-09-14T03:10:00Z\\"\\n      },\\n      {\\n        \\"id\\": \\"airtable-js-m01\\",\\n        \\"company\\": \\"Airtable\\",\\n        \\"program\\": \\"Airtable\\",\\n        \\"platform\\": \\"hackerone\\",\\n        \\"url\\": \\"https://hackerone.com/airtable\\",\\n        \\"expected_usd\\": 200,\\n        \\"expected_usd_basis\\": \\"H1 GraphQL bounty_table low=200 USD observed 2026-09-14T01:36:50Z\\",\\n        \\"l1\\": null,\\n        \\"path\\": \\"claim-packages/airtable-js-m01\\",\\n        \\"claimable_at\\": \\"2026-09-14T01:42:00Z\\"\\n      },\\n      {\\n        \\"id\\": \\"aiven-karapace-acl-prefix\\",\\n        \\"company\\": \\"Aiven\\",\\n        \\"program\\": \\"Aiven Managed Bug Bounty\\",\\n        \\"platform\\": \\"bugcrowd\\",\\n        \\"url\\": \\"https://bugcrowd.com/engagements/aiven-mbb-og\\",\\n        \\"expected_usd\\": 250,\\n        \\"expected_usd_basis\\": \\"published OSS table P3 min $250\\u2013$500; use min 250; PoC local (auth ON). Default auth-off not this claim.\\",\\n        \\"l1\\": \\"groknight\\",\\n        \\"path\\": \\"claim-packages/aiven-karapace-acl-prefix\\",\\n        \\"claimable_at\\": \\"2026-09-14T01:55:00Z\\"\\n      },\\n      {\\n        \\"id\\": \\"aiven-pglookout-m02\\",\\n        \\"company\\": \\"Aiven\\",\\n        \\"program\\": \\"Aiven Managed Bug Bounty\\",\\n        \\"platform\\": \\"bugcrowd\\",\\n        \\"url\\": \\"https://bugcrowd.com/engagements/aiven-mbb-og\\",\\n        \\"expected_usd\\": 50,\\n        \\"expected_usd_basis\\": \\"published Bugcrowd OSS repo table P4 min $50\\u2013$250\\",\\n        \\"l1\\": null,\\n        \\"path\\": \\"claim-packages/aiven-pglookout-m02\\",\\n        \\"claimable_at\\": \\"2026-09-14T01:32:00Z\\"\\n      },\\n      {\\n        \\"id\\": \\"angular-dev-infra-rbe-credential\\",\\n        \\"company\\": \\"Google\\",\\n        \\"program\\": \\"Google Open Source Software Vulnerability Reward Program\\",\\n        \\"platform\\": \\"bughunters\\",\\n        \\"url\\": \\"https://bughunters.google.com/about/rules/open-source/google-open-source-software-vulnerability-reward-program-rules\\",\\n        \\"expected_usd\\": 1000,\\n        \\"expected_usd_basis\\": \\"OT0 'other security issue' credential-leak floor $1,000 (enumerated); supply-chain 'insecure GCP build-environment config' framing gives upside toward $3,133.7-$31,337 if SA has RBE write scope. Conservative floor used.\\",\\n        \\"l1\\": \\"groknight\\",\\n        \\"path\\": \\"claim-packages/angular-dev-infra-rbe-credential\\",\\n        \\"claimable_at\\": \\"2026-09-14T02:40:00Z\\"\\n      },\\n      {\\n        \\"id\\": \\"bcr-stale-approval-race\\",\\n        \\"company\\": \\"Google\\",\\n        \\"program\\": \\"Google Open Source Software Vulnerability Reward Program\\",\\n        \\"platform\\": \\"bughunters\\",\\n        \\"url\\": \\"https://bughunters.google.com/about/rules/open-source/google-open-source-software-vulnerability-reward-program-rules\\",\\n        \\"expected_usd\\": 3133,\\n        \\"expected_usd_basis\\": \\"OT0 supply-chain range $3,133.7-$31,337; this is the only candidate that defeats the approval requirement itself (TOCTOU class, explicitly named in rules). Conservative min used pending live race-window measurement.\\",\\n        \\"l1\\": \\"groknight\\",\\n        \\"path\\": \\"claim-packages/bcr-stale-approval-race\\",\\n        \\"claimable_at\\": \\"2026-09-14T02:40:00Z\\"\\n      },\\n      {\\n        \\"id\\": \\"brave-bat-go-reputation-proxy\\",\\n        \\"company\\": \\"Brave Software\\",\\n        \\"program\\": \\"Brave Software\\",\\n        \\"platform\\": \\"hackerone\\",\\n        \\"url\\": \\"https://hackerone.com/brave\\",\\n        \\"expected_usd\\": 50,\\n        \\"expected_usd_basis\\": \\"H1 bounty_table Low min 50 USD / base_bounty 50. Program paused.\\",\\n        \\"l1\\": \\"groknight\\",\\n        \\"path\\": \\"claim-packages/brave-bat-go-reputation-proxy/\\",\\n        \\"claimable_at\\": \\"2026-09-14T03:34:00Z\\"\\n      },\\n      {\\n        \\"id\\": \\"buddypress-unauth-signup-resend\\",\\n        \\"company\\": \\"WordPress\\",\\n        \\"program\\": \\"WordPress\\",\\n        \\"platform\\": \\"hackerone\\",\\n        \\"url\\": \\"https://hackerone.com/wordpress\\",\\n        \\"expected_usd\\": 0,\\n        \\"expected_usd_basis\\": \\"WordPress H1 bounty_table null \\u2014 no published severity\\u2192USD mapping; not invented\\",\\n        \\"l1\\": \\"groknight-delta\\",\\n        \\"path\\": \\"claim-packages/buddypress-unauth-signup-resend\\",\\n        \\"claimable_at\\": \\"2026-09-14\\"\\n      },\\n      {\\n        \\"id\\": \\"coinbase-agentkit-x402\\",\\n        \\"company\\": \\"Coinbase\\",\\n        \\"program\\": \\"Coinbase\\",\\n        \\"platform\\": \\"hackerone\\",\\n        \\"url\\": \\"https://hackerone.com/coinbase\\",\\n        \\"expected_usd\\": 200,\\n        \\"expected_usd_basis\\": \\"H1 base_bounty 200 USD; Low/Med table cells null; High 6000 unused (SSRF/allowlist, not High-proven)\\",\\n        \\"l1\\": \\"groknight\\",\\n        \\"path\\": \\"claim-packages/coinbase-agentkit-x402\\",\\n        \\"claimable_at\\": \\"2026-09-14T03:10:00Z\\"\\n      },\\n      {\\n        \\"id\\": \\"do-agent-sonar-limit-injection\\",\\n        \\"company\\": \\"DigitalOcean\\",\\n        \\"program\\": \\"DigitalOcean Paid Bug Bounty\\",\\n        \\"platform\\": \\"intigriti\\",\\n        \\"url\\": \\"https://app.intigriti.com/programs/digitalocean/digitalocean/detail\\",\\n        \\"expected_usd\\": 500,\\n        \\"expected_usd_basis\\": \\"Intigriti DO program avg payout ~$1,110; DoS/credential-exposure class in in-scope OSS, low-mid tier. Conservative floor 500.\\",\\n        \\"l1\\": \\"groknight-farm-r2\\",\\n        \\"path\\": \\"claim-packages/do-agent-sonar-limit-injection\\",\\n        \\"claimable_at\\": \\"2026-09-14\\"\\n      },\\n      {\\n        \\"id\\": \\"esapi-path-injection\\",\\n        \\"company\\": \\"Elastic\\",\\n        \\"program\\": \\"elastic\\",\\n        \\"platform\\": \\"hackerone\\",\\n        \\"url\\": \\"https://hackerone.com/elastic\\",\\n        \\"expected_usd\\": 900,\\n        \\"expected_usd_basis\\": \\"Confused-deputy endpoint rewrite with credential carriage; mid-tier on H1 elastic table (Other low_min=100, higher severities scale up).\\",\\n        \\"l1\\": \\"groknight-farm-r2\\",\\n        \\"path\\": \\"claim-packages/esapi-path-injection\\",\\n        \\"claimable_at\\": \\"2026-09-14T00:00:00Z\\"\\n      },\\n      {\\n        \\"id\\": \\"esapi-userinfo-global-leak\\",\\n        \\"company\\": \\"Elastic\\",\\n        \\"program\\": \\"elastic\\",\\n        \\"platform\\": \\"hackerone\\",\\n        \\"url\\": \\"https://hackerone.com/elastic\\",\\n        \\"expected_usd\\": 350,\\n        \\"expected_usd_basis\\": \\"Credential-scope defect; medium tier. Requires multi-address config with userinfo on one address.\\",\\n        \\"l1\\": \\"groknight-farm-r2\\",\\n        \\"path\\": \\"claim-packages/esapi-userinfo-global-leak\\",\\n        \\"claimable_at\\": \\"2026-09-14T00:00:00Z\\"\\n      },\\n      {\\n        \\"id\\": \\"expressvpn-lightway-ipv6-leak\\",\\n        \\"company\\": \\"ExpressVPN\\",\\n        \\"program\\": \\"ExpressVPN - Bug Bounty Program\\",\\n        \\"platform\\": \\"yeswehack\\",\\n        \\"url\\": \\"https://yeswehack.com/programs/expressvpn-bug-bounty-program\\",\\n        \\"expected_usd\\": 200,\\n        \\"expected_usd_basis\\": \\"YesWeHack grid, HIGH asset, Low = $200 (page header also shows $50 Low \\u2014 unresolved display conflict; conservative high-asset Low used). Real-ip-leak on reference client; Medium $600 plausible if triager accepts shipped-app impact. Not invented.\\",\\n        \\"l1\\": \\"groknight-xai-oauth/grok-4.6\\",\\n        \\"path\\": \\"claim-packages/expressvpn-lightway-ipv6-leak\\",\\n        \\"claimable_at\\": \\"2026-09-14\\"\\n      },\\n      {\\n        \\"id\\": \\"k8s-nodebound-token-impersonation\\",\\n        \\"company\\": \\"Kubernetes\\",\\n        \\"program\\": \\"kubernetes\\",\\n        \\"platform\\": \\"hackerone\\",\\n        \\"url\\": \\"https://hackerone.com/kubernetes\\",\\n        \\"expected_usd\\": 2000,\\n        \\"expected_usd_basis\\": \\"CNCF-funded H1 program; cross-node privesc to arbitrary kubelet identity (RCE + SA theft on victim node). Conservative floor; H1 table behind JS wall.\\",\\n        \\"l1\\": \\"groknight-farm-r2\\",\\n        \\"path\\": \\"claim-packages/k8s-nodebound-token-impersonation\\",\\n        \\"claimable_at\\": \\"2026-09-14T00:00:00Z\\"\\n      },\\n      {\\n        \\"id\\": \\"ld-node-stream-tls-bypass\\",\\n        \\"company\\": \\"LaunchDarkly\\",\\n        \\"program\\": \\"LaunchDarkly Managed Bug Bounty\\",\\n        \\"platform\\": \\"bugcrowd\\",\\n        \\"url\\": \\"https://bugcrowd.com/engagements/launchdarkly-mbb-og\\",\\n        \\"expected_usd\\": 2500,\\n        \\"expected_usd_basis\\": \\"Published P2 min=max 2500 USD\\",\\n        \\"l1\\": \\"groknight\\",\\n        \\"path\\": \\"claim-packages/ld-node-stream-tls-bypass/\\",\\n        \\"claimable_at\\": \\"2026-09-14T02:20:00Z\\"\\n      },\\n      {\\n        \\"id\\": \\"mattermost-jira-oauth2-state-csrf\\",\\n        \\"company\\": \\"Mattermost\\",\\n        \\"program\\": \\"Mattermost Public Bug Bounty Engagement\\",\\n        \\"platform\\": \\"bugcrowd\\",\\n        \\"url\\": \\"https://bugcrowd.com/engagements/mattermost\\",\\n        \\"expected_usd\\": 500,\\n        \\"expected_usd_basis\\": \\"P2-P3 per published table ($300-$750); account-linking CSRF stealing victim Jira OAuth token + identity. Mid estimate.\\",\\n        \\"l1\\": \\"groknight-farm-r2\\",\\n        \\"path\\": \\"claim-packages/mattermost-jira-oauth2-state-csrf\\",\\n        \\"claimable_at\\": \\"2026-09-14T00:00:00Z\\"\\n      },\\n      {\\n        \\"id\\": \\"metamask-sdk-channel-inject\\",\\n        \\"company\\": \\"MetaMask\\",\\n        \\"program\\": \\"metamask\\",\\n        \\"platform\\": \\"hackerone\\",\\n        \\"url\\": \\"https://hackerone.com/metamask\\",\\n        \\"expected_usd\\": 50,\\n        \\"expected_usd_basis\\": \\"CSV MetaMask SDK bounty-eligible; L0 $50 floor\\",\\n        \\"l1\\": \\"groknight\\",\\n        \\"path\\": \\"claim-packages/metamask-sdk-channel-inject/poc\\",\\n        \\"claimable_at\\": \\"2026-09-14T03:12:00Z\\"\\n      },\\n      {\\n        \\"id\\": \\"metamask-sdk-mm01\\",\\n        \\"company\\": \\"MetaMask\\",\\n        \\"program\\": \\"MetaMask\\",\\n        \\"platform\\": \\"hackerone\\",\\n        \\"url\\": \\"https://hackerone.com/metamask\\",\\n        \\"expected_usd\\": 250,\\n        \\"expected_usd_basis\\": \\"H1 Core-tier Low=250 USD (conservative). Candidate High=5000 if channelId treated as public. Prerequisite: channelId known.\\",\\n        \\"l1\\": \\"groknight\\",\\n        \\"path\\": \\"claim-packages/metamask-sdk-mm01\\",\\n        \\"claimable_at\\": \\"2026-09-14T02:48:00Z\\"\\n      },\\n      {\\n        \\"id\\": \\"mm-sdk-channel-inject\\",\\n        \\"company\\": \\"MetaMask\\",\\n        \\"program\\": \\"MetaMask\\",\\n        \\"platform\\": \\"hackerone\\",\\n        \\"url\\": \\"https://hackerone.com/metamask\\",\\n        \\"expected_usd\\": 250,\\n        \\"expected_usd_basis\\": \\"H1 Core Tier Low 250 USD published\\",\\n        \\"l1\\": \\"groknight\\",\\n        \\"path\\": \\"claim-packages/mm-sdk-channel-inject/\\",\\n        \\"claimable_at\\": \\"2026-09-14T03:08:00Z\\"\\n      },\\n      {\\n        \\"id\\": \\"mongodb-mcp-m01\\",\\n        \\"company\\": \\"MongoDB\\",\\n        \\"program\\": \\"MongoDB\\",\\n        \\"platform\\": \\"hackerone\\",\\n        \\"url\\": \\"https://hackerone.com/mongodb\\",\\n        \\"expected_usd\\": 500,\\n        \\"expected_usd_basis\\": \\"H1 GraphQL bounty_table medium=500 USD observed 2026-09-14; shared ExportsManager cross-tenant read \\u2014 Medium not High\\",\\n        \\"l1\\": \\"groknight\\",\\n        \\"path\\": \\"claim-packages/mongodb-mcp-m01\\",\\n        \\"claimable_at\\": \\"2026-09-14T01:56:00Z\\"\\n      },\\n      {\\n        \\"id\\": \\"mongodb-mcp-m01-shared-exports\\",\\n        \\"company\\": \\"MongoDB\\",\\n        \\"program\\": \\"mongodb\\",\\n        \\"platform\\": \\"hackerone\\",\\n        \\"url\\": \\"https://hackerone.com/mongodb\\",\\n        \\"expected_usd\\": 100,\\n        \\"expected_usd_basis\\": \\"H1 Low band 100 USD\\",\\n        \\"l1\\": \\"groknight\\",\\n        \\"path\\": \\"claim-packages/mongodb-mcp-m01-shared-exports/\\",\\n        \\"claimable_at\\": \\"2026-09-14T02:10:00Z\\"\\n      },\\n      {\\n        \\"id\\": \\"sensei-form-idor-nonce-only\\",\\n        \\"company\\": \\"Automattic\\",\\n        \\"program\\": \\"Automattic\\",\\n        \\"platform\\": \\"hackerone\\",\\n        \\"url\\": \\"https://hackerone.com/automattic\\",\\n        \\"expected_usd\\": 100,\\n        \\"expected_usd_basis\\": \\"H1 Automattic published Everything Else ladder Low=$100 (Medium=$200 if IDOR scored higher; conservative min used)\\",\\n        \\"l1\\": \\"groknight-delta\\",\\n        \\"path\\": \\"claim-packages/sensei-form-idor-nonce-only/\\",\\n        \\"claimable_at\\": \\"2026-09-14T05:00:00Z\\"\\n      },\\n      {\\n        \\"id\\": \\"snapchat-playcanvas-loader-sinks\\",\\n        \\"company\\": \\"Snapchat\\",\\n        \\"program\\": \\"Snapchat\\",\\n        \\"platform\\": \\"hackerone\\",\\n        \\"url\\": \\"https://hackerone.com/snapchat\\",\\n        \\"expected_usd\\": 250,\\n        \\"expected_usd_basis\\": \\"H1 GraphQL policy_min_reward_usd=250; Tier B Playcanvas Medium min 250\\",\\n        \\"l1\\": \\"groknight\\",\\n        \\"path\\": \\"claim-packages/snapchat-playcanvas-loader-sinks/\\",\\n        \\"claimable_at\\": \\"2026-09-14T02:39:30Z\\"\\n      },\\n      {\\n        \\"id\\": \\"EPR-STOR-1\\",\\n        \\"company\\": \\"Elastic\\",\\n        \\"program\\": \\"elastic\\",\\n        \\"platform\\": \\"hackerone\\",\\n        \\"url\\": \\"https://hackerone.com/elastic\\",\\n        \\"expected_usd\\": 100,\\n        \\"expected_usd_basis\\": \\"H1 GraphQL bounty_table Other low_minimum=100\\",\\n        \\"l1\\": null,\\n        \\"path\\": \\"claim-packages/EPR-STOR-1\\",\\n        \\"claimable_at\\": \\"2026-09-14T01:35:00Z\\"\\n      },\\n      {\\n        \\"id\\": \\"azsdk-engsync-m01\\",\\n        \\"company\\": \\"Microsoft\\",\\n        \\"program\\": \\"Microsoft Open Source Bounty Program\\",\\n        \\"platform\\": \\"msrc\\",\\n        \\"url\\": \\"https://www.microsoft.com/en-us/msrc/opensourcebountyprogram\\",\\n        \\"expected_usd\\": 2500,\\n        \\"expected_usd_basis\\": \\"MSRC OSS GitHub Actions Critical band $750-$5,000; conservative mid\\",\\n        \\"l1\\": \\"gkmicrosoft-swe2\\",\\n        \\"path\\": \\".ufo-missions/groknight/claim-packages/azsdk-engsync-m01/manifest.json\\",\\n        \\"claimable_at\\": \\"2026-09-14T06:28:58Z\\"\\n      }\\n    ],\\n    \\"status\\": \\"live\\"\\n  }\\n}", "data/run-xai-api-groknight-300usd.json": "{\\n  \\"id\\": \\"veigapunk-xai-api-groknight-300usd\\",\\n  \\"title\\": \\"xAI API groknight \\u2014 $300 budget \\u00b7 same bounty hunt, OAuth swap\\",\\n  \\"runner\\": \\"VeigaPunk\\",\\n  \\"account_hint\\": \\"jpveigao10@gmail.com\\",\\n  \\"provider\\": \\"xAI API\\",\\n  \\"product\\": \\"xAI API key \\u00b7 $300 hard budget \\u00b7 grok-4.6:high L1 \\u00d78 \\u00b7 grok-4.6:high L2 \\u00b7 same groknight bounty hunt\\",\\n  \\"budget_usd\\": 300,\\n  \\"budget_note\\": \\"Paid xAI API \\u2014 not SuperGrok OAuth, not a grant. Hard stop at $300. Same hunt cwd open-bug-bounties/claim-packages. Operator claims later.\\",\\n  \\"currency\\": \\"USD\\",\\n  \\"status\\": \\"closed\\",\\n  \\"duration\\": \\"closed \\u00b7 cutover armed, superseded before first meter\\",\\n  \\"venue\\": \\"tmux ufo_sighting:groknight \\u00b7 cwd open-bug-bounties\\",\\n  \\"summary\\": \\"CLOSED. xAI API groknight $300: cutover armed after SuperGrok OAuth weekly hit 100%, then superseded by the SWE-2 seat run before first meter. $0 of $300 spent.\\",\\n  \\"timeline\\": [\\n    {\\n      \\"t\\": \\"2026-09-14T02:23:00Z\\",\\n      \\"label\\": \\"queued\\",\\n      \\"note\\": \\"Cutover armed: close OAuth speedrun at 100% weekly, then xai/grok-4.6:high + $300 API.\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-09-14T03:50:11Z\\",\\n      \\"label\\": \\"cutover\\",\\n      \\"note\\": \\"OAuth 100% \\u2192 xAI API $300 grok-4.6:high\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-09-14T03:50:27.037Z\\",\\n      \\"label\\": \\"cutover\\",\\n      \\"note\\": \\"xai-oauth weekly 100% \\u2192 xai API $300\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-09-14T04:05:42Z\\",\\n      \\"label\\": \\"closed\\",\\n      \\"note\\": \\"Superseded by SWE-2 groknight seats before first meter \\u00b7 $0 spent of $300\\"\\n    }\\n  ],\\n  \\"metrics\\": {\\n    \\"mode\\": \\"agent \\u00b7 UFO-FSD L1 fleet\\",\\n    \\"parallelization\\": \\"8 L1 \\u00b7 up to 16 L2 per L1\\",\\n    \\"l1_model\\": \\"xai/grok-4.6:high\\",\\n    \\"l2_model\\": \\"xai/grok-4.6:high\\",\\n    \\"l1_count\\": 8,\\n    \\"l2_count\\": 0,\\n    \\"spent_usd\\": 0,\\n    \\"budget_usd\\": 300,\\n    \\"start_percent\\": 0,\\n    \\"used_percent\\": 0,\\n    \\"plan_type\\": \\"xAI API\\",\\n    \\"meter_label\\": \\"xAI API USD toward $300\\",\\n    \\"provider_route\\": \\"xai\\",\\n    \\"outcome\\": \\"closed\\"\\n  },\\n  \\"session_start\\": \\"2026-09-14T03:50:27.037Z\\",\\n  \\"curve\\": \\"data/xai-api-groknight-curve.json\\",\\n  \\"links\\": {\\n    \\"board\\": \\"./\\",\\n    \\"xai\\": \\"https://api.x.ai/\\",\\n    \\"repo\\": \\"https://github.com/VeigaPunk/ufo-fsd-alpha\\",\\n    \\"operator\\": \\"https://x.com/VeigaPunk\\"\\n  },\\n  \\"tags\\": [\\n    \\"grok\\",\\n    \\"xai-api\\",\\n    \\"queued\\",\\n    \\"ufo-fsd\\",\\n    \\"groknight\\",\\n    \\"hackerone\\",\\n    \\"bugcrowd\\",\\n    \\"intigriti\\"\\n  ],\\n  \\"paid\\": true,\\n  \\"not_a_grant\\": true,\\n  \\"category\\": \\"fleet\\",\\n  \\"meter\\": \\"xai_api_usd\\",\\n  \\"claim_ready\\": [],\\n  \\"follows\\": \\"veigapunk-supergrok-oauth-groknight-2026-09-13\\"\\n}", "data/run-supergrok-oauth-groknight-2026-09-13.json": "{\\n  \\"id\\": \\"veigapunk-supergrok-oauth-groknight-2026-09-13\\",\\n  \\"title\\": \\"SuperGrok Heavy OAuth \\u2014 80% remaining \\u00b7 groknight UFO bounty fleet\\",\\n  \\"runner\\": \\"VeigaPunk\\",\\n  \\"account_hint\\": \\"jpveigao10@gmail.com\\",\\n  \\"provider\\": \\"xAI / SuperGrok\\",\\n  \\"product\\": \\"SuperGrok Heavy \\u00b7 xAI OAuth weekly credits \\u00b7 grok-4.6:low L1 \\u00d78 \\u00b7 grok-4.5:low L2 \\u00b7 ufo-fsd bounty fleet\\",\\n  \\"budget_usd\\": null,\\n  \\"budget_note\\": \\"Paid SuperGrok OAuth \\u2014 not a grant, not XAI_API_KEY. Meter is weekly SuperGrok credits used_percent. Operator start SSOT 20%. First meter 22%. Live poll every 5 min.\\",\\n  \\"currency\\": \\"USD\\",\\n  \\"status\\": \\"closed\\",\\n  \\"duration\\": \\"closed \\u00b7 263.2 min \\u00b7 SuperGrok weekly 100%\\",\\n  \\"venue\\": \\"tmux ufo_sighting:groknight \\u00b7 cwd open-bug-bounties\\",\\n  \\"summary\\": \\"CLOSED groknight SuperGrok OAuth at 100% weekly (start 20%). L1=8 L2=0. Claim-ready 15 \\u00b7 expected $5000.\\",\\n  \\"timeline\\": [\\n    {\\n      \\"t\\": \\"2026-09-13T23:28:00Z\\",\\n      \\"label\\": \\"groknight launch\\",\\n      \\"note\\": \\"8\\u00d7 L1 grok-4.6:high \\u00b7 xAI OAuth pin \\u00b7 cwd open-bug-bounties\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-09-14T00:45:26Z\\",\\n      \\"label\\": \\"speedrun board live\\",\\n      \\"note\\": \\"operator start 20% \\u00b7 meter 22% \\u00b7 L1=8 L2=2 \\u00b7 wall L1=24 L2=10\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-09-14T00:46:31.496Z\\",\\n      \\"label\\": \\"meter\\",\\n      \\"note\\": \\"22% SuperGrok weekly \\u00b7 L1=8 L2=1\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-09-14T00:51:34.556Z\\",\\n      \\"label\\": \\"meter\\",\\n      \\"note\\": \\"25% SuperGrok weekly \\u00b7 L1=8 L2=11\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-09-14T00:56:34.556Z\\",\\n      \\"label\\": \\"meter\\",\\n      \\"note\\": \\"29% SuperGrok weekly \\u00b7 L1=8 L2=38\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-09-14T00:57:26.881Z\\",\\n      \\"label\\": \\"meter\\",\\n      \\"note\\": \\"29% weekly \\u00b7 L1=8 L2=26 \\u00b7 claim-ready 0 / $0\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-09-14T01:02:33.078Z\\",\\n      \\"label\\": \\"meter\\",\\n      \\"note\\": \\"33% weekly \\u00b7 L1=8 L2=28 \\u00b7 claim-ready 0 / $0\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-09-14T01:07:33.078Z\\",\\n      \\"label\\": \\"meter\\",\\n      \\"note\\": \\"36% weekly \\u00b7 L1=8 L2=16 \\u00b7 claim-ready 0 / $0\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-09-14T01:12:33.079Z\\",\\n      \\"label\\": \\"meter\\",\\n      \\"note\\": \\"40% weekly \\u00b7 L1=8 L2=27 \\u00b7 claim-ready 0 / $0\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-09-14T01:17:33.086Z\\",\\n      \\"label\\": \\"meter\\",\\n      \\"note\\": \\"43% weekly \\u00b7 L1=8 L2=7 \\u00b7 claim-ready 0 / $0\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-09-14T01:22:33.087Z\\",\\n      \\"label\\": \\"meter\\",\\n      \\"note\\": \\"43% weekly \\u00b7 L1=8 L2=13 \\u00b7 claim-ready 0 / $0\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-09-14T01:27:33.093Z\\",\\n      \\"label\\": \\"meter\\",\\n      \\"note\\": \\"47% weekly \\u00b7 L1=8 L2=9 \\u00b7 claim-ready 0 / $0\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-09-14T01:32:33.096Z\\",\\n      \\"label\\": \\"meter\\",\\n      \\"note\\": \\"49% weekly \\u00b7 L1=8 L2=15 \\u00b7 claim-ready 0 / $0\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-09-14T01:37:33.099Z\\",\\n      \\"label\\": \\"meter\\",\\n      \\"note\\": \\"49% weekly \\u00b7 L1=8 L2=12 \\u00b7 claim-ready 2 / $150\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-09-14T01:32:04Z\\",\\n      \\"label\\": \\"/switch grok-4.6:low\\",\\n      \\"note\\": \\"Session-only /switch xai-oauth/grok-4.6:low on groknight L1s. thinking_level_change=low confirmed apple,cloudflare,github,gitlab,google,microsoft,expressvpn. gkmeta still grok-4.6:high (session hung, no thinking_level_change).\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-09-14T01:42:33.101Z\\",\\n      \\"label\\": \\"meter\\",\\n      \\"note\\": \\"52% weekly \\u00b7 L1=8 L2=14 \\u00b7 claim-ready 2 / $150\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-09-14T01:47:33.103Z\\",\\n      \\"label\\": \\"meter\\",\\n      \\"note\\": \\"54% weekly \\u00b7 L1=8 L2=11 \\u00b7 claim-ready 2 / $150\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-09-14T01:50:14.774Z\\",\\n      \\"label\\": \\"meter\\",\\n      \\"note\\": \\"56% weekly \\u00b7 L1=8 L2=6 \\u00b7 claim-ready 3 / $350\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-09-14T01:55:19.631Z\\",\\n      \\"label\\": \\"meter\\",\\n      \\"note\\": \\"59% weekly \\u00b7 L1=8 L2=32 \\u00b7 claim-ready 4 / $600\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-09-14T01:56:04.143Z\\",\\n      \\"label\\": \\"meter\\",\\n      \\"note\\": \\"59% weekly \\u00b7 L1=8 L2=30 \\u00b7 claim-ready 4 / $600\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-09-14T02:01:08.298Z\\",\\n      \\"label\\": \\"meter\\",\\n      \\"note\\": \\"62% weekly \\u00b7 L1=8 L2=8 \\u00b7 claim-ready 5 / $1100\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-09-14T02:06:08.297Z\\",\\n      \\"label\\": \\"meter\\",\\n      \\"note\\": \\"64% weekly \\u00b7 L1=8 L2=10 \\u00b7 claim-ready 5 / $1100\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-09-14T02:11:08.297Z\\",\\n      \\"label\\": \\"meter\\",\\n      \\"note\\": \\"66% weekly \\u00b7 L1=8 L2=7 \\u00b7 claim-ready 6 / $1200\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-09-14T02:16:08.297Z\\",\\n      \\"label\\": \\"meter\\",\\n      \\"note\\": \\"67% weekly \\u00b7 L1=8 L2=16 \\u00b7 claim-ready 6 / $1200\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-09-14T02:21:08.299Z\\",\\n      \\"label\\": \\"meter\\",\\n      \\"note\\": \\"69% weekly \\u00b7 L1=8 L2=7 \\u00b7 claim-ready 7 / $3700\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-09-14T02:26:08.301Z\\",\\n      \\"label\\": \\"meter\\",\\n      \\"note\\": \\"71% weekly \\u00b7 L1=8 L2=14 \\u00b7 claim-ready 8 / $3750\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-09-14T02:31:08.303Z\\",\\n      \\"label\\": \\"meter\\",\\n      \\"note\\": \\"72% weekly \\u00b7 L1=8 L2=0 \\u00b7 claim-ready 8 / $3750\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-09-14T02:36:08.305Z\\",\\n      \\"label\\": \\"meter\\",\\n      \\"note\\": \\"73% weekly \\u00b7 L1=7 L2=30 \\u00b7 claim-ready 8 / $3750\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-09-14T02:41:08.307Z\\",\\n      \\"label\\": \\"meter\\",\\n      \\"note\\": \\"77% weekly \\u00b7 L1=8 L2=18 \\u00b7 claim-ready 9 / $3800\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-09-14T02:46:08.309Z\\",\\n      \\"label\\": \\"meter\\",\\n      \\"note\\": \\"78% weekly \\u00b7 L1=8 L2=20 \\u00b7 claim-ready 9 / $3800\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-09-14T02:51:08.309Z\\",\\n      \\"label\\": \\"meter\\",\\n      \\"note\\": \\"80% weekly \\u00b7 L1=8 L2=4 \\u00b7 claim-ready 10 / $4050\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-09-14T02:56:08.309Z\\",\\n      \\"label\\": \\"meter\\",\\n      \\"note\\": \\"82% weekly \\u00b7 L1=8 L2=3 \\u00b7 claim-ready 10 / $4250\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-09-14T03:01:08.309Z\\",\\n      \\"label\\": \\"meter\\",\\n      \\"note\\": \\"83% weekly \\u00b7 L1=8 L2=6 \\u00b7 claim-ready 11 / $4300\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-09-14T03:06:08.309Z\\",\\n      \\"label\\": \\"meter\\",\\n      \\"note\\": \\"85% weekly \\u00b7 L1=8 L2=5 \\u00b7 claim-ready 11 / $4300\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-09-14T03:11:08.309Z\\",\\n      \\"label\\": \\"meter\\",\\n      \\"note\\": \\"87% weekly \\u00b7 L1=8 L2=7 \\u00b7 claim-ready 13 / $4600\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-09-14T03:16:08.309Z\\",\\n      \\"label\\": \\"meter\\",\\n      \\"note\\": \\"88% weekly \\u00b7 L1=8 L2=6 \\u00b7 claim-ready 15 / $4850\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-09-14T03:21:08.309Z\\",\\n      \\"label\\": \\"meter\\",\\n      \\"note\\": \\"90% weekly \\u00b7 L1=8 L2=2 \\u00b7 claim-ready 15 / $4850\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-09-14T03:26:08.309Z\\",\\n      \\"label\\": \\"meter\\",\\n      \\"note\\": \\"92% weekly \\u00b7 L1=8 L2=4 \\u00b7 claim-ready 15 / $4850\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-09-14T03:31:08.309Z\\",\\n      \\"label\\": \\"meter\\",\\n      \\"note\\": \\"92% weekly \\u00b7 L1=8 L2=6 \\u00b7 claim-ready 15 / $4850\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-09-14T03:36:08.309Z\\",\\n      \\"label\\": \\"meter\\",\\n      \\"note\\": \\"94% weekly \\u00b7 L1=8 L2=2 \\u00b7 claim-ready 15 / $4850\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-09-14T03:51:08.310Z\\",\\n      \\"label\\": \\"closed\\",\\n      \\"note\\": \\"100% weekly \\u00b7 L1=8 L2=0 \\u00b7 claim-ready 15 / $5000\\"\\n    }\\n  ],\\n  \\"metrics\\": {\\n    \\"mode\\": \\"agent \\u00b7 UFO-FSD L1 fleet\\",\\n    \\"parallelization\\": \\"8 L1 \\u00b7 up to 16 L2 per L1\\",\\n    \\"l1_model\\": \\"xai-oauth/grok-4.6:low\\",\\n    \\"l2_model\\": \\"xai-oauth/grok-4.5:low\\",\\n    \\"l1_count\\": 8,\\n    \\"l2_count\\": 0,\\n    \\"wall_l1_count\\": 24,\\n    \\"wall_l2_count\\": 6,\\n    \\"used_percent\\": 100,\\n    \\"start_percent\\": 20,\\n    \\"window_minutes\\": 10080,\\n    \\"plan_type\\": \\"SuperGrok\\",\\n    \\"meter_label\\": \\"SuperGrok Weekly Credits\\",\\n    \\"provider_route\\": \\"xai-oauth\\",\\n    \\"outcome\\": \\"closed\\",\\n    \\"elapsed_min_from_session\\": 263.2,\\n    \\"pct_per_min\\": 0.304,\\n    \\"claim_ready_count\\": 15,\\n    \\"claim_ready_expected_usd\\": 5000,\\n    \\"claim_ready_companies\\": [\\n      \\"Elastic\\",\\n      \\"Stripe\\",\\n      \\"Coinbase\\",\\n      \\"Airtable\\",\\n      \\"Aiven\\",\\n      \\"Brave Software\\",\\n      \\"LaunchDarkly\\",\\n      \\"MetaMask\\",\\n      \\"MongoDB\\",\\n      \\"Snapchat\\"\\n    ]\\n  },\\n  \\"snapshot\\": {\\n    \\"ts\\": \\"2026-09-14T03:51:08.310Z\\",\\n    \\"used_percent\\": 100,\\n    \\"l1_count\\": 8,\\n    \\"l2_count\\": 0,\\n    \\"wall_l1_count\\": 24,\\n    \\"wall_l2_count\\": 6,\\n    \\"claim_ready_count\\": 15,\\n    \\"claim_ready_expected_usd\\": 5000,\\n    \\"claim_ready_companies\\": [\\n      \\"Elastic\\",\\n      \\"Stripe\\",\\n      \\"Coinbase\\",\\n      \\"Airtable\\",\\n      \\"Aiven\\",\\n      \\"Brave Software\\",\\n      \\"LaunchDarkly\\",\\n      \\"MetaMask\\",\\n      \\"MongoDB\\",\\n      \\"Snapchat\\"\\n    ],\\n    \\"claim_ready\\": [\\n      {\\n        \\"id\\": \\"EPR-STOR-1\\",\\n        \\"company\\": \\"Elastic\\",\\n        \\"program\\": \\"elastic\\",\\n        \\"platform\\": \\"hackerone\\",\\n        \\"url\\": \\"https://hackerone.com/elastic\\",\\n        \\"expected_usd\\": 100,\\n        \\"expected_usd_basis\\": \\"H1 GraphQL bounty_table Other low_minimum=100\\",\\n        \\"l1\\": null,\\n        \\"path\\": \\"claim-packages/EPR-STOR-1\\",\\n        \\"claimable_at\\": \\"2026-09-14T01:35:00Z\\"\\n      },\\n      {\\n        \\"id\\": \\"ST-AI-001-customer-context-bypass\\",\\n        \\"company\\": \\"Stripe\\",\\n        \\"program\\": \\"stripe\\",\\n        \\"platform\\": \\"hackerone\\",\\n        \\"url\\": \\"https://hackerone.com/stripe\\",\\n        \\"expected_usd\\": 50,\\n        \\"expected_usd_basis\\": \\"H1 acquisition Low min 50 USD (core Low 100 unused; not High)\\",\\n        \\"l1\\": \\"groknight\\",\\n        \\"path\\": \\"claim-packages/ST-AI-001-customer-context-bypass/\\",\\n        \\"claimable_at\\": \\"2026-09-14T02:20:00Z\\"\\n      },\\n      {\\n        \\"id\\": \\"agentkit-x402-whitelist-ssrf\\",\\n        \\"company\\": \\"Coinbase\\",\\n        \\"program\\": \\"Coinbase\\",\\n        \\"platform\\": \\"hackerone\\",\\n        \\"url\\": \\"https://hackerone.com/coinbase\\",\\n        \\"expected_usd\\": 200,\\n        \\"expected_usd_basis\\": \\"H1 base_bounty 200 USD; High 6000 unused\\",\\n        \\"l1\\": \\"groknight\\",\\n        \\"path\\": \\"claim-packages/agentkit-x402-whitelist-ssrf/\\",\\n        \\"claimable_at\\": \\"2026-09-14T03:10:00Z\\"\\n      },\\n      {\\n        \\"id\\": \\"airtable-js-m01\\",\\n        \\"company\\": \\"Airtable\\",\\n        \\"program\\": \\"Airtable\\",\\n        \\"platform\\": \\"hackerone\\",\\n        \\"url\\": \\"https://hackerone.com/airtable\\",\\n        \\"expected_usd\\": 200,\\n        \\"expected_usd_basis\\": \\"H1 GraphQL bounty_table low=200 USD observed 2026-09-14T01:36:50Z\\",\\n        \\"l1\\": null,\\n        \\"path\\": \\"claim-packages/airtable-js-m01\\",\\n        \\"claimable_at\\": \\"2026-09-14T01:42:00Z\\"\\n      },\\n      {\\n        \\"id\\": \\"aiven-karapace-acl-prefix\\",\\n        \\"company\\": \\"Aiven\\",\\n        \\"program\\": \\"Aiven Managed Bug Bounty\\",\\n        \\"platform\\": \\"bugcrowd\\",\\n        \\"url\\": \\"https://bugcrowd.com/engagements/aiven-mbb-og\\",\\n        \\"expected_usd\\": 250,\\n        \\"expected_usd_basis\\": \\"published OSS table P3 min $250\\u2013$500; use min 250; PoC local (auth ON). Default auth-off not this claim.\\",\\n        \\"l1\\": \\"groknight\\",\\n        \\"path\\": \\"claim-packages/aiven-karapace-acl-prefix\\",\\n        \\"claimable_at\\": \\"2026-09-14T01:55:00Z\\"\\n      },\\n      {\\n        \\"id\\": \\"aiven-pglookout-m02\\",\\n        \\"company\\": \\"Aiven\\",\\n        \\"program\\": \\"Aiven Managed Bug Bounty\\",\\n        \\"platform\\": \\"bugcrowd\\",\\n        \\"url\\": \\"https://bugcrowd.com/engagements/aiven-mbb-og\\",\\n        \\"expected_usd\\": 50,\\n        \\"expected_usd_basis\\": \\"published Bugcrowd OSS repo table P4 min $50\\u2013$250\\",\\n        \\"l1\\": null,\\n        \\"path\\": \\"claim-packages/aiven-pglookout-m02\\",\\n        \\"claimable_at\\": \\"2026-09-14T01:32:00Z\\"\\n      },\\n      {\\n        \\"id\\": \\"brave-bat-go-reputation-proxy\\",\\n        \\"company\\": \\"Brave Software\\",\\n        \\"program\\": \\"Brave Software\\",\\n        \\"platform\\": \\"hackerone\\",\\n        \\"url\\": \\"https://hackerone.com/brave\\",\\n        \\"expected_usd\\": 50,\\n        \\"expected_usd_basis\\": \\"H1 bounty_table Low min 50 USD / base_bounty 50. Program paused.\\",\\n        \\"l1\\": \\"groknight\\",\\n        \\"path\\": \\"claim-packages/brave-bat-go-reputation-proxy/\\",\\n        \\"claimable_at\\": \\"2026-09-14T03:34:00Z\\"\\n      },\\n      {\\n        \\"id\\": \\"coinbase-agentkit-x402\\",\\n        \\"company\\": \\"Coinbase\\",\\n        \\"program\\": \\"Coinbase\\",\\n        \\"platform\\": \\"hackerone\\",\\n        \\"url\\": \\"https://hackerone.com/coinbase\\",\\n        \\"expected_usd\\": 200,\\n        \\"expected_usd_basis\\": \\"H1 base_bounty 200 USD; Low/Med table cells null; High 6000 unused (SSRF/allowlist, not High-proven)\\",\\n        \\"l1\\": \\"groknight\\",\\n        \\"path\\": \\"claim-packages/coinbase-agentkit-x402\\",\\n        \\"claimable_at\\": \\"2026-09-14T03:10:00Z\\"\\n      },\\n      {\\n        \\"id\\": \\"ld-node-stream-tls-bypass\\",\\n        \\"company\\": \\"LaunchDarkly\\",\\n        \\"program\\": \\"LaunchDarkly Managed Bug Bounty\\",\\n        \\"platform\\": \\"bugcrowd\\",\\n        \\"url\\": \\"https://bugcrowd.com/engagements/launchdarkly-mbb-og\\",\\n        \\"expected_usd\\": 2500,\\n        \\"expected_usd_basis\\": \\"Published P2 min=max 2500 USD\\",\\n        \\"l1\\": \\"groknight\\",\\n        \\"path\\": \\"claim-packages/ld-node-stream-tls-bypass/\\",\\n        \\"claimable_at\\": \\"2026-09-14T02:20:00Z\\"\\n      },\\n      {\\n        \\"id\\": \\"metamask-sdk-channel-inject\\",\\n        \\"company\\": \\"MetaMask\\",\\n        \\"program\\": \\"metamask\\",\\n        \\"platform\\": \\"hackerone\\",\\n        \\"url\\": \\"https://hackerone.com/metamask\\",\\n        \\"expected_usd\\": 50,\\n        \\"expected_usd_basis\\": \\"CSV MetaMask SDK bounty-eligible; L0 $50 floor\\",\\n        \\"l1\\": \\"groknight\\",\\n        \\"path\\": \\"claim-packages/metamask-sdk-channel-inject/poc\\",\\n        \\"claimable_at\\": \\"2026-09-14T03:12:00Z\\"\\n      },\\n      {\\n        \\"id\\": \\"metamask-sdk-mm01\\",\\n        \\"company\\": \\"MetaMask\\",\\n        \\"program\\": \\"MetaMask\\",\\n        \\"platform\\": \\"hackerone\\",\\n        \\"url\\": \\"https://hackerone.com/metamask\\",\\n        \\"expected_usd\\": 250,\\n        \\"expected_usd_basis\\": \\"H1 Core-tier Low=250 USD (conservative). Candidate High=5000 if channelId treated as public. Prerequisite: channelId known.\\",\\n        \\"l1\\": \\"groknight\\",\\n        \\"path\\": \\"claim-packages/metamask-sdk-mm01\\",\\n        \\"claimable_at\\": \\"2026-09-14T02:48:00Z\\"\\n      },\\n      {\\n        \\"id\\": \\"mm-sdk-channel-inject\\",\\n        \\"company\\": \\"MetaMask\\",\\n        \\"program\\": \\"MetaMask\\",\\n        \\"platform\\": \\"hackerone\\",\\n        \\"url\\": \\"https://hackerone.com/metamask\\",\\n        \\"expected_usd\\": 250,\\n        \\"expected_usd_basis\\": \\"H1 Core Tier Low 250 USD published\\",\\n        \\"l1\\": \\"groknight\\",\\n        \\"path\\": \\"claim-packages/mm-sdk-channel-inject/\\",\\n        \\"claimable_at\\": \\"2026-09-14T03:08:00Z\\"\\n      },\\n      {\\n        \\"id\\": \\"mongodb-mcp-m01\\",\\n        \\"company\\": \\"MongoDB\\",\\n        \\"program\\": \\"MongoDB\\",\\n        \\"platform\\": \\"hackerone\\",\\n        \\"url\\": \\"https://hackerone.com/mongodb\\",\\n        \\"expected_usd\\": 500,\\n        \\"expected_usd_basis\\": \\"H1 GraphQL bounty_table medium=500 USD observed 2026-09-14; shared ExportsManager cross-tenant read \\u2014 Medium not High\\",\\n        \\"l1\\": \\"groknight\\",\\n        \\"path\\": \\"claim-packages/mongodb-mcp-m01\\",\\n        \\"claimable_at\\": \\"2026-09-14T01:56:00Z\\"\\n      },\\n      {\\n        \\"id\\": \\"mongodb-mcp-m01-shared-exports\\",\\n        \\"company\\": \\"MongoDB\\",\\n        \\"program\\": \\"mongodb\\",\\n        \\"platform\\": \\"hackerone\\",\\n        \\"url\\": \\"https://hackerone.com/mongodb\\",\\n        \\"expected_usd\\": 100,\\n        \\"expected_usd_basis\\": \\"H1 Low band 100 USD\\",\\n        \\"l1\\": \\"groknight\\",\\n        \\"path\\": \\"claim-packages/mongodb-mcp-m01-shared-exports/\\",\\n        \\"claimable_at\\": \\"2026-09-14T02:10:00Z\\"\\n      },\\n      {\\n        \\"id\\": \\"snapchat-playcanvas-loader-sinks\\",\\n        \\"company\\": \\"Snapchat\\",\\n        \\"program\\": \\"Snapchat\\",\\n        \\"platform\\": \\"hackerone\\",\\n        \\"url\\": \\"https://hackerone.com/snapchat\\",\\n        \\"expected_usd\\": 250,\\n        \\"expected_usd_basis\\": \\"H1 GraphQL policy_min_reward_usd=250; Tier B Playcanvas Medium min 250\\",\\n        \\"l1\\": \\"groknight\\",\\n        \\"path\\": \\"claim-packages/snapchat-playcanvas-loader-sinks/\\",\\n        \\"claimable_at\\": \\"2026-09-14T02:39:30Z\\"\\n      }\\n    ],\\n    \\"status\\": \\"closed\\"\\n  },\\n  \\"session_start\\": \\"2026-09-13T23:28:00Z\\",\\n  \\"first_meter\\": \\"2026-09-14T00:45:26Z\\",\\n  \\"curve\\": \\"data/supergrok-groknight-curve.json\\",\\n  \\"links\\": {\\n    \\"board\\": \\"./\\",\\n    \\"xai\\": \\"https://grok.com/\\",\\n    \\"repo\\": \\"https://github.com/VeigaPunk/ufo-fsd-alpha\\",\\n    \\"operator\\": \\"https://x.com/VeigaPunk\\"\\n  },\\n  \\"tags\\": [\\n    \\"grok\\",\\n    \\"oauth\\",\\n    \\"supergrok\\",\\n    \\"live\\",\\n    \\"ufo-fsd\\",\\n    \\"groknight\\",\\n    \\"hackerone\\",\\n    \\"bugcrowd\\",\\n    \\"intigriti\\"\\n  ],\\n  \\"paid\\": true,\\n  \\"not_a_grant\\": true,\\n  \\"category\\": \\"fleet\\",\\n  \\"meter\\": \\"supergrok_weekly\\",\\n  \\"claim_ready\\": [\\n    {\\n      \\"id\\": \\"EPR-STOR-1\\",\\n      \\"company\\": \\"Elastic\\",\\n      \\"program\\": \\"elastic\\",\\n      \\"platform\\": \\"hackerone\\",\\n      \\"url\\": \\"https://hackerone.com/elastic\\",\\n      \\"expected_usd\\": 100,\\n      \\"expected_usd_basis\\": \\"H1 GraphQL bounty_table Other low_minimum=100\\",\\n      \\"l1\\": null,\\n      \\"path\\": \\"claim-packages/EPR-STOR-1\\",\\n      \\"claimable_at\\": \\"2026-09-14T01:35:00Z\\"\\n    },\\n    {\\n      \\"id\\": \\"ST-AI-001-customer-context-bypass\\",\\n      \\"company\\": \\"Stripe\\",\\n      \\"program\\": \\"stripe\\",\\n      \\"platform\\": \\"hackerone\\",\\n      \\"url\\": \\"https://hackerone.com/stripe\\",\\n      \\"expected_usd\\": 50,\\n      \\"expected_usd_basis\\": \\"H1 acquisition Low min 50 USD (core Low 100 unused; not High)\\",\\n      \\"l1\\": \\"groknight\\",\\n      \\"path\\": \\"claim-packages/ST-AI-001-customer-context-bypass/\\",\\n      \\"claimable_at\\": \\"2026-09-14T02:20:00Z\\"\\n    },\\n    {\\n      \\"id\\": \\"agentkit-x402-whitelist-ssrf\\",\\n      \\"company\\": \\"Coinbase\\",\\n      \\"program\\": \\"Coinbase\\",\\n      \\"platform\\": \\"hackerone\\",\\n      \\"url\\": \\"https://hackerone.com/coinbase\\",\\n      \\"expected_usd\\": 200,\\n      \\"expected_usd_basis\\": \\"H1 base_bounty 200 USD; High 6000 unused\\",\\n      \\"l1\\": \\"groknight\\",\\n      \\"path\\": \\"claim-packages/agentkit-x402-whitelist-ssrf/\\",\\n      \\"claimable_at\\": \\"2026-09-14T03:10:00Z\\"\\n    },\\n    {\\n      \\"id\\": \\"airtable-js-m01\\",\\n      \\"company\\": \\"Airtable\\",\\n      \\"program\\": \\"Airtable\\",\\n      \\"platform\\": \\"hackerone\\",\\n      \\"url\\": \\"https://hackerone.com/airtable\\",\\n      \\"expected_usd\\": 200,\\n      \\"expected_usd_basis\\": \\"H1 GraphQL bounty_table low=200 USD observed 2026-09-14T01:36:50Z\\",\\n      \\"l1\\": null,\\n      \\"path\\": \\"claim-packages/airtable-js-m01\\",\\n      \\"claimable_at\\": \\"2026-09-14T01:42:00Z\\"\\n    },\\n    {\\n      \\"id\\": \\"aiven-karapace-acl-prefix\\",\\n      \\"company\\": \\"Aiven\\",\\n      \\"program\\": \\"Aiven Managed Bug Bounty\\",\\n      \\"platform\\": \\"bugcrowd\\",\\n      \\"url\\": \\"https://bugcrowd.com/engagements/aiven-mbb-og\\",\\n      \\"expected_usd\\": 250,\\n      \\"expected_usd_basis\\": \\"published OSS table P3 min $250\\u2013$500; use min 250; PoC local (auth ON). Default auth-off not this claim.\\",\\n      \\"l1\\": \\"groknight\\",\\n      \\"path\\": \\"claim-packages/aiven-karapace-acl-prefix\\",\\n      \\"claimable_at\\": \\"2026-09-14T01:55:00Z\\"\\n    },\\n    {\\n      \\"id\\": \\"aiven-pglookout-m02\\",\\n      \\"company\\": \\"Aiven\\",\\n      \\"program\\": \\"Aiven Managed Bug Bounty\\",\\n      \\"platform\\": \\"bugcrowd\\",\\n      \\"url\\": \\"https://bugcrowd.com/engagements/aiven-mbb-og\\",\\n      \\"expected_usd\\": 50,\\n      \\"expected_usd_basis\\": \\"published Bugcrowd OSS repo table P4 min $50\\u2013$250\\",\\n      \\"l1\\": null,\\n      \\"path\\": \\"claim-packages/aiven-pglookout-m02\\",\\n      \\"claimable_at\\": \\"2026-09-14T01:32:00Z\\"\\n    },\\n    {\\n      \\"id\\": \\"brave-bat-go-reputation-proxy\\",\\n      \\"company\\": \\"Brave Software\\",\\n      \\"program\\": \\"Brave Software\\",\\n      \\"platform\\": \\"hackerone\\",\\n      \\"url\\": \\"https://hackerone.com/brave\\",\\n      \\"expected_usd\\": 50,\\n      \\"expected_usd_basis\\": \\"H1 bounty_table Low min 50 USD / base_bounty 50. Program paused.\\",\\n      \\"l1\\": \\"groknight\\",\\n      \\"path\\": \\"claim-packages/brave-bat-go-reputation-proxy/\\",\\n      \\"claimable_at\\": \\"2026-09-14T03:34:00Z\\"\\n    },\\n    {\\n      \\"id\\": \\"coinbase-agentkit-x402\\",\\n      \\"company\\": \\"Coinbase\\",\\n      \\"program\\": \\"Coinbase\\",\\n      \\"platform\\": \\"hackerone\\",\\n      \\"url\\": \\"https://hackerone.com/coinbase\\",\\n      \\"expected_usd\\": 200,\\n      \\"expected_usd_basis\\": \\"H1 base_bounty 200 USD; Low/Med table cells null; High 6000 unused (SSRF/allowlist, not High-proven)\\",\\n      \\"l1\\": \\"groknight\\",\\n      \\"path\\": \\"claim-packages/coinbase-agentkit-x402\\",\\n      \\"claimable_at\\": \\"2026-09-14T03:10:00Z\\"\\n    },\\n    {\\n      \\"id\\": \\"ld-node-stream-tls-bypass\\",\\n      \\"company\\": \\"LaunchDarkly\\",\\n      \\"program\\": \\"LaunchDarkly Managed Bug Bounty\\",\\n      \\"platform\\": \\"bugcrowd\\",\\n      \\"url\\": \\"https://bugcrowd.com/engagements/launchdarkly-mbb-og\\",\\n      \\"expected_usd\\": 2500,\\n      \\"expected_usd_basis\\": \\"Published P2 min=max 2500 USD\\",\\n      \\"l1\\": \\"groknight\\",\\n      \\"path\\": \\"claim-packages/ld-node-stream-tls-bypass/\\",\\n      \\"claimable_at\\": \\"2026-09-14T02:20:00Z\\"\\n    },\\n    {\\n      \\"id\\": \\"metamask-sdk-channel-inject\\",\\n      \\"company\\": \\"MetaMask\\",\\n      \\"program\\": \\"metamask\\",\\n      \\"platform\\": \\"hackerone\\",\\n      \\"url\\": \\"https://hackerone.com/metamask\\",\\n      \\"expected_usd\\": 50,\\n      \\"expected_usd_basis\\": \\"CSV MetaMask SDK bounty-eligible; L0 $50 floor\\",\\n      \\"l1\\": \\"groknight\\",\\n      \\"path\\": \\"claim-packages/metamask-sdk-channel-inject/poc\\",\\n      \\"claimable_at\\": \\"2026-09-14T03:12:00Z\\"\\n    },\\n    {\\n      \\"id\\": \\"metamask-sdk-mm01\\",\\n      \\"company\\": \\"MetaMask\\",\\n      \\"program\\": \\"MetaMask\\",\\n      \\"platform\\": \\"hackerone\\",\\n      \\"url\\": \\"https://hackerone.com/metamask\\",\\n      \\"expected_usd\\": 250,\\n      \\"expected_usd_basis\\": \\"H1 Core-tier Low=250 USD (conservative). Candidate High=5000 if channelId treated as public. Prerequisite: channelId known.\\",\\n      \\"l1\\": \\"groknight\\",\\n      \\"path\\": \\"claim-packages/metamask-sdk-mm01\\",\\n      \\"claimable_at\\": \\"2026-09-14T02:48:00Z\\"\\n    },\\n    {\\n      \\"id\\": \\"mm-sdk-channel-inject\\",\\n      \\"company\\": \\"MetaMask\\",\\n      \\"program\\": \\"MetaMask\\",\\n      \\"platform\\": \\"hackerone\\",\\n      \\"url\\": \\"https://hackerone.com/metamask\\",\\n      \\"expected_usd\\": 250,\\n      \\"expected_usd_basis\\": \\"H1 Core Tier Low 250 USD published\\",\\n      \\"l1\\": \\"groknight\\",\\n      \\"path\\": \\"claim-packages/mm-sdk-channel-inject/\\",\\n      \\"claimable_at\\": \\"2026-09-14T03:08:00Z\\"\\n    },\\n    {\\n      \\"id\\": \\"mongodb-mcp-m01\\",\\n      \\"company\\": \\"MongoDB\\",\\n      \\"program\\": \\"MongoDB\\",\\n      \\"platform\\": \\"hackerone\\",\\n      \\"url\\": \\"https://hackerone.com/mongodb\\",\\n      \\"expected_usd\\": 500,\\n      \\"expected_usd_basis\\": \\"H1 GraphQL bounty_table medium=500 USD observed 2026-09-14; shared ExportsManager cross-tenant read \\u2014 Medium not High\\",\\n      \\"l1\\": \\"groknight\\",\\n      \\"path\\": \\"claim-packages/mongodb-mcp-m01\\",\\n      \\"claimable_at\\": \\"2026-09-14T01:56:00Z\\"\\n    },\\n    {\\n      \\"id\\": \\"mongodb-mcp-m01-shared-exports\\",\\n      \\"company\\": \\"MongoDB\\",\\n      \\"program\\": \\"mongodb\\",\\n      \\"platform\\": \\"hackerone\\",\\n      \\"url\\": \\"https://hackerone.com/mongodb\\",\\n      \\"expected_usd\\": 100,\\n      \\"expected_usd_basis\\": \\"H1 Low band 100 USD\\",\\n      \\"l1\\": \\"groknight\\",\\n      \\"path\\": \\"claim-packages/mongodb-mcp-m01-shared-exports/\\",\\n      \\"claimable_at\\": \\"2026-09-14T02:10:00Z\\"\\n    },\\n    {\\n      \\"id\\": \\"snapchat-playcanvas-loader-sinks\\",\\n      \\"company\\": \\"Snapchat\\",\\n      \\"program\\": \\"Snapchat\\",\\n      \\"platform\\": \\"hackerone\\",\\n      \\"url\\": \\"https://hackerone.com/snapchat\\",\\n      \\"expected_usd\\": 250,\\n      \\"expected_usd_basis\\": \\"H1 GraphQL policy_min_reward_usd=250; Tier B Playcanvas Medium min 250\\",\\n      \\"l1\\": \\"groknight\\",\\n      \\"path\\": \\"claim-packages/snapchat-playcanvas-loader-sinks/\\",\\n      \\"claimable_at\\": \\"2026-09-14T02:39:30Z\\"\\n    }\\n  ],\\n  \\"wrap_started_at\\": \\"2026-09-14T03:39:13Z\\",\\n  \\"closed_at\\": \\"2026-09-14T03:50:11Z\\",\\n  \\"closed\\": true,\\n  \\"closed_ts\\": \\"2026-09-14T03:51:08.310Z\\"\\n}", "data/run-200usd.json": "{\\n  \\"id\\": \\"veigapunk-kimi-200-usd-48h\\",\\n  \\"title\\": \\"$200 Kimi / Moonshot sub \\u2014 48h burn\\",\\n  \\"runner\\": \\"VeigaPunk\\",\\n  \\"account_hint\\": \\"jpveigao10@gmail.com\\",\\n  \\"provider\\": \\"Moonshot / Kimi\\",\\n  \\"product\\": \\"Kimi $200 USD subscription (paid by the operator \\u2014 not a grant)\\",\\n  \\"budget_usd\\": 200,\\n  \\"currency\\": \\"USD\\",\\n  \\"status\\": \\"closed\\",\\n  \\"duration\\": \\"48 hours\\",\\n  \\"duration_hours\\": 48,\\n  \\"venue\\": \\"Kimi agent mode \\u00b7 heavy parallelization across agent CLIs\\",\\n  \\"summary\\": \\"Burned a $200 USD Kimi (Moonshot) subscription the operator paid for, in about 48 hours. Not a grant. Mode: agent mode, used extensively, with heavy parallelization.\\",\\n  \\"timeline\\": [\\n    {\\n      \\"t\\": \\"t0\\",\\n      \\"label\\": \\"Sub active\\",\\n      \\"note\\": \\"$200 USD Kimi / Moonshot subscription under jpveigao10@gmail.com\\"\\n    },\\n    {\\n      \\"t\\": \\"t0\\u201348h\\",\\n      \\"label\\": \\"Agent mode + parallel fan-out\\",\\n      \\"note\\": \\"Extensive agent-mode use; heavy parallelization across agents/CLIs \\u2014 max extract from the grant window\\"\\n    },\\n    {\\n      \\"t\\": \\"t+48h\\",\\n      \\"label\\": \\"Budget exhausted\\",\\n      \\"note\\": \\"Sub burn complete in ~48 hours. Run closed for the board.\\"\\n    }\\n  ],\\n  \\"metrics\\": {\\n    \\"budget_usd\\": 200,\\n    \\"spent_usd_approx\\": 200,\\n    \\"wall_clock_hours\\": 48,\\n    \\"tokens_total\\": null,\\n    \\"tokens_note\\": \\"Provider UI metering may not export a single public token total; primary score is $200 / 48h under agent mode + parallel load.\\",\\n    \\"mode\\": \\"agent mode\\",\\n    \\"parallelization\\": \\"heavy\\",\\n    \\"outcome\\": \\"full burn \\u00b7 closed \\u00b7 board seed run\\"\\n  },\\n  \\"axes\\": {\\n    \\"value_per_dollar\\": \\"empirical \\u2014 how much real agent work landed per $\\",\\n    \\"efficiency\\": \\"time-to-exhaust + parallel throughput under agent mode\\",\\n    \\"boundary_push\\": \\"multi-CLI / multi-model agent stacks against a fixed sub ceiling\\"\\n  },\\n  \\"links\\": {\\n    \\"kimi\\": \\"https://www.kimi.com/\\",\\n    \\"moonshot\\": \\"https://www.moonshot.ai/\\",\\n    \\"ds4cc\\": \\"https://ds4cc.com/\\",\\n    \\"omegag\\": \\"https://veigapunk.github.io/omegag-site/\\",\\n    \\"operator\\": \\"https://x.com/VeigaPunk\\"\\n  },\\n  \\"tags\\": [\\n    \\"kimi\\",\\n    \\"moonshot\\",\\n    \\"200usd\\",\\n    \\"48h\\",\\n    \\"agent-mode\\",\\n    \\"parallel\\",\\n    \\"seed-run\\"\\n  ],\\n  \\"paid\\": true,\\n  \\"not_a_grant\\": true,\\n  \\"display_venue\\": \\"Kimi agent mode \\u00b7 heavy parallelization across agent CLIs\\",\\n  \\"category\\": \\"seed\\"\\n}", "data/run-codex-ultra-oauth-20x-2026-08-24.json": "{\\n  \\"id\\": \\"veigapunk-codex-ultra-oauth-20x-2026-08-24\\",\\n  \\"title\\": \\"Codex 20x oneshot \\u2014 Sol Ultras on Sekhmet\\",\\n  \\"runner\\": \\"VeigaPunk\\",\\n  \\"provider\\": \\"OpenAI / Codex\\",\\n  \\"product\\": \\"ChatGPT Pro \\u00b7 Codex 20x plan \\u00b7 weekly window\\",\\n  \\"budget_usd\\": null,\\n  \\"budget_note\\": \\"Paid ChatGPT Pro OAuth \\u2014 not a grant. Meter is weekly used_percent (10080 min), not 100% of the month. Oneshot category.\\",\\n  \\"currency\\": \\"USD\\",\\n  \\"status\\": \\"closed\\",\\n  \\"duration\\": \\"1h 1m 18s\\",\\n  \\"venue\\": \\"Sekhmet swarm \\u00b7 64 concurrent agents \\u00b7 Sol Ultras\\",\\n  \\"summary\\": \\"Oneshot done (not live). Sol Ultras on Sekhmet \\u2014 64 concurrent agents. ~60% of the Codex 20x weekly window burned in 1h 1m. Receipt: xbgst-codex.\\",\\n  \\"timeline\\": [\\n    {\\n      \\"t\\": \\"2026-08-24T04:36:27Z\\",\\n      \\"label\\": \\"session start\\",\\n      \\"note\\": \\"tmux 26 \\u00b7 gpt-5.6-sol ultra fast \\u00b7 ChatGPT Pro\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-08-24T04:46:06Z\\",\\n      \\"label\\": \\"first meter\\",\\n      \\"note\\": \\"0% on the weekly 10080 min window\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-08-24T13:19:53.318Z\\",\\n      \\"label\\": \\"live snapshot\\",\\n      \\"note\\": \\"60.0% \\u00b7 0.117%/min \\u00b7 ETA +342.53 min \\u00b7 sub-hour record: no\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-09-15\\",\\n      \\"label\\": \\"receipt update\\",\\n      \\"note\\": \\"Run identified: Sol Ultras on Sekhmet \\u2014 64 concurrent agents, 1h 1m for ~60% of the Codex 20x weekly window.\\"\\n    }\\n  ],\\n  \\"metrics\\": {\\n    \\"mode\\": \\"oneshot agent \\u00b7 ultra fast\\",\\n    \\"parallelization\\": \\"64 concurrent agents \\u00b7 459 child rollouts\\",\\n    \\"used_percent\\": 60.0,\\n    \\"window_minutes\\": 10080,\\n    \\"plan_type\\": \\"pro\\",\\n    \\"tokens_total\\": 46397151,\\n    \\"tokens_cached_input\\": 45334528,\\n    \\"tokens_note\\": \\"mostly cached input; public session totals only\\",\\n    \\"n_rollouts\\": 471,\\n    \\"pct_per_min\\": 0.117,\\n    \\"elapsed_min_from_first_meter\\": 513.79,\\n    \\"eta_100_min\\": 342.53,\\n    \\"record_target_min\\": 60,\\n    \\"subhour_ok\\": false,\\n    \\"rss_gb\\": 2.14,\\n    \\"approx_cores\\": 1.0,\\n    \\"tmux\\": \\"26\\",\\n    \\"model\\": \\"gpt-5.6-sol ultra fast\\",\\n    \\"outcome\\": \\"closed \\u00b7 done \\u00b7 ~60% weekly in ~1h\\",\\n    \\"spark_5h_pct\\": 0,\\n    \\"subhour_session_ok\\": false,\\n    \\"subhour_meter_ok\\": false,\\n    \\"elapsed_min_from_session\\": 523.44,\\n    \\"goal_clock\\": \\"1h 1m 18s\\",\\n    \\"goal_tokens\\": 1018795,\\n    \\"project\\": \\"Sol Ultras\\",\\n    \\"substrate\\": \\"sekhmet\\",\\n    \\"concurrent_agents\\": 64\\n  },\\n  \\"pace\\": {\\n    \\"elapsed_min_from_session\\": 523.44,\\n    \\"elapsed_min_from_first_meter\\": 513.79,\\n    \\"pct_per_min\\": 0.117,\\n    \\"eta_100_min\\": 342.53,\\n    \\"record_target_min\\": 60,\\n    \\"subhour_session_ok\\": false,\\n    \\"subhour_meter_ok\\": false,\\n    \\"subhour_ok\\": false\\n  },\\n  \\"session_start\\": \\"2026-08-24T04:36:27.174Z\\",\\n  \\"first_meter\\": \\"2026-08-24T04:46:06.005Z\\",\\n  \\"curve\\": \\"data/codex-curve.json\\",\\n  \\"snapshot\\": {\\n    \\"ts\\": \\"2026-08-24T13:19:53.318Z\\",\\n    \\"used_percent\\": 60.0,\\n    \\"tokens_total\\": 46397151,\\n    \\"n_rollouts\\": 471\\n  },\\n  \\"links\\": {\\n    \\"codex\\": \\"https://chatgpt.com/\\",\\n    \\"board\\": \\"./\\",\\n    \\"xbgst_codex\\": \\"https://github.com/VeigaPunk/xbgst-codex\\",\\n    \\"hangar_readme\\": \\"/home/vgpnk/Projects/xbgst/xbgst-codex/README.md\\",\\n    \\"operator\\": \\"https://x.com/VeigaPunk\\"\\n  },\\n  \\"tags\\": [\\n    \\"codex\\",\\n    \\"oauth\\",\\n    \\"20x\\",\\n    \\"ultra\\",\\n    \\"oneshot\\",\\n    \\"closed\\"\\n  ],\\n  \\"paid\\": true,\\n  \\"not_a_grant\\": true,\\n  \\"category\\": \\"oneshot\\",\\n  \\"meter\\": \\"weekly_10080\\",\\n  \\"last_message\\": \\"data/codex-last-message.json\\",\\n  \\"display_venue\\": \\"Sekhmet swarm \\u00b7 64 concurrent agents \\u00b7 Sol Ultras\\"\\n}", "data/run-cursor-ultra-ufo-core-2026-08-25.json": "{\\n  \\"id\\": \\"veigapunk-cursor-ultra-ufo-core-2026-08-25\\",\\n  \\"title\\": \\"Cursor Ultra OAuth \\u2014 UFO core runtime /goal swarm\\",\\n  \\"runner\\": \\"VeigaPunk\\",\\n  \\"account_hint\\": \\"jpveigao10@gmail.com\\",\\n  \\"provider\\": \\"Cursor / Anysphere\\",\\n  \\"product\\": \\"Cursor Ultra OAuth \\u00b7 $99 minted sub \\u00b7 cloud agents (website)\\",\\n  \\"budget_usd\\": 99,\\n  \\"budget_note\\": \\"Paid this mint: $99 Cursor Ultra OAuth (gravy train). Second Ultra: $199 Cursor Ultra. SuperGrok Heavy alone ~$300 list \\u2014 grant (incl. for free). Grok bot totally free. X Premium+ (giver). Fail-as-data: Kimi K3 Max usage-limit receipts $1497 / $1515 / $3570 API savings. Closeout PRIMARY: wall_cap \\u22651440m (24h) on ufo-fsd-alpha; secondary \\u226597% included pretend-100. Harvest mode: no idle wakes; L1+linked emit NEXT handoff.\\",\\n  \\"currency\\": \\"USD\\",\\n  \\"status\\": \\"closed\\",\\n  \\"duration\\": \\"complete burn \\u00b7 48h mint\\u2192monthly included \\u00b7 closed @ 79% / 26h wall\\",\\n  \\"duration_hours_complete_burn\\": 48,\\n  \\"venue\\": \\"cursor.com/agents \\u00b7 ufo-fsd-alpha (Cursor Origin)\\",\\n  \\"summary\\": \\"CLOSED. Cursor Ultra OAuth UFO-FSD oneshot /goal swarm (28 peers). Complete burn clock: 48h mint\\u2192100% included monthly (operator; linear extrap 33h). Total saved: $4519 API projected @ complete burn (45.7\\u00d7 $99); $3570 latest Kimi probe (36.1\\u00d7). Run harvested on 24h wall at 79% / ~26h elapsed. Swarm terminal: 21 finished / 7 error / 0 running. API pool 100% @ ~1.8h from mint. Harvest: NEXT.md + handoff.json. Parent /goal OPEN. Token count: 5.6B tokens counted.\\",\\n  \\"timeline\\": [\\n    {\\n      \\"t\\": \\"2026-08-25T18:05:18Z\\",\\n      \\"label\\": \\"swarm mint\\",\\n      \\"note\\": \\"Core runtime orchestration \\u00b7 website source \\u00b7 multi-model parallel cloud agents\\"\\n    },\\n    {\\n      \\"t\\": \\"monitor_start\\",\\n      \\"label\\": \\"included usage\\",\\n      \\"note\\": \\"~26% included usage on minted Cursor Ultra OAuth sub\\"\\n    },\\n    {\\n      \\"t\\": \\"linked_bc\\",\\n      \\"label\\": \\"linked agent finished\\",\\n      \\"note\\": \\"composer-2.5 maxMode \\u00b7 UpdateGoal complete \\u00b7 46m 28s \\u00b7 branch cursor/ufo-core-runtime-3df4 \\u00b7 child audit spawned\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-08-25T19:47:00Z\\",\\n      \\"label\\": \\"swarm snapshot\\",\\n      \\"note\\": \\"28 in group \\u00b7 12 RUNNING \\u00b7 8 FINISHED \\u00b7 8 ERROR \\u00b7 wall ~102 min \\u00b7 gemini-3.7-flash-high present (1 finished) \\u2014 operator asked orchestrator NOT be gemini\\"\\n    },\\n    {\\n      \\"t\\": \\"meter\\",\\n      \\"label\\": \\"Kimi K3 Max usage limit\\",\\n      \\"note\\": \\"Run Everything \\u00b7 hit included usage \\u00b7 Ultra saved $947 API this month \\u00b7 spendLimitHit false \\u00b7 spendLimits [50,100,200] \\u00b7 reset 2026-09-18\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-08-25T18:05:16.539Z\\",\\n      \\"label\\": \\"origin repo\\",\\n      \\"note\\": \\"jo-o-veiga/ufo-fsd-alpha created on Cursor Origin \\u00b7 defaultBranch main \\u00b7 swarm workspace\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-08-25T22:50:00Z\\",\\n      \\"label\\": \\"Kimi K3 Max usage limit $1497\\",\\n      \\"note\\": \\"operator paste \\u00b7 Run Everything \\u00b7 spendLimitHit false \\u00b7 ~15.1\\u00d7 $99 Ultra mint\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-08-25T22:50:46Z\\",\\n      \\"label\\": \\"live kimi-k3-max probe $1515\\",\\n      \\"note\\": \\"cursor-agent --model kimi-k3-max \\u00b7 ActionRequiredError usage limit \\u00b7 ~15.3\\u00d7 $99\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-08-25T22:54:51Z\\",\\n      \\"label\\": \\"swarm effective-changes audit\\",\\n      \\"note\\": \\"28 peers \\u00b7 1\\u00d7 ufo-fsd-alpha + 27\\u00d7 tmp-* \\u00b7 all branchName=main \\u00b7 doom-loop churn inventory \\u00b7 closeout armed @97%\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-08-25T23:11:00Z\\",\\n      \\"label\\": \\"oneshot prompt + steer button\\",\\n      \\"note\\": \\"verbatim /goal + mid-run steer folded as oneshot \\u00b7 operator lunching at fav Chinese rest when dispatching\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-08-26T13:16:08Z\\",\\n      \\"label\\": \\"steer \\u00b7 model-reroute (UFO-FSD)\\",\\n      \\"note\\": \\"L1 orch bc-d6ef0199 tasked to implement native ERROR\\u2192allowed-bucket wake/reroute (grok-4.6-fast|grok-4.5-fast|composer-2.5); manual recovery proved; folded into oneshot steer artifact; run-b79f60b9\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-08-26T18:05:37Z\\",\\n      \\"label\\": \\"24h wall freeze\\",\\n      \\"note\\": \\"closeout-24h-wall.json \\u00b7 included ~76.98% \\u00b7 swarm 11/10/7 \\u00b7 harvest mode\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-08-26T19:14:58Z\\",\\n      \\"label\\": \\"end-run lock (operator)\\",\\n      \\"note\\": \\"Paused thrashing RUNNING peers \\u00b7 L1 follow-up run-8e67770f \\u00b7 only L1 left RUNNING \\u00b7 charter next-run.md live\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-08-26T20:10:39Z\\",\\n      \\"label\\": \\"final board close\\",\\n      \\"note\\": \\"swarm terminal 21/7/0 \\u00b7 included 79.0% \\u00b7 auto 42.0% \\u00b7 API 100% \\u00b7 wall 1565m \\u00b7 L1+linked FINISHED \\u00b7 final-telemetry artifact\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-08-27T18:05:16.539Z\\",\\n      \\"label\\": \\"complete burn (projected)\\",\\n      \\"note\\": \\"48h mint\\u2192100% included monthly total usage \\u00b7 operator SSOT \\u00b7 linear extrap from 79% @ 26.1h \\u2248 33h \\u00b7 total saved $4519 projected (45.7\\u00d7 $99) \\u00b7 run closed before reaching full burn\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-08-27T03:10:00Z\\",\\n      \\"label\\": \\"live kimi-k3-max probe $3570\\",\\n      \\"note\\": \\"cursor-agent --model kimi-k3-max \\u00b7 ActionRequiredError usage limit \\u00b7 ~36.1\\u00d7 $99 \\u00b7 speedrun full-burn board update\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-09-15\\",\\n      \\"label\\": \\"receipt update\\",\\n      \\"note\\": \\"Token tally: 5.6B tokens counted across the UFO core /goal swarm.\\"\\n    }\\n  ],\\n  \\"metrics\\": {\\n    \\"mode\\": \\"goal \\u00b7 oneshot + mid-run steer \\u00b7 self-clone forking\\",\\n    \\"parallelization\\": \\"prompt-group cloud swarm \\u00b7 multi-model BC fan-out\\",\\n    \\"category\\": \\"oneshot\\",\\n    \\"categories\\": [\\n      \\"goal\\",\\n      \\"self_iterating_continuation_through_self_clone_forking\\",\\n      \\"oneshot\\",\\n      \\"steer_mid_run\\",\\n      \\"steer_model_reroute\\"\\n    ],\\n    \\"linked_bc_id\\": \\"bc-cc5260a9-3185-4d91-964d-0ec8ee323df4\\",\\n    \\"linked_bc_status\\": \\"BACKGROUND_COMPOSER_STATUS_FINISHED\\",\\n    \\"linked_bc_model\\": \\"composer-2.5\\",\\n    \\"linked_bc_max_mode\\": true,\\n    \\"linked_bc_goal_runtime\\": \\"46m 28s\\",\\n    \\"linked_bc_files_changed\\": 4651,\\n    \\"linked_bc_lines_added\\": 611508,\\n    \\"linked_bc_branch\\": \\"cursor/ufo-core-runtime-3df4\\",\\n    \\"prompt_group_id\\": \\"96a3e089-bd83-4cb2-a618-284b71661283\\",\\n    \\"swarm_n\\": 28,\\n    \\"swarm_running\\": 0,\\n    \\"swarm_finished\\": 21,\\n    \\"swarm_error\\": 7,\\n    \\"swarm_wall_min\\": 1441.16,\\n    \\"included_usage_pct_at_monitor_start\\": 26,\\n    \\"ultra_api_savings_usd_this_month\\": 3570,\\n    \\"ultra_api_savings_usd_at_run_close\\": 1515,\\n    \\"kimi_k3_max_usage_limit_hit\\": true,\\n    \\"spendLimitHit\\": false,\\n    \\"spendLimits\\": [\\n      50,\\n      100,\\n      200\\n    ],\\n    \\"monthly_cycle_reset\\": \\"2026-09-18\\",\\n    \\"orchestrator_anti_gemini\\": true,\\n    \\"gemini_peer_present\\": true,\\n    \\"gemini_peer_note\\": \\"one finished gemini-3.7-flash-high peer in same prompt_group; linked orchestrator BC was composer-2.5 not gemini\\",\\n    \\"repo\\": \\"jo-o-veiga/ufo-fsd-alpha\\",\\n    \\"starting_commit\\": \\"f43c757c871232f8992bac4c2d858d52ec9fe29e\\",\\n    \\"outcome\\": \\"closed \\u00b7 harvest seated \\u00b7 parent goal OPEN\\",\\n    \\"ufo_fsd_in_action\\": true,\\n    \\"repo_host\\": \\"origin.cursor.com\\",\\n    \\"repo_branch_count\\": 25,\\n    \\"repo_cursor_branch_count\\": 24,\\n    \\"repo_head_sha\\": \\"838e6d20c9f41e1f60590c1be373b9a0793daab0\\",\\n    \\"used_percent\\": 79.001,\\n    \\"auto_percent_used\\": 41.953,\\n    \\"api_percent_used\\": 100.0,\\n    \\"total_spend_cents\\": 276503,\\n    \\"included_spend_cents\\": 40000,\\n    \\"bonus_spend_cents\\": 236503,\\n    \\"included_limit_cents\\": 40000,\\n    \\"plan_type\\": \\"ultra\\",\\n    \\"plan_price\\": \\"$99 paid (this mint)\\",\\n    \\"pct_per_min\\": 0.0381,\\n    \\"eta_100_min\\": null,\\n    \\"elapsed_min_from_session\\": 1565.39,\\n    \\"elapsed_min_from_first_meter\\": 1463.66,\\n    \\"model\\": \\"composer-2.5 \\u00b7 multi-model swarm\\",\\n    \\"n_rollouts\\": 28,\\n    \\"window_minutes\\": null,\\n    \\"meter_label\\": \\"included total usage (Ultra)\\",\\n    \\"ultra_api_savings_usd_operator_paste\\": 1497,\\n    \\"api_credit_multiple_vs_200\\": 15.3,\\n    \\"closeout_at_pct\\": 97,\\n    \\"pretend_100_at_97\\": true,\\n    \\"plan_price_list_note\\": \\"Cursor included meter still shows $400 included pool; operator paid $99 for this mint\\",\\n    \\"ultra_paid_usd_this_mint\\": 99,\\n    \\"ultra_paid_usd_pending_mint\\": 300,\\n    \\"ultra_pending_label\\": \\"$199 Cursor Ultra\\",\\n    \\"supergrok_heavy_list_usd\\": 300,\\n    \\"supergrok_heavy\\": \\"grant (incl. for free)\\",\\n    \\"grok_bot\\": \\"free\\",\\n    \\"x_premium_plus\\": \\"giver\\",\\n    \\"api_credit_multiple_vs_99\\": 36.1,\\n    \\"plan_price_cursor_api\\": \\"$200/mo\\",\\n    \\"l1_orch_bc_id\\": \\"bc-d6ef0199-765b-427a-a308-122148f46a51\\",\\n    \\"model_reroute_allowed\\": [\\n      \\"cursor-grok-4.6-high-fast\\",\\n      \\"cursor-grok-4.5-high-fast\\",\\n      \\"composer-2.5\\"\\n    ],\\n    \\"model_reroute_impl_run_id\\": \\"run-b79f60b9-7741-4b33-b307-4233b20950b3\\",\\n    \\"closeout_primary\\": \\"wall_cap\\",\\n    \\"wall_cap_min\\": 1440,\\n    \\"harvest_mode\\": true,\\n    \\"wake_policy\\": \\"stopped \\u00b7 thrash peers paused\\",\\n    \\"end_run_lock\\": true,\\n    \\"end_run_lock_ts\\": \\"2026-08-26T19:14:58Z\\",\\n    \\"end_run_lock_l1_run_id\\": \\"run-8e67770f-ef18-451d-b53b-9302a5bf9ff1\\",\\n    \\"all_terminal\\": true,\\n    \\"swarm_sum_lines_added\\": 37289961,\\n    \\"swarm_sum_files_changed\\": 417992,\\n    \\"closed_ts\\": \\"2026-08-26T20:10:39Z\\",\\n    \\"final_telemetry\\": \\"data/artifacts/final-telemetry-2026-08-26.json\\",\\n    \\"tokens_counted\\": 5600000000,\\n    \\"tokens_counted_note\\": \\"5.6B tokens counted across the swarm\\"\\n  },\\n  \\"snapshot\\": {\\n    \\"ts\\": \\"2026-08-26T20:10:39Z\\",\\n    \\"prompt_group_id\\": \\"96a3e089-bd83-4cb2-a618-284b71661283\\",\\n    \\"swarm_n\\": 28,\\n    \\"by_status\\": {\\n      \\"BACKGROUND_COMPOSER_STATUS_FINISHED\\": 21,\\n      \\"BACKGROUND_COMPOSER_STATUS_ERROR\\": 7\\n    },\\n    \\"by_model\\": {\\n      \\"cursor-grok-4.6-high-fast\\": 11,\\n      \\"composer-2.5\\": 8,\\n      \\"cursor-grok-4.5-high-fast\\": 9\\n    },\\n    \\"swarm_running\\": 0,\\n    \\"swarm_finished\\": 21,\\n    \\"swarm_error\\": 7,\\n    \\"swarm_other\\": 0,\\n    \\"swarm_wall_min\\": 1565.39,\\n    \\"swarm_sum_lines_added\\": 37289961,\\n    \\"swarm_sum_files_changed\\": 417992,\\n    \\"linked_bc_id\\": \\"bc-cc5260a9-3185-4d91-964d-0ec8ee323df4\\",\\n    \\"linked_bc_status\\": \\"BACKGROUND_COMPOSER_STATUS_FINISHED\\",\\n    \\"l1_orch_bc_id\\": \\"bc-d6ef0199-765b-427a-a308-122148f46a51\\",\\n    \\"l1_orch_status\\": \\"BACKGROUND_COMPOSER_STATUS_FINISHED\\",\\n    \\"all_terminal\\": true,\\n    \\"used_percent\\": 79.001,\\n    \\"auto_percent_used\\": 41.953,\\n    \\"api_percent_used\\": 100.0,\\n    \\"total_spend_cents\\": 276503,\\n    \\"included_spend_cents\\": 40000,\\n    \\"bonus_spend_cents\\": 236503,\\n    \\"included_limit_cents\\": 40000,\\n    \\"display_message\\": \\"You've hit your usage limit\\",\\n    \\"auto_msg\\": \\"You've used 79% of your included total usage\\",\\n    \\"named_msg\\": \\"You've used 100% of your included API usage\\",\\n    \\"wall_cap_min\\": 1440,\\n    \\"closeout_primary\\": \\"wall_cap\\",\\n    \\"harvest_mode\\": true,\\n    \\"wall_cap_reached\\": true,\\n    \\"freeze_reason\\": \\"wall_cap_24h\\",\\n    \\"end_run_lock\\": true,\\n    \\"board_status\\": \\"closed\\"\\n  },\\n  \\"artifacts\\": {\\n    \\"prompt\\": \\"data/artifacts/prompt-cursor-ultra-ufo-core-2026-08-25.md\\",\\n    \\"ultra_meter\\": \\"data/artifacts/meter-cursor-ultra-kimi-k3-max-1497-saved-2026-08-25.json\\",\\n    \\"repo_snapshot\\": \\"data/artifacts/repo-ufo-fsd-alpha-snapshot.json\\",\\n    \\"ultra_meter_probe\\": \\"data/artifacts/meter-cursor-ultra-kimi-k3-max-1515-probe-2026-08-25.json\\",\\n    \\"audit_effective\\": \\"data/artifacts/audit-swarm-effective-changes-2026-08-25.json\\",\\n    \\"audit_effective_md\\": \\"data/artifacts/audit-swarm-effective-changes-2026-08-25.md\\",\\n    \\"ultra_meter_latest\\": \\"data/artifacts/meter-cursor-ultra-kimi-k3-max-3570-probe-2026-08-27.json\\",\\n    \\"oneshot_prompt_html\\": \\"data/artifacts/oneshot-prompt-cursor-ultra-ufo-core-2026-08-25.html\\",\\n    \\"closeout_policy_24h\\": \\"data/artifacts/closeout-policy-24h-wall.json\\",\\n    \\"closeout_24h\\": \\"data/artifacts/closeout-24h-wall.json\\",\\n    \\"end_run_lock\\": \\"data/artifacts/end-run-lock-2026-08-26.json\\",\\n    \\"steer_end_run\\": \\"data/artifacts/steer-l1-orch-end-run-lock.json\\",\\n    \\"final_telemetry\\": \\"data/artifacts/final-telemetry-2026-08-26.json\\",\\n    \\"swarm_peers_final\\": \\"data/artifacts/swarm-peers-final.json\\"\\n  },\\n  \\"links\\": {\\n    \\"agent\\": \\"https://cursor.com/agents/bc-cc5260a9-3185-4d91-964d-0ec8ee323df4?selectedBcId=bc-cc5260a9-3185-4d91-964d-0ec8ee323df4&app=subscriptions\\",\\n    \\"charter\\": \\"https://veigapunk.github.io/charter-ufo-fsd\\",\\n    \\"board\\": \\"./\\",\\n    \\"dashboard_settings\\": \\"https://www.cursor.com/dashboard?tab=settings\\",\\n    \\"origin_repo\\": \\"https://cursor.com/codebase/jo-o-veiga/ufo-fsd-alpha\\",\\n    \\"origin_git\\": \\"https://origin.cursor.com/git/jo-o-veiga/ufo-fsd-alpha.git\\",\\n    \\"oneshot_prompt\\": \\"data/artifacts/oneshot-prompt-cursor-ultra-ufo-core-2026-08-25.html\\",\\n    \\"operator\\": \\"https://x.com/VeigaPunk\\"\\n  },\\n  \\"tags\\": [\\n    \\"api-savings\\",\\n    \\"closed\\",\\n    \\"cursor\\",\\n    \\"end-run-lock\\",\\n    \\"final-telemetry\\",\\n    \\"goal\\",\\n    \\"harvest\\",\\n    \\"kimi-k3-max\\",\\n    \\"oauth\\",\\n    \\"oneshot\\",\\n    \\"self-clone-forking\\",\\n    \\"ufo-fsd\\",\\n    \\"ultra\\"\\n  ],\\n  \\"paid\\": true,\\n  \\"not_a_grant\\": true,\\n  \\"category\\": \\"oneshot\\",\\n  \\"meter\\": \\"cursor_ultra_included_usage\\",\\n  \\"paper_attachment\\": \\"/home/vgpnk/Downloads/UFO_arxiv_style_paper (1).pdf\\",\\n  \\"repository\\": {\\n    \\"host\\": \\"origin.cursor.com\\",\\n    \\"full_name\\": \\"jo-o-veiga/ufo-fsd-alpha\\",\\n    \\"id\\": \\"r_01m0x1j4c1f1raz2wr8bpa24rq\\",\\n    \\"default_branch\\": \\"main\\",\\n    \\"created_at\\": \\"2026-08-25T18:05:16.539Z\\",\\n    \\"url\\": \\"https://cursor.com/codebase/jo-o-veiga/ufo-fsd-alpha\\",\\n    \\"git_https\\": \\"https://origin.cursor.com/git/jo-o-veiga/ufo-fsd-alpha.git\\",\\n    \\"note\\": \\"Cursor Origin repo created at swarm mint. BC list still showed tmp-d1cb8c062407c7a9 alias earlier; operator SSOT is ufo-fsd-alpha.\\",\\n    \\"cloneUrl\\": \\"https://origin.cursor.com/jo-o-veiga/ufo-fsd-alpha.git\\",\\n    \\"pushedAt\\": \\"2026-08-25T19:49:24.333Z\\",\\n    \\"branch_count\\": 25,\\n    \\"cursor_branch_count\\": 24,\\n    \\"head_sha\\": \\"838e6d20c9f41e1f60590c1be373b9a0793daab0\\",\\n    \\"head_message\\": \\"Bridge orch memory SSoT and integrate ufo-core SPEC orphans.\\"\\n  },\\n  \\"curve\\": \\"data/cursor-ultra-curve.json\\",\\n  \\"session_start\\": \\"2026-08-25T18:05:16.539Z\\",\\n  \\"first_meter\\": \\"2026-08-25T19:47:00Z\\",\\n  \\"burn_clock\\": {\\n    \\"mint_ts\\": \\"2026-08-25T18:05:16.539Z\\",\\n    \\"first_proper_use_ts\\": \\"2026-08-25T18:05:20.203Z\\",\\n    \\"mint_to_first_use_sec\\": 3.7,\\n    \\"close_ts\\": \\"2026-08-26T20:10:39Z\\",\\n    \\"elapsed_hours_at_close\\": 26.09,\\n    \\"included_pct_at_close\\": 79.0,\\n    \\"api_pct_at_close\\": 100.0,\\n    \\"api_100_ts\\": \\"2026-08-25T19:54:57Z\\",\\n    \\"mint_to_api_100_hours\\": 1.83,\\n    \\"complete_burn_hours\\": 48,\\n    \\"complete_burn_ts\\": \\"2026-08-27T18:05:16.539Z\\",\\n    \\"complete_burn_hours_linear\\": 33.02,\\n    \\"complete_burn_ts_linear\\": \\"2026-08-27T03:06:45.730Z\\",\\n    \\"complete_burn_basis\\": \\"operator\\",\\n    \\"monthly_included_burn_hours_operator\\": 48,\\n    \\"monthly_included_burn_hours_linear\\": 33.02,\\n    \\"monthly_included_burn_hours_display\\": 48,\\n    \\"display_note\\": \\"Complete burn: 48h from mint to 100% included monthly total usage (operator). Measured close: 26.1h @ 79%. Linear extrap \\u224833h. Run closed on 24h harvest wall before full burn.\\",\\n    \\"meter_label\\": \\"included total usage (Ultra monthly cycle)\\"\\n  },\\n  \\"total_saved\\": {\\n    \\"source\\": \\"Cursor Ultra UI \\u00b7 API model usage savings this month\\",\\n    \\"api_savings_usd_at_close\\": 1515,\\n    \\"api_savings_usd_latest\\": 3570,\\n    \\"api_savings_usd_operator_paste\\": 1497,\\n    \\"api_savings_usd_complete_burn\\": 4519,\\n    \\"api_savings_usd_complete_burn_basis\\": \\"linear extrap from $3570 latest probe @ 79% included run close \\u2192 100%\\",\\n    \\"multiple_vs_99_mint_at_close\\": 15.3,\\n    \\"multiple_vs_99_mint_latest\\": 36.1,\\n    \\"multiple_vs_99_mint_complete_burn\\": 45.7,\\n    \\"probe_ts\\": \\"2026-08-27T03:10:00Z\\",\\n    \\"probe_ts_at_close\\": \\"2026-08-25T22:54:51Z\\",\\n    \\"bonus_spend_usd_at_close\\": 2365.03,\\n    \\"bonus_spend_usd_complete_burn\\": 2994.0,\\n    \\"mint_price_usd\\": 99,\\n    \\"display_usd\\": 4519,\\n    \\"display_note\\": \\"Latest Kimi probe $3570 (36.1\\u00d7 $99 mint); projected $4519 (45.7\\u00d7) @ 48h complete burn.\\"\\n  },\\n  \\"pace\\": {\\n    \\"elapsed_min_from_session\\": 1565.39,\\n    \\"elapsed_min_from_first_meter\\": 1463.66,\\n    \\"pct_per_min\\": 0.0381,\\n    \\"eta_100_min\\": null,\\n    \\"record_target_min\\": 60,\\n    \\"subhour_session_ok\\": false,\\n    \\"subhour_meter_ok\\": false,\\n    \\"subhour_ok\\": false,\\n    \\"closed\\": true\\n  },\\n  \\"display_venue\\": \\"cursor.com/agents \\u00b7 ufo-fsd-alpha (Cursor Origin)\\",\\n  \\"closeout\\": {\\n    \\"at_wall_min\\": 1440.29,\\n    \\"wall_cap_min\\": 1440,\\n    \\"reason\\": \\"wall_cap_24h\\",\\n    \\"artifact\\": \\"data/artifacts/closeout-24h-wall.json\\",\\n    \\"included_pct_at_freeze\\": 76.983,\\n    \\"end_run_lock_ts\\": \\"2026-08-26T19:14:58Z\\",\\n    \\"operator_paused_thrash\\": true,\\n    \\"board_closed_ts\\": \\"2026-08-26T20:10:39Z\\",\\n    \\"final_included_pct\\": 79.001,\\n    \\"final_swarm\\": {\\n      \\"running\\": 0,\\n      \\"finished\\": 21,\\n      \\"error\\": 7\\n    },\\n    \\"all_terminal\\": true,\\n    \\"final_telemetry\\": \\"data/artifacts/final-telemetry-2026-08-26.json\\"\\n  }\\n}", "data/run-tp-infnet-crossbreed-avalanche-2026-08-27.json": "{\\n  \\"id\\": \\"veigapunk-tp-infnet-crossbreed-avalanche-2026-08-27\\",\\n  \\"title\\": \\"Token Plan \\u2014 offpeak crossbreed avalanche (qwen3.8-max \\u00d78 L1 \\u00d7 ds-pro L2)\\",\\n  \\"runner\\": \\"VeigaPunk\\",\\n  \\"provider\\": \\"Alibaba Cloud Model Studio / Token Plan (ap-southeast-1)\\",\\n  \\"product\\": \\"qwen3.8-max xhigh \\u00d78 L1 orchestrators (codex-titanium-qwen38) \\u00d7 deepseek-v4-pro L2 runners (codex-titanium-ds-pro) \\u2014 crossbreed of two offpeak TP models; L3 luna-low-fast on OpenAI OAuth; L0 = kimi-code k3-max (dispatch tax only)\\",\\n  \\"budget_usd\\": null,\\n  \\"budget_note\\": \\"Freshly minted Token Plan pro (third key; gmail + team slots exhausted earlier same day). No usage limit 5h; run limited to the ~2h offpeak window (2026-08-27T22:56Z \\u2192 ~00:56Z). TP lanes are low-TPS \\u2014 L2 fan-out capped at small batches.\\",\\n  \\"currency\\": \\"USD\\",\\n  \\"status\\": \\"closed\\",\\n  \\"duration\\": \\"closed \\u00b7 ~2h offpeak window (2026-08-27T22:56Z \\u2192 00:56Z)\\",\\n  \\"venue\\": \\"tmux ufo-l1..ufo-l8 + ufo-l-wall \\u00b7 cwd Projects/origin-work/ufo-fsd-alpha\\",\\n  \\"summary\\": \\"Offpeak crossbreed avalanche on ufo-fsd-alpha after a same-day tooling rebase (64 one-off spawn scripts consolidated into parameterized dispatchers; godspeed byte-injection fixed tree-wide, coherence 17/17; Kimi 15-min token TTL fixed via local auth proxy 127.0.0.1:8791). 8 L1 seats on qwen3.8-max xhigh orchestrate ds-pro L2 workers in small batches. Every L1/L2 dispatch disclosed with sequential # and dispatch id in .ufo/local-dispatch/run-ledger-avalanche-20260827.jsonl. L0 orchestration from a native kimi-code k3-max session (Kimi preserved to dispatch tax). Wave W (23:55Z): 8 web-layer L1 seats ufo-w1..w8 dispatched onto the ds4cc web repos, same gen 27. CLOSED at window end: 126 disclosed dispatches (16 L1 spawns across core+web waves, 46 L2 ds-pro on TP, 61 L2 luna/sol review, 1 L3), final Token Plan weekly 31.4%.\\",\\n  \\"timeline\\": [\\n    {\\n      \\"t\\": \\"2026-08-27T21:09Z\\",\\n      \\"label\\": \\"kimi fleet 401 storm root-caused\\",\\n      \\"note\\": \\"15-min router TTL vs launch-time KIMI_API_KEY capture; fixed with per-request Bearer refresh proxy; fleet nuked to zero Kimi burn\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-08-27T21:20Z\\",\\n      \\"label\\": \\"tooling rebase P1\\u2013P5 landed\\",\\n      \\"note\\": \\"spawn-surface consolidation + routing SSoT + godspeed dedupe + dangling-refs sweep + sol-review fixes; all on Codex OAuth (luna/sol), zero Kimi burn\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-08-27T21:56Z\\",\\n      \\"label\\": \\"third TP key wired\\",\\n      \\"note\\": \\"1Password 'Alibaba Cloud Token Plan' sha256 8c88cb2d\\u2026 == local key; active slot swapped; ds-pro + qwen38-flash smokes OK\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-08-27T22:56Z\\",\\n      \\"label\\": \\"avalanche dispatched (gen 27)\\",\\n      \\"note\\": \\"8\\u00d7 L1 qwen3.8-max xhigh alive on Token Plan; dispatch id l1-dispatch-20260827T225632Z; ledger seq 1\\u20138\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-08-27T23:45Z\\",\\n      \\"label\\": \\"ds-pro full offload + meter live\\",\\n      \\"note\\": \\"all 16 L2 roles on ds-pro (Token Plan), review-only sol; waybar token-plan chip meters Token Plan weekly 15.8%; substrate doctor loops killed fleet-wide\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-08-27T23:55Z\\",\\n      \\"label\\": \\"web wave dispatched (wave W)\\",\\n      \\"note\\": \\"8\\u00d7 L1 ufo-w1..w8 qwen3.8-max xhigh on the ds4cc web layer; ledger seq 109\\u2013116, wave=web, gen 27\\"\\n    },\\n    {\\n      \\"t\\": \\"2026-08-28T00:56Z\\",\\n      \\"label\\": \\"window closed \\u2014 wind-down\\",\\n      \\"note\\": \\"16 seats nuked; gates-record converged green (431 PASS, evidence re-recorded); final gates.sh verify in flight; commit+push next\\"\\n    }\\n  ],\\n  \\"metrics\\": {\\n    \\"mode\\": \\"agent / codex-titanium substrate on Token Plan compatible-mode\\",\\n    \\"parallelization\\": \\"16 L1 orchestrators in two waves \\u00d7 small-batch L2 (\\u22643 concurrent per seat, stagger \\u226545s)\\",\\n    \\"l1_model\\": \\"qwen3.8-max xhigh (983k ctx)\\",\\n    \\"l2_model\\": \\"deepseek-v4-pro-0813 (983k ctx)\\",\\n    \\"l3_model\\": \\"gpt-5.6-luna low (OpenAI OAuth)\\",\\n    \\"l0_model\\": \\"kimi-code k3-max (orchestration only)\\",\\n    \\"seats\\": 16,\\n    \\"recovery_generation\\": 27,\\n    \\"dispatch_ledger\\": \\".ufo/local-dispatch/run-ledger-avalanche-20260827.jsonl\\",\\n    \\"first_dispatch_id\\": \\"l1-dispatch-20260827T225632Z\\",\\n    \\"turns\\": 0,\\n    \\"outcome\\": \\"closed \\u00b7 window consumed \\u00b7 rebase converged green\\",\\n    \\"dispatches_disclosed\\": 126,\\n    \\"ledger\\": \\"run-ledger-avalanche-20260827.jsonl \\u00b7 120 disclosed rows \\u00b7 seq 1\\u2013116 (seq 41\\u201344 dual-disclosed by seat l7)\\",\\n    \\"tp_weekly_pct\\": 31.4,\\n    \\"tp_meter\\": \\"waybar ai-usage chip, reset 2026-09-03T22:31Z\\",\\n    \\"l1_waves\\": \\"wave 1 ufo-l1..l8 core (22:56Z) \\u00b7 wave W ufo-w1..w8 web (23:55Z)\\",\\n    \\"l2_mix\\": \\"deepseek-v4-pro-0813 \\u00d741 (Token Plan) \\u00b7 gpt-5.6-luna \\u00d733 (OAuth) \\u00b7 gpt-5.6-sol review-only \\u00d727 (OAuth) \\u00b7 qwen3.8-max \\u00d72 (TP) \\u00b7 L3 luna-low \\u00d71\\",\\n    \\"review_model\\": \\"gpt-5.6-sol (OpenAI OAuth, review-only via --codex)\\",\\n    \\"wave\\": \\"W (web)\\",\\n    \\"window_close\\": \\"~2026-08-28T00:56Z\\",\\n    \\"disclosure_note\\": \\"data/artifacts/ledger-disclosure-convention-2026-08-27.md\\",\\n    \\"used_percent\\": 31.4\\n  },\\n  \\"snapshot\\": {\\n    \\"ts\\": \\"2026-08-28T00:56:00Z\\",\\n    \\"alive\\": false,\\n    \\"tmux\\": \\"nuked\\",\\n    \\"round\\": \\"gen-27 final\\"\\n  },\\n  \\"display_venue\\": \\"tmux ufo-l1..l8 + ufo-w1..w8 + ufo-l-wall \\u00b7 cwd Projects/origin-work/ufo-fsd-alpha\\",\\n  \\"category\\": \\"avalanche\\",\\n  \\"meter\\": \\"token_plan_weekly\\",\\n  \\"tags\\": [\\n    \\"token-plan\\",\\n    \\"crossbreed\\",\\n    \\"avalanche\\",\\n    \\"fleet\\",\\n    \\"live\\"\\n  ],\\n  \\"paid\\": true,\\n  \\"not_a_grant\\": true,\\n  \\"links\\": {\\n    \\"board\\": \\"./\\",\\n    \\"ledger_convention\\": \\"data/artifacts/ledger-disclosure-convention-2026-08-27.md\\",\\n    \\"operator\\": \\"https://x.com/VeigaPunk\\"\\n  }\\n}"}`,Jk=JSON.parse(Fk),Bo=`<script>
(function () {
  "use strict";

  // ---- local data shim (speedrun board) ----------------------------------
  if (window.__DS4CC_DATA__) {
    var realFetch = window.fetch.bind(window);
    window.fetch = function (input, init) {
      var url = typeof input === "string" ? input : (input && input.url) || "";
      for (var k in window.__DS4CC_DATA__) {
        if (url.indexOf(k) !== -1 || url.slice(-k.length) === k) {
          return Promise.resolve(new Response(window.__DS4CC_DATA__[k], {
            status: 200,
            headers: { "Content-Type": "application/json" }
          }));
        }
      }
      return realFetch(input, init);
    };
  }

  // ---- rinnegan gate ----------------------------------------------------
  // The parent owns the decision; the frame only applies the outcome and
  // re-renders the catalog through the site's own filter listener.
  function applyRinnegan(on) {
    document.documentElement.classList.toggle("rinnegan", on);
    var btn = document.getElementById("rinneganBtn");
    if (btn) {
      btn.setAttribute("aria-pressed", on ? "true" : "false");
      var lbl = btn.querySelector(".rinnegan-label");
      if (lbl) lbl.textContent = on ? "rinnegan [on]" : "rinnegan [off]";
    }
    var f = document.getElementById("plugFilter");
    if (f) f.dispatchEvent(new Event("input", { bubbles: true }));
  }

  window.addEventListener("message", function (e) {
    var d = e.data || {};
    if (d && d.type === "ds4cc:rinnegan-set") applyRinnegan(!!d.on);
  });

  document.addEventListener("click", function (e) {
    var t = e.target && e.target.closest ? e.target.closest("#rinneganBtn") : null;
    if (!t) return;
    e.preventDefault();
    e.stopImmediatePropagation();
    parent.postMessage({
      type: "ds4cc:rinnegan-request",
      current: document.documentElement.classList.contains("rinnegan")
    }, "*");
  }, true);

  // ---- local navigation back to the router -------------------------------
  document.addEventListener("click", function (e) {
    var a = e.target && e.target.closest ? e.target.closest("a[href]") : null;
    if (!a) return;
    var href = a.getAttribute("href") || "";
    if (!href || href.charAt(0) === "#") return;
    if (/^(https?:|mailto:|tel:|javascript:)/i.test(href)) return;
    e.preventDefault();
    e.stopImmediatePropagation();
    parent.postMessage({ type: "ds4cc:navigate", path: href }, "*");
  }, true);

  parent.postMessage({ type: "ds4cc:ready" }, "*");
})();
<\/script>`;function Nh(a,o){return`<script>${o}<\/script><!-- was: ${a} -->`}function Wk(){return Hk.replace('<script src="./rinnegan/catalog.js"><\/script>',Nh("./rinnegan/catalog.js",Ik)).replace('<script src="./rinnegan/policy.js"><\/script>',Nh("./rinnegan/policy.js",Xk)).replace("</body>",`${Bo}
</body>`)}function ew(){return qk.replace("<body>",`<body>
<script>window.__DS4CC_DATA__ = ${JSON.stringify(Jk)};<\/script>`).replace('<link rel="stylesheet" href="style.css" />',`<style>${Gk}</style>`).replace('<script src="main.js" type="module"><\/script>',`<script type="module">${$k}<\/script>`).replace("</body>",`${Bo}
</body>`)}function tw(){return Qk.replace('<link rel="stylesheet" href="style.css">',`<style>${Zk}</style>`).replace('<script src="main.js"><\/script>',`<script>${Vk}<\/script>`).replace("</body>",`${Bo}
</body>`)}function nw(){return Yk.replace('<link rel="stylesheet" href="style.css" />',`<style>${Kk}</style>`).replace("</body>",`${Bo}
</body>`)}function su(a){return a.replace("</body>",`${Bo}
</body>`)}const aw={main:Wk,xbgst:()=>su(Uk),exa:()=>su(Bk),bloat:()=>su(Pk),speedrun:ew,omegag:tw,omarchy:nw},Hh=new Map;function rw(a){let o=Hh.get(a);return o||(o=aw[a](),Hh.set(a,o)),o}function g0(a){let o=(a||"").trim();return o?(o=o.replace(/^\.\//,"/").replace(/^\/*/,"/"),o=o.replace(/\.html$/i,"").replace(/\/+$/,""),o===""?"/":{"/index":"/","/omarchy-usage":"/omarchy-usage"}[o]??o):null}function b0({page:a,onMessage:o,frameRef:l}){const s=_.useRef(null),u=_.useMemo(()=>rw(a),[a]),d=_.useRef(o);d.current=o;const p=h=>{s.current=h,l&&(l.current=h)};return _.useEffect(()=>{function h(f){const g=f.data;!g||typeof g!="object"||(g.type==="ds4cc:ready"||g.type==="ds4cc:rinnegan-request"||g.type==="ds4cc:navigate")&&d.current(g)}return window.addEventListener("message",h),()=>window.removeEventListener("message",h)},[]),K.jsx("iframe",{"code-path":"src/components/SiteFrame.tsx:45:5",ref:p,title:`ds4cc — ${a}`,srcDoc:u,style:{border:0,display:"block",width:"100%",height:"100vh",background:"#07060b"}})}const ow="/login";function Vu(a){const{redirectOnUnauthenticated:o=!1,redirectPath:l=ow}={},s=Sr(),u=_n.useUtils(),{data:d,isLoading:p,error:h,refetch:f}=_n.auth.me.useQuery(void 0,{staleTime:1e3*60*5,retry:!1}),g=_n.auth.logout.useMutation({onSuccess:async()=>{await u.invalidate(),s(l)}}),v=_.useCallback(()=>g.mutate(),[g]);return _.useEffect(()=>{o&&!p&&!d&&window.location.pathname!==l&&s(l)},[o,p,d,s,l]),_.useMemo(()=>({user:d??null,isAuthenticated:!!d,isLoading:p||g.isPending,error:h,logout:v,refresh:f}),[d,p,g.isPending,h,v,f])}function lw({open:a,onClose:o,onUnlocked:l}){const s=Sr(),{isAuthenticated:u,user:d}=Vu(),[p,h]=_.useState("USD"),f=_n.useUtils(),g=_n.rinnegan.unlock.useMutation({onSuccess:async()=>{await f.rinnegan.status.invalidate(),l(),o()}});return a?K.jsx("div",{"code-path":"src/components/RinneganGate.tsx:31:5",className:"kc-overlay",role:"dialog","aria-modal":"true","aria-label":"Rinnegan access",children:K.jsxs("div",{"code-path":"src/components/RinneganGate.tsx:32:7",className:"kc-gate",children:[K.jsxs("div",{"code-path":"src/components/RinneganGate.tsx:33:9",className:"kc-gate-head",children:[K.jsx("span",{"code-path":"src/components/RinneganGate.tsx:34:11",className:"kc-gate-eye","aria-hidden":"true"}),K.jsxs("div",{"code-path":"src/components/RinneganGate.tsx:35:11",children:[K.jsx("div",{"code-path":"src/components/RinneganGate.tsx:36:13",className:"kc-gate-kicker",children:"rinnegan // omp-only tier"}),K.jsx("h2",{"code-path":"src/components/RinneganGate.tsx:37:13",className:"kc-gate-title",children:"The gate admits one substrate."})]})]}),K.jsxs("p",{"code-path":"src/components/RinneganGate.tsx:41:9",className:"kc-gate-copy",children:["The rinnegan catalog serves ",K.jsx("b",{"code-path":"src/components/RinneganGate.tsx:42:39",children:"omp"})," — the SS+ host CLI. Nothing else makes the cut; the other substrates have their place in normal mode. Access costs exactly ",K.jsx("b",{"code-path":"src/components/RinneganGate.tsx:44:38",children:"1 unit of any currency you choose"}),", on your honor. No processor, no middleman: pay it by whatever means you have, the pledge is the receipt."]}),u?K.jsxs("form",{"code-path":"src/components/RinneganGate.tsx:66:11",className:"kc-gate-actions",onSubmit:v=>{v.preventDefault(),g.mutate({currency:p})},children:[K.jsxs("label",{"code-path":"src/components/RinneganGate.tsx:73:13",className:"kc-field",children:[K.jsx("span",{"code-path":"src/components/RinneganGate.tsx:74:15",children:"currency — any, yours to name"}),K.jsx("input",{"code-path":"src/components/RinneganGate.tsx:75:15",value:p,onChange:v=>h(v.target.value),maxLength:16,placeholder:"USD",autoFocus:!0})]}),K.jsx("button",{"code-path":"src/components/RinneganGate.tsx:83:13",type:"submit",className:"kc-btn solid",disabled:g.isPending||!p.trim(),children:g.isPending?"pledging…":`Pledge 1 ${p.trim().toUpperCase()||"—"} & unlock`}),K.jsx("button",{"code-path":"src/components/RinneganGate.tsx:92:13",type:"button",className:"kc-btn",onClick:o,children:"not yet"}),g.error&&K.jsx("div",{"code-path":"src/components/RinneganGate.tsx:96:15",className:"kc-gate-err",children:g.error.message||"pledge failed — try again"}),K.jsxs("div",{"code-path":"src/components/RinneganGate.tsx:100:13",className:"kc-gate-note",children:["signed in as ",d?.name??"operator"," — the toggle stays per-visit after this, never persisted"]})]}):K.jsxs("div",{"code-path":"src/components/RinneganGate.tsx:50:11",className:"kc-gate-actions",children:[K.jsx("button",{"code-path":"src/components/RinneganGate.tsx:51:13",type:"button",className:"kc-btn solid",onClick:()=>{o(),s("/login")},children:"Sign in with Kimi to pledge"}),K.jsx("button",{"code-path":"src/components/RinneganGate.tsx:61:13",type:"button",className:"kc-btn",onClick:o,children:"stay in normal mode"})]})]})}):null}function v0(){const a=Sr(),{user:o,isAuthenticated:l,isLoading:s,logout:u}=Vu(),d=_n.rinnegan.status.useQuery(void 0,{enabled:l});return K.jsx("div",{"code-path":"src/components/AccountBar.tsx:15:5",className:"kc-bar",children:s?null:l?K.jsxs(K.Fragment,{children:[K.jsxs("span",{"code-path":"src/components/AccountBar.tsx:26:11",className:"kc-chip kc-chip-id",children:[o?.name??"operator",K.jsx("i",{"code-path":"src/components/AccountBar.tsx:28:13",className:d.data?.unlocked?"kc-dot kc-dot-on":"kc-dot",title:d.data?.unlocked?"rinnegan pledged":"normal mode"})]}),K.jsx("button",{"code-path":"src/components/AccountBar.tsx:35:11",type:"button",className:"kc-chip",onClick:()=>{u()},children:"sign out"})]}):K.jsx("button",{"code-path":"src/components/AccountBar.tsx:17:9",type:"button",className:"kc-chip",onClick:()=>a("/login"),children:"sign in"})})}function iw(){const a=Sr(),{isAuthenticated:o,isLoading:l}=Vu(),u=!!_n.rinnegan.status.useQuery(void 0,{enabled:o}).data?.unlocked,[d,p]=_.useState(!1),h=_.useRef(null),f=_.useCallback(v=>{h.current?.contentWindow?.postMessage({type:"ds4cc:rinnegan-set",on:v},"*")},[]),g=_.useCallback(v=>{if(v.type==="ds4cc:navigate"){const y=g0(v.path);y&&a(y);return}if(v.type==="ds4cc:rinnegan-request"){if(l)return;if(!o||!u){p(!0);return}f(!v.current)}},[l,o,u,f,a]);return K.jsxs("div",{"code-path":"src/pages/Home.tsx:49:5",className:"kc-host",children:[K.jsx(b0,{"code-path":"src/pages/Home.tsx:50:7",page:"main",onMessage:g,frameRef:h}),K.jsx(v0,{"code-path":"src/pages/Home.tsx:51:7"}),K.jsx(lw,{"code-path":"src/pages/Home.tsx:52:7",open:d,onClose:()=>p(!1),onUnlocked:()=>f(!0)})]})}function hr({page:a}){const o=Sr(),l=_.useCallback(s=>{if(s.type==="ds4cc:navigate"){const u=g0(s.path);u&&o(u)}},[o]);return K.jsxs("div",{"code-path":"src/pages/SubPage.tsx:21:5",className:"kc-host",children:[K.jsx(b0,{"code-path":"src/pages/SubPage.tsx:22:7",page:a,onMessage:l}),K.jsx(v0,{"code-path":"src/pages/SubPage.tsx:23:7"})]})}function y0(a){var o,l,s="";if(typeof a=="string"||typeof a=="number")s+=a;else if(typeof a=="object")if(Array.isArray(a)){var u=a.length;for(o=0;o<u;o++)a[o]&&(l=y0(a[o]))&&(s&&(s+=" "),s+=l)}else for(l in a)a[l]&&(s&&(s+=" "),s+=l);return s}function x0(){for(var a,o,l=0,s="",u=arguments.length;l<u;l++)(a=arguments[l])&&(o=y0(a))&&(s&&(s+=" "),s+=o);return s}const sw=(a,o)=>{const l=new Array(a.length+o.length);for(let s=0;s<a.length;s++)l[s]=a[s];for(let s=0;s<o.length;s++)l[a.length+s]=o[s];return l},cw=(a,o)=>({classGroupId:a,validator:o}),k0=(a=new Map,o=null,l)=>({nextPart:a,validators:o,classGroupId:l}),yi="-",Uh=[],uw="arbitrary..",dw=a=>{const o=fw(a),{conflictingClassGroups:l,conflictingClassGroupModifiers:s}=a;return{getClassGroupId:p=>{if(p.startsWith("[")&&p.endsWith("]"))return pw(p);const h=p.split(yi),f=h[0]===""&&h.length>1?1:0;return w0(h,f,o)},getConflictingClassGroupIds:(p,h)=>{if(h){const f=s[p],g=l[p];return f?g?sw(g,f):f:g||Uh}return l[p]||Uh}}},w0=(a,o,l)=>{if(a.length-o===0)return l.classGroupId;const u=a[o],d=l.nextPart.get(u);if(d){const g=w0(a,o+1,d);if(g)return g}const p=l.validators;if(p===null)return;const h=o===0?a.join(yi):a.slice(o).join(yi),f=p.length;for(let g=0;g<f;g++){const v=p[g];if(v.validator(h))return v.classGroupId}},pw=a=>a.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const o=a.slice(1,-1),l=o.indexOf(":"),s=o.slice(0,l);return s?uw+s:void 0})(),fw=a=>{const{theme:o,classGroups:l}=a;return mw(l,o)},mw=(a,o)=>{const l=k0();for(const s in a){const u=a[s];Yu(u,l,s,o)}return l},Yu=(a,o,l,s)=>{const u=a.length;for(let d=0;d<u;d++){const p=a[d];hw(p,o,l,s)}},hw=(a,o,l,s)=>{if(typeof a=="string"){gw(a,o,l);return}if(typeof a=="function"){bw(a,o,l,s);return}vw(a,o,l,s)},gw=(a,o,l)=>{const s=a===""?o:_0(o,a);s.classGroupId=l},bw=(a,o,l,s)=>{if(yw(a)){Yu(a(s),o,l,s);return}o.validators===null&&(o.validators=[]),o.validators.push(cw(l,a))},vw=(a,o,l,s)=>{const u=Object.entries(a),d=u.length;for(let p=0;p<d;p++){const[h,f]=u[p];Yu(f,_0(o,h),l,s)}},_0=(a,o)=>{let l=a;const s=o.split(yi),u=s.length;for(let d=0;d<u;d++){const p=s[d];let h=l.nextPart.get(p);h||(h=k0(),l.nextPart.set(p,h)),l=h}return l},yw=a=>"isThemeGetter"in a&&a.isThemeGetter===!0,xw=a=>{if(a<1)return{get:()=>{},set:()=>{}};let o=0,l=Object.create(null),s=Object.create(null);const u=(d,p)=>{l[d]=p,o++,o>a&&(o=0,s=l,l=Object.create(null))};return{get(d){let p=l[d];if(p!==void 0)return p;if((p=s[d])!==void 0)return u(d,p),p},set(d,p){d in l?l[d]=p:u(d,p)}}},Cu="!",Bh=":",kw=[],Ph=(a,o,l,s,u)=>({modifiers:a,hasImportantModifier:o,baseClassName:l,maybePostfixModifierPosition:s,isExternal:u}),ww=a=>{const{prefix:o,experimentalParseClassName:l}=a;let s=u=>{const d=[];let p=0,h=0,f=0,g;const v=u.length;for(let A=0;A<v;A++){const L=u[A];if(p===0&&h===0){if(L===Bh){d.push(u.slice(f,A)),f=A+1;continue}if(L==="/"){g=A;continue}}L==="["?p++:L==="]"?p--:L==="("?h++:L===")"&&h--}const y=d.length===0?u:u.slice(f);let C=y,D=!1;y.endsWith(Cu)?(C=y.slice(0,-1),D=!0):y.startsWith(Cu)&&(C=y.slice(1),D=!0);const N=g&&g>f?g-f:void 0;return Ph(d,D,C,N)};if(o){const u=o+Bh,d=s;s=p=>p.startsWith(u)?d(p.slice(u.length)):Ph(kw,!1,p,void 0,!0)}if(l){const u=s;s=d=>l({className:d,parseClassName:u})}return s},_w=a=>{const o=new Map;return a.orderSensitiveModifiers.forEach((l,s)=>{o.set(l,1e6+s)}),l=>{const s=[];let u=[];for(let d=0;d<l.length;d++){const p=l[d],h=p[0]==="[",f=o.has(p);h||f?(u.length>0&&(u.sort(),s.push(...u),u=[]),s.push(p)):u.push(p)}return u.length>0&&(u.sort(),s.push(...u)),s}},Sw=a=>({cache:xw(a.cacheSize),parseClassName:ww(a),sortModifiers:_w(a),...dw(a)}),Cw=/\s+/,Tw=(a,o)=>{const{parseClassName:l,getClassGroupId:s,getConflictingClassGroupIds:u,sortModifiers:d}=o,p=[],h=a.trim().split(Cw);let f="";for(let g=h.length-1;g>=0;g-=1){const v=h[g],{isExternal:y,modifiers:C,hasImportantModifier:D,baseClassName:N,maybePostfixModifierPosition:A}=l(v);if(y){f=v+(f.length>0?" "+f:f);continue}let L=!!A,Y=s(L?N.substring(0,A):N);if(!Y){if(!L){f=v+(f.length>0?" "+f:f);continue}if(Y=s(N),!Y){f=v+(f.length>0?" "+f:f);continue}L=!1}const I=C.length===0?"":C.length===1?C[0]:d(C).join(":"),F=D?I+Cu:I,pe=F+Y;if(p.indexOf(pe)>-1)continue;p.push(pe);const Z=u(Y,L);for(let V=0;V<Z.length;++V){const z=Z[V];p.push(F+z)}f=v+(f.length>0?" "+f:f)}return f},Ow=(...a)=>{let o=0,l,s,u="";for(;o<a.length;)(l=a[o++])&&(s=S0(l))&&(u&&(u+=" "),u+=s);return u},S0=a=>{if(typeof a=="string")return a;let o,l="";for(let s=0;s<a.length;s++)a[s]&&(o=S0(a[s]))&&(l&&(l+=" "),l+=o);return l},Ew=(a,...o)=>{let l,s,u,d;const p=f=>{const g=o.reduce((v,y)=>y(v),a());return l=Sw(g),s=l.cache.get,u=l.cache.set,d=h,h(f)},h=f=>{const g=s(f);if(g)return g;const v=Tw(f,l);return u(f,v),v};return d=p,(...f)=>d(Ow(...f))},Aw=[],et=a=>{const o=l=>l[a]||Aw;return o.isThemeGetter=!0,o},C0=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,T0=/^\((?:(\w[\w-]*):)?(.+)\)$/i,Mw=/^\d+\/\d+$/,Lw=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Rw=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Dw=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,zw=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,jw=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,gr=a=>Mw.test(a),xe=a=>!!a&&!Number.isNaN(Number(a)),ea=a=>!!a&&Number.isInteger(Number(a)),cu=a=>a.endsWith("%")&&xe(a.slice(0,-1)),wn=a=>Lw.test(a),Nw=()=>!0,Hw=a=>Rw.test(a)&&!Dw.test(a),O0=()=>!1,Uw=a=>zw.test(a),Bw=a=>jw.test(a),Pw=a=>!ne(a)&&!ae(a),qw=a=>Cr(a,M0,O0),ne=a=>C0.test(a),Sa=a=>Cr(a,L0,Hw),uu=a=>Cr(a,Vw,xe),qh=a=>Cr(a,E0,O0),Gw=a=>Cr(a,A0,Bw),ci=a=>Cr(a,R0,Uw),ae=a=>T0.test(a),Co=a=>Tr(a,L0),$w=a=>Tr(a,Yw),Gh=a=>Tr(a,E0),Qw=a=>Tr(a,M0),Zw=a=>Tr(a,A0),ui=a=>Tr(a,R0,!0),Cr=(a,o,l)=>{const s=C0.exec(a);return s?s[1]?o(s[1]):l(s[2]):!1},Tr=(a,o,l=!1)=>{const s=T0.exec(a);return s?s[1]?o(s[1]):l:!1},E0=a=>a==="position"||a==="percentage",A0=a=>a==="image"||a==="url",M0=a=>a==="length"||a==="size"||a==="bg-size",L0=a=>a==="length",Vw=a=>a==="number",Yw=a=>a==="family-name",R0=a=>a==="shadow",Kw=()=>{const a=et("color"),o=et("font"),l=et("text"),s=et("font-weight"),u=et("tracking"),d=et("leading"),p=et("breakpoint"),h=et("container"),f=et("spacing"),g=et("radius"),v=et("shadow"),y=et("inset-shadow"),C=et("text-shadow"),D=et("drop-shadow"),N=et("blur"),A=et("perspective"),L=et("aspect"),Y=et("ease"),I=et("animate"),F=()=>["auto","avoid","all","avoid-page","page","left","right","column"],pe=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],Z=()=>[...pe(),ae,ne],V=()=>["auto","hidden","clip","visible","scroll"],z=()=>["auto","contain","none"],G=()=>[ae,ne,f],J=()=>[gr,"full","auto",...G()],oe=()=>[ea,"none","subgrid",ae,ne],le=()=>["auto",{span:["full",ea,ae,ne]},ea,ae,ne],te=()=>[ea,"auto",ae,ne],be=()=>["auto","min","max","fr",ae,ne],fe=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],se=()=>["start","end","center","stretch","center-safe","end-safe"],T=()=>["auto",...G()],$=()=>[gr,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...G()],U=()=>[a,ae,ne],ue=()=>[...pe(),Gh,qh,{position:[ae,ne]}],ye=()=>["no-repeat",{repeat:["","x","y","space","round"]}],k=()=>["auto","cover","contain",Qw,qw,{size:[ae,ne]}],j=()=>[cu,Co,Sa],P=()=>["","none","full",g,ae,ne],Q=()=>["",xe,Co,Sa],W=()=>["solid","dashed","dotted","double"],me=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],ce=()=>[xe,cu,Gh,qh],tt=()=>["","none",N,ae,ne],He=()=>["none",xe,ae,ne],Yt=()=>["none",xe,ae,ne],On=()=>[xe,ae,ne],En=()=>[gr,"full",...G()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[wn],breakpoint:[wn],color:[Nw],container:[wn],"drop-shadow":[wn],ease:["in","out","in-out"],font:[Pw],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[wn],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[wn],shadow:[wn],spacing:["px",xe],text:[wn],"text-shadow":[wn],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",gr,ne,ae,L]}],container:["container"],columns:[{columns:[xe,ne,ae,h]}],"break-after":[{"break-after":F()}],"break-before":[{"break-before":F()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:Z()}],overflow:[{overflow:V()}],"overflow-x":[{"overflow-x":V()}],"overflow-y":[{"overflow-y":V()}],overscroll:[{overscroll:z()}],"overscroll-x":[{"overscroll-x":z()}],"overscroll-y":[{"overscroll-y":z()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:J()}],"inset-x":[{"inset-x":J()}],"inset-y":[{"inset-y":J()}],start:[{start:J()}],end:[{end:J()}],top:[{top:J()}],right:[{right:J()}],bottom:[{bottom:J()}],left:[{left:J()}],visibility:["visible","invisible","collapse"],z:[{z:[ea,"auto",ae,ne]}],basis:[{basis:[gr,"full","auto",h,...G()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[xe,gr,"auto","initial","none",ne]}],grow:[{grow:["",xe,ae,ne]}],shrink:[{shrink:["",xe,ae,ne]}],order:[{order:[ea,"first","last","none",ae,ne]}],"grid-cols":[{"grid-cols":oe()}],"col-start-end":[{col:le()}],"col-start":[{"col-start":te()}],"col-end":[{"col-end":te()}],"grid-rows":[{"grid-rows":oe()}],"row-start-end":[{row:le()}],"row-start":[{"row-start":te()}],"row-end":[{"row-end":te()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":be()}],"auto-rows":[{"auto-rows":be()}],gap:[{gap:G()}],"gap-x":[{"gap-x":G()}],"gap-y":[{"gap-y":G()}],"justify-content":[{justify:[...fe(),"normal"]}],"justify-items":[{"justify-items":[...se(),"normal"]}],"justify-self":[{"justify-self":["auto",...se()]}],"align-content":[{content:["normal",...fe()]}],"align-items":[{items:[...se(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...se(),{baseline:["","last"]}]}],"place-content":[{"place-content":fe()}],"place-items":[{"place-items":[...se(),"baseline"]}],"place-self":[{"place-self":["auto",...se()]}],p:[{p:G()}],px:[{px:G()}],py:[{py:G()}],ps:[{ps:G()}],pe:[{pe:G()}],pt:[{pt:G()}],pr:[{pr:G()}],pb:[{pb:G()}],pl:[{pl:G()}],m:[{m:T()}],mx:[{mx:T()}],my:[{my:T()}],ms:[{ms:T()}],me:[{me:T()}],mt:[{mt:T()}],mr:[{mr:T()}],mb:[{mb:T()}],ml:[{ml:T()}],"space-x":[{"space-x":G()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":G()}],"space-y-reverse":["space-y-reverse"],size:[{size:$()}],w:[{w:[h,"screen",...$()]}],"min-w":[{"min-w":[h,"screen","none",...$()]}],"max-w":[{"max-w":[h,"screen","none","prose",{screen:[p]},...$()]}],h:[{h:["screen","lh",...$()]}],"min-h":[{"min-h":["screen","lh","none",...$()]}],"max-h":[{"max-h":["screen","lh",...$()]}],"font-size":[{text:["base",l,Co,Sa]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[s,ae,uu]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",cu,ne]}],"font-family":[{font:[$w,ne,o]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[u,ae,ne]}],"line-clamp":[{"line-clamp":[xe,"none",ae,uu]}],leading:[{leading:[d,...G()]}],"list-image":[{"list-image":["none",ae,ne]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",ae,ne]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:U()}],"text-color":[{text:U()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...W(),"wavy"]}],"text-decoration-thickness":[{decoration:[xe,"from-font","auto",ae,Sa]}],"text-decoration-color":[{decoration:U()}],"underline-offset":[{"underline-offset":[xe,"auto",ae,ne]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:G()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",ae,ne]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",ae,ne]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:ue()}],"bg-repeat":[{bg:ye()}],"bg-size":[{bg:k()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},ea,ae,ne],radial:["",ae,ne],conic:[ea,ae,ne]},Zw,Gw]}],"bg-color":[{bg:U()}],"gradient-from-pos":[{from:j()}],"gradient-via-pos":[{via:j()}],"gradient-to-pos":[{to:j()}],"gradient-from":[{from:U()}],"gradient-via":[{via:U()}],"gradient-to":[{to:U()}],rounded:[{rounded:P()}],"rounded-s":[{"rounded-s":P()}],"rounded-e":[{"rounded-e":P()}],"rounded-t":[{"rounded-t":P()}],"rounded-r":[{"rounded-r":P()}],"rounded-b":[{"rounded-b":P()}],"rounded-l":[{"rounded-l":P()}],"rounded-ss":[{"rounded-ss":P()}],"rounded-se":[{"rounded-se":P()}],"rounded-ee":[{"rounded-ee":P()}],"rounded-es":[{"rounded-es":P()}],"rounded-tl":[{"rounded-tl":P()}],"rounded-tr":[{"rounded-tr":P()}],"rounded-br":[{"rounded-br":P()}],"rounded-bl":[{"rounded-bl":P()}],"border-w":[{border:Q()}],"border-w-x":[{"border-x":Q()}],"border-w-y":[{"border-y":Q()}],"border-w-s":[{"border-s":Q()}],"border-w-e":[{"border-e":Q()}],"border-w-t":[{"border-t":Q()}],"border-w-r":[{"border-r":Q()}],"border-w-b":[{"border-b":Q()}],"border-w-l":[{"border-l":Q()}],"divide-x":[{"divide-x":Q()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":Q()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...W(),"hidden","none"]}],"divide-style":[{divide:[...W(),"hidden","none"]}],"border-color":[{border:U()}],"border-color-x":[{"border-x":U()}],"border-color-y":[{"border-y":U()}],"border-color-s":[{"border-s":U()}],"border-color-e":[{"border-e":U()}],"border-color-t":[{"border-t":U()}],"border-color-r":[{"border-r":U()}],"border-color-b":[{"border-b":U()}],"border-color-l":[{"border-l":U()}],"divide-color":[{divide:U()}],"outline-style":[{outline:[...W(),"none","hidden"]}],"outline-offset":[{"outline-offset":[xe,ae,ne]}],"outline-w":[{outline:["",xe,Co,Sa]}],"outline-color":[{outline:U()}],shadow:[{shadow:["","none",v,ui,ci]}],"shadow-color":[{shadow:U()}],"inset-shadow":[{"inset-shadow":["none",y,ui,ci]}],"inset-shadow-color":[{"inset-shadow":U()}],"ring-w":[{ring:Q()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:U()}],"ring-offset-w":[{"ring-offset":[xe,Sa]}],"ring-offset-color":[{"ring-offset":U()}],"inset-ring-w":[{"inset-ring":Q()}],"inset-ring-color":[{"inset-ring":U()}],"text-shadow":[{"text-shadow":["none",C,ui,ci]}],"text-shadow-color":[{"text-shadow":U()}],opacity:[{opacity:[xe,ae,ne]}],"mix-blend":[{"mix-blend":[...me(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":me()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[xe]}],"mask-image-linear-from-pos":[{"mask-linear-from":ce()}],"mask-image-linear-to-pos":[{"mask-linear-to":ce()}],"mask-image-linear-from-color":[{"mask-linear-from":U()}],"mask-image-linear-to-color":[{"mask-linear-to":U()}],"mask-image-t-from-pos":[{"mask-t-from":ce()}],"mask-image-t-to-pos":[{"mask-t-to":ce()}],"mask-image-t-from-color":[{"mask-t-from":U()}],"mask-image-t-to-color":[{"mask-t-to":U()}],"mask-image-r-from-pos":[{"mask-r-from":ce()}],"mask-image-r-to-pos":[{"mask-r-to":ce()}],"mask-image-r-from-color":[{"mask-r-from":U()}],"mask-image-r-to-color":[{"mask-r-to":U()}],"mask-image-b-from-pos":[{"mask-b-from":ce()}],"mask-image-b-to-pos":[{"mask-b-to":ce()}],"mask-image-b-from-color":[{"mask-b-from":U()}],"mask-image-b-to-color":[{"mask-b-to":U()}],"mask-image-l-from-pos":[{"mask-l-from":ce()}],"mask-image-l-to-pos":[{"mask-l-to":ce()}],"mask-image-l-from-color":[{"mask-l-from":U()}],"mask-image-l-to-color":[{"mask-l-to":U()}],"mask-image-x-from-pos":[{"mask-x-from":ce()}],"mask-image-x-to-pos":[{"mask-x-to":ce()}],"mask-image-x-from-color":[{"mask-x-from":U()}],"mask-image-x-to-color":[{"mask-x-to":U()}],"mask-image-y-from-pos":[{"mask-y-from":ce()}],"mask-image-y-to-pos":[{"mask-y-to":ce()}],"mask-image-y-from-color":[{"mask-y-from":U()}],"mask-image-y-to-color":[{"mask-y-to":U()}],"mask-image-radial":[{"mask-radial":[ae,ne]}],"mask-image-radial-from-pos":[{"mask-radial-from":ce()}],"mask-image-radial-to-pos":[{"mask-radial-to":ce()}],"mask-image-radial-from-color":[{"mask-radial-from":U()}],"mask-image-radial-to-color":[{"mask-radial-to":U()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":pe()}],"mask-image-conic-pos":[{"mask-conic":[xe]}],"mask-image-conic-from-pos":[{"mask-conic-from":ce()}],"mask-image-conic-to-pos":[{"mask-conic-to":ce()}],"mask-image-conic-from-color":[{"mask-conic-from":U()}],"mask-image-conic-to-color":[{"mask-conic-to":U()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:ue()}],"mask-repeat":[{mask:ye()}],"mask-size":[{mask:k()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",ae,ne]}],filter:[{filter:["","none",ae,ne]}],blur:[{blur:tt()}],brightness:[{brightness:[xe,ae,ne]}],contrast:[{contrast:[xe,ae,ne]}],"drop-shadow":[{"drop-shadow":["","none",D,ui,ci]}],"drop-shadow-color":[{"drop-shadow":U()}],grayscale:[{grayscale:["",xe,ae,ne]}],"hue-rotate":[{"hue-rotate":[xe,ae,ne]}],invert:[{invert:["",xe,ae,ne]}],saturate:[{saturate:[xe,ae,ne]}],sepia:[{sepia:["",xe,ae,ne]}],"backdrop-filter":[{"backdrop-filter":["","none",ae,ne]}],"backdrop-blur":[{"backdrop-blur":tt()}],"backdrop-brightness":[{"backdrop-brightness":[xe,ae,ne]}],"backdrop-contrast":[{"backdrop-contrast":[xe,ae,ne]}],"backdrop-grayscale":[{"backdrop-grayscale":["",xe,ae,ne]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[xe,ae,ne]}],"backdrop-invert":[{"backdrop-invert":["",xe,ae,ne]}],"backdrop-opacity":[{"backdrop-opacity":[xe,ae,ne]}],"backdrop-saturate":[{"backdrop-saturate":[xe,ae,ne]}],"backdrop-sepia":[{"backdrop-sepia":["",xe,ae,ne]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":G()}],"border-spacing-x":[{"border-spacing-x":G()}],"border-spacing-y":[{"border-spacing-y":G()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",ae,ne]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[xe,"initial",ae,ne]}],ease:[{ease:["linear","initial",Y,ae,ne]}],delay:[{delay:[xe,ae,ne]}],animate:[{animate:["none",I,ae,ne]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[A,ae,ne]}],"perspective-origin":[{"perspective-origin":Z()}],rotate:[{rotate:He()}],"rotate-x":[{"rotate-x":He()}],"rotate-y":[{"rotate-y":He()}],"rotate-z":[{"rotate-z":He()}],scale:[{scale:Yt()}],"scale-x":[{"scale-x":Yt()}],"scale-y":[{"scale-y":Yt()}],"scale-z":[{"scale-z":Yt()}],"scale-3d":["scale-3d"],skew:[{skew:On()}],"skew-x":[{"skew-x":On()}],"skew-y":[{"skew-y":On()}],transform:[{transform:[ae,ne,"","none","gpu","cpu"]}],"transform-origin":[{origin:Z()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:En()}],"translate-x":[{"translate-x":En()}],"translate-y":[{"translate-y":En()}],"translate-z":[{"translate-z":En()}],"translate-none":["translate-none"],accent:[{accent:U()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:U()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",ae,ne]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":G()}],"scroll-mx":[{"scroll-mx":G()}],"scroll-my":[{"scroll-my":G()}],"scroll-ms":[{"scroll-ms":G()}],"scroll-me":[{"scroll-me":G()}],"scroll-mt":[{"scroll-mt":G()}],"scroll-mr":[{"scroll-mr":G()}],"scroll-mb":[{"scroll-mb":G()}],"scroll-ml":[{"scroll-ml":G()}],"scroll-p":[{"scroll-p":G()}],"scroll-px":[{"scroll-px":G()}],"scroll-py":[{"scroll-py":G()}],"scroll-ps":[{"scroll-ps":G()}],"scroll-pe":[{"scroll-pe":G()}],"scroll-pt":[{"scroll-pt":G()}],"scroll-pr":[{"scroll-pr":G()}],"scroll-pb":[{"scroll-pb":G()}],"scroll-pl":[{"scroll-pl":G()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",ae,ne]}],fill:[{fill:["none",...U()]}],"stroke-w":[{stroke:[xe,Co,Sa,uu]}],stroke:[{stroke:["none",...U()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},Iw=Ew(Kw);function Po(...a){return Iw(x0(a))}function D0({className:a,...o}){return K.jsx("div",{"code-path":"src/components/ui/card.tsx:7:5","data-slot":"card",className:Po("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",a),...o})}function z0({className:a,...o}){return K.jsx("div",{"code-path":"src/components/ui/card.tsx:20:5","data-slot":"card-header",className:Po("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",a),...o})}function j0({className:a,...o}){return K.jsx("div",{"code-path":"src/components/ui/card.tsx:33:5","data-slot":"card-title",className:Po("leading-none font-semibold",a),...o})}function N0({className:a,...o}){return K.jsx("div",{"code-path":"src/components/ui/card.tsx:66:5","data-slot":"card-content",className:Po("px-6",a),...o})}function $h(a,o){if(typeof a=="function")return a(o);a!=null&&(a.current=o)}function Xw(...a){return o=>{let l=!1;const s=a.map(u=>{const d=$h(u,o);return!l&&typeof d=="function"&&(l=!0),d});if(l)return()=>{for(let u=0;u<s.length;u++){const d=s[u];typeof d=="function"?d():$h(a[u],null)}}}}var Fw=Symbol.for("react.lazy"),xi=Vh[" use ".trim().toString()];function Jw(a){return typeof a=="object"&&a!==null&&"then"in a}function H0(a){return a!=null&&typeof a=="object"&&"$$typeof"in a&&a.$$typeof===Fw&&"_payload"in a&&Jw(a._payload)}function Ww(a){const o=t_(a),l=_.forwardRef((s,u)=>{let{children:d,...p}=s;H0(d)&&typeof xi=="function"&&(d=xi(d._payload));const h=_.Children.toArray(d),f=h.find(a_);if(f){const g=f.props.children,v=h.map(y=>y===f?_.Children.count(g)>1?_.Children.only(null):_.isValidElement(g)?g.props.children:null:y);return K.jsx(o,{...p,ref:u,children:_.isValidElement(g)?_.cloneElement(g,void 0,v):null})}return K.jsx(o,{...p,ref:u,children:d})});return l.displayName=`${a}.Slot`,l}var e_=Ww("Slot");function t_(a){const o=_.forwardRef((l,s)=>{let{children:u,...d}=l;if(H0(u)&&typeof xi=="function"&&(u=xi(u._payload)),_.isValidElement(u)){const p=o_(u),h=r_(d,u.props);return u.type!==_.Fragment&&(h.ref=s?Xw(s,p):p),_.cloneElement(u,h)}return _.Children.count(u)>1?_.Children.only(null):null});return o.displayName=`${a}.SlotClone`,o}var n_=Symbol("radix.slottable");function a_(a){return _.isValidElement(a)&&typeof a.type=="function"&&"__radixId"in a.type&&a.type.__radixId===n_}function r_(a,o){const l={...o};for(const s in o){const u=a[s],d=o[s];/^on[A-Z]/.test(s)?u&&d?l[s]=(...h)=>{const f=d(...h);return u(...h),f}:u&&(l[s]=u):s==="style"?l[s]={...u,...d}:s==="className"&&(l[s]=[u,d].filter(Boolean).join(" "))}return{...a,...l}}function o_(a){let o=Object.getOwnPropertyDescriptor(a.props,"ref")?.get,l=o&&"isReactWarning"in o&&o.isReactWarning;return l?a.ref:(o=Object.getOwnPropertyDescriptor(a,"ref")?.get,l=o&&"isReactWarning"in o&&o.isReactWarning,l?a.props.ref:a.props.ref||a.ref)}const Qh=a=>typeof a=="boolean"?`${a}`:a===0?"0":a,Zh=x0,l_=(a,o)=>l=>{var s;if(o?.variants==null)return Zh(a,l?.class,l?.className);const{variants:u,defaultVariants:d}=o,p=Object.keys(u).map(g=>{const v=l?.[g],y=d?.[g];if(v===null)return null;const C=Qh(v)||Qh(y);return u[g][C]}),h=l&&Object.entries(l).reduce((g,v)=>{let[y,C]=v;return C===void 0||(g[y]=C),g},{}),f=o==null||(s=o.compoundVariants)===null||s===void 0?void 0:s.reduce((g,v)=>{let{class:y,className:C,...D}=v;return Object.entries(D).every(N=>{let[A,L]=N;return Array.isArray(L)?L.includes({...d,...h}[A]):{...d,...h}[A]===L})?[...g,y,C]:g},[]);return Zh(a,p,f,l?.class,l?.className)},i_=l_("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9","icon-sm":"size-8","icon-lg":"size-10"}},defaultVariants:{variant:"default",size:"default"}});function U0({className:a,variant:o="default",size:l="default",asChild:s=!1,...u}){const d=s?e_:"button";return K.jsx(d,{"code-path":"src/components/ui/button.tsx:52:5","data-slot":"button","data-variant":o,"data-size":l,className:Po(i_({variant:o,size:l,className:a})),...u})}function s_(){const a="https://auth.kimi.com",o="1a0acf59-c082-8794-8000-0000a7b1e0e1",l=`${window.location.origin}/api/oauth/callback`,s=btoa(l),u=new URL(`${a}/api/oauth/authorize`);return u.searchParams.set("client_id",o),u.searchParams.set("redirect_uri",l),u.searchParams.set("response_type","code"),u.searchParams.set("scope","profile"),u.searchParams.set("state",s),u.toString()}function c_(){return K.jsx("div",{"code-path":"src/pages/Login.tsx:22:5",className:"min-h-screen flex items-center justify-center",children:K.jsxs(D0,{"code-path":"src/pages/Login.tsx:23:7",className:"w-full max-w-sm",children:[K.jsx(z0,{"code-path":"src/pages/Login.tsx:24:9",className:"text-center",children:K.jsx(j0,{"code-path":"src/pages/Login.tsx:25:11",children:"Welcome"})}),K.jsx(N0,{"code-path":"src/pages/Login.tsx:27:9",children:K.jsx(U0,{"code-path":"src/pages/Login.tsx:28:11",className:"w-full",size:"lg",onClick:()=>{window.location.href=s_()},children:"Sign in with Kimi"})})]})})}function u_(){return K.jsx("div",{"code-path":"src/pages/NotFound.tsx:7:5",className:"min-h-screen flex items-center justify-center",children:K.jsxs(D0,{"code-path":"src/pages/NotFound.tsx:8:7",className:"w-full max-w-sm text-center",children:[K.jsx(z0,{"code-path":"src/pages/NotFound.tsx:9:9",children:K.jsx(j0,{"code-path":"src/pages/NotFound.tsx:10:11",className:"text-4xl font-bold",children:"404"})}),K.jsxs(N0,{"code-path":"src/pages/NotFound.tsx:12:9",className:"space-y-4",children:[K.jsx("p",{"code-path":"src/pages/NotFound.tsx:13:11",className:"text-muted-foreground",children:"Page not found"}),K.jsx(U0,{"code-path":"src/pages/NotFound.tsx:14:11",asChild:!0,className:"w-full",children:K.jsx(ju,{"code-path":"src/pages/NotFound.tsx:15:13",to:"/",children:"Back to Home"})})]})]})})}function d_(){return K.jsxs(x1,{"code-path":"src/App.tsx:9:5",children:[K.jsx(Wt,{"code-path":"src/App.tsx:10:7",path:"/",element:K.jsx(iw,{"code-path":"src/App.tsx:10:32"})}),K.jsx(Wt,{"code-path":"src/App.tsx:11:7",path:"/xbgst",element:K.jsx(hr,{"code-path":"src/App.tsx:11:37",page:"xbgst"})}),K.jsx(Wt,{"code-path":"src/App.tsx:12:7",path:"/exa",element:K.jsx(hr,{"code-path":"src/App.tsx:12:35",page:"exa"})}),K.jsx(Wt,{"code-path":"src/App.tsx:13:7",path:"/bloat",element:K.jsx(hr,{"code-path":"src/App.tsx:13:37",page:"bloat"})}),K.jsx(Wt,{"code-path":"src/App.tsx:14:7",path:"/speedrun",element:K.jsx(hr,{"code-path":"src/App.tsx:14:40",page:"speedrun"})}),K.jsx(Wt,{"code-path":"src/App.tsx:15:7",path:"/omegag",element:K.jsx(hr,{"code-path":"src/App.tsx:15:38",page:"omegag"})}),K.jsx(Wt,{"code-path":"src/App.tsx:16:7",path:"/omarchy-usage",element:K.jsx(hr,{"code-path":"src/App.tsx:16:45",page:"omarchy"})}),K.jsx(Wt,{"code-path":"src/App.tsx:17:7",path:"/login",element:K.jsx(c_,{"code-path":"src/App.tsx:17:37"})}),K.jsx(Wt,{"code-path":"src/App.tsx:18:7",path:"*",element:K.jsx(u_,{"code-path":"src/App.tsx:18:32"})})]})}xy.createRoot(document.getElementById("root")).render(K.jsx(_.StrictMode,{"code-path":"src/main.tsx:10:3",children:K.jsx(Q1,{"code-path":"src/main.tsx:11:5",children:K.jsx(Nk,{"code-path":"src/main.tsx:12:7",children:K.jsx(d_,{"code-path":"src/main.tsx:13:9"})})})}));
