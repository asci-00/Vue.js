<template>
  <header>
    <h1><slot>Header</slot></h1>
  </header>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<style scoped>
h1 {
  color: #2f3b52;
  font-weight: 900;
  margin: 2.5rem 0 1.5rem;
  text-transform: uppercase;
}
</style>
