<template>
  <select>
    <option v-for="option in options" :key="option" value="option">{{option}}</option>
  </select>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Selectfield',
  props: {
    options: Array
  }
})
</script>

<style scoped>
select {
  outline: none;
  margin-top: 20px;
  padding: 15px 25px;
  width: 100%;
  cursor: pointer;
  box-shadow: 0px 1px #2DD4BF;
}
</style>