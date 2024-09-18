<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()

const activeLink = (routepath) => {
    return routepath === route.path 
}

const openMenu = ref(false);

const toggleMenu = () => {
    openMenu.value = !openMenu.value;
};
</script>

<template>
    <nav class="bg-black mx-auto rounded-3xl my-5 max-w-screen-lg">
        <div class="flex items-center justify-between p-5">
            <div class="flex items-center">
                <p class="text-white text-md font-bold md:hidden">*Asuza Frankline*</p>
            </div>
            <div class="navs hidden md:flex space-x-16">
                <router-link to="/" :class="[activeLink('/') ? 'text-orange-500 underline underline-offset-4':'text-sm text-white']">Home</router-link>
                <router-link to="/about" :class="[activeLink('/about') ? 'text-orange-500 underline underline-offset-4':'text-sm text-white']">About</router-link>
                <router-link to="/service" :class="[activeLink('/service') ? 'text-orange-500 underline underline-offset-4':'text-sm text-white']">Service</router-link>
                <p class="text-white text-md font-bold">*Asuza Frankline*</p>
                
                <router-link to="/contact" :class="[activeLink('/contact') ? 'text-orange-500 underline underline-offset-4':'text-sm text-white']">Contact</router-link>
            </div>
            
                <i class="pi pi-bars w-5 h-5 md:hidden text-white cursor-pointer" @click="toggleMenu"></i>
            
        </div>

        <!-- Mobile Menu -->
        <div v-if="openMenu" class="navs md:hidden space-y-5 p-5">
            <router-link to="/" class="text-white text-sm block">Home</router-link>
            <router-link to="/about" class="text-white text-sm block">About</router-link>
            <router-link to="/service" class="text-white text-sm block">Service</router-link>
           
            <router-link to="/contact" class="text-white text-sm block">Contact</router-link>
        </div>
    </nav>
</template>
