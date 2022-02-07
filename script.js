// ==UserScript==
// @name            Cleanup YouTube Search
// @name:de         YouTube Suche bereinigen
// @version         1.0.2
// @description     Deletes "Users have also seen", "For you" and "Similar searches" Sections from Youtube Search Results
// @description:de  Entfernt die Abschnitte "Nutzer haben auch gesehen", "Für mich" und "Ähnliche Suchanfragen" aus den Youtube-Suchergebnissen
// @author          TalkLounge (https://github.com/TalkLounge)
// @namespace       https://github.com/TalkLounge/cleanup-youtube-search
// @license         MIT
// @match           https://www.youtube.com/results?search_query=*
// @grant           none
// ==/UserScript==

(function () {
    'use strict';

    function cleanup() {

        var shelfs = document.getElementsByTagName("ytd-shelf-renderer");
        for (var i = 0; i < shelfs.length; i++) {
            shelfs[i].remove();
        }

        shelfs = document.getElementsByTagName("ytd-horizontal-card-list-renderer");
        for (i = 0; i < shelfs.length; i++) {
            shelfs[i].remove();
        }
    }

    cleanup();
    setInterval(function () {
        cleanup();
    }, 1000);
})();
