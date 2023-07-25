const formulario = document.getElementById('formulario')

mentorid = null

const getidurl = () => {
    const paramString = window.location.search
    const pararms = new URLSearchParams(paramString)

    mentorid = pararms.get('id')
}
  const buscamentor = async () => {
    const response = await fetch (`https://progetofinalmod1.onrender.com/mentores/${mentorid}`)
    const mentor = await response.json()
    return mentor
}
formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    const nome = formulario.elements['nome'].value 
    const email = formulario.elements['email'].value

    const mentor = {
        nome,
        email,
    }
    editarmentor(mentor)
})
 
const carregardadosdoformulario = async (mentor) => {
    document.getElementById('nome').value = mentor.nome
    document.getElementById('email').value = mentor.email
}
 const editarmentor = async (mentor) => {
    await fetch (`https://progetofinalmod1.onrender.com/mentores/${mentorid}`, {
        method: 'PUT',
        headers: {
          "Accept": 'application/json, text/plain, */*',
          "Content-Type": 'application/json'
        },
        body: JSON.stringify(mentor)
    })
    window.location='monitores.html'
 }
 const carregardados= async () => {
    getidurl()
    const mentor = await buscamentor()

    carregardadosdoformulario(mentor)
 }
 carregardados()
 const voltar = () => {
    window.location = 'monitores.html'
}
const mentoria = ()=> {
    window.location = '../mentorias/mentorias.html'
}
const turmas = ()=> {
    window.location = '../turmas/turmas.html'
}
const alunos = () => {
    window.location = '../alunos/alunos.html'
}
const mentores = () => {
    window.location = 'monitores.html'
}