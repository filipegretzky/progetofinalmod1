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
        <button onclick="editarturmas(${turmas.id})">🖊</button>
        <button onclick="deleteturma (${turmas.id})">🗑</button>
        </td>
   </tr>
    `
    tabela.innerHTML = tabela.innerHTML + turmashtml
 })
}
const getturmas = async () => {
    const respons = await fetch(`http://localhost:3000/turmas`)
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
    await fetch(`http://localhost:3000/turmas/${id}`, {
        method:'DELETE'
    })
    window.location = 'turmas.html'
}