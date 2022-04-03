<template>
  <div>
    <header class="page-header">Job</header>
    <post-list :data="jobList" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import PostList from '@/components/PostList';
import { useStore } from 'vuex';

export default defineComponent({
  components: {
    PostList,
  },

  setup() {
    const store = useStore();

    store.dispatch('job/FETCH_JOB', 1);
    const jobList = computed(() => store.state.job.data);

    return { jobList };
  },
});
</script>

<style scoped></style>
