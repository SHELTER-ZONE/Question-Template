<template>
  <div class="category-select">
    <h1 class="primary-title">選擇類別模板</h1>
    <div class="category-container"
           v-for="cate in categorys" 
           :key="cate"
           @click="selectCategory(cate)">
           <BIconBookmarkFill class="text-teal-400 mr-5"/><span>{{cate}}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { BIconBookmarkFill } from 'bootstrap-icons-vue'

export default defineComponent({
  name: "CategorySelect",
  
  components: {
    BIconBookmarkFill
  },
  
  setup() {
    const router = useRouter()
    const route = useRoute()

    // 假資料，成品應該是從DB抓資料回來   
    const categorys: Array<string> = [
      'Discord Bot',
      '終端機報錯',
      'Blender',
    ]

    const selectCategory = (cate: string): void => {
      router.push(route.params.serverName + '/' + cate)
    }
    
    return{
      router,
      route,
      categorys,
      selectCategory
    }
  },
})
</script>

<style scoped lang="postcss">
.category-container {
  @apply border flex items-center align-middle mt-5 mb-5 p-5;
  @apply cursor-pointer border-gray-400 bg-gray-700 text-gray-400 rounded-sm;
  @apply hover: text-teal-400;
  transition: color 0.2s ease-in-out;
}
</style>