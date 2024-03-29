import Link from 'next/link';
import styles from './footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <div>
      <p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          title="Github"
          href="https://github.com/naeluh"
        >
          Github
        </a>
      </p>
      <p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          title="Gitlab"
          href="https://gitlab.com/naeluh"
        >
          Gitlab
        </a>
      </p>
      <p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          title="Dat"
          href="dat://9f7142832a6cffaaf518ddd8a73c1ad5b152aeff66340804a41ecd362cbf2126/"
        >
          DAT
        </a>
      </p>
      <p>
        {' '}
        <Link href="/about">About</Link>
      </p>
      <p>
        {' '}
        <Link href="/contact">Contact</Link>
      </p>
    </div>
  </footer>
);

export default Footer;
