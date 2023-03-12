import clsx from 'clsx';
import React from 'react';
import { Icon } from '../Icon/Icon';
import styles from './Card.module.scss';
import { cardVariants } from './CardVariants';

type CardProps = {
  title: string;
  description: string;
  variant?: keyof typeof cardVariants;
  className?: string;
};

export const Card = ({ variant, title, description, className }: CardProps) => {
  return (
    <div
      className={clsx(
        styles.card,
        className,
        variant && cardVariants[variant]
      )}>
      <Icon size={24} name='done' />
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};
