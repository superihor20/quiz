import { Button } from '../../form/button/button';
import { FormHelper } from '../../form/form-helper/form-helper';
import { Form } from '../../form/form/form';
import { Input } from '../../form/input/input';

export const SignIn = () => {
  return (
    <div className="max-w-md mx-auto p-4 bg-slate-50 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-3">Sign in</h1>
      <Form>
        <Input label="email" type="email" />
        <Input label="password" type="password" />
        <Button>Submit</Button>
        <FormHelper
          text="Don't have an account?"
          link={{ text: 'Sign up', url: 'http://localhost:3000/sign-up' }}
        />
      </Form>
    </div>
  );
};
