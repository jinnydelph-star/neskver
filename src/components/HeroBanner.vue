<script setup>
// Hero banner uses the floral background Group1.webp
// Typography and slogans are placed in exact alignment with the Figma design scheme
</script>

<template>
  <section id="hero" class="relative w-full fl-pt-[42px/119px]">
    <!-- Background image: the full floral composition -->
    <div class="relative w-full">
      <img
        src="/assets/Group1.webp"
        alt="Ботаническая композиция с нарисованными цветами"
        class="w-full h-auto block select-none"
      />

      <!-- Title overlay — positioned on the white area between top waves -->
      <div class="absolute top-[5%] left-[3%] sm:top-[6%] sm:left-[4%] md:top-[8%] md:left-[10%] flex items-start fl-gap-[6px/24px]">
        <!-- Logo -->
        <img
          src="/assets/588b9de8c108b3012c092ae21c779c9d32f4477e.webp"
          alt="Логотип (Не)скверное место"
          class="fl-w-[56px/180px] fl-h-[56px/180px] object-contain shrink-0 drop-shadow-xs"
        />
        <!-- Title text -->
        <div>
          <h1 class="font-brush fl-text-[26px/96px] leading-none text-black m-0 tracking-tight">
            (не)скверное место
          </h1>
          <p
            class="font-next fl-text-[8px/24px] text-black mt-0.5 sm:mt-1 md:mt-3 max-w-45 sm:max-w-70 md:max-w-180 uppercase leading-snug tracking-wide">
            ЭКО-ТРОПА ПО МО БОЛЬШАЯ ОХТА КРАСНОГВАРДЕЙСКОГО РАЙОНА СПБ
          </p>
        </div>
      </div>

      <!-- "О проекте" text block — positioned in the middle-right white area -->
      <div class="absolute top-[42%] right-[2%] sm:right-[4%] md:right-[6%] max-w-[46%] sm:max-w-[340px] md:max-w-[580px]" id="about">
        <p class="font-next fl-text-[8px/22px] text-black leading-tight sm:leading-relaxed">
          <span class="font-brush fl-text-[10px/30px]">(не)скверное место —</span>
          &nbsp;это экологический проект по зелёным местам МО Большая Охта в Красногвардейском районе Санкт-Петербурга,
          разработанный в детской библиотеке № 4 Централизованной библиотечной системе Красногвардейского района в 2026
          году
        </p>
      </div>

      <!-- "Гуляй – с семьёй" -->
      <div class="absolute top-[56%] left-[36%] md:left-[42%] rotate-[-8.03deg] select-none">
        <span class="font-brush fl-text-[11px/32px] text-forest inline-block">Гуляй –</span>
        <span class="font-next fl-text-[9px/24px] text-forest inline-block ml-0.5 sm:ml-1">с семьёй</span>
      </div>

      <!-- Text block left side — "В большой охте..." -->
      <div class="absolute top-[70%] left-[4%] sm:left-[5%] md:left-[7%] max-w-[42%] sm:max-w-75 md:max-w-[480px]">
        <p class="font-next fl-text-[8px/22px] text-black leading-tight sm:leading-relaxed">
          В Большой Охте совсем нет садов, парков,
          но есть 5 уютных скверов и множество дворов с неповторимыми клумбами, о которых
          нам захотелось рассказать
        </p>
      </div>

      <!-- "Читай – с библиотекой" -->
      <div class="absolute top-[83%] left-[34%] md:left-[38%] rotate-[8.75deg] select-none">
        <span class="font-brush fl-text-[11px/32px] text-forest inline-block">Читай –</span>
        <span class="font-next fl-text-[9px/24px] text-forest inline-block ml-0.5 sm:ml-1">с библиотекой</span>
      </div>
    </div>
  </section>
</template>
