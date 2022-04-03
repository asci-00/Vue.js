import { Module } from 'vuex';
import { JobType } from '@/models';
import { RootState } from '@/store';
import { getJob } from '@/api/job';

interface JobStoreType {
  data: JobType[];
}

const JobStore: Module<JobStoreType, RootState> = {
  namespaced: true,
  state() {
    return {
      data: [],
    };
  },
  mutations: {
    SET_JOB_LIST(state, newsList: JobType[]) {
      state.data = [...newsList];
    },
  },
  actions: {
    async FETCH_JOB({ commit }, postNumber: number) {
      const response = await getJob(postNumber);
      const newsList = response.map((item: JobType) => ({
        ...item,
        date: new Date(item.time).toLocaleDateString(),
      }));
      commit('SET_JOB_LIST', newsList);
    },
  },
};

export default JobStore;
