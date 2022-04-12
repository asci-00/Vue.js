<template>
  <ul class="post-container">
    <li v-for="item in data" :key="item.id" class="item">
      <span class="item__point" @click="moveToPost(item.id)">{{ item.points ? item.points : 0 }}</span>
      <span class="item__title" @click="moveToPost(item.id)">{{ item.title }}</span>
      <span class="item__user" @click="moveToUser(item.user)">by {{ item.user }}</span>
      <span class="item__date badge primary">{{ item.date }}</span>
      <span class="item__ago badge secondary">{{ item.time_ago }}</span>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  setup() {
    const router = useRouter();

    const moveToPost = (id: string) => router.push(`/item/${id}`);
    const moveToUser = (name: string) => router.push(`/user/${name}`);
    return { moveToPost, moveToUser };
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
  display: flex;
  width: 100%;
  padding: 20px 10px;
  border-bottom: 1px solid grey;
  span {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    padding: 0 10px;
    &.item__point {
      flex-basis: 80px;
      color: #64b970;
      font-weight: 900;
    }
    &.item__title {
      flex-basis: 100%;
    }
    &.item__user {
      flex-basis: 180px;
      color: #505050;
    }
    &.item__date {
      flex-basis: 150px;
      border-radius: 2px 0 0 2px;
    }
    &.item__ago {
      flex-basis: 150px;
      border-radius: 0 2px 2px 0;
    }
  }
}
</style>
