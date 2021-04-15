<template>
  <div class="server-create">
    <div>
      <h1 class="primary-title">Server Create</h1>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import Button from '@/components/button.vue'
import Field from '@/components/field.vue'

export default defineComponent({
  name: 'ServerTemplate',
  components: {
    Button,
    Field
  },

  setup() {
    const route = useRoute()

    return{
      route
    }
  }

})
</script>