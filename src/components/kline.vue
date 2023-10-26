<script setup>
import { init } from "klinecharts";
import { onMounted, ref } from "vue";
import {useRouter,useRoute} from 'vue-router'

const router = useRouter()
const route = useRoute()

const timeData = ref([
  {
    time: "1M",
    chart_data: [
      {
        close: 4976.16,
        high: 4977.99,
        low: 4970.12,
        open: 4972.89,
        timestamp: 1587660000000,
        volume: 204,
      },
      {
        close: 4977.33,
        high: 4979.94,
        low: 4971.34,
        open: 4973.2,
        timestamp: 1587660060000,
        volume: 194,
      },
      {
        close: 4977.93,
        high: 4977.93,
        low: 4974.2,
        open: 4976.53,
        timestamp: 1587660120000,
        volume: 197,
      },
      {
        close: 4966.77,
        high: 4968.53,
        low: 4962.2,
        open: 4963.88,
        timestamp: 1587660180000,
        volume: 28,
      },
      {
        close: 4961.56,
        high: 4972.61,
        low: 4961.28,
        open: 4961.28,
        timestamp: 1587660240000,
        volume: 184,
      },
      {
        close: 4964.19,
        high: 4964.74,
        low: 4961.42,
        open: 4961.64,
        timestamp: 1587660300000,
        volume: 191,
      },
      {
        close: 4968.93,
        high: 4972.7,
        low: 4964.55,
        open: 4966.96,
        timestamp: 1587660360000,
        volume: 105,
      },
      {
        close: 4979.31,
        high: 4979.61,
        low: 4973.99,
        open: 4977.06,
        timestamp: 1587660420000,
        volume: 35,
      },
      {
        close: 4977.02,
        high: 4981.66,
        low: 4975.14,
        open: 4981.66,
        timestamp: 1587660480000,
        volume: 135,
      },
      {
        close: 4985.09,
        high: 4988.62,
        low: 4980.3,
        open: 4986.72,
        timestamp: 1587660540000,
        volume: 76,
      },
    ],
  },
  {
    time: "5M",
    chart_data: [
      {
        close: 5076.16,
        high: 5977.99,
        low: 4970.12,
        open: 4972.89,
        timestamp: 1587660000000,
        volume: 204,
      },
      {
        close: 5277.33,
        high: 5479.94,
        low: 4071.34,
        open: 4973.2,
        timestamp: 1587660060000,
        volume: 194,
      },
      {
        close: 4977.93,
        high: 4977.93,
        low: 4974.2,
        open: 4976.53,
        timestamp: 1587660120000,
        volume: 197,
      },
      {
        close: 4966.77,
        high: 4968.53,
        low: 4962.2,
        open: 4963.88,
        timestamp: 1587660180000,
        volume: 28,
      },
      {
        close: 4961.56,
        high: 4972.61,
        low: 4961.28,
        open: 4961.28,
        timestamp: 1587660240000,
        volume: 184,
      },
      {
        close: 4964.19,
        high: 4964.74,
        low: 4961.42,
        open: 4961.64,
        timestamp: 1587660300000,
        volume: 191,
      },
      {
        close: 4968.93,
        high: 4972.7,
        low: 4964.55,
        open: 4966.96,
        timestamp: 1587660360000,
        volume: 105,
      },
      {
        close: 4979.31,
        high: 4979.61,
        low: 4973.99,
        open: 4977.06,
        timestamp: 1587660420000,
        volume: 35,
      },
      {
        close: 4977.02,
        high: 4981.66,
        low: 4975.14,
        open: 4981.66,
        timestamp: 1587660480000,
        volume: 135,
      },
      {
        close: 4985.09,
        high: 4988.62,
        low: 4980.3,
        open: 4986.72,
        timestamp: 1587660540000,
        volume: 76,
      },
    ],
  },
  {
    time: "15M",
    chart_data: [
      {
        close: 4976.16,
        high: 4977.99,
        low: 4970.12,
        open: 4972.89,
        timestamp: 1587660000000,
        volume: 204,
      },
      {
        close: 4977.33,
        high: 4979.94,
        low: 4971.34,
        open: 4973.2,
        timestamp: 1587660060000,
        volume: 194,
      },
      {
        close: 4977.93,
        high: 4977.93,
        low: 4974.2,
        open: 4976.53,
        timestamp: 1587660120000,
        volume: 197,
      },
      {
        close: 4966.77,
        high: 4968.53,
        low: 4962.2,
        open: 4963.88,
        timestamp: 1587660180000,
        volume: 28,
      },
      {
        close: 4961.56,
        high: 4972.61,
        low: 4961.28,
        open: 4961.28,
        timestamp: 1587660240000,
        volume: 184,
      },
      {
        close: 4964.19,
        high: 4964.74,
        low: 4961.42,
        open: 4961.64,
        timestamp: 1587660300000,
        volume: 191,
      },
      {
        close: 4968.93,
        high: 4972.7,
        low: 4964.55,
        open: 4966.96,
        timestamp: 1587660360000,
        volume: 105,
      },
      {
        close: 4979.31,
        high: 4979.61,
        low: 4973.99,
        open: 4977.06,
        timestamp: 1587660420000,
        volume: 35,
      },
      {
        close: 4977.02,
        high: 4981.66,
        low: 4975.14,
        open: 4981.66,
        timestamp: 1587660480000,
        volume: 135,
      },
      {
        close: 4985.09,
        high: 4988.62,
        low: 4980.3,
        open: 4986.72,
        timestamp: 1587660540000,
        volume: 76,
      },
    ],
  },
  {
    time: "30M",
    chart_data: [
      {
        close: 4976.16,
        high: 4977.99,
        low: 4970.12,
        open: 4972.89,
        timestamp: 1587660000000,
        volume: 204,
      },
      {
        close: 4977.33,
        high: 4979.94,
        low: 4971.34,
        open: 4973.2,
        timestamp: 1587660060000,
        volume: 194,
      },
      {
        close: 4977.93,
        high: 4977.93,
        low: 4974.2,
        open: 4976.53,
        timestamp: 1587660120000,
        volume: 197,
      },
      {
        close: 4966.77,
        high: 4968.53,
        low: 4962.2,
        open: 4963.88,
        timestamp: 1587660180000,
        volume: 28,
      },
      {
        close: 4961.56,
        high: 4972.61,
        low: 4961.28,
        open: 4961.28,
        timestamp: 1587660240000,
        volume: 184,
      },
      {
        close: 4964.19,
        high: 4964.74,
        low: 4961.42,
        open: 4961.64,
        timestamp: 1587660300000,
        volume: 191,
      },
      {
        close: 4968.93,
        high: 4972.7,
        low: 4964.55,
        open: 4966.96,
        timestamp: 1587660360000,
        volume: 105,
      },
      {
        close: 4979.31,
        high: 4979.61,
        low: 4973.99,
        open: 4977.06,
        timestamp: 1587660420000,
        volume: 35,
      },
      {
        close: 4977.02,
        high: 4981.66,
        low: 4975.14,
        open: 4981.66,
        timestamp: 1587660480000,
        volume: 135,
      },
      {
        close: 4985.09,
        high: 4988.62,
        low: 4980.3,
        open: 4986.72,
        timestamp: 1587660540000,
        volume: 76,
      },
    ],
  },
]);

