<template>
  <div class="steps">
    <Step v-for="step in steps" :key="step" :text="step" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Step from './step.vue'

export default defineComponent({
  name: 'Steps',
  components: {
    Step  
  },
  props: {
    steps: Array
  }
})
</script>

<style lang="postcss" scoped>
.steps {
  margin: 60px auto;
  max-width: 50rem;
  padding: 20px 0;
  @apply border;
  @apply bg-cool-gray-700 border-gray-400 hidden md:flex;
}
</style>