import React from 'react';
import clsx from 'clsx';
import styles from './Burger.module.scss';
import { useNavbarContext } from '@/modules/contexts/NavbarContext';

type BurgerProps = {
  className?: string;
  onClick?: () => void;
};

export const Burger = ({ className, onClick }: BurgerProps) => {
  const navContext = useNavbarContext();

  return (
    <div onClick={onClick} className={clsx(styles.burger, className)}>
      <span
        className={clsx(
          styles.bar,
          navContext?.navState && styles.bar1
        )}></span>
      <span
        className={clsx(
          styles.bar,
          navContext?.navState && styles.bar2
        )}></span>
      <span
        className={clsx(
          styles.bar,
          navContext?.navState && styles.bar3
        )}></span>
    </div>
  );
};
