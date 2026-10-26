<script setup>
import { useId } from 'vue'

const transparencyFilterId = useId()
</script>

<template>
  <svg class="text-flourish" viewBox="1170 1890 200 170" aria-hidden="true" focusable="false">
    <defs>
      <filter :id="transparencyFilterId" color-interpolation-filters="sRGB">
        <!-- White becomes transparent; the darker green brush strokes remain visible. -->
        <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  -1 -1 -1 0 3" />
      </filter>
    </defs>
    <image href="/assets/Group1.webp" width="2560" height="4253" :filter="`url(#${transparencyFilterId})`" />
  </svg>
</template>

<style scoped>
.text-flourish {
  position: absolute;
  width: clamp(28px, 6.5vw, 125px);
  height: auto;
  right: calc(100% - 0.3em);
  bottom: calc(100% - 0.8em);
  pointer-events: none;
}
</style>
