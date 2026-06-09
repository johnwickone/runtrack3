function showMessage() {
    console.log("Ceci est un message dans la console !");
}

document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector("#popupButton");
    if (button) {
        button.addEventListener("click", showMessage);
    }
});
