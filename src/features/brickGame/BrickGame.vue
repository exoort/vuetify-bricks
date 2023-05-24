<script setup lang="ts">
import { ref } from 'vue';
import BrickGameSetup from './components/BrickGameSetup.vue';
import BrickGameView from './components/BrickGameView.vue';

const sizeX = ref<number>();
const sizeY = ref<number>();
</script>

<template>
  <BrickGameSetup
    v-model:size-x="sizeX"
    v-model:size-y="sizeY"
  />

  <BrickGameView
    v-if="sizeX && sizeY"
    :key="`game-${sizeX}-${sizeY}`"
    :size-x="sizeX"
    :size-y="sizeY"
  />
</template>
