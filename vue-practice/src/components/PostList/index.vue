<template>
  <ul class="post-container">
    <li v-for="post in postList" :key="post.id" class="post-item" @click="moveToUrl(post.url)">
      <span class="post-item__title">{{ post.title }}</span>
      <span class="post-item__user">{{ post.user }}</span>
      <span class="post-item__date badge primary">{{ post.date }}</span>
    </li>
  </ul>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  props: {},
  async setup() {
    const moveToUrl = (url: string) => window.open(url, '_black');

    return {
      moveToUrl,
    };
  },
});
</script>

<style lang="scss" scoped>
ul.post-container {
  list-style: none;
  padding: 0;
  margin: 0;
}
li.post-item {
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
    &.post-item__title {
      flex-basis: 100%;
    }
    &.post-item__user {
      flex-basis: 180px;
    }
    &.post-item__date {
      flex-basis: 150px;
    }
  }
}
</style>
