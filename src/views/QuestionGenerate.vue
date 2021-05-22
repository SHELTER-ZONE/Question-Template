<template>
  <div class="question-generate">
      <InputBlock v-if="step === 1" :step="step" :formData="templateData" title="期望達到的情況 / 行為 / 目的" sub="你最終想實現甚麼樣的功能, 請詳述" />
      <InputBlock v-if="step === 2" :step="step" :formData="templateData" title="實際執行時的情況 / 行為" sub="" />
      <InputBlock v-if="step === 3" :step="step" :formData="templateData" title="重現步驟 / 過程" sub="你實際的操作步驟 / 過程為何" />
      <InputBlock v-if="step === 4" :step="step" :formData="templateData" title="附件" sub="" />
      <button class="primary-btn w-full mt-3" @click="prePage">上一步</button>
      <button v-if="step < 4" class="primary-btn w-full mt-3" @click="nextPage">下一步</button>
      
      <div class="btn-container" v-if="step===4">
        <button class="primary-btn w-full mt-3">預覽</button>
        <button class="primary-btn w-full mt-3">生成</button>
      </div>
  </div>

</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import InputBlock from '../components/InputBlock.vue'

export default defineComponent({
  name: 'QuestionGenerate',
  components: {InputBlock},
  setup() {
      const test = ref('')
      const step = ref(1)
      const templateData = reactive({
          step1: '',
          step2: '',
          step3: '',
          step4: '',
      })

      const prePage =() => {
          if(step.value === 1) return
          step.value -= 1
      }
      
      const nextPage =() => {
          if(step.value === 4) return
          step.value += 1
      }
      return {
          test,
          step,
          prePage,
          nextPage,
          templateData,
      }
  }
})
</script>

<style lang="postcss" scoped>
</style>