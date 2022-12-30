const Express = require('express');
const Routes = Express.Router();
const HomeController = require('../Controllers/HomeController');
const LoginController = require('../Controllers/LoginController');
const RegisterController = require('../Controllers/RegisterController');
const Register = require('../Controllers/Registerlogin');

Routes.get('/', HomeController);

Routes.get('/register', RegisterController);
Routes.post('/login', LoginController);
Routes.post('/registerLogin', Register);

module.exports = Routes;    
