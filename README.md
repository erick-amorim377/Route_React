# Route React

Projeto de aprendizado focado em **React Router**, criado para praticar navegação entre páginas em uma aplicação React, uso de rotas dinâmicas, redirecionamento, leitura de parâmetros da URL e busca com query string.

## Sobre o projeto

Esta aplicação simula uma pequena vitrine de produtos. Os dados são carregados de uma API local fake com `json-server`, enquanto o frontend usa o React para renderizar as páginas e o React Router para controlar a navegação.

Durante o estudo, o projeto demonstra conceitos como:

- navegação entre páginas com `BrowserRouter`
- definição de rotas com `Routes` e `Route`
- rotas dinâmicas com `:id`
- leitura de parâmetros com `useParams`
- leitura de query string com `useSearchParams`
- redirecionamento com `Navigate`
- navegação programática com `useNavigate`
- consumo de dados com um hook customizado (`useFetch`)

## Funcionalidades

- listagem de produtos na página inicial
- página "Sobre"
- página de detalhes do produto
- rota de informações extras do produto
- busca de produtos pelo nome usando parâmetros na URL
- redirecionamento de `/company` para `/about`
- página `404` para rotas não encontradas

## Stack utilizada

- React 19
- React DOM 19
- React Router DOM 7
- Vite
- JSON Server
- ESLint
- JavaScript (JSX)
- CSS

## Estrutura principal

```text
src/
  App.jsx
  main.jsx
  hook/
    useFetch.jsx
  pages/
    Home.jsx
    About.jsx
    Products.jsx
    info.jsx
    Search.jsx
    NotFound.jsx
components/
  Navbar.jsx
  SearchForm.jsx
data/
  db.json
```

## Rotas do projeto

- `/` -> lista de produtos
- `/about` -> página sobre
- `/products/:id` -> detalhes de um produto
- `/products/:id/info` -> informações adicionais do produto
- `/search?name=...` -> resultado da busca
- `/company` -> redireciona para `/about`
- `*` -> página 404

## Como rodar no PC

### Pré-requisitos

- Node.js instalado
- npm instalado

### 1. Instale as dependências

```bash
npm install
```

### 2. Inicie a API fake

```bash
npm run server
```

O `json-server` será iniciado em:

```text
http://localhost:3001
```

### 3. Em outro terminal, inicie o frontend

```bash
npm run dev
```

Depois disso, abra no navegador o endereço mostrado pelo Vite, normalmente:

```text
http://localhost:5173
```

## Scripts disponíveis

```bash
npm run dev
```

Inicia o projeto em modo de desenvolvimento com Vite.

```bash
npm run server
```

Inicia a API local fake com base no arquivo `data/db.json`.

```bash
npm run build
```

Gera a versão de produção do projeto.

```bash
npm run preview
```

Abre a pré-visualização da build de produção.

```bash
npm run lint
```

Executa a análise de código com ESLint.

## Objetivo educacional

Este projeto foi criado com foco em estudo prático de rotas no React. Ele é útil para entender como organizar páginas, navegar entre telas e trabalhar com URLs dinâmicas em aplicações frontend.
