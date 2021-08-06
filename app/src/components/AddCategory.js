import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import styles from "../components/style/modal.module.css";
import MockData from "../utils/mock";
import { Modal } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

function AddCategory({ ModalState }) {
  const [category, setCategory] = useState('');
  const [data, setData] = useState('')

  const getCategory = (e) => {
    setCategory(e.target.value)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(category){
      setData(category)
    }

    ModalState(false)

    
    
    
  }


  const handleClose = () => {
    ModalState(false)
  }

  const classes = useStyles();

  return (
    <div className={styles.modalBackground}>
      <div className={styles.addModalContainer}>
        <div className={styles.titleCloseBtn}>
          <button onClick={handleClose}> X </button>
        </div>

        <div className={styles.title}>
          <h1>Add Category</h1>
        </div>

        <div className={styles.body}>
          <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit} onClick={handleClose}>
            <TextField
              value={category}
              id="outlined-secondary"
              label="Add new category"
              variant="outlined"
              color="secondary"
              onChange={getCategory}
            />

            <div className={styles.modalFooter}>
              <button id={styles.closeBtn}>
                Close
              </button>
              <button>Add</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddCategory;
