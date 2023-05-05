import React from 'react';
import styles from './MainMenu.module.scss';
import { Navbar } from '@/modules/Navbar/pages/Navbar';

export const MainMenu = () => {
  return (
    <div className={styles.mainMenu}>
      <Navbar />
    </div>
  );
};
