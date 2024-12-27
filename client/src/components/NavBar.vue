
<script setup lang="ts">
</script>

<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <router-link class="navbar-brand" to="/">Home</router-link>
    <div>
        <router-link class="navbar-brand" to="/register">Register</router-link>
        <router-link class="navbar-brand" to="/login">Login</router-link>
    </div>
    <ul class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            User
          </a>
          <ul class="dropdown-menu">
            <li><router-link class="navbar-brand" to="/user">User</router-link></li>
            <li><hr class="dropdown-divider"></li>
            <li><router-link class="navbar-brand" to="/login">Logout</router-link></li>
          </ul>
        </ul>
  </div>
</nav>

</template>

<style scoped>
</style>