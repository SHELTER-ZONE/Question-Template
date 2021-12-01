<template>
  <TextBlock>
    我們發現非常多人提問時，無法將自己的問題與目的描述清楚。 由此照成許多
    <span class="highlight"
    data-tooltip="通靈一詞，在技術交流領域中，代表人們需通過一些神奇的方法，試圖悟出理解對方的想法
    是一種揶揄與嘲諷。">
    通靈問題</span> 或是
    <span class="highlight"
    data-tooltip="XY問題，是指你向別人詢問你嘗試的解法，而不是真正的問題。">XY問題</span
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
        <img src="../assets/icon/alert-triangle.svg" alt="alert-icon" />
        <p class="ml-3"><strong>提問前請注意:</strong></p>
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
.highlight {
  @apply text-teal-400 relative cursor-default;
}

.highlight::before,
.highlight::after {
  --scale: 0;
  --arrowSize: 10px;

  @apply absolute;
  top: -0.25rem;
  left: 50%;
  transform: translateX(-50%) translateY(var(--translateY, 0)) scale(var(--scale));
  transition: 0.2s transform ease-in-out;
  transform-origin: bottom center;
}

.highlight::before {
  --translateY: calc(-100% - var(--arrowSize));

  padding: 1rem;
  background: rgba(0, 0, 0, 0.5);
  content: attr(data-tooltip);
  width: max-content;
  max-width: 800%;
  font-size: 15px;
  border-radius: 2px;
  text-align: center;
}

.highlight:hover::before,
.highlight:hover::after {
  --scale: 1;
}

.highlight::after {
  --translateY: calc(-1 * var(--arrowSize));

  content: '';
  border: var(--arrowSize) solid transparent;
  border-top-color: rgba(0, 0, 0, 0.2);
  transform-origin: top center;
}

.inner-title {
  @apply flex;
  @apply text-lg mb-3;
}

@media only screen and (max-width: 768px) {
  .highlight::before,
  .highlight::after {
    position: fixed;
    top: 20%;
    left: 50%;
  }

  .highlight::before {
    max-width: 90%;
  }

  .highlight::after {
    border-top-color: transparent;
  }
}
</style>
