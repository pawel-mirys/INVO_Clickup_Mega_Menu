import React from 'react';
import styles from './Icon.module.scss';
import { ReactSVG } from 'react-svg';

type IconProps = {
  name?: string;
  size?: number;
  className?: string;
};

export const Icon = React.forwardRef(
  (
    { name = 'book', size = 25, className }: IconProps,
    ref: React.ForwardedRef<null>
  ) => {
    return (
      <ReactSVG
        ref={ref}
        beforeInjection={(svg) => {
          svg.classList.add(styles.image);
          className && svg.classList.add(className);
          svg.setAttribute('style', `width: ${size}px; height:${size}px;`);
        }}
        className={styles.icon}
        fallback={() => <span>Error!</span>}
        loading={() => <span>Loading</span>}
        onError={(error) => {
          console.error(error);
        }}
        renumerateIRIElements={false}
        src={`/src/assets/icons/${name}.svg`}
        title={`${name} icon`}
        useRequestCache={false}
        wrapper='span'
      />
    );
  }
);

Icon.displayName = 'Icon';
