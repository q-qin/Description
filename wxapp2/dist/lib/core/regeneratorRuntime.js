var regeneratorRuntime=(function(E){var p=Object.prototype;var s=p.hasOwnProperty;var j;var D=typeof Symbol==="function"?Symbol:{};var A=D.iterator||"@@iterator";var t=D.asyncIterator||"@@asyncIterator";var r=D.toStringTag||"@@toStringTag";function m(L,F,H,G){var J=F&&F.prototype instanceof g?F:g;var K=Object.create(J.prototype);var I=new x(G||[]);K._invoke=e(L,H,I);return K}E.wrap=m;function l(G,I,F){try{return{type:"normal",arg:G.call(I,F)}}catch(H){return{type:"throw",arg:H}}}var d="suspendedStart";var y="suspendedYield";var z="executing";var h="completed";var i={};function g(){}function v(){}function k(){}var q={};q[A]=function(){return this};var b=Object.getPrototypeOf;var f=b&&b(b(c([])));if(f&&f!==p&&s.call(f,A)){q=f}var C=k.prototype=g.prototype=Object.create(q);v.prototype=C.constructor=k;k.constructor=v;k[r]=v.displayName="GeneratorFunction";function B(F){["next","throw","return"].forEach(function(G){F[G]=function(H){return this._invoke(G,H)}})}E.isGeneratorFunction=function(G){var F=typeof G==="function"&&G.constructor;return F?F===v||(F.displayName||F.name)==="GeneratorFunction":false};E.mark=function(F){if(Object.setPrototypeOf){Object.setPrototypeOf(F,k)}else{F.__proto__=k;if(!(r in F)){F[r]="GeneratorFunction"}}F.prototype=Object.create(C);return F};E.awrap=function(F){return{__await:F}};function w(H){function G(P,K,O,N){var L=l(H[P],H,K);if(L.type==="throw"){N(L.arg)}else{var J=L.arg;var M=J.value;if(M&&typeof M==="object"&&s.call(M,"__await")){return Promise.resolve(M.__await).then(function(Q){G("next",Q,O,N)},function(Q){G("throw",Q,O,N)})}return Promise.resolve(M).then(function(Q){J.value=Q;O(J)},function(Q){return G("throw",Q,O,N)})}}var I;function F(L,J){function K(){return new Promise(function(N,M){G(L,J,N,M)})}return I=I?I.then(K,K):K()}this._invoke=F}B(w.prototype);w.prototype[t]=function(){return this};E.AsyncIterator=w;E.async=function(J,F,I,H){var G=new w(m(J,F,I,H));return E.isGeneratorFunction(F)?G:G.next().then(function(K){return K.done?K.value:G.next()})};function e(J,F,H){var I=d;return function G(O,K){if(I===z){throw new Error("Generator is already running")}if(I===h){if(O==="throw"){throw K}return u()}H.method=O;H.arg=K;while(true){var M=H.delegate;if(M){var N=o(M,H);if(N){if(N===i){continue}return N}}if(H.method==="next"){H.sent=H._sent=H.arg}else{if(H.method==="throw"){if(I===d){I=h;throw H.arg}H.dispatchException(H.arg)}else{if(H.method==="return"){H.abrupt("return",H.arg)}}}I=z;var L=l(J,F,H);if(L.type==="normal"){I=H.done?h:y;if(L.arg===i){continue}return{value:L.arg,done:H.done}}else{if(L.type==="throw"){I=h;H.method="throw";H.arg=L.arg}}}}}function o(H,G){var J=H.iterator[G.method];if(J===j){G.delegate=null;if(G.method==="throw"){if(H.iterator["return"]){G.method="return";G.arg=j;o(H,G);if(G.method==="throw"){return i}}G.method="throw";G.arg=new TypeError("The iterator does not provide a 'throw' method")}return i}var F=l(J,H.iterator,G.arg);if(F.type==="throw"){G.method="throw";G.arg=F.arg;G.delegate=null;return i}var I=F.arg;if(!I){G.method="throw";G.arg=new TypeError("iterator result is not an object");G.delegate=null;return i}if(I.done){G[H.resultName]=I.value;G.next=H.nextLoc;if(G.method!=="return"){G.method="next";G.arg=j}}else{return I}G.delegate=null;return i}B(C);C[r]="Generator";C[A]=function(){return this};C.toString=function(){return"[object Generator]"};function n(G){var F={tryLoc:G[0]};if(1 in G){F.catchLoc=G[1]}if(2 in G){F.finallyLoc=G[2];F.afterLoc=G[3]}this.tryEntries.push(F)}function a(G){var F=G.completion||{};F.type="normal";delete F.arg;G.completion=F}function x(F){this.tryEntries=[{tryLoc:"root"}];F.forEach(n,this);this.reset(true)}E.keys=function(F){var I=[];for(var G in F){I.push(G)}I.reverse();return function H(){while(I.length){var J=I.pop();if(J in F){H.value=J;H.done=false;return H}}H.done=true;return H}};function c(H){if(H){var I=H[A];if(I){return I.call(H)}if(typeof H.next==="function"){return H}if(!isNaN(H.length)){var F=-1,G=function G(){while(++F<H.length){if(s.call(H,F)){G.value=H[F];G.done=false;return G}}G.value=j;G.done=true;return G};return G.next=G}}return{next:u}}E.values=c;function u(){return{value:j,done:true}}x.prototype={constructor:x,reset:function(G){this.prev=0;this.next=0;this.sent=this._sent=j;this.done=false;this.delegate=null;this.method="next";this.arg=j;this.tryEntries.forEach(a);if(!G){for(var F in this){if(F.charAt(0)==="t"&&s.call(this,F)&&!isNaN(+F.slice(1))){this[F]=j}}}},stop:function(){this.done=true;var F=this.tryEntries[0];var G=F.completion;if(G.type==="throw"){throw G.arg}return this.rval},dispatchException:function(J){if(this.done){throw J}var I=this;function M(O,N){F.type="throw";F.arg=J;I.next=O;if(N){I.method="next";I.arg=j}return !!N}for(var H=this.tryEntries.length-1;H>=0;--H){var L=this.tryEntries[H];var F=L.completion;if(L.tryLoc==="root"){return M("end")}if(L.tryLoc<=this.prev){var K=s.call(L,"catchLoc");var G=s.call(L,"finallyLoc");if(K&&G){if(this.prev<L.catchLoc){return M(L.catchLoc,true)}else{if(this.prev<L.finallyLoc){return M(L.finallyLoc)
}}}else{if(K){if(this.prev<L.catchLoc){return M(L.catchLoc,true)}}else{if(G){if(this.prev<L.finallyLoc){return M(L.finallyLoc)}}else{throw new Error("try statement without catch or finally")}}}}}},abrupt:function(J,F){for(var H=this.tryEntries.length-1;H>=0;--H){var K=this.tryEntries[H];if(K.tryLoc<=this.prev&&s.call(K,"finallyLoc")&&this.prev<K.finallyLoc){var I=K;break}}if(I&&(J==="break"||J==="continue")&&I.tryLoc<=F&&F<=I.finallyLoc){I=null}var G=I?I.completion:{};G.type=J;G.arg=F;if(I){this.method="next";this.next=I.finallyLoc;return i}return this.complete(G)},complete:function(G,F){if(G.type==="throw"){throw G.arg}if(G.type==="break"||G.type==="continue"){this.next=G.arg}else{if(G.type==="return"){this.rval=this.arg=G.arg;this.method="return";this.next="end"}else{if(G.type==="normal"&&F){this.next=F}}}return i},finish:function(F){for(var G=this.tryEntries.length-1;G>=0;--G){var H=this.tryEntries[G];if(H.finallyLoc===F){this.complete(H.completion,H.afterLoc);a(H);return i}}},"catch":function(G){for(var H=this.tryEntries.length-1;H>=0;--H){var J=this.tryEntries[H];if(J.tryLoc===G){var F=J.completion;if(F.type==="throw"){var I=F.arg;a(J)}return I}}throw new Error("illegal catch attempt")},delegateYield:function(G,H,F){this.delegate={iterator:c(G),resultName:H,nextLoc:F};if(this.method==="next"){this.arg=j}return i}};return E}(typeof module==="object"?module.exports:{}));