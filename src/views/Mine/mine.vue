<script setup>
import { ref } from "vue";

const listData = ref([
    {
        imgUrl:"http://127.0.0.1:5173/mine_rz.png",
        left:"初级认证",
        right:"去认证"
    },
    {
        imgUrl:"http://127.0.0.1:5173/mine_trade.png",
        left:"交易记录",
        right:"去认证"
    },
    {
        imgUrl:"http://127.0.0.1:5173/mine_invite.png",
        left:"邀请好友"
    },
    {
        imgUrl:"http://127.0.0.1:5173/mine_record.png",
        left:"账单记录"
    },
    {
        imgUrl:"http://127.0.0.1:5173/mine_kf.png",
        left:"客服"
    },
    {
        imgUrl:"http://127.0.0.1:5173/mine_yhk.png",
        left:"银行卡"
    },
    {
        imgUrl:"http://127.0.0.1:5173/mine_fk.png",
        left:"意见反馈"
    }

])
</script>

<template>
  <div class="mine">
    <div class="top">
      <div class="header">
        <span class="material-symbols-outlined"> settings </span>
      </div>
      <div class="acvotor">
        <img src="@/assets/img/acvotor.png" alt="" />
        <span>ID: 256413</span>
        <span>信用分: 100</span>
      </div>
    </div>
    <div class="main">
      <div class="box" v-for="(item,index) in listData" :key="index">
        <div>
          <img :src="item.imgUrl" alt="" />
          <span class="span1">{{item.left}} </span>
        </div>
        <div>
          <span v-if="item.right">{{item.right}}</span>
          <span class="material-symbols-outlined"> chevron_right </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mine {
  width: auto;
  height: 100%;
  padding: 15px;
  .top {
    margin: -15px;
    padding: 15px;
    width: auto;
    height: 160px;
    background: url("@/assets/img/wallet_bg.png");
    .header {
      height: 25px;
      width: auto;
      text-align: right;
      color: #555;
    }
    .acvotor {
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      align-items: center;
      img {
        width: 45px;
        height: 45px;
        border-radius: 50%;
      }
      span {
        display: inline-block;
        padding-top: 15px;
        font-size: 15px;
        font-weight: 600;
        color: #555;
      }
    }
  }
  .main {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    margin-top: 35px;
    background: #f7f6fb;
    padding: 20px 5px;
    border-radius: 10px;
    .box{
        display: flex;
        justify-content: space-between;
        align-items: center;
        div{
            display: flex;
            justify-content: space-around;
            align-items: center;
            padding: 5px 0px;
            margin-top: 15px;
            margin-bottom: 5px;
            img{
                width: 25px;
                height: 25px;
            }
            .span1{
                font-size: 15px;
                padding: 0px 5px;
            }
        }
    }
  }
}
</style>