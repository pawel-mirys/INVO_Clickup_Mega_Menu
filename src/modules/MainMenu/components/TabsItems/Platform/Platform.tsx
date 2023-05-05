import React from 'react';
import styles from './Platform.module.scss';
import { platformCardsList } from './platformCardsList';
import { Card } from '../../Card/Card';


export const Platform = () => {
  return (
    <div className={styles.platformContainer}>
      <h2 className={styles.platformHeader}>PLATFORM</h2>
      <div className={styles.platformList}>
        {platformCardsList.map((item, index) => {
          return (
            <Card
              key={index}
              title={item.title}
              description={item.description}
              variant={item.variant}
              className={styles.platformCard}
              icon={item.icon}
            />
          );
        })}
      </div>
    </div>
  );
};
