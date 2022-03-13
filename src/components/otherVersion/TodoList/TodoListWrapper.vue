<template>
  <todo-list>
    <template #default="{ item, index }">
      <span>
        <i :class="`fa-solid fa-circle-check icon ${item.check && 'checked'}`" @click="$emit('item-check', index)"></i>
        {{ item.text }}
      </span>
      <i class="far fa-trash-alt icon delete-btn" @click="$emit('item-remove', index)"></i>
    </template>
  </todo-list>
</template>

<script>
import { defineComponent } from 'vue';
import TodoList from '@/components/otherVersion/TodoList';
export default defineComponent({
  components: { TodoList },
});
</script>

<style scoped>
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
</style>
