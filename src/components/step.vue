<template>
  <div class="step">
    <p>{{text}}</p>
  </div>
</template>

<script lanf="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Step',
  props: {
    text: String
  }
})
</script>

<style scoped>
.step {
  position: relative;
  display: inline-block;
  text-align: center;
  width: 16.666rem;
  border-right: 1px solid #A1A1AA;
}

.step:last-child {
  border-right: none;
}
</style>