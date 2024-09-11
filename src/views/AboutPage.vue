<script setup>
</script>
<template>
    <section>
        <div class="grid grid-cols-1 md:grid-cols-2 p-6 m-6">
            <div class="sm:text-center md:text-left">
                <img src="../assets/buba.jpg" alt="" class="rounded-full h-14 object-cover">
                <h1 class="text-3xl md:text-6xl font-bold">Hello!I'm Frankline <br> Asuza</h1>
            </div>
            <div>
                <h1 class="font-bold md:text-5xl text-2xl">A Website designer based in Nakuru, Kenya</h1>
                <p class="mt-2 text-gray-500">Passionate creating great experiences for digital product</p>
            </div>
        </div>
    </section>
    <section class="bg-white p-9">
        
        <div class="grid grid-cols-1 md:grid-cols-50/50">
            <div class="">
                <h1 class="text-2xl font-bold my-3">Working experience</h1>
                <div class="mt-4">
                    <p class="text-sm">Software engineer at <span class="font-bold">Macos</span></p>
                    <p class="">February 2020 - February 2022</p>
                </div>
                <hr class="border border-gray-600 w-64 my-3">
                <div class="mt-4">
                    <p class="text-sm">ICT Teacher at <span class="font-bold">Shinners Boys High School</span></p>
                    <p class="">February 2020 - February 2022</p>
                </div>
            </div>
            <div class="">
                <h1 class="text-2xl font-bold my-3">Awards & Recognition</h1>
                <div class="mt-4">
                    <p class="text-sm">Website of the day at <span class="font-bold">Awwwwards</span></p>
                    <p class="">November 2022</p>
                </div>
                <hr class="border border-gray-600 w-64 my-3">
                <div class="mt-4">
                    <p class="text-sm">Best Visual Design at <span class="font-bold">Webby Award</span></p>
                    <p class="">February 2022</p>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="text-center p-9">
            <p class="my-3">Have a project</p>
            <h1 class="text-4xl font-bold mb-4">Let's talk with me</h1>
            <button class="rounded-lg text-white bg-black p-3 mb-4">Talk with me</button>
            <p class="text-gray-500">My local Time <span class="font-bold text-black">{{ new Date().toLocaleTimeString() }}</span></p>
        </div>
    </section>
</template>