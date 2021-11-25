<template>
  <div class="app-wrapper">
    <header @click="toHome">SHELTER ZONE - QuestionGenerator</header>
    <router-view />
    <footer>Presented by SHELTER-ZONE</footer>
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  name: 'Layout',
  setup(){
    const router = useRouter()
    
    const toHome = () => {
      router.push('/')
    }

    return {
      toHome,
    }
  }
})
</script>

<style lang="postcss" scoped>
.app-wrapper {
  @apply max-w-240 w-full h-full overflow-auto;
  @apply p-5 m-auto;
}

header {
  @apply text-3xl text-center cursor-pointer p-10;
}

footer {
  @apply mt-10 text-center text-sm text-gray-500;
}
</style>