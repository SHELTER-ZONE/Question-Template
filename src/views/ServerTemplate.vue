<template>
  <div class="server-template">
    <div>
      <h1 class="primary-title">{{ route.params.category }}</h1>

      <div>
        <Container>
          <h1>注意</h1>
          <p>
            {{ template.data.notice }}
          </p>
        </Container>

        <Container v-for="area in template.data.areas" v-bind:key="area.title">
          <h2>{{ area.title }}</h2>
          <p v-if="area.description !== null">{{ area.description }}</p>

          <!-- Field Type -->
          <Field v-if="area.lang === true" type="select" :options="lang" />

          <Field
            v-if="area.type === 'input'"
            type="input"
            :placeholder="area.placeholder"
          />

          <Field v-if="area.type === 'select'" type="input" />

          <Field
            v-if="area.type === 'textarea'"
            type="textarea"
            :placeholder="area.placeholder"
          />
          <!-- Field Type -->

          <p v-if="area.image === true">上載圖片: (可選)</p>
          <input
            @change="onImageChange"
            id="imageUpload"
            v-if="area.image === true"
            type="file"
            accept="image/*"
          />

          <div class="img-wrapper" v-if="area.image === true">
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
import { defineComponent, onBeforeMount, reactive, ref } from "vue"
import { useRoute } from "vue-router"

import Container from "@/components/Container.vue"
import Button from "@/components/button.vue"
import Field from "@/components/field.vue"

export default defineComponent({
  name: "ServerTemplate",
  components: {
    Container,
    Button,
    Field,
  },

  setup() {
    const route = useRoute()

    const lang = [
      "JavaScript",
      "TypeScript",
      "Python",
      "C#",
      "C++",
      "C",
      "Kotlin",
      "Java",
      "HTML",
      "CSS",
      "Go",
    ]

    const url = ref<string>("")
    const template = reactive({
      data: {}
    })

    const onImageChange = (e: { target: { files: any[] } }) => {
      const file = e.target.files[0]
      url.value = URL.createObjectURL(file)
    }

    onBeforeMount((): void => {
      // Dynamic load server's template json
      const serverName = (route.params.serverName as string).replace(" ", "_")
      const loadTemplate: Function = async (): Promise<any> =>
        await import(`../../template/${serverName}/template.json`)

      loadTemplate().then((data: JSON) => {
        template.data = data
      })
    })

    return {
      route,
      lang,
      url,
      template,
      onImageChange,
    }
  },
})
</script>

<style scoped lang="postcss">
input {
  outline: none;
  margin-top: 20px;
  padding: 15px 25px;
  width: 100%;
  box-shadow: 0px 1px #2dd4bf;
}

input[type="file"] {
  margin-top: 0px;
  cursor: pointer;
}

.img-wrapper{
  @apply w-1/2 m-auto mt-10;
}
</style>
