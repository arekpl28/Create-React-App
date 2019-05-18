import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    username: "",
    useremail: "",
    pass: "",
    accept: false,
    send_form: "",

    errors: {
      username: false,
      useremail: false,
      pass: false,
      accept: false
    }
  };

  messages = {
    username_incorrect:
      "Your name must be longer than 10 characters and can not contain spaces",
    email_incorrect: "Missing '@' in email",
    password_incorrect: "The password must be 8 characters long",
    accept_incorrect: "Unconfirmed"
  };

  handleChange = e => {
    const name = e.target.name;
    const type = e.target.type;

    if (type === "text" || type === "password" || type === "email") {
      const value = e.target.value;
      this.setState({
        [name]: value
      });
    } else if (type === "checkbox") {
      const checked = e.target.checked;
      this.setState({
        [name]: checked
      });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    const validation = this.formValidation();

    if (validation.correct) {
      this.setState({
        username: "",
        useremail: "",
        pass: "",
        accept: false,
        send_form: "The form has been sent!!",

        errors: {
          username: false,
          useremail: false,
          pass: false,
          accept: false
        }
      });
    } else {
      this.setState({
        errors: {
          username: !validation.username,
          useremail: !validation.useremail,
          pass: !validation.password,
          accept: !validation.accept
        }
      });
    }
  };

  formValidation = () => {
    let username = false;
    let useremail = false;
    let password = false;
    let accept = false;
    let correct = false;

    if (
      this.state.username.length > 10 &&
      this.state.username.indexOf(" ") === -1
    ) {
      username = true;
    }
    if (this.state.useremail.indexOf("@") !== -1) {
      useremail = true;
    }
    if (this.state.pass.length === 8) {
      password = true;
    }
    if (this.state.accept) {
      accept = true;
    }
    if (username && useremail && password && accept) {
      correct = true;
    }
    return {
      username,
      useremail,
      password,
      accept,
      correct
    };
  };

  componentDidUpdate() {
    if (this.state.send_form !== "") {
      setTimeout(() => this.setState({ send_form: "" }), 3000);
    }
  }

  render() {
    const { username, useremail, pass, accept, send_form } = this.state;
    const {
      username_incorrect,
      email_incorrect,
      password_incorrect,
      accept_incorrect
    } = this.messages;

    return (
      <>
        <form onSubmit={this.handleSubmit} noValidate>
          <label htmlFor="username">
            Your name:
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={this.handleChange}
            />
            {this.state.errors.username && <span>{username_incorrect}</span>}
          </label>

          <label htmlFor="useremail">
            Your email:
            <input
              type="email"
              id="useremail"
              name="useremail"
              value={useremail}
              onChange={this.handleChange}
            />
            {this.state.errors.useremail && <span>{email_incorrect}</span>}
          </label>
          <label htmlFor="password">
            Your password:
            <input
              type="password"
              id="password"
              name="pass"
              value={pass}
              onChange={this.handleChange}
            />
            {this.state.errors.pass && <span>{password_incorrect}</span>}
          </label>
          <label htmlFor="accept">
            <input
              type="checkbox"
              name="accept"
              id="accept"
              checked={accept}
              onChange={this.handleChange}
            />
            Confirm
            {this.state.errors.accept && <span>{accept_incorrect}</span>}
          </label>
          <button>Send</button>
        </form>
        {send_form && <h3>{send_form}</h3>}
      </>
    );
  }
}

export default App;
