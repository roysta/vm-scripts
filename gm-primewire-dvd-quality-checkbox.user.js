// ==UserScript==
// @name        primewire.tf DVD quality checkbox
// @namespace   Violentmonkey Scripts
// @match       https://primewire.tf/
// @match       https://www.primewire.tf/
// @match       https://primewire.mov/
// @match       https://www.primewire.mov/
// @grant       none
// @version     1.1.3
// @author      roysta
// @description 2025-07-27 11:23
// ==/UserScript==

// version 1.1.3
// 2025-07-27 11:23
// discovered that regex are not allowed in @match's
// version 1.1.2
// 2025-07-27 11:15
// amended match regex
// version 1.1.1
// 2025-07-27 10:38:00
// added regex to @match for vm
// version 1.1.0
// 25/11/2023, 23:57:16

var myform = document.getElementById('filter-bar');
if (myform) {
  const div = document.createElement("div");
  const checked = t => (t.has('quality') && t.get('quality') === 'DVD')
    ? "checked"
    : ""
  div.innerHTML=`<label for='quality'>DVD</label><input type='checkbox' id='quality' name='quality' value='DVD' ${checked(new URLSearchParams(window.location.search))}>`;
  myform.appendChild(div);
}
