import Link from 'next/link';
import {} from './footer.module.css';

const Footer = () => (
  <footer>
    <div>
      <p>Nick Hulea</p>
      <p>
        Contact:{' '}
        <a
          prefetch="true"
          target="_blank"
          rel="noopener noreferrer"
          title="Contact"
          alt="Contact"
          href="mailto:naeluh@gmail.com"
        >
          naeluh@gmail.com
        </a>
      </p>
      <p>
        Github:{' '}
        <a
          prefetch="true"
          target="_blank"
          rel="noopener noreferrer"
          title="Github"
          alt="Github"
          href="https://github.com/naeluh"
        >
          https://github.com/naeluh
        </a>
      </p>
      <p>
        Gitlab:{' '}
        <a
          prefetch="true"
          target="_blank"
          rel="noopener noreferrer"
          title="Gitlab"
          alt="Gitlab"
          href="https://gitlab.com/naeluh"
        >
          https://gitlab.com/naeluh
        </a>
      </p>
      <p>
        <a
          prefetch="true"
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
          <a title="About" alt="About" prefetch="true">
            About
          </a>
        </Link>
      </p>
      <p>
        {' '}
        <Link href="/contact">
          <a title="Contact" alt="Contact" prefetch="true">
            Contact
          </a>
        </Link>
      </p>
    </div>
  </footer>
);

export default Footer;
