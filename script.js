const inputItem = document.getElementById("inputItem");
const btAdicionar = document.getElementById("btAdicionar");
const btLimpar = document.getElementById("btLimpar");
const lista = document.getElementById("lista");
const qtaItem = document.getElementById("qtaItem")
const preco = document.getElementById ("preco")

let listaItems = [];

const redesenhaLista = (lista, listaItems) => {
  lista.innerHTML = "";
  for (let index = 0; index < listaItems.length; ++index) {
    const itemText = document.createTextNode(listaItems[index]);
    const listItem = document.createElement("li");
    const qtaItem = document.createElement("li");
    listItem.appendChild(itemText);
    lista.appendChild(listItem);
  }
};

const handleBtAdicionarClick = () => {
  const item = inputItem.value;
  const qta = qtaItem.value;
  if (!item, qta) {
    alert("[ERRO]Necessário digitar um item!");
    return;
  }
  listaItems.push(item, qta);
  inputItem.value = "";
  inputItem.focus();
  qtaItem.value = "";
  qtaItem.focus();
  redesenhaLista(lista, listaItems);
};


const handleBtLimparClick = () => {
  listaItems = [];
  lista.innerHTML = "";
  inputItem.focus();
};

btAdicionar.onclick = handleBtAdicionarClick;
btLimpar.onclick = handleBtLimparClick;