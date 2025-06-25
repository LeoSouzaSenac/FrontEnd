## 🧪 **Exercício Prático – Explorando Unidades de Medida em CSS**

### 🎯 Objetivo:

Criar uma página HTML simples com caixas coloridas e textos variados, utilizando diferentes unidades de medida em CSS: `px`, `%`, `em`, `rem`, `vh`, `vw` e `clamp()`.

---

### 📄 Enunciado:

Crie uma página chamada **`unidades.html`** contendo os seguintes elementos:

#### 1. **Título da Página (`h1`)**

* Use a função `clamp()` para definir o tamanho da fonte, garantindo que:

  * O tamanho mínimo seja `1.5rem`
  * O ideal seja `5vw`
  * O máximo seja `3rem`

#### 2. **Caixa Fixa com `px`**

* Uma `div` com:

  * Largura: `200px`
  * Altura: `100px`
  * Cor de fundo: verde
  * Texto centralizado dentro: “Caixa com px”

#### 3. **Caixa Responsiva com `%`**

* Dentro de uma `div` maior (largura: `300px`):

  * Crie uma `div` com largura de `50%`
  * Cor de fundo: azul
  * Texto: “50% da largura do container”

#### 4. **Texto com `em` e `rem`**

* Crie uma `div` com fonte base de `20px`
* Dentro dela:

  * Um parágrafo com `font-size: 2em` (deve ficar com `40px`)
  * Outro parágrafo com `font-size: 2rem` (deve ficar com `32px`, se o `html` tiver `font-size: 16px`)

#### 5. **Seção com `vw` e `vh`**

* Uma `div` com:

  * Largura: `100vw`
  * Altura: `30vh`
  * Cor de fundo: laranja
  * Texto: “Esta área ocupa toda a largura da tela e 30% da altura”

---

### ✅ Regras:

* Organize o layout de forma simples e visual.
* Use comentários no código explicando cada parte (`<!-- exemplo de uso de rem -->`).
* Deixe tudo dentro de um único arquivo HTML.
---

### 💡 Dica:

Use o navegador para redimensionar a janela e ver como as unidades se comportam.
