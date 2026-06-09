function showPopup() {
    alert("Ceci est une popup !");
}

document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector("#popupButton");
    if (button) {
        button.addEventListener("click", showPopup);
    }
});
