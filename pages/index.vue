<template>
  <jobsVue></jobsVue>
</template>

<script setup lang="ts">
import { useJobsState } from "~~/composables/jobs"
import jobsVue from "~~/components/molcules/jobs.vue"
const jobs = useJobsState()
await jobs.fetchJobs()
</script>
