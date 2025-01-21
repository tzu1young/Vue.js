import { createRouter, createWebHistory } from "vue-router";
import ProductListView from "./views/ProductListView.vue";
import TravelView from "./views/TravelView.vue";
import TravelDetailView from "./views/TravelDetailView.vue";
import TravelIntroductionView from "./views/TravelIntroductionView.vue";
import TravelPolicyView from "./views/TravelPolicyView.vue";

//路由設定
//URL => Component
const routes = [
    { path: "/productlist", component: ProductListView, name: "productlist" },
    // children:[
    {
        path: "/productlist/travel",
        component: TravelView,
        name: "travel",
        redirect: "/productlist/travel/detail",
        children: [
            { path: "detail", component: TravelDetailView, name: "travel-detail" },
            { path: "introduction", component: TravelIntroductionView, name: "travel-introduction" },
            { path: "policy", component: TravelPolicyView, name: "travel-policy" }
        ]
    },

    //category1
    { path: '/:categoryid/', name: 'category1', component: TravelView, redirect: "/productlist/travel/detail", props: true },
    { path: '/:categoryid/', name: 'category2', component: TravelView, props: true },
    { path: '/:categoryid/', name: 'category3', component: TravelView, props: true },
    { path: '/:categoryid/', name: 'category4', component: TravelView, props: true },
    { path: '/:categoryid/', name: 'category5', component: TravelView, props: true },
    { path: '/:categoryid/', name: 'category6', component: TravelView, props: true },
    { path: '/:categoryid/', name: 'category7', component: TravelView, props: true },
    { path: '/:categoryid/', name: 'category8', component: TravelView, props: true },
    // { path: '/:categoryid/', name: 'category(.*)*', component: TravelView, props: true }, name不支持正則表達式


]

const router = createRouter({
    history: createWebHistory(),//指定用哪一種方式產生歷史紀錄
    routes //指定路由設定，參數名稱跟路由設定的變數名稱一樣
})

export default router