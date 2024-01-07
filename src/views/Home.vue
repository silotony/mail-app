<script setup>
import Hero from "../components/Hero.vue"
import About from "../components/About.vue"
import { ref } from "vue";

const isBorder = ref(false)
const appName = ref("MailApp")
</script>

<template>
  <Hero :appName="appName" />

  <About :appName="`About ${appName}`" :class="{ 'border-bottom': isBorder }">

    <template #msg>
      <p class=" lead">
        MailApp is a vueJS powered app for reading and sending emails to your family and friends
      </p>
    </template>

    <template #button>
      <RouterLink class="btn btn-outline-primary" :to="{ name: 'mail' }">View mails
      </RouterLink>
    </template>

  </About>
</template>
