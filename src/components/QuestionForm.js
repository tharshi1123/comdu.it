import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button,Typography,Grid } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Million from '../../assets/Images/chapterone.svg';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  forgotText: {
    fontSize: '14px',
    letterSpacing: '0',
    fontWeight: 400,
    color: '#4E598348',
    paddingBottom: '16px',
  },
  apiError: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ff1744',
    fontSize: '14px',
  },
  formCart: {
    maxWidth: '430px',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
      '& > :nth-child(n+1)': {
        padding: '0 16px',
      },
      textfield:{
        width:'200px',
      },
    },
  },
})
);

export default function Questionform() {
  const classes = useStyles();

  return (
    <div>
    <form className={classes.formCart}>
     <Grid container item xs={12} sm={12} md={12} lg={12}>
       <TextField
       id="outlined-basic"
       className="textfield"
        variant="outlined"
         defaultValue="1.Before you get started"
       />
     </Grid>
     <Grid container item xs={12} sm={12} md={12} lg={12}>
       <TextField
        id="outlined-basic"
         variant="outlined"
      defaultValue="2.Versatile hosting plans and Pricing"
       />
     </Grid>

   </form>
    </div>
  );
}
