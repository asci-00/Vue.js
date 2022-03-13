<template>
  <section class="wrapper-item-list">
    <transition-group name="list" tag="ul" class="item-list">
      <li v-for="(item, index) in itemList" :key="item.id">
        <slot :item="item" :index="index">{{ item }} - {{ index }}</slot>
      </li>
    </transition-group>
    <button class="clear-btn" @click="$emit('item-clear')">Clear</button>
  </section>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    itemList: {
      type: Array,
      default: () => [],
    },
  },
  methods: {},
});
</script>

<style scoped>
.wrapper-item-list {
  text-align: center;
}
.item-list {
  list-style: none;
  box-sizing: border-box;
  width: 700px;
  padding: 20px;
  margin: 10px auto;
}
.item-list li {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  padding: 10px;
  border-radius: 2px;
  margin-bottom: 10px;
  border: 1px solid grey;
}

.item-list li:last-of-type {
  margin-bottom: 0;
}

.icon {
  cursor: pointer;
  width: 20px;
  height: 20px;
}
.checked {
  color: greenyellow;
}
.delete-btn {
  color: red;
}
.clear-btn {
  width: 100px;
  padding: 10px;
  color: #cc3300;
  border-radius: 5px;
  border: 1px solid grey;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}
.list-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.list-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
