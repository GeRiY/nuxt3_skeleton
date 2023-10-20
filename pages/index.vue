<script lang="ts">
import {defineComponent} from 'vue'

definePageMeta({
  layout: 'default'
})
export default defineComponent({
  name: "index",
  async beforeMount() {
    this.title = "Hello world here!"
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, 2000)
    })
    this.$store.commit('appStore/changeIsLoading', false)
  },
  data() {
    return {
      title: "Hello world!"
    }
  },
  methods: {
    changeTitle() {
      this.title = "Hello world here!"+Math.random()*100;
    }
  },
  watch: {
    title() {
      console.log('title changed')
    }
  },
})
</script>

<template>
  <div class="p-2">
    <UiButton @click="changeTitle">{{ title }} {{ $t('language') }}</UiButton>
    {{ $store.state.appStore.isLoading ? 'Töltődünk vazzee' : '' }}
  </div>
</template>

<style scoped>

</style>