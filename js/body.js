// agenda.js

// Array principal para armazenar os contatos
let contatos = [
    // Adicionando alguns contatos iniciais para facilitar o teste:
    { id: 101, nome: "Ana Costa", telefone: "11987654321", email: "ana.c@exemplo.com" },
    { id: 102, nome: "Bruno Silva", telefone: "21912345678", email: "bruno.s@exemplo.com" },
    { id: 103, nome: "Carlos Oliveira", telefone: "31955554444", email: "carlos.o@exemplo.com" },
    { id: 104, nome: "Daniela Santos", telefone: "41999990000", email: "daniela.s@exemplo.com" }
];

// Elementos do DOM (obtidos apenas uma vez)
const contatoLista = document.getElementById('contato-lista');
const formContato = document.getElementById('form-contato');
const buscaInput = document.getElementById('busca');
const inicialInput = document.getElementById('inicial');

// ---------------------------------------------------
// ## Funções de Manipulação de Dados
// ---------------------------------------------------

/**
 * Adiciona um novo contato ao array `contatos`.
 */
function adicionarContato() {
    const nomeInput = document.getElementById('nome');
    const telefoneInput = document.getElementById('telefone');
    const emailInput = document.getElementById('email');

    const novoContato = {
        id: Date.now(), // ID único
        nome: nomeInput.value.trim(),
        telefone: telefoneInput.value.trim(),
        email: emailInput.value.trim()
    };

    if (novoContato.nome && novoContato.telefone) {
        contatos.push(novoContato);
        formContato.reset(); 
        // Exibe a lista atualizada
        exibirContatos(contatos); 
        console.log("Contato adicionado:", novoContato.nome);
    } else {
        alert("Nome e Telefone são obrigatórios!");
    }
}

/**
 * Remove um contato pelo seu ID.
 * É uma função global (não está dentro de um listener) pois é chamada no HTML (onclick="removerContato(...)").
 * @param {number} id - O ID do contato a ser removido.
 */
function removerContato(id) {
    const contatoParaRemover = contatos.find(c => c.id === id);

    if (contatoParaRemover && confirm(`Tem certeza que deseja remover ${contatoParaRemover.nome}?`)) {
        // Usa filter() para criar um novo array sem o contato
        contatos = contatos.filter(contato => contato.id !== id);
        // Atualiza a exibição (após remover, volta para a lista completa)
        exibirContatos(contatos); 
        console.log("Contato removido com ID:", id);
    }
}

/**
 * Ordena o array `contatos` pelo nome e exibe o resultado.
 * É uma função global (chamada via onclick="ordenarContatos()" no HTML).
 */
function ordenarContatos() {
    // Usa sort() para ordenar em ordem alfabética case-insensitive
    contatos.sort((a, b) => {
        const nomeA = a.nome.toLowerCase();
        const nomeB = b.nome.toLowerCase();
        if (nomeA < nomeB) return -1;
        if (nomeA > nomeB) return 1;
        return 0;
    });

    // Exibe a lista principal, que agora está ordenada
    exibirContatos(contatos); 
    console.log("Contatos ordenados.");
}

/**
 * Busca contatos que contenham o texto digitado no nome.
 * É uma função global (chamada via onclick="buscarContato()" no HTML).
 */
function buscarContato() {
    const termoBusca = buscaInput.value.trim().toLowerCase();
    
    if (termoBusca === '') {
        // Se a busca estiver vazia, exibe a lista completa
        exibirContatos(contatos);
        return;
    }

    // Usa filter() para encontrar correspondências
    const resultados = contatos.filter(contato => 
        contato.nome.toLowerCase().includes(termoBusca)
    );

    // Exibe os resultados (ou a mensagem de "não encontrado")
    exibirContatos(resultados, `Resultados da busca por "${termoBusca}"`);
    console.log(`Busca por "${termoBusca}" realizada. ${resultados.length} resultados.`);
}

/**
 * Filtra contatos cuja primeira letra do nome coincide com a inicial digitada.
 * É uma função global (chamada via onclick="filtrarPorInicial()" no HTML).
 */
function filtrarPorInicial() {
    const inicial = inicialInput.value.trim().toUpperCase();

    if (inicial === '') {
        // Se o filtro estiver vazio, exibe a lista completa
        exibirContatos(contatos);
        return;
    }

    // Usa filter() para encontrar contatos que começam com a inicial
    const resultados = contatos.filter(contato => 
        contato.nome.toUpperCase().startsWith(inicial)
    );

    // Exibe os resultados (ou a mensagem de "não encontrado")
    exibirContatos(resultados, `Contatos que começam com "${inicial}"`);
    console.log(`Filtragem por inicial "${inicial}" realizada. ${resultados.length} resultados.`);
}

// ---------------------------------------------------
// ## Função de Exibição (Renderização)
// ---------------------------------------------------

/**
 * Renderiza a lista de contatos no DOM.
 * @param {Array<Object>} lista - O array de contatos a ser exibido.
 * @param {string} [titulo='📋 Lista de Contatos'] - Título a ser exibido acima da lista.
 */
function exibirContatos(lista, titulo = '📋 Lista de Contatos') {
    contatoLista.innerHTML = `<h2>${titulo}</h2>`; // Limpa e define o título

    // 1. Mensagem de lista vazia (nenhum contato cadastrado no total)
    if (contatos.length === 0) {
        contatoLista.innerHTML += '<p style="text-align: center; color: #656565;">Nenhum contato cadastrado.</p>';
        return;
    }

    // 2. Mensagem de filtro/busca sem resultados (há contatos, mas a lista de resultados está vazia)
    if (lista.length === 0) {
        contatoLista.innerHTML += '<p style="text-align: center; color: #f44336; font-weight: bold;">Nenhum contato encontrado com os critérios.</p>';
        return;
    }

    // 3. Renderiza a lista de contatos
    // Usa map() para criar o HTML de cada contato
    const htmlContatos = lista.map(contato => `
        <div class="contato" style="display: flex; justify-content: space-between; align-items: center;">
            <div>
                <p><strong>Nome:</strong> ${contato.nome}</p>
                <p><strong>Telefone:</strong> ${contato.telefone}</p>
                <p><strong>E-mail:</strong> ${contato.email}</p>
            </div>
            <button onclick="removerContato(${contato.id})" style="background-color: #f44336; color: white; margin-left: 10px;">Remover</button>
        </div>
    `).join(''); // Usa join() para juntar tudo em uma única string

    contatoLista.innerHTML += htmlContatos;
}

// ---------------------------------------------------
// ## Inicialização
// ---------------------------------------------------

// Adiciona o listener para o formulário no evento DOMContentLoaded para garantir que o DOM está pronto.
// As outras funções (ordenarContatos, buscarContato, filtrarPorInicial, removerContato) são chamadas
// diretamente via "onclick" no HTML, então não precisam de listeners aqui.
document.addEventListener('DOMContentLoaded', () => {
    // Listener para o formulário de adição de contato
    formContato.addEventListener('submit', function(e) {
        e.preventDefault(); 
        adicionarContato();
    });
    
    // Exibe a lista inicial de contatos ao carregar a página
    exibirContatos(contatos); 
});