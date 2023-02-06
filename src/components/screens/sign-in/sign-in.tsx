import { useState } from 'react';

import { authApi } from '../../../api';
import { pages } from '../../../utils/constans/links';
import { Button } from '../../form/button/button';
import { FormHelper } from '../../form/form-helper/form-helper';
import { Form } from '../../form/form/form';
import { Input } from '../../form/input/input';

export const SignIn = () => {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await authApi.signIn(formValues);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-slate-50 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-3">Sign in</h1>
      <Form onSubmit={handleSubmit}>
        <Input
          label="email"
          type="email"
          value={formValues.email}
          onChange={handleFormChange}
          name="email"
        />
        <Input
          label="password"
          type="password"
          value={formValues.password}
          onChange={handleFormChange}
          name="password"
        />
        <Button type="submit">Submit</Button>
        <FormHelper text="Don't have an account?" link={{ text: 'Sign up', url: pages.signUp }} />
      </Form>
    </div>
  );
};
