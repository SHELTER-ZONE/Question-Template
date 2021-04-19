<template>
  <div class="server-template">
    <div>
      <h1 class="primary-title">{{route.params.category}}</h1>

      <div>
        <div class="container">
          <h1>注意</h1>
          <p>
            {{json.notice}}
          </p>
        </div>

        <div class="container" v-for="area in json.areas" v-bind:key="area.title">
          <h1>{{area.title}}</h1>
          <p v-if="area.description !== null">{{area.description}}</p>
          <Field v-if="area.lang === true" type="input" placeholder="語言" />
          <Field v-if="area.type === 'input'" type="input" :placeholder="area.placeholder" />
          <Field v-if="area.type === 'select'" type="input" />
          <Field v-if="area.type === 'textarea'" type="textarea" :placeholder="area.placeholder" />
        </div>

        <div class="actionbar">
          <Button text="RESET" />
          <Button text="CONFIRM" />
        </div>
        
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'

import Button from '@/components/button.vue'
import Field from '@/components/field.vue'

import json from '../../template/SHELTER_ZONE/template.json'

export default defineComponent({
  name: 'ServerTemplate',
  components: {
    Button,
    Field
  },

  setup() {
    const route = useRoute()

    return{
      route,
      json
    }
  }

})
</script>