import React, { Component } from "react";
import "./Login.css";
class Login extends Component {
  state = {
    username: "",
    password: "",
  };
  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const newState = { ...this.state };
    newState[name] = value;
    this.setState(newState);
    console.log(this.state);
  };
  render() {
    return (
      <div className="loginContainer">
        <h1>Login</h1>
        <div className="form">
          <input
            onChange={this.handleChange}
            type="text"
            placeholder="username"
            name="username"
            value={this.state.username}
          />

          <input
            onChange={this.handleChange}
            type="password"
            placeholder="password"
            name="password"
            value={this.state.password}
          />

          <button className="innerButton">Login</button>
        </div>
      </div>
    );
  }
}

export default Login;
