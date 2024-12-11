
<script setup lang="ts">
import axios from 'axios';
import { ref } from "vue";
const userName = ref("")
const email = ref("")
const password = ref("")
const confirmPassword = ref("")
const firstName = ref("")
const lastName = ref("")

const register = ()=>{
    try{
        axios.post('http://localhost:3500/api/auth/register', {
        "username": userName.value,
        "email": email.value,
        "password": password.value,
        "password_confirm": confirmPassword.value,
        "first_name": firstName.value,
        "last_name": lastName.value
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
        Username:
        <input type="text" name="" id="" v-model = "userName">
    </div>
    <div>
        email:
        <input type="text" name="" id="" v-model = "email">
    </div>
    <div>
        password:
        <input type="text" name="" id="" v-model = "password">
    </div>
    <div>
        confirm password:
        <input type="text" name="" id="" v-model = "confirmPassword">
    </div>
    <div>
        first name:
        <input type="text" name="" id="" v-model = "firstName">
    </div>
    <div>
        last name:
        <input type="text" name="" id="" v-model = "lastName">
    </div>
    <button @click="register">Register</button>
  </div>
</template>

<style scoped>
</style>