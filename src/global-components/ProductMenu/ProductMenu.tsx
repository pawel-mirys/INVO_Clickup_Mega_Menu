import React from 'react';
import { Button } from '@/global-components/Button/Button';
import { Icon } from '@/global-components/Icon/Icon';
import styles from './ProductMenu.module.scss';
import { useMenuContext } from '@/modules/contexts/MenuContext';
import clsx from 'clsx';
import { Product } from '../MenuItems/Product/Product';
import { Platform } from '../MenuItems/Platform/Platform';
import { ContactFooter } from '../ContactFooter/ContactFooter';

export const ProductMenu = () => {
  const menuContext = useMenuContext();

  const handleProductTab = () => {
    menuContext?.productTabState === true
      ? menuContext.setProductTabState(false)
      : menuContext?.setProductTabState(true);
    menuContext?.setSolutionTabState(false);
    menuContext?.setLearnTabState(false);
  };

  return (
    <div className={styles.productMenu}>
      <div className={styles.navigationButton}>
        <Button
          onClick={handleProductTab}
          className={clsx(
            styles.navItem,
            menuContext?.productTabState && styles.active
          )}
          variant='clear'>
          Product
          <Icon
            className={clsx(menuContext?.productTabState && styles.activeIcon)}
            name='arrow'
          />
        </Button>
      </div>

      {menuContext?.productTabState && (
        <div className={styles.menuContainer}>
          <div className={styles.menuWrapper}>
            <Product />
            <Platform />
          </div>
          <ContactFooter />
        </div>
      )}
    </div>
  );
};
