!function(e){function t(r){if(n[r])return n[r].exports;var u=n[r]={i:r,l:!1,exports:{}};return e[r].call(u.exports,u,u.exports,t),u.l=!0,u.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="assets/",t(t.s=8)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(e,t,n){var u="function"==typeof e?e(r({},t,{children:n})):document.createElement(e);return Object.assign(u,t),Object.assign(u.style,t.style),Array.isArray(n)?n.forEach(function(e){return u.appendChild(e)}):"string"==typeof n||"number"==typeof n?u.appendChild(document.createTextNode(n)):n instanceof HTMLElement&&u.appendChild(n),u};t.default=u},function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(e,t){var n=e.history,a=n.reduce(function(e,t,n){return o({},e,u({},t,String(n)))},{});return[].concat(r([].concat(r(t)).filter(function(e){var t=e.value;return a[t]}).sort(function(e,t){var n=e.value,r=t.value;return a[n]-a[r]})),r([].concat(r(t)).filter(function(e){var t=e.value;return!a[t]})))};t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e,t){return e===t};return function(r,u){var o=e(r),a=e(u);n(o,a)||t(o,a)}};t.default=r},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function u(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(0),i=r(a),f=n(22),c=r(f),l=n(23),s=r(l),d=n(24),v=r(d),p=n(26),y=r(p),b=n(25),h=r(b),O=n(2),g=r(O),_=n(9),P=r(_),j=n(11),S=r(j),m=n(10),M=r(m),x=n(13),w=r(x),L=n(12),A=r(L),H=n(14),I=r(H),$=n(15),T=r($),E=n(16),N=r(E),C=n(20),q=r(C),k=n(17),K=r(k),D=n(18),J=r(D),z=n(19),R=r(z),V=n(1),X=r(V),B=function(e){var t=e.el,n=e.data,r=e.getPersistKey,a=(0,y.default)({data:n,isOptionListHidden:!0,focusIndex:-1,value:void 0,history:[]}),f=a.getState,l=a.setState,d=a.subscribe,p={};p.$input=t,Object.assign(p.$input,{oninput:(0,I.default)({data:n,getState:f,setState:l}),onfocus:(0,w.default)({setState:l}),onblur:(0,A.default)({setState:l}),onkeydown:(0,T.default)({setState:l,getState:f})});var b=(0,q.default)({setState:l}),O=(0,J.default)({setState:l}),_=(0,R.default)({getState:f,setState:l});return p.$optionList=(0,i.default)(S.default,{data:f().data,history:f().history,Option:M.default,onselect:b,onhover:O,onremove:_}),p.$container=(0,i.default)(P.default,{el:t,className:"auto-complete-container"},p.$optionList),(0,v.default)(p.$container)(f().isOptionListHidden),d((0,g.default)(function(e){return e.data},function(){p.$optionList=(0,s.default)((0,i.default)(S.default,{data:f().data,history:f().history,Option:M.default,onselect:b,onhover:O,onremove:_}),p.$optionList)})),d((0,g.default)(function(e){return e.isOptionListHidden},(0,v.default)(p.$container))),d((0,g.default)(function(e){return e.focusIndex},(0,K.default)({getContainer:function(){return p.$container},getEl:function(){return p.$optionList}}))),d((0,g.default)(function(e){return e.value},(0,N.default)({getEl:function(){return p.$input}}))),d((0,g.default)(function(e){return e.value},function(e){l({history:[].concat(u(new Set([e].concat(u(f().history)))))})})),d((0,g.default)(function(e){return e.history},function(e){l({data:(0,X.default)({history:e},n)})})),n.length>0&&l({focusIndex:0}),(0,h.default)(a,{persistProp:["history"],getPersistKey:r}),(0,c.default)(p.$container,p.$input),o({},a,{refs:p})};t.default=B},function(e,t,n){"use strict";(function(e){function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){return[].concat(r(new Array(100))).map(function(e,t){return{value:"label "+t,label:"label "+t}})};t.default=u,n.c[n.s]===e&&console.log(JSON.stringify(u()))}).call(t,n(27)(e))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={get:function(e){return new Promise(function(t,n){var r=new XMLHttpRequest;r.onreadystatechange=function(){if(r.readyState===XMLHttpRequest.DONE)if(200===r.status){var e=r.responseText;t(JSON.parse(e))}else n(r)},r.open("GET",e),r.send()})}}},function(e,t){},function(e,t){},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var u=n(3),o=r(u),a=n(5),i=r(a),f=n(4),c=r(f);n(7),n(6),document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector("#static-source");(0,o.default)({el:e,data:(0,c.default)(),getPersistKey:function(){return"auto-complete:history:0"}}),e.focus(),i.default.get("https://bobwei.github.io/vanillajs-autocomplete/data.json").then(function(e){(0,o.default)({el:document.querySelector("#remote-source"),data:e,getPersistKey:function(){return"auto-complete:history:1"}})})})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),u=function(e){return e&&e.__esModule?e:{default:e}}(r),o=function(e){var t=e.el,n=e.children,r=t.offsetTop,o=t.offsetHeight,a=t.offsetLeft;return(0,u.default)("div",{style:{position:"absolute",top:r+o,left:a}},n)};t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),u=function(e){return e&&e.__esModule?e:{default:e}}(r),o=function(e){var t=e.index,n=e.value,r=e.label,o=e.onselect,a=e.onhover,i=e.isInHistory,f=e.onremove,c=(0,u.default)("span",{className:"remove",onmousedown:f},"remove");c.setAttribute("data-value",n);var l=(0,u.default)("li",{onmousedown:o,onmouseenter:a},[(0,u.default)("span",{},r),c]);return l.setAttribute("data-value",n),l.setAttribute("data-index",t),i&&l.classList.add("is-in-history"),l};t.default=o},function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=n(0),a=function(e){return e&&e.__esModule?e:{default:e}}(o),i=function(e){var t=e.data,n=e.history,o=e.Option,i=(e.children,r(e,["data","history","Option","children"])),f=new Set(n);return(0,a.default)("ul",{},t.map(function(e,t){return(0,a.default)(o,u({index:t},e,i,{isInHistory:f.has(e.value)}))}))};t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){var t=e.setState;return function(){return t({isOptionListHidden:!0})}};t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){var t=e.setState;return function(){return t({isOptionListHidden:!1})}};t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),u=function(e){return e&&e.__esModule?e:{default:e}}(r),o=function(e){var t=e.data,n=e.getState,r=e.setState,o=e.valueSelector,a=void 0===o?function(e){return e.target.value}:o,i=e.filterOption,f=void 0===i?function(e){var t=e.q;return function(e){return e.label.indexOf(t)>-1}}:i;return function(e){var o=a(e);r({focusIndex:-1}),r({data:(0,u.default)({history:n().history},t).filter(f({q:o})),focusIndex:0,isOptionListHidden:!1})}};t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){var t=e.getState,n=e.setState;return function(e){var r=e.keyCode;if(38===r)n({focusIndex:Math.max(0,t().focusIndex-1)});else if(40===r)n({focusIndex:Math.min(t().data.length,t().focusIndex+1)});else if(13===r){e.preventDefault();var u=t(),o=u.data,a=u.focusIndex;o[a]&&n({value:o[a].value}),n({isOptionListHidden:!0})}}};t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){var t=e.getEl;return function(e){t().value=e}};t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(21),u=function(e){return e&&e.__esModule?e:{default:e}}(r),o=function(e){var t=e.getContainer,n=e.getEl;return function(e,r){var o=n();if(o.children[e]){o.children[e].classList.add("focus");var a=t(),i=o.children[e],f=(0,u.default)({el:i,$container:a});f.shouldScrollToView&&(a.scrollTop=f.scrollTop)}o.children[r]&&o.children[r].classList.remove("focus")}};t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){var t=e.setState;return function(e){t({focusIndex:parseInt(e.target.dataset.index,10)})}};t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){var t=e.getState,n=e.setState,r=e.valueSelector,u=void 0===r?function(e){return e.target.dataset.value}:r;return function(e){var r=u(e);n({history:t().history.filter(function(e){return e!==r})}),e.stopPropagation(),e.preventDefault()}};t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){var t=e.setState,n=e.valueSelector,r=void 0===n?function(e){return e.target.dataset.value}:n;return function(e){t({value:r(e)})}};t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){var t=e.el,n=e.$container;return{shouldScrollToView:!(t.offsetTop>n.scrollTop&&t.offsetTop+t.offsetHeight<n.scrollTop+n.offsetHeight),scrollTop:t.offsetTop-n.offsetHeight/2}};t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t){t.parentNode.insertBefore(e,t.nextSibling)};t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t){return t.parentNode.replaceChild(e,t),e};t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return function(t){e&&(e.style.display=t?"none":"block")}};t.default=r},function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0});var u=n(2),o=function(e){return e&&e.__esModule?e:{default:e}}(u),a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.persistProp,u=t.storage,a=void 0===u?localStorage:u,i=t.getPersistKey,f=t.serializer,c=void 0===f?JSON.stringify:f,l=t.deserializer,s=void 0===l?JSON.parse:l,d=e.subscribe,v=e.setState;d((0,o.default)(function(e){return e[n]},function(e){var t=i();a.setItem(t,c(e))}));var p=i(),y=a.getItem(p);y&&v(r({},n,s(y)))};t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(e){var t=e,n=[];return{getState:function(){return t},setState:function(e){var u=r({},t);t=r({},u,e),n.forEach(function(e){e(t,u)})},subscribe:function(e){return n.push(e),function(){var t=n.indexOf(e);n.splice(t,1)}}}};t.default=u},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}}]);