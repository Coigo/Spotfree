

const targetEl = document.querySelector('.theMusicSide')

const load = pagina => {
    fetch(`./templates/${pagina}.html`)
    .then(res => {
        if(res.ok){
            return(res.text())
        }
    })
    .then(htmlSnippet => {
        targetEl.innerHTML = htmlSnippet
    })
}


//eu tenho os ids, sei como fazer um historico
// preciso criar 4 cards, e mostrar neles, as 4 ultimas musicas
//cardsinfo = info[i].id algo assim, tenho que dar um jeito de cinseguir fazer uma query  

document.addEventListener('DOMContentLoaded', load('Inicio'))




