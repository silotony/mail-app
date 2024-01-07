<script setup>
import { onMounted, ref } from 'vue';

const emails = ref([])

onMounted(() => {
    fetch('http://localhost:3000/emails')
        .then(res => res.json())
        .then(data => emails.value = data)
        .catch(err => console.log(err.message))

    fetch
})
</script>

<template>
    <div class="container">
        <div v-if="emails">
            <div class="card my-3" v-for="email in  emails" :key="email.id">
                <div class="card-body no-border shadow">
                    <h5 class="card-title">{{ email.name }}</h5>
                    <span class="badge rounded-pill mb-3" :class="{ 'text-bg-success': email.isRead }">
                        {{ email.isRead ? 'Not Read' : 'Read' }}</span>
                    <h6 class="card-subtitle mb-2 text-body-secondary">{{ email.email }}</h6>
                    <p class="card-text">{{ email.body.substring(0, 100) + ' ...' }}</p>
                    <RouterLink :to="{ name: 'readMail', params: { id: email.id } }" class="card-link">
                        Read email
                    </RouterLink>
                </div>
            </div>
        </div>
        <div v-else>
            <div class="card my-3">
                <div class="card-body no-border shadow">
                    <h5 class="card-title">No email</h5>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card-link {
    text-decoration: none;
}
</style>

