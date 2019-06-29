import React from 'react';
import { useField } from 'formik';
import { TextField } from '@material-ui/core';

const Input = (props) => {
  const [field, meta] = useField(props.name);

  const error = meta.touched && meta.error ? meta.error : ``;

  return (
    <TextField
      label={props.label}
      error={!!error}
      autoFocus={props.autoFocus}
      InputProps={field}
    />
  );
};

export default Input;
