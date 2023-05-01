import { MainMenuGlobalComponent } from '@/global-components/MainMenuGlobalComponent/MainMenuGlobalComponent';
import React from 'react';
import styles from './HomePage.module.scss';


export const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <MainMenuGlobalComponent />
    </div>
  );
};
