import React from 'react';
import styles from './app.module.css';

const App: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <>
    <a className={styles.skipNavigationLink} href="#main-content">
      Skip to Main Content
    </a>
    <main id="main-content">{children}</main>
  </>
);

export default App;
