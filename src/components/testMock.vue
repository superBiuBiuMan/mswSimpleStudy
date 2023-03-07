<script setup lang="ts">
import {ref} from "vue";

console.log(import.meta.env)
/* 用户信息 */
const info = ref< {username:string,address:string}>({
  username:'',
  address:''
})
/* 登录 */
const handleLogin =  () => {
  fetch('/login', {
    method: 'POST'
  }).then((res) => {
    if(res.status === 200){
      alert('登录成功')
    }else{
      alert('登录失败')
    }
  })
}
/* 获取用户信息 */
const handleGetUserInfo = async () => {
  const response = await fetch('/user')
  info.value = await response.json()
}
</script>

<template>
  <button @click="handleLogin">点击我登录</button>
  <button @click="handleGetUserInfo">点击我获取用户信息</button>
  <div>
    <!-- 展示用户信息 -->
    {{info}}
  </div>
</template>

<style scoped>
</style>
