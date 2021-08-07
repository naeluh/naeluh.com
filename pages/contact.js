import App from '../components/App';
import Header from '../components/Header';
import Form from '../components/Form';
import Footer from '../components/Footer';
import Head from 'next/head';

const Contact = () => {
  return (
    <App>
      <Head>
        <title>Contact</title>
      </Head>
      <Header />
      <Form />
      <Footer />
    </App>
  );
};

export default Contact;
