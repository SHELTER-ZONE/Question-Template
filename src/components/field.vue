<template>
  <input v-if="type === 'input'" type="text"
  v-bind:placeholder="placeholder" autocomplete="false" />
  <select v-if="type === 'select'">
    <option v-for="option in options" :key="option" value="option">{{option}}
    </option>
  </select>
  <textarea v-if="type === 'textarea'" rows="5" 
  v-bind:placeholder="placeholder"></textarea>
  <input v-if="type === 'image'" type="file" accept="image/*" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Field',
  props: {
    type: String,
    placeholder: String,
    options: Array
  }
})
</script>

<style scoped>
input {
  outline: none;
  margin-top: 20px;
  padding: 15px 25px;
  width: 100%;
  box-shadow: 0px 1px #2DD4BF;
}

textarea {
  outline: none;
  margin-top: 20px;
  padding: 15px 25px;
  width: 100%;
  box-shadow: 0px 1px #2DD4BF;
}

select {
  outline: none;
  margin-top: 20px;
  padding: 15px 25px;
  width: 100%;
  cursor: pointer;
  box-shadow: 0px 1px #2DD4BF;
}

input[type=file] {
  cursor: pointer;
}
</style>