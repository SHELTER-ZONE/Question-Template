<template>
  <input type="text" v-bind:placeholder="placeholder" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Inputfield',
  props: {
    placeholder: String
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
</style>