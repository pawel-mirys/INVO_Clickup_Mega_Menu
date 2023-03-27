/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext, useContext, useEffect, useState } from 'react';

export const useNavbarContext = () => {
  const context = useContext(NavbarContext);
  return context;
};

type ContextProps = {
  children: JSX.Element | React.ReactElement;
};

const NavbarContext = createContext<{
  navState: boolean;
  setNavbarState: (state: boolean) => void;
} | null>(null);

export const NavbarContextProvider = ({ children }: ContextProps) => {
  const [navState, setNavState] = useState(false);

  const setNavbarState = (state: boolean) => {
    setNavState((prev) => (prev = state));
  };

  return (
    <NavbarContext.Provider value={{ navState, setNavbarState }}>
      {children}
    </NavbarContext.Provider>
  );
};
