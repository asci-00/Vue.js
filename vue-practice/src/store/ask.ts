import { Module } from 'vuex';
import { AskType } from '@/models';
import { RootState } from '@/store';
import { getAsk } from '@/api/ask';

interface AskStoreType {
  data: AskType[];
}

const AskStore: Module<AskStoreType, RootState> = {
  namespaced: true,
  state() {
    return {
      data: [],
    };
  },
  mutations: {
    SET_ASK_LIST(state, askList: AskType[]) {
      state.data = [...askList];
    },
  },
  actions: {
    async FETCH_ASK({ commit }, postNumber: number) {
      const response = await getAsk(postNumber);
      const askList = response.map((item: AskType) => ({
        ...item,
        date: new Date(item.time).toLocaleDateString(),
      }));
      commit('SET_ASK_LIST', askList);
    },
  },
};

export default AskStore;
