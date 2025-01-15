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
        <h2>Hello Vue!!!!!</h2>
        <NavbarComponent></NavbarComponent>



        <RouterView></RouterView>



    </div>


</template>

<style scoped>

</style>
