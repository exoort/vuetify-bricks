<script setup lang="ts">
import { computed, ref } from 'vue';

const COLORS = ['white', 'blue'];

const props = defineProps<{
  x: number,
  y: number,
}>();

const dataTestLabel = computed(() => `${props.x}_${props.y}`);

const currentColorClass = ref(COLORS[0]);

function onHover() {
  const currentColorIndex = COLORS.indexOf(currentColorClass.value);

  currentColorClass.value = COLORS[currentColorIndex + 1] || COLORS[0];
}
</script>

<template>
  <div
    class="brick-game-square"
    :data-test="dataTestLabel"
    :class="currentColorClass"
    @mouseover="onHover"
    @focusin="onHover"
  />
</template>

<style>
.brick-game-square {
  width: 36px;
  height: 36px;
  cursor: pointer;
}

.white {
  background-color: #fff;
}

.blue {
  background-color: blue;
}
</style>
