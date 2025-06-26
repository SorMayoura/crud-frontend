<!-- src/views/MainPage.vue -->
<template>
  <main class="min-h-screen bg-gray-50 text-gray-800">
    <section class="py-20 px-4 max-w-7xl mx-auto text-center">
      <h1 class="text-5xl font-bold mb-4">Welcome to User Management App</h1>
      <p class="text-lg text-gray-600 mb-14">A modern, secure CRUD application built with Vue 3 and Spring Boot</p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card
            title="Manage Users"
            description="Add, update, delete and view user records in a clean interface."
            icon="user"
            to="/users"
        />

        <Card
            title="Login"
            description="Secure authentication with JWT and protected routes."
            icon="log-in"
            to="/login"
        />

        <Card
            title="Register"
            description="Allow new users to sign up and get started."
            icon="user-plus"
            to="/register"
        />
      </div>
    </section>
  </main>
</template>

<script setup>
import Card from '@/components/Card.vue'
</script>

<style scoped>
</style>
