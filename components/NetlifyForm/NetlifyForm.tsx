import React, { useState } from 'react';
import fetch from 'isomorphic-unfetch';

interface HandleNameChangeInterface {
  target: HTMLInputElement | HTMLTextAreaElement;
}

declare module 'react' {
  interface HTMLAttributes<T> extends DOMAttributes<T> {
    netlify?: boolean;
  }
}

const encode = (str: string): string =>
  Buffer.from(str, 'binary').toString('base64');

export default function NetlifyForm() {
  const [state, setstate] = useState<any | null>({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...state }),
    })
      .then(() => alert('Success!'))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  const handleChange = (event: HandleNameChangeInterface) =>
    setstate({
      [event.target.name]: event.target.value,
    });

  return (
    <section>
      <h1>Contact</h1>
      <form name="contact" netlify netlify-honeypot="bot-field" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="message" />
      </form>
      <form
        netlify
        className="react-form"
        name="contact"
        method="post"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <fieldset className="form-group">
          <label>
            <input
              placeholder="Name"
              type="text"
              name="name"
              value={state.name}
              onChange={handleChange}
            />
          </label>
        </fieldset>
        <fieldset className="form-group">
          <label>
            {' '}
            <input
              placeholder="Email"
              type="email"
              name="email"
              value={state.email}
              onChange={handleChange}
            />
          </label>
        </fieldset>
        <fieldset className="form-group">
          <label>
            <textarea
              placeholder="Message"
              name="message"
              value={state.message}
              onChange={handleChange}
            />
          </label>
        </fieldset>
        <fieldset className="form-group">
          <button id="formButton" className="button" type="submit">
            Send
          </button>
        </fieldset>
      </form>
    </section>
  );
}
