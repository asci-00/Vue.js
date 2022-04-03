<template>
  <ul class="post-container">
    <li v-for="item in data" :key="item.id" class="item" @click="moveToUrl(item.url)">
      <span class="item__title">{{ item.title }}</span>
      <span class="item__user">{{ item.user }}</span>
      <span class="item__date badge primary">{{ item.date }}</span>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  setup() {
    const moveToUrl = (url: string) => window.open(url, '_black');

    return { moveToUrl };
  },
});
</script>

<style lang="scss" scoped>
ul.post-container {
  list-style: none;
  padding: 0;
  margin: 0;
}
li.item {
  background: #f0f0f0;
  cursor: pointer;
  margin: 10px 0;
  display: flex;
  width: 100%;
  padding: 10px;
  border-bottom: 4px solid grey;
  span {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    padding: 0 10px;
    &.item__title {
      flex-basis: 100%;
    }
    &.item__user {
      flex-basis: 180px;
    }
    &.item__date {
      flex-basis: 150px;
    }
  }
}
</style>
