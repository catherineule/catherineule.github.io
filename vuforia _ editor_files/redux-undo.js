!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ReduxUndo=e():t.ReduxUndo=e()}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){t.exports=n(1)},function(t,e,n){"use strict";n.r(e);var r,o,i={UNDO:"@@redux-undo/UNDO",REDO:"@@redux-undo/REDO",JUMP_TO_FUTURE:"@@redux-undo/JUMP_TO_FUTURE",JUMP_TO_PAST:"@@redux-undo/JUMP_TO_PAST",JUMP:"@@redux-undo/JUMP",CLEAR_HISTORY:"@@redux-undo/CLEAR_HISTORY"},u={undo:function(){return{type:i.UNDO}},redo:function(){return{type:i.REDO}},jumpToFuture:function(t){return{type:i.JUMP_TO_FUTURE,index:t}},jumpToPast:function(t){return{type:i.JUMP_TO_PAST,index:t}},jump:function(t){return{type:i.JUMP,index:t}},clearHistory:function(){return{type:i.CLEAR_HISTORY}}};function c(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[];return Array.isArray(t)?t:"string"==typeof t?[t]:e}function a(t){return void 0!==t.present&&void 0!==t.future&&void 0!==t.past&&Array.isArray(t.future)&&Array.isArray(t.past)}function p(t){var e=c(t);return function(t){return 0<=e.indexOf(t.type)}}function l(t){var e=c(t);return function(t){return 0>e.indexOf(t.type)}}function f(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.reduce(function(t,e){return function(n,r,o){return t(n,r,o)&&e(n,r,o)}},function(){return!0})}function s(t){var e=c(t);return function(t){return 0<=e.indexOf(t.type)?t.type:null}}function d(t,e,n){return{past:t,present:e,future:n,group:3<arguments.length&&void 0!==arguments[3]?arguments[3]:null,_latestUnfiltered:e,index:t.length,limit:t.length+n.length+1}}function y(t){return function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var g={prevState:"#9E9E9E",action:"#03A9F4",nextState:"#4CAF50"};function v(t,e,n){return["%c".concat(t),"color: ".concat(e,"; font-weight: bold"),n]}function O(t,e){o={header:[],prev:[],action:[],next:[],msgs:[]},r&&(console.group?(o.header=["%credux-undo","font-style: italic","action",t.type],o.action=v("action",g.action,t),o.prev=v("prev history",g.prevState,e)):(o.header=["redux-undo action",t.type],o.action=["action",t],o.prev=["prev history",e]))}function T(t){var e,n,i,u,c,a,p,l,f,s,d,O,T,b,m,h;r&&(console.group?o.next=v("next history",g.nextState,t):o.next=["next history",t],O=(d=o).header,T=d.prev,b=d.next,m=d.action,h=d.msgs,console.group?((e=console).groupCollapsed.apply(e,y(O)),(n=console).log.apply(n,y(T)),(i=console).log.apply(i,y(m)),(u=console).log.apply(u,y(b)),(c=console).log.apply(c,y(h)),console.groupEnd()):((a=console).log.apply(a,y(O)),(p=console).log.apply(p,y(T)),(l=console).log.apply(l,y(m)),(f=console).log.apply(f,y(b)),(s=console).log.apply(s,y(h))))}function b(){if(r){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];o.msgs=o.msgs.concat([].concat(e,["\n"]))}}function m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function h(t){for(var e=1,n;e<arguments.length;e++){n=null!=arguments[e]?arguments[e]:{};e%2?m(Object(n),!0).forEach(function(e){x(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function x(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function j(t){return function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function A(t,e){var n=d([],t,[]);return e&&(n._latestUnfiltered=null),n}function _(t,e,n,r){var o=t.past.length+1;b("inserting",e),b("new free: ",n-o);var i=t.past,u=t._latestUnfiltered,c=n&&n<=o,a=i.slice(c?1:0);return d(null!=u?[].concat(j(a),[u]):a,e,[],r)}function P(t,e){if(0>e||e>=t.future.length)return t;var n=t.past,r=t.future,o=t._latestUnfiltered;return d([].concat(j(n),[o],j(r.slice(0,e))),r[e],r.slice(e+1))}function S(t,e){if(0>e||e>=t.past.length)return t;var n=t.past,r=t.future,o=t._latestUnfiltered,i=n.slice(0,e),u=[].concat(j(n.slice(e+1)),[o],j(r));return d(i,n[e],u)}function U(t,e){return 0<e?P(t,e-1):0>e?S(t,t.past.length+e):t}function w(t,e){return-1<e.indexOf(t)?t:!t}function E(t){var e,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};e=n.debug,r=e;var o,u=h({limit:void 0,filter:function(){return!0},groupBy:function(){return null},undoType:i.UNDO,redoType:i.REDO,jumpToPastType:i.JUMP_TO_PAST,jumpToFutureType:i.JUMP_TO_FUTURE,jumpType:i.JUMP,neverSkipReducer:!1,ignoreInitialState:!1,syncFilter:!1},n,{initTypes:c(n.initTypes,["@@redux-undo/INIT"]),clearHistoryType:c(n.clearHistoryType,[i.CLEAR_HISTORY])}),p=u.neverSkipReducer?function(e,n){for(var r=arguments.length,o=Array(2<r?r-2:0),i=2;i<r;i++)o[i-2]=arguments[i];return h({},e,{present:t.apply(void 0,[e.present,n].concat(o))})}:function(t){return t};return function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:o,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};O(n,e);for(var r,i=e,c=arguments.length,l=Array(2<c?c-2:0),f=2;f<c;f++)l[f-2]=arguments[f];if(!o){if(b("history is uninitialized"),void 0===e){var s={type:"@@redux-undo/CREATE_HISTORY"},y=t.apply(void 0,[e,s].concat(l));return i=A(y,u.ignoreInitialState),b("do not set initialState on probe actions"),T(i),i}a(e)?(i=o=u.ignoreInitialState?e:d(e.past,e.present,e.future),b("initialHistory initialized: initialState is a history",o)):(i=o=A(e,u.ignoreInitialState),b("initialHistory initialized: initialState is not a history",o))}switch(n.type){case void 0:return i;case u.undoType:return r=U(i,-1),b("perform undo"),T(r),p.apply(void 0,[r,n].concat(l));case u.redoType:return r=U(i,1),b("perform redo"),T(r),p.apply(void 0,[r,n].concat(l));case u.jumpToPastType:return r=S(i,n.index),b("perform jumpToPast to ".concat(n.index)),T(r),p.apply(void 0,[r,n].concat(l));case u.jumpToFutureType:return r=P(i,n.index),b("perform jumpToFuture to ".concat(n.index)),T(r),p.apply(void 0,[r,n].concat(l));case u.jumpType:return r=U(i,n.index),b("perform jump to ".concat(n.index)),T(r),p.apply(void 0,[r,n].concat(l));case w(n.type,u.clearHistoryType):return r=A(i.present,u.ignoreInitialState),b("perform clearHistory"),T(r),p.apply(void 0,[r,n].concat(l));default:if(r=t.apply(void 0,[i.present,n].concat(l)),u.initTypes.some(function(t){return t===n.type}))return b("reset history due to init action"),T(o),o;if(i._latestUnfiltered===r)return i;var g="function"==typeof u.filter&&!u.filter(n,r,i);if(g){var v=d(i.past,r,i.future,i.group);return u.syncFilter||(v._latestUnfiltered=i._latestUnfiltered),b("filter ignored action, not storing it in past"),T(v),v}var m=u.groupBy(n,r,i);if(null!=m&&m===i.group){var h=d(i.past,r,i.future,i.group);return b("groupBy grouped the action with the previous action"),T(h),h}return i=_(i,r,u.limit,m),b("inserted new state into history"),T(i),i;}}}n.d(e,"ActionTypes",function(){return i}),n.d(e,"ActionCreators",function(){return u}),n.d(e,"parseActions",function(){return c}),n.d(e,"isHistory",function(){return a}),n.d(e,"includeAction",function(){return p}),n.d(e,"excludeAction",function(){return l}),n.d(e,"combineFilters",function(){return f}),n.d(e,"groupByActionTypes",function(){return s}),n.d(e,"newHistory",function(){return d}),n.d(e,"default",function(){return E})}])});