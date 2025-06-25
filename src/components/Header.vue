<script setup lang="ts">
import { ref } from 'vue';
const open = ref(false);
</script>

<template>
  <header class="bg-white w-full rounded-lg">
    <div class="px-4 sm:px-6 lg:px-8 flex items-center h-16 w-full">
      <div class="flex items-center">
        <span class="text-2xl font-bold text-blue-600">Demo Router</span>
      </div>
      <nav class="hidden md:flex space-x-16 flex-1 justify-end">
        <router-link to="/" class="min-w-20 text-center inline-block text-gray-700 hover:text-gray-600 hover:rounded-2xl font-medium">Home</router-link>
        <router-link to="/about" class="min-w-20 text-center inline-block text-gray-700 hover:text-gray-600 hover:rounded-2xl font-medium">About</router-link>
        <router-link to="/users" class="min-w-20 text-center inline-block text-gray-700 hover:text-gray-600 hover:rounded-2xl font-medium">User List</router-link>
        <router-link to="/register" class="min-w-20 text-center inline-block text-gray-700 hover:text-gray-600 hover:rounded-2xl font-medium">Register</router-link>
        <router-link to="/login" class="min-w-20 text-center inline-block text-gray-700 hover:text-gray-600 hover:rounded-2xl font-medium">Log In</router-link>
      </nav>

      <! -- Mobile menu button -->
      <button @click="open = !open" class="flex md:hidden text-gray-700 focus:outline-none flex-1 justify-end">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path v-if="!open" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16" />
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- 모바일 메뉴 -->
    <div v-if="open" class="md:hidden px-4 pb-4">
      <router-link to="/" class="block py-2 text-gray-700 hover:text-blue-600 font-medium">Home</router-link>
      <router-link to="/about" class="block py-2 text-gray-700 hover:text-blue-600 font-medium">About</router-link>
      <router-link to="/users" class="block py-2 text-gray-700 hover:text-blue-600 font-medium">User List</router-link>
      <router-link to="/register" class="block py-2 text-gray-700 hover:text-blue-600 font-medium">Register</router-link>
      <router-link to="/login" class="block py-2 text-gray-700 hover:text-blue-600 font-medium">Log In</router-link>
    </div>
  </header>
</template>

<style scoped>

</style>