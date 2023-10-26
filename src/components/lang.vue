<script setup>
import { ref } from "vue";
import {useRouter} from "vue-router"
import i18n from "@/lang/index.js";

const router = useRouter()

const langData = ref([
    {
        lang:"English",
        simplify:"en"
    },
    {
        lang:"简体中文",
        simplify:"zh"
    },
    {
        lang:"繁体中文",
        simplify:"zh_hk"
    },
    {
        lang:"Vietnam"
    },
    {
        lang:"Thailand"
    }

])

const goBack = ()=>{
    router.back()
}

const switchLanguage = (lang) =>{
    i18n.global.locale = lang;
    router.push("/home")
}
</script>

<template>
  <div class="lang">
    <div class="header">
      <span class="material-symbols-outlined icon_back"  @click="goBack"> arrow_back_ios </span>
      <span>Select Language</span>
    </div>
    <div class="main">
        <div v-for="(item,index) in langData" :key="index" @click="switchLanguage(item.simplify)">
            <span>{{item.lang}}</span>
            <span class="material-symbols-outlined icon_back">
            arrow_forward_ios
            </span>
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.lang{
    width: auto;
    height: auto;
    padding: 15px;
    .header{
        width: auto;
        height: 25px;
        text-align: center;
        position: relative;
        line-height: 25px;
        font-size: 15px;
        .icon_back{
            position: absolute;
            left: 0;
            font-size: 22px;
            top: 50%;
            transform: translateY(-50%);
        }
    }
    .main{
        width: auto;
        height: auto;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        padding-top: 15px;
        div{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 15px;
            margin: 10px 0px;
            .icon_back{
                font-size: 18px;
            }
        }
    }

}
</style>