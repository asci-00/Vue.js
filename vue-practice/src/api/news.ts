import Api from './index';

export const getNews = (page: number): Promise<any> => Api.get(`/news/${page}.json`);
