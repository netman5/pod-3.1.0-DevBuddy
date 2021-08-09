/* global chrome */


import React, { useState } from "react";
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
  groupname: '',
  tabs: []
}

function AddCategory({ ModalState }) {
  const [value, setValue] = useState(initialValues);
  const [data, setData] = useState(MockData)

  const handleChange = (e) => {
    const {name, value} = e.target;
    setValue({
      ...value,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // let category_found = false;
    // let group_found = false
    // for (let i = 0; i < data.length; i++) {
    //   if (data[i].name === category) {
    //     category_found = true;

    //     for (let j = 0; j < data[i].groups.length; j++) {
    //       if (data[i].groups[j].name === group) {
    //         group_found = true;
    //         console.log('group found');
    //         for (let k = 0; k < data[i].groups.tabs.length; k++) {
    //           data[i].groups[j].tabs.push(tabs[k]);
    //         }
    //       }
    //     }

    //     if (group_found === false) {
    //       data[i].groups.push({
    //         name: group,
    //         tabs: tabs,
    //       });
    //     }
    //   } 

      
    // }

    // if (category_found === false) {
    //   setData(
    //     data.push({
    //       name: category,
    //       groups: [
    //         {
    //           name: group,
    //           tabs: tabs,
    //         },
    //       ],
    //     })
    //   );
    // }

    ModalState(false);
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
              value={value.groupname}
              name='groupname'
              id="outlined-secondary"
              label="Add group name"
              variant="outlined"
              color="secondary"
              required={true}
              size='small'
              onChange={handleChange}
            />

            <TextareaAutosize
              value={value.tabs}
              name='tabs'
              className={styles.textArea}
              aria-label="maximum height"
              placeholder='Enter your url lists'
              onChange={handleChange}
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
