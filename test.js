// ==UserScript==
// @name         bilibili专栏复制去除后缀
// @namespace    http://luckycat.ink/
// @version      0.1
// @description  bilibili专栏复制去除后缀
// @author       LuckyCat
// @match        https://www.bilibili.com/read/*
// @icon         https://www.bilibili.com/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let oldadd=EventTarget.prototype.addEventListener
    EventTarget.prototype.addEventListener=function (a,b,c){
        if(a=='copy') return;
    }
})();