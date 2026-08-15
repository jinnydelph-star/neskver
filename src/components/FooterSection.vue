<script setup>
// Footer with library contacts
</script>

<template>
  <footer id="contacts" class="relative w-full bg-white fl-py-[24px/64px]">
    <div class="max-w-[1920px] mx-auto px-[4%] md:px-[8%]">
      <!-- Logo -->
      <div class="flex items-center justify-center fl-mb-[16px/40px]">
        <img
          src="/assets/588b9de8c108b3012c092ae21c779c9d32f4477e.webp"
          alt="Логотип"
          class="fl-w-[77px/180px] fl-h-[77px/180px] object-contain"
        />
      </div>

      <!-- Scrollbar decoration -->
      <div class="flex justify-center fl-mb-[16px/32px]">
        <div class="bg-[#d9d9d9] rounded-[10px] fl-h-[14px/26px] fl-w-[180px/343px]"></div>
      </div>

      <!-- Library name -->
      <h2 class="font-brush fl-text-[24px/48px] text-black text-center fl-mb-[20px/40px]">
        детская библиотека №4
      </h2>

      <!-- Contact info: 2 columns -->
      <div class="grid grid-cols-2 fl-gap-x-[16px/48px] fl-gap-y-[16px/32px] max-w-[1200px] mx-auto">
        <!-- Left: address + phone + logos -->
        <div>
          <h3 class="font-brush fl-text-[16px/30px] text-black mb-1 md:mb-2">адрес:</h3>
          <p class="font-next fl-text-[11px/22px] text-black fl-leading-[18px/40px]">
            Большая Пороховская ул.<br/>
            д. 12/34
          </p>

          <h3 class="font-brush fl-text-[16px/30px] text-black fl-mt-[12px/24px] mb-1 md:mb-2">наш телефон:</h3>
          <p class="font-next fl-text-[11px/22px] text-black fl-leading-[18px/40px]">
            <a href="tel:+78122240944" class="text-black no-underline hover:text-coral transition-colors">
              +7 (812) 224-09-44
            </a>
          </p>

          <!-- Small logos -->
          <div class="flex items-center fl-gap-[8px/16px] fl-mt-[12px/24px]">
            <img
              src="/assets/536ef787f07de1d367cde3b573db9a51997b8e2f.webp"
              alt=""
              class="fl-h-[21px/59px] w-auto object-contain"
            />
            <img
              src="/assets/83e2b4b043340cb6a21e986168a831d8bea5e89d.webp"
              alt=""
              class="fl-h-[23px/64px] w-auto object-contain"
            />
          </div>
        </div>

        <!-- Right: working hours -->
        <div>
          <h3 class="font-brush fl-text-[16px/30px] text-black mb-1 md:mb-2">режим работы:</h3>
          <div class="font-next fl-text-[11px/22px] text-black fl-leading-[18px/40px]">
            <p>понедельник-пятница: 11:00-19:00</p>
            <p>суббота: 10:00-18:00</p>
            <p>воскресенье: выходной день</p>
            <p>последний рабочий день месяца: санитарный день</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
