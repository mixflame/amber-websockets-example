!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define("Amber",[],n):"object"==typeof exports?exports.Amber=n():e.Amber=n()}(this,function(){return function(e){function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}var t={};return n.m=e,n.c=t,n.i=function(e){return e},n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=1)}([function(e,n,t){"use strict";function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0}),n.Socket=void 0;var i=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),r=t(2);n.Socket=function(){function e(n){o(this,e),this.endpoint=n,this.ws=null,this.channels=[]}return i(e,[{key:"connect",value:function(e){var n=this;return new Promise(function(e,t){n.ws=new WebSocket("ws://localhost:8080"+n.endpoint),n.ws.onopen=function(){return e()},n.ws.onmessage=function(e){n.handleMessage(e)}})}},{key:"channel",value:function(e){var n=new r.Channel(e,this);return this.channels.push(n),n}},{key:"handleMessage",value:function(e){e=JSON.parse(e.data),this.channels.forEach(function(n){n.topic===e.topic&&n.handleMessage(e)})}}]),e}()},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(0);n.default={Socket:o.Socket},e.exports=n.default},function(e,n,t){"use strict";function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),r={join:"join",leave:"leave",message:"message"};n.Channel=function(){function e(n,t){o(this,e),this.topic=n,this.socket=t,this.onMessageHandlers=[]}return i(e,[{key:"join",value:function(){this.socket.ws.send(JSON.stringify({event:r.join,topic:this.topic}))}},{key:"leave",value:function(){this.socket.ws.send(JSON.stringify({event:r.message,topic:this.topic}))}},{key:"handleMessage",value:function(e){this.onMessageHandlers.forEach(function(n){n.subject===e.subject&&n.callback(e.payload)})}},{key:"on",value:function(e,n){this.onMessageHandlers.push({subject:e,callback:n})}},{key:"push",value:function(e,n){this.socket.ws.send(JSON.stringify({event:r.message,topic:this.topic,subject:e,payload:n}))}}]),e}()}])});