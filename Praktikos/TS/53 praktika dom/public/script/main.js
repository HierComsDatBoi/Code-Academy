"use strict";
const sec1 = document.querySelector('#basicDom');
console.log(sec1);
const par1 = document.createElement('p');
par1.textContent = 'hello pasauli!';
sec1 === null || sec1 === void 0 ? void 0 : sec1.appendChild(par1);
const img1 = document.createElement('img');
