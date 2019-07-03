import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link, NavLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {

  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,

  },
  clicky: {
    color: 'white',
    textDecoration: 'none',
    '&:hover': {
      color: 'red',
    },
    '&:active': {
      color: 'black',
    },
  },
  spacing:{
    width: '150px',
    display: 'flex',
    flexFlow: 'row',
    justifyContent: 'spaceBetween',
    alignItems: 'center',
  }
}));




export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <div className={classes.spacing}>
              <div className={classes.spacing}>
                <Link to="/" style={{ textDecoration: 'none' }}><a className={classes.clicky}>Home</a></Link>
              </div>
              <div className={classes.spacing}>
                <Link to="/produce" style={{ textDecoration: 'none' }}><a className={classes.clicky}>Produce</a></Link>
              </div>

            </div>

          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
