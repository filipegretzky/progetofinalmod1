const buscarmentor = async (id) => {
    const response = await fetch(`http://localhost:3000/mentores/${id}`)
    const mentor = await response.json()
    return mentor
  }
  const buscarmentores = async () => {
      const response = await fetch(`http://localhost:3000/mentores`)
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
          console.log(opçao)
      });
  }
  carregarselect()
  const formulario = document.getElementById('formulario')

  metoriasid = null
   
  const getidurl = () => {
    const paramString = window.location.search
    const pararms = new URLSearchParams(paramString)
   
    metoriasid = pararms.get('id')
  }
  const buscarmentoria = async () => {
    const response = await fetch(`http://localhost:3000/mentorias/${metoriasid}`)
    const mentoria = await response.json()
    return mentoria
  }
  formulario.addEventListener('submit', async (e)=> {
    e.preventDefault()
    const turma = formulario.elements['nome'].value 
    const mentor = formulario.elements['mentor'].value 

    const mentorobjd = await buscarmentor(mentor)
    const mentorias ={
        turma,
        mentor: {
          id: mentorobjd.id ,
          nome :  mentorobjd.nome
          
        },
    }
    editarmentorias(mentorias)
  })

  const carregardadosdoformulario = async (mentorias) => {
     document.getElementById('nome').value = mentorias.turma

  }

  const editarmentorias = async (mentorias) => {
    await fetch (`http://localhost:3000/mentorias/${metoriasid}`, {
        method: 'PUT',
        headers: {
          "Accept": 'application/json, text/plain, */*',
          "Content-Type": 'application/json'
        },
        body: JSON.stringify(mentorias)
    })
    window.location='mentorias.html'
  }
  const carregardados = async () => {
    getidurl()

    const mentorias = await buscarmentoria()

    carregardadosdoformulario(mentorias)
  }
  carregardados()