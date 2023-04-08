import React from 'react';
import { Navbar } from '../Navbar/Navbar';

import styles from './MainMenuGlobalComponent.module.scss';

export const MainMenuGlobalComponent = () => {
  return (
    <div className={styles.mainMenu}>
      <Navbar />
    </div>
  );
};
