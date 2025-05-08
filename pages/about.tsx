import App from '../components/App';
import Page from '../components/Page';
import Footer from '../components/Footer';
import { getPage } from '../lib/api.js';

const About: React.FC<{ page?: any }> = ({ page }) => {
  return (
    <App>
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
