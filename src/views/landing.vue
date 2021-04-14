<template>
  <div class="landing">
    <h1 class="primary-title">SHELTER ZONE - 問題模板</h1>

    <div class="container">
      <h1>App 簡介</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>

    <div class="container">
      <h1>模板</h1>
      <div class="grid">

        <router-link class="icon sz" 
                          v-for="server in serverList" 
                          :key="server.name" 
                          :to="`/servers/${server.name}`">
        </router-link>

        <!-- TODO 創建Server按鈕，導向創建Server模板頁面 -->
        <div class="icon plus-server">
          <BIconPlus />
        </div>
      </div>
      <div class="mt-5"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { BIconPlus } from 'bootstrap-icons-vue'
import { servers } from '../interface'

import Button from '@/components/button.vue'

export default defineComponent({
  name: 'Sz',
  components: {
    Button,
  BIconPlus,
  },

  setup(){

  // 假資料，成品應該是從DB抓資料回來   
  const serverList: Array<servers> = [
    {
      name: 'SHELTER ZONE',
      icon: '',
    },
    {
      name: 'TEST ZONE',
      icon: '',
    },
  ]

  return{
    serverList,
  }
  }
})
</script>

<style scoped lang="postcss">


.icon {
  @apply rounded-md;
  width: 5rem;
  height: 5rem;
  cursor: pointer;
}

.plus-server{
  @apply flex justify-center items-center border;
  @apply text-4xl text-gray-500 border-dashed border-gray-500;
  @apply hover:text-teal-400 hover:border-teal-400;
}

.sz {
  background-image: url('@/assets/sz.png');
  background-size: contain;
}

</style>