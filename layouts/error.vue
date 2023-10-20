<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "error"
})
</script>

<template>
  <div class="p-2">
    error layout
    <slot />
  </div>
</template>

<style scoped>

</style>