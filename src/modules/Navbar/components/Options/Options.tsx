import { useNavbarContext } from '@/modules/contexts/NavbarContext';
import clsx from 'clsx';
import React from 'react';
import styles from './Options.module.scss';
import { Button } from '@/global-components/Button/Button';

export const Options = () => {
  const navbarContext = useNavbarContext();

  return (
    <div
      className={clsx(
        styles.options,
        navbarContext?.navState && styles.active
      )}>
      <Button
        variant='clear'
        className={clsx(styles.navItem, styles.contactButton)}>
        <a href='#'>Contact Sales</a>
      </Button>
      <div
        className={clsx(
          styles.accountOptions,
          navbarContext?.navState && styles.active
        )}>
        <Button
          variant='primary'
          className={clsx(styles.optionButton, styles.signInButton)}>
          <a href='#'>Sign Up</a>
        </Button>
        <Button
          variant='secondary'
          className={clsx(styles.optionButton, styles.loginButton)}>
          <a href='#'>Log in</a>
        </Button>
      </div>
    </div>
  );
};
