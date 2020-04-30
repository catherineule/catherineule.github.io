/**
 * Unregister obsolete editor service worker at the root, if any
 */export const unregisterObsoleteWorker=async nav=>{try{const sw=await nav.serviceWorker.getRegistration("/"),swScript=sw&&sw.active&&sw.active.scriptURL;// regex match of script so we don't unintentionally unregister some other service worker
if(/\/editor.+\/service-worker.js$/.test(swScript)){console.debug("unregistering root service worker");sw.unregister()}}catch(e){console.warn("Failed to unregister root service worker")}};/**
 * Register service-worker
 *
 * @param {object} win - the window
 * @param {object} nav - the navigator
 */export const init=async(win,nav)=>{// Redux assumes `process.env.NODE_ENV` exists in the ES module build.
// https://github.com/reactjs/redux/issues/2907
win.process={env:{NODE_ENV:"production"}};const scope="/editor";if("serviceWorker"in nav){const disableSW=win.location.href.includes("_disableSW_=true")||"true"===sessionStorage.getItem("editor._disableSW_");if(disableSW){console.warn("service worker disabled");sessionStorage.setItem("editor._disableSW_",/* isRoot */!0/*session only*/ /* store in memory only */ /* store filter in memory only */ /* skip dispatch */ /* skip pause/reset of video time */);const sw=await nav.serviceWorker.getRegistration(scope);if(sw){console.warn("unregister service worker");sw.unregister();win.location.reload(!0)}}else{await unregisterObsoleteWorker(nav);// Load and register pre-caching Service Worker
win.addEventListener("load",function(){nav.serviceWorker.register("service-worker.js",{scope})})}}};init(window,navigator);