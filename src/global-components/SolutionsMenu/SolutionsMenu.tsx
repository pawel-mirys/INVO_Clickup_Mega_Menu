import React from 'react';
import { Button } from '@/global-components/Button/Button';
import { Icon } from '@/global-components/Icon/Icon';
import styles from './SolutionsMenu.module.scss';
import { useMenuContext } from '@/modules/contexts/MenuContext';
import clsx from 'clsx';
import { Team } from '../MenuItems/Team/Team';
import { UseCase } from '../MenuItems/UseCase/UseCase';
import { Type } from '../MenuItems/Type/Type';
import { ContactFooter } from '../ContactFooter/ContactFooter';

export const SolutionsMenu = () => {
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
          onClick={handleSolutionTab}
          className={clsx(
            styles.navItem,
            menuContext?.soultionsTabState && styles.active
          )}
          variant='clear'>
          Solutions
          <Icon
            className={clsx(
              menuContext?.soultionsTabState && styles.activeIcon
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
