import React from 'react';
import { useFormik, useField, FormikProvider } from 'formik';
import { TextField } from '@material-ui/core';

const initialValues = {
  firstName: ``,
  lastName: ``,
  email: ``,
};

const FormikHooks = () => {
  const onSubmit = () => { };

  return (
    <Form initialValues={initialValues} onSubmit={onSubmit}>
      <div>
        <Input
          type="text"
          name="firstName"
          label="First Name"
          autoFocus={true}
          />
      </div>
      <div>
        <Input
          type="text"
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
    </Form>
  );
};

const Form = (props) => {
  const { children, ...formikProps } = props;
  const formik = useFormik(formikProps);

  return (
    <FormikProvider value={formik}>
      <form>
        {children}
      </form>
    </FormikProvider>
  );
};

const Input = (props) => {
  const [field, meta] = useField(props.name);

  /**
   * Without the setTimeout, using this, along with inputRef below,
   * will cause an infinite render loop.
   *
   * With the setTimeout, the focus just keeps jumping back to the first field after the timeout.
   * And this Formik error is logged to the console:
   *
   *   "Cannot call an event handler while rendering."
   */
  const focusInputField = input => {
    if (props.autoFocus && input) {
      setTimeout(() => input.focus(), 100);
    }
  };

  const error = meta.touched && meta.error ? meta.error : ``;

  return (
    <TextField
      inputRef={focusInputField}
      label={props.label}
      error={!!error}
      autoFocus={props.autoFocus}
      InputProps={field}
    />
  );
};

export { FormikHooks };
