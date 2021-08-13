/* global chrome */
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import styles from '../components/style/modal.module.css';
import { Typography } from '@material-ui/core';
import { toast } from 'react-toastify';
import sgMail from '@sendgrid/mail';

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

function AddCategory({ ModalState, setGlobal, data, showMessage, email }) {
  const [category, setCategory] = useState('');
  const [group, setGroup] = useState('');
  const [tabs, setTabs] = useState([]);

  const handleSubmit = () => {
    if (category === '' || group === '') {
      showMessage('error', 'Category or Group is empty');
      return;
    }
    let copy_data = data;
    copy_data.push({
      name: category,
      groups: [{ name: group, tabs: [] }],
    });
    console.log('email = ', email);
    if (email) {
      sgMail.setApiKey(
        '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'
      );
      const msg = {
        to: email,
        from: 'tabify@gmail.com',
        subject: 'New category Added to Tabify',
        text: 'Thanks for using Tabify. We are glad that you are enjoying our app',
        html: `<strong>${category} is Added to you extension</strong>`,
      };
      sgMail.send(msg);
    }

    setGlobal(copy_data);
    ModalState(false);
    window.location.reload();
  };

  const classes = useStyles();

  return (
    <div className={styles.modalBackground}>
      <div className={styles.addModalContainer}>
        <div className={styles.body}>
          <form className={classes.root} noValidate autoComplete='off'>
            <TextField
              value={category}
              id='outlined-primary'
              label='Add new category'
              variant='outlined'
              color='secondary'
              required={true}
              size='small'
              onChange={(e) => setCategory(e.target.value)}
            />
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
            <div className={styles.modalFooter}>
              <button
                className={styles.closeAddModalBtn}
                onClick={() => {
                  ModalState(false);
                }}
              >
                Close
              </button>
              <button onClick={handleSubmit}>Add</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddCategory;
