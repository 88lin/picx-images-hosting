// ==UserScript==
// @name         恋爱占有欲指数测试免兑换码
// @description  恋爱占有欲指数计算器兑换码破解
// @namespace    http://tampermonkey.net/
// @version      0.1
// @author       https://nuaa.tech/
// @icon         https://nuaa.tech/zz.svg
// @match        https://rpi.imsun.cc/*
// @grant             unsafeWindow
// @grant             GM_addStyle
// @grant             GM_openInTab
// @grant             GM_getValue
// @grant             GM_setValue
// @grant             GM_xmlhttpRequest
// @charset		      UTF-8
// @license           GPL License
// ==/UserScript==

(function() {
    'use strict';

    const fakeActivation = {
        activated: true,
        code: "",
        projectName: "RPI Calculator",
        activatedAt: new Date().toISOString(),
        remainingUses: 0,
        validUntil: null
    };

    localStorage.setItem("rpi_activation_status", JSON.stringify(fakeActivation));

    console.log("模拟兑换码激活状态已设置！");
})();