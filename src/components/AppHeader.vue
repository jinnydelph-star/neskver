<script setup>
const navLinks = [
  { label: "ПРОЕКТ", target: "#about" },
  { label: "КАРТА", target: "#map" },
  { label: "КОНТАКТЫ", target: "#contacts" },
];

const scrollTo = (target) => {
  const el = document.querySelector(target);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};
</script>

<template>
  <header
    class="fixed top-0 left-0 w-full z-50 bg-coral fl-h-[42px/119px] flex items-center justify-between fl-pl-[4px/98px] fl-pr-[8px/74px] shadow-sm">
    <!-- Left logo: district admin -->
    <div class="fl-w-[74px/248px] fl-h-[30px/99px] relative overflow-hidden shrink-0 flex items-center">
      <img
        src="/assets/74aedee773af94d21ab08413f3130d2f6b6d29ec.webp"
        alt="Администрация Красногвардейского района Санкт-Петербурга"
        class="absolute left-0 w-full h-[250.51%] top-[-63.64%] max-w-none pointer-events-none object-cover"
      />
    </div>

    <!-- Navigation -->
    <nav class="flex items-center justify-center fl-gap-[16px/180px] mx-auto">
      <a
        v-for="link in navLinks"
        :key="link.target"
        :href="link.target"
        class="font-next font-bold fl-text-[13px/30px] text-black uppercase no-underline hover:opacity-70 active:opacity-90 transition-opacity whitespace-nowrap leading-none tracking-normal select-none"
        @click.prevent="scrollTo(link.target)"
      >
        {{ link.label }}
      </a>
    </nav>

    <!-- Right logos -->
    <div class="flex items-center fl-gap-[8px/39px] shrink-0">
      <img
        src="/assets/07ca9858337afbeb01362d3733f2776895fcb5ce.webp"
        alt="Детская библиотека № 4"
        class="fl-w-[25px/97px] fl-h-[26px/97px] object-contain shrink-0 pointer-events-none"
      />
      <img
        src="/assets/b93f860de1b7cd7023e2ba941c1ca7322d47a9bb.webp"
        alt="ЦБС Красногвардейского района"
        class="fl-w-[29px/113px] fl-h-[29px/113px] object-contain shrink-0 pointer-events-none"
      />
    </div>
  </header>
</template>
