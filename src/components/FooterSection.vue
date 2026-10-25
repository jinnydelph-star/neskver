<script setup>
// Footer with library contacts and operating hours, matching Figma desktop and mobile layouts
</script>

<template>
  <footer id="contacts" class="relative w-full bg-white fl-pt-[48px/120px] fl-pb-[48px/96px]">
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12">
      <!-- Library name -->
      <h2 class="font-brush fl-text-[24px/52px] text-black text-center fl-mb-[24px/56px] tracking-tight">
        детская библиотека № 4
      </h2>

      <!-- 3-Column Footer content -->
      <div class="flex flex-row items-start justify-between fl-gap-[12px/64px]">
        <!-- Col 1: Leaf logo + Social & Partner icons below -->
        <div class="flex flex-col items-center shrink-0">
          <img
            src="/assets/588b9de8c108b3012c092ae21c779c9d32f4477e.webp"
            alt="Логотип (Не)скверное место"
            class="fl-w-[77px/219px] fl-h-[77px/219px] object-contain drop-shadow-xs"
          />
          <div class="flex items-center justify-center fl-gap-[10px/24px] fl-mt-[6px/12px]">
            <a
              href="https://vk.ru/kinder4_spb"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:opacity-80 transition-opacity"
              aria-label="ВКонтакте"
            >
              <img
                src="/assets/536ef787f07de1d367cde3b573db9a51997b8e2f.webp"
                alt="ВКонтакте"
                class="fl-w-[21px/59px] fl-h-[21px/59px] object-contain"
              />
            </a>
            <a href="https://kr-cbs.ru/libraries/detskaya4" target="_blank" rel="noopener noreferrer"
              class="flex items-center hover:opacity-80 transition-opacity" aria-label="Детская библиотека № 4 на сайте ЦБС">
              <img
                src="/assets/83e2b4b043340cb6a21e986168a831d8bea5e89d.webp"
                alt="ЦБС Красногвардейского района"
                class="fl-w-[17px/46px] fl-h-[23px/64px] object-contain"
              />
            </a>
          </div>
        </div>

        <!-- Col 2: Address and Phone -->
        <div class="flex-1 min-w-0">
          <h3 class="font-brush fl-text-[14px/32px] text-black mb-0.5 sm:mb-1 md:mb-2 tracking-wide">
            адрес:
          </h3>
          <p class="font-next fl-text-[10px/24px] text-black leading-tight sm:leading-snug md:leading-normal">
            Большая Пороховская ул.<br/>
            д. 12/34
          </p>

          <h3 class="font-brush fl-text-[14px/32px] text-black fl-mt-[12px/28px] mb-0.5 sm:mb-1 md:mb-2 tracking-wide">
            наш телефон:
          </h3>
          <p class="font-next fl-text-[10px/24px] text-black leading-tight sm:leading-snug md:leading-normal">
            <a
              href="tel:+78122240944"
              class="text-black no-underline hover:text-coral transition-colors font-medium whitespace-nowrap"
            >
              +7 (812) 224-09-44
            </a>
          </p>
        </div>

        <!-- Col 3: Operating hours -->
        <div class="flex-1 min-w-0">
          <h3 class="font-brush fl-text-[14px/32px] text-black mb-0.5 sm:mb-1 md:mb-2 tracking-wide">
            режим работы:
          </h3>
          <div class="font-next fl-text-[10px/24px] text-black leading-tight sm:leading-snug md:leading-normal space-y-0.5 sm:space-y-1">
            <p>понедельник-пятница: 11:00-19:00</p>
            <p>суббота: 10:00-18:00</p>
            <p>воскресенье: выходной день</p>
            <p class="text-black/85">последний рабочий день месяца: санитарный день</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
