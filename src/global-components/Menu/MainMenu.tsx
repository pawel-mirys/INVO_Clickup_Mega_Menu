import { useMenuContext } from '@/modules/contexts/MenuContext';
import React from 'react';
import styles from './MainMenu.module.scss';
import { ProductMenu } from './ProductMenu/ProductMenu';

export const MainMenu = () => {
  const menuContext = useMenuContext();

  return (
    <div className={styles.menu}>
      {menuContext?.productTabState && <ProductMenu />}
    </div>
  );
};
