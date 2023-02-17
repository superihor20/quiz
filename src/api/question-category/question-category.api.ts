import { AxiosInstance } from 'axios';

import { ApiFactory } from '../factory/api.factory';
import { axios } from '../instance';

import { QuestionCategoryInput, QuestionCategory } from './question-category.schema';

import { questionsCategoriesEndpoint } from '@/constants/endpoints';

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
