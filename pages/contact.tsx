import App from '../components/App';
import Form from '../components/Form';
import Footer from '../components/Footer';
import Head from 'next/head';
import Gradient from '../components/Gradient';

const Contact = () => {
  return (
    <App>
      <Head>
        <title>Contact</title>
      </Head>
      <Form />
      <Footer />
      <Gradient />
    </App>
  );
};

export default Contact;
