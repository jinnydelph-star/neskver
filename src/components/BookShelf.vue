<script setup>
import useEmblaCarousel from 'embla-carousel-vue'
import { ref, onBeforeUnmount } from 'vue'

const spreadDialog = ref(null)
const selectedBook = ref(null)
const isClosing = ref(false)
let closeTimer
let previousOverflow = ''
const openSpread = (book) => {
  if (spreadDialog.value.open) return
  selectedBook.value = book
  isClosing.value = false
  previousOverflow = document.body.style.overflow
  spreadDialog.value.showModal()
  document.body.style.overflow = 'hidden'
}
const closeSpread = () => {
  if (isClosing.value || !spreadDialog.value?.open) return
  isClosing.value = true
  const duration = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 600
  closeTimer = window.setTimeout(() => {
    spreadDialog.value?.close()
    isClosing.value = false
  }, duration)
}
const restoreScroll = () => { document.body.style.overflow = previousOverflow }
onBeforeUnmount(() => {
  window.clearTimeout(closeTimer)
  if (spreadDialog.value?.open) restoreScroll()
})

const books = [
  { image: 'plants-in-city.webp', spread: 'plants-in-city-spread.jpg', title: 'Растения в городе', author: 'Ирина Пескова' },
  { image: 'flowers.webp', spread: 'flowers-spread.jpg', title: 'Как тебя зовут? Всё о цветах, живущих рядом с нами', author: 'Евгения Гюнтер, Анна Ритци' },
  { image: 'living-tree.webp', spread: 'living-tree-spread.jpg', title: 'Живое дерево', author: 'Кристи Матесон' },
  { image: 'bianki.webp', spread: 'bianki-spread.jpg', title: 'ЛЕСНАЯ ГАЗЕТА', author: 'Виталий Бианки' },
  { image: 'future-garden.webp', spread: 'future-garden-spread.jpg', title: 'Сад будущего', author: 'Жиль Клеман, Венсан Граве' },
  { image: 'sophie-flowers.webp', spread: 'sophie-flowers-spread.jpg', title: 'Софи в мире цветов', author: 'Стефан Каста, Бу Мосберг' },
  { image: 'sophie-trees.webp', spread: 'sophie-trees-spread.jpg', title: 'Софи в мире деревьев', author: 'Стефан Каста, Бу Мосберг' },
  { image: 'plant-travels.webp', spread: 'plant-travels-spread.jpg', title: 'По земле и по воздуху. Как путешествуют растения', author: 'Анне Мёллер' },
  { image: 'grandpas-garden.webp', spread: 'grandpas-garden-spread.jpg', title: 'Дедушкин сад', author: 'Соня Дановски' },
  { image: 'autumn-leaves.webp', spread: 'autumn-leaves-spread.jpg', title: 'Почему осенью листопад?', author: 'Г. Граубин' },
  { image: 'green-world.webp', spread: 'green-world-spread.jpg', title: 'Войди в зелёный мир', author: 'Г. Л. Ремезова, М. Е. Эратова' },
  { image: 'spring-flowers-1.webp', spread: 'spring-flowers-1-spread.jpg', title: 'Весенние цветы. Книга 1', author: '' },
  { image: 'spring-flowers-2.webp', spread: 'spring-flowers-2-spread.jpg', title: 'Весенние цветы. Книга 2', author: '' },
  { image: 'explore-trees.webp', spread: 'explore-trees-spread.jpg', title: 'Деревья. Узнавай, создавай и исследуй!', author: 'Кевин Варвик, Паулина Морган' },
  { image: 'trees-details.webp', spread: 'trees-details-spread.jpg', title: 'Деревья', author: 'Природа в деталях' },
  { image: 'summer-flowers-1.webp', spread: 'summer-flowers-1-spread.jpg', title: 'Летние цветы. Книга 1', author: '' },
  { image: 'summer-flowers-2.webp', spread: 'summer-flowers-2-spread.jpg', title: 'Летние цветы. Книга 2', author: '' },
]

const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start', skipSnaps: true })
const move = (direction) => direction > 0 ? emblaApi.value?.scrollNext() : emblaApi.value?.scrollPrev()
</script>

<template>
  <div class="book-shelf font-next" role="region" aria-roledescription="карусель" aria-label="Книги зелёной полки">
    <div class="shelf-row">
      <button type="button" class="shelf-arrow" aria-label="Предыдущая книга" @click="move(-1)">‹</button>
      <div ref="emblaRef" class="shelf-window">
        <div class="shelf-books">
          <figure v-for="book in books" :key="book.image" class="shelf-book">
            <component :is="book.spread ? 'button' : 'div'" class="cover-space" :class="{ 'book-trigger': book.spread }" :type="book.spread ? 'button' : undefined" :aria-haspopup="book.spread ? 'dialog' : undefined" @click="book.spread && openSpread(book)"><img :src="`/assets/books/${book.image}`" :alt="`Обложка книги «${book.title}»`" loading="lazy" /></component>
            <figcaption class="book-caption"><button v-if="book.spread" type="button" class="book-title book-trigger" aria-haspopup="dialog" @click="openSpread(book)">{{ book.title }}</button><span v-else class="book-title">{{ book.title }}</span><span v-if="book.author" class="book-author">{{ book.author }}</span></figcaption>
          </figure>
        </div>
      </div>
      <button type="button" class="shelf-arrow" aria-label="Следующая книга" @click="move(1)">›</button>
    </div>
  </div>
  <Teleport to="body">
    <dialog ref="spreadDialog" class="spread-dialog" :class="{ 'is-closing': isClosing }" :aria-label="`Разворот книги «${selectedBook?.title}»`" @close="restoreScroll" @cancel.prevent="closeSpread" @click="event => { if (event.target === spreadDialog) closeSpread() }">
      <div class="spread-content">
        <button type="button" class="spread-close" aria-label="Закрыть изображение" autofocus @click="closeSpread">×</button>
        <img v-if="selectedBook" :src="`/assets/books/${selectedBook.spread}`" :alt="`Разворот книги «${selectedBook.title}»`" />
      </div>
    </dialog>
  </Teleport>
