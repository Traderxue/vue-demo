<script setup>
import { ref } from "vue";

import {useRouter} from 'vue-router'

const router = useRouter()

const goTrade = (item)=>{
    router.push({
        path:"/coin_trade",
        query:item
    })
}

const categoryData = ([
    {
        type:"BTC",
        price:"17946.3",
        parcent:"1.03%",
        up:0
    },
    {
        type:"ETH",
        price:"1746.3",
        parcent:"1.2%",
        up:1
    },
    {
        type:"DOGE",
        price:"0.0113.3",
        parcent:"-1.03%",
        up:0
    },
    {
        type:"APE",
        price:"1.23",
        parcent:"2.03%",
        up:1
    }, {
        type:"BTC",
        price:"17946.3",
        parcent:"1.03%",
        up:0
    },
    {
        type:"ETH",
        price:"1746.3",
        parcent:"1.2%",
        up:1
    },
    {
        type:"DOGE",
        price:"0.0113.3",
        parcent:"-1.03%",
        up:0
    },
    {
        type:"APE",
        price:"1.23",
        parcent:"2.03%",
        up:1
    },
    {
        type:"BTC",
        price:"17946.3",
        parcent:"1.03%",
        up:0
    },
    {
        type:"ETH",
        price:"1746.3",
        parcent:"1.2%",
        up:1
    },
    {
        type:"DOGE",
        price:"0.0113.3",
        parcent:"-1.03%",
        up:0
    },
    {
        type:"APE",
        price:"1.23",
        parcent:"2.03%",
        up:1
    },

])
</script>

<template>
  <div class="category">
    <div class="top">
      <span>交易对</span>
      <span>最新价</span>
      <span>涨跌幅</span>
    </div>
    <div class="main">
      <div v-for="(item,index) in categoryData" :key="index" @click="goTrade(item)">
        <span>{{item.type}}<p>/USDT</p></span>
        <span :class="item.up==1?'up_price':'down_price'">{{item.price}}</span>
        <span class="span2" :class="item.up==1?'up':'down'">{{item.parcent}}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.category{
    width: auto;
    height: auto;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    font-size: 14px;
    .top{
        display: flex;
        justify-content: space-between;
        padding: 10px 0px;
    }
    .main{
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        div{
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-weight: 600;
            font-size: 15px;
            margin: 3px 0px;
            color: #333;
            span{
                p{
                    display: inline-block;
                }
            }
            .up_price{
                color: #1CAD90;
            }
            .down_price{
                color: #FF5F56;
            }
            .up{
                background: #1CAD90;
            }
            .down{
                background: #FF5F56;
            }
            .span2{
                width: 75px;
                height: 35px;
                text-align: center;
                line-height: 35px;
                color: #fff;
            }
        }
    }
}
</style>