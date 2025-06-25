<template>
  <div class="flex flex-col min-h-screen w-full">
    <Header />
    <main class="flex-1 w-full flex items-center justify-center">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import Header from "@/components/Header.vue";
</script>