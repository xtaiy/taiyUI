<template>
  <article class="markdown-body" v-html="md">
  </article>
</template>

<script lang="ts">
import md from '../markdown/get-start.md';
export default {
  setup() {
    return {
      md
    }
  }
}
</script>