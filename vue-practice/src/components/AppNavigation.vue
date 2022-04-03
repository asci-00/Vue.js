<template>
  <header id="header">
    <div class="title"><router-link to="/">Example Project</router-link></div>
    <nav id="navigation">
      <router-link to="/news">News</router-link>
      <router-link to="/jobs">Jobs</router-link>
      <router-link to="/ask">Asks</router-link>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<style lang="scss">
#header {
  background: #f0f0f0;
  padding: 10px;
  display: flex;
  align-items: center;
  color: #282828;

  .title {
    margin-right: 60px;
    a {
      font-family: $font-family-head;
      font-size: 1.8em;
      width: 250px;
    }
  }
  #navigation a {
    font-family: $font-family-title;
    display: inline-block;
    text-align: center;
    margin: 10px 10px;
    color: #505050;
    padding: 10px;
    width: 100px;
    font-weight: 900;
    &.router-link-active {
      background: #c8f050;
    }
  }
}
</style>
