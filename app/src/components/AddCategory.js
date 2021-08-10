/* global chrome */
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import styles from "../components/style/modal.module.css";
import MockData from "../utils/mock";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';


const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "35ch",
      display: 'flex',
      flexDirection: 'column',
      alignItem: 'center',
      justifyContent: 'center',
      marginRight: 'auto',
      marginLeft: 'auto',
      marginTop: '25px'
    },
  },
}));

const initialValues = {
  category: '',
  group: '',
  // tabs: ''
}

function AddCategory({ ModalState, setGlobal}) {
  const [value, setValue] = useState(initialValues);
  const [categoryFound, setCategoryFound] = useState(false)
  const [groupFound, setGroupFound] = useState(false)
  const [addData, setAddData] = useState([])
  
  const handleChange = (e) => {
    const {name, value} = e.target;
    setValue({
      ...value,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    chrome.storage.local.get(["key"], function (result) {
      let storedData = result.key;
      setAddData(storedData)

      addData.map((item) => {
        if (item.name === value.category) {
          setCategoryFound(true);
        } else if (item.groups.name === value.group) {
          setGroupFound(true);
        } else {
          // chrome.storage.local.set({ key: storeddata }, function (result) {
          //   console.log("Value is set to " + result.storedData);
          //   let data = result.storedData;
          //   if (categoryFound && groupFound) {
          //     setData({
          //       ...data,
          //       value,
          //     });
          //   }
          // });
          if(categoryFound && groupFound){
            setAddData({
              ...addData,
              value
            })
            console.log(addData)
          }
        }
      });
      setGlobal(addData);
      window.location.reload();
    });
  };


  const handleClose = () => {
    ModalState(false)
  }

  const classes = useStyles();

  return (
    <div className={styles.modalBackground}>
      <div className={styles.addModalContainer}>
        <div className={styles.body}>
          <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit} onClick={handleClose}>
            <TextField
              value={value.category}
              name="category"
              id="outlined-primary"
              label="Add new category"
              variant="outlined"
              color="secondary"
              required={true}
              size='small'
              onChange={handleChange}
            />

            <TextField
              value={value.group}
              name='groupname'
              id="outlined-secondary"
              label="Add group name"
              variant="outlined"
              color="secondary"
              required={true}
              size='small'
              onChange={handleChange}
            />

            {/* <TextareaAutosize
              value={value.tabs}
              name='tabs'
              className={styles.textArea}
              aria-label="maximum height"
              placeholder='Enter your url lists'
              onChange={handleChange}
            /> */}

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
