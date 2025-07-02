# 📱 Media Queries no CSS

## ✅ O que são Media Queries?

**Media Queries** são recursos do CSS usados para aplicar estilos diferentes dependendo do **tamanho da tela**, **orientação**, **resolução** e outros aspectos do **dispositivo** onde o site está sendo exibido.

São muito úteis para **criar layouts responsivos**, ou seja, que se adaptam bem a celulares, tablets e desktops.

---

## 🧠 Sintaxe básica

```css
@media condição {
    /* estilos CSS aqui */
}
````

### Exemplo:

```css
@media (max-width: 600px) {
    body {
        background-color: lightblue;
    }
}
```

> Isso significa: **se a largura da tela for menor ou igual a 600px**, mude o fundo do site para azul claro.

---

## 📏 Tipos de Media Features mais comuns

| Feature       | O que faz                                              |
| ------------- | ------------------------------------------------------ |
| `max-width`   | Aplica o estilo até a largura máxima indicada          |
| `min-width`   | Aplica o estilo a partir da largura indicada           |
| `max-height`  | Até uma altura máxima                                  |
| `min-height`  | A partir de uma altura mínima                          |
| `orientation` | Aplica estilo se a tela estiver em paisagem ou retrato |
| `resolution`  | Aplica estilo conforme a resolução da tela             |

---

## 📱 Exemplo prático: Layout adaptável

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Media Query Exemplo</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
        }

        .container {
            padding: 20px;
            background-color: lightgreen;
            text-align: center;
        }

        /* Para telas pequenas, até 600px */
        @media (max-width: 600px) {
            .container {
                background-color: lightcoral;
                font-size: 18px;
            }
        }

        /* Para tablets, entre 601px e 1024px */
        @media (min-width: 601px) and (max-width: 1024px) {
            .container {
                background-color: lightblue;
                font-size: 22px;
            }
        }

        /* Para telas grandes, acima de 1024px */
        @media (min-width: 1025px) {
            .container {
                background-color: lightgreen;
                font-size: 26px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Bem-vindo ao site!</h1>
        <p>Este layout se adapta ao tamanho da sua tela.</p>
    </div>
</body>
</html>
```

---

## 📐 Dica: Usar `viewport` no HTML

Para que as Media Queries funcionem corretamente em dispositivos móveis, use essa meta tag no `<head>` do HTML:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

---

## 🧪 Teste rápido

Abra o exemplo acima em um navegador e:

* Reduza o tamanho da janela para ver a cor mudar.
* Acesse no celular para ver o layout adaptado automaticamente.

---

## 📚 Conclusão

Media Queries são essenciais para criar sites modernos e acessíveis. Elas permitem que seu conteúdo fique legível e bem organizado em **qualquer dispositivo**.

> ✅ Experimente e teste em diferentes tamanhos de tela!

---

## 🚀 Próximos passos

* Aprenda sobre **Flexbox** e **Grid** para layouts mais flexíveis.
* Use ferramentas como **Chrome DevTools** para simular telas diferentes.
* Combine Media Queries com **design mobile-first** (comece pelos estilos para celular).

---

## 🧱 **O que o Flexbox faz?**

O **Flexbox** é um sistema de layout do CSS usado para **organizar elementos dentro de um container**, controlando:

* A direção dos itens (linha ou coluna)
* O espaçamento entre eles
* Alinhamento (horizontal e vertical)
* Quebra de linha automática
* Distribuição proporcional de espaço

### ✅ Use **Flexbox** quando você quiser:

| Situação                              | Exemplo                                  |
| ------------------------------------- | ---------------------------------------- |
| Alinhar itens no centro da tela       | Centralizar um botão no meio da página   |
| Criar colunas e linhas sem usar float | Dividir uma área em 3 colunas            |
| Espaçar elementos igualmente          | Menu com itens separados igualmente      |
| Reorganizar a ordem de elementos      | Colocar o botão antes do texto em mobile |

### 🔧 Exemplo com Flexbox:

```css
.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
```

---

## 📱 **O que as Media Queries fazem?**

As **Media Queries** são usadas para **aplicar estilos diferentes dependendo do tamanho da tela ou do dispositivo**. Elas **mudam regras de CSS** quando certas condições são verdadeiras.

### ✅ Use **Media Queries** quando você quiser:

| Situação                               | Exemplo                                  |
| -------------------------------------- | ---------------------------------------- |
| Mudar layout em telas pequenas         | Tornar 3 colunas em 1 só no celular      |
| Alterar tamanho de fontes em celulares | Diminuir o título no mobile              |
| Esconder um menu em telas pequenas     | Criar menu hambúrguer                    |
| Mudar alinhamento ou ordem dos itens   | Colocar imagem acima do texto no celular |

### 🔧 Exemplo com Media Query:

```css
@media (max-width: 768px) {
    .menu {
        flex-direction: column;
    }
}
```

---

## 🎯 Como usar os dois juntos?

Flexbox e Media Queries **se complementam**:

### 📌 Exemplo prático:

```css
.container {
    display: flex;
    flex-direction: row;
    gap: 20px;
}

/* Em telas pequenas, mudamos a direção com media query */
@media (max-width: 600px) {
    .container {
        flex-direction: column;
    }
}
```

### 🧠 Tradução:

* Em telas grandes: os elementos ficam lado a lado (`row`)
* Em telas pequenas: eles ficam empilhados (`column`)

---

## ✅ Resumo

| Quero...                                | Uso Flexbox? | Uso Media Query? |
| --------------------------------------- | :----------: | :--------------: |
| Alinhar ou distribuir itens             |     ✅ Sim    |       ❌ Não      |
| Alterar layout com base na tela         |     ❌ Não    |       ✅ Sim      |
| Organizar conteúdo em colunas/linhas    |     ✅ Sim    |    ✅ Às vezes    |
| Mudar estilos dependendo do dispositivo |     ❌ Não    |       ✅ Sim      |
