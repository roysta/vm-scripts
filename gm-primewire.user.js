// ==UserScript==
// @name        primewire.tf DVD quality checkbox
// @namespace   Violentmonkey Scripts
// @match       https://www.primewire.tf/*
// @grant       none
// @version     1.0.1
// @author      -
// @description 25/11/2023, 23:57:16
// ==/UserScript==

var myform = document.getElementById('filter-bar');
if (myform) {
  const div = document.createElement("div");
  const checked = t => (t.has('quality') && t.get('quality') === 'DVD')
    ? "checked"
    : ""
  div.innerHTML=`<label for='quality'>DVD</label><input type='checkbox' id='quality' name='quality' value='DVD' ${checked(new URLSearchParams(window.location.search))}>`;
  myform.appendChild(div);
}
