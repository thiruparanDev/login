<script setup lang="ts">
import { onMounted } from 'vue';
import { useAuthStore } from '../../stores/auth';

const authStore = useAuthStore();
onMounted(()=>{
  getUserData();
})
const getUserData = async()=>{
    try{
    //     axios.post('http://localhost:3500/api/auth/login', {
    //     "email": email.value,
    //     "password": password.value,
    // })
    const res = await authStore.getUser()
    if (res){
      console.log(res)
    }
    // router.replace('user')
    }
    catch (error){
        console.log(error)
    }

}
</script>

<template>
  <div>
Username: xx <br>
Email: xx
  </div>
</template>

<style scoped>
</style>