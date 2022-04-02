import Api from './index';
import { JobType } from '@/models';

export const getJobs = (page: number): Promise<JobType[]> => Api.get(`/news/${page}.json`);
