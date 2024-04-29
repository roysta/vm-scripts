// ==UserScript==
// @name        srsone new episodes incrementer
// @namespace   Violentmonkey Scripts
// @match       https://topsrs.day/new-shows
// @include     https://topsrs.day/new-shows/*
// @grant       none
// @version     1.1.0
// @author      roysta
// @description 06/04/2024, 20:39:29
// ==/UserScript==
// 2024-04-30
// changed srsone.wf to topsrs.day


const uriArr = document.documentURI.split('/');
let item = Number(uriArr[uriArr.length -1]);

item = isNaN(item) || item < 11  ? 11  : item + 1;
//console.log(`item: ${item}`);

const href = document.documentURI.replace(/(\/\d+)?$/,"/"+item);
//console.log(`href: ${href}`);

const li1 = document.createElement('li');
const li2 = document.createElement('li');

li1.innerHTML = `<a href="${href}">${item}</a>`;
//console.log(`li1.innerHTML: ${li1.innerHTML}`);
li2.innerHTML = `<a href="${href}">${item}</a>`;

document.getElementsByClassName('spn-numbers')[0].childNodes[1].append(li1);
document.getElementsByClassName('navigation')[1].childNodes[1].append(li2);
