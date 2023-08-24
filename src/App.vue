<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue';
import TodoFilters from '@/components/TodoFilters.vue';
import TheFooter from '@/components/TheFooter.vue';
import TodoList from '@/components/TodoList.vue';
import AddTodo from '@/components/AddTodo.vue';
import type { ITodoItem, ITodosState, TodoFiltersType } from './types/todos';
import { computed, reactive, ref, type Ref } from 'vue';

const data: ITodosState = reactive({
  todos: [
    { id: 1, title: 'First todo text', completed: true },
    { id: 2, title: 'Second todo text', completed: false },
    { id: 3, title: 'Third todo text', completed: false },
    { id: 4, title: 'Fourth todo text', completed: false },
    { id: 5, title: 'Fifth todo text', completed: false },
  ],
});

const activeFilterValue: Ref<TodoFiltersType> = ref('All');

const addTodo = (todo: ITodoItem) => {
  data.todos.push(todo);
};

const toggleTodo = (id: number) => {
  const targetTodo = data.todos.find((todo) => todo.id === id);

  if (targetTodo) {
    targetTodo.completed = !targetTodo.completed;
  }
};

const removeTodo = (id: number) => {
  if (id) {
    const targetTodo = data.todos.find((todo) => todo.id === id);
    if (targetTodo) {
      const todoPos = data.todos.indexOf(targetTodo);
      data.todos.splice(todoPos, 1);
    }
  }
};

const setFilter = (filter: TodoFiltersType) => {
  activeFilterValue.value = filter;
};

const activeTodos = computed(() => {
  return data.todos.filter((todo) => !todo.completed);
});

const doneTodos = computed(() => {
  return data.todos.filter((todo) => todo.completed);
});

const filteredTodos = computed(() => {
  switch (activeFilterValue.value) {
    case 'Active':
      return activeTodos.value;
    case 'Done':
      return doneTodos.value;
    case 'All':
    default:
      return data.todos;
  }
});

const stat = computed(() => {
  return {
    active: activeTodos.value.length,
    done: doneTodos.value.length,
  };
});
</script>

<template>
  <TheHeader />
  <TodoFilters @set-filter="setFilter" :activeFilter="activeFilterValue" />
  <main class="app-main">
    <TodoList :todos="filteredTodos" @toggle-todo="toggleTodo" @remove-todo="removeTodo" />
    <AddTodo @add-todo="addTodo" />
  </main>
  <TheFooter :stat="stat" />
</template>

<style scoped></style>
