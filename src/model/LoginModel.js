const mongoose = require('mongoose');

const LoginSchema = new mongoose.Schema({
  email: { type: String, required: true },
  senha: { type: String, required: true },
});

const LoginModel = mongoose.model('Login', LoginSchema);

class Login {
  constructor(body) {
    this.body = body;
    this.error = [];
    this.user = null;
  }

  Register() {
    this.Check()
  }

  Check() {
    this.CleanUp()
  }

  CleanUp() {
    for (const key in this.body) {
      if(typeof this.body !== 'string') {
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