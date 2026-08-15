<script setup>
// Footer with library contacts
</script>

<template>
  <footer id="contacts" class="relative w-full bg-white py-16">
    <div class="max-w-[1920px] mx-auto px-[8%]">
      <!-- Logo and library name -->
      <div class="flex items-center justify-center gap-6 mb-10">
        <img
          src="/assets/588b9de8c108b3012c092ae21c779c9d32f4477e.webp"
          alt="Логотип"
          class="w-[180px] h-[180px] object-contain"
        />
      </div>

      <!-- Scrollbar decoration -->
      <div class="flex justify-center mb-8">
        <div class="bg-[#d9d9d9] rounded-[10px] h-[26px] w-[343px]"></div>
      </div>

      <!-- Library name -->
      <h2 class="font-brush text-[48px] text-black text-center mb-10">
        детская библиотека №4
      </h2>

      <!-- Contact info: 2 columns -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-[1200px] mx-auto">
        <!-- Left: address + phone -->
        <div>
          <h3 class="font-brush text-[30px] text-black mb-2">адрес:</h3>
          <p class="font-next text-[22px] text-black leading-[40px]">
            Большая Пороховская ул.<br/>
            д. 12/34
          </p>

          <h3 class="font-brush text-[30px] text-black mt-6 mb-2">наш телефон:</h3>
          <p class="font-next text-[22px] text-black leading-[40px]">
            <a href="tel:+78122240944" class="text-black no-underline hover:text-coral transition-colors">
              +7 (812) 224-09-44
            </a>
          </p>

          <!-- Small logos -->
          <div class="flex items-center gap-4 mt-6">
            <img
              src="/assets/536ef787f07de1d367cde3b573db9a51997b8e2f.webp"
              alt=""
              class="h-[59px] w-auto object-contain"
            />
            <img
              src="/assets/83e2b4b043340cb6a21e986168a831d8bea5e89d.webp"
              alt=""
              class="h-[64px] w-auto object-contain"
            />
          </div>
        </div>

        <!-- Right: working hours -->
        <div>
          <h3 class="font-brush text-[30px] text-black mb-2">режим работы:</h3>
          <div class="font-next text-[22px] text-black leading-[40px]">
            <p>понедельник-пятница: 11:00-19:00</p>
            <p>суббота: 10:00-18:00</p>
            <p>воскресенье: выходной день</p>
            <p>последний рабочий день месяца:</p>
            <p>санитарный день</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
