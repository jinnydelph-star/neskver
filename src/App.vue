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
      <MapSection />
      <LocationsSection />
      <GallerySection />
    </main>
    <FooterSection />
  </div>
</template>
