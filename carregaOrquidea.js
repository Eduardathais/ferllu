const URL =
  "https://q45rmviz.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%22cadastroOrquideas%22%5D+%7B%0A++++++++nome%2C+%0A++++++++%22imagem%22%3A+imagem.asset-%3Eurl%0A++++%7D&perspective=previewDrafts"
window.addEventListener("load", async function () {
  const resultado = await fetch(URL, {
    method: "GET",
  });

  const json = await resultado.json();
  const container = document.querySelector("div.recentes-container");

  for (let i = 0; i < json.result.length; i++) {

    const h1 = document.createElement("h1");
    h1.innerText = json.result[i].nome;
    h1.classList.add("titulo");

    const botaorecentes = document.createElement("button");
    botaorecentes.classList.add("botao-recentes");

    const imagem = document.createElement("img");
    imagem.setAttribute("src", json.result[i].imagem);
    imagem.setAttribute("alt", json.result[i].nome);
    imagem.classList.add("img-recentes");

    const divrecente = document.createElement("div");
    divrecente.classList.add("recentes");

    botaorecentes.append(imagem);
    divrecente.append(botaorecentes, h1);
    container.append(divrecente);
  }
});
