<script setup>
import InlineVideo from './InlineVideo.vue'

const props = defineProps({
  number: { type: Number, required: true },
  title: { type: String, required: true },
  shortText: { type: String, default: '' },
  description: { type: String, default: '' },
  notices: { type: Array, default: () => [] },
  facts: { type: Array, default: () => [] },
  image: { type: String, default: '' },
  illustration: { type: String, default: '' },
  video: { type: String, default: '' },
  isExpanded: { type: Boolean, default: false },
  hasLogo: { type: Boolean, default: false },
  useBrushTitle: { type: Boolean, default: true },
})

const emit = defineEmits(['toggle'])
const toggle = () => {
  emit('toggle', props.number)
}
</script>

<template>
  <div :id="`location-${number}`" class="fl-mb-[16px/32px] group z-1">
    <!-- Header row: number + title + short text -->
    <div class="flex items-start fl-gap-[8px/16px] cursor-pointer select-none" @click="toggle">
      <!-- Number (Lime green in Figma) -->
      <span
        class="font-brush fl-text-[48px/110px] leading-none text-lime shrink-0 fl-w-[38px/76px] text-center select-none drop-shadow-xs">
        {{ number }}
      </span>

      <div class="flex-1 min-w-0">
        <!-- Logo (for library/mansion items) -->
        <div v-if="hasLogo" class="flex items-center gap-3 mb-1">
          <img src="/assets/588b9de8c108b3012c092ae21c779c9d32f4477e.webp" alt="Логотип"
            class="fl-w-[32px/60px] fl-h-[32px/60px] object-contain" />
        </div>

        <!-- Title -->
        <h3 :class="[
          'leading-tight text-black m-0 tracking-tight transition-colors duration-200 group-hover:text-forest',
          useBrushTitle ? 'font-brush fl-text-[20px/48px]' : 'font-brush fl-text-[18px/42px]'
        ]">
          {{ title }}
        </h3>

        <!-- Short text (always visible when collapsed) -->
        <Transition name="location-preview">
          <div v-if="!isExpanded && (shortText || illustration)" class="location-summary mt-1 md:mt-2">
            <p v-if="shortText" class="font-next fl-text-[13px/24px] text-black leading-relaxed min-w-0">
              {{ shortText }}
            </p>
            <img v-if="illustration" :src="illustration" alt="" aria-hidden="true"
              class="location-thumbnail" loading="lazy" />
          </div>
        </Transition>
      </div>

      <!-- Expand/collapse triangle button -->
      <button
        class="expand-btn shrink-0 mt-1 md:mt-4 fl-w-[16px/26px] fl-h-[16px/24px] flex items-center justify-center bg-transparent border-none cursor-pointer p-0"
        :class="{ 'rotated': isExpanded }" :aria-label="isExpanded ? 'Свернуть' : 'Развернуть'" @click.stop="toggle">
        <svg class="w-full h-full" viewBox="0 0 25 22" fill="none">
          <polygon points="12.5,22 0,0 25,0" :fill="isExpanded ? '#68A90A' : '#FF7F50'" />
        </svg>
      </button>
    </div>

    <!-- Expandable content -->
    <div class="location-content fl-ml-[38px/92px]" :class="{ 'expanded': isExpanded }">
      <div class="pt-2 md:pt-4">
        <!-- Full description -->
        <p v-if="description"
          class="font-next fl-text-[13px/24px] text-black leading-relaxed fl-mb-[14px/26px] max-w-[700px] whitespace-pre-line">
          {{ description }}
        </p>

        <div class="location-details" :class="{ 'has-illustration': illustration }">
          <div class="location-callouts">
        <!-- Notice callouts (ОБРАТИТЕ ВНИМАНИЕ) -->
        <div v-for="(notice, i) in notices" :key="'notice-' + i"
          class="flex items-start gap-2 md:gap-3 fl-mb-[10px/18px]">
          <div class="shrink-0 mt-0.5 md:mt-1 fl-w-[36px/66px]">
            <img src="/assets/122dff446fd4f4db256b1d191bfd462eb40dda50.svg" alt="" aria-hidden="true"
              class="w-full h-auto" />
          </div>
          <div>
            <p class="font-kurland text-coral fl-text-[16px/26px] font-normal m-0 tracking-wide">ОБРАТИТЕ ВНИМАНИЕ</p>
            <p class="font-next fl-text-[13px/22px] text-black mt-0.5 md:mt-1 whitespace-pre-line leading-snug">{{
              notice }}</p>
          </div>
        </div>

        <!-- Fact callouts (ИНТЕРЕСНЫЙ ФАКТ) -->
        <div v-for="(fact, i) in facts" :key="'fact-' + i" class="flex items-start gap-2 md:gap-3 fl-mb-[14px/24px]">
          <div class="shrink-0 mt-0.5 md:mt-1 fl-w-[28px/52px]">
            <img src="/assets/129c5be8c773e6396c887de9a0cfdaf2e3171579.svg" alt="" aria-hidden="true"
              class="w-full h-auto" />
          </div>
          <div>
            <p class="font-kurland text-coral fl-text-[16px/26px] font-normal m-0 tracking-wide">ИНТЕРЕСНЫЙ ФАКТ</p>
            <p class="font-next fl-text-[13px/24px] text-black mt-0.5 md:mt-1 max-w-[620px] leading-relaxed">{{ fact }}
            </p>
          </div>
        </div>

          </div>
          <img v-if="illustration" :src="illustration"
            :alt="`Рисунок: ${title}`"
            class="location-illustration" loading="lazy" />
        </div>

        <InlineVideo v-if="video" :src="video" :active="isExpanded" class="mt-2 md:mt-4 fl-mb-[14px/26px]" />
        <div v-else-if="image" class="mt-2 md:mt-4 fl-mb-[14px/26px]">
          <img :src="image" :alt="title"
            class="w-full max-w-[694px] h-auto rounded-[14px] md:rounded-[18px] object-cover shadow-sm" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.location-summary {
  display: flex;
  align-items: center;
  gap: clamp(12px, 1.5vw, 24px);
}
.location-thumbnail {
  display: block;
  flex: 0 0 25%;
  width: 25%;
  max-width: 150px;
  max-height: 140px;
  object-fit: contain;
  mix-blend-mode: multiply;
}
.location-preview-enter-active {
  transition: opacity 250ms ease, transform 250ms ease;
}
.location-preview-enter-from {
  opacity: 0;
  transform: translateY(6px);
}
.location-illustration {
  transition: opacity 300ms ease;
}
.location-content:not(.expanded) .location-illustration { opacity: 0; }
@media (prefers-reduced-motion: reduce) {
  .location-preview-enter-active, .location-illustration { transition: none; }
}

.location-details.has-illustration {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.1fr);
  align-items: end;
  gap: clamp(12px, 2vw, 28px);
}
.location-callouts { min-width: 0; }
.location-illustration {
  display: block;
  width: 100%;
  height: auto;
  margin-bottom: clamp(14px, 1.25vw, 24px);
  mix-blend-mode: multiply;
}
@media (max-width: 540px) {
  .location-details.has-illustration {
    grid-template-columns: minmax(0, 1fr);
    gap: 0;
  }
  .location-illustration {
    width: min(100%, 360px);
    justify-self: center;
  }
}
</style>
