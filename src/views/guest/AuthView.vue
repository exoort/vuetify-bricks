<script lang="ts" setup>
import { LoginForm } from '@/features/auth';
import GuestLayout from '@/shared/layouts/GuestLayout.vue';
</script>

<template>
  <GuestLayout>
    <v-row justify="center">

      <v-col
        cols="12"
        sm="8"
      >
        <v-card>
          <v-card-text>
            <LoginForm />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </GuestLayout>
</template>
