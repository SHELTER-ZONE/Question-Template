<template>
  <div class="server-template">
    <div>
      <h1 class="primary-title">{{route.params.category}}</h1>

      <div>
        <Container>
          <h1>注意</h1>
          <p>
            {{json.notice}}
          </p>
        </Container>

        <Container v-for="area in json.areas" v-bind:key="area.title">
          <h1>{{area.title}}</h1>
          <p v-if="area.description !== null">{{area.description}}</p>
          <Field v-if="area.lang === true" type="select" :options=lang />
          <Field v-if="area.type === 'input'" type="input" :placeholder="area.placeholder" />
          <Field v-if="area.type === 'select'" type="input" />
          <Field v-if="area.type === 'textarea'" type="textarea" :placeholder="area.placeholder" />
          <p v-if="area.image === true">上載圖片: (可選)</p>
          <input @change="onImageChange" id="imageUpload" v-if="area.image === true" type="file" accept="image/*" />
          <div v-if="area.image === true">
            <img v-if="url" :src="url" />
          </div>
        </Container>

        <div class="actionbar">
          <Button text="GENERATE" @click="generate()" />
        </div>
        
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'

import Container from '@/components/Container.vue'
import Button from '@/components/button.vue'
import Field from '@/components/field.vue'

import json from '../../template/SHELTER_ZONE/template.json'

export default defineComponent({
  name: 'ServerTemplate',
  components: {
    Container,
    Button,
    Field
  },
  data() {
    return {
      url: ''
    }
  },
  methods: {
    onImageChange(e: { target: { files: any[] } }) {
      const file = e.target.files[0];
      this.url = URL.createObjectURL(file);
    },
    generate() {
      const fields = [];

      for (let i = 0; i < document.getElementsByTagName('input').length; i++) {
        fields.push(document.getElementsByTagName('input')[i]);
      }

      for (let i = 0; i < document.getElementsByTagName('textarea').length; i++) {
        fields.push(document.getElementsByTagName('textarea')[i]);
      }
      
      for (let i = 0; i < fields.length; i++) {
        if (fields[i].value === "") {
          // @ts-ignore
          this.$swal({
            icon: 'error',
            title: '請輸入所有資料.',
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 2600,
            timerProgressBar: true,
            padding: '20px'
          });
        } else {
          const msg = `${fields[0].value}`;

          navigator.clipboard.writeText(msg);

          // @ts-ignore
          this.$swal({
            icon: 'success',
            title: '已複製到剪貼板.',
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 2600,
            timerProgressBar: true,
            padding: '20px'
          });
        }
      }
    }
  },

  setup() {
    const route = useRoute()

    const lang = [
      'JS/TS',
      'Python',
      'C#',
      'C++',
      'C',
      'Kotlin',
      'Java',
      'HTML/CSS',
      'Go'
    ]

    return{
      route,
      json,
      lang
    }
  }
})
</script>

<style scoped lang="postcss">
input {
  outline: none;
  margin-top: 20px;
  padding: 15px 25px;
  width: 100%;
  box-shadow: 0px 1px #2DD4BF;
}

input[type=file] {
  margin-top: 0px;
  cursor: pointer;
}
</style>