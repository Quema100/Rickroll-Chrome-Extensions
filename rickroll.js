let rickroll = () => {
    if (window.location.href === "https://www.youtube.com/") {
        window.addEventListener('click', () => {
            window.location.href = "https://youtu.be/v_gO_P8gug8";
        });
    };
};

window.onload = rickroll;
window.onclick = rickroll;