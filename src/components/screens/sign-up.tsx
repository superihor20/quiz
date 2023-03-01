import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/router';
import { Controller, useForm } from 'react-hook-form';
import { useMutation } from 'react-query';

import { authApi } from '@/api';
import type { UserCredentials } from '@/api/types';
import { pages } from '@/constants/links';
import { Button } from '@/form/button';
import { Form } from '@/form/form';
import { FormHelper } from '@/form/form-helper';
import { Input } from '@/form/input';
import { getStoreField } from '@/stores/selector';
import { userStore } from '@/stores/user/user.store';
import { Paper } from '@/ui/paper';
import { Title } from '@/ui/title';
import { userCredentialsSchema } from '@/zod-schemas/user-credentials.schema';

export const SignUp = () => {
  const router = useRouter();
  const setAccessToken = userStore(getStoreField('setAccessToken'));
  const {
    control,
    handleSubmit: handleSubmitHook,
    formState: { errors },
    setError,
  } = useForm<UserCredentials>({
    resolver: zodResolver(userCredentialsSchema),
  });
  const mutation = useMutation(authApi.signUp, {
    onSuccess: ({ accessToken }) => {
      setAccessToken(accessToken);
      router.push(pages.dashboard);
    },
    onError: (e) => {
      setError('email', { message: e as string });
    },
  });

  const handleSubmit = async (data: UserCredentials) => {
    mutation.mutate(data);
  };

  return (
    <Paper>
      <Title align="center">Sign up</Title>
      <Form onSubmit={handleSubmitHook(handleSubmit)}>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Input error={errors.email?.message} field={field} placeholder="Email" size="large" />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <Input
              error={errors.password?.message}
              field={field}
              placeholder="Password"
              type="password"
              size="large"
            />
          )}
        />
        <Button htmlType="submit">Submit</Button>
      </Form>
      <FormHelper text="Already have an account?" link={{ text: 'Sign in', url: pages.signIn }} />
    </Paper>
  );
};
