
<script setup lang="ts">
import axios from "axios"
import { ref } from "vue"
const email = ref("")
const password = ref("")

const login = ()=>{
    try{
        axios.post('http://localhost:3500/api/auth/login', {
        "email": email.value,
        "password": password.value,
    })
    }
    catch (error){
        console.log(error)
    }

}
</script>

<template>
  <div>
    <div>
        email:
        <input type="text" name="" id="" v-model = "email">
    </div>
    <div>
        password:
        <input type="text" name="" id="" v-model = "password">
    </div>
    <button @click="login">Login</button>
  </div>
</template>

<style scoped>
</style>