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
          <Inputfield placeholder="Example Input" />
          <Selectfield :options="['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5']"/>
          <Messagefield placeholder="Example Textarea"/>
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
import Inputfield from '@/components/inputfield.vue'
import Selectfield from '@/components/selectfield.vue'
import Messagefield from '@/components/messagefield.vue'

export default defineComponent({
  name: 'ServerTemplate',
  components: {
    Steps,
    Button,
    Inputfield,
    Selectfield,
    Messagefield
  },

  setup(){
    const route = useRoute()

    return{
      route
    }
  }

})
</script>