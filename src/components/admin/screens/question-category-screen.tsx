import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from 'antd';
import { useRouter } from 'next/router';
import { Controller, useForm } from 'react-hook-form';
import { useQuery } from 'react-query';

import { questionCategorySchema } from '../../../utils/zod-schemas/question-category.schema';
import { Form } from '../../form/form';
import { Input } from '../../form/input';

import { questionCategoryApi } from '@/api';
import { QuestionCategoryInput } from '@/api/types';
import { adminPages } from '@/constants/links';
import { QueryKeys } from '@/enums/query-keys';
import { isItIdFromUrl } from '@/helpers/is-it-id-from-url';

export const QuestionCategoryScreen = () => {
  const router = useRouter();
  const questionCategoryId = router.asPath.split('/').pop() || '';
  const {
    control,
    handleSubmit: handleSubmitHook,
    formState: { errors },
    setValue,
  } = useForm<QuestionCategoryInput>({
    resolver: zodResolver(questionCategorySchema),
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

  const createNewQuestionCategory = async (data: QuestionCategoryInput) => {
    const questionCategory = await questionCategoryApi.create(data);

    router.push(`${adminPages.questionsCategories}/${questionCategory.id}`);
  };

  const updateQuestionCategory = async (id: number, data: QuestionCategoryInput) => {
    questionCategoryApi.update(id, data);
  };

  const handleSubmit = async (data: QuestionCategoryInput) => {
    if (!isItIdFromUrl(questionCategoryId)) {
      createNewQuestionCategory(data);

      return;
    }

    updateQuestionCategory(+questionCategoryId, data);
  };

  return (
    <Form onSubmit={handleSubmitHook((data) => handleSubmit(data))}>
      <Controller
        name="name"
        control={control}
        render={({ field }) => <Input error={errors.name?.message} field={field} />}
      />
      <Button htmlType="submit">{isItIdFromUrl(questionCategoryId) ? 'Update' : 'Create'}</Button>
    </Form>
  );
};
