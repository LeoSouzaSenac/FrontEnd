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

