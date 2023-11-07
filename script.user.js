// ==UserScript==
// @name            Cleanup YouTube Recommendations in Search and Playlist
// @name:de         Bereinige YouTube Empfehlungen in der Suche und bei Playlisten
// @version         1.1.3
// @description     Deletes "Popular videos from today", "Users have also seen", "New channels for you", "For you", "Already viewed", "Recommended playlists" and "Recommended videos" Sections from Search Results and Playlists on YouTube
// @description:de  Entfernt die Abschnitte "Beliebte Videos von heute", Nutzer haben auch gesehen", "Neue Kanäle für dich", "Für mich", "Schon angesehen", "Empfohlene Playlists" und "Empfohlene Videos" aus den Suchergebnissen und aus Playlisten auf YouTube
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
            document.querySelector('ytd-item-section-renderer[is-playlist-video-container]')?.remove(); // Recommended videos
            document.querySelector('ytd-item-section-renderer[is-playlist-shelf]')?.remove(); // Recommended playlists
            document.querySelector('ytd-continuation-item-renderer:nth-child(2)')?.remove(); // Loading circle
        }

        if (window.location.href.startsWith("https://www.youtube.com/results")) {
            [...document.querySelectorAll("ytd-shelf-renderer")].forEach(item => item.remove()); // Sections: Popular videos from today, Users have also seen, New channels for you, For you, Already viewed
            [...document.querySelectorAll("ytd-horizontal-card-list-renderer")].forEach(item => item.remove());
        }
    }

    cleanup();
    setInterval(cleanup, 500);
})();
