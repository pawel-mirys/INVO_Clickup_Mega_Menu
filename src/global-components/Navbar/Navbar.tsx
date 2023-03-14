import React from 'react';

import styles from './Navbar.module.scss';
import { Menu } from './Menu';
import { Options } from './Options';

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Menu />
        <Options />
      </div>
    </nav>
  );
};
