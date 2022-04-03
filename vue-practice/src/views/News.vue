<template>
  <div>
    <header class="page-header">News</header>
    <post-list :data="newsList" />
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

    store.dispatch('news/FETCH_NEWS', 1);
    const newsList = computed(() => store.state.news.data);

    return { newsList };
  },
});
</script>

<style scoped></style>
