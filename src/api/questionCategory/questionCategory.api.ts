import { AxiosInstance } from 'axios';

import { questionsCategoriesEnpoint } from '../../utils/constans/endpoints';
import { ApiFactory } from '../factory/api.factory';
import { axios } from '../instance';

import {
  CreateQuestionCategoryInput,
  QuestionCategory,
  UpdateQuestionCategoryInput,
} from './questionCategory.schema';

class QuestionCategoryApi extends ApiFactory<
  CreateQuestionCategoryInput,
  UpdateQuestionCategoryInput,
  QuestionCategory
> {
  constructor(axiosInstance: AxiosInstance) {
    super(questionsCategoriesEnpoint, axiosInstance);
  }
}

export const questionCategoryApi = new QuestionCategoryApi(axios);
