/* global chrome */

import React, { useState, useEffect } from 'react';
import styles from '../components/style/modal.module.css';
import Checkbox from '@material-ui/core/Checkbox';
import AddIcon from '@material-ui/icons/Add';

function TabModal(props) {
  const { closeModal, data, catIndex, groupIndex, setGlobal } = props;
  const [tabsData] = useState(data.tabs);
  const [tabs, setTabs] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [tabsSelected, setTabsSelected] = useState(0);
  useEffect(() => {
    let newTabs = [];
    tabsData.forEach((item) => {
      newTabs = [
        ...newTabs,
        { title: item.title, url: item.url, state: false },
      ];
    });
    setTabs(newTabs);
  }, []);

  useEffect(() => {
    let count = 0;
    tabs.forEach((tab) => {
      if (tab.state === true) {
        count++;
      }
    });
    setTabsSelected(count);
  }, [tabs]);

  const handleSelectAll = (event) => {
    let newTabs = tabs;
    newTabs.forEach((tab) => (tab.state = event.target.checked));
    setTabs([...newTabs]);
    setSelectAll(!selectAll);
  };

  const handleTabClick = (event, key) => {
    let newTabs = tabs;
    newTabs[key]['state'] = event.target.checked;
    setTabs([...newTabs]);
  };

  const handleRestore = () => {
    tabs.forEach((tab) => {
      if (tab.state == true) {
        chrome.tabs.create({
          url: tab.url,
        });
      }
    });
  };

  const handleDelete = () => {
    chrome.storage.local.get(['key'], function (result) {
      const res = result.key;
      let idxArr = [];
      tabs.forEach((tab, index) => {
        if (tab.state == true) {
          idxArr.push(index);
        }
      });
      res[catIndex].groups[groupIndex].tabs = res[catIndex].groups[
        groupIndex
      ].tabs.filter((item, index) => !idxArr.includes(index));
      setGlobal(res);
      window.location.reload();
    });
  };

  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
        <div className={styles.titleCloseBtn}>
          <button onClick={() => closeModal(false)}>
            <AddIcon className={styles.closeModalBtn} />
          </button>
        </div>
        <h1 className={styles.title}>{data.name}</h1>

        <div className={styles.body}>
          {tabs.length != 0 ? (
            <div className={styles.tabHead}>
              <Checkbox
                checked={selectAll}
                onChange={handleSelectAll}
                className={styles.tab}
              />
              {tabsSelected != 0 ? (
                <span className={styles.tabNo}>
                  {tabsSelected} Tabs Selected
                </span>
              ) : null}
            </div>
          ) : null}
          <div className={styles.tabs}>
            {tabs.map((tab, index) => {
              return (
                <RenderTab
                  state={tab.state}
                  handleTabClick={handleTabClick}
                  key={index}
                  index={index}
                  name={tab.title}
                />
              );
            })}
          </div>
        </div>
        <div className={styles.modalFooter}>
          <button id={styles.deleteBtn} onClick={handleDelete}>
            Delete
          </button>
          <button id={styles.restoreBtn} onClick={handleRestore}>
            Restore
          </button>
        </div>
      </div>
    </div>
  );
}

const RenderTab = ({ state, name, handleTabClick, index }) => {
  return (
    <div className={styles.tab}>
      <Checkbox
        checked={state}
        onChange={(event) => handleTabClick(event, index)}
        name={name}
        color='primary'
      />
      <span className={styles.tabName}>{name}</span>
    </div>
  );
};

export default TabModal;
