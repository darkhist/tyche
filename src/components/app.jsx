import React from 'react';

import GlobalStyle from '../style/theme';

import Title from './title';
import Info from './info';
import Generator from './generator';

const App = () => (
  <>
    <GlobalStyle />
    <header>
      <Title />
      <Info />
    </header>
    <main>
      <Generator />
    </main>
  </>
);

export default App;
