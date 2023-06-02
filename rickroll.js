let rickroll = () => {
    if (window.location.href.startsWith("https://www.youtube.com/")) {
        const elements = document.querySelectorAll('*');
        elements.forEach((element) => {
            element.addEventListener('click', (e) => {
                e.preventDefault();
                window.location.replace('https://youtu.be/dQw4w9WgXcQ');
            });
      });
      window.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.replace('https://youtu.be/dQw4w9WgXcQ');
    });
    }
};

window.onload = rickroll;
window.onclick = rickroll;