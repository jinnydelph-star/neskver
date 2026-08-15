<script setup>
// Map section - static hand-drawn map with baked-in text
</script>

<template>
  <section id="map" class="relative w-full bg-white py-8">
    <div class="max-w-[1920px] mx-auto">
      <!-- Map title -->
      <h2 class="font-brush text-[70px] text-black text-center leading-tight mb-6 px-4">
        карта (не)скверных мест на большой охте
      </h2>

      <!-- Map image (already contains all text labels, route, location markers) -->
      <div class="relative w-full max-w-[1600px] mx-auto px-4">
        <img
          src="/assets/map.webp"
          alt="Карта (не)скверных мест на Большой Охте с маршрутом и достопримечательностями"
          class="w-full h-auto rounded-lg"
        />
      </div>
    </div>
  </section>
</template>
