<script setup>

</script>

<template>
  <section class="hero rounded-b-3xl shadow-md py-6">
    <div class="text-center">
      <p class="font-semibold mb-2">Holla<i class="pi pi-thumbs-up-fill text-yellow-600"></i>, Am Frankline Asuza and i'm a</p>
      <h1 class="font-bold text-4xl md:text-6xl">UI/UX Designer <br/> based in Kenya</h1>
      <p class="font-semibold my-3 text-gray-500">i love designing websites and user interfaces,doing freelance work <br/> and focusing on designing digital products that are easy on users and customers</p>
    </div>
    <div class="btns text-center my-3">
      <button class="p-3 rounded-3xl text-white bg-orange-500">Check my project</button>
      <button class="p-3 rounded-3xl text-orange-500 border-2 border-orange-500 ml-3"><i class="pi pi-envelope"></i> EMail me</button>
    </div>
  </section>
  <section class="services bg-black p-9 rounded-b-3xl">
    <div class="mb-8">
      <h1 class="text-2xl md:text-5xl text-white text-center font-bold">What Can I Do For You</h1>
    </div>
    <div class="cards flex flex-wrap gap-3 p-4 md:gap-4 items-center justify-center">
      <div class="card bg-white rounded-xl p-3 text-center">
        <i class="pi pi-image mb-3 text-4xl"></i>
        <p class="font-bold text-2xl mb-3">UI/UX Design</p>
        <p class="text-gray-500 font-bold mb-3">Designing interfaces that are effective and easy to use by users and customers</p>
      </div>
      <div class="card bg-white rounded-xl p-3 text-center">
        <i class="pi pi-bolt mb-3 text-4xl"></i>
        <p class="font-bold text-2xl mb-3">Graphic Design</p>
        <p class="text-gray-500 font-bold mb-3">Convey Information about product in a unique and creative way through design</p>
      </div>
      <div class="card bg-white rounded-xl p-3 text-center">
        <i class="pi pi-code mb-3 text-4xl"></i>
        <p class="font-bold text-2xl mb-3">Design Service</p>
        <p class="text-gray-500 font-bold mb-3">We can help and provide value for your business through website and mobile app</p>
      </div>
    </div>

  </section>
  <section>
    <div class="slider-container">
    <label for="slider" class="slider-label">Select Value</label>
    <input type="range" id="slider" name="slider" min="0" max="100" value="50" class="slider">
    <span id="slider-value" class="slider-value">50</span>
</div>

  </section>
</template>

<style scoped>
hero{
  background-color: #e8e8e8;
}
.card{
  height: 200px;
  width:350px
  
}
</style>
