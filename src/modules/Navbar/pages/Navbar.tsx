import { useNavbarContext } from '@/modules/contexts/NavbarContext';
import clsx from 'clsx';
import React from 'react';
import styles from './Navbar.module.scss';
import { Logo } from '@/global-components/Logo/Logo';
import { Navigation } from '../components/Navigation/Navigation';
import { Options } from '../components/Options/Options';
import { Burger } from '@/global-components/Burger/Burger';

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
