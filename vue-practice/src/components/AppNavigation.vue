<template>
  <header id="header">
    <div class="title">Example Project</div>
    <nav id="navigation">
      <router-link to="/">Home</router-link>
      <router-link to="/news">News</router-link>
      <router-link to="/jobs">Jobs</router-link>
      <router-link to="/ask">Ask</router-link>
    </nav>
  </header>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    console.log('test');
  },
});
</script>

<style lang="scss">
#header {
  background: #c8f0c8;
  padding: 10px;
  display: flex;
  align-items: center;
  .title {
    font-family: $font-family-head;
    font-size: 1.8em;
    width: 250px;
  }
  a {
    font-family: $font-family-title;
    text-decoration: none;
    display: inline-block;
    background: #507850;
    text-align: center;
    margin: 10px 10px;
    color: #f0f0f0;
    padding: 10px;
    width: 100px;
  }
}
</style>
