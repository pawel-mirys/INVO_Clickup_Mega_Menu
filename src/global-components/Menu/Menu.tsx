import { useMenuContext } from '@/modules/contexts/MenuContext';
import React, { useEffect } from 'react';
import { Footer } from '../Footer/Footer';
import styles from './Menu.module.scss';
import { ProductMenu } from './ProductMenu/ProductMenu';
import { SolutionsMenu } from './SolutionsMenu/SolutionsMenu';

export const Menu = () => {
  const menuContext = useMenuContext();

  useEffect(() => {
    console.log(menuContext);
  }, [menuContext]);

  return (
    <div className={styles.menu}>
      {menuContext?.productTabState && <ProductMenu />}
      {menuContext?.soultionTabState && <SolutionsMenu />}
      {menuContext?.menuState && <Footer />}
    </div>
  );
};
