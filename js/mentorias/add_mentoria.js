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
        console.log(opçao)
    });
}
carregarselect()
const formulario = document.getElementById('formulario')
formulario.addEventListener('submit', async (e) => {
    e.preventDefault()

   
      var resultado = checkbox.checked ? 'ativo' : 'inativo';
    
      
      var dados = {
        resultado: resultado
      };
      console.log('o resultado e',resultado )
  
     


    const turma = formulario.elements['nome'].value
    const mentor = formulario.elements['mentor'].value
   
    const mentorobjd = await buscarmentor(mentor)
    const mentorias ={
        turma,
        mentor: {
          id: mentorobjd.id ,
          nome :  mentorobjd.nome
         
        },
        resultado
    }
    cadastrarmentoria(mentorias)
})

const cadastrarmentoria = async (mentorias) => {
    await fetch(`https://progetofinalmod1.onrender.com/mentorias`,{
        method: 'POST',
        headers: {
          "Accept": 'application/json, text/plain, */*',
          "Content-Type": 'application/json'
        },
        body: JSON.stringify(mentorias)
    })
    window.location= 'mentorias.html'
}   
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
    const voltar = () => {
      window.location = 'mentorias.html'
  }
    