const express = require('express')
// Declara nossa aplicação
const app = express()
const mongoose = require('mongoose')

// Conecta ao banco de dados local
mongoose.connect('mongodb://localhost:27017/codelandia', (err) => {
    if(err) return console.log(err)
    console.log('DB Connected')
})

// Permite usar json nas rotas
app.use(express.json())

// Importa as rotas
const articleRoutes = require('./routes/article')

// Define o middleware das rotas
app.use('/article', articleRoutes)

// Recebe / como a rota, e envia um texto para teste
app.get('/', (req, res) => {
    res.send('Olá Express!')
})

// Inicia o servidor na porta 3001
app.listen(3001, () => {
    console.log('Server running at port 3001')
})