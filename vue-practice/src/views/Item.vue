<template>
  <div>{{ itemInfo }}</div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const route = useRoute();
    const store = useStore();

    const { id } = route.params;
    store.dispatch('item/FETCH_ITEM', id);

    const itemInfo = computed(() => store.state.item.data);
    console.log(itemInfo.value);
    return { itemInfo };
  },
});
</script>

<style scoped></style>
