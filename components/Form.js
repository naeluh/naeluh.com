import React from 'react';
import fetch from 'isomorphic-unfetch';

class FormLabel extends React.Component {
  render() {
    return <label htmlFor={this.props.htmlFor}>{this.props.title}</label>;
  }
}

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.ContactForm = React.createRef();
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      message: '',
      isActive: true
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  encode = (data) => {
    return Object.keys(data).map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])).join('&');
  };

  handleChange = (e) => {
    let newState = {};

    newState[e.target.name] = e.target.value;

    this.setState(newState);
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const toggleThanks = () => {
      this.setState((prevState) => ({
        isActive: !prevState.isActive
      }));
      setTimeout(() => {
        this.setState((prevState) => ({
          isActive: !prevState.isActive
        }));
      }, 2000);
    };

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: this.encode({
        'form-name': 'contact',
        ...this.state
      })
    })
      .then(function(response) {
        toggleThanks();
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
        alert('There was some problem with sending your message.');
        console.log(err);
      });

    this.setState({
      first_name: '',
      last_name: '',
      email: '',
      message: '',
      isActive: true
    });
  };

  render() {
    return (
      <section>
        <h1>Contact</h1>
        <form name='form-name' data-netlify='true' netlify-honeypot='bot-field' hidden>
          <input type='text' name='name' />
          <input type='email' name='email' />
          <textarea name='message' />
        </form>
        <form ref='contact' name='contact' data-netlify='true' className='react-form' onSubmit={this.handleSubmit}>
          <h3 className={this.state.isActive ? 'hide' : ''}>Thanks!</h3>

          <fieldset className='form-group'>
            <FormLabel htmlFor='first_name' title='First Name:' />

            <input
              id='first_name'
              className='form-input'
              name='first_name'
              type='text'
              required
              onChange={this.handleChange}
              value={this.state.first_name}
            />
          </fieldset>

          <fieldset className='form-group'>
            <FormLabel htmlFor='last_name' title='Last Name:' />

            <input
              id='last_name'
              className='form-input'
              name='last_name'
              type='text'
              required
              onChange={this.handleChange}
              value={this.state.last_name}
            />
          </fieldset>

          <fieldset className='form-group'>
            <FormLabel htmlFor='email' title='Email:' />

            <input
              id='email'
              className='form-input'
              name='email'
              type='email'
              required
              onChange={this.handleChange}
              value={this.state.email}
            />
          </fieldset>

          <fieldset className='form-group'>
            <FormLabel htmlFor='message' title='Message:' />

            <textarea
              id='message'
              className='form-textarea'
              name='message'
              required
              onChange={this.handleChange}
              value={this.state.message}
            />
          </fieldset>

          <fieldset className='form-group'>
            <input id='formButton' className='button' type='submit' placeholder='Send message' />
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
