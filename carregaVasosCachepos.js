const URL = "https://q45rmviz.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%22cadastroItensJardinagem%22%5D+%7B%0A++++++++nome%2C+%0A++++++++%22imagem%22%3A+imagem.asset-%3Eurl%0A++++%7D&perspective=published";

window.addEventListener("load", async function() {
    const resultado = await fetch(URL, {
        method: "GET",
    });

    const json = await resultado.json();
    const containerSecao = this.document.querySelector("div.secao2");

    const h1Titulo = this.document.querySelector("h1.titulo1");
    h1Titulo.innerText = "VASOS E CACHEPÔS";

    for (let i = 0; i < json.result.length; i++) {
        const h1 = this.document.createElement("h1");
        h1.innerText = json.result[i].nome;
        h1.classList.add("titulo");
        
        const botaodestaques = this.document.createElement("button");
        botaodestaques.classList.add("botao-destaques");

        const img = this.document.createElement("img");
        img.setAttribute("src", json.result[i].imagem);
        img.classList.add("img-destaques");

        const divdestaques = this.document.createElement("div");
        divdestaques.classList.add("destaques");

        botaodestaques.append(img);
        divdestaques.append(botaodestaques, h1);
        containerSecao.append(divdestaques);
    }
});