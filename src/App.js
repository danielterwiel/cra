import React from 'react';
import Header from './Header.js'
import Home from "./Home.js";
import HackerNews from "./HackerNews.js";
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
