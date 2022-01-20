<template lang="pug">
div hello-world
</template>

<script setup lang="ts">
const { data } = await useFetch("/api/hello")
console.log(data)
</script>
