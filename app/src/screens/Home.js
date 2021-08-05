/* global chrome */

import React, { useEffect, useState } from 'react';
import BookOutlinedIcon from '@material-ui/icons/BookOutlined';
import styles from './styles/home.module.css';
import Category from '../components/Category';
import CaptureModal from '../components/modals/CaptureModal';

function Home() {
  const [openCaptureModal, setOpenCaptureModal] = useState(false);
  const [currentTabID, setCurrentTabID] = useState('');
  const [tabs, setTabs] = useState([]);

  useEffect(() => {
    chrome.tabs.query(
      { currentWindow: true, active: true },
      function (tabArray) {
        setCurrentTabID(tabArray[0].id);
      }
    );
  }, []);

  const toggleCaptureModal = () => {
    chrome.tabs.query(
      { windowId: chrome.windows.WINDOW_ID_CURRENT },
      (tabs) => {
        const arrTabs = [...tabs];
        setTabs(arrTabs);
        arrTabs.forEach((tab) => {
          const { url, id, title } = tab;
          if (currentTabID !== id) {
            chrome.tabs.remove(id);
            //console.log(id, url, title);
            //setTabs([...tabs, tab]);
          }
        });
      }
    );

    setOpenCaptureModal(!openCaptureModal);
  };
  return (
    <>
      <div className='mainContainer'>
        <div className={styles.container}>
          <div className={styles.logo}>
            <BookOutlinedIcon className={styles.icon} color='secondary' />
            <h1>Tabify</h1>
          </div>
          <div className={styles.capture}>
            <div className={styles.button} onClick={toggleCaptureModal}>
              {' '}
              Capture
            </div>
          </div>
        </div>
        <Category />
      </div>
      <CaptureModal
        open={openCaptureModal}
        onClose={toggleCaptureModal}
        tabs={tabs}
      />
    </>
  );
}

export default Home;
