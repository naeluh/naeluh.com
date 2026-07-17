import App from '../components/App';
import Header from '../components/Header';
import Page from '../components/Page';
import Footer from '../components/Footer';
import { getMarkdownPage } from '../lib/getMarkdownPage.js';

const About: React.FC<{ page?: any }> = ({ page }) => {
  return (
    <App>
      <Header />
      <Page data={page} />
      <Footer />
    </App>
  );
};

export default About;

export async function getStaticProps() {
  const page = getMarkdownPage('about', 'About');
  return {
    props: { page },
  };
}
