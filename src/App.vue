<script setup>
import { ref } from 'vue'
import AppHeader from './components/AppHeader.vue'
import HeroBanner from './components/HeroBanner.vue'
import AboutSection from './components/AboutSection.vue'
import MapSection from './components/MapSection.vue'
import LocationsSection from './components/LocationsSection.vue'
import GallerySection from './components/GallerySection.vue'
import FooterSection from './components/FooterSection.vue'
import InlineVideo from './components/InlineVideo.vue'
import BookShelf from './components/BookShelf.vue'
import WalkGallery from './components/WalkGallery.vue'
import { walkObjects } from './walk-objects'
const walkGallery = ref(null)
const markerObjectOrder = [1, 2, 4, 5, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
const walkExpanded = ref(false)
// Positions follow the marked reference, relative to the map artwork.
const walkMarkers = [
  [1.9, 41.3], [5.7, 42.3], [9.2, 42.3], [12.6, 43.7],
  [5.3, 47.5], [11.6, 49.6], [17.3, 49.6], [19.7, 44.5],
  [31.6, 44.6], [40.5, 45.6], [45.4, 54.0], [50.9, 46.8],
  [62.2, 47.0], [64.9, 56.1], [68.0, 48.1], [72.9, 49.0],
  [74.1, 56.1], [77.7, 56.1],
]
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
          <section class="walk-section max-w-[1920px] mx-auto px-[4%] md:px-[5%] fl-pt-[48px/120px] fl-pb-[24px/64px]" aria-labelledby="walk-title">
            <div id="walk" class="walk-heading flex items-center justify-center">
              <img src="/assets/588b9de8c108b3012c092ae21c779c9d32f4477e.webp" alt="Логотип проекта" class="walk-logo shrink-0 object-contain" />
            <h2 id="walk-title" class="walk-title font-brush text-black text-center leading-tight tracking-tight m-0">
              <button type="button" class="walk-title-toggle" :aria-expanded="walkExpanded" aria-controls="walk-description" @click="walkExpanded = !walkExpanded">Прогулка по Большой Пороховской улице</button>
            </h2>
            </div>
            <div class="flex items-start gap-4 fl-mt-[20px/40px]">
            <div class="walk-intro flex-1 min-w-0" :class="{ 'walk-intro-expanded': walkExpanded }">
            <div id="walk-description" class="walk-description flex-1 min-w-0 font-next fl-text-[13px/24px] text-black leading-relaxed space-y-5" :class="{ 'walk-collapsed': !walkExpanded }" role="button" tabindex="0" :aria-expanded="walkExpanded" :aria-label="walkExpanded ? 'Свернуть описание прогулки' : 'Развернуть описание прогулки'" @click="walkExpanded = !walkExpanded" @keydown.enter.prevent="walkExpanded = !walkExpanded" @keydown.space.prevent="walkExpanded = !walkExpanded">
              <p>
                Это одна из главных улиц в районах Большая Охта и Пороховые на правом берегу Невы. Её длина около 2 километров. Она начинается от Большеохтинского проспекта и переходит в Ириновский проспект. Дорога вела к пороховым заводам Петра I, отчего и стала Пороховской. Официальный статус улицы она получила в 1828 году. Слово «Большая» добавили в 1939 году, а свой современный вид улица обрела в 1978 году.
              </p>
              <p>
                В сквере Георга Отса растут высокий ясень и можжевельник казацкий. В начале улице также сохранился старинный металлический столб на заклёпках — опора трамвайной линии 1920-х годов. Сейчас он признан памятником истории ленинградского транспорта. Рядом с этим историческим объектом высажены молодые кусты сирени.
              </p>
            </div>
              <img v-if="walkExpanded" src="/assets/tram-pole-transparent.png"
                alt="Карандашный рисунок старинного трамвайного столба на Большой Пороховской улице"
                class="walk-illustration" loading="lazy" />
            </div>
              <button type="button" class="expand-btn shrink-0 mt-1 md:mt-4 fl-w-[16px/26px] fl-h-[16px/24px] flex items-center justify-center bg-transparent border-none cursor-pointer p-0" :class="{ rotated: walkExpanded }" :aria-expanded="walkExpanded" aria-controls="walk-description" :aria-label="walkExpanded ? 'Свернуть описание прогулки' : 'Развернуть описание прогулки'" @click="walkExpanded = !walkExpanded">
                <svg class="w-full h-full" viewBox="0 0 25 22" fill="none" aria-hidden="true">
                  <polygon points="12.5,22 0,0 25,0" :fill="walkExpanded ? '#68A90A' : '#FF7F50'" />
                </svg>
              </button>
            </div>
            <InlineVideo :active="walkExpanded" v-show="walkExpanded" src="/videos/bolshaya-porokhovskaya.mp4" class="mt-6 mx-auto" />
            <div class="walk-map relative fl-mt-[24px/56px]">
            <img
              src="/assets/bolshaya-porokhovskaya-transparent.webp"
              alt="Нарисованная карта Большой Пороховской улицы с маршрутом, выделенным оранжевым мелком"
              width="1680"
              height="938"
              class="block w-full h-auto object-contain"
              loading="lazy"
            />
              <div class="walk-markers absolute inset-0">
                <button
                  v-for="([left, top], index) in walkMarkers"
                  :key="index"
                  type="button"
                  :aria-label="walkObjects[markerObjectOrder[index] - 1].title"
                  class="walk-marker"
                  :style="{ left: `${left}%`, top: `${top}%` }"
                  @click="walkGallery?.showDrawing(markerObjectOrder[index] - 1)"
                >
                  <img src="/assets/588b9de8c108b3012c092ae21c779c9d32f4477e.webp" alt="" draggable="false" />
                  <span class="walk-marker-tooltip">{{ walkObjects[markerObjectOrder[index] - 1].title }}</span>
                </button>
              </div>
              <div class="walk-plants absolute inset-0 pointer-events-none" aria-hidden="true">
                <span class="walk-plant plant-one"></span>
                <span class="walk-plant plant-two"></span>
                <span class="walk-plant plant-three"></span>
                <span class="walk-plant plant-four"></span>
                <span class="walk-plant plant-five"></span>
                <span class="walk-plant plant-six"></span>
                <span class="walk-plant plant-seven"></span>
                <span class="walk-plant plant-eight"></span>
                <span class="walk-plant plant-small plant-nine"></span>
                <span class="walk-plant plant-small plant-ten"></span>
                <span class="walk-plant plant-small plant-eleven"></span>
                <span class="walk-plant plant-small plant-twelve"></span>
                <span class="walk-plant plant-small plant-thirteen"></span>
                <span class="walk-plant plant-small plant-fourteen"></span>
                <span class="walk-plant plant-small plant-fifteen"></span>
                <span class="walk-plant plant-small plant-sixteen"></span>
              </div>
            </div>
            <WalkGallery ref="walkGallery" />
          </section>
        </div>
      </div>

      <section class="yellow-section relative w-full" aria-labelledby="green-shelf-title">
        <svg class="yellow-wave absolute top-0 left-0 w-full pointer-events-none" viewBox="0 0 1440 180" preserveAspectRatio="none" aria-hidden="true">
          <path d="M-40-2H1480V43C1340 148 1240 208 1050 108C910 18 820 18 660 78C480 138 430 128 290 68C160 18 100 38-40 138Z" fill="#FF7F50" />
          <path d="M-40-2H1480V25C1340 130 1240 190 1050 90C910 0 820 0 660 60C480 120 430 110 290 50C160 0 100 20-40 120Z" fill="#F4E2D0" />
        </svg>
        <div class="yellow-content relative z-10">
          <h2 id="green-shelf-title" class="font-brush fl-text-[22px/68px] text-black text-center leading-tight mb-2 px-4 tracking-tight">ЗЕЛЁНАЯ ПОЛКА</h2>
          <p class="max-w-[1920px] mx-auto px-[4%] md:px-[5%] fl-mt-[20px/40px] font-next fl-text-[13px/24px] text-black leading-relaxed">
            Здесь собраны художественные и научно-популярные книги, которые помогут лучше понять природу, смену сезонов, разнообразие флоры вокруг нас и научат бережно относиться к окружающему миру.
          </p>
          <BookShelf />
        </div>
      </section>

      <GallerySection />
    </main>
    <FooterSection />
  </div>
</template>

<style scoped>
.yellow-section {
  background-color: #F4DF87;
  min-height: clamp(280px, 32vw, 615px);
}
.yellow-wave {
  height: clamp(70px, 10vw, 190px);
  transform: translateY(-1px);
}
.yellow-section::before {
  content: '';
  position: absolute;
  top: -2px;
  left: 0;
  right: 0;
  height: 4px;
  background: #F4E2D0;
  z-index: 1;
  pointer-events: none;
}
.yellow-content {
  padding-top: clamp(88px, 9vw, 173px);
}
.walk-section {
  container-type: inline-size;
}
.walk-title-toggle {
  padding: 0;
  border: 0;
  background: transparent;
  color: inherit;
  font: inherit;
  letter-spacing: inherit;
  cursor: pointer;
  transition: color 180ms ease;
}
.walk-title-toggle:hover { color: #3B5D2A; }
.walk-description { cursor: pointer; }
.walk-title-toggle:focus-visible, .walk-description:focus-visible {
  outline: 2px solid #3B5D2A;
  outline-offset: 5px;
}
.walk-title {
  font-size: min(4.1cqw, 62px);
  white-space: nowrap;
}
.walk-heading {
  gap: 1.5cqw;
  scroll-margin-top: clamp(64px, calc(21.61px + 5.073vw + 24px), 143px);
}
.walk-logo { width: 6cqw; height: 6cqw; max-width: 90px; max-height: 90px; }
.walk-intro-expanded {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(180px, 28%);
  align-items: center;
  gap: clamp(20px, 3vw, 56px);
}
.walk-illustration {
  display: block;
  width: 100%;
  max-height: 620px;
  object-fit: contain;
}
@media (max-width: 640px) {
  .walk-intro-expanded { grid-template-columns: minmax(0, 1fr); }
  .walk-illustration { width: min(70%, 280px); justify-self: center; }
}
.walk-collapsed {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  overflow: hidden;
  max-height: 3.25em;
}
.walk-markers { pointer-events: none; }
.walk-marker {
  border: 0;
  padding: 0;
  background: transparent;
  cursor: pointer;
  position: absolute;
  width: 2.7%;
  height: auto;
  transform: translate(-50%, -50%) scale(1);
  transition: transform 280ms ease;
  pointer-events: auto;
}
.walk-marker img { display: block; width: 100%; height: auto; }
.walk-marker-tooltip {
  position: absolute;
  bottom: calc(100% + 6px);
  left: 0;
  width: max-content;
  max-width: min(220px, 50vw);
  padding: 7px 10px;
  border-radius: 8px;
  background: #3b5d2a;
  color: white;
  font-size: clamp(9px, 0.8vw, 12px);
  line-height: 1.4;
  text-align: left;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 180ms ease;
}
.walk-marker:hover .walk-marker-tooltip,
.walk-marker:focus-visible .walk-marker-tooltip { opacity: 1; visibility: visible; }
.walk-marker:hover,
.walk-marker:focus-visible {
  transform: translate(-50%, -50%) scale(1.65);
  z-index: 1;
}
.walk-marker:focus-visible { outline: 2px solid #3B5D2A; outline-offset: 2px; border-radius: 50%; }
@media (prefers-reduced-motion: reduce) {
  .walk-marker { transition: none; }
}
.walk-plant {
  position: absolute;
  width: 7%;
  aspect-ratio: 1;
  background-image: url('/assets/walk-plants.webp');
  background-size: 300% 200%;
  background-repeat: no-repeat;
}
.plant-one { left: 7%; top: 18%; background-position: 0 0; transform: rotate(-12deg); }
.plant-two { left: 23%; top: 62%; background-position: 50% 0; transform: rotate(8deg); }
.plant-three { left: 39%; top: 24%; background-position: 100% 0; transform: rotate(-8deg); }
.plant-four { left: 49%; top: 67%; background-position: 0 100%; }
.plant-five { left: 62%; top: 17%; background-position: 50% 100%; transform: rotate(10deg); }
.plant-six { left: 78%; top: 66%; background-position: 100% 100%; transform: rotate(-15deg); }
.plant-seven { left: 88%; top: 22%; background-position: 100% 0; transform: rotate(14deg); }
.plant-eight { left: 7%; top: 76%; background-position: 50% 100%; transform: rotate(-7deg); }
.plant-small { width: 4%; }
.plant-nine { left: 19%; top: 12%; background-position: 100% 100%; transform: rotate(32deg); }
.plant-ten { left: 31%; top: 37%; background-position: 0 100%; transform: rotate(-28deg); }
.plant-eleven { left: 46%; top: 9%; background-position: 50% 0; transform: rotate(19deg); }
.plant-twelve { left: 58%; top: 35%; background-position: 0 0; transform: rotate(-38deg); }
.plant-thirteen { left: 69%; top: 76%; background-position: 100% 0; transform: rotate(27deg); }
.plant-fourteen { left: 36%; top: 83%; background-position: 50% 100%; transform: rotate(-24deg); }
.plant-fifteen { left: 89%; top: 71%; background-position: 0 100%; transform: rotate(42deg); }
.plant-sixteen { left: 17%; top: 57%; background-position: 50% 0; transform: rotate(-18deg); }
</style>

