<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  number: { type: Number, required: true },
  title: { type: String, required: true },
  shortText: { type: String, default: '' },
  description: { type: String, default: '' },
  notices: { type: Array, default: () => [] },
  facts: { type: Array, default: () => [] },
  image: { type: String, default: '' },
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
  <div class="fl-mb-[16px/32px]">
    <!-- Header row: number + title + short text -->
    <div class="flex items-start fl-gap-[8px/16px] cursor-pointer" @click="toggle">
      <!-- Number -->
      <span class="font-brush fl-text-[48px/100px] leading-none text-green-accent shrink-0 fl-w-[38px/70px] text-center select-none">
        {{ number }}
      </span>

      <div class="flex-1 min-w-0">
        <!-- Logo (for library/mansion items) -->
        <div v-if="hasLogo" class="flex items-center gap-3 mb-1">
          <img
            src="/assets/588b9de8c108b3012c092ae21c779c9d32f4477e.webp"
            alt=""
            class="fl-w-[32px/60px] fl-h-[32px/60px] object-contain"
          />
        </div>

        <!-- Title -->
        <h3
          :class="[
            'leading-tight text-black m-0',
            useBrushTitle ? 'font-brush fl-text-[18px/42px]' : 'font-kurland fl-text-[16px/36px]'
          ]"
        >
          {{ title }}
        </h3>

        <!-- Short text (always visible) -->
        <p v-if="shortText" class="font-next fl-text-[12px/22px] text-black leading-relaxed mt-1 md:mt-2">
          {{ shortText }}
        </p>
      </div>

      <!-- Expand/collapse button -->
      <button
        class="expand-btn shrink-0 mt-1 md:mt-4 fl-w-[16px/25px] fl-h-[16px/22px] flex items-center justify-center bg-transparent border-none cursor-pointer p-0"
        :class="{ 'rotated': isExpanded }"
        :aria-label="isExpanded ? 'Свернуть' : 'Развернуть'"
        @click.stop="toggle"
      >
        <svg class="w-full h-full" viewBox="0 0 25 22" fill="none">
          <polygon points="12.5,22 0,0 25,0" :fill="isExpanded ? '#68A90A' : '#FF7F50'" />
        </svg>
      </button>
    </div>

    <!-- Expandable content -->
    <div
      class="location-content fl-ml-[38px/86px]"
      :class="{ 'expanded': isExpanded }"
    >
      <div class="pt-2 md:pt-4">
        <!-- Full description -->
        <p v-if="description" class="font-next fl-text-[12px/22px] text-black leading-relaxed fl-mb-[12px/24px] max-w-[700px]">
          {{ description }}
        </p>

        <!-- Notice callouts -->
        <div v-for="(notice, i) in notices" :key="'notice-'+i" class="flex items-start gap-2 md:gap-3 fl-mb-[8px/16px]">
          <div class="shrink-0 mt-0.5 md:mt-1 fl-w-[36px/66px]">
            <svg class="w-full h-auto" viewBox="0 0 66 31">
              <circle cx="12" cy="15" r="10" fill="none" stroke="#3B5D2A" stroke-width="2"/>
              <circle cx="12" cy="15" r="4" fill="#3B5D2A"/>
              <circle cx="36" cy="15" r="10" fill="none" stroke="#3B5D2A" stroke-width="2"/>
              <circle cx="36" cy="15" r="4" fill="#3B5D2A"/>
            </svg>
          </div>
          <div>
            <p class="font-kurland text-coral fl-text-[14px/24px] font-normal m-0">ОБРАТИТЕ ВНИМАНИЕ</p>
            <p class="font-next fl-text-[12px/20px] text-black mt-0.5 md:mt-1">{{ notice }}</p>
          </div>
        </div>

        <!-- Fact callouts -->
        <div v-for="(fact, i) in facts" :key="'fact-'+i" class="flex items-start gap-2 md:gap-3 fl-mb-[12px/24px]">
          <div class="shrink-0 mt-0.5 md:mt-1 fl-w-[28px/52px]">
            <svg class="w-full h-auto" viewBox="0 0 52 43">
              <path d="M10 35 C10 15 20 5 30 8 C35 10 38 20 35 30" stroke="#3B5D2A" stroke-width="3" fill="none"/>
              <circle cx="15" cy="38" r="4" fill="#3B5D2A"/>
              <circle cx="25" cy="38" r="4" fill="#3B5D2A"/>
            </svg>
          </div>
          <div>
            <p class="font-kurland text-coral fl-text-[14px/24px] font-normal m-0">ИНТЕРЕСНЫЙ ФАКТ</p>
            <p class="font-next fl-text-[12px/22px] text-black mt-0.5 md:mt-1 max-w-[600px]">{{ fact }}</p>
          </div>
        </div>

        <!-- Photo -->
        <div v-if="image" class="mt-2 md:mt-4 fl-mb-[12px/24px]">
          <img
            :src="image"
            :alt="title"
            class="w-full max-w-[694px] h-auto rounded-[14px] md:rounded-[18px] object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</template>
