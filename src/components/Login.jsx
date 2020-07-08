import React, { Component } from 'react';
import '../styles/login.css'

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.mailInput = React.createRef();
    this.passwordInput = React.createRef();

    this.state = {
      mail: '',
      password: '',
      error: false,
      token: '',
    };

    this.login = this.login.bind(this);
  }


  async login() {
    await this.setState(
      { mail: this.mailInput.current.value, password: this.passwordInput.current.value },
    );
    const data = {
        mail: this.state.mail,
        password: this.state.password
    }
    const response = await fetch('http://localhost:3000/api/auth', {
      method: 'POST',
      body: JSON.stringify(data),
    });

    const {token, error } = await response.json()
    if (token){
        this.setState({token: token, error: false})
        localStorage.setItem('token', token);
        window.location.reload(false)
    }
    else {
        this.setState({token: '', error: error})
        localStorage.removeItem('token');
    }
   
  }

  render() {
    let errorMsg;
    const { error } = this.state;
    
    if (error) {
      errorMsg = <h5 className="errorMsg">El correo electrónico o la contraseña se ha introducido de forma incorrecta.</h5>;
    }
    return (
      <div className="card">
        <h2>Iniciar Sesión</h2>
        {errorMsg}
        <form>
          <input type="text" placeholder="Mail" ref={this.mailInput} />
          <input type="password" placeholder="Contraseña" ref={this.passwordInput} />
          <input type="button"  value= "Iniciar Sesión" onClick={this.login}/>
          
            
        </form>
      </div>
    );
  }
}