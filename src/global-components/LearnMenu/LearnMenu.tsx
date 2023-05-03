import React from 'react';
import { Button } from '@/global-components/Button/Button';
import { Icon } from '@/global-components/Icon/Icon';
import styles from './LearnMenu.module.scss';
import clsx from 'clsx';
import { useMenuContext } from '@/modules/contexts/MenuContext';
import { Learn } from '../MenuItems/Learn/Learn';
import { Blog } from '../MenuItems/Blog/Blog';
import { ContactFooter } from '../ContactFooter/ContactFooter';

export const LearnMenu = () => {
  const menuContext = useMenuContext();

  const handleLearnTab = () => {
    menuContext?.learnTabState === true
      ? menuContext.setLearnTabState(false)
      : menuContext?.setLearnTabState(true);
    menuContext?.setProductTabState(false);
    menuContext?.setSolutionTabState(false);
  };

  return (
    <div className={styles.learnMenu}>
      <div className={styles.navigationButton}>
        <Button
          onClick={handleLearnTab}
          className={clsx(
            styles.navItem,
            menuContext?.learnTabState && styles.active
          )}
          variant='clear'>
          Learn
          <Icon
            className={clsx(
              menuContext?.learnTabState && styles.activeIcon,
              styles.icon
            )}
            name='arrow'
          />
        </Button>
      </div>

      {menuContext?.learnTabState && (
        <div className={styles.menuContainer}>
          <div className={styles.menuWrapper}>
            <Learn />
            <Blog />
          </div>
          <ContactFooter />
        </div>
      )}
    </div>
  );
};
