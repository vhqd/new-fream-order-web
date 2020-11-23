/**
 * 路由模块
 * @author chenmb
 * @since 2020/11/12
 */

import VueRouter from 'vue-router';
const User = () => import('views/user');
const Dashboard = () => import('views/dashboard');

export const routes = [
  {
    path: '/',
    redirect: '/dashboard',
  },
  {
    path: '/user',
    name: 'user',
    component: User,
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
