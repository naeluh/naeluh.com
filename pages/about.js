import App from '../components/App';
import Header from '../components/Header';
import Page from '../components/Page';
import Footer from '../components/Footer';
import { getPage } from '../lib/api';

const About = ({ page }) => {
  return (
    <App>
      <Header />
      <Page data={page} />
      <Footer />
    </App>
  );
};

export default About;

export async function getStaticProps({ preview = false }) {
  const page = await getPage('about');
  return {
    props: { preview, page },
  };
}
