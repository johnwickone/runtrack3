function citation() {
    let article = document.getElementById("citation");

    if (article.style.display === "none") {
        article.style.display = "block";
    } else {
        article.style.display = "none";
    }
}

document.getElementById("button").addEventListener("click", citation);
