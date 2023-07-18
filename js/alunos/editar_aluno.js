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

alunosid = null 
const getidurl = () => {
    const paramString = window.location.search
    const pararms = new URLSearchParams(paramString)

    alunosid = pararms.get('id')
}

const buscaraluno = async () => {
    const response = await fetch(`http://localhost:3000/alunos/${alunosid}`)
    const aluno = await response.json()
    return aluno
}

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
  editaraluno(alunos)
})
 const carregardadosdoformulario = async (alunos) => {
    document.getElementById('nome').value = alunos.nome
    document.getElementById('email').value = alunos.email
    document.getElementById('select').value = alunos.turma.id

 }
  const editaraluno = async (alunos) => {
    await fetch(`http://localhost:3000/alunos/${alunosid}`, {
        method: 'PUT',
        headers: {
          "Accept": 'application/json, text/plain, */*',
          "Content-Type": 'application/json'
        },
        body: JSON.stringify(alunos)
    })
    window.location = 'alunos.html'
  }

  const carregardados = async () => {
   getidurl()
   const alunos = await buscaraluno()

   carregardadosdoformulario(alunos)

  }
  carregardados()
  const voltar = () => {
    window.location = 'alunos.html'
}