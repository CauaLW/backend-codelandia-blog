<h1 align="center">Um backend simples para um blog simples</h1>

<p align="center">	
  <a href="https://www.linkedin.com/in/cau%C3%A3-loewen-werling-a564801b7/">
    <img alt="Cauã L. Werling" src="https://img.shields.io/badge/-Cau%C3%A3L.Werling-FFE162?style=flat&logo=Linkedin&logoColor=black" />
  </a>

  <a href="mailto:caualoewen1@gmail.com">
    <img alt="Cauã L. Werling" src="https://img.shields.io/badge/-caualoewen1@gmail.com-FFE162?style=flat-square&logo=Gmail&logoColor=black" />
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-FFE162">
</p>

<div align="center">
  Projeto desenvolvido para a escrita <a href="https://medium.com/@caualoewen1/um-backend-simples-para-um-blog-simples-448a4fd6d2fc" target="_blank">deste artigo</a>.
</div>

<p align="center">
  <a href="#clipboard-sobre-o-projeto">Sobre o Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#computer-tecnologias-utilizadas">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-how-to-use">How To Use</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#closed-book-licença">Licença</a>
</p>

## :clipboard: Sobre o Projeto

Um backend (API) simples para a escrita de um <a href="https://medium.com/@caualoewen1/um-backend-simples-para-um-blog-simples-448a4fd6d2fc" target="_blank">artigo</a>, usando o desafio da comunidade codelândia como base.

## :computer: Tecnologias utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- NodeJS
- Express
- Mongoose

## :information_source: How To Use

- Clone este repositório: `git clone https://github.com/CauaLW/backend-codelandia-blog`
- Vá até o repositório: `cd backend-codelandia-blog`
- Instale as dependências para o backend: `npm i`
- Inicie o backend: `npm start`
- A porta padrão é 3001.

## Rotas
### Article (/article)
- /  Retorna todos os artigos do banco de dados. <br/>

- /add  Adiciona um artigo, recebe um objeto JSON contendo um título e uma descrição. <br/>
`{
    "title": "Título",
    "description": "Descrição"
}`

- /edit  Edita umartigo, recebe obrigatoriamente o id do artigo, e pode receber um titulo ou uma descrição, em qualquer ordem ou quantidade de campos, somente um, ou ambos. <br/>
`{
    "id": "111222333",
    "description": "Novo título",
    "title": "Nova descrição",
}`

- /delete  Exclui um artigo, recebe o id desejado. <br/>
`{
    "id": "111222333"
}`

## :closed_book: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](https://github.com/CauaLW/backend-codelandia-blog/blob/master/LICENSE) para mais detalhes.