</template>

<style scoped>
.book-shelf { max-width: 1600px; margin: clamp(30px, 4vw, 70px) auto 0; padding: 0 4% clamp(42px, 5vw, 90px); user-select: none; }
.shelf-row { display: flex; align-items: center; gap: clamp(12px, 2.5vw, 48px); }
.shelf-window { flex: 1; min-width: 0; overflow: hidden; padding: 12px 0; }
.shelf-books { display: flex; gap: clamp(20px, 4vw, 70px); }
.shelf-book { flex: 0 0 calc((100% - 140px) / 3); margin: 0; min-width: 0; text-align: center; }
.cover-space { height: clamp(230px, 27vw, 420px); display: flex; align-items: flex-end; justify-content: center; }
.cover-space img { display: block; max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain; border-radius: 8px; box-shadow: 4px 10px 28px #55451a30; }
.book-caption { padding-top: 20px; line-height: 1.4; }
.book-title { display: block; font-size: clamp(14px, 1.35vw, 22px); }
.book-trigger { width: 100%; border: 0; padding: 0; background: transparent; color: inherit; font: inherit; cursor: pointer; }
.book-title.book-trigger { font-size: clamp(14px, 1.35vw, 22px); line-height: inherit; text-align: center; }
.book-trigger:focus-visible { outline: 3px solid #3b5d2a; outline-offset: 5px; border-radius: 8px; }
.spread-dialog { position: fixed; inset: 0; width: 100%; height: 100%; max-width: none; max-height: none; margin: 0; padding: 24px; border: 0; background: transparent; box-sizing: border-box; overflow: hidden; }
.spread-dialog[open] { display: flex; align-items: center; justify-content: center; }
.spread-dialog::backdrop { background: rgba(0, 0, 0, 0.72); }
.spread-dialog[open]::backdrop { animation: spread-backdrop-in 600ms ease-out both; }
.spread-dialog[open] .spread-content { animation: spread-image-in 600ms cubic-bezier(0.22, 1, 0.36, 1) both; }
.spread-dialog[open].is-closing { animation: spread-dialog-out 600ms ease-in-out both; }
@keyframes spread-dialog-out { from { opacity: 1; } to { opacity: 0; } }
.spread-dialog[open].is-closing::backdrop { animation: spread-backdrop-out 600ms ease-in-out both; }
@keyframes spread-backdrop-out { from { background: rgba(0, 0, 0, 0.72); } to { background: rgba(0, 0, 0, 0); } }
@keyframes spread-backdrop-in { from { background: rgba(0, 0, 0, 0); } to { background: rgba(0, 0, 0, 0.72); } }
@keyframes spread-image-in { from { opacity: 0; transform: translateY(20px) scale(0.94); } to { opacity: 1; transform: translateY(0) scale(1); } }
@media (prefers-reduced-motion: reduce) {
  .spread-dialog[open], .spread-dialog[open]::backdrop, .spread-dialog[open] .spread-content { animation: none !important; }
}
.spread-content { position: relative; max-width: 100%; }
.spread-content img { display: block; width: auto; height: auto; max-width: 100%; max-height: calc(100dvh - 48px); object-fit: contain; box-shadow: 0 12px 50px #0006; }
.spread-close { position: absolute; top: 8px; right: 8px; width: 40px; height: 40px; border: 0; border-radius: 50%; background: #fff; color: #222; font: 30px/1 sans-serif; cursor: pointer; box-shadow: 0 2px 10px #0004; }
.spread-close:focus-visible { outline: 3px solid #3b5d2a; outline-offset: 3px; }
.book-author { display: block; margin-top: 7px; font-size: clamp(12px, 1vw, 16px); }
.shelf-arrow { flex: 0 0 44px; width: 44px; height: 44px; border-radius: 50%; border: 2px solid #3b5d2a; background: transparent; color: #3b5d2a; font: 38px/32px sans-serif; cursor: pointer; padding: 0 0 4px; }
.shelf-arrow:hover { background: #3b5d2a; color: #f4df87; }
.shelf-arrow:focus-visible { outline: 3px solid #3b5d2a; outline-offset: 5px; }
@media (max-width: 850px) { .shelf-book { flex-basis: calc((100% - 70px) / 2); } }
@media (max-width: 600px) { .cover-space { height: 300px; } .book-shelf { padding-inline: 4%; } .shelf-row { gap: 12px; } .shelf-book { flex-basis: 100%; } }
</style>

