const konami = [
    "ArrowUp","ArrowUp","ArrowDown","ArrowDown",
    "ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"
];

let index = 0;

document.addEventListener("keydown", function(e) {
    if(e.key === konami[index]) {
        index++;
        if(index === konami.length) {
            document.body.classList.add("konami");
            index = 0;
        }
    } else {
        index = 0;
    }
});
