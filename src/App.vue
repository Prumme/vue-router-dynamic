<script setup lang="ts">
import { RouterView } from 'vue-router';
import { routes } from './router';

</script>

<template>
  <nav class="nav">
    <RouterLink class="link" v-for="(route, index) in routes" :key="index" :to="route.path.replace('/:id?', '')">{{ route.meta.title }}</RouterLink>
  </nav>
  <RouterView />
</template>

<style>
.nav {
  display: flex;
  justify-content: space-around;
  padding: 10px;
  background-color: #f1f1f1;
}

.link {
  text-decoration: none;
  color: #333;
}

.link:hover {
  color: #000;
}
</style>
