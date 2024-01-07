<script setup>
import { onMounted, ref } from 'vue';
const props = defineProps(['id'])

const email = ref(null)

onMounted(() => {
    fetch(`http://localhost:3000/emails/${props.id}`)
        .then(res => res.json())
        .then(data => email.value = data)
        .catch(err => console.log(err.message))
})
</script>

<template>
    <div class="container">
        <h3 class="h4 pt-4">My Email</h3>
        <div class="card my-3">
            <div class="card-body">
                <div v-if="email">
                    <h5 class="card-title">{{ email.name }}</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">{{ email.email }}</h6>
                    <p class="card-text">{{ email.body }}</p>
                </div>
                <div v-else>
                    <p class="card-text">No email</p>
                </div>
            </div>
        </div>
    </div>
</template>