!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=1)}([function(e,n,t){"use strict";function r(e,n){if(3===e.nodeType)return void function(e,n){if(!n)return;const t=e.nodeValue,r=Object.keys(n).join("|"),o=new RegExp(r,"gim");e.nodeValue=t.replace(o,e=>n[e.toLowerCase()])}(e,n);let t=e.firstChild;if(1===e.nodeType||9===e.nodeType||11===e.nodeType)for(;t;)r(t,n),t=t.nextSibling;return e}function o(){const e=["新冠","新型冠狀","新型"].reduce((e,n)=>({...e,[n]:"中國武漢"}),{});return{...["covid-19"].reduce((e,n)=>({...e,[n]:"China Wuhan Virus"}),{}),...e}}t.d(n,"b",(function(){return r})),t.d(n,"a",(function(){return o}))},function(e,n,t){"use strict";t.r(n);var r=t(0);chrome.storage.sync.set({keywordsMap:Object(r.a)()},(function(){}))}]);