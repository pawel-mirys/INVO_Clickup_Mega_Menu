import React from 'react';
import styles from './Navbar.module.scss';
import { Logo } from '../Logo/Logo';
import { Button } from '../Button/Button';
import { useMenuContext } from '@/modules/contexts/MenuContext';
import clsx from 'clsx';
import { Icon } from '../Icon/Icon';

export const Navigation = () => {
  const menuContext = useMenuContext();

  const handleProductTab = () => {
    menuContext?.productTabState === true
      ? menuContext.setProductTabState(false)
      : menuContext?.setProductTabState(true);
    menuContext?.setSolutionTabState(false);
    menuContext?.setLearnTabState(false);
  };

  const handleSolutionTab = () => {
    menuContext?.soultionTabState === true
      ? menuContext.setSolutionTabState(false)
      : menuContext?.setSolutionTabState(true);
    menuContext?.setProductTabState(false);
    menuContext?.setLearnTabState(false);
  };

  const handleLearnTab = () => {
    menuContext?.learnTabState === true
      ? menuContext.setLearnTabState(false)
      : menuContext?.setLearnTabState(true);
    menuContext?.setProductTabState(false);
    menuContext?.setSolutionTabState(false);
  };

  return (
    <div className={styles.menu}>
      <Logo />
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
      <Button
        onClick={handleSolutionTab}
        className={clsx(
          styles.navItem,
          menuContext?.soultionTabState && styles.active
        )}
        variant='clear'>
        Solutions
        <Icon
          className={clsx(menuContext?.soultionTabState && styles.activeIcon)}
          name='arrow'
        />
      </Button>
      <Button
        onClick={handleLearnTab}
        className={clsx(
          styles.navItem,
          menuContext?.learnTabState && styles.active
        )}
        variant='clear'>
        Learn
        <Icon
          className={clsx(menuContext?.learnTabState && styles.activeIcon)}
          name='arrow'
        />
      </Button>
      <Button className={styles.navItem} variant='clear'>
        <a href='#'>Pricing</a>
      </Button>
      <Button className={styles.navItem} variant='clear'>
        <a href='#'>Enterprise</a>
      </Button>
    </div>
  );
};
