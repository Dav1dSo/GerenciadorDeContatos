const EditeContatosController = async (req, res) => {
    res.render('Contatos.ejs');

    if(!req.params.id) return res.render('404.ejs');
    const user = await Contato.GetId(req.params.id);
    if(!user) return res.render('404.ejs');

};

module.exports = EditeContatosController;