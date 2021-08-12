/* global chrome */

import React, { useState, useEffect } from 'react';
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

const CategorySelect = ({
  category,
  setCategory,
  data,
  setCategoryIndex,
  categoryIndex,
  group,
  setGroup,
}) => {
  const [cIndex, setCIndex] = useState(0);

  return (
    <>
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
            value={categoryIndex}
            onChange={(e) => {
              let index = parseInt(e.target.value);
              setCategoryIndex(index);
              setCIndex(index);
              setCategory(data[index].name);
            }}
            label='Age'
            inputProps={{
              name: 'age',
              id: 'outlined-age-native-simple',
            }}
          >
            <option aria-label='None' value='' />
            {data.map((category, cIndex) => {
              return (
                <option value={parseInt(cIndex)} index={cIndex}>
                  {category.name}
                </option>
              );
            })}
          </Select>
        </FormControl>
      </ThemeProvider>
      <ThemeProvider theme={theme}>
        <FormControl
          variant='outlined'
          style={{ margin: '10px', borderColor: '#0000', flex: 1 }}
        >
          <InputLabel
            htmlFor='outlined-age-native-simple'
            style={{ color: '#000' }}
          >
            Select Group
          </InputLabel>
          <Select
            native
            value={group}
            onChange={(e) => {
              setGroup(e.target.value);
            }}
            label='Age'
            inputProps={{
              name: 'age',
              id: 'outlined-age-native-simple',
            }}
          >
            <option aria-label='None' value='' />
            {data[cIndex] &&
              data[cIndex].groups.map((group) => {
                return <option value={group.name}>{group.name}</option>;
              })}
          </Select>
        </FormControl>
      </ThemeProvider>
    </>
  );
};

const Tab = ({ tab, onRemoveTab }) => {
  const closeTab = () => {
    onRemoveTab(tab.id);
  };
  return (
    <AnimatePresence>
      {tab.id && (
        <motion.li
          className={styles.tabCard}
          initial={{ scale: 1, x: 0 }}
          exit={{ x: -180 }}
          whileHover={{ scale: 1.03, zIndex: 100, overflowX: 'default' }}
        >
          <div className={styles.tabList}>
            <div className={styles.tabTitle}>
              <img src={'chrome://favicon/size/16@1x/' + tab.url} alt='Error' />
              <a href={tab.url}>{tab.title}</a>
            </div>
            <div className={styles.close}>
              <X size={15} style={{ marginRight: '10px' }} onClick={closeTab} />
            </div>
          </div>
        </motion.li>
      )}
    </AnimatePresence>
  );
};

const CaptureModal = ({ open, onClose, tabs, onRemoveTab, setGlobal }) => {
  const [category, setCategory] = useState('');
  const [group, setGroup] = useState('');
  const [data, setData] = useState([]);
  const [categoryIndex, setCategoryIndex] = useState(null);

  useEffect(() => {
    chrome.storage.local.get(['key'], function (result) {
      const res = result.key;
      if (res) {
        setData(res);
      }
    });
  }, []);

  const captureModal = () => {
    chrome.storage.local.get(['key'], function (result) {
      let data = result.key;
      if (data === undefined) {
        data = [
          {
            name: category,
            groups: [
              {
                name: group,
                tabs: tabs,
              },
            ],
          },
        ];
      } else {
        let category_found = false;
        let group_found = false;
        for (let i = 0; i < data.length; i++) {
          if (data[i].name === category) {
            category_found = true;

            for (let j = 0; j < data[i].groups.length; j++) {
              if (data[i].groups[j].name === group) {
                group_found = true;
                for (let k = 0; k < tabs.length; k++) {
                  data[i].groups[j].tabs.push(tabs[k]);
                }
              }
            }

            if (group_found === false) {
              data[i].groups.push({
                name: group,
                tabs: tabs,
              });
            }
          }
        }

        if (category_found === false) {
          data.push({
            name: category,
            groups: [
              {
                name: group,
                tabs: tabs,
              },
            ],
          });
        }
      }

      setGlobal(data);
      onClose('success');
      window.location.reload();
    });
  };
  return (
    <motion.div>
      <AnimatePresence>
        {open && (
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
                    return <Tab tab={tab} onRemoveTab={onRemoveTab} />;
                  })}
                </ul>
              </div>
              <div className={styles.options}>
                <CategorySelect
                  category={category}
                  setCategory={setCategory}
                  data={data}
                  setCategoryIndex={setCategoryIndex}
                  group={group}
                  setGroup={setGroup}
                />
              </div>
              <motion.button
                initial={{ scale: 1 }}
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.1 }}
                onClick={captureModal}
              >
                Capture
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default CaptureModal;
