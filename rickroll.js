let rickroll = () => {
    if (window.location.href.startsWith("https://www.youtube.com/")) {
        const elements = document.querySelectorAll('*,ytd-ad-slot-renderer.ytd-watch-next-secondary-results-renderer, ytd-compact-video-renderer.ytd-watch-next-secondary-results-renderer:not([expansion=collapsed]), ytd-compact-radio-renderer.ytd-watch-next-secondary-results-renderer, ytd-compact-movie-renderer.ytd-watch-next-secondary-results-renderer, ytd-compact-playlist-renderer.ytd-watch-next-secondary-results-renderer, ytd-compact-promoted-video-renderer.ytd-watch-next-secondary-results-renderer, ytd-promoted-sparkles-web-renderer.ytd-watch-next-secondary-results-renderer');
        elements.forEach((element) => {
            element.addEventListener('click', (e) => {
                e.preventDefault();
                window.location.replace('https://youtu.be/dQw4w9WgXcQ');
                if (!window.location.href.endsWith('https://youtu.be/dQw4w9WgXcQ')) {
                    e.preventDefault();
                    window.location.replace('https://youtu.be/dQw4w9WgXcQ');
                }
            });
      });
    }
};

window.onload = rickroll;
window.onclick = rickroll;