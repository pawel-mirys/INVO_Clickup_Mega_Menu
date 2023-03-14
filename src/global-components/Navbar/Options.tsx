import React from 'react';
import { Button } from '../Button/Button';
import styles from './Navbar.module.scss';

export const Options = () => {
  return (
    <div className={styles.options}>
      <Button variant='clear' className={styles.navItem}>
        <a href='#'>Contact Sales</a>
      </Button>
      <div className={styles.accountOptions}>
        <Button variant='primary'>
          <a href='#'>Sign Up</a>
        </Button>
        <Button variant='secondary'>
          <a href='#'>Log in</a>
        </Button>
      </div>
    </div>
  );
};
