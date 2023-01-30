"use strict";var f=Object.defineProperty,P=Object.defineProperties,D=Object.getOwnPropertyDescriptor,A=Object.getOwnPropertyDescriptors,G=Object.getOwnPropertyNames,v=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var E=(o,e,t)=>e in o?f(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,m=(o,e)=>{for(var t in e||(e={}))C.call(e,t)&&E(o,t,e[t]);if(v)for(var t of v(e))x.call(e,t)&&E(o,t,e[t]);return o},w=(o,e)=>P(o,A(e));var q=(o,e)=>{for(var t in e)f(o,t,{get:e[t],enumerable:!0})},O=(o,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of G(e))!C.call(o,r)&&r!==t&&f(o,r,{get:()=>e[r],enumerable:!(n=D(e,r))||n.enumerable});return o};var U=o=>O(f({},"__esModule",{value:!0}),o);var p=(o,e,t)=>new Promise((n,r)=>{var c=a=>{try{i(t.next(a))}catch(d){r(d)}},s=a=>{try{i(t.throw(a))}catch(d){r(d)}},i=a=>a.done?n(a.value):Promise.resolve(a.value).then(c,s);i((t=t.apply(o,e)).next())});var W={};q(W,{DefaultStreamerbotClientOptions:()=>S,StreamerbotClient:()=>y,StreamerbotEvents:()=>h});module.exports=U(W);var h={Application:["ActionAdded","ActionUpdated","ActionDeleted"],Command:["Message","Whisper","MessageCooldown","BotWhisper"],DonorDrive:["Donation","ProfileUpdated"],FileWatcher:["Changed","Created","Deleted","Renamed"],General:["Custom"],HypeRate:["HeartRatePulse"],Kofi:["Donation","Subscription","Resubscription","ShopOrder","Commission"],Midi:["Message"],Misc:["TimedAction","PyramidSuccess","PyramidBroken"],Obs:["Connected","Disconnected"],Patreon:["FollowCreated","FollowDeleted","PledgeCreated","PledgeUpdated","PledgeDeleted"],Pulsoid:["HeartRatePulse"],Quote:["Added","Show"],Raw:["Action","SubAction","ActionCompleted"],Shopify:["OrderCreated","OrderPaid"],SpeechToText:["Dictation","Command"],StreamElements:["Tip","Merch"],Streamlabs:["Donation","Merchandise"],TipeeeStream:["Donation"],TreatStream:["Treat"],Twitch:["Follow","Cheer","Sub","ReSub","GiftSub","GiftBomb","Raid","HypeTrainStart","HypeTrainUpdate","HypeTrainLevelUp","HypeTrainEnd","RewardRedemption","RewardCreated","RewardUpdated","RewardDeleted","CommunityGoalContribution","CommunityGoalEnded","StreamUpdate","Whisper","FirstWord","SubCounterRollover","BroadcastUpdate","StreamUpdateGameOnConnect","PresentViewers","PollCreated","PollUpdated","PollCompleted","PredictionCreated","PredictionUpdated","PredictionCompleted","PredictionCanceled","PredictionLocked","ChatMessage","ChatMessageDeleted","UserTimedOut","UserBanned","Announcement","AdRun","BotWhisper","CharityDonation","CharityCompleted","CoinCheer","ShoutoutCreated","UserUntimedOut","CharityStarted","CharityProgress","GoalBegin","GoalProgress","GoalEnd","ShieldModeBegin","ShieldModeEnd","AdMidRoll"],WebsocketClient:["Open","Close","Message"],WebsocketCustomServer:["Open","Close","Message"],YouTube:["BroadcastStarted","BroadcastEnded","Message","MessageDeleted","UserBanned","SuperChat","SuperSticker","NewSponsor","MemberMileStone","NewSponsorOnlyStarted","NewSponsorOnlyEnded","StatisticsUpdated","BroadcastUpdated","MembershipGift","GiftMembershipReceived","FirstWords","PresentViewers"]};function T(){return`sb:client:req:${Date.now()}-${crypto.getRandomValues(new Uint32Array(12))[0]}`}function k(o){let e;return o.code==1e3?e="Normal closure, meaning that the purpose for which the connection was established has been fulfilled.":o.code==1001?e='An endpoint is "going away", such as a server going down or a browser having navigated away from a page.':o.code==1002?e="An endpoint is terminating the connection due to a protocol error":o.code==1003?e="An endpoint is terminating the connection because it has received a type of data it cannot accept (e.g., an endpoint that understands only text data MAY send this if it receives a binary message).":o.code==1004?e="Reserved. The specific meaning might be defined in the future.":o.code==1005?e="No status code was actually present.":o.code==1006?e="The connection was closed abnormally, e.g., without sending or receiving a Close control frame":o.code==1007?e="An endpoint is terminating the connection because it has received data within a message that was not consistent with the type of the message (e.g., non-UTF-8 [https://www.rfc-editor.org/rfc/rfc3629] data within a text message).":o.code==1008?e='An endpoint is terminating the connection because it has received a message that "violates its policy". This reason is given either if there is no other sutible reason, or if there is a need to hide specific details about the policy.':o.code==1009?e="An endpoint is terminating the connection because it has received a message that is too big for it to process.":o.code==1010?e="An endpoint (client) is terminating the connection because it has expected the server to negotiate one or more extension, but the server didn't return them in the response message of the WebSocket handshake. <br /> Specifically, the extensions that are needed are: "+o.reason:o.code==1011?e="A server is terminating the connection because it encountered an unexpected condition that prevented it from fulfilling the request.":o.code==1015?e="The connection was closed due to a failure to perform a TLS handshake (e.g., the server certificate can't be verified).":e="Unknown reason",e}var S={host:"127.0.0.1",port:8080,endpoint:"/",immediate:!0,subscribe:{}},y=class{constructor(e=S){this.listeners=[];this.subscriptions={};this.options=m(m({},S),e),this.options.immediate===!0&&this.connect()}get isConnected(){var e,t;return((e=this.socket)==null?void 0:e.readyState)===((t=this.socket)==null?void 0:t.OPEN)}connect(){return p(this,null,function*(){var e;this.socket&&(yield this.disconnect());try{this.socket=new WebSocket(`ws://${this.options.host}:${this.options.port}${this.options.endpoint}`),this.socket.onopen=this.onOpen.bind(this),this.socket.onclose=this.onClose.bind(this),this.socket.onerror=this.onError.bind(this),this.socket.onmessage=this.onMessage.bind(this)}catch(t){yield this.disconnect();try{this.options.onError&&((e=this==null?void 0:this.options)==null||e.onError(t))}catch(n){console.error("Error invoking onError handler",n)}throw t}})}disconnect(){return p(this,null,function*(){var e;if(!(!this.socket||this.socket.readyState===this.socket.CLOSED)){this.socket.close();try{this.options.onDisconnect&&((e=this==null?void 0:this.options)==null||e.onDisconnect())}catch(t){console.error("Error invoking onDisconnect handler",t)}}})}onOpen(){return p(this,null,function*(){var e;try{this.options.subscribe&&(yield this.subscribe(this.options.subscribe));let t=yield this.getInfo();this.options.onConnect&&((e=this==null?void 0:this.options)==null||e.onConnect(t.info))}catch(t){console.error("Error invoking onOpen handler",t)}})}onClose(e){var t,n;try{(e.type==="error"||!e.wasClean)&&this.options.onError&&((t=this==null?void 0:this.options)==null||t.onError(new Error(k(e)))),this.options.onDisconnect&&((n=this==null?void 0:this.options)==null||n.onDisconnect())}catch(r){console.error("Error invoking onDisconnect handler",r)}this.cleanup()}onMessage(e){var t,n,r,c;if(console.log(e==null?void 0:e.data),(e==null?void 0:e.data)&&typeof e.data=="string"){let s=JSON.parse(e.data);try{this.options.onData&&((t=this==null?void 0:this.options)==null||t.onData(s))}catch(i){console.error("Error invoking onData handler",i)}if(((n=s==null?void 0:s.event)==null?void 0:n.source)&&((r=s==null?void 0:s.event)==null?void 0:r.type)){for(let i of this.listeners)if(!!((c=i.events)!=null&&c.length)&&!!i.events.find(a=>{var d,l,b;return a===`${(d=s==null?void 0:s.event)==null?void 0:d.source}.${(l=s==null?void 0:s.event)==null?void 0:l.type}`||a.split(".",2)[1]==="*"&&a.split(".",2)[0]===((b=s==null?void 0:s.event)==null?void 0:b.source)}))try{i.callback(s)}catch(a){console.error("Error calling listener callback",i.events)}}}else console.debug("unknown message",e)}onError(e){var t;console.error("WebSocket Error",e);try{this.options.onError&&((t=this==null?void 0:this.options)==null||t.onError(new Error("WebSocket Error")))}catch(n){console.error("Error invoking onError handler",n)}}cleanup(){!this.socket||(this.socket.onopen=null,this.socket.onclose=null,this.socket.onerror=null,this.socket.onmessage=null,this.listeners=[],this.socket=void 0)}send(e){var t;(t=this.socket)==null||t.send(JSON.stringify(e))}request(e,t="",n=5e3){return p(this,null,function*(){t||(t=T());let r=new AbortController,c=r.signal,s;return yield Promise.race([new Promise((i,a)=>s=setTimeout(()=>(r.abort(),a({message:"WebSocket request timeout exceeded",request:e})),n)),new Promise((i,a)=>{var d;(d=this.socket)==null||d.addEventListener("message",l=>{var b,g;try{let u=JSON.parse(l==null?void 0:l.data);if((u==null?void 0:u.status)==="ok"&&(u==null?void 0:u.id)===t){try{this.options.onData&&((g=this==null?void 0:this.options)==null||g.onData(m({_time:Date.now(),event:{source:"Request",type:(b=e.request)!=null?b:"Unknown"}},u)))}catch(R){console.error("Error invoking onData handler",R)}i(m({_time:Date.now()},u))}}catch(u){a(u)}},{signal:c}),this.send(w(m({},e),{id:t}))})]).finally(()=>{clearTimeout(s),r.abort()})})}on(e,t){return p(this,null,function*(){var n,r;try{if(Array.isArray(e)||(e=[e]),!(e!=null&&e.length))return;let c=!1;for(let s of e){let[i,a]=(n=s.split(".",2))!=null?n:[null,null];if(!i||!a||!(i in h))continue;let d=i,l=a;if(l){c=!0;let b=new Set([...(r=this.subscriptions[d])!=null?r:[],...l==="*"?h[d]:[l]]);this.subscriptions[d]=[...b]}}c&&(yield this.subscribe(this.subscriptions)),this.listeners.push({events:e,callback:t})}catch(c){console.error("Failed adding event listener",e)}})}subscribe(e){return p(this,null,function*(){var t,n;e==="*"&&(e=h);for(let r in e){if(r===void 0||!Object.keys(h).includes(r))continue;let c=r,s=(t=e[c])!=null?t:[];if(s&&s.length){let i=new Set([...(n=this.subscriptions[c])!=null?n:[],...s]);this.subscriptions[c]=[...i]}}return yield this.request({request:"Subscribe",events:this.subscriptions})})}unsubscribe(e){return p(this,null,function*(){var t,n;e==="*"&&(e=h);for(let r in e){if(r===void 0||!Object.keys(h).includes(r))continue;let c=r,s=e[c];if(s&&s.length)for(let i of s)i&&(t=this.subscriptions[c])!=null&&t.filter&&((n=this.subscriptions[c]=this.subscriptions[c])==null||n.filter(a=>i!==a))}return yield this.request({request:"UnSubscribe",events:e})})}getEvents(){return p(this,null,function*(){return yield this.request({request:"GetEvents"})})}getActions(){return p(this,null,function*(){return yield this.request({request:"GetActions"})})}doAction(e,t){return p(this,null,function*(){return yield this.request({request:"DoAction",action:{id:e,name},args:t})})}getBroadcaster(){return p(this,null,function*(){return yield this.request({request:"GetBroadcaster"})})}getCredits(){return p(this,null,function*(){return yield this.request({request:"GetCredits"})})}testCredits(){return p(this,null,function*(){return yield this.request({request:"TestCredits"})})}clearCredits(){return p(this,null,function*(){return yield this.request({request:"ClearCredits"})})}getInfo(){return p(this,null,function*(){return yield this.request({request:"GetInfo"})})}getActiveViewers(){return p(this,null,function*(){return yield this.request({request:"GetActiveViewers"})})}};0&&(module.exports={DefaultStreamerbotClientOptions,StreamerbotClient,StreamerbotEvents});
