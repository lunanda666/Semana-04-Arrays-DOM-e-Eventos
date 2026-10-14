
# Desenvolvimento Web — Semana 04

## Arrays, DOM e Eventos

Projeto desenvolvido para a atividade de Desenvolvimento Web do CEUMA, com o objetivo de praticar os métodos de arrays, a manipulação do DOM e os eventos em JavaScript.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)

## Estrutura do projeto

```text
Semana04/
├── index.html
├── app.js
└── README.md
```

## Bloco 1 — Arrays e métodos

- **forEach:** percorre os elementos de um array e executa uma função para cada um.
- **map:** cria um novo array com os resultados de uma transformação dos elementos.
- **filter:** cria um novo array apenas com os elementos que atendem a uma condição.
- **reduce:** percorre os elementos e acumula um resultado, como a soma de valores.

Os métodos foram utilizados com arrays de nomes, preços e objetos de produtos.

## Bloco 2 — Manipulação do DOM

- **querySelector:** seleciona o primeiro elemento que corresponde ao seletor informado.
- **querySelectorAll:** seleciona todos os elementos que correspondem ao seletor.
- **innerHTML:** insere conteúdo interpretado como HTML.
- **createElement:** cria um novo elemento HTML.
- **append:** adiciona elementos ao final de outro elemento.
- **textContent:** define ou consulta o conteúdo textual de um elemento.
- **classList.add:** adiciona uma classe CSS.
- **classList.contains:** verifica se uma classe existe no elemento.

## Bloco 3 — Eventos e Event Delegation

Foram utilizados os eventos `click`, `mouseover`, `keyup` e `submit`, registrados com `addEventListener`.

O formulário utiliza `preventDefault()` para impedir o recarregamento da página. O texto digitado é tratado com `trim()` para evitar a inclusão de tarefas vazias.

### Importância do Event Delegation

O Event Delegation permite que um único listener no elemento pai trate eventos de vários elementos filhos. Dessa forma, itens adicionados dinamicamente também podem responder aos cliques, sem precisar registrar um novo listener para cada item.

Essa técnica ajuda a manter o código organizado e pode reduzir a quantidade de listeners necessários.

## Como executar

1. Abra a pasta do projeto no Visual Studio Code.
2. Execute o arquivo `index.html` com o Live Server.
3. Pressione `F12` para abrir as ferramentas do navegador.
4. Acesse a aba Console para conferir os resultados.
5. Teste os botões, a lista de tarefas e o formulário.

## Objetivo

Praticar a manipulação de arrays, a atualização dinâmica de páginas HTML e o tratamento de eventos em JavaScript.

## Autoria

Andy Piscinas
