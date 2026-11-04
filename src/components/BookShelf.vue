<script setup>
import useEmblaCarousel from 'embla-carousel-vue'

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
.book-shelf { max-width: 1600px; margin: clamp(30px, 4vw, 70px) auto 0; padding: 0 4% clamp(42px, 5vw, 90px); user-select: none; }
.shelf-row { display: flex; align-items: center; gap: clamp(12px, 2.5vw, 48px); }
.shelf-window { flex: 1; min-width: 0; overflow: hidden; padding: 12px 0; }
.shelf-books { display: flex; gap: clamp(20px, 4vw, 70px); }
.shelf-book { flex: 0 0 calc((100% - 140px) / 3); margin: 0; min-width: 0; text-align: center; }
.cover-space { height: clamp(230px, 27vw, 420px); display: flex; align-items: flex-end; justify-content: center; }
.cover-space img { display: block; max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain; border-radius: 8px; box-shadow: 4px 10px 28px #55451a30; }
.book-caption { padding-top: 20px; line-height: 1.4; }
.book-title { display: block; font-size: clamp(14px, 1.35vw, 22px); }
.book-author { display: block; margin-top: 7px; font-size: clamp(12px, 1vw, 16px); }
.shelf-arrow { flex: 0 0 44px; width: 44px; height: 44px; border-radius: 50%; border: 2px solid #3b5d2a; background: transparent; color: #3b5d2a; font: 38px/32px sans-serif; cursor: pointer; padding: 0 0 4px; }
.shelf-arrow:hover { background: #3b5d2a; color: #f4df87; }
.shelf-arrow:focus-visible { outline: 3px solid #3b5d2a; outline-offset: 5px; }
@media (max-width: 850px) { .shelf-book { flex-basis: calc((100% - 70px) / 2); } }
@media (max-width: 600px) { .cover-space { height: 300px; } .book-shelf { padding-inline: 4%; } .shelf-row { gap: 12px; } .shelf-book { flex-basis: 100%; } }
</style>
