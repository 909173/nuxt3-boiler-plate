<template>
  <div>
    <div v-for="(todo, i) in todos" :key="i">
      <jobVue :job="todo"></jobVue>
    </div>
  </div>
</template>

<script lang="ts" setup>
import jobVue from "./jobs/job.vue"
import { useJobsState } from "@/composables/jobs"
const jobState = useJobsState()

const todos = jobState.todo
</script>
