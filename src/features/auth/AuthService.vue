<script setup lang="ts">
import { provide } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthService } from '@/features/auth/useAuthService';
import { AUTH_SERVICE_INJECTION } from '@/features/auth/constants';
import { IAuthService } from '@/features/auth/types';

const router = useRouter();

function login() {
  useAuthService().setIsAuthed(true);

  router.push('/game/bricks');
}

function logout() {
  useAuthService().setIsAuthed(false);

  router.push('/');
}

provide<IAuthService>(AUTH_SERVICE_INJECTION, {
  login,
  logout,
});
</script>

<template>
  <slot />
</template>
