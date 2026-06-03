<template>
  <div class="league-item" @click="$emit('card-click', league.id)">
    <strong>{{ league.name }}</strong> — {{ league.country }}
  </div>
</template>

<script setup>
// Принимаем объект лиги от родителя
defineProps({
  league: {
    type: Object,
    required: true
  }
});

// Регистрируем событие клика
defineEmits(['card-click']);
</script>

<style scoped>
/* Переносим стили карточки сюда */
.league-item {
  padding: 10px;
  border-bottom: 1px solid #eee;
  cursor: pointer;
  transition: background 0.2s ease;
}
.league-item:hover {
  background: #f5f5f5;
}
</style>