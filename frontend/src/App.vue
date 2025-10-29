<template>
  <router-view />
  <BackendStatus />
  <DebugPanel />
</template>

<script setup>
import BackendStatus from '@/components/BackendStatus.vue'
import DebugPanel from '@/components/DebugPanel.vue'
</script>
