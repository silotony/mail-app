<script setup>
const props = defineProps(['appName'])
</script>

<template>
    <div class="container">
        <div class="bg-body-tertiary p-5 rounded shadow-lg mt-3">

            <h1>{{ appName }}</h1>

            <slot name="msg"></slot>

            <slot name="button"></slot>
        </div>
    </div>
</template>