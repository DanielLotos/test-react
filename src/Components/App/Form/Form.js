import React, { Component } from 'react';
import './Form.scss';
// import ReactDOM from 'react-dom';

class Form extends Component {
  state = {
    registration: false
  };

  setValues = (e, newLogin, newPassword) => {
    e.preventDefault();
    localStorage.setItem('testLogin', newLogin);
    localStorage.setItem('testPassword', newPassword);
  }

  render() {
    return (
      <div className="form__block">
        <form onSubmit={(e) => {this.setValues(e, this.login.value, this.password.value)}} className="form">
          <input 
            className="form__input" 
            placeholder="Login"
            ref={(inputLogin) => {this.login = inputLogin}}/>
          <input 
            className="form__input" 
            placeholder="Password"
            ref={(inputPassword) => {this.password = inputPassword}}/>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  };
};

export default Form;