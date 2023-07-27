const formulario = document.getElementById('formulario')

//inicio a variavel do id do iten editato
 let mentorid = null

 // onde eu vejo o id da url e passo para minha variavel
const getidurl = () => {
    const paramString = window.location.search
    const pararms = new URLSearchParams(paramString)

    mentorid = pararms.get('id')
}

//a funçao  onde eu busco o item que vai ser editado 
  const buscamentor = async () => {
    const response = await fetch (`https://progetofinalmod1.onrender.com/mentores/${mentorid}`)
    const mentor = await response.json()
    return mentor
}

//o evento que eu vou manda o conteudo quando editado
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
 
// a funçao onde carrego os dados da api no meu formulario
const carregardadosdoformulario = async (mentor) => {
    document.getElementById('nome').value = mentor.nome
    document.getElementById('email').value = mentor.email
}

// a funçao onde eu salvo o conteudo editado
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

 //a funçao onde eu chamo as outras funçoes 
 const carregardados= async () => {
    getidurl()
    const mentor = await buscamentor()

    carregardadosdoformulario(mentor)
 }
 carregardados()

 //fumçoes do menu
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