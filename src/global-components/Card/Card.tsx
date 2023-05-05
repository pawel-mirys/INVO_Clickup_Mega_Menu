import clsx from 'clsx';
import React from 'react';
import { Icon } from '../Icon/Icon';
import styles from './Card.module.scss';
import { cardVariants } from './CardVariants';

export type CardProps = {
  title: string;
  description: string;
  variant?: keyof typeof cardVariants;
  icon: string;
  className?: string;
};

export const Card = ({
  variant,
  title,
  description,
  icon,
  className,
}: CardProps) => {
  return (
    <a
      href='#'
      className={clsx(
        styles.card,
        className,
        variant && cardVariants[variant]
      )}>
      {icon && <Icon size={24} name={icon} />}
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </a>
  );
};
