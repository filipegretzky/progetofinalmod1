const inputpesquisa = document.getElementById('txtBusca')
//funçoes do menu
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

//adiciono a tabela 
const redementores = (mentores) => {
    const tabela = document.querySelector('tbody')
     tabela.innerHTML = '' //esvaziando o elemento

    mentores.forEach(mentores => {
        const mentorhtml =  `
        <tr>
        <td class="nome">${mentores.nome}</td>
        <td class="email">${mentores.email}</td>
        <td class="açao">
        <button onclick="editarmentores(${mentores.id})" id="editarbut" >🖊</button>
        <button onclick="deletementor(${mentores.id})" id="deletbut" >🗑</button>
        </td>
        </tr>
        
        `
        tabela.innerHTML = tabela.innerHTML + mentorhtml
    })
}

//get e pesquisa

const getmentores = async (pesquisa = null) => {

    let texto = ''

     if(pesquisa) {
        texto =`?q=${pesquisa}`
     }

    const respons = await fetch(`https://progetofinalmod1.onrender.com/mentores${texto}`)
    const mentores = await respons.json()

    redementores(mentores)
}

getmentores()

// funçao que chama para paguina de adicionar 
const novomentor =() => {
    window.location = 'addmentores.html'
}

// fumçao que deleta 
const deletementor = async (id) => {
    await fetch(`https://progetofinalmod1.onrender.com/mentores/${id}`,{
        method:'DELETE'
    })
    window.location = 'monitores.html'
}

// fumçao que chama a paquina de editar e passa o id na url
const editarmentores = (id) => {
    window.location = `editarmentores.html?id=${id}`
}

//evento que escuta quando eu clico , para a pesquisa 
inputpesquisa.addEventListener('keyup',(e) => {
    const texto = inputpesquisa.value
    if(texto === ''){
        getmentores()
    }
   else if(e.key === 'Enter') {
                        
        getmentores(texto)
    }
})