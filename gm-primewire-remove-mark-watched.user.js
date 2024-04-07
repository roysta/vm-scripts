// ==UserScript==
// @name        primewire.tf remove 'Mark Watched' checkbox because it is in the way of the next episode button.
// @namespace   Violentmonkey Scripts
// @match       https://www.primewire.tf/*
// @grant       none
// @version     1.1.1
// @author      roysta
// @description 21/02/2024, 22:39:25
// ==/UserScript==
const id = document.getElementsByClassName('episode-checkbox')
id.parentElement.removeChild(id);
