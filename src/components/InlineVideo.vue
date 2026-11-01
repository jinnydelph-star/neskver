<script setup>
import { ref, watch } from 'vue'
const props = defineProps({ src: { type: String, required: true }, active: { type: Boolean, default: true } })
const player = ref(null)
watch(() => props.active, active => { if (!active) player.value?.pause() })
const playing = ref(false)
const baseUrl = import.meta.env.BASE_URL
async function toggle() {
  if (!player.value) return
  if (player.value.paused) {
    try { await player.value.play() } catch { playing.value = false }
  } else player.value.pause()
}
</script>

<template>
  <div class="w-full max-w-[694px]">
  <button type="button" class="relative block w-full overflow-hidden rounded-[14px] md:rounded-[18px] shadow-sm bg-black border-0 p-0 cursor-pointer"
    :aria-label="playing ? 'Пауза' : 'Воспроизвести видео'" @click="toggle">
    <video ref="player" :src="baseUrl + src.replace(/^\//, '')" loop playsinline webkit-playsinline preload="metadata"
      disablepictureinpicture disableremoteplayback controlslist="nofullscreen nodownload noremoteplayback"
      class="block w-full h-auto"
      @play="playing = true" @pause="playing = false" @ended="playing = false" @dblclick.prevent />
    <span v-if="!playing" class="absolute inset-0 flex items-center justify-center pointer-events-none">
      <span class="flex items-center justify-center w-16 h-16 rounded-full bg-black/60 text-white text-3xl" aria-hidden="true">▶</span>
    </span>
  </button>
</div>
</template>

