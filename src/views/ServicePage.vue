<script setup>
import { ref } from 'vue';
const hoveredIcon = ref(null)

const handleMouseOver = (icon) => {
    hoveredIcon.value = icon
}

const handleMouseOut = () => {
    hoveredIcon.value = null
}

const downloadCv = () => {
    const link = document.createElement('a')
    link.href = '../assets/src/assets/Frankline amiani asuza cv.docx'
    link.download = 'Frankline amiani asuza cv.docx'
    document.body.appendChild(link)
    link.click();
    document.body.removeChild(link)
}
</script>
<template>
    <section class="" style="margin-left: 30px; margin-right: 30px;">
        
        <div class="flex flex-col-3 items-center justify-around">
            <div class="social-links flex flex-col space-y-7 text-3xl">
                <div class="flex space-x-5">
                    <i @mouseover="() => handleMouseOver('facebook')" @mouseleave="handleMouseOut" class="pi pi-facebook"></i>
                    <p v-if="hoveredIcon === 'facebook'" class="text-lg text-pink-500">FaceBook</p>
                </div>
                <div class="flex space-x-5">
                    <i @mouseover="() => handleMouseOver('twitter')" @mouseleave="handleMouseOut" class="pi pi-twitter"></i>
                    <p v-if="hoveredIcon === 'twitter'" class="text-lg text-pink-500">Twitter</p>
                </div>
                <div class="flex space-x-5">
                    <i @mouseover="() => handleMouseOver('discord')" @mouseleave="handleMouseOut" class="pi pi-discord"></i>
                    <p v-if="hoveredIcon === 'discord'" class="text-lg text-pink-500">Discord</p>
                </div>
                <div class="flex space-x-5">
                    <i @mouseover="() => handleMouseOver('pinterest')" @mouseleave="handleMouseOut" class="pi pi-pinterest"></i>
                    <p v-if="hoveredIcon === 'pinterest'" class="text-lg text-pink-500">Pinterest</p>
                </div>
                
            </div>
            <div>
              <p>Hi There</p>
              <h2 class="font-bold text-4xl mb-3">I am Frankline Asuza <br></h2>
              <p class="font-thin text-3xl mb-3">A U1/UX Designer</p> 
              
              <button class="bg-pink-400 p-3 text-white btn">Hire Me</button>
              <button class=" bg-black p-3 ml-5 text-white text-sm btn" @click="downloadCv">Download Cv</button>
            </div>
            <div>
                <img src="../assets/buba.jpg" alt="" class="h-96 border border-pink-600 p-3 border-e-4">
            </div>
        </div>
    </section>
    
</template>
<style scoped>
html{
    background-color: rgb(0, 0, 0);
}
.btn{
    clip-path: ellipse(70% 50%);
}

</style>