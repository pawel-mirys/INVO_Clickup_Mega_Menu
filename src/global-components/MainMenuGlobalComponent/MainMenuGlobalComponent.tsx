import React from 'react';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import styles from './MainMenuGlobalComponent.module.scss';

export const MainMenuGlobalComponent = () => {
  return (
    <div className={styles.main}>
      <Button className={styles.main__button} variant='primary'>
        Hello
      </Button>
    </div>
  );
};
