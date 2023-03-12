import React from 'react';

import { Card } from '../Card/Card';

import styles from './MainMenuGlobalComponent.module.scss';

export const MainMenuGlobalComponent = () => {
  return (
    <div className={styles.main}>
      <Card
        title='Tasks'
        description='Break down any size project into customized tasks.'
        variant='tasks'
      />
    </div>
  );
};
