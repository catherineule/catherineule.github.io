function _extends(){_extends=Object.assign||function(target){for(var i=1,source;i<arguments.length;i++){source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};return _extends.apply(this,arguments)}var _extends$1={default:_extends};function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var target={},sourceKeys=Object.keys(source),key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(0<=excluded.indexOf(key))continue;target[key]=source[key]}return target}var objectWithoutPropertiesLoose={default:_objectWithoutPropertiesLoose},createSymbol=function createSymbol(name){return"@@redux-saga/"+name},CANCEL=/*#__PURE__*/createSymbol("CANCEL_PROMISE"),CHANNEL_END_TYPE=/*#__PURE__*/createSymbol("CHANNEL_END"),IO=/*#__PURE__*/createSymbol("IO"),MATCH=/*#__PURE__*/createSymbol("MATCH"),MULTICAST=/*#__PURE__*/createSymbol("MULTICAST"),SAGA_ACTION=/*#__PURE__*/createSymbol("SAGA_ACTION"),SELF_CANCELLATION=/*#__PURE__*/createSymbol("SELF_CANCELLATION"),TASK=/*#__PURE__*/createSymbol("TASK"),TASK_CANCEL=/*#__PURE__*/createSymbol("TASK_CANCEL"),TERMINATE=/*#__PURE__*/createSymbol("TERMINATE"),SAGA_LOCATION=/*#__PURE__*/createSymbol("LOCATION"),reduxSagaSymbols_esm={CANCEL:CANCEL,CHANNEL_END_TYPE:CHANNEL_END_TYPE,IO:IO,MATCH:MATCH,MULTICAST:MULTICAST,SAGA_ACTION:SAGA_ACTION,SAGA_LOCATION:SAGA_LOCATION,SELF_CANCELLATION:SELF_CANCELLATION,TASK:TASK,TASK_CANCEL:TASK_CANCEL,TERMINATE:TERMINATE},undef=function undef(v){return null===v||v===void 0},notUndef=function notUndef(v){return null!==v&&v!==void 0},func=function func(f){return"function"===typeof f},number=function number(n){return"number"===typeof n},string=function string(s){return"string"===typeof s},array=Array.isArray,object=function object(obj){return obj&&!array(obj)&&"object"===typeof obj},promise=function promise(p){return p&&func(p.then)},iterator=function iterator(it){return it&&func(it.next)&&func(it.throw)},iterable=function iterable(it){return it&&func(Symbol)?func(it[Symbol.iterator]):array(it)},task=function task(t){return t&&t[TASK]},sagaAction=function sagaAction(a){return!!(a&&a[SAGA_ACTION])},observable=function observable(ob){return ob&&func(ob.subscribe)},buffer=function buffer(buf){return buf&&func(buf.isEmpty)&&func(buf.take)&&func(buf.put)},pattern=function pattern(pat){return pat&&(string(pat)||symbol(pat)||func(pat)||array(pat)&&pat.every(pattern))},channel=function channel(ch){return ch&&func(ch.take)&&func(ch.close)},stringableFunc=function stringableFunc(f){return func(f)&&f.hasOwnProperty("toString")},symbol=function symbol(sym){return!!sym&&"function"===typeof Symbol&&sym.constructor===Symbol&&sym!==Symbol.prototype},multicast=function multicast(ch){return channel(ch)&&ch[MULTICAST]},effect=function effect(eff){return eff&&eff[IO]},reduxSagaIs_esm={array:array,buffer:buffer,channel:channel,effect:effect,func:func,iterable:iterable,iterator:iterator,multicast:multicast,notUndef:notUndef,number:number,object:object,observable:observable,pattern:pattern,promise:promise,sagaAction:sagaAction,string:string,stringableFunc:stringableFunc,symbol:symbol,task:task,undef:undef};function delayP(ms,val){if(void 0===val){val=/* isRoot */!0/*session only*/ /* store in memory only */ /* store filter in memory only */ /* skip dispatch */ /* skip pause/reset of video time */}var timeoutId,promise=new Promise(function(resolve){timeoutId=setTimeout(resolve,ms,val)});promise[CANCEL]=function(){clearTimeout(timeoutId)};return promise}var reduxSagaDelayP_esm={default:delayP},konst=function konst(v){return function(){return v}},kTrue=/*#__PURE__*/konst(!0),noop=function noop(){};if("production"!==process.env.NODE_ENV&&"undefined"!==typeof Proxy){noop=/*#__PURE__*/new Proxy(noop,{set:function set(){throw internalErr("There was an attempt to assign a property to internal `noop` function.")}})}var identity=function identity(v){return v},hasSymbol="function"===typeof Symbol,asyncIteratorSymbol=hasSymbol&&Symbol.asyncIterator?Symbol.asyncIterator:"@@asyncIterator";function check(value,predicate,error){if(!predicate(value)){throw new Error(error)}}var assignWithSymbols=function assignWithSymbols(target,source){_extends(target,source);if(Object.getOwnPropertySymbols){Object.getOwnPropertySymbols(source).forEach(function(s){target[s]=source[s]})}},flatMap=function flatMap(mapper,arr){var _ref;return(_ref=[]).concat.apply(_ref,arr.map(mapper))};function remove(array,item){var index=array.indexOf(item);if(0<=index){array.splice(index,1)}}function once(fn){var called=/* isRoot */ /* isRoot */!1/* store in local storage */;return function(){if(called){return}called=!0;fn()}}var kThrow=function kThrow(err){throw err},kReturn=function kReturn(value){return{value:value,done:!0}};function makeIterator(next,thro,name){if(void 0===thro){thro=kThrow}if(void 0===name){name="iterator"}var iterator={meta:{name:name},next:next,throw:thro,return:kReturn,isSagaIterator:!0};if("undefined"!==typeof Symbol){iterator[Symbol.iterator]=function(){return iterator}}return iterator}function logError(error,_ref2){var sagaStack=_ref2.sagaStack;/*eslint-disable no-console*/console.error(error);console.error(sagaStack)}var internalErr=function internalErr(err){return new Error("\n  redux-saga: Error checking hooks detected an inconsistent state. This is likely a bug\n  in redux-saga code and not yours. Thanks for reporting this in the project's github repo.\n  Error: "+err+"\n")},createSetContextWarning=function createSetContextWarning(ctx,props){return(ctx?ctx+".":"")+"setContext(props): argument "+props+" is not a plain object"},FROZEN_ACTION_ERROR="You can't put (a.k.a. dispatch from saga) frozen actions.\nWe have to define a special non-enumerable property on those actions for scheduling purposes.\nOtherwise you wouldn't be able to communicate properly between sagas & other subscribers (action ordering would become far less predictable).\nIf you are using redux and you care about this behaviour (frozen actions),\nthen you might want to switch to freezing actions in a middleware rather than in action creator.\nExample implementation:\n\nconst freezeActions = store => next => action => next(Object.freeze(action))\n",createEmptyArray=function createEmptyArray(n){return Array.apply(null,Array(n))},wrapSagaDispatch=function wrapSagaDispatch(dispatch){return function(action){if("production"!==process.env.NODE_ENV){check(action,function(ac){return!Object.isFrozen(ac)},FROZEN_ACTION_ERROR)}return dispatch(Object.defineProperty(action,SAGA_ACTION,{value:!0}))}},shouldTerminate=function shouldTerminate(res){return res===TERMINATE},shouldCancel=function shouldCancel(res){return res===TASK_CANCEL},shouldComplete=function shouldComplete(res){return shouldTerminate(res)||shouldCancel(res)};function createAllStyleChildCallbacks(shape,parentCallback){var keys=Object.keys(shape),totalCount=keys.length;if("production"!==process.env.NODE_ENV){check(totalCount,function(c){return 0<c},"createAllStyleChildCallbacks: get an empty array or object")}var completedCount=0,completed,results=array(shape)?createEmptyArray(totalCount):{},childCallbacks={};function checkEnd(){if(completedCount===totalCount){completed=!0;parentCallback(results)}}keys.forEach(function(key){var chCbAtKey=function chCbAtKey(res,isErr){if(completed){return}if(isErr||shouldComplete(res)){parentCallback.cancel();parentCallback(res,isErr)}else{results[key]=res;completedCount++;checkEnd()}};chCbAtKey.cancel=noop;childCallbacks[key]=chCbAtKey});parentCallback.cancel=function(){if(!completed){completed=!0;keys.forEach(function(key){return childCallbacks[key].cancel()})}};return childCallbacks}function getMetaInfo(fn){return{name:fn.name||"anonymous",location:getLocation(fn)}}function getLocation(instrumented){return instrumented[SAGA_LOCATION]}var BUFFER_OVERFLOW="Channel's Buffer overflow!",ON_OVERFLOW_THROW=1,ON_OVERFLOW_DROP=2,ON_OVERFLOW_SLIDE=3,ON_OVERFLOW_EXPAND=4,zeroBuffer={isEmpty:kTrue,put:noop,take:noop};function ringBuffer(limit,overflowAction){if(void 0===limit){limit=10}var arr=Array(limit),length=0,pushIndex=0,popIndex=0,push=function push(it){arr[pushIndex]=it;pushIndex=(pushIndex+1)%limit;length++},take=function take(){if(0!=length){var it=arr[popIndex];arr[popIndex]=null;length--;popIndex=(popIndex+1)%limit;return it}},flush=function flush(){var items=[];while(length){items.push(take())}return items};return{isEmpty:function isEmpty(){return 0==length},put:function put(it){if(length<limit){push(it)}else{var doubledLimit;switch(overflowAction){case ON_OVERFLOW_THROW:throw new Error(BUFFER_OVERFLOW);case ON_OVERFLOW_SLIDE:arr[pushIndex]=it;pushIndex=(pushIndex+1)%limit;popIndex=pushIndex;break;case ON_OVERFLOW_EXPAND:doubledLimit=2*limit;arr=flush();length=arr.length;pushIndex=arr.length;popIndex=0;arr.length=doubledLimit;limit=doubledLimit;push(it);break;default:// DROP
}}},take:take,flush:flush}}var none=function none(){return zeroBuffer},fixed=function fixed(limit){return ringBuffer(limit,ON_OVERFLOW_THROW)},dropping=function dropping(limit){return ringBuffer(limit,ON_OVERFLOW_DROP)},sliding=function sliding(limit){return ringBuffer(limit,ON_OVERFLOW_SLIDE)},expanding=function expanding(initialSize){return ringBuffer(initialSize,ON_OVERFLOW_EXPAND)},buffers=/*#__PURE__*/Object.freeze({__proto__:null,none:none,fixed:fixed,dropping:dropping,sliding:sliding,expanding:expanding}),TAKE="TAKE",PUT="PUT",ALL="ALL",RACE="RACE",CALL="CALL",CPS="CPS",FORK="FORK",JOIN="JOIN",CANCEL$1="CANCEL",SELECT="SELECT",ACTION_CHANNEL="ACTION_CHANNEL",CANCELLED="CANCELLED",FLUSH="FLUSH",GET_CONTEXT="GET_CONTEXT",SET_CONTEXT="SET_CONTEXT",effectTypes=/*#__PURE__*/Object.freeze({__proto__:null,TAKE:TAKE,PUT:PUT,ALL:ALL,RACE:RACE,CALL:CALL,CPS:CPS,FORK:FORK,JOIN:JOIN,CANCEL:CANCEL$1,SELECT:SELECT,ACTION_CHANNEL:ACTION_CHANNEL,CANCELLED:CANCELLED,FLUSH:FLUSH,GET_CONTEXT:GET_CONTEXT,SET_CONTEXT:SET_CONTEXT}),TEST_HINT="\n(HINT: if you are getting these errors in tests, consider using createMockTask from @redux-saga/testing-utils)",makeEffect=function makeEffect(type,payload){var _ref;return _ref={},_ref[IO]=!0,_ref.combinator=!1,_ref.type=type,_ref.payload=payload,_ref},isForkEffect=function isForkEffect(eff){return effect(eff)&&eff.type===FORK},detach=function detach(eff){if("production"!==process.env.NODE_ENV){check(eff,isForkEffect,"detach(eff): argument must be a fork effect")}return makeEffect(FORK,_extends({},eff.payload,{detached:!0}))};function take(patternOrChannel,multicastPattern){if(void 0===patternOrChannel){patternOrChannel="*"}if("production"!==process.env.NODE_ENV&&arguments.length){check(arguments[0],notUndef,"take(patternOrChannel): patternOrChannel is undefined")}if(pattern(patternOrChannel)){return makeEffect(TAKE,{pattern:patternOrChannel})}if(multicast(patternOrChannel)&&notUndef(multicastPattern)&&pattern(multicastPattern)){return makeEffect(TAKE,{channel:patternOrChannel,pattern:multicastPattern})}if(channel(patternOrChannel)){return makeEffect(TAKE,{channel:patternOrChannel})}if("production"!==process.env.NODE_ENV){throw new Error("take(patternOrChannel): argument "+patternOrChannel+" is not valid channel or a valid pattern")}}var takeMaybe=function takeMaybe(){var eff=take.apply(void 0,arguments);eff.payload.maybe=!0;return eff};function put(channel$1,action){if("production"!==process.env.NODE_ENV){if(1<arguments.length){check(channel$1,notUndef,"put(channel, action): argument channel is undefined");check(channel$1,channel,"put(channel, action): argument "+channel$1+" is not a valid channel");check(action,notUndef,"put(channel, action): argument action is undefined")}else{check(channel$1,notUndef,"put(action): argument action is undefined")}}if(undef(action)){action=channel$1;// `undefined` instead of `null` to make default parameter work
channel$1=void 0}return makeEffect(PUT,{channel:channel$1,action:action})}var putResolve=function putResolve(){var eff=put.apply(void 0,arguments);eff.payload.resolve=!0;return eff};function all(effects){var eff=makeEffect(ALL,effects);eff.combinator=!0;return eff}function race(effects){var eff=makeEffect(RACE,effects);eff.combinator=!0;return eff}// this match getFnCallDescriptor logic
var validateFnDescriptor=function validateFnDescriptor(effectName,fnDescriptor){check(fnDescriptor,notUndef,effectName+": argument fn is undefined or null");if(func(fnDescriptor)){return}var context=null,fn;if(array(fnDescriptor)){context=fnDescriptor[0];fn=fnDescriptor[1];check(fn,notUndef,effectName+": argument of type [context, fn] has undefined or null `fn`")}else if(object(fnDescriptor)){context=fnDescriptor.context;fn=fnDescriptor.fn;check(fn,notUndef,effectName+": argument of type {context, fn} has undefined or null `fn`")}else{check(fnDescriptor,func,effectName+": argument fn is not function");return}if(context&&string(fn)){check(context[fn],func,effectName+": context arguments has no such method - \""+fn+"\"");return}check(fn,func,effectName+": unpacked fn argument (from [context, fn] or {context, fn}) is not a function")};function getFnCallDescriptor(fnDescriptor,args){var context=null,fn;if(func(fnDescriptor)){fn=fnDescriptor}else{if(array(fnDescriptor)){context=fnDescriptor[0];fn=fnDescriptor[1]}else{context=fnDescriptor.context;fn=fnDescriptor.fn}if(context&&string(fn)&&func(context[fn])){fn=context[fn]}}return{context:context,fn:fn,args:args}}var isNotDelayEffect=function isNotDelayEffect(fn){return fn!==delay};function call(fnDescriptor){for(var _len=arguments.length,args=Array(1<_len?_len-1:0),_key=1;_key<_len;_key++){args[_key-1]=arguments[_key]}if("production"!==process.env.NODE_ENV){var arg0="number"===typeof args[0]?args[0]:"ms";check(fnDescriptor,isNotDelayEffect,"instead of writing `yield call(delay, "+arg0+")` where delay is an effect from `redux-saga/effects` you should write `yield delay("+arg0+")`");validateFnDescriptor("call",fnDescriptor)}return makeEffect(CALL,getFnCallDescriptor(fnDescriptor,args))}function apply(context,fn,args){if(void 0===args){args=[]}var fnDescriptor=[context,fn];if("production"!==process.env.NODE_ENV){validateFnDescriptor("apply",fnDescriptor)}return makeEffect(CALL,getFnCallDescriptor([context,fn],args))}function cps(fnDescriptor){if("production"!==process.env.NODE_ENV){validateFnDescriptor("cps",fnDescriptor)}for(var _len2=arguments.length,args=Array(1<_len2?_len2-1:0),_key2=1;_key2<_len2;_key2++){args[_key2-1]=arguments[_key2]}return makeEffect(CPS,getFnCallDescriptor(fnDescriptor,args))}function fork(fnDescriptor){if("production"!==process.env.NODE_ENV){validateFnDescriptor("fork",fnDescriptor);check(fnDescriptor,function(arg){return!effect(arg)},"fork: argument must not be an effect")}for(var _len3=arguments.length,args=Array(1<_len3?_len3-1:0),_key3=1;_key3<_len3;_key3++){args[_key3-1]=arguments[_key3]}return makeEffect(FORK,getFnCallDescriptor(fnDescriptor,args))}function spawn(fnDescriptor){if("production"!==process.env.NODE_ENV){validateFnDescriptor("spawn",fnDescriptor)}for(var _len4=arguments.length,args=Array(1<_len4?_len4-1:0),_key4=1;_key4<_len4;_key4++){args[_key4-1]=arguments[_key4]}return detach(fork.apply(void 0,[fnDescriptor].concat(args)))}function join(taskOrTasks){if("production"!==process.env.NODE_ENV){if(1<arguments.length){throw new Error("join(...tasks) is not supported any more. Please use join([...tasks]) to join multiple tasks.")}if(array(taskOrTasks)){taskOrTasks.forEach(function(t){check(t,task,"join([...tasks]): argument "+t+" is not a valid Task object "+TEST_HINT)})}else{check(taskOrTasks,task,"join(task): argument "+taskOrTasks+" is not a valid Task object "+TEST_HINT)}}return makeEffect(JOIN,taskOrTasks)}function cancel(taskOrTasks){if(void 0===taskOrTasks){taskOrTasks=SELF_CANCELLATION}if("production"!==process.env.NODE_ENV){if(1<arguments.length){throw new Error("cancel(...tasks) is not supported any more. Please use cancel([...tasks]) to cancel multiple tasks.")}if(array(taskOrTasks)){taskOrTasks.forEach(function(t){check(t,task,"cancel([...tasks]): argument "+t+" is not a valid Task object "+TEST_HINT)})}else if(taskOrTasks!==SELF_CANCELLATION&&notUndef(taskOrTasks)){check(taskOrTasks,task,"cancel(task): argument "+taskOrTasks+" is not a valid Task object "+TEST_HINT)}}return makeEffect(CANCEL$1,taskOrTasks)}function select(selector){if(void 0===selector){selector=identity}for(var _len5=arguments.length,args=Array(1<_len5?_len5-1:0),_key5=1;_key5<_len5;_key5++){args[_key5-1]=arguments[_key5]}if("production"!==process.env.NODE_ENV&&arguments.length){check(arguments[0],notUndef,"select(selector, [...]): argument selector is undefined");check(selector,func,"select(selector, [...]): argument "+selector+" is not a function")}return makeEffect(SELECT,{selector:selector,args:args})}/**
    channel(pattern, [buffer])    => creates a proxy channel for store actions
  **/function actionChannel(pattern$1,buffer$1){if("production"!==process.env.NODE_ENV){check(pattern$1,pattern,"actionChannel(pattern,...): argument pattern is not valid");if(1<arguments.length){check(buffer$1,notUndef,"actionChannel(pattern, buffer): argument buffer is undefined");check(buffer$1,buffer,"actionChannel(pattern, buffer): argument "+buffer$1+" is not a valid buffer")}}return makeEffect(ACTION_CHANNEL,{pattern:pattern$1,buffer:buffer$1})}function cancelled(){return makeEffect(CANCELLED,{})}function flush(channel$1){if("production"!==process.env.NODE_ENV){check(channel$1,channel,"flush(channel): argument "+channel$1+" is not valid channel")}return makeEffect(FLUSH,channel$1)}function getContext(prop){if("production"!==process.env.NODE_ENV){check(prop,string,"getContext(prop): argument "+prop+" is not a string")}return makeEffect(GET_CONTEXT,prop)}function setContext(props){if("production"!==process.env.NODE_ENV){check(props,object,createSetContextWarning(null,props))}return makeEffect(SET_CONTEXT,props)}var delay=/*#__PURE__*/call.bind(null,delayP),io6de156f3={$:apply,A:ALL,B:logError,C:CALL,D:wrapSagaDispatch,E:identity,F:FORK,G:GET_CONTEXT,H:buffers,I:detach,J:JOIN,K:take,L:fork,M:cancel,N:call,O:actionChannel,P:PUT,Q:sliding,R:RACE,S:SELECT,T:TAKE,U:delay,V:race,W:effectTypes,X:takeMaybe,Y:put,Z:putResolve,_:all,a:CPS,a0:cps,a1:spawn,a2:join,a3:select,a4:cancelled,a5:flush,a6:getContext,a7:setContext,b:CANCEL$1,c:check,d:ACTION_CHANNEL,e:expanding,f:CANCELLED,g:FLUSH,h:SET_CONTEXT,i:internalErr,j:getMetaInfo,k:kTrue,l:createAllStyleChildCallbacks,m:createEmptyArray,n:none,o:once,p:assignWithSymbols,q:makeIterator,r:remove,s:shouldComplete,get t(){return noop},u:flatMap,v:getLocation,w:createSetContextWarning,x:asyncIteratorSymbol,y:shouldCancel,z:shouldTerminate};function symbolObservablePonyfill(root){var result,Symbol=root.Symbol;if("function"===typeof Symbol){if(Symbol.observable){result=Symbol.observable}else{result=Symbol("observable");Symbol.observable=result}}else{result="@@observable"}return result};var ponyfill={default:symbolObservablePonyfill},root;if("undefined"!==typeof self){root=self}else if("undefined"!==typeof window){root=window}else if("undefined"!==typeof global){root=global}else if("undefined"!==typeof module){root=module}else{root=Function("return this")()}var result=symbolObservablePonyfill(root),index={default:result},randomString=function randomString(){return Math.random().toString(36).substring(7).split("").join(".")},ActionTypes={INIT:"@@redux/INIT"+randomString(),REPLACE:"@@redux/REPLACE"+randomString(),PROBE_UNKNOWN_ACTION:function PROBE_UNKNOWN_ACTION(){return"@@redux/PROBE_UNKNOWN_ACTION"+randomString()}};/**
    * @param {any} obj The object to inspect.
    * @returns {boolean} True if the argument appears to be a plain object.
    */function isPlainObject(obj){if("object"!==typeof obj||null===obj)return!1;var proto=obj;while(null!==Object.getPrototypeOf(proto)){proto=Object.getPrototypeOf(proto)}return Object.getPrototypeOf(obj)===proto}/**
   * Creates a Redux store that holds the state tree.
   * The only way to change the data in the store is to call `dispatch()` on it.
   *
   * There should only be a single store in your app. To specify how different
   * parts of the state tree respond to actions, you may combine several reducers
   * into a single reducer function by using `combineReducers`.
   *
   * @param {Function} reducer A function that returns the next state tree, given
   * the current state tree and the action to handle.
   *
   * @param {any} [preloadedState] The initial state. You may optionally specify it
   * to hydrate the state from the server in universal apps, or to restore a
   * previously serialized user session.
   * If you use `combineReducers` to produce the root reducer function, this must be
   * an object with the same shape as `combineReducers` keys.
   *
   * @param {Function} [enhancer] The store enhancer. You may optionally specify it
   * to enhance the store with third-party capabilities such as middleware,
   * time travel, persistence, etc. The only store enhancer that ships with Redux
   * is `applyMiddleware()`.
   *
   * @returns {Store} A Redux store that lets you read the state, dispatch actions
   * and subscribe to changes.
   */function createStore(reducer,preloadedState,enhancer){var _ref2;if("function"===typeof preloadedState&&"function"===typeof enhancer||"function"===typeof enhancer&&"function"===typeof arguments[3]){throw new Error("It looks like you are passing several store enhancers to "+"createStore(). This is not supported. Instead, compose them "+"together to a single function.")}if("function"===typeof preloadedState&&"undefined"===typeof enhancer){enhancer=preloadedState;preloadedState=void 0}if("undefined"!==typeof enhancer){if("function"!==typeof enhancer){throw new Error("Expected the enhancer to be a function.")}return enhancer(createStore)(reducer,preloadedState)}if("function"!==typeof reducer){throw new Error("Expected the reducer to be a function.")}var currentReducer=reducer,currentState=preloadedState,currentListeners=[],nextListeners=currentListeners,isDispatching=!1;/**
                              * This makes a shallow copy of currentListeners so we can use
                              * nextListeners as a temporary list while dispatching.
                              *
                              * This prevents any bugs around consumers calling
                              * subscribe/unsubscribe in the middle of a dispatch.
                              */function ensureCanMutateNextListeners(){if(nextListeners===currentListeners){nextListeners=currentListeners.slice()}}/**
     * Reads the state tree managed by the store.
     *
     * @returns {any} The current state tree of your application.
     */function getState(){if(isDispatching){throw new Error("You may not call store.getState() while the reducer is executing. "+"The reducer has already received the state as an argument. "+"Pass it down from the top reducer instead of reading it from the store.")}return currentState}/**
     * Adds a change listener. It will be called any time an action is dispatched,
     * and some part of the state tree may potentially have changed. You may then
     * call `getState()` to read the current state tree inside the callback.
     *
     * You may call `dispatch()` from a change listener, with the following
     * caveats:
     *
     * 1. The subscriptions are snapshotted just before every `dispatch()` call.
     * If you subscribe or unsubscribe while the listeners are being invoked, this
     * will not have any effect on the `dispatch()` that is currently in progress.
     * However, the next `dispatch()` call, whether nested or not, will use a more
     * recent snapshot of the subscription list.
     *
     * 2. The listener should not expect to see all state changes, as the state
     * might have been updated multiple times during a nested `dispatch()` before
     * the listener is called. It is, however, guaranteed that all subscribers
     * registered before the `dispatch()` started will be called with the latest
     * state by the time it exits.
     *
     * @param {Function} listener A callback to be invoked on every dispatch.
     * @returns {Function} A function to remove this change listener.
     */function subscribe(listener){if("function"!==typeof listener){throw new Error("Expected the listener to be a function.")}if(isDispatching){throw new Error("You may not call store.subscribe() while the reducer is executing. "+"If you would like to be notified after the store has been updated, subscribe from a "+"component and invoke store.getState() in the callback to access the latest state. "+"See https://redux.js.org/api-reference/store#subscribelistener for more details.")}var isSubscribed=!0;ensureCanMutateNextListeners();nextListeners.push(listener);return function unsubscribe(){if(!isSubscribed){return}if(isDispatching){throw new Error("You may not unsubscribe from a store listener while the reducer is executing. "+"See https://redux.js.org/api-reference/store#subscribelistener for more details.")}isSubscribed=!1;ensureCanMutateNextListeners();var index=nextListeners.indexOf(listener);nextListeners.splice(index,1);currentListeners=null}}/**
     * Dispatches an action. It is the only way to trigger a state change.
     *
     * The `reducer` function, used to create the store, will be called with the
     * current state tree and the given `action`. Its return value will
     * be considered the **next** state of the tree, and the change listeners
     * will be notified.
     *
     * The base implementation only supports plain object actions. If you want to
     * dispatch a Promise, an Observable, a thunk, or something else, you need to
     * wrap your store creating function into the corresponding middleware. For
     * example, see the documentation for the `redux-thunk` package. Even the
     * middleware will eventually dispatch plain object actions using this method.
     *
     * @param {Object} action A plain object representing “what changed”. It is
     * a good idea to keep actions serializable so you can record and replay user
     * sessions, or use the time travelling `redux-devtools`. An action must have
     * a `type` property which may not be `undefined`. It is a good idea to use
     * string constants for action types.
     *
     * @returns {Object} For convenience, the same action object you dispatched.
     *
     * Note that, if you use a custom middleware, it may wrap `dispatch()` to
     * return something else (for example, a Promise you can await).
     */function dispatch(action){if(!isPlainObject(action)){throw new Error("Actions must be plain objects. "+"Use custom middleware for async actions.")}if("undefined"===typeof action.type){throw new Error("Actions may not have an undefined \"type\" property. "+"Have you misspelled a constant?")}if(isDispatching){throw new Error("Reducers may not dispatch actions.")}try{isDispatching=!0;currentState=currentReducer(currentState,action)}finally{isDispatching=!1}for(var listeners=currentListeners=nextListeners,i=0,listener;i<listeners.length;i++){listener=listeners[i];listener()}return action}/**
     * Replaces the reducer currently used by the store to calculate the state.
     *
     * You might need this if your app implements code splitting and you want to
     * load some of the reducers dynamically. You might also need this if you
     * implement a hot reloading mechanism for Redux.
     *
     * @param {Function} nextReducer The reducer for the store to use instead.
     * @returns {void}
     */function replaceReducer(nextReducer){if("function"!==typeof nextReducer){throw new Error("Expected the nextReducer to be a function.")}currentReducer=nextReducer;// This action has a similiar effect to ActionTypes.INIT.
// Any reducers that existed in both the new and old rootReducer
// will receive the previous state. This effectively populates
// the new state tree with any relevant data from the old one.
dispatch({type:ActionTypes.REPLACE})}/**
     * Interoperability point for observable/reactive libraries.
     * @returns {observable} A minimal observable of state changes.
     * For more information, see the observable proposal:
     * https://github.com/tc39/proposal-observable
     */function observable(){var _ref,outerSubscribe=subscribe;return _ref={/**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */subscribe:function subscribe(observer){if("object"!==typeof observer||null===observer){throw new TypeError("Expected the observer to be an object.")}function observeState(){if(observer.next){observer.next(getState())}}observeState();var unsubscribe=outerSubscribe(observeState);return{unsubscribe:unsubscribe}}},_ref[result]=function(){return this},_ref}// When a store is created, an "INIT" action is dispatched so that every
// reducer returns their initial state. This effectively populates
// the initial state tree.
dispatch({type:ActionTypes.INIT});return _ref2={dispatch:dispatch,subscribe:subscribe,getState:getState,replaceReducer:replaceReducer},_ref2[result]=observable,_ref2}/**
   * Prints a warning in the console if it exists.
   *
   * @param {String} message The warning message.
   * @returns {void}
   */function warning(message){/* eslint-disable no-console */if("undefined"!==typeof console&&"function"===typeof console.error){console.error(message)}/* eslint-enable no-console */try{// This error was thrown as a convenience so that if you enable
// "break on all exceptions" in your console,
// it would pause the execution at this line.
throw new Error(message)}catch(e){}// eslint-disable-line no-empty
}function getUndefinedStateErrorMessage(key,action){var actionType=action&&action.type,actionDescription=actionType&&"action \""+(actionType+"")+"\""||"an action";return"Given "+actionDescription+", reducer \""+key+"\" returned undefined. "+"To ignore an action, you must explicitly return the previous state. "+"If you want this reducer to hold no value, you can return null instead of undefined."}function getUnexpectedStateShapeWarningMessage(inputState,reducers,action,unexpectedKeyCache){var reducerKeys=Object.keys(reducers),argumentName=action&&action.type===ActionTypes.INIT?"preloadedState argument passed to createStore":"previous state received by the reducer";if(0===reducerKeys.length){return"Store does not have a valid reducer. Make sure the argument passed "+"to combineReducers is an object whose values are reducers."}if(!isPlainObject(inputState)){return"The "+argumentName+" has unexpected type of \""+{}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1]+"\". Expected argument to be an object with the following "+("keys: \""+reducerKeys.join("\", \"")+"\"")}var unexpectedKeys=Object.keys(inputState).filter(function(key){return!reducers.hasOwnProperty(key)&&!unexpectedKeyCache[key]});unexpectedKeys.forEach(function(key){unexpectedKeyCache[key]=!0});if(action&&action.type===ActionTypes.REPLACE)return;if(0<unexpectedKeys.length){return"Unexpected "+(1<unexpectedKeys.length?"keys":"key")+" "+("\""+unexpectedKeys.join("\", \"")+"\" found in "+argumentName+". ")+"Expected to find one of the known reducer keys instead: "+("\""+reducerKeys.join("\", \"")+"\". Unexpected keys will be ignored.")}}function assertReducerShape(reducers){Object.keys(reducers).forEach(function(key){var reducer=reducers[key],initialState=reducer(void 0,{type:ActionTypes.INIT});if("undefined"===typeof initialState){throw new Error("Reducer \""+key+"\" returned undefined during initialization. "+"If the state passed to the reducer is undefined, you must "+"explicitly return the initial state. The initial state may "+"not be undefined. If you don't want to set a value for this reducer, "+"you can use null instead of undefined.")}if("undefined"===typeof reducer(void 0,{type:ActionTypes.PROBE_UNKNOWN_ACTION()})){throw new Error("Reducer \""+key+"\" returned undefined when probed with a random type. "+("Don't try to handle "+ActionTypes.INIT+" or other actions in \"redux/*\" ")+"namespace. They are considered private. Instead, you must return the "+"current state for any unknown actions, unless it is undefined, "+"in which case you must return the initial state, regardless of the "+"action type. The initial state may not be undefined, but can be null.")}})}/**
   * Turns an object whose values are different reducer functions, into a single
   * reducer function. It will call every child reducer, and gather their results
   * into a single state object, whose keys correspond to the keys of the passed
   * reducer functions.
   *
   * @param {Object} reducers An object whose values correspond to different
   * reducer functions that need to be combined into one. One handy way to obtain
   * it is to use ES6 `import * as reducers` syntax. The reducers may never return
   * undefined for any action. Instead, they should return their initial state
   * if the state passed to them was undefined, and the current state for any
   * unrecognized action.
   *
   * @returns {Function} A reducer function that invokes every reducer inside the
   * passed object, and builds a state object with the same shape.
   */function combineReducers(reducers){for(var reducerKeys=Object.keys(reducers),finalReducers={},i=0,key;i<reducerKeys.length;i++){key=reducerKeys[i];if("production"!==process.env.NODE_ENV){if("undefined"===typeof reducers[key]){warning("No reducer provided for key \""+key+"\"")}}if("function"===typeof reducers[key]){finalReducers[key]=reducers[key]}}var finalReducerKeys=Object.keys(finalReducers),unexpectedKeyCache;// This is used to make sure we don't warn about the same
// keys multiple times.
if("production"!==process.env.NODE_ENV){unexpectedKeyCache={}}var shapeAssertionError;try{assertReducerShape(finalReducers)}catch(e){shapeAssertionError=e}return function combination(state,action){if(void 0===state){state={}}if(shapeAssertionError){throw shapeAssertionError}if("production"!==process.env.NODE_ENV){var warningMessage=getUnexpectedStateShapeWarningMessage(state,finalReducers,action,unexpectedKeyCache);if(warningMessage){warning(warningMessage)}}for(var hasChanged=!1,nextState={},_i=0;_i<finalReducerKeys.length;_i++){var _key=finalReducerKeys[_i],reducer=finalReducers[_key],previousStateForKey=state[_key],nextStateForKey=reducer(previousStateForKey,action);if("undefined"===typeof nextStateForKey){var errorMessage=getUndefinedStateErrorMessage(_key,action);throw new Error(errorMessage)}nextState[_key]=nextStateForKey;hasChanged=hasChanged||nextStateForKey!==previousStateForKey}hasChanged=hasChanged||finalReducerKeys.length!==Object.keys(state).length;return hasChanged?nextState:state}}function bindActionCreator(actionCreator,dispatch){return function(){return dispatch(actionCreator.apply(this,arguments))}}/**
   * Turns an object whose values are action creators, into an object with the
   * same keys, but with every function wrapped into a `dispatch` call so they
   * may be invoked directly. This is just a convenience method, as you can call
   * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
   *
   * For convenience, you can also pass an action creator as the first argument,
   * and get a dispatch wrapped function in return.
   *
   * @param {Function|Object} actionCreators An object whose values are action
   * creator functions. One handy way to obtain it is to use ES6 `import * as`
   * syntax. You may also pass a single function.
   *
   * @param {Function} dispatch The `dispatch` function available on your Redux
   * store.
   *
   * @returns {Function|Object} The object mimicking the original object, but with
   * every action creator wrapped into the `dispatch` call. If you passed a
   * function as `actionCreators`, the return value will also be a single
   * function.
   */function bindActionCreators(actionCreators,dispatch){if("function"===typeof actionCreators){return bindActionCreator(actionCreators,dispatch)}if("object"!==typeof actionCreators||null===actionCreators){throw new Error("bindActionCreators expected an object or a function, instead received "+(null===actionCreators?"null":typeof actionCreators)+". "+"Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?")}var boundActionCreators={};for(var key in actionCreators){var actionCreator=actionCreators[key];if("function"===typeof actionCreator){boundActionCreators[key]=bindActionCreator(actionCreator,dispatch)}}return boundActionCreators}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0})}else{obj[key]=value}return obj}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){keys.push.apply(keys,Object.getOwnPropertySymbols(object))}if(enumerableOnly)keys=keys.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable});return keys}function _objectSpread2(target){for(var i=1,source;i<arguments.length;i++){source=null!=arguments[i]?arguments[i]:{};if(i%2){ownKeys(source,!0).forEach(function(key){_defineProperty(target,key,source[key])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{ownKeys(source).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}}return target}/**
   * Composes single-argument functions from right to left. The rightmost
   * function can take multiple arguments as it provides the signature for
   * the resulting composite function.
   *
   * @param {...Function} funcs The functions to compose.
   * @returns {Function} A function obtained by composing the argument functions
   * from right to left. For example, compose(f, g, h) is identical to doing
   * (...args) => f(g(h(...args))).
   */function compose(){for(var _len=arguments.length,funcs=Array(_len),_key=0;_key<_len;_key++){funcs[_key]=arguments[_key]}if(0===funcs.length){return function(arg){return arg}}if(1===funcs.length){return funcs[0]}return funcs.reduce(function(a,b){return function(){return a(b.apply(void 0,arguments))}})}/**
   * Creates a store enhancer that applies middleware to the dispatch method
   * of the Redux store. This is handy for a variety of tasks, such as expressing
   * asynchronous actions in a concise manner, or logging every action payload.
   *
   * See `redux-thunk` package as an example of the Redux middleware.
   *
   * Because middleware is potentially asynchronous, this should be the first
   * store enhancer in the composition chain.
   *
   * Note that each middleware will be given the `dispatch` and `getState` functions
   * as named arguments.
   *
   * @param {...Function} middlewares The middleware chain to be applied.
   * @returns {Function} A store enhancer applying the middleware.
   */function applyMiddleware(){for(var _len=arguments.length,middlewares=Array(_len),_key=0;_key<_len;_key++){middlewares[_key]=arguments[_key]}return function(createStore){return function(){var store=createStore.apply(void 0,arguments),_dispatch=function dispatch(){throw new Error("Dispatching while constructing your middleware is not allowed. "+"Other middleware would not be applied to this dispatch.")},middlewareAPI={getState:store.getState,dispatch:function dispatch(){return _dispatch.apply(void 0,arguments)}},chain=middlewares.map(function(middleware){return middleware(middlewareAPI)});_dispatch=compose.apply(void 0,chain)(store.dispatch);return _objectSpread2({},store,{dispatch:_dispatch})}}}/*
   * This is a dummy function to check if the function name has been altered by minification.
   * If the function has been minified and NODE_ENV !== 'production', warn the user.
   */function isCrushed(){}if("production"!==process.env.NODE_ENV&&"string"===typeof isCrushed.name&&"isCrushed"!==isCrushed.name){warning("You are currently using minified code outside of NODE_ENV === \"production\". "+"This means that you are running a slower development build of Redux. "+"You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify "+"or setting mode to production in webpack (https://webpack.js.org/concepts/mode/) "+"to ensure you have the correct code for your production build.")}var redux={__DO_NOT_USE__ActionTypes:ActionTypes,applyMiddleware:applyMiddleware,bindActionCreators:bindActionCreators,combineReducers:combineReducers,compose:compose,createStore:createStore};function deferred(){var def={};def.promise=new Promise(function(resolve,reject){def.resolve=resolve;def.reject=reject});return def}function arrayOfDeferred(length){for(var arr=[],i=0;i<length;i++){arr.push(deferred())}return arr}var reduxSagaDeferred_esm={default:deferred,arrayOfDeferred:arrayOfDeferred},queue=[],semaphore=0;/**
                     Executes a task 'atomically'. Tasks scheduled during this execution will be queued
                     and flushed after this task has finished (assuming the scheduler endup in a released
                     state).
                   **/function exec(task){try{suspend();task()}finally{release()}}/**
    Executes or queues a task depending on the state of the scheduler (`suspended` or `released`)
  **/function asap(task){queue.push(task);if(!semaphore){suspend();flush$1()}}/**
   * Puts the scheduler in a `suspended` state and executes a task immediately.
   */function immediately(task){try{suspend();return task()}finally{flush$1()}}/**
    Puts the scheduler in a `suspended` state. Scheduled tasks will be queued until the
    scheduler is released.
  **/function suspend(){semaphore++}/**
    Puts the scheduler in a `released` state.
  **/function release(){semaphore--}/**
    Releases the current lock. Executes all queued tasks if the scheduler is in the released state.
  **/function flush$1(){release();var task;while(!semaphore&&(task=queue.shift())!==void 0){exec(task)}}var array$1=function array(patterns){return function(input){return patterns.some(function(p){return matcher(p)(input)})}},predicate=function predicate(_predicate){return function(input){return _predicate(input)}},string$1=function string(pattern){return function(input){return input.type===pattern+""}},symbol$1=function symbol(pattern){return function(input){return input.type===pattern}},wildcard=function wildcard(){return kTrue};function matcher(pattern){// prettier-ignore
var matcherCreator="*"===pattern?wildcard:string(pattern)?string$1:array(pattern)?array$1:stringableFunc(pattern)?string$1:func(pattern)?predicate:symbol(pattern)?symbol$1:null;if(null===matcherCreator){throw new Error("invalid pattern: "+pattern)}return matcherCreator(pattern)}var END={type:CHANNEL_END_TYPE},isEnd=function isEnd(a){return a&&a.type===CHANNEL_END_TYPE},CLOSED_CHANNEL_WITH_TAKERS="Cannot have a closed channel with pending takers",INVALID_BUFFER="invalid buffer passed to channel factory function",UNDEFINED_INPUT_ERROR="Saga or channel was provided with an undefined action\nHints:\n  - check that your Action Creator returns a non-undefined value\n  - if the Saga was started using runSaga, check that your subscribe source provides the action to its listeners";function channel$1(buffer$1){if(void 0===buffer$1){buffer$1=expanding()}var closed=!1,takers=[];if("production"!==process.env.NODE_ENV){check(buffer$1,buffer,INVALID_BUFFER)}function checkForbiddenStates(){if(closed&&takers.length){throw internalErr(CLOSED_CHANNEL_WITH_TAKERS)}if(takers.length&&!buffer$1.isEmpty()){throw internalErr("Cannot have pending takers with non empty buffer")}}function put(input){if("production"!==process.env.NODE_ENV){checkForbiddenStates();check(input,notUndef,UNDEFINED_INPUT_ERROR)}if(closed){return}if(0===takers.length){return buffer$1.put(input)}var cb=takers.shift();cb(input)}function take(cb){if("production"!==process.env.NODE_ENV){checkForbiddenStates();check(cb,func,"channel.take's callback must be a function")}if(closed&&buffer$1.isEmpty()){cb(END)}else if(!buffer$1.isEmpty()){cb(buffer$1.take())}else{takers.push(cb);cb.cancel=function(){remove(takers,cb)}}}function flush(cb){if("production"!==process.env.NODE_ENV){checkForbiddenStates();check(cb,func,"channel.flush' callback must be a function")}if(closed&&buffer$1.isEmpty()){cb(END);return}cb(buffer$1.flush())}function close(){if("production"!==process.env.NODE_ENV){checkForbiddenStates()}if(closed){return}closed=!0;var arr=takers;takers=[];for(var i=0,len=arr.length,taker;i<len;i++){taker=arr[i];taker(END)}}return{take:take,put:put,flush:flush,close:close}}function eventChannel(subscribe,buffer){if(void 0===buffer){buffer=none()}var closed=!1,unsubscribe,chan=channel$1(buffer),close=function close(){if(closed){return}closed=!0;if(func(unsubscribe)){unsubscribe()}chan.close()};unsubscribe=subscribe(function(input){if(isEnd(input)){close();return}chan.put(input)});if("production"!==process.env.NODE_ENV){check(unsubscribe,func,"in eventChannel: subscribe should return a function to unsubscribe")}unsubscribe=once(unsubscribe);if(closed){unsubscribe()}return{take:chan.take,flush:chan.flush,close:close}}function multicastChannel(){var _ref,closed=!1,currentTakers=[],nextTakers=currentTakers;function checkForbiddenStates(){if(closed&&nextTakers.length){throw internalErr(CLOSED_CHANNEL_WITH_TAKERS)}}var ensureCanMutateNextTakers=function ensureCanMutateNextTakers(){if(nextTakers!==currentTakers){return}nextTakers=currentTakers.slice()},close=function close(){if("production"!==process.env.NODE_ENV){checkForbiddenStates()}closed=!0;var takers=currentTakers=nextTakers;nextTakers=[];takers.forEach(function(taker){taker(END)})};return _ref={},_ref[MULTICAST]=!0,_ref.put=function put(input){if("production"!==process.env.NODE_ENV){checkForbiddenStates();check(input,notUndef,UNDEFINED_INPUT_ERROR)}if(closed){return}if(isEnd(input)){close();return}for(var takers=currentTakers=nextTakers,i=0,len=takers.length,taker;i<len;i++){taker=takers[i];if(taker[MATCH](input)){taker.cancel();taker(input)}}},_ref.take=function take(cb,matcher){if(void 0===matcher){matcher=wildcard}if("production"!==process.env.NODE_ENV){checkForbiddenStates()}if(closed){cb(END);return}cb[MATCH]=matcher;ensureCanMutateNextTakers();nextTakers.push(cb);cb.cancel=once(function(){ensureCanMutateNextTakers();remove(nextTakers,cb)})},_ref.close=close,_ref}function stdChannel(){var chan=multicastChannel(),put=chan.put;chan.put=function(input){if(input[SAGA_ACTION]){put(input);return}asap(function(){put(input)})};return chan}var RUNNING=0,CANCELLED$1=1,ABORTED=2,DONE=3;function resolvePromise(promise,cb){var cancelPromise=promise[CANCEL];if(func(cancelPromise)){cb.cancel=cancelPromise}promise.then(cb,function(error){cb(error,!0)})}var current=0,nextSagaId=function(){return++current},_effectRunnerMap;function getIteratorMetaInfo(iterator,fn){if(iterator.isSagaIterator){return{name:iterator.meta.name}}return getMetaInfo(fn)}function createTaskIterator(_ref){var context=_ref.context,fn=_ref.fn,args=_ref.args;// catch synchronous failures; see #152 and #441
try{var result=fn.apply(context,args);// i.e. a generator function returns an iterator
if(iterator(result)){return result}var resolved=!1,next=function next(arg){if(!resolved){resolved=!0;// Only promises returned from fork will be interpreted. See #1573
return{value:result,done:!promise(result)}}else{return{value:arg,done:!0}}};return makeIterator(next)}catch(err){// do not bubble up synchronous failures for detached forks
// instead create a failed task. See #152 and #441
return makeIterator(function(){throw err})}}function runPutEffect(env,_ref2,cb){var channel=_ref2.channel,action=_ref2.action,resolve=_ref2.resolve;/**
                                Schedule the put in case another saga is holding a lock.
                                The put will be executed atomically. ie nested puts will execute after
                                this put has terminated.
                                **/asap(function(){var result;try{result=(channel?channel.put:env.dispatch)(action)}catch(error){cb(error,!0);return}if(resolve&&promise(result)){resolvePromise(result,cb)}else{cb(result)}});// Put effects are non cancellables
}function runTakeEffect(env,_ref3,cb){var _ref3$channel=_ref3.channel,channel=void 0===_ref3$channel?env.channel:_ref3$channel,pattern=_ref3.pattern,maybe=_ref3.maybe,takeCb=function takeCb(input){if(input instanceof Error){cb(input,!0);return}if(isEnd(input)&&!maybe){cb(TERMINATE);return}cb(input)};try{channel.take(takeCb,notUndef(pattern)?matcher(pattern):null)}catch(err){cb(err,!0);return}cb.cancel=takeCb.cancel}function runCallEffect(env,_ref4,cb,_ref5){var context=_ref4.context,fn=_ref4.fn,args=_ref4.args,task=_ref5.task;// catch synchronous failures; see #152
try{var result=fn.apply(context,args);if(promise(result)){resolvePromise(result,cb);return}if(iterator(result)){// resolve iterator
proc(env,result,task.context,current,getMetaInfo(fn),!1,cb);return}cb(result)}catch(error){cb(error,!0)}}function runCPSEffect(env,_ref6,cb){var context=_ref6.context,fn=_ref6.fn,args=_ref6.args;// CPS (ie node style functions) can define their own cancellation logic
// by setting cancel field on the cb
// catch synchronous failures; see #152
try{var cpsCb=function cpsCb(err,res){if(undef(err)){cb(res)}else{cb(err,!0)}};fn.apply(context,args.concat(cpsCb));if(cpsCb.cancel){cb.cancel=cpsCb.cancel}}catch(error){cb(error,!0)}}function runForkEffect(env,_ref7,cb,_ref8){var context=_ref7.context,fn=_ref7.fn,args=_ref7.args,detached=_ref7.detached,parent=_ref8.task,taskIterator=createTaskIterator({context:context,fn:fn,args:args}),meta=getIteratorMetaInfo(taskIterator,fn);immediately(function(){var child=proc(env,taskIterator,parent.context,current,meta,detached,void 0);if(detached){cb(child)}else{if(child.isRunning()){parent.queue.addTask(child);cb(child)}else if(child.isAborted()){parent.queue.abort(child.error())}else{cb(child)}}});// Fork effects are non cancellables
}function runJoinEffect(env,taskOrTasks,cb,_ref9){var task=_ref9.task,joinSingleTask=function joinSingleTask(taskToJoin,cb){if(taskToJoin.isRunning()){var joiner={task:task,cb:cb};cb.cancel=function(){if(taskToJoin.isRunning())remove(taskToJoin.joiners,joiner)};taskToJoin.joiners.push(joiner)}else{if(taskToJoin.isAborted()){cb(taskToJoin.error(),!0)}else{cb(taskToJoin.result())}}};if(array(taskOrTasks)){if(0===taskOrTasks.length){cb([]);return}var childCallbacks=createAllStyleChildCallbacks(taskOrTasks,cb);taskOrTasks.forEach(function(t,i){joinSingleTask(t,childCallbacks[i])})}else{joinSingleTask(taskOrTasks,cb)}}function cancelSingleTask(taskToCancel){if(taskToCancel.isRunning()){taskToCancel.cancel()}}function runCancelEffect(env,taskOrTasks,cb,_ref10){var task=_ref10.task;if(taskOrTasks===SELF_CANCELLATION){cancelSingleTask(task)}else if(array(taskOrTasks)){taskOrTasks.forEach(cancelSingleTask)}else{cancelSingleTask(taskOrTasks)}cb();// cancel effects are non cancellables
}function runAllEffect(env,effects,cb,_ref11){var digestEffect=_ref11.digestEffect,effectId=current,keys=Object.keys(effects);if(0===keys.length){cb(array(effects)?[]:{});return}var childCallbacks=createAllStyleChildCallbacks(effects,cb);keys.forEach(function(key){digestEffect(effects[key],effectId,childCallbacks[key],key)})}function runRaceEffect(env,effects,cb,_ref12){var digestEffect=_ref12.digestEffect,effectId=current,keys=Object.keys(effects),response=array(effects)?createEmptyArray(keys.length):{},childCbs={},completed=!1;keys.forEach(function(key){var chCbAtKey=function chCbAtKey(res,isErr){if(completed){return}if(isErr||shouldComplete(res)){// Race Auto cancellation
cb.cancel();cb(res,isErr)}else{cb.cancel();completed=!0;response[key]=res;cb(response)}};chCbAtKey.cancel=noop;childCbs[key]=chCbAtKey});cb.cancel=function(){// prevents unnecessary cancellation
if(!completed){completed=!0;keys.forEach(function(key){return childCbs[key].cancel()})}};keys.forEach(function(key){if(completed){return}digestEffect(effects[key],effectId,childCbs[key],key)})}function runSelectEffect(env,_ref13,cb){var selector=_ref13.selector,args=_ref13.args;try{var state=selector.apply(void 0,[env.getState()].concat(args));cb(state)}catch(error){cb(error,!0)}}function runChannelEffect(env,_ref14,cb){var pattern=_ref14.pattern,buffer=_ref14.buffer,chan=channel$1(buffer),match=matcher(pattern),taker=function taker(action){if(!isEnd(action)){env.channel.take(taker,match)}chan.put(action)},close=chan.close;chan.close=function(){taker.cancel();close()};env.channel.take(taker,match);cb(chan)}function runCancelledEffect(env,data,cb,_ref15){var task=_ref15.task;cb(task.isCancelled())}function runFlushEffect(env,channel,cb){channel.flush(cb)}function runGetContextEffect(env,prop,cb,_ref16){var task=_ref16.task;cb(task.context[prop])}function runSetContextEffect(env,props,cb,_ref17){var task=_ref17.task;assignWithSymbols(task.context,props);cb()}var effectRunnerMap=(_effectRunnerMap={},_effectRunnerMap[TAKE]=runTakeEffect,_effectRunnerMap[PUT]=runPutEffect,_effectRunnerMap[ALL]=runAllEffect,_effectRunnerMap[RACE]=runRaceEffect,_effectRunnerMap[CALL]=runCallEffect,_effectRunnerMap[CPS]=runCPSEffect,_effectRunnerMap[FORK]=runForkEffect,_effectRunnerMap[JOIN]=runJoinEffect,_effectRunnerMap[CANCEL$1]=runCancelEffect,_effectRunnerMap[SELECT]=runSelectEffect,_effectRunnerMap[ACTION_CHANNEL]=runChannelEffect,_effectRunnerMap[CANCELLED]=runCancelledEffect,_effectRunnerMap[FLUSH]=runFlushEffect,_effectRunnerMap[GET_CONTEXT]=runGetContextEffect,_effectRunnerMap[SET_CONTEXT]=runSetContextEffect,_effectRunnerMap);/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Used to track a parent task and its forks
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   In the fork model, forked tasks are attached by default to their parent
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   We model this using the concept of Parent task && main Task
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   main task is the main flow of the current Generator, the parent tasks is the
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   aggregation of the main tasks + all its forked tasks.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Thus the whole model represents an execution tree with multiple branches (vs the
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   linear execution tree in sequential (non parallel) programming)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   A parent tasks has the following semantics
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   - It completes if all its forks either complete or all cancelled
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   - If it's cancelled, all forks are cancelled as well
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   - It aborts if any uncaught error bubbles up from forks
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   - If it completes, the return value is the one returned by the main task
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   **/function forkQueue(mainTask,onAbort,cont){var tasks=[],result,completed=!1;addTask(mainTask);var getTasks=function getTasks(){return tasks};function abort(err){onAbort();cancelAll();cont(err,!0)}function addTask(task){tasks.push(task);task.cont=function(res,isErr){if(completed){return}remove(tasks,task);task.cont=noop;if(isErr){abort(res)}else{if(task===mainTask){result=res}if(!tasks.length){completed=!0;cont(result)}}}}function cancelAll(){if(completed){return}completed=!0;tasks.forEach(function(t){t.cont=noop;t.cancel()});tasks=[]}return{addTask:addTask,cancelAll:cancelAll,abort:abort,getTasks:getTasks}}// there can be only a single saga error created at any given moment
function formatLocation(fileName,lineNumber){return fileName+"?"+lineNumber}function effectLocationAsString(effect){var location=getLocation(effect);if(location){var code=location.code,fileName=location.fileName,lineNumber=location.lineNumber,source=code+"  "+formatLocation(fileName,lineNumber);return source}return""}function sagaLocationAsString(sagaMeta){var name=sagaMeta.name,location=sagaMeta.location;if(location){return name+"  "+formatLocation(location.fileName,location.lineNumber)}return name}function cancelledTasksAsString(sagaStack){var cancelledTasks=flatMap(function(i){return i.cancelledTasks},sagaStack);if(!cancelledTasks.length){return""}return["Tasks cancelled due to error:"].concat(cancelledTasks).join("\n")}var crashedEffect=null,sagaStack=[],addSagaFrame=function addSagaFrame(frame){frame.crashedEffect=crashedEffect;sagaStack.push(frame)},clear=function clear(){crashedEffect=null;sagaStack.length=0},setCrashedEffect=function setCrashedEffect(effect){crashedEffect=effect},toString=function toString(){var firstSaga=sagaStack[0],otherSagas=sagaStack.slice(1),crashedEffectLocation=firstSaga.crashedEffect?effectLocationAsString(firstSaga.crashedEffect):null,errorMessage="The above error occurred in task "+sagaLocationAsString(firstSaga.meta)+(crashedEffectLocation?" \n when executing effect "+crashedEffectLocation:"");return[errorMessage].concat(otherSagas.map(function(s){return"    created by "+sagaLocationAsString(s.meta)}),[cancelledTasksAsString(sagaStack)]).join("\n")};function newTask(env,mainTask,parentContext,parentEffectId,meta,isRoot,cont){var _task;if(void 0===cont){cont=noop}var status=RUNNING,taskResult,taskError,deferredEnd=null,cancelledDueToErrorTasks=[],context=Object.create(parentContext),queue=forkQueue(mainTask,function onAbort(){cancelledDueToErrorTasks.push.apply(cancelledDueToErrorTasks,queue.getTasks().map(function(t){return t.meta.name}))},end);/**
            This may be called by a parent generator to trigger/propagate cancellation
            cancel all pending tasks (including the main task), then end the current task.
             Cancellation propagates down to the whole execution tree held by this Parent task
            It's also propagated to all joiners of this task and their execution tree/joiners
             Cancellation is noop for terminated/Cancelled tasks tasks
            **/function cancel(){if(status===RUNNING){// Setting status to CANCELLED does not necessarily mean that the task/iterators are stopped
// effects in the iterator's finally block will still be executed
status=CANCELLED$1;queue.cancelAll();// Ending with a TASK_CANCEL will propagate the Cancellation to all joiners
end(TASK_CANCEL,!1)}}function end(result,isErr){if(!isErr){// The status here may be RUNNING or CANCELLED
// If the status is CANCELLED, then we do not need to change it here
if(result===TASK_CANCEL){status=CANCELLED$1}else if(status!==CANCELLED$1){status=DONE}taskResult=result;deferredEnd&&deferredEnd.resolve(result)}else{status=ABORTED;addSagaFrame({meta:meta,cancelledTasks:cancelledDueToErrorTasks});if(task.isRoot){var sagaStack=toString();// we've dumped the saga stack to string and are passing it to user's code
// we know that it won't be needed anymore and we need to clear it
clear();env.onError(result,{sagaStack:sagaStack})}taskError=result;deferredEnd&&deferredEnd.reject(result)}task.cont(result,isErr);task.joiners.forEach(function(joiner){joiner.cb(result,isErr)});task.joiners=null}function setContext(props){if("production"!==process.env.NODE_ENV){check(props,object,createSetContextWarning("task",props))}assignWithSymbols(context,props)}function toPromise(){if(deferredEnd){return deferredEnd.promise}deferredEnd=deferred();if(status===ABORTED){deferredEnd.reject(taskError)}else if(status!==RUNNING){deferredEnd.resolve(taskResult)}return deferredEnd.promise}var task=(_task={},_task[TASK]=!0,_task.id=parentEffectId,_task.meta=meta,_task.isRoot=isRoot,_task.context=context,_task.joiners=[],_task.queue=queue,_task.cancel=cancel,_task.cont=cont,_task.end=end,_task.setContext=setContext,_task.toPromise=toPromise,_task.isRunning=function isRunning(){return status===RUNNING},_task.isCancelled=function isCancelled(){return status===CANCELLED$1||status===RUNNING&&mainTask.status===CANCELLED$1},_task.isAborted=function isAborted(){return status===ABORTED},_task.result=function result(){return taskResult},_task.error=function error(){return taskError},_task);return task}function proc(env,iterator$1,parentContext,parentEffectId,meta,isRoot,cont){if("production"!==process.env.NODE_ENV&&iterator$1[asyncIteratorSymbol]){throw new Error("redux-saga doesn't support async generators, please use only regular ones")}var finalRunEffect=env.finalizeRunEffect(runEffect);/**
                                                           Tracks the current effect cancellation
                                                           Each time the generator progresses. calling runEffect will set a new value
                                                           on it. It allows propagating cancellation to child effects
                                                         **/next.cancel=noop;/** Creates a main task to track the main flow */var mainTask={meta:meta,cancel:cancelMain,status:RUNNING},task=newTask(env,mainTask,parentContext,parentEffectId,meta,isRoot,cont),executingContext={task:task,digestEffect:digestEffect};/**
      Creates a new task descriptor for this generator.
      A task is the aggregation of it's mainTask and all it's forked tasks.
      **/ /**
       cancellation of the main task. We'll simply resume the Generator with a TASK_CANCEL
     **/function cancelMain(){if(mainTask.status===RUNNING){mainTask.status=CANCELLED$1;next(TASK_CANCEL)}}/**
      attaches cancellation logic to this task's continuation
      this will permit cancellation to propagate down the call chain
    **/if(cont){cont.cancel=task.cancel}// kicks up the generator
next();// then return the task descriptor to the caller
return task;/**
                * This is the generator driver
                * It's a recursive async/continuation function which calls itself
                * until the generator terminates or throws
                * @param {internal commands(TASK_CANCEL | TERMINATE) | any} arg - value, generator will be resumed with.
                * @param {boolean} isErr - the flag shows if effect finished with an error
                *
                * receives either (command | effect result, false) or (any thrown thing, true)
                */function next(arg,isErr){try{var result;if(isErr){result=iterator$1.throw(arg);// user handled the error, we can clear bookkept values
clear()}else if(shouldCancel(arg)){/**
          getting TASK_CANCEL automatically cancels the main task
          We can get this value here
           - By cancelling the parent task manually
          - By joining a Cancelled task
        **/mainTask.status=CANCELLED$1;/**
                                          Cancels the current effect; this will propagate the cancellation down to any called tasks
                                          **/next.cancel();/**
                         If this Generator has a `return` method then invokes it
                         This will jump to the finally block
                       **/result=func(iterator$1.return)?iterator$1.return(TASK_CANCEL):{done:!0,value:TASK_CANCEL}}else if(shouldTerminate(arg)){// We get TERMINATE flag, i.e. by taking from a channel that ended using `take` (and not `takem` used to trap End of channels)
result=func(iterator$1.return)?iterator$1.return():{done:!0}}else{result=iterator$1.next(arg)}if(!result.done){digestEffect(result.value,parentEffectId,next)}else{/**
          This Generator has ended, terminate the main task and notify the fork queue
        **/if(mainTask.status!==CANCELLED$1){mainTask.status=DONE}mainTask.cont(result.value)}}catch(error){if(mainTask.status===CANCELLED$1){throw error}mainTask.status=ABORTED;mainTask.cont(error,!0)}}function runEffect(effect,effectId,currCb){/**
      each effect runner must attach its own logic of cancellation to the provided callback
      it allows this generator to propagate cancellation downward.
       ATTENTION! effect runners must setup the cancel logic by setting cb.cancel = [cancelMethod]
      And the setup must occur before calling the callback
       This is a sort of inversion of control: called async functions are responsible
      of completing the flow by calling the provided continuation; while caller functions
      are responsible for aborting the current flow by calling the attached cancel function
       Library users can attach their own cancellation logic to promises by defining a
      promise[CANCEL] method in their returned promises
      ATTENTION! calling cancel must have no effect on an already completed or cancelled effect
    **/if(promise(effect)){resolvePromise(effect,currCb)}else if(iterator(effect)){// resolve iterator
proc(env,effect,task.context,effectId,meta,!1,currCb)}else if(effect&&effect[IO]){var effectRunner=effectRunnerMap[effect.type];effectRunner(env,effect.payload,currCb,executingContext)}else{// anything else returned as is
currCb(effect)}}function digestEffect(effect,parentEffectId,cb,label){if(void 0===label){label=""}var effectId=nextSagaId();env.sagaMonitor&&env.sagaMonitor.effectTriggered({effectId:effectId,parentEffectId:parentEffectId,label:label,effect:effect});/**
          completion callback and cancel callback are mutually exclusive
          We can't cancel an already completed effect
          And We can't complete an already cancelled effectId
        **/var effectSettled;// Completion callback passed to the appropriate effect runner
function currCb(res,isErr){if(effectSettled){return}effectSettled=!0;cb.cancel=noop;// defensive measure
if(env.sagaMonitor){if(isErr){env.sagaMonitor.effectRejected(effectId,res)}else{env.sagaMonitor.effectResolved(effectId,res)}}if(isErr){setCrashedEffect(effect)}cb(res,isErr)}// tracks down the current cancel
currCb.cancel=noop;// setup cancellation logic on the parent cb
cb.cancel=function(){// prevents cancelling an already completed effect
if(effectSettled){return}effectSettled=!0;currCb.cancel();// propagates cancel downward
currCb.cancel=noop;// defensive measure
env.sagaMonitor&&env.sagaMonitor.effectCancelled(effectId)};finalRunEffect(effect,effectId,currCb)}}var RUN_SAGA_SIGNATURE="runSaga(options, saga, ...args)",NON_GENERATOR_ERR=RUN_SAGA_SIGNATURE+": saga argument must be a Generator function!";function runSaga(_ref,saga){var _ref$channel=_ref.channel,channel=void 0===_ref$channel?stdChannel():_ref$channel,dispatch=_ref.dispatch,getState=_ref.getState,_ref$context=_ref.context,context=void 0===_ref$context?{}:_ref$context,sagaMonitor=_ref.sagaMonitor,effectMiddlewares=_ref.effectMiddlewares,_ref$onError=_ref.onError,onError=void 0===_ref$onError?logError:_ref$onError;if("production"!==process.env.NODE_ENV){check(saga,func,NON_GENERATOR_ERR)}for(var _len=arguments.length,args=Array(2<_len?_len-2:0),_key=2;_key<_len;_key++){args[_key-2]=arguments[_key]}var iterator$1=saga.apply(void 0,args);if("production"!==process.env.NODE_ENV){check(iterator$1,iterator,NON_GENERATOR_ERR)}var effectId=nextSagaId();if(sagaMonitor){// monitors are expected to have a certain interface, let's fill-in any missing ones
sagaMonitor.rootSagaStarted=sagaMonitor.rootSagaStarted||noop;sagaMonitor.effectTriggered=sagaMonitor.effectTriggered||noop;sagaMonitor.effectResolved=sagaMonitor.effectResolved||noop;sagaMonitor.effectRejected=sagaMonitor.effectRejected||noop;sagaMonitor.effectCancelled=sagaMonitor.effectCancelled||noop;sagaMonitor.actionDispatched=sagaMonitor.actionDispatched||noop;sagaMonitor.rootSagaStarted({effectId:effectId,saga:saga,args:args})}if("production"!==process.env.NODE_ENV){if(notUndef(dispatch)){check(dispatch,func,"dispatch must be a function")}if(notUndef(getState)){check(getState,func,"getState must be a function")}if(notUndef(effectMiddlewares)){var MIDDLEWARE_TYPE_ERROR="effectMiddlewares must be an array of functions";check(effectMiddlewares,array,MIDDLEWARE_TYPE_ERROR);effectMiddlewares.forEach(function(effectMiddleware){return check(effectMiddleware,func,MIDDLEWARE_TYPE_ERROR)})}check(onError,func,"onError passed to the redux-saga is not a function!")}var finalizeRunEffect;if(effectMiddlewares){var middleware=compose.apply(void 0,effectMiddlewares);finalizeRunEffect=function finalizeRunEffect(runEffect){return function(effect,effectId,currCb){var plainRunEffect=function plainRunEffect(eff){return runEffect(eff,effectId,currCb)};return middleware(plainRunEffect)(effect)}}}else{finalizeRunEffect=identity}var env={channel:channel,dispatch:wrapSagaDispatch(dispatch),getState:getState,sagaMonitor:sagaMonitor,onError:onError,finalizeRunEffect:finalizeRunEffect};return immediately(function(){var task=proc(env,iterator$1,context,effectId,getMetaInfo(saga),!0,void 0);if(sagaMonitor){sagaMonitor.effectResolved(effectId,task)}return task})}function sagaMiddlewareFactory(_temp){var _ref=void 0===_temp?{}:_temp,_ref$context=_ref.context,context=void 0===_ref$context?{}:_ref$context,_ref$channel=_ref.channel,channel$1=void 0===_ref$channel?stdChannel():_ref$channel,sagaMonitor=_ref.sagaMonitor,options=_objectWithoutPropertiesLoose(_ref,["context","channel","sagaMonitor"]),boundRunSaga;if("production"!==process.env.NODE_ENV){check(channel$1,channel,"options.channel passed to the Saga middleware is not a channel")}function sagaMiddleware(_ref2){var getState=_ref2.getState,dispatch=_ref2.dispatch;boundRunSaga=runSaga.bind(null,_extends({},options,{context:context,channel:channel$1,dispatch:dispatch,getState:getState,sagaMonitor:sagaMonitor}));return function(next){return function(action){if(sagaMonitor&&sagaMonitor.actionDispatched){sagaMonitor.actionDispatched(action)}var result=next(action);// hit reducers
channel$1.put(action);return result}}}sagaMiddleware.run=function(){if("production"!==process.env.NODE_ENV&&!boundRunSaga){throw new Error("Before running a Saga, you must mount the Saga middleware on the Store using applyMiddleware")}return boundRunSaga.apply(void 0,arguments)};sagaMiddleware.setContext=function(props){if("production"!==process.env.NODE_ENV){check(props,object,createSetContextWarning("sagaMiddleware",props))}assignWithSymbols(context,props)};return sagaMiddleware}var reduxSagaCore_esm={default:sagaMiddlewareFactory,END:END,channel:channel$1,eventChannel:eventChannel,isEnd:isEnd,multicastChannel:multicastChannel,runSaga:runSaga,stdChannel:stdChannel,CANCEL:CANCEL,SAGA_LOCATION:SAGA_LOCATION,buffers:buffers,detach:detach},done=function done(value){return{done:!0,value:value}},qEnd={};function safeName(patternOrChannel){if(channel(patternOrChannel)){return"channel"}if(stringableFunc(patternOrChannel)){return patternOrChannel+""}if(func(patternOrChannel)){return patternOrChannel.name}return patternOrChannel+""}function fsmIterator(fsm,startState,name){var stateUpdater,errorState,effect,nextState=startState;function next(arg,error){if(nextState===qEnd){return done(arg)}if(error&&!errorState){nextState=qEnd;throw error}else{stateUpdater&&stateUpdater(arg);var currentState=error?fsm[errorState](error):fsm[nextState]();nextState=currentState.nextState;effect=currentState.effect;stateUpdater=currentState.stateUpdater;errorState=currentState.errorState;return nextState===qEnd?done(arg):effect}}return makeIterator(next,function(error){return next(null,error)},name)}function takeEvery(patternOrChannel,worker){for(var _len=arguments.length,args=Array(2<_len?_len-2:0),_key=2;_key<_len;_key++){args[_key-2]=arguments[_key]}var yTake={done:!1,value:take(patternOrChannel)},yFork=function yFork(ac){return{done:!1,value:fork.apply(void 0,[worker].concat(args,[ac]))}},action,setAction=function setAction(ac){return action=ac};return fsmIterator({q1:function q1(){return{nextState:"q2",effect:yTake,stateUpdater:setAction}},q2:function q2(){return{nextState:"q1",effect:yFork(action)}}},"q1","takeEvery("+safeName(patternOrChannel)+", "+worker.name+")")}function takeLatest(patternOrChannel,worker){for(var _len=arguments.length,args=Array(2<_len?_len-2:0),_key=2;_key<_len;_key++){args[_key-2]=arguments[_key]}var yTake={done:!1,value:take(patternOrChannel)},yFork=function yFork(ac){return{done:!1,value:fork.apply(void 0,[worker].concat(args,[ac]))}},yCancel=function yCancel(task){return{done:!1,value:cancel(task)}},task,action,setTask=function setTask(t){return task=t},setAction=function setAction(ac){return action=ac};return fsmIterator({q1:function q1(){return{nextState:"q2",effect:yTake,stateUpdater:setAction}},q2:function q2(){return task?{nextState:"q3",effect:yCancel(task)}:{nextState:"q1",effect:yFork(action),stateUpdater:setTask}},q3:function q3(){return{nextState:"q1",effect:yFork(action),stateUpdater:setTask}}},"q1","takeLatest("+safeName(patternOrChannel)+", "+worker.name+")")}function takeLeading(patternOrChannel,worker){for(var _len=arguments.length,args=Array(2<_len?_len-2:0),_key=2;_key<_len;_key++){args[_key-2]=arguments[_key]}var yTake={done:!1,value:take(patternOrChannel)},yCall=function yCall(ac){return{done:!1,value:call.apply(void 0,[worker].concat(args,[ac]))}},action,setAction=function setAction(ac){return action=ac};return fsmIterator({q1:function q1(){return{nextState:"q2",effect:yTake,stateUpdater:setAction}},q2:function q2(){return{nextState:"q1",effect:yCall(action)}}},"q1","takeLeading("+safeName(patternOrChannel)+", "+worker.name+")")}function throttle(delayLength,pattern,worker){for(var _len=arguments.length,args=Array(3<_len?_len-3:0),_key=3;_key<_len;_key++){args[_key-3]=arguments[_key]}var action,channel,yActionChannel={done:!1,value:actionChannel(pattern,sliding(1))},yTake=function yTake(){return{done:!1,value:take(channel)}},yFork=function yFork(ac){return{done:!1,value:fork.apply(void 0,[worker].concat(args,[ac]))}},yDelay={done:!1,value:delay(delayLength)},setAction=function setAction(ac){return action=ac},setChannel=function setChannel(ch){return channel=ch};return fsmIterator({q1:function q1(){return{nextState:"q2",effect:yActionChannel,stateUpdater:setChannel}},q2:function q2(){return{nextState:"q3",effect:yTake(),stateUpdater:setAction}},q3:function q3(){return{nextState:"q4",effect:yFork(action)}},q4:function q4(){return{nextState:"q2",effect:yDelay}}},"q1","throttle("+safeName(pattern)+", "+worker.name+")")}function retry(maxTries,delayLength,fn){for(var counter=maxTries,_len=arguments.length,args=Array(3<_len?_len-3:0),_key=3;_key<_len;_key++){args[_key-3]=arguments[_key]}var yCall={done:!1,value:call.apply(void 0,[fn].concat(args))},yDelay={done:!1,value:delay(delayLength)};return fsmIterator({q1:function q1(){return{nextState:"q2",effect:yCall,errorState:"q10"}},q2:function q2(){return{nextState:qEnd}},q10:function q10(error){counter-=1;if(0>=counter){throw error}return{nextState:"q1",effect:yDelay}}},"q1","retry("+fn.name+")")}function debounceHelper(delayLength,patternOrChannel,worker){for(var _len=arguments.length,args=Array(3<_len?_len-3:0),_key=3;_key<_len;_key++){args[_key-3]=arguments[_key]}var action,raceOutput,yTake={done:!1,value:take(patternOrChannel)},yRace={done:!1,value:race({action:take(patternOrChannel),debounce:delay(delayLength)})},yFork=function yFork(ac){return{done:!1,value:fork.apply(void 0,[worker].concat(args,[ac]))}},yNoop=function yNoop(value){return{done:!1,value:value}},setAction=function setAction(ac){return action=ac},setRaceOutput=function setRaceOutput(ro){return raceOutput=ro};return fsmIterator({q1:function q1(){return{nextState:"q2",effect:yTake,stateUpdater:setAction}},q2:function q2(){return{nextState:"q3",effect:yRace,stateUpdater:setRaceOutput}},q3:function q3(){return raceOutput.debounce?{nextState:"q1",effect:yFork(action)}:{nextState:"q2",effect:yNoop(raceOutput.action),stateUpdater:setAction}}},"q1","debounce("+safeName(patternOrChannel)+", "+worker.name+")")}var validateTakeEffect=function validateTakeEffect(fn,patternOrChannel,worker){check(patternOrChannel,notUndef,fn.name+" requires a pattern or channel");check(worker,notUndef,fn.name+" requires a saga parameter")};function takeEvery$1(patternOrChannel,worker){if("production"!==process.env.NODE_ENV){validateTakeEffect(takeEvery$1,patternOrChannel,worker)}for(var _len=arguments.length,args=Array(2<_len?_len-2:0),_key=2;_key<_len;_key++){args[_key-2]=arguments[_key]}return fork.apply(void 0,[takeEvery,patternOrChannel,worker].concat(args))}function takeLatest$1(patternOrChannel,worker){if("production"!==process.env.NODE_ENV){validateTakeEffect(takeLatest$1,patternOrChannel,worker)}for(var _len2=arguments.length,args=Array(2<_len2?_len2-2:0),_key2=2;_key2<_len2;_key2++){args[_key2-2]=arguments[_key2]}return fork.apply(void 0,[takeLatest,patternOrChannel,worker].concat(args))}function takeLeading$1(patternOrChannel,worker){if("production"!==process.env.NODE_ENV){validateTakeEffect(takeLeading$1,patternOrChannel,worker)}for(var _len3=arguments.length,args=Array(2<_len3?_len3-2:0),_key3=2;_key3<_len3;_key3++){args[_key3-2]=arguments[_key3]}return fork.apply(void 0,[takeLeading,patternOrChannel,worker].concat(args))}function throttle$1(ms,pattern,worker){if("production"!==process.env.NODE_ENV){check(pattern,notUndef,"throttle requires a pattern");check(worker,notUndef,"throttle requires a saga parameter")}for(var _len4=arguments.length,args=Array(3<_len4?_len4-3:0),_key4=3;_key4<_len4;_key4++){args[_key4-3]=arguments[_key4]}return fork.apply(void 0,[throttle,ms,pattern,worker].concat(args))}function retry$1(maxTries,delayLength,worker){for(var _len5=arguments.length,args=Array(3<_len5?_len5-3:0),_key5=3;_key5<_len5;_key5++){args[_key5-3]=arguments[_key5]}return call.apply(void 0,[retry,maxTries,delayLength,worker].concat(args))}function debounce(delayLength,pattern,worker){for(var _len6=arguments.length,args=Array(3<_len6?_len6-3:0),_key6=3;_key6<_len6;_key6++){args[_key6-3]=arguments[_key6]}return fork.apply(void 0,[debounceHelper,delayLength,pattern,worker].concat(args))}var reduxSagaEffects_esm={debounce:debounce,retry:retry$1,takeEvery:takeEvery$1,takeLatest:takeLatest$1,takeLeading:takeLeading$1,throttle:throttle$1,actionChannel:actionChannel,all:all,apply:apply,call:call,cancel:cancel,cancelled:cancelled,cps:cps,delay:delay,effectTypes:effectTypes,flush:flush,fork:fork,getContext:getContext,join:join,put:put,putResolve:putResolve,race:race,select:select,setContext:setContext,spawn:spawn,take:take,takeMaybe:takeMaybe};/**
   @license
   Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at
   http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
   http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
   found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
   part of the polymer project is also subject to an additional IP rights grant
   found at http://polymer.github.io/PATENTS.txt
   */const supportsAdoptingStyleSheets="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,constructionToken=Symbol();class CSSResult{constructor(cssText,safeToken){if(safeToken!==constructionToken){throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.")}this.cssText=cssText}// Note, this is a getter so that it's lazy. In practice, this means
// stylesheets are not created until the first element instance is made.
get styleSheet(){if(this._styleSheet===void 0){// Note, if `adoptedStyleSheets` is supported then we assume CSSStyleSheet
// is constructable.
if(supportsAdoptingStyleSheets){this._styleSheet=new CSSStyleSheet;this._styleSheet.replaceSync(this.cssText)}else{this._styleSheet=null}}return this._styleSheet}toString(){return this.cssText}}/**
   * Wrap a value for interpolation in a css tagged template literal.
   *
   * This is unsafe because untrusted CSS text can be used to phone home
   * or exfiltrate data to an attacker controlled site. Take care to only use
   * this with trusted input.
   */const unsafeCSS=value=>{return new CSSResult(value+"",constructionToken)},textFromCSSResult=value=>{if(value instanceof CSSResult){return value.cssText}else if("number"===typeof value){return value}else{throw new Error(`Value passed to 'css' function must be a 'css' function result: ${value}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`)}},css=(strings,...values)=>{const cssText=values.reduce((acc,v,idx)=>acc+textFromCSSResult(v)+strings[idx+1],strings[0]);return new CSSResult(cssText,constructionToken)};var cssTag={supportsAdoptingStyleSheets:supportsAdoptingStyleSheets,CSSResult:CSSResult,unsafeCSS:unsafeCSS,css:css};/**
    * @license
    * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    * This code may only be used under the BSD style license found at
    * http://polymer.github.io/LICENSE.txt
    * The complete set of authors may be found at
    * http://polymer.github.io/AUTHORS.txt
    * The complete set of contributors may be found at
    * http://polymer.github.io/CONTRIBUTORS.txt
    * Code distributed by Google as part of the polymer project is also
    * subject to an additional IP rights grant found at
    * http://polymer.github.io/PATENTS.txt
    */const legacyCustomElement=(tagName,clazz)=>{window.customElements.define(tagName,clazz);// Cast as any because TS doesn't recognize the return type as being a
// subtype of the decorated class when clazz is typed as
// `Constructor<HTMLElement>` for some reason.
// `Constructor<HTMLElement>` is helpful to make sure the decorator is
// applied to elements however.
// tslint:disable-next-line:no-any
return clazz},standardCustomElement=(tagName,descriptor)=>{const{kind,elements}=descriptor;return{kind,elements,// This callback is called once the class is otherwise fully defined
finisher(clazz){window.customElements.define(tagName,clazz)}}},customElement=tagName=>classOrDescriptor=>"function"===typeof classOrDescriptor?legacyCustomElement(tagName,classOrDescriptor):standardCustomElement(tagName,classOrDescriptor),standardProperty=(options,element)=>{// When decorating an accessor, pass it through and add property metadata.
// Note, the `hasOwnProperty` check in `createProperty` ensures we don't
// stomp over the user's accessor.
if("method"===element.kind&&element.descriptor&&!("value"in element.descriptor)){return Object.assign(Object.assign({},element),{finisher(clazz){clazz.createProperty(element.key,options)}})}else{// createProperty() takes care of defining the property, but we still
// must return some kind of descriptor, so return a descriptor for an
// unused prototype field. The finisher calls createProperty().
return{kind:"field",key:Symbol(),placement:"own",descriptor:{},// When @babel/plugin-proposal-decorators implements initializers,
// do this instead of the initializer below. See:
// https://github.com/babel/babel/issues/9260 extras: [
//   {
//     kind: 'initializer',
//     placement: 'own',
//     initializer: descriptor.initializer,
//   }
// ],
initializer(){if("function"===typeof element.initializer){this[element.key]=element.initializer.call(this)}},finisher(clazz){clazz.createProperty(element.key,options)}}}},legacyProperty=(options,proto,name)=>{proto.constructor.createProperty(name,options)};/**
    * A property decorator which creates a LitElement property which reflects a
    * corresponding attribute value. A `PropertyDeclaration` may optionally be
    * supplied to configure property features.
    *
    * This decorator should only be used for public fields. Private or protected
    * fields should use the internalProperty decorator.
    *
    * @example
    *
    *     class MyElement {
    *       @property({ type: Boolean })
    *       clicked = false;
    *     }
    *
    * @ExportDecoratedItems
    */function property(options){// tslint:disable-next-line:no-any decorator
return(protoOrDescriptor,name)=>name!==void 0?legacyProperty(options,protoOrDescriptor,name):standardProperty(options,protoOrDescriptor)}/**
   * Declares a private or protected property that still triggers updates to the
   * element when it changes.
   *
   * Properties declared this way must not be used from HTML or HTML templating
   * systems, they're solely for properties internal to the element. These
   * properties may be renamed by optimization tools like closure compiler.
   */function internalProperty(options){return property({attribute:!1,hasChanged:null===options||void 0===options?void 0:options.hasChanged})}/**
   * A property decorator that converts a class property into a getter that
   * executes a querySelector on the element's renderRoot.
   *
   * @param selector A DOMString containing one or more selectors to match.
   *
   * See: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
   *
   * @example
   *
   *     class MyElement {
   *       @query('#first')
   *       first;
   *
   *       render() {
   *         return html`
   *           <div id="first"></div>
   *           <div id="second"></div>
   *         `;
   *       }
   *     }
   *
   */function query(selector){return(protoOrDescriptor,// tslint:disable-next-line:no-any decorator
name)=>{const descriptor={get(){return this.renderRoot.querySelector(selector)},enumerable:!0,configurable:!0};return name!==void 0?legacyQuery(descriptor,protoOrDescriptor,name):standardQuery(descriptor,protoOrDescriptor)}}// Note, in the future, we may extend this decorator to support the use case
// where the queried element may need to do work to become ready to interact
// with (e.g. load some implementation code). If so, we might elect to
// add a second argument defining a function that can be run to make the
// queried element loaded/updated/ready.
/**
 * A property decorator that converts a class property into a getter that
 * returns a promise that resolves to the result of a querySelector on the
 * element's renderRoot done after the element's `updateComplete` promise
 * resolves. When the queried property may change with element state, this
 * decorator can be used instead of requiring users to await the
 * `updateComplete` before accessing the property.
 *
 * @param selector A DOMString containing one or more selectors to match.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
 *
 * @example
 *
 *     class MyElement {
 *       @queryAsync('#first')
 *       first;
 *
 *       render() {
 *         return html`
 *           <div id="first"></div>
 *           <div id="second"></div>
 *         `;
 *       }
 *     }
 *
 *     // external usage
 *     async doSomethingWithFirst() {
 *      (await aMyElement.first).doSomething();
 *     }
 */function queryAsync(selector){return(protoOrDescriptor,// tslint:disable-next-line:no-any decorator
name)=>{const descriptor={async get(){await this.updateComplete;return this.renderRoot.querySelector(selector)},enumerable:!0,configurable:!0};return name!==void 0?legacyQuery(descriptor,protoOrDescriptor,name):standardQuery(descriptor,protoOrDescriptor)}}/**
   * A property decorator that converts a class property into a getter
   * that executes a querySelectorAll on the element's renderRoot.
   *
   * @param selector A DOMString containing one or more selectors to match.
   *
   * See:
   * https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
   *
   * @example
   *
   *     class MyElement {
   *       @queryAll('div')
   *       divs;
   *
   *       render() {
   *         return html`
   *           <div id="first"></div>
   *           <div id="second"></div>
   *         `;
   *       }
   *     }
   */function queryAll(selector){return(protoOrDescriptor,// tslint:disable-next-line:no-any decorator
name)=>{const descriptor={get(){return this.renderRoot.querySelectorAll(selector)},enumerable:!0,configurable:!0};return name!==void 0?legacyQuery(descriptor,protoOrDescriptor,name):standardQuery(descriptor,protoOrDescriptor)}}const legacyQuery=(descriptor,proto,name)=>{Object.defineProperty(proto,name,descriptor)},standardQuery=(descriptor,element)=>({kind:"method",placement:"prototype",key:element.key,descriptor}),standardEventOptions=(options,element)=>{return Object.assign(Object.assign({},element),{finisher(clazz){Object.assign(clazz.prototype[element.key],options)}})},legacyEventOptions=// tslint:disable-next-line:no-any legacy decorator
(options,proto,name)=>{Object.assign(proto[name],options)};/**
    * Adds event listener options to a method used as an event listener in a
    * lit-html template.
    *
    * @param options An object that specifies event listener options as accepted by
    * `EventTarget#addEventListener` and `EventTarget#removeEventListener`.
    *
    * Current browsers support the `capture`, `passive`, and `once` options. See:
    * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Parameters
    *
    * @example
    *
    *     class MyElement {
    *       clicked = false;
    *
    *       render() {
    *         return html`
    *           <div @click=${this._onClick}`>
    *             <button></button>
    *           </div>
    *         `;
    *       }
    *
    *       @eventOptions({capture: true})
    *       _onClick(e) {
    *         this.clicked = true;
    *       }
    *     }
    */function eventOptions(options){// Return value typed as any to prevent TypeScript from complaining that
// standard decorator function signature does not match TypeScript decorator
// signature
// TODO(kschaaf): unclear why it was only failing on this decorator and not
// the others
return(protoOrDescriptor,name)=>name!==void 0?legacyEventOptions(options,protoOrDescriptor,name):standardEventOptions(options,protoOrDescriptor)}/**
   * A property decorator that converts a class property into a getter that
   * returns the `assignedNodes` of the given named `slot`. Note, the type of
   * this property should be annotated as `NodeListOf<HTMLElement>`.
   *
   */function queryAssignedNodes(slotName="",flatten=!1){return(protoOrDescriptor,// tslint:disable-next-line:no-any decorator
name)=>{const descriptor={get(){const selector=`slot${slotName?`[name=${slotName}]`:""}`,slot=this.renderRoot.querySelector(selector);return slot&&slot.assignedNodes({flatten})},enumerable:!0,configurable:!0};return name!==void 0?legacyQuery(descriptor,protoOrDescriptor,name):standardQuery(descriptor,protoOrDescriptor)}}var decorators={customElement:customElement,property:property,internalProperty:internalProperty,query:query,queryAsync:queryAsync,queryAll:queryAll,eventOptions:eventOptions,queryAssignedNodes:queryAssignedNodes},_a;/**
    * @license
    * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    * This code may only be used under the BSD style license found at
    * http://polymer.github.io/LICENSE.txt
    * The complete set of authors may be found at
    * http://polymer.github.io/AUTHORS.txt
    * The complete set of contributors may be found at
    * http://polymer.github.io/CONTRIBUTORS.txt
    * Code distributed by Google as part of the polymer project is also
    * subject to an additional IP rights grant found at
    * http://polymer.github.io/PATENTS.txt
    */ /**
         * When using Closure Compiler, JSCompiler_renameProperty(property, object) is
         * replaced at compile time by the munged name for object[property]. We cannot
         * alias this function, so we have to use a small shim that has the same
         * behavior when not compiling.
         */window.JSCompiler_renameProperty=(prop,_obj)=>prop;const defaultConverter={toAttribute(value,type){switch(type){case Boolean:return value?"":null;case Object:case Array:// if the value is `null` or `undefined` pass this through
// to allow removing/no change behavior.
return null==value?value:JSON.stringify(value);}return value},fromAttribute(value,type){switch(type){case Boolean:return null!==value;case Number:return null===value?null:+value;case Object:case Array:return JSON.parse(value);}return value}},notEqual=(value,old)=>{// This ensures (old==NaN, value==NaN) always returns false
return old!==value&&(old===old||value===value)},defaultPropertyDeclaration={attribute:!0,type:String,converter:defaultConverter,reflect:!1,hasChanged:notEqual},STATE_HAS_UPDATED=1,STATE_UPDATE_REQUESTED=1<<2,STATE_IS_REFLECTING_TO_ATTRIBUTE=1<<3,STATE_IS_REFLECTING_TO_PROPERTY=1<<4,finalized="finalized";/**
    * Change function that returns true if `value` is different from `oldValue`.
    * This method is used as the default for a property's `hasChanged` function.
    */ /**
                                * Base element class which manages element properties and attributes. When
                                * properties change, the `update` method is asynchronously called. This method
                                * should be supplied by subclassers to render updates as desired.
                                */class UpdatingElement extends HTMLElement{constructor(){super();this._updateState=0;this._instanceProperties=void 0;// Initialize to an unresolved Promise so we can make sure the element has
// connected before first update.
this._updatePromise=new Promise(res=>this._enableUpdatingResolver=res);/**
                                                                                   * Map with keys for any properties that have changed since the last
                                                                                   * update cycle with previous values.
                                                                                   */this._changedProperties=new Map;/**
                                          * Map with keys of properties that should be reflected when updated.
                                          */this._reflectingProperties=void 0;this.initialize()}/**
     * Returns a list of attributes corresponding to the registered properties.
     * @nocollapse
     */static get observedAttributes(){// note: piggy backing on this to ensure we're finalized.
this.finalize();const attributes=[];// Use forEach so this works even if for/of loops are compiled to for loops
// expecting arrays
this._classProperties.forEach((v,p)=>{const attr=this._attributeNameForProperty(p,v);if(attr!==void 0){this._attributeToPropertyMap.set(attr,p);attributes.push(attr)}});return attributes}/**
     * Ensures the private `_classProperties` property metadata is created.
     * In addition to `finalize` this is also called in `createProperty` to
     * ensure the `@property` decorator can add property metadata.
     */ /** @nocollapse */static _ensureClassProperties(){// ensure private storage for property declarations.
if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;// NOTE: Workaround IE11 not supporting Map constructor argument.
const superProperties=Object.getPrototypeOf(this)._classProperties;if(superProperties!==void 0){superProperties.forEach((v,k)=>this._classProperties.set(k,v))}}}/**
     * Creates a property accessor on the element prototype if one does not exist
     * and stores a PropertyDeclaration for the property with the given options.
     * The property setter calls the property's `hasChanged` property option
     * or uses a strict identity check to determine whether or not to request
     * an update.
     *
     * This method may be overridden to customize properties; however,
     * when doing so, it's important to call `super.createProperty` to ensure
     * the property is setup correctly. This method calls
     * `getPropertyDescriptor` internally to get a descriptor to install.
     * To customize what properties do when they are get or set, override
     * `getPropertyDescriptor`. To customize the options for a property,
     * implement `createProperty` like this:
     *
     * static createProperty(name, options) {
     *   options = Object.assign(options, {myOption: true});
     *   super.createProperty(name, options);
     * }
     *
     * @nocollapse
     */static createProperty(name,options=defaultPropertyDeclaration){// Note, since this can be called by the `@property` decorator which
// is called before `finalize`, we ensure storage exists for property
// metadata.
this._ensureClassProperties();this._classProperties.set(name,options);// Do not generate an accessor if the prototype already has one, since
// it would be lost otherwise and that would never be the user's intention;
// Instead, we expect users to call `requestUpdate` themselves from
// user-defined accessors. Note that if the super has an accessor we will
// still overwrite it
if(options.noAccessor||this.prototype.hasOwnProperty(name)){return}const key="symbol"===typeof name?Symbol():`__${name}`,descriptor=this.getPropertyDescriptor(name,key,options);if(descriptor!==void 0){Object.defineProperty(this.prototype,name,descriptor)}}/**
     * Returns a property descriptor to be defined on the given named property.
     * If no descriptor is returned, the property will not become an accessor.
     * For example,
     *
     *   class MyElement extends LitElement {
     *     static getPropertyDescriptor(name, key, options) {
     *       const defaultDescriptor =
     *           super.getPropertyDescriptor(name, key, options);
     *       const setter = defaultDescriptor.set;
     *       return {
     *         get: defaultDescriptor.get,
     *         set(value) {
     *           setter.call(this, value);
     *           // custom action.
     *         },
     *         configurable: true,
     *         enumerable: true
     *       }
     *     }
     *   }
     *
     * @nocollapse
     */static getPropertyDescriptor(name,key,_options){return{// tslint:disable-next-line:no-any no symbol in index
get(){return this[key]},set(value){const oldValue=this[name];this[key]=value;this._requestUpdate(name,oldValue)},configurable:!0,enumerable:!0}}/**
     * Returns the property options associated with the given property.
     * These options are defined with a PropertyDeclaration via the `properties`
     * object or the `@property` decorator and are registered in
     * `createProperty(...)`.
     *
     * Note, this method should be considered "final" and not overridden. To
     * customize the options for a given property, override `createProperty`.
     *
     * @nocollapse
     * @final
     */static getPropertyOptions(name){return this._classProperties&&this._classProperties.get(name)||defaultPropertyDeclaration}/**
     * Creates property accessors for registered properties and ensures
     * any superclasses are also finalized.
     * @nocollapse
     */static finalize(){// finalize any superclasses
const superCtor=Object.getPrototypeOf(this);if(!superCtor.hasOwnProperty(finalized)){superCtor.finalize()}this[finalized]=!0;this._ensureClassProperties();// initialize Map populated in observedAttributes
this._attributeToPropertyMap=new Map;// make any properties
// Note, only process "own" properties since this element will inherit
// any properties defined on the superClass, and finalization ensures
// the entire prototype chain is finalized.
if(this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const props=this.properties,propKeys=[...Object.getOwnPropertyNames(props),...("function"===typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(props):[])];// support symbols in properties (IE11 does not support this)
// This for/of is ok because propKeys is an array
for(const p of propKeys){// note, use of `any` is due to TypeSript lack of support for symbol in
// index types
// tslint:disable-next-line:no-any no symbol in index
this.createProperty(p,props[p])}}}/**
     * Returns the property name for the given attribute `name`.
     * @nocollapse
     */static _attributeNameForProperty(name,options){const attribute=options.attribute;return!1===attribute?void 0:"string"===typeof attribute?attribute:"string"===typeof name?name.toLowerCase():void 0}/**
     * Returns true if a property should request an update.
     * Called when a property value is set and uses the `hasChanged`
     * option for the property if present or a strict identity check.
     * @nocollapse
     */static _valueHasChanged(value,old,hasChanged=notEqual){return hasChanged(value,old)}/**
     * Returns the property value for the given attribute value.
     * Called via the `attributeChangedCallback` and uses the property's
     * `converter` or `converter.fromAttribute` property option.
     * @nocollapse
     */static _propertyValueFromAttribute(value,options){const type=options.type,converter=options.converter||defaultConverter,fromAttribute="function"===typeof converter?converter:converter.fromAttribute;return fromAttribute?fromAttribute(value,type):value}/**
     * Returns the attribute value for the given property value. If this
     * returns undefined, the property will *not* be reflected to an attribute.
     * If this returns null, the attribute will be removed, otherwise the
     * attribute will be set to the value.
     * This uses the property's `reflect` and `type.toAttribute` property options.
     * @nocollapse
     */static _propertyValueToAttribute(value,options){if(options.reflect===void 0){return}const type=options.type,converter=options.converter,toAttribute=converter&&converter.toAttribute||defaultConverter.toAttribute;return toAttribute(value,type)}/**
     * Performs element initialization. By default captures any pre-set values for
     * registered properties.
     */initialize(){this._saveInstanceProperties();// ensures first update will be caught by an early access of
// `updateComplete`
this._requestUpdate()}/**
     * Fixes any properties set on the instance before upgrade time.
     * Otherwise these would shadow the accessor and break these properties.
     * The properties are stored in a Map which is played back after the
     * constructor runs. Note, on very old versions of Safari (<=9) or Chrome
     * (<=41), properties created for native platform properties like (`id` or
     * `name`) may not have default values set in the element constructor. On
     * these browsers native properties appear on instances and therefore their
     * default value will overwrite any element default (e.g. if the element sets
     * this.id = 'id' in the constructor, the 'id' will become '' since this is
     * the native platform default).
     */_saveInstanceProperties(){// Use forEach so this works even if for/of loops are compiled to for loops
// expecting arrays
this.constructor._classProperties.forEach((_v,p)=>{if(this.hasOwnProperty(p)){const value=this[p];delete this[p];if(!this._instanceProperties){this._instanceProperties=new Map}this._instanceProperties.set(p,value)}})}/**
     * Applies previously saved instance properties.
     */_applyInstanceProperties(){// Use forEach so this works even if for/of loops are compiled to for loops
// expecting arrays
// tslint:disable-next-line:no-any
this._instanceProperties.forEach((v,p)=>this[p]=v);this._instanceProperties=void 0}connectedCallback(){// Ensure first connection completes an update. Updates cannot complete
// before connection.
this.enableUpdating()}enableUpdating(){if(this._enableUpdatingResolver!==void 0){this._enableUpdatingResolver();this._enableUpdatingResolver=void 0}}/**
     * Allows for `super.disconnectedCallback()` in extensions while
     * reserving the possibility of making non-breaking feature additions
     * when disconnecting at some point in the future.
     */disconnectedCallback(){}/**
                             * Synchronizes property values when attributes change.
                             */attributeChangedCallback(name,old,value){if(old!==value){this._attributeToProperty(name,value)}}_propertyToAttribute(name,value,options=defaultPropertyDeclaration){const ctor=this.constructor,attr=ctor._attributeNameForProperty(name,options);if(attr!==void 0){const attrValue=ctor._propertyValueToAttribute(value,options);// an undefined value does not change the attribute.
if(attrValue===void 0){return}// Track if the property is being reflected to avoid
// setting the property again via `attributeChangedCallback`. Note:
// 1. this takes advantage of the fact that the callback is synchronous.
// 2. will behave incorrectly if multiple attributes are in the reaction
// stack at time of calling. However, since we process attributes
// in `update` this should not be possible (or an extreme corner case
// that we'd like to discover).
// mark state reflecting
this._updateState=this._updateState|STATE_IS_REFLECTING_TO_ATTRIBUTE;if(null==attrValue){this.removeAttribute(attr)}else{this.setAttribute(attr,attrValue)}// mark state not reflecting
this._updateState=this._updateState&~STATE_IS_REFLECTING_TO_ATTRIBUTE}}_attributeToProperty(name,value){// Use tracking info to avoid deserializing attribute value if it was
// just set from a property setter.
if(this._updateState&STATE_IS_REFLECTING_TO_ATTRIBUTE){return}const ctor=this.constructor,propName=ctor._attributeToPropertyMap.get(name);// Note, hint this as an `AttributeMap` so closure clearly understands
// the type; it has issues with tracking types through statics
// tslint:disable-next-line:no-unnecessary-type-assertion
if(propName!==void 0){const options=ctor.getPropertyOptions(propName);// mark state reflecting
this._updateState=this._updateState|STATE_IS_REFLECTING_TO_PROPERTY;this[propName]=// tslint:disable-next-line:no-any
ctor._propertyValueFromAttribute(value,options);// mark state not reflecting
this._updateState=this._updateState&~STATE_IS_REFLECTING_TO_PROPERTY}}/**
     * This private version of `requestUpdate` does not access or return the
     * `updateComplete` promise. This promise can be overridden and is therefore
     * not free to access.
     */_requestUpdate(name,oldValue){let shouldRequestUpdate=!0;// If we have a property key, perform property update steps.
if(name!==void 0){const ctor=this.constructor,options=ctor.getPropertyOptions(name);if(ctor._valueHasChanged(this[name],oldValue,options.hasChanged)){if(!this._changedProperties.has(name)){this._changedProperties.set(name,oldValue)}// Add to reflecting properties set.
// Note, it's important that every change has a chance to add the
// property to `_reflectingProperties`. This ensures setting
// attribute + property reflects correctly.
if(!0===options.reflect&&!(this._updateState&STATE_IS_REFLECTING_TO_PROPERTY)){if(this._reflectingProperties===void 0){this._reflectingProperties=new Map}this._reflectingProperties.set(name,options)}}else{// Abort the request if the property should not be considered changed.
shouldRequestUpdate=!1}}if(!this._hasRequestedUpdate&&shouldRequestUpdate){this._updatePromise=this._enqueueUpdate()}}/**
     * Requests an update which is processed asynchronously. This should
     * be called when an element should update based on some state not triggered
     * by setting a property. In this case, pass no arguments. It should also be
     * called when manually implementing a property setter. In this case, pass the
     * property `name` and `oldValue` to ensure that any configured property
     * options are honored. Returns the `updateComplete` Promise which is resolved
     * when the update completes.
     *
     * @param name {PropertyKey} (optional) name of requesting property
     * @param oldValue {any} (optional) old value of requesting property
     * @returns {Promise} A Promise that is resolved when the update completes.
     */requestUpdate(name,oldValue){this._requestUpdate(name,oldValue);return this.updateComplete}/**
     * Sets up the element to asynchronously update.
     */async _enqueueUpdate(){this._updateState=this._updateState|STATE_UPDATE_REQUESTED;try{// Ensure any previous update has resolved before updating.
// This `await` also ensures that property changes are batched.
await this._updatePromise}catch(e){// Ignore any previous errors. We only care that the previous cycle is
// done. Any error should have been handled in the previous update.
}const result=this.performUpdate();// If `performUpdate` returns a Promise, we await it. This is done to
// enable coordinating updates with a scheduler. Note, the result is
// checked to avoid delaying an additional microtask unless we need to.
if(null!=result){await result}return!this._hasRequestedUpdate}get _hasRequestedUpdate(){return this._updateState&STATE_UPDATE_REQUESTED}get hasUpdated(){return this._updateState&STATE_HAS_UPDATED}/**
     * Performs an element update. Note, if an exception is thrown during the
     * update, `firstUpdated` and `updated` will not be called.
     *
     * You can override this method to change the timing of updates. If this
     * method is overridden, `super.performUpdate()` must be called.
     *
     * For instance, to schedule updates to occur just before the next frame:
     *
     * ```
     * protected async performUpdate(): Promise<unknown> {
     *   await new Promise((resolve) => requestAnimationFrame(() => resolve()));
     *   super.performUpdate();
     * }
     * ```
     */performUpdate(){// Mixin instance properties once, if they exist.
if(this._instanceProperties){this._applyInstanceProperties()}let shouldUpdate=!1;const changedProperties=this._changedProperties;try{shouldUpdate=this.shouldUpdate(changedProperties);if(shouldUpdate){this.update(changedProperties)}else{this._markUpdated()}}catch(e){// Prevent `firstUpdated` and `updated` from running when there's an
// update exception.
shouldUpdate=!1;// Ensure element can accept additional updates after an exception.
this._markUpdated();throw e}if(shouldUpdate){if(!(this._updateState&STATE_HAS_UPDATED)){this._updateState=this._updateState|STATE_HAS_UPDATED;this.firstUpdated(changedProperties)}this.updated(changedProperties)}}_markUpdated(){this._changedProperties=new Map;this._updateState=this._updateState&~STATE_UPDATE_REQUESTED}/**
     * Returns a Promise that resolves when the element has completed updating.
     * The Promise value is a boolean that is `true` if the element completed the
     * update without triggering another update. The Promise result is `false` if
     * a property was set inside `updated()`. If the Promise is rejected, an
     * exception was thrown during the update.
     *
     * To await additional asynchronous work, override the `_getUpdateComplete`
     * method. For example, it is sometimes useful to await a rendered element
     * before fulfilling this Promise. To do this, first await
     * `super._getUpdateComplete()`, then any subsequent state.
     *
     * @returns {Promise} The Promise returns a boolean that indicates if the
     * update resolved without triggering another update.
     */get updateComplete(){return this._getUpdateComplete()}/**
     * Override point for the `updateComplete` promise.
     *
     * It is not safe to override the `updateComplete` getter directly due to a
     * limitation in TypeScript which means it is not possible to call a
     * superclass getter (e.g. `super.updateComplete.then(...)`) when the target
     * language is ES5 (https://github.com/microsoft/TypeScript/issues/338).
     * This method should be overridden instead. For example:
     *
     *   class MyElement extends LitElement {
     *     async _getUpdateComplete() {
     *       await super._getUpdateComplete();
     *       await this._myChild.updateComplete;
     *     }
     *   }
     */_getUpdateComplete(){return this._updatePromise}/**
     * Controls whether or not `update` should be called when the element requests
     * an update. By default, this method always returns `true`, but this can be
     * customized to control when to update.
     *
     * @param _changedProperties Map of changed properties with old values
     */shouldUpdate(_changedProperties){return!0}/**
     * Updates the element. This method reflects property values to attributes.
     * It can be overridden to render and keep updated element DOM.
     * Setting properties inside this method will *not* trigger
     * another update.
     *
     * @param _changedProperties Map of changed properties with old values
     */update(_changedProperties){if(this._reflectingProperties!==void 0&&0<this._reflectingProperties.size){// Use forEach so this works even if for/of loops are compiled to for
// loops expecting arrays
this._reflectingProperties.forEach((v,k)=>this._propertyToAttribute(k,this[k],v));this._reflectingProperties=void 0}this._markUpdated()}/**
     * Invoked whenever the element is updated. Implement to perform
     * post-updating tasks via DOM APIs, for example, focusing an element.
     *
     * Setting properties inside this method will trigger the element to update
     * again after this update cycle completes.
     *
     * @param _changedProperties Map of changed properties with old values
     */updated(_changedProperties){}/**
                                  * Invoked when the element is first updated. Implement to perform one time
                                  * work on the element after update.
                                  *
                                  * Setting properties inside this method will trigger the element to update
                                  * again after this update cycle completes.
                                  *
                                  * @param _changedProperties Map of changed properties with old values
                                  */firstUpdated(_changedProperties){}}_a=finalized;/**
                 * Marks class as having finished creating properties.
                 */UpdatingElement[_a]=!0;var updatingElement={defaultConverter:defaultConverter,notEqual:notEqual,UpdatingElement:UpdatingElement};/**
    * @license
    * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    * This code may only be used under the BSD style license found at
    * http://polymer.github.io/LICENSE.txt
    * The complete set of authors may be found at
    * http://polymer.github.io/AUTHORS.txt
    * The complete set of contributors may be found at
    * http://polymer.github.io/CONTRIBUTORS.txt
    * Code distributed by Google as part of the polymer project is also
    * subject to an additional IP rights grant found at
    * http://polymer.github.io/PATENTS.txt
    */ /**
        * True if the custom elements polyfill is in use.
        */const isCEPolyfill="undefined"!==typeof window&&null!=window.customElements&&window.customElements.polyfillWrapFlushCallback!==void 0,reparentNodes=(container,start,end=null,before=null)=>{while(start!==end){const n=start.nextSibling;container.insertBefore(start,before);start=n}},removeNodes=(container,start,end=null)=>{while(start!==end){const n=start.nextSibling;container.removeChild(start);start=n}};/**
                                                                                                                                                              * Reparents nodes, starting from `start` (inclusive) to `end` (exclusive),
                                                                                                                                                              * into another container (could be the same container), before `before`. If
                                                                                                                                                              * `before` is null, it appends the nodes to the container.
                                                                                                                                                              */var dom={isCEPolyfill:isCEPolyfill,reparentNodes:reparentNodes,removeNodes:removeNodes};/**
    * @license
    * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    * This code may only be used under the BSD style license found at
    * http://polymer.github.io/LICENSE.txt
    * The complete set of authors may be found at
    * http://polymer.github.io/AUTHORS.txt
    * The complete set of contributors may be found at
    * http://polymer.github.io/CONTRIBUTORS.txt
    * Code distributed by Google as part of the polymer project is also
    * subject to an additional IP rights grant found at
    * http://polymer.github.io/PATENTS.txt
    */ /**
        * An expression marker with embedded unique key to avoid collision with
        * possible text in templates.
        */const marker=`{{lit-${(Math.random()+"").slice(2)}}}`,nodeMarker=`<!--${marker}-->`,markerRegex=new RegExp(`${marker}|${nodeMarker}`),boundAttributeSuffix="$lit$";/**
                                                                    * An expression marker used text-positions, multi-binding attributes, and
                                                                    * attributes with markup-like text values.
                                                                    */ /**
                                              * An updatable Template that tracks the location of dynamic parts.
                                              */class Template{constructor(result,element){this.parts=[];this.element=element;const nodesToRemove=[],stack=[],walker=document.createTreeWalker(element.content,133/* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */,null,!1);// Keeps track of the last index associated with a part. We try to delete
// unnecessary nodes, but we never want to associate two different parts
// to the same index. They must have a constant node between.
let lastPartIndex=0,index=-1,partIndex=0;const{strings,values:{length}}=result;while(partIndex<length){const node=walker.nextNode();if(null===node){// We've exhausted the content inside a nested template element.
// Because we still have parts (the outer for-loop), we know:
// - There is a template in the stack
// - The walker will find a nextNode outside the template
walker.currentNode=stack.pop();continue}index++;if(1===node.nodeType/* Node.ELEMENT_NODE */){if(node.hasAttributes()){const attributes=node.attributes,{length}=attributes;// Per
// https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap,
// attributes are not guaranteed to be returned in document order.
// In particular, Edge/IE can return them out of order, so we cannot
// assume a correspondence between part index and attribute index.
let count=0;for(let i=0;i<length;i++){if(endsWith(attributes[i].name,boundAttributeSuffix)){count++}}while(0<count--){// Get the template literal section leading up to the first
// expression in this attribute
const stringForPart=strings[partIndex],name=lastAttributeNameRegex.exec(stringForPart)[2],attributeLookupName=name.toLowerCase()+boundAttributeSuffix,attributeValue=node.getAttribute(attributeLookupName);// Find the attribute name
node.removeAttribute(attributeLookupName);const statics=attributeValue.split(markerRegex);this.parts.push({type:"attribute",index,name,strings:statics});partIndex+=statics.length-1}}if("TEMPLATE"===node.tagName){stack.push(node);walker.currentNode=node.content}}else if(3===node.nodeType/* Node.TEXT_NODE */){const data=node.data;if(0<=data.indexOf(marker)){const parent=node.parentNode,strings=data.split(markerRegex),lastIndex=strings.length-1;// Generate a new text node for each literal section
// These nodes are also used as the markers for node parts
for(let i=0;i<lastIndex;i++){let insert,s=strings[i];if(""===s){insert=createMarker()}else{const match=lastAttributeNameRegex.exec(s);if(null!==match&&endsWith(match[2],boundAttributeSuffix)){s=s.slice(0,match.index)+match[1]+match[2].slice(0,-boundAttributeSuffix.length)+match[3]}insert=document.createTextNode(s)}parent.insertBefore(insert,node);this.parts.push({type:"node",index:++index})}// If there's no text, we must insert a comment to mark our place.
// Else, we can trust it will stick around after cloning.
if(""===strings[lastIndex]){parent.insertBefore(createMarker(),node);nodesToRemove.push(node)}else{node.data=strings[lastIndex]}// We have a part for each match found
partIndex+=lastIndex}}else if(8===node.nodeType/* Node.COMMENT_NODE */){if(node.data===marker){const parent=node.parentNode;// Add a new marker node to be the startNode of the Part if any of
// the following are true:
//  * We don't have a previousSibling
//  * The previousSibling is already the start of a previous part
if(null===node.previousSibling||index===lastPartIndex){index++;parent.insertBefore(createMarker(),node)}lastPartIndex=index;this.parts.push({type:"node",index});// If we don't have a nextSibling, keep this node so we have an end.
// Else, we can remove it to save future costs.
if(null===node.nextSibling){node.data=""}else{nodesToRemove.push(node);index--}partIndex++}else{let i=-1;while(-1!==(i=node.data.indexOf(marker,i+1))){// Comment node has a binding marker inside, make an inactive part
// The binding won't work, but subsequent bindings will
// TODO (justinfagnani): consider whether it's even worth it to
// make bindings in comments work
this.parts.push({type:"node",index:-1});partIndex++}}}}// Remove text binding nodes after the walk to not disturb the TreeWalker
for(const n of nodesToRemove){n.parentNode.removeChild(n)}}}const endsWith=(str,suffix)=>{const index=str.length-suffix.length;return 0<=index&&str.slice(index)===suffix},isTemplatePartActive=part=>-1!==part.index,createMarker=()=>document.createComment(""),lastAttributeNameRegex=// eslint-disable-next-line no-control-regex
/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;var template={marker:marker,nodeMarker:nodeMarker,markerRegex:markerRegex,boundAttributeSuffix:boundAttributeSuffix,Template:Template,isTemplatePartActive:isTemplatePartActive,createMarker:createMarker,lastAttributeNameRegex:lastAttributeNameRegex};const walkerNodeFilter=133/* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */;/**
                                                                            * Removes the list of nodes from a Template safely. In addition to removing
                                                                            * nodes from the Template, the Template part indices are updated to match
                                                                            * the mutated Template DOM.
                                                                            *
                                                                            * As the template is walked the removal state is tracked and
                                                                            * part indices are adjusted as needed.
                                                                            *
                                                                            * div
                                                                            *   div#1 (remove) <-- start removing (removing node is div#1)
                                                                            *     div
                                                                            *       div#2 (remove)  <-- continue removing (removing node is still div#1)
                                                                            *         div
                                                                            * div <-- stop removing since previous sibling is the removing node (div#1,
                                                                            * removed 4 nodes)
                                                                            */function removeNodesFromTemplate(template,nodesToRemove){const{element:{content},parts}=template,walker=document.createTreeWalker(content,walkerNodeFilter,null,!1);let partIndex=nextActiveIndexInTemplateParts(parts),part=parts[partIndex],nodeIndex=-1,removeCount=0;const nodesToRemoveInTemplate=[];let currentRemovingNode=null;while(walker.nextNode()){nodeIndex++;const node=walker.currentNode;// End removal if stepped past the removing node
if(node.previousSibling===currentRemovingNode){currentRemovingNode=null}// A node to remove was found in the template
if(nodesToRemove.has(node)){nodesToRemoveInTemplate.push(node);// Track node we're removing
if(null===currentRemovingNode){currentRemovingNode=node}}// When removing, increment count by which to adjust subsequent part indices
if(null!==currentRemovingNode){removeCount++}while(part!==void 0&&part.index===nodeIndex){// If part is in a removed node deactivate it by setting index to -1 or
// adjust the index as needed.
part.index=null!==currentRemovingNode?-1:part.index-removeCount;// go to the next active part.
partIndex=nextActiveIndexInTemplateParts(parts,partIndex);part=parts[partIndex]}}nodesToRemoveInTemplate.forEach(n=>n.parentNode.removeChild(n))}const countNodes=node=>{let count=11===node.nodeType/* Node.DOCUMENT_FRAGMENT_NODE */?0:1;const walker=document.createTreeWalker(node,walkerNodeFilter,null,!1);while(walker.nextNode()){count++}return count},nextActiveIndexInTemplateParts=(parts,startIndex=-1)=>{for(let i=startIndex+1;i<parts.length;i++){const part=parts[i];if(isTemplatePartActive(part)){return i}}return-1};/**
    * Inserts the given node into the Template, optionally before the given
    * refNode. In addition to inserting the node into the Template, the Template
    * part indices are updated to match the mutated Template DOM.
    */function insertNodeIntoTemplate(template,node,refNode=null){const{element:{content},parts}=template;// If there's no refNode, then put node at end of template.
// No part indices need to be shifted in this case.
if(null===refNode||refNode===void 0){content.appendChild(node);return}const walker=document.createTreeWalker(content,walkerNodeFilter,null,!1);let partIndex=nextActiveIndexInTemplateParts(parts),insertCount=0,walkerIndex=-1;while(walker.nextNode()){walkerIndex++;const walkerNode=walker.currentNode;if(walkerNode===refNode){insertCount=countNodes(node);refNode.parentNode.insertBefore(node,refNode)}while(-1!==partIndex&&parts[partIndex].index===walkerIndex){// If we've inserted the node, simply adjust all subsequent parts
if(0<insertCount){while(-1!==partIndex){parts[partIndex].index+=insertCount;partIndex=nextActiveIndexInTemplateParts(parts,partIndex)}return}partIndex=nextActiveIndexInTemplateParts(parts,partIndex)}}}var modifyTemplate={removeNodesFromTemplate:removeNodesFromTemplate,insertNodeIntoTemplate:insertNodeIntoTemplate};/**
    * @license
    * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    * This code may only be used under the BSD style license found at
    * http://polymer.github.io/LICENSE.txt
    * The complete set of authors may be found at
    * http://polymer.github.io/AUTHORS.txt
    * The complete set of contributors may be found at
    * http://polymer.github.io/CONTRIBUTORS.txt
    * Code distributed by Google as part of the polymer project is also
    * subject to an additional IP rights grant found at
    * http://polymer.github.io/PATENTS.txt
    */const directives=new WeakMap,directive=f=>(...args)=>{const d=f(...args);directives.set(d,!0);return d},isDirective=o=>{return"function"===typeof o&&directives.has(o)};/**
                                   * Brands a function as a directive factory function so that lit-html will call
                                   * the function during template rendering, rather than passing as a value.
                                   *
                                   * A _directive_ is a function that takes a Part as an argument. It has the
                                   * signature: `(part: Part) => void`.
                                   *
                                   * A directive _factory_ is a function that takes arguments for data and
                                   * configuration and returns a directive. Users of directive usually refer to
                                   * the directive factory as the directive. For example, "The repeat directive".
                                   *
                                   * Usually a template author will invoke a directive factory in their template
                                   * with relevant arguments, which will then return a directive function.
                                   *
                                   * Here's an example of using the `repeat()` directive factory that takes an
                                   * array and a function to render an item:
                                   *
                                   * ```js
                                   * html`<ul><${repeat(items, (item) => html`<li>${item}</li>`)}</ul>`
                                   * ```
                                   *
                                   * When `repeat` is invoked, it returns a directive function that closes over
                                   * `items` and the template function. When the outer template is rendered, the
                                   * return directive function is called with the Part for the expression.
                                   * `repeat` then performs it's custom logic to render multiple items.
                                   *
                                   * @param f The directive factory function. Must be a function that returns a
                                   * function of the signature `(part: Part) => void`. The returned function will
                                   * be called with the part object.
                                   *
                                   * @example
                                   *
                                   * import {directive, html} from 'lit-html';
                                   *
                                   * const immutable = directive((v) => (part) => {
                                   *   if (part.value !== v) {
                                   *     part.setValue(v)
                                   *   }
                                   * });
                                   */var directive$1={directive:directive,isDirective:isDirective};/**
    * @license
    * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
    * This code may only be used under the BSD style license found at
    * http://polymer.github.io/LICENSE.txt
    * The complete set of authors may be found at
    * http://polymer.github.io/AUTHORS.txt
    * The complete set of contributors may be found at
    * http://polymer.github.io/CONTRIBUTORS.txt
    * Code distributed by Google as part of the polymer project is also
    * subject to an additional IP rights grant found at
    * http://polymer.github.io/PATENTS.txt
    */ /**
        * A sentinel value that signals that a value was handled by a directive and
        * should not be written to the DOM.
        */const noChange={},nothing={};/**
                             * A sentinel value that signals a NodePart to fully clear its content.
                             */var part={noChange:noChange,nothing:nothing};class TemplateInstance{constructor(template,processor,options){this.__parts=[];this.template=template;this.processor=processor;this.options=options}update(values){let i=0;for(const part of this.__parts){if(part!==void 0){part.setValue(values[i])}i++}for(const part of this.__parts){if(part!==void 0){part.commit()}}}_clone(){// There are a number of steps in the lifecycle of a template instance's
// DOM fragment:
//  1. Clone - create the instance fragment
//  2. Adopt - adopt into the main document
//  3. Process - find part markers and create parts
//  4. Upgrade - upgrade custom elements
//  5. Update - set node, attribute, property, etc., values
//  6. Connect - connect to the document. Optional and outside of this
//     method.
//
// We have a few constraints on the ordering of these steps:
//  * We need to upgrade before updating, so that property values will pass
//    through any property setters.
//  * We would like to process before upgrading so that we're sure that the
//    cloned fragment is inert and not disturbed by self-modifying DOM.
//  * We want custom elements to upgrade even in disconnected fragments.
//
// Given these constraints, with full custom elements support we would
// prefer the order: Clone, Process, Adopt, Upgrade, Update, Connect
//
// But Safari does not implement CustomElementRegistry#upgrade, so we
// can not implement that order and still have upgrade-before-update and
// upgrade disconnected fragments. So we instead sacrifice the
// process-before-upgrade constraint, since in Custom Elements v1 elements
// must not modify their light DOM in the constructor. We still have issues
// when co-existing with CEv0 elements like Polymer 1, and with polyfills
// that don't strictly adhere to the no-modification rule because shadow
// DOM, which may be created in the constructor, is emulated by being placed
// in the light DOM.
//
// The resulting order is on native is: Clone, Adopt, Upgrade, Process,
// Update, Connect. document.importNode() performs Clone, Adopt, and Upgrade
// in one step.
//
// The Custom Elements v1 polyfill supports upgrade(), so the order when
// polyfilled is the more ideal: Clone, Process, Adopt, Upgrade, Update,
// Connect.
const fragment=isCEPolyfill?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),stack=[],parts=this.template.parts,walker=document.createTreeWalker(fragment,133/* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */,null,!1);let partIndex=0,nodeIndex=0,part,node=walker.nextNode();// Loop through all the nodes and parts of a template
while(partIndex<parts.length){part=parts[partIndex];if(!isTemplatePartActive(part)){this.__parts.push(void 0);partIndex++;continue}// Progress the tree walker until we find our next part's node.
// Note that multiple parts may share the same node (attribute parts
// on a single element), so this loop may not run at all.
while(nodeIndex<part.index){nodeIndex++;if("TEMPLATE"===node.nodeName){stack.push(node);walker.currentNode=node.content}if(null===(node=walker.nextNode())){// We've exhausted the content inside a nested template element.
// Because we still have parts (the outer for-loop), we know:
// - There is a template in the stack
// - The walker will find a nextNode outside the template
walker.currentNode=stack.pop();node=walker.nextNode()}}// We've arrived at our part's node.
if("node"===part.type){const part=this.processor.handleTextExpression(this.options);part.insertAfterNode(node.previousSibling);this.__parts.push(part)}else{this.__parts.push(...this.processor.handleAttributeExpressions(node,part.name,part.strings,this.options))}partIndex++}if(isCEPolyfill){document.adoptNode(fragment);customElements.upgrade(fragment)}return fragment}}var templateInstance={TemplateInstance:TemplateInstance};const commentMarker=` ${marker} `;/**
                                      * The return type of `html`, which holds a Template and the values from
                                      * interpolated expressions.
                                      */class TemplateResult{constructor(strings,values,type,processor){this.strings=strings;this.values=values;this.type=type;this.processor=processor}/**
     * Returns a string of HTML used to create a `<template>` element.
     */getHTML(){const l=this.strings.length-1;let html="",isCommentBinding=!1;for(let i=0;i<l;i++){const s=this.strings[i],commentOpen=s.lastIndexOf("<!--");// For each binding we want to determine the kind of marker to insert
// into the template source before it's parsed by the browser's HTML
// parser. The marker type is based on whether the expression is in an
// attribute, text, or comment position.
//   * For node-position bindings we insert a comment with the marker
//     sentinel as its text content, like <!--{{lit-guid}}-->.
//   * For attribute bindings we insert just the marker sentinel for the
//     first binding, so that we support unquoted attribute bindings.
//     Subsequent bindings can use a comment marker because multi-binding
//     attributes must be quoted.
//   * For comment bindings we insert just the marker sentinel so we don't
//     close the comment.
//
// The following code scans the template source, but is *not* an HTML
// parser. We don't need to track the tree structure of the HTML, only
// whether a binding is inside a comment, and if not, if it appears to be
// the first binding in an attribute.
// We're in comment position if we have a comment open with no following
// comment close. Because <-- can appear in an attribute value there can
// be false positives.
isCommentBinding=(-1<commentOpen||isCommentBinding)&&-1===s.indexOf("-->",commentOpen+1);// Check to see if we have an attribute-like sequence preceding the
// expression. This can match "name=value" like structures in text,
// comments, and attribute values, so there can be false-positives.
const attributeMatch=lastAttributeNameRegex.exec(s);if(null===attributeMatch){// We're only in this branch if we don't have a attribute-like
// preceding sequence. For comments, this guards against unusual
// attribute values like <div foo="<!--${'bar'}">. Cases like
// <!-- foo=${'bar'}--> are handled correctly in the attribute branch
// below.
html+=s+(isCommentBinding?commentMarker:nodeMarker)}else{// For attributes we use just a marker sentinel, and also append a
// $lit$ suffix to the name to opt-out of attribute-specific parsing
// that IE and Edge do for style and certain SVG attributes.
html+=s.substr(0,attributeMatch.index)+attributeMatch[1]+attributeMatch[2]+boundAttributeSuffix+attributeMatch[3]+marker}}html+=this.strings[l];return html}getTemplateElement(){const template=document.createElement("template");template.innerHTML=this.getHTML();return template}}/**
   * A TemplateResult for SVG fragments.
   *
   * This class wraps HTML in an `<svg>` tag in order to parse its contents in the
   * SVG namespace, then modifies the template to remove the `<svg>` tag so that
   * clones only container the original fragment.
   */class SVGTemplateResult extends TemplateResult{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const template=super.getTemplateElement(),content=template.content,svgElement=content.firstChild;content.removeChild(svgElement);reparentNodes(content,svgElement.firstChild);return template}}var templateResult={TemplateResult:TemplateResult,SVGTemplateResult:SVGTemplateResult};const isPrimitive=value=>{return null===value||!("object"===typeof value||"function"===typeof value)},isIterable=value=>{return Array.isArray(value)||// eslint-disable-next-line @typescript-eslint/no-explicit-any
!!(value&&value[Symbol.iterator])};/**
    * Writes attribute values to the DOM for a group of AttributeParts bound to a
    * single attribute. The value is only set once even if there are multiple parts
    * for an attribute.
    */class AttributeCommitter{constructor(element,name,strings){this.dirty=!0;this.element=element;this.name=name;this.strings=strings;this.parts=[];for(let i=0;i<strings.length-1;i++){this.parts[i]=this._createPart()}}/**
     * Creates a single part. Override this to create a differnt type of part.
     */_createPart(){return new AttributePart(this)}_getValue(){const strings=this.strings,l=strings.length-1;let text="";for(let i=0;i<l;i++){text+=strings[i];const part=this.parts[i];if(part!==void 0){const v=part.value;if(isPrimitive(v)||!isIterable(v)){text+="string"===typeof v?v:v+""}else{for(const t of v){text+="string"===typeof t?t:t+""}}}}text+=strings[l];return text}commit(){if(this.dirty){this.dirty=!1;this.element.setAttribute(this.name,this._getValue())}}}/**
   * A Part that controls all or part of an attribute value.
   */class AttributePart{constructor(committer){this.value=void 0;this.committer=committer}setValue(value){if(value!==noChange&&(!isPrimitive(value)||value!==this.value)){this.value=value;// If the value is a not a directive, dirty the committer so that it'll
// call setAttribute. If the value is a directive, it'll dirty the
// committer if it calls setValue().
if(!isDirective(value)){this.committer.dirty=!0}}}commit(){while(isDirective(this.value)){const directive=this.value;this.value=noChange;directive(this)}if(this.value===noChange){return}this.committer.commit()}}/**
   * A Part that controls a location within a Node tree. Like a Range, NodePart
   * has start and end locations and can set and update the Nodes between those
   * locations.
   *
   * NodeParts support several value types: primitives, Nodes, TemplateResults,
   * as well as arrays and iterables of those types.
   */class NodePart{constructor(options){this.value=void 0;this.__pendingValue=void 0;this.options=options}/**
     * Appends this part into a container.
     *
     * This part must be empty, as its contents are not automatically moved.
     */appendInto(container){this.startNode=container.appendChild(createMarker());this.endNode=container.appendChild(createMarker())}/**
     * Inserts this part after the `ref` node (between `ref` and `ref`'s next
     * sibling). Both `ref` and its next sibling must be static, unchanging nodes
     * such as those that appear in a literal section of a template.
     *
     * This part must be empty, as its contents are not automatically moved.
     */insertAfterNode(ref){this.startNode=ref;this.endNode=ref.nextSibling}/**
     * Appends this part into a parent part.
     *
     * This part must be empty, as its contents are not automatically moved.
     */appendIntoPart(part){part.__insert(this.startNode=createMarker());part.__insert(this.endNode=createMarker())}/**
     * Inserts this part after the `ref` part.
     *
     * This part must be empty, as its contents are not automatically moved.
     */insertAfterPart(ref){ref.__insert(this.startNode=createMarker());this.endNode=ref.endNode;ref.endNode=this.startNode}setValue(value){this.__pendingValue=value}commit(){if(null===this.startNode.parentNode){return}while(isDirective(this.__pendingValue)){const directive=this.__pendingValue;this.__pendingValue=noChange;directive(this)}const value=this.__pendingValue;if(value===noChange){return}if(isPrimitive(value)){if(value!==this.value){this.__commitText(value)}}else if(value instanceof TemplateResult){this.__commitTemplateResult(value)}else if(value instanceof Node){this.__commitNode(value)}else if(isIterable(value)){this.__commitIterable(value)}else if(value===nothing){this.value=nothing;this.clear()}else{// Fallback, will render the string representation
this.__commitText(value)}}__insert(node){this.endNode.parentNode.insertBefore(node,this.endNode)}__commitNode(value){if(this.value===value){return}this.clear();this.__insert(value);this.value=value}__commitText(value){const node=this.startNode.nextSibling;value=null==value?"":value;// If `value` isn't already a string, we explicitly convert it here in case
// it can't be implicitly converted - i.e. it's a symbol.
const valueAsString="string"===typeof value?value:value+"";if(node===this.endNode.previousSibling&&3===node.nodeType/* Node.TEXT_NODE */){// If we only have a single text node between the markers, we can just
// set its value, rather than replacing it.
// TODO(justinfagnani): Can we just check if this.value is primitive?
node.data=valueAsString}else{this.__commitNode(document.createTextNode(valueAsString))}this.value=value}__commitTemplateResult(value){const template=this.options.templateFactory(value);if(this.value instanceof TemplateInstance&&this.value.template===template){this.value.update(value.values)}else{// Make sure we propagate the template processor from the TemplateResult
// so that we use its syntax extension, etc. The template factory comes
// from the render function options so that it can control template
// caching and preprocessing.
const instance=new TemplateInstance(template,value.processor,this.options),fragment=instance._clone();instance.update(value.values);this.__commitNode(fragment);this.value=instance}}__commitIterable(value){// For an Iterable, we create a new InstancePart per item, then set its
// value to the item. This is a little bit of overhead for every item in
// an Iterable, but it lets us recurse easily and efficiently update Arrays
// of TemplateResults that will be commonly returned from expressions like:
// array.map((i) => html`${i}`), by reusing existing TemplateInstances.
// If _value is an array, then the previous render was of an
// iterable and _value will contain the NodeParts from the previous
// render. If _value is not an array, clear this part and make a new
// array for NodeParts.
if(!Array.isArray(this.value)){this.value=[];this.clear()}// Lets us keep track of how many items we stamped so we can clear leftover
// items from a previous render
const itemParts=this.value;let partIndex=0,itemPart;for(const item of value){// Try to reuse an existing part
itemPart=itemParts[partIndex];// If no existing part, create a new one
if(itemPart===void 0){itemPart=new NodePart(this.options);itemParts.push(itemPart);if(0===partIndex){itemPart.appendIntoPart(this)}else{itemPart.insertAfterPart(itemParts[partIndex-1])}}itemPart.setValue(item);itemPart.commit();partIndex++}if(partIndex<itemParts.length){// Truncate the parts array so _value reflects the current state
itemParts.length=partIndex;this.clear(itemPart&&itemPart.endNode)}}clear(startNode=this.startNode){removeNodes(this.startNode.parentNode,startNode.nextSibling,this.endNode)}}/**
   * Implements a boolean attribute, roughly as defined in the HTML
   * specification.
   *
   * If the value is truthy, then the attribute is present with a value of
   * ''. If the value is falsey, the attribute is removed.
   */class BooleanAttributePart{constructor(element,name,strings){this.value=void 0;this.__pendingValue=void 0;if(2!==strings.length||""!==strings[0]||""!==strings[1]){throw new Error("Boolean attributes can only contain a single expression")}this.element=element;this.name=name;this.strings=strings}setValue(value){this.__pendingValue=value}commit(){while(isDirective(this.__pendingValue)){const directive=this.__pendingValue;this.__pendingValue=noChange;directive(this)}if(this.__pendingValue===noChange){return}const value=!!this.__pendingValue;if(this.value!==value){if(value){this.element.setAttribute(this.name,"")}else{this.element.removeAttribute(this.name)}this.value=value}this.__pendingValue=noChange}}/**
   * Sets attribute values for PropertyParts, so that the value is only set once
   * even if there are multiple parts for a property.
   *
   * If an expression controls the whole property value, then the value is simply
   * assigned to the property under control. If there are string literals or
   * multiple expressions, then the strings are expressions are interpolated into
   * a string first.
   */class PropertyCommitter extends AttributeCommitter{constructor(element,name,strings){super(element,name,strings);this.single=2===strings.length&&""===strings[0]&&""===strings[1]}_createPart(){return new PropertyPart(this)}_getValue(){if(this.single){return this.parts[0].value}return super._getValue()}commit(){if(this.dirty){this.dirty=!1;// eslint-disable-next-line @typescript-eslint/no-explicit-any
this.element[this.name]=this._getValue()}}}class PropertyPart extends AttributePart{}// Detect event listener options support. If the `capture` property is read
// from the options object, then options are supported. If not, then the third
// argument to add/removeEventListener is interpreted as the boolean capture
// value so we should only pass the `capture` property.
let eventOptionsSupported=!1;// Wrap into an IIFE because MS Edge <= v41 does not support having try/catch
// blocks right into the body of a module
(()=>{try{const options={get capture(){eventOptionsSupported=!0;return!1}};// eslint-disable-next-line @typescript-eslint/no-explicit-any
window.addEventListener("test",options,options);// eslint-disable-next-line @typescript-eslint/no-explicit-any
window.removeEventListener("test",options,options)}catch(_e){// event options not supported
}})();class EventPart{constructor(element,eventName,eventContext){this.value=void 0;this.__pendingValue=void 0;this.element=element;this.eventName=eventName;this.eventContext=eventContext;this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(value){this.__pendingValue=value}commit(){while(isDirective(this.__pendingValue)){const directive=this.__pendingValue;this.__pendingValue=noChange;directive(this)}if(this.__pendingValue===noChange){return}const newListener=this.__pendingValue,oldListener=this.value,shouldRemoveListener=null==newListener||null!=oldListener&&(newListener.capture!==oldListener.capture||newListener.once!==oldListener.once||newListener.passive!==oldListener.passive),shouldAddListener=null!=newListener&&(null==oldListener||shouldRemoveListener);if(shouldRemoveListener){this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options)}if(shouldAddListener){this.__options=getOptions(newListener);this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)}this.value=newListener;this.__pendingValue=noChange}handleEvent(event){if("function"===typeof this.value){this.value.call(this.eventContext||this.element,event)}else{this.value.handleEvent(event)}}}// We copy options because of the inconsistent behavior of browsers when reading
// the third argument of add/removeEventListener. IE11 doesn't support options
// at all. Chrome 41 only reads `capture` if the argument is an object.
const getOptions=o=>o&&(eventOptionsSupported?{capture:o.capture,passive:o.passive,once:o.once}:o.capture);var parts={isPrimitive:isPrimitive,isIterable:isIterable,AttributeCommitter:AttributeCommitter,AttributePart:AttributePart,NodePart:NodePart,BooleanAttributePart:BooleanAttributePart,PropertyCommitter:PropertyCommitter,PropertyPart:PropertyPart,EventPart:EventPart};function templateFactory(result){let templateCache=templateCaches.get(result.type);if(templateCache===void 0){templateCache={stringsArray:new WeakMap,keyString:new Map};templateCaches.set(result.type,templateCache)}let template=templateCache.stringsArray.get(result.strings);if(template!==void 0){return template}// If the TemplateStringsArray is new, generate a key from the strings
// This key is shared between all templates with identical content
const key=result.strings.join(marker);// Check if we already have a Template for this key
template=templateCache.keyString.get(key);if(template===void 0){// If we have not seen this key before, create a new Template
template=new Template(result,result.getTemplateElement());// Cache the Template for this key
templateCache.keyString.set(key,template)}// Cache all future queries for this TemplateStringsArray
templateCache.stringsArray.set(result.strings,template);return template}const templateCaches=new Map;var templateFactory$1={templateFactory:templateFactory,templateCaches:templateCaches};const parts$1=new WeakMap,render=(result,container,options)=>{let part=parts$1.get(container);if(part===void 0){removeNodes(container,container.firstChild);parts$1.set(container,part=new NodePart(Object.assign({templateFactory},options)));part.appendInto(container)}part.setValue(result);part.commit()};/**
                                     * Renders a template result or other value to a container.
                                     *
                                     * To update a container with new values, reevaluate the template literal and
                                     * call `render` with the new result.
                                     *
                                     * @param result Any value renderable by NodePart - typically a TemplateResult
                                     *     created by evaluating a template tag like `html` or `svg`.
                                     * @param container A DOM parent to render to. The entire contents are either
                                     *     replaced, or efficiently updated if the same result type was previous
                                     *     rendered there.
                                     * @param options RenderOptions for the entire render tree rendered to this
                                     *     container. Render options must *not* change between renders to the same
                                     *     container, as those changes will not effect previously rendered DOM.
                                     */var render$1={parts:parts$1,render:render};class DefaultTemplateProcessor{/**
   * Create parts for an attribute-position binding, given the event, attribute
   * name, and string literals.
   *
   * @param element The element containing the binding
   * @param name  The attribute name
   * @param strings The string literals. There are always at least two strings,
   *   event for fully-controlled bindings with a single expression.
   */handleAttributeExpressions(element,name,strings,options){const prefix=name[0];if("."===prefix){const committer=new PropertyCommitter(element,name.slice(1),strings);return committer.parts}if("@"===prefix){return[new EventPart(element,name.slice(1),options.eventContext)]}if("?"===prefix){return[new BooleanAttributePart(element,name.slice(1),strings)]}const committer=new AttributeCommitter(element,name,strings);return committer.parts}/**
     * Create parts for a text-position binding.
     * @param templateFactory
     */handleTextExpression(options){return new NodePart(options)}}const defaultTemplateProcessor=new DefaultTemplateProcessor;var defaultTemplateProcessor$1={DefaultTemplateProcessor:DefaultTemplateProcessor,defaultTemplateProcessor:defaultTemplateProcessor};// This line will be used in regexes to search for lit-html usage.
// TODO(justinfagnani): inject version number at build time
if("undefined"!==typeof window){(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1")}/**
   * Interprets a template literal as an HTML template that can efficiently
   * render to and update a container.
   */const html=(strings,...values)=>new TemplateResult(strings,values,"html",defaultTemplateProcessor),svg=(strings,...values)=>new SVGTemplateResult(strings,values,"svg",defaultTemplateProcessor);/**
                                                                                                                    * Interprets a template literal as an SVG template that can efficiently
                                                                                                                    * render to and update a container.
                                                                                                                    */var litHtml={html:html,svg:svg,DefaultTemplateProcessor:DefaultTemplateProcessor,defaultTemplateProcessor:defaultTemplateProcessor,directive:directive,isDirective:isDirective,removeNodes:removeNodes,reparentNodes:reparentNodes,noChange:noChange,nothing:nothing,AttributeCommitter:AttributeCommitter,AttributePart:AttributePart,BooleanAttributePart:BooleanAttributePart,EventPart:EventPart,isIterable:isIterable,isPrimitive:isPrimitive,NodePart:NodePart,PropertyCommitter:PropertyCommitter,PropertyPart:PropertyPart,parts:parts$1,render:render,templateCaches:templateCaches,templateFactory:templateFactory,TemplateInstance:TemplateInstance,SVGTemplateResult:SVGTemplateResult,TemplateResult:TemplateResult,createMarker:createMarker,isTemplatePartActive:isTemplatePartActive,Template:Template};const getTemplateCacheKey=(type,scopeName)=>`${type}--${scopeName}`;let compatibleShadyCSSVersion=!0;if("undefined"===typeof window.ShadyCSS){compatibleShadyCSSVersion=!1}else if("undefined"===typeof window.ShadyCSS.prepareTemplateDom){console.warn(`Incompatible ShadyCSS version detected. `+`Please update to at least @webcomponents/webcomponentsjs@2.0.2 and `+`@webcomponents/shadycss@1.3.1.`);compatibleShadyCSSVersion=!1}/**
   * Template factory which scopes template DOM using ShadyCSS.
   * @param scopeName {string}
   */const shadyTemplateFactory=scopeName=>result=>{const cacheKey=getTemplateCacheKey(result.type,scopeName);let templateCache=templateCaches.get(cacheKey);if(templateCache===void 0){templateCache={stringsArray:new WeakMap,keyString:new Map};templateCaches.set(cacheKey,templateCache)}let template=templateCache.stringsArray.get(result.strings);if(template!==void 0){return template}const key=result.strings.join(marker);template=templateCache.keyString.get(key);if(template===void 0){const element=result.getTemplateElement();if(compatibleShadyCSSVersion){window.ShadyCSS.prepareTemplateDom(element,scopeName)}template=new Template(result,element);templateCache.keyString.set(key,template)}templateCache.stringsArray.set(result.strings,template);return template},TEMPLATE_TYPES=["html","svg"],removeStylesFromLitTemplates=scopeName=>{TEMPLATE_TYPES.forEach(type=>{const templates=templateCaches.get(getTemplateCacheKey(type,scopeName));if(templates!==void 0){templates.keyString.forEach(template=>{const{element:{content}}=template,styles=new Set;// IE 11 doesn't support the iterable param Set constructor
Array.from(content.querySelectorAll("style")).forEach(s=>{styles.add(s)});removeNodesFromTemplate(template,styles)})}})},shadyRenderSet=new Set,prepareTemplateStyles=(scopeName,renderedDOM,template)=>{shadyRenderSet.add(scopeName);// If `renderedDOM` is stamped from a Template, then we need to edit that
// Template's underlying template element. Otherwise, we create one here
// to give to ShadyCSS, which still requires one while scoping.
const templateElement=!!template?template.element:document.createElement("template"),styles=renderedDOM.querySelectorAll("style"),{length}=styles;// Move styles out of rendered DOM and store.
// If there are no styles, skip unnecessary work
if(0===length){// Ensure prepareTemplateStyles is called to support adding
// styles via `prepareAdoptedCssText` since that requires that
// `prepareTemplateStyles` is called.
//
// ShadyCSS will only update styles containing @apply in the template
// given to `prepareTemplateStyles`. If no lit Template was given,
// ShadyCSS will not be able to update uses of @apply in any relevant
// template. However, this is not a problem because we only create the
// template for the purpose of supporting `prepareAdoptedCssText`,
// which doesn't support @apply at all.
window.ShadyCSS.prepareTemplateStyles(templateElement,scopeName);return}const condensedStyle=document.createElement("style");// Collect styles into a single style. This helps us make sure ShadyCSS
// manipulations will not prevent us from being able to fix up template
// part indices.
// NOTE: collecting styles is inefficient for browsers but ShadyCSS
// currently does this anyway. When it does not, this should be changed.
for(let i=0;i<length;i++){const style=styles[i];style.parentNode.removeChild(style);condensedStyle.textContent+=style.textContent}// Remove styles from nested templates in this scope.
removeStylesFromLitTemplates(scopeName);// And then put the condensed style into the "root" template passed in as
// `template`.
const content=templateElement.content;if(!!template){insertNodeIntoTemplate(template,condensedStyle,content.firstChild)}else{content.insertBefore(condensedStyle,content.firstChild)}// Note, it's important that ShadyCSS gets the template that `lit-html`
// will actually render so that it can update the style inside when
// needed (e.g. @apply native Shadow DOM case).
window.ShadyCSS.prepareTemplateStyles(templateElement,scopeName);const style=content.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==style){// When in native Shadow DOM, ensure the style created by ShadyCSS is
// included in initially rendered output (`renderedDOM`).
renderedDOM.insertBefore(style.cloneNode(!0),renderedDOM.firstChild)}else if(!!template){// When no style is left in the template, parts will be broken as a
// result. To fix this, we put back the style node ShadyCSS removed
// and then tell lit to remove that node from the template.
// There can be no style in the template in 2 cases (1) when Shady DOM
// is in use, ShadyCSS removes all styles, (2) when native Shadow DOM
// is in use ShadyCSS removes the style if it contains no content.
// NOTE, ShadyCSS creates its own style so we can safely add/remove
// `condensedStyle` here.
content.insertBefore(condensedStyle,content.firstChild);const removes=new Set([condensedStyle]);removeNodesFromTemplate(template,removes)}},render$2=(result,container,options)=>{if(!options||"object"!==typeof options||!options.scopeName){throw new Error("The `scopeName` option is required.")}const scopeName=options.scopeName,hasRendered=parts$1.has(container),needsScoping=compatibleShadyCSSVersion&&11===container.nodeType/* Node.DOCUMENT_FRAGMENT_NODE */&&!!container.host,firstScopeRender=needsScoping&&!shadyRenderSet.has(scopeName),renderContainer=firstScopeRender?document.createDocumentFragment():container;render(result,renderContainer,Object.assign({templateFactory:shadyTemplateFactory(scopeName)},options));// When performing first scope render,
// (1) We've rendered into a fragment so that there's a chance to
// `prepareTemplateStyles` before sub-elements hit the DOM
// (which might cause them to render based on a common pattern of
// rendering in a custom element's `connectedCallback`);
// (2) Scope the template with ShadyCSS one time only for this scope.
// (3) Render the fragment into the container and make sure the
// container knows its `part` is the one we just rendered. This ensures
// DOM will be re-used on subsequent renders.
if(firstScopeRender){const part=parts$1.get(renderContainer);parts$1.delete(renderContainer);// ShadyCSS might have style sheets (e.g. from `prepareAdoptedCssText`)
// that should apply to `renderContainer` even if the rendered value is
// not a TemplateInstance. However, it will only insert scoped styles
// into the document if `prepareTemplateStyles` has already been called
// for the given scope name.
const template=part.value instanceof TemplateInstance?part.value.template:void 0;prepareTemplateStyles(scopeName,renderContainer,template);removeNodes(container,container.firstChild);container.appendChild(renderContainer);parts$1.set(container,part)}// After elements have hit the DOM, update styling if this is the
// initial render to this container.
// This is needed whenever dynamic changes are made so it would be
// safest to do every render; however, this would regress performance
// so we leave it up to the user to call `ShadyCSS.styleElement`
// for dynamic changes.
if(!hasRendered&&needsScoping){window.ShadyCSS.styleElement(container.host)}};var shadyRender={render:render$2,html:html,svg:svg,TemplateResult:TemplateResult};// IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for LitElement usage.
// TODO(justinfagnani): inject version number at build time
(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");/**
                                                                                      * Sentinal value used to avoid calling lit-html's render function when
                                                                                      * subclasses do not implement `render`
                                                                                      */const renderNotImplemented={};class LitElement extends UpdatingElement{/**
   * Return the array of styles to apply to the element.
   * Override this method to integrate into a style management system.
   *
   * @nocollapse
   */static getStyles(){return this.styles}/** @nocollapse */static _getUniqueStyles(){// Only gather styles once per class
if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this))){return}// Take care not to call `this.getStyles()` multiple times since this
// generates new CSSResults each time.
// TODO(sorvell): Since we do not cache CSSResults by input, any
// shared styles will generate new stylesheet objects, which is wasteful.
// This should be addressed when a browser ships constructable
// stylesheets.
const userStyles=this.getStyles();if(userStyles===void 0){this._styles=[]}else if(Array.isArray(userStyles)){// De-duplicate styles preserving the _last_ instance in the set.
// This is a performance optimization to avoid duplicated styles that can
// occur especially when composing via subclassing.
// The last item is kept to try to preserve the cascade order with the
// assumption that it's most important that last added styles override
// previous styles.
const addStyles=(styles,set)=>styles.reduceRight((set,s)=>// Note: On IE set.add() does not return the set
Array.isArray(s)?addStyles(s,set):(set.add(s),set),set),set=addStyles(userStyles,new Set),styles=[];// Array.from does not work on Set in IE, otherwise return
// Array.from(addStyles(userStyles, new Set<CSSResult>())).reverse()
set.forEach(v=>styles.unshift(v));this._styles=styles}else{this._styles=[userStyles]}}/**
     * Performs element initialization. By default this calls `createRenderRoot`
     * to create the element `renderRoot` node and captures any pre-set values for
     * registered properties.
     */initialize(){super.initialize();this.constructor._getUniqueStyles();this.renderRoot=this.createRenderRoot();// Note, if renderRoot is not a shadowRoot, styles would/could apply to the
// element's getRootNode(). While this could be done, we're choosing not to
// support this now since it would require different logic around de-duping.
if(window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot){this.adoptStyles()}}/**
     * Returns the node into which the element should render and by default
     * creates and returns an open shadowRoot. Implement to customize where the
     * element's DOM is rendered. For example, to render into the element's
     * childNodes, return `this`.
     * @returns {Element|DocumentFragment} Returns a node into which to render.
     */createRenderRoot(){return this.attachShadow({mode:"open"})}/**
     * Applies styling to the element shadowRoot using the `static get styles`
     * property. Styling will apply using `shadowRoot.adoptedStyleSheets` where
     * available and will fallback otherwise. When Shadow DOM is polyfilled,
     * ShadyCSS scopes styles and adds them to the document. When Shadow DOM
     * is available but `adoptedStyleSheets` is not, styles are appended to the
     * end of the `shadowRoot` to [mimic spec
     * behavior](https://wicg.github.io/construct-stylesheets/#using-constructed-stylesheets).
     */adoptStyles(){const styles=this.constructor._styles;if(0===styles.length){return}// There are three separate cases here based on Shadow DOM support.
// (1) shadowRoot polyfilled: use ShadyCSS
// (2) shadowRoot.adoptedStyleSheets available: use it.
// (3) shadowRoot.adoptedStyleSheets polyfilled: append styles after
// rendering
if(window.ShadyCSS!==void 0&&!window.ShadyCSS.nativeShadow){window.ShadyCSS.ScopingShim.prepareAdoptedCssText(styles.map(s=>s.cssText),this.localName)}else if(supportsAdoptingStyleSheets){this.renderRoot.adoptedStyleSheets=styles.map(s=>s.styleSheet)}else{// This must be done after rendering so the actual style insertion is done
// in `update`.
this._needsShimAdoptedStyleSheets=!0}}connectedCallback(){super.connectedCallback();// Note, first update/render handles styleElement so we only call this if
// connected after first update.
if(this.hasUpdated&&window.ShadyCSS!==void 0){window.ShadyCSS.styleElement(this)}}/**
     * Updates the element. This method reflects property values to attributes
     * and calls `render` to render DOM via lit-html. Setting properties inside
     * this method will *not* trigger another update.
     * @param _changedProperties Map of changed properties with old values
     */update(changedProperties){// Setting properties in `render` should not trigger an update. Since
// updates are allowed after super.update, it's important to call `render`
// before that.
const templateResult=this.render();super.update(changedProperties);// If render is not implemented by the component, don't call lit-html render
if(templateResult!==renderNotImplemented){this.constructor.render(templateResult,this.renderRoot,{scopeName:this.localName,eventContext:this})}// When native Shadow DOM is used but adoptedStyles are not supported,
// insert styling after rendering to ensure adoptedStyles have highest
// priority.
if(this._needsShimAdoptedStyleSheets){this._needsShimAdoptedStyleSheets=!1;this.constructor._styles.forEach(s=>{const style=document.createElement("style");style.textContent=s.cssText;this.renderRoot.appendChild(style)})}}/**
     * Invoked on each update to perform rendering tasks. This method may return
     * any value renderable by lit-html's NodePart - typically a TemplateResult.
     * Setting properties inside this method will *not* trigger the element to
     * update.
     */render(){return renderNotImplemented}}/**
   * Ensure this class is marked as `finalized` as an optimization ensuring
   * it will not needlessly try to `finalize`.
   *
   * Note this property name is a string to prevent breaking Closure JS Compiler
   * optimizations. See updating-element.ts for more information.
   */LitElement.finalized=!0;/**
                                 * Render method used to render the value to the element's DOM.
                                 * @param result The value to render.
                                 * @param container Node into which to render.
                                 * @param options Element name.
                                 * @nocollapse
                                 */LitElement.render=render$2;var litElement={LitElement:LitElement,defaultConverter:defaultConverter,notEqual:notEqual,UpdatingElement:UpdatingElement,customElement:customElement,property:property,internalProperty:internalProperty,query:query,queryAsync:queryAsync,queryAll:queryAll,eventOptions:eventOptions,queryAssignedNodes:queryAssignedNodes,html:html,svg:svg,TemplateResult:TemplateResult,SVGTemplateResult:SVGTemplateResult,supportsAdoptingStyleSheets:supportsAdoptingStyleSheets,CSSResult:CSSResult,unsafeCSS:unsafeCSS,css:css};const previousValues=new WeakMap,ifDefined=directive(value=>part=>{const previousValue=previousValues.get(part);if(value===void 0&&part instanceof AttributePart){// If the value is undefined, remove the attribute, but only if the value
// was previously defined.
if(previousValue!==void 0||!previousValues.has(part)){const name=part.committer.name;part.committer.element.removeAttribute(name)}}else if(value!==previousValue){part.setValue(value)}previousValues.set(part,value)});/**
                                       * For AttributeParts, sets the attribute if the value is defined and removes
                                       * the attribute if the value is undefined.
                                       *
                                       * For other part types, this directive is a no-op.
                                       */var ifDefined$1={ifDefined:ifDefined};// TODO(kschaaf): Refactor into Part API?
const createAndInsertPart=(containerPart,beforePart)=>{const container=containerPart.startNode.parentNode,beforeNode=beforePart===void 0?containerPart.endNode:beforePart.startNode,startNode=container.insertBefore(createMarker(),beforeNode);container.insertBefore(createMarker(),beforeNode);const newPart=new NodePart(containerPart.options);newPart.insertAfterNode(startNode);return newPart},updatePart=(part,value)=>{part.setValue(value);part.commit();return part},insertPartBefore=(containerPart,part,ref)=>{const container=containerPart.startNode.parentNode,beforeNode=ref?ref.startNode:containerPart.endNode,endNode=part.endNode.nextSibling;if(endNode!==beforeNode){reparentNodes(container,part.startNode,endNode,beforeNode)}},removePart=part=>{removeNodes(part.startNode.parentNode,part.startNode,part.endNode.nextSibling)},generateMap=(list,start,end)=>{const map=new Map;for(let i=start;i<=end;i++){map.set(list[i],i)}return map},partListCache=new WeakMap,keyListCache=new WeakMap,repeat=directive((items,keyFnOrTemplate,template)=>{let keyFn;if(template===void 0){template=keyFnOrTemplate}else if(keyFnOrTemplate!==void 0){keyFn=keyFnOrTemplate}return containerPart=>{if(!(containerPart instanceof NodePart)){throw new Error("repeat can only be used in text bindings")}// Old part & key lists are retrieved from the last update
// (associated with the part for this instance of the directive)
const oldParts=partListCache.get(containerPart)||[],oldKeys=keyListCache.get(containerPart)||[],newParts=[],newValues=[],newKeys=[];let index=0;for(const item of items){newKeys[index]=keyFn?keyFn(item,index):index;newValues[index]=template(item,index);index++}// Maps from key to index for current and previous update; these
// are generated lazily only when needed as a performance
// optimization, since they are only required for multiple
// non-contiguous changes in the list, which are less common.
let newKeyToIndexMap,oldKeyToIndexMap,oldHead=0,oldTail=oldParts.length-1,newHead=0,newTail=newValues.length-1;// Overview of O(n) reconciliation algorithm (general approach
// based on ideas found in ivi, vue, snabbdom, etc.):
//
// * We start with the list of old parts and new values (and
//   arrays of their respective keys), head/tail pointers into
//   each, and we build up the new list of parts by updating
//   (and when needed, moving) old parts or creating new ones.
//   The initial scenario might look like this (for brevity of
//   the diagrams, the numbers in the array reflect keys
//   associated with the old parts or new values, although keys
//   and parts/values are actually stored in parallel arrays
//   indexed using the same head/tail pointers):
//
//      oldHead v                 v oldTail
//   oldKeys:  [0, 1, 2, 3, 4, 5, 6]
//   newParts: [ ,  ,  ,  ,  ,  ,  ]
//   newKeys:  [0, 2, 1, 4, 3, 7, 6] <- reflects the user's new
//                                      item order
//      newHead ^                 ^ newTail
//
// * Iterate old & new lists from both sides, updating,
//   swapping, or removing parts at the head/tail locations
//   until neither head nor tail can move.
//
// * Example below: keys at head pointers match, so update old
//   part 0 in-place (no need to move it) and record part 0 in
//   the `newParts` list. The last thing we do is advance the
//   `oldHead` and `newHead` pointers (will be reflected in the
//   next diagram).
//
//      oldHead v                 v oldTail
//   oldKeys:  [0, 1, 2, 3, 4, 5, 6]
//   newParts: [0,  ,  ,  ,  ,  ,  ] <- heads matched: update 0
//   newKeys:  [0, 2, 1, 4, 3, 7, 6]    and advance both oldHead
//                                      & newHead
//      newHead ^                 ^ newTail
//
// * Example below: head pointers don't match, but tail
//   pointers do, so update part 6 in place (no need to move
//   it), and record part 6 in the `newParts` list. Last,
//   advance the `oldTail` and `oldHead` pointers.
//
//         oldHead v              v oldTail
//   oldKeys:  [0, 1, 2, 3, 4, 5, 6]
//   newParts: [0,  ,  ,  ,  ,  , 6] <- tails matched: update 6
//   newKeys:  [0, 2, 1, 4, 3, 7, 6]    and advance both oldTail
//                                      & newTail
//         newHead ^              ^ newTail
//
// * If neither head nor tail match; next check if one of the
//   old head/tail items was removed. We first need to generate
//   the reverse map of new keys to index (`newKeyToIndexMap`),
//   which is done once lazily as a performance optimization,
//   since we only hit this case if multiple non-contiguous
//   changes were made. Note that for contiguous removal
//   anywhere in the list, the head and tails would advance
//   from either end and pass each other before we get to this
//   case and removals would be handled in the final while loop
//   without needing to generate the map.
//
// * Example below: The key at `oldTail` was removed (no longer
//   in the `newKeyToIndexMap`), so remove that part from the
//   DOM and advance just the `oldTail` pointer.
//
//         oldHead v           v oldTail
//   oldKeys:  [0, 1, 2, 3, 4, 5, 6]
//   newParts: [0,  ,  ,  ,  ,  , 6] <- 5 not in new map: remove
//   newKeys:  [0, 2, 1, 4, 3, 7, 6]    5 and advance oldTail
//         newHead ^           ^ newTail
//
// * Once head and tail cannot move, any mismatches are due to
//   either new or moved items; if a new key is in the previous
//   "old key to old index" map, move the old part to the new
//   location, otherwise create and insert a new part. Note
//   that when moving an old part we null its position in the
//   oldParts array if it lies between the head and tail so we
//   know to skip it when the pointers get there.
//
// * Example below: neither head nor tail match, and neither
//   were removed; so find the `newHead` key in the
//   `oldKeyToIndexMap`, and move that old part's DOM into the
//   next head position (before `oldParts[oldHead]`). Last,
//   null the part in the `oldPart` array since it was
//   somewhere in the remaining oldParts still to be scanned
//   (between the head and tail pointers) so that we know to
//   skip that old part on future iterations.
//
//         oldHead v        v oldTail
//   oldKeys:  [0, 1, -, 3, 4, 5, 6]
//   newParts: [0, 2,  ,  ,  ,  , 6] <- stuck: update & move 2
//   newKeys:  [0, 2, 1, 4, 3, 7, 6]    into place and advance
//                                      newHead
//         newHead ^           ^ newTail
//
// * Note that for moves/insertions like the one above, a part
//   inserted at the head pointer is inserted before the
//   current `oldParts[oldHead]`, and a part inserted at the
//   tail pointer is inserted before `newParts[newTail+1]`. The
//   seeming asymmetry lies in the fact that new parts are
//   moved into place outside in, so to the right of the head
//   pointer are old parts, and to the right of the tail
//   pointer are new parts.
//
// * We always restart back from the top of the algorithm,
//   allowing matching and simple updates in place to
//   continue...
//
// * Example below: the head pointers once again match, so
//   simply update part 1 and record it in the `newParts`
//   array.  Last, advance both head pointers.
//
//         oldHead v        v oldTail
//   oldKeys:  [0, 1, -, 3, 4, 5, 6]
//   newParts: [0, 2, 1,  ,  ,  , 6] <- heads matched: update 1
//   newKeys:  [0, 2, 1, 4, 3, 7, 6]    and advance both oldHead
//                                      & newHead
//            newHead ^        ^ newTail
//
// * As mentioned above, items that were moved as a result of
//   being stuck (the final else clause in the code below) are
//   marked with null, so we always advance old pointers over
//   these so we're comparing the next actual old value on
//   either end.
//
// * Example below: `oldHead` is null (already placed in
//   newParts), so advance `oldHead`.
//
//            oldHead v     v oldTail
//   oldKeys:  [0, 1, -, 3, 4, 5, 6] <- old head already used:
//   newParts: [0, 2, 1,  ,  ,  , 6]    advance oldHead
//   newKeys:  [0, 2, 1, 4, 3, 7, 6]
//               newHead ^     ^ newTail
//
// * Note it's not critical to mark old parts as null when they
//   are moved from head to tail or tail to head, since they
//   will be outside the pointer range and never visited again.
//
// * Example below: Here the old tail key matches the new head
//   key, so the part at the `oldTail` position and move its
//   DOM to the new head position (before `oldParts[oldHead]`).
//   Last, advance `oldTail` and `newHead` pointers.
//
//               oldHead v  v oldTail
//   oldKeys:  [0, 1, -, 3, 4, 5, 6]
//   newParts: [0, 2, 1, 4,  ,  , 6] <- old tail matches new
//   newKeys:  [0, 2, 1, 4, 3, 7, 6]   head: update & move 4,
//                                     advance oldTail & newHead
//               newHead ^     ^ newTail
//
// * Example below: Old and new head keys match, so update the
//   old head part in place, and advance the `oldHead` and
//   `newHead` pointers.
//
//               oldHead v oldTail
//   oldKeys:  [0, 1, -, 3, 4, 5, 6]
//   newParts: [0, 2, 1, 4, 3,   ,6] <- heads match: update 3
//   newKeys:  [0, 2, 1, 4, 3, 7, 6]    and advance oldHead &
//                                      newHead
//                  newHead ^  ^ newTail
//
// * Once the new or old pointers move past each other then all
//   we have left is additions (if old list exhausted) or
//   removals (if new list exhausted). Those are handled in the
//   final while loops at the end.
//
// * Example below: `oldHead` exceeded `oldTail`, so we're done
//   with the main loop.  Create the remaining part and insert
//   it at the new head position, and the update is complete.
//
//                   (oldHead > oldTail)
//   oldKeys:  [0, 1, -, 3, 4, 5, 6]
//   newParts: [0, 2, 1, 4, 3, 7 ,6] <- create and insert 7
//   newKeys:  [0, 2, 1, 4, 3, 7, 6]
//                     newHead ^ newTail
//
// * Note that the order of the if/else clauses is not
//   important to the algorithm, as long as the null checks
//   come first (to ensure we're always working on valid old
//   parts) and that the final else clause comes last (since
//   that's where the expensive moves occur). The order of
//   remaining clauses is is just a simple guess at which cases
//   will be most common.
//
// * TODO(kschaaf) Note, we could calculate the longest
//   increasing subsequence (LIS) of old items in new position,
//   and only move those not in the LIS set. However that costs
//   O(nlogn) time and adds a bit more code, and only helps
//   make rare types of mutations require fewer moves. The
//   above handles removes, adds, reversal, swaps, and single
//   moves of contiguous items in linear time, in the minimum
//   number of moves. As the number of multiple moves where LIS
//   might help approaches a random shuffle, the LIS
//   optimization becomes less helpful, so it seems not worth
//   the code at this point. Could reconsider if a compelling
//   case arises.
while(oldHead<=oldTail&&newHead<=newTail){if(null===oldParts[oldHead]){// `null` means old part at head has already been used
// below; skip
oldHead++}else if(null===oldParts[oldTail]){// `null` means old part at tail has already been used
// below; skip
oldTail--}else if(oldKeys[oldHead]===newKeys[newHead]){// Old head matches new head; update in place
newParts[newHead]=updatePart(oldParts[oldHead],newValues[newHead]);oldHead++;newHead++}else if(oldKeys[oldTail]===newKeys[newTail]){// Old tail matches new tail; update in place
newParts[newTail]=updatePart(oldParts[oldTail],newValues[newTail]);oldTail--;newTail--}else if(oldKeys[oldHead]===newKeys[newTail]){// Old head matches new tail; update and move to new tail
newParts[newTail]=updatePart(oldParts[oldHead],newValues[newTail]);insertPartBefore(containerPart,oldParts[oldHead],newParts[newTail+1]);oldHead++;newTail--}else if(oldKeys[oldTail]===newKeys[newHead]){// Old tail matches new head; update and move to new head
newParts[newHead]=updatePart(oldParts[oldTail],newValues[newHead]);insertPartBefore(containerPart,oldParts[oldTail],oldParts[oldHead]);oldTail--;newHead++}else{if(newKeyToIndexMap===void 0){// Lazily generate key-to-index maps, used for removals &
// moves below
newKeyToIndexMap=generateMap(newKeys,newHead,newTail);oldKeyToIndexMap=generateMap(oldKeys,oldHead,oldTail)}if(!newKeyToIndexMap.has(oldKeys[oldHead])){// Old head is no longer in new list; remove
removePart(oldParts[oldHead]);oldHead++}else if(!newKeyToIndexMap.has(oldKeys[oldTail])){// Old tail is no longer in new list; remove
removePart(oldParts[oldTail]);oldTail--}else{// Any mismatches at this point are due to additions or
// moves; see if we have an old part we can reuse and move
// into place
const oldIndex=oldKeyToIndexMap.get(newKeys[newHead]),oldPart=oldIndex!==void 0?oldParts[oldIndex]:null;if(null===oldPart){// No old part for this value; create a new one and
// insert it
const newPart=createAndInsertPart(containerPart,oldParts[oldHead]);updatePart(newPart,newValues[newHead]);newParts[newHead]=newPart}else{// Reuse old part
newParts[newHead]=updatePart(oldPart,newValues[newHead]);insertPartBefore(containerPart,oldPart,oldParts[oldHead]);// This marks the old part as having been used, so that
// it will be skipped in the first two checks above
oldParts[oldIndex]=null}newHead++}}}// Add parts for any remaining new values
while(newHead<=newTail){// For all remaining additions, we insert before last new
// tail, since old pointers are no longer valid
const newPart=createAndInsertPart(containerPart,newParts[newTail+1]);updatePart(newPart,newValues[newHead]);newParts[newHead++]=newPart}// Remove any remaining unused old parts
while(oldHead<=oldTail){const oldPart=oldParts[oldHead++];if(null!==oldPart){removePart(oldPart)}}// Save order of new parts for next round
partListCache.set(containerPart,newParts);keyListCache.set(containerPart,newKeys)}});var repeat$1={repeat:repeat};// unsafeHTML directive, and the DocumentFragment that was last set as a value.
// The DocumentFragment is used as a unique key to check if the last value
// rendered to the part was with unsafeHTML. If not, we'll always re-render the
// value passed to unsafeHTML.
const previousValues$1=new WeakMap,unsafeHTML=directive(value=>part=>{if(!(part instanceof NodePart)){throw new Error("unsafeHTML can only be used in text bindings")}const previousValue=previousValues$1.get(part);if(previousValue!==void 0&&isPrimitive(value)&&value===previousValue.value&&part.value===previousValue.fragment){return}const template=document.createElement("template");template.innerHTML=value;// innerHTML casts to string internally
const fragment=document.importNode(template.content,!0);part.setValue(fragment);previousValues$1.set(part,{value,fragment})});/**
                                        * Renders the result as HTML, rather than text.
                                        *
                                        * Note, this is unsafe to use with any user-provided input that hasn't been
                                        * sanitized or escaped, as it may lead to cross-site-scripting
                                        * vulnerabilities.
                                        */var unsafeHtml={unsafeHTML:unsafeHTML},isBrowser="undefined"!==typeof window&&"undefined"!==typeof document&&"undefined"!==typeof navigator,timeoutDuration=function(){for(var longerTimeoutBrowsers=["Edge","Trident","Firefox"],i=0;i<longerTimeoutBrowsers.length;i+=1){if(isBrowser&&0<=navigator.userAgent.indexOf(longerTimeoutBrowsers[i])){return 1}}return 0}();/**!
    * @fileOverview Kickass library to create and place poppers near their reference elements.
    * @version 1.16.1
    * @license
    * Copyright (c) 2016 Federico Zivolo and contributors
    *
    * Permission is hereby granted, free of charge, to any person obtaining a copy
    * of this software and associated documentation files (the "Software"), to deal
    * in the Software without restriction, including without limitation the rights
    * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    * copies of the Software, and to permit persons to whom the Software is
    * furnished to do so, subject to the following conditions:
    *
    * The above copyright notice and this permission notice shall be included in all
    * copies or substantial portions of the Software.
    *
    * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    * SOFTWARE.
    */function microtaskDebounce(fn){var called=!1;return function(){if(called){return}called=!0;window.Promise.resolve().then(function(){called=!1;fn()})}}function taskDebounce(fn){var scheduled=!1;return function(){if(!scheduled){scheduled=!0;setTimeout(function(){scheduled=!1;fn()},timeoutDuration)}}}var supportsMicroTasks=isBrowser&&window.Promise,debounce$1=supportsMicroTasks?microtaskDebounce:taskDebounce;/**
                                                      * Create a debounced version of a method, that's asynchronously deferred
                                                      * but called in the minimum time possible.
                                                      *
                                                      * @method
                                                      * @memberof Popper.Utils
                                                      * @argument {Function} fn
                                                      * @returns {Function}
                                                      */ /**
                                                                        * Check if the given variable is a function
                                                                        * @method
                                                                        * @memberof Popper.Utils
                                                                        * @argument {Any} functionToCheck - variable to check
                                                                        * @returns {Boolean} answer to: is a function?
                                                                        */function isFunction(functionToCheck){var getType={};return functionToCheck&&"[object Function]"===getType.toString.call(functionToCheck)}/**
   * Get CSS computed property of the given element
   * @method
   * @memberof Popper.Utils
   * @argument {Eement} element
   * @argument {String} property
   */function getStyleComputedProperty(element,property){if(1!==element.nodeType){return[]}// NOTE: 1 DOM access here
var window=element.ownerDocument.defaultView,css=window.getComputedStyle(element,null);return property?css[property]:css}/**
   * Returns the parentNode or the host of the element
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Element} parent
   */function getParentNode(element){if("HTML"===element.nodeName){return element}return element.parentNode||element.host}/**
   * Returns the scrolling parent of the given element
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Element} scroll parent
   */function getScrollParent(element){// Return body, `getScroll` will take care to get the correct `scrollTop` from it
if(!element){return document.body}switch(element.nodeName){case"HTML":case"BODY":return element.ownerDocument.body;case"#document":return element.body;}// Firefox want us to check `-x` and `-y` variations as well
var _getStyleComputedProp=getStyleComputedProperty(element),overflow=_getStyleComputedProp.overflow,overflowX=_getStyleComputedProp.overflowX,overflowY=_getStyleComputedProp.overflowY;if(/(auto|scroll|overlay)/.test(overflow+overflowY+overflowX)){return element}return getScrollParent(getParentNode(element))}/**
   * Returns the reference node of the reference object, or the reference object itself.
   * @method
   * @memberof Popper.Utils
   * @param {Element|Object} reference - the reference element (the popper will be relative to this)
   * @returns {Element} parent
   */function getReferenceNode(reference){return reference&&reference.referenceNode?reference.referenceNode:reference}var isIE11=isBrowser&&!!(window.MSInputMethodContext&&document.documentMode),isIE10=isBrowser&&/MSIE 10/.test(navigator.userAgent);/**
                                                                * Determines if the browser is Internet Explorer
                                                                * @method
                                                                * @memberof Popper.Utils
                                                                * @param {Number} version to check
                                                                * @returns {Boolean} isIE
                                                                */function isIE(version){if(11===version){return isIE11}if(10===version){return isIE10}return isIE11||isIE10}/**
   * Returns the offset parent of the given element
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Element} offset parent
   */function getOffsetParent(element){if(!element){return document.documentElement}var noOffsetParent=isIE(10)?document.body:null,offsetParent=element.offsetParent||null;// NOTE: 1 DOM access here
// Skip hidden elements which don't have an offsetParent
while(offsetParent===noOffsetParent&&element.nextElementSibling){offsetParent=(element=element.nextElementSibling).offsetParent}var nodeName=offsetParent&&offsetParent.nodeName;if(!nodeName||"BODY"===nodeName||"HTML"===nodeName){return element?element.ownerDocument.documentElement:document.documentElement}// .offsetParent will return the closest TH, TD or TABLE in case
// no offsetParent is present, I hate this job...
if(-1!==["TH","TD","TABLE"].indexOf(offsetParent.nodeName)&&"static"===getStyleComputedProperty(offsetParent,"position")){return getOffsetParent(offsetParent)}return offsetParent}function isOffsetContainer(element){var nodeName=element.nodeName;if("BODY"===nodeName){return!1}return"HTML"===nodeName||getOffsetParent(element.firstElementChild)===element}/**
   * Finds the root node (document, shadowDOM root) of the given element
   * @method
   * @memberof Popper.Utils
   * @argument {Element} node
   * @returns {Element} root node
   */function getRoot(node){if(null!==node.parentNode){return getRoot(node.parentNode)}return node}/**
   * Finds the offset parent common to the two provided nodes
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element1
   * @argument {Element} element2
   * @returns {Element} common offset parent
   */function findCommonOffsetParent(element1,element2){// This check is needed to avoid errors in case one of the elements isn't defined for any reason
if(!element1||!element1.nodeType||!element2||!element2.nodeType){return document.documentElement}// Here we make sure to give as "start" the element that comes first in the DOM
var order=element1.compareDocumentPosition(element2)&Node.DOCUMENT_POSITION_FOLLOWING,start=order?element1:element2,end=order?element2:element1,range=document.createRange();range.setStart(start,0);range.setEnd(end,0);var commonAncestorContainer=range.commonAncestorContainer;// Both nodes are inside #document
if(element1!==commonAncestorContainer&&element2!==commonAncestorContainer||start.contains(end)){if(isOffsetContainer(commonAncestorContainer)){return commonAncestorContainer}return getOffsetParent(commonAncestorContainer)}// one of the nodes is inside shadowDOM, find which one
var element1root=getRoot(element1);if(element1root.host){return findCommonOffsetParent(element1root.host,element2)}else{return findCommonOffsetParent(element1,getRoot(element2).host)}}/**
   * Gets the scroll value of the given element in the given side (top and left)
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @argument {String} side `top` or `left`
   * @returns {number} amount of scrolled pixels
   */function getScroll(element){var side=1<arguments.length&&arguments[1]!==void 0?arguments[1]:"top",upperSide="top"===side?"scrollTop":"scrollLeft",nodeName=element.nodeName;if("BODY"===nodeName||"HTML"===nodeName){var html=element.ownerDocument.documentElement,scrollingElement=element.ownerDocument.scrollingElement||html;return scrollingElement[upperSide]}return element[upperSide]}/*
   * Sum or subtract the element scroll values (left and top) from a given rect object
   * @method
   * @memberof Popper.Utils
   * @param {Object} rect - Rect object you want to change
   * @param {HTMLElement} element - The element from the function reads the scroll values
   * @param {Boolean} subtract - set to true if you want to subtract the scroll values
   * @return {Object} rect - The modifier rect object
   */function includeScroll(rect,element){var subtract=2<arguments.length&&arguments[2]!==void 0?arguments[2]:!1,scrollTop=getScroll(element,"top"),scrollLeft=getScroll(element,"left"),modifier=subtract?-1:1;rect.top+=scrollTop*modifier;rect.bottom+=scrollTop*modifier;rect.left+=scrollLeft*modifier;rect.right+=scrollLeft*modifier;return rect}/*
   * Helper to detect borders of a given element
   * @method
   * @memberof Popper.Utils
   * @param {CSSStyleDeclaration} styles
   * Result of `getStyleComputedProperty` on the given element
   * @param {String} axis - `x` or `y`
   * @return {number} borders - The borders size of the given axis
   */function getBordersSize(styles,axis){var sideA="x"===axis?"Left":"Top",sideB="Left"===sideA?"Right":"Bottom";return parseFloat(styles["border"+sideA+"Width"])+parseFloat(styles["border"+sideB+"Width"])}function getSize(axis,body,html,computedStyle){return Math.max(body["offset"+axis],body["scroll"+axis],html["client"+axis],html["offset"+axis],html["scroll"+axis],isIE(10)?parseInt(html["offset"+axis])+parseInt(computedStyle["margin"+("Height"===axis?"Top":"Left")])+parseInt(computedStyle["margin"+("Height"===axis?"Bottom":"Right")]):0)}function getWindowSizes(document){var body=document.body,html=document.documentElement,computedStyle=isIE(10)&&getComputedStyle(html);return{height:getSize("Height",body,html,computedStyle),width:getSize("Width",body,html,computedStyle)}}var classCallCheck=function(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}},createClass=function(){function defineProperties(target,props){for(var i=0,descriptor;i<props.length;i++){descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1;descriptor.configurable=!0;if("value"in descriptor)descriptor.writable=!0;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}(),defineProperty=function(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0})}else{obj[key]=value}return obj},_extends$2=Object.assign||function(target){for(var i=1,source;i<arguments.length;i++){source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};/**
    * Given element offsets, generate an output similar to getBoundingClientRect
    * @method
    * @memberof Popper.Utils
    * @argument {Object} offsets
    * @returns {Object} ClientRect like output
    */function getClientRect(offsets){return _extends$2({},offsets,{right:offsets.left+offsets.width,bottom:offsets.top+offsets.height})}/**
   * Get bounding client rect of given element
   * @method
   * @memberof Popper.Utils
   * @param {HTMLElement} element
   * @return {Object} client rect
   */function getBoundingClientRect(element){var rect={};// IE10 10 FIX: Please, don't ask, the element isn't
// considered in DOM in some circumstances...
// This isn't reproducible in IE10 compatibility mode of IE11
try{if(isIE(10)){rect=element.getBoundingClientRect();var scrollTop=getScroll(element,"top"),scrollLeft=getScroll(element,"left");rect.top+=scrollTop;rect.left+=scrollLeft;rect.bottom+=scrollTop;rect.right+=scrollLeft}else{rect=element.getBoundingClientRect()}}catch(e){}var result={left:rect.left,top:rect.top,width:rect.right-rect.left,height:rect.bottom-rect.top},sizes="HTML"===element.nodeName?getWindowSizes(element.ownerDocument):{},width=sizes.width||element.clientWidth||result.width,height=sizes.height||element.clientHeight||result.height,horizScrollbar=element.offsetWidth-width,vertScrollbar=element.offsetHeight-height;// subtract scrollbar size from sizes
// if an hypothetical scrollbar is detected, we must be sure it's not a `border`
// we make this check conditional for performance reasons
if(horizScrollbar||vertScrollbar){var styles=getStyleComputedProperty(element);horizScrollbar-=getBordersSize(styles,"x");vertScrollbar-=getBordersSize(styles,"y");result.width-=horizScrollbar;result.height-=vertScrollbar}return getClientRect(result)}function getOffsetRectRelativeToArbitraryNode(children,parent){var fixedPosition=2<arguments.length&&arguments[2]!==void 0?arguments[2]:!1,isIE10=isIE(10),isHTML="HTML"===parent.nodeName,childrenRect=getBoundingClientRect(children),parentRect=getBoundingClientRect(parent),scrollParent=getScrollParent(children),styles=getStyleComputedProperty(parent),borderTopWidth=parseFloat(styles.borderTopWidth),borderLeftWidth=parseFloat(styles.borderLeftWidth);// In cases where the parent is fixed, we must ignore negative scroll in offset calc
if(fixedPosition&&isHTML){parentRect.top=Math.max(parentRect.top,0);parentRect.left=Math.max(parentRect.left,0)}var offsets=getClientRect({top:childrenRect.top-parentRect.top-borderTopWidth,left:childrenRect.left-parentRect.left-borderLeftWidth,width:childrenRect.width,height:childrenRect.height});offsets.marginTop=0;offsets.marginLeft=0;// Subtract margins of documentElement in case it's being used as parent
// we do this only on HTML because it's the only element that behaves
// differently when margins are applied to it. The margins are included in
// the box of the documentElement, in the other cases not.
if(!isIE10&&isHTML){var marginTop=parseFloat(styles.marginTop),marginLeft=parseFloat(styles.marginLeft);offsets.top-=borderTopWidth-marginTop;offsets.bottom-=borderTopWidth-marginTop;offsets.left-=borderLeftWidth-marginLeft;offsets.right-=borderLeftWidth-marginLeft;// Attach marginTop and marginLeft because in some circumstances we may need them
offsets.marginTop=marginTop;offsets.marginLeft=marginLeft}if(isIE10&&!fixedPosition?parent.contains(scrollParent):parent===scrollParent&&"BODY"!==scrollParent.nodeName){offsets=includeScroll(offsets,parent)}return offsets}function getViewportOffsetRectRelativeToArtbitraryNode(element){var excludeScroll=1<arguments.length&&arguments[1]!==void 0?arguments[1]:!1,html=element.ownerDocument.documentElement,relativeOffset=getOffsetRectRelativeToArbitraryNode(element,html),width=Math.max(html.clientWidth,window.innerWidth||0),height=Math.max(html.clientHeight,window.innerHeight||0),scrollTop=!excludeScroll?getScroll(html):0,scrollLeft=!excludeScroll?getScroll(html,"left"):0,offset={top:scrollTop-relativeOffset.top+relativeOffset.marginTop,left:scrollLeft-relativeOffset.left+relativeOffset.marginLeft,width:width,height:height};return getClientRect(offset)}/**
   * Check if the given element is fixed or is inside a fixed parent
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @argument {Element} customContainer
   * @returns {Boolean} answer to "isFixed?"
   */function isFixed(element){var nodeName=element.nodeName;if("BODY"===nodeName||"HTML"===nodeName){return!1}if("fixed"===getStyleComputedProperty(element,"position")){return!0}var parentNode=getParentNode(element);if(!parentNode){return!1}return isFixed(parentNode)}/**
   * Finds the first parent of an element that has a transformed property defined
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Element} first transformed parent or documentElement
   */function getFixedPositionOffsetParent(element){// This check is needed to avoid errors in case one of the elements isn't defined for any reason
if(!element||!element.parentElement||isIE()){return document.documentElement}var el=element.parentElement;while(el&&"none"===getStyleComputedProperty(el,"transform")){el=el.parentElement}return el||document.documentElement}/**
   * Computed the boundaries limits and return them
   * @method
   * @memberof Popper.Utils
   * @param {HTMLElement} popper
   * @param {HTMLElement} reference
   * @param {number} padding
   * @param {HTMLElement} boundariesElement - Element used to define the boundaries
   * @param {Boolean} fixedPosition - Is in fixed position mode
   * @returns {Object} Coordinates of the boundaries
   */function getBoundaries(popper,reference,padding,boundariesElement){var fixedPosition=4<arguments.length&&arguments[4]!==void 0?arguments[4]:!1,boundaries={top:0,left:0},offsetParent=fixedPosition?getFixedPositionOffsetParent(popper):findCommonOffsetParent(popper,getReferenceNode(reference));// NOTE: 1 DOM access here
// Handle viewport case
if("viewport"===boundariesElement){boundaries=getViewportOffsetRectRelativeToArtbitraryNode(offsetParent,fixedPosition)}else{// Handle other cases based on DOM element used as boundaries
var boundariesNode=void 0;if("scrollParent"===boundariesElement){boundariesNode=getScrollParent(getParentNode(reference));if("BODY"===boundariesNode.nodeName){boundariesNode=popper.ownerDocument.documentElement}}else if("window"===boundariesElement){boundariesNode=popper.ownerDocument.documentElement}else{boundariesNode=boundariesElement}var offsets=getOffsetRectRelativeToArbitraryNode(boundariesNode,offsetParent,fixedPosition);// In case of HTML, we need a different computation
if("HTML"===boundariesNode.nodeName&&!isFixed(offsetParent)){var _getWindowSizes=getWindowSizes(popper.ownerDocument),height=_getWindowSizes.height,width=_getWindowSizes.width;boundaries.top+=offsets.top-offsets.marginTop;boundaries.bottom=height+offsets.top;boundaries.left+=offsets.left-offsets.marginLeft;boundaries.right=width+offsets.left}else{// for all the other DOM elements, this one is good
boundaries=offsets}}// Add paddings
padding=padding||0;var isPaddingNumber="number"===typeof padding;boundaries.left+=isPaddingNumber?padding:padding.left||0;boundaries.top+=isPaddingNumber?padding:padding.top||0;boundaries.right-=isPaddingNumber?padding:padding.right||0;boundaries.bottom-=isPaddingNumber?padding:padding.bottom||0;return boundaries}function getArea(_ref){var width=_ref.width,height=_ref.height;return width*height}/**
   * Utility used to transform the `auto` placement to the placement with more
   * available space.
   * @method
   * @memberof Popper.Utils
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */function computeAutoPlacement(placement,refRect,popper,reference,boundariesElement){var padding=5<arguments.length&&arguments[5]!==void 0?arguments[5]:0;if(-1===placement.indexOf("auto")){return placement}var boundaries=getBoundaries(popper,reference,padding,boundariesElement),rects={top:{width:boundaries.width,height:refRect.top-boundaries.top},right:{width:boundaries.right-refRect.right,height:boundaries.height},bottom:{width:boundaries.width,height:boundaries.bottom-refRect.bottom},left:{width:refRect.left-boundaries.left,height:boundaries.height}},sortedAreas=Object.keys(rects).map(function(key){return _extends$2({key:key},rects[key],{area:getArea(rects[key])})}).sort(function(a,b){return b.area-a.area}),filteredAreas=sortedAreas.filter(function(_ref2){var width=_ref2.width,height=_ref2.height;return width>=popper.clientWidth&&height>=popper.clientHeight}),computedPlacement=0<filteredAreas.length?filteredAreas[0].key:sortedAreas[0].key,variation=placement.split("-")[1];return computedPlacement+(variation?"-"+variation:"")}/**
   * Get offsets to the reference element
   * @method
   * @memberof Popper.Utils
   * @param {Object} state
   * @param {Element} popper - the popper element
   * @param {Element} reference - the reference element (the popper will be relative to this)
   * @param {Element} fixedPosition - is in fixed position mode
   * @returns {Object} An object containing the offsets which will be applied to the popper
   */function getReferenceOffsets(state,popper,reference){var fixedPosition=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null,commonOffsetParent=fixedPosition?getFixedPositionOffsetParent(popper):findCommonOffsetParent(popper,getReferenceNode(reference));return getOffsetRectRelativeToArbitraryNode(reference,commonOffsetParent,fixedPosition)}/**
   * Get the outer sizes of the given element (offset size + margins)
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Object} object containing width and height properties
   */function getOuterSizes(element){var window=element.ownerDocument.defaultView,styles=window.getComputedStyle(element),x=parseFloat(styles.marginTop||0)+parseFloat(styles.marginBottom||0),y=parseFloat(styles.marginLeft||0)+parseFloat(styles.marginRight||0),result={width:element.offsetWidth+y,height:element.offsetHeight+x};return result}/**
   * Get the opposite placement of the given one
   * @method
   * @memberof Popper.Utils
   * @argument {String} placement
   * @returns {String} flipped placement
   */function getOppositePlacement(placement){var hash={left:"right",right:"left",bottom:"top",top:"bottom"};return placement.replace(/left|right|bottom|top/g,function(matched){return hash[matched]})}/**
   * Get offsets to the popper
   * @method
   * @memberof Popper.Utils
   * @param {Object} position - CSS position the Popper will get applied
   * @param {HTMLElement} popper - the popper element
   * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
   * @param {String} placement - one of the valid placement options
   * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
   */function getPopperOffsets(popper,referenceOffsets,placement){placement=placement.split("-")[0];// Get popper node sizes
var popperRect=getOuterSizes(popper),popperOffsets={width:popperRect.width,height:popperRect.height},isHoriz=-1!==["right","left"].indexOf(placement),mainSide=isHoriz?"top":"left",secondarySide=isHoriz?"left":"top",measurement=isHoriz?"height":"width",secondaryMeasurement=!isHoriz?"height":"width";// Add position, width and height to our offsets object
popperOffsets[mainSide]=referenceOffsets[mainSide]+referenceOffsets[measurement]/2-popperRect[measurement]/2;if(placement===secondarySide){popperOffsets[secondarySide]=referenceOffsets[secondarySide]-popperRect[secondaryMeasurement]}else{popperOffsets[secondarySide]=referenceOffsets[getOppositePlacement(secondarySide)]}return popperOffsets}/**
   * Mimics the `find` method of Array
   * @method
   * @memberof Popper.Utils
   * @argument {Array} arr
   * @argument prop
   * @argument value
   * @returns index or -1
   */function find(arr,check){// use native find if supported
if(Array.prototype.find){return arr.find(check)}// use `filter` to obtain the same behavior of `find`
return arr.filter(check)[0]}/**
   * Return the index of the matching object
   * @method
   * @memberof Popper.Utils
   * @argument {Array} arr
   * @argument prop
   * @argument value
   * @returns index or -1
   */function findIndex(arr,prop,value){// use native findIndex if supported
if(Array.prototype.findIndex){return arr.findIndex(function(cur){return cur[prop]===value})}// use `find` + `indexOf` if `findIndex` isn't supported
var match=find(arr,function(obj){return obj[prop]===value});return arr.indexOf(match)}/**
   * Loop trough the list of modifiers and run them in order,
   * each of them will then edit the data object.
   * @method
   * @memberof Popper.Utils
   * @param {dataObject} data
   * @param {Array} modifiers
   * @param {String} ends - Optional modifier name used as stopper
   * @returns {dataObject}
   */function runModifiers(modifiers,data,ends){var modifiersToRun=ends===void 0?modifiers:modifiers.slice(0,findIndex(modifiers,"name",ends));modifiersToRun.forEach(function(modifier){if(modifier["function"]){// eslint-disable-line dot-notation
console.warn("`modifier.function` is deprecated, use `modifier.fn`!")}var fn=modifier["function"]||modifier.fn;// eslint-disable-line dot-notation
if(modifier.enabled&&isFunction(fn)){// Add properties to offsets to make them a complete clientRect object
// we do this before each modifier to make sure the previous one doesn't
// mess with these values
data.offsets.popper=getClientRect(data.offsets.popper);data.offsets.reference=getClientRect(data.offsets.reference);data=fn(data,modifier)}});return data}/**
   * Updates the position of the popper, computing the new offsets and applying
   * the new style.<br />
   * Prefer `scheduleUpdate` over `update` because of performance reasons.
   * @method
   * @memberof Popper
   */function update(){// if popper is destroyed, don't perform any further update
if(this.state.isDestroyed){return}var data={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};// compute reference element offsets
data.offsets.reference=getReferenceOffsets(this.state,this.popper,this.reference,this.options.positionFixed);// compute auto placement, store placement inside the data object,
// modifiers will be able to edit `placement` if needed
// and refer to originalPlacement to know the original value
data.placement=computeAutoPlacement(this.options.placement,data.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding);// store the computed placement inside `originalPlacement`
data.originalPlacement=data.placement;data.positionFixed=this.options.positionFixed;// compute the popper offsets
data.offsets.popper=getPopperOffsets(this.popper,data.offsets.reference,data.placement);data.offsets.popper.position=this.options.positionFixed?"fixed":"absolute";// run the modifiers
data=runModifiers(this.modifiers,data);// the first `update` will call `onCreate` callback
// the other ones will call `onUpdate` callback
if(!this.state.isCreated){this.state.isCreated=!0;this.options.onCreate(data)}else{this.options.onUpdate(data)}}/**
   * Helper used to know if the given modifier is enabled.
   * @method
   * @memberof Popper.Utils
   * @returns {Boolean}
   */function isModifierEnabled(modifiers,modifierName){return modifiers.some(function(_ref){var name=_ref.name,enabled=_ref.enabled;return enabled&&name===modifierName})}/**
   * Get the prefixed supported property name
   * @method
   * @memberof Popper.Utils
   * @argument {String} property (camelCase)
   * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
   */function getSupportedPropertyName(property){for(var prefixes=[!1,"ms","Webkit","Moz","O"],upperProp=property.charAt(0).toUpperCase()+property.slice(1),i=0;i<prefixes.length;i++){var prefix=prefixes[i],toCheck=prefix?""+prefix+upperProp:property;if("undefined"!==typeof document.body.style[toCheck]){return toCheck}}return null}/**
   * Destroys the popper.
   * @method
   * @memberof Popper
   */function destroy(){this.state.isDestroyed=!0;// touch DOM only if `applyStyle` modifier is enabled
if(isModifierEnabled(this.modifiers,"applyStyle")){this.popper.removeAttribute("x-placement");this.popper.style.position="";this.popper.style.top="";this.popper.style.left="";this.popper.style.right="";this.popper.style.bottom="";this.popper.style.willChange="";this.popper.style[getSupportedPropertyName("transform")]=""}this.disableEventListeners();// remove the popper if user explicitly asked for the deletion on destroy
// do not use `remove` because IE11 doesn't support it
if(this.options.removeOnDestroy){this.popper.parentNode.removeChild(this.popper)}return this}/**
   * Get the window associated with the element
   * @argument {Element} element
   * @returns {Window}
   */function getWindow(element){var ownerDocument=element.ownerDocument;return ownerDocument?ownerDocument.defaultView:window}function attachToScrollParents(scrollParent,event,callback,scrollParents){var isBody="BODY"===scrollParent.nodeName,target=isBody?scrollParent.ownerDocument.defaultView:scrollParent;target.addEventListener(event,callback,{passive:!0});if(!isBody){attachToScrollParents(getScrollParent(target.parentNode),event,callback,scrollParents)}scrollParents.push(target)}/**
   * Setup needed event listeners used to update the popper position
   * @method
   * @memberof Popper.Utils
   * @private
   */function setupEventListeners(reference,options,state,updateBound){// Resize event listener on window
state.updateBound=updateBound;getWindow(reference).addEventListener("resize",state.updateBound,{passive:!0});// Scroll event listener on scroll parents
var scrollElement=getScrollParent(reference);attachToScrollParents(scrollElement,"scroll",state.updateBound,state.scrollParents);state.scrollElement=scrollElement;state.eventsEnabled=!0;return state}/**
   * It will add resize/scroll events and start recalculating
   * position of the popper element when they are triggered.
   * @method
   * @memberof Popper
   */function enableEventListeners(){if(!this.state.eventsEnabled){this.state=setupEventListeners(this.reference,this.options,this.state,this.scheduleUpdate)}}/**
   * Remove event listeners used to update the popper position
   * @method
   * @memberof Popper.Utils
   * @private
   */function removeEventListeners(reference,state){// Remove resize event listener on window
getWindow(reference).removeEventListener("resize",state.updateBound);// Remove scroll event listener on scroll parents
state.scrollParents.forEach(function(target){target.removeEventListener("scroll",state.updateBound)});// Reset state
state.updateBound=null;state.scrollParents=[];state.scrollElement=null;state.eventsEnabled=!1;return state}/**
   * It will remove resize/scroll events and won't recalculate popper position
   * when they are triggered. It also won't trigger `onUpdate` callback anymore,
   * unless you call `update` method manually.
   * @method
   * @memberof Popper
   */function disableEventListeners(){if(this.state.eventsEnabled){cancelAnimationFrame(this.scheduleUpdate);this.state=removeEventListeners(this.reference,this.state)}}/**
   * Tells if a given input is a number
   * @method
   * @memberof Popper.Utils
   * @param {*} input to check
   * @return {Boolean}
   */function isNumeric(n){return""!==n&&!isNaN(parseFloat(n))&&isFinite(n)}/**
   * Set the style to the given popper
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element - Element to apply the style to
   * @argument {Object} styles
   * Object with a list of properties and values which will be applied to the element
   */function setStyles(element,styles){Object.keys(styles).forEach(function(prop){var unit="";// add unit if the value is numeric and is one of the following
if(-1!==["width","height","top","right","bottom","left"].indexOf(prop)&&isNumeric(styles[prop])){unit="px"}element.style[prop]=styles[prop]+unit})}/**
   * Set the attributes to the given popper
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element - Element to apply the attributes to
   * @argument {Object} styles
   * Object with a list of properties and values which will be applied to the element
   */function setAttributes(element,attributes){Object.keys(attributes).forEach(function(prop){var value=attributes[prop];if(!1!==value){element.setAttribute(prop,attributes[prop])}else{element.removeAttribute(prop)}})}/**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} data.styles - List of style properties - values to apply to popper element
   * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The same data object
   */function applyStyle(data){// any property present in `data.styles` will be applied to the popper,
// in this way we can make the 3rd party modifiers add custom styles to it
// Be aware, modifiers could override the properties defined in the previous
// lines of this modifier!
setStyles(data.instance.popper,data.styles);// any property present in `data.attributes` will be applied to the popper,
// they will be set as HTML attributes of the element
setAttributes(data.instance.popper,data.attributes);// if arrowElement is defined and arrowStyles has some properties
if(data.arrowElement&&Object.keys(data.arrowStyles).length){setStyles(data.arrowElement,data.arrowStyles)}return data}/**
   * Set the x-placement attribute before everything else because it could be used
   * to add margins to the popper margins needs to be calculated to get the
   * correct popper offsets.
   * @method
   * @memberof Popper.modifiers
   * @param {HTMLElement} reference - The reference element used to position the popper
   * @param {HTMLElement} popper - The HTML element used as popper
   * @param {Object} options - Popper.js options
   */function applyStyleOnLoad(reference,popper,options,modifierOptions,state){// compute reference element offsets
var referenceOffsets=getReferenceOffsets(state,popper,reference,options.positionFixed),placement=computeAutoPlacement(options.placement,referenceOffsets,popper,reference,options.modifiers.flip.boundariesElement,options.modifiers.flip.padding);// compute auto placement, store placement inside the data object,
// modifiers will be able to edit `placement` if needed
// and refer to originalPlacement to know the original value
popper.setAttribute("x-placement",placement);// Apply `position` to popper before anything else because
// without the position applied we can't guarantee correct computations
setStyles(popper,{position:options.positionFixed?"fixed":"absolute"});return options}/**
   * @function
   * @memberof Popper.Utils
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Boolean} shouldRound - If the offsets should be rounded at all
   * @returns {Object} The popper's position offsets rounded
   *
   * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
   * good as it can be within reason.
   * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
   *
   * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
   * as well on High DPI screens).
   *
   * Firefox prefers no rounding for positioning and does not have blurriness on
   * high DPI screens.
   *
   * Only horizontal placement and left/right values need to be considered.
   */function getRoundedOffsets(data,shouldRound){var _data$offsets=data.offsets,popper=_data$offsets.popper,reference=_data$offsets.reference,round=Math.round,floor=Math.floor,noRound=function noRound(v){return v},referenceWidth=round(reference.width),popperWidth=round(popper.width),isVertical=-1!==["left","right"].indexOf(data.placement),isVariation=-1!==data.placement.indexOf("-"),sameWidthParity=referenceWidth%2===popperWidth%2,bothOddWidth=1===referenceWidth%2&&1===popperWidth%2,horizontalToInteger=!shouldRound?noRound:isVertical||isVariation||sameWidthParity?round:floor,verticalToInteger=!shouldRound?noRound:round;return{left:horizontalToInteger(bothOddWidth&&!isVariation&&shouldRound?popper.left-1:popper.left),top:verticalToInteger(popper.top),bottom:verticalToInteger(popper.bottom),right:horizontalToInteger(popper.right)}}var isFirefox=isBrowser&&/Firefox/i.test(navigator.userAgent);/**
                                                                    * @function
                                                                    * @memberof Modifiers
                                                                    * @argument {Object} data - The data object generated by `update` method
                                                                    * @argument {Object} options - Modifiers configuration and options
                                                                    * @returns {Object} The data object, properly modified
                                                                    */function computeStyle(data,options){var x=options.x,y=options.y,popper=data.offsets.popper,legacyGpuAccelerationOption=find(data.instance.modifiers,function(modifier){return"applyStyle"===modifier.name}).gpuAcceleration;if(legacyGpuAccelerationOption!==void 0){console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!")}var gpuAcceleration=legacyGpuAccelerationOption!==void 0?legacyGpuAccelerationOption:options.gpuAcceleration,offsetParent=getOffsetParent(data.instance.popper),offsetParentRect=getBoundingClientRect(offsetParent),styles={position:popper.position},offsets=getRoundedOffsets(data,2>window.devicePixelRatio||!isFirefox),sideA="bottom"===x?"top":"bottom",sideB="right"===y?"left":"right",prefixedProperty=getSupportedPropertyName("transform"),left=void 0,top=void 0;if("bottom"===sideA){// when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
// and not the bottom of the html element
if("HTML"===offsetParent.nodeName){top=-offsetParent.clientHeight+offsets.bottom}else{top=-offsetParentRect.height+offsets.bottom}}else{top=offsets.top}if("right"===sideB){if("HTML"===offsetParent.nodeName){left=-offsetParent.clientWidth+offsets.right}else{left=-offsetParentRect.width+offsets.right}}else{left=offsets.left}if(gpuAcceleration&&prefixedProperty){styles[prefixedProperty]="translate3d("+left+"px, "+top+"px, 0)";styles[sideA]=0;styles[sideB]=0;styles.willChange="transform"}else{// othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
var invertTop="bottom"===sideA?-1:1,invertLeft="right"===sideB?-1:1;styles[sideA]=top*invertTop;styles[sideB]=left*invertLeft;styles.willChange=sideA+", "+sideB}// Attributes
var attributes={"x-placement":data.placement};// Update `data` attributes, styles and arrowStyles
data.attributes=_extends$2({},attributes,data.attributes);data.styles=_extends$2({},styles,data.styles);data.arrowStyles=_extends$2({},data.offsets.arrow,data.arrowStyles);return data}/**
   * Helper used to know if the given modifier depends from another one.<br />
   * It checks if the needed modifier is listed and enabled.
   * @method
   * @memberof Popper.Utils
   * @param {Array} modifiers - list of modifiers
   * @param {String} requestingName - name of requesting modifier
   * @param {String} requestedName - name of requested modifier
   * @returns {Boolean}
   */function isModifierRequired(modifiers,requestingName,requestedName){var requesting=find(modifiers,function(_ref){var name=_ref.name;return name===requestingName}),isRequired=!!requesting&&modifiers.some(function(modifier){return modifier.name===requestedName&&modifier.enabled&&modifier.order<requesting.order});if(!isRequired){var _requesting="`"+requestingName+"`",requested="`"+requestedName+"`";console.warn(requested+" modifier is required by "+_requesting+" modifier in order to work, be sure to include it before "+_requesting+"!")}return isRequired}/**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */function arrow(data,options){var _data$offsets$arrow;// arrow depends on keepTogether in order to work
if(!isModifierRequired(data.instance.modifiers,"arrow","keepTogether")){return data}var arrowElement=options.element;// if arrowElement is a string, suppose it's a CSS selector
if("string"===typeof arrowElement){arrowElement=data.instance.popper.querySelector(arrowElement);// if arrowElement is not found, don't run the modifier
if(!arrowElement){return data}}else{// if the arrowElement isn't a query selector we must check that the
// provided DOM node is child of its popper node
if(!data.instance.popper.contains(arrowElement)){console.warn("WARNING: `arrow.element` must be child of its popper element!");return data}}var placement=data.placement.split("-")[0],_data$offsets=data.offsets,popper=_data$offsets.popper,reference=_data$offsets.reference,isVertical=-1!==["left","right"].indexOf(placement),len=isVertical?"height":"width",sideCapitalized=isVertical?"Top":"Left",side=sideCapitalized.toLowerCase(),altSide=isVertical?"left":"top",opSide=isVertical?"bottom":"right",arrowElementSize=getOuterSizes(arrowElement)[len];//
// extends keepTogether behavior making sure the popper and its
// reference have enough pixels in conjunction
//
// top/left side
if(reference[opSide]-arrowElementSize<popper[side]){data.offsets.popper[side]-=popper[side]-(reference[opSide]-arrowElementSize)}// bottom/right side
if(reference[side]+arrowElementSize>popper[opSide]){data.offsets.popper[side]+=reference[side]+arrowElementSize-popper[opSide]}data.offsets.popper=getClientRect(data.offsets.popper);// compute center of the popper
var center=reference[side]+reference[len]/2-arrowElementSize/2,css=getStyleComputedProperty(data.instance.popper),popperMarginSide=parseFloat(css["margin"+sideCapitalized]),popperBorderSide=parseFloat(css["border"+sideCapitalized+"Width"]),sideValue=center-data.offsets.popper[side]-popperMarginSide-popperBorderSide;// Compute the sideValue using the updated popper offsets
// take popper margin in account because we don't have this info available
// prevent arrowElement from being placed not contiguously to its popper
sideValue=Math.max(Math.min(popper[len]-arrowElementSize,sideValue),0);data.arrowElement=arrowElement;data.offsets.arrow=(_data$offsets$arrow={},defineProperty(_data$offsets$arrow,side,Math.round(sideValue)),defineProperty(_data$offsets$arrow,altSide,""),_data$offsets$arrow);return data}/**
   * Get the opposite placement variation of the given one
   * @method
   * @memberof Popper.Utils
   * @argument {String} placement variation
   * @returns {String} flipped placement variation
   */function getOppositeVariation(variation){if("end"===variation){return"start"}else if("start"===variation){return"end"}return variation}/**
   * List of accepted placements to use as values of the `placement` option.<br />
   * Valid placements are:
   * - `auto`
   * - `top`
   * - `right`
   * - `bottom`
   * - `left`
   *
   * Each placement can have a variation from this list:
   * - `-start`
   * - `-end`
   *
   * Variations are interpreted easily if you think of them as the left to right
   * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
   * is right.<br />
   * Vertically (`left` and `right`), `start` is top and `end` is bottom.
   *
   * Some valid examples are:
   * - `top-end` (on top of reference, right aligned)
   * - `right-start` (on right of reference, top aligned)
   * - `bottom` (on bottom, centered)
   * - `auto-end` (on the side with more space available, alignment depends by placement)
   *
   * @static
   * @type {Array}
   * @enum {String}
   * @readonly
   * @method placements
   * @memberof Popper
   */var placements=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],validPlacements=placements.slice(3);// Get rid of `auto` `auto-start` and `auto-end`
/**
                                            * Given an initial placement, returns all the subsequent placements
                                            * clockwise (or counter-clockwise).
                                            *
                                            * @method
                                            * @memberof Popper.Utils
                                            * @argument {String} placement - A valid placement (it accepts variations)
                                            * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
                                            * @returns {Array} placements including their variations
                                            */function clockwise(placement){var counter=1<arguments.length&&arguments[1]!==void 0?arguments[1]:!1,index=validPlacements.indexOf(placement),arr=validPlacements.slice(index+1).concat(validPlacements.slice(0,index));return counter?arr.reverse():arr}var BEHAVIORS={FLIP:"flip",CLOCKWISE:"clockwise",COUNTERCLOCKWISE:"counterclockwise"};/**
    * @function
    * @memberof Modifiers
    * @argument {Object} data - The data object generated by update method
    * @argument {Object} options - Modifiers configuration and options
    * @returns {Object} The data object, properly modified
    */function flip(data,options){// if `inner` modifier is enabled, we can't use the `flip` modifier
if(isModifierEnabled(data.instance.modifiers,"inner")){return data}if(data.flipped&&data.placement===data.originalPlacement){// seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
return data}var boundaries=getBoundaries(data.instance.popper,data.instance.reference,options.padding,options.boundariesElement,data.positionFixed),placement=data.placement.split("-")[0],placementOpposite=getOppositePlacement(placement),variation=data.placement.split("-")[1]||"",flipOrder=[];switch(options.behavior){case BEHAVIORS.FLIP:flipOrder=[placement,placementOpposite];break;case BEHAVIORS.CLOCKWISE:flipOrder=clockwise(placement);break;case BEHAVIORS.COUNTERCLOCKWISE:flipOrder=clockwise(placement,!0);break;default:flipOrder=options.behavior;}flipOrder.forEach(function(step,index){if(placement!==step||flipOrder.length===index+1){return data}placement=data.placement.split("-")[0];placementOpposite=getOppositePlacement(placement);var popperOffsets=data.offsets.popper,refOffsets=data.offsets.reference,floor=Math.floor,overlapsRef="left"===placement&&floor(popperOffsets.right)>floor(refOffsets.left)||"right"===placement&&floor(popperOffsets.left)<floor(refOffsets.right)||"top"===placement&&floor(popperOffsets.bottom)>floor(refOffsets.top)||"bottom"===placement&&floor(popperOffsets.top)<floor(refOffsets.bottom),overflowsLeft=floor(popperOffsets.left)<floor(boundaries.left),overflowsRight=floor(popperOffsets.right)>floor(boundaries.right),overflowsTop=floor(popperOffsets.top)<floor(boundaries.top),overflowsBottom=floor(popperOffsets.bottom)>floor(boundaries.bottom),overflowsBoundaries="left"===placement&&overflowsLeft||"right"===placement&&overflowsRight||"top"===placement&&overflowsTop||"bottom"===placement&&overflowsBottom,isVertical=-1!==["top","bottom"].indexOf(placement),flippedVariationByRef=!!options.flipVariations&&(isVertical&&"start"===variation&&overflowsLeft||isVertical&&"end"===variation&&overflowsRight||!isVertical&&"start"===variation&&overflowsTop||!isVertical&&"end"===variation&&overflowsBottom),flippedVariationByContent=!!options.flipVariationsByContent&&(isVertical&&"start"===variation&&overflowsRight||isVertical&&"end"===variation&&overflowsLeft||!isVertical&&"start"===variation&&overflowsBottom||!isVertical&&"end"===variation&&overflowsTop),flippedVariation=flippedVariationByRef||flippedVariationByContent;if(overlapsRef||overflowsBoundaries||flippedVariation){// this boolean to detect any flip loop
data.flipped=!0;if(overlapsRef||overflowsBoundaries){placement=flipOrder[index+1]}if(flippedVariation){variation=getOppositeVariation(variation)}data.placement=placement+(variation?"-"+variation:"");// this object contains `position`, we want to preserve it along with
// any additional property we may add in the future
data.offsets.popper=_extends$2({},data.offsets.popper,getPopperOffsets(data.instance.popper,data.offsets.reference,data.placement));data=runModifiers(data.instance.modifiers,data,"flip")}});return data}/**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */function keepTogether(data){var _data$offsets=data.offsets,popper=_data$offsets.popper,reference=_data$offsets.reference,placement=data.placement.split("-")[0],floor=Math.floor,isVertical=-1!==["top","bottom"].indexOf(placement),side=isVertical?"right":"bottom",opSide=isVertical?"left":"top",measurement=isVertical?"width":"height";if(popper[side]<floor(reference[opSide])){data.offsets.popper[opSide]=floor(reference[opSide])-popper[measurement]}if(popper[opSide]>floor(reference[side])){data.offsets.popper[opSide]=floor(reference[side])}return data}/**
   * Converts a string containing value + unit into a px value number
   * @function
   * @memberof {modifiers~offset}
   * @private
   * @argument {String} str - Value + unit string
   * @argument {String} measurement - `height` or `width`
   * @argument {Object} popperOffsets
   * @argument {Object} referenceOffsets
   * @returns {Number|String}
   * Value in pixels, or original string if no values were extracted
   */function toValue(str,measurement,popperOffsets,referenceOffsets){// separate value from unit
var split=str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),value=+split[1],unit=split[2];// If it's not a number it's an operator, I guess
if(!value){return str}if(0===unit.indexOf("%")){var element=void 0;switch(unit){case"%p":element=popperOffsets;break;case"%":case"%r":default:element=referenceOffsets;}var rect=getClientRect(element);return rect[measurement]/100*value}else if("vh"===unit||"vw"===unit){// if is a vh or vw, we calculate the size based on the viewport
var size=void 0;if("vh"===unit){size=Math.max(document.documentElement.clientHeight,window.innerHeight||0)}else{size=Math.max(document.documentElement.clientWidth,window.innerWidth||0)}return size/100*value}else{// if is an explicit pixel unit, we get rid of the unit and keep the value
// if is an implicit unit, it's px, and we return just the value
return value}}/**
   * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
   * @function
   * @memberof {modifiers~offset}
   * @private
   * @argument {String} offset
   * @argument {Object} popperOffsets
   * @argument {Object} referenceOffsets
   * @argument {String} basePlacement
   * @returns {Array} a two cells array with x and y offsets in numbers
   */function parseOffset(offset,popperOffsets,referenceOffsets,basePlacement){var offsets=[0,0],useHeight=-1!==["right","left"].indexOf(basePlacement),fragments=offset.split(/(\+|\-)/).map(function(frag){return frag.trim()}),divider=fragments.indexOf(find(fragments,function(frag){return-1!==frag.search(/,|\s/)}));// Use height if placement is left or right and index is 0 otherwise use width
// in this way the first offset will use an axis and the second one
// will use the other one
if(fragments[divider]&&-1===fragments[divider].indexOf(",")){console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.")}// If divider is found, we divide the list of values and operands to divide
// them by ofset X and Y.
var splitRegex=/\s*,\s*|\s+/,ops=-1!==divider?[fragments.slice(0,divider).concat([fragments[divider].split(splitRegex)[0]]),[fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider+1))]:[fragments];// Convert the values with units to absolute pixels to allow our computations
ops=ops.map(function(op,index){// Most of the units rely on the orientation of the popper
var measurement=(1===index?!useHeight:useHeight)?"height":"width",mergeWithPrevious=!1;return op// This aggregates any `+` or `-` sign that aren't considered operators
// e.g.: 10 + +5 => [10, +, +5]
.reduce(function(a,b){if(""===a[a.length-1]&&-1!==["+","-"].indexOf(b)){a[a.length-1]=b;mergeWithPrevious=!0;return a}else if(mergeWithPrevious){a[a.length-1]+=b;mergeWithPrevious=!1;return a}else{return a.concat(b)}},[])// Here we convert the string values into number values (in px)
.map(function(str){return toValue(str,measurement,popperOffsets,referenceOffsets)})});// Loop trough the offsets arrays and execute the operations
ops.forEach(function(op,index){op.forEach(function(frag,index2){if(isNumeric(frag)){offsets[index]+=frag*("-"===op[index2-1]?-1:1)}})});return offsets}/**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @argument {Number|String} options.offset=0
   * The offset value as described in the modifier description
   * @returns {Object} The data object, properly modified
   */function offset(data,_ref){var offset=_ref.offset,placement=data.placement,_data$offsets=data.offsets,popper=_data$offsets.popper,reference=_data$offsets.reference,basePlacement=placement.split("-")[0],offsets=void 0;if(isNumeric(+offset)){offsets=[+offset,0]}else{offsets=parseOffset(offset,popper,reference,basePlacement)}if("left"===basePlacement){popper.top+=offsets[0];popper.left-=offsets[1]}else if("right"===basePlacement){popper.top+=offsets[0];popper.left+=offsets[1]}else if("top"===basePlacement){popper.left+=offsets[0];popper.top-=offsets[1]}else if("bottom"===basePlacement){popper.left+=offsets[0];popper.top+=offsets[1]}data.popper=popper;return data}/**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */function preventOverflow(data,options){var boundariesElement=options.boundariesElement||getOffsetParent(data.instance.popper);// If offsetParent is the reference element, we really want to
// go one step up and use the next offsetParent as reference to
// avoid to make this modifier completely useless and look like broken
if(data.instance.reference===boundariesElement){boundariesElement=getOffsetParent(boundariesElement)}// NOTE: DOM access here
// resets the popper's position so that the document size can be calculated excluding
// the size of the popper element itself
var transformProp=getSupportedPropertyName("transform"),popperStyles=data.instance.popper.style,top=popperStyles.top,left=popperStyles.left,transform=popperStyles[transformProp];popperStyles.top="";popperStyles.left="";popperStyles[transformProp]="";var boundaries=getBoundaries(data.instance.popper,data.instance.reference,options.padding,boundariesElement,data.positionFixed);// NOTE: DOM access here
// restores the original style properties after the offsets have been computed
popperStyles.top=top;popperStyles.left=left;popperStyles[transformProp]=transform;options.boundaries=boundaries;var order=options.priority,popper=data.offsets.popper,check={primary:function primary(placement){var value=popper[placement];if(popper[placement]<boundaries[placement]&&!options.escapeWithReference){value=Math.max(popper[placement],boundaries[placement])}return defineProperty({},placement,value)},secondary:function secondary(placement){var mainSide="right"===placement?"left":"top",value=popper[mainSide];if(popper[placement]>boundaries[placement]&&!options.escapeWithReference){value=Math.min(popper[mainSide],boundaries[placement]-("right"===placement?popper.width:popper.height))}return defineProperty({},mainSide,value)}};order.forEach(function(placement){var side=-1!==["left","top"].indexOf(placement)?"primary":"secondary";popper=_extends$2({},popper,check[side](placement))});data.offsets.popper=popper;return data}/**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */function shift(data){var placement=data.placement,basePlacement=placement.split("-")[0],shiftvariation=placement.split("-")[1];// if shift shiftvariation is specified, run the modifier
if(shiftvariation){var _data$offsets=data.offsets,reference=_data$offsets.reference,popper=_data$offsets.popper,isVertical=-1!==["bottom","top"].indexOf(basePlacement),side=isVertical?"left":"top",measurement=isVertical?"width":"height",shiftOffsets={start:defineProperty({},side,reference[side]),end:defineProperty({},side,reference[side]+reference[measurement]-popper[measurement])};data.offsets.popper=_extends$2({},popper,shiftOffsets[shiftvariation])}return data}/**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */function hide(data){if(!isModifierRequired(data.instance.modifiers,"hide","preventOverflow")){return data}var refRect=data.offsets.reference,bound=find(data.instance.modifiers,function(modifier){return"preventOverflow"===modifier.name}).boundaries;if(refRect.bottom<bound.top||refRect.left>bound.right||refRect.top>bound.bottom||refRect.right<bound.left){// Avoid unnecessary DOM access if visibility hasn't changed
if(!0===data.hide){return data}data.hide=!0;data.attributes["x-out-of-boundaries"]=""}else{// Avoid unnecessary DOM access if visibility hasn't changed
if(!1===data.hide){return data}data.hide=!1;data.attributes["x-out-of-boundaries"]=!1}return data}/**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */function inner(data){var placement=data.placement,basePlacement=placement.split("-")[0],_data$offsets=data.offsets,popper=_data$offsets.popper,reference=_data$offsets.reference,isHoriz=-1!==["left","right"].indexOf(basePlacement),subtractLength=-1===["top","left"].indexOf(basePlacement);popper[isHoriz?"left":"top"]=reference[basePlacement]-(subtractLength?popper[isHoriz?"width":"height"]:0);data.placement=getOppositePlacement(placement);data.offsets.popper=getClientRect(popper);return data}/**
   * Modifier function, each modifier can have a function of this type assigned
   * to its `fn` property.<br />
   * These functions will be called on each update, this means that you must
   * make sure they are performant enough to avoid performance bottlenecks.
   *
   * @function ModifierFn
   * @argument {dataObject} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {dataObject} The data object, properly modified
   */ /**
       * Modifiers are plugins used to alter the behavior of your poppers.<br />
       * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
       * needed by the library.
       *
       * Usually you don't want to override the `order`, `fn` and `onLoad` props.
       * All the other properties are configurations that could be tweaked.
       * @namespace modifiers
       */var modifiers={/**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */shift:{/** @prop {number} order=100 - Index used to define the order of execution */order:100,/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */enabled:!0,/** @prop {ModifierFn} */fn:shift},/**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */offset:{/** @prop {number} order=200 - Index used to define the order of execution */order:200,/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */enabled:!0,/** @prop {ModifierFn} */fn:offset,/** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */offset:0},/**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */preventOverflow:{/** @prop {number} order=300 - Index used to define the order of execution */order:300,/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */enabled:!0,/** @prop {ModifierFn} */fn:preventOverflow,/**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */priority:["left","right","top","bottom"],/**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */padding:5,/**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */boundariesElement:"scrollParent"},/**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */keepTogether:{/** @prop {number} order=400 - Index used to define the order of execution */order:400,/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */enabled:!0,/** @prop {ModifierFn} */fn:keepTogether},/**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */arrow:{/** @prop {number} order=500 - Index used to define the order of execution */order:500,/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */enabled:!0,/** @prop {ModifierFn} */fn:arrow,/** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */element:"[x-arrow]"},/**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */flip:{/** @prop {number} order=600 - Index used to define the order of execution */order:600,/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */enabled:!0,/** @prop {ModifierFn} */fn:flip,/**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */behavior:"flip",/**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */padding:5,/**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */boundariesElement:"viewport",/**
     * @prop {Boolean} flipVariations=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the reference element overlaps its boundaries.
     *
     * The original placement should have a set variation.
     */flipVariations:!1,/**
     * @prop {Boolean} flipVariationsByContent=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the popper element overlaps its reference boundaries.
     *
     * The original placement should have a set variation.
     */flipVariationsByContent:!1},/**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */inner:{/** @prop {number} order=700 - Index used to define the order of execution */order:700,/** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */enabled:!1,/** @prop {ModifierFn} */fn:inner},/**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */hide:{/** @prop {number} order=800 - Index used to define the order of execution */order:800,/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */enabled:!0,/** @prop {ModifierFn} */fn:hide},/**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */computeStyle:{/** @prop {number} order=850 - Index used to define the order of execution */order:850,/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */enabled:!0,/** @prop {ModifierFn} */fn:computeStyle,/**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */gpuAcceleration:!0,/**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */x:"bottom",/**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */y:"right"},/**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */applyStyle:{/** @prop {number} order=900 - Index used to define the order of execution */order:900,/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */enabled:!0,/** @prop {ModifierFn} */fn:applyStyle,/** @prop {Function} */onLoad:applyStyleOnLoad,/**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */gpuAcceleration:void 0}},Defaults={/**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */placement:"bottom",/**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */positionFixed:!1,/**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */eventsEnabled:!0,/**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */removeOnDestroy:!1,/**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */onCreate:function onCreate(){},/**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */onUpdate:function onUpdate(){},/**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */modifiers:modifiers},Popper=function(){/**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {Element|referenceObject} reference - The reference element used to position the popper
   * @param {Element} popper - The HTML / XML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */function Popper(reference,popper){var _this=this,options=2<arguments.length&&arguments[2]!==void 0?arguments[2]:{};classCallCheck(this,Popper);this.scheduleUpdate=function(){return requestAnimationFrame(_this.update)};// make update() debounced, so that it only runs at most once-per-tick
this.update=debounce$1(this.update.bind(this));// with {} we create a new object with the options inside it
this.options=_extends$2({},Popper.Defaults,options);// init state
this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]};// get reference and popper elements (allow jQuery wrappers)
this.reference=reference&&reference.jquery?reference[0]:reference;this.popper=popper&&popper.jquery?popper[0]:popper;// Deep merge modifiers options
this.options.modifiers={};Object.keys(_extends$2({},Popper.Defaults.modifiers,options.modifiers)).forEach(function(name){_this.options.modifiers[name]=_extends$2({},Popper.Defaults.modifiers[name]||{},options.modifiers?options.modifiers[name]:{})});// Refactoring modifiers' list (Object => Array)
this.modifiers=Object.keys(this.options.modifiers).map(function(name){return _extends$2({name:name},_this.options.modifiers[name])})// sort the modifiers by order
.sort(function(a,b){return a.order-b.order});// modifiers have the ability to execute arbitrary code when Popper.js get inited
// such code is executed in the same order of its modifier
// they could add new properties to their options configuration
// BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
this.modifiers.forEach(function(modifierOptions){if(modifierOptions.enabled&&isFunction(modifierOptions.onLoad)){modifierOptions.onLoad(_this.reference,_this.popper,_this.options,modifierOptions,_this.state)}});// fire the first update to position the popper in the right place
this.update();var eventsEnabled=this.options.eventsEnabled;if(eventsEnabled){// setup event listeners, they will take care of update the position in specific situations
this.enableEventListeners()}this.state.eventsEnabled=eventsEnabled}// We can't use class properties because they don't get listed in the
// class prototype and break stuff like Sinon stubs
createClass(Popper,[{key:"update",value:function update$$1(){return update.call(this)}},{key:"destroy",value:function destroy$$1(){return destroy.call(this)}},{key:"enableEventListeners",value:function enableEventListeners$$1(){return enableEventListeners.call(this)}},{key:"disableEventListeners",value:function disableEventListeners$$1(){return disableEventListeners.call(this)}/**
       * Schedules an update. It will run on the next UI update available.
       * @method scheduleUpdate
       * @memberof Popper
       */ /**
           * Collection of utilities useful when writing custom modifiers.
           * Starting from version 1.7, this method is available only if you
           * include `popper-utils.js` before `popper.js`.
           *
           * **DEPRECATION**: This way to access PopperUtils is deprecated
           * and will be removed in v2! Use the PopperUtils module directly instead.
           * Due to the high instability of the methods contained in Utils, we can't
           * guarantee them to follow semver. Use them at your own risk!
           * @static
           * @private
           * @type {Object}
           * @deprecated since version 1.8
           * @member Utils
           * @memberof Popper
           */}]);return Popper}();/**
    * The `dataObject` is an object containing all the information used by Popper.js.
    * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
    * @name dataObject
    * @property {Object} data.instance The Popper.js instance
    * @property {String} data.placement Placement applied to popper
    * @property {String} data.originalPlacement Placement originally defined on init
    * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
    * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
    * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
    * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
    * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
    * @property {Object} data.boundaries Offsets of the popper boundaries
    * @property {Object} data.offsets The measurements of popper, reference and arrow elements
    * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
    * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
    * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
    */ /**
        * Default options provided to Popper.js constructor.<br />
        * These can be overridden using the `options` argument of Popper.js.<br />
        * To override an option, simply pass an object with the same
        * structure of the `options` object, as the 3rd argument. For example:
        * ```
        * new Popper(ref, pop, {
        *   modifiers: {
        *     preventOverflow: { enabled: false }
        *   }
        * })
        * ```
        * @type {Object}
        * @static
        * @memberof Popper
        */ /**
      * The `referenceObject` is an object that provides an interface compatible with Popper.js
      * and lets you use it as replacement of a real DOM node.<br />
      * You can use this method to position a popper relatively to a set of coordinates
      * in case you don't have a DOM node to use as reference.
      *
      * ```
      * new Popper(referenceObject, popperNode);
      * ```
      *
      * NB: This feature isn't supported in Internet Explorer 10.
      * @name referenceObject
      * @property {Function} data.getBoundingClientRect
      * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
      * @property {number} data.clientWidth
      * An ES6 getter that will return the width of the virtual reference element.
      * @property {number} data.clientHeight
      * An ES6 getter that will return the height of the virtual reference element.
      */Popper.Utils=("undefined"!==typeof window?window:global).PopperUtils;Popper.placements=placements;Popper.Defaults=Defaults;var popper={default:Popper};/**
   @license
   Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */ /**
        This is a JavaScript mixin that you can use to connect a Custom Element base
        class to a Redux store. The `stateChanged(state)` method will be called when
        the state is updated.
      
        Example:
      
            import { connect } from 'pwa-helpers/connect-mixin.js';
      
            class MyElement extends connect(store)(HTMLElement) {
              stateChanged(state) {
                this.textContent = state.data.count.toString();
              }
            }
      */const connect=store=>baseElement=>class extends baseElement{connectedCallback(){if(super.connectedCallback){super.connectedCallback()}this._storeUnsubscribe=store.subscribe(()=>this.stateChanged(store.getState()));this.stateChanged(store.getState())}disconnectedCallback(){this._storeUnsubscribe();if(super.disconnectedCallback){super.disconnectedCallback()}}/**
     * The `stateChanged(state)` method will be called when the state is updated.
     */stateChanged(_state){}};var connectMixin={connect:connect};/**
   @license
   Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */ /**
        A Redux store enhancer that lets you lazy-install reducers after the store
        has booted up. Use this if your application lazy-loads routes that are connected
        to a Redux store.
      
        Example:
      
            import { combineReducers } from 'redux';
            import { lazyReducerEnhancer } from 'pwa-helpers/lazy-reducer-enhancer.js';
            import someReducer from './reducers/someReducer.js';
      
            export const store = createStore(
              (state, action) => state,
              compose(lazyReducerEnhancer(combineReducers))
            );
      
        Then, in your page/element, you can lazy load a specific reducer with:
      
            store.addReducers({
              someReducer
            });
      */const lazyReducerEnhancer=combineReducers=>{const enhancer=nextCreator=>{return(origReducer,preloadedState)=>{let lazyReducers={};const nextStore=nextCreator(origReducer,preloadedState);return Object.assign({},nextStore,{addReducers(newReducers){const combinedReducerMap=Object.assign({},lazyReducers,newReducers);this.replaceReducer(combineReducers(lazyReducers=combinedReducerMap))}})}};return enhancer};var lazyReducerEnhancer$1={lazyReducerEnhancer:lazyReducerEnhancer};/**
   @license
   Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */ /**
        Utility method that updates the page's open graph and Twitter card metadata.
        It takes an object as a parameter with the following properties:
        title | description | url | image.
      
        If the `url` is not specified, `window.location.href` will be used; for
        all other properties, if they aren't specified, then that metadata field will not
        be set.
      
        Example (in your top level element or document, or in the router callback):
      
            import { updateMetadata } from 'pwa-helpers/metadata.js';
      
            updateMetadata({
              title: 'My App - view 1',
              description: 'This is my sample app',
              url: window.location.href,
              image: '/assets/view1-hero.png'
            });
      
      */const updateMetadata=({title,description,url,image,imageAlt})=>{if(title){document.title=title;setMetaTag("property","og:title",title)}if(description){setMetaTag("name","description",description);setMetaTag("property","og:description",description)}if(image){setMetaTag("property","og:image",image)}if(imageAlt){setMetaTag("property","og:image:alt",imageAlt)}url=url||window.location.href;setMetaTag("property","og:url",url)};/**
     Utility method to create or update the content of a meta tag based on an
     attribute name/value pair.
   
     Example (in your top level element or document, or in the router callback):
   
         import { setMetaTag } from 'pwa-helpers/metadata.js';
   
         setMetaTag('name', 'twitter:card', 'summary');
         
     This would create the following meta tag in the head of the document (or
     update the content attribute if a meta tag with name="twitter:card" exists):
   
         <meta name="twitter:card" content="summary">
   
   */function setMetaTag(attrName,attrValue,content){let element=document.head.querySelector(`meta[${attrName}="${attrValue}"]`);if(!element){element=document.createElement("meta");element.setAttribute(attrName,attrValue);document.head.appendChild(element)}element.setAttribute("content",content||"")}var metadata={updateMetadata:updateMetadata,setMetaTag:setMetaTag};/**
   @license
   Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */ /**
        Utility method that calls a callback whenever the network connectivity of the app changes.
        The callback should take a boolean parameter (with `true` meaning
        the network is offline, and `false` meaning online)
      
        Example:
      
            import { installOfflineWatcher } from 'pwa-helpers/network.js';
      
            installOfflineWatcher((offline) => {
              console.log('You are ' + offline ? ' offline' : 'online');
            });
      */const installOfflineWatcher=offlineUpdatedCallback=>{window.addEventListener("online",()=>offlineUpdatedCallback(!1));window.addEventListener("offline",()=>offlineUpdatedCallback(!0));offlineUpdatedCallback(!1===navigator.onLine)};var network={installOfflineWatcher:installOfflineWatcher};/**
   @license
   Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */ /**
        Basic router that calls a callback whenever the location is updated.
      
        Example:
      
            import { installRouter } from 'pwa-helpers/router.js';
      
            installRouter((location) => handleNavigation(location));
      
        For example, if you're using this router in a Redux-connected component,
        you could dispatch an action in the callback:
      
            import { installRouter } from 'pwa-helpers/router.js';
            import { navigate } from '../actions/app.js';
      
            installRouter((location) => store.dispatch(navigate(location)))
      
        If you need to force a navigation to a new location programmatically, you can
        do so by pushing a new state using the History API, and then manually
        calling the callback with the new location:
      
            window.history.pushState({}, '', '/new-route');
            handleNavigation(window.location);
      
        Optionally, you can use the second argument to read the event that caused the
        navigation. For example, you may want to scroll to top only after a link click.
      
            installRouter((location, event) => {
              // Only scroll to top on link clicks, not popstate events.
              if (event && event.type === 'click') {
                window.scrollTo(0, 0);
              }
              handleNavigation(location);
            });
      */const installRouter=locationUpdatedCallback=>{document.body.addEventListener("click",e=>{if(e.defaultPrevented||0!==e.button||e.metaKey||e.ctrlKey||e.shiftKey)return;const anchor=e.composedPath().filter(n=>"A"===n.tagName)[0];if(!anchor||anchor.target||anchor.hasAttribute("download")||"external"===anchor.getAttribute("rel"))return;const href=anchor.href;if(!href||-1!==href.indexOf("mailto:"))return;const location=window.location,origin=location.origin||location.protocol+"//"+location.host;if(0!==href.indexOf(origin))return;e.preventDefault();if(href!==location.href){window.history.pushState({},"",href);locationUpdatedCallback(location,e)}});window.addEventListener("popstate",e=>locationUpdatedCallback(window.location,e));locationUpdatedCallback(window.location,null/* event */)};var router={installRouter:installRouter},reduxSagaCoreNpmProxy_esm={default:sagaMiddlewareFactory,CANCEL:CANCEL,SAGA_LOCATION:SAGA_LOCATION,buffers:buffers,detach:detach,END:END,channel:channel$1,eventChannel:eventChannel,isEnd:isEnd,multicastChannel:multicastChannel,runSaga:runSaga,stdChannel:stdChannel},reduxSagaEffectsNpmProxy_esm={actionChannel:actionChannel,all:all,apply:apply,call:call,cancel:cancel,cancelled:cancelled,cps:cps,delay:delay,effectTypes:effectTypes,flush:flush,fork:fork,getContext:getContext,join:join,put:put,putResolve:putResolve,race:race,select:select,setContext:setContext,spawn:spawn,take:take,takeMaybe:takeMaybe,debounce:debounce,retry:retry$1,takeEvery:takeEvery$1,takeLatest:takeLatest$1,takeLeading:takeLeading$1,throttle:throttle$1};function createThunkMiddleware(extraArgument){return function(_ref){var dispatch=_ref.dispatch,getState=_ref.getState;return function(next){return function(action){if("function"===typeof action){return action(dispatch,getState,extraArgument)}return next(action)}}}}var thunk=createThunkMiddleware();thunk.withExtraArgument=createThunkMiddleware;var index$1={default:thunk};function isFunction$1(functionToCheck){var getType={};return functionToCheck&&"[object Function]"===getType.toString.call(functionToCheck)}var classCallCheck$1=function(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}},createClass$1=function(){function defineProperties(target,props){for(var i=0,descriptor;i<props.length;i++){descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1;descriptor.configurable=!0;if("value"in descriptor)descriptor.writable=!0;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}(),_extends$3=Object.assign||function(target){for(var i=1,source;i<arguments.length;i++){source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target},DEFAULT_OPTIONS={container:!1,delay:0,html:!1,placement:"top",title:"",template:"<div class=\"tooltip\" role=\"tooltip\"><div class=\"tooltip-arrow\"></div><div class=\"tooltip-inner\"></div></div>",trigger:"hover focus",offset:0,arrowSelector:".tooltip-arrow, .tooltip__arrow",innerSelector:".tooltip-inner, .tooltip__inner"},Tooltip=function(){/**
   * Create a new Tooltip.js instance
   * @class Tooltip
   * @param {HTMLElement} reference - The DOM node used as reference of the tooltip (it can be a jQuery element).
   * @param {Object} options
   * @param {String} options.placement='top'
   *      Placement of the popper accepted values: `top(-start, -end), right(-start, -end), bottom(-start, -end),
   *      left(-start, -end)`
   * @param {String} [options.arrowSelector='.tooltip-arrow, .tooltip__arrow'] - className used to locate the DOM arrow element in the tooltip.
   * @param {String} [options.innerSelector='.tooltip-inner, .tooltip__inner'] - className used to locate the DOM inner element in the tooltip.
   * @param {HTMLElement|String|false} options.container=false - Append the tooltip to a specific element.
   * @param {Number|Object} options.delay=0
   *      Delay showing and hiding the tooltip (ms) - does not apply to manual trigger type.
   *      If a number is supplied, delay is applied to both hide/show.
   *      Object structure is: `{ show: 500, hide: 100 }`
   * @param {Boolean} options.html=false - Insert HTML into the tooltip. If false, the content will inserted with `textContent`.
   * @param {String} [options.template='<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>']
   *      Base HTML to used when creating the tooltip.
   *      The tooltip's `title` will be injected into the `.tooltip-inner` or `.tooltip__inner`.
   *      `.tooltip-arrow` or `.tooltip__arrow` will become the tooltip's arrow.
   *      The outermost wrapper element should have the `.tooltip` class.
   * @param {String|HTMLElement|TitleFunction} options.title='' - Default title value if `title` attribute isn't present.
   * @param {String} [options.trigger='hover focus']
   *      How tooltip is triggered - click, hover, focus, manual.
   *      You may pass multiple triggers; separate them with a space. `manual` cannot be combined with any other trigger.
   * @param {Boolean} options.closeOnClickOutside=false - Close a popper on click outside of the popper and reference element. This has effect only when options.trigger is 'click'.
   * @param {String|HTMLElement} options.boundariesElement
   *      The element used as boundaries for the tooltip. For more information refer to Popper.js'
   *      [boundariesElement docs](https://popper.js.org/popper-documentation.html)
   * @param {Number|String} options.offset=0 - Offset of the tooltip relative to its reference. For more information refer to Popper.js'
   *      [offset docs](https://popper.js.org/popper-documentation.html)
   * @param {Object} options.popperOptions={} - Popper options, will be passed directly to popper instance. For more information refer to Popper.js'
   *      [options docs](https://popper.js.org/popper-documentation.html)
   * @return {Object} instance - The generated tooltip instance
   */function Tooltip(reference,options){classCallCheck$1(this,Tooltip);_initialiseProps.call(this);// apply user options over default ones
options=_extends$3({},DEFAULT_OPTIONS,options);reference.jquery&&(reference=reference[0]);// cache reference and options
this.reference=reference;this.options=options;// get events list
var events="string"===typeof options.trigger?options.trigger.split(" ").filter(function(trigger){return-1!==["click","hover","focus"].indexOf(trigger)}):[];// set initial state
this._isOpen=!1;this._popperOptions={};// set event listeners
this._setEventListeners(reference,events,options)}//
// Public methods
//
/**
   * Reveals an element's tooltip. This is considered a "manual" triggering of the tooltip.
   * Tooltips with zero-length titles are never displayed.
   * @method Tooltip#show
   * @memberof Tooltip
   */ /**
       * Hides an element’s tooltip. This is considered a “manual” triggering of the tooltip.
       * @method Tooltip#hide
       * @memberof Tooltip
       */ /**
           * Hides and destroys an element’s tooltip.
           * @method Tooltip#dispose
           * @memberof Tooltip
           */ /**
               * Toggles an element’s tooltip. This is considered a “manual” triggering of the tooltip.
               * @method Tooltip#toggle
               * @memberof Tooltip
               */ /**
                   * Updates the tooltip's title content
                   * @method Tooltip#updateTitleContent
                   * @memberof Tooltip
                   * @param {String|HTMLElement} title - The new content to use for the title
                   */ //
// Private methods
//
createClass$1(Tooltip,[{key:"_create",/**
     * Creates a new tooltip node
     * @memberof Tooltip
     * @private
     * @param {HTMLElement} reference
     * @param {String} template
     * @param {String|HTMLElement|TitleFunction} title
     * @param {Boolean} allowHtml
     * @return {HTMLElement} tooltipNode
     */value:function _create(reference,template,title,allowHtml){// create tooltip element
var tooltipGenerator=window.document.createElement("div");tooltipGenerator.innerHTML=template.trim();var tooltipNode=tooltipGenerator.childNodes[0];// add unique ID to our tooltip (needed for accessibility reasons)
tooltipNode.id="tooltip_"+Math.random().toString(36).substr(2,10);// set initial `aria-hidden` state to `false` (it's visible!)
tooltipNode.setAttribute("aria-hidden","false");// add title to tooltip
var titleNode=tooltipGenerator.querySelector(this.options.innerSelector);this._addTitleContent(reference,title,allowHtml,titleNode);// return the generated tooltip node
return tooltipNode}},{key:"_addTitleContent",value:function _addTitleContent(reference,title,allowHtml,titleNode){if(1===title.nodeType||11===title.nodeType){// if title is a element node or document fragment, append it only if allowHtml is true
allowHtml&&titleNode.appendChild(title)}else if(isFunction$1(title)){// Recursively call ourself so that the return value of the function gets handled appropriately - either
// as a dom node, a string, or even as another function.
this._addTitleContent(reference,title.call(reference),allowHtml,titleNode)}else{// if it's just a simple text, set textContent or innerHtml depending by `allowHtml` value
allowHtml?titleNode.innerHTML=title:titleNode.textContent=title}}},{key:"_show",value:function _show(reference,options){// don't show if it's already visible
// or if it's not being showed
if(this._isOpen&&!this._isOpening){return this}this._isOpen=!0;// if the tooltipNode already exists, just show it
if(this._tooltipNode){this._tooltipNode.style.visibility="visible";this._tooltipNode.setAttribute("aria-hidden","false");this.popperInstance.update();return this}// get title
var title=reference.getAttribute("title")||options.title;// don't show tooltip if no title is defined
if(!title){return this}// create tooltip node
var tooltipNode=this._create(reference,options.template,title,options.html);// Add `aria-describedby` to our reference element for accessibility reasons
reference.setAttribute("aria-describedby",tooltipNode.id);// append tooltip to container
var container=this._findContainer(options.container,reference);this._append(tooltipNode,container);this._popperOptions=_extends$3({},options.popperOptions,{placement:options.placement});this._popperOptions.modifiers=_extends$3({},this._popperOptions.modifiers,{arrow:_extends$3({},this._popperOptions.modifiers&&this._popperOptions.modifiers.arrow,{element:options.arrowSelector}),offset:_extends$3({},this._popperOptions.modifiers&&this._popperOptions.modifiers.offset,{offset:options.offset||this._popperOptions.modifiers&&this._popperOptions.modifiers.offset&&this._popperOptions.modifiers.offset.offset||options.offset})});if(options.boundariesElement){this._popperOptions.modifiers.preventOverflow={boundariesElement:options.boundariesElement}}this.popperInstance=new Popper(reference,tooltipNode,this._popperOptions);this._tooltipNode=tooltipNode;return this}},{key:"_hide",value:function _hide()/*reference, options*/{// don't hide if it's already hidden
if(!this._isOpen){return this}this._isOpen=!1;// hide tooltipNode
this._tooltipNode.style.visibility="hidden";this._tooltipNode.setAttribute("aria-hidden","true");return this}},{key:"_dispose",value:function _dispose(){var _this=this;// remove event listeners first to prevent any unexpected behaviour
this._events.forEach(function(_ref){var func=_ref.func,event=_ref.event;_this.reference.removeEventListener(event,func)});this._events=[];if(this._tooltipNode){this._hide();// destroy instance
this.popperInstance.destroy();// destroy tooltipNode if removeOnDestroy is not set, as popperInstance.destroy() already removes the element
if(!this.popperInstance.options.removeOnDestroy){this._tooltipNode.parentNode.removeChild(this._tooltipNode);this._tooltipNode=null}}return this}},{key:"_findContainer",value:function _findContainer(container,reference){// if container is a query, get the relative element
if("string"===typeof container){container=window.document.querySelector(container)}else if(!1===container){// if container is `false`, set it to reference parent
container=reference.parentNode}return container}/**
       * Append tooltip to container
       * @memberof Tooltip
       * @private
       * @param {HTMLElement} tooltipNode
       * @param {HTMLElement|String|false} container
       */},{key:"_append",value:function _append(tooltipNode,container){container.appendChild(tooltipNode)}},{key:"_setEventListeners",value:function _setEventListeners(reference,events,options){var _this2=this,directEvents=[],oppositeEvents=[];events.forEach(function(event){switch(event){case"hover":directEvents.push("mouseenter");oppositeEvents.push("mouseleave");break;case"focus":directEvents.push("focus");oppositeEvents.push("blur");break;case"click":directEvents.push("click");oppositeEvents.push("click");break;}});// schedule show tooltip
directEvents.forEach(function(event){var func=function func(evt){if(!0===_this2._isOpening){return}evt.usedByTooltip=!0;_this2._scheduleShow(reference,options.delay,options,evt)};_this2._events.push({event:event,func:func});reference.addEventListener(event,func)});// schedule hide tooltip
oppositeEvents.forEach(function(event){var func=function func(evt){if(!0===evt.usedByTooltip){return}_this2._scheduleHide(reference,options.delay,options,evt)};_this2._events.push({event:event,func:func});reference.addEventListener(event,func);if("click"===event&&options.closeOnClickOutside){document.addEventListener("mousedown",function(e){if(!_this2._isOpening){return}var popper=_this2.popperInstance.popper;if(reference.contains(e.target)||popper.contains(e.target)){return}func(e)},!0)}})}},{key:"_scheduleShow",value:function _scheduleShow(reference,delay,options/*, evt */){var _this3=this;this._isOpening=!0;// defaults to 0
var computedDelay=delay&&delay.show||delay||0;this._showTimeout=window.setTimeout(function(){return _this3._show(reference,options)},computedDelay)}},{key:"_scheduleHide",value:function _scheduleHide(reference,delay,options,evt){var _this4=this;this._isOpening=!1;// defaults to 0
var computedDelay=delay&&delay.hide||delay||0;window.clearTimeout(this._showTimeout);window.setTimeout(function(){if(!1===_this4._isOpen){return}if(!document.body.contains(_this4._tooltipNode)){return}// if we are hiding because of a mouseleave, we must check that the new
// reference isn't the tooltip, because in this case we don't want to hide it
if("mouseleave"===evt.type){var isSet=_this4._setTooltipNodeEvent(evt,reference,delay,options);// if we set the new event, don't hide the tooltip yet
// the new event will take care to hide it if necessary
if(isSet){return}}_this4._hide(reference,options)},computedDelay)}},{key:"_updateTitleContent",value:function _updateTitleContent(title){if("undefined"===typeof this._tooltipNode){if("undefined"!==typeof this.options.title){this.options.title=title}return}var titleNode=this._tooltipNode.querySelector(this.options.innerSelector);this._clearTitleContent(titleNode,this.options.html,this.reference.getAttribute("title")||this.options.title);this._addTitleContent(this.reference,title,this.options.html,titleNode);this.options.title=title;this.popperInstance.update()}},{key:"_clearTitleContent",value:function _clearTitleContent(titleNode,allowHtml,lastTitle){if(1===lastTitle.nodeType||11===lastTitle.nodeType){allowHtml&&titleNode.removeChild(lastTitle)}else{allowHtml?titleNode.innerHTML="":titleNode.textContent=""}}}]);return Tooltip}(),_initialiseProps=function _initialiseProps(){var _this5=this;this.show=function(){return _this5._show(_this5.reference,_this5.options)};this.hide=function(){return _this5._hide()};this.dispose=function(){return _this5._dispose()};this.toggle=function(){if(_this5._isOpen){return _this5.hide()}else{return _this5.show()}};this.updateTitleContent=function(title){return _this5._updateTitleContent(title)};this._events=[];this._setTooltipNodeEvent=function(evt,reference,delay,options){var relatedreference=evt.relatedreference||evt.toElement||evt.relatedTarget,callback=function callback(evt2){var relatedreference2=evt2.relatedreference||evt2.toElement||evt2.relatedTarget;// Remove event listener after call
_this5._tooltipNode.removeEventListener(evt.type,callback);// If the new reference is not the reference element
if(!reference.contains(relatedreference2)){// Schedule to hide tooltip
_this5._scheduleHide(reference,options.delay,options,evt2)}};if(_this5._tooltipNode.contains(relatedreference)){// listen to mouseleave on the tooltip element to be able to hide the tooltip
_this5._tooltipNode.addEventListener(evt.type,callback);return!0}return!1}},tooltip={default:Tooltip};/* begin copyright text
    *
    * Copyright © 2016 PTC Inc., Its Subsidiary Companies, and /or its Partners. All Rights Reserved.
    *
    * end copyright text
    */const SET_ACTIVE_STEP="SET_ACTIVE_STEP",SET_ASSET_CURSOR="SET_ASSET_CURSOR",SELECT_ASSETS="SELECT_ASSETS",RESET_ASSET_SELECTION="RESET_ASSET_SELECTION",DELETE_STEP_ASSETS="DELETE_STEP_ASSETS",setActiveStep=(procedureId,stepId,isDescriptionActive)=>{return{type:SET_ACTIVE_STEP,procedureId,stepId,isDescriptionActive}},setAssetCursor=cursorAssetIndex=>{return{type:SET_ASSET_CURSOR,cursorAssetIndex}},selectAssets=selectedAssetNames=>{return{type:SELECT_ASSETS,selectedAssetNames}},deleteAssets=deletedAssetNames=>{return{type:DELETE_STEP_ASSETS,deletedAssetNames}};var activeStep={SET_ACTIVE_STEP:SET_ACTIVE_STEP,SET_ASSET_CURSOR:SET_ASSET_CURSOR,SELECT_ASSETS:SELECT_ASSETS,RESET_ASSET_SELECTION:RESET_ASSET_SELECTION,DELETE_STEP_ASSETS:DELETE_STEP_ASSETS,setActiveStep:setActiveStep,setAssetCursor:setAssetCursor,selectAssets:selectAssets,deleteAssets:deleteAssets};/* begin copyright text
    *
    * Copyright © 2020 PTC Inc., Its Subsidiary Companies, and /or its Partners. All Rights Reserved.
    *
    * end copyright text
    */const IMAGE_EDITOR_OPENED="IMAGE_EDITOR_OPENED",IMAGE_EDITOR_CLOSED="IMAGE_EDITOR_CLOSED",imageEditorOpened=(viewingSessionId,launchPoint)=>{return{type:IMAGE_EDITOR_OPENED,viewingSessionId,launchPoint}},imageEditorClosed=(viewingSessionId,launchPoint,closeAction)=>{return{type:IMAGE_EDITOR_CLOSED,viewingSessionId,launchPoint,closeAction}};var analytics={IMAGE_EDITOR_OPENED:IMAGE_EDITOR_OPENED,IMAGE_EDITOR_CLOSED:IMAGE_EDITOR_CLOSED,imageEditorOpened:imageEditorOpened,imageEditorClosed:imageEditorClosed};/* begin copyright text
    *
    * Copyright © 2016 PTC Inc., Its Subsidiary Companies, and /or its Partners. All Rights Reserved.
    *
    * end copyright text
    */let projName="_default",value="true";// eslint-disable-next-line no-constant-condition
value=value+"";// Prevent next block from being removed as dead_code
if("true"===value){const p=new URLSearchParams(window.location.search).get("PE_CUSTOM_PROJECT")||sessionStorage.getItem("editor.customProject");if(p){projName=p;console.warn("Using custom project name",projName);sessionStorage.setItem("editor.customProject",projName)}}const defaultProjectName=projName,baseURL=window.location.origin,editorPath="/editor",cmsPath="/ExperienceService",accountServicePath="/account-service",pe_version="114493-ce8a7a64cd33a2f894dc687129db398b50e2bf28";console.info(`version=${pe_version}`);var config={defaultProjectName:defaultProjectName,baseURL:baseURL,editorPath:editorPath,cmsPath:cmsPath,accountServicePath:accountServicePath,pe_version:pe_version};const ASSET_TYPE={IMAGE:"image",VIDEO:"video",ANCHOR:"anchor",CAPTURE:"capture",MODEL:"model",THREED_EFFECT:"3d-effect",AR_CONTEXT:"ar-context",MTG_CONTEXT:"mtg-context"},ASSET_NAME={AR_CONTEXT:"ar-context",MTG_CONTEXT:"mtg-context"},ASSET_LIST_TYPE={CAPTURES:ASSET_TYPE.CAPTURE,IMAGES:ASSET_TYPE.IMAGE,VIDEOS:ASSET_TYPE.VIDEO,THREED:ASSET_TYPE.MODEL},THUMBNAIL={[ASSET_LIST_TYPE.CAPTURES]:"images/default-capture-thumbnail.svg",[ASSET_LIST_TYPE.IMAGES]:"images/default-image-thumbnail.svg",[ASSET_LIST_TYPE.VIDEOS]:"images/default-video-thumbnail.svg",[ASSET_LIST_TYPE.THREED]:"images/default-3d-thumbnail.svg"},CATEGORIES={MEDIA:"media",CONTENT3D:"content3d",CONTEXT3D:"context3d"},BANNER_MESSAGE_TYPE={INFO:"info",// default
SUCCESS:"success",// with green checkmark
ERROR:"error",// with red X
ATTN:"attention",// green text
PROGRESS:"in-progress",// green text...
NOTIFICATION:"notification"// highlighted
},DIALOG_NOTIFICATION_TYPE={WARNING:"warning",WARNING_WITH_CANCEL:"warning-with-cancel",INFO:"info",HELP:"help"},ROUTE={editor:editorPath,preview:editorPath+"/preview",webview:editorPath+"/webview",proceduresPublished:editorPath+"/procedures/published",view404:editorPath+"/view404"},APP_NAMES={[ROUTE.editor]:"Vuforia Editor",[ROUTE.preview]:"Vuforia Editor Preview",[ROUTE.webview]:"Vuforia Webview"},TIMEOUTS={STEP_DESC_AUTO_SAVE_INTERVAL:5e3,HIGHLIGHT_INTERVAL:100},FOLDER="__FOLDER__",SUPPORTED_FILE_TYPES={[ASSET_TYPE.IMAGE]:[".png",".jpg",".jpeg",".svg",".gif",".bmp"],[ASSET_TYPE.VIDEO]:[".mp4"],[ASSET_TYPE.CAPTURE]:[FOLDER],FOLDER,[ASSET_TYPE.MODEL]:[".pvz"]},SUPPORTED_FILE_EXTENSIONS_REGEX={[ASSET_TYPE.IMAGE]:/(.*)\.(png|jpg|jpeg|svg|gif|bmp)$/i,[ASSET_TYPE.VIDEO]:/(.*)\.mp4$/i,[ASSET_TYPE.MODEL]:/(.*)\.(pvz)$/i,// (pvs|pvz|dae|vrml|wrl|dgn|igs|iges|prt*|asm*|step|stp|stl|sla|obj|fbx|sldprt|sldasm|par|psm|ipt|iam|zip|catpart|catproduct)$/i,
expectedCaptureFiles:/^[^.](.*)\.(jpg|jpeg|png|mp4|log|json|room)$/i},SUPPORTED_FILE_TYPES_REGEX={[ASSET_TYPE.IMAGE]:/^.+\/(png|jpg|svg\+xml|jpeg|gif|bmp)$/i,[ASSET_TYPE.VIDEO]:/^.+\/(mp4)$/i,[ASSET_TYPE.CAPTURE]:/^.+\/(x-zip-compressed|zip)$/i,//MODEL files comes through with type = ''
default:/^.+\/(png|jpg|svg\+xml|jpeg|gif|bmp|mp4|pvz|json)$/i},HISTORY_GROUP_KEYS={ADD_MULTIPLE_ASSETS:"ADD_MULTIPLE_ASSETS",MOVE_MULTIPLE_ASSETS:"MOVE_MULTIPLE_ASSETS"},VideoQuality={HD:"HD",SD:"SD"},KEY={Backspace:"Backspace",Delete:"Delete",Enter:"Enter",Escape:"Escape",Tab:"Tab",Space:" ",Arrow_Left:"ArrowLeft",Arrow_Right:"ArrowRight"},MOUSE={LEFT:0,RIGHT:2},PROCEDURE_TAB={EDIT:"edit-tab",SHARE:"share-tab",DETAILS:"details-tab"},THINGVIEW_MODE={PREVIEW:0,STEP_PARTS:1,STEP_VIEW:2},THINGVIEW_MODE_CMS={1:"highlight_node",2:"model_visibility"},VIEW_ROLES=["VIEWER","AUTHOR","ADMINISTRATOR","MANAGER"],EDITOR_ROLES=["AUTHOR","ADMINISTRATOR","MANAGER"],PUBLISH_ROLES=["ADMINISTRATOR","MANAGER"],ROLE_PRIORITIES=[{name:"ADMINISTRATOR",priority:1},{name:"MANAGER",priority:2},{name:"AUTHOR",priority:3},{name:"VIEWER",priority:4}],JSON_ASSET_TYPE={NODE_LIST:"NODE_LIST",THREED_EFFECT:"THREED_EFFECT"},ASSET_PREVIEW_LAUNCH_POINTS={CAPTURE_CREATE_IMAGE:"create new image from capture",CAPTURE_ASSET:"capture asset",ASSET_LIBRARY:"asset library"},TABS={ASSET_BROWSER:"asset-browser.",ALL_ASSETS:"asset-browser.assets",IMAGES:"asset-browser.images",VIDEOS:"asset-browser.videos",CAPTURES:"asset-browser.captures",CAD_MODELS:"asset-browser.cad-models",PROCEDURES:"procedures.procedures",PROCEDURE_EDITOR:"procedure-editor",CREATED_BY_ME:"procedures.created-by-me",SHARED_WITH_ME:"procedures.shared-with-me"},CACHE_KEYS={PROCEDURE_PICKER:"PTC-PROCEDURE-PICKER"},AUDIO_STATUS={REMOVED:".audio-removed",REPLACED:".audio-replaced"};var constants={ASSET_TYPE:ASSET_TYPE,ASSET_NAME:ASSET_NAME,ASSET_LIST_TYPE:ASSET_LIST_TYPE,THUMBNAIL:THUMBNAIL,CATEGORIES:CATEGORIES,BANNER_MESSAGE_TYPE:BANNER_MESSAGE_TYPE,DIALOG_NOTIFICATION_TYPE:DIALOG_NOTIFICATION_TYPE,ROUTE:ROUTE,APP_NAMES:APP_NAMES,TIMEOUTS:TIMEOUTS,SUPPORTED_FILE_TYPES:SUPPORTED_FILE_TYPES,SUPPORTED_FILE_EXTENSIONS_REGEX:SUPPORTED_FILE_EXTENSIONS_REGEX,SUPPORTED_FILE_TYPES_REGEX:SUPPORTED_FILE_TYPES_REGEX,HISTORY_GROUP_KEYS:HISTORY_GROUP_KEYS,VideoQuality:VideoQuality,KEY:KEY,MOUSE:MOUSE,PROCEDURE_TAB:PROCEDURE_TAB,THINGVIEW_MODE:THINGVIEW_MODE,THINGVIEW_MODE_CMS:THINGVIEW_MODE_CMS,VIEW_ROLES:VIEW_ROLES,EDITOR_ROLES:EDITOR_ROLES,PUBLISH_ROLES:PUBLISH_ROLES,ROLE_PRIORITIES:ROLE_PRIORITIES,JSON_ASSET_TYPE:JSON_ASSET_TYPE,ASSET_PREVIEW_LAUNCH_POINTS:ASSET_PREVIEW_LAUNCH_POINTS,TABS:TABS,CACHE_KEYS:CACHE_KEYS,AUDIO_STATUS:AUDIO_STATUS};const GET_USERNAME="GET_USERNAME",LOGIN="LOGIN",LOGOUT="LOGOUT",LOGIN_FAIL="LOGIN_FAIL",LOGIN_SUCCESS="LOGIN_SUCCESS",NAVIGATE_TO_ROUTE_START="NAVIGATE_TO_ROUTE_START",NAVIGATE_TO_ROUTE_END="NAVIGATE_TO_ROUTE_END",UPDATE_OFFLINE="UPDATE_OFFLINE",TOP_LEVEL_TAB_CHANGE="TOP_LEVEL_TAB_CHANGE",CLOSE_PANEL="CLOSE_PANEL",OPEN_PANEL="OPEN_PANEL",TAB_NAVIGATION="TAB_NAVIGATION",TOGGLE_NAV_EXPANSION="TOGGLE_NAV_EXPANSION",NAVIGATION_MASKED="NAVIGATION_MASKED",SAVE_COMPONENT_STATE="SAVE_COMPONENT_STATE",SET_ACTIVE_ASSET_LIST="SET_ACTIVE_ASSET_LIST",SHOW_BANNER_MESSAGE="SHOW_BANNER_MESSAGE",CLEAR_BANNER_MESSAGE="CLEAR_BANNER_MESSAGE",INSERT_STEPS_COMPLETED="INSERT_STEPS_COMPLETED",INSERT_STEPS_START="INSERT_STEPS_START",ENTITLEMENT_CHECK_COMPLETE="ENTITLEMENT_CHECK_COMPLETE",updateOfflineThunk=offline=>(dispatch,getState)=>{dispatch(updateOffline())},updateOffline=offline=>{return{type:UPDATE_OFFLINE,offline}},navigateTo=location=>{const route="/"===location.pathname?ROUTE.editor:location.pathname,params=new URLSearchParams(location.search);return{type:NAVIGATE_TO_ROUTE_START,route,params,search:location.search}},loginSuccess=(username,userId,orgId,orgName,orgRoles,userInfo={firstName:void 0,lastName:void 0,email:void 0})=>{return{type:LOGIN_SUCCESS,username,userId,orgId,orgName,orgRoles,userInfo}},loginFail=()=>{return{type:LOGIN_FAIL,username:""}},logout=()=>{return{type:LOGOUT}},saveComponentState=(componentKey,data,sessionOnly)=>{return{type:SAVE_COMPONENT_STATE,componentKey,data,sessionOnly}},setActiveAssetList=assetList=>{return{type:SET_ACTIVE_ASSET_LIST,assetList}},insertStepsStart=()=>{return{type:INSERT_STEPS_START}},showBannerMessage=(message,type=BANNER_MESSAGE_TYPE.INFO)=>{return{type:SHOW_BANNER_MESSAGE,message,messageType:type}},selectTab=tabName=>{return{type:TOP_LEVEL_TAB_CHANGE,tabName}},closePanel=name=>{return{type:CLOSE_PANEL,name}},openPanel=name=>{return{type:OPEN_PANEL,name}},tabNavigation=(tabName,pathname,assetType,procedurefilter,openCapture)=>{return{type:TAB_NAVIGATION,tabName,pathname,assetType,procedurefilter,openCapture}},toggleNavExpansion=()=>{return{type:TOGGLE_NAV_EXPANSION}},navigationMasked=(masked,componentName)=>{return{type:NAVIGATION_MASKED,masked,componentName}};var app={GET_USERNAME:GET_USERNAME,LOGIN:LOGIN,LOGOUT:LOGOUT,LOGIN_FAIL:LOGIN_FAIL,LOGIN_SUCCESS:LOGIN_SUCCESS,NAVIGATE_TO_ROUTE_START:NAVIGATE_TO_ROUTE_START,NAVIGATE_TO_ROUTE_END:NAVIGATE_TO_ROUTE_END,UPDATE_OFFLINE:UPDATE_OFFLINE,TOP_LEVEL_TAB_CHANGE:TOP_LEVEL_TAB_CHANGE,CLOSE_PANEL:CLOSE_PANEL,OPEN_PANEL:OPEN_PANEL,TAB_NAVIGATION:TAB_NAVIGATION,TOGGLE_NAV_EXPANSION:TOGGLE_NAV_EXPANSION,NAVIGATION_MASKED:NAVIGATION_MASKED,SAVE_COMPONENT_STATE:SAVE_COMPONENT_STATE,SET_ACTIVE_ASSET_LIST:SET_ACTIVE_ASSET_LIST,SHOW_BANNER_MESSAGE:SHOW_BANNER_MESSAGE,CLEAR_BANNER_MESSAGE:CLEAR_BANNER_MESSAGE,INSERT_STEPS_COMPLETED:INSERT_STEPS_COMPLETED,INSERT_STEPS_START:INSERT_STEPS_START,ENTITLEMENT_CHECK_COMPLETE:ENTITLEMENT_CHECK_COMPLETE,updateOfflineThunk:updateOfflineThunk,updateOffline:updateOffline,navigateTo:navigateTo,loginSuccess:loginSuccess,loginFail:loginFail,logout:logout,saveComponentState:saveComponentState,setActiveAssetList:setActiveAssetList,insertStepsStart:insertStepsStart,showBannerMessage:showBannerMessage,selectTab:selectTab,closePanel:closePanel,openPanel:openPanel,tabNavigation:tabNavigation,toggleNavExpansion:toggleNavExpansion,navigationMasked:navigationMasked};/* begin copyright text
    *
    * Copyright © 2016 PTC Inc., Its Subsidiary Companies, and /or its Partners. All Rights Reserved.
    *
    * end copyright text
    */const FETCH_ASSETS="FETCH_ASSETS",FETCH_ASSETS_SUCCEEDED="FETCH_ASSETS_SUCCEEDED",FETCH_ASSETS_FAILED="FETCH_ASSETS_FAILED",FETCH_ASSET_METADATA_SUCCEEDED="FETCH_ASSET_METADATA_SUCCEEDED",FETCH_ASSET_METADATA_AND_EMIT_EVENT="FETCH_ASSET_METADATA_AND_EMIT_EVENT",FETCH_ASSET_METADATA_AND_EMIT_EVENT_FAILED="FETCH_ASSET_METADATA_AND_EMIT_EVENT_FAILED",FETCH_ASSET_USES="FETCH_ASSET_USES",FETCH_ASSET_USES_SUCCEEDED="FETCH_ASSET_USES_SUCCEEDED",FETCH_ASSET_USES_FAILED="FETCH_ASSET_USES_FAILED",DELETE_ASSET="DELETE_ASSET",DELETE_ASSET_COMPLETE="DELETE_ASSET_COMPLETE",DELETE_ASSET_FAILED="DELETE_ASSET_FAILED",RENAME_ASSET="RENAME_ASSET",RENAME_ASSET_COMPLETE="RENAME_ASSET_COMPLETE",RENAME_ASSET_FAILED="RENAME_ASSET_FAILED",OPEN_CAPTURE="OPEN_CAPTURE",RESET_ACTIVE_CAPTURE="RESET_ACTIVE_CAPTURE",CREATE_ASSET="CREATE_ASSET",CREATE_ASSET_PENDING="CREATE_ASSET_PENDING",CREATE_ASSET_START="CREATE_ASSET_START",CREATE_ASSET_UPLOAD="CREATE_ASSET_UPLOAD",CREATE_ASSET_COMPLETE="CREATE_ASSET_COMPLETE",CREATE_ASSET_FAILED="CREATE_ASSET_FAILED",CREATE_ASSET_CANCEL_ALL="CREATE_ASSET_CANCEL_ALL",CREATE_ASSET_UPLOAD_END="CREATE_ASSET_UPLOAD_END",CREATE_ASSET_ENQUEUE_UPLOAD="CREATE_ASSET_ENQUEUE_UPLOAD",CREATE_ASSET_UPLOAD_START="CREATE_ASSET_UPLOAD_START",MARK_NEWLY_CREATED_ASSET="MARK_NEWLY_CREATED_ASSET",UNMARK_NEWLY_CREATED_ASSET="UNMARK_NEWLY_CREATED_ASSET",MARK_NEWLY_GENERATED_VIDEO_ASSET="MARK_NEWLY_GENERATED_VIDEO_ASSET",UNMARK_NEWLY_GENERATED_VIDEO_ASSET="UNMARK_NEWLY_GENERATED_VIDEO_ASSET",ASSET_VIDEO_EDITOR_OPENED="ASSET_VIDEO_EDITOR_OPENED",ASSET_VIDEO_EDITOR_CLOSED="ASSET_VIDEO_EDITOR_CLOSED",loadAssets=(assetType,includeContainedAssets)=>{return{type:FETCH_ASSETS,assetType,includeContainedAssets}},openCapture=capture=>{return{type:OPEN_CAPTURE,capture}},resetActiveCapture=()=>{return{type:RESET_ACTIVE_CAPTURE}},deleteAsset=asset=>{return{type:DELETE_ASSET,asset}},renameAsset=asset=>{return{type:RENAME_ASSET,asset}},createAsset=(file,context={})=>{return{type:CREATE_ASSET,file,context}};function cancelAllPendingUploads(){return{type:CREATE_ASSET_CANCEL_ALL}}const fetchMetadataForAssetThumbnail=asset=>{return{type:FETCH_ASSET_METADATA_AND_EMIT_EVENT,asset,event:"assetThumbnail"}},fetchAssetUses=asset=>{return{type:FETCH_ASSET_USES,asset}},assetVideoEditorOpened=(videoDuration,asset)=>{return{type:ASSET_VIDEO_EDITOR_OPENED,videoDuration,asset}},assetVideoEditorClosed=()=>{return{type:ASSET_VIDEO_EDITOR_CLOSED}};var assets={FETCH_ASSETS:FETCH_ASSETS,FETCH_ASSETS_SUCCEEDED:FETCH_ASSETS_SUCCEEDED,FETCH_ASSETS_FAILED:FETCH_ASSETS_FAILED,FETCH_ASSET_METADATA_SUCCEEDED:FETCH_ASSET_METADATA_SUCCEEDED,FETCH_ASSET_METADATA_AND_EMIT_EVENT:FETCH_ASSET_METADATA_AND_EMIT_EVENT,FETCH_ASSET_METADATA_AND_EMIT_EVENT_FAILED:FETCH_ASSET_METADATA_AND_EMIT_EVENT_FAILED,FETCH_ASSET_USES:FETCH_ASSET_USES,FETCH_ASSET_USES_SUCCEEDED:FETCH_ASSET_USES_SUCCEEDED,FETCH_ASSET_USES_FAILED:FETCH_ASSET_USES_FAILED,DELETE_ASSET:DELETE_ASSET,DELETE_ASSET_COMPLETE:DELETE_ASSET_COMPLETE,DELETE_ASSET_FAILED:DELETE_ASSET_FAILED,RENAME_ASSET:RENAME_ASSET,RENAME_ASSET_COMPLETE:RENAME_ASSET_COMPLETE,RENAME_ASSET_FAILED:RENAME_ASSET_FAILED,OPEN_CAPTURE:OPEN_CAPTURE,RESET_ACTIVE_CAPTURE:RESET_ACTIVE_CAPTURE,CREATE_ASSET:CREATE_ASSET,CREATE_ASSET_PENDING:CREATE_ASSET_PENDING,CREATE_ASSET_START:CREATE_ASSET_START,CREATE_ASSET_UPLOAD:CREATE_ASSET_UPLOAD,CREATE_ASSET_COMPLETE:CREATE_ASSET_COMPLETE,CREATE_ASSET_FAILED:CREATE_ASSET_FAILED,CREATE_ASSET_CANCEL_ALL:CREATE_ASSET_CANCEL_ALL,CREATE_ASSET_UPLOAD_END:CREATE_ASSET_UPLOAD_END,CREATE_ASSET_ENQUEUE_UPLOAD:CREATE_ASSET_ENQUEUE_UPLOAD,CREATE_ASSET_UPLOAD_START:CREATE_ASSET_UPLOAD_START,MARK_NEWLY_CREATED_ASSET:MARK_NEWLY_CREATED_ASSET,UNMARK_NEWLY_CREATED_ASSET:UNMARK_NEWLY_CREATED_ASSET,MARK_NEWLY_GENERATED_VIDEO_ASSET:MARK_NEWLY_GENERATED_VIDEO_ASSET,UNMARK_NEWLY_GENERATED_VIDEO_ASSET:UNMARK_NEWLY_GENERATED_VIDEO_ASSET,ASSET_VIDEO_EDITOR_OPENED:ASSET_VIDEO_EDITOR_OPENED,ASSET_VIDEO_EDITOR_CLOSED:ASSET_VIDEO_EDITOR_CLOSED,loadAssets:loadAssets,openCapture:openCapture,resetActiveCapture:resetActiveCapture,deleteAsset:deleteAsset,renameAsset:renameAsset,createAsset:createAsset,cancelAllPendingUploads:cancelAllPendingUploads,fetchMetadataForAssetThumbnail:fetchMetadataForAssetThumbnail,fetchAssetUses:fetchAssetUses,assetVideoEditorOpened:assetVideoEditorOpened,assetVideoEditorClosed:assetVideoEditorClosed};/* begin copyright text
    *
    * Copyright © 2016 PTC Inc., Its Subsidiary Companies, and /or its Partners. All Rights Reserved.
    *
    * end copyright text
    */const SET_ACTIVE_CAPTURE_STEP="SET_ACTIVE_CAPTURE_STEP",set_active_capture_step=(stepId,captureId)=>{return{type:SET_ACTIVE_CAPTURE_STEP,stepId,captureId}};/**
                                                                   * @param {string} stepId
                                                                   * @param {string} captureId
                                                                   */var capture={SET_ACTIVE_CAPTURE_STEP:SET_ACTIVE_CAPTURE_STEP,set_active_capture_step:set_active_capture_step};/* begin copyright text
    *
    * Copyright © 2016 PTC Inc., Its Subsidiary Companies, and /or its Partners. All Rights Reserved.
    *
    * end copyright text
    */const CREATE_PROCEDURE="CREATE_PROCEDURE",CREATE_PROCEDURE_CANCEL="CREATE_PROCEDURE_CANCEL",CREATE_PROCEDURE_SUCCEEDED="CREATE_PROCEDURE_SUCCEEDED",CREATE_PROCEDURE_FAILED="CREATE_PROCEDURE_FAILED",CREATE_PROCEDURE_START="CREATE_PROCEDURE_START",CREATE_PROCEDURE_WARNING="CREATE_PROCEDURE_WARNING",create=data=>{return{type:CREATE_PROCEDURE,...data}},cancel$1=()=>{return{type:CREATE_PROCEDURE_CANCEL}},failed=message=>{return{type:CREATE_PROCEDURE_FAILED,message}},warn=(message,tooltip)=>{return{type:CREATE_PROCEDURE_WARNING,message,tooltip}};var newProcedure={CREATE_PROCEDURE:CREATE_PROCEDURE,CREATE_PROCEDURE_CANCEL:CREATE_PROCEDURE_CANCEL,CREATE_PROCEDURE_SUCCEEDED:CREATE_PROCEDURE_SUCCEEDED,CREATE_PROCEDURE_FAILED:CREATE_PROCEDURE_FAILED,CREATE_PROCEDURE_START:CREATE_PROCEDURE_START,CREATE_PROCEDURE_WARNING:CREATE_PROCEDURE_WARNING,create:create,cancel:cancel$1,failed:failed,warn:warn};/* begin copyright text
    *
    * Copyright © 2016 PTC Inc., Its Subsidiary Companies, and /or its Partners. All Rights Reserved.
    *
    * end copyright text
    */const ACTIVATE_PROCEDURE_TAB="ACTIVATE_PROCEDURE_TAB",NEW_STEP="NEW_STEP",NEW_STEPS="NEW_STEPS",REMOVE_STEP="REMOVE_STEP",LOAD_PROCEDURE="LOAD_PROCEDURE",LOAD_PROCEDURE_ERROR="LOAD_PROCEDURE_ERROR",REMOVE_ACTIVE_PROCEDURE="REMOVE_ACTIVE_PROCEDURE",COULD_NOT_OPEN_PROCEDURE="COULD_NOT_OPEN_PROCEDURE",OPEN_PROCEDURE="OPEN_PROCEDURE",DELETE_PROCEDURE="DELETE_PROCEDURE",DELETE_PROCEDURE_START="DELETE_PROCEDURE_START",DELETE_PROCEDURE_COMPLETE="DELETE_PROCEDURE_COMPLETE",DELETE_PROCEDURE_FAILED="DELETE_PROCEDURE_FAILED",RENAME_PROCEDURE_START="RENAME_PROCEDURE_START",ALLOW_RENAME_PROCEDURE="ALLOW_RENAME_PROCEDURE",DISALLOW_RENAME_PROCEDURE="DISALLOW_RENAME_PROCEDURE",RENAME_PROCEDURE_STOP="RENAME_PROCEDURE_STOP",RENAME_PROCEDURE="RENAME_PROCEDURE",RENAME_PROCEDURE_COMPLETE="RENAME_PROCEDURE_COMPLETE",RENAME_PROCEDURE_FAILED="RENAME_PROCEDURE_FAILED",STEP_DESCRIPTION_CHANGE="STEP_DESCRIPTION_CHANGE",STEP_LOCATION_CHANGE="STEP_LOCATION_CHANGE",STEP_LOCATIONAWARE_CHANGE="STEP_LOCATIONAWARE_CHANGE",STEP_ID_CHANGE="STEP_ID_CHANGE",STEP_3D_EFFECT_CHANGE="STEP_3D_EFFECT_CHANGE",SAVE_PROCEDURE="SAVE_PROCEDURE",SAVE_PROCEDURE_START="SAVE_PROCEDURE_START",SAVE_PROCEDURE_END="SAVE_PROCEDURE_END",SAVE_PROCEDURE_SUCCEEDED="SAVE_PROCEDURE_SUCCEEDED",SAVE_PROCEDURE_FAILED="SAVE_PROCEDURE_FAILED",SAVE_PROCEDURE_SCHEDULE_ANOTHER_SAVE="SAVE_PROCEDURE_SCHEDULE_ANOTHER_SAVE",SAVE_PROCEDURE_PROCESS_EXIT="SAVE_PROCEDURE_PROCESS_EXIT",STEP_MOVE="STEP_MOVE",ASSET_MOVE="ASSET_MOVE",REMOVE_ASSETS_FROM_STEP="REMOVE_ASSETS_FROM_STEP",REMOVE_ASSETS_FROM_STEP_AND_RESET="REMOVE_ASSETS_FROM_STEP_AND_RESET",PUBLISH_PROCEDURE="PUBLISH_PROCEDURE",PUBLISH_PROCEDURE_SUCCEEDED="PUBLISH_PROCEDURE_SUCCEEDED",UNPUBLISH_PROCEDURE="UNPUBLISH_PROCEDURE",UNPUBLISH_PROCEDURE_SUCCEEDED="UNPUBLISH_PROCEDURE_SUCCEEDED",ADD_ASSET_TO_STEP="ADD_ASSET_TO_STEP",DO_ADD_ASSET_TO_STEP="DO_ADD_ASSET_TO_STEP",ADD_VIDEO_CLIP_TO_STEP="ADD_VIDEO_CLIP_TO_STEP",FETCH_PROCEDURE_SUCCEEDED="FETCH_PROCEDURE_SUCCEEDED",ADD_ASSET_IN_NEW_STEP="ADD_ASSET_IN_NEW_STEP",EXPORT_PROCEDURE="EXPORT_PROCEDURE",EXPORT_PROCEDURE_START="EXPORT_PROCEDURE_START",EXPORT_PROCEDURE_COMPLETE="EXPORT_PROCEDURE_COMPLETE",EXPORT_PROCEDURE_FAILED="EXPORT_PROCEDURE_FAILED",EXPORT_PROCEDURE_CANCEL="EXPORT_PROCEDURE_CANCEL",PROCEDURE_VIEW_STARTED="PROCEDURE_VIEW_STARTED",NAVIGATED_IN_PROCEDURE="NAVIGATED_IN_PROCEDURE",PROCEDURE_VIEW_STOPPED="PROCEDURE_VIEW_STOPPED",FETCH_PERMISSIONS_SUCCEEDED="FETCH_PERMISSIONS_SUCCEEDED",step3dEffectChange=(procedureId,stepId,tvMode,contextUrl,partList,camLocation,context)=>{return{type:STEP_3D_EFFECT_CHANGE,procedureId,stepId,tvMode,contextUrl,partList,camLocation,context}},activateProcedureTab=tabId=>{return{type:ACTIVATE_PROCEDURE_TAB,tabId}},removeStep=index=>{return{type:REMOVE_STEP,index}},addStep=index=>{return{type:NEW_STEP,index}},addSteps=(steps,index)=>{return{type:NEW_STEPS,steps,index}},openProcedure=procedure=>{return{type:OPEN_PROCEDURE,procedure}},deleteProcedure=(procedureId,url)=>{return{type:DELETE_PROCEDURE,procedureId,url}},stepDescriptionChange=(text,step)=>{return{type:STEP_DESCRIPTION_CHANGE,text,step}},loadProcedure=procedure=>{return{type:LOAD_PROCEDURE,procedure}},loadProcedureError=()=>{return{type:LOAD_PROCEDURE_ERROR}},removeActiveProcedure=()=>{return{type:REMOVE_ACTIVE_PROCEDURE}},couldNotOpenProcedure=(id=null)=>{return{type:COULD_NOT_OPEN_PROCEDURE,id}},publishProcedure=procedure=>{return{type:PUBLISH_PROCEDURE,procedure}},publishProcedureSucceeded=(procedureId,publishConfig)=>{return{type:PUBLISH_PROCEDURE_SUCCEEDED,procedureId,publishConfig}},unpublishProcedure=procedure=>{return{type:UNPUBLISH_PROCEDURE,procedure}},unpublishProcedureSucceeded=procedureId=>{return{type:UNPUBLISH_PROCEDURE_SUCCEEDED,procedureId}},renameProcedure=(procedureId,newName)=>{return{type:RENAME_PROCEDURE,procedureId,newName}},allowRenameProcedure=()=>{return{type:ALLOW_RENAME_PROCEDURE}},disallowRenameProcedure=()=>{return{type:DISALLOW_RENAME_PROCEDURE}},renameProcedureStart=()=>{return{type:RENAME_PROCEDURE_START}},renameProcedureStop=()=>{return{type:RENAME_PROCEDURE_STOP}},addAssetToStep=(procedureId,stepId,assetId,targetAssetName=null,insertAfter=!1)=>{return{type:ADD_ASSET_TO_STEP,procedureId,stepId,assetId,targetAssetName,insertAfter}},addAssetToStepFromFile=(procedureId,stepId,file,undoHistoryGroupKey,tags)=>{return{type:ADD_ASSET_TO_STEP,procedureId,stepId,file,targetAssetName:null,undoHistoryGroupKey,tags}},addAssetInNewStep=(index,assetId,assetOrigin=null)=>{return{type:ADD_ASSET_IN_NEW_STEP,index,assetId,assetOrigin}},addVideoClipToStep=(procedureId,stepId,videoData,title)=>{return{type:ADD_VIDEO_CLIP_TO_STEP,procedureId,stepId,videoData,title}},removeAssetsFromStepAndReset=(assetNames,stepId)=>{return{type:REMOVE_ASSETS_FROM_STEP_AND_RESET,assetNames,stepId}},procedureViewStarted=(appLaunchId,procedure,viewingSessionId)=>{return{type:PROCEDURE_VIEW_STARTED,appLaunchId,procedureId:procedure.id,correlationId:procedure.correlationId,viewingSessionId}},navigatedInProcedure=(appLaunchId,targetStepId,viewingSessionId,navigateType)=>{return{type:NAVIGATED_IN_PROCEDURE,appLaunchId,targetStepId,viewingSessionId,navigateType}},procedureViewStopped=(appLaunchId,viewingSessionId)=>{return{type:PROCEDURE_VIEW_STOPPED,appLaunchId,viewingSessionId}};var procedure={ACTIVATE_PROCEDURE_TAB:ACTIVATE_PROCEDURE_TAB,NEW_STEP:NEW_STEP,NEW_STEPS:NEW_STEPS,REMOVE_STEP:REMOVE_STEP,LOAD_PROCEDURE:LOAD_PROCEDURE,LOAD_PROCEDURE_ERROR:LOAD_PROCEDURE_ERROR,REMOVE_ACTIVE_PROCEDURE:REMOVE_ACTIVE_PROCEDURE,COULD_NOT_OPEN_PROCEDURE:COULD_NOT_OPEN_PROCEDURE,OPEN_PROCEDURE:OPEN_PROCEDURE,DELETE_PROCEDURE:DELETE_PROCEDURE,DELETE_PROCEDURE_START:DELETE_PROCEDURE_START,DELETE_PROCEDURE_COMPLETE:DELETE_PROCEDURE_COMPLETE,DELETE_PROCEDURE_FAILED:DELETE_PROCEDURE_FAILED,RENAME_PROCEDURE_START:RENAME_PROCEDURE_START,ALLOW_RENAME_PROCEDURE:ALLOW_RENAME_PROCEDURE,DISALLOW_RENAME_PROCEDURE:DISALLOW_RENAME_PROCEDURE,RENAME_PROCEDURE_STOP:RENAME_PROCEDURE_STOP,RENAME_PROCEDURE:RENAME_PROCEDURE,RENAME_PROCEDURE_COMPLETE:RENAME_PROCEDURE_COMPLETE,RENAME_PROCEDURE_FAILED:RENAME_PROCEDURE_FAILED,STEP_DESCRIPTION_CHANGE:STEP_DESCRIPTION_CHANGE,STEP_LOCATION_CHANGE:STEP_LOCATION_CHANGE,STEP_LOCATIONAWARE_CHANGE:STEP_LOCATIONAWARE_CHANGE,STEP_ID_CHANGE:STEP_ID_CHANGE,STEP_3D_EFFECT_CHANGE:STEP_3D_EFFECT_CHANGE,SAVE_PROCEDURE:SAVE_PROCEDURE,SAVE_PROCEDURE_START:SAVE_PROCEDURE_START,SAVE_PROCEDURE_END:SAVE_PROCEDURE_END,SAVE_PROCEDURE_SUCCEEDED:SAVE_PROCEDURE_SUCCEEDED,SAVE_PROCEDURE_FAILED:SAVE_PROCEDURE_FAILED,SAVE_PROCEDURE_SCHEDULE_ANOTHER_SAVE:SAVE_PROCEDURE_SCHEDULE_ANOTHER_SAVE,SAVE_PROCEDURE_PROCESS_EXIT:SAVE_PROCEDURE_PROCESS_EXIT,STEP_MOVE:STEP_MOVE,ASSET_MOVE:ASSET_MOVE,REMOVE_ASSETS_FROM_STEP:REMOVE_ASSETS_FROM_STEP,REMOVE_ASSETS_FROM_STEP_AND_RESET:REMOVE_ASSETS_FROM_STEP_AND_RESET,PUBLISH_PROCEDURE:PUBLISH_PROCEDURE,PUBLISH_PROCEDURE_SUCCEEDED:PUBLISH_PROCEDURE_SUCCEEDED,UNPUBLISH_PROCEDURE:UNPUBLISH_PROCEDURE,UNPUBLISH_PROCEDURE_SUCCEEDED:UNPUBLISH_PROCEDURE_SUCCEEDED,ADD_ASSET_TO_STEP:ADD_ASSET_TO_STEP,DO_ADD_ASSET_TO_STEP:DO_ADD_ASSET_TO_STEP,ADD_VIDEO_CLIP_TO_STEP:ADD_VIDEO_CLIP_TO_STEP,FETCH_PROCEDURE_SUCCEEDED:FETCH_PROCEDURE_SUCCEEDED,ADD_ASSET_IN_NEW_STEP:ADD_ASSET_IN_NEW_STEP,EXPORT_PROCEDURE:EXPORT_PROCEDURE,EXPORT_PROCEDURE_START:EXPORT_PROCEDURE_START,EXPORT_PROCEDURE_COMPLETE:EXPORT_PROCEDURE_COMPLETE,EXPORT_PROCEDURE_FAILED:EXPORT_PROCEDURE_FAILED,EXPORT_PROCEDURE_CANCEL:EXPORT_PROCEDURE_CANCEL,PROCEDURE_VIEW_STARTED:PROCEDURE_VIEW_STARTED,NAVIGATED_IN_PROCEDURE:NAVIGATED_IN_PROCEDURE,PROCEDURE_VIEW_STOPPED:PROCEDURE_VIEW_STOPPED,FETCH_PERMISSIONS_SUCCEEDED:FETCH_PERMISSIONS_SUCCEEDED,step3dEffectChange:step3dEffectChange,activateProcedureTab:activateProcedureTab,removeStep:removeStep,addStep:addStep,addSteps:addSteps,openProcedure:openProcedure,deleteProcedure:deleteProcedure,stepDescriptionChange:stepDescriptionChange,loadProcedure:loadProcedure,loadProcedureError:loadProcedureError,removeActiveProcedure:removeActiveProcedure,couldNotOpenProcedure:couldNotOpenProcedure,publishProcedure:publishProcedure,publishProcedureSucceeded:publishProcedureSucceeded,unpublishProcedure:unpublishProcedure,unpublishProcedureSucceeded:unpublishProcedureSucceeded,renameProcedure:renameProcedure,allowRenameProcedure:allowRenameProcedure,disallowRenameProcedure:disallowRenameProcedure,renameProcedureStart:renameProcedureStart,renameProcedureStop:renameProcedureStop,addAssetToStep:addAssetToStep,addAssetToStepFromFile:addAssetToStepFromFile,addAssetInNewStep:addAssetInNewStep,addVideoClipToStep:addVideoClipToStep,removeAssetsFromStepAndReset:removeAssetsFromStepAndReset,procedureViewStarted:procedureViewStarted,navigatedInProcedure:navigatedInProcedure,procedureViewStopped:procedureViewStopped};/* begin copyright text
    *
    * Copyright © 2016 PTC Inc., Its Subsidiary Companies, and /or its Partners. All Rights Reserved.
    *
    * end copyright text
    */const FETCH_PROCEDURES="FETCH_PROCEDURES",FETCH_PROCEDURES_SUCCEEDED="FETCH_PROCEDURES_SUCCEEDED",FETCH_PROCEDURES_FAILED="FETCH_PROCEDURES_FAILED",FETCH_PUBLISHED_PROCEDURES="FETCH_PUBLISHED_PROCEDURES",FETCH_PUBLISHED_PROCEDURES_SUCCEEDED="FETCH_PUBLISHED_PROCEDURES_SUCCEEDED",FETCH_PUBLISHED_PROCEDURES_FAILED="FETCH_PUBLISHED_PROCEDURES_FAILED",loadProcedures=()=>{return{type:FETCH_PROCEDURES}},loadPublishedProcedures=()=>{return{type:FETCH_PUBLISHED_PROCEDURES}};function getState(store){return"function"===typeof store.getState?store.getState():store}/**
   * A selector to get the active procedure instance from the store.
   * Note that to get the active procedure id you can just use state.procedures.activeId.
   * @param {*} store a redux store or global state object
   * @returns {PEProcedure}
   */function getActiveProcedure(store){const state=getState(store);if(state.procedures){const{activeId,cache}=state.procedures;let entry=cache[activeId];//Entry may be null, but if not, use the present value from the history
return entry&&entry.present?entry.present:entry}return null}/**
   * Gets the procedure object with the undo history.  See redux-undo library for more info.
   *
   * @param {Object} store
   * @returns {Object} with past, future, present properties.
   */function getActiveProcedureHistory(store){const defaultVal={past:[],future:[]},state=getState(store);if(state.procedures){const{activeId,cache}=state.procedures;let entry=cache[activeId];return entry||defaultVal}return defaultVal}/**
   * A selector to get the active step instance from the store.
   * @param {*} store a redux store or global state object
   * @returns {Object}
   */function getActiveStep(store){const state=getState(store);if(state.procedures){const{id,procedureId}=state.procedures.activeStep;if(id){const{activeId,cache}=state.procedures;if(activeId!==procedureId){console.warn("Active procedure id and active step mismatch",activeId,procedureId);return null}const activeProcedure=cache[activeId];if(activeProcedure&&activeProcedure.present.steps){return activeProcedure.present.steps.find(step=>step.id===id)}}}return null}function getSelectedAssetNames(store){const state=getState(store);return state.procedures?state.procedures.activeStep.selectedAssetNames||[]:[]}function getCursorAssetIndex(store){const state=getState(store);return state.procedures?state.procedures.activeStep.cursorAssetIndex:null}var procedures={FETCH_PROCEDURES:FETCH_PROCEDURES,FETCH_PROCEDURES_SUCCEEDED:FETCH_PROCEDURES_SUCCEEDED,FETCH_PROCEDURES_FAILED:FETCH_PROCEDURES_FAILED,FETCH_PUBLISHED_PROCEDURES:FETCH_PUBLISHED_PROCEDURES,FETCH_PUBLISHED_PROCEDURES_SUCCEEDED:FETCH_PUBLISHED_PROCEDURES_SUCCEEDED,FETCH_PUBLISHED_PROCEDURES_FAILED:FETCH_PUBLISHED_PROCEDURES_FAILED,loadProcedures:loadProcedures,loadPublishedProcedures:loadPublishedProcedures,getActiveProcedure:getActiveProcedure,getActiveProcedureHistory:getActiveProcedureHistory,getActiveStep:getActiveStep,getSelectedAssetNames:getSelectedAssetNames,getCursorAssetIndex:getCursorAssetIndex};/* begin copyright text
    *
    * Copyright © 2016 PTC Inc., Its Subsidiary Companies, and /or its Partners. All Rights Reserved.
    *
    * end copyright text
    */const FETCH_SSG_NODE_SUCCEEDED="FETCH_SSG_NODE_SUCCEEDED",FETCH_SEMANTIC_LOCATION_SUCCEEDED="FETCH_SEMANTIC_LOCATION_SUCCEEDED",FETCH_PROCEDURE_ANCHORS_SUCCEEDED="FETCH_PROCEDURE_ANCHORS_SUCCEEDED",FETCH_RELATED_CAPTURE_SUCCEEDED="FETCH_RELATED_CAPTURE_SUCCEEDED",RESET_PROCEDURE_ANCHORS="RESET_PROCEDURE_ANCHORS";function fetchCaptureNodeSucceeded(id,nodes){return{type:FETCH_RELATED_CAPTURE_SUCCEEDED,id,nodes}}function fetchNodeSucceeded(node){return{type:FETCH_SSG_NODE_SUCCEEDED,node}}function fetchSemanticLocationSucceeded(slkey,nodes){return{type:FETCH_SEMANTIC_LOCATION_SUCCEEDED,slkey,nodes}}function fetchAllAnchorsSucceeded(id,nodes){return{type:FETCH_PROCEDURE_ANCHORS_SUCCEEDED,id,nodes}}var spatialGraph={FETCH_SSG_NODE_SUCCEEDED:FETCH_SSG_NODE_SUCCEEDED,FETCH_SEMANTIC_LOCATION_SUCCEEDED:FETCH_SEMANTIC_LOCATION_SUCCEEDED,FETCH_PROCEDURE_ANCHORS_SUCCEEDED:FETCH_PROCEDURE_ANCHORS_SUCCEEDED,FETCH_RELATED_CAPTURE_SUCCEEDED:FETCH_RELATED_CAPTURE_SUCCEEDED,RESET_PROCEDURE_ANCHORS:RESET_PROCEDURE_ANCHORS,fetchCaptureNodeSucceeded:fetchCaptureNodeSucceeded,fetchNodeSucceeded:fetchNodeSucceeded,fetchSemanticLocationSucceeded:fetchSemanticLocationSucceeded,fetchAllAnchorsSucceeded:fetchAllAnchorsSucceeded};/* begin copyright text
    *
    * Copyright © 2016 PTC Inc., Its Subsidiary Companies, and /or its Partners. All Rights Reserved.
    *
    * end copyright text
    */const FETCH_USER="FETCH_USER",FETCH_USER_SUCCEEDED="FETCH_USER_SUCCEEDED",FETCH_USER_FAILED="FETCH_USER_FAILED",FETCH_USER_IN_PROGRESS="FETCH_USER_IN_PROGRESS",FETCH_USERS="FETCH_USERS",FETCH_USERS_SUCCEEDED="FETCH_USERS_SUCCEEDED",FETCH_USERS_FAILED="FETCH_USERS_FAILED",FETCH_USERS_IN_PROGRESS="FETCH_USERS_IN_PROGRESS",fetchUser=id=>{return{type:FETCH_USER,id}},fetchUsers=()=>{return{type:FETCH_USERS}};var users={FETCH_USER:FETCH_USER,FETCH_USER_SUCCEEDED:FETCH_USER_SUCCEEDED,FETCH_USER_FAILED:FETCH_USER_FAILED,FETCH_USER_IN_PROGRESS:FETCH_USER_IN_PROGRESS,FETCH_USERS:FETCH_USERS,FETCH_USERS_SUCCEEDED:FETCH_USERS_SUCCEEDED,FETCH_USERS_FAILED:FETCH_USERS_FAILED,FETCH_USERS_IN_PROGRESS:FETCH_USERS_IN_PROGRESS,fetchUser:fetchUser,fetchUsers:fetchUsers};const APP_STATE_KEY="editor.applicationState",toggleKeys={enableExperimentalFeatures:"enableExperimentalFeatures",disableBrowserWarning:"disableBrowserWarning",threedwi:"threedwi",show3DStats:"show3DStats"},getAppStateFromStorage=()=>{const result=JSON.parse(localStorage.getItem(APP_STATE_KEY))||{};result.toggles=result.toggles||{};Object.values(toggleKeys).forEach(key=>{// for now safe to assume all togles are a boolean value
const value=JSON.parse(localStorage.getItem("editor."+key))?!0:!1;if(value){console.log("editor."+key+"="+value);result.toggles[key]=value}else{delete result.toggles[key]}});return result},selectFeatureToggle=(toggleKey,state)=>{const app=(state||{}).app||{};return(app.toggles||{})[toggleKey]},middleware=()=>{return next=>action=>{if(action.type===SAVE_COMPONENT_STATE&&action.componentKey&&!action.sessionOnly){// merge the data on the action with the current stored values, there maybe other properties on the component
// in the current app state so only store the properties that are provided on the action
let appState=getAppStateFromStorage();appState[action.componentKey]={...appState[action.componentKey],...action.data};localStorage.setItem(APP_STATE_KEY,JSON.stringify(appState))}return next(action)}},restore=()=>{return{app:getAppStateFromStorage()}};var appStateStorage={APP_STATE_KEY:APP_STATE_KEY,toggleKeys:toggleKeys,selectFeatureToggle:selectFeatureToggle,middleware:middleware,restore:restore};function getFileTypeIcon(file){let image;if(file&&/\.(.)*$/g.test(file.name)){const fileName=file.name,fileExtension=fileName.substring(fileName.lastIndexOf(".")+1);switch(fileExtension){case"mp4":image=mediaTypeToIcon[ASSET_TYPE.VIDEO];break;case"zip":image=mediaTypeToIcon[ASSET_TYPE.CAPTURE];break;default:image=mediaTypeToIcon[ASSET_TYPE.IMAGE];break;}}else{// the file doesn't have an extension, if it's a directory then return the capture icon otherwise default to the image icon
image=file&&file.isDirectory?mediaTypeToIcon[ASSET_TYPE.CAPTURE]:mediaTypeToIcon[ASSET_TYPE.IMAGE]}return image}const vuforiaLogo=html`
<svg width="54" height="62" viewBox="0 0 54 62" fill="none">
  <g clip-path="url(#clip0)">
  <path d="M26.878 43.8312L49.178 30.9312L26.778 18.0312L4.47803 30.9312L26.878 43.8312Z" fill="#6ABF4B"/>
  <path d="M26.778 13.3313L53.078 28.5312V15.8313L26.678 0.53125L0.478027 15.8313V28.5312L26.778 13.3313Z" fill="#4D5858"/>
  <path d="M26.878 48.5311L0.478027 33.3311V46.0311L26.978 61.3311L53.078 46.0311V33.3311L26.878 48.5311Z" fill="#4D5858"/>
  </g>
  <defs>
  <clipPath id="clip0">
  <rect width="52.6" height="60.8" fill="white" transform="translate(0.478027 0.53125)"/>
  </clipPath>
  </defs>
</svg>
`,spinnerCircle=html`
<svg viewBox="0 0 30 30" fill="none">
  <path d="M29 15C29 18.239 27.8769 21.3777 25.8221 23.8815C23.7674 26.3853 20.908 28.0991 17.7313 28.731C14.5545 29.3629 11.257 28.8737 8.40045 27.3469C5.54393 25.8201 3.30519 23.35 2.06569 20.3576C0.826185 17.3651 0.662611 14.0355 1.60283 10.936C2.54306 7.83651 4.52891 5.1589 7.22202 3.35943C9.91512 1.55995 13.1489 0.749939 16.3722 1.06741C19.5956 1.38489 22.6092 2.8102 24.8995 5.1005"/>
</svg>
`,createIcon=html`
<svg viewBox="0 0 25 25">
  <path d="M10.9978 22.6359C10.9978 23.6439 11.8138 24.4119 12.8218 24.4119C13.7818 24.4119 14.5978 23.6439 14.5978 22.6359V14.3319H23.0458C24.0058 14.3319 24.7738 13.5639 24.7738 12.6039C24.7738 11.6439 24.0058 10.8759 23.0458 10.8759H14.5978V2.5719C14.5978 1.5639 13.7818 0.795898 12.8218 0.795898C11.8138 0.795898 10.9978 1.5639 10.9978 2.5719V10.8759H2.59781C1.63781 10.8759 0.821808 11.6439 0.821808 12.6039C0.821808 13.5639 1.63781 14.3319 2.59781 14.3319H10.9978V22.6359Z"/>
</svg>`,proceduresRecentIcon=html`
<svg viewBox="0 0 13 13">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M6.49523 1.0835C3.50523 1.0835 1.08398 3.51016 1.08398 6.50016C1.08398 9.49016 3.50523 11.9168 6.49523 11.9168C9.49065 11.9168 11.9173 9.49016 11.9173 6.50016C11.9173 3.51016 9.49065 1.0835 6.49523 1.0835ZM6.50065 10.8335C4.10648 10.8335 2.16732 8.89433 2.16732 6.50016C2.16732 4.106 4.10648 2.16683 6.50065 2.16683C8.89482 2.16683 10.834 4.106 10.834 6.50016C10.834 8.89433 8.89482 10.8335 6.50065 10.8335ZM5.95898 3.79183H6.77148V6.63558L9.20898 8.08183L8.80273 8.74808L5.95898 7.04183V3.79183Z"/>
</svg>
`,proceduresCreatedByMeIcon=html`
<svg viewBox="0 0 22 18">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 2C0 0.89543 0.895431 0 2 0H20C21.1046 0 22 0.895431 22 2V16C22 17.1046 21.1046 18 20 18H2C0.89543 18 0 17.1046 0 16V2ZM13.5 4C14.875 4 16 5.125 16 6.5C16 7.875 14.875 9 13.5 9C12.125 9 11 7.875 11 6.5C11 5.125 12.125 4 13.5 4ZM9 12.6667V14H19V12.6667C19 10.8933 15.6625 10 14 10C12.3375 10 9 10.8933 9 12.6667Z"/>
</svg>`,proceduresSharedWithMeIcon=html`
<svg viewBox="0 0 22 18">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M2 0H20C21 0 22 1 22 2V16C22 17 21 18 20 18H2C0.9 18 0 17.1 0 16V2C0 1 1 0 2 0ZM16.52 11.4548C16.78 11.2189 17.12 11.0683 17.5 11.0683C18.305 11.0683 18.96 11.7259 18.96 12.5341C18.96 13.3424 18.305 14 17.5 14C16.695 14 16.04 13.3424 16.04 12.5341C16.04 12.4237 16.055 12.3133 16.08 12.2078L12.52 10.1195C12.25 10.3705 11.895 10.5261 11.5 10.5261C10.67 10.5261 10 9.85341 10 9.02008C10 8.18675 10.67 7.51406 11.5 7.51406C11.895 7.51406 12.25 7.66968 12.52 7.92068L16.045 5.85743C16.02 5.74197 16 5.62651 16 5.50602C16 4.67269 16.67 4 17.5 4C18.33 4 19 4.67269 19 5.50602C19 6.33936 18.33 7.01205 17.5 7.01205C17.105 7.01205 16.75 6.85643 16.48 6.60542L12.955 8.66867C12.98 8.78414 13 8.8996 13 9.02008C13 9.14056 12.98 9.25602 12.955 9.37149L16.52 11.4548Z"/>
</svg>`,helpCenterIcon=html`
<svg viewBox="0 0 24 24" class="svg-view-box">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 19V17H13V19H11ZM14.17 12.17L15.07 11.25C15.64 10.68 16 9.88 16 9C16 6.79 14.21 5 12 5C9.79 5 8 6.79 8 9H10C10 7.9 10.9 7 12 7C13.1 7 14 7.9 14 9C14 9.55 13.78 10.05 13.41 10.41L12.17 11.67C11.45 12.4 11 13.4 11 14.5V15H13C13 13.5 13.45 12.9 14.17 12.17Z" class="main-svg"/>
</svg>`,expandCollapseIcon=html`
<svg viewBox="0 0 5 7">
  <path d="M4.5897e-07 3.5L3.5 7L4.3225 6.1775L1.65083 3.5L4.3225 0.822499L3.5 -4.94705e-07L4.5897e-07 3.5Z"/>
</svg>
`,muteIcon=html`
  <svg viewBox="0 0 32 32">
  <path class="mute-icon-path-1" d="M8 12.23V18.23H12L17 23.23V7.23L12 12.23H8Z"/>
  <path class="mute-icon-path-2" d="M25.0931 13.8476L25.2699 13.6708L25.0931 13.4941L24.5056 12.9066L24.3288 12.7298L24.1521 12.9066L21.9997 15.059L19.8473 12.9066L19.6705 12.7298L19.4937 12.9066L18.9062 13.4941L18.7295 13.6708L18.9062 13.8476L21.0586 16L18.9062 18.1524L18.7295 18.3292L18.9062 18.506L19.4937 19.0935L19.6705 19.2702L19.8473 19.0935L21.9997 16.9411L24.1521 19.0935L24.3288 19.2702L24.5056 19.0935L25.0931 18.506L25.2699 18.3292L25.0931 18.1524L22.9407 16L25.0931 13.8476Z"/>
  </svg>`,unmuteIcon=html`
  <svg viewBox="0 0 32 32">
  <path class="mute-icon-path-1" fill-rule="evenodd" clip-rule="evenodd" d="M17 9.29V7.23C21.01 8.14 24 11.72 24 16C24 20.28 21.01 23.86 17 24.77V22.71C19.89 21.85 22 19.17 22 16C22 12.83 19.89 10.15 17 9.29ZM6 13V19H10L15 24V8L10 13H6ZM19.5 16C19.5 14.23 18.48 12.71 17 11.97V20.02C18.48 19.29 19.5 17.77 19.5 16Z"/>
  </svg>`,editIcon=html`
  <svg width="16" height="16" viewBox="0 0 16 16">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.67285 11.2809V13.6246H5.0166L11.9291 6.71211L9.58535 4.36836L2.67285 11.2809ZM13.7416 4.89961C13.9854 4.65586 13.9854 4.26211 13.7416 4.01836L12.2791 2.55586C12.0354 2.31211 11.6416 2.31211 11.3979 2.55586L10.2541 3.69961L12.5979 6.04336L13.7416 4.89961Z"/>
    <mask id="editIcon0" mask-type="alpha" maskUnits="userSpaceOnUse" x="2" y="2" width="12" height="12">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M2.67285 11.2809V13.6246H5.0166L11.9291 6.71211L9.58535 4.36836L2.67285 11.2809ZM13.7416 4.89961C13.9854 4.65586 13.9854 4.26211 13.7416 4.01836L12.2791 2.55586C12.0354 2.31211 11.6416 2.31211 11.3979 2.55586L10.2541 3.69961L12.5979 6.04336L13.7416 4.89961Z"/>
    </mask>
    <g mask="url(#editIcon0)">
      <rect x="-7.32715" y="-7.625" width="31.25" height="31.25"/>
    </g>
  </svg>
`,deleteIcon=html`
  <svg viewBox="0 0 15 15">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.75 11.875C3.75 12.5625 4.3125 13.125 5 13.125H10C10.6875 13.125 11.25 12.5625 11.25 11.875V4.375H3.75V11.875ZM11.875 2.5H9.6875L9.0625 1.875H5.9375L5.3125 2.5H3.125V3.75H11.875V2.5Z"/>
    <mask id="deleteIcon0" mask-type="alpha" maskUnits="userSpaceOnUse" x="3" y="1" width="9" height="13">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.75 11.875C3.75 12.5625 4.3125 13.125 5 13.125H10C10.6875 13.125 11.25 12.5625 11.25 11.875V4.375H3.75V11.875ZM11.875 2.5H9.6875L9.0625 1.875H5.9375L5.3125 2.5H3.125V3.75H11.875V2.5Z"/>
    </mask>
    <g mask="url(#deleteIcon0)">
      <rect x="-8.125" y="-8.125" width="31.25" height="31.25"/>
    </g>
  </svg>
`,exportIcon=html`
  <svg viewBox="0 0 16 16">
    <path d="M6.31958 5.0085L8.58903 7.16683H0.0830078L0.0830078 8.8335H8.58903L6.31958 10.9918L7.55986 12.1668L11.958 8.00016L7.55986 3.8335L6.31958 5.0085ZM14.1571 2.16667H7.99967V0.5H14.1571C15.1247 0.5 15.9163 1.25 15.9163 2.16667V13.8333C15.9163 14.75 15.1247 15.5 14.1571 15.5H7.99967V13.8333H14.1571V2.16667Z"/>
  </svg>`,exportingIcon=html`
  <svg viewBox="0 0 24 16">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C15.64 0 18.67 2.59 19.35 6.04C21.95 6.22 24 8.36 24 11C24 13.76 21.76 16 19 16H6C2.69 16 0 13.31 0 10C0 6.91 2.34 4.36 5.35 4.04C6.6 1.64 9.11 0 12 0ZM12 14L17 9H14V5H10V9H7L12 14Z"/>
  </svg>
`,searchIcon=html`
  <svg viewBox="0 0 24 24">
    <path d="M14.71 14H15.5L20.49 19L19 20.49L14 15.5V14.71L13.73 14.43C12.59 15.41 11.11 16 9.5 16C5.91 16 3 13.09 3 9.5C3 5.91 5.91 3 9.5 3C13.09 3 16 5.91 16 9.5C16 11.11 15.41 12.59 14.43 13.73L14.71 14ZM5 9.5C5 11.99 7.01 14 9.5 14C11.99 14 14 11.99 14 9.5C14 7.01 11.99 5 9.5 5C7.01 5 5 7.01 5 9.5Z" fill="#C8CBD4"/>
  </svg>`,listViewIcon=html`
  <svg viewBox="0 0 100 100">
    <path d="M0 49.2h12.3v9.6H0zm0-24.6h12.3v9.6H0zm0 49.2h12.3v9.6H0zM0 0h12.3v9.6H0zm24.6
      49.2h75.3v9.6H24.6zm0-24.6h75.3v9.6H24.6zm0 49.2h75.3v9.6H24.6zm0-73.8h75.3v9.6H24.6z"/>
  </svg>`,tileViewIcon=html`
  <svg viewBox="0 0 17 17">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.797852 4.5H4.79785V0.5H0.797852V4.5ZM6.79785 16.5H10.7979V12.5H6.79785V16.5ZM4.79785 16.5H0.797852V12.5H4.79785V16.5ZM0.797852 10.5H4.79785V6.5H0.797852V10.5ZM10.7979 10.5H6.79785V6.5H10.7979V10.5ZM12.7979 0.5V4.5H16.7979V0.5H12.7979ZM10.7979 4.5H6.79785V0.5H10.7979V4.5ZM12.7979 10.5H16.7979V6.5H12.7979V10.5ZM16.7979 16.5H12.7979V12.5H16.7979V16.5Z" fill="#9EA2A8"/>
  </svg>`,uploadIcon=html`
  <svg viewBox="0 0 41 29">
    <path fill-rule="evenodd" clip-rule="evenodd"
      d="M20.5 0.655273C26.5667 0.655273 31.6167 5.08262 32.75 10.9801C37.0833 11.2878 40.5 14.9459 40.5 19.4587C40.5 24.1766 36.7667 28.0057 32.1667 28.0057H10.5C4.98333 28.0057 0.5 23.4074 0.5 17.7493C0.5 12.4672 4.4 8.10826 9.41667 7.56126C11.5 3.45869 15.6833 0.655273 20.5 0.655273ZM23.8333 22.8775V16.0399H28.8333L20.5 7.49288L12.1667 16.0399H17.1667V22.8775H23.8333Z"/>
  </svg>`,importMenuIcon=html`
<svg viewBox="0 0 16 16">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0007 6.66667V10.6667H6.00065V6.66667H3.33398L8.00065 2L12.6673 6.66667H10.0007ZM12.6673 13.3333V12H3.33398V13.3333H12.6673Z"/>
</svg>`,uploadIconWithOuterGlow=html`
<svg viewBox="0 0 41 29" style="overflow: visible;">
  <defs>
    <filter id="sofGlow" height="300%" width="300%" x="-75%" y="-75%">
      <!-- Thicken out the original shape -->
      <feMorphology operator="dilate" radius="4" in="SourceAlpha" result="thicken" />

      <!-- Use a gaussian blur to create the soft blurriness of the glow -->
      <feGaussianBlur in="thicken" stdDeviation="10" result="blurred" />

      <!-- Change the colour -->
      <feFlood flood-color="#DADADA" result="glowColor" />

      <!-- Color in the glows -->
      <feComposite in="glowColor" in2="blurred" operator="in" result="softGlow_colored" />

      <!--	Layer the effects together -->
      <feMerge>
      <feMergeNode in="softGlow_colored"/>
      <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
  <path fill-rule="evenodd" clip-rule="evenodd" filter="url(#sofGlow)"
    d="M20.5 0.655273C26.5667 0.655273 31.6167 5.08262 32.75 10.9801C37.0833 11.2878 40.5 14.9459 40.5 19.4587C40.5 24.1766 36.7667 28.0057 32.1667 28.0057H10.5C4.98333 28.0057 0.5 23.4074 0.5 17.7493C0.5 12.4672 4.4 8.10826 9.41667 7.56126C11.5 3.45869 15.6833 0.655273 20.5 0.655273ZM23.8333 22.8775V16.0399H28.8333L20.5 7.49288L12.1667 16.0399H17.1667V22.8775H23.8333Z"/>
</svg>
`,zipIcon=html`
<svg viewBox="0 0 31.519 31.519">
	<path d="M11.183,0L3.021,8.619v22.9h25.477V0H11.183z M21.132,24.505c-0.06,0.096-0.201,0.315-0.834,0.321
		c-0.635-0.006-0.777-0.227-0.836-0.321c-0.535-0.866,0.027-3.132,0.791-5.104h0.088C21.105,21.373,21.666,23.639,21.132,24.505z
		 M10.464,3.625v3.818H6.847L10.464,3.625z M26.527,29.55H4.99V9.413h7.443V1.971h4.598v1.595h2.178v1.681h-2.178v1.857h2.178v1.857
		h-2.178v1.857h2.178v1.761h-2.178v1.825H16.36v4.995h1.397c-0.715,2.07-1.276,4.707-0.28,6.327
		c0.397,0.646,1.208,1.411,2.794,1.429v0.004c0.009,0,0.018-0.002,0.025-0.002c0.009,0,0.017,0.002,0.025,0.002v-0.004
		c1.585-0.018,2.395-0.783,2.793-1.429c0.996-1.62,0.436-4.257-0.281-6.327h1.401v-4.995h-2.851v-1.825h2.179v-1.856h-2.177V8.961
		h2.179V7.104h-2.179V5.327h2.179V3.47h-2.179V1.971h5.142L26.527,29.55L26.527,29.55z"/>
</svg>
`,bookmarkIcon=html`
  <svg viewBox="0 -256 1792 1792">
    <g transform="matrix(1,0,0,-1,258.16949,1270.2373)">
      <path d="m 1164,1408 q 23,0 44,-9 33,-13 52.5,-41 19.5,-28 19.5,-62 V 7 q 0,-34 -19.5,-62 -19.5,-28 -52.5,-41 -19,-8 -44,-8 -48,0 -83,32 L 640,352 199,-72 q -36,-33 -83,-33 -23,0 -44,9 Q 39,-83 19.5,-55 0,-27 0,7 v 1289 q 0,34 19.5,62 19.5,28 52.5,41 21,9 44,9 h 1048 z" />
    </g>
  </svg>
`,imageIcon=html`
<svg viewBox="0 0 18 18">
  <path d="M16 0C17.1 0 18 0.9 18 2V16C18 17.1 17.1 18 16 18H2C0.9 18 0 17.1 0 16V2C0 0.9 0.9 0 2 0H16ZM8 13.51L5.5 10.5L2 15H16L11.5 9L8 13.51Z"/>
</svg>
`,captureIcon=html`
<svg viewBox="3 3 18 18">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M21 19V5C21 3.9 20.1 3 19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19ZM12.3183 6.22286C12.1272 6.08906 11.8728 6.08906 11.6817 6.22286L8.4588 8.47953C8.2061 8.65647 8.14621 9.00554 8.32548 9.25659L11.5484 13.7699C11.7697 14.0798 12.2303 14.0798 12.4516 13.7699L15.6745 9.25659C15.8538 9.00554 15.7939 8.65647 15.5412 8.47953L12.3183 6.22286ZM7.80402 13.2581L12.0008 15.6811L16.196 13.259L17.196 14.9911L11.9998 17.9911L11.9988 17.9893L6.80402 14.9901L7.80402 13.2581Z"/>
</svg>
`,missionPointIcon=html`
<svg viewBox="0 0 12 18">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M0.166748 6.34017C0.166748 3.11517 2.77508 0.506836 6.00008 0.506836C9.22508 0.506836 11.8334 3.11517 11.8334 6.34017C11.8334 10.7152 6.00008 17.1735 6.00008 17.1735C6.00008 17.1735 0.166748 10.7152 0.166748 6.34017ZM3.91675 6.34017C3.91675 7.49017 4.85008 8.4235 6.00008 8.4235C7.15008 8.4235 8.08342 7.49017 8.08342 6.34017C8.08342 5.19017 7.15008 4.25684 6.00008 4.25684C4.85008 4.25684 3.91675 5.19017 3.91675 6.34017Z"/>
</svg>
`,cameraSnapshotIcon=html`
<svg viewBox="0 0 20 18">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M7 0L5.17 2H2C0.9 2 0 2.9 0 4V16C0 17.1 0.9 18 2 18H18C19.1 18 20 17.1 20 16V4C20 2.9 19.1 2 18 2H14.83L13 0H7ZM10 15C7.24 15 5 12.76 5 10C5 7.24 7.24 5 10 5C12.76 5 15 7.24 15 10C15 12.76 12.76 15 10 15ZM11.25 11.25L10 14L8.75 11.25L6 10L8.75 8.75L10 6L11.25 8.75L14 10L11.25 11.25Z"/>
</svg>
`,scissorIcon=html`
<svg viewBox="0 0 24 24">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.64 7.64C9.87 7.14 10 6.59 10 6C10 3.79 8.21 2 6 2C3.79 2 2 3.79 2 6C2 8.21 3.79 10 6 10C6.59 10 7.14 9.87 7.64 9.64L10 12L7.64 14.36C7.14 14.13 6.59 14 6 14C3.79 14 2 15.79 2 18C2 20.21 3.79 22 6 22C8.21 22 10 20.21 10 18C10 17.41 9.87 16.86 9.64 16.36L12 14L19 21H22V20L9.64 7.64ZM6 8C4.9 8 4 7.11 4 6C4 4.89 4.9 4 6 4C7.1 4 8 4.89 8 6C8 7.11 7.1 8 6 8ZM4 18C4 19.11 4.9 20 6 20C7.1 20 8 19.11 8 18C8 16.89 7.1 16 6 16C4.9 16 4 16.89 4 18ZM12 12.5C11.72 12.5 11.5 12.28 11.5 12C11.5 11.72 11.72 11.5 12 11.5C12.28 11.5 12.5 11.72 12.5 12C12.5 12.28 12.28 12.5 12 12.5ZM13 9L19 3H22V4L15 11L13 9Z"/>
</svg>
`,trimThumb=html`
<svg  viewBox="0 0 18 24">
  <path d="M1.59862 5.69708C0.982368 6.13208 0.583618 6.85708 0.583618 7.66667L0.595701 20.9583C0.595701 22.2875 1.67112 23.375 3.00028 23.375H15.0836C16.4128 23.375 17.4882 22.2875 17.4882 20.9583L17.5003 7.66667C17.5003 6.85708 17.1015 6.13208 16.4853 5.69708L9.04195 0.416666L1.59862 5.69708Z"/>
</svg>
`,videoIcon=html`
<svg viewBox="0 0 18 19">
  <path d="M18 2.4082V16.4082C18 17.5082 17.1 18.4082 16 18.4082H2C0.9 18.4082 0 17.5082 0 16.4082V2.4082C0 1.3082 0.9 0.408203 2 0.408203H16C17.1 0.408203 18 1.3082 18 2.4082ZM5.69608 12.988C5.69608 13.3766 6.12006 13.6167 6.45332 13.4167L12.4196 9.83696C12.7432 9.64276 12.7432 9.17367 12.4196 8.97947L6.45332 5.39972C6.12006 5.19976 5.69608 5.43982 5.69608 5.82847V12.988Z"/>
</svg>
`,assetGroupIcon=html`
<svg viewBox="0 0 20 20">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.22217 17.5706C4.48876 18.9544 5.70626 19.9997 7.16792 19.9997H16.9997C18.6566 19.9997 19.9997 18.6566 19.9997 16.9997V7.16792C19.9997 5.70626 18.9544 4.48876 17.5706 4.22217C17.6062 4.40697 17.6248 4.59782 17.6248 4.79301V14.6248C17.6248 16.2817 16.2817 17.6248 14.6248 17.6248H4.79301C4.59782 17.6248 4.40697 17.6062 4.22217 17.5706Z"/>
  <rect width="15.8318" height="15.8318" rx="3"/>
</svg>
`,modelIcon=html`
<svg viewBox="0 0 50 50">
  <g>
    <rect rx="5.56" height="50" width="50" mask="url(#model_icon)"/>
    <mask id="model_icon">
      <rect y="0" x="0" fill="#fff" height="50" width="50"/>
      <path fill="#000" stroke="#000" d="m36.55,17.63l-10.55,-4.63a0.92,0.92 0 0 0 -0.76,0l-10.24,4.44a1,1 0 0 0 -0.58,0.87l-0.06,13.41a1,1 0 0 0 0.58,0.88l10.33,4.49a0.93,0.93 0 0 0 0.75,0l10.45,-4.44a0.94,0.94 0 0 0 0.58,-0.87l0.06,-13.28a0.94,0.94 0 0 0 -0.56,-0.87zm-12,15.8a0.46,0.46 0 0 1 -0.64,0.43l-6.8,-2.93a0.45,0.45 0 0 1 -0.28,-0.42l0,-9.46a0.47,0.47 0 0 1 0.64,-0.43l6.79,2.81a0.47,0.47 0 0 1 0.29,0.43l0,9.57zm1.39,-12a0.48,0.48 0 0 1 -0.37,0l-6.39,-2.76a0.23,0.23 0 0 1 0,-0.43l6.4,-2.65a0.47,0.47 0 0 1 0.35,0l6.29,2.7a0.24,0.24 0 0 1 0,0.43l-6.28,2.71zm8.52,9.44l-6.86,2.87a0.46,0.46 0 0 1 -0.63,-0.43l0,-9.39a0.45,0.45 0 0 1 0.28,-0.42l6.75,-2.87a0.45,0.45 0 0 1 0.63,0.42l0.06,9.39a0.46,0.46 0 0 1 -0.27,0.43l0.04,0z"/>
    </mask>
  </g>
</svg>`,qrCodeIcon=html`
<svg viewBox="0 0 25 24">
<path d="M11.168 3H3.94922C3.53437 3 3.19922 3.33516 3.19922 3.75V10.9688C3.19922 11.0719 3.28359 11.1562 3.38672 11.1562H11.168C11.2711 11.1562 11.3555 11.0719 11.3555 10.9688V3.1875C11.3555 3.08437 11.2711 3 11.168 3ZM9.85547 9.65625H4.69922V4.5H9.85547V9.65625ZM6.62109 7.92188H7.93359C8.03672 7.92188 8.12109 7.8375 8.12109 7.73438V6.42188C8.12109 6.31875 8.03672 6.23438 7.93359 6.23438H6.62109C6.51797 6.23438 6.43359 6.31875 6.43359 6.42188V7.73438C6.43359 7.8375 6.51797 7.92188 6.62109 7.92188ZM11.168 12.8438H3.38672C3.28359 12.8438 3.19922 12.9281 3.19922 13.0312V20.25C3.19922 20.6648 3.53437 21 3.94922 21H11.168C11.2711 21 11.3555 20.9156 11.3555 20.8125V13.0312C11.3555 12.9281 11.2711 12.8438 11.168 12.8438ZM9.85547 19.5H4.69922V14.3438H9.85547V19.5ZM6.62109 17.7656H7.93359C8.03672 17.7656 8.12109 17.6812 8.12109 17.5781V16.2656C8.12109 16.1625 8.03672 16.0781 7.93359 16.0781H6.62109C6.51797 16.0781 6.43359 16.1625 6.43359 16.2656V17.5781C6.43359 17.6812 6.51797 17.7656 6.62109 17.7656ZM20.4492 3H13.2305C13.1273 3 13.043 3.08437 13.043 3.1875V10.9688C13.043 11.0719 13.1273 11.1562 13.2305 11.1562H21.0117C21.1148 11.1562 21.1992 11.0719 21.1992 10.9688V3.75C21.1992 3.33516 20.8641 3 20.4492 3ZM19.6992 9.65625H14.543V4.5H19.6992V9.65625ZM16.4648 7.92188H17.7773C17.8805 7.92188 17.9648 7.8375 17.9648 7.73438V6.42188C17.9648 6.31875 17.8805 6.23438 17.7773 6.23438H16.4648C16.3617 6.23438 16.2773 6.31875 16.2773 6.42188V7.73438C16.2773 7.8375 16.3617 7.92188 16.4648 7.92188ZM21.0117 12.8438H19.8867C19.7836 12.8438 19.6992 12.9281 19.6992 13.0312V16.1719H17.8711V13.0312C17.8711 12.9281 17.7867 12.8438 17.6836 12.8438H13.2305C13.1273 12.8438 13.043 12.9281 13.043 13.0312V20.8125C13.043 20.9156 13.1273 21 13.2305 21H14.3555C14.4586 21 14.543 20.9156 14.543 20.8125V15.0938H16.3711V17.4844C16.3711 17.5875 16.4555 17.6719 16.5586 17.6719H21.0117C21.1148 17.6719 21.1992 17.5875 21.1992 17.4844V13.0312C21.1992 12.9281 21.1148 12.8438 21.0117 12.8438ZM17.6836 19.5H16.5586C16.4555 19.5 16.3711 19.5844 16.3711 19.6875V20.8125C16.3711 20.9156 16.4555 21 16.5586 21H17.6836C17.7867 21 17.8711 20.9156 17.8711 20.8125V19.6875C17.8711 19.5844 17.7867 19.5 17.6836 19.5ZM21.0117 19.5H19.8867C19.7836 19.5 19.6992 19.5844 19.6992 19.6875V20.8125C19.6992 20.9156 19.7836 21 19.8867 21H21.0117C21.1148 21 21.1992 20.9156 21.1992 20.8125V19.6875C21.1992 19.5844 21.1148 19.5 21.0117 19.5Z"/>
</svg>
`,linkIcon=html`
  <svg viewBox="0 0 100 101">
    <path d="M70.8333 29.5001H54.1667V37.8334H70.8333C77.7083 37.8334 83.3333 43.4584 83.3333 50.3334C83.3333 57.2084 77.7083 62.8334 70.8333 62.8334H54.1667V71.1667H70.8333C82.3333 71.1667 91.6667 61.8334 91.6667 50.3334C91.6667 38.8334 82.3333 29.5001 70.8333 29.5001Z"/>
    <path d="M45.8333 62.8334H29.1667C22.2917 62.8334 16.6667 57.2084 16.6667 50.3334C16.6667 43.4584 22.2917 37.8334 29.1667 37.8334H45.8333V29.5001H29.1667C17.6667 29.5001 8.33334 38.8334 8.33334 50.3334C8.33334 61.8334 17.6667 71.1667 29.1667 71.1667H45.8333V62.8334Z"/>
    <path d="M33.3333 46.1667H66.6667V54.5H33.3333V46.1667Z"/>
  </svg>
`,desktopIcon=html`
<svg viewBox="0 0 80 80">
  <path d="M69.9999 6.66797H9.99992C6.33325 6.66797 3.33325 9.66797 3.33325 13.3346V53.3346C3.33325 57.0013 6.33325 60.0013 9.99992 60.0013H33.3332V66.668H26.6666V73.3346H53.3332V66.668H46.6666V60.0013H69.9999C73.6666 60.0013 76.6666 57.0013 76.6666 53.3346V13.3346C76.6666 9.66797 73.6666 6.66797 69.9999 6.66797Z" fill="#6E717C"/>
  <path d="M70 53.332H10V13.332H70V53.332Z" fill="#FAFAFA"/>
  <path d="M39.9627 38.3636L50.1072 32.5854L39.9308 26.8125L29.8022 32.5854L39.9627 38.3636Z" fill="#5BB73B"/>
  <path d="M39.931 24.7257L51.8779 31.5106V25.8321L39.8725 19L28 25.8426V31.5264L39.931 24.7257Z" fill="#6E717C"/>
  <path d="M39.9629 40.4452L28 33.6445V39.3388L40.0107 46.1709L51.8779 39.3336V33.6655L39.9629 40.4452Z" fill="#6E717C"/>
</svg>
`,experienceIcon=html`
<svg viewBox="0 0 80 80">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M53.3332 3.33203H26.6665C21.1332 3.33203 16.6665 7.7987 16.6665 13.332V66.6654C16.6665 72.1987 21.1332 76.6654 26.6665 76.6654H53.3332C58.8665 76.6654 63.3332 72.1987 63.3332 66.6654V13.332C63.3332 7.7987 58.8665 3.33203 53.3332 3.33203ZM46.6665 69.9987H33.3332V66.6654H46.6665V69.9987ZM23.3332 59.9987H56.6665V13.332H23.3332V59.9987Z" fill="#6E717C"/>
  <rect x="23" y="13" width="34" height="47" fill="#5BB73B"/>
  <path d="M47.6869 41.899L40.0011 27L32.3154 41.899L40.0011 45.1528L47.6869 41.899ZM40.0011 38.8952V43.248L34.5281 40.9433L34.5239 40.9391L40.0011 30.3373V36.9412V38.8952Z" fill="white"/>
  <path d="M28.9353 44.6469L30.0577 42.1562H27.8685L26 46.3038H31.1352L31.8813 44.6469H28.9353Z" fill="white"/>
  <path d="M51.0647 44.6469L49.9423 42.1562H52.1315L54 46.3038H48.8669L48.1187 44.6469H51.0647Z" fill="white"/>
  <path d="M32.4162 36.8149L31.8689 37.9779H29.6797L30.9731 35.1602H34.631L33.8849 36.8149H32.4162Z" fill="white"/>
  <path d="M47.8579 36.8149L48.4052 37.9779H50.5944L49.3031 35.1602H45.6431L46.3892 36.8149H47.8579Z" fill="white"/>
</svg>
`,downloadIcon=html`
  <svg viewBox="0 0 12 15">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.50001 5.5H11.8333L6.00001 11.3333L0.166672 5.5H3.50001V0.5H8.50001V5.5ZM0.166672 14.6667V13H11.8333V14.6667H0.166672Z"/>
  </svg>
`,publishIcon=html`
  <svg viewBox="0 0 18 12">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9 0C11.73 0 14.0025 1.9425 14.5125 4.53C16.4625 4.665 18 6.27 18 8.25C18 10.32 16.32 12 14.25 12H4.5C2.0175 12 0 9.9825 0 7.5C0 5.1825 1.755 3.27 4.0125 3.03C4.95 1.23 6.8325 0 9 0ZM4.875 7.125L7.5 9.75L12.4425 4.8075L11.385 3.75L7.5 7.635L5.9325 6.0675L4.875 7.125Z"/>
  </svg>
`,publishIconWithOuterGlow=html`
<svg viewBox="0 0 18 12" style="overflow: visible;">
  <defs>
    <filter id="sofGreenGlow" height="300%" width="300%" x="-75%" y="-75%">
      <!-- Thicken out the original shape -->
      <feMorphology operator="dilate" radius="1" in="SourceAlpha" result="thicken" />
      <!-- Use a gaussian blur to create the soft blurriness of the glow -->
      <feGaussianBlur in="thicken" stdDeviation="4" result="blurred" />
      <!-- Change the colour -->
      <feFlood flood-color="#5BB73B" result="glowColor" />
      <!-- Color in the glows -->
      <feComposite in="glowColor" in2="blurred" operator="in" result="softGlow_colored" />
      <!--  Layer the effects together -->
      <feMerge>
      <feMergeNode in="softGlow_colored"/>
      <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
  <path fill-rule="evenodd" clip-rule="evenodd" filter="url(#sofGreenGlow)"
    d="M9 0C11.73 0 14.0025 1.9425 14.5125 4.53C16.4625 4.665 18 6.27 18 8.25C18 10.32 16.32 12 14.25 12H4.5C2.0175 12 0 9.9825 0 7.5C0 5.1825 1.755 3.27 4.0125 3.03C4.95 1.23 6.8325 0 9 0ZM4.875 7.125L7.5 9.75L12.4425 4.8075L11.385 3.75L7.5 7.635L5.9325 6.0675L4.875 7.125Z"/>
</svg>
`,unpublishIcon=html`
  <svg viewBox="0 0 24 25">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 4.83984C15.64 4.83984 18.67 7.42984 19.35 10.8798C21.95 11.0598 24 13.1998 24 15.8398C24 18.5998 21.76 20.8398 19 20.8398H6C2.69 20.8398 0 18.1498 0 14.8398C0 11.7498 2.34 9.19984 5.35 8.87984C6.6 6.47984 9.11 4.83984 12 4.83984ZM9.41421 17.618L8 16.2038L10.4749 13.7289L8.00008 11.2541L9.4143 9.83984L11.8891 12.3147L14.364 9.83984L15.7782 11.2541L13.3033 13.7289L15.7783 16.2038L14.364 17.618L11.8891 15.1431L9.41421 17.618Z"/>
  </svg>
`,backArrowIcon=html`
  <svg viewBox="0 0 24 24">
    <path d="M21 11H6.83L10.41 7.41L9 6L3 12L9 18L10.41 16.59L6.83 13H21V11Z" />
  </svg>
`,timelineSectionIcon=html`
<svg width="16" height="18" viewBox="0 0 16 18">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M14 0V2H12V0H4V2H2V0H0V18H2V16H4V18H12V16H14V18H16V0H14ZM4 14H2V12H4V14ZM2 10H4V8H2V10ZM4 6H2V4H4V6ZM12 14H14V12H12V14ZM14 10H12V8H14V10ZM12 6H14V4H12V6Z"/>
</svg>
`,stepsSectionIcon=html`
<svg viewBox="0 0 22 14">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.9998 0.125C6.4165 0.125 2.50234 2.97583 0.916504 7C2.50234 11.0242 6.4165 13.875 10.9998 13.875C15.5832 13.875 19.4973 11.0242 21.0832 7C19.4973 2.97583 15.5832 0.125 10.9998 0.125ZM10.9998 11.5833C8.46984 11.5833 6.4165 9.53 6.4165 7C6.4165 4.47 8.46984 2.41667 10.9998 2.41667C13.5298 2.41667 15.5832 4.47 15.5832 7C15.5832 9.53 13.5298 11.5833 10.9998 11.5833ZM8.24984 7C8.24984 5.47833 9.47817 4.25 10.9998 4.25C12.5215 4.25 13.7498 5.47833 13.7498 7C13.7498 8.52167 12.5215 9.75 10.9998 9.75C9.47817 9.75 8.24984 8.52167 8.24984 7Z"/>
</svg>`,moreActionsIcon=html`
<svg viewBox="0 0 4 16">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM0 14C0 12.9 0.9 12 2 12C3.1 12 4 12.9 4 14C4 15.1 3.1 16 2 16C0.9 16 0 15.1 0 14Z"/>
</svg>`,heroIcon=html`
<svg viewBox="0 0 18 18">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M0.666504 8.99984C0.666504 4.39984 4.3915 0.666504 8.9915 0.666504C13.5998 0.666504 17.3332 4.39984 17.3332 8.99984C17.3332 13.5998 13.5998 17.3332 8.9915 17.3332C4.3915 17.3332 0.666504 13.5998 0.666504 8.99984ZM8.99984 11.8748L12.5248 13.9998L11.5915 9.98317L14.6998 7.2915L10.5998 6.9415L8.99984 3.1665L7.39984 6.94984L3.29984 7.29984L6.40817 9.9915L5.47484 13.9998L8.99984 11.8748Z"/>
</svg>
`,faceIcon=html`
<svg viewBox="0 0 20 20">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM5.75 11C5.75 10.31 6.31 9.75 7 9.75C7.69 9.75 8.25 10.31 8.25 11C8.25 11.69 7.69 12.25 7 12.25C6.31 12.25 5.75 11.69 5.75 11ZM11.75 11C11.75 10.31 12.31 9.75 13 9.75C13.69 9.75 14.25 10.31 14.25 11C14.25 11.69 13.69 12.25 13 12.25C12.31 12.25 11.75 11.69 11.75 11ZM2 10C2 14.41 5.59 18 10 18C14.41 18 18 14.41 18 10C18 9.21 17.88 8.45 17.67 7.74C16.95 7.91 16.2 8 15.42 8C12.05 8 9.07 6.33 7.26 3.77C6.28 6.16 4.41 8.09 2.05 9.14C2.02 9.42 2 9.71 2 10Z"/>
</svg>
`,buildingsIcon=html`
<svg viewBox="0 0 24 24">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 7H22V21H2V3H12V7ZM4 19H6V17H4V19ZM6 15H4V13H6V15ZM4 11H6V9H4V11ZM6 7H4V5H6V7ZM8 19H10V17H8V19ZM10 15H8V13H10V15ZM8 11H10V9H8V11ZM10 7H8V5H10V7ZM20 19V9H12V11H14V13H12V15H14V17H12V19H20ZM18 11H16V13H18V11ZM16 15H18V17H16V15Z"/>
</svg>
`,inactiveCameraIcon=html`
<svg viewBox="0 0 79 75">
  <g filter="url(#filter0_d_inactiveCamera)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M54.2979 24.2949H48.3541L44.9229 20.5449H33.6729L30.2416 24.2949H24.2979C22.2354 24.2949 20.5479 25.9824 20.5479 28.0449V50.5449C20.5479 52.6074 22.2354 54.2949 24.2979 54.2949H54.2979C56.3604 54.2949 58.0479 52.6074 58.0479 50.5449V28.0449C58.0479 25.9824 56.3604 24.2949 54.2979 24.2949ZM39.2979 44.9199C42.4045 44.9199 44.9229 42.4015 44.9229 39.2949C44.9229 36.1883 42.4045 33.6699 39.2979 33.6699C36.1912 33.6699 33.6729 36.1883 33.6729 39.2949C33.6729 42.4015 36.1912 44.9199 39.2979 44.9199ZM29.9229 39.2949C29.9229 44.4699 34.1229 48.6699 39.2979 48.6699C44.4729 48.6699 48.6729 44.4699 48.6729 39.2949C48.6729 34.1199 44.4729 29.9199 39.2979 29.9199C34.1229 29.9199 29.9229 34.1199 29.9229 39.2949Z" />
  </g>
  <defs>
    <filter id="filter0_d_inactiveCamera" x="-3.20215" y="-3.20508" width="85" height="85" filterUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix" />
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
      <feOffset />
      <feGaussianBlur stdDeviation="10" />
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
    </filter>
  </defs>
</svg>
`,activeCameraIcon=html`
<svg viewBox="0 0 24 25">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M20 4.2998H16.83L15 2.2998H9L7.17 4.2998H4C2.9 4.2998 2 5.1998 2 6.2998V18.2998C2 19.3998 2.9 20.2998 4 20.2998H20C21.1 20.2998 22 19.3998 22 18.2998V6.2998C22 5.1998 21.1 4.2998 20 4.2998ZM12 15.2998C13.6569 15.2998 15 13.9567 15 12.2998C15 10.643 13.6569 9.2998 12 9.2998C10.3431 9.2998 9 10.643 9 12.2998C9 13.9567 10.3431 15.2998 12 15.2998ZM7 12.2998C7 15.0598 9.24 17.2998 12 17.2998C14.76 17.2998 17 15.0598 17 12.2998C17 9.5398 14.76 7.2998 12 7.2998C9.24 7.2998 7 9.5398 7 12.2998Z" />
</svg>
`,closeIcon=html`
<svg viewBox="0 0 9 9">
  <path d="M8.875 1.00625L7.99375 0.125L4.5 3.61875L1.00625 0.125L0.125 1.00625L3.61875 4.5L0.125 7.99375L1.00625 8.875L4.5 5.38125L7.99375 8.875L8.875 7.99375L5.38125 4.5L8.875 1.00625Z" />
</svg>
`,closeDialogIcon=closeIcon,checkIcon=html`
<svg viewBox="0 0 12 9">
  <path d="M3.62498 7.10664L1.01873 4.50039L0.131226 5.38164L3.62498 8.87539L11.125 1.37539L10.2437 0.494141L3.62498 7.10664Z" />
</svg>
`,successIcon=checkIcon,failIcon=closeIcon,mediaFilterAllIcon=html`
<svg viewBox="0 0 12 9">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.625 3.875H0.5V0.125H3.625V3.875ZM3.625 8.25H0.5V4.5H3.625V8.25ZM4.25 8.25H7.375V4.5H4.25V8.25ZM11.125 8.25H8V4.5H11.125V8.25ZM4.25 3.875H7.375V0.125H4.25V3.875ZM8 3.875V0.125H11.125V3.875H8Z"/>
</svg>
`,mediaFilterStepIcon=html`
<svg viewBox="0 0 13 10">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.375 9.875H9.625V0.5H3.375V9.875ZM0.25 8.625H2.75V1.75H0.25V8.625ZM10.25 8.625V1.75H12.75V8.625H10.25Z"/>
</svg>
`,chevronDownIcon=html`
<svg viewBox="0 0 13 8">
  <path d="M2.20785 0.0898438L6.79785 4.66984L11.3879 0.0898438L12.7979 1.49984L6.79785 7.49984L0.797852 1.49984L2.20785 0.0898438Z"/>
</svg>
`,downMenuArrow=html`
<svg viewBox="0 0 11 6">
  <path d="M0.5 0.5L5.5 5.5L10.5 0.5H0.5Z"/>
</svg>
`,selectListSelectedIcon=html`
<svg viewBox="0 0 13 10">
<path d="M4.25345 7.60615L1.34565 4.9999L0.355469 5.88115L4.25345 9.3749L12.6212 1.8749L11.638 0.993652L4.25345 7.60615Z"/>
</svg>
`,dragDropIcon=html`
<svg width="25" height="23" viewBox="0 0 17 19">
  <circle cx="2" cy="6" r="2"/>
  <circle cx="2" cy="12" r="2"/>
  <circle cx="9" cy="6" r="2"/>
  <circle cx="9" cy="12" r="2"/>
  <circle cx="16" cy="6" r="2"/>
  <circle cx="16" cy="12" r="2"/>
</svg>
`,stepDescResizeGrabberIcon=html`
<svg height="10" width="35">
  <g>
    <path d="M5 2 l215 0" />
    <path d="M5 6 l215 0" />
  </g>
</svg>
`,addStepIcon=html`
<svg viewBox="0 0 13 13">
  <path fill-rule="evenodd" clip-rule="evenodd"
    d="M2.42676 0.585938H11.4268C12.2518 0.585938 12.9268 1.26094 12.9268 2.08594V11.0859C12.9268 11.9109 12.2518 12.5859 11.4268 12.5859H2.42676C1.60176 12.5859 0.926758 11.9109 0.926758 11.0859V2.08594C0.926758 1.26094 1.60176 0.585938 2.42676 0.585938ZM7.67676 7.33594H10.6768V5.83594H7.67676V2.83594H6.17676V5.83594H3.17676V7.33594H6.17676V10.3359H7.67676V7.33594Z"/>
</svg>
`,undoIcon=html`
<svg viewBox="0 0 15 8">
  <path d="M7.41767 1.40457C5.55348 1.40457 3.86515 2.11737 2.56374 3.27657L0.03125 0.68457V7.16457H6.36247L3.81591 4.55817C4.79373 3.72297 6.03887 3.20457 7.41767 3.20457C9.90795 3.20457 12.0254 4.86777 12.764 7.16457L14.4313 6.60297C13.4534 3.58617 10.6888 1.40457 7.41767 1.40457Z"/>
</svg>
`,redoIcon=html`
<svg viewBox="0 0 16 7" >
  <path d="M12.7916 2.9377C11.4895 1.7785 9.80037 1.0657 7.93526 1.0657C4.66254 1.0657 1.89655 3.2473 0.925293 6.2641L2.58629 6.8257C3.32529 4.5289 5.43673 2.8657 7.93526 2.8657C9.3077 2.8657 10.5605 3.3841 11.5388 4.2193L8.99098 6.8257H15.3253V0.345703L12.7916 2.9377Z"/>
</svg>
`,okIcon=html`
<svg viewBox="0 0 18 18">
  <path fill-rule="evenodd" clip-rule="evenodd"
    d="M0.666626 8.96273C0.666626 4.36273 4.39996 0.629395 8.99996 0.629395C13.6 0.629395 17.3333 4.36273 17.3333 8.96273C17.3333 13.5627 13.6 17.2961 8.99996 17.2961C4.39996 17.2961 0.666626 13.5627 0.666626 8.96273ZM3.16663 8.96273L7.33329 13.1294L14.8333 5.62939L13.6583 4.44606L7.33329 10.7711L4.34163 7.78773L3.16663 8.96273Z"/>
</svg>
`,errorIcon=html`
<svg viewBox="0 0 18 17">
  <path fill-rule="evenodd" clip-rule="evenodd"
    d="M8.99996 0.122559C4.39996 0.122559 0.666626 3.85589 0.666626 8.45589C0.666626 13.0559 4.39996 16.7892 8.99996 16.7892C13.6 16.7892 17.3333 13.0559 17.3333 8.45589C17.3333 3.85589 13.6 0.122559 8.99996 0.122559ZM8.16663 12.6226V10.9559H9.83329V12.6226H8.16663ZM8.16663 4.28922V9.28923H9.83329V4.28922H8.16663Z"/>
</svg>
`,dropMarkerElipseIcon=html`
<svg width="14" height="14" viewBox="0 0 14 14" fill="none">
  <circle cx="7" cy="7" r="5" stroke-width="4"/>
</svg>
`,expandIcon=html`
<svg viewBox="0 0 9 9">
  <g transform="translate(0 -294.62)">
    <path d="m3.5618 295.9 4.1618 4.1618v-4.1618zm-2.2854 2.2854v4.1618h4.1618z" stroke-width="1.3" />
  </g>
</svg>
`,shrinkIcon=html`
<svg viewBox="0 0 9 9">
  <g transform="translate(0 -294.62)">
    <path d="m4.8232 295.17v3.629h3.629zm-4.2754 4.2754 3.629 3.629v-3.629z" stroke-width=".4" />
  </g>
</svg>
`,menuIcon=html`
<svg viewBox="0 0 24 24">
 <path d="M 0.02542373,6.6779661 V 4.0169492 H 23.974576 v 2.6610169 z m 0,6.6525419 H 23.974576 V 10.669492 H 0.02542373 Z m 0,6.652543 H 23.974576 V 17.322034 H 0.02542373 Z"/>
</svg>
`,playIcon=html`
<svg viewBox="0 0 41 41">
  <path d="M13.4739 8.34912V31.6825L31.8072 20.0158L13.4739 8.34912Z" />
</svg>
`,pauseIcon=html`
<svg viewBox="0 0 40 40">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M16.3906 31.8589H9.89062V9.10889H16.3906V31.8589ZM22.8906 31.8589V9.10889H29.3906V31.8589H22.8906Z" />
</svg>
`,skipNextIcon=html`
<svg viewBox="0 0 41 41">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M24.3073 20.0156L10.1406 30.0156V10.0156L24.3073 20.0156ZM30.1406 30.0156H26.8073V10.0156H30.1406V30.0156Z" />
</svg>
`,skipPrevIcon=html`
<svg viewBox="0 0 41 41">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.474 10.0156H10.1406V30.0156H13.474V10.0156ZM30.1406 30.0156L15.974 20.0156L30.1406 10.0156V30.0156Z" />
</svg>
`,volumeIcon=html`
<svg viewBox="0 0 25 25">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.1406 5.30561V3.24561C18.1506 4.15561 21.1406 7.73561 21.1406 12.0156C21.1406 16.2956 18.1506 19.8756 14.1406 20.7856V18.7256C17.0306 17.8656 19.1406 15.1856 19.1406 12.0156C19.1406 8.84561 17.0306 6.16561 14.1406 5.30561ZM3.14062 9.01561V15.0156H7.14062L12.1406 20.0156V4.01561L7.14062 9.01561H3.14062ZM16.6406 12.0156C16.6406 10.2456 15.6206 8.72561 14.1406 7.98561V16.0356C15.6206 15.3056 16.6406 13.7856 16.6406 12.0156Z" />
</svg>
`,audioRemovedIcon=html`
<svg class="audio-removed" viewBox="0 0 24 24">
  <circle class="audio-removed__background" cx="12" cy="12" r="10"/>
  <path class="audio-removed__speaker" fill-rule="evenodd" clip-rule="evenodd" d="M6.1665 14.5002V9.50016H9.49984L13.6665 5.3335V18.6668L9.49984 14.5002H6.1665ZM15.3332 8.64183C16.5665 9.2585 17.4165 10.5252 17.4165 12.0002C17.4165 13.4752 16.5665 14.7418 15.3332 15.3502V8.64183Z"/>
  <path class="audio-removed__ghost-buster" fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 10.15 4.63 8.45 5.69 7.1L16.9 18.31C15.55 19.37 13.85 20 12 20ZM7.1 5.69L18.31 16.9C19.37 15.55 20 13.85 20 12C20 7.58 16.42 4 12 4C10.15 4 8.45 4.63 7.1 5.69Z"/>
</svg>
`,audioReplacedIcon=html`
<svg class="audio-replaced" viewBox="0 0 22 20">
  <path class="audio-replaced__background" d="M20.1666 9.99987L18.1332 7.6832L18.4166 4.61654L15.4083 3.9332L13.8333 1.2832L10.9999 2.49987L8.16658 1.2832L6.59158 3.9332L3.58325 4.6082L3.86659 7.67487L1.83325 9.99987L3.86659 12.3165L3.58325 15.3915L6.59158 16.0749L8.16658 18.7249L10.9999 17.4999L13.8333 18.7165L15.4083 16.0665L18.4166 15.3832L18.1332 12.3165L20.1666 9.99987Z"/>
  <path class="audio-replaced__border" d="M20.1666 9.99987L20.7303 10.4946L21.1645 9.99987L20.7303 9.50513L20.1666 9.99987ZM18.1332 7.6832L17.3864 7.6142L17.3567 7.93546L17.5696 8.17794L18.1332 7.6832ZM18.4166 4.61654L19.1634 4.68554L19.2239 4.03081L18.5827 3.88517L18.4166 4.61654ZM15.4083 3.9332L14.7635 4.31639L14.9281 4.59324L15.2421 4.66457L15.4083 3.9332ZM13.8333 1.2832L14.478 0.900018L14.1418 0.334465L13.5373 0.594054L13.8333 1.2832ZM10.9999 2.49987L10.704 3.18902L10.9999 3.31609L11.2958 3.18902L10.9999 2.49987ZM8.16658 1.2832L8.46251 0.594054L7.85799 0.334465L7.52186 0.900018L8.16658 1.2832ZM6.59158 3.9332L6.75578 4.66501L7.07117 4.59424L7.23631 4.31639L6.59158 3.9332ZM3.58325 4.6082L3.41905 3.8764L2.77578 4.02073L2.83643 4.6772L3.58325 4.6082ZM3.86659 7.67487L4.43114 8.1686L4.64301 7.92634L4.6134 7.60587L3.86659 7.67487ZM1.83325 9.99987L1.26869 9.50613L0.836121 10.0008L1.26957 10.4946L1.83325 9.99987ZM3.86659 12.3165L4.61342 12.3853L4.64301 12.0642L4.43026 11.8218L3.86659 12.3165ZM3.58325 15.3915L2.83642 15.3227L2.7761 15.9773L3.41712 16.1229L3.58325 15.3915ZM6.59158 16.0749L7.23631 15.6917L7.07177 15.4148L6.75771 15.3435L6.59158 16.0749ZM8.16658 18.7249L7.52186 19.1081L7.85883 19.675L8.46422 19.4133L8.16658 18.7249ZM10.9999 17.4999L11.2958 16.8107L10.9989 16.6832L10.7023 16.8115L10.9999 17.4999ZM13.8333 18.7165L13.5373 19.4057L14.1418 19.6653L14.478 19.0997L13.8333 18.7165ZM15.4083 16.0665L15.2421 15.3352L14.9281 15.4065L14.7635 15.6833L15.4083 16.0665ZM18.4166 15.3832L18.5827 16.1146L19.2239 15.9689L19.1634 15.3142L18.4166 15.3832ZM18.1332 12.3165L17.5696 11.8218L17.3567 12.0643L17.3864 12.3855L18.1332 12.3165ZM20.7303 9.50513L18.6969 7.18846L17.5696 8.17794L19.6029 10.4946L20.7303 9.50513ZM18.8801 7.7522L19.1634 4.68554L17.6698 4.54754L17.3864 7.6142L18.8801 7.7522ZM18.5827 3.88517L15.5744 3.20183L15.2421 4.66457L18.2505 5.34791L18.5827 3.88517ZM16.053 3.55002L14.478 0.900018L13.1885 1.66639L14.7635 4.31639L16.053 3.55002ZM13.5373 0.594054L10.704 1.81072L11.2958 3.18902L14.1292 1.97235L13.5373 0.594054ZM11.2958 1.81072L8.46251 0.594054L7.87066 1.97235L10.704 3.18902L11.2958 1.81072ZM7.52186 0.900018L5.94686 3.55002L7.23631 4.31639L8.81131 1.66639L7.52186 0.900018ZM6.42738 3.2014L3.41905 3.8764L3.74745 5.34001L6.75578 4.66501L6.42738 3.2014ZM2.83643 4.6772L3.11977 7.74387L4.6134 7.60587L4.33007 4.5392L2.83643 4.6772ZM3.30203 7.18113L1.26869 9.50613L2.39781 10.4936L4.43114 8.1686L3.30203 7.18113ZM1.26957 10.4946L3.30291 12.8113L4.43026 11.8218L2.39693 9.50513L1.26957 10.4946ZM3.11975 12.2477L2.83642 15.3227L4.33009 15.4604L4.61342 12.3853L3.11975 12.2477ZM3.41712 16.1229L6.42546 16.8062L6.75771 15.3435L3.74938 14.6602L3.41712 16.1229ZM5.94686 16.4581L7.52186 19.1081L8.81131 18.3417L7.23631 15.6917L5.94686 16.4581ZM8.46422 19.4133L11.2976 18.1883L10.7023 16.8115L7.86895 18.0365L8.46422 19.4133ZM10.704 18.189L13.5373 19.4057L14.1292 18.0274L11.2958 16.8107L10.704 18.189ZM14.478 19.0997L16.053 16.4497L14.7635 15.6833L13.1885 18.3333L14.478 19.0997ZM15.5744 16.7979L18.5827 16.1146L18.2505 14.6518L15.2421 15.3352L15.5744 16.7979ZM19.1634 15.3142L18.8801 12.2475L17.3864 12.3855L17.6698 15.4522L19.1634 15.3142ZM18.6969 12.8113L20.7303 10.4946L19.6029 9.50513L17.5696 11.8218L18.6969 12.8113Z"/>
  <path class="audio-replaced__speaker" fill-rule="evenodd" clip-rule="evenodd" d="M6 11.8069V7.64019H8.77778L12.25 4.16797V15.2791L8.77778 11.8069H6ZM13.639 6.92467C14.6668 7.43855 15.3752 8.49411 15.3752 9.72328C15.3752 10.9524 14.6668 12.008 13.639 12.5149V6.92467Z"/>
</svg>
`,audioRecord=html`
<svg viewBox="0 0 24 24">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.99 12C14.99 13.66 13.66 15 12 15C10.34 15 9 13.66 9 12V6C9 4.34 10.34 3 12 3C13.66 3 15 4.34 15 6L14.99 12ZM12 17.1C14.76 17.1 17.3 15 17.3 12H19C19 15.42 16.28 18.24 13 18.72V22H11V18.72C7.72 18.23 5 15.42 5 12H6.7C6.7 15 9.24 17.1 12 17.1Z"/>
</svg>
`,audioRecordButtons={/* a microphone */start:html`
    <svg class="audio-record-button start" viewBox="0 0 98 98">
      <g filter="url(#filter0_d)">
        <circle class="audio-record-button__background" cx="49" cy="45" r="43"/>
      </g>
      <path class="audio-record-button__foreground" fill-rule="evenodd" clip-rule="evenodd" d="M55.625 43.125C55.625 47.0675 52.4425 50.25 48.5 50.25C44.5575 50.25 41.375 47.0675 41.375 43.125V28.875C41.375 24.9325 44.5575 21.75 48.5 21.75C52.4425 21.75 55.625 24.9325 55.625 28.875V43.125ZM48.5 55C55.055 55 60.375 49.68 60.375 43.125H65.125C65.125 51.5087 58.9263 58.3963 50.875 59.56V66.875H46.125V59.56C38.0737 58.3963 31.875 51.5087 31.875 43.125H36.625C36.625 49.68 41.945 55 48.5 55Z"/>
      <defs>
        <filter id="filter0_d" x="0" y="0" width="98" height="98" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="3"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
        </filter>
      </defs>
    </svg>
  `,countdown3:html`
    <svg class="audio-record-button countdown3" viewBox="0 0 98 98">
      <g filter="url(#filter0_d)">
        <circle class="audio-record-button__background" cx="49" cy="45" r="43"/>
      </g>
      <circle class="audio-record-button__foreground" cx="31.5" cy="45.5" r="6.5"/>
      <circle class="audio-record-button__foreground" cx="65.5" cy="45.5" r="6.5"/>
      <circle class="audio-record-button__foreground" cx="48.5" cy="45.5" r="6.5"/>
      <defs>
        <filter id="filter0_d" x="0" y="0" width="98" height="98" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="3"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
        </filter>
      </defs>
    </svg>
  `,countdown2:html`
    <svg class="audio-record-button countdown2" viewBox="0 0 98 98">
      <g filter="url(#filter0_d)">
        <circle class="audio-record-button__background" cx="49" cy="45" r="43"/>
      </g>
      <g filter="url(#filter1_i)">
        <circle class="audio-record-button__foreground -dark" cx="31.5" cy="45.5" r="6.5"/>
      </g>
      <circle class="audio-record-button__foreground" cx="65.5" cy="45.5" r="6.5"/>
      <circle class="audio-record-button__foreground" cx="48.5" cy="45.5" r="6.5"/>
      <defs>
        <filter id="filter0_d" x="0" y="0" width="98" height="98" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="3"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
        </filter>
        <filter id="filter1_i" x="25" y="39" width="13" height="17" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="3"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
        </filter>
      </defs>
    </svg>
  `,countdown1:html`
    <svg class="audio-record-button countdown1" viewBox="0 0 98 98">
      <g filter="url(#filter0_d)">
        <circle class="audio-record-button__background" cx="49" cy="45" r="43"/>
      </g>
      <g filter="url(#filter1_i)">
        <circle class="audio-record-button__foreground -dark" cx="48.5" cy="45.5" r="6.5"/>
      </g>
      <g filter="url(#filter2_i)">
        <circle class="audio-record-button__foreground -dark" cx="48.5" cy="45.5" r="6.5"/>
      </g>
      <g filter="url(#filter3_i)">
        <circle class="audio-record-button__foreground -dark" cx="30.5" cy="45.5" r="6.5"/>
      </g>
      <circle class="audio-record-button__foreground" cx="65.5" cy="45.5" r="6.5"/>
      <defs>
        <filter id="filter0_d" x="0" y="0" width="98" height="98" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="3"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
        </filter>
        <filter id="filter1_i" x="42" y="39" width="13" height="17" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="3"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
        </filter>
        <filter id="filter2_i" x="42" y="39" width="13" height="17" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="3"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
        </filter>
        <filter id="filter3_i" x="24" y="39" width="13" height="17" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="3"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
        </filter>
      </defs>
    </svg>
  `,error:html`
    <svg class="audio-record-button error" width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d)">
        <circle cx="33" cy="31" r="30"/>
      </g>
      <path class="audio-record-button__foreground" d="M45.0418 21.4843L42.5156 18.958L32.5002 28.9734L22.4847 18.958L19.9585 21.4843L29.9739 31.4997L19.9585 41.5151L22.4847 44.0413L32.5002 34.0259L42.5156 44.0413L45.0418 41.5151L35.0264 31.4997L45.0418 21.4843Z"/>
      <defs>
        <filter id="filter0_d" x="0" y="0" width="66" height="66" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
          <feOffset dy="2"/>
          <feGaussianBlur stdDeviation="1.5"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
        </filter>
      </defs>
    </svg>
  `,stop:html`
    <div class="audio-record-button--stop--animation-mask"></div>
    <svg class="audio-record-button stop" viewBox="17 17 98 98">
      <g filter="url(#filter2_d)">
        <circle class="audio-record-button__background" cx="66" cy="63" r="43"/>
      </g>
      <path class="audio-record-button__foreground" d="M50 50C50 48.3431 51.3431 47 53 47H79C80.6569 47 82 48.3431 82 50V76C82 77.6569 80.6569 79 79 79H53C51.3431 79 50 77.6569 50 76V50Z"/>
      <defs>
        <filter id="filter2_d" x="17" y="18" width="98" height="98" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="3"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
        </filter>
      </defs>
    </svg>
  `},exportFormatIcon=html`
<svg viewBox="0 0 48 60" >
  <path fill-rule="evenodd" clip-rule="evenodd" d="M0.03 6C0.03 2.7 2.7 0 6 0H30L48 18V54C48 57.3 45.3 60 42 60H5.97C2.67 60 0 57.3 0 54L0.03 6ZM27 4.5V21H43.5L27 4.5Z"/>
</svg>`,mediaTypeToIcon={};//Spinning circle with small section cut out (generic processing indicator)
mediaTypeToIcon[ASSET_TYPE.IMAGE]=imageIcon;mediaTypeToIcon[ASSET_TYPE.VIDEO]=videoIcon;mediaTypeToIcon[ASSET_TYPE.CAPTURE]=captureIcon;mediaTypeToIcon[ASSET_TYPE.MODEL]=modelIcon;const alertWarningIcon=html`
<svg viewBox="0 0 38 32">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M37.3333 32L19 0.333374L0.666626 32H37.3333ZM20.6666 27H17.3333V23.6667H20.6666V27ZM17.3333 20.3334H20.6666V13.6667H17.3333V20.3334Z"/>
</svg>
`,alertInfoIcon=html`
<svg viewBox="0 0 40 40">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M20 3.33337C10.8 3.33337 3.33334 10.8 3.33334 20C3.33334 29.2 10.8 36.6667 20 36.6667C29.2 36.6667 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33337 20 3.33337ZM18.3333 28.3334V18.3334H21.6667V28.3334H18.3333ZM18.3333 11.6667V15H21.6667V11.6667H18.3333Z" fill="#3E92D5"/>
</svg>
`,alertHelpIcon=html`
<svg viewBox="0 0 34 34">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M17.0002 0.333008C7.80016 0.333008 0.333496 7.79967 0.333496 16.9997C0.333496 26.1997 7.80016 33.6663 17.0002 33.6663C26.2002 33.6663 33.6668 26.1997 33.6668 16.9997C33.6668 7.79967 26.2002 0.333008 17.0002 0.333008ZM15.3335 28.6663V25.333H18.6668V28.6663H15.3335ZM20.6168 17.283L22.1168 15.7497C23.0668 14.7997 23.6668 13.4663 23.6668 11.9997C23.6668 8.31634 20.6835 5.33301 17.0002 5.33301C13.3168 5.33301 10.3335 8.31634 10.3335 11.9997H13.6668C13.6668 10.1663 15.1668 8.66634 17.0002 8.66634C18.8335 8.66634 20.3335 10.1663 20.3335 11.9997C20.3335 12.9163 19.9668 13.7497 19.3502 14.3497L17.2835 16.4497C16.0835 17.6663 15.3335 19.333 15.3335 21.1663V21.9997H18.6668C18.6668 19.4997 19.4168 18.4997 20.6168 17.283Z" fill="#3E92D5" />
</svg>
`,padlockCloudImage=html`
<svg viewBox="0 30 200 160">
  <path class="access-denied--cloud" d="M161.25 83.6654C155.583 54.9154 130.333 33.332 100 33.332C75.9167 33.332 55 46.9987 44.5833 66.9987C19.5 69.6654 0 90.9154 0 116.665C0 144.249 22.4167 166.665 50 166.665H158.333C181.333 166.665 200 147.999 200 124.999C200 102.999 182.917 85.1654 161.25 83.6654Z"/>
  <path class="access-denied--padlock" d="M116.667 89.6654H120C123.667 89.6654 126.667 92.6654 126.667 96.332V129.665C126.667 133.332 123.667 136.332 120 136.332H80.0002C76.3335 136.332 73.3335 133.332 73.3335 129.665V96.332C73.3335 92.6654 76.3335 89.6654 80.0002 89.6654H83.3335V82.9987C83.3335 73.7987 90.8002 66.332 100 66.332C109.2 66.332 116.667 73.7987 116.667 82.9987V89.6654ZM90 82.999V89.6657H110V82.999C110 77.4657 105.533 72.999 100 72.999C94.4667 72.999 90 77.4657 90 82.999Z"/>
</svg>
`,lockIcon=html`
<svg viewBox="0 0 24 24">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M17 8H18C19.1 8 20 8.9 20 10V20C20 21.1 19.1 22 18 22H6C4.9 22 4 21.1 4 20V10C4 8.9 4.9 8 6 8H7V6C7 3.24 9.24 1 12 1C14.76 1 17 3.24 17 6V8ZM9 6V8H15V6C15 4.34 13.66 3 12 3C10.34 3 9 4.34 9 6Z"/>
</svg>
`,gearIcon=html`
<svg viewBox="0 0 24 24">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M19.5 12C19.5 12.34 19.47 12.66 19.43 12.98L21.54 14.63C21.73 14.78 21.78 15.05 21.66 15.27L19.66 18.73C19.54 18.95 19.28 19.04 19.05 18.95L16.56 17.95C16.04 18.34 15.48 18.68 14.87 18.93L14.49 21.58C14.46 21.82 14.25 22 14 22H10C9.75001 22 9.54001 21.82 9.51001 21.58L9.13001 18.93C8.52001 18.68 7.96001 18.35 7.44001 17.95L4.95001 18.95C4.73001 19.03 4.46001 18.95 4.34001 18.73L2.34001 15.27C2.22001 15.05 2.27001 14.78 2.46001 14.63L4.57001 12.98C4.53001 12.66 4.50001 12.33 4.50001 12C4.50001 11.67 4.53001 11.34 4.57001 11.02L2.46001 9.37C2.27001 9.22 2.21001 8.95 2.34001 8.73L4.34001 5.27C4.46001 5.05 4.72001 4.96 4.95001 5.05L7.44001 6.05C7.96001 5.66 8.52001 5.32 9.13001 5.07L9.51001 2.42C9.54001 2.18 9.75001 2 10 2H14C14.25 2 14.46 2.18 14.49 2.42L14.87 5.07C15.48 5.32 16.04 5.65 16.56 6.05L19.05 5.05C19.27 4.97 19.54 5.05 19.66 5.27L21.66 8.73C21.78 8.95 21.73 9.22 21.54 9.37L19.43 11.02C19.47 11.34 19.5 11.66 19.5 12ZM8.50001 12C8.50001 13.93 10.07 15.5 12 15.5C13.93 15.5 15.5 13.93 15.5 12C15.5 10.07 13.93 8.5 12 8.5C10.07 8.5 8.50001 10.07 8.50001 12Z" fill="white"/>
</svg>
`,infoIcon=html`
<svg viewBox="0 0 14 14">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M6.99967 0.333374C3.31967 0.333374 0.333008 3.32004 0.333008 7.00004C0.333008 10.68 3.31967 13.6667 6.99967 13.6667C10.6797 13.6667 13.6663 10.68 13.6663 7.00004C13.6663 3.32004 10.6797 0.333374 6.99967 0.333374ZM6.33301 10.3334V6.33337H7.66634V10.3334H6.33301ZM6.33301 3.66671V5.00004H7.66634V3.66671H6.33301Z"/>
</svg>
`,outlineInfoIcon=html`
<svg viewBox="0 0 18 18">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 9C1.5 4.86 4.86 1.5 9 1.5C13.14 1.5 16.5 4.86 16.5 9C16.5 13.14 13.14 16.5 9 16.5C4.86 16.5 1.5 13.14 1.5 9ZM9.75 8.25V12.75H8.25V8.25H9.75ZM9 15C5.6925 15 3 12.3075 3 9C3 5.6925 5.6925 3 9 3C12.3075 3 15 5.6925 15 9C15 12.3075 12.3075 15 9 15ZM9.75 5.25V6.75H8.25V5.25H9.75Z"/>
</svg>
`,radioSelectedIcon=html`
<svg viewBox="0 0 24 24">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z" fill="#C1F4AB"/>
</svg>
`,radioUnselectedIcon=html`
<svg viewBox="0 0 24 24">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12ZM4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12Z" fill="#9EA2A8"/>
</svg>
`,clockIcon=html`
<svg viewBox="0 0 24 24">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM11 7H12.5V12.25L17 14.92L16.25 16.15L11 13V7Z" fill="#ADB5BD"/>
</svg>
`,popupArrow=html`
<svg viewBox="0 0 26 17">
  <path d="M13.0001 0L26.0001 17H0.0001297L13.0001 0Z" fill="#262B2D"/>
</svg>
`,assemblyIcon=html`
<svg class="svg-icon-assembly" viewBox="0 0 20 20"><g fill="none" fill-rule="evenodd"><path d="M14.672 2.44l3.039 3v12H5.556l-3.037-3v-12h12.153m.63-1.5H1v14.121l3.928 3.879H19.23V4.819L15.301.94" fill="#333"></path><path fill="#FFF" d="M17.71 17.44H5.557l.001-4.012 8.103.012-.015-8h4.066v12M17.71 5.44l-3.143-3.126h-3.96l3.038 3.126h4.066"></path><path fill="#999" d="M13.696 5.44l-3.142-3.126H2.519L5.557 5.44h8.14"></path><path fill="#FFF" d="M5.556 17.44l-3.037-3v-4.138l3.038 3.126v4.012"></path><path fill="#999" d="M5.557 5.566h8.103v7.736H5.557zM5.556 13.302l-3.037-3V2.44l3.038 3.126v7.736"></path><path d="M10.423 2.487l3.038 3.126c.097.1.257.103.358.007a.247.247 0 0 0 .008-.353l-3.039-3.126a.255.255 0 0 0-.357-.008.249.249 0 0 0-.008.354M2.337 10.488l3.038 3.114a.255.255 0 0 0 .358.006.247.247 0 0 0 .007-.353L2.7 10.141a.256.256 0 0 0-.358-.006.247.247 0 0 0-.006.353" fill="#333"></path><path d="M17.71 5.19h-4.066l-.179.074-.074.177.016 8a.25.25 0 0 0 .253.249c.14 0 .253-.112.253-.25l-.015-7.75h3.813c.14 0 .253-.112.253-.25a.252.252 0 0 0-.253-.25" fill="#333"></path><path d="M13.66 13.19l-8.103-.012-.179.073-.074.177v4.012a.253.253 0 0 0 .507 0v-3.761l7.848.011c.14 0 .253-.111.254-.249a.253.253 0 0 0-.253-.251M2.34 2.617l3.038 3c.1.098.26.098.359 0a.25.25 0 0 0 0-.354l-3.039-3a.257.257 0 0 0-.358 0 .25.25 0 0 0 0 .354" fill="#333"></path><path d="M5.557 5.69h8.088a.25.25 0 1 0-.001-.5H5.557a.252.252 0 0 0-.253.25c0 .138.114.25.253.25" fill="#333"></path><path d="M5.304 5.44v8a.25.25 0 1 0 .5 0v-8a.25.25 0 1 0-.5 0" fill="#333"></path></g></svg>
`,partIcon=html`
<svg class="svg-icon-part" viewBox="0 0 20 20"><g fill="none" fill-rule="evenodd"><path fill="#FFF" d="M5.241 18.19l-3.482-3.44V9.565h8.08l.015-7.875h5.13l3.484 3.44v13.06H5.241"></path><path d="M14.672 2.5l3.039 3v12H5.556l-3.037-3v-4.125h8.08l.014-7.875h4.06M15.3 1H9.097l-.015 7.875H1v6.246L4.928 19H19.23V4.879L15.301 1" fill="#333"></path><path d="M10.422 2.487l3.038 3.126c.097.1.257.103.357.007a.247.247 0 0 0 .008-.353l-3.038-3.126a.255.255 0 0 0-.357-.008.248.248 0 0 0-.008.354M2.337 10.488l3.038 3.114a.255.255 0 0 0 .357.006.247.247 0 0 0 .007-.353l-3.038-3.114a.255.255 0 0 0-.357-.006.247.247 0 0 0-.007.353" fill="#333"></path><path d="M17.709 5.19h-4.067l-.178.074-.074.177.015 8a.25.25 0 0 0 .253.249c.14 0 .253-.112.253-.25l-.015-7.75h3.813c.14 0 .253-.112.253-.25a.252.252 0 0 0-.253-.25" fill="#333"></path><path d="M13.658 13.19l-8.101-.012-.18.073-.073.177-.001 4.012c0 .138.113.25.253.25s.253-.112.254-.25v-3.761l7.847.011c.14 0 .253-.111.254-.249a.253.253 0 0 0-.253-.251" fill="#333"></path><path d="M10.1 10.114l3.376 3.456a.255.255 0 0 0 .357.006.247.247 0 0 0 .008-.353l-3.377-3.456a.254.254 0 0 0-.357-.007.249.249 0 0 0-.006.354" fill="#333"></path></g></svg>
`,treeExpandCollapseIcon=html`
<svg class="svg-icon-collapsed" viewBox="0 0 6 10"><path d="M1.793.273C2.144.624 5.577 4.32 5.577 4.32a.962.962 0 0 1 0 1.359S2.145 9.376 1.793 9.727a.983.983 0 0 1-1.358 0c-.375-.376-.404-.899 0-1.359L3.584 5 .436 1.632C.032 1.172.061.648.436.273a.98.98 0 0 1 1.357 0z" fill-rule="evenodd"></path></svg>`,navArrow=html`
<svg viewBox="0 0 24 24">
  <path d="M10 17L15 12L10 7V17Z"/>
</svg>
`,openInNewTabIcon=html`
<svg viewBox="0 0 20 20">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M5.91667 5.91667V14.0833H14.0833V10H15.25V14.0833C15.25 14.725 14.725 15.25 14.0833 15.25H5.91667C5.26917 15.25 4.75 14.725 4.75 14.0833V5.91667C4.75 5.275 5.26917 4.75 5.91667 4.75H10V5.91667H5.91667ZM11.1667 5.91667V4.75H15.25V8.83333H14.0833V6.73917L8.34917 12.4733L7.52667 11.6508L13.2608 5.91667H11.1667Z"/>
</svg>
`,expandIcon2=html`
<svg viewBox="0 0 20 20">
  <path d="M8 6H14V12L8 6Z"/>
  <path d="M12 14H6V8L12 14Z"/>
</svg>
`,shrinkIcon2=html`
<svg viewBox="0 0 20 20">
  <path d="M16 9.53857H10.4615V4.00011L16 9.53857Z"/>
  <path d="M4 10.4614H9.53846V15.9999L4 10.4614Z"/>
</svg>
`,closeIcon2=html`
<svg viewBox="0 0 24 24">
  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z"/>
  <path d="M17 8.00714L15.9929 7L12 10.9929L8.00714 7L7 8.00714L10.9929 12L7 15.9929L8.00714 17L12 13.0071L15.9929 17L17 15.9929L13.0071 12L17 8.00714Z" fill="white"/>
</svg>
`,locationIcon=html`
<svg viewBox="0 0 24 24">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M5 9C5 5.13 8.13 2 12 2C15.87 2 19 5.13 19 9C19 14.25 12 22 12 22C12 22 5 14.25 5 9ZM9.5 9C9.5 10.38 10.62 11.5 12 11.5C13.38 11.5 14.5 10.38 14.5 9C14.5 7.62 13.38 6.5 12 6.5C10.62 6.5 9.5 7.62 9.5 9Z"/>
</svg>
`,procedurePreviewDialogIcon=html`
<svg viewBox="0 0 18 14">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 0.25H15.75C16.5 0.25 17.25 1 17.25 1.75V12.25C17.25 13 16.5 13.75 15.75 13.75H2.25C1.425 13.75 0.75 13.075 0.75 12.25V1.75C0.75 1 1.5 0.25 2.25 0.25ZM9 5.2V8.8C9 9.46 9.54 9.99999 10.2 9.99999H13.8C14.46 9.99999 15 9.46 15 8.8V5.2C15 4.53999 14.46 3.99999 13.8 3.99999H10.2C9.54 3.99999 9 4.53999 9 5.2ZM3 3.99999H7.5V5.5H3V3.99999ZM3 7.75H7.5V6.25H3V7.75ZM3 10H7.5V8.49999H3V10Z"/>
</svg>
`,arrowForwardIcon=html`
<svg viewBox="0 0 30 30">
  <path fill-rule="evenodd" d="M15 1L12.5325 3.4675L22.2975 13.25H1V16.75H22.2975L12.5325 26.5325L15 29L29 15L15 1Z" stroke="white"/>
</svg>
`,clipperDragHandle=html`
<svg viewBox="0 0 4 19">
  <rect width="1" height="19"/>
  <rect x="3" width="1" height="19"/>
</svg>
`,helpIcon=html`
<svg viewBox="0 0 18 18">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 9C1.5 4.86 4.86 1.5 9 1.5C13.14 1.5 16.5 4.86 16.5 9C16.5 13.14 13.14 16.5 9 16.5C4.86 16.5 1.5 13.14 1.5 9ZM9.75 12V13.5H8.25V12H9.75ZM9 15C5.6925 15 3 12.3075 3 9C3 5.6925 5.6925 3 9 3C12.3075 3 15 5.6925 15 9C15 12.3075 12.3075 15 9 15ZM6 7.5C6 5.8425 7.3425 4.5 9 4.5C10.6575 4.5 12 5.8425 12 7.5C12 8.46219 11.4075 8.97999 10.8306 9.48415C10.2833 9.96245 9.75 10.4285 9.75 11.25H8.25C8.25 9.88404 8.95659 9.34244 9.57783 8.86626C10.0652 8.49271 10.5 8.15941 10.5 7.5C10.5 6.675 9.825 6 9 6C8.175 6 7.5 6.675 7.5 7.5H6Z"/>
</svg>
`,noPermissionStatus=html`
<svg viewBox="0 0 16 16">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 8C0.5 3.86 3.86 0.5 8 0.5C12.14 0.5 15.5 3.86 15.5 8C15.5 12.14 12.14 15.5 8 15.5C3.86 15.5 0.5 12.14 0.5 8ZM4.25 8.75H11.75V7.25H4.25V8.75Z"/>
</svg>
`,worldIcon=html`
<svg viewBox="0 0 18 18">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M9 1.5C4.86 1.5 1.5 4.86 1.5 9C1.5 13.14 4.86 16.5 9 16.5C13.14 16.5 16.5 13.14 16.5 9C16.5 4.86 13.14 1.5 9 1.5ZM8.25 14.9475C5.2875 14.58 3 12.06 3 9C3 8.535 3.06 8.0925 3.1575 7.6575L6.75 11.25V12C6.75 12.825 7.425 13.5 8.25 13.5V14.9475ZM12 12C12.675 12 13.23 12.435 13.425 13.0425C14.4 11.9775 15 10.56 15 9C15 6.4875 13.4475 4.335 11.25 3.4425V3.75C11.25 4.575 10.575 5.25 9.75 5.25H8.25V6.75C8.25 7.1625 7.9125 7.5 7.5 7.5H6V9H10.5C10.9125 9 11.25 9.3375 11.25 9.75V12H12Z"/>
</svg>
`,usersIcon=html`
<svg viewBox="0 0 16 16">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0.5C3.86 0.5 0.5 3.86 0.5 8C0.5 12.14 3.86 15.5 8 15.5C12.14 15.5 15.5 12.14 15.5 8C15.5 3.86 12.14 0.5 8 0.5ZM10.7075 5.255C11.51 5.255 12.155 5.9 12.155 6.7025C12.155 7.505 11.51 8.15 10.7075 8.15C9.905 8.15 9.26 7.505 9.26 6.7025C9.2525 5.9 9.905 5.255 10.7075 5.255ZM7.9775 5.84C7.9775 4.865 7.1825 4.07 6.2075 4.07C5.225 4.07 4.4375 4.8575 4.4375 5.84C4.4375 6.815 5.2325 7.61 6.2075 7.61C7.1825 7.61 7.9775 6.815 7.9775 5.84ZM6.2075 10.9175V13.73C4.4075 13.1675 2.9825 11.78 2.3525 10.01C3.14 9.17 5.105 8.7425 6.2075 8.7425C6.605 8.7425 7.1075 8.8025 7.6325 8.9075C6.4025 9.56 6.2075 10.4225 6.2075 10.9175ZM7.4075 13.97C7.6025 13.9925 7.7975 14 8 14C10.5425 14 12.71 12.41 13.5875 10.1825C12.8975 9.6125 11.51 9.32 10.7075 9.32C9.6125 9.32 7.4075 9.8525 7.4075 10.9175V13.97Z"/>
</svg>
`,keyboardLeftArrow="<svg class=\"keyboard-icon\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M7.99 11H20V13H7.99V16L4 12L7.99 8V11Z\" /></svg>",keyboardRightArrow="<svg class=\"keyboard-icon\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M16.01 11H4V13H16.01V16L20 12L16.01 8V11Z\"/></svg>",keyboard={/* not html templates since they're passed in as string substitutions in localized message */leftArrow:keyboardLeftArrow,rightArrow:keyboardRightArrow,leftAndRightArrows:"<span class=\"keyboard-icon-group\">"+keyboardLeftArrow+"&nbsp;"+keyboardRightArrow+"</span>"},sharePermission=html`
<svg viewBox="0 0 24 24">
  <path d="M18 16.08C17.24 16.08 16.56 16.38 16.04 16.85L8.91 12.7C8.96 12.47 9 12.24 9 12C9 11.76 8.96 11.53 8.91 11.3L15.96 7.19C16.5 7.69 17.21 8 18 8C19.66 8 21 6.66 21 5C21 3.34 19.66 2 18 2C16.34 2 15 3.34 15 5C15 5.24 15.04 5.47 15.09 5.7L8.04 9.81C7.5 9.31 6.79 9 6 9C4.34 9 3 10.34 3 12C3 13.66 4.34 15 6 15C6.79 15 7.5 14.69 8.04 14.19L15.16 18.35C15.11 18.56 15.08 18.78 15.08 19C15.08 20.61 16.39 21.92 18 21.92C19.61 21.92 20.92 20.61 20.92 19C20.92 17.39 19.61 16.08 18 16.08Z"/>
</svg>
`,notFoundImage=html`
<svg viewBox="0 30 200 160">
  <g>
    <path class="not-found--cloud" d="M161.25 83.6654C155.583 54.9154 130.333 33.332 100 33.332C75.9167 33.332 55 46.9987 44.5833 66.9987C19.5 69.6654 0 90.9154 0 116.665C0 144.249 22.4167 166.665 50 166.665H158.333C181.333 166.665 200 147.999 200 124.999C200 102.999 182.917 85.1654 161.25 83.6654Z"/>
    <circle class="not-found--glass-lens" cx="94.3198" cy="108.938" r="34"/>
    <path class="not-found--glass" d="M130.386 138.271H135.653L168.92 171.604L158.986 181.538L125.653 148.271V143.004L123.853 141.138C116.253 147.671 106.386 151.604 95.6532 151.604C71.7198 151.604 52.3198 132.204 52.3198 108.271C52.3198 84.3375 71.7198 64.9375 95.6532 64.9375C119.586 64.9375 138.986 84.3375 138.986 108.271C138.986 119.004 135.053 128.871 128.52 136.471L130.386 138.271ZM65.6532 108.271C65.6532 124.871 79.0532 138.271 95.6532 138.271C112.253 138.271 125.653 124.871 125.653 108.271C125.653 91.6708 112.253 78.2708 95.6532 78.2708C79.0532 78.2708 65.6532 91.6708 65.6532 108.271Z"/>
    <path class="not-found--x" d="M103.856 120.259L103.856 120.259C104.329 120.73 104.948 120.968 105.568 120.968C106.186 120.968 106.807 120.731 107.279 120.259C108.225 119.313 108.225 117.781 107.279 116.836L98.933 108.489L107.279 100.144C107.279 100.144 107.279 100.144 107.279 100.144C108.225 99.1984 108.225 97.6654 107.279 96.7203C106.333 95.7744 104.801 95.7749 103.856 96.7205L95.5098 105.066L87.1636 96.7209C86.2191 95.7744 84.6851 95.7746 83.7401 96.7204L103.856 120.259ZM103.856 120.259L95.5098 111.913L87.1442 120.278C87.1442 120.278 87.1441 120.278 87.1441 120.278C86.6715 120.752 86.0505 120.988 85.4326 120.988C84.8141 120.988 84.1932 120.752 83.7205 120.279C82.7746 119.333 82.775 117.801 83.7206 116.856L92.0867 108.49L83.7401 100.144C82.795 99.1985 82.7949 97.6658 83.7398 96.7207L103.856 120.259Z"/>
  </g>
</svg>
`;var images={getFileTypeIcon:getFileTypeIcon,vuforiaLogo:vuforiaLogo,spinnerCircle:spinnerCircle,createIcon:createIcon,proceduresRecentIcon:proceduresRecentIcon,proceduresCreatedByMeIcon:proceduresCreatedByMeIcon,proceduresSharedWithMeIcon:proceduresSharedWithMeIcon,helpCenterIcon:helpCenterIcon,expandCollapseIcon:expandCollapseIcon,muteIcon:muteIcon,unmuteIcon:unmuteIcon,editIcon:editIcon,deleteIcon:deleteIcon,exportIcon:exportIcon,exportingIcon:exportingIcon,searchIcon:searchIcon,listViewIcon:listViewIcon,tileViewIcon:tileViewIcon,uploadIcon:uploadIcon,importMenuIcon:importMenuIcon,uploadIconWithOuterGlow:uploadIconWithOuterGlow,zipIcon:zipIcon,bookmarkIcon:bookmarkIcon,imageIcon:imageIcon,captureIcon:captureIcon,missionPointIcon:missionPointIcon,cameraSnapshotIcon:cameraSnapshotIcon,scissorIcon:scissorIcon,trimThumb:trimThumb,videoIcon:videoIcon,assetGroupIcon:assetGroupIcon,modelIcon:modelIcon,qrCodeIcon:qrCodeIcon,linkIcon:linkIcon,desktopIcon:desktopIcon,experienceIcon:experienceIcon,downloadIcon:downloadIcon,publishIcon:publishIcon,publishIconWithOuterGlow:publishIconWithOuterGlow,unpublishIcon:unpublishIcon,backArrowIcon:backArrowIcon,timelineSectionIcon:timelineSectionIcon,stepsSectionIcon:stepsSectionIcon,moreActionsIcon:moreActionsIcon,heroIcon:heroIcon,faceIcon:faceIcon,buildingsIcon:buildingsIcon,inactiveCameraIcon:inactiveCameraIcon,activeCameraIcon:activeCameraIcon,closeIcon:closeIcon,closeDialogIcon:closeDialogIcon,checkIcon:checkIcon,successIcon:successIcon,failIcon:failIcon,mediaFilterAllIcon:mediaFilterAllIcon,mediaFilterStepIcon:mediaFilterStepIcon,chevronDownIcon:chevronDownIcon,downMenuArrow:downMenuArrow,selectListSelectedIcon:selectListSelectedIcon,dragDropIcon:dragDropIcon,stepDescResizeGrabberIcon:stepDescResizeGrabberIcon,addStepIcon:addStepIcon,undoIcon:undoIcon,redoIcon:redoIcon,okIcon:okIcon,errorIcon:errorIcon,dropMarkerElipseIcon:dropMarkerElipseIcon,expandIcon:expandIcon,shrinkIcon:shrinkIcon,menuIcon:menuIcon,playIcon:playIcon,pauseIcon:pauseIcon,skipNextIcon:skipNextIcon,skipPrevIcon:skipPrevIcon,volumeIcon:volumeIcon,audioRemovedIcon:audioRemovedIcon,audioReplacedIcon:audioReplacedIcon,audioRecord:audioRecord,audioRecordButtons:audioRecordButtons,exportFormatIcon:exportFormatIcon,mediaTypeToIcon:mediaTypeToIcon,alertWarningIcon:alertWarningIcon,alertInfoIcon:alertInfoIcon,alertHelpIcon:alertHelpIcon,padlockCloudImage:padlockCloudImage,lockIcon:lockIcon,gearIcon:gearIcon,infoIcon:infoIcon,outlineInfoIcon:outlineInfoIcon,radioSelectedIcon:radioSelectedIcon,radioUnselectedIcon:radioUnselectedIcon,clockIcon:clockIcon,popupArrow:popupArrow,assemblyIcon:assemblyIcon,partIcon:partIcon,treeExpandCollapseIcon:treeExpandCollapseIcon,navArrow:navArrow,openInNewTabIcon:openInNewTabIcon,expandIcon2:expandIcon2,shrinkIcon2:shrinkIcon2,closeIcon2:closeIcon2,locationIcon:locationIcon,procedurePreviewDialogIcon:procedurePreviewDialogIcon,arrowForwardIcon:arrowForwardIcon,clipperDragHandle:clipperDragHandle,helpIcon:helpIcon,noPermissionStatus:noPermissionStatus,worldIcon:worldIcon,usersIcon:usersIcon,keyboard:keyboard,sharePermission:sharePermission,notFoundImage:notFoundImage};const scrollbar=html`
::-webkit-scrollbar {
  border-radius: 10px;
  width: 9px;
  height: 9px;
  background-color: var(--ptc-scroll-tray);
}

::-webkit-scrollbar-thumb  {
  border-radius: 10px;
  background-color: var(--ptc-scroll-thumb);
}`;var styles={scrollbar:scrollbar};/* begin copyright text
    *
    * Copyright © 2016 PTC Inc., Its Subsidiary Companies, and /or its Partners. All Rights Reserved.
    *
    * end copyright text
    */ /**
        * Gets a new step ID
        */function newStepId(){return"step-"+sxsl.uuid()}/**
   * Gets a new generic uuid
   */function uuid(){return sxsl.uuid()}/**
   * Check whether the given objects are same
   *
   * @param {object} a may be undefined or uninitialized
   * @param {object} b may be undefined or uninitialized
   * @return true if given objects are same or ids of given objects match,
   *         false if ids don't match or can't be found
   */const isSame=(a,b)=>{if(a===b){return!0}if(a&&b){if(a.id&&a.id===b.id){return!0}// CMSAsset may have id under metadata
if(a.metadata&&a.metadata.id&&b.metadata&&a.metadata.id===b.metadata.id){return!0}}return!1};var idUtils={newStepId:newStepId,uuid:uuid,isSame:isSame};class AppLaunchUtils{/**
   * Generate application launch attributes
   * @param _w window object
   * @returns {{launchTime: string, appName: (string), pe_version: (string), id: (string), locale: string, deviceUUID: string}}
   */static generate(_w=window){let deviceUUID=_w.localStorage.getItem("PE_DEVICE_UUID");if(!deviceUUID){deviceUUID=uuid();_w.localStorage.setItem("PE_DEVICE_UUID",deviceUUID)}return{id:uuid(),appName:APP_NAMES[_w.location.pathname]||"Vuforia Editor",pe_version:pe_version,deviceUUID,locale:_w.i18next.language,launchTime:new _w.Date().toISOString()}}}var AppLaunchUtils$1={AppLaunchUtils:AppLaunchUtils};const INITIAL_STATE={route:ROUTE.editor,offline:!1,activeAssetList:ASSET_LIST_TYPE.CAPTURES,toggles:{},selectedTab:TABS.CREATED_BY_ME,procedureEditorOpen:!1,assetBrowserOpen:!1,navExpanded:!0},app$1=(state=INITIAL_STATE,action)=>{state=Object.assign({},INITIAL_STATE,state);switch(action.type){case LOGIN_SUCCESS:case LOGIN_FAIL:{return{...state,username:action.username,userId:action.userId,organization:{id:action.orgId,name:action.orgName,roles:action.orgRoles},applicationLaunch:AppLaunchUtils.generate(),userInfo:action.userInfo}}case NAVIGATE_TO_ROUTE_END:{return{...state,route:action.route,params:action.params}}case SAVE_PROCEDURE_START:return{...state,procedureSaveInProgress:!0,procedureFail:!1};case SAVE_PROCEDURE_SUCCEEDED:return{...state,procedureSaveInProgress:!1,procedureFail:!1};case SAVE_PROCEDURE_END:return{...state,procedureSaveInProgress:!1};case FETCH_PROCEDURES_FAILED:{return{...state,proceduresFail:!0}}case LOAD_PROCEDURE_ERROR:{return{...state,procedureSaveInProgress:!1,procedureFail:!0}}case SAVE_PROCEDURE_FAILED:{return{...state,procedureSaveInProgress:!1,procedureFail:!0}}case ALLOW_RENAME_PROCEDURE:{return{...state,allowRenameProcedure:!0}}case DISALLOW_RENAME_PROCEDURE:{return{...state,allowRenameProcedure:!1}}case RENAME_PROCEDURE_START:{return{...state,renameProcedureInProgress:!0,renameProcedureEditing:!0}}case RENAME_PROCEDURE_STOP:{return{...state,renameProcedureInProgress:!1,allowRenameProcedure:!1,renameProcedureEditing:!1}}case RENAME_PROCEDURE:{return{...state,renameProcedureInProgress:!0,renameProcedureFailed:!1,renameProcedureEditing:!1}}case RENAME_PROCEDURE_COMPLETE:{return{...state,renameProcedureInProgress:!1,renameProcedureFailed:!1,allowRenameProcedure:!1}}case RENAME_PROCEDURE_FAILED:{return{...state,renameProcedureInProgress:!1,renameProcedureFailed:!0,allowRenameProcedure:!1}}case SAVE_COMPONENT_STATE:{// The "Set" action will only set the property on the component on the app state within the browser session
// the "Save" action will persist the property on the component on the app state in local storage, thus those settings
// will be maintained across browser sessions
let appState={...state};if(action.componentKey){appState[action.componentKey]={...appState[action.componentKey],...action.data}}return appState}case SET_ACTIVE_ASSET_LIST:{return{...state,activeAssetList:action.assetList}}case SHOW_BANNER_MESSAGE:{if(action.message){return{...state,bannerMessage:{message:action.message,type:action.messageType}}}else{return state}}case CLEAR_BANNER_MESSAGE:{return{...state,bannerMessage:null}}case INSERT_STEPS_START:{return{...state,insertStepsInProgress:!0}}case INSERT_STEPS_COMPLETED:{return{...state,insertStepsInProgress:!1}}case TOP_LEVEL_TAB_CHANGE:{const newState={...state,selectedTab:action.tabName};return newState}case OPEN_PANEL:{const newState={...state};if(action.name.startsWith("asset-browser.")){newState.assetBrowserOpen=!0}else if("procedure-editor"===action.name){newState.procedureEditorOpen=!0;newState.selectedTab="";//Unselect active tab in navbar
}else if(action.name.startsWith("procedures.")){newState.assetBrowserOpen=!1}return newState}case CLOSE_PANEL:{const newState={...state};if(action.name.startsWith("asset-browser.")){newState.assetBrowserOpen=!1;if(newState.selectedTab.startsWith("asset-browser.")){newState.selectedTab="";//Unselect active tab in navbar
}}if("procedure-editor"===action.name){newState.procedureEditorOpen=!1}return newState}case TOGGLE_NAV_EXPANSION:{const newState={...state};newState.navExpanded=!newState.navExpanded;return newState}case NAVIGATION_MASKED:{const newState={...state};if(!newState.maskRequests){newState.maskRequests=new Set}if(action.masked){newState.maskRequests.add(action.componentName);newState.navMasked=action.masked}else{if(!newState.maskRequests.has(action.componentName)){return newState}newState.maskRequests.delete(action.componentName);newState.navMasked=0===newState.maskRequests.size?action.masked:newState.navMasked}return newState}case ASSET_VIDEO_EDITOR_OPENED:{const newState={...state};if(!newState.assetBrowserOpen){newState.assetBrowserOpen=!0}return newState}default:return state;}};var app$2={INITIAL_STATE:INITIAL_STATE,default:app$1};const INITIAL_STATE$1=[],procedureList=(state=INITIAL_STATE$1,action)=>{switch(action.type){case FETCH_PROCEDURES_SUCCEEDED:{return[...action.procedures]}case DELETE_PROCEDURE_COMPLETE:{// clone the current state
let newList=[...state],deletedProcedureId=action.procedureId;// remove the deleted item from the proceduresList
return newList.filter(procedure=>deletedProcedureId!==procedure.id)}case CREATE_PROCEDURE_SUCCEEDED:{// add the procedure to the main procedure list
let newList=[...state,action.procedure];return newList}case SAVE_PROCEDURE_SUCCEEDED:{// Do note that procedureList contains incomplete instances of procedures and while SAVE_PROCEDURE_SUCCEEDED
// will cause some incomplete instances to be replaced with more complete ones, it should not be relied upon.
//Update the procedure in the main procedure list
//So that latest version in there for going back and re-opening the proc.
let proceduresList=[...state],updatedProcedure=action.procedure,index=proceduresList.findIndex(procedure=>{return updatedProcedure.id===procedure.id});if(0<=index){// Performance (Memory): Note that we are putting full procedure instances here from save, could remove
// some attributes such as steps to save memory?
proceduresList.splice(index,1,updatedProcedure)}return proceduresList}case COULD_NOT_OPEN_PROCEDURE:{// If attempted to open a procedure that no longer exists or is not accessible remove it from the procedure picker list.
if(action.id){return state.filter(proc=>proc.id!==action.id)}return state}default:return state;}};function updateById(state,id,updateFn){const index=state.findIndex(procedure=>procedure.id===id);if(0<=index){const procedure=state[index],updated=updateFn(procedure);if(updated!==procedure){const newState=[...state];newState.splice(index,1,updated);return newState}}return state}var procedureList$1={INITIAL_STATE:INITIAL_STATE$1,default:procedureList};const INITIAL_STATE$2=[],publishedProcedureList=(state=INITIAL_STATE$2,action)=>{switch(action.type){case FETCH_PUBLISHED_PROCEDURES_SUCCEEDED:{return[...action.procedures]}default:return state;}};/**
                                  * The List of Objects cached here are the metadata from the publications route,
                                  * Each item contains metadata about the published artifact, with some metadata about the
                                  * procedure that was published.
                                  */var publishedProcedureList$1={INITIAL_STATE:INITIAL_STATE$2,default:publishedProcedureList};const INITIAL_STATE$3={createInProgress:!1},newProcedure$1=(state=INITIAL_STATE$3,action)=>{switch(action.type){case CREATE_PROCEDURE_START:{return{...state,createInProgress:!0,messageObject:null}}case CREATE_PROCEDURE_CANCEL:{return{...state,createInProgress:!1,messageObject:null}}case CREATE_PROCEDURE_SUCCEEDED:{return{...state,createInProgress:!1,messageObject:null,copiedProcedureId:action.copied&&action.procedure.id}}case CREATE_PROCEDURE_FAILED:{return{...state,createInProgress:!1,messageObject:{type:"error",message:action.message}}}case CREATE_PROCEDURE_WARNING:{return{...state,messageObject:{type:"warning",message:action.message,tooltip:action.tooltip}}}default:return state;}};var newProcedure$2={INITIAL_STATE:INITIAL_STATE$3,default:newProcedure$1};const INITIAL_STATE$4={newlyCreatedAssets:{}},assets$1=(state=INITIAL_STATE$4,action)=>{switch(action.type){case FETCH_ASSETS_SUCCEEDED:{return{...state,[action.assetType]:action.assets}}//If metadata for an asset was found, add it to the cache.
//These may get overridden by the full FETCH_ASSETS_SUCCEEDED event, but that should have all.
case FETCH_ASSET_METADATA_SUCCEEDED:{let assetsOfType=state[action.assetType]||[],assetIdx=assetsOfType.findIndex(a=>a.url===action.asset.url);// Update the asset so it has the newly fetched metadata.
// If asset is somehow not found, add it.
if(-1<assetIdx){assetsOfType[assetIdx]=action.asset}else{assetsOfType=[...assetsOfType,action.asset]}return{...state,[action.assetType]:assetsOfType}}case FETCH_ASSET_USES_SUCCEEDED:{return{...state,assetUses:{uses:action.uses,assetId:action.assetId,users:action.users}}}case FETCH_ASSET_USES_FAILED:{return{...state,message:action.message}}case DELETE_ASSET_COMPLETE:{let deletedAsset=action.asset,newState={...state};Object.keys(newState).forEach(assetType=>{// remove the deleted item from the current list of assets
const assets=newState[assetType];if(!Array.isArray(assets)||"uses"===assetType){return}newState[assetType]=assets.filter(asset=>deletedAsset.url!==asset.url)});return newState}case RENAME_ASSET_COMPLETE:{let renamedAsset=action.asset,newState={...state};Object.keys(newState).forEach(assetType=>{const assets=newState[assetType];if(!Array.isArray(assets)){return}const index=assets.findIndex(asset=>asset.url===renamedAsset.url);if(-1!==index){const assetToRename={...assets[index]};assetToRename.metadata={...assetToRename.metadata};assetToRename.metadata.title=renamedAsset.metadata.title;newState[assetType]=assets.slice(0);newState[assetType][index]=new sxsl.CMSAsset(assetToRename.url,assetToRename.metadata)}});return newState}case MARK_NEWLY_CREATED_ASSET:{return{...state,newlyCreatedAssets:{...state.newlyCreatedAssets,[action.assetId]:!0}}}case UNMARK_NEWLY_CREATED_ASSET:{const newlyCreatedAssets={...state.newlyCreatedAssets};delete newlyCreatedAssets[action.assetId];return{...state,newlyCreatedAssets}}case MARK_NEWLY_GENERATED_VIDEO_ASSET:{return{...state,newlyGeneratedVideoAssets:{...state.newlyGeneratedVideoAssets,[action.assetId]:!0}}}case UNMARK_NEWLY_GENERATED_VIDEO_ASSET:{const newlyGeneratedVideoAssets={...state.newlyGeneratedVideoAssets};delete newlyGeneratedVideoAssets[action.assetId];return{...state,newlyGeneratedVideoAssets}}case ASSET_VIDEO_EDITOR_OPENED:{let newState={...state,assetVideoEditorInfo:{videoDuration:action.videoDuration,asset:action.asset}};return newState}case ASSET_VIDEO_EDITOR_CLOSED:{let newState={...state};delete newState.assetVideoEditorInfo;return newState}default:return state;}};var assets$2={INITIAL_STATE:INITIAL_STATE$4,default:assets$1};const INITIAL_STATE$5=null,capture$1=(state=INITIAL_STATE$5,action)=>{switch(action.type){case OPEN_CAPTURE:{return action.capture}case RESET_ACTIVE_CAPTURE:{return INITIAL_STATE$5}case SET_ACTIVE_CAPTURE_STEP:{const captureId=state&&state.metadata&&state.metadata.id;if(action.captureId&&action.captureId===captureId){const newState={...state,activeStepId:action.stepId};return newState}return state}default:return state;}};var capture$2={INITIAL_STATE:INITIAL_STATE$5,default:capture$1};const INITIAL_STATE$6={currentUpload:null,queue:[],// Retains status of recently uploaded or failed files.
lastBatch:[],failMessage:null},assetCreation=(state=INITIAL_STATE$6,action)=>{switch(action.type){case CREATE_ASSET_START:{return{...state,lastBatch:isCreationInProgress(state)?state.lastBatch:[],failMessage:null}}case CREATE_ASSET_ENQUEUE_UPLOAD:{return{...state,queue:[...state.queue,action.item],failMessage:null}}case CREATE_ASSET_UPLOAD_START:{return{...state,currentUpload:action.item,queue:state.queue.filter(item=>item!==action.item),failMessage:null}}case CREATE_ASSET_COMPLETE:case CREATE_ASSET_FAILED:{const newState={...state,currentUpload:state.currentUpload===action.item?null:state.currentUpload,// Note that this will remove all items for which name will match - including duplicates.
queue:state.queue.filter(item=>item.name!==action.item.name)},succeeded=action.type===CREATE_ASSET_COMPLETE;// Store failed or actually uploaded files as lastBatch (it's getting displayed at the bottom of the page in a snackbar).
// Also ignore duplicate items (attempts to upload the same file more than once).
if((!succeeded||action.uploaded||action.existing)&&!action.item.duplicate){newState.lastBatch=[...state.lastBatch,newCompletedItem({...action,file:action.item.file})]}newState.failMessage=null;if(!succeeded&&action.message){newState.failMessage=action.message}return newState}case CREATE_ASSET_CANCEL_ALL:{return{...state,currentUpload:null,lastBatch:state.currentUpload||state.queue.length?state.lastBatch:[],queue:[],failMessage:null}}case DELETE_ASSET_COMPLETE:{const deletedAsset={...action.asset,succeeded:!0,deleted:!0,file:{type:action.mediaType}};return{...state,lastBatch:[deletedAsset]}}default:return state;}};function newCompletedItem({file,type,existing,uploaded}){return{file,existing,uploaded,succeeded:type!==CREATE_ASSET_FAILED}}function isCreationInProgress(state){// currentUpload can be null at times (even when technically in progress) until assetCreationProcess
// picks up another item for upload, so need to check if queue is empty too.
return 0<state.queue.length||state.currentUpload}var assetCreation$1={INITIAL_STATE:INITIAL_STATE$6,isCreationInProgress:isCreationInProgress,default:assetCreation};class PEProcedure{constructor(){}/**
                    * Initializes the procedure from the given sxsl procedure and will await text based assets
                    * @async
                    * @param {sxsl.CMSProcedure} cmsProcedure
                    */async init(cmsProcedure={}){this.id=cmsProcedure.id;this.url=cmsProcedure.url;this.correlationId=cmsProcedure.correlationId;this.properties=cmsProcedure.getProperties()||{};this.title=await cmsProcedure.getTitle();this.thumbnail=await cmsProcedure.getThumbnail();this.properties.published=cmsProcedure.properties.properties?cmsProcedure.properties.properties.published:void 0;let steps=[],stepDefs=cmsProcedure.stepDefinitionList&&cmsProcedure.stepDefinitionList.steps?cmsProcedure.stepDefinitionList.steps:[];for(const stepDef of stepDefs){let newStep={id:stepDef.id,assets:stepDef.getAssets(),locationAware:stepDef.isLocationAware(),description:await stepDef.getDescription()};if(newStep.description===void 0){newStep.description=""}steps.push(newStep)}this.steps=steps;return this}/**
     * Prepares the object payload that can be used to create a new procedure in the CMS.
     */static getCreateProcedurePayload({steps,title}){if(!steps||!steps.length){steps=[PEProcedure.createStep()]}return{steps,title,properties:{}}}/**
     * Prepares the object payload that can be used to create a new procedure in the CMS.
     */static getCopyProcedurePayload({title,copiedProcedure}){return{steps:copiedProcedure.steps,title,// Not copying properties, they seem to only have createdon and modifiedon as of now.
properties:{}}}static createStep(){return{id:newStepId(),description:""}}static reducer(state=null,action){switch(action.type){case NEW_STEP:{let newState=cloneStateWithNewSteps(state),step=PEProcedure.createStep(),steps=getSteps(newState),preStep=action.index===void 0?steps.slice(-1).pop():steps[action.index-1];if(preStep&&preStep.assets){step.assets=preStep.assets.filter(assetFilter("type",[ASSET_TYPE.MODEL,ASSET_TYPE.AR_CONTEXT,ASSET_TYPE.MTG_CONTEXT]))}if(action.index!==void 0){steps.splice(action.index,0,step)}else{steps.push(step)}return newState}case NEW_STEPS:{const newState=cloneStateWithNewSteps(state),steps=getSteps(newState),index=action.index===void 0?steps.length:action.index;// remove the 0th step if it is the only step and is empty
let removeEmptyStep=!1;if(steps&&1===steps.length){const step=steps[0]||{},hasAssets=step.assets&&step.assets.find(asset=>{// empty description asset does not count as having an asset
return!("description"===asset.name&&""===asset.value)});// assets may be undefined, or may be an object with no assets, so explicitly check for asset with a name
removeEmptyStep=!step.description&&!hasAssets}if(removeEmptyStep){steps.splice(0,1,...action.steps)}else{steps.splice(index,0,...action.steps)}return newState}case REMOVE_STEP:{let newState=cloneStateWithNewSteps(state),steps=getSteps(newState);steps.splice(action.index,1);return newState}case STEP_DESCRIPTION_CHANGE:{let{newState,step}=cloneStepsAndStep(state,action.step.id);step.description=action.text;return newState}case STEP_LOCATIONAWARE_CHANGE:{let{newState,step}=cloneStepsAndStep(state,action.id);step.locationAware=action.locationAware;return newState}case STEP_ID_CHANGE:{let{newState,step}=cloneStepsAndStep(state,action.id);step.id=action.newStepId;return newState}case STEP_MOVE:{let newState=cloneStateWithNewSteps(state),steps=getSteps(newState),newIndex=action.newIndex,oldIndex=action.oldIndex,step=steps.splice(oldIndex,1);//remove
if(newIndex>oldIndex){newIndex--;//Acount for the splice above
}newState.steps.splice(newIndex,0,step[0]);return newState}case ASSET_MOVE:{const{newState,step}=cloneStepsAndStep(state,action.originStep.id),originStep=step,originAssets=[...originStep.assets];originStep.assets=originAssets;let{oldIndex,destStep}=action;destStep=newState.steps.find(item=>item.id===destStep.id);destStep={...destStep};// Remove asset from its former place.
const toMove=originAssets.splice(oldIndex,1),movingBetweenSteps=destStep.id!==originStep.id;// Decide where asset should be moved (which index and which step).
let newIndex=action.newIndex,destAssets;if(movingBetweenSteps){if(!destStep.assets){destStep.assets=[]}destAssets=destStep.assets=[...destStep.assets]}else{// We are just reordering assets within a single step, so destination == origin.
destAssets=originAssets;if(newIndex>oldIndex){newIndex--;// Acount for the splice above, it's only needed when moving within the same step.
}}// Insert asset at its new destination.
destAssets.splice(newIndex,0,toMove[0]);// Update the state objects which are using object maps {} instead of arrays.
replaceStep(newState,originStep);// No need to update the destStep if it's the same as the originStep.
if(movingBetweenSteps){const newDestStep={...destStep};replaceStep(newState,newDestStep)}return newState}case REMOVE_ASSETS_FROM_STEP:{let{newState,step}=cloneStepsAndStep(state,action.stepId);step.assets=[...(step.assets||[])];const newAssets=step.assets.filter(asset=>{return!action.assetNames.includes(asset.name)});step.assets=newAssets;return newState}case DO_ADD_ASSET_TO_STEP:{let{newState,step}=cloneStepsAndStep(state,action.stepId);step.assets=[...(step.assets||[])];addAssetToStep$1(step,action.asset,action.targetAssetName,action.insertAfter);replaceStep(newState,step);return newState}case RENAME_PROCEDURE:{const newState={...state,title:action.newName};return newState}case PUBLISH_PROCEDURE_SUCCEEDED:{const publishConfig=action.publishConfig||{};return{...state,properties:{...state.properties,published:{url:publishConfig.url,createdon:publishConfig.createdon,createdby:publishConfig.createdby}}}}case UNPUBLISH_PROCEDURE_SUCCEEDED:{let newState={...state};delete newState.properties.published;return newState}case SAVE_PROCEDURE_SUCCEEDED:{let newState=null;if(state&&state.thumbnail!==action.procedure.thumbnail){newState={...state};newState.thumbnail=action.procedure.thumbnail}return newState||state}default:return state;}}}/**
   * Filter out the desired assets from step
   * @param     {String}   property name of asset to use for filter
   * @param     {Object}   the values should be included for the property
   * @returns   {Function} condition function for filter
   **/const assetFilter=(key,values=[])=>asset=>values.includes(asset[key]),cloneStateWithNewSteps=state=>{// TODO: Should we make sure this is an instance of a PEProcedure? In that case we would need to remember
// about some "rouge" dynamic attributes such as activeTab. Also procedures are getting modified in other places as well.
return{...state,steps:state&&state.steps?state.steps.slice(0):[]}},cloneStepsAndStep=(state,id)=>{let newState=cloneStateWithNewSteps(state);if(!newState.steps){newState.steps=[]}//Clone the step by the id
let step=newState.steps.find(item=>item.id===id);const stepIndex=newState.steps.findIndex(item=>item.id===id);step={...step};newState.steps.splice(stepIndex,1,step);return{newState,step}},getSteps=state=>{return state.steps};/**
                                                                                 * Clones the state with a new copy of the steps array to allow modification
                                                                                 * @param {Object} state
                                                                                 */function replaceStep(procedure,step){const index=procedure.steps.findIndex(s=>s.id===step.id);procedure.steps[index]=step}/**
   * A synchronous function for adding an asset instance to a step instance. Does NOT save anything to the CMS.
   * @param {Object} step
   * @param {Object} asset
   * @param {String} targetAssetName
   * @param {boolean} insertAfter
   */function addAssetToStep$1(step,asset,targetAssetName=null,insertAfter=!1){const metadata=asset.getMetadata(),assetName=asset.getName()||metadata.id,type=metadata.subtype,category=metadata.category;step.assets=step.assets||[{name:"description",value:""}];const newAsset={name:assetName,url:asset.url,type,category};let insertIndex=step.assets.length;if(targetAssetName&&(type===ASSET_TYPE.IMAGE||type===ASSET_TYPE.VIDEO)){// set the order of the new asset to the order of the current asset in that location, then adjust the order of the assets after it
const assetBeforeKey=targetAssetName;insertIndex=targetAssetName&&step.assets.findIndex(item=>{return item.name===assetBeforeKey});if(insertAfter){insertIndex++}if(-1===insertIndex){insertIndex=step.assets.length}}step.assets.splice(insertIndex,0,newAsset)}var PEProcedure$1={PEProcedure:PEProcedure,addAssetToStep:addAssetToStep$1};const activeProcedure=(state=null,action)=>{switch(action.type){case ACTIVATE_PROCEDURE_TAB:{const newState={...state,activeTab:action.tabId};return newState}case LOAD_PROCEDURE:{return action.procedure}case FETCH_PERMISSIONS_SUCCEEDED:{const newState={...state,accessList:action.accessList};return newState}case LOAD_PROCEDURE_ERROR:case REMOVE_ACTIVE_PROCEDURE:{return null}default:return PEProcedure.reducer(state,action);}};/**
    * Filter Actions function, to reduce unnecessary history entries
    * @see https://github.com/omnidan/redux-undo#filtering-actions
    * @param {Object} action - as applied by the reducer
    * @param {Object} currentState - current value of state in history
    */function filterActions(action,currentState){if(currentState&&currentState.activeTab&&currentState.activeTab!==PROCEDURE_TAB.EDIT){//activeTab of undefined is the Edit tab
return!1;// false - no not record
}//On the edit tab, ignore uninteresting events
const WHITE_LIST_ACTIONS=[ASSET_MOVE,DO_ADD_ASSET_TO_STEP,INSERT_STEPS_COMPLETED,LOAD_PROCEDURE,STEP_MOVE,REMOVE_STEP,NEW_STEP,REMOVE_ASSETS_FROM_STEP,STEP_DESCRIPTION_CHANGE,RENAME_PROCEDURE];return WHITE_LIST_ACTIONS.includes(action.type)}var activeProcedure$1=window.ReduxUndo.default(activeProcedure,{//Filter out actions that occur on the share tab, or do not contribute meaningful entries to undo
filter:filterActions,groupBy:(action,state)=>{//Return a consistent String value to group certain actions into certain block and undefined to let the normal behavior resume.
if(action.undoHistoryGroupKey){return action.undoHistoryGroupKey;//Combine multiple actions into this group name
}return void 0;//Let the normal/configured behavior be used
},debug:!1,//Enable to see all event data
limit:100//Max entries to keep
}),activeProcedure$2={filterActions:filterActions,default:activeProcedure$1};const INITIAL_STATE$7={id:null,// id of the active step
procedureId:null,// procedure that the active step belongs to
cursorAssetIndex:null,selectedAssetNames:[],isDescriptionActive:!0},activeStep$1=(state=INITIAL_STATE$7,action)=>{switch(action.type){case SET_ACTIVE_STEP:{return{...state,id:action.stepId,procedureId:action.procedureId,isDescriptionActive:action.isDescriptionActive}}case SET_ASSET_CURSOR:{return{...state,cursorAssetIndex:action.cursorAssetIndex}}case SELECT_ASSETS:{return{...state,selectedAssetNames:[...action.selectedAssetNames]}}case RESET_ASSET_SELECTION:{return{...state,selectedAssetNames:[],cursorAssetIndex:null}}case LOAD_PROCEDURE_ERROR:{return INITIAL_STATE$7}case LOAD_PROCEDURE:{if(!action.procedure||state.procedureId!==action.procedure.id){// Different procedure is now active, reset everything.
return INITIAL_STATE$7}return state}default:return state;}},reducer=activeStep$1;var activeStep$2={INITIAL_STATE:INITIAL_STATE$7,reducer:reducer};const INITIAL_STATE$8={activeId:null,cache:{},savesInProgress:{},pendingSaves:{},exportsInProgress:{},activeStep:INITIAL_STATE$7};/**
    * Creates a reducer from an initialState and an object map.
    * @param {*} initialState
    * @param {Object} definition
    */function createReducer(initialState,definition){return(state=initialState,action,parentState=void 0)=>{const handler=definition[action.type];if(handler){return handler(state,action,parentState)}return state}}const cacheProcedure=(state,{procedure})=>{return{...state,[procedure.id]:{present:procedure,past:[],future:[]}}},leaveStepEditor=(state,action,parentState)=>{const newState={...state};let modified=!1;Object.keys(state).forEach(id=>{// When leaving procedure editor make sure that we remove working copies that do not need saving.
if(!parentState.pendingSaves[id]&&!parentState.savesInProgress[id]){delete newState[id];modified=!0}});return modified?newState:state},procedureCache=createReducer(INITIAL_STATE$8.cache,{// We are not handling SAVE_PROCEDURE_SUCCEEDED because we could overwrite working copy changes
// that were made when procedure was being saved.
[FETCH_PROCEDURE_SUCCEEDED]:cacheProcedure,[CREATE_PROCEDURE_SUCCEEDED]:cacheProcedure,// This action is fired when procedure was saved and there were no pending saves at that time.
[SAVE_PROCEDURE_PROCESS_EXIT]:(state,{procedureId},parentState)=>{// Let's remove procedure's working copy after it is saved unless it is an active procedure.
if(procedureId!==parentState.activeId){return deleteProperty(state,procedureId)}// TODO: An idea: to avoid removing procedures from cache prematurely a listener could be added
// for SAVE_PROCEDURE_PROCESS_EXIT action with a timer and another watcher for changes to the
// procedure cache to see if any changes are being made in that time - if so, the removal would
// be cancelled until the next SAVE_PROCEDURE_PROCESS_EXIT.
return state},[DELETE_PROCEDURE_COMPLETE]:(state,{procedureId})=>{return deleteProperty(state,procedureId)},// Note that this action is also used for resetting active procedure (when you go back to home page)...
[LOAD_PROCEDURE_ERROR]:leaveStepEditor,[REMOVE_ACTIVE_PROCEDURE]:leaveStepEditor}),savesInProgress=createReducer(INITIAL_STATE$8.savesInProgress,{[SAVE_PROCEDURE_START]:setProcedureFlag,[SAVE_PROCEDURE_PROCESS_EXIT]:resetProcedureFlag,// Deletes count as saves for the sake of keeping track of what is being modified (or deleted).
[DELETE_PROCEDURE_START]:setProcedureFlag,[DELETE_PROCEDURE_COMPLETE]:resetProcedureFlag,[DELETE_PROCEDURE_FAILED]:resetProcedureFlag}),pendingSaves=createReducer(INITIAL_STATE$8.pendingSaves,{[SAVE_PROCEDURE_SCHEDULE_ANOTHER_SAVE]:setProcedureFlag,[SAVE_PROCEDURE_START]:resetProcedureFlag,// Here we are just resetting all pending saves when delete is spotted - no need to save anything
// anymore if we are going to delete it.
[DELETE_PROCEDURE]:resetProcedureFlag,[DELETE_PROCEDURE_START]:resetProcedureFlag,[DELETE_PROCEDURE_COMPLETE]:resetProcedureFlag,[DELETE_PROCEDURE_FAILED]:resetProcedureFlag}),exportsInProgress=createReducer(INITIAL_STATE$8.exportsInProgress,{[EXPORT_PROCEDURE_START]:(state,{procedureId,fileName})=>{// Adding an entry marks this procedure as being currently exported.
return{[procedureId]:{procedureId,fileName}}},[EXPORT_PROCEDURE_COMPLETE]:(state,{procedureId,blob,fileName})=>{if(state[procedureId]){// Mark the entry as complete and give blob and fileName info so that the file can be downloaded.
return{[procedureId]:{procedureId,blob,fileName,complete:!0}}}else{// If we completed an export and there is not in progress state it means that the export had been cancelled earlier.
return state}},// Just remove the entries on cancel or fail.
[EXPORT_PROCEDURE_FAILED]:resetProcedureFlag,[EXPORT_PROCEDURE_CANCEL]:resetProcedureFlag});function setProcedureFlag(state,{procedureId}){return{...state,[procedureId]:!0}}function resetProcedureFlag(state,{procedureId}){return deleteProperty(state,procedureId)}function deleteProperty(state,attr){if(!state[attr]){return state}const newState={...state};delete newState[attr];return newState}/**
   * Combines states produced by specified reducers into the newState inline without nesting them.
   */function combineReducersInline(newState,originalState,action,reducers){Object.keys(reducers).forEach(key=>{const nested=originalState[key],newNested=reducers[key](nested,action);if(newNested!==nested){newState=newState||{...originalState};newState[key]=newNested}});return newState}// Reducer for store.getState().procedures, also handles nested activeId state.
const procedures$1=(state=INITIAL_STATE$8,action)=>{let newState=null,{cache}=state;cache=procedureCache(cache,action,state);// Handling actions referencing procedure by procedureId.
if(action.procedureId){const procedure=cache[action.procedureId];if(procedure){const newProcedure=activeProcedure$1(procedure,action);if(!newProcedure||newProcedure.present&&!newProcedure.present.id){throw new Error(`PEProcedure.reducer returned ${newProcedure} for action ${action.type} which is illegal.`)}if(newProcedure!==procedure){cache={...cache,[newProcedure.present.id]:newProcedure}}}}else{// Handling activeProcedure actions here - only handle them when procedureId is not present in the action.
// Get the activeProcedure object from working copy cache and pass it to activeProcedure reducer.
const active=cache[state.activeId]||{past:[],future:[]},newActiveProcedure=activeProcedure$1(active,action);if(newActiveProcedure!==active){// Update the activeId and cache only if procedure was changed.
newState=newState||{...state};newState.activeId=newActiveProcedure&&newActiveProcedure.present&&newActiveProcedure.present.id||void 0;if(newState.activeId){cache={...cache,[newState.activeId]:newActiveProcedure}}}}if(cache!==state.cache){newState=newState||{...state};newState.cache=cache}newState=combineReducersInline(newState,state,action,{savesInProgress,pendingSaves,activeStep:reducer,exportsInProgress});return newState||state};var procedures$2={INITIAL_STATE:INITIAL_STATE$8,default:procedures$1};const INITIAL_STATE$9={NODE_CACHE:{},//ID -> NODE
SL_CACHE:{},//related-node -> [sl nodes] (capture -> capture's slnodes)
PROCEDURE_ANCHOR_CACHE:{},// PROCEDURE -> [anchor nodes],
CAPTURE_CACHE:{}//SLNODE-ID -> related Capture node
},nodes=(state=INITIAL_STATE$9,action)=>{switch(action.type){case FETCH_SSG_NODE_SUCCEEDED:{let newState={...state};newState.NODE_CACHE={...newState.NODE_CACHE,[action.node.uid]:action.node};return newState}case FETCH_SEMANTIC_LOCATION_SUCCEEDED:{let newState={...state};newState.SL_CACHE={...newState.SL_CACHE,[action.slkey]:action.nodes};return newState}case FETCH_PROCEDURE_ANCHORS_SUCCEEDED:{let newState={...state};newState.PROCEDURE_ANCHOR_CACHE={...newState.PROCEDURE_ANCHOR_CACHE,[action.id]:action.nodes};return newState}case RESET_PROCEDURE_ANCHORS:{let newState={...state,PROCEDURE_ANCHOR_CACHE:{},CAPTURE_CACHE:{}};return newState}case FETCH_RELATED_CAPTURE_SUCCEEDED:{let newState={...state};newState.CAPTURE_CACHE={...newState.CAPTURE_CACHE,[action.id]:action.nodes};return newState}case RENAME_ASSET_COMPLETE:{//Rename of a capture will invalidate some the cached data where the title may be cached.
//Its a low frequency action, let the ui rebuild its data from the server
let newState={...state};if(null===action.asset.mediaType){newState.PROCEDURE_ANCHOR_CACHE={};newState.CAPTURE_CACHE={}}return newState}default:return state;}};var spatialGraphReducer={INITIAL_STATE:INITIAL_STATE$9,default:nodes};const orgsWith3d=["171b6f20-eb6c-11e9-a25e-4ddc8a4dd35b",// 3dwi
"13340870-a7e4-11e9-9e8c-ff4fa2032bdc",//PTC QA tan-dev
"def7b650-aca8-11e9-a1c3-31ca11c7e11a",//PTC QA tan1
"fa0ef5d0-a7e3-11e9-9e8c-ff4fa2032bdc"//PTC QA tan1
],ENTITLEMENT_KEYS={THREE_D_WORK_INSTRUCTIONS:"threedwi"};/**
    * Check the entitlement service to see if the current user/org is allowed to the use the feature specified by the key
    * Updates the store with a new value as returned by the service
    *
    * @param {String} key - the entitlement key to check
    * @returns {Boolean} true if the entitlement is turned on in the service
    */async function hasEntitlement(key){let result;if(key===ENTITLEMENT_KEYS.THREE_D_WORK_INSTRUCTIONS){let orgId=store.getState().app.organization.id;result=orgsWith3d.includes(orgId)}store.dispatch({type:ENTITLEMENT_CHECK_COMPLETE,key,result});return result}async function initEntitlements(){return hasEntitlement(ENTITLEMENT_KEYS.THREE_D_WORK_INSTRUCTIONS)}var entitlementUtils={ENTITLEMENT_KEYS:ENTITLEMENT_KEYS,hasEntitlement:hasEntitlement,initEntitlements:initEntitlements};const INITIAL_STATE$a={[ENTITLEMENT_KEYS.THREE_D_WORK_INSTRUCTIONS]:!1},entitlements=(state=INITIAL_STATE$a,action)=>{switch(action.type){case ENTITLEMENT_CHECK_COMPLETE:{let newState={...state};newState[action.key]=action.result;return newState}default:return state;}};var entitlement={INITIAL_STATE:INITIAL_STATE$a,default:entitlements};const INITIAL_STATE$b={users:[]},users$1=(state=INITIAL_STATE$b,action)=>{switch(action.type){// Stop any duplicate requests
case FETCH_USER_IN_PROGRESS:{const newState={...state},id=action.id;if(!newState[id]){newState[id]={objectId:id}}return newState}case FETCH_USER_SUCCEEDED:{return{...state,[action.user.objectId]:action.user}}case FETCH_USER_FAILED:{// Remove temp progress user
const newState={...state};delete newState[action.id];return newState}case FETCH_USERS_IN_PROGRESS:{const newState={...state,users:[]};return newState}case FETCH_USERS_SUCCEEDED:{return{...state,users:action.users}}case FETCH_USERS_FAILED:{const newState={...state};delete newState.users;return newState}default:return state;}};var users$2={INITIAL_STATE:INITIAL_STATE$b,default:users$1};class AuthUtils{/**
   * detect 401 response and redirect to login page
   * @param {XMLHttpRequest} xhr
   */static detect401XHR(xhr){if(xhr&&4===xhr.readyState&&401===xhr.status){store.dispatch({type:LOGIN})}}/**
     * A fetch that will detect 401 response from CMS and redirect to login page
     * @param {string} url standard fetch arg
     * @param {object} options standard fetch arg
     */static async fetch(url,options={}){options.headers=Object.assign({"X-Requested-With":"fetch","x-no-form-based-login":"true","x-correlation-id":uuid()},options.headers||{});const res=await fetch(url,options);if(res&&!res.ok){if(401===res.status){store.dispatch({type:LOGIN})}else{// knowing the correlation id can help to search for relevant logging
const id=options.headers["x-correlation-id"];console.warn(`${options.method} ${res.url} ${res.status} correlation id ${id}`)}}return res}/**
     * Check whether current user have required role
     * @param {Array<string>} allowedRoles roles that can access
     * @param {Array<Object>} roles current user roles
     * @returns {boolean} true if current user has required role
     */static canAccess(allowedRoles,roles){if(!allowedRoles||!Array.isArray(allowedRoles)){return!1}const userRoles=roles||getRoles();return!!allowedRoles.filter(role=>userRoles.find(uRole=>uRole.name.toUpperCase()===role.toUpperCase())).length}/**
     * Check whether current user can access Published Procedures page
     * @param {Array<Object>} [roles] current user roles
     * @returns {boolean}
     */static canAccessPublishedProceduresPage(roles=null){return AuthUtils.canAccess(["ADMINISTRATOR","MANAGER"],roles)}/**
     * @returns {boolean} true if current user is org admin, false otherwise
     */static isAdmin(){return AuthUtils.canAccess(["ADMINISTRATOR"])}/**
     * Get an array of logged in user roles or empty array if user hasn't successfully logged in
     * @param {boolean} returnSorted if true then return array of role names sorted from most privilaged role first
     * @returns {Array}
     */static getUserRoles(returnSorted=!1){const compareRolesFn=(roleNameA,roleNameB)=>{const rolePriorityA=ROLE_PRIORITIES.filter(role=>role.name===roleNameA.toUpperCase()).map(role=>role.priority),rolePriorityB=ROLE_PRIORITIES.filter(role=>role.name===roleNameB.toUpperCase()).map(role=>role.priority);return rolePriorityA-rolePriorityB},state=store.getState();if(state.app&&state.app.organization&&state.app.organization.roles){let roleNames=store.getState().app.organization.roles.map(r=>r.name);if(returnSorted){roleNames=roleNames.sort(compareRolesFn)}return roleNames}return[]}}function getRoles(){const org=store.getState().app.organization;return org&&org.roles||[]}var AuthUtils$1={AuthUtils:AuthUtils};function*getUsername(){try{const response=yield call(AuthUtils.fetch,baseURL+accountServicePath+"/users/logged-in");if(response.ok){const result=yield response.json();console.debug(result);let org;if(result.orgs){const orgs="string"===typeof result.orgs?JSON.parse(result.orgs):result.orgs;org=orgs.shift()}if(!org){console.error("Org is missing",result);org={}}yield put(loginSuccess(result.name||result.email,result.sub,org.id,org.name,org.roles,{firstName:result.first_name,lastName:result.last_name,email:result.email}))}else{console.error("unable to get user info",response);throw new Error(response.status)}}catch(err){console.log("get username error:",err);yield put(loginFail())}}function login(action,win=window){let href=win.location.href;win.location.href=baseURL+"/auth/login?returnTo="+encodeURIComponent(href.substring(href.indexOf(ROUTE.editor)))}/**
   * logout of CMS and Ambassador
   * then return back to editor home page which triggers the login sequence if needed
   */function*logout$1(action,win=window){// TODO: use Ambassador's logout route once it supports "returnTo"
yield win.location.href=baseURL+"/auth/logout?returnTo="+encodeURIComponent(win.location.href)}function*authSaga(){// prettier-ignore
yield all([takeLatest$1(GET_USERNAME,getUsername),takeLatest$1(LOGOUT,logout$1),takeLatest$1(LOGIN,login)])}var auth={getUsername:getUsername,login:login,logout:logout$1,default:authSaga};let defaultProjectPromise;function getProjectMgr(){const org=store.getState().app.organization;return new sxsl.CMSProjectManager(new sxsl.CMSConnection({url:baseURL,pathPrefix:cmsPath,orgId:org?org.id:void 0},AuthUtils.fetch))}/**
   * Get the CMS default project, will create if not found
   * @async
   * @returns {Promise<CMSProject>} Promise that resolves with the default CMSProject
   */async function getTenantProject(){if(!defaultProjectPromise){const getProject=async()=>{let proj,projMgr=getProjectMgr(),projectName=defaultProjectName;try{proj=await projMgr.getProjectById(projectName)}catch(projectError){if(404===projectError.status){console.info("Default project not created yet")}else{console.error("Failed to check project existance",projectError);throw projectError}}if(!proj){proj=await projMgr.createProject({id:projectName});if(!proj){throw Error("projMgr.createProject returned null project")}}return proj};defaultProjectPromise=getProject().catch(err=>{console.debug("project cannot be created",err);defaultProjectPromise=null;return Promise.reject()})}return defaultProjectPromise}async function getOrgId(){return(await getTenantProject()).manager.connection.orgId}function _setTenantProject(p){defaultProjectPromise=p?Promise.resolve(p):null}/**
   * @param {ProgressEvent} event from an XmlHttpRequest
   * @returns Simulated fetch API response object to the degree we are using it.
   */function getFetchResult(event){AuthUtils.detect401XHR(event.target);return{status:event.target.status,ok:200<=event.target.status&&300>event.target.status,text:()=>event.target.responseText,json:()=>JSON.parse(event.target.responseText)}}/**
   * Creates a fetch function based on XMLHttpRequest that allows for progress reporting.
   * @param {Object} config with following properties
   *    onProgress
   *    onLoadStart
   *    onLoadEnd
   */function makeFetchWithXHR(config){return(url,opts)=>{return new Promise((resolve,reject)=>{const xhr=new XMLHttpRequest;xhr.open(opts.method||"get",url);for(const key in opts.headers||{}){xhr.setRequestHeader(key,opts.headers[key])}xhr.onload=e=>resolve(getFetchResult(e));xhr.onerror=e=>resolve(getFetchResult(e));if(xhr.upload){xhr.upload.onprogress=config.onProgress}else{xhr.onprogress=config.onProgress}xhr.onloadstart=config.onLoadStart;xhr.onloadend=config.onLoadEnd;if(config.abortPromise){config.abortPromise.then(()=>xhr.abort())}xhr.send(opts.body)})}}var projectUtils={getProjectMgr:getProjectMgr,getTenantProject:getTenantProject,getOrgId:getOrgId,_setTenantProject:_setTenantProject,makeFetchWithXHR:makeFetchWithXHR};/* begin copyright text
    *
    * Copyright © 2016 PTC Inc., Its Subsidiary Companies, and /or its Partners. All Rights Reserved.
    *
    * end copyright text
    */ /**
        * Generates a hash (SHA-256) of the given file's contents.
        * @param {File} file
        * @returns {Promise<String>} Base 64 encoded file hash string.
        */async function getFileHash(file){const arrayBuffer=await readFileAsArrayBuffer(file),hashBuffer=await crypto.subtle.digest("SHA-256",arrayBuffer);return arrayBufferToBase64(hashBuffer)}function readFileAsArrayBuffer(file){return new Promise((resolve,reject)=>{const reader=new FileReader;reader.onloadend=()=>resolve(reader.result);reader.onerror=()=>reject(reader.error);reader.onabort=()=>reject(reader.error);reader.readAsArrayBuffer(file);// Sometimes when uploading the same file another time reader may complete synchronously
// and the onloadend event will not fire.
if(2===reader.readyState){// 2 - complete
if(!reader.error){resolve(reader.result)}else{reject(reader.error)}}})}function arrayBufferToBase64(buffer){let binary="";const bytes=new Uint8Array(buffer),len=bytes.byteLength;for(let i=0;i<len;++i){binary+=String.fromCharCode(bytes[i])}return window.btoa(binary)}class Base64Image{/**
   * @param {string} data base64 image data
   * @memberOf Base64Image
   */constructor(data){if(!Base64Image.isDataURL(data)){throw new Error("unexpected data "+data)}this.data=data}/**
     * @static
     * @param {string} data base64 image data
     * @returns true if data is a base 64 image string, false otherwise
     *
     * @memberOf Base64Image
     */static isDataURL(data){return Base64Image._REGEX.test(data)}/**
     * @returns {string} mime type such as 'image/jpeg'
     */getMimeType(){return this.data.match(Base64Image._REGEX)[1]}/**
     * Utility function ripped out of examples in image editor repo
     * @param {string} name optional name of the image
     */toBlob(name){var mimeString="",raw,uInt8Array,i,rawLength;raw=this.data.replace(Base64Image._REGEX,(match,imageType)=>{mimeString=imageType;return""});raw=atob(raw);rawLength=raw.length;uInt8Array=new Uint8Array(rawLength);// eslint-disable-line
for(i=0;i<rawLength;i+=1){uInt8Array[i]=raw.charCodeAt(i)}const blob=new Blob([uInt8Array],{type:mimeString});if(blob&&name){blob.name=name}return blob}}Base64Image._REGEX=/^data:(image\/.+);base64,/;var digestUtils={getFileHash:getFileHash,Base64Image:Base64Image};const setupTooltips=component=>{if(component.shadowRoot){const originalRender=component.render.bind(component);component.render=()=>{const renderResult=originalRender(),tooltipRenderResult=html`
        <style>
          @import url('src/assets/css/tooltips.css');
        </style>
        ${renderResult}
      `;return tooltipRenderResult};component.shadowRoot.addEventListener("mouseover",onMouseOver,!0)}},createTooltipInstance=(dataTooltipElement,referenceElement)=>{let container=document.body;if(dataTooltipElement.getRootNode()instanceof ShadowRoot||dataTooltipElement.hasAttribute("tooltip-target-appended")){container=dataTooltipElement}const config={title:dataTooltipElement.getAttribute("data-tooltip"),html:dataTooltipElement.hasAttribute("tooltip-html")||!1,placement:dataTooltipElement.getAttribute("tooltip-position")||"bottom",boundariesElement:document.body,container,trigger:"manual"},tooltipTemplate=dataTooltipElement.getAttribute("tooltip-template");if(tooltipTemplate){config.template=tooltipTemplate}dataTooltipElement.tooltip=new Tooltip(referenceElement,config);return dataTooltipElement.tooltip};/**
    * Create a tooltip instance for the given element. Attributes on the dataTooltipElement
    * can configure the tooltip in different ways.
    * "data-tooltip" {String} Value to use for the tooltip
    * "tooltip-html" {Boolean} true if the data-tooltip value is HTML to be used for the toolip DOM
    * "tooltip-template" {String} HTML of the outer tooltip to customize the icons and styling of the tooltip element
    *     and not the internal DOM of the tooltip value
    * "tooltip-position" {String} Value to use for the position of the tooltip.  See possible values
    *     https://popper.js.org/docs/v1/#popperplacements--codeenumcode
    *
    */let removeCurrentTooltip=null;const onMouseOver=e=>{const dataTooltipElement=e.target.closest("[data-tooltip]:not(.no-tooltip)");if(!dataTooltipElement&&removeCurrentTooltip){removeCurrentTooltip()}if(dataTooltipElement&&!dataTooltipElement.tooltip){if(removeCurrentTooltip){removeCurrentTooltip()}let referenceElement=dataTooltipElement;if(dataTooltipElement.hasAttribute("tooltip-reference")){const referenceSelector=dataTooltipElement.getAttribute("tooltip-reference");referenceElement=dataTooltipElement.querySelector(referenceSelector)||dataTooltipElement.closest(referenceSelector)||dataTooltipElement}createTooltipInstance(dataTooltipElement,referenceElement);removeCurrentTooltip=function onMouseLeave(){dataTooltipElement.tooltip.dispose();delete dataTooltipElement.tooltip;referenceElement.removeEventListener("menuMouseOut",removeCurrentTooltip);removeCurrentTooltip=null};referenceElement.addEventListener("menuMouseOut",removeCurrentTooltip);dataTooltipElement.tooltip.show()}},removeEventListener=()=>{document.removeEventListener("mouseover",onMouseOver,!0)};removeEventListener();document.addEventListener("mouseover",onMouseOver,!0);var tooltips={setupTooltips:setupTooltips,createTooltipInstance:createTooltipInstance,onMouseOver:onMouseOver,removeEventListener:removeEventListener};class PTCDialog extends LitElement{static get properties(){return{dialogTitle:{type:String},text:{type:String},"action-label":{type:String},"action-disabled":{type:Boolean},"cancel-label":{type:String},"disable-close-on-complete":{type:Boolean,default:!1},// Possible values: 'warning', 'warning-with-cancel, null
"notification-dialog":{type:String},"dialog-actions-hidden":{type:Boolean},// handle-complete and handle-cancel are optional async functions
// that are a hook to show the user another notification
// when they close this dialog
// e.g. to show an "Are you sure you want to do this?" prompt
// resolve with true to continue completing/cancelling,
// resolve with false to keep this dialog open
"handle-complete":{type:Function,attribute:!1},"handle-cancel":{type:Function,attribute:!1},invalidForm:{type:Boolean},dialogShadow:{type:Boolean},// true to mask the contents of the dialog
// e.g. for New Video Clip dialog while audio recording
// is in progress the dialog is masked
masked:{type:Boolean}}}constructor(){super();setupTooltips(this);// default handling is no-op
this["handle-complete"]=this["handle-cancel"]=()=>Promise.resolve(!0);const t=window.i18next.t.bind(window.i18next);this.labels={ok:t("ok"),cancel:t("cancel"),close:t("Close")};this.icons={warning:alertWarningIcon,"warning-with-cancel":alertWarningIcon,info:alertInfoIcon,help:alertHelpIcon};this["disable-close-on-complete"]=!1}firstUpdated(){this._dialog=this.shadowRoot.querySelector("dialog");/* currently not supported in FF, will be once FF allow shadowDom in the near future. */if(window.dialogPolyfill){window.dialogPolyfill.registerDialog(this._dialog)}this._dialog.addEventListener("cancel",e=>{// Disable default cancel behaviour - we have custom handling in handleKeyUpGlobal.
e.stopPropagation();e.preventDefault()});window.addEventListener("keyup",e=>this.handleKeyUpGlobal(e));this.setAttribute("hidden","");// suppress the native validation bubble
const form=this.querySelector("form");if(form){form.addEventListener("invalid",event=>event.preventDefault(),!0)}}disconnectedCallback(){super.disconnectedCallback();window.removeEventListener("keyup",e=>this.handleKeyUpGlobal(e))}render(){const notificationDialog=this["notification-dialog"],notificationIcon=this.icons[notificationDialog];return html`
      <style>
        .dialog {
          font-family: var(--ptc-font-family);
          border: none;
          background-color: var(--ptc-light-bg);
          color: var(--ptc-black);
          text-align: center;
          border-radius: 20px;
          padding: var(--ptc-dialog-padding, 45px 60px);
          top: var(--ptc-dialog-top, 50%);
          transform: translateY(-50%);
          box-sizing: border-box;
          width: var(--ptc-dialog-width, fit-content);
          height: var(--ptc-dialog-height, fit-content);
          max-width: var(--ptc-dialog-max-width, 75vw);
          max-height: var(--ptc-dialog-max-height, none);
          min-height: var(--ptc-dialog-min-height, none);
          min-width: var(--ptc-dialog-min-width, none);
          margin-left: var(--ptc-dialog-margin-left, auto);
        }

        .dialog.masked:after {
          border-radius: 20px;
          content: '';
          display: block;
          position: fixed;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          background: rgba(250, 250, 250, 0.8);
        }

        .dialog-shadow {
          box-shadow: 4px 6px 8px 4px var(--ptc-black-transparent), -4px 6px 8px 4px var(--ptc-black-transparent);
        }

        .dialog > div {
          display: flex;
        }

        .dialog__container {
          flex-grow: 1;
          overflow: var(--ptc-dialog-container-overflow, unset);
        }

        dialog::backdrop {
          background-color: rgba(130, 130, 130, 0.8);
        }

        .dialog__icon {
          width: 34px;
          height: 34px;
          fill: var(--ptc-warning-color);
          flex-shrink: 0;
          position: relative;
          left: -10px;
          top: -5px;
        }

        .dialog__title {
          display: flex;
          flex-direction: column;
          font-size: 18px;
          font-weight: 600;
          letter-spacing: 1px;
          text-align: var(--ptc-dialog-title-text-align, unset);
          color: var(--ptc-dialog-title-color, var(--ptc-black));
        }

        .notification .dialog__title {
          text-align: left;
        }

        .dialog__close {
          width: 14px;
          height: 14px;
          position: absolute;
          right: 15px;
          top: 15px;
          cursor: pointer;
          fill: var(--ptc-gray-5);
        }

        .dialog__content {
          padding: 15px 0;
        }

        .notification .dialog__content {
          text-align: left;
        }

        .dialog__actions {
          text-align: right;
        }

        button {
          font-family: var(--ptc-font-family);
          background: var(--ptc-btn-bg-color);
          color: var(--ptc-btn-color);
          padding: 10px 16px;
          border-radius: 4px;
          cursor: pointer;
          display: inline-block;
          margin: 5px 0 5px 18px;
          border: 1px var(--ptc-btn-border) solid;
          font-size: 14px;
          font-weight: var(--ptc-font-weight-medium);
          min-width: 64px;
        }

        button.cancel {
          background-color: var(--ptc-btn-bg-secondary-color);
          color: var(--ptc-btn-secondary-color);
          border: 2px solid var(--ptc-gray-2-5);
        }

        button.ok {
          background-color: var(--ptc-dialog-ok-bg-color, var(--ptc-btn-bg-color));
        }

        button[disabled] {
          background-color: var(--ptc-gray-2-5);
          cursor: not-allowed;
        }

        [hidden] {
          display: none;
        }
      </style>
      <dialog
        class="dialog ${this.dialogShadow?"dialog-shadow":""} ${this.masked?"masked":""}"
        @keypress="${e=>this.handleKeyPress(e)}"
        @keyup="${e=>this.handleKeyUp(e)}"
      >
        <div>
          <div class="dialog__icon" ?hidden=${!notificationIcon}>${notificationIcon}</div>
          <div class="dialog__container ${notificationIcon?"notification":""}">
            <div class="dialog__title">
              ${this.dialogTitle}
              <slot name="header"></slot>
            </div>
            <div class="dialog__close" data-tooltip="${this.labels.close}" @click="${()=>this.cancel()}">
              ${closeDialogIcon}
            </div>
            <div class="dialog__content">
              <slot></slot>
            </div>
            <div class="dialog__actions" ?hidden="${this["dialog-actions-hidden"]}">
              <button
                class="cancel"
                @click="${()=>this.cancel()}"
                ?hidden=${notificationDialog&&notificationDialog!==DIALOG_NOTIFICATION_TYPE.WARNING_WITH_CANCEL}
              >
                ${this["cancel-label"]||this.labels.cancel}
              </button>
              <button
                class="ok"
                autofocus
                @click="${()=>this.complete()}"
                ?disabled=${this["action-disabled"]||!this.checkValidity()}
              >
                ${this["action-label"]||this.labels.ok}
              </button>
            </div>
          </div>
        </div>
      </dialog>
    `}/**
     * Launches the dialog, when the dialog is dismissed a boolean value is returned indicating to continue with the operation or not.
     * @param {Boolean} isModal Optional property (default false) to specify a modal backdrop be put in place to stop clicks in the background.
     * @returns {Promise} When resolved, the return value will be true if the OK button is used to dismiss the dialog or false if the cancel button is used.
     */show(isModal=!1){return new Promise((resolve,reject)=>{PTCDialog.stack.push(this);this.checkValidity();this.removeAttribute("hidden");isModal?this._dialog.showModal():this._dialog.show();this._cancelListener=e=>{this["handle-cancel"]().then(result=>{if(result){this._close();resolve(!1)}})};this._completeListener=e=>{if(!this["action-disabled"]&&this.checkValidity()){this["handle-complete"]().then(result=>{if(result){if(!this["disable-close-on-complete"]){this._close()}resolve(!0)}})}else{console.warn("Unable to complete dialog because",this["action-disabled"]?"action disabled":"form is invalid")}};this.addEventListener("cancel",this._cancelListener);this.addEventListener("complete",this._completeListener)})}_removeFromStack(){PTCDialog.stack=PTCDialog.stack.filter(dialog=>dialog!==this)}/**
     * In case where multiple dialogs are open at the same time determine whether this is the top dialog.
     * @returns {Boolean}
     */isTopDialog(){const stack=PTCDialog.stack;return stack.length&&stack[stack.length-1]===this}/**
     * Launches the dialog with the modal backdrop, works the same as show api for behavior
     * @see show
     */showModal(){return this.show(!0)}/**
     * Closes the dialog
     */_close(){// remove listeners each time in case dialog is shown/hidden multiple times
this.removeEventListener("cancel",this._cancelListener);this.removeEventListener("complete",this._completeListener);this.setAttribute("hidden","");this.masked=!1;this._removeFromStack();this._dialog.close()}/**
     * Cancels the dialog (just an alias for cancel)
     */close(){this.cancel()}isOpen(){return this._dialog.open}/**
     * Invoked when the "OK" button is clicked (or enter key pressed)
     */complete(){this.dispatchEvent(new CustomEvent("complete"))}/**
     * Invoked when the cancel button is clicked
     */cancel(){this.dispatchEvent(new CustomEvent("cancel"))}/**
     * Check for Escape key to cancel dialog
     * Global listener on window (v.s. handleKeyUp which is on dialog)
     *
     * @param {Event} e
     *
     * @memberOf PTCDialog
     */handleKeyUpGlobal(e){if(!e._handled&&e.key===KEY.Escape&&this.isTopDialog()){// A hard to spot bug might occur when displaying another dialog as a part of ESC handling of another dialog,
// for instance when displaying clip-cancel-without-saving-audio confirmation dialog, where the new dialog
// will still catch the key event which caused it to appear in the first place, thus making it disappear instantly.
e._handled=!0;e.stopPropagation();e.preventDefault();this.cancel()}}/**
     * Checks form validity to enable/disable the action button
     * Listens to keyup so form values have been updated before checking validity
     * On dialog element (v.s. handleKeyUpGlobal which is on window)
     *
     * @param {Event} e
     */handleKeyUp(e){if(this.isOpen()){this.checkValidity()}}/**
     * Attached to dialog element, checks for Enter key to finish dialog,
     * Listens to keypress in order to cancel the event prior to form submit
     *
     * @param {Event} e
     */handleKeyPress(e){if(this.isOpen()&&e.key===KEY.Enter){// prevent form submit
e.preventDefault();this.complete()}}checkValidity(){const form=this.querySelector("form");this.invalidForm=form?!form.checkValidity():!1;return!this.invalidForm}}// Stack of currently open dialogs.
PTCDialog.stack=[];window.customElements.define("ptc-dialog",PTCDialog);const COMPONENT_STATE_CACHE_KEY="PTC-DISMISSABLE-DIALOG";/**
                                                                    * Modal dialog that has a "Don't show this message again" checkbox
                                                                    * and keeps track of whether it has been dismissed in local storage
                                                                    */class DismissableModal extends LitElement{constructor(){super();const t=window.i18next.t.bind(window.i18next);this.labels={dismissForever:t("dismiss-forever-checkbox-label")}}createRenderRoot(){return this}static get properties(){return{id:{type:String},title:{type:String},messages:{type:Array},/* for backwards compatibility capture-viewer needs to send in its cache key */cacheKey:{type:String}}}/**
     * Shows the dismissable modal with given id if it has not already been dismissed
     *
     * @param {object} config with following properties:
     *
     *   @param {string} id unique id for this dismissable modal,
     *                    result of whether user checked "Don't show again" will be
     *                    stored using this id as cache key
     *   @param {string} title title of the modal
     *   @param {Array<string>} messages one or more messages to display
     *   @param {string} type a DIALOG_NOTIFICATION_TYPE, defaults to INFO
     *   @param {string} actionLabel optional to override default label for ok button
     *   @param {string} cancelLabel optional to override default label for cancel button
     *   @param {string} cacheKey optional - overrides default component cache key,
     *                          only needed by capture-viewer for backward compatibility
     *   @param {string} cacheKey2 optional - overrides using id as the secondary cache key,
     *                           only needed by capture-viewer for backward compatibility
     */static async open({id,title,messages,type,actionLabel,cancelLabel,cacheKey,cacheKey2}){const modal=await this.getInstance();if(modal.isOpen()){console.error(`Cannot open ${id} modal, ${modal.id} modal is already open`);return!1}else{delete modal.dismissed;modal.id=id;modal.title=title;modal.messages=messages;modal.cacheKey=cacheKey||COMPONENT_STATE_CACHE_KEY;modal.cacheKey2=cacheKey2||id;modal.type=type||DIALOG_NOTIFICATION_TYPE.INFO;modal.actionLabel=actionLabel;modal.cancelLabel=cancelLabel;await modal.requestUpdate();if(!modal.wasDismissed()){const ok=await modal.showModal();if(ok&&modal.wasDismissed()){store.dispatch(saveComponentState(modal.cacheKey,{[modal.cacheKey2]:!0},!1))}return ok}return!0}}/** @returns {DismissableModal} a lazily created singleton */static async getInstance(){if(!DismissableModal.modal){DismissableModal.modal=new DismissableModal;document.body.appendChild(DismissableModal.modal);await DismissableModal.modal.requestUpdate()}return DismissableModal.modal}isOpen(){const modal=this.querySelector("ptc-dialog");return modal&&modal.isOpen()}wasDismissed(){if(!this.dismissed){const state=store.getState()||{},componentStateCache=state.app&&state.app[this.cacheKey];this.dismissed=!!(componentStateCache&&componentStateCache[this.cacheKey2])}return this.dismissed}showModal(){return this.querySelector("ptc-dialog").showModal()}render(){if(this.wasDismissed()){return html``}const messageTemplates=(this.messages||[]).map(msg=>html`
        <div class="body-font overflow-ellipsis">${msg}</div>
      `);return html`
      <ptc-dialog
        dialogTitle="${this.title}"
        id="${this.id}"
        class="dismissable-modal"
        notification-dialog="${this.type}"
        action-label="${ifDefined(this.actionLabel)}"
        cancel-label="${ifDefined(this.cancelLabel)}"
      >
        ${messageTemplates}
        <div class="dismissable-modal__checkbox">
          <input type="checkbox" value="false" @change="${e=>this.dismissed=e.target.value}" />
          ${this.labels.dismissForever}
        </div>
      </ptc-dialog>
    `}}window.customElements.define("ptc-dismissable-modal",DismissableModal);var dismissableModal={COMPONENT_STATE_CACHE_KEY:COMPONENT_STATE_CACHE_KEY,DismissableModal:DismissableModal};/* begin copyright text
    *
    * Copyright © 2016 PTC Inc., Its Subsidiary Companies, and /or its Partners. All Rights Reserved.
    *
    * end copyright text
    */ /**
        * Cleanup up descendant video tag elements to not drop network connections
        * @param {DomElement} el
        * @param {String} selector css query selector ie. the default 'video' tag selector
        */function cleanUpVideos(el,selector="video"){el.querySelectorAll(selector).forEach(video=>{video.pause();video.src=""})}/**
   * Some of this may be Chrome specific.
   * @param {Entry} f FileEntry or DirectoryEntry
   * @param {String} path
   * @param {Array<File>} list of descendant files
   */async function traverseFiletree(f,path="",list=[]){return new Promise((resolve,reject)=>{if(f.isFile){f.file(file=>{//Creating an object similar to what the file picker presents
list.push({file:file,webkitRelativePath:path+file.name});resolve(list)})}else if(f.isDirectory){// Get folder contents
var dirReader=f.createReader();let promises=[];dirReader.readEntries(entries=>{for(var i=0;i<entries.length;i++){promises.push(traverseFiletree(entries[i],path+f.name+"/",list))}Promise.all(promises).then(()=>{resolve(list)},reject)})}})}async function getContainerAssetFromDirectory(e){const entry=e.dataTransfer.items[0].webkitGetAsEntry();let files=await traverseFiletree(entry,"");files.name=entry.name;//Used to display as the dropFile.name
files.containerAsset=!0;files.isDirectory=!0;return files}/**
   * Finds all the files in the event which may be a dropped folder/file or a picked folder/file from input type=file
   * @param {Event} e
   */async function getDroppedFiles(e){let files;if(e.dataTransfer){// drop event, the file was dragged/dropped onto the drop target
if(e.dataTransfer.items&&e.dataTransfer.items[0].webkitGetAsEntry&&e.dataTransfer.items[0].webkitGetAsEntry().isDirectory){files=await getContainerAssetFromDirectory(e)}else{files=[...e.dataTransfer.files]}}else{// file input field changed or the user selected a file/folder via the Browse action
files=[...e.currentTarget.files];if(e.currentTarget.webkitdirectory){files.containerAsset=!0;files.isDirectory=!0;if(0<files.length){files.name=files[0].webkitRelativePath.split("/")[0]}}e.currentTarget.value=""}return files}/**
   * @param {Event} event - Click event
   * @param {HTMLElement} menuEl - the menu to check, to see if the click event occured outside of the menu
   * @returns {Boolean} false if the target element on the event matches the given menu element, otherwise if the elements are different true is returned
   */function clickOutsideOfMenu(event,menuEl){return event&&event.target!==menuEl&&event.target.closest("ptc-context-menu")!==menuEl}/**
   * Close any context menus or select list menus that are currently open
   */function closeOpenMenus(exceptions=[]){const contextMenus=document.querySelectorAll("ptc-context-menu[visible]");contextMenus.forEach(menu=>!exceptions.includes(menu.id)?menu.toggleVisibility():"");const selectLists=document.querySelectorAll("ptc-select-list[open]");selectLists.forEach(list=>list.toggleMenu())}/**
   * Attempts to truncate text to fit the element.
   * @param {Element} element the element the text is supposed to fit
   * @param {String} originalText the text to be used instead of the one in element
   * @param {String} [ellipsis]
   */function truncateTextInTheMiddleFromElement(element,originalText=null,ellipsis="..."){originalText=originalText||element.innerText||element.value;return truncateTextInTheMiddle(originalText,getComputedStyle(element).font,element.clientWidth,ellipsis)}/**
   * Attempts to truncate text to fit specified parameters.
   * @param {String} text
   * @param {String} font the font to check the text with
   * @param {Number} maxWidth the width the element is supposed to fit
   * @param {String} [ellipsis]
   */function truncateTextInTheMiddle(text=null,font=null,maxWidth=null,ellipsis="..."){text=text.trim();let width=Math.round(measureTextWidth(text,font));if(width<maxWidth){// Text is already fitting, no need to truncate.
return text}// Using binary search to find the best length;
let truncatedText,lower=0,upper=text.length,current=Math.round(upper/2);while(1<upper-lower){if(upper<=ellipsis.length){return text}truncatedText=truncateTextInTheMiddleToLength(text,current,ellipsis);width=measureTextWidth(truncatedText,font);if(width<maxWidth){lower=current}else{upper=current}// Set current in the mid point between lower and upper.
current=lower+Math.round((upper-lower)/2)}// We could still be slightly exceeding the width, if so fall back to the lower one,
// it is guaranteed to fit at this point so no need to check again.
if(width>maxWidth){truncatedText=truncateTextInTheMiddleToLength(text,lower,ellipsis)}return truncatedText}/**
   * Truncates the text in the middle so that it has the desiredLength.
   * @param {String} text
   * @param {Number} desiredLength
   * @param {String} [ellipsis]
   */function truncateTextInTheMiddleToLength(text,desiredLength,ellipsis="..."){if(text.length<=desiredLength){return text}if(desiredLength<ellipsis.length){return ellipsis}const newLength=desiredLength-ellipsis.length,left=Math.floor(newLength/2),right=left+newLength%2;return text.slice(0,left)+ellipsis+text.slice(text.length-right)}let textMeasuringCanvas=null;//
/**
 * Uses canvas to measure the text width
 * @param {String} text text to be measured
 * @param {String} font font of the rendered text (CSS font parameter can be used)
 */function measureTextWidth(text,font){if(!textMeasuringCanvas){textMeasuringCanvas=document.createElement("canvas")}const context=textMeasuringCanvas.getContext("2d");context.font=font;const metrics=context.measureText(text);return metrics.width}/**
   * @param {*} domElement domElement which should be checked if there is content overflow
   */function isContentOverflown({clientWidth,clientHeight,scrollWidth,scrollHeight}){return scrollHeight>clientHeight||scrollWidth>clientWidth}/**
   * Adds a script tag to the page
   * @param {String} src script path to load
   * @returns Promise that resolves when the script has loaded
   */function addScriptTag(src){let s=document.createElement("script");s.src=src;const promise=new Promise((resolve,reject)=>{s.addEventListener("load",resolve);s.addEventListener("error",err=>{console.error("failed to load script",src,err);reject(err)})});document.body.appendChild(s);return promise}/**
   * Load the THREE lib
   * @param {String} basePath - base path override for unit tests
   */function ensureThreeScriptLoaded(basePath=""){if(!threeLoadPromise){threeLoadPromise=window.THREE?Promise.resolve():addScriptTag(basePath+"node_assets/three/build/three.min.js")}return threeLoadPromise}/**
   * Load the thingview src, which is just the top load file
   */function ensureThingViewScriptLoaded(thingviewPath){if(!thingViewLoadPromise){thingViewLoadPromise=window.ThingView?Promise.resolve():addScriptTag(thingviewPath+"thingview.js")}return thingViewLoadPromise}let thingViewLoadPromise,threeLoadPromise,thingViewInitPromise,thingViewObj={};/**
                        * Initialize thingview, which will download the .wasm file and then resolve when its ready
                        * @param {String} thingviewPath - the base path to the thingview file
                        */async function initializeThingview(thingviewPath){if(!thingViewInitPromise){//Only initialize once
thingViewInitPromise=new Promise((resolve,reject)=>{// TODO: ThingView.init hangs if it fails to load wasm file, it should throw/reject instead
ThingView.init(thingviewPath,()=>{// ThingView.init should only ever be called once in a web page
// TODO - From ThingView 0.41, use SetDefaultSystemPreferences instead of this section
// i.e. ThingView.SetDefaultSystemPreferences(Module.ApplicationType.THINGVIEW);
let thingViewPrefs={ParseNode:{Type:"root",Children:[{Type:"category",Name:"Shape Scene",Children:[{Type:"preference",Name:"Hidden items are unpickable",Value:"true"}]}]}};ThingView.SetSystemPreferencesFromJson(JSON.stringify(thingViewPrefs));//----
const tvApp=ThingView.CreateTVApplication("thingview-app-canvas"),session=thingViewObj.session=tvApp.GetSession();session.EnableCrossSiteAccess(!0);session.EnableFileCache(5e3);const scene=thingViewObj.scene=session.GetActiveTVShapeScene();scene.SetSelectionFilter(Module.SelectionFilter.PART,Module.SelectionList.PRIMARYSELECTION);scene.SetSelectionFilter(Module.SelectionFilter.PART,Module.SelectionList.PRESELECTION);const view=thingViewObj.view=session.GetActiveShapeView();view.SetUpDirection("Y");view.SetDragMode(Module.DragMode.NONE);view.SetAntialiasingMode(Module.AntialiasingMode.SS4X);view.SetNavigationMode(Module.NavMode.VUFORIA_NOPICK);view.SetTopBottomBackgroundColor(1347440895,4294967295);thingViewObj.tvModel=scene.MakeModel();resolve(thingViewObj)})}).catch(err=>{console.error("failed to initialize thingview",err);return Promise.reject(err)})}return thingViewInitPromise}/**
   * Load and initialize thingview
   * @param {String} thingviewPath - the base path to the thingview file to pass into the thingview lib to load more files
   */async function loadAndInitThingView(thingviewPath="node_assets/thingview-node/lib/js/ptc/thingview/"){await ensureThingViewScriptLoaded(thingviewPath);return await initializeThingview(thingviewPath)}function dispatchCustomMenuEvent(eventName,target,clientX,clientY){target.dispatchEvent(new CustomEvent(eventName,{detail:{clientX,clientY},bubbles:!0}))}function escape(text){return window.i18next.t("escape",{text})}function getDisabledOptionByOwnershipTooltip(labelName,userObject){const{displayName,givenName,surname,email}=userObject||{},text=window.i18next.t(labelName,{firstName:escape(givenName||displayName||""),lastName:escape(surname||""),email:escape(email||""),br:"<br />",b:"<b>",endb:"</b>",interpolation:{escapeValue:!1}});return`<div class="multi-line-tooltip">${text}</div>`}var elementUtils={cleanUpVideos:cleanUpVideos,traverseFiletree:traverseFiletree,getContainerAssetFromDirectory:getContainerAssetFromDirectory,getDroppedFiles:getDroppedFiles,clickOutsideOfMenu:clickOutsideOfMenu,closeOpenMenus:closeOpenMenus,truncateTextInTheMiddleFromElement:truncateTextInTheMiddleFromElement,truncateTextInTheMiddle:truncateTextInTheMiddle,truncateTextInTheMiddleToLength:truncateTextInTheMiddleToLength,isContentOverflown:isContentOverflown,addScriptTag:addScriptTag,ensureThreeScriptLoaded:ensureThreeScriptLoaded,ensureThingViewScriptLoaded:ensureThingViewScriptLoaded,initializeThingview:initializeThingview,loadAndInitThingView:loadAndInitThingView,dispatchCustomMenuEvent:dispatchCustomMenuEvent,escape:escape,getDisabledOptionByOwnershipTooltip:getDisabledOptionByOwnershipTooltip};async function generateUniqueName(file){const hash=await getFileHash(file),sanitized="_"+hash.replace(/[^a-z0-9]/gi,"_"),ext=getFileExtension(file.name);// Hash may contain / + and = chars which would not be enjoyed by sxsl parser.
return sanitized+(ext&&"."+ext)}function getFileExtension(fileName){if(fileName){const dotIndex=fileName.lastIndexOf(".");if(0<dotIndex){return fileName.slice(dotIndex+1)}}return null}/**
   * Checks if uploaded capture organization matches the current user ogranization
   * @param {Object} fileData CaptureData extracted from the files
   * @returns {boolean} true if the organization ids don't match
   */function shouldShowLocationWarning(fileData){const appState=store.getState().app,fileOrgID=fileData&&fileData.data&&fileData.data.OrgID;// Do not show warning if the capture has no org ID (e.g. RealWear capture)
if(!fileOrgID||!appState.organization){return!1}return fileOrgID!==appState.organization.id}/**
   * Validate type of given files
   * TODO: rename API, it doesn't check file extension
   *
   * @param {Array<object>|object} files dragged and dropped on the asset browser that are to be uploaded,
   *                        each expected to have a type such as 'image/png'
   *                        (NOTE - this is not used for validating files inside the capture zip, those zip file objects do not have a type property)
   * @param {ASSET_TYPE} type optional type such as image, video, or capture - if none given default regex will match any image or video
   * @returns {boolean} true if files have a the given type, or if files is a directory, false otherwise
   */function validateFileExtension(files,type){let regex=SUPPORTED_FILE_TYPES_REGEX[type]||SUPPORTED_FILE_TYPES_REGEX.default;if(Array.isArray(files)){if(type===ASSET_TYPE.MODEL){//3d assets are coming in with no file type, perhaps it would with the right software installed?
regex=SUPPORTED_FILE_EXTENSIONS_REGEX[type];return!files.find(file=>!regex.test(file.name))}return files.isDirectory||!files.find(file=>!regex.test(file.type))}else{return!type&&!files.type||regex.test(files.type)}}/**
   * @param {Object} publishInfo - metadata information about the publish information
   * @returns {Boolean} true if the publishInfo indicates the procedure is published
   */function isPublished(publishInfo){return!!(publishInfo&&publishInfo.url)}/**
   * Gets the thumbnail of the procedure.
   * @param {PEProcedure} procedure
   * @returns {string} thumbnail url
   */function getThumbnail(procedure){if(procedure&&procedure.thumbnail){let t=procedure.thumbnail,cachebuster="?cb="+Date.now();//cachebuster suffix to force thumbnail refreshing
if("string"===typeof t&&t.startsWith("/")){t=baseURL+t}return t+cachebuster}return"images/default-procedure-thumbnail.svg"}async function showDeleteConfirmationDialog(procedure){const t=window.i18next.t.bind(window.i18next);return DismissableModal.open({id:"delete-procedure",type:DIALOG_NOTIFICATION_TYPE.WARNING_WITH_CANCEL,title:t("delete-confirmation-title"),messages:[unsafeHTML(t("delete-confirmation-text1",{procedure:"<b>"+escape(procedure.title)+"</b>",interpolation:{escapeValue:!1}})),t("delete-confirmation-text2")],actionLabel:t("delete-button")})}async function showCopyModal(event){await import("./procedure-create.js").then(bundle=>bundle&&bundle.$procedureCreate||{});const procedureId=event.detail?event.detail.procedureId:event.id,procedureTitle=event.detail?event.detail.procedureTitle:event.title;await document.querySelector("ptc-procedure-create").showCopyModal(procedureId,procedureTitle)}var procedureHelper={generateUniqueName:generateUniqueName,shouldShowLocationWarning:shouldShowLocationWarning,validateFileExtension:validateFileExtension,isPublished:isPublished,getThumbnail:getThumbnail,showDeleteConfirmationDialog:showDeleteConfirmationDialog,showCopyModal:showCopyModal};const convertMovieTimeStr=str=>{if(!str){return 0}let tokens=str.split(":");return parseFloat(60*(60*tokens[0]),10)+parseFloat(60*tokens[1],10)+parseFloat(tokens[2],10)},convertNumberToMovieTimeStr=num=>{return new Date(1e3*num).toISOString().substr(11,8)},convertNumberToMovieTimeStrWithMilliseconds=num=>{return new Date(1e3*num).toISOString().substr(11,12)};/**
    * converts time in seconds number to a date-ish time format of "hh:mm:ss"
    * @param {Number} num of seconds
    * @returns {String}  Date like format of the value in "hh:mm:ss"
    */class TimelineEntry{constructor(entry,correctionOffset){/* original is the raw data from the timing.json */this._original=entry;this._correctionOffset=correctionOffset||0}/**
     * @returns {Number} time in seconds adjusted to remove "dead time"
     */getTime(){if(!this._time){this._time=convertMovieTimeStr(this._original.timeStamp)-this._correctionOffset}return this._time}}/**
   * Beware, the CaptureStep is not fully initialized until the
   * _videoStartTime, _videoEndTime, and _totalStepTime have been set
   */class CaptureStep{constructor(step,stepNumber,orgId){/* original is the raw data from the timing.json */this._original=step;this.stepNumber=stepNumber;this.id=step.StepGUID.Value;this._orgId=orgId;this._mediaAssets=[]}getVideoName(){const videoPath=this._original.VideoPath;return videoPath.substring(videoPath.lastIndexOf("/")+1)}/**
     * Step may not have a valid video (e.g. due to crash video is unplayable)
     * @returns {boolean} true if step video seems to be valid, false otherwise
     */hasValidVideo(){return!1!==this._original.ValidStep&&!!this._original.VideoPath&&"00:00:00"!==this._original.endTimeStamp&&("00:00:00"!==this._original.beginTimeStamp||1===this.stepNumber)&&2<=this.getOriginalTotalTime()&&!this._invalidVideo}getTimelineEntries(){if(!this.timelineEntries){const correctionOffset=this.getOriginalStartTime()-this.getStartTime();this.timelineEntries={bookmarks:this._original.Bookmarks.map(entry=>new TimelineEntry(entry,correctionOffset)),pictures:this._original.Pictures.map(entry=>new TimelineEntry(entry,correctionOffset)),locations:this._original.lastAnchorTimeStamp?[new TimelineEntry({timeStamp:this._original.lastAnchorTimeStamp},correctionOffset)]:[]}}return this.timelineEntries}/**
     * @returns {Number} original start time including any "dead time"
     */getOriginalStartTime(){if(!this.startTime){this.startTime=convertMovieTimeStr(this._original.beginTimeStamp)}return this.startTime}/**
     * @returns {Number} original end time including any "dead time"
     */getOriginalEndTime(){if(!this.endTime){this.endTime=convertMovieTimeStr(this._original.endTimeStamp)}return this.endTime}/**
     * @returns {Number} start time in seconds adjusted to remove "dead time"
     */getStartTime(){return this._videoStartTime}/**
     * @returns {Number} end time in seconds adjusted to remove "dead time"
     */getEndTime(){return this._videoEndTime}getTotalStepTime(){return this._totalStepTime}/**
     * @returns {Number} total step time in seconds
     */getOriginalTotalTime(){return this.getOriginalEndTime()-this.getOriginalStartTime()}/**
     * @param {CMSAsset} asset
     */addMediaAsset(asset){this._mediaAssets.push(asset)}/**
     * @returns {Array<CMSAsset>} pictures and videos for this step
     */getMediaAssets(){return this._mediaAssets}/**
     * @param {string} orgId currently active org
     * @returns {string} location if given org matches org of the original capture, else undefined
     *
     * @memberOf CaptureStep
     */getLocation(orgId){if(orgId&&orgId===this._orgId){return this._original.SemanticLocation&&this._original.SemanticLocation.ASATarget&&this._original.SemanticLocation.ASATarget.CloudAnchorID}return void 0}}/**
   * Determines if the file is a Capture File (zip file or directory)
   * @param {Object} file - Dropped/picked file for import
   */function isCaptureFile(file){return validateFileExtension(file,ASSET_TYPE.CAPTURE)}/**
   * Data from a capture session
   *
   * Must be initialized after construction
   */class CaptureData{/**
   * Creates an instance of CaptureData.
   * @param {object} activeCapture an object from redux state when viewing existing capture
   *                   or a CMSAsset when creating a new capture
   * @param {Array<CMSAsset>} assetsArray assets in the capture or an empty array if it has no assets yet,
   *                   only passed in when creating a new procedure from capture
   */constructor(activeCapture,assetsArray){this._activeCapture=activeCapture||{};// id = name of the CMSAsset = capture's GUID from timings file
this.id=this._activeCapture.name;this._timingData={Steps:[]};this._assetsMap=new Map;this._mediaAssets=[];this.title=this._activeCapture.metadata?this._activeCapture.metadata.title:"";this._assetsArray=assetsArray;this.hasInvalidStepsInitially=!1;this._initializeAssets()}/**
     * Fetches the capture data if necessary and initializes capture steps from it
     * @param {object} timingData optional timing.json content to avoid a fetch
     *          its already known while creating new capture, no reason to fetch it
     */async initialize(timingData){if(timingData){this._timingData=timingData}this.steps=[];// reset steps so initialize is benign to call multiple times
await this._inflateCaptureContent();this._initializeAssets();await this._inflateTimingContent();this._extractDataFromCapture(this._timingData);const captureData=this;this._assetsArray.forEach(asset=>{// the single video that represents the entire capture, combined from all the individual step videos
if(asset.metadata&&"capture-video"===asset.metadata.subtype){captureData.combinedVideoUrl=asset.url}// the sprite image for the combined video, it's generated from the combined video
if(asset.metadata&&"sprite"===asset.metadata.subtype){captureData.spriteUrl=asset.url}// the vtt file for the sprite image, it's generated from the combined video
// the vtt file contains the image to display within in the sprite image, at a given location/point in time in the video
if(asset.metadata&&"vtt"===asset.metadata.subtype){captureData.vttUrl=asset.url}})}/**
     * Total video time with 'dead time' removed
     */getTotalTime(){return this._totalSessionTime||0}/**
     * Get elapsedTime from the capture data,
     * this elapsed time includes some small amount of 'dead time' between steps
     */getElapsedTime(){return convertMovieTimeStr(this._timingData.elapsedTime)}/**
     * @param {int} index index of capture step
     * @returns {CaptureStep} a step of the capture
     * @memberOf CaptureData
     */getStep(index){return this.steps[index]}/**
     * @param {string} id
     * @returns {CaptureStep} step with the given id, or undefined if no such step
     * @memberOf CaptureData
     */getStepFromId(id){return this.getSteps().find(s=>s.id===id)||void 0}/**
     * returns the step where the time occurs between its start and end time.
     * @param {Number} t - time to find the step
     * @returns {CaptureStep} - Step for which the time is found in,
     *                          or last step if no such step found
     */getStepFromTime(t){const steps=this.getSteps();let resultStep=steps.find(step=>{return step.hasValidVideo()&&t>=step._videoStartTime&&t<step._videoEndTime});if(!resultStep){resultStep=steps[steps.length-1]}return resultStep}/**
     * @returns {Array<CaptureStep>} an array of capture steps
     * @memberOf CaptureData
     */getSteps(){return this.steps||[]}/**
     * @param {CaptureStep} step
     * @return {Array<object>}
     */getMediaAssets(){return this._mediaAssets}/**
     * After adding more assets, redo initialize() before using other APIs such as getProcedureSteps()
     * @param {CMSAsset} asset
     */addAsset(asset){if("media"===asset.getMetadata().category){asset.getMetadata().title=getStrippedAssetTitle(asset.getName());this._mediaAssets.push(asset)}this._assetsMap.set(asset.name,asset)}/**
     * Get an asset contained within the capture, or the capture asset itself
     * @param {string} assetName optional, if given an asset inside the capture is returned,
     *                           if undefined the capture asset itself is returned
     * @returns {CMSAsset}
     */getAsset(assetName){return assetName?this._assetsMap.get(assetName):this._activeCapture}/**
     * Get the Capture organization id
     * @returns {string} the Capture organization id
     */getOrganizationId(){return this._timingData.OrgID}/**
     * @returns {Array<CaptureStep>} all steps that have invalid videos
     */getInvalidSteps(){return this.getSteps().filter(s=>!s.hasValidVideo())}/**
     * Get the capture GUID (WorkflowGUID.Value) from timings file
     */getCaptureGUID(){return this._timingData.WorkflowGUID.Value}/**
     * Need timing based on video durations for timing accuracy when showing the
     * combined SD quality video
     * @returns {boolean}
     */hasAccurateTimingForCombinedVideo(){return!!this._usingDurationTiming}/**
     * @returns {boolean} true if there is an SD quality video available to use, false otherwise
     */isSdQualityAvailable(){return!!this.combinedVideoUrl&&this.hasAccurateTimingForCombinedVideo()}/**
     * Fetches the capture content
     */async _inflateCaptureContent(){if(!this._assetsArray){const assets=await fetchAssets("assets/"+this._activeCapture.name);this._assetsArray=assets?assets:[]}}/**
     * Initializes the map of assets from the capture content
     */_initializeAssets(){if(!this._assetsMap.size&&this._assetsArray){for(let asset of this._assetsArray){this.addAsset(asset)}}}/**
     * Fetches the timings.json content
     */async _inflateTimingContent(){if(!this._timingData.Steps.length){for(let asset of this._assetsMap.values()){if("timing"===asset.getMetadata().category){// Timing.json will be updated as part of post-processing
// so avoid the CDN cache (via header) and browser cache (via query param cache buster)
const customOptions={headers:{"x-no-cdn":!0}},assetData=await fetchAssetByUrl(asset.url+"?cb="+Date.now(),customOptions);this._timingData=JSON.parse(assetData.data)}}}}/**
     * Extracts steps and associates a list of pictures & videos for each step
     */_extractDataFromCapture(timingData){console.debug("Capture timing data",timingData);if(!this.steps){this.steps=[]}//elapsedTime is longer than all steps combined due to the 'dead time' explained below
this._totalSessionTime=0;let validSteps=[],prevOrigStepEndTime=0;//Last step's end time, to check that start time is valid
timingData.Steps.forEach((step,index)=>{const captureStep=new CaptureStep(step,index+1,timingData.OrgID);let startTime=captureStep.getOriginalStartTime(),endTime=captureStep.getOriginalEndTime();// if the times are funky, make sure step is marked as having invalid video
if(startTime<prevOrigStepEndTime||endTime<startTime){console.warn(`Unexpected timestamps for step ${captureStep.stepNumber} ${captureStep.id}`);captureStep._invalidVideo="unexpected-timestamps"}this.steps.push(captureStep);if(step.Pictures){step.Pictures.forEach(pic=>{this._mediaAssets.forEach(asset=>{const imageName=asset.url.substring(asset.url.lastIndexOf("/")+1);if(pic.PicturePath.includes(imageName)||asset.url.includes(pic.PictureGUID.Value)){asset.stepNumber=index+1;captureStep.addMediaAsset(asset)}})})}if(captureStep.hasValidVideo()){const videoName=captureStep.getVideoName(),asset=this._mediaAssets.find(asset=>{return asset.url.includes(videoName)});if(asset){captureStep.videoUrl=asset.url;asset.stepNumber=index+1;captureStep.addMediaAsset(asset);validSteps.push(captureStep);prevOrigStepEndTime=endTime}else{// if no capture assets have been uploaded yet its expected that the videos are 'missing',
// but manually edited, corrupted, or partially uploaded captures may contain bad data or missing videos.
if(this._assetsMap.size){console.warn(`Could not find video for step ${captureStep.stepNumber} by the name ${videoName}`)}captureStep._invalidVideo="missing-from-CMS"}}else{console.warn(`Video for step ${captureStep.stepNumber} ${captureStep.id} is invalid`);this.hasInvalidStepsInitially=!0}});this._usingDurationTiming=!1;// As part of post-processing, the actual durations of step videos will be added to the Timing.json.
// If present, use that for better accuracy (esp. when using the combined proxy video).
if(timingData.durations){// Use durations if every valid video has a duration
this._usingDurationTiming=validSteps.every(captureStep=>{return!!timingData.durations[captureStep.getVideoName()]});if(!this._usingDurationTiming){console.warn("Found durations in Timing data, but not all valid videos have a duration")}}if(this._usingDurationTiming){this.calculateStepTimesFromDurations(validSteps,timingData.durations)}else{this.calculateStepTimesFromTimestamps(validSteps)}}/**
     * Calculates step start/end times and total time for capture steps,
     * based on timestamps from the Timing.json.
     *
     * @param {CaptureStep[]} captureSteps Steps to calculate start/end/total times
     */calculateStepTimesFromTimestamps(captureSteps){// Need to find the video time without the time between steps where nothing happens,
// the total video time is just the total of each step elapsed time
//  |--- step 1 --- | (dead time) | --- step 2 --- |  (dead time)
//  <--- video (step1, step2, step3) ----> no dead time
let accumulatedDeadTime=0,prevOrigStepEndTime=0;//Last steps end time, to see if the next step starts right away or later
captureSteps.forEach(captureStep=>{const startTime=captureStep.getOriginalStartTime(),endTime=captureStep.getOriginalEndTime();accumulatedDeadTime+=startTime-prevOrigStepEndTime;//This should be ideally 0
captureStep._videoStartTime=startTime-accumulatedDeadTime;//Cached converted number from string
captureStep._videoEndTime=endTime-accumulatedDeadTime;//Cached converted number from string
captureStep._totalStepTime=endTime-startTime;this._totalSessionTime+=captureStep._totalStepTime;prevOrigStepEndTime=endTime})}/**
     * Calculates step start/end times and total time for capture steps,
     * based on video durations rather than timestamps from the Timing.json.
     *
     * @param {CaptureStep[]} captureSteps Steps to calculate start/end and total times
     * @param {Object} durations Durations from Timing.json. Expected to be in format
     * {
     *   <video-name>: <duration-in-seconds>,
     *   <video-name>: <duration-in-seconds>,
     *   ...
     * }
     *
     * Example:
     * {
     *   "Step-1_72b63f70-c960-495c-97f4-41ed49c9e3af.mp4": 20.745,
     *   "Step-2_f17cbc5d-c77e-4c8a-971c-a6cfdce626f9.mp4": 61.306,
     *   ...
     * }
     */calculateStepTimesFromDurations(captureSteps,durations){let prevCorrectedStepEndTime=0;captureSteps.forEach(captureStep=>{const duration=durations[captureStep.getVideoName()];captureStep._videoStartTime=prevCorrectedStepEndTime;captureStep._videoEndTime=prevCorrectedStepEndTime+duration;captureStep._totalStepTime=duration;this._totalSessionTime+=captureStep._totalStepTime;prevCorrectedStepEndTime=captureStep._videoEndTime})}/**
     * @param {string} orgId org id of procedure used to determine whether
     *                       to use or ignore the location data from the capture
     * @returns {Array<object>} array of steps to be added into a procedure
     * @memberOf CaptureData
     */getProcedureSteps(orgId){const steps=[];this._timingData.Steps.forEach((stepCaptureData,stepIndex)=>{const captureStep=this.getStep(stepIndex),stepId=captureStep.id,assets=[],mediaAssets=captureStep.getMediaAssets();mediaAssets.forEach(asset=>{if(asset.getMetadata().subtype===ASSET_TYPE.IMAGE){// only copy of image assets to the procedure (DT-21345)
assets.push({name:asset.getName(),url:asset.url,type:asset.getMetadata().subtype,category:asset.getMetadata().category})}});const step={id:newStepId(),fromGUID:stepId,description:stepCaptureData.Title||"",assets:assets},location=captureStep.getLocation(orgId);if(location){step.location=location;step.locationAware=!0}else{console.warn(`Skip creation of ssg data since current org id ${orgId} does not match capture's org id ${this._timingData.OrgID}`)}steps.push(step)});return steps}/**
     * Determine if assets has been added after creation
     * @returns {boolean}
     */assetsAddedAfterCreation(){return this._assetsMap.size>this._assetsArray.length}getApplicationLaunchEventData(){if(!this._timingData["Application Launch"]){return null}return this._timingData["Application Launch"]}getApplicationLaunchUUID(){return(this.getApplicationLaunchEventData()||{}).application_launch_uuid}}var captureHelper={convertMovieTimeStr:convertMovieTimeStr,convertNumberToMovieTimeStr:convertNumberToMovieTimeStr,convertNumberToMovieTimeStrWithMilliseconds:convertNumberToMovieTimeStrWithMilliseconds,CaptureStep:CaptureStep,isCaptureFile:isCaptureFile,CaptureData:CaptureData};/* begin copyright text
    *
    * Copyright © 2016 PTC Inc., Its Subsidiary Companies, and /or its Partners. All Rights Reserved.
    *
    * end copyright text
    */ /**
        * Meant to work with WorkerPipe where it serves as an inflow or an outflow buffer.
        * Will notify listeners when it's been changed, and allows WorkerPipe to monitor its max capacity.
        */class WorkQueue{/**
   * @param {Number} preferredCapacity the max size of the queue which workers will try to respect.
   *  Note that this does not prevent anybody from adding more items using enqueue. Can be null
   *  to indicate no max capacity.
   */constructor(preferredCapacity=null){this._items=[];this._listeners=[];this._preferredCapacity=preferredCapacity;this._closed=!1;this._cancelled=!1}/**
     * @param {Object|Array<Object>} item or an array of items to be added to the queue
     */enqueue(item){if(this._cancelled){return}if(this._closed){throw new Error("Cannot add any more items to a closed queue")}if(Array.isArray(item)){this._items.push(...item)}else{this._items.push(item)}this._notify()}/**
     * Takes and removes first item from the queue.
     * @returns {Object}
     */dequeue(){if(0<this._items.length){const item=this._items.splice(0,1)[0];this._notify();return item}return null}/**
     * Takes first item from the queue without removing it.
     * @returns {Object}
     */peek(){return this._items[0]}/**
     * Add a listener which will be notified when an item is added or removed from the queue.
     * @param {Function} listener
     */addListener(listener){this._listeners.push(listener);return listener}_notify(){for(const listener of this._listeners){listener(this)}}isEmpty(){return 0===this._items.length}get size(){return this._items.length}get items(){return this._items}/**
     * Closes the queue.
     * @see isClosed
     */close(){this._closed=!0;this._notify()}cancel(){this._items=[];this._cancelled=!0;this.close()}/**
     * Closed queue will not accept any more items, remaining items are unaffected though.
     * @returns {Boolean}
     */isClosed(){return this._closed}isCancelled(){return this._cancelled}/**
     * Pipe becomes drained when it is closed and no longer has any remaining items.
     * @returns {Boolean}
     */isDrained(){return this._closed&&0===this._items.length}/**
     * @param {Number} extraCount the count of the items that will be added to the queue
     * @param {Function} [getItems] optional, and unused in the base implementation. Can be used
     * in overriding function to retreive actual work items that would be added to the queue.
     * @returns {Boolean} true if adding one more item to the queue would result in exceeding its preferred capacity.
     * When capacity is Falsy than it is assumed it does not have a preferred capacity.
     */willExceedCapacity(extraCount,getItems){return this._preferredCapacity&&this._items.length+extraCount>this._preferredCapacity}}/**
   * WorkerPipe will be consuming items from the inQueue as they become available and outputting
   * results into the outQueue, respeciting its capacity - so it will not work faster then the
   * out queue's capacity allows.
   * Pipe can spawn multiple workers and perform some of the work in pararell if configured to do so.
   */class WorkerPipe{/**
   * WorkerPipe will be consuming items from the inQueue as they become available and outputting
   * results into the outQueue.
   * @param {WorkerQueue} inQueue pipe will be taking work from here
   * @param {WorkerQueue} outQueue pipe will be putting results here, can be null
   * @param {Function} worker the function that will perform the work, it should be async
   */constructor(inQueue,outQueue,worker){this._inQueue=inQueue;this._outQueue=outQueue;this._worker=worker;this._maxParallelWorkers=1;this._workers=[];this._drained=!1;this._spawning=!1;this._drainedPromise=new Promise((resolve,reject)=>{this._resolveDrained=resolve;this._rejectDrained=reject});// This will listen for new work being added to the in queue, so we can start processing it.
this._inQueue.addListener(this._spawnWorkersIfNeeded.bind(this));if(this._outQueue){// We are listening on the out queue to monitor its capacity - we cannot continue
// working when out queue is filled up.
this._outQueue.addListener(this._spawnWorkersIfNeeded.bind(this))}// In queue could have already been filled up before this pipe was constructed.
this._spawnWorkersIfNeeded()}/**
     * Sets the limit of the parallel workers that can be spawned to process items entering the pipe.
     * @param {Number} maxCapacity
     */setMaxParallelWorkers(maxCapacity){this._maxParallelWorkers=maxCapacity;this._spawnWorkersIfNeeded();return this}_spawnWorkersIfNeeded(){if(!this._spawning&&!this._drained){this._spawning=!0;setTimeout(()=>{this._doSpawnWorkersIfNeeded();this._spawning=!1})}}_doSpawnWorkersIfNeeded(){if(this._drained){return}if(0===this._workers.length&&this._inQueue.isDrained()){// It turns out that all work has already been completed and the in queue is drained already.
// Nothing left to do for the pipe apart from becoming drained.
this._setAsDrained();return}let spawning=!0;while(spawning){spawning=!1;// Only spawn if worker limit is not reached...
if(this._workers.length<this._maxParallelWorkers){// ...and there is actually work to do and we are not exceeding out queue capacity.
const work=this._inQueue.peek();if(work&&!this._willExceedOutCapacity(work)){this._inQueue.dequeue();// Actually remove the work item now that we know we will handle it.
this._spawnWorker(work);spawning=!0;// We might need more workers still, so keep spawning.
}}}// Idle notification for unit tests.
if(0===this._workers.length&&this._onIdle){this._onIdle()}}_spawnWorker(work){// Each worker is only meant to process one piece of work, after that it will quit,
// and a new one can be spowned if needed.
const workerHandle={work};this._workers.push(workerHandle);setTimeout(async()=>{try{// Do the actual work here, and pass the result to out queue if it's defined.
const result=await this._worker(work);if(result&&this._outQueue){this._outQueue.enqueue(result)}}catch(e){// Aborting all other work when an error occurs.
this._setAsDrained(e)}// Notify the inQueue too as well, in case previous pipe was waiting for this pipe to become free.
// Mostly needed for willExceedCapacity overrides.
this._inQueue._notify();// After its work is done the worker quits, another one may be spawned to process another work item.
this._workers.splice(this._workers.findIndex(worker=>worker===workerHandle),1);if(this._inQueue.isDrained()){if(0===this._workers.length){// Only set this pipe as drained when no work is left in progress.
this._setAsDrained()}}else{// If inQueue is drained no point in spawning any more workers.
this._spawnWorkersIfNeeded()}})}_setAsDrained(error=null){this._drained=!0;this.error=error;if(this._outQueue){// Notify the outQueue that it will not receive any more items.
// This will in turn allow other pipes to become drained when they are ready.
this._outQueue.close()}if(error){this._rejectDrained(error)}else{this._resolveDrained()}}// Pipe will not to work so fast so as to fill the out queue beyond it's capacity.
_willExceedOutCapacity(newWork){// getItems lambda is a for lazy evaluation of the work items that will be added to the outQueue.
// It's lazy because in the base implementation getItems is not used at all, it can be used
// for more advanced checks.
const getItems=()=>[...this._workers.map(worker=>worker.work),newWork];return this._outQueue&&this._outQueue.willExceedCapacity(this._workers.length+1,getItems)}/**
     * Pipe becomes drained when the inQueue is drained and all workers completed their tasks.
     * If an error occurs, pipe will become drained prematurely.
     * @returns {Boolean}
     */isDrained(){return this._drained}/**
     * Returns a promise which resolves when this pipe becomes drained, or an error occurs.
     * The primary way of waiting for a pipe to complete all its work.
     * @see isDrained
     * @returns {Promise}
     */whenDrained(){return this._drainedPromise}/**
     * @returns the work items that are currently being processed by this pipe.
     */getInProgressItems(){return this._workers.map(worker=>worker.work)}get workerCount(){return this._workers.length}isIdle(){return 0===this._workers.length}}var WorkerPipe$1={WorkQueue:WorkQueue,WorkerPipe:WorkerPipe};async function getZipUtility(){return new Promise(function(resolve,reject){if(!window.JSZip){let head=document.head,script=document.createElement("script");script.src="node_assets/jszip/dist/jszip.min.js";script.onload=function(){resolve(window.JSZip)};script.onerror=reject;head.appendChild(script)}else{return resolve(window.JSZip)}})}/**
   * Gets the jsZip instance for the file, adding the library if needed.
   * @param {File} file browser file object
   */async function getZipData(file){let result={data:{Steps:[]},type:"zip",fileHelper:{}},jszip=await getZipUtility();if(file){let zip=new jszip;zip=await zip.loadAsync(file);result.fileHelper=zip;let keys=Object.entries(zip.files),i=keys.length;while(i--){let key=keys[i],name=key[0];if(name.includes("Timings")&&name.endsWith(".json")){let data=await zip.file(name).async("text");try{result.data=JSON.parse(data);result.fileHelper.shouldUpload=_getShouldUpload(result.data)}catch(e){console.log("Parse error",e)}}}}return result}/**
   * Gets the timing data and wraps the file in a api wrapper that allows interacting with the drop file
   * as a jsZip or folder
   * @param {Array<File>} files browser object that is the dropped data, or picked data in input file picker
   */async function getDropFileData(files){let file;if(!files){return!1}if(Array.isArray(files)&&1===files.length){file=files[0];file=getUnwrappedFile(file)}else{file=files}if(file&&file.name&&file.name.endsWith("zip")){return await getZipData(file)}else if(files&&1<files.length){//Handle Directories
let result=new FolderWrapper(files);return await result.getCaptureData()}else{throw new Error("File type not supported");//Will trigger appropriate error
}}/**
   * Looks up the actual zip file from a partial name
   * as the Timings.json stores an actual file system path, rather than a relative path in the zip.
   * @param {JSZip} captureFile
   * @param {String} nameGUID (i.e. Step-1_Img-1_594bb181-8149-4c92-8888-b9236cf1b97d)
   */function findZipFileEntry(captureFile,nameGUID){let result=Object.entries(captureFile.files).find(function(key){let name=key[0];return name.includes(nameGUID)});return result?result[0]:void 0}/**
   * get the file object from different possible source objects/wrappers
   * In particular, the browser FileEntry wrapper
   * @param {Object} f (File or FileEntry)
   */function getUnwrappedFile(f){return f.file||f}/**
   * Allows a capture folder to appear more like the zip instance
   * as both will contain and expose a list of contained files
   */class FolderWrapper{constructor(files){this.files=files}async getCaptureData(){let result={},timingFilesCount=0;for(let i=0;i<this.files.length;i++){const f=this.files[i],timingsRegex=/^[^/]+\/Timings\/Timing[^/]*\.json$/;// Timings file path must be <capture>/Timings/Timing<guid>.json
if(f.webkitRelativePath.match(timingsRegex)){timingFilesCount++;result.data=JSON.parse((await this.getDataFromFile(getUnwrappedFile(f))));result.fileHelper=this;result.fileHelper.shouldUpload=_getShouldUpload(result.data);result.type="folder"}}if(1!==timingFilesCount){throw new Error("Folder did not contain exactly 1 capture to upload")}return result}/**
     * Gets the text data from a file
     * @param {File} f - File to open based on browser File instance to File on disk, (Note, does not handle jsZip fileEntry instances)
     */async getDataFromFile(f){return new Promise((resolve,reject)=>{const reader=new FileReader;reader.onload=function(e){resolve(e.target.result)};reader.onerror=reject;reader.readAsText(f)})}/**
     * Get an array of file names
     * @param {String} name
     * @returns {Array<String>}
     */_getFileNames(){return this.files.map(item=>{return item.webkitRelativePath})}/**
     * Get a file by its name (mimics the jszip api)
     * @param {String} name
     * @returns {File} file
     */file(name){let f=this.files.find(item=>{return item.webkitRelativePath===name});return getUnwrappedFile(f)}}/**
   * Helper to create shouldUpload func for both JSZip and FolderWrapper
   *
   * @param {object} timingData capture timing json
   * @returns {function} for determining whether to upload a file from the capture
   */const _getShouldUpload=timingData=>{let skipUploadList=[];const steps=timingData&&timingData.Steps?timingData.Steps:[];steps.forEach((step,index)=>{const captureStep=new CaptureStep(step,index+1);if(!captureStep.hasValidVideo()&&step.VideoPath){skipUploadList.push(step.VideoPath.substring(step.VideoPath.lastIndexOf("/")+1))}});/**
       * Skip upload of directories, anchors, files that start with '.',
       * files with 0 size, and videos that are corrupt or have messed up timestamps
       *
       * @param {Object} file file from FolerWrapper or JSZip
       * @returns true if asset should be uploaded, false otherwise
       */return file=>{if(!file||!file.name||file.dir){// Exclude directories.
return!1}else if(!getFileSize(file)){// 0 length files fail to upload "net::ERR_REQUEST_RANGE_NOT_SATISFIABLE"
return!1}const assetName=file.name.substring(file.name.lastIndexOf("/")+1);if(!SUPPORTED_FILE_EXTENSIONS_REGEX.expectedCaptureFiles.test(assetName)){return!1}return!skipUploadList.includes(assetName)}};/**
    * Gets the size from file object or jszip file entry object in bytes
    * @param {Object} f a file from a folder upload (has size) or a file from zip upload (has uncompressedSize)
    */function getFileSize(f){// directories don't have size
if(f.dir){return 0}return f.size||f._data&&f._data.uncompressedSize||0}var zipHelper={getZipUtility:getZipUtility,getZipData:getZipData,getDropFileData:getDropFileData,findZipFileEntry:findZipFileEntry,getUnwrappedFile:getUnwrappedFile,FolderWrapper:FolderWrapper,_getShouldUpload:_getShouldUpload,getFileSize:getFileSize};const initializeCaptureData=async timingData=>{const captureData=new CaptureData({},[]);try{await captureData.initialize(timingData)}catch(e){console.error("failed to initialize capture data",timingData,e)}return captureData},gatherCaptureMetrics=async(captureData,orgId)=>{let metrics={};try{const _metrics={captureDurationSeconds:captureData.getElapsedTime(),bookmarkCount:0,locationCount:0,pictureCount:0,invalidStepCount:0,stepCount:captureData.getSteps().length};captureData.getSteps().forEach(step=>{const entries=step.getTimelineEntries();_metrics.bookmarkCount+=entries.bookmarks.length;_metrics.pictureCount+=entries.pictures.length;if(step.getLocation(orgId)){_metrics.locationCount++}if(!step.hasValidVideo()&&"missing-from-CMS"!==step._invalidVideo){_metrics.invalidStepCount++}});if(captureData.getApplicationLaunchUUID()){_metrics.application_launch_uuid=captureData.getApplicationLaunchUUID()}metrics=_metrics}catch(e){console.error("failed to gather analytics from capture data",captureData,e)}return metrics},getCaptureUploadEvent=async({captureId,correlationId,orgId,captureSize,duration,captureData})=>{let result={action:"capture-upload",targetId:captureId,correlationId,orgId,sizeBytes:captureSize,durationMS:duration,...(await gatherCaptureMetrics(captureData,orgId))};return result};/**
    * @param {object} timingData capture's timing.json data
    * @param {string} orgId the org the capture was uploaded into (which may differ from org id used during the capture)
    */ /**
    * Push capture upload event
    * @param {string} captureId of procedure that has been uploaded successfully
    * @param {string} correlationId correlation id of request to create container,
    *   or undefined if container already existed
    * @param {string} orgId the org the capture was uploaded into (which may differ from org id used during the capture)
    * @param {number} captureSize the total size of the capture in bytes
    * @param {number} duration the duration of the upload in millis
    * @param {object} timingData capture's timing.json data
    * @param {*} error details about the failure
    */async function pushCaptureUploadEvent({captureId,correlationId,orgId,captureSize,duration,timingData,error=void 0}){const captureData=await initializeCaptureData(timingData);pushCaptureApplicationLaunchEvent(captureData);const event=await getCaptureUploadEvent({captureId,correlationId,orgId,captureSize,duration,captureData});if(error){event.result="fail";if(error.message){event.message=error.message}}else{event.result="success"}await pushEvent(event);return event}/**
   * Push ApplicationLaunch succeeded event
   * @param {object} captureData data from a capture session
   */async function pushCaptureApplicationLaunchEvent(captureData){const event=captureData.getApplicationLaunchEventData();if(event){event.action="application-launch";await pushEvent(event)}return event}/**
   * Push event when Procedure Editor is launched in browser.
   * @param appLaunchId unique throughout the browser session, identifying the application launch session
   * @param appName string identifying procedure editor launch mode. possible values:
   *  Vuforia Editor: procedure editor normal mode
   *  Vuforia Editor Preview: when application is launched in new tab to preview procedure
   *  Vuforia Webview:  when application is launched in new tab to view procedure (desktop playback)
   * @param appVersion PE version
   * @param deviceUUID unique id to identify the browser (saved in localStorage)
   * @param locale browser locale
   *
   * @returns {Promise<void>}
   */async function pushPELaunchEvent(appLaunchId,appName,deviceUUID,locale){return pushEvent({action:"application-launch",event_name:"Application Launch",application_launch_uuid:appLaunchId,"event_attributes.applicationName":appName,"event_attributes.deviceUUID":deviceUUID,"event_attributes.locale":locale})}/**
   * Push video clip created event
   * @param {string} targetId  Id of video asset that has been created successfully
   * @param {boolean} audioRemoved whether audio has been removed / muted
   * @param {boolean} audioReplaced whether audio has been replaced / over dubbed
   */async function pushVideoClipCreatedEvent(targetId,audioRemoved,audioReplaced){const event={action:"video-clip-created",targetId,audioRemoved,audioReplaced};await pushEvent(event);return event}async function pushEvent(eventJson){try{if(!eventJson.orgId){eventJson.orgId=await getOrgId()}if(!eventJson.event_time){eventJson.event_time=new Date().toISOString()}eventJson.userRoles=AuthUtils.getUserRoles();eventJson["event_attributes.applicationVersion"]=pe_version;return AuthUtils.fetch(`${editorPath}/api/v1/analytics`,{method:"POST",mode:"same-origin",headers:{"Content-Type":"application/json","x-correlation-id":eventJson.correlationId||uuid()},body:JSON.stringify(eventJson)})}catch(e){console.error("failed to push event",e);return}}var defaultAnalytics={pushCaptureUploadEvent:pushCaptureUploadEvent,pushCaptureApplicationLaunchEvent:pushCaptureApplicationLaunchEvent,pushPELaunchEvent:pushPELaunchEvent,pushVideoClipCreatedEvent:pushVideoClipCreatedEvent,pushEvent:pushEvent};let analyticsApi=defaultAnalytics;function _setAnalyticsApi(api){analyticsApi=api}/**
   * Creates an asset in the default project
   * @async
   * @param {CMSAsset} asset
   * @param {Object} params: allow customization to the save api such as the fetch function
   */async function saveAssetToCMS(asset,params={}){let proj=await getTenantProject();if(proj){await proj.storeResource(asset,params)}}/**
   * Clones an asset with minimum details
   */function cloneAsset(asset){let nAsset=new sxsl.CMSAsset;nAsset.setURL(asset.url);nAsset.setData(asset.data);nAsset.setMediaType(asset.mediaType);return nAsset}/**
   * Creates an asset in the default project and will retry if a creation failes with HTTP 5xx.
   * @async
   * @param {CMSAsset} asset
   * @param {Object} params allow customization to the save api such as the fetch function
   * @param {Number} [maxRetries=1] max number of retries
   * @param {Function} [onRetry] function called when retrying a save
   */async function saveAssetToCMSWithRetries(asset,params={},maxRetries=1,onRetry=null){let attempt=1;while(!0){try{return await saveAssetToCMS(asset,params)}catch(e){if(500<=e.status&&600>e.status){const id=asset.id||asset.name;if(attempt<=maxRetries){console.log(`Failed to upload asset '${id}' with HTTP ${e.status} on ${attempt} attempt, retrying...`);attempt++;if(onRetry){onRetry()}}else{console.warn(`Still failed to upload asset '${id}' with HTTP ${e.status} after ${attempt} attempts.`);throw e}}else{throw e}}}}/**
   * Updates the asset properties
   * Props not included in the metadata param won't be affected
   * @param {CMSAsset} asset
   * @param {Object} metadata - the properties to be updated
   */async function updateMetadata$1(asset,metadata={}){let proj=await getTenantProject();if(proj){await proj.patchResourceMetadata(asset,metadata)}}/**
   * @returns {sxsl.CMSAsset} if asset is found by its id.
   */async function fetchAsset(id,captureName=null){// Problem occurs when id already contains capture id in it and captureName parameter is provided anyway.
// In such case getResourceById will produce url with capture id twice in it.
if(captureName&&0>id.indexOf("/")){id=captureName+"/"+id}const project=await getTenantProject();try{const metadata=await project.getResourceMetadata(id,"asset");return new sxsl.CMSAsset(metadata.url||id,metadata)}catch(e){console.info("Asset does not exist",id)}return null}/**
   * @param id the id of the pvz asset
   * @returns url to the PVZ'z gltf
   *
   */async function fetchGLTFUrlFromPvz(id){let project=await getTenantProject(),assets=await project.searchResources(["assets"],[id]),url;if(assets){for(let asset of assets){if("glb"===asset.metadata.subtype){url=asset.url}}}return url}/**
   * Convenience wrapper around fetchGLTFUrlFromPvz
   * @param url the url of the pvz asset
   */async function fetchGLTFUrlFromPvzUrl(url){let metadata=await fetchAssetMetadata({url});return await fetchGLTFUrlFromPvz(metadata.id)}/**
   * @returns {sxsl.CMSAsset} if asset is found by its url.
   */async function fetchAssetByUrl(url,customOptions={}){let project=await getTenantProject(),asset=null;try{asset=await project.getManager().getResourceByURL(url,customOptions)}catch(e){console.error("Asset does not exist, check URL for correct syntax",url)}return asset}/**
   * Retrieves the existing assets for the active project from the CMS
   * @param {String} assetType Type of assets to fetch, e.g. 'image', 'video', 'capture', or 'assets/<capture id>'
   * @param {UrlSearchParams} urlParams Search params to add to the url query
   * @returns {sxsl.CMSAsset[]} stored assets
   */async function fetchAssets(assetType,urlParams){let project=await getTenantProject();if(!project){return[]}let assets=[];if(assetType===ASSET_LIST_TYPE.CAPTURES){// get the capture itself
assets=await project.listResources("assets","container",urlParams)}else if(assetType.includes("/")){// get the list of assets inside the capture
assets=await project.listResources(assetType,void 0,urlParams)}else{// get other assets e.g. image or video
assets=await project.listResources("assets",assetType,urlParams)}return assets}/**
   * fetches metadata for particular asset.
   * The name/id will be parsed out of the asset.url so that the capture-id will be maintained.
   * @param {CMSAsset} asset
   * @returns {Object} Parse metadata response
   */async function fetchAssetMetadata(asset){const assetPath=asset.url?asset.url.split("/assets/")[1]:asset.name;let project=await getTenantProject();if(!project){return null}return await project.getResourceMetadata(assetPath,"asset")}/**
   * Gets list of procedures that use particular asset
   * @param {Object} asset - asset to get procedures that use it
   */async function getAssetUses(asset){const project=await getTenantProject();if(!project){return null}const params=new URLSearchParams;params.set("uses",asset.id);return await project.listResources("procedures",void 0,params)}/**
   * Create the capture container asset, then upload all the files in the zip
   * @param {String} captureId UUID of the capture to identify the resource
   * @param {JSZip|FolderWrapper} zip
   * @param {String} title of the capture asset
   * @param timingData
   * @param {ProgressReporter} progressReporter for capture upload
   * @returns {CaptureData}
   */async function saveCaptureAsset(captureId,zip,title,timingData,progressReporter){const start=Date.now();let capture,captureOrgId,duration,captureSize,correlationId;try{captureOrgId=await getOrgId();captureSize=calculateCaptureSize(zip);console.log("Capture size",Math.floor(captureSize/1e6),"MB");let assetsArray;try{assetsArray=await fetchAssets("assets/"+captureId)}catch(e){if(404===e.status){// capture has not been uploaded yet, its ok
}else{console.error("Error fetching capture",captureId,e.status,e);throw new Error("Failed to fetch capture, unable to proceed")}}const containerAsset=new sxsl.CMSAsset(null,{id:captureId,subtype:"container",tags:[".capture"],//hidden tag for the capture type
title});containerAsset.setName(captureId);//Name is used as the URL path and identifier
containerAsset.setMediaType("application/json");if(!assetsArray){//Don't recreate the capture asset if it exists
console.log("Creating capture",captureId);await saveAssetToCMSWithRetries(containerAsset);correlationId=containerAsset.correlationId}else{console.log("Capture was already uploaded",captureId);// get thumbnail
containerAsset.setMetadata((await fetchAssetMetadata(containerAsset)))}capture=new CaptureData(containerAsset,assetsArray||[]);await capture.initialize(timingData);await addCaptureAssets(capture,zip,progressReporter);try{await updateMetadata$1(containerAsset,{state:"import-complete"})}catch(e){console.log("The capture may have been uploaded previously",e.text?await e.text():e)}}catch(e){duration=Math.floor(Date.now()-start);analyticsApi.pushCaptureUploadEvent({captureId,correlationId,orgId:captureOrgId,captureSize,duration,timingData,error:e||"fail"});throw e}finally{duration=Math.floor(Date.now()-start);console.log(`Upload capture ${captureId}: ${duration}ms`)}// only push success event if the capture hasn't been fully uploaded before
if(!progressReporter.cancelled&&capture.assetsAddedAfterCreation()){analyticsApi.pushCaptureUploadEvent({captureId,correlationId,orgId:captureOrgId,captureSize,duration,timingData})}return capture}/**
   * Validates the capture's data without saving or uploading the capture to the CMS.
   * @param {Object} procData
   */function validateCaptureData(procData){const containerAsset=new sxsl.CMSAsset(null,{});containerAsset.setMediaType("application/json");const capture=new CaptureData(containerAsset,[]);capture._extractDataFromCapture(procData.data);const t=window.i18next.t.bind(window.i18next);if(capture.hasInvalidStepsInitially){store.dispatch(warn(t("create-procedure.warn-invalid"),t("create-procedure.warn-invalid-tooltip")))}if(shouldShowLocationWarning(procData)){// warn if loaded capture organization id is not the same as user organization id
store.dispatch(warn(t("locationWarning.location-invalid-warning"),t("locationWarning.location-invalid-tooltip")))}}function getAssetType(assetName,mediaType){if(SUPPORTED_FILE_EXTENSIONS_REGEX[ASSET_TYPE.MODEL].test(assetName)){return ASSET_TYPE.MODEL}return assetName.endsWith(`.${ASSET_TYPE.ANCHOR}`)?ASSET_TYPE.ANCHOR:mediaType.split("/")[0]}function getCategoryForType(assetType){if(assetType===ASSET_TYPE.AR_CONTEXT||assetType===ASSET_TYPE.MTG_CONTEXT){return CATEGORIES.CONTEXT3D}if(assetType===ASSET_TYPE.MODEL||assetType===ASSET_TYPE.THREED_EFFECT){return CATEGORIES.CONTENT3D}return assetType===ASSET_TYPE.IMAGE||assetType===ASSET_TYPE.VIDEO?CATEGORIES.MEDIA:""}/**
   * Creates the asset in the CMS. Does not check for the existence of an asset (for that use saveAsset).
   * @async
   * @param {String} assetId  expecting to include a guid or hash such as 594bb181-8149-4c92-8888-b9236cf1b97d
   * @param {Blob} blobData
   * @param {String} captureId
   * @param {Object} step
   * @param {Promise} abortPromise - promise which resolves when the calling code wants to abort asset creation
   * @param {String[]} tags - Tags for the asset
   */async function createAsset$1(assetId,blobData,captureId,step,abortPromise,tags){let assetName=assetId.substring(assetId.lastIndexOf("/")+1),type,category;if(blobData){type=getAssetType(assetName,blobData.type);category=getCategoryForType(type)}const title=blobData&&blobData.name?blobData.name:assetName,asset=new sxsl.CMSAsset(null,{capture:captureId,subtype:type,category,title,tags});asset.setData(blobData);asset.setName(assetName);// If type was not available on blob data, it may be available after setting the asset's name
// (which also sets the media type).
let assetMediaType=asset.getMediaType()||"";if(!blobData||!blobData.type){type=getAssetType(assetName,assetMediaType);category=getCategoryForType(type);let metadata=asset.getMetadata();asset.setMetadata({...metadata,subtype:type,category})}// Promise for saving all related assets
await saveAssetToCMS(asset,{fetch:makeFetchWithXHR({abortPromise,onProgress:e=>{document.body.dispatchEvent(new CustomEvent("assetUploadProgress",{detail:{progressEvent:e,asset,// TODO: putting step here is necessary for upload placeholders to work in step-assets for now,
// it's not an elegant solution however.
step}}))}})});return asset}/**
   * Saves an asset to a capture given the blob data of the raw file content
   * @async
   * @param {Blob} blobData
   * @param {CMSAsset} capture asset
   * @param {String} assetId  expecting to include a guid or hash such as 594bb181-8149-4c92-8888-b9236cf1b97d
   * @param {String} type (i.e. image/video)
   * @param {Function} onProgress callback function used for reporting capture and its contents upload progress
   * @param {Number} maxRetries
   * @returns {CMSAsset} the asset created for the input and null if it already exists
   */async function saveAssetToCapture(blobData,capture,assetId,type,onProgress,maxRetries=0){let category="";if(type===ASSET_TYPE.IMAGE||type===ASSET_TYPE.VIDEO){category=CATEGORIES.MEDIA}else if("timing.json"===type){type="json";category="timing"}const title=getStrippedAssetTitle(assetId),asset=new sxsl.CMSAsset(null,{capture:capture.name,subtype:type,category,title});asset.setData(blobData);asset.setName(assetId);// Promise for saving all related assets
await saveAssetToCMSWithRetries(asset,{fetch:makeFetchWithXHR({onProgress})},maxRetries,()=>onProgress("reset"));return asset}/**
   * Renames the given asset and saves to the known CMS
   * @param asset
   */async function renameAsset$1(asset){//Converts existing asset to CMSAsset to achieve structure needed to save
let cmsAsset=new sxsl.CMSAsset(asset.url,asset.metadata);const newMetadata={title:asset.metadata.title};await updateMetadata$1(cmsAsset,newMetadata);return cmsAsset}/**
   * @param {string} name asset file name such as 'Timing33edde9a-7610-4a1a-bb16-769c8896a796_14-17-01.json'
   * @returns {string} image, video, json, or null
   */function getAssetTypeFromFilename(name){if(SUPPORTED_FILE_EXTENSIONS_REGEX[ASSET_TYPE.IMAGE].test(name)){return ASSET_TYPE.IMAGE}else if(SUPPORTED_FILE_EXTENSIONS_REGEX[ASSET_TYPE.VIDEO].test(name)){return ASSET_TYPE.VIDEO}else if(SUPPORTED_FILE_EXTENSIONS_REGEX[ASSET_TYPE.MODEL].test(name)){return ASSET_TYPE.MODEL}else if(/^Timing.*\.json$/.test(name)){return"timing.json"}return null}/**
   * Get the relevant capture asset file information for their upload from capture's zip
   * archive metadata and determines whether they need to be uploaded or not.
   * @param {JSZip|FolderWrapper} captureFile JSZip instance
   */function getCaptureAssetFiles(captureFile){const keys=captureFile._getFileNames?captureFile._getFileNames():Object.keys(captureFile.files);return keys.map(name=>{const file=captureFile.files&&captureFile.files[name]?captureFile.files[name]:captureFile.file(name);if(captureFile.shouldUpload(file)){const assetName=name.substring(name.lastIndexOf("/")+1),type=getAssetTypeFromFilename(assetName);return{assetName,name,type,file}}else{console.debug(`Skip upload of "${file.name}"`);return null}}).filter(Boolean)}/**
   * Calculates combined capture assets upload size in bytes
   * @param {Array} assetFilesToBeUploaded
   * @returns {Number}
   */function calculateUploadSize(assetFilesToBeUploaded){let totalSize=0;for(const fileInfo of assetFilesToBeUploaded){fileInfo.size=getFileSize(fileInfo.file);totalSize+=fileInfo.size}return totalSize}/**
   * Calculated total capture assets size in bytes
   * @param captureFile {JSZip|FolderWrapper} captureFile instance
   * @returns {Number} representing total capture size in bytes
   */function calculateCaptureSize(captureFile){let totalSize=0;const keys=captureFile._getFileNames?captureFile._getFileNames():Object.keys(captureFile.files);for(const name of keys){const file=captureFile.files&&captureFile.files[name]?captureFile.files[name]:captureFile.file(name);totalSize+=getFileSize(file)}return totalSize}/**
   * Gets a progress reporter wrapper customized for capture assets.
   * @param {ProgressReporter} progressReporter
   * @param {Array} assetFileInfos
   * @param {Number} uploadSize
   */function getCaptureUploadProgressReporter(progressReporter,assetFileInfos,uploadSize){return{reportExtractionProgress(uploadInfo,bytesLoaded){uploadInfo.extractedProgress=bytesLoaded;const combined=assetFileInfos.reduce((acc,info)=>acc+(info.extractedProgress||0),0);progressReporter.reportProgress("extraction",combined/uploadSize)},reportUploadProgress(uploadInfo,bytesLoaded){uploadInfo.uploadedProgress=bytesLoaded;const combined=assetFileInfos.reduce((acc,info)=>acc+(info.uploadedProgress||0),0);progressReporter.reportProgress("upload",combined/uploadSize)},whenCancelled(){return progressReporter.whenCancelled()}}}/**
   * Gets only assets that actually need upload. Some assets could already exist in the CMS.
   * @param {CaptureData} capture
   * @param {Array} assetFileInfos
   * @param {Object} progressReporter
   */function getCaptureAssetFilesForUpload(capture,assetFileInfos,progressReporter){return assetFileInfos.filter(fileInfo=>{// If capture was already created it may already have some or all of the assets uploaded
// Check whether the asset is already in the capture
if(capture.getAsset(fileInfo.assetName)){console.log("Asset already exists, skipping upload",fileInfo.assetName);// If an asset was already uploaded report its progress for both the extraction and upload.
progressReporter.reportExtractionProgress(fileInfo,fileInfo.size);progressReporter.reportUploadProgress(fileInfo,fileInfo.size);return!1}return!0})}/**
   * Sets default thumbnail for the capture after it has been created.
   */async function setCaptureThumbnail(capture,assetFileInfos){const captureAsset=capture.getAsset(),firstImage=assetFileInfos.find(file=>file.type===ASSET_TYPE.IMAGE);if(firstImage&&!captureAsset.getMetadata().thumbnail){// Save the capture thumbnail on create, eventually UI will be available to change it
const cmsAsset=capture.getAsset(firstImage.assetName);captureAsset.getMetadata().thumbnail=(await getTenantProject()).getResourceUrl(cmsAsset);await updateMetadata$1(captureAsset,{thumbnail:captureAsset.getMetadata().thumbnail})}}/**
   * @param {WorkerPipe} uploadPipe
   * @param {WorkQueue} uploadQueue
   * @returns {Function} the willExceedCapacity method override for the uploadQueue.
   * It will make sure that we do not use up too much memory for extracted files that
   * would be awaiting upload. It limits the rate at which files are extracted before upload.
   */function getWillExceedCapacityOverride(uploadPipe,uploadQueue){// The total size of all files that are being uploaded and waiting for upload.
// Extraction pipe will make sure that it does not extract files too quickly,
// so that this size is not exceeded (it will wait with extraction).
const maxTotalUploadSize=1024*(1024*100),getSize=items=>items.reduce((acc,item)=>acc+item.size,0);// 100MB
// Sums the combined file size in bytes.
return(count,getItems)=>{if(uploadQueue.isEmpty()&&uploadPipe.isIdle()){// This allows us to upload files of any size one by one because we are bypassing size calculations,
// when nothing is waiting for upload nor being uploaded.
return!1}// Calculate the size of items waiting for upload and items that are currently being uploaded.
const queueSize=getSize(uploadQueue.items),uploadingSize=getSize(uploadPipe.getInProgressItems()),extraSize=getSize(getItems());// Only allow new items if combined size of everything does not exceed the limit.
return queueSize+uploadingSize+extraSize>maxTotalUploadSize}}/**
   * Uploads files as capture assets.
   * @param {CaptureData} capture
   * @param {Array} assetFilesToBeUploaded
   * @param {Object} progressReporter a custom progressReporter from getCaptureUploadProgressReporter
   */async function uploadFilesAsCaptureAssets(capture,assetFilesToBeUploaded,progressReporter){let failed=!1;// Here files wait for extraction. Just add everything up front.
const extractionQueue=new WorkQueue;extractionQueue.enqueue(assetFilesToBeUploaded);extractionQueue.close();// lets the pipes know that there is no more work after what was already added
// And here extracted items wait for upload.
const uploadQueue=new WorkQueue,extractionPipe=new WorkerPipe(extractionQueue,uploadQueue,async uploadInfo=>{if(failed){return}const{name,assetName,file}=uploadInfo;let timerLabel;try{const size=getFileSize(file)/1e6;timerLabel=`${assetName} size ${size}MB`;console.log("Extracting: "+timerLabel);console.time(timerLabel);uploadInfo.blobData=!file.async?file:await file.async("blob",metadata=>{// eslint-disable-line require-atomic-updates
// JSZip callback for reporting extraction progress.
if(!failed){progressReporter.reportExtractionProgress(uploadInfo,metadata.percent/100*uploadInfo.size)}});return uploadInfo}catch(extractErr){failed=!0;console.error(`Error extracting file from zip: "${name}"`,extractErr);throw new Error(`Failed to extract "${name}"`)}finally{if(timerLabel){console.timeEnd(timerLabel)}}}),uploadPipe=new WorkerPipe(uploadQueue,null,async uploadInfo=>{if(failed){return}console.debug("Currently uploading",uploadPipe.workerCount);const{name,assetName,type,blobData}=uploadInfo;try{console.log("Uploading",assetName,uploadInfo.size);const cmsAsset=await saveAssetToCapture(blobData,capture.getAsset(),assetName,type,progressEvent=>{if(!failed){progressReporter.reportUploadProgress(uploadInfo,"reset"===progressEvent?0:progressEvent.loaded)}},/* maxRetries */1);// release the data in hopes of better memory footprint
delete cmsAsset.data;delete uploadInfo.blobData;capture.addAsset(cmsAsset);console.log("Done uploading",assetName)}catch(uploadErr){failed=!0;// eslint-disable-line require-atomic-updates
console.error(`Error uploading file: "${name}"`,uploadErr);throw new Error(`Failed to upload "${name}"`)}});// ZIP extraction pipe. It takes items from extractionQueue and after extracting them puts them in uploadQueue.
// Override this method for finer throttling control of extraction/upload.
uploadQueue.willExceedCapacity=getWillExceedCapacityOverride(uploadPipe,uploadQueue);// Maximum of concurrent uploads - arbitrarily chosen, we probably don't want too many concurrent uploads.
uploadPipe.setMaxParallelWorkers(10);// Only extracting one file at a time. Note that JSZip extracts everything on the main thread,
// unless we wrap it in web workers there should not be any benefit from having concurrent extractions.
extractionPipe.setMaxParallelWorkers(1);progressReporter.whenCancelled().then(()=>{extractionQueue.cancel();uploadQueue.cancel()});// Wait until all uploads are done or an error occurs. Pipe becomes drained when it is empty,
// and everything before it has been exhausted as well.
await uploadPipe.whenDrained()}/**
   * Saves all the referenced assets on the step definition (all Pictures and Videos)
   * @param {CaptureData} capture
   * @param {JSZip|FolderWrapper} captureFile JSZip instance
   * @param {progressReporter} progressReporter that will be used to report capture asset upload progress
   */async function addCaptureAssets(capture,captureFile,progressReporter){const assetFileInfos=getCaptureAssetFiles(captureFile),uploadSize=calculateUploadSize(assetFileInfos),captureProgressReporter=getCaptureUploadProgressReporter(progressReporter,assetFileInfos,uploadSize),assetFilesToBeUploaded=getCaptureAssetFilesForUpload(capture,assetFileInfos,captureProgressReporter);await uploadFilesAsCaptureAssets(capture,assetFilesToBeUploaded,captureProgressReporter);await setCaptureThumbnail(capture,assetFileInfos)}function getStrippedAssetTitle(fullName){const guidRegexp=/(_){0,1}[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/;let name=fullName.replace(guidRegexp,"");return name}async function createVideoClip(videoData,title){if(videoData.audioData){let audioAsset=new sxsl.CMSAsset(null,{subtype:"audio",category:"media"});audioAsset.setMediaType(videoData.audioData.blob.type);audioAsset.setData(videoData.audioData.blob);await saveAssetToCMS(audioAsset);videoData.audios=[{assetName:audioAsset.name,url:audioAsset.url,duration:convertNumberToMovieTimeStr(videoData.audioData.duration),audioStartTime:convertNumberToMovieTimeStr(videoData.audioData.audioStartTime),videoStartTime:convertNumberToMovieTimeStr(videoData.audioData.videoStartTime)}];delete videoData.audioData}let tags=[];if(videoData.audios){tags=0===videoData.audios.length?[".audio-removed"]:[".audio-replaced"]}let asset=new sxsl.CMSAsset(null,{subtype:"video",category:"media",title,tags});asset.setMediaType("application/json");asset.setData(JSON.stringify(videoData));await saveAssetToCMS(asset,{transform:!0});const videoAssetId=asset.name,audioRemoved=!!videoData.audios&&0===videoData.audios.length,audioReplaced=!!videoData.audios&&0!==videoData.audios.length;analyticsApi.pushVideoClipCreatedEvent(videoAssetId,audioRemoved,audioReplaced);return asset}/**
   * @param {CMSAsset|String} asset
   */function getThumbnailUrl(asset){const url=asset.url||asset;return url+"/.thumbnail"}var assetApi={_setAnalyticsApi:_setAnalyticsApi,saveAssetToCMS:saveAssetToCMS,cloneAsset:cloneAsset,saveAssetToCMSWithRetries:saveAssetToCMSWithRetries,updateMetadata:updateMetadata$1,fetchAsset:fetchAsset,fetchGLTFUrlFromPvz:fetchGLTFUrlFromPvz,fetchGLTFUrlFromPvzUrl:fetchGLTFUrlFromPvzUrl,fetchAssetByUrl:fetchAssetByUrl,fetchAssets:fetchAssets,fetchAssetMetadata:fetchAssetMetadata,getAssetUses:getAssetUses,saveCaptureAsset:saveCaptureAsset,validateCaptureData:validateCaptureData,getAssetType:getAssetType,createAsset:createAsset$1,saveAssetToCapture:saveAssetToCapture,renameAsset:renameAsset$1,getAssetTypeFromFilename:getAssetTypeFromFilename,getCaptureUploadProgressReporter:getCaptureUploadProgressReporter,getCaptureAssetFilesForUpload:getCaptureAssetFilesForUpload,getWillExceedCapacityOverride:getWillExceedCapacityOverride,addCaptureAssets:addCaptureAssets,getStrippedAssetTitle:getStrippedAssetTitle,createVideoClip:createVideoClip,getThumbnailUrl:getThumbnailUrl};async function publishExperience(publishConfig,procedurePublishResult){let project=await getTenantProject(),config=Object.assign({},{experienceType:"singleProcedure"},publishConfig);config.metadata=Object.assign({},{title:publishConfig.procedure.title,thumbnail:publishConfig.procedure.thumbnail},publishConfig.metadata||{});config.procedure=procedurePublishResult.contentUrl;//Extra info for CMS to help it map the published url back to the original procedure
config.procedures=[{name:publishConfig.procedure.id}];let publishConfigAsset=await getExperienceForProcedure(procedurePublishResult.name);//Name is the id returned from the publish
if(!publishConfigAsset){publishConfigAsset=new sxsl.CMSAsset;publishConfigAsset.setMetadata({subtype:"experience"})}const updatedExperienceProps={title:publishConfig.procedure.title,thumbnail:publishConfig.procedure.thumbnail},metadata={...publishConfigAsset.getMetadata(),...updatedExperienceProps};publishConfigAsset.setMetadata(metadata);publishConfigAsset.setData(JSON.stringify(config));publishConfigAsset.setMediaType("application/json");//TODO import const for MIMETYPE_EXPERIENCE from sxsl when ready
let result=await project.storeResource(publishConfigAsset);if(result&&!result.error){if(!result.published||!result.published.url){console.error("publishDefaultExperience failed",result);throw new Error("Expected response to contain published.url")}return result?result.published.url:void 0}else{console.error("publishDefaultExperience failed",result);throw new Error("publishDefaultExperience failed")}}/**
   * Get the experience publish config (if any) for the given procedure id
   * @param {String} procedure
   * @returns {String} url, createdon and createdby of the published experience, or undefined if procedure hasn't been published yet
   */async function getExperienceConfigForProcedure(procedure){if(procedure){const experience=await getExperienceForProcedure(procedure.id);if(experience){const metadata=experience.getMetadata(),experienceConfig=metadata.published?metadata.published:void 0;return experienceConfig}}return void 0}/**
   * @param {string} experienceURL relative URL of experience
   * @returns {string} fully qualified experience URL that opens View app
   */function getDeviceURL(experienceURL){return"https://view.vuforia.com/command/view-experience?url="+encodeURIComponent(baseURL+experienceURL)}/**
   * @param {string} experienceURL relative URL of experience
   * @returns {string} fully qualified webview URL
   */function getDesktopURL(experienceURL){return window.location.origin+ROUTE.webview+"?url="+encodeURIComponent(experienceURL)}/**
   * Get the default experience for the given procedure id,
   *
   * @param {any} id
   * @returns {CMSAsset} an experience asset
   */async function getExperienceForProcedure(id){if(id){const urlParams=new URLSearchParams;urlParams.set("uses",id);const experiences=await fetchAssets("experience",urlParams);if(experiences&&0<experiences.length){return Promise.resolve(experiences[0])}}return Promise.resolve(void 0)}var experienceApi={publishExperience:publishExperience,getExperienceConfigForProcedure:getExperienceConfigForProcedure,getDeviceURL:getDeviceURL,getDesktopURL:getDesktopURL,getExperienceForProcedure:getExperienceForProcedure};let baseUrl=null;//Cached result of the url, allows for testing override
const SSGTYPES={step:"step",semanticLocation:"semantic-location",target:"target",capture:"capture"},DEFAULT_HEADERS={Accept:"application/json"};/**
    * Gets the base url of the ES's ssg service (not under CMS)
    * Will use org.id if found
    */function getBaseUrl(){if(!baseUrl){const org=(store.getState().app||{}).organization||{};baseUrl=baseURL+cmsPath+"/"+org.id}return baseUrl}function _setBaseUrl(url){baseUrl=url}/**
   * Gets all the ssg nodes (Testing/Info only)
   */async function getNodes(){let resp=await AuthUtils.fetch(getBaseUrl()+"/ssg/nodes/",{method:"GET",headers:DEFAULT_HEADERS});if(resp.ok){return await resp.json()}}/**
   * Gets a specific ssg node
   * @param {String} id - node id to fetch
   * @returns {Object} node properties, null if not found
   */async function getNode(id){const cacheEntry=store.getState().spatialGraph&&store.getState().spatialGraph.NODE_CACHE[id];if(cacheEntry){return cacheEntry}let resp=await AuthUtils.fetch(getBaseUrl()+"/ssg/nodes/"+encodeURIComponent(id),{method:"GET",headers:DEFAULT_HEADERS});if(resp.ok){return await resp.json()}console.warn("Could not find node",id);return null}/**
   * Gets all the SemanticLocation node linked to the id
   * @param {String} id
   * @returns {Array<Object>} Semantic Location node
   */async function getSemanticLocations(id,depth){const spatialGraph=store.getState().spatialGraph,cacheEntry=spatialGraph&&spatialGraph.SL_CACHE&&spatialGraph.SL_CACHE[id];if(cacheEntry){return cacheEntry}const result=await findNodesByTypeAndRelation(id,SSGTYPES.semanticLocation,depth);if(Array.isArray(result)&&result.length){store.dispatch(fetchSemanticLocationSucceeded(id,result))}return result}/**
   * Get the capture nodes linked to the node id
   * @param {String} id
   * @returns {Array<Object>} Semantic Location node
   */async function getRelatedCapture(id){const spatialGraph=store.getState().spatialGraph,cacheEntry=spatialGraph&&spatialGraph.CAPTURE_CACHE&&spatialGraph.CAPTURE_CACHE[id];if(cacheEntry){return cacheEntry}const result=await findNodesByTypeAndRelation(id,SSGTYPES.capture);store.dispatch(fetchCaptureNodeSucceeded(id,result));return result}/**
   * Gets the first SemanticLocation node linked to the id
   * @param {String} id
   * @param {Number} depth the max depth for recursive lookups in the SSG
   * @returns {Object} Semantic Location node
   */async function getSemanticLocation(id,depth=1){let result,locations=await getSemanticLocations(id,depth);if(locations&&0<locations.length){result=locations[0];if(1<locations.length){console.warn("More than one semantic location found for",id,locations)}}return result}/**
   * Gets all the {type} nodes linked to the id
   * @param {String} id of a node
   * @param {String} type of the node to search.
   * @param {Number} depth the max depth for recursive lookups in the SSG
   * @returns {Array<Object>} Nodes related to the input node following the edges by the input type
   */async function findNodesByTypeAndRelation(id,type,depth){depth=depth?`&maxdepth=${depth}`:"";let resp=await AuthUtils.fetch(getBaseUrl()+"/ssg/nodes?alldata=true&fromuid="+encodeURIComponent(id)+"&totype="+type+depth,{method:"GET",headers:DEFAULT_HEADERS});if(resp.ok){const json=await resp.json();if(json&&Array.isArray(json.items)){return json.items}}return null}/**
   * Common method to create methods to inspect the response, handle errors, logging
   * @param {Resposne} resp
   * @param {Object} data
   */function handleCreateResponse(resp,data){if(resp.ok||409===resp.status){//409 already created
store.dispatch(fetchNodeSucceeded(data));return data}console.warn("Failed to create ssg node/edge for data",resp,data);return null}/**
   * Calls the fetch and awaits the result
   * @param {String} nodeId
   * @param {Object} data
   * @returns {Object} data payload (since create calls return empty body) if successfull, null if resp is not ok
   */async function commonCreateNode(nodeId,data){const type=data&&data.type?data.type:"";console.debug(`Create ssg node [${nodeId}](${type})`);let resp=await AuthUtils.fetch(getBaseUrl()+"/ssg/nodes/"+nodeId,{method:"PUT",headers:Object.assign({"Content-Type":"application/json"},DEFAULT_HEADERS),body:JSON.stringify(data)});return handleCreateResponse(resp,data)}/**
   * Creates a SSG Node for a step
   * @param {String} stepId
   * @returns {Object} the data payload of the step with the type and uid set
   */async function createStepNode(stepId){const data={type:SSGTYPES.step,uid:stepId};return commonCreateNode(stepId,data)}/**
   * Creates a SSG Node for a capture
   * @param {String} id - capture id
   * @returns {Object} the data payload of the step with the type and uid set
   */async function createCaptureNode(id){const data={type:SSGTYPES.capture,uid:id};return commonCreateNode(id,data)}/**
   * Creates the capture node if its not yet created.
   * @param {String} id - capture id
   * @returns {Object} node: capture node
   */async function getOrCreateCaptureNode(id){let node=await getNode(id);if(!node){node=createCaptureNode(id)}return node}/**
   * Creates a SSG Node for a anchor
   * @param {String} id
   * @returns {Object} the data payload of the step with the type and uid set
   */async function createAnchorNode(id){const data={type:SSGTYPES.target,uid:id};return commonCreateNode(id,data)}/**
   * Creates a SSG Node for a Semantic Location
   * @param {Object} title
   * @returns {Object} the data payload of the step with the type, uid, and title
   */async function createSemanticLocation(title){const nodeId=uuid(),data={type:SSGTYPES.semanticLocation,uid:nodeId,title};return commonCreateNode(nodeId,data)}/**
   * Creates a SSG Edge from node1 -> node2
   * @param {String} node1 uid
   * @param {String} node2 uid
   * @returns {Object} the data payload of the step with the type and uid set
   */async function createEdge(node1,node2){console.debug(`Create ssg edge d[${node1}] --- p[${node2}]`);const data={dnodeuid:node1,pnodeuid:node2};let resp=await AuthUtils.fetch(getBaseUrl()+"/ssg/edges/",{method:"POST",headers:Object.assign({"Content-Type":"application/json"},DEFAULT_HEADERS),body:JSON.stringify(data)});return handleCreateResponse(resp,data)}/**
   * Create any ssg nodes and edges for the given set of steps
   * For each step, create a ssg node for the:
   *  - step id
   *  - steps its related location target anchor
   *  - Semantic location ("Location 1") that
   * Creates edges between the nodes above like this:
   *  [step] --- [Semantic Location] --- [Anchor/Cloud UUID]
   *
   * @param {CaptureData} capture - Capture Object from Timings.json
   * @param {Array<Object>} steps - Capture step Objects from Timings.json
   */async function createSemanticLocationGraph(capture,steps){let displayNum=1;//"Location 1" for the first semantic location
const semanticNodesCreated={},CAPTURE_EDGES={},results=[],captureID=capture.getCaptureGUID();let captureNode=await getOrCreateCaptureNode(captureID);for(let step of steps){if(step.locationAware){let anchorNode=await getNode(step.location),slNode=semanticNodesCreated[step.location];if(anchorNode&&!slNode){//If the anchor node exists, the SL node should as well, look it up from the edge
slNode=await getSemanticLocation(anchorNode.uid);//Reverse lookup
}const edgeNeeded=!anchorNode||!slNode;let sl_to_anchor,step_to_sl,stepNode,capture_to_anchor;if(!anchorNode){anchorNode=await createAnchorNode(step.location);results.push(anchorNode)}if(!slNode){//New anchor not yet used in this capture, create the anchor, semantic name for it, and the edge.
slNode=await createSemanticLocation("Location "+displayNum++);semanticNodesCreated[step.location]=slNode;results.push(slNode);store.dispatch(fetchSemanticLocationSucceeded(step.id,[slNode]))}if(edgeNeeded){sl_to_anchor=await createEdge(slNode.uid,anchorNode.uid);results.push(sl_to_anchor)}delete step.location;stepNode=await createStepNode(step.id);step_to_sl=await createEdge(stepNode.uid,slNode.uid);results.push(stepNode);results.push(step_to_sl);let captureKey=captureNode.uid+"--"+slNode.uid;if(!CAPTURE_EDGES[captureKey]){capture_to_anchor=await createEdge(captureNode.uid,anchorNode.uid);//Create-edge handles already created items
CAPTURE_EDGES[captureKey]=capture_to_anchor;results.push(capture_to_anchor)}store.dispatch({type:RESET_PROCEDURE_ANCHORS});const nodeStr=node=>node?`[${node.uid}](${node.type})`:"[undefined?]",edgeStr=edge=>edge?"<--new edge-->":"<--existing edge-->";console.info(nodeStr(stepNode),edgeStr(step_to_sl),nodeStr(slNode),edgeStr(sl_to_anchor),nodeStr(anchorNode));console.info(nodeStr(captureNode),edgeStr(capture_to_anchor),nodeStr(anchorNode));console.debug("Nodes and edges created/used",stepNode,slNode,anchorNode,sl_to_anchor,step_to_sl,captureNode,capture_to_anchor)}}return results}/**
   * Populates a procedures step semantic location values into the
   * related caches
   * @param {PEProcedure} procedure
   */async function populateCache(procedure){const steps=procedure.steps;let promises=[];for(let step of steps){if(step.locationAware){promises.push(getSemanticLocation(step.id))}}promises.push(getAllAnchorsForProcedure(procedure));await Promise.all(promises)}/**
   * @param {String} id - step id
   * @returns {Object} the SL node from cach associated to the step id
   */function getSemanticLocationCacheEntry(id){return store.getState().spatialGraph.SL_CACHE[id]}/**
   * Get all the related SLNodes for the list of step ids
   * @param {Array<String>} stepIds
   * @returns {Array<Object>} SL nodes
   */async function getAllStepLocations(stepIds){const stepLocations=[],stepPromises=[];//There is no multi input query, so get them one by one
for(const stepId of stepIds){const promise=getSemanticLocation(stepId);stepPromises.push(promise);promise.then(node=>{if(node&&0>stepLocations.findIndex(n=>n&&node.uid===n.uid)){stepLocations.push(node)}}).catch(console.warn)}await Promise.all(stepPromises);return stepLocations}/**
   * Get all the related capture nodes for the list of sl nodes
   * @param {Array<Object>} slnodes SL nodes
   * @returns {Array<Object>} capture nodes
   */async function getAllCaptureNodes(slnodes){const capturePromises=[],captureNodes=[];for(const slNode of slnodes){const promise=getRelatedCapture(slNode.uid,SSGTYPES.capture);capturePromises.push(promise);promise.then(node=>{if(node&&0<node.length){node=node[0]}if(node&&node.uid&&0>captureNodes.findIndex(n=>n&&node.uid===n.uid)){captureNodes.push(node)}}).catch(console.warn)}await Promise.all(capturePromises);return captureNodes}/**
   * Fetches the metadata for the capture nodes and populates .metadata property respectively
   */async function getAllCaptureTitles(captureNodes){for(let node of captureNodes){let captureAsset;const assets=store.getState().assets;//Look up the capture from the assets cache, this may be something to move to fetchAssetMetadata in the future
if(assets&&assets.capture){captureAsset=assets.capture.find(item=>{return item.name===node.uid});if(captureAsset){node.metadata=captureAsset.metadata}}if(!captureAsset){//Look up the capture from the server
captureAsset=new sxsl.CMSAsset;captureAsset.setName(node.uid);node.metadata=await fetchAssetMetadata(captureAsset);// eslint-disable-line require-atomic-updates
}}}/**
   * Get all the related sl nodes for the list of capture nodes
   * @param {Array<Object>} capture nodes
   * @returns {Array<Object>} Anchor nodes
   */async function getAllCaptureLocations(captureNodes){const anchors=[],anchorPromises=[];for(const captureNode of captureNodes){const promise=getSemanticLocations(captureNode.uid);anchorPromises.push(promise);promise.then(nodes=>{nodes.forEach(n=>{n.captureId=captureNode.uid;n.title=captureNode.metadata&&captureNode.metadata.title;anchors.push(n)})}).catch(console.warn)}await Promise.all(anchorPromises);return anchors.flat()}/**
   * Get full list of semantic locations for the procedure
   *
   * Lookup occurs in 3 jumps.
   *    steps -> sl nodes -> captures -> all sl nodes
   * @param {PEProcedure} procedure
   * @returns {Array<Object>} list SL nodes
   */async function getAllAnchorsForProcedure(procedure){const steps=procedure.steps.filter(step=>step.locationAware);if(1>steps.length){return[]}const stepIds=steps.map(step=>step.id),locations=await getAllStepLocations(stepIds),captures=await getAllCaptureNodes(locations);await getAllCaptureTitles(captures);let result=await getAllCaptureLocations(captures);if(result&&0===result.length&&0<locations.length){//old Data that does not have the capture node, return the first locations result
console.warn("Using location data that does not have capture nodes yet");result=locations}store.dispatch(fetchAllAnchorsSucceeded(procedure.id,result));return result}/**
   * Get full list of semantic locations for the procedure
   * @param {PEProcedure} procedure
   * @returns {Array<Object>} list SL nodes
   */function getProcedureAnchorsFromCache(procedure){return store.getState().spatialGraph.PROCEDURE_ANCHOR_CACHE[procedure.id]}/**
   * Creates missing SSG data for the given capture. Will create any missing capture nodes and
   * capture -> anchor edges.
   * If the original upload never got as far as creating the anchor nodes, these creates will fail,
   * but that is ok, the "insert steps" action will create everything needed if its ever used.
   * @param {CaptureData} capture
   */async function ensureCaptureEdgesAreCreated(capture){const captureUid=capture.getCaptureGUID(),orgId=await getOrgId(),steps=capture.getProcedureSteps(orgId);let captureNode=await getOrCreateCaptureNode(captureUid);for(const step of steps){if(step.locationAware){console.log("create missing capture->anchor edge",captureNode.uid,step.location);await createEdge(captureUid,step.location)}}store.dispatch({type:RESET_PROCEDURE_ANCHORS})}var ssgService={SSGTYPES:SSGTYPES,_setBaseUrl:_setBaseUrl,getNodes:getNodes,getNode:getNode,getSemanticLocations:getSemanticLocations,getRelatedCapture:getRelatedCapture,getSemanticLocation:getSemanticLocation,findNodesByTypeAndRelation:findNodesByTypeAndRelation,createStepNode:createStepNode,createCaptureNode:createCaptureNode,getOrCreateCaptureNode:getOrCreateCaptureNode,createAnchorNode:createAnchorNode,createSemanticLocation:createSemanticLocation,createEdge:createEdge,createSemanticLocationGraph:createSemanticLocationGraph,populateCache:populateCache,getSemanticLocationCacheEntry:getSemanticLocationCacheEntry,getAllAnchorsForProcedure:getAllAnchorsForProcedure,getProcedureAnchorsFromCache:getProcedureAnchorsFromCache,ensureCaptureEdgesAreCreated:ensureCaptureEdgesAreCreated};/* begin copyright text
    *
    * Copyright © 2016 PTC Inc., Its Subsidiary Companies, and /or its Partners. All Rights Reserved.
    *
    * end copyright text
    */const relativeTimeFormatter=new Intl.RelativeTimeFormat(window.i18next.language||"en",{numeric:"auto"});/**
     * returns date and time format matches what is defined in the user's browser/OS locale
     * @param {Date|string} date
     * @returns {string}
     */function formatDateAndTimeToDisplay(date){const options={year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric"};return formatDate(date,options)}/**
   * returns date format matches what is defined in the user's browser/OS locale
   * @param {Date|string} date
   * @returns {string}
   */function formatDateToDisplay(date){const options={year:"numeric",month:"numeric",day:"numeric"};return formatDate(date,options)}/**
   * returns date format matches what is defined in the user's browser/OS locale
   * @param {Date|string} date
   * @returns {string}
   */function formatDateWithShortMonth(date){const options={year:"numeric",month:"short",day:"numeric"};return formatDate(date,options)}/**
   * returns just the time of day for the given date
   * @param {Date|string} date
   * @param {Object} opts - options to pass through to the Intl.DateTimeFormat
   * @returns {string}
   */function formatTimeToDisplay(date,opts={}){const options=Object.assign({},opts,{hour:"numeric",minute:"numeric"});return formatDate(date,options)}/**
   * Gets relative time between current and provided Date
   * @param {Date|string} date
   * @returns {string} time elapsed from the provided date as localized string eg. '3 minutes ago', '1 year ago'
   */function formatRelativeTime(date){const msPerMinute=1e3*60,msPerHour=60*msPerMinute,msPerDay=24*msPerHour,msPerMonth=30*msPerDay,msPerYear=365*msPerDay,elapsed=new Date-new Date(date);if(elapsed<msPerMinute){return relativeTimeFormatter.format(Math.round(-elapsed/1e3),"second")}else if(elapsed<msPerHour){return relativeTimeFormatter.format(Math.round(-elapsed/msPerMinute),"minute")}else if(elapsed<msPerDay){return relativeTimeFormatter.format(Math.round(-elapsed/msPerHour),"hour")}else if(elapsed<msPerMonth){return relativeTimeFormatter.format(Math.round(-elapsed/msPerDay),"day")}else if(elapsed<msPerYear){return relativeTimeFormatter.format(Math.round(-elapsed/msPerMonth),"month")}else{return relativeTimeFormatter.format(Math.round(-elapsed/msPerYear),"year")}}/**
   * Formats the date per the provided options and the browser/OS locale
   * @param {Date|string} dateInput
   * @param {Object} options used to construct an Intl.DateTimeFormat instance
   * @returns {String} Formatted date string
   */function formatDate(dateInput,options){const date=new Date(dateInput);return new Intl.DateTimeFormat(window.i18next.language||navigator.language,options).format(date)}var dateUtils={formatDateAndTimeToDisplay:formatDateAndTimeToDisplay,formatDateToDisplay:formatDateToDisplay,formatDateWithShortMonth:formatDateWithShortMonth,formatTimeToDisplay:formatTimeToDisplay,formatRelativeTime:formatRelativeTime};async function getProcedure(id){let procedure=store.getState().procedures.cache[id];if(!procedure){procedure=await fetchProcedure(id)}else{procedure=procedure.present||procedure}await populateCache(procedure);return procedure}class ProcedureDoesNotExist extends Error{constructor(...args){super(...args);this.name="ProcedureDoesNotExist"}}/**
   * Fetches procedure directly from CMS every time and updates it in the cache. Do NOT use unless you're sure you want
   * to bypass the cache - see getProcedure.
   * @param {String} id
   * @returns {PEProcedure} new instance created from the current procedure defined in the app state.
   * @throws {ProcedureDoesNotExist}
   */async function fetchProcedure(id){const project=await getTenantProject();let procedureObj;try{procedureObj=await project.getResourceById(id)}catch(e){// Not distinguishing between unaccessible resources and non existant ones right now.
if(404===e.status||403===e.status){throw new ProcedureDoesNotExist(id)}else{throw e}}if(!procedureObj||!procedureObj.id){throw new ProcedureDoesNotExist(id)}const procedure=await new PEProcedure().init(procedureObj);// TODO: Metadata should just be returned by a single endpoint, and not like this.
procedure.properties=await project.getResourceMetadata(id,"procedure");store.dispatch({type:FETCH_PROCEDURE_SUCCEEDED,procedure});return procedure}/**
   * Get the published procedure given the url
   * @param {String} url procdure publication url
   * @param {String} id to set on the procedure to be returned
   */async function getPublishedProcedureContent(url,id){const manager=await getProjectMgr();let procedureObj;try{procedureObj=await manager.getResourceByURL(url)}catch(e){// Not distinguishing between unaccessible resources and non existant ones right now.
if(404===e.status||403===e.status){throw new ProcedureDoesNotExist(url)}else{throw e}}const procedure=await new PEProcedure().init(procedureObj);procedure.id=id;return procedure}/**
   * Given a URL to an experience, retrieves the published procedure the experience refers to.
   * NOTE: Purposely avoids using CMSProject interface because Viewer users are not authorized to access
   * many of the routes used to setup that interface.
   * @param {String} experienceUrl - fully qualified experience URL
   */async function fetchPublishedProcedureFromExperience(experienceUrl){if(experienceUrl){const result=await AuthUtils.fetch(experienceUrl);if(200!==result.status){throw{fetchFailed:!0,status:result.status}}const resultJSON=await result.json(),publishedProcedureUrl=resultJSON.procedure,procedure=await getPublishedProcedureContent(publishedProcedureUrl,resultJSON.procedures[0].name);return procedure}}/**
   * @param {PEProcedure} procedure
   * @returns {string} first image url
   */function getFirstImageThumbnailInProcedure(procedure){for(const step of procedure.steps||[]){const firstImage=(step.assets||[]).find(asset=>asset.type===ASSET_TYPE.IMAGE);if(firstImage){return baseURL+firstImage.url+"/.thumbnail"}}return null}/**
   * Creates the given procedure in the known CMS
   * @returns {sxsl.CMSProcedure} created Procedure
   */async function createOrUpdateProcedureInCMS(procedure){//always overwrite the thumbnail until a UI is available to set it.
if(procedure){procedure={...procedure};procedure.thumbnail=getFirstImageThumbnailInProcedure(procedure);if(procedure.thumbnail&&procedure.thumbnail.startsWith(baseURL)){//CMS will reject fully qualified URLs
procedure.thumbnail=procedure.thumbnail.substring(baseURL.length)}}let sxslProcedure=createProcedureSxsl(procedure),proj=await getTenantProject();await proj.storeResource(sxslProcedure);const newProcedure=await new PEProcedure().init(sxslProcedure);// Need to set createdby so that editor does not open in read only state.
newProcedure.properties.createdby=store.getState().app.userId;return newProcedure}/**
   * Saves the given procedure to the known CMS
   * @returns {sxsl.CMSProcedure} saved Procedure
   * @throws {ProcedureDoesNotExist}
   */async function saveProcedureToCMS(procedure){// TODO: Currently HTTP PUT handles both save and create, so doing a HEAD first is
// the only way to avoid resurrecting the procedure during a save.
const project=await getTenantProject(),exists=await project.checkResourceById(procedure.id);if(!exists){throw new ProcedureDoesNotExist(procedure.id)}const updatedProcedure=await createOrUpdateProcedureInCMS(procedure);//TODO workaround to set modifiedby, modifiedon and preserve old properties from proceduresList cache until we can get properties from CMS on update
updatedProcedure.properties.modifiedby=store.getState().app.userId;updatedProcedure.properties.modifiedon=new Date().toISOString();const procFromProcList=store.getState().procedureList.find(proc=>proc.id===updatedProcedure.id)||{};updatedProcedure.properties=Object.assign({},procFromProcList.properties,updatedProcedure.properties);return updatedProcedure}/**
   * Updates procedure's properties
   * Props not included in the metadata param won't be affected
   * @param {CMSProcedure} procedure
   * @param {Object} metadata - the properties to be updated
   */async function updateMetadata$2(procedure,metadata){const proj=await getTenantProject();if(proj){await proj.patchResourceMetadata(toSxslCompatibleResource(procedure),metadata)}}function toSxslCompatibleResource(procedure){return{// getURL is all sxsl library cares about really.
getURL(){return procedure.url}}}async function getCurrentPermissions(procedure){const accessRecords=await getWipProcedureAccess(procedure.id),defaultOrgRecord={global:!0,principal:OrgPrincipal,grantname:AccessCategory.Wip,permission:WipProcedureAccess.None},orgRecord=accessRecords.find(rec=>rec.principal===OrgPrincipal)||defaultOrgRecord;orgRecord.global=!0;const userRecords=accessRecords.filter(rec=>rec.principal!==OrgPrincipal);userRecords.sort((a,b)=>a.permission.localeCompare(b.permission));return[{principal:procedure.properties.createdby,creator:!0,grantname:AccessCategory.Wip,permission:WipProcedureAccess.Creator},orgRecord,...userRecords]}/**
   * Retrieves the existing procedures for the active project from the CMS
   * @returns {sxsl.CMSProcedure[]} stored Procedures
   */async function fetchProcedures(){const project=await getTenantProject();if(!project){return[]}const procedures=await project.listResources("procedures");return Promise.all(procedures.map(proc=>new PEProcedure().init(proc)))}/**
   * Retrieves the existing publications for published procedures for the active project from the CMS
   * @returns {Array<PEProcedure>} stored Procedures that are published
   */async function fetchProcedurePublications(){const project=await getTenantProject();if(!project){return[]}//GET publications?resourcetype=procedure
const result=await AuthUtils.fetch(`${baseURL}${project.url}/publications?resourcetype=procedures`);let items=await result.json();return items&&items.items}/**
   * Validates the procedure can be round-tripped from to/from sxsl source
   * @param {sxsl.Procedure} proc
   */function validateProcedure(proc){let procObject=proc.toObject();console.debug(procObject);let testProcedure=new sxsl.Procedure;testProcedure.fromObject(procObject)}function cloneAssets(assets){// never set/save asset metadata on step assets
assets.forEach(asset=>{if(asset.metadata){console.warn("removing asset metadata",asset.metadata);delete asset.metadata}});return assets.map(item=>{return{...item}})}/**
   * @returns {sxsl.CMSProcedure} new instance created from the current procedure defined in the app state.
   */function createProcedureSxsl(procedure){let steps=procedure.steps,thisProcedure=new sxsl.CMSProcedure;thisProcedure.setId(procedure.id);thisProcedure.setProperties(procedure.properties);thisProcedure.setTitle(procedure.title);thisProcedure.setThumbnail(procedure.thumbnail);for(const step of steps){const props={};if(step.fromGUID){props.fromGUID=step.fromGUID}let sd=new sxsl.StepDefinition().fromObject({id:step.id,properties:props,assets:cloneAssets(step.assets||[])});sd.setDescription(step.description);sd.setLocationAware(step.locationAware);thisProcedure.addStepDefinition(sd);thisProcedure.addStatement(new sxsl.StepStatement(step.id))}//Test sxsl to check if it parses (no invalid/undefined keys, values, etc);
validateProcedure(thisProcedure);return thisProcedure}/**
   * @returns {String} url of the published procedure
   */async function publishProcedure$1(procedure){let project=await getTenantProject();// publish the procedure so its marked as read only
const publishResult=await project.publish({procedure:procedure.id});// publish a default experience
await publishExperience({procedure},publishResult);console.info("published url",publishResult.contentUrl);return publishResult.contentUrl}async function unpublishProcedure$1(procedure){const project=await getTenantProject();await project.unpublish(procedure.id)}/**
   * @param {String} procedure
   * @returns {object} published info from given procedure (NOTE: this info is NOT the same as experience's published info)
   */function getPublishInfoFromMetadata(procedure){if(procedure&&procedure.properties){return procedure.properties.properties?procedure.properties.properties.published:procedure.properties.published}return void 0}function isProcedureCreatedByUser(procedure,userId){return procedure.properties&&procedure.properties.createdby===userId}/**
   * @param {Object} procedure
   * @returns {Date} the date of the last publish action
   */function getLastPublishedProcedureDate(procedure){const publishInfo=getPublishInfoFromMetadata(procedure);if(publishInfo&&publishInfo.createdon){return publishInfo.createdon}return""}/**
   * @param {Object} procedure
   * @returns {Date} the time of day of the last publish action
   */function getLastPublishedProcedureTime(procedure){const publishInfo=getPublishInfoFromMetadata(procedure);if(publishInfo&&publishInfo.createdon){return formatTimeToDisplay(new Date(publishInfo.createdon))}return""}/**
   * gets the publish view permission for a specific procedure
   * @param {String} procedureId
   * @returns {Array} access permissions
   */async function getPublishedProcedureAccess(procedureId){return await getProcedureAccessForCategory(procedureId,AccessCategory.Published)}const NoneAccess="none",OrgPrincipal="all",WipProcedureAccess={None:NoneAccess,View:"view",Edit:"edit",Creator:"creator"},PublishedAccess={None:NoneAccess,View:"view"},AccessCategory={Wip:"wip",Published:"published"};// Principal that represents all members of user's organization.
/**
    * gets the publish view permission for a specific procedure
    * @param {String} procedureId
    * @returns {Array} access permissions
    */async function getWipProcedureAccess(procedureId){return await getProcedureAccessForCategory(procedureId,AccessCategory.Wip)}/**
   *
   * @param {String} procedureId
   * @param {AccessCategory} category
   */async function getProcedureAccessForCategory(procedureId,category){const project=await getTenantProject(),data=await project.getAccess(procedureId,"procedure",category);// TODO: There is going to be an update to CMS soon which will change result from [...] to { items: [...] },
// accounting for this now so transition is more smooth, can remove the check later and just use data.items.
return data.items?data.items:data}/**
   * @param {String} procedureId
   * @param {WipProcedureAccess} access
   * @param {String} userId
   */async function setWipProcedureAccess(procedureId,access,userId){return await setProcedureAccessForCategory(procedureId,access,AccessCategory.Wip,userId)}/**
   * set the publish view permission for a user for a specific procedure
   * @param {String} procedureId
   * @param {PublishedAccess} access
   * @param {String} userId
   */async function setPublishedProcedureAccess(procedureId,access,userId){return await setProcedureAccessForCategory(procedureId,access,AccessCategory.Published,userId)}/**
   * @param {String} procedureId
   * @param {WipProcedureAccess} access
   * @param {AccessCategory} category
   * @param {String} userId
   */async function setProcedureAccessForCategory(procedureId,access,category,userId){const project=await getTenantProject();if(access===NoneAccess){return await project.removeAccess(procedureId,"procedure",category,userId)}else{return await project.setAccess(procedureId,"procedure",category,userId,access)}}/**
   * Applies changed access records to the CMS
   * @param {String} procedureId
   * @param {Array} accessRecords updated access records which can be obtained from getProcedureAccessForCategory
   */async function applyProcedureAccessRecordChanges(procedureId,accessRecords){const promises=[];for(const record of accessRecords){// Only update records that actually changed.
if(!record.readOnly&&record.access&&record.access!==record.originalAccess){if(!record.grantname){throw new Error("Missing grantname attribute (category) for access record",record)}promises.push(setProcedureAccessForCategory(procedureId,record.access,record.grantname,record.principal))}}await Promise.all(promises)}var procedureApi={getProcedure:getProcedure,ProcedureDoesNotExist:ProcedureDoesNotExist,getPublishedProcedureContent:getPublishedProcedureContent,fetchPublishedProcedureFromExperience:fetchPublishedProcedureFromExperience,createOrUpdateProcedureInCMS:createOrUpdateProcedureInCMS,saveProcedureToCMS:saveProcedureToCMS,updateMetadata:updateMetadata$2,getCurrentPermissions:getCurrentPermissions,fetchProcedures:fetchProcedures,fetchProcedurePublications:fetchProcedurePublications,validateProcedure:validateProcedure,createProcedureSxsl:createProcedureSxsl,publishProcedure:publishProcedure$1,unpublishProcedure:unpublishProcedure$1,getPublishInfoFromMetadata:getPublishInfoFromMetadata,isProcedureCreatedByUser:isProcedureCreatedByUser,getLastPublishedProcedureDate:getLastPublishedProcedureDate,getLastPublishedProcedureTime:getLastPublishedProcedureTime,getPublishedProcedureAccess:getPublishedProcedureAccess,NoneAccess:NoneAccess,OrgPrincipal:OrgPrincipal,WipProcedureAccess:WipProcedureAccess,PublishedAccess:PublishedAccess,AccessCategory:AccessCategory,getWipProcedureAccess:getWipProcedureAccess,getProcedureAccessForCategory:getProcedureAccessForCategory,setWipProcedureAccess:setWipProcedureAccess,setPublishedProcedureAccess:setPublishedProcedureAccess,setProcedureAccessForCategory:setProcedureAccessForCategory,applyProcedureAccessRecordChanges:applyProcedureAccessRecordChanges};async function deleteResource(url){let resourceRef=new sxsl.CMSResource(url),project=await getTenantProject();return await project.deleteResource(resourceRef)}var resourceApi={deleteResource:deleteResource};const createBlob=(content,name,type="application")=>{let blob=new Blob([JSON.stringify(content)],{type:`${type}/json`});blob.name=`${uuid()}-${name}.json`;return blob},arContextTemplate=(guideViewPosition,target)=>{let trackerType="ModelTarget",dataset="",name="";return{tracker:{name,guideViewPosition,target,dataset,tracker_type:trackerType,context_id:target}}},mtgContextTemplate=(partVisibility,camLocation,guideViewPosition,context)=>{return{partVisibility,camLocation,guideViewPosition,context}},JSON_ASSET_STRUCT={NODE_LIST:(existing,params)=>{return Object.assign(existing,params)},THREED_EFFECT:(existing,{uri,tvMode,partList,contextId,camLocation})=>{if(!existing.content){existing.content={}}// Hardcoded details
existing.content.type="highlight";existing.content.context_id=contextId;existing.content.transform={pos:"0.0 0.0 0.0",rot:"0.0 0.0 0.0 1.0",scale:"1.0 1.0 1.0"};existing.content.highlight_color="#FF0000";// Other details
existing.content.uri=uri;existing.content[THINGVIEW_MODE_CMS[tvMode]]=partList;if(camLocation){existing.content.camLocation=camLocation}return existing}// More JSON Asset structures here
};//create AR-context JSON format
/* Constructs a JSON Asset Blob from given parameters of given type
    * @param assetType the type of json asset
    * @param file metadata params
    * @param params for the struct
    * @existing the existing json data onto which new data is to be added
    */function constructJsonAsset(assetType,{fileName,fileType},params,existing={}){let json=JSON.stringify(JSON_ASSET_STRUCT[assetType](existing,params)),blob=new Blob([json],{type:fileType});blob.name=`${uuid()}-${fileName}`;return blob}/**
   * Load the 3deffect assset for the step, if it has one, and populate it with
   *   inflated referenced assets as needed
   *  @param {String} procedureId - The procedure id to reference
   *  @param {String} stepId - The step id to reference in this procedure
   *  @param {Boolean} loadAssets - Optionally load the internal reference assets {Default: false}
   */async function load3dEffectJsonAssetForStep({procedureId,stepId,loadAssets,options}){let procedure=await getProcedure(procedureId),step,effect,asset=null;for(let stp of procedure.steps){if(stp.id===stepId){step=stp;break}}let threedEffectAsset;for(let ast of step.assets){if(ast.type===ASSET_TYPE.THREED_EFFECT){threedEffectAsset=ast;break}}if(!threedEffectAsset){return{effect,asset}}asset=await fetchAssetByUrl(`${threedEffectAsset.url}`,options);effect=JSON.parse(asset.data);if(loadAssets){// Replace each json url with actual content
for(let mode of Object.values(THINGVIEW_MODE_CMS)){// If its a url, load asset
if(effect.content[mode]&&"string"===typeof effect.content[mode]){let asset=await fetchAssetByUrl(effect.content[mode]);effect.content[mode]=JSON.parse(asset.data).nodes}}}return{effect,asset}}/**
   * Load the MTG-Context assset for the step, if it has one, and populate it with
   *   inflated referenced assets as needed
   *  @param {String} param1.procedureId - The procedure id to reference
   *  @param {String} param1.stepId - The step id to reference in this procedure
   *  @param {Object} param1.options - The options for cdn  {headers: {'x-no-cdn': true}}
   */async function loadMtgContextJsonAssetForStep({procedureId,stepId,options}){let procedure=await getProcedure(procedureId),[mtgAsset]=procedure.steps.filter(p=>p.id===stepId).map(s=>s.assets.filter(a=>a.type===ASSET_TYPE.MTG_CONTEXT)).flat(2);if(!mtgAsset){return null}let effectAsset=await fetchAssetByUrl(mtgAsset.url,options),{partVisibility,camLocation}=JSON.parse(effectAsset.data);return{content:{model_visibility:partVisibility,camLocation}}}var assetJsonApi={createBlob:createBlob,arContextTemplate:arContextTemplate,mtgContextTemplate:mtgContextTemplate,JSON_ASSET_STRUCT:JSON_ASSET_STRUCT,constructJsonAsset:constructJsonAsset,load3dEffectJsonAssetForStep:load3dEffectJsonAssetForStep,loadMtgContextJsonAssetForStep:loadMtgContextJsonAssetForStep};class ProcedureAuth{/**
   * @param {PEProcedure} procedure has id and properties.sharedpublished
   * @return {Promise<boolean>} true if current user can view the published procedure, false otherwise
   */static async canViewPublished(procedure){const userId=getCurrentUserId();if(!procedure||!userId){return!1}// check if all users in the org have read access
if(procedure.properties&&1===procedure.properties.sharedpublished){return!0}let access;try{access=await getProcedureAccessForCategory(procedure.id,AccessCategory.Published)}catch(e){// User may not have access to fetch the .access
if(403!==e.status){console.error("Error fetching access grants",e)}}return Array.isArray(access)&&!!access.find(info=>(info.principal===userId||info.principal===OrgPrincipal)&&info.permission===PublishedAccess.View)}static canDelete(procedure){const userId=getCurrentUserId();if(!procedure||!userId){return!1}return isProcedureCreatedByUser(procedure,userId)||AuthUtils.isAdmin()}static canEdit(procedure){const userId=getCurrentUserId();if(!procedure||!userId){return!1}return procedure.properties&&1===procedure.properties.shared||isProcedureCreatedByUser(procedure,userId)||AuthUtils.isAdmin()}static canShare(procedure){const userId=getCurrentUserId();if(!procedure||!userId){return!1}return isProcedureCreatedByUser(procedure,userId)||AuthUtils.isAdmin()}}function getCurrentUserId(){const app=store.getState().app||{};return app.userId}var ProcedureAuth$1={ProcedureAuth:ProcedureAuth};/* begin copyright text
    *
    * Copyright © 2016 PTC Inc., Its Subsidiary Companies, and /or its Partners. All Rights Reserved.
    *
    * end copyright text
    */ /**
        * Class for reporting progress to be used by progress bars.
        */class ProgressReporter{/**
   * @param {Object} sections Defines sections that will be usable in reportProgress method calls in the form of:
   *  { sectionName: { share: <Number> }, ... }
   * Where all share attribute values from all sections have to add up to 100.
   * @param {Function} notify Called when progress value changes.
   */constructor(sections,notify){this.cancelled=!1;this._notify=notify;this.sections=sections;this.progress=0;this._cancelledPromise=new Promise(resolve=>this._resolveCancelledPromise=resolve);const total=Object.values(sections).reduce((sum,section)=>sum+section.share,0);if(100!==total){throw new Error("Section shares in ProgressReporter must add up to 100",total)}}notify(){if(this._notify){this._notify(this.progress)}}/**
     * Reports progress for the specified section.
     * @param {String} sectionName
     * @param {Number} progress in range of 0 to 1, the ratio of the progress for this section
     */reportProgress(sectionName,progress=1){const section=this.sections[sectionName];if(!section){// no need to update if the section it's not configured in the Reporter
// for Captures, there is no extraction phase when a Folder is being uploaded
return}section.progress=progress;const prevProgress=this.progress;this.progress=Object.values(this.sections).reduce((total,section)=>{return total+(section.progress||0)*section.share},0);// No need to update when changes were smaller than 1%.
if(Math.round(this.progress)!==Math.round(prevProgress)){this.notify()}}cancelWork(){this.cancelled=!0;this._resolveCancelledPromise()}whenCancelled(){return this._cancelledPromise}}var ProgressReporter$1={ProgressReporter:ProgressReporter};const PLACEHOLDER_USER={displayName:""};/**
    * make a request to get user Informartion from the account service
    * @param {String} id - user id to fetch (objectId attribute in user payload)
    * @returns {Object} response user payload
    */async function fetchUser$1(id){let user=getUserFromCache(id);if(!user||!user.displayName){const result=await AuthUtils.fetch(`${baseURL}${accountServicePath}/users/${encodeURI(id)}`);user=await result.json()}return user}/**
   * Get user data from cache
   * @param {String} id - user id to fetch (objectId attribute in user payload)
   * @returns {Object} user
   */function getUserFromCache(id){return store.getState().users[id]}/**
   * Get the user from cache, and if not found, dispatch an event to
   * get the user into cache. This is async function, so components
   * should watch state changes for updates to the user cache.
   * @param {String} id - user id to fetch (objectId attribute in user payload)
   * @returns {Object} User object, which is a empty user object if not found in cache
   */function getUserAndCache(id){let user=getUserFromCache(id);if(!user){if(id){// Only fetch real users, tests may not have setup data
store.dispatch(fetchUser(id))}user=PLACEHOLDER_USER}return user}function getUserAvatar(user){let avatarInitials="";const{email,avatarColor}=user,avatarStyle=avatarColor?`background-color: ${avatarColor}`:"",fullName=getUserFullName(user);if(fullName){avatarInitials=fullName.split(" ").map(namePart=>namePart[0].toUpperCase()).join("")}else if(email){avatarInitials=email[0].toUpperCase()}return{avatarInitials,avatarStyle}}function getUserFullName(user){const{firstName="",lastName="",displayName=""}=user;if(firstName||lastName){return`${firstName} ${lastName}`.trim()}else{return displayName}}async function fetchUsers$1(){const state=store.getState();let tryCount=1,users;//For now, no retries
while(!users&&0<=--tryCount){try{const result=await AuthUtils.fetch(`${baseURL}${accountServicePath}/organizations/${encodeURI(state.app.organization.id)}/members`,{headers:{Accept:"application/json"}});if(result.ok){users=(await result.json()).rows}}catch(e){console.log("Members route failed",e)}}return users}var userService={fetchUser:fetchUser$1,getUserFromCache:getUserFromCache,getUserAndCache:getUserAndCache,getUserAvatar:getUserAvatar,getUserFullName:getUserFullName,fetchUsers:fetchUsers$1};function*fetchAssets$1(action){try{let urlParams;if(action.includeContainedAssets!==void 0){urlParams=new URLSearchParams;urlParams.set("contained",action.includeContainedAssets)}let assets=yield call(fetchAssets,action.assetType,urlParams);yield put({type:FETCH_ASSETS_SUCCEEDED,assetType:action.assetType,assets})}catch(e){console.info("failed to retrieve assets",e);yield put({type:FETCH_ASSETS_FAILED,message:e.message})}}/**
   * Deletes the asset from the CMS
   */function*deleteAsset$1(action){try{yield call(deleteResource,action.asset.url);yield put({type:DELETE_ASSET_COMPLETE,asset:action.asset})}catch(e){console.error("Failed to delete asset",e);yield put({type:DELETE_ASSET_FAILED,message:e.message})}}/**
   * Rename the asset from the CMS
   */function*renameAsset$2(action){try{//updating name for existing asset
let updatedAsset=yield call(renameAsset$1,action.asset);yield put({type:RENAME_ASSET_COMPLETE,asset:updatedAsset})}catch(e){console.error("failed to rename asset",e);yield put({type:RENAME_ASSET_FAILED,message:e.message})}}/**
   * gets metadata for asset for which is needed for some UI. After getting the metadata, a custom event
   *  will be emitted from the document.body.  the event id is passed in for uses such as preview, or showing thumbnails
   * @param {Object} action
   * @param {String} action.event - the event name to dispatch such as 'preview', or etc.
   * @param {Object} action.asset - the asset reference for which needs metadata
   * @param {String} action.asset.type - the type of asset ('image', 'video') for caching
   */function*fetchMetadataForAsset(action){try{let asset=action.asset,metadata=yield call(fetchAssetMetadata,asset);if(metadata){asset.metadata=metadata}if(!(asset instanceof sxsl.CMSAsset)){//Asset store/state needs CMS Assets, asset references that get inflated will cause issues otherwise
asset=new sxsl.CMSAsset(asset.url,metadata,asset.data)}yield put({type:FETCH_ASSET_METADATA_SUCCEEDED,assetType:action.asset.type,asset});//2 known events, thumbnail and metadata.  Only dispatch the thumbnail event if the thumbnail is done.
if("assetThumbnail"!==action.event||metadata&&metadata.thumbnail){document.body.dispatchEvent(new CustomEvent(action.event,{detail:{stepId:action.stepId,asset}}))}else{//No thumbnail yet, try again in N seconds
yield delay(7e3);yield put(action)}}catch(e){console.error("failed to fetch asset metadata",e);yield put({type:FETCH_ASSET_METADATA_AND_EMIT_EVENT_FAILED,message:e.message})}}/**
   * Gets list of procedures that use particular asset
   * @param {Object} action
   * @param {Object} action.asset - asset to get procedures that use it
   */function*fetchAssetUses$1(action){try{const procedures=yield call(getAssetUses,action.asset);let users=[];// fetch the creators of the using procedures
for(let i=0;i<procedures.length;i++){const userId=procedures[i].properties.properties.createdby;let user=getUserFromCache(userId);if(!user){try{yield put({type:"FETCH_USER_IN_PROGRESS",id:userId});user=yield call(fetchUser$1,userId);yield put({type:"FETCH_USER_SUCCEEDED",user})}catch(e){console.error("failed to retrieve users",e);yield put({type:"FETCH_USER_FAILED",id:userId,message:e.message})}}users[userId]=user}yield put({type:FETCH_ASSET_USES_SUCCEEDED,uses:procedures,assetId:action.asset.id,users})}catch(e){console.error("failed to fetch asset metadata",e);yield put({type:FETCH_ASSET_USES_FAILED,message:e.message})}}function*setupAssetCreationSagas(){const creationChannel=yield call(channel$1);yield fork(assetCreationProcess,creationChannel);yield takeEvery$1(CREATE_ASSET,createAsset$2,creationChannel)}function*createAsset$2(creationChannel,{file,context}){const item={file,context:context||{}};try{yield put({type:CREATE_ASSET_START,item});let existingAsset;if(isCaptureFile(file)){try{existingAsset=!1;//always try to upload the capture sub files
item.captureData=yield call(getDropFileData,file);item.name=item.captureData.data.WorkflowGUID.Value}catch(e){console.error("saga createAsset failed to get drop file data",e,file);yield put({type:CREATE_ASSET_FAILED,item,message:"create-procedure.fail-file-upload"});return}}else{if(!validateFileExtension(file,file.type)){yield put({type:CREATE_ASSET_FAILED,item});return}item.name=yield call(generateUniqueName,file);existingAsset=yield call(fetchAsset,item.name)}if(existingAsset){yield put({type:CREATE_ASSET_COMPLETE,item,asset:existingAsset,existing:!0});return}yield put({type:CREATE_ASSET_ENQUEUE_UPLOAD,item});// Notify assetCreationProcess that a new item has been queued.
yield put(creationChannel,{})}catch(e){console.error("saga createAsset failed during preperation",e,file);yield put({type:CREATE_ASSET_FAILED,item})}}/**
   * A worker saga that takes files queued to be uploaded as assets and uploads them one by one.
   * @param {Channel} creationChannel
   */function*assetCreationProcess(creationChannel){let item;while(!0){try{yield take(creationChannel);const{queue}=(yield select()).assetCreation;if(1>queue.length){continue;// There was nothing to upload after all. Could be a result of a cancel.
}item=queue[0];yield put({type:CREATE_ASSET_UPLOAD_START,item});yield race([call(doCreateAsset,item),take(CREATE_ASSET_CANCEL_ALL)])}catch(e){console.error("saga createAsset failed during upload",e,item);yield put({type:CREATE_ASSET_FAILED,item})}}}/**
   * Does the actual asset creation part of work. Called by assetCreationProcess.
   * @param {Object} item an item from assetCreation reducer's queue.
   */function*doCreateAsset(item){let progressReporter;try{const{file,name,context,captureData}=item;let asset;const isZip=captureData&&"zip"===captureData.type;progressReporter=getProgressReporter({name},isZip);if(captureData){const title=getCaptureTitle(captureData,file),capture=yield call(saveCaptureAsset,name,captureData.fileHelper,title,captureData.data,progressReporter);yield call(ensureCaptureEdgesAreCreated,capture);asset=capture.getAsset()}else{asset=yield call(createAsset$1,name,file,null,context&&context.step,progressReporter.whenCancelled(),context&&context.tags)}// Find duplicate items before dispatching CREATE_ASSET_COMPLETE because
// reducer is going to remove them when handling that action.
const{queue}=store.getState().assetCreation,duplicateItems=queue.filter(other=>other.name===item.name);yield put({type:CREATE_ASSET_COMPLETE,item,asset,uploaded:!0});// Notify all duplicate attempts that this asset was created. That is needed so that other
// sagas such as addAssetToStep can proceed.
for(const duplicate of duplicateItems){yield put({type:CREATE_ASSET_COMPLETE,item:duplicate,asset,duplicate:!0})}}catch(e){console.error("saga createAsset failed during upload",e,item);yield put({type:CREATE_ASSET_FAILED,item})}finally{if((yield cancelled())&&progressReporter){progressReporter.cancelWork()}}}function getProgressReporter(asset,isZip){const sections=isZip?{extraction:{share:50},upload:{share:50}}:{upload:{share:100}};return new ProgressReporter(sections,progress=>{document.body.dispatchEvent(new CustomEvent("assetUploadProgress",{detail:{progressEvent:{loaded:Math.min(progress,100),total:100},asset}}))})}function getCaptureTitle(captureData,file){return captureData.data.Title||file.name.replace(/\.zip$/,"")}function*updateAssetBrowserAfterCreatingAsset({asset,uploaded}){if(!uploaded){return;// Asset already existed.
}// Assets that get loaded from CMS do not have metadata filled out, so this would fail.
const metadata=asset.getMetadata();if(metadata){// Captures have subtype 'container' and are tagged as a capture.
// Images and videos have subtypes that match their list type.
let type;if("container"===metadata.subtype&&metadata.tags&&metadata.tags.includes(".capture")){type=ASSET_LIST_TYPE.CAPTURES}else if("container"!==metadata.subtype){type=metadata.subtype}if(!type){console.error("Could not figure out newly created asset type",asset);return}yield put(loadAssets(type,!1))}}function*markNewlyCreatedAssets({asset,uploaded}){if(!uploaded){return}const assetId=asset.name;yield put({type:MARK_NEWLY_CREATED_ASSET,assetId});yield delay(2e3);// animation lasts 2 seconds
yield put({type:UNMARK_NEWLY_CREATED_ASSET,assetId})}/**
   * update exsiting MTG-Context asset with new file
   * @param {Object} exsitingAsset - exsited asset
   * @param {Blob} file - new file
   */function*updateMTGcontextAssets({existingAsset,file}){//Avoid cdn caching
let options={headers:{"x-no-cdn":!0}};//Get existing asset
const existingAssetFromCMS=yield call(fetchAssetByUrl,existingAsset.url,options);//Get new data
let newData=yield file.text();newData=JSON.parse(newData);// Apply new data to existing asset
existingAssetFromCMS.data=JSON.stringify(Object.assign({},JSON.parse(existingAssetFromCMS.data),newData));// Save asset with new data
yield call(saveAssetToCMS,existingAssetFromCMS)}function*assetsSaga(){yield all([yield takeEvery$1(FETCH_ASSETS,fetchAssets$1),yield takeEvery$1(DELETE_ASSET,deleteAsset$1),yield takeEvery$1(RENAME_ASSET,renameAsset$2),yield takeEvery$1(FETCH_ASSET_METADATA_AND_EMIT_EVENT,fetchMetadataForAsset),yield takeEvery$1(FETCH_ASSET_USES,fetchAssetUses$1),yield fork(setupAssetCreationSagas),yield takeLatest$1(CREATE_ASSET_COMPLETE,updateAssetBrowserAfterCreatingAsset),yield takeEvery$1(CREATE_ASSET_COMPLETE,markNewlyCreatedAssets)])}var assets$3={fetchAssets:fetchAssets$1,deleteAsset:deleteAsset$1,renameAsset:renameAsset$2,fetchMetadataForAsset:fetchMetadataForAsset,fetchAssetUses:fetchAssetUses$1,setupAssetCreationSagas:setupAssetCreationSagas,createAsset:createAsset$2,assetCreationProcess:assetCreationProcess,doCreateAsset:doCreateAsset,updateAssetBrowserAfterCreatingAsset:updateAssetBrowserAfterCreatingAsset,markNewlyCreatedAssets:markNewlyCreatedAssets,updateMTGcontextAssets:updateMTGcontextAssets,assetsSaga:assetsSaga,default:assetsSaga};function*saveProcedure({procedureId}){if(store.getState().procedures.savesInProgress[procedureId]){yield put({type:SAVE_PROCEDURE_SCHEDULE_ANOTHER_SAVE,procedureId});return}while(!0){yield put({type:SAVE_PROCEDURE_START,procedureId});try{const activeProcedureHistory=store.getState().procedures.cache[procedureId],procedure=yield call(saveProcedureToCMS,activeProcedureHistory&&activeProcedureHistory.present);yield put({type:SAVE_PROCEDURE_SUCCEEDED,procedureId,procedure})}catch(e){if(e instanceof ProcedureDoesNotExist){yield put({type:SAVE_PROCEDURE_FAILED,procedureId,message:e.message});yield put(showBannerMessage(window.i18next.t("no-procedure-found"),BANNER_MESSAGE_TYPE.ERROR));// Leave the procedure editor if it was open for the procedure that no longer exists.
const openProcedureId=new URLSearchParams(window.location.search).get("procedure");if(openProcedureId===procedureId){yield put({type:NAVIGATE_TO_ROUTE_START,route:ROUTE.editor,search:{}})}}else{console.error("saveProcedure fail: ",e);yield put({type:SAVE_PROCEDURE_FAILED,procedureId,message:e.message});yield put(showBannerMessage(window.i18next.t("save-failed"),BANNER_MESSAGE_TYPE.ERROR))}}finally{yield put({type:SAVE_PROCEDURE_END,procedureId})}if(!store.getState().procedures.pendingSaves[procedureId]){// Exit the saga once we make sure that no additional saves are pending.
break}}yield put({type:SAVE_PROCEDURE_PROCESS_EXIT,procedureId})}/**
   * Auto Save the active procedure
   */function*saveActiveProcedure(){yield put({type:SAVE_PROCEDURE,procedureId:store.getState().procedures.activeId})}function getProgressReporterForCaptureUpload(isZip,onProgress){const config=isZip?{extraction:{share:50},upload:{share:50}}:{upload:{share:100}};return new ProgressReporter(config,onProgress)}/**
   * Uploads capture assets as part of the new procedure creation saga.
   * @param {String} procedureName
   * @param {File} captureFile
   * @param {String} captureFileName
   * @param {Function} onProgress - progress reporting callback
   */function*uploadNewProcedureContents(procedureName,captureFile,captureFileName,onProgress){if(!captureFile){return{}}const timerId="Create procedure "+procedureName;console.time(timerId);let progressReporter;try{const procData=yield call(getDropFileData,captureFile),captureTitle=procData.data.Title||captureFileName,captureId=procData.data.WorkflowGUID.Value;progressReporter=getProgressReporterForCaptureUpload("zip"===procData.type,onProgress);const capture=yield call(saveCaptureAsset,captureId,procData.fileHelper,captureTitle,procData.data,progressReporter);// Initialize capture so it can populate steps from the timing.json
yield apply(capture,capture.initialize,[procData.data]);const orgId=yield call(getOrgId),steps=capture.getProcedureSteps(orgId);yield call(createSemanticLocationGraph,capture,steps);return{steps,capture}}catch(e){console.error("Create procedure failed",e);yield put(failed("create-procedure.fail-capture-upload"));return!1}finally{if((yield cancelled())&&progressReporter){progressReporter.cancelWork()}console.timeEnd(timerId)}}/**
   * Finishes new procedure creation process by saving the procedure object to CMS.
   * @param {String} procedureName
   * @param {Array<Object>} steps
   * @param {CaptureData} capture
   * @param {PEProcedure} copiedProcedure set when we are coping a procedure
   */function*finalizeProcedureCreation(procedureName,steps,capture,copiedProcedure){try{const payload=copiedProcedure?PEProcedure.getCopyProcedurePayload({title:procedureName,copiedProcedure}):PEProcedure.getCreateProcedurePayload({steps,title:procedureName}),procedure=yield call(createOrUpdateProcedureInCMS,payload);if(copiedProcedure){procedure.properties.modifiedon=new Date().toISOString();yield put(tabNavigation(TABS.CREATED_BY_ME,"/",null,"my_procedures",!1));yield put({type:CREATE_PROCEDURE_SUCCEEDED,procedure,copied:!0});return}yield put({type:CREATE_PROCEDURE_SUCCEEDED,procedure,copied:!1});yield put({type:OPEN_PROCEDURE,procedure});if(capture){yield put(tabNavigation(TABS.CAPTURES,"",ASSET_LIST_TYPE.CAPTURES,void 0,!0));yield put(openCapture(capture.getAsset()))}}catch(e){console.error("Create procedure failed",e);yield put({type:CREATE_PROCEDURE_FAILED,message:"create-procedure.fail-save"})}}function*createProcedure({procedureName,captureFile,captureFileName,copiedProcedureId,onProgress}){yield put({type:CREATE_PROCEDURE_START});const{uploaded,cancelled}=yield race({uploaded:uploadNewProcedureContents(procedureName,captureFile,captureFileName,onProgress),cancelled:take(CREATE_PROCEDURE_CANCEL)});// It would be to late to cancel beyond this point.
if(cancelled||!uploaded){return}const{steps,capture}=uploaded,copiedProcedure=copiedProcedureId?yield call(getProcedure,copiedProcedureId):null;yield*finalizeProcedureCreation(procedureName,steps,capture,copiedProcedure)}/**
   * New procedure Saga, auto-saves the new state copy
   */function*openProcedure$1(action){yield put({type:NAVIGATE_TO_ROUTE_START,route:ROUTE.editor,params:{procedure:action.procedure.id}})}/**
   * Deletes the given procedure from the CMS
   */function*deleteProcedure$1({procedureId,url}){try{if(store.getState().procedures.savesInProgress[procedureId]){// If there was a save in progress wait for it to finish,
// so that we do not risk "resurrecting" objects.
yield*waitForFirstProcedureAction(procedureId,[SAVE_PROCEDURE_SUCCEEDED,SAVE_PROCEDURE_FAILED,// Also handle delete actions so this does not end up hanging forever if two deletes were requested.
DELETE_PROCEDURE_COMPLETE,DELETE_PROCEDURE_FAILED])}yield put({type:DELETE_PROCEDURE_START,procedureId});yield call(deleteResource,url);yield put({type:DELETE_PROCEDURE_COMPLETE,procedureId});yield put(showBannerMessage(window.i18next.t("procedure-delete-succeeded"),BANNER_MESSAGE_TYPE.SUCCESS))}catch(e){console.error("deleteProcedure fail: ",e);yield put({type:DELETE_PROCEDURE_FAILED,procedureId,message:e.message});yield put(showBannerMessage(window.i18next.t("procedure-delete-failed"),BANNER_MESSAGE_TYPE.ERROR))}}function matchProcedureAction(type,procedureId){return action=>action.type===type&&action.procedureId===procedureId}function*waitForFirstProcedureAction(procedureId,actionTypes){return yield race(actionTypes.map(actionType=>matchProcedureAction(actionType,procedureId)))}function*doSaveProcedure(procedureId){yield put({type:SAVE_PROCEDURE,procedureId});return yield race({result:take(matchProcedureAction(SAVE_PROCEDURE_SUCCEEDED,procedureId)),failed:take(matchProcedureAction(SAVE_PROCEDURE_FAILED,procedureId))})}/**
   * Saves the modified procedure to the CMS
   */function*renameProcedure$1({procedureId}){// Note that the actual rename was done in PEProcedure.reducer, here we are just saving the procedure
// and firing rename actions.
// TODO: Can we completely remove this saga? Just run saveProcedure on RENAME_PROCEDURE action.
const{result,failed}=yield*doSaveProcedure(procedureId);if(result){yield put({type:RENAME_PROCEDURE_COMPLETE,procedure:result.procedure})}else{console.error("renameProcedure fail");yield put({type:RENAME_PROCEDURE_FAILED,message:failed.message})}}function*setFirstStepAsActive(procedure){let stepId=null,procedureId=null;if(procedure&&procedure.steps&&0<procedure.steps.length){const step=procedure.steps[0];step.stepNumber=1;stepId=step.id;procedureId=procedure.id}yield put({type:SET_ACTIVE_STEP,stepId,procedureId})}function*setActiveStepOnLoad({procedure}){yield*setFirstStepAsActive(procedure)}function*setActiveStepAfterRemoval({index}){const activeProcedure=getActiveProcedure(store),activeStepId=store.getState().procedures.activeStep.id,steps=activeProcedure.steps;if(activeStepId&&steps.length&&!steps.find(step=>activeStepId===step.id)){let step=null;if(index<steps.length){// If active step has been removed reset it to either whatever step took it place (has the same index)...
step=steps[index];step.stepNumber=index+1}else{// ... or if it was the last step to the new last step.
const index=steps.length-1;step=steps[index];step.stepNumber=index+1}yield put({type:SET_ACTIVE_STEP,stepId:step.id,procedureId:activeProcedure.id})}}/**
   * Publishes the procedure to the CMS
   */function*publishProcedure$2({procedure}){try{yield put(showBannerMessage(window.i18next.t("share.publish-in-progress"),BANNER_MESSAGE_TYPE.PROGRESS));// This code is to update old procedures which might have an obsolete thumbnail,
// which was set using the original image, not the small image thumbnail (DT-26661).
if(procedure.thumbnail&&!procedure.thumbnail.endsWith(".thumbnail")){// Just save the procedure again, save code should correct the thumbnail.
const{failed}=yield*doSaveProcedure(procedure.id);if(failed){console.error("publishProcedure failed because saving procedure to update the thumbnail failed");yield put(showBannerMessage(window.i18next.t("share.publish-failed"),BANNER_MESSAGE_TYPE.ERROR));return}procedure=yield call(getProcedure,procedure.id)}const url=yield call(publishProcedure$1,procedure);yield put(showBannerMessage(window.i18next.t("share.publish-succeeded"),BANNER_MESSAGE_TYPE.SUCCESS));const experiencePublishConfig=yield call(getExperienceConfigForProcedure,procedure);yield put(publishProcedureSucceeded(procedure.id,{...experiencePublishConfig,url}))}catch(e){console.error("publishProcedure fail: ",e);yield put(showBannerMessage(window.i18next.t("share.publish-failed"),BANNER_MESSAGE_TYPE.ERROR))}}/**
   * Unpublishes the procedure from the CMS
   */function*unpublishProcedure$2({procedure}){try{yield put(showBannerMessage(window.i18next.t("share.unpublish-in-progress"),BANNER_MESSAGE_TYPE.PROGRESS));const url=yield call(unpublishProcedure$1,procedure);yield put(showBannerMessage(window.i18next.t("share.unpublish-succeeded"),BANNER_MESSAGE_TYPE.SUCCESS));yield put(unpublishProcedureSucceeded(procedure.id))}catch(e){console.error("unpublishProcedure fail: ",e);yield put(showBannerMessage(window.i18next.t("share.unpublish-failed"),BANNER_MESSAGE_TYPE.ERROR))}}function*updateActiveStepIfNeeded({originStep,destStep}){// This saga is necessary because activeStep in the store is independant of the steps stored in the procedure,
// so if a modification was performed on the steps directly in the procedure the state might get out of sync.
// It may be worth considering to instead of having an activeStep object directly to have an activeStepId
// which would need to be resolved directly from procedure.
const activeProcedure=getActiveProcedure(store),activeStep=getActiveStep(store);if(activeStep){let toUpdate=null;if(originStep.id===activeStep.id){toUpdate=originStep}else if(destStep.id===activeStep.id){toUpdate=destStep}if(toUpdate){// Make sure we have the most up-to-date instance fresh from the procedure itself.
const newStep=activeProcedure.steps.find(s=>s.id===toUpdate.id);yield put({type:SET_ACTIVE_STEP,stepId:newStep.id,procedureId:activeProcedure.id})}}}/**
   * Adds the Asset to the indicated step on the active procedure. Will work either with
   * and already uploaded asset when provided assetId, or with a file object which will be
   * uploaded as a new asset.
   */function*addAssetToStep$2({procedureId,stepId,assetId,file,targetAssetName,insertAfter,undoHistoryGroupKey,tags}){try{const storeAsset=getAssetFromStore(assetId),asset=storeAsset?storeAsset:yield*getAssetFromIdOrFile(assetId,file,stepId,tags);if(!asset){return;// Asset upload cancelled.
}if(procedureId){// Checking if asset has already been added to this step.
const procedure=yield call(getProcedure,procedureId),step=procedure.steps.find(step=>step.id===stepId)||{},assetAlreadyAddedToStep=(step.assets||[]).find(a=>a.name===asset.name);if(assetAlreadyAddedToStep){yield put(showBannerMessage(window.i18next.t("duplicate-asset-added-to-step"),BANNER_MESSAGE_TYPE.NOTIFICATION));return}//Check if asset is a MODEL and step already has a model, replace it
if(asset.metadata.subtype===ASSET_TYPE.MODEL){const existingModelAsset=(step.assets||[]).find(a=>a.type===ASSET_TYPE.MODEL);if(existingModelAsset){let assetNames=[existingModelAsset.name].concat(getJsonAssetNamesForStep(step));yield put({type:REMOVE_ASSETS_FROM_STEP,assetNames,stepId:step.id})}}//Check if asset is a ARcontext and step already has a ARcontext, replace it
if(asset.metadata.subtype===ASSET_TYPE.AR_CONTEXT){const existingARAsset=(step.assets||[]).find(a=>a.type===ASSET_TYPE.AR_CONTEXT);if(existingARAsset){// Avoid cdn caching
let options={headers:{"x-no-cdn":!0}};// Get existing asset
const existingARAssetFromCMS=yield call(fetchAssetByUrl,existingARAsset.url,options);// Get new data
let newData=yield file.text();newData=JSON.parse(newData);// Apply new data to existing asset
existingARAssetFromCMS.data=JSON.stringify(Object.assign({},JSON.parse(existingARAssetFromCMS.data),newData));// Save asset with new data
yield call(saveAssetToCMS,existingARAssetFromCMS);// No need to add asset to step
return}}//Check if asset is a MTGcontext and step already has a MTGcontext. update it
if(asset.metadata.subtype===ASSET_TYPE.MTG_CONTEXT){const existingMtgAsset=(step.assets||[]).find(a=>a.type===ASSET_TYPE.MTG_CONTEXT);if(existingMtgAsset){yield updateMTGcontextAssets({existingAsset:existingMtgAsset,file});return}}yield put({type:DO_ADD_ASSET_TO_STEP,procedureId,stepId,asset,targetAssetName,insertAfter,undoHistoryGroupKey});yield put({type:SAVE_PROCEDURE,procedureId})}}catch(e){console.error(`Failed to add asset ${assetId||file&&file.name} to procedure ${procedureId}`,e);yield put(showBannerMessage(window.i18next.t("add-asset-to-step-failed"),BANNER_MESSAGE_TYPE.ERROR))}}/**
   * creates new step and adds the media asset to newly created step
   */function*addAssetInNewStep$1({index,assetId,assetOrigin}){try{yield put({type:NEW_STEP,index});const activeProcedure=getActiveProcedure(store),insertedStep=activeProcedure.steps[index];if(assetOrigin){const originStep=activeProcedure.steps.find(s=>s.id===assetOrigin);yield put({type:ASSET_MOVE,originStep,destStep:insertedStep,assetName:assetId,oldIndex:0,newIndex:0})}else{yield put({type:ADD_ASSET_TO_STEP,procedureId:activeProcedure.id,stepId:insertedStep.id,assetId,targetAssetName:null,insertAfter:null})}}catch(e){console.error(`Failed to add asset ${assetId} in new step`,e);yield put(showBannerMessage(window.i18next.t("add-asset-to-step-failed"),BANNER_MESSAGE_TYPE.ERROR))}}/*
   * Convenience function to get names of THREED_EFFECT and AR_CONTEXT assets
   *
   */function getJsonAssetNamesForStep(step){let jsonAssetNames=[];// Collect 3d-effects and AR-Contexts
for(let ast of step.assets){if(ast.type===ASSET_TYPE.THREED_EFFECT||ast.type===ASSET_TYPE.AR_CONTEXT){jsonAssetNames.push(ast.name)}}return jsonAssetNames}/**
   * Remove assets from the step and reset selection
   */function*removeAssetsFromStep({assetNames,stepId}){let isModelRemoved=!1,procedure=getActiveProcedure(store),step;// Find the step
for(let stp of procedure.steps){if(stp.id===stepId){step=stp;break}}// Check if assetNames includes model
for(let ast of step.assets){if(ast.type===ASSET_TYPE.MODEL&&assetNames.includes(ast.name)){isModelRemoved=!0;break}}if(isModelRemoved){assetNames=assetNames.concat(getJsonAssetNamesForStep(step))}yield put({type:REMOVE_ASSETS_FROM_STEP,assetNames,stepId});yield put({type:RESET_ASSET_SELECTION})}function*getAssetFromIdOrFile(assetId,file,stepId,tags){if(assetId){const asset=yield call(fetchAsset,assetId);if(!asset){throw new Error("Attempted to fetch asset by id, but it does not exist "+assetId)}return asset}else if(file){return yield*createAssetFromFile(file,{step:{id:stepId},tags})}else{throw new Error("addAssetToStep saga requires either assetId or file parameters.")}}function*createAssetFromFile(file,context){function assetCreationAction(type,file){return action=>action.type===type&&action.item.file===file}// Just calling out to createAsset saga and waiting for the result.
yield put(createAsset(file,context));const{result,failed,cancelled}=yield race({result:take(assetCreationAction(CREATE_ASSET_COMPLETE,file)),failed:take(assetCreationAction(CREATE_ASSET_FAILED,file)),cancelled:take(CREATE_ASSET_CANCEL_ALL)});if(failed){throw new Error(failed)}if(cancelled){return null}return result.asset}/**
   * Adds the new clip video asset to the indicated step on the active procedure
   */function*addVideoClipToStep$1({procedureId,stepId,videoData,title}){try{const asset=yield call(createVideoClip,videoData,title);yield put({type:MARK_NEWLY_GENERATED_VIDEO_ASSET,assetId:asset.name});if(procedureId){yield put({type:DO_ADD_ASSET_TO_STEP,procedureId,stepId,asset,targetAssetName:null,insertAfter:!1});yield put({type:SAVE_PROCEDURE,procedureId})}}catch(e){console.error("Failed to add videoData to the active procedure",e,procedureId,stepId,videoData);yield put(showBannerMessage(window.i18next.t("add-asset-to-step-failed"),BANNER_MESSAGE_TYPE.ERROR))}}function*resetSelection(){yield put({type:RESET_ASSET_SELECTION})}function wrapWithPut(actionFactory){return function*(){yield put("function"===typeof actionFactory?actionFactory():actionFactory)}}function*saveProcedureNotifications(){yield all([yield takeEvery$1(SAVE_PROCEDURE_START,wrapWithPut(()=>{return showBannerMessage(window.i18next.t("save-in-progress"),BANNER_MESSAGE_TYPE.PROGRESS)})),yield takeEvery$1(SAVE_PROCEDURE_SUCCEEDED,wrapWithPut(()=>{return showBannerMessage(window.i18next.t("save-succeeded"),BANNER_MESSAGE_TYPE.SUCCESS)}))])}/**
   * Exports the procedure to a Word Doc.
   */function*exportProcedure({url,procedureId,fileName}){const abortController=new AbortController,fetchOptions={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({procedure:url,procedureId}),signal:abortController.signal};try{yield put({type:EXPORT_PROCEDURE_START,procedureId,fileName});const{response,cancelled}=yield race({response:call(AuthUtils.fetch,`${baseURL}/export/procedure`,fetchOptions),cancelled:take(action=>action.type===EXPORT_PROCEDURE_CANCEL&&action.procedureId===procedureId)});if(cancelled){abortController.abort();return}if(!response.ok){throw new Error(response.statusText)}const blob=yield apply(response,response.blob);yield put({type:EXPORT_PROCEDURE_COMPLETE,procedureId,blob,fileName})}catch(err){yield put({type:EXPORT_PROCEDURE_FAILED,procedureId});yield put(showBannerMessage(window.i18next.t("export.failed"),BANNER_MESSAGE_TYPE.ERROR));console.error("Failed to export",url,"to",fileName,err)}}function*removeAllStep3dEffects({procedureId,stepId}){// Remove all existing 3d-effect assets (Only one 3d-effect per step as of now)
let procedure=yield call(getProcedure,procedureId),step;for(let stp of procedure.steps){if(stp.id===stepId){step=stp}}if(!step){return}let assetNames=[];for(let ast of step.assets){if(ast.type===ASSET_TYPE.THREED_EFFECT){assetNames.push(ast.name)}}yield*removeAssetsFromStep({assetNames,stepId})}/**
   * Change a step's 3d effect
  
   * @param {procedureId} id of the current procedure
   * @param {stepId} stepId of the step to modify
   * @param {partList} array containing idPaths of selected parts
   * @param {tvMode} constant indicate modelSelection/modelVisibility
   * @param {context} dictonary contatining 3D context model's url,id(asset.name)
   * @param {separatePartList} true if partList should be separate json file
   */function*changeStep3dEffect({procedureId,stepId,tvMode,contextUrl,separatePartList,partList,camLocation,context}){if(separatePartList){// Step 1: Create Part List JSON asset
let partListBlob=constructJsonAsset(JSON_ASSET_TYPE.NODE_LIST,{fileName:"partList.json",fileType:"application/json"},{nodes:partList,model:context.url}),partListJsonAsset=yield*createAssetFromFile(partListBlob);partList=partListJsonAsset.url}let options={headers:{"x-no-cdn":!0}},{effect,asset}=yield call(load3dEffectJsonAssetForStep,{procedureId,stepId,options}),metadata=yield call(fetchAssetMetadata,{url:context.url}),gltfUrl=yield call(fetchGLTFUrlFromPvz,metadata.id);if(!asset){// Asset does not exist
let threedEffectBlob=constructJsonAsset(JSON_ASSET_TYPE.THREED_EFFECT,{fileName:"threedEffect.json",fileType:`${ASSET_TYPE.THREED_EFFECT}/json`},{uri:gltfUrl?gltfUrl:contextUrl,tvMode,partList,camLocation,contextId:context.id},effect);asset=yield*createAssetFromFile(threedEffectBlob);yield put({type:DO_ADD_ASSET_TO_STEP,procedureId,stepId,asset,targetAssetName:asset.metadata.title});yield put({type:SAVE_PROCEDURE,procedureId})}else{// Asset exists
effect=JSON_ASSET_STRUCT[JSON_ASSET_TYPE.THREED_EFFECT](effect,{uri:gltfUrl?gltfUrl:contextUrl,tvMode,partList,camLocation,contextId:context.id});asset.data=JSON.stringify(effect);asset.metadata=yield call(fetchAssetMetadata,asset);yield call(saveAssetToCMS,cloneAsset(asset));// No need to add to procedure and save procedure
}}/**
   * Change a step's location assignment
   * If changing the location and there was a prior value, also change the step id
   * Does not yet remove SSG Edge for previous step, unsure if its been published in the past
   *
   * @param {action.step} step to modify
   * @param {action.location} semantic-location ID for the step to use
   */function*changeStepLocation({step,location}){let stepId=step.id;if(step.locationAware){//If there was a location set, set a new step id to not affect any published data
const newStepId$1=newStepId();yield put({type:STEP_ID_CHANGE,id:stepId,newStepId:newStepId$1});stepId=newStepId$1}if(location&&"none"!==location){//Create the step node if there is a new location set
yield call(createStepNode,stepId);//Create the edge to the new step
yield call(createEdge,stepId,location);//Cache the new node's location
const slNode=yield call(getNode,location);//Should be in cache already
yield put(fetchSemanticLocationSucceeded(stepId,[slNode]))}//Now mark the step as having a location
yield put({type:STEP_LOCATIONAWARE_CHANGE,locationAware:"none"!==location,id:stepId})}function*updateStepIdInStepDescCache({id,newStepId}){let stepDescState=store.getState().app.stepDescField;if(stepDescState){for(var key in stepDescState){let stepDescEntry=stepDescState[key];if(Object.prototype.hasOwnProperty.call(stepDescEntry,id)){let newStepDescEntry=stepDescEntry;newStepDescEntry[newStepId]=stepDescEntry[id];delete stepDescEntry[id];yield put(saveComponentState("stepDescField",{[key]:newStepDescEntry}))}}}}function*fetchProcedurePermissions(action){const activeProcedure=getActiveProcedure(store);if(action.tabId===PROCEDURE_TAB.DETAILS&&ProcedureAuth.canShare(activeProcedure)){const accessList=yield call(getCurrentPermissions,activeProcedure);yield put({type:FETCH_PERMISSIONS_SUCCEEDED,accessList})}}function*newSteps(){const procedureId=store.getState().procedures.activeId;yield put({type:SAVE_PROCEDURE,procedureId});yield take([matchProcedureAction(SAVE_PROCEDURE_SUCCEEDED,procedureId),matchProcedureAction(SAVE_PROCEDURE_FAILED,procedureId)]);yield put({type:INSERT_STEPS_COMPLETED})}function*procedureSaga(){yield all([yield takeEvery$1(SAVE_PROCEDURE,saveProcedure),yield takeEvery$1(CREATE_PROCEDURE,createProcedure),yield takeEvery$1(DELETE_PROCEDURE,deleteProcedure$1),yield takeEvery$1(RENAME_PROCEDURE,renameProcedure$1),yield takeLatest$1(OPEN_PROCEDURE,openProcedure$1),yield takeEvery$1(PUBLISH_PROCEDURE,publishProcedure$2),yield takeEvery$1(UNPUBLISH_PROCEDURE,unpublishProcedure$2),yield takeEvery$1(ACTIVATE_PROCEDURE_TAB,fetchProcedurePermissions),yield takeEvery$1([STEP_DESCRIPTION_CHANGE,NEW_STEP,REMOVE_STEP,STEP_MOVE,ASSET_MOVE,REMOVE_ASSETS_FROM_STEP,STEP_LOCATIONAWARE_CHANGE,window.ReduxUndo.ActionTypes.UNDO,window.ReduxUndo.ActionTypes.REDO],saveActiveProcedure),yield takeEvery$1(NEW_STEPS,newSteps),yield takeLatest$1(LOAD_PROCEDURE,setActiveStepOnLoad),yield takeLatest$1(REMOVE_STEP,setActiveStepAfterRemoval),yield takeLatest$1(SET_ACTIVE_STEP,resetSelection),yield takeEvery$1(ASSET_MOVE,updateActiveStepIfNeeded),yield takeEvery$1(ADD_ASSET_TO_STEP,addAssetToStep$2),yield takeEvery$1(REMOVE_ASSETS_FROM_STEP_AND_RESET,removeAssetsFromStep),yield takeEvery$1(ADD_ASSET_IN_NEW_STEP,addAssetInNewStep$1),yield takeEvery$1(ADD_VIDEO_CLIP_TO_STEP,addVideoClipToStep$1),yield takeEvery$1(EXPORT_PROCEDURE,exportProcedure),yield takeEvery$1(STEP_LOCATION_CHANGE,changeStepLocation),yield takeEvery$1(STEP_ID_CHANGE,updateStepIdInStepDescCache),yield takeEvery$1(STEP_3D_EFFECT_CHANGE,changeStep3dEffect),yield fork(saveProcedureNotifications)])}var procedure$1={saveProcedure:saveProcedure,saveActiveProcedure:saveActiveProcedure,uploadNewProcedureContents:uploadNewProcedureContents,createProcedure:createProcedure,openProcedure:openProcedure$1,deleteProcedure:deleteProcedure$1,renameProcedure:renameProcedure$1,setActiveStepOnLoad:setActiveStepOnLoad,setActiveStepAfterRemoval:setActiveStepAfterRemoval,publishProcedure:publishProcedure$2,unpublishProcedure:unpublishProcedure$2,updateActiveStepIfNeeded:updateActiveStepIfNeeded,addAssetToStep:addAssetToStep$2,addAssetInNewStep:addAssetInNewStep$1,getJsonAssetNamesForStep:getJsonAssetNamesForStep,removeAssetsFromStep:removeAssetsFromStep,addVideoClipToStep:addVideoClipToStep$1,resetSelection:resetSelection,exportProcedure:exportProcedure,removeAllStep3dEffects:removeAllStep3dEffects,changeStep3dEffect:changeStep3dEffect,changeStepLocation:changeStepLocation,updateStepIdInStepDescCache:updateStepIdInStepDescCache,fetchProcedurePermissions:fetchProcedurePermissions,newSteps:newSteps,procedureSaga:procedureSaga,default:procedureSaga};function*fetchProcedures$1(){try{let procedures$1=yield call(fetchProcedures);yield put({type:FETCH_PROCEDURES_SUCCEEDED,procedures:procedures$1})}catch(e){console.info("failed to retrieve procedures",e);yield put({type:FETCH_PROCEDURES_FAILED,message:e&&e.message})}}/**
   * Retrieve the existing procedures for the active project
   */function*fetchPublishedProcedures(){try{let procedures$1=yield call(fetchProcedurePublications);yield put({type:FETCH_PUBLISHED_PROCEDURES_SUCCEEDED,procedures:procedures$1})}catch(e){console.info("failed to retrieve procedures",e);yield put({type:FETCH_PUBLISHED_PROCEDURES_FAILED,message:e&&e.message})}}function*proceduresSaga(){yield all([yield takeLatest$1(FETCH_PROCEDURES,fetchProcedures$1),yield takeLatest$1(FETCH_PUBLISHED_PROCEDURES,fetchPublishedProcedures)])}var procedureList$2={fetchProcedures:fetchProcedures$1,fetchPublishedProcedures:fetchPublishedProcedures,proceduresSaga:proceduresSaga,default:proceduresSaga};function*navigate({route,params={},search=location.search}={}){let routeOverride,urlParams=new URLSearchParams(search);route=route.replace(/\/$/,"");// remove trailing slash if any
switch(route){case ROUTE.editor:import("./procedure-editor.js").then(bundle=>bundle&&bundle.$procedureEditor||{});if(urlParams.has("procedure")||params.procedure){try{//Procedure will be loaded by its id every time, either from the URL param, or by local params passed directly.
//Which will help gaurantee its the latest version, and not the light weight version from a list/search page.
//The URL will be updated if it doesn't match the expecte ID
yield put(openPanel(TABS.PROCEDURE_EDITOR));const procedure=yield call(getProcedure,params.procedure||urlParams.get("procedure"));params.procedure=procedure;// eslint-disable-line require-atomic-updates
yield put(loadProcedure(procedure));if(urlParams.get("procedure")!==procedure.id){urlParams.set("procedure",procedure.id);pushStateWithParams(urlParams)}const activeProcedureTab=urlParams.get("peTab");if(activeProcedureTab){yield put(activateProcedureTab(activeProcedureTab))}}catch(e){if(e instanceof ProcedureDoesNotExist){console.warn(e);yield put(showBannerMessage(window.i18next.t("no-procedure-found"),BANNER_MESSAGE_TYPE.ERROR));yield*leaveProcedureEditor(urlParams,params.procedure)}else{console.debug(e);yield*leaveProcedureEditor(urlParams,params.procedure)}}}else{pushStateWithParams(urlParams);yield put(closePanel(TABS.PROCEDURE_EDITOR));yield put(loadProcedures());yield put(loadProcedureError())}break;case ROUTE.preview:routeOverride=ROUTE.preview;import("./procedure-editor/procedure-preview.js").then(bundle=>bundle&&bundle.$procedurePreview||{});if(urlParams.has("procedure")||params.procedure){try{const procedure=yield call(getProcedure,params.procedure||urlParams.get("procedure"));params.procedure=procedure;// eslint-disable-line require-atomic-updates
}catch(e){// TODO: We should notify somehow the user that procedure is not found similarly to ROUTE.editor path.
console.error(e)}}break;case ROUTE.webview:routeOverride=ROUTE.webview;import("./procedure-editor/procedure-preview.js").then(bundle=>bundle&&bundle.$procedurePreview||{});if(urlParams.has("url")||params.url){try{let experienceUrl=params.url||urlParams.get("url");experienceUrl=experienceUrl.startsWith("/")?baseURL+experienceUrl:experienceUrl;const publishedProcedure=yield call(fetchPublishedProcedureFromExperience,experienceUrl);params.procedure=publishedProcedure}catch(e){if(e.fetchFailed){params.failureStatus=e.status}else{console.error(e)}}}break;case ROUTE.proceduresPublished:routeOverride=ROUTE.proceduresPublished;yield put(removeActiveProcedure());import("./procedure-editor/procedures-published.js").then(bundle=>bundle&&bundle.$proceduresPublished||{});break;default:routeOverride=ROUTE.view404;import("./not-found.js").then(bundle=>bundle&&bundle.$notFound||{});}yield put({type:NAVIGATE_TO_ROUTE_END,route:routeOverride||route,params})}/**
   * @param {URLSearchParams} urlParams
   * @param {Object} currentLocation Allow tests to override the current browser location Object
   */function pushStateWithParams(urlParams,currentLocation=location){const paramStr=urlParams.toString(),newUrl=ROUTE.editor+(paramStr?"?"+paramStr:"");//Back button should not add entries to the history which would remove forward button
if(!currentLocation.href.endsWith(newUrl)){window.history.pushState({},"",newUrl)}}/**
   * Navigates away from the procedure editor into procedure picker.
   * @param {URLSearchParams} urlParams
   */function*leaveProcedureEditor(urlParams,procedureId=null){urlParams.delete("procedure");pushStateWithParams(urlParams);yield put(closePanel("procedure-editor"));yield put(loadProcedures());yield put(loadProcedureError());if(procedureId){yield put(couldNotOpenProcedure(procedureId))}}/**
   * Invoked after authenticating successfully, sets up a basic router that calls a callback whenever the location is updated.
   * It will reload the page that the current URL is referencing.
   */function*restorePage(){yield installRouter(location=>store.dispatch(navigateTo(location)));yield initEntitlements()}/**
   * High level tab navigation event, used to open/close associated panels in the
   * editor
   * @param {String} object.tabName - name of the tab being activated
   * @param {String} [object.pathname] - Optional url route
   * @param {String} [object.assetType] - Optional typeof asset to set in the asset-browser
   * @param {String} [object.procedurefilter] - Optional procedure userFilter to assign for the procedure-picker page.
   * @param {Boolean} [object.openCapture] - true to avoid resetting the active capture. Allows create procedure to open up the capture.
   */function*tabNavigation$1({tabName,pathname,assetType,procedurefilter,openCapture}){yield put(selectTab(tabName,pathname,assetType));yield put(openPanel(tabName));if(pathname){yield put(navigateTo({pathname,search:"?"}))}if(assetType){yield put(setActiveAssetList(assetType))}else{yield put(loadProcedures())}if(!openCapture){yield put(resetActiveCapture())}if(procedurefilter){store.dispatch(saveComponentState(CACHE_KEYS.PROCEDURE_PICKER,{filterByUser:procedurefilter},!0))}}function*navigationSaga(){yield all([yield takeEvery$1(NAVIGATE_TO_ROUTE_START,navigate),yield takeEvery$1(LOGIN_SUCCESS,restorePage),yield takeEvery$1(TAB_NAVIGATION,tabNavigation$1)])}var navigation={navigate:navigate,pushStateWithParams:pushStateWithParams,restorePage:restorePage,tabNavigation:tabNavigation$1,default:navigationSaga};// procedure with that id is preloaded into cache before reducers execute.
const ensureProcedureIsInCacheMiddleware=store=>next=>action=>{if(action.procedureId){if(store.getState().procedures.cache[action.procedureId]){next(action)}else{getProcedure(action.procedureId).then(()=>next(action)).catch(e=>{if(e instanceof ProcedureDoesNotExist){console.warn("Cannot execute the action because procedure no longer exists",action)}else{console.error(e)}})}}else{// No procedureId, don't do anything here and just pass it on.
next(action)}};var ensureProcedureIsInCacheMiddleware$1={ensureProcedureIsInCacheMiddleware:ensureProcedureIsInCacheMiddleware};function*cacheLocationData(){const procedure=getActiveProcedure(store);yield call(getAllAnchorsForProcedure,procedure)}/**
   * Update ssg cache for the procedure's possible location data for these following events
   */function*spatialGraphSaga(){yield takeEvery$1([INSERT_STEPS_COMPLETED,STEP_LOCATION_CHANGE,REMOVE_STEP,window.ReduxUndo.ActionTypes.UNDO,window.ReduxUndo.ActionTypes.REDO],cacheLocationData)}var spatialGraph$1={cacheLocationData:cacheLocationData,spatialGraphSaga:spatialGraphSaga,default:spatialGraphSaga};function*appLaunched(){const{applicationLaunch}=(yield select()).app;yield call(pushPELaunchEvent,applicationLaunch.id,applicationLaunch.appName,applicationLaunch.deviceUUID,applicationLaunch.locale)}/**
   * Push event when a procedure is viewed in web view | preview
   * @param applicationLaunchUUID unique id identifying current app session
   * @param procedureId of procedure being viewed
   * @param correlationId from the request that fetched the Procedure content
   * @param viewingSessionId unique id identifying viewing session
   */function*procedureViewStarted$1({appLaunchId,procedureId,correlationId,viewingSessionId}){yield call(pushEvent,{action:"startViewingProcedure",applicationLaunchUUID:appLaunchId,correlationId,procedureId,viewingSessionId,navigateOrigin:"deepLink"})}/**
   * Push event when user navigates in procedure web view | preview
   * @param appLaunchId unique id identifying current app session
   * @param targetStepId of step navigated to
   * @param viewingSessionId unique id identifying viewing session
   * @param navigateType A string describes how the step was accessed. (navBar | stepList | overview)
   */function*navigatedInProcedure$1({appLaunchId,targetStepId,viewingSessionId,navigateType}){yield call(pushEvent,{action:"navigateInProcedure",applicationLaunchUUID:appLaunchId,targetStepId,viewingSessionId,navigateType})}/**
   * Push event when user stops viewing procedure in web view | preview
   * @param appLaunchId unique id identifying current app session
   * @param viewingSessionId unique id identifying viewing session
   */function*procedureViewStopped$1({appLaunchId,viewingSessionId}){yield call(pushEvent,{action:"stopViewingProcedure",applicationLaunchUUID:appLaunchId,viewingSessionId})}/**
   * Push event when user opens image editor
   * @param {String} viewingSessionId Unique id identifying viewing session.
   * @param {String} launchPoint String indicating where it was opened from.
   *   See ASSET_PREVIEW_LAUNCH_POINTS in constants.js for valid values.
   */function*imageEditorOpened$1({viewingSessionId,launchPoint}){yield call(pushEvent,{action:"openImageEditor",viewingSessionId,launchPoint})}/**
   * Push event when user closes image editor
   * @param {String} viewingSessionId Unique id identifying viewing session.
   * @param {String} launchPoint String indicating where it was originally opened from.
   *   See ASSET_PREVIEW_LAUNCH_POINTS in constants.js for valid values.
   * @param {String} closeAction String indicating the action that caused the editor to close (e.g. save as)
   */function*imageEditorClosed$1({viewingSessionId,launchPoint,closeAction}){yield call(pushEvent,{action:"closeImageEditor",viewingSessionId,launchPoint,closeAction})}function*analyticsSaga(){yield all([takeEvery$1(LOGIN_SUCCESS,appLaunched),takeEvery$1(PROCEDURE_VIEW_STARTED,procedureViewStarted$1),takeEvery$1(NAVIGATED_IN_PROCEDURE,navigatedInProcedure$1),takeEvery$1(PROCEDURE_VIEW_STOPPED,procedureViewStopped$1),takeEvery$1(IMAGE_EDITOR_OPENED,imageEditorOpened$1),takeEvery$1(IMAGE_EDITOR_CLOSED,imageEditorClosed$1)])}var analytics$1={appLaunched:appLaunched,procedureViewStarted:procedureViewStarted$1,navigatedInProcedure:navigatedInProcedure$1,procedureViewStopped:procedureViewStopped$1,imageEditorOpened:imageEditorOpened$1,imageEditorClosed:imageEditorClosed$1,default:analyticsSaga};function*fetchUser$2(action){if(!store.getState().users[action.id]){try{yield put({type:FETCH_USER_IN_PROGRESS,id:action.id});let user=yield call(fetchUser$1,action.id);yield put({type:FETCH_USER_SUCCEEDED,user})}catch(e){console.warn("failed to retrieve user",e);yield put({type:FETCH_USER_FAILED,id:action.id,message:e.message})}}}/**
   * Retrieve Users
   */function*fetchAllUsers(){const users$1=store.getState().users;if(!users$1||!users$1.users||0>=users$1.users.length){try{yield put({type:FETCH_USERS_IN_PROGRESS});let users$1=yield call(fetchUsers$1);yield put({type:FETCH_USERS_SUCCEEDED,users:users$1})}catch(e){console.warn("failed to retrieve users",e);yield put({type:FETCH_USERS_FAILED,message:e.message})}}}function*usersSaga(){yield all([yield takeEvery$1(FETCH_USER,fetchUser$2),yield takeEvery$1(FETCH_USERS,fetchAllUsers)])}var users$3={fetchUser:fetchUser$2,fetchAllUsers:fetchAllUsers,usersSaga:usersSaga,default:usersSaga};const sagaMiddleware=sagaMiddlewareFactory(),devCompose=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose,store=createStore((state,action)=>state,restore(),devCompose(lazyReducerEnhancer(combineReducers),applyMiddleware(thunk,ensureProcedureIsInCacheMiddleware,middleware,sagaMiddleware)));// Sets up a Chrome extension for time travel debugging.
// See https://github.com/zalmoxisus/redux-devtools-extension for more information.
sagaMiddleware.run(authSaga);sagaMiddleware.run(procedureSaga);sagaMiddleware.run(proceduresSaga);sagaMiddleware.run(navigationSaga);sagaMiddleware.run(assetsSaga);sagaMiddleware.run(spatialGraphSaga);sagaMiddleware.run(analyticsSaga);sagaMiddleware.run(usersSaga);// if adding a reducer here, also add reducer's initial state in testUtils
store.addReducers({app:app$1,procedureList,publishedProcedureList,newProcedure:newProcedure$1,assets:assets$1,activeCapture:capture$1,assetCreation,entitlements,procedures:procedures$1,spatialGraph:nodes,users:users$1});var store$1={store:store,default:store};function isGeneratingClip(asset){const state=store.getState(),cache=state.assets&&state.assets.newlyGeneratedVideoAssets;return!!(cache||{})[getAssetId(asset)]}/**
   * @param {Object} asset
   * @returns {String}
   */function getAssetId(asset){return asset.metadata?asset.metadata.id:asset.name}async function handleVideoError(e){e.target.classList.add("show-error-image");//Try again with a new url
if(e.target.classList.contains("is-processing")&&(e.target._retries===void 0||30>e.target._retries)){setTimeout(()=>{if(e.target){//Gaurd agains navigating way from page removing dom el
if(e.target._retries===void 0){e.target._retries=0}e.target.src=e.target.getAttribute("orig-src")+"?cb="+e.target._retries++}},1e4)}}/**
   * Get an asset out of the existing store assets, which acts like a cache
   * No guarantees that will be available.
   * @param {String} assetId the asset id to find
   * @returns {CMSAsset} if found in the store assets
   */function getAssetFromStore(assetId){const storeAssets=store.getState().assets;let storeAsset;if(assetId&&storeAssets){//Asset id is null when a file is dropped.
Object.values(storeAssets).find(assetsOfType=>{if(!Array.isArray(assetsOfType)){return!1}storeAsset=storeAsset||assetsOfType.find(asset=>{if(asset.metadata.id){//Asset ID might be under a container, the asset id in cache is often <containerID>%2F<assetID>
return asset.metadata.id===assetId||asset.metadata.id.endsWith("%2F"+assetId)}else if(asset.metadata.resourcename){//Non image assets do not always have id, but resourcename
return asset.metadata.resourcename===assetId}})})}return storeAsset}/**
   * @param {CMSAsset} asset
   */function isAssetFromCaptureBasedOnId(asset){return decodeURIComponent(asset.metadata.id).includes("/")}/**
   * Import asset files associated to the event
   *  - Validate the file extensions are expected based on the assetType
   *
   * @param {Event} e - Event object from input type=file, or drag-and-drop
   * @param {Array<Files>} e.detail.files - Array of files to import
   * @param {Boolean} e.detail.files.containerAsset - True if importing a capture, all file will then be in the container
   * @param {String} assetType
   *
   */async function addAssetsFromEvent(e,assetType){const files=e.detail.files;if(!validateFileExtension(files,assetType)){// show correct asset type warning message
switch(assetType){case ASSET_LIST_TYPE.CAPTURES:store.dispatch(showBannerMessage(window.i18next.t("failure-files-extensions-captures"),BANNER_MESSAGE_TYPE.NOTIFICATION));break;case ASSET_LIST_TYPE.VIDEOS:store.dispatch(showBannerMessage(window.i18next.t("failure-files-extensions-videos"),BANNER_MESSAGE_TYPE.NOTIFICATION));break;case ASSET_LIST_TYPE.IMAGES:store.dispatch(showBannerMessage(window.i18next.t("failure-files-extensions-images"),BANNER_MESSAGE_TYPE.NOTIFICATION));break;case ASSET_LIST_TYPE.THREED:store.dispatch(showBannerMessage(window.i18next.t("failure-files-extensions-3d"),BANNER_MESSAGE_TYPE.NOTIFICATION));break;}return}const procData=await getDropFileData(files).catch(()=>null);// null if it's a image or video asset
// warn if loaded capture organization id is not the same as user organization id
if(procData&&(await shouldShowLocationWarning(procData))){const modalResponse=await document.querySelector("#invalid-organization-warning").showModal();// cancel capture upload if cancel button was pressed
if(!modalResponse){return}}if(files.containerAsset){store.dispatch(createAsset(files))}else{//Could support upload of an images directory
for(const file of e.detail.files){store.dispatch(createAsset(file))}}}/**
   * @param {Object} asset
   * @param {String} tag - the tag to find
   * @returns {Boolean} true if the asset has the tag .audio-removed
   */function hasTag(asset,tag){let hasTag=!1;if(asset&&asset.metadata&&asset.metadata.tags){hasTag=!!asset.metadata.tags.find(t=>t===tag)}return hasTag}var assetUtils={isGeneratingClip:isGeneratingClip,getAssetId:getAssetId,handleVideoError:handleVideoError,getAssetFromStore:getAssetFromStore,isAssetFromCaptureBasedOnId:isAssetFromCaptureBasedOnId,addAssetsFromEvent:addAssetsFromEvent,hasTag:hasTag};class PTCInfoTile extends connect(store)(LitElement){constructor(){super()}createRenderRoot(){return this}static get properties(){return{tileTitle:{type:String,default:""},user:{type:String,default:""},date:{type:String,default:""},text:{type:String,default:""},displayName:{type:String,default:""}}}render(){return html`
      <div class="info-tile">
        <div class="info-tile-group small-font">
          <span class="info-tile--title item-title">${this.tileTitle}</span>
          <span class="info-tile--item item-name">${this.getTextOrUser()}</span>
          <span class="info-tile--item item-date">${this.getDate()}</span>
          <span class="info-tile--item item-time">${this.getTime()}</span>
        </div>
      </div>
    `}stateChanged(state){if(this.user){this.displayName=this.getUserDisplayName()}}async updated(props){if(props.has("user")){getUserAndCache(this.user)}}getTextOrUser(){return this.text||this.getUserDisplayName()}getUserDisplayName(){return getUserAndCache(this.user).displayName}getDate(){if(this.date){return formatDateWithShortMonth(new Date(this.date))}}getTime(){if(this.date){return formatTimeToDisplay(new Date(this.date))}}}window.customElements.define("ptc-info-tile",PTCInfoTile);class PTCAssetInfoTile extends connect(store)(LitElement){constructor(){super();const t=window.i18next.t.bind(window.i18next);this.labels={addedBy:t("info-popup.added-by-title")}}createRenderRoot(){return this}static get properties(){return{assetId:{type:String},asset:{type:Object// Redraw the tile when the asset object resolves
}}}render(){if(this.asset&&this.asset.metadata){return html`
        <ptc-info-tile
          tileTitle="${this.labels.addedBy}"
          user="${this.asset.metadata.createdby}"
          date="${this.asset.metadata.createdon}"
        ></ptc-info-tile>
      `}else{return html``}}async updated(props){if(props.has("assetId")&&this.assetId){this.asset=await this.getAsset();getUserAndCache(this.asset.metadata.createdby)}}async getAsset(){let asset;if(this.assetId){asset=getAssetFromStore(this.assetId)}else{asset={properties:{}}}return asset}}window.customElements.define("ptc-asset-info-tile",PTCAssetInfoTile);const TIME_MULTIPLIER=250,VIDEO_FPS=30,ExcludeKeyHandlingForTags=["INPUT","TEXTAREA","SELECT"];class PTCVideo extends LitElement{constructor(){super();this.hideControlsOnMouseout=!1;this.volume=.5;this.totalSessionTime=0;this._isPlaying=!1;this.keyHandler=this.keyHandler.bind(this);this._keyHandlers={// dumb function "()=>true" to prevent default page scrolling for space keydown event
[KEY.Space]:up=>up?()=>this.spacePressed():()=>!0,[KEY.Arrow_Right]:up=>up?null:()=>this.arrowPressed(!0),[KEY.Arrow_Left]:up=>up?null:()=>this.arrowPressed(!1)};const t=window.i18next.t.bind(window.i18next);this.labels={audioRemoved:t("audio.removed-tooltip"),audioReplaced:t("audio.replaced-tooltip")}}static get properties(){return{audioRemoved:{type:Boolean},audioReplaced:{type:Boolean},autoplay:{type:Boolean},disableControls:{type:Boolean},hideControlsOnMouseout:{type:Boolean},poster:{type:String},preload:{type:String},src:{type:String},volume:{type:Number},totalSessionTime:{type:Number},_isPlaying:{type:Boolean,attribute:!1}}}createRenderRoot(){return this}connectedCallback(){super.connectedCallback();document.addEventListener("keydown",this.keyHandler);document.addEventListener("keyup",this.keyHandler);this.getKeyScopeEl().setAttribute("tabindex","-1");this.getKeyScopeEl().focus()}disconnectedCallback(){super.disconnectedCallback();document.removeEventListener("keydown",this.keyHandler);document.removeEventListener("keyup",this.keyHandler);if(this.getKeyScopeEl()){this.getKeyScopeEl().removeAttribute("tabindex")}cleanUpVideos(this)}firstUpdated(changedProps){this.videoDraggerEl=this.querySelector(".video__progress-bar")}keyHandler(e){const focused=document.activeElement;if(!this.disableControls&&0>ExcludeKeyHandlingForTags.indexOf(focused.tagName)&&this.getKeyScopeEl().contains(focused)){const handler=this._keyHandlers[e.key]?this._keyHandlers[e.key].call(this,"keyup"===e.type):null;if(handler&&!1!==handler.apply(this)){e.stopPropagation();e.preventDefault()}}}getKeyScopeEl(){return this.closest(".video-key-scope")||this.parentNode}spacePressed(){this.playPauseVideo();return!0}/**
     * @param {Boolean} right - direction of movment, true if to the right (higher value)
     */arrowPressed(right){this.skipFrames(right?1:-1);return!0}/**
     * @param {Number} frames - the number of frames to jump, positive number jumps forward and a negative number jumps backwards
     * @returns {Number} the time difference for the number of frames.
     */getFrameDeltaTime(frames){return frames/VIDEO_FPS}/**
     * Moves the video foward/back the number of given frames
     * @param {Number} frames - the number of frames to jump, positive number jumps forward and a negative number jumps backwards
     */skipFrames(frames){this.skipTime(this.getFrameDeltaTime(frames),!1)}/**
     * Sets progress bar max value and remaining time text when a new video is loaded
     * @param {Event} event
     */onLoadeddata(event){const videoEl=event.target;this._isPlaying=!videoEl.paused;if(!this.totalSessionTime){this.totalSessionTime=videoEl.duration}this._updateProgressBar(this.querySelector(".video__volume input"))}videoEnded(event){event.target.currentTime=0}/**
     * make sure current volume level is colored in DT-23432
     */_volumeChanged(event){this.volume=event.target.value;this._updateProgressBar(event.target)}/**
     * As the video is playing, move the video dragger/slider in the video controls (since the video controls are custom controls)
     */updateVideoProgress(event){const videoEl=event.target,currentTime=this.getCurrentTime(videoEl);this.videoDraggerEl.value=currentTime*TIME_MULTIPLIER;this.querySelector(".video__elapsed-time").innerText=convertNumberToMovieTimeStr(currentTime);this._updateProgressBar(this.videoDraggerEl)}/**
     * Applies a style to the slider, the part of the slider from the beginning value to the current value (lower limit) is highlighted
     * @param {HTMLElement} barEl - the slider (input[type=range]) element that changed value
     */_updateProgressBar(barEl){const level=barEl.value/barEl.max,sliderGradient=`linear-gradient(
      90deg,
      var(--ptc-video-controls-slider-track-lower-fill-color) ${100*level}%,
      var(--ptc-video-controls-slider-track-upper-fill-color) ${100*level}%
    )`;barEl.style.backgroundImage=sliderGradient}/**
     * Play or pause the video
     * @param {boolean} play true to play video,
     *                       false to pause,
     *                       undefined to toggle based on whether video is currently playing
     */playPauseVideo(play){const videoEl=this.getActiveVideo();if(videoEl){this._isPlaying=play===void 0?!this._isPlaying:play;if(this._isPlaying){this.playVideo()}else{videoEl.pause()}}}/**
     * Moves the video foward/back the number of given seconds
     * @param {Number} seconds - the number of seconds to jump, positive number jumps forward and a negative number jumps backwards
     * @param {Boolean} [rounded=true] - whether to round the new video time
     * @returns true if time was skipped, false otherwise
     */skipTime(seconds,rounded=!0){const videoEl=this.getActiveVideo(),currentTime=this.getCurrentTime(videoEl),rawNextTime=currentTime+(!Number.isNaN(seconds)?seconds:0),nextTime=rounded?Math.round(rawNextTime):rawNextTime;if(0<=nextTime&&nextTime<=this.totalSessionTime){this.setVideoCurrentTime(nextTime);return!0}return!1}/**
     * Sets the currentTime on the video to allow the video to start at the specified location.
     * @param {Number} t - the time to jump to
     * @param {Boolean} continuePlaying - set to true to allow the next video to automatically start, if the current active video is playing
     *                    useful when N videos are rendered but not relevant for single video
     */setVideoCurrentTime(t,continuePlaying){if(Number.isNaN(t)){return}this.getActiveVideo().currentTime=t}/**
     * In this component there is only single video,
     * but subclasses may have N videos in the DOM
     * @returns {DOMElement} active video
     */getActiveVideo(){return this.querySelector("video")}/**
     * In this component time is simply currentTime,
     * but subclasses may have N videos and special time adjustements to be made
     * @returns currentTime off the given video element
     */getCurrentTime(videoEl){return videoEl.currentTime}/**
     * Pause the video while seeking, but remember
     * if the video should be played or continue to be paused when done seeking.
     * Mimics the behavior of the standard video player.
     */_seekStart(){this.seeking=!0;const activeVideo=this.getActiveVideo();this.playAfterSeeking=!activeVideo.paused;activeVideo.pause()}/**
     * Play the video if it had been playing prior to seeking
     */_seekEnd(){this.seeking=!1;if(this.playAfterSeeking){this.playVideo()}}/**
     * Plays the active video
     * Simple for single video, but subclass handles play across N videos
     */playVideo(){const video=this.getActiveVideo();if(video){video.play()}}/**
     * Toggles the video playback controls
     * @param {Event} event
     * @param {Boolean} showControls should show the controls
     */toggleVideoPlayerControls(event,showControls){if(this.hideControlsOnMouseout){if(showControls){this.querySelector(".video__controls").classList.add("active")}else{// don't hide the controls if hovering over the controls themselves
if(!event.relatedTarget||!event.relatedTarget.closest(".video__controls")){this.querySelector(".video__controls").classList.remove("active")}}}}/**
     * Hide any tooltip sprites.
     * None set in this component yet, only capture-viewer-player has them
     */tooltipMouseOut(e){if(this.tooltip){this.tooltip.style.display="none"}}renderVideo({src,stepId,hidden,preload}){return html`
      <video
        class="ptc-video"
        ?autoplay="${this.autoplay}"
        crossorigin="anonymous"
        data-step="${ifDefined(stepId)}"
        ?hidden="${hidden}"
        src="${src||this.src}"
        poster="${ifDefined(this.poster)}"
        preload="${ifDefined(preload||this.preload)}"
        .volume="${this.audioRemoved||this.audioReplaced?0:this.volume}"
        @ended="${this.videoEnded}"
        @loadeddata="${e=>this.onLoadeddata(e)}"
        @mouseover="${e=>this.toggleVideoPlayerControls(e,!0)}"
        @mouseout="${e=>this.toggleVideoPlayerControls(e,!1)}"
        @play="${()=>this._isPlaying=!0}"
        @pause="${()=>this._isPlaying=!1}"
        @timeupdate="${e=>this.updateVideoProgress(e)}"
      ></video>
    `}renderVideoControls(){let volumeTemplate=this.audioRemoved?html``:html`
          <span class="icon">${volumeIcon}</span>
          <input type="range" min="0" max="1" step="0.1" value="${this.volume}" @input="${this._volumeChanged}" />
        `,audioIndicator=html``;if(this.audioRemoved){audioIndicator=html`
        <span data-tooltip="${this.labels.audioRemoved}">${audioRemovedIcon}</span>
      `}else if(this.audioReplaced){audioIndicator=html`
        <span data-tooltip="${this.labels.audioReplaced}">${audioReplacedIcon}</span>
      `}return html`
      <div class="video__controls ${this.hideControlsOnMouseout?"":"active"}">
        <div class="video__volume-and-actions" ?hidden="${this.disableControls}">
          <div class="video__volume">${volumeTemplate}</div>
          <div class="video__actions">
            <button class="video__skip-prev" @click="${()=>this.skipTime(-1)}" type="button">
              ${skipPrevIcon}
            </button>
            <button
              class="video__button -${!this._isPlaying?"play":"pause"}"
              @click="${()=>this.playPauseVideo()}"
              type="button"
            >
              ${!this._isPlaying?playIcon:pauseIcon}
            </button>
            <button class="video__skip-next" @click="${()=>this.skipTime(1)}" type="button">
              ${skipNextIcon}
            </button>
          </div>
          <div class="video__audio-indicator icon -medium">${audioIndicator}</div>
        </div>
        <div class="video__time-scale">
          <label class="video__elapsed-time">00:00:00</label>
          <input
            ?disabled="${this.disableControls}"
            type="range"
            class="video__progress-bar"
            @mousedown="${e=>this._seekStart(e)}"
            @mouseup="${e=>this._seekEnd(e)}"
            @mouseout="${e=>this.tooltipMouseOut(e)}"
            min="0"
            max="${this.totalSessionTime*TIME_MULTIPLIER}"
            step="1"
            value="0"
            @input=${e=>this.setVideoCurrentTime(e.target.valueAsNumber/TIME_MULTIPLIER,!0)}
          />
          <label class="video__duration">${convertNumberToMovieTimeStr(this.totalSessionTime)}</label>
        </div>
      </div>
    `}render(){return html`
      <div class="video__wrapper">
        ${this.renderVideo({})} ${this.renderVideoControls()}
      </div>
    `}}window.customElements.define("ptc-video",PTCVideo);var video={TIME_MULTIPLIER:TIME_MULTIPLIER,VIDEO_FPS:VIDEO_FPS,PTCVideo:PTCVideo};const DRAGGER_WIDTH=13,MIN_VIDEO_TIME=2,COMPONENT_STATE_CACHE_KEY$1="PTC-CAPTURE-VIEWER";// The dragger size to use in calculations for absolute positions and centering
class CaptureViewerPlayer extends connect(store)(PTCVideo){createRenderRoot(){return this}constructor(){super();this.hideControlsOnMouseout=!0;// retrieve the localized values for the following strings
const t=window.i18next.t.bind(window.i18next);this.labels=Object.assign({takePicture:t("capture-editor.take-picture"),createClip:t("capture-editor.create-clip-tooltip"),clipDuration:t("capture-editor.clip-duration"),create:t("create-button"),cancel:t("cancel"),timelineTitle:t("capture-editor.timeline-title"),qualityPopupHeader:t("capture-editor.video-quality-popup.header"),qualityPopupSubheader:t("capture-editor.video-quality-popup.subheader"),qualityPopupSubheaderNotice:t("capture-editor.video-quality-popup.subheader-notice"),qualityPopupHDOptionLabel:t("capture-editor.video-quality-popup.hd-option-label"),qualityPopupHDOptionExplanation:t("capture-editor.video-quality-popup.hd-option-explanation"),qualityPopupSDOptionLabel:t("capture-editor.video-quality-popup.sd-option-label"),qualityPopupSDOptionExplanation:t("capture-editor.video-quality-popup.sd-option-explanation"),qualityPopupSDOptionPostProcessingMessage:t("capture-editor.video-quality-popup.sd-option-post-processing-message"),preparingOptimizedVideo:t("capture-editor.preparing-optimized-video"),captureProcessingCompletedPopupHeader:t("capture-editor.capture-processing-completed-popup.header"),captureProcessingCompletedPopupText:t("capture-editor.capture-processing-completed-popup.text"),captureProcessingCompletedPopupConfirmLink:t("capture-editor.capture-processing-completed-popup.confirm-link"),scrubTipTitle:t("capture-editor.scrub-tip-title"),scrubTip:t("capture-editor.scrub-tip",{// TODO: update translation to have single substitution for arrow icons
leftArrow:"",rightArrow:keyboard.leftAndRightArrows,interpolation:{escapeValue:!1}}),clipBoundsTitle:t("capture-editor.clip-bounds-title"),clipBoundsTip:t("capture-editor.clip-bounds-tip",{// TODO: update translation to have single substitution for arrow icons
leftArrow:"",rightArrow:keyboard.leftAndRightArrows,br:"<br />",interpolation:{escapeValue:!1}})},this.labels);this.launchPoint=ASSET_PREVIEW_LAUNCH_POINTS.CAPTURE_CREATE_IMAGE;this.startTime=0;this.endTime=30;this.minTimelineZoom=1;// min is 1x
this.maxTimelineZoom=5;// max is 5x
this.timelineZoomFactor=this.minTimelineZoom;this.isClipping=!1;this._isSwapped=!1;this._mouseMoveListener=this.onClipMouseMove.bind(this);this._removeMouseMoveListener=this.onClipDragEnd.bind(this);this._mouseDownListener=this.onClipDragStart.bind(this);this._handleResize=this.handleResize.bind(this);this._videoQualityPopupVisible=!1;this._captureProcessingCompletePopupVisible=!1;this._toggleVideoQualityPopup=this.toggleVideoQualityPopup.bind(this);this._onClickHandler=this.onClickHandler.bind(this);this._showCaptureProcessingCompletePopup=this.showCaptureProcessingCompletePopup.bind(this);this.documentMouseDown=this.documentMouseDown.bind(this);this.scrubTipPopupKey="scrubTipPopupDismissed";this.clipBoundsTipPopupKey="clipBoundsPopupDismissed"}firstUpdated(){super.firstUpdated();let splitPane=document.querySelector("ptc-splitter");if(splitPane){splitPane.addEventListener("resize",this._handleResize)}window.addEventListener("resize",this._handleResize);this.splitterPanel=this.closest("ptc-splitter-pane")||{offsetLeft:0};this.mouseListenerVideo=this.mouseListenerVideo.bind(this);this.videoDraggerEl&&this.videoDraggerEl.addEventListener("mousemove",this.mouseListenerVideo,{passive:!0});// timeline section not rendered by the video-editor subclass
if(this.querySelector("section.capture-timeline")){this.querySelectorAll(".video-clipdrag").forEach(item=>{item.addEventListener("mousedown",this._mouseDownListener)});this.timelineEl=this.querySelector(".timeline");this.endTimeEl=this.querySelector(".end-time");this.startTimeEl=this.querySelector(".start-time");this.rightOverlay=this.querySelector(".sprite-overlay-right");this.leftOverlay=this.querySelector(".sprite-overlay-left");this.timeSpanEl=this.querySelector(".video-clipdrag-spanner");this.timelineContainerEl=this.querySelector(".timeline-container");this.timelineStepsEl=this.timelineEl.querySelector(".timeline-steps");this.timelineOutsideContainerEl=this.querySelector(".timeline-outside-container");this.currentTimeEl=this.querySelector(".current-time-indicator");this.mouseListenerTimeline=this.mouseListenerTimeline.bind(this);this.timelineStepsEl.addEventListener("mousemove",this.mouseListenerTimeline,{passive:!0});this.captureProcessingCompletePopup=this.querySelector("#capture-processing-completed-popup")}// imported here to avoid circular deps and still be initialized before user needs it
this.CreateAssetDialogImport=import("./shared/create-asset-dialog.js").then(bundle=>bundle&&bundle.$createAssetDialog||{});this.loadVttPromise=addScriptTag("src/assets/vtt.min.js")}connectedCallback(){super.connectedCallback();document.body.addEventListener("mousedown",this.documentMouseDown)}disconnectedCallback(){super.disconnectedCallback();this.querySelectorAll(".video-clipdrag").forEach(item=>{item.removeEventListener("mousedown",this._mouseDownListener)});// pause any videos currently playing and abort any pending requests/downloads
cleanUpVideos(this);this.stopClipPreviewInterval();let splitPane=document.querySelector("ptc-splitter");if(splitPane){splitPane.removeEventListener("resize",this._handleResize)}window.removeEventListener("resize",this._handleResize);if(this.timelineStepsEl){this.timelineStepsEl.removeEventListener("mousemove",this.mouseListenerTimeline)}if(this.videoDraggerEl){this.videoDraggerEl.removeEventListener("mousemove",this.mouseListenerVideo)}document.body.removeEventListener("mousedown",this.documentMouseDown);this._removeMouseMoveListener()}/**
     * Step video overloay mouse move listener
     * @param {MouseEvent} evt
     */mouseListenerVideo(evt){const{top,left}=this.videoDraggerEl.getBoundingClientRect();this.hoverSpriteToolTip(evt,left,this.videoDraggerEl.offsetWidth,top)}/**
     * Listener specific to the timeline element
     * @param {MouseEvent} evt
     */mouseListenerTimeline(evt){this.hoverSpriteToolTip(evt,this.timelineEl.getBoundingClientRect().left,this.timelineEl.offsetWidth)}spacePressed(){this.deselectClipdragElement();return super.spacePressed()}/**
     * @param {Boolean} right - direction of movment, true if to the right (higher value)
     * @returns {Boolean} true if the event changed the video time
     */arrowPressed(right){if(this.isClipping&&this.currentTimeInidicatorSelectedForKeyMove()&&this.movementOutsideOfClipBoundary(right,this.getFrameDeltaTime(1))){return!1}return super.arrowPressed(right)}/**
     * @returns true if the keyboard listener navigation will move the current time indicator
     */currentTimeInidicatorSelectedForKeyMove(){return!this.selectedClipdragEl||this.selectedClipdragEl&&this.selectedClipdragEl.classList.contains("current-time-indicator")}/**
     * @param {Boolean} right - direction of movement, true if to the right (higher value)
     * @returns {Boolean} true if the movement will move outside of the clip boundar
     */movementOutsideOfClipBoundary(right,deltaTime){let result=!1,currentTime=this.getCurrentTime(this.getActiveVideo());if(right&&currentTime+deltaTime>=this.endTime||!right&&currentTime-deltaTime<=this.startTime){result=!0}return result}createTooltip(){const tooltip=document.createElement("div");tooltip.classList.add("sprite-tooltip");document.body.appendChild(tooltip);return tooltip}/**
     * Show the image on the sprite tooltip el passed in based on the mouse position
     * over and width of the element
     * @param {Event} evt - browser mouse event, clientX to help determine what time in the video
     * @param {*} offset - the left offset of the mouseover element to the page, to correctly get the
     *    position of the video
     * @param {*} width - of the mouse over element
     * @param {*} topOffset - optional, when set will determine vertical offset to be used instead of the mouse Y coordinate
     *    to position the tooltip
     */hoverSpriteToolTip(evt,offset,width,topOffset=null){if(!this.vttData.cues.length){return}const tooltipCursorOffset=20;this.tooltip=this.tooltip||document.querySelector(".sprite-tooltip")||this.createTooltip();this.tooltip.style.display="block";const xpct=Math.min((evt.clientX-offset)/width,.999),hoverTime=xpct*this.totalSessionTime,tooltipLeft=Math.max(evt.clientX-this.tooltip.offsetWidth/2,0);this.tooltip.style.left=tooltipLeft+"px";for(let i=0;i<this.vttData.cues.length;i++){var cue=this.vttData.cues[i];if(cue.startTime<=hoverTime&&cue.endTime>=hoverTime){const[x,y,width,height]=cue.text.split("=")[1].split(",");this.tooltip.style.background="url(\""+this.vttData.url+"\") "+-x+"px "+-y+"px";this.tooltip.style.width=width+"px";this.tooltip.style.height=height+"px";this.tooltip.style.top=(topOffset||evt.clientY)-height-tooltipCursorOffset+"px";return cue}}}/**
     * Gets a list of cues that fit into the width of the viewer, spread evenly through the total list.
     *  Will get images  1, 4, 7, 11 if 4 images fit and there are a total of 12 for example.
     */getHighlightCues(){const cues=[];if(0<this.vttData.cues.length){// 110px to allow for a cropped image in the last slot
const elWidth=this.getTimelineWidth()+110,imageWidth=.7*this.vttData.cues[0].text.split("=")[1].split(",")[2];let numberOfImages=Math.floor(elWidth/imageWidth);const step=this.vttData.cues.length/numberOfImages;for(let i=0;i<this.vttData.cues.length;i=i+step){var cue=this.vttData.cues[Math.floor(i)];cues.push(cue)}}return cues}/**
     * Gets a list of static images that will display above the timeline as permanent sprite based tooltips.
     */getFixedSpriteImages(){this.fixedCues=this.getHighlightCues();const images=[];let count=1;for(const cue of this.fixedCues){const xywh=cue.text.split("=")[1].split(",");images.push(html`
          <span
            class="sprite-fixed-image sprite-image-${count++}"
            style="background: url('${this.vttData.url}')
              -${xywh[0]}px -${xywh[1]}px; width:${xywh[2]}px; height:${xywh[3]}px;"
          ></span>
        `)}return images}/**
     * Gets a list of lit templates for events to show on the capture timeline
     * @param {Array<TimelineEntry} entries e.g. pictures or bookmarks
     * @param {String} cls - css class to use for the entry type
     * @param {lit-html} icon - to display at the top of the entry
     * @param {CaptureStep} step - to get start time and total time to generate % calculations
     */getTimelineEntries(entries=[],cls,icon){let result=[];var el=this;const checkIsInClipingSpace=entryTime=>{if(this.startTime<=entryTime&&this.endTime>=entryTime){return"inCliping"}return""};entries.forEach(function(entry){//will be posotioned relative to the start of the timeline
const entryTime=entry.getTime(),entryPosition=100*(entryTime/el.totalSessionTime)+"%";result.push(html`
        <span
          class="${cls} ${el.isClipping?checkIsInClipingSpace(entryTime):""}"
          style="left: ${entryPosition}"
          @click="${event=>el.setVideoCurrentTimeFromTimelineEntry(event,entryTime)}"
        >
          <div class="timeline-entry-icon">${icon}</div>
        </span>
      `)});return result}render(){return html`
      ${this.renderVideoSection()} ${this.renderTimelineSection()}
      <canvas class="video-snapshot" hidden></canvas>
    `}/**
     * @returns html template for the video player section
     *          with take picture and clip actions
     */renderVideoSection(){const validVideo=this.activeCaptureStep&&this.activeCaptureStep.hasValidVideo();return html`
      <section class="capture-video ${this._loadedVideo?"loaded":"loading"}">
        <div class="tile__actions">
          <span
            class="video-action snapshot-action ${validVideo&&!this.readOnly?"":"-disabled"}"
            data-tooltip="${this.labels.takePicture}"
            tooltip-position="right"
            @click=${()=>this.showCreateAssetDialog(ASSET_TYPE.IMAGE)}
          >
            ${cameraSnapshotIcon}
          </span>
          <span
            class="${this.isClipping?"video-action clip-action video-action-active":"video-action clip-action"}
            ${validVideo&&!this.readOnly?"":"-disabled"}"
            tooltip-position="right"
            data-tooltip="${this.labels.createClip}"
            @click=${()=>this.startClipping()}
          >
            ${scissorIcon}
          </span>
        </div>
        ${this.renderVideoPlayer()}
      </section>
    `}/**
     * @returns html template for the video player(s)
     */renderVideoPlayer(){if(!this.captureData){this.totalSessionTime=0;return html``}this.totalSessionTime=this.captureData.getTotalTime();let videoTemplates;// if there is a full-length video on the capture, use it instead of the individual step videos
if(this.isUsingCombinedVideo()){videoTemplates=super.renderVideo({src:baseURL+this.captureData.combinedVideoUrl})}else{videoTemplates=[];this.captureData.getSteps().forEach(step=>{if(step.hasValidVideo()){// if there's not a full-length video on the capture,
// render the individual step videos and make it look like there's a single video
videoTemplates.push(super.renderVideo({src:baseURL+step.videoUrl,stepId:step.id,hidden:!isSame(step,this.activeCaptureStep),preload:!isSame(step,this.activeCaptureStep)?"none":"auto"}))}})}const height=this.presetHeightOnNextLoad?`height: ${this.presetHeightOnNextLoad}px`:"";return html`
      <div class="video__wrapper" style="${height}">
        ${videoTemplates} ${this.renderVideoControls()}
      </div>
    `}/**
     * @returns html template for timeline of thumbnail sprites,
     *          video zoom in/out, settings to change video quality from HD/SD,
     *          and video clip indicators when user is taking video clips
     */renderTimelineSection(){if(!this.captureData){return html``}const fixedSpriteImages=this.getFixedSpriteImages(),timelineSteps=[],timelineEntries={bookmarks:[],pictures:[],warnings:[],locations:[]};let prevStepEndTime=0;this.captureData.getSteps().forEach((step,index)=>{const stepNumber=index+1;if(step.hasValidVideo()){prevStepEndTime=step.getEndTime();const stepDivider=this.isClipping&&step.getEndTime()>=this.startTime&&step.getEndTime()<=this.endTime?html`
                <span class="timeline-step-divider"></span>
              `:html``,timelineStep=html`
          <div
            class="timeline-step ${isSame(step,this.activeCaptureStep)&&!this.isClipping?"active":""}"
            style="width: ${100*(step.getTotalStepTime()/this.totalSessionTime)}%"
            @click="${e=>this.setVideoCurrentTimeFromTimeline(e)}"
          >
            <span class="timeline-step__number">${stepNumber}</span>
            ${stepDivider}
          </div>
        `;timelineSteps.push(timelineStep);//Note: somtimes pictures have timestamp 0:0:0
const entries=step.getTimelineEntries(),bookmarks=this.getTimelineEntries(entries.bookmarks,"timeline-bookmark",bookmarkIcon),pictures=this.getTimelineEntries(entries.pictures,"timeline-snapshot",imageIcon),locations=this.getTimelineEntries(entries.locations,"timeline-location",locationIcon);timelineEntries.bookmarks=timelineEntries.bookmarks.concat(bookmarks);timelineEntries.pictures=timelineEntries.pictures.concat(pictures);timelineEntries.locations=timelineEntries.locations.concat(locations)}else{const entryPosition=100*(prevStepEndTime/this.totalSessionTime);let warningEntry=html`
          <span
            class="timeline-warning"
            style="left: ${entryPosition}%"
            @click="${e=>this.setActiveCaptureStep(step)}"
          >
            <div
              class="timeline-entry-icon warning-icon"
              data-tooltip="${window.i18next.t("capture-editor.invalid-step-timeline-tooltip",{STEP_INDEX:stepNumber})}"
              tooltip-position="${50<entryPosition?"left":"right"}"
              tooltip-reference="svg"
            >
              ${alertWarningIcon}
            </div>
          </span>
        `;timelineEntries.warnings.push(warningEntry)}});return html`
      <section class="capture-timeline ${this.isClipping?"-clipping":""}">
        <div class="l-banner timeline-banner">
          ${this.renderTipPopup()}
          <span class="preparing-optimized-video" ?hidden="${this.isSdQualityAvailable()}">
            ${this.labels.preparingOptimizedVideo}
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </span>
        </div>
        <div class="header select-step-header l-banner body-font">
          <div class="header__icon">${timelineSectionIcon}</div>
          <span class="timeline-title">${this.labels.timelineTitle}</span>
          <span class="timeline-zoom">
            <input
              type="range"
              value="${this.timelineZoomFactor}"
              min="${this.minTimelineZoom}"
              max="${this.maxTimelineZoom}"
              step="0.05"
              @input="${event=>this.setTimelineZoom(parseFloat(event.target.value))}"
            />
          </span>
          <span class="video-quality" @click="${e=>this._toggleVideoQualityPopup(e)}">
            ${gearIcon}
            <span class="hd-icon hd-icon-small" ?hidden="${this.videoQuality===VideoQuality.SD}">HD</span>
          </span>
          <div
            class="video-quality-popup popup-container popup-container--medium "
            style="display: ${this._videoQualityPopupVisible?"block":"none"};"
          >
            <div class="video-quality-popup--header">${this.labels.qualityPopupHeader}</div>
            <div class="video-quality-popup--subheader">${this.labels.qualityPopupSubheader}</div>
            <div class="video-quality-popup--subheader-notice">${this.labels.qualityPopupSubheaderNotice}</div>
            <div class="video-quality-popup--option -HD ${this.videoQuality===VideoQuality.HD?"selected":""}">
              <span value="${VideoQuality.HD}" @click="${e=>this.videoQualitySelectionChanged(e)}">
                ${this.videoQuality===VideoQuality.HD?radioSelectedIcon:radioUnselectedIcon}
              </span>
              <div>
                ${this.labels.qualityPopupHDOptionLabel}
                <span class="hd-icon hd-icon-tiny">HD</span>
              </div>
              <div>${this.labels.qualityPopupHDOptionExplanation}</div>
            </div>
            <div
              class="video-quality-popup--option -SD ${this.videoQuality===VideoQuality.SD?"selected":""} ${!this.isSdQualityAvailable()?"disabled":""}"
            >
              <span
                value="${VideoQuality.SD}"
                @click="${e=>this.isSdQualityAvailable()&&this.videoQualitySelectionChanged(e)}"
              >
                ${this.videoQuality===VideoQuality.SD?radioSelectedIcon:radioUnselectedIcon}
              </span>
              <div>${this.labels.qualityPopupSDOptionLabel}</div>
              <div>${this.labels.qualityPopupSDOptionExplanation}</div>
              <div ?hidden="${this.isSdQualityAvailable()}">
                ${this.labels.qualityPopupSDOptionPostProcessingMessage}
              </div>
            </div>
          </div>
          <div
            id="capture-processing-completed-popup"
            class="capture-popup"
            ?hidden="${!this._captureProcessingCompletePopupVisible}"
          >
            <div id="capture-processing-completed-popup--arrow" class="capture-popup--arrow">${popupArrow}</div>
            <div id="capture-processing-completed-popup--header" class="capture-popup--header">
              ${this.labels.captureProcessingCompletedPopupHeader}
            </div>
            <div id="capture-processing-completed-popup--text" class="capture-popup--text">
              ${this.labels.captureProcessingCompletedPopupText}
            </div>
            <a
              id="capture-processing-completed-popup--confirm-link"
              class="capture-popup--confirm-link"
              href="#"
              @click="${e=>this.hideCaptureProcessingCompletePopup(e)}"
            >
              ${this.labels.captureProcessingCompletedPopupConfirmLink}
            </a>
          </div>
        </div>

        <div class="timeline-outside-container">
          <div class="timeline-container ${1<this.timelineZoomFactor?"timeline-zoomed":""}">
            <div class="timeline-fixed-images" @click="${e=>this.setVideoCurrentTimeFromTimeline(e)}">
              ${0<fixedSpriteImages.length?fixedSpriteImages:""}
              <div class="timeline-overlay" ?hidden="${0<fixedSpriteImages.length}">
                <div class="timeline-overlay-shadow">
                  <div>${clockIcon}</div>
                </div>
              </div>
            </div>
            <div class="timeline caption-font">
              <span class="timeline-steps" @mouseout="${e=>this.tooltipMouseOut(e)}">
                ${timelineSteps} ${timelineEntries.pictures} ${timelineEntries.bookmarks} ${timelineEntries.warnings}
                ${timelineEntries.locations}
              </span>
            </div>
          </div>

          <div class="timeline-clip-frame-container">
            <span class="video-clipdrag sprite-overlay sprite-overlay-left" ?hidden="${!this.isClipping}"></span>
            <span class="video-clipdrag sprite-overlay sprite-overlay-right" ?hidden="${!this.isClipping}"></span>
            <span class="video-clipdrag start-time" ?hidden="${!this.isClipping}">
              <div class="video-drag-thumb-text caption-font">${this.firstDraggerDisplay()}</div>
              <div
                class="video-vertical-line time-dragger selectable-clipdrag-element"
                tabindex="-1"
                @mousedown="${e=>this.clipdragElementClicked(e)}"
              >
                <div class="clipdrag-handle">${clipperDragHandle}</div>
              </div>
            </span>
            <span class="video-clipdrag-spanner" ?hidden="${!this.isClipping}"></span>
            <span class="video-clipdrag end-time" ?hidden="${!this.isClipping}">
              <div class="video-drag-thumb-text caption-font">${this.secondDraggerDisplay()}</div>
              <div
                class="video-vertical-line time-dragger selectable-clipdrag-element"
                tabindex="-1"
                @mousedown="${e=>this.clipdragElementClicked(e)}"
              >
                <div class="clipdrag-handle">${clipperDragHandle}</div>
              </div>
            </span>
            <span
              class="current-time-indicator selectable-clipdrag-element"
              tabindex="-1"
              @mousedown="${e=>this.clipdragElementClicked(e)}"
              ?hidden="${!this._loadedVideo||!this.activeCaptureStep||!this.activeCaptureStep.hasValidVideo()}"
            ></span>
          </div>
        </div>

        <div class="clip-actions" ?hidden="${!this.isClipping}">
          <div class="clip-duration l__grow">
            ${this.labels.clipDuration+":"}
            <span>${convertNumberToMovieTimeStr(this.endTime-this.startTime)}</span>
          </div>
          <div>
            <button class="clip-action button-medium cancel_dark cancel" @click="${()=>this.stopClipping()}">
              ${this.labels.cancel}
            </button>
            <button
              class="clip-action button-medium ok"
              ?disabled="${this.endTime-this.startTime<=MIN_VIDEO_TIME}"
              @click="${()=>this.showCreateAssetDialog(ASSET_TYPE.VIDEO)}"
            >
              ${this.labels.create}
            </button>
          </div>
          <div></div>
        </div>
      </section>
    `}renderTipPopup(){let key=this.scrubTipPopupKey,header=this.labels.scrubTipTitle,body=this.labels.scrubTip;if(this.isClipping){key=this.clipBoundsTipPopupKey;header=this.labels.clipBoundsTitle;body=this.labels.clipBoundsTip}return html`
      <ptc-tip-popup
        class="capture-tip-popup"
        cacheKey="${key}"
        componentCacheKey="${COMPONENT_STATE_CACHE_KEY$1}"
        header="${header}"
        .htmlBody="${body}"
      ></ptc-tip-popup>
    `}/**
     * @param {Number} value
     */setTimelineZoom(value){// Constrain between min and max values
this.timelineZoomFactor=Math.min(Math.max(value,this.minTimelineZoom),this.maxTimelineZoom);this.updateZoomFill()}updateZoomFill(){// Update background image of range slider to "fill" on left while
// maintaining tick marks within the bar.
const sliderEl=this.querySelector(".timeline-zoom input[type=range]"),adjustedZoom=this.timelineZoomFactor-this.minTimelineZoom,adjustedMax=this.maxTimelineZoom-this.minTimelineZoom,percentFull=100*(adjustedZoom/adjustedMax);// To calc percent full, need to account for non-0 minimum value.
let sliderGradient;if(24.5>percentFull){sliderGradient=`linear-gradient(
        to right,
        var(--ptc-green) 0 ${percentFull}%,
        black ${percentFull}% 24.5%,
        transparent 24.5% 25.5%,
        black 25.5% 49.5%,
        transparent 49.5% 50.5%,
        black 50.5% 74.5%,
        transparent 74.5% 75.5%,
        black 75.5%
      )`}else if(49.5>percentFull){sliderGradient=`linear-gradient(
        to right,
        var(--ptc-green) 0 24.5%,
        transparent 24.5% 25.5%,
        var(--ptc-green) 25.5% ${percentFull}%,
        black ${percentFull}% 49.5%,
        transparent 49.5% 50.5%,
        black 50.5% 74.5%,
        transparent 74.5% 75.5%,
        black 75.5%
      )`}else if(74.5>percentFull){sliderGradient=`linear-gradient(
        to right,
        var(--ptc-green) 0 24.5%,
        transparent 24.5% 25.5%,
        var(--ptc-green) 25.5% 49.5%,
        transparent 49.5% 50.5%,
        var(--ptc-green) 50.5% ${percentFull}%,
        black ${percentFull}% 74.5%,
        transparent 74.5% 75.5%,
        black 75.5%
      )`}else{sliderGradient=`linear-gradient(
        to right,
        var(--ptc-green) 0 24.5%,
        transparent 24.5% 25.5%,
        var(--ptc-green) 25.5% 49.5%,
        transparent 49.5% 50.5%,
        var(--ptc-green) 50.5% 74.5%,
        transparent 74.5% 75.5%,
        var(--ptc-green) 75.5% ${percentFull}%,
        black ${percentFull}%
      )`}sliderEl.style.backgroundImage=sliderGradient}/**
     * Handle the `ended` event for step videos
     * @param {CaptureStep} step - The step of the video that just ended
     */videoEnded(event){if(this.isUsingCombinedVideo()){super.videoEnded(event)}else{const videoEl=event.target,step=this.captureData.getStepFromId(videoEl.getAttribute("data-step"));// This is only intended to handle when a video has been played to the end, so the next step's video should be
// started to continue seamless playback.
//
// So, ignore videos that end while seeking or after the active step has changed (which can happen when
// dragging/dropping the seek handle quickly).
// Need to separately check if the the user seeked to the end of the video to trigger this event. In that case
// `seeking` is no longer true, but still don't want to automatically start playing the next step.
// `setVideoCurrentTime` will handle cases where the next step *should* be played.
if(!this.seeking&&!this.seekedToEndOfVideo&&isSame(step,this.activeCaptureStep)){this.playNextStep()}else{this.stopClipPreviewInterval()}}}/**
     * Update active step and dispatch event to notify other components
     * @param {Object} step - the step to be set as the active step
     * @param {boolean} skipReset true to skip the pause/reset time of the videos
     * @param {boolean} skipDispatch true to skip dispatching event, so video clip preview
     *                               can avoid switching capture viewer's active step
     */setActiveCaptureStep(step,skipReset,skipDispatch){if(!isSame(step,this.activeCaptureStep)){if(!skipReset){this.pauseResetNewStep(step,this.activeCaptureStep)}// don't pause/reset videos again when "updated" is triggered, it was already taken care of
this.skipPauseResetNewStepForNextUpdate=step;if(!skipDispatch){store.dispatch(set_active_capture_step(step.id,this.captureData.id))}}}/**
     * Handles pausing old video and reset time of new video when jumping to new active step
     */pauseResetNewStep(newStep,oldStep){if(this.captureData&&!isSame(newStep,oldStep)){// pause the video for the current active step
const video=this.getVideo(oldStep&&oldStep.id);if(video){video.pause()}// set the given step as the active step
this.activeCaptureStep=newStep;const activeVideo=this.getActiveVideo();if(activeVideo){if(this.isUsingCombinedVideo()){activeVideo.currentTime=this.activeCaptureStep.getStartTime()}else{// reset the currentTime for the active video back to 0 since the video might have been partially played the last time this step was active
activeVideo.currentTime=0}}}}/**
     * Plays the next step with valid video
     */playNextStep(){const steps=this.captureData.getSteps();let index=steps.findIndex(step=>{return isSame(step,this.activeCaptureStep)});do{index++}while(index<steps.length&&!steps[index].hasValidVideo());if(index<steps.length){const step=steps[index];this.setActiveCaptureStep(step);const activeVideo=this.getActiveVideo();if(activeVideo){activeVideo.play()}}}/**
     * Sets the currentTime on the video to allow the video to start at the specified location.
     * @param {Number} t - the time to jump to
     * @param {Boolean} continuePlaying - set to true to allow the next video to automatically start, if the current active video is playing
     */setVideoCurrentTime(t,continuePlaying){if(Number.isNaN(t)){return}// check if the current video is playing
const playNextVideo=continuePlaying&&this.getActiveVideo()&&!this.getActiveVideo().paused,step=this.captureData.getStepFromTime(t);this.setActiveCaptureStep(step);const activeVideo=this.getActiveVideo();if(activeVideo){// use the exact time if the combined video is being used, only offset the startTime for the individual step videos
let startTime=this.isUsingCombinedVideo()?0:step.getStartTime();activeVideo.currentTime=t-startTime;this.seekedToEndOfVideo=activeVideo.currentTime>=activeVideo.duration;if(playNextVideo){this.playVideo()}else{// we may not have navigated to a different step, in this case pause the video if the action does not want the
// video to continue to play after the video has been moved to the new time
activeVideo.pause()}}}/**
     * Sets the timeline indicator position immediately after click event and then proceeds to set video time per usual
     * @param {Event} event timeline click event
     */setVideoCurrentTimeFromTimeline(event){this.currentTimeEl.style.left=this.getRelativeTimelineXPosition(event)+"px";this.setVideoCurrentTime(this.getLocationInTimeline(event),!0)}/**
     * Sets the timeline indicator position immediately after click event on timeline entry and then proceeds to set video time per usual
     * @param {Event} event entry click event
     * @param {Number} entryTime
     */setVideoCurrentTimeFromTimelineEntry(event,entryTime){event.stopPropagation();this.setVideoCurrentTime(entryTime)}static get properties(){return{activeCaptureStep:{type:CaptureStep,attribute:!1},captureData:{type:CaptureData,attribute:!1},isClipping:{type:Boolean},startTime:{type:Number},endTime:{type:Number},timelineZoomFactor:{type:Number},activeCapture:{type:Object},vttData:{type:Object},fixedCues:{type:Object},videoQuality:{type:String},preferredVideoQuality:{type:String},presetHeightOnNextLoad:{type:Number},readOnly:{type:Boolean},// Try to keep the video container size permanent before the video has loaded. Reduces the UI jumpiness.
_loadedVideo:{type:Boolean}}}async stateChanged(state){await this.loadVTTData()}updated(changedProps){if(changedProps.has("activeCaptureStep")){if(!isSame(this.activeCaptureStep,this.skipPauseResetNewStepForNextUpdate)){this.pauseResetNewStep(this.activeCaptureStep,changedProps.get("activeCaptureStep"))}delete this.skipPauseResetNewStepForNextUpdate}if(changedProps.has("timelineZoomFactor")){this.handleResize()}// Try using user's preferred video quality, but if SD is not available we'll have to use HD anyway.
// Also using SD by default if user did not select otherwise.
const defaultVideoQuality=VideoQuality.SD;this.videoQuality=this.isSdQualityAvailable()?this.preferredVideoQuality||defaultVideoQuality:VideoQuality.HD}/**
     * Load any associated VTT data for the capture, if it has a sprite
     */async loadVTTData(){this.vttData=this.vttData||{cues:[],url:""};if(this.captureData&&this.captureData.vttUrl&&!this.vttData.url){let data=await(await AuthUtils.fetch(baseURL+this.captureData.vttUrl)).text();return await this._parseVTTData(data)}}/**
     * Parses VTT file data into cues (array)
     * @param {String} data
     */async _parseVTTData(data){await this.loadVttPromise;var parser=new window.WebVTT.Parser(window,window.WebVTT.StringDecoder());this.vttData={cues:[],url:baseURL+this.captureData.spriteUrl};parser.oncue=cue=>{if(-1<cue.text.indexOf("#xywh=")){this.vttData.cues.push(cue)}};parser.parse(data);parser.flush();return this.vttData}/**
     * open the create video/image-from-video dialog, to allow the user to enter a name
     */async showCreateAssetDialog(mediaType){this.getActiveVideo().pause();// get the current diplayed video and create a preview image - works for both cases
const canvas=this.querySelector(".video-snapshot");await this._grabCurrentVideoImage(canvas,mediaType);const startStep=this.isClipping?this.captureData.getStepFromTime(this.startTime):this.activeCaptureStep,config={captureData:this.captureData,stepNumber:startStep.stepNumber};let result;switch(mediaType){case ASSET_TYPE.IMAGE:config.imageURL=canvas.toDataURL("image/jpeg");config.launchPoint=this.launchPoint;result=await(await this.CreateAssetDialogImport).CreateAssetDialog.openNewImage(config);break;case ASSET_TYPE.VIDEO:config.clipData=this.getVideoClipData();config.videoQuality=this.videoQuality;result=await(await this.CreateAssetDialogImport).CreateAssetDialog.openNewVideo(config);if(result){this.stopClipping()}break;}}/**
     * For use by the asset creation dialog. Draws the currently displayed image from the capture video
     * into the provided canvas. If the dialog is for the creation of an image asset, the image will
     * always be taken from the source step video even if the proxy combined video is displayed.
     *
     * @param {HTMLCanvasElement} canvas The canvas element to draw the image in
     * @param {String} mediaType The type of media of the asset creation dialog
     */async _grabCurrentVideoImage(canvas,mediaType){const videoEl=this.getActiveVideo();if(mediaType===ASSET_TYPE.IMAGE){// pause video during creating image
videoEl.pause()}if(mediaType!==ASSET_TYPE.IMAGE||!this.isUsingCombinedVideo()){// Just grab the image currently displayed in the active video
canvas.width=videoEl.videoWidth;canvas.height=videoEl.videoHeight;canvas.getContext("2d").drawImage(videoEl,0,0,videoEl.videoWidth,videoEl.videoHeight)}else{// Since the proxy combined video has a lower bitrate than the source videos,
// need to get the image from the source video for the new asset.
await this.takePictureFromSourceVideo(canvas)}}/**
     * NOTE: Assumes the proxy combined video is the active video.
     * Based on the current time of the combined video, loads the corresponding capture step original video and draws
     * that image in the provided canvas.
     *
     * @param {HTMLCanvasElement} canvas The canvas element to draw the image in
     */async takePictureFromSourceVideo(canvas){const combinedVideo=this.getActiveVideo(),stepVideoUrl=baseURL+this.activeCaptureStep.videoUrl,stepVideoTime=combinedVideo.currentTime-this.activeCaptureStep.getStartTime();return new Promise(function(resolve,reject){const video=document.createElement("video");video.muted=!0;// No need to load audio
video.src=stepVideoUrl;video.crossOrigin="anonymous";// Needed to prevent tainted canvas
video.currentTime=stepVideoTime;const cleanup=()=>{video.remove()},videoLoadedCallback=async()=>{// After video is loaded, capture the image
canvas.width=video.videoWidth;canvas.height=video.videoHeight;try{canvas.getContext("2d").drawImage(video,0,0,video.videoWidth,video.videoHeight);resolve(canvas)}catch(error){reject(error)}finally{cleanup()}};video.addEventListener("loadeddata",videoLoadedCallback,!0);video.addEventListener("error",evt=>{// try to dig out evt.path[0].error which may have error message
// e.g. MediaError {code: 4, message: "DEMUXER_ERROR_COULD_NOT_OPEN: FFmpegDemuxer: open context failed"}
const err=(((evt||{}).path||{})[0]||{}).error||"";console.error("error loading video",err,evt);reject(new Error("unable to load video to create image. video url = "+stepVideoUrl));cleanup()});video.load()})}/**
     * Start a clip video operation
     */startClipping(){this.isClipping=!this.isClipping;//Clicking the button will toggle on/off
const videoEl=this.getActiveVideo();if(videoEl){// pause video during creating video clip
videoEl.pause()}this.startTime=0;this.endTime=this.totalSessionTime;// clip action hidden while invalid step is active, but check again to be safe
if(this.activeCaptureStep&&this.activeCaptureStep.hasValidVideo()){this.startTime=this.activeCaptureStep.getStartTime();this.endTime=this.activeCaptureStep.getEndTime()}this.handleResize();document.querySelectorAll(".mask-while-clipping").forEach(el=>el.classList.add("disable-mask"))}/**
     * Stop a clip operation
     */stopClipping(){this.isClipping=!1;this.stopClipPreviewInterval();document.querySelectorAll(".mask-while-clipping").forEach(el=>el.classList.remove("disable-mask"))}/**
     * Creates the JSON payload to the video clip api based on the UI input placement of the boundary markers.
     * @returns {Array} of video clip blocks
     */getVideoClipData(){let videos=[];//Minimum 2 second duration, otherwise, take a picture
if(this.endTime-this.startTime<MIN_VIDEO_TIME){return videos}const defaultProject=`/${defaultProjectName}/assets/`;//constant to search/cut from the URLs to find the asset name
this.captureData.getSteps().forEach(step=>{if(step.hasValidVideo()){const stepStartTime=step.getStartTime(),stepEndTime=step.getEndTime();//If either step time is INSIDE the 2 clip boundaries
if(this.startTime>=stepStartTime&&this.startTime<=stepEndTime||this.endTime>=stepStartTime&&this.endTime<=stepEndTime||stepStartTime>this.startTime&&stepEndTime<this.endTime){let clipStartTime=0;if(this.startTime>stepStartTime){clipStartTime=this.startTime-stepStartTime}let duration=Math.min(stepEndTime,this.endTime)-stepStartTime-clipStartTime;//TODO better handling when full duration is greater than min, but one of the video sections is less than min
if(duration>=MIN_VIDEO_TIME){//Minimum amount of duration from a clip to stitch.
videos.push({assetName:step.videoUrl.substring(step.videoUrl.indexOf(defaultProject)+defaultProject.length),url:step.videoUrl,startTime:convertNumberToMovieTimeStrWithMilliseconds(clipStartTime),duration:convertNumberToMovieTimeStrWithMilliseconds(duration),stepId:step.id})}}}});return{sourceId:this.captureData.id,videos}}/**
     * Starts a drag of the clip video boundary
     * @param {MouseEvent} event
     */onClipDragStart(event){this._removeMouseMoveListener();this.dragClipEl=event.target.closest(".video-clipdrag");this.selectClipdragElement(this.dragClipEl.querySelector(".selectable-clipdrag-element"));document.body.addEventListener("mousemove",this._mouseMoveListener,{passive:!0});document.body.addEventListener("mouseup",this._removeMouseMoveListener);//Stop the mouse drag
event.stopPropagation();event.preventDefault();return!1}/**
     * Moves one of the drag handles for clip video boundary
     * @param {MouseEvent} event
     */onClipMouseMove(event){const newPos=this.getRelativeTimelineXPosition(event);this.dragClipEl.style.left=newPos+"px";this.setDragHandleTimes(this.dragClipEl);this.setVideoCurrentTimeFromTimeline(event)}/**
     * Handles the timline sizing and placements of drag handle position markers
     * after a split pane resize or zoom level change.
     *
     * The relative position in px for the drag handles is wrong after the window size changes
     * because each video section is a relative % of the size.  It may be possible to set the drag
     * handles as a % left instead of a px to avoid this, but it wasn't perfect either yet with testing.
     */handleResize(){if(!this.timelineEl){return}// Handle timeline zoom
// Need to set the absolute positioned elements to a position that won't add extra width on its own because
// their position is beyond the end of the timeline
this.rightOverlay.style.right=1===this.timelineZoomFactor?"10px":0;this.startTimeEl.style.left=0;this.endTimeEl.style.left=0;this.currentTimeEl.style.left=0;this.timeSpanEl.style.left=0;const containerWidth=parseFloat(window.getComputedStyle(this.timelineContainerEl).width),maxScroll=this.timelineContainerEl.scrollWidth-containerWidth,scrollRatio=this.timelineContainerEl.scrollLeft/maxScroll,timelineEls=this.querySelectorAll(".timeline-container > *"),zoomWidth=containerWidth*this.timelineZoomFactor;for(let el of timelineEls){el.style.width=zoomWidth+"px"}// Keep relative scroll position the same
// container's scrollWidth will be different now since the width of contained elements was just changed
const newMaxScroll=this.timelineContainerEl.scrollWidth-containerWidth;this.timelineContainerEl.scrollLeft=newMaxScroll*scrollRatio;const totalTime=this.totalSessionTime;this.timelineWidth=parseFloat(window.getComputedStyle(this.timelineEl).width);this.endTimeEl.style.left=this.endTime/totalTime*this.timelineWidth+"px";this.startTimeEl.style.left=this.startTime/totalTime*this.timelineWidth+"px";this.updateOverlay(this.timelineWidth);this.updateSelectionBar();this.updateCurrentTimeIndicator();this.fixedCues=this.getHighlightCues()}/**
     * Sets the time values for the element given its position (left px) compared to the total width
     * @param {DomElement} el
     */setDragHandleTimes(el){const newTime=this.updateClippingFrame(el);try{this.setVideoCurrentTime(newTime)}catch(e){console.error(e)}return newTime}updateClippingFrame(el){const cs=window.getComputedStyle(el);let totalTime=this.totalSessionTime,leftNum=parseInt(cs.left);const timelineWidth=this.getTimelineWidth();let newTime=leftNum/timelineWidth*totalTime;//converts left px to seconds
newTime=Math.max(0,newTime);newTime=Math.min(newTime,totalTime);// The recalculation above can be off by a small amount which can be a frame or 2.
// Use the actual current time as set by something like the keyboard frame advance to correct.
// Won't work with using the separate HD step videos yet
if(.09>Math.abs(newTime-this.getActiveVideo().currentTime)){newTime=this.getActiveVideo().currentTime}let isEndDragger=el.classList.contains("end-time"),swap=!1;//Swap the start/end draggers depending on the location if the start dragger goes past the end time, they switch to allow creating the clip to the right.
if(newTime<this.startTime&&isEndDragger){swap=!0;isEndDragger=!1}if(newTime>this.endTime&&!isEndDragger){isEndDragger=!0;swap=!0}if(swap){this._isSwapped=!this._isSwapped;//Keep the timestamps correct
if(!this.startTimeEl.style.left){this.startTimeEl.style.left=window.getComputedStyle(this.startTimeEl).left}if(!this.endTimeEl.style.left){this.endTimeEl.style.left=window.getComputedStyle(this.endTimeEl).left}const temp=this.startTimeEl;this.startTimeEl=this.endTimeEl;this.endTimeEl=temp;let tempTime=this.startTime;this.startTime=this.endTime;//Swap the times as well..
this.endTime=tempTime;this.endTimeEl.classList.remove("start-time");this.endTimeEl.classList.add("end-time");this.startTimeEl.classList.remove("end-time");this.startTimeEl.classList.add("start-time")}if(isEndDragger){this.endTime=newTime}else{this.startTime=newTime}this.updateOverlay(timelineWidth);this.updateSelectionBar();return newTime}/**
     * Update the mask overlay when the clip drag bars are on to show what is not in the clip
     * @params {Number} timelineWidth - width of the timeline el.
     */updateOverlay(timelineWidth){if(this.isClipping){const TIMELINE_MARGIN=10,outsideEl=this.timelineOutsideContainerEl;// Timeline outer container has padding for clip controls
this.leftOverlay.style.width=Math.max(parseFloat(this.startTimeEl.style.left)-TIMELINE_MARGIN,0)+"px";this.rightOverlay.style.width=Math.max(timelineWidth-parseFloat(this.endTimeEl.style.left),0)+"px";// Zoom can add a scrollbar, and in that case the right overlay may be limited to the edge of the container,
// it needs its right value adjust to go past the otherwise edge of its original container
if(1<this.timelineZoomFactor&&outsideEl.offsetWidth<outsideEl.scrollWidth){this.rightOverlay.style.right=outsideEl.offsetWidth-outsideEl.scrollWidth+TIMELINE_MARGIN+"px"}else{// The right value may have gone past the edge or part of a zoom been set to a non default value, reset in the default case.
this.rightOverlay.style.right="10px"}}}/**
     * Get the display time for the initial first clip drag element, and if
     * they get swapped, return the endTime
     */firstDraggerDisplay(){if(this._isSwapped){return this.createTimeDisplayStr(this.endTime)}else{return this.createTimeDisplayStr(this.startTime)}}/**
     * Get the display time for the initial second clip drag element, and if
     * they get swapped, return the startTime
     */secondDraggerDisplay(){if(this._isSwapped){return this.createTimeDisplayStr(this.startTime)}else{return this.createTimeDisplayStr(this.endTime)}}/**
     * Moves the white selection bar to show the selected video in between the 2 drag handles
     * Sets the left and width css properties to match the right & left clip handles
     */updateSelectionBar(){let startLeft=parseInt(this.startTimeEl.style.left);if(!startLeft){startLeft=parseInt(window.getComputedStyle(this.startTimeEl).left)}startLeft+=DRAGGER_WIDTH;let endLeft=parseInt(this.endTimeEl.style.left);if(!endLeft){endLeft=parseInt(window.getComputedStyle(this.endTimeEl).left)}this.timeSpanEl.style.left=startLeft+"px";// Add 1 to spanner width so that rounding errors won't cause visible spacing between it and the draggers.
this.timeSpanEl.style.width=endLeft-startLeft+1+DRAGGER_WIDTH+"px"}clipdragElementClicked(e){this.selectClipdragElement(e.currentTarget)}selectClipdragElement(elem){this.deselectClipdragElement();this.selectedClipdragEl=elem;if(this.selectedClipdragEl){this.selectedClipdragEl.classList.add("selected");const clipdrag=this.selectedClipdragEl.closest(".video-clipdrag");if(clipdrag){this.setDragHandleTimes(clipdrag)}}elem.focus();// Grab keyboard control
}deselectClipdragElement(){if(this.selectedClipdragEl){this.selectedClipdragEl.classList.remove("selected");this.selectedClipdragEl=null}}documentMouseDown(event){if(!event.target.classList.contains("selectable-clipdrag-element")&&!event.target.closest("selectable-clipdrag-element")){this.deselectClipdragElement()}}/**
     * The end of a video clip drag, which sets a boundary for clipping.
     * This will take a picture of the video to set as a thumbnail to remind where the bound is set.
     */onClipDragEnd(){document.body.removeEventListener("mousemove",this._mouseMoveListener);document.body.removeEventListener("mouseup",this._removeMouseMoveListener);this.dragClipEl=void 0}/**
     * Creates a time display string ie. "01:30"
     * @param {Number} n
     * @returns the String display of the number in hh:mm:ss or mm:ss if the hours are 00:
     */createTimeDisplayStr(n){if(isNaN(n)){//Unit tests errors, but good to not fail for unexpected live data
console.warn("Time to convert was NaN");return"00:00"}let str=convertNumberToMovieTimeStr(n);if(str.startsWith("00:")){str=str.substring(3)}return str}/**
     * Toggles the custom controls for the main Video element
     * @param {MouseEvent} event
     * @param {Boolena} showControls - true to make the controls visible, otherwise false to hide it
     */toggleVideoPlayerControls(event,showControls){if(this.activeCaptureStep&&this.activeCaptureStep.hasValidVideo()){super.toggleVideoPlayerControls(event,showControls)}else{super.toggleVideoPlayerControls(event,!1)}}/**
     * Play or pause the video
     * @param {boolean} play true to play video,
     *                       false to pause,
     *                       undefined to toggle based on whether video is currently playing
     */playPauseVideo(play){super.playPauseVideo(play);const video=this.getActiveVideo();if(video&&video.paused){this.stopClipPreviewInterval()}}/**
     * Start a interval function to auto stop the video when the time matches the end clip time
     */setStopInterval(){const activeCaptureStep=this.activeCaptureStep,video=this.getActiveVideo();let currentPlaytime=this.isUsingCombinedVideo()?video.currentTime:activeCaptureStep.getStartTime()+video.currentTime;//The start times might be identical with the exception of a small decimal.
currentPlaytime=Math.round(100*currentPlaytime);const checkStartTime=Math.round(100*this.startTime),checkEndTime=Math.round(100*this.endTime);if(this.isClipping&&currentPlaytime>=checkStartTime&&currentPlaytime<=checkEndTime){//set timeout to stop at clip end
this.previewClipInterval=setInterval(()=>{const v=this.getActiveVideo();if(v.currentTime>=this.endTime||!this.isUsingCombinedVideo()&&this.activeCaptureStep.getStartTime()+v.currentTime>=this.endTime){v.pause();this.stopClipPreviewInterval();v.currentTime=this.isUsingCombinedVideo()?this.endTime:this.endTime-this.activeCaptureStep.getStartTime()}},50);// 50 to check the value very frequently, but not be too choppy on the playback
}}/**
     * Stops the interval function that is watching for the video
     * to hit the clip boundary in order to stop playing it.
     */stopClipPreviewInterval(){if(this.previewClipInterval){clearInterval(this.previewClipInterval);this.previewClipInterval=0}}/**
     * Plays the active video. If that video is already at the end of its duration, the next step is played.
     */playVideo(){const video=this.getActiveVideo();if(video){if(video.currentTime>=video.duration){this.playNextStep()}else{video.play()}this.setStopInterval()}}/**
     * Moves the video foward/back the number of given frames
     * @param {Number} seconds - the number of seconds to jump, positive number jumps forward and a negative number jumps backwards
     * @param {Boolean} [rounded=true] - whether to round the new video time
     */skipTime(seconds,rounded=!0){if(super.skipTime(seconds,rounded)){this.updateCurrentTimeIndicator()}}/**
     * Adjusts current time if there are N videos
     * @returns currentTime off the given video element
     */getCurrentTime(videoEl){const splitVideoOffset=this.isUsingCombinedVideo()?0:this.activeCaptureStep.getStartTime();return splitVideoOffset+videoEl.currentTime}/**
     * As the video is playing, move the video dragger/slider in the video controls (since the video controls are custom controls)
     * @param {TimeUpdateEvent} event
     */updateVideoProgress(event){const video=event.target;// only update the video progress if the event is for the video on the active step
if(this.activeCaptureStep&&video.src.endsWith(this.activeCaptureStep.videoUrl)||this.isUsingCombinedVideo()){// update the dragger/slider in the video controls
super.updateVideoProgress(event);this.updateCurrentTimeIndicator();// Detect if combined video played to a new step
if(this.isUsingCombinedVideo()&&!video.paused){const step=this.captureData.getStepFromTime(video.currentTime);if(!isSame(step,this.activeCaptureStep)){this.setActiveCaptureStep(step,!0)}}}}/**
     * Updates the position of the current time indicator (vertical red line) in the timeline
     */updateCurrentTimeIndicator(){const videoPercentComplete=this.videoDraggerEl.value/this.videoDraggerEl.max,offset=this.getTimelineWidth()*videoPercentComplete+"px",selectedEl=this.selectedClipdragEl&&this.selectedClipdragEl.closest(".video-clipdrag");// Always update the current time "red line" based on the actual video position to be accurate with the picture.
if(this.currentTimeEl){this.currentTimeEl.style.left=offset}// Update the position of any additional selected bracket element.
if(selectedEl){selectedEl.style.left=offset;this.updateClippingFrame(selectedEl)}}/**
     * @returns {DOMElement} the video for the active step, may be null if active step has no video
     */getActiveVideo(){if(this.activeCaptureStep&&this.activeCaptureStep.hasValidVideo()){return this.getVideo(this.activeCaptureStep.id)}return void 0}/**
     * @param {string} id capture step id
     * @returns {DOMElement} the video for the given step id, may be null if step has no video
     */getVideo(id){return this.querySelector(this.isUsingCombinedVideo()?"video":`video[data-step="${id}"]`)}/**
     * Returns the calculated (or cached) width of the timeline element
     */getTimelineWidth(){if(!this.timelineWidth&&this.timelineEl){this.timelineWidth=parseFloat(window.getComputedStyle(this.timelineEl).width)}return this.timelineWidth}/**
     * @param {MouseEvent} event - click event
     *
     * @returns {Number} The X position of the mouse event relative to the left of the timeline, accounting for scroll, in px.
     */getRelativeTimelineXPosition(event){//getBoundingClientRect returns position of left side of element relative to page
//if element was scrolled its value might be below zero
//so the function in this case actually add offset returned from getBoundingClientRect().left to mouse position
const maxWidth=this.getTimelineWidth(),elementOffset=this.timelineContainerEl.getBoundingClientRect().left;return Math.min(Math.max(0,event.clientX-elementOffset),maxWidth)}/**
     * For the given Mouse event, find the point in time (in seconds) within the timeline where the mouse event occured
     * @param {MouseEvent} event - mouse event, the location of this event will be used to calculate the location to jump to
     */getLocationInTimeline(event){const percentInTimeline=this.getRelativeTimelineXPosition(event)/this.getTimelineWidth();// the max value for the video dragger is the max length of the video (in seconds)
return parseFloat(this.videoDraggerEl.max)/TIME_MULTIPLIER*percentInTimeline}/**
     * Applies a style to the slider, the part of the slider from the beginning value to the current value (lower limit) is highlighted
     * @param {HTMLElement} sliderEl - the slider (input[type=range]) element that changed value
     * @param {Number} completionPercentage - percentage of completion, value between 0 and 1
     */updateSliderProgress(sliderEl,completionPercentage){if(sliderEl){const sliderGradient=`linear-gradient(
        90deg,
        var(--ptc-video-controls-slider-track-lower-fill-color) ${100*completionPercentage}%,
        var(--ptc-video-controls-slider-track-upper-fill-color) ${100*completionPercentage}%
      )`;sliderEl.style.backgroundImage=sliderGradient}}onClickHandler(e){const videoQualityPopup=e.target.closest(".video-quality-popup");if(null===videoQualityPopup){e.stopPropagation();this._videoQualityPopupVisible=!1;document.body.removeEventListener("click",this._onClickHandler,!0);this.requestUpdate()}}toggleVideoQualityPopup(e){if(!this._videoQualityPopupVisible){document.body.addEventListener("click",this._onClickHandler,!0);this._videoQualityPopupVisible=!0}this.requestUpdate()}showCaptureProcessingCompletePopup(){this.addEventListener("scroll",this._showCaptureProcessingCompletePopup);const videoQualitySettingsGearIcon=this.querySelector(".video-quality"),boundingClientRect=videoQualitySettingsGearIcon.getBoundingClientRect();this.captureProcessingCompletePopup.style.top=boundingClientRect.bottom+17+"px";this.captureProcessingCompletePopup.style.left=boundingClientRect.left+(boundingClientRect.right-boundingClientRect.left)/2-260/2+"px";this._captureProcessingCompletePopupVisible=!0;this.requestUpdate()}hideCaptureProcessingCompletePopup(e){e.preventDefault();this.removeEventListener("scroll",this._showCaptureProcessingCompletePopup);this._captureProcessingCompletePopupVisible=!1;this.requestUpdate()}/**
     * @returns {Boolean}
     */isSdQualityAvailable(){// Need timing based on video durations for timing accuracy when showing the combined video
return this.captureData&&this.captureData.isSdQualityAvailable()}/**
     * @returns {Boolean}
     */isUsingCombinedVideo(){return this.videoQuality===VideoQuality.SD}videoQualitySelectionChanged(e){this.userSelectedVideoQuality=!0;this.preferredVideoQuality=e.currentTarget.getAttribute("value");this.presetTimeOnNextLoad=this.videoDraggerEl.value/TIME_MULTIPLIER;this.presetHeightOnNextLoad=this.getActiveVideo()?this.getActiveVideo().offsetHeight:void 0;this.stopClipPreviewInterval()}/**
     * Move the video current time to match the saved value from before the quality change.
     */onLoadeddata(event){super.onLoadeddata(event);this._loadedVideo=!0;if(this.presetTimeOnNextLoad&&0<this.presetTimeOnNextLoad){this.setVideoCurrentTime(this.presetTimeOnNextLoad)}this.presetTimeOnNextLoad=null;this.presetHeightOnNextLoad=null}}window.customElements.define("ptc-capture-viewer-player",CaptureViewerPlayer);var captureViewerPlayer={CaptureViewerPlayer:CaptureViewerPlayer};class PTCContextMenu extends LitElement{constructor(){super();setupTooltips(this);this.trigger="contextmenu";this._contextMenuHandler=this._handleContextMenu.bind(this);this._clickHandler=this._handleClick.bind(this);this._scrollHandler=this._handleScroll.bind(this);this._keydownHandler=this._handleKeydown.bind(this)}render(){this._menuId=this._menuId||this.parentClass+"-menu-"+Date.now();//calculate a few data points to let the css be optimized for the column layout
//The grid (3 column) layout would otherwise be too wide or not centered
let hasImages=!1,hasSelection=!1,hasSubmenuOrInfo=!1;this.options&&this.options.forEach(option=>{hasImages=hasImages||!!option.image;hasSelection=hasSelection||option.selected;hasSubmenuOrInfo=hasSubmenuOrInfo||"showSubMenu"===option.class||option.isDisabled&&option.isDisabled()});let parsedOptions=Array.isArray(this.options)?this.options:[this.options];const options=html`
      ${repeat(parsedOptions,(option={})=>{const isDisabled=option.isDisabled&&option.isDisabled(),tooltip=option.tooltip&&option.tooltip();return option instanceof TemplateResult?option:html`
              <div
                class="context-menu-content--option ${option.class||""} ${isDisabled?"disabled":""} option-action-${option.actionName}"
                @mouseover="${e=>this._handleMouseOver(e,option,isDisabled)}"
                @click="${e=>this._handleActionClick(option.actionName,option.data,isDisabled,e)}"
                data-tooltip=${tooltip||""}
                tooltip-position="right"
                tooltip-html
                tooltip-target-appended
              >
                <span class="option-image">${option.image}</span>
                <span class="menu-label">${option.label}</span>
                <span ?hidden="${!isDisabled}">${outlineInfoIcon}</span>
                <span ?hidden="${!option.selected}" class="selected icon">${selectListSelectedIcon}</span>
                <span ?hidden="${"showSubMenu"!==option.class||isDisabled}" class="icon">${navArrow}</span>
              </div>
            `})}
    `;return html`
      <style>
        :host {
          background-color: var(--ptc-context-menu-bg);
          box-shadow: var(--ptc-context-menu-shadow, 0px 0px 4px var(--ptc-black-transparent-40));
          color: var(--ptc-context-menu-text);
          min-width: 135px;
          display: block;
          visibility: hidden;
          position: fixed;
          z-index: 1;
          border-radius: 3px;
          z-index: 10;
        }
        :host([visible]) {
          visibility: visible;
        }
        .context-menu-content {
          display: flex;
          flex-direction: column;
          align-items: stretch;
          padding: 7px 0;
        }
        .context-menu-content--option {
          cursor: pointer;
          font-size: var(--ptc-font-size-small);
          letter-spacing: 0.05em;
          display: inline-grid;
          align-items: center;
          padding: 5px 10px;
          grid-template-columns: var(--ptc-context-menu-template-columns, 0 auto 0);
          align-content: space-around;
          justify-items: start;
        }
        .context-menu-content--option.disabled {
          color: var(--ptc-gray-3);
        }
        .context-menu-content--option.disabled:hover {
          background-color: var(--ptc-context-menu-bg);
          cursor: default;
        }
        .context-menu-content--option:hover {
          background-color: var(--ptc-context-menu-bg-hover);
        }
        .context-menu-content--option:not(.disabled):hover svg {
          fill: var(--ptc-context-menu-icon-hover);
        }
        .has-images .context-menu-content--option {
          grid-template-columns: var(--ptc-context-menu-template-columns, 30px auto 0);
        }
        .has-selection .context-menu-content--option {
          grid-template-columns: var(--ptc-context-menu-template-columns, 0 auto 30px);
        }
        .has-submenu-or-info .context-menu-content--option {
          grid-template-columns: var(--ptc-context-menu-template-columns, 0 auto 16px);
        }
        .has-selection.has-images .context-menu-content--option {
          grid-template-columns: var(--ptc-context-menu-template-columns, 30px auto 30px);
        }
        svg {
          height: 16px;
          width: 16px;
          fill: var(--ptc-context-menu-fill);
        }
        .icon svg {
          height: 24px;
          width: 24px;
        }
        .selected svg {
          fill: var(--ptc-context-menu-selected-color, var(--ptc-green));
        }
        .menu-label {
          padding: 2px 10px 2px 5px;
          white-space: nowrap;
        }
        .option-image,
        .icon:not([hidden]) {
          display: inline-flex;
        }
        .option-image {
          padding: 2px;
        }

        .menu-option-a-link-no-underline {
          text-decoration: none;
          color: var(--ptc-context-menu-text);
        }
      </style>
      <div
        class="context-menu-content ${hasImages?" has-images ":""} ${hasSelection?" has-selection":""} ${hasSubmenuOrInfo?" has-submenu-or-info":""}"
        id="${this._menuId}"
      >
        <slot name="header"></slot>
        ${options}
      </div>
    `}static get properties(){return{visible:{type:Boolean,value:!1,reflect:!0},parentClass:{type:String,value:null},parentMenuId:{type:String,value:null},/**
       * @param options {Array<Object or TemplateResult>}
       *   Allow for TemplateResult instances to allow custom html templates for the option.
       * @param option.label {String): the display text of the option
       * @param option.image {String): the image for option
       * @param option.class {String): custom css class
       * @param option.selected {Boolean): true to display a checkmark
       * @param option.actionName {String): event name to dispatch upon choosing the option
       * @param option.data {Object): Custom event data that will be passed along when the option is clicked to pass context information through
       */options:{type:Array},trigger:String,anchor:String,_menuId:{type:String,value:null},disabled:{type:Boolean}}}firstUpdated(){this._attachEvents()}disconnectedCallback(){super.disconnectedCallback();document.removeEventListener("mousedown",this._clickHandler,!0);document.removeEventListener("wheel",this._scrollHandler);document.removeEventListener(this.trigger,this._contextMenuHandler);document.removeEventListener("keydown",this._keydownHandler)}_attachEvents(){document.addEventListener("mousedown",this._clickHandler,!0);document.addEventListener("wheel",this._scrollHandler,{passive:!0});document.addEventListener("keydown",this._keydownHandler);document.addEventListener(this.trigger,this._contextMenuHandler)}/**
     * Hide context menu when a click occurs outside the menu
     * @param e
     * @private
     */_handleClick(e){if(this.visible&&clickOutsideOfMenu(e,this)){this.toggleVisibility()}}/**
     * Hide context menu when scroll
     * @param e
     * @private
     */_handleScroll(e){if(this.visible){this.toggleVisibility()}}/**
     * Checking if ctrl button wasn't hold.
     * @param e
     * @private
     */_handleContextMenu(e){if(this.disabled){return}// parent element is either the original context in which case it's class is passed using 'parentClass'
// or in case of a submenu it's the parent menu, in which case the parent menu's id is passed from the wrapper.
const el=this.parentClass?e.target.closest("."+this.parentClass):this.parentNode.querySelector("#"+this.parentMenuId),isSubmenu="submenu"===e.detail.type;if(el||isSubmenu){this._clickedMenuTargetElement=el;e.stopPropagation();this.visible=!1;if(!e.ctrlKey){this._showContextMenu(e,isSubmenu)}}}/**
     * Close context menu if ESC was pressed
     * @param e
     * @private
     */_handleKeydown(e){if(e.key===KEY.Escape&&this.visible){this.toggleVisibility()}}/**
     * Handle menu hover
     * @param e
     * @private
     */_handleMouseOver(e,option,isDisabled){if("showSubMenu"===option.class){// if the hovered on option has a submenu, treat hover the same as click
this._handleActionClick(option.actionName,option.data,isDisabled,e)}else{//otherwise hide all submenus
closeOpenMenus([this.id,this.parentMenuId])}}/**
     * @param action - the name of the action being clicked (internal id)
     * @param data - custom context information passed through to the event handler,
     */_handleActionClick(action,data,isDisabled,e){if(isDisabled){return}const detail=this._clickedMenuTargetElement?Object.assign({},this._clickedMenuTargetElement.dataset):{};//convert DOMStringMap to Object
if(data){detail.optionData=data}this.parentElement.dispatchEvent(new CustomEvent(action,{detail:{...detail,pos:e.currentTarget.getBoundingClientRect()//pass information to position submenu
}}));return this.toggleVisibility()}/**
     * Calculating place where context menu should be displayed based on click event coordinates, window element and
     * context element width and height properties.
     * @param e
     * @param isSubmenu
     * @private
     */_showContextMenu(e,isSubmenu){const menuEl=this.shadowRoot.getElementById(this._menuId);e.preventDefault();closeOpenMenus();this.visible=!0;const SUBMENU_POSITION_OFFSET=10;let clickX=isSubmenu?e.detail.pos.right-SUBMENU_POSITION_OFFSET:e.clientX||e.detail.clientX,clickY=isSubmenu?e.detail.pos.top:e.clientY||e.detail.clientY;// try to align submenu to top-right of parent menu option
if(this.anchor){const targetElemBoundingBox=e.target.parentElement.getBoundingClientRect();if(/right$/i.test(this.anchor)){// align to the right of the anchor element
clickX=targetElemBoundingBox.x+targetElemBoundingBox.width}else{// otherwise, align to the left of the anchor element
clickX=targetElemBoundingBox.x}if(/^bottom/i.test(this.anchor)){// align to the bottom of the anchor element
clickY=targetElemBoundingBox.y+targetElemBoundingBox.height}else{// otherwise, align to the top of the anchor element
clickY=targetElemBoundingBox.y}}// open at the cursor position
const screenW=window.innerWidth,screenH=window.innerHeight,menuWidth=menuEl.offsetWidth+2*menuEl.offsetLeft,menuHeight=menuEl.offsetHeight+2*menuEl.offsetTop,fitsRightOfClick=screenW-clickX>menuWidth,fitsBelowClick=screenH-clickY-15>menuHeight;if(fitsRightOfClick){// Menu extends to the right, so the left edge should be aligned with the click
this.style.left=`${clickX+5}px`}else{// place to the left
this.style.left=isSubmenu?`${clickX-menuWidth-e.detail.pos.width+SUBMENU_POSITION_OFFSET}px`:`${clickX-menuWidth+5}px`;// align submenu left of parent menu option
}if(fitsBelowClick){// Menu extends below, so the top edge should be aligned with the click
this.style.top=`${clickY+5}px`}else{// place above
this.style.top=isSubmenu?`${clickY-menuHeight+e.detail.pos.height}px`:`${clickY-menuHeight-5}px`;// align bottom of submenu with bottom of parent menu option
}}/**
     * Setting property which define if context menu is visible or not
     */toggleVisibility(){this.visible=!this.visible}}window.customElements.define("ptc-context-menu",PTCContextMenu);class PTCContextMenuWrapper extends LitElement{constructor(){super();this.eventNames=[]}createRenderRoot(){return this}render(){return html`
      ${this.renderMenu(this.options,this.trigger,this.id+"-main",this.parentClass,"")}
    `;// parentMenuId is not set for main menu
}static get properties(){return{options:{type:Array},trigger:{type:String},id:{type:String},parentClass:{type:String},disabled:{type:Boolean},header:{type:Object}}}disconnectedCallback(){super.disconnectedCallback();// remove all event listener that were added dynamically in 'renderMenu'
this.eventNames.forEach(eventName=>{this.removeEventListener(eventName,this.submenuHandler)})}/**
     * an API to update the options dataset
     * @param {Array} options new dataset
     */updateOptions(options){this.options=options;this.requestUpdate()}/**
     * catches <menuId>-triggered event and dispatches <menuId>-open event
     * @param {Event} e
     */_submenuHandler(e){document.dispatchEvent(new CustomEvent(e.detail.optionData.menuOpenEventName,{detail:{type:"submenu",pos:e.detail.pos}}))}/**
     * recursively creates context-menu templates to render according to options dataset
     * @param {Array} options recursive menu items data set
     * @param {String} trigger triggering event to display the menu, defults to native 'contextmenu'
     * @param {String} id
     * @param {String} parentClass class of the context element to which the menu relates. used only for main menu
     * @param {String} parentMenuId id of "parent" menu. used only for submenus, should be empty for main menu
     * @param {Array} templates accumulative array of all menus templates
     */renderMenu(options,trigger,id,parentClass,parentMenuId,templates=[]){options=options.map(option=>{if(option.options){const menuId=id+"-"+option.id+"-submenu",menuTriggeredEventName=menuId+"-triggered",menuOpenEventName=menuId+"-open";//recursive call with submenu properties
this.renderMenu(option.options,menuOpenEventName,menuId,"",id,templates);// if option has submenus change it's dataset so that it's action would trigger above submenuHandler
// and the trigger to that submenu (menuOpenEventName) is carried through to pass back to submenuHandler
// which in turn will dispath it and trigger the corresponding submenu.
const _option={...option,actionName:menuTriggeredEventName,data:{menuOpenEventName},class:"showSubMenu"};this.addEventListener(menuTriggeredEventName,this._submenuHandler);// listen to the action
this.eventNames.push(menuTriggeredEventName);return _option}return option});templates.push(html`
      <ptc-context-menu
        id="${id}"
        parentClass=${parentClass}
        parentMenuId=${parentMenuId}
        .options="${options}"
        trigger=${trigger||"contextmenu"}
        ?disabled=${this.disabled}
      >
        <div slot="header">
          ${this.header}
        </div>
      </ptc-context-menu>
    `);return templates}}window.customElements.define("ptc-context-menu-wrapper",PTCContextMenuWrapper);class PageViewElement extends LitElement{// Only render this page if it's actually visible.
shouldUpdate(){return this.active}static get properties(){return{active:{type:Boolean}}}}var pageViewElementHoc={PageViewElement:PageViewElement};const t=window.i18next.t.bind(window.i18next);class ExportProgressBar extends connect(store)(LitElement){constructor(){super();this.labels={exporting:t("export-progress-bar.exporting"),download:t("export-progress-bar.download")};this.hide()}/** adds a progress bar to the dom if there is not one already */static async init(){if(!document.querySelector("ptc-export-progress-bar")){ExportProgressBar.singleton=new ExportProgressBar;document.querySelector("ptc-app").appendChild(ExportProgressBar.singleton)}}createRenderRoot(){return this}disconnectedCallback(){super.disconnectedCallback()}static get properties(){return{exportData:{type:Object}}}render(){if(!this.exportData){return html``}return html`
      <div class="content">
        <div class="exporting-icon">${exportingIcon}</div>
        <label>${this.exportData.fileName||""}</label>
        <div class="upload-progress-bar__cancel-button" @click="${e=>this.cancelClicked(e)}">${closeIcon}</div>
        <div class="right-label" ?hidden="${this.exportData.complete}">
          <div class="spinner-icon -spinning-animation">${spinnerCircle}</div>
          ${this.labels.exporting}
        </div>
        <div class="right-label" ?hidden="${!this.exportData.complete}">
          <a class="action-text -underline" @click="${e=>this.downloadClicked(e)}">${this.labels.download}</a>
        </div>
      </div>

      <style>
        ptc-export-progress-bar {
          color: black;
          width: 100vw;
          height: 30px;
          top: 95vh;
          position: fixed;
        }

        ptc-export-progress-bar .content {
          border: 1px solid var(--ptc-gray-5);
          border-radius: 3px;
          background: var(--ptc-gray-1);
          margin: 0 auto;
          position: relative;
          left: 0;
          top: 0;
          width: 587px;
          height: 100%;
          display: flex;
          align-items: center;
          box-shadow: inset 0px 1px 4px rgba(0, 0, 0, 0.1);
        }

        ptc-export-progress-bar label {
          font-size: 12px;
          color: var(--ptc-black);
          font-weight: normal;
        }

        ptc-export-progress-bar .right-label {
          position: absolute;
          right: 28px;
          font-size: 12px;
          color: var(--ptc-black);
          display: flex;
          pointer-events: auto;
        }

        .upload-progress-bar__cancel-button {
          pointer-events: auto;
        }

        ptc-export-progress-bar .exporting-icon {
          width: 24px;
          height: 16px;
          fill: var(--ptc-green);
          margin: 5px;
        }

        ptc-export-progress-bar .spinner-icon {
          width: 15px;
          height: 15px;
          display: inline-block;
          stroke: var(--ptc-green);
          stroke-width: 3;
          margin-right: 6px;
        }
      </style>
    `}stateChanged(state){if(state.procedures.exportsInProgress!==this.exportsInProgress){this.exportsInProgress=state.procedures.exportsInProgress;const exportedProcedures=Object.values(this.exportsInProgress);if(0===exportedProcedures.length){this.exportData=null;this.hide();return html``}else if(1<exportedProcedures.length){console.warn("Procedure export-progress-bar cannot handle more than one export at a time.")}this.show();this.exportData=exportedProcedures[0]}}cancelClicked(){store.dispatch({type:EXPORT_PROCEDURE_CANCEL,procedureId:this.exportData.procedureId});this.hide()}downloadClicked(){const url=URL.createObjectURL(this.exportData.blob),link=document.createElement("a");link.href=url;link.setAttribute("download",this.exportData.fileName);document.body.appendChild(link);link.click();link.remove();URL.revokeObjectURL(url)}hide(){this.classList.add("hidden")}show(){this.classList.remove("hidden")}}window.customElements.define("ptc-export-progress-bar",ExportProgressBar);var exportProgressBar={ExportProgressBar:ExportProgressBar};class PTCExportFormat extends connect(store)(LitElement){createRenderRoot(){return this}connectedCallback(){super.connectedCallback();ExportProgressBar.init()}render(){const format=this.getFormatDefinition();return html`
      <div class="format-container">
        <div class="format ${format.type}">
          <div class="format__image" ?disabled="${this.disabled}">
            ${format.icon}
          </div>
        </div>
        <div class="share-action">
          <div class="icon -medium">${downloadIcon}</div>
          <span
            class="action-text -underline"
            @click="${()=>this.export()}"
            ?disabled="${this.exporting||this.disabled}"
          >
            ${format.exportAction}
          </span>
        </div>
      </div>
    `}static get properties(){return{procedureId:String,url:String,procedureTitle:String,exporting:Boolean,disabled:Boolean}}stateChanged(state){if(this.exportsInProgress!==state.procedures.exportsInProgress){this.exportsInProgress=state.procedures.exportsInProgress;const exports=Object.values(state.procedures.exportsInProgress||{});this.exporting=0<exports.length&&exports.find(exp=>!exp.complete)}}/**
     * Performs the action of exporting the procedure to the selected format
     */export(){throw new Error("Not implemented")}/**
     * Gets parameters that will be used to customize the component.
     */getFormatDefinition(){throw new Error("Not implemented")}}var exportFormat={PTCExportFormat:PTCExportFormat};class PTCExportDocx extends PTCExportFormat{/**
   * Exports the procedure to a Word Doc, the document will be downloaded once the document is generated
   */export(){if(this.exporting||this.disabled){return}let publishedUrl=this.url;if("/"===publishedUrl[publishedUrl.length-1]){publishedUrl=publishedUrl.substring(0,publishedUrl.length-1)}store.dispatch({type:EXPORT_PROCEDURE,url:publishedUrl,procedureId:this.procedureId,fileName:this.procedureTitle+".docx"})}/**
     * Gets parameters that will be used to customize the component.
     */getFormatDefinition(){return{label:window.i18next.t("export.word-doc"),exportAction:window.i18next.t("export.export-action"),extension:".docx",icon:exportFormatIcon,type:"DOCX"}}}window.customElements.define("ptc-export-docx",PTCExportDocx);var exportDocx={PTCExportDocx:PTCExportDocx};class PTCProcedureInfoTile extends LitElement{constructor(){super();const t=window.i18next.t.bind(window.i18next);this.labels={createdBy:t("info-popup.created-by-title"),modifiedBy:t("info-popup.last-modified-by-title"),publishedBy:t("info-popup.last-published-by-title"),notPublished:t("info-popup.not-published")};this.displayed=!1}createRenderRoot(){return this}static get properties(){return{procedureId:{type:String},procedure:{type:Object},displayed:{type:Boolean}}}render(){if(this.procedure&&this.procedure.properties){const createTile=this.getTile(this.labels.createdBy,this.procedure.properties.createdby,this.procedure.properties.createdon),modifiedTile=this.getTile(this.labels.modifiedBy,this.procedure.properties.modifiedby,this.procedure.properties.modifiedon),publishTile=this.isPublished()?this.getTile(this.labels.publishedBy,this.getPublishedUser(),this.getPublishDate()):this.getTileNoUser(this.labels.publishedBy,this.labels.notPublished);return html`
        ${createTile} ${modifiedTile} ${publishTile}
      `}else{return html``}}getTile(title,user="",date=""){return html`
      <ptc-info-tile tileTitle="${title}" user="${user}" date="${date}"></ptc-info-tile>
    `}/**
     * Gets a info tile without user/date info, for the non-published case
     */getTileNoUser(title,text){return html`
      <ptc-info-tile tileTitle="${title}" text="${text}"></ptc-info-tile>
    `}async updated(props){if(this.procedureId&&(props.has("procedureId")||props.has("displayed")&&this.displayed)){this.procedure=await this.getProcedure();getUserAndCache(this.procedure.properties.createdby);getUserAndCache(this.procedure.properties.modifiedby);if(this.isPublished(this.procedure)){getUserAndCache(getPublishInfoFromMetadata(this.procedure).createdby)}}}getPublishedUser(){if(this.isPublished(this.procedure)){return getPublishInfoFromMetadata(this.procedure).createdby}return""}getPublishDate(){return getLastPublishedProcedureDate(this.procedure)}isPublished(){return isPublished(getPublishInfoFromMetadata(this.procedure))}/**
     * Gets the procedure given by the id attribute, trying the cached state.procedureList first
     */async getProcedure(){let procedure;const state=store.getState();if(this.procedureId){if(state.procedureList){procedure=state.procedureList.find(item=>item.id===this.procedureId)}if(!procedure){procedure=await getProcedure(this.procedureId)}}else{procedure={properties:{}}}return procedure}}window.customElements.define("ptc-procedure-info-tile",PTCProcedureInfoTile);class PTCPublishUrl extends connect(store)(LitElement){constructor(){super();const t=window.i18next.t.bind(window.i18next);this.labels={copy_experience_action:t("share.copy-experience-action"),copy_webview_action:t("share.copy-webview-action")}}createRenderRoot(){return this}render(){const icon=images[this.icon],label="desktopIcon"===this.icon?this.labels.copy_webview_action:this.labels.copy_experience_action;return html`
      <div class="published-url">
        <div
          class="img"
          ?disabled="${this.disabled}"
          @click="${()=>this.copyToClipboard(".experience-url-for-copy")}"
        >
          ${icon}
        </div>
        <div class="share-action">
          <div class="icon -medium">${linkIcon}</div>
          <span
            class="action-text -underline -small"
            @click="${()=>this.copyToClipboard(".experience-url-for-copy")}"
            ?disabled="${this.disabled}"
          >
            ${label}
          </span>
        </div>
      </div>
      <div><input class="offscreen experience-url-for-copy" value="${this.url}" /></div>
    `}static get properties(){return{url:String,icon:String,disabled:Boolean}}copyToClipboard(selector){if(this.disabled){return}const el=this.querySelector(selector);try{el.select();if(document.execCommand("copy")){store.dispatch(showBannerMessage(window.i18next.t("share.copy-succeeded"),BANNER_MESSAGE_TYPE.SUCCESS))}else{throw new Error("copy command is unsupported or disabled")}el.setSelectionRange(0,0);// unselect text
}catch(e){console.error("Could not copy to system clipboard",e);store.dispatch(showBannerMessage(window.i18next.t("share.copy-failed"),BANNER_MESSAGE_TYPE.ERROR))}}}window.customElements.define("ptc-publish-url",PTCPublishUrl);var publishUrl={PTCPublishUrl:PTCPublishUrl};class Banner extends connect(store)(LitElement){createRenderRoot(){return this}constructor(){super();this.openHelpCenter=this.openHelpCenter.bind(this);this.openAdminCenter=this.openAdminCenter.bind(this);this.signOut=this.signOut.bind(this);this.initializeLabels();//If the i18next loads labels after this is constructed, grab the new values
window.i18next.on("loaded",this.updateLabels.bind(this))}initializeLabels(){const t=window.i18next.t.bind(window.i18next);this.labels={signOut:t("sign-out"),openPublishedProcedures:t("open-published-procedures"),helpCenter:t("help-center"),adminCenter:t("admin-center"),aboutEditor:t("about-editor"),unsupportedBrowser:{header:t("unsupported-browser.header"),unsupportedMsg:t("unsupported-browser.unsupported-msg"),instructionMsg:t("unsupported-browser.instruction-msg")}}}/**
     * Update the labels from i18next and redisplay.  Could eventually listen for language change as well.
     */updateLabels(){this.initializeLabels();this.requestUpdate()}render(){let icon,iconTemplate="";const{message,type}=this.bannerMessage||{};if(type===BANNER_MESSAGE_TYPE.ERROR){icon=failIcon}else if(type===BANNER_MESSAGE_TYPE.SUCCESS){icon=successIcon}if(icon){iconTemplate=html`
        <span class="icon -small -left">${icon}</span>
      `}const{avatarInitials,avatarStyle}=getUserAvatar(this.userInfo);let result=html`
      <div class="banner l-banner">
        <span class="">
          <a href="${ROUTE.editor}" @click="${()=>store.dispatch(tabNavigation(TABS.CREATED_BY_ME,"/"))}">
            <img class="banner__logo" src="src/assets/images/logo.svg" />
          </a>
        </span>
        <span class="banner__message l-banner__grow -${type}">
          ${iconTemplate}
          <span>${message}</span>
        </span>
        <div class="banner__menu-button flex-center">
          <div class="banner__menu__user-info__avatar inline-flex-center" style="${avatarStyle}">${avatarInitials}</div>
        </div>
      </div>
    `;if(!this.isBrowserSupported()){result=html`
        ${result}
        <div class="unsupported-browser-warn-overlay">
          <div class="unsupported-browser-warn-msg">
            <div>${vuforiaLogo}</div>
            <div class="title-font-h6">${this.labels.unsupportedBrowser.header}</div>
            <div>${this.labels.unsupportedBrowser.unsupportedMsg}</div>
            <div>${this.labels.unsupportedBrowser.instructionMsg}</div>
            <div>
              <a href="https://www.google.com/chrome/browser/">
                <img src="images/chromeLogo.png" />
              </a>
              <div class="browser-link-label">Google Chrome</div>
            </div>
          </div>
        </div>
      `}return html`
      ${result}
      <ptc-context-menu-wrapper
        id="banner-menu"
        class="menu__light banner-menu"
        parentClass="banner__menu-button"
        trigger="click"
        anchor="bottom-right"
        .options="${this._getBannerMenuOptions()}"
        .header="${this.renderContextMenuHeader()}"
      ></ptc-context-menu-wrapper>
    `}renderContextMenuHeader(){const{email}=this.userInfo,fullName=getUserFullName(this.userInfo),{avatarInitials,avatarStyle}=getUserAvatar(this.userInfo),roleNames=AuthUtils.getUserRoles(!0);return html`
      <div class="banner__menu__user-info flex-center">
        <div class="banner__menu__user-info__avatar inline-flex-center" style="${avatarStyle}">${avatarInitials}</div>
        <div class="banner__menu__user-info__details">
          ${fullName&&html`
              <div class="banner__menu__user-info__details__full-name">${fullName}</div>
            `}
          ${email&&html`
              <div class="banner__menu__user-info__details__email">${email}</div>
            `}
          <div class="banner__menu__user-info__details__roles">${roleNames.join(" ")}</div>
        </div>
      </div>
    `}firstUpdated(){this._bannerMenuElement=this.querySelector("#banner-menu");this._attachEvents()}_attachEvents(){this._bannerMenuElement.addEventListener("openHelpCenter",this.openHelpCenter);this._bannerMenuElement.addEventListener("openAdminCenter",this.openAdminCenter);this._bannerMenuElement.addEventListener("openPublishedProcedures",this.openPublishedProcedures);this._bannerMenuElement.addEventListener("signOut",this.signOut)}disconnectedCallback(){super.disconnectedCallback();if(this._bannerMenuElement){this._bannerMenuElement.removeEventListener("openHelpCenter",this.openHelpCenter);this._bannerMenuElement.removeEventListener("openAdminCenter",this.openAdminCenter);this._bannerMenuElement.removeEventListener("openPublishedProcedures",this.openPublishedProcedures);this._bannerMenuElement.removeEventListener("signOut",this.signOut)}}/**
     * @return {Boolean} True if browser is supported, based on the user agent string.
     *
     * Only considers Chrome supported.
     */isBrowserSupported(){const userAgent=navigator.userAgent.toLowerCase();if(!this.disableBrowserWarning&&(0>userAgent.indexOf("chrome")||0<userAgent.indexOf("edge/"))){return!1}return!0}_getBannerMenuOptions(){let options=[];if(AuthUtils.canAccessPublishedProceduresPage(this.organization?this.organization.roles:[])){options.push({label:html`
          <a class="menu-option-a-link-no-underline" href=${ROUTE.proceduresPublished}>
            ${this.labels.openPublishedProcedures}
          </a>
        `,actionName:"openPublishedProcedures",class:"caption-font"})}options.push({label:this.labels.signOut,actionName:"signOut",class:"caption-font"});options.push({label:this.labels.helpCenter,actionName:"openHelpCenter",class:"caption-font"});if(AuthUtils.canAccess(["ADMINISTRATOR"],this.organization?this.organization.roles:[])){options.push({label:this.labels.adminCenter,actionName:"openAdminCenter",class:"caption-font"})}return options}static get properties(){return{username:{type:String},bannerMessage:{type:Object},userInfo:{type:Object},organization:{type:Object}}}openHelpCenter(){let url=window.getHelpCenterURL();window.open(url,"_blank")}openAdminCenter(){let url=baseURL+"/admin/";window.open(url,"_blank")}openPublishedProcedures(){if(!location.href.endsWith(ROUTE.proceduresPublished)){location.href=ROUTE.proceduresPublished}}signOut(){store.dispatch(logout())}stateChanged(state){const app=state.app||{};this.username=app.username;this.userInfo=app.userInfo||{};this.organization=app.organization;// If message changed, start timer to clear the message after a delay
if(app.bannerMessage&&this.bannerMessage!==app.bannerMessage){this.clearMessageOnTimer()}this.bannerMessage=app.bannerMessage;this.disableBrowserWarning=selectFeatureToggle(toggleKeys.disableBrowserWarning,state)}clearMessageOnTimer(){// Cancel any previous running timer
clearTimeout(this.messageTimerId);this.messageTimerId=setTimeout(function(){store.dispatch({type:CLEAR_BANNER_MESSAGE})},4e3)}}window.customElements.define("ptc-banner",Banner);const ACTION_EVENTS=["createProcedure","importCapture","importVideo","importImage","importModel"],routesWithoutNav=[ROUTE.proceduresPublished];class PtcApp extends connect(store)(PageViewElement){createRenderRoot(){return this}renderNavigationBar(){return html`
      <div
        class="left-nav-bar -subtle ${this.navExpanded?"nav-expanded":"nav-collapsed"} ${this.navMasked?"disable-mask":""}"
      >
        <div class="nav-bar-item nav-bar-item-button">
          <span class="nav-bar-icon nav-bar-icon-button nav-item-expanded--hidden nav-item-create-button">
            <button class="button" @click="${()=>this.showCreateMenu()}">
              <div
                id="create-procedure-btn-small"
                class="nav-bar-button create-button"
                ?hidden="${this.navExpanded}"
                data-tooltip="${this.labels.create}"
                tooltip-position="right"
              >
                <div class="img-text-btn__shape img-text-btn__shape__14 -x-small">${createIcon}</div>
              </div>
            </button>
          </span>
          <span class="nav-bar-item-text nav-bar-item-button nav-item-collapsed--hidden nav-item-create-button">
            <button class="button" @click="${()=>this.showCreateMenu()}">
              <div id="create-procedure-btn" class="nav-bar-button create-button" ?hidden="${!this.navExpanded}">
                <div class="img-text-btn__shape img-text-btn__shape__14 -x-small">${createIcon}</div>
              </div>
              <span class="button-text  nav-item-collapsed--hidden  nav-item-collapsed--hidden">
                ${this.labels.create}
              </span>
            </button>
          </span>
        </div>

        <div class="nav-bar-item">
          <span class="nav-bar-item-text nav-bar-item-text--category nav-item-collapsed--hidden">
            ${this.labels.procedures}
          </span>
        </div>

        <div
          class="nav-bar-item secondary-nav-bar-item ${this.selectedTab===TABS.CREATED_BY_ME?"selected":""}"
          @click="${()=>this.tabNavigation(TABS.CREATED_BY_ME,"/",null,"my_procedures")}"
          id="created-by-me-tab"
        >
          <span
            class="nav-bar-icon"
            data-tooltip="${this.navExpanded?"":this.labels.createdByMe}"
            tooltip-position="right"
          >
            ${proceduresCreatedByMeIcon}
          </span>
          <span class="nav-bar-item-text tab-secondary-option  nav-item-collapsed--hidden">
            ${this.labels.createdByMe}
          </span>
        </div>

        <div
          class="nav-bar-item secondary-nav-bar-item ${this.selectedTab===TABS.SHARED_WITH_ME?"selected":""}"
          @click="${()=>this.tabNavigation(TABS.SHARED_WITH_ME,"/",null,"org_procedures")}"
          id="shared-with-me-tab"
        >
          <span
            class="nav-bar-icon"
            data-tooltip="${this.navExpanded?"":this.labels.sharedWithMe}"
            tooltip-position="right"
          >
            ${proceduresSharedWithMeIcon}
          </span>
          <span class="nav-bar-item-text tab-secondary-option  nav-item-collapsed--hidden">
            ${this.labels.sharedWithMe}
          </span>
        </div>

        <div class="nav-bar-item" id="all-assets-tab">
          <span class="nav-bar-item-text nav-item-collapsed--hidden nav-bar-item-text--category">
            ${this.labels.assets}
          </span>
        </div>

        <div
          class="nav-bar-item secondary-nav-bar-item ${this.selectedTab===TABS.CAPTURES?"selected":""}"
          @click="${()=>this.tabNavigation(TABS.CAPTURES,"",ASSET_LIST_TYPE.CAPTURES)}"
          id="captures-tab"
        >
          <span
            class="nav-bar-icon nav-bar-asset-icon"
            data-tooltip="${this.navExpanded?"":this.labels.captures}"
            tooltip-position="right"
          >
            ${captureIcon}
          </span>
          <span class="nav-bar-item-text tab-secondary-option  nav-item-collapsed--hidden">
            ${this.labels.captures}
          </span>
        </div>

        <div
          class="nav-bar-item secondary-nav-bar-item ${this.selectedTab===TABS.IMAGES?"selected":""}"
          @click="${()=>this.tabNavigation(TABS.IMAGES,"",ASSET_LIST_TYPE.IMAGES)}"
          id="images-tab"
        >
          <span
            class="nav-bar-icon nav-bar-asset-icon"
            data-tooltip="${this.navExpanded?"":this.labels.images}"
            tooltip-position="right"
          >
            ${imageIcon}
          </span>
          <span class="nav-bar-item-text tab-secondary-option  nav-item-collapsed--hidden">
            ${this.labels.images}
          </span>
        </div>

        <div
          class="nav-bar-item secondary-nav-bar-item ${this.selectedTab===TABS.VIDEOS?"selected":""}"
          @click="${()=>this.tabNavigation(TABS.VIDEOS,"",ASSET_LIST_TYPE.VIDEOS)}"
          id="videos-tab"
        >
          <span
            class="nav-bar-icon nav-bar-asset-icon"
            data-tooltip="${this.navExpanded?"":this.labels.videos}"
            tooltip-position="right"
          >
            ${videoIcon}
          </span>
          <span class="nav-bar-item-text tab-secondary-option  nav-item-collapsed--hidden">
            ${this.labels.videos}
          </span>
        </div>

        <div
          class="nav-bar-item secondary-nav-bar-item ${this.selectedTab===TABS.CAD_MODELS?"selected":""}"
          @click="${()=>this.tabNavigation(TABS.CAD_MODELS,"",ASSET_LIST_TYPE.THREED)}"
          id="models-tab"
          ?hidden="${!this.enable3d}"
        >
          <span
            class="nav-bar-icon nav-bar-asset-icon"
            data-tooltip="${this.navExpanded?"":this.labels.threed}"
            tooltip-position="right"
          >
            ${modelIcon}
          </span>
          <span class="nav-bar-item-text tab-secondary-option  nav-item-collapsed--hidden">
            ${this.labels.threed}
          </span>
        </div>

        <div class="nav-bar-item nav-bar-fill">
          <span class="nav-bar-icon nav-bar-icon-placeholder"></span>
          <span class="nav-bar-item-text  nav-item-collapsed--hidden"></span>
        </div>

        <div class="nav-bar-item nav-bar-bottom-item nav-bar-help icon -medium icon--white">
          <span class="nav-bar-icon">
            <a
              href="${window.getHelpCenterURL()}"
              target="_blank"
              data-tooltip="${this.labels.helpCenter}"
              tooltip-position="right"
            >
              ${helpCenterIcon}
            </a>
          </span>
        </div>
      </div>
      <div class="nav-bar-border-container nav-bar-button" @click="${()=>this.toggleNav()}">
        <div
          class="nav-expand-collapse-tool img-text-btn__shape img-text-btn__shape__14 -small"
          data-tooltip="${this.navExpanded?this.labels.collapse:this.labels.expand}"
          tooltip-position="right"
        >
          ${expandCollapseIcon}
        </div>
      </div>
    `}render(){if(!this.hasUserLoggedIn){return html``}if(this.userHasAccess&&this._page===ROUTE.preview){return html`
        <ptc-procedure-preview
          .standalone="${!0}"
          .expandable="${!1}"
          .startExpanded="${!0}"
          .closeable="${!1}"
        ></ptc-procedure-preview>
      `}if(this.userHasViewAccess&&this._page===ROUTE.webview){return html`
        <ptc-procedure-preview
          .webview=${!0}
          .standalone="${!0}"
          .expandable="${!1}"
          .startExpanded="${!0}"
          .closeable="${!1}"
        ></ptc-procedure-preview>
      `}// Viewer user going to webview, but hasn't fully been routed yet
// Trim leading slash and any potential trailing slash from pathname
else if(this.userHasViewAccess&&window.location.pathname.replace(/\/$/,"")===ROUTE.webview){return html``}let accessDeniedMsg="";const showAccessDenied=!this.userHasAccess||!this.userHasManagerOrAdminAccess&&this._page===ROUTE.proceduresPublished;if(showAccessDenied){import("./access-denied.js").then(bundle=>bundle&&bundle.$accessDenied||{});if(!this.userHasManagerOrAdminAccess&&this._page===ROUTE.proceduresPublished){accessDeniedMsg=window.i18next.t("access-denied-manager-admin-only-page.message")}}return html`
      <ptc-banner></ptc-banner>
      <section class="main">
        ${this.userHasAccess&&!routesWithoutNav.includes(this._page)?this.renderNavigationBar():""}

        <ptc-procedure-editor
          class="page"
          ?active="${this.userHasAccess&&this._page===ROUTE.editor}"
        ></ptc-procedure-editor>
        <ptc-not-found class="page" ?active="${this.userHasAccess&&this._page===ROUTE.view404}"></ptc-not-found>
        <ptc-access-denied
          class="page"
          ?active="${showAccessDenied}"
          errorMessage="${accessDeniedMsg}"
        ></ptc-access-denied>
        <ptc-procedures-published
          class="page"
          ?active="${!showAccessDenied&&this._page===ROUTE.proceduresPublished}"
        ></ptc-procedures-published>
        <ptc-procedure-create></ptc-procedure-create>

        <ptc-context-menu-wrapper
          id="create-menu"
          class="menu__light menu__light-dark-text"
          parentClass="nav-item-create-button"
          .options="${this.getCreateActions()}"
          trigger="click"
        ></ptc-context-menu-wrapper>

        <ptc-drop-target
          id="ptc-app-create-target"
          @change="${e=>addAssetsFromEvent(e,this.assetType)}"
          .multiple="${!1}"
          hidden
          .accept="${SUPPORTED_FILE_TYPES[this.assetType]}"
        ></ptc-drop-target>

        <ptc-dialog
          id="invalid-organization-warning"
          hidden
          close-on-complete="true"
          dialogTitle="${this.labels.invalidOrganizationDialogTitle}"
          action-label="${this.labels.invalidOrganizationDialogConfirm}"
          notification-dialog="warning-with-cancel"
        >
          ${this.labels.invalidOrganizationDialogDetails}
        </ptc-dialog>
      </section>
    `}static get properties(){return{appTitle:{type:String},active:{type:Boolean},userHasAccess:{type:Boolean},hasUserLoggedIn:{type:Boolean},selectedTab:{type:String},_page:{type:String},_offline:{type:Boolean},enable3d:{type:Boolean},navExpanded:{type:Boolean,default:!0},navMasked:{type:Boolean}}}constructor(){super();this.active=window.i18nextLoaded;this.labels={};this.loadLabels();document.body.addEventListener("i18nextLoaded",()=>{this.active=!0;this.loadLabels()})}loadLabels(){const t=window.i18next.t.bind(window.i18next);this.labels={procedures:t("procedures"),assets:t("tabs.assets"),createdByMe:t("tabs.created-by-me"),sharedWithMe:t("tabs.shared-with-me"),captures:t("tabs.captures"),images:t("tabs.images"),videos:t("tabs.videos"),threed:t("tabs.threed"),create:t("create-button"),expand:t("tabs.tooltips.expand"),collapse:t("tabs.tooltips.collapse"),helpCenter:t("help-center"),importAssets:t("import-assets"),newProcedure:t("new-procedure"),invalidOrganizationDialogTitle:t("locationWarning.location-invalid-title"),invalidOrganizationDialogDetails:t("locationWarning.location-invalid-details"),invalidOrganizationDialogConfirm:t("locationWarning.location-invalid-confirm-label")}}firstUpdated(){store.dispatch({type:GET_USERNAME});installOfflineWatcher(offline=>store.dispatch(updateOfflineThunk(offline)));ACTION_EVENTS.forEach(action=>{this[action]=this[action].bind(this)})}connectedCallback(){super.connectedCallback();document.addEventListener("keydown",this.keydownHandler)}disconnectedCallback(){super.disconnectedCallback();document.removeEventListener("keydown",this.keydownHandler);if(this._tileMenuElement){ACTION_EVENTS.forEach(action=>{this._tileMenuElement.removeEventListener(action,this[action])})}}keydownHandler(e){// Handle Ctrl+S and Cmd+S
if("s"===e.key&&(e.ctrlKey||e.metaKey)){e.preventDefault();store.dispatch(showBannerMessage(window.i18next.t("auto-save-reminder"),BANNER_MESSAGE_TYPE.NOTIFICATION))}}updated(changedProps){if(changedProps.has("_page")){const pageTitle=this.appTitle;updateMetadata({title:pageTitle,description:pageTitle// This object also takes an image property, that points to an img src.
})}}stateChanged(state){this._page=state.app.route;this._offline=state.app.offline;const org=state.app.organization;this.hasUserLoggedIn=!!state.app.username;this.userHasAccess=!!(org&&org.roles&&AuthUtils.canAccess(EDITOR_ROLES,org.roles));this.userHasViewAccess=!!(org&&org.roles&&AuthUtils.canAccess(VIEW_ROLES,org.roles));this.userHasManagerOrAdminAccess=!!(org&&org.roles&&AuthUtils.canAccess(["ADMINISTRATOR","MANAGER"],org.roles));this.selectedTab=state.app.selectedTab;this.navExpanded=state.app.navExpanded;this.navMasked=state.app.navMasked;this.enableExperimentalFeatures=selectFeatureToggle(toggleKeys.enableExperimentalFeatures,state);this.enable3d=selectFeatureToggle(toggleKeys.threedwi,state)&&state.entitlements[ENTITLEMENT_KEYS.THREE_D_WORK_INSTRUCTIONS]}tabNavigation(tabName,pathname,assetType,procedurefilter){if(this._page!==ROUTE.editor&&!pathname){pathname="/"}store.dispatch(tabNavigation(tabName,pathname,assetType,procedurefilter))}toggleNav(){store.dispatch(toggleNavExpansion())}/**
     * Gets and initializes the menu element with action listeners
     */_getCreateMenuEl(){if(!this._tileMenuElement){this._tileMenuElement=this.querySelector("#create-menu");ACTION_EVENTS.forEach(action=>{this._tileMenuElement.addEventListener(action,this[action])})}return this._tileMenuElement}/**
     * Opens the create actions menu
     */showCreateMenu(){this._getCreateMenuEl().updateOptions(this.getCreateActions())}/**
     * the create/import navbar menu options
     * @returns [Array{Object}] actions menu
     */getCreateActions(){const options=[{label:this.labels.newProcedure,actionName:"createProcedure",image:procedurePreviewDialogIcon,class:"createProcedure"},{label:this.labels.importAssets,id:"import-assets",image:importMenuIcon,class:"showSubMenu",options:[{label:this.labels.captures,actionName:"importCapture",image:captureIcon,class:"importCapture"},{label:this.labels.images,image:imageIcon,actionName:"importImage",class:"importImage"},{label:this.labels.videos,image:videoIcon,actionName:"importVideo",class:"importVideo"}]}];//Only get models asset if the entitlement is enabled.
if(this.enable3d){options[1].options.push({label:this.labels.threed,image:modelIcon,actionName:"importModel",class:"importModel"})}return options}/**
     * Shows the create modal dialog
     */async createProcedure(){await import("./procedure-create.js").then(bundle=>bundle&&bundle.$procedureCreate||{});this.querySelector("ptc-procedure-create").showModal()}/**
     * Shows the appropriated file browser dialog based on the asset type's file formats
     */async importAsset(type){this.assetType=type;await this.requestUpdate();this.querySelector("#ptc-app-create-target").browse()}/**
     * import actions callbacks, will launch file open dialog with correct asset file extension filter
     */importCapture(){return this.importAsset(ASSET_LIST_TYPE.CAPTURES)}importImage(){return this.importAsset(ASSET_LIST_TYPE.IMAGES)}importVideo(){return this.importAsset(ASSET_LIST_TYPE.VIDEOS)}importModel(){return this.importAsset(ASSET_LIST_TYPE.THREED)}}window.customElements.define("ptc-app",PtcApp);class PTCSelectList extends LitElement{/**
   * Renders a menu item content, as opposed to the whole menu item which may include submenus, adding a sub menu open/close icon if needed
   * @param {Object} item - menu item to render
   */renderMenuItemContents(item){let subMenuEl="";if("submenu"===item.type){subMenuEl=html`
        <div class="menu-icon">${downMenuArrow}</div>
      `}return html`
      ${this._getItemImageTemplate(item.image)}
      <div class="label">${item.label||""}</div>
      ${subMenuEl}
    `}/**
     * Renders the selected menu option with a selected icon
     */renderSelectedItemContents(item){return html`
      ${this._getItemImageTemplate(item.image)}
      <div class="label">${item.label||""}</div>
      <div class="icon">${selectListSelectedIcon}</div>
    `}/**
     * Gets the template for the display item of the menu shown at the top when the menu is collapsed
     * @param {Object} item
     */renderCurrentSelection(item){if(this._shouldDisplayImageOnly()){const image=this.displaySelectedImageOnly||item.image;return this._getItemImageTemplate(image,"-large")}return html`
      <div class="image">${item.image||""}</div>
      <div class="label">${item.selectedLabel||item.label||""}</div>
    `}/**
     * @param {Object} image the menu item image
     * @param {String} [className=''] additional class to be added to the image container
     * @returns {String} the SVG image assigned to the menu item
     */_getItemImageTemplate(image,className=""){return html`
      ${image?html`
            <span class="image ${className}">${image}</span>
          `:html``}
    `}/**
     * @returns the selected menu option, looking recursively through the options and sub menus
     */findSelectedOption(options){for(let option of options){if(option.value===this.value){return option}if("submenu"===option.type){let subOption=this.findSelectedOption(option.menuItems);if(subOption){return subOption}}}}/**
     * Renders a menu item, including its sub menu if approapriate, recursively
     * @param {Object} option - menu item to render
     * @param {Number} indent - The amount to indent, the equivalent to the number of open parent menus.
     */renderMenuItem(option,indent=0){let subMenuCls="";if("submenu"===option.type){subMenuCls="submenu submenu"+(option.open?"-open":"-closed")}let renderFunction=option===this.selectedItem?this.renderSelectedItemContents:this.renderMenuItemContents,templates=[];templates.push(html`
      <div
        class="menu-item menu-indent-${indent} ${option.class||""} ${subMenuCls}"
        @click="${e=>{this.handleMenuItemClick(option,e)}}"
      >
        ${renderFunction.call(this,option)}
      </div>
    `);if("submenu"===option.type&&option.open){option.menuItems.forEach(item=>{templates.push(this.renderMenuItem(item,indent+1))})}return templates}render(){let options=Array.isArray(this.selectOptions)?this.selectOptions:[this.selectOptions||{}];this.selectedItem=this.findSelectedOption(options);const headerTemplate=html`
      <div class="menu-item header">
        <div class="label">
          ${this.header}
        </div>
      </div>
    `,items=html`
      ${this.header?headerTemplate:html``} ${repeat(options,option=>this.renderMenuItem(option))}
    `;return html`
      <style>
        ${scrollbar} :host {
          font-size: var(--ptc-select-list-font-size, var(--ptc-font-size-default));
          font-weight: var(--ptc-font-weight-regular);
          display: block;
          position: relative;
          border-radius: 3px;
        }
        :host(:not([open])) .menu {
          display: none;
        }
        .menu {
          background-color: var(--ptc-select-list-bg, var(--ptc-light-bg));
          font-size: var(--ptc-font-size-small);
          color: var(--ptc-context-menu-text);
          max-height: 50vh;
          min-width: var(--ptc-select-item-min-width, 135px);
          width: var(--ptc-select-menu-width, auto);
          overflow: auto;
          right: 10px;
          padding: 7px 0;
          position: absolute;
          border-radius: 3px;
          z-index: 1;
          border: var(--ptc-select-menu-border, none);
          box-shadow: var(--ptc-context-menu-shadow, 0px 0px 4px var(--ptc-black-transparent-40));
        }
        svg {
          height: 16px;
          width: 16px;
          padding: 4px 2px;
          fill: var(--ptc-select-list-image-fill, var(--ptc-dark-sub-text));
        }
        .icon svg {
          fill: var(--ptc-green);
        }
        .image.-large,
        .-large svg {
          height: 24px;
          width: 24px;
        }
        .menu-item,
        .selected-item {
          padding: var(--ptc-select-list-selected-item-padding, 0px 10px);
          height: var(--ptc-select-list-selected-item-height, 38px);
          cursor: pointer;
          letter-spacing: var(--ptc-select-list-selected-item-letter-spacing, 0.05em);
          display: flex;
          align-items: center;
        }

        .selected-item {
          justify-content: var(--ptc-select-list-selected-item-justify-content, normal);
        }

        .menu-item > *,
        .selected-item > * {
          padding: var(--ptc-select-list-selected-padding-all, 5px);
        }
        .menu-item > *.image svg {
          fill: var(--ptc-select-menu-item-image-fill, var(--ptc-select-list-image-fill, var(--ptc-dark-sub-text)));
        }
        .menu-item > *.image.submenu svg {
          fill: var(--ptc-select-submenu-image-fill, var(--ptc-select-list-image-fill, var(--ptc-dark-sub-text)));
        }
        .submenu-closed .menu-icon svg {
          transform: rotate(-90deg);
        }
        .menu-item:hover > *.image svg {
          fill: var(
            --ptc-select-menu-item-hover-image-fill,
            var(--ptc-select-menu-item-image-fill, var(--ptc-select-list-image-fill, var(--ptc-dark-sub-text)))
          );
        }
        .menu-item > .icon,
        .menu-item > .menu-icon {
          margin-left: auto;
          padding: var(--ptc-select-list-item-padding-icon, var(--ptc-select-list-selected-padding-all, 5px));
        }
        .selected-item > .image {
          padding: var(--ptc-select-list-selected-padding-image, var(--ptc-select-list-selected-padding-all, 5px));
        }
        .selected-item svg {
          fill: var(
            --ptc-select-menu-selected-image-fill,
            var(--ptc-select-menu-item-image-fill, var(--ptc-select-list-image-fill, var(--ptc-dark-sub-text)))
          );
          padding: var(--ptc-select-list-selected-padding-svg);
        }
        :host(:not([open])) .selected-item:hover .image {
          border-radius: 50%;
          transition-duration: 0.1s;
          background-color: var(--ptc-select-menu-selected-image-hover-color);
          box-shadow: 0px 0px 0px 10px var(--ptc-select-menu-selected-image-hover-color);
        }
        :host(:not([open])) .selected-item:hover:active .image {
          background-color: var(--ptc-select-menu-selected-image-click-color);
          box-shadow: 0px 0px 0px 10px var(--ptc-select-menu-selected-image-click-color);
        }
        .menu-item:hover {
          background-color: var(--ptc-select-list-bg-hover, var(--ptc-dark-bg));
        }
        .label {
          width: var(--ptc-label-width, auto);
          text-overflow: ellipsis;
          overflow: hidden;
        }
        .menu-item .label,
        .selected-item .label {
          user-select: none;
          white-space: nowrap;
        }
        .menu-item.header {
          cursor: default;
        }
        .menu-item.header:hover {
          background-color: var(--ptc-select-list-bg, var(--ptc-light-bg));
        }
        .menu-item.header .label {
          color: var(--ptc-gray-4);
        }
        .menu-indent-1 .label {
          padding-left: 2em;
        }
        .selected-item .label {
          text-align: var(--ptc-item-text-align, right);
        }
        .selected-item {
          background-color: var(--ptc-select-list-selected-item-background-color);
        }
        .select-down-arrow {
          padding-right: 0;
          margin-top: 2px;
        }

        .select-down-arrow svg {
          height: var(--ptc-select-list-select-svg-height, 16px);
          width: var(--ptc-select-list-select-svg-width, 16px);
        }
      </style>

      <div class="selected-item" @click="${e=>this.toggleMenu()}">
        ${this.selectedItem?this.renderCurrentSelection(this.selectedItem):""}
        <span class="select-down-arrow" ?hidden=${this._shouldDisplayImageOnly()}>${chevronDownIcon}</span>
      </div>
      <div class="menu" @mouseover="${e=>this.startMenuMouseOver(e)}" @mouseout="${e=>this.endMenuMouseOver()}">
        ${items}
      </div>
    `}static get properties(){return{header:{type:String},selectOptions:{type:Array},value:{type:String,value:"",reflect:!0},displaySelectedImageOnly:{type:String}}}firstUpdated(){this.toggleMenu=this.toggleMenu.bind(this);this._handleClick=this._handleClick.bind(this);document.addEventListener("click",this._handleClick);this._menuElement=this.shadowRoot.querySelector(".menu")}disconnectedCallback(){super.disconnectedCallback();document.removeEventListener("click",this._handleClick)}/**
     * Toggles the menu between open/closed
     */toggleMenu(){this.toggleAttribute("open");if(null!==this.getAttribute("open")){//If opening the menu, auto expand the sub menu with the selected item
this.openSelectedSubMenu(this.selectOptions);this._fixMenuPosition();this.requestUpdate()}this.endMenuMouseOver();this.dispatchEvent(new CustomEvent("togglemenu",{bubbles:!0}))}/**
     * Emits an event to notify the consumer the value changed
     * @param {String} value
     */selectValue(value){this.value=value;let data={detail:{value}};this.dispatchEvent(new CustomEvent("valuechanged",data))}/**
     * Handle menu item clicks, to open up sub menus or fire off change in values
     * @param {Object} option - The menu option clicked
     */handleMenuItemClick(option){if("submenu"===option.type){option.open=!option.open;if(option.open){//Close other menus, only 1 can be open at a time
this.selectOptions.forEach(item=>{if(item.open&&item!==option){item.open=!1}})}this.requestUpdate()}else{this.selectValue(option.value);this.toggleMenu()}}/**
     * Hides the menu if the menu is open and the user clicks outside the menu
     * @param event
     * @private
     */_handleClick(event){if(this.hasAttribute("open")&&clickOutsideOfMenu(event,this)){this.toggleMenu()}}/**
     * Open/close the menu with a generated click event which should close other
     * menus.
     */triggerClick(){this.shadowRoot.querySelector(".label").click()}/**
     * Pulls menu to left edge of window if the menu is off the window.
     */_fixMenuPosition(){const menuElBounding=this._menuElement.getBoundingClientRect();if(0>menuElBounding.left){this._menuElement.style.left="0px";this._menuElement.style.right="auto"}}_shouldDisplayImageOnly(){return"undefined"!==typeof this.displaySelectedImageOnly}/**
     * The sub menu with the selected value should be open=true by default
     * @param {Array<Object>} options
     * @returns {Boolean} true if the set of options has the selected option contained
     */openSelectedSubMenu(options){let result=!1;for(let option of options){if(option.value===this.value){result=!0}if("submenu"===option.type){if(this.openSelectedSubMenu(option.menuItems)){option.open=!0}else{option.open=!1}}}return result}/**
     * When the mouse is over the menu, add a class to hide the tooltip
     */startMenuMouseOver(){this.classList.add("no-tooltip");this.dispatchEvent(new CustomEvent("menuMouseOver"))}endMenuMouseOver(){this.classList.remove("no-tooltip");this.dispatchEvent(new CustomEvent("menuMouseOut",{bubbles:!0}))}}window.customElements.define("ptc-select-list",PTCSelectList);class PtcDropTarget extends LitElement{createRenderRoot(){return this}constructor(){super();const t=window.i18next.t.bind(window.i18next);this.labels={dragDropAssetFile:unsafeHTML(t("drag-drop-asset-file",{HTML1:"<div>",HTML2:"</div>",HTML3:"<span class=\"drop-target--file-browse\">",HTML4:"</span>",interpolation:{escapeValue:!1}}))};this.multiple=!0}static get properties(){return{multiple:{type:Boolean},accept:{type:Array},disabled:{type:Boolean}}}render(){// for Captures, allow the input field to accept a folder - DT-23139
let fileInputField=this.accept&&this.accept.join(",").includes(SUPPORTED_FILE_TYPES.FOLDER)?html`
            <input type="file" class="imageinput hidden-file" @change="${e=>this.changed(e)}" webkitdirectory="" />
          `:html`
            <input
              type="file"
              class="imageinput hidden-file"
              @change="${e=>this.changed(e)}"
              ?multiple="${this.multiple}"
              accept="${this.accept?this.accept.join(","):""}"
            />
          `;return html`
      <div
        class="drop-target--container drop-area-no-hover ${this.disabled?"disabled":""}"
        @dragover="${e=>this.onDragover(e)}"
        @dragleave="${e=>this.onDragleave(e)}"
        @drop="${e=>this.changed(e)}"
        @click="${e=>this.browse(e)}"
      >
        <div class="drop-target--image">${uploadIcon}</div>
        <div class="drop-target--description description-text--medium">
          <span class="caption-font">${this.labels.dragDropAssetFile}</span>
          ${fileInputField}
        </div>
      </div>
    `}onDragover(event){event.preventDefault();event.stopPropagation();if(this.disabled){event.dataTransfer.dropEffect="none";return}event.currentTarget.classList.add("drop-area-hover")}onDragleave(event){event.currentTarget.classList.remove("drop-area-hover")}browse(e){if(this.disabled){return}if(e){e.stopPropagation()}this.querySelector("input[type=\"file\"]").click()}async changed(e){if(this.disabled){return}e.preventDefault();e.currentTarget.classList.remove("drop-area-hover");let files=await getDroppedFiles(e);if(0<files.length){e.stopPropagation();this.dispatchEvent(new CustomEvent("change",{detail:{files}}))}}}window.customElements.define("ptc-drop-target",PtcDropTarget);class InfoTileWrapper extends LitElement{constructor(){super();const t=window.i18next.t.bind(window.i18next);this.labels={close:t("Close")};setupTooltips(this);this._handleClick=this._handleClick.bind(this);this._scrollHandler=this._handleScroll.bind(this);this.display=!1}static get properties(){return{display:{type:Boolean}}}render(){this.style.display=this.display?"block":"none";return html`
      <style>
        .top-right-action {
          position: absolute;
          right: 10px;
          top: 10px;
          cursor: pointer;
          width: 14px;
          height: 14px;
        }

        .top-right-action svg {
          fill: var(--ptc-gray-4);
        }
      </style>

      <div class="info-tile-wrapper">
        <span
          class="close-icon icon -x-small -gray-4 top-right-action"
          @click="${()=>this.close()}"
          data-tooltip="${this.labels.close}"
        >
          ${closeDialogIcon}
        </span>
        <slot></slot>
      </div>
    `}/**
     * Close the component if the click occured outside the component
     */_handleClick(event){if(this.display&&!event.target.closest("ptc-info-tile-wrapper")){this.close()}}_handleScroll(event){if(this.display){this.close()}}/**
     * Show the object positioned at the given dom element
     */show(positionEl){this.display=!0;this.style.left=positionEl.style.left;this.style.top=positionEl.style.top;const tiles=this.querySelectorAll("ptc-info-tile-wrapper > *");for(const tile of tiles){if(tile.displayed!==void 0){tile.displayed=!0}}setTimeout(()=>{document.addEventListener("mousedown",this._handleClick);document.addEventListener("wheel",this._scrollHandler,{passive:!0})},100)}close(){this.display=!1;const tiles=this.querySelectorAll("ptc-info-tile-wrapper > *");for(const tile of tiles){if(tile.displayed!==void 0){tile.displayed=!1}}document.removeEventListener("mousedown",this._handleClick);document.removeEventListener("wheel",this._scrollHandler)}}window.customElements.define("ptc-info-tile-wrapper",InfoTileWrapper);class PTCQRCode extends connect(store)(LitElement){constructor(){super();const t=window.i18next.t.bind(window.i18next);this.labels={downloadAction:t("share.download-action")}}createRenderRoot(){return this}firstUpdated(){this.loadQRCodePromise=addScriptTag("node_assets/qrcode/build/qrcode.min.js")}render(){return html`
      <div class="qr-code__wrapper">
        <img src=${this.imageURL} ?hidden="${!this.imageURL||this.disabled}" />
        <div class="format__image" ?hidden="${this.imageURL&&!this.disabled}" disabled="true">
          ${qrCodeIcon}
        </div>
      </div>
      <div class="share-action">
        <div class="icon -medium">${downloadIcon}</div>
        <span
          class="action-text -underline"
          @click="${()=>this.download(this.filename)}"
          ?disabled="${this.disabled}"
        >
          ${this.labels.downloadAction}
        </span>
      </div>
    `}static get properties(){return{url:String,filename:String,disabled:Boolean}}async updated(changedProps){if(changedProps.has("url")&&this.url&&"undefined"!==this.url){try{this.imageURL=await this.createQRImage(this.url);this.requestUpdate()}catch(err){console.error("failed to generate QR code",err)}}}/**
     * Downloads the QR code as a PNG file
     * @param {String} filename - the filename to save the downloaded image as.  The extension will be append to this string.
     */download(filename){if(this.disabled){return}const linkElement=document.createElement("a");linkElement.href=this.imageURL;linkElement.download=(filename||"QR-code")+".png";linkElement.click()}/**
     * @returns {Promise} When resolved, returns a QR code image for the given URL
     */async createQRImage(url){const opts={margin:1,width:300};await this.loadQRCodePromise;const imageUrl=await QRCode.toDataURL(url,opts);return imageUrl}}window.customElements.define("ptc-qrcode",PTCQRCode);var qrcode={PTCQRCode:PTCQRCode};const getTableHeaderColumns=(config,sortCol,sortDesc)=>{let cells=[];for(let col of config.columns){cells.push(// prettier-ignore
html`<th
          class="ptc-grid-header-cell col-${col.id} col-sortable-${!1!==col.sortable} col-type-${col.type} sticky"
          @click="${e=>config.sort&&config.sort(col)}"
        >
          ${col.label}${sortCol===col?html`
                <span class="-gray-4 sort-arrow ${!1!==sortDesc?"sort-dir-desc":"sort-dir-asc"}">
                  ${arrowForwardIcon}
                </span>
              `:null}
        </th>`)}return html`<tr class="ptc-grid-row">${cells}</tr>`;// prettier-ignore
},getTableRows=(config,data)=>{const rows=[];for(let rowData of data){let cells=[];for(let col of config.columns){let value;if(col.property){value=deepFind(rowData,col.property)}const renderer=col.renderer||renderers[col.type];if(renderer){const cell=renderer(value,rowData,col);cells.push(// prettier-ignore
html`<td class="ptc-grid-cell col-${col.id} ${col.cls||""} col-type-${col.type}">${cell}</td>`)}else{console.error("no table cell renderer",col)}}rows.push(html`<tr class="ptc-grid-row">${cells}</tr>`);// prettier-ignore
if(rowData.isExpanded&&config.expansionRenderer){const content=config.expansionRenderer(rowData);rows.push(html`<tr class="ptc-grid-row -expansion">${content}</tr>`);// prettier-ignore
}}return rows},deepFind=(obj,path)=>{const paths=path.split(".");let current=obj,i;for(i=0;i<paths.length;++i){if(current[paths[i]]===void 0){return void 0}else{current=current[paths[i]]}}return current},expandCollapseRenderer=(value,data,colConfig)=>{const clazz=data.isExpanded?"expanded-icon":"collapsed-icon",tooltip=data.isExpanded?colConfig.collapseTooltip:colConfig.expandTooltip;return html`
    <div
      class="icon -small ptc-grid-${clazz}"
      data-tooltip="${tooltip}"
      @click="${e=>{data.isExpanded=!data.isExpanded;if(colConfig.clickHandler){colConfig.clickHandler(data)}// dispose tooltip because once expanded its no longer correct tooltip
const tooltipEl=e.target.closest("[data-tooltip]");if(tooltipEl&&tooltipEl.tooltip){tooltipEl.tooltip.dispose()}}}"
    >
      ${treeExpandCollapseIcon}
    </div>
  `},dateRenderer=value=>{return!value?null:textCellWrap(formatDateAndTimeToDisplay(value))},textRenderer=(value,proc)=>{return!value?null:textCellWrap(value)},getUserDisplayText=user=>{let firstName=user.firstName||user.givenName;const lastName=user.lastName||user.surname;let text;if(firstName||lastName){text=window.i18next.t("procedures-published.user-display",{firstName:firstName||"---",lastName:lastName||"---",interpolation:{escapeValue:!1}})}else{text=user.displayName}return text},getContactText=user=>{return user.email},userRenderer=value=>{if(value){return value.global?textAndIconCellWrap(value.value,worldIcon):textCellWrap(getUserDisplayText(getUserAndCache(value)))}return null},contactRenderer=value=>{let result="---";if(value&&!value.global){const text=getContactText(getUserAndCache(value));if(text){result=window.i18next.t("escape",{text})}}return textCellWrap(result)},textCellWrap=text=>{return html`<div class="flex-center"><div class="ptc-grid-cell-text">${text}</div></div>`;// prettier-ignore
},textAndIconCellWrap=(text,icon)=>{return html`<div class="flex-center"><div class="user-thumbnail icon -mediumlarge">${icon}</div><div class="ptc-grid-cell-text">${text}</div></div>`;// prettier-ignore
},selectionRenderer=(value,item,colConfig)=>{if("single"===colConfig.selectionType){return html`
      <input
        type="radio"
        .checked="${!!item.selected}"
        item-id="${"selection-"+item.id}"
        @click="${e=>selectionChanged(e,item)}"
      />
    `}else{return html`
      <input
        type="checkbox"
        .checked="${!!item.selected}"
        item-id="${"selection-"+item.id}"
        @click="${e=>selectionChanged(e,item)}"
      />
    `}},procedureThumbnailRenderer=(val,proc)=>{const value=proc.thumbnail;return!value?html`
        <span class="thumbnail-dark-background"><img class="icon" src="images/default-image-thumbnail.svg" /></span>
      `:html`
        <img class="icon" src="${baseURL+value}" />
      `},actionsMenuRenderer=(val,proc,colConfig)=>{return html`
    <span class="actions-menu-span" @click="${e=>colConfig.actionsFunc(e,proc,colConfig)}">
      ${moreActionsIcon}
    </span>
  `},selectionChanged=(e,item)=>{e.target.dispatchEvent(new CustomEvent("selectionChange",{bubbles:!0,detail:{item}}))},renderers={expandCollapse:expandCollapseRenderer,date:dateRenderer,text:textRenderer,user:userRenderer,contact:contactRenderer,selection:selectionRenderer,actionsMenu:actionsMenuRenderer},sortDate=function(obj1,obj2,property){const prop1=deepFind(obj1,property),prop2=deepFind(obj2,property);return new Date(prop2||0)-new Date(prop1||0)},sortText=function(obj1,obj2,property){const prop1=deepFind(obj1,property)||"",prop2=deepFind(obj2,property);return prop1.localeCompare(prop2,void 0,{sensitivity:"base"})},sortUser=function(obj1,obj2,property){const user1=getUserFromCache(deepFind(obj1,property))||{},user2=getUserFromCache(deepFind(obj2,property))||{},prop1=getUserDisplayText(user1),prop2=getUserDisplayText(user2);return prop1.localeCompare(prop2,void 0,{sensitivity:"base"})},sortContact=function(obj1,obj2,property){const user1=getUserFromCache(deepFind(obj1,property))||{},user2=getUserFromCache(deepFind(obj2,property))||{},prop1=getContactText(user1),prop2=getContactText(user2);return prop1.localeCompare(prop2,void 0,{sensitivity:"base"})},sort=function(obj1,obj2){let result;if(this.sortByColumn.sort){result=this.sortByColumn.sort(obj1,obj2,this.sortByColumn.property)}else if("date"===this.sortByColumn.type){result=sortDate(obj1,obj2,this.sortByColumn.property)}else if("text"===this.sortByColumn.type){result=sortText(obj1,obj2,this.sortByColumn.property)}else if("user"===this.sortByColumn.type){result=sortUser(obj1,obj2,this.sortByColumn.property)}else if("contact"===this.sortByColumn.type){result=sortContact(obj1,obj2,this.sortByColumn.property)}if(!1===this.sortDirectionDesc){result=-1*result;//Backwards
}return result};var tableUtils={getTableHeaderColumns:getTableHeaderColumns,getTableRows:getTableRows,deepFind:deepFind,expandCollapseRenderer:expandCollapseRenderer,dateRenderer:dateRenderer,textRenderer:textRenderer,getUserDisplayText:getUserDisplayText,getContactText:getContactText,userRenderer:userRenderer,contactRenderer:contactRenderer,textCellWrap:textCellWrap,textAndIconCellWrap:textAndIconCellWrap,selectionRenderer:selectionRenderer,procedureThumbnailRenderer:procedureThumbnailRenderer,actionsMenuRenderer:actionsMenuRenderer,selectionChanged:selectionChanged,renderers:renderers,sortDate:sortDate,sortText:sortText,sortUser:sortUser,sortContact:sortContact,sort:sort};export{apply as $,AppLaunchUtils$1 as $AppLaunchUtils,AuthUtils$1 as $AuthUtils,PEProcedure$1 as $PEProcedure,ProcedureAuth$1 as $ProcedureAuth,ProgressReporter$1 as $ProgressReporter,WorkerPipe$1 as $WorkerPipe,activeProcedure$2 as $activeProcedure,activeProcedure$1 as $activeProcedureDefault,activeStep as $activeStep,activeStep$2 as $activeStep$1,analytics as $analytics,analytics$1 as $analytics$1,defaultAnalytics as $analyticsApi,analyticsSaga as $analyticsDefault,app as $app,app$2 as $app$1,app$1 as $appDefault,appStateStorage as $appStateStorage,assetApi as $assetApi,assetCreation$1 as $assetCreation,assetCreation as $assetCreationDefault,assetJsonApi as $assetJsonApi,assetUtils as $assetUtils,assets as $assets,assets$2 as $assets$1,assets$3 as $assets$2,assets$1 as $assetsDefault,assetsSaga as $assetsDefault$1,auth as $auth,authSaga as $authDefault,capture as $capture,capture$2 as $capture$1,capture$1 as $captureDefault,captureHelper as $captureHelper,captureViewerPlayer as $captureViewerPlayer,config as $config,connectMixin as $connectMixin,constants as $constants,cssTag as $cssTag,dateUtils as $dateUtils,decorators as $decorators,defaultTemplateProcessor$1 as $defaultTemplateProcessor,digestUtils as $digestUtils,directive$1 as $directive,dismissableModal as $dismissableModal,dom as $dom,elementUtils as $elementUtils,ensureProcedureIsInCacheMiddleware$1 as $ensureProcedureIsInCacheMiddleware,entitlement as $entitlement,entitlements as $entitlementDefault,entitlementUtils as $entitlementUtils,experienceApi as $experienceApi,exportDocx as $exportDocx,exportFormat as $exportFormat,exportProgressBar as $exportProgressBar,_extends$1 as $extends,_extends as $extendsDefault,idUtils as $idUtils,ifDefined$1 as $ifDefined,images as $images,index$1 as $index,index as $index$1,thunk as $indexDefault,result as $indexDefault$1,io6de156f3 as $io$6de156f3,lazyReducerEnhancer$1 as $lazyReducerEnhancer,litElement as $litElement,litHtml as $litHtml,metadata as $metadata,modifyTemplate as $modifyTemplate,navigation as $navigation,navigationSaga as $navigationDefault,network as $network,newProcedure as $newProcedure,newProcedure$2 as $newProcedure$1,newProcedure$1 as $newProcedureDefault,objectWithoutPropertiesLoose as $objectWithoutPropertiesLoose,_objectWithoutPropertiesLoose as $objectWithoutPropertiesLooseDefault,pageViewElementHoc as $pageViewElementHoc,part as $part,parts as $parts,ponyfill as $ponyfill,symbolObservablePonyfill as $ponyfillDefault,popper as $popper,Popper as $popperDefault,procedure as $procedure,procedure$1 as $procedure$1,procedureApi as $procedureApi,procedureSaga as $procedureDefault,procedureHelper as $procedureHelper,procedureList$1 as $procedureList,procedureList$2 as $procedureList$1,procedureList as $procedureListDefault,proceduresSaga as $procedureListDefault$1,procedures as $procedures,procedures$2 as $procedures$1,procedures$1 as $proceduresDefault,projectUtils as $projectUtils,publishUrl as $publishUrl,publishedProcedureList$1 as $publishedProcedureList,publishedProcedureList as $publishedProcedureListDefault,qrcode as $qrcode,redux as $redux,reduxSagaCore_esm as $reduxSagaCoreEsm,sagaMiddlewareFactory as $reduxSagaCoreEsmDefault,reduxSagaCoreNpmProxy_esm as $reduxSagaCoreNpmProxyEsm,sagaMiddlewareFactory as $reduxSagaCoreNpmProxyEsmDefault,reduxSagaDeferred_esm as $reduxSagaDeferredEsm,deferred as $reduxSagaDeferredEsmDefault,reduxSagaDelayP_esm as $reduxSagaDelayP$esm,delayP as $reduxSagaDelayP$esmDefault,reduxSagaEffects_esm as $reduxSagaEffectsEsm,reduxSagaEffectsNpmProxy_esm as $reduxSagaEffectsNpmProxyEsm,reduxSagaIs_esm as $reduxSagaIsEsm,reduxSagaSymbols_esm as $reduxSagaSymbolsEsm,render$1 as $render,repeat$1 as $repeat,resourceApi as $resourceApi,router as $router,shadyRender as $shadyRender,spatialGraph as $spatialGraph,spatialGraph$1 as $spatialGraph$1,spatialGraphSaga as $spatialGraphDefault,spatialGraphReducer as $spatialGraphReducer,nodes as $spatialGraphReducerDefault,ssgService as $ssgService,store$1 as $store,store as $storeDefault,styles as $styles,tableUtils as $tableUtils,template as $template,templateFactory$1 as $templateFactory,templateInstance as $templateInstance,templateResult as $templateResult,tooltip as $tooltip,Tooltip as $tooltipDefault,tooltips as $tooltips,unsafeHtml as $unsafeHtml,updatingElement as $updatingElement,userService as $userService,users as $users,users$2 as $users$1,users$3 as $users$2,users$1 as $usersDefault,usersSaga as $usersDefault$1,video as $video,zipHelper as $zipHelper,ALL as A,ACTIVATE_PROCEDURE_TAB,ADD_ASSET_IN_NEW_STEP,ADD_ASSET_TO_STEP,ADD_VIDEO_CLIP_TO_STEP,ALLOW_RENAME_PROCEDURE,APP_NAMES,APP_STATE_KEY,ASSET_LIST_TYPE,ASSET_MOVE,ASSET_NAME,ASSET_PREVIEW_LAUNCH_POINTS,ASSET_TYPE,ASSET_VIDEO_EDITOR_CLOSED,ASSET_VIDEO_EDITOR_OPENED,AUDIO_STATUS,AccessCategory,AppLaunchUtils,AttributeCommitter,AttributeCommitter as AttributeCommitter$1,AttributePart,AttributePart as AttributePart$1,AuthUtils,logError as B,BANNER_MESSAGE_TYPE,Base64Image,BooleanAttributePart,BooleanAttributePart as BooleanAttributePart$1,CALL as C,CACHE_KEYS,CANCEL,CANCEL as CANCEL$1,CANCEL as CANCEL$2,CATEGORIES,CHANNEL_END_TYPE,CLEAR_BANNER_MESSAGE,CLOSE_PANEL,COMPONENT_STATE_CACHE_KEY,COULD_NOT_OPEN_PROCEDURE,CREATE_ASSET,CREATE_ASSET_CANCEL_ALL,CREATE_ASSET_COMPLETE,CREATE_ASSET_ENQUEUE_UPLOAD,CREATE_ASSET_FAILED,CREATE_ASSET_PENDING,CREATE_ASSET_START,CREATE_ASSET_UPLOAD,CREATE_ASSET_UPLOAD_END,CREATE_ASSET_UPLOAD_START,CREATE_PROCEDURE,CREATE_PROCEDURE_CANCEL,CREATE_PROCEDURE_FAILED,CREATE_PROCEDURE_START,CREATE_PROCEDURE_SUCCEEDED,CREATE_PROCEDURE_WARNING,CSSResult,CSSResult as CSSResult$1,CaptureData,CaptureStep,CaptureViewerPlayer,wrapSagaDispatch as D,DELETE_ASSET,DELETE_ASSET_COMPLETE,DELETE_ASSET_FAILED,DELETE_PROCEDURE,DELETE_PROCEDURE_COMPLETE,DELETE_PROCEDURE_FAILED,DELETE_PROCEDURE_START,DELETE_STEP_ASSETS,DIALOG_NOTIFICATION_TYPE,DISALLOW_RENAME_PROCEDURE,DO_ADD_ASSET_TO_STEP,DefaultTemplateProcessor,DefaultTemplateProcessor as DefaultTemplateProcessor$1,DismissableModal,identity as E,EDITOR_ROLES,END,END as END$1,ENTITLEMENT_CHECK_COMPLETE,ENTITLEMENT_KEYS,EXPORT_PROCEDURE,EXPORT_PROCEDURE_CANCEL,EXPORT_PROCEDURE_COMPLETE,EXPORT_PROCEDURE_FAILED,EXPORT_PROCEDURE_START,EventPart,EventPart as EventPart$1,ExportProgressBar,FORK as F,FETCH_ASSETS,FETCH_ASSETS_FAILED,FETCH_ASSETS_SUCCEEDED,FETCH_ASSET_METADATA_AND_EMIT_EVENT,FETCH_ASSET_METADATA_AND_EMIT_EVENT_FAILED,FETCH_ASSET_METADATA_SUCCEEDED,FETCH_ASSET_USES,FETCH_ASSET_USES_FAILED,FETCH_ASSET_USES_SUCCEEDED,FETCH_PERMISSIONS_SUCCEEDED,FETCH_PROCEDURES,FETCH_PROCEDURES_FAILED,FETCH_PROCEDURES_SUCCEEDED,FETCH_PROCEDURE_ANCHORS_SUCCEEDED,FETCH_PROCEDURE_SUCCEEDED,FETCH_PUBLISHED_PROCEDURES,FETCH_PUBLISHED_PROCEDURES_FAILED,FETCH_PUBLISHED_PROCEDURES_SUCCEEDED,FETCH_RELATED_CAPTURE_SUCCEEDED,FETCH_SEMANTIC_LOCATION_SUCCEEDED,FETCH_SSG_NODE_SUCCEEDED,FETCH_USER,FETCH_USERS,FETCH_USERS_FAILED,FETCH_USERS_IN_PROGRESS,FETCH_USERS_SUCCEEDED,FETCH_USER_FAILED,FETCH_USER_IN_PROGRESS,FETCH_USER_SUCCEEDED,FolderWrapper,GET_CONTEXT as G,GET_USERNAME,buffers as H,HISTORY_GROUP_KEYS,detach as I,IMAGE_EDITOR_CLOSED,IMAGE_EDITOR_OPENED,INITIAL_STATE$7 as INITIAL_STATE,INITIAL_STATE as INITIAL_STATE$1,INITIAL_STATE$9 as INITIAL_STATE$10,INITIAL_STATE$b as INITIAL_STATE$11,INITIAL_STATE$6 as INITIAL_STATE$2,INITIAL_STATE$4 as INITIAL_STATE$3,INITIAL_STATE$5 as INITIAL_STATE$4,INITIAL_STATE$a as INITIAL_STATE$5,INITIAL_STATE$3 as INITIAL_STATE$6,INITIAL_STATE$1 as INITIAL_STATE$7,INITIAL_STATE$8,INITIAL_STATE$2 as INITIAL_STATE$9,INSERT_STEPS_COMPLETED,INSERT_STEPS_START,IO,JOIN as J,JSON_ASSET_STRUCT,JSON_ASSET_TYPE,take as K,KEY,fork as L,LOAD_PROCEDURE,LOAD_PROCEDURE_ERROR,LOGIN,LOGIN_FAIL,LOGIN_SUCCESS,LOGOUT,LitElement,cancel as M,MARK_NEWLY_CREATED_ASSET,MARK_NEWLY_GENERATED_VIDEO_ASSET,MATCH,MOUSE,MULTICAST,call as N,NAVIGATED_IN_PROCEDURE,NAVIGATE_TO_ROUTE_END,NAVIGATE_TO_ROUTE_START,NAVIGATION_MASKED,NEW_STEP,NEW_STEPS,NodePart,NodePart as NodePart$1,NoneAccess,actionChannel as O,OPEN_CAPTURE,OPEN_PANEL,OPEN_PROCEDURE,OrgPrincipal,PUT as P,PEProcedure,PROCEDURE_TAB,PROCEDURE_VIEW_STARTED,PROCEDURE_VIEW_STOPPED,PTCExportDocx,PTCExportFormat,PTCPublishUrl,PTCQRCode,PTCVideo,PUBLISH_PROCEDURE,PUBLISH_PROCEDURE_SUCCEEDED,PUBLISH_ROLES,PageViewElement,ProcedureAuth,ProcedureDoesNotExist,ProgressReporter,PropertyCommitter,PropertyCommitter as PropertyCommitter$1,PropertyPart,PropertyPart as PropertyPart$1,PublishedAccess,sliding as Q,RACE as R,REMOVE_ACTIVE_PROCEDURE,REMOVE_ASSETS_FROM_STEP,REMOVE_ASSETS_FROM_STEP_AND_RESET,REMOVE_STEP,RENAME_ASSET,RENAME_ASSET_COMPLETE,RENAME_ASSET_FAILED,RENAME_PROCEDURE,RENAME_PROCEDURE_COMPLETE,RENAME_PROCEDURE_FAILED,RENAME_PROCEDURE_START,RENAME_PROCEDURE_STOP,RESET_ACTIVE_CAPTURE,RESET_ASSET_SELECTION,RESET_PROCEDURE_ANCHORS,ROLE_PRIORITIES,ROUTE,SELECT as S,SAGA_ACTION,SAGA_LOCATION,SAGA_LOCATION as SAGA_LOCATION$1,SAGA_LOCATION as SAGA_LOCATION$2,SAVE_COMPONENT_STATE,SAVE_PROCEDURE,SAVE_PROCEDURE_END,SAVE_PROCEDURE_FAILED,SAVE_PROCEDURE_PROCESS_EXIT,SAVE_PROCEDURE_SCHEDULE_ANOTHER_SAVE,SAVE_PROCEDURE_START,SAVE_PROCEDURE_SUCCEEDED,SELECT_ASSETS,SELF_CANCELLATION,SET_ACTIVE_ASSET_LIST,SET_ACTIVE_CAPTURE_STEP,SET_ACTIVE_STEP,SET_ASSET_CURSOR,SHOW_BANNER_MESSAGE,SSGTYPES,STEP_3D_EFFECT_CHANGE,STEP_DESCRIPTION_CHANGE,STEP_ID_CHANGE,STEP_LOCATIONAWARE_CHANGE,STEP_LOCATION_CHANGE,STEP_MOVE,SUPPORTED_FILE_EXTENSIONS_REGEX,SUPPORTED_FILE_TYPES,SUPPORTED_FILE_TYPES_REGEX,SVGTemplateResult,SVGTemplateResult as SVGTemplateResult$1,SVGTemplateResult as SVGTemplateResult$2,TAKE as T,TABS,TAB_NAVIGATION,TASK,TASK_CANCEL,TERMINATE,THINGVIEW_MODE,THINGVIEW_MODE_CMS,THUMBNAIL,TIMEOUTS,TIME_MULTIPLIER,TOGGLE_NAV_EXPANSION,TOP_LEVEL_TAB_CHANGE,Template,Template as Template$1,TemplateInstance,TemplateInstance as TemplateInstance$1,TemplateResult,TemplateResult as TemplateResult$1,TemplateResult as TemplateResult$2,TemplateResult as TemplateResult$3,delay as U,UNMARK_NEWLY_CREATED_ASSET,UNMARK_NEWLY_GENERATED_VIDEO_ASSET,UNPUBLISH_PROCEDURE,UNPUBLISH_PROCEDURE_SUCCEEDED,UPDATE_OFFLINE,UpdatingElement,UpdatingElement as UpdatingElement$1,race as V,VIDEO_FPS,VIEW_ROLES,VideoQuality,effectTypes as W,WipProcedureAccess,WorkQueue,WorkerPipe,takeMaybe as X,put as Y,putResolve as Z,all as _,ActionTypes as __DO_NOT_USE__ActionTypes,_getShouldUpload,_setAnalyticsApi,_setBaseUrl,_setTenantProject,CPS as a,cps as a0,spawn as a1,join as a2,select as a3,cancelled as a4,flush as a5,getContext as a6,setContext as a7,accountServicePath,actionChannel,actionChannel as actionChannel$1,actionsMenuRenderer,activateProcedureTab,activeCameraIcon,addAssetInNewStep,addAssetInNewStep$1,addAssetToStep,addAssetToStep$2 as addAssetToStep$1,addAssetToStep$1 as addAssetToStep$2,addAssetToStepFromFile,addAssetsFromEvent,addCaptureAssets,addScriptTag,addStep,addStepIcon,addSteps,addVideoClipToStep,addVideoClipToStep$1,alertHelpIcon,alertInfoIcon,alertWarningIcon,all,all as all$1,allowRenameProcedure,appLaunched,apply,apply as apply$1,applyMiddleware,applyProcedureAccessRecordChanges,arContextTemplate,array,arrayOfDeferred,arrowForwardIcon,assemblyIcon,assetCreationProcess,assetGroupIcon,assetVideoEditorClosed,assetVideoEditorOpened,assetsSaga,audioRecord,audioRecordButtons,audioRemovedIcon,audioReplacedIcon,CANCEL$1 as b,backArrowIcon,baseURL,bindActionCreators,bookmarkIcon,boundAttributeSuffix,buffer,buffers,buffers as buffers$1,buildingsIcon,check as c,cacheLocationData,call,call as call$1,cameraSnapshotIcon,cancel$1 as cancel,cancel as cancel$1,cancel as cancel$2,cancelAllPendingUploads,cancelled,cancelled as cancelled$1,captureIcon,changeStep3dEffect,changeStepLocation,channel$1 as channel,channel as channel$1,channel$1 as channel$2,checkIcon,chevronDownIcon,cleanUpVideos,clickOutsideOfMenu,clipperDragHandle,clockIcon,cloneAsset,closeDialogIcon,closeIcon,closeIcon2,closeOpenMenus,closePanel,cmsPath,combineReducers,compose,connect,constructJsonAsset,contactRenderer,convertMovieTimeStr,convertNumberToMovieTimeStr,convertNumberToMovieTimeStrWithMilliseconds,couldNotOpenProcedure,cps,cps as cps$1,create,createAnchorNode,createAsset,createAsset$2 as createAsset$1,createAsset$1 as createAsset$2,createBlob,createCaptureNode,createEdge,createIcon,createMarker,createMarker as createMarker$1,createOrUpdateProcedureInCMS,createProcedure,createProcedureSxsl,createSemanticLocation,createSemanticLocationGraph,createStepNode,createStore,createTooltipInstance,createVideoClip,css,css as css$1,customElement,customElement as customElement$1,ACTION_CHANNEL as d,dateRenderer,debounce,debounce as debounce$1,deepFind,defaultConverter,defaultConverter as defaultConverter$1,defaultProjectName,defaultTemplateProcessor,defaultTemplateProcessor as defaultTemplateProcessor$1,delay,delay as delay$1,deleteAsset,deleteAsset$1,deleteAssets,deleteIcon,deleteProcedure,deleteProcedure$1,deleteResource,desktopIcon,detach,detach as detach$1,directive,directive as directive$1,disallowRenameProcedure,dispatchCustomMenuEvent,doCreateAsset,downMenuArrow,downloadIcon,dragDropIcon,dropMarkerElipseIcon,expanding as e,editIcon,editorPath,effect,effectTypes,effectTypes as effectTypes$1,ensureCaptureEdgesAreCreated,ensureProcedureIsInCacheMiddleware,ensureThingViewScriptLoaded,ensureThreeScriptLoaded,errorIcon,escape,eventChannel,eventChannel as eventChannel$1,eventOptions,eventOptions as eventOptions$1,expandCollapseIcon,expandCollapseRenderer,expandIcon,expandIcon2,experienceIcon,exportFormatIcon,exportIcon,exportProcedure,exportingIcon,CANCELLED as f,faceIcon,failIcon,failed,fetchAllAnchorsSucceeded,fetchAllUsers,fetchAsset,fetchAssetByUrl,fetchAssetMetadata,fetchAssetUses,fetchAssetUses$1,fetchAssets$1 as fetchAssets,fetchAssets as fetchAssets$1,fetchCaptureNodeSucceeded,fetchGLTFUrlFromPvz,fetchGLTFUrlFromPvzUrl,fetchMetadataForAsset,fetchMetadataForAssetThumbnail,fetchNodeSucceeded,fetchProcedurePermissions,fetchProcedurePublications,fetchProcedures$1 as fetchProcedures,fetchProcedures as fetchProcedures$1,fetchPublishedProcedureFromExperience,fetchPublishedProcedures,fetchSemanticLocationSucceeded,fetchUser,fetchUser$2 as fetchUser$1,fetchUser$1 as fetchUser$2,fetchUsers,fetchUsers$1,filterActions,findNodesByTypeAndRelation,findZipFileEntry,flush,flush as flush$1,fork,fork as fork$1,formatDateAndTimeToDisplay,formatDateToDisplay,formatDateWithShortMonth,formatRelativeTime,formatTimeToDisplay,func,FLUSH as g,gearIcon,generateUniqueName,getActiveProcedure,getActiveProcedureHistory,getActiveStep,getAllAnchorsForProcedure,getAssetFromStore,getAssetId,getAssetType,getAssetTypeFromFilename,getAssetUses,getCaptureAssetFilesForUpload,getCaptureUploadProgressReporter,getContactText,getContainerAssetFromDirectory,getContext,getContext as getContext$1,getCurrentPermissions,getCursorAssetIndex,getDesktopURL,getDeviceURL,getDisabledOptionByOwnershipTooltip,getDropFileData,getDroppedFiles,getExperienceConfigForProcedure,getExperienceForProcedure,getFileHash,getFileSize,getFileTypeIcon,getJsonAssetNamesForStep,getLastPublishedProcedureDate,getLastPublishedProcedureTime,getNode,getNodes,getOrCreateCaptureNode,getOrgId,getProcedure,getProcedureAccessForCategory,getProcedureAnchorsFromCache,getProjectMgr,getPublishInfoFromMetadata,getPublishedProcedureAccess,getPublishedProcedureContent,getRelatedCapture,getSelectedAssetNames,getSemanticLocation,getSemanticLocationCacheEntry,getSemanticLocations,getStrippedAssetTitle,getTableHeaderColumns,getTableRows,getTenantProject,getThumbnail,getThumbnailUrl,getUnwrappedFile,getUserAndCache,getUserAvatar,getUserDisplayText,getUserFromCache,getUserFullName,getUsername,getWillExceedCapacityOverride,getWipProcedureAccess,getZipData,getZipUtility,SET_CONTEXT as h,handleVideoError,hasEntitlement,hasTag,helpCenterIcon,helpIcon,heroIcon,html,html as html$1,html as html$2,internalErr as i,ifDefined,imageEditorClosed,imageEditorClosed$1,imageEditorOpened,imageEditorOpened$1,imageIcon,importMenuIcon,inactiveCameraIcon,infoIcon,initEntitlements,initializeThingview,insertNodeIntoTemplate,insertStepsStart,installOfflineWatcher,installRouter,internalProperty,internalProperty as internalProperty$1,isAssetFromCaptureBasedOnId,isCEPolyfill,isCaptureFile,isContentOverflown,isCreationInProgress,isDirective,isDirective as isDirective$1,isEnd,isEnd as isEnd$1,isGeneratingClip,isIterable,isIterable as isIterable$1,isPrimitive,isPrimitive as isPrimitive$1,isProcedureCreatedByUser,isPublished,isSame,isTemplatePartActive,isTemplatePartActive as isTemplatePartActive$1,iterable,iterator,getMetaInfo as j,join,join as join$1,kTrue as k,keyboard,createAllStyleChildCallbacks as l,lastAttributeNameRegex,lazyReducerEnhancer,linkIcon,listViewIcon,load3dEffectJsonAssetForStep,loadAndInitThingView,loadAssets,loadMtgContextJsonAssetForStep,loadProcedure,loadProcedureError,loadProcedures,loadPublishedProcedures,locationIcon,lockIcon,login,loginFail,loginSuccess,logout,logout$1,createEmptyArray as m,makeFetchWithXHR,markNewlyCreatedAssets,marker,markerRegex,mediaFilterAllIcon,mediaFilterStepIcon,mediaTypeToIcon,menuIcon,middleware,missionPointIcon,modelIcon,moreActionsIcon,mtgContextTemplate,multicast,multicastChannel,multicastChannel as multicastChannel$1,muteIcon,none as n,navArrow,navigate,navigateTo,navigatedInProcedure,navigatedInProcedure$1,navigationMasked,newStepId,newSteps,noChange,noChange as noChange$1,noPermissionStatus,nodeMarker,notEqual,notEqual as notEqual$1,notFoundImage,notUndef,nothing,nothing as nothing$1,number,once as o,object,observable,okIcon,onMouseOver,openCapture,openInNewTabIcon,openPanel,openProcedure,openProcedure$1,outlineInfoIcon,assignWithSymbols as p,padlockCloudImage,partIcon,parts$1 as parts,parts$1,pattern,pauseIcon,pe_version,playIcon,populateCache,popupArrow,procedurePreviewDialogIcon,procedureSaga,procedureThumbnailRenderer,procedureViewStarted,procedureViewStarted$1,procedureViewStopped,procedureViewStopped$1,proceduresCreatedByMeIcon,proceduresRecentIcon,proceduresSaga,proceduresSharedWithMeIcon,promise,property,property as property$1,publishExperience,publishIcon,publishIconWithOuterGlow,publishProcedure,publishProcedure$2 as publishProcedure$1,publishProcedure$1 as publishProcedure$2,publishProcedureSucceeded,pushCaptureApplicationLaunchEvent,pushCaptureUploadEvent,pushEvent,pushPELaunchEvent,pushStateWithParams,pushVideoClipCreatedEvent,put,put as put$1,putResolve,putResolve as putResolve$1,makeIterator as q,qrCodeIcon,query,query as query$1,queryAll,queryAll as queryAll$1,queryAssignedNodes,queryAssignedNodes as queryAssignedNodes$1,queryAsync,queryAsync as queryAsync$1,remove as r,race,race as race$1,radioSelectedIcon,radioUnselectedIcon,redoIcon,reducer,removeActiveProcedure,removeAllStep3dEffects,removeAssetsFromStep,removeAssetsFromStepAndReset,removeEventListener,removeNodes,removeNodes as removeNodes$1,removeNodesFromTemplate,removeStep,renameAsset,renameAsset$2 as renameAsset$1,renameAsset$1 as renameAsset$2,renameProcedure,renameProcedure$1,renameProcedureStart,renameProcedureStop,render,render$2 as render$1,render as render$2,renderers,reparentNodes,reparentNodes as reparentNodes$1,repeat,resetActiveCapture,resetSelection,restore,restorePage,retry$1 as retry,retry$1,runSaga,runSaga as runSaga$1,shouldComplete as s,sagaAction,saveActiveProcedure,saveAssetToCMS,saveAssetToCMSWithRetries,saveAssetToCapture,saveCaptureAsset,saveComponentState,saveProcedure,saveProcedureToCMS,scissorIcon,scrollbar,searchIcon,select,select as select$1,selectAssets,selectFeatureToggle,selectListSelectedIcon,selectTab,selectionChanged,selectionRenderer,setActiveAssetList,setActiveStep,setActiveStepAfterRemoval,setActiveStepOnLoad,setAssetCursor,setContext,setContext as setContext$1,setMetaTag,setProcedureAccessForCategory,setPublishedProcedureAccess,setWipProcedureAccess,set_active_capture_step,setupAssetCreationSagas,setupTooltips,sharePermission,shouldShowLocationWarning,showBannerMessage,showCopyModal,showDeleteConfirmationDialog,shrinkIcon,shrinkIcon2,skipNextIcon,skipPrevIcon,sort,sortContact,sortDate,sortText,sortUser,spatialGraphSaga,spawn,spawn as spawn$1,spinnerCircle,stdChannel,stdChannel as stdChannel$1,step3dEffectChange,stepDescResizeGrabberIcon,stepDescriptionChange,stepsSectionIcon,store,string,stringableFunc,successIcon,supportsAdoptingStyleSheets,supportsAdoptingStyleSheets as supportsAdoptingStyleSheets$1,svg,svg as svg$1,svg as svg$2,symbol,noop as t,tabNavigation,tabNavigation$1,take,take as take$1,takeEvery$1 as takeEvery,takeEvery$1,takeLatest$1 as takeLatest,takeLatest$1,takeLeading$1 as takeLeading,takeLeading$1,takeMaybe,takeMaybe as takeMaybe$1,task,templateCaches,templateCaches as templateCaches$1,templateFactory,templateFactory as templateFactory$1,textAndIconCellWrap,textCellWrap,textRenderer,throttle$1 as throttle,throttle$1,tileViewIcon,timelineSectionIcon,toggleKeys,toggleNavExpansion,traverseFiletree,treeExpandCollapseIcon,trimThumb,truncateTextInTheMiddle,truncateTextInTheMiddleFromElement,truncateTextInTheMiddleToLength,flatMap as u,undef,undoIcon,unmuteIcon,unpublishIcon,unpublishProcedure,unpublishProcedure$2 as unpublishProcedure$1,unpublishProcedure$1 as unpublishProcedure$2,unpublishProcedureSucceeded,unsafeCSS,unsafeCSS as unsafeCSS$1,unsafeHTML,updateActiveStepIfNeeded,updateAssetBrowserAfterCreatingAsset,updateMTGcontextAssets,updateMetadata,updateMetadata$1,updateMetadata$2,updateOffline,updateOfflineThunk,updateStepIdInStepDescCache,uploadIcon,uploadIconWithOuterGlow,uploadNewProcedureContents,userRenderer,usersIcon,usersSaga,uuid,getLocation as v,validateCaptureData,validateFileExtension,validateProcedure,videoIcon,volumeIcon,vuforiaLogo,createSetContextWarning as w,warn,worldIcon,asyncIteratorSymbol as x,shouldCancel as y,shouldTerminate as z,zipIcon};