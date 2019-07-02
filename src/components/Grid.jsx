import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import farmersmarkets from './../assets/images/farmersmarkets.jpg';
// import ScheduleFeed from './ScheduleFeed';
import AvailableProduce from './AvailableProduce';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const backgroundImage = {
  backgroundImage: `url(${farmersmarkets})`
};

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root} style = {backgroundImage}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}><AvailableProduce/></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
