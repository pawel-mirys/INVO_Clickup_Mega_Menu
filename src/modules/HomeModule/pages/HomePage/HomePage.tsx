import React from 'react';
import styles from './HomePage.module.scss';
import { MainMenu } from '@/modules/MainMenu/pages/MainMenu/MainMenu';
import { useNavbarContext } from '@/modules/contexts/NavbarContext';

export const HomePage = () => {
  const navContext = useNavbarContext();
  return (
    <div id={styles.homePage}>
      <MainMenu />
      {navContext?.navState && <div className={styles.backdrop}></div>}
    </div>
  );
};
