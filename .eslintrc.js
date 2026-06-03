module.exports = {
  root: true,
  env: {
    node: true,
    'vue/setup-compiler-macros': true  // Добавьте эту строку
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    // ваши правила
  },
  globals: {
    defineProps: 'readonly',  // Или добавьте глобальные переменные
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly'
  }
}