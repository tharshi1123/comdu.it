import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button,Typography,Grid } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  heading :{
    textAlign: 'center',
    font: 'Bold 36px/55px Poppins',
    letterSpacing: '0px',
    color: '#22242A',
    opacity: '1',
    width: '536px',
    height: '51px',
    marginLeft:'350px',
    marginTop:'50px'
  },

  search:{
    font:' Light 16px/25px Poppins',
    letterSpacing:' 0px',
    color: '#181D33',
    opacity:' 1',
  },
  Grid:{
    textAlign: 'center',
  },
  inputField:{
    marginLeft: theme.spacing(1),
    flex: 1,
}
}));

export default function Main () {
  const classes = useStyles();

  return (
    <div>
        <Grid className={classes.Grid}>
          <Typography  variant="h3" className={classes.heading} >Open data portal for anyone!</Typography>
             <InputBase
                className={classes.InputField}
                placeholder="Email address"
                inputProps={{ 'aria-label': 'Email address' }}
              />
          <Button variant="contained" color="primary">AUTOMATE</Button>
        </Grid>
    </div>
  );
}
