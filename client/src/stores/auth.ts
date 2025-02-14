import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import {useApi, useApiPrivate} from '../composables/useApi'

export interface User{
  id: number,
  username: string,
  first_name: string,
  last_name: string
  email: string
}

export interface LoginData{
  email: string,
  password: string
}

export interface RegisterData{
  username: string,
  email: string,
  password: string,
  password_confirm: string,
  first_name: string,
  last_name: string
}

export interface State{
  user: User,
  accessToken: string,
  authReady: boolean
}

export const useAuthStore = defineStore('auth', () => {
  
  const user = ref({} as User)
  const accessToken = ref("")
  const authReady = ref(false)
  // const state = <State>reactive{
    
  // }
  // const getUser = computed(()=>user.value)
  const isAuthenticated = computed(()=>user.value.id?true: false)
  const userDetail = computed(()=>{
    return user.value
  })
  
  const attempt = async()=>{
    try {
      await refresh()
    } catch(error){
    return
    }
    return
  }

  const setUser = (use: User)=>{
    user.value = use
  }

  const login = async (payload: LoginData)=>{
    try{
      const {data} = await useApi().post(`/api/auth/login`, payload)
      accessToken.value = data?.access_token
      return data
    } catch (error: Error | any) {
      throw error.response.message
    }
  }
  const register = async (payload: RegisterData)=>{
    try{
      const {data} = await useApi().post(`/api/auth/register`, payload)
      user.value = data
      return data
    } catch (error: Error | any) {
      throw error.response.message
    }
  }

  const getUser = async ()=>{
    try{
      const {data} = await useApiPrivate().get(`/api/auth/user`)
      return data
    } catch (error: Error | any) {
      throw error.response.message
    }
  }
  const logout = async ()=>{
    try{
      const {data} = await useApiPrivate().post(`/api/auth/logout`)
      accessToken.value = ""
      user.value = {} as User
      return data
    } catch (error: Error | any) {
      throw error.response.message
    }
  }

  const refresh = async ()=>{
    try{
      const {data} = await useApi().post(`/api/auth/refresh`)
      return data
    } catch (error: Error | any) {
      throw error.response.message
    }
  }

  return { 
    user,
    accessToken,
    getUser,
    isAuthenticated,
    setUser,
    login,
    register,
    logout,
    refresh,
    authReady,
    userDetail,
    attempt
  }
})

// import {defineStore} from "pinia"
// import {useApi, useApiPrivate} from "../composables/useApi"

// export interface User{
//   id: number,
//   username: string,
//   email: string,
//   first_name: string,
//   last_name: string,
//   full_name?: string
// }

// export interface State{
//   user: User,
//   accessToken: string,
//   authReady: boolean
// }

// export interface LoginData {
//   email: string,
//   password: string
// }

// export interface RegisterData {
//   username: string,
//   email: string,
//   first_name: string,
//   last_name: string
//   password: string,
//   password_confirm: string,
// }


// export const useAuthStore = defineStore('auth', {
//   state: (): State => {
//     return {
//       user: {} as User,
//       accessToken: "" as string,
//       authReady: false as boolean
//     }
//   },

//   getters: {
//     userDetail: (state: State) => state.user,
//     isAuthenticated: (state: State) => state.accessToken ? true : false
//   },

//   actions:{
//     async attempt(){
//       try {
//         await this.refresh()
//         await this.getUser()
//       } catch (error) {
//         return
//       }
//       return
//     },


//     async login(payload: LoginData){
//       try {
//         const {data} = await useApi().post(`/api/auth/login`, payload);
//         this.accessToken = data.access_token
//         await this.getUser()
//         return data
//       } catch (error: Error | any) {
//         throw error.message
//       }
//     },

//     async register(payload: RegisterData){
//       try {
//         const {data} = await useApi().post(`/api/auth/register`, payload);
//         return data
//       } catch (error: Error | any) {
//         throw error.message
//       }
//     },

//     async getUser(){
//       try {
//         const {data} = await useApiPrivate().get(`/api/auth/user`);
//         this.user = data
//         return data
//       } catch (error: Error | any) {
//         throw error.message
//       }
//     },

//     async logout(){
//       try {
//         const {data} = await useApiPrivate().post(`/api/auth/logout`);
//         this.accessToken = ""
//         this.user = {} as User
//         return data
//       } catch (error: Error | any) {
//         throw error.message
//       }
//     },

//     async refresh(){
//       try {
//         const {data} = await useApi().post(`/api/auth/refresh`);
//         this.accessToken = data.access_token
//         return data
//       } catch (error: Error | any) {
//         throw error.message
//       }
//     }
//   }
// })