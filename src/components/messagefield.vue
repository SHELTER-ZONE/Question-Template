<template>
  <textarea class="text-gray-400 text-2xl" rows="5" v-bind:placeholder="placeholder"></textarea>
</template>

<script>
export default {
  name: 'Messagefield',
  props: {
    placeholder: String
  }
}
</script>

<style scoped>
textarea {
  outline: none;
  margin-top: 20px;
  padding: 15px 25px;
  width: 100%;
  box-shadow: 0px 1px #2DD4BF;
}
</style>