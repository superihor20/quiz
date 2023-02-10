import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { authApi, UserCredentials } from '../../api';
import { useLocalStorage } from '../../hooks/use-local-storage';
import { pages } from '../../utils/constans/links';
import { localStorageKeys } from '../../utils/enums/local-storage-keys';
import { CustomError } from '../../utils/helpers/get-error-message';
import { userCredentialsSchema } from '../../utils/zod-schemas/user-credentials.schema';
import { Button } from '../form/button';
import { Form } from '../form/form';
import { FormHelper } from '../form/form-helper';
import { Input } from '../form/input';

export const SignIn = () => {
  const [, setAccessToken] = useLocalStorage<null | string>(localStorageKeys.ACCESS_TOKEN, null);
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
      <h1 className="text-2xl font-bold text-center mb-3">Sign in</h1>
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
        <FormHelper text="Don't have an account?" link={{ text: 'Sign up', url: pages.signUp }} />
      </Form>
    </div>
  );
};
