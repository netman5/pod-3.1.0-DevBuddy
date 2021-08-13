/* global chrome */
import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './screens/Home';
import SearchBar from './components/SearchBar';
import mockData from './utils/mock';

const App = () => {
  const [currentData, setCurrentData] = React.useState([]);
  const [fulldata, setFullData] = React.useState([]);
  const [email, setEmail] = useState(null);

  useEffect(() => {
    chrome.storage.local.get(['key'], function (result) {
      const res = result.key;
      if (res) {
        setFullData(res);
        setData(res);
      }
    });

    chrome.identity.getAuthToken({ interactive: true }, function (token) {
      chrome.identity.getProfileUserInfo(function (info) {
        console.log(info.email);
        if (info.email) {
          setEmail(info.email);
        }
      });
    });
  }, []);

  const setGlobal = (data) => {
    chrome.storage.local.set({ key: data }, function () {});
  };

  const setData = (data) => {
    setCurrentData(data);
  };

  return (
    <div className='App'>
      <SearchBar fulldata={fulldata} setData={setData} />
      <Home
        email={email}
        setData={setData}
        currentData={currentData}
        setGlobal={setGlobal}
      />
    </div>
  );
};

export default App;
