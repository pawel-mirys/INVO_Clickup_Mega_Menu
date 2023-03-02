import React from 'react';
import clsx from 'clsx';
import styles from './Button.module.scss';

const buttonType = {
  primary: styles.primary,
  secondary: styles.secondary,
  clear: styles.clear,
} as const;

type ButtonProps = {
  children?: string | JSX.Element;
  className?: string;
  variant: keyof typeof buttonType;
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
      className={clsx(styles.button, className, buttonType[variant])}>
      {children}
    </button>
  );
};
