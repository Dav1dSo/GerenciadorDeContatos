const Login = require('../model/LoginModel');

const Register = async (req, res) => {
    const login = new Login(req.body);
    await login.Register();
 
    try {
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