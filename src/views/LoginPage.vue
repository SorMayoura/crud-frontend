<script setup>

import {ref} from "vue";
import axios from "axios";
import router from "@/router/index.js";

// list all the state variable
const email = ref('');
const password = ref('');
const error = ref('');

const login = async () => {
  error.value = '';

  if (!email.value.trim() || !password.value.trim()) {
    error.value = 'Email and password are required.';
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value)) {
    error.value = 'Invalid email address';
    return;
  }

  try {
    console.log(email.value, password.value);
    const response = await axios.post('/api/auth/login', {
        email: email.value,
        password: password.value
      },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        });

    if (response.status === 200) {
      router.push('/users');
    }

  } catch (err) {
    error.value = err.message || 'An error occurred during login';
  }
};
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br">
    <div class="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
      <h2 class="text-3xl font-bold text-center text-blue-600 pb-6">Login</h2>
      <form @submit.prevent="login" class="space-y-6">
        <div>
          <input
          v-model="email"
          type="email"
          placeholder="Email"
          required
          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
        <input
            v-model="password"
            type="password"
            placeholder="Password"
            required
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        </div>

        <div>
        <button
            type="submit"
            class="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
        >
          Login
        </button>
        </div>
      </form>
      <p v-if="error" class="mt-4 text-center text-red-500 font-medium">{{ error }}</p>
    </div>
  </div>
</template>

<style scoped>

</style>