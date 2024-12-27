
<script setup lang="ts">
import { useAuthStore, type RegisterData } from '../../stores/auth';
import axios from 'axios';
import { reactive, ref } from "vue";
import { useRouter } from 'vue-router';
// const userName = ref("")
// const email = ref("")
// const password = ref("")
// const confirmPassword = ref("")
// const firstName = ref("")
// const lastName = ref("")
const router = useRouter()
const authStore = useAuthStore()
const errorMessage = ref("")
const registerData = reactive<RegisterData>({
    username: "",
    email: "",
    password: "",
    password_confirm: "",
    first_name: "",
    last_name: ""
})
const register = async()=>{
    try{
        await authStore.register(registerData)
        // axios.post('http://localhost:3500/api/auth/register', {
    //     // "username": userName.value,
    //     // "email": email.value,
    //     // "password": password.value,
    //     // "password_confirm": confirmPassword.value,
    //     // "first_name": firstName.value,
    //     // "last_name": lastName.value
        // ...registerData
    // })
        router.replace('login')
    }
    catch (error){
        console.log(error)
        // errorMessage.value = error?.errorMessage??
    }

}
</script>

<template>
  <div>
    {errorMessage}
    <div>
        Username:
        <input type="text" name="" id="" v-model = "registerData.username">
    </div>
    <div>
        email:
        <input type="text" name="" id="" v-model = "registerData.email">
    </div>
    <div>
        password:
        <input type="text" name="" id="" v-model = "registerData.password">
    </div>
    <div>
        confirm password:
        <input type="text" name="" id="" v-model = "registerData.password_confirm">
    </div>
    <div>
        first name:
        <input type="text" name="" id="" v-model = "registerData.first_name">
    </div>
    <div>
        last name:
        <input type="text" name="" id="" v-model = "registerData.last_name">
    </div>
    <button @click="register">Register</button>
  </div>
</template>

<style scoped>
</style>