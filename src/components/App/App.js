import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './Header/Header';
import Pages from '../Pages/Pages';

import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <main aria-labelledby="pageTitle" className="Main">
          <Pages />
        </main>
      </div>
    </Router>
  );
};

export default App;
