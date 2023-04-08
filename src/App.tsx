import React from 'react';
import { MenuContextProvider } from './modules/contexts/MenuContext';
import { NavbarContextProvider } from './modules/contexts/NavbarContext';

import { HomePage } from './modules/HomeModule/pages/HomePage/HomePage';

const App = () => (
  <NavbarContextProvider>
    <MenuContextProvider>
      <HomePage />
    </MenuContextProvider>
  </NavbarContextProvider>
);

export default App;
