import React from 'react';
// import React, { Component } from 'react';
import {Button,Grid} from '@material-ui/core';
import { createStyles, makeStyles, } from '@material-ui/core/styles';
import Mapimage from '../../assets/Images/map.png';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
      background: '#FFFFFF 0% 0% no-repeat padding-box',
      boxShadow: '0px 0px 8px #0000000A',
      border:' 0.25px solid #EDEDED',
      borderRadius: '4px',
      opacity:' 1',
      height:'40px'
    },
    title: {
      textAlign:'center',
      color:'#ffff',
        },
    mapimage: {
    height:'618px',
    width:'988px;'

    }
  }),
);

export default function Buttons() {
  const classes = useStyles();
  return (
    <Grid className= {classes.title}>
      <Button variant="contained" color='#FFFFFF' className={classes.button}>
      Attendance
      </Button>
      <Button
      variant="contained" className={classes.button}>
        Timesheets
      </Button>
      <Button variant="contained" className={classes.button}>
      Employees
      </Button>
      <Button variant="contained" className={classes.button}>
        Suppliers
      </Button>
      <Button  variant="contained" className={classes.button}>
      Many more…
      </Button>
      <Grid>
      <img src={Mapimage} alt='mapimage' className={classes.mapimage}/>
      </Grid>
    </Grid>
  );
}
