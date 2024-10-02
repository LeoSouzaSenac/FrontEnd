# Criando um Site sobre o Hellcat Demon

## Objetivo
Vamos criar um site, usando linguagens que chamamos de HTMl e CSS, sobre o poderoso Hellcat Demon, o carro mais massa do planeta!

## Primeiro, vamos criar a pasta e os arquivos

1. **Crie uma pasta** chamada `HellcatDemon` no seu computador.
   - Esta pasta vai conter todos os arquivos do seu site.

2. **Dentro dessa pasta**, crie dois arquivos:
   - `index.html` (este será o arquivo principal do site)
   - `styles.css` (este será o arquivo que define o estilo do site)

---

## Passo 1: Criar o Arquivo HTML

1. **Abra o arquivo `index.html`** no VS Code.

2. **Criar a Estrutura Básica do HTML**:
   - **Pressione** `Shift + ! + Enter` 
   - Você verá algo assim:

   ```html
   <!DOCTYPE html>
   <html lang="pt-BR">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title></title>
   </head>
   <body>
   </body>
   </html>
   ```

3. **Adicionar um Título**:
   - Não seria melhor dar um título para o site? É o que aparece na parte de cima, no navegador!
   - Vamos adicionar um título. Dentro das tags `<title>`, escreva:

   ```html
   <title>Hellcat Demon</title>
   ```

   **Seu código deve ficar assim:**

   ```html
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Hellcat Demon</title>
   </head>
   ```

4. **Adicionar uma Frase Principal**:
   - E que tal se colocássemos uma frase 'Este é o carro mais massa do mundo' no começo da nossa página?
   - Adicione a tag `<h1>` no `<body>`:

   ```html
   <h1>Este é o carro mais massa do mundo!</h1>
   ```

5. **Adicionar uma Imagem**:
   - **Encontre uma imagem** do Hellcat Demon e salve na pasta `HellcatDemon` com o nome `hellcat-demon.jpg`.
   - Como podemos adicionar essa imagem ao nosso site?
   - **Resposta**: Use a tag `<img>`. Adicione a seguinte linha logo abaixo do título:

   ```html
   <img src="hellcat-demon.jpg" alt="Dodge Hellcat Demon" style="max-width: 100%;">
   ```

6. **Adicionar Mais Conteúdo**:
   - Vamos adicionar seções sobre o carro. Adicione o seguinte:

   ```html
   <h2>Sobre o Hellcat Demon</h2>
   <p>O Dodge Challenger SRT Hellcat Demon é um carro de alta performance, conhecido por sua potência e velocidade impressionantes.</p>
   <h2>Especificações</h2>
   <ul>
       <li>Motor: V8 de 6.2 litros</li>
       <li>Potência: 840 cv</li>
       <li>Aceleração: 0 a 100 km/h em 2,3 segundos</li>
   </ul>
   ```

7. **Seu arquivo `index.html` deve ficar assim**:

   ```html
   <!DOCTYPE html>
   <html lang="pt-BR">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Hellcat Demon</title>
   </head>
   <body>
       <h1>Este é o carro mais massa do mundo!</h1>
       <img src="hellcat-demon.jpg" alt="Dodge Hellcat Demon" style="max-width: 100%;">
       <h2>Sobre o Hellcat Demon</h2>
       <p>O Dodge Challenger SRT Hellcat Demon é um carro de alta performance, conhecido por sua potência e velocidade impressionantes.</p>
       <h2>Especificações</h2>
       <ul>
           <li>Motor: V8 de 6.2 litros</li>
           <li>Potência: 840 cv</li>
           <li>Aceleração: 0 a 100 km/h em 2,3 segundos</li>
       </ul>
   </body>
   </html>
   ```

---

## Passo 2: Criar o Arquivo CSS
Esse arquivo contém códigos que deixam nosso site mais 'bonitão'.

1. **Abra o arquivo `styles.css`** no seu editor de texto.

2. **Adicionar Estilos Básicos**:
   - Vamos adicionar alguns estilos simples. Digite o seguinte:

   ```css
   body {
       font-family: Arial, sans-serif;
       background-color: #f4f4f4;
       color: #333;
       margin: 0;
       padding: 20px;
   }
   ```

   **Explicação**:
   - `font-family`: Define a fonte do texto.
   - `background-color`: Define a cor de fundo da página.
   - `color`: Define a cor do texto.
   - `margin` e `padding`: Ajustam o espaço na página.

3. **Adicionar Estilo ao Título**:
   - Vamos deixar o cabeçalho mais bonito. Adicione isso no `styles.css`:

   ```css
   h1 {
       color: #ff0000; /* Vermelho */
       text-align: center; /* Centraliza o texto */
   }
   ```

4. **Salvar as Alterações**:
   - **Pergunta**: "Você se lembrou de salvar o arquivo `styles.css`? Isso é importante para ver as mudanças!"

---

## Passo 3: Visualizar o Site

1. **Abra o arquivo `index.html`** no seu navegador (Chrome, Firefox, etc.).
2. **Veja como o seu site está ficando!** Você deve ver o título, a imagem e as seções sobre o carro.

---

## Dicas Finais

- **Personalize**: Você pode mudar as cores, fontes e adicionar mais conteúdo se quiser.
- **Teste**: Sempre visualize no navegador para ver como está ficando.
- **Peça Ajuda**: Se você tiver dúvidas, não hesite em perguntar!

