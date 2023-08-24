<script lang="ts" setup>
import TodoItem from '@/components/TodoItem.vue';
import type { ITodosState } from '@/types/todos';

const props = defineProps<ITodosState>();

const emit = defineEmits<{
  (e: 'toggleTodo', id: number): void;
  (e: 'removeTodo', id: number): void;
}>();

const toggleTodo = (id: number) => {
  emit('toggleTodo', id);
};
const removeTodo = (id: number) => {
  emit('removeTodo', id);
};
</script>
<template>
  <ul class="todo-list">
    <TodoItem
      @toggle-todo="toggleTodo"
      @remove-todo="removeTodo"
      v-for="todo in props.todos"
      :todo="todo"
      :key="todo.id"
    />
  </ul>
</template>
