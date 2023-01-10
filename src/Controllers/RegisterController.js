const RegisterController = (req, res) => {
    if(req.session.user) return res.render('UserLogin.ejs');
    res.render('Register.ejs');
};

module.exports = RegisterController;
