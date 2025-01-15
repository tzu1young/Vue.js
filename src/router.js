import { createRouter, createWebHistory } from "vue-router";
import ProductListView from "./views/ProductListView.vue";
import TravelView from "./views/TravelView.vue";

//路由設定
//URL => Component
const routes = [
    { path: "/productlist", component: ProductListView, name: "productlist"},
        // children:[
    { path: "/productlist/travel", component: TravelView, name: "travel"}
        
     
    
]

const router = createRouter({
    history: createWebHistory(),//指定用哪一種方式產生歷史紀錄
    routes //指定路由設定，參數名稱跟路由設定的變數名稱一樣
})

export default router