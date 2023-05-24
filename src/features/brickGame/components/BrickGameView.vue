<script setup lang="ts">
import { computed } from 'vue';
import BrickGameSquare from './BrickGameSquare.vue';

const props = defineProps<{
  sizeX: number,
  sizeY: number,
}>();

const bricks = computed(() => Array(props.sizeY).fill(0).map(
  () => Array(props.sizeX).fill(0),
));
</script>

<template>
  <v-row>
    <v-col cols="12">
      <div class="overflow-auto">
        <div
          class="d-inline-flex"
          v-for="(bricksLine, y) in bricks"
          :key="y"
        >
          <BrickGameSquare
            v-for="(_, x) in bricksLine"
            :key="`${y}_${x}`"
            :x="x"
            :y="y" />
        </div>
      </div>
    </v-col>
  </v-row>

</template>
