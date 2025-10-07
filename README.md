# 📒 Agenda de Contatos (JavaScript)

Este projeto é uma *agenda de contatos simples* desenvolvida em *JavaScript, HTML e CSS*.  
Permite *adicionar, remover, buscar, ordenar e filtrar contatos* diretamente no navegador, sem necessidade de banco de dados.

---

## 🚀 Funcionalidades

- ➕ *Adicionar Contato* – Nome, telefone e e-mail.
- ❌ *Remover Contato* – Exclusão com confirmação.
- 🔍 *Buscar Contato* – Pesquisa por nome (parcial ou completo).
- 🔠 *Filtrar por Inicial* – Mostra apenas contatos que começam com a letra digitada.
- 🧾 *Ordenar Contatos* – Em ordem alfabética.
- 💾 *Lista Dinâmica* – Atualiza automaticamente na tela.

---

## 🧠 Estrutura do Projeto


📁 projeto-agenda/
│
├── 📄 index.html       → Estrutura da página e elementos de interface
├── 🎨 style.css        → Estilos visuais (cores, botões, layout)
└── 🧩 agenda.js        → Lógica principal em JavaScript


---

## 🛠 Tecnologias Utilizadas

- *HTML5* – Estrutura e elementos do sistema  
- *CSS3* – Estilo e layout responsivo  
- *JavaScript (puro)* – Manipulação de dados e DOM  

---

## ⚙ Como Executar o Projeto

1. Baixe os arquivos do projeto ou clone o repositório:
   bash
   git clone https://github.com/seuusuario/agenda-de-contatos.git
   

2. Abra o arquivo **index.html** em qualquer navegador moderno (Chrome, Edge, Firefox, etc).

3. A aplicação será carregada automaticamente com alguns contatos de exemplo.

---

## 🧩 Principais Funções do Código

### adicionarContato()
Cria um novo contato com os dados do formulário e adiciona ao array principal (contatos).

### removerContato(id)
Remove um contato existente, com confirmação via confirm().

### ordenarContatos()
Ordena todos os contatos em ordem alfabética (case-insensitive).

### buscarContato()
Filtra os contatos com base em parte do nome digitado.

### filtrarPorInicial()
Exibe apenas os contatos que começam com a letra especificada.

### exibirContatos(lista, titulo)
Atualiza o conteúdo da tela com base na lista fornecida e um título opcional.

---

## 🧪 Exemplo de Uso

bash
# Ao abrir a página:
📋 Lista de Contatos

Ana Costa     11987654321
Bruno Silva   21912345678
Carlos Oliveira 31955554444
Daniela Santos 41999990000

# Após buscar "Bruno":
Resultados da busca por "bruno"
Bruno Silva   21912345678


---

## 🎯 Objetivo Didático

Este projeto foi desenvolvido com foco em *aprendizado de manipulação do DOM, **eventos em JavaScript* e *operações em arrays* (push, filter, sort, map, find).

É ideal para estudantes que estão aprendendo lógica de programação e front-end básico.

---

## 👨‍💻 Autor

*Gabriel Henrique*  
💼 Projeto desenvolvido para fins educacionais.  
📧 gabriel3t5g@gmail.com  
🌐 [https://github.com/gabriel3t5g-web](https://github.com/gabriel3t5g-web)

*Felipe Coutinho*
💼 Projeto desenvolvido para fins educacionais.  
📧 felipe6coutinho@gmail.com  
🌐 [https://github.com/F3lpzn-web](https://github.com/F3lpzn-web)

---

## 📄 Licença

Este projeto está licenciado sob a *MIT License* — sinta-se livre para usar e modificar.
