// ==UserScript==
// @name            Cleanup YouTube Recommendations in Search and Playlist
// @name:de         Bereinige YouTube Empfehlungen in der Suche und bei Playlisten
// @version         1.1.2
// @description     Deletes "Users have also seen", "For you", "Similar searches" and "Recommended videos" Sections from Search Results and Playlists on YouTube
// @description:de  Entfernt die Abschnitte "Nutzer haben auch gesehen", "Für mich", "Ähnliche Suchanfragen" und "Empfohlene Videos" aus den Suchergebnissen und aus Playlisten auf YouTube
// @icon            https://www.google.com/s2/favicons?domain=youtube.com
// @author          TalkLounge (https://github.com/TalkLounge)
// @namespace       https://github.com/TalkLounge/cleanup-youtube-recommendations-search-playlist
// @license         MIT
// @match           https://www.youtube.com/*
// @grant           none
// ==/UserScript==

(function () {
    'use strict';

    function cleanup() {
        if (window.location.href.startsWith("https://www.youtube.com/playlist")) {
            try {
                document.querySelector('ytd-item-section-renderer[page-subtype="playlist"]:nth-child(2)').remove();
            } catch (e) {}

            try {
                document.querySelector('ytd-item-section-renderer[page-subtype="playlist"]:nth-child(2)').remove();
            } catch (e) {}
        }

        if (window.location.href.startsWith("https://www.youtube.com/results")) {
            let shelfs = document.getElementsByTagName("ytd-shelf-renderer");
            for (let i = 0; i < shelfs.length; i++) {
                shelfs[i].remove();
            }

            shelfs = document.getElementsByTagName("ytd-horizontal-card-list-renderer");
            for (let i = 0; i < shelfs.length; i++) {
                shelfs[i].remove();
            }
        }
    }

    cleanup();
    setInterval(cleanup, 1000);
})();
