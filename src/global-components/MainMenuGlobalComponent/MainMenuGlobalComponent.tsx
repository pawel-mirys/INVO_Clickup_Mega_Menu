import { HomePage } from '@/modules/HomeModule/pages/HomePage/HomePage';
import React from 'react';
import { Button } from '../Button/Button';
import styles from './MainMenuGlobalComponent.module.scss';

export const MainMenuGlobalComponent = () => {
  return (
    <div>
      <Button variant='primary'>Sign Up</Button>
    </div>
  );
};
