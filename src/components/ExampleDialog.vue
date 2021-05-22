<template>
  <div class="dialog-wrapper" @click="closeDialog">
    
    <div class="dialog">
      
      <p class="text-xl mb-3 text-teal-400">Example 範例</p>
      <section v-if="step === 1">
        <p class="title">期望達到的情況 / 行為 / 目的</p>
        <div class="block">
          我想要讓 Discord Bot 可以正常啟動運行
        </div>
      </section>

      <section v-if="step === 2">
        <p class="title">實際執行時的情況 / 行為</p>
        <div class="block">在此資料夾位置打開終端機，並輸入 python bot.py 運行檔案後終端機會報錯: Error [TOKEN_INVALID]: An invalid token was provided.</div>
      </section>

      <section v-if="step === 3">
        <p class="title">重現步驟 / 過程</p>
        <div class="block">
          <ul>
            <li>在桌面建立一個新的資料夾在資料夾裡建立 bot.py 檔</li>
            <li>打上基本的程式碼 (附上截圖 完整的程式碼)</li>
            <li>到 Discord Developer 網站登入後，New Application > Create Application</li>
            <li>選擇剛剛建立的 Application > OAuth2 > CLIENT SECRET > Copy</li>
            <li>在 bot.py 的 bot.run() 貼上剛剛複製的 TOKEN</li>
            <li>在此資料夾位置打開終端機，並輸入 python bot.py 運行檔案</li>
            <li>終端機報錯: : Error [TOKEN_INVALID]: An invalid token was provided. (附上截圖 完整的終端機報錯)</li>
          </ul>
        </div>
      </section>

    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue"

export default defineComponent({
  name: "ExampleDialog",
  props: ['step', 'titles'],

  setup(props,{emit}){
    
    const closeDialog = (e)=>{
      if(e.target.classList[0] !== 'dialog-wrapper') return
      emit('close')
    }

    return {
      closeDialog,
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
  @apply bg-gray-700 p-5 rounded-md overflow-auto;
}

section {
  @apply mb-5;
}

.block {
  @apply bg-gray-800 p-2 rounded-sm my-2 break-words;
}
</style>
