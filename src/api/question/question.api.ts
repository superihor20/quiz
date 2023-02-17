import { AxiosInstance } from 'axios';

import { questionEndpoint } from '@/constants/endpoints';

import { ApiFactory } from '../factory/api.factory';
import { axios } from '../instance';

import type { Question, QuestionInput } from './question.schema';

class QuestionApi extends ApiFactory<QuestionInput, QuestionInput, Question> {
  constructor(axiosInstance: AxiosInstance) {
    super(questionEndpoint, axiosInstance);
  }
}

export const questionApi = new QuestionApi(axios);
