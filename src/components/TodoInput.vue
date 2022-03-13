<template>
  <div class="input-box">
    <input v-model="item" type="text" placeholder="Type what you have to do" autofocus @keyup.enter="btnClick" />
    <button class="add-button" @click="btnClick"><i class="fas fa-plus"></i></button>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import shortid from 'shortid';

export default defineComponent({
  data() {
    return {
      item: '',
    };
  },
  methods: {
    btnClick: function () {
      if (!this.item) return;

      const text = this.item.trim();

      this.emitter.emit('onItemAdd', {
        id: shortid.generate(),
        check: false,
        text,
      });

      this.item = '';
    },
  },
});
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
