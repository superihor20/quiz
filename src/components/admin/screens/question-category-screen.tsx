import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from 'antd';
import { useRouter } from 'next/router';
import { Controller, useForm } from 'react-hook-form';
import { useMutation, useQuery, useQueryClient } from 'react-query';

import { questionCategoryApi } from '@/api';
import { QuestionCategory, QuestionCategoryInput } from '@/api/types';
import { adminPages } from '@/constants/links';
import { QueryKeys } from '@/enums/query-keys';
import { Form } from '@/form/form';
import { Input } from '@/form/input';
import { isItIdFromUrl } from '@/helpers/is-it-id-from-url';
import { useMessage } from '@/hooks/use-message';
import { questionCategorySchema } from '@/zod-schemas/question-category.schema';

export const QuestionCategoryScreen = () => {
  const router = useRouter();
  const { success } = useMessage();
  const queryClient = useQueryClient();
  const questionCategoryId = router.asPath.split('/').pop() || '';

  const {
    control,
    handleSubmit: handleSubmitHook,
    formState: { errors },
    setValue,
  } = useForm<QuestionCategoryInput>({
    resolver: zodResolver(questionCategorySchema),
    defaultValues: {
      name: queryClient.getQueryData<QuestionCategory>([
        QueryKeys.QUESTION_CATEGORY,
        questionCategoryId,
      ])?.name,
    },
  });

  useQuery(
    [QueryKeys.QUESTION_CATEGORY, questionCategoryId],
    () => questionCategoryApi.getById(+questionCategoryId),
    {
      enabled: isItIdFromUrl(questionCategoryId),
      onSuccess: (data) => {
        setValue('name', data.name);
      },
    },
  );

  const createMutation = useMutation(questionCategoryApi.create, {
    onSuccess: ({ id }) => {
      success('Question category successfully created');
      router.push(`${adminPages.questionsCategories}/${id}`);
      queryClient.refetchQueries([QueryKeys.QUESTIONS_CATEGORIES]);
    },
  });

  const updateMutation = useMutation(
    ({ id, input }: { id: number; input: QuestionCategoryInput }) =>
      questionCategoryApi.update(id, input),
    {
      onSuccess: () => {
        success('Question category successfully updated');
        queryClient.refetchQueries([QueryKeys.QUESTIONS_CATEGORIES]);
      },
    },
  );

  const createNewQuestionCategory = async (data: QuestionCategoryInput) => {
    createMutation.mutate(data);
  };

  const updateQuestionCategory = async (id: number, data: QuestionCategoryInput) => {
    updateMutation.mutate({ id, input: data });
  };

  const handleSubmit = async (data: QuestionCategoryInput) => {
    if (!isItIdFromUrl(questionCategoryId)) {
      createNewQuestionCategory(data);

      return;
    }

    updateQuestionCategory(+questionCategoryId, data);
  };

  return (
    <Form onSubmit={handleSubmitHook(handleSubmit)}>
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <Input error={errors.name?.message} field={field} placeholder="Question category name" />
        )}
      />
      <Button htmlType="submit">{isItIdFromUrl(questionCategoryId) ? 'Update' : 'Create'}</Button>
    </Form>
  );
};
