(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[488],{2601:function(e,t,r){"use strict";var n,i;e.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(i=r.g.process)?void 0:i.env)?r.g.process:r(8960)},7194:function(e){e.exports={style:{fontFamily:"'__pretendard_fa5b6e', '__pretendard_Fallback_fa5b6e'"},className:"__className_fa5b6e"}},8960:function(e){!function(){var t={229:function(e){var t,r,n,i=e.exports={};function o(){throw Error("setTimeout has not been defined")}function s(){throw Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:o}catch(e){t=o}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var u=[],l=!1,c=-1;function d(){l&&n&&(l=!1,n.length?u=n.concat(u):c=-1,u.length&&h())}function h(){if(!l){var e=a(d);l=!0;for(var t=u.length;t;){for(n=u,u=[];++c<t;)n&&n[c].run();c=-1,t=u.length}n=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function g(e,t){this.fun=e,this.array=t}function f(){}i.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];u.push(new g(e,t)),1!==u.length||l||a(h)},g.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=f,i.addListener=f,i.once=f,i.off=f,i.removeListener=f,i.removeAllListeners=f,i.emit=f,i.prependListener=f,i.prependOnceListener=f,i.listeners=function(e){return[]},i.binding=function(e){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}},r={};function n(e){var i=r[e];if(void 0!==i)return i.exports;var o=r[e]={exports:{}},s=!0;try{t[e](o,o.exports,n),s=!1}finally{s&&delete r[e]}return o.exports}n.ab="//";var i=n(229);e.exports=i}()},622:function(e,t,r){"use strict";var n=r(2265),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,o={},l=null,c=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(c=t.ref),t)s.call(t,n)&&!u.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:i,type:e,key:l,ref:c,props:o,_owner:a.current}}t.Fragment=o,t.jsx=l,t.jsxs=l},7437:function(e,t,r){"use strict";e.exports=r(622)},983:function(e,t,r){"use strict";r.d(t,{k:function(){return i}});var n=r(2601);function i(e,t,...r){if(void 0!==n&&void 0===t)throw Error("invariant requires an error message argument");if(!e){let e;if(void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{let n=0;(e=Error(t.replace(/%s/g,function(){return r[n++]}))).name="Invariant Violation"}throw e.framesToPop=1,e}}},3661:function(e,t,r){"use strict";r.d(t,{PD:function(){return O}});var n={};function i(e){let t=null;return()=>(null==t&&(t=e()),t)}r.r(n),r.d(n,{FILE:function(){return a},HTML:function(){return c},TEXT:function(){return l},URL:function(){return u}});class o{enter(e){let t=this.entered.length;return this.entered=function(e,t){let r=new Set,n=e=>r.add(e);e.forEach(n),t.forEach(n);let i=[];return r.forEach(e=>i.push(e)),i}(this.entered.filter(t=>this.isNodeInDocument(t)&&(!t.contains||t.contains(e))),[e]),0===t&&this.entered.length>0}leave(e){let t=this.entered.length;return this.entered=this.entered.filter(this.isNodeInDocument).filter(t=>t!==e),t>0&&0===this.entered.length}reset(){this.entered=[]}constructor(e){this.entered=[],this.isNodeInDocument=e}}class s{initializeExposedProperties(){Object.keys(this.config.exposeProperties).forEach(e=>{Object.defineProperty(this.item,e,{configurable:!0,enumerable:!0,get:()=>(console.warn(`Browser doesn't allow reading "${e}" until the drop event.`),null)})})}loadDataTransfer(e){if(e){let t={};Object.keys(this.config.exposeProperties).forEach(r=>{let n=this.config.exposeProperties[r];null!=n&&(t[r]={value:n(e,this.config.matchesTypes),configurable:!0,enumerable:!0})}),Object.defineProperties(this.item,t)}}canDrag(){return!0}beginDrag(){return this.item}isDragging(e,t){return t===e.getSourceId()}endDrag(){}constructor(e){this.config=e,this.item={},this.initializeExposedProperties()}}let a="__NATIVE_FILE__",u="__NATIVE_URL__",l="__NATIVE_TEXT__",c="__NATIVE_HTML__";function d(e,t,r){let n=t.reduce((t,r)=>t||e.getData(r),"");return null!=n?n:r}let h={[a]:{exposeProperties:{files:e=>Array.prototype.slice.call(e.files),items:e=>e.items,dataTransfer:e=>e},matchesTypes:["Files"]},[c]:{exposeProperties:{html:(e,t)=>d(e,t,""),dataTransfer:e=>e},matchesTypes:["Html","text/html"]},[u]:{exposeProperties:{urls:(e,t)=>d(e,t,"").split("\n"),dataTransfer:e=>e},matchesTypes:["Url","text/uri-list"]},[l]:{exposeProperties:{text:(e,t)=>d(e,t,""),dataTransfer:e=>e},matchesTypes:["Text","text/plain"]}};function g(e){if(!e)return null;let t=Array.prototype.slice.call(e.types||[]);return Object.keys(h).filter(e=>{let r=h[e];return null!=r&&!!r.matchesTypes&&r.matchesTypes.some(e=>t.indexOf(e)>-1)})[0]||null}let f=i(()=>/firefox/i.test(navigator.userAgent)),p=i(()=>!!window.safari);class v{interpolate(e){let t;let{xs:r,ys:n,c1s:i,c2s:o,c3s:s}=this,a=r.length-1;if(e===r[a])return n[a];let u=0,l=s.length-1;for(;u<=l;){let i=r[t=Math.floor(.5*(u+l))];if(i<e)u=t+1;else{if(!(i>e))return n[t];l=t-1}}let c=e-r[a=Math.max(0,l)],d=c*c;return n[a]+i[a]*c+o[a]*d+s[a]*c*d}constructor(e,t){let r,n,i;let{length:o}=e,s=[];for(let e=0;e<o;e++)s.push(e);s.sort((t,r)=>e[t]<e[r]?-1:1);let a=[],u=[],l=[];for(let i=0;i<o-1;i++)r=e[i+1]-e[i],n=t[i+1]-t[i],u.push(r),a.push(n),l.push(n/r);let c=[l[0]];for(let e=0;e<u.length-1;e++){let t=l[e],n=l[e+1];if(t*n<=0)c.push(0);else{r=u[e];let i=u[e+1],o=r+i;c.push(3*o/((o+i)/t+(o+r)/n))}}c.push(l[l.length-1]);let d=[],h=[];for(let e=0;e<c.length-1;e++){i=l[e];let t=c[e],r=1/u[e],n=t+c[e+1]-i-i;d.push((i-t-n)*r),h.push(n*r*r)}this.xs=e,this.ys=t,this.c1s=c,this.c2s=d,this.c3s=h}}function y(e){let t=1===e.nodeType?e:e.parentElement;if(!t)return null;let{top:r,left:n}=t.getBoundingClientRect();return{x:n,y:r}}function m(e){return{x:e.clientX,y:e.clientY}}class T{get window(){return this.globalContext?this.globalContext:"undefined"!=typeof window?window:void 0}get document(){var e;return(null===(e=this.globalContext)||void 0===e?void 0:e.document)?this.globalContext.document:this.window?this.window.document:void 0}get rootElement(){var e;return(null===(e=this.optionsArgs)||void 0===e?void 0:e.rootElement)||this.window}constructor(e,t){this.ownerDocument=null,this.globalContext=e,this.optionsArgs=t}}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}class D{profile(){var e,t;return{sourcePreviewNodes:this.sourcePreviewNodes.size,sourcePreviewNodeOptions:this.sourcePreviewNodeOptions.size,sourceNodeOptions:this.sourceNodeOptions.size,sourceNodes:this.sourceNodes.size,dragStartSourceIds:(null===(e=this.dragStartSourceIds)||void 0===e?void 0:e.length)||0,dropTargetIds:this.dropTargetIds.length,dragEnterTargetIds:this.dragEnterTargetIds.length,dragOverTargetIds:(null===(t=this.dragOverTargetIds)||void 0===t?void 0:t.length)||0}}get window(){return this.options.window}get document(){return this.options.document}get rootElement(){return this.options.rootElement}setup(){let e=this.rootElement;if(void 0!==e){if(e.__isReactDndBackendSetUp)throw Error("Cannot have two HTML5 backends at the same time.");e.__isReactDndBackendSetUp=!0,this.addEventListeners(e)}}teardown(){let e=this.rootElement;if(void 0!==e&&(e.__isReactDndBackendSetUp=!1,this.removeEventListeners(this.rootElement),this.clearCurrentDragSourceNode(),this.asyncEndDragFrameId)){var t;null===(t=this.window)||void 0===t||t.cancelAnimationFrame(this.asyncEndDragFrameId)}}connectDragPreview(e,t,r){return this.sourcePreviewNodeOptions.set(e,r),this.sourcePreviewNodes.set(e,t),()=>{this.sourcePreviewNodes.delete(e),this.sourcePreviewNodeOptions.delete(e)}}connectDragSource(e,t,r){this.sourceNodes.set(e,t),this.sourceNodeOptions.set(e,r);let n=t=>this.handleDragStart(t,e),i=e=>this.handleSelectStart(e);return t.setAttribute("draggable","true"),t.addEventListener("dragstart",n),t.addEventListener("selectstart",i),()=>{this.sourceNodes.delete(e),this.sourceNodeOptions.delete(e),t.removeEventListener("dragstart",n),t.removeEventListener("selectstart",i),t.setAttribute("draggable","false")}}connectDropTarget(e,t){let r=t=>this.handleDragEnter(t,e),n=t=>this.handleDragOver(t,e),i=t=>this.handleDrop(t,e);return t.addEventListener("dragenter",r),t.addEventListener("dragover",n),t.addEventListener("drop",i),()=>{t.removeEventListener("dragenter",r),t.removeEventListener("dragover",n),t.removeEventListener("drop",i)}}addEventListeners(e){e.addEventListener&&(e.addEventListener("dragstart",this.handleTopDragStart),e.addEventListener("dragstart",this.handleTopDragStartCapture,!0),e.addEventListener("dragend",this.handleTopDragEndCapture,!0),e.addEventListener("dragenter",this.handleTopDragEnter),e.addEventListener("dragenter",this.handleTopDragEnterCapture,!0),e.addEventListener("dragleave",this.handleTopDragLeaveCapture,!0),e.addEventListener("dragover",this.handleTopDragOver),e.addEventListener("dragover",this.handleTopDragOverCapture,!0),e.addEventListener("drop",this.handleTopDrop),e.addEventListener("drop",this.handleTopDropCapture,!0))}removeEventListeners(e){e.removeEventListener&&(e.removeEventListener("dragstart",this.handleTopDragStart),e.removeEventListener("dragstart",this.handleTopDragStartCapture,!0),e.removeEventListener("dragend",this.handleTopDragEndCapture,!0),e.removeEventListener("dragenter",this.handleTopDragEnter),e.removeEventListener("dragenter",this.handleTopDragEnterCapture,!0),e.removeEventListener("dragleave",this.handleTopDragLeaveCapture,!0),e.removeEventListener("dragover",this.handleTopDragOver),e.removeEventListener("dragover",this.handleTopDragOverCapture,!0),e.removeEventListener("drop",this.handleTopDrop),e.removeEventListener("drop",this.handleTopDropCapture,!0))}getCurrentSourceNodeOptions(){let e=this.monitor.getSourceId(),t=this.sourceNodeOptions.get(e);return E({dropEffect:this.altKeyPressed?"copy":"move"},t||{})}getCurrentDropEffect(){return this.isDraggingNativeItem()?"copy":this.getCurrentSourceNodeOptions().dropEffect}getCurrentSourcePreviewNodeOptions(){let e=this.monitor.getSourceId();return E({anchorX:.5,anchorY:.5,captureDraggingState:!1},this.sourcePreviewNodeOptions.get(e)||{})}isDraggingNativeItem(){let e=this.monitor.getItemType();return Object.keys(n).some(t=>n[t]===e)}beginDragNativeItem(e,t){this.clearCurrentDragSourceNode(),this.currentNativeSource=function(e,t){let r=h[e];if(!r)throw Error(`native type ${e} has no configuration`);let n=new s(r);return n.loadDataTransfer(t),n}(e,t),this.currentNativeHandle=this.registry.addSource(e,this.currentNativeSource),this.actions.beginDrag([this.currentNativeHandle])}setCurrentDragSourceNode(e){this.clearCurrentDragSourceNode(),this.currentDragSourceNode=e,this.mouseMoveTimeoutTimer=setTimeout(()=>{var e;return null===(e=this.rootElement)||void 0===e?void 0:e.addEventListener("mousemove",this.endDragIfSourceWasRemovedFromDOM,!0)},1e3)}clearCurrentDragSourceNode(){if(this.currentDragSourceNode){if(this.currentDragSourceNode=null,this.rootElement){var e;null===(e=this.window)||void 0===e||e.clearTimeout(this.mouseMoveTimeoutTimer||void 0),this.rootElement.removeEventListener("mousemove",this.endDragIfSourceWasRemovedFromDOM,!0)}return this.mouseMoveTimeoutTimer=null,!0}return!1}handleDragStart(e,t){e.defaultPrevented||(this.dragStartSourceIds||(this.dragStartSourceIds=[]),this.dragStartSourceIds.unshift(t))}handleDragEnter(e,t){this.dragEnterTargetIds.unshift(t)}handleDragOver(e,t){null===this.dragOverTargetIds&&(this.dragOverTargetIds=[]),this.dragOverTargetIds.unshift(t)}handleDrop(e,t){this.dropTargetIds.unshift(t)}constructor(e,t,r){this.sourcePreviewNodes=new Map,this.sourcePreviewNodeOptions=new Map,this.sourceNodes=new Map,this.sourceNodeOptions=new Map,this.dragStartSourceIds=null,this.dropTargetIds=[],this.dragEnterTargetIds=[],this.currentNativeSource=null,this.currentNativeHandle=null,this.currentDragSourceNode=null,this.altKeyPressed=!1,this.mouseMoveTimeoutTimer=null,this.asyncEndDragFrameId=null,this.dragOverTargetIds=null,this.lastClientOffset=null,this.hoverRafId=null,this.getSourceClientOffset=e=>{let t=this.sourceNodes.get(e);return t&&y(t)||null},this.endDragNativeItem=()=>{this.isDraggingNativeItem()&&(this.actions.endDrag(),this.currentNativeHandle&&this.registry.removeSource(this.currentNativeHandle),this.currentNativeHandle=null,this.currentNativeSource=null)},this.isNodeInDocument=e=>!!(e&&this.document&&this.document.body&&this.document.body.contains(e)),this.endDragIfSourceWasRemovedFromDOM=()=>{let e=this.currentDragSourceNode;null==e||this.isNodeInDocument(e)||(this.clearCurrentDragSourceNode()&&this.monitor.isDragging()&&this.actions.endDrag(),this.cancelHover())},this.scheduleHover=e=>{null===this.hoverRafId&&"undefined"!=typeof requestAnimationFrame&&(this.hoverRafId=requestAnimationFrame(()=>{this.monitor.isDragging()&&this.actions.hover(e||[],{clientOffset:this.lastClientOffset}),this.hoverRafId=null}))},this.cancelHover=()=>{null!==this.hoverRafId&&"undefined"!=typeof cancelAnimationFrame&&(cancelAnimationFrame(this.hoverRafId),this.hoverRafId=null)},this.handleTopDragStartCapture=()=>{this.clearCurrentDragSourceNode(),this.dragStartSourceIds=[]},this.handleTopDragStart=e=>{if(e.defaultPrevented)return;let{dragStartSourceIds:t}=this;this.dragStartSourceIds=null;let r=m(e);this.monitor.isDragging()&&(this.actions.endDrag(),this.cancelHover()),this.actions.beginDrag(t||[],{publishSource:!1,getSourceClientOffset:this.getSourceClientOffset,clientOffset:r});let{dataTransfer:n}=e,i=g(n);if(this.monitor.isDragging()){if(n&&"function"==typeof n.setDragImage){let e=this.monitor.getSourceId(),t=this.sourceNodes.get(e),i=this.sourcePreviewNodes.get(e)||t;if(i){let{anchorX:e,anchorY:o,offsetX:s,offsetY:a}=this.getCurrentSourcePreviewNodeOptions(),u=function(e,t,r,n,i){var o;let s,a,u;let l="IMG"===t.nodeName&&(f()||!(null===(o=document.documentElement)||void 0===o?void 0:o.contains(t))),c=y(l?e:t),d={x:r.x-c.x,y:r.y-c.y},{offsetWidth:h,offsetHeight:g}=e,{anchorX:m,anchorY:T}=n,{dragPreviewWidth:E,dragPreviewHeight:D}=(s=l?t.width:h,a=l?t.height:g,p()&&l&&(a/=window.devicePixelRatio,s/=window.devicePixelRatio),{dragPreviewWidth:s,dragPreviewHeight:a}),{offsetX:O,offsetY:b}=i;return{x:0===O||O?O:new v([0,.5,1],[d.x,d.x/h*E,d.x+E-h]).interpolate(m),y:0===b||b?b:(u=new v([0,.5,1],[d.y,d.y/g*D,d.y+D-g]).interpolate(T),p()&&l&&(u+=(window.devicePixelRatio-1)*D),u)}}(t,i,r,{anchorX:e,anchorY:o},{offsetX:s,offsetY:a});n.setDragImage(i,u.x,u.y)}}try{null==n||n.setData("application/json",{})}catch(e){}this.setCurrentDragSourceNode(e.target);let{captureDraggingState:t}=this.getCurrentSourcePreviewNodeOptions();t?this.actions.publishDragSource():setTimeout(()=>this.actions.publishDragSource(),0)}else if(i)this.beginDragNativeItem(i);else{if(n&&!n.types&&(e.target&&!e.target.hasAttribute||!e.target.hasAttribute("draggable")))return;e.preventDefault()}},this.handleTopDragEndCapture=()=>{this.clearCurrentDragSourceNode()&&this.monitor.isDragging()&&this.actions.endDrag(),this.cancelHover()},this.handleTopDragEnterCapture=e=>{if(this.dragEnterTargetIds=[],this.isDraggingNativeItem()){var t;null===(t=this.currentNativeSource)||void 0===t||t.loadDataTransfer(e.dataTransfer)}if(!this.enterLeaveCounter.enter(e.target)||this.monitor.isDragging())return;let{dataTransfer:r}=e,n=g(r);n&&this.beginDragNativeItem(n,r)},this.handleTopDragEnter=e=>{let{dragEnterTargetIds:t}=this;this.dragEnterTargetIds=[],this.monitor.isDragging()&&(this.altKeyPressed=e.altKey,t.length>0&&this.actions.hover(t,{clientOffset:m(e)}),t.some(e=>this.monitor.canDropOnTarget(e))&&(e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect=this.getCurrentDropEffect())))},this.handleTopDragOverCapture=e=>{if(this.dragOverTargetIds=[],this.isDraggingNativeItem()){var t;null===(t=this.currentNativeSource)||void 0===t||t.loadDataTransfer(e.dataTransfer)}},this.handleTopDragOver=e=>{let{dragOverTargetIds:t}=this;if(this.dragOverTargetIds=[],!this.monitor.isDragging()){e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect="none");return}this.altKeyPressed=e.altKey,this.lastClientOffset=m(e),this.scheduleHover(t),(t||[]).some(e=>this.monitor.canDropOnTarget(e))?(e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect=this.getCurrentDropEffect())):this.isDraggingNativeItem()?e.preventDefault():(e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect="none"))},this.handleTopDragLeaveCapture=e=>{this.isDraggingNativeItem()&&e.preventDefault(),this.enterLeaveCounter.leave(e.target)&&(this.isDraggingNativeItem()&&setTimeout(()=>this.endDragNativeItem(),0),this.cancelHover())},this.handleTopDropCapture=e=>{if(this.dropTargetIds=[],this.isDraggingNativeItem()){var t;e.preventDefault(),null===(t=this.currentNativeSource)||void 0===t||t.loadDataTransfer(e.dataTransfer)}else g(e.dataTransfer)&&e.preventDefault();this.enterLeaveCounter.reset()},this.handleTopDrop=e=>{let{dropTargetIds:t}=this;this.dropTargetIds=[],this.actions.hover(t,{clientOffset:m(e)}),this.actions.drop({dropEffect:this.getCurrentDropEffect()}),this.isDraggingNativeItem()?this.endDragNativeItem():this.monitor.isDragging()&&this.actions.endDrag(),this.cancelHover()},this.handleSelectStart=e=>{let t=e.target;"function"!=typeof t.dragDrop||"INPUT"===t.tagName||"SELECT"===t.tagName||"TEXTAREA"===t.tagName||t.isContentEditable||(e.preventDefault(),t.dragDrop())},this.options=new T(t,r),this.actions=e.getActions(),this.monitor=e.getMonitor(),this.registry=e.getRegistry(),this.enterLeaveCounter=new o(this.isNodeInDocument)}}let O=function(e,t,r){return new D(e,t,r)}},1055:function(e,t,r){"use strict";r.d(t,{L:function(){return n}});let n=(0,r(2265).createContext)({dragDropManager:void 0})},947:function(e,t,r){"use strict";r.d(t,{W:function(){return Z}});var n,i,o=r(7437);function s(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var a="function"==typeof Symbol&&Symbol.observable||"@@observable",u=function(){return Math.random().toString(36).substring(7).split("").join(".")},l={INIT:"@@redux/INIT"+u(),REPLACE:"@@redux/REPLACE"+u(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+u()}},c=r(983);function d(e){return"object"==typeof e}let h="dnd-core/INIT_COORDS",g="dnd-core/BEGIN_DRAG",f="dnd-core/PUBLISH_DRAG_SOURCE",p="dnd-core/HOVER",v="dnd-core/DROP",y="dnd-core/END_DRAG";function m(e,t){return{type:h,payload:{sourceClientOffset:t||null,clientOffset:e||null}}}let T={type:h,payload:{clientOffset:null,sourceClientOffset:null}};function E(e,t){return null===t?null===e:Array.isArray(e)?e.some(e=>e===t):e===t}class D{receiveBackend(e){this.backend=e}getMonitor(){return this.monitor}getBackend(){return this.backend}getRegistry(){return this.monitor.registry}getActions(){var e,t,r,n,i;let o=this,{dispatch:s}=this.store,a={beginDrag:(e=this,function(t=[],r={publishSource:!0}){let{publishSource:n=!0,clientOffset:i,getSourceClientOffset:o}=r,s=e.getMonitor(),a=e.getRegistry();e.dispatch(m(i)),(0,c.k)(!s.isDragging(),"Cannot call beginDrag while dragging."),t.forEach(function(e){(0,c.k)(a.getSource(e),"Expected sourceIds to be registered.")});let u=function(e,t){let r=null;for(let n=e.length-1;n>=0;n--)if(t.canDragSource(e[n])){r=e[n];break}return r}(t,s);if(null==u){e.dispatch(T);return}let l=null;if(i){if(!o)throw Error("getSourceClientOffset must be defined");(0,c.k)("function"==typeof o,"When clientOffset is provided, getSourceClientOffset must be a function."),l=o(u)}e.dispatch(m(i,l));let h=a.getSource(u).beginDrag(s,u);if(null!=h)return(0,c.k)(d(h),"Item must be an object."),a.pinSource(u),{type:g,payload:{itemType:a.getSourceType(u),item:h,sourceId:u,clientOffset:i||null,sourceClientOffset:l||null,isSourcePublic:!!n}}}),publishDragSource:(t=this,function(){if(t.getMonitor().isDragging())return{type:f}}),hover:(r=this,function(e,{clientOffset:t}={}){(0,c.k)(Array.isArray(e),"Expected targetIds to be an array.");let n=e.slice(0),i=r.getMonitor(),o=r.getRegistry();return function(e,t,r){for(let n=e.length-1;n>=0;n--){let i=e[n];E(t.getTargetType(i),r)||e.splice(n,1)}}(n,o,i.getItemType()),function(e,t,r){(0,c.k)(t.isDragging(),"Cannot call hover while not dragging."),(0,c.k)(!t.didDrop(),"Cannot call hover after drop.");for(let t=0;t<e.length;t++){let n=e[t];(0,c.k)(e.lastIndexOf(n)===t,"Expected targetIds to be unique in the passed array.");let i=r.getTarget(n);(0,c.k)(i,"Expected targetIds to be registered.")}}(n,i,o),function(e,t,r){e.forEach(function(e){r.getTarget(e).hover(t,e)})}(n,i,o),{type:p,payload:{targetIds:n,clientOffset:t||null}}}),drop:(n=this,function(e={}){let t=n.getMonitor(),r=n.getRegistry();(0,c.k)(t.isDragging(),"Cannot call drop while not dragging."),(0,c.k)(!t.didDrop(),"Cannot call drop twice during one drag operation."),(function(e){let t=e.getTargetIds().filter(e.canDropOnTarget,e);return t.reverse(),t})(t).forEach((i,o)=>{let s={type:v,payload:{dropResult:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}({},e,function(e,t,r,n){var i;let o=r.getTarget(e),s=o?o.drop(n,e):void 0;return i=s,(0,c.k)(void 0===i||d(i),"Drop result must either be an object or undefined."),void 0===s&&(s=0===t?{}:n.getDropResult()),s}(i,o,r,t))}};n.dispatch(s)})}),endDrag:(i=this,function(){let e=i.getMonitor(),t=i.getRegistry();(0,c.k)(e.isDragging(),"Cannot call endDrag while not dragging.");let r=e.getSourceId();return null!=r&&(t.getSource(r,!0).endDrag(e,r),t.unpinSource()),{type:y}})};return Object.keys(a).reduce((e,t)=>{let r=a[t];return e[t]=(...e)=>{let t=r.apply(o,e);void 0!==t&&s(t)},e},{})}dispatch(e){this.store.dispatch(e)}constructor(e,t){this.isSetUp=!1,this.handleRefCountChange=()=>{let e=this.store.getState().refCount>0;this.backend&&(e&&!this.isSetUp?(this.backend.setup(),this.isSetUp=!0):!e&&this.isSetUp&&(this.backend.teardown(),this.isSetUp=!1))},this.store=e,this.monitor=t,e.subscribe(this.handleRefCountChange)}}function O(e,t){return{x:e.x-t.x,y:e.y-t.y}}let b=[],S=[];b.__IS_NONE__=!0,S.__IS_ALL__=!0;class I{subscribeToStateChange(e,t={}){let{handlerIds:r}=t;(0,c.k)("function"==typeof e,"listener must be a function."),(0,c.k)(void 0===r||Array.isArray(r),"handlerIds, when specified, must be an array of strings.");let n=this.store.getState().stateId;return this.store.subscribe(()=>{let t=this.store.getState(),i=t.stateId;try{var o,s;i!==n&&(i!==n+1||(o=t.dirtyHandlerIds,s=r,o!==b&&(o===S||void 0===s||s.filter(e=>o.indexOf(e)>-1).length>0)))&&e()}finally{n=i}})}subscribeToOffsetChange(e){(0,c.k)("function"==typeof e,"listener must be a function.");let t=this.store.getState().dragOffset;return this.store.subscribe(()=>{let r=this.store.getState().dragOffset;r!==t&&(t=r,e())})}canDragSource(e){if(!e)return!1;let t=this.registry.getSource(e);return(0,c.k)(t,`Expected to find a valid source. sourceId=${e}`),!this.isDragging()&&t.canDrag(this,e)}canDropOnTarget(e){if(!e)return!1;let t=this.registry.getTarget(e);return(0,c.k)(t,`Expected to find a valid target. targetId=${e}`),!(!this.isDragging()||this.didDrop())&&E(this.registry.getTargetType(e),this.getItemType())&&t.canDrop(this,e)}isDragging(){return!!this.getItemType()}isDraggingSource(e){if(!e)return!1;let t=this.registry.getSource(e,!0);return(0,c.k)(t,`Expected to find a valid source. sourceId=${e}`),!!(this.isDragging()&&this.isSourcePublic())&&this.registry.getSourceType(e)===this.getItemType()&&t.isDragging(this,e)}isOverTarget(e,t={shallow:!1}){if(!e)return!1;let{shallow:r}=t;if(!this.isDragging())return!1;let n=this.registry.getTargetType(e),i=this.getItemType();if(i&&!E(n,i))return!1;let o=this.getTargetIds();if(!o.length)return!1;let s=o.indexOf(e);return r?s===o.length-1:s>-1}getItemType(){return this.store.getState().dragOperation.itemType}getItem(){return this.store.getState().dragOperation.item}getSourceId(){return this.store.getState().dragOperation.sourceId}getTargetIds(){return this.store.getState().dragOperation.targetIds}getDropResult(){return this.store.getState().dragOperation.dropResult}didDrop(){return this.store.getState().dragOperation.didDrop}isSourcePublic(){return!!this.store.getState().dragOperation.isSourcePublic}getInitialClientOffset(){return this.store.getState().dragOffset.initialClientOffset}getInitialSourceClientOffset(){return this.store.getState().dragOffset.initialSourceClientOffset}getClientOffset(){return this.store.getState().dragOffset.clientOffset}getSourceClientOffset(){return function(e){let{clientOffset:t,initialClientOffset:r,initialSourceClientOffset:n}=e;return t&&r&&n?O({x:t.x+n.x,y:t.y+n.y},r):null}(this.store.getState().dragOffset)}getDifferenceFromInitialOffset(){return function(e){let{clientOffset:t,initialClientOffset:r}=e;return t&&r?O(t,r):null}(this.store.getState().dragOffset)}constructor(e,t){this.store=e,this.registry=t}}let w="undefined"!=typeof global?global:self,N=w.MutationObserver||w.WebKitMutationObserver;function C(e){return function(){let t=setTimeout(n,0),r=setInterval(n,50);function n(){clearTimeout(t),clearInterval(r),e()}}}let x="function"==typeof N?function(e){let t=1,r=new N(e),n=document.createTextNode("");return r.observe(n,{characterData:!0}),function(){t=-t,n.data=t}}:C;class _{enqueueTask(e){let{queue:t,requestFlush:r}=this;t.length||(r(),this.flushing=!0),t[t.length]=e}constructor(){this.queue=[],this.pendingErrors=[],this.flushing=!1,this.index=0,this.capacity=1024,this.flush=()=>{let{queue:e}=this;for(;this.index<e.length;){let t=this.index;if(this.index++,e[t].call(),this.index>this.capacity){for(let t=0,r=e.length-this.index;t<r;t++)e[t]=e[t+this.index];e.length-=this.index,this.index=0}}e.length=0,this.index=0,this.flushing=!1},this.registerPendingError=e=>{this.pendingErrors.push(e),this.requestErrorThrow()},this.requestFlush=x(this.flush),this.requestErrorThrow=C(()=>{if(this.pendingErrors.length)throw this.pendingErrors.shift()})}}class P{call(){try{this.task&&this.task()}catch(e){this.onError(e)}finally{this.task=null,this.release(this)}}constructor(e,t){this.onError=e,this.release=t,this.task=null}}class k{create(e){let t=this.freeTasks,r=t.length?t.pop():new P(this.onError,e=>t[t.length]=e);return r.task=e,r}constructor(e){this.onError=e,this.freeTasks=[]}}let R=new _,L=new k(R.registerPendingError),A="dnd-core/ADD_SOURCE",j="dnd-core/ADD_TARGET",M="dnd-core/REMOVE_SOURCE",H="dnd-core/REMOVE_TARGET";function U(e,t){if(t&&Array.isArray(e)){e.forEach(e=>U(e,!1));return}(0,c.k)("string"==typeof e||"symbol"==typeof e,t?"Type can only be a string, a symbol, or an array of either.":"Type can only be a string or a symbol.")}(n=i||(i={})).SOURCE="SOURCE",n.TARGET="TARGET";let F=0;function G(e){switch(e[0]){case"S":return i.SOURCE;case"T":return i.TARGET;default:throw Error(`Cannot parse handler ID: ${e}`)}}function B(e,t){let r=e.entries(),n=!1;do{let{done:e,value:[,i]}=r.next();if(i===t)return!0;n=!!e}while(!n);return!1}class q{addSource(e,t){U(e),(0,c.k)("function"==typeof t.canDrag,"Expected canDrag to be a function."),(0,c.k)("function"==typeof t.beginDrag,"Expected beginDrag to be a function."),(0,c.k)("function"==typeof t.endDrag,"Expected endDrag to be a function.");let r=this.addHandler(i.SOURCE,e,t);return this.store.dispatch({type:A,payload:{sourceId:r}}),r}addTarget(e,t){U(e,!0),(0,c.k)("function"==typeof t.canDrop,"Expected canDrop to be a function."),(0,c.k)("function"==typeof t.hover,"Expected hover to be a function."),(0,c.k)("function"==typeof t.drop,"Expected beginDrag to be a function.");let r=this.addHandler(i.TARGET,e,t);return this.store.dispatch({type:j,payload:{targetId:r}}),r}containsHandler(e){return B(this.dragSources,e)||B(this.dropTargets,e)}getSource(e,t=!1){return(0,c.k)(this.isSourceId(e),"Expected a valid source ID."),t&&e===this.pinnedSourceId?this.pinnedSource:this.dragSources.get(e)}getTarget(e){return(0,c.k)(this.isTargetId(e),"Expected a valid target ID."),this.dropTargets.get(e)}getSourceType(e){return(0,c.k)(this.isSourceId(e),"Expected a valid source ID."),this.types.get(e)}getTargetType(e){return(0,c.k)(this.isTargetId(e),"Expected a valid target ID."),this.types.get(e)}isSourceId(e){return G(e)===i.SOURCE}isTargetId(e){return G(e)===i.TARGET}removeSource(e){(0,c.k)(this.getSource(e),"Expected an existing source."),this.store.dispatch({type:M,payload:{sourceId:e}}),R.enqueueTask(L.create(()=>{this.dragSources.delete(e),this.types.delete(e)}))}removeTarget(e){(0,c.k)(this.getTarget(e),"Expected an existing target."),this.store.dispatch({type:H,payload:{targetId:e}}),this.dropTargets.delete(e),this.types.delete(e)}pinSource(e){let t=this.getSource(e);(0,c.k)(t,"Expected an existing source."),this.pinnedSourceId=e,this.pinnedSource=t}unpinSource(){(0,c.k)(this.pinnedSource,"No source is pinned at the time."),this.pinnedSourceId=null,this.pinnedSource=null}addHandler(e,t,r){let n=function(e){let t=(F++).toString();switch(e){case i.SOURCE:return`S${t}`;case i.TARGET:return`T${t}`;default:throw Error(`Unknown Handler Role: ${e}`)}}(e);return this.types.set(n,t),e===i.SOURCE?this.dragSources.set(n,r):e===i.TARGET&&this.dropTargets.set(n,r),n}constructor(e){this.types=new Map,this.dragSources=new Map,this.dropTargets=new Map,this.pinnedSourceId=null,this.pinnedSource=null,this.store=e}}let $=(e,t)=>e===t,W={initialSourceClientOffset:null,initialClientOffset:null,clientOffset:null};function K(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}let V={itemType:null,item:null,sourceId:null,targetIds:[],dropResult:null,didDrop:!1,isSourcePublic:null};function X(e={},t){var r;return{dirtyHandlerIds:function(e=b,t){switch(t.type){case p:break;case A:case j:case H:case M:return b;default:return S}let{targetIds:r=[],prevTargetIds:n=[]}=t.payload,i=function(e,t){let r=new Map,n=e=>{r.set(e,r.has(e)?r.get(e)+1:1)};e.forEach(n),t.forEach(n);let i=[];return r.forEach((e,t)=>{1===e&&i.push(t)}),i}(r,n);if(!(i.length>0||!function(e,t,r=$){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(!r(e[n],t[n]))return!1;return!0}(r,n)))return b;let o=n[n.length-1],s=r[r.length-1];return o!==s&&(o&&i.push(o),s&&i.push(s)),i}(e.dirtyHandlerIds,{type:t.type,payload:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}({},t.payload,{prevTargetIds:(r=[],"dragOperation.targetIds".split(".").reduce((e,t)=>e&&e[t]?e[t]:r||null,e))})}),dragOffset:function(e=W,t){let{payload:r}=t;switch(t.type){case h:case g:return{initialSourceClientOffset:r.sourceClientOffset,initialClientOffset:r.clientOffset,clientOffset:r.clientOffset};case p:var n,i;if(n=e.clientOffset,i=r.clientOffset,!n&&!i||n&&i&&n.x===i.x&&n.y===i.y)return e;return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}({},e,{clientOffset:r.clientOffset});case y:case v:return W;default:return e}}(e.dragOffset,t),refCount:function(e=0,t){switch(t.type){case A:case j:return e+1;case M:case H:return e-1;default:return e}}(e.refCount,t),dragOperation:function(e=V,t){let{payload:r}=t;switch(t.type){case g:return K({},e,{itemType:r.itemType,item:r.item,sourceId:r.sourceId,isSourcePublic:r.isSourcePublic,dropResult:null,didDrop:!1});case f:return K({},e,{isSourcePublic:!0});case p:return K({},e,{targetIds:r.targetIds});case H:var n,i;if(-1===e.targetIds.indexOf(r.targetId))return e;return K({},e,{targetIds:(n=e.targetIds,i=r.targetId,n.filter(e=>e!==i))});case v:return K({},e,{dropResult:r.dropResult,didDrop:!0,targetIds:[]});case y:return K({},e,{itemType:null,item:null,sourceId:null,dropResult:null,didDrop:!1,isSourcePublic:null,targetIds:[]});default:return e}}(e.dragOperation,t),stateId:function(e=0){return e+1}(e.stateId)}}var z=r(2265),Y=r(1055);let J=0,Q=Symbol.for("__REACT_DND_CONTEXT_INSTANCE__");var Z=(0,z.memo)(function(e){var t,{children:r}=e;let[n,i]="manager"in(t=function(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}(e,["children"]))?[{dragDropManager:t.manager},!1]:[function(e,t=ee(),r,n){return t[Q]||(t[Q]={dragDropManager:function(e,t,r={},n=!1){let i=function(e){let t="undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__;return function e(t,r,n){if("function"==typeof r&&"function"==typeof n||"function"==typeof n&&"function"==typeof arguments[3])throw Error(s(0));if("function"==typeof r&&void 0===n&&(n=r,r=void 0),void 0!==n){if("function"!=typeof n)throw Error(s(1));return n(e)(t,r)}if("function"!=typeof t)throw Error(s(2));var i,o=t,u=r,c=[],d=c,h=!1;function g(){d===c&&(d=c.slice())}function f(){if(h)throw Error(s(3));return u}function p(e){if("function"!=typeof e)throw Error(s(4));if(h)throw Error(s(5));var t=!0;return g(),d.push(e),function(){if(t){if(h)throw Error(s(6));t=!1,g();var r=d.indexOf(e);d.splice(r,1),c=null}}}function v(e){if(!function(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}(e))throw Error(s(7));if(void 0===e.type)throw Error(s(8));if(h)throw Error(s(9));try{h=!0,u=o(u,e)}finally{h=!1}for(var t=c=d,r=0;r<t.length;r++)(0,t[r])();return e}return v({type:l.INIT}),(i={dispatch:v,subscribe:p,getState:f,replaceReducer:function(e){if("function"!=typeof e)throw Error(s(10));o=e,v({type:l.REPLACE})}})[a]=function(){var e;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw Error(s(11));function t(){e.next&&e.next(f())}return t(),{unsubscribe:p(t)}}})[a]=function(){return this},e},i}(X,e&&t&&t({name:"dnd-core",instanceId:"dnd-core"}))}(n),o=new I(i,new q(i)),u=new D(i,o),c=e(u,t,r);return u.receiveBackend(c),u}(e,t,r,n)}),t[Q]}(t.backend,t.context,t.options,t.debugMode),!t.context];return(0,z.useEffect)(()=>{if(i){let e=ee();return++J,()=>{0==--J&&(e[Q]=null)}}},[]),(0,o.jsx)(Y.L.Provider,{value:n,children:r})});function ee(){return"undefined"!=typeof global?global:window}}}]);