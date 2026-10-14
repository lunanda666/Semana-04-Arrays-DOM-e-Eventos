
// ========================================
// BLOCO 1 — ARRAYS E MÉTODOS
// ========================================

console.log("===== BLOCO 1: ARRAYS =====");

// 1. forEach e map com nomes

const nomes = ["Alice", "Saulo", "Laura"];

nomes.forEach(function(nome) {
    console.log(`Olá, ${nome}!`);
});

const nomesMaiusculos = nomes.map(function(nome) {
    return nome.toUpperCase();
});

console.log("Nomes em maiúsculas:", nomesMaiusculos);


// 2. filter e reduce com preços

const precos = [10, 25, 40, 5, 60];

const precosAcimaDe20 = precos.filter(function(preco) {
    return preco > 20;
});

const somaPrecos = precos.reduce(function(total, preco) {
    return total + preco;
}, 0);

console.log("Preços acima de R$ 20:", precosAcimaDe20);
console.log("Soma dos preços:", somaPrecos);


// 3. Métodos com objetos de produtos

const produtos = [
    { nome: "Caderno", preco: 15 },
    { nome: "Mochila", preco: 80 },
    { nome: "Caneta", preco: 5 },
    { nome: "Estojo", preco: 25 }
];

const nomesProdutos = produtos.map(function(produto) {
    return produto.nome;
});

const produtosBaratos = produtos.filter(function(produto) {
    return produto.preco < 50;
});

const totalProdutos = produtos.reduce(function(total, produto) {
    return total + produto.preco;
}, 0);

produtos.forEach(function(produto) {
    console.log(`${produto.nome}: R$ ${produto.preco.toFixed(2)}`);
});

console.log("Nomes dos produtos:", nomesProdutos);
console.log("Produtos abaixo de R$ 50:", produtosBaratos);
console.log("Soma de todos os produtos: R$", totalProdutos);


// ========================================
// BLOCO 2 — MANIPULAÇÃO DO DOM
// ========================================

console.log("\n===== BLOCO 2: DOM =====");

// 1. Selecionar o h1 e alterar seu texto

const titulo = document.querySelector("#titulo");

titulo.textContent = "Blog do Andy Piscinas";


// 2. Selecionar todos os parágrafos

const paragrafos = document.querySelectorAll(".texto");

paragrafos.forEach(function(paragrafo) {
    console.log("Texto do parágrafo:", paragrafo.textContent);
});


// 3. Selecionar a lista e inserir dois itens com innerHTML

const lista = document.querySelector("#lista");

lista.innerHTML = `
    <li>Primeiro item</li>
    <li>Segundo item</li>
`;


// 4. Criar o terceiro item com createElement e append

const terceiroItem = document.createElement("li");

terceiroItem.textContent = "Terceiro item";

lista.append(terceiroItem);


// 5. Adicionar a classe destaque

terceiroItem.classList.add("destaque");

console.log(
    "O terceiro item tem a classe destaque?",
    terceiroItem.classList.contains("destaque")
);


// 6. Criar tarefas usando forEach

const tarefas = [
    "Estudar JS",
    "Fazer exercícios",
    "Revisar DOM"
];

const itensTarefas = [];

tarefas.forEach(function(tarefa) {
    const item = document.createElement("li");

    item.textContent = tarefa;

    lista.append(item);

    itensTarefas.push(item);
});

// Marcar o primeiro item criado a partir do array tarefas
itensTarefas[0].classList.add("feito");

console.log(
    "Quantidade total de itens:",
    lista.querySelectorAll("li").length
);


// ========================================
// BLOCO 3 — EVENTOS E EVENT DELEGATION
// ========================================

console.log("\n===== BLOCO 3: EVENTOS =====");

// 1. Evento de clique no botão

const botao = document.querySelector("#botao");

botao.addEventListener("click", function() {
    console.log("Clicou!");
});


// 2. Evento mouseover

botao.addEventListener("mouseover", function() {
    botao.textContent = "Pode clicar!";
});


// 3. Evento keyup no campo nome

const campoNome = document.querySelector("#nome");

campoNome.addEventListener("keyup", function() {
    console.log("Nome digitado:", campoNome.value);
});


// 4. Event Delegation na lista

// Um único listener atende aos itens existentes
// e também aos que forem criados posteriormente.

lista.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("feito");

        console.log("Item clicado:", e.target.textContent);
    }
});


// 5. Formulário para adicionar novas tarefas

const formulario = document.querySelector("#formulario");
const campoTarefa = document.querySelector("#tarefa");

formulario.addEventListener("submit", function(e) {
    // Impede que a página recarregue
    e.preventDefault();

    // Remove espaços desnecessários no início e no fim
    const textoTarefa = campoTarefa.value.trim();

    // Não adiciona itens vazios
    if (textoTarefa === "") {
        return;
    }

    // Cria um novo item com o texto digitado
    const novoItem = document.createElement("li");

    novoItem.textContent = textoTarefa;

    // O Event Delegation também funciona neste item
    lista.append(novoItem);

    // Limpa o campo depois de adicionar
    campoTarefa.value = "";

    console.log("Nova tarefa adicionada:", textoTarefa);
});

console.log("JavaScript carregado com sucesso!");
