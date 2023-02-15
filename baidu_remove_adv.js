// ==UserScript==
// @name         百度去右侧广告
// @namespace    https://luckycat.ink/
// @version      0.1
// @description  baidu百度去右侧广告
// @author       LuckyCat
// @match        https://www.baidu.com/
// @match        https://www.baidu.com/*
// @icon         https://www.baidu.com/favicon.ico
// @license      MIT
// @grant        unsafeWindow
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
    //let weburl=unsafeWindow.location.href
    window.onload = function(){
        //let a = document.querySelectorAll('td')
        //console.log(a)

        //创建计时器
        var del= setInterval(function(){
            //console.log(a)
            GM_addStyle('td{display:none !important}#s-top-left{display:none !important}');
        },500)

        //清除计时器
        setTimeout(function(){
             clearInterval(del)
        },10000)
    }
})();