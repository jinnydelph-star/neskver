<script setup>
const plantItems = [
  {
    image: '/assets/a04a0a7caa5c91502b9c135d827f76fbf2f8eb83.webp',
    label: 'вереница лютиковидная',
    author: 'кира бычкова, 8 лет',
    event: 'встреча «все растения важны» 17 апреля 2026 г.',
  },
  {
    image: '/assets/f4a53a1a1cba3b88972c30d3f9c2e58c782a30b5.webp',
    label: 'виола',
    author: 'луна усикенц, 10 лет',
    event: 'Ботанический фото-челлендж «кто живёт в моём дворе» с июня по август 2026 г.',
  },
  {
    image: '/assets/bf7d1732ae811a55a9d7c3e36c52c2885261638a.webp',
    label: 'клён',
    author: 'лев никитин, 8 лет',
    event: 'встреча «все растения важны» 17 апреля 2026 г.',
  },
  {
    image: '/assets/e19854d470b3c75568ad1c316cafa592b80069d5.webp',
    label: 'крокус',
    author: 'луна усикенц, 10 лет',
    event: 'Ботанический фото-челлендж «кто живёт в моём дворе» с июня по август 2026 г.',
  },
]

const buildingItems = [
  {
    image: '/assets/57e132118aa4a0a9fbdda88400bcd524194098d7.webp',
    label: 'Сквер Георга Отса',
    author: 'даша багаева, 15 лет',
    event: 'Ботанический фото-челлендж «кто живёт в моём дворе» с июня по август 2026 г.',
  },
  {
    image: '/assets/4439574bfb54ec36e8fa479b26f566567ff1ad95.webp',
    label: 'Сквер «Мама»',
    author: 'даша багаева, 15 лет',
    event: 'Ботанический фото-челлендж «кто живёт в моём дворе» с июня по август 2026 г.',
  },
  {
    image: '/assets/8d5a9d5a12c85d2e8275893c1186a919767909c4.webp',
    label: 'Гурдин сквер',
    author: 'даша багаева, 15 лет',
    event: 'волонтёр, Ботанический фото-челлендж «кто живёт в моём дворе», с июня по август 2026 г.',
  },
  {
    image: '/assets/c9931462d94bafca50bc2061ece77cd5ad63bfea.webp',
    label: 'Большеохтинское кладбище',
    author: 'даша багаева, 15 лет',
    event: 'волонтёр, Ботанический фото-челлендж «кто живёт в моём дворе», с июня по август 2026 г.',
  },
]
const categories = [{ title: 'Растения', items: plantItems }, { title: 'Здания', items: buildingItems }]
</script>

<template>
  <section class="relative w-full bg-forest  overflow-x-clip">
    <svg class="gallery-wave absolute top-0 left-0 w-full pointer-events-none" viewBox="0 0 1440 180" preserveAspectRatio="none" aria-hidden="true">
      <path d="M-40-2H1480V200H-40Z" fill="#F4E2D0" />
      <path d="M-40 120C100 20 160 0 290 50C430 110 480 120 660 60C820 0 910 0 1050 90C1240 190 1340 130 1480 25V200H-40Z" fill="white" />
      <path d="M-40 155C100 25 160 25 290 85C430 140 480 150 660 85C820 30 910 30 1050 115C1240 210 1340 150 1480 55V200H-40Z" fill="#3B5D2A" />
    </svg>
    <div class="gallery-content relative z-10">
      <!-- Title -->
      <h2 class="font-brush fl-text-[22px/68px] text-sand text-center leading-tight mb-2 px-4 tracking-tight">
        галерея рисунков (не)скверных мест
      </h2>

      <!-- Subtitle -->
      <p
        class="gallery-subtitle font-next text-sand text-center fl-mb-[20px/48px] px-4 mx-auto leading-relaxed">
        Проект создан совместно с 1 классом ГБОУ СОШ № 140, волонтёрами библиотеки и читателями
      </p>

      <div class="gallery-categories">
        <div v-for="category in categories" :key="category.title" class="gallery-category">
          <h3 class="category-title font-next text-sand text-center uppercase">{{ category.title }}</h3>
          <div class="gallery-scroll" role="region" :aria-label="`Рисунки: ${category.title}`" tabindex="0">
            <div class="gallery-grid">
              <figure v-for="item in category.items" :key="item.label" class="gallery-item">
                <div class="drawing-card" tabindex="0" :aria-label="`${item.label}. ${item.author}. ${item.event}`">
                  <img :src="item.image" :alt="item.label" class="drawing-image" loading="lazy" />
                  <div class="drawing-info">
                    <p class="font-brush drawing-author">{{ item.author }}</p>
                    <p class="font-next">{{ item.event }}</p>
                  </div>
                </div>
                <figcaption class="font-next text-sand">{{ item.label }}</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Pansies flower border precisely straddling the bottom edge of gallery -->
    <div class="absolute bottom-0 left-0 w-full z-20 translate-y-[25%] pointer-events-none select-none leading-none">
      <div class="flex items-center w-[110%] -ml-[5%]">
        <!-- Segment 1: left (2.11deg) -->
        <div class="flex-1 rotate-[2.11deg] fl-h-[62px/204px] relative overflow-hidden shrink-0">
          <img src="/assets/035ba688cad44b9c1e8d30ed6b16b094b14bcc9f.webp" alt="Анютины глазки"
            class="absolute h-[367%] left-0 top-[-128%] w-full max-w-none object-contain xl:object-cover" />
        </div>
        <!-- Segment 2: center (1.84deg) -->
        <div class="flex-1 rotate-[1.84deg] fl-h-[62px/204px] relative overflow-hidden shrink-0 -ml-[2%]">
          <img src="/assets/035ba688cad44b9c1e8d30ed6b16b094b14bcc9f.webp" alt="Анютины глазки"
            class="absolute h-[352%] left-0 top-[-128%] w-full max-w-none object-contain xl:object-cover" />
        </div>
        <!-- Segment 3: right (3.49deg) -->
        <div class="flex-1 rotate-[3.49deg] fl-h-[62px/204px] relative overflow-hidden shrink-0 -ml-[2%]">
          <img src="/assets/035ba688cad44b9c1e8d30ed6b16b094b14bcc9f.webp" alt="Анютины глазки"
            class="absolute h-[365%] left-0 top-[-131%] w-full max-w-none object-contain xl:object-cover" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.gallery-subtitle { font-size: clamp(5px, 0.82vw, 16px); white-space: nowrap; }
