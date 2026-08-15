<script setup>
import { ref } from 'vue'
import LocationCard from './LocationCard.vue'

const expandedId = ref(1) // Location 1 is expanded by default

const toggleLocation = (id) => {
  expandedId.value = expandedId.value === id ? null : id
}

const locations = [
  {
    number: 1,
    title: 'Сквер Георга Отса (Большая Пороховская ул., 33)',
    shortText: '',
    description: 'Сквер основан в 2019 году и назван в честь певца Георга Отса, родившегося здесь в 1920 году.\n\nРаньше на этом месте стоял деревянный дом его семьи, сгоревший в войну. В сквере установлен администрацией Красногвардейского района фонтан «Ретвизан» с кораблём.\n\nЗдесь растут липы, клёны и сирень. На клумбах цветут тюльпаны, нарциссы, бархатцы, петунии, шиповник и бегонии.',
    notices: ['фонтан «Ретвизан»\nклумбы с цветами'],
    facts: ['Раньше на этом месте стоял деревянный дом его семьи, сгоревший в войну.'],
    image: '/assets/bf85102eeb1fb0f65fcc7f7675a549286a7592aa.webp',
    useBrushTitle: true,
    column: 'left',
  },
  {
    number: 2,
    title: 'Сквер «Мама» (Синявинская ул., 6)',
    shortText: 'Сквер открыли в сентябре 2018 года. Его украшает скульптура Вадима Цыганова: мама с ребёнком на мосту и волшебный кот Елисей...',
    description: '',
    useBrushTitle: true,
    column: 'right',
  },
  {
    number: 3,
    title: 'Георгиевский сквер (Среднеохтинский пр.)',
    shortText: 'Георгиевский сквер площадью 1,9 га расположен на Среднеохтинском. Своё имя, официально присвоенное в 2017 году...',
    description: '',
    useBrushTitle: true,
    column: 'left',
  },
  {
    number: 4,
    title: 'Гурдин сквер (Среднеохтинский пр., д. 8)',
    shortText: 'Примыкает к Центральной районной библиотеке имени Н. В. Гоголя. Сквер площадью — 0,3 гектара расположен между...',
    description: '',
    useBrushTitle: true,
    column: 'right',
  },
  {
    number: 5,
    title: 'Большеохтинский сквер (Большеохтинский пр.)',
    shortText: 'В начале Большеохтинского проспекта расположен уютный Большеохтинский сквер. Главная его достопримечательность...',
    description: '',
    useBrushTitle: true,
    column: 'left',
  },
  {
    number: 6,
    title: 'Детская библиотека № 4 (Большая Пороховская ул., д. 12/34)',
    shortText: 'Детская библиотека № 4, открытая в 1956 году, сегодня работает как семейный центр игротерапии и краеведения...',
    description: '',
    hasLogo: true,
    useBrushTitle: false,
    column: 'right',
  },
  {
    number: 7,
    title: 'Особняк купца Иванова П. И. (Большая Пороховская, д. 18)',
    shortText: 'Особняк Павла Иванова на Большой Пороховской улице — яркий образец модерна на Охте, построенный в 1901 году...',
    description: '',
    hasLogo: true,
    useBrushTitle: false,
    column: 'left',
  },
  {
    number: 8,
    title: 'Большеохтинское кладбище (пр. Металлистов, 5)',
    shortText: 'Это самое большое кладбище в Санкт-Петербурге площадью 63 гектара, основанное в 1727 году как Георгиевское...',
    description: '',
    hasLogo: true,
    useBrushTitle: false,
    column: 'right',
  },
]

const leftLocations = locations.filter(l => l.column === 'left')
const rightLocations = locations.filter(l => l.column === 'right')
</script>

<template>
  <section class="relative w-full bg-beige/60 py-16">
    <!-- Decorative wavy SVG top border -->
    <div class="absolute top-0 left-0 w-full overflow-hidden leading-none -translate-y-[1px]">
      <svg viewBox="0 0 1920 120" preserveAspectRatio="none" class="w-full h-[80px]">
        <path d="M0,120 L0,60 Q480,0 960,60 Q1440,120 1920,60 L1920,120 Z" fill="#F4E2D0" fill-opacity="0.6"/>
      </svg>
    </div>

    <div class="max-w-[1920px] mx-auto px-[5%]">
      <!-- Two-column grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-4">
        <!-- Left column -->
        <div>
          <LocationCard
            v-for="loc in leftLocations"
            :key="loc.number"
            :number="loc.number"
            :title="loc.title"
            :short-text="loc.shortText"
            :description="loc.description"
            :notices="loc.notices || []"
            :facts="loc.facts || []"
            :image="loc.image || ''"
            :has-logo="loc.hasLogo || false"
            :use-brush-title="loc.useBrushTitle"
            :is-expanded="expandedId === loc.number"
            @toggle="toggleLocation"
          />
        </div>

        <!-- Right column -->
        <div>
          <LocationCard
            v-for="loc in rightLocations"
            :key="loc.number"
            :number="loc.number"
            :title="loc.title"
            :short-text="loc.shortText"
            :description="loc.description"
            :notices="loc.notices || []"
            :facts="loc.facts || []"
            :image="loc.image || ''"
            :has-logo="loc.hasLogo || false"
            :use-brush-title="loc.useBrushTitle"
            :is-expanded="expandedId === loc.number"
            @toggle="toggleLocation"
          />
        </div>
      </div>
    </div>
  </section>
</template>
