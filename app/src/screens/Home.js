import React from 'react';
import BookOutlinedIcon from '@material-ui/icons/BookOutlined';
import styles from './styles/home.module.css';
import Category from '../components/Category';

function Home() {
  return (
    <div className='mainContainer'>
      <div className={styles.container}>
        <div className={styles.logo}>
          <BookOutlinedIcon className={styles.icon} color='secondary' />
          <h1>Tabify</h1>
        </div>
        <div className={styles.capture}>
          <div className={styles.button}> Capture</div>
        </div>
      </div>
      <Category />
    </div>
  );
}

export default Home;
