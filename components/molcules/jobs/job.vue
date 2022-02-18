<template>
  <div class="job-content">
    {{ job.name }}
    {{ job.createDate }}
  </div>
</template>

<script setup lang="ts">
import { Job } from "@/types/todo"
defineProps<{ job: Job }>()
</script>

<style lang="scss" scoped>
.job-content {
  background-color: $primary;
  color: white;
}
</style>
