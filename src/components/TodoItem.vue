<script lang="ts" setup>
import type { ITodoItem } from '@/types/todos';
import { toRef } from 'vue';

const props = defineProps<{ todo: ITodoItem }>();
const todo = toRef(props.todo);

const emit = defineEmits<{
  (e: 'toggleTodo', id: number): void;
  (e: 'removeTodo', id: number): void;
}>();
</script>

<template>
  <li
    @click="emit('toggleTodo', todo.id)"
    class="todo-item"
    :class="{ 'todo-item--done': todo.completed }"
  >
    <div class="todo-item__status">
      <i class="bi bi-check2"></i>
    </div>
    <span class="todo-item__text"> {{ todo.title }} </span>
    <button
      @click.stop="emit('removeTodo', todo.id)"
      title="Delete"
      class="todo-item__remove-button"
    >
      <i class="bi bi-trash3"></i>
    </button>
  </li>
</template>
