<script setup>
const props = defineProps(['appName'])
</script>

<template>
    <div class="container">
        <footer class="py-3 my-4">
            <slot></slot>
            <p class="text-center text-body-secondary">&copy; 2024 {{ appName }}, Inc</p>
        </footer>
    </div>
</template>