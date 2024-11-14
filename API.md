# Introdução ao Conceito de API

## 1. O Que é uma API?
Imagine uma **API** como um **garçom em um restaurante**. 
- O aluno é o cliente, o garçom é a API e a cozinha é o servidor.
- O cliente (navegador ou aplicação front-end) faz um pedido ao garçom, que leva a solicitação até a cozinha (servidor).
- A cozinha prepara a comida (os dados) e o garçom (API) traz a resposta de volta para o cliente.
  
Esse ciclo descreve como uma API funciona: **ela leva pedidos e traz respostas**.

## 2. Por Que Usar APIs?
APIs facilitam o acesso a dados e funcionalidades de outras aplicações. Por exemplo:
- Em vez de criar um sistema de login do zero, você pode usar a **API de login do Google** ou do **Facebook**.
- **Sites e aplicativos populares** (Instagram, Twitter, Google Maps) utilizam APIs para **compartilhar informações entre si**.

## 3. Tipos de APIs (com foco em REST)
A API REST (ou RESTful) é um dos tipos mais comuns:
- Responde a pedidos com URLs específicas e envia dados em **formato JSON**.
- O JSON é fácil de ler e de usar no JavaScript, o que o torna ideal para comunicação entre o cliente e o servidor.

## 4. HTTP Verbs (Métodos)
Aqui estão os métodos básicos de uma API RESTful e como eles funcionam:

- **GET**: Pega informações (ler algo).
- **POST**: Cria uma nova informação (adicionar algo).
- **PUT**: Atualiza uma informação existente (modificar algo).
- **DELETE**: Apaga uma informação.

## 5. Como Funciona uma Requisição (de forma prática)
Para entender uma requisição na prática, vamos examinar como o navegador faz uma **requisição GET** para carregar informações de um site:

## 6. Exemplo Prático de Consumo de API com JavaScript
Vamos fazer um mini-projeto usando HTML e JavaScript para consumir uma **API pública gratuita de piadas**.

### Código de Exemplo

Crie um arquivo `index.html` com o seguinte conteúdo:

```html
<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>API de Piadas</title>
</head>
<body>
    <h1>Piadas do Chuck Norris</h1>
    <button id="fetchJoke">Pegar Piada</button>
    <p id="joke"></p>

    <script>
        document.getElementById('fetchJoke').addEventListener('click', function() {
            fetch('https://api.chucknorris.io/jokes/random')
                .then(response => response.json())  // Transforma a resposta em JSON
                .then(data => {
                    document.getElementById('joke').textContent = data.value;
                })
                .catch(error => console.error('Erro:', error));
        });
    </script>
</body>
</html>
```

### Explicação do Código:
- O botão "Pegar Piada" aciona uma requisição **GET** para a API de piadas.
- O código JavaScript usa o `fetch` para fazer a requisição.
- A **API responde com um objeto JSON** contendo a piada, e o código exibe o texto na tela.

## 7. Discussão e Experimentação
Peça aos alunos para **alterarem a URL** para experimentar outras respostas, como uma API de clima para pegar a temperatura atual.

### Ideias para Projetos:
- Exibir notícias, mostrar o clima ou até integrar redes sociais usando APIs públicas.

## 8. Conclusão e Benefícios das APIs
As APIs permitem reutilizar serviços já prontos, economizando tempo no desenvolvimento. Incentive os alunos a explorar APIs públicas e pensar em **projetos simples** que podem criar com essas ferramentas.


