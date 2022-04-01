<template>
  <section>
    <header class="page-header">News</header>
    <ul class="post-container">
      <li v-for="news in newsList" :key="news.id" class="post-item">
        <span class="post-item__title">{{ news.title }}</span>
        <span class="post-item__user">{{ news.user }}</span>
        <span class="post-item__date">{{ news.date }}</span>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { getNews } from '@/api/news';

interface postInteface {
  id: number;
  date: string;
  domain: string;
  time: number;
  time_ago: string;
  title: string;
  type: string;
  url: string;
  user: string;
  points: number;
  comments_count: number;
}

export default defineComponent({
  async setup() {
    const response = await getNews(1);
    const newsList = ref(
      response.map((item: postInteface) => ({ ...item, date: new Date(item.time).toLocaleDateString() }))
    );
    console.log(newsList);
    return {
      newsList,
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
  margin: 10px 0;
  display: flex;
  width: 1200px;
  padding: 10px;
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
