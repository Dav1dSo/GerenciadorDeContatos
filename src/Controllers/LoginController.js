const Login = require('../model/LoginModel');

const UserLogin = async (req, res) => {
    
    try { 
        const login = new Login(req.body);
        await login.Login();

    if(login.error.length > 0) {
        req.flash('error', login.error);
        req.session.save(() => {
        return res.redirect('/login');
    });
        return;
    }  

    req.flash('success', 'Usuário logado com sucesso!');
    req.session.user = login.user;
    req.session.save(() => {
        return res.redirect('/');
    });

} catch(e) {
        console.log(e)
        res.render('404.ejs');
    }
};

module.exports = UserLogin; 
