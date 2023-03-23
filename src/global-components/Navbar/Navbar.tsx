import React from 'react';

import styles from './Navbar.module.scss';
import { Navigation } from './Navigation';
import { Options } from './Options';

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Navigation />
        <Options />
      </div>
    </nav>
  );
};
