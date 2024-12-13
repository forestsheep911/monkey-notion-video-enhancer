// ==UserScript==
// @name                wapaw-enhancer
// @namespace           wapaw-enhancer-5923078164
// @version             1.0.2
// @description         观影网站加强体验
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
    // 立即执行手动视频增强功能
    (0, videoEnhancer_1.enhanceVideo)();
    var executeFunctions = function () {
        // 只对自动触发的功能使用延迟
        setTimeout(function () {
            // 这里可以只保留需要等待DOM加载的功能
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
                // URL变化时也需要重新初始化视频增强功能
                // enhanceVideo()
            }
        });
        observer.observe(document, { subtree: true, childList: true });
    };
    // 初始执行
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
    // 跟踪已增强的视频
    var enhancedVideos = new Set();
    var replaceVideoPlayer = function () {
        // 明确指定 HTMLVideoElement 类型
        var videos = document.querySelectorAll('video:not([data-enhanced])');
        videos.forEach(function (element) {
            // 类型断言
            var video = element;
            // 使用可选链和空值检查
            var videoId = video.src || Math.random().toString();
            if (enhancedVideos.has(videoId)) {
                return;
            }
            // 类型安全的父元素检查
            var parentElement = video.parentElement;
            if (!parentElement) {
                return;
            }
            // 检查现有播放器
            var existingPlayer = parentElement.querySelector('.dplayer');
            if (existingPlayer) {
                return;
            }
            try {
                var dpElement = document.createElement('div');
                dpElement.className = 'custom-dplayer';
                new dplayer_1.default({
                    container: dpElement,
                    video: {
                        url: video.src || '',
                        type: 'auto',
                    },
                });
                parentElement.insertBefore(dpElement, video);
                video.style.display = 'none';
                video.setAttribute('data-enhanced', 'true');
                enhancedVideos.add(videoId);
            }
            catch (err) {
                console.error('Failed to enhance video:', err);
            }
        });
    };
    // 使用类型安全的防抖
    var timeout;
    var debouncedReplace = function () {
        clearTimeout(timeout);
        timeout = setTimeout(replaceVideoPlayer, 500);
    };
    // 使用类型化的事件处理器
    var handler = function (e) {
        if (e.altKey && e.key.toLowerCase() === 'z') {
            e.preventDefault();
            debouncedReplace();
        }
    };
    document.removeEventListener('keydown', handler);
    document.addEventListener('keydown', handler);
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