<template>
  <Navbar v-if="hasLoaded" />
  <Preloader v-if="!hasLoaded" />
  <router-view v-if="hasLoaded" class="router-view-area"></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Navbar from '@/components/navbar.vue'
import Preloader from '@/components/preloader.vue'

import 'virtual:windi.css'

export default defineComponent({
  name: 'App',
  components: {
    Navbar,
    Preloader
  },
  data: () => {
    return {
      hasLoaded: false
    }
  },
  mounted() {
    document.onreadystatechange = () => {
      if (document.readyState == "complete") {
        this.hasLoaded = true;
      }
    }
  }
})
</script>

<style lang="postcss">
@font-face {
  font-family: DisposableDroidBB;
  src: url("@/assets/disposabledroid-bb.regular.ttf");
}

html, body, #app{
  /* @apply max-w-xs m-auto overflow-x-hidden md:max-w-lg lg:max-w-full; */
  @apply bg-cool-gray-800;
  @apply mb-10;
}

#app {
  font-family: DisposableDroidBB;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @apply text-left;
}

.router-view-area{
  @apply w-full h-full px-5;
  @apply md: px-40 lg: px-60;
}

.primary-title{
  @apply text-center text-3xl mt-10;
  @apply text-gray-400;
  margin: 4rem auto;
  max-width: 55rem;
  padding-bottom: 3rem;
  border-bottom: 3px solid #2DD4BF;
}

.actionbar {
  text-align: center;
  margin: 60px auto;
  max-width: 55rem;
  @apply block mt-20;
}

.grid {
  @apply bg-cool-gray-700 mt-10 grid-cols-2 md:grid-cols-6 gap-x-16 gap-y-5;
}

h1, h2 {
  @apply text-gray-400 text-3xl;
}

p {
  @apply bg-cool-gray-700 text-gray-500 text-xl;
}

textarea, input, select, button {
  @apply text-gray-400 text-2xl bg-cool-gray-800;
}

ul li {
  @apply float-left;
}
</style>