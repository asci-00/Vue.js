<template>
  <section id="main-wrapper">
    <app-navigation />
    <section id="main-section"><router-view /></section>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppNavigation from '@/components/AppNavigation';

export default defineComponent({
  name: 'App',
  components: { AppNavigation },
});
</script>

<style lang="scss" scoped>
#main-section {
  padding: 20px;
}
</style>
