<script>

  import axios from "axios";
  export default {
    data() {
      return {
        name: "",
        email: "",
        password: "",
        loading: false,
        error: "",
        success: ""
      };
    },
    methods: {
      async registerUser() {

          this.error = "";
          this.success = "";

          if (!this.name.trim() || !this.email.trim() || !this.password.trim()) {
            this.error = "All fields are required.";
            return;
          }

          const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailPattern.test(this.email)) {
            this.error = "Invalid email address";
            return
          }

          if (this.password.length < 5) {
            this.error = "Password must be at least 5 characters long.";
            return;
          }

          this.loading = true;
        try {
          await axios.post('/api/auth/register', {
            name: this.name,
            email: this.email,
            password: this.password
          }, {
            headers: {
              'Content-Type': 'application/json'
            }
          });

          this.success = "User registered successfully!";
          this.name = "";
          this.email = "";
          this.password = "";

          console.log(this.success)
        } catch (error) {
          this.error = error.response.data.error;
        } finally {
          this.loading = false;
        }
      }
    }
  }
</script>

<template>
<div class="max-w-md mx-auto mt-10 bg-white p-8 rounded-lg shadow-lg">
  <h2 class="text-2xl font-bold mb-6 text-center">Register New User</h2>
  <form @submit.prevent="registerUser">
    <div class="flex items-center gap-2 mb-1 font-medium text-gray-700 mt-12">
      <label class="min-w-24">Name</label>
      <input
          v-model="name"
          type="text"
          required
          class="w-full px-4 hover:bg-amber-50 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your name"
      />
    </div>
    <div class="flex items-center gap-2 mb-1 pt-2 font-medium text-gray-700 mt-3">
      <label class="min-w-24">Email</label>
      <input
          v-model="email"
          type="email"
          required
          class="w-full px-4 py-2 hover:bg-amber-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter email"
      />
    </div>
    <div class="flex items-center gap-2 mb-1 pt-2 font-medium text-gray-700 mt-3">
      <label class="min-w-24">Password</label>
      <input
          v-model="password"
          type="password"
          required
          class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter password"
      />
    </div>

    <!-- Error and Success Messages -->
    <div v-if="error" class="text-red-500 text-sm mt-2">
      {{ error }}
    </div>
    <div v-if="success" class="text-green-500 text-sm mt-2">
      {{ success }}
    </div>

    <div class="pt-5">
      <button
          type="submit"
          class="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition"
      >
        Register User
      </button>
    </div>

  </form>

</div>
</template>
