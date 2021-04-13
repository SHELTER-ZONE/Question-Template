<template>
  <div class="header">
    <h1 class="text-4xl text-cool-gray-400 m-10">{{title}}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Header',
  props: {
    title: String
  }
})
</script>

<style scoped>
.header {
  border-bottom: 2px solid #2DD4BF;
  margin: 60px auto;
  max-width: 60rem;
}

.header h1 {
  text-shadow: 1.6px 1.6px #71717A;
}
</style>