<script lang="ts" setup>
import { clearError, definePageMeta } from '#imports';

/* import type { NuxtError } from '#app' */
const props = defineProps({
  error: Object
})

const handleClearError = () => clearError({ redirect: '/' })

</script>
<template>
    <div class="error-page-container min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <h1 class="text-4xl font-bold text-red-600 mb-4">
          Error {{ error?.statusCode }}
        </h1>
        <p class="text-gray-700 mb-6">{{ error?.message }}</p>
        <button 
            @click="handleClearError" 
            class="px-4 py-2 bg-amber-500 text-white rounded hover:bg-amber-600 transition-colors"
        >
            Volver al inicio
        </button>
    </div>
</template>

<style scoped>
.error-page-container {
  animation: errorFadeIn 0.4s ease-out forwards;
}

@keyframes errorFadeIn {
  from {
    opacity: 0;
    transform: scale(0.98);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>