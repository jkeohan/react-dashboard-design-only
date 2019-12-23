import React from 'react';
import Side from "./components/Side"
import Reviews from "./components/Reviews"
import Ratings from "./components/Ratings"
import Analysis from "./components/Analysis"
import Visitors from "./components/Visitors"

import './App.css';

function App() {
  return (
    <div id="app">
      <Side />
      <Reviews />
      <Ratings />
      <Analysis />
      <Visitors />
    </div>
  );
}

export default App;