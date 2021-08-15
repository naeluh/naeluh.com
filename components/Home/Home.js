import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import useWindowSize from '../../hooks/useWindowSize';
import useDebounce from '../../hooks/useDebounce';
import Head from 'next/head';

export default function HomeNew() {
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');
  const [color, setColor] = useState('');
  const [random, setRandom] = useState('');
  const size = useWindowSize();
  const debouncedSize = useDebounce(size, 100);

  const getRandomArbitrary = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  const randomColor = () => {
    return '#' + Math.random().toString(16).slice(2, 8).toUpperCase();
  };

  const r = getRandomArbitrary(
    getRandomArbitrary(1.3432, 270.6546),
    getRandomArbitrary(1.3432, 70.6546)
  );

  const updateBlock = () => {
    document.body.style.overflowX = 'hidden';
    setHeight(size.height);
    setWidth(size.width);
    setColor(randomColor());
    setRandom(`rotate(${r}deg)`);
  };

  useEffect(() => {
    window.addEventListener('resize', updateBlock);
    window.addEventListener('orientationchange', updateBlock);
  }, []);

  useEffect(() => {
    if (debouncedSize) {
      updateBlock();
    }
  }, [debouncedSize]);

  return (
    <section>
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
          <a prefetch="true">
            <span>here</span>
          </a>
        </Link>
        .
      </p>

      <p>
        If you would like to contact me or if you have any questions click{' '}
        <Link href="/contact">
          <a prefetch="true">here</a>
        </Link>
        .
      </p>

      <div
        id="block"
        style={{
          transform: random,
          backgroundColor: color,
          height: height,
          width: width,
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
