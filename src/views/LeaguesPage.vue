<template>
  <div>
    <input v-model="search" placeholder="Поиск лиги" />
    
    <LeagueCard 
      v-for="league in filteredLeagues"
      :key="league.id"
      :league="league"
      @card-click="handleLeagueClick"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
// 1. Импортируем useRouter для навигации
import { useRouter } from 'vue-router'
// 1. Импортируем наш новый компонент карточки
import LeagueCard from '../components/LeagueCard.vue'

// Инициализируем роутер внутри компонента
const router = useRouter()
const search = ref('')

// 2. Статические данные из вашего кода (уже готовы)
const leagues = ref([
  { id: 1, name: 'Premier League', country: 'Англия' },
  { id: 2, name: 'La Liga', country: 'Испания' },
  { id: 3, name: 'Bundesliga', country: 'Германия' }
])

const filteredLeagues = computed(() =>
  leagues.value.filter(l =>
    l.name.toLowerCase().includes(search.value.toLowerCase())
  )
)

// 3. Реализация клика с выводом alert, как просят в задании
const handleLeagueClick = (id) => {
  alert(`Выбран уникальный ID лиги: ${id}`)
  
  // Строку ниже пока оставляем закомментированной для проверки задания, 
  // но в будущем она вернет реальный переход по роутеру:
  router.push(`/league/${id}`)
}
</script>

<style scoped>
/* Стили карточки ушли в сам компонент LeagueCard.vue, 
   здесь можно оставить стили для инпута, если они понадобятся */
/* input {
  margin-bottom: 15px;
  padding: 8px;
  width: 100%;
  max-width: 300px;
} */
</style>



<!-- <template>
    <div>
        <input v-model="search" placeholder="Поиск лиги" />
    <div
    v-for="league in filteredLeagues"
        :key="league.id"
        @click="goToLeague(league.id)"
        class="league-item"
    >
    <strong>{{ league.name }}</strong> — {{ league.country }}
    </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const search = ref('')
const leagues = ref([
    { id: 1, name: 'Premier League', country: 'Англия' },
    { id: 2, name: 'La Liga', country: 'Испания' },
    { id: 3, name: 'Bundesliga', country: 'Германия' }
])

const filteredLeagues = computed(() =>
    leagues.value.filter(l =>
        l.name.toLowerCase().includes(search.value.toLowerCase())
    )
)

const goToLeague = (id) => {
    router.push(`/league/${id}`) // Переходим на маршрут /league/:id
}
// const goToLeague = (id) => {
//     alert(`Переход на календарь лиги ${id}`)
//     // Здесь позже будет router.push
// }
</script>

<style scoped>
.league-item {
padding: 10px;
border-bottom: 1px solid #eee;
cursor: pointer;
}
.league-item:hover {
background: #f5f5f5;
}
</style> -->