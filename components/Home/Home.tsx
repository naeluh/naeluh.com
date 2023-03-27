import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import useWindowSize from '../../hooks/useWindowSize';
import useDebounce from '../../hooks/useDebounce';
import Head from 'next/head';
import styles from './home.module.css';

const Home = () => {
  const [boxHeight, setHeight] = useState<number | null>(null);
  const [boxWidth, setWidth] = useState<number | null>(null);
  const [color, setColor] = useState<string>('');
  const [random, setRandom] = useState('');
  const size = useWindowSize();
  const debouncedSize = useDebounce(size, 200);

  const luma = (color: string) => {
    var rgb = typeof color === 'string' ? hexToRGBArray(color) : color;
    return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
  };

  const hexToRGBArray = (color: string) => {
    if (color.length === 3)
      color =
        color.charAt(0) +
        color.charAt(0) +
        color.charAt(1) +
        color.charAt(1) +
        color.charAt(2) +
        color.charAt(2);
    else if (color.length !== 6) throw 'Invalid hex color: ' + color;
    var rgb = [];
    for (var i = 0; i <= 2; i++) rgb[i] = parseInt(color.substr(i * 2, 2), 16);
    return rgb;
  };

  const getRandomArbitrary = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
  };

  const randomColor = (): string => {
    const color = Math.random().toString(16).slice(2, 8).toUpperCase();
    if (luma(color) >= 200) {
      return randomColor();
    } else {
      return `#${color}`;
    }
  };

  const r = getRandomArbitrary(
    getRandomArbitrary(1.3432, 270.6546),
    getRandomArbitrary(1.3432, 70.6546)
  );

  const updateBlock = () => {
    const { height, width } = size;
    if (height && width) {
      document.body.style.overflowX = 'hidden';
      setHeight(height);
      setWidth(width);
      setColor(randomColor());
      setRandom(`rotate(${r}deg)`);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', () => updateBlock());
    window.addEventListener('orientationchange', () => updateBlock());
    return () => {
      window.removeEventListener('resize', () => updateBlock());
      window.removeEventListener('orientationchange', () => updateBlock());
    };
  }, []);

  useEffect(() => {
    if (debouncedSize) {
      updateBlock();
    }
  }, [debouncedSize]);

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

      <div
        id={styles.block}
        style={{
          transform: random,
          background: `linear-gradient(${color} 0%, transparent 100%)`,
          height: boxHeight ? boxHeight : 0,
          width: boxWidth ? boxWidth : 0,
        }}
      />

      <div className={styles.clear} />
    </section>
  );
};

export default Home;
