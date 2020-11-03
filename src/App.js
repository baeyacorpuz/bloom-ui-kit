import React from 'react';
import { HashRouter as Router } from 'react-router-dom';

import Header from './components/header/Header';

import './App.css';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <>
      <Router>
        <div className="App">
          <div className="App-header">
            <Header />

            <Footer />
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
