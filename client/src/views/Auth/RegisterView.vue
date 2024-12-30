
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
  <div class="container text-center">
    <!-- {errorMessage} -->
    <div class="row row-cols-3">
    <div class="col">
        Username:
    </div>
    <input type="text" name="" id="" v-model = "registerData.username" class="col">
</div>
    <div class="row row-cols-3">
        <div class="col">
        email:
        </div>
        <input type="text" name="" id="" v-model = "registerData.email" class="col">
    </div>
    <div class="row row-cols-3">
        <div class="col">
            password:
        </div>
        <input type="text" name="" id="" v-model = "registerData.password" class="col">
    </div>
    <div class="row row-cols-3">
        <div class="col">
            confirm password:
        </div>
        <input type="text" name="" id="" v-model = "registerData.password_confirm" class="col">
    </div>
    <div class="row row-cols-3">
        <div class="col">
            first name:
        </div>
        <input type="text" name="" id="" v-model = "registerData.first_name" class="col">
    </div>
    <div class="row row-cols-3">
        <div class="col">
            last name:
        </div>
        <input type="text" name="" id="" v-model = "registerData.last_name" class="col">
    </div>
    <button @click="register">Register</button>
  <!-- </div> -->
</div>
</template>

<style scoped>
</style>