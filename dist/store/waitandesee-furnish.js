// ==UserScript==
// @name                waitandesee-furnish
// @namespace           waitandesee-furnish-5923078164
// @version             1.0.0
// @description         Notion video enhancer
// @author              boccaro
// @copyright           boccaro
// @license             MIT
// @match               https://boccaro.notion.site/*
// @require             https://cdn.jsdelivr.net/npm/dplayer@1/dist/DPlayer.min.js

// @run-at              document-idle
// @supportURL          https://github.com/forestsheep911/monkey-notion-video-enhancer/issues
// @homepage            https://github.com/forestsheep911/monkey-notion-video-enhancer
// @grant               GM_getResourceText
// @grant               GM_addStyle
// @icon                https://img.icons8.com/external-vitaliy-gorbachev-blue-vitaly-gorbachev/60/external-player-stay-home-vitaliy-gorbachev-blue-vitaly-gorbachev.png
// ==/UserScript==
/* eslint-disable */ /* spell-checker: disable */
// @[ You can find all source codes in GitHub repo ]
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 752:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var removeHeightAttributes_1 = __webpack_require__(584);
var videoEnhancer_1 = __webpack_require__(538);
var app = function () {
    var executeFunctions = function () {
        setTimeout(function () {
            (0, videoEnhancer_1.enhanceVideo)();
            (0, removeHeightAttributes_1.removeHeightAttributes)();
        }, 3000);
    };
    var oldURL = location.href;
    // 监听URL变化
    var observeUrlChange = function () {
        var observer = new MutationObserver(function () {
            if (location.href !== oldURL) {
                oldURL = location.href;
                executeFunctions();
            }
        });
        observer.observe(document, { subtree: true, childList: true });
    };
    // 初次执行
    executeFunctions();
    observeUrlChange();
};
exports["default"] = app;


/***/ }),

/***/ 607:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var app_1 = __importDefault(__webpack_require__(752));
if (true) {
    (0, app_1.default)();
}
else {}


/***/ }),

/***/ 584:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.removeHeightAttributes = void 0;
var removeHeightAttributes = function () {
    var startRemovingHeight = function () {
        var parentElement = null;
        // 判断 URL 来选择父元素
        if (window.location.href.includes('f47ef8788acb4e12b604011e95fb1738')) {
            parentElement = document.querySelector('.notion-gallery-view');
        }
        else {
            parentElement = document.querySelector('[data-block-id="f47ef878-8acb-4e12-b604-011e95fb1738"]');
        }
        if (!parentElement) {
            console.warn('No appropriate parent element found');
            return;
        }
        var removeHeight = function (element) {
            var elementsWithHeight = element.querySelectorAll('.notion-gallery-view [style*="height"]');
            elementsWithHeight.forEach(function (elem) {
                var style = elem.getAttribute('style');
                if (style) {
                    var newStyle = style.replace(/height:\s*[0-9.]+px;?/g, '');
                    elem.setAttribute('style', newStyle);
                }
            });
        };
        // 初始处理
        console.log('Removing height attributes for elements within the parent element');
        removeHeight(parentElement);
        // 使用 MutationObserver 监视新元素的添加
        var observer = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
                mutation.addedNodes.forEach(function (node) {
                    if (node.nodeType === Node.ELEMENT_NODE) {
                        var element = node;
                        removeHeight(element);
                    }
                });
            });
        });
        // 观察 parentElement 的子树变化
        observer.observe(parentElement, {
            childList: true,
            subtree: true,
        });
        console.log('Height attributes removal observer set up for elements within the parent element');
    };
    // 延迟处理，确保内容加载完毕
    setTimeout(startRemovingHeight, 3000);
    // 监听窗口 resize 事件
    window.addEventListener('resize', function () {
        console.log('Window resized, removing height attributes again.');
        setTimeout(startRemovingHeight, 300);
    });
};
exports.removeHeightAttributes = removeHeightAttributes;


/***/ }),

/***/ 538:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.enhanceVideo = void 0;
var dplayer_1 = __importDefault(__webpack_require__(971));
var enhanceVideo = function () {
    var isPlayerChanged = false;
    function changerPlayer(videoBlocks) {
        videoBlocks.forEach(function (video) {
            var _a, _b, _c;
            var dpElement = document.createElement('div');
            new dplayer_1.default({
                container: dpElement,
                video: {
                    url: video.getAttribute('src') || '',
                    type: 'auto',
                },
            });
            var parent4 = (_c = (_b = (_a = video.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.parentElement) === null || _c === void 0 ? void 0 : _c.parentElement;
            console.log('parent4', parent4);
            console.log('dpElement', dpElement);
            // parent4?.parentElement?.insertBefore(dpElement, parent4)
            // parent4?.style.setProperty('display', 'none')
        });
        isPlayerChanged = true;
    }
    var checkAndChangePlayer = function () {
        var videoBlocks = document.querySelectorAll('video');
        if (videoBlocks.length === 0 || isPlayerChanged) {
            return;
        }
        changerPlayer(videoBlocks);
    };
    // 初次3秒后检查
    setTimeout(checkAndChangePlayer, 3000);
    // 30秒后再次检查
    setTimeout(checkAndChangePlayer, 30000);
};
exports.enhanceVideo = enhanceVideo;


/***/ }),

/***/ 971:
/***/ ((module) => {

module.exports = DPlayer;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(607);
/******/ 	
/******/ })()
;