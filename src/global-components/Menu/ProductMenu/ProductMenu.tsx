import React from 'react';
import { Button } from '@/global-components/Button/Button';
import { Card } from '@/global-components/Card/Card';
import { Icon } from '@/global-components/Icon/Icon';
import styles from './ProductMenu.module.scss';
import { productCardsList, platformCardsList } from './productMenuLists';

export const ProductMenu = () => {
  return (
    <div className={styles.productMenu}>
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
