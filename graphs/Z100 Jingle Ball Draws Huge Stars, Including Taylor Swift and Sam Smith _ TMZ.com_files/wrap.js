!function(){var confiantDfpWrapToSerialize=function(r,g,m,h,t,v,b){var n=r.RegExp,y="script",i=r.document,w=r.JSON,e=r.location.search,C=r,_=i,a=r.btoa,E=r.atob;if(!w||!a)return!1;var o="p",I="t",S="t",D="r",l="s",A="k",W="v",x="D",O="i",k="c",M="src",d="height",c="width",s="contentWindow",F="replace",j="error",N="log",R="length",U="stringify",B="wr"+O+I+"e",T="split",u="margin:0;padding:0;border:0;",p="data",f="clrm",P="0",J=/{{([^}]+)}}/g,H=/\/([^\/]+)\/([img]*)/,L=r.encodeURIComponent,q="//"+t+"/?wrapper="+L(v)+"&tpid=",V=(L(v),[].slice);function z(t){var e=H.exec(t);if(!e||e[R]<2)try{return new n(t)}catch(t){K(j,90,t)}return new n(e[1],e[2])}C=function(){if(r!=r.top)return r;var t,e,n=(t=i.body,(e=i.createElement("IFRAME")).style=u,e.marginHeight=0,e.marginWidth=0,e.scrolling="no",e[M]="about:blank",e[c]=g.w,e[d]=g.h,e.setAttribute(p+"-"+f+"-framed","true"),t.appendChild(e),e[s].document[B]("<body margin"+c+'="0" margin'+d+'="0" style="'+u+'"></body>'),e);return n[s][v]=g,n[s]}(),_=C.document;var X=g.D&&g.D[R]||!!~e.indexOf(f+"dbg"),G={regex:function(t,e){var n=e[t[l]];return n&&z(t[W]).test(n)},ex:function(t,e){return!!e[t[W]]}};function K(t){var e=r.console;X&&e&&e[e[t]?t:N]("["+f+"]",V.call(arguments,1))}function Q(t){return(a(t)||"")[F]("/","_")[F]("+","-")}function Y(t,e){return t[o]<e[o]}function Z(t,e){for(var n=0,r=t[R];n<r;n++)if(!1===e(t[n],n))return!1;return!0}var $={eq:function(t,e){return ot(e)&&lt(e)&&(e=e[0]),e==t},neq:function(t,e){return ot(e)&&lt(e)&&(e=e[0]),e!=t},rxp:function(t,e){return z(t||"").test(e)},ex:function(t,e){return(lt(e)&&0!=e?"1":"0")===t}},tt="dfp",et="o",nt="eq",rt="|",it=",";function at(t,e){return t&&t[R]?t:e}function ot(t){return"[object Array]"===Object.prototype.toString.call(t)}function lt(t){return!(null==t&&null==t)&&(!ot(t)||0<t.length)}!function(){K(N,261,v);var o=g.tag,l=g.isSfrm;if(!function(a){if(!h||!h[R])return!0;var n=!1;return Z(h[T](it),function(t){try{if(function(t){var e=a[t[k]]||{};try{for(var n,r=t[A].split("."),i=e;lt(i[n=r.shift()]);)i=i[n];return $[t[I]](t[W],i)}catch(t){return!1}}({c:at((e=t[T](rt))[0],tt),k:at(e[1],et),t:at(e[2],nt),v:E(e[3])}))return!(n=!0)}catch(t){}var e}),n}({dfp:g}))return o&&!l&&_[B](o);var t,n,e,r,i,a,d,c=(a=m.sort(Y),d=a[a[R]-1],Z(a,function(t){if(t[x]&&(d=t),Z(t[D],function(e){var t=G[e[I]];try{if(t&&!t(e,g))return!1}catch(t){return K(j,205,e,t),!1}}))return i=t,!1}),i||d),s=(n={},e={},r=P,(t=c)&&(r=t[S][F](J,function(t,e){return function t(e,n,r){if(!lt(e)||!lt(n))return P;var i=e.shift(),a=n[i];return ot(a)&&0<a.length&&(a=a[0]),"object"==typeof a&&lt(a)?t(e,a,r):(a=lt(a)?a:P,r[i]=a)}(e[T]("."),g,n)})),e.used_keys=n,e.id=r,e),u=Q(v+"/"+s.id),p={wh:u,wd:w.parse(w[U](s.used_keys)),wr:c?c[O]:null},f={d:p,t:o,cb:b,id:{dfp:{ad:g.ad,c:g.c,l:g.l,o:g.o,A:g.A,y:g.y,co:g.co,s:g.s}},isSfrm:l,isE:g.isE,isSb:g.isSb};C[v]={},C[v][u]=f,function(t,e,n){var r=q+L(t)+"&d="+e,i="err__"+1*new Date;C[i]=function(t){K(j,284,t),g.isE&&(o=unescape(o)),l||_[B](o)},n.isE||(n.t=escape(n.t),n.isE=!0);var a="<"+y+' type="text/java'+y+'">window["'+v+'"]={};'+'window["'+v+'"]["'+t+'"]='+w.stringify(n)+";"+"</"+y+">";_[B](a+"<"+y+" on"+j+'="void('+i+'())" '+M+'="'+r+'" type="text/java'+y+'" ></'+y+">")}(u,Q(w[U](p)),f)}()},config=_clrm.gpt||{};!function(propertyId,confiantCdn,mapping,activation,callback){window.googletag=window.googletag||{},window.confiant=window.confiant||{};var googletag=window.googletag,confiant=window.confiant,eventMapping={confiantSlotRenderEnded:"slotRenderEnded",confiantBlacklistedAdBlocked:"blacklistedAdBlocked",confiantBlacklistedAdDetected:"blacklistedAdDetected",confiantSlotRenderFailed:"slotRenderFailed"},privateServiceAPI={eventInvocation:[]},jc;confiant.services=confiant.services||(jc=null,function(){if(null!=jc)return jc;var i={slotRenderEnded:[],blacklistedAdBlocked:[],blacklistedAdDetected:[]};privateServiceAPI.eventInvocation.push(function(e,t,n){console.log("Confiant Event: "+e,t),a(e);for(var r=0;r<i[e].length;r++)try{t.slot={getSlotElementId:function(){return t.impressionData.dfp?t.impressionData.dfp.s:function(){for(var t=document.getElementsByTagName("IFRAME"),e=0;e<t.length;e++)if(n==t[e].contentWindow)return t[e].parentElement.parentElement.id;try{return n.frameElement.parentElement.parentElement.id}catch(t){}console.log("Confiant event source is not found",n)}()}},i[e][r].call(null,t)}catch(t){console.log("Failed to invoke Confiant listener for "+e,t)}});var a=function(t){if(!i.hasOwnProperty(t))throw Error(t+" event is not supported")};return jc={addEventListener:function(t,e){a(t),i[t].push(e)},removeEventListener:function(t,e){a(t);var n=i[t].indexOf(e);-1<n&&i[t].splice(n,1)}}}),googletag.cmd=googletag.cmd||[],googletag.cmd.push(function(){var confiantWrapEncoded=function(){if(void 0===confiantDfpWrapToSerialize)throw Error("missing confiantDfpWrap");return JSON.stringify(""+confiantDfpWrapToSerialize)}(),createDocumentWriteFunction=function(t){var e=t.contentDocument,n=e.write;return function(t){try{n.call(e,t)}catch(t){console.log(t)}}};if(googletag.debug_log.log&&!googletag.debug_log.logClrm){var sfKey=propertyId+Math.floor(Math.random()*Math.floor(1e18)).toString(36),inString=function(t,e,n){return t.substr&&t.substr(!n||n<0?0:+n,e.length)===e},sfCallback=function(t,e){var n=JSON.parse(atob(t.data.substr(e.length)));callback.apply(this,n)},processReplaceWithRequest=function(e,n){setTimeout(function(){var t=document.getElementById(n).childNodes[0].childNodes[0];try{t.name=e,t.src=t.src+"?reload="+Math.ceil(1e5*Math.random())}catch(t){console.error("Confiant: failed to replace the document",t)}},0)},sfCommunication=function(t,e){if("undefined"!=typeof XMLHttpRequest&&!this.submitted){var n=JSON.parse(atob(t.data.substr(e.length))),r=new XMLHttpRequest;r.onreadystatechange=function(){},r.open("POST",n.sendUrl,!0),r.send(n.payload)}},postMessageHandler=function(t){if(isUsable(t.data)){var e="comm"+propertyId,n="cb"+propertyId;inString(t.data,e,0)?sfCommunication(t,e):inString(t.data,n)?sfCallback(t,n):eventMapping.hasOwnProperty(t.data.eventType)&&t.data.id&&0<privateServiceAPI.eventInvocation.length&&privateServiceAPI.eventInvocation[0].call(null,eventMapping[t.data.eventType],t.data.eventData,t.source)}};window.addEventListener?window.addEventListener("message",postMessageHandler,!1):window.attachEvent("onmessage",postMessageHandler),googletag.debug_log.logClrm=googletag.debug_log.log,googletag.debug_log.log=function(t,e,n,r){if(e&&e.getMessageId&&"number"==typeof e.getMessageId()&&(3===e.getMessageId()||5===e.getMessageId()))try{var i=getSlotDoc(r),a=r.getSlotElementId(),o=document.getElementById(a);if(!o)throw"Invalid GPT placement: "+a;var l=o.getElementsByTagName("DIV")[0];if(l&&!l.appendChildClrm&&(l.appendChildClrm=l.appendChild,l.appendChild=appendIframeChild),l.parentElement&&!l.parentElement.appendChildClrm&&(l.parentElement.appendChildClrm=l.parentElement.appendChild,l.parentElement.appendChild=appendDivChild),i&&!i.writeClrm){var d=i.parentWindow||i.defaultView;d[propertyId]={slot:r};var c=document.getElementById(d.frameElement.id);i.writeClrm=createDocumentWriteFunction(c),i.write=docWriteChild}}catch(t){console.log(t)}return googletag.debug_log.logClrm.apply(this,arguments)}}function sandboxSlot(t){for(var e=googletag.pubads().getSlots(),n=0;n<e.length;n++)try{if(e[n].getSlotElementId()==t){var r=document.getElementById(e[n].getSlotElementId()).getElementsByTagName("DIV")[0];if(r)return r.getElementsByTagName("IFRAME")[0].setAttribute("sandbox","allow-forms allow-pointer-lock allow-same-origin allow-scripts"),!0}}catch(t){}return!1}function getSlotDoc(t){try{for(var e in t)if(t[e]&&"object"==typeof t[e]){var n=t.getAdUnitPath();for(var r in t[e])if("string"==typeof t[e][r]&&-1!=t[e][r].indexOf(n)&&n.length<t[e][r].length)return document.getElementById("google_ads_iframe_"+t[e][r]).contentDocument}}catch(t){}}function parseSafeFrameInput(t){var e=t.substr(0,t.indexOf(";",8)),n=e.split(";");return n[1]=parseInt(n[1]),n[2]=t.substr(e.length+1,n[1]),n[3]=t.substr(e.length+1+n[1]),n}function buildSafeFrameInput(t){return t[0]+";"+t[2].length+";"+t[2]+t[3]}function insertFirst(t,e,n,r){var i,a;return-1!=(i=t.indexOf(e))?(a=t.substring(i).indexOf(">")+1,t.substr(0,i+(r?a:0))+n+t.substr(i+(r?a:0))):t}function getCreative(t){for(var e in t)if(t[e]&&"object"==typeof t[e]&&"html"==t[e]["_type_"])return t[e]}function isUsable(t){return!(null==t&&null==t)&&("[object Array]"!==Object.prototype.toString.call(t)||0<t.length)}function buildContext(t,e){var n={};n.tag=e||"";var r=getCreative(t);return r&&(n.w=r._width_,n.h=r._height_,n.c=isUsable(r._creative_ids_)?r._creative_ids_[0]:0,n.ad=isUsable(r._advertiser_ids_)?r._advertiser_ids_[0]:0,n.o=isUsable(r._campaign_ids_)?r._campaign_ids_[0]:0,n.l=isUsable(r._adgroup2_ids_)?r._adgroup2_ids_[0]:0,n.y=isUsable(r._yield_group_ids_)?r._yield_group_ids_[0]:0,n.co=isUsable(r._company_ids_)?r._company_ids_[0]:0),n.k=t.getTargetingMap(),n.A=t.getAdUnitPath(),n.s=t.getSlotElementId(),n}function wrapAdHtmlInConfiantDiv(t,e){if(!isUsable(t))return t;var n=function(t,e,n){return t.slice(0,e)+n+t.slice(e)},r=function(t,e){return t.toLowerCase().indexOf(e.toLowerCase())},i="<div id='"+e+"' class='ad-container-"+e+"'>",a="</div>",o=t.match(/<body[^>]*>/gi),l=isUsable(o)?o[0]:"undefined",d="</body>",c=r(t,l),s=r(t,d),u=i+t+a;return-1<c&&-1<s&&(u=n(u=n(t,c+l.length,i),s=r(u,d),a)),u}function appendIframeChild(t){if(!isUsable(t.getAttribute("data-is-safeframe"))&&"IFRAME"===t.tagName&&t.id&&-1<t.id.indexOf("google_ads_iframe_")){var e=this.appendChildClrm(t),n=e.contentDocument,r=e.contentWindow;if(!n)return e;var i=createDocumentWriteFunction(e);return n.write=function(t){delete n.write,injectAdaptor(t,i,r)},e}if(t.src&&"http"!=t.src.substr(0,4)||"true"!==t.getAttribute("data-is-safeframe"))return this.appendChildClrm(t);var a=function(){for(var t=googletag.pubads().getSlots(),e=0;e<t.length;e++)if(t[e].getSlotElementId()==this.parentElement.id)return t[e];return null}.apply(this),o=parseSafeFrameInput(t.name),l=t.getAttribute("sandbox");if(-1==o[2].indexOf("clrm-cw-outer")){var d=buildContext(a);d.isSfrm=!0,d.isE=!0,d.isSb=!!(l&&0<l.length),d.tag=escape(o[2]),o[2]=wrapAdHtmlInConfiantDiv(o[2],propertyId);var c="(window,"+JSON.stringify(d)+", "+JSON.stringify(mapping)+",'"+activation+"','"+confiantCdn+"','"+propertyId+"', null )";o[2]=insertFirst(o[2],"<head","<script>("+JSON.parse(confiantWrapEncoded)+c+");</scr"+"ipt>",!0),t.name=buildSafeFrameInput(o)}return this.appendChildClrm?this.appendChildClrm(t):this.appendChild(t)}function appendDivChild(t){return"DIV"==t.tagName&&t&&!t.appendChildClrm&&(t.appendChildClrm=t.appendChild,t.appendChild=appendIframeChild),this.appendChildClrm?this.appendChildClrm(t):this.appendChild(t)}function docWriteChild(t){var e=this.writeClrm;delete this.write,delete this.writeClrm,injectAdaptor(t,e,this.parentWindow||this.defaultView)}function injectAdaptor(tag,originalDocWriteFunc,frameWindow){if(-1!=tag.indexOf("clrm-cw-outer"))return originalDocWriteFunc(tag);try{var slotId=frameWindow.frameElement.parentElement.parentElement.id,slot=function(){for(var t=frameWindow.top.googletag.pubads().getSlots(),e=0;e<t.length;e++)if(t[e].getSlotElementId()==slotId)return t[e];return null}.apply(this),context=buildContext(slot,tag);eval("var confiantDfpWrap = "+JSON.parse(confiantWrapEncoded)),confiantDfpWrap(frameWindow,context,mapping,activation,confiantCdn,propertyId,callback)}catch(t){return console.log(t),originalDocWriteFunc(tag)}}})}(config.propertyId,config.confiantCdn,JSON.parse(atob(config.mapping)),config.activation,config.callback)}();