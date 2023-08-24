<script lang="ts" setup>
import type { TodoFiltersType, TodoFiltersList } from '@/types/todos';

const props = defineProps<{ activeFilter: TodoFiltersType }>();
const emit = defineEmits<{
  (e: 'setFilter', filter: TodoFiltersType): void;
}>();

const filters: TodoFiltersList = ['All', 'Active', 'Done'];
</script>

<template>
  <aside class="app-filters">
    <section class="toggle-group">
      <button
        v-for="(filter, idx) in filters"
        @click="emit('setFilter', filter)"
        class="button"
        :key="idx"
        :class="{ 'button--primary': props.activeFilter === filter }"
      >
        {{ filter }}
      </button>
    </section>
  </aside>
</template>
