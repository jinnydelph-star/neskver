<script setup>
// Map section — hand-drawn interactive map illustration of Bolshaya Okhta
</script>

<template>
  <section id="map" class="relative w-full fl-pb-[16px/36px]">
    <div class="max-w-[1920px] mx-auto">
      <!-- Map title -->
      <h2 class="relative z-10 font-brush fl-text-[19px/64px] text-black text-center leading-tight mb-0 px-4 tracking-tight">
        карта (не)скверных мест на большой охте
      </h2>

      <!-- Map image (contains street names, route, hand-drawn markers) -->
      <div class="map-artwork relative w-full max-w-[1600px] mx-auto px-4">
        <img
          src="/assets/map.webp"
          alt="Карта (не)скверных мест на Большой Охте с маршрутом и достопримечательностями"
          class="w-full h-auto rounded-lg"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
#map {
  scroll-margin-top: clamp(110px, 12vw, 230px);
}
.map-artwork {
  margin-top: clamp(-96px, -5vw, -24px);
}
</style>
