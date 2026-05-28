<template>
  <div id="app">
    <!-- Здесь будут отображаться страницы в зависимости от URL -->
    <RouterView />
  </div>
</template>

<script setup>
  // Ничего дополнительного не требуется - RouterView уже глобально доступен
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
}
#app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
</style>

<!-- <template>
  <div>
    <MatchCard
      home-team="Зенит"
      away-team="Спартак"
      :home-score="2"
      :away-score="1"
      status="FINISHED"
      @match-click="showMatchDetails"
    />
    <MatchCard
      home-team="Реал"
      away-team="Барселона"
      :home-score="0"
      :away-score="0"
      status="LIVE"
      @match-click="showMatchDetails"
    />
  </div>
  <Leagues />
</template>

<script setup>
 import MatchCard from './components/MatchCard.vue'
 import Leagues from './views/LeaguesPage.vue/index.js';

 const showMatchDetails = (match) => {
alert(`Матч: ${match.homeTeam} - ${match.awayTeam}`)
}

</script>

<style>
   h1 {
    color: #2c3e50;
  }
  button {
    background: #42b983;
    color: white;
    border: none;
    padding: 10px;
  } 
</style> -->
