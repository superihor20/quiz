import { AxiosInstance } from 'axios';

import { questionsCategoriesEndpoint } from '@/constants/endpoints';

import { ApiFactory } from '../factory/api.factory';
import { axios } from '../instance';

import { QuestionCategoryInput, QuestionCategory } from './question-category.schema';

class QuestionCategoryApi extends ApiFactory<
  QuestionCategoryInput,
  QuestionCategoryInput,
  QuestionCategory
> {
  constructor(axiosInstance: AxiosInstance) {
    super(questionsCategoriesEndpoint, axiosInstance);
  }
}

export const questionCategoryApi = new QuestionCategoryApi(axios);
