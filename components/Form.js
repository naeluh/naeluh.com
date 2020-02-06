import React from "react";
import fetch from "isomorphic-unfetch";

class FormLabel extends React.Component {
  render() {
    return <label htmlFor={this.props.htmlFor}>{this.props.title}</label>;
  }
}

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      message: "",
      isActive: true
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    let newState = {};

    newState[e.target.name] = e.target.value;

    this.setState(newState);
  };

  handleSubmit = e => {
    e.preventDefault();

    const toggleNav = () => {
      this.setState(prevState => ({
        isActive: !prevState.isActive
      }));
      setTimeout(() => {
        this.setState(prevState => ({
          isActive: !prevState.isActive
        }));
      }, 2000);
    };

    let formData = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      message: this.state.message
    };

    if (
      formData.first_name.length < 1 ||
      formData.email.length < 1 ||
      formData.last_name.length < 1 ||
      formData.message.length < 1
    ) {
      return false;
    }

    let body = new FormData();

    body.append("first_name", formData.first_name);
    body.append("last_name", formData.last_name);
    body.append("email", formData.email);
    body.append("message", formData.message);

    fetch("https://hulea.org/contact-form.php", {
      method: "POST",
      mode: "cors",
      body: body
    })
      .then(function(response) {
        toggleNav();
        if (response.status !== 200) {
          // dispatch(setError(response.status + '===>' + response.statusText + '===>' + response.url))
        }
        return response.json();
      })
      .then(function(json) {
        // if (confirm('Thank you for your message. Can I erase the form?')) {
        // }
        ///dispatch(setData(json, q))
      })
      .catch(function(err) {
        alert("There was some problem with sending your message.");
        console.log(err);
      });

    this.setState({
      first_name: "",
      last_name: "",
      email: "",
      message: "",
      isActive: true
    });
  };

  render() {
    return (
      <section>
        <h1>Contact</h1>
        <form className="react-form" onSubmit={this.handleSubmit}>
          <h3 className={this.state.isActive ? "hide" : ""}>Thanks!</h3>

          <fieldset className="form-group">
            <FormLabel htmlFor="first_name" title="First Name:" />

            <input
              id="first_name"
              className="form-input"
              name="first_name"
              type="text"
              required
              onChange={this.handleChange}
              value={this.state.first_name}
            />
          </fieldset>

          <fieldset className="form-group">
            <FormLabel htmlFor="last_name" title="Last Name:" />

            <input
              id="last_name"
              className="form-input"
              name="last_name"
              type="text"
              required
              onChange={this.handleChange}
              value={this.state.last_name}
            />
          </fieldset>

          <fieldset className="form-group">
            <FormLabel htmlFor="email" title="Email:" />

            <input
              id="email"
              className="form-input"
              name="email"
              type="email"
              required
              onChange={this.handleChange}
              value={this.state.email}
            />
          </fieldset>

          <fieldset className="form-group">
            <FormLabel htmlFor="message" title="Message:" />

            <textarea
              id="message"
              className="form-textarea"
              name="message"
              required
              onChange={this.handleChange}
              value={this.state.message}
            />
          </fieldset>

          <fieldset className="form-group">
            <input
              id="formButton"
              className="button"
              type="submit"
              placeholder="Send message"
            />
          </fieldset>
          <style jsx>{`
            .react-form {
              margin-bottom: 0 40px;
            }
          `}</style>
        </form>
      </section>
    );
  }
}

export default Form;
