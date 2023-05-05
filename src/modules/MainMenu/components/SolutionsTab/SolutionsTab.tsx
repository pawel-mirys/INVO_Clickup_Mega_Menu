import React from 'react';
import { Button } from '@/global-components/Button/Button';
import { Icon } from '@/global-components/Icon/Icon';
import styles from './SolutionsTab.module.scss';
import { useMenuContext } from '@/modules/contexts/MenuContext';
import clsx from 'clsx';

import { ContactFooter } from '../ContactFooter/ContactFooter';
import UserWindow from '@/modules/useWindowWidth';
import { Team } from '../TabsItems/Team/Team';
import { UseCase } from '../TabsItems/UseCase/UseCase';
import { Type } from '../TabsItems/Type/Type';

export const SolutionsTab = () => {
  const windowWidth = UserWindow();
  const menuContext = useMenuContext();

  const handleSolutionTab = () => {
    menuContext?.soultionsTabState === true
      ? menuContext.setSolutionTabState(false)
      : menuContext?.setSolutionTabState(true);
    menuContext?.setProductTabState(false);
    menuContext?.setLearnTabState(false);
  };

  return (
    <div className={styles.solutionsMenu}>
      <div className={styles.navigationButton}>
        <Button
          onMouseOver={
            windowWidth.dynamicWidth > 1050 ? handleSolutionTab : undefined
          }
          onClick={handleSolutionTab}
          className={clsx(
            styles.navItem,
            menuContext?.soultionsTabState && styles.active
          )}
          variant='clear'>
          Solutions
          <Icon
            className={clsx(
              menuContext?.soultionsTabState && styles.activeIcon,
              styles.icon
            )}
            name='arrow'
          />
        </Button>
      </div>

      {menuContext?.soultionsTabState && (
        <div className={styles.menuContainer}>
          <div className={styles.menuWrapper}>
            <Team />
            <UseCase />
            <Type />
          </div>
          <ContactFooter />
        </div>
      )}
    </div>
  );
};
