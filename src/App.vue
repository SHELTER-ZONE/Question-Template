<template>
  <Header title="SHELTER ZONE - 問題模板" />
  <Steps :steps="['步驟 1', '步驟 2', '步驟 3', '步驟 4', '步驟 5']" />
  <div class="container bg-cool-gray-700">
    <h1 class="bg-cool-gray-700 text-gray-400 text-3xl">步驟 1</h1>
    <p class="bg-cool-gray-700 text-gray-500 text-xl">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <Inputfield placeholder="Example Input" />
    <Selectfield :options="['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5']"/>
    <Messagefield placeholder="Example Textarea"/>
  </div>
  <div class="actionbar">
    <Button text="RESET" />
    <Button text="CONTINUE" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import 'virtual:windi.css'

import Header from './components/header.vue'
import Steps from './components/steps.vue'
import Button from './components/button.vue'
import Inputfield from './components/inputfield.vue'
import Selectfield from './components/selectfield.vue'
import Messagefield from './components/messagefield.vue'

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Steps,
    Button,
    Inputfield,
    Selectfield,
    Messagefield
  }
})
</script>

<style>
@font-face {
  font-family: DisposableDroidBB;
  src: url('./assets/disposabledroid-bb.regular.ttf');
}

* {
  background-color: #1F2937;
}

#app {
  font-family: DisposableDroidBB;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.actionbar {
  margin: 60px auto;
  max-width: 55rem;
  display: flex;
  justify-content: space-between;
}

.container {
  margin: 60px auto;
  max-width: 55rem;
  padding: 40px;
  border: 1px solid #A1A1AA;
  text-align: left;
}

.container h1, .container p {
  margin-bottom: 10px;
}
</style>