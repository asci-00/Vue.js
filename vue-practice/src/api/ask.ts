import Api from './index';
import { AskType } from '@/models';

export const getAsk = (page: number): Promise<AskType[]> => Api.get(`/news/${page}.json`);
