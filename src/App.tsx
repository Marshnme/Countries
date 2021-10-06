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
      <FilterRegion></FilterRegion>
      <Regions></Regions>
    </div>
  );
}

export default App;
