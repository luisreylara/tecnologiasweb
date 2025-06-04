<template>
  <div>
    <h1>vue cafe</h1>
    <section>
      <h3>Contador: {{ contador }}</h3>
      <h3>Al cuadrado: {{ alCuadrado }}</h3>
      <button v-on:click="contador++">+ 1</button>
      <button @click="contador--">- 1</button>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
const contador = ref(1);
const alCuadrado = computed(() => contador.value * contador.value);
</script>

<style scoped></style>
