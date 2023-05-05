import React from 'react';
import { Button } from '@/global-components/Button/Button';
import { Icon } from '@/global-components/Icon/Icon';
import styles from './LearnTab.module.scss';
import clsx from 'clsx';
import { useMenuContext } from '@/modules/contexts/MenuContext';

import { ContactFooter } from '../ContactFooter/ContactFooter';
import UserWindow from '@/modules/useWindowWidth';
import { Learn } from '../TabsItems/Learn/Learn';
import { Blog } from '../TabsItems/Blog/Blog';

export const LearnTab = () => {
  const windowWidth = UserWindow();
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
          onMouseOver={
            windowWidth.dynamicWidth > 1050 ? handleLearnTab : undefined
          }
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
