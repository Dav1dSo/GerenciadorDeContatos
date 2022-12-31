const Login = require('../model/LoginModel');
const bcryptjs = require('bcryptjs');

const Register = async (req, res) => {
    const login = new Login(req.body);
    await login.Register();
 
    try {
        const salt = bcryptjs.genSaltSync();
        this.body.password = bcryptjs.hashSync(this.body.password, salt );

        if(login.error.length > 0) {
        req.flash('error', login.error);
            req.session.save(() => {
                return res.redirect('/register');
            });
            return;
    } 
    req.flash('success', 'Usuário cadastrado com sucesso!');
    req.session.save(() => {
        return res.redirect('/register');
    });

} catch(e) {
        console.log(e)
        res.render('404.ejs');
    }
}; 

module.exports = Register;