import React from 'react'
import styles from '../components/style/modal.module.css'


function TabModal(props) {
  const {closeModal} = props
  

  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
        <div className= {styles.titleCloseBtn}>
        <button onClick={() => closeModal(false)}> X </button>
        </div>
        <div className={styles.title}>
          <h1>Title</h1>
        </div>

        <div className={styles.body}> 
          <p>This will contain the Titles and url of tabs</p>
        </div>
        <div className={styles.modalFooter}>
          <button id={styles.closeBtn} onClick={() => closeModal(false)}>Close</button>
        </div>
      </div>
    </div>
  )
}

export default TabModal



