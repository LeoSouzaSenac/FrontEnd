## 🎯 **Exercício Prático: Portfólio Responsivo com Flexbox e Media Queries**

### 🧩 Objetivo:

Criar uma página de portfólio para um(a) designer que se adapta a diferentes tamanhos de tela utilizando **Flexbox** e **Media Queries**.

---

### 📐 Estrutura da Página:

A estrutura da página deve conter:

1. **Cabeçalho (header)** com:

   * Nome ou logotipo à esquerda
   * Menu à direita com 3 links (Sobre, Projetos, Contato)

2. **Seção de Apresentação (hero)** com:

   * Foto do(a) designer
   * Um texto de apresentação ao lado

3. **Seção de Projetos** com:

   * 3 cards lado a lado (imagem + título + botão "Ver mais")

4. **Rodapé (footer)** com:

   * Redes sociais em linha

---

### 🧠 Regras do Exercício:

Implemente os seguintes comportamentos usando **Flexbox + Media Queries**:

#### 📱 Telas pequenas (até 768px):

* Menu do header deve virar um menu vertical (um item abaixo do outro)
* A seção de apresentação deve ficar **em coluna** (foto em cima, texto embaixo)
* Os cards dos projetos devem ficar **um abaixo do outro**

#### 💻 Telas médias (769px até 1024px):

* Header com menu horizontal (lado a lado)
* Seção de apresentação deve ficar em **linha**, mas os elementos centralizados
* Projetos devem se organizar em **duas colunas**

#### 🖥️ Telas grandes (acima de 1024px):

* Tudo deve estar em linha
* Projetos devem estar em **três colunas**

---

### 📁 Arquivos esperados:

* `index.html`
* `style.css`
* Imagens fictícias (use imagens de exemplo ou URLs)

---

### 💡 Dicas para os alunos:

* Use `display: flex` e `flex-direction` para manipular o layout
* Utilize `@media screen and (max-width: ...)` para ajustar os layouts
* Use `gap`, `justify-content`, `align-items` para organizar melhor os blocos

