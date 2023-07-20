const voltar = () => {
    window.location = 'monitores.html'
}
const formulario = document.getElementById('formulario')
formulario.addEventListener('submit', (e) => {
    e.preventDefault()

    const nome = formulario.elements['nome'].value
    const email = formulario.elements['email'].value

    const mentores ={
        nome,
        email,
    }
    cadastramentor(mentores)
})

const cadastramentor = async (mentores) => {
    await fetch(`https://progetofinalmod1.onrender.com/mentores`,{
        method: 'POST',
        headers: {
          "Accept": 'application/json, text/plain, */*',
          "Content-Type": 'application/json'
        },
        body: JSON.stringify(mentores)
    })
    window.location= 'monitores.html'
}

