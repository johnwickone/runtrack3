window.addEventListener("scroll", function() {
    const scrollTop = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const percent = scrollTop / maxScroll;

    const red = Math.round(255 * percent);
    const green = Math.round(255 * (1 - percent));

    document.querySelector("footer").style.backgroundColor =
        `rgb(${red}, ${green}, 0)`;
});
