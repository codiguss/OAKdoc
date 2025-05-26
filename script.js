function cadastrarProduto(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const descricao = document.getElementById("descricao").value;
  const valor = Number.parseFloat(document.getElementById("valor").value).toFixed(2);
  const disponivel = document.getElementById("disponivel").value;

  const tabela = document.getElementById("tabelaProdutos").querySelector("tbody");
  const novaLinha = tabela.insertRow();

  novaLinha.insertCell(0).textContent = nome;
  novaLinha.insertCell(1).textContent = descricao;
  novaLinha.insertCell(2).textContent = `R$ ${valor}`;
  novaLinha.insertCell(3).textContent = disponivel;

  const formElement = document.getElementById("form");
  const listElement = document.getElementById("list");

  formElement.classList.add("hidden");

  listElement.classList.remove("hidden");
}

function voltarFormulario() {
  const formElement = document.getElementById("form");
  const listElement = document.getElementById("list");

  formElement.reset(); 

  formElement.classList.remove("hidden");

  listElement.classList.add("hidden");
}