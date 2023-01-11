const EditeController = async (req, res) => {

    try {
        if(!res.params.id) return res.render('404.ejs');
        const contato = new Contato(req.body);  
        await contato.Edit(req.params.id);

        if(contato.error.length > 0) {
            req.flash('error', contato.error);
            req.session.save(() => res.redirect('/contatos'));
            return;
        }

        req.flash('success', 'Contato editado com sucesso!');
        req.session.save(() => res.redirect(`/contatos/editContatos/${contato.contato._id}`));
    return;
    } catch(e) {
        console.log(e)
        res.render('404.ejs');
    }
};

module.exports = EditeController;