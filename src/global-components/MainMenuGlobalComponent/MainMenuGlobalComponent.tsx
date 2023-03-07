import React from 'react';
import { Icon } from '../Icon/Icon';
import styles from './MainMenuGlobalComponent.module.scss';

export const MainMenuGlobalComponent = () => {
  return (
    <div className='mainmenu'>
      <Icon name='book' size={200} className={styles.icon} />
      <Icon name='puzzle' size={100} className={styles.icon} />
      <Icon name='tablet' size={50} className={styles.icon} />
    </div>
  );
};
