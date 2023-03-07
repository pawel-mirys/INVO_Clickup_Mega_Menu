import React from 'react';
import clsx from 'clsx';
import styles from './Button.module.scss';

const buttonType = {
  primary: styles.button__primary,
  secondary: styles.button__seconday,
  clear: styles.button__clear,
  expanded: styles.button__expanded,
} as const;

type ButtonProps = {
  children?: string | JSX.Element;
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
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault;
        onClick;
      }}
      className={clsx(
        styles.button,
        className,
        variant && buttonType[variant]
      )}>
      {children}
    </button>
  );
};
