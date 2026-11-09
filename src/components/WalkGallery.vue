<script setup>
import emblaCarouselVue from 'embla-carousel-vue'
import { computed, ref } from 'vue'
import { walkObjects as texts } from '../walk-objects'

const selected = ref(null)
const lastSelected = ref(null)
const textOrder = texts.map((_, index) => index)
const selectedText = computed(() => lastSelected.value === null ? null : texts[textOrder[lastSelected.value]])
const toggle = (index) => {
  lastSelected.value = index
  selected.value = selected.value === index ? null : index
}

const [viewport, carousel] = emblaCarouselVue({ align: 'start', containScroll: 'trimSnaps' })
const galleryRoot = ref(null)
const showDrawing = (index) => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  carousel.value?.scrollTo(index, reducedMotion)
  if (galleryRoot.value) {
    // Keep the artwork near the top with its caption visible, as in the reference.
    const artworkTop = galleryRoot.value.getBoundingClientRect().top + window.scrollY + 12
    const headerBottom = document.querySelector('.site-header')?.getBoundingClientRect().bottom ?? 0
    const topGap = headerBottom + 64
    window.scrollTo({ top: Math.max(0, artworkTop - topGap), behavior: reducedMotion ? 'instant' : 'smooth' })
  }
}
defineExpose({ showDrawing })
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
  <div ref="galleryRoot" class="walk-gallery" role="region" aria-label="Галерея рисунков прогулки">
    <div ref="viewport" class="walk-gallery-viewport">
      <div class="walk-gallery-track">
        <figure v-for="drawing in drawings" :key="drawing.file" class="walk-gallery-slide" :style="{ '--drawing-ratio': drawing.ratio ?? (drawing.file === '02-gallery.jpg' ? 1 : drawing.file === '8.webp' ? 3174 / 1920 : drawing.file === '6.webp' ? 974 / 717 : drawing.file === '01.webp' ? 600 / 442 : drawing.file === '9-gallery.jpg' ? 2400 / 1792 : 2528 / 1696) }">
          <button type="button" class="walk-drawing-toggle" :aria-expanded="selected === drawings.indexOf(drawing)" aria-controls="walk-object-description" @click="toggle(drawings.indexOf(drawing))">
            <img :src="`/assets/walk-gallery/${drawing.file}`" :alt="drawing.alt" loading="lazy" decoding="async" draggable="false" />
          </button>
          <button type="button" class="walk-caption" :aria-expanded="selected === drawings.indexOf(drawing)" aria-controls="walk-object-description" @click="toggle(drawings.indexOf(drawing))">
            {{ texts[textOrder[drawings.indexOf(drawing)]].title }}
            <span class="walk-caption-arrow" :class="{ 'is-open': selected === drawings.indexOf(drawing) }" aria-hidden="true"></span>
          </button>
        </figure>
      </div>
    </div>
    <div class="walk-gallery-controls">
      <button type="button" aria-label="Предыдущий рисунок" @click="carousel?.scrollPrev()">‹</button>
      <button type="button" aria-label="Следующий рисунок" @click="carousel?.scrollNext()">›</button>
    </div>
    <div id="walk-object-description" class="walk-object-description" :class="{ 'is-open': selected !== null }" :inert="selected === null">
      <div class="walk-object-inner">
        <div v-if="selectedText" class="walk-object-copy" :key="selected">
          <h3>{{ selectedText.title }}</h3>
          <p v-if="selectedText.address" class="walk-object-address">{{ selectedText.address }}</p>
          <p v-for="paragraph in selectedText.paragraphs" :key="paragraph">{{ paragraph }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.walk-gallery { position: relative; scroll-margin-top: 100px; margin-top: clamp(32px, 5vw, 80px); padding-inline: clamp(42px, 5vw, 76px); }
.walk-gallery-viewport { overflow: hidden; cursor: grab; touch-action: pan-y pinch-zoom; }
.walk-gallery-viewport:active { cursor: grabbing; }
.walk-gallery-track { display: flex; gap: clamp(18px, 2.5vw, 40px); padding: 12px 0 36px; will-change: transform; }
.walk-gallery-slide {
  flex: 0 0 auto;
  min-width: 0;
  margin: 0;
  width: min(100%, calc(clamp(220px, 25vw, 420px) * var(--drawing-ratio)));
  height: auto;
}
.walk-drawing-toggle { display: block; width: 100%; height: clamp(220px, 25vw, 420px); padding: 0; border: 0; background: transparent; cursor: pointer; border-radius: 22px; }
.walk-caption { display: flex; align-items: center; justify-content: space-between; gap: 12px; width: 100%; padding: 22px 4px 4px; border: 0; background: transparent; color: #000; font: inherit; font-weight: bold; text-align: left; cursor: pointer; }
.walk-caption-arrow { flex: 0 0 20px; height: 18px; background: #ff7f50; clip-path: polygon(0 0, 100% 0, 50% 100%); transition: transform 280ms ease; }
.walk-caption-arrow.is-open { transform: rotate(180deg); background: #68a90a; }
.walk-object-description { display: grid; grid-template-rows: 0fr; opacity: 0; transition: grid-template-rows 350ms ease, opacity 350ms ease; }
.walk-object-description.is-open { grid-template-rows: 1fr; opacity: 1; }
.walk-object-inner { overflow: hidden; min-height: 0; }
.walk-object-copy { padding: 16px 0 24px; line-height: 1.7; font-size: clamp(15px, 1.3vw, 22px); }
.walk-object-copy h3 { font-weight: bold; margin-bottom: 8px; }
.walk-object-copy p + p { margin-top: 12px; }
.walk-object-address { font-weight: bold; }
@media (prefers-reduced-motion: reduce) { .walk-object-description, .walk-caption-arrow { transition: none; } }
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
  inset: 12px 0 auto;
  height: clamp(220px, 25vw, 420px);
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

