# 📄 Como Criar Tabelas em HTML

Tabelas em HTML são usadas para exibir dados de forma organizada em **linhas** e **colunas**, como em uma planilha. São muito úteis para mostrar informações como listas de produtos, horários, resultados, entre outros.

---

## 🧱 Estrutura Básica de uma Tabela

Uma tabela HTML é criada com a tag `<table>` e contém:

- `<tr>`: define uma linha da tabela (**t**able **r**ow)
- `<th>`: define um cabeçalho (negrito e centralizado por padrão)
- `<td>`: define uma célula de dado (normal)

---

## 💻 Exemplo Básico

```html
<table border="1">
  <tr>
    <th>Nome</th>
    <th>Idade</th>
    <th>Cidade</th>
  </tr>
  <tr>
    <td>Maria</td>
    <td>25</td>
    <td>São Paulo</td>
  </tr>
  <tr>
    <td>João</td>
    <td>30</td>
    <td>Rio de Janeiro</td>
  </tr>
</table>
````

---

## 🧩 Explicação dos Elementos

* `<table>`: inicia a tabela.
* `<tr>`: cria uma nova linha.
* `<th>`: cria uma célula de **cabeçalho**.
* `<td>`: cria uma célula de **dados**.

---

## 🎨 Estilizando a Tabela com CSS (exemplo opcional)

```html
<style>
  table {
    border-collapse: collapse;
    width: 100%;
  }

  th, td {
    border: 1px solid #333;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }
</style>
```

---

## 🔀 Atributos Úteis

### `border`

* Define a espessura da borda da tabela.
* Exemplo: `<table border="1">`

### `colspan`

* Une duas ou mais **colunas** em uma só.
* Exemplo:

  ```html
  <td colspan="2">Texto em duas colunas</td>
  ```

### `rowspan`

* Une duas ou mais **linhas** em uma só.
* Exemplo:

  ```html
  <td rowspan="2">Texto em duas linhas</td>
  ```

---

## 🧠 Exemplo Avançado com `colspan` e `rowspan`

```html
<table border="1">
  <tr>
    <th rowspan="2">Produto</th>
    <th colspan="2">Preço</th>
  </tr>
  <tr>
    <th>À vista</th>
    <th>A prazo</th>
  </tr>
  <tr>
    <td>Notebook</td>
    <td>R$ 3.000</td>
    <td>R$ 3.300</td>
  </tr>
</table>
```

---

## ✅ Quando Usar Tabelas

* Exibir dados numéricos ou estatísticos.
* Mostrar resultados, horários, listas organizadas.
* Comparar informações lado a lado.

**⚠️ Importante:** Não use tabelas para criar layouts de páginas. Para isso, use **CSS com divs**.

---

## 🧠 Dica Final

Tabelas são simples de criar, mas poderosas para organizar dados. Use-as com:

* Cabeçalhos claros com `<th>`
* Bordas suaves e espaçamento com CSS
* Responsividade com media queries se necessário
