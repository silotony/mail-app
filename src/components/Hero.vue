<script setup>
import Form from './Form.vue'

const props = defineProps(['appName'])
</script>

<template>
    <div class="container col-xl-10 col-xxl-8 px-4 py-5">
        <div class="row align-items-center g-lg-5 py-5">
            <div class="col-lg-7 text-center text-lg-start">
                <h1 class="display-4 fw-bold lh-1 text-body-emphasis mb-3">Welcome to {{ appName }}</h1>
                <p class="col-lg-10 fs-4">{{ appName }} is a vueJS powered app for reading and sending emails to your family
                    and friends</p>
                <RouterLink :to="{ name: 'mail' }" class="btn btn-outline-secondary">Launch app</RouterLink>
            </div>
            <div class="col-md-10 mx-auto col-lg-5">
                <Form />
            </div>
        </div>
    </div>
</template>

<style>
.link {
    text-decoration: none;
}
</style>