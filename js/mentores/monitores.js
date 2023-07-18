const inputpesquisa = document.getElementById('txtBusca')
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
const getmentores = async (pesquisa = null) => {

    let texto = ''

     if(pesquisa) {
        texto =`?q=${pesquisa}`
     }

    const respons = await fetch(`http://localhost:3000/mentores${texto}`)
    const mentores = await respons.json()

    redementores(mentores)
}
getmentores()
const novomentor =() => {
    window.location = 'addmentores.html'
}
const deletementor = async (id) => {
    await fetch(`http://localhost:3000/mentores/${id}`,{
        method:'DELETE'
    })
    window.location = 'monitores.html'
}
const editarmentores = (id) => {
    window.location = `editarmentores.html?id=${id}`
}

inputpesquisa.addEventListener('keyup',(e) => {
    const texto = inputpesquisa.value
    if(texto === ''){
        getmentores()
    }
   else if(e.key === 'Enter') {
                        
        getmentores(texto)
    }
})