<script setup>
import { computed, nextTick, onMounted, onUnmounted, ref } from 'vue'

// Add new books here; navigation automatically includes them in the loop.
const books = [
  { image: 'plants-in-city.png', title: 'Растения в городе', author: 'Ирина Пескова' },
  { image: 'flowers.jpg', title: 'Как тебя зовут? Всё о цветах, живущих рядом с нами', author: 'Евгения Гюнтер, Анна Ритци' },
  { image: 'living-tree.jpg', title: 'Живое дерево', author: 'Кристи Матесон' },
  { image: 'bianki.jpg', title: 'ЛЕСНАЯ ГАЗЕТА', author: 'Виталий Бианки' },
  { image: 'future-garden.jpg', title: 'Сад будущего', author: 'Жиль Клеман, Венсан Граве' },
  { image: 'sophie-flowers.jpg', title: 'Софи в мире цветов', author: 'Стефан Каста, Бу Мосберг' },
  { image: 'sophie-trees.jpg', title: 'Софи в мире деревьев', author: 'Стефан Каста, Бу Мосберг' },
  { image: 'plant-travels.jpg', title: 'По земле и по воздуху. Как путешествуют растения', author: 'Анне Мёллер' },
  { image: 'grandpas-garden.jpg', title: 'Дедушкин сад', author: 'Соня Дановски' },
  { image: 'autumn-leaves.jpg', title: 'Почему осенью листопад?', author: 'Г. Граубин' },
  { image: 'green-world.jpg', title: 'Войди в зелёный мир', author: 'Г. Л. Ремезова, М. Е. Эратова' },
  { image: 'spring-flowers-1.jpg', title: 'Весенние цветы. Книга 1', author: '' },
  { image: 'spring-flowers-2.jpg', title: 'Весенние цветы. Книга 2', author: '' },
  { image: 'explore-trees.jpg', title: 'Деревья. Узнавай, создавай и исследуй!', author: 'Кевин Варвик, Паулина Морган' },
  { image: 'trees-details.jpg', title: 'Деревья', author: 'Природа в деталях' },
  { image: 'summer-flowers-1.jpg', title: 'Летние цветы. Книга 1', author: '' },
  { image: 'summer-flowers-2.jpg', title: 'Летние цветы. Книга 2', author: '' },
]
const start = ref(0)
const count = ref(3)
const shelf = ref(null)
const visibleBooks = computed(() => Array.from({ length: count.value + 2 }, (_, i) => books[(start.value + i - 1 + books.length) % books.length]))
const offset = ref(1)
const animating = ref(false)
let pendingDirection = 0
let animationTimer
let resetting = false
async function finishMove() {
  if (!pendingDirection) return
  resetting = true
  start.value = (start.value + pendingDirection + books.length) % books.length
  pendingDirection = 0
  clearTimeout(animationTimer)
  animating.value = false
  offset.value = 1
  await nextTick()
  requestAnimationFrame(() => requestAnimationFrame(() => { resetting = false }))
}
function move(direction) {
  if (pendingDirection || resetting) return
  pendingDirection = direction
  animating.value = true
  offset.value = 1 + direction
  animationTimer = setTimeout(finishMove, 650)
}
let observer
onMounted(() => {
  observer = new ResizeObserver(([entry]) => { count.value = entry.contentRect.width < 540 ? 1 : entry.contentRect.width < 850 ? 2 : 3 })
  observer.observe(shelf.value)
})
onUnmounted(() => { observer?.disconnect(); clearTimeout(animationTimer) })
let touchStart
function endSwipe(event) {
  if (touchStart === undefined) return
  const dx = event.changedTouches[0].clientX - touchStart.x
  const dy = event.changedTouches[0].clientY - touchStart.y
  if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) move(dx < 0 ? 1 : -1)
  touchStart = undefined
}
</script>

