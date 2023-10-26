import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"",
      component:()=>import("@/views/index.vue"),
      children:[
        {
          path:"",
          component:()=>import("@/views/Home/home.vue")
        },
        {
          path:"/home",
          component:()=>import("@/views/Home/home.vue")
        },
        {
          path:"/trade",
          component:()=>import("@/views/Trade/trade.vue"),
          children:[
            {
              path:"",
              component:()=>import("@/views/Trade/components/category.vue")
            },
            {
              path:"/category",
              component:()=>import("@/views/Trade/components/category.vue")
            },
            {
              path:"/optional",
              component:()=>import("@/views/Trade/components/optional.vue")
            },
          ]
        },
        {
          path:"/kline",
          component:()=>import("@/components//kline.vue")
        },
        {
          path:"/wallet",
          component:()=>import("@/views/Wallet/wallet.vue"),
          children:[
            {
              path:"",
              component:()=>import("@/views/Wallet/components/coin.vue")
            },
            {
              path:"/coin",
              component:()=>import("@/views/Wallet/components/coin.vue")
            },
            {
              path:"/contract",
              component:()=>import("@/views/Wallet/components/contract.vue")
            },
            {
              path:"/currency",
              component:()=>import("@/views/Wallet/components/currency.vue")
            },
            {
              path:"/second",
              component:()=>import("@/views/Wallet/components/second_contract.vue")
            }              
          ]
        },
        {
          path:"/mine",
          component:()=>import("@/views/Mine/mine.vue")
        }
      ]
    },
    {
      path:"/login",
      component:()=>import("@/views/Login/login.vue")
    },
    {
      path:"/coin_trade",
      component:()=>import("@/components/coin_trade.vue")
    },
   
  ]
})

export default router
