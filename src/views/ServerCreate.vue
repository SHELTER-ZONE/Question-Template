<template>
  <div class="server-create">
    <div>
      <h1 class="primary-title">Server Create</h1>

      <div class="container">
        <h1>何務器模板創建</h1>
        <Field type="input" placeholder="Server Name" />
        <Field type="image" />
      </div>

      <div class="actionbar">
        <Button text="CONFIRM" />
      </div>

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