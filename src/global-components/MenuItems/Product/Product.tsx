import { Button } from '@/global-components/Button/Button';
import React from 'react';
import styles from './Product.module.scss';
import { productCardsList } from './productCardsLists';
import { Card } from '@/global-components/Card/Card';
import { Icon } from '@/global-components/Icon/Icon';

export const Product = () => {
  return (
    <div className={styles.productContainer}>
      <h2 className={styles.productHeader}>PRODUCT</h2>
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
      <Button className={styles.productsButton}>
        See All Features <Icon size={24} name='arrow2' />
      </Button>
    </div>
  );
};
