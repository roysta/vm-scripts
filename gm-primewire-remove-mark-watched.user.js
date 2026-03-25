// ==UserScript==
// @name        primewire.tf remove 'Mark Watched' checkbox because it is in the way of the next episode button.
// @namespace   Violentmonkey Scripts
// @match       https://www.primewire.mov/*
// @match       https://primewire.mov/*
// @match       https://www.primewire.si/*
// @match       https://primewire.si/*
// @match       https://www.primewire.zip/*
// @match       https://primewire.zip/*
// @grant       none
// @version     1.1.8
// @author      roysta
// @description 2026-03-25 updated current urls as per primewire.nexus
// ==/UserScript==

// version 1.1.8
// 2026-03-25
// removed .tf, added .si,.zip

// version 1.1.7
// 2025-07-27 12:10
// added more @match statements to cover .mov tld

// version 1.1.6
// 21/02/2024, 22:39:25
// release

for (e of document.getElementsByClassName('header_option')) {
    e.parentElement.removeChild(e);
};
