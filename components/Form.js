import fetch from 'isomorphic-unfetch'

export function FormLabel({ htmlFor, title }) {
  return <label htmlFor={htmlFor}>{title}</label>
}

export default function Form() {
  const [state, setState] = React.useState({
    first_name: '',
    last_name: '',
    email: '',
    message: '',
    isActive: true,
    fetchMessage: '',
  })
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&')
  }

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const toggleMessage = (message) => {
    setState((prevState) => ({
      isActive: !prevState.isActive,
      fetchMessage: message,
    }))
    setTimeout(() => {
      setState((prevState) => ({
        isActive: !prevState.isActive,
      }))
    }, 2000)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(function (response) {
        toggleMessage('Thanks!')
        // console.log(response);
      })
      .then(function (json) {
        // console.log(json);
      })
      .catch(function (err) {
        toggleMessage('There was some problem with sending your message.')
        // console.log(err);
      })

    setState({
      first_name: '',
      last_name: '',
      email: '',
      message: '',
      isActive: true,
    })
  }

  return (
    <section>
      <h1>Contact</h1>
      <h3 className={state.isActive ? 'hide' : ''}>{state.fetchMessage}</h3>
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        className="react-form"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <fieldset className="form-group">
          <FormLabel htmlFor="first_name" title="First Name:" />

          <input
            id="first_name"
            className="form-input"
            name="first_name"
            type="text"
            required
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
          />
        </fieldset>

        <fieldset className="form-group">
          <FormLabel htmlFor="message" title="Message:" />

          <textarea
            id="message"
            className="form-textarea"
            name="message"
            required
            onChange={handleChange}
          />
        </fieldset>

        <fieldset className="form-group">
          <button
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
            }}
            id="formButton"
            className="button"
            placeholder="Send message"
            type="submit"
          >
            Send
          </button>
        </fieldset>
        <style jsx>{`
          .react-form {
            margin-bottom: 0 40px;
          }
        `}</style>
      </form>
    </section>
  )
}
