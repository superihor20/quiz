import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';

import { userApi } from '@/api';
import { User, UserInput } from '@/api/types';
import { QueryKeys } from '@/enums/query-keys';
import { Button } from '@/form/button';
import { Form } from '@/form/form';
import { Input } from '@/form/input';
import { useMessage } from '@/hooks/use-message';
import { UserPageLayout } from '@/layouts/user-pages-layout';
import { Paper } from '@/ui/paper';
import { userSchema } from '@/zod-schemas/user-schema';

export const SettingsScreen = () => {
  const queryClient = useQueryClient();
  const user = queryClient.getQueryData<User>([QueryKeys.ME]) as User;
  const { success } = useMessage();

  const {
    control,
    handleSubmit: handleSubmitHook,
    formState: { errors },
    setError,
  } = useForm<UserInput>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      email: user.email,
      fullName: user.fullName ?? undefined,
    },
  });

  const mutation = useMutation((input: UserInput) => userApi.update(user.id, input), {
    onSuccess: () => {
      queryClient.refetchQueries([QueryKeys.ME]);
      success('Information updated successfully');
    },
    onError: (e) => {
      setError('email', { message: e as string });
    },
  });

  const handleSubmit = async (data: UserInput) => {
    mutation.mutate(data);
  };

  return (
    <UserPageLayout title="Settings">
      <Paper maxWidth={900}>
        <Form onSubmit={handleSubmitHook(handleSubmit)}>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input error={errors.email?.message} field={field} placeholder="Email" size="large" />
            )}
          />
          <Controller
            name="fullName"
            control={control}
            render={({ field }) => (
              <Input
                error={errors.fullName?.message}
                field={field}
                placeholder="Full name"
                size="large"
              />
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
                size="large"
              />
            )}
          />
          <Button htmlType="submit">Save</Button>
        </Form>
      </Paper>
    </UserPageLayout>
  );
};
