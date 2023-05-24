<script setup lang="ts">
import { inject, ref } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { email, required, minLength } from '@vuelidate/validators';
import { AUTH_SERVICE_INJECTION } from '@/features/auth/constants';
import { IAuthService } from '@/features/auth/types';

const authService = inject<IAuthService>(AUTH_SERVICE_INJECTION);

const state = ref({
  email: '',
  password: '',
});

const rules = {
  email: {
    required,
    email,
  },
  password: {
    required,
    minLength: minLength(6),
  },
};

const v$ = useVuelidate(rules, state);

function onFormSubmit() {
  if (v$.value.$validate()) {
    authService?.login();
  }
}
</script>

<template>
  <form @submit.prevent="onFormSubmit">
    <v-text-field
      v-model="state.email"
      :error-messages="v$.email.$errors.map(e => e.$message)"
      label="E-mail"
      type="email"
      required
      @input="v$.email.$touch"
      @blur="v$.email.$touch"
    />

    <v-text-field
      v-model="state.password"
      :error-messages="v$.password.$errors.map(e => e.$message)"
      label="Password"
      required
      type="password"
      @input="v$.password.$touch"
      @blur="v$.password.$touch"
    />

    <v-btn
      type="submit"
      class="me-4"
    >
      Login
    </v-btn>
  </form>
</template>>
