import React from 'react';
import styles from './Navigation.module.scss';
import { Button } from '../../Button/Button';
import clsx from 'clsx';
import { useNavbarContext } from '@/modules/contexts/NavbarContext';
import { ProductMenu } from '@/global-components/ProductMenu/ProductMenu';
import { SolutionsMenu } from '@/global-components/SolutionsMenu/SolutionsMenu';
import { LearnMenu } from '@/global-components/LearnMenu/LearnMenu';

export const Navigation = () => {
  const navbarContext = useNavbarContext();

  return (
    <div
      className={clsx(
        styles.navigation,
        navbarContext?.navState && styles.active
      )}>
      <ProductMenu />
      <SolutionsMenu />
      <LearnMenu />
      <Button className={styles.navItem} variant='clear'>
        <a href='#'>Pricing</a>
      </Button>
      <Button className={styles.navItem} variant='clear'>
        <a href='#'>Enterprise</a>
      </Button>
    </div>
  );
};
