import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import {useApi} from '../composables/useApi'

export interface User{
  id: number,
  username: string,
  first_name: string,
  last_name: string
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

export const useAuthStore = defineStore('auth', () => {
  const user = ref({} as User)
  const accessToken = ref("")
  // const getUser = computed(()=>user.value)
  const isAuthenticated = computed(()=>user.value.id?true: false)
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
      const {data} = await useApi().get(`/api/auth/user`)
      return data
    } catch (error: Error | any) {
      throw error.response.message
    }
  }
  const logout = async ()=>{
    try{
      const {data} = await useApi().get(`/api/auth/logout`)
      accessToken.value = ""
      user.value = {} as User
      return data
    } catch (error: Error | any) {
      throw error.response.message
    }
  }

  const refresh = async ()=>{
    try{
      const {data} = await useApi().get(`/api/auth/refresh`)
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
    refresh
  }
})