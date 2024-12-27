
<script setup lang="ts">
import { useAuthStore } from '../stores/auth';
import { useRouter } from 'vue-router';

const router = useRouter()
const authStore = useAuthStore();
const logout = ()=>{
  authStore.logout()
  router.replace('login')
}
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
            <li><div class="navbar-brand" @click="logout">Logout</div></li>
          </ul>
        </ul>
  </div>
</nav>

</template>

<style scoped>
</style>