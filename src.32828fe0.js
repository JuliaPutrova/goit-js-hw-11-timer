parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"krre":[function(require,module,exports) {

},{}],"Focm":[function(require,module,exports) {
"use strict";require("./css/styles.css");class e{constructor({selector:e,targetDate:t}){this.selector=e,this.targetDate=t,this.timerId=null}getRefs(){const e=document.querySelector(this.selector);return{days:e.querySelector('[data-value="days"]'),hours:e.querySelector('[data-value="hours"]'),mins:e.querySelector('[data-value="mins"]'),secs:e.querySelector('[data-value="secs"]')}}updateTimer({days:e,hours:t,mins:r,secs:s}){const a=Date.now(),o=this.targetDate-a,i=Math.floor(o/864e5),l=Math.floor(o%864e5/36e5),c=Math.floor(o%36e5/6e4),n=Math.floor(o%6e4/1e3);e.textContent=i<10?`0${i}`:i,t.textContent=l<10?`0${l}`:l,r.textContent=c<10?`0${c}`:c,s.textContent=n<10?`0${n}`:n,o<1e3&&this.clearTimer()}startTimer(){this.timerId=setInterval(()=>{this.updateTimer(this.getRefs())},1e3)}clearTimer(){clearInterval(this.timerId)}}const t=new e({selector:"#timer-1",targetDate:new Date("Sep 26, 2021")}),r=new e({selector:"#timer-2",targetDate:new Date("Aug 7, 2021 23:09")});t.startTimer(),r.startTimer();
},{"./css/styles.css":"krre"}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-11-timer/src.32828fe0.js.map