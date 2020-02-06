import withApollo from "../../lib/withApollo";
import App from "../../components/App";
import Header from "../../components/Header";
import Post from "../../components/Post";
import Footer from "../../components/Footer";
import Router from "next/router";

export default withApollo(() => (
  <App>
    <Header />
    <Post Router={Router} />
    <Footer />
  </App>
));
