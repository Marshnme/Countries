import React from 'react';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import FilterRegion from './components/FilterRegion';
import Regions from './components/Regions';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <NavBar></NavBar>
      <SearchBar></SearchBar>
      <div className="FilterRegion">
        <FilterRegion></FilterRegion>
      </div>
      <Regions></Regions>
    </div>
  );
}

export default App;
