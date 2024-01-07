<script setup>
import { ref } from "vue";
import About from "../../components/About.vue"
import MailList from "../../components/MailList.vue"

const isBorder = ref(false)
const appName = ref("MailApp")
</script>

<template>
  <About :appName="`Read Your ${appName}`" :class="{ 'border-bottom': isBorder }">
    <template #msg>
      <p class="lead">
        Your email will appear here
      </p>
    </template>
  </About>

  <MailList />
</template>

<style scoped></style>
