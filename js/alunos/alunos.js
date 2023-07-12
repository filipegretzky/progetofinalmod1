const novoaluno = () => {
    window.location = 'add_aluno.html'
}

const redalunos = (alunos) => {
    const tabela = document.querySelector('tbody')
    tabela.innerHTML = ''

    alunos.forEach(alunos => {
        const alunoshtml = `
        <tr>
        <td class="nome">${alunos.nome}</td>
        <td class="email">${alunos.email}</td>
        <td>
        <button onclick="editarmentorias(${alunos.id})">🖊</button>
        <button onclick="deletealuno (${alunos.id})">🗑</button>
        </td>
        </tr>

        `
        tabela.innerHTML = tabela.innerHTML + alunoshtml
    });
}
const getalunos = async () => {
   const  respons = await fetch(`http://localhost:3000/alunos`)
   const alunos = await respons.json()

   redalunos(alunos)
}
getalunos()
const deletealuno = async (id) => {
    await fetch(`http://localhost:3000/alunos/${id}`,{
        method:'DELETE'
    })
    window.location = 'alunos.html'
}