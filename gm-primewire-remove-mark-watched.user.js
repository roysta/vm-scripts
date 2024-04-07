// ==UserScript==
// @name        primewire.tf remove 'Mark Watched' checkbox because it is in the way of the next episode button.
// @namespace   Violentmonkey Scripts
// @match       https://www.primewire.tf/*
// @grant       none
// @version     1.1.6
// @author      roysta
// @description 21/02/2024, 22:39:25
// ==/UserScript==

for (e of document.getElementsByClassName('header_option')) {
    e.parentElement.removeChild(e);
};
