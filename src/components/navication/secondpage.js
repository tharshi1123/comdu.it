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
    height: '46px',
    marginLeft:'350px',
    marginTop:'50px'
  },
  paragraph:{
    textAlign: 'center',
    font: 'Bold 10px/15px Poppins',
    letterSpacing: '0px',
    color: '#22242A',
    opacity: '1',
    width: '536px',
    height: '28px',
    marginLeft:'350px',
  //  marginTop:'50px'
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
  },
  button2: {
    width: '144px',
height:'34px',
background:'#4DB6AC1F 0% 0% no-repeat padding-box',
borderRadius: '18px',
opacity: '1',
textAlign: 'center',
font: 'Regular 16px/24px PT Sans',
letterSpacing: '0px',
color:' #4DB6AC',
opacity: '1',
marginTop:'180px',

  },
  search:{
    font:' Light 16px/25px Poppins',
    letterSpacing:' 0px',
    color: '#181D33',
    opacity:' 1',
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
  },
  Grid:{
    textAlign: 'center',
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

export default function Primary () {
  const classes = useStyles();

  return (
    <div>
        <Grid className={classes.Grid}>
        <Button  variant="contained" className={classes.button}>
      Our location levels
        </Button>
          <Typography  variant="h5" className={classes.heading} >Find insights in the district level</Typography>
          <Typography  variant="h6" className={classes.paragraph} >Datasets organized in district level.</Typography>
           <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12}>
          <Paper className={classes.control}>
          <Typography  variant="h6" className={classes.boxtext} >DS population</Typography>
          <Typography  variant="h6" className={classes.boxpara} >This should be used to tell a story and let your users know more about your service. How can you benefit them?</Typography>
  <Button  variant="contained" className={classes.button2}>
  342+ DATASETS
  </Button>
  </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.control}>
          <Typography  variant="h6" className={classes.boxtext} >DS population</Typography>
          <Typography  variant="h6" className={classes.boxpara} >This should be used to tell a story and let your users know more about your service. How can you benefit them?</Typography>
  <Button  variant="contained" className={classes.button2}>
  342+ DATASETS
  </Button>
    </Paper>
          </Grid>
          <Grid item xs={12}>
          <Paper className={classes.control}>
          <Typography  variant="h6" className={classes.boxtext} >DS population</Typography>
          <Typography  variant="h6" className={classes.boxpara} >This should be used to tell a story and let your users know more about your service. How can you benefit them?</Typography>
          <Button  variant="contained" className={classes.button2}>
          342+ DATASETS
  </Button>
    </Paper>
          </Grid>
        </Grid>
        </Grid>
    </div>
  );
}
