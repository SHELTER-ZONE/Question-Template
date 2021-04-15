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

  setup() {
    const route = useRoute()

    return{
      route
    }
  }

})
</script>