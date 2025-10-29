<template>
  <div class="fixed bottom-4 right-4 z-40">
    <div
      :class="[
        'flex items-center gap-2 px-4 py-2 rounded-full shadow-lg text-sm font-medium transition-colors',
        isConnected 
          ? 'bg-green-100 text-green-800 border-2 border-green-300' 
          : 'bg-red-100 text-red-800 border-2 border-red-300'
      ]"
    >
      <div
        :class="[
          'w-2 h-2 rounded-full',
          isConnected ? 'bg-green-500 animate-pulse' : 'bg-red-500'
        ]"
      ></div>
      <span>
        {{ isConnected ? 'Backend Online' : 'Backend Offline' }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { ApiService } from '@/services/api'

const isConnected = ref(false)
let intervalId: number | null = null

const checkConnection = async () => {
  try {
    isConnected.value = await ApiService.healthCheck()
  } catch {
    isConnected.value = false
  }
}

onMounted(() => {
  // Check immediately
  checkConnection()
  
  // Check every 10 seconds
  intervalId = setInterval(checkConnection, 10000)
})

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
})
</script>
