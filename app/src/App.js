/* global chrome */
import React, { useEffect,useState } from 'react';
import './App.css';
import Home from './screens/Home';
import SearchBar from './components/SearchBar';
import mockData from './utils/mock';

const App = () => {
  const [items,setItems]=useState(null);

  const setGlobal = (data) => {
    setItems(data)
    chrome.storage.local.set({ key: data }, function () {
      console.log('Global Value set', data);
      
    });
  };

  return (
    <div className='App'>
      <SearchBar />
      <Home setGlobal={setGlobal} />
    </div>
  );
};

export default App;
