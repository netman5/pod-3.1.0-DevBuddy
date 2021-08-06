import React from 'react';
import mockData from '../utils/mock';
import styles from './style/category.module.css';
import AddIcon from '@material-ui/icons/Add';
import TabModal from './TabModal'

function Category() {
  const [open, setOpen] = React.useState(false);

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
          <div className={styles.cardContainer} key={data.name}>
            <div className={styles.categoryName}>{data.name}</div>
            <div className={styles.groups}>
              {data.groups.map((group) => {
                const {name, tabs} = group
                
                return (
                  
                  <div className={styles.card} key={name} onClick={()=> setOpen(true)}>
                    <h3 className={styles.text}> {name}</h3> 
                    <span className={styles.text}>{tabs.length} Tabs </span>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}

    {open && < TabModal closeModal={setOpen}  open={open}/>}

    </div>
  );
}

export default Category;
