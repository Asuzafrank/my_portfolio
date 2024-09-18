<script setup>
import { ref } from 'vue';

const hoveredIcon = ref(null);

const handleMouseOver = (icon) => {
    hoveredIcon.value = icon;
};

const handleMouseOut = () => {
    hoveredIcon.value = null;
};

const sendEmail = () => {
    window.location.href = 'mailto:asuzafrank12@gmail.com?subject=Hiring Inquiry';
};

const downloadCv = () => {
    const link = document.createElement('a');
    link.href = '../assets/src/assets/Frankline amiani asuza cv.docx';
    link.download = 'Frankline amiani asuza cv.docx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
</script>

<template>
    <section class="p-4 sm:p-6 lg:p-8">
        <div class="flex flex-col lg:flex-row lg:space-x-6 items-center lg:items-start">
            <!-- Social Links Section -->
            <div class="flex flex-col space-y-4 lg:space-y-6 text-2xl sm:text-3xl lg:text-4xl lg:w-1/3">
                <div class="flex space-x-4 sm:space-x-5 items-center">
                    <i 
                        @mouseover="() => handleMouseOver('facebook')" 
                        @mouseleave="handleMouseOut" 
                        class="pi pi-facebook cursor-pointer"
                    ></i>
                    <p v-if="hoveredIcon === 'facebook'" class="text-lg text-pink-500">FaceBook</p>
                </div>
                <div class="flex space-x-4 sm:space-x-5 items-center">
                    <i 
                        @mouseover="() => handleMouseOver('twitter')" 
                        @mouseleave="handleMouseOut" 
                        class="pi pi-twitter cursor-pointer"
                    ></i>
                    <p v-if="hoveredIcon === 'twitter'" class="text-lg text-pink-500">Twitter</p>
                </div>
                <div class="flex space-x-4 sm:space-x-5 items-center">
                    <i 
                        @mouseover="() => handleMouseOver('discord')" 
                        @mouseleave="handleMouseOut" 
                        class="pi pi-discord cursor-pointer"
                    ></i>
                    <p v-if="hoveredIcon === 'discord'" class="text-lg text-pink-500">Discord</p>
                </div>
                <div class="flex space-x-4 sm:space-x-5 items-center">
                    <i 
                        @mouseover="() => handleMouseOver('pinterest')" 
                        @mouseleave="handleMouseOut" 
                        class="pi pi-pinterest cursor-pointer"
                    ></i>
                    <p v-if="hoveredIcon === 'pinterest'" class="text-lg text-pink-500">Pinterest</p>
                </div>
            </div>

            <!-- Main Content Section -->
            <div class="text-center lg:text-left lg:w-1/3">
                <p class="text-lg sm:text-xl">Hi There</p>
                <h2 class="font-bold text-3xl sm:text-4xl lg:text-5xl mb-3">I am Frankline Asuza</h2>
                <p class="font-thin text-xl sm:text-2xl lg:text-3xl mb-3">A UI/UX Designer</p>
                <div class="flex flex-col sm:flex-row sm:space-x-4 justify-center lg:justify-start">
                    <button 
                        class="bg-pink-400 p-3 text-white rounded-lg mb-3 sm:mb-0"
                        @click="sendEmail"
                    >
                        Hire Me
                    </button>
                    <button 
                        class="bg-black p-3 text-white text-sm rounded-lg"
                        @click="downloadCv"
                    >
                        Download CV
                    </button>
                </div>
            </div>

            <!-- Image Section -->
            <div class="w-full lg:w-1/3 flex justify-center lg:justify-end">
                <img src="../assets/buba.jpg" alt="Profile Image" class="w-full max-w-xs sm:max-w-sm lg:max-w-md h-auto border border-pink-600 p-3 border-e-4 rounded-lg">
            </div>
        </div>
    </section>
</template>

<style scoped>
html {
    background-color: rgb(0, 0, 0);
}

.btn {
    clip-path: ellipse(70% 50%);
}
</style>
