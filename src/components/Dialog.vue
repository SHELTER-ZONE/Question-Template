<template>
  <div class="dialog-wrapper" @click="test">
    <div class="dialog">
      <section>
        <p class="title">期望達到的情況 / 行為 / 目的</p>
        <div class="block">{{data.step1}}</div>
      </section>
      
      <section>
        <p class="title">實際執行時的情況 / 行為</p>
        <div class="block">{{data.step2}}</div>
      </section>
      
      <section>
        <p class="title">重現步驟 / 過程</p>
        <div class="block">{{data.step3}}</div>
      </section>

      <section>
        <p class="title">附件</p>
        <div class="block">{{data.step4}}</div>
      </section>

      <button class="primary-btn" @click="generate">複製到剪貼簿</button>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue"
import copy from 'clipboard-copy'

export default defineComponent({
  name: "Dialog",
  props: ['data', 'titles'],
  setup(props,{emit}){
    const toggle = ref(true)
    const test = (e)=>{
      if(e.target.classList[0] !== 'dialog-wrapper') return
      emit('close')
    }

    const generate = () => {
      const titles = props.titles
      let msg = ''
      titles.forEach((item, index) => {
        const title = item.title
        const content = props.data[`step${index + 1}`]
        msg += title + '\n```\n' + content + '\n```\n'
      })

      console.log(msg)
      copy(msg)
    }
    
    return {
      test,
      toggle,
      generate,
    }
  }

})
</script>

<style lang="postcss" scoped>
.dialog-wrapper {
  @apply fixed top-0 left-0 right-0 bottom-0 flex;
  @apply bg-gray-800 bg-opacity-90 items-center justify-center;
}

.dialog {
  max-width: 500px;
  @apply bg-gray-700 p-5 rounded-md w-3/4 h-4/5;
}

section {
  @apply mb-10;
}

.block {
  @apply bg-gray-800 p-2 rounded-sm my-2;
}
</style>
