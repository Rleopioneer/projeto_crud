
const mongoose = require('mongoose')
//definição da schema (Definição da collection e seus campos)
const schema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    password: String,
})

//criação da collection
//MODEL - VIEW - CONTROLLER
const Model = mongoose.model('customers', schema)

module.exports = Model