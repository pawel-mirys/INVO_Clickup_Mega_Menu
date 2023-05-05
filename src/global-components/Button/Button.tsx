import React from 'react';
import clsx from 'clsx';
import styles from './Button.module.scss';

const buttonType = {
  primary: styles.button_primary,
  secondary: styles.button_secondary,
  clear: styles.button_clear,
} as const;

type ButtonProps = {
  children?: React.ReactNode;
  className?: string;
  variant?: keyof typeof buttonType;
  onClick?: () => void;
  onMouseOver?: () => void;
};

export const Button = ({
  children,
  className,
  variant,
  onClick,
  onMouseOver,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      onMouseEnter={onMouseOver}
      className={clsx(
        styles.button,
        className,
        variant && buttonType[variant]
      )}>
      {children}
    </button>
  );
};
