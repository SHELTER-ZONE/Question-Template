<template>
    <div class="mt-10">
        <section class="title-container">
            <div>
                <p class="title"><strong>STEP {{step}}. {{title}}</strong></p>
                <p class="sub"><strong>{{sub}}</strong></p>
            </div>
            <button class="hint-btn">看範例</button>
        </section>
        <section>
            <textarea v-model="syncForm[`step${step}`]" placeholder="請輸入文字..." cols="20" rows="10"></textarea>
        </section>
    </div>
</template>

<script>
import { defineComponent, ref, computed } from 'vue'

export default defineComponent({
  name: 'InputBlock',
  props: ['step', 'title', 'sub', 'formData'],
  setup(props, {emit}){
    const syncForm = computed({
        get: () => props.formData,
        set: (val) => emit('update:templateData', val)
    })
    return {
        syncForm
    }
  }
})
</script>

<style lang="postcss" scoped>
.title-container {
    @apply flex justify-between mb-3 flex-wrap items-start;
}

.title {
    @apply text-teal-400 text-2xl;
}

.sub {
    @apply text-gray-400 text-lg;
}
</style>