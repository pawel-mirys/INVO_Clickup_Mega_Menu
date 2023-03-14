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
  soultionTabState: boolean;
  learnTabState: boolean;
  setProductTabState: (state: boolean) => void;
  setSolutionTabState: (state: boolean) => void;
  setLearnTabState: (state: boolean) => void;
} | null>(null);

export const MenuContextProvider = ({ children }: ContextProps) => {
  document.addEventListener('backbutton', () => {
    console.log('backbutton');
  });
  const [productTabState, setProductState] = useState(false);
  const [soultionTabState, setSolutionState] = useState(false);
  const [learnTabState, setLearnState] = useState(false);

  const setProductTabState = (state: boolean) => {
    setProductState((prev) => (prev = state));
  };
  const setSolutionTabState = (state: boolean) => {
    setSolutionState((prev) => (prev = state));
  };
  const setLearnTabState = (state: boolean) => {
    setLearnState((prev) => (prev = state));
  };

  return (
    <MenuContext.Provider
      value={{
        productTabState,
        soultionTabState,
        learnTabState,
        setProductTabState,
        setSolutionTabState,
        setLearnTabState,
      }}>
      {children}
    </MenuContext.Provider>
  );
};
