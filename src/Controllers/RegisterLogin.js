const Login = require('../model/LoginModel');

const Register = (req, res) => {
    const login = new Login(req.body);
    // login.Register();
    res.send(login.body);
}

module.exports = Register;