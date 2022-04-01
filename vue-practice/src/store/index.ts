import { createStore } from 'vuex';
import news from '@/store/news';
import jobs from '@/store/jobs';
export default createStore({ modules: { jobs, news } });
