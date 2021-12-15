import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import Pages from './Pages';

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Pages />
    </Router>
  );
};

export default App;
