import React from 'react';
import { TextField } from '@material-ui/core';

const PlainForm = (props) => {
  return (
    <form>
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

const Input = (props) => {
  /**
   * This imperative focusing seems to work well for plain forms.
   * But, the setTimeout is a bit of a hack.
   */
  const focusInputField = input => {
    if (props.autoFocus && input) {
      setTimeout(() => input.focus(), 100);
    }
  };

  return (
    <TextField
      inputRef={focusInputField}
      label={props.label}
      autoFocus={props.autoFocus}
    />
  );
};

export { PlainForm };
