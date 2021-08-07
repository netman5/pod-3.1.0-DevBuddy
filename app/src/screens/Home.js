/* global chrome */

import React, { useState } from 'react';
import BookOutlinedIcon from '@material-ui/icons/BookOutlined';
import styles from './styles/home.module.css';
import Category from '../components/Category';
import CaptureModal from '../components/modals/CaptureModal';
import mocktabs from '../utils/mocktabs';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Home(props) {
  const { setGlobal } = props;
  const [openCaptureModal, setOpenCaptureModal] = useState(false);
  const [tabs, setTabs] = useState([]);

  const toggleCaptureModal = (tag = 'default') => {
    chrome.tabs.query(
      { windowId: chrome.windows.WINDOW_ID_CURRENT },
      (tabs) => {
        const arrTabs = [...tabs];
        setTabs(arrTabs);
      }
    );

    setOpenCaptureModal(!openCaptureModal);

    if (tag === 'success') {
      toast.success('Successfully saved');
    }
  };

  const onRemoveTab = (id) => {
    setTabs(
      tabs.filter((tab) => {
        if (tab.id !== id) return tab;
      })
    );
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
        <Category setGlobal={setGlobal} />
      </div>
      <CaptureModal
        open={openCaptureModal}
        onClose={toggleCaptureModal}
        tabs={tabs}
        setGlobal={setGlobal}
        onRemoveTab={onRemoveTab}
      />
      <ToastContainer />
    </>
  );
}

export default Home;
