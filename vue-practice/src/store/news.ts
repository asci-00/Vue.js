import { Module } from 'vuex';
import { NewsType } from '@/models';
import { RootState } from '@/store';
import { getNews } from '@/api/apis';

interface NewsStoreType {
  data: NewsType[];
}

const NewsStore: Module<NewsStoreType, RootState> = {
  namespaced: true,
  state() {
    return {
      data: [],
    };
  },
  mutations: {
    SET_NEWS_LIST(state, newsList: NewsType[]) {
      state.data = [...newsList];
    },
  },
  actions: {
    async FETCH_NEWS({ commit }, postNumber: number) {
      const response = await getNews(postNumber);
      const newsList = response.map((item: NewsType) => ({
        ...item,
        date: new Date(item.time).toLocaleDateString(),
      }));
      commit('SET_NEWS_LIST', newsList);
    },
  },
};

export default NewsStore;
