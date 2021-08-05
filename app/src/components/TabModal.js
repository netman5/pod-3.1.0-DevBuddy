import React from 'react';
import styles from '../components/style/modal.module.css';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

function TabModal(props) {
  const { closeModal, data } = props;
  console.log(data);
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
        <div className={styles.titleCloseBtn}>
          <button onClick={() => closeModal(false)}> X </button>
        </div>
        <h1 className={styles.title}>{data.name}</h1>

        <div className={styles.body}>
          <div className={styles.tabs}>
            {data.tabs.map((item) => {
              return (
                <div className={styles.tab}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        // checked={state.checkedB}
                        // onChange={handleChange}
                        name='checkedB'
                        color='primary'
                      />
                    }
                    className={styles.tab}
                  />
                  <span className={styles.tabName}>{item.title}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.modalFooter}>
          <button id={styles.closeBtn} onClick={() => closeModal(false)}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default TabModal;
