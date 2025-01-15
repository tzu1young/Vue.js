<script setup>
import ProductListNavbarComponent from '@/components/ProductListNavbarComponent.vue';

const categories = reactive([])
const products = reactive({})
const datas = ref({ "categoryid": 0, "keyword": "", "start": 0, "rows": 0, "dir": false, "sort": "productid" })

const loadSpots = async () => {
    const API_URL = `${import.meta.env.VITE_API_SPOTURL}/insuranceSpring_productlist/productlist/GetAllProduct`
    const response = await axios.post(API_URL, datas.value)
    Object.assign(products, response.data)

}

const CategoryHandler = id => {
    datas.value.categoryid = id
    datas.value.start = 1
}

onMounted(async () => {
    loadSpots();
})



</script>

<template>
    <RouterLink :to="{ name: 'travel' }">旅平險</RouterLink>
    <div>
        <h2>產品櫥窗</h2>
        <ProductListNavbarComponent @categoryClick="CategoryHandler"></ProductListNavbarComponent>
    </div>
    <div class="row row-cols-1 row-cols-md-3 g-4 mt-3">
        <div class="col" v-for="{ spotId, spotImage, spotTitle, spotDescription, address } in products.list" :key="spotId">
            <div class="card h-100">
                <img :src="spotImage" class="card-img-top" :alt="spotTitle">
                <div class="card-body">
                    <h5 class="card-title">{{ spotId }}-{{ spotTitle }}</h5>
                    <p class="card-text">{{ spotDescription.length <= 100 ? spotDescription :
                        spotDescription.substring(0, 100) }}...</p>
                </div>
                <div class="card-footer">
                    <small class="text-body-secondary">{{ address }}</small>
                </div>
            </div>
        </div>
    </div>


</template>

<style lang="css" scoped></style>