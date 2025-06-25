<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold mb-4">User List</h2>
    <button
        @click="fetchUsers"
        class="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
    >
      Fetch Users
    </button>

    <table
        v-if="users.length"
        class="min-w-full bg-white shadow rounded overflow-hidden"
    >
      <thead>
        <tr>
          <th class="px-6 py-3 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase">ID</th>
          <th class="px-6 py-3 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase">Name</th>
          <th class="px-6 py-3 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase">Email</th>
        </tr>
      </thead>
      <tbody>
        <tr
            v-for="user in users"
            :key="user.id"
            class="hover:bg-blue-50 transition"
        >
          <td class="px-6 py-4 border-b border-b-gray-200">{{ user.id }}</td>
          <td class="px-6 py-4 border-b border-b-gray-200">{{ user.name }}</td>
          <td class="px-6 py-4 border-b border-b-gray-200">{{ user.email }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "UserList",
  data() {
    return {
      users: [],
    };
  },
  methods: {
    async fetchUsers() {
      try {
        const url = '/api/users/all';

        const response = await axios.get(url);

        this.users = response.data;
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    },
  },
};
</script>
