<script setup>
import { ref } from 'vue';

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
                <router-link to="/" class="text-white text-sm">Home</router-link>
                <router-link to="/about" class="text-white text-sm">About</router-link>
                <router-link to="/service" class="text-white text-sm">Service</router-link>
                <p class="text-white text-md font-bold">*Asuza Frankline*</p>
                <router-link class="text-white text-sm">Resume</router-link>
                <router-link class="text-white text-sm">Project</router-link>
                <router-link class="text-white text-sm">Contact</router-link>
            </div>
            
                <i class="pi pi-bars w-5 h-5 md:hidden text-white cursor-pointer" @click="toggleMenu"></i>
            
        </div>

        <!-- Mobile Menu -->
        <div v-if="openMenu" class="navs md:hidden space-y-5 p-5">
            <router-link to="/" class="text-white text-sm block">Home</router-link>
            <router-link to="/about" class="text-white text-sm block">About</router-link>
            <router-link to="/service" class="text-white text-sm block">Service</router-link>
            <router-link class="text-white text-sm block">Resume</router-link>
            <router-link class="text-white text-sm block">Project</router-link>
            <router-link class="text-white text-sm block">Contact</router-link>
        </div>
    </nav>
</template>
