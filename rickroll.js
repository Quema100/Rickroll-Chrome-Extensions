let rickroll = () => {
    if (window.location.href.startsWith("https://www.youtube.com/")) {
        const elements = document.querySelectorAll('*');
        elements.forEach((element) => {
            element.addEventListener('click', (e) => {
                e.preventDefault();
                if (!window.location.href.endsWith('https://youtu.be/dQw4w9WgXcQ')) {
                    window.location.replace('https://youtu.be/dQw4w9WgXcQ');
                }
            });
         
      });
    }
};

window.onload = rickroll;
window.onclick = rickroll;