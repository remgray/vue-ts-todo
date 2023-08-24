<script lang="ts" setup>
import type { ITodoItem } from '@/types/todos';
import { ref } from 'vue';

const isFormVisible = ref(false);
const todoText = ref('');

const toggleForm = () => (isFormVisible.value = !isFormVisible.value);

const emit = defineEmits<{
  (e: 'addTodo', todo: ITodoItem): void;
}>();

const addTodo = () => {
  if (todoText.value.trim().length > 0) {
    emit('addTodo', { id: +new Date(), title: todoText.value, completed: false });
    todoText.value = '';
  }
};
</script>

<template>
  <section class="add-todo">
    <form v-if="isFormVisible" @submit.prevent="addTodo" class="add-todo__form">
      <button @click="toggleForm" title="close" class="close-button" type="button">
        <i class="bi bi-x"></i>
      </button>
      <div class="text-input text-input--focus">
        <label for="input" style="display: none"></label>
        <input v-model="todoText" id="input" class="input" />
      </div>
      <button type="submit" class="button button--filled">Add task</button>
    </form>
    <button v-else @click="toggleForm" title="add" class="add-todo__show-form-button">
      <i class="bi bi-plus-lg"></i>
    </button>
  </section>
</template>
