<script setup>
import TextFlourish from './TextFlourish.vue'
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

      <!-- The flourishes in the artwork are replaced by decorations anchored to copy. -->
      <div class="flourish-cover flourish-cover-about" aria-hidden="true"></div>
      <div class="flourish-cover flourish-cover-neighborhood" aria-hidden="true"></div>
      <div class="flourish-cover flourish-cover-project" aria-hidden="true"></div>

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
      <div class="absolute top-[44%] right-[2%] sm:right-[4%] md:right-[6%] w-[46%] max-w-[700px]" id="about">
        <TextFlourish class="copy-flourish" />
        <p class="font-next fl-text-[8px/22px] text-black leading-tight sm:leading-relaxed">
          <span class="copy-line"><span class="font-brush fl-text-[10px/30px]">(не)скверное место —</span>&nbsp; это экологический проект</span>
          <span class="copy-line">по&nbsp;зелёным местам МО Большая Охта</span>
          <span class="copy-line">в&nbsp;Красногвардейском районе Санкт-Петербурга,</span>
          <span class="copy-line">разработанный в&nbsp;детской библиотеке №&nbsp;4</span>
          <span class="copy-line">Централизованной библиотечной системе</span>
          <span class="copy-line">Красногвардейского района в&nbsp;2026 году</span>
        </p>
      </div>

      <!-- "Гуляй – с семьёй" -->
      <div class="absolute top-[61%] left-[40%] -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rotate-[-8.03deg] select-none">
        <span class="font-brush fl-text-[11px/32px] text-forest inline-block">Гуляй –</span>
        <span class="font-next fl-text-[9px/24px] text-forest inline-block ml-0.5 sm:ml-1">с семьёй</span>
      </div>

      <!-- Text block left side — "В большой охте..." -->
      <div class="absolute top-[70%] left-[9%] w-[38%] max-w-[580px]">
        <TextFlourish class="copy-flourish" />
        <p class="font-next fl-text-[8px/22px] text-black leading-tight sm:leading-relaxed">
          <span class="copy-line">В&nbsp;Большой Охте совсем нет садов, парков,</span>
          <span class="copy-line">но&nbsp;есть 5 уютных скверов и&nbsp;множество</span>
          <span class="copy-line">дворов с&nbsp;неповторимыми клумбами,</span>
          <span class="copy-line">о&nbsp;которых нам захотелось рассказать</span>
        </p>
      </div>

      <!-- "Читай – с библиотекой" -->
      <div class="absolute top-[83%] left-[56%] whitespace-nowrap rotate-[8.75deg] select-none">
        <TextFlourish />
        <span class="font-brush fl-text-[11px/32px] text-forest inline-block">Читай –</span>
        <span class="font-next fl-text-[9px/24px] text-forest inline-block ml-0.5 sm:ml-1">с библиотекой</span>
      </div>

      <!-- Aligned with the flower drawing on the right of the composition. -->
      <div class="absolute top-[95%] left-[47%] whitespace-nowrap rotate-[-10.24deg] select-none">
        <span class="font-brush fl-text-[11px/32px] text-forest">Твори –</span>
        <span class="font-next fl-text-[9px/24px] text-forest ml-1">с мечтой</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.copy-line {
  display: block;
  white-space: nowrap;
}
.copy-flourish {
  left: 0;
  right: auto;
  top: 0;
  bottom: auto;
  transform: translate(-52%, -50%);
}
.flourish-cover {
  position: absolute;
  background: white;
  pointer-events: none;
  width: 8%;
  height: 4%;
}
.flourish-cover-about { left: 46%; top: 44.5%; }
.flourish-cover-neighborhood { left: 4%; top: 65%; }
.flourish-cover-project { left: 46%; top: 83%; }
</style>
