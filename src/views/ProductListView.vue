<script setup>
import ProductListNavbarComponent from '@/components/ProductListNavbarComponent.vue';
import axios from 'axios';
import { onMounted } from 'vue';
import { ref } from 'vue';
import { reactive } from 'vue';

const categories = reactive([{ id: 0, name: '全部' }])
const products = reactive({})
const datas = ref({ "categoryid": 0, "is_feature": false})

const loadProducts = async () => {
    const BASE_URL = import.meta.env.VITE_APIURL
    const API_URL = `${BASE_URL}/insuranceSpring_productlist/productlist/GetAllProduct`
    const response = await axios.get(API_URL, datas.value)
    Object.assign(products, response.data)
    console.log(products);
    

}

const CategoryHandler = id => {
    datas.value.categoryid = id
}

onMounted(async () => {
    loadProducts();
})



</script>

<template>
    <RouterLink :to="{ name: 'travel' }">旅平險</RouterLink>
    <div>
        <h2>產品櫥窗</h2>
        <ProductListNavbarComponent @categoryClick="CategoryHandler"></ProductListNavbarComponent>
    </div>
    <div class="row row-cols-1 row-cols-md-3 g-4 mt-3">
        <div class="col" v-for="product in products" :key="product.productid">
            <div class="card h-100">
                <img :src="product.productImage" class="card-img-top" :alt="product.productname">
                <div class="card-body">
                    <h5 class="card-title">{{ product.productname }}</h5>
                    <!-- <p class="card-text">{{ product.productDescription.length <= 100 ? product.productDescription :
                        product.productDescription.substring(0, 100) }}...</p> -->
                </div>
            </div>
        </div>
    </div>


</template>

<style lang="css" scoped></style>