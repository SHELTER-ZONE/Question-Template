<template>
  <div class="app-wrapper">
    <header>SHELTER ZONE - QuestionGenerator</header>
    <router-view />
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Layout'
})
</script>

<style lang="postcss" scoped>
.app-wrapper {
  @apply max-w-200 w-full h-full overflow-auto;
  @apply p-5 m-auto;
}

header {
  @apply text-4xl text-center;
}
</style>