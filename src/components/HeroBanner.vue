<script setup>
// Hero banner uses the exported flat background Group1.webp
// Text is overlaid on top of the floral composition
</script>

<template>
  <section id="hero" class="relative w-full pt-[119px]">
    <!-- Background image: the full floral composition -->
    <div class="relative w-full">
      <img
        src="/assets/Group1.webp"
        alt="Ботаническая композиция с нарисованными цветами"
        class="w-full h-auto block"
      />

      <!-- Title overlay — positioned on the white area between top waves -->
      <div class="absolute top-[8%] left-[10%] flex items-start gap-6">
        <!-- Logo -->
        <img
          src="/assets/588b9de8c108b3012c092ae21c779c9d32f4477e.webp"
          alt="Логотип (Не)скверное место"
          class="w-[180px] h-[180px] object-contain shrink-0"
        />
        <!-- Title text -->
        <div>
          <h1 class="font-brush text-[80px] leading-none text-black m-0">
            (не)скверное место
          </h1>
          <p class="font-next text-[22px] text-black mt-3 max-w-[700px] uppercase">
            ЭКО-ТРОПА ПО МО БОЛЬШАЯ ОХТА КРАСНОГВАРДЕЙСКОГО РАЙОНА СПБ
          </p>
        </div>
      </div>

      <!-- "О проекте" text block — positioned in the middle-right white area -->
      <div class="absolute top-[42%] right-[5%] max-w-[800px]" id="about">
        <p class="font-next text-[22px] text-black leading-relaxed">
          <span class="font-brush text-[30px]">(не)скверное место —</span>
          &nbsp;это экологический проект по зелёным местам МО Большая Охта в Красногвардейском районе Санкт-Петербурга, разработанный в детской библиотеке № 4 Централизованной библиотечной системе Красногвардейского района в 2026 году
        </p>
      </div>

      <!-- "Гуляй – с семьёй" -->
      <div class="absolute top-[55%] left-[42%]">
        <span class="font-brush text-[30px] text-green-text -rotate-[8deg] inline-block">Гуляй –</span>
        <span class="font-next text-[22px] text-green-text -rotate-[8deg] inline-block ml-1">с семьёй</span>
      </div>

      <!-- Text block left side — "В большой охте..." -->
      <div class="absolute top-[68%] left-[5%] max-w-[620px]">
        <p class="font-next text-[22px] text-black leading-relaxed">
          В Большой Охте совсем нет садов, парков,
          но есть 5 уютных скверов и множество дворов с неповторимыми клумбами, о которых
          нам захотелось рассказать
        </p>
      </div>

      <!-- "Читай – с библиотекой" -->
      <div class="absolute top-[82%] left-[38%]">
        <span class="font-brush text-[30px] text-green-text rotate-[9deg] inline-block">Читай –</span>
        <span class="font-next text-[22px] text-green-text rotate-[9deg] inline-block ml-1">с библиотекой</span>
      </div>
    </div>
  </section>
</template>
