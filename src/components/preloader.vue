<template>
  <div class="loadingscreen">
    <div class="loading">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <h1>Loading...</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Preloader'
})
</script>

<style lang="postcss" scoped>
.loadingscreen {
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
}

.loading {
  width: 80px;
  display: flex;
  flex-wrap: wrap;
  animation: rotate 3s linear infinite;
  margin-right: 40px;
}

.loading span {
  width: 32px;
  height: 32px;
  background-color: #2DD4BF;
  margin: 4px;
  animation: scale 1.5s linear infinite;
}

.loading span:nth-child(1) {
  border-radius: 50% 50% 0 50%;
  transform-origin: bottom right;
}

.loading span:nth-child(2) {
  border-radius: 50% 50% 50% 0;
  transform-origin: bottom left;
  animation-delay: 0.5s;
}

.loading span:nth-child(3) {
  border-radius: 50% 0 50% 50%;
  transform-origin: top right;
  animation-delay: 1.5s;
}

.loading span:nth-child(4) {
  border-radius: 0 50% 50% 50%;
  transform-origin: top left;
  animation-delay: 1s;
}

@keyframes scale {
  50% {
    transform: scale(1.2);
  }
}

@keyframes rotate {
  to {
    transform: rotate(360deg);
  }
}
</style>