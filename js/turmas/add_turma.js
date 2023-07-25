const buscarmentor = async (id) => {
    const response = await fetch(`https://progetofinalmod1.onrender.com/mentores/${id}`)
    const mentor = await response.json()
    return mentor
  }
  const buscarmentores = async () => {
      const response = await fetch(`https://progetofinalmod1.onrender.com/mentores`)
    const mentores = await response.json()
    return mentores
  }
  const carregarselect = async () => {
      const mentores = await buscarmentores()
      const mentorselect = document.getElementById('mentor')
  
      const opçaovazia = new Option('selecione um mentor ...')
      mentorselect.options.add(opçaovazia)
  
      mentores.forEach(mentores => {
          const opçao = new Option(mentores.nome,mentores.id)
          mentorselect.options.add(opçao)
          

          
      });
  }
  carregarselect()

  const buscarmentoria = async (id) => {
    const respost = await fetch(`https://progetofinalmod1.onrender.com/mentorias/${id}`)
    const mentoria = respost.json()
    return mentoria
  }
    
  const buscarmentorias = async () => {
    const response = await fetch(`https://progetofinalmod1.onrender.com/mentorias`)
    const mentorias = response.json()
    return mentorias
  }
  const carregarselectmentoria = async () => {
    const mentorias = await buscarmentorias()
    const mentoriasselect = document.getElementById('select')
    const opçaovazia = new Option('selecione um mentorias ......')

    mentoriasselect.options.add(opçaovazia)
    mentorias.forEach(mentorias => {
    
        const opçao = new Option(mentorias.turma , mentorias.id)
        mentoriasselect.options.add(opçao)
    })
  }
  carregarselectmentoria()
 
  const formulario = document.getElementById('formulario')

  formulario.addEventListener('submit',  async (e)=> {
    e.preventDefault()
     
    //const mentoria = formulario.elements['mentoria'].value

    const mentoria = formulario.elements['mentoria'].value
    const mentor = formulario.elements['mentorselect'].value
    const data_inicio = formulario.elements['data_inicio'].value
    const dia = formulario.elements['dia'].value
    const hora_inicio = formulario.elements['hora_inicio'].value
    const hora_termino = formulario.elements['hora_termino'].value
    const turma = formulario.elements['turma'].value
    const qd_encontros = formulario.elements['qd_encontros'].value

  const mentoriaobj = await buscarmentoria(mentoria)

   const mentorobj = await buscarmentor (mentor)

   const turmas = {
        mentorial : {
          id : mentoriaobj.id,
          nome : mentoriaobj.turma
        },
        mentor: {
          id: mentorobj.id,
          nome: mentorobj.nome,
          email: mentorobj.email
        },
        data_inicio,
        dia,
        hora_inicio,
        hora_termino,
        turma,
        qd_encontros

   }
  cadastraturma(turmas)
  })

  const cadastraturma = async (turmas) => {
    await fetch (`https://progetofinalmod1.onrender.com/turmas` ,{
      method: 'POST',
      headers: {
        "Accept": 'application/json, text/plain, */*',
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(turmas)
    })
    window.location= 'turmas.html'
  }
  const voltar = () => {
    window.location = 'turmas.html'
}
const mentoria = ()=> {
  window.location = '../mentorias/mentorias.html'
}
const turmas = ()=> {
  window.location = 'turmas.html'
}
const alunos = () => {
  window.location = '../alunos/alunos.html'
}
const mentores = () => {
  window.location = '../mentores/monitores.html'
}