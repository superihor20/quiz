import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from 'antd';
import { Controller, useForm } from 'react-hook-form';

import { authApi, UserCredentials } from '../../api';
import { useLocalStorage } from '../../hooks/use-local-storage';
import { pages } from '../../utils/constans/links';
import { localStorageKeys } from '../../utils/enums/local-storage-keys';
import { CustomError } from '../../utils/helpers/get-error-message';
import { userCredentialsSchema } from '../../utils/zod-schemas/user-credentials.schema';
import { Form } from '../form/form';
import { FormHelper } from '../form/form-helper';
import { Input } from '../form/input';

export const SignUp = () => {
  const [, setAccessToken] = useLocalStorage<null | string>(localStorageKeys.ACCESS_TOKEN, null);
  const {
    control,
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
    <div>
      <h1>Sign up</h1>
      <Form onSubmit={handleSubmitHook((data) => handleSubmit(data))}>
        <Controller
          name="email"
          control={control}
          render={({ field }) => <Input error={errors.email?.message} field={field} />}
        />
        <Controller
          name="password"
          control={control}
          render={({ field }) => <Input error={errors.password?.message} field={field} />}
        />
        <Button htmlType="submit">Submit</Button>
        <FormHelper text="Already have an account?" link={{ text: 'Sign in', url: pages.signIn }} />
      </Form>
    </div>
  );
};
