import React from 'react';
import styles from './Navigation.module.scss';

import clsx from 'clsx';
import { useNavbarContext } from '@/modules/contexts/NavbarContext';
import { ProductTab } from '@/modules/MainMenu/components/ProductTab/ProductTab';
import { SolutionsTab } from '@/modules/MainMenu/components/SolutionsTab/SolutionsTab';
import { LearnTab } from '@/modules/MainMenu/components/LearnTab/LearnTab';
import { Button } from '@/global-components/Button/Button';

export const Navigation = () => {
  const navbarContext = useNavbarContext();

  return (
    <div
      className={clsx(
        styles.navigation,
        navbarContext?.navState && styles.active
      )}>
      <ProductTab />
      <SolutionsTab />
      <LearnTab />
      <Button className={styles.navItem} variant='clear'>
        <a href='#'>Pricing</a>
      </Button>
      <Button className={styles.navItem} variant='clear'>
        <a href='#'>Enterprise</a>
      </Button>
    </div>
  );
};
