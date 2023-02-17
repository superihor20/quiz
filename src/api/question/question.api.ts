import { AxiosInstance } from 'axios';

import { ApiFactory } from '../factory/api.factory';
import { axios } from '../instance';

import type { Question, QuestionInput } from './question.schema';

import { questionEndpoint } from '@/constants/endpoints';

class QuestionApi extends ApiFactory<QuestionInput, QuestionInput, Question> {
  constructor(axiosInstance: AxiosInstance) {
    super(questionEndpoint, axiosInstance);
  }
}

export const questionApi = new QuestionApi(axios);
