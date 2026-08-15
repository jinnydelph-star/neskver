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
  <section class="relative w-full overflow-x-clip">
    <!-- Wavy dark green background SVG with blur enhancement -->
    <div class="absolute inset-0 z-0 left-[-10%] h-fit pointer-events-none select-none">
      <img
        src="/assets/f50aaf6b98484b915e192c977768bd6d1e8f199f.svg"
        alt=""
        class="w-full h-full object-cover opacity-90"
      />
    </div>

    <!-- Dark background content container -->
    <div class="relative z-10 fl-py-[24px/64px]">
      <!-- Title -->
      <h2 class="font-brush fl-text-[32px/84px] text-sand text-center leading-tight mb-2 px-4 tracking-tight">
        галерея рисунков (не)скверных мест
      </h2>

      <!-- Subtitle -->
      <p
        class="font-next fl-text-[12px/16px] text-sand text-center fl-mb-[20px/48px] px-4 max-w-[840px] mx-auto leading-relaxed">
        Проект создан совместно с 1 классом ГБОУ СОШ № 140, волонтёрами библиотеки и читателями
      </p>

      <!-- Category: РАСТЕНИЯ -->
      <div class="max-w-[1440px] mx-auto px-4 fl-mb-[24px/48px]">
        <h3 class="font-next font-bold fl-text-[16px/24px] text-sand uppercase tracking-wider text-center fl-mb-[14px/28px]">
          РАСТЕНИЯ
        </h3>
        <div class="grid grid-cols-2 lg:grid-cols-4 fl-gap-[14px/28px] justify-items-center">
          <div v-for="item in plantItems" :key="item.label" class="flex flex-col items-center">
            <div
              class="gallery-card group relative fl-w-[155px/283px] fl-h-[155px/283px] fl-rounded-[14px/20px] overflow-hidden bg-white shrink-0 cursor-pointer shadow-md">
              <img :src="item.image" :alt="item.label" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <!-- Gradient overlay -->
              <div
                class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-forest/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 fl-rounded-[14px/20px] flex flex-col justify-end fl-p-[10px/18px]">
                <p class="font-brush fl-text-[12px/20px] text-white mb-0.5 md:mb-1 drop-shadow-xs">{{ item.author }}</p>
                <p class="font-next fl-text-[11px/16px] text-cream leading-tight drop-shadow-xs">{{ item.event }}</p>
              </div>
            </div>
            <!-- Label below card -->
            <p
              class="fl-w-[155px/283px] text-center font-next fl-text-[13px/20px] text-sand mt-2 md:mt-3 leading-snug">
              {{ item.label }}
            </p>
          </div>
        </div>
      </div>

      <!-- Category: ЗДАНИЯ -->
      <div class="max-w-[1440px] mx-auto px-4 fl-mb-[80px/180px]">
        <h3 class="font-next font-bold fl-text-[16px/24px] text-sand uppercase tracking-wider text-center fl-mb-[14px/28px]">
          ЗДАНИЯ
        </h3>
        <div class="grid grid-cols-2 lg:grid-cols-4 fl-gap-[14px/28px] justify-items-center">
          <div v-for="item in buildingItems" :key="item.label" class="flex flex-col items-center">
            <div
              class="gallery-card group relative fl-w-[155px/283px] fl-h-[155px/283px] fl-rounded-[14px/20px] overflow-hidden bg-white shrink-0 cursor-pointer shadow-md">
              <img :src="item.image" :alt="item.label" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <!-- Gradient overlay -->
              <div
                class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-forest/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 fl-rounded-[14px/20px] flex flex-col justify-end fl-p-[10px/18px]">
                <p class="font-brush fl-text-[12px/20px] text-white mb-0.5 md:mb-1 drop-shadow-xs">{{ item.author }}</p>
                <p class="font-next fl-text-[11px/16px] text-cream leading-tight drop-shadow-xs">{{ item.event }}</p>
              </div>
            </div>
            <!-- Label below card -->
            <p
              class="fl-w-[155px/283px] text-center font-next fl-text-[13px/20px] text-sand mt-2 md:mt-3 leading-snug">
              {{ item.label }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Pansies flower border at bottom -->
    <div class="grid grid-cols-3 absolute bottom-[-23%] left-0 right-0 z-1 pointer-events-none select-none">
      <div v-for="n in 3" :key="'pansies-' + n" class="-mx-[10%]">
        <img
          src="/assets/035ba688cad44b9c1e8d30ed6b16b094b14bcc9f.webp"
          alt="Анютины глазки"
          class="rotate-[2.11deg] w-full h-auto"
        />
      </div>
    </div>
  </section>
</template>
