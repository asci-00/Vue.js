<template>
  <div id="wrapper">
    <todo-header>Todo Application</todo-header>
    <todo-input @on-item-add="onItemAdd"></todo-input>
    <todo-list-wrapper
      :item-list="itemList"
      @item-check="checkItem"
      @item-remove="removeItem"
      @item-clear="clearItemList"
    ></todo-list-wrapper>
    <todo-footer>
      <template #link-list>
        <a href="#" target="_blank">Blog</a> |
        <a href="#" target="_blank">Github</a>
      </template>
      <template #copyright="{ owner = 'anonymous' }"> Copyright 2022. {{ owner }}. All Rights Reserved. </template>
    </todo-footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TodoHeader from '@/components/TodoHeader.vue';
import TodoInput from '@/components/otherVersion/TodoInput.vue';
import TodoListWrapper from '@/components/otherVersion/TodoList/TodoListWrapper.vue';
import TodoFooter from '@/components/TodoFooter.vue';

type itemType = {
  id: number;
  text: string;
  check: boolean;
};

export default defineComponent({
  name: 'App',
  components: {
    TodoFooter,
    TodoListWrapper,
    TodoInput,
    TodoHeader,
  },
  data() {
    return {
      itemList: [
        {
          id: -1,
          text: 'Some Schedule',
          check: false,
        },
      ],
    };
  },
  methods: {
    onItemAdd(item: itemType) {
      console.log('item add call');
      const text = item.text.trim();

      this.itemList.push({
        ...item,
        text,
      });
    },
    checkItem(index: number) {
      this.itemList[index].check = !this.itemList[index].check;
    },
    removeItem(index: number) {
      this.itemList.splice(index, 1);
    },
    clearItemList() {
      this.itemList = [];
    },
  },
});
</script>

<style>
html {
  height: 100%;
}
body {
  position: relative;
  height: calc(100% - 40px);
  text-align: center;
  background-color: #f6f6f8;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
