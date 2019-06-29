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
        <h2>
          Formik form (Render prop)
        </h2>
        <h4>
          Like the Plain Form, this form imperatively focuses the first field,
          after a hacky setTimeout.
          <br />
          After that it appears to work properly.
        </h4>
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
