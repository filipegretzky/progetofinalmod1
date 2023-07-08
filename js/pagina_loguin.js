const formulario = document.getElementById('formulario')

formulario.addEventListener('submit', (e) => {
    e.preventDefault()

    window.location = 'mentores/monitores.html'
})