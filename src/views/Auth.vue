<template>
  <div class="server-create">
    <div>
      <h1 class="primary-title">Authentication</h1>

      <div class="container">
        <h1>用戶認證</h1>
        <Field type="input" placeholder="Email" />
        <Field type="input" placeholder="Password" />
      </div>

      <div class="actionbar">
        <Button text="LOGIN" />
        <Button text="REGISTER" />
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
  name: 'Auth',
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