<template>
  <select class="text-gray-400 text-2xl">
    <option v-for="option in options" :key="option" value="option">{{option}}</option>
  </select>
</template>

<script>
export default {
  name: 'Selectfield',
  props: {
    options: Array
  }
}
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