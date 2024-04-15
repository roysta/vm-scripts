// ==UserScript==
// @name        srsone new episodes incrementer v2
// @namespace   Violentmonkey Scripts
// @match       https://srsone.wf/new-shows
// @include     https://srsone.wf/new-shows/*
// @grant       none
// @version     1.1.1
// @author      roysta
// @description 15/04/2024, 20:40:00
// ==/UserScript==

const uriArr = document.documentURI.split('/');
let item = Number(uriArr[uriArr.length -1]);

item = isNaN(item) 
    ? 1
    : item;
//console.log(`item:\t${item}`);

const href = document.documentURI.replace(/(\/\d+)?$/,"");
//console.log(`href:\t${href}`)
let i1 = document.createElement('ul');
let i2 = document.createElement('ul');

for (let i = (item > 6 ? item - 5 : 1); i < (item > 6 ? item + 5 : 11); i+=1) {
    const li1 = document.createElement('li');
    const li2 = document.createElement('li');
    li1.innerHTML = `<a ${item === i ? "class=\"current\"":""} href="${href}/${i}">${i}</a>`;
    li2.innerHTML = `<a ${item === i ? "class=\"current\"":""} href="${href}/${i}">${i}</a>`;
//    console.log(`i1:\t${i1.innerHTML}`)
    i1.append(li1);
    i2.append(li2);
}

document.getElementsByClassName('spn-numbers')[0].childNodes[1].replaceWith(i1);
document.getElementsByClassName('navigation')[1].childNodes[1].replaceWith(i2);
