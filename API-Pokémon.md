### Criando um Projeto Pokémon com JavaScript: Passo a Passo  

Neste guia, vamos aprender a criar um pequeno projeto em JavaScript para exibir informações de um Pokémon usando a **PokéAPI**. Vamos construir o código passo a passo, explicando cada conceito ao longo do caminho.  

---  

## O que vamos criar?  
Um sistema onde podemos:  
1. Buscar informações de qualquer Pokémon pelo nome ou número.  
2. Navegar entre os Pokémon (anterior e próximo).  
3. Exibir o nome, número, e imagem do Pokémon na tela.  

Vamos começar!  

---  

## Passo 1: Configurando a Estrutura do Projeto  

### 1.1 Criar os arquivos iniciais  
Crie uma pasta chamada `projeto-pokemon`. Dentro dela, crie:  
- Um arquivo HTML: `index.html`.  
- Um arquivo JavaScript: `script.js`.  
- Um arquivo CSS (opcional, para estilizar): `style.css`.  

### 1.2 Esqueleto básico do HTML  
Abra o `index.html` e adicione o seguinte código para criar o layout básico:  

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pokémon Finder</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="conteudo">
    <form class="formulario">
      <input type="text" class="campo_busca" placeholder="Digite o nome ou número do Pokémon">
      <button type="submit">Buscar</button>
    </form>
    <div class="pokemon">
      <h1 class="nome_pokemon">Nome do Pokémon</h1>
      <p class="numero_pokemon">#</p>
      <img class="imagem_pokemon" src="" alt="Imagem do Pokémon" style="display: none;">
    </div>
    <div class="navegacao">
      <button class="botao_anterior">Anterior</button>
      <button class="botao_proximo">Próximo</button>
    </div>
  </div>
  <script src="script.js"></script>
</body>
</html>
```  

**O que estamos fazendo aqui?**  
- **`<form>` e `<input>`**: Criamos um formulário para buscar o Pokémon.  
- **`<h1>`, `<p>`, `<img>`**: Espaços para exibir o nome, número, e imagem do Pokémon.  
- **Botões "Anterior" e "Próximo"**: Para navegar pelos Pokémon.  
- **`<script>`**: Conectamos nosso arquivo JavaScript ao HTML.  

---  

## Passo 2: Selecionando Elementos no JavaScript  

No `script.js`, vamos começar selecionando os elementos que precisamos manipular no HTML. Isso nos permite alterar o conteúdo deles usando JavaScript.  

```javascript
// Seleção de elementos HTML
const nomePokemon = document.querySelector('.nome_pokemon'); // Nome do Pokémon
const numeroPokemon = document.querySelector('.numero_pokemon'); // Número do Pokémon
const imagemPokemon = document.querySelector('.imagem_pokemon'); // Imagem do Pokémon

const formulario = document.querySelector('.formulario'); // Formulário de busca
const campoBusca = document.querySelector('.campo_busca'); // Campo de busca
const botaoAnterior = document.querySelector('.botao_anterior'); // Botão "Anterior"
const botaoProximo = document.querySelector('.botao_proximo'); // Botão "Próximo"
```  

**Por que fazemos isso?**  
- O **`document.querySelector()`** nos permite acessar elementos do HTML. Passamos o nome da classe como parâmetro (ex.: `'.nome_pokemon'`).  
- Depois de selecionar os elementos, podemos manipulá-los no JavaScript, como alterar textos, imagens, ou adicionar eventos (como cliques).  

---  

## Passo 3: Trabalhando com a PokéAPI  

Agora vamos aprender a **buscar dados de um Pokémon usando uma API**.  

### 3.1 O que é uma API?  
Uma **API** (Interface de Programação de Aplicações) é como um "menu" que mostra o que podemos pedir de um servidor. No caso da **PokéAPI**, ela nos permite acessar informações sobre Pokémon (nomes, números, imagens, habilidades, etc.).  

### 3.2 Função para buscar Pokémon  
Vamos criar uma função para buscar os dados de um Pokémon com **fetch**.  

```javascript
// Função para buscar os dados do Pokémon na API
async function buscarPokemon(pokemon) {
  const respostaAPI = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  if (respostaAPI.status === 200) { // Verifica se a resposta foi bem-sucedida
    const dados = await respostaAPI.json(); // Transforma a resposta em JSON
    return dados; // Retorna os dados do Pokémon
  }
}
```  

**Como funciona essa função?**  
1. **`async` e `await`**: Tornam a função assíncrona, ou seja, ela "espera" a resposta da API antes de continuar.  
2. **`fetch`**: Faz a requisição para o servidor da API. Passamos o URL do Pokémon (ex.: `https://pokeapi.co/api/v2/pokemon/pikachu`).  
3. **Resposta bem-sucedida (`status === 200`)**: Checa se a API conseguiu encontrar o Pokémon.  

---  

## Passo 4: Exibir os Dados no HTML  

Agora vamos criar uma função que usa os dados da API para atualizar o conteúdo da página.  

```javascript
// Função para exibir os dados do Pokémon
async function exibirPokemon(pokemon) {
  nomePokemon.innerHTML = 'Carregando...'; // Mostra "Carregando..." enquanto busca os dados
  numeroPokemon.innerHTML = '';  

  const dados = await buscarPokemon(pokemon); // Busca os dados do Pokémon

  if (dados) { // Verifica se encontrou o Pokémon
    imagemPokemon.style.display = 'block'; 
    nomePokemon.innerHTML = dados.name; // Nome
    numeroPokemon.innerHTML = `#${dados.id}`; // Número
    imagemPokemon.src = dados.sprites.versions['generation-v']['black-white'].animated.front_default; // Imagem
  } else {
    imagemPokemon.style.display = 'none';
    nomePokemon.innerHTML = 'Não encontrado :c'; // Caso o Pokémon não exista
    numeroPokemon.innerHTML = '';
  }
}
```  

---  

## Passo 5: Eventos para Buscar e Navegar  

Agora conectamos as funções aos botões e ao formulário.  

```javascript
// Evento para buscar um Pokémon no formulário
formulario.addEventListener('submit', function (evento) {
  evento.preventDefault(); // Evita o recarregamento da página
  exibirPokemon(campoBusca.value.toLowerCase()); // Busca pelo valor do campo
});

// Evento para mostrar o Pokémon anterior
botaoAnterior.addEventListener('click', function () {
  if (pokemonAtual > 1) {
    pokemonAtual -= 1; // Diminui o número
    exibirPokemon(pokemonAtual); // Exibe o Pokémon anterior
  }
});

// Evento para mostrar o próximo Pokémon
botaoProximo.addEventListener('click', function () {
  pokemonAtual += 1; // Aumenta o número
  exibirPokemon(pokemonAtual); // Exibe o próximo Pokémon
});

// Mostrar o Pokémon inicial (número 1) ao carregar a página
let pokemonAtual = 1;
exibirPokemon(pokemonAtual);
```  

---  

## Pronto!  

Agora você tem um aplicativo funcional para buscar Pokémon. Experimente adicionar estilos no CSS para deixar o projeto mais bonito. 🎨  

Se tiver dúvidas, revise os passos com calma. 😉
