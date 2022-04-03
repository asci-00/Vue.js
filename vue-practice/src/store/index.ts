import { NewsType, JobType } from '@/models';
import { createStore } from 'vuex';
import news from '@/store/news';
import job from '@/store/job';
import ask from '@/store/ask';

export interface RootState {
  NewsType: NewsType;
  JobType: JobType;
}

export default createStore({ modules: { job, news, ask } });
