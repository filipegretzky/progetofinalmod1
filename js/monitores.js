const mentoria = ()=> {
    window.location = 'mentorias.html'
}
const redementores = (mentores) => {
    const conteiner = document.getElementById('cont-api')

    mentores.forEach(mentores => {
        conteiner.innerHTML = conteiner.innerHTML + `
        <div class="conteudo-descriçaoapi">
        <div class="imfo-nome"><p class="pdaapi">${mentores.nome}</p></div>
        <div class="info-email"><p class="pdaapi">${mentores.email}</p></div>
        <div class="açao"><div><button onclick="editarmentores(${mentores.id})">🖊</button></div>
        <div><button onclick="deletementor(${mentores.id})">🗑</button></div>
        </div>
        
        </div>
        `
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