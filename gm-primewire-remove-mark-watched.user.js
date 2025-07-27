// ==UserScript==
// @name        primewire.tf remove 'Mark Watched' checkbox because it is in the way of the next episode button.
// @namespace   Violentmonkey Scripts
// @match       https://www.primewire.tf/*
// @match       https://primewire.tf/*
// @match       https://www.primewire.mov/*
// @match       https://primewire.mov/*
// @grant       none
// @version     1.1.7
// @author      roysta
// @description 2025-07-27 12:10 - Added more matches for .mov
// ==/UserScript==

// version 1.1.7
// 2025-07-27 12:10
// added more @match statements to cover .mov tld

// version 1.1.6
// 21/02/2024, 22:39:25
// release

for (e of document.getElementsByClassName('header_option')) {
    e.parentElement.removeChild(e);
};
