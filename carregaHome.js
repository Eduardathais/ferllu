const URL = "https://q45rmviz.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%22homeRecentes%22%5D+%7B%0A++nome%2C+%0A++%22imagem%22%3A+imagem.asset-%3Eurl%0A%7D"
window.addEventListener("load", async function(){
    const resultado = await fetch ( URL, {
        method: "GET",
    });

    const json = await resultado.json();
    const container = this.document.querySelector("div.recentes-container")
    
    for (let i = 0; i < json.result.length; i++) {
        const h1  = this.document.createElement("h1")
        h1.innerText = json.result[i].nome
        h1.classList.add("titulo")
        const saibamais  = this.document.createElement("button")
        saibamais.innerText = "Veja Mais"
        saibamais.classList.add("veja-mais")

        const botaorecentes  = this.document.createElement("button")
        botaorecentes.classList.add("botao-recentes")

        const imagem = this.document.createElement("img")
        imagem.setAttribute("src", json.result[1].imagem)
        const divrecente  = this.document.createElement("div")
        divrecente.classList.add("recentes")
        divrecente.append(imagem)
        divrecente.append(botaorecentes,h1, saibamais)
        container.append(divrecente)
    }
})

//*[_type == "homeRecentes"] {
//    nome, 
//    "imagem": imagem.asset->url
//  }