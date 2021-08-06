/* global chrome */

import React, { useEffect } from 'react';
import mockData from '../utils/mock';
import styles from './style/category.module.css';
import AddIcon from '@material-ui/icons/Add';
import TabModal from './TabModal';

function Category({ setGlobal }) {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [currTabData, setCurrentTabData] = React.useState(null);
  const [catIndex, setCatIndex] = React.useState(null);
  const [groupIndex, setGroupIndex] = React.useState(null);

  useEffect(() => {
    chrome.storage.local.get(['key'], function (result) {
      const res = result.key;
      console.log('Data in Category is :  ');
      console.log(res);
      if (res) {
        setData(res);
      }
    });
  }, []);

  const handleTabClick = (group, cIndex, gIndex) => {
    setOpen(true);
    setCurrentTabData(group);
    setCatIndex(cIndex);
    setGroupIndex(gIndex);
  };

  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <h1>Categories</h1>
        <div className={styles.button}>
          <AddIcon />
        </div>
      </div>
      {data.map((data, cIndex) => {
        return (
          <div className={styles.cardContainer} key={data.name}>
            <div className={styles.categoryName}>{data.name}</div>
            <div className={styles.groups}>
              {data.groups.map((group, gIndex) => {
                const { name, tabs } = group;

                return (
                  <div
                    className={styles.card}
                    key={name}
                    onClick={() => handleTabClick(group, cIndex, gIndex)}
                  >
                    <h3 className={styles.text}> {name}</h3>
                    <span className={styles.text}>{tabs.length} Tabs </span>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}

      {open && (
        <TabModal
          setGlobal={setGlobal}
          closeModal={setOpen}
          data={currTabData}
          catIndex={catIndex}
          groupIndex={groupIndex}
          open={open}
        />
      )}
    </div>
  );
}

export default Category;
