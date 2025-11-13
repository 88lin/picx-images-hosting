// ==UserScript==
// @name         黑料广告屏蔽
// @version      1.0
// @description  移除黑料浮动广告、跳转广告、底部悬浮框等各种干扰元素
// @match        *://*.buwtmff.cc/*
// @match        *://*.hlwa*.com/*
// @match        *://*.cloudfront.net/*
// @match        *://*.buymayc.cc/*
// @grant        none
// ==/UserScript==
(function () {
    'use strict';
    const css = `
        [adv_id],
        a.gotoclick,
        .app-group-title + .app-btn-icons,       /* “扶手必备软件”等按钮区域 */
        .app-group-title + .app-btn-icons + .line,
        .text_span.gotoclick,                    /* 文字链广告列 */
        .infomation .infor.gotoclick,            /* 底部横幅 B2 广告 */
        .detail-list-title .gotoclick            /* 详情页底部 C2 图标广告 */
        {
            display: none !important;
            visibility: hidden !important;
        }
    `;
    if (typeof GM_addStyle === 'function') {
        GM_addStyle(css);
    } else {
        const style = document.createElement('style');
        style.textContent = css;
        document.documentElement.appendChild(style);
    }

    const AD_HOST_WHITELIST = new Set([
        location.hostname,
        'www.heiliao.com',
        'heiliao.com',
        'x.com', 'twitter.com',
        't.me'
    ]);

    const AD_DOMAIN_KEYWORDS = [
        '.cc',
        '.vip',
        '.com/?channelCode=',
        'we6ee7.cc',
        'ks2fq3.cc',
        'nzzaacgh.cc',
        '0051703.cc',
        'kodstp7q.vip',
        '43034146.com',
        '50096441.com',
        '82992508.com',
        'mc.yandex.ru'
    ];

    function isAdLink(a) {
        if (!a || !a.href) return false;
        try {
            const u = new URL(a.href, location.href);
            // 自家域名 或 常见社交域名 -> 放过
            if (AD_HOST_WHITELIST.has(u.hostname)) return false;

            // 有广告标记属性
            if (a.hasAttribute('adv_id') || a.classList.contains('gotoclick')) {
                return true;
            }
            return AD_DOMAIN_KEYWORDS.some(k => u.hostname.includes(k.replace(/^\./, '')) || u.href.includes(k));
        } catch (e) {
            return false;
        }
    }

    function isFloatAdBox(el) {
        if (!(el instanceof HTMLElement)) return false;
        if (el.closest('.header')) return false;

        const style = getComputedStyle(el);
        if (style.position !== 'fixed') return false;

        const h = el.offsetHeight;
        const w = el.offsetWidth;
        if (h < 40 && w < 80) return false;
        const links = el.querySelectorAll('a[href]');
        let hasAd = false;
        for (const a of links) {
            if (isAdLink(a)) {
                hasAd = true;
                break;
            }
        }
        if (!hasAd) return false;
        return true;
    }

    function hideElement(el) {
        if (!(el instanceof HTMLElement)) return;
        el.style.setProperty('display', 'none', 'important');
        el.style.setProperty('visibility', 'hidden', 'important');
    }

    function scanAndKill(root = document) {
        if (!root.querySelectorAll) return;

        // 1）先处理明显的广告容器（有广告属性/类）
        root.querySelectorAll('[adv_id], a.gotoclick').forEach(el => {
            // 尽量向上找到一个比较大的容器一起隐藏
            const box = el.closest('.infomation, .app-btn-icons, .detail-list-title, .list-sec, div, section') || el;
            hideElement(box);
        });

        // 2）再专门找“悬浮广告”
        root.querySelectorAll('div,section,aside').forEach(el => {
            try {
                if (isFloatAdBox(el)) {
                    hideElement(el);
                }
            } catch (e) {
            }
        });
    }
    function observe() {
        const ob = new MutationObserver(mutations => {
            for (const m of mutations) {
                // 新增节点里查广告
                m.addedNodes && m.addedNodes.forEach(node => {
                    if (!(node instanceof HTMLElement)) return;
                    scanAndKill(node);
                });
            }
        });

        ob.observe(document.documentElement || document.body, {
            childList: true,
            subtree: true
        });
        setInterval(() => scanAndKill(document), 3000);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            scanAndKill(document);
            observe();
        });
    } else {
        scanAndKill(document);
        observe();
    }
})();
