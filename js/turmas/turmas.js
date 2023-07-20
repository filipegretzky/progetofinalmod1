const inputpesquisa = document.getElementById('txtBusca')

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

const redeturmas = (turmas) => {
 const tabela = document.querySelector('tbody')
 tabela.innerHTML = ''

 turmas.forEach(turmas => {
    const turmashtml = `
    <tr>
    <td class="turma">${turmas.turma}</td>
    <td class="mentor">${turmas.mentor.nome}</td>
    <td class="mentoria">${turmas.mentorial.nome}</th>
    <td class="data_de_inicio">${turmas.data_inicio}</th>
    <td class="dia_da_semana">${turmas.dia}</td>
    <td class="horario">${turmas.hora_inicio}</th>
    <td class="encontros">0/${turmas.qd_encontros}</td>
    <td class="açao">
        <button onclick="editarturmas(${turmas.id})" id="editarbut">🖊</button>
        <button onclick="deleteturma (${turmas.id})" id="deletbut">🗑</button>
        </td>
   </tr>
    `
    tabela.innerHTML = tabela.innerHTML + turmashtml
 })
}
const getturmas = async (pesquisa = null) => {
     let texto = ''

     if(pesquisa) {
        texto =`?q=${pesquisa}`
     }

    const respons = await fetch(`https://progetofinalmod1.onrender.com/turmas${texto}`)
    const turmas = await respons.json()

    redeturmas(turmas)
}
getturmas()
const editarturmas= async (id) => {
    window.location = `editar_turmas.html?id=${id}`
}
const novaturma = () => {
    window.location = 'add_turma.html'
}
const deleteturma = async (id) => {
    await fetch(`https://progetofinalmod1.onrender.com/turmas/${id}`, {
        method:'DELETE'
    })
    window.location = 'turmas.html'
}

inputpesquisa.addEventListener('keyup',(e) => {
    const texto = inputpesquisa.value 
    if(texto === ''){
        getturmas()
    } 
    
     else if(e.key === 'Enter') {
                      
        getturmas(texto)
    }
})