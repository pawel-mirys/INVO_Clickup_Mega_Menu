import React from 'react';
import styles from './Type.module.scss';
import { typeCardsList } from './typeCardsList';
import { Card } from '@/global-components/Card/Card';

export const Type = () => {
  return (
    <div className={styles.typeContainer}>
      <h2 className={styles.typeHeader}>TYPE</h2>
      <div className={styles.typeList}>
        {typeCardsList.map((item, index) => {
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
  );
};
