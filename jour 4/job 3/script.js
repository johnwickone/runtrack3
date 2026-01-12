document.getElementById("filter").addEventListener("click", () => {

    fetch("pokemon.json")
        .then(response => response.json())
        .then(data => {
            let id = document.getElementById("id").value;
            let nom = document.getElementById("nom").value.toLowerCase();
            let type = document.getElementById("type").value;

            let result = data.filter(pokemon => {
                return (
                    (id === "" || pokemon.id == id) &&
                    (nom === "" || pokemon.name.french.toLowerCase().includes(nom)) &&
                    (type === "" || pokemon.type.includes(type))
                );
            });

            let div = document.getElementById("result");
            div.innerHTML = "";

            result.forEach(p => {
                div.innerHTML += `<p>${p.id} - ${p.name.french} (${p.type.join(", ")})</p>`;
            });
        });
});
