const router = require('express').Router()
const Article = require('../models/article')

// Retorna todos os artigos no banco
router.get('/', (req, res) => {
    Article.find()
        .then(resul => res.send(resul))
        .catch(err => res.status(400).send(err))
})

// Adiciona um artigo no banco
router.post('/add', (req, res) => {
    const data = req.body
    
    // Declara o titulo e confere se ele existe
    const title = data.title
    if(!title) return res.status(400).send('Você não enviou um título')

    // Declara a descrição e confere se ela existe
    const description = data.description
    if(!description) return res.status(400).send('Você não enviou um título')

    // Declara um novo artigo
    const newArticle = new Article({
        title: title,
        description: description
    })

    // Salva o artigo no banco
    newArticle.save()
        .then(() => res.send('Artigo salvo'))
        .catch(err => res.status(400).send(err))
})

// Edita o artigo
router.put('/edit', (req, res) => {
    const data = req.body

    const id = data.id
    if(!id) return res.status(400).send('Você precisa enviar um id')

    const title = data.title
    const description = data.description

    // Procura o artigo com base no id
    Article.findOne({ _id: id }, (err, article) => {
        if (err) return res.status(400).send(err)
        if(!article) return res.status(401).send('Artigo não existe')

        // Altera o titulo se for enviado
        if(title) article.title = title

        // Altera a descrição se for enviada
        if(description) article.description = description

        // Salva as alterações no artigo e retorna o artigo atualizado
        article.save((err) => {
            if(err) return res.status(400).send(err)

            res.send(article)
        })
    })
})

// Deleta um artigo
router.delete('/delete', (req, res) => {
    const data = req.body

    // Declara e confere se um id existe
    const id = data.id
    if(!id) return res.status(400).send('Você precisa enviar um id')

    // Procura o artigo com base no id e deleta ele
    Article.findOneAndDelete({ _id: id }, (err) => {
        if(err) return res.status(400).send(err)

        res.send('Artigo deletado')
    })
})

module.exports = router