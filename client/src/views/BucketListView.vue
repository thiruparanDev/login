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
  <div>
    <div class="control is-expanded">
      <input class="input" v-model="description" type="text" name="" id="">
    </div>
    <div class="control">
      <a class="button is-info" @click="addItem" :disable="!description">Add</a>
    </div>
    <div class="notification" v-for="(item,i) in items" :key="item">
      <p v-if="item._id === selected">
        <span class="tag is-primary">
          {{i+1}}
        </span>
        <input type="text" v-model="editedDescription">
        <a class="button" @click="cancel()">X</a>
        <a class="button" @click="editItem(item?._id)">Ok</a>
      </p>
      <p v-else>
        <span class="tag is-primary">
          {{i+1}}
        </span>
        {{item?.description}}
        <a class="button" @click="deleteItem(item?._id)">Delete</a>
        <a class="button" @click="selectItem(item?._id,item.description)">Select</a>
      </p>
    </div>
</div>
</template>

<style scoped>
header {
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
}
</style>
