<template>
  <div class="input-box">
    <input v-model="text" type="text" placeholder="Type what you have to do" autofocus @keyup.enter="btnClick" />
    <button class="add-button" @click="btnClick"><i class="fas fa-plus"></i></button>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, ref } from 'vue';
import shortid from 'shortid';

export default defineComponent({
  setup() {
    const { emit } = inject('emitter') as any;

    const text = ref<string>('');
    const btnClick = function () {
      if (!text.value) return null;

      emit('on-item-add', {
        id: shortid.generate(),
        check: false,
        text: text.value,
      });

      text.value = '';
    };

    return {
      text,
      btnClick,
    };
  },
});

// export default defineComponent({
//   data() {
//     return {
//       text: '',
//     };
//   },
//   methods: {
//     btnClick: function () {
//       if (!this.text) return;
//
//       this.$emit('on-item-add', {
//         id: shortid.generate(),
//         check: false,
//         text: this.text,
//       });
//
//       this.text = '';
//     },
//   },
// });
</script>

<style scoped>
.input-box {
  position: relative;
  display: inline-block;
  background: #fff;
  height: 50px;
  line-height: 50px;
  border: 1px solid grey;
  padding-left: 10px;
  border-radius: 5px;
  margin: 0;
}
input {
  outline: none;
  border-style: none;
  font-size: 0.9rem;
}
.add-button {
  cursor: pointer;
  position: relative;
  top: -2px;
  width: 3rem;
  height: 100%;
  border-radius: 0 5px 5px 0;
  background: powderblue;
  border-style: none;
}
</style>
