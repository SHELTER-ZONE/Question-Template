<template>
  <Layout class="layout" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'virtual:windi.css'
import './styles/index.css'
import Layout from '/src/layout/index.vue'

export default defineComponent({
  name: 'App',
  components: {Layout}
})
</script>