import React from 'react';
import { Link } from 'react-router-dom';
import { TextField } from '@material-ui/core';

const PlainForm = (props) => {
  return (
    <form>
      <h2>
        Plain Form
      </h2>
      <h4>
        This form will properly focus the first field when the link is clicked
        from the <Link to="/">Home page</Link>.
        <br />
        But, when clicking from the Drawer, the focus is stolen back to the IconButton after
        the Drawer close transition is complete.
      </h4>
      <div>
        <Input
          name="firstName"
          label="First Name"
          autoFocus={true}
        />
      </div>
      <div>
        <Input
          name="lastName"
          label="Last Name"
        />
      </div>
      <div>
        <Input
          type="email"
          name="email"
          label="Email Address"
        />
      </div>
    </form>
  );
};

const Input = (props) => (
  <TextField
    label={props.label}
    autoFocus={props.autoFocus}
  />
);

export { PlainForm };
