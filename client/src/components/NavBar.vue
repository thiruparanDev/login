
<script setup lang="ts">
import { useAuthStore } from '../stores/auth';
import { useRouter } from 'vue-router';
import { computed } from 'vue';

const router = useRouter()
const authStore = useAuthStore();
const logout = ()=>{
  authStore.logout()
  router.replace('login')
}
const click = ()=>{
  console.log(authenticated.value)
  console.log(authStore.userDetail)
}
const authenticated = computed(()=>authStore.isAuthenticated)
</script>

<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <router-link class="navbar-brand" to="/">Home</router-link>
    <button @click="click"></button>
    <div v-if="!authenticated">
        <router-link class="navbar-brand" to="/register">Register</router-link>
        <router-link class="navbar-brand" to="/login">Login</router-link>
    </div>
    <ul class="nav-item dropdown" v-else>
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            User
          </a>
          <ul class="dropdown-menu" >
            <li><router-link class="navbar-brand" to="/user">User</router-link></li>
            <li><hr class="dropdown-divider"></li>
            <li><div class="navbar-brand" @click="logout" >Logout</div></li>
          </ul>
        </ul>
  </div>
</nav>

</template>

<style scoped>
.navbar-brand{
  cursor: pointer
}
</style>