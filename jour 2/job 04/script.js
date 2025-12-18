const textarea = document.getElementById("keylogger");

document.addEventListener("keydown", function(event) {
    
    if (event.key.length === 1 && event.key.match(/[a-zA-Z]/)) {
        let letter = event.key;

        if (document.activeElement === textarea) {
            textarea.value += letter + letter;
        } else {
            textarea.value += letter;
        }
    }
});
