<script setup> 
import { ref } from "vue";

const walletData = ref([
    {
        type:"BTC",
        use:1000,
        lock:100000,
        convert:'0.000'
    },
    {
        type:"ETH",
        use:1000,
        lock:1000000,
        convert:'0.000'
    },
    {
        type:"APE",
        use:1200,
        lock:1000000,
        convert:'0.000'
    },
    {
        type:"DOGE",
        use:5000,
        lock:2000,
        convert:'0.12'
    }
])
</script>
<template>
  <div class="coin">
    <div class="box"  v-for="(item,index) in walletData" :key="index">
      <div class="top">
        <span class="span1">{{item.type}}</span>
        <span class="material-symbols-outlined"> chevron_right </span>
      </div>
      <div class="bottom">
        <div>
          <span>可用额度</span>
          <span class="mid">锁定</span>
          <span class="convert">折合$</span>
        </div>
        <div>
          <span>{{item.use}}</span>
          <span class="mid">{{item.lock}}</span>
          <span class="convert">{{item.convert}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.coin {
  height: auto;
  width: auto;
  padding: 15px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding-bottom: 70px;
  .box {
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    background: #f7f6fb;
    box-sizing: border-box;
    padding: 15px;
    margin: 10px 0px;
    .top {
      display: flex;
      justify-content: space-between;
      padding-bottom: 10px;
      .span1{
        font-weight: 600;
        color: #1891DF;
      }
    }
    .bottom {
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      div{
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        padding: 5px 0px;
        span{
            display: inline-block;            
            width: 33%;
        }
        .convert{
            text-align: right;
        }
        .mid{
            text-align: center;
        }
      }
    }
  }
}
</style>