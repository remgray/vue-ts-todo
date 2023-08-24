<script lang="ts" setup>
import type { ITodosStat } from '@/types/todos';

defineProps<{ stat: ITodosStat }>();
</script>

<template>
  <footer class="app-footer">{{ stat.active }} more to do, {{ stat.done }} done</footer>
</template>
