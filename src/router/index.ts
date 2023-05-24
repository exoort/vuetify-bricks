// Composables
import { createRouter, createWebHistory } from 'vue-router';
import { forAuthedMiddleware } from './middleware/forAuthed.middleware';
import { forGuestMiddleware } from './middleware/forGuest.middleware';
import NotFoundView from '../views/NotFoundView.vue';

const routes = [
  {
    path: '/',
    // component: () => import('@/layouts/default/Default.vue'),
    beforeEnter: [forGuestMiddleware],
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/guest/AuthView.vue'),
      },
    ],
  },
  {
    path: '/game',
    // component: () => import('@/layouts/default/Default.vue'),
    beforeEnter: [forAuthedMiddleware],
    children: [
      {
        path: 'bricks',
        name: 'bricks-game',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/authed/BrickGaveView.vue'),
      },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFoundView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
