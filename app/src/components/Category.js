/* global chrome */

import React, { useEffect } from 'react';
import mockData from '../utils/mock';
import styles from './style/category.module.css';
import AddIcon from '@material-ui/icons/Add';
import TabModal from './TabModal';
import AddCategory from './AddCategory';
import { Delete, PlusSquare, Trash2 } from 'react-feather';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import AddGroup from './AddGroup';
import { toast, ToastContainer } from 'react-toastify';

function Category({ setGlobal, currentData, setData, email }) {
  const [open, setOpen] = React.useState(false);
  const [currTabData, setCurrentTabData] = React.useState(null);
  const [catIndex, setCatIndex] = React.useState(null);
  const [groupIndex, setGroupIndex] = React.useState(null);
  const [openCategory, setOpenCategory] = React.useState(false);
  const [openAddGroup, setOpenAddGroup] = React.useState(false);
  const [categoryIndex, setCategoryIndex] = React.useState(null);
  const handleTabClick = (group, cIndex, gIndex) => {
    setOpen(true);
    setCurrentTabData(group);
    setCatIndex(cIndex);
    setGroupIndex(gIndex);
  };

  const deleteGroup = (gIndex, cIndex) => {
    let copy_data = currentData;
    copy_data[cIndex].groups.splice(gIndex, 1);
    setData(copy_data);
    setGlobal(copy_data);
    window.location.reload();
  };

  const deleteCategory = (cIndex) => {
    let copy_data = currentData;
    copy_data.splice(cIndex, 1);
    setData(copy_data);
    setGlobal(copy_data);
    window.location.reload();
  };

  const addGroupInCategory = (cIndex) => {
    let copy_data = currentData;
    setCategoryIndex(cIndex);
    setOpenAddGroup(!openAddGroup);
    // copy_data[cIndex].group;
  };

  const showMessage = (type, msg) => {
    if (type === 'error') {
      toast.error(msg);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <h1>Categories</h1>
        <div className={styles.button} onClick={() => setOpenCategory(true)}>
          <AddIcon />
        </div>
      </div>
      {currentData.map((data, cIndex) => {
        return (
          <div className={styles.cardContainer} key={data.name}>
            <div className={styles.categoryName}>
              <p>{data.name}</p>
              <div className={styles.setting}>
                <Trash2 onClick={() => deleteCategory(cIndex)} />
                <PlusSquare onClick={() => addGroupInCategory(cIndex)} />
              </div>
            </div>
            <div className={styles.groups}>
              {data.groups.map((group, gIndex) => {
                const { name, tabs } = group;

                return (
                  <div
                    onClick={() => handleTabClick(group, cIndex, gIndex)}
                    className={styles.card}
                    key={name}
                  >
                    <div
                      className={styles.delete}
                      onClick={() => {
                        deleteGroup(gIndex, cIndex);
                      }}
                    >
                      <Trash2 color='gray' />
                    </div>
                    <div>
                      <h3 className={styles.text}> {name}</h3>
                      <span className={styles.text}>{tabs.length} Tabs </span>
                    </div>
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
      {openAddGroup && (
        <AddGroup
          ModalState={setOpenAddGroup}
          data={currentData}
          setData={setData}
          setGlobal={setGlobal}
          cIndex={categoryIndex}
          showMessage={showMessage}
        />
      )}
      {openCategory && (
        <AddCategory
          ModalState={setOpenCategory}
          data={currentData}
          setData={setData}
          setGlobal={setGlobal}
          email={email}
          showMessage={showMessage}
        />
      )}
    </div>
  );
}

export default Category;
