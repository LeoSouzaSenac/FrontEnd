// Seleção de elementos HTML
const nomePokemon = document.querySelector('.nome_pokemon'); // Nome do Pokémon
const numeroPokemon = document.querySelector('.numero_pokemon'); // Número do Pokémon
const imagemPokemon = document.querySelector('.imagem_pokemon'); // Imagem do Pokémon

const formulario = document.querySelector('.formulario'); // Formulário de busca
const campoBusca = document.querySelector('.campo_busca'); // Campo de busca
const botaoAnterior = document.querySelector('.botao_anterior'); // Botão de navegação anterior
const botaoProximo = document.querySelector('.botao_proximo'); // Botão de navegação próximo




let pokemonAtual = 1; // Número do Pokémon inicial

// Função para buscar os dados do Pokémon na API
async function buscarPokemon(pokemon) {
  /* Para pegar os dados, precisamos encontrar o 'arquivo' onde os pokémon estão */
  const respostaAPI = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  /* Se a resposta for bem sucedida (ou seja, status 200) */
  if (respostaAPI.status === 200) {
    /* Aqui, se o pokémon foi encontrado, os dados dele são armazenados em um arquivo chamado JSON */

    /*
    const dadosPokemon = {
    "nome": "Pikachu",
    "numero": 25,
    "habilidade": "Choque do trovão",
    "tipos": ["Elétrico"]
};
    */
    const dados = await respostaAPI.json(); 
    return dados;
  }
}









// Função para renderizar os dados do Pokémon na tela
async function exibirPokemon(pokemon) {
  // Mostra "Carregando..." enquanto os dados são buscados
  nomePokemon.innerHTML = 'Carregando...';
  numeroPokemon.innerHTML = '';

  // Busca os dados do Pokémon
  const dados = await buscarPokemon(pokemon);

  // Verifica se os dados foram encontrados
  if (dados) {
    imagemPokemon.style.display = 'block';
    nomePokemon.innerHTML = dados.name; // Exibe o nome do Pokémon
    numeroPokemon.innerHTML = dados.id; // Exibe o número do Pokémon
    imagemPokemon.src = dados.sprites.versions['generation-v']['black-white'].animated.front_default;

    campoBusca.value = ''; // Limpa o campo de busca
    pokemonAtual = dados.id; // Atualiza o Pokémon atual
  } else {
    // Exibe mensagem de erro se o Pokémon não for encontrado
    imagemPokemon.style.display = 'none';
    nomePokemon.innerHTML = 'Não encontrado :c';
    numeroPokemon.innerHTML = '';
  }
}

// Evento de submissão do formulário para buscar o Pokémon
formulario.addEventListener('submit', function (evento) {
  evento.preventDefault();
  exibirPokemon(campoBusca.value.toLowerCase());
});

// Evento para mostrar o Pokémon anterior
botaoAnterior.addEventListener('click', function () {
  if (pokemonAtual > 1) {
    pokemonAtual -= 1;
    exibirPokemon(pokemonAtual);
  }
});

// Evento para mostrar o próximo Pokémon
botaoProximo.addEventListener('click', function () {
  pokemonAtual += 1;
  exibirPokemon(pokemonAtual);
});

// Exibe o Pokémon inicial ao carregar a página
exibirPokemon(pokemonAtual);
