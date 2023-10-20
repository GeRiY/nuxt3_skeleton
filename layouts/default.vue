<script lang="ts">
import {defineComponent} from 'vue'
import { initAxios } from "~/api/apiHelper";

export default defineComponent({
  name: "default",
  beforeMount() {
    initAxios(this.$config.public)
  },
})
</script>

<template>
  <div class="p-2">
    Default layout
    <slot />
  </div>
</template>

<style scoped>

</style>