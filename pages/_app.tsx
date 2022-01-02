// pages/_app.js
import React, { useEffect } from 'react';
import Head from 'next/head';
import { initGA, logPageView } from '../lib/analytics';

import '../css/font/inter.css';
import '../css/main.css';
import '../css/print.css';
import '../css/base.css';

const MyApp: React.FC<{ Component: any; pageProps: any }> = ({
  Component,
  pageProps,
}) => {
  useEffect(() => {
    if (!(window as any)['GA_INITIALIZED']) {
      initGA();
      (window as any)['GA_INITIALIZED'] = true;
    }
    logPageView();
  }, []);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;

type Props = {
  Component: {
    getInitialProps: (ctx: any) => {};
  };
  ctx: any;
};

export async function getStaticProps({ Component, ctx }: Props) {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { Component, pageProps };
}
