//busca o mentor 
const buscarmentor = async (id) => {
    const response = await fetch(`https://progetofinalmod1.onrender.com/mentores/${id}`)
    const mentor = await response.json()
    return mentor
  }
  //busca todos os mentores 
  const buscarmentores = async () => {
      const response = await fetch(`https://progetofinalmod1.onrender.com/mentores`)
    const mentores = await response.json()
    return mentores
  }

  //carrega no select
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

   let metoriasid = null
   
   //salva o id da url 
  const getidurl = () => {
    const paramString = window.location.search
    const pararms = new URLSearchParams(paramString)
   
    metoriasid = pararms.get('id')
  }

  //busca os dados do id da url 
  const buscarmentoria = async () => {
    const response = await fetch(`https://progetofinalmod1.onrender.com/mentorias/${metoriasid}`)
    const mentoria = await response.json()
    return mentoria
  }

  // evento que pega os dados do formulario
  formulario.addEventListener('submit', async (e)=> {
    e.preventDefault()
    const turma = formulario.elements['nome'].value 
    const mentor = formulario.elements['mentor'].value 
  //checkbox.addEventListener('change', function() {
    var resultado = checkbox.checked ? 'ativo' : 'inativo';
    
    // Objeto com os dados a serem enviados para a API
    var dados = {
      resultado: resultado
    };
    
  //})


    const mentorobjd = await buscarmentor(mentor)
    const mentorias ={
        turma,
        mentor: {
          id: mentorobjd.id ,
          nome :  mentorobjd.nome
          
        },
        resultado
    }
    editarmentorias(mentorias)
  })

   // carrega os dados no formulario
  const carregardadosdoformulario = async (mentorias) => {
     document.getElementById('nome').value = mentorias.turma
     document.getElementById('mentor').value = mentorias.mentor.id
     document.getElementById('checkbox').value = mentorias.resultado

  }
  // editar o conteudo da api
  const editarmentorias = async (mentorias) => {
    await fetch (`https://progetofinalmod1.onrender.com/mentorias/${metoriasid}`, {
        method: 'PUT',
        headers: {
          "Accept": 'application/json, text/plain, */*',
          "Content-Type": 'application/json'
        },
        body: JSON.stringify(mentorias)
    })
    window.location='mentorias.html'
  }

  //chama todas as funçoes
  const carregardados = async () => {
    getidurl()

    const mentorias = await buscarmentoria()

    carregardadosdoformulario(mentorias)
  }
  carregardados()

  //verificasao dos checkbox
  var checkbox = document.getElementById('checkbox');
    var labelativo = document.getElementById('label-ativo');
    var labelInativo = document.getElementById('label-inativo');
    
    checkbox.addEventListener('change',async function() {
      if (checkbox.checked) {
        labelativo.style.display = 'inline-block';
        labelInativo.style.display = 'none';
         
      } else {
        labelativo.style.display = 'none';
        labelInativo.style.display = 'inline-block';
        
      }
    });
    //butao de voltar
    const voltar = () => {
      window.location = 'mentorias.html'
  }

  // funçoes do menu
  const nova_mentoria = () => {
    window.location = 'add_mentoria.html'
}
const mentoria = ()=> {
    window.location = 'mentorias.html'
}
const turmas = ()=> {
    window.location = '../turmas/turmas.html'
}
const alunos = () => {
    window.location = '../alunos/alunos.html'
}
const mentores = () => {
    window.location = '../mentores/monitores.html'
}