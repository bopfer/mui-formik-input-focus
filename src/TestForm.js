import React from 'react';

import Form from './ui/Form';
import Input from './ui/Input';

const initialValues = {
  firstName: ``,
  lastName: ``,
  email: ``,
};

const TestForm = () => {
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

export default TestForm;
