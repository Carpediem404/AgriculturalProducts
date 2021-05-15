import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../pages/home.vue';
import GreenHouse from '../pages/green-house/index.vue';
import Agriculture from '../pages/agriculture/index.vue';
import Device from '../pages/device-manage/index.vue';
const routes = [
  {
    path: '/',
    component: Home,
    meta: {
      index: 0,
    },
    children: [
      {
        path: '/green-house',
        component: GreenHouse,
      },
      {
        path: '/agriculture-manage',
        component: Agriculture,
      },
      {
        path: '/device-manage',
        component: Device,
      },
    ],
  },
];
const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  //采用hash模式
  // hash: createWebHashHistory(),
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
