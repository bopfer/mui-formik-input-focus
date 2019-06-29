import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles, Drawer, List, ListItem } from '@material-ui/core';

const ListLink = React.forwardRef(
  (props, ref) => <NavLink {...props} innerRef={ref} />
);

const Nav = (props) => {
  const classes = useStyles();

  return (
    <div>
      <Drawer open={props.isNavOpen} onClose={props.toggleNav}>
        <List className={classes.list} onClick={props.toggleNav}>
          <ListItem button={true} component={ListLink}to="/">Home</ListItem>
          <ListItem
            button={true}
            component={ListLink}
            to="/plain-form"
          >
            Plain Form
          </ListItem>
          <ListItem
            button={true}
            component={ListLink}
            to="/formik-hooks-form"
          >
            Formik Hooks Form
          </ListItem>
          <ListItem
            button={true}
            component={ListLink}
            to="/formik-render-prop-form"
          >
            Formik Render Prop Form
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export { Nav };
