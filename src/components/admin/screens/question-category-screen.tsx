import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';

import { questionCategoryApi } from '../../../api/question-category/question-category.api';
import { QuestionCategoryInput } from '../../../api/question-category/question-category.schema';
import { adminPages } from '../../../utils/constans/links';
import { QueryKeys } from '../../../utils/enums/query-keys';
import { isItIdFromUrl } from '../../../utils/helpers/is-it-id-from-url';
import { questionCategorySchema } from '../../../utils/zod-schemas/question-category.schema';
import { Button } from '../../form/button';
import { Form } from '../../form/form';
import { Input } from '../../form/input';

export const QuestionCategoryScreen = () => {
  const router = useRouter();
  const questionCategoryId = router.asPath.split('/').pop() || '';
  const {
    register,
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
    try {
      if (!isItIdFromUrl(questionCategoryId)) {
        createNewQuestionCategory(data);

        return;
      }

      updateQuestionCategory(+questionCategoryId, data);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Form onSubmit={handleSubmitHook((data) => handleSubmit(data))}>
      <Input
        register={register}
        label="Name"
        type="text"
        name="name"
        errorMessage={errors.name?.message}
      />
      <Button type="submit" position="left">
        Create
      </Button>
    </Form>
  );
};
