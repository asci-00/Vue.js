import { Module } from 'vuex';
import { UserType } from '@/models';
import { RootState } from '@/store';
import { getUser } from '@/api/apis';

interface UserStoreType {
  data: UserType | null;
}

const AskStore: Module<UserStoreType, RootState> = {
  namespaced: true,
  state() {
    return {
      data: null,
    };
  },
  mutations: {
    SET_USER(state, userInfo: UserType) {
      state.data = userInfo;
    },
  },
  actions: {
    async FETCH_USER({ commit }, name: string) {
      const userInfo = await getUser(name);
      commit('SET_USER', userInfo);
    },
  },
};

export default AskStore;
