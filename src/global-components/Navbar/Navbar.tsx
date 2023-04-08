import { useNavbarContext } from '@/modules/contexts/NavbarContext';
import clsx from 'clsx';
import React from 'react';
import { Burger } from '../Burger/Burger';
import { Logo } from '../Logo/Logo';

import styles from './Navbar.module.scss';
import { Navigation } from './Navigation/Navigation';
import { Options } from './Options/Options';

export const Navbar = () => {
  const navContext = useNavbarContext();

  const handleNavState = () => {
    navContext?.navState === false
      ? navContext?.setNavbarState(true)
      : navContext?.setNavbarState(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.wrapper}>
        <Logo />
        <div className={styles.container}>
          <div
            className={clsx(
              styles.navigationWrapper,
              navContext?.navState && styles.active
            )}>
            <Navigation />
            <Options />
          </div>
          <Burger className={styles.burger} onClick={handleNavState} />
        </div>
      </div>
    </nav>
  );
};
