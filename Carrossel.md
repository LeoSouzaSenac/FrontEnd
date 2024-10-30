# Carrossel com Bootstrap

Este guia mostra como criar um carrossel de imagens usando o Bootstrap 5 e explica a função de cada classe CSS utilizada no projeto.

## Pré-requisitos

- Conhecimento básico de HTML e CSS.
- Conexão com a Internet para carregar os arquivos CDN do Bootstrap.

## Instruções para Configuração

1. Crie um arquivo `index.html`.
2. Adicione o código HTML e inclua os links para o CSS e JS do Bootstrap.
3. Customize o carrossel conforme necessário.

## Código HTML do Carrossel

Aqui está o código completo do carrossel:

```html
<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Carrossel com Bootstrap</title>
    <!-- Bootstrap CSS -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.1/css/bootstrap.min.css" rel="stylesheet">

    <style>
        /* Define uma altura fixa para a div do slide */
        .carousel-item {
            height: 100vh; /* Ajuste a altura conforme necessário */
        }

        /* Força a imagem a ocupar o espaço da div, mantendo a proporção */
        .carousel-item img {
            height: 100%;
            width: 100%;
            object-fit: cover; /* Mantém a imagem proporcional, preenchendo a div */
        }

        /* Centraliza o conteúdo no meio do slide */
        .carousel-caption {
            top: 50%;
            transform: translateY(-50%);
        }
    </style>
</head>
<body>

<div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
    <!-- Indicadores do carrossel -->
    <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>

    <!-- Slides do carrossel -->
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="1.jpg" class="d-block w-100" alt="Primeiro Slide">
            <div class="carousel-caption d-flex flex-column align-items-center justify-content-center text-center">
                <h5 class="display-1">Título do Primeiro Slide</h5>
                <p class="lead">Descrição do primeiro slide.</p>
            </div>
        </div>
        <div class="carousel-item">
            <img src="2.jpg" class="d-block w-100" alt="Segundo Slide">
            <div class="carousel-caption d-flex flex-column align-items-center justify-content-center text-center">
                <h5 class="display-1">Título do Segundo Slide</h5>
                <p class="lead">Descrição do segundo slide.</p>
            </div>
        </div>
        <div class="carousel-item">
            <img src="3.jpg" class="d-block w-100" alt="Terceiro Slide">
            <div class="carousel-caption d-flex flex-column align-items-center justify-content-center text-center">
                <h5 class="display-1">Título do Terceiro Slide</h5>
                <p class="lead">Descrição do terceiro slide.</p>
            </div>
        </div>
    </div>

    <!-- Controles do carrossel -->
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Anterior</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Próximo</span>
    </button>
</div>

<!-- Bootstrap JS -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

## Explicação das Classes e Atributos

### Estrutura Principal

- **`<div id="carouselExample" class="carousel slide" data-bs-ride="carousel">`**
  - **`carousel`**: Classe principal para indicar que este elemento é um carrossel.
  - **`slide`**: Ativa a transição animada entre os slides.
  - **`data-bs-ride="carousel"`**: Configura o carrossel para rodar automaticamente.

### Indicadores do Carrossel

- **`<div class="carousel-indicators">`**: Contém os botões de navegação para selecionar cada slide.
- **`<button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1">`**
  - **`data-bs-target`**: Aponta para o ID do carrossel.
  - **`data-bs-slide-to`**: Define o índice do slide que o botão seleciona.
  - **`class="active"`**: Marca o botão como ativo, indicando o slide atual.
  - **`aria-label`**: Acessibilidade para indicar o slide.

### Slides do Carrossel

- **`<div class="carousel-inner">`**: Contém os slides do carrossel.
- **`<div class="carousel-item active">`**
  - **`carousel-item`**: Classe de cada slide.
  - **`active`**: Indica o slide inicial visível.

### Imagens

- **`<img src="1.jpg" class="d-block w-100" alt="Primeiro Slide">`**
  - **`d-block`**: Define a imagem como um bloco.
  - **`w-100`**: Força a largura da imagem a 100% da área disponível.

### Legendas

- **`<div class="carousel-caption d-flex flex-column align-items-center justify-content-center text-center">`**
  - **`carousel-caption`**: Estilo de legenda para centralizar o texto sobre a imagem.
  - **`d-flex`**: Ativa o Flexbox.
  - **`flex-column`**: Organiza o conteúdo em uma coluna.
  - **`align-items-center`** e **`justify-content-center`**: Centralizam o conteúdo horizontal e verticalmente.
  - **`text-center`**: Centraliza o texto.

### Controles de Navegação

- **`<button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">`**: Botão para o slide anterior.
- **`<button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">`**: Botão para o próximo slide.
- **`carousel-control-prev-icon`** e **`carousel-control-next-icon`**: Ícones para navegação.
- **`visually-hidden`**: Oculta o texto de navegação visualmente, mas mantém para acessibilidade.

### CSS Personalizado

- **`.carousel-item`**: Define uma altura fixa para os slides (100vh).
- **`.carousel-item img`**: Configura a imagem para preencher totalmente a área, mantendo a proporção.
  - **`object-fit: cover`**: Faz com que a imagem preencha o slide, cortando-a se necessário.
- **`.carousel-caption`**: Posiciona o texto centralizado verticalmente.

## Executando o Carrossel

1. Salve o código como `index.html`.
2. Abra o arquivo no navegador para ver o carrossel em funcionamento.

## Personalizações

- Ajuste a altura dos slides (`height` em `.carousel-item`) conforme necessário.
- Substitua as imagens (`1.jpg`, `2.jpg`, `3.jpg`) com suas próprias imagens.

## Referências

- [Documentação do Bootstrap 5 - Carrossel](https://getbootstrap.com/docs/5.3/components/carousel/)
