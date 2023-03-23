import { useMenuContext } from '@/modules/contexts/MenuContext';
import React from 'react';
import { Menu } from '../Menu/Menu';
import { Navbar } from '../Navbar/Navbar';

import styles from './MainMenuGlobalComponent.module.scss';

export const MainMenuGlobalComponent = () => {
  const menuContext = useMenuContext();
  return (
    <div className={styles.mainMenu}>
      <Navbar />
      {menuContext?.menuState && <Menu />}
    </div>
  );
};
