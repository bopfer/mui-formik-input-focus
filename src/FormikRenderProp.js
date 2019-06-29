import React from 'react';
import { Formik } from 'formik';
import { TextField } from '@material-ui/core';

const initialValues = {
  firstName: ``,
  lastName: ``,
  email: ``,
};

const onSubmit = () => { };

const FormikRenderProp = () => (
  <Formik initialValues={initialValues} onSubmit={onSubmit}>
    {formikBag => (
      <form onSubmit={formikBag.handleSubmit}>
        <div>
          <Input
            type="text"
            name="firstName"
            label="First Name"
            autoFocus={true}
            onChange={formikBag.onChange}
            onBlur={formikBag.onBlur}
          />
        </div>
        <div>
          <Input
            type="text"
            name="lastName"
            label="Last Name"
            onChange={formikBag.onChange}
            onBlur={formikBag.onBlur}
          />
        </div>
        <div>
          <Input
            type="email"
            name="email"
            label="Email Address"
            onChange={formikBag.onChange}
            onBlur={formikBag.onBlur}
          />
        </div>
      </form>
    )}
  </Formik>
);

const Input = (props) => {
  /**
   * The setTimeout is the only way to get focus to work, but feels like a hack.
   */
  const focusInputField = input => {
    if (props.autoFocus && input) {
      setTimeout(() => input.focus(), 100);
    }
  };

  return (
    <TextField
      inputRef={focusInputField}
      {...props}
    />
  );
};

export { FormikRenderProp };
