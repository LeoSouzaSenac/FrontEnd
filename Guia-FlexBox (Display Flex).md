# Display Flex: Um Guia Completo

## O que é o display flex?

O `display: flex` é uma forma de organizar elementos em uma página que facilita muito o alinhamento e a distribuição de espaço entre os itens. Ele trabalha com dois eixos: o eixo principal (padrão horizontal) e o eixo cruzado (padrão vertical).

### Exemplo básico de `display: flex`:

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exemplo Display Flex</title>
    <style>
        .container {
            display: flex;
            height: 100vh;
            background-color: #f0f0f0;
        }

        .item {
            background-color: #4caf50;
            color: white;
            padding: 20px;
            margin: 10px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="item">Item 1</div>
        <div class="item">Item 2</div>
        <div class="item">Item 3</div>
    </div>
</body>
</html>
```

## Propriedades Flex do Container

Aqui estão as principais propriedades que podemos usar no container, que é o elemento com `display: flex`.

### 1. `flex-direction`
Define a direção dos itens dentro do container.

- `row`: Itens dispostos em linha (horizontal).
- `row-reverse`: Itens dispostos em linha, mas na ordem inversa.
- `column`: Itens dispostos em coluna (vertical).
- `column-reverse`: Itens dispostos em coluna, mas na ordem inversa.

### 2. `justify-content`
Controla a distribuição dos itens no eixo principal (horizontal, por padrão).

- `flex-start`: Alinha os itens ao início.
- `flex-end`: Alinha os itens ao final.
- `center`: Alinha os itens ao centro.
- `space-between`: Espaçamento igual entre os itens.
- `space-around`: Espaçamento igual ao redor dos itens.
- `space-evenly`: Espaçamento igual entre os itens e nas bordas do container.

### 3. `align-items`
Controla o alinhamento dos itens no eixo cruzado (vertical, por padrão).

- `flex-start`: Alinha ao topo.
- `flex-end`: Alinha ao final.
- `center`: Alinha ao centro.
- `baseline`: Alinha os itens com base na linha de base do texto.
- `stretch`: Os itens esticam para preencher o espaço disponível.

### 4. `align-content`
Controla o alinhamento de múltiplas linhas de itens quando há mais de uma linha (usado com flex-wrap).

- `flex-start`: Alinha as linhas ao topo.
- `flex-end`: Alinha as linhas ao final.
- `center`: Alinha as linhas no centro.
- `space-between`: Espaçamento igual entre as linhas.
- `space-around`: Espaçamento igual ao redor das linhas.
- `stretch`: As linhas se estendem para preencher o espaço vertical.

### 5. `flex-wrap`
Define se os itens devem ou não quebrar linha quando o espaço for insuficiente.

- `nowrap`: Todos os itens ficam em uma linha, mesmo que precisem encolher.
- `wrap`: Itens quebram linha se necessário.
- `wrap-reverse`: Itens quebram linha, mas na ordem inversa.

### 6. `gap`
Define o espaçamento entre os itens no container.

```css
.container {
    gap: 20px; /* Espaçamento de 20px entre os itens */
}
```

## Propriedades Flex dos Filhos (Itens)

Aqui estão as propriedades que podemos usar nos itens dentro do container flex.

### 1. `flex-grow`
Define se o item pode crescer para ocupar espaço extra.

```css
.item {
    flex-grow: 1; /* O item vai crescer igualmente com os outros */
}
```

### 2. `flex-shrink`
Controla se o item vai encolher quando o espaço disponível for menor.

```css
.item {
    flex-shrink: 1; /* O item pode encolher se necessário */
}
```

### 3. `flex-basis`
Define o tamanho inicial do item antes de crescer ou encolher.

```css
.item {
    flex-basis: 200px; /* O item terá 200px de largura ou altura */
}
```

### 4. `align-self`
Permite que o item tenha um alinhamento diferente do especificado pelo `align-items` no container.

- `auto`: Herda do `align-items` do container.
- `flex-start`: Alinha o item ao início.
- `flex-end`: Alinha o item ao final.
- `center`: Alinha o item ao centro.
- `baseline`: Alinha o item com a linha de base do texto.
- `stretch`: Estende o item para preencher o espaço disponível.

### 5. `order`
Define a ordem em que o item aparece. O valor padrão é `0`, mas você pode usar números positivos ou negativos para alterar a ordem.

```css
.item {
    order: 1; /* Altera a ordem do item */
}
```
