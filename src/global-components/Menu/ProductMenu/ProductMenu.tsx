import { Card, CardProps } from '@/global-components/Card/Card';
import React from 'react';
import styles from './Product.module.scss';

const productCardsList: CardProps[] = [
  {
    title: 'Tasks',
    description: 'Break down any size project into customized tasks.',
    variant: 'tasks',
    className: styles.productCard,
    icon: 'done',
  },
  {
    title: 'Docs',
    description: 'Create beautiful dosc and connect them to tasks.',
    variant: 'docs',
    className: styles.productCard,
    icon: 'tablet',
  },
];

export const ProductMenu = () => {
  return (
    <div className={styles.productMenu}>
      <div className={styles.prductContainer}>
        <h2 className={styles.header}>PRODUCT</h2>
        <div className={styles.productList}>
          {productCardsList.map((item, index) => {
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
      <div className={styles.platformContainer}>
        <h2 className={styles.header}>PLATFORM</h2>
        <div className={styles.platformList}></div>
      </div>
    </div>
  );
};
