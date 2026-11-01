<script setup>
import { defineProps, defineEmits, ref, watch } from 'vue'

const props = defineProps({
  number: { type: Number, required: true },
  title: { type: String, required: true },
  shortText: { type: String, default: '' },
  description: { type: String, default: '' },
  notices: { type: Array, default: () => [] },
  facts: { type: Array, default: () => [] },
  image: { type: String, default: '' },
  video: { type: String, default: '' },
  isExpanded: { type: Boolean, default: false },
  hasLogo: { type: Boolean, default: false },
  useBrushTitle: { type: Boolean, default: true },
})

const emit = defineEmits(['toggle'])
const videoElement = ref(null)
const baseUrl = import.meta.env.BASE_URL
const playing = ref(false)
const toggleVideo = async () => {
  if (!videoElement.value) return
  if (videoElement.value.paused) {
    try { await videoElement.value.play() } catch { playing.value = false }
  } else videoElement.value.pause()
}
watch(() => props.isExpanded, (expanded) => {
  if (!expanded) videoElement.value?.pause()
})

const toggle = () => {
  emit('toggle', props.number)
}
</script>

<template>
  <div class="fl-mb-[16px/32px] group z-1">
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
        <p v-if="shortText && !isExpanded"
          class="font-next fl-text-[13px/24px] text-black leading-relaxed mt-1 md:mt-2">
          {{ shortText }}
        </p>
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

        <button v-if="video" type="button"
          class="relative block w-full max-w-[694px] mt-2 md:mt-4 fl-mb-[14px/26px] overflow-hidden rounded-[14px] md:rounded-[18px] shadow-sm bg-black border-0 p-0 cursor-pointer"
          :aria-label="playing ? 'Пауза' : 'Воспроизвести видео'" @click="toggleVideo">
          <video ref="videoElement" :src="baseUrl + video.replace(/^\//, '')" playsinline webkit-playsinline preload="metadata"
            disablepictureinpicture disableremoteplayback controlslist="nofullscreen nodownload noremoteplayback"
            class="block w-full h-auto"
            @play="playing = true" @pause="playing = false" @ended="playing = false"
            @dblclick.prevent>
            Ваш браузер не поддерживает видео.
          </video>
          <span v-if="!playing" class="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span class="flex items-center justify-center w-16 h-16 rounded-full bg-black/60 text-white text-3xl" aria-hidden="true">▶</span>
          </span>
        </button>
        <div v-else-if="image" class="mt-2 md:mt-4 fl-mb-[14px/26px]">
          <img :src="image" :alt="title"
            class="w-full max-w-[694px] h-auto rounded-[14px] md:rounded-[18px] object-cover shadow-sm" />
        </div>
      </div>
    </div>
  </div>
</template>
