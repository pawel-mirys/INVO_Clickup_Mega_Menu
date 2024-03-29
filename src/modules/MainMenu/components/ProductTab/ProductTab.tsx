import React from 'react';
import { Button } from '@/global-components/Button/Button';
import { Icon } from '@/global-components/Icon/Icon';
import styles from './ProductTab.module.scss';
import { useMenuContext } from '@/modules/contexts/MenuContext';
import clsx from 'clsx';

import { ContactFooter } from '../ContactFooter/ContactFooter';
import UserWindow from '@/modules/useWindowWidth';
import { Product } from '../TabsItems/Product/Product';
import { Platform } from '../TabsItems/Platform/Platform';

export const ProductTab = () => {
  const windowWidth = UserWindow();
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
          onMouseOver={
            windowWidth.dynamicWidth > 1050 ? handleProductTab : undefined
          }
          onClick={handleProductTab}
          className={clsx(
            styles.navItem,
            menuContext?.productTabState && styles.active
          )}
          variant='clear'>
          Product
          <Icon
            className={clsx(
              menuContext?.productTabState && styles.activeIcon,
              styles.icon
            )}
            name='arrow'
          />
        </Button>
      </div>

      {menuContext?.productTabState && (
        <div className={styles.menuContainer}>
          <div className={clsx(styles.menuWrapper)}>
            <Product />
            <Platform />
          </div>

          <ContactFooter />
        </div>
      )}
    </div>
  );
};
