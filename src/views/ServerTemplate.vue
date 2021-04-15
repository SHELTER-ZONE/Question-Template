<template>
  <div class="server-template">
    <div>
      <h1 class="primary-title">{{route.params.category}}</h1>

      <div>
        <Steps :steps="['步驟 1', '步驟 2', '步驟 3', '步驟 4', '步驟 5']" />

        <div class="container">
          <h1>步驟 1</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Field type="input" placeholder="Example Input" />
          <Field type="select" 
            :options="['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5']"
          />
          <Field type="textarea" placeholder="Example Textarea"/>
        </div>

        <div class="actionbar">
          <Button text="RESET" />
          <Button text="CONTINUE" />
        </div>
        
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'

import Steps from '@/components/steps.vue'
import Button from '@/components/button.vue'
import Field from '@/components/field.vue'

export default defineComponent({
  name: 'ServerTemplate',
  components: {
    Steps,
    Button,
    Field
  },

  setup(){
    const route = useRoute()

    return{
      route
    }
  }

})
</script>