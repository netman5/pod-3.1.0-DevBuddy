/* global chrome */

import React, { useState } from 'react';
import styles from '../style/capturemodal.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'react-feather';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { createMuiTheme } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#212121',
    },
  },
});

const CategorySelect = () => {
  const [value, setValue] = useState('');

  return (
    <ThemeProvider theme={theme}>
      <FormControl
        variant='outlined'
        style={{ margin: '10px', borderColor: '#0000', flex: 1 }}
      >
        <InputLabel
          htmlFor='outlined-age-native-simple'
          style={{ color: '#000' }}
        >
          Select Category
        </InputLabel>
        <Select
          native
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          label='Age'
          inputProps={{
            name: 'age',
            id: 'outlined-age-native-simple',
          }}
        >
          <option aria-label='None' value='' />
          <option value={10}>Education</option>
          <option value={20}>Foodies</option>
          <option value={30}>Entertainment</option>
        </Select>
      </FormControl>
    </ThemeProvider>
  );
};

const Tab = ({ tab }) => {
  return (
    <motion.li
      className={styles.tabCard}
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.03, zIndex: 100, overflowX: 'default' }}
    >
      <div className={styles.tabList}>
        <div className={styles.tabTitle}>
          <img src={'chrome://favicon/size/16@1x/' + tab.url} alt='Error' />
          <a href={tab.url}>{tab.title}</a>
        </div>
        <div className={styles.close}>
          <X size={15} style={{ marginRight: '10px' }} />
        </div>
      </div>
    </motion.li>
  );
};

const CaptureModal = ({ open, onClose, tabs }) => {
  return (
    <motion.div>
      {open && (
        <AnimatePresence>
          <motion.div
            className={styles.modalContainer}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1,
              x: { type: 'spring', stiffness: 100 },
              default: { duration: 0.1 },
            }}
            exit={{ opacity: 0, scale: 0 }}
          >
            <motion.div
              className={styles.modal}
              initial={{ opacity: 0, scale: 0.75 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
            >
              <div className={styles.header}>
                <p>Total : {tabs.length} Tabs</p>
                <X style={{ cursor: 'pointer' }} onClick={onClose} />
              </div>

              <div className={styles.tabs}>
                <ul className={styles.ul}>
                  {tabs.map((tab) => {
                    return <Tab tab={tab} />;
                  })}
                </ul>
              </div>
              <div className={styles.options}>
                <CategorySelect />
                <CategorySelect />
              </div>
              <motion.button
                initial={{ scale: 1 }}
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.1 }}
              >
                Capture
              </motion.button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      )}
    </motion.div>
  );
};

export default CaptureModal;
