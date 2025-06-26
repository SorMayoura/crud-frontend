<!-- src/components/Card.vue -->
<template>
  <router-link :to="to" class="group block p-6 rounded-2xl border border-gray-200 bg-white hover:shadow-xl transition">
    <div class="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4">
      <component :is="iconComponent" class="w-6 h-6 text-blue-600 group-hover:text-blue-800 transition" />
    </div>
    <h3 class="text-xl font-semibold mb-1">{{ title }}</h3>
    <p class="text-sm text-gray-600">{{ description }}</p>
  </router-link>
</template>

<script setup>
import { computed } from 'vue'
import { User, LogIn, UserPlus } from 'lucide-vue-next'

const props = defineProps({
  title: String,
  description: String,
  icon: String,
  to: String
})

const icons = {
  user: User,
  'log-in': LogIn,
  'user-plus': UserPlus
}

const iconComponent = computed(() => icons[props.icon] || User)
</script>
