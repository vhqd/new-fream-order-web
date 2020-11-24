import Layout from 'components/layout/index';
import orderDetail from './order-detail'; //订单详情

const routers = [
  {
    path: '/',
    name: 'Home',
    redirect: '/home',
    meta: {
      title: '主页',
      icon: 'home',
      active: '/home',
      keepAlive: true,
      isHidden: true,
    },
    component: Layout,
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          title: '首页',
          icon: 'home',
          active: '/home',
          keepAlive: true,
        },
        component: () => import('views/home/index.vue'),
      },
      {
        path: '/order/list',
        name: 'order',
        meta: {
          title: '订单列表',
          active: '/order/list',
          keepAlive: true,
        },
        component: () => import('views/order/index.vue'),
      },
      orderDetail,
      {
        path: '/order/customer',
        name: 'customer',
        meta: {
          title: '客户单详情',
          active: '/order/customer',
          keepAlive: true,
        },
        component: () => import('views/order/detail-customer.vue'),
      },
      {
        path: '/order/setting',
        name: 'setting',
        meta: {
          title: '订单列表',
          active: '/order/setting',
          keepAlive: true,
        },
        component: () => import('views/order/setting.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录',
      isHidden: true,
      keepAlive: true,
    },
    component: () => import('views/Login.vue'),
  },
];

export default routers;
