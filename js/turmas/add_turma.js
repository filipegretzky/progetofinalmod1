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

  const buscarmentoria = async (id) => {
    const respost = await fetch(`http://localhost:3000/mentorias/${id}`)
    const mentoria = respost.json()
    return mentoria
  }
    
  const buscarmentorias = async () => {
    const response = await fetch(`http://localhost:3000/mentorias`)
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

  