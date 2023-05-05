import React from 'react';
import styles from './UseCase.module.scss';
import { useCaseCardsList } from './useCaseCardsList';
import { Card } from '../../Card/Card';


export const UseCase = () => {
  return (
    <div className={styles.useCaseContainer}>
      <h2 className={styles.useCaseHeader}>USE CASE</h2>
      <div className={styles.useCaseList}>
        {useCaseCardsList.map((item, index) => {
          return (
            <Card
              key={index}
              title={item.title}
              description={item.description}
              variant={item.variant}
              className={styles.useCaseCard}
              icon={item.icon}
            />
          );
        })}
      </div>
    </div>
  );
};
