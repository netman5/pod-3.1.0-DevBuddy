/* global chrome */
import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './screens/Home';
import SearchBar from './components/SearchBar';
import mockData from './utils/mock';

const App = () => {
  const [currentData, setCurrentData] = React.useState([]);
  // var currentData=[];
  const [fulldata, setFullData] = React.useState([]);

  useEffect(() => {
    chrome.storage.local.get(['key'], function (result) {
      const res = result.key;
      console.log('Data in Category is :  ');
      console.log(res);
      if (res) {
        setFullData(res);
        setData(res);
        console.log("res-",res);
        console.log("fullData-",fulldata);
      }
    });
  }, []);

  const setGlobal = (data) => {
    chrome.storage.local.set({ key: data }, function () {
      console.log('Global Value set', data);
    });
  };

  const setData=(data)=>{
      setCurrentData(data)
  }

  return (
    <div className='App'>
      <SearchBar fulldata={fulldata} setData={setData}/>
      <Home setData={setData} currentData={currentData} setGlobal={setGlobal} />
    </div>
  );
};

export default App;
