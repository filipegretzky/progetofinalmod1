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
formulario.addEventListener('submit', async (e) => {
    e.preventDefault()

   
      var resultado = checkbox.checked ? 'válido' : 'inválido';
    
      
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
    await fetch(`http://localhost:3000/mentorias`,{
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
    var labelValido = document.getElementById('label-valido');
    var labelInvalido = document.getElementById('label-invalido');
    
    checkbox.addEventListener('change',async function() {
      if (checkbox.checked) {
        labelValido.style.display = 'inline-block';
        labelInvalido.style.display = 'none';
         
      } else {
        labelValido.style.display = 'none';
        labelInvalido.style.display = 'inline-block';
        
      }
    });
   
    