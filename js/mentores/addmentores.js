//funçao do botao de voltar
const voltar = () => {
    window.location = 'monitores.html'
}


const formulario = document.getElementById('formulario')

//evento que manda o formulario para ser salvo na api
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


// funçao que adiciona e salva o conteudo do evento na api
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

//funçoes do menu 
const mentoria = () => {
    window.location = '../mentorias/mentorias.html' 
}
const mentores = () => {
    window.location = 'monitores.html' 
}
const turmas = () => {
    window.location = '../turmas/turmas.html'
}
const alunos = () => {
    window.location = '../alunos/alunos.html'
}
