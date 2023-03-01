import React from 'react';
import './HomePage.scss';

type HomePageProps = {
  children: string;
};

export const HomePage = ({ children }: HomePageProps) => {
  return <div>{children}</div>;
};
