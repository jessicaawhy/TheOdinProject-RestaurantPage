!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";function o(t,e,n){const o=document.createElement(""+t);o.setAttribute("id",e);document.getElementById(n).appendChild(o)}function r(t,e){document.getElementById(t).textContent=e}function i(){o("h3","about","content"),r("about","About"),o("h4","about-paragraph","content"),r("about-paragraph","A paragraph about the restaruant")}n.r(e);(()=>{const t=document.getElementById("content"),e=()=>{document.querySelectorAll("button").forEach(t=>t.addEventListener("click",t=>{n(),"Home"===t.target.innerText?i():"Contact"===t.target.innerText?(o("h3","directions","content"),r("directions","Directions"),o("h4","directions-content","content"),r("directions-content","Some information about how to get there"),o("h3","phone-label","content"),r("phone-label","Phone"),o("h4","phone-content","phone-label"),r("phone-content","(xxx) xxx-xxxx"),o("h3","email-label","content"),r("email-label","Email"),o("h4","email-content","email-label"),r("email-content","jessica@yummyyummy.com")):"Menu"===t.target.innerText&&(o("h3","lunch-items","content"),r("lunch-items","Lunch Items"),o("h5","lunch-item-1","lunch-items"),r("lunch-item-1","Salmon Bibimbap"),o("h5","lunch-item-2","lunch-items"),r("lunch-item-2","Tteokbokki"),o("h3","dinner-items","content"),r("dinner-items","Dinner Items"),o("h3","dinner-items","content"),r("dinner-items","Dinner Items"),o("h5","dinner-item-1","dinner-items"),r("dinner-item-1","Shin Ramen"),o("h5","dinner-item-2","dinner-items"),r("dinner-item-2","Gamjatang"))}))},n=()=>{(()=>{for(;t.firstChild;)t.removeChild(t.lastChild)})(),o("h1","restaurantName","content"),r("restaurantName","Yummy Yummy"),o("ul","button-container","content"),o("button","home-button","button-container"),r("home-button","Home"),o("button","menu-button","button-container"),r("menu-button","Menu"),o("button","contact-button","button-container"),r("contact-button","Contact"),e()};n(),i()})()}]);
//# sourceMappingURL=main.js.map