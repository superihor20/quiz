import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Select } from 'antd';
import { useRouter } from 'next/router';
import { Controller, useForm } from 'react-hook-form';
import { useMutation, useQuery, useQueryClient } from 'react-query';

import { questionApi, questionCategoryApi } from '@/api';
import type { Question, QuestionInput } from '@/api/types';
import { adminPages } from '@/constants/links';
import { QueryKeys } from '@/enums/query-keys';
import { ErrorText } from '@/form/error-text';
import { Form } from '@/form/form';
import { Input } from '@/form/input';
import { Textarea } from '@/form/textarea';
import { isItIdFromUrl } from '@/helpers/is-it-id-from-url';
import { useMessage } from '@/hooks/use-message';
import { questionSchema } from '@/zod-schemas/question.schema';

export const QuestionScreen = () => {
  const router = useRouter();
  const { success } = useMessage();
  const queryClient = useQueryClient();
  const questionId = router.asPath.split('/').pop() || '';
  const cachedQuestion = queryClient.getQueryData<Question>([QueryKeys.QUESTION, questionId]);

  const {
    control,
    handleSubmit: handleSubmitHook,
    formState: { errors },
    setValue,
  } = useForm<QuestionInput>({
    resolver: zodResolver(questionSchema),
    defaultValues: {
      categoryId: cachedQuestion?.category.id,
      question: cachedQuestion?.question,
      helpDescription: cachedQuestion?.helpDescription ?? undefined,
    },
  });

  const { data: questionsCategories } = useQuery([QueryKeys.QUESTIONS_CATEGORIES], () =>
    questionCategoryApi.getAll(),
  );

  useQuery([QueryKeys.QUESTION, questionId], () => questionApi.getById(+questionId), {
    enabled: isItIdFromUrl(questionId),
    onSuccess: (data) => {
      setValue('question', data.question);
      setValue('categoryId', data.category.id);
      setValue('helpDescription', data.helpDescription ?? undefined);
    },
  });

  const createMutation = useMutation(questionApi.create, {
    onSuccess: ({ id }) => {
      success('Question successfully created');
      router.push(`${adminPages.questions}/${id}`);
      queryClient.refetchQueries([QueryKeys.QUESTIONS]);
    },
  });

  const updateMutation = useMutation(
    ({ id, input }: { id: number; input: QuestionInput }) => questionApi.update(id, input),
    {
      onSuccess: () => {
        success('Question successfully updated');
        queryClient.refetchQueries([QueryKeys.QUESTIONS]);
        queryClient.refetchQueries([QueryKeys.QUESTION, questionId]);
      },
    },
  );

  const createNewQuestion = async (data: QuestionInput) => {
    createMutation.mutate(data);
  };

  const updateQuestion = async (id: number, data: QuestionInput) => {
    updateMutation.mutate({ id, input: data });
  };

  const handleSubmit = async (data: QuestionInput) => {
    if (!isItIdFromUrl(questionId)) {
      createNewQuestion(data);

      return;
    }

    updateQuestion(+questionId, data);
  };

  return (
    <Form
      onSubmit={handleSubmitHook((data) => {
        console.log(data);
        handleSubmit(data);
      })}
    >
      <Controller
        name="question"
        control={control}
        render={({ field }) => (
          <Input error={errors.question?.message} field={field} placeholder="Question name" />
        )}
      />
      <Controller
        name="helpDescription"
        control={control}
        render={({ field }) => (
          <Textarea
            error={errors.helpDescription?.message}
            field={field}
            placeholder="Question help text"
          />
        )}
      />
      <Controller
        name="categoryId"
        control={control}
        render={({ field }) => (
          //TODO: create custom select component
          <div style={{ position: 'relative', width: '100%' }}>
            <Select
              style={{ width: '100%' }}
              options={questionsCategories?.map((questionCategory) => ({
                value: questionCategory.id,
                label: questionCategory.name,
              }))}
              placeholder="Question category"
              {...field}
            />
            {errors.categoryId?.message ? (
              <ErrorText>{errors.categoryId?.message}</ErrorText>
            ) : null}
          </div>
        )}
      />

      <Button htmlType="submit">{isItIdFromUrl(questionId) ? 'Update' : 'Create'}</Button>
    </Form>
  );
};
