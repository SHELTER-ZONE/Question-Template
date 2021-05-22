<template>
    <section>
        <p class="title">{{title}}</p>
        <div class="text-block">
            <slot></slot>
        </div>
    </section>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'TextBlock',
  props: ['title'],
 
})
</script>

<style lang="postcss" scoped>
.text-block {
    background: rgba(0, 0, 0, 0.2);
    @apply p-5 rounded-md border text-justify;
    @apply border-gray-400;
}

.title {
    @apply text-xl mb-3 ml-1;
}

section {
    @apply my-5;
}
</style>