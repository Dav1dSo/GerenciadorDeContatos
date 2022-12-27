const Express = require('express');
const Routes = Express.Router();
const HomeController = require('../Controllers/HomeController');
const LoginController = require('../Controllers/LoginController');
const RegisterController = require('../Controllers/RegisterController');

Routes.get('/', HomeController);

Routes.get('/register', RegisterController);
Routes.post('/login', LoginController);


module.exports = Routes; 