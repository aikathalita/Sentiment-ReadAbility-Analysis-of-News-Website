<template>
  <div class="fixed bottom-20 right-4 z-40 max-w-xs">
    <div
      v-if="showDebug"
      class="bg-gray-900 text-white p-4 rounded-lg shadow-lg text-xs overflow-auto max-h-96"
    >
      <div class="flex justify-between items-center mb-2">
        <h4 class="font-semibold">Debug Info</h4>
        <button @click="showDebug = false" class="text-gray-400 hover:text-white">×</button>
      </div>
      
      <div class="space-y-2">
        <div>
          <strong>localStorage:</strong>
          <pre class="bg-gray-800 p-2 mt-1 rounded text-xs overflow-x-auto">{{ formattedLocalStorage }}</pre>
        </div>
        
        <div>
          <strong>Current Route:</strong>
          <div class="bg-gray-800 p-2 mt-1 rounded">{{ currentRoute }}</div>
        </div>
        
        <div>
          <strong>Backend Status:</strong>
          <div class="bg-gray-800 p-2 mt-1 rounded" :class="backendStatus ? 'text-green-400' : 'text-red-400'">
            {{ backendStatus ? 'Online' : 'Offline' }}
          </div>
        </div>
        
        <button 
          @click="clearStorage" 
          class="bg-red-600 hover:bg-red-700 px-2 py-1 rounded text-xs w-full"
        >
          Clear Storage
        </button>
        
        <button 
          @click="testBackend" 
          class="bg-blue-600 hover:bg-blue-700 px-2 py-1 rounded text-xs w-full"
        >
          Test Backend
        </button>
      </div>
    </div>
    
    <button 
      v-if="!showDebug"
      @click="showDebug = true"
      class="bg-purple-600 hover:bg-purple-700 text-white px-3 py-2 rounded-full shadow-lg text-xs font-medium"
    >
      🐛 Debug
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { ApiService } from '@/services/api'

const showDebug = ref(false)
const backendStatus = ref(false)
const route = useRoute()

const formattedLocalStorage = computed(() => {
  const data = localStorage.getItem('analysisResult')
  if (!data) return 'No data'
  
  try {
    return JSON.stringify(JSON.parse(data), null, 2)
  } catch {
    return data
  }
})

const currentRoute = computed(() => route.fullPath)

const clearStorage = () => {
  localStorage.clear()
  alert('localStorage cleared')
}

const testBackend = async () => {
  try {
    const result = await ApiService.analyzeText('Test dari debug component')
    alert('Backend test berhasil: ' + result.sentiment)
  } catch (error) {
    alert('Backend test gagal: ' + error.message)
  }
}

const checkBackend = async () => {
  backendStatus.value = await ApiService.healthCheck()
}

onMounted(() => {
  checkBackend()
  setInterval(checkBackend, 5000) // Check every 5 seconds
})
</script>
