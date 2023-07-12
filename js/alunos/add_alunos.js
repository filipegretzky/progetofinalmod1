const buscarturma = async (id) => {
    const response = await fetch(`http://localhost:3000/turmas/${id}`)
    const turma = await response.json()
    return turma
    
}

const buscarturmas = async () => {
    const response = await fetch(`http://localhost:3000/turmas`)
    const turmas = await response.json()
    return turmas
}

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

const cadastraalunos = async (alunos) => {
    await fetch(`http://localhost:3000/alunos`,{
        method: 'POST',
        headers: {
          "Accept": 'application/json, text/plain, */*',
          "Content-Type": 'application/json'
        },
        body: JSON.stringify(alunos)

    })
    window.location= 'alunos.html'
}