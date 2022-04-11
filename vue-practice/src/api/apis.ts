import Api from './index';
import { ItemType, NewsType } from '@/models';
import { PostType } from '@/models';
import { JobType } from '@/models';
import { UserType } from '@/models';

export const getUser = (name: string): Promise<UserType> => Api.get(`/user/${name}.json`);
export const getJob = (page: number): Promise<JobType[]> => Api.get(`/jobs/${page}.json`);
export const getAsk = (page: number): Promise<PostType[]> => Api.get(`/ask/${page}.json`);
export const getNews = (page: number): Promise<NewsType[]> => Api.get(`/news/${page}.json`);
export const getItem = (id: number): Promise<ItemType> => Api.get(`/item/${id}.json`);
