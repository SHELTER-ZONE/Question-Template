<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Container'
})
</script>

<style lang="postcss" scoped>
.container {
  max-width: 55rem;
  margin: 40px auto;
  padding: 40px;
  @apply border text-left;
  @apply bg-cool-gray-700 border-gray-400 rounded-sm;
}

.container:first-child {
  margin-bottom: 70px;
}

.container h1, .container p, .container div {
  margin-bottom: 10px;
}
</style>