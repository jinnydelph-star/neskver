<script setup>
import emblaCarouselVue from 'embla-carousel-vue'

const [viewport, carousel] = emblaCarouselVue({ align: 'start', containScroll: 'trimSnaps' })
const drawings = [
  { file: '02-gallery.jpg', alt: 'Рисунок трамвайного столба и цветущей сирени' },
  { file: '05-gallery.jpg', alt: 'Рисунок жилого дома и кустарников' },
  { file: '03-gallery.jpg', alt: 'Рисунок перекрёстка Большой Пороховской улицы' },
  { file: '04-gallery.jpg', alt: 'Рисунок дома за деревьями и оградой' },
  { file: '01.webp', alt: 'Рисунок детской библиотеки № 4' },
  { file: '6.webp', alt: 'Рисунок памятника в сквере' },
  { file: '7-gallery.jpg', alt: 'Рисунок улицы с трамвайными путями и остановкой' },
  { file: '8.webp', alt: 'Рисунок дома с башенкой' },
  { file: '9-gallery.jpg', alt: 'Рисунок высокого дома за зелёными деревьями' },
  { file: '10-gallery.jpg', alt: 'Рисунок перекрёстка со светофором' },
  { file: '11-gallery.jpg', alt: 'Рисунок аллеи каштанов вдоль жилого дома' },
  { file: '12-gallery.jpg', alt: 'Рисунок деревьев за оградой' },
  { file: '13-gallery.jpg', ratio: 2528 / 1684, alt: 'Рисунок дома с берёзами и остановкой' },
  { file: '14-gallery.jpg', ratio: 2528 / 1684, alt: 'Рисунок зелёного здания за оградой и красными кустарниками' },
  { file: '15-gallery.jpg', ratio: 2528 / 1696, alt: 'Рисунок высотного дома среди осенних деревьев' },
  { file: '16-gallery.jpg', ratio: 2528 / 1684, alt: 'Рисунок здания у пешеходного перехода' },
  { file: '17-gallery.jpg', ratio: 2528 / 1684, alt: 'Рисунок изгиба улицы с осенними деревьями' },
  { file: '18-gallery.jpg', ratio: 2752 / 1536, alt: 'Рисунок путепровода, лестницы и цветов' },
]
</script>

<template>
  <div class="walk-gallery" role="region" aria-label="Галерея рисунков прогулки">
    <div ref="viewport" class="walk-gallery-viewport">
      <div class="walk-gallery-track">
        <figure v-for="drawing in drawings" :key="drawing.file" class="walk-gallery-slide" :style="{ '--drawing-ratio': drawing.ratio ?? (drawing.file === '02-gallery.jpg' ? 1 : drawing.file === '8.webp' ? 3174 / 1920 : drawing.file === '6.webp' ? 974 / 717 : drawing.file === '01.webp' ? 600 / 442 : drawing.file === '9-gallery.jpg' ? 2400 / 1792 : 2528 / 1696) }">
          <img :src="`/assets/walk-gallery/${drawing.file}`" :alt="drawing.alt" loading="lazy" decoding="async" draggable="false" />
        </figure>
      </div>
    </div>
    <div class="walk-gallery-controls">
      <button type="button" aria-label="Предыдущий рисунок" @click="carousel?.scrollPrev()">‹</button>
      <button type="button" aria-label="Следующий рисунок" @click="carousel?.scrollNext()">›</button>
    </div>
  </div>
</template>

<style scoped>
.walk-gallery { position: relative; margin-top: clamp(32px, 5vw, 80px); padding-inline: clamp(42px, 5vw, 76px); }
.walk-gallery-viewport { overflow: hidden; cursor: grab; touch-action: pan-y pinch-zoom; }
.walk-gallery-viewport:active { cursor: grabbing; }
.walk-gallery-track { display: flex; gap: clamp(18px, 2.5vw, 40px); padding: 12px 0 36px; will-change: transform; }
.walk-gallery-slide {
  flex: 0 0 auto;
  min-width: 0;
  margin: 0;
  width: min(100%, calc(clamp(220px, 25vw, 420px) * var(--drawing-ratio)));
  height: clamp(220px, 25vw, 420px);
}
.walk-gallery-slide img {
  display: block;
  height: 100%;
  width: 100%;
  object-fit: contain;
  background: white;
  border-radius: 22px;
  box-shadow: 0 12px 20px -8px rgb(65 45 27 / 30%);
}
.walk-gallery-controls {
  position: absolute;
  inset: 12px 0 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  pointer-events: none;
}
.walk-gallery-controls button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0 3px;
  width: clamp(32px, 3vw, 44px);
  height: clamp(32px, 3vw, 44px);
  pointer-events: auto;
  border: 1px solid #3b5d2a;
  border-radius: 50%;
  background: transparent;
  color: #3b5d2a;
  font-size: 28px;
  cursor: pointer;
  transition: background-color 180ms ease, color 180ms ease;
}
.walk-gallery-controls button:hover { background: #3b5d2a; color: #f4e2d0; }
.walk-gallery-controls button:focus-visible { outline: 2px solid #3b5d2a; outline-offset: 4px; }
</style>

