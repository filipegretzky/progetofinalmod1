//busca a turma 
const buscarturma = async (id) => {
    const response = await fetch(`https://progetofinalmod1.onrender.com/turmas/${id}`)
    const turma = await response.json()
    return turma
    
}
//busca todas as turmas
const buscarturmas = async () => {
    const response = await fetch(`https://progetofinalmod1.onrender.com/turmas`)
    const turmas = await response.json()
    return turmas
}
// carrega no select
const carregarselect = async () => {
    const turmas = await buscarturmas()
    const turmasselect = document.getElementById('select')
    const opçaovazia = new Option('selecione uma turma..')
    turmasselect.options.add(opçaovazia)

    turmas.forEach(turmas => {
        const opçao = new Option(turmas.turma,turmas.id)
        turmasselect.options.add(opçao)
    });
}
carregarselect()
const formulario = document.getElementById('formulario')
//evento que salva o conteudo para ser adicionado 
formulario.addEventListener('submit', async (e) => {
    e.preventDefault()

    const nome = formulario.elements['nome'].value
    const email = formulario.elements['email'].value
    const turma = formulario.elements['turma'].value

    const turmaobj = await buscarturma(turma)

    const alunos = {
        nome,
        email,
        turma : {
            id : turmaobj.id,
            turma : turmaobj.turma
        }
    }
  cadastraalunos(alunos)
})
//onde adiciona
const cadastraalunos = async (alunos) => {
    await fetch(`https://progetofinalmod1.onrender.com/alunos`,{
        method: 'POST',
        headers: {
          "Accept": 'application/json, text/plain, */*',
          "Content-Type": 'application/json'
        },
        body: JSON.stringify(alunos)

    })
    window.location= 'alunos.html'
}
//butao de voltar
const voltar = () => {
    window.location = 'alunos.html'
}
//funçao do menu
const mentoria = ()=> {
    window.location = '../mentorias/mentorias.html'
}
const turmas = ()=> {
    window.location = '../turmas/turmas.html'
}
const alunos = () => {
    window.location = 'alunos.html'
}
const mentores = () => {
    window.location = '../mentores/monitores.html'
}