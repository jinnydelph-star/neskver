<script setup>
// Hero banner uses the exported flat background Group1.webp
// Text is overlaid on top of the floral composition
</script>

<template>
  <section id="hero" class="relative w-full fl-pt-[42px/119px]">
    <!-- Background image: the full floral composition -->
    <div class="relative w-full">
      <img src="/assets/Group1.webp" alt="Ботаническая композиция с нарисованными цветами"
        class="w-full h-auto block" />

      <!-- Title overlay — positioned on the white area between top waves -->
      <div class="absolute top-[6%] left-[4%] md:top-[8%] md:left-[10%] flex items-start fl-gap-[8px/24px]">
        <!-- Logo -->
        <img src="/assets/588b9de8c108b3012c092ae21c779c9d32f4477e.webp" alt="Логотип (Не)скверное место"
          class="fl-w-[79px/180px] fl-h-[79px/180px] object-contain shrink-0" />
        <!-- Title text -->
        <div>
          <h1 class="font-brush fl-text-[32px/80px] leading-none text-black m-0">
            (не)скверное место
          </h1>
          <p
            class="font-next fl-text-[11px/22px] text-black mt-1 md:mt-3 max-w-70 md:max-w-175 uppercase leading-tight">
            ЭКО-ТРОПА ПО МО БОЛЬШАЯ ОХТА КРАСНОГВАРДЕЙСКОГО РАЙОНА СПБ
          </p>
        </div>
      </div>

      <!-- "О проекте" text block — positioned in the middle-right white area -->
      <div class="absolute top-[42%] right-[3%] md:right-[5%] max-w-47.5 sm:max-w-[320px] md:max-w-200" id="about">
        <p class="font-next fl-text-[10px/22px] text-black leading-tight sm:leading-relaxed">
          <span class="font-brush fl-text-[14px/30px]">(не)скверное место —</span>
          &nbsp;это экологический проект по зелёным местам МО Большая Охта в Красногвардейском районе Санкт-Петербурга,
          разработанный в детской библиотеке № 4 Централизованной библиотечной системе Красногвардейского района в 2026
          году
        </p>
      </div>

      <!-- "Гуляй – с семьёй" -->
      <div class="absolute top-[55%] left-[38%] md:left-[42%] rotate-[-8deg]">
        <span class="font-brush fl-text-[16px/30px] text-green-text inline-block">Гуляй –</span>
        <span class="font-next fl-text-[12px/22px] text-green-text inline-block ml-1">с семьёй</span>
      </div>

      <!-- Text block left side — "В большой охте..." -->
      <div class="absolute top-[68%] left-[4%] md:left-[5%] max-w-45 sm:max-w-70 md:max-w-155">
        <p class="font-next fl-text-[10px/22px] text-black leading-tight sm:leading-relaxed">
          В Большой Охте совсем нет садов, парков,
          но есть 5 уютных скверов и множество дворов с неповторимыми клумбами, о которых
          нам захотелось рассказать
        </p>
      </div>

      <!-- "Читай – с библиотекой" -->
      <div class="absolute top-[82%] left-[35%] md:left-[38%] rotate-[-8deg]">
        <span class="font-brush fl-text-[16px/30px] text-green-text inline-block">Читай –</span>
        <span class="font-next fl-text-[12px/22px] text-green-text inline-block ml-1">с библиотекой</span>
      </div>
    </div>
  </section>
</template>
