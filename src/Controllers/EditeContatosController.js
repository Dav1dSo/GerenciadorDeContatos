const Contato = require('../model/ContatosModel')

const EditeContatosController = async (req, res) => {

    if(!req.params.id) return res.render('404.ejs');
    const contato = await Contato.GetId(req.params.id);
    if(!contato) return res.render('404.ejs');

    res.render('Contatos.ejs', { contato });

};

module.exports = EditeContatosController;  