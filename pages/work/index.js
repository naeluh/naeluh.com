import React from "react";
import App from "../../components/App";
import Header from "../../components/Header";
import PostList from "../../components/PostList";
import Footer from "../../components/Footer";
import { withApollo } from "../../lib/apollo";

export default withApollo(() => (
  <App>
    <Header />
    <PostList />
    <Footer />
  </App>
));
