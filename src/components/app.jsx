import React from 'react';
import ReactDOM from 'react-dom';

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

ReactDOM.render(
  <App />,
  document.getElementById('root') || document.createElement('div')
);
