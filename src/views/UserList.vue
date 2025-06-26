<template>
  <div class="max-w-5xl mx-auto p-8">
    <div class="flex items-center justify-between mb-8">
      <h2 class="text-3xl font-bold text-gray-800 flex items-center gap-2">
        <svg class="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6 5.87v-2a4 4 0 00-3-3.87m6 5.87v-2a4 4 0 013-3.87M12 12a4 4 0 100-8 4 4 0 000 8z"/>
        </svg>
        사용자 목록
      </h2>
      <button
          @click="() => fetchUsers()"
          class="px-5 py-2 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition"
          :disabled="loading"
      >
        새로고침
      </button>
    </div>

    <div v-if="loading" class="flex justify-center items-center h-40">
      <svg class="animate-spin h-8 w-8 text-blue-600" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"/>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
      </svg>
      <span class="ml-3 text-blue-600 font-medium">불러오는 중...</span>
    </div>

    <div v-else-if="error" class="bg-red-50 text-red-700 px-4 py-3 rounded mb-6">
      {{ error }}
    </div>

        <div v-else>
          <div v-if="users.length" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

            <div
                v-for="user in users"
                :key="user.id"
                class="bg-white rounded-xl shadow p-6 flex flex-col items-center hover:shadow-lg transition"
            >
              <!-- ...유저 카드 내용 동일... --><div class="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <svg class="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A9 9 0 1112 21a9 9 0 01-6.879-3.196z"/>
              </svg>
            </div>
              <div class="text-lg font-semibold text-gray-800 mb-1">{{ user.name }}</div>
              <div class="text-gray-500 text-sm mb-2">{{ user.email }}</div>
              <div class="text-xs text-gray-400">ID: {{ user.id }}</div>
            </div>
          </div>
          <div v-else class="text-gray-500 text-center py-12">
            사용자가 없습니다.
          </div>
          <!-- 페이지네이션 컨트롤 -->
          <div class="flex justify-center mt-8 gap-2" v-if="totalPages > 1">
            <button
                class="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium"
                :disabled="page === 0"
                @click="() => changePage(page - 1)"
            >
              이전
            </button>
            <button
                v-for="p in totalPages"
                :key="p"
                class="px-3 py-1 rounded"
                :class="p - 1 === page ? 'bg-blue-600 text-white font-bold' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"
                @click="() => changePage(p - 1)"
            >
              {{ p }}
            </button>
            <button
                class="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium"
                :disabled="page === totalPages - 1"
                @click="() => changePage(page + 1)"
            >
              다음
            </button>
          </div>
        </div>
      </div>
    </template>

<script>
import axios from "axios";
export default {
  name: "UserList",
  data() {
    return {
      users: [],
      loading: false,
      error: null,
      page: 0,
      size: 9,
      totalPages: 1,
    };
  },
  methods: {
    async fetchUsers(page = this.page) {
      this.loading = true;
      this.error = null;
      try {
        const response = await axios.get(`/api/users`, {
          params: { page, size: this.size }
        });
        this.users = response.data.content || [];
        this.totalPages = response.data.totalPages || 1;
        this.page = response.data.number || 0;
        this.size = response.data.size || this.size;
      } catch (e) {
        this.error = "사용자 정보를 불러오지 못했습니다.";
      } finally {
        this.loading = false;
      }
    },
    changePage(newPage) {
      if (newPage >= 0 && newPage < this.totalPages) {
        this.fetchUsers(newPage);
      }
    },
  },
  mounted() {
    this.fetchUsers();
  },
};
</script>