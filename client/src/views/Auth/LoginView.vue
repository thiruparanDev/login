
<script setup lang="ts">
// import { useAuthStore } from "../../stores/auth"
import { useAuthStore, type LoginData } from '../../stores/auth';
import axios from "axios"
import { reactive, ref } from "vue"
import { useRouter } from 'vue-router';
// const email = ref("")
// const password = ref("")
const authStore = useAuthStore()
const router = useRouter()
const loginData = reactive<LoginData>({
    email: "",
    password: "",
})
const login = async()=>{
    try{
    //     axios.post('http://localhost:3500/api/auth/login', {
    //     "email": email.value,
    //     "password": password.value,
    // })
    await authStore.login(loginData)
    router.replace('user')
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
        <input type="text" name="" id="" v-model = "loginData.email">
    </div>
    <div>
        password:
        <input type="text" name="" id="" v-model = "loginData.password">
    </div>
    <button @click="login">Login</button>
  </div>
</template>

<style scoped>
</style>