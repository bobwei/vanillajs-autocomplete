!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="assets/",t(t.s=9)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(e,t,n){var o="function"==typeof e?e(r({},t,{children:n})):document.createElement(e);return Object.assign(o,t),Object.assign(o.style,t.style),Array.isArray(n)?n.forEach(function(e){return o.appendChild(e)}):"string"==typeof n||"number"==typeof n?o.appendChild(document.createTextNode(n)):n instanceof HTMLElement&&o.appendChild(n),o};t.default=o},function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(e,t){var n=e.history,i=n.reduce(function(e,t,n){return u({},e,o({},t,String(n)))},{});return[].concat(r([].concat(r(t)).filter(function(e){var t=e.value;return i[t]}).sort(function(e,t){var n=e.value,r=t.value;return i[n]-i[r]})),r([].concat(r(t)).filter(function(e){var t=e.value;return!i[t]})))};t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e,t){return e===t};return function(r,o){var u=e(r),i=e(o);n(u,i)||t(u,i)}};t.default=r},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(0),a=r(i),l=n(23),s=r(l),f=n(24),c=r(f),d=n(25),p=r(d),v=n(27),y=r(v),g=n(26),_=r(g),h=n(2),O=r(h),b=n(10),m=r(b),P=n(12),j=r(P),S=n(11),M=r(S),L=n(14),x=r(L),I=n(13),E=r(I),N=n(15),w=r(N),T=n(16),H=r(T),A=n(17),$=r(A),C=n(21),k=r(C),q=n(18),D=r(q),K=n(19),J=r(K),z=n(20),B=r(z),R=n(1),V=r(R),X=function(e){var t=e.el,n=e.data,r=e.getPersistKey,i=(0,y.default)({data:n,isOptionListHidden:!0,focusIndex:-1,value:void 0,history:[]}),l=i.getState,f=i.setState,d=i.subscribe,v={};v.$input=t,Object.assign(v.$input,{oninput:(0,w.default)({data:n,getState:l,setState:f}),onfocus:(0,x.default)({setState:f}),onblur:(0,E.default)({setState:f}),onkeydown:(0,H.default)({setState:f,getState:l})});var g=(0,k.default)({setState:f}),h=(0,J.default)({setState:f}),b=(0,B.default)({getState:l,setState:f});return v.$optionList=(0,a.default)(j.default,{data:l().data,history:l().history,Option:M.default,onselect:g,onhover:h,onremove:b}),v.$container=(0,a.default)(m.default,{el:t,className:"auto-complete-container"},v.$optionList),(0,p.default)(v.$container)(l().isOptionListHidden),d((0,O.default)(function(e){return e.data},function(){v.$optionList=(0,c.default)((0,a.default)(j.default,{data:l().data,history:l().history,Option:M.default,onselect:g,onhover:h,onremove:b}),v.$optionList)})),d((0,O.default)(function(e){return e.isOptionListHidden},(0,p.default)(v.$container))),d((0,O.default)(function(e){return e.focusIndex},(0,D.default)({getContainer:function(){return v.$container},getEl:function(){return v.$optionList}}))),d((0,O.default)(function(e){return e.value},(0,$.default)({getEl:function(){return v.$input}}))),d((0,O.default)(function(e){return e.value},function(e){f({history:[].concat(o(new Set([e].concat(o(l().history)))))})})),d((0,O.default)(function(e){return e.history},function(e){f({data:(0,V.default)({history:e},n)})})),n.length>0&&f({focusIndex:0}),(0,_.default)(i,{persistProp:["history"],getPersistKey:r}),(0,s.default)(v.$container,v.$input),u({},i,{refs:v})};t.default=X},function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var r=function(){return n(29)};t.default=r,n.c[n.s]===e&&console.log(JSON.stringify(r()))}).call(t,n(28)(e))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return{value:e.name,thumbnail:e.logo}};t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={get:function(e){return new Promise(function(t,n){var r=new XMLHttpRequest;r.onreadystatechange=function(){if(r.readyState===XMLHttpRequest.DONE)if(200===r.status){var e=r.responseText;t(JSON.parse(e))}else n(r)},r.open("GET",e),r.send()})}}},function(e,t){},function(e,t){},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(3),u=r(o),i=n(6),a=r(i),l=n(4),s=r(l),f=n(5),c=r(f);n(8),n(7),document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector("#static-source");(0,u.default)({el:e,data:(0,s.default)().item.map(c.default),getPersistKey:function(){return"auto-complete:history:0"}}),e.focus(),a.default.get("https://bobwei.github.io/vanillajs-autocomplete/data.json").then(function(e){(0,u.default)({el:document.querySelector("#remote-source"),data:e.item.map(c.default),getPersistKey:function(){return"auto-complete:history:1"}})})})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=function(e){return e&&e.__esModule?e:{default:e}}(r),u=function(e){var t=e.el,n=e.children,r=t.offsetTop,u=t.offsetHeight,i=t.offsetLeft;return(0,o.default)("div",{style:{position:"absolute",top:r+u,left:i}},n)};t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=function(e){return e&&e.__esModule?e:{default:e}}(r),u=function(e){var t=e.index,n=e.value,r=e.thumbnail,u=e.onselect,i=e.onhover,a=e.isInHistory,l=e.onremove,s=(0,o.default)("span",{className:"remove",onmousedown:l},"remove");s.setAttribute("data-value",n);var f=(0,o.default)("li",{onmousedown:u,onmouseenter:i},[(0,o.default)("img",{src:r}),(0,o.default)("div",{className:"text"},n),s]);return f.setAttribute("data-value",n),f.setAttribute("data-index",t),a&&f.classList.add("is-in-history"),f};t.default=u},function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=n(0),i=function(e){return e&&e.__esModule?e:{default:e}}(u),a=function(e){var t=e.data,n=e.history,u=e.Option,a=(e.children,r(e,["data","history","Option","children"])),l=new Set(n);return(0,i.default)("ul",{},t.map(function(e,t){return(0,i.default)(u,o({index:t},e,a,{isInHistory:l.has(e.value)}))}))};t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){var t=e.setState;return function(){return t({isOptionListHidden:!0})}};t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){var t=e.setState;return function(){return t({isOptionListHidden:!1})}};t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=function(e){return e&&e.__esModule?e:{default:e}}(r),u=function(e){var t=e.data,n=e.getState,r=e.setState,u=e.valueSelector,i=void 0===u?function(e){return e.target.value}:u,a=e.filterOption,l=void 0===a?function(e){var t=e.q;return function(e){return e.value.toLowerCase().indexOf(t.toLowerCase())>-1}}:a;return function(e){var u=i(e);r({focusIndex:-1}),r({data:(0,o.default)({history:n().history},t).filter(l({q:u})),focusIndex:0,isOptionListHidden:!1})}};t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){var t=e.getState,n=e.setState;return function(e){var r=e.keyCode;if(38===r)n({focusIndex:Math.max(0,t().focusIndex-1)});else if(40===r)n({focusIndex:Math.min(t().data.length,t().focusIndex+1)});else if(13===r){e.preventDefault();var o=t(),u=o.data,i=o.focusIndex;u[i]&&n({value:u[i].value}),n({isOptionListHidden:!0})}}};t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){var t=e.getEl;return function(e){t().value=e}};t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(22),o=function(e){return e&&e.__esModule?e:{default:e}}(r),u=function(e){var t=e.getContainer,n=e.getEl;return function(e,r){var u=n();if(u.children[e]){u.children[e].classList.add("focus");var i=t(),a=u.children[e],l=(0,o.default)({el:a,$container:i});l.shouldScrollToView&&(i.scrollTop=l.scrollTop)}u.children[r]&&u.children[r].classList.remove("focus")}};t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){var t=e.setState;return function(e){t({focusIndex:parseInt(e.target.dataset.index,10)})}};t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){var t=e.getState,n=e.setState,r=e.valueSelector,o=void 0===r?function(e){return e.target.dataset.value}:r;return function(e){var r=o(e);n({history:t().history.filter(function(e){return e!==r})}),e.stopPropagation(),e.preventDefault()}};t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){var t=e.setState,n=e.valueSelector,r=void 0===n?function(e){return e.currentTarget.dataset.value}:n;return function(e){t({value:r(e)})}};t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){var t=e.el,n=e.$container;return{shouldScrollToView:!(t.offsetTop>n.scrollTop&&t.offsetTop+t.offsetHeight<n.scrollTop+n.offsetHeight),scrollTop:t.offsetTop-n.offsetHeight/2}};t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t){t.parentNode.insertBefore(e,t.nextSibling)};t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t){return t.parentNode.replaceChild(e,t),e};t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return function(t){e&&(e.style.display=t?"none":"block")}};t.default=r},function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),u=function(e){return e&&e.__esModule?e:{default:e}}(o),i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.persistProp,o=t.storage,i=void 0===o?localStorage:o,a=t.getPersistKey,l=t.serializer,s=void 0===l?JSON.stringify:l,f=t.deserializer,c=void 0===f?JSON.parse:f,d=e.subscribe,p=e.setState;d((0,u.default)(function(e){return e[n]},function(e){var t=a();i.setItem(t,s(e))}));var v=a(),y=i.getItem(v);y&&p(r({},n,c(y)))};t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(e){var t=e,n=[];return{getState:function(){return t},setState:function(e){var o=r({},t);t=r({},o,e),n.forEach(function(e){e(t,o)})},subscribe:function(e){return n.push(e),function(){var t=n.indexOf(e);n.splice(t,1)}}}};t.default=o},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t){e.exports={total:13,item:[{name:"B612",logo:"https://d.line-scdn.net/stf/line-lp/family/en/b612_190.png"},{name:"LOOKS",logo:"https://d.line-scdn.net/stf/line-lp/line_looks_190x190.png"},{name:"LINE MAN",logo:"https://d.line-scdn.net/stf/line-lp/line_android_190x190_1111.png"},{name:"LINE HERE",logo:"https://d.line-scdn.net/stf/line-lp/family/en/lp_here_appicon_190x190.png"},{name:"EMOJI LINE",logo:"https://d.line-scdn.net/stf/line-lp/family/en/190X190_line_me.png"},{name:"LINE Moments",logo:"https://d.line-scdn.net/stf/line-lp/iOS_appcion_190-190.png"},{name:"LINE@",logo:"https://d.line-scdn.net/stf/line-lp/family/en/lineat_96.png"},{name:"LINE TV",logo:"https://d.line-scdn.net/stf/line-lp/family/en/linelogo_96x96.png"},{name:"LINE Camera",logo:"https://d.line-scdn.net/stf/line-lp/family/en/linecamera_icon_96.png"},{name:"LINE DECO",logo:"https://d.line-scdn.net/stf/line-lp/family/en/LINE-DECO_96.jpg"},{name:"LINE Tools",logo:"https://d.line-scdn.net/stf/line-lp/family/en/LP_Family_icon_96_LINE-Tools.jpg"},{name:"Popcorn Buzz",logo:"https://d.line-scdn.net/stf/line-lp/family/en/lp_pop_appicon_96x96.png"},{name:"LINE Antivirus",logo:"https://d.line-scdn.net/stf/line-lp/family/en/LP_Family_icon_96_LINE-Antivirus.jpg"}]}}]);