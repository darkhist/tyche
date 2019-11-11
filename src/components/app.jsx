import React from 'react';
import ReactDOM from 'react-dom';

import GlobalStyle from '../style/theme';

const App = () => (
  <>
    <GlobalStyle />
    <div> Hello World </div>
  </>
);

export default App;

ReactDOM.render(
  <App />,
  document.getElementById('root') || document.createElement('div')
);
