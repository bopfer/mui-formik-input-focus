import React from 'react';
import { makeStyles, AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const Header = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" aria-label="Navigation" onClick={props.toggleNav}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Header
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginBottom: 20,
  },
  appBar: {
    boxShadow: `none`,
  },
  title: {
    flexGrow: 1,
  },
});

export default Header;