<template>
  <div ref="shelf" class="book-shelf font-next" role="region" aria-roledescription="карусель" aria-label="Книги зелёной полки"
    tabindex="0" @keydown.left.prevent="move(-1)" @keydown.right.prevent="move(1)">
    <div class="shelf-row">
      <button type="button" class="shelf-arrow" aria-label="Предыдущая книга" @click="move(-1)">‹</button>
      <div class="shelf-window" :style="{ '--book-count': count }"
        @touchstart.passive="touchStart = { x: $event.touches[0].clientX, y: $event.touches[0].clientY }" @touchend.passive="endSwipe" @touchcancel="touchStart = undefined">
        <!-- Reserve the tallest caption at the current card width for every slide. -->
        <div class="shelf-sizing" aria-hidden="true">
          <div v-for="book in books" :key="book.image" class="sizing-book">
            <div class="cover-space"></div>
            <div class="book-caption"><span class="book-title">{{ book.title }}</span><span v-if="book.author" class="book-author">{{ book.author }}</span></div>
          </div>
        </div>
        <div class="shelf-books" :class="{ 'is-moving': animating }" :style="{ '--offset': offset }" @transitionend.self="finishMove">
        <figure v-for="(book, index) in visibleBooks" :key="book.image" class="shelf-book" :aria-hidden="index < offset || index >= offset + count">
          <div class="cover-space"><img :src="`/assets/books/${book.image}`" :alt="`Обложка книги «${book.title}»`" loading="eager" /></div>
          <figcaption class="book-caption"><span class="book-title">{{ book.title }}</span><span v-if="book.author" class="book-author">{{ book.author }}</span></figcaption>
        </figure>
        </div>
      </div>
      <button type="button" class="shelf-arrow" aria-label="Следующая книга" @click="move(1)">›</button>
    </div>
  </div>
</template>

<style scoped>
.book-shelf { max-width: 1600px; margin: clamp(30px, 4vw, 70px) auto 0; padding: 0 4% clamp(42px, 5vw, 90px); }
.shelf-row { display: flex; align-items: center; gap: clamp(12px, 2.5vw, 48px); }
.shelf-window { --gap: clamp(20px, 4vw, 70px); display: grid; flex: 1; min-width: 0; overflow: hidden; touch-action: pan-y pinch-zoom; padding: 12px 0; }
.shelf-sizing { grid-area: 1 / 1; display: grid; grid-template-columns: repeat(var(--book-count), minmax(0, 1fr)); gap: var(--gap); visibility: hidden; pointer-events: none; }
.sizing-book { grid-area: 1 / 1; min-width: 0; text-align: center; }
.shelf-books { grid-area: 1 / 1; align-self: start; min-width: 0; display: flex; align-items: start; gap: var(--gap); transform: translateX(calc(-1 * var(--offset) * (100% + var(--gap)) / var(--book-count))); }
.shelf-books.is-moving { transition: transform 520ms cubic-bezier(.22, .61, .36, 1); }
.shelf-book { flex: 0 0 calc((100% - (var(--book-count) - 1) * var(--gap)) / var(--book-count)); margin: 0; min-width: 0; text-align: center; }
@media (prefers-reduced-motion: reduce) { .shelf-books.is-moving { transition-duration: 1ms; } }
.cover-space { height: clamp(230px, 27vw, 420px); display: flex; align-items: flex-end; justify-content: center; }
.cover-space img { display: block; max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain; border-radius: 8px; box-shadow: 4px 10px 28px #55451a30; }
.book-caption { padding-top: 20px; line-height: 1.4; }
.book-title { display: block; font-size: clamp(14px, 1.35vw, 22px); }
.book-author { display: block; margin-top: 7px; font-size: clamp(12px, 1vw, 16px); }
.shelf-arrow { flex: 0 0 44px; width: 44px; height: 44px; border-radius: 50%; border: 2px solid #3b5d2a; background: transparent; color: #3b5d2a; font: 38px/32px sans-serif; cursor: pointer; padding: 0 0 4px; }
.shelf-arrow:hover { background: #3b5d2a; color: #f4df87; }
.shelf-arrow:focus-visible, .book-shelf:focus-visible { outline: 3px solid #3b5d2a; outline-offset: 5px; }
@media (max-width: 600px) { .cover-space { height: 300px; } .book-shelf { padding-inline: 4%; } .shelf-row { gap: 12px; } }
</style>
