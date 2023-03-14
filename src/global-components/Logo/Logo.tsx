import React from 'react';
import styles from './Logo.module.scss';

export const Logo = () => {
  return (
    <h2 className={styles.logo}>
      <a className={styles.link} href='#'>
        ClickUp
      </a>
    </h2>
  );
};
