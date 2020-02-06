import React from "react";
import App from "../components/App";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../components/Home";

class PageIndex extends React.Component {
  render() {
    return (
      <App>
        <Header />
        <Home title="Home Page" />
        <Footer />
      </App>
    );
  }
}

export default PageIndex;
