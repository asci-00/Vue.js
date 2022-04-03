import { createStore } from 'vuex';
import news from '@/store/news';
import jobs from '@/store/jobs';
import { NewsType, JobType } from '@/models';

export interface RootState {
  NewsType: NewsType;
  JobType: JobType;
}

export default createStore({ modules: { jobs, news } });
