const mongoose = require('mongoose');
const validator = require('validator');
const bcryptjs = require('bcryptjs');

const LoginSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const LoginModel = mongoose.model('Login', LoginSchema);

class Login {
  constructor(body) { 
    this.body = body;
    this.error = []; 
    this.user = null;
  }

  async Login() {
    this.Check();
    if(this.error.length > 0) return;
    this.user = await LoginModel.findOne({email: this.body.email});

    if(!this.user) {
      this.error.push('Usuário ou senha incorretos!');
      return;
    }

    if(!bcryptjs.compareSync(this.body.password, this.user.password)) {
      this.error.push("Senha inválida!");
      this.user = null;
      return;
    };
  } 


  async Register() { 
    this.Check();
    if(this.error.length > 0) return;

    await this.userExists() 

    const salt = bcryptjs.genSaltSync();
    this.body.password = bcryptjs.hashSync(this.body.password, salt); 

    this.user = await LoginModel.create(this.body);
  }

  async userExists() {
      this.user = await LoginModel.findOne({email: this.body.email});
      if(this.user) this.error.push('Usuário já cadastrado!');
  }

  Check() {
    this.CleanUp();

    // Email inválido!
    if(!validator.isEmail(this.body.email)) this.error.push('Email inválido!');

    // Senha inválida! 
    if(this.body.password.length < 8 || this.body.password.length >= 25 ) this.error.push("Senha deve ter entre 8 e 25 caracteres!");

  }

  CleanUp() {
    for(const key in this.body) {
      if(typeof this.body[key] !== 'string') {
        this.body[key] = "";
      }
    }

    this.body = {
      email: this.body.email,
      password: this.body.password
    };
  }
}

module.exports = Login;