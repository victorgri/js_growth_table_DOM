parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=r(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a,l=!0,i=!1;return{s:function(){o=e[Symbol.iterator]()},n:function(){var e=o.next();return l=e.done,e},e:function(e){i=!0,a=e},f:function(){try{l||null==o.return||o.return()}finally{if(i)throw a}}}}function r(e,r){if(e){if("string"==typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?t(e,r):void 0}}function t(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var n=document.querySelector(".append-row"),o=document.querySelector(".remove-row"),a=document.querySelector(".append-column"),l=document.querySelector(".remove-column"),i=document.querySelector(".field"),c=document.querySelector(".container");c.addEventListener("click",function(r){var t=r.target,c=i.rows.length,d=i.tBodies[0].rows[0].cells.length;if(!("BUTTON"!==t.tagName&&c>10||"BUTTON"!==t.tagName&&d>10)){var u=i.tBodies[0].rows[0].cloneNode(!0);if(t===n&&c<10&&(o.disabled=!1,(c+=1)>=10&&(n.disabled=!0),i.tBodies[0].append(u)),t===o&&(n.disabled=!1,(c-=1)<=2&&(o.disabled=!0),i.deleteRow(u)),t===a&&d<10){l.disabled=!1,(d+=1)>=10&&(a.disabled=!0);var s,f=e(i.rows);try{for(f.s();!(s=f.n()).done;){var m=s.value,y=document.createElement("td");m.append(y)}}catch(p){f.e(p)}finally{f.f()}}if(t===l){a.disabled=!1,(d-=1)<=2&&(l.disabled=!0);var v,b=e(i.rows);try{for(b.s();!(v=b.n()).done;){v.value.cells[0].remove()}}catch(p){b.e(p)}finally{b.f()}}}});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.77ab8b7a.js.map