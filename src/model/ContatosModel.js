const mongoose = require('mongoose');
const { async } = require('regenerator-runtime');
const validator = require('validator')

const ContatoSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    sobrenome: { type: String, required: false, default: '' },
    telefone: { type: Number, required: false, default: '' },
    email: { type: String, required: false, default: '' },
    data: { type: Date, default: Date.now }
});
 
const ContatoModel = mongoose.model('Contato', ContatoSchema); 

function Contato(body) {
    this.body = body;
    this.contato = null;
    this.error = [];
}

Contato.prototype.Register = async function () {
    this.valida();
    if(this.error.length > 0 ) return;
    this.contato = await ContatoModel.create(this.body)
};

Contato.prototype.valida = function() {
    this.CleanUp();
    // Email inválido!
    if(!validator.isEmail(this.body.email)) this.error.push('Email inválido!');
    //nome inválido!
    if(!this.body.nome) this.error.push('Você deve adicionar um nome válido!');
    // nome e telefone!
    if(!this.body.email && !this.body.telefone ) {
        this.error.push('Você precisa cadastrar um telefone ou e-mail válido!')
    }     
}

Contato.prototype.CleanUp = function() {
    for(const key in this.body) {
        if(typeof this.body[key] !== 'string') {
        this.body[key] = "";
        }
    } 
    this.body = {
        nome: this.body.nome,
        sobrenome: this.body.sobrenome,
        telefone: this.body.telefone,
        email: this.body.email
    };
}

Contato.GetId = async function(id) {
    if(typeof id !== 'string') return;
    const user = await ContatoModel.findById(id);
    return user;
}

module.exports = Contato;