import { useNavbarContext } from '@/modules/contexts/NavbarContext';
import clsx from 'clsx';
import React from 'react';
import { Button } from '../../Button/Button';
import styles from './Options.module.scss';

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
        <Button variant='primary' className={styles.optionButton}>
          <a href='#'>Sign Up</a>
        </Button>
        <Button variant='secondary' className={styles.optionButton}>
          <a href='#'>Log in</a>
        </Button>
      </div>
    </div>
  );
};
