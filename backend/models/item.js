const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ItemSchema = new Schema({
    title: {               // Entre as opções de Gestão e liderança, como lidar com a covid, worklife balance, auto-cuidado emocional entre outros.  
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {            // Entre as opções de webinars online, palestras presenciais e treinamentos
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    audience: {
        type: Number,
        required: true
    }

// Adicionar para os atributos de...
// Titulo, descrição da ação, categoria (citadas no desafio), duração, audiência (quantidade máxima de pessoas)

});

module.exports = Item = mongoose.model('item', ItemSchema);