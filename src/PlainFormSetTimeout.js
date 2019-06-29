import React from 'react';
import { TextField } from '@material-ui/core';

const PlainFormSetTimeout = (props) => {
  return (
    <form>
      <h2>
        Plain Form w/ setTimeout focus
      </h2>
      <h4>
        This form imperatively focuses the first field, after a hacky setTimeout.
        <br />
        After that, it appears to work properly.
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

const Input = (props) => {
  /**
   * This imperative focusing seems to work. But, the setTimeout feels like a hack.
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

export { PlainFormSetTimeout };
