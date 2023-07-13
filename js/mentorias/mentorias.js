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
const redementorias = (mentoria) => {
    const tabela = document.querySelector('tbody')
     tabela.innerHTML = '' //esvaziando o elemento
     

    mentoria.forEach(mentorias => {
        const mentoriahtml =  `
        <tr>
        <td class="nome">${mentorias.turma}</td>
        <td class="mentor">${mentorias.mentor.nome}</td>

        <td class="status">${mentorias.resultado}</td>
        
        <td class="açao">
        <button onclick="editarmentorias(${mentorias.id})" id="editarbut">🖊</button>
        <button onclick="deletementotia (${mentorias.id})" id="deletbut">🗑</button>
        </td>
        </tr>
        
        `
        tabela.innerHTML = tabela.innerHTML + mentoriahtml

        
    })
  
}
const getmentorias = async () => {
    const respons = await fetch("http://localhost:3000/mentorias")
    const mentoria = await respons.json()

    redementorias(mentoria)
     }

const deletementotia = async (id) => {
    await fetch(`http://localhost:3000/mentorias/${id}`,{
        method:'DELETE'
    })
    window.location = 'mentorias.html'
}
getmentorias()

const editarmentorias = async (id) => {
    window.location = `editar_mentorias.html?id=${id}`
}
const addclass = async () => {

}