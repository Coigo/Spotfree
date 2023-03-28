

const targetEl = document.querySelector('.Main')
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

window.onload = load('Inicio')
