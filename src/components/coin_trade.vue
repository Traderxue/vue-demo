<script setup>
import { onMounted, ref } from "vue";
import { useRouter,useRoute } from "vue-router";

const router = useRouter();

const route = useRoute()

const selectedPrice = ref('market_price')

const selectedLever = ref('10x')

const goBack = () => {
  router.back();
};


onMounted(()=>{
})
</script>

<template>
  {{route.value}}
  <div class="coin_trade">
    <div class="header">
      <span class="material-symbols-outlined iconfont" @click="goBack">
        chevron_left
      </span>
      <span class="title">币币交易</span>
    </div>
    <div class="top">
      <span>{{route.query.type}}/USDT</span>
      <p>{{route.query.parcent}}</p>
    </div>
    <div class="main">
      <div class="left">
        <div class="btn">
          <span class="buy">买入</span>
          <span class="sell">卖出</span>
        </div>
        <div class="limit_price">
          <select id="limit" v-model="selectedPrice">
            <option value="market_price">市价</option>
            <option value="limit_price">限价</option>
          </select>
          <input type="text" placeholder="请输入数量USDT"/>
          <hr>
          <select id="limit" v-model="selectedLever">
            <option value="10x">10x</option>
            <option value="50x">50x</option>
            <option value="100x">100x</option>
            <option value="200x">200x</option>
          </select>
        </div>
        <p class="canuse">可用额度 0.000USDT</p>
        <button class="buybtc">买入BTC</button>
      </div>
      <div class="right">
        <div class="header">
          <span>价格(USDT)</span>
          <span>数量(BTC)</span>
        </div>
        <div class="right_top">
          <div>
            <span>27913.1</span>
            <span>0.014</span>
          </div>
          <div>
            <span>27913.1</span>
            <span>0.014</span>
          </div>
          <div>
            <span>27913.1</span>
            <span>0.014</span>
          </div>
        </div>
        <span class="right_mid">{{route.query.up_price}}</span>
        <div class="bottom">
          <div>
            <span>27951.1</span>
            <span>0.014</span>
          </div>
          <div>
            <span>27969.1</span>
            <span>0.026</span>
          </div>
          <div>
            <span>27945.1</span>
            <span>0.041</span>
          </div>
        </div>
      </div>
    </div>
    <div class="last">
      <span class="entrust">当前委托(0)</span>
      <div>
        <span class="material-symbols-outlined"> list_alt </span>
        <span>全部</span>
      </div>
    </div>
  </div>
  <div class="box">
    <van-empty description="暂无记录" />

  </div>
</template>

<style lang="scss" scoped>
.coin_trade {
  width: auto;
  height: auto;
  padding: 15px;
  .header {
    height: 25px;
    display: flex;
    align-items: center;
    position: relative;
    .title {
      margin: 0 auto;
      font-weight: 500;
    }
    .iconfont {
      font-size: 33px;
      position: absolute;
    }
  }
  .top {
    padding: 10px;
    display: flex;
    align-items: center;
    span {
      color: #333;
      font-weight: 600;
      padding-right: 10px;
    }
    p {
      color: #12b886;
      font-size: 13px;
      font-weight: 600;
    }
  }
  .main {
    display: flex;
    justify-content: space-between;
    .left {
      width: 45%;
      .btn {
        display: flex;
        justify-content: space-around;
        font-size: 14px;
        font-weight: 600;
        .buy{
            width: 50%;
            height: 35px;
            background: #12b886;
            text-align: center;
            line-height: 35px;
            color: #fff;
        }
        .sell{
            width: 50%;
            height: 35px;
            background: #D74543;
            text-align: center;
            line-height: 35px;
            color: #fff;
        }
      }
      input {
        width: 90%;
        outline: none;
        height: 35px;
        border: 0;
      }
      #limit {
        outline: none;
        width: 100%;
        height: 35px;
        padding: 0px 15px;
        margin: 10px 0px;
      }
      .canuse{
        font-size: 13px;
      }
      .buybtc{
        width: 100%;
        height: 40px;
        background: #12b886;
        color: #fff;
        border: 0;
      }
    }
    .right {
      width: 45%;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      padding: 5px;
      .header {
        display: flex;
        justify-content: space-between;
        font-size: 14px;
      }
      .right_top {
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        div {
          display: flex;
          justify-content: space-between;
          padding: 5px 0px;
        }
      }
      .right_mid {
        font-weight: 600;
        color: #12b886;
        font-size: 18px;
        padding: 5px 0px;
      }
      .bottom {
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        div {
          display: flex;
          justify-content: space-between;
          padding: 5px 0px;
        }
      }
    }
  }
  .last{
    display: flex;
    justify-content: space-between;
    margin-top: 25px;
    .entrust{
        font-size: 16px;
        font-weight: 500;
    }
    div{
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: 14px;
        color: #333;
        span{
            padding: 0px 2px;
        }
    }
  }
  .box{
    margin: 15px 0px;
  }
}
</style>