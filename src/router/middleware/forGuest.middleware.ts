import type { NavigationGuard } from 'vue-router';
import { useAuthService } from '../../features/auth';

export const forGuestMiddleware: NavigationGuard = (to, from, next) => {
  if (useAuthService().isAuthed.value) {
    return next({ path: '/game/bricks' });
  }

  return next();
};
