<template>
  <button class="text-gray-400 text-2xl">{{text}}</button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: String
  }
}
</script>

<style scoped>
button {
  padding: 18px 50px;
  border: 1px solid #A1A1AA;
  outline: none;
}

button:hover {
  background: #2DD4BF url('../assets/pixel.png');
  transition-delay: 0.4s;
  background-size: 180px;
  animation: pixel 0.4s steps(8) forwards;
}

@keyframes pixel {
  0% {
    background-position-y: 0;
  }

  60% {
    color: #A1A1AA;
  }

  100% {
    background-position-y: -480px;
    color: #1F2937;
    border: 1px solid #2DD4BF;
  }
}
</style>