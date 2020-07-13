import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import logo from  '../../assets/Logos/logo.png';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding:'10px'
    },
    bar:{
      boxShadow: 'none',
      color:'transparent',
      height:'30px'
    },
    title: {
      alignItems:'center',
      flexGrow: 1,
    },
    button: {
      padding:'10px 30px',
      letterSpacing: '0px',
      color: '#201F1F',
      textTransform: 'uppercase',
      opacity: 1,
      height:'46px',
      width: '132px',
    },
    buttonlogin: {
      padding:'10px 30px',
      letterSpacing: '0px',
      textTransform: 'uppercase',
      opacity: 1,
      height:'46px',
      width: '132px',
borderRadius:'23px'
    },
    logo:{
  height:'20px',
  marginLeft:'150px'
},
  }),
);

export default function NavBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar className={classes.bar} position="static" color='transparent' >
        <Toolbar>
          <Grid className={classes.title} >
            <img src={logo} alt='logo' className={classes.logo} />
          </Grid >
          <Grid  >
            <Button className={classes.button} >Home</Button>
            <Button className={classes.button} >Portfolio</Button>
            <Button className={classes.button} >BLOG</Button>
            <Button className={classes.button} >CONTACT</Button>
            <Button variant="contained" color="secondary"className={classes.buttonlogin} >Login</Button>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
