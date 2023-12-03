<script setup>
import Teacher from '@/views/dashboard/Teacher.vue'
</script>

<template>
  <div class="flex-container">
    <div class="flex-item">
      <Teacher />
    </div>
  </div>
</template>

<style scoped>
  .flex-container {
    display: flex;
    flex-direction: column;
  }

  .flex-item {
    flex: 1;
    margin: 8px;
  }
</style>
