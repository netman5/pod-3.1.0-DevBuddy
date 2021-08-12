/* global chrome */
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import styles from '../components/style/modal.module.css';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '35ch',
      display: 'flex',
      flexDirection: 'column',
      alignItem: 'center',
      justifyContent: 'center',
      marginRight: 'auto',
      marginLeft: 'auto',
      marginTop: '25px',
    },
  },
  text: {
    color: 'black',
  },
}));

function AddGroup({ ModalState, setGlobal, cIndex, data, showMessage }) {
  const [group, setGroup] = useState('');
  const [tabs, setTabs] = useState([]);

  const handleSubmit = (event) => {
    if (group === '') {
      showMessage('error', 'Group is empty');
      return;
    }
    let copy_data = data;
    copy_data[cIndex].groups.push({
      name: group,
      tabs: [],
    });

    setGlobal(copy_data);
    window.location.reload();
  };

  const classes = useStyles();

  return (
    <div className={styles.modalBackground}>
      <div className={styles.addModalContainer}>
        <div className={styles.body}>
          <form
            className={classes.root}
            noValidate
            autoComplete='off'
            onSubmit={handleSubmit}
          >
            <TextField
              value={group}
              id='outlined-secondary'
              label='Add group name'
              variant='outlined'
              color='secondary'
              required={true}
              size='small'
              onChange={(e) => setGroup(e.target.value)}
            />
            <Typography className={classes.text} variant='body1'>
              Click add to capture current window tabs.
            </Typography>

            <div className={styles.modalFooter}>
              <button
                className={styles.closeAddModalBtn}
                onClick={() => ModalState(false)}
              >
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

export default AddGroup;