.gallery-wave { height: clamp(70px, 10vw, 190px); }
.gallery-content { padding: clamp(88px, 9vw, 173px) 0 clamp(100px, 13vw, 250px); }
.gallery-categories {

  --row-gap: clamp(18px, 3vw, 54px);
  --caption-height: clamp(32px, 3vw, 52px);
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(40px, 18.5vw, 355px);
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 clamp(20px, 3.8vw, 73px);
}
.category-title { font-size: clamp(12px, 1.25vw, 24px); margin-bottom: clamp(14px, 2vw, 34px); }
.gallery-category { min-width: 0; container-type: inline-size; }
.gallery-scroll {
  height: calc(100cqw - clamp(12px, 2.25vw, 43px) + var(--caption-height) * 2 + var(--row-gap) + 32px);
  padding: 16px;
  margin: -16px;
  overflow-y: auto;
  overflow-x: hidden;
  overscroll-behavior-y: contain;
  scrollbar-width: none;
  scrollbar-color: #84964a transparent;
  scrollbar-gutter: auto;
  border-radius: 8px;
}
.gallery-scroll:focus-visible { outline: 2px solid #f4e2d0; outline-offset: 6px; }
.gallery-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: var(--row-gap) clamp(12px, 2.25vw, 43px); }
.gallery-item { margin: 0; min-width: 0; }
.drawing-card { position: relative; aspect-ratio: 1; overflow: hidden; border-radius: clamp(9px, 1.2vw, 22px); background: white; box-shadow: 0 12px 16px rgb(0 0 0 / 32%); }
.drawing-image { width: 100%; height: 100%; object-fit: cover; display: block; }
.drawing-info {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 4px;
  padding: clamp(8px, 1.2vw, 22px);
  color: white;
  background: linear-gradient(180deg, transparent 5%, rgb(59 93 42 / 35%) 35%, rgb(59 93 42 / 92%) 100%);
  font-size: clamp(9px, 0.85vw, 16px);
  line-height: 1.2;
  opacity: 0;
  transition: opacity 350ms ease;
}
.drawing-author { font-size: clamp(10px, 1.05vw, 20px); }
.drawing-card:hover .drawing-info, .drawing-card:focus .drawing-info { opacity: 1; }
.drawing-card:focus-visible { outline: 2px solid #f4e2d0; outline-offset: -3px; }
.gallery-item figcaption { min-height: var(--caption-height); padding-top: 8px; font-size: clamp(9px, 0.95vw, 18px); line-height: 1.3; text-align: center; }
@media (max-width: 600px) {
  .gallery-categories { grid-template-columns: 1fr; gap: 32px; padding: 0 8%; }
  .drawing-info { font-size: 11px; }
}
@media (prefers-reduced-motion: reduce) { .drawing-info { transition: none; } }
</style>






