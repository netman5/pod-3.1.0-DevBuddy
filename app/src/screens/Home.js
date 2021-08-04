import React, { useState } from 'react';
import BookOutlinedIcon from '@material-ui/icons/BookOutlined';
import styles from './styles/home.module.css';
import Category from '../components/Category';
import CaptureModal from '../components/modals/CaptureModal';

function Home() {
  const [openCaptureModal, setOpenCaptureModal] = useState(false);

  const toggleCaptureModal = () => {
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
      <CaptureModal open={openCaptureModal} onClose={toggleCaptureModal} />
    </>
  );
}

export default Home;
