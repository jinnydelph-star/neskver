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
      <div class="relative w-full overflow-hidden fl-pt-[36px/96px] fl-pb-[36px/96px]">
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
              d="M-77 230.515C-77 230.515 92.8156 142.32 245.5 90.3514C402.488 36.9179 531.075 6.10685 697 0.351412C843.652 -4.7355 1042.66 46.3817 1182.5 90.352C1410.24 161.959 1481.05 180.903 1720 177.851C1857.77 176.092 2002 167.225 2002 167.225V4824.96C2002 4824.96 1801.02 4956.75 1654 4972.8C1454.96 4994.52 1363.6 4832.76 1163.5 4824.96C944.449 4816.42 860.136 4953.58 643.5 4920.39C508.829 4899.75 432.775 4825.78 296.5 4824.96C133.207 4823.97 -77 5010.87 -77 5010.87V230.515Z"
              fill="#F4E2D0"
            />
          </svg>
        </div>

        <div class="relative z-10">
          <MapSection />
          <LocationsSection />
        </div>
      </div>

      <GallerySection />
    </main>
    <FooterSection />
  </div>
</template>
