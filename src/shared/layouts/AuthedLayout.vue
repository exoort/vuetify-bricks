<script lang="ts" setup>
import { inject } from 'vue';
import { AUTH_SERVICE_INJECTION } from '@/features/auth';
import type { IAuthService } from '@/features/auth';

const authService = inject<IAuthService>(AUTH_SERVICE_INJECTION);
</script>

<template>
  <v-container>
    <v-row>
      <h1 class="text-h5">Brick game</h1>

      <v-spacer />
      <v-btn
        color="red"
        @click="authService?.logout()">Logout</v-btn>
    </v-row>

    <slot />
  </v-container>
</template>
