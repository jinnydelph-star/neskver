<script setup>
const galleryItems = [
  // Row 1: РАСТЕНИЯ
  {
    image: '/assets/a04a0a7caa5c91502b9c135d827f76fbf2f8eb83.webp',
    label: 'вереница лютиковидная',
    author: 'луна усикенц, 10 лет',
    event: 'Ботанический фото-челлендж «кто живёт в моём дворе» с июня по август 2026 г.',
    category: 'plants',
  },
  {
    image: '/assets/f4a53a1a1cba3b88972c30d3f9c2e58c782a30b5.webp',
    label: 'виола',
    author: 'луна усикенц, 10 лет',
    event: 'Ботанический фото-челлендж «кто живёт в моём дворе» с июня по август 2026 г.',
    category: 'plants',
  },
  {
    image: '/assets/57e132118aa4a0a9fbdda88400bcd524194098d7.webp',
    label: 'Сквер Георга Отса',
    author: 'даша багаева, 15 лет',
    event: 'Ботанический фото-челлендж «кто живёт в моём дворе» с июня по август 2026 г.',
    category: 'buildings',
  },
  {
    image: '/assets/4439574bfb54ec36e8fa479b26f566567ff1ad95.webp',
    label: 'Сквер «Мама»',
    author: 'даша багаева, 15 лет',
    event: 'Ботанический фото-челлендж «кто живёт в моём дворе» с июня по август 2026 г.',
    category: 'buildings',
  },
  // Row 2
  {
    image: '/assets/bf7d1732ae811a55a9d7c3e36c52c2885261638a.webp',
    label: 'клён',
    author: 'лев никитин, 8 лет',
    event: 'встреча «все растения важны» 17 апреля 2026 г.',
    category: 'plants',
  },
  {
    image: '/assets/e19854d470b3c75568ad1c316cafa592b80069d5.webp',
    label: 'крокус',
    author: 'луна усикенц, 10 лет',
    event: 'Ботанический фото-челлендж «кто живёт в моём дворе» с июня по август 2026 г.',
    category: 'plants',
  },
  {
    image: '/assets/8d5a9d5a12c85d2e8275893c1186a919767909c4.webp',
    label: 'Гурдин сквер',
    author: 'даша багаева, 15 лет',
    event: 'волонтёр, Ботанический фото-челлендж «кто живёт в моём дворе», с июня по август 2026 г.',
    category: 'buildings',
  },
  {
    image: '/assets/c9931462d94bafca50bc2061ece77cd5ad63bfea.webp',
    label: 'Большеохтинское кладбище',
    author: 'даша багаева, 15 лет',
    event: 'волонтёр, Ботанический фото-челлендж «кто живёт в моём дворе», с июня по август 2026 г.',
    category: 'buildings',
  },
]

const row1 = galleryItems.slice(0, 4)
const row2 = galleryItems.slice(4, 8)
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
    <div class="relative z-10 py-12">
      <!-- Title -->
      <h2 class="font-brush text-[72px] text-beige text-center leading-tight mb-2 px-4">
        галерея рисунков (не)скверных мест
      </h2>

      <!-- Subtitle -->
      <p class="font-next text-[16px] text-beige text-center mb-8 px-4">
        Проект создан совместно с 1 классом ГБОУ СОШ № 140, волонтёрами библиотеки и читателями
      </p>

      <!-- Category labels -->
      <div class="flex justify-around max-w-[1400px] mx-auto mb-6 px-4">
        <p class="font-next text-[22px] text-beige uppercase tracking-wider">РАСТЕНИЯ</p>
        <p class="font-next text-[22px] text-beige uppercase tracking-wider">ЗДАНИЯ</p>
      </div>

      <!-- Row 1 -->
      <div class="flex justify-center gap-6 mb-6 px-4 flex-wrap">
        <div
          v-for="item in row1"
          :key="item.label"
          class="gallery-card relative w-[283px] h-[283px] rounded-[20px] overflow-hidden bg-white shrink-0"
        >
          <img
            :src="item.image"
            :alt="item.label"
            class="w-full h-full object-cover"
          />
          <!-- Gradient overlay -->
          <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-green-dark/90 rounded-[20px]" />
          <!-- Text overlay -->
          <div class="absolute bottom-0 left-0 right-0 p-4">
            <p class="font-brush text-[18px] text-white mb-1">{{ item.author }}</p>
            <p class="font-next text-[14px] text-cream leading-tight">{{ item.event }}</p>
          </div>
        </div>
      </div>

      <!-- Row 1 labels -->
      <div class="flex justify-center gap-6 mb-10 px-4 flex-wrap">
        <p
          v-for="item in row1"
          :key="item.label + '-label'"
          class="w-[283px] text-center font-next text-[18px] text-beige shrink-0"
        >
          {{ item.label }}
        </p>
      </div>

      <!-- Row 2 -->
      <div class="flex justify-center gap-6 mb-6 px-4 flex-wrap">
        <div
          v-for="item in row2"
          :key="item.label"
          class="gallery-card relative w-[283px] h-[283px] rounded-[20px] overflow-hidden bg-white shrink-0"
        >
          <img
            :src="item.image"
            :alt="item.label"
            class="w-full h-full object-cover"
          />
          <!-- Gradient overlay -->
          <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-green-dark/90 rounded-[20px]" />
          <!-- Text overlay -->
          <div class="absolute bottom-0 left-0 right-0 p-4">
            <p class="font-brush text-[18px] text-white mb-1">{{ item.author }}</p>
            <p class="font-next text-[14px] text-cream leading-tight">{{ item.event }}</p>
          </div>
        </div>
      </div>

      <!-- Row 2 labels -->
      <div class="flex justify-center gap-6 mb-4 px-4 flex-wrap">
        <p
          v-for="item in row2"
          :key="item.label + '-label'"
          class="w-[283px] text-center font-next text-[18px] text-beige shrink-0"
        >
          {{ item.label }}
        </p>
      </div>
    </div>

    <!-- Pansies flower border at bottom -->
    <div class="relative z-10 flex justify-center overflow-hidden h-[180px] -mb-10 pointer-events-none">
      <div v-for="n in 3" :key="'pansies-'+n" class="relative w-[720px] h-[180px] shrink-0 overflow-hidden">
        <img
          src="/assets/035ba688cad44b9c1e8d30ed6b16b094b14bcc9f.webp"
          alt="Анютины глазки"
          class="absolute w-full h-[350%] left-0 top-[-128%] max-w-none object-contain"
        />
      </div>
    </div>
  </section>
</template>
