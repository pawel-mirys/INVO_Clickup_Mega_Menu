/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext, useContext, useEffect, useState } from 'react';

export const useMenuContext = () => {
  const context = useContext(MenuContext);
  return context;
};

type ContextProps = {
  children: JSX.Element | React.ReactElement;
};

const MenuContext = createContext<{
  productTabState: boolean;
  soultionsTabState: boolean;
  learnTabState: boolean;
  menuState: boolean;
  setProductTabState: (state: boolean) => void;
  setSolutionTabState: (state: boolean) => void;
  setLearnTabState: (state: boolean) => void;
} | null>(null);

export const MenuContextProvider = ({ children }: ContextProps) => {
  document.addEventListener('backbutton', () => {
    console.log('backbutton');
  });
  const [productTabState, setProductState] = useState(false);
  const [soultionsTabState, setSolutionState] = useState(false);
  const [learnTabState, setLearnState] = useState(false);
  const [menuState, setMenu] = useState(false);

  const setProductTabState = (state: boolean) => {
    setProductState((prev) => (prev = state));
  };
  const setSolutionTabState = (state: boolean) => {
    setSolutionState((prev) => (prev = state));
  };
  const setLearnTabState = (state: boolean) => {
    setLearnState((prev) => (prev = state));
  };

  useEffect(() => {
    if (productTabState || soultionsTabState || learnTabState) {
      setMenu((prev) => (prev = true));
    } else {
      setMenu((prev) => (prev = false));
    }
  }, [productTabState, soultionsTabState, learnTabState]);

  return (
    <MenuContext.Provider
      value={{
        productTabState,
        soultionsTabState,
        learnTabState,
        menuState,
        setProductTabState,
        setSolutionTabState,
        setLearnTabState,
      }}>
      {children}
    </MenuContext.Provider>
  );
};
