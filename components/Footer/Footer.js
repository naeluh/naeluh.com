import Link from 'next/link';
import { footer } from './footer.module.css';

const Footer = () => (
  <footer class={footer}>
    <div>
      <p>Nick Hulea</p>
      <p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          title="Contact"
          alt="Contact"
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
          alt="Github"
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
          alt="Gitlab"
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
          alt="Dat"
          href="dat://9f7142832a6cffaaf518ddd8a73c1ad5b152aeff66340804a41ecd362cbf2126/"
        >
          DAT
        </a>
      </p>
      <p>
        {' '}
        <Link href="/about">
          <a title="About" alt="About">
            About
          </a>
        </Link>
      </p>
      <p>
        {' '}
        <Link href="/contact">
          <a title="Contact" alt="Contact">
            Contact
          </a>
        </Link>
      </p>
    </div>
  </footer>
);

export default Footer;
