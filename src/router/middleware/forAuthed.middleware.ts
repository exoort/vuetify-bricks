import type { NavigationGuard } from 'vue-router';
import { useAuthService } from '../../features/auth';

export const forAuthedMiddleware: NavigationGuard = (to, from, next) => {
  if (!useAuthService().isAuthed.value) {
    return next({ path: '/' });
  }

  return next();
};
