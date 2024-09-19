# Guia: Criando um Vampiro com Flexbox e CSS

Neste guia, vamos aprender a criar um personagem de vampiro usando HTML e CSS. Vamos focar no uso de Flexbox e outras propriedades CSS para criar o layout. 

## Estrutura do Projeto

1. **Crie um novo diretório para o seu projeto**:
    - Nomeie-o como `vampire-project`.
    - Dentro deste diretório, crie dois arquivos: `index.html` e `style.css`.

2. **Estrutura HTML**:
    - Abra o arquivo `index.html` e adicione o seguinte código HTML:

    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Vampire</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <div class="moon"></div> <!-- Adiciona a lua aqui, antes do vampiro -->
        <div class="vampire">
          <div class="head">
            <div class="hair"></div>
            <div class="face">
              <div class="eyes">
                <div class="eye">
                  <div class="pupil"></div> <!-- Aqui está a pupila -->
                </div>
                <div class="eye">
                  <div class="pupil"></div> <!-- Aqui está a pupila -->
                </div>
              </div>
              <div class="mouth">
                <div class="fang"></div>
                <div class="fang"></div>
              </div>
            </div>
          </div>
          <div class="body">
            <div class="cloak"></div>
          </div>
        </div>
        
    </body>
    </html>
    ```

## Estilização com CSS

1. **Configurações Iniciais**:
    - Abra o arquivo `style.css` e adicione o seguinte código:

    ```css
    /* Define o corpo da página com uma altura de 100vh (100% da viewport)
       e usa flexbox para centralizar o conteúdo */
    body {
        height: 100vh; /* Define a altura total da tela */
        display: flex;
        justify-content: center; /* Centraliza o conteúdo horizontalmente */
        align-items: center; /* Centraliza o conteúdo verticalmente */
        background-color: #3f3537; /* Cor de fundo escura, como a noite */
        flex-direction: column;
        gap: 20px; /* Espaçamento entre os elementos */
    }
    ```

    - **Explicação**:
        - `height: 100vh;`: Define a altura da página como 100% da altura da viewport.
        - `display: flex;`: Usa Flexbox para o layout.
        - `justify-content: center;`: Centraliza o conteúdo horizontalmente.
        - `align-items: center;`: Centraliza o conteúdo verticalmente.
        - `background-color: #3f3537;`: Define uma cor de fundo escura.

2. **Lua**:
    - Adicione o seguinte código para estilizar a lua:

    ```css
    /* Lua */
    .moon {
        margin-left: 500px;
        width: 100px;
        height: 100px;
        background-color: #f0e68c; /* Cor amarelada para a lua */
        border-radius: 50%;
        box-shadow: 0 0 20px 10px rgba(255, 255, 255, 0.5); /* Brilho ao redor da lua */
    }
    ```

    - **Explicação**:
        - `width` e `height`: Define o tamanho da lua.
        - `background-color`: Define a cor da lua.
        - `border-radius: 50%;`: Torna a lua circular.
        - `box-shadow`: Adiciona um brilho ao redor da lua.

3. **Vampiro**:
    - Adicione o seguinte código para estilizar o vampiro:

    ```css
    /* Define o contêiner principal do vampiro */
    .vampire {
        display: flex;
        flex-direction: column; /* Alinha os elementos em uma coluna (cabeça e corpo) */
        align-items: center; /* Centraliza o conteúdo dentro do contêiner */
        gap: 10px; /* Espaçamento entre os elementos */
    }

    /* Define a cabeça do vampiro */
    .head {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #f2d9b3; /* Cor de pele clara */
        width: 150px; /* Largura da cabeça */
        height: 150px; /* Altura da cabeça */
        border-radius: 50%; /* Transforma o div em um círculo */
        overflow: hidden; /* Garante que o cabelo fique dentro da cabeça */
    }

    /* Cabelo do vampiro */
    .hair {
        display: flex;
        justify-content: center; /* Centraliza o cabelo */
        width: 100%;
        height: 50%; /* Metade da altura da cabeça */
        background-color: black; /* Cor preta para o cabelo */
        border-top-left-radius: 75px; /* Bordas arredondadas à esquerda no topo */
        border-top-right-radius: 75px; /* Bordas arredondadas à direita no topo */
    }

    /* Define o rosto dentro da cabeça */
    .face {
        display: flex;
        flex-direction: column; /* Organiza os olhos e a boca em uma coluna */
        align-items: center; /* Centraliza os elementos no rosto */
        justify-content: space-around; /* Espaça igualmente os olhos e a boca */
        height: 100%; /* Altura total do div da cabeça */
        padding-top: 10px; /* Afasta o conteúdo do topo da cabeça */
    }

    /* Contêiner para os olhos */
    .eyes {
        display: flex;
        justify-content: space-between; /* Espaça os dois olhos */
        width: 80px; /* Define a largura do espaço dos olhos */
    }

    /* Define os olhos */
    .eye {
        width: 25px; /* Largura do olho */
        height: 25px; /* Altura do olho */
        background-color: white; /* Cor branca para o olho */
        border-radius: 50%; /* Transforma o olho em um círculo */
        display: flex;
        justify-content: center;
        align-items: center;
    }

    /* Define a pupila dentro do olho */
    .pupil {
        width: 8px; /* Largura da pupila */
        height: 8px; /* Altura da pupila */
        background-color: black; /* Cor preta para a pupila */
        border-radius: 50%; /* Pupila redonda */
    }

    /* Define a boca */
    .mouth {
        display: flex;
        justify-content: space-between; /* Espaça as presas dentro da boca */
        width: 50px; /* Largura total da boca */
    }

    /* Define as presas */
    .fang {
        width: 10px; /* Largura de cada presa */
        height: 20px; /* Altura de cada presa */
        background-color: white; /* Cor branca para os dentes */
        border-radius: 0 0 5px 5px; /* Arredonda as bordas inferiores */
    }

    /* Define o corpo do vampiro */
    .body {
        display: flex;
        justify-content: center; /* Centraliza a capa no corpo */
        align-items: center; /* Centraliza o conteúdo verticalmente */
        background-color: black; /* Corpo preto */
        width: 120px; /* Largura do corpo */
        height: 180px; /* Altura do corpo */
        border-radius: 0 0 60px 60px; /* Bordas arredondadas na parte inferior para o formato do corpo */
    }

    /* Define a capa do vampiro */
    .cloak {
        width: 180px; /* Largura da capa */
        height: 80px; /* Altura da capa */
        background-color: red; /* Cor vermelha para a capa */
        border-radius: 0 0 90px 90px; /* Bordas arredondadas na parte inferior para criar o efeito da capa */
        margin-top: -40px; /* Move a capa para cima, sobrepondo-se ao corpo */
    }
    ```

    - **Explicação**:
        - `.vampire`: Define o layout principal do vampiro com Flexbox.
        - `.head`: Define a cabeça do vampiro e a sua estrutura.
        - `.hair`: Define o cabelo do vampiro.
        - `.face`: Organiza os olhos e a boca dentro da cabeça.
        - `.eyes`, `.eye`, `.pupil`: Define os olhos e as pupilas.
        - `.mouth`, `.fang`: Define a boca e as presas do vampiro.
        - `.body`, `.cloak`: Define o corpo e a capa do vampiro.

