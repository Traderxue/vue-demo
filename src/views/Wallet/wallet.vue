<script setup>
import coin from "@/views/Wallet/components/coin.vue"
import contract from "@/views/Wallet/components/contract.vue"
import currency from "@/views/Wallet/components/currency.vue"
import secondContract from "@/views/Wallet/components/second_contract.vue"

import { ref } from "vue";

const today_income = ref(0);

const total_income = ref(0);

const total = ref(0);

const  active = ref(0)
</script>

<template>
  <div class="wallet">
    <div class="top">
      <span class="span1">总折合资产($)</span>
      <span class="span2">{{ total.toFixed(4) }}</span>
      <div class="bottom">
        <div>
          <p>今日收益</p>
          <span>{{ today_income }}</span>
        </div>
        <div>
          <p>总收益</p>
          <span>{{ total_income }}</span>
        </div>
      </div>
    </div>
    <div class="banner">
      <div>
        <img src="@/assets/img/wallet_cz.png" alt="" />
        <span>充值</span>
      </div>
      <div>
        <img src="@/assets/img/wallet_tx.png" alt="" />
        <span>提现</span>
      </div>
      <div>
        <img src="@/assets/img/wallet_hz.png" alt="" />
        <span>划转</span>
      </div>
    </div>
    <div class="main">
      <van-tabs v-model:active="active">
        <van-tab title="币币"><coin /></van-tab>
        <van-tab title="合约"><contract /></van-tab>
        <van-tab title="法币"><currency /></van-tab>
        <van-tab title="秒合约"><secondContract /></van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wallet {
  padding: 15px;
  .top {
    width: auto;
    height: 180px;
    background: url("@/assets/img/wallet_bg.png");
    margin: -15px;
    padding: 15px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    color: #555;
    .bottom {
      width: 100%;
      display: flex;
      justify-content: space-around;
      text-align: center;
      font-weight: 600;
    }
    .span1 {
      font-weight: 600;
      font-size: 18px;
    }
    .span2 {
      font-weight: 600;
      font-size: 20px;
    }
  }
  .banner {
    width: auto;
    height: 70px;
    margin: 20px 0px;
    display: flex;
    justify-content: space-around;
    padding-top: 15px;
    div {
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      text-align: center;
      font-size: 15px;
      img {
        width: 40px;
        height: 35px;
      }
    }
  }
}
</style>