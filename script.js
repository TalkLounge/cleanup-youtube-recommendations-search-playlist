// ==UserScript==
// @name         Cleanup YouTube Search
// @version      1.0.1
// @description  Deletes "Users have also seen", "For you" and "Similar searches" Sections from Youtube Search Results
// @author       TalkLounge (https://github.com/TalkLounge)
// @namespace    https://github.com/TalkLounge/cleanup-youtube-search
// @license      MIT
// @match        https://www.youtube.com*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    function cleanup() {
        if (! window.location.href.startsWith("https://www.youtube.com/results")) {
            return;
        }

        var shelfs = document.getElementsByTagName("ytd-shelf-renderer");
        for (var i = 0; i < shelfs.length; i++) {
            shelfs[i].remove();
        }

        shelfs = document.getElementsByTagName("ytd-horizontal-card-list-renderer");
        for (var i = 0; i < shelfs.length; i++) {
            shelfs[i].remove();
        }
    }

    cleanup();
    setInterval(function () {
        cleanup();
    }, 1000);
})();
