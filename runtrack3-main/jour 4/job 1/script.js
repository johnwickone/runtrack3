document.getElementById("button").addEventListener("click", () => {
    fetch("expression.txt")
        .then(response => response.text())
        .then(data => {
            let p = document.createElement("p");
            p.textContent = data;
            document.body.appendChild(p);
        });
});
