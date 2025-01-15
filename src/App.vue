<script setup>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.js'


import NavbarComponent from './components/NavbarComponent.vue';

import { ref } from 'vue';


const show = ref(true)

</script>

<template>
    <div class="container">
        
        <NavbarComponent></NavbarComponent>



        <RouterView></RouterView>



    </div>


</template>

<style scoped>

</style>
