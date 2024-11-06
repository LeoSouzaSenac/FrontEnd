# Exercício de Manipulação de DOM com JavaScript

Neste exercício, você vai praticar a manipulação do DOM utilizando diferentes métodos de seleção de elementos. Para isso, você deve realizar as seguintes ações:

### 1. Selecionar um elemento através do ID e alterar sua cor de fundo para azul
Utilize o método `getElementById` para selecionar um elemento com o ID específico e altere sua cor de fundo para **azul**.

### 2. Selecionar um elemento através do nome da classe e alterar o tamanho da fonte para 20px
Utilize o método `getElementsByClassName` para selecionar um elemento pela classe e altere o tamanho da fonte para **20px**.

### 3. Selecionar um elemento utilizando `querySelector` e adicionar um novo parágrafo com o texto "Novo parágrafo adicionado!" ao final do conteúdo da página.
Utilize o método `querySelector` para selecionar um elemento qualquer e adicione um novo parágrafo ao final da página com o texto especificado.

### 4. Selecionar todos os elementos com uma classe específica usando `querySelectorAll` e remover o primeiro deles da página.
Utilize o método `querySelectorAll` para selecionar todos os elementos com uma classe específica e remova o **primeiro** deles.

### 5. Selecionar um parágrafo específico e alterar seu texto para: "Texto alterado com sucesso!".
Selecione um parágrafo qualquer e altere seu texto para o valor especificado.

---

## Estrutura HTML

Aqui está um exemplo de estrutura HTML que você pode usar para realizar o exercício:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício de Manipulação de DOM</title>
</head>
<body>
    <h1 id="titulo">Manipulação de DOM com JavaScript</h1>
    <p class="paragrafo">Este é um parágrafo de exemplo.</p>
    <p class="paragrafo">Outro parágrafo para exemplo.</p>
    <button id="btnAlterar">Alterar Texto</button>

    <div class="container">
        <p>Texto do container.</p>
    </div>
</body>
</html>
