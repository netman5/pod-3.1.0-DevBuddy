import React from 'react';
import mockData from '../utils/mock';
import styles from './style/category.module.css';
import AddIcon from '@material-ui/icons/Add';

function Category() {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <h1>Categories</h1>
        <div className={styles.button}>
          <AddIcon />
        </div>
      </div>
      {mockData.map((data) => {
        return (
          <div className={styles.cardContainer}>
            <div className={styles.categoryName}>{data.name}</div>
            <div className={styles.groups}>
              {data.groups.map((group) => {
                return (
                  <div className={styles.card}>
                    <span className={styles.num}>{group.tabs.length}</span>
                    <span className={styles.text}> Tabs</span>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Category;
