<script setup>
import useEmblaCarousel from 'embla-carousel-vue'
import { ref, onBeforeUnmount } from 'vue'

const vFitText = {
  mounted(element) {
    const fit = () => {
      const content = element.firstElementChild
      if (!element.clientHeight || !content) return
      element.style.fontSize = ''
      let size = parseFloat(getComputedStyle(element).fontSize)
      const styles = getComputedStyle(element)
      const available = element.clientHeight - parseFloat(styles.paddingTop) - parseFloat(styles.paddingBottom)
      while (content.offsetHeight > available && size > 1) {
        size -= 0.25
        element.style.fontSize = `${size}px`
      }
    }
    element.fitObserver = new ResizeObserver(fit)
    element.fitObserver.observe(element)
    document.fonts.ready.then(() => { if (element.isConnected) fit() })
  },
  unmounted(element) { element.fitObserver.disconnect() },
}

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
  { image: 'trees-details.webp', spread: 'trees-details-spread.jpg', title: 'Деревья', author: 'Лора Хауэлл' },
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
        <div v-if="selectedBook?.image === 'living-tree.webp'" v-fit-text class="spread-description">
          <div class="spread-description-inner">
            <div class="spread-points">
              <p><strong>Волшебство своими руками:</strong> страница оживает от каждого твоего действия — подуй, чтобы сорвать осенние листья, хлопни в ладоши, чтобы пошел снег, или погладь ветку, чтобы распустились почки!</p>
              <p><strong>Книга превращается в интерактивную игру:</strong> здесь не нужно просто сидеть и слушать — можно стучать, щекотать страницы, считать тайные знаки и управлять временами года, как могущественный маг.</p>
              <p><strong>Суперсила, которая работает и на улице:</strong> после книги так здорово выйти во двор и проверить свои заклинания на настоящих деревьях, наблюдая, как оживает и меняется природа вокруг.</p>
            </div>
            <p class="spread-bibliography"><strong>Матесон, Кристи</strong>.<br />Живое дерево [Текст] : волшебная книга-игра для самых маленьких / Кристи Матесон ; [пер. с англ. Любови Глотовой]. - Москва : Манн, Иванов и Фербер, 2017. - [37] с. : цв. ил. - (МИФ детство). - 0+. - <strong>ISBN&nbsp;</strong>978-5-00100-931-3 (в пер.)</p>
          </div>
        </div>
        <div v-if="selectedBook?.image === 'summer-flowers-2.webp'" v-fit-text class="spread-description">
          <div class="spread-description-inner">
            <div class="spread-points">
              <p><strong>Буйство красок в разгар лета:</strong> ты раскроешь секреты полевых и лесных цветов, которые распускаются под жарким солнцем и превращают обычные луга в пёстрый ковёр.</p>
              <p><strong>Истории от легендарного лесного профессора:</strong> знаменитый натуралист Дмитрий Кайгородов объясняет жизнь растений так поэтично, что каждый бутон кажется героем сказки.</p>
              <p><strong>Твой гид по летним тропинкам:</strong> книга поможет легко узнавать травы и цветы во время каникул за городом, походов в лес или прогулок по дачным полянам.</p>
            </div>
            <p class="spread-bibliography"><strong>Летние цветы</strong> [Текст] : книга для чтения в семье и школе : по произведениям Д. Н. Кайгородова / [гл. ред. Д. К. Никитин]. - Москва : Стрелец, 2010. - (Детям о русской природе). <strong>Кн. 2</strong>. - 2010. - 48 с. : цв. ил. - <strong>ISBN&nbsp;</strong>978-5-89409-056-6 (в обл.)</p>
          </div>
        </div>
        <div v-if="selectedBook?.image === 'summer-flowers-1.webp'" v-fit-text class="spread-description">
          <div class="spread-description-inner">
            <div class="spread-points">
              <p><strong>Буйство красок в разгар лета:</strong> ты раскроешь секреты полевых и лесных цветов, которые распускаются под жарким солнцем и превращают обычные луга в пёстрый ковёр.</p>
              <p><strong>Истории от легендарного лесного профессора:</strong> знаменитый натуралист Дмитрий Кайгородов объясняет жизнь растений так поэтично, что каждый бутон кажется героем сказки.</p>
              <p><strong>Твой гид по летним тропинкам:</strong> книга поможет легко узнавать травы и цветы во время каникул за городом, походов в лес или прогулок по дачным полянам.</p>
            </div>
            <p class="spread-bibliography"><strong>Летние цветы</strong> [Текст] : книга для чтения в семье и школе : по произведениям Д. Н. Кайгородова / [гл. ред. Д. К. Никитин]. - Москва : Стрелец, 2010. - (Детям о русской природе). <strong>Кн. 1</strong>. - 2010. - 48 с. : цв. ил. - <strong>ISBN&nbsp;</strong>978-5-89409-055-9 (в обл.)</p>
          </div>
        </div>
        <div v-if="selectedBook?.image === 'trees-details.webp'" v-fit-text class="spread-description">
          <div class="spread-description-inner">
            <div class="spread-points">
              <p><strong>Твой личный карманный определитель:</strong> ты научишься с одного взгляда на листья, шишки или кору распознавать любые деревья — от привычных берез у дома до редких заморских экзотов.</p>
              <p><strong>Тайная жизнь великанов:</strong> книга покажет скрытые механизмы природы — как огромные деревья незаметно растут, цветут причудливыми бутонами и расселяют свои семена на километры вокруг.</p>
              <p><strong>Билет в клуб исследователей природы:</strong> с этим гидом обычная прогулка по парку или лесу моментально превращается в научную экспедицию юного натуралиста.</p>
            </div>
            <p class="spread-bibliography"><strong>Хауэлл, Лора</strong>.<br />Деревья [Текст] : [для среднего школьного возраста / Лора Хауэлл ; пер. с англ. С. Г. Чернецова-Рождественского]. - Москва : РОСМЭН, 2017. - 76, [3] с. : цв. ил. - (Природа в деталях). - Словарь: с. 78. - Указ.: с. 79. - <strong>ISBN&nbsp;</strong>978-5-353-08350-4</p>
          </div>
        </div>
        <div v-if="selectedBook?.image === 'explore-trees.webp'" v-fit-text class="spread-description">
          <div class="spread-description-inner">
            <div class="spread-points">
              <p><strong>Стань древесным детективом:</strong> книга научит вычислять точный возраст лесных великанов по кольцам и отличать вид деревьев просто на ощупь по их коре.</p>
              <p><strong>Наука, творчество и игры под одной обложкой:</strong> здесь собраны не только факты и задорные стихи, но и идеи экспериментов, поделок и ярких коллажей из листьев.</p>
              <p><strong>Узнай, как деревья спасают планету:</strong> ты раскроешь внутреннее устройство зелёных гигантов и поймёшь, какую невидимую, но жизненно важную работу они выполняют для каждого из нас.</p>
            </div>
            <p class="spread-bibliography"><strong>Варвик, Кевин</strong>.<br />Деревья : [узнавай, создавай и исследуй! : для детей младшего школьного возраста] / Кевин Варвик, Паулина Морган ; [перевод с английского Людмилы Смилевской]. - Москва : Эксмо : Эксмодетство, 2020. - 63, [1] с. : цв. ил. - (Что на Земле интересного?). - Алф. указ.: с. 64. - 0+. - <strong>ISBN&nbsp;</strong>978-5-04-110732-1 (в пер.)</p>
          </div>
        </div>
        <div v-if="selectedBook?.image === 'spring-flowers-2.webp'" v-fit-text class="spread-description">
          <div class="spread-description-inner">
            <div class="spread-points">
              <p><strong>Первые разведчики весны:</strong> ты узнаешь, какие смелые цветы пробиваются прямо сквозь ледяную корку и тающий снег, когда весь остальной лес ещё крепко спит.</p>
              <p><strong>Секреты от легендарного профессора:</strong> знаменитый знаток природы Дмитрий Кайгородов раскроет повадки первоцветов так, будто это лесную сказку.</p>
              <p><strong>Шпаргалка для юного следопыта:</strong> книга поможет безошибочно находить и узнавать самые редкие весенние бутоны во время первых тёплых прогулок.</p>
            </div>
            <p class="spread-bibliography"><strong>Весенние цветы</strong> [Текст] : книга для чтения в семье и школе : по произведениям Д. Н. Кайгородова / [гл. ред. Д. К. Никитин]. - Москва : Стрелец, 2009. - (Детям о русской природе). <strong>Кн. 2</strong>. - 2009. - 48 с. : цв. ил. - <strong>ISBN&nbsp;</strong>978-5-89409-048-1 (в обл.)</p>
          </div>
        </div>
        <div v-if="selectedBook?.image === 'spring-flowers-1.webp'" v-fit-text class="spread-description">
          <div class="spread-description-inner">
            <div class="spread-points">
              <p><strong>Первые разведчики весны:</strong> ты узнаешь, какие смелые цветы пробиваются прямо сквозь ледяную корку и тающий снег, когда весь остальной лес ещё крепко спит.</p>
              <p><strong>Секреты от легендарного профессора:</strong> знаменитый знаток природы Дмитрий Кайгородов раскроет повадки первоцветов так, будто это лесную сказку.</p>
              <p><strong>Шпаргалка для юного следопыта:</strong> книга поможет безошибочно находить и узнавать самые редкие весенние бутоны во время первых тёплых прогулок.</p>
            </div>
            <p class="spread-bibliography"><strong>Весенние цветы</strong> [Текст] : книга для чтения в семье и школе : по произведениям Д. Н. Кайгородова / [гл. ред. Д. К. Никитин]. - Москва : Стрелец, 2009. - (Детям о русской природе). <strong>Кн. 1</strong>. - 2009. - 48 с. : цв. ил. - <strong>ISBN&nbsp;</strong>978-5-89409-047-4 (в обл.)</p>
          </div>
        </div>
        <div v-if="selectedBook?.image === 'green-world.webp'" v-fit-text class="spread-description">
          <div class="spread-description-inner">
            <div class="spread-points">
              <p><strong>Растения умеют «разговаривать» друг с другом:</strong> ты раскроешь тайные сигналы и хитрые способы, с помощью которых травы и деревья предупреждают соседей об опасности или помогают выжить.</p>
              <p><strong>Путеводитель для экспедиций:</strong> книга превратит поход в лес, на болото или луг в расследование того, что скрыто под землей и прямо у тебя под ногами.</p>
              <p><strong>Загляни за кулисы природного баланса:</strong> ты увидишь, как разные растения дружат, соперничают за свет и воду и создают слаженную команду, словно единый живой организм.</p>
            </div>
            <p class="spread-bibliography"><strong>Ремезова, Галина Леонидовна</strong>.<br />Войди в зеленый мир [Текст] : книга для учащихся / Г. Л. Ремезова, М. Е. Эратова. - Москва : Просвещение : Учебная литература, 1996. - 192 с. : ил. - Указ. растений: с. 187-191. - <strong>ISBN&nbsp;</strong>5-09-007283-3</p>
          </div>
        </div>
        <div v-if="selectedBook?.image === 'autumn-leaves.webp'" v-fit-text class="spread-description">
          <div class="spread-description-inner">
            <div class="spread-points">
              <p><strong>Тайна осеннего маскарада:</strong> ты узнаешь, куда на самом деле прячется зелёная краска из листьев и зачем деревья устраивают грандиозное переодевание в золото и багрянец.</p>
              <p><strong>Главная тайна ёлок и берёз:</strong> книга объяснит, почему лиственные деревья обязаны сбросить листву перед зимой, а ёжистые хвойные спокойно щеголяют в иголках круглый год.</p>
              <p><strong>Как дерево переживает лютый мороз:</strong> ты найдёшь ответы, чем «обедают» лесные великаны и как они умудряются крепко спать под снежным одеялом, не замерзая.</p>
            </div>
            <p class="spread-bibliography"><strong>Граубин, Георгий Рудольфович (детский поэт ; 1929-2011).</strong><br /><strong>Почему осенью листопад?</strong> [Текст] : [для младшего школьного возраста] / Г. Граубин ; рис. А. Воробьева. - Москва : АСТ : Аванта, 2015. - 44, [3] с. : цв. ил. - (Почемучкины книжки). - 0+. - <strong>ISBN&nbsp;</strong>978-5-17-089674-5</p>
          </div>
        </div>
        <div v-if="selectedBook?.image === 'grandpas-garden.webp'" v-fit-text class="spread-description">
          <div class="spread-description-inner">
            <div class="spread-points">
              <p><strong>Секретная и важная миссия:</strong> девочке Лине предстоит в одиночку спасти дедушкин прекрасный сад и справиться с неожиданным испытанием, пока дедушка в больнице.</p>
              <p><strong>Атмосферные иллюстрации:</strong> художница Соня Дановски нарисовала настолько детальные и живые иллюстрации, что цветы и теплицы на страницах кажутся осязаемыми.</p>
              <p><strong>История о настоящем доверии и сюрпризах природы:</strong> ты узнаешь, как любовь, смелость и капелька терпения способны сотворить в обычном саду настоящее чудо.</p>
            </div>
            <p class="spread-bibliography"><strong>Дановски, Соня</strong>.<br />Дедушкин сад : для дошкольного возраста / Соня Дановски ; перевод с немецкого Галины Эрли ; рисунки автора. - Москва : Энас-книга, 2021. - [49] с. : цв. ил. - (Добрая книжка). - 0+. - <strong>ISBN&nbsp;</strong>978-5-91921-967-5 (в пер.)</p>
          </div>
        </div>
        <div v-if="selectedBook?.image === 'plant-travels.webp'" v-fit-text class="spread-description">
          <div class="spread-description-inner">
            <div class="spread-points">
              <p><strong>Растения — тайные путешественники:</strong> ты раскроешь секрет, как травы и деревья без ног, крыльев и билетов на поезд умудряются забираться на высокие крыши домов и в песочницы.</p>
              <p><strong>Приключения более захватывающие, чем в кино:</strong> семена летают на собственных парашютах, катаются автостопом на животных и отправляются в экстремальные экспедиции по ветру и воде.</p>
              <p><strong>Взгляд сыщика на привычный двор:</strong> после этой книги ты сразу догадаешься, каким хитрым трюком каждый зеленый «пришелец» добрался до твоего двора.</p>
            </div>
            <p class="spread-bibliography"><strong>Меллер, Анне</strong>.<br />По земле и по воздуху = Über Land und durch die Lift [Текст] : как путешествуют растения / Анне Меллер ; ред. немецкого текста Рене Бухер ; пер. с нем. Йозефа и Николая Клименюков. - Москва : Розовый жираф, 2010. - [29] с. : ил. - <strong>ISBN&nbsp;</strong>978-5-903497-49-2 (в пер.)</p>
          </div>
        </div>
        <div v-if="selectedBook?.image === 'sophie-trees.webp'" v-fit-text class="spread-description">
          <div class="spread-description-inner">
            <div class="spread-points">
              <p><strong>Секреты вещей вокруг нас:</strong> ты раскроешь, из каких деревьев делают скрипки, палочки для мороженого, лыжи, страницы любимых книг и даже старинные боевые корабли.</p>
              <p><strong>Экспедиция глазами муравьишки:</strong> крошечная и любопытная проводница Софи покажет гигантские деревья снизу вверх — с ракурса, о котором ты даже не догадывался.</p>
              <p><strong>Ответы на главные лесные загадки:</strong> книга расскажет, сколько веков может прожить дуб-великан и какая магия раскрашивает осенние кленовые листья в багряный и золотой.</p>
            </div>
            <p class="spread-bibliography"><strong>Каста, Стефан</strong> (шведский детский писатель ; 1949- ).<br />Софи в мире деревьев = Sofis Tradexpedition [Текст] : [для детей дошкольного и младшего школьного возраста] / Стефан Каста; Бу Мосберг [ил.] ; пер. Ирины Матыциной. - Москва : Белая ворона : Albus Corvus, 2018. - 45, [4] с. : цв. ил. - 6+. - <strong>ISBN&nbsp;</strong>978-5-906640-32-1 : Б. ц.</p>
          </div>
        </div>
        <div v-if="selectedBook?.image === 'sophie-flowers.webp'" v-fit-text class="spread-description">
          <div class="spread-description-inner">
            <div class="spread-points">
              <p><strong>У цветков есть суперспособности:</strong> ты узнаешь, какая трава стреляет семенами, кто ловит в ловушку пчёл и как определять точное время всего лишь по раскрытой кувшинке!</p>
              <p><strong>Необычный крошечный проводник:</strong> в захватывающую экспедицию по миру трав и деревьев тебя позовёт любопытная муравьишка Софи, которая видит природу с совершенно нового ракурса.</p>
              <p><strong>Шокирующая жизнь привычных растений:</strong> даже обычная герань на окне или сорняки у дороги окажутся полны диких и неожиданных секретов.</p>
            </div>
            <p class="spread-bibliography"><strong>Каста, Стефан</strong> (шведский детский писатель ; 1949- ).<br />Софи в мире цветов = Sofis blomsterexpedition [Текст] : [для детей дошкольного и младшего школьного возраста] / Стефан Каста ; [ил.] Бу Мосберг ; пер. [со швед.] Ирины Матыциной. - Москва : Белая ворона : Albus Corvus, 2016. - 50 с. : цв. ил. - 6+. - <strong>ISBN&nbsp;</strong>978-5-906640-33-8 (в пер.) : Б. ц.</p>
          </div>
        </div>
        <div v-if="selectedBook?.image === 'future-garden.webp'" v-fit-text class="spread-description">
          <div class="spread-description-inner">
            <div class="spread-points">
              <p><strong>Кругосветная экспедиция прямо из сада:</strong> ты отправишься в путешествие по всем континентам вслед за семенами яблок, какао, кофе и кукурузы, чтобы узнать, откуда они родом.</p>
              <p><strong>Настоящая садовая магия и наука:</strong> французский садовод и знаток насекомых Жиль Клеман научит тебя «читать» погоду по облакам и предсказывать будущий урожай по жужжанию пчёл.</p>
              <p><strong>Мир будущего в ярких деталях:</strong> рассматривая красочные иллюстрации художника Венсана Граве, ты сможешь сам придумать и собрать удивительный сад для всей нашей планеты.</p>
            </div>
            <p class="spread-bibliography"><strong>Клеман, Жиль</strong> (французский ландшафтный архитектор ; 1943- ).<br />Сад будущего / текст Жиля Клемана ; иллюстрации Венсана Граве ; [перевод с французского Александры Соколинской] ; цветовое оформление Шарлин Колетт. - Москва : Ад Маргинем Пресс : ABCdesign, 2023. - [25] с. : цв. ил. - (А+А). - 0+. - <strong>ISBN&nbsp;</strong>978-5-91103-670-6 (в пер.). - <strong>ISBN&nbsp;</strong>978-5-4330-0202-9</p>
          </div>
        </div>
        <div v-if="selectedBook?.image === 'bianki.webp'" v-fit-text class="spread-description">
          <div class="spread-description-inner">
            <div class="spread-points">
              <p><strong>Лес выпускает собственные новости:</strong> это настоящая газета дикой природы, где каждый месяц полон сенсаций, срочных лесных телеграмм и забавных происшествий из жизни зверей и птиц.</p>
              <p><strong>Стань членом тайного «Клуба колумбов»:</strong> книга превращает тебя в первооткрывателя и учит самостоятельно замечать следы и разгадывать лесные шифры круглый год.</p>
              <p><strong>С этой книгой невозможно заскучать на природе:</strong> живые репортажи о том, кто проснулся, кто спрятался и как лес меняется каждый день.</p>
            </div>
            <p class="spread-bibliography"><strong>Бианки, В. В.</strong><br />Собрание сочинений в 4 т. Т. 3. Лесная газета. Клуб колумбов / В. В. Бианки. - Ленинград : Детская литература, 1975. - 462 с. : ил. - Б. ц.</p>
          </div>
        </div>
        <div v-if="selectedBook?.image === 'flowers.webp'" v-fit-text class="spread-description">
          <div class="spread-description-inner">
            <ol>
              <li><strong>Научит здороваться с цветами по имени:</strong> ты узнаешь, как на самом деле зовут привычные «желтые цветочки» и «колокольчики» у дома — от мышиного горошка до иван-да-марьи.</li>
              <li><strong>Работает как карманный гид-определитель:</strong> детальные и яркие рисунки художницы Анны Ритум помогут легко опознать каждое растение прямо во время прогулки.</li>
              <li><strong>Раскрывает тайны зеленых соседей:</strong> о каждом цветке во дворе здесь собраны самые любопытные и неочевидные факты.</li>
            </ol>
            <p class="spread-bibliography"><strong>Гюнтер, Евгения Евгеньевна.</strong><br /><strong>Как тебя зовут?</strong> [Текст] : все о цветах, живущих рядом с нами : [для детей дошкольного возраста] / Евгения Гюнтер ; художник Анна Ритум. - Москва : Пешком в историю, 2019. - [41] с. : цв. ил. - (Мир вокруг нас). - 0+. - <strong>ISBN&nbsp;</strong>978-5-906994-07-3 (в пер.) : Б. ц.</p>
          </div>
        </div>
        <div v-if="selectedBook?.image === 'plants-in-city.webp'" v-fit-text class="spread-description">
          <div class="spread-description-inner">
          <ol>
            <li><strong>Обычная прогулка превратится в квест:</strong> книга научит замечать городские растения-«супергерои», которые умудряются расти прямо сквозь асфальт, и разгадывать их секреты.</li>
            <li><strong>Написана настоящим исследователем природы:</strong> её автор изучает растения в университете и создаёт сады.</li>
            <li><strong>Никакой занудной теории — только практика:</strong> ты сразу узнаешь, мимо каких деревьев и трав проходишь по пути в школу каждый день.</li>
          </ol>
          <p class="spread-bibliography"><strong>Пескова, Ирина Михайловна.</strong><br />Растения в городе : [более 30 видов растений : для младшего и среднего школьного возраста] / Ирина Пескова ; иллюстрации Алены Амировой и Татьяны Дмитриевой. - Москва : АСТ : Аванта, 2023. - 61, [2] с. : цв. ил. - (Оглянись вокруг). - 0+. - <strong>ISBN&nbsp;</strong>978-5-17-150624-7 (в пер.) : Б. ц. - Текст. Изображение : непосредственные.</p>
          </div>
        </div>
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
.spread-description { position: absolute; inset: 64px 6% 6%; display: flex; align-items: center; overflow: hidden; padding: clamp(12px, 2vw, 32px); background: rgba(255, 255, 255, 0.9); border-radius: 12px; color: #273a1e; font: clamp(15px, 1.65vw, 26px)/1.5 var(--font-kurland); }
.spread-description ol { margin: auto 0; padding-left: 1.4em; }
.spread-description li + li { margin-top: 1em; }
.spread-points p { margin: 0; }
.spread-points p + p { margin-top: 1em; }
.spread-description-inner { margin-block: auto; width: 100%; }
.spread-bibliography { margin: 1.6em 0 0; font-size: 0.65em; line-height: 1.5; color: #475140; }
.spread-content img { display: block; width: auto; height: auto; max-width: 100%; max-height: calc(100dvh - 48px); object-fit: contain; box-shadow: 0 12px 50px #0006; }
.spread-close { position: absolute; z-index: 1; top: 8px; right: 8px; width: 40px; height: 40px; border: 0; border-radius: 50%; background: #fff; color: #222; font: 30px/1 sans-serif; cursor: pointer; box-shadow: 0 2px 10px #0004; }
.spread-close:focus-visible { outline: 3px solid #3b5d2a; outline-offset: 3px; }
.book-author { display: block; margin-top: 7px; font-size: clamp(12px, 1vw, 16px); }
.shelf-arrow { flex: 0 0 44px; width: 44px; height: 44px; border-radius: 50%; border: 2px solid #3b5d2a; background: transparent; color: #3b5d2a; font: 38px/32px sans-serif; cursor: pointer; padding: 0 0 4px; }
.shelf-arrow:hover { background: #3b5d2a; color: #f4df87; }
.shelf-arrow:focus-visible { outline: 3px solid #3b5d2a; outline-offset: 5px; }
@media (max-width: 850px) { .shelf-book { flex-basis: calc((100% - 70px) / 2); } }
@media (max-width: 600px) { .cover-space { height: 300px; } .book-shelf { padding-inline: 4%; } .shelf-row { gap: 12px; } .shelf-book { flex-basis: 100%; } }
</style>

