<template>
  <section id="main-wrapper">
    <app-navigation />
    <section id="main-section">
      <router-view v-slot="{ Component }">
        <Transition name="fade">
          <component :is="Component" />
        </Transition>
      </router-view>
    </section>
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

<style lang="scss">
#main-section {
  padding: 20px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
