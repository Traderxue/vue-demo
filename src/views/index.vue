<script setup>
import { ref } from "vue";
import { showToast } from "vant";

const active = ref(0);
const loading = ref(false);

const onRefresh = () => {
  setTimeout(() => {
    showToast("刷新成功");
    loading.value = false;
    window.location.reload();
  }, 1000);
};
</script>

<template>
  <van-pull-refresh v-model="loading" @refresh="onRefresh">
    <RouterView />
  </van-pull-refresh>
  <div class="nav">
    <van-tabbar v-model="active" route>
      <van-tabbar-item to="/home">
        <span class="material-symbols-outlined"> home </span>
        <br />
        <span>{{$t('home.title')}}</span>
      </van-tabbar-item>
      <van-tabbar-item to="/trade">
        <span class="material-symbols-outlined"> monitoring </span>
        <br />
        <span>{{$t('trade.title')}}</span>
      </van-tabbar-item>
      <van-tabbar-item to="/kline">
        <span class="material-symbols-outlined"> candlestick_chart </span>
        <br />
        <span>{{$t('quote.title')}}</span>
      </van-tabbar-item>
      <van-tabbar-item to="/wallet">
        <span class="material-symbols-outlined"> account_balance_wallet </span>
        <br />
        <span>{{$t('wallet.title')}}</span>
      </van-tabbar-item>
      <van-tabbar-item to="/mine">
        <span class="material-symbols-outlined"> person </span>
        <br />
        <span>{{$t('mine.title')}}</span>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style lang="scss" scoped>
.van-tabbar-item {
  background: #f5f5f5;
}
</style>