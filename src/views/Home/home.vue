<script setup>
import { ref } from "vue";
import {useRouter} from "vue-router"

const router = useRouter()

const priceDate = ref([
    {
        type:"DC",
        up_price:"3.097",
        parcent:"+0.26%",
        up:1
    },
    {
        type:"BTC",
        up_price:"19432.06",
        parcent:"-1.26%",
        up:0
    },
    {
        type:"ETH",
        up_price:"1664.26",
        parcent:"-3.26%",
        up:0
    },
    {
        type:"DOGE",
        up_price:"0.0134",
        parcent:"+2.6%",
        up:1
    },
    {
        type:"APE",
        up_price:"1.26",
        parcent:"-3.26%",
        up:0
    },
    {
        type:"DOT",
        up_price:"6.34",
        parcent:"+2.6%",
        up:1
    },
    {
        type:"ATOM",
        up_price:"8.26",
        parcent:"-2.26%",
        up:0
    }
])

const goKline = (item)=>{
  router.push({
    path:"/kline",
    query:item
  })
}
</script>

<template>
  <div class="home">
    <div class="header">
      <span class="material-symbols-outlined"> account_circle </span>
      <span>首页</span>
      <span class="material-symbols-outlined"> language </span>
    </div>
    <div class="banner">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img src="http://127.0.0.1:5173/banner1.png" alt="" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="http://127.0.0.1:5173/banner2.png" alt="" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="http://127.0.0.1:5173/banner3.png" alt="" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="notice">
      <van-notice-bar
        left-icon="volume-o"
        background="#feffff"
        color="#333"
        text="无论我们能活多久，我们能够享受的只有无法分割的此刻，此外别无其他。"
      />
    </div>
    <div class="pickup">
        <div>
            <img src="@/assets/img/cz.png" alt="">
            <span>充值</span>
        </div>
        <div>
            <img src="@/assets/img/cp.png" alt="">
            <span>提现</span>
        </div>
        <div>
            <img src="@/assets/img/list.png" alt="">
            <span>锁仓</span>
        </div>
        <div>
            <img src="@/assets/img/qb.png" alt="">
            <span>矿机</span>
        </div>
        <div>
            <img src="@/assets/img/sh.png" alt="">
            <span>邀请</span>
        </div>
        <div>
            <img src="@/assets/img/tx.png" alt="">
            <span>充值</span>
        </div>
        <div>
            <img src="@/assets/img/type.png" alt="">
            <span>更多</span>
        </div>
        <div>
            <img src="@/assets/img/user.png" alt="">
            <span>用户</span>
        </div>
    </div>
    <div class="main">
        <div class="top">
            <span>交易对</span>
            <span>最新价格</span>
            <span>涨跌幅</span>
        </div>
        <div class="bottom">
            <div v-for="(item,index) in priceDate" :key="index" @click="goKline(item)">
                <span>{{item.type}}<p>/USDT</p></span>
                <span :class="item.up==1?'up_price':'down_price'">{{item.up_price}}</span>
                <span class="span3" :class="item.up==1?'up':'down'">{{item.parcent}}</span>
            </div>
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  width: auto;
  height: auto;
  background: #feffff;
  padding: 15px;
  padding-bottom: 70px;
  color: #333;
  .header {
    width: auto;
    height: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 500;
  }
  .banner {
    margin: 15px 0px;
    padding: 5px;
    width: auto;
    height: 190px;
    border-radius: 5px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      border-radius: 5px;
    }
    .my-swipe {
      width: 100%;
      height: 100%;
    }
  }
  .pickup{
    width: auto;
    height: 140px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 15px 0px;
    font-size: 14px;
    div{
        width: 25%;
        height: 50px;
        text-align: center;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
        img{
            width: 35px;
            height: 35px; 
            padding-bottom: 5px;           
        }
    }
  }
  .main{
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    .top{
        display: flex;
        justify-content: space-between;
        font-size: 15px;
        font-weight: 600;
        padding: 10px 0px;
    }
    .bottom{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        width: 100%;
        height: auto;
        div{
            width: 100%;
            height: 40px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 8px 0px;
            p{
                display: inline-block;
            }
            span{
                font-weight: 600;
                display: inline-block;
                width: 33%;
                text-align: left;
            }
            .up_price{
                color: #1CAD90;
            }
            .down_price{
                color: #FF5F56;
            }
            .span3{
                display: block;
                width: 75px;
                height: 35px;
                text-align: center;
                line-height: 35px;
                color: #feffff;
            }
            .up{
                background: #1CAD90;
            }
            .down{
                background: #FF5F56;
            }
        }
    }
  }
}
</style>