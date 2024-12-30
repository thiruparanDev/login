<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useAuthStore, type User } from '../../stores/auth';

const authStore = useAuthStore();
onMounted(()=>{
  getUserData();
})
const user = computed(()=>{
  console.log(user.value)
  return authStore.userDetail
})
const user1 = ref({} as User)
const getUserData = async()=>{
    try{
    //     axios.post('http://localhost:3500/api/auth/login', {
    //     "email": email.value,
    //     "password": password.value,
    // })
    const res = await authStore.getUser()
    if (res){
      console.log(res)
      user1.value = res
    }
    // router.replace('user')
    }
    catch (error){
        console.log(error)
    }

}
</script>

<template>
  <div class="container text-center">
Username: {{user1.username}} <br>
Email: {{user1.email}}
  </div>
</template>

<style scoped>
</style>