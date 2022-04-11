import { Module } from 'vuex';
import { RootState } from '@/store';
import { getItem } from '@/api/apis';
import { ItemType } from '@/models';

interface ItemStoreType {
  data: ItemType | null;
}

const JobStore: Module<ItemStoreType, RootState> = {
  namespaced: true,
  state() {
    return {
      data: null,
    };
  },
  mutations: {
    SET_JOB_LIST(state, item: ItemType) {
      state.data = item;
    },
  },
  actions: {
    async FETCH_ITEM({ commit }, itemId: number) {
      const response = await getItem(itemId);
      commit('SET_JOB_LIST', response);
    },
  },
};

export default JobStore;
