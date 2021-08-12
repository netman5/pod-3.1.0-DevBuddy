/* global chrome */

import React,{useState,useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { alpha, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import styles from './style/search.module.css';

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    display: 'flex',
    justifyContent: 'space-between',
  },
  title: {
    // flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    fontWeight: 700,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    color: 'white',
  },
}));

export default function SearchAppBar({setData,fulldata}) {
  const classes = useStyles();
  

  const searchHandler = async(qry) => {
    if(qry.length==0){
      setData(fulldata);
    }
    else{
      let filteredCategories= fulldata.filter(cat=>{
        return cat.name.toLowerCase().indexOf(qry.toLowerCase())==-1?false:true;
      })
      setData(filteredCategories)
    }
  };

  return (
    <div>
      <div className={styles.header}>
        <p className={styles.headerTitle}>Tabify</p>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder='Search Category'
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
            onChange={(qry) => searchHandler(qry.target.value)}
          />
        </div>
      </div>
      {/* <AppBar position='static'>
        <Toolbar className={classes.root}>
          <Typography className={classes.title} variant='h6' noWrap>
            Tabify
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder='Search Category'
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={(qry) => searchHandler(qry.target.value)}
            />
          </div>
        </Toolbar>
      </AppBar> */}
    </div>
  );
}
