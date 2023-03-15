import React from 'react';
import { MainMenu } from '../Menu/MainMenu';
import { Menu } from '../Navbar/Menu';
import { Navbar } from '../Navbar/Navbar';

import styles from './MainMenuGlobalComponent.module.scss';

export const MainMenuGlobalComponent = () => {
  return (
    <div className={styles.main}>
      <Navbar />
      <MainMenu />
    </div>
  );
};
