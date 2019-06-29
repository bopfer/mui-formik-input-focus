import React from 'react';
import { useFormik, FormikProvider } from 'formik';

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

export default Form;
