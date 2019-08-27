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
        <TextField
          name="firstName"
          label="First Name"
          autoFocus={true}
        />
      </div>
      <div>
        <TextField
          name="lastName"
          label="Last Name"
        />
      </div>
      <div>
        <TextField
          type="email"
          name="email"
          label="Email Address"
        />
      </div>
    </form>
  );
};

export { PlainForm };
