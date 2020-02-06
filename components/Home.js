import React from "react";
import Link from "next/link";
import ReactDOM from "react-dom";
import Head from "next/head";

class Home extends React.Component {
  state = {
    height: "",
    width: "",
    color: "",
    r: ""
  };

  getRandomArbitrary = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  color = () => {
    return (
      "#" +
      Math.random()
        .toString(16)
        .slice(2, 8)
        .toUpperCase()
    );
  };

  r = this.getRandomArbitrary(
    this.getRandomArbitrary(1.3432, 270.6546),
    this.getRandomArbitrary(1.3432, 70.6546)
  );

  componentDidMount() {
    document.body.style.overflowX = "hidden";
    this.setState({
      height: window.innerHeight,
      width: window.innerWidth,
      color: this.color(),
      r: "rotate3d(1, 1, 1, " + this.r + "deg)"
    });
    window.addEventListener("resize", () => {
      this.setState({
        height: window.innerHeight,
        width: window.innerWidth,
        color: this.color(),
        r: "rotate3d(1, 1, 1, " + this.r + "deg)"
      });
    });
    window.addEventListener("orientationchange", () => {
      this.setState({
        height: window.innerHeight,
        width: window.innerWidth,
        color: this.color(),
        r: "rotate3d(1, 1, 1, " + this.r + "deg)"
      });
    });
  }

  render() {
    return (
      <section>
        <Head>
          <title>Nick Hulea</title>
          <meta name="title" content="Nick Hulea's Website!" />
          <meta name="description" content="Nick Hulea's Website!" />
        </Head>

        <h1>Welcome!</h1>

        <p>Hello you have arrived at the website of Nick Hulea !</p>

        <p>
          Samples of my work can be found{" "}
          <Link href="/work">
            <a prefetch="true">here</a>
          </Link>
          .
        </p>

        <p>
          If you would like to contact me or if you have any questions click{" "}
          <Link href="/contact">
            <a prefetch="true">here</a>
          </Link>
          .
        </p>

        <div
          id="block"
          ref="block"
          style={{
            transform: this.state.r,
            backgroundColor: this.state.color,
            height: this.state.height,
            width: this.state.width
          }}
        />

        <div className="clear" />

        <style jsx>{`
          h1 {
            font-weight: 900;
            font-size: 100px;
            line-height: 1;
            letter-spacing: -0.05em;
          }
          p {
            font-weight: 600;
            font-size: 45px;
            line-height: 1.1;
            letter-spacing: -0.03em;
          }
          @media only screen and (max-width: 480px) {
            h1 {
              font-size: 45px;
            }
            p {
              font-size: 35px;
            }
          }
          body,
          #block {
            overflow-x: hidden;
          }
          #block {
            position: fixed;
            top: 0;
            left: 0;
            z-index: -1;
          }
          .clear {
            clear: both;
            height: 75vh;
          }
        `}</style>
      </section>
    );
  }
}

export default Home;
