<template>
  <Header title="SHELTER ZONE - 問題模板" />

  <div class="container">
    <h1>App 簡介</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </div>

  <div class="container">
    <h1>模板</h1>
		<div class="grid">
			<router-link to="/sz" class="icon sz"></router-link>
			<div class="icon"></div>
			<div class="icon"></div>
			<div class="icon"></div>
			<div class="icon"></div>
			<div class="icon"></div>
			<div class="icon"></div>
			<div class="icon"></div>
			<div class="icon"></div>
			<div class="icon"></div>
			<div class="icon"></div>
			<div class="icon"></div>
		</div>
		<div class="mt-5"></div>
		<Button text="CREATE YOUR OWN" />	
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Header from '@/components/header.vue'
import Button from '@/components/button.vue'

export default defineComponent({
  name: 'Sz',
  components: {
    Header,
    Button
  }
})
</script>

<style scoped>
.icon {
	border: 1px solid #A1A1AA;
	width: 5rem;
	height: 5rem;
	cursor: pointer;
}

.sz {
	background-image: url('@/assets/sz.png');
	background-size: contain;
}
</style>