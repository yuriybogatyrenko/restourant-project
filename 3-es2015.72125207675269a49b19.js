(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{Kh3p:function(t,e,i){"use strict";i.d(e,"a",function(){return a});var s=i("mrSG"),n=i("wnxH"),r=i("8Y7J");let a=(()=>{let t=class extends n.a{constructor(){super()}};return t.ngInjectableDef=r.Sb({factory:function(){return new t},token:t,providedIn:"root"}),t=s.__decorate([Object(n.c)({name:"admin-restaurant-tables",idKey:"uuid"})],t)})()},KyE0:function(t,e,i){"use strict";i.d(e,"a",function(){return a});var s=i("Kh3p"),n=i("qBPi"),r=i("8Y7J");let a=(()=>{class t{constructor(t,e){this.adminRestaurantTablesStore=t,this.adminRestaurantTablesDataService=e}get(){}add(){}}return t.ngInjectableDef=r.Sb({factory:function(){return new t(r.Tb(s.a),r.Tb(n.a))},token:t,providedIn:"root"}),t})()},N7S6:function(t,e,i){"use strict";i.d(e,"a",function(){return a});var s=i("wnxH"),n=i("Kh3p"),r=i("8Y7J");let a=(()=>{class t extends s.b{constructor(t){super(t),this.store=t}}return t.ngInjectableDef=r.Sb({factory:function(){return new t(r.Tb(n.a))},token:t,providedIn:"root"}),t})()},nyoV:function(t,e,i){"use strict";i("qBPi"),i("N7S6"),i("Kh3p"),i("KyE0")},qBPi:function(t,e,i){"use strict";i.d(e,"a",function(){return r});var s=i("8Y7J"),n=i("IheW");let r=(()=>{class t{constructor(t){this.http=t}}return t.ngInjectableDef=s.Sb({factory:function(){return new t(s.Tb(n.c))},token:t,providedIn:"root"}),t})()},wnxH:function(t,e,i){"use strict";var s=i("mrSG"),n=i("XNiG"),r=i("2Vo4"),a=i("LRne"),c=i("jtHE");i("HDdC"),i("Cfvw"),i("itXk"),i("VRyK"),i("EY2u"),i("vkgz");var o=i("lJxs"),u=i("/uUt"),h=i("eIep"),l=i("pLZG");function d(t){return Array.isArray(t)}function f(t){return!!d(t)&&0===t.length}function p(t,e){return t.hasOwnProperty(e)}function y(t){return t.hasOwnProperty("active")}function g(t){return d(t)}function b({active:t,ids:e,entities:i}){return g(t)?function(t,e){const i=t.filter(t=>e.indexOf(t)>-1);return i.length===t.length?t:i}(t,e):!1===p(i,t)?null:t}function v(t,e){let i={};for(const s of Object.keys(t))i[s]=e(t[s]);return i}i("7o/Q"),i("D0XW"),i("WMd4"),i("IzEk"),i("Kj3r"),i("Zy1z"),i("3UWI"),i.d(e,"a",function(){return et}),i.d(e,"b",function(){return ut}),i.d(e,"c",function(){return k});const O={type:null,entityIds:null,skip:!1};let j=!1;function _(t,e){A(t,e),j=!0}function A(t,e){!1===j&&(O.type=t,O.entityIds=e)}const m=new n.a,w=new r.a(!1),S={activeTransactions:0,batchTransaction:null};function E(){return S.activeTransactions>0}function C(){return function(t,e,i){const s=i.value;return i.value=function(...t){return function(t,e){E()||(S.batchTransaction=new n.a),S.activeTransactions++,w.next(!0);try{return t.apply(e)}finally{_("@Transaction"),0==--S.activeTransactions&&(S.batchTransaction.next(!0),S.batchTransaction.complete(),w.next(!1),m.next(!0))}}(()=>s.apply(this,t),this)},i}}function I(t){Object.freeze(t);const e="function"==typeof t,i=Object.prototype.hasOwnProperty;return Object.getOwnPropertyNames(t).forEach(function(s){!i.call(t,s)||e&&("caller"===s||"callee"===s||"arguments"===s)||null===t[s]||"object"!=typeof t[s]&&"function"!=typeof t[s]||Object.isFrozen(t[s])||I(t[s])}),t}const U="akitaConfig";function k(t){return function(e){e[U]={idKey:"id"};for(let i=0,s=Object.keys(t);i<s.length;i++){const n=s[i];"name"===n?e[U].storeName=t[n]:e[U][n]=t[n]}}}let x={resettable:!1};function K(t){return null!=t&&"false"!==`${t}`}function P(t){return K(t)&&"Object"===t.constructor.name}function N(t){return"function"==typeof t}const V=new n.a,F=new c.a(50,5e3),R=new n.a;let B=!0;function H(){return B}const D="undefined"!=typeof window,$="undefined"!=typeof global&&void 0!==global.__runtimeVersion,z=!D&&!$,L={},M={};D&&H()&&(window.$$stores=L,window.$$queries=M);class J{constructor(t,e={}){this.options=e,this.inTransaction=!1,this.cache={active:new r.a(!1),ttl:null},this.onInit(t)}setLoading(t=!1){t!==this._value().loading&&(H()&&A("Set Loading"),this._setState(e=>Object.assign({},e,{loading:t})))}setHasCache(t,e={restartTTL:!1}){if(t!==this.cache.active.value&&this.cache.active.next(t),e.restartTTL){const t=this.cacheConfig&&this.cacheConfig.ttl;t&&(null!==this.cache.ttl&&clearTimeout(this.cache.ttl),this.cache.ttl=setTimeout(()=>this.setHasCache(!1),t))}}setError(t){t!==this._value().error&&(H()&&A("Set Error"),this._setState(e=>Object.assign({},e,{error:t})))}_select(t){return this.store.asObservable().pipe(Object(o.a)(t),Object(u.a)())}_value(){return this.storeValue}_cache(){return this.cache.active}get config(){return this.constructor[U]||{}}get storeName(){return this.config.storeName||this.options.storeName||this.options.name}get deepFreeze(){return this.config.deepFreezeFn||this.options.deepFreezeFn||I}get cacheConfig(){return this.config.cache||this.options.cache}get resettable(){return this.config.resettable||this.options.resettable}_setState(t,e=!0){this.storeValue=B?this.deepFreeze(t(this._value())):t(this._value()),this.store?E()?this.handleTransaction():this.dispatch(this.storeValue,e):this.store=new r.a(this.storeValue)}reset(){this.isResettable()?(H()&&A("Reset"),this._setState(()=>Object.assign({},this._initialState)),this.setHasCache(!1)):H()&&console.warn("You need to enable the reset functionality")}update(t){H()&&A("Update"),this._setState(e=>{const i=N(t)?t(e):t,s=this.akitaPreUpdate(e,Object.assign({},e,i));return P(e)?s:new e.constructor(s)})}updateStoreConfig(t){this.options=Object.assign({},this.options,t)}akitaPreUpdate(t,e){return e}ngOnDestroy(){this.destroy()}destroy(){z||window.hmrEnabled||this!==L[this.storeName]||(delete L[this.storeName],V.next(this.storeName),this.setHasCache(!1),this.cache.active.complete())}onInit(t){L[this.storeName]=this,this._setState(()=>t),F.next(this.storeName),this.isResettable()&&(this._initialState=t),H()&&(this.storeName||console.error(`@StoreConfig({ name }) is missing in ${this.constructor.name}`))}dispatch(t,e=!0){this.store.next(t),e&&(R.next(this.storeName),j=!1)}watchTransaction(){(S.batchTransaction?S.batchTransaction.asObservable():Object(a.a)(!0)).subscribe(()=>{this.inTransaction=!1,this.dispatch(this._value())})}isResettable(){return!1!==this.resettable&&(this.resettable||x.resettable)}handleTransaction(){this.inTransaction||(this.watchTransaction(),this.inTransaction=!0)}}function Y(t){return null==t}function q(t){return Y(t)?[]:Array.isArray(t)?t:[t]}const G=()=>({entities:{},ids:[],loading:!0,error:null});function W(t){return!1===Y(t)}function Q(t){return void 0===t}const X=function(){var t={Set:0,Add:1,Update:2,Remove:3};return t[t.Set]="Set",t[t.Add]="Add",t[t.Update]="Update",t[t.Remove]="Remove",t}(),Z="id";var tt;let et=(()=>{class t extends J{constructor(t={},e={}){super(Object.assign({},G(),t),e),this.options=e,this.entityActions=new n.a}get selectEntityAction$(){return this.entityActions.asObservable()}get idKey(){return this.config.idKey||this.options.idKey||Z}set(e){if(Y(e))return;H()&&A("Set Entity");const i=this.akitaPreAddEntity===t.prototype.akitaPreAddEntity;this._setState(t=>(function({state:t,entities:e,idKey:i,preAddEntity:s,isNativePreAdd:n}){let r,a;if(d(e)){const t=function(t,e,i){const s={entities:{},ids:[]};for(const n of t){const t=i(n);s.entities[t[e]]=t,s.ids.push(t[e])}return s}(e,i,s);r=t.entities,a=t.ids}else e.entities&&e.ids?(r=n?e.entities:v(e.entities,s),a=e.ids):(r=n?e:v(e,s),a=Object.keys(r).map(t=>isNaN(t)?t:Number(t)));const c=Object.assign({},t,{entities:r,ids:a,loading:!1});return y(t)&&(c.active=b(c)),c})({state:t,entities:e,idKey:this.idKey,preAddEntity:this.akitaPreAddEntity,isNativePreAdd:i})),this.setHasCache(!0,{restartTTL:!0}),this.hasInitialUIState()&&this.handleUICreation(),this.entityActions.next({type:X.Set,ids:this.ids})}add(t,e={loading:!1}){const i=q(t);if(f(i))return;const s=function({state:t,entities:e,idKey:i,options:s={},preAddEntity:n}){let r={},a=[],c=!1;for(const o of e)if(!1===p(t.entities,o[i])){const t=n(o),e=t[i];r[e]=t,s.prepend?a.unshift(e):a.push(e),c=!0}return c?{newState:Object.assign({},t,{entities:Object.assign({},t.entities,r),ids:s.prepend?[...a,...t.ids]:[...t.ids,...a]}),newIds:a}:null}({state:this._value(),preAddEntity:this.akitaPreAddEntity,entities:i,idKey:this.idKey,options:e});s&&(H()&&A("Add Entity"),s.newState.loading=e.loading,this._setState(()=>s.newState),this.hasInitialUIState()&&this.handleUICreation(!0),this.entityActions.next({type:X.Add,ids:s.newIds}))}update(t,e){if(Q(e))return void super.update(t);let i=[];f(i=N(t)?this.ids.filter(e=>t(this.entities[e])):Y(t)?this.ids:q(t))||(H()&&A("Update Entity",i),this._setState(t=>(function({state:t,ids:e,idKey:i,newStateOrFn:n,preUpdateEntity:r}){const a={};let c,o=!1;for(const s of e){if(!1===p(t.entities,s))continue;const e=t.entities[s],u=N(n)?n(e):n,h=u.hasOwnProperty(i)&&u[i]!==e[i];let l;c=s,h&&(o=!0,c=u[i]);const d=Object.assign({},e,u);l=P(e)?d:P(u)?new e.constructor(d):new u.constructor(d),a[c]=r(e,l)}let u=t.ids,h=t.entities;if(o){const[i]=e,n=t.entities,r=i;h=Object(s.__rest)(n,["symbol"==typeof r?r:r+""]),u=t.ids.map(t=>t===i?c:t)}return Object.assign({},t,{entities:Object.assign({},h,a),ids:u})})({idKey:this.idKey,ids:i,preUpdateEntity:this.akitaPreUpdateEntity,state:t,newStateOrFn:e})),this.entityActions.next({type:X.Update,ids:i}))}upsert(t,e,i={}){const s=q(t),n=t=>e=>p(this.entities,e)===t,r=N(i.baseClass),a=s.filter(n(!0)),c=s.filter(n(!1)).map(t=>{let s=N(e)?e({}):e;const n=Object.assign({},s,{[this.idKey]:t});return r?new i.baseClass(n):n});this.update(a,e),this.add(c),H()&&_("Upsert Entity")}upsertMany(t,e={}){const i=[],s=[],n={};for(const r of t){const t=this.akitaPreCheckEntity(r),a=t[this.idKey];if(p(this.entities,a)){const i=this._value().entities[a],r=Object.assign({},this._value().entities[a],t),c=e.baseClass?new e.baseClass(r):r,o=this.akitaPreUpdateEntity(i,c),u=o[this.idKey];n[u]=o,s.push(u)}else{const s=e.baseClass?new e.baseClass(t):t,r=this.akitaPreAddEntity(s),a=r[this.idKey];i.push(a),n[a]=r}}H()&&_("Upsert Many"),this._setState(t=>Object.assign({},t,{ids:i.length?[...t.ids,...i]:t.ids,entities:Object.assign({},t.entities,n),loading:!!e.loading})),s.length&&this.entityActions.next({type:X.Update,ids:s}),i.length&&this.entityActions.next({type:X.Add,ids:i}),i.length&&this.hasUIStore()&&this.handleUICreation(!0)}replace(t,e){const i=q(t);if(f(i))return;let s={};for(const n of i)e[this.idKey]=n,s[n]=e;H()&&A("Replace Entity",t),this._setState(t=>Object.assign({},t,{entities:Object.assign({},t.entities,s)}))}move(t,e){const i=this.ids.slice();i.splice(e<0?i.length+e:e,0,i.splice(t,1)[0]),H()&&A("Move Entity"),this._setState(t=>Object.assign({},t,{entities:Object.assign({},t.entities),ids:i}))}remove(t){if(f(this.ids))return;const e=W(t);let i=[];f(i=N(t)?this.ids.filter(e=>t(this.entities[e])):e?q(t):null)||(H()&&A("Remove Entity",i),this._setState(t=>(function({state:t,ids:e}){if(Y(e))return function(t){return Object.assign({},t,{entities:{},ids:[],active:g(t.active)?[]:null})}(t);const i=t.entities;let s={};for(const r of t.ids)!1===e.includes(r)&&(s[r]=i[r]);const n=Object.assign({},t,{entities:s,ids:t.ids.filter(t=>!1===e.includes(t))});return y(t)&&(n.active=b(n)),n})({state:t,ids:i})),null===i&&this.setHasCache(!1),this.handleUIRemove(i),this.entityActions.next({type:X.Remove,ids:i}))}updateActive(t){const e=q(this.active);H()&&A("Update Active",e),this.update(e,t)}setActive(t){const e=function(t,e,i){let s;if(d(t))s=t;else if(function(e){const i=typeof t;return null!=t&&("object"==i||"function"==i)}()){if(Y(i))return;t=Object.assign({wrap:!0},t);const n=e.indexOf(i);if(t.prev){const i=0===n;if(i&&!t.wrap)return;s=i?e[e.length-1]:e[n-1]}else if(t.next){const i=e.length===n+1;if(i&&!t.wrap)return;s=i?e[0]:e[n+1]}}else{if(t===i)return;s=t}return s}(t,this.ids,this.active);void 0!==e&&(H()&&A("Set Active",e),this._setActive(e))}addActive(t){const e=q(t);f(e)||e.every(t=>this.active.indexOf(t)>-1)||(H()&&A("Add Active",t),this._setState(t=>{const i=Array.from(new Set([...t.active,...e]));return Object.assign({},t,{active:i})}))}removeActive(t){const e=q(t);f(e)||e.some(t=>this.active.indexOf(t)>-1)&&(H()&&A("Remove Active",t),this._setState(t=>Object.assign({},t,{active:Array.isArray(t.active)?t.active.filter(t=>-1===e.indexOf(t)):null})))}toggleActive(t){const e=q(t),i=t=>e=>this.active.includes(e)===t,s=e.filter(i(!0)),n=e.filter(i(!1));this.removeActive(s),this.addActive(n),H()&&_("Toggle Active")}createUIStore(t={},e={}){return this.ui=new it(t,Object.assign({},{name:`UI/${this.storeName}`,idKey:this.idKey},e)),this.ui}destroy(){super.destroy(),this.ui instanceof t&&this.ui.destroy(),this.entityActions.complete()}akitaPreUpdateEntity(t,e){return e}akitaPreAddEntity(t){return t}akitaPreCheckEntity(t){return t}get ids(){return this._value().ids}get entities(){return this._value().entities}get active(){return this._value().active}_setActive(t){this._setState(e=>Object.assign({},e,{active:t}))}handleUICreation(t=!1){const e=this.ids,i=N(this.ui._akitaCreateEntityFn);let s;const n=t=>{const e=this.entities[t],s=i?this.ui._akitaCreateEntityFn(e):this.ui._akitaCreateEntityFn;return Object.assign({[this.idKey]:e[this.idKey]},s)};s=t?this.ids.filter(t=>Q(this.ui.entities[t])).map(n):e.map(n),t?this.ui.add(s):this.ui.set(s)}hasInitialUIState(){return this.hasUIStore()&&!1===Q(this.ui._akitaCreateEntityFn)}handleUIRemove(t){this.hasUIStore()&&this.ui.remove(t)}hasUIStore(){return this.ui instanceof it}}return Object(s.__decorate)([C(),Object(s.__metadata)("design:type",Function),Object(s.__metadata)("design:paramtypes",[Object,Object,Object]),Object(s.__metadata)("design:returntype",void 0)],t.prototype,"upsert",null),Object(s.__decorate)([C(),Object(s.__metadata)("design:type",Function),Object(s.__metadata)("design:paramtypes",["function"==typeof(tt="undefined"!=typeof T&&T)?tt:Object]),Object(s.__metadata)("design:returntype",void 0)],t.prototype,"toggleActive",null),t})();class it extends et{constructor(t={},e={}){super(t,e)}setInitialEntityState(t){this._akitaCreateEntityFn=t}}const st="akitaQueryConfig";function nt(t){return"string"==typeof t}class rt{constructor(t){this.store=t,this.__store__=t,H()&&(M[t.storeName]=this)}select(t){let e;if(N(t))e=t;else if(nt(t))e=e=>e[t];else{if(Array.isArray(t))return this.store._select(t=>t).pipe(Object(u.a)((i=t,function(t,e){const s=N(i[0]);return!1===i.some(i=>s?i(t)!==i(e):t[i]!==e[i])})),Object(o.a)(e=>N(t[0])?t.map(t=>t(e)):t.reduce((t,i)=>(t[i]=e[i],t),{})));e=t=>t}var i;return this.store._select(e)}selectLoading(){return this.select(t=>t.loading)}selectError(){return this.select(t=>t.error)}getValue(){return this.store._value()}selectHasCache(){return this.store._cache().asObservable()}getHasCache(){return this.store._cache().value}get config(){return this.constructor[st]}}const at={ASC:"asc",DESC:"desc"};function ct(t,e){return function(i){const s=i[t];if(!Q(s))return e?nt(e)?s[e]:e(s):s}}function ot(t,e){return e.some(e=>void 0===t.find(t=>t===e))}class ut extends rt{constructor(t,e={}){super(t),this.options=e,this.__store__=t}selectAll(t={asObject:!1}){return this.select(t=>t.entities).pipe(Object(o.a)(()=>this.getAll(t)))}getAll(t={asObject:!1,filterBy:void 0,limitTo:void 0}){return t.asObject?function(t,e){const i={},{filterBy:s,limitTo:n}=e,{ids:r,entities:a}=t;if(!s&&!n)return a;const c=!1===Y(n);if(s&&c){let t=0;for(let e=0,c=r.length;e<c&&t!==n;e++){const n=r[e],c=a[n];q(s).every(t=>t(c,e))&&(i[n]=c,t++)}}else{const t=Math.min(n||r.length,r.length);for(let e=0;e<t;e++){const t=r[e],n=a[t];s?q(s).every(t=>t(n,e))&&(i[t]=n):i[t]=n}}return i}(this.getValue(),t):(function(t,e){t.sortBy=t.sortBy||e&&e.sortBy,t.sortByOrder=t.sortByOrder||e&&e.sortByOrder}(t,this.config||this.options),function(t,e){let i=[];const{ids:s,entities:n}=t,{filterBy:r,limitTo:a,sortBy:c,sortByOrder:o}=e;for(let h=0;h<s.length;h++){const t=n[s[h]];r?q(r).every(e=>e(t,h))&&i.push(t):i.push(t)}if(c){let e=N(c)?c:function(t,e=at.ASC){return function(i,s){if(!i.hasOwnProperty(t)||!s.hasOwnProperty(t))return 0;const n="string"==typeof i[t]?i[t].toUpperCase():i[t],r="string"==typeof s[t]?s[t].toUpperCase():s[t];let a=0;return n>r?a=1:n<r&&(a=-1),e==at.DESC?-1*a:a}}(c,o);i=i.sort((i,s)=>e(i,s,t))}const u=Math.min(a||i.length,i.length);return u===i.length?i:i.slice(0,u)}(this.getValue(),t))}selectMany(t,e){return t&&t.length?this.select(t=>t.entities).pipe(Object(o.a)(i=>(function(s,n){return t.reduce((t,s,n,r)=>{const a=(t=>ct(t,e)(i))(s);return void 0!==a&&t.push(a),t},[])})()),Object(u.a)((t,e)=>t===e||!1!==d(t)&&!1!==d(e)&&(!(!f(t)||!f(e))||!ot(e,t)&&!1===ot(t,e)))):Object(a.a)([])}selectEntity(t,e){let i=t;return N(t)&&(i=function(t,e){for(const i of Object.keys(e))if(!0===t(e[i]))return i}(t,this.getValue().entities)),this.select(t=>t.entities).pipe(Object(o.a)(ct(i,e)),Object(u.a)())}getEntity(t){return this.getValue().entities[t]}selectActiveId(){return this.select(t=>t.active)}getActiveId(){return this.getValue().active}selectActive(t){return d(this.getActive())?this.selectActiveId().pipe(Object(h.a)(e=>this.selectMany(e,t))):this.selectActiveId().pipe(Object(h.a)(e=>this.selectEntity(e,t)))}getActive(){const t=this.getActiveId();return d(t)?t.map(t=>this.getValue().entities[t]):K(t)?this.getEntity(t):void 0}selectCount(t){return this.select(t=>t.entities).pipe(Object(o.a)(()=>this.getCount(t)))}getCount(t){return N(t)?this.getAll().filter(t).length:this.getValue().ids.length}selectLast(t){return this.selectAt(t=>t[t.length-1],t)}selectFirst(t){return this.selectAt(t=>t[0],t)}selectEntityAction(t){return Q(t)?this.store.selectEntityAction$:this.store.selectEntityAction$.pipe(Object(l.a)(e=>e.type===t),Object(o.a)(t=>t.ids))}hasEntity(t){return Y(t)?this.getValue().ids.length>0:N(t)?this.getAll().some(t):d(t)?t.every(t=>t in this.getValue().entities):t in this.getValue().entities}hasActive(t){const e=this.getValue().active;return Array.isArray(e)?W(t)?e.includes(t):e.length>0:W(e)}createUIQuery(){this.ui=new ht(this.__store__.ui)}selectAt(t,e){return this.select(t=>t.ids).pipe(Object(o.a)(t),Object(u.a)(),Object(h.a)(t=>this.selectEntity(t,e)))}}class ht extends ut{constructor(t){super(t)}}}}]);