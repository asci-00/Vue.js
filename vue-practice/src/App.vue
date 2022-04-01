<template>
  <section id="wrapper">
    <app-navigation />
    <router-view v-slot="{ Component, route }">
      <transition :name="route.meta.transition || 'fade'" mode="out-in">
        <suspense>
          <template #default>
            <keep-alive>
              <component :is="Component" :key="route.path" />
            </keep-alive>
          </template>
        </suspense>
      </transition>
    </router-view>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppNavigation from '@/components/AppNavigation.vue';

export default defineComponent({
  name: 'App',
  components: { AppNavigation },
});
</script>

<style></style>
