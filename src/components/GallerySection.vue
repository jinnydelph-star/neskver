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
</script>

<template>
  <section class="relative w-full overflow-hidden">
    <!-- Wavy dark green background SVG -->
    <div class="absolute inset-0 z-0">
      <img
        src="/assets/f50aaf6b98484b915e192c977768bd6d1e8f199f.svg"
        alt=""
        class="w-full h-full object-cover opacity-80"
      />
    </div>

    <!-- Dark background behind gallery -->
    <div class="relative z-10 fl-py-[24px/48px]">
      <!-- Title -->
      <h2 class="font-brush fl-text-[24px/72px] text-beige text-center leading-tight mb-2 px-4">
        галерея рисунков (не)скверных мест
      </h2>

      <!-- Subtitle -->
      <p class="font-next fl-text-[11px/16px] text-beige text-center fl-mb-[16px/32px] px-4 max-w-[800px] mx-auto leading-relaxed">
        Проект создан совместно с 1 классом ГБОУ СОШ № 140, волонтёрами библиотеки и читателями
      </p>

      <!-- Category: РАСТЕНИЯ -->
      <div class="max-w-[1400px] mx-auto px-4 fl-mb-[20px/40px]">
        <h3 class="font-next fl-text-[14px/22px] text-beige uppercase tracking-wider text-center fl-mb-[12px/24px]">
          РАСТЕНИЯ
        </h3>
        <div class="grid grid-cols-2 lg:grid-cols-4 fl-gap-[12px/24px] justify-items-center">
          <div
            v-for="item in plantItems"
            :key="item.label"
            class="flex flex-col items-center"
          >
            <div class="gallery-card relative fl-w-[155px/283px] fl-h-[155px/283px] fl-rounded-[14px/20px] overflow-hidden bg-white shrink-0">
              <img
                :src="item.image"
                :alt="item.label"
                class="w-full h-full object-cover"
              />
              <!-- Gradient overlay -->
              <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-green-dark/90 fl-rounded-[14px/20px]" />
              <!-- Text overlay -->
              <div class="absolute bottom-0 left-0 right-0 fl-p-[8px/16px]">
                <p class="font-brush fl-text-[11px/18px] text-white mb-0.5 md:mb-1">{{ item.author }}</p>
                <p class="font-next fl-text-[9px/14px] text-cream leading-tight">{{ item.event }}</p>
              </div>
            </div>
            <!-- Label below card -->
            <p class="fl-w-[155px/283px] text-center font-next fl-text-[12px/18px] text-beige mt-1.5 md:mt-2 leading-tight">
              {{ item.label }}
            </p>
          </div>
        </div>
      </div>

      <!-- Category: ЗДАНИЯ -->
      <div class="max-w-[1400px] mx-auto px-4 fl-mb-[20px/40px]">
        <h3 class="font-next fl-text-[14px/22px] text-beige uppercase tracking-wider text-center fl-mb-[12px/24px]">
          ЗДАНИЯ
        </h3>
        <div class="grid grid-cols-2 lg:grid-cols-4 fl-gap-[12px/24px] justify-items-center">
          <div
            v-for="item in buildingItems"
            :key="item.label"
            class="flex flex-col items-center"
          >
            <div class="gallery-card relative fl-w-[155px/283px] fl-h-[155px/283px] fl-rounded-[14px/20px] overflow-hidden bg-white shrink-0">
              <img
                :src="item.image"
                :alt="item.label"
                class="w-full h-full object-cover"
              />
              <!-- Gradient overlay -->
              <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-green-dark/90 fl-rounded-[14px/20px]" />
              <!-- Text overlay -->
              <div class="absolute bottom-0 left-0 right-0 fl-p-[8px/16px]">
                <p class="font-brush fl-text-[11px/18px] text-white mb-0.5 md:mb-1">{{ item.author }}</p>
                <p class="font-next fl-text-[9px/14px] text-cream leading-tight">{{ item.event }}</p>
              </div>
            </div>
            <!-- Label below card -->
            <p class="fl-w-[155px/283px] text-center font-next fl-text-[12px/18px] text-beige mt-1.5 md:mt-2 leading-tight">
              {{ item.label }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Pansies flower border at bottom -->
    <div class="relative z-10 flex justify-center overflow-hidden fl-h-[80px/180px] -mb-6 md:-mb-10 pointer-events-none">
      <div v-for="n in 3" :key="'pansies-'+n" class="relative fl-w-[360px/720px] fl-h-[80px/180px] shrink-0 overflow-hidden">
        <img
          src="/assets/035ba688cad44b9c1e8d30ed6b16b094b14bcc9f.webp"
          alt="Анютины глазки"
          class="absolute w-full h-[350%] left-0 top-[-128%] max-w-none object-contain"
        />
      </div>
    </div>
  </section>
</template>
