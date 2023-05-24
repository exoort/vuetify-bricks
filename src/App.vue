<script setup lang="ts">
import { AuthService } from './features/auth';
</script>

<template>
  <v-app
    id="inspire"
    theme="dark">
    <AuthService>
      <v-main class="bg-grey-lighten-3">
        <RouterView />
      </v-main>
    </AuthService>
  </v-app>
</template>
