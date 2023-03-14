import React from 'react';
import { MenuContextProvider } from './modules/contexts/MenuContext';

import { HomePage } from './modules/HomeModule/pages/HomePage/HomePage';

const App = () => (
  <MenuContextProvider>
    <HomePage />
  </MenuContextProvider>
);

export default App;
