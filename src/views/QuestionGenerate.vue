<template>
  <div class="question-generate">
    <InputBlock
      v-for="(title, index) in stepTitle"
      :key="title.title"
      :class="{ hide: step !== index + 1 }"
      :step="step"
      :formData="templateData"
      :title="title.title"
      :sub="title.sub"
      @openExample="openExample=true"
    />

    <TextBlock v-if="step === 4" >
      <div class="inner-title flex mb-5">
        <img src="../assets/icon/alert-circle.svg" alt="alert-icon" />
        <p class="ml-3"><strong >圖片與截圖注意事項:</strong></p>
      </div>
      <ul>
        <li>程式碼截圖請包含行數</li>
        <li>請截取程式碼完整 "區塊"，而不是單獨某幾行</li>
      </ul>
    </TextBlock>

    <button v-if="step > 1" class="primary-btn w-full mt-3" @click="prePage">
      上一步
    </button>
    <button v-if="step < 4" class="primary-btn w-full mt-3" @click="nextPage">
      下一步
    </button>
    <button v-if="step === 4" class="primary-btn w-full mt-3" @click="preview">
      預覽
    </button>

    <ExampleDialog 
      v-if="openExample"
      @close="openExample = false"
      :titles="stepTitle"
      :step="step"
    />

    <PreviewDialog
      v-if="openPreview"
      @close="openPreview = false"
      :data="templateData"
      :titles="stepTitle"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue"
import InputBlock from "../components/InputBlock.vue"
import TextBlock from "../components/TextBlock.vue"
import ExampleDialog from "../components/ExampleDialog.vue"
import PreviewDialog from "../components/PreviewDialog.vue"

export default defineComponent({
  name: "QuestionGenerate",
  components: { InputBlock, TextBlock, ExampleDialog, PreviewDialog },
  setup() {
    const openPreview = ref(false)
    const openExample = ref(false)
    const step = ref(1)
    const templateData = reactive({
      step1: "",
      step2: "",
      step3: "",
      step4: "",
    })

    const stepTitle = [
      {
        title: "期望達到的情況 / 行為 / 目的",
        sub: "你最終想實現甚麼樣的功能, 請詳述",
      },
      {
        title: "實際執行時的情況 / 行為",
        sub: "你最終想實現甚麼樣的功能, 請詳述",
      },
      {
        title: "重現步驟 / 過程",
        sub: "你實際的操作步驟 / 過程為何",
      }
    ]

    const prePage = () => {
      if (step.value === 1) return
      step.value -= 1
    }

    const nextPage = () => {
      if (step.value === 4) return
      step.value += 1
    }

    const preview = () => {
      openPreview.value = true
    }
    return {
      openExample,
      openPreview,
      step,
      prePage,
      nextPage,
      preview,
      templateData,
      stepTitle,
    }
  },
})
</script>

<style lang="postcss" scoped>
.hide {
  display: none;
}
</style>
