const Express = require('express');
const Routes = Express.Router();
const HomeController = require('../Controllers/HomeController');
const LoginController = require('../Controllers/LoginController');
const RegisterController = require('../Controllers/RegisterController');
const Register = require('../Controllers/Registerlogin');
const UserLogin = require('../Controllers/Login')
const LogoutController = require('../Controllers/LogoutController');
const ContatosController = require('../Controllers/ContatosController');
const { RequiredLogin } = require('../middlewares/middlewares');
const RegisterContatosController = require('../Controllers/ResgisterContatosController');

Routes.get('/', HomeController);

// Rotas de login
Routes.get('/login', UserLogin);  // Loga usuario
Routes.post('/login', LoginController);  // Loga usuario
Routes.get('logout', LogoutController) // Faz logout do usuário
Routes.get('/register', RegisterController); // Realiza o cadastro de usuarios
Routes.post('/registerLogin', Register); //Trata os dados do formulario de cadastro de usuario.

// Rotas de contatos
Routes.get('/contatos', RequiredLogin, ContatosController);
Routes.post('/contatos/create', RegisterContatosController);

module.exports = Routes;    
