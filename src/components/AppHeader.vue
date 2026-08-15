<script setup>
const navLinks = [
  { label: 'ПРОЕКТ', target: '#about' },
  { label: 'КАРТА', target: '#map' },
  { label: 'КОНТАКТЫ', target: '#contacts' },
]

const scrollTo = (target) => {
  const el = document.querySelector(target)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <header class="fixed top-0 left-0 w-full z-50 bg-coral h-[119px] flex items-center px-8">
    <!-- Left logo: district admin -->
    <div class="flex items-center gap-4 shrink-0">
      <img
        src="/assets/74aedee773af94d21ab08413f3130d2f6b6d29ec.webp"
        alt="Администрация Красногвардейского района"
        class="h-[99px] w-auto object-contain"
      />
    </div>

    <!-- Navigation -->
    <nav class="flex-1 flex justify-center gap-16">
      <a
        v-for="link in navLinks"
        :key="link.target"
        :href="link.target"
        class="font-next font-bold text-[30px] text-black no-underline hover:opacity-70 transition-opacity"
        @click.prevent="scrollTo(link.target)"
      >
        {{ link.label }}
      </a>
    </nav>

    <!-- Right logos -->
    <div class="flex items-center gap-4 shrink-0">
      <img
        src="/assets/07ca9858337afbeb01362d3733f2776895fcb5ce.webp"
        alt="Д4"
        class="h-[97px] w-auto object-contain"
      />
      <img
        src="/assets/b93f860de1b7cd7023e2ba941c1ca7322d47a9bb.webp"
        alt="ЦБС Красногвардейского района"
        class="h-[113px] w-auto object-contain"
      />
    </div>
  </header>
</template>
