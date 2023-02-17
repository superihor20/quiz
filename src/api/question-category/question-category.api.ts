import { AxiosInstance } from 'axios';

import { ApiFactory } from '../factory/api.factory';
import { axios } from '../instance';

import { QuestionCategoryInput, QuestionCategory } from './question-category.schema';

import { questionsCategoriesEnpoint } from '@/constants/endpoints';

class QuestionCategoryApi extends ApiFactory<
  QuestionCategoryInput,
  QuestionCategoryInput,
  QuestionCategory
> {
  constructor(axiosInstance: AxiosInstance) {
    super(questionsCategoriesEnpoint, axiosInstance);
  }
}

export const questionCategoryApi = new QuestionCategoryApi(axios);
