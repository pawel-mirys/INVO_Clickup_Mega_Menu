import React from 'react';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Button variant='clear' className={styles.contactButton}>
          <Icon size={24} name='phone' className={styles.icon} />
          <span className={styles.text}>
            <h2 className={styles.header}>Contact Us</h2>
            <p className={styles.content}>
              Get in touch with our 24/7 live support team for free.
            </p>
          </span>
        </Button>
      </div>
    </footer>
  );
};
