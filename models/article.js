const mongoose = require('mongoose')

// Declara um esquema (Schema) para o banco
const articleSchema = mongoose.Schema({  
    // Define o nome do campo e as opções, como tipo e obrigatório
    title: {
        type: String,
        required: true
     }, 
      description: {
        type: String,
        required: true
     }
   })
    
   // Exporta o esquema como um modelo, passando Article como o nome e o objeto Schema para ser o esquema
   module.exports = mongoose.model('Article', articleSchema)