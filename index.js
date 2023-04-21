

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



document.addEventListener('DOMContentLoaded', function() {
    load('Inicio')

    
});




