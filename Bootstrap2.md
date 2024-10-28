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

---

## Desafio da Aula

1. Crie uma página com três cards alinhados horizontalmente. Cada card deve ter uma imagem, um título, um texto explicativo e um botão.
2. Adicione um botão de alerta que, ao ser clicado, exibe um alerta no topo da página.
3. Insira um botão que abra um modal com mais informações sobre o conteúdo de um dos cards.

---

## Conclusão

Nesta aula, você aprendeu a:
- Utilizar o sistema de grid do Bootstrap para organizar o layout da página.
- Criar e personalizar **cards** para organizar conteúdo.
- Adicionar **alertas** para comunicar mensagens de maneira clara.
- Trabalhar com **modais** para exibir informações adicionais.

Na próxima aula, vamos explorar como customizar o Bootstrap e adicionar componentes de formulário para captar dados dos usuários!
