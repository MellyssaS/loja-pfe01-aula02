const uri = './assets/dados.json';
var produtos = [];

fetch(uri)
    .then(resp => resp.json())
    .then(resp=> {produtos = resp})
    .then(() => {mostrarCards()})

function mostrarCards(){
    const main = document.querySelector('main');
    produtos.forEach(p=>{
        main.innerHTML += `
        <div class="card">
            <h3>${p.produto}</h3>
            <img src="${p.imagem}" alt="${p.produto}">
            <p>Preço: ${p.preco}</p>
            <button onclick="modalUp(${p.id})">Detalhes</button>
        </div>
        `;
    })
}

function modalUp(id){
    let p = produtos.find(produto => produto.id == id);
    const modal = `
    <div id="detalhes" class="modal">
        <div class="janela">
            <div>
                <h3>${p.produto}</h3>
                <button  onclick="window.location.reload()">x</button>
            </div>
            <form>
                <input type="text" name="produto" value="${p.produto}" placeholder="Nome do Produto" required>
                <input type="text" name="descricao" value="${p.descricao}"placeholder="Descrição" required>
                <input type="number" step="0.01" name="preco" value="${p.preco}" placeholder="Preço" required>
                <input type="text" name="image"value="${p.imagem}"  placeholder
                ="Coloque o endereço da imagem" required>
                <img src="${p.imagem}" style="max-width: 300px"></img>
                <button type="submit">Alterar</button>
            </form>
        </div>
    </div>`;
    let body = document.querySelector('body').innerHTML += modal;
}
