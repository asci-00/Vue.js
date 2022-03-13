<template>
  <footer>
    <nav><slot name="link-list"></slot></nav>
    <p>
      <slot name="copyright" :owner="owner">Copyright</slot>
    </p>
  </footer>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      owner: 'asci-00',
    };
  },
});
</script>

<style scoped>
footer {
  box-sizing: border-box;
  position: absolute;
  bottom: 140px;
  width: 100%;
  height: 100px;
  padding: 20px;
  line-height: 100px;
  text-align: center;
}
</style>