let chart

const active = ref('1M')

const type = ref('BTC')

onMounted(()=>{
    chart = init('chart_box')
    chart.applyNewData(timeData.value[0].chart_data)
    type.value = route.query.type
})



const tabTiime = (item)=>{
    chart.applyNewData(item.chart_data)
    active.value=item.time
}

const goBuy = () =>{
    router.push({
        path:"/coin_trade",
        query:{
            type:type.value
        }
    })
}
const goSell = () =>{
    router.push({
        path:"/coin_trade",
        query:{
            type:type.value
        }
    })
}
</script>


<template>
  <div class="kline">
    <div class="top">
      <div class="header">
        <div>
          <span class="material-symbols-outlined"> menu </span>
          <span class="type">{{type}}/USDT</span>
        </div>
        <span>持仓列表</span>
      </div>
      <div class="box">
        <duv class="left">
          <p>当前价</p>
          <span class="price">27944.33</span>
          <span class="parcent">+0.33%</span>
        </duv>
        <duv class="right">
          <div>
            <span>高</span>
            <p>28030.10</p>
            <span>高</span>
            <p>28036.01</p>
          </div>
          <div>
            <span>24H量</span>
            <p>894.13</p>
            <span>低</span>
            <p>2771.01</p>
          </div>
        </duv>
      </div>
    </div>
    <div class="chart">
      <div class="time">
        <span v-for="(item,index) in timeData" :key="index" @click="tabTiime(item)" :class="active===item.time?'active':''">{{item.time}}</span>
      </div>
      <div class="chart_box" id="chart_box" style="width: 100%; height:480px"></div>
    </div>
    <div class="btn">
        <button class="buy" @click="goBuy">买入</button>
        <button class="sell" @click="goSell">卖出</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
p {
  margin: 0;
}
.kline {
  width: auto;
  height: auto;
  padding: 15px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  .header {
    display: flex;
    justify-content: space-between;
    font-size: 15px;
    div {
      display: flex;
      justify-content: space-around;
      align-items: center;
      .type {
        padding-left: 5px;
      }
    }
  }
  .box {
    width: auto;
    height: 100px;
    display: flex;
    justify-content: space-between;
    margin: 15px 0px;
    .left {
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      p {
        font-size: 15px;
        color: #555;
      }
      .price {
        font-size: 18px;
        font-weight: 600;
        color: #02c289;
      }
      .parcent {
        font-size: 13px;
        font-weight: 600;
        color: #02c289;
      }
    }
    .right {
      display: flex;
      justify-content: space-between;
      span {
        font-size: 15px;
        color: #555;
      }
      p {
        font-size: 14px;
        color: #333;
        font-weight: 600;
      }
      div {
        margin: 0px 20px;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
      }
    }
  }
  .chart {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    .time {
      width: auto;
      height: 25px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .active{
        color: #1989FA;
        font-weight: 600;
      }
    }
    .chart_box {
      margin: 15px 0px;
    }
  }
  .btn{
    width: 100%;
    height: 70px;
    position: fixed;
    left: 0;
    bottom: 55px;
    display: flex;
    justify-content: space-around;
    button{
        width: 45%;
        height: 45px;
        border: 0;
        border-radius: 2px;
        color: #FFF;
    }
    .buy{
        background: #02c289;
    }
    .sell{
        background: #CD4E65;
    }
  }
}
</style>

