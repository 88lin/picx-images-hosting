!function(){var e=(window.location&&window.location.hostname||"").toLowerCase(),n=new Set(["test-jxppm0uh.maozi.io","nuaa.tech","zeroo.ggff.net"]),t=n.has(e)||e.endsWith(".nuaa.tech")||e.endsWith(".zeroo.ggff.net");if(!t)throw new Error;var o=!1,a=[];function i(e,n,t,o){if(!e||!e.addEventListener)return function(){};e.addEventListener(n,t,o);var i=function(){try{e.removeEventListener(n,t,o)}catch(e){}};return a.push(i),i}function r(){if(o)return;o=!0;try{a.forEach(function(e){e()})}catch(e){}try{window.setTimeout=function(){} }catch(e){}try{window.setInterval=function(){} }catch(e){}try{window.requestAnimationFrame=function(){} }catch(e){}try{window.queueMicrotask=function(){} }catch(e){}try{var n=function(e){return e&&e.preventDefault&&e.preventDefault(),e&&e.stopImmediatePropagation&&e.stopImmediatePropagation(),!1};["click","mousedown","mouseup","keydown","keyup","keypress","contextmenu","touchstart","touchend","pointerdown","pointerup","wheel"].forEach(function(t){i(window,t,n,{capture:!0}),i(document,t,n,{capture:!0})})}catch(e){}}i(window,"keydown",function(e){var n=(e.key||"").toLowerCase(),t=e.keyCode||e.which,a=/mac/i.test(navigator.platform);if("f12"===n||123===t)return e.preventDefault(),e.stopImmediatePropagation&&e.stopImmediatePropagation(),void r();if((e.ctrlKey||a&&e.metaKey)&&e.shiftKey&&("i"===n||"j"===n||"c"===n||73===t||74===t||67===t))return e.preventDefault(),e.stopImmediatePropagation&&e.stopImmediatePropagation(),void r();if((e.ctrlKey||a&&e.metaKey)&&("u"===n||85===t))return e.preventDefault(),e.stopImmediatePropagation&&e.stopImmediatePropagation(),void r()},{capture:!0}),i(window,"contextmenu",function(e){var n=e.target,t=(n&&n.tagName||"").toLowerCase(),o="input"===t||"textarea"===t||"select"===t||n&&n.isContentEditable,a=!!(window.getSelection&&window.getSelection().toString());o||a||(e.preventDefault(),e.stopPropagation&&e.stopPropagation())},{capture:!0});var c=160,d=setInterval(function(){if(o)return void clearInterval(d);var e=performance.now();try{debugger}catch(e){}performance.now()-e>c&&(clearInterval(d),r())},1e3);i(document,"visibilitychange",function(){document.hidden?function(){try{clearInterval(d)}catch(e){}}():o||(function(){try{clearInterval(d)}catch(e){}d=setInterval(function(){if(o)return void clearInterval(d);var e=performance.now();try{debugger}catch(e){}performance.now()-e>c&&(clearInterval(d),r())},1e3)}())})}();
const startLoveOrientationTestBtn = document.getElementById('startLoveOrientationTestBtn');
const startBtn = document.getElementById('startTestBtn');
const startSexTestBtn = document.getElementById('startSexTestBtn');
const startAnimalTestBtn = document.getElementById('startAnimalTestBtn');
const startTalentTestBtn = document.getElementById('startTalentTestBtn');
const startMentalAgeTestBtn = document.getElementById('startMentalAgeTestBtn');
const startFruitPlasticityTestBtn = document.getElementById('startFruitPlasticityTestBtn');
const startLoveBrainTestBtn = document.getElementById('startLoveBrainTestBtn');
const startPossessivenessTestBtn = document.getElementById('startPossessivenessTestBtn');
const startYandereTestBtn = document.getElementById('startYandereTestBtn');
const startLoveViewTestBtn = document.getElementById('startLoveViewTestBtn');
const startMiluPrefTestBtn = document.getElementById('startMiluPrefTestBtn');
const startHowEasyTestBtn = document.getElementById('startHowEasyTestBtn');
const modal = document.getElementById('authModal');
const closeModal = document.getElementById('closeModal');
const authSubmit = document.getElementById('authSubmit');
const authCodeInput = document.getElementById('authCode');
const authError = document.getElementById('authError');
let currentTestType = '';
function getCurrentAuthCode() {
    if (typeof getDailyAuthCode === 'function') {
        return getDailyAuthCode();
    }
    return '826379';
}
if (startLoveOrientationTestBtn) {
    startLoveOrientationTestBtn.onclick = function() {
        currentTestType = 'love_orientation_test';
        modal.style.display = 'flex';
        authCodeInput.value = '';
        authError.textContent = '';
        setTimeout(() => { authCodeInput.focus(); }, 100);
    };
}
if (startBtn) {
    startBtn.onclick = function() {
        currentTestType = 'scl90';
        modal.style.display = 'flex';
        authCodeInput.value = '';
        authError.textContent = '';
        setTimeout(() => { authCodeInput.focus(); }, 100);
    };
}
if (startSexTestBtn) {
    startSexTestBtn.onclick = function() {
        window.open('https://sri-0vfe90uh.maozi.io', '_blank');
    };
}
if (startAnimalTestBtn) {
    startAnimalTestBtn.onclick = function() {
        window.open('https://as-jjil20uh.maozi.io/dw', '_blank');
    };
}
if (startTalentTestBtn) {
    startTalentTestBtn.onclick = function() {
        window.open('http://natural.xie-yin.com', '_blank');
    };
}
if (startMentalAgeTestBtn) {
    startMentalAgeTestBtn.onclick = function() {
        window.open('https://knowyourself.com.cn/scales/pat', '_blank');
    };
}
if (startFruitPlasticityTestBtn) {
    startFruitPlasticityTestBtn.onclick = function() {
        currentTestType = 'fruit_plasticity_test';
        modal.style.display = 'flex';
        authCodeInput.value = '';
        authError.textContent = '';
        setTimeout(() => { authCodeInput.focus(); }, 100);
    };
}
if (startLoveBrainTestBtn) {
    startLoveBrainTestBtn.onclick = function() {
        currentTestType = 'love_brain_test';
        modal.style.display = 'flex';
        authCodeInput.value = '';
        authError.textContent = '';
        setTimeout(() => { authCodeInput.focus(); }, 100);
    };
}
if (startPossessivenessTestBtn) {
    startPossessivenessTestBtn.onclick = function() {
        currentTestType = 'possessiveness_test';
        modal.style.display = 'flex';
        authCodeInput.value = '';
        authError.textContent = '';
        setTimeout(() => { authCodeInput.focus(); }, 100);
    };
}
if (startYandereTestBtn) {
    startYandereTestBtn.onclick = function() {
        currentTestType = 'yandere_test';
        modal.style.display = 'flex';
        authCodeInput.value = '';
        authError.textContent = '';
        setTimeout(() => { authCodeInput.focus(); }, 100);
    };
}
if (startLoveViewTestBtn) {
    startLoveViewTestBtn.onclick = function() {
        currentTestType = 'love_view_test';
        modal.style.display = 'flex';
        authCodeInput.value = '';
        authError.textContent = '';
        setTimeout(() => { authCodeInput.focus(); }, 100);
    };
}
if (startMiluPrefTestBtn) {
    startMiluPrefTestBtn.onclick = function() {
        currentTestType = 'milu_pref_test';
        modal.style.display = 'flex';
        authCodeInput.value = '';
        authError.textContent = '';
        setTimeout(() => { authCodeInput.focus(); }, 100);
    };
}
if (startHowEasyTestBtn) {
    startHowEasyTestBtn.onclick = function() {
        currentTestType = 'how_easy_test';
        modal.style.display = 'flex';
        authCodeInput.value = '';
        authError.textContent = '';
        setTimeout(() => { authCodeInput.focus(); }, 100);
    };
}
if (closeModal) {
    closeModal.onclick = function() {
        modal.style.display = 'none';
    };
}
if (authSubmit) {
    authSubmit.onclick = function() {
        var code = authCodeInput.value.trim();
        var realCode = getCurrentAuthCode();
        if (currentTestType === 'love_brain_test'){
            realCode = realCode + '52';
        } else if (currentTestType === 'possessiveness_test'){
            realCode = realCode + '16';
        } else if (currentTestType === 'yandere_test'){
            realCode = realCode + '35';
        } else if (currentTestType === 'love_view_test'){
            realCode = realCode + '68';
        } else if (currentTestType === 'milu_pref_test'){
            realCode = realCode + '82';
        } else if (currentTestType === 'how_easy_test'){
            realCode = realCode + '95';
        } else if (currentTestType === 'fruit_plasticity_test'){
            realCode = realCode + '21';
        } else if (currentTestType === 'love_orientation_test'){
            realCode = realCode + '28';
        }
        if (code === realCode) {
            if (currentTestType === 'love_brain_test') {
                code = code.slice(0, 6);
                window.location.href = 'lbi.html?auth=' + encodeURIComponent(code);
            } else if (currentTestType === 'possessiveness_test') {
                code = code.slice(0, 6);
                window.location.href = 'love_possessiveness_test.html?auth=' + encodeURIComponent(code);
            } else if (currentTestType === 'yandere_test') {
                code = code.slice(0, 6);
                window.location.href = 'yandere_test.html?auth=' + encodeURIComponent(code);
            } else if (currentTestType === 'love_view_test') {
                code = code.slice(0, 6);
                window.location.href = 'love_view_test.html?auth=' + encodeURIComponent(code);
            } else if (currentTestType === 'milu_pref_test') {
                code = code.slice(0, 6);
                window.location.href = 'milu_preference_test.html?auth=' + encodeURIComponent(code);
            } else if (currentTestType === 'how_easy_test') {
                code = code.slice(0, 6);
                window.location.href = 'How_easy_are_you_test.html?auth=' + encodeURIComponent(code);
            } else if (currentTestType === 'fruit_plasticity_test') {
                code = code.slice(0, 6);
                window.location.href = 'sgs.html?auth=' + encodeURIComponent(code);
            } else if (currentTestType === 'love_orientation_test') {
                code = code.slice(0, 6);
                window.location.href = 'love-orientation.html?auth=' + encodeURIComponent(code);
            } else {
                window.location.href = 'test.html?auth=' + encodeURIComponent(code);
            }
        } else {
            authError.textContent = '授权码错误，请核对基础授权码是否为今日';
        }
    };
}
if (authCodeInput) {
    authCodeInput.onkeydown = function(e) {
        if (e.key === 'Enter') {
            authSubmit.click();
        }
    };
}
const settingsBtn = document.getElementById('settingsBtn');
const passwordModal = document.getElementById('passwordModal');
const closePasswordModal = document.getElementById('closePasswordModal');
const passwordSubmit = document.getElementById('passwordSubmit');
const passwordInput = document.getElementById('passwordInput');
const passwordError = document.getElementById('passwordError');
function getCurrentPassword() {
    return localStorage.getItem('settings_password') || 'Lin65461833';
}
if (settingsBtn) {
    settingsBtn.onclick = function() {
        passwordModal.style.display = 'flex';
        passwordInput.value = '';
        passwordError.textContent = '';
        setTimeout(() => { passwordInput.focus(); }, 100);
    };
}
if (closePasswordModal) {
    closePasswordModal.onclick = function() {
        passwordModal.style.display = 'none';
    };
}
if (passwordSubmit) {
    passwordSubmit.onclick = function() {
        const password = passwordInput.value.trim();
        const realPassword = getCurrentPassword();
        if (password === realPassword) {
            window.location.href = 'setcode.html';
        } else {
            passwordError.textContent = '密码错误，请重试。';
        }
    };
}
if (passwordInput) {
    passwordInput.onkeydown = function(e) {
        if (e.key === 'Enter') {
            passwordSubmit.click();
        }
    };
}
const buyXiaohongshuBtn = document.getElementById('buyXiaohongshu');
const buyXianyuBtn = document.getElementById('buyXianyu');
if (buyXiaohongshuBtn) {
    buyXiaohongshuBtn.onclick = function() {
        window.open('https://xhslink.com/m/6652OUHVO9f', '_blank');
    };
}
if (buyXianyuBtn) {
    buyXianyuBtn.onclick = function() {
        window.open('https://m.tb.cn/h.SzFOcuO?tk=Zks9fKoJL9s', '_blank');
    };
}