<script setup>
// Map section — hand-drawn interactive map illustration of Bolshaya Okhta
</script>

<template>
  <section id="map" class="relative w-full bg-white fl-py-[20px/48px]">
    <div class="max-w-[1920px] mx-auto">
      <!-- Map title -->
      <h2 class="font-brush fl-text-[32px/80px] text-black text-center leading-tight fl-mb-[16px/36px] px-4 tracking-tight">
        карта (не)скверных мест на большой охте
      </h2>

      <!-- Map image (contains street names, route, hand-drawn markers) -->
      <div class="relative w-full max-w-[1600px] mx-auto px-4">
        <img
          src="/assets/map.webp"
          alt="Карта (не)скверных мест на Большой Охте с маршрутом и достопримечательностями"
          class="w-full h-auto rounded-lg shadow-sm"
        />
      </div>
    </div>
  </section>
</template>
