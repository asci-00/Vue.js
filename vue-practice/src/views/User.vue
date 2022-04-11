<template>
  <div id="info-container">
    <p>name: {{ userInfo.id }}</p>
    <p>karma: {{ userInfo.karma }}</p>
    <p>created: {{ userInfo.created }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const route = useRoute();
    const store = useStore();

    const { name } = route.params;
    store.dispatch('user/FETCH_USER', name);

    const userInfo = computed(() => store.state.user.data);
    return { userInfo };
  },
});
</script>

<style lang="scss" scoped>
#info-container {
  position: relative;
  width: 500px;
  height: 600px;
  border-radius: 5px;
  background: #eee;
  box-shadow: 2px 7px 7px 3px #888888;
  padding: 20px;
  margin: 0 auto;
}
</style>
