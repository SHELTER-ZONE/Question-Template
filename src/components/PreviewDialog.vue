<template>
  <div class="dialog-wrapper" @click="closeDialog">
    <div class="dialog">
      <TextBlock>
        複製後直接至 Discord 貼上即可，截圖請後續自行附上
      </TextBlock>

      <section>
        <p class="title">期望達到的情況 / 行為 / 目的</p>
        <textarea class="block" disabled >{{data.step1}}</textarea>
      </section>
      
      <section>
        <p class="title">實際執行時的情況 / 行為</p>
        <textarea class="block" disabled>{{data.step2}}</textarea>
      </section>
      
      <section>
        <p class="title">重現步驟 / 過程</p>
        <textarea class="block" disabled>{{data.step3}}</textarea>
      </section>

      <button class="primary-btn" @click="generate">
        複製到剪貼簿
      </button>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue"
import TextBlock from "./TextBlock.vue"
import copy from 'clipboard-copy'

export default defineComponent({
  name: "PreviewDialog",
  props: ['data', 'titles'],
  components: {TextBlock},
  setup(props,{emit}){
    const toggle = ref(true)
    onMounted(()=>{
      const targets = Array.from(document.getElementsByClassName('block'))
      targets.forEach(item => {
        const h = item.scrollHeight
        item.style.height = h + 'px'
      })
    })

    const closeDialog = (e)=>{
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

      copy(msg)
      alert('已複製到剪貼簿')
    }
    
    return {
      closeDialog,
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
  @apply bg-gray-700 p-5 rounded-md w-3/4 h-4/5 overflow-auto;
}

section {
  @apply mb-5;
}

.block {
  @apply bg-gray-800 p-2 rounded-sm my-2 break-words resize-none text-gray-400;
}
</style>
