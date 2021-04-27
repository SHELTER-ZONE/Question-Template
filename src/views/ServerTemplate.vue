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
          <h2>{{area.title}}</h2>
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
      const questions = [];
      const fields = [];

      for (let i = 0; i < document.getElementsByTagName('h2').length; i++) {
        questions.push(document.getElementsByTagName('h2')[i]);
      }

      for (let i = 0; i < document.getElementsByTagName('input').length; i++) {
        fields.push(document.getElementsByTagName('input')[i]);
        
        if (fields[i].type === "file") {
          fields.splice(i, 1);
        }
      }

      for (let i = 0; i < document.getElementsByTagName('textarea').length; i++) {
        fields.push(document.getElementsByTagName('textarea')[i]);
      }

      var count = 0;
      
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
          count++;
        }
      }

      if (count == fields.length) {
        var msg = "";

        var langField = document.getElementsByTagName("select");
        const option = langField[0].options[langField[0].selectedIndex].textContent;

        for (let i = 0; i < questions.length; i++) {
          if (i == 0) {
            // @ts-ignore
            msg = msg + `**語言:** _${option}_\n\n`
          }

          if (i == questions.length - 1) {
            if (this.url != "") {
              for (let j = 0; j < json.areas.length; j++) {
                if (json.areas[j].lang == true) {
                  if (i == j) {
                    msg = msg +
                      `**${questions[i].textContent}**` + "\n"
                      + "```" + `${option?.toLowerCase()}\n` + fields[i].value + "\n```" + "\n";
                  }
                }
              }
            } else {
              for (let j = 0; j < json.areas.length; j++) {
                if (json.areas[j].lang == true) {
                  if (i == j) {
                    msg = msg +
                      `**${questions[i].textContent}**` + "\n"
                      + "```" + `${option?.toLowerCase()}\n` + fields[i].value + "\n```";
                  }
                }
              }
            }
          } else {
            msg = msg + `**${questions[i].textContent}**` + "\n" + fields[i].value + "\n\n";
          }
        }

        if (this.url != "") {
          msg = msg + `${this.url}`;
        }

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
  },

  setup() {
    const route = useRoute()

    const lang = [
      'JavaScript',
      'TypeScript',
      'Python',
      'C#',
      'C++',
      'C',
      'Kotlin',
      'Java',
      'HTML',
      'CSS',
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