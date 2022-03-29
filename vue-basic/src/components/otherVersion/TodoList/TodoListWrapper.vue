<template>
  <todo-list>
    <template #default="{ item, index }">
      <span>
        <i
          :class="`fa-solid fa-circle-check icon ${item.check && 'checked'}`"
          @click="emit('on-item-check', index)"
        ></i>
        {{ item.text }}
      </span>
      <i class="far fa-trash-alt icon delete-btn" @click="emit('on-item-remove', index)"></i>
    </template>
  </todo-list>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';
import TodoList from '@/components/otherVersion/TodoList/index.vue';
import { emitterKey, emitterType } from '@/types';

export default defineComponent({
  components: { TodoList },
  setup() {
    const { emit } = inject(emitterKey) as emitterType;
    return { emit };
  },
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
