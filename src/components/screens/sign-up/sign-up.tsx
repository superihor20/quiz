import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { authApi, UserCredentials } from '../../../api';
import { useLocalStorage } from '../../../hooks/useLocalStorage';
import { pages } from '../../../utils/constans/links';
import { CustomError } from '../../../utils/helpers/getErrorMessage';
import { userCredentialsSchema } from '../../../utils/schemas/zod-schemas/user-credentials.schema';
import { Button } from '../../form/button/button';
import { FormHelper } from '../../form/form-helper/form-helper';
import { Form } from '../../form/form/form';
import { Input } from '../../form/input/input';

export const SignUp = () => {
  const [, setAccessToken] = useLocalStorage<null | string>('accessToken', null);
  const {
    register,
    handleSubmit: handleSubmitHook,
    formState: { errors },
    setError,
  } = useForm<UserCredentials>({
    resolver: zodResolver(userCredentialsSchema),
  });

  const handleSubmit = async (data: UserCredentials) => {
    try {
      const { accessToken } = await authApi.signIn(data);

      setAccessToken(accessToken);
    } catch (e) {
      setError('email', { message: (e as CustomError).message });
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-slate-50 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-3">Sign up</h1>
      <Form onSubmit={handleSubmitHook((data) => handleSubmit(data))}>
        <Input
          label="email"
          type="email"
          register={register}
          name="email"
          errorMessage={errors.email?.message}
        />
        <Input
          label="password"
          type="password"
          register={register}
          name="password"
          errorMessage={errors.password?.message}
        />
        <Button type="submit">Submit</Button>
        <FormHelper text="Already have an account?" link={{ text: 'Sign in', url: pages.signIn }} />
      </Form>
    </div>
  );
};
