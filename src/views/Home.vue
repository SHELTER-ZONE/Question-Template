<template>
  <TextBlock>
    我們發現非常多人提問時，無法將自己的問題與目的描述清楚。 由此照成許多
    <span class="hightlight">通靈問題</span> 或是
    <span class="hightlight">XY問題</span
    >，這不僅會浪費雙方時間，還會讓許多開發者惱火，最後雙方都不愉快。
    <br><br>
    <p>本應用目的在於協助你更好的將問題描述清楚</p>
  </TextBlock>

  <div class="flex justify-center">
    <button class="primary-btn" @click="goGenerate">我要提問</button>
  </div>
  <div class="mt-10">
    <TextBlock>
      <div class="inner-title">
        <img src="../assets/icon/alert-circle.svg" alt="alert-icon" />
        <p class="ml-3"><strong >提問前請注意:</strong></p>
      </div>

      <ul>
        <li>請先嘗試自行 Google</li>
        <li>別一直 @ / 私訊 對方</li>
        <li>請勿使用 @everyone、@here、@role 地圖砲，永Ban</li>
        <li>無須博取別人同情 / 自我嘲諷的敘述</li>
        <li>提問到一半人就消失</li>
        <li>別再問 這樣寫對不對? ，自己試一次不就知道了</li>
      </ul>
      <p class="mt-2">詳述請見: <a :href="links.dontDo" target="_blank">提問時你不該做的事</a></p>
    </TextBlock>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue"
import { useRouter } from 'vue-router'
import TextBlock from "../components/TextBlock.vue"

export default defineComponent({
  name: "Home",
  components: { TextBlock },
  setup() {
    const links = reactive({
      dontDo:
        "https://shelter-zone.github.io/Technological-Exchange-Guide/Coding/dont_todo.html#cd-d01-博取別人同情的敘述",
    })
    const router = useRouter()
    const goGenerate = (): void => {
      router.push('/question-generate')
    }
    return {
      links,
      goGenerate,
    }
  },
})
</script>

<style lang="postcss" scoped>
.hightlight {
  @apply text-teal-400;
}

.inner-title {
  @apply flex;
  @apply text-lg mb-3;
}
</style>
