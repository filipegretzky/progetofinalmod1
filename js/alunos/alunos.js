const inputpesquisa = document.getElementById('txtBusca')
// funçao que chama a paquina de adicionar
const novoaluno = () => {
    window.location = 'add_aluno.html'
}

//funçao do menu
const mentoria = ()=> {
    window.location = '../mentorias/mentorias.html'
}
const turmas = ()=> {
    window.location = '../turmas/turmas.html'
}
const alunos = () => {
    window.location = 'alunos.html'
}
const mentores = () => {
    window.location = '../mentores/monitores.html'
}

//adiciona o conteudo na minha tabela
const redalunos = (alunos) => {
    const tabela = document.querySelector('tbody')
    tabela.innerHTML = ''

    alunos.forEach(alunos => {
        const alunoshtml = `
        <tr>
        <td class="nome">${alunos.nome}</td>
        <td class="email">${alunos.email}</td>
        <td>
        <button onclick="editaraluno(${alunos.id})" id="editarbut">🖊</button>
        <button onclick="deletealuno (${alunos.id})" id="deletbut" >🗑</button>
        </td>
        </tr>

        `
        tabela.innerHTML = tabela.innerHTML + alunoshtml
    });
}
//recupera o conteudo para adicionar na tebela
const getalunos = async (pesquisa = null) => {
    let texto = ''

    if(pesquisa) {
       texto =`?q=${pesquisa}`
    }

   const  respons = await fetch(`https://progetofinalmod1.onrender.com/alunos${texto}`)
   const alunos = await respons.json()

   redalunos(alunos)
}
getalunos()

//deleta o conteudo
const deletealuno = async (id) => {
    await fetch(`https://progetofinalmod1.onrender.com/alunos/${id}`,{
        method:'DELETE'
    })
    window.location = 'alunos.html'
}
//chama a paguina para editar com o id na url
const editaraluno = (id) => {
    window.location = `editar_aluno.html?id=${id}`
}

//evento do pesquisar
inputpesquisa.addEventListener('keyup',(e) => {
    const texto = inputpesquisa.value 

    if (texto === '') {
        getalunos()
    }

    else if(e.key === 'Enter') {
                      
        getalunos(texto)
    }
})