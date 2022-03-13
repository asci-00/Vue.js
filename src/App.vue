<template>
  <div id="wrapper">
    <todo-header></todo-header>
    <todo-input @on-item-add="onItemAdd"></todo-input>
    <todo-list
      :item-list="itemList"
      @item-check="checkItem"
      @item-remove="removeItem"
      @item-clear="clearItemList"
    ></todo-list>
    <todo-footer></todo-footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TodoHeader from '@/components/TodoHeader.vue';
import TodoInput from '@/components/otherVersion/TodoInput.vue';
import TodoList from '@/components/otherVersion/TodoList.vue';
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
    TodoList,
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
body {
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
