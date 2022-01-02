import Link from 'next/link';
import { footer } from './footer.module.css';

const Footer = () => (
  <footer className={footer}>
    <div>
      <p>Nick Hulea</p>
      <p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          title="Contact"
          href="mailto:naeluh@gmail.com"
        >
          Contact
        </a>
      </p>
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
        <Link href="/about">
          <a title="About">About</a>
        </Link>
      </p>
      <p>
        {' '}
        <Link href="/contact">
          <a title="Contact">Contact</a>
        </Link>
      </p>
    </div>
  </footer>
);

export default Footer;
