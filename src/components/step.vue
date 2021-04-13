<template>
  <div class="step">
    <p class="bg-cool-gray-700 text-cool-gray-400 text-xl">{{text}}</p>
  </div>
</template>

<script>
export default {
  name: 'Step',
  props: {
    text: String
  }
}
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