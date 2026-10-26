<script setup>
import AppHeader from './components/AppHeader.vue'
import HeroBanner from './components/HeroBanner.vue'
import AboutSection from './components/AboutSection.vue'
import MapSection from './components/MapSection.vue'
import LocationsSection from './components/LocationsSection.vue'
import GallerySection from './components/GallerySection.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<template>
  <div class="min-h-screen bg-white">
    <AppHeader />
    <main>
      <HeroBanner />
      <AboutSection />
      
      <!-- Combined Map and Locations wrapper with adaptive wavy background -->
      <div class="relative w-full overflow-hidden fl-pt-[130px/320px] fl-pb-[36px/96px]">
        <!-- Adaptive wavy background SVG covering both Map and Locations -->
        <div class="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
          <svg
            class="w-full h-full block"
            viewBox="-77 0 2079 5011"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-77 230.515C-77 230.515 92.8156 142.32 245.5 90.3514C402.488 36.9179 531.075 6.10685 697 0.351412C843.652 -4.7355 1042.66 46.3817 1182.5 90.352C1410.24 161.959 1481.05 180.903 1720 177.851C1857.77 176.092 2002 167.225 2002 167.225V5011H-77V230.515Z"
              fill="#F4E2D0"
            />
          </svg>
        </div>

        <div class="relative z-10">
          <MapSection />
          <LocationsSection />
          <section id="walk" class="walk-section max-w-[1920px] mx-auto px-[4%] md:px-[5%] fl-pt-[48px/120px] fl-pb-[24px/64px]" aria-labelledby="walk-title">
            <h2 id="walk-title" class="walk-title font-brush text-black text-center leading-tight tracking-tight m-0">
              Прогулка по Большой Пороховской улице
            </h2>
            <img
              src="/assets/bolshaya-porokhovskaya-transparent.png"
              alt="Нарисованная карта Большой Пороховской улицы с маршрутом, выделенным оранжевым мелком"
              width="1680"
              height="938"
              class="block w-full h-auto object-contain fl-mt-[24px/56px]"
              loading="lazy"
            />
          </section>
        </div>
      </div>

      <GallerySection />
    </main>
    <FooterSection />
  </div>
</template>

<style scoped>
.walk-section {
  container-type: inline-size;
  scroll-margin-top: clamp(64px, 9vw, 160px);
}
.walk-title {
  font-size: min(4.6cqw, 68px);
  white-space: nowrap;
}
</style>

