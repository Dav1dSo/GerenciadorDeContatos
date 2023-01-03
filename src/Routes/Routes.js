const Express = require('express');
const Routes = Express.Router();
const HomeController = require('../Controllers/HomeController');
const LoginController = require('../Controllers/LoginController');
const RegisterController = require('../Controllers/RegisterController');
const Register = require('../Controllers/Registerlogin');
const UserLogin = require('../Controllers/Login')

Routes.get('/', HomeController);

Routes.get('/register', RegisterController); // Realiza o cadastro de usuarios
Routes.get('/login', UserLogin);  // Loga usuario
Routes.post('/login', LoginController);  // Loga usuario
Routes.post('/registerLogin', Register); //Trata os dados do formulario de cadastro de usuario.

module.exports = Routes;    
