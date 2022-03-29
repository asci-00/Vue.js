<template>
  <div>
    application root component
    <Suspense>
      <async-component>test</async-component>
      <template #fallback> loading component.. </template>
    </Suspense>
    <async-component-two></async-component-two>
  </div>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue';

const asyncComponent = defineAsyncComponent(
  () =>
    new Promise((res) => {
      setTimeout(() => {
        res(import('@/components/TodoHeader.vue') as any);
      }, 1000);
    })
);

const asyncComponentTwo = defineAsyncComponent({
  loader: () => import('@/components/TodoHeader.vue'),
  delay: 2000,
  timeout: 3000,
});

export default defineComponent({
  components: {
    asyncComponent,
    asyncComponentTwo,
  },
  data() {
    return {
      message: 'test',
    };
  },
});
</script>

<style scoped></style>
