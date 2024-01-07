<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import { ref } from 'vue';

const appName = ref('MailApp')
</script>

<template>
  <Header>

    <template #navbar>
      <RouterLink class="navbar-brand" :to="{ name: 'home' }">MailApp</RouterLink>
    </template>

    <template #links>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <RouterLink :to="{ name: 'mail' }" class="nav-link" aria-current="page">Mails</RouterLink>
        </li>
      </ul>
    </template>

  </Header>

  <RouterView />

  <Footer :appName="appName">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item">
        <RouterLink :to="{ name: 'home' }" class="nav-link px-2 text-body-secondary">Home</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink :to="{ name: 'mail' }" class="nav-link px-2 text-body-secondary">Mails</RouterLink>
      </li>
    </ul>
  </Footer>
</template>
