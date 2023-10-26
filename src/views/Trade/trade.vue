<script setup>
import { ref } from "vue";
import {useRouter} from 'vue-router'

const active = ref(0);

const router = useRouter()

const toCategory = ()=>{
    router.push("/category")
    active.value=1
}

const toOptional = ()=>{
    router.push("/optional")
    active.value=2
}
</script>

<template>
  <div class="trade">
    <div class="header">
      <span>行情</span>
    </div>
    <div class="banner">
      <span @click="toCategory" :class="active==1?'active':''">USDT</span>
      <span @click="toOptional" :class="active==2?'active':''">自选</span>
    </div>
    <div class="main">
        <RouterView />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.trade {
  width: auto;
  height: 100vh;
  background: #feffff;
  padding: 15px;
  .header {
    width: auto;
    height: 25px;
    text-align: center;
    line-height: 25px;
  }
  .banner {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 10px;
    font-size: 15px;
  }
  .active{
    color: #1989FA;
    font-weight: 600;
  }
}
</style>