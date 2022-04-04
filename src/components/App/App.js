import React from 'react';
import './App.css';
import PlacesList from '../components/PlacesList';
import SearchBar from '../components/SearchBar';

function App() {
  return (
    <div className="App">
      <h1>ravenous</h1>
      <SearchBar/>
      <PlacesList/> 
    </div>
  );
}

export default App;
