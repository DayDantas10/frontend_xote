const botaoCompositores = document.querySelector("#Compositores");

botaoCompositores.addEventListener("click",() => {
    fetch("http://localhost:5000/compositores").then(response => {
        if (!response.ok){
            console.log("Falha");
        }
        return response.json();
    }).then(dados => {
        const ul = document.querySelector("#compositores");
        dados.array.forEach(element => {
            let li = document.createElement("li");
            li.textContent = element.nome;
            ul.appendChild(li);
        });        
    });
});