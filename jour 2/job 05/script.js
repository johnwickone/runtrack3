console.log("Script du Job 01 chargé !");

const footer = document.querySelector("footer");

function updateFooterColor() {
    const scrollTop = window.scrollY; 
    const docHeight = document.body.scrollHeight - window.innerHeight; 
    const scrollPercent = (scrollTop / docHeight) * 100; 

    const red = 255 - Math.round((scrollPercent / 100) * 255);
    const green = Math.round((scrollPercent / 100) * 255);

    footer.style.backgroundColor = `rgb(${red}, ${green}, 0)`;
}

window.addEventListener("scroll", updateFooterColor);
