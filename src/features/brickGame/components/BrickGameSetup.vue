<script setup lang="ts">
import { useVModel } from '@vueuse/core';

const props = defineProps<{
  sizeX?: number,
  sizeY?: number,
}>();

const emit = defineEmits<{
  (e: 'update:sizeX', value?: number): void,
  (e: 'update:sizeY', value?: number): void,
}>();

const sizeXModel = useVModel(props, 'sizeX', emit);
const sizeYModel = useVModel(props, 'sizeY', emit);
</script>

<template>
  <v-row>
    <v-col
      cols="12"
      sm="4"
    >
      <v-text-field
        v-model.number.lazy="sizeXModel"
        label="Size X"
        type="number"
        :clearable="true"
      />
    </v-col>

    <v-col
      cols="12"
      sm="4"
    >
      <v-text-field
        v-model.number.lazy="sizeYModel"
        label="Size Y"
        type="number"
        :clearable="true"
      />
    </v-col>
  </v-row>
</template>
