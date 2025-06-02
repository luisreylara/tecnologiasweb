<template>
  <div>
    <h1>{{ saludo }}</h1>
  </div>
</template>

<script setup lang="ts">
const saludo = 'Hola UPJR'
</script>

<style scoped>
h1 {
  text-transform: uppercase;
  color: red;
}
</style>
