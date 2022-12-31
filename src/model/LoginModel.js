const mongoose = require('mongoose');
const validator = require('validator')

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

  async Register() {
    this.Check();
    if(this.error.length > 0) return;

    try {
      this.user = await LoginModel.create(this.body);
    }
    catch(e) {
      console.log(e)
    }
  }

  Check() {
    this.CleanUp();

    // Email inválido!
    if(!validator.isEmail(this.body.email)) this.error.push('Email inválido!');

    // Senha inválida! 
    if(this.body.password.length < 8 || this.body.password.length  >= 25 ) this.error.push("Senha deve ter entre 8 e 25 caracteres!");

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