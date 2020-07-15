import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button,Typography,Grid } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
      flexGrow: 1,
      flexDirection:'row'
    },
  heading :{
    textAlign: 'center',
    font: 'Bold 36px/55px Poppins',
    letterSpacing: '0px',
    color: '#22242A',
    opacity: '1',
    width: '536px',
    height: '0px',
    marginLeft:'100px',
    marginTop:'10px'
  },
  paragraph:{
    textAlign: 'center',
    font: 'Bold 10px/15px Poppins',
    letterSpacing: '0px',
    color: '#22242A',
    opacity: '1',
    width: '400px',
    height: '28px',
    marginLeft:'150px',
    marginTop:'100px'
  },
  list:{
    textAlign: 'center',
    font: 'Bold 10px/15px Poppins',
    letterSpacing: '0px',
    color: '#22242A',
    opacity: '1',
    width: '400px',
    height: '28px',
    marginLeft:'150px',
    marginTop:'20px'
  },
  button: {
    textAlign: 'center',
  font:' Regular 16px/24px PT Sans',
  letterSpacing:'0px',
  color:'#FE9D00',
  textTransform:' uppercase',
  opacity:'1',
  background: '#FE9D001F 0% 0% no-repeat padding-box',
  borderRadius: '18px',
  opacity: '1',
  marginBottom:'0px',
  marginTop:'80px',
  marginRight:'600px'
  },
box:{
  top: '1350px',
left: '375px',
width: '370px',
height: '300px',
opacity: 1,
border:'5px'
  },
  boxtext:{
    width: '160px',
height:' 26px',
textAlign: 'center',
font: 'Bold 20px/30px PT Sans',
letterSpacing: '0px',
color: '#212529',
opacity: '1',
marginLeft:'150px'
    },
    boxpara:{
        width: '200px',
    height:'10px',
    textAlign: 'center',
    letterSpacing:' 0px',
    color: '#868E96',
    opacity: '1',
    marginLeft:'150px'
      },

  Grid:{
    textAlign: 'center',
    height:'310px'
  },

  inputField:{
    marginLeft: theme.spacing(1),
    flex: 1,
},
control: {
     padding: theme.spacing(2),
     width:'300px',
     marginLeft:'100px'
   },
}));

export default function Diaspora() {
  const classes = useStyles();

  return (
    <div>
        <Grid className={classes.Grid}>
        <Button  variant="contained" className={classes.button}>
      Who we are?
        </Button>
          <Typography  variant="h5" className={classes.heading} >comdu.it is a global network of diaspora volunteers</Typography>
          <Typography  variant="h6" className={classes.paragraph} >Committed to
          the sustainable development of the traditional Tamil homelands in Sri Lanka.
          We currently operate in Canada and Germany. Our mission is to help shift diaspora engagement from charity to sustainability,
          from aid to economic development, and from supporting remittance
          economies to building knowledge economies.</Typography>
          <Typography  variant="h6" className={classes.list} >American
           shorthair tabby russian blue. Turkish Angora leopard yet malkin.</Typography>
           <Typography  variant="h6" className={classes.list} >American shorthair tabby russian blue. Turkish angora leopard yet malkin.</Typography>

        </Grid>
    </div>
  );
}
