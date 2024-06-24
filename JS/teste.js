const botaoArtistas = document.querySelector("#botaoArtistas");


botaoArtistas.addEventListener("click",() => {
    fetch("http://localhost:5000/artistas").then(response => {
        if (!response.ok){
            console.log("Falha");
        }
        return response.json();
    }).then(dados => {
        const ul = document.querySelector("#artistas");
        dados.forEach(element => {
            console.log(element);
            let li = document.createElement("li");
            li.textContent = element.nome_artista;
            ul.appendChild(li);
        });        
    });
});

