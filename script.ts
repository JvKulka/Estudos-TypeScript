// Exércicio 1 - Annotation e Inference
function normalizarTexto(texto: string) {
  return texto.trim().toLowerCase();
}

normalizarTexto("DEsiGN");

// Exércicio 2 - Annotation e Inference
const input = document.querySelector("input");
const total = localStorage.getItem("total");

if (input && total) {
  input.value = total;
  calcularGanho(Number(input.value));
}

function calcularGanho(value: number) {
  const p = document.querySelector("p");
  if (p) {
    p.innerText = `ganho total: ${value + 100 - value * 0.2}`;
  }
}

function totalMudou() {
  if (input) {
    localStorage.setItem("total", input.value);
    calcularGanho(Number(input.value));
  }
}

if (input) {
  input.addEventListener("keyup", totalMudou);
}

// Exércicio 3 - Union Types
// 1 - Crie uma função chamada toNumber
// 2 - A função pode receber number | string
// 3 - Se a função receber um número, retorne um número
// 4 - Se a função receber uma string, retorne um número
// 5 - Se ela receber algo diferente, retorne um erro. (throw "value deve ser um número ou uma string")

function toNumber(value: number | string) {
  if (typeof value === "number") {
    return value;
  } else if (typeof value === "string") {
    return Number(value);
  } else {
    throw "value deve ser um número ou uma string";
  }
}

// Exércicio 4 - Types e Interfaces
//Defina a interface da API: https://api.origamid.dev/json/notebook.json
//E mostre os dados na tela.
async function fetchProduct() {
  const response = await fetch("https://api.origamid.dev/json/notebook.json");
  const data = await response.json();
  showProduct(data);
}

fetchProduct();

interface Empresa {
  fundacao: number;
  nome: string;
  pais: string;
}

interface Product {
  nome: string;
  preco: number;
  descricao: string;
  garantia: string;
  seguroAcidentes: boolean;
  empresaFabricante: Empresa;
  empresaMontadora: Empresa;
}

function showProduct(data: Product) {
  document.body.innerHTML = `
    <div>
      <h2>${data.nome}</h2>
      <p>${data.preco}</p> 
      <div>
        <h3>Fabricante: ${data.empresaFabricante.nome}</h3>
      </div>
      <div>
        <h3>Fabricante: ${data.empresaMontadora.nome}</h3>
      </div>
    </div>
  `;
}
