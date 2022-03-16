<template>
  <section class="wrapper-item-list">
    <ul class="item-list">
      <li v-for="(item, index) in itemList" :key="item.id">
        <span>
          <i :class="`fa-solid fa-circle-check icon ${item.check && 'checked'}`" @click="itemClick(index)"></i>
          {{ item.text }}
        </span>
        <i class="far fa-trash-alt icon delete-btn" @click="removeItem(index)"></i>
      </li>
    </ul>
    <button class="clear-btn" @click="clearItemList">Clear</button>
  </section>
</template>

<script lang="ts">
import { defineComponent, inject, ref } from 'vue';
import { itemType } from '@/types';

export default defineComponent({
  setup() {
    const emitter = inject('emitter') as any;

    const itemList = ref<itemType[]>([
      {
        id: -1,
        text: 'Some Schedule',
        check: false,
      },
    ]);

    const itemClick = function (index: number): void {
      itemList.value[index].check = !itemList.value[index].check;
    };
    const removeItem = function (index: number): void {
      itemList.value.splice(index, 1);
    };
    const clearItemList = function (): void {
      itemList.value = [];
    };

    emitter.on('onItemAdd', (item: itemType) => {
      itemList.value.push(item);
    });

    return {
      itemList,
      itemClick,
      removeItem,
      clearItemList,
    };
  },
});

// export default defineComponent({
//   data() {
//     return {
//       itemList: [
//         {
//           id: -1,
//           text: 'Some Schedule',
//           check: false,
//         },
//       ],
//     };
//   },
//   created() {
//     this.emitter.on('onItemAdd', (item) => {
//       this.itemList.push(item);
//     });
//   },
//   methods: {
//     itemClick(index) {
//       this.itemList[index].check = !this.itemList[index].check;
//     },
//     removeItem(index) {
//       this.itemList.splice(index, 1);
//     },
//     clearItemList() {
//       this.itemList = [];
//     },
//   },
// });
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
</style>
