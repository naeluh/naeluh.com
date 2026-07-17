'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

import useWindowSize from '../../hooks/useWindowSize';
import useDebounce from '../../hooks/useDebounce';
import styles from './gradient.module.css';

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

const luma = (color: string) => {
  var rgb = typeof color === 'string' ? hexToRGBArray(color) : color;
  return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
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

const Gradient = () => {
  const pathname = usePathname();
  const [boxHeight, setHeight] = useState<number | null>(null);
  const [boxWidth, setWidth] = useState<number | null>(null);
  const [color, setColor] = useState<string>('');
  const [random, setRandom] = useState('');
  const size = useWindowSize();
  const debouncedSize = useDebounce(size, 200);

  const updateBlock = () => {
    const { height, width } = window
      ? { height: window.innerHeight, width: window.innerWidth }
      : { height: 0, width: 0 };
    if (height && width) {
      document.body.style.overflowX = 'hidden';
      const r = getRandomArbitrary(
        getRandomArbitrary(1.3432, 270.6546),
        getRandomArbitrary(1.3432, 70.6546)
      );
      setHeight(height);
      setWidth(width);
      setColor(randomColor());
      setRandom(`rotate(${r}deg)`);
    }
  };

  useEffect(() => {
    if (debouncedSize) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- syncing window size to state
      updateBlock();
    }
  }, [debouncedSize]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- re-randomize gradient per page
    updateBlock();
  }, [pathname]);

  return (
    <>
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
    </>
  );
};

export default Gradient;
