<template>
  <Sz />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'virtual:windi.css'

import Sz from '@/views/sz.vue'

export default defineComponent({
  name: 'App',
  components: {
    Sz
  }
})
</script>

<style lang="postcss">
@font-face {
  font-family: DisposableDroidBB;
  src: url("@/assets/disposabledroid-bb.regular.ttf");
}

* {
  @apply max-w-xs md:max-w-lg lg:max-w-full;
  margin: 0 auto;
  background-color: #1F2937;
  overflow-x: hidden;
}

#app {
  font-family: DisposableDroidBB;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.actionbar {
  @apply block md:flex;
  margin: 60px auto;
  max-width: 55rem;
  justify-content: space-between;
}

.container {
  @apply bg-cool-gray-700;
  margin: 60px auto;
  max-width: 55rem;
  padding: 40px;
  border: 1px solid #A1A1AA;
  text-align: left;
}

.container h1, .container p {
  margin-bottom: 10px;
}

h1 {
  @apply bg-cool-gray-700 text-gray-400 text-3xl;
}

p {
  @apply bg-cool-gray-700 text-gray-500 text-xl;
}

textarea, input, select, button {
  @apply text-gray-400 text-2xl;
}
</style>