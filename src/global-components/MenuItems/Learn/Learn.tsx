import React from 'react';
import styles from './Learn.module.scss';
import { freeList, premiumList } from './learnCardsList';
import { Card } from '@/global-components/Card/Card';
import { clsx } from 'clsx';

export const Learn = () => {
  return (
    <div className={styles.learnContainer}>
      <div className={styles.freeContainer}>
        <h2 className={clsx(styles.freeHeader, styles.header)}>LEARN</h2>
        <div className={styles.freeList}>
          {freeList.map((item, index) => {
            return (
              <Card
                key={index}
                title={item.title}
                description={item.description}
                variant={item.variant}
                className={item.className}
                icon={item.icon}
              />
            );
          })}
        </div>
      </div>
      <div className={styles.premiumContainer}>
        <h2 className={clsx(styles.premiumHeader, styles.header)}>
          PREMIUM SUPPORT
        </h2>
        <div className={styles.premiumList}>
          {premiumList.map((item, index) => {
            return (
              <Card
                key={index}
                title={item.title}
                description={item.description}
                variant={item.variant}
                className={item.className}
                icon={item.icon}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
