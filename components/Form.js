import React from 'react';
import fetch from 'isomorphic-unfetch';

export function FormLabel({ htmlFor, title }) {
  return <label htmlFor={htmlFor}>{title}</label>;
}

export default function Form() {
  const [ state, setState ] = React.useState({
    first_name: '',
    last_name: '',
    email: '',
    message: '',
    isActive: true
  });
  const encode = (data) => {
    return Object.keys(data).map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])).join('&');
  };

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
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

    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state
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

    setState({
      first_name: '',
      last_name: '',
      email: '',
      message: '',
      isActive: true
    });
  };

  return (
    <section>
      <h1>Contact</h1>
      <form
        name='contact'
        method='post'
        data-netlify='true'
        data-netlify-honeypot='bot-field'
        ref='contact'
        className='react-form'
        onSubmit={handleSubmit}
      >
        <input type='hidden' name='form-name' value='contact' />
        <h3 className={state.isActive ? 'hide' : ''}>Thanks!</h3>

        <fieldset className='form-group'>
          <FormLabel htmlFor='first_name' title='First Name:' />

          <input
            id='first_name'
            className='form-input'
            name='first_name'
            type='text'
            required
            onChange={handleChange}
          />
        </fieldset>

        <fieldset className='form-group'>
          <FormLabel htmlFor='last_name' title='Last Name:' />

          <input id='last_name' className='form-input' name='last_name' type='text' required onChange={handleChange} />
        </fieldset>

        <fieldset className='form-group'>
          <FormLabel htmlFor='email' title='Email:' />

          <input id='email' className='form-input' name='email' type='email' required onChange={handleChange} />
        </fieldset>

        <fieldset className='form-group'>
          <FormLabel htmlFor='message' title='Message:' />

          <textarea id='message' className='form-textarea' name='message' required onChange={handleChange} />
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
