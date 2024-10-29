# Aula 2: Explorando Bootstrap - Layouts e Componentes Avançados

Neste guia, vamos aprofundar o uso do Bootstrap, explorando mais sobre seu sistema de grid, layout responsivo e alguns dos principais componentes avançados.

---

## Objetivo da Aula
Aprender a utilizar o sistema de grid do Bootstrap para criar layouts flexíveis e responsivos, além de explorar componentes como **cards**, **alertas**, e **modais**.

---

## Conteúdos

1. **Revisão Rápida do Sistema de Grid**
2. **Utilizando Cards para Organizar Conteúdo**
3. **Exibindo Alertas Customizados**
4. **Utilizando Modais para Exibir Informações**

---

## 1. Revisão Rápida do Sistema de Grid

O sistema de grid do Bootstrap divide a página em colunas, facilitando a criação de layouts adaptáveis a diferentes tamanhos de tela.

### Exemplo de Uso do Grid

```html
<div class="container">
  <div class="row">
    <div class="col-md-6">Coluna 1</div>
    <div class="col-md-6">Coluna 2</div>
  </div>
</div>
```

- `container`: Centraliza o conteúdo e aplica margens laterais.
- `row`: Cria uma linha para as colunas.
- `col-md-*`: Define a largura da coluna, onde `*` representa o número de colunas ocupadas (1 a 12).

---

## 2. Utilizando Cards para Organizar Conteúdo

Os **cards** são componentes visuais que facilitam a organização de informações em "caixas" bem definidas, com suporte para títulos, textos, imagens e botões.

### Exemplo de Card Simples

```html
<div class="card" style="width: 18rem;">
  <img src="imagem.jpg" class="card-img-top" alt="Imagem do Card">
  <div class="card-body">
    <h5 class="card-title">Título do Card</h5>
    <p class="card-text">Texto explicativo do card, fornecendo informações adicionais.</p>
    <a href="#" class="btn btn-primary">Clique aqui</a>
  </div>
</div>
```

---

## 3. Exibindo Alertas Customizados

Bootstrap permite criar alertas coloridos para diferentes tipos de mensagens, como sucesso, erro e aviso.

### Exemplo de Alerta de Sucesso

```html
<div class="alert alert-success" role="alert">
  Esta é uma mensagem de sucesso!
</div>
```

### Tipos de Alertas Disponíveis

- **alert-success**: Verde, usado para mensagens de sucesso.
- **alert-danger**: Vermelho, usado para mensagens de erro.
- **alert-warning**: Amarelo, para avisos.
- **alert-info**: Azul claro, para informações.

---

## 4. Utilizando Modais para Exibir Informações

Modais são janelas que surgem sobre o conteúdo da página, geralmente usadas para mostrar informações ou capturar ações do usuário.

### Exemplo de Modal

```html
<!-- Botão para abrir o modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#meuModal">
  Abrir Modal
</button>

<!-- Estrutura do Modal -->
<div class="modal fade" id="meuModal" tabindex="-1" aria-labelledby="meuModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="meuModalLabel">Título do Modal</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button>
      </div>
      <div class="modal-body">
        Conteúdo do modal, que pode incluir texto, imagens, ou formulários.
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
        <button type="button" class="btn btn-primary">Salvar mudanças</button>
      </div>
    </div>
  </div>
</div>
```

### Explicação das Classes e Atributos

- **type="button"**: Define o elemento como um botão. Isso assegura que o botão funcione corretamente em qualquer contexto HTML.

- **class="btn btn-primary"**:
  - **btn**: Aplica o estilo de botão básico do Bootstrap, com espaçamento, bordas, e estilos de texto.
  - **btn-primary**: Aplica uma cor de destaque ao botão, geralmente azul por padrão em Bootstrap, indicando que é uma ação principal.

- **data-bs-toggle="modal"**: 
  - Indica que o botão acionará a abertura de um modal. Esse atributo Bootstrap facilita a ativação de modais sem a necessidade de JavaScript.

- **data-bs-target="#meuModal"**: 
  - Especifica o modal que será aberto ao clicar no botão, usando o valor do atributo `id` do modal (`meuModal`). 
  - Este atributo conecta o botão ao modal específico que será exibido, garantindo que o conteúdo correto seja apresentado.


### `<div class="modal fade" id="meuModal" tabindex="-1" aria-labelledby="meuModalLabel" aria-hidden="true">`
- **modal**: Define que o elemento será um modal, que é uma janela de diálogo exibida sobre o conteúdo principal.
- **fade**: Adiciona uma animação de fade-in (desvanecimento) ao modal.
- **id="meuModal"**: Um identificador único para o modal, necessário para referenciá-lo quando for chamado.
- **tabindex="-1"**: Remove o modal da ordem de tabulação, impedindo que seja selecionado até estar visível.
- **aria-labelledby="meuModalLabel"**: Indica que o título do modal está definido pelo elemento com o id `meuModalLabel`.
- **aria-hidden="true"**: Define que o modal está oculto por padrão para leitores de tela e dispositivos de acessibilidade.

### `<div class="modal-dialog">`
- **modal-dialog**: Define a caixa de diálogo do modal, centralizando e dimensionando o conteúdo interno.

### `<div class="modal-content">`
- **modal-content**: Aplica o estilo principal do modal, com bordas, cores de fundo, e sombras.

### `<div class="modal-header">`
- **modal-header**: Define o cabeçalho do modal, geralmente incluindo o título e o botão para fechar o modal.

### `<h5 class="modal-title" id="meuModalLabel">Título do Modal</h5>`
- **modal-title**: Define o estilo do título do modal, aplicando tamanho e estilo de fonte apropriados.
- **id="meuModalLabel"**: Um identificador que associa o título do modal ao atributo `aria-labelledby` da div principal.

### `<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button>`
- **btn-close**: Um botão estilizado para fechar o modal, fornecido pelo Bootstrap.
- **data-bs-dismiss="modal"**: Atributo que fecha o modal quando o botão é clicado.
- **aria-label="Fechar"**: Texto alternativo para leitores de tela, indicando que o botão serve para fechar o modal.

### `<div class="modal-body">`
- **modal-body**: Área principal do modal onde o conteúdo (texto, imagens, formulários, etc.) é exibido.

### `<div class="modal-footer">`
- **modal-footer**: Área do rodapé do modal, onde geralmente são colocados botões de ação, como "Fechar" ou "Salvar".

### `<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>`
- **btn**: Classe base de botão no Bootstrap, que aplica estilos de botão comuns.
- **btn-secondary**: Estilo de botão secundário, com cor de fundo mais neutra.
- **data-bs-dismiss="modal"**: Fecha o modal ao clicar no botão.

### `<button type="button" class="btn btn-primary">Salvar mudanças</button>`
- **btn-primary**: Classe de botão principal, normalmente estilizada com uma cor de destaque.


---

## Desafio da Aula

1. Crie uma página com três cards alinhados horizontalmente. Cada card deve ter uma imagem, um título, um texto explicativo e um botão.
2. Insira um botão que abra um modal com mais informações sobre o conteúdo de um dos cards.

---

## Conclusão

Nesta aula, você aprendeu a:
- Utilizar o sistema de grid do Bootstrap para organizar o layout da página.
- Criar e personalizar **cards** para organizar conteúdo.
- Adicionar **alertas** para comunicar mensagens de maneira clara.
- Trabalhar com **modais** para exibir informações adicionais.

Na próxima aula, vamos explorar como customizar o Bootstrap e adicionar componentes de formulário para captar dados dos usuários!
