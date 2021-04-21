<template>
  <div class="nav-container">
    <ul>
      <li><router-link v-if="route.path !== '/'" to="/">
        <BIconHouseFill class="nav-icon" />
      </router-link></li>
      <!-- Login Icon -->
      <li><router-link to="/auth">
        <BIconPersonSquare class="nav-icon" />
      </router-link></li>
    </ul>
    <p class="nav-text" v-if="route.path === '/'">Homepage</p>
    <p class="nav-text">{{route.params.serverName}}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import { BIconHouseFill, BIconPersonSquare } from 'bootstrap-icons-vue'

export default defineComponent({
  name: "Navbar",
  components: {
    BIconHouseFill,
    BIconPersonSquare
  },
  setup() {
    const route = useRoute()

    return{
      route
    }
  }
})
</script>

<style scoped lang="postcss">
.nav-container{
  @apply flex items-center justify-between sticky top-0 w-full px-10 pt-2 pb-2 z-10;
  @apply bg-teal-400;
}

.nav-icon{
  @apply text-2xl align-middle mr-5;
  @apply cursor-pointer bg-teal-400 text-gray-700;
  @apply sm: text-2xl md: text-4xl lg:5xl;
}

.nav-text{
  @apply text-md text-gray-700 bg-teal-400 leading-3;
  @apply sm: text-2xl md: text-3xl lg:5xl;
}

</style>