import Api from './index';
import { NewsType } from '@/models';

export const getNews = (page: number): Promise<NewsType[]> => Api.get(`/news/${page}.json`);
