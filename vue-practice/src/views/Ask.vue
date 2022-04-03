<template>
  <div>
    <header class="page-header">Ask</header>
    <post-list :data="askList" />
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

    store.dispatch('ask/FETCH_ASK', 1);
    const askList = computed(() => store.state.ask.data);

    return { askList };
  },
});
</script>

<style scoped></style>
