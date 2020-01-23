import React from 'react';
import Header from './Header'
import Home from "./Home";
import HackerNews from "./HackerNews";
import { Router } from "@reach/router"

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Router>
          <Home path="/" />
          <HackerNews path="hn" />
        </Router>
      </main>
    </div>
  );
}

export default App;
