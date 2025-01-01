<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useAuthStore, type User } from '../../stores/auth';
import { useRouter } from 'vue-router';
// import BucketListView from '../BucketListView.vue'
const router = useRouter()
const authStore = useAuthStore();
onMounted(()=>{
  getUserData();
})
const user = computed(()=>{
  console.log(user.value)
  return authStore.userDetail
})
const authenticated = computed(()=>authStore.isAuthenticated)
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
      authStore.setUser(user1.value)
    }
    // router.replace('user')
    }
    catch (error){
        console.log(error)
    }

}
const goToBucketList = ()=>{
  router.replace('bucketList')
}
</script>

<template>
  <div class="container text-center">
  <div >
Username: {{user1.username}} <br>
Email: {{user1.email}}
</div>
<div>
  <button @click="goToBucketList" v-if="authenticated">Bucket List</button>
</div>
  </div>
</template>

<style scoped>
</style>