const URL = "https://q45rmviz.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%22home%22%5D+%7B%0A++nome%0A%7D"
window.addEventListener("load", async function(){
    const resultado = await fetch ( URL, {
        method: "GET",
    });

    const json = await resultado.json();

    const target = this.document.querySelector("div.recentes")

    for (let i = 0; i < json.result.length; i++) {
        const h3  = this.document.createElement("h3")
        h3.innerText = json.result[i].nome
        //const p  = this.document.createElement("p")
        //h3.innerText = json.result[i].descricao
//
        //const hr  = this.document.createElement("hr")

        const div  = this.document.createElement("div")
        div.classList.add("recentes")

        div.append(h3)
        target.append(div)


    }
})