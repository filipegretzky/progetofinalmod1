const inputpesquisa = document.getElementById('txtBusca')
// funçao do menu 
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

// fumçao que mostra o comteudo na minha tabela
const redementorias = (mentoria) => {
    const tabela = document.querySelector('tbody')
     tabela.innerHTML = '' 
     // adiciona a tabela
    mentoria.forEach(mentorias => {
        //adiciona o classe ao status 
       var resultado = mentorias.resultado
       var apresultado = ''
       if(resultado == 'ativo'){
       resultado =  apresultado+ `<div class="ativo">${resultado}</div>`

       }
       else {
        resultado =apresultado = `<div class="inativo">${resultado}</div>`
       }
       
       
        const mentoriahtml =  `
        <tr>
        <td class="nome">${mentorias.turma}</td>
        <td class="mentor">${mentorias.mentor.nome}</td>

        <td class="status status2">${resultado}</td>
        
        <td class="açao">
        <button onclick="editarmentorias(${mentorias.id})" id="editarbut">🖊</button>
        <button onclick="deletementotia (${mentorias.id})" id="deletbut">🗑</button>
        </td>
        </tr>
        
        `
        tabela.innerHTML = tabela.innerHTML + mentoriahtml

        
   
    })
  
}

// funçao que busca o conteudo da api
const getmentorias = async (pesquisa = null) => {
    //faz a pesquisa 
    let texto = ''

    if(pesquisa) {
       texto =`?q=${pesquisa}`
    }
   

    const respons = await fetch(`https://progetofinalmod1.onrender.com/mentorias${texto} `)
    const mentoria = await respons.json()

    redementorias(mentoria)
    
     }
     
  // funçao do delete
const deletementotia = async (id) => {
    await fetch(`https://progetofinalmod1.onrender.com/mentorias/${id}`,{
        method:'DELETE'
    })
    window.location = 'mentorias.html'
}
getmentorias()
//passa para a paguina de ediçao com id 
const editarmentorias = async (id) => {
    window.location = `editar_mentorias.html?id=${id}`
}

// evento da pesquisa 

inputpesquisa.addEventListener('keyup',(e) => {
    const texto = inputpesquisa.value
    if(texto === ''){
        getmentorias()
    }

    else if(e.key === 'Enter') {
                         
        getmentorias(texto)
    }
})