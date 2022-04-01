<template>
  <div>
    <Suspense>
      <template #fallback>Loading Component</template>
      <news-list />
    </Suspense>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NewsList from '@/components/NewsList';

export default defineComponent({
  components: {
    NewsList,
  },
});
</script>

<style scoped></style>
