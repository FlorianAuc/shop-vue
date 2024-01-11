<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <!-- @/ vise la racine de src -->
    

    <div class="wrapper">
      
      <nav class="navbar">
        <RouterLink class="navbar-item" to="/">Home</RouterLink>
        <RouterLink class="navbar-item" to="/about">About</RouterLink>
        <RouterLink class="navbar-item" to="/contact">Contact</RouterLink>
        <RouterLink class="navbar-item" to="/shop">Shop</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped lang="scss">


</style>
