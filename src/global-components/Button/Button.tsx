import React from 'react';
import clsx from 'clsx';
import styles from './Button.module.scss';

const buttonType = {
  primary: styles.button_primary,
  secondary: styles.button_seconday,
  clear: styles.button_clear,
} as const;

type ButtonProps = {
  children?: React.ReactNode;
  className?: string;
  variant?: keyof typeof buttonType;
  onClick?: () => void;
};

export const Button = ({
  children,
  className,
  variant,
  onClick,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        styles.button,
        className,
        variant && buttonType[variant]
      )}>
      {children}
    </button>
  );
};
