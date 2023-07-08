const mentoria = ()=> {
    window.location = '../mentorias/mentorias.html'
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
        <button onclick="editarmentores(${mentores.id})">🖊</button>
        <button onclick="deletementor(${mentores.id})">🗑</button>
        </td>
        </tr>
        
        `
        tabela.innerHTML = tabela.innerHTML + mentorhtml
    })
}
const getmentores = async () => {
    const respons = await fetch("http://localhost:3000/mentores")
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