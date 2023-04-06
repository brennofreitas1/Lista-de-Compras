const inputItem = document.getElementById("inputItem");
const inputQta = document.getElementById("inputQta");
const inputPreco = document.getElementById("inputPreco");   
const btAdicionar = document.getElementById("btAdicionar");
const btLimpar = document.getElementById("btLimpar");
const tabela = document.getElementById("tabela1");

let listaItens = [];

function DescricaoItem(Item, qta, preco){
    this.Item = Item;
    this.qta = qta;
    this.preco = preco;
}

const redesenharTabela = () =>{
    const linhas = tabela.getElementsByTagName("tr");
    
    for(let i = linhas.length - 1; i > 0; i--){
        tabela.removeChild(linhas[i]); 
    }

    for(let i = 0; i < listaItens.length; i++){
        const ItemText = document.createTextNode(listaItens[i].Item);
        const qtaText = document.createTextNode(listaItens[i].qta);
        const precoText = document.createTextNode(listaItens[i].preco);

        const tdItem = document.createElement("td");
        const tdQta = document.createElement("td");
        const tdPreco = document.createElement("td");

        tdItem.appendChild(ItemText);
        tdQta.appendChild(qtaText);
        tdPreco.appendChild(precoText);

        const linhaItem = document.createElement("tr");

        linhaItem.appendChild(tdItem);
        linhaItem.appendChild(tdQta);
        linhaItem.appendChild(tdPreco);

        tabela.appendChild(linhaItem);
    }
};

const handleBtAdicionarClick = () =>{
    const Item = inputItem.value;
    const qta = inputQta.value;
    const preco = inputPreco.value;
    
    if(!Item || !qta || !preco){
        alert("[ERRO] Falta de dados!");
        return;
    }

    listaItens.push(new DescricaoItem(Item, qta, preco));

    redesenharTabela();

    inputItem.value = "";
    inputQta.value = "";
    inputPreco.value = "";

    inputItem.focus();
};

const handleBtLimparClick = () =>{
    const linhas = tabela.getElementsByTagName("tr");
    
    for(let i = linhas.length - 1; i > 0; i--){
        tabela.removeChild(linhas[i]); 
    }

    listaItens = [];

    inputItem.value = "";
    inputQta.value = "";
    inputPreco.value = "";

    inputItem.focus();
};

btAdicionar.addEventListener("click", handleBtAdicionarClick);
btLimpar.addEventListener("click", handleBtLimparClick);