<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import axios from "axios";
import { onMounted, ref } from 'vue';
import { useApiPrivate } from '../composables/useApi';
// import HelloWorld from './components/HelloWorld.vue'
const items = ref([]);
const description = ref("");
const selected = ref("")
const editedDescription = ref("")
// const apiUrl = import.meta.env.VITE_API_URL;
onMounted (async()=>{
  await getData();
});

const getData = async()=>{
  const response = await useApiPrivate().get('/api/bucketListItems/')
  items.value = response.data;
  console.log(items.value)
}

const addItem = async()=>{
  const response = await useApiPrivate().post('/api/bucketListItems/',{
    description: description.value
  })
  items.value.push(response.data)
  description.value = ""
}

const deleteItem = async(id)=>{
  const response = await useApiPrivate().delete(`/api/bucketListItems/${id}`)
  await getData();
}

const selectItem = async(id, descri)=>{
  selected.value = id
  editedDescription.value = descri
}

const cancel= ()=>{
    selected.value = ""
  editedDescription.value = ""
}

const editItem = async(id)=>{
  const response = await useApiPrivate().put(`/api/bucketListItems/${id}`,{
    description: editedDescription.value
  })
  selected.value = ""
  editedDescription.value = ""
  await getData();
}

</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->
  <div class="row justify-content-center align-items-center">
    <div class="center">
      <input v-model="description" type="text" name="" id="">
    </div>
    <div class="center">
      <button @click="addItem" :disable="!description">Add</button>
    </div>
    <div v-for="(item,i) in items" :key="item" class="center">
      <p v-if="item._id === selected">
        <span>
          {{i+1}}
        </span>
        <input type="text" v-model="editedDescription">
        <button  @click="cancel()">X</button>
        <button  @click="editItem(item?._id)">Ok</button>
      </p>
      <p v-else>
        <span class="tag is-primary">
          <!-- {{i+1}} -->
           *
        </span>
        {{item?.description}}
        <button  @click="deleteItem(item?._id)">Delete</button>
        <button  @click="selectItem(item?._id,item.description)">Select</button>
      </p>
    </div>
</div>
</template>

<style scoped>
.center {
display: flex;
flex-wrap: wrap;
align-content: center;
justify-content: center;
}
.BuckContainer {
  /* border: 0.05em solid red; */
  margin: auto;
  max-width: 200px
  /* display: flex; */
  /* justify-content: center; */
}
/* header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
