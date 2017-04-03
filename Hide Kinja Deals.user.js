// ==UserScript==
// @name         Hide Kinja Deals
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *.lifehacker.com/*
// @match        *.kotaku.com/*
// @grant        none
// @require      http://code.jquery.com/jquery-3.1.1.min.js
// ==/UserScript==

(function() {
    'use strict';
    // hide from main page
    $("article:contains('Shared from Deals')").css("display", "none");
    // hide related from article page
    $("div.related-module--commerce:contains('Gear from Kinja Deals')").css("display", "none");
})();