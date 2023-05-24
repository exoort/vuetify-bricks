import { computed } from 'vue';
import { createSharedComposable, useLocalStorage } from '@vueuse/core';

const composable = () => {
  const privateIsAuthed = useLocalStorage('isAuthed', false);

  const isAuthed = computed(() => privateIsAuthed.value);

  function setIsAuthed(value: boolean) {
    privateIsAuthed.value = value;
  }

  return {
    isAuthed,
    setIsAuthed,
  };
};

export const useAuthService = createSharedComposable(composable);
