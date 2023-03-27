import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from './home.module.css';
import Gradient from '../Gradient';

const Home = () => {
  return (
    <section className={styles.center}>
      <div className={styles.innerCenter}>
        <Head>
          <title>Nick Hulea</title>
          <meta name="title" content="Nick Hulea&#39;s Website!" />
          <meta name="description" content="Nick Hulea&#39;s Website!" />
        </Head>

        <h1>Welcome!</h1>

        <p>Hello you have arrived at the website of Nick Hulea !</p>

        <p>
          Samples of my work can be found{' '}
          <Link href="/work">
            <span>here</span>
          </Link>
          .
        </p>

        <p>
          If you would like to contact me or if you have any questions click{' '}
          <Link href="/contact">here</Link>.
        </p>
      </div>

      <Gradient />
    </section>
  );
};

export default Home;
