function showhide() {
    let article = document.querySelector("article");

    if (article) {
        article.remove();
    } else {
        article = document.createElement("article");
        article.textContent = "L'important n'est pas la chute, mais l'atterrissage.";
        document.body.appendChild(article);
    }
}
